---
name: browse-ai
description: Browse AI is a no-code, AI-powered web scraping and monitoring platform that enables users to extract structured data from any website, set automated alerts for changes, and funnel the output into spreadsheets, APIs or workflows—all without writing custom code. Read and write Browse AI data through One: robotmonitors, robots, robottasks, robotwebhooks, bulkruns, robotbulkruns and more, 19 actions with real parameter documentation. Use whenever the user asks to look something up in Browse AI, create or update a record there, or build code against the Browse AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: browse-ai
  generated-from: one-knowledge-base
---

# Browse AI through One

Browse AI is a no-code, AI-powered web scraping and monitoring platform that enables users to extract structured data from any website, set automated alerts for changes, and funnel the output into spreadsheets, APIs or workflows—all without writing custom code.

One exposes Browse AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `browse-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Browse AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Browse AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### RobotMonitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Robot’s Monitors | GET | `/robots/{{robotId}}/monitors` | `conn_mod_def::GJ0_QxjeLYQ::p8IbIdYAQj67V15vL20-ag` |
| Create a Robot Monitor | POST | `/robots/{{robotId}}/monitors` | `conn_mod_def::GJ0_QYzCygQ::jW0Aik0mTU65WbpiAONYLA` |
| Delete a Robot’s Monitor | DELETE | `/robots/{{robotId}}/monitors/{{monitorId}}` | `conn_mod_def::GJ0_QgB360w::tIqzFu5IRrGM1y84AQV_Cg` |
| Update a Robot’s Monitor | PATCH | `/robots/{{robotId}}/monitors/{{monitorId}}` | `conn_mod_def::GJ0_Q8IA21E::vvmnOEA5ShKvRffrc_Yy2w` |

### Robots

| Action | Method | Path | Action id |
|---|---|---|---|
| List Robots (Account) | GET | `/robots` | `conn_mod_def::GJ0_RFw0cdY::bXQ-v7ErQguWuB63Onr9mw` |
| Retrieve a Robot by ID | GET | `/robots/{{robotId}}` | `conn_mod_def::GJ0_RM7LiQw::cfCfVxaHTWeu9zzIVs4Weg` |
| Update a Robot’s Cookies | PATCH | `/robots/{{robotId}}/cookies` | `conn_mod_def::GJ0_RXAePsA::5ZrESeJLRv-GQCHdHMBIHg` |

### RobotTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Robot's Tasks | GET | `/robots/{{robotId}}/tasks` | `conn_mod_def::GJ0_RtDAVyk::X57fRmLfSuW0bdcnt2_6Tg` |
| Retrieve a Robot Task | GET | `/robots/{{robotId}}/tasks/{{taskId}}` | `conn_mod_def::GJ0_R1m2Qvc::FxxPap8iSbipRDkH_4wNYw` |
| Run a Robot (Create a Robot Task) | POST | `/robots/{{robotId}}/tasks` | `conn_mod_def::GJ0_R-nue40::T2EGnSTrRCShjzWyN90nCg` |

### RobotWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Robot’s Webhooks | GET | `/robots/{{robotId}}/webhooks` | `conn_mod_def::GJ0_SU5gD_s::ro8yYi7ARBylcDEoi8EwEA` |
| Create a Robot Webhook | POST | `/robots/{{robotId}}/webhooks` | `conn_mod_def::GJ0_SGHoQWk::meecb_irQhqX-dwP_E9yow` |
| Delete a Robot's Webhook | DELETE | `/robots/{{robotId}}/webhooks/{{webhookId}}` | `conn_mod_def::GJ0_SNVen-Y::saZYTp0yTE2YVI3SdpAqUg` |

### BulkRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Robot’s Bulk Runs | GET | `/robots/{{robotId}}/bulk-runs` | `conn_mod_def::GJ0_QKxRiDo::U677e8y7StCo42gOADwaeA` |
| Bulk Run Tasks for a Robot | POST | `/robots/{{robotId}}/bulk-runs` | `conn_mod_def::GJ0_P4pBDwA::o1Ms5aU3QuSiiJKarDmq2w` |

### RobotBulkRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Robot’s Bulk Run | GET | `/robots/{{robotId}}/bulk-runs/{{bulkRunId}}` | `conn_mod_def::GJ0_QCuiuv8::_9MSQoZsTPSekRBy62s--A` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Teams | GET | `/teams` | `conn_mod_def::GJ0_QRS5GmU::gHqyF5fAQiG80yDrZXGUrg` |

### Monitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Robot’s Monitor | GET | `/robots/{{robotId}}/monitors/{{monitorId}}` | `conn_mod_def::GJ0_QqXDj0w::2JqJEGqdRpG5xV0dnXgkMw` |

### SystemStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get System Status | GET | `/status` | `conn_mod_def::GJ0_RdaCY-M::DRMFz4AWRUOoWmEzLZXDQw` |

## When a call fails

The error comes from Browse AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/browse-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
