---
name: fillout
description: Fillout is a form-building platform that provides customizable forms, surveys, and workflow automation with integrations to spreadsheets, databases, and business tools, allowing teams to collect data, route submissions, and embed interactive forms into websites or internal processes. Read and write Fillout data through One: formsubmissions, forms, webhooks and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Fillout, create or update a record there, or build code against the Fillout API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: fillout
  generated-from: one-knowledge-base
---

# Fillout through One

Fillout is a form-building platform that provides customizable forms, surveys, and workflow automation with integrations to spreadsheets, databases, and business tools, allowing teams to collect data, route submissions, and embed interactive forms into websites or internal processes.

One exposes Fillout through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `fillout` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Fillout is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Fillout account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### FormSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form Submission by ID | GET | `/v1/api/forms/{{formId}}/submissions/{{submissionId}}` | `conn_mod_def::GK7A6a-TsxA::EcqDEm71TcyEtct53B0UKA` |
| List a Form's Submissions | GET | `/v1/api/forms/{{formId}}/submissions` | `conn_mod_def::GK7A6KQPGHg::7QjlRkjBTm-ME8pihhyEqA` |
| Create Form Submissions | POST | `/v1/api/forms/{{formId}}/submissions` | `conn_mod_def::GK7A6SlmwvA::s4j4kuVuQaGEO5DxrSLwYA` |
| Delete a Form Submission by ID | DELETE | `/v1/api/forms/{{formId}}/submissions/{{submissionId}}` | `conn_mod_def::GK7A6IFe4Ig::siXASZf2TJmaLVLc7xW7HA` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Form Metadata | GET | `/v1/api/forms/{{formId}}` | `conn_mod_def::GK7A6aTKVOg::bKPbvUslTD-KqPdTEvqZzw` |
| List Forms | GET | `/v1/api/forms` | `conn_mod_def::GK7A6IGPuHA::_lCDuRyuQb6cUbWZolRJQQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Webhook for a Form | POST | `/v1/api/webhook/create` | `conn_mod_def::GK7A6JPzAtg::l-3JCDsQSwOpnXuruN5UqA` |
| Remove a Webhook | POST | `/v1/api/webhook/delete` | `conn_mod_def::GK7A6brnbxg::IhHwLHyaThCXk1WBM7ozUQ` |

## When a call fails

The error comes from Fillout, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/fillout

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
