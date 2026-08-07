---
name: bonsai
description: Bonsai is a business management platform for freelancers and small service businesses that provides proposals, contracts, time tracking, invoicing, expense tracking, and client CRM tools, allowing users to manage projects, billing, and operations from a single system. Read and write Bonsai data through One: tasks, contacts, companies, deals, invoices, timeentries and more, 35 actions with real parameter documentation. Use whenever the user asks to look something up in Bonsai, create or update a record there, or build code against the Bonsai API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bonsai
  generated-from: one-knowledge-base
---

# Bonsai through One

Bonsai is a business management platform for freelancers and small service businesses that provides proposals, contracts, time tracking, invoicing, expense tracking, and client CRM tools, allowing users to manage projects, billing, and operations from a single system.

One exposes Bonsai through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bonsai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Bonsai is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Bonsai account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Task's Subtasks | GET | `/public-api/v1/tasks/{{taskId}}/subtasks` | `conn_mod_def::GMhtNmbHWiA::C2BEj7UiSZSHrgb6UAEdHw` |
| List Tasks | GET | `/public-api/v1/tasks` | `conn_mod_def::GMhtNnUjJgg::rOEBd6fYRFWT-LvFJ0TZ1A` |
| Retrieve a Task | GET | `/public-api/v1/tasks/{{uuid}}` | `conn_mod_def::GMhtNlRBJjg::Tq_sIQwQT6mzK9M-VDizDw` |
| Create a Task | POST | `/public-api/v1/tasks` | `conn_mod_def::GMhtNlZAtyg::qEGu04jYRUOWmerXsqeUaA` |
| Delete a Task | DELETE | `/public-api/v1/tasks/{{uuid}}` | `conn_mod_def::GMhtNloOdIA::V8PfiuvzR16xYL63Ceiozg` |
| Update a Task | PATCH | `/public-api/v1/tasks/{{uuid}}` | `conn_mod_def::GMhtNtMCdag::nBYfNkNCSqm2b6iCedxBAg` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contacts | GET | `/public-api/v1/contacts` | `conn_mod_def::GMhtNPFwARA::4ph83rxbQbCFIF7QOtVcNg` |
| Retrieve a Contact by ID | GET | `/public-api/v1/contacts/{{id}}` | `conn_mod_def::GMhtNO8XV4g::2XB9HbXwTdqm5vnmDWhMVg` |
| Create a Contact | POST | `/public-api/v1/contacts` | `conn_mod_def::GMhtNILPnYg::W7l5nWhLQO-PuCkpn5U4kg` |
| Update a Contact | PATCH | `/public-api/v1/contacts/{{id}}` | `conn_mod_def::GMhtNO8cEng::yTtDNiUgSMaYesfg7-mtqQ` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Companies | GET | `/public-api/v1/companies` | `conn_mod_def::GMhtNILHopA::HgeazFzKT0myu6LbNerSZw` |
| Create a Company | POST | `/public-api/v1/companies` | `conn_mod_def::GMhtNHlz4PA::T-YBUg-eRBKCQBIgWDYv9g` |
| Update a Company | PATCH | `/public-api/v1/companies/{{id}}` | `conn_mod_def::GMhtNHmOEBA::JGQq7nMsR_ii8KGREtWc7Q` |

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Deals | GET | `/public-api/v1/deals` | `conn_mod_def::GMhtNPdexcA::j2IQM5eHTY-GegInojSrDA` |
| Create a Deal | POST | `/public-api/v1/deals` | `conn_mod_def::GMhtNPXAZ6A::r9xDJ6JpSyeK7w61slkhqw` |
| Update a Deal | PATCH | `/public-api/v1/deals/{{id}}` | `conn_mod_def::GMhtNVrWcPg::Ecz-g5SNQxSULCbw6IIgWw` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invoices | GET | `/public-api/v1/invoices` | `conn_mod_def::GMhtNWQ_TPA::qLou66YwQ9Cfdh3xner8Bg` |
| Create an Invoice | POST | `/public-api/v1/invoices` | `conn_mod_def::GMhtNXYUzng::CjeAZ5b1Qgq03P-4Q1eWBA` |
| Update an Invoice | PATCH | `/public-api/v1/invoices/{{id}}` | `conn_mod_def::GMhtNd4zozA::1X0WCGm7S_-qhQ0ee-RoaQ` |

### TimeEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Time Entries | GET | `/public-api/v1/time_entries` | `conn_mod_def::GMhtNvONHhg::-TicR4HAR7Cq_kd-1cMP1Q` |
| Log a Time Entry | POST | `/public-api/v1/time_entries` | `conn_mod_def::GMhtNt9erLg::KOwib3jTQpuFdH-cMawSOg` |
| Update a Time Entry | PATCH | `/public-api/v1/time_entries/{{key}}` | `conn_mod_def::GMhtNvXsHLg::BPpoFjTIQu653x5fiv07kg` |

### DealComments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments for a Deal | GET | `/public-api/v1/deals/{{dealId}}/comments` | `conn_mod_def::GMhtNBLYnvg::agV19dfjRWaOB9ZOK2H33w` |
| Create a Comment on a Deal | POST | `/public-api/v1/deals/{{dealId}}/comments` | `conn_mod_def::GMhtNAtAWJg::ztLgwt7oT7eJPfCB1PmDZQ` |

### TaskComments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments for a Task | GET | `/public-api/v1/tasks/{{taskId}}/comments` | `conn_mod_def::GMhtNBLplrg::Erzf6s4VTs24uC1BQm0siQ` |
| Create a Comment on a Task | POST | `/public-api/v1/tasks/{{taskId}}/comments` | `conn_mod_def::GMhtNBfpW9A::DccB4lHEQUeDtbzPNX5fDg` |

### InvoiceLineItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove an Invoice Line Item | DELETE | `/public-api/v1/invoices/{{invoiceId}}/invoice_items/{{id}}` | `conn_mod_def::GMhtNX0ODeg::l3xhNzsVS7COVIUtG_eYeg` |
| Update an Invoice's Line Item | PATCH | `/public-api/v1/invoices/{{invoiceId}}/invoice_items/{{id}}` | `conn_mod_def::GMhtNd453PA::9HjEVoaARniGgyQuDgiCXw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/public-api/v1/projects` | `conn_mod_def::GMhtNfsen0A::8a8aQd0YSqK7eugviygYXQ` |
| Create a Project | POST | `/public-api/v1/projects` | `conn_mod_def::GMhtNdaUAgA::lJtVzrcESyWvYtTHju7KsA` |

### BoardGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Board Groups | GET | `/public-api/v1/board_groups` | `conn_mod_def::GMhtNBOY0hg::VyZ7PSXcR4GcR9dzbBY-sA` |

### CompanyTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Tags | GET | `/public-api/v1/company_tags` | `conn_mod_def::GMhtNIvz1zA::5O4_bEW7RnqLwO420Cxolw` |

### InvoiceItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Add an Invoice Item to an Invoice | POST | `/public-api/v1/invoices/{{invoiceId}}/invoice_items` | `conn_mod_def::GMhtNV6abjg::MrVS_a50TJ-V2PTbvZ2pkQ` |

### TaskStatuses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Task Statuses | GET | `/public-api/v1/task_statuses` | `conn_mod_def::GMhtNeQd-xA::zVFgeldWRFKVxJoBNldURQ` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Team Members | GET | `/public-api/v1/team_members` | `conn_mod_def::GMhtNtwh1SA::B8sejd0STTWvrHJR2PyYAA` |

## When a call fails

The error comes from Bonsai, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bonsai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
