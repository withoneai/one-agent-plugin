---
name: kickbox
description: Kickbox is an email verification platform that provides bulk list cleaning, real-time email verification APIs, and deliverability tools, allowing developers and marketers to validate email addresses, reduce bounce rates, and improve inbox placement before sending campaigns or accepting signups. Read and write Kickbox data through One: creditbalance, disposableemail, emailverification, batchverification, batchverificationjobs and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in Kickbox, create or update a record there, or build code against the Kickbox API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: kickbox
  generated-from: one-knowledge-base
---

# Kickbox through One

Kickbox is an email verification platform that provides bulk list cleaning, real-time email verification APIs, and deliverability tools, allowing developers and marketers to validate email addresses, reduce bounce rates, and improve inbox placement before sending campaigns or accepting signups.

One exposes Kickbox through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `kickbox` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Kickbox is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Kickbox account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CreditBalance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credit Balance | GET | `/v2/balance` | `conn_mod_def::GMYhTCoWRrc::5Eg8eMo7R8iQBdOwDiotJA` |

### DisposableEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Disposable Email Check | GET | `/v1/disposable/{{address}}` | `conn_mod_def::GMYhTDjvNj4::SgObXFTDTD6dZgqPZ5UquA` |

### EmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify an Email Address | GET | `/v2/verify` | `conn_mod_def::GMYhTD0M8tQ::SJH2lyjBRZiSHoVbTB4gLg` |

### BatchVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Batch Using Kickbox | PUT | `/v2/verify-batch` | `conn_mod_def::GMYhTD_bicg::WV5Z7nHiTwyoDS0vS31OPw` |

### BatchVerificationJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Job Status for a Batch Verification Job | GET | `/v2/verify-batch/{{jobid}}` | `conn_mod_def::GMYhTE5Dulk::2olDKfl4R3-qCwqn4GkkFw` |

## When a call fails

The error comes from Kickbox, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/kickbox

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
