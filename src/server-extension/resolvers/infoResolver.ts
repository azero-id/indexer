import { Query, Resolver } from 'type-graphql'
import type { EntityManager } from 'typeorm'
import { PublicPhaseActivated } from '../../model/generated'

@Resolver()
export class InfoResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => Boolean)
  async isInPublicPhase() {
    const manager = await this.tx()
    const publicPhaseActivationEvents = await manager.getRepository(PublicPhaseActivated).count()
    return publicPhaseActivationEvents >= 1
  }
}
