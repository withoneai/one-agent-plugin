---
name: box
description: Box is a cloud content management and file sharing platform that enables secure collaboration, content governance, and workflow automation across teams and organizations. Read and write Box data through One: files, folders, weblinks, metadatatemplates, users, integrationmappings and more, 296 actions with real parameter documentation. Use whenever the user asks to look something up in Box, create or update a record there, or build code against the Box API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: box
  generated-from: one-knowledge-base
---

# Box through One

Box is a cloud content management and file sharing platform that enables secure collaboration, content governance, and workflow automation across teams and organizations.

One exposes Box through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `box` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Box is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Box account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File's Content | GET | `/files/{{fileId}}/content` | `conn_mod_def::GJ0OgdAPhuk::FUBDIH1KSjS9e22mTKxH5A` |
| Find a File for a Shared Link | GET | `/shared_items` | `conn_mod_def::GJ0Ovr1nj8I::Vw61xyUmTFivmK4cmlqmKQ` |
| Get a File Thumbnail | GET | `/files/{{fileId}}/thumbnail.{{extension}}` | `conn_mod_def::GJ0OjWLci_A::5bpGG4-9RGe6m5YPndjpJQ` |
| Get a File's Information | GET | `/files/{{fileId}}` | `conn_mod_def::GJ0OjMnRLLg::bNYtck31T1a2It1qGYUVqA` |
| Get a File’s Shared Link | GET | `/files/{{fileId}}` | `conn_mod_def::GJ0OvyvR2aM::5Xh1Vj_PQ52pSckYQOWJEw` |
| Get a Trashed File | GET | `/files/{{fileId}}/trash` | `conn_mod_def::GJ0O3Re50xg::ACZ58_glQDqid6giBdZodg` |
| Add a Shared Link to a File | PUT | `/files/{{fileId}}` | `conn_mod_def::GJ0OvjguAi0::u_Pgt9CZRlukj0UIK-Ieng` |
| Apply Watermark to a File | PUT | `/files/{{fileId}}/watermark` | `conn_mod_def::GJ0O6saiqPQ::LlI3muegQtqx2IrD6Rx9Xw` |
| Commit an Upload Session to Create a File | POST | `/files/upload_sessions/{{uploadSessionId}}/commit` | `conn_mod_def::GJ0O4yiZwOM::k2nOvTlrTdmwBE33PEea7g` |
| Copy a File | POST | `/files/{{fileId}}/copy` | `conn_mod_def::GJ0Oi6FNiak::pAouxkmtQKCCbMlG-VrsPQ` |
| Delete a File | DELETE | `/files/{{fileId}}` | `conn_mod_def::GJ0OjC2sdpM::aKQY37EmRIySxatNg07W6A` |
| Permanently Delete a Trashed File | DELETE | `/files/{{fileId}}/trash` | `conn_mod_def::GJ0O3YnP3bY::Ygg3a7HLSCetfHdzvZttrw` |

10 more Files actions are available through search.

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Folder for a Shared Link | GET | `/shared_items#folders` | `conn_mod_def::GJ0OwQtpC18::7VmuBBC9R36FfEdl4xjMnA` |
| Get a Folder's Shared Link | GET | `/folders/{{folderId}}` | `conn_mod_def::GJ0OwZcqbos::7-VVdM3wQy2jABWFAX9kow` |
| Get a Trashed Folder | GET | `/folders/{{folderId}}/trash` | `conn_mod_def::GJ0O3o16qtQ::xrF14VBTT_-EZKOYkeEV3w` |
| Get Folder Information (Including First 100 Items) | GET | `/folders/{{folderId}}` | `conn_mod_def::GJ0OkbfniWI::hdxFMtikTl2zpxQ9RVMOJw` |
| Add a Shared Link to a Folder | PUT | `/folders/{{folderId}}` | `conn_mod_def::GJ0OwIs7Kxo::MYMvGKVeSdiJzTXXlw3hoQ` |
| Add Classification to a Folder | POST | `/folders/{{folderId}}/metadata/enterprise/securityClassification-6VMVochwUWo` | `conn_mod_def::GJ0Ocq1k7bs::rdgqHVG7Q7anGhqmj5Z0Sg` |
| Copy a Folder | POST | `/folders/{{folderId}}/copy` | `conn_mod_def::GJ0OkB4rLCU::9fTlwEZYS227BsRxS6s5OA` |
| Create Folder | POST | `/folders` | `conn_mod_def::GJ0OkJk0wKI::G0Zp2dpyQNqkPROG7gt5Vg` |
| Delete a Folder | DELETE | `/folders/{{folderId}}` | `conn_mod_def::GJ0OkSeJjfo::k_q0iWKiTimgS69vu3-HjA` |
| Permanently Remove a Folder from Trash | DELETE | `/folders/{{folderId}}/trash` | `conn_mod_def::GJ0O3vu_EG8::7PWLRA_PRxOMuZ8yHW0_Aw` |
| Remove a Folder’s Security Classification (Metadata) | DELETE | `/folders/{{folderId}}/metadata/enterprise/securityClassification-6VMVochwUWo` | `conn_mod_def::GJ0Oc45cNls::yoXhuLG_T6i2cSq4vtxneg` |
| Remove a Folder’s Shared Link | PUT | `/folders/{{folderId}}` | `conn_mod_def::GJ0OwgX3SDY::p5hAXG3UQcOYmiDBiFombA` |

5 more Folders actions are available through search.

### WebLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Web Link for a Shared Link | GET | `/shared_items#web_links` | `conn_mod_def::GJ0Ow7M-KPg::nyk1QeMJRl6L3W-eRO31tQ` |
| Get a Trashed Web Link | GET | `/web_links/{{webLinkId}}/trash` | `conn_mod_def::GJ0O4JK04sU::ooAlg4zyR2-DiwqplKMI9Q` |
| Get a Web Link | GET | `/web_links/{{webLinkId}}` | `conn_mod_def::GJ0O7hM27v0::0zUDdJfjTKmEqRK3PdE7PA` |
| Get a Web Link’s Shared Link | GET | `/web_links/{{webLinkId}}` | `conn_mod_def::GJ0OxCaNmws::GTuvHh17RsOl9yrGkU0WVA` |
| Add a Shared Link to a Web Link | PUT | `/web_links/{{webLinkId}}` | `conn_mod_def::GJ0Owy-skpY::5LZdLWFVTpOar0O6T-EjTQ` |
| Create a Web Link in a Folder | POST | `/web_links` | `conn_mod_def::GJ0O7ZnfCFA::Nj7cAogbTA-hMSON1sIbfQ` |
| Delete a Web Link | DELETE | `/web_links/{{webLinkId}}` | `conn_mod_def::GJ0O7n-LUF4::i-unsRijQ2ijBnUjZtqigQ` |
| Permanently Delete a Trashed Web Link | DELETE | `/web_links/{{webLinkId}}/trash` | `conn_mod_def::GJ0O4QsPXd4::H3hBTtpnShSb1Rb5xY7iqA` |
| Remove a Shared Link from a Web Link | PUT | `/web_links/{{webLinkId}}` | `conn_mod_def::GJ0OxJ2ZXMY::4kSxrSC4Qoi7wxVdMhqgvg` |
| Restore a Web Link from Trash | POST | `/web_links/{{webLinkId}}` | `conn_mod_def::GJ0O4YM_LRo::6CSF2dJdQnWoHFBx-EDxOg` |
| Update a Web Link | PUT | `/web_links/{{webLinkId}}` | `conn_mod_def::GJ0O7wkR3dc::XRW96BfPR3OcjwqPl5TGKQ` |
| Update a Web Link’s Shared Link | PUT | `/web_links/{{webLinkId}}` | `conn_mod_def::GJ0OxSdYhrY::NvdkfULgQGCphBkcd1VTpQ` |

### MetadataTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Metadata Template by Instance ID | GET | `/metadata_templates` | `conn_mod_def::GJ0OsrdzfH0::M2NHqU5XTdaqUOF3UH38gw` |
| Get a Metadata Template by ID | GET | `/metadata_templates/{{templateId}}` | `conn_mod_def::GJ0Osx81nUk::4Ufx9XZST4SsUiGGVMIZsA` |
| Get a Metadata Template by Name | GET | `/metadata_templates/{{scope}}/{{templateKey}}/schema` | `conn_mod_def::GJ0Os4zS7MM::GUiXlrL7QCupChg7ygfisQ` |
| List Enterprise Classifications (Security Classification Template Schema) | GET | `/metadata_templates/{{enterpriseScope}}/securityClassification-6VMVochwUWo/schema` | `conn_mod_def::GJ0Ob_KEn7U::S-OorEsWTbCJYf6bQti6lA` |
| List Enterprise Metadata Templates | GET | `/metadata_templates/enterprise` | `conn_mod_def::GJ0OtHLub6s::HX7sz0YMQ_yYHQ9Js_E8Aw` |
| List Global Metadata Templates | GET | `/metadata_templates/global` | `conn_mod_def::GJ0Os_7y7Pk::Zt-CQZ1gTgWbLFK3w2_E3Q` |
| Add Initial Classifications (Initialize Enterprise Classification Template) | POST | `/metadata_templates/schema#classifications` | `conn_mod_def::GJ0Ob3yctzo::RUmvxoPBS-aITgdLKmI-zw` |
| Create a Metadata Template | POST | `/metadata_templates/schema` | `conn_mod_def::GJ0OsjwaqDE::-NQRCcuLS5eEtx7VjdmWJQ` |
| Remove a Metadata Template (by Scope and Template Key) | DELETE | `/metadata_templates/{{scope}}/{{templateKey}}/schema` | `conn_mod_def::GJ0OtOIzOWw::9mrK-QMRR62Dh2aZ8dWD8g` |
| Update a Metadata Template's Schema | PUT | `/metadata_templates/{{scope}}/{{templateKey}}/schema` | `conn_mod_def::GJ0OtVahbCU::_7E6hJELRJq3KWTT5msZng` |
| Update Enterprise Security Classification Template (Schema) | PUT | `/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update` | `conn_mod_def::GJ0OcGbFU08::F4OtVc93Q_qMPzI5wanrLg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User (Enterprise) | GET | `/users/{{userId}}` | `conn_mod_def::GJ0O6Vr3Ifk::qjYlUJM-QMa1XJYj332o2Q` |
| Get a User’s Avatar | GET | `/users/{{userId}}/avatar` | `conn_mod_def::GJ0O54NVvfQ::xleKabGHQuGlOOiKeLN9-g` |
| Get Current User | GET | `/users/me` | `conn_mod_def::GJ0O6OJsPVE::gihVwozhSb6-33DCNNmuzQ` |
| List Enterprise Users | GET | `/users` | `conn_mod_def::GJ0O6eVn_J8::CtED3qVuRj6_grh5ImVnlA` |
| Add or Update a User’s Avatar | POST | `/users/{{userId}}/avatar` | `conn_mod_def::GJ0O5p-AjxY::DU2uAUefQ1yAE3V2pvskJg` |
| Create User | POST | `/users` | `conn_mod_def::GJ0O5_pqYJo::14PYmlHqSJaGLpME5cZbnQ` |
| Create User Session Termination Jobs | POST | `/users/terminate_sessions` | `conn_mod_def::GJ0OvU1l1oI::XV95VNa9RUuil8bgnK2dLg` |
| Delete a User | DELETE | `/users/{{userId}}` | `conn_mod_def::GJ0O6HEi_i8::qh-CqBQ8RmOXAl2tDI2epw` |
| Delete a User's Avatar | DELETE | `/users/{{userId}}/avatar` | `conn_mod_def::GJ0O5xL-Vgc::-lr-od71R9KTjlEHaFMwyQ` |
| Transfer a User’s Owned Root Folder (Folder `0`) to Another User | PUT | `/users/{{userId}}/folders/0` | `conn_mod_def::GJ0O3KMyv2A::xQ5cgu6yTjO-piLT0pH6Xw` |
| Update a User | PUT | `/users/{{userId}}` | `conn_mod_def::GJ0O6lrMrZs::oQg-oAZxR2m5uGZaU-Hz7A` |

### IntegrationMappings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Slack Integration Mappings | GET | `/integration_mappings/slack` | `conn_mod_def::GJ0Omsc8DnY::syeo60zDR4a-6dwzp-av7A` |
| List Teams Integration Mappings | GET | `/integration_mappings/teams` | `conn_mod_def::GJ0Om2TpQv0::SmpW0C_OSg-wal0A-RQbKg` |
| Create a Slack Integration Mapping | POST | `/integration_mappings/slack` | `conn_mod_def::GJ0OmKR24Hw::zu6N5b7vREO71xOPx6Xy4w` |
| Create a Teams Integration Mapping | POST | `/integration_mappings/teams` | `conn_mod_def::GJ0OmSGpq6Y::Hi7TpFezT7KCsz5dyk29dg` |
| Delete a Slack Integration Mapping | DELETE | `/integration_mappings/slack/{{integrationMappingId}}` | `conn_mod_def::GJ0OmZNkxHY::3yQ_JayCT72e2fjXs9VJ7w` |
| Delete a Teams Integration Mapping | DELETE | `/integration_mappings/teams/{{integrationMappingId}}` | `conn_mod_def::GJ0OmgEAQ5k::mlkxOd1KSA-CsObkdImKaA` |
| Update a Slack Integration Mapping | PUT | `/integration_mappings/slack/{{integrationMappingId}}` | `conn_mod_def::GJ0Om9pJR2I::9LIK5qrHTWa7rOGOtCKJvQ` |
| Update a Teams Integration Mapping | PUT | `/integration_mappings/teams/{{integrationMappingId}}` | `conn_mod_def::GJ0OnFxYM8Y::Cn_TmIm5Txm1CUJkqb22ew` |

### GroupMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group Membership | GET | `/group_memberships/{{groupMembershipId}}` | `conn_mod_def::GJ0Ok6a1rmc::S8G0J-n2S92NmQBD4wfkVw` |
| List a Group’s Memberships (Members of Group) | GET | `/groups/{{groupId}}/memberships` | `conn_mod_def::GJ0OlCZxSPI::Y89KrYqXQdqHeheKIDFkzQ` |
| List a User's Group Memberships | GET | `/users/{{userId}}/memberships` | `conn_mod_def::GJ0OlLKLzdE::d4WjBDWTQBShg-dnQmbgPg` |
| Add a User to a Group (Create Group Membership) | POST | `/group_memberships` | `conn_mod_def::GJ0OkzEC7sQ::Hg6MGdL_RqKB67wDrwtsAA` |
| Remove a User from a Group (Delete Group Membership) | DELETE | `/group_memberships/{{groupMembershipId}}` | `conn_mod_def::GJ0OlSxj1dQ::UzkYG4TcQAGE_QdYyqDVLw` |
| Update a Group Membership | PUT | `/group_memberships/{{groupMembershipId}}` | `conn_mod_def::GJ0OlatJN9M::jFBlctb8T_CDRlF5QUi-BA` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group | GET | `/groups/{{groupId}}` | `conn_mod_def::GJ0OlqVsYjA::hbaKfhfLSJ2kcEXps1TZ0w` |
| List an Enterprise’s Groups | GET | `/groups` | `conn_mod_def::GJ0OlypY1WM::6TQcJ5BWSLWKo1UmTWRPoA` |
| Create a Group | POST | `/groups` | `conn_mod_def::GJ0OliLjvyM::8_jfdrkUR2yEqvCFS0miJA` |
| Create Group Session Termination Jobs | POST | `/groups/terminate_sessions` | `conn_mod_def::GJ0OvNukDRc::LnK_lanxS2ym2_k-crE92Q` |
| Delete a Group | DELETE | `/groups/{{groupId}}` | `conn_mod_def::GJ0Ol5q31G0::SnPqmr-pTgyE-hNYiTpPWA` |
| Update a Group | PUT | `/groups/{{groupId}}` | `conn_mod_def::GJ0OmC5nbEo::aP5PZnhySaCzvXkBaCNDQg` |

### MetadataTaxonomies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Metadata Taxonomy by Namespace and Taxonomy Key | GET | `/metadata_taxonomies/{{namespace}}/{{taxonomy_key}}` | `conn_mod_def::GJ0Ord3cvrY::4VxVcsx2R6OZHSE9LMoIxw` |
| List Metadata Taxonomies in a Namespace | GET | `/metadata_taxonomies/{{namespace}}` | `conn_mod_def::GJ0OrUo95n0::nGv0fv61T7aqFpOolM9XxA` |
| Create a Metadata Taxonomy | POST | `/metadata_taxonomies` | `conn_mod_def::GJ0Oq3cjTwM::kRnjzEU6SNWxUaxnjnAZbQ` |
| Delete a Metadata Taxonomy (Remove Metadata Taxonomy) | DELETE | `/metadata_taxonomies/{{namespace}}/{{taxonomyKey}}` | `conn_mod_def::GJ0Or_evuV0::QzaeaT13RSuGuQHZSF3KzQ` |
| Delete a Metadata Taxonomy’s Last Level (Trim Levels) | POST | `/metadata_taxonomies/{{namespace}}/{{taxonomyKey}}/levels:trim` | `conn_mod_def::GJ0OrNaJQ9w::vS4g-dK4QWG7g9mBKU1xcg` |
| Update a Metadata Taxonomy | PATCH | `/metadata_taxonomies/{{namespace}}/{{taxonomyKey}}` | `conn_mod_def::GJ0OsNq8arU::eIoWoqQlTJSfaLV3oRc1ZA` |

### AiAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an AI Agent by Agent ID | GET | `/ai_agents/{{agentId}}` | `conn_mod_def::GJ0OZvAZx6k::tTIPR12oTBeI-USGVu1zrA` |
| List AI Agents | GET | `/ai_agents` | `conn_mod_def::GJ0OZ3Bhs9Y::Di4YLimgSiKlkKCi5I-Opg` |
| Create AI Agent | POST | `/ai_agents` | `conn_mod_def::GJ0OZfoNrpc::RKfZqCuiQkmlkYbv1oGhuA` |
| Delete an AI Agent | DELETE | `/ai_agents/{{agentId}}` | `conn_mod_def::GJ0OZnD4bPw::BWuHwt10ShK73uwZamQVXg` |
| Update an AI Agent | PUT | `/ai_agents/{{agentId}}` | `conn_mod_def::GJ0OZ-ExrdA::6tt8R3zXRh-6EMGxnnUpDg` |

### SignRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Box Sign Request by ID | GET | `/sign_requests/{{signRequestId}}` | `conn_mod_def::GJ0ObHm8yII::ZxfPgd7ZRROmpgbk_OIzCg` |

4 more SignRequests actions are available through search.

This lists 90 of 296 actions. For anything not here, call `search_one_platform_actions` with platform `box`. The full catalog is at https://www.withone.ai/knowledge/box.

## When a call fails

The error comes from Box, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/box

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
