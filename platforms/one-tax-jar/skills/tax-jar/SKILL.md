---
name: tax-jar
description: TaxJar is a tax compliance platform that provides APIs for sales tax calculation, reporting, and filing automation, allowing eCommerce businesses, marketplaces, and developers to manage multi-jurisdiction tax obligations and integrate tax workflows into checkout, billing, and back-office systems. Read and write TaxJar data through One: customers, refundtransactions, ordertransactions, transactions, categories, nexusregions and more, 21 actions with real parameter documentation. Use whenever the user asks to look something up in TaxJar, create or update a record there, or build code against the TaxJar API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: tax-jar
  generated-from: one-knowledge-base
---

# TaxJar through One

TaxJar is a tax compliance platform that provides APIs for sales tax calculation, reporting, and filing automation, allowing eCommerce businesses, marketplaces, and developers to manage multi-jurisdiction tax obligations and integrate tax workflows into checkout, billing, and back-office systems.

One exposes TaxJar through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `tax-jar` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm TaxJar is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real TaxJar account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customers | GET | `/v2/customers` | `conn_mod_def::GLWDVl6s41A::UJn51QZ3Tg6MnnjATfCn7w` |
| Show a Customer | GET | `/v2/customers/{{customerId}}` | `conn_mod_def::GLWDVmyAAvA::6JsP6WfITbGhxntTaNT9Eg` |
| Create Customer | POST | `/v2/customers` | `conn_mod_def::GLWDVk8zCPA::cRS5OJoGSKq-xLGAt-bKTg` |
| Delete a Customer | DELETE | `/v2/customers/{{customerId}}` | `conn_mod_def::GLWDVniJ1EA::QpEroI9oQjChVm37CjqDWA` |
| Update a Customer | PUT | `/v2/customers/{{customerId}}` | `conn_mod_def::GLWDVxWQj0A::g1X4yt62TM2G_0OI23kzRg` |

### RefundTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Show Refund Transaction | GET | `/v2/transactions/refunds/{{transactionId}}` | `conn_mod_def::GLWDWAb4ZRA::17R1hbZVSzamdSFQxy5r9Q` |
| Create Refund Transaction | POST | `/v2/transactions/refunds` | `conn_mod_def::GLWDWJX2Zcg::Fvca6tDQSleBct2yuMLezQ` |
| Delete a Refund Transaction | DELETE | `/v2/transactions/refunds/{{transactionId}}` | `conn_mod_def::GLWDV64ZS9A::zg2I1rFhRhC-BqIvPlF7Zg` |
| Update a Refund Transaction | PUT | `/v2/transactions/refunds/{{transactionId}}` | `conn_mod_def::GLWDWJXuoYA::8je1_okZQOCRCL7X7v0e0g` |

### OrderTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Order Transaction | DELETE | `/v2/transactions/orders/{{transactionId}}` | `conn_mod_def::GLWDV64M3Dg::QQrPOhCUT8O5TnJRuXRAYQ` |
| Update Order Transaction | PUT | `/v2/transactions/orders/{{transactionId}}` | `conn_mod_def::GLWDWK6DkbA::tg3ST_2IQ4OGbQT7AvI2EA` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Show an Order Transaction | GET | `/v2/transactions/orders/{{transactionId}}` | `conn_mod_def::GLWDWN7F7Ig::pm7CKOPTTj2MWiwVezt0iw` |
| Create Order Transaction | POST | `/v2/transactions/orders` | `conn_mod_def::GLWDWK5pJ_g::CmWNV1o_SmKDtvuUAciLJA` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tax Categories | GET | `/v2/categories` | `conn_mod_def::GLWDVmjPXtA::kIFfQWtfQc-k71x2YLzG3A` |

### NexusRegions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Nexus Regions | GET | `/v2/nexus/regions` | `conn_mod_def::GLWDVwj88Jg::Mxv_LvhZRYG6fkJCYQKxng` |

### Taxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Sales Tax for an Order | POST | `/v2/taxes` | `conn_mod_def::GLWDVw-tY1A::9ELWz97hQ_SKHwSfT0iCEQ` |

### SummaryRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Summary Rates | GET | `/v2/summary_rates` | `conn_mod_def::GLWDVxURl1g::bKjhRh3jTj2p9U0rn-Vjtw` |

### SalesTaxRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sales Tax Rates for a Location | GET | `/v2/rates/{{zip}}` | `conn_mod_def::GLWDVyY4qKA::Y_B8VlxMQ6qZUUHsXUOyuA` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Orders | GET | `/v2/transactions/orders` | `conn_mod_def::GLWDV7IXltg::WgKPxrsmTTC4ntGxRt0WzQ` |

### Refunds

| Action | Method | Path | Action id |
|---|---|---|---|
| List Refunds | GET | `/v2/transactions/refunds` | `conn_mod_def::GLWDV7aMiOA::OnxwMZx7Ru6ExxVLNU5mFg` |

### Addresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Address | POST | `/v2/addresses/validate` | `conn_mod_def::GLWDWVf-Llg::EMav-LAyRmO9SYSk5VHtCw` |

## When a call fails

The error comes from TaxJar, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/tax-jar

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
