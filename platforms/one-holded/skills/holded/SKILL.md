---
name: holded
description: Holded is an all-in-one cloud-based business management platform that enables small and medium-sized businesses to manage accounting, invoicing, CRM, inventory, projects, and HR from a single integrated system, automating workflows and centralizing operations for improved efficiency. Read and write Holded data through One: documents, employees, products, leads, projects, funnels and more, 136 actions with real parameter documentation. Use whenever the user asks to look something up in Holded, create or update a record there, or build code against the Holded API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: holded
  generated-from: one-knowledge-base
---

# Holded through One

Holded is an all-in-one cloud-based business management platform that enables small and medium-sized businesses to manage accounting, invoicing, CRM, inventory, projects, and HR from a single integrated system, automating workflows and centralizing operations for improved efficiency.

One exposes Holded through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `holded` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Holded is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Holded account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document PDF | GET | `/api/invoicing/v1/documents/{{docType}}/{{documentId}}/pdf` | `conn_mod_def::GKYtn80YV_A::qfDyDSuZSKGHEq1x_ed0WQ` |
| Get Document | GET | `/api/invoicing/v1/documents/{{docType}}/{{documentId}}` | `conn_mod_def::GKYtnzYTVTA::0HCKQLyZS9K9bOs1v4dAqg` |
| Get Shipped Units by Item for a Document | GET | `/api/invoicing/v1/documents/{{docType}}/{{documentId}}/shippeditems` | `conn_mod_def::GKYtoGEeCRg::pltLcvEXSBOYJ3WRzStSBg` |
| List Documents | GET | `/api/invoicing/v1/documents/{{docType}}` | `conn_mod_def::GKYtn19Gnqg::AwK4IFOZT6qolb_MJZEZlA` |
| Attach File to a Specific Document | POST | `/api/invoicing/v1/documents/{{docType}}/{{documentId}}/attach` | `conn_mod_def::GKYtnqpkHdA::_D_j-VgGQIWSTnYcup7hNg` |
| Create Document | POST | `/api/invoicing/v1/documents/{{docType}}` | `conn_mod_def::GKYtnqiKCog::gNyU1X2gS42fi8WK0qkwyQ` |
| Delete Document | DELETE | `/api/invoicing/v1/documents/{{docType}}/{{documentId}}` | `conn_mod_def::GKYtnzYc3pg::KuHRyPNbQ3mZbYG1UxtqQg` |
| Pay Document | POST | `/api/invoicing/v1/documents/{{docType}}/{{documentId}}/pay` | `conn_mod_def::GKYtoGWCA2A::obfZYGhIToeKqS1lJ81-Hg` |
| Send a Specific Document by Email | POST | `/api/invoicing/v1/documents/{{docType}}/{{documentId}}/send` | `conn_mod_def::GKYtoF-xXaA::xGdwldJoRDm3FgihJCJU_g` |
| Update a Document | PUT | `/api/invoicing/v1/documents/{{docType}}/{{documentId}}` | `conn_mod_def::GKYtoPLbrqA::GEwYzVL6RImZkEQaE3PjuQ` |
| Update a Specific Document Pipeline | POST | `/api/invoicing/v1/documents/{{docType}}/{{documentId}}/pipeline/set` | `conn_mod_def::GKYtoO6AIJg::JA0D_SzXTkGbNxkSUibpCQ` |

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Employee | GET | `/api/team/v1/employees/{{employeeId}}` | `conn_mod_def::GKYtocFO1Sg::3cFSu7E4QpuWX2zX-9-VWg` |
| List Employees | GET | `/api/team/v1/employees` | `conn_mod_def::GKYtof-mu4g::RTNbfgPASNqWqehktliNSw` |
| Clock In an Employee's Time Tracking | POST | `/api/team/v1/employees/{{employeeId}}/times/clockin` | `conn_mod_def::GKYtotyZ18g::-yyZ5xdvQG2IKT4vAUrhkw` |
| Clock Out an Employee's Time Tracking | POST | `/api/team/v1/employees/{{employeeId}}/times/clockout` | `conn_mod_def::GKYtorcpBPA::BjIqeP5yRB2NfCp-KtSoXQ` |
| Create Employee | POST | `/api/team/v1/employees` | `conn_mod_def::GKYtoO7Ruzg::Cay7Szp-SuKed0_6Wo3hEA` |
| Delete an Employee | DELETE | `/api/team/v1/employees/{{employeeId}}` | `conn_mod_def::GKYtoOzpySg::574Nlr_ySimv-dT4zfBxyA` |
| Pause an Employee's Time-Tracking | POST | `/api/team/v1/employees/{{employeeId}}/times/pause` | `conn_mod_def::GKYtovsfTeA::4RQSLqRARa-4SVpLhoDKlg` |
| Unpause an Employee's Time-Tracking | POST | `/api/team/v1/employees/{{employeeId}}/times/unpause` | `conn_mod_def::GKYtorEUk7g::di17ZjIXQaOI2ueqeIgGxg` |
| Update an Employee | PUT | `/api/team/v1/employees/{{employeeId}}` | `conn_mod_def::GKYtoa6zY8A::pT5a0QK1RGeWq6dY7T445g` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product Secondary Image | GET | `/api/invoicing/v1/products/{{productId}}/image/{{imageFileName}}` | `conn_mod_def::GKYtqR9YByg::6bMvkDpfRCSX6AOFdJOErA` |
| Get a Product's Main Image | GET | `/api/invoicing/v1/products/{{productId}}/image` | `conn_mod_def::GKYtqLIQ0tA::-C6llkgoSwCL7HtBdAbPKw` |
| Get Product | GET | `/api/invoicing/v1/products/{{productId}}` | `conn_mod_def::GKYtqLJxgNA::mqfPKBeaS42WwyzO7Wt5Jw` |
| List a Product's Images | GET | `/api/invoicing/v1/products/{{productId}}/imagesList` | `conn_mod_def::GKYtqLaY7xg::d2bKmOMNQ1Cdf_Sgi_Hy0Q` |
| List Products | GET | `/api/invoicing/v1/products` | `conn_mod_def::GKYtqYxtjMA::fPNgRZ_PSgm8pY8Qfx-COw` |
| Create Product | POST | `/api/invoicing/v1/products` | `conn_mod_def::GKYtqCLgktA::RRV4XYWYTKesXXwDq0dCWg` |
| Delete Product | DELETE | `/api/invoicing/v1/products/{{productId}}` | `conn_mod_def::GKYtqLw681g::o8f_n5nGTM-4EHxP0wuZTg` |
| Update Product | PUT | `/api/invoicing/v1/products/{{productId}}` | `conn_mod_def::GKYtqhCD5Wg::yKdRzvk1RtOnmYt-m3mXDA` |
| Update Product Stock | PUT | `/api/invoicing/v1/products/{{productId}}/stock` | `conn_mod_def::GKYtqaDt8pg::d2ZrcMTVReeW9tvjKHKEEw` |

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Lead | GET | `/api/crm/v1/leads/{{leadId}}` | `conn_mod_def::GKYtpevMHmA::jVcyCaoEQE2cGiwB6_lDbQ` |
| List Leads | GET | `/api/crm/v1/leads` | `conn_mod_def::GKYtpe1fcGA::AKhH3GpwSk6atJczEr0z6A` |
| Create Lead | POST | `/api/crm/v1/leads` | `conn_mod_def::GKYtpWDJGQg::l2hOepZHTa-2lk0h-EOOiw` |
| Delete a Lead | DELETE | `/api/crm/v1/leads/{{leadId}}` | `conn_mod_def::GKYtperf-UA::QsqXyzvyScqESWqt8pKTRQ` |
| Update a Lead's Creation Date | PUT | `/api/crm/v1/leads/{{leadId}}/dates` | `conn_mod_def::GKYtpoJUZ3A::qHOyoQH7Qhe57A-GZxY_yA` |
| Update a Lead's Stage | PUT | `/api/crm/v1/leads/{{leadId}}/stages` | `conn_mod_def::GKYtpoFYsfA::XH8uCdcASGuTO_xyjw6X4A` |
| Update Lead | PUT | `/api/crm/v1/leads/{{leadId}}` | `conn_mod_def::GKYtpoBnxig::_xqGXIDpSVufUscGkn2lVw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/api/projects/v1/projects/{{projectId}}` | `conn_mod_def::GKYtqo11O4A::CqHenmEWSGGAuNiVG7QMmA` |
| Get a Project Summary | GET | `/api/projects/v1/projects/{{projectId}}/summary` | `conn_mod_def::GKYtqo11Twg::X1eJnPx8RPy1Wsxg1NPPMQ` |
| List Projects | GET | `/api/projects/v1/projects` | `conn_mod_def::GKYtqpB2Ujg::G2rpW4xlS4G-T0LU3bwCUA` |
| Create Project | POST | `/api/projects/v1/projects` | `conn_mod_def::GKYtqaDoSWA::vMSKYq_YQgqPg__jq-Rlig` |
| Delete Project | DELETE | `/api/projects/v1/projects/{{projectId}}` | `conn_mod_def::GKYtqf59SZA::4iLRIaQOQm2Ts2Biwbx1MA` |
| Update Project | PUT | `/api/projects/v1/projects/{{projectId}}` | `conn_mod_def::GKYtqpK9QLA::7LCFkQoPRVWUlwsx1l25AA` |

### Funnels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Funnel | GET | `/api/crm/v1/funnels/{{funnelId}}` | `conn_mod_def::GKYtpWqA69g::L8AhZhdPSv-oMvi_WgeEWg` |
| List Funnels | GET | `/api/crm/v1/funnels` | `conn_mod_def::GKYtpWKCQog::1nlVGgaHRmm27O_aKJiPcQ` |
| Create Funnel | POST | `/api/crm/v1/funnels` | `conn_mod_def::GKYtpJ2R2Pg::aoV_wFuaRiu8AK6hELXyWg` |
| Delete Funnel | DELETE | `/api/crm/v1/funnels/{{funnelId}}` | `conn_mod_def::GKYtpNyxSWA::qRgA8iFUSEegow1Y0ZrkMQ` |
| Update Funnel | PUT | `/api/crm/v1/funnels/{{funnelId}}` | `conn_mod_def::GKYtpWp7qDA::AVMmrUZ4TJuMXFSK6LzHSA` |

### Bookings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Booking | GET | `/api/crm/v1/bookings/{{bookingId}}` | `conn_mod_def::GKYtm59pjXg::iQ9veFSaT7SjuxbQsgdZNA` |
| List Bookings | GET | `/api/crm/v1/bookings` | `conn_mod_def::GKYtm5itfhg::uNblbBlvSNqytQ1DWR_ZBQ` |
| Cancel Booking | DELETE | `/api/crm/v1/bookings/{{bookingId}}` | `conn_mod_def::GKYtnC2gSng::XRjRolP2QRKvmRfPzvuppw` |
| Create Booking | POST | `/api/crm/v1/bookings` | `conn_mod_def::GKYtm5Waaeg::hlBzwPEwTfWpAvIrHv97hg` |
| Update Booking | PUT | `/api/crm/v1/bookings/{{bookingId}}` | `conn_mod_def::GKYtnLAbrBg::fxAnRDxGREyPIPMkm5SHFQ` |

### ContactGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Group | GET | `/api/invoicing/v1/contacts/groups/{{groupId}}` | `conn_mod_def::GKYtnXiS8ng::ThZwRw6-QTuhmLh5i7JNPg` |
| List Contact Groups | GET | `/api/invoicing/v1/contacts/groups` | `conn_mod_def::GKYtnWbwPNg::gdENc60ARzi3cbbkCAmWig` |
| Create Contact Group | POST | `/api/invoicing/v1/contacts/groups` | `conn_mod_def::GKYtnK23tAg::PF9wYoSkQX6Nak9m4Z2WZg` |
| Delete Contact Group | DELETE | `/api/invoicing/v1/contacts/groups/{{groupId}}` | `conn_mod_def::GKYtnYIDBhg::cfuNsVVNTqiom_ez5IamTQ` |
| Update Contact Group | PUT | `/api/invoicing/v1/contacts/groups/{{groupId}}` | `conn_mod_def::GKYtnXIVPAg::ENJdhEVOQG6p0jW_2UWZMg` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact | GET | `/api/invoicing/v1/contacts/{{contactId}}` | `conn_mod_def::GKYtng-eD7g::T-cAQn4JTWma-3OsXHXlow` |
| List Contacts | GET | `/api/invoicing/v1/contacts` | `conn_mod_def::GKYtniTy6Eg::mjQyzjthS_6eOgX4Djn53w` |
| Create Contact | POST | `/api/invoicing/v1/contacts` | `conn_mod_def::GKYtnXX7NIA::5ETODamsSMS3jBCCHFPpXQ` |
| Delete Contact | DELETE | `/api/invoicing/v1/contacts/{{contactId}}` | `conn_mod_def::GKYtngMl9Ag::JO3bcmcLTsCJZvc1yppM9A` |
| Update Contact | PUT | `/api/invoicing/v1/contacts/{{contactId}}` | `conn_mod_def::GKYtnq6sTtA::0ubnUV9hRmaw4GdyylJITQ` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Event | GET | `/api/crm/v1/events/{{eventId}}` | `conn_mod_def::GKYtpBfkhNA::8uuCPQ5iSPClvkoBWlY9Jg` |
| List Events | GET | `/api/crm/v1/events` | `conn_mod_def::GKYtpBtVpyA::JM37uW7LT0-FoADNOQjqLg` |
| Create Event | POST | `/api/crm/v1/events` | `conn_mod_def::GKYto4tOEiA::ZeQcEAUwS_-dBp_0NPqycA` |
| Delete Event | DELETE | `/api/crm/v1/events/{{eventId}}` | `conn_mod_def::GKYto3J4uag::OVedS7IXRhGzJR437bQrXw` |
| Update Event | PUT | `/api/crm/v1/events/{{eventId}}` | `conn_mod_def::GKYtpBq3hqg::KiW8OnqbReit29De9USArw` |

### ExpensesAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Expenses Account | GET | `/api/invoicing/v1/expensesaccounts/{{expensesAccountId}}` | `conn_mod_def::GKYtpJdzdOA::kyqGoHT5Qhq_w0O_XtW1GQ` |
| List Expenses Accounts | GET | `/api/invoicing/v1/expensesaccounts` | `conn_mod_def::GKYtpJdq2cA::6v9MwmF-SKSF6SoXTx08eg` |
| Create Expenses Account | POST | `/api/invoicing/v1/expensesaccounts` | `conn_mod_def::GKYtpBuMqSg::bqcnaTHWSFOjma_jbBgH8g` |
| Delete an Expenses Account | DELETE | `/api/invoicing/v1/expensesaccounts/{{expensesAccountId}}` | `conn_mod_def::GKYtpBhGFWA::65aKZFmeS3qKeHPLIl_Gpw` |
| Update an Expenses Account | PUT | `/api/invoicing/v1/expensesaccounts/{{expensesAccountId}}` | `conn_mod_def::GKYtpJ7kuuA::OIDRcG5iS0GiyZtC-AtSCw` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Payment | GET | `/api/invoicing/v1/payments/{{paymentId}}` | `conn_mod_def::GKYtqB2YxFA::NVGQem8fTgicX83xLDMuKQ` |
| List Payments | GET | `/api/invoicing/v1/payments` | `conn_mod_def::GKYtqCwl6Qg::auh-vxtkSz2NFEi3zYiKaQ` |
| Create Payment | POST | `/api/invoicing/v1/payments` | `conn_mod_def::GKYtp3OotUA::M6SPjmgDTg-5ortSK_toag` |
| Delete Payment | DELETE | `/api/invoicing/v1/payments/{{paymentId}}` | `conn_mod_def::GKYtqAMPvLA::-zoCeA4PRVmakYAOFF_rUQ` |
| Update Payment | PUT | `/api/invoicing/v1/payments/{{paymentId}}` | `conn_mod_def::GKYtqCUIVNA::7LLLkuWTS4OOXszcL84LmQ` |

### SalesChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sales Channel | GET | `/api/invoicing/v1/saleschannels/{{salesChannelId}}` | `conn_mod_def::GKYtqxVaXwg::tk2IedIiRHqfHIBsECLpaQ` |
| List Sales Channels | GET | `/api/invoicing/v1/saleschannels` | `conn_mod_def::GKYtqxa9E7g::HG4WnkC3RhqZ2YwcqvydRw` |
| Create Sales Channel | POST | `/api/invoicing/v1/saleschannels` | `conn_mod_def::GKYtqxY_wbA::kaNYOXWDSwKRwgomlWqNIg` |
| Delete Sales Channel | DELETE | `/api/invoicing/v1/saleschannels/{{salesChannelId}}` | `conn_mod_def::GKYtqwbLF3A::XNN1ckLkQ2eIfDGnlrZMDw` |
| Update Sales Channel | PUT | `/api/invoicing/v1/saleschannels/{{salesChannelId}}` | `conn_mod_def::GKYtq6ob5iA::PZXwlFMhR0CWNzbUjXjVHQ` |

### Services

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Service | GET | `/api/invoicing/v1/services/{{serviceId}}` | `conn_mod_def::GKYtq5kWicA::dh04mmneTJiBahRHFeYXLg` |
| List Services | GET | `/api/invoicing/v1/services` | `conn_mod_def::GKYtq5scNTA::h1QlB4HrR_eAJJcolHvuYA` |
| Create Service | POST | `/api/invoicing/v1/services` | `conn_mod_def::GKYtq5GjlhA::jJ0FYYm5QMSMA2er7pRg1A` |
| Delete Service | DELETE | `/api/invoicing/v1/services/{{serviceId}}` | `conn_mod_def::GKYtq5dHDWg::v0RPuUDNRt-AQX9PXTNkYg` |
| Update Service | PUT | `/api/invoicing/v1/services/{{serviceId}}` | `conn_mod_def::GKYtrC-ICsg::Clu37NF4Q7K_yU-rkSAmOA` |

### Warehouses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Warehouse | GET | `/api/invoicing/v1/warehouses/{{warehouseId}}` | `conn_mod_def::GKYtrb9RwrA::m21DSoA8Q5qJqwB1e8aUZA` |
| List Warehouses | GET | `/api/invoicing/v1/warehouses` | `conn_mod_def::GKYtrcZJsjA::qQH3peMkSVizVstVBBdBMw` |
| Create Warehouse | POST | `/api/invoicing/v1/warehouses` | `conn_mod_def::GKYtrdgIXBA::tHLqybgxQrKlvEskhixqlQ` |

2 more Warehouses actions are available through search.

This lists 90 of 136 actions. For anything not here, call `search_one_platform_actions` with platform `holded`. The full catalog is at https://www.withone.ai/knowledge/holded.

## When a call fails

The error comes from Holded, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/holded

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
