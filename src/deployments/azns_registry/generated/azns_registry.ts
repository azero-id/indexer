import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xf0d49779de9b7ee9d8848105442c2d32098c56624ecee2a9b2894b325c4d6218",
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
              "type": 11
            }
          },
          {
            "label": "fee_calculator_addr",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 11
            }
          },
          {
            "label": "merkle_verifier_addr",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 11
            }
          },
          {
            "label": "reserved_names",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 12
            }
          },
          {
            "label": "tld",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 7
            }
          },
          {
            "label": "base_uri",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 7
            }
          },
          {
            "label": "metadata_size_limit",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
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
          "type": 16
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
              "type": 7
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
              "type": 7
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
              "type": 7
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
              "type": 11
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
            "label": "from",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 11
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "to",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 11
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "id",
            "type": {
              "displayName": [
                "Id"
              ],
              "type": 59
            }
          }
        ],
        "docs": [
          " Event emitted when a token transfer occurs."
        ],
        "label": "Transfer"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "owner",
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
            "label": "operator",
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
            "label": "id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 63
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "approved",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 25
            }
          }
        ],
        "docs": [
          " Event emitted when a token approve occurs."
        ],
        "label": "Approval"
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
              "type": 7
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
              "type": 11
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
              "type": 25
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
      "type": 17
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
              "type": 7
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
              "type": 18
            }
          },
          {
            "label": "merkle_proof",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 19
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
          "type": 21
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
              "type": 7
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
              "type": 18
            }
          },
          {
            "label": "merkle_proof",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 19
            }
          },
          {
            "label": "set_as_primary_name",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 25
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
          "type": 21
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
              "type": 7
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
          "type": 21
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
              "type": 7
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
          "type": 21
        },
        "selector": "0x3f2be152"
      },
      {
        "args": [
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 7
            }
          },
          {
            "label": "keep_metadata",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 25
            }
          },
          {
            "label": "keep_controller",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 25
            }
          },
          {
            "label": "keep_resolving",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 25
            }
          },
          {
            "label": "data",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 26
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
          "type": 27
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
              "type": 9
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
          "type": 30
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
              "type": 7
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
          "type": 21
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
              "type": 7
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
          "type": 21
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
              "type": 7
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
          "type": 21
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
              "type": 7
            }
          },
          {
            "label": "records",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 32
            }
          },
          {
            "label": "remove_rest",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 25
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
          "type": 21
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
              "type": 9
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
          "type": 34
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
              "type": 7
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
          "type": 38
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
              "type": 7
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
          "type": 40
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
              "type": 7
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
          "type": 40
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
              "type": 7
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
          "type": 40
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
              "type": 7
            }
          }
        ],
        "docs": [],
        "label": "get_registration_date",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 42
        },
        "selector": "0x7458cdac"
      },
      {
        "args": [
          {
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 7
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
          "type": 42
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
              "type": 7
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
          "type": 44
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
              "type": 7
            }
          },
          {
            "label": "key",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 7
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
          "type": 45
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
          "type": 47
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
          "type": 47
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
          "type": 47
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
          "type": 45
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
          "type": 49
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
          "type": 50
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
          "type": 51
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
          "type": 52
        },
        "selector": "0xd61daed4"
      },
      {
        "args": [],
        "docs": [],
        "label": "get_base_uri",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 52
        },
        "selector": "0x6e06617c"
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
          "type": 53
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
              "type": 19
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
          "type": 53
        },
        "selector": "0x71c9d9ba"
      },
      {
        "args": [
          {
            "label": "beneficiary",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 11
            }
          },
          {
            "label": "value",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 54
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
          "type": 21
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
          "type": 21
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
              "type": 13
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
          "type": 21
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
              "type": 9
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
          "type": 21
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
              "type": 15
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
          "type": 21
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
          "type": 21
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
          "type": 21
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
              "type": 7
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
              "type": 18
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
          "type": 55
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
              "type": 7
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
          "type": 53
        },
        "selector": "0x30fc989d"
      },
      {
        "args": [],
        "docs": [],
        "label": "PSP34::collection_id",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 58
        },
        "selector": "0xffa27a5f"
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
        "docs": [],
        "label": "PSP34::balance_of",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 61
        },
        "selector": "0xcde7e55f"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "Id"
              ],
              "type": 59
            }
          }
        ],
        "docs": [],
        "label": "PSP34::owner_of",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 62
        },
        "selector": "0x1168624d"
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
          },
          {
            "label": "operator",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 63
            }
          }
        ],
        "docs": [],
        "label": "PSP34::allowance",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 53
        },
        "selector": "0x4790f55a"
      },
      {
        "args": [
          {
            "label": "operator",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 63
            }
          },
          {
            "label": "approved",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 25
            }
          }
        ],
        "docs": [],
        "label": "PSP34::approve",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 27
        },
        "selector": "0x1932a8b0"
      },
      {
        "args": [
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "id",
            "type": {
              "displayName": [
                "Id"
              ],
              "type": 59
            }
          },
          {
            "label": "data",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 26
            }
          }
        ],
        "docs": [],
        "label": "PSP34::transfer",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 27
        },
        "selector": "0x3128d61b"
      },
      {
        "args": [],
        "docs": [],
        "label": "PSP34::total_supply",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 64
        },
        "selector": "0x628413fe"
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
          },
          {
            "label": "index",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 10
            }
          }
        ],
        "docs": [],
        "label": "PSP34Enumerable::owners_token_by_index",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 65
        },
        "selector": "0x3bcfb511"
      },
      {
        "args": [
          {
            "label": "_index",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 10
            }
          }
        ],
        "docs": [],
        "label": "PSP34Enumerable::token_by_index",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 65
        },
        "selector": "0xcd0340d0"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "Id"
              ],
              "type": 59
            }
          },
          {
            "label": "key",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 26
            }
          }
        ],
        "docs": [],
        "label": "PSP34Metadata::get_attribute",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 67
        },
        "selector": "0xf19d48d1"
      },
      {
        "args": [],
        "docs": [],
        "label": "Psp34Traits::get_owner",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 51
        },
        "selector": "0x8e1d8d71"
      },
      {
        "args": [
          {
            "label": "token_id",
            "type": {
              "displayName": [
                "Id"
              ],
              "type": 59
            }
          }
        ],
        "docs": [],
        "label": "Psp34Traits::token_uri",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 52
        },
        "selector": "0x249dfd4f"
      },
      {
        "args": [
          {
            "label": "uri",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 7
            }
          }
        ],
        "docs": [],
        "label": "Psp34Traits::set_base_uri",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 69
        },
        "selector": "0x4de6850b"
      },
      {
        "args": [],
        "docs": [],
        "label": "Psp34Traits::get_attribute_count",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 61
        },
        "selector": "0x61c50d69"
      },
      {
        "args": [
          {
            "label": "index",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 8
            }
          }
        ],
        "docs": [],
        "label": "Psp34Traits::get_attribute_name",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 52
        },
        "selector": "0xfcfe34de"
      },
      {
        "args": [
          {
            "label": "token_id",
            "type": {
              "displayName": [
                "Id"
              ],
              "type": 59
            }
          },
          {
            "label": "attributes",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 9
            }
          }
        ],
        "docs": [],
        "label": "Psp34Traits::get_attributes",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 49
        },
        "selector": "0x18209102"
      },
      {
        "args": [
          {
            "label": "_token_id",
            "type": {
              "displayName": [
                "Id"
              ],
              "type": 59
            }
          },
          {
            "label": "_metadata",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 5
            }
          }
        ],
        "docs": [],
        "label": "Psp34Traits::set_multiple_attributes",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 69
        },
        "selector": "0x5bf8416b"
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
                    "leaf": {
                      "key": "0x00000065",
                      "ty": 3
                    }
                  },
                  "root_key": "0x00000065"
                }
              },
              "name": "operator_approvals"
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
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xf9694d8a",
                              "ty": 4
                            }
                          },
                          "name": "0"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xf9694d8a",
                              "ty": 4
                            }
                          },
                          "name": "1"
                        }
                      ],
                      "name": "(A, B)"
                    }
                  },
                  "root_key": "0xf9694d8a"
                }
              },
              "name": "name_to_period"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x000000c9",
                      "ty": 5
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
                              "ty": 8
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
                      "ty": 9
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
                      "ty": 9
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
                      "ty": 9
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
                      "ty": 7
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
                  "ty": 7
                }
              },
              "name": "tld"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 7
                }
              },
              "name": "base_uri"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 10
                }
              },
              "name": "total_supply"
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
          "tuple": []
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
          "sequence": {
            "type": 6
          }
        }
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "tuple": [
            7,
            7
          ]
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
          "primitive": "u32"
        }
      }
    },
    {
      "id": 9,
      "type": {
        "def": {
          "sequence": {
            "type": 7
          }
        }
      }
    },
    {
      "id": 10,
      "type": {
        "def": {
          "primitive": "u128"
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
            7,
            11
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
      "id": 16,
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
                    "type": 17
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
            "type": 17
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
      "id": 19,
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
                    "type": 20
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
            "type": 20
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 20,
      "type": {
        "def": {
          "sequence": {
            "type": 1
          }
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
                    "type": 22
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 17
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
                    "type": 23
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
            "type": 23
          }
        ],
        "path": [
          "Result"
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
                "name": "InsufficientBalance"
              },
              {
                "index": 11,
                "name": "NoResolvedAddress"
              },
              {
                "index": 12,
                "name": "AlreadyClaimed"
              },
              {
                "index": 13,
                "name": "InvalidMerkleProof"
              },
              {
                "index": 14,
                "name": "OnlyDuringWhitelistPhase"
              },
              {
                "index": 15,
                "name": "RestrictedDuringWhitelistPhase"
              },
              {
                "index": 16,
                "name": "CannotBuyReservedName"
              },
              {
                "index": 17,
                "name": "NotReservedName"
              },
              {
                "index": 18,
                "name": "NotAuthorised"
              },
              {
                "index": 19,
                "name": "MetadataOverflow"
              },
              {
                "fields": [
                  {
                    "type": 24,
                    "typeName": "azns_fee_calculator::Error"
                  }
                ],
                "index": 20,
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
      "id": 24,
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
      "id": 25,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 26,
      "type": {
        "def": {
          "sequence": {
            "type": 2
          }
        }
      }
    },
    {
      "id": 27,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 28
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 28
          },
          {
            "name": "E",
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 28,
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
                    "type": 29
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
            "type": 29
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 29,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 7,
                    "typeName": "String"
                  }
                ],
                "index": 0,
                "name": "Custom"
              },
              {
                "index": 1,
                "name": "SelfApprove"
              },
              {
                "index": 2,
                "name": "NotApproved"
              },
              {
                "index": 3,
                "name": "TokenExists"
              },
              {
                "index": 4,
                "name": "TokenNotExists"
              },
              {
                "fields": [
                  {
                    "type": 7,
                    "typeName": "String"
                  }
                ],
                "index": 5,
                "name": "SafeTransferCheckFailed"
              }
            ]
          }
        },
        "path": [
          "azns_registry",
          "psp34_standard",
          "PSP34Error"
        ]
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
                    "type": 17
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
            "type": 17
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
                    "type": 23
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
            "type": 23
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 32,
      "type": {
        "def": {
          "sequence": {
            "type": 33
          }
        }
      }
    },
    {
      "id": 33,
      "type": {
        "def": {
          "tuple": [
            7,
            18
          ]
        }
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
                    "type": 17
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
            "type": 17
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
          "sequence": {
            "type": 36
          }
        }
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
                    "type": 37,
                    "typeName": "AddressDict"
                  }
                ],
                "index": 0,
                "name": "Registered"
              },
              {
                "fields": [
                  {
                    "type": 11,
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
      "id": 37,
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
                    "type": 17
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
            "type": 17
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
                    "type": 37
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 23
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
            "type": 23
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
                    "type": 41
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 41
          },
          {
            "name": "E",
            "type": 17
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
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 23
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
            "type": 23
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
                    "type": 43
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 43
          },
          {
            "name": "E",
            "type": 17
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
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 23
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
            "type": 23
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
                    "type": 17
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
            "type": 17
          }
        ],
        "path": [
          "Result"
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
                    "type": 46
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 46
          },
          {
            "name": "E",
            "type": 17
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
                    "type": 7
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 23
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
            "type": 23
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
                    "type": 48
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 48
          },
          {
            "name": "E",
            "type": 17
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
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 9
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
            "type": 9
          }
        ],
        "path": [
          "Option"
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
                    "type": 9
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 17
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
                    "type": 15
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 17
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
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 17
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
                    "type": 17
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
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 53,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 25
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 25
          },
          {
            "name": "E",
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 54,
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
                    "type": 10
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
            "type": 10
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 55,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 56
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 56
          },
          {
            "name": "E",
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 56,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 57
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 23
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
            "type": 57
          },
          {
            "name": "E",
            "type": 23
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 57,
      "type": {
        "def": {
          "tuple": [
            10,
            10,
            10,
            11
          ]
        }
      }
    },
    {
      "id": 58,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 59
          },
          {
            "name": "E",
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 59,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 2,
                    "typeName": "u8"
                  }
                ],
                "index": 0,
                "name": "U8"
              },
              {
                "fields": [
                  {
                    "type": 60,
                    "typeName": "u16"
                  }
                ],
                "index": 1,
                "name": "U16"
              },
              {
                "fields": [
                  {
                    "type": 8,
                    "typeName": "u32"
                  }
                ],
                "index": 2,
                "name": "U32"
              },
              {
                "fields": [
                  {
                    "type": 4,
                    "typeName": "u64"
                  }
                ],
                "index": 3,
                "name": "U64"
              },
              {
                "fields": [
                  {
                    "type": 10,
                    "typeName": "u128"
                  }
                ],
                "index": 4,
                "name": "U128"
              },
              {
                "fields": [
                  {
                    "type": 26,
                    "typeName": "Vec<u8>"
                  }
                ],
                "index": 5,
                "name": "Bytes"
              }
            ]
          }
        },
        "path": [
          "azns_registry",
          "psp34_standard",
          "Id"
        ]
      }
    },
    {
      "id": 60,
      "type": {
        "def": {
          "primitive": "u16"
        }
      }
    },
    {
      "id": 61,
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
                    "type": 17
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
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 62,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 11
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 11
          },
          {
            "name": "E",
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 63,
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
                    "type": 59
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
            "type": 59
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 64,
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
                    "type": 17
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
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 65,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 66
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 66
          },
          {
            "name": "E",
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 66,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 59
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 29
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
            "type": 59
          },
          {
            "name": "E",
            "type": 29
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 67,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 68
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 68
          },
          {
            "name": "E",
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 68,
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
                    "type": 26
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
            "type": 26
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 69,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 70
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 70
          },
          {
            "name": "E",
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 70,
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
                    "type": 71
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
            "type": 71
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 71,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 7,
                    "typeName": "String"
                  }
                ],
                "index": 0,
                "name": "Custom"
              }
            ]
          }
        },
        "path": [
          "azns_registry",
          "art_zero_traits",
          "ArtZeroError"
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

    get_name_status(names: String[]): Promise<Result<NameStatus[], LangError>> {
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

    get_registration_date(name: String): Promise<Result<Result<bigint, Error>, LangError>> {
        return this.stateCall('0x7458cdac', [name])
    }

    get_expiry_date(name: String): Promise<Result<Result<bigint, Error>, LangError>> {
        return this.stateCall('0xf56d0deb', [name])
    }

    get_all_records(name: String): Promise<Result<Vec, LangError>> {
        return this.stateCall('0x528be9f1', [name])
    }

    get_record(name: String, key: String): Promise<Result<Result<String, Error>, LangError>> {
        return this.stateCall('0x7e6cb4ce', [name, key])
    }

    get_owned_names_of_address(owner: AccountId): Promise<Result<(String[] | undefined), LangError>> {
        return this.stateCall('0xe413b13a', [owner])
    }

    get_controlled_names_of_address(controller: AccountId): Promise<Result<(String[] | undefined), LangError>> {
        return this.stateCall('0x9f25301e', [controller])
    }

    get_resolving_names_of_address(address: AccountId): Promise<Result<(String[] | undefined), LangError>> {
        return this.stateCall('0xadd2f457', [address])
    }

    get_primary_name(address: AccountId): Promise<Result<Result<String, Error>, LangError>> {
        return this.stateCall('0x404f1d73', [address])
    }

    get_names_of_address(address: AccountId): Promise<Result<String[], LangError>> {
        return this.stateCall('0xf82caf60', [address])
    }

    get_metadata_size_limit(): Promise<Result<(u32 | undefined), LangError>> {
        return this.stateCall('0x41b0a92e', [])
    }

    get_admin(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x57b8a8a7', [])
    }

    get_tld(): Promise<Result<String, LangError>> {
        return this.stateCall('0xd61daed4', [])
    }

    get_base_uri(): Promise<Result<String, LangError>> {
        return this.stateCall('0x6e06617c', [])
    }

    is_whitelist_phase(): Promise<Result<bool, LangError>> {
        return this.stateCall('0x59d8255b', [])
    }

    verify_proof(account: AccountId, merkle_proof: (Uint8Array[] | undefined)): Promise<Result<bool, LangError>> {
        return this.stateCall('0x71c9d9ba', [account, merkle_proof])
    }

    get_name_price(name: String, recipient: AccountId, years_to_register: u8, referrer: (String | undefined)): Promise<Result<Result<[u128, u128, u128, (AccountId | undefined)], Error>, LangError>> {
        return this.stateCall('0xb565be46', [name, recipient, years_to_register, referrer])
    }

    validate_referrer(recipient: AccountId, referrer_name: String): Promise<Result<bool, LangError>> {
        return this.stateCall('0x30fc989d', [recipient, referrer_name])
    }

    PSP34_collection_id(): Promise<Result<Id, LangError>> {
        return this.stateCall('0xffa27a5f', [])
    }

    PSP34_balance_of(owner: AccountId): Promise<Result<u32, LangError>> {
        return this.stateCall('0xcde7e55f', [owner])
    }

    PSP34_owner_of(id: Id): Promise<Result<(AccountId | undefined), LangError>> {
        return this.stateCall('0x1168624d', [id])
    }

    PSP34_allowance(owner: AccountId, operator: AccountId, id: (Id | undefined)): Promise<Result<bool, LangError>> {
        return this.stateCall('0x4790f55a', [owner, operator, id])
    }

    PSP34_total_supply(): Promise<Result<u128, LangError>> {
        return this.stateCall('0x628413fe', [])
    }

    PSP34Enumerable_owners_token_by_index(owner: AccountId, index: u128): Promise<Result<Result<Id, PSP34Error>, LangError>> {
        return this.stateCall('0x3bcfb511', [owner, index])
    }

    PSP34Enumerable_token_by_index(_index: u128): Promise<Result<Result<Id, PSP34Error>, LangError>> {
        return this.stateCall('0xcd0340d0', [_index])
    }

    PSP34Metadata_get_attribute(id: Id, key: Uint8Array): Promise<Result<(Uint8Array | undefined), LangError>> {
        return this.stateCall('0xf19d48d1', [id, key])
    }

    Psp34Traits_get_owner(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x8e1d8d71', [])
    }

    Psp34Traits_token_uri(token_id: Id): Promise<Result<String, LangError>> {
        return this.stateCall('0x249dfd4f', [token_id])
    }

    Psp34Traits_get_attribute_count(): Promise<Result<u32, LangError>> {
        return this.stateCall('0x61c50d69', [])
    }

    Psp34Traits_get_attribute_name(index: u32): Promise<Result<String, LangError>> {
        return this.stateCall('0xfcfe34de', [index])
    }

    Psp34Traits_get_attributes(token_id: Id, attributes: String[]): Promise<Result<String[], LangError>> {
        return this.stateCall('0x18209102', [token_id, attributes])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = Event_Register | Event_Release | Event_SetAddress | Event_Transfer | Event_Approval | Event_PublicPhaseActivated | Event_Reserve

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
    from: (AccountId | undefined)
    to: (AccountId | undefined)
    id: Id
}

export interface Event_Approval {
    __kind: 'Approval'
    owner: AccountId
    operator: AccountId
    id: (Id | undefined)
    approved: bool
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

export type Message = Message_register_on_behalf_of | Message_register | Message_claim_reserved_name | Message_release | Message_transfer | Message_clear_expired_names | Message_set_primary_name | Message_set_address | Message_set_controller | Message_update_records | Message_get_name_status | Message_get_address_dict | Message_get_owner | Message_get_controller | Message_get_address | Message_get_registration_date | Message_get_expiry_date | Message_get_all_records | Message_get_record | Message_get_owned_names_of_address | Message_get_controlled_names_of_address | Message_get_resolving_names_of_address | Message_get_primary_name | Message_get_names_of_address | Message_get_metadata_size_limit | Message_get_admin | Message_get_tld | Message_get_base_uri | Message_is_whitelist_phase | Message_verify_proof | Message_withdraw | Message_switch_to_public_phase | Message_add_reserved_names | Message_remove_reserved_name | Message_set_metadata_size_limit | Message_upgrade_contract | Message_set_admin | Message_get_name_price | Message_validate_referrer | Message_PSP34_collection_id | Message_PSP34_balance_of | Message_PSP34_owner_of | Message_PSP34_allowance | Message_PSP34_approve | Message_PSP34_transfer | Message_PSP34_total_supply | Message_PSP34Enumerable_owners_token_by_index | Message_PSP34Enumerable_token_by_index | Message_PSP34Metadata_get_attribute | Message_Psp34Traits_get_owner | Message_Psp34Traits_token_uri | Message_Psp34Traits_set_base_uri | Message_Psp34Traits_get_attribute_count | Message_Psp34Traits_get_attribute_name | Message_Psp34Traits_get_attributes | Message_Psp34Traits_set_multiple_attributes

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
    to: AccountId
    name: String
    keepMetadata: bool
    keepController: bool
    keepResolving: bool
    data: Uint8Array
}

/**
 *  Removes the associated state of expired-names from storage
 */
export interface Message_clear_expired_names {
    __kind: 'clear_expired_names'
    names: String[]
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
    names: String[]
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

export interface Message_get_registration_date {
    __kind: 'get_registration_date'
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

export interface Message_get_base_uri {
    __kind: 'get_base_uri'
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
    beneficiary: (AccountId | undefined)
    value: (u128 | undefined)
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
    set: String[]
}

/**
 *  (ADMIN-OPERATION)
 *  Update the limit of metadata allowed to store per name
 */
export interface Message_set_metadata_size_limit {
    __kind: 'set_metadata_size_limit'
    limit: (u32 | undefined)
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

export interface Message_PSP34_collection_id {
    __kind: 'PSP34_collection_id'
}

export interface Message_PSP34_balance_of {
    __kind: 'PSP34_balance_of'
    owner: AccountId
}

export interface Message_PSP34_owner_of {
    __kind: 'PSP34_owner_of'
    id: Id
}

export interface Message_PSP34_allowance {
    __kind: 'PSP34_allowance'
    owner: AccountId
    operator: AccountId
    id: (Id | undefined)
}

export interface Message_PSP34_approve {
    __kind: 'PSP34_approve'
    operator: AccountId
    id: (Id | undefined)
    approved: bool
}

export interface Message_PSP34_transfer {
    __kind: 'PSP34_transfer'
    to: AccountId
    id: Id
    data: Uint8Array
}

export interface Message_PSP34_total_supply {
    __kind: 'PSP34_total_supply'
}

export interface Message_PSP34Enumerable_owners_token_by_index {
    __kind: 'PSP34Enumerable_owners_token_by_index'
    owner: AccountId
    index: u128
}

export interface Message_PSP34Enumerable_token_by_index {
    __kind: 'PSP34Enumerable_token_by_index'
    index: u128
}

export interface Message_PSP34Metadata_get_attribute {
    __kind: 'PSP34Metadata_get_attribute'
    id: Id
    key: Uint8Array
}

export interface Message_Psp34Traits_get_owner {
    __kind: 'Psp34Traits_get_owner'
}

export interface Message_Psp34Traits_token_uri {
    __kind: 'Psp34Traits_token_uri'
    tokenId: Id
}

export interface Message_Psp34Traits_set_base_uri {
    __kind: 'Psp34Traits_set_base_uri'
    uri: String
}

export interface Message_Psp34Traits_get_attribute_count {
    __kind: 'Psp34Traits_get_attribute_count'
}

export interface Message_Psp34Traits_get_attribute_name {
    __kind: 'Psp34Traits_get_attribute_name'
    index: u32
}

export interface Message_Psp34Traits_get_attributes {
    __kind: 'Psp34Traits_get_attributes'
    tokenId: Id
    attributes: String[]
}

export interface Message_Psp34Traits_set_multiple_attributes {
    __kind: 'Psp34Traits_set_multiple_attributes'
    tokenId: Id
    metadata: Vec
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
    baseUri: String
    metadataSizeLimit: (u32 | undefined)
}

export type String = string

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

export type Error = Error_NotAdmin | Error_NameAlreadyExists | Error_NameDoesntExist | Error_NameNotAllowed | Error_CallerIsNotOwner | Error_CallerIsNotController | Error_FeeNotPaid | Error_NameEmpty | Error_RecordNotFound | Error_WithdrawFailed | Error_InsufficientBalance | Error_NoResolvedAddress | Error_AlreadyClaimed | Error_InvalidMerkleProof | Error_OnlyDuringWhitelistPhase | Error_RestrictedDuringWhitelistPhase | Error_CannotBuyReservedName | Error_NotReservedName | Error_NotAuthorised | Error_MetadataOverflow | Error_FeeError

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

export interface Error_InsufficientBalance {
    __kind: 'InsufficientBalance'
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
    value: Type_24
}

export type AccountId = Uint8Array

export type Vec = [String, String][]

export type u32 = number

export type bool = boolean

export type u8 = number

export type u128 = bigint

export type Id = Id_U8 | Id_U16 | Id_U32 | Id_U64 | Id_U128 | Id_Bytes

export interface Id_U8 {
    __kind: 'U8'
    value: u8
}

export interface Id_U16 {
    __kind: 'U16'
    value: number
}

export interface Id_U32 {
    __kind: 'U32'
    value: u32
}

export interface Id_U64 {
    __kind: 'U64'
    value: bigint
}

export interface Id_U128 {
    __kind: 'U128'
    value: u128
}

export interface Id_Bytes {
    __kind: 'Bytes'
    value: Uint8Array
}

export type PSP34Error = PSP34Error_Custom | PSP34Error_SelfApprove | PSP34Error_NotApproved | PSP34Error_TokenExists | PSP34Error_TokenNotExists | PSP34Error_SafeTransferCheckFailed

export interface PSP34Error_Custom {
    __kind: 'Custom'
    value: String
}

export interface PSP34Error_SelfApprove {
    __kind: 'SelfApprove'
}

export interface PSP34Error_NotApproved {
    __kind: 'NotApproved'
}

export interface PSP34Error_TokenExists {
    __kind: 'TokenExists'
}

export interface PSP34Error_TokenNotExists {
    __kind: 'TokenNotExists'
}

export interface PSP34Error_SafeTransferCheckFailed {
    __kind: 'SafeTransferCheckFailed'
    value: String
}

export type Type_24 = Type_24_NotAdmin | Type_24_InvalidDuration | Type_24_ZeroLength

export interface Type_24_NotAdmin {
    __kind: 'NotAdmin'
}

export interface Type_24_InvalidDuration {
    __kind: 'InvalidDuration'
}

export interface Type_24_ZeroLength {
    __kind: 'ZeroLength'
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
