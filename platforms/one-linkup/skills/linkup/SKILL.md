---
name: linkup
description: Linkup is a workflow automation platform that connects applications, APIs, and internal tools, enabling teams to build automated processes, move data between systems, and streamline operational tasks without managing custom integration infrastructure. Read and write Linkup data through One: tasks, research, webpage, creditsbalance, researchtask, search and more, 10 actions with real parameter documentation. Use whenever the user asks to look something up in Linkup, create or update a record there, or build code against the Linkup API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: linkup
  generated-from: one-knowledge-base
---

# Linkup through One

Linkup is a workflow automation platform that connects applications, APIs, and internal tools, enabling teams to build automated processes, move data between systems, and streamline operational tasks without managing custom integration infrastructure.

One exposes Linkup through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `linkup` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Linkup is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Linkup account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task | GET | `/v1/tasks/{{id}}` | `conn_mod_def::GKqCDoPY-bA::_fxRPnVDSuKmxPRc-cHYDw` |
| List Tasks | GET | `/tasks` | `conn_mod_def::GKqCDtCUEoA::AZVJOfFFQfCuLtlKLgR-TQ` |
| Create Tasks | POST | `/v1/tasks` | `conn_mod_def::GKqCDoTIlYg::GSrwavPUTgu3ylK1We_gjw` |

### Research

| Action | Method | Path | Action id |
|---|---|---|---|
| List Research Tasks | GET | `/v1/research` | `conn_mod_def::GKqCDa0o_8g::_OJmp_NrTkWraxpXGGWb1g` |
| Create a Research Task | POST | `/research` | `conn_mod_def::GKqCDaznHJg::7uqFiGo0RRqIJsJ1aYiapQ` |

### Webpage

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Webpage | POST | `/fetch` | `conn_mod_def::GKqCDbbrUhg::6kKLtkyZSuaTBS6dc4YTLA` |

### CreditsBalance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credits Balance | GET | `/credits/balance` | `conn_mod_def::GKqCDduayPA::VRhuazdSQKun8oGB2UNVGw` |

### ResearchTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Research Task | GET | `/v1/research/{{id}}` | `conn_mod_def::GKqCDfhJUHA::LdKxU2EgQDKu_nwRiGt8Bw` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Web Content | POST | `/v1/search` | `conn_mod_def::GKqCDoVZPMg::J6jXYwHOSdOoGvoyfeR5og` |

### Responses

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Response | POST | `/v1/responses` | `conn_mod_def::GKqCDtMeOAA::vuNg_nBRRKqO1Rt8yZxheA` |

## When a call fails

The error comes from Linkup, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/linkup

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
