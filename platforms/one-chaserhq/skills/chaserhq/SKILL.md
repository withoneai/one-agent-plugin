---
name: chaserhq
description: ChaserHQ is an accounts receivable automation platform that provides invoice chasing, payment reminders, debtor tracking, and credit control workflows, allowing finance teams to reduce late payments, improve cash flow, and integrate collections processes with accounting systems. Read and write ChaserHQ data through One: invoices, creditnotes, overpayments, customers, customercontactpersons, contactpersons and more, 35 actions with real parameter documentation. Use whenever the user asks to look something up in ChaserHQ, create or update a record there, or build code against the ChaserHQ API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: chaserhq
  generated-from: one-knowledge-base
---

# ChaserHQ through One

ChaserHQ is an accounts receivable automation platform that provides invoice chasing, payment reminders, debtor tracking, and credit control workflows, allowing finance teams to reduce late payments, improve cash flow, and integrate collections processes with accounting systems.

One exposes ChaserHQ through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `chaserhq` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ChaserHQ is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ChaserHQ account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Invoice by ID | GET | `/v1/invoices/{{invoiceId}}` | `conn_mod_def::GLNXYQ6X4kg::nwkEAb3_Tj256wGSaYXNnw` |
| List Invoices | GET | `/v1/invoices` | `conn_mod_def::GLNXYWm-DSg::Z-lCTa3rQ9Say94LSENYnw` |
| Bulk Upsert Invoices | PUT | `/v1/bulk/invoices` | `conn_mod_def::GLNXYEVVpuA::lq5wUOQzRZumzXe4KYU3Sw` |
| Create Invoice | POST | `/invoices` | `conn_mod_def::GLNXYFD4ywg::MTYhW8rgRYSPCfOPnckJxA` |
| Update Invoice | PUT | `/v1/invoices/{{invoiceId}}` | `conn_mod_def::GLNXYT7mUuA::XgZiOINIQVq6iXPWMQTbkw` |
| Upload Invoice PDF | POST | `/v1/invoices/{{invoiceId}}/pdf` | `conn_mod_def::GLNXYfOipkg::qPgRajwkS0aWaCzYqP1uvA` |

### CreditNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Credit Note by ID | GET | `/v1/credit_notes/{{creditNoteId}}` | `conn_mod_def::GLNXXOoUJ3g::Fr2s59TFS7eRBgjxEIWAdA` |
| Get Credit Notes | GET | `/v1/credit_notes` | `conn_mod_def::GLNXXVxCswA::nmlXrcnISYCrATYJgGntHw` |
| Bulk Upsert Credit Notes | PUT | `/v1/bulk/credit_notes` | `conn_mod_def::GLNXXO_903g::ErYRQoz5RcSSJUEG3MRSig` |
| Create Credit Notes | POST | `/v1/credit_notes` | `conn_mod_def::GLNXXQUBfsg::Bu2ht8JERKGIlBaa7JnhuQ` |
| Update a Credit Note | PUT | `/v1/credit_notes/{{creditNoteId}}` | `conn_mod_def::GLNXX7yUa5g::IreLEhZ_Q-62fP_RfvTlVA` |

### Overpayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Overpayment by ID | GET | `/v1/overpayments/{{overpaymentId}}` | `conn_mod_def::GLNXYpFtDwg::XI48jMAOQTCRbbJ9K_yRHg` |
| Get Overpayments | GET | `/v1/overpayments` | `conn_mod_def::GLNXYrDp3XA::hSOVzKPuQNiWgp4JEBKfTg` |
| Bulk Upsert Overpayments | PUT | `/v1/bulk/overpayments` | `conn_mod_def::GLNXYfJ04GA::L0sg2PauS_eXwoJi1xohGw` |
| Create Overpayment | POST | `/v1/overpayments` | `conn_mod_def::GLNXYpFcD3g::G9fGGyL3QMySjel1fs3A8A` |
| Update Overpayment | PUT | `/v1/overpayments/{{overpaymentId}}` | `conn_mod_def::GLNXYpDPlog::djHSQb_yQESC0h3IfI04WQ` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer by ID | GET | `/v1/customers/{{customerId}}` | `conn_mod_def::GLNXX1DguCA::GZBHo5BVQTGqTnsZ5YxwuA` |
| Get Customers | GET | `/v1/customers` | `conn_mod_def::GLNXX1Ub6QA::m-QUALCeQ0OCbHcdII-tUg` |
| Bulk Upsert Customers | PUT | `/v1/bulk/customers` | `conn_mod_def::GLNXXyrateA::Sex_vaeJSxSA0KtmGoBPOQ` |
| Create Customer | POST | `/customers` | `conn_mod_def::GLNXX2LuTSA::FHVUVIcbRvKM4tgheJ9X6g` |
| Update a Customer | PUT | `/v1/customers/{{customerId}}` | `conn_mod_def::GLNXYJQ0O_A::LtrIS0YLS563yZFHASpp3w` |

### CustomerContactPersons

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Customer Contact Person | POST | `/v1/customers/{{customerId}}/contact_persons` | `conn_mod_def::GLNXW5w-k2g::E5JxNVJDTaWGA3M8BRRo8Q` |
| Delete a Customer Contact Person | DELETE | `/v1/customers/{{customerId}}/contact_persons/{{contactPersonId}}` | `conn_mod_def::GLNXW5Yc9xg::khjO9NPZTxCxYA8jtLQgRA` |
| Update a Customer Contact Person | PUT | `/v1/customers/{{customerId}}/contact_persons/{{contactPersonId}}` | `conn_mod_def::GLNXXp--KWA::t5He226nRaWqMltQK80kTw` |

### ContactPersons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Person by ID for a Customer | GET | `/v1/customers/{{customerId}}/contact_persons/{{contactPersonId}}` | `conn_mod_def::GLNXXG37O7g::RARn7OOARciVgUayOkEHGA` |
| Get Contact Persons for a Customer | GET | `/v1/customers/{{customerId}}/contact_persons` | `conn_mod_def::GLNXW5x1zCA::SE_M2xZMQj6FQ0TT-rTl2A` |
| Bulk Upsert Contact Persons for a Customer | PUT | `/v1/bulk/customers/{{customerId}}/contact_persons` | `conn_mod_def::GLNXW5Xa7Ng::-rtQawP4RUWLfDeQC4FOJw` |

### Organisation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Organisation | GET | `/v1/organisation` | `conn_mod_def::GLNXYgiSVGg::pFpM03tXRbygKxeLEW67xw` |
| Sync Organisation | POST | `/organisation/sync` | `conn_mod_def::GLNXYd_IRHA::sS5AmuDfRcWLmakaWDTMSw` |

### InvoiceHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Invoice History | GET | `/invoices/history` | `conn_mod_def::GLNXYU2DMvA::nAA-E6vTQ_ODD8y1Sy3gfA` |
| Get Invoice History by ID | GET | `/v1/invoices/{{invoiceId}}/history` | `conn_mod_def::GLNXYRYWDRA::astDyZQRTEGBDuVuncM6FA` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks | GET | `/v1/tasks` | `conn_mod_def::GLNXYsKqY-A::Th_u3H44RZCO8aVdzKjSqQ` |

### Status

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Status | GET | `/status/` | `conn_mod_def::GLNXYIMVXFA::B1rvCJUQQO-ca4b4mmsemA` |

### Root

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Root | GET | `/` | `conn_mod_def::GLNXYDt4WlA::mejDrEA1S4GT4ODfzmGh6Q` |

### Organisations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organisations | GET | `/v1/organisations` | `conn_mod_def::GLNXYee-rHg::YlGw8nhARWeIGnIYb-Z5tA` |

## When a call fails

The error comes from ChaserHQ, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/chaserhq

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
