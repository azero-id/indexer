import * as ss58 from '@subsquid/ss58'

/**
 * Helper to encode an address to SS58 format with the defined chain prefix.
 */
export const ss58Encode = (address: Uint8Array | undefined): string | undefined => {
  const prefix = process.env.CHAIN_PREFIX
  if (!prefix) {
    throw new Error('`CHAIN_PREFIX` environment variable is not set.')
  }

  if (!address) return undefined

  return ss58.codec(prefix).encode(address)
}
