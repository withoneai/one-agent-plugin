---
name: spotlightr
description: Spotlightr is a video hosting and marketing platform that provides secure streaming, customizable players, analytics, and lead capture tools, allowing businesses and creators to publish, protect, and optimize video content across websites, courses, and marketing funnels. Read and write Spotlightr data through One: videos, groups, userdomain, userdomains, assets, topvideos and more, 16 actions with real parameter documentation. Use whenever the user asks to look something up in Spotlightr, create or update a record there, or build code against the Spotlightr API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: spotlightr
  generated-from: one-knowledge-base
---

# Spotlightr through One

Spotlightr is a video hosting and marketing platform that provides secure streaming, customizable players, analytics, and lead capture tools, allowing businesses and creators to publish, protect, and optimize video content across websites, courses, and marketing funnels.

One exposes Spotlightr through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `spotlightr` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Spotlightr is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Spotlightr account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Videos | GET | `/api/videos` | `conn_mod_def::GLdeQu7M_ug::3DxB_TCdR5uIfOh8mP1JVw` |
| Create Video | POST | `/api/createVideo` | `conn_mod_def::GLdeQEgEGvg::C7RFraueT2C0vZ5q_TboFA` |
| Delete Video | POST | `/api/deleteVideo` | `conn_mod_def::GLdeQCw1psA::IDCxdNf2SsOF3PzWnLwU6w` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Groups (Projects) | GET | `/groups` | `conn_mod_def::GLdeQbFQCJA::JHarR7D9RWeiYo5aAVo7uA` |
| Create Group | POST | `/groups` | `conn_mod_def::GLdeQjUJg8g::d0ee-C8DRw6R_jGJFJ_8TA` |

### UserDomain

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Domain | GET | `/api/user/domain` | `conn_mod_def::GLdeQDQr83A::nuWEz207S0a8N55zgTEhIA` |

### UserDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Add User Domain | POST | `/api/user/domain` | `conn_mod_def::GLdeQDcsYjA::xBxq7uYbTBaUL8TkwvpUug` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload an Asset | POST | `/assets` | `conn_mod_def::GLdeQS0AJXA::oxklmrtJT6iU9lbZugio3Q` |

### TopVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Top Videos | GET | `/api/getTopVideos` | `conn_mod_def::GLdeQch0t1A::BX1a931WTDmdsgX2uapd0w` |

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Views | GET | `/api/views/getViews` | `conn_mod_def::GLdeQc5GUyg::wA2g2h4dRg6CD2OoO9sY-w` |

### VideoMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Video Metrics | GET | `/api/video/metrics` | `conn_mod_def::GLdeQjjflfA::gzNHr83hQB2hucvYzlnSLQ` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Global Search | POST | `/search/global` | `conn_mod_def::GLdeQroH5sg::ufvxUzJ3TtCipTj1tJVfsw` |

### Students

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Students Using Spotlight | POST | `/spotlight/students` | `conn_mod_def::GLdeQr-roIg::gMoPrlAaTsaGrBhGkZ4VAQ` |

### SpotlightCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Code Using Spotlight | POST | `/spotlight/updateCode` | `conn_mod_def::GLdeQsFMwbA::NMqiQjquSW2_uuPl39Bc1w` |

### VideoPlayerSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Settings for a Video Player | POST | `/video/updateSettings` | `conn_mod_def::GLdeQszWpQA::vWKSxidrTOaT85XFtrKtBw` |

### VideoSource

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Video Source | GET | `/api/videoSource` | `conn_mod_def::GLdeQ5gnOoA::0Z290LhpRFW8LwW5QS5IEg` |

## When a call fails

The error comes from Spotlightr, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/spotlightr

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
