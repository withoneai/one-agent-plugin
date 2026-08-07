---
name: retailed-inventory
description: Retailed Inventory appears to be a web-based inventory application accessible through a dashboard, but the provided website content does not describe its specific features, integrations, or target users, so only a general characterization can be made from the available information. Read and write Retailed Inventory data through One: companies, products, sales, contacts, companysuggestions, productmarketdata and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in Retailed Inventory, create or update a record there, or build code against the Retailed Inventory API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: retailed-inventory
  generated-from: one-knowledge-base
---

# Retailed Inventory through One

Retailed Inventory appears to be a web-based inventory application accessible through a dashboard, but the provided website content does not describe its specific features, integrations, or target users, so only a general characterization can be made from the available information.

One exposes Retailed Inventory through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `retailed-inventory` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Retailed Inventory is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Retailed Inventory account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company by Domain | GET | `/api/v1/companies/{{domain}}` | `conn_mod_def::GMP7l4Y-xxg::jNrWOCBJSH2OKdHjbOSb9Q` |
| List Companies | GET | `/api/v1/companies` | `conn_mod_def::GMP7l8QJ7jg::_YSkYMT3T9ScbtZTfgXzKw` |
| Search Company by Domain | GET | `/api/v1/companies/search/domain` | `conn_mod_def::GMP7l6KsYYA::ZA9qZByOTA666Y9P4IwS3A` |
| Create Companies | POST | `/api/v1/companies` | `conn_mod_def::GMP7l3sweIA::zhyBFIbLRUCg8XriD4pguQ` |
| Update a Company | PUT | `/api/v1/companies/{{domain}}` | `conn_mod_def::GMP7mDDrW-A::SAy8GhFLQDGYzowwrlFNVg` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product by ID | GET | `/api/v1/products/{{id}}` | `conn_mod_def::GMP7mMID3BA::doLC1WcEREmfkZnZ3rSjWQ` |
| List Products | GET | `/api/v1/products` | `conn_mod_def::GMP7mM_hlog::ARJAcsKNQ-O1uzBrRvfWYw` |
| Create Products | POST | `/api/v1/products` | `conn_mod_def::GMP7mLbFZVg::g5fN4tfFQJ-wQZXBIR6P4Q` |
| Update a Product | PUT | `/api/v1/products/{{id}}` | `conn_mod_def::GMP7mTfY9bA::ZVT17qFqTgGOUy6Nyp004g` |
| Update Product Statuses | PUT | `/api/v1/products` | `conn_mod_def::GMP7mUFqKcg::lX4og4wfTC-kXgPkThxc4g` |

### Sales

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sale by ID | GET | `/api/v1/sales/{{id}}` | `conn_mod_def::GMP7md8ZA9g::0gbvqk8gQfSDKKFnGgu0pg` |
| List Sales | GET | `/api/v1/sales` | `conn_mod_def::GMP7mfbxzBA::p26J_ZekT6u5t4x0Esl01A` |
| Create Sales | POST | `/api/v1/sales` | `conn_mod_def::GMP7mUT56_A::zI_NmGs2SZae89eEvWxQPQ` |
| Update a Sale | PUT | `/api/v1/sales/{{id}}` | `conn_mod_def::GMP7mi_b3ZA::KTQuxwABSGuwSFIiy5Y75g` |
| Update Status of Multiple Sales | PUT | `/api/v1/sales` | `conn_mod_def::GMP7mdnOkZA::tXAJsyPmT0SHLV2WHjN8Ew` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact by ID | GET | `/api/v1/contacts/{{id}}` | `conn_mod_def::GMP7mE8UbaA::umUiKfwhQhyov24j780X6Q` |
| List Contacts | GET | `/api/v1/contacts` | `conn_mod_def::GMP7mERJTkA::kp-h6853QpGbLn8glRh9TA` |
| Create a Contact | POST | `/api/v1/contacts` | `conn_mod_def::GMP7mEXIRVA::U6L7k-EIRHiX8ZhDwGxxVg` |
| Update a Contact | PUT | `/api/v1/contacts/{{id}}` | `conn_mod_def::GMP7mC_3HIg::lLFpwuh2SluYGXv6KbagcA` |

### CompanySuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Suggestions | GET | `/api/v1/companies/suggest` | `conn_mod_def::GMP7l7lYt6g::BJwpdwJYTs2Ziagf2IAoEA` |

### ProductMarketData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Product Market Data | GET | `/api/v1/products/market/{{id}}` | `conn_mod_def::GMP7mLE0vmg::blCmWUalTMee5e2vEiEUkA` |

### ProductBrands

| Action | Method | Path | Action id |
|---|---|---|---|
| List Product Brands | GET | `/api/v1/products/brands` | `conn_mod_def::GMP7mLFLgog::2msrCEhAQBeFxZ0uPbECpg` |

### ProductSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Product Suggestions | GET | `/api/v1/products/suggest` | `conn_mod_def::GMP7mVWnxfg::ndUURZgARs6LLse5tNXT5g` |

### MarketPrices

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Market Prices | POST | `/api/v1/products/market/update` | `conn_mod_def::GMP7mXJoI-A::GyTcORg6SfykMSu4E7z_Vg` |

### ProductsAvailableForSale

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Products Available for Sale | GET | `/api/v1/sales/inventory` | `conn_mod_def::GMP7mfO5VZA::LZ5mOUbgTuK29i0PIfCNKQ` |

## When a call fails

The error comes from Retailed Inventory, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/retailed-inventory

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
