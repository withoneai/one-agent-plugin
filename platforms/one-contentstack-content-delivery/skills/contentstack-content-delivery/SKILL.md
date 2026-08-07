---
name: contentstack-content-delivery
description: Contentstack Content Delivery API is a high-performance, read-only REST and GraphQL service that retrieves published content from your headless CMS via a global CDN—supporting efficient queries, caching, authentication with delivery tokens, and developer SDKs for seamless integration. Read and write Contentstack Content Delivery data through One: assets, contenttypes, entries, globalfields, taxonomiesentries, stacks and more, 10 actions with real parameter documentation. Use whenever the user asks to look something up in Contentstack Content Delivery, create or update a record there, or build code against the Contentstack Content Delivery API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: contentstack-content-delivery
  generated-from: one-knowledge-base
---

# Contentstack Content Delivery through One

Contentstack Content Delivery API is a high-performance, read-only REST and GraphQL service that retrieves published content from your headless CMS via a global CDN—supporting efficient queries, caching, authentication with delivery tokens, and developer SDKs for seamless integration.

One exposes Contentstack Content Delivery through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `contentstack-content-delivery` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Contentstack Content Delivery is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Contentstack Content Delivery account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Asset | GET | `/v3/assets/{{assetUid}}` | `conn_mod_def::GJ1VWZK02zE::HsmsiWxfQMCQDWb_bN4rFw` |
| List Assets in a Stack | GET | `/v3/assets` | `conn_mod_def::GJ1VWjR5EOg::7vmiUnQuS3m9ABwInuZxwQ` |

### ContentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Content Type | GET | `/v3/content_types/{{contentTypeUid}}` | `conn_mod_def::GJ1VWyv782U::psgXAyhXQzqdSzf-R4x6Qg` |
| Get All Content Types | GET | `/v3/content_types` | `conn_mod_def::GJ1VW_LHM8Q::V-l2_wxhTaGYUevRGSqg8g` |

### Entries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Entry (by Content Type UID and Entry UID) | GET | `/v3/content_types/{{contentTypeUid}}/entries/{{entryUid}}` | `conn_mod_def::GJ1VXON7_Rk::064zsf8RR2ujmEKIKgKFbQ` |
| List Entries for a Content Type (Get All Entries) | GET | `/v3/content_types/{{contentTypeUid}}/entries` | `conn_mod_def::GJ1VXuOWH-E::sGh06t7jSAmtHBUYvmsSpQ` |

### GlobalFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Global Field | GET | `/v3/global_fields/{{globalFieldUid}}` | `conn_mod_def::GJ1VXYGQv1Q::XillVNl4RFSFZGyabWBuiQ` |
| List Global Fields | GET | `/v3/global_fields` | `conn_mod_def::GJ1VXhJ4II4::KIFGaZQDQJmARZGVoVyKDQ` |

### TaxonomiesEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Entries With Defined Taxonomies (Stack-Level) | GET | `/v3/taxonomies/entries` | `conn_mod_def::GJ1VX3bfp2A::LPhSaeWITT6JxBreQAegpQ` |

### Stacks

| Action | Method | Path | Action id |
|---|---|---|---|
| Sync Stack Content (Initial Sync, Pagination Token Sync, Subsequent Sync) | GET | `/v3/stacks/sync` | `conn_mod_def::GJ1VYBAec0U::33KqpOoERIadOX7Tu7pI2w` |

## When a call fails

The error comes from Contentstack Content Delivery, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/contentstack-content-delivery

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
