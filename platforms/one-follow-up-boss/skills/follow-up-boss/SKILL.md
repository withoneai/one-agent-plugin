---
name: follow-up-boss
description: Follow Up Boss is a real estate CRM and team operating platform that centralizes contacts, leads, team workflows, and integrations, allowing agents, ISAs, and team leaders to organize their business, engage prospects, coach teams, and track activity in one place. Read and write Follow Up Boss data through One: people, templates, groups, textmessagetemplates, appointmentoutcomes, appointmenttypes and more, 156 actions with real parameter documentation. Use whenever the user asks to look something up in Follow Up Boss, create or update a record there, or build code against the Follow Up Boss API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: follow-up-boss
  generated-from: one-knowledge-base
---

# Follow Up Boss through One

Follow Up Boss is a real estate CRM and team operating platform that centralizes contacts, leads, team workflows, and integrations, allowing agents, ISAs, and team leaders to organize their business, engage prospects, coach teams, and track activity in one place.

One exposes Follow Up Boss through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `follow-up-boss` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Follow Up Boss is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Follow Up Boss account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Duplicate Person in Follow Up Boss | GET | `/v1/people/checkDuplicate` | `conn_mod_def::GMP6CdlCtX0::50XPfg4URdik1kBg70d8PQ` |
| Get a Person by ID | GET | `/v1/people/{{id}}` | `conn_mod_def::GMP6Cdu8uxE::6sScfAfzSReyoz7513Bdaw` |
| Get Unclaimed Leads | GET | `/v1/people/unclaimed` | `conn_mod_def::GMP6ClSot6U::dntWuhkPRRmytqRbqyGSQQ` |
| Search People | GET | `/v1/people` | `conn_mod_def::GMP6CWkSCNg::YuqpXyV2Rua6q8JjQCvGxQ` |
| Add a Person | POST | `/v1/people` | `conn_mod_def::GMP6CePHc_0::cCU9BzAGR9WUItjBJGee7A` |
| Claim a Lead | POST | `/v1/people/claim` | `conn_mod_def::GMP6Clu515g::pgJSAC-9TMK8is787wEr5g` |
| Delete a Person by ID | DELETE | `/v1/people/{{id}}` | `conn_mod_def::GMP6CdYK02o::IORW4gu8RUiHmj1iWhfOFQ` |
| Ignore Unclaimed Lead | POST | `/v1/people/ignoreUnclaimed` | `conn_mod_def::GMP6Cl37qYs::omkpTL07TA-O0ODj4Bi55A` |
| Update a Person by ID Using Follow Up Boss | PUT | `/v1/people/{{id}}` | `conn_mod_def::GMP6CelDWT4::eCM-YFgYR36X5P5lWJCvwA` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Email Templates | GET | `/v1/templates` | `conn_mod_def::GMP6BdqM2IA::0e5fMjOwTNeFMWsoKH5eGQ` |
| Retrieve an Email Template by ID | GET | `/v1/templates/{{id}}` | `conn_mod_def::GMP6Bmoktrg::-YAUgXTGQemfxTFXW5U_0A` |
| Create a Template | POST | `/v1/templates` | `conn_mod_def::GMP6Bcmr1qc::qGqY9bCMSgKOOgc6aepCyg` |
| Delete an Email Template | DELETE | `/v1/templates/{{id}}` | `conn_mod_def::GMP6Bn8kIfA::K_5Km5-lQ96Mjkot7JdmMQ` |
| Merge an Email Template | POST | `/v1/templates/merge` | `conn_mod_def::GMP6Bn-N8LU::-01m48j1QIy9A99yVXuCTg` |
| Update an Email Template | PUT | `/v1/templates/{{id}}` | `conn_mod_def::GMP6Bpfa15o::I_iTAjxtSDCPs1TQU3GF9A` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Groups | GET | `/v1/groups` | `conn_mod_def::GMP6BvwLGt0::g0WJU3rDRDy_nFzFnbO1FA` |
| List Round-Robin Groups | GET | `/v1/groups/roundRobin` | `conn_mod_def::GMP6B4IrFJA::JkEhvjzNT8aijWpbKZcFuw` |
| Retrieve a Group by ID | GET | `/v1/groups/{{id}}` | `conn_mod_def::GMP6Bv6UsIo::AP4xmkYxRGmhoB6oTTyJ4Q` |
| Create a Group | POST | `/v1/groups` | `conn_mod_def::GMP6BwgWpHE::fg1zfwaUQ2afPv6NFvfxUA` |
| Delete a Group | DELETE | `/v1/groups/{{id}}` | `conn_mod_def::GMP6B294qfg::7Wu3Ed1pT52n9k89FisDHA` |
| Update a Group | PUT | `/v1/groups/{{id}}` | `conn_mod_def::GMP6B45-9GI::-X-XIvxiT66VBdc6x9ZYRA` |

### TextMessageTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Text Message Templates | GET | `/v1/textMessageTemplates` | `conn_mod_def::GMP6EA6MQi8::hqzmO-1uQWO45SDDEf3m2w` |
| Retrieve a Text Message Template by ID | GET | `/v1/textMessageTemplates/{{id}}` | `conn_mod_def::GMP6EBzQDvM::YLVOSMJkTqeJt2KzKNgN0A` |
| Create a Text Message Template | POST | `/v1/textMessageTemplates` | `conn_mod_def::GMP6ENjYuWM::qUSLTw9_R7eTNZGQCcgJZA` |
| Delete a Text Message Template | DELETE | `/v1/textMessageTemplates/{{id}}` | `conn_mod_def::GMP6D_5Hg4U::br_2wCekQy-WLqgUqrxysA` |
| Merge a Text Message Template | POST | `/v1/textMessageTemplates/merge` | `conn_mod_def::GMP6EUcH6zw::W-o9ej53RFizuBreezRMtA` |
| Update a Text Message Template | PUT | `/v1/textMessageTemplates/{{id}}` | `conn_mod_def::GMP6EBB_cEM::hzy57jabTPCcofCEoXuVtQ` |

### AppointmentOutcomes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Appointment Outcomes | GET | `/v1/appointmentOutcomes` | `conn_mod_def::GMP5_a89YJs::eQ8Cr7O9TEKXm1duLPWt3g` |
| Retrieve an Appointment Outcome by ID | GET | `/v1/appointmentOutcomes/{{id}}` | `conn_mod_def::GMP5_kbb2z8::nLd-6in1QJ6yTmALy5LO0w` |
| Create an Appointment Outcome | POST | `/v1/appointmentOutcomes` | `conn_mod_def::GMP5_j9fn8g::fHN6EyxUTZm0_lqUyL4pkw` |
| Delete an Appointment Outcome by ID | DELETE | `/v1/appointmentOutcomes/{{id}}` | `conn_mod_def::GMP5_kgGhbs::rmItiqPqQq6sWTlEbgHLug` |
| Update an Appointment Outcome | PUT | `/v1/appointmentOutcomes/{{id}}` | `conn_mod_def::GMP5_kbmZhg::LIVbgWrzTU6RO6UrgQ9DRw` |

### AppointmentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Appointment Types | GET | `/v1/appointmentTypes` | `conn_mod_def::GMP5_k09e0Q::NOl0JIC7Qp--6fbZlE6Rxw` |
| Retrieve an Appointment Type by ID | GET | `/v1/appointmentTypes/{{id}}` | `conn_mod_def::GMP5_ubtcpU::xAZXVa4ORmG98NYzXUaO-g` |
| Create an Appointment Type | POST | `/v1/appointmentTypes` | `conn_mod_def::GMP5_tA2qFA::qOl2Ec3oT8aad_2SlXIU2g` |
| Delete an Appointment Type | DELETE | `/v1/appointmentTypes/{{id}}` | `conn_mod_def::GMP5_u1-XT8::VxGX3TqnSPuW36uWTJv2lQ` |
| Update an Appointment Type | PUT | `/v1/appointmentTypes/{{id}}` | `conn_mod_def::GMP5_t5oB5o::PZB6ITc8STWWJFteJbrOuw` |

### Appointments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Appointment by ID | GET | `/v1/appointments/{{id}}` | `conn_mod_def::GMP5_1qCkNc::Ls5Itfe_S7mygSp_tNDNRg` |
| Search Appointments | GET | `/v1/appointments` | `conn_mod_def::GMP5_tYG4uM::yv8aKUkrR7O1O_KNvWBc7w` |
| Create an Appointment | POST | `/v1/appointments` | `conn_mod_def::GMP5_3WyzqI::7nHCio7lRwihMkm6ymF5vg` |
| Delete an Appointment | DELETE | `/v1/appointments/{{id}}` | `conn_mod_def::GMP5_1_LZFw::9VqVr-_uT-6j2M9nSfCqDQ` |
| Update an Appointment | PUT | `/v1/appointments/{{id}}` | `conn_mod_def::GMP5_2S6KqY::4rDMXOiGQEabIe3oEY8MDg` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field by ID | GET | `/v1/customFields/{{id}}` | `conn_mod_def::GMP6ArDriis::sbVZZmxWTKyqGpb5NRnLmw` |
| List Custom Fields | GET | `/v1/customFields` | `conn_mod_def::GMP6AG5Rf-Y::MmfyysNzSp6TWt78sL5wvQ` |
| Create a Custom Field | POST | `/v1/customFields` | `conn_mod_def::GMP6AYgKsr0::_Vpq_yNyTtmU2xeYPl59QA` |
| Delete a Custom Field | DELETE | `/v1/customFields/{{id}}` | `conn_mod_def::GMP6AZOdfH0::6mrC_BCSTL20VvXZLwd30Q` |
| Update a Custom Field | PUT | `/v1/customFields/{{id}}` | `conn_mod_def::GMP6AcJfqtA::JV9aOUTqQiOqqfN5ogQSNA` |

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deal by ID | GET | `/v1/deals/{{id}}` | `conn_mod_def::GMP6BLiTedM::gwtq0KjJRh2rHtF9O5GNTg` |
| Search Deals | GET | `/v1/deals` | `conn_mod_def::GMP6A1JECI8::2rRmXKSXSyqFGIWVhoJeXw` |
| Add a Deal | POST | `/v1/deals` | `conn_mod_def::GMP6Aym9Qcw::bsw_hhjIQPmuHWgCgb61zQ` |
| Delete a Deal | DELETE | `/v1/deals/{{id}}` | `conn_mod_def::GMP6BOUv5G4::GL5HX5l_S86fHwby_tNZqQ` |
| Update a Deal by ID | PUT | `/v1/deals/{{id}}` | `conn_mod_def::GMP6BM3Sp8Q::n6fm5_u-T8WrPA4cgzIc7w` |

### DealCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deals Custom Field by ID | GET | `/v1/dealCustomFields/{{id}}` | `conn_mod_def::GMP6BUuxMNM::XnShQxvSRZSKIZ93n6acSg` |
| List Deal Custom Fields | GET | `/v1/dealCustomFields` | `conn_mod_def::GMP6BN2Ls1s::f6LXRm7RSEG6bzKzFPJ8Yg` |
| Create a Deal Custom Field | POST | `/v1/dealCustomFields` | `conn_mod_def::GMP6BMg28WE::0aqdpYnASYeJDEOCe4wdLw` |
| Delete a Deal Custom Field | DELETE | `/v1/dealCustomFields/{{id}}` | `conn_mod_def::GMP6BVXmLnM::aCtzuiPNQQa8MBUrgwKzMQ` |
| Update a Deal Custom Field by ID | PUT | `/v1/dealCustomFields/{{id}}` | `conn_mod_def::GMP6BV01jEQ::R-PmEiYzScipH1jIfWW5Lg` |

### PeopleRelationships

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a People Relationship by ID | GET | `/v1/peopleRelationships/{{id}}` | `conn_mod_def::GMP6CtRGZjw::Xlm4xYc3TeKf6XIoldwP8A` |
| Get People Relationships | GET | `/v1/peopleRelationships` | `conn_mod_def::GMP6CtdbxSo::Q_5Qs2tCRQGyczjr9OcZAQ` |
| Create a Person Relationship | POST | `/v1/peopleRelationships` | `conn_mod_def::GMP6CtHq9w8::eQpbRb1BRyWkxZawAeHt7A` |
| Delete a Person Relationship | DELETE | `/v1/peopleRelationships/{{id}}` | `conn_mod_def::GMP6C1ZzJDM::NXZi2NtPSmaCUpOe9Bourw` |
| Update a Person Relationship | PUT | `/v1/peopleRelationships/{{id}}` | `conn_mod_def::GMP6C3Tc4UI::v3Eg_LtkT-WBJlm6wkLecw` |

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pipeline by ID | GET | `/v1/pipelines/{{id}}` | `conn_mod_def::GMP6C2sStkA::bzIpj-WhS_K40jPM679v1A` |
| Search Pipelines | GET | `/v1/pipelines` | `conn_mod_def::GMP6C1E5HKI::X4nEO6lNQn-B_KA37na_7g` |
| Add a Pipeline | POST | `/v1/pipelines` | `conn_mod_def::GMP6C1noN4k::wlXZZCVVRtyKLmNDe_SiVQ` |
| Delete a Pipeline | DELETE | `/v1/pipelines/{{id}}` | `conn_mod_def::GMP6C-Y8M4I::r8iHLiYjR3GZ4I8mXXVw-w` |
| Update a Pipeline | PUT | `/v1/pipelines/{{id}}` | `conn_mod_def::GMP6C9pxN9w::RqQ4ToL5TKmD4-6xwirobw` |

### Ponds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pond by ID | GET | `/v1/ponds/{{id}}` | `conn_mod_def::GMP6C-xFJhM::8HstavgnRiW1FLv9FzoywQ` |
| List Ponds | GET | `/v1/ponds` | `conn_mod_def::GMP6DBO_450::3Vey0ugoRK-xXF_e3x3w4Q` |
| Create a Pond | POST | `/v1/ponds` | `conn_mod_def::GMP6C-NcURE::VYH-KSCoRQmr1BmjCxfn5Q` |
| Delete a Pond by ID | DELETE | `/v1/ponds/{{id}}` | `conn_mod_def::GMP6DLTlz10::nmYf5BBWSYeW6eRlRqz0mA` |
| Update a Pond by ID | PUT | `/v1/ponds/{{id}}` | `conn_mod_def::GMP6DH15mFA::CEXGHjXFREmy2BmiWUmx-w` |

### Stages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Stage by ID | GET | `/v1/stages/{{id}}` | `conn_mod_def::GMP6DdN6yIw::P3QdxF-ZRsCeEsxswzje2w` |
| List Stages | GET | `/v1/stages` | `conn_mod_def::GMP6DSiJsxI::P2dWIoZdRF2tRlB1j-1Q2Q` |
| Create a New Stage | POST | `/v1/stages` | `conn_mod_def::GMP6DZAE7T8::NEtV7owGTl6xS-Wg1nQBGA` |
| Delete a Stage | DELETE | `/v1/stages/{{id}}` | `conn_mod_def::GMP6Dg4Go-o::lp05fBudTQCinVxFriKr-g` |
| Update a Stage | PUT | `/v1/stages/{{id}}` | `conn_mod_def::GMP6DaX8KTQ::EuDPXefKRs6pEOcSK2A5Fg` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task by ID | GET | `/v1/tasks/{{id}}` | `conn_mod_def::GMP6DngGP18::tfxfNuFGQLK1qS6LbcbUaA` |
| List Tasks | GET | `/v1/tasks` | `conn_mod_def::GMP6DbuaeAI::NVdTJhSAT-CmaL555_rNNA` |
| Create a Task | POST | `/v1/tasks` | `conn_mod_def::GMP6DwQywTQ::DRRaBvOgQreic0Oe-G_awQ` |
| Delete a Task | DELETE | `/v1/tasks/{{id}}` | `conn_mod_def::GMP6Dnsd61o::KgVO-frpS36WzyizuRhpnA` |
| Update a Task | PUT | `/v1/tasks/{{id}}` | `conn_mod_def::GMP6DqibjZ4::kDZgH0i4Sim_y--wcLbj6A` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team by ID | GET | `/v1/teams/{{id}}` | `conn_mod_def::GMP6D5XUJY0::vNzMtxxQSjSovDXNDeLNvQ` |
| List Teams | GET | `/v1/teams` | `conn_mod_def::GMP6D25KHfc::W3Tg1U5HQWqaUq5SydR0uA` |
| Create a Team | POST | `/v1/teams` | `conn_mod_def::GMP6D2l3D1Y::lLbLYj4OQnGw5QW2Ds1y9Q` |
| Delete a Team by ID | DELETE | `/v1/teams/{{id}}` | `conn_mod_def::GMP6D2HMfxo::VuL-gAmwQ9eoGJlNIGGJGg` |
| Update a Team by ID | PUT | `/v1/teams/{{id}}` | `conn_mod_def::GMP6D20HcXc::2wLYEiyPSDen-X7FNSO77A` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook by ID | GET | `/v1/webhooks/{{id}}` | `conn_mod_def::GMP6EmHttqY::4DAus-eCT82WGKyzzf80Fw` |
| List Webhooks | GET | `/v1/webhooks` | `conn_mod_def::GMP6ErS1CKo::O6Nn0cQ7TiSOlowKTqhZrw` |
| Delete a Webhook | DELETE | `/v1/webhooks/{{id}}` | `conn_mod_def::GMP6E9x1DF4::tmxqSg-LSSaaFzeSFkS69A` |

2 more Webhooks actions are available through search.

This lists 90 of 156 actions. For anything not here, call `search_one_platform_actions` with platform `follow-up-boss`. The full catalog is at https://www.withone.ai/knowledge/follow-up-boss.

## When a call fails

The error comes from Follow Up Boss, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/follow-up-boss

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
