---
name: pro-workflow
description: ProWorkflow is a project, task, and time management platform that provides project planning, resource allocation, time tracking, cost tracking, invoicing, and reporting tools, allowing teams to manage workflows, collaborate in real time, and deliver client work efficiently. Read and write ProWorkflow data through One: projects, contacts, projectitems, quotes, invoices, invoiceitems and more, 403 actions with real parameter documentation. Use whenever the user asks to look something up in ProWorkflow, create or update a record there, or build code against the ProWorkflow API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: pro-workflow
  generated-from: one-knowledge-base
---

# ProWorkflow through One

ProWorkflow is a project, task, and time management platform that provides project planning, resource allocation, time tracking, cost tracking, invoicing, and reporting tools, allowing teams to manage workflows, collaborate in real time, and deliver client work efficiently.

One exposes ProWorkflow through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `pro-workflow` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ProWorkflow is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ProWorkflow account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Project Access for a Contact | GET | `/api/v4/projects/{{projectid}}/access/{{contactid}}` | `conn_mod_def::GMiJwUzHHZI::DktELGk9SaWUwSUYu74Dug` |
| Get a Project | GET | `/api/v4/projects/{{projectid}}` | `conn_mod_def::GMiJxE3y78o::Ab01376YSS6bJWTGDBHhpw` |
| Get Overdue Projects | GET | `/api/v4/projects/overdue` | `conn_mod_def::GMiJxH2-KiA::cLjmvDq1Ts-ak3tAJYqnDA` |
| List a Company's Projects | GET | `/api/v4/companies/{{companyid}}/projects` | `conn_mod_def::GMiJsa0Rst8::qUh3B0HTQTeO_zkQOds_UA` |
| List Projects | GET | `/api/v4/projects` | `conn_mod_def::GMiJyD5X_nk::xfxUJxLRT4WbFRmK5DvluQ` |
| Add Tags to Projects | POST | `/api/v4/projects/tags` | `conn_mod_def::GMiJwElPdq0::U3lv5ZVnT82mIm6onhsSJQ` |
| Adjust Project Dates | PUT | `/api/v4/projects/{{projectid}}/adjustdates` | `conn_mod_def::GMiJwE3Xc3E::rXrgrHTQSrORrIu4eh28lQ` |
| Bulk Adjust Project Dates | PUT | `/api/v4/projects/adjustdates` | `conn_mod_def::GMiJwEVG_WQ::utJI7QV1TYmXl9cqQbX90w` |
| Bulk Delete Projects | DELETE | `/api/v4/projects` | `conn_mod_def::GMiJwMBEq20::vpzsVCTwTl-ZhaaR4N-x0Q` |
| Bulk Update Projects | PUT | `/api/v4/projects` | `conn_mod_def::GMiJwWdHvFQ::3MXMfeDDRO2R3NJUQMpOAw` |
| Clone a Project | POST | `/api/v4/projects/{{projectid}}/clone` | `conn_mod_def::GMiJwWcog_g::0XoNwE8QQsimpJ5FIpXEJw` |
| Complete a Project | PUT | `/api/v4/projects/{{projectid}}/complete` | `conn_mod_def::GMiJwdBCd0M::8aCdc9vURN-hlAP9t68j9A` |

14 more Projects actions are available through search.

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/api/v4/contacts/{{contactid}}` | `conn_mod_def::GMiJtEqjzvg::tG8JYH58SICYoQg3p1x-GA` |
| Get a Contact's Teams & Groups | GET | `/api/v4/contacts/{{contactid}}/groups` | `conn_mod_def::GMiJtNa7vYE::5Xl12MwJTrydZmp6Njk1hA` |
| Get Contacts for a Company | GET | `/api/v4/companies/{{companyId}}/contacts` | `conn_mod_def::GMiJtO2CEb0::YR879lOxQ86p9_sRMSmsCg` |
| Get Items for a Contact | GET | `/api/v4/contacts/{{contactId}}/items` | `conn_mod_def::GMiJtQuC5dQ::hjkHutpASQSF3EXcBSodJQ` |
| List a Contact's Tags | GET | `/api/v4/contacts/{{contactid}}/tags` | `conn_mod_def::GMiJtYw3OiU::3wfeSvbUQQ6kCHM_xrsT9g` |
| List Client Contacts | GET | `/api/v4/contacts/client` | `conn_mod_def::GMiJs8G4PXA::wJKnDduEQgWJkvumgqQ2ag` |
| List Contacts | GET | `/api/v4/contacts` | `conn_mod_def::GMiJtPfpH_4::DpPzWyl0TIqZzgfsFZ-dlw` |
| Add a Contact to Projects | PUT | `/api/v4/contacts/{{contactid}}/projects` | `conn_mod_def::GMiJsqmMwCI::mBJDI1QJRQi-GMftprepcg` |
| Add Groups to Contacts | POST | `/api/v4/contacts/groups` | `conn_mod_def::GMiJsqqZ-Z8::uB8l9o4hSU6WNuefHhA3DA` |
| Add Roles to a Contact | POST | `/api/v4/contacts/{{contactid}}/roles` | `conn_mod_def::GMiJsqTSWL4::avnbwua8QlW7zs6UAZ9TXQ` |
| Add Tags to Contacts | POST | `/api/v4/contacts/tags` | `conn_mod_def::GMiJsxIe4r4::7rXLjlT6RmWZyxPNM1cCUA` |
| Assign Contact to Items | POST | `/api/v4/contacts/{{contactid}}/items` | `conn_mod_def::GMiJswrzPOI::sRezyfovRCqpUrmGSkPLtQ` |

14 more Contacts actions are available through search.

### ProjectItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Item | GET | `/api/v4/projects/{{projectId}}/items/{{itemId}}` | `conn_mod_def::GMiJxQiT2Eo::jdjn3nGAScKzjxcDrpt4Yw` |
| Get a Project Item by ID | GET | `/api/v4/projects/items/{{itemid}}` | `conn_mod_def::GMiJxOLgKeg::rspkuggRTcuGxO7FqogrdQ` |
| List a Project's Items | GET | `/api/v4/projects/{{projectId}}/items` | `conn_mod_def::GMiJxcl9nvs::dURUsUhoTf-wyK9XBmN1OQ` |
| List Project Items | GET | `/api/v4/projects/items` | `conn_mod_def::GMiJxbqRulk::7kAARJYrTRG_NDzdxD_Y7A` |
| Add Contacts to Project Items | POST | `/api/v4/projects/items/contacts` | `conn_mod_def::GMiJv7eM5Hw::BL5lyUZ5TbGzW-uWSggkcQ` |
| Add Tags to Project Items | POST | `/api/v4/projects/items/tags` | `conn_mod_def::GMiJwEVmg64::kKlA27kkSCuC5JlDKiKIuA` |
| Add Tracking Options to Project Items | POST | `/api/v4/projects/items/tracking` | `conn_mod_def::GMiJwFJGSQw::JEPPbQJMRZK_o189mQ313A` |
| Bulk Update Project Item Work Stage | PUT | `/api/v4/projects/items/workstage` | `conn_mod_def::GMiJwLq0D2g::J_-Zm7sdTni1prxkQr2khw` |
| Bulk Update Project Items | PUT | `/api/v4/projects/items` | `conn_mod_def::GMiJwMMpCzY::8FMxU9QTQsaMfSU9epMhEw` |
| Clone Project Items | POST | `/api/v4/projects/items/clone` | `conn_mod_def::GMiJwUofzbQ::CozgNa4iTj-2EcHlykswSA` |
| Complete Project Items | PUT | `/api/v4/projects/items/complete` | `conn_mod_def::GMiJwT_IGuo::HBpXdBYNSkuM8vCODWfpEQ` |
| Create a Project Item | POST | `/api/v4/projects/{{projectId}}/items` | `conn_mod_def::GMiJwk6tdHI::Ednrd4XORGiC3nltA_zu3w` |

10 more ProjectItems actions are available through search.

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Quote by ID | GET | `/api/v4/quotes/{{quoteId}}` | `conn_mod_def::GMiJzPgZNvc::EHjT-169Qx2xZyGJpgDXXA` |
| Get a Quote Item | GET | `/api/v4/quotes/{{quoteid}}/items/{{itemid}}` | `conn_mod_def::GMiJzX2bHiM::WS6rE9fDQ82E0DZUn_nvXA` |
| List a Company's Quotes | GET | `/api/v4/companies/{{companyId}}/quotes` | `conn_mod_def::GMiJsZwQHec::4nykytymSFCHjKtiiCy9WA` |
| List a Quote's Phases | GET | `/api/v4/quotes/{{quoteid}}/phases` | `conn_mod_def::GMiJzlE2cIc::AuIi0_opTxe0ui_6KP-GHw` |
| List Quotes | GET | `/api/v4/quotes` | `conn_mod_def::GMiJzorMx4o::vft-2eEyT4Wy5WHGsyOa9w` |
| Bulk Delete Quotes | DELETE | `/api/v4/quotes` | `conn_mod_def::GMiJy1zDkDg::JQcLnTqnRjKK1Dox82JSMQ` |
| Bulk Update Quotes | PUT | `/api/v4/quotes` | `conn_mod_def::GMiJy2v8Z8g::Mpf7WnvzTqe7wMWfb8rs9Q` |
| Clone a Quote | POST | `/api/v4/quotes/{{quoteid}}/clone` | `conn_mod_def::GMiJy-crGpI::x9gmZQVBTvq2_wrMjIFJIg` |
| Create a Quote | POST | `/api/v4/quotes` | `conn_mod_def::GMiJy_DYTpA::k0_Xrrk1Rnm2RMlmZrtyZw` |
| Delete a Quote | DELETE | `/api/v4/quotes/{{quoteid}}` | `conn_mod_def::GMiJzHVMEjo::vfzcpDpgS-GsZvR7mtEwzg` |
| Delete a Quote Item | DELETE | `/api/v4/quotes/{{quoteid}}/items/{{itemid}}` | `conn_mod_def::GMiJzICVIt8::4pMfiGFRQTG_QTJIAr02Yw` |
| Delete a Quote Item | DELETE | `/api/v4/quotes/items/{{itemid}}` | `conn_mod_def::GMiJzIUuPao::8VRQbPbLQtutz3CA-P-WBw` |

7 more Quotes actions are available through search.

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice | GET | `/api/v4/invoices/{{invoiceid}}` | `conn_mod_def::GMiJurls-l4::NVXgoaNCTdmsUcrP5-nS5w` |
| Get Overdue Invoices | GET | `/api/v4/invoices/overdue` | `conn_mod_def::GMiJvIE2PTE::60WeaPUDROmnj97XXN2YUg` |
| List Invoices | GET | `/api/v4/invoices` | `conn_mod_def::GMiJvK8Tud0::MjrK2v7IS1GTDj2axRBzvA` |
| List Invoices for a Company | GET | `/api/v4/companies/{{companyId}}/invoices` | `conn_mod_def::GMiJsOPCQY8::Q1MQzeTtRU6sR_eITJncTA` |
| Bulk Adjust Invoice Phase Dates | PUT | `/api/v4/invoices/phases/adjustdates` | `conn_mod_def::GMiJuPEB3NA::s1X58ceITHit7zuRJ-BDjA` |
| Bulk Delete Invoices | DELETE | `/api/v4/invoices` | `conn_mod_def::GMiJuV7gdWU::RPjK25RRTRCxX_XPlaFf9g` |
| Clone an Invoice | POST | `/api/v4/invoices/{{invoiceid}}/clone` | `conn_mod_def::GMiJuZ38eVo::G3gFMTCIQj2EE7KU4yAKBA` |
| Create Invoice | POST | `/api/v4/invoices` | `conn_mod_def::GMiJuWszktw::IAcOb43kRe2G6ie5d3Jatw` |
| Delete an Invoice | DELETE | `/api/v4/invoices/{{invoiceid}}` | `conn_mod_def::GMiJug75a3Q::mKgNDikGThmY7chUl0-2Tw` |
| Reorder an Invoice | PUT | `/api/v4/invoices/{{invoiceid}}/order` | `conn_mod_def::GMiJvReS3kA::1ZIGEfw5Qqm4P4DzIrZMPA` |
| Update an Invoice | PUT | `/api/v4/invoices/{{invoiceid}}` | `conn_mod_def::GMiJvUFgyOA::yAmaJfe_SW6jHXsu-0VNEQ` |
| Update Invoice Work Stage | PUT | `/api/v4/invoices/{{invoiceid}}/workstage` | `conn_mod_def::GMiJvd_mGyM::L5aUnTl2RNuxbTo06lJmHA` |

1 more Invoices actions are available through search.

### InvoiceItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice Item | GET | `/api/v4/invoices/{{invoiceid}}/items/{{itemid}}` | `conn_mod_def::GMiJuzfMyNk::yFfPxG-AQsy578vF6STdBw` |
| Get an Invoice Item by ID | GET | `/api/v4/invoices/items/{{itemid}}` | `conn_mod_def::GMiJu06F79s::ynbcWhxPTE2oc0BwcSZRUQ` |
| Get Invoice Items | GET | `/api/v4/invoices/items` | `conn_mod_def::GMiJu8f7UNg::wAwiXDUSRFm_bFwC53WvmQ` |
| List an Invoice's Items | GET | `/api/v4/invoices/{{invoiceId}}/items` | `conn_mod_def::GMiJu-d-gZg::HmQDFiVaTs-Jb-FeDH6SxQ` |
| Bulk Update Invoice Items | PUT | `/api/v4/invoices/items` | `conn_mod_def::GMiJuXR0IQg::HJtpeqN2SIqgwU2mCxRbMg` |
| Create Invoice Items | POST | `/api/v4/invoices/items` | `conn_mod_def::GMiJugNVsvc::Q1mv8ByyTJG8CaFvACjRug` |
| Create Invoice Items for an Invoice | POST | `/api/v4/invoices/{{invoiceid}}/items` | `conn_mod_def::GMiJulTcMPw::tN0ujF4PTPeRDS3a6ibqsQ` |
| Delete an Invoice Item | DELETE | `/api/v4/invoices/{{invoiceid}}/items/{{itemid}}` | `conn_mod_def::GMiJusLRMMY::61YMH3CDRGSBdOla7SLcvQ` |
| Delete an Invoice Item | DELETE | `/api/v4/invoices/items/{{itemid}}` | `conn_mod_def::GMiJutEXSRk::hDik72wkRGq-LetQL9o6hA` |
| Reorder an Invoice Item | PUT | `/api/v4/invoices/items/{{itemid}}/order` | `conn_mod_def::GMiJvRhYzLo::sg4VZQPyQ7GbL4GpSvvJRQ` |
| Update an Invoice Item | PUT | `/api/v4/invoices/items/{{itemid}}` | `conn_mod_def::GMiJvSRRTQE::-qbh5DchQKSF7R1xNjLS3Q` |
| Update an Invoice Item | PUT | `/api/v4/invoices/{{invoiceid}}/items/{{itemid}}` | `conn_mod_def::GMiJvSSBjLI::j5jWufRYS9Got__kWKx4fA` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File | GET | `/api/v4/files/{{fileid}}/download` | `conn_mod_def::GMiJt9jRHP4::hiL_13M2RoOi6NA-6S2FQg` |
| Download Files as ZIP | GET | `/api/v4/files/download` | `conn_mod_def::GMiJt-2urrM::QQJsfY2BQtq-b7tfaAGYGQ` |
| Get a File | GET | `/api/v4/files/{{fileid}}` | `conn_mod_def::GMiJt9Nxe8M::VptekqrJRYCM66JNN-BTCQ` |
| List a Company's Files | GET | `/api/v4/companies/{{companyId}}/files` | `conn_mod_def::GMiJsAh9tI0::bJR1ZQdPSxGtCFkh3GIiRw` |
| List Files | GET | `/api/v4/files` | `conn_mod_def::GMiJuA9mp6o::-Nk52pCoRlilexeKfm0kGw` |
| Public Download File | GET | `/api/v4/{{accountname}}/api/v4/files/public/{{fileid}}/{{token}}` | `conn_mod_def::GMiJuHMeNFU::V4enjWmTRqClgbAd6rWvQg` |
| Delete a File | DELETE | `/api/v4/files/{{fileid}}` | `conn_mod_def::GMiJt21dT2c::Yl4meHicQGCZS_1JWiFzAw` |
| Delete Files | DELETE | `/api/v4/files` | `conn_mod_def::GMiJt9iOkT4::QXMeK7ekS06Y7YrNyiXIfg` |
| Move Files | PUT | `/api/v4/files/move` | `conn_mod_def::GMiJuHKTTyc::c-vqPKQJS0mU1t0pCA1gVw` |
| Upload a File to a Company | POST | `/api/v4/companies/{{companyid}}/files` | `conn_mod_def::GMiJsqksXr4::X3A13zxYSm6DYYcZTyAVYg` |
| Upload File to a Folder | POST | `/api/v4/files/folders/{{folderid}}/files` | `conn_mod_def::GMiJuORQ0nI::QLG0ChsSSYKIoYEMv-idtA` |

### InvoicePhases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice Phase | GET | `/api/v4/invoices/{{invoiceid}}/phases/{{phaseid}}` | `conn_mod_def::GMiJu7jDBL4::I8Fcd5aoR2KeqHB7atBReQ` |
| Get an Invoice Phase by ID | GET | `/api/v4/invoices/phases/{{phaseid}}` | `conn_mod_def::GMiJu78lEH0::XJ0rT4ilQUig29wzMkSRoA` |
| Get Invoice Phases | GET | `/api/v4/invoices/phases` | `conn_mod_def::GMiJu9SDWdU::ZXOwXh6yRvKawoeEnjcAPA` |
| Get Invoice Phases | GET | `/api/v4/invoices/{{invoiceid}}/phases` | `conn_mod_def::GMiJvGw_fdg::sDCGX9RwQ3mvDxfAYQZrsw` |
| Bulk Update Invoice Phases | PUT | `/api/v4/invoices/phases` | `conn_mod_def::GMiJuWkflD4::bAX89RwlS42aSw07qyELNg` |
| Create Invoice Phases | POST | `/api/v4/invoices/{{invoiceid}}/phases` | `conn_mod_def::GMiJugjjBvw::zSjjMaXTRdmJy1hvCbVVjQ` |
| Create Invoice Phases | POST | `/api/v4/invoices/phases` | `conn_mod_def::GMiJuhL05e0::GbPUwWHJSGmY-Fj6t9BQsw` |

4 more InvoicePhases actions are available through search.

This lists 90 of 403 actions. For anything not here, call `search_one_platform_actions` with platform `pro-workflow`. The full catalog is at https://www.withone.ai/knowledge/pro-workflow.

## When a call fails

The error comes from ProWorkflow, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/pro-workflow

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
