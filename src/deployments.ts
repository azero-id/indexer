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
): Promise<{ address: string; addressHex: string; blockNumber: number }> => {
  const chain = process.env.CHAIN
  if (!chain) throw new Error('`CHAIN` environment variable is not set.')

  let deployment
  try {
    deployment = await import(`./deployments/${contract}/${chain}`)
  } catch (e) {
    throw new Error(`Contract address of '${contract}' not found for chain '${chain}'.`)
  }

  const address = deployment.address
  const addressHex = toHex(ss58.decode(address).bytes)
  const blockNumber = deployment.blockNumber

  return {
    address,
    addressHex,
    blockNumber,
  }
}
