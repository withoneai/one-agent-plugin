---
name: mistral-ai
description: Mistral AI is an AI platform that provides large language models, embeddings, and multimodal capabilities through APIs, enabling developers and enterprises to build assistants, automate workflows, and integrate generative AI features into applications and internal systems. Read and write Mistral AI data through One: connectors, libraries, conversations, workflows, workflowexecutions, skills and more, 289 actions with real parameter documentation. Use whenever the user asks to look something up in Mistral AI, create or update a record there, or build code against the Mistral AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mistral-ai
  generated-from: one-knowledge-base
---

# Mistral AI through One

Mistral AI is an AI platform that provides large language models, embeddings, and multimodal capabilities through APIs, enabling developers and enterprises to build assistants, automate workflows, and integrate generative AI features into applications and internal systems.

One exposes Mistral AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mistral-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mistral AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mistral AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Connectors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connector by ID or Name | GET | `/v1/connectors/{{connectorIdOrName}}#idOrName` | `conn_mod_def::GMZh05TMAmA::7CtfcSYDQ7me1_p1DYeXdg` |
| Get Auth URL for a Connector | GET | `/v1/connectors/{{connectorIdOrName}}/auth_url` | `conn_mod_def::GMZh05IF7SA::jicTRpYjSfq-puMPLJHdYA` |
| Get Authentication Methods for a Connector | GET | `/v1/connectors/{{connectorIdOrName}}/authentication_methods` | `conn_mod_def::GMZh05QN7jg::iAbdfBOFRLCBXOSkYMUSLQ` |
| List All Connectors | GET | `/v1/connectors` | `conn_mod_def::GMZh03jiZQg::1TL1OG0jTmerI3GTgLtfFw` |
| List Tools for a Connector | GET | `/v1/connectors/{{connectorIdOrName}}/tools` | `conn_mod_def::GMZh1BgKYfg::6XB3dOOHQ36C3BgACTMsSQ` |
| List User Credentials for a Connector | GET | `/v1/connectors/{{connectorIdOrName}}/user/credentials` | `conn_mod_def::GMZh1Ad0NnA::tZ9JQbXMS-mTq8ivmXUZwQ` |
| Activate a Connector for a Workspace | POST | `/v1/connectors/{{connectorId}}/workspace/activate` | `conn_mod_def::GMZh0Wy8zMA::aRe-mjLlTUGPYuVptzYKXA` |
| Activate a Connector for an Organization | POST | `/v1/connectors/{{connectorId}}/organization/activate` | `conn_mod_def::GMZh0fdJI0g::ayjXtPFsRsaysJtLSDkMJQ` |
| Activate a Connector for the Current User | POST | `/v1/connectors/{{connectorId}}/user/activate` | `conn_mod_def::GMZh0g5xXEg::4wCEOaMfQO-u5PMINLziNA` |
| Call Tool Using Connectors | POST | `/v1/connectors/{{connectorIdOrName}}/tools/{{toolName}}/call` | `conn_mod_def::GMZh0hPcN3A::q0HZ1spNRcy0-VG_FjoyuQ` |
| Create a Connector | POST | `/v1/connectors` | `conn_mod_def::GMZh0iFg1Wg::74owLMTETlK5RJD2ysfmgw` |
| Create or Update User Credentials for a Connector | POST | `/v1/connectors/{{connectorIdOrName}}/user/credentials` | `conn_mod_def::GMZh0pwP9_g::ltPiefV4R22w0gXZ9uGNsQ` |

10 more Connectors actions are available through search.

### Libraries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document's Metadata from a Library | GET | `/v1/libraries/{{libraryId}}/documents/{{documentId}}` | `conn_mod_def::GMZh1pOIHNg::GMb_3x4GTe-bi7BMT6jMbA` |
| Get a Library | GET | `/v1/libraries/{{libraryId}}` | `conn_mod_def::GMZh1Z9OrJA::COVrjy4xSdy55FzIrYwtNA` |
| List Access to a Library Share | GET | `/v1/libraries/{{libraryId}}/share` | `conn_mod_def::GMZh1hy1D4A::oRFLgXqITmKiqgzZ9xDLug` |
| List Accessible Libraries | GET | `/v1/libraries` | `conn_mod_def::GMZh1a3pJ1g::BgJ2gTuMRdCWllNIueW5Ww` |
| Retrieve a Document's Text Content from a Library | GET | `/v1/libraries/{{libraryId}}/documents/{{documentId}}/text_content` | `conn_mod_def::GMZh1yZ5nuA::Q4z9dBMRRlO9Nb4sCxY9pA` |
| Create a New Library | POST | `/v1/libraries` | `conn_mod_def::GMZh1aUD2xA::-RWO3th-Qm-NZGKpilEzdw` |
| Delete a Document from a Library | DELETE | `/v1/libraries/{{libraryId}}/documents/{{documentId}}` | `conn_mod_def::GMZh1iAZ1cA::-ZWVMtfDSXShenKkBXaekA` |
| Delete a Library | DELETE | `/v1/libraries/{{libraryId}}` | `conn_mod_def::GMZh1aH1HEA::zj-SuLgUQp63yULWy3R-Ow` |
| Delete an Access Level for a Library | DELETE | `/v1/libraries/{{libraryId}}/share` | `conn_mod_def::GMZh1iDAP1A::Gb1xOpSdQUGVneGlhdQUDw` |
| Reprocess a Library Document | POST | `/v1/libraries/{{libraryId}}/documents/{{documentId}}/reprocess` | `conn_mod_def::GMZh1ox2rgA::w9FspGp_SYmkXMWehGW32g` |
| Share a Library | PUT | `/v1/libraries/{{libraryId}}/share` | `conn_mod_def::GMZh1hPJ24A::vE6duXHFQc6_fhyjU1Kl2g` |
| Update a Library | PATCH | `/v1/libraries/{{libraryId}}` | `conn_mod_def::GMZh1hr0weA::5ifgc2JxRwG6ZeZZu64yEA` |

1 more Libraries actions are available through search.

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Conversation's Messages | GET | `/v1/conversations/{{conversationId}}/messages` | `conn_mod_def::GMZh1Z887Zg::3_KiFZovSaKwOFhZm4xIUQ` |
| List All Created Conversations | GET | `/v1/conversations` | `conn_mod_def::GMZh1RWRx4A::PUdIX6sQTTihMJ_HoP5-zw` |
| Retrieve a Conversation | GET | `/v1/conversations/{{conversationId}}` | `conn_mod_def::GMZh1RWfZ8g::s4vAOx8tQB6u0Ngj4iud4A` |
| Retrieve Conversation History | GET | `/v1/conversations/{{conversationId}}/history` | `conn_mod_def::GMZh1Q9Gteg::BN3c50qnRcGwtZXUYE365w` |
| Append Entries to a Conversation | POST | `/v1/conversations/{{conversationId}}` | `conn_mod_def::GMZh1JQVS8g::u1N5NvJ7TRSfMvO47Hrq3w` |
| Append Stream Entries to a Conversation | POST | `/v1/conversations/{{conversationId}}#stream` | `conn_mod_def::GMZh1I8nEuA::mzcLhAQdR-eCKUen4Bs_mw` |
| Create a Conversation | POST | `/v1/conversations` | `conn_mod_def::GMZh1KUIVMA::8q81dYdWQbeomK7hU_B-QA` |
| Delete a Conversation | DELETE | `/v1/conversations/{{conversationId}}` | `conn_mod_def::GMZh1J3uagg::vUJXL9qTTvCWydaIktvhog` |
| Restart a Conversation | POST | `/v1/conversations/{{conversationId}}/restart` | `conn_mod_def::GMZh1TPX9mA::7UWFzDWDR1G4sMBW5kzVOA` |
| Restart a Conversation Stream | POST | `/v1/conversations/{{conversationId}}/restart#stream` | `conn_mod_def::GMZh1RxNdTg::aun9Ic06R1avcPhvsLofCg` |
| Start Stream Using Conversations | POST | `/v1/conversations#stream` | `conn_mod_def::GMZh1I5EwWA::vUkmmA1XQIezGCL8MKVZsQ` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Metrics for a Workflow | GET | `/v1/workflows/{{workflowName}}/metrics` | `conn_mod_def::GMZh6PSIAGg::xUHGNAkOSratUJstEH1wGA` |
| Get Workflow | GET | `/v1/workflows/{{workflowIdentifier}}` | `conn_mod_def::GMZh5F943tg::j6gxQOa4RI2RL7hVPoAxsg` |
| List Workflows | GET | `/v1/workflows` | `conn_mod_def::GMZh5O17trA::ZQce1IgkSu-2wdmUWeBEmw` |
| Stream Events for Workflows | GET | `/v1/workflows/events/stream` | `conn_mod_def::GMZh4l0RkaA::qbooOwZ9T0qpR7yQGdNXqQ` |
| Archive a Workflow | PUT | `/v1/workflows/{{workflowIdentifier}}/archive` | `conn_mod_def::GMZh5ENPJ1g::hAITIvewQROJlkiSmkL4Xw` |
| Archive Workflows in Bulk | PUT | `/v1/workflows/archive` | `conn_mod_def::GMZh5ElkuaA::KclFDfKLTDWiM3d_1RRYVA` |
| Bulk Unarchive Workflows | PUT | `/v1/workflows/unarchive` | `conn_mod_def::GMZh5GHcpCA::0KlJgaF7QtOlsRhP1yWN9g` |
| Execute Workflow | POST | `/v1/workflows/{{workflowIdentifier}}/execute` | `conn_mod_def::GMZh5FpR_gg::gCx6ik1TSdaveWxUUrhyjA` |
| Schedule Workflow | POST | `/v1/workflows/schedules` | `conn_mod_def::GMZh6ilJfYA::Q9NFrl6uSVGq_KEL1aZNyw` |
| Unarchive a Workflow | PUT | `/v1/workflows/{{workflowIdentifier}}/unarchive` | `conn_mod_def::GMZh5Mvm_Pg::1Ogckh6kTtyuEt4JJuUwew` |
| Update a Workflow | PUT | `/v1/workflows/{{workflowIdentifier}}` | `conn_mod_def::GMZh5Q5qnzA::TLSFhmK9QFuhX7-Cp3VhEA` |

### WorkflowExecutions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workflow Execution | GET | `/v1/workflows/executions/{{executionId}}` | `conn_mod_def::GMZh5rmVkmA::x3eOkTDKS6WT0kk4sepXbw` |
| Stream a Workflow Execution | GET | `/v1/workflows/executions/{{executionId}}/stream` | `conn_mod_def::GMZh6IjQJnA::opZoh179SwOnnWqfFP_19A` |
| Batch Cancel Workflow Executions | POST | `/v1/workflows/executions/cancel` | `conn_mod_def::GMZh5qV5GpA::_i6PFmqETliOwKO-XDmKmw` |
| Cancel a Workflow Execution | POST | `/v1/workflows/executions/{{executionId}}/cancel` | `conn_mod_def::GMZh5qZK8VA::6hex6UG9Q_mdQ1LCvYNXYw` |
| Query a Workflow Execution | POST | `/v1/workflows/executions/{{executionId}}/queries` | `conn_mod_def::GMZh6FnQjJg::UoDSc2_IR1yf4cylFu7I9w` |
| Reset a Workflow Execution | POST | `/v1/workflows/executions/{{executionId}}/reset` | `conn_mod_def::GMZh6FnI72A::SkFoWwCvTpycWaBT7kJrTg` |
| Signal a Workflow Execution | POST | `/v1/workflows/executions/{{executionId}}/signals` | `conn_mod_def::GMZh6F8WW2A::mNhYj8PaTOW_pzHeQXUxqA` |
| Terminate Workflow Execution | POST | `/v1/workflows/executions/{{executionId}}/terminate` | `conn_mod_def::GMZh6Ol5zSg::DSlvbIktQRGnsYUMqrHvXg` |
| Terminate Workflow Executions in Batch | POST | `/v1/workflows/executions/terminate` | `conn_mod_def::GMZh5rKzgIg::C6hu8HkHRLSPzD6rZ_VXfw` |
| Update a Workflow Execution | POST | `/v1/workflows/executions/{{executionId}}/updates` | `conn_mod_def::GMZh6PypzdA::71dTgbJbQPW4_OmFskq4Ag` |

### Skills

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Skill | GET | `/v2/skills/{{skillId}}` | `conn_mod_def::GMZh4SNUgag::WymEB9x-Tie25C34tKrexQ` |
| Get a Skill Version | GET | `/v2/skills/{{skillId}}/versions/{{version}}` | `conn_mod_def::GMZh4SCx2rg::XhcnIK6fT2yYiAqAWEux0A` |
| List a Skill's Versions | GET | `/v2/skills/{{skillId}}/versions` | `conn_mod_def::GMZh4SCeqKg::hlZSaRA5QlyK7mpvpeh6MA` |
| List Skills | GET | `/v2/skills` | `conn_mod_def::GMZh4SPW8Eg::N6374lz2QQi-uBAKMnfuhA` |
| Create a Skill | POST | `/v2/skills` | `conn_mod_def::GMZh4I7KNzA::sKZNIfQLQIuvX-WEWsbo-A` |
| Create a Version for a Skill | POST | `/v2/skills/{{skillId}}/versions` | `conn_mod_def::GMZh4Jn222g::wCHqcr87TRSFNw9f7HOd_w` |
| Delete a Skill | DELETE | `/v2/skills/{{skillId}}` | `conn_mod_def::GMZh4SCs_KA::6ZZ8FQRwSgKyF_SbsoxwHA` |
| Update a Skill | PATCH | `/v2/skills/{{skillId}}` | `conn_mod_def::GMZh4YwbVjA::tlST5hIpT9CXq2rWWAc6PQ` |
| Update Skill Version Metadata | PATCH | `/v2/skills/{{skillId}}/versions/{{version}}` | `conn_mod_def::GMZh4YzPqkA::-SxuTkhtQXKfiAAs1dHIYA` |

### UserGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Group | GET | `/v1/admin/user-groups/{{groupUuid}}` | `conn_mod_def::GMZhyxVXfXg::-sxyl7B2Q8O0UUYMYE5H9Q` |
| Get User Groups | GET | `/v1/admin/user-groups` | `conn_mod_def::GMZhy6rO04g::3tZergLBRR6Rx5N--Kl2_Q` |
| Assign Users to a Group | POST | `/v1/admin/user-groups/{{groupUuid}}/members` | `conn_mod_def::GMZhyjT6ihg::eFuC3rxfSfuqF2cKzjgAWQ` |
| Create a User Group | POST | `/v1/admin/user-groups` | `conn_mod_def::GMZhywVfHHg::ygIwDh62Q1SAHrbICn33zw` |
| Delete a User Group | DELETE | `/v1/admin/user-groups/{{groupUuid}}` | `conn_mod_def::GMZhyxN5vMg::rnwPVPEzQ4GWiKzMq4GoZg` |
| Provision Workspace Access for a User Group | POST | `/v1/admin/user-groups/provision-workspace` | `conn_mod_def::GMZhy8z5QXg::5c9xR6NiTaC52MboFrao7w` |
| Remove Users From Group | DELETE | `/v1/admin/user-groups/{{groupUuid}}/members` | `conn_mod_def::GMZhy6r2bEA::dm-sU535TfizaGSbUQTWbw` |
| Update a User Group | PATCH | `/v1/admin/user-groups/{{groupUuid}}` | `conn_mod_def::GMZhzECv-3A::jAlePx-KR9eQk2prKt8eXQ` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Agent Entities | GET | `/v1/agents/pages` | `conn_mod_def::GMZh0QLSlng::0PikE7r0RC-hk8k57M9heA` |
| List All Aliases for an Agent | GET | `/v1/agents/{{agentId}}/aliases` | `conn_mod_def::GMZh0OIY5vg::o2B3fOVfTiC8Gbr9hc1GcA` |
| List Versions for an Agent | GET | `/v1/agents/{{agentId}}/versions` | `conn_mod_def::GMZh0PWyBcg::Mw7d9l2_R_iLBp9Ud7-_ig` |
| Retrieve an Agent | GET | `/v1/agents/{{agentId}}` | `conn_mod_def::GMZh0XAKQkA::XqprkF0mQ6GeCo5YTSUBgA` |
| Create an Agent | POST | `/v1/agents` | `conn_mod_def::GMZh0DroE0A::xj9CkJ8KTN6fG_QO_aorrQ` |
| Delete an Agent | DELETE | `/v1/agents/{{agentId}}` | `conn_mod_def::GMZh0OazrJg::fpip9pIMQFuW4nN9KXprEQ` |
| Update Agent Version | PATCH | `/v1/agents/{{agentId}}/version` | `conn_mod_def::GMZh0Y-YPxg::DOeXYkgBRU-myfev6jt7xA` |
| Update an Agent | PATCH | `/v1/agents/{{agentId}}` | `conn_mod_def::GMZh0W7BhgA::Ve0rkJAkTlClIirR_Y8n-Q` |

### DatasetRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dataset Record from Observability | GET | `/v1/observability/dataset-records/{{datasetRecordId}}` | `conn_mod_def::GMZh2y9L33A::nP8FTV-tTP-UYU_-SUmIVw` |
| List Records for a Dataset | GET | `/v1/observability/datasets/{{datasetId}}/records` | `conn_mod_def::GMZh2kGBOUg::Tp3Z5ciyRFeguzmCZ53NRg` |
| Bulk Delete Dataset Records | POST | `/v1/observability/dataset-records/bulk-delete` | `conn_mod_def::GMZh2rNBJIA::zuyFmaSpRJ-aeBrN-00SSA` |
| Create a Dataset Record for Observability | POST | `/v1/observability/datasets/{{datasetId}}/records` | `conn_mod_def::GMZh2S6fThA::f5KROKZQT0CSGGNRvdB8Hg` |
| Delete a Dataset Record | DELETE | `/v1/observability/dataset-records/{{datasetRecordId}}` | `conn_mod_def::GMZh2rxU8wg::Z73m1-XCRRSgkK0IooD4gg` |
| Live Judging for a Dataset Record | POST | `/v1/observability/dataset-records/{{datasetRecordId}}/live-judging` | `conn_mod_def::GMZh2zxOJjg::oTRMk6fLTRaohnMhZU3RJA` |
| Update a Dataset Record Payload | PUT | `/v1/observability/dataset-records/{{datasetRecordId}}/payload` | `conn_mod_def::GMZh2z8eUYA::Q91Qq3W-T2qg7nxO5coKZw` |
| Update Properties for a Dataset Record | PUT | `/v1/observability/dataset-records/{{datasetRecordId}}/properties` | `conn_mod_def::GMZh2z8QW0g::mtqxfwKuRT6rZEGg8ALUlw` |

### Prompts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Prompt | GET | `/v2/prompts/{{promptId}}` | `conn_mod_def::GMZh3h-F6SA::9_TR4KfDSV2wmUh4GwH-wQ` |

7 more Prompts actions are available through search.

This lists 90 of 289 actions. For anything not here, call `search_one_platform_actions` with platform `mistral-ai`. The full catalog is at https://www.withone.ai/knowledge/mistral-ai.

## When a call fails

The error comes from Mistral AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mistral-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
