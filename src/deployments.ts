import { ss58Decode } from './utils/ss58Encode'

export enum ContractIds {
  Router = 'azns_router',
  Registry = 'azns_registry',
  FeeCalculator = 'azns_fee_calculator',
  MerkleVerifier = 'azns_merkle_verifier',
  NameChecker = 'azns_name_checker',
  DomainGiveaway = 'domain_giveaway',
}

export interface ContractDeployment {
  chain: 'development' | 'alephzero-testnet' | 'alephzero'
  address: string
  addressHex: string
  blockNumber: number
  tld: string
}

/**
 * Dynamically import the contract deployment metadata depending on the active chain.
 */
export const getContractDeployment = async (contract: ContractIds): Promise<ContractDeployment> => {
  const chain = process.env.CHAIN as any
  if (!chain || !['development', 'alephzero-testnet', 'alephzero'].includes(chain)) {
    throw new Error(`'CHAIN' environment variable is not set or unsupported chain '${chain}'.`)
  }

  let deployment
  try {
    deployment = await import(`./deployments/${contract}/${chain}`)
  } catch (e) {
    throw new Error(`Contract address of '${contract}' not found for chain '${chain}'.`)
  }

  const address = deployment.address
  const addressHex = ss58Decode(address)
  const blockNumber = deployment.blockNumber
  const tld = deployment.tld

  return {
    chain,
    address,
    addressHex,
    blockNumber,
    tld,
  }
}
