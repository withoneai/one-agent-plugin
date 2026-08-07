---
name: agiled
description: Agiled is an all-in-one business management platform that helps freelancers and small businesses manage CRM, projects, finances, contracts, invoicing and client portals within a unified workspace. Read and write Agiled data through One: tasks, payments, deals, products, projects, tickets and more, 166 actions with real parameter documentation. Use whenever the user asks to look something up in Agiled, create or update a record there, or build code against the Agiled API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: agiled
  generated-from: one-knowledge-base
---

# Agiled through One

Agiled is an all-in-one business management platform that helps freelancers and small businesses manage CRM, projects, finances, contracts, invoicing and client portals within a unified workspace.

One exposes Agiled through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `agiled` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Agiled is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Agiled account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks | GET | `/api/v1/tasks` | `conn_mod_def::GJe8bPJgp0I::H5G27k9hQ9WzyAijpkbyfw` |
| Delete a Task | DELETE | `/tasks/{{id}}` | `conn_mod_def::GJe8b36-BEE::c3Ab0STET1uEhc9yrSTBjg` |
| Mark a Task as Complete | PUT | `/tasks/markcomplete/{{id}}` | `conn_mod_def::GJe8bo8xr5w::9CyUyeFKRWCQg-irTFYxAg` |
| Send a Reminder for a Task | PUT | `/tasks/remindForTask/{{id}}` | `conn_mod_def::GJe8bhNhbQo::9gi0nTNsQ1uWpTX9YsnXsw` |
| Store New Task | POST | `/api/v1/tasks` | `conn_mod_def::GJe8bUwIjSI::Vc7-46bNTpqeo8te0TYMCw` |
| Update a Task | PUT | `/tasks/{{id}}` | `conn_mod_def::GJe8byDNhw8::9Pycb_xzRzSRVWNIOchFkA` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Payments | GET | `/api/v1/payment` | `conn_mod_def::GJe8YWLuu0g::97nHUQLjSJK-W8kD-UHthQ` |
| List Payments | GET | `/api/v1/payments` | `conn_mod_def::GJe8X9xT9Yw::QibNkPmzT9atMPVDqiv7EA` |
| Delete a Payment | DELETE | `/payments/{{id}}` | `conn_mod_def::GJe8YPjdYDk::tvqpfTtLSTeeWif_yGrjPg` |
| Store New Payment | POST | `/api/v1/payments` | `conn_mod_def::GJe8YD8qR0w::Pp_eAZiATCecm1oTpU3EWA` |
| Update a Payment | PUT | `/payments/{{id}}` | `conn_mod_def::GJe8YKCCDkE::aj8G55vmRhifdKudq5R2KQ` |

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deal | GET | `/v1crm/deals/{{id}}` | `conn_mod_def::GJe8SdKMsnQ::iaFAdTHNTzKnHUYvQQFE6g` |
| List Deals | GET | `/api/v1/crm/deals` | `conn_mod_def::GJe8SP0_Ix0::s3hiUik8QJ6T7Q5ah6K7FA` |
| Create a Deal | POST | `/api/v1/crm/deals` | `conn_mod_def::GJe8SW9Ew6A::DHGLjSOtSMSmpANTQ5j4yw` |
| Delete a Deal | DELETE | `/crm/deals/{{id}}` | `conn_mod_def::GJe8Ss7OaMg::h8l2wFaISM2bI0q2SlqGMw` |
| Update a Deal | PUT | `/crm/deals/{{id}}` | `conn_mod_def::GJe8SmipQ9k::elfYV-ejQsOLD6tzKX-aZA` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| List Products | GET | `/products` | `conn_mod_def::GJe8YfPDHN8::a3gwZDZ9QyyGzC8vVGLdFw` |
| Delete a Product | DELETE | `/products/{{id}}` | `conn_mod_def::GJe8ZAycybU::tfE_ZYvARh6NR3TyNjeCbg` |
| Store a New Product | POST | `/api/v1/products` | `conn_mod_def::GJe8YlXCISY::sKu54fFaRjKUujAUSZAS8w` |
| Update a Product | PUT | `/products/{{id}}` | `conn_mod_def::GJe8Y7Nj3VU::hQzeNncJSmKxR-eiZ3Mk9w` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/projects` | `conn_mod_def::GJe8Zq6wOjg::8Ux9PYbxSdSSSfFWDAdIcQ` |
| Delete a Project | DELETE | `/projects/{{id}}` | `conn_mod_def::GJe8aMiADgg::WCLqs0EtTra-0sc0ZOeVMg` |
| Store New Project | POST | `/api/v1/projects` | `conn_mod_def::GJe8ZwW9VUM::jTKuPHavT4-moDjN0VYV8Q` |
| Update a Project | PUT | `/projects/{{id}}` | `conn_mod_def::GJe8Z9Mk5vU::ZqV8lAM_SYSrhOzjADC3hQ` |

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tickets | GET | `/api/v1/tickets` | `conn_mod_def::GJe8eJDtVJg::D7Q-p3_KQDyE4iF1KWqB3A` |
| Create a Ticket | POST | `/api/v1/tickets` | `conn_mod_def::GJe8ePxdEno::iJwzHX-QSJKYuE1CCTb1wA` |
| Delete a Ticket | DELETE | `/tickets/{{id}}` | `conn_mod_def::GJe8etEZAkc::J8RljeqYQxCu2LRdMZwwAQ` |
| Update a Ticket | PUT | `/tickets/{{id}}` | `conn_mod_def::GJe8em0Bpwo::ITxDre7cTEOHMaQrILM5XA` |

### Timelogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Timelogs | GET | `/timelogs/{{id}}` | `conn_mod_def::GJe8fijz2nQ::T2ALKs93QfCIRKBPZR74pA` |
| Delete a TimeLog | DELETE | `/timelogs/{{id}}` | `conn_mod_def::GJe8fuhdQBk::9PYsMLP9Rd-zit6nvct_3g` |
| Store a New Timelog | POST | `/api/v1/timelogs` | `conn_mod_def::GJe8fdYNHcc::j5NcmFXlR1erpejxGe0eBw` |
| Update a Timelog | PUT | `/timelogs/{{id}}` | `conn_mod_def::GJe8fnz9YyI::vERWJH62SsWq8jz9p53mEw` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| List Events | GET | `/api/v1/events` | `conn_mod_def::GJe8U4cn6rQ::KG0T3ARLTHW3AAd6UiyisQ` |
| Delete an Event | DELETE | `/events/{{id}}` | `conn_mod_def::GJe8VT9QfGo::tV_EZRJxSzulfuAHwzQMWA` |
| Store a New Event | POST | `/api/v1/events` | `conn_mod_def::GJe8VI4tLFQ::6JkvS7HzQt-aIhZdaDiCYQ` |
| Update an Event | PUT | `/events/{{id}}` | `conn_mod_def::GJe8VPBxViY::2XNr58fVRoyfoXigyiEf4A` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contacts | GET | `/api/v1/contacts` | `conn_mod_def::GJe8NWaF5IE::vvNyMposSrO4lj1LsWkUjQ` |
| Delete a Contact | DELETE | `/contacts/{{id}}` | `conn_mod_def::GJe8N6zFaP0::e02iTaFHSi2R4PxweQ-BNw` |
| Store New Contact | POST | `/api/v1/contacts` | `conn_mod_def::GJe8NoiOWhI::hh5oYDOXSjKQFe3OzSpaCg` |
| Update a Contact | PUT | `/contacts/{{id}}` | `conn_mod_def::GJe8NzcXTps::ar5Cch_OQOWk3dTZ5L6mHQ` |

### TicketChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Ticket Channels | GET | `/api/v1/ticketchannels` | `conn_mod_def::GJe8cwxm0-4::z5t-JbXKR7eYza3hvWq-pA` |
| Create a Ticket Channel | POST | `/api/v1/ticketchannels` | `conn_mod_def::GJe8c31QQDk::-xSc_YMgTYKw57xFkGOASA` |
| Delete a Ticket Channel | DELETE | `/ticketchannels/{{id}}` | `conn_mod_def::GJe8doX_peU::mZN92EfzTlisHzRs84mzhg` |
| Update a Ticket Channel | PUT | `/ticketchannels/{{id}}` | `conn_mod_def::GJe8dhqE-SE::nMI9OAGxRCuy6M3pK2N33w` |

### Estimates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Estimates | GET | `/api/v1/estimates` | `conn_mod_def::GJe8T2cfpjE::Btveskw9Tzy49VRKpQ5Zjg` |
| Delete an Estimate | DELETE | `/estimates/{{id}}` | `conn_mod_def::GJe8UR7LPho::9XswvDn4TweJuYT9NPy0zQ` |
| Store a New Estimate | POST | `/api/v1/estimates` | `conn_mod_def::GJe8T-XXowo::bY_B7NrIR-e13AhVLUHggA` |
| Update an Estimate | PUT | `/estimates/{{id}}` | `conn_mod_def::GJe8UMwmOho::f6G9JXtTR12Yv5XxzfvICQ` |

### Expenses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Expenses | GET | `/api/v1/expenses` | `conn_mod_def::GJe8VZz3FmI::kNVLNBkzRkegEkfiY_uDFA` |
| Delete an Expense | DELETE | `/expenses/{{id}}` | `conn_mod_def::GJe8V2APH3c::b1SOb_UXQOyz_5yg9xz6nA` |
| Store a New Expense | POST | `/api/v1/expenses` | `conn_mod_def::GJe8VgCjsM8::7wy46LbZRoyXO0_ImDHk1w` |
| Update an Expense | PUT | `/expenses/{{id}}` | `conn_mod_def::GJe8VwGxq-M::BKB7iW3VTPmb926TKhKerA` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Accounts | GET | `/api/v1/accounts` | `conn_mod_def::GJe8MArNOM0::4W3ys2fZQxynomINK9s9wQ` |
| Delete an Account | DELETE | `/accounts/{{id}}` | `conn_mod_def::GJe8MYmaiIw::bh575nrgQaeE1DjsVLVSWw` |
| Store New Account | POST | `/api/v1/accounts` | `conn_mod_def::GJe8MHPlq7c::LTIbmP-nTXihHoQz-BY7Tw` |
| Update an Account | PUT | `/accounts/{{id}}` | `conn_mod_def::GJe8MPiCIsU::sidG_sfOTRyc27FBh0fIqA` |

### EventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Event Types | GET | `/api/v1/event-types` | `conn_mod_def::GJe8UZrx2xU::jpvGzQMASkuOLmmHTnrLlA` |
| Create an Event Type | POST | `/api/v1/event-types` | `conn_mod_def::GJe8Uf6s05M::-Lz9d9O9TBKQa9-qXXlWpQ` |
| Delete an Event Type | DELETE | `/event-types/{{id}}` | `conn_mod_def::GJe8UxjQhBw::kIkFh_KDTh-PKvRQlZUQIA` |
| Update an Event Type | PUT | `/event-types/{{id}}` | `conn_mod_def::GJe8UszaZP4::CjKCsiKISHerDaPnuH0R3A` |

### CrmNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Notes for a CRM Contact or Account | GET | `/crm/notes/{{type}}/{{id}}` | `conn_mod_def::GJe8PJKGi80::KuPQnsL5Qv-AnWR7iTTiTA` |
| Delete a CRM Note | DELETE | `/crm/notes/{{id}}` | `conn_mod_def::GJe8PlSY5qk::Xj9VsYqYRnW0oH267jOrfA` |
| Store a New CRM Note | POST | `/crm/notes` | `conn_mod_def::GJe8PtyTfKs::yNmn4TDJS9GtG2DRosd_zQ` |
| Update a CRM Note | PUT | `/crm/notes/{{id}}` | `conn_mod_def::GJe8PdnAN4Q::p4dN2bXoTlumlFBpaY8B-g` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invoices | GET | `/api/v1/invoices` | `conn_mod_def::GJe8Wk9SJVo::fGmb_HxMTe-h0hII2Z1MbA` |
| Delete an Invoice | DELETE | `/invoices/{{id}}` | `conn_mod_def::GJe8XPzZids::cinfji_WRySUcD0U4_xdeg` |
| Get an Invoice Payment Reminder | PUT | `/invoices/{{id}}` | `conn_mod_def::GJe8XJo8iF4::A7GiEMX7SOm3AU7HbL0XuA` |
| Store a New Invoice | POST | `/api/v1/invoices` | `conn_mod_def::GJe8WuBFzQ8::BZEog1YtRda2MTmTt7IGiA` |

### TicketTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Ticket Types | GET | `/api/v1/tickettypes` | `conn_mod_def::GJe8dvs1Q1E::hXwYZdLrRsGnwYB-DLxVFg` |
| Create a Ticket Type | POST | `/tickettypes` | `conn_mod_def::GJe8d1jR5Ts::GU4cDFOmR9GrUP84_KRa4g` |
| Delete a Ticket Type | DELETE | `/tickettypes/{{id}}` | `conn_mod_def::GJe8eDDsXjw::EkvPyjvtRWu5Ob8cI7Ni4w` |
| Update a Ticket Type | PUT | `/tickettypes/{{id}}` | `conn_mod_def::GJe8d7B9dug::fi20BG1gQ3-zb3aS1btoug` |

### CrmFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a CRM File | GET | `/crm/files/download/{{type}}/{{id}}` | `conn_mod_def::GJe8OOdaA5s::TZhD15KvTf-E16i4AKNo6g` |
| Show a CRM File (by Type) | GET | `/crm/files/{{type}}` | `conn_mod_def::GJe8OU6UWH8::96hI6HA1RAikmVhOfhl7cQ` |
| View a CRM File (by Type and MD5 File ID) | GET | `/crm/files/show/{{type}}/{{id}}` | `conn_mod_def::GJe8OkvPrWE::6vD1cf4HTqeWbBvb3y6DNQ` |
| Store a New CRM File by Type | POST | `/crm/files/{{type}}` | `conn_mod_def::GJe8ObGyT_Y::pJ21abfmQIiZQtrGSb_L9A` |

### TicketReply

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Ticket Reply | DELETE | `/ticketsreply/{{id}}` | `conn_mod_def::GJe8fEHKZL4::dtXgFx6-S3m831FZaJGnQA` |
| Store a New Ticket Reply | POST | `/api/v1/ticketsreply` | `conn_mod_def::GJe8e1V0sco::C1pusyYySfSfLWwviCEaYA` |
| Update a Ticket Reply | PUT | `/ticketsreply/{{id}}` | `conn_mod_def::GJe8e9PWJUo::5z7g7e7URp20X2izusyAbQ` |

### CrmTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Contact or Account’s CRM Tasks | GET | `/crm/tasks/{{type}}/{{id}}` | `conn_mod_def::GJe8Q3hqeAc::jUUoOE5STf-s8j7hEXLx6w` |
| Create a CRM Task (by Type) | POST | `/crm/tasks/{{type}}` | `conn_mod_def::GJe8RY6mf6g::i0sJNdjLS_SFm1JhNQFcyQ` |
| Delete a CRM Task | DELETE | `/crm/tasks/{{id}}` | `conn_mod_def::GJe8Rib9VJ8::SFntPrAaRhqHVn8ubNJpdg` |

### TaskCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Task Categories | GET | `/api/v1/taskcategories` | `conn_mod_def::GJe8aeK-zAI::pVqmS0jSRFqGzZbIzIh_jw` |
| Create a Task Category | POST | `/api/v1/taskcategories` | `conn_mod_def::GJe8alXxWZA::qXNgJ3BNRPSduRzKxGmQ9w` |
| Delete a Task Category | DELETE | `/taskcategories/{{id}}` | `conn_mod_def::GJe8ayJafVY::QGx-pVLjQW6Z_KfVMJu8UA` |

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| List Employees | GET | `/api/v1/employees` | `conn_mod_def::GJe8TTFQMP0::DfcG2wMaQO6X2EvKLlkwJg` |
| Store a New Employee | POST | `/api/v1/employees` | `conn_mod_def::GJe8TcJujn8::aC4_ZybpR2W1PJeg_7KuzQ` |
| Update an Employee | PUT | `/employees/{{id}}` | `conn_mod_def::GJe8TvGLcy4::ixXZw3HzTM24JUQjl7iDdQ` |

### CrmMeeting

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a CRM Meeting | DELETE | `/crm/meetingdelete/{{ID}}` | `conn_mod_def::GJe8PB4OFMo::gDmm0FIjTsO6oS0zFp1ETA` |
| Store a New CRM Meeting (by Type) | POST | `/crm/meetings/{{type}}` | `conn_mod_def::GJe8Or8b5rA::ST1SWte2QBuz91wDdqDrCw` |

1 more CrmMeeting actions are available through search.

This lists 90 of 166 actions. For anything not here, call `search_one_platform_actions` with platform `agiled`. The full catalog is at https://www.withone.ai/knowledge/agiled.

## When a call fails

The error comes from Agiled, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/agiled

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
