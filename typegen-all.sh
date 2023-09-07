#!/usr/bin/env bash -eu

contracts=( "azns_name_checker" "azns_fee_calculator" "azns_merkle_verifier" "azns_registry" "azns_router" "domain_giveaway" )

DIR="${DIR:=./src/deployments}"

for i in "${contracts[@]}"
do
  echo -e "\nGenerating types for '$DIR/$i' (squid-ink-typegen)…"
  mkdir -p $DIR/$i/generated
  npx squid-ink-typegen --abi $DIR/$i/metadata.json --output $DIR/$i/generated/$i.ts
done