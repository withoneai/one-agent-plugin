---
name: sendspark
description: Sendspark is a video messaging platform that enables teams to create, personalize, and share asynchronous videos through email and sales workflows, allowing sales, marketing, and customer-facing teams to improve outreach, engagement, and follow-up with integrated video communication tools. Read and write Sendspark data through One: dynamics, dynamiccampaigns, prospects, prospect, apihealthstatus, dynamiccampaignprospects and more, 7 actions with real parameter documentation. Use whenever the user asks to look something up in Sendspark, create or update a record there, or build code against the Sendspark API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sendspark
  generated-from: one-knowledge-base
---

# Sendspark through One

Sendspark is a video messaging platform that enables teams to create, personalize, and share asynchronous videos through email and sales workflows, allowing sales, marketing, and customer-facing teams to improve outreach, engagement, and follow-up with integrated video communication tools.

One exposes Sendspark through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "sendspark", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Sendspark is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Sendspark account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Dynamics

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workspace Dynamic Video Campaign | POST | `/dynamics` | `conn_mod_def::GK58gQhNB8A::moU2Q8iyQe2zI1OycDJ_Ug` |

### DynamicCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Dynamic Campaigns | GET | `/dynamics` | `conn_mod_def::GK58gd2Ah1A::VOqy5Zx5ShiUosCLvLr2sA` |

### Prospects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Prospect Data by Email for a Dynamic in a Workspace | GET | `/dynamics/{{dynamicId}}/prospects/{{email}}` | `conn_mod_def::GK58guGlSNg::4ZE9s1TASp2c2JTXsgxOZw` |

### Prospect

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Single Prospect to a Workspace Dynamic Campaign | POST | `/dynamics/{{dynamicId}}/prospect` | `conn_mod_def::GK58gSRps2g::aUWPzo8-SkCfCbUJzyuXwg` |

### ApiHealthStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Health Status | GET | `/v1/auth/health` | `conn_mod_def::GK58gRHKaaA::AzpmjirgQQ2Y-SHe58jsHQ` |

### DynamicCampaignProspects

| Action | Method | Path | Action id |
|---|---|---|---|
| Add and Process Multiple Prospects to a Dynamic Campaign | POST | `/dynamics/{{dynamicsId}}/prospects/bulk` | `conn_mod_def::GK58gRZcYVg::yXDyq3OWQA6gRFsjgZBsvA` |

### DynamicCampaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace Dynamic Campaign by ID | GET | `/dynamics/{{dynamicId}}` | `conn_mod_def::GK58gSAo0YA::CnoLb-k1T4CJ8CHcFuQx9Q` |

## When a call fails

The error comes from Sendspark, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sendspark

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
