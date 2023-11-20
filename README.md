# AZERO.ID – Subsquid Indexer

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![Typescript](https://img.shields.io/badge/Typescript-blue)
![Subsquid](https://img.shields.io/badge/Subsquid-pink)

This repository contains an indexer for the smart contracts of [AZERO.ID](https://azero.id).

## Development

> [!WARNING]  
> Subsquid strictly requires `npm` to be used as the package manager. `pnpm` is not supported.

### Prerequisites

```bash
# Install Node.js 18 & Docker

# Install Squid CLI
npm i -g @subsquid/cli

# Install local dependencies
npm install

# Copy & fill environments
cp .env.example .env
```

### Index Live Node

To index a live network (e.g. Aleph Zero Testnet), a remote [Subsquid Archive](https://docs.subsquid.io/archives/overview/) is queried from its registry. Therefore, make sure to set up the `.env` file accordingly.

> [!IMPORTANT]  
> All tasks need to be run in different terminal windows.

```bash
# Start database (`sqd up`)
npm run start:squid

# Build & start processor (`sqd process`)
npm run codegen
npm run start:processor

# Serve GraphQL API (`sqd serve`)
npm run serve
```

If needed, clear all existing docker images via `docker rm -f $(docker ps -a -q)`.

### Advanced: Index Local Node

> [!WARNING]  
> Due to its instant finality, `substrate-contracts-node` is not working currently. Use [`aleph-node`](https://github.com/aleph-zero-foundation/aleph-node) instead.

To index a locally running node, it's necessary to run our own Subsquid Archive locally. This means running all of the following components in parallel:

- Subsquid Archive (only for local nodes)
- Subsquid Squid DB for Processor
- Subsquid Processor
- Subsquid GraphQL API

> [!IMPORTANT]  
> All tasks need to be run in different terminal windows.

```bash
# Start archive
npm run start:archive

# Start database (`sqd up`)
npm run start:squid

# Build & start processor (`sqd process`)
npm run codegen
npm run start:processor

# Serve GraphQL API (`sqd serve`)
npm run serve
```

## Deployment

The Squid is deployed to [Subsquid Cloud](https://app.subsquid.io/) (hosted service) for each live network.

| Network            | Endpoint                                       | Manifest File                                          |
| ------------------ | ---------------------------------------------- | ------------------------------------------------------ |
| Aleph Zero Testnet | https://squid.subsquid.io/azns-testnet/graphql | [`squid.azns-testnet.yaml`](./squid.azns-testnet.yaml) |
| Aleph Zero Mainnet | https://squid.subsquid.io/azns-mainnet/graphql | [`squid.azns-mainnet.yaml`](./squid.azns-mainnet.yaml) |

> [!IMPORTANT]  
> Each time, the version needs to be bumped manually in the respective manifest-file.

```bash
# Prerequisite: Install & authenticate Squid CLI
sqd auth -k <DEPLOYMENT_KEY>

# Bump version in manifest-file

# Deploy Squid (e.g. for Aleph Zero Testnet)
sqd deploy . -o azero-id -m squid.azns-testnet.yaml

# After successful initialization, optionally assign
# new squid to the respectove production endpoint.
sqd prod azns-testnet@v42
```

## Other Resources

- [Subsquid Documentation](https://docs.subsquid.io/)
- [Squid ink! Template](https://github.com/subsquid-labs/squid-ink-template)
