---
name: fireberry
description: A unified CRM platform designed to bring sales, marketing, and service data into one customizable hub, Fireberry offers businesses of all sizes AI-assisted automation, real-time insights, and flexible workflows that adapt to specific operations and industry needs. Read and write Fireberry data through One: systemfields, cases, customobjectrecords, campaign, invoicereceipts, article and more, 243 actions with real parameter documentation. Use whenever the user asks to look something up in Fireberry, create or update a record there, or build code against the Fireberry API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: fireberry
  generated-from: one-knowledge-base
---

# Fireberry through One

A unified CRM platform designed to bring sales, marketing, and service data into one customizable hub, Fireberry offers businesses of all sizes AI-assisted automation, real-time insights, and flexible workflows that adapt to specific operations and industry needs.

One exposes Fireberry through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `fireberry` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Fireberry is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Fireberry account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SystemFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Date & Time Field for an Object Type | POST | `/api/v2/system-field/{{objectType}}/datetime` | `conn_mod_def::GJ2ckT2bdBg::OmYRo3g_QYqEgWLfSUIbdw` |
| Create a Date Field (for an Object Type) | POST | `/api/v2/system-field/{{objectType}}/date` | `conn_mod_def::GJ2ckfECxQM::UR7jNZtER5afBwxjTmq9vw` |
| Create a Formula Field for an Object Type | POST | `/api/v2/system-field/{{objectType}}/formula` | `conn_mod_def::GJ2ckmnPx6o::QO7arMFfTZWDQjAUxn4_dA` |
| Create a Number Field for an Object Type | POST | `/api/v2/system-field/{{objectType}}/number` | `conn_mod_def::GJ2ck-foU3U::_W9DokBPS1ukQrxiR-JDxQ` |
| Create a Phone Number Field for an Object Type | POST | `/api/v2/system-field/{{objectType}}/phonenumber` | `conn_mod_def::GJ2clGtgXe0::6fl7cPqmRQK-GECjHH0GdA` |
| Create a Picklist Field for an Object Type | POST | `/api/v2/system-field/{{objectType}}/picklist` | `conn_mod_def::GJ2clPkvj_A::CxWHDzHAS8-4puW0FKzhMQ` |
| Create a Summary Field for an Object Type | POST | `/api/v2/system-field/{{objectType}}/summary` | `conn_mod_def::GJ2clXhD_do::F3XYfuyCTP-JlmsR3Z_YMQ` |
| Create a Text Area Field for an Object Type | POST | `/api/v2/system-field/{{objectType}}/textarea` | `conn_mod_def::GJ2clgfIIUw::t6iVuVLhS_ioifyyUc-bTg` |
| Create a URL Field for an Object Type | POST | `/api/v2/system-field/{{objectType}}/url` | `conn_mod_def::GJ2clxOApFo::BWnuq7kqQkeqUCXQAHCwEw` |
| Create an Email Address Field for an Object Type | POST | `/api/v2/system-field/{{objectType}}/emailaddress` | `conn_mod_def::GJ2cl8kkYNI::F6TK80GaTwaXFpbNxKYDng` |
| Create an HTML Field for an Object Type | POST | `/api/v2/system-field/{{objectType}}/html` | `conn_mod_def::GJ2cmEl8yuI::cZXXrK8sRze_1hFP_NWgww` |
| Update a Date & Time Field (System Field) for an Object Type | PUT | `/v2/system-field/{{objectType}}/datetime/{{fieldName}}` | `conn_mod_def::GJ2cmVNO2Ts::W_LLo7_zQayz5btDk4Vk0g` |

5 more SystemFields actions are available through search.

### Cases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Ticket (Case) by ID | GET | `/record/cases/{{id}}` | `conn_mod_def::GJ2cz_KUyLA::xdsS-Hz-QFeYrKLhS8gRlQ` |
| List Tickets (Cases) | GET | `/api/record/cases` | `conn_mod_def::GJ2c0IeX_yM::seEvVkp6SO-fzTsDZMVSCg` |
| Batch Create Ticket Records (Cases) | POST | `/api/v3/record/cases/batch/create` | `conn_mod_def::GJ2cYqCXsz4::4I5ance0Sbq7lrzS_FHiCA` |
| Batch Delete Ticket Records | POST | `/api/v3/record/cases/batch/delete` | `conn_mod_def::GJ2cbWWC3iE::MMeSIzbJRmGeUSrEtereOw` |
| Batch Update Ticket Records (Cases) | POST | `/api/v3/record/cases/batch/update` | `conn_mod_def::GJ2cgCcRuMI::Hq1lTeWHTh2iEA8TyUdiIg` |
| Create a Ticket (Case) | POST | `/api/record/cases` | `conn_mod_def::GJ2czvss8v0::a9e_XmtqSKa318xxP2k0oA` |
| Delete a Ticket (Case) | DELETE | `/api/record/cases/{{id}}` | `conn_mod_def::GJ2cz3IGbAg::0KxrLA6oRfaR5XGLtmncSQ` |
| Update a Ticket (Case) | PUT | `/api/record/cases/{{id}}` | `conn_mod_def::GJ2c0P8qaBk::uuvKgQnNTeWc4UC-AWJm6A` |

### CustomObjectRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Object Record | GET | `/record/{{objectcode}}/{{id}}` | `conn_mod_def::GJ2coU8R0YE::s2nb0jTNRmGB6LIJLq_EIw` |
| List a Custom Object’s Records | GET | `/record/{{objectcode}}` | `conn_mod_def::GJ2coe6o1-Q::ziDY0PSISeSH5yUF_RM29g` |
| Batch Delete Custom Object Records | POST | `/v3/record/{{objectcode}}/batch/delete` | `conn_mod_def::GJ2cZ9W5aoI::nz-4Nk75SxOI0DPgTen91Q` |
| Create a Custom Object Record | POST | `/record/{{objectcode}}` | `conn_mod_def::GJ2coDUvbqw::UAAae3RTQ9ioHJo8Va2qPQ` |
| Delete a Custom Object Record | DELETE | `/record/{{objectcode}}/{{id}}` | `conn_mod_def::GJ2coNT1_tE::rZI344fiTaeVNK6C2eEzgw` |
| Delete a Custom Object Record | DELETE | `/record/58/{{id}}` | `conn_mod_def::GJ2co0--ov4::Rl0tQcMxQz-ePrGdHTowUA` |
| Update a Custom Object Record | PUT | `/record/{{objectcode}}/{{id}}` | `conn_mod_def::GJ2comjnzDw::D0UWGwITQMuQu86ZjjJx5A` |
| Update a Custom Object Record | PUT | `/v2/record/58/{{id}}` | `conn_mod_def::GJ2co8xeZyk::40NLjm5TQ3qTAEm6BRO6NA` |

### Campaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign Record | GET | `/api/record/campaign/{{id}}` | `conn_mod_def::GJ2chF43w4A::uL9QSjnAQsWEogEhfiTnDQ` |
| Batch Create Campaign Records | POST | `/api/v3/record/campaign/batch/create` | `conn_mod_def::GJ2cV_LAGU8::nAZJqMRnQGW6c9eSnAfd5g` |
| Batch Delete Campaign Records | POST | `/api/v3/record/campaign/batch/delete` | `conn_mod_def::GJ2cZcjWMac::fcbmUd82SgC_THruR11oBw` |
| Batch Update Campaign Records | POST | `/api/v3/record/campaign/batch/update` | `conn_mod_def::GJ2ccFsKgQM::BVTrNJ5qRCusVvFZroMc4w` |
| Create a Campaign | POST | `/api/record/campaign` | `conn_mod_def::GJ2cg4ohsA0::9YYkW6nQQlix9Bnpqty0Pw` |
| Delete a Campaign Record | DELETE | `/record/campaign/{{id}}` | `conn_mod_def::GJ2cg_3s-wU::1WsB0p5qTMuDyZvjGh6znA` |
| Update a Campaign | PUT | `/api/record/campaign/{{id}}` | `conn_mod_def::GJ2chZJEqGE::L7Re0BeWSwWplid8l8R7Rg` |

### InvoiceReceipts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice Receipt | GET | `/api/record/invoicereno/{{id}}` | `conn_mod_def::GJ2crR1v4ic::JoY9sfsZSVSzuOLYHF2M8g` |
| List Invoice Receipts | GET | `/api/record/invoicereno` | `conn_mod_def::GJ2crJ62KYw::8Wv9HpFWRdieyKeT634zcA` |
| List Receipt Invoices (Receipts) | GET | `/api/record/invoicereceipt` | `conn_mod_def::GJ2cye98P0Q::oLEugGreQdiRJUHn94Ie8g` |
| Batch Create Invoice Receipts Records | POST | `/api/v3/record/invoicereno/batch/create` | `conn_mod_def::GJ2cW5_Htp8::yGzuAQuDTuGV2jFOPNkUlA` |
| Batch Update Invoice Receipts Records | POST | `/api/v3/record/invoicereno/batch/update` | `conn_mod_def::GJ2cd-TXCbU::BSHFWbzeQsSSEEM9J960TA` |
| Create an Invoice Receipt | POST | `/api/record/invoicereno` | `conn_mod_def::GJ2crB6tZog::8z0XojotQIeqr1OvuRse7Q` |
| Update an Invoice Receipt | PUT | `/record/invoicereno/{{id}}` | `conn_mod_def::GJ2crvnz9f0::OcxQ6XmQT26IUMl9h5XBGA` |

### Article

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Create Article Records | POST | `/api/v3/record/article/batch/create` | `conn_mod_def::GJ2cVm6g7rQ::-86KW0nvRg6QOKeSqChlVw` |
| Batch Delete Article Records | POST | `/api/v3/record/article/batch/delete` | `conn_mod_def::GJ2cZAVCtxA::FXw1nxwPQWmoLxkVbTTPiw` |
| Batch Update Article Records | POST | `/api/v3/record/article/batch/update` | `conn_mod_def::GJ2cbuDH4bg::JiFtQmylSDmAeEI6ne-Dcw` |
| Create an Article | POST | `/api/record/article` | `conn_mod_def::GJ2cT-Wocu0::wwjgej2IRm6ZhVCqDdfErg` |
| Delete an Article | DELETE | `/record/article/{{id}}` | `conn_mod_def::GJ2cUGQEHZo::BdG0xlFXTy2TqPOsA49PTw` |
| Update an Article | PUT | `/record/article/{{id}}` | `conn_mod_def::GJ2cUgMBs9w::l0gU0fN4Stab_ozKmoUl6w` |

### Crmorderitem

| Action | Method | Path | Action id |
|---|---|---|---|
| List Order Items | GET | `/api/record/crmorderitem` | `conn_mod_def::GJ2cuwGNzBE::yMet9wo6TmKnk_tj4SSHvw` |
| Batch Create Order Item Records | POST | `/api/v3/record/crmorderitem/batch/create` | `conn_mod_def::GJ2cXhdfGXg::rHlGonoGT1qOvsZZs0pYWQ` |
| Batch Delete Order Item Records | POST | `/record/crmorderitem/batch/delete` | `conn_mod_def::GJ2caf3ru8k::-2ShwZ8zRxeaAuV2ZJeFYA` |
| Batch Update Order Item Records | POST | `/api/v3/record/crmorderitem/batch/update` | `conn_mod_def::GJ2ceeUsA8Y::fqgz5-eaQNa-qKm7Wq2UpQ` |
| Create an Order Item | POST | `/api/record/crmorderitem` | `conn_mod_def::GJ2cuaM37Dk::tEVfx4fJTBOnfP9S6dzGWg` |
| Update an Order Item | PUT | `/record/crmorderitem/{{id}}` | `conn_mod_def::GJ2cu-xdHIo::ylX-nnukTlq4MBPnElXFgQ` |

### BusinessUnit

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business Unit Record | GET | `/api/record/businessunit/{{id}}` | `conn_mod_def::GJ2cgiLtgD4::Rk4yUBEDQySEYTPFkhK1gg` |
| Batch Create Business Unit Records | POST | `/api/v3/record/businessunit/batch/create` | `conn_mod_def::GJ2cV3cZZf4::-6iun6O_QqCUGaE2k1Ik8Q` |
| Batch Update Business Unit Records | POST | `/api/v3/record/businessunit/batch/update` | `conn_mod_def::GJ2cb99z9y0::RCv4gxXcSA6XrVErh-P66Q` |
| Create a Business Unit | POST | `/api/record/businessunit` | `conn_mod_def::GJ2cgS0Bkdo::B6M2ST9QT0eCS115-aTVHQ` |
| Delete a Business Unit | DELETE | `/record/businessunit/{{id}}` | `conn_mod_def::GJ2cgah7a9w::69Uu-htoT4aCxa9IDUT5fQ` |

### InvoiceDelivery

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Delivery Invoice | GET | `/api/record/invoicedelivery/{{id}}` | `conn_mod_def::GJ2cpPEDe54::gBh0R1t_SQqRaMUtyuSoOw` |
| Batch Create Delivery Invoice Records | POST | `/api/v3/record/invoicedelivery/batch/create` | `conn_mod_def::GJ2cWpMLFiw::0YVHfWTMRAWswf4zQFvjIg` |
| Batch Update Delivery Invoice Records | POST | `/api/v3/record/invoicedelivery/batch/update` | `conn_mod_def::GJ2ccu_pQDA::6S5ZYUKtSUWdcoABk4qEyQ` |
| Create a Delivery Invoice | POST | `/api/record/invoicedelivery` | `conn_mod_def::GJ2cpEwaC3Y::dbKeyOU1TbuHQCW0Q7sLZQ` |
| Update a Delivery Invoice | PUT | `/record/invoicedelivery/{{id}}` | `conn_mod_def::GJ2cpiBYu-w::4n774wrMS5CJQI2U7S9xrw` |

### Activity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Meeting (Activity Record) | GET | `/record/activity/{{id}}` | `conn_mod_def::GJ2cs0HegLc::LrueDLsZRniEqLzSvQZyTQ` |
| Batch Create Meeting Records | POST | `/api/v3/record/activity/batch/create` | `conn_mod_def::GJ2cXH0ADwE::DY7OtpwXRYmzckyX-ZqNmw` |
| Batch Delete Meeting Records | POST | `/api/v3/record/activity/batch/delete` | `conn_mod_def::GJ2caE1C3u4::jidtWpj8TIWEDxIxDw8tlg` |
| Batch Update Meeting Records | POST | `/api/v3/record/activity/batch/update` | `conn_mod_def::GJ2ceNXVSNQ::jyWH9jT0RqOybjEZvg94tQ` |
| Create a Meeting (Activity Record) | POST | `/api/record/activity` | `conn_mod_def::GJ2csjQjnCo::mHHQMoK3QM2Ra9e_PDPTEg` |

### Calllog

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Call (Call Log Record) | GET | `/record/calllog/{{id}}` | `conn_mod_def::GJ2cwJunRkU::UVugamGUScONHb1ZgZpLEQ` |
| List Phone Calls (Call Logs) | GET | `/api/record/calllog` | `conn_mod_def::GJ2cwRhIo5g::nxXyigdMSiqgTaQPETZKLQ` |
| Batch Create Phone Call Records | POST | `/api/v3/record/calllog/batch/create` | `conn_mod_def::GJ2cXwJp6A4::nO9Orgn4R-iQWIMbX5_0iQ` |
| Delete a Phone Call | DELETE | `/api/record/calllog/{{id}}` | `conn_mod_def::GJ2cwChJyr4::U7YMi3uMQV6yeqH2NKYViw` |
| Update a Phone Call Record | PUT | `/api/record/calllog/{{id}}` | `conn_mod_def::GJ2cwZO2atQ::OiK8-3taR-iiUBFPzAgTpA` |

### Project

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Create Project Records | POST | `/api/v3/record/project/batch/create` | `conn_mod_def::GJ2cYBTgflo::QLRTZfwxSg-xLrq50aEHcA` |
| Batch Update Project Records | POST | `/api/v3/record/project/batch/update` | `conn_mod_def::GJ2cfB93QCQ::Y_FJxrlvTU-KNBqORER0xA` |
| Create a Project | POST | `/api/record/project` | `conn_mod_def::GJ2cxF7Lux8::GaX0Y_M1RKOEsc9BstydbA` |
| Delete a Project | DELETE | `/record/project/{{id}}` | `conn_mod_def::GJ2cxdOwf_k::Tx0zpOD7QaaoiPIqOz5Tbw` |
| Update a Project Record | PUT | `/record/project/{{id}}` | `conn_mod_def::GJ2cx2ch1b0::kBDcTvHlR1uYVBUraAGHeg` |

### InvoiceReceipt

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Receipt Invoice Receipt Record | GET | `/record/invoicereceipt/{{id}}` | `conn_mod_def::GJ2cyMFYG6k::nkAznnXKT-qtHCdcvxtj7Q` |
| Batch Create Receipt Records | POST | `/api/v3/record/invoicereceipt/batch/create` | `conn_mod_def::GJ2cYSTK5Uk::Le7rXgT8QIKon51gJjGMXQ` |
| Batch Update Receipt Records (Invoice Receipt) | POST | `/record/invoicereceipt/batch/update` | `conn_mod_def::GJ2cfMdsEZk::LostZzHXTKqS58oKfLnKYA` |
| Create a Receipt Invoice Record | POST | `/api/record/invoicereceipt` | `conn_mod_def::GJ2cyFEfjSc::ldSUSe9UQj-rk6ldYL9UMw` |
| Update a Receipt (Invoice Receipt Record) | PUT | `/record/invoicereceipt/{{id}}` | `conn_mod_def::GJ2cyyaNRNs::45XXm_6OQcGGtI-p1EXJpw` |

### Task

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task Record | GET | `/api/record/task/{{id}}` | `conn_mod_def::GJ2czYiP8ts::EK88gvfMQAiwGAeufDjaOw` |
| Batch Create Task Records | POST | `/api/v3/record/task/batch/create` | `conn_mod_def::GJ2cYinY5GA::zkCn86HjSMSD58TWWKc78w` |
| Batch Update Task Records | POST | `/api/v3/record/task/batch/update` | `conn_mod_def::GJ2cf6uR_K4::lBDTlUSeTnChZFUcUt7b3Q` |
| Delete a Task Record | DELETE | `/record/task/{{id}}` | `conn_mod_def::GJ2czNtvyqg::GjiFg8ymSkeBDcVsAqLhCQ` |
| Update a Task | PUT | `/record/task/{{id}}` | `conn_mod_def::GJ2czooB9b0::MulHZ92HQ5OABuXqHnALOA` |

### InvoiceDraft

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Draft Invoice | GET | `/record/invoicedraft/{{id}}` | `conn_mod_def::GJ2cpxMDSog::R2vBbOUHRy-GdXZV1dh-eA` |

4 more InvoiceDraft actions are available through search.

This lists 90 of 243 actions. For anything not here, call `search_one_platform_actions` with platform `fireberry`. The full catalog is at https://www.withone.ai/knowledge/fireberry.

## When a call fails

The error comes from Fireberry, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/fireberry

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
