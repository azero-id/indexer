import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0x0084911130c2832ce4c80ee9ead1a157bdf5c5b27a135b66f95eb269d58bf059",
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
        "name": "azns_router",
        "version": "1.0.0",
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
                    }
                ],
                "default": false,
                "docs": [],
                "label": "new",
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink_primitives",
                        "ConstructorResult"
                    ],
                    "type": 6
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
                "type": 25
            },
            "blockNumber": {
                "displayName": [
                    "BlockNumber"
                ],
                "type": 28
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 29
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 26
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 27
            }
        },
        "events": [],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 8
        },
        "messages": [
            {
                "args": [
                    {
                        "label": "tld",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "registry_addr",
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
                "label": "add_registry",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0xc997efe3"
            },
            {
                "args": [
                    {
                        "label": "tld",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "registry_addr",
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
                "label": "update_registry",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0x562de86b"
            },
            {
                "args": [
                    {
                        "label": "registry_addr",
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
                "label": "remove_registry_address",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0xcc78aead"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_all_registries",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 12
                },
                "selector": "0xe6da7bf0"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_all_tlds",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 15
                },
                "selector": "0xf1a7af41"
            },
            {
                "args": [
                    {
                        "label": "registry_addr",
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
                "label": "get_associated_tlds",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 15
                },
                "selector": "0xcb18f821"
            },
            {
                "args": [
                    {
                        "label": "tld",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 5
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_registry",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 16
                },
                "selector": "0x15a5d20a"
            },
            {
                "args": [
                    {
                        "label": "domain",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 5
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_address",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 18
                },
                "selector": "0xd259f7ba"
            },
            {
                "args": [
                    {
                        "label": "account",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "tld",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 20
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " @returns list of (registry-address, primary-domain) for given account"
                ],
                "label": "get_primary_domains",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 21
                },
                "selector": "0xdf3a358e"
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
                    "type": 24
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
                    "type": 16
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
                            "type": 17
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
                    "type": 9
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
                    "type": 9
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
                    "type": 6
                },
                "selector": "0x1345543d"
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
                            "name": "registry"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x00000064",
                                            "ty": 0
                                        }
                                    },
                                    "root_key": "0x00000064"
                                }
                            },
                            "name": "routes"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x00000065",
                                            "ty": 4
                                        }
                                    },
                                    "root_key": "0x00000065"
                                }
                            },
                            "name": "associated_tlds"
                        }
                    ],
                    "name": "Router"
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
                    "sequence": {
                        "type": 0
                    }
                }
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "sequence": {
                        "type": 5
                    }
                }
            }
        },
        {
            "id": 5,
            "type": {
                "def": {
                    "primitive": "str"
                }
            }
        },
        {
            "id": 6,
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
                                        "type": 8
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
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 7,
            "type": {
                "def": {
                    "tuple": []
                }
            }
        },
        {
            "id": 8,
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
            "id": 9,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 10
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
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
                        "type": 10
                    },
                    {
                        "name": "E",
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
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
                                        "type": 7
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 11
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
                        "type": 11
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
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "NotAdmin"
                            },
                            {
                                "index": 1,
                                "name": "InvalidRegistryAddress"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 5,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 2,
                                "name": "TldAlreadyInUse"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 5,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 3,
                                "name": "TldNotFound"
                            },
                            {
                                "index": 4,
                                "name": "CouldNotResolveDomain"
                            },
                            {
                                "index": 5,
                                "name": "InvalidDomainName"
                            },
                            {
                                "index": 6,
                                "name": "EmptyList"
                            }
                        ]
                    }
                },
                "path": [
                    "azns_router",
                    "azns_router",
                    "Error"
                ]
            }
        },
        {
            "id": 12,
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
                                        "type": 8
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
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 13,
            "type": {
                "def": {
                    "sequence": {
                        "type": 14
                    }
                }
            }
        },
        {
            "id": 14,
            "type": {
                "def": {
                    "tuple": [
                        0,
                        4
                    ]
                }
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
                                        "type": 4
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
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
                        "type": 8
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
                                "fields": [
                                    {
                                        "type": 17
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
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
                        "type": 17
                    },
                    {
                        "name": "E",
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
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
            "id": 18,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 19
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 8
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
                        "type": 19
                    },
                    {
                        "name": "E",
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 19,
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
                                        "type": 11
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
                        "type": 11
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 20,
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
                                        "type": 8
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
                        "type": 8
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
                    "sequence": {
                        "type": 23
                    }
                }
            }
        },
        {
            "id": 23,
            "type": {
                "def": {
                    "tuple": [
                        0,
                        5
                    ]
                }
            }
        },
        {
            "id": 24,
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
                                        "type": 8
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
                        "type": 8
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 25,
            "type": {
                "def": {
                    "primitive": "u128"
                }
            }
        },
        {
            "id": 26,
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
            "id": 27,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 28,
            "type": {
                "def": {
                    "primitive": "u32"
                }
            }
        },
        {
            "id": 29,
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

    get_all_registries(): Promise<Result<[AccountId, String[]][], LangError>> {
        return this.stateCall('0xe6da7bf0', [])
    }

    get_all_tlds(): Promise<Result<String[], LangError>> {
        return this.stateCall('0xf1a7af41', [])
    }

    get_associated_tlds(registry_addr: AccountId): Promise<Result<String[], LangError>> {
        return this.stateCall('0xcb18f821', [registry_addr])
    }

    get_registry(tld: String): Promise<Result<(AccountId | undefined), LangError>> {
        return this.stateCall('0x15a5d20a', [tld])
    }

    get_address(domain: String): Promise<Result<Result<AccountId, Error>, LangError>> {
        return this.stateCall('0xd259f7ba', [domain])
    }

    get_primary_domains(account: AccountId, tld: (String | undefined)): Promise<Result<[AccountId, String][], LangError>> {
        return this.stateCall('0xdf3a358e', [account, tld])
    }

    get_admin(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x57b8a8a7', [])
    }

    get_pending_admin(): Promise<Result<(AccountId | undefined), LangError>> {
        return this.stateCall('0xbcd31d76', [])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.rpc.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Error = Error_CouldNotResolveDomain | Error_EmptyList | Error_InvalidDomainName | Error_InvalidRegistryAddress | Error_NotAdmin | Error_TldAlreadyInUse | Error_TldNotFound

export interface Error_CouldNotResolveDomain {
    __kind: 'CouldNotResolveDomain'
}

export interface Error_EmptyList {
    __kind: 'EmptyList'
}

export interface Error_InvalidDomainName {
    __kind: 'InvalidDomainName'
}

export interface Error_InvalidRegistryAddress {
    __kind: 'InvalidRegistryAddress'
}

export interface Error_NotAdmin {
    __kind: 'NotAdmin'
}

export interface Error_TldAlreadyInUse {
    __kind: 'TldAlreadyInUse'
    value: String
}

export interface Error_TldNotFound {
    __kind: 'TldNotFound'
    value: String
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type String = string

export type AccountId = Bytes

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    admin: AccountId
}

export type Message = Message_accept_ownership | Message_add_registry | Message_get_address | Message_get_admin | Message_get_all_registries | Message_get_all_tlds | Message_get_associated_tlds | Message_get_pending_admin | Message_get_primary_domains | Message_get_registry | Message_remove_registry_address | Message_transfer_ownership | Message_update_registry | Message_upgrade_contract

export interface Message_accept_ownership {
    __kind: 'accept_ownership'
}

export interface Message_add_registry {
    __kind: 'add_registry'
    tld: String[]
    registryAddr: AccountId
}

export interface Message_get_address {
    __kind: 'get_address'
    domain: String
}

export interface Message_get_admin {
    __kind: 'get_admin'
}

export interface Message_get_all_registries {
    __kind: 'get_all_registries'
}

export interface Message_get_all_tlds {
    __kind: 'get_all_tlds'
}

export interface Message_get_associated_tlds {
    __kind: 'get_associated_tlds'
    registryAddr: AccountId
}

export interface Message_get_pending_admin {
    __kind: 'get_pending_admin'
}

/**
 *  @returns list of (registry-address, primary-domain) for given account
 */
export interface Message_get_primary_domains {
    __kind: 'get_primary_domains'
    account: AccountId
    tld?: (String | undefined)
}

export interface Message_get_registry {
    __kind: 'get_registry'
    tld: String
}

export interface Message_remove_registry_address {
    __kind: 'remove_registry_address'
    registryAddr: AccountId
}

export interface Message_transfer_ownership {
    __kind: 'transfer_ownership'
    account?: (AccountId | undefined)
}

export interface Message_update_registry {
    __kind: 'update_registry'
    tld: String[]
    registryAddr: AccountId
}

export interface Message_upgrade_contract {
    __kind: 'upgrade_contract'
    codeHash: Bytes
}

export type Event = never

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
