---
name: kie-ai
description: Kie AI is an AI platform that provides APIs for generating images, video, music, and voice content, enabling developers and businesses to integrate multimodal generative capabilities into applications, creative workflows, and automated content production systems. Read and write Kie AI data through One: jobs, claudemessages, responses, musicgeneration, downloadurl, remainingcredits and more, 171 actions with real parameter documentation. Use whenever the user asks to look something up in Kie AI, create or update a record there, or build code against the Kie AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: kie-ai
  generated-from: one-knowledge-base
---

# Kie AI through One

Kie AI is an AI platform that provides APIs for generating images, video, music, and voice content, enabling developers and businesses to integrate multimodal generative capabilities into applications, creative workflows, and automated content production systems.

One exposes Kie AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `kie-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Kie AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Kie AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Bytedance Seedance 1.5 Pro Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MJxH-abg::KJCIgCAgQL2DYXUhZMIYIA` |
| Create a Bytedance Seedance 2.0 Fast Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MJ7ya_Ng::yL_zZ5UGTtSY3bYgCFS3BA` |
| Create a Bytedance Seedance 2.0 Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MJxw5YsA::HMsb6cGRRlSQq_xk2230bw` |
| Create a Bytedance V1 Lite Image-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MJwRgDeg::vn0vKZcZTb-uOE72noJmow` |
| Create a Bytedance V1 Pro Fast Image-to-Video Task | POST | `/jobs/createTask` | `conn_mod_def::GK8MJ7r_C9A::Jm5ZTXdgS36IDIuQlMKIeA` |
| Create a Bytedance V1 Pro Image-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MJ78WSZA::UMmJxeH_TS2vqVoirSTBUA` |
| Create a Bytedance V1 Pro Text-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MJwaih8A::Zmr6mUARQBmbJuk61UBtVw` |
| Create a Flux-2 Image-to-Image Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MKaHnulA::6eforagiTga-cDBc6HWM_Q` |
| Create a Flux-2 Pro Image-to-Image Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MKaTvssA::uU95IjZNQjmth4FFd-ZlAw` |
| Create a Flux-2 Pro Text-to-Image Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MKcPKWXA::_B2wWORIQLaTvuqgJdseag` |
| Create a Flux-2 Text-to-Image Job | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MKZuRmLA::qnXnDE9SRmqcpimiVGM4IQ` |
| Create a Google Nano Banana Pro Image Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MK46tMAg::q8rvTUywSpCrj6SBuLSbMg` |

53 more Jobs actions are available through search.

### ClaudeMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Claude Haiku 4.5 Message | POST | `/api/v1/claude/v1/messages` | `conn_mod_def::GK8MJ8KksBA::hEJXOn6_Qj2q-FxqcLqfRg` |
| Create a Claude Opus 4.5 Message | POST | `/api/v1/claude/v1/messages` | `conn_mod_def::GK8MJ7mHCgA::w-VE9qD6St2MPhMsc7q2ag` |
| Create Claude Opus 4.6 Messages | POST | `/api/v1/claude/v1/messages` | `conn_mod_def::GK8MKG90esg::hS9FDoGEQjOXpZFn8KsGDw` |
| Create Claude Opus 4.7 Messages | POST | `/claude/v1/messages` | `conn_mod_def::GK8MKHIZLSg::BNlCv7FbQRuEMEjQFrfSyA` |
| Create Claude Sonnet 4.6 Messages | POST | `/claude/v1/messages` | `conn_mod_def::GK8MKHWaZKg::b1-oLy4iRk64g0f81siNyg` |

### Responses

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Codex Response | POST | `/api/v1/responses` | `conn_mod_def::GK8ML41D7tg::n5U9rSElRTSTn4eAOZci8g` |
| Create a GPT-5-4 Response | POST | `/codex/v1/responses` | `conn_mod_def::GK8MK4en-hg::2QA59GQ8RtaI2_YQRX_Ayw` |
| Create a GPT-5.5 Response | POST | `/codex/v1/responses` | `conn_mod_def::GK8ML5w5fgg::7Hl0KCNzRwOLvHGA2MKJ6g` |

### MusicGeneration

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Instrumental to Music | POST | `/api/v1/generate/add-instrumental` | `conn_mod_def::GK8MQf6jF0A::q9Mi_MNPTDWgj5-QEkHAdA` |
| Generate Music | POST | `/api/v1/generate` | `conn_mod_def::GK8MQs5AiRA::O-fuYgR5S5-qsvjwpnIcOQ` |

### DownloadUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Download URL for Generated Files | POST | `/api/v1/common/download-url` | `conn_mod_def::GK8MJbH6cjg::O5uQkMnBQUO9WY3IAfs6RA` |

### RemainingCredits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Remaining Credits | GET | `/api/v1/chat/credit` | `conn_mod_def::GK8MJbVKBrA::bYVcB6kRQEuhXQblbiAq5g` |

### Gpt4oImageRecordInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get 4o Image Details | GET | `/gpt4o-image/record-info` | `conn_mod_def::GK8MJb_8TrA::wOnfBqrbSFqY0vBGp2EMeQ` |

### Gpt4oImageDownloadUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Direct Download URL for a 4o Image | POST | `/api/v1/gpt4o-image/download-url` | `conn_mod_def::GK8MJcYn2fg::gtCn-3hOTpqJsYNepcbM1w` |

### Gpt4oImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate 4o Image | POST | `/api/v1/gpt4o-image/generate` | `conn_mod_def::GK8MJcdsHbA::Zv2LP0f6QA6UB8xuD31eUQ` |

### FluxKontextImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate or Edit an Image with Flux Kontext | POST | `/api/v1/flux/kontext/generate` | `conn_mod_def::GK8MJk6eXFg::j37ROuFkTFu0HtkQRlCUjA` |

### FileStreamUpload

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a File Stream | POST | `/api/v1/file-stream-upload` | `conn_mod_def::GK8MJlCIYag::DEq8XeqxRa6X4Qs6CGtBqQ` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a Base64 File | POST | `/api/v1/file-base64-upload` | `conn_mod_def::GK8MJl0Qmlg::2sEfoHGXQB2rXTA_dI5xOA` |

### FileUrlUpload

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a File from a Remote URL | POST | `/api/v1/file-url-upload` | `conn_mod_def::GK8MJl_lr3A::kqNu2FzfSBWDcCjLb5YlIw` |

### FluxKontextImageDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Flux Kontext Image Details | GET | `/api/v1/flux/kontext/record-info` | `conn_mod_def::GK8MJm7hOeA::3Y8RPj6cSTG0X9_PB_Hl4w` |

### BytedanceV1LiteTextToVideoTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Bytedance V1 Lite Text-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MJxUNsUA::uEXdxefrR7GHrln42gROhA` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Claude Sonnet 4.5 Message | POST | `/claude/v1/messages` | `conn_mod_def::GK8MKHZ9Spg::7al8IXaYTNGJRc-cf0INmQ` |

### Gemini25FlashChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Gemini 2.5 Flash Chat Completion | POST | `/api/v1/gemini-2.5-flash/v1/chat/completions` | `conn_mod_def::GK8MKbkmyvg::WWw4692lSJWiPSsDOlc0Qg` |

### Gemini3ProChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Gemini 3 Pro Chat Completion | POST | `/api/v1/gemini-3-pro/v1/chat/completions` | `conn_mod_def::GK8MKl3GstA::8KAtd3WqS1qChx-X8EtPhQ` |

### Gemini3FlashContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Stream Generate Content with Gemini 3 Flash | POST | `/gemini/v1/models/gemini-3-flash-v1betamodels:streamGenerateContent` | `conn_mod_def::GK8MKl-aQiA::HFTDuZywRO6feZWJVBemrA` |

### Gemini25ProChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Gemini 2.5 Pro Chat Completion | POST | `/api/v1/gemini-2.5-pro/v1/chat/completions` | `conn_mod_def::GK8MKmQr4-g::ggBM_BWoQhmUxvhBvMvRDA` |

### Gemini31ProChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Gemini 3.1 Pro Chat Completion | POST | `/api/v1/gemini-3.1-pro/v1/chat/completions` | `conn_mod_def::GK8MKmYSHJA::yo1ol4m6TXueYHQm7sVyqg` |

### Gemini3FlashChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Gemini 3 Flash Chat Completion | POST | `/api/v1/gemini-3-flash/v1/chat/completions` | `conn_mod_def::GK8MKmhdFjA::8JIqTTX1Qw2jY8a1E9EOww` |

### GoogleImagen4FastImageGenerationTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Google Imagen 4 Fast Image Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MKuv_9Fg::2I4xVGPgRtugyLAmAq0vNA` |

### GoogleImagen4UltraGenerationTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Google Imagen 4 Ultra Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MKvJDdHA::Oe5SruKUSH-Gkl78slTxDw` |

### MarketTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Market Task Details | GET | `/api/v1/jobs/recordInfo` | `conn_mod_def::GK8MKvN1HnA::4Gzk1PQqRqK3FBZ9gvy2OA` |

### GenerationTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Google Nano Banana Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MKvoRr1A::gyg2VEsgQ7u2VRxxIUMC1w` |

### GoogleImagen4GenerationTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Google Imagen 4 Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MKvt3B8g::qzbo6BxQSL6vBtRIY-WUVw` |

### GoogleNanoBananaEditTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Google Nano Banana Edit Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MK5NoQzA::1RpHSEf_QSyt3gpySnLZ2w` |

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a GPT-5.2 Chat Completion | POST | `/api/v1/gpt-5-2/v1/chat/completions` | `conn_mod_def::GK8MLv6dFqA::VOsDQi5kTWCDWDDVlzOLIg` |

### GptImage15ImageToImageGenerationTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a GPT Image 1.5 Image-to-Image Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8ML5wCeBg::i3nf0igURJ-EbLArI5lRKQ` |

### GrokImagineVideoUpscaleTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Grok Imagine Video Upscale Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMDHwcUA::ZvcHZ9aAQi-o4BD4db6YYA` |

### GrokImagineTextToImageJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Grok Imagine Text-to-Image Job | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMDbzGKA::WyjUFFKqT0G6YYPlIMd_Zg` |

### GrokImagineTextToVideoTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Grok Imagine Text-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMNYogxA::Cz6Pinu4Td6x44rbvE9eSA` |

### GrokImagineImageToVideoTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Grok Imagine Image-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMNeOpqg::35lj2cJ2Sa6_xjkknIfC_A` |

### Hailuo23StandardImageToVideoTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Hailuo 2.3 Standard Image-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMOWQWCg::kGBbdCu7TcmUrf-3svBQ-Q` |

### HappyHorseReferenceToVideoTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a HappyHorse Reference-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMX-yz1g::1XNlHcS5S-aMiLuvqaAUVg` |

### HappyHorseImageToVideoTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a HappyHorse Image-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMYFs-qg::Haydlp11Q3mskN5dO7nL1w` |

### HailuoStandardTextToVideoTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Hailuo Standard Text-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMZBgcrA::NOxIoEUDSVuMHdUEy-3qzA` |

### HappyHorseTextToVideoTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a HappyHorse Text-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMibvrRg::UWxrwZvESn6oBh92YBfh1A` |

### IdeogramCharacterRemixTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ideogram Character Remix Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMicLnXA::rHqNxqZVTCGcxq6zfW_3vQ` |

### IdeogramCharacterEditTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ideogram Character Edit Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMisjWDA::hGXnES9jSLOKAZ-5eW7h8Q` |

### HappyHorseVideoEditTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a HappyHorse Video Edit Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMi4bDJA::Jq5oHdZGSNy5WL9h8HU2-g` |

### IdeogramV3EditTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ideogram V3 Edit Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMtFir5g::h1uVMEFvQ8K_RhAFv1p9Uw` |

### InfinitalkFromAudioGenerationTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Infinitalk From-Audio Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MMtyf6eg::XBSMBgmVRnykTtUnWKRd1w` |

### Kling30VideoGenerationTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Kling 3.0 Video Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MM8BNOPg::q4PAI6vSR5Of30q2Wod26g` |

### KlingAiAvatarStandardJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Kling AI Avatar Standard Job | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MNFRZZkg::f8pqtA-7RtS__6ofLp09bw` |

### KlingV21ProCopyPageTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Kling V2.1 Pro Copy Page Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MNGD8VtA::S6ZxPRsKT5yZfhVfxpKXEw` |

### QwenImageEditTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Qwen Image Edit Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MNRLt0jg::x23PPSNBQgKdr15qScf8Yg` |

### KlingV21StandardGenerationTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Kling V2.1 Standard Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MNSa_fZg::vZz5lp4JQym-V0Mz_USplg` |

### RecraftRemoveBackgroundTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Recraft Remove Background Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MNa2zxPg::7-RMmzILQsCt01qCDm_jvw` |

### SeedreamTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Seedream 3.0 Text-to-Image Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MNcB6Kng::RR3JmK3yQ5ymUaxHK7V8Gg` |

### RecraftCrispUpscaleTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Recraft Crisp Upscale Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MNcuJ1Lg::cebtsbfWRpKuIRV1tBDY0A` |

### Seedream40TextToImageGenerationTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Seedream4.0 Text-to-Image Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MNq1IMMA::_GycVCSkTfOLPfx0-MI6Tg` |

### Sora2CharacterAnimationTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Sora2 Character Animation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MOm3EPSg::U0oBX3XyS8eEND_VOnOn1A` |

### Sora2ImageToVideoTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Sora2 Image-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MOn9xVvA::28PMgoaIQBmslsWaGBbIQg` |

### TopazImageUpscaleTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Topaz Image Upscale Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MOyWBQbg::_987pBboRzOnMKagkffCJQ` |

### Sora2WatermarkRemoverTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Sora2 Watermark Remover Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MOzfyxMA::i6eqC_iATI2tsaReZNgUAw` |

### WanAnimateMoveGenerationTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Wan Animate Move Generation Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MO717akg::Vnz70VvnRQiAIsFU_G0HYA` |

### Wan26FlashImageToVideoTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Wan 2.6 Flash Image-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MO8MjUlg::jrX47dgyQEmMoyV5yyUcSw` |

### TopazVideoUpscaleTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Topaz Video Upscale Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MO8S3KSg::qq30Ec2TQGGCxGR7EaAYpg` |

### Wan25ImageToVideoTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Wan 2.5 Image-to-Video Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MPJJJnEA::A3hc9YtgSK2QhxkBz8lkiA` |

### WanAnimateReplaceTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Wan Animate Replace Task | POST | `/api/v1/jobs/createTask` | `conn_mod_def::GK8MPJOy-_g::eASTCrhbSR2h9urLAXsYDA` |

This lists 80 of 171 actions. For anything not here, call `search_one_platform_actions` with platform `kie-ai`. The full catalog is at https://www.withone.ai/knowledge/kie-ai.

## When a call fails

The error comes from Kie AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/kie-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
