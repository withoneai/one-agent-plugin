---
name: gorilla-desk
description: GorillaDesk is a field service management platform for service businesses such as pest control, lawn care, pool service, and cleaning companies. It provides scheduling and dispatch, customer management, job tracking, estimates, invoicing, online payments, and document management from a single web and mobile interface. Read and write GorillaDesk data through One: customers, credits, estimates, documents, jobs, invoices and more, 23 actions with real parameter documentation. Use whenever the user asks to look something up in GorillaDesk, create or update a record there, or build code against the GorillaDesk API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gorilla-desk
  generated-from: one-knowledge-base
---

# GorillaDesk through One

GorillaDesk is a field service management platform for service businesses such as pest control, lawn care, pool service, and cleaning companies. It provides scheduling and dispatch, customer management, job tracking, estimates, invoicing, online payments, and document management from a single web and mobile interface.

One exposes GorillaDesk through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gorilla-desk` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm GorillaDesk is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real GorillaDesk account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customers | GET | `/v1/customers` | `conn_mod_def::GMg12b3Pfcs::SgMuuYj9T7-j-z1e5Amt1A` |
| Retrieve a Customer | GET | `/v1/customers/{{customerId}}` | `conn_mod_def::GMg12y6CBgc::CpAtHo11TlicEOkKfMdRLQ` |
| Create a Customer | POST | `/v1/customers` | `conn_mod_def::GMg12ZBt5lg::wL7lBxPQRzq7QOs1HdRGjA` |
| Update a Customer | PUT | `/v1/customers/{{customerId}}` | `conn_mod_def::GMg12yoUelc::jHNpysLfQlaSM0J6my9nHQ` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customer Credits | GET | `/v1/credits` | `conn_mod_def::GMg12sfbf78::3F8IeSSMS-enGm3keiE4ZA` |
| Retrieve a Customer Credit | GET | `/v1/credits/{{creditId}}` | `conn_mod_def::GMg12ZXt9RM::cFX6rPnqSsGUdK2T5xyv3Q` |

### Estimates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Estimates | GET | `/v1/estimates` | `conn_mod_def::GMg12z-wrJw::i-vLObILRWizI3dH7QJBCg` |
| Retrieve an Estimate | GET | `/v1/estimates/{{estimateId}}` | `conn_mod_def::GMg12-y8-rU::OA-0r-y5TdWjlq67fqbcdA` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Documents | GET | `/v1/documents` | `conn_mod_def::GMg121Rf9Lw::sgSQ00QzQzybjnNHRLSx-g` |
| Retrieve a Document | GET | `/v1/documents/{{documentId}}` | `conn_mod_def::GMg121_ATJE::2ipRrLwHSeaWpQ8nqGuK6A` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Jobs | GET | `/v1/jobs` | `conn_mod_def::GMg12-CHMpg::dzMEquHGR_e_yQgJiQkMhA` |
| Retrieve a Job | GET | `/v1/jobs/{{jobId}}` | `conn_mod_def::GMg12-Begp0::xctYOY_7QEGxN-lV84Dp5g` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invoices | GET | `/v1/invoices` | `conn_mod_def::GMg12-m_nic::7hzPWxCeRSKTRVlwINjGQA` |
| Retrieve an Invoice | GET | `/v1/invoices/{{invoiceId}}` | `conn_mod_def::GMg12-Y1070::tvAPQs7GRAuJJlE-TdJN_w` |

### Services

| Action | Method | Path | Action id |
|---|---|---|---|
| List Services | GET | `/v1/services` | `conn_mod_def::GMg13FRgeN0::9OoSaO3LQXGVtrtRGJ66rA` |
| Retrieve a Service | GET | `/v1/services/{{serviceId}}` | `conn_mod_def::GMg13OfrrVg::e6TKSguTRKKjGIrJtCtoDA` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Payments | GET | `/v1/payments` | `conn_mod_def::GMg13Feg_Go::JV1qEcGjT86gbEG68DATjw` |
| Retrieve a Payment | GET | `/v1/payments/{{paymentId}}` | `conn_mod_def::GMg13IZClz4::2yI8hXhZQEe5kbpHxdR3RA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/v1/users` | `conn_mod_def::GMg13OBEMLQ::HlBpcWRkQFWwIw2CsKKK3A` |
| Retrieve a User | GET | `/v1/users/{{userId}}` | `conn_mod_def::GMg13Olc-ps::UCM5P4-xSJC89Wncch5itg` |

### Company

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Company | GET | `/v1/company` | `conn_mod_def::GMg12ZEssUE::RWXO4AmlTXymDDVHcNhIMg` |

### PhoneTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Phone Types | GET | `/v1/phone-types` | `conn_mod_def::GMg13FR0fKQ::wxbNQcCsQCKg8ucZ-uijYw` |

### CustomerNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Customer Note | POST | `/v1/customers/{{customerId}}/notes` | `conn_mod_def::GMg13Fbw8uM::yjB5jeJ4T9SNgMdk4osEfw` |

## When a call fails

The error comes from GorillaDesk, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gorilla-desk

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
