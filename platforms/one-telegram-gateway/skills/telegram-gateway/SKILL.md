---
name: telegram-gateway
description: Telegram is a cloud-based messaging platform, and its Gateway API enables businesses to send one-time passcodes and authentication messages directly to users via Telegram, providing a fast, cost-effective alternative to SMS for user verification and secure login workflows. Read and write Telegram Gateway data through One: verificationmessages, verificationstatus, requeststatus and more, 4 actions with real parameter documentation. Use whenever the user asks to look something up in Telegram Gateway, create or update a record there, or build code against the Telegram Gateway API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: telegram-gateway
  generated-from: one-knowledge-base
---

# Telegram Gateway through One

Telegram is a cloud-based messaging platform, and its Gateway API enables businesses to send one-time passcodes and authentication messages directly to users via Telegram, providing a fast, cost-effective alternative to SMS for user verification and secure login workflows.

One exposes Telegram Gateway through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `telegram-gateway` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Telegram Gateway is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Telegram Gateway account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### VerificationMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Revoke a Verification Message | POST | `/revokeVerificationMessage` | `conn_mod_def::GKGVaHBuNSE::W2zE_ezTSB-sMf8KXQTgTQ` |
| Send Verification Message | POST | `/sendVerificationMessage` | `conn_mod_def::GKGVaJJIDhI::OjyR_NYETMmhOgfvwNjYlA` |

### VerificationStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Verification Status | POST | `/checkVerificationStatus` | `conn_mod_def::GKGVaI2R138::41PbPQohT06ix6OwYPjaLQ` |

### RequestStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Send Ability | POST | `/checkSendAbility` | `conn_mod_def::GKGVaHhT4qw::b7qLdwQAR6CrE6Er6Re4HQ` |

## When a call fails

The error comes from Telegram Gateway, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/telegram-gateway

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
