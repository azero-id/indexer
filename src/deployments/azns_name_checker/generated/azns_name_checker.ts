import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x00b7d70a31733a59e729ff3eee4558f5459c1b937a82e5fd7313b88469f5f459",
    "language": "ink! 4.2.0",
    "compiler": "rustc 1.69.0",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "2.1.0",
      "rust_toolchain": "stable-aarch64-apple-darwin",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "azns_name_checker",
    "version": "0.0.1",
    "authors": [
      "AZERO Domains <hello@azero.domains>"
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
        "type": 17
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
        "type": 20
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 18
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 19
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
        "label": "get_admin",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 14
        },
        "selector": "0x57b8a8a7"
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
          "type": 15
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
          "type": 15
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
          "type": 16
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
        "args": [
          {
            "label": "account",
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
        "label": "set_admin",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0x798dcad5"
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
          "type": 11
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
      "id": 15,
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
      "id": 16,
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
      "id": 17,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 18,
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
      "id": 19,
      "type": {
        "def": {
          "primitive": "u64"
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

export function decodeEvent(hex: string): Event {
    return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
    return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
    return _abi.decodeConstructor(hex)
}

export interface Chain {
    client: {
        call: <T=any>(method: string, params?: unknown[]) => Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: string, private blockHash?: string) { }

    is_name_allowed(name: String): Promise<Result<Type_12, LangError>> {
        return this.stateCall('0x1341a7ea', [name])
    }

    get_admin(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x57b8a8a7', [])
    }

    get_allowed_unicode_ranges(): Promise<Result<Vec, LangError>> {
        return this.stateCall('0x760d33f9', [])
    }

    get_disallowed_unicode_ranges_for_edges(): Promise<Result<Vec, LangError>> {
        return this.stateCall('0x5db54a26', [])
    }

    get_allowed_length(): Promise<Result<[number, number], LangError>> {
        return this.stateCall('0x2e96f458', [])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = never

export type Message = Message_is_name_allowed | Message_get_admin | Message_get_allowed_unicode_ranges | Message_get_disallowed_unicode_ranges_for_edges | Message_get_allowed_length | Message_set_allowed_unicode_ranges | Message_set_disallowed_unicode_ranges_for_edges | Message_set_allowed_length | Message_set_admin | Message_upgrade_contract

export interface Message_is_name_allowed {
    __kind: 'is_name_allowed'
    name: String
}

export interface Message_get_admin {
    __kind: 'get_admin'
}

export interface Message_get_allowed_unicode_ranges {
    __kind: 'get_allowed_unicode_ranges'
}

export interface Message_get_disallowed_unicode_ranges_for_edges {
    __kind: 'get_disallowed_unicode_ranges_for_edges'
}

export interface Message_get_allowed_length {
    __kind: 'get_allowed_length'
}

export interface Message_set_allowed_unicode_ranges {
    __kind: 'set_allowed_unicode_ranges'
    newRanges: Vec
}

export interface Message_set_disallowed_unicode_ranges_for_edges {
    __kind: 'set_disallowed_unicode_ranges_for_edges'
    newRanges: Vec
}

export interface Message_set_allowed_length {
    __kind: 'set_allowed_length'
    newLength: [number, number]
}

export interface Message_set_admin {
    __kind: 'set_admin'
    account: AccountId
}

export interface Message_upgrade_contract {
    __kind: 'upgrade_contract'
    codeHash: Uint8Array
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    admin: AccountId
    allowedLength: [number, number]
    allowedUnicodeRanges: Vec
    disallowedUnicodeRangesForEdges: Vec
}

export type String = string

export type Type_12 = Type_12_Ok | Type_12_Err

export interface Type_12_Ok {
    __kind: 'Ok'
}

export interface Type_12_Err {
    __kind: 'Err'
    value: Error
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type AccountId = Uint8Array

export interface UnicodeRange {
    lower: number
    upper: number
}

export type Vec = UnicodeRange[]

export type Error = Error_NotAdmin | Error_TooShort | Error_TooLong | Error_ContainsDisallowedCharacters

export interface Error_NotAdmin {
    __kind: 'NotAdmin'
}

export interface Error_TooShort {
    __kind: 'TooShort'
}

export interface Error_TooLong {
    __kind: 'TooLong'
}

export interface Error_ContainsDisallowedCharacters {
    __kind: 'ContainsDisallowedCharacters'
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
