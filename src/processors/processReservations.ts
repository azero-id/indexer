import * as ss58 from '@subsquid/ss58'
import { Store } from '@subsquid/typeorm-store'
import { randomUUID } from 'crypto'
import * as aznsRegistry from '../deployments/azns_registry/generated/azns_registry'
import { Reservation } from '../model'

/**
 * Add or remove reservations from the database.
 */
export const processReservations = async (store: Store, registryEvents: aznsRegistry.Event[]) => {
  const reservationEvents = registryEvents.filter(
    (e) => e.__kind === 'Reserve',
  ) as aznsRegistry.Event_Reserve[]

  for (const e of reservationEvents) {
    if (e.action === true) {
      const reservation = new Reservation({
        id: randomUUID(),
        name: e.name,
        tld: 'azero',
        address: e.accountId && ss58.codec(42).encode(e.accountId),
      })
      await store.insert(reservation)
      console.log('Added Reservation:', reservation)
    } else {
      const reservation = await store.findOne(Reservation, {
        where: { name: e.name },
      })
      if (reservation) {
        await store.remove(Reservation, reservation.id)
        console.log('Removed Reservation:', reservation)
      }
    }
  }
}
