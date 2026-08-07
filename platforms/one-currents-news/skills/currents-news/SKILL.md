---
name: currents-news
description: Currents News API offers a real-time, RESTful news service that delivers global articles from 70+ countries in over 18 languages, supports keyword-based and SQL-style queries, and provides historical data access with high reliability. Read and write Currents News data through One: latestnews, newsarticles, availablecategories, availablelanguages, availableregions and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in Currents News, create or update a record there, or build code against the Currents News API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: currents-news
  generated-from: one-knowledge-base
---

# Currents News through One

Currents News API offers a real-time, RESTful news service that delivers global articles from 70+ countries in over 18 languages, supports keyword-based and SQL-style queries, and provides historical data access with high reliability.

One exposes Currents News through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `currents-news` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Currents News is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Currents News account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### LatestNews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest News by Language | GET | `/latest-news` | `conn_mod_def::GJ2MAKPywlk::nF9JR6jCQ9qeKQoF13n-PA` |

### NewsArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| Search News Articles | GET | `/search` | `conn_mod_def::GJ2MATUtXGY::BZ5DTZF7RbGm0eNtya9O_w` |

### AvailableCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Categories | GET | `/v1/available/category` | `conn_mod_def::GJ2MAml9xZA::5rqkZqHhQnKIMypjEDq9ow` |

### AvailableLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Languages | GET | `/available/languages` | `conn_mod_def::GJ2MAwAvmD4::fXOu6j0fTVWHuEXSmPgFsA` |

### AvailableRegions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Regions | GET | `/available/regions` | `conn_mod_def::GJ2MAcksQFQ::V90qQPkoS8mFbUWy0mAr7A` |

## When a call fails

The error comes from Currents News, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/currents-news

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
