---
name: imgix
description: Imgix is an image and video optimization platform that provides real-time media processing, transformation, and delivery APIs, allowing developers and digital teams to serve responsive, high-performance visual content across websites, apps, and eCommerce experiences. Read and write Imgix data through One: sources, sourceassets, assets, reports, uploadsessions, sourceasset and more, 18 actions with real parameter documentation. Use whenever the user asks to look something up in Imgix, create or update a record there, or build code against the Imgix API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: imgix
  generated-from: one-knowledge-base
---

# Imgix through One

Imgix is an image and video optimization platform that provides real-time media processing, transformation, and delivery APIs, allowing developers and digital teams to serve responsive, high-performance visual content across websites, apps, and eCommerce experiences.

One exposes Imgix through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `imgix` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Imgix is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Imgix account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Source by source ID | GET | `/api/v1/sources/{{sourceId}}` | `conn_mod_def::GLThwOUZVpA::ldwnEAbNR7irp88z00-tzA` |
| List Sources | GET | `/api/v1/sources` | `conn_mod_def::GLThwAdaQ3g::RrY48RdsT-qOpqbHqMFjDA` |
| Create a Source | POST | `/api/v1/sources` | `conn_mod_def::GLThwMRMaUg::7tP9WNGERUiq7cVejSPbQQ` |
| Overwrite an Uploaded Asset for a Source | POST | `/api/v1/sources/{{sourceId}}/upload/{{originPath}}` | `conn_mod_def::GLThv4k3yDA::LS1Jql2sT7qsDHJyvfVdnQ` |
| Publish a Source Asset | POST | `/api/v1/sources/{{sourceId}}/publish` | `conn_mod_def::GLThv4sgiUg::bpUUzK20RjKes4vEUCRXrQ` |
| Update a Source | PATCH | `/api/v1/sources/{{sourceId}}` | `conn_mod_def::GLThwM2T6jA::MrNfek0sQgWTDvwfQ7vfhQ` |
| Upload an Asset to a Source at Origin Path | POST | `/api/v1/sources/{{sourceId}}/upload/{{originPath}}` | `conn_mod_def::GLThv5qV9tg::0z-COhAVTXyNFlFbwxhsfg` |

### SourceAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Refresh a Source Asset | POST | `/api/v1/sources/{{sourceId}}/assets/refresh/{{originPath}}` | `conn_mod_def::GLThvxLH4ag::-izN2aWDSyWZs9Iw8YfvHQ` |
| Unpublish a Source Asset | POST | `/api/v1/sources/{{sourceId}}/unpublish` | `conn_mod_def::GLThv4-H_jA::8ugZiAYbQLSkAukvjMIA3g` |
| Update a Source Asset | PATCH | `/api/v1/sources/{{sourceId}}/assets/{{originPath}}` | `conn_mod_def::GLThvxRpnxA::B2WDpDgSTtGxGTc39mp_WA` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Assets for a Source | GET | `/api/v1/sources/{{sourceId}}/assets` | `conn_mod_def::GLThvwsXthg::j9KVXBYFQKKSyJ1dCzxi1g` |
| Add an Asset to a Source Asset Manager | POST | `/api/v1/sources/{{sourceId}}/assets/add/{{originPath}}` | `conn_mod_def::GLThvxTEkFA::IqvpwQB5RpWshtmEcLDz6Q` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Reports | GET | `/api/v1/reports` | `conn_mod_def::GLThwAz4uZA::4Zn4kSkHQuSBGkWNCtEwWg` |
| Retrieve a Report by ID | GET | `/api/v1/reports/{{reportId}}` | `conn_mod_def::GLThwCXuSCA::DjlOcEaxSm-ugxmY-Cy6LQ` |

### UploadSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Close an Upload Session for a Source | POST | `/api/v1/sources/{{sourceId}}/upload-sessions/{{sessionId}}` | `conn_mod_def::GLThwBYfCmA::WnsuZ_G6SaqKJktppU-ghw` |
| Open an Upload Session for a Source Origin Path | POST | `/api/v1/sources/{{sourceId}}/upload-sessions/{{originPath}}` | `conn_mod_def::GLThv45xTnA::t_qat0DqRViXJMBi7LUrpA` |

### SourceAsset

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Source Asset | GET | `/api/v1/sources/{{sourceId}}/assets/{{originPath}}` | `conn_mod_def::GLThvxErg0A::9jp4NiJIQTy7Z0Cln4w12g` |

### ImgixCachePurge

| Action | Method | Path | Action id |
|---|---|---|---|
| Purge an Asset from the Imgix Cache | POST | `/api/v1/purge` | `conn_mod_def::GLThwCQvjNg::CASCFuKtR12YiB_ONFW4HQ` |

## When a call fails

The error comes from Imgix, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/imgix

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
