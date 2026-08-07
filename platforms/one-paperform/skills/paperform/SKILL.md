---
name: paperform
description: Paperform is an online form builder that enables businesses to create forms, surveys, quizzes, scheduling and payment forms, automate workflows, and send documents for signing, allowing teams to collect information, accept payments, and streamline processes from one platform. Read and write Paperform data through One: papersigndocuments, forms, webhooks, translations, partialsubmissions, formproducts and more, 61 actions with real parameter documentation. Use whenever the user asks to look something up in Paperform, create or update a record there, or build code against the Paperform API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: paperform
  generated-from: one-knowledge-base
---

# Paperform through One

Paperform is an online form builder that enables businesses to create forms, surveys, quizzes, scheduling and payment forms, automate workflows, and send documents for signing, allowing teams to collect information, accept payments, and streamline processes from one platform.

One exposes Paperform through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `paperform` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Paperform is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Paperform account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### PapersignDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Completed Papersign Document PDF | GET | `/v1/papersign/documents/{{id}}/download` | `conn_mod_def::GML_EeO4ZGg::0nl2DCfOSq6ny4x9e18NeA` |
| Get a Papersign Document by ID | GET | `/v1/papersign/documents/{{id}}` | `conn_mod_def::GML_EWfcbiA::YibmtpK2QHyJwkP4TCkOuQ` |
| Get a Papersign Document's Completed Document URL | GET | `/v1/papersign/documents/{{id}}/completed-document-url` | `conn_mod_def::GML_EgPKFBg::eoVOptLASDmUqptAQVuA0g` |
| List Papersign Documents | GET | `/v1/papersign/documents` | `conn_mod_def::GML_EWZHLAg::zi5MY4ozRRacJIWLS8bIRg` |
| Cancel a Papersign Document | PUT | `/v1/papersign/documents/{{id}}/cancel` | `conn_mod_def::GML_EV129jA::haSAv6XqRxmBvOz3z-eokg` |
| Copy a Papersign Document | POST | `/v1/papersign/documents/{{id}}/copy` | `conn_mod_def::GML_EemBB2A::UDmrSYuSRTSItocvHyptjQ` |
| Create Draft Using Papersign Documents | POST | `/v1/papersign/documents/{{id}}/create-draft` | `conn_mod_def::GML_EfzWkWg::z4MRFDspTrGMgU6Gq1gUFg` |
| Move a Papersign Document | POST | `/v1/papersign/documents/{{id}}/move` | `conn_mod_def::GML_EeR82WA::cNG2g_UcTb-VXcmBLl1zlA` |
| Send a Papersign Document | POST | `/v1/papersign/documents/{{id}}/send` | `conn_mod_def::GML_EmeHklA::DL_hkMCYSyCiWcD7gvGlzQ` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form by Slug or ID | GET | `/v1/forms/{{slugOrId}}` | `conn_mod_def::GML_EVmVVwA::6bz3lqh9SJGzMzpn8ybLJw` |
| List Forms | GET | `/v1/forms` | `conn_mod_def::GML_EOie1kg::B8CXicOfSiictTdC3-l_GQ` |
| Update a Field for a Form | PUT | `/v1/forms/{{slugOrId}}/fields/{{fieldKey}}` | `conn_mod_def::GML_EOs-SOg::IA5yx_tJT2ql6IsTMatwPg` |
| Update a Form by Slug or ID | PUT | `/v1/forms/{{slugOrId}}` | `conn_mod_def::GML_EW69GJg::6olgPCKbSzuB8D9mBeTLSQ` |
| Update Product Quantity for a Form | PUT | `/v1/forms/{{slugOrId}}/products/{{productSku}}/quantity` | `conn_mod_def::GML_FOn2IGA::3TunWJypTuCJwwGjjjvxCg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook by ID | GET | `/v1/webhooks/{{id}}` | `conn_mod_def::GML_FwwVowg::4FPse3eJTk6b3noxM8MBMA` |
| List a Form's Webhooks | GET | `/v1/forms/{{slugOrId}}/webhooks` | `conn_mod_def::GML_FwgLfNg::CxQCLtJ4RXy7TUgE4i60OA` |
| Create a Webhook for a Form | POST | `/v1/forms/{{slugOrId}}/webhooks` | `conn_mod_def::GML_FvYGyUg::YdPLH70aQXmHaDSCQfTQqQ` |
| Delete a Webhook by ID | DELETE | `/v1/webhooks/{{id}}` | `conn_mod_def::GML_F_E4X8A::gELboIIkRJ68XD7jRjEgWA` |
| Update a Webhook | PUT | `/v1/webhooks/{{id}}` | `conn_mod_def::GML_F4klL4A::SkoDqBYrQDCQOstPZf-ewg` |

### Translations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Translation by ID | GET | `/v1/translations/{{id}}` | `conn_mod_def::GML_Fm09UKA::13zSFBLATYWjeY7HPGKF4A` |
| List Translations | GET | `/v1/translations` | `conn_mod_def::GML_Fofrpwg::wO-06dvxST6CgrgeiRXnPw` |
| Create a Translation | POST | `/v1/translations` | `conn_mod_def::GML_FnMmQSA::YMb0G6ThStSYemI0K77M8A` |
| Delete a Translation by ID | DELETE | `/v1/translations/{{id}}` | `conn_mod_def::GML_Fw5LPAA::heEAXSxiQ2GQk2KhSG-pRQ` |
| Update a Translation by ID | PUT | `/v1/translations/{{id}}` | `conn_mod_def::GML_FntqxUA::oyD4_ySVQYu4wR1OP5d84g` |

### PartialSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form Partial Submission by ID | GET | `/v1/forms/{{slugOrId}}/partial-submissions/{{id}}` | `conn_mod_def::GML_FGejOgg::A-2RsKeESSGrYTkUFW218Q` |
| Get a Partial Submission by ID | GET | `/v1/partial-submissions/{{id}}` | `conn_mod_def::GML_FGgrShA::usPkSUW2QAyaDp28nlchXg` |
| List Partial Submissions for a Form | GET | `/v1/forms/{{slugOrId}}/partial-submissions` | `conn_mod_def::GML_EwiUovA::8owStFLxQVuANCQ9kqbwEA` |
| Delete a Partial Submission by ID | DELETE | `/v1/partial-submissions/{{id}}` | `conn_mod_def::GML_FGagWJg::txK-5FDpTw2HWbWdt3gFww` |

### FormProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form Product by SKU | GET | `/v1/forms/{{slugOrId}}/products/{{productSku}}` | `conn_mod_def::GML_FOPXvEg::LCWJkYYvR6KE4mmc9PJsjg` |
| Delete a Form Product by SKU | DELETE | `/v1/forms/{{slugOrId}}/products/{{productSku}}` | `conn_mod_def::GML_FPwrWdA::i8DjJZlGS6-qwIrdvAl-Aw` |
| Update a Form Product by SKU | PUT | `/v1/forms/{{slugOrId}}/products/{{productSku}}` | `conn_mod_def::GML_FPJkmrA::QhOTUHfeQFK7u5ld5G5-Yg` |
| Update a Form Product's Sold Amount | PUT | `/v1/forms/{{slugOrId}}/products/{{productSku}}/sold` | `conn_mod_def::GML_FW4j-Kg::ZsPcKWwxQx-tv4FnF2FE6w` |

### Spaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Space by ID | GET | `/v1/spaces/{{id}}` | `conn_mod_def::GML_FWloh8A::GIM4dNOXTJSN03rtikJ0pA` |
| List Spaces | GET | `/v1/spaces` | `conn_mod_def::GML_FXODhUg::qrOkKrHOQjC-EPwFvVDBhg` |
| Create a Space | POST | `/v1/spaces` | `conn_mod_def::GML_FVm5l4g::LXyQNkxjTX-oL3LfbUYtww` |
| Update a Space by ID | PUT | `/v1/spaces/{{id}}` | `conn_mod_def::GML_FV8n1eA::rx7RG6P4TQGvOrcM4-_raw` |

### PapersignWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Webhook for a Papersign Folder | POST | `/v1/papersign/folders/{{id}}/webhooks` | `conn_mod_def::GML_EuhubVg::XsDsnGpaS06rFOyYCIiZuQ` |
| Delete a Papersign Webhook | DELETE | `/v1/papersign/webhooks/{{id}}` | `conn_mod_def::GML_EvL9M4A::x7614G0fTUGCDemGrEfPKw` |
| Update a Papersign Webhook | PUT | `/v1/papersign/webhooks/{{id}}` | `conn_mod_def::GML_EuYxG9A::cUPKQeI4Sd-NXPtxQOSFKA` |

### Submissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Submission by ID | GET | `/v1/submissions/{{id}}` | `conn_mod_def::GML_FdciTDg::W1A0acp6S32RKjKv1Toa4g` |
| List a Form's Submissions | GET | `/v1/forms/{{slugOrId}}/submissions` | `conn_mod_def::GML_Fgmsnyg::bkXxuzAVRO6zpUXGDPwNig` |
| Delete a Submission by ID | DELETE | `/v1/submissions/{{id}}` | `conn_mod_def::GML_FnmUwQg::HP4KI6H-SA-GSdioAz6FaQ` |

### PapersignFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Papersign Folders | GET | `/v1/papersign/folders` | `conn_mod_def::GML_EmyBxaA::M3EcXwe6R7yCa8QKkN1qQg` |
| Create a Papersign Folder | POST | `/v1/papersign/folders` | `conn_mod_def::GML_EmStnyA::HHcRlZtFRLe9ylEYY7tcug` |

### FormCoupons

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Form Coupon by Code | DELETE | `/v1/forms/{{slugOrId}}/coupons/{{code}}` | `conn_mod_def::GML_DQ_KfSA::fcld20RpT6u1NJKaJhQXtg` |
| Update a Form Coupon by Code | PUT | `/v1/forms/{{slugOrId}}/coupons/{{code}}` | `conn_mod_def::GML_DSs0_2g::HW2hXtWoTS2m7i4oK4zQ0A` |

### Coupons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form Coupon by Code | GET | `/v1/forms/{{slugOrId}}/coupons/{{code}}` | `conn_mod_def::GML_EGuOfrA::EToHUbLrRVCtWL5y3OE07A` |
| Create a Coupon for a Form | POST | `/v1/forms/{{slugOrId}}/coupons` | `conn_mod_def::GML_DQ_h7SA::KroCHFWrTeeMy0ken3GtpQ` |

### FormFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form Field | GET | `/v1/forms/{{slugOrId}}/fields/{{fieldKey}}` | `conn_mod_def::GML_ENo46KA::oFeCZ1z0Rryu2wDWMame-Q` |
| List a Form's Fields | GET | `/v1/forms/{{slugOrId}}/fields` | `conn_mod_def::GML_ENosRkA::Y6Ufiza2SkOUgDVBq7Gyvg` |

### FormSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form Submission by ID | GET | `/v1/forms/{{slugOrId}}/submissions/{{id}}` | `conn_mod_def::GML_FgQShkA::se4RwdJ8Sv-pIH_8W28zNg` |
| Delete a Form Submission | DELETE | `/v1/forms/{{slugOrId}}/submissions/{{id}}` | `conn_mod_def::GML_Fd1BBkA::Jt9JwV31Q4-tX9pjifFVcw` |

### FormsCoupons

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Form's Coupons | GET | `/v1/forms/{{slugOrId}}/coupons` | `conn_mod_def::GML_DPoKBcg::3qtq8iKARvG2NZPdddfCEg` |

### PapersignDocumentParticipantSigningLink

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Signing Link for a Papersign Document Participant | POST | `/v1/papersign/documents/{{id}}/participants/{{participantKey}}/link` | `conn_mod_def::GML_EnnyXpg::O4JGD7uCTk6rHooLzsVQUw` |

### PapersignFolderWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks for a Papersign Folder | GET | `/v1/papersign/folders/{{id}}/webhooks` | `conn_mod_def::GML_FAFWZjA::utFiTkHuTJqu0dwgRT-fWw` |

### FormPartialSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Form Partial Submission | DELETE | `/v1/forms/{{slugOrId}}/partial-submissions/{{id}}` | `conn_mod_def::GML_FHGMPpg::1rdXkUc_SyuXvw-RU2umgQ` |

### FormsProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Form's Products | GET | `/v1/forms/{{slugOrId}}/products` | `conn_mod_def::GML_FHYJsGg::_zY1j7q0RHqzIDbXKdJJRw` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Product for a Form | POST | `/v1/forms/{{slugOrId}}/products` | `conn_mod_def::GML_FOvUK0g::QLvDoZNkR6SF9R030TI5ZQ` |

### PapersignSpaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List Papersign Spaces | GET | `/v1/papersign/spaces` | `conn_mod_def::GML_EmjO9tA::X74gh8rhSCa8sWrp0C9utQ` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Get File URLs | POST | `/v1/files` | `conn_mod_def::GML_EN8nDgA::u_T0slpnR7q6er8-AfP70Q` |

### SpacesForms

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Space's Forms | GET | `/v1/spaces/{{id}}/forms` | `conn_mod_def::GML_FejRACg::PX9ajx6SRqCcCDtUuRviDQ` |

## When a call fails

The error comes from Paperform, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/paperform

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
