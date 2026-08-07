---
name: typefully
description: Typefully is a social media writing and scheduling platform that enables creators and teams to draft, preview, publish, and analyze posts across networks, allowing users to streamline content workflows and manage social publishing through integrations and automation. Read and write Typefully data through One: socialsets, commentthreads, socialsetdrafts, comments, socialsetsfollowersanalytics, socialsetsanalyticsposts and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in Typefully, create or update a record there, or build code against the Typefully API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: typefully
  generated-from: one-knowledge-base
---

# Typefully through One

Typefully is a social media writing and scheduling platform that enables creators and teams to draft, preview, publish, and analyze posts across networks, allowing users to streamline content workflows and manage social publishing through integrations and automation.

One exposes Typefully through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `typefully` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Typefully is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Typefully account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SocialSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Social Set's Queue | GET | `/v2/social-sets/{{socialSetId}}/queue` | `conn_mod_def::GLCOy6Cb13g::wfHg4O3bSZKtYSsOagXZ1w` |
| Get Social Set Details | GET | `/v2/social-sets/{{socialSetId}}/` | `conn_mod_def::GLCOy5IXlDA::9amopW_nSe-ohZU5_eupwQ` |
| List Social Sets | GET | `/v2/social-sets` | `conn_mod_def::GLCOzDX9CZA::sVJE9Q7wT-K1YBV4Gq-Caw` |
| Resolve a Social Set's LinkedIn Organization from URL | GET | `/v2/social-sets/{{socialSetId}}/linkedin/organizations/resolve` | `conn_mod_def::GLCOzEPO3Sg::mBcVsuaeSiK6eJokUB0UKA` |
| Delete a Draft Comment in a Social Set | DELETE | `/v2/social-sets/{{socialSetId}}/drafts/{{draftId}}/comment-threads/{{commentThreadId}}/comments/{{commentId}}` | `conn_mod_def::GLCOyYr40Zg::wvfF7GeUSo2qt-VdPDWmvw` |
| Replace a Social Set's Queue Schedule | PUT | `/v2/social-sets/{{socialSetId}}/queue/schedule` | `conn_mod_def::GLCOy7TInxA::ULvgiTRrS_aeP7pzXz3KTg` |

### CommentThreads

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Draft's Comment Threads | GET | `/v2/social-sets/{{socialSetId}}/drafts/{{draftId}}/comment-threads` | `conn_mod_def::GLCOyklSQ-A::dhDmu9gxSHe4NNHXeMZWhg` |
| Create a Draft Comment Thread for a Social Set | POST | `/v2/social-sets/{{socialSetId}}/drafts/{{draftId}}/comment-threads` | `conn_mod_def::GLCOyajr5wg::73f3lZZ0R3m7-txKUngXbg` |
| Delete a Draft Comment Thread in a Social Set | DELETE | `/v2/social-sets/{{socialSetId}}/drafts/{{draftId}}/comment-threads/{{commentThreadId}}` | `conn_mod_def::GLCOyjT-TQg::U0Jcsvs9S2-oota4EsmY0g` |
| Resolve a Draft Comment Thread in a Social Set | POST | `/v2/social-sets/{{socialSetId}}/drafts/{{draftId}}/comment-threads/{{commentThreadId}}/resolve` | `conn_mod_def::GLCOykuDWJg::5YLuCqe3StSbQKEWXXuhGw` |
| Update a Draft Comment in a Comment Thread | PATCH | `/v2/social-sets/{{socialSetId}}/drafts/{{draftId}}/comment-threads/{{commentThreadId}}/comments/{{commentId}}` | `conn_mod_def::GLCOykefSGg::AljeYsasSn2IAaUa09WZxg` |

### SocialSetDrafts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Social Set Draft by ID | GET | `/v2/social-sets/{{socialSetId}}/drafts/{{draftId}}` | `conn_mod_def::GLCOyt6hSaA::JEUGfsJNSry6uRgUSn8uPA` |
| List a Social Set's Drafts | GET | `/v2/social-sets/{{socialSetId}}/drafts` | `conn_mod_def::GLCOyuRPW9A::_C0L5kX5ScOMuKdjYThOHA` |
| Create a Social Set Draft | POST | `/v2/social-sets/{{socialSetId}}/drafts` | `conn_mod_def::GLCOyjUUs2g::eS-SeolcRmWAxPzvuU40IA` |
| Update a Social Set Draft | PATCH | `/v2/social-sets/{{socialSetId}}/drafts/{{draftId}}` | `conn_mod_def::GLCOyuYojIg::XzG9PGVlSA2dLIf5YWm0UQ` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Comment to a Draft Comment Thread | POST | `/v2/social-sets/{{socialSetId}}/drafts/{{draftId}}/comment-threads/{{commentThreadId}}/comments` | `conn_mod_def::GLCOyYsERzA::SzeCXX4jSiirHJ0R9lE1Jw` |

### SocialSetsFollowersAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Social Set's Followers Analytics for a Platform | GET | `/v2/social-sets/{{socialSetId}}/analytics/{{platform}}/followers` | `conn_mod_def::GLCOyZzt7Pg::ay1kEeuOT3msy6cZBxeOnw` |

### SocialSetsAnalyticsPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Social Set's Analytics Posts for a Platform | GET | `/v2/social-sets/{{socialSetId}}/analytics/{{platform}}/posts` | `conn_mod_def::GLCOyZ0SDvg::uWi-aGoARzSy_2AYsEJ66Q` |

### SocialSetMediaUpload

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Social Set Media Upload | POST | `/v2/social-sets/{{socialSetId}}/media/upload` | `conn_mod_def::GLCOyuCZ6Tg::_gM9dKkOTgmKhlr_84qy0w` |

### SocialSetsDrafts

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Social Set's Draft | DELETE | `/v2/social-sets/{{socialSetId}}/drafts/{{draftId}}` | `conn_mod_def::GLCOywT1zYg::eSzZYQ7lS-GsikprpMLOKA` |

### SocialSetMediaStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Social Set Media Status | GET | `/v2/social-sets/{{socialSetId}}/media/{{mediaId}}` | `conn_mod_def::GLCOy5KvOIA::UnDnKpaiTWytCWO5dxwt1g` |

### SocialSetsQueueSchedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Social Set's Queue Schedule | GET | `/v2/social-sets/{{socialSetId}}/queue/schedule` | `conn_mod_def::GLCOy5ONogA::r_Sey1xIQqqquEMiEZdfLg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/v2/me` | `conn_mod_def::GLCOzCc2rGg::BUmNq0PMQkOWgMLUxCfKeQ` |

### SocialSetTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Social Set Tag | POST | `/v2/social-sets/{{socialSetId}}/tags` | `conn_mod_def::GLCOzEHT77g::irjmnGquTHOy-1R1Cjw_4g` |

### SocialSetsTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Social Set's Tags | GET | `/v2/social-sets/{{socialSetId}}/tags` | `conn_mod_def::GLCOzEYNrYA::dNpuzz_nT0Cfcs8O7mIQHA` |

## When a call fails

The error comes from Typefully, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/typefully

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
