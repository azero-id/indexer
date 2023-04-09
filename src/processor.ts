import { KnownArchives, lookupArchive } from '@subsquid/archive-registry'
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { ContractIds, getContractAddress } from './deployments'
import * as aznsRegistry from './deployments/azns_registry/generated/azns_registry'
import { processReservations } from './processors/processReservations'

const main = async () => {
  // Determine contract addresses
  const registryAddress = await getContractAddress(ContractIds.Registry, true)

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
    .setBlockRange({ from: 0 })
    .setDataSource({
      chain: process.env.RPC,
      archive: archive,
    })
    .addContractsContractEmitted(registryAddress, {
      data: {
        event: { args: true },
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
    const events: T[] = []
    for (const block of ctx.blocks) {
      for (const item of block.items) {
        if (
          item.name === 'Contracts.ContractEmitted' &&
          item.event.args.contract === contractAddress
        ) {
          const event = decodeEvent(item.event.args.data)
          events.push(event)
        }
      }
    }
    return events
  }

  // Process batches of blocks
  processor.run(new TypeormDatabase(), async (ctx) => {
    const registryEvents = extractContractEvents<aznsRegistry.Event>(
      ctx,
      registryAddress,
      aznsRegistry.decodeEvent,
    )

    // Process domain reservations
    await processReservations(ctx.store, registryEvents)
  })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
