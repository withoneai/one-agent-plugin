---
name: agenty
description: A no-code data extraction and web automation service that enables users to scrape websites, monitor changes, schedule tasks, and integrate extracted data with apps and workflows without writing code. Read and write Agenty data through One: agents, lists, apikeys, projects, jobs, workflows and more, 71 actions with real parameter documentation. Use whenever the user asks to look something up in Agenty, create or update a record there, or build code against the Agenty API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: agenty
  generated-from: one-knowledge-base
---

# Agenty through One

A no-code data extraction and web automation service that enables users to scrape websites, monitor changes, schedule tasks, and integrate extracted data with apps and workflows without writing code.

One exposes Agenty through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `agenty` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Agenty is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Agenty account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Agent by ID | GET | `/agents/{{agentId}}` | `conn_mod_def::GKQDvbhnGkg::UCuilYvWTSWtw6Fv6izlsA` |
| List Agents | GET | `/v2/agents` | `conn_mod_def::GKQDvXSHaoA::dFfbrIrASOO18617EyBRnA` |
| Create an Agent | POST | `/agents` | `conn_mod_def::GKQDvbQ0r4A::tV3qFYI3TeaG_3YQasiXvg` |
| Delete Agents by IDs | DELETE | `/v2/agents` | `conn_mod_def::GKQDvWiaMYA::kj_AoRb2Sh2ug16PsWOtQg` |
| Delete an Agent by Id | DELETE | `/agents/{{agentId}}` | `conn_mod_def::GKQDvWgATvg::zPgBDcl_T6qjqKsNBalk0g` |
| Make a Copy of an Agent | POST | `/agents/{{agentId}}/copy` | `conn_mod_def::GKQDvjAxqug::yTwqDQRWRVSsDtuFEEVXQg` |
| Patch an Agent by ID | PATCH | `/agents/{{agentId}}` | `conn_mod_def::GKQDvjq1Eug::qeZ6QyRfRhCiLP1hoJmQVw` |
| Transfer an Agent | PUT | `/agents/{{agentId}}/transfer` | `conn_mod_def::GKQDvjB8LSA::wtz8deUVQemj7fKOKx-Mow` |
| Update an Agent by ID | PUT | `/agents/{{agentId}}` | `conn_mod_def::GKQDvkHccvA::h-1FDDVaTq2Z5-2T8MNX3A` |
| Update an Agent's Pre and Post Processing Scripts | PUT | `/agents/{{agentId}}/scripts` | `conn_mod_def::GKQDvjuZxcg::srNY_mUwRQ-c0eCO5XAScw` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a List's Row Data | GET | `/lists/{{listId}}/rows/download` | `conn_mod_def::GKQDwpC2ubg::wMiaUIyjSKKV4_y-wgTVgg` |
| Get a List by ID | GET | `/lists/{{listId}}` | `conn_mod_def::GKQDwp71MdA::0x0QE62QQluGnPkRIT3gJg` |
| List All Lists | GET | `/v2/lists` | `conn_mod_def::GKQDwpvLWYA::rSpoGargQqKRp_6DT8NOBw` |
| Add a New Row in a List | POST | `/lists/{{listId}}/rows` | `conn_mod_def::GKQDwf_-71g::_MSF2k3YT6yhroP2foTI8w` |
| Clear a List's Rows by ID | DELETE | `/lists/{{listId}}/rows/clear` | `conn_mod_def::GKQDwfym3wA::VNOysDxQRACXzGkt_fudPQ` |
| Create a List | POST | `/lists` | `conn_mod_def::GKQDwe7j7AA::r-RRI3r_T-mTTmNZm9oW1w` |
| Delete a List | DELETE | `/lists/{{id}}` | `conn_mod_def::GKQDwe7jyNg::PHs9clWNTAK71xYy3wNxBQ` |
| Update a List by ID | PUT | `/lists/{{listId}}` | `conn_mod_def::GKQDw0T3Kkg::xz4vHwYhTIG5KBtZM2sSGQ` |
| Upload a CSV File in a List | POST | `/lists/{{listId}}/upload` | `conn_mod_def::GKQDw07kwrg::ubpQvoc5TGilepocrcE_FQ` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Change API Key Status by ID | GET | `/apikeys/{{keyId}}/status` | `conn_mod_def::GKQDvsudFQg::_2yaSMnKQHOej64uGSVnaA` |
| Download API Keys | GET | `/apikeys/download` | `conn_mod_def::GKQDvuh_7xA::5MGRw0swTLmnejaZs18PpA` |
| Get an API Key by ID | GET | `/apikeys/{{keyId}}` | `conn_mod_def::GKQDvsqMNZA::0Fnk_XqfTqiqx8iEK6Bzjg` |
| Get API Keys | GET | `/apikeys` | `conn_mod_def::GKQDv4M3U0A::v09UW9-OTvS6994hPIdMSQ` |
| Reset an API Key | GET | `/apikeys/{{keyId}}/reset` | `conn_mod_def::GKQDv2_lOCA::HVZtAB6RQfupZi1jNFAOjQ` |
| Create an API Key | POST | `/v2/apikeys` | `conn_mod_def::GKQDvsgF6HA::n9eD2e79TZKPqM1CyNhtvA` |
| Delete API Key by ID | DELETE | `/apikeys/{{keyId}}` | `conn_mod_def::GKQDvuaKRUg::Hydsd09FSMKfnHIhSotNvQ` |
| Update API Key by ID | PUT | `/apikeys/{{keyId}}` | `conn_mod_def::GKQDv27cfpg::EbsXvL2YRXqTZoaO033OWA` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project by ID | GET | `/projects/{{id}}` | `conn_mod_def::GKQDw8tS01g::R6nc_CbzRgqaaNXSfbvd9g` |
| Get Projects | GET | `/v2/projects` | `conn_mod_def::GKQDw_XCB9A::Zvr4_wa_TNO0JKTXuVuIXQ` |
| Add Agents in a Project | POST | `/projects/{{id}}/add` | `conn_mod_def::GKQDw1CQoeA::Wga8HFm8QsGixgnn8cev-A` |
| Create Project | POST | `/projects` | `conn_mod_def::GKQDw8swasA::EOPI6sz7RTSddLwL8Y40xg` |
| Delete Project by ID | DELETE | `/projects` | `conn_mod_def::GKQDw8tabKg::BB8wzHK-SiOVDriHLAk0bA` |
| Remove Agent(s) From a Project | DELETE | `/projects/{{id}}/delete` | `conn_mod_def::GKQDw_aKRYg::UrNJBvqCTGeW956Ci6PwvQ` |
| Update Project by ID | PUT | `/projects/{{id}}` | `conn_mod_def::GKQDxGq-WVg::C2jk6dSwRn-4hesL5DZ4ig` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Job Result by Job ID | GET | `/jobs/{{jobId}}/result/download` | `conn_mod_def::GKQDwKKqi2A::1r3N02d0Q_u9Bqm65QcdjQ` |
| Download Jobs in CSV | GET | `/v2/jobs/download` | `conn_mod_def::GKQDwKPlIog::VEELZV-_QyWCiW4JaUcmUA` |
| Get a Job by ID | GET | `/jobs/{{jobId}}` | `conn_mod_def::GKQDwISfH3g::znaJFz4MR0GlYGuBBqKNXw` |
| Get Output Files by Job ID | GET | `/jobs/{{jobId}}/files` | `conn_mod_def::GKQDwUjw39g::-7UYCo5oQ8uQLh9B8WuObQ` |
| List Jobs | GET | `/v2/jobs` | `conn_mod_def::GKQDwVs4WSg::XMnv0yq0RCaxlxpfDG-ktg` |
| Stop a Job by ID | GET | `/jobs/{{jobId}}/stop` | `conn_mod_def::GKQDwUCTo5g::Q8ttLFjKTyireB4nNvmrpg` |
| Start a New Agent Job | POST | `/v2/jobs/start` | `conn_mod_def::GKQDwUrawgA::mTbKB5E0RyuoCC-o2tSkGQ` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Workflows | GET | `/workflows` | `conn_mod_def::GKQDxZVbWzg::GTox34vmRq6I76G2Mk2FZQ` |
| Get Workflow By ID | GET | `/workflows/{{id}}` | `conn_mod_def::GKQDxZk7g2g::jHhhMOJFRXy1zfjj0OK2rA` |
| Create a Workflow | POST | `/workflows` | `conn_mod_def::GKQDxZVbfmA::q5Ulun2uQfi4hZNZW0grIw` |
| Delete Workflow By ID | DELETE | `/workflows/{{id}}` | `conn_mod_def::GKQDxZlx4WA::V64pMh1aRIqK5O97GtK0wQ` |
| Enable or Disable a Workflow | PATCH | `/workflows/{{id}}` | `conn_mod_def::GKQDxZ7z2oA::LW_xOJnjQginIYE24YNzSw` |
| Update a Workflow by ID | PUT | `/workflows/{{id}}` | `conn_mod_def::GKQDxlIhltg::7kk04PJfSBaVmJzWJzCS7g` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/users/{{userId}}` | `conn_mod_def::GKQDxQGskCg::UxPNPLbtQJG-YXTLLrFvvw` |
| List Users | GET | `/users` | `conn_mod_def::GKQDxRSwuig::iBWen4QDTzG6blFjc2Fgdg` |
| Delete Users by Id | DELETE | `/users` | `conn_mod_def::GKQDxQUpnUA::t-RgGHj7Siy3MmIV4rOReA` |
| Invite a User | POST | `/users` | `conn_mod_def::GKQDxQbIl6A::Bh5ttj5uTxGB92P_DoAISA` |
| Update a User by ID | PUT | `/users/{{userId}}` | `conn_mod_def::GKQDxQKrpPA::uWoBKmdOTtGw9cmbK1VdHQ` |

### Connections

| Action | Method | Path | Action id |
|---|---|---|---|
| Connect a Connection | GET | `/connections/{{id}}/connect` | `conn_mod_def::GKQDv3TN8sg::Gi6VQ1wVTiGWj0SC1B9kxQ` |
| List Connections | GET | `/v2/connections` | `conn_mod_def::GKQDwAyaBng::SqPBrwjlRya6ty1FSaX9hw` |
| Delete Connection By Id | DELETE | `/connections/{{id}}` | `conn_mod_def::GKQDv3dKHig::7MzOFaR2T7-G854QMElcKw` |
| Rename Connection by ID | PATCH | `/connections/{{id}}` | `conn_mod_def::GKQDwAyXVvg::QAE0FnDvRLmvSOWMjcfPag` |

### ListRows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List Row by ID | GET | `/lists/{{listId}}/rows/{{id}}` | `conn_mod_def::GKQDwsSChYg::zm5bZTA2Th6Yup5Ibypu2g` |
| List a List's Rows | GET | `/lists/{{listId}}/rows` | `conn_mod_def::GKQDw1HQEzg::_E1b3Q21SJGXK7now3SnOQ` |
| Delete a List Row by ID | DELETE | `/lists/{{listId}}/rows/{{id}}` | `conn_mod_def::GKQDwppkyIg::fQoXdBinQEOj83Mz-imwWw` |
| Update a List's Row by ID | PUT | `/lists/{{listId}}/rows/{{id}}` | `conn_mod_def::GKQDw07Vo6A::3wlbNqxySb2eoU2NsIHxfA` |

### AgentSchedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent Schedule | GET | `/scheduler/{{agentId}}` | `conn_mod_def::GKQDxIShLhg::WHrpUGCdSt-rVg7UknlrLw` |
| Create an Agent Schedule | PUT | `/scheduler/{{agentId}}` | `conn_mod_def::GKQDxHVBLOg::LQEFUubLTS-TrlN2A3NJlA` |

### Scheduler

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Agent's Scheduler | DELETE | `/scheduler/{{agentId}}` | `conn_mod_def::GKQDxHLF4DA::mWlxcpWZTvOD4KGO71mpiA` |
| Enable or Disable an Agent Schedule | PATCH | `/scheduler/{{agentId}}` | `conn_mod_def::GKQDxHiRZXA::FzDFb-9FQg-g7-oUyxXz0w` |

### AgentInputs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Agent Input by ID | GET | `/inputs/{{agentId}}` | `conn_mod_def::GKQDwAlBYbA::_oYvAKvpS8CyiSnHEHEmUA` |

### Inputs

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Agent Input By ID | PUT | `/inputs/{{agentId}}` | `conn_mod_def::GKQDwAzaZvA::WMO7MRDDTA2SKrHgJN3IUA` |

### ReportsAndUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Reports and Usage | GET | `/dashboard` | `conn_mod_def::GKQDwBB5evg::MTDPgRCSTyyjmQU4fbJHcQ` |

### JobLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Logs by Job ID | GET | `/jobs/{{jobId}}/logs` | `conn_mod_def::GKQDwKKyFRA::xULRmNvLSfmB7rxg309_xw` |

### AgentResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Agent Result by Agent ID | GET | `/results/{{agentId}}` | `conn_mod_def::GKQDwL3QPHg::nj8AAmf8Sae22mCtd2_uEg` |

### JobResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Result by Job ID | GET | `/jobs/{{jobId}}/result` | `conn_mod_def::GKQDwW_oH-g::_Wr6DLn_TeKV9x66D188Uw` |

### ListsRows

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a List's Rows by IDs | DELETE | `/lists/{{listId}}/rows` | `conn_mod_def::GKQDwg1ay7g::5VsbpGG-QdmesdPrM_cgLA` |

## When a call fails

The error comes from Agenty, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/agenty

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
