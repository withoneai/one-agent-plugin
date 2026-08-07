---
name: stormboard
description: Stormboard is a collaborative digital whiteboard and workflow platform that enables teams to brainstorm, organize ideas, and turn discussions into structured, data-driven workspaces for planning, decision-making, and project execution in real time. Read and write Stormboard data through One: storms, ideas, chatmessages, users, comments, connectors and more, 55 actions with real parameter documentation. Use whenever the user asks to look something up in Stormboard, create or update a record there, or build code against the Stormboard API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: stormboard
  generated-from: one-knowledge-base
---

# Stormboard through One

Stormboard is a collaborative digital whiteboard and workflow platform that enables teams to brainstorm, organize ideas, and turn discussions into structured, data-driven workspaces for planning, decision-making, and project execution in real time.

One exposes Stormboard through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `stormboard` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Stormboard is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Stormboard account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Storms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Storm's Details | GET | `/storms/{{stormId}}` | `conn_mod_def::GKo2N_Is1sA::FeSg4jxRRUWczwBYGokN2g` |
| List Your Storms | GET | `/storms/list` | `conn_mod_def::GKo2OPpgYfg::QEqCLb0IQwKZQDWRA6rWpQ` |
| Accept a Storm Invite | POST | `/storms/{{stormId}}/invite/accept` | `conn_mod_def::GKo2N10moaA::LkTSi4TqTJWF1Z9tYvbu8g` |
| Add a Favorite (Star) to a Storm | POST | `/storms/{{stormId}}/favorite` | `conn_mod_def::GKo2N1_D4cA::_L9tZnkAQNuPy5Oc5fqd-Q` |
| Close a Storm | DELETE | `/storms/{{stormId}}/close` | `conn_mod_def::GKo2N1Z7HKA::rfg4mB3kQcuuBWT69rrfiA` |
| Create a New Storm | POST | `/storms` | `conn_mod_def::GKo2N2TB-Sg::hqPMTda2SDinB0G7BacWeg` |
| Duplicate a Storm | POST | `/storms/{{stormId}}/duplicate` | `conn_mod_def::GKo2OCuUlCA::Dqj3i1yBRUWho7MG2bwI1Q` |
| Invite Participants to a Storm | POST | `/storms/{{stormId}}/invite` | `conn_mod_def::GKo2OMPXH_A::wbKc_JCDSjeKZ5mtKyR_wg` |
| Join a Storm | POST | `/storms/join` | `conn_mod_def::GKo2OcA3IGA::Gvv6bVzBQACzA7bVpStIwA` |
| Leave a Storm | POST | `/storms/{{stormId}}/leave` | `conn_mod_def::GKo2OYazrUA::nolWWRQ8T9ieN7Uos5GcBA` |
| Re-open a Storm | POST | `/storms/{{stormId}}/reopen` | `conn_mod_def::GKo2OYaJ9ZA::p0YKMIcfT2643mBErjkWVQ` |
| Remove a Favorite From a Storm | DELETE | `/storms/{{stormId}}/favorite` | `conn_mod_def::GKo2OYPWmUg::sI7xpHvUTsKsQgo6rguLiw` |

3 more Storms actions are available through search.

### Ideas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Idea Data | GET | `/ideas/{{ideaId}}` | `conn_mod_def::GKo2NjWiEvA::lemtgVVNSliNZ14wbK93Tg` |
| Get Tag Data for an Idea | GET | `/ideas/{{ideaId}}/tags` | `conn_mod_def::GKo2OyArUNA::cw1zqOhCSZ24F6cI8GwwOQ` |
| List Ideas in a Storm | GET | `/storms/{{stormId}}/ideas` | `conn_mod_def::GKo2N_lrRSA::EL1ITHiQSO-RI5Pu1SJtKQ` |
| Create an Idea | POST | `/ideas` | `conn_mod_def::GKo2NUws5Dg::KYQ8RcfkRka_utpi7mXETw` |
| Create Tag Data for an Idea | POST | `/ideas/{{ideaId}}/tags` | `conn_mod_def::GKo2OktiYoA::F87K_ZYMTMOAVJtFM9JWCA` |
| Delete a Comment on an Idea | DELETE | `/ideas/{{ideaId}}/comments/{{commentId}}` | `conn_mod_def::GKo2NbC4Lgg::3FlfoKYySCi1GPw16ax_Sw` |
| Delete a Connector Between Ideas | DELETE | `/ideas/connector` | `conn_mod_def::GKo2NVTeVxA::Bmf6kICRROKgEGt-SuFd2w` |
| Delete a Vote on an Idea | DELETE | `/ideas/{{ideaId}}/vote` | `conn_mod_def::GKo2NjcZBzg::lYnshdCwQB-Rl7jqlMP_tg` |
| Delete an Idea | DELETE | `/ideas/{{ideaId}}` | `conn_mod_def::GKo2NjRO7qA::s0WdtyUQQBaQsRThX7SFMQ` |
| Post a Vote on an Idea | POST | `/ideas/{{ideaId}}/vote` | `conn_mod_def::GKo2NtC6V-g::D9N_o6RNQSqKpAjXMLWUVw` |
| Update a Task for an Idea | PUT | `/ideas/{{ideaId}}/task` | `conn_mod_def::GKo2NtgLb6A::awmBoVguThyG92nB-wrYyQ` |
| Update an Idea | PUT | `/ideas/{{id}}` | `conn_mod_def::GKo2NtNilIg::kMI9_furSLycqyVjNzlGkg` |

### ChatMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Storm's Unread Chat Messages | GET | `/chat/{{stormId}}/new` | `conn_mod_def::GKo2NMs-oqg::VeaY4aAuQtCsx40jpeKDJw` |
| List a Storm's Chat Messages | GET | `/chat/{{stormId}}/list` | `conn_mod_def::GKo2NMC_B1A::paxkRRzPTtC2Zs6wezsYaA` |
| Create a New Chat Message for a Storm | POST | `/chat/{{stormId}}` | `conn_mod_def::GKo2NLVhUJg::W6c06poHTTmMsu1h9LNFuw` |
| Mark a Storm's Chat Messages as Read | PUT | `/chat/{{stormId}}/allread` | `conn_mod_def::GKo2NL1WpzA::QmmtxhF3TuKh606i4rQ-_w` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Authentication for a User | GET | `/users/{{userId}}` | `conn_mod_def::GKo2OyOo1wA::JQsw9_DERnSklxFBaioBWg` |
| Create a New User | POST | `/users` | `conn_mod_def::GKo2OyN9F8g::qQfFr62YQxWOfiwlKXTZFQ` |
| Update Your Profile | PUT | `/users/profile` | `conn_mod_def::GKo2O5cYZjg::MroPStyXTT2FSc2dKOfMVA` |
| Verify a User Account | PUT | `/users/verify` | `conn_mod_def::GKo2O5xCJWg::7o0-OcB2TKCpOoLp5ocVLw` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Idea's Comments | GET | `/ideas/{{ideaId}}/comments` | `conn_mod_def::GKo2Nk_YQ4g::QerbS6xwTLSPPvBCbpMNNg` |
| Create a Comment on an Idea | POST | `/ideas/{{ideaId}}/comments` | `conn_mod_def::GKo2NUouSWA::Z4C2jPKdQwquJaOS7ehpAw` |

### Connectors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Connectors in a Storm | GET | `/storms/{{stormId}}/connectors` | `conn_mod_def::GKo2N_PxlRg::fhpn6LvCR96wgLL-6wKwsw` |
| Delete a Specific Connector | DELETE | `/ideas/connector/{{connectorId}}` | `conn_mod_def::GKo2NjDniIA::48FM3VpYRJeMalR6huOX6w` |

### StormInvites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Storm Invites | GET | `/storms/invites` | `conn_mod_def::GKo2OMYEJZg::c9bxY9J-TK2_VY6NC-BGWg` |
| Decline a Storm Invite | POST | `/storms/{{stormId}}/invite/decline` | `conn_mod_def::GKo2N2PpLSg::QB3C5YEhSyK3HSPejnGdxA` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags in a Storm | GET | `/storms/{{stormId}}/tags` | `conn_mod_def::GKo2OkG2Q8g::aqPQWoLLR9qh4I11vJm0Bw` |
| Create a New Tag in a Storm | POST | `/storms/{{stormId}}/tags` | `conn_mod_def::GKo2Ol9OsjA::MEzu4-T2T6S-GpOudXPX2Q` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Folders | GET | `/folders/{{teamId}}/list` | `conn_mod_def::GKo2NMC8REg::w6c7GOciQEGgts3_KFZJyA` |

### IdeasConnector

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Line Connector Between Ideas | POST | `/ideas/connector` | `conn_mod_def::GKo2NVZg96A::uJmcWpq3RDy73989FNuT5g` |

### LineConnector

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Line Connector | PUT | `/ideas/connector/{{connectorId}}` | `conn_mod_def::GKo2NtDRdeA::ANGeTTWGSD271WgOgGZ19w` |

### IdeaComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Idea Comment | PUT | `/ideas/{{ideaId}}/comments/{{commentId}}` | `conn_mod_def::GKo2NtWu6dA::OluQiEvvQVmQrog2N4sc5A` |

### StormParticipants

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Storm's Participants | GET | `/storms/{{stormId}}/users` | `conn_mod_def::GKo2N-7s0qg::1E5efUD0SDCR99DNTbaqMw` |

### StormAccess

| Action | Method | Path | Action id |
|---|---|---|---|
| Get My Storm Access | GET | `/storms/{{stormId}}/access` | `conn_mod_def::GKo2OLI6dTA::Ij48JsRkRgSbOE4J1hZr3w` |

### StormTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Storm's Template | GET | `/storms/{{stormId}}/template` | `conn_mod_def::GKo2OL3v4Qg::1VT-Uc7DRZ2ctw92-bosuQ` |

### TemplateCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Template Categories | GET | `/templates/categories` | `conn_mod_def::GKo2OyDs0-A::PEKJgA3UTQWZxJkvvUsyGg` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Templates | GET | `/templates/{{category}}` | `conn_mod_def::GKo2OyWc0xg::jvKoN_P-QBGiRM2L2RY8pQ` |

### UserNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Update User Notification Preferences | PUT | `/users/notifications` | `conn_mod_def::GKo2O6QFjsA::ivdtyNhsTQqp3QY7yqnkNw` |

### UserProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Your User Profile | GET | `/users/profile` | `conn_mod_def::GKo2O-PJWWA::3qwySKrWQPWOFNw6B6GmCg` |

### AuthenticationInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Authentication Info | GET | `/users/auth` | `conn_mod_def::GKo2PA7yPQA::0JNzBWqpS_CbqsRTfHhIJA` |

This lists 52 of 55 actions. For anything not here, call `search_one_platform_actions` with platform `stormboard`. The full catalog is at https://www.withone.ai/knowledge/stormboard.

## When a call fails

The error comes from Stormboard, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/stormboard

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
