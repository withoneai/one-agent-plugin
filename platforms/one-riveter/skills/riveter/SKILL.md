---
name: riveter
description: Riveter is a no-code AI platform that automates web research and data enrichment by using intelligent agents to browse, scrape, read documents, and return structured, auditable outputs for large datasets. Read and write Riveter data through One: projects, runstatus, scrapes, projectruns, rundata, runs and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Riveter, create or update a record there, or build code against the Riveter API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: riveter
  generated-from: one-knowledge-base
---

# Riveter through One

Riveter is a no-code AI platform that automates web research and data enrichment by using intelligent agents to browse, scrape, read documents, and return structured, auditable outputs for large datasets.

One exposes Riveter through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `riveter` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Riveter is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Riveter account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All Project Configuration Data | GET | `/all_project_data` | `conn_mod_def::GJ6SfeibSVc::HjxgzAxvQ12h18mietyQSw` |
| Run a Project | POST | `/v1/run_project` | `conn_mod_def::GJ6Sfhu_CVI::vvhRjPEFRJiohkzDQyCVVw` |

### RunStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Run’s Status | GET | `/run_status` | `conn_mod_def::GJ6SfpQIOFg::ZHs_ow4tSYGsWrIF-SDXJw` |

### Scrapes

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape a Webpage | POST | `/v1/scrape` | `conn_mod_def::GJ6Sfsf5U1U::7qLNSsTiRjaGlDN4zfFGRg` |

### ProjectRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Stop a Project Run | POST | `/stop_run` | `conn_mod_def::GJ6SfqfpWEQ::tIxupbftQOuJUmnbfN4ZSA` |

### RunData

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Run Data | GET | `/v1/run_data` | `conn_mod_def::GJ6SfhKAv2w::D0yja258RgSSfD5Z-ZM6tQ` |

### Runs

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Riveter Extraction Job | POST | `/v1/run` | `conn_mod_def::GJ6SfhdTAN4::rynTyem2QkW5ZZJ6Ipjlzw` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Current Account | GET | `/account` | `conn_mod_def::GJ6SffMvbSg::Kc5-vkdtR3iDimYO-MOiPg` |

## When a call fails

The error comes from Riveter, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/riveter

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
