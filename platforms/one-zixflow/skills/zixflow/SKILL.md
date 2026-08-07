---
name: zixflow
description: An AI-driven customer engagement platform that unifies CRM, contact management, and multichannel messaging (SMS, email, WhatsApp, RCS), enabling businesses to automate workflows, run campaigns, track interactions, and improve customer engagement from a single workspace. Read and write Zixflow data through One: attributes, collectionrecords, whatsappmessages, listentries, whatsappmessages, rcsmessages and more, 108 actions with real parameter documentation. Use whenever the user asks to look something up in Zixflow, create or update a record there, or build code against the Zixflow API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: zixflow
  generated-from: one-knowledge-base
---

# Zixflow through One

An AI-driven customer engagement platform that unifies CRM, contact management, and multichannel messaging (SMS, email, WhatsApp, RCS), enabling businesses to automate workflows, run campaigns, track interactions, and improve customer engagement from a single workspace.

One exposes Zixflow through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `zixflow` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Zixflow is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Zixflow account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Attributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Attribute by ID for a Target | GET | `/api/v1/attributes/{{target}}/{{targetId}}/{{attributeId}}` | `conn_mod_def::GKO5BUJ49hA::4-tRiafhRACcGfimzI7cDg` |
| Get Attributes for a Target | GET | `/api/v1/attributes/{{target}}/{{targetId}}` | `conn_mod_def::GKO5BeS0n4g::h6n9DqlXRTyu-O6sUycULQ` |
| Create a Custom Attribute for a Target | POST | `/api/v1/attributes/{{target}}/{{targetId}}` | `conn_mod_def::GKO5BUEnMVA::w4-gV9hMSl6IgR9parEI2w` |
| Delete a Collection or List Attribute Status Option | DELETE | `/api/v1/attributes/{{target}}/{{targetId}}/{{attributeId}}/status/{{statusId}}` | `conn_mod_def::GKO5BUE-wJA::SDC4zt3gRT-Q9gX7iW0Gog` |
| Delete a Collection or List Custom Attribute | DELETE | `/api/v1/attributes/{{target}}/{{targetId}}/{{attributeId}}` | `conn_mod_def::GKO5BVBUFJA::aiMhn1FfQtq10yi8km5juw` |
| Delete an Attribute Option from a Collection or List Attribute | DELETE | `/api/v1/attributes/{{target}}/{{targetId}}/{{attributeId}}/options/{{optionId}}` | `conn_mod_def::GKO5BUVprWA::unOQgTKyTiibE-Hshnep_g` |
| Update a Collection or List Custom Attribute | PATCH | `/api/v1/attributes/{{target}}/{{targetId}}/{{attributeId}}` | `conn_mod_def::GKO5BncskHg::Z4q_7bXlSSugrZlRezx6qA` |
| Update a Target Attribute Status Option | PATCH | `/api/v1/attributes/{{target}}/{{targetId}}/{{attributeId}}/status/{{optionId}}` | `conn_mod_def::GKO5Be0uCqA::cAs_SHQNSqSytwWS5yfxOw` |
| Update an Attribute Option Source | PATCH | `/api/v1/attributes/{{target}}/{{targetId}}/{{attributeId}}/options/{{optionId}}` | `conn_mod_def::GKO5Bexdj4g::cBWspiHLTL6kxEuIXzDZMA` |

### CollectionRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Collection Record By ID | GET | `/api/v1/collection-records/{{collectionId}}/{{recordId}}` | `conn_mod_def::GKO5DC5DTMA::9jWyZjngSWG_ssA4odtyBg` |
| Create a Collection Record | POST | `/api/v1/collection-records/{{collectionId}}` | `conn_mod_def::GKO5C64urgg::CxB4bmY1RbCmoMTz9fqWAg` |
| Create an Activity in a Collection | POST | `/api/v1/collection-records/activity-list` | `conn_mod_def::GKO5BLFAlbg::LKW_iLIlTwmS5Qo56H1xaA` |
| Delete a Collection Record by ID | DELETE | `/api/v1/collection-records/{{collectionId}}/{{recordId}}` | `conn_mod_def::GKO5C65Ezhg::9CjWV1nQRzGyT57IB7gJsw` |
| Get List of a Collection's Records | POST | `/api/v1/collection-records/{{collectionId}}/query` | `conn_mod_def::GKO5DDxEQsA::M71yIZBJTgi4wQiv_-apbw` |
| Update a Collection Record | PATCH | `/api/v1/collection-records/{{collectionId}}/{{recordId}}` | `conn_mod_def::GKO5DD9w5eg::K9RwUx-RQFaYQRZUVlGTNg` |

### WhatsAppMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Location Message | POST | `/api/v1/campaign/whatsapp/message/send` | `conn_mod_def::GKO5Cee5LEA::FSZZ8fl5RAW6--zUWYE8CQ` |
| Send WhatsApp Template Message | POST | `/api/v1/campaign/whatsapp/send` | `conn_mod_def::GKO5CnPGeZA::PaoTqBS6T_O1TFyVT8k6mg` |
| Send WhatsApp Text Message | POST | `/api/ingest/whatsapp/v1/message/text/send` | `conn_mod_def::GKO5EdfBoKg::32nGlds3Qb6DdsMrA2Q3pg` |
| Send WhatsApp Text Message | POST | `/api/v1/campaign/whatsapp/message/send` | `conn_mod_def::GKO5Co0Pgzg::lKE5KIP9Se6Oytp96__1IA` |
| Send WhatsApp Video Message | POST | `/api/v1/campaign/whatsapp/message/send` | `conn_mod_def::GKO5CpCBLkA::zJZ4FIvBRUGDyOt17LX5og` |

### ListEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get List Entry By ID | GET | `/api/v1/list-entries/{{listId}}/{{entryId}}` | `conn_mod_def::GKO5C65MBcA::Mwh-zu0rRl-2f03ZfdU_zw` |
| Create a List Entry | POST | `/api/v1/list-entries/{{listId}}` | `conn_mod_def::GKO5CyR2j6A::NUMBzJJgQ_m6xpu-oNpIxA` |
| Delete a List Entry by ID | DELETE | `/api/v1/list-entries/{{listId}}/{{entryId}}` | `conn_mod_def::GKO5Cw_YAwg::8c_o0dQwQsK_RybpldOSEg` |
| Get List Entries for a List | POST | `/api/v1/list-entries/{{listId}}/query` | `conn_mod_def::GKO5C65IKXg::Xi_4W3-LRQi-J_LvY1xa4w` |
| Update a List Entry Source | PATCH | `/api/v1/list-entries/{{listId}}/{{entryId}}` | `conn_mod_def::GKO5C65Rzjg::D3ZcnSE3SsuIl6pf1sGj9Q` |

### WhatsappMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Audio Message | POST | `/api/v1/campaign/whatsapp/message/send` | `conn_mod_def::GKO5CdtyXag::xGSltOFSQk6TFaKyUBZLKQ` |
| Send WhatsApp Document Message | POST | `/api/v1/campaign/whatsapp/message/send` | `conn_mod_def::GKO5CdfTdJg::jRZkcGD2T_WxRlfH_YIUeQ` |
| Send WhatsApp Image Message | POST | `/api/v1/campaign/whatsapp/message/send` | `conn_mod_def::GKO5CeXqTCg::qwA3YbXwTwCVo2k2skqQfA` |
| Send WhatsApp Interactive Product Carousel Message | POST | `/api/ingest/whatsapp/v1/message/interactive/product-carousel/send` | `conn_mod_def::GKO5EH3Jgyg::Wrua7KaAQ7KyowG04uiuPw` |

### RcsMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an RCS Text Message | POST | `/api/ingest/rcs/v1/message/text/send` | `conn_mod_def::GKO5Dh6kBfA::eNj9pEKfRyOAKL6Od7MpcQ` |
| Send RCS Text Message | POST | `/api/v1/campaign/rcs/message/text` | `conn_mod_def::GKO5B5zS7TA::_5fSWl-ETNyM-A1d6EmIwg` |
| Send RCS Video Message | POST | `/api/v1/campaign/rcs/message/video` | `conn_mod_def::GKO5B6XK9lg::oKAY0kSWRjmmGq8wKW4kuw` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Collection By ID | GET | `/api/v1/collections/{{collectionId}}` | `conn_mod_def::GKO5CoSSarg::LiSNn3xNQdud5q4XewIaFg` |
| Introduction to Collections | GET | `/api-reference/collection/introduction` | `conn_mod_def::GKO5CwWAgVA::fyx5PjkHS4GZ0L2bwrZM6A` |
| List Collections | GET | `/api/v1/collections` | `conn_mod_def::GKO5CnQbjtA::558g3wsbQ329rxKVJqH6ZQ` |

### CampaignEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Campaign Email | POST | `` | `conn_mod_def::GKO5BmuAPMA::Wf0Mgu27Ssu5BvOkGXFrhg` |
| Send Campaign Email | POST | `/api/v1/campaign/email/send` | `conn_mod_def::GKO5BmuAFbA::Eo9IGs4VTq6KbLadHci_lQ` |

### RcsTemplateVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get List of an RCS Template's Variables | GET | `/api/v1/campaign/rcs/variable-keys/{{botId}}` | `conn_mod_def::GKO5BxXatgA::zIz0i_IUQjemr83-7Aw4Jw` |
| Get RCS Template Variables for a Bot | GET | `/api/data/rcs/v1/{{botId}}/variable-keys` | `conn_mod_def::GKO5DZsCvgg::DYxNvHsyQUuuRyVCSMhkaA` |

### RcsDocumentMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an RCS Document Message | POST | `/api/ingest/rcs/v1/message/document/send` | `conn_mod_def::GKO5DiQ5mpg::UzFwQKrSRn6251_n-Rk7XA` |
| Send RCS Document Message | POST | `/api/v1/campaign/rcs/message/document` | `conn_mod_def::GKO5BwDNw7A::4dxZgqA4SwS_NUDr7exz6w` |

### Activity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Activity By ID | GET | `/api/v1/collection-records/activity-list/{{activityId}}` | `conn_mod_def::GKO5BHlPMGA::mmD7pa5SQlGmtR3CyEhidQ` |
| Delete an Activity by ID | DELETE | `/api/v1/collection-records/activity-list/{{activityId}}` | `conn_mod_def::GKO5BHWb-Bg::0zZg9FRiT_uO9FsiLtCBCw` |

### RcsAudioMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an RCS Audio Message | POST | `/api/ingest/rcs/v1/message/audio/send` | `conn_mod_def::GKO5DYz88cA::gH73GdNaTqmz5mKGbJWovw` |
| Send RCS Audio Message | POST | `/api/v1/campaign/rcs/message/audio` | `conn_mod_def::GKO5BwwumzA::RquLRgfrQ8-VcAoPSqvy0w` |

### RcsMessaging

| Action | Method | Path | Action id |
|---|---|---|---|
| Introduction to RCS Messaging | GET | `/api-reference/campaign/rcs/introduction` | `conn_mod_def::GKO5Bvho2pg::ofN4vhWvQhOyCYAPeU6AyQ` |
| Introduction to RCS Messaging | GET | `/` | `conn_mod_def::GKO5DXRQxFg::7wFxy5HhT9mjvcoosUeBrw` |

### WhatsAppTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get WhatsApp Templates for a Phone | GET | `/api/data/whatsapp/v1/{{phoneId}}/templates` | `conn_mod_def::GKO5D0MHJKg::T11c8kACTquLjf-I1lJBgg` |
| List WhatsApp Templates for a Phone | GET | `/api/v1/campaign/whatsapp/templates/{{phoneId}}` | `conn_mod_def::GKO5CTwiSwA::Yq009Ub1STCWqg-Vz-P5Hw` |

### WorkspaceMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace Member by ID | GET | `/api/v1/workspace-members/{{memberId}}` | `conn_mod_def::GKO5DDltxkg::_s2z8MrGQQynebTJZ_s_5Q` |
| List Workspace Members | GET | `/api/v1/workspace-members` | `conn_mod_def::GKO5DC5LGNg::MfiXn-gwQbSfLPcSiNNbPg` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List by ID | GET | `/api/v1/lists/{{listId}}` | `conn_mod_def::GKO5CwiXUog::_JE6oOczTn-Z0kNTKBxXpQ` |
| Get List of Lists | GET | `/api/v1/lists` | `conn_mod_def::GKO5Cws--rg::vcV_lcC-SH2HvEKMOvPMwA` |

### WhatsAppTemplateVariableKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get WhatsApp Template Variable Keys | GET | `/api/v1/campaign/whatsapp/variable-keys` | `conn_mod_def::GKO5CU56RuA::ockgkNwrS123J1BGjEDtag` |

### WhatsAppCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Message | POST | `/campaign/whatsapp` | `conn_mod_def::GKO5Cc2ZtBA::j2MiKIeCSqOVw3fgNCuyBQ` |

### WhatsAppInteractiveReplyButtonsMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Interactive Reply Buttons Message | POST | `/api/ingest/whatsapp/v1/message/interactive/reply-buttons/send` | `conn_mod_def::GKO5ESZCU7g::hUkIN90nTOm8QanJF8g4rA` |

### WhatsAppStickerMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Sticker Message | POST | `/api/ingest/whatsapp/v1/message/sticker/send` | `conn_mod_def::GKO5ESZKvBA::D81EBxr7Qs6UTQ1b-C9ijg` |

### EmailMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an Email Message | POST | `/api/ingest/email/v1/message/send` | `conn_mod_def::GKO5DNQmxKA::GPGwakGFRoacwbk0IAIX8w` |

### EmailTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Email Using a Template | POST | `/api/ingest/email/v1/template/send` | `conn_mod_def::GKO5DNdSgVA::qMgRIr48S3WrAwhJkl8fNQ` |

### SendflowWorkflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Trigger a Sendflow Workflow | POST | `/api/ingest/sendflow/v1/{{sendflowId}}/trigger` | `conn_mod_def::GKO5DrkxVLA::JNa6_272RgmpsrLARewPpw` |

### WhatsappInteractiveMediaCarouselMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Interactive Media Carousel Message | POST | `/api/ingest/whatsapp/v1/message/interactive/media-carousel/send` | `conn_mod_def::GKO5EHtfn3g::b9VwNDGRTuWH4mYVLhLQTA` |

### WhatsAppInteractiveListButtonsMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Interactive List Buttons Message | POST | `/api/ingest/whatsapp/v1/message/interactive/list-buttons/send` | `conn_mod_def::GKO5EHzNzag::m4cNZCFPQ-mFKURHaScwRA` |

### WhatsAppInteractiveAddressMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Interactive Address Message | POST | `/api/ingest/whatsapp/v1/message/interactive/address/send` | `conn_mod_def::GKO5EJEghDA::qSNLZHy0STSl5fGfyfqNaQ` |

### WhatsAppInteractiveUrlButtonMessage

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Interactive URL Button Message | POST | `/api/ingest/whatsapp/v1/message/interactive/url-button/send` | `conn_mod_def::GKO5EUru3JA::MDH-gyUyRL6cH51x_AFZeA` |

### WhatsappTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Template | POST | `/api/ingest/whatsapp/v1/template/send` | `conn_mod_def::GKO5Edeouag::SUCZ71loQ7ariR9BGLxFnA` |

### WhatsAppVideoMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Video Message | POST | `/api/ingest/whatsapp/v1/message/video/send` | `conn_mod_def::GKO5EeKwn6A::5n9iA1lUQZ6nNCCD0mwLEQ` |

### PostbackNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Postback Notifications for Message Delivery Status | POST | `/{{postBackUrl}}` | `conn_mod_def::GKO5DY5coQA::x_7iaTvRSt-nw-SqQQWZ9g` |

### RcsTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Send RCS Template | POST | `/api/ingest/rcs/v1/template/send` | `conn_mod_def::GKO5Dhua6Ig::8G4VKQErRcujHUxr9X2ZDg` |

### RcsVideoMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an RCS Video Message | POST | `/api/ingest/rcs/v1/message/video/send` | `conn_mod_def::GKO5DiEZmdA::9-y7tfUGSHWXzqlTjNKjbw` |

### RcsImageMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an RCS Image Message | POST | `/api/ingest/rcs/v1/message/image/send` | `conn_mod_def::GKO5DiMsdEA::UqbqUJfBT8OaUXTDnYFX7w` |

### Sendflow

| Action | Method | Path | Action id |
|---|---|---|---|
| Introduction to Sendflow | POST | `` | `conn_mod_def::GKO5DpLJb9g::AXyFa86ZSnG46TLTvxza1g` |

### ConditionNode

| Action | Method | Path | Action id |
|---|---|---|---|
| Use the Condition Node in Sendflow | POST | `` | `conn_mod_def::GKO5DpLLteA::shyui8y9Sz6rfb6zWC2Jtw` |

### SendflowExecution

| Action | Method | Path | Action id |
|---|---|---|---|
| Stop a Sendflow Execution | POST | `/api/ingest/sendflow/v1/{{sendflowId}}/stop/{{requestId}}` | `conn_mod_def::GKO5DqumB8g::rY32UH_xQB-qveUhdx_yyQ` |

### SendflowDeliveryReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sendflow Delivery Report | GET | `/api/data/sendflow/v1/delivery-report` | `conn_mod_def::GKO5DqvTn6g::YnMX54CMSKqVkDp7GhtoeQ` |

### SmsMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send SMS Message | POST | `/api/ingest/sms/v1/message/send` | `conn_mod_def::GKO5DzJKFBg::Ss3ffzvXTVKr3brhHWrUKw` |

### WhatsAppInteractiveLocationRequestMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Interactive Location Request Message | POST | `/api/ingest/whatsapp/v1/message/interactive/location-request/send` | `conn_mod_def::GKO5EHtZeUA::rb1HABdyQUersezcUMIUgg` |

### WhatsappReactionMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Reaction Message | POST | `/api/ingest/whatsapp/v1/message/reaction/send` | `conn_mod_def::GKO5EShi5eA::8HQxASz3Tou0K_Xsxm-p3w` |

### WhatsappLocationMessage

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Location Message | POST | `/api/ingest/whatsapp/v1/message/location/send` | `conn_mod_def::GKO5ESlzLQA::Ypirc2OYT-SZoGi5CFcw_Q` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get List of Activities | POST | `/api/v1/collection-records/activity-list/query` | `conn_mod_def::GKO5BHnGsiA::l-5A13RKRXakH5Ep9VnSRQ` |

### ActivitySource

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Activity Source | PATCH | `/api/v1/collection-records/activity-list/{{activityId}}` | `conn_mod_def::GKO5BJ7fjXA::t9ij767hRsulZPSs2HKUnQ` |

### AttributeOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get List of Attribute Options for a Target | GET | `/api/v1/attributes/{{target}}/{{targetId}}/{{attributeId}}/options` | `conn_mod_def::GKO5BeiSXog::ZJkE9bZLSTOpdbA9aN5tVw` |

### AttributeStatusOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Attribute Status Options for a Target Attribute | GET | `/api/v1/attributes/{{target}}/{{targetId}}/{{attributeId}}/status` | `conn_mod_def::GKO5Bene27g::XW-70Of8QwuvCHNc4RbYzg` |

### OtpFlow

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Messages with OTPflow | POST | `/api/v1/campaign/otp-flow` | `conn_mod_def::GKO5BnULZfg::n3VoWfS4SN6Lm-oNHpfThg` |

### EmailAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Email Attachment | POST | `/api/v1/campaign/email/upload` | `conn_mod_def::GKO5BnyZAeA::WwODABTVSaKEAi0f7qT7lA` |

### IncomingRcsMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Incoming RCS Message Webhook | POST | `/` | `conn_mod_def::GKO5BwsqQsA::OT5jbqaCQEmm0W6r-5VE3Q` |

### EmailMessageReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Message Report | GET | `/api/v1/campaign/report/email/{{messageId}}` | `conn_mod_def::GKO5B5zX6og::iiBhcg0ZSjaULy9V6VRpYw` |

### RcsTemplateMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send RCS Template Message | POST | `/api/v1/campaign/rcs/message/template` | `conn_mod_def::GKO5B57dS8A::nxCMNi5YT8GevOcth0qHuA` |

### RcsImageMessage

| Action | Method | Path | Action id |
|---|---|---|---|
| Send RCS Image Message | POST | `/api/v1/campaign/rcs/message/image` | `conn_mod_def::GKO5B-Az62A::j48mjRv4T-KbhNlsbolpeg` |

### SmsCampaignMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send SMS Campaign Message | POST | `/api/v1/campaign/sms/send` | `conn_mod_def::GKO5CGYXO9g::XNxyO2HRSy6lGtrcaAAQsQ` |

### WhatsAppMessageReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get WhatsApp Message Report | GET | `/api/v1/campaign/report/whatsapp/{{messageId}}` | `conn_mod_def::GKO5CGpVz-g::98hP4VBoTk-FJS7qJ6ahiQ` |

This lists 90 of 108 actions. For anything not here, call `search_one_platform_actions` with platform `zixflow`. The full catalog is at https://www.withone.ai/knowledge/zixflow.

## When a call fails

The error comes from Zixflow, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/zixflow

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
