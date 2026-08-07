---
name: booqable
description: Booqable is rental management software for small businesses that provides inventory tracking, online bookings, order and payment management, mobile point of sale, and website integrations, allowing rental teams to manage availability, fulfill bookings, and handle customer communication from one system. Read and write Booqable data through One: bundles, customers, documents, orders, productgroups, products and more, 222 actions with real parameter documentation. Use whenever the user asks to look something up in Booqable, create or update a record there, or build code against the Booqable API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: booqable
  generated-from: one-knowledge-base
---

# Booqable through One

Booqable is rental management software for small businesses that provides inventory tracking, online bookings, order and payment management, mobile point of sale, and website integrations, allowing rental teams to manage availability, fulfill bookings, and handle customer communication from one system.

One exposes Booqable through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `booqable` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Booqable is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Booqable account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Bundles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bundle | GET | `/api/4/bundles/{{id}}` | `conn_mod_def::GMiTuw03K8M::xO6NrpYTQ0aO2ODCYTqiNg` |
| List Bundles | GET | `/api/4/bundles` | `conn_mod_def::GMiTu_lz0sg::dP3eWatFT6K3xmSRpUjEUg` |
| Create a Bundle | POST | `/api/4/bundles` | `conn_mod_def::GMiTuvsCZJQ::QoB1aewWRHOBH67AmhapdA` |
| Delete a Bundle | DELETE | `/api/4/bundles/{{id}}` | `conn_mod_def::GMiTu28m_ec::r4tDPZ59R8u85KyEi5sJEg` |
| Search Bundles | POST | `/api/4/bundles/search` | `conn_mod_def::GMiTvAAukwo::kff90qm1T7a9yvLHuYNHug` |
| Update a Bundle | PUT | `/api/4/bundles/{{id}}` | `conn_mod_def::GMiTu_GYHDE::6itHqwYjTv2YxwvUHuIFig` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer | GET | `/api/4/customers/{{id}}` | `conn_mod_def::GMiTv9glb68::pVruzcxORT-UJfylueMrcw` |
| List Customers | GET | `/api/4/customers` | `conn_mod_def::GMiTv-PrnXA::Ttel2w2QSXeyDJlvnTuKDA` |
| Archive a Customer | DELETE | `/api/4/customers/{{id}}` | `conn_mod_def::GMiTv7G3I8Y::fgyxgjjnQfWPfWbh0hUUew` |
| Create a Customer | POST | `/api/4/customers` | `conn_mod_def::GMiTv9MeKw0::9Eq_zo44QEaSXvZ_pcEHgg` |
| Search Customers | POST | `/api/4/customers/search` | `conn_mod_def::GMiTwHVdDJI::r8VQMRnZQU60ETW5xU41OQ` |
| Update a Customer | PUT | `/api/4/customers/{{id}}` | `conn_mod_def::GMiTwI7adlg::RAfln_lvRJmvdFpHdJpL8A` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document | GET | `/api/4/documents/{{id}}` | `conn_mod_def::GMiTwlu4sC4::zeRhP5tZRQiJkh__MMxb_A` |
| List Documents | GET | `/api/4/documents` | `conn_mod_def::GMiTwdKe31g::6ThY9txhRuyyuzKFlkI3yw` |
| Archive a Document | DELETE | `/api/4/documents/{{id}}` | `conn_mod_def::GMiTwSjRd6E::WT2mM8JlRSCF-JVLf9yGaw` |
| Create a Document | POST | `/api/4/documents` | `conn_mod_def::GMiTwcd1Eys::BOJoM8XPSwSpMsZrYv64ow` |
| Search Documents | POST | `/api/4/documents/search` | `conn_mod_def::GMiTwcmxLLk::r-d-UHzrTGuVKXazw6q-uQ` |
| Update a Document | PUT | `/api/4/documents/{{id}}` | `conn_mod_def::GMiTwbPhSUU::eOx74V8MSji35TX9ZXgTDw` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a New Order for the Current Employee | GET | `/api/4/orders/new` | `conn_mod_def::GMiTyi3lmb8::ASdohHW9TZiL7sa9oAINFA` |
| Get an Order | GET | `/api/4/orders/{{id}}` | `conn_mod_def::GMiTyjDpYCo::_eNUZ4KwTx2K8bUbRsEX4g` |
| List Orders | GET | `/api/4/orders` | `conn_mod_def::GMiTyjEnfWw::aZ4aBRwcT6K7KX-XvOZ9Sw` |
| Create an Order | POST | `/api/4/orders` | `conn_mod_def::GMiTy5ioIuo::vpk6yeV_QiOMdreHA9-LjQ` |
| Search Orders | POST | `/api/4/orders/search` | `conn_mod_def::GMiTzC0vke8::tk-RNSraSweAQE8m7-U_Wg` |
| Update an Order | PUT | `/api/4/orders/{{id}}` | `conn_mod_def::GMiTzD8tMeM::lniejcPMRnafNcnMb22tlA` |

### ProductGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product Group | GET | `/api/4/product_groups/{{id}}` | `conn_mod_def::GMiT0oDLoPc::hH53SmVXRXqF-vaQFiXPeg` |
| List Product Groups | GET | `/api/4/product_groups` | `conn_mod_def::GMiT0kLM7aY::NMKtPf6nTFi6czD6plzASQ` |
| Create a Product Group | POST | `/api/4/product_groups` | `conn_mod_def::GMiT0kpypzs::sRFIQxa6QD2La-Ts73S9Uw` |
| Delete a Product Group | DELETE | `/api/4/product_groups/{{id}}` | `conn_mod_def::GMiT0j5pLII::Esw-M8oQRs6TFsmdbpOeBA` |
| Search Product Groups | POST | `/api/4/product_groups/search` | `conn_mod_def::GMiT0wo2Dxo::ozoC-mFcRjGUZHCLnc9VLw` |
| Update a Product Group | PUT | `/api/4/product_groups/{{id}}` | `conn_mod_def::GMiT0wA8jnE::YcV5DufNQjGys0R-gd1Y8w` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product | GET | `/api/4/products/{{id}}` | `conn_mod_def::GMiT0vrix7U::Y3k7s1qESZODeQaEtlTbnw` |
| List Products | GET | `/api/4/products` | `conn_mod_def::GMiT05ub12s::VJ3JxCs2RJma_C8zLL8DQQ` |
| Create a Product | POST | `/api/4/products` | `conn_mod_def::GMiT0vRtM9s::c5hTrkEXSfi-QkDEl9DPwg` |
| Delete a Product | DELETE | `/api/4/products/{{id}}` | `conn_mod_def::GMiT0wLjsmc::bawuBlwPQaS0-obi30hEsA` |
| Search Products | POST | `/api/4/products/search` | `conn_mod_def::GMiT04t1Zis::qOEX9J8NTByPXNzWb1BpqQ` |
| Update a Product | PUT | `/api/4/products/{{id}}` | `conn_mod_def::GMiT03wrn28::6pYvt_4eRt-1-gXI4cQgwQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/api/4/users/{{id}}` | `conn_mod_def::GMiT2XlQPvU::eqBEqT2PSFibe-7zXEDhkA` |
| List Users | GET | `/api/4/users` | `conn_mod_def::GMiT2gPi_RM::8-D1Z5HLTYmxTodctsuEKg` |
| Create a User Invitation | POST | `/api/4/users` | `conn_mod_def::GMiT2WyoLYs::j6dTCctVRU64kjZCpWNs5w` |
| Disable a User | PUT | `/api/4/users/{{id}}` | `conn_mod_def::GMiT2XKUHVg::0p8w3BYlQkSykZm0eAj7Qw` |
| Update a User | PUT | `/api/4/users/{{id}}` | `conn_mod_def::GMiT2W_Wiuk::FpTbUIhkSOqOxBbGhtSQ4A` |
| Update a User | PUT | `/api/4/users/{{id}}` | `conn_mod_def::GMiT2fG5mKk::SIiAYTdARjmFmFYZSH0sjg` |

### Barcodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Barcode | GET | `/api/4/barcodes/{{id}}` | `conn_mod_def::GMiTuPJJSpQ::ewjPRtVeRimLqLRtaxNO5g` |
| List Barcodes | GET | `/api/4/barcodes` | `conn_mod_def::GMiTueGciWM::80kTr3wdTemvmbJwKbUf3Q` |
| Create a Barcode | POST | `/api/4/barcodes` | `conn_mod_def::GMiTuT75biw::d_zAq1MuR22IxtEUk1_Xrw` |
| Delete a Barcode | DELETE | `/api/4/barcodes/{{id}}` | `conn_mod_def::GMiTuTNQBP0::BgXIZLnZQeShceOlXw2lMg` |
| Update a Barcode | PUT | `/api/4/barcodes/{{id}}` | `conn_mod_def::GMiTucmy048::5o7u-MwDTUGL8u9xVFTT5A` |

### BundleItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bundle Item | GET | `/api/4/bundle_items/{{id}}` | `conn_mod_def::GMiTunIakF8::CN0HW0aOTL6u_Q-FF0eVUQ` |
| List Bundle Items | GET | `/api/4/bundle_items` | `conn_mod_def::GMiTuwdbNFI::eDr9zeJcRJKjjgm5KUVHxA` |
| Create a Bundle Item | POST | `/api/4/bundle_items` | `conn_mod_def::GMiTucGsnLU::4TpMey3wQL2URovpSC6sNA` |
| Delete a Bundle Item | DELETE | `/api/4/bundle_items/{{id}}` | `conn_mod_def::GMiTubsLf8A::wtKRwE-vTQ2riW39ETElgw` |
| Update a Bundle Item | PUT | `/api/4/bundle_items/{{id}}` | `conn_mod_def::GMiTuvb5ex4::SFtMIUyFSpyJLuTXEWmy_Q` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection | GET | `/api/4/collections/{{id}}` | `conn_mod_def::GMiTvInAdzE::HEJBwZ_cSCuwfIASn8UsaA` |
| List Collections | GET | `/api/4/collections` | `conn_mod_def::GMiTvXiiBb4::LMAvklqQTtGTP-itDs5RFg` |
| Create a Collection | POST | `/api/4/collections` | `conn_mod_def::GMiTvJdsAIk::Q5A--N0LR9qZSep357JMNw` |
| Delete a Collection | DELETE | `/api/4/collections/{{id}}` | `conn_mod_def::GMiTvJJR9WI::QHUw-f7hQ52nYFHk3qGCLg` |
| Update a Collection | PUT | `/api/4/collections/{{id}}` | `conn_mod_def::GMiTvWlsApI::KsqPExc3RjSTOoQI066Khw` |

### Coupons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Coupon | GET | `/api/4/coupons/{{id}}` | `conn_mod_def::GMiTvgTxglM::odmyC4AaQ2udtPviKVpo4Q` |
| List Coupons | GET | `/api/4/coupons` | `conn_mod_def::GMiTvzB0n7g::yNgC6goDTFWJJ_ZYIl1qOQ` |
| Archive a Coupon | DELETE | `/api/4/coupons/{{id}}` | `conn_mod_def::GMiTvgvsfek::UAu1edjOSO216oGKlOklBA` |
| Create a Coupon | POST | `/api/4/coupons` | `conn_mod_def::GMiTvf-V6Fc::vCUrCw2RRkKlPG9cylg1XQ` |
| Update a Coupon | PUT | `/api/4/coupons/{{id}}` | `conn_mod_def::GMiTv8dSjxM::sCrDeyZzRqS5ji0tOcvfjg` |

### DefaultProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Default Property | GET | `/api/4/default_properties/{{id}}` | `conn_mod_def::GMiTwGV1PZQ::2ZYTDo9XS_edw372T7WIVg` |
| List Default Properties | GET | `/api/4/default_properties` | `conn_mod_def::GMiTwQeIskk::QdTbIz7nTdO7MNS7kDn1pA` |
| Create a Default Property | POST | `/api/4/default_properties` | `conn_mod_def::GMiTwGuznn8::fr2Wxz9ZTvuKLv2INsEf3w` |
| Delete a Default Property | DELETE | `/api/4/default_properties/{{id}}` | `conn_mod_def::GMiTwFAjrG8::UcI4ZNCRT42m41dLyKA_mA` |
| Update a Default Property | PUT | `/api/4/default_properties/{{id}}` | `conn_mod_def::GMiTwR0po30::e08E9kZdQbKi6O_m_9QsuQ` |

### EmailTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Template | GET | `/api/4/email_templates/{{id}}` | `conn_mod_def::GMiTw3Um7vE::OUARqbNzROaiXF9ZqkeTUA` |
| List Email Templates | GET | `/api/4/email_templates` | `conn_mod_def::GMiTw2HPJJk::zHCcixABSUOf65hCJ8OpwQ` |
| Create an Email Template | POST | `/api/4/email_templates` | `conn_mod_def::GMiTwuSKUw8::tljHjANBTXiDBXAngRmrxQ` |
| Delete an Email Template | DELETE | `/api/4/email_templates/{{id}}` | `conn_mod_def::GMiTw2GTfeA::wPI34KS5RfKMVnCyL5IL8g` |
| Update an Email Template | PUT | `/api/4/email_templates/{{id}}` | `conn_mod_def::GMiTw2uUcKk::sd0ZyOpeTy-b7rfgOuDIWw` |

### Lines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Line | GET | `/api/4/lines/{{id}}` | `conn_mod_def::GMiTxzmsUTI::mhsvntoAS_eYzfhiukCxrw` |
| List Lines | GET | `/api/4/lines` | `conn_mod_def::GMiTxzC9KpY::CzOVqZIGRO6nufgqFLxNfA` |
| Create a Line | POST | `/api/4/lines` | `conn_mod_def::GMiTxyWOgKw::K8Y7idjbTvGe_hJR6O07WA` |
| Delete a Line | DELETE | `/api/4/lines/{{id}}` | `conn_mod_def::GMiTxhty_34::75djIJd3TvCx2-cIytxcfw` |
| Update a Line | PUT | `/api/4/lines/{{id}}` | `conn_mod_def::GMiTxyy8qOY::VJ8IkwnJSGyeQ1M2dftT9g` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Location | GET | `/api/4/locations/{{id}}` | `conn_mod_def::GMiTx8tQHcs::TMUPISaFQuyzj0M8dtThCw` |
| List Locations | GET | `/api/4/locations` | `conn_mod_def::GMiTx8wknXg::WCAJ_FxDSIuAaWhjYlGoQw` |
| Archive a Location | DELETE | `/api/4/locations/{{id}}` | `conn_mod_def::GMiTxyUQqak::oANUaUuLTOul5M7BBYk5JA` |
| Create a Location | POST | `/api/4/locations` | `conn_mod_def::GMiTx7WlcYE::P6kxXWoHSS-EOI0OHBdtGg` |
| Update a Location | PUT | `/api/4/locations/{{id}}` | `conn_mod_def::GMiTx70Qg-w::ZEzJwXJ-QWuBN6qPNE2RrQ` |

### OrderDeliveryRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Order Delivery Rate | GET | `/api/4/order_delivery_rates/{{id}}` | `conn_mod_def::GMiTyNfhI8A::9nMpCFu6T7Kb08kfu9p-lg` |
| List Order Delivery Rates | GET | `/api/4/order_delivery_rates` | `conn_mod_def::GMiTyRsjscc::wHPR0L3zQyCgWX8sPhJ-Lg` |
| Create an Order Delivery Rate | POST | `/api/4/order_delivery_rates` | `conn_mod_def::GMiTyF-e4jE::v8P7PvU1QeCYqBjY3UN5qQ` |
| Delete an Order Delivery Rate | DELETE | `/api/4/order_delivery_rates/{{id}}` | `conn_mod_def::GMiTyOGFblI::6TSP2VafSyaJ_-PFynzemw` |
| Update an Order Delivery Rate | PUT | `/api/4/order_delivery_rates/{{id}}` | `conn_mod_def::GMiTyN33ZfQ::U3Jr7MbDQ3ut0mVb45sy6A` |

### Photos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Photo | GET | `/api/4/photos/{{id}}` | `conn_mod_def::GMiTz2jBKm4::MFm8M3NHS8CHJzKkGUOi_A` |
| List Photos | GET | `/api/4/photos` | `conn_mod_def::GMiTz3Wds3E::CGAFa6FsTo-Scoe5T2dLbw` |
| Create a Photo | POST | `/api/4/photos` | `conn_mod_def::GMiTz3Y0kdc::JY1vpwGiQnue1eo5CuaTlw` |

2 more Photos actions are available through search.

This lists 90 of 222 actions. For anything not here, call `search_one_platform_actions` with platform `booqable`. The full catalog is at https://www.withone.ai/knowledge/booqable.

## When a call fails

The error comes from Booqable, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/booqable

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
