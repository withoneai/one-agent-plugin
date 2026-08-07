---
name: fal-ai
description: fal.ai is an AI inference platform that provides APIs and infrastructure for running generative media models, enabling developers to build applications with image, video, audio, and language generation while managing model execution, scaling, and real-time performance. Read and write fal data through One: ltx23trainerv2, assets, imageediting, workflowutilities, assetcollections, falaiqwenimageedit2509loragallery and more, 1453 actions with real parameter documentation. Use whenever the user asks to look something up in fal, create or update a record there, or build code against the fal API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: fal-ai
  generated-from: one-knowledge-base
---

# fal through One

fal.ai is an AI inference platform that provides APIs and infrastructure for running generative media models, enabling developers to build applications with image, video, audio, and language generation while managing model execution, scaling, and real-time performance.

One exposes fal through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `fal-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm fal is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real fal account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Ltx23TrainerV2

| Action | Method | Path | Action id |
|---|---|---|---|
| A2a Using Fal AI Ltx23 Trainer v2 | POST | `/fal-ai/ltx23-trainer-v2/a2a` | `conn_mod_def::GLxVDC0f4_U::NBWtwTdfQRahKqxOiS_lGQ` |
| A2v Using Fal AI Ltx23 Trainer V2 | POST | `/fal-ai/ltx23-trainer-v2/a2v` | `conn_mod_def::GLxVC_7YgaM::hdeXn4TKSYyeFUW3XZBDjQ` |
| Audio Extend Suffix Using Fal AI Ltx23 Trainer V2 | POST | `/fal-ai/ltx23-trainer-v2/audio-extend-suffix` | `conn_mod_def::GLxVDBRAm2s::bGIcZK6RS2SqKC3vKFmYcw` |
| Av2av Masked Using Fal AI Ltx23 Trainer V2 | POST | `/fal-ai/ltx23-trainer-v2/av2av-masked` | `conn_mod_def::GLxVDOwbZdo::jVdoV7WNQ7-VHuioMK3UGQ` |
| Av2av Using Fal AI Ltx23 Trainer v2 | POST | `/fal-ai/ltx23-trainer-v2/av2av` | `conn_mod_def::GLxVDnEf6mU::L5s6rXxjTeSQBYPnmJTGeg` |
| Extend Prefix Using Fal AI Ltx23 Trainer v2 | POST | `/fal-ai/ltx23-trainer-v2/extend-prefix` | `conn_mod_def::GLxVDMhAf8g::jLDETd0TTG61Dx_-j3_oDg` |
| Extend Suffix Using Fal AI Ltx23 Trainer v2 | POST | `/fal-ai/ltx23-trainer-v2/extend-suffix` | `conn_mod_def::GLxVDLmDowo::Ue3yVOvfQqO0HAjqls6JFA` |
| I2v Using Fal AI Ltx23 Trainer V2 | POST | `/fal-ai/ltx23-trainer-v2/i2v` | `conn_mod_def::GLxVDudKz78::v6pOYi8xQmOP8VWhBvCtKQ` |
| Interpolate Using Fal AI Ltx23 Trainer v2 | POST | `/fal-ai/ltx23-trainer-v2/interpolate` | `conn_mod_def::GLxVEAtjVV4::nClHBqWITwKPCehQFiin0A` |
| T2v Using Fal AI Ltx23 Trainer V2 | POST | `/fal-ai/ltx23-trainer-v2/t2v` | `conn_mod_def::GLxVENNY1w0::ILHyhSdnR-6HV9hfdsOUvg` |
| V2a Using Fal AI Ltx23 Trainer V2 | POST | `/fal-ai/ltx23-trainer-v2/v2a` | `conn_mod_def::GLxVEP489MA::StMMrwSqSJCL-lehvItF3A` |
| V2v Masked Using Fal AI Ltx23 Trainer V2 | POST | `/fal-ai/ltx23-trainer-v2/v2v-masked` | `conn_mod_def::GLxVEUaxdVY::vPFvzEhGT_-rvEESYPEz7A` |

1 more Ltx23TrainerV2 actions are available through search.

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Browse Assets | GET | `/v1/assets` | `conn_mod_def::GLxT6tZo0xg::DNw0d2wES9Ka1uzWDRClXA` |
| Browse Assets in a Collection | GET | `/v1/assets/collections/{{collectionId}}/assets` | `conn_mod_def::GLxT7BTvluM::K3nDLUrPR3Sx2hd01NBpEg` |
| Get Asset | GET | `/v1/assets/{{vectorId}}` | `conn_mod_def::GLxT7PGkoF8::SIcuQ6jFSBSqIboZ9iOLfg` |
| Add Asset to a Collection | POST | `/v1/assets/collections/{{collectionId}}/assets` | `conn_mod_def::GLxT6xYERD0::xBraOO7iQHubN-tzYFaI0g` |
| Assign Tag to an Asset | POST | `/v1/assets/tags/{{tagId}}/assign` | `conn_mod_def::GLxT6rn8jyk::BKg8xFfRRNSHAI6--nJT1w` |
| Favorite Asset | POST | `/v1/assets/favorite` | `conn_mod_def::GLxT7HjE6nc::liG8cvyvQ9Gn7Q_hPS_T7w` |
| Remove Asset from a Collection | DELETE | `/v1/assets/collections/{{collectionId}}/assets` | `conn_mod_def::GLxT7raEtU8::Si5RjabZQSquhWkVGTEYpA` |
| Set Tags for an Asset | PUT | `/v1/assets/tags` | `conn_mod_def::GLxT7Y6h4gk::mBlubWORTmqH8JU2Eb7mPw` |
| Unassign Tag from Asset | DELETE | `/v1/assets/tags/{{tagId}}/assign` | `conn_mod_def::GLxT7zqJiMA::-exZGHLtTweW1dVDFYPCVg` |
| Unfavorite Asset | POST | `/v1/assets/unfavorite` | `conn_mod_def::GLxT7zodARk::kmguCPPfTXGUckf6TnylDg` |
| Upload Asset | POST | `/v1/assets/uploads` | `conn_mod_def::GLxT78JZSWc::UzN0Mi0WS2GFSKcLmzyBFQ` |

### ImageEditing

| Action | Method | Path | Action id |
|---|---|---|---|
| Baby Version Using Fal AI Image Editing | POST | `/fal-ai/image-editing/baby-version` | `conn_mod_def::GLxUNiIJ20k::Lxf0jGrITM6rXvu5AWTWUg` |
| Background Change Using Fal AI Image Editing | POST | `/fal-ai/image-editing/background-change` | `conn_mod_def::GLxUNiAt4Aw::kDS2BW8cQZCvUaYI3VyHmg` |
| Cartoonify Using Fal AI Image Editing | POST | `/fal-ai/image-editing/cartoonify` | `conn_mod_def::GLxUNpy4wy0::LcNLOl-2SeqIUWVsOp-ybg` |
| Expression Change Using Fal AI Image Editing | POST | `/fal-ai/image-editing/expression-change` | `conn_mod_def::GLxUNpfBWM8::c_xGUVAsQlanNly2Mt7CaA` |
| Hair Change Using Fal AI Image Editing | POST | `/fal-ai/image-editing/hair-change` | `conn_mod_def::GLxUOIUtKf4::Iy6P60gARtikVhsQymN6tg` |
| Plushie Style Using Fal AI Image Editing | POST | `/fal-ai/image-editing/plushie-style` | `conn_mod_def::GLxUN9aOqV8::UTwV1ZW1SsmxK9wPuP6b6A` |
| Reframe Using Fal AI Image Editing | POST | `/fal-ai/image-editing/reframe` | `conn_mod_def::GLxUOPLWhvk::PcpSnR7wTfC1WVJQi9n4pA` |
| Retouch Using Fal AI Image Editing | POST | `/fal-ai/image-editing/retouch` | `conn_mod_def::GLxUOOllZwY::xbc1F65hRNu0GxXo-2l1Bg` |
| Style Transfer Using Fal AI Image Editing | POST | `/fal-ai/image-editing/style-transfer` | `conn_mod_def::GLxUOP3uqBc::wfu9L9H6SWmKUIqb0gKAnA` |
| Time of Day Using Fal AI Image Editing | POST | `/fal-ai/image-editing/time-of-day` | `conn_mod_def::GLxUOaY1kR4::5qKsO3arTsOorO_bSSJ94Q` |

### WorkflowUtilities

| Action | Method | Path | Action id |
|---|---|---|---|
| Auto Subtitle Using Fal AI Workflow Utilities | POST | `/fal-ai/workflow-utilities/auto-subtitle` | `conn_mod_def::GLxVPNjctQk::o_jeS47AQBGpalHLZv7y5g` |
| Blend Video Using Fal AI Workflow Utilities | POST | `/fal-ai/workflow-utilities/blend-video` | `conn_mod_def::GLxVPJwkyBk::IlhO14UATri1mpGuGEG9iA` |
| Extract Nth Frame Using Fal AI Workflow Utilities | POST | `/fal-ai/workflow-utilities/extract-nth-frame` | `conn_mod_def::GLxUVElT82k::iHZjvz6IRgKI-A_7X-jEIA` |
| Impulse Response Using Fal AI Workflow Utilities | POST | `/fal-ai/workflow-utilities/impulse-response` | `conn_mod_def::GLxT9xo8XGY::RuTbvJY1SPq6ymuAopdNew` |
| Interleave Video Using Fal AI Workflow Utilities | POST | `/fal-ai/workflow-utilities/interleave-video` | `conn_mod_def::GLxVFiLrFSg::oupUXg4GR1-BX6PfOgG_gQ` |
| Pick Image by Index Using Fal AI Workflow Utilities | POST | `/fal-ai/workflow-utilities/pick-image-by-index` | `conn_mod_def::GLxVR78VE3c::qOFEaS7NQ6iAx7M5SES6TA` |
| Reverse Video Using Fal AI Workflow Utilities | POST | `/fal-ai/workflow-utilities/reverse-video` | `conn_mod_def::GLxVPKHLsrc::uSpTbgmSQgircHkogYkFtQ` |
| Scale Video Using Fal AI Workflow Utilities | POST | `/fal-ai/workflow-utilities/scale-video` | `conn_mod_def::GLxVPK9kjXA::4ZqH8P_EQmStM7JG8IZMjg` |
| Trim Video Using Fal AI Workflow Utilities | POST | `/fal-ai/workflow-utilities/trim-video` | `conn_mod_def::GLxVPX87zjk::XldU06SgTwiQU61AGKasWg` |

### AssetCollections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Asset Collection | GET | `/v1/assets/collections/{{collectionId}}` | `conn_mod_def::GLxT7Ondyps::JzAIgCLfQ3mfIF-lfDydwA` |
| List Asset Collections | GET | `/v1/assets/collections` | `conn_mod_def::GLxT7QLc8Yo::1o1u5bNzQAG8iiZKkJuOTQ` |
| Create Asset Collection | POST | `/v1/assets/collections` | `conn_mod_def::GLxT65eRs-8::V14e2z1kSh6nsD0vSoLmow` |
| Delete Asset Collection | DELETE | `/v1/assets/collections/{{collectionId}}` | `conn_mod_def::GLxT7JJOXxE::X0FLIPdvRoGa_CxrbvZ_9Q` |
| Favorite an Asset Collection | POST | `/v1/assets/collections/{{collectionId}}/favorite` | `conn_mod_def::GLxT7IJweKU::9fg86JJjRTWOT6X-AI2huQ` |
| Move Asset Collection | POST | `/v1/assets/collections/{{collectionId}}/move` | `conn_mod_def::GLxT7cVGwts::LwuCa7fxTUuSUzaqG7jimg` |
| Unfavorite an Asset Collection | POST | `/v1/assets/collections/{{collectionId}}/unfavorite` | `conn_mod_def::GLxT7yP9EyA::0Kl0zUYsQHyTf_NWBLMNMA` |
| Update an Asset Collection | PATCH | `/v1/assets/collections/{{collectionId}}` | `conn_mod_def::GLxT8JRCMVk::W9mz-Y2QSSO4Ha9LgR3z_Q` |

### FalAiQwenImageEdit2509LoraGallery

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Background Using Fal AI Qwen Image Edit 2509 Lora Gallery | POST | `/fal-ai/qwen-image-edit-2509-lora-gallery/add-background` | `conn_mod_def::GLxUR9OnbmU::EUwuw1WxQD2Rhd-Ilybb6Q` |
| Face to Full Portrait Using Fal AI Qwen Image Edit 2509 Lora Gallery | POST | `/fal-ai/qwen-image-edit-2509-lora-gallery/face-to-full-portrait` | `conn_mod_def::GLxUR8PDo5Q::Zy5k58-ETRmZv0BOmr2-eA` |
| Integrate Product Using Fal AI Qwen Image Edit 2509 Lora Gallery | POST | `/fal-ai/qwen-image-edit-2509-lora-gallery/integrate-product` | `conn_mod_def::GLxUR-7JI30::j-Fq6TKzRriGsf5_FnF-aQ` |
| Multiple Angles Using Fal AI Qwen Image Edit 2509 Lora Gallery | POST | `/fal-ai/qwen-image-edit-2509-lora-gallery/multiple-angles` | `conn_mod_def::GLxUSFraw9M::l7yYQKLwRtivyuIlsz2H6w` |
| Next Scene Using Fal Ai Qwen Image Edit 2509 Lora Gallery | POST | `/fal-ai/qwen-image-edit-2509-lora-gallery/next-scene` | `conn_mod_def::GLxUSGKl2Fc::fzCngpIMS7uI7JpQnqx5aQ` |
| Remove Element Using Fal AI Qwen Image Edit 2509 Lora Gallery | POST | `/fal-ai/qwen-image-edit-2509-lora-gallery/remove-element` | `conn_mod_def::GLxUSGPy4FE::y6XDLaODTaGZPTEcn8eKbw` |
| Remove Lighting Using Fal AI Qwen Image Edit 2509 Lora Gallery | POST | `/fal-ai/qwen-image-edit-2509-lora-gallery/remove-lighting` | `conn_mod_def::GLxUSHQFcXw::FCemYyEARziU4fobFQLpZQ` |
| Shirt Design Using Fal AI Qwen Image Edit 2509 Lora Gallery | POST | `/fal-ai/qwen-image-edit-2509-lora-gallery/shirt-design` | `conn_mod_def::GLxUSG5013s::nO5nFftoRvuaDlci8rAFCA` |

### ImagePreprocessors

| Action | Method | Path | Action id |
|---|---|---|---|
| Hed Using Fal Ai Image Preprocessors | POST | `/fal-ai/image-preprocessors/hed` | `conn_mod_def::GLxUOh39LjQ::hAxQVEgjTKGsa_N_oPMsmQ` |
| Midas Using Fal AI Image Preprocessors | POST | `/fal-ai/image-preprocessors/midas` | `conn_mod_def::GLxUOjli-g0::Gc1cktSCQ9e3skBt0DDcUA` |
| Pidi Using Fal AI Image Preprocessors | POST | `/fal-ai/image-preprocessors/pidi` | `conn_mod_def::GLxUOqyxN_M::59pDs15gTLKXbIOwkUhUUA` |
| Sam Using Fal Ai Image Preprocessors | POST | `/fal-ai/image-preprocessors/sam` | `conn_mod_def::GLxUOqosqZM::fpfQRzfpRd6bsICwgI-5kQ` |
| Scribble Using Fal AI Image Preprocessors | POST | `/fal-ai/image-preprocessors/scribble` | `conn_mod_def::GLxUOr7-WxQ::po-8VFDVTwySFSM9M0ftJA` |
| Teed Using Fal AI Image Preprocessors | POST | `/fal-ai/image-preprocessors/teed` | `conn_mod_def::GLxUOqDIJl0::R4VK1HbISOmd-n65yJscvA` |
| Zoe Using Fal AI Image Preprocessors | POST | `/fal-ai/image-preprocessors/zoe` | `conn_mod_def::GLxUOsk-g74::uxO3L2QGQC2lkJZXEYmWnQ` |

### PostProcessing

| Action | Method | Path | Action id |
|---|---|---|---|
| Chromatic Aberration Using Fal AI Post Processing | POST | `/fal-ai/post-processing/chromatic-aberration` | `conn_mod_def::GLxUQ7mQxCs::LD9b28ESSiWrj41wIOP3Kw` |
| Color Correction Using Fal AI Post Processing | POST | `/fal-ai/post-processing/color-correction` | `conn_mod_def::GLxUQ6-ryLI::Dzh8omAhTDSWn8VQ5eG8cw` |
| Dissolve Using Fal AI Post Processing | POST | `/fal-ai/post-processing/dissolve` | `conn_mod_def::GLxURNQ3tdo::A5Q5TLkdQFy8Ti7xCundYQ` |
| Dodge Burn Using Fal AI Post Processing | POST | `/fal-ai/post-processing/dodge-burn` | `conn_mod_def::GLxURNpOdLA::-7gavn81RIajV3sMKRU81A` |
| Parabolize Using Fal AI Post Processing | POST | `/fal-ai/post-processing/parabolize` | `conn_mod_def::GLxURT5U3sU::aQnoVxn7SXmatJOBnBnb0w` |
| Post Processing Using Fal AI | POST | `/fal-ai/post-processing` | `conn_mod_def::GLxURGSX_aM::CtpkY5KLQB2BPG5DYqh6sg` |
| Vignette Using Fal AI Post Processing | POST | `/fal-ai/post-processing/vignette` | `conn_mod_def::GLxURWs_5lQ::mxqMrpdsT6GK4Hkc-vAy1A` |

### ImageToVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Alibaba Happy Horse v1.1 | POST | `/alibaba/happy-horse/v1.1/image-to-video` | `conn_mod_def::GLxUWL_KM8o::So60nvW-SwefZEKJmhG9sQ` |
| Image to Video Using Fal AI Ltx 2.3 22b | POST | `/fal-ai/ltx-2.3-22b/image-to-video` | `conn_mod_def::GLxUZruE3M0::n7jXFR1aSGaH4Yz4IH5bvA` |
| Image to Video Using Fal AI LTX 2.3 22B Distilled | POST | `/fal-ai/ltx-2.3-22b/distilled/image-to-video` | `conn_mod_def::GLxUZtk8djs::k7hCtidcSDqW9yn23w-eaA` |
| Image to Video Using Fal AI LTX 2.3 22B LoRA | POST | `/fal-ai/ltx-2.3-22b/image-to-video/lora` | `conn_mod_def::GLxUZ4nhXeg::MOLfbe75Q96KRR95zgTKrQ` |
| Image to Video Using Fal AI Luma Dream Machine Ray 2 Flash | POST | `/fal-ai/luma-dream-machine/ray-2-flash/image-to-video` | `conn_mod_def::GLxUaSYfOS4::LGfkBszZTS6MXs-6YKDnOQ` |
| Image to Video Using Luma Agent Ray v3.2 | POST | `/luma/agent/ray/v3.2/image-to-video` | `conn_mod_def::GLxUec-2vxQ::wjypL398Rs6EZFU9yuwz2A` |
| Image to Video Using Minimax Hailuo 2.3 Fast Pro | POST | `/fal-ai/minimax/hailuo-2.3-fast/pro/image-to-video` | `conn_mod_def::GLxUanPIkVs::r-IgQxjRTvyaBHE87pQEZw` |

### KlingVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Image to Video Using Kling Video v1.6 Pro | POST | `/fal-ai/kling-video/v1.6/pro/image-to-video` | `conn_mod_def::GLxUX-FxR6w::njHVAMe7RnCjjrFh_MvEJA` |
| Image to Video Using Kling Video v2.1 Standard | POST | `/fal-ai/kling-video/v2.1/standard/image-to-video` | `conn_mod_def::GLxUYJMDH-c::5AQkDaUgRia-hmQtsEovlQ` |
| Text to Video Using Fal AI Kling Video v1.6 Standard | POST | `/fal-ai/kling-video/v1.6/standard/text-to-video` | `conn_mod_def::GLxU8wBNvy8::WjIVrjqcRzaWLCQbh9XmJQ` |
| Text to Video Using Fal AI Kling Video v2.6 Pro | POST | `/fal-ai/kling-video/v2.6/pro/text-to-video` | `conn_mod_def::GLxU828Qtvs::zSNVtHw7TXCHtspdXxfh2A` |
| Text to Video Using Kling Video v1.5 Pro | POST | `/fal-ai/kling-video/v1.5/pro/text-to-video` | `conn_mod_def::GLxU8a_l8W0::4IVwR73dSuCv_QpyF_sPOg` |
| Text to Video Using Kling Video v1.6 Pro | POST | `/fal-ai/kling-video/v1.6/pro/text-to-video` | `conn_mod_def::GLxU8cGY56w::nPxqjQCZSyeNmJDf6Iz0PA` |
| Text to Video Using Kling Video v2.5 Turbo Pro | POST | `/fal-ai/kling-video/v2.5-turbo/pro/text-to-video` | `conn_mod_def::GLxU8uGjyNg::GbjbQKxzREigx0zIzMF2Jg` |

### AssetCharacters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Asset Character | GET | `/v1/assets/characters/{{characterId}}` | `conn_mod_def::GLxT7O9W1YA::dtAPyQmdSZurUXktnJuO5A` |
| List Asset Characters | GET | `/v1/assets/characters` | `conn_mod_def::GLxT7RW7MF0::3lYanYaUSfOcRykudN23OA` |
| Delete Asset Character | DELETE | `/v1/assets/characters/{{characterId}}` | `conn_mod_def::GLxT67H2jLs::VWvHFy8MTieNl_1Y2zKZ9Q` |
| Favorite Asset Character | POST | `/v1/assets/characters/{{characterId}}/favorite` | `conn_mod_def::GLxT7JL6kio::8cJ44bflTVymewijQ-BTDA` |

2 more AssetCharacters actions are available through search.

This lists 90 of 1453 actions. For anything not here, call `search_one_platform_actions` with platform `fal-ai`. The full catalog is at https://www.withone.ai/knowledge/fal-ai.

## When a call fails

The error comes from fal, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/fal-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
