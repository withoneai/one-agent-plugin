---
name: sign-well
description: SignWell is an electronic signature platform that enables businesses to send, sign, and manage documents online through templates, workflows, and API integrations, allowing teams to streamline contract execution, approvals, and document collection without manual paperwork. Read and write SignWell data through One: documents, bulksends, documenttemplates, apiapplications, hooks, bulksenddocuments and more, 26 actions with real parameter documentation. Use whenever the user asks to look something up in SignWell, create or update a record there, or build code against the SignWell API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sign-well
  generated-from: one-knowledge-base
---

# SignWell through One

SignWell is an electronic signature platform that enables businesses to send, sign, and manage documents online through templates, workflows, and API integrations, allowing teams to streamline contract execution, approvals, and document collection without manual paperwork.

One exposes SignWell through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `sign-well` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SignWell is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SignWell account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Download NOM-151 Certificate for a Document | GET | `/api/v1/documents/{{id}}/nom151_certificate` | `conn_mod_def::GL4cIVHEYSc::rYVW1WVvRqGyVOzn8TP2mw` |
| Get a Completed PDF for a Document | GET | `/api/v1/documents/{{id}}/completed_pdf` | `conn_mod_def::GL4cICcyX2E::3Z94b8TSStS6SIydMmaZ_Q` |
| Get Document | GET | `/api/v1/documents/{{id}}` | `conn_mod_def::GL4cIJ-r39w::Ot198v_DTYSf4hVJnAUKvA` |
| Create Document Using SignWell API v1 | POST | `/api/v1/documents` | `conn_mod_def::GL4cIDlfa9s::98IppqOPTVazygOw-EgMSw` |
| Delete Document | DELETE | `/api/v1/documents/{{id}}` | `conn_mod_def::GL4cIMf1hlY::wZ2kHYwdTmq_ovjVlkI-YQ` |
| Send a Document Using Documents | POST | `/api/v1/documents/{{id}}/send` | `conn_mod_def::GL4cIOmvIwM::ToUodQtxRyOh6KjhfZBYMw` |
| Send Reminder for a Document | POST | `/api/v1/documents/{{id}}/remind` | `conn_mod_def::GL4cIMNSthY::oqjtr0fFSguRLIrhGe5EWA` |
| Update Authentication for a Document | PATCH | `/api/v1/documents/{{id}}/authentication` | `conn_mod_def::GL4cIZUCC9g::JB4kHQBgQJOdJRjx9w4upQ` |
| Update Recipients for a Document | PATCH | `/api/v1/documents/{{id}}/recipients` | `conn_mod_def::GL4cIbBT7RE::iczjq2qjQUe0AV7_kJIdsw` |

### BulkSends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bulk Send | GET | `/api/v1/bulk_sends/{{id}}` | `conn_mod_def::GL4cH66itLE::i4b-bWEMTdOq6BRgpODKZw` |
| Get Bulk Send CSV Template | GET | `/api/v1/bulk_sends/csv_template` | `conn_mod_def::GL4cH2jndmM::zowpHZi7SROZ1KZFg73fXA` |
| List Bulk Sendings | GET | `/api/v1/bulk_sends` | `conn_mod_def::GL4cICnL-gE::ua8g75peRBqRTxs5R0xo6A` |
| Create Bulk Send | POST | `/api/v1/bulk_sends` | `conn_mod_def::GL4cH1chz4M::EcHsVrmqRLm3TmdyWUp0VA` |
| Validate CSV for a Bulk Send | POST | `/api/v1/bulk_sends/validate_csv` | `conn_mod_def::GL4cICwBzhI::p59eNA1JQmGXHXUdhlJQFw` |

### DocumentTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document Template | GET | `/api/v1/document_templates/{{id}}` | `conn_mod_def::GL4cIhVC0yQ::u7NiFNcSQ6eNVhG07J5sHA` |
| Create Document from Template | POST | `/api/v1/document_templates/documents` | `conn_mod_def::GL4cIKkcGPI::7uLExaQPRbyZHmlHYKr9cg` |
| Create Template | POST | `/api/v1/document_templates` | `conn_mod_def::GL4cIVl3YUE::B3RS4ZcSSGG1ZSHXhc3KPQ` |
| Delete a Document Template | DELETE | `/api/v1/document_templates/{{id}}` | `conn_mod_def::GL4cIi1fOVc::r0-fOJyfSXGiyor-Di8UWA` |
| Update a Document Template | PUT | `/api/v1/document_templates/{{id}}` | `conn_mod_def::GL4cIiJdenU::whF1oX3TSuGe4dx67sYV2g` |

### ApiApplications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API Application | GET | `/api/v1/api_applications/{{id}}` | `conn_mod_def::GL4cH3WOGNA::11I0BwTCT8W8wTxZqENIrQ` |
| Delete an API Application | DELETE | `/api/v1/api_applications/{{id}}` | `conn_mod_def::GL4cH2VaqYo::yFUJawJxQTaiKUVcZ-QtDw` |

### Hooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Webhook | POST | `/api/v1/hooks` | `conn_mod_def::GL4cIiCfiJM::ffnE85P7S0SSgCMFIFKuGQ` |
| Delete Webhook | DELETE | `/api/v1/hooks/{{id}}` | `conn_mod_def::GL4cIhNH8zM::-ETTOE2gTfS4fugtUbiKyA` |

### BulkSendDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulk Send Documents | GET | `/api/v1/bulk_sends/{{id}}/documents` | `conn_mod_def::GL4cIC5WWLM::OtlUKK4OQWiUzgrTp2343A` |

### Credentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credentials | GET | `/api/v1/me` | `conn_mod_def::GL4cIUe2tDo::UndNj_u_TuiTS7pQNijnXw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/api/v1/hooks` | `conn_mod_def::GL4cIoiN2Bk::tHZDFQieTICoxYs5OwE9jw` |

## When a call fails

The error comes from SignWell, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sign-well

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
