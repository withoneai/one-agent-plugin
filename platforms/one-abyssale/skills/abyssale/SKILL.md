---
name: abyssale
description: A cloud-based creative automation solution that helps teams design, generate, and scale thousands of on-brand visual assets in minutes from a single template, accelerates production through APIs and integrations, and streamlines collaboration and approvals across marketing channels. Read and write Abyssale data through One: designs, banner, projects, designformatdetails, designdynamicimageurl, banners and more, 14 actions with real parameter documentation. Use whenever the user asks to look something up in Abyssale, create or update a record there, or build code against the Abyssale API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: abyssale
  generated-from: one-knowledge-base
---

# Abyssale through One

A cloud-based creative automation solution that helps teams design, generate, and scale thousands of on-brand visual assets in minutes from a single template, accelerates production through APIs and integrations, and streamlines collaboration and approvals across marketing channels.

One exposes Abyssale through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `abyssale` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Abyssale is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Abyssale account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Designs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Your Designs | GET | `/designs` | `conn_mod_def::GJtsdOoE99w::qmMCurnHRC2Jgu7dh_dnHA` |
| Retrieve a Design's Details | GET | `/designs/{{designId}}` | `conn_mod_def::GJtsdWSQRUE::8Y_N_szLQEOsbP96XVQRdA` |

### Banner

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Banner File’s Information | GET | `/banners/{{BANNERID}}` | `conn_mod_def::GJtseW3a1yQ::fa4sC882RcSqGzBqdFun5g` |
| Generate a Banner From a Design | POST | `/banner-builder/{{DESIGNID}}/generate` | `conn_mod_def::GJtselLi6lU::YSQa7u2cQYW0GmsKK6ra9Q` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/projects` | `conn_mod_def::GJtse5jcyk8::T9LDd1ibRHiuADEeSaUNEg` |
| Create a Project | POST | `/projects` | `conn_mod_def::GJtse_IXjs8::UVcz10vOTqa5wyGj2QTNmA` |

### DesignFormatDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Design’s Format Details | GET | `/designs/{{DESIGNID}}/formats/{{FORMATSPECIFIER}}` | `conn_mod_def::GJtsdki2TKo::dEqG3fXdSX-GkUI8AxvQPQ` |

### DesignDynamicImageUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Design’s Dynamic Image URL | POST | `/designs/{{DESIGNID}}/dynamic-image-url` | `conn_mod_def::GJtsdxKSRbY::I_c0QPyAShCTVjvtEXqBmg` |

### Banners

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Banners (Async) | POST | `/async/banners/export` | `conn_mod_def::GJtsd_qXimU::aHT9hL0_RRefTzvAnl2zAA` |

### Fonts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fonts | GET | `/fonts` | `conn_mod_def::GJtseeRmtyw::z2sTWitiTFiboyqvhyi7iQ` |

### MediaGeneration

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Multiple Media Formats for a Design (Async) | POST | `/async/banner-builder/{{DESIGNID}}/generate` | `conn_mod_def::GJtsesYSIp4::_rrkNBHiSsG0ZVPhZvhJmA` |

### DesignPdfGeneration

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Multi-Page PDF (Async) for a Design | POST | `/async/banner-builder/{{DESIGNID}}/generate` | `conn_mod_def::GJtseza9Ois::92ETTs0gQyCx7_aeb-hXmw` |

### WorkspaceTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Duplicate a Workspace Template into a Project | POST | `/workspace-templates/{{COMPANYTEMPLATEID}}/use` | `conn_mod_def::GJtsfGtctAA::VBOvNrQcTAqCFVyhEnFt0A` |

### TemplateDuplicationRequest

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template Duplication Request Status | GET | `/design-duplication-requests/{{DUPLICATEREQUESTID}}` | `conn_mod_def::GJtsfS2D90Y::-mkUDfBTQvWJdC2YGR41PA` |

## When a call fails

The error comes from Abyssale, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/abyssale

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
