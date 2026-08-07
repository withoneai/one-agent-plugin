---
name: zenrows
description: Zenrows is a web data infrastructure platform that provides APIs and tools to fetch, extract, crawl, monitor, and batch access live web content, including dynamic and protected pages, enabling developers, agents, and data teams to collect reliable web data at scale. Read and write 'Zenrows ' data through One: jobs, hmackeys, jobruns, jobwebhook, jobinputs, runexports and more, 26 actions with real parameter documentation. Use whenever the user asks to look something up in 'Zenrows ', create or update a record there, or build code against the 'Zenrows ' API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: zenrows
  generated-from: one-knowledge-base
---

# 'Zenrows ' through One

Zenrows is a web data infrastructure platform that provides APIs and tools to fetch, extract, crawl, monitor, and batch access live web content, including dynamic and protected pages, enabling developers, agents, and data teams to collect reliable web data at scale.

One exposes 'Zenrows ' through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `zenrows` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm 'Zenrows ' is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real 'Zenrows ' account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Task Content for a Job | GET | `/v1/jobs/{{jobId}}/tasks/{{taskId}}/content` | `conn_mod_def::GMiZkNcR_bs::PlDYvtCSTcqe5DoQU8x4Lw` |
| Get Job Results | GET | `/v1/jobs/{{id}}/results` | `conn_mod_def::GMiZkMXbOrI::FuWFlOiVQDiGghCkWU4sBQ` |
| Get Job Status | GET | `/v1/jobs/{{jobId}}` | `conn_mod_def::GMiZkNyO8j8::c-wl20u5RK6I85BMo0xgHg` |
| List Jobs | GET | `/v1/jobs` | `conn_mod_def::GMiZkDNck3Y::GA0MnxYFTK6v3yqd-OYNXA` |
| Add Tasks to a Job | POST | `/v1/jobs/{{jobId}}/tasks` | `conn_mod_def::GMiZlDYtgfk::ZW52P0_VSSiiNUaWY1tJbw` |
| Cancel a Job | POST | `/v1/jobs/{{id}}/cancel` | `conn_mod_def::GMiZkrnAVG8::X7YU-5xOQhexGJuKeOREzw` |
| Change a Job Schedule State | POST | `/v1/jobs/{{id}}/schedule/state` | `conn_mod_def::GMiZk10BUfY::LEJuptjxTZWxfht48wPwkA` |
| Close a Job | POST | `/v1/jobs/{{id}}/close` | `conn_mod_def::GMiZkqk8_80::2uB1HkA0RGKqbHfe-HGmrQ` |
| Create a Job | POST | `/v1/jobs` | `conn_mod_def::GMiZkrY4qmE::Kp_6-Bl8ShWEbVPfxEdDTg` |
| Pause a Job's Current Run | POST | `/v1/jobs/{{id}}/pause` | `conn_mod_def::GMiZk1fHBDA::yTw-NR08Tvi4ASYlwivOTQ` |
| Rerun a Job | POST | `/v1/jobs/{{jobId}}/rerun` | `conn_mod_def::GMiZk2BkysE::4F2em91eTnqSt93OCHx6uA` |
| Resume a Job Run | POST | `/v1/jobs/{{id}}/resume` | `conn_mod_def::GMiZk1_PphE::-8GJm20iR86H1kva6pNx5g` |

3 more Jobs actions are available through search.

### HmacKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List HMAC Keys | GET | `/v1/hmac/keys` | `conn_mod_def::GMiZkFsGcJ0::8Iiaw99rTDyvZr-l_4pnAA` |
| Discard a Staged HMAC Key Rotation Candidate | DELETE | `/v1/hmac/keys/rotate` | `conn_mod_def::GMiZkBo0gN8::XK-W_PY1QhC92jOyNOFEsQ` |
| Finalize HMAC Key Rotation | POST | `/v1/hmac/keys/rotate/finalize` | `conn_mod_def::GMiZkrXmr2g::XdmmHpPJSXinJrVbudDj4w` |
| Rotate HMAC Keys | POST | `/v1/hmac/keys/rotate` | `conn_mod_def::GMiZkh7R9ms::SsfNSsZuSnGnz-GNY_en1Q` |

### JobRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Job Runs | GET | `/v1/jobs/{{id}}/runs` | `conn_mod_def::GMiZkOP26ns::fiIG-Jm_TWqcxdjdthsVmg` |
| Delete a Job Run | DELETE | `/v1/jobs/{{id}}/runs/{{runId}}` | `conn_mod_def::GMiZkBhjqi4::wyC0IQ4uQfeIRkYhHsTMaw` |

### JobWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a Job Webhook | DELETE | `/v1/jobs/{{id}}/webhook` | `conn_mod_def::GMiZkCYgjAE::cxO_Y80rTbu4pmo4etbOxg` |

### JobInputs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Job Inputs | POST | `/v1/job_inputs` | `conn_mod_def::GMiZkuEAJR4::yHkIkVNKQOG79faC6L32jg` |

### RunExports

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Run Export for a Job | POST | `/v1/jobs/{{jobId}}/runs/{{runId}}/exports` | `conn_mod_def::GMiZk92cBSU::x5p0ZmjbQPeSEVrS_f9hgQ` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Test a Webhook | POST | `/v1/webhook/test` | `conn_mod_def::GMiZlHjjZN4::bfvgPOdmTdOTgPAz9-HFSQ` |

### ZenrowsFetch

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Using Zenrows | GET | `/v1/` | `conn_mod_def::GMiZlgAl56k::WK4s4XWXSKSHk00-x2aBmQ` |

This lists 23 of 26 actions. For anything not here, call `search_one_platform_actions` with platform `zenrows`. The full catalog is at https://www.withone.ai/knowledge/zenrows.

## When a call fails

The error comes from 'Zenrows ', not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/zenrows

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
