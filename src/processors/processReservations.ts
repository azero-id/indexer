import { EventProcessorFn, EventWithMeta } from 'src/processor'
import * as aznsRegistry from '../deployments/azns_registry/generated/azns_registry'
import { Reservation } from '../model'
import { ss58Encode } from '../utils/ss58Encode'

/**
 * Process domain reservation events.
 */
export const processReservations: EventProcessorFn<aznsRegistry.Event> = async (
  store,
  registryEvents,
  registryDeployment,
) => {
  const reserveEvents = registryEvents.filter(
    ({ event }) => event.__kind === 'Reserve',
  ) as EventWithMeta<aznsRegistry.Event_Reserve>[]

  for (const { event, timestamp } of reserveEvents) {
    console.log(event)
    const tld = registryDeployment.tld
    const name = event.name
    const id = `${name}.${tld}`
    const address = ss58Encode(event.accountId)

    // Check if reservation already exists
    const existingReservation = await store.findOne(Reservation, {
      where: { id },
    })

    if (event.action === true) {
      // Create new reservation object
      const newReservation = new Reservation({
        id,
        name,
        tld,
        address,
        reservedAt: timestamp,
      } satisfies Reservation)

      // Update or insert reservation
      if (existingReservation) {
        await store.remove(Reservation, existingReservation.id)
        await store.insert(newReservation)
        console.log('Updated Reservation:', newReservation)
      } else {
        await store.insert(newReservation)
        console.log('Added Reservation:', newReservation)
      }
    } else if (existingReservation) {
      // Remove reservation
      await store.remove(Reservation, existingReservation.id)
      console.log('Removed Reservation:', existingReservation)
    }
  }
}
