---
name: formsite
description: Formsite is an online form builder that enables teams to create and host forms, surveys, and simple workflows, allowing them to collect registrations, orders, reservations, feedback, payments, and real-time results through integrations and reporting tools. Read and write Formsite data through One: forms, formwebhooks, formitems, formresults, webhooks and more, 7 actions with real parameter documentation. Use whenever the user asks to look something up in Formsite, create or update a record there, or build code against the Formsite API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: formsite
  generated-from: one-knowledge-base
---

# Formsite through One

Formsite is an online form builder that enables teams to create and host forms, surveys, and simple workflows, allowing them to collect registrations, orders, reservations, feedback, payments, and real-time results through integrations and reporting tools.

One exposes Formsite through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `formsite` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Formsite is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Formsite account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form | GET | `/api/v2/{{FORMSITE_USER_DIR}}/forms/{{formDir}}` | `conn_mod_def::GMMD-lchMgg::GrIdcQaGTI2jWnjW-Zqosg` |
| List Forms | GET | `/api/v2/{{FORMSITE_USER_DIR}}/forms` | `conn_mod_def::GMMD-mGuhRg::4D64TmAYQvueQ4m1twxI_g` |

### FormWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Update a Form Webhook | POST | `/api/v2/{{FORMSITE_USER_DIR}}/forms/{{formDir}}/webhooks` | `conn_mod_def::GMMD-lf1Sug::Uvs898MqSCma641tK7vsLA` |
| Delete a Form Webhook | DELETE | `/api/v2/{{FORMSITE_USER_DIR}}/forms/{{formDir}}/webhooks` | `conn_mod_def::GMMD-uJkn6g::wrP-JQ2USMyxwpvsDxbPAw` |

### FormItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Form Items for a Form | GET | `/api/v2/{{FORMSITE_USER_DIR}}/forms/{{formDir}}/items` | `conn_mod_def::GMMD-nAYegA::x2qhW-m9QtuztGPk0xrRwA` |

### FormResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Form Results for a Form | GET | `/api/v2/{{FORMSITE_USER_DIR}}/forms/{{formDir}}/results` | `conn_mod_def::GMMD-nR2u3A::v46oUVQBSEi2fM0xdSNxww` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhooks for a Form | GET | `/api/v2/{{FORMSITE_USER_DIR}}/forms/{{formDir}}/webhooks` | `conn_mod_def::GMMD-t9yeSg::SQ5uxBLoT6Sg6A6POYiuQA` |

## When a call fails

The error comes from Formsite, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/formsite

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
