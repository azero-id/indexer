import * as ss58 from '@subsquid/ss58'
import { toHex } from '@subsquid/substrate-processor'

export enum ContractIds {
  Router = 'azns_router',
  Registry = 'azns_registry',
  FeeCalculator = 'azns_fee_calculator',
  MerkleVerifier = 'azns_merkle_verifier',
  NameChecker = 'azns_name_checker',
}

/**
 * Dynamically import the address of a contract depending on the active chain.
 */
export const getContractAddress = async (
  contract: ContractIds,
  asHex: boolean,
): Promise<string> => {
  const chain = process.env.CHAIN
  let address = (await import(`./deployments/${contract}/${chain}.js`)).address
  if (asHex) {
    address = toHex(ss58.decode(address).bytes)
  }
  return address
}
