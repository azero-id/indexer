import { KnownArchives, lookupArchive } from '@subsquid/archive-registry'
import {
  DataHandlerContext,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
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
import { logger } from './utils/logger'

export type EventWithMeta<T> = {
  event: T
  id: string
  timestamp: Date
  fee: bigint
  blockHash: string
  extrinsicId: string
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
      : lookupArchive(process.env.ARCHIVE as KnownArchives, { release: 'ArrowSquid' })

  // Determine RPC URL (use Subsquid's RPC Proxy if available and no process.env.RPC is set)
  // See: https://docs.subsquid.io/deploy-squid/rpc-proxy/
  let rpcUrl = process.env.RPC
  if (!rpcUrl && process.env.CHAIN === 'alephzero') rpcUrl = process.env.RPC_ALEPH_ZERO_HTTP
  else if (!rpcUrl && process.env.CHAIN === 'alephzero-testnet')
    rpcUrl = process.env.RPC_ALEPH_ZERO_TESTNET_HTTP
  if (!rpcUrl) throw new Error('`RPC` environment variable is not set.')
  const chain = { url: rpcUrl, rateLimit: 10 }

  // Create processor
  logger.info('Starting processor with:', { archive, chain })
  const processor = new SubstrateBatchProcessor()
    .setDataSource({ archive, chain })
    .setBlockRange({ from: registryDeployment.blockNumber })
    .addContractsContractEmitted({
      contractAddress: [registryDeployment.addressHex, giveawayDeployment.addressHex],
      extrinsic: true,
    })
    .setFields({
      block: {
        timestamp: true,
      },
      extrinsic: {
        fee: true,
        hash: true,
      },
      event: {
        args: true,
      },
    })

  // Helper types
  type Fields = SubstrateBatchProcessorFields<typeof processor>
  type ProcessorContext<Store> = DataHandlerContext<Store, Fields>

  // Helper function to extract contract events
  const extractContractEvents = <T>(
    ctx: ProcessorContext<Store>,
    contractAddress: string,
    decodeEvent: (hex: string) => T,
  ) => {
    const events: EventWithMeta<T>[] = []
    for (const block of ctx.blocks) {
      for (const event of block.events) {
        if (
          event.name === 'Contracts.ContractEmitted' &&
          event.args.contract === contractAddress &&
          event.extrinsic?.id
        ) {
          events.push({
            event: decodeEvent(event.args.data),
            id: event.id,
            timestamp: new Date((block.header as any).timestamp),
            fee: (event.extrinsic as any)?.fee || 0n,
            blockHash: block.header.hash,
            extrinsicId: event.extrinsic.id,
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
