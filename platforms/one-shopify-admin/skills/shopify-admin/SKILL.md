---
name: shopify-admin
description: Shopify Admin is the backend interface for managing your Shopify store. It provides tools for product listings, order fulfillment, customer management, and store analytics. Read and write Shopify Admin data through One: products, customers, orders, collections, returns, fulfillmentorder and more, 796 actions with real parameter documentation. Use whenever the user asks to look something up in Shopify Admin, create or update a record there, or build code against the Shopify Admin API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: shopify-admin
  generated-from: one-knowledge-base
---

# Shopify Admin through One

Shopify Admin is the backend interface for managing your Shopify store. It provides tools for product listings, order fulfillment, customer management, and store analytics.

One exposes Shopify Admin through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `shopify-admin` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Shopify Admin is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Shopify Admin account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Update a Product's Variants | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQQQdA1YU::h-pq2VajRbW5ZjJvaGgfCg` |
| Change a Product's Status | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQOX9EMH8::8Ur9X2_5QpKR5HPLabQQ2g` |
| Count Products | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQizZgfR0::TW9V0-NjSee-DH9946oUaA` |
| Create a Product | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQOce3FIM::CrbScbh3SeyXG5L_ihHQ2A` |
| Create or Update Products with productSet | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQPisvTCc::U1Mt0xycQpC4NzhWMdBVoA` |
| Create Product Options for a Product | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQPUmVHvc::SveWNbKpTAeN_RCDMxsFRw` |
| Delete a Product | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQOZhAD_k::OPfIUkjYRgmGDndNFvkxEw` |
| Delete Media From a Product | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQPHJok0U::hukSatIfTweQ5GHuse3rVg` |
| Duplicate a Product | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQOlxpGDU::RlZiO8v5TD2w4w_h9RdpCA` |
| Get a Product by Handle | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQiYB1Zck::7-SMSYHGQGymDlYj3WgwXg` |
| Get a Product by Identifier | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQiWFNogo::groPM0jESP26Nh7O91csNw` |
| List Products | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQiyxlSRc::ZTlGg0A_Q0q2nYOCUHqDYA` |

9 more Products actions are available through search.

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Tax Exemptions to a Customer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP8jpzT1g::i08RAHEFRTu7agMjCWXJFg` |
| Cancel a Customer's Pending Data Erasure | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP7o3K9Ok::qzokx1NgSjexsnKPAY0TVQ` |
| Count Customers | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQcJuzt80::TlOxt6LHRCiUriGOYDMAgg` |
| Create a Customer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP7pW8dw8::cvbV8BKhQwOhZBz2o1kzbQ` |
| Create or Update a Customer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP-oFAqoo::RqUIqGj_SRm7XyE8wGdkkQ` |
| Delete a Customer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP8xnfOrQ::fkKrO19eQKm-NHyEpsiZtg` |
| Get a Customer by ID | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQbOuOT1I::gz2sN97STqWwCOvFMAyVUQ` |
| Get a Customer by Identifier | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQb3hp2TI::gO6PPDM_SaKE1WlhgWbWmg` |
| List Customers | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQcMRYQ5Y::W-EA2CVaSK-26R0XjJkBBg` |
| Merge Two Customers | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP8w-hVqE::4eEOTLv3QtumFpJEnrON8g` |
| Remove Tax Exemptions From a Customer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP9x_0CkE::BUlHYiJIQIeFlUxR8VSMIw` |
| Replace a Customer's Tax Exemptions | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP-f-rkCM::S0_aeY8KSfy8sC9XUydkDw` |

4 more Customers actions are available through search.

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel an Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQKlcHbLM::cRucR1GrRxCXTia0PwxI-A` |
| Close an Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQKxsJ97U::iu-sAfA8QMiv0D2BaKXr8g` |
| Count Orders | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQhKpTtfM::zg8tH4O3QCiL5gosiA-Vhg` |
| Create a Mandate Payment for an Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQKwxzFKU::E0iURyPGQqmXM8hh_pDqhA` |
| Create a Manual Payment for an Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQLC8hstw::qBYhwAk0TPyM1CE42bl0zA` |
| Create an Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQLccM2uI::77_TOhTEQVmb5t9Kfb4grA` |
| Delete an Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQLpudxW8::jR7BRS77RW-d9XWg5Eqs2w` |
| Get an Order by ID | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQg7_qp3I::VEhJPiMSRGGxg5cr8A7ulg` |
| Get an Order by Identifier | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQg8Oyhkw::alIaJ0_1QrWbA3ZkfqGuEg` |
| List Orders | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQhFvHVug::MkEVazDdTN-A4YnWXlX8Mw` |
| Mark an Order as Paid | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQNERVOLE::Srvq87_BQlCtchAVBYzkKw` |
| Open an Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQNF9oicQ::v1voQ81kQJyl_J2Vphh8-A` |

4 more Orders actions are available through search.

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Products to a Collection | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP3vwxPEU::1wY5Hz-BSj6HX2r4Q8L5nw` |
| Add Products to a Collection Asynchronously | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP3uWPRgg::E3rloqKNQgeIyfTTDnDRTg` |
| Count Collections | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQalvVE_4::VHDuJV3-TsW1hpw6x81Plg` |
| Create a Collection | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP3uanjpE::9yMR_TLaRPKhAebK3kloSA` |
| Delete a Collection | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP3u6M1o4::OKW7jDchQGq0BKHPV83e2g` |
| Duplicate a Collection | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP36tUkfE::8vSXG1vfSl2wJyCQ9Z3PEA` |
| Get a Collection by Handle | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQaatJLzg::VZhSOfCbSUupKKefEdgb0A` |
| Get a Collection by ID | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQab0aynQ::UYETHgu4QlCxBGh2doqczw` |
| Get a Collection by Identifier | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQal_oQ4Q::oqlDL2FCRGGDrT7BBNPlVg` |
| List Collections | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQamHA6ZI::2WOWnS11QC-B26Tc2T2Jxg` |
| Publish a Collection to Sales Channels | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP37xCg30::ccO1Xj_eRJqYHJJ2NjuVbw` |
| Remove Products From a Manual Collection | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbP37mr6Ys::eQv9FR0vTp2khL9saphd2w` |

3 more Collections actions are available through search.

### Returns

| Action | Method | Path | Action id |
|---|---|---|---|
| Approve a Return Request | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQQ7rlOeU::MTtRU2yhSu24jejgpcA2EA` |
| Calculate a Return | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQjWUvV-8::wlEJsfAuTtesYglle6gcIA` |
| Cancel a Return | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQQ7z8pWY::8yKKFCD9Sxa72x1cGlzexw` |
| Close a Return | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQQ8iiKJE::JNbRIAI-SRqkO83TsI9bZg` |
| Create a Refund for a Return | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQRG2JY_I::IVd24-BSR8O0VkMKpn28CA` |
| Create a Return for an Existing Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQQ7L6Hz4::gFMAx-FgQlu-grw7gy1AaQ` |
| Create a Return Request | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQRb-n6fY::eNomvGHNQ0q-Ijpp2nUMtA` |
| Decline a Return Request | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQRJHyB0Q::30sgLpypSPOfnlt24KGiUg` |
| Get a Return by ID | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQjXyhZgo::W32xy50aS-GFD5xlCRoLbw` |
| Process a Return | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQRN04S_4::YN7y9k9VSIWAdvuChjD_LQ` |
| Remove Return and/or Exchange Lines From a Return | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQQ7Fx5iQ::_sv_u-3FR8aAOfno_uq1kQ` |
| Remove Return Line Items From a Return | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQRIzGaJ8::sDQJmE3-RwahfFBpyU_sEA` |

1 more Returns actions are available through search.

### FulfillmentOrder

| Action | Method | Path | Action id |
|---|---|---|---|
| Accept a Fulfillment Request for a Fulfillment Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQEEamc60::ZPfBEAyjQMOF1MO5IWguIg` |
| Cancel a Fulfillment Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQEEatBI0::3tdB-Zj9Q2KBp1a3i_fpvw` |
| Close a Fulfillment Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQEEfHs9g::L9I6JesbQ5y1dc8zUl-jHA` |
| Get a Fulfillment Order by ID | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQeDNS6ys::e0ZVxaXASKuHwxdVUCNHCA` |
| Move a Fulfillment Order to a New Location | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQEUkMIFU::MehCAtV7QEi4YhllwL3mWQ` |
| Open a Fulfillment Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQEVpBhWs::9PBou_PLQouMkTxoWKt0jw` |
| Reject a Fulfillment Order Cancellation Request | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQElJKQ6A::-zmklUXDSSWnMA4FN5pQYw` |
| Release a Fulfillment Order Hold | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQElLvXKI::leqYBXRTS-SXueYgbd1S6A` |
| Report Progress for a Fulfillment Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQEnD3m8A::9nnsAZUNT2ObV3fuIbc9Qg` |
| Reschedule a Fulfillment Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQEoUIJOY::qEzcioCcRwSevqFF_EjQJw` |
| Submit a Fulfillment Request for a Fulfillment Order | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQEygtTk0::DqlWph9lT8GVmJEMa8X0Jw` |

### InventoryShipment

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Items to an Inventory Shipment | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGEoqFmM::JNwQOOBVRWK47BUmhc6-Zg` |
| Create an In-Transit Inventory Shipment for an Inventory Transfer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGFjsplU::fSw8LdoMT_-pkKDvwEanGw` |
| Create an Inventory Shipment for an Inventory Transfer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGFTRwIk::R7_bYveiS1Sa9dD6B3XFlQ` |
| Delete an Inventory Shipment | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGEWQWZo::TkoY88TNQqyXJSrAxzJAtA` |
| Get an Inventory Shipment by ID | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQencQM80::s6HoSMskSkm_weT9TdlSLw` |
| Mark an Inventory Shipment In Transit | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGPzi6nU::rXmf82QITGynFon5ovI7Nw` |
| Receive an Inventory Shipment | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGPenpJU::cXwUcghARIeEW0oEVb-WfA` |
| Remove Items From an Inventory Shipment | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGQbgMg0::xrH6e6yYRdWOHHieauV9oQ` |
| Set an Inventory Shipment's Barcode | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGPo8Cv4::MANS-hrmTcKZbqLqGGcLfg` |
| Set Tracking for an Inventory Shipment | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGSCRNFs::MfILC9fUTlWr-oVkYR5Q1w` |
| Update Item Quantities on an Inventory Shipment | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGcmNYyI::kZ6rTkfDQhaoMopsbCzKow` |

### InventoryTransfer

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel an Inventory Transfer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGcwdnbc::Wo2Ch_iNRaSsOnIq3yXggQ` |
| Create an Inventory Transfer as Ready to Ship | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQHga3PIg::TIc3B1c0TAyGOT0XVuHSmw` |
| Create an Inventory Transfer Draft | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQHhG5h24::4KZ5BrwcQjC4djnTGUb48Q` |
| Delete an Inventory Transfer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQGbpg2Fc::7ouxOWq5RyiUnfS3AjXbdA` |
| Duplicate an Inventory Transfer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQHteNHks::dvgyIjxRRnOU6XkuKnGpyA` |
| Edit an Inventory Transfer | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQHudogT0::Y75wQsriSiOS5zLv7qjThA` |
| Get an Inventory Transfer by ID | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQeoV4Otk::wMu5IUP-RsaitmgVi-4c2w` |
| Mark an Inventory Transfer as Ready to Ship | POST | `/admin/api/2026-04/graphql.json` | `conn_mod_def::GKbQHtHtmHw::EdeVlIVSSGWztW3OQulWCg` |

2 more InventoryTransfer actions are available through search.

This lists 90 of 796 actions. For anything not here, call `search_one_platform_actions` with platform `shopify-admin`. The full catalog is at https://www.withone.ai/knowledge/shopify-admin.

## When a call fails

The error comes from Shopify Admin, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/shopify-admin

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
