---
name: fluxguard
description: A monitoring platform that tracks website and web app availability, performance, and user journeys while detecting bot traffic and fraudulent behavior, enabling teams to maintain uptime, ensure functional reliability, and protect digital experiences. Read and write Fluxguard data through One: accountwebhook, accountcategory, account, accountcategories, sitesessionpages, sites and more, 12 actions with real parameter documentation. Use whenever the user asks to look something up in Fluxguard, create or update a record there, or build code against the Fluxguard API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: fluxguard
  generated-from: one-knowledge-base
---

# Fluxguard through One

A monitoring platform that tracks website and web app availability, performance, and user journeys while detecting bot traffic and fraudulent behavior, enabling teams to maintain uptime, ensure functional reliability, and protect digital experiences.

One exposes Fluxguard through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `fluxguard` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Fluxguard is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Fluxguard account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### AccountWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Account Webhook | DELETE | `/account/webhook` | `conn_mod_def::GKQN0NuPFOA::p7EhSJvqR16ErKJW1BrDdQ` |
| Update Account Webhook | PUT | `/account/webhook` | `conn_mod_def::GKQN0OrsN7A::moclKVGoRbGBHkyiehPUlQ` |

### AccountCategory

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Account Category | POST | `/account/category` | `conn_mod_def::GKQN0D0Srbg::rGwNuqqwQWq_Ief1dbjOPg` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account | GET | `/account` | `conn_mod_def::GKQN0Du9KAg::IYzx653uT6uySUYGopdl8g` |

### AccountCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Categories | GET | `/account/category` | `conn_mod_def::GKQN0Esc4ug::Lh4VhXzDRKGYfFjafUW9aQ` |

### SiteSessionPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Site Session Page | DELETE | `/site/{{siteId}}/session/{{sessionId}}/page/{{pageId}}` | `conn_mod_def::GKQN0FK4Rig::uflYjsz-TCeMYNhopVqq8w` |

### Sites

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Site | DELETE | `/site/{{siteId}}` | `conn_mod_def::GKQN0FrOFUA::lMcr6hfJQ42w7RwFeahFAg` |

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Page for Monitoring | POST | `/add-page` | `conn_mod_def::GKQN0MsbLsg::Mjl-qARwSOiya-f3sqeLYg` |

### SiteSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Initiate a Crawl for a Site Session | POST | `/site/{{siteId}}/session/{{sessionId}}/crawl` | `conn_mod_def::GKQN0OedFIA::fEtXcoCDTQauTUt5F1kXpQ` |

### MonitoredPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Monitored Page for a Site Session | GET | `/site/{{siteId}}/session/{{sessionId}}/page/{{pageId}}` | `conn_mod_def::GKQN0RTy7ig::N1GF3V4ETAyGdGqORSJkpA` |

### AccountWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Webhooks | GET | `/account/webhook` | `conn_mod_def::GKQN0bJhGaA::7oajc9TzSLKQo7jBXtvjOw` |

### AccountWebhookSample

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Webhook Sample | GET | `/account/webhook/sample` | `conn_mod_def::GKQN0gOW2Wg::66_ibVo8RnCmz6aBRS-Xgg` |

## When a call fails

The error comes from Fluxguard, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/fluxguard

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
