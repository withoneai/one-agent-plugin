---
name: keyword-com
description: Keyword.com is an SEO rank tracking platform that provides keyword position monitoring, competitor tracking, and white-label reporting, allowing marketers, agencies, and developers to analyze search visibility and integrate ranking data into dashboards, reports, and automated workflows. Read and write Keyword.com data through One: keywords, projects, groups, shareofvoicehistory, users, alerts and more, 22 actions with real parameter documentation. Use whenever the user asks to look something up in Keyword.com, create or update a record there, or build code against the Keyword.com API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: keyword-com
  generated-from: one-knowledge-base
---

# Keyword.com through One

Keyword.com is an SEO rank tracking platform that provides keyword position monitoring, competitor tracking, and white-label reporting, allowing marketers, agencies, and developers to analyze search visibility and integrate ranking data into dashboards, reports, and automated workflows.

One exposes Keyword.com through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `keyword-com` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Keyword.com is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Keyword.com account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Keywords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Keyword | GET | `/groups/{{projectName}}/keywords/{{keywordId}}` | `conn_mod_def::GLMLMdLGmqA::-kmfjAo3ToGixEF9PB5F9g` |
| List Keywords | GET | `/groups/{{projectName}}/keywords` | `conn_mod_def::GLMLMcwBQFg::OuvyO4-OQgGxj25uyntgXg` |
| Add Keywords | POST | `/groups/{{projectName}}/keywords` | `conn_mod_def::GLMLMQAhYyg::QQ2cm9sbQnOw2Y8wgzBEIg` |
| Bulk Delete Keywords | DELETE | `/projects/{{projectId}}/keywords` | `conn_mod_def::GLMLMQWy7Kg::d-v8LDYyS7WeXJ8xIJ5Mlg` |
| Delete Keyword | DELETE | `/groups/{{projectName}}/keywords/{{keywordId}}` | `conn_mod_def::GLMLMQAluIg::WrvFv_TjRsSVVPGewj-GWg` |
| Refresh Keywords | POST | `/api/v2/keywords/refresh` | `conn_mod_def::GLMLMc3H3yg::bYVsoPtqT_S99jKx-f3QDA` |
| Update Keywords | PATCH | `/projects/{{projectId}}/keywords` | `conn_mod_def::GLMLMc9oDiA::3etF7M7ZQ-eF6DOVk8i4pw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project | GET | `/groups/{{projectName}}` | `conn_mod_def::GLMLMkw0a2A::uitAs_L1S22lnip0mst4OA` |
| List Projects | GET | `/api/v2/groups/active` | `conn_mod_def::GLMLMkw60Bg::oqmKrwN2QGGHaNtbxykP8Q` |
| Restore Project | GET | `/groups/{{projectName}}/undo/archive` | `conn_mod_def::GLMLMlyT02A::QjvsV7VwQ5uVLNlLrMs6Rg` |
| Delete Project | DELETE | `/groups/{{projectName}}` | `conn_mod_def::GLMLMlLwtVg::0sFvFihbRaKn-zvRkZmWWA` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive Project | PUT | `/groups/{{projectName}}` | `conn_mod_def::GLMLMc9T1lg::yRsBKo-LRiCOBzivoBJ3Tw` |
| Create Project | POST | `/groups` | `conn_mod_def::GLMLMlExs8A::Yf95KFtcTZ6J02pGREIdYw` |

### ShareOfVoiceHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get History | GET | `/projects/{{projectId}}/mindshare/from-cache` | `conn_mod_def::GLMLM5gbdeA::tCFj5g3pSM-_zE50et3U6Q` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/users/self` | `conn_mod_def::GLMLMQGDYEA::3rNqr7LLS_i7JDcOS1XtFw` |

### Alerts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Alerts | GET | `/alerts` | `conn_mod_def::GLMLMTM8r2A::CDjmwQVPRt6oaIildKg2pw` |

### Competitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Competitors | GET | `/metrics/{{projectName}}/competitors/{{keywordId}}/history` | `conn_mod_def::GLMLMuJELPg::sG58GurLSTahOUWErrNbrA` |

### Regions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Regions | GET | `/groups/{{projectName}}/regions` | `conn_mod_def::GLMLMuY11aA::IiHza19gRJGJP9IfkbT4DA` |

### KeywordMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Keyword Metrics | GET | `/groups/{{projectName}}/metrics` | `conn_mod_def::GLMLMu0pQOA::WlEiOivzTd-zqgCpNbAwIg` |

### TopPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Top Pages | GET | `/groups/{{projectName}}/keywords/ranking-urls` | `conn_mod_def::GLMLMu-C0OA::XUV-n-lwTSOXmH912dsd4g` |

### RankHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Rank History | POST | `/keywords/chart` | `conn_mod_def::GLMLMvMdh7g::nLPyyz8jSPKtGe4Puraqxg` |

### Metrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest | GET | `/metrics/{{projectName}}/mindshare/latest` | `conn_mod_def::GLMLM4dAC8g::ItZVUNGIS0CVrACrRFdjGw` |

## When a call fails

The error comes from Keyword.com, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/keyword-com

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
