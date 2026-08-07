---
name: dovetail
description: Dovetail is an AI-native customer intelligence platform that centralises and synthesises feedback from interviews, support tickets, reviews and research data—helping teams uncover themes, drive product decisions and act on voice-of-customer in one unified workspace. Read and write Dovetail data through One: docs, insights, data, notes, channels, contacts and more, 58 actions with real parameter documentation. Use whenever the user asks to look something up in Dovetail, create or update a record there, or build code against the Dovetail API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: dovetail
  generated-from: one-knowledge-base
---

# Dovetail through One

Dovetail is an AI-native customer intelligence platform that centralises and synthesises feedback from interviews, support tickets, reviews and research data—helping teams uncover themes, drive product decisions and act on voice-of-customer in one unified workspace.

One exposes Dovetail through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `dovetail` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Dovetail is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Dovetail account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Docs

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Doc (HTML or Markdown) | GET | `/v1/docs/{{docId}}/export/{{type}}` | `conn_mod_def::GJ2X-BjqX6o::Df6CK7_XQtmG4jPLcbMtMA` |
| Get a Doc by ID | GET | `/v1/docs/{{docId}}` | `conn_mod_def::GJ2X-I0CIp0::Rrp4TaWJRzqq9YgmRuWXsw` |
| List a User's Personal Docs | GET | `/v1/docs/user/{{userId}}` | `conn_mod_def::GJ2X-mmSI1Q::C7YLm9aHSYOF9NJuQbNruA` |
| List Docs | GET | `/docs` | `conn_mod_def::GJ2X-YoQSEQ::eywrqa5ATUSjsFFl-HGDhw` |
| Create a Doc | POST | `/docs` | `conn_mod_def::GJ2X9sUVdsg::g6rk5k9vSsCIbWlk-zUt6Q` |
| Delete a Doc | DELETE | `/docs/{{docId}}` | `conn_mod_def::GJ2X95tPBnY::FJiqOkCsRCacKn5iJ-zvog` |
| Import File to Doc | POST | `/docs/import/file` | `conn_mod_def::GJ2X-QgTttM::Kktx9UemTmW67RdUr-gonQ` |
| Update a Doc | PATCH | `/v1/docs/{{docId}}` | `conn_mod_def::GJ2X-vPJyIE::r_BmWggkSt65Y30-k_uBfA` |

### Insights

| Action | Method | Path | Action id |
|---|---|---|---|
| Export an Insight (HTML or Markdown) | GET | `/v1/insights/{{insightId}}/export/{{type}}` | `conn_mod_def::GJ2X__-7LIc::TUJYPU3-TrmarjSugffnxw` |
| Get an Insight | GET | `/v1/insights/{{insightId}}` | `conn_mod_def::GJ2YAGimv2Y::P07eMFMQT-yK4iKhxHLZHg` |
| List a User's Personal Insights | GET | `/insights/user/{{userId}}` | `conn_mod_def::GJ2YAkPoWiU::88lPAQrJQh6migtOQSjGZg` |
| List Insights | GET | `/insights` | `conn_mod_def::GJ2YAZb1NGA::vGdgSauCRhuZtK41lXdk3Q` |
| Create an Insight | POST | `/insights` | `conn_mod_def::GJ2X_tkv9Kk::O0svhUZIRJCYdfL2E5cbxQ` |
| Delete an Insight | DELETE | `/insights/{{insightId}}` | `conn_mod_def::GJ2X_3wFLwo::P_87cWbYQJi41XP8spta9A` |
| Import File to Insight | POST | `/api/v1/insights/import/file` | `conn_mod_def::GJ2YAOQNCNk::yDvpVzDKSK6Q7SUua0fR7Q` |
| Update an Insight | PATCH | `/insights/{{insightId}}` | `conn_mod_def::GJ2YAqyaxIo::Wgos1C0WRsCnTVDQYcLzhA` |

### Data

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Data's Content (HTML or Markdown) | GET | `/v1/data/{{dataId}}/export/{{type}}` | `conn_mod_def::GJ2X8_NDJW4::3x36ksoOTDKyJJ8QMFoB-g` |
| Get a Data Item | GET | `/data/{{dataId}}` | `conn_mod_def::GJ2X9GNxL3o::tYO2ZSHLThunadDgtdg80Q` |
| List Workspace Data | GET | `/data` | `conn_mod_def::GJ2X9eFeZWI::OxW0X2tYQ7aMEcaPnk244Q` |
| Create Data | POST | `/data` | `conn_mod_def::GJ2X8wufpfA::8h1_UBuJSbiy-pwoaYKDgw` |
| Delete a Data | DELETE | `/data/{{dataId}}` | `conn_mod_def::GJ2X83qN_GU::QYycpz7oTYS6kyZHHBrCFA` |
| Import File to Data | POST | `/data/import/file` | `conn_mod_def::GJ2X9QH7m1E::JTS28IouT-ySecOGUFsDIA` |
| Update a Data (Patch) | PATCH | `/data/{{dataId}}` | `conn_mod_def::GJ2X9lcZchs::M41sF4t8QMyyQCj8uV-W-Q` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Note (HTML or Markdown) | GET | `/v1/notes/{{noteId}}/export/{{type}}` | `conn_mod_def::GJ2YBBigHTU::JMYNb1ldQn-5NRVQtej8lg` |
| Get a Note | GET | `/notes/{{noteId}}` | `conn_mod_def::GJ2YBMVh__M::3a8A2kplQCGMn1BA-7ZXEw` |
| List Notes | GET | `/notes` | `conn_mod_def::GJ2YBiZ9xRQ::jXHrS92kS7uIVvs0_hPEJg` |
| Create Note | POST | `/notes` | `conn_mod_def::GJ2YAyPuYbE::C8WQsQSXSuqq3tlsjT3KJQ` |
| Delete a Note | DELETE | `/v1/notes/{{noteId}}` | `conn_mod_def::GJ2YA4RJ2W8::zsKqWSDkRjapMsPN6IYcyg` |
| Import a File URL as a Note | POST | `/notes/import/file` | `conn_mod_def::GJ2YBXl7xKo::5gYZgitIQoCmSdefidH_Rg` |
| Update a Note | PATCH | `/v1/notes/{{noteId}}` | `conn_mod_def::GJ2YBouAkig::hD0PazF6Sl20z5_VDLQxEg` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel | GET | `/channels/{{channelId}}` | `conn_mod_def::GJ2X7l3ki2E::8pOK94ocRw-CsftD5_RLUw` |
| List Channels | GET | `/channels` | `conn_mod_def::GJ2X7u2BoqI::SyhnvrmMRyy6bJw5LLW9PQ` |
| Create a Channel | POST | `/channels` | `conn_mod_def::GJ2X1r6l0wA::ncAzEi3dRYO7gb_YsA9h9g` |
| Delete a Channel | DELETE | `/channels/{{channelId}}` | `conn_mod_def::GJ2X7Ttg0wY::bs1yTSqlQ9igjpJnolB6pQ` |
| Update a Channel | PATCH | `/v1/channels/{{channelId}}` | `conn_mod_def::GJ2X76XlgF8::yCScz1OKQ3Wpj9iniGGy9A` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact by ID | GET | `/contacts/{{contactId}}` | `conn_mod_def::GJ2X8SY3_8I::4wjGavWuRYiPsWtXl8jmBw` |
| List Contacts | GET | `/contacts` | `conn_mod_def::GJ2X8eHoT_w::3iMyrPlCSu6vbe9ke9KT6A` |
| Create Contact | POST | `/contacts` | `conn_mod_def::GJ2X8KuNZbM::gkHoXqr8QFG_oU7Lv2o_3g` |
| Update a Contact | PATCH | `/v1/contacts/{{contactId}}` | `conn_mod_def::GJ2X8oyJ3ug::6bMdD87dR5-h0U_E4oIuEA` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Folder | GET | `/v1/folders/{{folderId}}` | `conn_mod_def::GJ2X--cwd6k::itLouci4SgapThVUC8Babw` |
| Get a Folder’s Contents | GET | `/v1/folders/{{folderId}}/contents` | `conn_mod_def::GJ2X_HH5rWo::96da8CQmQD-kLge5-uz0bg` |
| List Folders | GET | `/folders` | `conn_mod_def::GJ2X_QY68M0::DH07wIQ5SdmQ4q7S9jYMjQ` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/v1/projects/{{projectId}}` | `conn_mod_def::GJ2YB4C7gsc::pqtaiXqxQNWRydBoKr1GEQ` |
| List Projects | GET | `/projects` | `conn_mod_def::GJ2YCEuQojg::iZrqpNnqSFmmYySwGwQ3cw` |
| Create Project | POST | `/projects` | `conn_mod_def::GJ2YBwL2jL0::gM2gOJYzQSSjIbRgdPNSmg` |

### Topics

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Topic in a Channel | POST | `/channels/topic` | `conn_mod_def::GJ2X7L98x-c::Dw44rGijRuKt3tTqRx30tA` |
| Delete a Topic | DELETE | `/v1/channels/topic/{{topicId}}` | `conn_mod_def::GJ2X7emmNiQ::JCoqT1LTQcK3VcnycyT6pA` |

### Highlights

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Highlight | GET | `/highlights/{{highlightId}}` | `conn_mod_def::GJ2X_arXaEU::IXXGNPOnRuurtcqpS33shQ` |
| List Highlights | GET | `/highlights` | `conn_mod_def::GJ2X_l8NPQg::ky3VGW4TSYSTe2Hg0zudgg` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Magic Search (Search Highlights, Notes, Insights, Channels, and Themes) | POST | `/search` | `conn_mod_def::GJ2YCNMZlhU::NOJYWcGBSkayEi1_UUipvg` |
| Search Across Content Types (V2) | POST | `/api/v2/search` | `conn_mod_def::GJ2YCWqH9J8::J9Cx4rteSwW3bP-jbhAX8A` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag by ID | GET | `/v1/tags/{{tagId}}` | `conn_mod_def::GJ2YCmiK3m8::1PWewdShT5egn5LYYsB0mw` |
| List Workspace Tags | GET | `/tags` | `conn_mod_def::GJ2YCvq4hJQ::IT72Jdd2SDWaiYP9E4Kc6Q` |

### ChannelDataPoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Channel Data Point | POST | `/channels/data` | `conn_mod_def::GJ2X11BLCms::hC6k0StwQqqWvwNbMaKOgg` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File by ID | GET | `/files/{{fileId}}` | `conn_mod_def::GJ2X-2r2TzY::j5TStOTMSzG1VGyReZn44g` |

### TokenInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Token Info | GET | `/v1/token/info` | `conn_mod_def::GJ2X1gwwNGE::6vnQ-WpERXG4cZMA2621hQ` |

### ChannelTopics

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Channel Topic | PATCH | `/v1/channels/topic/{{topicId}}` | `conn_mod_def::GJ2X8DI7ZHY::z536AFXWTMu9rN_Eup8XLA` |

### Summarize

| Action | Method | Path | Action id |
|---|---|---|---|
| Magic Summarize | POST | `/summarize` | `conn_mod_def::GJ2YCewXgIU::WpC3N8nSRiyKMMY0VIQCJA` |

## When a call fails

The error comes from Dovetail, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/dovetail

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
