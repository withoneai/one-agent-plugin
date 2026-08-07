---
name: parsehub
description: ParseHub is a visual, no-code web scraping tool that enables users to extract structured data from dynamic websites—including those built with JavaScript or AJAX—and export the results via JSON, CSV/Excel, or API integration. Read and write Parsehub data through One: runs, projects and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Parsehub, create or update a record there, or build code against the Parsehub API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: parsehub
  generated-from: one-knowledge-base
---

# Parsehub through One

ParseHub is a visual, no-code web scraping tool that enables users to extract structured data from dynamic websites—including those built with JavaScript or AJAX—and export the results via JSON, CSV/Excel, or API integration.

One exposes Parsehub through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `parsehub` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Parsehub is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Parsehub account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Runs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Run by Run Token (Poll Run Status) | GET | `/api/v2/runs/{{runToken}}` | `conn_mod_def::GJ59Fdf9lC0::bXoRLElaQaapOVLUXK8mZA` |
| Get a Run’s Extracted Data | GET | `/api/v2/runs/{{runToken}}/data` | `conn_mod_def::GJ59Ff1v8Ao::J2slAWSZRkqUygmslkbu0w` |
| Cancel a Run | POST | `/api/v2/runs/{{runToken}}/cancel` | `conn_mod_def::GJ59FYoI-iY::ZHAtOKc5Q1-ko3k-C6v13w` |
| Cancel and Delete a Run | DELETE | `/api/v2/runs/{{runToken}}` | `conn_mod_def::GJ59FZ6kdqc::v8W0ftYbQPeO69PHHj7FVQ` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project (with Recent Runs) | GET | `/api/v2/projects/{{projectToken}}` | `conn_mod_def::GJ59FavdZGY::C15u79ZhTICopVievJZxYA` |
| Get a Project’s Last Ready Run Data | GET | `/api/v2/projects/{{projectToken}}/last_ready_run/data` | `conn_mod_def::GJ59Fotlb00::Dywh15hlQ6OKeqYVINcFyA` |
| List Projects | GET | `/projects` | `conn_mod_def::GJ59FnSk8hw::kUURk8GJTDmWOXNSgMOXZA` |
| Run a ParseHub Project | POST | `/api/v2/projects/{{projectToken}}/run` | `conn_mod_def::GJ59FnWOkKA::ZyrUy0FITmOaRVuoS1sIqw` |

## When a call fails

The error comes from Parsehub, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/parsehub

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
