---
name: open-router
description: OpenRouter is a unified API and marketplace that lets developers access, compare, and route requests across hundreds of LLMs based on performance, cost, and availability—simplifying multi-model integration with failover, model/provider selection, and unified billing. Read and write OpenRouter data through One: guardrails, keys, models, credits, activity, responses and more, 36 actions with real parameter documentation. Use whenever the user asks to look something up in OpenRouter, create or update a record there, or build code against the OpenRouter API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: open-router
  generated-from: one-knowledge-base
---

# OpenRouter through One

OpenRouter is a unified API and marketplace that lets developers access, compare, and route requests across hundreds of LLMs based on performance, cost, and availability—simplifying multi-model integration with failover, model/provider selection, and unified billing.

One exposes OpenRouter through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `open-router` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OpenRouter is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OpenRouter account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Guardrails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Guardrail by ID | GET | `/api/v1/guardrails/{{id}}` | `conn_mod_def::GJ57k6OO7Qc::2E9_WlS7RVeGusl6cDK2BA` |
| List Guardrails | GET | `/guardrails` | `conn_mod_def::GJ57lGAhsDQ::pLzgaJOwSDCWGX_s82hnRw` |
| Bulk Assign API Keys to a Guardrail | POST | `/guardrails/{{id}}/assignments/keys` | `conn_mod_def::GJ57kwjnTdg::HMgOJobXROKZ99CjWcgUYg` |
| Bulk Unassign API Keys from a Guardrail | POST | `/api/v1/guardrails/{{id}}/assignments/keys/remove` | `conn_mod_def::GJ57km2ykGQ::OyPhkxS2QBG63aBiTr1xbg` |
| Bulk Unassign Members from a Guardrail | POST | `/guardrails/{{id}}/assignments/members/remove` | `conn_mod_def::GJ57k4q-XZo::6Si38h0kTVSP4HF0LOQWyg` |
| Create a Guardrail | POST | `/guardrails` | `conn_mod_def::GJ57k4xU1NM::18iqHj7sTuWwv-v9hIjBjg` |
| Delete a Guardrail | DELETE | `/api/v1/guardrails/{{id}}` | `conn_mod_def::GJ57k5xYgq4::Rytls_GnTJ2Qq1Y6dVxYAQ` |
| Update a Guardrail | PATCH | `/api/v1/guardrails/{{id}}` | `conn_mod_def::GJ57lE49hgA::_ARQSXcGTZeRzXnHeYde0Q` |

### Keys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single API Key | GET | `/api/v1/keys/{{hash}}` | `conn_mod_def::GJ57kFgUZuc::ALcrlMIQSlGD7OoSr1RJ3A` |
| List API Keys (Authenticated User) | GET | `/keys` | `conn_mod_def::GJ57kQ_ZXZc::E9fIfQDZTheFB3b248FSJg` |
| Create a New API Key (for the Authenticated User) | POST | `/keys` | `conn_mod_def::GJ57kF7CDBA::98dJK7yxRiqB3XISbnBp6g` |
| Delete an API Key | DELETE | `/api/v1/keys/{{hash}}` | `conn_mod_def::GJ57kGND7kA::3vBUda69S_-1MzaasxDNIA` |
| Update an API Key | PATCH | `/api/v1/keys/{{hash}}` | `conn_mod_def::GJ57kQWdTco::1DK_EwMeS--YcA8YiobLGg` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Total Model Count | GET | `/models/count` | `conn_mod_def::GJ57lQzTkyo::n3lkNWUfRUaJKb3NSdEdxg` |
| List a Model’s Endpoints | GET | `/api/v1/models/{{author}}/{{slug}}/endpoints` | `conn_mod_def::GJ57kdVKEog::3WM2Qkd0TfSx-ziwkUfuLw` |
| List Models | GET | `/models` | `conn_mod_def::GJ57lTGC-54::HDw--MPVQxSvWnmhKDlaaw` |
| List Models Filtered for the Current User | GET | `/models/user` | `conn_mod_def::GJ57lRA-CaA::x8qrbFLfSdS-V3LSkYxl3Q` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Remaining Credits | GET | `/credits` | `conn_mod_def::GJ57kdwa6YE::Xh2vQ482RqqTRdO5ESx8mw` |
| Create a Coinbase Charge for Crypto Payment | POST | `/credits/coinbase` | `conn_mod_def::GJ57keZpU58::JC8HQEOETUu35NqzxXxYZQ` |

### Activity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Activity Grouped by Endpoint | GET | `/activity` | `conn_mod_def::GJ57kFc14DE::ak1FArCQROmel9LVfsOW6A` |

### Responses

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Response | POST | `/responses` | `conn_mod_def::GJ57kP7XRAI::QlAUfFXmQ26X6676w5qd5g` |

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Chat Completion | POST | `/chat/completions` | `conn_mod_def::GJ57kWYcxgI::ubG-NaPYRxKuUV_IpwF2Rg` |

### Embeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Embeddings | POST | `/embeddings` | `conn_mod_def::GJ57kekF9d0::9Gv1-KbWTlqzJMrAUMOcYA` |

### Generation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Generation’s Request & Usage Metadata | GET | `/generation` | `conn_mod_def::GJ57kq2_qhk::BTKpXpKWQGKfNoeP3rOxoA` |

### GuardrailMemberAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Guardrail’s Member Assignments | GET | `/guardrails/{{id}}/assignments/members` | `conn_mod_def::GJ57lGkCzFs::mOabVdQNSQyl2dYvr13LnA` |

### AuthKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Exchange Authorization Code for API Key | POST | `/api/v1/auth/keys` | `conn_mod_def::GJ57lNw1-E4::hfuaRafHQqG1K6DTtdM1pQ` |

### Providers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Providers | GET | `/providers` | `conn_mod_def::GJ57lgGxuug::yVJmSvkkQGyljuu6jeiXgw` |

### GuardrailAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Assign Members to a Guardrail | POST | `/api/v1/guardrails/{{id}}/assignments/members` | `conn_mod_def::GJ57kpbr4hQ::7pmfh9hmTCqfF-43QMMQQQ` |

### GuardrailAssignmentsKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List Key Guardrail Assignments | GET | `/guardrails/assignments/keys` | `conn_mod_def::GJ57k44t6bs::GsFw0K9MRaCsuXhLxMrkjQ` |

### EmbeddingsModels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Embeddings Models | GET | `/embeddings/models` | `conn_mod_def::GJ57keOt3lU::COrR7QNqRPiV6q5qyvbAtQ` |

### GuardrailAssignmentsMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Member Guardrail Assignments | GET | `/guardrails/assignments/members` | `conn_mod_def::GJ57lFv6bWs::wTZKl3RkR3mVZCEDq5bd9w` |

### AuthKeysCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Authorization Code (PKCE) for a User-Controlled API Key | POST | `/auth/keys/code` | `conn_mod_def::GJ57lSDJ7r8::S_hvKdFUROOxZ_J-XEXF0g` |

### GuardrailKeyAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Guardrail’s Key Assignments | GET | `/guardrails/{{id}}/assignments/keys` | `conn_mod_def::GJ57lEj_hFQ::mAnxw-QlQ0OFyygMfVAZsw` |

### Endpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| List Endpoints Affected by ZDR | GET | `/endpoints/zdr` | `conn_mod_def::GJ57klRyLGs::l-9FKcyUSy-zWgdlqxhFjw` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current API Key Details | GET | `/key` | `conn_mod_def::GJ57kQGLL1E::2pJDDClCS8ufvtqbuOV4Qg` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Message (Anthropic Messages Format) | POST | `/messages` | `conn_mod_def::GJ57kIWAfMA::KG7BEH-MTcC_Zcc2QrnHHg` |

## When a call fails

The error comes from OpenRouter, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/open-router

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
