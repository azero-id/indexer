import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0x88b468f1ab8a3a7bce6654a1662ae41e899b94d490d90cdacbf4ec4e928f2223",
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
        "name": "azns_name_checker",
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
                        "label": "allowed_length",
                        "type": {
                            "displayName": [],
                            "type": 6
                        }
                    },
                    {
                        "label": "allowed_unicode_ranges",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "disallowed_unicode_ranges_for_edges",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 3
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
                    "type": 7
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
                "type": 19
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
                "type": 22
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 20
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 21
            }
        },
        "events": [],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 9
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
                            "type": 10
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "is_name_allowed",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 11
                },
                "selector": "0x1341a7ea"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_allowed_unicode_ranges",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x760d33f9"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_disallowed_unicode_ranges_for_edges",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 14
                },
                "selector": "0x5db54a26"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_allowed_length",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 15
                },
                "selector": "0x2e96f458"
            },
            {
                "args": [
                    {
                        "label": "new_ranges",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "set_allowed_unicode_ranges",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 11
                },
                "selector": "0xaae9aae0"
            },
            {
                "args": [
                    {
                        "label": "new_ranges",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "set_disallowed_unicode_ranges_for_edges",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 11
                },
                "selector": "0xdc1464da"
            },
            {
                "args": [
                    {
                        "label": "new_length",
                        "type": {
                            "displayName": [],
                            "type": 6
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "set_allowed_length",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 11
                },
                "selector": "0x98178dbc"
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
                    "type": 16
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
                    "type": 17
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
                            "type": 18
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
                    "type": 11
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
                    "type": 11
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
                    "type": 7
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
                                "struct": {
                                    "fields": [
                                        {
                                            "layout": {
                                                "leaf": {
                                                    "key": "0x00000000",
                                                    "ty": 2
                                                }
                                            },
                                            "name": "0"
                                        },
                                        {
                                            "layout": {
                                                "leaf": {
                                                    "key": "0x00000000",
                                                    "ty": 2
                                                }
                                            },
                                            "name": "1"
                                        }
                                    ],
                                    "name": "(A, B)"
                                }
                            },
                            "name": "allowed_length"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 3
                                }
                            },
                            "name": "allowed_unicode_ranges"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 3
                                }
                            },
                            "name": "disallowed_unicode_ranges_for_edges"
                        }
                    ],
                    "name": "NameChecker"
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
                        "type": 4
                    }
                }
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "lower",
                                "type": 5,
                                "typeName": "u32"
                            },
                            {
                                "name": "upper",
                                "type": 5,
                                "typeName": "u32"
                            }
                        ]
                    }
                },
                "path": [
                    "azns_name_checker",
                    "UnicodeRange"
                ]
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
                    "tuple": [
                        2,
                        2
                    ]
                }
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
                                        "type": 8
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
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
                        "type": 8
                    },
                    {
                        "name": "E",
                        "type": 9
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
                    "tuple": []
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
            "id": 10,
            "type": {
                "def": {
                    "primitive": "str"
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
                                        "type": 9
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
                        "type": 9
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
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 8
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 13
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
                        "type": 8
                    },
                    {
                        "name": "E",
                        "type": 13
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
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "NotAdmin"
                            },
                            {
                                "index": 1,
                                "name": "TooShort"
                            },
                            {
                                "index": 2,
                                "name": "TooLong"
                            },
                            {
                                "index": 3,
                                "name": "ContainsDisallowedCharacters"
                            },
                            {
                                "index": 4,
                                "name": "InvalidRange"
                            }
                        ]
                    }
                },
                "path": [
                    "azns_name_checker",
                    "azns_name_checker",
                    "Error"
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
                                        "type": 3
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
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
                        "type": 9
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
                                        "type": 6
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
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
                        "type": 6
                    },
                    {
                        "name": "E",
                        "type": 9
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
                                        "type": 0
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
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
                        "type": 9
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
                                        "type": 9
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
                        "type": 9
                    }
                ],
                "path": [
                    "Result"
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
            "id": 19,
            "type": {
                "def": {
                    "primitive": "u128"
                }
            }
        },
        {
            "id": 20,
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
            "id": 21,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 22,
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

    is_name_allowed(name: String): Promise<Result<Result<null, Error>, LangError>> {
        return this.stateCall('0x1341a7ea', [name])
    }

    get_allowed_unicode_ranges(): Promise<Result<UnicodeRange[], LangError>> {
        return this.stateCall('0x760d33f9', [])
    }

    get_disallowed_unicode_ranges_for_edges(): Promise<Result<UnicodeRange[], LangError>> {
        return this.stateCall('0x5db54a26', [])
    }

    get_allowed_length(): Promise<Result<[number, number], LangError>> {
        return this.stateCall('0x2e96f458', [])
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

export interface UnicodeRange {
    lower: number
    upper: number
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type Error = Error_ContainsDisallowedCharacters | Error_InvalidRange | Error_NotAdmin | Error_TooLong | Error_TooShort

export interface Error_ContainsDisallowedCharacters {
    __kind: 'ContainsDisallowedCharacters'
}

export interface Error_InvalidRange {
    __kind: 'InvalidRange'
}

export interface Error_NotAdmin {
    __kind: 'NotAdmin'
}

export interface Error_TooLong {
    __kind: 'TooLong'
}

export interface Error_TooShort {
    __kind: 'TooShort'
}

export type String = string

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    admin: AccountId
    allowedLength: [number, number]
    allowedUnicodeRanges: UnicodeRange[]
    disallowedUnicodeRangesForEdges: UnicodeRange[]
}

export type Message = Message_accept_ownership | Message_get_admin | Message_get_allowed_length | Message_get_allowed_unicode_ranges | Message_get_disallowed_unicode_ranges_for_edges | Message_get_pending_admin | Message_is_name_allowed | Message_set_allowed_length | Message_set_allowed_unicode_ranges | Message_set_disallowed_unicode_ranges_for_edges | Message_transfer_ownership | Message_upgrade_contract

export interface Message_accept_ownership {
    __kind: 'accept_ownership'
}

export interface Message_get_admin {
    __kind: 'get_admin'
}

export interface Message_get_allowed_length {
    __kind: 'get_allowed_length'
}

export interface Message_get_allowed_unicode_ranges {
    __kind: 'get_allowed_unicode_ranges'
}

export interface Message_get_disallowed_unicode_ranges_for_edges {
    __kind: 'get_disallowed_unicode_ranges_for_edges'
}

export interface Message_get_pending_admin {
    __kind: 'get_pending_admin'
}

export interface Message_is_name_allowed {
    __kind: 'is_name_allowed'
    name: String
}

export interface Message_set_allowed_length {
    __kind: 'set_allowed_length'
    newLength: [number, number]
}

export interface Message_set_allowed_unicode_ranges {
    __kind: 'set_allowed_unicode_ranges'
    newRanges: UnicodeRange[]
}

export interface Message_set_disallowed_unicode_ranges_for_edges {
    __kind: 'set_disallowed_unicode_ranges_for_edges'
    newRanges: UnicodeRange[]
}

export interface Message_transfer_ownership {
    __kind: 'transfer_ownership'
    account?: (AccountId | undefined)
}

export interface Message_upgrade_contract {
    __kind: 'upgrade_contract'
    codeHash: Bytes
}

export type Event = never

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
