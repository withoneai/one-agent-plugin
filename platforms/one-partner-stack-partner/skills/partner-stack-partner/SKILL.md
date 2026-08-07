---
name: partner-stack-partner
description: PartnerStack is a partner relationship management platform that helps companies scale affiliate, referral, and reseller programs through automated tracking, payouts, and performance insights. The Partner API lets partners programmatically access their accounts to retrieve customers, track conversions, view rewards, and manage transactions. Read and write PartnerStack Partner data through One: marketplaceprograms, actions, customers, transactions, rewards, payouts and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in PartnerStack Partner, create or update a record there, or build code against the PartnerStack Partner API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: partner-stack-partner
  generated-from: one-knowledge-base
---

# PartnerStack Partner through One

PartnerStack is a partner relationship management platform that helps companies scale affiliate, referral, and reseller programs through automated tracking, payouts, and performance insights. The Partner API lets partners programmatically access their accounts to retrieve customers, track conversions, view rewards, and manage transactions.

One exposes PartnerStack Partner through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `partner-stack-partner` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm PartnerStack Partner is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real PartnerStack Partner account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### MarketplacePrograms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Marketplace Programs | GET | `/api/v2/marketplace/programs` | `conn_mod_def::GJ5_dYkLa34::kF0PCPjeTw27Utk7YbEuyg` |
| Retrieve a Marketplace Program | GET | `/v2/marketplace/programs/{{companyKey}}` | `conn_mod_def::GJ5_dWhPxlE::nXemkxRvTEuM1gcr5th31A` |

### Actions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Actions | GET | `/api/v2/actions` | `conn_mod_def::GJ5_daTwETY::tI5kSGxQTjutfqgTMyFk9g` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customers | GET | `/api/v2/customers` | `conn_mod_def::GJ5_dbEPLS4::zdzKZ49eQ92Tx6Ggc9RznQ` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transactions | GET | `/api/v2/transactions` | `conn_mod_def::GJ5_djNbEcM::0joJx-pgSH6Z_6hW5rqo6Q` |

### Rewards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Rewards | GET | `/api/v2/rewards` | `conn_mod_def::GJ5_dljyHso::Q-6nZRwrS4OjVVzn9g9FrQ` |

### Payouts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Payouts | GET | `/api/v2/payouts` | `conn_mod_def::GJ5_dkaKvlk::AkYWMYwgQpy_Lyv8zTDdVg` |

### Partnerships

| Action | Method | Path | Action id |
|---|---|---|---|
| List Partnerships | GET | `/api/v2/partnerships` | `conn_mod_def::GJ5_dZoK-tI::Co-L5MrJRRuvoSoljb_-8g` |

## When a call fails

The error comes from PartnerStack Partner, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/partner-stack-partner

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
