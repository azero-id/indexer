import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x1633d7e160548caa699f80054fb0124672b6db4b470087ca826b480d02af81a2",
    "language": "ink! 4.0.1",
    "compiler": "rustc 1.68.0",
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
    "name": "azns_router",
    "version": "0.1.0",
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
          }
        ],
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
            "label": "tld",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 6
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
        "docs": [],
        "label": "add_registry",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
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
              "type": 6
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
        "docs": [],
        "label": "update_registry",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0x562de86b"
      },
      {
        "args": [
          {
            "label": "tld",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 7
            }
          }
        ],
        "docs": [],
        "label": "get_registry",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
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
              "type": 7
            }
          }
        ],
        "docs": [],
        "label": "get_address",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0xd259f7ba"
      },
      {
        "args": [],
        "docs": [],
        "label": "get_admin",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 15
        },
        "selector": "0x57b8a8a7"
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
        "docs": [],
        "label": "set_admin",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
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
        "docs": [],
        "label": "upgrade_contract",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
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
          "sequence": {
            "type": 7
          }
        }
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "primitive": "str"
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
            "type": 9
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
      "id": 9,
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
                    "type": 10
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
            "type": 10
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
                    "type": 7,
                    "typeName": "String"
                  }
                ],
                "index": 2,
                "name": "TldAlreadyInUse"
              },
              {
                "fields": [
                  {
                    "type": 7,
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
      "id": 13,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 14
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
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
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
            "type": 10
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

    get_registry(tld: String): Promise<Result<(AccountId | undefined), LangError>> {
        return this.stateCall('0x15a5d20a', [tld])
    }

    get_address(domain: String): Promise<Result<Result<AccountId, Error>, LangError>> {
        return this.stateCall('0xd259f7ba', [domain])
    }

    get_admin(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x57b8a8a7', [])
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

export type Message = Message_add_registry | Message_update_registry | Message_get_registry | Message_get_address | Message_get_admin | Message_set_admin | Message_upgrade_contract

export interface Message_add_registry {
    __kind: 'add_registry'
    tld: Vec
    registryAddr: AccountId
}

export interface Message_update_registry {
    __kind: 'update_registry'
    tld: Vec
    registryAddr: AccountId
}

export interface Message_get_registry {
    __kind: 'get_registry'
    tld: String
}

export interface Message_get_address {
    __kind: 'get_address'
    domain: String
}

export interface Message_get_admin {
    __kind: 'get_admin'
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
}

export type String = string

export type AccountId = Uint8Array

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type Error = Error_NotAdmin | Error_InvalidRegistryAddress | Error_TldAlreadyInUse | Error_TldNotFound | Error_CouldNotResolveDomain | Error_InvalidDomainName

export interface Error_NotAdmin {
    __kind: 'NotAdmin'
}

export interface Error_InvalidRegistryAddress {
    __kind: 'InvalidRegistryAddress'
}

export interface Error_TldAlreadyInUse {
    __kind: 'TldAlreadyInUse'
    value: String
}

export interface Error_TldNotFound {
    __kind: 'TldNotFound'
    value: String
}

export interface Error_CouldNotResolveDomain {
    __kind: 'CouldNotResolveDomain'
}

export interface Error_InvalidDomainName {
    __kind: 'InvalidDomainName'
}

export type Vec = String[]

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
