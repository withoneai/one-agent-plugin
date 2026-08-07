---
name: parallel
description: Parallel is an AI-powered browser automation platform that enables teams to run web tasks, extract data, and automate repetitive workflows through cloud browsers and APIs, allowing developers and operators to build reliable automations for dynamic websites and web applications. Read and write Parallel data through One: monitors, findallruns, taskgroupruns, taskgroups, taskruns, taskrunevents and more, 32 actions with real parameter documentation. Use whenever the user asks to look something up in Parallel, create or update a record there, or build code against the Parallel API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: parallel
  generated-from: one-knowledge-base
---

# Parallel through One

Parallel is an AI-powered browser automation platform that enables teams to run web tasks, extract data, and automate repetitive workflows through cloud browsers and APIs, allowing developers and operators to build reliable automations for dynamic websites and web applications.

One exposes Parallel through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `parallel` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Parallel is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Parallel account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Monitors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Monitors | GET | `/v1/monitors` | `conn_mod_def::GK7EhQ1XISg::qeyClCdPRLyofknf-UntHQ` |
| Retrieve a Monitor by ID | GET | `/v1/monitors/{{monitorId}}` | `conn_mod_def::GK7EhU8ETQg::A-wd_8l0T96zG2Q29JyuiQ` |
| Cancel a Monitor | POST | `/v1/monitors/{{monitorId}}/cancel` | `conn_mod_def::GK7Eg_4_q3A::p_Z6sGoDSRqo-6j6Y3frEw` |
| Create Monitor | POST | `/monitors` | `conn_mod_def::GK7EhAl9LBA::zYziPoRhTZOUcAIM1WcTkg` |
| Trigger a Monitor Run | POST | `/v1/monitors/{{monitorId}}/trigger` | `conn_mod_def::GK7EhPm912A::ymIg4k5ISPOv3j2Gsve_8Q` |
| Update a Monitor | POST | `/v1/monitors/{{monitorId}}/update` | `conn_mod_def::GK7EhQneD5g::XhiOSGsOSP6BW3CtB1qrJA` |

### FindAllRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Find All Run Result | GET | `/v1beta/findall/runs/{{findallId}}/result` | `conn_mod_def::GK7Eg39-Aig::j7eKo2GTSpakk_XQpX2X_g` |
| Retrieve FindAll Run Status | GET | `/v1beta/findall/runs/{{findallId}}` | `conn_mod_def::GK7EhBqnOvg::v9GWYoyfSY-efxviOPApLg` |
| Add Enrichment to a FindAll Run | POST | `/v1beta/findall/runs/{{findallId}}/enrich` | `conn_mod_def::GK7EgqOZOQg::IqUKjRqzRf6_IVBuaqHn1w` |
| Create FindAll Run | POST | `/v1beta/findall/runs` | `conn_mod_def::GK7EgpGBwMg::RJFVOWh_SPGL7Tr4zCoddA` |
| Extend a FindAll Run | POST | `/v1beta/findall/runs/{{findallId}}/extend` | `conn_mod_def::GK7EgzD5tmA::YaQavpsISUOJv8a7BoiF6Q` |

### TaskGroupRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Task Group's Runs | GET | `/v1/tasks/groups/{{taskgroupId}}/runs` | `conn_mod_def::GK7EhhkbKgg::S5xQxNvaS7e0KW0lIlZYRg` |
| Retrieve a Task Group Run | GET | `/v1/tasks/groups/{{taskgroupId}}/runs/{{runId}}` | `conn_mod_def::GK7EhsrSEVg::zQiJr1DpSga3XRG1vzQSyA` |
| Add Runs to a Task Group | POST | `/v1/tasks/groups/{{taskgroupId}}/runs` | `conn_mod_def::GK7Ehe57UHA::1u11vXUVQBmUxcNPJDpGDw` |

### TaskGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Task Group | GET | `/v1/tasks/groups/{{taskgroupId}}` | `conn_mod_def::GK7EhhxDTNg::Xyxk8sWRQ6W1n3D1t82M_w` |
| Create Task Group | POST | `/v1/tasks/groups` | `conn_mod_def::GK7EhhyD5AA::JkDKE_eqQ2yPwSVns3yrXQ` |

### TaskRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Task Run | GET | `/v1/tasks/runs/{{runId}}` | `conn_mod_def::GK7Ehr6J9rg::Kz02PAERT5ewsXTmLjTjnw` |
| Create Task Run | POST | `/v1/tasks/runs` | `conn_mod_def::GK7Ehjddl_g::glckKBW-Q5GIT_w1aXvDwQ` |

### TaskRunEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Stream Task Run Events | GET | `/v1beta/tasks/runs/{{runId}}/events` | `conn_mod_def::GK7Eh0osJig::WvpY5jPQR7uc1r23UA2Qwg` |
| Stream Task Run Events | GET | `/v1/tasks/runs/{{runId}}/events` | `conn_mod_def::GK7Eh1Xuhmg::UoK4b44OTDyWmGTL7htKKg` |

### Extract

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Content From URLs | POST | `/v1/extract` | `conn_mod_def::GK7EgnNpZGA::4UKSgG3aSpamhTdQ7thx6w` |

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Chat Completion | POST | `/v1beta/chat/completions` | `conn_mod_def::GK7Egnrn9Lg::o-gLLFXtRI-HxlgyI3oWDQ` |

### FindallRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a FindAll Run | POST | `/v1beta/findall/runs/{{findallId}}/cancel` | `conn_mod_def::GK7EgpS_-9g::_pzzMju6REuam0CwLuWCbA` |

### Candidates

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate FindAll Candidates | POST | `/v1beta/findall/candidates` | `conn_mod_def::GK7EgzAaEHg::64XEKzr0TuCf4DKIhWpe1w` |

### FindAllRunSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a FindAll Run Schema | GET | `/v1beta/findall/runs/{{findallId}}/schema` | `conn_mod_def::GK7EgzUabeg::ZcdFKhx5QmOOTvdJe8ce1Q` |

### FindAllRunSpecification

| Action | Method | Path | Action id |
|---|---|---|---|
| Ingest a FindAll Run Specification | POST | `/v1beta/findall/ingest` | `conn_mod_def::GK7Eg0BPT4A::Z_-du_wMQv6JFpr5LOXkAg` |

### FindallRunEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Stream Events for a FindAll Run | GET | `/v1beta/findall/runs/{{findallId}}/events` | `conn_mod_def::GK7EhHppOQA::V1EJ06YVQx2Tla4n_iognw` |

### MonitorEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Monitor's Events | GET | `/v1/monitors/{{monitorId}}/events` | `conn_mod_def::GK7EhHpxIHA::2NL3wbbpQYSjguc4ErC79Q` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search the Web | POST | `/v1/search` | `conn_mod_def::GK7EhQnMh1A::b7pG7EYjQLa9w44n1S0Xtw` |

### TaskRunInput

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Task Run Input | GET | `/v1/tasks/runs/{{runId}}/input` | `conn_mod_def::GK7Ehr4y2fA::ehq2i0SJSMKLUXmgv6rDsw` |

### TaskRunResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Task Run Result | GET | `/v1/tasks/runs/{{runId}}/result` | `conn_mod_def::GK7EhsfUXdA::IiZ8Wp7nRMyH9_2PUNua2w` |

### TaskGroupEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Stream Task Group Events | GET | `/v1/tasks/groups/{{taskgroupId}}/events` | `conn_mod_def::GK7EhtQ4DvA::Flsy3OWrQnSOyuefQzUJRQ` |

## When a call fails

The error comes from Parallel, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/parallel

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
