---
name: serply
description: Serply is a Google Search API platform that provides real-time SERP data as JSON, including web, image, news, scholar, and video results, allowing developers to programmatically access search results through a REST API. Read and write Serply data through One: search, news, scholar, products, bingsearch, jobs and more, 9 actions with real parameter documentation. Use whenever the user asks to look something up in Serply, create or update a record there, or build code against the Serply API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: serply
  generated-from: one-knowledge-base
---

# Serply through One

Serply is a Google Search API platform that provides real-time SERP data as JSON, including web, image, news, scholar, and video results, allowing developers to programmatically access search results through a REST API.

One exposes Serply through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `serply` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Serply is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Serply account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google | GET | `/v1/search/{{query}}` | `conn_mod_def::GMYaKVxW0Hg::omjB1_kiQDqaWgDzhCsIYw` |
| Test Connection | GET | `/v1/search/{{query}}` | `conn_mod_def::GMYbETJRtXA::-D3tbIAlRNqTgT7e8RZBvQ` |

### News

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google News | GET | `/v1/news/{{query}}` | `conn_mod_def::GMYaKJ928lg::o5e2EeXzROCsW_9kR84_HA` |

### Scholar

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Scholar | GET | `/v1/scholar/{{query}}` | `conn_mod_def::GMYaKKGtnMA::RX7zgFkiTdWBj8FlvCkUhw` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Amazon Products Using Google Product Search | GET | `/v1/product/search/{{query}}` | `conn_mod_def::GMYaKKRiwhA::Gf_ktLmhRmmHJZhXDZnhYw` |

### BingSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Bing | GET | `/v1/b/search/{{query}}` | `conn_mod_def::GMYaKKgy1RA::BoEU2QXQRuSYW30Ohgp_3g` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Jobs | GET | `/v1/job/search/{{query}}` | `conn_mod_def::GMYaKKqSg3g::d2Ni1mahRZy1MKvFC-QdLw` |

### Video

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Video | GET | `/v1/video/{{query}}` | `conn_mod_def::GMYaKRezPEA::VlgP_uP6SeWV3vs_zOdMwA` |

### ScrapeRequest

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Scrape Request | POST | `/v1/request` | `conn_mod_def::GMYaKTGmDsA::oztT2YReTP6C34OVduF57A` |

## When a call fails

The error comes from Serply, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/serply

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
