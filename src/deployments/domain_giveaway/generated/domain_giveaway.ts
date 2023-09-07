import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xf1027ffeab36191da0a8ef8ac48e8423d29f159428a98fcba279588761c468e2",
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
    "name": "domain_giveaway",
    "version": "0.1.0",
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
            "label": "registry_addr",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "coupon_merkle_root",
            "type": {
              "displayName": [
                "MerkleHash"
              ],
              "type": 1
            }
          },
          {
            "label": "secret_merkle_root",
            "type": {
              "displayName": [
                "MerkleHash"
              ],
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
          "type": 5
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
        "type": 27
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 4
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "coupon",
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
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 3
            }
          }
        ],
        "docs": [],
        "label": "Reserved"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "coupon",
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
            "label": "claimed_by",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
        "docs": [],
        "label": "Claimed"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 7
    },
    "messages": [
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "get_registry_address",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0x915381d6"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "get_merkle_roots",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 9
        },
        "selector": "0x09d3f510"
      },
      {
        "args": [
          {
            "label": "coupon_code",
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
        "label": "get_coupon_record",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0x8b923c06"
      },
      {
        "args": [
          {
            "label": "coupon_codes",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 16
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "get_coupon_status",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 17
        },
        "selector": "0x898ef7c2"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "fund_me",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0x0848523c"
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
            "label": "coupon_code",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 3
            }
          },
          {
            "label": "proof",
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
        "label": "reserve_name",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0xdc508574"
      },
      {
        "args": [
          {
            "label": "coupon_code",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 3
            }
          },
          {
            "label": "secret_code",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 3
            }
          },
          {
            "label": "proof",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 23
            }
          },
          {
            "label": "receiver",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 24
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "claim_name",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0x680a1ae8"
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
            "label": "coupon_code",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 3
            }
          },
          {
            "label": "secret_code",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 3
            }
          },
          {
            "label": "proof",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 23
            }
          },
          {
            "label": "receiver",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 24
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "reserve_and_claim_name",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0xc9e73722"
      },
      {
        "args": [
          {
            "label": "new_registry_addr",
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
        "label": "set_registry_address",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0xa1c25889"
      },
      {
        "args": [
          {
            "label": "new_root_hash",
            "type": {
              "displayName": [
                "MerkleHash"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "set_coupon_merkle_root",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0x185902ec"
      },
      {
        "args": [
          {
            "label": "new_root_hash",
            "type": {
              "displayName": [
                "MerkleHash"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "set_secret_merkle_root",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0xd105cb0f"
      },
      {
        "args": [
          {
            "label": "beneficiary",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 24
            }
          },
          {
            "label": "amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 25
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "withdraw_funds",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0xe7cda623"
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
          "type": 8
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
          "type": 26
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
              "type": 24
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
          "type": 20
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
          "type": 20
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
          "type": 5
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
                  "ty": 0
                }
              },
              "name": "registry_addr"
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
              "name": "coupon_merkle_root"
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
              "name": "secret_merkle_root"
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
                              "key": "0x00000064",
                              "ty": 3
                            }
                          },
                          "name": "name"
                        },
                        {
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
                                        "struct": {
                                          "fields": [
                                            {
                                              "layout": {
                                                "leaf": {
                                                  "key": "0x00000064",
                                                  "ty": 0
                                                }
                                              },
                                              "name": "0"
                                            },
                                            {
                                              "layout": {
                                                "leaf": {
                                                  "key": "0x00000064",
                                                  "ty": 4
                                                }
                                              },
                                              "name": "1"
                                            }
                                          ],
                                          "name": "(A, B)"
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
                          "name": "claimed_by"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0x00000064",
                              "ty": 4
                            }
                          },
                          "name": "reserve_timestamp"
                        }
                      ],
                      "name": "CouponRecord"
                    }
                  },
                  "root_key": "0x00000064"
                }
              },
              "name": "coupon_to_record"
            }
          ],
          "name": "DomainGiveaway"
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
          "primitive": "u64"
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
                    "type": 7
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
            "type": 7
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "tuple": []
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
      "id": 8,
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
                    "type": 7
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
            "type": 7
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
                    "type": 10
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
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
            "type": 7
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
          "tuple": [
            1,
            1
          ]
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
                    "type": 7
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
            "type": 7
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
                    "type": 13
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
            "type": 13
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
          "composite": {
            "fields": [
              {
                "name": "name",
                "type": 3,
                "typeName": "String"
              },
              {
                "name": "claimed_by",
                "type": 14,
                "typeName": "Option<(AccountId, u64)>"
              },
              {
                "name": "reserve_timestamp",
                "type": 4,
                "typeName": "u64"
              }
            ]
          }
        },
        "path": [
          "domain_giveaway",
          "domain_giveaway",
          "CouponRecord"
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
                    "type": 15
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
            "type": 15
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
          "tuple": [
            0,
            4
          ]
        }
      }
    },
    {
      "id": 16,
      "type": {
        "def": {
          "sequence": {
            "type": 3
          }
        }
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
                    "type": 7
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
            "type": 7
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
          "sequence": {
            "type": 19
          }
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
                "name": "NotFound"
              },
              {
                "fields": [
                  {
                    "type": 3,
                    "typeName": "String"
                  },
                  {
                    "type": 4,
                    "typeName": "u64"
                  }
                ],
                "index": 1,
                "name": "Reserved"
              },
              {
                "fields": [
                  {
                    "type": 3,
                    "typeName": "String"
                  },
                  {
                    "type": 4,
                    "typeName": "u64"
                  },
                  {
                    "type": 4,
                    "typeName": "u64"
                  },
                  {
                    "type": 0,
                    "typeName": "AccountId"
                  }
                ],
                "index": 2,
                "name": "Claimed"
              }
            ]
          }
        },
        "path": [
          "domain_giveaway",
          "domain_giveaway",
          "CouponStatus"
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
                    "type": 21
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
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
            "type": 21
          },
          {
            "name": "E",
            "type": 7
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
                    "type": 22
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
            "type": 22
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
                "index": 0,
                "name": "NotAdmin"
              },
              {
                "index": 1,
                "name": "WithdrawFailed"
              },
              {
                "index": 2,
                "name": "InsufficientBalance"
              },
              {
                "index": 3,
                "name": "InvalidProof"
              },
              {
                "index": 4,
                "name": "CouponAlreadyUsed"
              },
              {
                "index": 5,
                "name": "CouponRecordNotFound"
              },
              {
                "fields": [
                  {
                    "type": 2,
                    "typeName": "u8"
                  }
                ],
                "index": 6,
                "name": "ReserveFailed"
              },
              {
                "fields": [
                  {
                    "type": 2,
                    "typeName": "u8"
                  }
                ],
                "index": 7,
                "name": "ClaimFailed"
              },
              {
                "index": 8,
                "name": "NameNotAllowed"
              }
            ]
          }
        },
        "path": [
          "domain_giveaway",
          "domain_giveaway",
          "Error"
        ]
      }
    },
    {
      "id": 23,
      "type": {
        "def": {
          "sequence": {
            "type": 1
          }
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
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 24
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
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
            "type": 24
          },
          {
            "name": "E",
            "type": 7
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

    get_registry_address(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x915381d6', [])
    }

    get_merkle_roots(): Promise<Result<[MerkleHash, MerkleHash], LangError>> {
        return this.stateCall('0x09d3f510', [])
    }

    get_coupon_record(coupon_code: String): Promise<Result<(CouponRecord | undefined), LangError>> {
        return this.stateCall('0x8b923c06', [coupon_code])
    }

    get_coupon_status(coupon_codes: Vec): Promise<Result<CouponStatus[], LangError>> {
        return this.stateCall('0x898ef7c2', [coupon_codes])
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

export type Event = Event_Reserved | Event_Claimed

export interface Event_Reserved {
    __kind: 'Reserved'
    coupon: String
    name: String
}

export interface Event_Claimed {
    __kind: 'Claimed'
    coupon: String
    claimedBy: AccountId
}

export type Message = Message_get_registry_address | Message_get_merkle_roots | Message_get_coupon_record | Message_get_coupon_status | Message_fund_me | Message_reserve_name | Message_claim_name | Message_reserve_and_claim_name | Message_set_registry_address | Message_set_coupon_merkle_root | Message_set_secret_merkle_root | Message_withdraw_funds | Message_get_admin | Message_get_pending_admin | Message_transfer_ownership | Message_accept_ownership | Message_upgrade_contract

export interface Message_get_registry_address {
    __kind: 'get_registry_address'
}

export interface Message_get_merkle_roots {
    __kind: 'get_merkle_roots'
}

export interface Message_get_coupon_record {
    __kind: 'get_coupon_record'
    couponCode: String
}

export interface Message_get_coupon_status {
    __kind: 'get_coupon_status'
    couponCodes: Vec
}

export interface Message_fund_me {
    __kind: 'fund_me'
}

export interface Message_reserve_name {
    __kind: 'reserve_name'
    name: String
    couponCode: String
    proof: MerkleHash[]
}

export interface Message_claim_name {
    __kind: 'claim_name'
    couponCode: String
    secretCode: String
    proof: MerkleHash[]
    receiver: (AccountId | undefined)
}

export interface Message_reserve_and_claim_name {
    __kind: 'reserve_and_claim_name'
    name: String
    couponCode: String
    secretCode: String
    proof: MerkleHash[]
    receiver: (AccountId | undefined)
}

export interface Message_set_registry_address {
    __kind: 'set_registry_address'
    newRegistryAddr: AccountId
}

export interface Message_set_coupon_merkle_root {
    __kind: 'set_coupon_merkle_root'
    newRootHash: MerkleHash
}

export interface Message_set_secret_merkle_root {
    __kind: 'set_secret_merkle_root'
    newRootHash: MerkleHash
}

export interface Message_withdraw_funds {
    __kind: 'withdraw_funds'
    beneficiary: (AccountId | undefined)
    amount: Balance
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
    codeHash: MerkleHash
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    admin: AccountId
    registryAddr: AccountId
    couponMerkleRoot: MerkleHash
    secretMerkleRoot: MerkleHash
}

export type AccountId = Uint8Array

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type MerkleHash = Uint8Array

export type String = string

export interface CouponRecord {
    name: String
    claimedBy: ([AccountId, bigint] | undefined)
    reserveTimestamp: bigint
}

export type Vec = String[]

export type CouponStatus = CouponStatus_NotFound | CouponStatus_Reserved | CouponStatus_Claimed

export interface CouponStatus_NotFound {
    __kind: 'NotFound'
}

export interface CouponStatus_Reserved {
    __kind: 'Reserved'
    value: [String, bigint]
}

export interface CouponStatus_Claimed {
    __kind: 'Claimed'
    value: [String, bigint, bigint, AccountId]
}

export type Balance = bigint

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
