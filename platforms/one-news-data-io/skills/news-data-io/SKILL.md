---
name: news-data-io
description: NewsData.io provides a real-time news API that aggregates global news articles by keyword, category, source, or language, ideal for media monitoring, research, and analysis applications. Read and write NewsData.io data through One: cryptonewsarticles, sources, newsarchive, latestnews and more, 4 actions with real parameter documentation. Use whenever the user asks to look something up in NewsData.io, create or update a record there, or build code against the NewsData.io API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: news-data-io
  generated-from: one-knowledge-base
---

# NewsData.io through One

NewsData.io provides a real-time news API that aggregates global news articles by keyword, category, source, or language, ideal for media monitoring, research, and analysis applications.

One exposes NewsData.io through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `news-data-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm NewsData.io is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real NewsData.io account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CryptoNewsArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Crypto News Articles | GET | `/api/1/crypto` | `conn_mod_def::GJ5EP4bTda0::9FDbTsSHQvipNoN6nVofyQ` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| List News Sources | GET | `/api/1/sources` | `conn_mod_def::GJ5EP03CbCo::EJzc64A_TPSqp3LnfNdi7Q` |

### NewsArchive

| Action | Method | Path | Action id |
|---|---|---|---|
| Search News Archive (Historical News) | GET | `/api/1/archive` | `conn_mod_def::GJ5EP1sKibA::Eyn_oTwmQiezZdX9RrGvmA` |

### LatestNews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest News | GET | `/api/1/latest` | `conn_mod_def::GJ5EP4l01-A::kGxLu7-zRQ20XKZF3VSAkg` |

## When a call fails

The error comes from NewsData.io, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/news-data-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
