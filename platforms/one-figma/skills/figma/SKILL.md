---
name: figma
description: Figma is a cloud-based design and collaboration platform that enables teams to brainstorm, create, prototype, and hand off UI/UX designs in real time, with built-in tools for shared design systems, interactive prototypes, whiteboarding, and developer handoff to streamline product development. Read and write Figma data through One: webhooks, componentsets, components, devresources, commentreactions, comments and more, 46 actions with real parameter documentation. Use whenever the user asks to look something up in Figma, create or update a record there, or build code against the Figma API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: figma
  generated-from: one-knowledge-base
---

# Figma through One

Figma is a cloud-based design and collaboration platform that enables teams to brainstorm, create, prototype, and hand off UI/UX designs in real time, with built-in tools for shared design systems, interactive prototypes, whiteboarding, and developer handoff to streamline product development.

One exposes Figma through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `figma` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Figma is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Figma account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| [Deprecated] List a Team's Webhooks | GET | `/v2/teams/{{TEAM_ID}}/webhooks` | `conn_mod_def::GJcfawHV2Eg::jblchXjSRX6wzoiHuTeLqw` |
| Get a Webhook | GET | `/v2/webhooks/{{WEBHOOK_ID}}` | `conn_mod_def::GJcfaX8aUfA::oKbyrafCQmivbGJjCoZG_Q` |
| List Webhooks by Context or Plan | GET | `/v2/webhooks` | `conn_mod_def::GJcfaHq137g::Jqjn9BRlRnuatVO75Ji-Dg` |
| Create a Webhook | POST | `/webhooks` | `conn_mod_def::GJcfaRpi8vg::3vnW97ZXT7K2pbE56V_ing` |
| Delete a Webhook | DELETE | `/v2/webhooks/{{WEBHOOK_ID}}` | `conn_mod_def::GJcfajhFShg::AAtHZNf1QOG6KE5rnU_JUA` |
| Update a Webhook | PUT | `/v2/webhooks/{{WEBHOOK_ID}}` | `conn_mod_def::GJcfadku0jg::WR1_sQCZR3e_cl-j9VcGZg` |

### ComponentSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Component Set | GET | `/component_sets/{{key}}` | `conn_mod_def::GJcfWS3tVzg::V3zkA5DwTpaE0EQRGaH0Dw` |
| List a File’s Component Sets | GET | `/files/{{FILE_KEY}}/component_sets` | `conn_mod_def::GJcfWLk7WQg::Vh7fQPnNQt6H9DS9Yy2dUw` |
| List a Team’s Component Sets | GET | `/teams/{{TEAM_ID}}/component_sets` | `conn_mod_def::GJcfWGE6CSA::QZ9AZ1PLTP-zwi31_DwHHg` |

### Components

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Component | GET | `/components/{{key}}` | `conn_mod_def::GJcfWo0INtg::iCMUW6kFSHW1C-OQyQ6sng` |
| List a File’s Published Components | GET | `/files/{{FILE_KEY}}/components` | `conn_mod_def::GJcfWiKrwng::NMv1u1ZLSPiUEF369M6qyQ` |
| List a Team’s Components | GET | `/teams/{{TEAM_ID}}/components` | `conn_mod_def::GJcfWcIKgDA::eMC3OPovR_u-mbKKk2aUQA` |

### DevResources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File’s Dev Resources | GET | `/files/{{FILE_KEY}}/dev_resources` | `conn_mod_def::GJcfWvFtrRA::cC5vp66qSk-2bd0WQyxv2A` |
| Bulk Update Dev Resources | PUT | `/dev_resources` | `conn_mod_def::GJcfW89S0kA::XM9lG7usQ-642gkPdnByag` |
| Create Dev Resources | POST | `/dev_resources` | `conn_mod_def::GJcfW1Xykig::u3I85M72S9OT2yce0yp-6A` |

### CommentReactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Reactions for a Comment in a File | GET | `/v1/files/{{FILE_KEY}}/comments/{{COMMENT_ID}}/reactions` | `conn_mod_def::GJcfVhM0Thg::iCKroHEiSY-WkXymSGJVCw` |
| Delete a Comment Reaction in a File | DELETE | `/files/{{file_key}}/comments/{{comment_id}}/reactions` | `conn_mod_def::GJcfVsujCsA::YtiqXxzbTEakck3x1GL-UQ` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments in a File | GET | `/files/{{FILE_KEY}}/comments` | `conn_mod_def::GJcfVy26geg::9mh62JYqQGyVIIp_-OzWvQ` |
| Add a Comment to a File | POST | `/v1/files/{{FILE_KEY}}/comments` | `conn_mod_def::GJcfV51goVg::1II0GRnjRSehNwiUxI1Msw` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File's JSON | GET | `/v1/files/{{FILE_KEY}}` | `conn_mod_def::GJcfXK4ipZA::tD1Z_GqeTB6yosO65drewQ` |
| List Files in a Project | GET | `/projects/{{PROJECT_ID}}/files` | `conn_mod_def::GJcfY5uAYcg::p3xK1QRZQvGVQdSTzQ4jmg` |

### ActivityLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Activity Logs | GET | `/activity_logs` | `conn_mod_def::GJcfVY1V44g::fDpKM519QcuvViq2-a5ufg` |

### FileCommentReactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Reaction to a File Comment | POST | `/files/{{FILE_KEY}}/comments/{{COMMENT_ID}}/reactions` | `conn_mod_def::GJcfVmmpIgA::AulbkO3LQhKeKZGhumfBcw` |

### FileComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a File Comment | DELETE | `/files/{{FILE_KEY}}/comments/{{COMMENT_ID}}` | `conn_mod_def::GJcfV_ClmeA::Wm8tDGUDQaCwEZplaxHxJw` |

### FileDevResource

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a File’s Dev Resource | DELETE | `/files/{{FILE_KEY}}/dev_resources/{{DEV_RESOURCE_ID}}` | `conn_mod_def::GJcfXEXo-cA::8R_XboLXRIm9_hQx2yiBVA` |

### FileNodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get File Nodes JSON (Specific Nodes) for a File | GET | `/files/{{FILE_KEY}}/nodes` | `conn_mod_def::GJcfXT2U4DA::zNHUrUMFRsWFCsuFYzv1Ug` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Render Images of File Nodes | GET | `/images/{{FILE_KEY}}` | `conn_mod_def::GJcfXboo1Ag::G9sAs2NARjiedvzQyqdMyw` |

### ImageFills

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Image Fills for a File | GET | `/files/{{FILE_KEY}}/images` | `conn_mod_def::GJcfXidBGMA::nq6xPHAXRDKeFfBJQMCpQQ` |

### FileMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File’s Metadata | GET | `/files/{{FILE_KEY}}/meta` | `conn_mod_def::GJcfXoyCaDg::Be9dZj9WTWOUzaEYllJOXA` |

### FileVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File’s Versions | GET | `/files/{{FILE_KEY}}/versions` | `conn_mod_def::GJcfXzHnl_g::y8U2yARDQ7WyKIsIM9htVg` |

### LibraryComponentActionAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Library File’s Component Action Analytics | GET | `/analytics/libraries/{{FILE_KEY}}/component/actions` | `conn_mod_def::GJcfX47LutA::jPkEYU40SVuWdk6aBzniyw` |

### LibraryComponentUsageAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Library File’s Component Usage Analytics | GET | `/analytics/libraries/{{FILE_KEY}}/component/usages` | `conn_mod_def::GJcfX_Lj3Cg::Ywxw6a01SJG-03btZSGBPQ` |

### LibraryAnalyticsStyleActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Library Analytics Style Action Data | GET | `/analytics/libraries/{{FILE_KEY}}/style/actions` | `conn_mod_def::GJcfYGLLPqA::RQ0RUWrtTq-CKATP0HOaew` |

### LibraryStyleUsageAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Library’s Style Usage Analytics | GET | `/analytics/libraries/{{FILE_KEY}}/style/usages` | `conn_mod_def::GJcfYL7CpAA::hB2xNLx8Q3WDNvjiAspiMw` |

### LibraryAnalyticsVariableActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Library Analytics Variable Action Data | GET | `/analytics/libraries/{{FILE_KEY}}/variable/actions` | `conn_mod_def::GJcfYYN_84g::IwttK3SITCmko9Xi_ORNlw` |

### LibraryAnalyticsVariableUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Library Analytics Variable Usage Data (by File Key) | GET | `/analytics/libraries/{{FILE_KEY}}/variable/usages` | `conn_mod_def::GJcfYjFgU4A::uND2vkeeSRikOXLgiU7phA` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Payments | GET | `/payments` | `conn_mod_def::GJcfYs5yl6A::eE7NZz51Sn2N4TkffTb8wg` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team’s Projects | GET | `/teams/{{TEAM_ID}}/projects` | `conn_mod_def::GJcfYzO_SSg::ptc7yRVETaKFsXzUg_rPqA` |

### TeamStyles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Published Styles | GET | `/teams/{{TEAM_ID}}/styles` | `conn_mod_def::GJcfZGM58cA::_lp6AN08S-ugHDfQxaEzhw` |

### FileStyles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a File’s Published Styles | GET | `/files/{{FILE_KEY}}/styles` | `conn_mod_def::GJcfZSWgUSg::tu22Jqd1RoWcTCS4Ew-DVw` |

### Styles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Style | GET | `/styles/{{KEY}}` | `conn_mod_def::GJcfZXa1KxA::dz2zq0NqR_i3uyFdX4GEcg` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/me` | `conn_mod_def::GJcfZhY3hNA::UeHeIQ9aSPu25249iOAMZQ` |

### FileLocalVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File’s Local Variables | GET | `/files/{{FILE_KEY}}/variables/local` | `conn_mod_def::GJcfZobf-RA::y7cya6vXS5-ZMjrUQ3koRA` |

### PublishedVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File’s Published Variables | GET | `/files/{{FILE_KEY}}/variables/published` | `conn_mod_def::GJcfZx7SSdA::KCJKwq-PRj2wQTnciOsxgg` |

### Variables

| Action | Method | Path | Action id |
|---|---|---|---|
| Create/Modify/Delete Variables in a File | POST | `/files/{{FILE_KEY}}/variables` | `conn_mod_def::GJcfZ_N35Sg::Qn1atiuuQqWUe32Wf5T2WA` |

### WebhookRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Webhook’s Requests | GET | `/v2/webhooks/{{WEBHOOK_ID}}/requests` | `conn_mod_def::GJcfa4Y21lA::t_ocM8F_QbeLwtQphGJ6FQ` |

## When a call fails

The error comes from Figma, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/figma

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
