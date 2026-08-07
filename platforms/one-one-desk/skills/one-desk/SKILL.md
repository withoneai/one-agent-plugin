---
name: one-desk
description: OneDesk is a unified work management platform that provides helpdesk, project management, live chat, and workflow automation capabilities, allowing teams to manage customer support requests, internal tasks, and service delivery from a single system with API and integration support. Read and write OneDesk data through One: attachments, customers, items, projects, timers, timesheets and more, 93 actions with real parameter documentation. Use whenever the user asks to look something up in OneDesk, create or update a record there, or build code against the OneDesk API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: one-desk
  generated-from: one-knowledge-base
---

# OneDesk through One

OneDesk is a unified work management platform that provides helpdesk, project management, live chat, and workflow automation capabilities, allowing teams to manage customer support requests, internal tasks, and service delivery from a single system with API and integration support.

One exposes OneDesk through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `one-desk` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OneDesk is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OneDesk account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Attachment by External ID | GET | `/rest/public/attachments/externalId/{{externalId}}` | `conn_mod_def::GK8PshF2U_A::ExnXw5X2Tp-wC3ZGZiRJxw` |
| Add Attachment to a Portfolio | POST | `/rest/public/attachments/portfolio/{{externalId}}` | `conn_mod_def::GK8PsXnfE7A::TCDU_J-jTWijX-ei90_dvg` |
| Add Attachment to a Project | POST | `/rest/public/attachments/project/{{externalId}}` | `conn_mod_def::GK8PsXMZU9g::FXCDxH5RS1qSNOk81hnM6Q` |
| Add Attachment to an Item | POST | `/rest/public/attachments/item/{{externalId}}` | `conn_mod_def::GK8PsX4KL2A::cYMziuyXQd23_3oZFtPVLA` |
| Create Attachment | POST | `/rest/public/attachments/` | `conn_mod_def::GK8PsiTp1dg::hjubco9xQ9-boH_76EBzQA` |
| Filter Attachment Details | POST | `/rest/public/attachments/filter/details` | `conn_mod_def::GK8PsgRlQBg::hdLiORo4RbSDfJ3Wz2AKlA` |
| Filter Attachment External IDs | POST | `/rest/public/attachments/filter` | `conn_mod_def::GK8PshFlwcA::-F8IRtSJRSyEFj1MxEIitQ` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Customer by External ID | GET | `/rest/public/customers/externalId/{{externalId}}` | `conn_mod_def::GK8PtLKNl4g::L97aD8UHT_icRjPzLxb2lQ` |
| Get Customer by ID | GET | `/rest/public/customers/id/{{id}}` | `conn_mod_def::GK8PtKKy4Eg::bALY8UhaQM-G-bR4Ve_Q7A` |
| Create Customer | POST | `/rest/public/customers/` | `conn_mod_def::GK8Ps-gEHrA::cxf-jWgAQ2-SFilp3NwyFw` |
| Filter Customers and Get Customer External IDs | POST | `/rest/public/customers/filter` | `conn_mod_def::GK8PtLKFlMA::18UOilBMS06Rp0yilmQ7ig` |
| Filter Customers With Details | POST | `/rest/public/customers/filter/details` | `conn_mod_def::GK8PtKJBr7g::WxlapOhoQauV9Cg5vUjsEQ` |
| Update Customer by External ID | POST | `/rest/public/customers/externalId/{{externalId}}` | `conn_mod_def::GK8PtKKQmtg::3x6Y1cOnQFe455IH5Yps-A` |
| Update Customer by ID | POST | `/rest/public/customers/id/{{id}}` | `conn_mod_def::GK8PtTiQ-vA::77gkQCimTd6dQFdNW706Vg` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Item Details by External ID | GET | `/rest/public/items/externalId/{{externalId}}` | `conn_mod_def::GK8Ptm1I_kA::XB-OsR4rRjWzfDbNv90h_g` |
| Get Item Details by ID | GET | `/rest/public/items/id/{{id}}` | `conn_mod_def::GK8PtmddH8A::sqfM6OiHQ5i6IiXC7RN4Kg` |
| Create Work Item | POST | `/rest/public/items/` | `conn_mod_def::GK8PtcpK-uA::KlhddBjiSniFkrnE8exXWw` |
| Filter Items and Get External IDs | POST | `/rest/public/items/filter` | `conn_mod_def::GK8PtcUFWvg::rP7wZxvCSfqlWQ1NbVWdnQ` |
| Filter Items With Details | POST | `/rest/public/items/filter/details` | `conn_mod_def::GK8PtdLs2XA::_XImy9upQeCR2nCVxnxoTg` |
| Update an Item by External ID | POST | `/rest/public/items/externalId/{{externalId}}` | `conn_mod_def::GK8PtmcdxQA::Qc2G599cT0abrp-ylGJEFw` |
| Update Item by ID | POST | `/rest/public/items/id/{{id}}` | `conn_mod_def::GK8PtmthXjg::6fGzplehRYWkK7-IptoLqg` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project (by ID) | GET | `/rest/public/projects/id/{{id}}` | `conn_mod_def::GK8PucFzNrg::ckeDUVhpS6-2nOadU-LWSw` |
| Get Project by External ID | GET | `/rest/public/projects/externalId/{{externalId}}` | `conn_mod_def::GK8PuZtT4Bg::9-lK3aOBQSOCZ9UQz_HuRg` |
| Create a Project | POST | `/rest/public/projects/` | `conn_mod_def::GK8PuOO8Pdg::LfnX51mpRzGBjZbOIyb2Gw` |
| Filter Project External IDs | POST | `/rest/public/projects/filter` | `conn_mod_def::GK8Puabjo1A::r_NQCoMsRcG_K_6K8YKj5g` |
| Filter Projects and Get Project Details | POST | `/rest/public/projects/filter/details` | `conn_mod_def::GK8PuilbKKg::a9TVh5Q6RUWKFyRHHmVz3A` |
| Update Project (by ID) | POST | `/rest/public/projects/id/{{id}}` | `conn_mod_def::GK8PuryWv4g::Hrz-eKYCR32PEAJ4EiTVvQ` |
| Update Project by External ID | POST | `/rest/public/projects/externalId/{{externalId}}` | `conn_mod_def::GK8PuZt2zYA::vBh8X_ZDQjiKSrKj3PrOSg` |

### Timers

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel Work Timer | GET | `/rest/public/timers/cancel/{{timerExternalId}}` | `conn_mod_def::GK8Pu-E9jmA::3pzX-hbASsuHpWvjnZo11Q` |
| Get Timer by External ID | GET | `/rest/public/timers/externalId/{{externalId}}` | `conn_mod_def::GK8PvKgNGDA::K3Hfe3dlQui4u231cjnv4Q` |
| Pause Work Timer | GET | `/rest/public/timers/pause/{{timerExternalId}}` | `conn_mod_def::GK8PvJogRnA::E-9F4XBsSUSmIIaxYcW-ZA` |
| Resume Work Timer | GET | `/rest/public/timers/resume/{{timerExternalId}}` | `conn_mod_def::GK8PvKEBYjA::h2--cHcsTnmqFA6NaZfdbA` |
| Start Work Timer by External ID | GET | `/rest/public/timers/start/{{timerExternalId}}/{{itemExternalId}}` | `conn_mod_def::GK8PvLAIVoA::PvcgvN2LQs21qWcImTne9Q` |
| Filter Timer External IDs | POST | `/rest/public/timers/filter` | `conn_mod_def::GK8PvAUdswA::XqaVn_lZQjq3TKK6bGdYAQ` |
| Filter Timers With Details | POST | `/rest/public/timers/filter/details` | `conn_mod_def::GK8PvBvfG7A::yYXwOhA5Tna9Cpx2rUzktA` |

### Timesheets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Timesheet by External ID | GET | `/rest/public/timesheets/externalId/{{externalId}}` | `conn_mod_def::GK8PvT9sjzA::IAS14r6TRN-wChTVUz30Ig` |
| Get a Timesheet by ID | GET | `/rest/public/timesheets/id/{{id}}` | `conn_mod_def::GK8PvTsvalA::Lsm70PUITM2oeLicSgw1rw` |
| Create Timesheet | POST | `/rest/public/timesheets/` | `conn_mod_def::GK8PvKw8jSg::IXFk8Yo1SRKJ8Dyvn_QmSw` |
| Filter Timesheets and Get External IDs | POST | `/rest/public/timesheets/filter` | `conn_mod_def::GK8Pvj5qWHg::K7pKUeA_TaiBlAhwVqNBag` |
| Filter Timesheets and Get Timesheet Details | POST | `/rest/public/timesheets/filter/details` | `conn_mod_def::GK8PvT08Dug::H0pnFc0GQKquvvMKDOVEKw` |
| Update a Timesheet (by ID) | POST | `/rest/public/timesheets/id/{{id}}` | `conn_mod_def::GK8PvsO5Fcg::cwMY-vX7QHSEPc18eJYgfA` |
| Update Timesheet by External ID | POST | `/rest/public/timesheets/externalId/{{externalId}}` | `conn_mod_def::GK8PvUH95Ig::r5n8M2p1RCmNisC1aNSOCA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/rest/public/users/id/{{id}}` | `conn_mod_def::GK8Pv4ORY8g::oc0ej_iqRDqMq1B3rcax4g` |
| Get User by External ID | GET | `/rest/public/users/externalId/{{externalId}}` | `conn_mod_def::GK8Pvs2fgkg::rvZttHYzTSCzGRBH_gaSxw` |
| Create User | POST | `/rest/public/users/` | `conn_mod_def::GK8PvvyqKEA::6JTLu4ORR562B5cnaIjDvg` |
| Filter User Details | POST | `/rest/public/users/filter/details` | `conn_mod_def::GK8PvsnRhnA::8Hs2DjgfS82BTl0z3jj7Og` |
| Filter Users and Get User External IDs | POST | `/rest/public/users/filter` | `conn_mod_def::GK8PvtEMtMg::gZyZZy7XRqiNxiKy4UFa9A` |
| Update a User by External ID | POST | `/rest/public/users/externalId/{{externalId}}` | `conn_mod_def::GK8Pv551cDA::8rdl8yoORAug1dkaLoLQiQ` |
| Update a User by ID | POST | `/rest/public/users/id/{{id}}` | `conn_mod_def::GK8Pv3n26LA::ewohG-EzRumUs4PofyZGbw` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Invoice by External ID | GET | `/rest/public/invoices/externalId/{{externalId}}` | `conn_mod_def::GK8PtUAIdsg::GLVtONFfQuCCUzdglxNjfQ` |
| Get Invoice by ID | GET | `/rest/public/invoices/id/{{id}}` | `conn_mod_def::GK8PtT-lMLg::oNDOOwB8TRGSAGkqzzSnwA` |
| Filter Invoice Details | POST | `/rest/public/invoices/filter/details` | `conn_mod_def::GK8PtTi3ZuA::MBRnrkRaTOqShprOEiDAOg` |
| Filter Invoice External IDs | POST | `/rest/public/invoices/filter` | `conn_mod_def::GK8PtTm1y-A::hMwwBpBcTqWCB44v6Fr7yA` |
| Update Invoice by External ID | POST | `/rest/public/invoices/externalId/{{externalId}}` | `conn_mod_def::GK8Ptc_eDug::kQljvEvyQSOypSgBbiTumg` |
| Update Invoice by ID | POST | `/rest/public/invoices/id/{{id}}` | `conn_mod_def::GK8Ptc75krg::8I30oRqlTtuGGKOgYS_5NA` |

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Quote by External ID | GET | `/rest/public/quotes/externalId/{{externalId}}` | `conn_mod_def::GK8Pur--D2g::GZmb6wYXRMW1fQgH2HTxFA` |
| Get Quote by ID | GET | `/rest/public/quotes/id/{{id}}` | `conn_mod_def::GK8PurtzgPA::iN8tlt77TEa7Y8ts8Gb8dQ` |
| Filter Quote Details | POST | `/rest/public/quotes/filter/details` | `conn_mod_def::GK8PusQ_p7g::wEIzOeJ1TwCSV4TamQNmNQ` |
| Filter Quotes | POST | `/rest/public/quotes/filter` | `conn_mod_def::GK8PusEVmLg::KvSKc8c-R96gLn182wPw9w` |
| Update Quote by External ID | POST | `/rest/public/quotes/externalId/{{externalId}}` | `conn_mod_def::GK8Pu0_D22A::lYCOlRBGRMmXVrw3PDKf7Q` |
| Update Quote by ID | POST | `/rest/public/quotes/id/{{id}}` | `conn_mod_def::GK8Pu0l9gNA::PtRbBF75RsSeJIxfalSfyg` |

### ConversationMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conversation Message by External ID | GET | `/rest/public/conversation-messages/externalId/{{externalId}}` | `conn_mod_def::GK8PsrUrKBg::P4sHGiQPSi-yKREit1w4gQ` |
| Create Conversation Message | POST | `/rest/public/conversation-messages/` | `conn_mod_def::GK8Psgw-d3g::-ZO3rYtOQrmLxZjPoy-qqA` |
| Filter Conversation Messages and Get Conversation Message Details | POST | `/rest/public/conversation-messages/filter/details` | `conn_mod_def::GK8PsrmTTMg::u20VvvVTSguw1knmhsPOiQ` |
| Filter Conversation Messages External IDs | POST | `/rest/public/conversation-messages/filter` | `conn_mod_def::GK8PsrfuwKA::Otkglnd3S0mKIxwNIFSW3Q` |
| Update a Conversation Message by External ID | POST | `/rest/public/conversation-messages/externalId/{{externalId}}` | `conn_mod_def::GK8PsrU12mA::18EiQuyRThSrWg-wabDX7A` |

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Conversations by External ID | GET | `/rest/public/conversations/externalId/{{externalId}}` | `conn_mod_def::GK8Ps0aBfGg::_5zti0qpSom_O2LwC9G9mg` |
| Create Conversation | POST | `/rest/public/conversations/` | `conn_mod_def::GK8PsqvGT3g::xC3n2MeoQnyG21IAh6W13A` |
| Filter Conversation Details | POST | `/rest/public/conversations/filter/details` | `conn_mod_def::GK8Ps0bA00A::ePDzlL1HTHOqZXjwG1Pj8w` |
| Filter Conversation External IDs | POST | `/rest/public/conversations/filter` | `conn_mod_def::GK8Ps0o2lSg::UrzNzNMWQlGXNxHGqa7uyA` |
| Update a Conversation by External ID | POST | `/rest/public/conversations/externalId/{{externalId}}` | `conn_mod_def::GK8Ps1iM5rg::NXI_FjiTTgOFwluEjgmgSA` |

### Portfolios

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Portfolio by External ID | GET | `/rest/public/portfolios/externalId/{{externalId}}` | `conn_mod_def::GK8PuOasMdg::xSO7Fuk-QoGgmxxkzVeksw` |
| Create Portfolio | POST | `/rest/public/portfolios/` | `conn_mod_def::GK8PtvyqGhA::aUrMZoVvQc6jgbjLevdbTw` |
| Filter Portfolio Details | POST | `/rest/public/portfolios/filter/details` | `conn_mod_def::GK8PuOlJJ8A::2w6vzwdkSm6Vt7L3j9l2kA` |
| Filter Portfolios and Get Portfolio External IDs | POST | `/rest/public/portfolios/filter` | `conn_mod_def::GK8PuQ2USwA::HxJ8vtipSGS3cHqz7APsjg` |
| Update Portfolio by External ID | POST | `/rest/public/portfolios/externalId/{{externalId}}` | `conn_mod_def::GK8PuOdKeWA::XcazgEiASUOh_9VVGib4UA` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Details by External ID | GET | `/rest/public/teams/externalId/{{externalId}}` | `conn_mod_def::GK8Pu-HBIfg::zdnFZ0xVRemBeYhVJ34FRg` |
| Create User Team | POST | `/rest/public/teams/` | `conn_mod_def::GK8Puz0x-zA::E-BI2FjiTFi7X2fcfpTncA` |
| Filter Teams and Get Team Details | POST | `/rest/public/teams/filter/details` | `conn_mod_def::GK8Pu17GENg::mcLgsj1PRBOX4nmS4kKxPQ` |
| Filter Teams and Get Team External IDs | POST | `/rest/public/teams/filter` | `conn_mod_def::GK8Pu0q-mAg::XaPiOYYQS52PcmBsJgg6gA` |
| Update User Team by External ID | POST | `/rest/public/teams/externalId/{{externalId}}` | `conn_mod_def::GK8Pu_MOURA::AhpddmK6S4-QLuJyEON_yA` |

### CustomerOrganizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Customer Organization by External ID | GET | `/rest/public/customer-organizations/externalId/{{externalId}}` | `conn_mod_def::GK8Ps-xc1ig::fmj4UTmxS_Cv9aTY8fuD8w` |
| Create Customer Organization | POST | `/rest/public/customer-organizations/` | `conn_mod_def::GK8PszwQ7KA::aCbLTbiuQuCVgZiopkXTKQ` |
| Filter Customer Organization External IDs | POST | `/rest/public/customer-organizations/filter` | `conn_mod_def::GK8PtAnalIg::7om_olP5TqOLU2sT9BDNbw` |
| Update Customer Organization by External ID | POST | `/rest/public/customer-organizations/externalId/{{externalId}}` | `conn_mod_def::GK8Ps-tj47A::hgzZUyQFSxy6ky-xNjrliA` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Filter Activities and Get Activity Details | POST | `/rest/public/activities/filter/details` | `conn_mod_def::GK8PsWq80xg::aZqWriTES6ya7tRVWx8VbA` |

### CustomerOrganizationAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Add an Attachment to a Customer Organization | POST | `/rest/public/attachments/customer-organization/{{externalId}}` | `conn_mod_def::GK8PsXvsZCg::7yxp2yrkTD66oGf2rjXoig` |

### CustomerOrganizationDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Filter Customer Organization Details | POST | `/rest/public/customer-organizations/filter/details` | `conn_mod_def::GK8Ps-ei78g::7OsiXUuBQtqJsxAMHILMlQ` |

### OrganizationContainerTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Container Types | GET | `/rest/public/organization/containerTypes` | `conn_mod_def::GK8Ptmcd6Cg::dLCXKz_QQP2ucp32nXflUw` |

### OrganizationWorkItemTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Work Item Types | GET | `/rest/public/organization/itemTypes` | `conn_mod_def::GK8PtvTXKCg::nRsN23nRRyqaf_mk9sGu_w` |

This lists 90 of 93 actions. For anything not here, call `search_one_platform_actions` with platform `one-desk`. The full catalog is at https://www.withone.ai/knowledge/one-desk.

## When a call fails

The error comes from OneDesk, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/one-desk

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
