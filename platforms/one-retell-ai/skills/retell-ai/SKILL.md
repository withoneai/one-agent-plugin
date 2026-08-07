---
name: retell-ai
description: Retell AI is a voice AI platform that provides APIs and infrastructure for building, deploying, and monitoring conversational phone agents, allowing developers and businesses to automate inbound and outbound calls with speech recognition, synthesis, call control, and analytics. Read and write Retell AI data through One: phonenumbers, calls, conversationflows, conversationflowcomponents, agents, chatagents and more, 87 actions with real parameter documentation. Use whenever the user asks to look something up in Retell AI, create or update a record there, or build code against the Retell AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: retell-ai
  generated-from: one-knowledge-base
---

# Retell AI through One

Retell AI is a voice AI platform that provides APIs and infrastructure for building, deploying, and monitoring conversational phone agents, allowing developers and businesses to automate inbound and outbound calls with speech recognition, synthesis, call control, and analytics.

One exposes Retell AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `retell-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Retell AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Retell AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### PhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number | GET | `/get-phone-number/{{phoneNumber}}` | `conn_mod_def::GLEyIpFJNyA::VfAeWNBfTLO19aHG4whhuQ` |
| List Phone Numbers | GET | `/v2/list-phone-numbers` | `conn_mod_def::GLEyJNa6mIg::ombCULl_SbW4TnZ4EIUOAA` |
| List Phone Numbers | GET | `/list-phone-numbers` | `conn_mod_def::GLEyJNZiefA::JigouSDKRFyFaR1kLwbI9A` |
| Create Phone Number | POST | `/create-phone-number` | `conn_mod_def::GLEyHurHTFA::NXDAmgIFR3OH5jgO_78kSA` |
| Delete a Phone Number | DELETE | `/delete-phone-number/{{phoneNumber}}` | `conn_mod_def::GLEyIApGKOg::UYqpzWGwRBGEu6igEOyy2A` |
| Update a Phone Number | PATCH | `/update-phone-number/{{phoneNumber}}` | `conn_mod_def::GLEyJoSeQxg::9NTs80gvQYCD-V7VDef-Ew` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call by ID | GET | `/v2/get-call/{{callId}}` | `conn_mod_def::GLEyIRdPfyA::mlsWkGwWQxaBRXXMCf3rHw` |
| Delete a Call | DELETE | `/v2/delete-call/{{callId}}` | `conn_mod_def::GLEyH4KYPhg::liEErKGgRqKKBNw_RxEJgg` |
| List Calls | POST | `/v2/list-calls` | `conn_mod_def::GLEyIwN2PAg::n8NBI6JBSRK0-guPT-cX-A` |
| List Calls | POST | `/v3/list-calls` | `conn_mod_def::GLEyI61rNOg::jsDOodgCSyKgwdLM7QAbqA` |
| Stop Call | POST | `/v2/stop-call/{{callId}}` | `conn_mod_def::GLEyJf7kOQg::gSfpUEkyRZK1gtjQFN7V3w` |
| Update a Call's Metadata | PATCH | `/v2/update-call/{{callId}}` | `conn_mod_def::GLEyJfh_TkA::ADbZ_fWnTXuAGZNItcCvRw` |

### ConversationFlows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conversation Flow by ID | GET | `/get-conversation-flow/{{conversationFlowId}}` | `conn_mod_def::GLEyIcoDNTA::7cIgJeQCQKG99YywAX82_w` |
| List Conversation Flows | GET | `/v2/list-conversation-flows` | `conn_mod_def::GLEyJFXizPg::ccZQBHKcTX-ZMu6_OeCj_Q` |
| List Conversation Flows | GET | `/list-conversation-flows` | `conn_mod_def::GLEyJF8qeNg::2RCQ6QNrSGiwmChPJqnbvA` |
| Create a Conversation Flow | POST | `/create-conversation-flow` | `conn_mod_def::GLEyHlGwXWg::XNpQHsOQRFS_KFu23y0t_g` |
| Delete a Conversation Flow | DELETE | `/delete-conversation-flow/{{conversationFlowId}}` | `conn_mod_def::GLEyIAmcshg::HF51HBmERDmJDv8OR9XOCQ` |
| Update a Conversation Flow | PATCH | `/update-conversation-flow/{{conversationFlowId}}` | `conn_mod_def::GLEyJo6LCJg::T87L0NpUTSiqy1E1ePgvuw` |

### ConversationFlowComponents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conversation Flow Component | GET | `/get-conversation-flow-component/{{conversationFlowComponentId}}` | `conn_mod_def::GLEyIcZxojA::JPNCXC2ISYSj-GskVzs4hg` |
| List Conversation Flow Components | GET | `/list-conversation-flow-components` | `conn_mod_def::GLEyJEG-w6g::x6eD5lADRDmjx5iaBm8WPQ` |
| List Conversation Flow Components | GET | `/list-conversation-flow-components` | `conn_mod_def::GLEyI5VKvSA::TxRPqUbtSp-0zX_kP9iIdg` |
| Create Conversation Flow Component | POST | `/create-conversation-flow-component` | `conn_mod_def::GLEyHlH1Hvg::qsMCJ7vJT02-1nbX-6sxFw` |
| Delete a Conversation Flow Component | DELETE | `/delete-conversation-flow-component/{{conversationFlowComponentId}}` | `conn_mod_def::GLEyIAq639A::-Hx3QbKYRh-6bMS2UAFXTQ` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent by ID | GET | `/get-agent/{{agentId}}` | `conn_mod_def::GLEyIIfmCpg::IjVMWHWMQGSpK8NWKFM9hA` |
| List Agents | GET | `/list-agents` | `conn_mod_def::GLEyIySrbLg::k50QV2cOTBuMFIX4u6G4Mg` |
| Create Agent | POST | `/create-agent` | `conn_mod_def::GLEyHNlUtWg::ITLhSRQaT-6TwT8zxFIh9A` |
| Delete an Agent | DELETE | `/delete-agent/{{agentId}}` | `conn_mod_def::GLEyH4J1Dkg::DAMgwPV6QXCT2PXVXjMjjg` |
| Update an Agent | PATCH | `/update-agent/{{agentId}}` | `conn_mod_def::GLEyJfr7lPg::Ut5Wo33JSe2f0X_BwGeZlg` |

### ChatAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Chat Agent by ID | GET | `/get-chat-agent/{{agentId}}` | `conn_mod_def::GLEyIRdP-Dg::7jNzyw82S7aS_uZWrgj7dA` |
| List Chat Agents | GET | `/list-chat-agents` | `conn_mod_def::GLEyI7o-0mA::0GWxWwcKScCLouidRpK33Q` |
| Create Chat Agent | POST | `/create-chat-agent` | `conn_mod_def::GLEyHYXAGQA::g3xhF6xdQpuiuyL2GNuerQ` |
| Delete a Chat Agent | DELETE | `/delete-chat-agent/{{agentId}}` | `conn_mod_def::GLEyH4J7kkA::5ZylKi3dRCWap7Bw9qwVCA` |

### TestCaseDefinitions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Test Case Definitions | GET | `/v2/list-test-case-definitions` | `conn_mod_def::GLEyJXW42eA::OTIORBgCQ2Wku7Xqcfsk4w` |
| List Test Case Definitions | GET | `/list-test-case-definitions` | `conn_mod_def::GLEyJOyDFpA::_Oni2OwqREebiRbdcMKcJg` |
| Delete a Test Case Definition | DELETE | `/delete-test-case-definition/{{testCaseDefinitionId}}` | `conn_mod_def::GLEyIHX-Ldg::RVrGG12cR-KbYfqJlpFdBw` |
| Update a Test Case Definition | PUT | `/update-test-case-definition/{{testCaseDefinitionId}}` | `conn_mod_def::GLEyJyrqZ9g::zRvcHclvTv-dSSkKwT0x9Q` |

### AgentVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Agent's Versions | GET | `/get-agent-versions/{{agentId}}` | `conn_mod_def::GLEyII2aG_A::J8GOnbemQY-R9Xs3YaehqQ` |
| Create an Agent Version | POST | `/create-agent-version/{{agentId}}` | `conn_mod_def::GLEyHcPjjZg::hIZS9eKeQWeDJ-hfv_U7dA` |
| Delete an Agent Version | DELETE | `/delete-agent-version/{{agentId}}` | `conn_mod_def::GLEyH4VAKLA::f4ddZE6mR7ulM1j4lXvNgA` |
| Publish an Agent Version | POST | `/publish-agent-version/{{agentId}}` | `conn_mod_def::GLEyJV8h6Eg::0_B-8trIS5SZWbgqE9RkJA` |

### RetellLlmResponseEngine

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Retell LLM Response Engine | GET | `/get-retell-llm/{{llmId}}` | `conn_mod_def::GLEyIo9VUng::vwp_LiVpTSmrxn3f2aMZVQ` |
| Create a Retell LLM Response Engine | POST | `/create-retell-llm` | `conn_mod_def::GLEyHvdvYUA::-l3irP11S6OA_tLtnsxG8A` |
| Delete a Retell LLM Response Engine | DELETE | `/delete-retell-llm/{{llmId}}` | `conn_mod_def::GLEyIHrberg::uVTsN-XpSxGlWoqTvLNiKg` |
| Update a Retell LLM Response Engine | PATCH | `/update-retell-llm/{{llmId}}` | `conn_mod_def::GLEyJ0AxD5g::XndCknKTRCq0NMCbsRsj_w` |

### Chats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Chat by ID | GET | `/get-chat/{{chatId}}` | `conn_mod_def::GLEyIRWsnMA::AWL31EnyRyelvOjo1qyqKA` |
| List Chats | GET | `/list-chat` | `conn_mod_def::GLEyI6SNeiA::kKHv22eCT9CVR51ecIeX-w` |
| Delete a Chat | DELETE | `/delete-chat/{{chatId}}` | `conn_mod_def::GLEyH4Us7tA::l_1IrGGPTe-foeOW1dUiGA` |
| List Chats | POST | `/v3/list-chats` | `conn_mod_def::GLEyI5r9qYA::XC3Uv-ysSz-oge0Ca6_DIA` |

### Voices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Voice by ID | GET | `/get-voice/{{voiceId}}` | `conn_mod_def::GLEyIo9bp5A::EX998rBIQo-TL99zAFB1wg` |
| List Voices | GET | `/list-voices` | `conn_mod_def::GLEyJWIT_yg::jcuiHM7mTV2RVvSaK0mKBg` |
| Clone Voice | POST | `/clone-voice` | `conn_mod_def::GLEyHM6EadA::5SmAbzvLT_mW6XiNZw3ykw` |

### KnowledgeBase

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Knowledge Base by ID | GET | `/get-knowledge-base/{{knowledgeBaseId}}` | `conn_mod_def::GLEyIgYlliA::cDuTTe0SQHaxgP_aFSJ_5g` |
| Create Knowledge Base | POST | `/create-knowledge-base` | `conn_mod_def::GLEyHmF1NwA::uGsSVatJQHyzcweZ26e30w` |
| Delete a Knowledge Base | DELETE | `/delete-knowledge-base/{{knowledgeBaseId}}` | `conn_mod_def::GLEyIAqJpkA::KPlAWtKiS7e0kBqp2iu8Mg` |

### Chat

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Chat | POST | `/create-chat` | `conn_mod_def::GLEyHcFSV4A::_cQES6KyRomNLbpTtgyaIA` |
| End Chat | PATCH | `/end-chat/{{chatId}}` | `conn_mod_def::GLEyIG_Palg::Pm3OWdy0TmOkVP30Iwt3jg` |
| Update Chat Metadata | PATCH | `/update-chat/{{chatId}}` | `conn_mod_def::GLEyJoJ_iZg::mwTfzhaDTPSAlam49f-N7A` |

### BatchTests

| Action | Method | Path | Action id |
|---|---|---|---|
| List Batch Tests | GET | `/v2/list-batch-tests` | `conn_mod_def::GLEyIw6c8Lg::4fMEcuZYRCGU9IedAN4FBA` |
| Create Batch Test | POST | `/create-batch-test` | `conn_mod_def::GLEyHY9RHjg::B8h4HvuESDKU7dpgU0PVfQ` |

### TestRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Batch Test Job's Test Runs | GET | `/list-test-runs/{{testCaseBatchJobId}}` | `conn_mod_def::GLEyJXCrVUA::aeX5x1caSSWWO9htnjSb1Q` |
| List Test Runs for a Batch Test Job | GET | `/v2/list-test-runs/{{testCaseBatchJobId}}` | `conn_mod_def::GLEyJW-HDQg::PoMjYX1LRVuyXHdxKRbrBQ` |

### KnowledgeBaseSources

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Sources to a Knowledge Base | POST | `/add-knowledge-base-sources/{{knowledgeBaseId}}` | `conn_mod_def::GLEyHQSECXg::pz6TeXVLQf6c-OuSzZz6jw` |
| Delete a Knowledge Base Source | DELETE | `/delete-knowledge-base-source/{{knowledgeBaseId}}/source/{{sourceId}}` | `conn_mod_def::GLEyIAqF3YA::Mbs6PD_ASrm0XREVRDaSWw` |

### PhoneCalls

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Phone Call | POST | `/v2/create-phone-call` | `conn_mod_def::GLEyHlOdaCg::ci7MLt8NSkSuJxV3au28hw` |
| Register a Phone Call | POST | `/v2/register-phone-call` | `conn_mod_def::GLEyJfh4bIg::kSEJ4Mr1SA6ExVvSLwV8Xw` |

### TestCaseDefinition

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test Case Definition by ID | GET | `/get-test-case-definition/{{testCaseDefinitionId}}` | `conn_mod_def::GLEyIo8c4UA::d72X08L-QQyYQ-3XV9Y8UA` |
| Create Test Case Definition | POST | `/create-test-case-definition` | `conn_mod_def::GLEyHwAjFjg::i_zwpZzvTvqRTHjDOHMqnw` |

### RetellLlms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Retell LLM Response Engines | GET | `/v2/list-retell-llms` | `conn_mod_def::GLEyJN2iawg::H1kh7YQPSUufKKSFD3_7zw` |
| List Retell LLMs | GET | `/list-retell-llms` | `conn_mod_def::GLEyJO21cFg::mrCnl0jbQ4u4qIhDYCOpUA` |

### BatchTestJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Batch Test Job by ID | GET | `/get-batch-test/{{testCaseBatchJobId}}` | `conn_mod_def::GLEyIUVWA1g::EZnWlvUBQvmF61wAZXEAIw` |
| List Batch Test Jobs for a Response Engine | GET | `/list-batch-tests` | `conn_mod_def::GLEyIyTJ4Zg::3eLDduKLR3Gz0jmt1yG2eg` |

### CommunityVoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Community Voice | POST | `/add-community-voice` | `conn_mod_def::GLEyHMMwa2A::j-l7tVBjS429s8GkO3eXjA` |
| Search Community Voices | POST | `/search-community-voice` | `conn_mod_def::GLEyJgJee0g::-rLogmpUQjyTEHs4CZTJLw` |

### Concurrency

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Concurrency | GET | `/get-concurrency` | `conn_mod_def::GLEyIcYnEFg::bws1JHQoTjGfb-Ow8EmA7Q` |

### KnowledgeBases

| Action | Method | Path | Action id |
|---|---|---|---|
| List Knowledge Bases | GET | `/list-knowledge-bases` | `conn_mod_def::GLEyJD4dPqA::9fUaG2-hRcqWNRPxaZecYA` |

### ExportRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List Export Requests | GET | `/v2/list-export-requests` | `conn_mod_def::GLEyJFW7AXg::fh1wkAD2Rf2AbMAprJohKg` |

### ChatAgentVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Chat Agent's Versions | GET | `/get-chat-agent-versions/{{agentId}}` | `conn_mod_def::GLEyIRWH4mg::FoqRKW7WQMSLCTa-qKKqMw` |

### AgentPlaygroundCompletion

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Agent Playground Completion | POST | `/agent-playground-completion/{{agentId}}` | `conn_mod_def::GLEyHM0tSfg::n6b8_RE7R96CSixsyKsS8A` |

### BatchCall

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Batch Call | POST | `/create-batch-call` | `conn_mod_def::GLEyHYSnC8g::waRngW6mQm6QbbQDe0Xj_A` |

### WebCalls

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Web Call | POST | `/create-web-call` | `conn_mod_def::GLEyHurYW4A::pOtKptInQIisekRaBel5aw` |

### SmsChats

| Action | Method | Path | Action id |
|---|---|---|---|
| Create SMS Chat | POST | `/create-sms-chat` | `conn_mod_def::GLEyHu8v7gA::SNoe_HKNRTiIUjPD9n5mjA` |

### TestRun

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test Run by ID | GET | `/get-test-run/{{testCaseJobId}}` | `conn_mod_def::GLEyIpFEm3A::6YS9aUukTRGf9uiu0_tx8g` |

### McpTools

| Action | Method | Path | Action id |
|---|---|---|---|
| Get MCP Tools for an Agent | GET | `/get-mcp-tools/{{agentId}}` | `conn_mod_def::GLEyIgYF5Ng::5CWUilDaSOiWvXWItin_NQ` |

### PhoneNumber

| Action | Method | Path | Action id |
|---|---|---|---|
| Import Phone Number | POST | `/import-phone-number` | `conn_mod_def::GLEyIwQWsig::5sYkkxoMQTSaNr1IAFKetg` |

### ChatAgent

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Chat Agent | PATCH | `/update-chat-agent/{{agentId}}` | `conn_mod_def::GLEyJo6LCJg::_nY1Wlw0RFqWTs1eZyw9Tw` |

### ConversationFlowComponent

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Conversation Flow Component | PATCH | `/update-conversation-flow-component/{{conversationFlowComponentId}}` | `conn_mod_def::GLEyJrVpZZA::8bD8XMZgR8qQTGzKpqDbhw` |

### ChatCompletion

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Chat Completion | POST | `/create-chat-completion` | `conn_mod_def::GLEyHlGGgpA::80S8XVXHRGSpp-Bn1eoyuQ` |

## When a call fails

The error comes from Retell AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/retell-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
