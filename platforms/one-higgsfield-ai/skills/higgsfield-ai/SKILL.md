---
name: higgsfield-ai
description: Higgsfield.ai is a generative media platform that provides AI tools for creating and editing visual content, enabling creators and developers to generate videos, images, and cinematic effects through automated workflows and model-driven media production capabilities. Read and write Higgsfield.ai data through One: klingvideov21master, imagetovideo, generationstatus, reve, dopgeneration, higgsfieldaidopturbo and more, 50 actions with real parameter documentation. Use whenever the user asks to look something up in Higgsfield.ai, create or update a record there, or build code against the Higgsfield.ai API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: higgsfield-ai
  generated-from: one-knowledge-base
---

# Higgsfield.ai through One

Higgsfield.ai is a generative media platform that provides AI tools for creating and editing visual content, enabling creators and developers to generate videos, images, and cinematic effects through automated workflows and model-driven media production capabilities.

One exposes Higgsfield.ai through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `higgsfield-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Higgsfield.ai is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Higgsfield.ai account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### KlingVideoV21Master

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Kling Video v2.1 Master | POST | `/kling-video/v2.1/master/image-to-video` | `conn_mod_def::GLMJk6xcQVc::ys7ccBgRRqeCDXkSYzoqeA` |
| Text to Video Using Kling Video v2.1 Master | POST | `/kling-video/v2.1/master/text-to-video` | `conn_mod_def::GLMJlFyd9Xo::QDfAxwy7SCWq5FiQWdOuag` |

### ImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Minimax Hailuo 02 Standard | POST | `/minimax/hailuo-02/standard/image-to-video` | `conn_mod_def::GLMJlRwNHFU::3sN_eq0USAm3Tp8bWl61_Q` |
| Image to Video Using Minimax Hailuo 2.3 Fast Standard | POST | `/minimax/hailuo-2.3-fast/standard/image-to-video` | `conn_mod_def::GLMJlbcwgVQ::lOlGIHuCQcWNAFW1zbq0rA` |

### GenerationStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Generation Status | GET | `/requests/{{requestId}}/status` | `conn_mod_def::GLMJljPc0Ck::kvGINkpWRMSU7aHg_Uy-AA` |
| Cancel Generation Request | POST | `/requests/{{requestId}}/cancel` | `conn_mod_def::GLMJlkR9nOE::2fzNGLIQQC2eaWxaES3GmQ` |

### Reve

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit Using Reve | POST | `/reve/edit` | `conn_mod_def::GLMJlsS1eJY::K98LQZWLSVWNBf_7f8iDRA` |
| Text to Image Using Reve | POST | `/reve/text-to-image` | `conn_mod_def::GLMJltOrY0g::lRpp9QejRSqpgm1s-wukZQ` |

### DopGeneration

| Action | Method | Path | Action id |
|---|---|---|---|
| Standard DOP Generation Using Higgsfield AI | POST | `/higgsfield-ai/dop/standard` | `conn_mod_def::GLMJk6dsABk::dQdpe95NTn2vULnuXIExZw` |

### HiggsfieldAiDopTurbo

| Action | Method | Path | Action id |
|---|---|---|---|
| Dop Turbo Using Higgsfield AI | POST | `/higgsfield-ai/dop/turbo` | `conn_mod_def::GLMJk7pl01c::MgxdL72ORF2UTosGDYTQxg` |

### KlingVideoV25TurboPro

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Kling Video v2.5-turbo Pro | POST | `/kling-video/v2.5-turbo/pro/image-to-video` | `conn_mod_def::GLMJlEE1LYg::iwwL4etcQTKtLciQ3-AQAQ` |

### KlingVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Video Using Kling Video v2.5-turbo Pro | POST | `/kling-video/v2.5-turbo/pro/text-to-video` | `conn_mod_def::GLMJlEi2ZPg::udKdSLttS4mYtxLJozSp1Q` |

### KlingVideoV21Standard

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Kling Video v2.1 Standard | POST | `/kling-video/v2.1/standard/image-to-video` | `conn_mod_def::GLMJlEiAnCc::a4dg6p1qTJC-0hJ5vu2n6w` |

### KlingVideoV21Pro

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Kling Video v2.1 Pro | POST | `/kling-video/v2.1/pro/image-to-video` | `conn_mod_def::GLMJlFA38IQ::6fNujcL6RtGB5V2FJJHN-Q` |

### KlingVideoV25TurboStandard

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Kling Video v2.5 Turbo Standard | POST | `/kling-video/v2.5-turbo/standard/image-to-video` | `conn_mod_def::GLMJlP8QfFM::Cws4xxVyS8CgwkAGMbmuwA` |

### TextToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Video Using Minimax Hailuo 2.3 Pro | POST | `/minimax/hailuo-2.3/pro/text-to-video` | `conn_mod_def::GLMJlaUTkuU::Deev02qVQqChZ_Y0JjkqUA` |

### MinimaxHailuo23StandardImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Minimax Hailuo 2.3 Standard | POST | `/minimax/hailuo-2.3/standard/image-to-video` | `conn_mod_def::GLMJlbXgQR4::D1FeZEeHSnKHLN7T-_-H2g` |

### HiggsfieldAiPopcorn

| Action | Method | Path | Action id |
|---|---|---|---|
| Auto Using Higgsfield AI Popcorn | POST | `/higgsfield-ai/popcorn/auto` | `conn_mod_def::GLMJlj8WIds::G1kZ36YJRTimNvZzkSSjFw` |

### MinimaxHailuo23StandardTextToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Video Using Minimax Hailuo 2.3 Standard | POST | `/minimax/hailuo-2.3/standard/text-to-video` | `conn_mod_def::GLMJlk7uNTI::hrK8kuMURu-h9IQ-fBJmJw` |

### ReveFastRemix

| Action | Method | Path | Action id |
|---|---|---|---|
| Remix Images Using Reve Fast | POST | `/reve/fast/remix` | `conn_mod_def::GLMJlskhHL0::Pz7NZLxlTRyTrdu1LaHBkg` |

### ReveRemix

| Action | Method | Path | Action id |
|---|---|---|---|
| Remix Using Reve | POST | `/reve/remix` | `conn_mod_def::GLMJlslBpFw::UKZYkBozThuvT8CLu2ul9A` |

### BytedanceSeedanceV1LiteTextToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Video Using Bytedance Seedance v1 Lite | POST | `/bytedance/seedance/v1/lite/text-to-video` | `conn_mod_def::GLMJl1Nw7Vs::j9F0uwhYS96fVw3ps9jEKQ` |

### Sora2ImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Sora 2 | POST | `/sora-2/image-to-video` | `conn_mod_def::GLMJl1OuAXw::hRkvTXitSluoKdw695bnXQ` |

### BytedanceSeedanceV1ProFastTextToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Video Using Bytedance Seedance v1 Pro Fast | POST | `/bytedance/seedance/v1/pro/fast/text-to-video` | `conn_mod_def::GLMJl6AbCuA::yf2EeJR_R6imE7SIm7iIAg` |

### BytedanceSeedanceV1LiteImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Bytedance Seedance v1 Lite | POST | `/bytedance/seedance/v1/lite/image-to-video` | `conn_mod_def::GLMJl1xHSG4::yhxRJQBGTR6eNzAs3jPPzQ` |

### BytedanceSeedanceImageToVideoRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Bytedance Seedance v1 Pro Fast | POST | `/bytedance/seedance/v1/pro/fast/image-to-video` | `conn_mod_def::GLMJl2Qo1lk::1J8-X41DSYuNdZKLHYc8ng` |

### SoulCharacter

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Soul Character Using Higgsfield AI | POST | `/higgsfield-ai/soul/character` | `conn_mod_def::GLMJmB2Jxr8::206jDHpyTP-RWSeJctdptg` |

### HiggsfieldAiSoulReference

| Action | Method | Path | Action id |
|---|---|---|---|
| Soul Reference Using Higgsfield AI | POST | `/higgsfield-ai/soul/reference` | `conn_mod_def::GLMJmDJi4no::WNmMFh0lQwGoDDNlgv9Rlg` |

### Veo31Fast

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Video Using Veo 3.1 Fast | POST | `/veo3.1/fast` | `conn_mod_def::GLMJmRSvRLo::CL5JXUmaS4GJmxnhglEICQ` |

### Veo31FastFirstLastFrameToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| First Last Frame to Video Using Veo3.1 Fast | POST | `/veo3.1/fast/first-last-frame-to-video` | `conn_mod_def::GLMJmcpOsS8::8ykS6oPWRQKMObZlNxGBEA` |

### Wan25PreviewTextToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Video Using Wan 25 Preview | POST | `/wan-25-preview/text-to-video` | `conn_mod_def::GLMJmkutOGA::jE92AnKvR8KNQhIibFFghQ` |

### Veo31VideoGenerationRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| First Last Frame to Video Using Veo 3.1 | POST | `/veo3.1/first-last-frame-to-video` | `conn_mod_def::GLMJmlOMLZ4::Bjzx-t6LT1-24U6in0cBEw` |

### Veo31ReferenceToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Reference to Video Using Veo 3.1 | POST | `/veo3.1/reference-to-video` | `conn_mod_def::GLMJmk0XxRo::rnIcsbJFQg2aykolbofqOA` |

### Wan25PreviewImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Wan 25 Preview | POST | `/wan-25-preview/image-to-video` | `conn_mod_def::GLMJmk_EYuc::WHn98kw1RFqy0FcIBP7AAg` |

### Veo31FastImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Veo 3.1 Fast | POST | `/veo3.1/fast/image-to-video` | `conn_mod_def::GLMJmROo93I::xqeNEW9IT7K2hv6WYo-BDQ` |

### MinimaxHailuo02ProTextToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Video Using Minimax Hailuo 02 Pro | POST | `/minimax/hailuo-02/pro/text-to-video` | `conn_mod_def::GLMJlQv2zv8::tA_kn-Z9TDe9ZVgahNsSNg` |

### ReveFast

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit Using Reve Fast | POST | `/reve/fast/edit` | `conn_mod_def::GLMJlsvkj8A::kJdr2g6LSWK9Ss5Pt4VA1g` |

### Sora2ImageToVideoPro

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Sora 2 Pro | POST | `/sora-2/image-to-video/pro` | `conn_mod_def::GLMJmCdv7Wo::6URm7dMjS024t4HmIlMGjg` |

### Veo31

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Video Using Veo 3.1 | POST | `/veo3.1` | `conn_mod_def::GLMJmKdTuBE::dpMY3gSHQie_RRj9bL-TiQ` |

### NanoBanana

| Action | Method | Path | Action id |
|---|---|---|---|
| Nano Banana Generation | POST | `/nano-banana` | `conn_mod_def::GLMJlkVhLik::ELbDTgsMRuC82s7SV_PI-Q` |

### HiggsfieldAiSoul

| Action | Method | Path | Action id |
|---|---|---|---|
| Standard Generation Using Higgsfield AI Soul | POST | `/higgsfield-ai/soul/standard` | `conn_mod_def::GLMJmLlKvDA::IsJAd2nGRUuNO4TEAJUq1w` |

### MinimaxHailuo23ProImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Minimax Hailuo 2.3 Pro | POST | `/minimax/hailuo-2.3/pro/image-to-video` | `conn_mod_def::GLMJlaWtV08::XlDJejbTQa-iGfab-QMjNg` |

### MinimaxHailuo23FastProImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Minimax Hailuo 2.3 Fast Pro | POST | `/minimax/hailuo-2.3-fast/pro/image-to-video` | `conn_mod_def::GLMJlanGMaw::C_6k-SJqS12LZs2qIL3ppQ` |

### Sora2TextToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Video Using Sora 2 | POST | `/sora-2/text-to-video` | `conn_mod_def::GLMJmBrbbAo::5CV-jPZMSBqHkX-o8g_JQg` |

### MinimaxHailuo02StandardTextToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Video Using Minimax Hailuo-02 Standard | POST | `/minimax/hailuo-02/standard/text-to-video` | `conn_mod_def::GLMJlO2LMGc::G490gsPSRzmfbAw9ik8h5A` |

### Sora2ProTextToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Video Using Sora 2 Pro | POST | `/sora-2/text-to-video/pro` | `conn_mod_def::GLMJmClosy8::7OdjiXWwQOCR6l7nrUwK-g` |

### MinimaxHailuo02ProImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Minimax Hailuo-02 Pro | POST | `/minimax/hailuo-02/pro/image-to-video` | `conn_mod_def::GLMJlOaFO2A::vXl3dBzFQXK3a7fiXJM3bw` |

### FluxProKontextMax

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Image Using Flux Pro Kontext Max | POST | `/flux-pro/kontext/max/text-to-image` | `conn_mod_def::GLMJk5qJvCw::cQ9-d4pIStu37-PsmDBonw` |

### HiggsfieldAiDopLite

| Action | Method | Path | Action id |
|---|---|---|---|
| Dop Lite Using Higgsfield AI | POST | `/higgsfield-ai/dop/lite` | `conn_mod_def::GLMJk48y4d0::0eQVPlAzTGiXLCYNRXih2Q` |

### Veo31ImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Veo 3.1 | POST | `/veo3.1/image-to-video` | `conn_mod_def::GLMJmlOfJ64::pjqgWfb5TbGrGaKGJlW8_w` |

## When a call fails

The error comes from Higgsfield.ai, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/higgsfield-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
