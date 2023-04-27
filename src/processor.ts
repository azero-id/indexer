import { KnownArchives, lookupArchive } from '@subsquid/archive-registry'
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { ContractIds, getContractAddress } from './deployments'
import * as aznsRegistry from './deployments/azns_registry/generated/azns_registry'
import { processDomains } from './processors/processDomains'
import { processPublicPhaseActivation } from './processors/processPublicPhaseActivation'
import { processReservations } from './processors/processReservations'

export type EventWithMeta<T> = { event: T; id: string; timestamp: Date; fee: bigint }

const main = async () => {
  // Determine contract addresses
  const aznsRegistryDeployment = await getContractAddress(ContractIds.Registry, true)

  // Determine Subquid Archive URL
  if (process.env.CHAIN !== 'development' && !process.env.ARCHIVE) {
    throw new Error('`ARCHIVE` environment variable is not set.')
  }
  const archive =
    process.env.CHAIN === 'development'
      ? `http://localhost:${process.env.ARCHIVE_GATEWAY_PORT}/graphql`
      : lookupArchive(process.env.ARCHIVE as KnownArchives)

  // Create processor
  const processor = new SubstrateBatchProcessor()
    .setBlockRange({ from: aznsRegistryDeployment.blockNumber })
    .setDataSource({
      chain: process.env.RPC,
      archive: archive,
    })
    .addContractsContractEmitted(aznsRegistryDeployment.addressHex, {
      data: {
        event: {
          args: true,
          extrinsic: {
            fee: true,
          },
        },
      },
    } as const)

  // Helper types
  type Item = BatchProcessorItem<typeof processor>
  type Ctx = BatchContext<Store, Item>

  // Helper function to extract contract events
  const extractContractEvents = <T>(
    ctx: Ctx,
    contractAddress: string,
    decodeEvent: (hex: string) => T,
  ) => {
    const events: EventWithMeta<T>[] = []
    for (const block of ctx.blocks) {
      for (const item of block.items) {
        if (
          item.kind === 'event' &&
          item.name === 'Contracts.ContractEmitted' &&
          item.event.args.contract === contractAddress
        ) {
          const event = decodeEvent(item.event.args.data)
          events.push({
            event,
            id: item.event.id,
            timestamp: new Date(block.header.timestamp),
            fee: item.event.extrinsic?.fee || 0n,
          })
        }
      }
    }
    return events
  }

  // Process batches of blocks
  processor.run(new TypeormDatabase(), async (ctx) => {
    const registryEvents = extractContractEvents<aznsRegistry.Event>(
      ctx,
      aznsRegistryDeployment.addressHex,
      aznsRegistry.decodeEvent,
    )

    // Process active phase (whitelist → public)
    await processPublicPhaseActivation(ctx.store, registryEvents)

    // Process domains
    await processDomains(ctx.store, registryEvents)

    // Process domain reservations
    await processReservations(ctx.store, registryEvents)
  })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
