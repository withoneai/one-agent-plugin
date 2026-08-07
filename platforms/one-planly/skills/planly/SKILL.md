---
name: planly
description: Planly is a social media scheduling and automation platform that enables users to plan, publish, and manage content across multiple social networks, allowing creators, marketers, and teams to streamline posting workflows and maintain a consistent publishing schedule. Read and write Planly data through One: media, team, schedulegroups, teams, channels, schedules and more, 24 actions with real parameter documentation. Use whenever the user asks to look something up in Planly, create or update a record there, or build code against the Planly API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: planly
  generated-from: one-knowledge-base
---

# Planly through One

Planly is a social media scheduling and automation platform that enables users to plan, publish, and manage content across multiple social networks, allowing creators, marketers, and teams to streamline posting workflows and maintain a consistent publishing schedule.

One exposes Planly through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `planly` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Planly is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Planly account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Media

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Media | POST | `/api/v2/media/delete` | `conn_mod_def::GLdgjgzz8qg::2PBAk5_DQb61qpGeibPFXw` |
| Finish Upload Media | POST | `/api/v2/media/finish-upload` | `conn_mod_def::GLdgjzDtlXg::Pp0VGZ4nSa6_4kiNVtlYtg` |
| Import Media from URL | POST | `/api/v2/media/import-from-url` | `conn_mod_def::GLdgjrDt3lA::oqJ_qp9mSzWB0umfy9lKEA` |
| List Media | POST | `/api/v2/media/list` | `conn_mod_def::GLdgjqzxWGg::06KZXJR_Q4altU__jmwtag` |
| Start Upload Using Media | POST | `/api/v2/media/start-upload` | `conn_mod_def::GLdgjqXGQyg::AZ2_yOG9TomuyXUNEdGMFQ` |

### Team

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Team | POST | `/api/v2/team/create` | `conn_mod_def::GLdgkFwHMcg::UkTMDHqfR52x1lgQtNWKoQ` |
| Delete Team | POST | `/api/v2/team/delete` | `conn_mod_def::GLdgkIanPig::A1qx1YO6QvW-ieot8jMXaw` |
| Get Team | POST | `/api/v2/team/get` | `conn_mod_def::GLdgkGLehaA::gkU7lE4xQKKVT1BSDLpBPQ` |
| Transfer Ownership for a Team | POST | `/api/v2/team/transfer-ownership` | `conn_mod_def::GLdgkZGd5Og::z2FellC7R0KP30C8Mgq0iQ` |

### ScheduleGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Update Schedule Groups | POST | `/api/v2/schedule-groups/create` | `conn_mod_def::GLdgj8mNBog::Gwy_htgHQK-LnxBA2ptZSA` |
| Delete Schedule Groups | POST | `/api/v2/schedule-groups/delete` | `conn_mod_def::GLdgj8t8CTA::39g19MlSQ6G3GpM5NFQmQA` |
| List Schedule Groups | POST | `/api/v2/schedule-groups/list` | `conn_mod_def::GLdgj9MQ2Ng::gZBUHVT4RuqfC8e6szwjbQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit Team | POST | `/api/v2/team/edit` | `conn_mod_def::GLdgkGm2G-A::7XszObYWRp2RqfJa1CWnQg` |
| List Teams | POST | `/api/teams/list` | `conn_mod_def::GLdgkQXBSHA::v3b_ueB5Q5yWxBY5z78TZw` |
| Test Connection | POST | `/planly/test-connection` | `conn_mod_def::GLdhfshIF_A::JdJQ3FKMRzutH5TFZ4fRlg` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Channel | GET | `/api/v2/channels/delete` | `conn_mod_def::GLdgjg1mOJA::NKsQVtZuSkSFXeps61YR-w` |
| List Channels | POST | `/api/v2/channels/list` | `conn_mod_def::GLdgjhZ2o-g::0QENPs9BS7-cAyFFBc_IKw` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Schedule | POST | `/api/v2/schedules/create` | `conn_mod_def::GLdgj8_b8IA::w25geAvhSdywkX8Tu-HklA` |
| List Schedules | POST | `/api/v2/schedules/list` | `conn_mod_def::GLdgj8_VPag::STlckHN-TtG2cSmseZsThw` |

### TeamUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Team Users | POST | `/api/v2/team/users` | `conn_mod_def::GLdgkGGrIjg::hDlGsHDORU6PyQXRhNDi8w` |
| Remove User from Team | POST | `/api/v2/team/users/remove` | `conn_mod_def::GLdgkQ4GLjg::tXyzq3bKSUaPXpdCfEkhXQ` |

### AvailableCredits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Available Credits | GET | `/api/v2/ai/credits` | `conn_mod_def::GLdgjhjuVsA::DTkpdUUKTw-AKJxl48Mt7w` |

### AiCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Complete Text Prompt Using AI | POST | `/api/v2/ai/complete` | `conn_mod_def::GLdgjiN7T_g::CGVh1Cn9RQG5cnmpCWWOWQ` |

### PinterestBoards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Board List for a Pinterest Channel | POST | `/api/v2/pinterest/get-board-list/{{channelId}}` | `conn_mod_def::GLdgjrBxdqg::1DACM4e6SM-_OePWsoX2ZA` |

## When a call fails

The error comes from Planly, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/planly

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
