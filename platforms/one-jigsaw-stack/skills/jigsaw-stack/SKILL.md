---
name: jigsaw-stack
description: JigsawStack is a developer platform that provides APIs for web scraping, data extraction, document processing, AI-powered search, and related automation tasks, allowing teams to build applications that collect, transform, and use web and unstructured data programmatically. Read and write JigsawStack data through One: promptengine, storefile, web, aisentiment, clonedttsvoices, ttsclone and more, 37 actions with real parameter documentation. Use whenever the user asks to look something up in JigsawStack, create or update a record there, or build code against the JigsawStack API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: jigsaw-stack
  generated-from: one-knowledge-base
---

# JigsawStack through One

JigsawStack is a developer platform that provides APIs for web scraping, data extraction, document processing, AI-powered search, and related automation tasks, allowing teams to build applications that collect, transform, and use web and unstructured data programmatically.

One exposes JigsawStack through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `jigsaw-stack` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm JigsawStack is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real JigsawStack account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### PromptEngine

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Prompt Engine by ID | GET | `/v1/prompt_engine/{{id}}` | `conn_mod_def::GMhtMKPqzrA::EYceGr9YThqyTm15CHim0Q` |
| Get Prompt Engine | GET | `/v1/prompt_engine` | `conn_mod_def::GMhtMJE6SsA::Ueq8MDoESSG1DtWwOZ4HGg` |
| Delete a Prompt Engine | DELETE | `/v1/prompt_engine/{{id}}` | `conn_mod_def::GMhtL_pfTdA::SaTfk5T3SFKKVrvs4xlvBA` |
| Prompt Engine | POST | `/v1/prompt_engine` | `conn_mod_def::GMhtMl9dUGg::0Z7H-vafTsyTCQ9RtfjmyQ` |
| Prompt Engine by ID | POST | `/v1/prompt_engine/{{id}}` | `conn_mod_def::GMhtMmmh5mA::fhYSuYhlRTmgEbDOjGRFHg` |
| Run Prompt Engine | POST | `/v1/prompt_engine/run` | `conn_mod_def::GMhtMm7_lnA::uS1B4Eh-TKKRw7csnD7kSg` |

### StoreFile

| Action | Method | Path | Action id |
|---|---|---|---|
| Read a Store File | GET | `/v1/store/file/read/{{key}}` | `conn_mod_def::GMhtMI7Zmog::3PaWT3bxTv2xc2l5h8LItw` |
| Read a Store File by Key | HEAD | `/v1/store/file/read/{{key}}` | `conn_mod_def::GMhtMQql9Lg::5KOx59RzTMy-d22qGJd8qg` |
| Store File | POST | `/v1/store/file` | `conn_mod_def::GMhtMmaTK3g::qqXuymfBTXuJrZFHu8KvFQ` |

### Web

| Action | Method | Path | Action id |
|---|---|---|---|
| Deep Research Using Web | POST | `/v1/web/deep_research` | `conn_mod_def::GMhtMtpNa8g::5jAbMbUrTO-uKJXrYxSLbA` |
| HTML to Any Using Web | POST | `/v1/web/html_to_any` | `conn_mod_def::GMhtMzOyegA::P2_-puVCSkeysRBjixIKkg` |

### AiSentiment

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AI Sentiment | GET | `/v1/ai/sentiment` | `conn_mod_def::GMhtL_IlEoA::z_ROVeowQJiIvtPqxOq9ZQ` |

### ClonedTtsVoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Cloned TTS Voice | DELETE | `/v1/ai/tts/clone/{{voiceId}}` | `conn_mod_def::GMhtMAeG_rg::sgsETMSkROKdeCfzhRNC7w` |

### TtsClone

| Action | Method | Path | Action id |
|---|---|---|---|
| Get TTS Clone Using AI | GET | `/v1/ai/tts/clone` | `conn_mod_def::GMhtMAgzqdg::Ccj8xTtCTWaODTRUFiT2cg` |

### StoreFileReadRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Store File Read Record | DELETE | `/v1/store/file/read/{{key}}` | `conn_mod_def::GMhtMA-fgTg::-VrpFsVnSSuhVaqF47-Ybg` |

### WebSearchSuggest

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Suggest Using Web | GET | `/v1/web/search/suggest` | `conn_mod_def::GMhtMIf-xEA::ryufhmsVT6KUq75WoRLwNA` |

### Ping

| Action | Method | Path | Action id |
|---|---|---|---|
| Ping | GET | `/v1/ping` | `conn_mod_def::GMhtMKqupkA::rNufRBaoTnK1tHD9TBeqTQ` |

### Prediction

| Action | Method | Path | Action id |
|---|---|---|---|
| Prediction Using AI | POST | `/v1/ai/prediction` | `conn_mod_def::GMhtMQqwCsA::FYPDm7plRAqtLr5ZSloFfA` |

### Sentiment

| Action | Method | Path | Action id |
|---|---|---|---|
| Sentiment Using AI | POST | `/v1/ai/sentiment` | `conn_mod_def::GMhtMQwNUNA::-XoMAIwrQMCiBAcOb_Zf0g` |

### ImageGenerationUsingAi

| Action | Method | Path | Action id |
|---|---|---|---|
| Image Generation Using AI | POST | `/v1/ai/image_generation` | `conn_mod_def::GMhtMQwUFzA::au_rLZiwTAiwYyt3XZKK9g` |

### AiScrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Content Using AI | POST | `/v1/ai/scrape` | `conn_mod_def::GMhtMRLnFag::GrW5wtzJRG6OepXiVlLmVw` |

### SqlUsingAi

| Action | Method | Path | Action id |
|---|---|---|---|
| SQL Using AI | POST | `/v1/ai/sql` | `conn_mod_def::GMhtMXAMIbA::t9ZdQn3EQ4GqCkXK2gJgJg` |

### AiTranscribeHook

| Action | Method | Path | Action id |
|---|---|---|---|
| Hook Using AI Transcribe | POST | `/v1/ai/transcribe/hook` | `conn_mod_def::GMhtMXTpaqg::3L1-sdYZQfKWQ3FyjpYRYA` |

### AiTranscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Transcribe Audio Using AI | POST | `/v1/ai/transcribe` | `conn_mod_def::GMhtMXavB6g::vfY58MMYQyWODHCMIOnkPw` |

### AiTranslateImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Translate Image Using AI | POST | `/v1/ai/translate/image` | `conn_mod_def::GMhtMXu9CUg::IrPB6io5Q5q2KT_ta6o1pQ` |

### TranslateTextUsingAi

| Action | Method | Path | Action id |
|---|---|---|---|
| Translate Text Using AI | POST | `/v1/ai/translate` | `conn_mod_def::GMhtMYY4pTA::S6hbkLjoQnOKxzGVv3_NGQ` |

### TextToSpeechUsingAi

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Speech Using AI | POST | `/v1/ai/tts` | `conn_mod_def::GMhtMeUnKoA::wn023MHxRwKcD7GVdKT60A` |

### TtsVoice

| Action | Method | Path | Action id |
|---|---|---|---|
| Clone TTS Voice | POST | `/v1/ai/tts/clone` | `conn_mod_def::GMhtMeXjnLA::In96-Z-jSYuAJhdYlcA6RQ` |

### Classification

| Action | Method | Path | Action id |
|---|---|---|---|
| Classification | POST | `/v1/classification` | `conn_mod_def::GMhtMeeXY0g::afpdwxKxTUScuMPTqu7nsw` |

### ObjectDetection

| Action | Method | Path | Action id |
|---|---|---|---|
| Object Detection | POST | `/v1/object_detection` | `conn_mod_def::GMhtMe5vcqA::3IoY5F1wROiJNzzugSo19A` |

### Embedding

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Embedding | POST | `/v1/embedding` | `conn_mod_def::GMhtMguaI0g::IS328xRASdSr4sv3cEjuKQ` |

### NsfwContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate NSFW Content | POST | `/v1/validate/nsfw` | `conn_mod_def::GMhtMmdfn1A::pNj9mFeKQ8CjqPLoaHx9YA` |

### Vocr

| Action | Method | Path | Action id |
|---|---|---|---|
| Vocr | POST | `/v1/vocr` | `conn_mod_def::GMhtMs4kbgA::cc8mwobHQC6lZJRu1vGngA` |

### SpellCheckValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Spell Check Validation | POST | `/v1/validate/spell_check` | `conn_mod_def::GMhtMtPy9Mg::nBzBDJW-Tb-v_oA-Zzj-Mw` |

### SpamCheckValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Spam Check Validation | POST | `/v1/validate/spam_check` | `conn_mod_def::GMhtMtXYy8g::AooRepsXQxmGWB5DLMdaLA` |

### ProfanityValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Profanity | POST | `/v1/validate/profanity` | `conn_mod_def::GMhtMtdr30g::6pBKjc52RWOjWwCWbAFAQg` |

### WebSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search the Web | POST | `/v1/web/search` | `conn_mod_def::GMhtMz_XWRg::bIJ6C1NfS7u7YaX8_GQZPA` |

## When a call fails

The error comes from JigsawStack, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/jigsaw-stack

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
