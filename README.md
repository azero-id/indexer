# AZERO Domains – Indexer (Subsquid)

This repository contains a [Subsquid](https://docs.subsquid.io/), indexing the smart contracts of AZERO Domains.

## Getting Started

```bash
# Install Node.js & Docker

# Install Squid CLI
npm i -g @subsquid/cli

# Install local dependencies
# IMPORTANT: Use `npm`, not `pnpm`
npm install

# Copy & fill environments
cp .env.example .env
```

## Development Quickstart

If needed, clear all existing docker images via `docker rm -f $(docker ps -a -q)`.

### Local Node

**Important:** Use [`aleph-node`](https://github.com/aleph-zero-foundation/aleph-node), `substrate-contracts-node` is not working currently due to its instant finality.

To index a locally running node, it's necessary to instantiate the following components in parallel:

- Subsquid Archive (only for local nodes)
- Subsquid Squid DB for Processor
- Subsquid Processor
- Subsquid GraphQL API

_All tasks need to be run in different terminal windows._

```bash
# Start Subsquid Archive (for local nodes only)
# NOTE: Does not work with `substrate-contracts-node` currently
npm run start:archive

# Start Squid DB (`sqd up`)
npm run start:squid

# Build & Start Processor (`sqd process`)
npm run codegen
npm run start:processor

# Serve Processor DB via GraphQL API (`sqd serve`)
npm run serve
```

### Live Node

To index a live network, no matter if it's a test or production network, no local archive must be started. Instead, the identifier for the matching remote archive has to be determined by running: `npx squid-archive-registry`. Then the `.env` file needs to be updated accordingly.

_All tasks need to be run in different terminal windows._

```bash
# Start Squid DB (`sqd up`)
npm run start:squid

# Build & Start Processor (`sqd process`)
npm run codegen
npm run start:processor

# Serve Processor DB via GraphQL API (`sqd serve`)
npm run serve
```

## Deploy Squid

This Squid is deployed to [Aquarium](https://app.subsquid.io/) (hosted service by Subsquid).

```bash
# Prerequisite: Install & authenticate Squid CLI
sqd auth -k <DEPLOYMENT_KEY>

# Deploy Squid for Aleph Zero Testnet (`azns-testnet`)
sqd deploy . -m squid.testnet.yaml

# TODO: Deploy Squid for Aleph Zero Mainnet
# sqd deploy . -m squid.mainnet.yaml
```

## Resources

- [Subsquid Documentation](https://docs.subsquid.io/)
- [Squid ink! Template](https://github.com/subsquid-labs/squid-ink-template#dev-flow)
