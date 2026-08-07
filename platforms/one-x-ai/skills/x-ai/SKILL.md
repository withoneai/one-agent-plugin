---
name: x-ai
description: xAI is an artificial intelligence company focused on developing advanced AI systems that are truthful, curious, and capable of reasoning, with the goal of understanding the true nature of the universe. Read and write X AI data through One: videos, responses, embeddingmodels, languagemodels, models, images and more, 27 actions with real parameter documentation. Use whenever the user asks to look something up in X AI, create or update a record there, or build code against the X AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: x-ai
  generated-from: one-knowledge-base
---

# X AI through One

xAI is an artificial intelligence company focused on developing advanced AI systems that are truthful, curious, and capable of reasoning, with the goal of understanding the true nature of the universe.

One exposes X AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `x-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm X AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real X AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deferred Video Generation Result | GET | `/v1/videos/{{requestId}}` | `conn_mod_def::GJ8XVvU2QLk::6I-yuGdgTc2iyemgRppQNg` |
| Edit a Video Based on a Prompt | POST | `/videos/edits` | `conn_mod_def::GJ8XVh1iRC8::lySRchrJSFuBJH40olvTHg` |
| Generate a Video | POST | `/videos/generations` | `conn_mod_def::GJ8XVg4A-DY::Lfj4ArWbQqWruthI1Y9N0g` |

### Responses

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Stored Response | GET | `/v1/responses/{{responseId}}` | `conn_mod_def::GJ8XV1mXLxg::CAYyghkpRlSRM5F6fQapGg` |
| Delete a Stored Response | DELETE | `/responses/{{responseId}}` | `conn_mod_def::GJ8XVgOu-ic::USRBaxpIQhi7dhmwnNIkWA` |
| Generate a Model Response (Text and/or Image Prompts) | POST | `/responses` | `conn_mod_def::GJ8XVpGx1HU::TtSV3WA1RD2wZFoz5nN6cw` |

### EmbeddingModels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Embedding Model's Details | GET | `/v1/embedding-models/{{modelId}}` | `conn_mod_def::GJ8XVoxG1L4::1tfzn5slSxeK7ll67lzMhA` |
| List Embedding Models | GET | `/embedding-models` | `conn_mod_def::GJ8XVvFMMfs::pga1GPujRlqfQNW5_yhWtA` |

### LanguageModels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Language Model's Details | GET | `/v1/language-models/{{modelId}}` | `conn_mod_def::GJ8XVpF5sOU::h4CL_UkbTA67W4DHbfFUQA` |
| List Available Language Models (Full Info) | GET | `/v1/language-models` | `conn_mod_def::GJ8XVu7XnPI::8IsJkWc_TYOFSFGiXHOeTg` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Model's Minimal Information | GET | `/models/{{modelId}}` | `conn_mod_def::GJ8XVutv5YU::oqihbNW7TIiJ4jYh79X2og` |
| List Available Models | GET | `/models` | `conn_mod_def::GJ8XV1raX4A::LqSQ1qRlSHG8XlJXDdptrA` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit an Image from a Prompt | POST | `/v1/images/edits` | `conn_mod_def::GJ8XViZ157g::vQhUUJY4TIqqV5oHoue73Q` |
| Generate an Image | POST | `/images/generations` | `conn_mod_def::GJ8XVhsvjYc::T3TwNw-URASa97MrOR63IQ` |

### VideoGenerationModels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Video Generation Model | GET | `/video-generation-models/{{modelId}}` | `conn_mod_def::GJ8XVnzdguE::c56nlOpMTfafUsJQS2FrQw` |
| List Video Generation Models | GET | `/video-generation-models` | `conn_mod_def::GJ8XV2T3o8g::dv3AdoTSQyaZpdAG7IMKzg` |

### ImageGenerationModels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Image Generation Model | GET | `/v1/image-generation-models/{{modelId}}` | `conn_mod_def::GJ8XVon58Gs::MErQRRU0S3Cf-qaKy_F3zA` |
| List Image Generation Models | GET | `/v1/image-generation-models` | `conn_mod_def::GJ8XV1smR9Y::l9se3DZ5Q7upDHlkf42_aA` |

### LegacyTextCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Legacy Text Completion (Anthropic-Compatible) | POST | `/complete` | `conn_mod_def::GJ8XVaIrn34::i7dLW_lQTDyXhO8HhZqRqA` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Message Response (Anthropic-compatible) | POST | `/messages` | `conn_mod_def::GJ8XVa5mIWM::gtqG2vlLQriWdGCevbROCQ` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Documents in Collections | POST | `/documents/search` | `conn_mod_def::GJ8XV2BNi7w::3vM06XzCTh6m0mNZ-00TKg` |

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Chat Completion | POST | `/chat/completions` | `conn_mod_def::GJ8XVadI5tM::DPfbppXEQcykqfDIUoeNgw` |

### ChatDeferredCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deferred Chat Completion Result | GET | `/v1/chat/deferred-completion/{{requestId}}` | `conn_mod_def::GJ8XV8I_AX0::2_Tg2FuATxmDBgDr5CLjnw` |

### TokenizeText

| Action | Method | Path | Action id |
|---|---|---|---|
| Tokenize Text | POST | `/tokenize-text` | `conn_mod_def::GJ8XV-m6QdE::Jb0FKdexTxKkZSmWMb5D0g` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Key Information | GET | `/api-key` | `conn_mod_def::GJ8XVvFfYLY::QqyL4WznQNyIyPusb1XmRw` |

### Embeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Embeddings | POST | `/v1/embeddings` | `conn_mod_def::GJ8XVahagIs::pVLq5r4WTxGimpuDXNqsDQ` |

### Completions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Text Completion (Legacy) | POST | `/v1/completions` | `conn_mod_def::GJ8XVbBavB4::qnyaPl_ATpmv_YtuwsRDVw` |

## When a call fails

The error comes from X AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/x-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
