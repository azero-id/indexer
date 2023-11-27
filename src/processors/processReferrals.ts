import { EventProcessorFn, EventWithMeta } from 'src/processor'
import * as aznsRegistry from '../deployments/azns_registry/generated/azns_registry'
import { Referral } from '../model'
import { logger } from '../utils/logger'
import { ss58Encode } from '../utils/ss58Encode'

/**
 * Process domain referrals.
 */
export const processReferrals: EventProcessorFn<aznsRegistry.Event> = async (
  store,
  registryEvents,
  registryDeployment,
) => {
  const feeReceivedEvents = registryEvents.filter(
    ({ event }) => event.__kind === 'FeeReceived',
  ) as EventWithMeta<aznsRegistry.Event_FeeReceived>[]
  const tld = registryDeployment.tld

  const referralEntities: Referral[] = []
  for (const { event, timestamp, id } of feeReceivedEvents) {
    if (!event.referrer) continue
    logger.debug(event)

    const name = event.name
    const address = ss58Encode(event.from)
    const referrerName = event.referrer
    const referrerAddress = ss58Encode(event.referrerAddr)
    const referralAmount = event.forwardedReferrerFee
    const receivedFeeAmount = event.receivedFee
    const referredAt = timestamp

    if (!address || !referrerAddress) continue

    // Creating referral
    referralEntities.push(
      new Referral({
        id,
        tld,
        name,
        address,
        referrerName,
        referrerAddress,
        referralAmount,
        receivedFeeAmount,
        referredAt,
      } satisfies Referral),
    )
  }

  // Inserting referrals
  if (referralEntities?.length) {
    await store.insert(referralEntities)
    logger.debug('Added Referrals:', referralEntities)
  }
}
