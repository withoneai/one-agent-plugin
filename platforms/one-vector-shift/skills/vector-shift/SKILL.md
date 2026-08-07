---
name: vector-shift
description: VectorShift is an AI workflow and agent-building platform that provides tools, APIs, and integrations for connecting large language models with enterprise data, documents, and applications, allowing teams to build, deploy, and automate retrieval, chat, and task-oriented AI systems. Read and write VectorShift data through One: pipelines, agents, files, integrations, vectorstores, automations and more, 586 actions with real parameter documentation. Use whenever the user asks to look something up in VectorShift, create or update a record there, or build code against the VectorShift API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: vector-shift
  generated-from: one-knowledge-base
---

# VectorShift through One

VectorShift is an AI workflow and agent-building platform that provides tools, APIs, and integrations for connecting large language models with enterprise data, documents, and applications, allowing teams to build, deploy, and automate retrieval, chat, and task-oriented AI systems.

One exposes VectorShift through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `vector-shift` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm VectorShift is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real VectorShift account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Pipeline | GET | `/api/pipelines/{{pipelineId}}` | `conn_mod_def::GKtlB3DJXbA::eUFfRMCwTkKFWPYgqpw5qA` |
| Delete Pipeline `test-analytics-3` | GET | `/api/pipelines/test-analytics-3` | `conn_mod_def::GKtlBtjYZLA::yaie7SLZSJiI_slvZrELPw` |
| Delete Pipelines Api | GET | `/api/pipelines/test-analytics` | `conn_mod_def::GKtlBtigVSA::sr2YJmmySLGyy4JXIlGLpQ` |
| Delete Pipelines Api | GET | `/api/pipelines/test-analytics-5` | `conn_mod_def::GKtlBtjKheg::HhnL6JAaTjaruKxPBAfwBA` |
| Delete Pipelines Api | GET | `/api/pipelines/{{pipelineId}}` | `conn_mod_def::GKtlBtjSr8A::HOzUgui8QDi26KDWcurVrQ` |
| Delete Pipelines Api | GET | `/api/pipelines/{{pipelineId}}` | `conn_mod_def::GKtlBuuMocA::NS-JX6OBQI-b9YSv2bBkrA` |
| Fetch Pipeline | GET | `/v1/api/pipelines/fetch` | `conn_mod_def::GKtlDXn7dwA::J9fw001QTTO9Vcs6MmYe9A` |
| Get Favorite Pipelines | GET | `/v1/pipelines/favorites` | `conn_mod_def::GKtlFmfezAg::KQfiAZwtQuqaK6pG7KI7sA` |
| Get My Pipelines | GET | `/pipelines/my` | `conn_mod_def::GKtlHPBXHDg::00SBUKseTZqprMKufFPXRA` |
| Get Pipeline By ID | GET | `/pipelines/{{pipelineId}}/pipeline` | `conn_mod_def::GKtlHvAYW2g::PdkqzYWeSauBq6xyirLIew` |
| Get Pipelines | GET | `/pipelines` | `conn_mod_def::GKtlID_QHPg::wMfeOmroRpaiYHDBStHq0g` |
| Get Pipelines Accessing Variable Set | GET | `/variable-sets/pipelines` | `conn_mod_def::GKtlIEJiyhA::ZMHrzyJsT_iLhEiSLsZcug` |

26 more Pipelines actions are available through search.

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Agent API | GET | `/v1/api/agents/fetch` | `conn_mod_def::GKtlCtDCWkg::d9971QXlR865-_8ClVqtcA` |
| Get Agent By ID | GET | `/agents/id/{{agentId}}` | `conn_mod_def::GKtlDhhb0ng::14ude8ElSOqEvP5tEhdvJg` |
| Get Favorite Agents | GET | `/agents/favorites/` | `conn_mod_def::GKtlFmYPFRg::-LbSRk2RSpyO_N8hnCWC1g` |
| Get My Agents | GET | `/agents/my` | `conn_mod_def::GKtlHOy5Bhg::lRu3UOw1RemnfQ23DHV13g` |
| Get Published Agents | GET | `/agents/published` | `conn_mod_def::GKtlILwezlg::un-VHLWISg2ZfQE0vZEKSA` |
| List Agents | GET | `/agents` | `conn_mod_def::GKtlDhTzbnA::EDH24cMIR0GVOjwZbBMkZg` |
| Add Agent | POST | `/v1/agents/add` | `conn_mod_def::GKtk8mmHlMg::YrH2fJj8SgKDposd2CF8CA` |
| Add Agent | POST | `/api/agents/add` | `conn_mod_def::GKtk8l2_Apg::IANAD1H1SrOud3HFhAsWjA` |
| Add Agent To Favorites | POST | `/agents/favorites/add` | `conn_mod_def::GKtk8mm3zIg::GEIfkuGBRMS4EaKZBQbLxA` |
| Add Agent To Imported | POST | `/agents/imported/add` | `conn_mod_def::GKtk8mSGdAg::wQdVJD6NQzqMbJPJ0JdilQ` |
| Add Shared Agents To My Agents | POST | `/agents/shared/add-to-agents` | `conn_mod_def::GKtk9bbBEYA::rj1R5bDvReKxW3MlnOF8vw` |
| Delete Agents | DELETE | `/v1/agents/delete` | `conn_mod_def::GKtlAbDMVzg::HzuF5h77QzqLSDptv6NUpw` |

9 more Agents actions are available through search.

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File | GET | `/files/download/{{fileId}}` | `conn_mod_def::GKtlCUSqxVA::YvuW9TLzR8GpTvx5fQUAbQ` |
| Download File | GET | `/api/files/download/{{fileId}}` | `conn_mod_def::GKtlCUs0Vug::HwCW3Z-1Sp-uVNN1gQDZkw` |
| Fetch Files | GET | `/v1/api/files/fetch` | `conn_mod_def::GKtlDDWA_2A::JLOswkPbQveJpv-MRa5w6w` |
| Fetch Files By Ids | GET | `/api/files/fetch-by-ids` | `conn_mod_def::GKtlCrsbmPg::CeERFQB1RfCasy9xPRiuWg` |
| Get Files | GET | `/api/files` | `conn_mod_def::GKtlFm0zzXA::0fTON5sSRKuud9CSV3Bdfg` |
| List Files | GET | `/files` | `conn_mod_def::GKtlFmtwAUg::nr-3VRuyQkCB7zEpZ5nUKQ` |
| Add Database | POST | `/files/add-database` | `conn_mod_def::GKtk8vRQBgg::cNvLAcZxR1uCny7G27smYg` |
| Add File | POST | `/files/upload` | `conn_mod_def::GKtk83euq1g::alb5VftdQC-Zd5wfLeXyxA` |
| Add File | POST | `/v1/api/files/upload` | `conn_mod_def::GKtk83vIiPg::79RK04PYQKCkC6XHlwPEwQ` |
| Add File Temp Anon | POST | `/v1/files/temp/upload-anon` | `conn_mod_def::GKtk9EfKGxA::Jboe3XQJTMylbtRC0Q1Xsw` |
| Add Temporary Files | POST | `/v1/files/temp/upload` | `conn_mod_def::GKtk84aH2Og::a92joP0mQt-g8xME73d-wQ` |
| Delete a Temp File | DELETE | `/files/temp/delete/{{fileKey}}` | `conn_mod_def::GKtlBYkIaAA::6pfcORBHQt2LQUNa7hM6cA` |

5 more Files actions are available through search.

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch an Integration by Integration ID | GET | `/api/integrations/fetch/{{integrationId}}` | `conn_mod_def::GKtlDMYGGTA::5rUju6KeSyeAja6Jg1-_eQ` |
| Fetch Integration Api | GET | `/api/integrations/fetch` | `conn_mod_def::GKtlDN0B8tA::JLcnMqkXSrmnLeu1bWpfIw` |
| Get a Tree for an Integration | GET | `/integrations/metadata/get-tree/{{integrationId}}` | `conn_mod_def::GKtlJfl4KrA::02_HxeSxR8Ckt2GyJrYm1w` |
| Get Children Integration | GET | `/integrations/metadata/children/{{integrationId}}` | `conn_mod_def::GKtlEird-oA::wrwhDLDTSVeXUFR__fuMDA` |
| Get Integration Item IDs for an Integration | GET | `/api/integrations/get-item-ids/{{integrationId}}` | `conn_mod_def::GKtlGjgg0xg::w5lJA5FxSGC1Fpoqzz4lQw` |
| Get Integration Status | GET | `/integrations/status/{{integrationId}}` | `conn_mod_def::GKtlGgZ1lYg::sDQ_uGm7SqW8k-jHTZ0IbQ` |
| Get Integrations | GET | `/integrations` | `conn_mod_def::GKtlGed60DA::ApPovhvjTV6aK6-Sxsaz7w` |
| Get Most Recent Integration | GET | `/integrations/{{integrationType}}` | `conn_mod_def::GKtlHO_r_lg::HmhM0a97SPSAE3mC-6ErsA` |
| Get References To Integration | GET | `/integrations/references/{{integrationId}}` | `conn_mod_def::GKtlIY9e8fg::vybYymwMS0-FOoYDnBq20A` |
| List Integrations | GET | `/v1/api/integrations/list` | `conn_mod_def::GKtlLCQ_KLA::ctwsnmD3RDakkxX1s7wRow` |
| Microsoft OAuth2 Callback for Integrations | GET | `/integrations/microsoft/oauth2callback` | `conn_mod_def::GKtlMO_EbcA::TYXHvQhZREOxCasBQnCV0A` |
| Add Integration | POST | `/v1/integrations/create` | `conn_mod_def::GKtk9EHQYbA::mlY1lEjFR4iqvJxj7BN9Xg` |

5 more Integrations actions are available through search.

### Vectorstores

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Vectorstore | GET | `/v1/api/vectorstores/fetch` | `conn_mod_def::GKtlDY6bMGA::nsJ_RXZWRiSME2ToL43-Jw` |
| Get Vectorstore Filter Details | GET | `/vectorstores/get-vectorstore-filter-details/{{vectorstoreIds}}` | `conn_mod_def::GKtlKID5Qog::isQDgE1_Sp6O0kZ6Fw00Qw` |
| Get Vectorstore Filter Details | GET | `/vectorstores/get-vectorstore-folders/{{vectorstoreIds}}` | `conn_mod_def::GKtlKSCF1Xg::1XVf3JTmQdOLLcsDEbGCbw` |
| Get Vectorstores Api | GET | `/api/knowledge-bases` | `conn_mod_def::GKtlKSIO6mA::lZu-Bpy6SseKz_Jyebu4YA` |
| List Vectorstores | GET | `/vectorstores` | `conn_mod_def::GKtlKRubxvg::Za56wIEcRFa3LNPjBspWDA` |
| List Vectorstores | GET | `/api/vectorstores` | `conn_mod_def::GKtlKTNpjsg::2UkOO-lSSKiZsYqo0GCDLQ` |
| Test Vectorstore API | GET | `/api/vectorstores/test` | `conn_mod_def::GKtlPMOsJrg::K1GfAuQBTWuN0IJMt-3WuQ` |
| Add Documents to a Vectorstore | POST | `/v1/vectorstores/add-documents` | `conn_mod_def::GKtk8u9gG4g::Zo8fJ22iR4mpcCwcZDRDsw` |
| Add Vectorstore | POST | `/v1/api/vectorstores/add` | `conn_mod_def::GKtk9kJABWg::Phz1xXNBR6OIv_rfC7DV3Q` |
| Add Vectorstore | POST | `/vectorstores/add` | `conn_mod_def::GKtk9j3B_yg::SBP05GN9TRCsmOWdVtOcsw` |
| Delete Vectorstore | DELETE | `/vectorstores/delete` | `conn_mod_def::GKtlCBhP6rg::yLJYEzfaSAyu3zyHw3QdJQ` |
| Load a Vectorstore | POST | `/v1/api/vectorstores/load` | `conn_mod_def::GKtlLQT51EA::xVoDb7ccQzO1OK8GiFdq8Q` |

5 more Vectorstores actions are available through search.

### Automations

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Automation API | GET | `/v1/api/automations/fetch` | `conn_mod_def::GKtlCrfV0FA::y117mBiOTOmsCBw_BCOduA` |
| Get an Automation Payload | GET | `/automations/get-payloads/{{automationId}}` | `conn_mod_def::GKtlHm8w4Dg::qBEBnJNDSzCFym7j5ol-QA` |
| Get Automations | GET | `/automations` | `conn_mod_def::GKtlD5x-Zsg::6WL0lnYDTySaruYjHaXtxQ` |
| Get Payload for an Automation | GET | `/api/automations/get-payloads/{{automationId}}` | `conn_mod_def::GKtlHlz0cwg::KOTdoOquSUm7yNE9U4At6A` |
| List Automations | GET | `/v1/api/automations/list` | `conn_mod_def::GKtlEK25xiA::SCbsgeSFQTe_pHWF3shkiA` |
| Retrieve an Automation Record | GET | `/api/automations/retrieve-record/{{automationId}}` | `conn_mod_def::GKtlN7rSB7A::E9UqCNsRTey95c1KlwNM2A` |
| Retrieve Record | GET | `/automations/retrieve-record` | `conn_mod_def::GKtlOALV-UA::hhGVtTX_SJCapzSNz-eZFA` |
| Create Automation | POST | `/v1/api/automations/create` | `conn_mod_def::GKtk_4zK6Xg::DPp1_M5tTd6nt7iGYiCtIg` |
| Create Automation | POST | `/automations/create` | `conn_mod_def::GKtk_3a_FSg::RF493OZ_TbmF7UU8drByMw` |
| Delete an Automation | DELETE | `/api/automations/delete/{{automationId}}` | `conn_mod_def::GKtlAs2X14g::J0ZLmr2BQPeIELvzUaRR7w` |
| Delete Automations | DELETE | `/v1/automations/delete` | `conn_mod_def::GKtlAoC_eog::3-uRzdyqTnKdwMnifsF-Tg` |
| Deploy an Automation | POST | `/automations/deploy/{{automationId}}` | `conn_mod_def::GKtlCLbn_9A::WgAFWCtJQm-aR8qnW6FwuA` |

4 more Automations actions are available through search.

### Chatbots

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Chatbot API | GET | `/v1/api/chatbots/fetch` | `conn_mod_def::GKtlCtCRsUA::PbvXfFcXRJq8mRxgULFHMg` |
| Get Browser Extension Chatbots | GET | `/chatbots/browser-extension-chatbots` | `conn_mod_def::GKtlEXUnRXA::xiHPR8a8SYWAddtIx7BNDw` |
| Get Chatbot | GET | `/chatbots/{{id}}` | `conn_mod_def::GKtlEhPqTqA::6zOff5Y1Su6eYzljvX3TTA` |
| Get Chatbots | GET | `/chatbots` | `conn_mod_def::GKtlEfo8zjg::08tgYsQtRN27Tx3nuVsJzA` |
| Get Deployed Chatbot | GET | `/chatbots/deployed/{{chatbotId}}` | `conn_mod_def::GKtlFAqiVjg::QaFsvxImRS65-BAUkh2EEA` |
| Create Chatbot | POST | `/v1/chatbots/create` | `conn_mod_def::GKtk_8Zpfeg::d9TutU-MQQ-bBYTJf37ufA` |
| Delete Chatbot | DELETE | `/chatbots/delete` | `conn_mod_def::GKtlAoRfxxA::izxRqx6dSGStMxkShZVOUg` |
| Deploy Chatbot | POST | `/chatbots/deploy` | `conn_mod_def::GKtlCKfqjRg::FfFYBVCFRsOjhgM-Ovu8EA` |
| Run Chatbot API | POST | `/api/chatbots/run` | `conn_mod_def::GKtlOAE3ZHA::bRQcVOTfQz2_rMwqfjXT3g` |
| Undeploy a Chatbot | DELETE | `/chatbots/undeploy/{{chatbotId}}` | `conn_mod_def::GKtlPMay6pA::1Tk4QFs9Qj2So0N_ZTt75A` |
| Update a Chatbot's Slack Configuration | POST | `/v1/chatbots/update/slack` | `conn_mod_def::GKtlPnJzwNg::hp44bWm1Rj211S-ZMVwTSw` |
| Update Chatbot Access | POST | `/v1/chatbots/update/access` | `conn_mod_def::GKtlPm5HdHg::tq3haMd2QKepfAKsxAZvhw` |

3 more Chatbots actions are available through search.

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Pipeline Output for a Form Run | GET | `/forms/output/download/{{formId}}/{{pipelineRunId}}/{{outputName}}` | `conn_mod_def::GKtlCVBbS0A::GExVV53OSxumNg71qcOtgQ` |
| Fetch Form API | GET | `/v1/api/forms/fetch` | `conn_mod_def::GKtlDM1MpbA::Xd0s1ziuRwK29dhbCIHmoA` |
| Get a Deployed Form | GET | `/forms/deployed/{{formId}}` | `conn_mod_def::GKtlFKLTA9A::L9r7C8OSTkiqEqBq3_gjkA` |
| Get Form | GET | `/forms/{{id}}` | `conn_mod_def::GKtlFyHLcjg::Q1rgOv4DSxmDpqDws91_kg` |
| Get Forms | GET | `/forms` | `conn_mod_def::GKtlF-dBW5A::9td_y_NyRiu8I8gAyoByxg` |
| Add File Temp | POST | `/forms/temp/upload` | `conn_mod_def::GKtk87t4mNA::18N-jPifT_ysZmIM3qt8dQ` |

8 more Forms actions are available through search.

This lists 90 of 586 actions. For anything not here, call `search_one_platform_actions` with platform `vector-shift`. The full catalog is at https://www.withone.ai/knowledge/vector-shift.

## When a call fails

The error comes from VectorShift, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/vector-shift

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
