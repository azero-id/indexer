import { EventProcessorFn, EventWithMeta } from 'src/processor'
import * as aznsRegistry from '../deployments/azns_registry/generated/azns_registry'
import { Referral } from '../model'
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

  for (const { event, timestamp, id } of feeReceivedEvents) {
    if (!event.referrer) continue
    console.log(event)

    const tld = registryDeployment.tld
    const name = event.name
    const address = ss58Encode(event.from)
    const referrerName = event.referrer
    const referrerAddress = ss58Encode(event.referrerAddr)
    const referralAmount = event.forwardedReferrerFee
    const receivedFeeAmount = event.receivedFee
    const referredAt = timestamp

    if (!address || !referrerAddress) continue

    // Insert referral
    const referral = new Referral({
      id,
      tld,
      name,
      address,
      referrerName,
      referrerAddress,
      referralAmount,
      receivedFeeAmount,
      referredAt,
    } satisfies Referral)
    await store.insert(referral)
    console.log('Added Referral:', referral)
  }
}
