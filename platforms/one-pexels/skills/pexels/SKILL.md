---
name: pexels
description: Pexels is a stock media platform that provides free access to curated photos and videos, with an API that enables developers to search, retrieve, and integrate royalty-free visual content into websites, apps, and creative workflows. Read and write Pexels data through One: collections, videos, photos, curatedphotos and more, 9 actions with real parameter documentation. Use whenever the user asks to look something up in Pexels, create or update a record there, or build code against the Pexels API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: pexels
  generated-from: one-knowledge-base
---

# Pexels through One

Pexels is a stock media platform that provides free access to curated photos and videos, with an API that enables developers to search, retrieve, and integrate royalty-free visual content into websites, apps, and creative workflows.

One exposes Pexels through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `pexels` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Pexels is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Pexels account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection's Media | GET | `/collections/{{id}}` | `conn_mod_def::GKPBuCHU4vA::m9mqExI1RC2ncXfozDFpog` |
| List Featured Collections | GET | `/v1/collections/featured` | `conn_mod_def::GKPBuBBGn-Y::3lscNXuYQAKan_Qnd_PAaw` |
| List My Collections | GET | `/collections` | `conn_mod_def::GKPBuAtVtX4::eT4eyEtrQSqv1dfgv8QdeQ` |

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Video | GET | `/videos/videos/{{id}}` | `conn_mod_def::GKPBuKbSAyc::W0VPYn70QsuPwY3--P1vRQ` |
| List Popular Videos | GET | `/v1/videos/popular` | `conn_mod_def::GKPBuMtKew4::pAY4uu7HR1eYzc_tyW-exQ` |
| Search Videos | GET | `/v1/videos/search` | `conn_mod_def::GKPBuMWoxKk::fAcwN2rDQ8-Imxns1UFzNA` |

### Photos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Photo | GET | `/photos/{{id}}` | `conn_mod_def::GKPBt_4oMYI::zyH0hf3uSmygKILirV1bXw` |
| Search Photos | GET | `/v1/search` | `conn_mod_def::GKPBuM0VEq0::J6U7UN72TDCEg5VXcVctqg` |

### CuratedPhotos

| Action | Method | Path | Action id |
|---|---|---|---|
| List Curated Photos | GET | `/v1/curated` | `conn_mod_def::GKPBuBzR38E::P94Y1CAYQsGwxX4QX8ViVg` |

## When a call fails

The error comes from Pexels, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/pexels

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
