---
name: tally
description: Tally is a form-building platform that enables teams to create surveys, registrations, applications, and data collection workflows, allowing users to publish customizable forms quickly and connect responses to other tools through integrations, embeds, and automation-friendly features. Read and write Tally data through One: forms, workspaces, webhooks, organizationinvites, formsubmissions, formblocks and more, 29 actions with real parameter documentation. Use whenever the user asks to look something up in Tally, create or update a record there, or build code against the Tally API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: tally
  generated-from: one-knowledge-base
---

# Tally through One

Tally is a form-building platform that enables teams to create surveys, registrations, applications, and data collection workflows, allowing users to publish customizable forms quickly and connect responses to other tools through integrations, embeds, and automation-friendly features.

One exposes Tally through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `tally` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Tally is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Tally account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Forms | GET | `/forms` | `conn_mod_def::GK5w2GhFbcA::VzLASuVXRBCmhWM4mli2jQ` |
| Retrieve a Form | GET | `/forms/{{formId}}` | `conn_mod_def::GK5w2IUeUQA::4lvYUWQiTPeibuWF-0Pg9Q` |
| Create a New Form | POST | `/forms` | `conn_mod_def::GK5w15OMADA::PISdPJdpTYyZdlcnd05zcg` |
| Delete a Form | DELETE | `/forms/{{formId}}` | `conn_mod_def::GK5w14eO2RA::hsc2-gSsTnODLpmTFM8zew` |
| Update a Form | PATCH | `/forms/{{formId}}` | `conn_mod_def::GK5w2YjHtIA::gArExM3HTXOwJdUssDPJzQ` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspaces | GET | `/workspaces` | `conn_mod_def::GK5w2BV40bg::gFcI3J-dSYW-Ln8tonOyqg` |
| Retrieve a Workspace | GET | `/workspaces/{{workspaceId}}` | `conn_mod_def::GK5w2BheVdg::MUCoLRyHTxyC-keejzvQLg` |
| Create a New Workspace | POST | `/workspaces` | `conn_mod_def::GK5w14LkZ7g::ZQL2ItcCSaOYRVmDbQgEgQ` |
| Delete a Workspace | DELETE | `/workspaces/{{workspaceId}}` | `conn_mod_def::GK5w2EhUnCA::zIPrk8L-SHaN2qCbe2MCVw` |
| Update a Workspace | PATCH | `/workspaces/{{workspaceId}}` | `conn_mod_def::GK5w2Ps88tg::ajMWdDDcSeO_pyulzmojUg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GK5w2w21KlA::fbruGh9fRFa0sAwdm0LD4A` |
| Create a Webhook | POST | `/webhooks` | `conn_mod_def::GK5w2h-4uhA::saGtT9zYTb2nR-OGHYSfew` |
| Delete a Webhook | DELETE | `/webhooks/{{webhookId}}` | `conn_mod_def::GK5w2i-4TtA::1J9rTOQbTxu6XQQFCkM8UA` |
| Update a Webhook | PATCH | `/webhooks/{{webhookId}}` | `conn_mod_def::GK5w2vn0wOg::G3wCbQQ2SL-xcN3e0dh2FQ` |

### OrganizationInvites

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Invites | GET | `/organizations/{{organizationId}}/invites` | `conn_mod_def::GK5w2haY-PA::brdt-na4S4itNnzBo7MNWg` |
| Cancel an Organization Invite | DELETE | `/organizations/{{organizationId}}/invites/{{inviteId}}` | `conn_mod_def::GK5w2QIBkaA::YetVvpVHS9CkQa9nzyi0jA` |
| Create Organization Invites | POST | `/organizations/{{organizationId}}/invites` | `conn_mod_def::GK5w2QfhL2g::VY0r4pC6Q3C0_ETmCg3iFQ` |

### FormSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Form's Submissions | GET | `/forms/{{formId}}/submissions` | `conn_mod_def::GK5w1wiaCgg::NT1Nfb_CTj-rSUuY2J89fg` |
| Delete a Form Submission | DELETE | `/forms/{{formId}}/submissions/{{submissionId}}` | `conn_mod_def::GK5w1wg5PMg::b4QnGLhRSrSOU1QKRn8HRA` |

### FormBlocks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Form's Blocks | GET | `/forms/{{formId}}/blocks` | `conn_mod_def::GK5w1wqrPpg::V-mYAOyrSB-FCeLY-76-FA` |
| Update a Form's Blocks | PATCH | `/forms/{{formId}}/blocks` | `conn_mod_def::GK5w14_eKtA::-W8rSw1ATr-TksRY0iheBQ` |

### OrganizationUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Users | GET | `/organizations/{{organizationId}}/users` | `conn_mod_def::GK5w2hasmGA::Rkql1GgtQaC_pzYXffQa1A` |
| Remove a User From an Organization | DELETE | `/organizations/{{organizationId}}/users/{{userId}}` | `conn_mod_def::GK5w2nIQVPg::6Qe--sB0Rey0BOR2GH8Bjw` |

### WebhookEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Webhook's Events | GET | `/webhooks/{{webhookId}}/events` | `conn_mod_def::GK5w21FH_lA::RWVAnZi0QLebaAOrH8QJug` |
| Retry a Webhook Event | POST | `/webhooks/{{webhookId}}/events/{{eventId}}` | `conn_mod_def::GK5w2uyZPmA::pNxoWeoFRpSxegRJbGXMpQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Current User Information | GET | `/users/me` | `conn_mod_def::GK5w2Pu0Ftg::gG73mmUNS1aOCHf8SmlM6Q` |

### Questions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Form's Questions | GET | `/forms/{{formId}}/questions` | `conn_mod_def::GK5w1tfxRHA::NHRFRs9eR7mwhy7AEax1nw` |

### FormSubmission

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Form Submission | GET | `/forms/{{formId}}/submissions/{{submissionId}}` | `conn_mod_def::GK5w1wq5qgA::wiU_Bko5SCWQgEROWnsmYQ` |

### FormQuestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Form Question | PATCH | `/forms/{{formId}}/questions/{{questionId}}` | `conn_mod_def::GK5w14LBarA::4SB6WiB5RFyBYoAtSHwDPQ` |

## When a call fails

The error comes from Tally, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/tally

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
