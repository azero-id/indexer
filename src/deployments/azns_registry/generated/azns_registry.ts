import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xa1dd89fc435c50fab36a680c36f52ddca6edadc746f30d3a116f6333332b149a",
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
    "name": "azns_registry",
    "version": "0.0.2",
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
            "label": "merkle_verifier_addr",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 9
            }
          },
          {
            "label": "reserved_names",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 10
            }
          },
          {
            "label": "tld",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          },
          {
            "label": "metadata_size_limit",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 13
            }
          }
        ],
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
          "type": 14
        },
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
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
              "type": 6
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
          " Emitted whenever a new name is registered."
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
              "type": 6
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
          " Emitted whenever a name is released"
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
              "type": 6
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
          " Emitted whenever an address changes."
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
              "type": 6
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
            "label": "old_owner",
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
            "label": "new_owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          " Emitted whenever a name is transferred."
        ],
        "label": "Transfer"
      },
      {
        "args": [],
        "docs": [
          " Emitted when switching from whitelist-phase to public-phase"
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
              "type": 6
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
              "type": 24
            }
          }
        ],
        "docs": [
          " Emitted when a name is reserved or removed from the reservation list"
        ],
        "label": "Reserve"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 16
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
              "type": 6
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
              "type": 17
            }
          },
          {
            "label": "merkle_proof",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 18
            }
          }
        ],
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
          "type": 20
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
              "type": 6
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
              "type": 17
            }
          },
          {
            "label": "merkle_proof",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 18
            }
          },
          {
            "label": "set_as_primary_name",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 24
            }
          }
        ],
        "docs": [
          " Register specific name with caller as owner.",
          "",
          " NOTE: Whitelisted addresses can buy one name during the whitelist phase by submitting its proof"
        ],
        "label": "register",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
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
              "type": 6
            }
          }
        ],
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
          "type": 20
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
              "type": 6
            }
          }
        ],
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
          "type": 20
        },
        "selector": "0x3f2be152"
      },
      {
        "args": [
          {
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          },
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
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
          "type": 20
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
              "type": 8
            }
          }
        ],
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
          "type": 25
        },
        "selector": "0xd00a53e5"
      },
      {
        "args": [
          {
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          }
        ],
        "docs": [
          " Set primary name of an address (reverse record)"
        ],
        "label": "set_primary_name",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
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
              "type": 6
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
          "type": 20
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
              "type": 6
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
        "docs": [],
        "label": "set_controller",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0xc5e161ea"
      },
      {
        "args": [
          {
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          },
          {
            "label": "records",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 28
            }
          },
          {
            "label": "remove_rest",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 24
            }
          }
        ],
        "docs": [],
        "label": "update_records",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
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
              "type": 8
            }
          }
        ],
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
          "type": 30
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
              "type": 6
            }
          }
        ],
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
          "type": 34
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
              "type": 6
            }
          }
        ],
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
          "type": 36
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
              "type": 6
            }
          }
        ],
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
          "type": 36
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
              "type": 6
            }
          }
        ],
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
          "type": 36
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
              "type": 6
            }
          }
        ],
        "docs": [],
        "label": "get_expiry_date",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 38
        },
        "selector": "0xf56d0deb"
      },
      {
        "args": [
          {
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          }
        ],
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
          "type": 40
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
              "type": 6
            }
          },
          {
            "label": "key",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          }
        ],
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
          "type": 41
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
          "type": 43
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
        "docs": [],
        "label": "get_controlled_names_of_address",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 43
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
        "docs": [],
        "label": "get_resolving_names_of_address",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 43
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
        "docs": [],
        "label": "get_primary_name",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 41
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
        "docs": [],
        "label": "get_names_of_address",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 45
        },
        "selector": "0xf82caf60"
      },
      {
        "args": [],
        "docs": [],
        "label": "get_metadata_size_limit",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 46
        },
        "selector": "0x41b0a92e"
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
          "type": 47
        },
        "selector": "0x57b8a8a7"
      },
      {
        "args": [],
        "docs": [],
        "label": "get_tld",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 48
        },
        "selector": "0xd61daed4"
      },
      {
        "args": [],
        "docs": [
          " Returns `true` when contract is in whitelist-phase",
          " and `false` when it is in public-phase"
        ],
        "label": "is_whitelist_phase",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 49
        },
        "selector": "0x59d8255b"
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
            "label": "merkle_proof",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 18
            }
          }
        ],
        "docs": [],
        "label": "verify_proof",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 49
        },
        "selector": "0x71c9d9ba"
      },
      {
        "args": [
          {
            "label": "value",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 27
            }
          }
        ],
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
          "type": 20
        },
        "selector": "0x410fcc9d"
      },
      {
        "args": [],
        "docs": [
          " (ADMIN-OPERATION)",
          " Switch from whitelist-phase to public-phase"
        ],
        "label": "switch_to_public_phase",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0x17257477"
      },
      {
        "args": [
          {
            "label": "set",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 11
            }
          }
        ],
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
          "type": 20
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
              "type": 8
            }
          }
        ],
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
          "type": 20
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
              "type": 13
            }
          }
        ],
        "docs": [
          " (ADMIN-OPERATION)",
          " Update the limit of metadata allowed to store per name"
        ],
        "label": "set_metadata_size_limit",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0x787dbdec"
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
        "docs": [
          " (ADMIN-OPERATION)",
          " Upgrade contract code"
        ],
        "label": "upgrade_contract",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0x1345543d"
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
          "type": 20
        },
        "selector": "0x798dcad5"
      },
      {
        "args": [
          {
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
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
              "type": 17
            }
          }
        ],
        "docs": [],
        "label": "get_name_price",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 50
        },
        "selector": "0xb565be46"
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
              "type": 6
            }
          }
        ],
        "docs": [],
        "label": "validate_referrer",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 49
        },
        "selector": "0x30fc989d"
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
                      "key": "0x1a86cd21",
                      "ty": 3
                    }
                  },
                  "root_key": "0x1a86cd21"
                }
              },
              "name": "name_to_expiry"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x000000c9",
                      "ty": 4
                    }
                  },
                  "root_key": "0x000000c9"
                }
              },
              "name": "metadata"
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
                              "ty": 7
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
              "name": "metadata_size_limit"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x0000012c",
                      "ty": 8
                    }
                  },
                  "root_key": "0x0000012c"
                }
              },
              "name": "owner_to_names"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x0000012d",
                      "ty": 8
                    }
                  },
                  "root_key": "0x0000012d"
                }
              },
              "name": "controller_to_names"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x0000012e",
                      "ty": 8
                    }
                  },
                  "root_key": "0x0000012e"
                }
              },
              "name": "resolving_to_address"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x0000012f",
                      "ty": 6
                    }
                  },
                  "root_key": "0x0000012f"
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
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 6
                }
              },
              "name": "tld"
            }
          ],
          "name": "DomainNameService"
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
          "primitive": "u64"
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
            6,
            6
          ]
        }
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "primitive": "str"
        }
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "sequence": {
            "type": 6
          }
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
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 11
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
            "type": 11
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 11,
      "type": {
        "def": {
          "sequence": {
            "type": 12
          }
        }
      }
    },
    {
      "id": 12,
      "type": {
        "def": {
          "tuple": [
            6,
            9
          ]
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
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 7
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
            "type": 7
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
            "type": 15
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
      "id": 15,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 16,
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
                    "type": 6
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
            "type": 6
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
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 19
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
            "type": 19
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
          "sequence": {
            "type": 1
          }
        }
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
            "type": 21
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
      "id": 21,
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
            "type": 15
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
                "name": "NoResolvedAddress"
              },
              {
                "index": 11,
                "name": "AlreadyClaimed"
              },
              {
                "index": 12,
                "name": "InvalidMerkleProof"
              },
              {
                "index": 13,
                "name": "OnlyDuringWhitelistPhase"
              },
              {
                "index": 14,
                "name": "RestrictedDuringWhitelistPhase"
              },
              {
                "index": 15,
                "name": "CannotBuyReservedName"
              },
              {
                "index": 16,
                "name": "NotReservedName"
              },
              {
                "index": 17,
                "name": "NotAuthorised"
              },
              {
                "index": 18,
                "name": "MetadataOverflow"
              },
              {
                "fields": [
                  {
                    "type": 23,
                    "typeName": "azns_fee_calculator::Error"
                  }
                ],
                "index": 19,
                "name": "FeeError"
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
      "id": 23,
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
      "id": 24,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 25,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 26
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
            "type": 26
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
            "type": 27
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
      "id": 27,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 28,
      "type": {
        "def": {
          "sequence": {
            "type": 29
          }
        }
      }
    },
    {
      "id": 29,
      "type": {
        "def": {
          "tuple": [
            6,
            17
          ]
        }
      }
    },
    {
      "id": 30,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 31
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
            "type": 31
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
      "id": 31,
      "type": {
        "def": {
          "sequence": {
            "type": 32
          }
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
                    "type": 33,
                    "typeName": "AddressDict"
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
      "id": 33,
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
      "id": 34,
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
      "id": 35,
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
            "type": 33
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
            "type": 37
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
      "id": 37,
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
            "type": 0
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
            "type": 39
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
      "id": 39,
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
            "type": 3
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
      "id": 40,
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
      "id": 43,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 44
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
            "type": 44
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
      "id": 44,
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
      "id": 45,
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
            "type": 8
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
                    "type": 13
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
            "type": 13
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
      "id": 47,
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
      "id": 48,
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
            "type": 6
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
      "id": 49,
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
            "type": 24
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
            "type": 51
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
      "id": 51,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 52
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
            "type": 52
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
      "id": 52,
      "type": {
        "def": {
          "tuple": [
            27,
            27,
            27,
            9
          ]
        }
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

    get_name_status(names: Vec): Promise<Result<NameStatus[], LangError>> {
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

    get_expiry_date(name: String): Promise<Result<Result<bigint, Error>, LangError>> {
        return this.stateCall('0xf56d0deb', [name])
    }

    get_all_records(name: String): Promise<Result<[String, String][], LangError>> {
        return this.stateCall('0x528be9f1', [name])
    }

    get_record(name: String, key: String): Promise<Result<Result<String, Error>, LangError>> {
        return this.stateCall('0x7e6cb4ce', [name, key])
    }

    get_owned_names_of_address(owner: AccountId): Promise<Result<(Vec | undefined), LangError>> {
        return this.stateCall('0xe413b13a', [owner])
    }

    get_controlled_names_of_address(controller: AccountId): Promise<Result<(Vec | undefined), LangError>> {
        return this.stateCall('0x9f25301e', [controller])
    }

    get_resolving_names_of_address(address: AccountId): Promise<Result<(Vec | undefined), LangError>> {
        return this.stateCall('0xadd2f457', [address])
    }

    get_primary_name(address: AccountId): Promise<Result<Result<String, Error>, LangError>> {
        return this.stateCall('0x404f1d73', [address])
    }

    get_names_of_address(address: AccountId): Promise<Result<Vec, LangError>> {
        return this.stateCall('0xf82caf60', [address])
    }

    get_metadata_size_limit(): Promise<Result<(number | undefined), LangError>> {
        return this.stateCall('0x41b0a92e', [])
    }

    get_admin(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x57b8a8a7', [])
    }

    get_tld(): Promise<Result<String, LangError>> {
        return this.stateCall('0xd61daed4', [])
    }

    is_whitelist_phase(): Promise<Result<bool, LangError>> {
        return this.stateCall('0x59d8255b', [])
    }

    verify_proof(account: AccountId, merkle_proof: (Uint8Array[] | undefined)): Promise<Result<bool, LangError>> {
        return this.stateCall('0x71c9d9ba', [account, merkle_proof])
    }

    get_name_price(name: String, recipient: AccountId, years_to_register: u8, referrer: (String | undefined)): Promise<Result<Result<[Balance, Balance, Balance, (AccountId | undefined)], Error>, LangError>> {
        return this.stateCall('0xb565be46', [name, recipient, years_to_register, referrer])
    }

    validate_referrer(recipient: AccountId, referrer_name: String): Promise<Result<bool, LangError>> {
        return this.stateCall('0x30fc989d', [recipient, referrer_name])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = Event_Register | Event_Release | Event_SetAddress | Event_Transfer | Event_PublicPhaseActivated | Event_Reserve

export interface Event_Register {
    __kind: 'Register'
    name: String
    from: AccountId
}

export interface Event_Release {
    __kind: 'Release'
    name: String
    from: AccountId
}

export interface Event_SetAddress {
    __kind: 'SetAddress'
    name: String
    from: AccountId
    oldAddress: (AccountId | undefined)
    newAddress: AccountId
}

export interface Event_Transfer {
    __kind: 'Transfer'
    name: String
    from: AccountId
    oldOwner: (AccountId | undefined)
    newOwner: AccountId
}

export interface Event_PublicPhaseActivated {
    __kind: 'PublicPhaseActivated'
}

export interface Event_Reserve {
    __kind: 'Reserve'
    name: String
    accountId: (AccountId | undefined)
    action: bool
}

export type Message = Message_register_on_behalf_of | Message_register | Message_claim_reserved_name | Message_release | Message_transfer | Message_clear_expired_names | Message_set_primary_name | Message_set_address | Message_set_controller | Message_update_records | Message_get_name_status | Message_get_address_dict | Message_get_owner | Message_get_controller | Message_get_address | Message_get_expiry_date | Message_get_all_records | Message_get_record | Message_get_owned_names_of_address | Message_get_controlled_names_of_address | Message_get_resolving_names_of_address | Message_get_primary_name | Message_get_names_of_address | Message_get_metadata_size_limit | Message_get_admin | Message_get_tld | Message_is_whitelist_phase | Message_verify_proof | Message_withdraw | Message_switch_to_public_phase | Message_add_reserved_names | Message_remove_reserved_name | Message_set_metadata_size_limit | Message_upgrade_contract | Message_set_admin | Message_get_name_price | Message_validate_referrer

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
    referrer: (String | undefined)
    merkleProof: (Uint8Array[] | undefined)
}

/**
 *  Register specific name with caller as owner.
 * 
 *  NOTE: Whitelisted addresses can buy one name during the whitelist phase by submitting its proof
 */
export interface Message_register {
    __kind: 'register'
    name: String
    yearsToRegister: u8
    referrer: (String | undefined)
    merkleProof: (Uint8Array[] | undefined)
    setAsPrimaryName: bool
}

/**
 *  Allows users to claim their reserved name at zero cost
 */
export interface Message_claim_reserved_name {
    __kind: 'claim_reserved_name'
    name: String
}

/**
 *  Release name from registration.
 */
export interface Message_release {
    __kind: 'release'
    name: String
}

/**
 *  Transfer owner to another address.
 */
export interface Message_transfer {
    __kind: 'transfer'
    name: String
    to: AccountId
}

/**
 *  Removes the associated state of expired-names from storage
 */
export interface Message_clear_expired_names {
    __kind: 'clear_expired_names'
    names: Vec
}

/**
 *  Set primary name of an address (reverse record)
 */
export interface Message_set_primary_name {
    __kind: 'set_primary_name'
    name: String
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

export interface Message_update_records {
    __kind: 'update_records'
    name: String
    records: [String, (String | undefined)][]
    removeRest: bool
}

/**
 *  Returns the current status of the name
 */
export interface Message_get_name_status {
    __kind: 'get_name_status'
    names: Vec
}

/**
 *  Get the addresses related to specific name
 */
export interface Message_get_address_dict {
    __kind: 'get_address_dict'
    name: String
}

/**
 *  Get owner of specific name.
 */
export interface Message_get_owner {
    __kind: 'get_owner'
    name: String
}

/**
 *  Get controller of specific name.
 */
export interface Message_get_controller {
    __kind: 'get_controller'
    name: String
}

/**
 *  Get address for specific name.
 */
export interface Message_get_address {
    __kind: 'get_address'
    name: String
}

export interface Message_get_expiry_date {
    __kind: 'get_expiry_date'
    name: String
}

/**
 *  Gets all records
 */
export interface Message_get_all_records {
    __kind: 'get_all_records'
    name: String
}

/**
 *  Gets an arbitrary record by key
 */
export interface Message_get_record {
    __kind: 'get_record'
    name: String
    key: String
}

/**
 *  Returns all names the address owns
 */
export interface Message_get_owned_names_of_address {
    __kind: 'get_owned_names_of_address'
    owner: AccountId
}

export interface Message_get_controlled_names_of_address {
    __kind: 'get_controlled_names_of_address'
    controller: AccountId
}

export interface Message_get_resolving_names_of_address {
    __kind: 'get_resolving_names_of_address'
    address: AccountId
}

export interface Message_get_primary_name {
    __kind: 'get_primary_name'
    address: AccountId
}

export interface Message_get_names_of_address {
    __kind: 'get_names_of_address'
    address: AccountId
}

export interface Message_get_metadata_size_limit {
    __kind: 'get_metadata_size_limit'
}

export interface Message_get_admin {
    __kind: 'get_admin'
}

export interface Message_get_tld {
    __kind: 'get_tld'
}

/**
 *  Returns `true` when contract is in whitelist-phase
 *  and `false` when it is in public-phase
 */
export interface Message_is_whitelist_phase {
    __kind: 'is_whitelist_phase'
}

export interface Message_verify_proof {
    __kind: 'verify_proof'
    account: AccountId
    merkleProof: (Uint8Array[] | undefined)
}

/**
 *  (ADMIN-OPERATION)
 *  Transfers `value` amount of tokens to the caller.
 */
export interface Message_withdraw {
    __kind: 'withdraw'
    value: Balance
}

/**
 *  (ADMIN-OPERATION)
 *  Switch from whitelist-phase to public-phase
 */
export interface Message_switch_to_public_phase {
    __kind: 'switch_to_public_phase'
}

/**
 *  (ADMIN-OPERATION)
 *  Reserve name name for specific addresses
 */
export interface Message_add_reserved_names {
    __kind: 'add_reserved_names'
    set: [String, (AccountId | undefined)][]
}

/**
 *  (ADMIN-OPERATION)
 *  Remove given names from the list of reserved names
 */
export interface Message_remove_reserved_name {
    __kind: 'remove_reserved_name'
    set: Vec
}

/**
 *  (ADMIN-OPERATION)
 *  Update the limit of metadata allowed to store per name
 */
export interface Message_set_metadata_size_limit {
    __kind: 'set_metadata_size_limit'
    limit: (number | undefined)
}

/**
 *  (ADMIN-OPERATION)
 *  Upgrade contract code
 */
export interface Message_upgrade_contract {
    __kind: 'upgrade_contract'
    codeHash: Uint8Array
}

export interface Message_set_admin {
    __kind: 'set_admin'
    account: AccountId
}

export interface Message_get_name_price {
    __kind: 'get_name_price'
    name: String
    recipient: AccountId
    yearsToRegister: u8
    referrer: (String | undefined)
}

export interface Message_validate_referrer {
    __kind: 'validate_referrer'
    recipient: AccountId
    referrerName: String
}

export type Constructor = Constructor_new

/**
 * Creates a new AZNS contract.
 */
export interface Constructor_new {
    __kind: 'new'
    admin: AccountId
    nameCheckerAddr: (AccountId | undefined)
    feeCalculatorAddr: (AccountId | undefined)
    merkleVerifierAddr: (AccountId | undefined)
    reservedNames: ([String, (AccountId | undefined)][] | undefined)
    tld: String
    metadataSizeLimit: (number | undefined)
}

export type String = string

export type Vec = String[]

export type NameStatus = NameStatus_Registered | NameStatus_Reserved | NameStatus_Available | NameStatus_Unavailable

export interface NameStatus_Registered {
    __kind: 'Registered'
    value: AddressDict
}

export interface NameStatus_Reserved {
    __kind: 'Reserved'
    value: (AccountId | undefined)
}

export interface NameStatus_Available {
    __kind: 'Available'
}

export interface NameStatus_Unavailable {
    __kind: 'Unavailable'
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export interface AddressDict {
    owner: AccountId
    controller: AccountId
    resolved: AccountId
}

export type Error = Error_NotAdmin | Error_NameAlreadyExists | Error_NameDoesntExist | Error_NameNotAllowed | Error_CallerIsNotOwner | Error_CallerIsNotController | Error_FeeNotPaid | Error_NameEmpty | Error_RecordNotFound | Error_WithdrawFailed | Error_NoResolvedAddress | Error_AlreadyClaimed | Error_InvalidMerkleProof | Error_OnlyDuringWhitelistPhase | Error_RestrictedDuringWhitelistPhase | Error_CannotBuyReservedName | Error_NotReservedName | Error_NotAuthorised | Error_MetadataOverflow | Error_FeeError

export interface Error_NotAdmin {
    __kind: 'NotAdmin'
}

export interface Error_NameAlreadyExists {
    __kind: 'NameAlreadyExists'
}

export interface Error_NameDoesntExist {
    __kind: 'NameDoesntExist'
}

export interface Error_NameNotAllowed {
    __kind: 'NameNotAllowed'
}

export interface Error_CallerIsNotOwner {
    __kind: 'CallerIsNotOwner'
}

export interface Error_CallerIsNotController {
    __kind: 'CallerIsNotController'
}

export interface Error_FeeNotPaid {
    __kind: 'FeeNotPaid'
}

export interface Error_NameEmpty {
    __kind: 'NameEmpty'
}

export interface Error_RecordNotFound {
    __kind: 'RecordNotFound'
}

export interface Error_WithdrawFailed {
    __kind: 'WithdrawFailed'
}

export interface Error_NoResolvedAddress {
    __kind: 'NoResolvedAddress'
}

export interface Error_AlreadyClaimed {
    __kind: 'AlreadyClaimed'
}

export interface Error_InvalidMerkleProof {
    __kind: 'InvalidMerkleProof'
}

export interface Error_OnlyDuringWhitelistPhase {
    __kind: 'OnlyDuringWhitelistPhase'
}

export interface Error_RestrictedDuringWhitelistPhase {
    __kind: 'RestrictedDuringWhitelistPhase'
}

export interface Error_CannotBuyReservedName {
    __kind: 'CannotBuyReservedName'
}

export interface Error_NotReservedName {
    __kind: 'NotReservedName'
}

export interface Error_NotAuthorised {
    __kind: 'NotAuthorised'
}

export interface Error_MetadataOverflow {
    __kind: 'MetadataOverflow'
}

export interface Error_FeeError {
    __kind: 'FeeError'
    value: Type_23
}

export type AccountId = Uint8Array

export type bool = boolean

export type u8 = number

export type Balance = bigint

export type Type_23 = Type_23_NotAdmin | Type_23_InvalidDuration | Type_23_ZeroLength

export interface Type_23_NotAdmin {
    __kind: 'NotAdmin'
}

export interface Type_23_InvalidDuration {
    __kind: 'InvalidDuration'
}

export interface Type_23_ZeroLength {
    __kind: 'ZeroLength'
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
