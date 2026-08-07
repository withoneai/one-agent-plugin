---
name: mother-duck
description: MotherDuck is a cloud analytics platform built on DuckDB that provides serverless data storage, querying, and collaboration, allowing developers and data teams to analyze large datasets with SQL, share results, and integrate local and cloud-based workflows. Read and write MotherDuck data through One: users, dive, dives, ducklings, useraccesstokens, diveembedsessions and more, 28 actions with real parameter documentation. Use whenever the user asks to look something up in MotherDuck, create or update a record there, or build code against the MotherDuck API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mother-duck
  generated-from: one-knowledge-base
---

# MotherDuck through One

MotherDuck is a cloud analytics platform built on DuckDB that provides serverless data storage, querying, and collaboration, allowing developers and data teams to analyze large datasets with SQL, share results, and integrate local and cloud-based workflows.

One exposes MotherDuck through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mother-duck` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm MotherDuck is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real MotherDuck account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Create New User | POST | `/v1/users` | `conn_mod_def::GK9bEIpM4LE::bJCY9F-STzagzYZQctUHaQ` |
| Delete a User | DELETE | `/v1/users/{{username}}` | `conn_mod_def::GK9bEHB7CVw::nSOAVBBPRty7c0laoMAvkA` |
| Invalidate a User Access Token | DELETE | `/v1/users/{{username}}/tokens/{{tokenId}}` | `conn_mod_def::GK9bEG8WKCE::Q6VDRjGRQ8CJaT0R6PN53g` |

### Dive

| Action | Method | Path | Action id |
|---|---|---|---|
| Read Dive | POST | `/mcp` | `conn_mod_def::GLNaTfDGDiU::rOHSW_FGRRuW2E0Ri-A9uw` |
| Save Dive | POST | `/mcp` | `conn_mod_def::GLNaTgVH7O8::h6PCL1TwRJi80gZPDaZV9Q` |
| View Dive | POST | `/mcp` | `conn_mod_def::GLNaTqGJPIM::sRlr2yZCRkGGIGUsILsGjg` |

### Dives

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Dive | POST | `/mcp` | `conn_mod_def::GLNaS5qyEXA::bmdrhuFjS3adKzbcp54mZw` |
| List Dives | POST | `/mcp` | `conn_mod_def::GLNaTU-PR3k::26BoQDzsTSKWQ22cqGkrDg` |
| Update Dive | POST | `/mcp` | `conn_mod_def::GLNaTqYS7m4::aXbr82n7RDCpmbk2l3syzw` |

### Ducklings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Duckling Configuration | GET | `/v1/users/{{username}}/instances` | `conn_mod_def::GK9bD7tF7bg::XqpQbHNoTku9dKo4ZxFE-Q` |

### UserAccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a User Access Token | POST | `/v1/users/{{username}}/tokens` | `conn_mod_def::GK9bD8ZXB5w::dEh31eg0TI6C0fJ8rdleJQ` |

### DiveEmbedSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Dive Embed Session for a Service Account | POST | `/v1/dives/{{diveId}}/embed-session` | `conn_mod_def::GK9bD8kdpIg::BjDyGzbWT8STQoYsigZ2Iw` |

### DucklingConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a User's Duckling Configuration | PUT | `/v1/users/{{username}}/instances` | `conn_mod_def::GK9bD-1q7kg::roJjMbIwSlSoTrUfW_E7zw` |

### UsersAccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Access Tokens | GET | `/v1/users/{{username}}/tokens` | `conn_mod_def::GK9bEG-oghE::bVNR-pSjTRSeH0PG1D6l6w` |

### ActiveAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Active Accounts | GET | `/active_accounts` | `conn_mod_def::GK9bD-7byBI::i0NyBhMJSn-ztcUeCgfY_A` |

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tables Using MotherDuck MCP | POST | `/mcp` | `conn_mod_def::GLNaTezlytU::8d1n2DhRTASS_RWZr03AGg` |

### MotherduckQueryRw

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute Read-Write SQL Query | POST | `/mcp` | `conn_mod_def::GLNaTezmGWg::6q1hn2qUTXGsjWhsHSiwTA` |

### Catalog

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Catalog | POST | `/mcp` | `conn_mod_def::GLNaTo9Ljg8::h_nKLnPjR-i8HXJ77eN4NQ` |

### DiveData

| Action | Method | Path | Action id |
|---|---|---|---|
| Share Dive Data | POST | `/mcp` | `conn_mod_def::GLNaTpYN9zo::6dr41UVfQcuc-q-319422g` |

### DiveGuide

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dive Guide | POST | `/mcp` | `conn_mod_def::GLNaS3yzb9E::nSPRE3ILQJe7bU-R_P-NVg` |

### DiveQuery

| Action | Method | Path | Action id |
|---|---|---|---|
| Dive Query | POST | `/mcp` | `conn_mod_def::GLNaS43SQME::Rj70IiVASqeXGtrMfLptZw` |

### DiveContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit Dive Content | POST | `/mcp` | `conn_mod_def::GLNaS5DsJlY::W0ptv2k0Rsq-qdzzQMIlrg` |

### DocsQuestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Ask Docs Question | POST | `/mcp` | `conn_mod_def::GLNaS5gKCck::AitHwQdZTXijsD8xWz1W0Q` |

### Databases

| Action | Method | Path | Action id |
|---|---|---|---|
| List Databases | POST | `/mcp` | `conn_mod_def::GLNaTER63Es::J7EC9SbbTMq8YtjcYh5wQA` |

### ShortLivedToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Short Lived Token | POST | `/mcp` | `conn_mod_def::GLNaTEnAXP0::usc1RMs9TNazeNSMtUWa_A` |

### Shares

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shares | POST | `/mcp` | `conn_mod_def::GLNaTFwJLPw::17RHOPh2RfeZfOPsf0VqEw` |

### Columns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Columns | POST | `/mcp` | `conn_mod_def::GLNaTFl2ub0::bopTZBpYR8uCENdBjR2OFg` |

### MotherDuckQuery

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Using MotherDuck | POST | `/mcp` | `conn_mod_def::GLNaTeBCsNI::HNrYNk5YRLSLlGLjUPKKag` |

## When a call fails

The error comes from MotherDuck, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mother-duck

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
