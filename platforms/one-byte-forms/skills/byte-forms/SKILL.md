---
name: byte-forms
description: A no-code form creation tool that enables businesses to design, deploy, and embed customizable online forms for data collection, surveys, and customer feedback with optional logic and integrations. Read and write ByteForms data through One: forms, formresponses and more, 3 actions with real parameter documentation. Use whenever the user asks to look something up in ByteForms, create or update a record there, or build code against the ByteForms API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: byte-forms
  generated-from: one-knowledge-base
---

# ByteForms through One

A no-code form creation tool that enables businesses to design, deploy, and embed customizable online forms for data collection, surveys, and customer feedback with optional logic and integrations.

One exposes ByteForms through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `byte-forms` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ByteForms is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ByteForms account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Form | GET | `/api/form/{{formId}}` | `conn_mod_def::GJ4_AUWQrGs::yrp5w_YgSnOLT9D2Z1cbcg` |
| List Forms | GET | `/api/form` | `conn_mod_def::GJ4_AL4CXVs::NyY0r5VSTJy2Ss4EpNkl0Q` |

### FormResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form’s Responses | GET | `/api/form/responses/{{formId}}` | `conn_mod_def::GJ4_AiDJtgk::7hKfI5O7TZuR2WjB4U6EIQ` |

## When a call fails

The error comes from ByteForms, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/byte-forms

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
