---
name: openai
description: OpenAI is an AI research and deployment company focused on ensuring that artificial general intelligence benefits all of humanity. It's known for developing models like GPT for a wide range of applications. Read and write OpenAI data through One: skills, videos, responses, threadruns, organizationcertificates, finetuningjobs and more, 241 actions with real parameter documentation. Use whenever the user asks to look something up in OpenAI, create or update a record there, or build code against the OpenAI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: openai
  generated-from: one-knowledge-base
---

# OpenAI through One

OpenAI is an AI research and deployment company focused on ensuring that artificial general intelligence benefits all of humanity. It's known for developing models like GPT for a wide range of applications.

One exposes OpenAI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `openai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OpenAI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OpenAI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Skills

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Skill Version Zip Bundle | GET | `/skills/{{skillId}}/versions/{{version}}/content` | `conn_mod_def::GJ569N1caSc::ysGPxYJYRyuyfBqFT5zCHQ` |
| Download a Skill’s Zip Bundle (Skill Content) | GET | `/skills/{{skillId}}/content` | `conn_mod_def::GJ569K4m6aA::fDMw-RVFQLaaAysmdAqE4A` |
| Get a Skill Version | GET | `/skills/{{skillId}}/versions/{{version}}` | `conn_mod_def::GJ569XlfMTI::MuCtQkGUQJKTNo9cn7kwog` |
| List Skills | GET | `/v1/skills` | `conn_mod_def::GJ569XbmnWg::oujNut0sRJKlXzm77KyeQA` |
| Retrieve a Skill by ID | GET | `/skills/{{skillId}}` | `conn_mod_def::GJ569Xf5dDg::7nsBUJQaQVK1xKtSx1KNEA` |
| Create a Skill | POST | `/skills` | `conn_mod_def::GJ569Pu-T78::o8O-qdIIQga40ds9W6jiaQ` |
| Delete a Skill | DELETE | `/skills/{{skillId}}` | `conn_mod_def::GJ569JHmhlY::NDnXbS_ATdCNg5tKDRJLBw` |
| Delete a Skill Version | DELETE | `/skills/{{skillId}}/versions/{{version}}` | `conn_mod_def::GJ569KyjIa4::z7AtgO9DTqKa-FTeWENaZg` |
| Update a Skill’s Default Version Pointer | POST | `/skills/{{skillId}}` | `conn_mod_def::GJ569YfS6No::m19rmwxfR_6nSZW2m8ogCA` |

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Video Job’s Rendered Content (Bytes) | GET | `/videos/{{videoId}}/content` | `conn_mod_def::GJ56_NYDlII::ACTPn1niRoG4y_I3KzPT5g` |
| Get a Video’s Latest Metadata | GET | `/videos/{{videoId}}` | `conn_mod_def::GJ56_OU6OD0::xcRtlPJ2Qp-D8D0EpyDOcw` |
| List Recently Generated Videos (Current Project) | GET | `/videos` | `conn_mod_def::GJ56_QQDUuA::vulhGD1hStSF8BmEPGxTWg` |
| Create a Remix of a Completed Video | POST | `/videos/{{videoId}}/remix` | `conn_mod_def::GJ56_Db0K6A::8wlhIYdLQ3magDBsLDPWWg` |
| Create a Video Edit Job | POST | `/videos/edits` | `conn_mod_def::GJ56_F0g6IM::UAWDWvWjRP-JNZw7uUa3qw` |
| Create a Video Extension (Extend a Completed Video) | POST | `/videos/extensions` | `conn_mod_def::GJ56_M6bvbE::hSDNYblWTse-lwJA3f0i9w` |
| Create a Video Generation Job | POST | `/videos` | `conn_mod_def::GJ56_DyC5d8::AopCK5Z0R0iXLzGmP4opAQ` |
| Delete a Video | DELETE | `/videos/{{videoId}}` | `conn_mod_def::GJ56_XVPlek::IdhlMDCWRlq5XEweSVYiiw` |

### Responses

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Response’s Input Items | GET | `/responses/{{responseId}}/input_items` | `conn_mod_def::GJ5682n1Wds::0YkmKHClSryngM_tNM77Bw` |
| Retrieve a Response by ID | GET | `/responses/{{responseId}}` | `conn_mod_def::GJ568rQc9jY::hAbGVlVxTuac1mNDxP4MaQ` |
| Cancel a Response | POST | `/responses/{{responseId}}/cancel` | `conn_mod_def::GJ568p7WmAk::inoh5CU1QyKF_8v5e3OteA` |
| Compact a Conversation (Create a Compacted Response) | POST | `/responses/compact` | `conn_mod_def::GJ565DLtl_Y::79jNLQYES_e1w41-flPOyw` |
| Create a Model Response | POST | `/responses` | `conn_mod_def::GJ568jw2GrA::IvtqqG1rQeeY6KNCAe3gPQ` |
| Delete a Response | DELETE | `/responses/{{responseId}}` | `conn_mod_def::GJ568k1Sgfc::ufPcUob2SCiARMt6qW5Ryw` |
| Get Input Token Counts for a Response Request | POST | `/responses/input_tokens` | `conn_mod_def::GJ5656Pur7k::KnQI3-GHTwOoUWSpdU1-Ew` |

### ThreadRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Thread’s Runs | GET | `/threads/{{threadId}}/runs` | `conn_mod_def::GJ563FvqmZE::z3nzDwT2RrusVuPOdAzIBw` |
| Retrieve a Thread Run | GET | `/threads/{{threadId}}/runs/{{runId}}` | `conn_mod_def::GJ562s04zLE::WZDwST3jTHKtGH-EAhARWQ` |
| Cancel a Thread Run | POST | `/threads/{{threadId}}/runs/{{runId}}/cancel` | `conn_mod_def::GJ562WF4NkM::NZMY5mTGS9OZLYlAIVL0Lw` |
| Create a Run for a Thread | POST | `/threads/{{threadId}}/runs` | `conn_mod_def::GJ562XBIIO8::uzIymtDvTPOKRLm2GXTUTQ` |
| Modify a Thread Run | POST | `/threads/{{threadId}}/runs/{{runId}}` | `conn_mod_def::GJ562t0vORg::jKVdFHsXT8KZeYbpCwtneg` |
| Submit Tool Outputs to a Thread Run | POST | `/threads/{{threadId}}/runs/{{runId}}/submit_tool_outputs` | `conn_mod_def::GJ563FH9fxI::VlJE6qxTS-uGTtc8Vo0nbQ` |

### OrganizationCertificates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organization Certificates | GET | `/organization/certificates` | `conn_mod_def::GJ563ovCTzc::-NYUM97bSS6umA9ZHrw45g` |
| Retrieve an Organization Certificate | GET | `/organization/certificates/{{certificateId}}` | `conn_mod_def::GJ563m01SuM::u1B4EulVSuyUOZKHibFpyg` |
| Activate Organization Certificates | POST | `/organization/certificates/activate` | `conn_mod_def::GJ563flU9jA::73OJ1T1jSn6IIhZiJNluSQ` |
| Deactivate Organization Certificates | POST | `/organization/certificates/deactivate` | `conn_mod_def::GJ563ej8UKM::ctWoEJ1HRciHHcC11KFMAA` |
| Delete an Organization Certificate | DELETE | `/organization/certificates/{{certificateId}}` | `conn_mod_def::GJ563nfcym0::VbautgRtSnqi16MJVJaFmg` |
| Upload an Organization Certificate | POST | `/organization/certificates` | `conn_mod_def::GJ563wBs6eI::Uoc52-rdSrqm8IHB_S8ilA` |

### FineTuningJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization’s Fine-Tuning Jobs | GET | `/fine_tuning/jobs` | `conn_mod_def::GJ5646W8Kt8::A-Vym6RXSleC38rF5nWS_g` |
| Retrieve a Fine-Tuning Job | GET | `/fine_tuning/jobs/{{fineTuningJobId}}` | `conn_mod_def::GJ564uMs6dU::0js-LTjTSiWD27VIDdh71Q` |
| Cancel a Fine-Tuning Job | POST | `/fine_tuning/jobs/{{fineTuningJobId}}/cancel` | `conn_mod_def::GJ5648LZ83A::9gAUfBFVR4WS6Vhfq75u9A` |
| Create a Fine-Tuning Job | POST | `/v1/fine_tuning/jobs` | `conn_mod_def::GJ564u8xzHo::qh8USEuMSHqCnrPOvSp7OQ` |
| Pause a Fine-Tuning Job | POST | `/fine_tuning/jobs/{{fineTuningJobId}}/pause` | `conn_mod_def::GJ5646pXig4::u4tDYxcATzS7s9Yj8uEsxA` |
| Resume a Fine-Tuning Job | POST | `/fine_tuning/jobs/{{fineTuningJobId}}/resume` | `conn_mod_def::GJ565Dus5J4::ysu9WbZlS7SdnwaFBZEWNg` |

### VectorStores

| Action | Method | Path | Action id |
|---|---|---|---|
| List Vector Stores | GET | `/vector_stores` | `conn_mod_def::GJ56-7jqcqs::hPIhhCKfTriT1zS4BzioVg` |
| Retrieve a Vector Store | GET | `/vector_stores/{{vectorStoreId}}` | `conn_mod_def::GJ56-r01vWU::e2V6obHwRyil2FzBsOwsOg` |
| Create a Vector Store | POST | `/vector_stores` | `conn_mod_def::GJ56-kCsg2M::6swsNFPSQ3uMcme3t0G5Ow` |
| Delete a Vector Store | DELETE | `/vector_stores/{{vectorStoreId}}` | `conn_mod_def::GJ56-j4xHCk::emv0UcwrRQGKI65D2nNAKg` |
| Modify a Vector Store | POST | `/vector_stores/{{vectorStoreId}}` | `conn_mod_def::GJ56-r3CcZE::QVPGSscaRB-q1DZye635iA` |
| Search a Vector Store | POST | `/vector_stores/{{vectorStoreId}}/search` | `conn_mod_def::GJ56-6CQ5eU::4KQT5rbaRfqSgaJbjYiOBQ` |

### ThreadMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Thread’s Messages | GET | `/threads/{{threadId}}/messages` | `conn_mod_def::GJ5629Ibd0w::DA_k-ovlQi2925G2Bu82lw` |
| Retrieve a Thread Message | GET | `/threads/{{threadId}}/messages/{{messageId}}` | `conn_mod_def::GJ562uA8YSc::lIutoU8CSFihF5mJ-Z79ow` |
| Create a Thread Message | POST | `/threads/{{threadId}}/messages` | `conn_mod_def::GJ562V1dJiw::2Rin_G2BSOq2UQGZ_k1udg` |
| Delete a Thread Message | DELETE | `/threads/{{threadId}}/messages/{{messageId}}` | `conn_mod_def::GJ562kPnM4s::Pbw2mvu_R4esfTOirc_G8Q` |
| Modify a Thread Message | POST | `/threads/{{threadId}}/messages/{{messageId}}` | `conn_mod_def::GJ562k3rhJI::q3y3TiZnSQOS_hR1Ed-UxA` |

### Assistants

| Action | Method | Path | Action id |
|---|---|---|---|
| List Assistants | GET | `/assistants` | `conn_mod_def::GJ5628G5Le0::fvxSopefRUOSf7u8WfvO3Q` |
| Retrieve an Assistant | GET | `/assistants/{{assistantId}}` | `conn_mod_def::GJ5627lu26Y::nET8EcEwSju8vnQIX6Fnjg` |
| Create an Assistant | POST | `/assistants` | `conn_mod_def::GJ562lC7iHo::V_zXEyEPRwSpMGBIIxv97w` |
| Delete an Assistant | DELETE | `/assistants/{{assistantId}}` | `conn_mod_def::GJ562li5_kM::QlqGKUFMQ0CyjfrRigJmsQ` |
| Modify an Assistant | POST | `/assistants/{{assistantId}}` | `conn_mod_def::GJ562tfkDPE::vn30dX4LTyyvfvJgpJdz-Q` |

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Stored Chat Completion | GET | `/chat/completions/{{completionId}}` | `conn_mod_def::GJ563wAI7QM::YVsKXvXYSEOMWkCxXn7ITw` |
| List Stored Chat Completions | GET | `/chat/completions` | `conn_mod_def::GJ5635lS81E::1GIgTHmwT2e6viDwkUvNXg` |
| Create a Chat Completion | POST | `/chat/completions` | `conn_mod_def::GJ563wrwc5Q::nxVg0tlnR-6fNNpRZkHuKg` |
| Delete a Stored Chat Completion | DELETE | `/chat/completions/{{completionId}}` | `conn_mod_def::GJ563viO0dY::SdOtOEgWQ5q7MbW7mPiJxg` |
| Modify a Stored Chat Completion’s Metadata | POST | `/chat/completions/{{completionId}}` | `conn_mod_def::GJ5634ggMMA::RaK9iegTRAqCMU4gKYB4RA` |

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conversation | GET | `/conversations/{{conversationId}}` | `conn_mod_def::GJ564CnPLQ0::Lsia_n9TTze_j9u01GDvbw` |
| Create a Conversation | POST | `/conversations` | `conn_mod_def::GJ5633p9shM::g6lw-ZB4Sm61zk9-cH9uzw` |
| Delete a Conversation | DELETE | `/conversations/{{conversationId}}` | `conn_mod_def::GJ563_qqCGo::ebZV8crFRNWDvQT7PP5DRA` |
| Delete a Conversation Item | DELETE | `/conversations/{{conversationId}}/items/{{itemId}}` | `conn_mod_def::GJ564Aa1cHg::AtQjMdYlSkK-8C23nNR-gA` |
| Update a Conversation | POST | `/conversations/{{conversationId}}` | `conn_mod_def::GJ564KNI5-E::ww5RSf_4THmoNxR6brzaqQ` |

### Evals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Evaluation by ID | GET | `/evals/{{evalId}}` | `conn_mod_def::GJ564Rd1xy8::3mGYZEMLQIOcA5JcpFswLw` |
| List a Project’s Evaluations | GET | `/evals` | `conn_mod_def::GJ564bqlmA0::JfnKG8c1Q0uqvUS9D7LzwA` |
| Create an Evaluation | POST | `/evals` | `conn_mod_def::GJ564Jd5bYc::WnbfiM16Tr-cOe_L09DORQ` |
| Delete an Evaluation | DELETE | `/evals/{{evalId}}` | `conn_mod_def::GJ564Q3vYfE::iKHRk-oJTGCGVfxmt4_A5Q` |
| Update an Evaluation | POST | `/evals/{{evalId}}` | `conn_mod_def::GJ564Z2mIrQ::cfiKO5gjQQekrRrLrsqpHA` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File's Content | GET | `/files/{{fileId}}/content` | `conn_mod_def::GJ564kgJLNo::C4QXzAChQ7iLuxuN4SiCBA` |
| List Files | GET | `/files` | `conn_mod_def::GJ564jebMfg::KNwwc01bRKObcmqai44HIQ` |
| Retrieve a File | GET | `/files/{{fileId}}` | `conn_mod_def::GJ564ih2VUY::My00KuHtTjea8naYmIM0EA` |
| Delete a File | DELETE | `/files/{{fileId}}` | `conn_mod_def::GJ564ll85RM::BI-JYPIiT8KH6xMI1rUkjQ` |
| Upload a File | POST | `/files` | `conn_mod_def::GJ564i5ecGg::4zIdAHGeSQaPuhKMpMuFAQ` |

### ContainerFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Container’s Files | GET | `/containers/{{containerId}}/files` | `conn_mod_def::GJ565jfQ1OI::LYK8h9U_R7OdT60wvV007A` |
| Retrieve a Container File | GET | `/containers/{{containerId}}/files/{{fileId}}` | `conn_mod_def::GJ5655LKflk::3zYuMpmbRfOc4e9D83OONQ` |
| Retrieve a Container File’s Content | GET | `/containers/{{containerId}}/files/{{fileId}}/content` | `conn_mod_def::GJ5655MrqG8::SkSnSHIoS7yeBL18FHHbRw` |
| Create a Container File | POST | `/containers/{{containerId}}/files` | `conn_mod_def::GJ565MoOeHQ::tpYVgJPzSYeGWhOHOVyqYw` |
| Delete a Container File | DELETE | `/containers/{{containerId}}/files/{{fileId}}` | `conn_mod_def::GJ565jIrp3o::1JIf0oFsTimiRr5JPoJoqg` |

### OrganizationProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organization Projects | GET | `/organization/projects` | `conn_mod_def::GJ567lWxFo4::PzihcG6sSOilBuHD2njxtQ` |
| Retrieve an Organization Project | GET | `/organization/projects/{{projectId}}` | `conn_mod_def::GJ567eLJcuk::JROnd9mxTp-wsDZoNsp9UQ` |
| Archive an Organization Project | POST | `/organization/projects/{{projectId}}/archive` | `conn_mod_def::GJ567KlrKlU::jyx8x1zHS_-tgK2plWLVUQ` |
| Create an Organization Project | POST | `/organization/projects` | `conn_mod_def::GJ567IjoxTE::qfqvvkpaSr298JbTTG3fXg` |
| Modify an Organization Project | POST | `/organization/projects/{{projectId}}` | `conn_mod_def::GJ567aC3Xk0::lgxz_rVdTqORcB3quGhNvg` |

### RealtimeCalls

| Action | Method | Path | Action id |
|---|---|---|---|
| Accept a Realtime SIP Call (Configure Session) | POST | `/realtime/calls/{{callId}}/accept` | `conn_mod_def::GJ5678YhhSw::o4ElmN2xTN6Pls8WdMa-kg` |
| Create a Realtime Call (WebRTC SDP Exchange) | POST | `/realtime/calls` | `conn_mod_def::GJ5673P1mJw::JViwykRFQT2-QETnIXTX0w` |

3 more RealtimeCalls actions are available through search.

This lists 90 of 241 actions. For anything not here, call `search_one_platform_actions` with platform `openai`. The full catalog is at https://www.withone.ai/knowledge/openai.

## When a call fails

The error comes from OpenAI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/openai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
