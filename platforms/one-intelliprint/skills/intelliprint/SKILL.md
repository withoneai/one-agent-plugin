---
name: intelliprint
description: Intelliprint is a print management and workflow automation platform that helps organizations manage print jobs, document output, and related business processes, allowing teams to streamline production, reduce manual handling, and integrate printing operations with existing systems. Read and write Intelliprint data through One: prints, mailinglistrecipients, backgrounds, mailinglists and more, 20 actions with real parameter documentation. Use whenever the user asks to look something up in Intelliprint, create or update a record there, or build code against the Intelliprint API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: intelliprint
  generated-from: one-knowledge-base
---

# Intelliprint through One

Intelliprint is a print management and workflow automation platform that helps organizations manage print jobs, document output, and related business processes, allowing teams to streamline production, reduce manual handling, and integrate printing operations with existing systems.

One exposes Intelliprint through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `intelliprint` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Intelliprint is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Intelliprint account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Prints

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Print Jobs | GET | `/prints` | `conn_mod_def::GLK-G3ASa2g::VQsjMBroT3iPNccyHW0Tew` |
| Retrieve A Print Job | GET | `/prints/{{id}}` | `conn_mod_def::GLK-G0ndcbg::LdMVMFSzTdi13JjaHSocUA` |
| Create A Print Job | POST | `/v1/prints` | `conn_mod_def::GLK-GztZ0oA::0PiPfVdtQ4OqXWMumt91mQ` |
| Delete Or Cancel A Print Job | DELETE | `/prints/{{id}}` | `conn_mod_def::GLK-G0vp19A::DTYayWc4T4qkxFOJ6isfVw` |
| Update A Print Job | POST | `/prints/{{id}}` | `conn_mod_def::GLK-G01e91g::ch7UcqCRTii33OzbjYZWOw` |

### MailingListRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Recipients In A Mailing List | GET | `/mailing_lists/{{mailingList}}/recipients` | `conn_mod_def::GLK-GQITarA::Ul3-3vHyRWKDroSSP0rv4g` |
| Retrieve A Mailing List Recipient | GET | `/mailing_lists/{{mailingList}}/recipients/{{id}}` | `conn_mod_def::GLK-GP0FEyA::42FhNA9fTuKqfBE_HnZqgw` |
| Create A Mailing List Recipient | POST | `/mailing_lists/{{mailingList}}/recipients` | `conn_mod_def::GLK-GOSVu_A::QU0A4U7qTwSVETYRiQ3y_w` |
| Delete A Mailing List Recipient | DELETE | `/mailing_lists/{{mailingList}}/recipients/{{id}}` | `conn_mod_def::GLK-Gi77BIg::oBbeObRwTmmVZJeLpGlS3g` |
| Update A Mailing List Recipient | POST | `/mailing_lists/{{mailingList}}/recipients/{{id}}` | `conn_mod_def::GLK-GORZjbA::aYII0uNYQBe0iHj4RhdCQA` |

### Backgrounds

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Backgrounds | GET | `/v1/backgrounds` | `conn_mod_def::GLK-GGVXg_A::SRk5pb2OT9GM6CmMAOtSCw` |
| Retrieve A Background | GET | `/backgrounds/{{id}}` | `conn_mod_def::GLK-GGAdr5A::1JyiCVOBTHOB4dt4TF_pKQ` |
| Create A Background | POST | `/backgrounds` | `conn_mod_def::GLK-GF-mi5A::AuVqIu9jSDSrTORs4BEHPQ` |
| Delete A Background | DELETE | `/backgrounds/{{id}}` | `conn_mod_def::GLK-GGbPblA::bujNDH4kTMS4qT2kx8f0Qg` |
| Update A Background | POST | `/backgrounds/{{id}}` | `conn_mod_def::GLK-GGTz0IA::lYar-qmOQHOLJswWBjm2-A` |

### MailingLists

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Mailing Lists | GET | `/v1/mailing_lists` | `conn_mod_def::GLK-GrfoXMg::abedU3WkSuyEra-v9Zv2Xg` |
| Retrieve A Mailing List | GET | `/mailing_lists/{{id}}` | `conn_mod_def::GLK-GsFIhjA::gfxJ0MWISjWFvFNzXhzHCw` |
| Create A Mailing List | POST | `/v1/mailing_lists` | `conn_mod_def::GLK-Gr9jNAA::0CVadblrTuKdKR7OTfXSew` |
| Delete A Mailing List | DELETE | `/mailing_lists/{{id}}` | `conn_mod_def::GLK-Gr-AQYA::iAgyC4zWRISWRysaKy4m7g` |
| Update A Mailing List | POST | `/mailing_lists/{{id}}` | `conn_mod_def::GLK-GrgAJqA::o2wAPFzoTIWqhjXLzAq0BQ` |

## When a call fails

The error comes from Intelliprint, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/intelliprint

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
