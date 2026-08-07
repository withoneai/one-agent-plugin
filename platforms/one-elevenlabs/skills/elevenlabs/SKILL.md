---
name: elevenlabs
description: ElevenLabs develops advanced text-to-speech and voice synthesis technologies. It allows users to generate natural, expressive AI voices for content creation, accessibility, and conversational AI. Read and write ElevenLabs data through One: voices, pronunciationdictionaries, studioprojects, convaiagents, mcpservers, studioprojectchapters and more, 259 actions with real parameter documentation. Use whenever the user asks to look something up in ElevenLabs, create or update a record there, or build code against the ElevenLabs API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: elevenlabs
  generated-from: one-knowledge-base
---

# ElevenLabs through One

ElevenLabs develops advanced text-to-speech and voice synthesis technologies. It allows users to generate natural, expressive AI voices for content creation, accessibility, and conversational AI.

One exposes ElevenLabs through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `elevenlabs` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ElevenLabs is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ElevenLabs account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Voices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a PVC Voice's Captcha | GET | `/voices/pvc/{{voiceId}}/captcha` | `conn_mod_def::GJ2a40Y3lPU::dsbswA8BQluPZN6kveXsYA` |
| Get a Voice by ID | GET | `/voices/{{voiceId}}` | `conn_mod_def::GJ2bHf_0Hxg::1XaLkn7sRoyjlTGiFm13EA` |
| Get a Voice’s Settings | GET | `/v1/voices/{{voiceId}}/settings` | `conn_mod_def::GJ2bHmQKfLc::ebmGYY0ISgmRHI-2r_Z75Q` |
| List a User’s Voices (V2) | GET | `/v2/voices` | `conn_mod_def::GJ2bIA7_M2I::cE7eNcuBRV2PKnSPLGbW9g` |
| List Voices | GET | `/voices` | `conn_mod_def::GJ2bILVD4HI::xJeUoyadS_6KOKgAoEQNrA` |
| Retrieve a Voice Sample’s Visual Waveform (PVC) | GET | `/voices/pvc/{{voiceId}}/samples/{{sampleId}}/waveform` | `conn_mod_def::GJ2a5hTPrd4::7y-T-qXdS6uzh0F3aI2XAw` |
| Retrieve Separated Speaker Audio for a Voice Sample | GET | `/v1/voices/pvc/{{voiceId}}/samples/{{sampleId}}/speakers/{{speakerId}}/audio` | `conn_mod_def::GJ2a5E8OwXo::iZXrnjzgQYKvJHUdU2wYMQ` |
| Add a Shared Voice to Your Collection | POST | `/voices/add/{{publicUserId}}/{{voiceId}}` | `conn_mod_def::GJ2bGjkizZA::jO04dJGhTf6y5H6iSnUTxg` |
| Add a Voice to VoiceLab | POST | `/voices/add` | `conn_mod_def::GJ2bGwRiv_Y::iWtxgUqlTk69_LMODn9nkQ` |
| Add Samples to a PVC Voice | POST | `/v1/voices/pvc/{{voiceId}}/samples` | `conn_mod_def::GJ2a4Lz0xPs::QONiR88nQS2ThmvCm1wtNQ` |
| Create a New Voice from a Voice Preview | POST | `/v1/text-to-voice` | `conn_mod_def::GJ2bF3LRIic::V6MWg1d6T5aX5v-sMrrWng` |
| Create a PVC Voice | POST | `/voices/pvc` | `conn_mod_def::GJ2a4TZ_S0c::XCmy2j8ZSS-1X8NGS3rK-g` |

9 more Voices actions are available through search.

### PronunciationDictionaries

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Pronunciation Dictionary Version PLS File | GET | `/v1/pronunciation-dictionaries/{{dictionaryId}}/{{versionId}}/download` | `conn_mod_def::GJ2a3UyH8Io::3fMV38XyREGu47XBXtPrwA` |
| Get a Pronunciation Dictionary’s Metadata | GET | `/v1/pronunciation-dictionaries/{{pronunciationDictionaryId}}` | `conn_mod_def::GJ2a3gZMDfk::ibtusgIYTveBs8Se3gPmOA` |
| List Pronunciation Dictionaries (Metadata) | GET | `/pronunciation-dictionaries` | `conn_mod_def::GJ2a3ryZ4mg::VOun-ryvSyyLRvuRFFVwNg` |
| Add a Pronunciation Dictionary (From Rules) | POST | `/pronunciation-dictionaries/add-from-rules` | `conn_mod_def::GJ2a3DlNRf4::QJNXNr_wR-CS90bxVlgvDA` |
| Add a Pronunciation Dictionary from a Lexicon File | POST | `/pronunciation-dictionaries/add-from-file` | `conn_mod_def::GJ2a27gi1ng::8GOU0-1wQl6IRRt6UgxNRA` |
| Add Rules to a Pronunciation Dictionary | POST | `/v1/pronunciation-dictionaries/{{pronunciationDictionaryId}}/add-rules` | `conn_mod_def::GJ2a3NBpoYU::CGtOJ-0gThSGu8blWXldBg` |
| Remove Rules From a Pronunciation Dictionary | POST | `/v1/pronunciation-dictionaries/{{pronunciationDictionaryId}}/remove-rules` | `conn_mod_def::GJ2a30fZRJg::uNC_y9ppRUWypWa0ijx0Ig` |
| Set Rules on a Pronunciation Dictionary | POST | `/v1/pronunciation-dictionaries/{{pronunciationDictionaryId}}/set-rules` | `conn_mod_def::GJ2a37W4ogQ::hxvu-STUS42tES9dkBoAYg` |
| Update a Pronunciation Dictionary | PATCH | `/pronunciation-dictionaries/{{pronunciationDictionaryId}}` | `conn_mod_def::GJ2a4C04ct4::WSwUedo1TG--9bonOikSzg` |

### StudioProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Muted Tracks | GET | `/studio/projects/{{projectId}}/muted-tracks` | `conn_mod_def::GJ2bC2MFynA::sw2S43UbT_uQ4nYB1pI0CQ` |
| Get a Studio Project by ID | GET | `/v1/studio/projects/{{projectId}}` | `conn_mod_def::GJ2bDKtyyAU::yr0RzYPXT42V9CGbeULkvA` |
| List Studio Projects | GET | `/studio/projects` | `conn_mod_def::GJ2bDuftREU::HtYTW8TXR0Kgq3NUs32WBA` |
| Convert a Studio Project | POST | `/v1/studio/projects/{{projectId}}/convert` | `conn_mod_def::GJ2a8Rtxa2w::HGY2M-qIStuQttcDUf0DYw` |
| Create a Studio Project | POST | `/studio/projects` | `conn_mod_def::GJ2a8ymEZa4::jIo-g7fYQ8WTrXzLx6HNuw` |
| Delete a Studio Project | DELETE | `/studio/projects/{{projectId}}` | `conn_mod_def::GJ2a9FK4b4M::OBAz8IZgSlOdJT29JzUwZQ` |
| Update a Studio Project | POST | `/v1/studio/projects/{{projectId}}` | `conn_mod_def::GJ2bEYBldUA::vnZ411y4QVC7gknMEneNMg` |
| Update a Studio Project’s Content | POST | `/v1/studio/projects/{{projectId}}/content` | `conn_mod_def::GJ2bEg4fAhQ::X3y5VNXSTgq2hgztAoXf6w` |

### ConvaiAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shareable Agent Link | GET | `/v1/convai/agents/{{agentId}}/link` | `conn_mod_def::GJ2ao5F2auI::mDIc3LhRSZCCSaUFOXIBjw` |
| Create a Conversational AI Agent | POST | `/convai/agents/create` | `conn_mod_def::GJ2ab_QFys8::ynVCltkRRL62uMeAjrDskQ` |
| Delete a Convai Agent | DELETE | `/convai/agents/{{agentId}}` | `conn_mod_def::GJ2adnjWWDA::k6_KrlQAQ9OPveCd1_e2JQ` |
| Run Tests on an Agent | POST | `/v1/convai/agents/{{agentId}}/run-tests` | `conn_mod_def::GJ2a1uHa7L4::jE_EkVvXRm-sGjk82PIaQw` |
| Simulate a Conversation for an Agent | POST | `/v1/convai/agents/{{agentId}}/simulate-conversation` | `conn_mod_def::GJ2asvR4rAs::BSYGO18jRruML11T5O9Qiw` |
| Simulate a Conversation for an Agent (Stream) | POST | `/v1/convai/agents/{{agentId}}/simulate-conversation/stream` | `conn_mod_def::GJ2as3cLuWQ::D-izjERsTZu2UUsHzRbo3w` |

### McpServers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an MCP Server | GET | `/v1/convai/mcp-servers/{{mcpServerId}}` | `conn_mod_def::GJ2aoPz_Oxo::OTcDGgS0RuC00rrV8AHfrw` |
| List MCP Servers | GET | `/convai/mcp-servers` | `conn_mod_def::GJ2aq1mi9-g::-YWGYNpNTe2kJ2ds0kaj_A` |
| Create an MCP Server (Workspace) | POST | `/convai/mcp-servers` | `conn_mod_def::GJ2acmvS568::-CHqMaOgT8eVaDBTnwQeLw` |
| Delete an MCP Server | DELETE | `/v1/convai/mcp-servers/{{mcpServerId}}` | `conn_mod_def::GJ2aee_DIQc::kiT6Haf-TXaspTSZip0QuQ` |
| Update an MCP Server’s Approval Policy (Deprecated) | PATCH | `/v1/convai/mcp-servers/{{mcpServerId}}/approval-policy` | `conn_mod_def::GJ2au3CbXbE::foirH9oPRYGFgPPY4H3Qfw` |
| Update an MCP Server’s Configuration | PATCH | `/v1/convai/mcp-servers/{{mcpServerId}}` | `conn_mod_def::GJ2au_mGzSU::jA82wM2wQoOa4L5lntqKVg` |

### StudioProjectChapters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Studio Project Chapter | GET | `/v1/studio/projects/{{projectId}}/chapters/{{chapterId}}` | `conn_mod_def::GJ2a9MZ6Uzc::XdTYFQJcTn-pzdTDx_ePMQ` |
| List a Studio Project’s Chapters | GET | `/v1/studio/projects/{{projectId}}/chapters` | `conn_mod_def::GJ2bDa-S6gI::CQDKuZZ0RK-XzcRkV0fG9g` |
| Convert a Studio Project Chapter | POST | `/v1/studio/projects/{{projectId}}/chapters/{{chapterId}}/convert` | `conn_mod_def::GJ2a8KRuBlw::5kiU4qBjT5iJbVr-2aF88w` |
| Create a Studio Project Chapter | POST | `/v1/studio/projects/{{projectId}}/chapters` | `conn_mod_def::GJ2a8Zj4G-k::NRRCIPVOS1GDeJoI4RhmBg` |
| Delete a Studio Project Chapter | DELETE | `/v1/studio/projects/{{projectId}}/chapters/{{chapterId}}` | `conn_mod_def::GJ2a89OJ5nQ::0h0WbKPWQ2uDN8xZNPgEZA` |
| Update a Studio Project Chapter | POST | `/v1/studio/projects/{{projectId}}/chapters/{{chapterId}}` | `conn_mod_def::GJ2bEQRDNtg::WSeKrdh0SQWWeeP03-RjpQ` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent | GET | `/v1/convai/agents/{{agentId}}` | `conn_mod_def::GJ2afyuV8Zk::P6MBog8GRlisOM0f2C1s8w` |
| List Agents | GET | `/v1/convai/agents` | `conn_mod_def::GJ2aqffBvso::rbgSekclR56-XEGjvrTvfw` |
| Duplicate an Agent | POST | `/v1/convai/agents/{{agentId}}/duplicate` | `conn_mod_def::GJ2afiXWDi8::PKjfR4ZHSbOY88CtQnHCIQ` |
| Patch an Agent’s Settings | PATCH | `/v1/convai/agents/{{agentId}}` | `conn_mod_def::GJ2arkJLVrM::YON9xSgaR_yIqltPUK71og` |
| Set an Agent's Avatar | POST | `/v1/convai/agents/{{agentId}}/avatar` | `conn_mod_def::GJ2arrx9lSc::neq27W8ETXu260h2w_9O5A` |

### KnowledgeBaseDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Knowledge Base Document’s Source File Download URL | GET | `/v1/convai/knowledge-base/{{documentationId}}/source-file-url` | `conn_mod_def::GJ2anYLBXAk::0-h1PsTrTe6N2B5orULVLg` |
| List Knowledge Base Documents | GET | `/convai/knowledge-base` | `conn_mod_def::GJ2an0JBku4::8QC1myZLTzKgA38e1FjyrA` |
| Compute a Knowledge Base Document’s RAG Index Status (and Trigger Indexing) | POST | `/v1/convai/knowledge-base/{{documentationId}}/rag-index` | `conn_mod_def::GJ2abigAGxA::9Wg0usPHSfybSW00rAfwhg` |
| Move a Knowledge Base Document to a Folder | POST | `/v1/convai/knowledge-base/{{documentId}}/move` | `conn_mod_def::GJ2awx3pjYk::H7QA8PhfSe-dTGQiNyx8SA` |
| Update a Knowledge Base Document | PATCH | `/v1/convai/knowledge-base/{{documentationId}}` | `conn_mod_def::GJ2auukqyFE::4kXXmd8aR_CV6JrdYQPdMw` |

### AgentResponseTests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent Response Test by ID | GET | `/v1/convai/agent-testing/{{testId}}` | `conn_mod_def::GJ2a0El7kgE::7MI13lN8QiOY_GjCckmzyQ` |
| List Agent Response Tests | GET | `/convai/agent-testing` | `conn_mod_def::GJ2a1E3xGrg::SQ3a3W96TDSkceiWZkU_Vw` |
| Create an Agent Response Test | POST | `/v1/convai/agent-testing/create` | `conn_mod_def::GJ2azv03Zy0::4MGVnYt6RBKyMQn0Bwc_eg` |
| Delete an Agent Response Test | DELETE | `/v1/convai/agent-testing/{{testId}}` | `conn_mod_def::GJ2az3xuCMc::_tSwzLo7SKaaHxmsoeyt7w` |
| Update an Agent Response Test | PUT | `/v1/convai/agent-testing/{{testId}}` | `conn_mod_def::GJ2a116cS7k::oqpc2ITWRMqI3slTFC-sMA` |

### History

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a History Item by ID | GET | `/history/{{historyItemId}}` | `conn_mod_def::GJ2a7I_5yQE::dbUldYS3S5SXT4TygjqXNw` |
| Get Audio From a History Item | GET | `/history/{{historyItemId}}/audio` | `conn_mod_def::GJ2a6-ZFXnU::yz8GKxnISE-eucNV_piUYA` |
| List Generated Audio History Items | GET | `/history` | `conn_mod_def::GJ2a7TVrlVs::5cuCy7crTvaQa8ynaavdJw` |
| Delete a History Item | DELETE | `/history/{{historyItemId}}` | `conn_mod_def::GJ2a6v0IuEQ::KKeiVz_nQwCVwL73AfPKqQ` |
| Download Speech History Items | POST | `/history/download` | `conn_mod_def::GJ2a63Na9P0::532hBszEQLGGzwYGbNi0Vg` |

### ConvaiTools

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a ConvAI Tool | GET | `/v1/convai/tools/{{toolId}}` | `conn_mod_def::GJ2apTzexbg::M4NybWZ_Tc6pmC3emmabfA` |
| Get Convai Tools (Workspace) | GET | `/convai/tools` | `conn_mod_def::GJ2apd4bQwI::JVHNB7-YSJG32rIuK1RWZw` |
| Add a Workspace Tool (ConvAI) | POST | `/convai/tools` | `conn_mod_def::GJ2aa8lpuFo::KtqhMrzITBeY-1ZBwH7Xlw` |
| Update a Workspace Tool | PATCH | `/v1/convai/tools/{{toolId}}` | `conn_mod_def::GJ2avYfGW4s::d1JqzgvwQJenOAJmCF57tg` |

### WhatsappAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a WhatsApp Account by Phone Number ID | GET | `/v1/convai/whatsapp-accounts/{{phoneNumberId}}` | `conn_mod_def::GJ2apucIWz8::eFJN3lrNQkqsa-NVmgyo3g` |
| List WhatsApp Accounts | GET | `/convai/whatsapp-accounts` | `conn_mod_def::GJ2arJ5VfaA::vaFAT-UpT1GvfU9WFFzQAQ` |
| Delete a WhatsApp Account | DELETE | `/v1/convai/whatsapp-accounts/{{phoneNumberId}}` | `conn_mod_def::GJ2afZfmvFw::YVdZCPsHQfuAej9aAV9cZw` |
| Update a WhatsApp Account | PATCH | `/v1/convai/whatsapp-accounts/{{phoneNumberId}}` | `conn_mod_def::GJ2avfTITIc::rcSgINWuRUeS59POd5v_kw` |

### DubbingResource

| Action | Method | Path | Action id |
|---|---|---|---|
| Dub All or Some Segments and Languages for a Dubbing Resource | POST | `/v1/dubbing/resource/{{dubbingId}}/dub` | `conn_mod_def::GJ2axo4-NYc::UUYC2hlrQ2aEeVhFYsObUA` |
| Move Segments Between Speakers (Dubbing Resource) | POST | `/v1/dubbing/resource/{{dubbingId}}/migrate-segments` | `conn_mod_def::GJ2aylxUG0U::PGUrpwJCQ36wkA9rkhXSJQ` |
| Render a Dubbing Resource for a Language | POST | `/v1/dubbing/resource/{{dubbingId}}/render/{{language}}` | `conn_mod_def::GJ2ayuO4nJg::0FKJIDCiRRm32qOyEpi8iw` |
| Transcribe Segments for a Dubbing Resource | POST | `/v1/dubbing/resource/{{dubbingId}}/transcribe` | `conn_mod_def::GJ2azLCTcGs::YloLsCY6Rq2ZgInACJAvQA` |

### Music

| Action | Method | Path | Action id |
|---|---|---|---|
| Compose Detailed Music (Song) From Prompt or Composition Plan | POST | `/music/detailed` | `conn_mod_def::GJ2a2O2D-T8::JJatz60rQEm5h_icnr2n8w` |
| Compose Music (Generate a Song) | POST | `/music` | `conn_mod_def::GJ2a2GLsRV0::vv5dSvlESQ-OVEbr7bE1nQ` |
| Stream Composed Music | POST | `/v1/music/stream` | `conn_mod_def::GJ2a2pVU7eo::M8cu22S-RmqtPQPM-j1UTA` |
| Upload Music for Inpainting | POST | `/music/upload` | `conn_mod_def::GJ2a2xFbWwI::_yALjThxSNKmqvUWaVf9Wg` |

### TextToSpeech

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert Text to Speech with a Voice | POST | `/text-to-speech/{{voiceId}}` | `conn_mod_def::GJ2bFPL5uv0::ij7bSi4TSmSHXxwq8pU-zg` |
| Generate Text-to-Speech With Character Timestamps for a Voice | POST | `/v1/text-to-speech/{{voiceId}}/with-timestamps` | `conn_mod_def::GJ2bFu8cdZQ::8XBlomDIRkKVDzfDd8pWlQ` |
| Stream Text-to-Speech Audio for a Voice | POST | `/text-to-speech/{{voiceId}}/stream` | `conn_mod_def::GJ2bFbPmWCY::jstVlDcGS6OSYMEokFgKzQ` |
| Stream Text-to-Speech With Timestamps (for a Voice) | POST | `/v1/text-to-speech/{{voiceId}}/stream/with-timestamps` | `conn_mod_def::GJ2bFj8_rS8::BXsw7r6ZSByt2nXzYiRhGw` |

### ServiceAccountApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Service Account’s API Keys | GET | `/v1/service-accounts/{{serviceAccountUserId}}/api-keys` | `conn_mod_def::GJ2bJx7AiBY::w7zQ6SdOQle2uvp3Lt4spQ` |
| Create a Service Account API Key | POST | `/v1/service-accounts/{{serviceAccountUserId}}/api-keys` | `conn_mod_def::GJ2bIiW8jiM::nNVXFsQARSaouuu4fOpeeQ` |
| Delete a Service Account’s API Key | DELETE | `/v1/service-accounts/{{serviceAccountUserId}}/api-keys/{{apiKeyId}}` | `conn_mod_def::GJ2bJGx5jAA::Tga2_fKBQYaWrUYPAwTTvg` |

1 more ServiceAccountApiKeys actions are available through search.

This lists 90 of 259 actions. For anything not here, call `search_one_platform_actions` with platform `elevenlabs`. The full catalog is at https://www.withone.ai/knowledge/elevenlabs.

## When a call fails

The error comes from ElevenLabs, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/elevenlabs

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
