---
name: support-bee
description: SupportBee is a customer support platform that provides a shared inbox, ticket management, knowledge base tools, and collaboration features, allowing support teams to manage customer conversations, organize requests, and respond efficiently through email-based workflows and integrations. Read and write SupportBee data through One: tickets, users, snippets, emails, reports, comments and more, 50 actions with real parameter documentation. Use whenever the user asks to look something up in SupportBee, create or update a record there, or build code against the SupportBee API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: support-bee
  generated-from: one-knowledge-base
---

# SupportBee through One

SupportBee is a customer support platform that provides a shared inbox, ticket management, knowledge base tools, and collaboration features, allowing support teams to manage customer conversations, organize requests, and respond efficiently through email-based workflows and integrations.

One exposes SupportBee through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `support-bee` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SupportBee is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SupportBee account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Audit Trail for a Ticket | GET | `/tickets/{{id}}/audit` | `conn_mod_def::GL-vs0rVIPE::CPqUIHrcSqm6lGBN96GksA` |
| Fetch Draft for a Ticket | GET | `/tickets/{{id}}/draft` | `conn_mod_def::GL-vs1AUmNY::8wOob4beT-etXhLLayYVqg` |
| List Tickets | GET | `/tickets` | `conn_mod_def::GL-vs4Fow0w::W0kTRyetR6q7IAOTYDBLUw` |
| Retrieve a Ticket | GET | `/tickets/{{id}}` | `conn_mod_def::GL-vtAD9gKU::dfMcGy6_SlehpQvjgVloiw` |
| Search Tickets | GET | `/tickets/search` | `conn_mod_def::GL-vtIwu1Mk::UI8J9O2ZSAGIHijWPsGMpA` |
| Add Label to a Ticket | POST | `/tickets/{{ticketId}}/labels/{{labelName}}` | `conn_mod_def::GL-vsW_bsWM::C0wdAsfRQQqj8IYifdqnNw` |
| Archive a Ticket | POST | `/tickets/{{id}}/archive` | `conn_mod_def::GL-vsVHpuK8::JW1o-gLQSCuMX-WABddh9Q` |
| Assign a Ticket to a User | POST | `/tickets/{{id}}/user_assignment` | `conn_mod_def::GL-vsmPpZWc::GDpPuP76QBiEWMooTnqdPg` |
| Create Draft for a Ticket | POST | `/tickets/{{id}}/draft` | `conn_mod_def::GL-vstiUPQI::G2S_hUAITKy8ghICzK8u7Q` |
| Create Ticket | POST | `/tickets` | `conn_mod_def::GL-vsuFs0bI::u7sMajjZQ4yUlgmuPnin5Q` |
| Delete a Trashed Ticket | DELETE | `/tickets/{{id}}` | `conn_mod_def::GL-vstf0rYU::BMjEMwjpQraTPf_jb_FsHQ` |
| Delete Draft for a Ticket | DELETE | `/tickets/{{id}}/draft` | `conn_mod_def::GL-vsuC7Urw::KZQQ8WPUQj-SYcvz_Qf0Vw` |

11 more Tickets actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Users and Customer Groups | GET | `/users` | `conn_mod_def::GL-vtY-HnUw::0HmOLNJzTFmmdxl_X8jIwg` |
| Show User or Customer Group | GET | `/users/{{id}}` | `conn_mod_def::GL-vtXvij_w::Evqj4CTtSK2JMZkfvCP1vQ` |
| Add Member to a User's Members | POST | `/users/{{id}}/members` | `conn_mod_def::GL-vtQFR5Lw::N32w1V5XRumoPd4CYCUy4g` |
| Create a User or Customer Group | POST | `/users` | `conn_mod_def::GL-vtXuI2Jg::Bew-w3eXTze2Om_mMYsjhQ` |
| Update a User | PUT | `/users/{{id}}` | `conn_mod_def::GL-vtX4oJCM::Yn1gTtbvScibNFfVJBzStQ` |

### Snippets

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Snippets | GET | `/snippets` | `conn_mod_def::GL-vr-6KGzc::D8UEcA2qRR-PIq3K1ufYEA` |
| Create Snippet | POST | `/snippets` | `conn_mod_def::GL-vsAS6z6g::0i2wEJlMTpujP404YF8hvw` |
| Delete Snippet | DELETE | `/snippets/{{id}}` | `conn_mod_def::GL-vsBm2Jwc::oi9RFZxgTTuocFchJIEgbg` |
| Update a Snippet | PUT | `/snippets/{{id}}` | `conn_mod_def::GL-vr_HUcAU::3t7g_NZ2Rty_p9DcVld14A` |

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Emails | GET | `/emails` | `conn_mod_def::GL-vrs8CMFM::UOid97o_SbKO3jvkQdm1cQ` |
| Create Email | POST | `/emails` | `conn_mod_def::GL-vrs3O96I::mtsaXwFfQfOexdwgqGo_hQ` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Average First Response Time Report | GET | `/reports/avg_first_response_time` | `conn_mod_def::GL-vr2-U5vM::w2ASjlpNRWuGXvpfcZR4Xg` |
| Replies Count Report | GET | `/reports/replies_count` | `conn_mod_def::GL-vr5SruYc::VF71ErLwQSSjAOqNclclGQ` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Comments for a Ticket | GET | `/tickets/{{id}}/comments` | `conn_mod_def::GL-vs1QIBpU::I0qOBy9GQviC865LG477FQ` |
| Create a Comment on a Ticket | POST | `/tickets/{{id}}/comments` | `conn_mod_def::GL-vsuBxhrg::Zooyko3cR6eA0kxuj__LsQ` |

### TicketReplies

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Ticket Replies | GET | `/tickets/{{id}}/replies` | `conn_mod_def::GL-vs07m37E::E4FzgACRQpWhEOM3LNUCew` |
| Show a Ticket Reply | GET | `/tickets/{{ticketId}}/replies/{{id}}` | `conn_mod_def::GL-vtGEVf_E::gBjHyjdARdigM-N1A9s-Ig` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Attachment | POST | `/attachments` | `conn_mod_def::GL-vrsfsXQw::KrGag_aHTpGfhagiz2rl9g` |

### Consequences

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Consequence | POST | `/consequences` | `conn_mod_def::GL-vrtnc1IU::UxkUd5NpSFeSKjW2061Y0w` |

### Filters

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Filter | POST | `/filters` | `conn_mod_def::GL-vrv9EDRM::legHgwlXSoSm-e9Kk3rh4A` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Labels | GET | `/labels` | `conn_mod_def::GL-vr17tyLg::j57eIH7WTRaxizig4ssGfQ` |

### Rules

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Rule | POST | `/rules` | `conn_mod_def::GL-vr3U0xT8::4gNTebEtRIWDQRgtPhsU0Q` |

### TicketsCountReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Tickets Count Report | GET | `/reports/tickets_count` | `conn_mod_def::GL-vr4TYqng::pzR1NznpQzeTc6cTxGYy7g` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Teams | GET | `/teams` | `conn_mod_def::GL-vsOp6Snc::lgrQYDLVSY6gqOk2TJRBAw` |

### TeamAssignment

| Action | Method | Path | Action id |
|---|---|---|---|
| Team Assignment for a Ticket | POST | `/tickets/{{id}}/team_assignment` | `conn_mod_def::GL-vsVBHDqM::0rPndQvlTtur7W34wgbW7g` |

### Replies

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Reply for a Ticket | POST | `/tickets/{{id}}/replies` | `conn_mod_def::GL-vsW__YX4::6BFn5RrGS8WWqAE3d-bV1w` |

### CustomerGroupMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Members of a Customer Group | GET | `/users/{{id}}/members` | `conn_mod_def::GL-vtWcId1A::la2-92TpT8u1UAQfCVNwCg` |

This lists 39 of 50 actions. For anything not here, call `search_one_platform_actions` with platform `support-bee`. The full catalog is at https://www.withone.ai/knowledge/support-bee.

## When a call fails

The error comes from SupportBee, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/support-bee

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
