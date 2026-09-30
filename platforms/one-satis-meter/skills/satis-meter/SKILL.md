---
name: satis-meter
description: SatisMeter is a customer feedback and survey platform that enables teams to collect NPS, CSAT, and CES responses across web and email, allowing businesses to measure customer satisfaction, automate follow-ups, and connect feedback data with other tools. Read and write SatisMeter data through One: surveyresponses, surveystatistics, campaigns, surveys, projects, responses and more, 6 actions with real parameter documentation. Use whenever the user asks to look something up in SatisMeter, create or update a record there, or build code against the SatisMeter API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: satis-meter
  generated-from: one-knowledge-base
---

# SatisMeter through One

SatisMeter is a customer feedback and survey platform that enables teams to collect NPS, CSAT, and CES responses across web and email, allowing businesses to measure customer satisfaction, automate follow-ups, and connect feedback data with other tools.

One exposes SatisMeter through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "satis-meter", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SatisMeter is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SatisMeter account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SurveyResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Survey Responses for a Campaign | GET | `/api/v3/projects/{{SATIS_METER_PROJECT_ID}}/campaigns/{{campaignId}}/responses` | `conn_mod_def::GMLJWnjXGeM::OZP-LKvaQH-Ou82kzTpkDw` |

### SurveyStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Survey Statistics for a Campaign | GET | `/api/v3/projects/{{SATIS_METER_PROJECT_ID}}/campaigns/{{campaignId}}/statistics` | `conn_mod_def::GMLJWn9un7I::CZyQYwILQNSQuw_FHgFB-A` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Survey for a SatisMeter Project | GET | `/api/v3/projects/{{SATIS_METER_PROJECT_ID}}/campaigns/{{campaignId}}` | `conn_mod_def::GMLJWrKoSPU::YRO-9Y4oTJeuYaI6Wuck6g` |

### Surveys

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Surveys | GET | `/api/v3/projects/{{SATIS_METER_PROJECT_ID}}/campaigns` | `conn_mod_def::GMLJWzlgDNw::c0Za5aziSS6ITZ4ua_nXeQ` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/api/v3/projects/{{SATIS_METER_PROJECT_ID}}` | `conn_mod_def::GMLJWkjgiT8::zigUGAlhSb-YasUUXvKXhA` |

### Responses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Responses for a Project | GET | `/api/v3/projects/{{SATIS_METER_PROJECT_ID}}/responses` | `conn_mod_def::GMLJWmpH7E0::ZliD8CfVTKO50KdDRMxdSg` |

## When a call fails

The error comes from SatisMeter, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/satis-meter

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
