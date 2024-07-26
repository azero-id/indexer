import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0x106a159a9b11e7a33e1037a60ff30b5334f278ef2695bb97766b9eb8dbcc485f",
        "language": "ink! 4.2.1",
        "compiler": "rustc 1.68.0-nightly",
        "build_info": {
            "build_mode": "Release",
            "cargo_contract_version": "3.0.1",
            "rust_toolchain": "nightly-aarch64-apple-darwin",
            "wasm_opt_settings": {
                "keep_debug_symbols": false,
                "optimization_passes": "Z"
            }
        }
    },
    "contract": {
        "name": "azns_merkle_verifier",
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
                    },
                    {
                        "label": "root",
                        "type": {
                            "displayName": [],
                            "type": 1
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
                    "type": 3
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
                "type": 16
            },
            "blockNumber": {
                "displayName": [
                    "BlockNumber"
                ],
                "type": 19
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 20
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 17
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 18
            }
        },
        "events": [],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 5
        },
        "messages": [
            {
                "args": [
                    {
                        "label": "new_root",
                        "type": {
                            "displayName": [],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "update_root",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 6
                },
                "selector": "0x8b5342e3"
            },
            {
                "args": [],
                "default": false,
                "docs": [
                    " Returns the merkle root"
                ],
                "label": "root",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0x0859bfce"
            },
            {
                "args": [
                    {
                        "label": "leaf",
                        "type": {
                            "displayName": [],
                            "type": 1
                        }
                    },
                    {
                        "label": "proof",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 10
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Verifies inclusion of leaf in the merkle tree"
                ],
                "label": "verify_proof",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 11
                },
                "selector": "0x71c9d9ba"
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
                    "type": 13
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
                    "type": 14
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
                            "type": 15
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
                    "type": 6
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
                    "type": 6
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
                    "type": 3
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
                                "array": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x00000000",
                                            "ty": 2
                                        }
                                    },
                                    "len": 32,
                                    "offset": "0x00000000"
                                }
                            },
                            "name": "root"
                        }
                    ],
                    "name": "MerkleVerifier"
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
                                        "type": 5
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
                        "type": 5
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "tuple": []
                }
            }
        },
        {
            "id": 5,
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
                                        "type": 5
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
                        "type": 5
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
            "id": 8,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "NotAdmin"
                            }
                        ]
                    }
                },
                "path": [
                    "azns_merkle_verifier",
                    "merkle_verifier",
                    "Error"
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
                                        "type": 1
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 5
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
                        "type": 1
                    },
                    {
                        "name": "E",
                        "type": 5
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
                    "sequence": {
                        "type": 1
                    }
                }
            }
        },
        {
            "id": 11,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 5
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
                        "type": 12
                    },
                    {
                        "name": "E",
                        "type": 5
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 12,
            "type": {
                "def": {
                    "primitive": "bool"
                }
            }
        },
        {
            "id": 13,
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
                                        "type": 5
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
                        "type": 5
                    }
                ],
                "path": [
                    "Result"
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
                                        "type": 5
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
                        "type": 5
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
            "id": 16,
            "type": {
                "def": {
                    "primitive": "u128"
                }
            }
        },
        {
            "id": 17,
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
            "id": 18,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 19,
            "type": {
                "def": {
                    "primitive": "u32"
                }
            }
        },
        {
            "id": 20,
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

    root(): Promise<Result<Bytes, LangError>> {
        return this.stateCall('0x0859bfce', [])
    }

    verify_proof(leaf: Bytes, proof: Bytes[]): Promise<Result<boolean, LangError>> {
        return this.stateCall('0x71c9d9ba', [leaf, proof])
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

export type AccountId = Bytes

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    admin: AccountId
    root: Bytes
}

export type Message = Message_accept_ownership | Message_get_admin | Message_get_pending_admin | Message_root | Message_transfer_ownership | Message_update_root | Message_upgrade_contract | Message_verify_proof

export interface Message_accept_ownership {
    __kind: 'accept_ownership'
}

export interface Message_get_admin {
    __kind: 'get_admin'
}

export interface Message_get_pending_admin {
    __kind: 'get_pending_admin'
}

/**
 *  Returns the merkle root
 */
export interface Message_root {
    __kind: 'root'
}

export interface Message_transfer_ownership {
    __kind: 'transfer_ownership'
    account?: (AccountId | undefined)
}

export interface Message_update_root {
    __kind: 'update_root'
    newRoot: Bytes
}

export interface Message_upgrade_contract {
    __kind: 'upgrade_contract'
    codeHash: Bytes
}

/**
 *  Verifies inclusion of leaf in the merkle tree
 */
export interface Message_verify_proof {
    __kind: 'verify_proof'
    leaf: Bytes
    proof: Bytes[]
}

export type Event = never

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
