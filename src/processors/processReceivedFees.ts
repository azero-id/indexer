import { BN, bnToBn } from '@polkadot/util'
import dayjs from 'dayjs'
import { EventProcessorFn, EventWithMeta } from 'src/processor'
import * as aznsRegistry from '../deployments/azns_registry/generated/azns_registry'
import { ReceivedFee } from '../model'
import { getTokenPriceAt } from '../utils/getTokenPriceAt'
import { logger } from '../utils/logger'
import { ss58Encode } from '../utils/ss58Encode'

/**
 * Process received fees and their origin.
 */
export const processReceivedFees: EventProcessorFn<aznsRegistry.Event> = async (
  store,
  registryEvents,
  registryDeployment,
) => {
  const feeReceivedEvents = registryEvents.filter(
    ({ event }) => event.__kind === 'FeeReceived',
  ) as EventWithMeta<aznsRegistry.Event_FeeReceived>[]
  const registerEvents = registryEvents.filter(
    ({ event }) => event.__kind === 'Register',
  ) as EventWithMeta<aznsRegistry.Event_Register>[]
  const tld = registryDeployment.tld

  const receivedFeeEntities: ReceivedFee[] = []
  for (const { event, id: eventId, timestamp, blockHash } of feeReceivedEvents) {
    logger.debug('Event_FeeReceived:', event)

    // Match according `Register` event
    // NOTE: Later, there might be other events that trigger a `FeeReceived` event (e.g. `Renewal`).
    const registerEvent = registerEvents.find(
      ({ event: _event, blockHash: _blockHash }) =>
        _event.name === event.name && _blockHash === blockHash,
    )
    if (!registerEvent) {
      throw new Error('No matching `Register` event found for `FeeReceived` event.')
    }
    logger.debug(registerEvent)

    const name = event.name
    const from = ss58Encode(event.from)
    if (!from) {
      throw new Error(`Could not encode ${event.from} to SS58.`)
    }

    // Determine price in EUR
    const receivedAmount = event.receivedFee
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
    const registrationTimestamp = dayjs(
      parseInt(registerEvent.event.registrationTimestamp.toString()),
    )
    const expirationTimestamp = dayjs(parseInt(registerEvent.event.expirationTimestamp.toString()))
    const registrationDurationInDays = expirationTimestamp.diff(registrationTimestamp, 'day')
    const registrationDurationInYears = Math.round(registrationDurationInDays / 365)

    // Insert ReceivedFee entity
    receivedFeeEntities.push(
      new ReceivedFee({
        id: eventId,
        tld,
        name,
        from,
        eventType: 'registration',
        receivedAt: timestamp,
        receivedAmount,
        receivedAmountEUR,
        registrationDurationInYears,
        blockHash,
      } satisfies ReceivedFee),
    )
  }

  // Inserting received fees
  if (receivedFeeEntities?.length) {
    await store.insert(receivedFeeEntities)
    logger.debug('Added ReceivedFees:', receivedFeeEntities)
  }
}
