import { Query, Resolver } from 'type-graphql'
import { IsNull, Not, type EntityManager } from 'typeorm'
import { GiveawayCoupon } from '../../model/generated'

@Resolver()
export class GiveawayCouponsResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => Number)
  async totalCouponReservations() {
    const manager = await this.tx()
    return await manager.getRepository(GiveawayCoupon).count()
  }

  @Query(() => Number)
  async totalCouponClaimed() {
    const manager = await this.tx()
    return await manager.getRepository(GiveawayCoupon).countBy({ claimedAt: Not(IsNull()) })
  }
}
