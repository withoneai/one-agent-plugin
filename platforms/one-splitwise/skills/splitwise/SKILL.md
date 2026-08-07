---
name: splitwise
description: Splitwise is an expense-sharing platform that enables users to track shared costs, balances, and repayments across groups, allowing individuals, roommates, and travelers to manage bills, settle debts, and integrate expense data into budgeting or financial workflows. Read and write Splitwise data through One: groups, expenses, friends, comments, users, expense and more, 27 actions with real parameter documentation. Use whenever the user asks to look something up in Splitwise, create or update a record there, or build code against the Splitwise API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: splitwise
  generated-from: one-knowledge-base
---

# Splitwise through One

Splitwise is an expense-sharing platform that enables users to track shared costs, balances, and repayments across groups, allowing individuals, roommates, and travelers to manage bills, settle debts, and integrate expense data into budgeting or financial workflows.

One exposes Splitwise through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `splitwise` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Splitwise is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Splitwise account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Group Information | GET | `/api/v3.0/get_group/{{id}}` | `conn_mod_def::GLcIN5lDVhg::Ljuv09bHSvK07jPBihku7Q` |
| List Current User Groups | GET | `/api/v3.0/get_groups` | `conn_mod_def::GLcIN5lGwRg::GalrUzSGRH63_BV7a88hfA` |
| Add User to Group | POST | `/api/v3.0/add_user_to_group` | `conn_mod_def::GLcINnstDhg::E-iyQGFaTQ6NrLG6Yj6u5Q` |
| Create Group | POST | `/api/v3.0/create_group` | `conn_mod_def::GLcIN5lV4DA::a66HgQMeRl-5fO2wb4DFSA` |
| Delete Group | POST | `/api/v3.0/delete_group/{{id}}` | `conn_mod_def::GLcIN5kbQGA::-ZsnfiDqQE2wgLwBq2_IbQ` |
| Remove User From Group | POST | `/api/v3.0/remove_user_from_group` | `conn_mod_def::GLcIN9Zo2uA::AoQtMkOYRQ2TNXkeQIbA8g` |
| Restore a Group | POST | `/api/v3.0/undelete_group/{{id}}` | `conn_mod_def::GLcIOGTgYdA::h90kavcIRMSgXh_FWboXYQ` |

### Expenses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Expenses | GET | `/api/v3.0/get_expenses` | `conn_mod_def::GLcINfNnuxg::QvqAZeq-RfuVbK6Cd541nA` |
| Create Expense | POST | `/api/v3.0/create_expense` | `conn_mod_def::GLcINTgtHNA::3dBKALn8RoaqolXQhJrxuA` |
| Delete an Expense | POST | `/api/v3.0/delete_expense/{{id}}` | `conn_mod_def::GLcINTcsccg::_61GSMW5QRiHr_BG5cGLIQ` |
| Restore an Expense | POST | `/api/v3.0/undelete_expense/{{id}}` | `conn_mod_def::GLcINcljWkg::GbGU8-w6SsGaV6uBEbgRnQ` |
| Update Expense | POST | `/api/v3.0/update_expense/{{id}}` | `conn_mod_def::GLcINc48dPA::mP6xBYoPTZO1OZ3GrQYHKQ` |

### Friends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Friend Details | GET | `/api/v3.0/get_friend/{{id}}` | `conn_mod_def::GLcINrcgrkg::VwTlIXvoTJSly5Opd40KGA` |
| List Current User's Friends | GET | `/api/v3.0/get_friends` | `conn_mod_def::GLcINrbwtQg::6uKvca47QhOmqlSZLv8g5w` |
| Add a Friend | POST | `/api/v3.0/create_friend` | `conn_mod_def::GLcINc71Ctg::37cZcT3kT22EwABWjFEMMA` |
| Create Friends | POST | `/api/v3.0/create_friends` | `conn_mod_def::GLcINn4rH2A::QoRT6c1LQqWkal1RicDbGg` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Comments | GET | `/api/v3.0/get_comments` | `conn_mod_def::GLcINTdJQMg::2h96EKlHS9iJcKUXYcvOqA` |
| Create Comment | POST | `/api/v3.0/create_comment` | `conn_mod_def::GLcINTdOvwg::aqc8y8hlSNGg8Z9EllomhA` |
| Delete a Comment | POST | `/api/v3.0/delete_comment/{{id}}` | `conn_mod_def::GLcINT1x-Wg::AbAf0d-BRfeIpAQb7oObVQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Information | GET | `/api/v3.0/get_user/{{id}}` | `conn_mod_def::GLcIOGaPjLg::4ATrMySCT-SxLsHZLCdG4g` |
| Update a User | POST | `/api/v3.0/update_user/{{id}}` | `conn_mod_def::GLcIOP7UmSg::WTWnOEauSsKr-NYsFFCunQ` |

### Expense

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Expense Information | GET | `/api/v3.0/get_expense/{{id}}` | `conn_mod_def::GLcINcfO7wg::Hf0r8D12SHuQVuAKsoCIGA` |

### Friendships

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Friendship | POST | `/api/v3.0/delete_friend/{{id}}` | `conn_mod_def::GLcINn6ALNA::qJduvZvKRtC1YosTHdsf4A` |

### Currencies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Supported Currencies | GET | `/api/v3.0/get_currencies` | `conn_mod_def::GLcIOGSxuIA::mlktA7ZjRTiyJG3KXytQPQ` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Categories | GET | `/api/v3.0/get_categories` | `conn_mod_def::GLcIOGTqLaA::I2MMd1P9R7ujA0HsIa7XWA` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Notifications | GET | `/api/v3.0/get_notifications` | `conn_mod_def::GLcIOGwh3XA::edzddg5gSY6jaH8KPnXMkQ` |

### CurrentUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User Information | GET | `/api/v3.0/get_current_user` | `conn_mod_def::GLcIOP7r9aA::QMmPduKxTjyIUR1bKp4SnQ` |

## When a call fails

The error comes from Splitwise, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/splitwise

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
