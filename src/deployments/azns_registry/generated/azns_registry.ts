import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0x8bc23023f7db0913fb1e803a6e161a551337011ca3cd71c1e4bc8fa495adc91d",
        "language": "ink! 4.2.1",
        "compiler": "rustc 1.79.0",
        "build_info": {
            "build_mode": "Release",
            "cargo_contract_version": "3.2.0",
            "rust_toolchain": "stable-aarch64-apple-darwin",
            "wasm_opt_settings": {
                "keep_debug_symbols": false,
                "optimization_passes": "Z"
            }
        }
    },
    "contract": {
        "name": "azns_registry",
        "version": "1.1.0",
        "authors": [
            "AZERO.ID <hello@azero.id>"
        ]
    },
    "spec": {
        "constructors": [
            {
                "args": [
                    {
                        "label": "admin",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "name_checker_addr",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "fee_calculator_addr",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "tld",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "base_uri",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [
                    "Creates a new AZNS contract."
                ],
                "label": "new",
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink_primitives",
                        "ConstructorResult"
                    ],
                    "type": 10
                },
                "selector": "0x9bae9d5e"
            }
        ],
        "docs": [],
        "environment": {
            "accountId": {
                "displayName": [
                    "AccountId"
                ],
                "type": 0
            },
            "balance": {
                "displayName": [
                    "Balance"
                ],
                "type": 4
            },
            "blockNumber": {
                "displayName": [
                    "BlockNumber"
                ],
                "type": 5
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 78
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 77
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 6
            }
        },
        "events": [
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "registration_timestamp",
                        "type": {
                            "displayName": [
                                "u64"
                            ],
                            "type": 6
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "expiration_timestamp",
                        "type": {
                            "displayName": [
                                "u64"
                            ],
                            "type": 6
                        }
                    }
                ],
                "docs": [
                    "Emitted whenever a new name is registered."
                ],
                "label": "Register"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "referrer",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "referrer_addr",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "received_fee",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "forwarded_referrer_fee",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "docs": [],
                "label": "FeeReceived"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "docs": [
                    "Emitted whenever a name is released"
                ],
                "label": "Release"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "old_address",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "new_address",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "docs": [
                    "Emitted whenever an address changes."
                ],
                "label": "SetAddress"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "old_controller",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "new_controller",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "docs": [
                    "Emitted whenever controller changes."
                ],
                "label": "SetController"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "account",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "primary_name",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    }
                ],
                "docs": [],
                "label": "SetPrimaryName"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "docs": [],
                "label": "RecordsUpdated"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "to",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "id",
                        "type": {
                            "displayName": [
                                "Id"
                            ],
                            "type": 66
                        }
                    }
                ],
                "docs": [
                    "Event emitted when a token transfer occurs."
                ],
                "label": "Transfer"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "caller",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "unlocker",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "docs": [
                    "Event emitted when a token is locked."
                ],
                "label": "Lock"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "docs": [
                    "Event emitted when a token is unlocked."
                ],
                "label": "Unlock"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "operator",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "id",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 69
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "approved",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    }
                ],
                "docs": [
                    "Event emitted when a token approve occurs."
                ],
                "label": "Approval"
            },
            {
                "args": [],
                "docs": [
                    "Emitted when switching from whitelist-phase to public-phase"
                ],
                "label": "PublicPhaseActivated"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "account_id",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "action",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    }
                ],
                "docs": [
                    "Emitted when a name is reserved or removed from the reservation list"
                ],
                "label": "Reserve"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "old_expiry",
                        "type": {
                            "displayName": [
                                "u64"
                            ],
                            "type": 6
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "new_expiry",
                        "type": {
                            "displayName": [
                                "u64"
                            ],
                            "type": 6
                        }
                    }
                ],
                "docs": [
                    "Emitted whenever a name is renewed."
                ],
                "label": "Renew"
            }
        ],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 12
        },
        "messages": [
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "recipient",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "years_to_register",
                        "type": {
                            "displayName": [
                                "u8"
                            ],
                            "type": 2
                        }
                    },
                    {
                        "label": "referrer",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    },
                    {
                        "label": "bonus_name",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Register specific name on behalf of some other address.",
                    " Pay the fee, but forward the ownership of the name to the provided recipient",
                    "",
                    " NOTE: During the whitelist phase, use `register()` method instead."
                ],
                "label": "register_on_behalf_of",
                "mutates": true,
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x7aa26a96"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "years_to_register",
                        "type": {
                            "displayName": [
                                "u8"
                            ],
                            "type": 2
                        }
                    },
                    {
                        "label": "referrer",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    },
                    {
                        "label": "bonus_name",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    },
                    {
                        "label": "set_as_primary_name",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Register specific name with caller as owner."
                ],
                "label": "register_v2",
                "mutates": true,
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0xb16554be"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "years_to_register",
                        "type": {
                            "displayName": [
                                "u8"
                            ],
                            "type": 2
                        }
                    },
                    {
                        "label": "referrer",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    },
                    {
                        "label": "_merkle_proof",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 19
                        }
                    },
                    {
                        "label": "set_as_primary_name",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " register_v1"
                ],
                "label": "register",
                "mutates": true,
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x229b553f"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "years_to_renew",
                        "type": {
                            "displayName": [
                                "u8"
                            ],
                            "type": 2
                        }
                    },
                    {
                        "label": "bonus_name",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "renew",
                "mutates": true,
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 21
                },
                "selector": "0xb5604092"
            },
            {
                "args": [
                    {
                        "label": "data",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 23
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "batch_renew",
                "mutates": true,
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 21
                },
                "selector": "0xb3d33208"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "set_as_primary_name",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Allows users to claim their reserved name at zero cost"
                ],
                "label": "claim_reserved_name",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x2251f2bc"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Release name from registration."
                ],
                "label": "release",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x3f2be152"
            },
            {
                "args": [
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "keep_records",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    },
                    {
                        "label": "keep_controller",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    },
                    {
                        "label": "keep_resolving",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    },
                    {
                        "label": "data",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 25
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Transfer owner to another address."
                ],
                "label": "transfer",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 26
                },
                "selector": "0x84a15da1"
            },
            {
                "args": [
                    {
                        "label": "names",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 29
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Removes the associated state of expired-names from storage"
                ],
                "label": "clear_expired_names",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 21
                },
                "selector": "0xd00a53e5"
            },
            {
                "args": [
                    {
                        "label": "primary_name",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Set primary name of an address (reverse record)",
                    " @note if name is set to None then the primary-name for the caller will be removed (if exists)"
                ],
                "label": "set_primary_name",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0xad11843c"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "new_address",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Set resolved address for specific name."
                ],
                "label": "set_address",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0xb8a4d3d9"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "new_controller",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "set_controller",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0xc5e161ea"
            },
            {
                "args": [
                    {
                        "label": "names",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 29
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "reset_resolved_address",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x955299c9"
            },
            {
                "args": [
                    {
                        "label": "names",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 29
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "reset_controller",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x1dffd33a"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "records",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 30
                        }
                    },
                    {
                        "label": "remove_rest",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "update_records",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0xde84a1ba"
            },
            {
                "args": [
                    {
                        "label": "names",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 29
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Returns the current status of the name"
                ],
                "label": "get_name_status",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 32
                },
                "selector": "0x964d7612"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Get the addresses related to specific name"
                ],
                "label": "get_address_dict",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 36
                },
                "selector": "0xf069dff3"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Get owner of specific name."
                ],
                "label": "get_owner",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 38
                },
                "selector": "0x07fcd0b1"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Get controller of specific name."
                ],
                "label": "get_controller",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 38
                },
                "selector": "0x0abf0e97"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Get address for specific name."
                ],
                "label": "get_address",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 38
                },
                "selector": "0xd259f7ba"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_registration_period",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 40
                },
                "selector": "0x61437185"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Gets all records"
                ],
                "label": "get_all_records",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 43
                },
                "selector": "0x528be9f1"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "key",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Gets an arbitrary record by key"
                ],
                "label": "get_record",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 44
                },
                "selector": "0x7e6cb4ce"
            },
            {
                "args": [
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Returns all names the address owns"
                ],
                "label": "get_owned_names_of_address",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 46
                },
                "selector": "0xe413b13a"
            },
            {
                "args": [
                    {
                        "label": "controller",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_controlled_names_of_address",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 46
                },
                "selector": "0x9f25301e"
            },
            {
                "args": [
                    {
                        "label": "address",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_resolving_names_of_address",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 46
                },
                "selector": "0xadd2f457"
            },
            {
                "args": [
                    {
                        "label": "address",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_primary_name",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 44
                },
                "selector": "0x404f1d73"
            },
            {
                "args": [
                    {
                        "label": "address",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_primary_domain",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 47
                },
                "selector": "0xbf5b5677"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_lock_info",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 48
                },
                "selector": "0x5974dd04"
            },
            {
                "args": [
                    {
                        "label": "address",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_names_of_address",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 46
                },
                "selector": "0xf82caf60"
            },
            {
                "args": [
                    {
                        "label": "user",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_owner_to_name_count",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 49
                },
                "selector": "0xb779edfe"
            },
            {
                "args": [
                    {
                        "label": "user",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_controller_to_name_count",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 49
                },
                "selector": "0xf5e0d676"
            },
            {
                "args": [
                    {
                        "label": "user",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_resolving_to_name_count",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 49
                },
                "selector": "0x28610555"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_records_size_limit",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 50
                },
                "selector": "0x8405efa0"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_tld",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 52
                },
                "selector": "0xd61daed4"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_base_uri",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 52
                },
                "selector": "0x6e06617c"
            },
            {
                "args": [
                    {
                        "label": "beneficiary",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "value",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 53
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " (ADMIN-OPERATION)",
                    " Transfers `value` amount of tokens to the caller."
                ],
                "label": "withdraw",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x410fcc9d"
            },
            {
                "args": [
                    {
                        "label": "set",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 54
                        }
                    },
                    {
                        "label": "skip_name_checker",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " (ADMIN-OPERATION)",
                    " Reserve name name for specific addresses"
                ],
                "label": "add_reserved_names",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x6e0d3fa8"
            },
            {
                "args": [
                    {
                        "label": "set",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 29
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " (ADMIN-OPERATION)",
                    " Remove given names from the list of reserved names"
                ],
                "label": "remove_reserved_name",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x9ccff6c5"
            },
            {
                "args": [
                    {
                        "label": "limit",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 51
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " (ADMIN-OPERATION)",
                    " Update the limit of records allowed to store per name"
                ],
                "label": "set_records_size_limit",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x7c9baef6"
            },
            {
                "args": [
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "recipient",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "years_to_register",
                        "type": {
                            "displayName": [
                                "u8"
                            ],
                            "type": 2
                        }
                    },
                    {
                        "label": "referrer",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_name_price",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 56
                },
                "selector": "0xb565be46"
            },
            {
                "args": [
                    {
                        "label": "input",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 59
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "batch_get_name_price",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 61
                },
                "selector": "0xfc5a5fc3"
            },
            {
                "args": [
                    {
                        "label": "recipient",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "referrer_name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "validate_referrer",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 63
                },
                "selector": "0x30fc989d"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_admin",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 64
                },
                "selector": "0x57b8a8a7"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_pending_admin",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 48
                },
                "selector": "0xbcd31d76"
            },
            {
                "args": [
                    {
                        "label": "account",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "transfer_ownership",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x107e33ea"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "accept_ownership",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0xb55be9f0"
            },
            {
                "args": [
                    {
                        "label": "code_hash",
                        "type": {
                            "displayName": [],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "upgrade_contract",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 10
                },
                "selector": "0x1345543d"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "PSP34::collection_id",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 65
                },
                "selector": "0xffa27a5f"
            },
            {
                "args": [
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP34::balance_of",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 68
                },
                "selector": "0xcde7e55f"
            },
            {
                "args": [
                    {
                        "label": "id",
                        "type": {
                            "displayName": [
                                "Id"
                            ],
                            "type": 66
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP34::owner_of",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 48
                },
                "selector": "0x1168624d"
            },
            {
                "args": [
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "operator",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "id",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 69
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP34::allowance",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 63
                },
                "selector": "0x4790f55a"
            },
            {
                "args": [
                    {
                        "label": "operator",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "id",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 69
                        }
                    },
                    {
                        "label": "approved",
                        "type": {
                            "displayName": [
                                "bool"
                            ],
                            "type": 18
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP34::approve",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 26
                },
                "selector": "0x1932a8b0"
            },
            {
                "args": [
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "id",
                        "type": {
                            "displayName": [
                                "Id"
                            ],
                            "type": 66
                        }
                    },
                    {
                        "label": "data",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 25
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP34::transfer",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 26
                },
                "selector": "0x3128d61b"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "PSP34::total_supply",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 49
                },
                "selector": "0x628413fe"
            },
            {
                "args": [
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "index",
                        "type": {
                            "displayName": [
                                "u128"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP34Enumerable::owners_token_by_index",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 70
                },
                "selector": "0x3bcfb511"
            },
            {
                "args": [
                    {
                        "label": "_index",
                        "type": {
                            "displayName": [
                                "u128"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP34Enumerable::token_by_index",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 70
                },
                "selector": "0xcd0340d0"
            },
            {
                "args": [
                    {
                        "label": "id",
                        "type": {
                            "displayName": [
                                "Id"
                            ],
                            "type": 66
                        }
                    },
                    {
                        "label": "key",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 25
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP34Metadata::get_attribute",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 72
                },
                "selector": "0xf19d48d1"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "Psp34Traits::get_owner",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 64
                },
                "selector": "0x8e1d8d71"
            },
            {
                "args": [
                    {
                        "label": "token_id",
                        "type": {
                            "displayName": [
                                "Id"
                            ],
                            "type": 66
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "Psp34Traits::token_uri",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 52
                },
                "selector": "0x249dfd4f"
            },
            {
                "args": [
                    {
                        "label": "uri",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "Psp34Traits::set_base_uri",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 74
                },
                "selector": "0x4de6850b"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "Psp34Traits::get_attribute_count",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 68
                },
                "selector": "0x61c50d69"
            },
            {
                "args": [
                    {
                        "label": "index",
                        "type": {
                            "displayName": [
                                "u32"
                            ],
                            "type": 5
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "Psp34Traits::get_attribute_name",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 52
                },
                "selector": "0xfcfe34de"
            },
            {
                "args": [
                    {
                        "label": "token_id",
                        "type": {
                            "displayName": [
                                "Id"
                            ],
                            "type": 66
                        }
                    },
                    {
                        "label": "attributes",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 29
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "Psp34Traits::get_attributes",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 46
                },
                "selector": "0x18209102"
            },
            {
                "args": [
                    {
                        "label": "_token_id",
                        "type": {
                            "displayName": [
                                "Id"
                            ],
                            "type": 66
                        }
                    },
                    {
                        "label": "_metadata",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 7
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "Psp34Traits::set_multiple_attributes",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 74
                },
                "selector": "0x5bf8416b"
            }
        ]
    },
    "storage": {
        "root": {
            "layout": {
                "struct": {
                    "fields": [
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "admin"
                        },
                        {
                            "layout": {
                                "enum": {
                                    "dispatchKey": "0x00000000",
                                    "name": "Option",
                                    "variants": {
                                        "0": {
                                            "fields": [],
                                            "name": "None"
                                        },
                                        "1": {
                                            "fields": [
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x00000000",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "name": "0"
                                                }
                                            ],
                                            "name": "Some"
                                        }
                                    }
                                }
                            },
                            "name": "pending_admin"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 3
                                }
                            },
                            "name": "tld"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 3
                                }
                            },
                            "name": "base_uri"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 4
                                }
                            },
                            "name": "total_supply"
                        },
                        {
                            "layout": {
                                "enum": {
                                    "dispatchKey": "0x00000000",
                                    "name": "Option",
                                    "variants": {
                                        "0": {
                                            "fields": [],
                                            "name": "None"
                                        },
                                        "1": {
                                            "fields": [
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x00000000",
                                                            "ty": 5
                                                        }
                                                    },
                                                    "name": "0"
                                                }
                                            ],
                                            "name": "Some"
                                        }
                                    }
                                }
                            },
                            "name": "records_size_limit"
                        },
                        {
                            "layout": {
                                "enum": {
                                    "dispatchKey": "0x00000000",
                                    "name": "Option",
                                    "variants": {
                                        "0": {
                                            "fields": [],
                                            "name": "None"
                                        },
                                        "1": {
                                            "fields": [
                                                {
                                                    "layout": {
                                                        "struct": {
                                                            "fields": [
                                                                {
                                                                    "layout": {
                                                                        "struct": {
                                                                            "fields": [
                                                                                {
                                                                                    "layout": {
                                                                                        "leaf": {
                                                                                            "key": "0x00000000",
                                                                                            "ty": 0
                                                                                        }
                                                                                    },
                                                                                    "name": "account_id"
                                                                                }
                                                                            ],
                                                                            "name": "CallBuilder"
                                                                        }
                                                                    },
                                                                    "name": "inner"
                                                                }
                                                            ],
                                                            "name": "NameCheckerRef"
                                                        }
                                                    },
                                                    "name": "0"
                                                }
                                            ],
                                            "name": "Some"
                                        }
                                    }
                                }
                            },
                            "name": "name_checker"
                        },
                        {
                            "layout": {
                                "enum": {
                                    "dispatchKey": "0x00000000",
                                    "name": "Option",
                                    "variants": {
                                        "0": {
                                            "fields": [],
                                            "name": "None"
                                        },
                                        "1": {
                                            "fields": [
                                                {
                                                    "layout": {
                                                        "struct": {
                                                            "fields": [
                                                                {
                                                                    "layout": {
                                                                        "struct": {
                                                                            "fields": [
                                                                                {
                                                                                    "layout": {
                                                                                        "leaf": {
                                                                                            "key": "0x00000000",
                                                                                            "ty": 0
                                                                                        }
                                                                                    },
                                                                                    "name": "account_id"
                                                                                }
                                                                            ],
                                                                            "name": "CallBuilder"
                                                                        }
                                                                    },
                                                                    "name": "inner"
                                                                }
                                                            ],
                                                            "name": "FeeCalculatorRef"
                                                        }
                                                    },
                                                    "name": "0"
                                                }
                                            ],
                                            "name": "Some"
                                        }
                                    }
                                }
                            },
                            "name": "fee_calculator"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "enum": {
                                            "dispatchKey": "0x00000064",
                                            "name": "Option",
                                            "variants": {
                                                "0": {
                                                    "fields": [],
                                                    "name": "None"
                                                },
                                                "1": {
                                                    "fields": [
                                                        {
                                                            "layout": {
                                                                "leaf": {
                                                                    "key": "0x00000064",
                                                                    "ty": 0
                                                                }
                                                            },
                                                            "name": "0"
                                                        }
                                                    ],
                                                    "name": "Some"
                                                }
                                            }
                                        }
                                    },
                                    "root_key": "0x00000064"
                                }
                            },
                            "name": "reserved_names"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x00000065",
                                            "ty": 6
                                        }
                                    },
                                    "root_key": "0x00000065"
                                }
                            },
                            "name": "operator_approvals"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "struct": {
                                            "fields": [
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x000000c8",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "name": "owner"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x000000c8",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "name": "controller"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x000000c8",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "name": "resolved"
                                                }
                                            ],
                                            "name": "AddressDict"
                                        }
                                    },
                                    "root_key": "0x000000c8"
                                }
                            },
                            "name": "name_to_address_dict"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x000000c9",
                                            "ty": 0
                                        }
                                    },
                                    "root_key": "0x000000c9"
                                }
                            },
                            "name": "name_to_lock"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "struct": {
                                            "fields": [
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x000000ca",
                                                            "ty": 6
                                                        }
                                                    },
                                                    "name": "0"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x000000ca",
                                                            "ty": 6
                                                        }
                                                    },
                                                    "name": "1"
                                                }
                                            ],
                                            "name": "(A, B)"
                                        }
                                    },
                                    "root_key": "0x000000ca"
                                }
                            },
                            "name": "name_to_period"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x000000cb",
                                            "ty": 7
                                        }
                                    },
                                    "root_key": "0x000000cb"
                                }
                            },
                            "name": "records"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x0000012c",
                                            "ty": 4
                                        }
                                    },
                                    "root_key": "0x0000012c"
                                }
                            },
                            "name": "owner_to_name_count"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x0000012d",
                                            "ty": 3
                                        }
                                    },
                                    "root_key": "0x0000012d"
                                }
                            },
                            "name": "owner_to_names"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x0000012e",
                                            "ty": 4
                                        }
                                    },
                                    "root_key": "0x0000012e"
                                }
                            },
                            "name": "name_to_owner_index"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x00000136",
                                            "ty": 4
                                        }
                                    },
                                    "root_key": "0x00000136"
                                }
                            },
                            "name": "controller_to_name_count"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x00000137",
                                            "ty": 3
                                        }
                                    },
                                    "root_key": "0x00000137"
                                }
                            },
                            "name": "controller_to_names"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x00000138",
                                            "ty": 4
                                        }
                                    },
                                    "root_key": "0x00000138"
                                }
                            },
                            "name": "name_to_controller_index"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x00000140",
                                            "ty": 4
                                        }
                                    },
                                    "root_key": "0x00000140"
                                }
                            },
                            "name": "resolving_to_name_count"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x00000141",
                                            "ty": 3
                                        }
                                    },
                                    "root_key": "0x00000141"
                                }
                            },
                            "name": "resolving_to_names"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x00000143",
                                            "ty": 4
                                        }
                                    },
                                    "root_key": "0x00000143"
                                }
                            },
                            "name": "name_to_resolving_index"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x0000018f",
                                            "ty": 3
                                        }
                                    },
                                    "root_key": "0x0000018f"
                                }
                            },
                            "name": "address_to_primary_name"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "enum": {
                                            "dispatchKey": "0x000003e7",
                                            "name": "Option",
                                            "variants": {
                                                "0": {
                                                    "fields": [],
                                                    "name": "None"
                                                },
                                                "1": {
                                                    "fields": [
                                                        {
                                                            "layout": {
                                                                "struct": {
                                                                    "fields": [
                                                                        {
                                                                            "layout": {
                                                                                "struct": {
                                                                                    "fields": [
                                                                                        {
                                                                                            "layout": {
                                                                                                "leaf": {
                                                                                                    "key": "0x000003e7",
                                                                                                    "ty": 0
                                                                                                }
                                                                                            },
                                                                                            "name": "account_id"
                                                                                        }
                                                                                    ],
                                                                                    "name": "CallBuilder"
                                                                                }
                                                                            },
                                                                            "name": "inner"
                                                                        }
                                                                    ],
                                                                    "name": "MerkleVerifierRef"
                                                                }
                                                            },
                                                            "name": "0"
                                                        }
                                                    ],
                                                    "name": "Some"
                                                }
                                            }
                                        }
                                    },
                                    "root_key": "0x000003e7"
                                }
                            },
                            "name": "whitelisted_address_verifier"
                        }
                    ],
                    "name": "Registry"
                }
            },
            "root_key": "0x00000000"
        }
    },
    "types": [
        {
            "id": 0,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 1,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "AccountId"
                ]
            }
        },
        {
            "id": 1,
            "type": {
                "def": {
                    "array": {
                        "len": 32,
                        "type": 2
                    }
                }
            }
        },
        {
            "id": 2,
            "type": {
                "def": {
                    "primitive": "u8"
                }
            }
        },
        {
            "id": 3,
            "type": {
                "def": {
                    "primitive": "str"
                }
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "primitive": "u128"
                }
            }
        },
        {
            "id": 5,
            "type": {
                "def": {
                    "primitive": "u32"
                }
            }
        },
        {
            "id": 6,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 7,
            "type": {
                "def": {
                    "sequence": {
                        "type": 8
                    }
                }
            }
        },
        {
            "id": 8,
            "type": {
                "def": {
                    "tuple": [
                        3,
                        3
                    ]
                }
            }
        },
        {
            "id": 9,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 0
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 0
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 10,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 11
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 11
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 11,
            "type": {
                "def": {
                    "tuple": []
                }
            }
        },
        {
            "id": 12,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 1,
                                "name": "CouldNotReadInput"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "LangError"
                ]
            }
        },
        {
            "id": 13,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 3
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 3
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 14,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 15
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 15
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 15,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 11
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 16
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 11
                    },
                    {
                        "name": "E",
                        "type": 16
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 16,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "NotAdmin"
                            },
                            {
                                "index": 1,
                                "name": "NameAlreadyExists"
                            },
                            {
                                "index": 2,
                                "name": "NameDoesntExist"
                            },
                            {
                                "index": 3,
                                "name": "NameNotAllowed"
                            },
                            {
                                "index": 4,
                                "name": "CallerIsNotOwner"
                            },
                            {
                                "index": 5,
                                "name": "CallerIsNotController"
                            },
                            {
                                "index": 6,
                                "name": "FeeNotPaid"
                            },
                            {
                                "index": 7,
                                "name": "NameEmpty"
                            },
                            {
                                "index": 8,
                                "name": "RecordNotFound"
                            },
                            {
                                "index": 9,
                                "name": "WithdrawFailed"
                            },
                            {
                                "index": 10,
                                "name": "InsufficientBalance"
                            },
                            {
                                "index": 11,
                                "name": "NoResolvedAddress"
                            },
                            {
                                "index": 12,
                                "name": "AlreadyClaimed"
                            },
                            {
                                "index": 13,
                                "name": "InvalidMerkleProof"
                            },
                            {
                                "index": 14,
                                "name": "CannotBuyReservedName"
                            },
                            {
                                "index": 15,
                                "name": "NotReservedName"
                            },
                            {
                                "index": 16,
                                "name": "NotAuthorised"
                            },
                            {
                                "index": 17,
                                "name": "ZeroAddress"
                            },
                            {
                                "index": 18,
                                "name": "RecordsOverflow"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 17,
                                        "typeName": "azns_fee_calculator::Error"
                                    }
                                ],
                                "index": 19,
                                "name": "FeeError"
                            },
                            {
                                "index": 20,
                                "name": "OnlyDuringWhitelistPhase"
                            },
                            {
                                "index": 21,
                                "name": "RestrictedDuringWhitelistPhase"
                            }
                        ]
                    }
                },
                "path": [
                    "azns_registry",
                    "azns_registry",
                    "Error"
                ]
            }
        },
        {
            "id": 17,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "NotAdmin"
                            },
                            {
                                "index": 1,
                                "name": "InvalidDuration"
                            },
                            {
                                "index": 2,
                                "name": "ZeroLength"
                            },
                            {
                                "index": 3,
                                "name": "ZeroPrice"
                            }
                        ]
                    }
                },
                "path": [
                    "azns_fee_calculator",
                    "Error"
                ]
            }
        },
        {
            "id": 18,
            "type": {
                "def": {
                    "primitive": "bool"
                }
            }
        },
        {
            "id": 19,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 20
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 20
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 20,
            "type": {
                "def": {
                    "sequence": {
                        "type": 1
                    }
                }
            }
        },
        {
            "id": 21,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 22
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 22
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 22,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 16
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    },
                    {
                        "name": "E",
                        "type": 16
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 23,
            "type": {
                "def": {
                    "sequence": {
                        "type": 24
                    }
                }
            }
        },
        {
            "id": 24,
            "type": {
                "def": {
                    "tuple": [
                        3,
                        2,
                        13
                    ]
                }
            }
        },
        {
            "id": 25,
            "type": {
                "def": {
                    "sequence": {
                        "type": 2
                    }
                }
            }
        },
        {
            "id": 26,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 27
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 27
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 27,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 11
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 28
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 11
                    },
                    {
                        "name": "E",
                        "type": 28
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 28,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 3,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 0,
                                "name": "Custom"
                            },
                            {
                                "index": 1,
                                "name": "SelfApprove"
                            },
                            {
                                "index": 2,
                                "name": "NotApproved"
                            },
                            {
                                "index": 3,
                                "name": "TokenExists"
                            },
                            {
                                "index": 4,
                                "name": "TokenNotExists"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 3,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 5,
                                "name": "SafeTransferCheckFailed"
                            }
                        ]
                    }
                },
                "path": [
                    "interfaces",
                    "psp34_standard",
                    "PSP34Error"
                ]
            }
        },
        {
            "id": 29,
            "type": {
                "def": {
                    "sequence": {
                        "type": 3
                    }
                }
            }
        },
        {
            "id": 30,
            "type": {
                "def": {
                    "sequence": {
                        "type": 31
                    }
                }
            }
        },
        {
            "id": 31,
            "type": {
                "def": {
                    "tuple": [
                        3,
                        13
                    ]
                }
            }
        },
        {
            "id": 32,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 33
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 33
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 33,
            "type": {
                "def": {
                    "sequence": {
                        "type": 34
                    }
                }
            }
        },
        {
            "id": 34,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 35,
                                        "typeName": "AddressDict"
                                    },
                                    {
                                        "type": 9,
                                        "typeName": "Option<AccountId>"
                                    }
                                ],
                                "index": 0,
                                "name": "Registered"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9,
                                        "typeName": "Option<AccountId>"
                                    }
                                ],
                                "index": 1,
                                "name": "Reserved"
                            },
                            {
                                "index": 2,
                                "name": "Available"
                            },
                            {
                                "index": 3,
                                "name": "Unavailable"
                            }
                        ]
                    }
                },
                "path": [
                    "azns_registry",
                    "azns_registry",
                    "NameStatus"
                ]
            }
        },
        {
            "id": 35,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "owner",
                                "type": 0,
                                "typeName": "AccountId"
                            },
                            {
                                "name": "controller",
                                "type": 0,
                                "typeName": "AccountId"
                            },
                            {
                                "name": "resolved",
                                "type": 0,
                                "typeName": "AccountId"
                            }
                        ]
                    }
                },
                "path": [
                    "azns_registry",
                    "address_dict",
                    "AddressDict"
                ]
            }
        },
        {
            "id": 36,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 37
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 37
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 37,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 35
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 16
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 35
                    },
                    {
                        "name": "E",
                        "type": 16
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 38,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 39
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 39
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 39,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 0
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 16
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 0
                    },
                    {
                        "name": "E",
                        "type": 16
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 40,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 41
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 41
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 41,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 42
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 16
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 42
                    },
                    {
                        "name": "E",
                        "type": 16
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 42,
            "type": {
                "def": {
                    "tuple": [
                        6,
                        6
                    ]
                }
            }
        },
        {
            "id": 43,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 7
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 7
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 44,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 45
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 45
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 45,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 3
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 16
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 3
                    },
                    {
                        "name": "E",
                        "type": 16
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 46,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 29
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 29
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 47,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 13
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 13
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 48,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 9
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 49,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 50,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 51
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 51
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 51,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 5
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 5
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 52,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 3
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 3
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 53,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 54,
            "type": {
                "def": {
                    "sequence": {
                        "type": 55
                    }
                }
            }
        },
        {
            "id": 55,
            "type": {
                "def": {
                    "tuple": [
                        3,
                        9
                    ]
                }
            }
        },
        {
            "id": 56,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 57
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 57
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 57,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 58
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 16
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 58
                    },
                    {
                        "name": "E",
                        "type": 16
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 58,
            "type": {
                "def": {
                    "tuple": [
                        4,
                        4,
                        4,
                        9
                    ]
                }
            }
        },
        {
            "id": 59,
            "type": {
                "def": {
                    "sequence": {
                        "type": 60
                    }
                }
            }
        },
        {
            "id": 60,
            "type": {
                "def": {
                    "tuple": [
                        3,
                        0,
                        2,
                        13
                    ]
                }
            }
        },
        {
            "id": 61,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 62
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 62
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 62,
            "type": {
                "def": {
                    "sequence": {
                        "type": 57
                    }
                }
            }
        },
        {
            "id": 63,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 18
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 18
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 64,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 0
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 0
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 65,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 66
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 66
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 66,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 2,
                                        "typeName": "u8"
                                    }
                                ],
                                "index": 0,
                                "name": "U8"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 67,
                                        "typeName": "u16"
                                    }
                                ],
                                "index": 1,
                                "name": "U16"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 5,
                                        "typeName": "u32"
                                    }
                                ],
                                "index": 2,
                                "name": "U32"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 6,
                                        "typeName": "u64"
                                    }
                                ],
                                "index": 3,
                                "name": "U64"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 4,
                                        "typeName": "u128"
                                    }
                                ],
                                "index": 4,
                                "name": "U128"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 25,
                                        "typeName": "Vec<u8>"
                                    }
                                ],
                                "index": 5,
                                "name": "Bytes"
                            }
                        ]
                    }
                },
                "path": [
                    "interfaces",
                    "psp34_standard",
                    "Id"
                ]
            }
        },
        {
            "id": 67,
            "type": {
                "def": {
                    "primitive": "u16"
                }
            }
        },
        {
            "id": 68,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 5
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 5
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 69,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 66
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 66
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 70,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 71
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 71
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 71,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 66
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 28
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 66
                    },
                    {
                        "name": "E",
                        "type": 28
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 72,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 73
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 73
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 73,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 25
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 25
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 74,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 75
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 75
                    },
                    {
                        "name": "E",
                        "type": 12
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 75,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 11
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 76
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 11
                    },
                    {
                        "name": "E",
                        "type": 76
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 76,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 3,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 0,
                                "name": "Custom"
                            }
                        ]
                    }
                },
                "path": [
                    "interfaces",
                    "art_zero_traits",
                    "ArtZeroError"
                ]
            }
        },
        {
            "id": 77,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 1,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "Hash"
                ]
            }
        },
        {
            "id": 78,
            "type": {
                "def": {
                    "variant": {}
                },
                "path": [
                    "ink_env",
                    "types",
                    "NoChainExtension"
                ]
            }
        }
    ],
    "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(bytes: Bytes): Event {
    return _abi.decodeEvent(bytes)
}

export function decodeMessage(bytes: Bytes): Message {
    return _abi.decodeMessage(bytes)
}

export function decodeConstructor(bytes: Bytes): Constructor {
    return _abi.decodeConstructor(bytes)
}

export interface Chain {
    rpc: {
        call<T=any>(method: string, params?: unknown[]): Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: Bytes, private blockHash?: Bytes) { }

    get_name_status(names: String[]): Promise<Result<NameStatus[], LangError>> {
        return this.stateCall('0x964d7612', [names])
    }

    get_address_dict(name: String): Promise<Result<Result<AddressDict, Error>, LangError>> {
        return this.stateCall('0xf069dff3', [name])
    }

    get_owner(name: String): Promise<Result<Result<AccountId, Error>, LangError>> {
        return this.stateCall('0x07fcd0b1', [name])
    }

    get_controller(name: String): Promise<Result<Result<AccountId, Error>, LangError>> {
        return this.stateCall('0x0abf0e97', [name])
    }

    get_address(name: String): Promise<Result<Result<AccountId, Error>, LangError>> {
        return this.stateCall('0xd259f7ba', [name])
    }

    get_registration_period(name: String): Promise<Result<Result<[u64, u64], Error>, LangError>> {
        return this.stateCall('0x61437185', [name])
    }

    get_all_records(name: String): Promise<Result<[String, String][], LangError>> {
        return this.stateCall('0x528be9f1', [name])
    }

    get_record(name: String, key: String): Promise<Result<Result<String, Error>, LangError>> {
        return this.stateCall('0x7e6cb4ce', [name, key])
    }

    get_owned_names_of_address(owner: AccountId): Promise<Result<String[], LangError>> {
        return this.stateCall('0xe413b13a', [owner])
    }

    get_controlled_names_of_address(controller: AccountId): Promise<Result<String[], LangError>> {
        return this.stateCall('0x9f25301e', [controller])
    }

    get_resolving_names_of_address(address: AccountId): Promise<Result<String[], LangError>> {
        return this.stateCall('0xadd2f457', [address])
    }

    get_primary_name(address: AccountId): Promise<Result<Result<String, Error>, LangError>> {
        return this.stateCall('0x404f1d73', [address])
    }

    get_primary_domain(address: AccountId): Promise<Result<(String | undefined), LangError>> {
        return this.stateCall('0xbf5b5677', [address])
    }

    get_lock_info(name: String): Promise<Result<(AccountId | undefined), LangError>> {
        return this.stateCall('0x5974dd04', [name])
    }

    get_names_of_address(address: AccountId): Promise<Result<String[], LangError>> {
        return this.stateCall('0xf82caf60', [address])
    }

    get_owner_to_name_count(user: AccountId): Promise<Result<bigint, LangError>> {
        return this.stateCall('0xb779edfe', [user])
    }

    get_controller_to_name_count(user: AccountId): Promise<Result<bigint, LangError>> {
        return this.stateCall('0xf5e0d676', [user])
    }

    get_resolving_to_name_count(user: AccountId): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x28610555', [user])
    }

    get_records_size_limit(): Promise<Result<(u32 | undefined), LangError>> {
        return this.stateCall('0x8405efa0', [])
    }

    get_tld(): Promise<Result<String, LangError>> {
        return this.stateCall('0xd61daed4', [])
    }

    get_base_uri(): Promise<Result<String, LangError>> {
        return this.stateCall('0x6e06617c', [])
    }

    get_name_price(name: String, recipient: AccountId, years_to_register: u8, referrer: (String | undefined)): Promise<Result<Result<[bigint, bigint, bigint, (AccountId | undefined)], Error>, LangError>> {
        return this.stateCall('0xb565be46', [name, recipient, years_to_register, referrer])
    }

    batch_get_name_price(input: [String, AccountId, u8, (String | undefined)][]): Promise<Result<Result<[bigint, bigint, bigint, (AccountId | undefined)], Error>[], LangError>> {
        return this.stateCall('0xfc5a5fc3', [input])
    }

    validate_referrer(recipient: AccountId, referrer_name: String): Promise<Result<bool, LangError>> {
        return this.stateCall('0x30fc989d', [recipient, referrer_name])
    }

    get_admin(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x57b8a8a7', [])
    }

    get_pending_admin(): Promise<Result<(AccountId | undefined), LangError>> {
        return this.stateCall('0xbcd31d76', [])
    }

    PSP34_collection_id(): Promise<Result<Id, LangError>> {
        return this.stateCall('0xffa27a5f', [])
    }

    PSP34_balance_of(owner: AccountId): Promise<Result<u32, LangError>> {
        return this.stateCall('0xcde7e55f', [owner])
    }

    PSP34_owner_of(id: Id): Promise<Result<(AccountId | undefined), LangError>> {
        return this.stateCall('0x1168624d', [id])
    }

    PSP34_allowance(owner: AccountId, operator: AccountId, id: (Id | undefined)): Promise<Result<bool, LangError>> {
        return this.stateCall('0x4790f55a', [owner, operator, id])
    }

    PSP34_total_supply(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x628413fe', [])
    }

    PSP34Enumerable_owners_token_by_index(owner: AccountId, index: bigint): Promise<Result<Result<Id, PSP34Error>, LangError>> {
        return this.stateCall('0x3bcfb511', [owner, index])
    }

    PSP34Enumerable_token_by_index(_index: bigint): Promise<Result<Result<Id, PSP34Error>, LangError>> {
        return this.stateCall('0xcd0340d0', [_index])
    }

    PSP34Metadata_get_attribute(id: Id, key: Vec): Promise<Result<(Vec | undefined), LangError>> {
        return this.stateCall('0xf19d48d1', [id, key])
    }

    Psp34Traits_get_owner(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x8e1d8d71', [])
    }

    Psp34Traits_token_uri(token_id: Id): Promise<Result<String, LangError>> {
        return this.stateCall('0x249dfd4f', [token_id])
    }

    Psp34Traits_get_attribute_count(): Promise<Result<u32, LangError>> {
        return this.stateCall('0x61c50d69', [])
    }

    Psp34Traits_get_attribute_name(index: u32): Promise<Result<String, LangError>> {
        return this.stateCall('0xfcfe34de', [index])
    }

    Psp34Traits_get_attributes(token_id: Id, attributes: String[]): Promise<Result<String[], LangError>> {
        return this.stateCall('0x18209102', [token_id, attributes])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.rpc.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Vec = Bytes

export type PSP34Error = PSP34Error_Custom | PSP34Error_NotApproved | PSP34Error_SafeTransferCheckFailed | PSP34Error_SelfApprove | PSP34Error_TokenExists | PSP34Error_TokenNotExists

export interface PSP34Error_Custom {
    __kind: 'Custom'
    value: String
}

export interface PSP34Error_NotApproved {
    __kind: 'NotApproved'
}

export interface PSP34Error_SafeTransferCheckFailed {
    __kind: 'SafeTransferCheckFailed'
    value: String
}

export interface PSP34Error_SelfApprove {
    __kind: 'SelfApprove'
}

export interface PSP34Error_TokenExists {
    __kind: 'TokenExists'
}

export interface PSP34Error_TokenNotExists {
    __kind: 'TokenNotExists'
}

export type Id = Id_Bytes | Id_U128 | Id_U16 | Id_U32 | Id_U64 | Id_U8

export interface Id_Bytes {
    __kind: 'Bytes'
    value: Vec
}

export interface Id_U128 {
    __kind: 'U128'
    value: bigint
}

export interface Id_U16 {
    __kind: 'U16'
    value: number
}

export interface Id_U32 {
    __kind: 'U32'
    value: u32
}

export interface Id_U64 {
    __kind: 'U64'
    value: u64
}

export interface Id_U8 {
    __kind: 'U8'
    value: u8
}

export type bool = boolean

export type u8 = number

export type u32 = number

export type u64 = bigint

export type AccountId = Bytes

export type Error = Error_AlreadyClaimed | Error_CallerIsNotController | Error_CallerIsNotOwner | Error_CannotBuyReservedName | Error_FeeError | Error_FeeNotPaid | Error_InsufficientBalance | Error_InvalidMerkleProof | Error_NameAlreadyExists | Error_NameDoesntExist | Error_NameEmpty | Error_NameNotAllowed | Error_NoResolvedAddress | Error_NotAdmin | Error_NotAuthorised | Error_NotReservedName | Error_OnlyDuringWhitelistPhase | Error_RecordNotFound | Error_RecordsOverflow | Error_RestrictedDuringWhitelistPhase | Error_WithdrawFailed | Error_ZeroAddress

export interface Error_AlreadyClaimed {
    __kind: 'AlreadyClaimed'
}

export interface Error_CallerIsNotController {
    __kind: 'CallerIsNotController'
}

export interface Error_CallerIsNotOwner {
    __kind: 'CallerIsNotOwner'
}

export interface Error_CannotBuyReservedName {
    __kind: 'CannotBuyReservedName'
}

export interface Error_FeeError {
    __kind: 'FeeError'
    value: Type_17
}

export interface Error_FeeNotPaid {
    __kind: 'FeeNotPaid'
}

export interface Error_InsufficientBalance {
    __kind: 'InsufficientBalance'
}

export interface Error_InvalidMerkleProof {
    __kind: 'InvalidMerkleProof'
}

export interface Error_NameAlreadyExists {
    __kind: 'NameAlreadyExists'
}

export interface Error_NameDoesntExist {
    __kind: 'NameDoesntExist'
}

export interface Error_NameEmpty {
    __kind: 'NameEmpty'
}

export interface Error_NameNotAllowed {
    __kind: 'NameNotAllowed'
}

export interface Error_NoResolvedAddress {
    __kind: 'NoResolvedAddress'
}

export interface Error_NotAdmin {
    __kind: 'NotAdmin'
}

export interface Error_NotAuthorised {
    __kind: 'NotAuthorised'
}

export interface Error_NotReservedName {
    __kind: 'NotReservedName'
}

export interface Error_OnlyDuringWhitelistPhase {
    __kind: 'OnlyDuringWhitelistPhase'
}

export interface Error_RecordNotFound {
    __kind: 'RecordNotFound'
}

export interface Error_RecordsOverflow {
    __kind: 'RecordsOverflow'
}

export interface Error_RestrictedDuringWhitelistPhase {
    __kind: 'RestrictedDuringWhitelistPhase'
}

export interface Error_WithdrawFailed {
    __kind: 'WithdrawFailed'
}

export interface Error_ZeroAddress {
    __kind: 'ZeroAddress'
}

export type Type_17 = Type_17_InvalidDuration | Type_17_NotAdmin | Type_17_ZeroLength | Type_17_ZeroPrice

export interface Type_17_InvalidDuration {
    __kind: 'InvalidDuration'
}

export interface Type_17_NotAdmin {
    __kind: 'NotAdmin'
}

export interface Type_17_ZeroLength {
    __kind: 'ZeroLength'
}

export interface Type_17_ZeroPrice {
    __kind: 'ZeroPrice'
}

export interface AddressDict {
    owner: AccountId
    controller: AccountId
    resolved: AccountId
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type NameStatus = NameStatus_Available | NameStatus_Registered | NameStatus_Reserved | NameStatus_Unavailable

export interface NameStatus_Available {
    __kind: 'Available'
}

export interface NameStatus_Registered {
    __kind: 'Registered'
    value: [AddressDict, (AccountId | undefined)]
}

export interface NameStatus_Reserved {
    __kind: 'Reserved'
    value?: (AccountId | undefined)
}

export interface NameStatus_Unavailable {
    __kind: 'Unavailable'
}

export type String = string

export type Constructor = Constructor_new

/**
 * Creates a new AZNS contract.
 */
export interface Constructor_new {
    __kind: 'new'
    admin: AccountId
    nameCheckerAddr?: (AccountId | undefined)
    feeCalculatorAddr?: (AccountId | undefined)
    tld: String
    baseUri: String
}

export type Message = Message_PSP34Enumerable_owners_token_by_index | Message_PSP34Enumerable_token_by_index | Message_PSP34Metadata_get_attribute | Message_PSP34_allowance | Message_PSP34_approve | Message_PSP34_balance_of | Message_PSP34_collection_id | Message_PSP34_owner_of | Message_PSP34_total_supply | Message_PSP34_transfer | Message_Psp34Traits_get_attribute_count | Message_Psp34Traits_get_attribute_name | Message_Psp34Traits_get_attributes | Message_Psp34Traits_get_owner | Message_Psp34Traits_set_base_uri | Message_Psp34Traits_set_multiple_attributes | Message_Psp34Traits_token_uri | Message_accept_ownership | Message_add_reserved_names | Message_batch_get_name_price | Message_batch_renew | Message_claim_reserved_name | Message_clear_expired_names | Message_get_address | Message_get_address_dict | Message_get_admin | Message_get_all_records | Message_get_base_uri | Message_get_controlled_names_of_address | Message_get_controller | Message_get_controller_to_name_count | Message_get_lock_info | Message_get_name_price | Message_get_name_status | Message_get_names_of_address | Message_get_owned_names_of_address | Message_get_owner | Message_get_owner_to_name_count | Message_get_pending_admin | Message_get_primary_domain | Message_get_primary_name | Message_get_record | Message_get_records_size_limit | Message_get_registration_period | Message_get_resolving_names_of_address | Message_get_resolving_to_name_count | Message_get_tld | Message_register | Message_register_on_behalf_of | Message_register_v2 | Message_release | Message_remove_reserved_name | Message_renew | Message_reset_controller | Message_reset_resolved_address | Message_set_address | Message_set_controller | Message_set_primary_name | Message_set_records_size_limit | Message_transfer | Message_transfer_ownership | Message_update_records | Message_upgrade_contract | Message_validate_referrer | Message_withdraw

export interface Message_PSP34Enumerable_owners_token_by_index {
    __kind: 'PSP34Enumerable_owners_token_by_index'
    owner: AccountId
    index: bigint
}

export interface Message_PSP34Enumerable_token_by_index {
    __kind: 'PSP34Enumerable_token_by_index'
    index: bigint
}

export interface Message_PSP34Metadata_get_attribute {
    __kind: 'PSP34Metadata_get_attribute'
    id: Id
    key: Vec
}

export interface Message_PSP34_allowance {
    __kind: 'PSP34_allowance'
    owner: AccountId
    operator: AccountId
    id?: (Id | undefined)
}

export interface Message_PSP34_approve {
    __kind: 'PSP34_approve'
    operator: AccountId
    id?: (Id | undefined)
    approved: bool
}

export interface Message_PSP34_balance_of {
    __kind: 'PSP34_balance_of'
    owner: AccountId
}

export interface Message_PSP34_collection_id {
    __kind: 'PSP34_collection_id'
}

export interface Message_PSP34_owner_of {
    __kind: 'PSP34_owner_of'
    id: Id
}

export interface Message_PSP34_total_supply {
    __kind: 'PSP34_total_supply'
}

export interface Message_PSP34_transfer {
    __kind: 'PSP34_transfer'
    to: AccountId
    id: Id
    data: Vec
}

export interface Message_Psp34Traits_get_attribute_count {
    __kind: 'Psp34Traits_get_attribute_count'
}

export interface Message_Psp34Traits_get_attribute_name {
    __kind: 'Psp34Traits_get_attribute_name'
    index: u32
}

export interface Message_Psp34Traits_get_attributes {
    __kind: 'Psp34Traits_get_attributes'
    tokenId: Id
    attributes: String[]
}

export interface Message_Psp34Traits_get_owner {
    __kind: 'Psp34Traits_get_owner'
}

export interface Message_Psp34Traits_set_base_uri {
    __kind: 'Psp34Traits_set_base_uri'
    uri: String
}

export interface Message_Psp34Traits_set_multiple_attributes {
    __kind: 'Psp34Traits_set_multiple_attributes'
    tokenId: Id
    metadata: [String, String][]
}

export interface Message_Psp34Traits_token_uri {
    __kind: 'Psp34Traits_token_uri'
    tokenId: Id
}

export interface Message_accept_ownership {
    __kind: 'accept_ownership'
}

/**
 *  (ADMIN-OPERATION)
 *  Reserve name name for specific addresses
 */
export interface Message_add_reserved_names {
    __kind: 'add_reserved_names'
    set: [String, (AccountId | undefined)][]
    skipNameChecker: bool
}

export interface Message_batch_get_name_price {
    __kind: 'batch_get_name_price'
    input: [String, AccountId, u8, (String | undefined)][]
}

export interface Message_batch_renew {
    __kind: 'batch_renew'
    data: [String, u8, (String | undefined)][]
}

/**
 *  Allows users to claim their reserved name at zero cost
 */
export interface Message_claim_reserved_name {
    __kind: 'claim_reserved_name'
    name: String
    setAsPrimaryName: bool
}

/**
 *  Removes the associated state of expired-names from storage
 */
export interface Message_clear_expired_names {
    __kind: 'clear_expired_names'
    names: String[]
}

/**
 *  Get address for specific name.
 */
export interface Message_get_address {
    __kind: 'get_address'
    name: String
}

/**
 *  Get the addresses related to specific name
 */
export interface Message_get_address_dict {
    __kind: 'get_address_dict'
    name: String
}

export interface Message_get_admin {
    __kind: 'get_admin'
}

/**
 *  Gets all records
 */
export interface Message_get_all_records {
    __kind: 'get_all_records'
    name: String
}

export interface Message_get_base_uri {
    __kind: 'get_base_uri'
}

export interface Message_get_controlled_names_of_address {
    __kind: 'get_controlled_names_of_address'
    controller: AccountId
}

/**
 *  Get controller of specific name.
 */
export interface Message_get_controller {
    __kind: 'get_controller'
    name: String
}

export interface Message_get_controller_to_name_count {
    __kind: 'get_controller_to_name_count'
    user: AccountId
}

export interface Message_get_lock_info {
    __kind: 'get_lock_info'
    name: String
}

export interface Message_get_name_price {
    __kind: 'get_name_price'
    name: String
    recipient: AccountId
    yearsToRegister: u8
    referrer?: (String | undefined)
}

/**
 *  Returns the current status of the name
 */
export interface Message_get_name_status {
    __kind: 'get_name_status'
    names: String[]
}

export interface Message_get_names_of_address {
    __kind: 'get_names_of_address'
    address: AccountId
}

/**
 *  Returns all names the address owns
 */
export interface Message_get_owned_names_of_address {
    __kind: 'get_owned_names_of_address'
    owner: AccountId
}

/**
 *  Get owner of specific name.
 */
export interface Message_get_owner {
    __kind: 'get_owner'
    name: String
}

export interface Message_get_owner_to_name_count {
    __kind: 'get_owner_to_name_count'
    user: AccountId
}

export interface Message_get_pending_admin {
    __kind: 'get_pending_admin'
}

export interface Message_get_primary_domain {
    __kind: 'get_primary_domain'
    address: AccountId
}

export interface Message_get_primary_name {
    __kind: 'get_primary_name'
    address: AccountId
}

/**
 *  Gets an arbitrary record by key
 */
export interface Message_get_record {
    __kind: 'get_record'
    name: String
    key: String
}

export interface Message_get_records_size_limit {
    __kind: 'get_records_size_limit'
}

export interface Message_get_registration_period {
    __kind: 'get_registration_period'
    name: String
}

export interface Message_get_resolving_names_of_address {
    __kind: 'get_resolving_names_of_address'
    address: AccountId
}

export interface Message_get_resolving_to_name_count {
    __kind: 'get_resolving_to_name_count'
    user: AccountId
}

export interface Message_get_tld {
    __kind: 'get_tld'
}

/**
 *  register_v1
 */
export interface Message_register {
    __kind: 'register'
    name: String
    yearsToRegister: u8
    referrer?: (String | undefined)
    merkleProof?: (Bytes[] | undefined)
    setAsPrimaryName: bool
}

/**
 *  Register specific name on behalf of some other address.
 *  Pay the fee, but forward the ownership of the name to the provided recipient
 * 
 *  NOTE: During the whitelist phase, use `register()` method instead.
 */
export interface Message_register_on_behalf_of {
    __kind: 'register_on_behalf_of'
    name: String
    recipient: AccountId
    yearsToRegister: u8
    referrer?: (String | undefined)
    bonusName?: (String | undefined)
}

/**
 *  Register specific name with caller as owner.
 */
export interface Message_register_v2 {
    __kind: 'register_v2'
    name: String
    yearsToRegister: u8
    referrer?: (String | undefined)
    bonusName?: (String | undefined)
    setAsPrimaryName: bool
}

/**
 *  Release name from registration.
 */
export interface Message_release {
    __kind: 'release'
    name: String
}

/**
 *  (ADMIN-OPERATION)
 *  Remove given names from the list of reserved names
 */
export interface Message_remove_reserved_name {
    __kind: 'remove_reserved_name'
    set: String[]
}

export interface Message_renew {
    __kind: 'renew'
    name: String
    yearsToRenew: u8
    bonusName?: (String | undefined)
}

export interface Message_reset_controller {
    __kind: 'reset_controller'
    names: String[]
}

export interface Message_reset_resolved_address {
    __kind: 'reset_resolved_address'
    names: String[]
}

/**
 *  Set resolved address for specific name.
 */
export interface Message_set_address {
    __kind: 'set_address'
    name: String
    newAddress: AccountId
}

export interface Message_set_controller {
    __kind: 'set_controller'
    name: String
    newController: AccountId
}

/**
 *  Set primary name of an address (reverse record)
 *  @note if name is set to None then the primary-name for the caller will be removed (if exists)
 */
export interface Message_set_primary_name {
    __kind: 'set_primary_name'
    primaryName?: (String | undefined)
}

/**
 *  (ADMIN-OPERATION)
 *  Update the limit of records allowed to store per name
 */
export interface Message_set_records_size_limit {
    __kind: 'set_records_size_limit'
    limit?: (u32 | undefined)
}

/**
 *  Transfer owner to another address.
 */
export interface Message_transfer {
    __kind: 'transfer'
    to: AccountId
    name: String
    keepRecords: bool
    keepController: bool
    keepResolving: bool
    data: Vec
}

export interface Message_transfer_ownership {
    __kind: 'transfer_ownership'
    account?: (AccountId | undefined)
}

export interface Message_update_records {
    __kind: 'update_records'
    name: String
    records: [String, (String | undefined)][]
    removeRest: bool
}

export interface Message_upgrade_contract {
    __kind: 'upgrade_contract'
    codeHash: Bytes
}

export interface Message_validate_referrer {
    __kind: 'validate_referrer'
    recipient: AccountId
    referrerName: String
}

/**
 *  (ADMIN-OPERATION)
 *  Transfers `value` amount of tokens to the caller.
 */
export interface Message_withdraw {
    __kind: 'withdraw'
    beneficiary?: (AccountId | undefined)
    value?: (bigint | undefined)
}

export type Event = Event_Approval | Event_FeeReceived | Event_Lock | Event_PublicPhaseActivated | Event_RecordsUpdated | Event_Register | Event_Release | Event_Renew | Event_Reserve | Event_SetAddress | Event_SetController | Event_SetPrimaryName | Event_Transfer | Event_Unlock

export interface Event_Approval {
    __kind: 'Approval'
    owner: AccountId
    operator: AccountId
    id?: (Id | undefined)
    approved: bool
}

export interface Event_FeeReceived {
    __kind: 'FeeReceived'
    name: String
    from: AccountId
    referrer?: (String | undefined)
    referrerAddr?: (AccountId | undefined)
    receivedFee: bigint
    forwardedReferrerFee: bigint
}

export interface Event_Lock {
    __kind: 'Lock'
    name: String
    caller: AccountId
    unlocker: AccountId
}

export interface Event_PublicPhaseActivated {
    __kind: 'PublicPhaseActivated'
}

export interface Event_RecordsUpdated {
    __kind: 'RecordsUpdated'
    name: String
    from: AccountId
}

export interface Event_Register {
    __kind: 'Register'
    name: String
    from: AccountId
    registrationTimestamp: u64
    expirationTimestamp: u64
}

export interface Event_Release {
    __kind: 'Release'
    name: String
    from: AccountId
}

export interface Event_Renew {
    __kind: 'Renew'
    name: String
    oldExpiry: u64
    newExpiry: u64
}

export interface Event_Reserve {
    __kind: 'Reserve'
    name: String
    accountId?: (AccountId | undefined)
    action: bool
}

export interface Event_SetAddress {
    __kind: 'SetAddress'
    name: String
    from: AccountId
    oldAddress?: (AccountId | undefined)
    newAddress: AccountId
}

export interface Event_SetController {
    __kind: 'SetController'
    name: String
    from: AccountId
    oldController?: (AccountId | undefined)
    newController: AccountId
}

export interface Event_SetPrimaryName {
    __kind: 'SetPrimaryName'
    account: AccountId
    primaryName?: (String | undefined)
}

export interface Event_Transfer {
    __kind: 'Transfer'
    from?: (AccountId | undefined)
    to?: (AccountId | undefined)
    id: Id
}

export interface Event_Unlock {
    __kind: 'Unlock'
    name: String
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
