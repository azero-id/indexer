import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xfde1a3a138f80962dadce409352446d8d2c19116e8e6a03ee21a5456aa22a00b",
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
    "name": "azns_fee_calculator",
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
          },
          {
            "label": "max_registration_duration",
            "type": {
              "displayName": [
                "u8"
              ],
              "type": 2
            }
          },
          {
            "label": "common_price",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 3
            }
          },
          {
            "label": "price_points",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 4
            }
          }
        ],
        "default": false,
        "docs": [
          "Constructor that initializes the `bool` value to the given `init_value`."
        ],
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
        "type": 3
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
      "type": 8
    },
    "messages": [
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "get_max_registration_duration",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 9
        },
        "selector": "0x7298d49b"
      },
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
          },
          {
            "label": "duration",
            "type": {
              "displayName": [
                "u8"
              ],
              "type": 2
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
          "type": 11
        },
        "selector": "0xb565be46"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "get_common_price",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 15
        },
        "selector": "0xf77fc60e"
      },
      {
        "args": [
          {
            "label": "len",
            "type": {
              "displayName": [
                "Length"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "get_price_by_length",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0x771dde82"
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
          "type": 18
        },
        "selector": "0x57b8a8a7"
      },
      {
        "args": [
          {
            "label": "duration",
            "type": {
              "displayName": [
                "u8"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "set_max_registration_duration",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 19
        },
        "selector": "0x8754a437"
      },
      {
        "args": [
          {
            "label": "common_price",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 3
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "set_common_price",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 19
        },
        "selector": "0xe821d25f"
      },
      {
        "args": [
          {
            "label": "price_points",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 21
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "set_prices_by_length",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 19
        },
        "selector": "0xdaa518f2"
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
          "type": 19
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
          "type": 19
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
                  "ty": 2
                }
              },
              "name": "max_registration_duration"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 3
                }
              },
              "name": "common_price"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x00000064",
                      "ty": 3
                    }
                  },
                  "root_key": "0x00000064"
                }
              },
              "name": "price_by_length"
            }
          ],
          "name": "FeeCalculator"
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
          "primitive": "u128"
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
          "tuple": [
            2,
            3
          ]
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
                    "type": 2
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
            "type": 2
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
            "type": 12
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
                    "type": 14
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
            "type": 14
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
          "tuple": [
            3,
            3
          ]
        }
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
                "name": "NotAdmin"
              },
              {
                "index": 1,
                "name": "InvalidDuration"
              },
              {
                "index": 2,
                "name": "ZeroLength"
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
            "type": 3
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
      "id": 18,
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
      "id": 19,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 20
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
            "type": 20
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
      "id": 20,
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
                    "type": 14
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
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 21,
      "type": {
        "def": {
          "sequence": {
            "type": 22
          }
        }
      }
    },
    {
      "id": 22,
      "type": {
        "def": {
          "tuple": [
            2,
            17
          ]
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

    get_max_registration_duration(): Promise<Result<number, LangError>> {
        return this.stateCall('0x7298d49b', [])
    }

    get_name_price(name: String, duration: number): Promise<Result<Result<[Balance, Balance], Error>, LangError>> {
        return this.stateCall('0xb565be46', [name, duration])
    }

    get_common_price(): Promise<Result<Balance, LangError>> {
        return this.stateCall('0xf77fc60e', [])
    }

    get_price_by_length(len: number): Promise<Result<(Balance | undefined), LangError>> {
        return this.stateCall('0x771dde82', [len])
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

export type Message = Message_get_max_registration_duration | Message_get_name_price | Message_get_common_price | Message_get_price_by_length | Message_get_admin | Message_set_max_registration_duration | Message_set_common_price | Message_set_prices_by_length | Message_set_admin | Message_upgrade_contract

export interface Message_get_max_registration_duration {
    __kind: 'get_max_registration_duration'
}

export interface Message_get_name_price {
    __kind: 'get_name_price'
    name: String
    duration: number
}

export interface Message_get_common_price {
    __kind: 'get_common_price'
}

export interface Message_get_price_by_length {
    __kind: 'get_price_by_length'
    len: number
}

export interface Message_get_admin {
    __kind: 'get_admin'
}

export interface Message_set_max_registration_duration {
    __kind: 'set_max_registration_duration'
    duration: number
}

export interface Message_set_common_price {
    __kind: 'set_common_price'
    commonPrice: Balance
}

export interface Message_set_prices_by_length {
    __kind: 'set_prices_by_length'
    pricePoints: [number, (Balance | undefined)][]
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

/**
 * Constructor that initializes the `bool` value to the given `init_value`.
 */
export interface Constructor_new {
    __kind: 'new'
    admin: AccountId
    maxRegistrationDuration: number
    commonPrice: Balance
    pricePoints: Vec
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type String = string

export type Balance = bigint

export type Error = Error_NotAdmin | Error_InvalidDuration | Error_ZeroLength

export interface Error_NotAdmin {
    __kind: 'NotAdmin'
}

export interface Error_InvalidDuration {
    __kind: 'InvalidDuration'
}

export interface Error_ZeroLength {
    __kind: 'ZeroLength'
}

export type AccountId = Uint8Array

export type Vec = [number, Balance][]

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
