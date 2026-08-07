---
name: gamma
description: Gamma is an AI-powered content creation platform for presentations, websites, documents, social media, and graphics, with an API that enables teams to generate content programmatically, automate creation workflows, and scale branded visual assets without coding or design expertise. Read and write Gamma data through One: gammas, generations, gammaanalyticsviewer, gammacardanalytics, gammavieweranalytics, folders and more, 15 actions with real parameter documentation. Use whenever the user asks to look something up in Gamma, create or update a record there, or build code against the Gamma API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gamma
  generated-from: one-knowledge-base
---

# Gamma through One

Gamma is an AI-powered content creation platform for presentations, websites, documents, social media, and graphics, with an API that enables teams to generate content programmatically, automate creation workflows, and scale branded visual assets without coding or design expertise.

One exposes Gamma through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gamma` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Gamma is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Gamma account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Gammas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Gamma Analytics | GET | `/v1.0/gammas/{{gammaId}}/analytics` | `conn_mod_def::GMZvrq8MVtw::YDTu_VxNRpCXvc4undeW5g` |
| Get Gamma Metadata | GET | `/v1.0/gammas/{{gammaId}}` | `conn_mod_def::GMZvr_tsHv4::wC4woI-eSAy6EwEq4Whf5w` |
| Archive a Gamma | POST | `/v1.0/gammas/{{gammaId}}/archive` | `conn_mod_def::GMZvr34IeEA::V0X_AQNHQg67k_oIqOQGtQ` |
| Delete a Gamma | DELETE | `/v1.0/gammas/{{gammaId}}` | `conn_mod_def::GMZvr2i4i1I::NWo5kirSQIKhJweBLnafZw` |
| Export a Gamma | POST | `/v1.0/gammas/{{gammaId}}/export` | `conn_mod_def::GMZvr4RtHjI::qb3Oe3bKSoaM-ecSW3qtYQ` |

### Generations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Generation Status | GET | `/v1.0/generations/{{id}}` | `conn_mod_def::GMZvr2dJTAg::czP7UbDdRm-4bxvnMWf8Dw` |
| Create an Async Generation | POST | `/v1.0/generations` | `conn_mod_def::GMZvr4pmAso::NXYswp3eQLiw0yLu_-a8Ig` |
| Create Generation From Template | POST | `/v1.0/generations/from-template` | `conn_mod_def::GMZvrs0fsZw::xSxiZbj1RNiRdwL0WJs4sw` |

### GammaAnalyticsViewer

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Single-Viewer Analytics for a Gamma | GET | `/v1.0/gammas/{{gammaId}}/analytics/viewers/{{userId}}` | `conn_mod_def::GMZvrsTM6Lc::krwsnTNVT5aO5LFu5aYoGw` |

### GammaCardAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Gamma Card Analytics | GET | `/v1.0/gammas/{{gammaId}}/analytics/cards` | `conn_mod_def::GMZvrsbimZo::_YCgAAd0S7afa2-xnd7-sA` |

### GammaViewerAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Gamma Viewer Analytics | GET | `/v1.0/gammas/{{gammaId}}/analytics/viewers` | `conn_mod_def::GMZvrw01Q1U::L3snbMvdRiyfX8Pwkq9nUA` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Folders | GET | `/v1.0/folders` | `conn_mod_def::GMZvr_pPfug::onlxibQHThSvw911UgGqpQ` |

### Themes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Themes Available in the Authenticated Workspace | GET | `/v1.0/themes` | `conn_mod_def::GMZvr_pQDSI::fyrNNlXWQzSBlP2Ua_TStA` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments on a Gamma | GET | `/v1.0/gammas/{{gammaId}}/comments` | `conn_mod_def::GMZvr_zjn9I::1jDG0KC0RcKn1S-Y5LNOEw` |

### Exports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Export Status | GET | `/v1.0/exports/{{id}}` | `conn_mod_def::GMZvsAKiITM::jRmNW8W3S76wXZDZN5yxjg` |

## When a call fails

The error comes from Gamma, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gamma

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
