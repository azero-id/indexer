import { EventProcessorFn, EventWithMeta } from 'src/processor'
import * as aznsRegistry from '../deployments/azns_registry/generated/azns_registry'
import { PublicPhaseActivated } from '../model'

/**
 * Processes the public phase activation event (there is only one).
 * NOTE: For consistency it's handled the same as the other processors are working.
 */
export const processPublicPhaseActivation: EventProcessorFn<aznsRegistry.Event> = async (
  store,
  registryEvents,
  registryDeployment,
) => {
  const publicPhaseActivatedEvents = registryEvents.filter(
    ({ event }) => event.__kind === 'PublicPhaseActivated',
  ) as EventWithMeta<aznsRegistry.Event_PublicPhaseActivated>[]

  for (const { event, id, timestamp } of publicPhaseActivatedEvents) {
    console.log(event)
    await store.insert(
      new PublicPhaseActivated({
        id,
        activatedAt: timestamp,
      }),
    )
  }
}
