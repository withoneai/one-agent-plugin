---
name: carbone
description: Carbone is a low-code document generation platform and API that transforms JSON data into dynamic documents like PDFs, spreadsheets, and presentations using customizable templates, enabling teams to automate reporting, invoices, and document workflows at scale. Read and write Carbone data through One: templates, template, rendertemplate, generateddocuments, apistatus, render and more, 11 actions with real parameter documentation. Use whenever the user asks to look something up in Carbone, create or update a record there, or build code against the Carbone API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: carbone
  generated-from: one-knowledge-base
---

# Carbone through One

Carbone is a low-code document generation platform and API that transforms JSON data into dynamic documents like PDFs, spreadsheets, and presentations using customizable templates, enabling teams to automate reporting, invoices, and document workflows at scale.

One exposes Carbone through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `carbone` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Carbone is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Carbone account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Template or a Specific Template Version | GET | `/template/{{templateIdOrVersionId}}` | `conn_mod_def::GKjwztOkOSg::kXv6k-yHQfuNa1pRNx5Jrw` |
| List All Templates | GET | `/templates` | `conn_mod_def::GKjwzsi7Ieg::UOsFWaPbQqCuh3VsRBjrkw` |
| Upload a Template | POST | `/template` | `conn_mod_def::GKjwz3DOXpA::TiNmwRiSQ5KTn3Ht2jaVeQ` |

### Template

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Template or a Specific Version | DELETE | `/template/{{templateIdOrVersionId}}` | `conn_mod_def::GKjwzebhnMA::ujYB-R-CT_2hF7lEn4O8fA` |
| Update Template Metadata | PATCH | `/template/{{templateIdOrVersionId}}` | `conn_mod_def::GKjwzumDVEA::cWQ8My0jTCu0DPwIog55sA` |

### RenderTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a Document from an Inline Template | POST | `/render/template` | `conn_mod_def::GKjwzgDR3wA::2sDGoOVZRsiRJmurFZJfTw` |

### GeneratedDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Generated Document | GET | `/render/{{renderId}}` | `conn_mod_def::GKjwzg1ZTJA::A1gItk2bR0SBtFTMOFVLFg` |

### ApiStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch API Status and Version | GET | `/status` | `conn_mod_def::GKjwzf49m6g::iJuBABT5TQqT7uXUAD-DtQ` |

### Render

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Document From a Template or Version | POST | `/render/{{templateIdOrVersionId}}` | `conn_mod_def::GKjwzizVU8A::vbz_pdHSSQ2V4uRts5xs_Q` |

### TemplateCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Template Categories | GET | `/templates/categories` | `conn_mod_def::GKjwzrntsEA::RccP9PwEQBecbETFp6skag` |

### TemplateTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Template Tags | GET | `/templates/tags` | `conn_mod_def::GKjwzt4YHIA::YNbhkUTXSBC_-G8y7-RGLg` |

## When a call fails

The error comes from Carbone, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/carbone

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
