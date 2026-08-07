---
name: bold-sign
description: BoldSign is an electronic signature platform that provides APIs and workflow tools for sending, signing, and managing digital documents, allowing businesses and developers to automate agreement processes, collect legally binding signatures, and track document status across applications. Read and write BoldSign data through One: document, template, users, senderidentities, documents, brand and more, 85 actions with real parameter documentation. Use whenever the user asks to look something up in BoldSign, create or update a record there, or build code against the BoldSign API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bold-sign
  generated-from: one-knowledge-base
---

# BoldSign through One

BoldSign is an electronic signature platform that provides APIs and workflow tools for sending, signing, and managing digital documents, allowing businesses and developers to automate agreement processes, collect legally binding signatures, and track document status across applications.

One exposes BoldSign through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bold-sign` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BoldSign is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BoldSign account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Document

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Attachment | GET | `/v1/document/downloadAttachment` | `conn_mod_def::GLuudwDObQw::IfKdnClJSOyOxj4cBFcC4Q` |
| Download Audit Log Using Document | GET | `/v1/document/downloadAuditLog` | `conn_mod_def::GLuudzC_5xI::lc1QyFMmTviIi5SYEoBfCA` |
| Download Document | GET | `/v1/document/download` | `conn_mod_def::GLuudwO1RZg::mLOz88uuSCu8zkwLH0OKBQ` |
| Get Embedded Sign Link Using Document | GET | `/v1/document/getEmbeddedSignLink` | `conn_mod_def::GLuud6bJBpg::EZS1cHIdTYyoN8b4TCSJdA` |
| Cancel Editing for a Document | POST | `/v1/document/cancelEditing` | `conn_mod_def::GLuudmhJHw4::SXWsdv3SSJGaRk1vXGA-Ag` |
| Change Recipient Using Document | PATCH | `/v1/document/changeRecipient` | `conn_mod_def::GLuudmPqJhM::XLcE27AITAu-FNDYntwOmQ` |
| Create Embedded Edit URL for a Document | POST | `/v1/document/createEmbeddedEditUrl` | `conn_mod_def::GLuud6Ggw28::m_IEM8TeSGyP6KUh_kIoHg` |
| Create Embedded Request URL Using Document | POST | `/v1/document/createEmbeddedRequestUrl` | `conn_mod_def::GLuud5xf4w8::xlQxbQutQAOrmsoymU2ikg` |
| Delete Document | DELETE | `/v1/document/delete` | `conn_mod_def::GLuudwqN0-o::mAJHDhqaSqiS0KqikbNclg` |
| Draft Send Document | POST | `/v1/document/draftSend` | `conn_mod_def::GLuueLfho5Y::DldHC9rhR4m-hBgqMvvkoA` |
| Edit Document | PUT | `/v1/document/edit` | `conn_mod_def::GLuud5nnWCs::140dD7TYR2iDMncIhYuhAw` |
| Extend Expiry for a Document | PATCH | `/v1/document/extendExpiry` | `conn_mod_def::GLuud6gckME::3_xcKAsmR_CSHcHP8OUeXw` |

4 more Document actions are available through search.

### Template

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Template | GET | `/v1/template/download` | `conn_mod_def::GLuufHQGDp4::0OIyk7xeS5WW7it6Mne5Dw` |
| Create Embedded Preview URL for a Template | POST | `/v1/template/createEmbeddedPreviewUrl` | `conn_mod_def::GLuufs7OTko::E2gA66fGTgGP6nJrexod0w` |
| Create Embedded Request URL Using Template | POST | `/v1/template/createEmbeddedRequestUrl` | `conn_mod_def::GLuufs9Outs::5BnamGywTkmbB7jLWHEQ2Q` |
| Create Embedded Template URL Using BoldSign Template | POST | `/v1/template/createEmbeddedTemplateUrl` | `conn_mod_def::GLuufI8eb3Y::G5KrmN1HRuqALIzjuNSYlg` |
| Create Template | POST | `/v1/template/create` | `conn_mod_def::GLuue7J2gUs::wrjbvJDISXesZ5dkyCsjGw` |
| Delete Template | DELETE | `/v1/template/delete` | `conn_mod_def::GLuue7Lx60s::BFaUbjOiS_66xXuJ02hpOg` |
| Edit Template | PUT | `/v1/template/edit` | `conn_mod_def::GLuufkE4YHo::zxZ9kdtLRb2V2LZ4qW0yDQ` |
| Get Embedded Template Edit URL | POST | `/v1/template/getEmbeddedTemplateEditUrl` | `conn_mod_def::GLuufJR56Zw::dhUcz2goQXm2j7aAY85jhQ` |
| Merge and Send Using Template | POST | `/v1/template/mergeAndSend` | `conn_mod_def::GLuuf1hZW9g::XePkAcH6RPqmgxM2RxSvAA` |
| Merge Create Embedded Request URL Using Template | POST | `/v1/template/mergeCreateEmbeddedRequestUrl` | `conn_mod_def::GLuufJOcdwU::70wi1jNJRl6hmwzmzHtv7g` |
| Send Using Template | POST | `/v1/template/send` | `conn_mod_def::GLuuftfUzZA::fYt34BHJQ3WCVSUz3_msrQ` |
| Share a Template | PATCH | `/v1/template/share` | `conn_mod_def::GLuuf2dC064::S5YjjHRzSN2ISf4eQPwHmg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Summary | GET | `/v1/users/get` | `conn_mod_def::GLuuf_LUWxQ::fwvgqIihRUCQi5IhK3xmeA` |
| List Users | GET | `/v1/users/list` | `conn_mod_def::GLuuf-a8aQ0::krsPJSkhRxm2R1hr7fef7Q` |
| Cancel Invitation for a User | POST | `/v1/users/cancelInvitation` | `conn_mod_def::GLuuf2eSZPY::WNC-rljxTre03MOChIhN6Q` |
| Change Team for a User | PUT | `/v1/users/changeTeam` | `conn_mod_def::GLuuf2eiSQU::1TFPvjwHRx65VFo9I9hBsw` |
| Create User | POST | `/v1/users/create` | `conn_mod_def::GLuuf2GBxX4::-XtlE5xATACx0hbE2D9JiQ` |
| Resend Invitation for a User | POST | `/v1/users/resendInvitation` | `conn_mod_def::GLuuf-bq36Y::01f1aON0SneKBWQnsNxyZg` |
| Update Metadata Using Users | PUT | `/v1/users/updateMetaData` | `conn_mod_def::GLuuf950bW8::J4i0LDQRTp2TvMcDvhI5jA` |
| Update User Using Users Update | PUT | `/v1/users/update` | `conn_mod_def::GLuuf9kYfFg::B_Yu6C-xQ76s4WLseQHsBw` |

### SenderIdentities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sender Identity Properties (by ID or Email) | GET | `/v1/senderIdentities/properties` | `conn_mod_def::GLuueoV1_2U::6fDRMnfhS3-8yNELcc38EA` |
| List Sender Identities | GET | `/v1/senderIdentities/list` | `conn_mod_def::GLuueoD5h6I::xepwARo3QHaCkBBW_tyYeg` |
| Create Sender Identities | POST | `/v1/senderIdentities/create` | `conn_mod_def::GLuuelthRww::UR_4Cf0bRCWJD3b10LD2ug` |
| Delete Sender Identities | DELETE | `/v1/senderIdentities/delete` | `conn_mod_def::GLuuenXbISA::EWeULMt5RAmu4xZZeZ6sjQ` |
| Rerequest Sender Identities | POST | `/v1/senderIdentities/rerequest` | `conn_mod_def::GLuuen1RfC0::QLtV-W2vTtGWKqeHGlNvVA` |
| Resend Invitation for Sender Identities | POST | `/v1/senderIdentities/resendInvitation` | `conn_mod_def::GLuuevEK5qc::wcFfWsl6QTipstFYcVF8rQ` |
| Update Sender Identities | POST | `/v1/senderIdentities/update` | `conn_mod_def::GLuuev8w0xI::CIa2ob5aQJSUHccvcI3ptQ` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Documents | GET | `/v1/document/list` | `conn_mod_def::GLuueDIG94A::5j_Brq0zTt6zO5Z1X8Af0g` |
| Team Documents | GET | `/v1/document/teamlist` | `conn_mod_def::GLuueDvOqQQ::GmzK5yTNQy6hIxs0YxzZCQ` |
| Add Authentication to Recipient Using BoldSign Documents | PATCH | `/v1/document/addAuthentication` | `conn_mod_def::GLuueNtDkWo::tUM5coAqQYW1pqCeFHCpuA` |
| Add Tags to Documents | PATCH | `/v1/document/addTags` | `conn_mod_def::GLuudmtvSsg::7zt3ifOsSIue_n0atv9F_A` |
| Delete Tags in Documents | DELETE | `/v1/document/deleteTags` | `conn_mod_def::GLuudvUCRpY::bfCT5mx5ScSzDj3EAe6Utg` |
| Remind Document Signers | POST | `/v1/document/remind` | `conn_mod_def::GLuueNWRN7Q::M-JZmZkHQpGIdnlQ_zHM6A` |

### Brand

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Brand Details | GET | `/v1/brand/get` | `conn_mod_def::GLuudI1WqL0::PLHSzQvPSmyj0zvAurGsXg` |
| Create Brand | POST | `/v1/brand/create` | `conn_mod_def::GLuudJf0J9g::pjqOTxVQS2OMyvVo6kE8Xg` |
| Delete Brand | DELETE | `/v1/brand/delete` | `conn_mod_def::GLuudKPHI9s::q0wMcienSJ-0R6R9e-50ow` |
| Edit Brand | POST | `/v1/brand/edit` | `conn_mod_def::GLuudIvSH7M::iRQB2rd_Tom7sTDuACuY8g` |
| Reset Default Brand | POST | `/v1/brand/resetdefault` | `conn_mod_def::GLuudQ2zTmg::RI-kB-ezROqpUXPpWQX_vg` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Summary | GET | `/v1/contacts/get` | `conn_mod_def::GLuudQnW5Uc::kRBfQffDTDigQva7obpQ4Q` |
| List Contacts | GET | `/v1/contacts/list` | `conn_mod_def::GLuudUoulVE::OWsHlskBRuqU0EGQceBqmQ` |
| Create Contact Using v1 Contacts | POST | `/v1/contacts/create` | `conn_mod_def::GLuudTpx5tQ::iHrRe45KSU6qMZEAYiNJow` |
| Delete Contact | DELETE | `/v1/contacts/delete` | `conn_mod_def::GLuudXE5ifA::gN8zOCKtSvSXCdQ8XLNpLQ` |
| Update Contact | PUT | `/v1/contacts/update` | `conn_mod_def::GLuudeIaGK8::9VOT8EREQqGlPtrEvaTjqA` |

### ContactGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Summary of the Group Contact | GET | `/v1/contactGroups/get` | `conn_mod_def::GLuueXJb2jc::K-nbJiHNTK2Iok1wVSjRaw` |
| List Group Contacts | GET | `/v1/contactGroups/list` | `conn_mod_def::GLuueVA3Izg::CqDmFDpCQwyJ8SZpf6i9jA` |
| Create Group Contact | POST | `/v1/contactGroups/create` | `conn_mod_def::GLuueUnGbqQ::fKBnWy-KR7Kgmq4XJtMJSg` |
| Delete Group Contact | DELETE | `/v1/contactGroups/delete` | `conn_mod_def::GLuueX1Bq4Y::CgvHCGSmQ22Fxd5ar9c_Yw` |
| Update Group Contact | PUT | `/v1/contactGroups/update` | `conn_mod_def::GLuuefZ2w_w::uCSe55ttT9yldJ0wYRNVwA` |

### CustomField

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Custom Field | POST | `/v1/customField/create` | `conn_mod_def::GLuuddsHR0g::U-uwczKcSO2e5WuIP82wDA` |
| Create Embedded Custom Field URL | POST | `/v1/customField/createEmbeddedCustomFieldUrl` | `conn_mod_def::GLuudfJNMrY::JXV02OdGTAaZdz2TOsJVUg` |
| Delete Custom Field | DELETE | `/v1/customField/delete` | `conn_mod_def::GLuudfxHZKQ::Y93Iw2VcSwmV0asnspQdxQ` |
| Edit Custom Field | POST | `/v1/customField/edit` | `conn_mod_def::GLuudf6WG-A::PZ2rqjnUTXiOwhwl-WqKBw` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Details | GET | `/v1/teams/get` | `conn_mod_def::GLuuevQX2JA::4em88aCJTFuk2UgoocwcSg` |
| List Teams | GET | `/v1/teams/list` | `conn_mod_def::GLuue0geYPY::cn2479--RTuREXskDriHEA` |
| Create Team | POST | `/v1/teams/create` | `conn_mod_def::GLuuevYb6bs::gmxTITC0TT-e_hNoC9bwOA` |
| Update Team | PUT | `/v1/teams/update` | `conn_mod_def::GLuue5_eZws::e0J83DFcSW2VIc4VsXMc-A` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Templates | GET | `/v1/template/list` | `conn_mod_def::GLuufvGMGm8::EtRgoZZqQNipV0aidc5-SQ` |
| Add Tags to Templates | PATCH | `/v1/template/addTags` | `conn_mod_def::GLuufAGpdYk::VBstTD-6SwmtNxvkefooRA` |

### Brands

| Action | Method | Path | Action id |
|---|---|---|---|
| List Brands | GET | `/v1/brand/list` | `conn_mod_def::GLuudIdriA8::65lsQEJbTyS7tVxmZ9fibQ` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Fields | GET | `/v1/customField/list` | `conn_mod_def::GLuudmTl7Bk::Vi5SPdy5TnKqlRlt1GEX7Q` |

### DocumentSignerAccessCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Change Access Code for a Document Signer | PATCH | `/v1/document/changeAccessCode` | `conn_mod_def::GLuudn9Juu4::FZokd4RHQ0SUUadCQcDF-A` |

### DocumentProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Document Properties | GET | `/v1/document/properties` | `conn_mod_def::GLuueBnRHIA::iAQ7C2tnQ16Z08uU7em7qQ` |

### BehalfDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Behalf Documents | GET | `/v1/document/behalfList` | `conn_mod_def::GLuueD01SxU::1UZQ7vB9SvGH-oE8hEVpew` |

### IdentityVerificationImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Image Using Identity Verification | POST | `/v1/identityVerification/image` | `conn_mod_def::GLuuefMk2SI::gy9ianE5RIiWoByDSk1CXw` |

### ApiCreditsDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Credits Details | GET | `/v1/plan/apiCreditsCount` | `conn_mod_def::GLuuefPC1bw::3p63vZ9USh2U6wbSS67-bA` |

### IdentityVerificationReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Report Using Identity Verification | POST | `/v1/identityVerification/report` | `conn_mod_def::GLuuefoHbmw::TE7SQyigSeWFIJ2irUHt9A` |

### IdentityVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Embedded Verification Url Using Identity Verification | POST | `/v1/identityVerification/createEmbeddedVerificationUrl` | `conn_mod_def::GLuuef0rOQM::QvQT5hSrS7-gZfXoCcSReQ` |

### TemplateTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Tags Using Template | DELETE | `/v1/template/deleteTags` | `conn_mod_def::GLuue7k-pP4::JqpsS4GdRD2H5JWVJ3f8zQ` |

### TemplateProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Template Properties | GET | `/v1/template/properties` | `conn_mod_def::GLuuftD08iA::5JNEbW91S8aijSJlB4fFDw` |

This lists 81 of 85 actions. For anything not here, call `search_one_platform_actions` with platform `bold-sign`. The full catalog is at https://www.withone.ai/knowledge/bold-sign.

## When a call fails

The error comes from BoldSign, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bold-sign

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
