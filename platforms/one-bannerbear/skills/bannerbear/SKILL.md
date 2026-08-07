---
name: bannerbear
description: Bannerbear is an image and video generation platform that provides APIs and automation tools for creating branded visuals from templates and dynamic data, allowing developers and marketing teams to generate social media graphics, banners, and personalized media at scale. Read and write Bannerbear data through One: templates, projects, templatesets, videos, animatedgifs, collections and more, 55 actions with real parameter documentation. Use whenever the user asks to look something up in Bannerbear, create or update a record there, or build code against the Bannerbear API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bannerbear
  generated-from: one-knowledge-base
---

# Bannerbear through One

Bannerbear is an image and video generation platform that provides APIs and automation tools for creating branded visuals from templates and dynamic data, allowing developers and marketing teams to generate social media graphics, banners, and personalized media at scale.

One exposes Bannerbear through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bannerbear` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Bannerbear is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Bannerbear account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Templates | GET | `/v2/templates` | `conn_mod_def::GMYj9BTkpvY::7v54yRISSGuFoL2HCfXKOQ` |
| Retrieve a Template | GET | `/v2/templates/{{uid}}` | `conn_mod_def::GMYj87LzPRY::MkwMJ_n5ReCMZrYkqC73Bw` |
| Create a Template | POST | `/v2/templates` | `conn_mod_def::GMYj9Jag7-U::45aI8dlOTbuWt81hd5jGcA` |
| Delete a Template | DELETE | `/v2/templates/{{uid}}` | `conn_mod_def::GMYj85-Hj5k::h07_6EszSZ2mVpD8CssOSQ` |
| Duplicate a Template | POST | `/v2/templates` | `conn_mod_def::GMYj9W-St_A::_DlbteO_TPm4bTKownVuLg` |
| Import Templates | POST | `/v2/templates/import` | `conn_mod_def::GMYj9JGS7Ds::QUZxeZUiRNKJ8inSw0v8xA` |
| Update a Template | PATCH | `/v2/templates/{{uid}}` | `conn_mod_def::GMYj9Kyc_tY::vcrwyc5BRamOGbHOwM7ryw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/v2/projects` | `conn_mod_def::GMYj8QM2LAc::fYEzUULOQKeet26HxRfWPA` |
| Retrieve a Project | GET | `/v2/projects/{{uid}}` | `conn_mod_def::GMYj8PPQIGA::jfXhIVmQRY-APk266VVPWw` |
| Create a Project | POST | `/v2/projects` | `conn_mod_def::GMYj8eFNeSk::z38tWvFiTnein3oheVt0KQ` |
| Hydrate a Project | POST | `/v2/projects/{{uid}}/hydrate` | `conn_mod_def::GMYj8citWYs::rruwBzSoRoy1nDAmKAoWhg` |

### TemplateSets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Template Sets | GET | `/v2/template_sets` | `conn_mod_def::GMYj8sdgZmM::8OaXFFe7SEmGcq9BzLoXtg` |
| Retrieve a Template Set | GET | `/v2/template_sets/{{uid}}` | `conn_mod_def::GMYj8s4vnLk::PNMqFAoBTwu2OIiWtq8rcQ` |
| Create a Template Set | POST | `/v2/template_sets` | `conn_mod_def::GMYj84C436U::3pk21CyySb2VE7woDLNPKQ` |
| Update a Template Set | PATCH | `/v2/template_sets/{{uid}}` | `conn_mod_def::GMYj83JyOAI::LNWXjfnfTpymnPO1AOwMpw` |

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| List Videos | GET | `/v2/videos` | `conn_mod_def::GMYj9kqA_Xw::heD2wV-0RV2keD42DvP3wQ` |
| Retrieve a Video | GET | `/v2/videos/{{uid}}` | `conn_mod_def::GMYj9kui4hU::LhFyQh3YThmWWANjPzigVg` |
| Create a Video | POST | `/v2/videos` | `conn_mod_def::GMYj9zeJN2Q::gX1otAovQe62PuWEaXMrvQ` |
| Update a Video | PATCH | `/v2/videos` | `conn_mod_def::GMYj9y3g4-M::tB6WqLsMR5Kgg1wwBjJ1UQ` |

### AnimatedGifs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Animated Gifs | GET | `/v2/animated_gifs` | `conn_mod_def::GMYj7b9ER80::T7OE2FYRR4Gk8xJX1mVddQ` |
| Retrieve an Animated GIF | GET | `/v2/animated_gifs/{{uid}}` | `conn_mod_def::GMYj7axYu-M::hMjPNv_FSrKhrwojJCMqoQ` |
| Create Animated Gifs | POST | `/v2/animated_gifs` | `conn_mod_def::GMYj7dSwIRU::UqUvWNfyR7-StjZqV1PVLA` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Collections | GET | `/v2/collections` | `conn_mod_def::GMYj7lvDUPo::Zv-XtzaKThmvOmtr41IoKg` |
| Retrieve a Collection | GET | `/v2/collections/{{uid}}` | `conn_mod_def::GMYj7o0ke1U::iyA13yOnTlCDjpAA1sZT9A` |
| Create a Collection | POST | `/v2/collections` | `conn_mod_def::GMYj7kNVXLc::_eBiMG36R7Kko6TjMuc9pw` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| List Images | GET | `/v2/images` | `conn_mod_def::GMYj8HlUE7c::AAcRQHGZQvW2emfANWK_nw` |
| Retrieve an Image | GET | `/v2/images/{{uid}}` | `conn_mod_def::GMYj78UWlHc::kGayt21YSvK-xjHVwx87zw` |
| Create an Image | POST | `/v2/images` | `conn_mod_def::GMYj79d_FXk::xKJsbhIgRzmupqICm4xEqg` |

### Movies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Movies | GET | `/v2/movies` | `conn_mod_def::GMYj8VjH3kI::fNE6KLGEQMuH9Zig6ENIcg` |
| Retrieve a Movie | GET | `/v2/movies/{{uid}}` | `conn_mod_def::GMYj8PTEsHA::LnPCmrklTI6eYaDNMiHt0g` |
| Create a Movie | POST | `/v2/movies` | `conn_mod_def::GMYj8RCV_sk::KjlszHMsQeqcpqoVqGvlOw` |

### Screenshots

| Action | Method | Path | Action id |
|---|---|---|---|
| List Screenshots | GET | `/v2/screenshots` | `conn_mod_def::GMYj8iMf5MU::Iw-3tBZKQE25itSTR2RVRQ` |
| Retrieve a Screenshot | GET | `/v2/screenshots/{{uid}}` | `conn_mod_def::GMYj8d8DHlg::pXt_ZsSTRy-xr380pmKYXw` |
| Create a Screenshot | POST | `/v2/screenshots` | `conn_mod_def::GMYj8dvEyv4::igp_eI3NRPCXwg_pY3tIBA` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sessions | GET | `/v2/sessions` | `conn_mod_def::GMYj8pPgTxE::zyBxi3xdSKWm8r3MyZ-AkA` |
| Retrieve a Session | GET | `/v2/sessions/{{uid}}` | `conn_mod_def::GMYj8uzMpUs::xHdXqiojQbaB6cZ3ShkpsQ` |
| Create a Session | POST | `/v2/sessions` | `conn_mod_def::GMYj8vmfwMU::q5v8RRx6Q1WjzFIq-C29_w` |

### VideoTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Video Templates | GET | `/v2/video_templates` | `conn_mod_def::GMYj9ke93-8::OBVi18YtQ2uEY7pNV7oilg` |
| Retrieve a Video Template | GET | `/v2/video_templates/{{uid}}` | `conn_mod_def::GMYj9gL4oSg::uh0HpincQl-N_R6ZAqRN7A` |
| Create a Video Template | POST | `/v2/video_templates` | `conn_mod_def::GMYj9lJihFg::Dg8XuXadQ-aIII9fJPMBKA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Webhook | GET | `/v2/webhooks/{{uid}}` | `conn_mod_def::GMYj9y98Ysc::ln7c1Px9Rs6VQkQFdu06SQ` |
| Create a Webhook | POST | `/v2/webhooks` | `conn_mod_def::GMYj9xEGvT8::znXcpOK6SbukKgARdDDCsw` |
| Delete a Webhook | DELETE | `/v2/webhooks/{{uid}}` | `conn_mod_def::GMYj9xJmvFw::_5P49ZwESAuLX58S2s_a4Q` |

### Diagnoses

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Diagnosis | GET | `/v2/diagnoses/{{uid}}` | `conn_mod_def::GMYj7k46-ck::3ACuVpcCRceYMITXUXj63A` |
| Create a Diagnosis | POST | `/v2/diagnoses` | `conn_mod_def::GMYj7mWVmh0::j1PRDGh1RO-2dsVsEPx3yg` |

### SignedBases

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Template's Signed Bases | GET | `/v2/templates/{{uid}}/signed_bases` | `conn_mod_def::GMYj9MFkudk::vQx1Ms8vQBmGd8wTBYv2sA` |
| Create Signed Bases Using Templates | POST | `/v2/templates/{{uid}}/signed_bases` | `conn_mod_def::GMYj9IvkENE::m_lcOmGOTNKqptnVQk9D9g` |

### Utilities

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Joined PDF File | GET | `/v2/utilities/pdf/join/{{uid}}` | `conn_mod_def::GMYj9Xv5dLw::bc1j9YkITYugHBfiMbRtsw` |
| Rasterize a PDF | POST | `/v2/utilities/pdf/rasterize` | `conn_mod_def::GMYj9Vs0Xjk::nI_WbZgzS-q9nMbcYGoISA` |

### AuthStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Auth Status | GET | `/v2/auth` | `conn_mod_def::GMYj7ZdpkfE::U0myZJrESJSSA3-W0Y6Bnw` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Status | GET | `/v2/account` | `conn_mod_def::GMYj7Zi511w::tl5JMRK_TEuugk_UFkNLDA` |

### Effects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Effects | GET | `/v2/effects` | `conn_mod_def::GMYj75Q3Z0Q::4tZFnuyiQKiUDwV2DpHRnw` |

### Fonts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fonts | GET | `/v2/fonts` | `conn_mod_def::GMYj76J7QLA::DNsAI4gaQIyp3UlGzCLz6w` |

### UtilitiesPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Join PDF Files Using Utilities PDF | POST | `/v2/utilities/pdf/join` | `conn_mod_def::GMYj9WRXv0s::BgXX-eJ9TVSb36GK1TBYcA` |

### PdfRasterization

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a PDF Rasterization | GET | `/v2/utilities/pdf/rasterize/{{uid}}` | `conn_mod_def::GMYj9XcgloI::l05bFQQlSwuXjicf0RPmqw` |

## When a call fails

The error comes from Bannerbear, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bannerbear

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
