---
name: notion
description: Notion is an all-in-one workspace for note-taking, project management, wikis, and collaboration. It helps individuals and teams organize ideas, workflows, and content in a flexible interface. Read and write Notion data through One: pages, fileuploads, blocks, datasources, users, comments and more, 35 actions with real parameter documentation. Use whenever the user asks to look something up in Notion, create or update a record there, or build code against the Notion API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: notion
  generated-from: one-knowledge-base
---

# Notion through One

Notion is an all-in-one workspace for note-taking, project management, wikis, and collaboration. It helps individuals and teams organize ideas, workflows, and content in a flexible interface.

One exposes Notion through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `notion` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Notion is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Notion account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Page | GET | `/pages/{{pageId}}` | `conn_mod_def::GJ5EnwZA3JE::sIXduRG5Qc-J8995P9OwGQ` |
| Retrieve a Page as Markdown | GET | `/pages/{{pageId}}/markdown` | `conn_mod_def::GJ5EntqNvy0::-VzfhSExTEGGnlXLUMqFcA` |
| Create a Page | POST | `/pages` | `conn_mod_def::GJ5EnlW1AEk::mEAQjNttT1GjVqNeMTvDiw` |
| Move a Page | POST | `/pages/{{pageId}}/move` | `conn_mod_def::GJ5EntUR1NM::0CtCVtZ8RIi-l6NROlnlGg` |
| Update a Page | PATCH | `/pages/{{pageId}}` | `conn_mod_def::GJ5En6Rb6Bg::HBiyT8YHSkWyd8Wg5qHFCg` |
| Update a Page’s Markdown Content | PATCH | `/pages/{{pageId}}/markdown` | `conn_mod_def::GJ5EnyDM2AM::cL9O2-s6RdqatjFJf_Wwcw` |

### FileUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| List File Uploads | GET | `/file_uploads` | `conn_mod_def::GJ5EnZaCXKc::ZBS1NbwOSuKs667vbTm-6A` |
| Retrieve a File Upload | GET | `/file_uploads/{{fileUploadId}}` | `conn_mod_def::GJ5EnYv-JOI::3OO49YDBSvuguIPd1sEB2Q` |
| Complete a File Upload (Multi-part) | POST | `/file_uploads/{{fileUploadId}}/complete` | `conn_mod_def::GJ5EnY0nPjY::cswz8LGCSL-shqqXm8IP_g` |
| Create a File Upload | POST | `/file_uploads` | `conn_mod_def::GJ5EnYfr70E::3oXOqt0LRV6BRNpVAEZV8g` |
| Upload a File to a File Upload (Send) | POST | `/file_uploads/{{fileUploadId}}/send` | `conn_mod_def::GJ5EniTgYAs::BxOVTU7LTUGY3vL8EOzJyw` |

### Blocks

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Block | GET | `/blocks/{{blockId}}` | `conn_mod_def::GJ5EmvSQ2B0::IaH8E1BaTdygXY8EaTmcOQ` |
| Retrieve a Block's Children | GET | `/blocks/{{blockId}}/children` | `conn_mod_def::GJ5Emwl98w0::aNRlxEQlS3yp9jUDqcM4XA` |
| Append Block Children (to a Block) | PATCH | `/blocks/{{blockId}}/children` | `conn_mod_def::GJ5Em2aq5jQ::sbJEGMvZT9W8lVCdbtrZZg` |
| Delete a Block | DELETE | `/blocks/{{blockId}}` | `conn_mod_def::GJ5EmukZQRs::9n52gAOBTWqqFBBzXTQe-Q` |
| Update a Block | PATCH | `/blocks/{{blockId}}` | `conn_mod_def::GJ5EmvcnkcA::xn1Y-4ceTf2zD2MLzXATIg` |

### DataSources

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Data Source | GET | `/data_sources/{{dataSourceId}}` | `conn_mod_def::GJ5EnLJm9Rs::VnsFKIkySlejecbCNW8OSQ` |
| Create a Data Source (Database) | POST | `/data_sources` | `conn_mod_def::GJ5EnDp5kV4::cw2PLhA-Rq28g6SBDB1DSw` |
| Query a Data Source’s Pages | POST | `/data_sources/{{dataSourceId}}/query` | `conn_mod_def::GJ5EnL2xERY::ib0N5v41TveieFZQUV-vuQ` |
| Update a Data Source | PATCH | `/data_sources/{{dataSourceId}}` | `conn_mod_def::GJ5EnQXxvXk::cZnYjVIiQ86OED40_agalA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Users | GET | `/users` | `conn_mod_def::GJ5En6XTisE::oVo2r95MStucaDSDfPldWg` |
| Retrieve a User | GET | `/users/{{userId}}` | `conn_mod_def::GJ5En51U-AM::ng0tWFVcT7Wca4GDi6j-VA` |
| Retrieve Your Token’s Bot User (Me) | GET | `/users/me` | `conn_mod_def::GJ5En-L57E4::ch-B9doqTkC84chVAIz_fQ` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments for a Block | GET | `/comments` | `conn_mod_def::GJ5Em_f5GzQ::HIYZgcN1RweyF4AM3CS7HA` |
| Retrieve a Comment | GET | `/comments/{{commentId}}` | `conn_mod_def::GJ5EnDOjeBM::HuzPPxNiTveR0fvD6CjOLA` |
| Create a Comment | POST | `/comments` | `conn_mod_def::GJ5Em-aukAw::Bp-ioVVBRw6_2tgrs0qbTg` |

### Databases

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Database | GET | `/databases/{{databaseId}}` | `conn_mod_def::GJ5EnLuVBBM::-wFRC3UCRkyw2E_cRyK8Ig` |
| Create a Database | POST | `/databases` | `conn_mod_def::GJ5EnO-sIGI::OyHdDjgwSDWBOWIQDG3s5w` |
| Update a Database | PATCH | `/databases/{{databaseId}}` | `conn_mod_def::GJ5EnYZZxd0::ltr2GVaESIyOntrHZbcOXw` |

### OauthTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Exchange OAuth Authorization Code or Refresh Token for an Access Token (Create a Token) | POST | `/oauth/token` | `conn_mod_def::GJ5EniMEqP4::i83ybb2OQGKh8S5G_yBYhQ` |
| Introspect a Token | POST | `/oauth/introspect` | `conn_mod_def::GJ5EniEm9k0::KY1opHdPRFmD0XPnOeNDeg` |
| Revoke an OAuth Token | POST | `/oauth/revoke` | `conn_mod_def::GJ5Enhh_z9g::XYRhGHGTRJWsz3-DI-afpQ` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search by Title (Search Pages and Data Sources) | POST | `/search` | `conn_mod_def::GJ5En67fz04::-CJAS419SVWm7L2l6brp6A` |

### DataSourceTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Data Source’s Templates | GET | `/data_sources/{{dataSourceId}}/templates` | `conn_mod_def::GJ5Em_jsBkQ::1-MIrP9fTnG2NeUdFPRYNA` |

### PagePropertyItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Page Property Item | GET | `/pages/{{pageId}}/properties/{{propertyId}}` | `conn_mod_def::GJ5EnuLLMqA::cn-tBE4xRuSjdpm1eyXaTw` |

## When a call fails

The error comes from Notion, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/notion

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
