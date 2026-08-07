---
name: salesmate
description: Salesmate is an AI-powered CRM platform that helps businesses automate sales, marketing, and support workflows, enabling unified pipeline management, smart campaigns, and seamless customer engagement. Read and write Salesmate data through One: contacts, companynotes, notes, products, custommodulerecords, deals and more, 63 actions with real parameter documentation. Use whenever the user asks to look something up in Salesmate, create or update a record there, or build code against the Salesmate API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: salesmate
  generated-from: one-knowledge-base
---

# Salesmate through One

Salesmate is an AI-powered CRM platform that helps businesses automate sales, marketing, and support workflows, enabling unified pipeline management, smart campaigns, and seamless customer engagement.

One exposes Salesmate through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `salesmate` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Salesmate is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Salesmate account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/apis/contact/v4/{{contactId}}` | `conn_mod_def::GJ6V6dSbJOg::jVZ_cac7SY22QbZiX3I4eQ` |
| Add a Contact | POST | `/apis/contact/v4` | `conn_mod_def::GJ6V5UXccBs::1YPhsFJGSjqUO_IuG13Cug` |
| Delete a Contact | DELETE | `/apis/contact/v4/{{contactId}}` | `conn_mod_def::GJ6V52mN2qk::Nd23EXPhQRujjkLIVkmskA` |
| Pin a Note in a Contact | PATCH | `/apis/contact/v4/modules/1/object/{{contactId}}/notes/{{noteId}}/pin-it` | `conn_mod_def::GJ6V65f4aC4::xNfiLdu4Rre1wv7muzNKRg` |
| Search Contacts | POST | `/apis/contact/v4/search` | `conn_mod_def::GJ6V7cQ73q0::WGvQu_LGQKe9KCd-yGPrOg` |
| Update a Contact | PUT | `/apis/contact/v4/{{contactId}}` | `conn_mod_def::GJ6V7mAGop4::6MFKm9fyQUeKo7NUL6yAOg` |
| Update a Contact’s Note | PUT | `/apis/contact/v4/modules/1/object/{{contactId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V8DkZp3c::qZ2hcAPaR9iDhDEtZtPLcA` |

### CompanyNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a New Note for a Company | POST | `/apis/company/v4/modules/5/object/{{companyId}}/notes` | `conn_mod_def::GJ6V5qWDvGI::g2YzXcI9SRKE03LCRQ4tpA` |
| Delete a Company’s Note | DELETE | `/apis/company/v4/modules/5/object/{{companyId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V6QA1uKc::GfuJV1GOTT-yuTbU1NvRHg` |
| Pin a Company's Note | PATCH | `/apis/company/v4/modules/5/object/{{companyId}}/notes/{{noteId}}/pin-it` | `conn_mod_def::GJ6V68KvouU::Zz0VYdysSB6Wh2ibCB3WNA` |
| Un-pin a Company's Note | PATCH | `/apis/company/v4/modules/5/object/{{companyId}}/notes/{{noteId}}/unpin-it` | `conn_mod_def::GJ6V7ib_Zlc::ktJYMb95Sy6qOMzfHWakAw` |
| Update a Company Note | PUT | `/apis/company/v4/modules/5/object/{{companyId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V7_IzDwI::2YT9fZuzRPG-QXC_dsSTrg` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note’s Details by ID (for a Module Object) | GET | `/apis/module/v4/modules/{{moduleId}}/objects/{{objectId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V6qGOTEs::Ttcb__kdT3K1oahVlkoDVg` |
| List a Record’s Notes | GET | `/apis/module/v4/modules/{{moduleId}}/objects/{{objectId}}/notes` | `conn_mod_def::GJ6V6dFJ7lQ::O63TN8viSTm_zPoAbqn7fA` |
| Add a New Note to a Module Object | POST | `/apis/module/v4/modules/{{moduleId}}/objects/{{objectId}}/notes` | `conn_mod_def::GJ6V5rU4NI0::mj-hskLpSvOS3bCK17jwXg` |
| Delete a Note from a Module Object | DELETE | `/apis/module/v4/modules/{{moduleId}}/objects/{{objectId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V6HBf5Uw::_wWR56QGSCSVMg6_utnrCQ` |
| Un-pin a Note for a Module Object | PATCH | `/apis/module/v4/modules/{{moduleId}}/objects/{{objectId}}/notes/{{noteId}}/unpin` | `conn_mod_def::GJ6V7m9PUfI::W1Vzixt6Txec7Sh7aLFuZg` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Product | POST | `/apis/v1/products` | `conn_mod_def::GJ6V5KaEHHc::0n4aEoGfQBKZRn5fTD_VqA` |
| Delete a Product | DELETE | `/apis/v1/products/{{productId}}` | `conn_mod_def::GJ6V5JXm5qI::9QUMqz2ZQ1u--W54lSGTCw` |
| Delete Multiple Products in Bulk | PUT | `/apis/v1/products/bulkDelete` | `conn_mod_def::GJ6V5JYQoeQ::N6U2C8XpRd6wS6IyEvSTbQ` |
| Search Products | POST | `/apis/v3/products/search` | `conn_mod_def::GJ6V5UXIfK8::fYk7xSDTToyG-3PmVwzLpg` |
| Update a Product | PUT | `/apis/v1/products/{{productId}}` | `conn_mod_def::GJ6V5XnSX3g::xGGIwN-HRtmuuEPDUgmdkw` |

### CustomModuleRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Module Record’s Details | GET | `/apis/module/v4/{{moduleId}}/records/{{recordId}}` | `conn_mod_def::GJ6V6hPJqyw::RHSvBGLWTvKGD0TqJJmxPg` |
| Create a Custom Module’s Record | POST | `/apis/module/v4/{{moduleId}}/records` | `conn_mod_def::GJ6V5tnWD4M::NjlMgeeFRMCS6c8gXfaciQ` |
| Delete a Custom Module Record | DELETE | `/apis/module/v4/{{moduleId}}/records/{{recordId}}` | `conn_mod_def::GJ6V5-RfLUQ::IIbjrKEqRUCjn1I-JupqpA` |
| Search Custom Module Records | POST | `/apis/module/v4/records/search` | `conn_mod_def::GJ6V68p-lKs::YqIrbtwJRsWXkbeocolxXQ` |
| Update a Custom Module Record | PUT | `/apis/module/v4/{{moduleId}}/records/{{recordId}}` | `conn_mod_def::GJ6V7vHSkgM::AWjIJ7fATvG1Gf3HB1uIIA` |

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deal | GET | `/apis/deal/v4/{{dealId}}` | `conn_mod_def::GJ6V6aoBjaE::19vkKnrJTR-pF41Y97HHig` |
| Add a Deal | POST | `/apis/deal/v4` | `conn_mod_def::GJ6V5f10XxQ::Y2aFXSQMSamNdSQ-_FlB7w` |
| Delete a Deal | DELETE | `/apis/deal/v4/{{dealId}}` | `conn_mod_def::GJ6V52NYkQc::S-TpQP1oTaS6XTWdfMDtzQ` |
| Search Deals | POST | `/apis/deal/v4/search` | `conn_mod_def::GJ6V7ZqSUF8::KxpBaRKqRPqVi9FYrmZO2w` |
| Update a Deal | PUT | `/apis/deal/v4/{{dealId}}` | `conn_mod_def::GJ6V7sqTQjw::xnHwGrz-RbGWmPCNPDtKPQ` |

### DealNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a New Note to a Deal | POST | `/apis/deal/v4/modules/4/object/{{dealId}}/notes` | `conn_mod_def::GJ6V5gbTyDQ::v1cGUyMgQnC2BTlkO-nMGQ` |
| Delete a Deal Note | DELETE | `/apis/deal/v4/modules/4/object/{{dealId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V51-eyM8::ppmnNgpFQ3mX1n6hB-Ze7g` |
| Pin a Deal Note | PATCH | `/apis/deal/v4/modules/4/object/{{dealId}}/notes/{{noteId}}/pin-it` | `conn_mod_def::GJ6V6n7VpHc::xn55C1WWRVSocVruARXj5w` |
| Un-pin a Deal Note | PATCH | `/apis/deal/v4/modules/4/object/{{dealId}}/notes/{{noteId}}/unpin-it` | `conn_mod_def::GJ6V7UxkQus::8hhRTUDWT9qap4v3OJ-4ww` |
| Update a Deal Note | PUT | `/apis/deal/v4/modules/4/object/{{dealId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V7wlbjsM::UM_ugeq7T2ixLQ-bUf21ew` |

### Company

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company | GET | `/apis/company/v4/{{companyId}}` | `conn_mod_def::GJ6V6GjqVB8::gz6Q9FqYR7KnrXqlMWYFSQ` |
| Add a Company | POST | `/apis/company/v4` | `conn_mod_def::GJ6V5TRQXaw::PSJh75JpTlKXmQIs5kgjCw` |
| Delete a Company | DELETE | `/apis/company/v4/{{companyId}}` | `conn_mod_def::GJ6V5sWJXtY::pTpvnOqXQ1W-LKHN2lGH8A` |
| Update a Company | PUT | `/apis/company/v4/{{companyId}}` | `conn_mod_def::GJ6V7mN5KzE::ucAYw2yCSb6QrYpo62oV2g` |

### Activity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Activity | GET | `/apis/activity/v4/{{activityId}}` | `conn_mod_def::GJ6V6u0HnwA::VUag6BdsSTetibLtcoEjRQ` |
| Add an Activity | POST | `/apis/activity/v4` | `conn_mod_def::GJ6V5f1S7QI::xlsHqMaQQ2eWgwnJ2k2_IA` |
| Delete an Activity | DELETE | `/apis/activity/v4/{{taskId}}` | `conn_mod_def::GJ6V6ULyAJc::WrqWMu44QE2iyaMzbrOhCg` |
| Update an Activity | PUT | `/apis/activity/v4/{{taskId}}` | `conn_mod_def::GJ6V8CxB6yE::j7sRHMnAQ9SX2V4N4yXYbw` |

### TaskNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a New Note to a Task | POST | `/apis/activity/v4/modules/2/object/{{taskId}}/notes` | `conn_mod_def::GJ6V5grTzXY::ffh-E2bORkCoPFWeAscT5g` |
| Delete a Task’s Note | DELETE | `/apis/activity/v4/modules/2/object/{{taskId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V52T_oxA::lM5-IWl2T6yJ291jiHEukA` |
| Pin a Task Note | PATCH | `/apis/activity/v4/modules/2/object/{{taskId}}/notes/{{noteId}}/pin-it` | `conn_mod_def::GJ6V6xyAIAc::7ady_yADTxuW3GENsBPlsA` |
| Un-pin a Task Note | PATCH | `/apis/activity/v4/modules/2/object/{{taskId}}/notes/{{noteId}}/unpin-it` | `conn_mod_def::GJ6V7Vg1xuk::hdgYjMn8Q3uxUUE9jZo0TA` |

### ContactNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a New Note to a Contact | POST | `/apis/contact/v4/modules/1/object/{{contactId}}/notes` | `conn_mod_def::GJ6V5gs6xDo::7VMYoEErSQiCUBybe_3UOA` |
| Delete a Contact’s Note | DELETE | `/apis/contact/v4/modules/1/object/{{contactId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V6MPX3kI::Z49LJ4TnQUqEBJFfsjEtkA` |
| Un-pin a Note in a Contact | PATCH | `/apis/contact/v4/modules/1/object/{{objectId}}/notes/{{noteId}}/unpin-it` | `conn_mod_def::GJ6V7m87tjU::NyU4VeAvTxi8HLARvdYIlA` |

### ModuleObjectNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Pin a Note for a Module Object | PATCH | `/apis/module/v4/modules/{{moduleId}}/objects/{{objectId}}/notes/{{noteId}}/pin-it` | `conn_mod_def::GJ6V6_rNb-Y::NC2OYPX9RaS-D3GjaZymhA` |
| Update a Note for a Module Object | PUT | `/apis/module/v4/modules/{{moduleId}}/objects/{{objectId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V74L6f8A::nt_jXD0JSWSbT9UiPFBEYQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Active Users | GET | `/apis/core/v4/users` | `conn_mod_def::GJ6V6cwEHCA::JlfuEsH1R42DezBXKL9Cmg` |

### NoteAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note Attachment (URL for a Specific Attachment) | GET | `/apis/module/v4/modules/{{moduleId}}/objects/{{objectId}}/notes/{{noteId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ6V6qq5HxY::uGThMuYxS5e4-QU9UiwDSg` |

### ProductVariations

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Variant to a Product | POST | `/apis/v1/products/{{productId}}/variations` | `conn_mod_def::GJ6V5KCnmxY::mytT99p-QJ-YOKVrvy8g4g` |

### DealLookupFieldAssociatedRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Details of a Deal Lookup Field’s Associated Records | GET | `/apis/deal/v1/{{recordId}}/lookup-fields/{{fieldApiName}}/associated-records` | `conn_mod_def::GJ6V5UzJZtc::QsXSQ1MISHC9rcE-uCLwGQ` |

### Records

| Action | Method | Path | Action id |
|---|---|---|---|
| Add/Update a Record’s Lookup Field (Single or Multiple) | PUT | `/apis/{{moduleName}}/v4/{{recordId}}` | `conn_mod_def::GJ6V5q_7HgU::nc8q8J7dQDeiFTOOY1mMxw` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Companies (v4) | POST | `/apis/company/v4/search` | `conn_mod_def::GJ6V7KYH0QU::vdhk0xwWRmO_CzO9N1wgxA` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Activities (v4) | POST | `/apis/activity/v4/search` | `conn_mod_def::GJ6V7RyvEGk::iv_bP30tR6u34suTI490tA` |

### Modules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Module IDs (by Internal Name) | GET | `/apis/module/v4/modules/{{internalName}}` | `conn_mod_def::GJ6V5J-7-sY::o3T1BOJUSX-0Mo-8nLNQZA` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Task’s Note | PUT | `/apis/activity/v4/modules/2/object/{{taskId}}/notes/{{noteId}}` | `conn_mod_def::GJ6V7y7Esv4::gR1VkEp5T7eGkRjlfy_2oQ` |

## When a call fails

The error comes from Salesmate, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/salesmate

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
