---
name: mailbox-validator
description: MailboxValidator provides real-time email address verification and list-cleaning services—via easy RESTful APIs or bulk uploads—to detect invalid, disposable, free, role-based and unreachable emails, helping businesses reduce bounce rates, improve deliverability, and maintain higher-quality marketing data. Read and write Mailbox Validator data through One: emailvalidation, emaildisposable, emailfreeprovidercheck and more, 4 actions with real parameter documentation. Use whenever the user asks to look something up in Mailbox Validator, create or update a record there, or build code against the Mailbox Validator API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mailbox-validator
  generated-from: one-knowledge-base
---

# Mailbox Validator through One

MailboxValidator provides real-time email address verification and list-cleaning services—via easy RESTful APIs or bulk uploads—to detect invalid, disposable, free, role-based and unreachable emails, helping businesses reduce bounce rates, improve deliverability, and maintain higher-quality marketing data.

One exposes Mailbox Validator through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mailbox-validator` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mailbox Validator is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mailbox Validator account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### EmailValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Test Connection | GET | `/v2/validation/single?email='test'` | `conn_mod_def::GJd9wr5yUbA::vxIyfL1OQL2bqEjeq8q60g` |
| Validate a Single Email Address | GET | `/v2/validation/single` | `conn_mod_def::GJd7D2uuxCg::MxQG0BWySJ20sHHOU_RqtA` |

### EmailDisposable

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if an Email Address Is Disposable | GET | `/v2/email/disposable` | `conn_mod_def::GJd7D9htb2A::g4fHV2T6QP2pyuhk20Xjcw` |

### EmailFreeProviderCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if an Email Address Is from a Free Email Provider | GET | `/email/free` | `conn_mod_def::GJd7EFdxE0g::foxiQOTTTpCkdjHJIoX5SA` |

## When a call fails

The error comes from Mailbox Validator, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mailbox-validator

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
