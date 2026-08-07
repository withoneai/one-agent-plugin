---
name: screenshotone
description: ScreenshotOne is a screenshot and website capture API that enables developers to programmatically generate screenshots, PDFs, and previews of web pages, allowing applications and automation workflows to capture visual website content reliably at scale. Read and write ScreenshotOne data through One: screenshots, apiusagemetrics, devices and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in ScreenshotOne, create or update a record there, or build code against the ScreenshotOne API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: screenshotone
  generated-from: one-knowledge-base
---

# ScreenshotOne through One

ScreenshotOne is a screenshot and website capture API that enables developers to programmatically generate screenshots, PDFs, and previews of web pages, allowing applications and automation workflows to capture visual website content reliably at scale.

One exposes ScreenshotOne through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `screenshotone` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ScreenshotOne is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ScreenshotOne account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Screenshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Take Screenshot or PDF | GET | `/take` | `conn_mod_def::GLSyPxhKryA::wHh8lUy3S1iMMLkwMF19-A` |
| Bulk Screenshot or Render | POST | `/bulk` | `conn_mod_def::GLSyPkEZOMg::VhnvKrBpQTCPUX8oeVf4yw` |
| Take Screenshot or PDF | POST | `/take` | `conn_mod_def::GLSyPkNY4-A::5QfvDvZBTSCA82GK-70b3g` |

### ApiUsageMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Usage Metrics | GET | `/usage` | `conn_mod_def::GLSyPiKjO6A::c2VFVkuRTmKcZNNGdo3eUQ` |

### Devices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Devices | GET | `/devices` | `conn_mod_def::GLSyPijU-Ng::WSDVoPhMSWixcgGll7Nziw` |

## When a call fails

The error comes from ScreenshotOne, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/screenshotone

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
