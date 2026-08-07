---
name: callingly
description: |. Read and write Callingly data through One: teams, webhooks, agents, leads, clients, calls and more, 31 actions with real parameter documentation. Use whenever the user asks to look something up in Callingly, create or update a record there, or build code against the Callingly API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: callingly
  generated-from: one-knowledge-base
---

# Callingly through One

|.

One exposes Callingly through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `callingly` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Callingly is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Callingly account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team | GET | `/teams/{{id}}` | `conn_mod_def::GKZ2yNCjKVA::n0Z_GuCjTsu04pxymR055A` |
| List Teams | GET | `/v1/teams` | `conn_mod_def::GKZ2yUT0uAA::bxsIznm0TQqZOD8zQIMP0g` |
| Create Team | POST | `/teams` | `conn_mod_def::GKZ2x-Klo7g::aEwVdqnQRCuhlYyhL3Aylw` |
| Remove a Team Agent | DELETE | `/teams/{{id}}/agents/{{agentId}}` | `conn_mod_def::GKZ2yU0mmpg::93zfRMu-Ry-0NYTRX8Xg2Q` |
| Update a Team | PUT | `/teams/{{id}}` | `conn_mod_def::GKZ2yUS78Ng::UQ78Lo22Tnqx9EwPi9mfxA` |
| Update a Team's Agents | PUT | `/teams/{{id}}/agents` | `conn_mod_def::GKZ2yVVQkdg::N0dflqjeSDGLij0cud3bmQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Endpoint | GET | `/webhooks/{{id}}` | `conn_mod_def::GKZ2yl8d9vA::khoT-gpOQVuLG-5yziTm6g` |
| List All Webhooks | GET | `/webhooks` | `conn_mod_def::GKZ2ylnpmQA::SzvNvnYXSx-7PYN9ETMpnQ` |
| Create a Webhook Endpoint | POST | `/v1/webhooks` | `conn_mod_def::GKZ2ynYsgbg::523VqzJJRTi81GCnnRRXEw` |
| Delete a Webhook Endpoint | DELETE | `/webhooks/{{id}}` | `conn_mod_def::GKZ2ylhv5Zg::0xVBpEbSS3yeO_MdQ5HlJA` |
| Update a Webhook | PUT | `/v1/webhooks` | `conn_mod_def::GKZ2yyAvOiA::GEy_kDXDS0GXJ3rSZpGj0Q` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Users | GET | `/teams/{{id}}/agents` | `conn_mod_def::GKZ2x-UUSig::VD0tqYdqRqul1PtY9QfPBw` |
| Create Agent | POST | `/agents` | `conn_mod_def::GKZ2ydiLMIA::QX0M7cNNTfWiL-l2A1VbHQ` |
| Delete Agent | DELETE | `/agents/{{id}}` | `conn_mod_def::GKZ2ydLghWg::pUi0bRu9QfmB8tcxKqwJiQ` |
| Update an Agent | PUT | `/agents/{{id}}` | `conn_mod_def::GKZ2yd_nBjg::BMVZN2DES6SrGFp2204M-g` |
| Update an Agent's Schedule | PUT | `/agents/{{id}}/schedule` | `conn_mod_def::GKZ2ylhv8VA::mrZULo0oRCK2MWp16sGV8Q` |

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead | GET | `/leads/{{id}}` | `conn_mod_def::GKZ2xzouw0A::7dMdCGRQRBGirZMFNyQ9yw` |
| List Leads | GET | `/leads` | `conn_mod_def::GKZ2x1bIFRA::-q8eG3s5QBa3uzFPZnk9KQ` |
| Delete Lead | DELETE | `/leads/{{id}}` | `conn_mod_def::GKZ2xzvdB7A::LkYfq4cBRnyU4Oyvowvsmg` |
| Update a Lead | PUT | `/leads/{{id}}` | `conn_mod_def::GKZ2x-jt0wg::F7eMRcZZTxGErAT03E0YpA` |

### Clients

| Action | Method | Path | Action id |
|---|---|---|---|
| List Clients | GET | `/clients` | `conn_mod_def::GKZ2xzxR0iA::OGwWB3tWQgigWttr-zZw4A` |
| Activate or Deactivate a Client | POST | `/clients/{{id}}/active` | `conn_mod_def::GKZ2xnXyTBg::jvxmOfUKQmC0_h0edJMyKQ` |
| Create Client | POST | `/v1/clients` | `conn_mod_def::GKZ2xlN_hqA::otkAO9EgTe-z-D72GJfSDw` |
| Delete Client | DELETE | `/clients/{{id}}` | `conn_mod_def::GKZ2xzfGWng::8SK_G8n7Q_uMOj0_V5DHkg` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call | GET | `/calls/{{callId}}` | `conn_mod_def::GKZ2xld3eKg::87ft8_QgRoa9j0lsHWbjkQ` |
| List Calls | GET | `/calls` | `conn_mod_def::GKZ2xsRNQdg::60yO3eegTqK6XH8uizXMuQ` |
| Create a Call | POST | `/calls` | `conn_mod_def::GKZ2xlAE4rg::udPdIQgJRiOqe5srCVPbPA` |

### Sms

| Action | Method | Path | Action id |
|---|---|---|---|
| Create SMS | POST | `/sms` | `conn_mod_def::GKZ2x-UcNYA::TcRvs5nGRbWqaCOtLsPjDw` |

### TeamAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Team Agent's Settings | PUT | `/teams/{{id}}/agents/{{agentId}}` | `conn_mod_def::GKZ2yVdBo9g::J_D31efJQva1TYY8oo9uBA` |

### AgentSchedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent's Schedule | GET | `/agents/{{id}}/schedule` | `conn_mod_def::GKZ2ydw7LKg::2iSyEgk0ROKD8C8xDz1liw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/agents` | `conn_mod_def::GKZ2yd4W8Yg::Ve1_trWhQzOUuZW-k6xEiA` |

## When a call fails

The error comes from Callingly, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/callingly

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
