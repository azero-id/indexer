import axios from 'axios'
import axiosRetry from 'axios-retry'
import dayjs from 'dayjs'
import prefetchedData from '../../azero-token-prices-prefetched.json'

// Price cache
const fetchedPricesCache: Record<string, number> = prefetchedData

// Axios client
const coingeckoClient = axios.create({ baseURL: 'https://api.coingecko.com' })
axiosRetry(coingeckoClient, { retries: 3, retryDelay: axiosRetry.exponentialDelay })

/**
 * Fetches the price of a token at a given timestamp.
 * // TODO Fetch more granular prices (e.g. hourly).
 */
export const getTokenPriceAt = async (timestamp: Date, id = 'aleph-zero', currency = 'eur') => {
  // Check if the price has already been fetched
  const timestampDate = dayjs(timestamp).format('YYYY-MM-DD')
  const timestampCacheKey = `${id}-${currency}-${timestampDate}`
  if (fetchedPricesCache[timestampCacheKey]) {
    return fetchedPricesCache[timestampCacheKey]
  }

  // Fetch price
  const days = dayjs().diff(timestamp, 'day') + 5
  const query = `/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`
  const { data } = await coingeckoClient.get(query)
  const prices = data?.prices || []
  if (!prices?.length) {
    throw new Error(`Couldn't fetch '${id}' prices for currency '${currency}'`)
  }

  // Insert prices into cache
  for (const [priceTimestamp, price] of prices) {
    const date = dayjs(priceTimestamp).format('YYYY-MM-DD')
    const cacheKey = `${id}-${currency}-${date}`
    fetchedPricesCache[cacheKey] = price
  }

  // Check if the actuall lookup price has been fetched (+/- 1 day)
  const dayAfter = dayjs(timestampDate).add(1, 'day').format('YYYY-MM-DD')
  const dayBefore = dayjs(timestampDate).subtract(1, 'day').format('YYYY-MM-DD')
  const timestampPrice =
    fetchedPricesCache[timestampCacheKey] ||
    fetchedPricesCache[`${id}-${currency}-${dayBefore}`] ||
    fetchedPricesCache[`${id}-${currency}-${dayAfter}`]
  if (!timestampPrice) {
    throw new Error(
      `Couldn't fetch '${id}' prices for currency '${currency}' at '${timestampDate}' +/- 1 day`,
    )
  }

  return timestampPrice
}
