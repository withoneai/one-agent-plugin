---
name: all-images-ai
description: All Images AI is a generative media platform that provides AI-powered image creation and editing tools, enabling developers, marketers, and content teams to generate visuals, automate creative workflows, and integrate image generation capabilities into applications and digital content processes. Read and write All Images AI data through One: imagegenerations, images, apikeys, apikeywebhooks, credits, webhooksubscriptions and more, 16 actions with real parameter documentation. Use whenever the user asks to look something up in All Images AI, create or update a record there, or build code against the All Images AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: all-images-ai
  generated-from: one-knowledge-base
---

# All Images AI through One

All Images AI is a generative media platform that provides AI-powered image creation and editing tools, enabling developers, marketers, and content teams to generate visuals, automate creative workflows, and integrate image generation capabilities into applications and digital content processes.

One exposes All Images AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `all-images-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm All Images AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real All Images AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ImageGenerations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Image Generation | GET | `/v1/image-generations/{{imageGenerationId}}` | `conn_mod_def::GMkK2Lz_WKg::WhwAslPsSUudDFTzoU35Og` |
| Get Image Generations | GET | `/v1/image-generations` | `conn_mod_def::GMkK2NCZzzg::HNyaJOgMQDyolAOpZESkzg` |
| Create an Image Generation | POST | `/v1/image-generations` | `conn_mod_def::GMkK2LdAM2A::w3e_cJq_TuaUYesMKpmZdA` |
| Delete Image Generations | DELETE | `/v1/image-generations` | `conn_mod_def::GMkK2LwaSAg::_iMvWxt3RtSBWoLAovTcHw` |
| Retry an Image Generation | POST | `/v1/image-generations/retry/{{imageGenerationId}}` | `conn_mod_def::GMkK2Lw-v_g::XqH0gG6NTI6UdieECCtQqg` |
| Update an Image Generation | PUT | `/v1/image-generations/{{printId}}` | `conn_mod_def::GMkK2Toksyg::eFl7k8HKQKGpsdmI7y39vQ` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Image | GET | `/v1/images/{{format}}/{{imageId}}.jpg` | `conn_mod_def::GMkK2CcU5dg::Y-HFuQBPRwOs_04UzLagCw` |
| Buy Image | POST | `/v1/images/buy` | `conn_mod_def::GMkK2C8NdKg::KtZgkc4HRdWLcYynTVy-HA` |
| Download Image | POST | `/v1/images/download` | `conn_mod_def::GMkK2DaWKqg::xBH4eDzWRD2LGBScjUzaqg` |
| Search Images | POST | `/v1/images/search` | `conn_mod_def::GMkK2FUUvwg::EwmD50QBTDKjMzvaAbXFfg` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Check API Key Validity | GET | `/v1/api-keys/check` | `conn_mod_def::GMkK154Pv9g::bj0i3TZ2QnaFHCfbRtrpRA` |
| Remove Webhook Endpoint From an API Key | DELETE | `/v1/api-keys/webhook/unsubscribe/{{apiWebhookId}}` | `conn_mod_def::GMkK16JISQg::pj8TTy0sT66WcQ7IlVGh-w` |

### ApiKeyWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook by ID | GET | `/v1/api-keys/webhook/{{apiKeyWebhookId}}` | `conn_mod_def::GMkK16g13Qg::ZdKWn2xMR8iupucxgUf71w` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credits | GET | `/v1/credit` | `conn_mod_def::GMkK16hRc4g::bTzrFMvhSESG2YSh2Gja7w` |

### WebhookSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Subscribe an API Key to Webhook Events | POST | `/v1/api-keys/webhook/subscribe` | `conn_mod_def::GMkK19ACVwg::P_0UHafKQiaztmw-iy7Alw` |

### ImagesDownloaded

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Images Downloaded | POST | `/v1/images/downladed` | `conn_mod_def::GMkK2DFxCxA::TetWGQamS1SO7loOp_VkxA` |

## When a call fails

The error comes from All Images AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/all-images-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
