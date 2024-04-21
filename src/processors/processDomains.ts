import { hexToU8a } from '@polkadot/util'
import { EventProcessorFn, EventWithMeta } from 'src/processor'
import { In } from 'typeorm'
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

  const ownerIdsToCheckForRemoval = new Set<string>()
  for (const { event, timestamp } of transferEvents) {
    logger.debug(event)
    const nameBuffer = hexToU8a((event.id as aznsRegistry.Id_Bytes).value as string)
    const name = Buffer.from(nameBuffer).toString('utf-8')
    const id = `${name}.${tld}`
    const from = ss58Encode(event.from)
    if (from) ownerIdsToCheckForRemoval.add(from)
    const to = ss58Encode(event.to)

    // Determine event type
    const isRegister = !from && to
    const isTransfer = from && to
    const isRelease = from && !to

    // Find existing domain
    const existingDomain = await store.findOne(Domain, {
      where: { id },
    })

    // Handle event
    if (isRegister || isTransfer) {
      // Find existing owner & create if not existant
      let owner = await store.findOne(Owner, { where: { id: to } })
      if (!owner) {
        owner = new Owner({ id: to })
        await store.insert(owner)
        logger.debug('Added Owner:', owner)
      }

      // Create new domain object
      const domain = new Domain({
        id,
        name,
        tld,
        owner,
        registeredAt: existingDomain?.registeredAt || timestamp,
      })

      // Update or insert domain
      await store.upsert(domain)
      logger.debug('Added/Updated Domain:', domain)
    } else if (isRelease) {
      // Remove domain
      if (existingDomain) {
        await store.remove(Domain, id)
        logger.debug('Removed Domain:', existingDomain)
      }
    }
  }

  // Remove owners with no domains left
  const updatedOwners = await store.find(Owner, {
    where: { id: In(Array.from(ownerIdsToCheckForRemoval)) },
    relations: { domains: true },
  })
  const ownerEntitiesToRemove = updatedOwners.filter((owner) => !owner.domains?.length)
  if (ownerEntitiesToRemove.length) {
    await store.remove(ownerEntitiesToRemove)
    logger.debug('Removed Owners:', ownerEntitiesToRemove)
  }
}
