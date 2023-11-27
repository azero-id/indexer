import dayjs from 'dayjs'
import { ContractIds, getContractDeployment } from '../deployments'
import * as domainGiveaway from '../deployments/domain_giveaway/generated/domain_giveaway'
import { GiveawayCoupon } from '../model'
import { EventProcessorFn, EventWithMeta } from '../processor'
import { ss58Encode } from '../utils/ss58Encode'

/**
 * Process giveaway coupons.
 */
export const processGiveawayCoupons: EventProcessorFn<domainGiveaway.Event> = async (
  store,
  giveawayEvents,
  giveawayDeployment,
) => {
  const tld = (await getContractDeployment(ContractIds.Registry)).tld

  // Process coupon reservations
  const reservedEvents = giveawayEvents.filter(
    ({ event }) => event.__kind === 'Reserved',
  ) as EventWithMeta<domainGiveaway.Event_Reserved>[]

  const couponEntitiesToAdd: GiveawayCoupon[] = []
  for (const { event, timestamp, id } of reservedEvents) {
    console.log(event)
    const name = event.name
    const publicCode = event.coupon
    const reservedAt = timestamp

    // Insert coupon
    couponEntitiesToAdd.push(
      new GiveawayCoupon({
        id,
        tld,
        name,
        publicCode,
        reservedAt,
        claimedBy: undefined,
        claimedAt: undefined,
        claimDurationInSeconds: undefined,
      } satisfies GiveawayCoupon),
    )
  }

  // Insert coupons
  if (couponEntitiesToAdd?.length) {
    await store.insert(couponEntitiesToAdd)
    console.log('Reserved Coupons:', couponEntitiesToAdd)
  }

  // Process coupon claims
  const claimedEvents = giveawayEvents.filter(
    ({ event }) => event.__kind === 'Claimed',
  ) as EventWithMeta<domainGiveaway.Event_Claimed>[]

  const couponEntitiesToUpdate: GiveawayCoupon[] = []
  for (const { event, timestamp, id } of claimedEvents) {
    console.log(event)
    const publicCode = event.coupon
    const claimedBy = ss58Encode(event.claimedBy)
    const claimedAt = timestamp

    // Find coupon
    const existingCoupon = await store.findOne(GiveawayCoupon, {
      where: {
        publicCode,
        tld,
        claimedAt: undefined,
      },
    })
    if (!existingCoupon) continue

    // Update coupon
    const claimDurationInSeconds = dayjs(claimedAt).diff(existingCoupon.reservedAt, 'seconds')
    couponEntitiesToUpdate.push(
      new GiveawayCoupon({
        ...existingCoupon,
        claimedAt,
        claimedBy,
        claimDurationInSeconds,
      } satisfies GiveawayCoupon),
    )
  }

  // Update coupons
  if (couponEntitiesToUpdate?.length) {
    await store.upsert(couponEntitiesToUpdate)
    console.log('Claimed Coupons:', couponEntitiesToUpdate)
  }
}
