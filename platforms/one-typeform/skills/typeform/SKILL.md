---
name: typeform
description: Typeform is a cloud-based form builder that enables users to create interactive, conversational forms, surveys, and quizzes designed to enhance user engagement and improve response rates. Read and write Typeform data through One: workspaces, forms, images, themes, formtranslations, formwebhooks and more, 47 actions with real parameter documentation. Use whenever the user asks to look something up in Typeform, create or update a record there, or build code against the Typeform API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: typeform
  generated-from: one-knowledge-base
---

# Typeform through One

Typeform is a cloud-based form builder that enables users to create interactive, conversational forms, surveys, and quizzes designed to enhance user engagement and improve response rates.

One exposes Typeform through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `typeform` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Typeform is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Typeform account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Workspaces | GET | `/accounts/{{accountId}}/workspaces` | `conn_mod_def::GJ8R7D_NZ8U::ZD1tneZCTCijdjqBex4akQ` |
| List Workspaces | GET | `/workspaces` | `conn_mod_def::GJ8R7LCJpu0::GC2yW-eIS1K9WQ-ZZ47R6g` |
| Retrieve a Workspace | GET | `/workspaces/{{workspaceId}}` | `conn_mod_def::GJ8R7DBsi3c::G9VFx6x8SReud4wTHBZWtA` |
| Create a Workspace | POST | `/workspaces` | `conn_mod_def::GJ8R7CxRz_o::_s6Ah-OxTrGmIGKlDFZV3w` |
| Create an Account Workspace | POST | `/accounts/{{accountId}}/workspaces` | `conn_mod_def::GJ8R7DNQXVo::H6PvqGzFRj2ksKX2cdOMsg` |
| Delete a Workspace | DELETE | `/workspaces/{{workspaceId}}` | `conn_mod_def::GJ8R7C7ybmY::nRhqvJj0SWOzJmzbk5yQtA` |
| Update a Workspace | PATCH | `/workspaces/{{workspaceId}}` | `conn_mod_def::GJ8R7LHm93o::eaTLlroKR2aFai_i7JWcSg` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Form | GET | `/forms/{{formId}}` | `conn_mod_def::GJ8R56VPQiM::taWnDSs5S6-xoELWJ7Rh-Q` |
| Retrieve Forms | GET | `/forms` | `conn_mod_def::GJ8R50dIJHE::Y6NrKjnfQG6c3ykzyE2Puw` |
| Create a Form | POST | `/forms` | `conn_mod_def::GJ8R5yQxrvE::eM23_TWPSeWD9UEqEseYGA` |
| Delete a Form | DELETE | `/forms/{{formId}}` | `conn_mod_def::GJ8R5wVqVbc::DtdkQRWZT2-NBpQKf_CU7Q` |
| Update a Form | PATCH | `/forms/{{formId}}` | `conn_mod_def::GJ8R6DqWRKY::DF0Cd3IIRyaJzNQjwDRY0A` |
| Update a Form | PUT | `/forms/{{formId}}` | `conn_mod_def::GJ8R6CaBx0s::cchpesUCS0i1SlUpSlnr8g` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| List Images | GET | `/images` | `conn_mod_def::GJ8R6NTMQqY::JSvAHAa5ReKxoTCQR23OSg` |
| Retrieve an Image (Original Binary or JSON Metadata) | GET | `/images/{{imageId}}` | `conn_mod_def::GJ8R6PQX1iE::wBXrmgdrQ0SBbaJrQJwwSw` |
| Retrieve an Image Background by Size | GET | `/images/{{imageId}}/background/{{size}}` | `conn_mod_def::GJ8R6M6jEEc::KH5DeNcIQfaQ5tj9QF843w` |
| Retrieve an Image by ID and Size | GET | `/images/{{imageId}}/image/{{size}}` | `conn_mod_def::GJ8R6R7n7MM::NLcc6tosR8CjqxQeEbI0Lg` |
| Create an Image in a Typeform Account | POST | `/images` | `conn_mod_def::GJ8R6AuAMDs::iR4PS2NTQhS0FBti9Bhihw` |
| Delete an Image | DELETE | `/images/{{imageId}}` | `conn_mod_def::GJ8R6GYjjcQ::p8QnUHzrTomEhbewU2z7FQ` |

### Themes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Themes | GET | `/themes` | `conn_mod_def::GJ8R6sU6klQ::_imppFybRiqhSgH1QVk5tg` |
| Retrieve a Theme | GET | `/themes/{{themeId}}` | `conn_mod_def::GJ8R6fec3FY::nxWqPQJCRkSzdLAzvTZ9Xg` |
| Create a Theme | POST | `/themes` | `conn_mod_def::GJ8R6fnqyGM::68eCbLWzTqSI0ET2-qLKAA` |
| Delete a Theme | DELETE | `/themes/{{themeId}}` | `conn_mod_def::GJ8R6fRWlrY::bh-pHLMWSBqA6MYqbIe2ug` |
| Update a Theme (Full Definition) | PUT | `/themes/{{themeId}}` | `conn_mod_def::GJ8R6tCA7g0::EbNdCbiMRLqy3ZWlHYja7g` |
| Update a Theme (Partial Update) | PATCH | `/themes/{{themeId}}` | `conn_mod_def::GJ8R6sH7zOA::aFahB8EyTCqATdxLasV6aw` |

### FormTranslations

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Form Translation | GET | `/forms/{{formId}}/translations/{{language}}` | `conn_mod_def::GJ8R6034cl8::J5v6f7DbTYmdTGhqFEA4VQ` |
| Retrieve a Form’s Main-Language Translation Payload | GET | `/forms/{{formId}}/translations/main` | `conn_mod_def::GJ8R6z1kBDk::o1mYE3whRemAaGs64-uoGg` |
| Retrieve a Form’s Translation Statuses | GET | `/forms/{{formId}}/translations/status` | `conn_mod_def::GJ8R60vvlEs::OuyADaT4TgaynjCCYVy9MA` |
| Auto-translate a Form’s Translation (by Form ID and Language) | POST | `/forms/{{formId}}/translations/{{language}}/auto` | `conn_mod_def::GJ8R6swy8sQ::g6dbw2-MSJe4wo4f3aBbhQ` |
| Delete a Form Translation | DELETE | `/forms/{{formId}}/translations/{{language}}` | `conn_mod_def::GJ8R6sTbdkw::ZOktWQhRTgqvGKmLfnHbEg` |
| Update a Form Translation | PUT | `/forms/{{formId}}/translations/{{language}}` | `conn_mod_def::GJ8R61KYtP0::HoksehB_QQ65DYkOS66oiw` |

### FormWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Form Webhook by Tag | GET | `/forms/{{formId}}/webhooks/{{tag}}` | `conn_mod_def::GJ8R67yC9cY::_xxDy6NKTQC07lrTI7DEWA` |
| Create or Update a Form Webhook | PUT | `/forms/{{formId}}/webhooks/{{tag}}` | `conn_mod_def::GJ8R67w25_M::8OutPDQpT9a3_rQwO1tVcg` |
| Delete a Form Webhook | DELETE | `/forms/{{formId}}/webhooks/{{tag}}` | `conn_mod_def::GJ8R677UjIU::yPUaD-L5RGS23PAM8Bo7Xg` |

### FormMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Form’s Custom Messages | GET | `/forms/{{formId}}/messages` | `conn_mod_def::GJ8R5z4IADU::-Ai-VC3XQgGzfyV2YOhjLQ` |
| Update a Form’s Custom Messages | PUT | `/forms/{{formId}}/messages` | `conn_mod_def::GJ8R6DpEFHY::xNpoGpr_TWCznvUoipxZBg` |

### MediaVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Video Upload | POST | `/media/videos` | `conn_mod_def::GJ8R6YZ8714::D1I1nL82RMqNEtAMOmrV7Q` |
| Generate a Video’s Master File | POST | `/media/videos/{{id}}/master` | `conn_mod_def::GJ8R6ZDNexM::3B22xWI9RH2RYtTElzezLg` |

### FormResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Form’s Responses | GET | `/forms/{{formId}}/responses` | `conn_mod_def::GJ8R6krxCqM::ydOOcXVKQxyVdCWVtk7FcA` |
| Delete a Form’s Responses | DELETE | `/forms/{{formId}}/responses` | `conn_mod_def::GJ8R6gGoWuQ::QhF_qeo0Th-IFtetfpKuWA` |

### ChoiceImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Choice Image by Size | GET | `/images/{{imageId}}/choice/{{size}}` | `conn_mod_def::GJ8R6NT-dLU::_OfJ7Ev2TM6JtuH9ttJsgQ` |

### MediaAudios

| Action | Method | Path | Action id |
|---|---|---|---|
| Request Audio Master File Generation | POST | `/media/audios/{{id}}/master` | `conn_mod_def::GJ8R6YeMG1U::qW8c_YxpQPyRQHOOcCU8WA` |

### MediaVideosMaster

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Video’s Master File Status (Download URL) | GET | `/media/videos/{{id}}/master` | `conn_mod_def::GJ8R6ZBsk08::qxBfvrWXToSeCeU8t4f85Q` |

### FormResponseFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Form’s Uploaded Response Files (ZIP) | GET | `/forms/{{formId}}/responses/files` | `conn_mod_def::GJ8R60pkFlY::2cNSHPvDSpW9xs3NGjRkRQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Form’s Webhooks | GET | `/forms/{{formId}}/webhooks` | `conn_mod_def::GJ8R68NoUPk::MyQ-iXk7S-u_9dYBG8nuYw` |

### TypeformResponseFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Uploaded File from a Typeform Response | GET | `/forms/{{formId}}/responses/{{responseId}}/fields/{{fieldId}}/files/{{filename}}` | `conn_mod_def::GJ8R68fl_cI::PhTibOM-TSqfHwzrqGc9PA` |

### AudioMasterFileStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audio’s Master File Status (Download URL) | GET | `/media/audios/{{id}}/master` | `conn_mod_def::GJ8R6ZSv6mk::aOZRfi8kQGyKlhuNMweE_Q` |

## When a call fails

The error comes from Typeform, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/typeform

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
