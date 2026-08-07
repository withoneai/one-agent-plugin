---
name: agility
description: Agility CMS is a headless, API-first content management platform that enables teams to create, manage, and deliver structured content across websites, apps, and digital channels, combining developer flexibility with visual editing tools for marketers to streamline omnichannel content operations. Read and write Agility data through One: contentitems, localepages, channelpages, contentmodels, urlredirections, gallery and more, 11 actions with real parameter documentation. Use whenever the user asks to look something up in Agility, create or update a record there, or build code against the Agility API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: agility
  generated-from: one-knowledge-base
---

# Agility through One

Agility CMS is a headless, API-first content management platform that enables teams to create, manage, and deliver structured content across websites, apps, and digital channels, combining developer flexibility with visual editing tools for marketers to streamline omnichannel content operations.

One exposes Agility through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `agility` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Agility is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Agility account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ContentItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Content Item by Locale and Content ID | GET | `/{{locale}}/item/{{id}}` | `conn_mod_def::GKzsIDuKqXg::2kWzFzMESQCc2Ejt_iRe_g` |
| List Content Items by Reference Name for a Locale | GET | `/{{locale}}/list/{{referenceName}}` | `conn_mod_def::GKzsIHj6aig::Xb2VTo1ATqaruke0T_U__w` |

### LocalePages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Locale Page by Page ID | GET | `/{{locale}}/page/{{id}}` | `conn_mod_def::GKzsIDK8yUg::YUYZhopTRmi7HJc6OX6CoQ` |

### ChannelPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel Page by Path | GET | `{{locale}}/page/{{channel}}` | `conn_mod_def::GKzsIRIqyMg::LD03rp1nSXegVmdvXD8cBg` |

### ContentModels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Content Models | GET | `/contentmodels` | `conn_mod_def::GKzsICFl3gA::GEyiUfkSTqiqgAP60lHUvg` |

### UrlRedirections

| Action | Method | Path | Action id |
|---|---|---|---|
| List URL Redirections | GET | `/urlredirection` | `conn_mod_def::GKzsIcG_zgA::exi6rR7cQW-woiTadqwczg` |

### Gallery

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Gallery by ID | GET | `/gallery/{{id}}` | `conn_mod_def::GKzsIDLRyEg::Cx70SB8pQtKdKux65zaqog` |

### LocaleChannelsFlatSitemap

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Locale Channel's Flat Sitemap | GET | `/{{locale}}/sitemap/flat/{{channelName}}` | `conn_mod_def::GKzsIQ3RjIA::4I6AxJylRVur5cSaR6slfQ` |

### NestedSitemap

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Locale's Nested Sitemap for a Channel | GET | `/{{locale}}/sitemap/nested/{{channelName}}` | `conn_mod_def::GKzsIRIAZTg::-Tpm5hHXTb2-_NIrFx5Amw` |

### SyncedContentItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Synced Content Items for a Locale | GET | `/{{locale}}/sync/items` | `conn_mod_def::GKzsIRRJwMg::KPHa6ayzRSSCKf8UtQ2M2g` |

### SyncedPageItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Synced Page Items for a Locale | GET | `/{{locale}}/sync/pages` | `conn_mod_def::GKzsITGC8GA::FDv80fbiQRyXK6kaJIgCHg` |

## When a call fails

The error comes from Agility, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/agility

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
