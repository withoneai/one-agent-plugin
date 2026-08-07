---
name: hey-gen
description: HeyGen is an AI video generation platform that enables users to create, translate, and personalize high-quality videos using realistic AI avatars and voiceovers, allowing businesses and creators to produce scalable video content from text without cameras or editing expertise. Read and write HeyGen data through One: videos, videotranslations, lipsyncs, webhookendpoints, videoagents, avatarlooks and more, 62 actions with real parameter documentation. Use whenever the user asks to look something up in HeyGen, create or update a record there, or build code against the HeyGen API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: hey-gen
  generated-from: one-knowledge-base
---

# HeyGen through One

HeyGen is an AI video generation platform that enables users to create, translate, and personalize high-quality videos using realistic AI avatars and voiceovers, allowing businesses and creators to produce scalable video content from text without cameras or editing expertise.

One exposes HeyGen through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `hey-gen` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm HeyGen is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real HeyGen account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Video | GET | `/v3/videos/{{videoId}}` | `conn_mod_def::GKhIPvNoFvA::R4-m0EIoRwiOXFD731w0rA` |
| Get Video Details | GET | `/v2/videos/{{videoId}}` | `conn_mod_def::GKhIPuOQjDA::cRg3n04iSeaBIkSGZULscQ` |
| List Videos | GET | `/v2/videos` | `conn_mod_def::GKhIPwNIudA::_kGRBS5pQHmKZJQEwF-4PQ` |
| List Videos | GET | `/v3/videos` | `conn_mod_def::GKhIP53B3IA::_6951nYjSS2428hh9CNRQQ` |
| Create Avatar Video | POST | `/v2/videos` | `conn_mod_def::GKhIPlqZqog::8lO_NoWdTlqmEGaj5G9wBQ` |
| Create Video | POST | `/v3/videos` | `conn_mod_def::GKhIPmE-4kA::s2hBlHAESECw0pqnNzmh3Q` |
| Delete a Video | DELETE | `/v3/videos/{{videoId}}` | `conn_mod_def::GKhIPusMKqA::prjoCw3cSlOY_T0TD-uXnQ` |
| Delete a Video | DELETE | `/v2/videos/{{videoId}}` | `conn_mod_def::GKhIPxA5Hng::cDRE53i1Tx2iW-HNESlLEg` |

### VideoTranslations

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Proofread SRT | GET | `/v3/video-translations/proofreads/{{proofreadId}}/srt` | `conn_mod_def::GKhIPSs_Xxg::qXOHEs2NTNyF-dHJz2SaRw` |
| Get a Video Translation | GET | `/v3/video-translations/{{videoTranslationId}}` | `conn_mod_def::GKhIPcn5htg::djAu_2D1TROAvtPp-ZF_xQ` |
| List Video Translations | GET | `/v3/video-translations` | `conn_mod_def::GKhIPmF7sKg::YrtdichKRVmx8CdHWVcvSQ` |
| Create Video Translation | POST | `/v3/video-translations` | `conn_mod_def::GKhIPRylUbA::7SGWGYh0QI2viqG4LMVUAQ` |
| Delete a Video Translation | DELETE | `/v3/video-translations/{{videoTranslationId}}` | `conn_mod_def::GKhIPR5rsgA::Gnv67RkyTbSD9okzmygBFw` |
| Generate Video from a Proofread Session | POST | `/v3/video-translations/proofreads/{{proofreadId}}/generate` | `conn_mod_def::GKhIPSzr1pg::uxbiqsLgRfe8ptmeJcBccQ` |
| Update a Video Translation | PATCH | `/v3/video-translations/{{videoTranslationId}}` | `conn_mod_def::GKhIPl1z95A::HmZxEZClTSu7mKF19AxzKQ` |

### Lipsyncs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lipsync | GET | `/v3/lipsyncs/{{lipsyncId}}` | `conn_mod_def::GKhIO1-0lGg::bw9GCKCcQ1Kow1nfVRNiig` |
| List Lipsyncs | GET | `/v3/lipsyncs` | `conn_mod_def::GKhIO1-0dSg::e-cPX-l-SxCN3_0uHfIqcA` |
| Create Lipsync | POST | `/v3/lipsyncs` | `conn_mod_def::GKhIOpLOjfA::P11I14ekQa6ViMHCcK588g` |
| Delete Lipsync | DELETE | `/v3/lipsyncs/{{lipsyncId}}` | `conn_mod_def::GKhIOpcB9qA::XZGN-HFFSDyCCd5WdmLj4w` |
| Update a Lipsync | PATCH | `/v3/lipsyncs/{{lipsyncId}}` | `conn_mod_def::GKhIO2Gwi3g::O5ef-4ZfSqqtI4k15Z1ZOA` |

### WebhookEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Endpoints | GET | `/v3/webhooks/endpoints` | `conn_mod_def::GKhIQGVZq9g::kaIdNSASTiytnKHNg1JW9w` |
| Create Webhook Endpoint | POST | `/v3/webhooks/endpoints` | `conn_mod_def::GKhIQF_FBXg::G5krDX6XRL6ckZ4ujERuhA` |
| Delete a Webhook Endpoint | DELETE | `/v3/webhooks/endpoints/{{endpointId}}` | `conn_mod_def::GKhIQF0jvhg::i1PMtD7LSg2krTfQGnsS2A` |
| Rotate a Webhook Endpoint's Signing Secret | POST | `/v3/webhooks/endpoints/{{endpointId}}/rotate-secret` | `conn_mod_def::GKhIQPvi7ug::1txOTRj9SAqqrmFkxDj9GQ` |
| Update a Webhook Endpoint | PATCH | `/v3/webhooks/endpoints/{{endpointId}}` | `conn_mod_def::GKhIQPZH57g::IUiD_18OSIiEJaMXoNDdPg` |

### VideoAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Video Agent Session | GET | `/v3/video-agents/{{sessionId}}` | `conn_mod_def::GKhIPAt0DEg::5g5UDPDSSo66vzx1lZwjZQ` |
| Create Video Agent Session | POST | `/v3/video-agents` | `conn_mod_def::GKhIPAsA57g::k_l30feaTU2-B5xOjJ3apQ` |
| Send a Message or Request a Revision for a Video Agent Session | POST | `/v3/video-agents/{{sessionId}}` | `conn_mod_def::GKhIPJ16V3g::Vq8rb6W9S1WydeOSLhwj-w` |
| Stop a Video Agent Session | POST | `/v3/video-agents/{{sessionId}}/stop` | `conn_mod_def::GKhIPJQLvsA::ERVqL5mnSVaa_J3V94BG4A` |

### AvatarLooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Avatar Look | GET | `/v3/avatars/looks/{{lookId}}` | `conn_mod_def::GKhIOgSwtAg::xTGvx9hMRoS7JP0yEhWDoQ` |
| List Avatar Looks | GET | `/v3/avatars/looks` | `conn_mod_def::GKhIOsvcUCg::QAp17QNmTy-BWKm4qeYtUw` |
| Update an Avatar Look | PATCH | `/v3/avatars/looks/{{lookId}}` | `conn_mod_def::GKhIOrD-x7g::56WoTnEZRpi39hmUV1SxZQ` |

### Voices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Voices | GET | `/v3/voices` | `conn_mod_def::GKhIP7QGFlA::TsT5V841T-uK_RxDezxNMQ` |
| Design a Voice | POST | `/v3/voices` | `conn_mod_def::GKhIP4_diog::msKoxLdlRaKQWuElKnw1Ow` |
| Generate Speech | POST | `/v3/voices/speech` | `conn_mod_def::GKhIP53TRYg::GJE-nBcgSTmJynPWCVvX0w` |

### Avatars

| Action | Method | Path | Action id |
|---|---|---|---|
| List Avatar Groups | GET | `/v3/avatars` | `conn_mod_def::GKhIOpLYSiA::f3vpqIzjQs6ptMZReAelTQ` |
| Create Avatar | POST | `/v3/avatars` | `conn_mod_def::GKhIOdwoRNg::H_J9jhPnSTC6PPsug-KU5A` |

### WorkflowExecutions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Workflow Execution Status | GET | `/v1/workflows/executions/{{executionId}}` | `conn_mod_def::GKhIQY7D4qg::g9UbA-iMTiWphLlaKKYRxg` |
| Create a Workflow Execution | POST | `/v1/workflows/executions` | `conn_mod_def::GKhIQPuRivg::MH7UuMWdRr6eJ4cq4yX3UQ` |

### AvatarGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Avatar Group | GET | `/v3/avatars/{{groupId}}` | `conn_mod_def::GKhIOawntcA::E3fQryPFRwyR_qOLO1zS3w` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Asset | POST | `/v3/assets` | `conn_mod_def::GKhIObHnqhA::x5s9KLOkTwO9e8lEavoCNA` |

### AvatarConsent

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Avatar Consent for an Avatar Group | POST | `/v3/avatars/{{groupId}}/consent` | `conn_mod_def::GKhIOcw_Leg::5u9LiKtoQ_uuNciwgF3YKQ` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User Info, Remaining Credits, and Billing | GET | `/v1/user/me` | `conn_mod_def::GKhIO2HUBYA::vAbNfQOQSgW0NEg8-xg2nw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/v3/users/me` | `conn_mod_def::GKhIO3RryYA::p8D8kGF_T7OctoAuiuFm0A` |

### VideoAgentSessionResources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Video Agent Session Resource | GET | `/v3/video-agents/{{sessionId}}/resources/{{resourceId}}` | `conn_mod_def::GKhIPADkknA::Sg3djILtRpWjHRS3K2lcvw` |

### VideoAgent

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Video from a Prompt | POST | `/v1/video_agent/generate` | `conn_mod_def::GKhIPARFHqg::PhC_QHYtQQqG7HYB5Vd43g` |

### VideoAgentSessionsVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Video Agent Session's Videos | GET | `/v3/video-agents/{{sessionId}}/videos` | `conn_mod_def::GKhIPAjrs7g::j4wAXE2aTCKKZA3Rk9CMNg` |

### ProofreadSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Proofread Session | POST | `/v3/video-translations/proofreads` | `conn_mod_def::GKhIPI2CPMg::uY_gX8YPSV2sTpZd4NsFkw` |

### VideoAgentSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Video Agent Sessions | GET | `/v3/video-agents` | `conn_mod_def::GKhIPJONsTg::3JuGO_iZSZaBmBjPn60QNQ` |

### VideoAgentStyles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Video Agent Styles | GET | `/v3/video-agents/styles` | `conn_mod_def::GKhIPJ319-g::odRJYgPaTl-Uqk8cVYskHA` |

### VideoTranslation

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Video Translation | POST | `/v2/video_translate` | `conn_mod_def::GKhIPSY7ksA::-YQHNc2fQGO0S4JCU1t46A` |

### VideoTranslationsLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Translation Languages | GET | `/v3/video-translations/languages` | `conn_mod_def::GKhIPbJpj0A::hMAPz_40QNObEnpTCBtsgQ` |

### VideoTranslationProofreadSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Video Translation Proofread Session | GET | `/v3/video-translations/proofreads/{{proofreadId}}` | `conn_mod_def::GKhIPbJ1HEg::i8-SUCPfRMqKi8gRg4Y7zA` |

### VideoTranslateCaption

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Video Translate Caption | GET | `/v2/video_translate/caption` | `conn_mod_def::GKhIPbWc5UA::wKtahrg_SkKxZaqsdTOtCg` |

### VideoTranslateLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Video Translate Languages | GET | `/v2/video_translate/target_languages` | `conn_mod_def::GKhIPdUAU5A::hlosVeviSCWY-lfG-ll8fA` |

### VideoTranslationsProofreads

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Proofread SRT | PUT | `/v3/video-translations/proofreads/{{proofreadId}}/srt` | `conn_mod_def::GKhIPmU3Ayg::2ZwmTe-_ROuOs_a8gbbeJg` |

### Audio

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Speech Audio From Text | POST | `/v1/audio/text_to_speech` | `conn_mod_def::GKhIP9xFHIg::MF4rIjDeQaitFhXybp15cQ` |

### WebhookEventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Event Types | GET | `/v3/webhooks/event-types` | `conn_mod_def::GKhIQFesMPA::fXaynsDgR7OodnrY6isTOw` |

### AudioVoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audio Voices | GET | `/v1/audio/voices` | `conn_mod_def::GKhIQHFIZ5A::NV4gkIWJQnOngSv809hrOg` |

### GraphExecutions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Graph Execution | POST | `/v1/workflows/graph-executions` | `conn_mod_def::GKhIQPYVqHA::bEi8BjJ_Skesz4ZDYC0sPw` |

### WebhookEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Events | GET | `/v3/webhooks/events` | `conn_mod_def::GKhIQQfN6bA::pv49TmdmQGSc4URWsPwkvQ` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Workflows | GET | `/v1/workflows` | `conn_mod_def::GKhIQX9D9Zg::j0CeYvYwTcKG0Ec-Xn77ew` |

## When a call fails

The error comes from HeyGen, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/hey-gen

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
