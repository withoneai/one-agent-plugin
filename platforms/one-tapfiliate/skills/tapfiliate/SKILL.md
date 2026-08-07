---
name: tapfiliate
description: Tapfiliate is an affiliate program management platform. Launch, track, and manage affiliate programs — manage affiliates, programs, conversions, customers, commissions, payments, and click attribution via REST API. Read and write Tapfiliate data through One: affiliates, customers, conversions, commissions, payments, affiliateprospects and more, 78 actions with real parameter documentation. Use whenever the user asks to look something up in Tapfiliate, create or update a record there, or build code against the Tapfiliate API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: tapfiliate
  generated-from: one-knowledge-base
---

# Tapfiliate through One

Tapfiliate is an affiliate program management platform. Launch, track, and manage affiliate programs — manage affiliates, programs, conversions, customers, commissions, payments, and click attribution via REST API.

One exposes Tapfiliate through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `tapfiliate` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Tapfiliate is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Tapfiliate account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Affiliates

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Affiliates | GET | `/1.6/affiliates` | `conn_mod_def::GLtXnf6kRsA::9CvCP-6eRAqmnHopcxWIFQ` |
| List All Affiliates in a Program | GET | `/1.6/programs/{{programId}}/affiliates` | `conn_mod_def::GLtXo6DpOUA::lvT9DY1NTH6670Aom22Iwg` |
| Retrieve an Affiliate | GET | `/1.6/affiliates/{{affiliateId}}/` | `conn_mod_def::GLtXnlVTvmA::g1nCLhVUQ82F3sml01xO1Q` |
| Retrieve an Affiliate in a Program | GET | `/1.6/programs/{{programId}}/affiliates/{{affiliateId}}/` | `conn_mod_def::GLtXpSarf4g::1Re8Ac5nQcmwc48ToI5H9g` |
| Add an Affiliate to a Program | POST | `/1.6/programs/{{programId}}/affiliates/` | `conn_mod_def::GLtXo0AzcRA::4B0jOqViSmC2iVrHISWp7A` |
| Approve an Affiliate for a Program | PUT | `/1.6/programs/{{programId}}/affiliates/{{affiliateId}}/approved/` | `conn_mod_def::GLtXozNuNzA::NdpxGqa5QSeWW9cohWDCcw` |
| Create an Affiliate | POST | `/1.6/affiliates/` | `conn_mod_def::GLtXmoHiSVA::e_DW2GKUQ5WJ-mztgY9vEA` |
| Delete an Affiliate | DELETE | `/1.6/affiliates/{{affiliateId}}/` | `conn_mod_def::GLtXmqiM3Hg::TvT0ac-wSaWEZNTuyT5fGw` |
| Remove Affiliate Group for an Affiliate | DELETE | `/1.6/affiliates/{{affiliateId}}/group/` | `conn_mod_def::GLtXnHfyAvg::iUDtSCcpRqyDPYvhIzVP5g` |
| Remove Parent for an Affiliate | DELETE | `/1.6/affiliates/{{childAffiliateId}}/parent` | `conn_mod_def::GLtXnlr8eWA::abVMWs_JSFy8ZIDhN5Yz2w` |
| Set Affiliate Group for an Affiliate | PUT | `/1.6/affiliates/{{affiliateId}}/group/` | `conn_mod_def::GLtXnsa04-A::VzfTqw4RRWOmhHgifJA54w` |
| Set Parent for an Affiliate | POST | `/1.6/affiliates/{{childAffiliateId}}/parent/` | `conn_mod_def::GLtXntJh52A::dcyYyrsgSnaHgVRgdQlcig` |

3 more Affiliates actions are available through search.

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Customers | GET | `/1.6/customers` | `conn_mod_def::GLtXoYiybQg::xln-FkAjRv6kUTi9CvFmUA` |
| Retrieve a Customer | GET | `/1.6/customers/{{id}}/` | `conn_mod_def::GLtXoeoz_TA::F1GSl56vQJCVlV60dpYUfg` |
| Retrieve Meta Data by Key for a Customer | GET | `/1.6/customers/{{id}}/meta-data/{{key}}/` | `conn_mod_def::GLtXofeniBA::Dh-cCrpITqGiyucEFfKoHg` |
| Retrieve Meta Data for a Customer | GET | `/1.6/customers/{{id}}/meta-data/` | `conn_mod_def::GLtXoe4ikMg::Rg6T7CvPQrCf77-pHi-QbQ` |
| Cancel Using Customers Status | DELETE | `/1.6/customers/{{id}}/status/` | `conn_mod_def::GLtXoZS2K6g::M2-eCHojSrSkvkr9yt9Lig` |
| Create a Customer | POST | `/1.6/customers` | `conn_mod_def::GLtXoYjeemA::Sc_rIYxWTSqsEw42z1yL-w` |
| Delete a Customer | DELETE | `/1.6/customers/{{id}}/` | `conn_mod_def::GLtXoYKEXTg::jKJsZENySQyCVXgn5ZDfag` |
| Delete Meta Data by Key for a Customer | DELETE | `/1.6/customers/{{id}}/meta-data/{{key}}/` | `conn_mod_def::GLtXoYigQLA::4p6VC5eeQrGRwtLxGfYwXg` |
| Set Meta Data by Key for a Customer | PUT | `/1.6/customers/{{id}}/meta-data/{{key}}/` | `conn_mod_def::GLtXonmnh8A::yx4Q412zRO6DePos8P3o0w` |
| Uncancel a Customer | PUT | `/1.6/customers/{{id}}/status/` | `conn_mod_def::GLtXofeZxKA::6FxMmN0KSsywhaYq4rAiug` |
| Update a Customer | PATCH | `/1.6/customers/{{id}}/` | `conn_mod_def::GLtXos0xOgg::a4uCyLpUSVa21HoQhFDBJw` |
| Update Meta Data for a Customer | PUT | `/1.6/customers/{{id}}/meta-data/` | `conn_mod_def::GLtXotWYjFA::5ta4q5rxQz-hE0nSu100GA` |

### Conversions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Conversions | GET | `/1.6/conversions` | `conn_mod_def::GLtXoGfNypg::e8rybeq6RvS60srw4e3_Bg` |
| Retrieve a Conversion | GET | `/1.6/conversions/{{conversionId}}/` | `conn_mod_def::GLtXoDlbm-A::dfB2jPsjTvmQaz4v8jSFxw` |
| Retrieve Conversion Meta Data by Key | GET | `/1.6/conversions/{{conversionId}}/meta-data/{{key}}/` | `conn_mod_def::GLtXoNC-z-g::s-f1ka3_Rvu3GFWQdAyKWA` |
| Retrieve Meta Data for a Conversion | GET | `/1.6/conversions/{{conversionId}}/meta-data/` | `conn_mod_def::GLtXoL2szvA::vGtetTQGQwaHwS8pYJ5j3g` |
| Create a Conversion | POST | `/1.6/conversions` | `conn_mod_def::GLtXoE2kNJA::thFZ5M_8TF-871BgWuuk5A` |
| Delete a Conversion | DELETE | `/1.6/conversions/{{conversionId}}/` | `conn_mod_def::GLtXoD8D1fg::v5QL5zocRFu2X9O9u0EKOw` |
| Delete Meta Data by Key for a Conversion | DELETE | `/1.6/conversions/{{conversionId}}/meta-data/{{key}}/` | `conn_mod_def::GLtXoDkoiag::EUwnNQCpQ3-a9HjVqwou1A` |
| Set Meta Data by Key for a Conversion | PUT | `/1.6/conversions/{{conversionId}}/meta-data/{{key}}/` | `conn_mod_def::GLtXoM4ItIA::mlXemWNHS4uuC95aZvrfRw` |
| Update a Conversion | PATCH | `/1.6/conversions/{{conversionId}}` | `conn_mod_def::GLtXoOPt_aA::x1_Ufy2sSc6xXTSOESdjuA` |
| Update Meta Data for a Conversion | PUT | `/1.6/conversions/{{conversionId}}/meta-data/` | `conn_mod_def::GLtXoM4LixA::PSfCVFBPRb-3GFH4nGGQxQ` |

### Commissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Commissions | GET | `/1.6/commissions` | `conn_mod_def::GLtXn8nFDNA::E3KQWVcvQfqKBEa85TXGfw` |
| Retrieve a Commission | GET | `/1.6/commissions/{{commissionId}}/` | `conn_mod_def::GLtXn76e-Eg::8_CaJn9iSri98Q4QugA1rg` |
| Add Commissions to a Conversion | POST | `/1.6/conversions/{{conversionId}}/commissions/` | `conn_mod_def::GLtXn8khYmA::HlVuVDYjQf6EFQTdmVAB6A` |
| Approve a Commission | PUT | `/1.6/commissions/{{commissionId}}/approved/` | `conn_mod_def::GLtXn1u6Gxg::9pg_SaiQTyKVntMApCxb6Q` |
| Disapprove a Commission | DELETE | `/1.6/commissions/{{commissionId}}/approved/` | `conn_mod_def::GLtXn7-BScg::o6-8h8WRRQqzDEJb928K_A` |
| Update a Commission | PATCH | `/1.6/commissions/{{commissionId}}/` | `conn_mod_def::GLtXn9QUFpA::A6p9yWuuQhKniUQX5o2xQg` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Payments | GET | `/1.6/payments` | `conn_mod_def::GLtXo0AjHWA::RA7ZTBkUQciNqq8fDQCs0Q` |
| List an Affiliate's Payments | GET | `/1.6/affiliates/{{affiliateId}}/payments/` | `conn_mod_def::GLtXnIWej5g::bTQGHjzoRl2WPIwsNHeyMg` |
| Retrieve Payment | GET | `/1.6/payments/{{id}}/` | `conn_mod_def::GLtXo0AXdQA::AYDkFUARSdqoIlBfkLU-MA` |
| Cancel Payment | DELETE | `/1.6/payments/{{id}}/` | `conn_mod_def::GLtXotwS09g::8KyFWGuKQCKga11jzp0t8A` |
| Create a Payment | POST | `/1.6/payments/` | `conn_mod_def::GLtXotbuPPg::DSMH5DH6TOe3UeESl9BYpg` |

### AffiliateProspects

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Affiliate Prospects | GET | `/1.6/affiliate-prospects` | `conn_mod_def::GLtXmpUhs0g::DKSw4wvKQNCCzDUSjb7hqQ` |
| Retrieve an Affiliate Prospect | GET | `/1.6/affiliate-prospects/{{affiliateProspectId}}/` | `conn_mod_def::GLtXmpgZokA::5CyG8SDxTma_1EQkRVZJHw` |
| Create an Affiliate Prospect | POST | `/1.6/affiliate-prospects/` | `conn_mod_def::GLtXmiQuDQg::B1Jo9iwsSrS-8zlVe0YClA` |
| Delete an Affiliate Prospect | DELETE | `/1.6/affiliate-prospects/{{affiliateProspectId}}/` | `conn_mod_def::GLtXmgWXpwA::Ptst1RWDS5y6txa6IIbhJg` |

### AffiliateNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Affiliate's Notes | GET | `/1.6/affiliates/{{affiliateId}}/notes` | `conn_mod_def::GLtXnHvkfpA::0D61gel5SzywKUhY2l8jIQ` |
| Create Note for an Affiliate | POST | `/1.6/affiliates/{{affiliateId}}/notes/` | `conn_mod_def::GLtXmqP52yA::uz1mIbPqQUK4dgd-3qXweQ` |
| Delete Note for an Affiliate | DELETE | `/1.6/affiliates/{{affiliateId}}/notes/{{id}}/` | `conn_mod_def::GLtXmwjiKXA::zhqItQ9OTlWL_37FlWsNZA` |
| Update Note for an Affiliate | PUT | `/1.6/affiliates/{{affiliateId}}/notes/{{id}}/` | `conn_mod_def::GLtXn2L9CdA::Jc-nmB_7RTKlEC05uyAL8w` |

### AffiliateMetaData

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Meta Data by Key for an Affiliate | GET | `/1.6/affiliates/{{affiliateId}}/meta-data/{{key}}/` | `conn_mod_def::GLtXnms9m2A::Ez-0GDwfS863JdOSal7OdQ` |
| Retrieve Meta Data for an Affiliate | GET | `/1.6/affiliates/{{affiliateId}}/meta-data/` | `conn_mod_def::GLtXnl43AyA::J6Y5eCv5QOCtXWugoNbxEg` |
| Delete Meta Data by Key for an Affiliate | DELETE | `/1.6/affiliates/{{affiliateId}}/meta-data/{{key}}/` | `conn_mod_def::GLtXmwjy2uA::5b5FcQGRQ_2wSmYEdFzonA` |
| Set Meta Data by Key for an Affiliate | PUT | `/1.6/affiliates/{{affiliateId}}/meta-data/{{key}}/` | `conn_mod_def::GLtXnr8Zwwg::Pfd0mNc4T2KVIvg7MPctzg` |

### AffiliateGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Affiliate Groups | GET | `/1.6/affiliate-groups` | `conn_mod_def::GLtXmhKmuyA::mEyaNH5zRmi5KJmqXBhcAA` |
| Create New Affiliate Group | POST | `/1.6/affiliate-groups` | `conn_mod_def::GLtXmfZ1pOg::PcEGE4QHR_a-3zhO29bTfg` |
| Update Affiliate Group | PATCH | `/1.6/affiliate-groups/{{affiliateGroupId}}/` | `conn_mod_def::GLtXmhKcJDA::wYMs0qdqRlG5_ml1Y9Mg2w` |

### Programs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Programs for an Affiliate | GET | `/1.6/affiliates/{{id}}/programs/` | `conn_mod_def::GLtXnA3uttA::_7kV-QitSh6bewI3FTOTMg` |
| List All Programs | GET | `/1.6/programs` | `conn_mod_def::GLtXo5F0UIA::KeRMtOZhQAKTcVzzk4xoyQ` |
| Retrieve a Program | GET | `/1.6/programs/{{programId}}/` | `conn_mod_def::GLtXpOWEb7A::hBKqryTxRYSsUKCFdYR9lg` |

### Clicks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Detailed Information About Click | GET | `/1.6/clicks/{{id}}/` | `conn_mod_def::GLtXn0vgI0A::A707YPRjTnC3RxnQwDw5RA` |
| List All Clicks | GET | `/1.6/clicks` | `conn_mod_def::GLtXn1kBuag::swtfzU2HS7a02PpfNWz7yw` |
| Create a Click | POST | `/1.6/clicks/` | `conn_mod_def::GLtXn1OxqeA::N6wKzXMkTHqkKNrTwDw-jg` |

### PayoutMethods

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Affiliate's Payout Method | GET | `/1.6/affiliates/{{affiliateId}}/payout-methods/{{payoutMethodId}}/` | `conn_mod_def::GLtXmzAmMcA::lmAy7FM7RgKE8N85X6HOXA` |
| List Payout Methods for an Affiliate | GET | `/1.6/affiliates/{{affiliateId}}/payout-methods/` | `conn_mod_def::GLtXnKBOj8g::-46Z-hAsRYyxv7jQ_gfXcg` |

### AffiliatesCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Fields for Affiliates | GET | `/1.6/affiliates/custom-fields` | `conn_mod_def::GLtXmyu6X6g::xFjZ-C52SSaQ5XyHzWZMCA` |

### AffiliateBalances

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Affiliate's Balances | GET | `/1.6/affiliates/{{affiliateId}}/balances` | `conn_mod_def::GLtXnljT9_g::2n_jfs1ITP-G0z2ja6Fntg` |

### Balances

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Balances | GET | `/1.6/balances` | `conn_mod_def::GLtXos1mraA::QCuW07bpSKuVT-9lYxzTqA` |

### ProgramAffiliates

| Action | Method | Path | Action id |
|---|---|---|---|
| Disapprove an Affiliate for a Program | DELETE | `/1.6/programs/{{programId}}/affiliates/{{affiliateId}}/approved/` | `conn_mod_def::GLtXo0Akq9A::pytTbAYbQE6A_czs0uSc_g` |

### ProgramMlmLevels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Program MLM Levels | GET | `/1.6/programs/{{programId}}/levels/` | `conn_mod_def::GLtXo5dGShg::0ynGeg61Sly_VCi73a9vSg` |

### ProgramCommissionTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Program Commission Types | GET | `/1.6/programs/{{programId}}/commission-types/` | `conn_mod_def::GLtXo7C_DoA::kzlMGx8fTP6vnARdx67xNg` |

### ProgramBonuses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Program Bonuses | GET | `/1.6/programs/{{programId}}/bonuses/` | `conn_mod_def::GLtXpIR1LUA::hBfQ31W5RDSfRziypF9qZg` |

This lists 75 of 78 actions. For anything not here, call `search_one_platform_actions` with platform `tapfiliate`. The full catalog is at https://www.withone.ai/knowledge/tapfiliate.

## When a call fails

The error comes from Tapfiliate, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/tapfiliate

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
