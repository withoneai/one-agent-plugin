---
name: abstract-vat-validation
description: An API that validates VAT numbers against official registries, confirms company details, and helps businesses ensure tax compliance, reduce fraud risk, and automate cross-border invoicing workflows. Read and write Abstract Vat Validation data through One: vatvalidation, vatcalculation, vatcategories and more, 4 actions with real parameter documentation. Use whenever the user asks to look something up in Abstract Vat Validation, create or update a record there, or build code against the Abstract Vat Validation API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: abstract-vat-validation
  generated-from: one-knowledge-base
---

# Abstract Vat Validation through One

An API that validates VAT numbers against official registries, confirms company details, and helps businesses ensure tax compliance, reduce fraud risk, and automate cross-border invoicing workflows.

One exposes Abstract Vat Validation through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `abstract-vat-validation` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Abstract Vat Validation is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Abstract Vat Validation account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### VatValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Test Connection | GET | `/validate` | `conn_mod_def::GJwPYd37kmQ::YeYmE_XaSReAuSXALkNKJA` |
| Validate a VAT Number | GET | `/validate` | `conn_mod_def::GJwM9J9Tu0g::ryHZJZxIS4GRSxYRnptLNg` |

### VatCalculation

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate VAT-Compliant Price | GET | `/v1/calculate` | `conn_mod_def::GJwM9RXafkA::I1C9N4_FT2y5bFrWfgl77w` |

### VatCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List VAT Categories and Rates for a Country | GET | `/v1/categories` | `conn_mod_def::GJwM9Xg6zH4::fBYyJ5n1R8u5XGsgxCKxaA` |

## When a call fails

The error comes from Abstract Vat Validation, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/abstract-vat-validation

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
