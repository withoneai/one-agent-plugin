---
name: plisio
description: Plisio is a cryptocurrency payment platform that provides APIs, payment links, and plugins for accepting digital asset payments, enabling online businesses and developers to integrate crypto checkout, automate invoicing, and manage transactions across multiple cryptocurrencies. Read and write Plisio data through One: operations, invoices, exchanges, currencies, balances, supportedexchangecurrencies and more, 21 actions with real parameter documentation. Use whenever the user asks to look something up in Plisio, create or update a record there, or build code against the Plisio API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: plisio
  generated-from: one-knowledge-base
---

# Plisio through One

Plisio is a cryptocurrency payment platform that provides APIs, payment links, and plugins for accepting digital asset payments, enabling online businesses and developers to integrate crypto checkout, automate invoicing, and manage transactions across multiple cryptocurrencies.

One exposes Plisio through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `plisio` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Plisio is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Plisio account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Operations

| Action | Method | Path | Action id |
|---|---|---|---|
| Estimate Commission for a Cryptocurrency | GET | `/api/v1/operations/commission/{{psysCid}}` | `conn_mod_def::GLupuWQ6LU0::-vwbeX6TQhKydyojhjhnig` |
| Estimate Fee | GET | `/api/v1/operations/fee/{{psysCid}}` | `conn_mod_def::GLupuVsOOEs::aqAASocPTM6sMG_Exd4fdw` |
| List User Transactions | GET | `/api/v1/operations` | `conn_mod_def::GLupuYeevjM::lV8Jh6RFTA-bkByJNcG8YA` |
| Transaction Details | GET | `/api/v1/operations/{{id}}` | `conn_mod_def::GLupueva3vM::SgcqGXpCSZmGWqIg6ueWwg` |
| Withdraw Funds | GET | `/api/v1/operations/withdraw` | `conn_mod_def::GLupuWC2k3M::hkLU_ZaVTHGGF_xxN3vXKA` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Create New Invoice | GET | `/api/v1/invoices/new` | `conn_mod_def::GLupt1ZUn74::3Rc99UQ2Qs6RQXgMMkD3ig` |
| Get Invoice Details | GET | `/api/v1/invoices/{{id}}` | `conn_mod_def::GLupt3bpOtw::aynfnDIZQvCW6IXVNmaD8w` |
| Invoice Details by Email | GET | `/api/v1/invoices/email/{{id}}` | `conn_mod_def::GLupt0IgCJQ::wJA4U6v6Rx2Xjq0XeoOkiQ` |
| Switch an Invoice | GET | `/api/v1/invoices/switch/{{id}}` | `conn_mod_def::GLuptv6Q6nw::s0C2YO4xRPmvcT5YCBKCFw` |

### Exchanges

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a New Exchange | GET | `/api/v1/exchanges/new` | `conn_mod_def::GLuptngbAjk::mg9EiBV2SlK0z-tVUbNyDA` |
| Estimate Exchange Amounts | GET | `/api/v1/exchanges/estimate` | `conn_mod_def::GLuptqB1UUg::4GCUUTy2TQyYXEX2zli9aQ` |
| Get Exchange Status | GET | `/api/v1/exchanges/{{id}}` | `conn_mod_def::GLuptqJhF4U::gg1X-g48SYWPf52nG738Rw` |

### Currencies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Cryptocurrencies by Fiat | GET | `/api/v1/currencies/{{fiat}}` | `conn_mod_def::GLuptnt2SCg::vpz_v-7QQu2mTIY5n38yQQ` |

### Balances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cryptocurrency Balance | GET | `/api/v1/balances/{{psysCid}}` | `conn_mod_def::GLuptn9v7LQ::17A_Bp2PSeSLJGRDI19HHQ` |

### SupportedExchangeCurrencies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Exchange Currencies | GET | `/api/v1/exchanges/list` | `conn_mod_def::GLuptwAWSjc::GSZMFygASoStkQsCv0Nbaw` |

### PaymentButton

| Action | Method | Path | Action id |
|---|---|---|---|
| Create New Payment Button | GET | `/api/v1/payment-button/new/{{hash}}` | `conn_mod_def::GLupt9pxgg8::gXNnsc4wTBajpGecBVaXtQ` |

### ShopDeposits

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shop Deposits | GET | `/api/v1/shops/deposit` | `conn_mod_def::GLupt9xQWhs::DaumFTvaR6-m6iWu90E3Uw` |

### ShopDeposit

| Action | Method | Path | Action id |
|---|---|---|---|
| Create New Shop Deposit | GET | `/api/v1/shops/deposit/new` | `conn_mod_def::GLupuAxJWiE::FQDY1m_LQrmEX0-KkorDzg` |

### TelegramBotWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Telegram Bot Webhook | POST | `/api/v1/telegram-bot/create` | `conn_mod_def::GLupuA3-uMU::pGF3QdpWTrqvta5uo6jVPQ` |

### Shops

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Shop Info | GET | `/api/v1/shops` | `conn_mod_def::GLupuOxB0ps::4sh2aCQhQ0WG2Uc3jlOJgw` |

### FeePlan

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Fee Plan for a Payment System | GET | `/api/v1/operations/fee-plan/{{psysCid}}` | `conn_mod_def::GLupuXzykyI::RfW86VXCR3i0lNPm_-HEuw` |

## When a call fails

The error comes from Plisio, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/plisio

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
