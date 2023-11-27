import { Query, Resolver } from 'type-graphql'
import { type EntityManager } from 'typeorm'
import { ReceivedFee } from '../../model/generated'

@Resolver()
export class FeesResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => Number)
  async totalReceivedFeesAZERO() {
    const manager = await this.tx()
    const { sum } = await manager
      .getRepository(ReceivedFee)
      .createQueryBuilder('fee')
      .select('SUM(fee.receivedAmount)', 'sum')
      .getRawOne()
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
    return sum
  }
}
