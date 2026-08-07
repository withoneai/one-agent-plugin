---
name: ynab
description: YNAB is a personal budgeting and financial planning platform that provides tools and APIs for managing accounts, transactions, budgets, and spending categories, allowing users and developers to track cash flow, automate budgeting workflows, and build integrations around household finance data. Read and write YNAB data through One: transactions, plans, scheduledtransactions, categories, accounts, payeelocations and more, 44 actions with real parameter documentation. Use whenever the user asks to look something up in YNAB, create or update a record there, or build code against the YNAB API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ynab
  generated-from: one-knowledge-base
---

# YNAB through One

YNAB is a personal budgeting and financial planning platform that provides tools and APIs for managing accounts, transactions, budgets, and spending categories, allowing users and developers to track cash flow, automate budgeting workflows, and build integrations around household finance data.

One exposes YNAB through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ynab` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm YNAB is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real YNAB account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transaction for a Plan | GET | `/v1/plans/{{planId}}/transactions/{{transactionId}}` | `conn_mod_def::GLU0FyZ98-A::KFd9_05fT7meSAR8cPCNvg` |
| Get Transactions for a Payee | GET | `/v1/plans/{{planId}}/payees/{{payeeId}}/transactions` | `conn_mod_def::GLU0F_ZQnrA::bdtIIn6mQ-imyHAuCLJ5kw` |
| Get Transactions for a Plan | GET | `/v1/plans/{{planId}}/transactions` | `conn_mod_def::GLU0F-q18oA::6FTLxk2jQdqNkzinbAo7hg` |
| List a Plan Month's Transactions | GET | `/v1/plans/{{planId}}/months/{{month}}/transactions` | `conn_mod_def::GLU0F_Q6aOA::oe7UtW8ASDqTRkg3OEQrTA` |
| List Transactions for a Plan Account | GET | `/v1/plans/{{planId}}/accounts/{{accountId}}/transactions` | `conn_mod_def::GLU0GACRKYA::V8uzil_wTGKWT5qxlOvXUQ` |
| Create Transactions for a Plan | POST | `/v1/plans/{{planId}}/transactions` | `conn_mod_def::GLU0F1UJ6EA::EZHCDVbBQWK9DIsJLlbMdw` |
| Delete a Transaction in a Plan | DELETE | `/v1/plans/{{planId}}/transactions/{{transactionId}}` | `conn_mod_def::GLU0FyPvIxA::ncckr-VgQ1SDXcuvwS58Hg` |
| Update Transactions for a Plan | PATCH | `/v1/plans/{{planId}}/transactions` | `conn_mod_def::GLU0GIls2jg::LWuNu7JTR6-4zM0xMn6F2Q` |

### Plans

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Category for a Specific Plan Month | GET | `/v1/plans/{{planId}}/months/{{month}}/categories/{{categoryId}}` | `conn_mod_def::GLU0E9Te1wA::g4cUiaZ0RwqI-LJR6aEpkw` |
| Get a Plan by ID | GET | `/v1/plans/{{planId}}` | `conn_mod_def::GLU0FaPHdpg::9sfXw-XjRZ6pQ3dK1vptoA` |
| Get Plan Settings | GET | `/v1/plans/{{planId}}/settings` | `conn_mod_def::GLU0Fn7_Vhg::fn6AhHPxR8qIX-e_5mfOdw` |
| Get Plans | GET | `/v1/plans` | `conn_mod_def::GLU0FpdaMxg::8KaIpAniSSayAc_3Cii_2Q` |
| Import Transactions for a Plan | POST | `/v1/plans/{{planId}}/transactions/import` | `conn_mod_def::GLU0GIKNHgg::qrNtK5CyQp2oVz8WRtJtdQ` |

### ScheduledTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scheduled Transaction for a Plan | GET | `/v1/plans/{{planId}}/scheduled_transactions/{{scheduledTransactionId}}` | `conn_mod_def::GLU0FoAgWmA::OiYD8mbHStmvTMBVOV7Wqg` |
| List a Plan's Scheduled Transactions | GET | `/v1/plans/{{planId}}/scheduled_transactions` | `conn_mod_def::GLU0F0hoihA::B8GRxjUVSLeqoDZDMtcfng` |
| Create a Scheduled Transaction for a Plan | POST | `/v1/plans/{{planId}}/scheduled_transactions` | `conn_mod_def::GLU0Fp5YWHA::1_Iz_zP_SU-XbIST0JGrhA` |
| Delete a Plan Scheduled Transaction | DELETE | `/v1/plans/{{planId}}/scheduled_transactions/{{scheduledTransactionId}}` | `conn_mod_def::GLU0Fn8WovA::CxXKRwe2RIuUh1IV1fTKxw` |
| Update a Plan Scheduled Transaction | PUT | `/v1/plans/{{planId}}/scheduled_transactions/{{scheduledTransactionId}}` | `conn_mod_def::GLU0FylsIsA::qQQYhSN4ShmFR7zW4xtRYw` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Category for a Plan | GET | `/v1/plans/{{planId}}/categories/{{categoryId}}` | `conn_mod_def::GLU0E82JZgA::jGY5FqsiRd28jGDS5eehrw` |
| Get Categories for a Plan | GET | `/v1/plans/{{planId}}/categories` | `conn_mod_def::GLU0E7x6SYg::tZlJo0GLQbKkuqSHeNzSig` |
| Create a Category for a Plan | POST | `/v1/plans/{{planId}}/categories` | `conn_mod_def::GLU0ExHwVAg::MN11Gj-1S7uhpl5-LAf1ZQ` |
| Update a Category for a Specific Month | PATCH | `/v1/plans/{{planId}}/months/{{month}}/categories/{{categoryId}}` | `conn_mod_def::GLU0E9Hb90A::29eRpvYqTimitZImt_gaDQ` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Accounts for a Plan | GET | `/v1/plans/{{planId}}/accounts` | `conn_mod_def::GLU0EySaITg::p1c9WmygRr6k5YTgA_keNQ` |
| Get an Account for a Plan | GET | `/v1/plans/{{planId}}/accounts/{{accountId}}` | `conn_mod_def::GLU0ExNL5Jg::oPuBJk2ZRqCWueYahGZNTQ` |
| Create an Account for a Plan | POST | `/v1/plans/{{planId}}/accounts` | `conn_mod_def::GLU0ExHrhZA::p4LDtFPGQI-xhvLkgz__pw` |

### PayeeLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Payee Location for a Plan | GET | `/v1/plans/{{planId}}/payee_locations/{{payeeLocationId}}` | `conn_mod_def::GLU0FQg96aA::MTCnfxInSwK2CO6YxCKZIg` |
| Get Payee Locations for a Plan | GET | `/v1/plans/{{planId}}/payee_locations` | `conn_mod_def::GLU0FQg0xcg::GQUZDEnYQwybTX147GhEwg` |
| Get Payee Locations for a Plan Payee | GET | `/v1/plans/{{planId}}/payees/{{payeeId}}/payee_locations` | `conn_mod_def::GLU0FP1lwlA::66wlGOl4Qlye8fqGQ-4c4w` |

### Payees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Payee for a Plan | GET | `/v1/plans/{{planId}}/payees/{{payeeId}}` | `conn_mod_def::GLU0FbQ2ilA::ePYP1vnWQPmw2-FqpR0UpQ` |
| List Payees for a Plan | GET | `/v1/plans/{{planId}}/payees` | `conn_mod_def::GLU0FfjaInA::pqqvXd_MRMurTKJ0RDuiJg` |
| Create a Payee for a Plan | POST | `/v1/plans/{{planId}}/payees` | `conn_mod_def::GLU0FcCH1IA::8V7J9fmmSA-siVDhcjm_vg` |

### MoneyMovementGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Money Movement Groups for a Plan | GET | `/v1/plans/{{planId}}/money_movement_groups` | `conn_mod_def::GLU0FFiaC6A::11jExa07Sp-6HBLSAAS1Og` |
| Get Money Movement Groups for a Plan Month | GET | `/v1/plans/{{planId}}/months/{{month}}/money_movement_groups` | `conn_mod_def::GLU0FFihzAA::Bz6dlbm1S0yJudlKE1XNTg` |

### MoneyMovements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Money Movements for a Plan Month | GET | `/v1/plans/{{planId}}/months/{{month}}/money_movements` | `conn_mod_def::GLU0FGQCA1g::K4iaxtQDR9i2yzyYgc3JEQ` |
| List a Plan's Money Movements | GET | `/v1/plans/{{planId}}/money_movements` | `conn_mod_def::GLU0FFiyrFA::pQW9UD38Rh6z5T5TLDWL5A` |

### CategoryGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Category Group for a Plan | POST | `/v1/plans/{{planId}}/category_groups` | `conn_mod_def::GLU0ExJ62Pg::FZwC6FyxTXah0k-C2Lz9yw` |

### PlanCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Plan Category | PATCH | `/v1/plans/{{planId}}/categories/{{categoryId}}` | `conn_mod_def::GLU0E7StZmg::uR75vIGKTcu_rL6QM6moqg` |

### PlanCategoryGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Plan Category Group | PATCH | `/v1/plans/{{planId}}/category_groups/{{categoryGroupId}}` | `conn_mod_def::GLU0FGLqLqA::IR8Vp6O5SCeK_fnSYXusew` |

### PlanMonth

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Plan Month | GET | `/v1/plans/{{planId}}/months/{{month}}` | `conn_mod_def::GLU0FPPXrwA::Brr-ZKcCQz-D4FlBy3qWEA` |

### PlanMonths

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Plan Months | GET | `/v1/plans/{{planId}}/months` | `conn_mod_def::GLU0FQPSBAA::X1cqlykIRLa75bQ6BxX5OQ` |

### PlanPayees

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Plan Payee | PATCH | `/v1/plans/{{planId}}/payees/{{payeeId}}` | `conn_mod_def::GLU0FZHhCQg::mfesPLWvSaKThFk9z9nCiQ` |

### CategoryTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Category Transactions for a Plan | GET | `/v1/plans/{{planId}}/categories/{{categoryId}}/transactions` | `conn_mod_def::GLU0F_bwbNg::LRMHJCGSRf--6ampaKLdPQ` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User | GET | `/v1/user` | `conn_mod_def::GLU0GHKyIHg::oumMX4KCRRWWPBaRbe4G0w` |

### PlanTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Plan Transaction | PUT | `/v1/plans/{{planId}}/transactions/{{transactionId}}` | `conn_mod_def::GLU0GL5AE4g::30Hk0AHlRjem7bf7WSv0AQ` |

## When a call fails

The error comes from YNAB, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ynab

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
