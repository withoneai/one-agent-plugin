---
name: maintain-x
description: A digital operations platform that helps teams manage maintenance requests, work orders, asset tracking, inspections, and preventive tasks to streamline facility and field service workflows and improve operational efficiency. Read and write MaintainX data through One: workorders, purchaseorders, parts, assets, locations, vendors and more, 160 actions with real parameter documentation. Use whenever the user asks to look something up in MaintainX, create or update a record there, or build code against the MaintainX API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: maintain-x
  generated-from: one-knowledge-base
---

# MaintainX through One

A digital operations platform that helps teams manage maintenance requests, work orders, asset tracking, inspections, and preventive tasks to streamline facility and field service workflows and improve operational efficiency.

One exposes MaintainX through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `maintain-x` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm MaintainX is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real MaintainX account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### WorkOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Work Order | GET | `/workorders/{{id}}` | `conn_mod_def::GKHiBZviOYo::QBurXhFwSUCHlEncrovBuA` |
| List a Work Order's Sub Work Orders | GET | `/workorders/{{id}}/subworkorders` | `conn_mod_def::GKHiBcxClKE::p1tqrT1lSNuWV40TCL4gKA` |
| List Work Orders | GET | `/v1/workorders` | `conn_mod_def::GKHiBgHdgvw::REq2hKDKR3yD6geBYgpwgA` |
| Create New Work Order | POST | `/v1/workorders` | `conn_mod_def::GKHiBDwH1fI::b8Xwt5lPTt-EKWHWIxoJvQ` |
| Detach a Procedure From a Work Order | DELETE | `/workorders/{{id}}/procedure` | `conn_mod_def::GKHiBBx98y0::hUSfSWTwREeTu303DrGCeA` |
| Remove a Work Order Attachment | DELETE | `/workorders/{{id}}/attachments/{{filename}}` | `conn_mod_def::GKHiBWjvaKg::g7n2rYunSFCY5DX5BEX8NQ` |
| Send a Work Order as an Email | POST | `/workorders/{{id}}/emails` | `conn_mod_def::GKHiByf_mhw::hEKQ99MpSWaQW4h9mkWa-A` |
| Update a Work Order | PATCH | `/workorders/{{id}}` | `conn_mod_def::GKHiBxRUB6k::zpyTEi0JTJG69ZTKu61Nmw` |
| Update a Work Order's Status | PATCH | `/workorders/{{id}}/status` | `conn_mod_def::GKHiBy1Jp_Y::BJaVOdVhRiWjAOm_GLM7TA` |
| Update a Work Order's Thumbnail | PUT | `/workorders/{{id}}/thumbnail/{{filename}}` | `conn_mod_def::GKHiB8nra30::7G5I6_gKRWSwcjtOialtig` |

### PurchaseOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Purchase Order | GET | `/purchaseorders/{{id}}` | `conn_mod_def::GKHh_gmXQIw::7SDgyoauS_66w7ko3wyr8A` |
| List Purchase Orders | GET | `/purchaseorders` | `conn_mod_def::GKHh_ijp934::qnUveH91QEmW-UByDofzjA` |
| Create a Purchase Order | POST | `/v1/purchaseorders` | `conn_mod_def::GKHh_UG19U4::-xacXUrCTvK3LgZ0SLh5-Q` |
| Delete a Purchase Order | DELETE | `/purchaseorders/{{id}}` | `conn_mod_def::GKHh_g2Cnys::VPT11DW3R7uy7XuHi2DsWw` |
| Fulfill a Purchase Order | PATCH | `/purchaseorders/{{id}}/fulfillment` | `conn_mod_def::GKHh_gzarlA::CGMA0fHbSz6Z4d27oXewoQ` |
| Remove a Purchase Order Attachment | DELETE | `/purchaseorders/{{id}}/attachments/{{filename}}` | `conn_mod_def::GKHh_hK3X00::l3cFwOp1SdGV6olvhENmaA` |
| Send a Purchase Order as an Email | POST | `/purchaseorders/{{id}}/emails` | `conn_mod_def::GKHh_qUrCgY::j9NzDLZwSVaClm-Lvhy0sA` |
| Update a Purchase Order's Status | PATCH | `/purchaseorders/{{id}}/status` | `conn_mod_def::GKHh_slHy2E::rEh4UMs8RZqmqmC51CbGsA` |
| Update a Purchase Order's Thumbnail | PUT | `/purchaseorders/{{id}}/thumbnail/{{filename}}` | `conn_mod_def::GKHh_r_Qgqc::rt3w5kJyTfiZsNyl8S-odA` |

### Parts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Part | GET | `/parts/{{id}}` | `conn_mod_def::GKHh-tNyemo::pgzgfZyQSjWbev-q5PBySw` |
| List Parts | GET | `/parts` | `conn_mod_def::GKHh-xfF000::jIz0n1Y_RZiOqsDSSYrLPQ` |
| Create New Part | POST | `/parts` | `conn_mod_def::GKHh-uQbKuU::dZsLlSmSQ82DKweE36B1-g` |
| Delete a Part | DELETE | `/parts/{{id}}` | `conn_mod_def::GKHh-yUH_G0::mYiHU71uTgeF3fhnLXYomg` |
| Remove a Part Attachment | DELETE | `/parts/{{id}}/attachments/{{filename}}` | `conn_mod_def::GKHh-7iF1EQ::WOykA74MT-a9C1Ik1RdvbQ` |
| Update a Part | PATCH | `/parts/{{id}}` | `conn_mod_def::GKHh-7efIjw::TXZAk4RHTuiZnrye8WHVdw` |
| Update a Part Attachment | PUT | `/parts/{{id}}/attachments/{{filename}}` | `conn_mod_def::GKHh-74W5AA::HkNSrRhCS_KvdkD8vEfv6g` |
| Update a Part's Thumbnail | PUT | `/parts/{{id}}/thumbnail/{{filename}}` | `conn_mod_def::GKHh-7sEfs4::HUL4KQH9THqpSe8fPG7wrQ` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Asset | GET | `/assets/{{id}}` | `conn_mod_def::GKHh8wUEPG8::q-TZD7aiRLS_UH86pR0ajw` |
| List Assets | GET | `/v1/assets` | `conn_mod_def::GKHh80GYad4::FqMluZPlStmeN-Vr6MXoLA` |
| Create New Asset | POST | `/assets` | `conn_mod_def::GKHh8xqpfFI::P0r-W6pkQqGPhrB27d88Wg` |
| Delete an Asset | DELETE | `/assets/{{id}}` | `conn_mod_def::GKHh8wLZqF4::U1_4CPzSTI-xKEBqO2yhrQ` |
| Remove an Asset Attachment | DELETE | `/assets/{{id}}/attachments/{{filename}}` | `conn_mod_def::GKHh8wxgolo::2P0-oQwiSK2j6MjdDl8Ekw` |
| Update an Asset | PATCH | `/assets/{{id}}` | `conn_mod_def::GKHh8-Gtvg0::gRRfKBySQS2fsp4bGHkMxw` |
| Update an Asset's Thumbnail | PUT | `/assets/{{id}}/thumbnail/{{filename}}` | `conn_mod_def::GKHh89OrNzo::0WvDD0s4TbKuOMvGP-zuKg` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Location | GET | `/locations/{{id}}` | `conn_mod_def::GKHh9jXJBGc::A3On9M8vRI2dg2IF1-IFKw` |
| List Locations | GET | `/locations` | `conn_mod_def::GKHh9k7oTYs::iyb4VATwQzGUWcMPMUZXWw` |
| Create New Location | POST | `/v1/locations` | `conn_mod_def::GKHh9kWBjrk::Ejd3alpGQUumJqg4kwRj_A` |
| Delete a Location | DELETE | `/locations/{{id}}` | `conn_mod_def::GKHh9ju4UDg::iIrpN3_yT5GYP4TXflrpgg` |
| Remove a Location Attachment | DELETE | `/locations/{{id}}/attachments/{{filename}}` | `conn_mod_def::GKHh9jrwX8Q::3wtINtCxRNe2VpsqTiPdCQ` |
| Update a Location | PATCH | `/locations/{{id}}` | `conn_mod_def::GKHh9uMxcbY::sgwVBNQ9RDSl1fMthjOhOg` |
| Update a Location's Thumbnail | PUT | `/locations/{{id}}/thumbnail/{{filename}}` | `conn_mod_def::GKHh9twMTEc::sTnvmbLPQxWT7D6Q5uGfNQ` |

### Vendors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Vendor | GET | `/vendors/{{id}}` | `conn_mod_def::GKHiAsSywTg::wOklaBrwSQSx8NOQWOoSBA` |
| List Vendors | GET | `/v1/vendors` | `conn_mod_def::GKHiAvJnUJE::Ur_ndjILQhSurcyfeIE5FQ` |
| Create Vendor | POST | `/vendors` | `conn_mod_def::GKHiAeeCYNE::em3-b8t1RfCieg-DFu9rOQ` |
| Delete a Vendor | DELETE | `/vendors/{{id}}` | `conn_mod_def::GKHiAd3pSnc::iL_Yj1krSiuQgSyGDZy5tw` |
| Remove a Vendor Attachment | DELETE | `/vendors/{{id}}/attachments/{{filename}}` | `conn_mod_def::GKHiAtECELo::VBBspmmYQyOiPv3lIEGY-w` |
| Update a Vendor | PATCH | `/vendors/{{id}}` | `conn_mod_def::GKHiA5FHueA::8k1Qpm9TRI6veAVfiVEXrQ` |
| Update a Vendor's Thumbnail | PUT | `/vendors/{{id}}/thumbnail/{{filename}}` | `conn_mod_def::GKHiA52uIm8::KQPU3mBzTWCNddvCC3DtPw` |

### WorkRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Work Request | GET | `/workrequests/{{id}}` | `conn_mod_def::GKHiCVhyo3M::gDd78Y-lQ-ypM6E_9egwAA` |
| List Work Requests | GET | `/workrequests` | `conn_mod_def::GKHiCiA2TG8::9TZm2CMyT3OIiA9IOcFuOA` |
| Create Work Request | POST | `/workrequests` | `conn_mod_def::GKHiCWVCx-0::Nj64CjM7RQ-dLuYSnlSY2w` |
| Delete a WorkRequest | DELETE | `/workrequests/{{id}}` | `conn_mod_def::GKHiCOxEiEY::_sJHDLUjRfmBRqwLVIISzQ` |
| Remove a Work Request Attachment | DELETE | `/workrequests/{{id}}/attachments/{{filename}}` | `conn_mod_def::GKHiCfQ9iKk::oaAYNpLjSqKogG8k2wOPHw` |
| Update a Work Request | PATCH | `/workrequests/{{id}}` | `conn_mod_def::GKHiCfKo19k::AnhiADi9SkCT8gZr8_1fAg` |
| Update a Work Request's Thumbnail | PUT | `/workrequests/{{id}}/thumbnail/{{filename}}` | `conn_mod_def::GKHiCfWXDP4::vt9Bk-OCTjSHuFnJqkhSbw` |

### Meters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Meter | GET | `/meters/{{id}}` | `conn_mod_def::GKHh-YQ_OyA::oNjLqT8bSCWVBNYzGbl5Uw` |
| List Meters | GET | `/v1/meters` | `conn_mod_def::GKHh-aYD0Oc::dAtYO6HbQF-qR4GUkDv-wQ` |
| Create New Meter | POST | `/v1/meters` | `conn_mod_def::GKHh-QBlSDY::_sbI4oeFQpqSTANeDDBjWQ` |
| Delete a Meter | DELETE | `/meters/{{id}}` | `conn_mod_def::GKHh-YEVSpk::uIKoWjp1T4qK9WKB2epBaQ` |
| Update a Meter | PATCH | `/meters/{{id}}` | `conn_mod_def::GKHh-YbRe5U::8dPHA4v-QeW1abBpmpuoKg` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Category | GET | `/categories/{{id}}` | `conn_mod_def::GKHh9IiUA-8::39CSxIByT36ms-QKJpkj4A` |
| List Categories | GET | `/v1/categories` | `conn_mod_def::GKHh9J6NPSo::gOt4ifzBTJe0NlJrqRhzkg` |
| Create New Category | POST | `/v1/categories` | `conn_mod_def::GKHh8-UmHyU::r9KYbWR9Q3S7m4bpkuwFRg` |
| Delete a Category | DELETE | `/categories/{{id}}` | `conn_mod_def::GKHh89TS2V4::k7if2nZHQ5ejmJlt8FLH6A` |
| Update a Category | PATCH | `/categories/{{id}}` | `conn_mod_def::GKHh9JzIh6E::7fY1laxvRgCP3yoKqBqo_Q` |

### ProcedureTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Procedure Template | GET | `/proceduretemplates/{{id}}` | `conn_mod_def::GKHh_PJaW64::fc_GwtLZSkG9hJM9eHkCUw` |
| List Procedure Templates | GET | `/v1/proceduretemplates` | `conn_mod_def::GKHh_UEcE9s::TJlzG3PgSdCob5a4UYdNqQ` |
| Create Procedure Template | POST | `/v1/proceduretemplates` | `conn_mod_def::GKHh_GIcJIs::Qod_CIXKTWeIHBcNPuhGzA` |
| Delete a Procedure Template | DELETE | `/proceduretemplates/{{id}}` | `conn_mod_def::GKHh_FCL8eg::vQQVVEcdTXSfyRNf4NOMMw` |
| Update a Procedure Template | PATCH | `/proceduretemplates/{{id}}` | `conn_mod_def::GKHh_P9qiQM::AyEFqvU5SbS9cwugdVjMcg` |

### MeterTriggers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Meter Triggers | GET | `/v1/metertriggers` | `conn_mod_def::GKHh-D-mzkc::5p5h31I3TAiZ21uKjEw63Q` |
| Create Meter Trigger | POST | `/v1/metertriggers` | `conn_mod_def::GKHh-DijUg4::NnWT_svqQtyv6bz5p2ceyg` |
| Delete a MeterTrigger | DELETE | `/metertriggers/{{id}}` | `conn_mod_def::GKHh-C2NReQ::Mj0VUfbeQtSvLFNlgbHBEQ` |
| Update a Meter Trigger | PATCH | `/metertriggers/{{id}}` | `conn_mod_def::GKHh-PLPQH8::HpXwDfbDRUCcEV77cCCAsA` |
| Update a Meter Trigger's Work Order Template Thumbnail | PUT | `/metertriggers/{{id}}/thumbnail/{{filename}}` | `conn_mod_def::GKHh-PJ9KcY::Uw5d_yyKTOydmEyb-FbmmQ` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscription | GET | `/subscriptions/{{id}}` | `conn_mod_def::GKHh_0EhxWs::VIMSH6OOS3e0-VtU93G7ug` |
| Get a Subscription's Secret Information | GET | `/subscriptions/{{id}}/secret` | `conn_mod_def::GKHh_0LSwiU::MaaOPRH8QniQBCk0GyNB_Q` |
| Create a Subscription | POST | `/v1/subscriptions` | `conn_mod_def::GKHh_2KfIkg::gpVoW3eDRvO6DRFnjj-ylA` |
| Remove a Subscription | DELETE | `/subscriptions/{{id}}` | `conn_mod_def::GKHh_1iJQ_I::7h8MjJYMRiSUOe7gXXODNA` |
| Update a Subscription | PATCH | `/subscriptions/{{id}}` | `conn_mod_def::GKHh_2FbFm4::y9MQW8ioS6CG-HxEtRMCyQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team | GET | `/teams/{{id}}` | `conn_mod_def::GKHh_-pc-6A::v0kUZ9PeSk6COZVuNQOeUg` |
| List Teams | GET | `/teams` | `conn_mod_def::GKHiAJgtKZc::otg-NJMzTWeUzA9uJc6LQA` |
| Create New Team | POST | `/v1/teams` | `conn_mod_def::GKHiAAUOWQY::7Y2qseNuRumRhZsthSw2Uw` |
| Delete Team | DELETE | `/teams/{{id}}` | `conn_mod_def::GKHh_-zZRFg::e58Pd0UOQemJyZ-rAOQ4BA` |
| Update a Team | PATCH | `/teams/{{id}}` | `conn_mod_def::GKHiAJ51axM::RXqOPkGARxKIsxUN7glVdA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/users/{{id}}` | `conn_mod_def::GKHiATuWguY::5CenMxtjTha0f1aMWccD6A` |
| List Users | GET | `/v1/users` | `conn_mod_def::GKHiAVH1D-4::Wz9pvvuNSm6Ml6OACiQRyw` |
| Create New User | POST | `/users` | `conn_mod_def::GKHiAT7LGCQ::Mm3dDqI-TOW7LdvNonRrzQ` |
| Remove a User from an Organization | DELETE | `/users/{{id}}` | `conn_mod_def::GKHiAUFf1Vg::K-R8JybpQxqa90pAstksXQ` |
| Update a User | PATCH | `/users/{{id}}` | `conn_mod_def::GKHiAUVf8BQ::grw7WZN2StqdN8awcg2chA` |

This lists 90 of 160 actions. For anything not here, call `search_one_platform_actions` with platform `maintain-x`. The full catalog is at https://www.withone.ai/knowledge/maintain-x.

## When a call fails

The error comes from MaintainX, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/maintain-x

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
