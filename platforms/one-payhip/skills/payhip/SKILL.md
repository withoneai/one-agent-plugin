---
name: payhip
description: Payhip is an eCommerce platform that enables creators and small businesses to sell digital products, online courses, memberships, and physical goods, providing storefronts, payment processing, and marketing tools that help users manage sales and customer delivery from one system. Read and write Payhip data through One: coupons, language and more, 7 actions with real parameter documentation. Use whenever the user asks to look something up in Payhip, create or update a record there, or build code against the Payhip API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: payhip
  generated-from: one-knowledge-base
---

# Payhip through One

Payhip is an eCommerce platform that enables creators and small businesses to sell digital products, online courses, memberships, and physical goods, providing storefronts, payment processing, and marketing tools that help users manage sales and customer delivery from one system.

One exposes Payhip through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `payhip` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Payhip is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Payhip account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Coupons

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Whether a Product Has a Coupon | GET | `/coupons/hascoupon` | `conn_mod_def::GLCVvTz8joA::hzpqgxdDQtS87OVs-JDsaQ` |
| List Coupons | GET | `/coupons` | `conn_mod_def::GLCVvWi4DWA::oNZ_Z4o6QCmxfXtQZCdj6A` |
| Verify a Coupon | GET | `/coupons/verify` | `conn_mod_def::GLCVvg14Xhg::aIkG8fBIQxes9qMS2lOixg` |
| Create Coupons | POST | `/api/v1/coupons` | `conn_mod_def::GLCVvTw8_3A::812X2n1nQCOvcNIEbIxGVg` |
| Delete Coupons | DELETE | `/api/v1/coupons` | `conn_mod_def::GLCVvTw9Gsg::Lt6l2jt2QEG-6LsP0sXYNg` |
| Edit an Existing Coupon | PUT | `/coupons` | `conn_mod_def::GLCVvT6CDXA::8ru9B6hdSz-B6eHSDoVfyA` |

### Language

| Action | Method | Path | Action id |
|---|---|---|---|
| List Language Text | GET | `/language` | `conn_mod_def::GLCVvhfwYCA::Ytt-mMPlTKWt_SJWLRutgA` |

## When a call fails

The error comes from Payhip, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/payhip

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
