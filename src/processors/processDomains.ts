import { EventProcessorFn, EventWithMeta } from 'src/processor'
import * as aznsRegistry from '../deployments/azns_registry/generated/azns_registry'
import { Domain, Owner } from '../model'
import { logger } from '../utils/logger'
import { ss58Encode } from '../utils/ss58Encode'

/**
 * Process domain transfer events.
 */
export const processDomains: EventProcessorFn<aznsRegistry.Event> = async (
  store,
  registryEvents,
  registryDeployment,
) => {
  const transferEvents = registryEvents.filter(
    ({ event }) => event.__kind === 'Transfer',
  ) as EventWithMeta<aznsRegistry.Event_Transfer>[]
  const tld = registryDeployment.tld

  for (const { event, timestamp } of transferEvents) {
    logger.debug(event)
    const nameBuffer = (event.id as aznsRegistry.Id_Bytes).value
    const name = Buffer.from(nameBuffer).toString('utf-8')
    const id = `${name}.${tld}`
    const from = ss58Encode(event.from)
    const to = ss58Encode(event.to)

    // Determine event type
    const isRegister = !from && to
    const isTransfer = from && to
    const isRelease = from && !to

    // Find existing domain
    const existingDomain = await store.findOne(Domain, {
      where: { id },
    })

    // Find existing owners
    let fromOwner: Owner | undefined
    if (from)
      fromOwner = await store.findOne(Owner, {
        where: { id: from },
      })
    let toOwner: Owner | undefined
    if (to)
      toOwner = await store.findOne(Owner, {
        where: { id: to },
      })

    // Handle event
    if (isRegister || isTransfer) {
      // Create new owner if not existant
      if (!toOwner) {
        toOwner = new Owner({
          id: to,
        })
        await store.insert(toOwner)
        logger.debug('Added Owner:', toOwner)
      }

      // Create new domain object
      const domain = new Domain({
        id,
        name,
        tld,
        owner: toOwner,
        registeredAt: existingDomain?.registeredAt || timestamp,
      })

      // Update or insert domain
      if (existingDomain) {
        await store.remove(Domain, existingDomain.id)
        await store.insert(domain)
        logger.debug('Updated Domain:', domain)
      } else {
        await store.insert(domain)
        logger.debug('Added Domain:', domain)
      }
    } else if (isRelease) {
      // Remove domain
      if (existingDomain) {
        await store.remove(Domain, existingDomain.id)
        logger.debug('Removed Domain:', existingDomain)
      }
    }

    // Remove owner if no domains left
    for (const owner of [fromOwner, toOwner]) {
      if (!owner) continue
      const updatedOwner = await store.findOne(Owner, {
        where: { id: owner.id },
        relations: { domains: true },
      })
      if (updatedOwner && updatedOwner.domains?.length === 0) {
        await store.remove(Owner, updatedOwner.id)
        logger.debug('Removed Owner:', updatedOwner)
      }
    }
  }
}
