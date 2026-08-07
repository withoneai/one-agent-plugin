---
name: jotform
description: Jotform is an online form builder that enables teams to create forms and surveys, collect submissions and payments, and automate workflows through templates, reports, e-signatures, and integrations with CRM, storage, email, and productivity tools. Read and write Jotform data through One: forms, labels, folder, formproperties, formquestions, submissions and more, 56 actions with real parameter documentation. Use whenever the user asks to look something up in Jotform, create or update a record there, or build code against the Jotform API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: jotform
  generated-from: one-knowledge-base
---

# Jotform through One

Jotform is an online form builder that enables teams to create forms and surveys, collect submissions and payments, and automate workflows through templates, reports, e-signatures, and integrations with CRM, storage, email, and productivity tools.

One exposes Jotform through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `jotform` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Jotform is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Jotform account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Clone a Form | POST | `/form/{{id}}/clone` | `conn_mod_def::GMK3XkVSHJc::Ff3VfxDsTXyzF4V6meY-kw` |
| Create a Form | POST | `/form` | `conn_mod_def::GMK3XkxMVlw::xZXNNn1pT6-w305dXpEX6w` |
| Create a Form for the User | POST | `/user/forms` | `conn_mod_def::GMK3YTRUF3w::FWIRjbnCRO6jt2joSu9Gyg` |
| Create New Forms | PUT | `/form` | `conn_mod_def::GMK3Xk74tjo::QsMq57rhR023LdcsnP_FKg` |
| Create New Forms for the User | PUT | `/user/forms` | `conn_mod_def::GMK3YTX_NEI::dCjJ5srYTmqnh9ZhtzV91A` |
| Delete a Form | DELETE | `/form/{{id}}` | `conn_mod_def::GMK3XrnO65s::3OAZi_kBRwS0y_TTz7oS8Q` |
| Edit Properties for a Form | PUT | `/form/{{id}}/properties` | `conn_mod_def::GMK3XlDJQuI::8udtTvp8RNOdWXjr9QvxUA` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Label Details for a User | GET | `/user/labels` | `conn_mod_def::GMK3YUUd5ms::jao0R-X7SkuZQm7qhDdUIQ` |
| Add Resources to a Label | PUT | `/label/{{id}}/add-resources` | `conn_mod_def::GMK3X6HZkIE::jkqStFfnQ7OYy5mzW2shjA` |
| Delete Label | DELETE | `/label/{{id}}` | `conn_mod_def::GMK3YB-w4Rk::Q5yi7WsUTBKONAtN77kKqQ` |
| Update a Label | PUT | `/label/{{id}}` | `conn_mod_def::GMK3YCtCClc::vqomRPwbSSOimaO2CjwYxw` |

### Folder

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Folder Details | GET | `/folder/{{id}}` | `conn_mod_def::GMK3W1hrsxU::fASlBC0cSLyvKQs8qnWYFw` |
| Create Folder | POST | `/folder` | `conn_mod_def::GMK3WzK4h1c::e9Bx9ABvSxqABWO-aWvDbA` |
| Delete a Folder | DELETE | `/folder/{{id}}` | `conn_mod_def::GMK3XFEmJr4::rSbruAhxTLaWk49VGmE5HQ` |

### FormProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form Property | GET | `/form/{{id}}/properties/{{key}}` | `conn_mod_def::GMK3XsdwSMs::Q1bHezUoQgSOO54T2xdTVg` |
| Get a Form's Properties | GET | `/form/{{id}}/properties` | `conn_mod_def::GMK3Xy1Wx_M::_JpjTbUeT52MVPcO-DiISQ` |
| Add or Edit Properties for a Form | POST | `/form/{{id}}/properties` | `conn_mod_def::GMK3XNkFn0o::tBw-0sKASOC8zzdbjbn3UQ` |

### FormQuestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Form Questions | GET | `/form/{{id}}/questions` | `conn_mod_def::GMK3XyN6yMI::l4lu41akQ1mITD9YZ5ZQMw` |
| Add Questions to a Form | PUT | `/form/{{id}}/questions` | `conn_mod_def::GMK3XN5uqyw::w1BAHYjQQ_2KpoMBMfdqfA` |
| Delete a Form Question | DELETE | `/form/{{id}}/question/{{qid}}` | `conn_mod_def::GMK3XrwwP5I::gJn8nwOATxKvkQLtrG_jCQ` |

### Submissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Submissions | GET | `/user/submissions` | `conn_mod_def::GMK3Yg3_YMY::s_qSyPj7TpmJQWRz3YKrVQ` |
| List a Form's Submissions | GET | `/form/{{id}}/submissions` | `conn_mod_def::GMK3X6XFOtM::KEw982viScSsg48YVU58Aw` |
| Add Submissions to a Form | PUT | `/form/{{id}}/submissions` | `conn_mod_def::GMK3XkrBTNA::CdzobLuvQGOPL-tNoUHbSw` |

### Label

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Label Details | GET | `/label/{{id}}` | `conn_mod_def::GMK3YCcwt7s::IApAlJBZQOaTTaUAGASFVg` |
| Create Label | POST | `/label` | `conn_mod_def::GMK3X5r0DbM::jChjNa0jSO-SJCbpePGSkQ` |
| Remove Resources from a Label | PUT | `/label/{{id}}/remove-resources` | `conn_mod_def::GMK3YClLiSo::NvlTM2tRSqGY-Xqtn2vM8Q` |

### Submission

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Submission Data | GET | `/submission/{{id}}` | `conn_mod_def::GMK3YK-h9us::KxbxIEHNS_qTHOiQH6VOrA` |
| Delete Submission Data | DELETE | `/submission/{{id}}` | `conn_mod_def::GMK3YLfSQ9U::O9TS_DVSR3SB1cTDx1RmKQ` |
| Edit Submission Data | POST | `/submission/{{id}}` | `conn_mod_def::GMK3YLX5Bzs::sBIf0fp1T6qc0VO_9tgCeg` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Information | GET | `/user` | `conn_mod_def::GMK3YZ8gR2o::vp9lASX-SHW_iOvCph4lpA` |
| Logout User | GET | `/v1/user/logout` | `conn_mod_def::GMK3Yg-bAas::zLtcGia8Q5mvKRoYtFlq2g` |
| Login User | POST | `/user/login` | `conn_mod_def::GMK3Yg45mY0::OR03i5TBQaGGRgF34rrzQw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks for a Form | GET | `/form/{{id}}/webhooks` | `conn_mod_def::GMK3X6SM--I::gAfdi9eYTpKqttrnn1R8Sw` |
| Add a New Webhook for a Form | POST | `/form/{{id}}/webhooks` | `conn_mod_def::GMK3WztU5hI::4dw3bn0-Rp-am1hzjpUEsg` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Reports for a Form | GET | `/form/{{id}}/reports` | `conn_mod_def::GMK3XysSKng::2f24NrxvT9Gkw-UVeyRIEQ` |
| Create Report for a Form | POST | `/form/{{id}}/reports` | `conn_mod_def::GMK3XrXP32o::VCHh0kFZQImPBoc-AeoUiA` |

### Report

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Report Details | GET | `/report/{{id}}` | `conn_mod_def::GMK3YLNRzj4::b55ertXCRjOBzOlbjBdwqQ` |
| Delete a Report | DELETE | `/report/{{id}}` | `conn_mod_def::GMK3YLDqVaM::oznmkY1ATpuQs1MtXyzq5g` |

### UserSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Settings | GET | `/user/settings` | `conn_mod_def::GMK3Ygkb0r4::36gv5rV_TJG5rJQ2D5v0Cw` |
| Update the Signed-in User's Settings | POST | `/user/settings` | `conn_mod_def::GMK3YpJ03Qs::JYbZe-hnQsSp65synOOMDw` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Folder | PUT | `/folder/{{id}}` | `conn_mod_def::GMK3W1cQWwk::aAc2EdiAQR632Sx_D_EB5w` |

### Questions

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Question to a Form | POST | `/form/{{id}}/questions` | `conn_mod_def::GMK3XNUBWhY::QTLMRVQPS2Kw326C6e83VA` |

### FormQuestionProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Add or Edit a Single Question Property for a Form | POST | `/form/{{id}}/question/{{qid}}` | `conn_mod_def::GMK3XOo2sZ0::RJuV5XURT623Tjv6-bC0Hg` |

### FormSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Submission to a Form | POST | `/form/{{id}}/submissions` | `conn_mod_def::GMK3XeHvlg4::75ehxUs1RjSqyy_657OLow` |

### FormWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Form Webhook | DELETE | `/form/{{id}}/webhooks/{{whid}}` | `conn_mod_def::GMK3XrsE_jw::bHJ5GJ6fS6qISAgqfwsddQ` |

### Form

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Form Details | GET | `/form/{{id}}` | `conn_mod_def::GMK3XyG2HwU::QdZ5bvlaQhy0A8N5bPEqMg` |

### FormQuestion

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Details About a Form Question | GET | `/form/{{id}}/question/{{qid}}` | `conn_mod_def::GMK3Xzx5cdk::juF9D85yTtCRMROOqmtPZw` |

### FormUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Form Uploads | GET | `/form/{{id}}/files` | `conn_mod_def::GMK3X54Gw70::tXpOaqtVQMq8g2-j1gFe1Q` |

### LabelResources

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Label's Resources | GET | `/label/{{id}}/resources` | `conn_mod_def::GMK3YDKyTiY::NFNff1A_TLmjmkmiDKggIA` |

### UserHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User History | GET | `/user/history` | `conn_mod_def::GMK3YTFDp18::VBBdWrklTGK8dSn86VRVBA` |

### SystemPlan

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Details of a System Plan | GET | `/system/plan/{{planName}}` | `conn_mod_def::GMK3YTWWxBc::JsKJDddGTmy5QyHkgHOZaw` |

### UserForms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Forms | GET | `/user/forms` | `conn_mod_def::GMK3YZ0afg0::g-GiiW6TTh6lv4to8oRE1A` |

### UserFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Folders | GET | `/user/folders` | `conn_mod_def::GMK3YaUli3w::0CyaDHejREasKKZA7z2oVQ` |

### SubUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sub-User Accounts for the User | GET | `/user/subusers` | `conn_mod_def::GMK3YabMbHA::k-HW2hgmQ-Cj23u9ruYwHg` |

### UserUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Monthly User Usage | GET | `/user/usage` | `conn_mod_def::GMK3YazAm8A::oqvsvOD5SlKEdkhy6YYxHQ` |

### UserReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Reports | GET | `/user/reports` | `conn_mod_def::GMK3YgqbopM::3XzJRc6kSK-5lB2UBS6vEA` |

## When a call fails

The error comes from Jotform, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/jotform

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
