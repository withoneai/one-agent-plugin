---
name: alchemy-notify
description: Alchemy is a blockchain developer platform that provides APIs, node infrastructure, developer tools, and analytics for building, scaling, and monitoring decentralized applications, allowing engineering teams to integrate with multiple blockchain networks without managing underlying infrastructure directly. Read and write Alchemy Notify data through One: webhooks, variables, webhookaddresses, webhooknftfilters, variableelements and more, 13 actions with real parameter documentation. Use whenever the user asks to look something up in Alchemy Notify, create or update a record there, or build code against the Alchemy Notify API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: alchemy-notify
  generated-from: one-knowledge-base
---

# Alchemy Notify through One

Alchemy is a blockchain developer platform that provides APIs, node infrastructure, developer tools, and analytics for building, scaling, and monitoring decentralized applications, allowing engineering teams to integrate with multiple blockchain networks without managing underlying infrastructure directly.

One exposes Alchemy Notify through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `alchemy-notify` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Alchemy Notify is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Alchemy Notify account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Webhooks | GET | `/api/team-webhooks` | `conn_mod_def::GLGMTiAfp1I::IAFBs_IvRgmFVCqbWZTV5Q` |
| Create Webhook | POST | `/api/create-webhook` | `conn_mod_def::GLGMTW-hQoE::0h2R3af7TBuN0wm3ShBDYw` |
| Delete Webhook | DELETE | `/api/delete-webhook` | `conn_mod_def::GLGMTY2cLvg::jmSpw7EbQAOM_EWktdUe_A` |
| Update Webhook | PUT | `/api/update-webhook` | `conn_mod_def::GLGMTh0gt8o::0lv_vlaDTEycOW6vV0t28Q` |

### Variables

| Action | Method | Path | Action id |
|---|---|---|---|
| Create A Variable | POST | `/api/graphql/variables/{{variable}}` | `conn_mod_def::GLGMTMW740U::EGivhqjUTPGkzAsZzCWuJg` |
| Delete A Variable | DELETE | `/api/graphql/variables/{{variable}}` | `conn_mod_def::GLGMTXeP8EI::abe_D5AsRwm4kJmvZ4sOTQ` |
| Update A Variable | PATCH | `/api/graphql/variables/{{variable}}` | `conn_mod_def::GLGMThhVpK8::mPkpWUG0RsShXPLd5zJ3Mg` |

### WebhookAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Addresses For An Address Activity Webhook | GET | `/api/webhook-addresses` | `conn_mod_def::GLGMTZi2t9c::Zm2B9dN6TqmB9O436rFPvQ` |
| Add And Remove Webhook Addresses | PATCH | `/api/update-webhook-addresses` | `conn_mod_def::GLGMTL0i0Xs::5XcxWexRSAq6TrK7vpBsLg` |
| Replace Webhook Addresses | PUT | `/api/update-webhook-addresses` | `conn_mod_def::GLGMTh0WWvc::ifJqf5HZSJSqYg33GKUzYw` |

### WebhookNftFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Webhook NFT Filters | GET | `/api/webhook-nft-filters` | `conn_mod_def::GLGMTZpgxLU::eJ7R82fzSi6bABJ0q3YOkw` |
| Update Webhook NFT Filters | PATCH | `/api/update-webhook-nft-filters` | `conn_mod_def::GLGMTprACV0::2lMz_Z_xTja6GpmjziNlLA` |

### VariableElements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Variable Elements | GET | `/api/graphql/variables/{{variable}}` | `conn_mod_def::GLGMTiTF8Rs::My5POIbnQxmzyxeL3aBcbw` |

## When a call fails

The error comes from Alchemy Notify, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/alchemy-notify

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
