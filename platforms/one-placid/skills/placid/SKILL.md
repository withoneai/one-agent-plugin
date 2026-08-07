---
name: placid
description: Placid is an image and video generation platform that provides APIs and automation tools for creating branded visual assets from templates and dynamic data, allowing developers and teams to generate social media graphics, marketing creatives, and personalized media at scale. Read and write Placid data through One: templates, collections, fonts, pdfs, videos, images and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in Placid, create or update a record there, or build code against the Placid API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: placid
  generated-from: one-knowledge-base
---

# Placid through One

Placid is an image and video generation platform that provides APIs and automation tools for creating branded visual assets from templates and dynamic data, allowing developers and teams to generate social media graphics, marketing creatives, and personalized media at scale.

One exposes Placid through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `placid` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Placid is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Placid account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Templates | GET | `/api/rest/templates` | `conn_mod_def::GMRL9qksxLw::YeRYOWDjS4OBmEhmxDBubA` |
| Retrieve a Template | GET | `/api/rest/templates/{{templateUuid}}` | `conn_mod_def::GMRL99De5Tk::DYPnijW8Rqe1EFX25oyBdQ` |
| Create a Template | POST | `/api/rest/templates` | `conn_mod_def::GMRL9qjiDxE::2X841e5jTPC3cU6D5d9rzQ` |
| Delete a Template | DELETE | `/api/rest/templates/{{templateUuid}}` | `conn_mod_def::GMRL9qqnn_k::eegsK3jBSxi4ePlFO4ln0A` |
| Update a Template | PATCH | `/api/rest/templates/{{templateUuid}}` | `conn_mod_def::GMRL99AWRjU::HvCxbxktTp69ROHgeQ1rMA` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Collections | GET | `/api/rest/collections` | `conn_mod_def::GMRL8xDnpF0::mGYwej1nSXmquOC7S_0LHg` |
| Retrieve a Collection | GET | `/api/rest/collections/{{collectionId}}` | `conn_mod_def::GMRL8vT0870::bSVAFGkWTGarj4LAhBvUwg` |
| Create a Collection | POST | `/api/rest/collections` | `conn_mod_def::GMRL8tZAoWM::Jdb-cFCgTgmmptj-E3Iqyw` |
| Delete a Collection | DELETE | `/api/rest/collections/{{collectionId}}` | `conn_mod_def::GMRL9FdCK6U::mIsP9SZqQsanFHjotnL8Dw` |
| Update a Collection | PATCH | `/api/rest/collections/{{collectionId}}` | `conn_mod_def::GMRL8uxMcsg::UYQG0RJyRQKSCeWSyRfMWw` |

### Fonts

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Fonts | GET | `/api/rest/fonts` | `conn_mod_def::GMRL9Nt7CQg::gZJx069rSVSw-UloL2CUzw` |
| Retrieve a Font | GET | `/api/rest/fonts/{{uuid}}` | `conn_mod_def::GMRL9Nv1PEE::xfT3VfBiS1yo483oxN3yiA` |
| Delete a Font | DELETE | `/api/rest/fonts/{{uuid}}` | `conn_mod_def::GMRL9PjbgFY::M-gnhQ_LTLuRcswMNPRHWw` |
| Update a Font | PATCH | `/api/rest/fonts/{{uuid}}` | `conn_mod_def::GMRL9I9PL6w::AoQq02PgSeucyVz8HLxXyA` |
| Upload a Font | POST | `/api/rest/fonts` | `conn_mod_def::GMRL9OOaOMQ::1FTufGsbTtSBmqgQok2hlA` |

### Pdfs

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a PDF | GET | `/api/rest/pdfs/{{id}}` | `conn_mod_def::GMRL9quMIPY::5CF9mqvLRlywoW0yoqtaOg` |
| Create a PDF | POST | `/api/rest/pdfs` | `conn_mod_def::GMRL9UbBKs4::75yRShwvRQePlwU81O6mVQ` |
| Delete a PDF | DELETE | `/api/rest/pdfs/{{id}}` | `conn_mod_def::GMRL9nvO7BQ::A9JVlk3WQNyNDzMKZDK-9A` |

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Video | GET | `/api/rest/videos/{{id}}` | `conn_mod_def::GMRL982HF0g::lQ7WeHBJSMay93HF88dvSw` |
| Create a Video | POST | `/api/rest/videos` | `conn_mod_def::GMRL-BxX170::oKNWXRUYSfimo0sl50ccYw` |
| Delete a Video | DELETE | `/api/rest/videos/{{id}}` | `conn_mod_def::GMRL91z-U2c::Mr7xxMw0QAWWdiLRhZ_Lkw` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Image | GET | `/api/rest/images/{{id}}` | `conn_mod_def::GMRL9TlTKeo::mwnjlX03RoS5ZZp_MF5iZg` |
| Create an Image | POST | `/api/rest/images` | `conn_mod_def::GMRL9Sdv5SU::9Yic7flBTc-zk1GKmq3WIg` |
| Delete an Image | DELETE | `/api/rest/images/{{id}}` | `conn_mod_def::GMRL9XBnhYQ::hlqkv5oJR3ShQ77q3rXWKw` |

### Media

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Media | POST | `/api/rest/media` | `conn_mod_def::GMRL9d9VuR8::oJ3YgikDRluDhThgryyJ6A` |

## When a call fails

The error comes from Placid, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/placid

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
