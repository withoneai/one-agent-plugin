---
name: panda-doc
description: PandaDoc is a document automation and e-signature platform that enables businesses to create, send, track, and sign proposals, contracts, and other agreements, allowing teams to streamline approval workflows, manage document lifecycles, and integrate signing processes into business systems. Read and write PandaDoc data through One: documents, templates, webhooksubscriptions, contentlibraryitems, contacts, documentattachments and more, 117 actions with real parameter documentation. Use whenever the user asks to look something up in PandaDoc, create or update a record there, or build code against the PandaDoc API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: panda-doc
  generated-from: one-knowledge-base
---

# PandaDoc through One

PandaDoc is a document automation and e-signature platform that enables businesses to create, send, track, and sign proposals, contracts, and other agreements, allowing teams to streamline approval workflows, manage document lifecycles, and integrate signing processes into business systems.

One exposes PandaDoc through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `panda-doc` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm PandaDoc is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real PandaDoc account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Completed Document as a Protected PDF | GET | `/public/v1/documents/{{id}}/download-protected` | `conn_mod_def::GKO2vPFluX8::T9M1a2UrSA-t6zst6DXpkw` |
| Download a Document PDF | GET | `/public/v1/documents/{{id}}/download` | `conn_mod_def::GKO2vGXJdow::tEu89aB8RmGgVvU-3nTM3Q` |
| Get a Document's Auto Reminder Settings | GET | `/public/v1/documents/{{documentId}}/auto-reminders` | `conn_mod_def::GKO2uWhUdO8::93myj1XzR4uS35nbNX3iTw` |
| Get a Document's Auto Reminder Status | GET | `/public/v1/documents/{{documentId}}/auto-reminders/status` | `conn_mod_def::GKO2uWwbk-E::J_9lFKt-TeWFkewBdhBf_g` |
| Get a Document's DOCX Export Task | GET | `/public/beta/documents/{{documentId}}/docx-export-tasks/{{taskId}}` | `conn_mod_def::GKO2uxlfQLw::iPerA5ytRC-deGFktoWexQ` |
| Get a Document's eSign Disclosure | GET | `/public/v1/documents/{{documentId}}/esign-disclosure` | `conn_mod_def::GKO2vFi08-Y::qLDAgmtoS5KQKMROJePhAQ` |
| Get a Document's Settings | GET | `/public/v2/documents/{{documentId}}/settings` | `conn_mod_def::GKO2upbfnNk::j427o7WiT8-6K49iD5CrYQ` |
| Get a Document's Status | GET | `/public/v1/documents/{{id}}` | `conn_mod_def::GKO2vEZCltQ::O1TuV5dPRKW-Gf80vkJRoQ` |
| Get Document Details | GET | `/public/v1/documents/{{id}}/details` | `conn_mod_def::GKO2vEgNvcE::cirAHGNMR76Gn5-7tRWGfQ` |
| List a Document's Attachments | GET | `/public/v1/documents/{{id}}/attachments` | `conn_mod_def::GKO2uBIXR-U::z4gl5TccS42G2OMh5N1iEg` |
| List a Document's Audit Trail | GET | `/public/v2/documents/{{documentId}}/audit-trail` | `conn_mod_def::GKO2uBkQSlo::Hts9poy4Q0iuNOxSybu1lQ` |
| List a Document's Fields | GET | `/public/v1/documents/{{id}}/fields` | `conn_mod_def::GKO2uBhRhHA::ngLKmwfvRiuz_3Y0A7RWnA` |

29 more Documents actions are available through search.

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template's Settings | GET | `/public/v2/templates/{{templateId}}/settings` | `conn_mod_def::GKO2wWXuadI::ikUztBe_Q52Eef0ft2mHuA` |
| Get a Template's Status | GET | `/public/v1/templates/{{id}}` | `conn_mod_def::GKO2we-CB9k::Z2DDcFQWST-sNRJ7t7V7QA` |
| Get Template Details | GET | `/public/v1/templates/{{id}}/details` | `conn_mod_def::GKO2wfzu6xI::afUNYGKYTVOaCFEWpSGExg` |
| List Templates | GET | `/public/v1/templates` | `conn_mod_def::GKO2wg9UqgY::ssyMwbXlQ3WPr_8DfS3xzw` |
| Create Template | POST | `/public/v1/templates` | `conn_mod_def::GKO2wWtAr3c::kgrQ8O0FRYOF84i8BMLBUA` |
| Create Template from File Upload | POST | `/public/v1/templates` | `conn_mod_def::GKO2wf9NWLU::O0vX0xI5RRyZ4jZywXKZUQ` |
| Delete a Template | DELETE | `/public/v1/templates/{{id}}` | `conn_mod_def::GKO2wfo3RKI::VMngzl0ETmeHzohh8w2Hcw` |
| Update a Template | PATCH | `/public/v1/templates/{{id}}` | `conn_mod_def::GKO2wq9s5b8::qlMGm1q1Rrq520xiqsvg1Q` |
| Update a Template's Settings | PATCH | `/public/v2/templates/{{templateId}}/settings` | `conn_mod_def::GKO2wWfXqwo::iGd9aG7fQGSDnJi3JSr70w` |

### WebhookSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhook Subscription Details | GET | `/public/v1/webhook-subscriptions/{{id}}` | `conn_mod_def::GKO2xFIXxqw::1QLA6OR5RCCjEdmQ17ZJzw` |
| List Webhook Subscriptions | GET | `/public/v1/webhook-subscriptions` | `conn_mod_def::GKO2w8hpRG4::icNXFWyjSzKsKoorvNLiEw` |
| Create Webhook Subscription | POST | `/public/v1/webhook-subscriptions` | `conn_mod_def::GKO2w8wuf4Y::pJcDRrDASUSB6ruTGSp85A` |
| Delete a Webhook Subscription | DELETE | `/public/v1/webhook-subscriptions/{{id}}` | `conn_mod_def::GKO2w8Qqlzc::7oQQvfI0SWuN9pCMV4Go9w` |
| Update a Webhook Subscription | PATCH | `/public/v1/webhook-subscriptions/{{id}}` | `conn_mod_def::GKO2w9DkbR0::oPBfwr1wTsuN3wGXP9GzVA` |
| Update a Webhook Subscription's Shared Key | PATCH | `/public/v1/webhook-subscriptions/{{id}}/shared-key` | `conn_mod_def::GKO2xFlCYLM::sWTmWJPjSAW9qLiVw_36dA` |

### ContentLibraryItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Content Library Item's Status | GET | `/public/v1/content-library-items/{{id}}` | `conn_mod_def::GKO2ttqrJY4::OxiPvuY4SNSNNztl1CKeMw` |
| Get Content Library Item Details | GET | `/public/v1/content-library-items/{{id}}/details` | `conn_mod_def::GKO2tt64CD4::YQ0wVg0lTGqZPHPrZYA4aQ` |
| List Content Library Items | GET | `/public/v1/content-library-items` | `conn_mod_def::GKO2tw2-ov4::qVOdHRV1QiK1O-LsQAs-GQ` |
| Create Content Library Item | POST | `/public/v1/content-library-items` | `conn_mod_def::GKO2ttpdgFE::DRKXS9CnQfSAffRIkfmeFA` |
| Create Content Library Item from File Upload | POST | `/public/v1/content-library-items` | `conn_mod_def::GKO2tu2eR6Q::E1K5lV9ZQwCk7Eht3wV19Q` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Details | GET | `/public/v1/contacts/{{id}}` | `conn_mod_def::GKO2tlihIA0::AxdvX68DQn20YDxFQMDNiw` |
| List Contacts | GET | `/public/v1/contacts` | `conn_mod_def::GKO2thi3j60::j4HxXyANTVOCwhK-LdGaXg` |
| Create Contact | POST | `/public/v1/contacts` | `conn_mod_def::GKO2tlqhQAw::vNn8o8TQQ-WogDsfxSgX4g` |
| Delete a Contact | DELETE | `/public/v1/contacts/{{id}}` | `conn_mod_def::GKO2thAjWlU::AyMrjTJnTEq8T6kEhrBjXA` |
| Update a Contact | PATCH | `/public/v1/contacts/{{id}}` | `conn_mod_def::GKO2tiuNVts::umzMtXXAQqqnuIGVNSHaKA` |

### DocumentAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Document Attachment | GET | `/public/v1/documents/{{id}}/attachments/{{attachmentId}}/download` | `conn_mod_def::GKO2t5XzfOQ::DbVHkQkWSu-rkuJsNvLm0g` |
| Get a Document's Attachment Details | GET | `/public/v1/documents/{{id}}/attachments/{{attachmentId}}` | `conn_mod_def::GKO2t5lxKMs::o-CQ5IbGTWCHa4-PFrrLvA` |
| Create a Document Attachment | POST | `/public/v1/documents/{{id}}/attachments` | `conn_mod_def::GKO2t4u_NHU::qjx2qBaWTZKGQ6e9Vbropw` |
| Create a Document Attachment From Upload | POST | `/public/v1/documents/{{id}}/attachments?upload` | `conn_mod_def::GKO2t5X0ARU::66f-dni-S2avYeKBxzZTPw` |

### ProductCatalogItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Catalog Item Details | GET | `/public/v2/product-catalog/items/{{itemUuid}}` | `conn_mod_def::GKO2wOyI4t8::EBg091opQ_23JNl3cgQT8w` |
| Search Product Catalog Items | GET | `/public/v2/product-catalog/items/search` | `conn_mod_def::GKO2wKZcxtc::OwxhKuPZQqKYTvhrMwPEnw` |
| Create Catalog Item | POST | `/public/v2/product-catalog/items` | `conn_mod_def::GKO2wGiTlm8::Fau-YYQaSgm7JmAwCtmr8w` |
| Update a Catalog Item | PATCH | `/public/v2/product-catalog/items/{{itemUuid}}` | `conn_mod_def::GKO2wGFM_Hg::jni17fzpTDiuGiX-HouZsw` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspaces | GET | `/public/v1/workspaces` | `conn_mod_def::GKO2wyy38YI::pZ7XlM42SHCZcPPJQZcfhQ` |
| Create Workspace | POST | `/public/v1/workspaces` | `conn_mod_def::GKO2woDNmzY::IKkvjeXzRXKWMtYcaAy2Bg` |
| Deactivate a Workspace | POST | `/public/v1/workspaces/{{workspaceId}}/deactivate` | `conn_mod_def::GKO2wyjJye8::g1qZayzfRD-PTvBN7fPUOQ` |
| Remove Member from a Workspace | DELETE | `/public/v1/workspaces/{{workspaceId}}/members/{{memberId}}` | `conn_mod_def::GKO2wyvVQms::T_oL-93zSjulmtwObV2SeQ` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Member Details | GET | `/public/v1/members/current` | `conn_mod_def::GKO2vw8eetc::VRg__OJ5TGaK6NpQbYin2A` |
| Get Member Details | GET | `/public/v1/members/{{id}}` | `conn_mod_def::GKO2vxyPTNo::EwZBCpHyTMuLNjyqGQLZ5A` |
| List Members | GET | `/public/v1/members` | `conn_mod_def::GKO2vxkQ9YI::U14qvceURr2D3fYz1CdtNQ` |
| Create a Member Token | POST | `/public/v1/members/{{memberId}}/token` | `conn_mod_def::GKO2v0RlxxY::Huy61LEeTQyylFwYfpU4mA` |

### NotarizationRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Notarization Request Details | GET | `/public/v2/notary/notarization-requests/{{sessionRequestId}}` | `conn_mod_def::GKO2v8aHi6c::bkO-4MxESwymPzuBfJzq6Q` |
| Create a Notarization Request | POST | `/public/v2/notary/notarization-requests` | `conn_mod_def::GKO2v8OdSaU::9XtlVPVpSPSdNIYvk2F47g` |
| Delete a Notarization Request | DELETE | `/public/v2/notary/notarization-requests/{{sessionRequestId}}` | `conn_mod_def::GKO2v8fRAHc::vkHC4Nl6RvuIsUXeffOfWw` |

### TemplatesFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Templates Folder | POST | `/public/v1/templates/folders` | `conn_mod_def::GKO2vnRP2U4::09VXi-zTRY6LGShkeRTBBg` |
| Rename a Templates Folder | PUT | `/public/v1/templates/folders/{{id}}` | `conn_mod_def::GKO2vmwCWz4::7C8CLQWSR0KKb_aHaowy0w` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/public/v1/users` | `conn_mod_def::GKO2wzZOXhI::fTAm1-8RSWCWsSKihHl4ng` |
| Create Users | POST | `/public/v1/users` | `conn_mod_def::GKO2wpZqEnc::bk3saNqmQ8CphdmYoDVzbw` |

### DocumentSections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document Section's Details | GET | `/public/v1/documents/{{documentId}}/sections/{{sectionId}}` | `conn_mod_def::GKO2uffm5Gc::UGRiPFOOShypsjsFM2gw8g` |
| List Document Sections | GET | `/public/v1/documents/{{documentId}}/sections` | `conn_mod_def::GKO2uocgk38::QE5lyQM9RDm1Se84K8spdQ` |

### DocumentSectionsUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Document Section for a Document | POST | `/public/v1/documents/{{documentId}}/sections/uploads` | `conn_mod_def::GKO2ugOIdxw::A1_0xQAMR3ODC2smt6KHyA` |
| Create Document Section from File Upload for a Document | POST | `/public/v1/documents/{{documentId}}/sections/uploads?upload` | `conn_mod_def::GKO2ugUPtZg::dglVHoruSxuRNm8XtIp4hg` |

### WebhookEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhook Event Details | GET | `/public/v1/webhook-events/{{id}}` | `conn_mod_def::GKO2w8Pdg3Y::CGPYPCX1Qleh8s5C0kjrHA` |
| List Webhook Events | GET | `/public/v1/webhook-events` | `conn_mod_def::GKO2w0qalmw::WMUfXcxiRCOCNAZnW8lJIg` |

### ApiLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Log Details | GET | `/public/v1/logs/{{id}}` | `conn_mod_def::GKO2tYT530o::aukh7JxSSoyVGko6H2lBHg` |
| List API Logs | GET | `/public/v1/logs` | `conn_mod_def::GKO2tZn8JvM::2lkRV2XyQrKWBHeZoDr17Q` |

### DocumentsFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Documents Folder | POST | `/public/v1/documents/folders` | `conn_mod_def::GKO2vdvMnQk::zkyWKe6TSSWDRFdXnBVlbw` |
| Rename a Documents Folder | PUT | `/public/v1/documents/folders/{{id}}` | `conn_mod_def::GKO2vmcqSJk::ssM1BGRfSbquW6ANKRgHSQ` |

### Logs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Log Details | GET | `/public/v2/logs/{{id}}` | `conn_mod_def::GKO2tYErgNY::BOr_Q0CFRHSUo17nPaISxw` |
| List API Logs | GET | `/public/v2/logs` | `conn_mod_def::GKO2tZrbK4g::xfS3BUVPSWOuEtU1kyaANA` |

### DocumentSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Document Session for Embedded Sign | POST | `/public/v1/documents/{{id}}/session` | `conn_mod_def::GKO2u51cP7Q::HHhOhFpRTraxoIklxqdbcQ` |

### CatalogItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Catalog Item | DELETE | `/public/v2/product-catalog/items/{{itemUuid}}` | `conn_mod_def::GKO2wGTUi00::VY7KUBKvS5C2O4J3bzpYPw` |

### DocumentSectionUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document's Section Upload Status | GET | `/public/v1/documents/{{documentId}}/sections/uploads/{{uploadId}}` | `conn_mod_def::GKO2uoleLko::DEqeeW29QVWXHEvOJEBPig` |

### TemplateFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Template Folders | GET | `/public/v1/templates/folders` | `conn_mod_def::GKO2voP3SEI::lmVrH_m6SwmKo1AdaWrS2g` |

### DocumentFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Document Folders | GET | `/public/v1/documents/folders` | `conn_mod_def::GKO2vp5JbVE::GNbAMtLxRBqHScu_xczqgg` |

### WorkspaceMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Member to a Workspace | POST | `/public/v1/workspaces/{{workspaceId}}/members` | `conn_mod_def::GKO2wp7AnFk::fbUO6OXuTqCK1I5FfFFnbQ` |

### DocumentRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Document Recipient | POST | `/public/v1/documents/{{id}}/recipients` | `conn_mod_def::GKO2uL-kMQM::yOPCbHbqROO6DeiHF5qnQA` |

### AccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Refresh an Access Token | POST | `/oauth2/access_token` | `conn_mod_def::GKO2v9nko_k::u7dsqNT2SZmIVg-nKqFTVw` |

### Notaries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Notaries | GET | `/public/v2/notary/notaries` | `conn_mod_def::GKO2v-XdiJ0::15rEE_8hTTaDIFeXnR_q-Q` |

### WorkspaceApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workspace API Key | POST | `/public/v1/workspaces/{{workspaceId}}/api-keys` | `conn_mod_def::GKO2wof0II8::RZljg-A4Rfy1qucRmnhzPw` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Forms | GET | `/public/v1/forms` | `conn_mod_def::GKO2vyF4ZGw::63uMKZUQQhGcr2kwcVcOBA` |

### SmsOptOuts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Recent SMS Opt-outs | GET | `/public/v1/sms-opt-outs` | `conn_mod_def::GKO2tZNYt6M::Dtslhfs7SHe_kmFhPxuIYQ` |

### DsvNamedItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Add DSV Named Items to a Document | POST | `/public/v2/dsv/{{documentId}}/add-named-items` | `conn_mod_def::GKO2upegkyc::SO3OmoLGQ4-On8nFcuj0xw` |

### DocumentEditingSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Document Editing Session | POST | `/public/v1/documents/{{id}}/editing-sessions` | `conn_mod_def::GKO2uxCBOI0::p1UToVm4S96Zi4TAP3ke_Q` |

### TemplateEditingSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Template Editing Session | POST | `/public/v1/templates/{{id}}/editing-sessions` | `conn_mod_def::GKO2wXJAQl0::3JGnT7XpR7ygeyUm0an9xg` |

### DocumentQuotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Document Quote | PUT | `/public/v1/documents/{{documentId}}/quotes/{{quoteId}}` | `conn_mod_def::GKO2wXW3bVo::mYBItE7ETDKLt_fPAsBxmQ` |

This lists 88 of 117 actions. For anything not here, call `search_one_platform_actions` with platform `panda-doc`. The full catalog is at https://www.withone.ai/knowledge/panda-doc.

## When a call fails

The error comes from PandaDoc, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/panda-doc

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
