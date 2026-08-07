---
name: userflow
description: Userflow is a no-code user onboarding and product adoption platform that enables teams to build in-app tours, checklists, surveys, and resource centers, allowing product and customer success teams to guide users and improve activation, engagement, and retention. Read and write Userflow data through One: webhooksubscriptions, users, members, contentsessions, groups, invites and more, 35 actions with real parameter documentation. Use whenever the user asks to look something up in Userflow, create or update a record there, or build code against the Userflow API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: userflow
  generated-from: one-knowledge-base
---

# Userflow through One

Userflow is a no-code user onboarding and product adoption platform that enables teams to build in-app tours, checklists, surveys, and resource centers, allowing product and customer success teams to guide users and improve activation, engagement, and retention.

One exposes Userflow through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `userflow` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Userflow is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Userflow account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### WebhookSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Webhook Subscription | GET | `/webhook_subscriptions/{{webhookSubscriptionId}}` | `conn_mod_def::GLNQjte4B5A::v-bIGCumRwek7TT0uzMk0w` |
| List Webhook Subscriptions | GET | `/webhook_subscriptions` | `conn_mod_def::GLNQjuFZrpg::ZLsbTuMqTXKg4EWX8WhJbw` |
| Create A Webhook Subscription | POST | `/webhook_subscriptions` | `conn_mod_def::GLNQjuPhR8A::FsmkdJY8SLe31XjmxDLyHQ` |
| Delete A Webhook Subscription | DELETE | `/webhook_subscriptions/{{webhookSubscriptionId}}` | `conn_mod_def::GLNQjtZfgFg::cZcbY-CHStiF3AfgFMIu1A` |
| Update A Webhook Subscription | PATCH | `/webhook_subscriptions/{{webhookSubscriptionId}}` | `conn_mod_def::GLNQjuPvKnA::dcnG8RUmQUSConJhuN-HDQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A User | GET | `/users/{{userId}}` | `conn_mod_def::GLNQjiDQc6A::9uNNtTS-RaKXmo0lQ5JMIA` |
| List Users | GET | `/users` | `conn_mod_def::GLNQjkf86Mg::j47yFPAoSGK205KXmniXIw` |
| Create Or Update A User | POST | `/users` | `conn_mod_def::GLNQjj-yIxg::Gsaq2duMTxm-3fL_SFtRvg` |
| Delete a User | DELETE | `/users/{{userId}}` | `conn_mod_def::GLNQjiJJa4g::7KY-xjthRBipeG50DjKo0Q` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Member | GET | `/accounts/{{accountId}}/members/{{memberId}}` | `conn_mod_def::GLNQjaLhZGg::aUoioENWTUagk6x8LpN3VA` |
| List Members | GET | `/accounts/{{accountId}}/members` | `conn_mod_def::GLNQjTNm4Qg::ZuKxrblNRKOmWJG1sSkwQQ` |
| Remove A Member | DELETE | `/accounts/{{accountId}}/members/{{memberId}}` | `conn_mod_def::GLNQjRL0e4g::SeRlx0UmTuyWmQTN_o0ZhQ` |
| Update A Member | PATCH | `/accounts/{{accountId}}/members/{{memberId}}` | `conn_mod_def::GLNQjiooySA::md0j8tyyR9yc2JevEhtWlg` |

### ContentSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Content Session | GET | `/content_sessions/{{sessionId}}` | `conn_mod_def::GLNQirY4Sag::ECMLXiNaTbOQGSpJ-GkAHg` |
| List Content Sessions | GET | `/content_sessions` | `conn_mod_def::GLNQirBdBSg::tDV6viT0RR6WZMgpVFWzvg` |
| Delete A Content Session | DELETE | `/content_sessions/{{contentSessionId}}` | `conn_mod_def::GLNQipPGzFA::BFdvQdQpQ0u4J8yKBQuCSw` |
| End A Content Session | POST | `/content_sessions/{{contentSessionId}}/end` | `conn_mod_def::GLNQiqcbEiA::hiphMQ0vTzGM_4KES2myig` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Group | GET | `/groups/{{groupId}}` | `conn_mod_def::GLNQjI_xrfA::Oh3X6Z-QSf-7q8J_tOH1_w` |
| List Groups | GET | `/groups` | `conn_mod_def::GLNQjF3EHRg::x36DlT_tS7mJ2q9z8Nxlcw` |
| Create Or Update A Group | POST | `/groups` | `conn_mod_def::GLNQiz1lxZA::MrmHNI5TSSaxWtVZGTBoVA` |
| Delete A Group | DELETE | `/groups/{{groupId}}` | `conn_mod_def::GLNQjDOVWLg::BdVX7z67SDq_v1vC2SCoJw` |

### Invites

| Action | Method | Path | Action id |
|---|---|---|---|
| Get An Invite | GET | `/accounts/{{accountId}}/invites/{{inviteId}}` | `conn_mod_def::GLNQjRWaoQA::-4sranJyRkykjhDsERpZkw` |
| List Invites | GET | `/accounts/{{accountId}}/invites` | `conn_mod_def::GLNQjTNVJfg::6duNRlPGQDauttg2oXwoCw` |
| Create An Invite | POST | `/accounts/{{accountId}}/invites` | `conn_mod_def::GLNQjDwEewA::PBASgmPaTFylcn39o0ZDTw` |
| Delete an Invite | DELETE | `/accounts/{{accountId}}/invites/{{inviteId}}` | `conn_mod_def::GLNQjD2PIkA::WWOIuHzMRVS4E54-97TkJg` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get An Account | GET | `/accounts/{{accountId}}` | `conn_mod_def::GLNQierXtmg::LEF-drsVTGevaXZ6OsnXrg` |
| List Accounts | GET | `/accounts` | `conn_mod_def::GLNQifHC8-g::DN8snxzMRdC7BKLdqIxBkw` |

### Content

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Content Object | GET | `/content/{{contentId}}` | `conn_mod_def::GLNQigtwUSg::mO_U1XJsRcmSorPo6_MWEg` |
| List Content | GET | `/content` | `conn_mod_def::GLNQiffQTLg::6P3f8qY7RR66Bsmb1TiJxQ` |

### ContentVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Content Version | GET | `/content_versions/{{versionId}}` | `conn_mod_def::GLNQipwEwMA::yMrMYBJrQYyo_8ghzxy_lw` |
| List Content Versions | GET | `/content_versions` | `conn_mod_def::GLNQi0JRHDA::jT4WzZgXQHmW8mj2jxnk1g` |

### AttributeDefinitions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Attribute Definitions | GET | `/attribute_definitions` | `conn_mod_def::GLNQig8NoBA::jmfjA1xVRqWzB5S-t3PvaA` |

### GroupMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove A User From A Group | DELETE | `/group_memberships` | `conn_mod_def::GLNQiz9wBOA::UYYtFhDOSZqh8Z2g6UCYvA` |

### EventDefinitions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Event Definitions | GET | `/event_definitions` | `conn_mod_def::GLNQi0dIMqA::WUqb81ZJROyLruxsoB9NtA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Track An Event | POST | `/events` | `conn_mod_def::GLNQi79s6WA::fn6UQbgOTXKeeJKJkOmtkw` |

## When a call fails

The error comes from Userflow, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/userflow

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
