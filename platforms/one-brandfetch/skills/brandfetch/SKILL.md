---
name: brandfetch
description: Brandfetch is a brand asset platform and API that provides access to company logos, colors, fonts, and other brand data, allowing developers, marketers, and sales teams to automatically enrich profiles, presentations, and applications with up-to-date branding. Read and write Brandfetch data through One: brands and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Brandfetch, create or update a record there, or build code against the Brandfetch API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: brandfetch
  generated-from: one-knowledge-base
---

# Brandfetch through One

Brandfetch is a brand asset platform and API that provides access to company logos, colors, fonts, and other brand data, allowing developers, marketers, and sales teams to automatically enrich profiles, presentations, and applications with up-to-date branding.

One exposes Brandfetch through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `brandfetch` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Brandfetch is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Brandfetch account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Brands

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Brand Data | GET | `/v2/brands/{{identifier}}` | `conn_mod_def::GK6_FsFA0ag::guoHarl-Sea3Qv-lX_PGpA` |
| Get Brand Data by Crypto Symbol | GET | `/v2/brands/crypto/{{symbol}}` | `conn_mod_def::GK6_FvfN1KA::Q0QcQNf3QtO9tHO3QvEagg` |
| Get Brand Data by Domain | GET | `/v2/brands/domain/{{domain}}` | `conn_mod_def::GK6_FsGsh-A::hK25-V0gQQSAEoL1lddslA` |
| Get Brand Data by ISIN | GET | `/v2/brands/isin/{{isin}}` | `conn_mod_def::GK6_FrhGKKA::ap_GzJJSQM2aX8Mhe6rZNw` |
| Get Brand Data by Ticker | GET | `/v2/brands/ticker/{{ticker}}` | `conn_mod_def::GK6_F5ni6xg::EldmOhiRQ3mKeg7NLmEznQ` |
| Search Brands | GET | `/v2/search/{{name}}` | `conn_mod_def::GK6_GCMjFng::g_HwY1IpS4Ggn_1s4dA5wA` |
| test connection | GET | `v2/brands/domain/stripe.com` | `conn_mod_def::GK6_rNg_JnA::9_XDY5nBSiSt5wmvTNCM4Q` |
| Get Brand Data From a Transaction | POST | `/v2/brands/transaction` | `conn_mod_def::GK6_GCgB5hA::n4K4eOd5RvyBrhVghY94jQ` |

## When a call fails

The error comes from Brandfetch, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/brandfetch

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
