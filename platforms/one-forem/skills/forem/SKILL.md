---
name: forem
description: Forem is an open-source community platform that provides tools for publishing, discussion, user profiles, and moderation, enabling organizations and creators to build branded online communities with developer-friendly customization, APIs, and self-hosted or managed deployment options. Read and write Forem data through One: articles, displayads, pages, users, comments, tags and more, 40 actions with real parameter documentation. Use whenever the user asks to look something up in Forem, create or update a record there, or build code against the Forem API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: forem
  generated-from: one-knowledge-base
---

# Forem through One

Forem is an open-source community platform that provides tools for publishing, discussion, user profiles, and moderation, enabling organizations and creators to build branded online communities with developer-friendly customization, APIs, and self-hosted or managed deployment options.

One exposes Forem through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `forem` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Forem is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Forem account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Articles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Articles | GET | `/api/articles/latest` | `conn_mod_def::GLNbsOJsi3A::sSRYQaTbTouPvTUjvJPYHA` |
| Get Published Article by ID | GET | `/api/articles/{{id}}` | `conn_mod_def::GLNbsN7jCtg::CThRwl7mSgiNd8x3H5fSug` |
| Get Published Article by Path | GET | `/api/articles/{{username}}/{{slug}}` | `conn_mod_def::GLNbsN7nlug::67v-cd7US-60zJsW4gUeMA` |
| Get User Articles | GET | `/api/articles/me` | `conn_mod_def::GLNbsZ28EUg::czFRPyTRTQyUeeB3arZifA` |
| List a User's Published Articles | GET | `/api/articles/me/published` | `conn_mod_def::GLNbsZ58gug::00U8hp8HSSCq6kvrvMfhdA` |
| List All Articles for the Authenticated User | GET | `/api/articles/me/all` | `conn_mod_def::GLNbsbFwp1g::wl4ZKxemS7KzcO8Sx3qi5A` |
| List an Organization's Articles | GET | `/api/organizations/{{username}}/articles` | `conn_mod_def::GLNbs2IxD_A::uzmTN-m5To-Z3qzqV-oYlg` |
| List Published Articles | GET | `/api/articles` | `conn_mod_def::GLNbsQQNVwA::u0mvIxt0SeioG6T5WY13Wg` |
| List Unpublished Articles for the Authenticated User | GET | `/api/articles/me/unpublished` | `conn_mod_def::GLNbskF_lyg::sfLya4BYRL-o5cH89q3jKQ` |
| Publish Article | POST | `/api/articles` | `conn_mod_def::GLNbsNUF6UA::hbG6BVH8RomQMq_OtgQZYw` |
| Unpublish an Article | PUT | `/api/articles/{{id}}/unpublish` | `conn_mod_def::GLNbsZr_y8A::9FFYDoQhSPmWWs-tfItJRw` |
| Update an Article by ID | PUT | `/api/articles/{{id}}` | `conn_mod_def::GLNbsZsQfTA::JzKCy3W5TByhOKCzQdEVBA` |

### DisplayAds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Display Ad by ID | GET | `/api/display_ads/{{id}}` | `conn_mod_def::GLNbskAFZsA::uTPc_9jjQXKXf5J6dsJmBg` |
| List Display Ads | GET | `/api/display_ads` | `conn_mod_def::GLNbsjRdRUA::gM4e7EJeRy29rYPcHxqJuQ` |
| Create Display Ads | POST | `/api/display_ads` | `conn_mod_def::GLNbstT7NKg::BLcGeY23QoWUEZA6zKAFyw` |
| Unpublish a Display Ad | PUT | `/api/display_ads/{{id}}/unpublish` | `conn_mod_def::GLNbstJ_CUg::rKRzLdbgQu-h1PByUaIkgg` |
| Update a Display Ad | PUT | `/api/display_ads/{{id}}` | `conn_mod_def::GLNbstTyoVg::4HlxYKgASSmVZKq2TUxmtQ` |

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Show Details for a Page | GET | `/api/pages/{{id}}` | `conn_mod_def::GLNbs_d-GeA::EO83xeM0Su-lyFzKHdcXeQ` |
| Show Details for All Pages | GET | `/api/pages` | `conn_mod_def::GLNbs_eJwkA::7Dk-YFQ1SFmXQhLzaP49_g` |
| Create Page | POST | `/api/pages` | `conn_mod_def::GLNbs1hn1Bg::tGnhHy5uRfutK9fmxIcnIQ` |
| Delete a Page | DELETE | `/api/pages/{{id}}` | `conn_mod_def::GLNbs2AFL0A::KaizJ1QAQiCHEJrEZ38Xjw` |
| Update a Page | PUT | `/api/pages/{{id}}` | `conn_mod_def::GLNbtBbkBOg::GAOXHfSzSJKYDQJDFwDMhw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/api/users/{{id}}` | `conn_mod_def::GLNbtKhVyKg::O6b5wlqsS-G1qmQRA2mqvg` |
| Get the Authenticated User | GET | `/api/users/me` | `conn_mod_def::GLNbtUh0IAA::dWfOXmsfTVic5zTO7SgIqA` |
| Invite a User | POST | `/api/admin/users` | `conn_mod_def::GLNbtUW8Q2A::5FAiqZcjQRaIdV8ZbqBcYg` |
| Suspend a User | PUT | `/api/users/{{id}}/suspend` | `conn_mod_def::GLNbtUikuWg::9NSzCJpxRri5xsPSO-FR-g` |
| Unpublish a User | PUT | `/api/users/{{id}}/unpublish` | `conn_mod_def::GLNbtUXU1HA::vKPAgvPKT3-2xdtUsx8TjA` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Comment by ID | GET | `/api/comments/{{id}}` | `conn_mod_def::GLNbsjR2jeg::b0y3wMaQRV6nq9cytPOZGg` |
| Get Comments | GET | `/api/comments` | `conn_mod_def::GLNbskvXYxg::j4mmAnASQCi68dCOLNJ9nA` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Followed Tags | GET | `/api/follows/tags` | `conn_mod_def::GLNbstJ7xVg::sQVMredDSq-mcpTPuygUkQ` |
| Get Tags | GET | `/api/tags` | `conn_mod_def::GLNbtKhpEig::jPbB94zUSe6owU9_IU7tFQ` |

### Reactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Reaction | POST | `/api/reactions` | `conn_mod_def::GLNbtLTaEYg::qg9LmoGZRbKaXnp1w1DPuA` |
| Toggle Reaction | POST | `/api/reactions/toggle` | `conn_mod_def::GLNbtLgr3Gg::UDUz6WZxRKSlwTQ7zsCy7Q` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization | GET | `/api/organizations/{{username}}` | `conn_mod_def::GLNbs3acmfA::ZpoFVid4SMKCHfJiuukbjQ` |

### Followers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Followers | GET | `/api/followers/users` | `conn_mod_def::GLNbst32Xpg::T_RxhuOURHae_RodD4s-fw` |

### OrganizationUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Users | GET | `/api/organizations/{{username}}/users` | `conn_mod_def::GLNbs3A0RCg::zhiYVMkySwevZ1QmkgvWRg` |

### ProfileImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Profile Image | GET | `/api/profile_images/{{username}}` | `conn_mod_def::GLNbs_mnIBg::CoTcICZQTPyHUlYXsTVfIw` |

### PodcastEpisodes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Podcast Episodes | GET | `/api/podcast_episodes` | `conn_mod_def::GLNbtA1oFiA::iT331qfwRTax1QZXw6bYhQ` |

### Readinglist

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Readinglist | GET | `/api/readinglist` | `conn_mod_def::GLNbtLHgvxg::LdWuWnLrQqKZ4GzoawFVCw` |

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| List Videos | GET | `/api/videos` | `conn_mod_def::GLNbtUkJzGg::M5EIy7ZZRm2Fi_H_id59bw` |

## When a call fails

The error comes from Forem, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/forem

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
