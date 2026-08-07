---
name: zenserp
description: Zenserp is a SERP API platform that provides real-time search engine results in JSON, including Google, Bing, Yandex, Maps, News, Trends, Shopping, and image search data, allowing developers to programmatically access live search results and related content. Read and write Zenserp data through One: status, youtubeserpresults, trendsserp, shoppingproductpage, searchresults and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in Zenserp, create or update a record there, or build code against the Zenserp API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: zenserp
  generated-from: one-knowledge-base
---

# Zenserp through One

Zenserp is a SERP API platform that provides real-time search engine results in JSON, including Google, Bing, Yandex, Maps, News, Trends, Shopping, and image search data, allowing developers to programmatically access live search results and related content.

One exposes Zenserp through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `zenserp` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Zenserp is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Zenserp account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Status

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Remaining Requests | GET | `/api/v2/status` | `conn_mod_def::GMcCVvDstjg::ellaKLrNT-e1MDBud8adeQ` |

### YoutubeSerpResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube SERP Results | GET | `/api/v1/youtube` | `conn_mod_def::GMcCVwrjDxA::5knaMdE0TX6UccO1LfsF5Q` |

### TrendsSerp

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Trends SERP | GET | `/api/v1/trends` | `conn_mod_def::GMcCVxTQaQA::8kp-QgoqSbqlWHZEEje-yQ` |

### ShoppingProductPage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Shopping Product Page | GET | `/api/v1/shopping` | `conn_mod_def::GMcCVxTpEYA::t9CU3QnHSamgNZwMJSQXHg` |

### SearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Search Results | GET | `/api/v2/search` | `conn_mod_def::GMcCVyax3SA::M4p__ZL3SzKklGedUAa1Ww` |

## When a call fails

The error comes from Zenserp, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/zenserp

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
