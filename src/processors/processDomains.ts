import { BN, bnToBn, hexToU8a } from '@polkadot/util'
import dayjs from 'dayjs'
import { EventProcessorFn, EventWithMeta } from 'src/processor'
import { IsNull, LessThan } from 'typeorm'
import * as aznsRegistry from '../deployments/azns_registry/generated/azns_registry'
import { Domain, Owner, ReceivedFee } from '../model'
import { getTokenPriceAt } from '../utils/getTokenPriceAt'
import { logger } from '../utils/logger'
import { ss58Encode } from '../utils/ss58Encode'

/**
 * Process domain ownership & expiration
 */
export const processDomains: EventProcessorFn<aznsRegistry.Event> = async (
  store,
  registryEvents,
  registryDeployment,
) => {
  // Process domain ownership changes via transfers (also registrations)
  const transferEvents = registryEvents.filter(
    ({ event }) => event.__kind === 'Transfer',
  ) as EventWithMeta<aznsRegistry.Event_Transfer>[]
  await processTransfers(store, transferEvents, registryDeployment)

  // Process domain expiration changes via registrations & renewals
  const registrationEvents = registryEvents.filter(
    ({ event }) => event.__kind === 'Register',
  ) as EventWithMeta<aznsRegistry.Event_Register>[]
  await processRegistrations(store, registrationEvents, registryDeployment)

  const renewalEvents = registryEvents.filter(
    ({ event }) => event.__kind === 'Renew',
  ) as EventWithMeta<aznsRegistry.Event_Renew>[]
  await processRenewals(store, renewalEvents, registryDeployment)

  // Regularly check for expired domains
  // TODO: Must take grace-period (1st October 2024) into account
  // await processExpirations(store, [], registryDeployment)
}

/**
 * Process domain transfers
 */
const processTransfers: EventProcessorFn<aznsRegistry.Event_Transfer> = async (
  store,
  transferEvents,
  registryDeployment,
) => {
  const tld = registryDeployment.tld
  for (const { event, timestamp } of transferEvents) {
    logger.debug('Event_Transfer:', event)
    const nameBuffer = hexToU8a((event.id as aznsRegistry.Id_Bytes).value as string)
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
}

/**
 * Process domain registrations
 */
const processRegistrations: EventProcessorFn<aznsRegistry.Event_Register> = async (
  store,
  registrationEvents,
  registryDeployment,
) => {
  const tld = registryDeployment.tld
  for (const { event } of registrationEvents) {
    logger.debug('Event_Register:', event)
    const name = event.name
    const id = `${name}.${tld}`

    // Find existing domain
    const existingDomain = await store.findOne(Domain, {
      where: { id },
    })

    // Handle event
    if (existingDomain) {
      const gracePeriodTimestamp = dayjs(1727740800000) // 1st October 2024
      const expirationTimestamp = dayjs(parseInt(event.expirationTimestamp.toString()))
      const expiresAt = expirationTimestamp.isAfter(gracePeriodTimestamp)
        ? expirationTimestamp
        : gracePeriodTimestamp
      existingDomain.expiresAt = expiresAt.toDate()
      await store.save(existingDomain)
      logger.debug('Updated Domain Expiry on Registration:', existingDomain)
    }
  }
}

/**
 * Process domain renewals
 */
const processRenewals: EventProcessorFn<aznsRegistry.Event_Renew> = async (
  store,
  renewalEvents,
  registryDeployment,
) => {
  const tld = registryDeployment.tld
  for (const { event, id: eventId, call, value, caller, timestamp, blockHash } of renewalEvents) {
    logger.debug('Event_Renew:', event)
    const name = event.name
    const id = `${name}.${tld}`

    // Find existing domain
    const existingDomain = await store.findOne(Domain, {
      where: { id },
    })

    // Handle event
    if (existingDomain) {
      existingDomain.expiresAt = new Date(parseInt(event.newExpiry.toString()))
      await store.save(existingDomain)
      logger.debug('Updated Domain Expiry on Renewal:', existingDomain)
    }

    // Store ReceivedFee
    if (!value || !caller || !call) continue

    // Check how many further renewals are included in the call
    const renewalEventsPerCall = renewalEvents.filter((e) => {
      return e.call?.id === call.id
    }).length
    if (!renewalEventsPerCall) continue

    // Determine received amount in EUR
    const receivedAmount = BigInt(bnToBn(value).div(new BN(renewalEventsPerCall)).toString())
    const azeroPriceInEur =
      registryDeployment.chain === 'alephzero' ? (await getTokenPriceAt(timestamp)) || 0 : 0
    const precision = 5
    const receivedAmountEUR =
      bnToBn(receivedAmount)
        .div(new BN(10 ** 12))
        .mul(new BN(azeroPriceInEur * 10 ** precision))
        .toNumber() /
      10 ** precision

    // Determine registration duration
    const oldExpiration = dayjs(parseInt(event.oldExpiry.toString()))
    const newExpiration = dayjs(parseInt(event.newExpiry.toString()))
    const registrationDurationInDays = newExpiration.diff(oldExpiration, 'day')
    const registrationDurationInYears = Math.round(registrationDurationInDays / 365)

    const newReceivedFee = new ReceivedFee({
      id: eventId,
      tld,
      name,
      from: caller,
      eventType: 'renewal',
      receivedAt: timestamp,
      receivedAmount,
      receivedAmountEUR,
      registrationDurationInYears,
      blockHash,
    })
    await store.insert(newReceivedFee)
    logger.debug('Added ReceivedFees:', newReceivedFee)
  }
}

/**
 * Process domain expirations
 * TODO: Must take grace-period (1st October 2024) into account
 */
const processExpirations: EventProcessorFn<never> = async (store, _, __) => {
  // Remove expired domains
  const expiredDomains = await store.find(Domain, {
    where: {
      expiresAt: LessThan(new Date()),
    },
  })
  if (expiredDomains.length) {
    await store.remove(expiredDomains)
    logger.debug('Removed Expired Domains:', expiredDomains)
  }

  // Remove owners with no domains left
  const updatedOwners = await store.find(Owner, {
    where: {
      domains: {
        id: IsNull(),
      },
    },
    relations: { domains: true },
  })
  if (updatedOwners.length) {
    await store.remove(updatedOwners)
    logger.debug('Removed Owners:', updatedOwners)
  }
}
