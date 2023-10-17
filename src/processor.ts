import { KnownArchives, lookupArchive } from '@subsquid/archive-registry'
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { ContractDeployment, ContractIds, getContractDeployment } from './deployments'
import * as aznsRegistry from './deployments/azns_registry/generated/azns_registry'
import * as domainGiveaway from './deployments/domain_giveaway/generated/domain_giveaway'
import { processDomains } from './processors/processDomains'
import { processGiveawayCoupons } from './processors/processGiveawayCoupons'
import { processPublicPhaseActivation } from './processors/processPublicPhaseActivation'
import { processReceivedFees } from './processors/processReceivedFees'
import { processReferrals } from './processors/processReferrals'
import { processReservations } from './processors/processReservations'

export type EventWithMeta<T> = {
  event: T
  id: string
  timestamp: Date
  fee: bigint
  blockHash: string
}
export type EventProcessorFn<T> = (
  store: Store,
  registryEvents: EventWithMeta<T>[],
  registryDeployment: ContractDeployment,
) => Promise<void>

/**
 * Main entry point of the processor.
 */
const main = async () => {
  // Determine contract addresses
  const registryDeployment = await getContractDeployment(ContractIds.Registry)
  const giveawayDeployment = await getContractDeployment(ContractIds.DomainGiveaway)

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
    .setBlockRange({ from: registryDeployment.blockNumber })
    .setDataSource({
      chain: process.env.RPC,
      archive: archive,
    })
    .addContractsContractEmitted(registryDeployment.addressHex, {
      data: {
        event: {
          args: true,
          extrinsic: {
            fee: true,
          },
        },
      },
    } as const)
    .addContractsContractEmitted(giveawayDeployment.addressHex, {
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
            blockHash: block.header.hash,
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
      registryDeployment.addressHex,
      aznsRegistry.decodeEvent,
    )

    // Process active phase (whitelist → public)
    await processPublicPhaseActivation(ctx.store, registryEvents, registryDeployment)

    // Process domains
    await processDomains(ctx.store, registryEvents, registryDeployment)

    // Process referrals
    await processReferrals(ctx.store, registryEvents, registryDeployment)

    // Process domain reservations
    await processReservations(ctx.store, registryEvents, registryDeployment)

    // Process received fees
    await processReceivedFees(ctx.store, registryEvents, registryDeployment)

    // Process giveaway coupons
    const giveawayEvents = extractContractEvents<domainGiveaway.Event>(
      ctx,
      giveawayDeployment.addressHex,
      domainGiveaway.decodeEvent,
    )
    await processGiveawayCoupons(ctx.store, giveawayEvents, giveawayDeployment)
  })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
