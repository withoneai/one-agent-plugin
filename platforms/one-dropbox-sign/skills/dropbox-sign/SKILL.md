---
name: dropbox-sign
description: Dropbox Sign is an eSignature and document workflow platform that enables users to send, sign, and manage legally binding documents online with templates, automated workflows, and integrations for streamlined business processes. Read and write Dropbox Sign data through One: signaturerequest, templates, team, faxline, apiapp, account and more, 73 actions with real parameter documentation. Use whenever the user asks to look something up in Dropbox Sign, create or update a record there, or build code against the Dropbox Sign API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: dropbox-sign
  generated-from: one-knowledge-base
---

# Dropbox Sign through One

Dropbox Sign is an eSignature and document workflow platform that enables users to send, sign, and manage legally binding documents online with templates, automated workflows, and integrations for streamlined business processes.

One exposes Dropbox Sign through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `dropbox-sign` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Dropbox Sign is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Dropbox Sign account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SignatureRequest

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Signature Request | GET | `/v3/signature_request/{{signatureRequestId}}` | `conn_mod_def::GKyetHEuGmA::uoa4KL5-Q4aOpO02OnQ8aA` |
| Cancel Incomplete Signature Request | POST | `/v3/signature_request/cancel/{{signatureRequestId}}` | `conn_mod_def::GKyesiQrb6g::AZKONTJ-T2a5UJ98RjdYww` |
| Create Embedded Signature Request | POST | `/signature_request/create_embedded` | `conn_mod_def::GKyessfRgng::Pt0d2cRORO-vK1k--WCojA` |
| Create Embedded Signature Request with Template | POST | `/signature_request/create_embedded_with_template` | `conn_mod_def::GKyesvn9lIA::dqstxs1tSTWhWfrXtA_Cfw` |
| Edit a Signature Request | PUT | `/v3/signature_request/edit/{{signatureRequestId}}` | `conn_mod_def::GKyes-pKl_g::sj7259C0SRWZr5bfd4AG-A` |
| Edit a Signature Request With Template | PUT | `/v3/signature_request/edit_with_template/{{signatureRequestId}}` | `conn_mod_def::GKyes9aGKzg::fuTg-YY3SrCm_NGO2EG_5A` |
| Edit an Embedded Signature Request | PUT | `/v3/signature_request/edit_embedded/{{signatureRequestId}}` | `conn_mod_def::GKyes9OcD1A::hk0OfCRBSz2w6H_oaDP4Jw` |
| Edit an Embedded Signature Request with Template | PUT | `/v3/signature_request/edit_embedded_with_template/{{signatureRequestId}}` | `conn_mod_def::GKyes9gvUxA::t0u0kRPmSrm9mh8bEoH9jA` |
| Release On-Hold Signature Request | POST | `/v3/signature_request/release_hold/{{signatureRequestId}}` | `conn_mod_def::GKyetIDpidA::gEir1hROQ6eJ0rILol0ClQ` |
| Remove Access to a Signature Request | POST | `/v3/signature_request/remove/{{signatureRequestId}}` | `conn_mod_def::GKyetH8tYrA::fRppUeP6RRW4sCQzkrD4mg` |
| Send Signature Request | POST | `/signature_request/send` | `conn_mod_def::GKyetS9FCVA::a9LgmtY4RxeYtsgM2Fyo9g` |
| Send Signature Request With Template | POST | `/signature_request/send_with_template` | `conn_mod_def::GKyetUL1iIA::hIURywKHRFW9WqGB6e301A` |

1 more SignatureRequest actions are available through search.

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template | GET | `/v3/template/{{templateId}}` | `conn_mod_def::GKyeuLHl6Qg::drcAcLTyRTaRqur5qSLE4A` |
| Get a Template's Files | GET | `/v3/template/files/{{templateId}}` | `conn_mod_def::GKyeuLDVqbg::T1KRmUZ5R0-xZ5xdNXc9VQ` |
| List Templates | GET | `/template/list` | `conn_mod_def::GKyeuVJSh3A::-buMkqk1RIiqtKHxmJ0U2A` |
| Add User to a Template | POST | `/v3/template/add_user/{{templateId}}` | `conn_mod_def::GKyeuB2Rlvg::HtkM0ps_Q7-JcI-1jdL7xQ` |
| Create Embedded Template Draft | POST | `/template/create_embedded_draft` | `conn_mod_def::GKyet5r5P0g::ow3DJI1GQBuFaLv0oT7e_g` |
| Create Template | POST | `/template/create` | `conn_mod_def::GKyeuK2Pxbg::_tou1ARiSkW7DwqJUSR0OQ` |
| Delete a Template | POST | `/v3/template/delete/{{templateId}}` | `conn_mod_def::GKyeuLTdZrg::QqJEORozTL2s8KYkFFaAXQ` |
| Update Template Files for a Template | POST | `/v3/template/update_files/{{templateId}}` | `conn_mod_def::GKyeuVidBJg::AaTJxfWXRk2UGjWDvIs2rA` |

### Team

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team | GET | `/team` | `conn_mod_def::GKyetw0fV-g::S3HWySswTamq9gWeasvNvA` |
| Get Team Info | GET | `/v3/team/info` | `conn_mod_def::GKyetrk5UOg::52MUFq7JSteEWOOFB75ZJQ` |
| Create Team | POST | `/team/create` | `conn_mod_def::GKyetcWPNAg::zmIrcLX7S666t3fjAXtKTg` |
| Delete Team | DELETE | `/team/destroy` | `conn_mod_def::GKyetvZN3fA::WLJH-p12TBiLo5YMWMieJA` |
| Remove User from Team | POST | `/team/remove_member` | `conn_mod_def::GKyet4qtkhA::TPhwdQ5LQ-CKc2Ns1GMB3A` |
| Update Team | PUT | `/team` | `conn_mod_def::GKyet5N0dTA::XhtOsQS2SI2v55AD0EC9eA` |

### FaxLine

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Fax Line | GET | `/v3/fax_line` | `conn_mod_def::GKyesSKws8g::GSNKZRpASiSPU0EjZSxxAg` |
| Add Fax Line User | PUT | `/fax_line/add_user` | `conn_mod_def::GKyesHv45Ig::x91BpgqnTP-u6O9RhnsOOA` |
| Delete Fax Line | DELETE | `/v3/fax_line` | `conn_mod_def::GKyesHFp0EA::RX_W91HBS5mhBF9LSnqOWA` |
| Purchase Fax Line | POST | `/fax_line/create` | `conn_mod_def::GKyesSgC0ug::bfCVyGMrTUm7fTkS9jGXMA` |
| Remove Fax Line Access | PUT | `/fax_line/remove_user` | `conn_mod_def::GKyesR8JHBA::J7ljWn3ARx6HnGQN2ShL2Q` |

### ApiApp

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API App | GET | `/v3/api_app/{{clientId}}` | `conn_mod_def::GKyerjyabbg::cQx7p--qRiqYtUkTZGh1ig` |
| Create API App | POST | `/v3/api_app` | `conn_mod_def::GKyerbh-Feg::l30GPZvyR5KXzsHBZhv1Zg` |
| Delete an API App | DELETE | `/v3/api_app/{{clientId}}` | `conn_mod_def::GKyerk3DW5A::_Sz1Ss6_Teu7ATcoWDROuA` |
| Update an API App | PUT | `/v3/api_app/{{clientId}}` | `conn_mod_def::GKyermGwqSg::T1sL-0xERc6FL6q6PNjjXA` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account | GET | `/account` | `conn_mod_def::GKyerbwcclg::vWbBo1qnSz2wXiaWhzSjfQ` |
| Create Account | POST | `/account/create` | `conn_mod_def::GKyerbiNTHA::oFUHrZW5SqOp9GLq757FZA` |
| Update Account | PUT | `/account` | `conn_mod_def::GKyerbueWRg::jdjwf4vJQt-iTCT9VyPx8g` |
| Verify Account | POST | `/account/verify` | `conn_mod_def::GKyerb-VPZg::iE_X2Oc9Q5O6z9ZsGwQlXg` |

### UnclaimedDraft

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Embedded Unclaimed Draft | POST | `/unclaimed_draft/create_embedded` | `conn_mod_def::GKyeuVk2CHg::YS0Yn681TWaOaph6Ir__UQ` |
| Create an Unclaimed Draft | POST | `/unclaimed_draft/create` | `conn_mod_def::GKyeugrhoUA::Odov1_a-QsWaS-63HqjEMA` |
| Create Embedded Unclaimed Draft with Template | POST | `/unclaimed_draft/create_embedded_with_template` | `conn_mod_def::GKyeugE79uA::8Yqh0aDbQPSNKM2g6-RGMw` |
| Edit and Resend an Unclaimed Draft Signature Request | POST | `/v3/unclaimed_draft/edit_and_resend/{{signatureRequestId}}` | `conn_mod_def::GKyeufFP6iA::wb7tQ--WQhmISe6ksBLl-g` |

### Fax

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Fax | GET | `/v3/fax/{{faxId}}` | `conn_mod_def::GKyesGflu4g::zlQ6xYbVQQ-txtY3skRTRg` |
| Delete a Fax | DELETE | `/v3/fax/{{faxId}}` | `conn_mod_def::GKyervad-zA::l9sxzr6aTSOn-MKKy3d2Yg` |
| Send Fax | POST | `/fax/send` | `conn_mod_def::GKyesJkquVA::fS0IBA4OSm-MkzyGCYx7Mg` |

### BulkSendJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bulk Send Job | GET | `/v3/bulk_send_job/{{bulkSendJobId}}` | `conn_mod_def::GKyermPxpDA::pWnQN36ASTiWXmNl6fEQaA` |
| Create an Embedded Bulk Send Job with Template | POST | `/v3/signature_request/bulk_create_embedded_with_template` | `conn_mod_def::GKyes9qh9Qg::jIL-V8CDSA-qWK_aixQsSw` |

### SignatureRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List Signature Requests | GET | `/signature_request/list` | `conn_mod_def::GKyetIeyYqA::fUUur5UCSEWnfYtcJ3kyuA` |
| Bulk Send Signature Requests with Template | POST | `/signature_request/bulk_send_with_template` | `conn_mod_def::GKyesiA5bSg::duivEymCQQ6jXd_7msfapA` |

### OauthToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate an OAuth Token | POST | `/v3/oauth/token` | `conn_mod_def::GKyesgpPA4g::wPrho5TlS56MwkvzmuJlDA` |
| Refresh an OAuth Token | POST | `/v3/oauth/token?refresh` | `conn_mod_def::GKyesgwlv1g::FM1T29zLRo-wMRjlrIj6dA` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Team Members for a Team | GET | `/v3/team/members/{{teamId}}` | `conn_mod_def::GKyet5zTdbg::wOIteWvPTM2Ac4bnKqCFIg` |
| Add User to a Team | PUT | `/team/add_member` | `conn_mod_def::GKyetjepNcA::apnsYxR6S1qFkrScYv8ODw` |

### ApiApps

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Apps | GET | `/api_app/list` | `conn_mod_def::GKyerkuzvUA::AeXclGTsQ4WvkhNFTYpemA` |

### EmbeddedSignUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Embedded Sign URL for a Signature | GET | `/v3/embedded/sign_url/{{signatureId}}` | `conn_mod_def::GKyerujlAuA::yexlVQRLQcuW-_MY2ADjnw` |

### EmbeddedTemplateEditUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Embedded Template Edit URL | POST | `/v3/embedded/edit_url/{{templateId}}` | `conn_mod_def::GKyervRyWQA::7pizBqksSfWRDEXPuYyAVQ` |

### Report

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Report | POST | `/v3/report/create` | `conn_mod_def::GKyesgmXkpg::7wPmZLfzQfWoA-bTHLZKEg` |

### SubTeams

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Sub Teams | GET | `/v3/team/sub_teams/{{teamId}}` | `conn_mod_def::GKyetrpqqOA::BA_IORxWTBG-LMi2i_qkyQ` |

### TeamInvites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Team Invites | GET | `/v3/team/invites` | `conn_mod_def::GKyetsdNF1A::Ll-O0WMsTvKCpx78aDzYWA` |

### Template

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove User from a Template | POST | `/v3/template/remove_user/{{templateId}}` | `conn_mod_def::GKyeuWY1o6g::Neuh5c46T_OVVIyX6HXUsg` |

### FaxLineAreaCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Available Fax Line Area Codes | GET | `/v3/fax_line/area_codes` | `conn_mod_def::GKyesXvxdQg::NhQDbdMTSTWuhbGZk-V2ew` |

### SignatureRequestFilesAsDataUri

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Signature Request Files as Data URI | GET | `/v3/signature_request/files_as_data_uri/{{signatureRequestId}}` | `conn_mod_def::GKyesu1i_LA::e5pWKdgvTqStUnXlL9d4Ug` |

### SignatureRequestFilesAsFileUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Signature Request Files as a File URL | GET | `/v3/signature_request/files_as_file_url/{{signatureRequestId}}` | `conn_mod_def::GKyeswLgveg::3Q7pm0iWQcePUGt_ats_Tg` |

### SignatureRequestFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Files for a Signature Request | GET | `/v3/signature_request/files/{{signatureRequestId}}` | `conn_mod_def::GKyesxxia5A::qz7HkCJnR5SVPAOmqr6pug` |

### SignatureRequestReminder

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Signature Request Reminder | POST | `/v3/signature_request/remind/{{signatureRequestId}}` | `conn_mod_def::GKyetLgKEmg::ja336ySfSri4rKMItgszEw` |

### BulkSendJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bulk Send Jobs | GET | `/v3/bulk_send_job/list` | `conn_mod_def::GKyerw7ilPg::ZiHsZ4JYRXSQo45MXH9kCg` |

### FaxFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Fax Files | GET | `/v3/fax/files/{{faxId}}` | `conn_mod_def::GKyer-ng1ng::HGdyZPhJS6Wt7HaB_sbbCQ` |

### Faxes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Faxes | GET | `/fax/list` | `conn_mod_def::GKyesHssYRA::fFS7vcNPRuOqpYEALkS4SA` |

### FaxLines

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fax Lines | GET | `/fax_line/list` | `conn_mod_def::GKyesTibvZA::twJVnyzBQbCNj9axeoKPmg` |

### TemplateFilesAsDataUri

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Template Files as Data Uri | GET | `/v3/template/files_as_data_uri/{{templateId}}` | `conn_mod_def::GKyeuKnWayA::Lw2s5BRmSSmt9JoqbTBmiw` |

### TemplateFilesAsFileUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Template Files as File URL | GET | `/v3/template/files_as_file_url/{{templateId}}` | `conn_mod_def::GKyeuU9b7FA::LbGZw9XlTKuZBY0RfLCKag` |

This lists 72 of 73 actions. For anything not here, call `search_one_platform_actions` with platform `dropbox-sign`. The full catalog is at https://www.withone.ai/knowledge/dropbox-sign.

## When a call fails

The error comes from Dropbox Sign, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/dropbox-sign

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
