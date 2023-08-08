import { Arg, Int, Query, Resolver } from 'type-graphql'
import { type EntityManager } from 'typeorm'
import { Referral } from '../../model/generated'
import { TopReferrerEntity } from '../entity'

@Resolver()
export class ReferralsResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

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

  @Query(() => [TopReferrerEntity])
  async topReferrers(
    @Arg('limit', (_) => Int, { nullable: false, defaultValue: 10 }) limit: number,
  ) {
    const manager = await this.tx()
    const repository = manager.getRepository(Referral)

    return await repository
      .createQueryBuilder('referral')
      .select([
        'referral.referrerAddress AS address',
        'COUNT(referral.referrerAddress) AS count',
        'SUM(referral.referralAmount) AS amount',
      ])
      .groupBy('referral.referrerAddress')
      .orderBy('COUNT(referral.referrerAddress)', 'DESC')
      .limit(limit)
      .getRawMany()
  }
}
