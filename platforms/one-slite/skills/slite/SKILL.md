---
name: slite
description: Slite is an AI-powered knowledge base and documentation platform that enables teams to create, organize, and access company information in a centralized workspace, using AI search and verification features to deliver accurate answers, streamline collaboration, and maintain a single source of truth. Read and write Slite data through One: notes, knowledgemanagementnotes, groups, users, customcontent, askindex and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in Slite, create or update a record there, or build code against the Slite API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: slite
  generated-from: one-knowledge-base
---

# Slite through One

Slite is an AI-powered knowledge base and documentation platform that enables teams to create, organize, and access company information in a centralized workspace, using AI search and verification features to deliver accurate answers, streamline collaboration, and maintain a single source of truth.

One exposes Slite through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `slite` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Slite is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Slite account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Ask a Question to Your Notes | GET | `/v1/ask` | `conn_mod_def::GKot102YR7A::OnionI-4RXC5GFMXHV7p8g` |
| List a Note's Children | GET | `/notes/{{noteId}}/children` | `conn_mod_def::GKot2TunDhg::U3hMtRkBQgav6exEAqDM_A` |
| List Notes | GET | `/notes` | `conn_mod_def::GKot2IO9zVA::Uw7KXMEiRFKRivPfqYbQRg` |
| Return a Note by ID | GET | `/notes/{{noteId}}` | `conn_mod_def::GKot2Ts2ZkA::ITS5ifAyR3mOsYtew4sYXw` |
| Search Notes | GET | `/search-notes` | `conn_mod_def::GKot2WysV0g::vp3BgJIyRQeT9EGw9LNigw` |
| Archive or Unarchive a Note | PUT | `/notes/{{noteId}}/archived` | `conn_mod_def::GKot1zwQUbg::4qRPJh2_RTqxmWtZ7YDZ8A` |
| Create a Note | POST | `/v1/notes` | `conn_mod_def::GKot1z6PpbA::nrCzjTU7Stq5J3WsvWu5jQ` |
| Delete a Note and Its Children | DELETE | `/notes/{{noteId}}` | `conn_mod_def::GKot1zweerg::jyHWiNOoRRyoAchCiGHakQ` |
| Flag a Note as Outdated | PUT | `/notes/{{noteId}}/flag-as-outdated` | `conn_mod_def::GKot19u_Awg::o27o9I8uRsOTRSGZfDNjMw` |
| Update a Note | PUT | `/notes/{{noteId}}` | `conn_mod_def::GKot2fMj2UA::PdHoanUiSziXGgLzWCXRdA` |
| Update a Note's Owner | PUT | `/notes/{{noteId}}/owner` | `conn_mod_def::GKot2fMSJgA::fPJFiR_cTbCVOvrrL4Fosg` |
| Update a Tile in a Note | PUT | `/notes/{{noteId}}/tiles/{{tileId}}` | `conn_mod_def::GKot2fmMy0g::cWIIg5QhRSSYfYJDaoLt2w` |

1 more Notes actions are available through search.

### KnowledgeManagementNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Empty Notes for Knowledge Management | GET | `/v1/knowledge-management/notes/empty` | `conn_mod_def::GKot2IhLXCA::_IosaiqzRxOTr0uyB6ff3g` |
| List Inactive Notes for Knowledge Management | GET | `/v1/knowledge-management/notes/inactive` | `conn_mod_def::GKot2IK1jOA::F2bHtoXcQ_iiuDJ_b8Yj8A` |
| List Notes for Knowledge Management | GET | `/v1/knowledge-management/notes` | `conn_mod_def::GKot2Ksd6SA::GSiRpwDLSUu0fVPr7mtOHw` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group by ID | GET | `/groups/{{groupId}}` | `conn_mod_def::GKot19QE7Gg::GJau0TKeQK6inc0nhHLrEA` |
| Search Groups | GET | `/groups` | `conn_mod_def::GKot2TuLc7A::FekZLSOBQfqaufct6w-P7A` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User By ID | GET | `/users/{{userId}}` | `conn_mod_def::GKot19QIFQA::sL1ERsPwQ4i7AWRvarkvIw` |
| Search Users | GET | `/v1/users` | `conn_mod_def::GKot2flhSpA::CGoRJ1_PTv659CKWzu6Q8Q` |

### CustomContent

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Content | GET | `/ask/index` | `conn_mod_def::GKot1-AlsLg::pK39L17uSJ6txNjbuxBIwA` |
| Index a Custom Content | POST | `/v1/ask/index` | `conn_mod_def::GKot19g-jtg::mLsGBaz8QEG4K5w9Nv6sag` |

### AskIndex

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Custom Content From Ask Index | DELETE | `/v1/ask/index` | `conn_mod_def::GKot1z7ePsg::JlsvvyL0SEaiZl8CNglHMA` |

### KnowledgeManagementPublicNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Public Notes for Knowledge Management | GET | `/v1/knowledge-management/notes/public` | `conn_mod_def::GKot2J2st9A::e1QuU1E7T5-94f-pruCmUg` |

### AuthenticatedUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Authenticated User Information | GET | `/me` | `conn_mod_def::GKot2TBLwJA::AZMPjvhzQFid65sTwSXFzw` |

This lists 24 of 25 actions. For anything not here, call `search_one_platform_actions` with platform `slite`. The full catalog is at https://www.withone.ai/knowledge/slite.

## When a call fails

The error comes from Slite, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/slite

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
