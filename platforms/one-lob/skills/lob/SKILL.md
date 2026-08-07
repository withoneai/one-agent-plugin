---
name: lob
description: Lob is a direct-mail and address-verification platform that programmatically sends postcards, letters, checks, and self-mailers, manages address books and bank accounts, and verifies US and international addresses, used to automate physical mail campaigns and address quality at scale. Read and write Lob data through One: uploads, bankaccounts, buckslips, cards, templateversions, templates and more, 79 actions with real parameter documentation. Use whenever the user asks to look something up in Lob, create or update a record there, or build code against the Lob API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: lob
  generated-from: one-knowledge-base
---

# Lob through One

Lob is a direct-mail and address-verification platform that programmatically sends postcards, letters, checks, and self-mailers, manages address books and bank accounts, and verifies US and international addresses, used to automate physical mail campaigns and address quality at scale.

One exposes Lob through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `lob` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Lob is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Lob account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Uploads

| Action | Method | Path | Action id |
|---|---|---|---|
| List Uploads | GET | `/uploads` | `conn_mod_def::GK8OPSK9z7A::kKeAwkSfTG6OAsAGotF9KQ` |
| Retrieve an Upload | GET | `/v1/uploads/{{uplId}}` | `conn_mod_def::GK8OPTRdIiA::fwUA3VE2SIiz5OSbJyal7A` |
| Create an Upload | POST | `/uploads` | `conn_mod_def::GK8OPJk31Tg::02nx9mkaQ9SIa2a003zZrg` |
| Delete an Upload | DELETE | `/v1/uploads/{{uplId}}` | `conn_mod_def::GK8OPGklKWg::OS7mLsB_QZ2FbYd52Yt7oQ` |
| Update an Upload | PATCH | `/v1/uploads/{{uplId}}` | `conn_mod_def::GK8OPSwL3GA::BajrmEsBQFCio4S-bPGXmg` |
| Upload a File for an Upload | POST | `/v1/uploads/{{uplId}}/file` | `conn_mod_def::GK8OPXyQm6g::AtmhfkI3RFSOJBT69PYOeQ` |

### BankAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bank Accounts | GET | `/v1/bank_accounts` | `conn_mod_def::GK8OMKJKWeA::rrnrDK75QZu-1Vl0G4MlFw` |
| Retrieve a Bank Account | GET | `/v1/bank_accounts/{{bankId}}` | `conn_mod_def::GK8OMI3PEKA::kzVU3qYKSOy4IUgLUL2xLg` |
| Create a Bank Account | POST | `/bank_accounts` | `conn_mod_def::GK8OL9kdW_g::NKhAs2FLTY2VjppjQze_4w` |
| Delete a Bank Account | DELETE | `/v1/bank_accounts/{{bankId}}` | `conn_mod_def::GK8OMJRmRmg::M6GVBDgMTky1QfdxI590qg` |
| Verify a Bank Account | POST | `/v1/bank_accounts/{{bankId}}/verify` | `conn_mod_def::GK8OMJzU3BA::yCXbZTYTR6SGbUaAqVYn4A` |

### Buckslips

| Action | Method | Path | Action id |
|---|---|---|---|
| List Buckslips | GET | `/buckslips` | `conn_mod_def::GK8OMzv6ACA::rOVBERfWSDaOTmWBXbrltg` |
| Retrieve a Buckslip | GET | `/v1/buckslips/{{buckslipId}}` | `conn_mod_def::GK8OMwH7OrA::B6Rf8zU-RxeU5pgxoGjFeg` |
| Create a Buckslip | POST | `/v1/buckslips` | `conn_mod_def::GK8OM0GJ2Ag::Y5QnmrCiQYaAfQXXqU7Q3Q` |
| Delete a Buckslip | DELETE | `/v1/buckslips/{{buckslipId}}` | `conn_mod_def::GK8OMwJBexA::DLlK6n4iSoWtI0dorjc8oA` |
| Update a Buckslip | PATCH | `/v1/buckslips/{{buckslipId}}` | `conn_mod_def::GK8OMwu4ozA::CPpA8USCTaST9RXtA_454A` |

### Cards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Cards | GET | `/v1/cards` | `conn_mod_def::GK8ONXmP88A::OVezDUS1RqOvBUsF3vGQbA` |
| Retrieve a Card | GET | `/v1/cards/{{cardId}}` | `conn_mod_def::GK8ONMtHHZg::pdlAzRxOQxWXigJxnmZMSw` |
| Create a Card | POST | `/v1/cards` | `conn_mod_def::GK8ONMSNb5g::FE8l2sPxSX23gv-iYE_qMA` |
| Delete a Card | DELETE | `/v1/cards/{{cardId}}` | `conn_mod_def::GK8ONMaTUbg::tyaCSWRITgqFoTdKz1k3Hw` |
| Update a Card | POST | `/v1/cards/{{cardId}}` | `conn_mod_def::GK8ONX5SOqg::8TY8IxLUT3WCZq83htKqdQ` |

### TemplateVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Template's Versions | GET | `/v1/templates/{{tmplId}}/versions` | `conn_mod_def::GK8OO-FGkag::L72iGCHtTMGw4Cxnftwujw` |
| Retrieve a Template Version for a Template | GET | `/v1/templates/{{tmplId}}/versions/{{vrsnId}}` | `conn_mod_def::GK8OOfFqDDg::X5zq5FgyRre6FjmeS1sFPA` |
| Create a Template Version for a Template | POST | `/v1/templates/{{tmplId}}/versions` | `conn_mod_def::GK8OOfV9cZg::bchfyZsrRlW4jI6Eo_P39A` |
| Delete a Template Version | DELETE | `/v1/templates/{{tmplId}}/versions/{{vrsnId}}` | `conn_mod_def::GK8OOecTytA::vOEg8oqMTcC5twC0DSDa4A` |
| Update a Template Version | POST | `/v1/templates/{{tmplId}}/versions/{{vrsnId}}` | `conn_mod_def::GK8OO-GXTaA::8ppO4oTQS1S0WnNozT0kGw` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Templates | GET | `/v1/templates` | `conn_mod_def::GK8OPIi1PWg::nUjiY6SaQliWlhllbDFS1g` |
| Retrieve a Template | GET | `/v1/templates/{{tmplId}}` | `conn_mod_def::GK8OO-WGccA::GEpKumJzSYGcVi76_6dfjw` |
| Create a Template | POST | `/templates` | `conn_mod_def::GK8OO9eDi6g::m-ZQnGEISoyM3zl4sRWXtg` |
| Delete a Template | DELETE | `/v1/templates/{{tmplId}}` | `conn_mod_def::GK8OO87L5uA::OoOmSsUdQhi-TBWv3Rw8fg` |
| Update a Template | POST | `/v1/templates/{{tmplId}}` | `conn_mod_def::GK8OPGorz7A::0CaIIG55QlGLGYkMv5xqSQ` |

### Postcards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Postcards | GET | `/v1/postcards` | `conn_mod_def::GK8OONDEifA::MbUkA_HHSIGOQc-P0x3Dsg` |
| Retrieve a Postcard | GET | `/v1/postcards/{{pscId}}` | `conn_mod_def::GK8OOKiIaeg::7xHSG2RHRf6jrPEhp8CXGg` |
| Cancel a Postcard | DELETE | `/v1/postcards/{{pscId}}` | `conn_mod_def::GK8ON_pMxqg::G_zo8Vw_SeGBheqHaw2vXQ` |
| Create a Postcard | POST | `/postcards` | `conn_mod_def::GK8ON_pYW4A::6_VTT3nyTpyjhNDZRu8nbg` |

### SelfMailers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Self Mailers | GET | `/self_mailers` | `conn_mod_def::GK8OO0MmVEA::-yUxlas9Tdi_kvm_Mq9dtg` |
| Retrieve a Self Mailer | GET | `/v1/self_mailers/{{sfmId}}` | `conn_mod_def::GK8OOeSk9YA::MOV2cVM-RsWOzVvTiXH_Pw` |
| Create a Self Mailer | POST | `/v1/self_mailers` | `conn_mod_def::GK8OOLtleDA::haANEd7rSkGtzLjIQHg5Kg` |
| Delete a Self Mailer | DELETE | `/v1/self_mailers/{{sfmId}}` | `conn_mod_def::GK8OOVmz5dA::RiUm7YVaTrq_rkK4MzaqHA` |

### Letters

| Action | Method | Path | Action id |
|---|---|---|---|
| List Letters | GET | `/v1/letters` | `conn_mod_def::GK8OOBVWEjg::JJimOkmVQ2CYoIaImsCC0w` |
| Retrieve a Letter | GET | `/v1/letters/{{ltrId}}` | `conn_mod_def::GK8ON_qLE-A::DPzOdpG6QjqeFjfc7dPkTA` |
| Cancel a Letter | DELETE | `/v1/letters/{{ltrId}}` | `conn_mod_def::GK8ONwKqt8A::jLpuR0TMTm2qBNed8nmFhQ` |
| Create a Letter | POST | `/v1/letters` | `conn_mod_def::GK8OOA6TxTA::tFTv8mTtRZGuj6PjNmhzyA` |

### Addresses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Addresses | GET | `/v1/addresses` | `conn_mod_def::GK8OL_O7xEA::mAL-q5FbQKufFjaNnGMhEA` |
| Retrieve an Address | GET | `/v1/addresses/{{adrId}}` | `conn_mod_def::GK8OL9gJvWA::WUN6n9DuQr6X7UmuHi8blg` |
| Create an Address | POST | `/v1/addresses` | `conn_mod_def::GK8OMAGwbdA::YjT3oLQHRA-lNVUNxyOkbg` |
| Delete an Address | DELETE | `/v1/addresses/{{adrId}}` | `conn_mod_def::GK8OL8LmSVg::e-O7TVDgRvCg-bbMN6tNDg` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Campaigns | GET | `/v1/campaigns` | `conn_mod_def::GK8OM_GyrRg::ceXhHCo6RdW4cHl-nM7uQg` |
| Create a Campaign | POST | `/v1/campaigns` | `conn_mod_def::GK8OND70xIA::mv-f__KzSE2X9tJPLlsnRA` |
| Delete a Campaign | DELETE | `/v1/campaigns/{{cmpId}}` | `conn_mod_def::GK8OM9NP7bg::uhn1gy3GQEewmqResE_Qmg` |
| Update a Campaign | PATCH | `/v1/campaigns/{{cmpId}}` | `conn_mod_def::GK8OM-NXJ4A::VGHMiXCRRSOAJWfTdsXD0w` |

### Checks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Checks | GET | `/v1/checks` | `conn_mod_def::GK8ONnQ12IA::wCtECyXfRQaCB-HPDeG-0w` |
| Retrieve a Check | GET | `/v1/checks/{{chkId}}` | `conn_mod_def::GK8ONXkcaaA::hOAXFToWTQ67tt7G1DaBnQ` |
| Cancel a Check | DELETE | `/v1/checks/{{chkId}}` | `conn_mod_def::GK8ONXCXUkA::oqpfGPmMQXmgOmWp3k1mEQ` |
| Create a Check | POST | `/checks` | `conn_mod_def::GK8ONbLRqsA::WhHXWOfsQlKEkGS1_MOzbg` |

### Creatives

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Creative | GET | `/v1/creatives/{{crvId}}` | `conn_mod_def::GK8ONkzBs8g::vUx5ywsAQ_i_TjOmd71fmQ` |
| Create a Creative | POST | `/creatives` | `conn_mod_def::GK8ONkkG2mA::L562BQmBSgiEIpT2rnqPog` |
| Update a Creative | PATCH | `/v1/creatives/{{crvId}}` | `conn_mod_def::GK8ONkxwLLA::UFfsLgWtSXCnFdyokY2qTw` |

### UploadExports

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Upload Export | GET | `/v1/uploads/{{uplId}}/exports/{{exId}}` | `conn_mod_def::GK8OPVTBCLA::8W4YkmB3TYaXTUkoR7T6BQ` |
| Create an Export for an Upload | POST | `/v1/uploads/{{uplId}}/exports` | `conn_mod_def::GK8OPJS2wbg::rZjkLoyxQKacAUK4K4p7rw` |

### BillingGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Billing Groups | GET | `/v1/billing_groups` | `conn_mod_def::GK8OMVYyF2g::TtvYoJAISnesIIguDgzS6w` |
| Create a Billing Group | POST | `/v1/billing_groups` | `conn_mod_def::GK8OMJApNRA::uUQ7y7dFSRe2Btk8c4ma5w` |

### BillingGroup

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Billing Group | GET | `/v1/billing_groups/{{bgId}}` | `conn_mod_def::GK8OMS-4LUg::kJFct4CwS_mds8gwuKaSoA` |
| Update a Billing Group | POST | `/v1/billing_groups/{{bgId}}` | `conn_mod_def::GK8OMXXpXpA::Qa4NCRdQRuym0NZLSZ3AKw` |

### CardOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Card's Orders | GET | `/v1/cards/{{cardId}}/orders` | `conn_mod_def::GK8ONOK5ITg::G7fgpvf4QdiI8wbTQerUUw` |
| Create a Card Order for a Card | POST | `/v1/cards/{{cardId}}/orders` | `conn_mod_def::GK8ONND_WVg::yNtk39HqRpultNasUDJxjA` |

### UsReverseGeocodeLookups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a US Reverse Geocode Lookup | POST | `/v1/us_reverse_geocode_lookups` | `conn_mod_def::GK8OOKz-8jA::MpMLwaFRQkyfBv0WUzZUKA` |

### UsAutocompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete US Addresses | POST | `/v1/us_autocompletions` | `conn_mod_def::GK8OPgkHi_A::MGWHcme0QomAQEFUZ7Jrcg` |

### UsZipLookups

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup a US ZIP Code | POST | `/v1/us_zip_lookups` | `conn_mod_def::GK8OPgqGkqA::BZl1EpbkRMSx4Cdy_CQlMA` |

### BulkUsVerifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Bulk US Addresses | POST | `/bulk/us_verifications` | `conn_mod_def::GK8OPgzPTgg::9Cxi7ocsSreWqU89tIa0rQ` |

### UsVerifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify a US Address | POST | `/v1/us_verifications` | `conn_mod_def::GK8OPhy4WUA::xS9hCvBYTVCB5FxlvM4qcw` |

### BuckslipsOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Buckslip's Orders | GET | `/v1/buckslips/{{buckslipId}}/orders` | `conn_mod_def::GK8OMVB3nXA::RlFE3ESxT4m6_Mc5Sc-yig` |

### BuckslipOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Buckslip Order | POST | `/v1/buckslips/{{buckslipId}}/orders` | `conn_mod_def::GK8OMm5N1wA::ZnmU8FPbSZOipz49jW-V2Q` |

### Campaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Campaign | GET | `/v1/campaigns/{{cmpId}}` | `conn_mod_def::GK8ONBwso3g::rv9AfVF-SmmNAQEDy63Z_A` |

### SharedDontCall

| Action | Method | Path | Action id |
|---|---|---|---|
| Placeholder | GET | `/v1/shared_dont_call` | `conn_mod_def::GK8ONmQQKdg::cC8hLtFpSVCJso4noqi03w` |

### IdentityValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Identity Against an Address | POST | `/v1/identity_validation` | `conn_mod_def::GK8ONwq2Tag::ki5jLvrgTXqzCXlJb87Aqw` |

### BulkIntlVerifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Bulk International Addresses | POST | `/bulk/intl_verifications` | `conn_mod_def::GK8ONw4Mbeg::CDZdz0lET3iKTwKkDHiecw` |

### IntlAutocompletion

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete International Addresses | POST | `/intl_autocompletions` | `conn_mod_def::GK8ONzW-FLg::jEjoOKEMTn-Yji8Hz1P-SA` |

### IntlVerifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify an International Address | POST | `/intl_verifications` | `conn_mod_def::GK8ON0-yjRg::1sxJRrJKSSWU0yki2aEO3g` |

## When a call fails

The error comes from Lob, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/lob

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
