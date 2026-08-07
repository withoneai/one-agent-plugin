---
name: hex
description: Hex is a collaborative data workspace that combines notebooks, SQL, Python, visualization, and app-building tools, enabling data teams to analyze data, build interactive reports and applications, and share insights through a unified platform with developer-friendly integrations. Read and write Hex data through One: projects, cells, groups, collections, dataconnections, threads and more, 49 actions with real parameter documentation. Use whenever the user asks to look something up in Hex, create or update a record there, or build code against the Hex API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: hex
  generated-from: one-knowledge-base
---

# Hex through One

Hex is a collaborative data workspace that combines notebooks, SQL, Python, visualization, and app-building tools, enabling data teams to analyze data, build interactive reports and applications, and share insights through a unified platform with developer-friendly integrations.

One exposes Hex through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `hex` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Hex is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Hex account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/v1/projects/{{projectId}}` | `conn_mod_def::GLtZPRutN2g::NWpcj11zRUyQDOv315_KOg` |
| List Projects | GET | `/projects` | `conn_mod_def::GLtZPmtqX8g::iZhNacHXTWu95qerhR1vEA` |
| Create Project | POST | `/projects` | `conn_mod_def::GLtZOlFVKVA::1XGhWqEMS46pcgpnYm2Hhg` |
| Edit Project Sharing Users for a Project | PATCH | `/v1/projects/{{projectId}}/sharing/users` | `conn_mod_def::GLtZPB-ouMA::8VybeTV3Qk2HN5N1Xe0BaA` |
| Edit Sharing Collections for a Project | PATCH | `/v1/projects/{{projectId}}/sharing/collections` | `conn_mod_def::GLtZPDfifRg::3eP-YmTXR7Gtsus2mDHJew` |
| Edit Sharing Groups Using Projects v1 | PATCH | `/v1/projects/{{projectId}}/sharing/groups` | `conn_mod_def::GLtZPCnH__A::Efq0D4CxQV2__RULKpSYpg` |
| Edit Workspace and Public Sharing for a Project | PATCH | `/v1/projects/{{projectId}}/sharing/workspaceAndPublic` | `conn_mod_def::GLtZPDoR-5A::lCHbo4xiTBqbWXwdkbg9jA` |
| Export Project | POST | `/api/v1/projects/export` | `conn_mod_def::GLtZPKBgC9A::cwugbJhbTQm5P83PcszytA` |
| Run a Project | POST | `/v1/projects/{{projectId}}/runs` | `conn_mod_def::GLtZQCFquyg::Jwx9FpPLQXm7D0ZFGAv6Qg` |
| Update Project | PATCH | `/v1/projects/{{projectId}}` | `conn_mod_def::GLtZQKHxuyA::T0h6ePcNReuJnkvxfO4ETg` |

### Cells

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cell | GET | `/v1/cells/{{cellId}}` | `conn_mod_def::GLtZPJajVwA::DWiQWeuUS2C3lHCbR3g_WA` |
| Get Chart Image Using Cells Image | GET | `/v1/cells/{{cellId}}/image` | `conn_mod_def::GLtZPKBq0aA::0uYKESF4TEii4rSOoSd_1g` |
| List Cells | GET | `/cells` | `conn_mod_def::GLtZPa3SOeA::dbJaPKEPRyCmsjPgKHca3A` |
| Create Cell | POST | `/cells` | `conn_mod_def::GLtZOba5QEg::LU00RdOkRgmrapdOxX0l2g` |
| Delete a Cell | DELETE | `/v1/cells/{{cellId}}` | `conn_mod_def::GLtZOrPZBng::dLCjMiRbQIWbtXw3cIoWcg` |
| Update a Cell | PATCH | `/v1/cells/{{cellId}}` | `conn_mod_def::GLtZPsuhuMg::1Qy8fosaTN-OLHK_zCg5ug` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group | GET | `/v1/groups/{{groupId}}` | `conn_mod_def::GLtZPRzLVYA::UpTN_ztFSXe2GGktgG49Aw` |
| List Groups | GET | `/groups` | `conn_mod_def::GLtZPjC8WxA::Rj9P0-ExS3-kFtQ5GHWz1g` |
| Create Group | POST | `/groups` | `conn_mod_def::GLtZOkvVL-g::WXAXvv5bQUaUbSI7gdVVaQ` |
| Delete a Group | DELETE | `/v1/groups/{{groupId}}` | `conn_mod_def::GLtZOrDmtQA::y8fREuHoSJuCcgxvUAPcSQ` |
| Edit a Group | PATCH | `/v1/groups/{{groupId}}` | `conn_mod_def::GLtZPBr-1Ag::4cDuKjhASJKHhbOGKRCkVw` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection | GET | `/v1/collections/{{collectionId}}` | `conn_mod_def::GLtZPIww6qg::f-Mc3TQ5QymcXIquCkRvEg` |
| List Collections | GET | `/collections` | `conn_mod_def::GLtZPdcviSg::RpInUUgAT52DexVuR7Zp8g` |
| Create Collection | POST | `/collections` | `conn_mod_def::GLtZOZS3UYg::qxcKsW6tQ1GDaVWVkNYsLg` |
| Edit a Collection | PATCH | `/v1/collections/{{collectionId}}` | `conn_mod_def::GLtZOscqVng::AKXJ9oDNSHaynTJ08NdGkA` |

### DataConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Data Connections | GET | `/data-connections` | `conn_mod_def::GLtZPkbv-uA::AtbHkczmQjGQngsX0hWrLQ` |
| Create Data Connections | POST | `/data-connections` | `conn_mod_def::GLtZObj9Dfg::tWHa9lhKRjmDjxOBpQTbrw` |
| Edit a Data Connection | PATCH | `/v1/data-connections/{{dataConnectionId}}` | `conn_mod_def::GLtZOsc2g6g::ctiRWg4pTg-QeCOW1V2LFw` |
| Update Schema Using Data Connections | PATCH | `/v1/data-connections/{{dataConnectionId}}/schema` | `conn_mod_def::GLtZQIwkYug::ZwUa4HHARQykF2UHRBM8HA` |

### Threads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Thread | GET | `/v1/threads/{{id}}` | `conn_mod_def::GLtZPbSJnfA::TO5GWUC3T0Cy9HZ1Bp3tjA` |
| List Threads Using v1 | GET | `/api/v1/threads` | `conn_mod_def::GLtZPmf5Bsg::Vgh35hBXRpm3efnqwPlHAQ` |
| Create Thread | POST | `/api/v1/threads` | `conn_mod_def::GLtZOlM_6iA::MMQ5fcuxRNSu2ShHbxwxiw` |
| Followup Using v1 Threads | POST | `/v1/threads/{{id}}/followup` | `conn_mod_def::GLtZOZkp7eg::ZM7iBmjwTLCgzaSB505RKA` |

### Guides

| Action | Method | Path | Action id |
|---|---|---|---|
| List Draft Guides | GET | `/guides/draft/list` | `conn_mod_def::GLtZPjdhgyg::CtKtKzxJSj28L_6rmFiBzw` |
| Delete Draft Guide | DELETE | `/v1/guides/draft/{{orgGuideFileId}}` | `conn_mod_def::GLtZO7r9Ecg::kqwzZVfxToiI3VaJxtBWwQ` |
| Publish Guides | POST | `/api/v1/guides/publish` | `conn_mod_def::GLtZPsNi6Zg::07_FomErT0Kf3xy-sGso6w` |
| Upsert Guide Draft | PUT | `/guides/draft` | `conn_mod_def::GLtZQJNcUTg::VdGj8oqpRuSaXyZfmj8KAA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Me | GET | `/users/me` | `conn_mod_def::GLtZPsQZ3Yg::7sCM5s_BSD6ydE4j60qOLw` |
| List Users | GET | `/api/v1/users` | `conn_mod_def::GLtZPuPq1tA::O5jaEAftQemLiPTbbv8NOg` |
| Deactivate a User | POST | `/v1/users/{{userId}}/deactivate` | `conn_mod_def::GLtZOkj5RNA::SB2t5CrNQHCpKEaRvD6mpg` |

### ProjectRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Run Status for a Project Run | GET | `/v1/projects/{{projectId}}/runs/{{runId}}` | `conn_mod_def::GLtZPdcVF6A::sxsk4ri8QMGfvDtxnGx9tA` |
| Cancel a Project Run | DELETE | `/v1/projects/{{projectId}}/runs/{{runId}}` | `conn_mod_def::GLtZOZPiH2g::I6xEfFgpTCGrYkV5vHeguA` |

### PresignedUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Presigned URL for a Project | POST | `/v1/embedding/createPresignedUrl/{{projectId}}` | `conn_mod_def::GLtZOle2P6A::UVl2AYqpSCOsJ5ffB_U0-g` |

### QueriedTables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Queried Tables for a Project | GET | `/v1/projects/{{projectId}}/queriedTables` | `conn_mod_def::GLtZPR2o5EA::NeJ7l5aJTnG8d6UNbLXFsw` |

### SemanticProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Ingest a Semantic Project | POST | `/v1/semantic-(projects\|models)/{{semanticProjectId}}/ingest` | `conn_mod_def::GLtZPb8R5Ag::0Vpcrnw2QlanQ1gvQ4Zpzg` |

### Runs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Runs for a Project | GET | `/v1/projects/{{projectId}}/runs` | `conn_mod_def::GLtZPUvXfjA::eSqX0mTKRQWGSr-kxnfV7w` |

### DataConnection

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Data Connection | GET | `/v1/data-connections/{{dataConnectionId}}` | `conn_mod_def::GLtZPSS9WIg::vtJ_yr__Qqupm3AOg3p-rw` |

### ChartImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Chart Image Using a Project Run Cell | GET | `/v1/projects/{{projectId}}/runs/{{runId}}/cells/{{staticId}}/image` | `conn_mod_def::GLtZPLY4QUg::oWmTUrvMQ3uEb1YoB5t7Dw` |

### SemanticProject

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Semantic Project | PATCH | `/v1/semantic-(projects\|models)/{{semanticProjectId}}` | `conn_mod_def::GLtZQJtVsvg::yFhFuJRdTZ-kIP7Yy-lyYQ` |

## When a call fails

The error comes from Hex, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/hex

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
