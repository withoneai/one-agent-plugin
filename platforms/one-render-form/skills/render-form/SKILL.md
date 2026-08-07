---
name: render-form
description: RenderForm is a template-based image and document generation platform that combines a visual editor with an API to automate the creation of branded images and PDFs from dynamic data, enabling teams to scale personalized visual content and integrate generation into workflows and applications. Read and write RenderForm data through One: mytemplates, renderresults, organizationsummary, results, fonts, render and more, 11 actions with real parameter documentation. Use whenever the user asks to look something up in RenderForm, create or update a record there, or build code against the RenderForm API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: render-form
  generated-from: one-knowledge-base
---

# RenderForm through One

RenderForm is a template-based image and document generation platform that combines a visual editor with an API to automate the creation of branded images and PDFs from dynamic data, enabling teams to scale personalized visual content and integrate generation into workflows and applications.

One exposes RenderForm through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `render-form` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm RenderForm is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real RenderForm account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### MyTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get My Template | GET | `/api/v2/my-templates/{{templateId}}` | `conn_mod_def::GKrN0UUmMgA::YOFTpA0_Sqa3kDyXI4NLHA` |
| List My Templates | GET | `/api/v2/my-templates` | `conn_mod_def::GKrN0fCR5JA::W2Ug2RYQRK2H6LdWoHBFHQ` |
| Delete My Template | DELETE | `/api/v2/my-templates/{{templateId}}` | `conn_mod_def::GKrN0T5rasA::xp_8NA6YQ9CNo9ftB3OrsQ` |

### RenderResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Render Result | GET | `/api/v2/results/{{identifier}}` | `conn_mod_def::GKrN0McsrwA::OYz3mrIvQKSl5dSqUyhk_g` |
| Get Render Results | GET | `/api/v2/results` | `conn_mod_def::GKrN0UttljA::Q2f0KJk3Ryy7L72duxg82w` |

### OrganizationSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Summary | GET | `/api/v1/usage` | `conn_mod_def::GKrN0KlkL-g::9j1wHTplRKKSnXTGfUBgeg` |

### Results

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Content Result by Identifier | DELETE | `/api/v2/results/{{identifier}}` | `conn_mod_def::GKrN0LNwzcA::S63vWxYnQm2GKitRufhDYg` |

### Fonts

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Fonts | GET | `/api/v1/fonts` | `conn_mod_def::GKrN0LwPrrA::dmBK-gCNSY6k-EwBIC7owg` |

### Render

| Action | Method | Path | Action id |
|---|---|---|---|
| Render a Template | POST | `/api/v2/render` | `conn_mod_def::GKrN0L4_XAg::AX2v9CoQQLuRisH7xD_BkQ` |

### Pdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Create PDF | POST | `/api/v1/pdf` | `conn_mod_def::GKrN0T5Pmag::VrFK4OshRcycxmC6xMpMUQ` |

### Screenshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Screenshot | POST | `/api/v1/screenshots` | `conn_mod_def::GKrN0U0q3mA::9RKghkBHQRCPZtdnwZ01ow` |

## When a call fails

The error comes from RenderForm, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/render-form

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
