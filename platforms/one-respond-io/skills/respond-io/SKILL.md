---
name: respond-io
description: Respond.io is a customer conversation management platform that unifies messaging channels such as WhatsApp, TikTok, Instagram, and Facebook into a shared inbox with AI agents, helping businesses capture leads, route conversations, support customers, and run messaging campaigns at scale. Read and write Respond.io data through One: contacts, contact, spacetag, customfield, contactchannels, contacttags and more, 28 actions with real parameter documentation. Use whenever the user asks to look something up in Respond.io, create or update a record there, or build code against the Respond.io API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: respond-io
  generated-from: one-knowledge-base
---

# Respond.io through One

Respond.io is a customer conversation management platform that unifies messaging channels such as WhatsApp, TikTok, Instagram, and Facebook into a shared inbox with AI agents, helping businesses capture leads, route conversations, support customers, and run messaging campaigns at scale.

One exposes Respond.io through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `respond-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Respond.io is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Respond.io account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Tags for a Contact | POST | `/v2/contact/{{identifier}}/tag` | `conn_mod_def::GMTVDhNe9GM::uKF1ziL3R_iOs-Ju5rYimw` |
| Create or Update a Contact by Identifier | POST | `/v2/contact/create_or_update/{{identifier}}` | `conn_mod_def::GMTVDaJ8sAg::RLgquzdGSta-X5j8n20ZXw` |
| Delete a Contact | DELETE | `/v2/contact/{{identifier}}` | `conn_mod_def::GMTVDKCwMP0::VXproYweRwOXWncmz1z8rQ` |
| List Contacts | POST | `/v2/contact/list` | `conn_mod_def::GMTVDJfJD3o::znVCkKw7QTCnlljrBF9I7Q` |
| Merge Contacts | POST | `/v2/contact/merge` | `conn_mod_def::GMTVDzHtfzA::2srYSPDATeqXh3D5lZmkmw` |
| Send a Message to a Contact | POST | `/v2/contact/{{identifier}}/message` | `conn_mod_def::GMTVEOsETes::o5NQIL8pS-iHH73-RXrZJA` |
| Update a Contact's Lifecycle | POST | `/v2/contact/{{identifier}}/lifecycle/update` | `conn_mod_def::GMTVDg4nLlc::PyO2oQpFQmCZOgCOuqsjYg` |

### Contact

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/v2/contact/{{identifier}}` | `conn_mod_def::GMTVDICyUMU::3T3evuWWTcyBRRewK6dmEQ` |
| Create a Contact by Identifier | POST | `/v2/contact/{{identifier}}` | `conn_mod_def::GMTVDIEEcEk::seOVHBO7TUq1UKrZ-Rd5yw` |
| Update a Contact by Identifier | PUT | `/v2/contact/{{identifier}}` | `conn_mod_def::GMTVDkWOY0c::DSMZ1hmZTxaJBjz4dOUFeQ` |

### SpaceTag

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Space Tag | POST | `/v2/space/tag` | `conn_mod_def::GMTVD6ALqpU::KGoc6pqQSEaPvjdpgRxiMg` |
| Delete Space Tag | DELETE | `/v2/space/tag` | `conn_mod_def::GMTVEA58Ljg::PIn5o-EpSKaRWP0qfmjtnw` |
| Update a Space Tag | PUT | `/v2/space/tag` | `conn_mod_def::GMTVEOO1bx8::9UJ9V3EPTJa99ic7QTW-AQ` |

### CustomField

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field for a Space | GET | `/v2/space/custom_field/{{id}}` | `conn_mod_def::GMTVEBSpirM::tieNcBT-RKOE2vi_lPdiyA` |
| Create a Custom Field | POST | `/v2/space/custom_field` | `conn_mod_def::GMTVD5raYRA::XfMKKjTPSoCCzkf2SUoXng` |

### ContactChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Channels for a Contact | GET | `/v2/contact/{{identifier}}/channels` | `conn_mod_def::GMTVDg1IOtQ::aSQNI1NzSzO6a1ITdGp4aQ` |

### ContactTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Tags for a Contact | DELETE | `/v2/contact/{{identifier}}/tag` | `conn_mod_def::GMTVD5DVREw::D0hqFtAaS5mZp1GyhyXl3g` |

### ContactConversationAssignee

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign or Unassign a Contact's Conversation Assignee | POST | `/v2/contact/{{identifier}}/conversation/assignee` | `conn_mod_def::GMTVD6cJt4Y::pGr0h5LmQGWxJEIxRLy_Xg` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Comment for a Contact | POST | `/v2/contact/{{identifier}}/comment` | `conn_mod_def::GMTVD6niymU::AfTF-qfbQPWuJX85YBdU0A` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Channels in a Workspace | GET | `/v2/space/channel` | `conn_mod_def::GMTVEAiXoEg::ZWcqcsdoS9m0fvl3heXo3w` |

### ContactMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Message | GET | `/v2/contact/{{identifier}}/message/{{messageId}}` | `conn_mod_def::GMTVEAj8fIM::HhtmMzzcSAWmGGjS7QtC1g` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/v2/space/user/{{id}}` | `conn_mod_def::GMTVEBTB-h8::Y-cHugwiQ0CWtO9bv_px9g` |

### WorkspaceUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspace Users | GET | `/v2/space/user` | `conn_mod_def::GMTVEHMV3Pw::n2obVxT4RGSAEaM56zsNlw` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Fields | GET | `/v2/space/custom_field` | `conn_mod_def::GMTVEHeKGpg::se6HeBFTRZOi8XcWhPh_yA` |

### MessageTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Message Templates for a Space Channel | GET | `/v2/space/channel/{{id}}/template` | `conn_mod_def::GMTVEHt_XAg::C9Q18k54T7CDC_k7_OCaiQ` |

### ClosingNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Closing Notes | GET | `/v2/space/closing_notes` | `conn_mod_def::GMTVEH-CDcA::H81kfbcMTJKM0iF0EnGRWA` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Messages for a Contact | GET | `/v2/contact/{{identifier}}/message/list` | `conn_mod_def::GMTVEIOR2mg::pxRHi4YrRYe03ChSuWztFQ` |

### ContactConversationStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Open or Close a Contact's Conversation Status | POST | `/v2/contact/{{identifier}}/conversation/status` | `conn_mod_def::GMTVEOQHq_Y::iESNUqpPQLeEgbewdpjIPw` |

## When a call fails

The error comes from Respond.io, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/respond-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
