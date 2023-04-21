import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x175c695fb84c4b6f63c5fb95040d269d1cc3eee90df74598b17be097726c4d57",
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
    "name": "azns_merkle_verifier",
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
        "type": 14
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 17
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 18
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 15
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 16
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
          "type": 6
        },
        "selector": "0x798dcad5"
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
          "primitive": "u128"
        }
      }
    },
    {
      "id": 15,
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
      "id": 16,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 17,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 18,
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

    root(): Promise<Result<Uint8Array, LangError>> {
        return this.stateCall('0x0859bfce', [])
    }

    verify_proof(leaf: Uint8Array, proof: Vec): Promise<Result<boolean, LangError>> {
        return this.stateCall('0x71c9d9ba', [leaf, proof])
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

export type Message = Message_update_root | Message_root | Message_verify_proof | Message_get_admin | Message_set_admin

export interface Message_update_root {
    __kind: 'update_root'
    newRoot: Uint8Array
}

/**
 *  Returns the merkle root
 */
export interface Message_root {
    __kind: 'root'
}

/**
 *  Verifies inclusion of leaf in the merkle tree
 */
export interface Message_verify_proof {
    __kind: 'verify_proof'
    leaf: Uint8Array
    proof: Vec
}

export interface Message_get_admin {
    __kind: 'get_admin'
}

export interface Message_set_admin {
    __kind: 'set_admin'
    account: AccountId
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    admin: AccountId
    root: Uint8Array
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type Vec = Uint8Array[]

export type AccountId = Uint8Array

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
