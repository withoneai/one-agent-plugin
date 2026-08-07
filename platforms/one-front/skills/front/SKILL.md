---
name: front
description: Front is a shared inbox and communication platform that brings email, apps, and teammates into a single view. It helps teams manage customer communication and collaborate more effectively. Read and write Front data through One: conversations, contacts, messagetemplatefolders, messagetemplates, teammategroups, contactlists and more, 238 actions with real parameter documentation. Use whenever the user asks to look something up in Front, create or update a record there, or build code against the Front API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: front
  generated-from: one-knowledge-base
---

# Front through One

Front is a shared inbox and communication platform that brings email, apps, and teammates into a single view. It helps teams manage customer communication and collaborate more effectively.

One exposes Front through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `front` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Front is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Front account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conversation by ID | GET | `/conversations/{{conversationId}}` | `conn_mod_def::GJ2jTXPdxws::n7zXh3BoTpaXz74Ahz7P8Q` |
| List a Contact’s Conversations | GET | `/contacts/{{contactId}}/conversations` | `conn_mod_def::GJ2jRlphsuc::FLXDb5BPSoSv_CZ7LVldBA` |
| List a Conversation’s Inboxes | GET | `/conversations/{{conversationId}}/inboxes` | `conn_mod_def::GJ2jT5QG4k0::mKuuFiMbTheuw9q8zXMavw` |
| List a Link’s Conversations | GET | `/links/{{linkId}}/conversations` | `conn_mod_def::GJ2jd69VILA::aNkVcCjKS2iJhg2MfobCxQ` |
| List a Teammate’s Assigned Conversations | GET | `/teammates/{{teammateId}}/conversations` | `conn_mod_def::GJ2jrfJmzH4::8WTNZwZqTmK8fkSib4wOcQ` |
| List an Inbox’s Conversations | GET | `/inboxes/{{inboxId}}/conversations` | `conn_mod_def::GJ2jYloTRXQ::QRFIxoi9Tk6zmmLzRn8v9Q` |
| List Conversations | GET | `/conversations` | `conn_mod_def::GJ2jUQzHCRU::rXxL05EOSvC5ANS1wZCVxg` |
| Search Conversations | GET | `/conversations/search/{{query}}` | `conn_mod_def::GJ2jUqj6D38::dR0zAao-T8GAhkfaBQ1wZg` |
| Add Followers to a Conversation | POST | `/conversations/{{conversationId}}/followers` | `conn_mod_def::GJ2jSi_f4hM::k5TpwBXeSNORcbmlTiXjoA` |
| Add Links to a Conversation | POST | `/conversations/{{conversationId}}/links` | `conn_mod_def::GJ2jSrKymAM::Lq-JbPZrRy-q_tf8fbfsXg` |
| Add Tags to a Conversation | POST | `/conversations/{{conversationId}}/tags` | `conn_mod_def::GJ2jSzfj0Cs::7Ewug0ofTXuS-BX_6CY2Qg` |
| Create a Discussion Conversation | POST | `/conversations` | `conn_mod_def::GJ2jS8IExrU::4yutoO24RRmaIK3PSfNQgw` |

6 more Conversations actions are available through search.

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/contacts/{{contactId}}` | `conn_mod_def::GJ2jRV0C_PY::5QNSv2kPSE-sgvWyoEdKqQ` |
| List a Team’s Contacts | GET | `/teams/{{teamId}}/contacts` | `conn_mod_def::GJ2jR_Mknwg::Hg6GWNlJSGC_eACGLh3Xiw` |
| List a Teammate's Contacts | GET | `/teammates/{{teammateId}}/contacts` | `conn_mod_def::GJ2jSJafFIw::-qedGLGPRoa9QYbi9aeF3w` |
| List an Account’s Contacts | GET | `/accounts/{{accountId}}/contacts` | `conn_mod_def::GJ2jJNnnGmU::5JWPyOfOTEqDef0q1FFZ1w` |
| List Contacts | GET | `/contacts` | `conn_mod_def::GJ2jRwm39NY::i8kYwg_tT7qUlbClBuE-UA` |
| List Contacts in a Contact Group (Deprecated) | GET | `/contact_groups/{{contactGroupId}}/contacts` | `conn_mod_def::GJ2jN1SBBhY::j_NjjaZKSuiZyUoKmUyhuQ` |
| Add a Contact Handle | POST | `/contacts/{{contactId}}/handles` | `conn_mod_def::GJ2jOe4qq5o::izciMHx1SwORGEGTncYR3Q` |
| Create a Contact (Company-Level) | POST | `/contacts` | `conn_mod_def::GJ2jQsarZaE::RX-Y3ZwyS2Ov7g86YIbcEA` |
| Create a Teammate Contact | POST | `/teammates/{{teammateId}}/contacts` | `conn_mod_def::GJ2jRC2bGYU::-RS6XeX0TCSqEYwsNkEVUQ` |
| Delete a Contact | DELETE | `/contacts/{{contactId}}` | `conn_mod_def::GJ2jRKypaDs::U5e1G1GHTBipRdTWRDdTVg` |
| Delete a Contact Handle | DELETE | `/contacts/{{contactId}}/handles` | `conn_mod_def::GJ2jOnLUSyc::gXCrjJIWTV-6cyfo3pAEPw` |
| Merge Contacts | POST | `/contacts/merge` | `conn_mod_def::GJ2jSRVv7UU::2yoyVVh0RkiS3bVrLq736w` |

1 more Contacts actions are available through search.

### MessageTemplateFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Message Template Folder | GET | `/message_template_folders/{{messageTemplateFolderId}}` | `conn_mod_def::GJ2jfVyBVK0::FrknCCnbR5y3u0L1uA166A` |
| List a Message Template Folder’s Child Folders | GET | `/message_template_folders/{{messageTemplateFolderId}}/message_template_folders` | `conn_mod_def::GJ2jfOVJDIc::EuL08HGmTECy1XEcenVZqQ` |
| List a Message Template Folder’s Child Templates | GET | `/message_template_folders/{{messageTemplateFolderId}}/message_templates` | `conn_mod_def::GJ2jg8XaPEo::NJ9R8B2YTv62baNp_gdH5Q` |
| List a Team’s Message Template Folders | GET | `/teams/{{teamId}}/message_template_folders` | `conn_mod_def::GJ2jfwb4RBs::0FQWp8ASTKGoX8tOJ-h85w` |
| List a Teammate’s Message Template Folders | GET | `/teammates/{{teammateId}}/message_template_folders` | `conn_mod_def::GJ2jf53uCBc::PTrM7cyMRteAUJZ3aQ9McA` |
| List Message Template Folders | GET | `/message_template_folders` | `conn_mod_def::GJ2jfnfwNK8::a18D_Bu3Th2J-xQg8TglBA` |
| Create a Child Message Template Folder (in a Parent Folder) | POST | `/message_template_folders/{{messageTemplateFolderId}}/message_template_folders` | `conn_mod_def::GJ2jefgkgzw::Kd_B7poDTKatgkD8gRPnsw` |
| Create a Message Template Folder | POST | `/message_template_folders` | `conn_mod_def::GJ2jerGVPdE::rfE4KWcqSpGaJFVyugysuQ` |
| Create a Team Message Template Folder | POST | `/teams/{{teamId}}/message_template_folders` | `conn_mod_def::GJ2jezqAobc::2kGkTGzRQPuiNulomqDi6g` |
| Create a Teammate’s Message Template Folder | POST | `/teammates/{{teammateId}}/message_template_folders` | `conn_mod_def::GJ2je9x0m7E::8-1ljKmDQRWObkmWdfDfEQ` |
| Delete a Message Template Folder | DELETE | `/message_template_folders/{{messageTemplateFolderId}}` | `conn_mod_def::GJ2jfFQnveA::cOHkJzBYTS2vg3VNRm8RRg` |
| Update a Message Template Folder | PATCH | `/message_template_folders/{{messageTemplateFolderId}}` | `conn_mod_def::GJ2jgC80grw::3e99oZt2TYOpyQbe7LVx4g` |

### MessageTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Message Template Attachment | GET | `/message_templates/{{messageTemplateId}}/download/{{attachmentLinkId}}` | `conn_mod_def::GJ2jLMMMAvY::6wq302E-RIySUlSCS2g--g` |
| Get a Message Template | GET | `/message_templates/{{messageTemplateId}}` | `conn_mod_def::GJ2jhEy7vfQ::6xfgibwyTiKpvLMsyq9SNA` |
| List a Team’s Message Templates | GET | `/teams/{{teamId}}/message_templates` | `conn_mod_def::GJ2jhZRtB9I::vjA3ZVPsS0y0H4eL3L7Hgg` |
| List a Teammate’s Message Templates | GET | `/teammates/{{teammateId}}/message_templates` | `conn_mod_def::GJ2jhmDLdT4::vU-r2Jq_T5K0x5d1xnlG1w` |
| List Message Templates | GET | `/message_templates` | `conn_mod_def::GJ2jhP_95zA::rwU0Ol4TS4yo7c5tVyhU7Q` |
| Create a Child Message Template in a Message Template Folder | POST | `/message_template_folders/{{messageTemplateFolderId}}/message_templates` | `conn_mod_def::GJ2jgLdEikI::659iRVVeTduV77IvsfnBGg` |
| Create a Team Message Template | POST | `/teams/{{teamId}}/message_templates` | `conn_mod_def::GJ2jgc7P0k4::btHJSBxISQGuDwnIeR1F9w` |
| Create a Teammate Message Template | POST | `/teammates/{{teammateId}}/message_templates` | `conn_mod_def::GJ2jgpekMT8::6bQERO8BRkOeb1wa3zPZcA` |
| Create Message Template (Oldest Active Workspace) | POST | `/message_templates` | `conn_mod_def::GJ2jgT3eJDw::t4w6F0kFRbupAXas-_3kWQ` |
| Delete a Message Template | DELETE | `/message_templates/{{messageTemplateId}}` | `conn_mod_def::GJ2jg0MDO_k::q3fTyZ39SHy4kORUPTPD2A` |
| Update a Message Template | PATCH | `/message_templates/{{messageTemplateId}}` | `conn_mod_def::GJ2jhuUenU4::x_w2v5K4QgClB-weyN9QFw` |

### TeammateGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Teammate Group | GET | `/teammate_groups/{{teammateGroupId}}` | `conn_mod_def::GJ2jppmLx7Y::V-DwT4qQRx6XGgfIeHmrUQ` |
| List Company Teammate Groups | GET | `/teammate_groups` | `conn_mod_def::GJ2jqR8187g::42H1JyoTRe-EzWOuQToXrg` |
| Add Inboxes to a Teammate Group | POST | `/teammate_groups/{{teammateGroupId}}/inboxes` | `conn_mod_def::GJ2jo3FR8OE::NOqfLlIpSjG-N2Mj4YPLpQ` |
| Add Teammates to a Teammate Group | POST | `/teammate_groups/{{teammateGroupId}}/teammates` | `conn_mod_def::GJ2jpAlxmgI::D4L80SlDRjiglbGX6dJA1w` |
| Add Teams to a Teammate Group | POST | `/teammate_groups/{{teammateGroupId}}/teams` | `conn_mod_def::GJ2jpJdxcEE::nIa4C2kSScywVFJ3DV1UUw` |
| Create a Teammate Group | POST | `/teammate_groups` | `conn_mod_def::GJ2jpWLMtHY::ke0bRRCMQ8Cp5O67id2a8A` |
| Delete a Teammate Group | DELETE | `/teammate_groups/{{teammateGroupId}}` | `conn_mod_def::GJ2jpdyv9ZU::ZSIjxTtCQ8SX9omPCsAnsw` |
| Remove a Teammate Group’s Team Inboxes | DELETE | `/teammate_groups/{{teammateGroupId}}/inboxes` | `conn_mod_def::GJ2jqcmbs3g::N_SBPhhAQ9iFVKj_8ofVwQ` |
| Remove Teammates from a Teammate Group | DELETE | `/teammate_groups/{{teammateGroupId}}/teammates` | `conn_mod_def::GJ2jqlVJUIk::Uzmmw9qFRXO3WudYt1JDpg` |
| Remove Teams from a Teammate Group | DELETE | `/teammate_groups/{{teammateGroupId}}/teams` | `conn_mod_def::GJ2jqwv8pug::se3Jg7jEQHyShXcTbiGLJA` |
| Update a Teammate Group | PATCH | `/teammate_groups/{{teammateGroupId}}` | `conn_mod_def::GJ2jq5rC0m4::i2HR6WrXSRSdG8BgSC5AUw` |

### ContactLists

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Contact List’s Contacts | GET | `/contact_lists/{{contactListId}}/contacts` | `conn_mod_def::GJ2jPukYTng::vaTgQ8KMQfujdTr5Isz2_Q` |
| List a Team’s Contact Lists | GET | `/teams/{{teamId}}/contact_lists` | `conn_mod_def::GJ2jP2HnHjk::-LxfIAAQQAeceletRPIIXw` |
| List a Teammate's Contact Lists | GET | `/teammates/{{teammateId}}/contact_lists` | `conn_mod_def::GJ2jQA5W2IM::fn2lCpSvThGM-ksTpUYebg` |
| List Contact Lists | GET | `/contact_lists` | `conn_mod_def::GJ2jPlLxK8g::YR1d9NRMTOah5iFYufeC2w` |
| Add Contacts to a Contact List | POST | `/contact_lists/{{contactListId}}/contacts` | `conn_mod_def::GJ2jOzv-bFI::XjSnoYNkTkmM-lxDme-MrQ` |
| Create a Contact List | POST | `/contact_lists` | `conn_mod_def::GJ2jPBwNnSc::sTpX7ms1T--7boxpcGgmRA` |
| Create a Team's Contact List | POST | `/teams/{{teamId}}/contact_lists` | `conn_mod_def::GJ2jPPBAo1Q::o-cW9grKSUW9F5sINVdN2w` |
| Create a Teammate’s Contact List | POST | `/teammates/{{teammateId}}/contact_lists` | `conn_mod_def::GJ2jPXOk1p8::TFadoaalSH2N65CPG8SCKg` |
| Delete a Contact List | DELETE | `/contact_lists/{{contactListId}}` | `conn_mod_def::GJ2jPefUD98::k9PjaHKAQxeogJHMXfVAUA` |
| Remove Contacts from a Contact List | DELETE | `/contact_lists/{{contactListId}}/contacts` | `conn_mod_def::GJ2jQL7Go-g::8J18wI42SNijpAH1wV2Oqg` |

### ContactGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team’s Contact Groups (Deprecated) | GET | `/teams/{{teamId}}/contact_groups` | `conn_mod_def::GJ2jOEusSTY::xt3YgujmRH-Db8n59zL8rg` |
| List a Teammate’s Contact Groups (Deprecated) | GET | `/teammates/{{teammateId}}/contact_groups` | `conn_mod_def::GJ2jONfNUac::O3ZobAX4SWeklsSxv1NeKQ` |
| List Contact Groups (Deprecated) | GET | `/contact_groups` | `conn_mod_def::GJ2jN9YVWrQ::nLUAiiW3TySOQI2pTddlNg` |
| Add Contacts to a Contact Group | POST | `/contact_groups/{{contactGroupId}}/contacts` | `conn_mod_def::GJ2jNE0o_Mw::Zn-2R-JASpKlkLoHsdFFcA` |
| Create a Contact Group (Deprecated) | POST | `/contact_groups` | `conn_mod_def::GJ2jNMiUtIg::BR68lmF1Rv6pNuQIYXyR6A` |
| Create a Team Contact Group (Deprecated) | POST | `/teams/{{teamId}}/contact_groups` | `conn_mod_def::GJ2jNU4FEbg::9AKbncBhQKWEMeideXLIcQ` |
| Create a Teammate Contact Group (Deprecated) | POST | `/teammates/{{teammateId}}/contact_groups` | `conn_mod_def::GJ2jNj95f9U::UI20W4XTQtuKKExEN-Pe6A` |
| Delete a Contact Group | DELETE | `/contact_groups/{{contactGroupId}}` | `conn_mod_def::GJ2jNrb2Dog::XYiM5RNeQzOejGkL5AZzcg` |
| Remove Contacts from a Contact Group | DELETE | `/contact_groups/{{contactGroupId}}/contacts` | `conn_mod_def::GJ2jOWvXEqY::SdFtLM1DS_2vkBCoeUI3fw` |

### Inboxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Inbox | GET | `/inboxes/{{inboxId}}` | `conn_mod_def::GJ2jX60XMS4::UOfHNWk4TS28dxxES0wc-A` |
| List a Team’s Inboxes | GET | `/teams/{{teamId}}/inboxes` | `conn_mod_def::GJ2jZApZmxw::mjRA4V8QTASahKwoEPPSJg` |
| List a Teammate Group’s Team Inboxes | GET | `/teammate_groups/{{teammateGroupId}}/inboxes` | `conn_mod_def::GJ2jpzxwoPY::-oCV6YK_TTirQDfI1IktRA` |
| List a Teammate’s Inboxes | GET | `/teammates/{{teammateId}}/inboxes` | `conn_mod_def::GJ2jroCqKcA::x6-2gyrvRkug2tGXEBISJw` |
| List Inboxes | GET | `/inboxes` | `conn_mod_def::GJ2jYxHjoEo::FOEyXr8ASiSUrL9fJaK8SA` |
| Add Inbox Access (Add Teammates to an Inbox) | POST | `/inboxes/{{inboxId}}/teammates` | `conn_mod_def::GJ2jXWL-fFg::tDs_36cyS3WNIylys2KJ9g` |
| Create a Team Inbox | POST | `/teams/{{teamId}}/inboxes` | `conn_mod_def::GJ2jXk3Lz4A::A7h0BpoCR66pC_QZYCdnSg` |
| Create an Inbox | POST | `/inboxes` | `conn_mod_def::GJ2jXd2Yre4::KsN1keMdSriHtRNHeq63FQ` |
| Remove Teammates' Access to an Inbox | DELETE | `/inboxes/{{inboxId}}/teammates` | `conn_mod_def::GJ2jZTpYaFQ::fEg4KnVRR3yGISnk64O32g` |

### KnowledgeBaseArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Knowledge Base Article | GET | `/knowledge_base_articles/{{articleId}}` | `conn_mod_def::GJ2jZwHuxF0::6nRbhs0YSTesomWAsOp2YA` |
| Get a Knowledge Base Article’s Content (Default Locale) | GET | `/knowledge_base_articles/{{articleId}}/content` | `conn_mod_def::GJ2jZ4E_H-I::p8c3DGMlQl-HsI5ANPNZrg` |
| Get a Knowledge Base Article’s Localized Content | GET | `/knowledge_base_articles/{{articleId}}/locales/{{locale}}/content` | `conn_mod_def::GJ2jaBvBGI0::EiIksuSVQY-5rNLWVfvOpw` |
| List a Knowledge Base’s Articles | GET | `/knowledge_bases/{{knowledgeBaseId}}/articles` | `conn_mod_def::GJ2jaa9PiTs::EslEdBvCSNyqmC_2Tm1spw` |

5 more KnowledgeBaseArticles actions are available through search.

This lists 90 of 238 actions. For anything not here, call `search_one_platform_actions` with platform `front`. The full catalog is at https://www.withone.ai/knowledge/front.

## When a call fails

The error comes from Front, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/front

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
