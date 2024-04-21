import * as ss58 from '@subsquid/ss58'

/**
 * Helper to encode an address to SS58 format with the defined chain prefix.
 */
export const ss58Encode = (address: Uint8Array | string | undefined): string | undefined => {
  const prefix = parseInt(process.env.CHAIN_PREFIX || '')
  if (!prefix) {
    throw new Error('`CHAIN_PREFIX` environment variable is not set.')
  }

  if (!address) return undefined

  return ss58.codec(prefix).encode(address)
}

/**
 * Helper to decode an address from SS58 format with the defined chain prefix to Hex.
 */
export const ss58Decode = (address: string): string => {
  const prefix = parseInt(process.env.CHAIN_PREFIX || '')
  if (!prefix) {
    throw new Error('`CHAIN_PREFIX` environment variable is not set.')
  }

  return ss58.codec(prefix).decode(address)
}
