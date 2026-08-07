---
name: box-hero
description: A cloud-based inventory and stock management platform that enables businesses to track products, manage warehouses, monitor stock levels in real time, and automate order fulfillment across sales channels. Read and write BoxHero data through One: items, locations, partners, itemattribute, locationtransaction, members and more, 29 actions with real parameter documentation. Use whenever the user asks to look something up in BoxHero, create or update a record there, or build code against the BoxHero API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: box-hero
  generated-from: one-knowledge-base
---

# BoxHero through One

A cloud-based inventory and stock management platform that enables businesses to track products, manage warehouses, monitor stock levels in real time, and automate order fulfillment across sales channels.

One exposes BoxHero through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `box-hero` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BoxHero is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BoxHero account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Item's Barcode (Item Details) | GET | `/v1/items/{{item_id}}` | `conn_mod_def::GJxS9tblU5E::ikmRnhpDTJK7BLh76-7u8A` |
| List Items (Barcodes) | GET | `/items` | `conn_mod_def::GJxS9bWyVig::uflMWPn0SnSKw-u6LpWYCQ` |
| Create an Item (Barcode) | POST | `/v1/items` | `conn_mod_def::GJxS9josm1M::UsGDtjTQQn2Cqvri8KQEqw` |
| Delete an Item (Barcode) | DELETE | `/v1/items/{{item_id}}` | `conn_mod_def::GJxS97SVXmI::o-rHGsYVQs2CTKPnuSChvw` |
| Update an Item (Edit Barcode) | PUT | `/v1/items/{{ITEM_ID}}` | `conn_mod_def::GJxS91Xsv9c::c9joRoKFT8eNaXWOh6XwHg` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Location | GET | `/v1/locations/{{LOCATION_ID}}` | `conn_mod_def::GJxS-RsHDDA::9-0uwH7gR1y-APSgpLr4TA` |
| List Locations | GET | `/v1/locations` | `conn_mod_def::GJxS-C6aWho::8UhZjb17SzaaEHYa_B_QJw` |
| Create a Location | POST | `/locations` | `conn_mod_def::GJxS-LFj50g::9pFz-qMIQLa2sbDaW1jCrA` |
| Delete a Location | DELETE | `/v1/locations/{{LOCATION_ID}}` | `conn_mod_def::GJxS-eqUwJI::bnpsLGjJSt62fxFyA9Trgg` |
| Update a Location | PUT | `/v1/locations/{{LOCATION_ID}}` | `conn_mod_def::GJxS-X1wGkQ::W6o1QLCJQuiNmrfSBSsysw` |

### Partners

| Action | Method | Path | Action id |
|---|---|---|---|
| List Partners (Vendors) | GET | `/v1/partners` | `conn_mod_def::GJxS-1w5dq8::LHBgeQFBQCak3L1MaNz4dg` |
| Retrieve a Partner (Vendor) | GET | `/v1/partners/{{partner_id}}` | `conn_mod_def::GJxS_JgULmw::74Cld-zWS_W20JPFQ58KAg` |
| Create a Partner (Vendor) | POST | `/v1/partners` | `conn_mod_def::GJxS_CV8H5s::ON7F7Ua7TUaQvy0z4MODKg` |
| Delete a Vendor (Partner) | DELETE | `/v1/partners/{{PARTNER_ID}}` | `conn_mod_def::GJxS_ZlXXF0::oRIB8R_lRxOuJhXMQp9Exg` |

### ItemAttribute

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Item Attribute | GET | `/v1/item-attrs/{{ATTR_ID}}` | `conn_mod_def::GJxS82hiA20::9FBSdkfaQniG1U_IDHLbjQ` |
| Create an Item Attribute | POST | `/item-attrs` | `conn_mod_def::GJxS8vE45Ww::T9MJuThgSVOwZCIsQvie2Q` |
| Update an Item Attribute | PUT | `/v1/item-attrs/{{ATTR_ID}}` | `conn_mod_def::GJxS8_2RPCE::vhV2eghATDCKaoa6zsYvNg` |

### LocationTransaction

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Location Transaction (Location Mode) | GET | `/v1/location-txs/{{tx_id}}` | `conn_mod_def::GJxS_0U36q0::3ANmUAxsRrip92XkZQdBkQ` |
| Create a Location Transaction (Location Mode) | POST | `/location-txs` | `conn_mod_def::GJxS_sdXUes::O7DTQCOIRYORNaNWhT36rA` |
| Update a Location Transaction | PUT | `/v1/location-txs/{{TX_ID}}` | `conn_mod_def::GJxS_8n6pio::FddsTTThTseOAisa3bzIeQ` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Member | GET | `/v1/members/{{MEMBER_ID}}` | `conn_mod_def::GJxS-vAVzBo::vNl4aLVzTpmJY4eR7eYX4g` |
| List Members | GET | `/v1/members` | `conn_mod_def::GJxS-nHj2RQ::tT-jqc9UTPaReLz-OJ15DA` |

### LocationTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Location Transactions (Location Mode) | GET | `/location-txs` | `conn_mod_def::GJxS_l7Wbmw::xSMc5rXDRtmqgV3s2IYB7w` |
| Delete a Location Transaction | DELETE | `/v1/location-txs/{{tx_id}}` | `conn_mod_def::GJxTAFlm3C4::5CF3oLCsSuimXL3Ix7M9OQ` |

### ItemAttributeSpecifications

| Action | Method | Path | Action id |
|---|---|---|---|
| List Item Attribute Specifications (Team) | GET | `/v1/item-attrs` | `conn_mod_def::GJxS8nYRJ6c::IWaFiI52SdupLFE9b5fSrA` |

### ItemAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Item Attribute | DELETE | `/v1/item-attrs/{{ATTR_ID}}` | `conn_mod_def::GJxS9ItpcmQ::nw2pTzlCQ8GlxUiFpaAs2Q` |

### ItemAttributeRanks

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Item Attribute Ranks | PUT | `/v1/item-attrs/ranks` | `conn_mod_def::GJxS9PxNDL4::ag6_KNJqT4W108c2PmBrbg` |

### Partner

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Vendor (Partner) | PUT | `/v1/partners/{{PARTNER_ID}}` | `conn_mod_def::GJxS_TJ2qVg::XPGyGbJXRcyMpkgdAet4Hg` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current Linked Team | GET | `/teams/linked` | `conn_mod_def::GJxS_fsnJ68::1UVcY7IeTAex1ZyfwFOV1w` |

## When a call fails

The error comes from BoxHero, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/box-hero

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
