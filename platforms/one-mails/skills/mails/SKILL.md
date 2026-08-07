---
name: mails
description: Mails is an email validation service that provides a simple API and list-cleaning tools to verify deliverability, remove fake or spam addresses, and help teams protect sender reputation, improve email deliverability, and maintain cleaner contact databases. Read and write Mails data through One: batchvalidationjob, emailvalidation, batchvalidationresults, testconnection and more, 4 actions with real parameter documentation. Use whenever the user asks to look something up in Mails, create or update a record there, or build code against the Mails API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mails
  generated-from: one-knowledge-base
---

# Mails through One

Mails is an email validation service that provides a simple API and list-cleaning tools to verify deliverability, remove fake or spam addresses, and help teams protect sender reputation, improve email deliverability, and maintain cleaner contact databases.

One exposes Mails through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mails` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mails is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mails account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### BatchValidationJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Batch Validation Job | POST | `/v1/batch` | `conn_mod_def::GMKy4vrmUeg::TxKTqDhmQKapiC1Ou8yeQQ` |

### EmailValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Email | GET | `/v1/validate` | `conn_mod_def::GMKy4wbb1-g::dtnvI8CqSkuW2iMzYmtguQ` |

### BatchValidationResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Batch Validation Results | GET | `/v1/batch/{{id}}` | `conn_mod_def::GMK2u_O5u6g::oY32QlrGRHuxlFPYkQ6ABw` |

### TestConnection

| Action | Method | Path | Action id |
|---|---|---|---|
| Test Connection | GET | `/v1/validate` | `conn_mod_def::GMKzcLFsYgg::-EM25RAcQvONykK_yNpBfA` |

## When a call fails

The error comes from Mails, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mails

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
