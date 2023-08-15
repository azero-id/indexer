import { Query, Resolver } from 'type-graphql'
import { type EntityManager } from 'typeorm'
import { Domain, Owner, Reservation } from '../../model/generated'

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
}
