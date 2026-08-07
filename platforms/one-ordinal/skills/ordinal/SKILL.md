---
name: ordinal
description: Ordinal is a social media management platform that enables teams to draft, plan, schedule, publish, automate engagement (likes, comments, reposts), and track analytics across major networks from a unified interface with collaboration and API support for scalable content workflows. Read and write Ordinal data through One: posts, ideas, engagements, labels, approvals, comments and more, 49 actions with real parameter documentation. Use whenever the user asks to look something up in Ordinal, create or update a record there, or build code against the Ordinal API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ordinal
  generated-from: one-knowledge-base
---

# Ordinal through One

Ordinal is a social media management platform that enables teams to draft, plan, schedule, publish, automate engagement (likes, comments, reposts), and track analytics across major networks from a unified interface with collaboration and API support for scalable content workflows.

One exposes Ordinal through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ordinal` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Ordinal is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Ordinal account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Posts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Post | GET | `/api/v1/posts/{{id}}` | `conn_mod_def::GJlBnYwfhmA::d1sEJKC2RECy2trA9lG7uA` |
| List Posts | GET | `/api/v1/posts` | `conn_mod_def::GJlBnJ7b6og::OjYiIeBpQEmfLwngSMYI7g` |
| Archive a Post | POST | `/api/v1/posts/{{ID}}/archive` | `conn_mod_def::GJlBnjSmf_A::rAZmSIvSQpiWAECyNjvYVQ` |
| Create a Post | POST | `/api/v1/posts` | `conn_mod_def::GJlBnSTPFZg::B1TTcj6_Q9mkfVInrmzwfQ` |
| Schedule or Reschedule a Post | POST | `/api/v1/posts/{{ID}}/schedule` | `conn_mod_def::GJlBnt1HHAA::zeBIdUibTi2NqjQNVrEYGQ` |
| Unarchive a Post | POST | `/api/v1/posts/{{id}}/unarchive` | `conn_mod_def::GJlBnoUllgA::vyXA5lpFSICmOkijLt2QFg` |
| Unschedule a Post | POST | `/api/v1/posts/{{ID}}/unschedule` | `conn_mod_def::GJlBnzEPUjA::Xd9cXCmxSsSNO1rer2ODiQ` |
| Update a Post | PATCH | `/api/v1/posts/{{id}}` | `conn_mod_def::GJlBneBmM5A::sYldrTBzSZuxQ6yLeY42Zg` |

### Ideas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Idea | GET | `/api/v1/ideas/{{id}}` | `conn_mod_def::GJlBlTlc5ng::AESfqF5aQB6F1B280SxAaA` |
| List Ideas | GET | `/api/v1/ideas` | `conn_mod_def::GJlBlHNlyug::YlINHoVwSSWAwKzocHUXDQ` |
| Add an Idea to the Calendar (Convert Idea to Scheduled Post) | POST | `/api/v1/ideas/{{ID}}/add-to-calendar` | `conn_mod_def::GJlBl0aJY4g::_MSXyzNHRgqaTxzHzTc8Pg` |
| Archive an Idea | POST | `/api/v1/ideas/{{ID}}/archive` | `conn_mod_def::GJlBll_Qelg::Is_-hDknRxO-M3WnMGxpCw` |
| Create Idea | POST | `/api/v1/ideas` | `conn_mod_def::GJlBlNsleEA::_NoflSrERXirBtkTbOopoQ` |
| Unarchive an Idea | POST | `/api/v1/ideas/{{ID}}/unarchive` | `conn_mod_def::GJlBltZSiVA::xHsjyZroQ8q77Z_CYDGCZw` |
| Update an Idea | PATCH | `/api/v1/ideas/{{ID}}` | `conn_mod_def::GJlBlbhX70A::DDUDS1MERLWyqnIVkcgU5g` |

### Engagements

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Engagements for a Post | POST | `/api/v1/posts/{{POSTID}}/engagements` | `conn_mod_def::GJlBkjmhZTA::JRF_JqnzSmO8hUudu1WXqw` |
| Delete an Engagement | DELETE | `/api/v1/engagements/{{id}}` | `conn_mod_def::GJlBk0Aor5g::7FRC-hk-SuORiG3pp4m3Aw` |
| Update an Engagement | PATCH | `/api/v1/engagements/{{id}}` | `conn_mod_def::GJlBkrfKk1A::JPbtBG84TZ2KPNUrMdx4iA` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Labels | GET | `/api/v1/labels` | `conn_mod_def::GJlBmXSsdfA::8Zsrlbg2QXiaqOiaIt_qVw` |
| Create a Label | POST | `/api/v1/labels` | `conn_mod_def::GJlBmd1Fe-g::VVvvZmk2QNeJOTgprBzpRA` |
| Delete a Label | DELETE | `/api/v1/labels/{{id}}` | `conn_mod_def::GJlBmkeyNFg::023rYUclTySue0stQDGWlw` |

### Approvals

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Approval Requests for a Post | POST | `/approvals` | `conn_mod_def::GJlBj5WUReA::H_LP7crSR_W9Gu_nzVOGCw` |
| Delete an Approval | DELETE | `/approvals/{{id}}` | `conn_mod_def::GJlBj-SBzxA::vER8IKzrSPqATT9WqmDgFw` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Post’s Comments | GET | `/api/v1/posts/{{POSTID}}/comments` | `conn_mod_def::GJlBkL8hK5g::2NjkR6SbRGyNqWshtUuiGg` |
| Create a Comment on a Post | POST | `/api/v1/posts/{{POSTID}}/comments` | `conn_mod_def::GJlBkX3PUXg::N3aZMGgISyaN91qOLj2ZKw` |

### Invites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pending Invites for the Workspace | GET | `/api/v1/invites` | `conn_mod_def::GJlBmB5hVvg::FG0MBf5FQQOc4mi34ll3gg` |
| Delete an Invite | DELETE | `/api/v1/invites/{{id}}` | `conn_mod_def::GJlBmQ8bg8A::vTc3c9ulSUGpBBBaRGxUJw` |

### Uploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Upload’s Status | GET | `/api/v1/uploads/{{id}}` | `conn_mod_def::GJlBlBJQDFA::OOqhJLJPR5q8NdRR86_aPg` |
| Upload a File from a URL | POST | `/uploads` | `conn_mod_def::GJlBk48iMzA::uSkWLT3ZRhGpWugQXCaOUw` |

### Subscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Subscribers to a Post | POST | `/subscribers` | `conn_mod_def::GJlBoSDFRKA::xeNKIcGLReauYPB8mJO3lQ` |
| Delete a Subscriber | DELETE | `/api/v1/subscribers/{{id}}` | `conn_mod_def::GJlBoXa0aeA::6ADUw1ZHRv2vQxN4xWGPzg` |

### LinkedinPostAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| List a LinkedIn Profile's Post Analytics | GET | `/api/v1/analytics/linkedin/{{PROFILEID}}/posts` | `conn_mod_def::GJlBjQsdK0A::gPYV46G0RGuejkmTB3OP8w` |

### PostApprovals

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Post’s Approvals | GET | `/posts/{{POSTID}}/approvals` | `conn_mod_def::GJlBkGBejJA::EeFZoMORREKCPk7qrr-QvQ` |

### InlineComments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Post's Inline Comments | GET | `/api/v1/posts/{{POSTID}}/inline-comments` | `conn_mod_def::GJlBl8iLAUg::ZnERE_aeSuykS-dBLVh5Zg` |

### Workspace

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Workspace | GET | `/workspace` | `conn_mod_def::GJlBonh-yHg::-IgTZ4IVTtyJ_ExQ0lAsfQ` |

### XProfilePostAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| List an X Profile’s Post Analytics | GET | `/api/v1/analytics/x/{{PROFILEID}}/posts` | `conn_mod_def::GJlBjigXk2A::w-RIQCqsSKixVnAU72cu-A` |

### CpmValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get CPM Values | GET | `/api/v1/analytics/cpm` | `conn_mod_def::GJlBjpjVaEg::0XtuED7pQrO6IuqYERx53A` |

### PostEngagements

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Post’s Engagements | GET | `/api/v1/posts/{{POSTID}}/engagements` | `conn_mod_def::GJlBkei12YA::x349mKkvSei6_-aVWzRpSg` |

### LinkedinMentionFormat

| Action | Method | Path | Action id |
|---|---|---|---|
| Get LinkedIn Mention Format by Username | GET | `/api/v1/linkedin/{{username}}/mentions` | `conn_mod_def::GJlBmq_tcoA::rAeTLXusSv66GDRw5gVjTw` |

### LinkedinProfileFollowerGrowthHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a LinkedIn Profile’s Follower Growth History | GET | `/api/v1/analytics/linkedin/{{PROFILEID}}/followers` | `conn_mod_def::GJlBjFTAjYg::kY_ZyxFXT2u5JWXHE7ncRw` |

### XProfileFollowerGrowth

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an X Profile’s Follower Growth | GET | `/api/v1/analytics/x/{{PROFILEID}}/followers` | `conn_mod_def::GJlBjbAhKDA::SnwyYGUESH6UcKH3kgTnqA` |

### AnalyticsCpm

| Action | Method | Path | Action id |
|---|---|---|---|
| Update CPM Values for EMV Calculations | PUT | `/api/v1/analytics/cpm` | `conn_mod_def::GJlBjxkHYqA::Rdewi-3oSyuYmBj1BisSig` |

### WorkspaceInvite

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workspace Invite | POST | `/api/v1/invites` | `conn_mod_def::GJlBmKUhV4g::sM8hfixyQi-IJjLng2sJPQ` |

### LinkedinPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Profile’s LinkedIn Posts (with Scraped Lead Counts) | GET | `/api/v1/linkedin/leads/{{PROFILEID}}/posts` | `conn_mod_def::GJlBm2asLWg::h6gmpGghQeq8KmD_F3aOvg` |

### LinkedinLeads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a LinkedIn Post’s Leads (Reactions, Comments, Reshares) | GET | `/api/v1/linkedin/leads/{{PROFILEID}}/posts/{{POSTID}}` | `conn_mod_def::GJlBnA42b6g::9XlCOp5CRCas9tQevmlFSA` |

### EngagementProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Engagement Profiles | GET | `/api/v1/profiles/engagement` | `conn_mod_def::GJlBn7Sgx1A::iEraThUZT_u4LXnlpfJ0PA` |

### SchedulingProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Scheduling Profiles | GET | `/api/v1/profiles/scheduling` | `conn_mod_def::GJlBoDZNliA::owIBzUL-QmShdoeoAzhj0w` |

### PostSubscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Post’s Subscribers | GET | `/api/v1/posts/{{POSTID}}/subscribers` | `conn_mod_def::GJlBoLbwerg::mCc8T7Z4Q6GyiniXXrCAJA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspace Users | GET | `/api/v1/users` | `conn_mod_def::GJlBofbkj3g::s776rX29QlWJSdahWAhkMg` |

## When a call fails

The error comes from Ordinal, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ordinal

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
