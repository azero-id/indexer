import { Query, Resolver } from 'type-graphql'
import { type EntityManager } from 'typeorm'
import { ReceivedFee } from '../../model/generated'

@Resolver()
export class FeesResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  // All fees
  @Query(() => Number)
  async totalReceivedFeesAZERO() {
    const manager = await this.tx()
    const { sum } = await manager
      .getRepository(ReceivedFee)
      .createQueryBuilder('fee')
      .select('SUM(fee.receivedAmount)', 'sum')
      .getRawOne()
    if (!sum) return 0
    return sum / 10 ** 12
  }

  @Query(() => Number)
  async totalReceivedFeesEUR() {
    const manager = await this.tx()
    const { sum } = await manager
      .getRepository(ReceivedFee)
      .createQueryBuilder('fee')
      .select('SUM(fee.receivedAmountEUR)', 'sum')
      .getRawOne()
    if (!sum) return 0
    return sum
  }

  // Registration fees
  @Query(() => Number)
  async totalReceivedRegistrationFeesAZERO() {
    const manager = await this.tx()
    const { sum } = await manager
      .getRepository(ReceivedFee)
      .createQueryBuilder('fee')
      .select('SUM(fee.receivedAmount)', 'sum')
      .where('fee.eventType = :eventType', { eventType: 'registration' })
      .getRawOne()
    if (!sum) return 0
    return sum / 10 ** 12
  }

  @Query(() => Number)
  async totalReceivedRegistrationFeesEUR() {
    const manager = await this.tx()
    const { sum } = await manager
      .getRepository(ReceivedFee)
      .createQueryBuilder('fee')
      .select('SUM(fee.receivedAmountEUR)', 'sum')
      .where('fee.eventType = :eventType', { eventType: 'registration' })
      .getRawOne()
    if (!sum) return 0
    return sum
  }

  // Renewal fees
  @Query(() => Number)
  async totalReceivedRenewalFeesAZERO() {
    const manager = await this.tx()
    const { sum } = await manager
      .getRepository(ReceivedFee)
      .createQueryBuilder('fee')
      .select('SUM(fee.receivedAmount)', 'sum')
      .where('fee.eventType = :eventType', { eventType: 'renewal' })
      .getRawOne()
    if (!sum) return 0
    return sum / 10 ** 12
  }

  @Query(() => Number)
  async totalReceivedRenewalFeesEUR() {
    const manager = await this.tx()
    const { sum } = await manager
      .getRepository(ReceivedFee)
      .createQueryBuilder('fee')
      .select('SUM(fee.receivedAmountEUR)', 'sum')
      .where('fee.eventType = :eventType', { eventType: 'renewal' })
      .getRawOne()
    if (!sum) return 0
    return sum
  }
}
