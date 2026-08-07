---
name: bouncer
description: A cloud-based platform that verifies and cleans email lists by identifying invalid, risky, or disposable email addresses to improve deliverability, reduce bounce rates, and enhance email campaign performance. Read and write Bouncer data through One: toxicitylistjob, emailverificationbatch, batchemailverification, batchverification, batchemailverificationjob, batchverificationresults and more, 13 actions with real parameter documentation. Use whenever the user asks to look something up in Bouncer, create or update a record there, or build code against the Bouncer API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bouncer
  generated-from: one-knowledge-base
---

# Bouncer through One

A cloud-based platform that verifies and cleans email lists by identifying invalid, risky, or disposable email addresses to improve deliverability, reduce bounce rates, and enhance email campaign performance.

One exposes Bouncer through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bouncer` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Bouncer is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Bouncer account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ToxicityListJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Toxicity List Job Status | GET | `/v1/toxicity/list/{{ID}}` | `conn_mod_def::GJt2_yOF4b8::lk0kG1xvSwCGjTbcjiRnTg` |
| Create Toxicity List Job | POST | `/toxicity/list` | `conn_mod_def::GJt2_qnzVsc::oM2wSVqbQk2C4s78_u2o1w` |
| Delete a Toxicity List Job | DELETE | `/v1/toxicity/list/{{id}}` | `conn_mod_def::GJt2_5jg-88::_4wxHQGYRtGUgPnX3sNOJA` |

### EmailVerificationBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Email Verification Batch Request | DELETE | `/email/verify/batch/{{BATCHID}}` | `conn_mod_def::GJt2-7lBjg0::T3f7gj5KQqO4LBTjyys1MA` |
| Process with Email Verification Queue (Synchronous Batch) | POST | `/email/verify/batch/sync` | `conn_mod_def::GJt2_RBspM4::gb5tX57WQgqSptZTlHeotw` |

### BatchEmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Batch Email Verification Request | POST | `/v1.1/email/verify/batch` | `conn_mod_def::GJt2-qLJdes::07jwn49YTXKIg1C5vVoXww` |

### BatchVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Batch Verification Status | GET | `/email/verify/batch/{{BATCHID}}` | `conn_mod_def::GJt2-0NAZXA::69jahzucR0mShTWlzZPYMg` |

### BatchEmailVerificationJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Finish a Batch Email Verification Job | POST | `/v1.1/email/verify/batch/{{BATCHID}}/finish` | `conn_mod_def::GJt2_BpOZOQ::9q3yy3uuSUqG2-oPlougnw` |

### BatchVerificationResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Batch Verification Results Download | GET | `/email/verify/batch/{{BATCHID}}/download` | `conn_mod_def::GJt2_JFQIek::gKfg2u3YRUGksL6Jp_krjA` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Available Credits | GET | `/credits` | `conn_mod_def::GJt2_YZWyYk::FSgEC2dfSamdCWp6WAgfNw` |

### Domain

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify a Domain | GET | `/domain` | `conn_mod_def::GJt2_ew90c4::6VRkCL10TiyVLVktjg1YTw` |

### EmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify an Email Address (Real-Time) | GET | `/email/verify` | `conn_mod_def::GJt2_kzkP-w::C8BBNuP9RQu9XhRTeQSyeg` |

### ToxicityListResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Toxicity List Results | GET | `/v1/toxicity/list/{{ID}}/data` | `conn_mod_def::GJt3AEDlRMk::eq-T-CoOS7aNSU1a2jSUkA` |

## When a call fails

The error comes from Bouncer, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bouncer

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
