import { EventProcessorFn, EventWithMeta } from 'src/processor'
import * as aznsRegistry from '../deployments/azns_registry/generated/azns_registry'
import { Reservation } from '../model'
import { logger } from '../utils/logger'
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
  const tld = registryDeployment.tld

  for (const { event, timestamp } of reserveEvents) {
    logger.debug(event)
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
        logger.debug('Updated Reservation:', newReservation)
      } else {
        await store.insert(newReservation)
        logger.debug('Added Reservation:', newReservation)
      }
    } else if (existingReservation) {
      // Remove reservation
      await store.remove(Reservation, existingReservation.id)
      logger.debug('Removed Reservation:', existingReservation)
    }
  }
}
