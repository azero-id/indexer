import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xda29dd46a262c10728439c0435ad89ec2f36c76da662adcb887a61fa5adfc05f",
    "language": "ink! 4.2.0",
    "compiler": "rustc 1.68.0-nightly",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "2.1.0",
      "rust_toolchain": "nightly-aarch64-apple-darwin",
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
          "type": 4
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
        "type": 22
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 25
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 26
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 23
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 24
      }
    },
    "events": [],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 6
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
              "type": 7
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
              "type": 7
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
        "args": [],
        "default": false,
        "docs": [],
        "label": "get_all_registry",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 12
        },
        "selector": "0x91cf4131"
      },
      {
        "args": [
          {
            "label": "tld",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 8
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
          "type": 13
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
              "type": 8
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
          "type": 15
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
              "type": 17
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
          "type": 18
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
          "type": 21
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
          "type": 13
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
              "type": 14
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
          "type": 4
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
                    "type": 6
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
            "type": 6
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "tuple": []
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
          "primitive": "str"
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
                    "type": 6
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
            "type": 6
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
                    "type": 5
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
            "type": 5
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
                    "type": 8,
                    "typeName": "String"
                  }
                ],
                "index": 2,
                "name": "TldAlreadyInUse"
              },
              {
                "fields": [
                  {
                    "type": 8,
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
      "id": 12,
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
                    "type": 6
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
            "type": 6
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
                    "type": 6
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
            "type": 6
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
      "id": 15,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 16
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 6
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
            "type": 16
          },
          {
            "name": "E",
            "type": 6
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
                    "type": 8
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
            "type": 8
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
                    "type": 6
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
            "type": 6
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
          "sequence": {
            "type": 20
          }
        }
      }
    },
    {
      "id": 20,
      "type": {
        "def": {
          "tuple": [
            0,
            8
          ]
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
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 6
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
            "type": 6
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
          "primitive": "u128"
        }
      }
    },
    {
      "id": 23,
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
      "id": 24,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 25,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 26,
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

    get_all_registry(): Promise<Result<AccountId[], LangError>> {
        return this.stateCall('0x91cf4131', [])
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
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = never

export type Message = Message_add_registry | Message_update_registry | Message_get_all_registry | Message_get_registry | Message_get_address | Message_get_primary_domains | Message_get_admin | Message_get_pending_admin | Message_transfer_ownership | Message_accept_ownership | Message_upgrade_contract

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

export interface Message_get_all_registry {
    __kind: 'get_all_registry'
}

export interface Message_get_registry {
    __kind: 'get_registry'
    tld: String
}

export interface Message_get_address {
    __kind: 'get_address'
    domain: String
}

/**
 *  @returns list of (registry-address, primary-domain) for given account
 */
export interface Message_get_primary_domains {
    __kind: 'get_primary_domains'
    account: AccountId
    tld: (String | undefined)
}

export interface Message_get_admin {
    __kind: 'get_admin'
}

export interface Message_get_pending_admin {
    __kind: 'get_pending_admin'
}

export interface Message_transfer_ownership {
    __kind: 'transfer_ownership'
    account: (AccountId | undefined)
}

export interface Message_accept_ownership {
    __kind: 'accept_ownership'
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

export type AccountId = Uint8Array

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type String = string

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
