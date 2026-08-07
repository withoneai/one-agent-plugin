---
name: basin
description: Basin is a form backend service that captures form submissions from static sites and forwards data to email, webhooks or integrations—enabling developers to handle form data without building a custom backend. Read and write Basin data through One: formwebhooks, forms, projects, submissions, formviews, domains and more, 22 actions with real parameter documentation. Use whenever the user asks to look something up in Basin, create or update a record there, or build code against the Basin API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: basin
  generated-from: one-knowledge-base
---

# Basin through One

Basin is a form backend service that captures form submissions from static sites and forwards data to email, webhooks or integrations—enabling developers to handle form data without building a custom backend.

One exposes Basin through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `basin` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Basin is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Basin account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### FormWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Form Webhooks | GET | `/form_webhooks` | `conn_mod_def::GJgYZSfH03E::PcAtpyWETXy3F0_OW74HXw` |
| Show a Form Webhook | GET | `/api/v1/form_webhooks/{{id}}` | `conn_mod_def::GJgYZYjlaeg::7yRHgBHDSu-QReIY4EBzMw` |
| Create a Form Webhook | POST | `/api/v1/form_webhooks/` | `conn_mod_def::GJgYZvLJuLI::EF0myho5RPqmmLl6xL79WA` |
| Delete a Form Webhook | DELETE | `/api/v1/form_webhooks/{{id}}` | `conn_mod_def::GJgYZmscNjU::FmfUeTO9QhekHo9Qa4pllw` |
| Update a Form Webhook | PUT | `/api/v1/form_webhooks/{{ID}}` | `conn_mod_def::GJgYZfX15Vw::HBJv3KBiSnWBcfiZ8Im81Q` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Forms | GET | `/forms` | `conn_mod_def::GJgYZ3CtdKw::4Gkw6snGQwuRVQQW10husQ` |
| Create Form | POST | `/forms/` | `conn_mod_def::GJgYaT5d1mY::rEgA9HrkTCKmgVtisPRjLw` |
| Delete a Form | DELETE | `/api/v1/forms/{{id}}` | `conn_mod_def::GJgYaMyofU4::gJjNRRdpQNmvVUzGs52iJw` |
| Update a Form | PUT | `/api/v1/forms/{{id}}` | `conn_mod_def::GJgYaGoOuvA::Wij5cENdSDygs_b2bITLFA` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/api/v1/projects` | `conn_mod_def::GJgYapLijnM::R_Ha9yfaT82NwDYZktYpSg` |
| Create Project | POST | `/api/v1/projects/` | `conn_mod_def::GJgYbF1oXeE::zITLyJdpS7emRPb2vxg3pw` |
| Delete a Project | DELETE | `/api/v1/projects/{{id}}` | `conn_mod_def::GJgYa_wANkM::9WQrJHX9RsWPNt7B7lkGTg` |
| Update a Project | PUT | `/api/v1/projects/{{id}}` | `conn_mod_def::GJgYa2uqOI4::-46eKwMeRgW1jec4Vlj0Fw` |

### Submissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Submissions | GET | `/api/v1/submissions/` | `conn_mod_def::GJgYbNc0XOU::0o_jk98eS4qCbrv7gl8Ziw` |
| Destroy a Submission | DELETE | `/api/v1/submissions/{{id}}` | `conn_mod_def::GJgYbhiuHBg::cUWPfHQHQ464xVdJhV7HQw` |
| Update a Submission | PATCH | `/api/v1/submissions/{{ID}}` | `conn_mod_def::GJgYbcSW9aA::9_HZ5UTcQoaafPp8jpEeFg` |

### FormViews

| Action | Method | Path | Action id |
|---|---|---|---|
| List FormViews | GET | `/api/v1/form_views` | `conn_mod_def::GJgYabJwsQs::DDrDgYWURlCTAcu9kpI-YA` |
| Show a FormView | GET | `/api/v1/form_views/{{ID}}` | `conn_mod_def::GJgYaiw9ozk::EIBgyy5FT8KdMQg_tyo2Hw` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Domains | GET | `/domains` | `conn_mod_def::GJgYZLnh-fM::KJXHPkS4SxmtMR8y-NnE0g` |

### Form

| Action | Method | Path | Action id |
|---|---|---|---|
| Show a Form | GET | `/api/v1/forms/{{id}}` | `conn_mod_def::GJgYZ9jEhvk::DVyVPP1aR32C-TNMNAHPlA` |

### Project

| Action | Method | Path | Action id |
|---|---|---|---|
| Show a Project | GET | `/api/v1/projects/{{ID}}` | `conn_mod_def::GJgYav5E0Ws::4MMmyB73T-OmWOyG-nSSTQ` |

### Submission

| Action | Method | Path | Action id |
|---|---|---|---|
| Show a Submission | GET | `/api/v1/submissions/{{ID}}` | `conn_mod_def::GJgYbWmu4xo::3ACC3LhGR66QzTad2HV-zg` |

## When a call fails

The error comes from Basin, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/basin

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
