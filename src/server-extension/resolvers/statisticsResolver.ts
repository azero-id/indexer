import { Query, Resolver } from 'type-graphql'
import { type EntityManager } from 'typeorm'
import { Domain, Owner, Referral, Reservation } from '../../model/generated'

@Resolver()
export class StatisticsResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => Number)
  async totalDomains() {
    const manager = await this.tx()
    return await manager.getRepository(Domain).count()
  }

  @Query(() => Number)
  async totalOwners() {
    const manager = await this.tx()
    return await manager.getRepository(Owner).count()
  }

  @Query(() => Number)
  async totalReservations() {
    const manager = await this.tx()
    return await manager.getRepository(Reservation).count()
  }

  @Query(() => Number)
  async totalReferrals() {
    const manager = await this.tx()
    return await manager.getRepository(Referral).count()
  }

  @Query(() => Number)
  async totalReferralAmount() {
    const manager = await this.tx()
    const { sum } = await manager
      .getRepository(Referral)
      .createQueryBuilder('referral')
      .select('SUM(referral.referralAmount)', 'sum')
      .getRawOne()
    return sum
  }
}
