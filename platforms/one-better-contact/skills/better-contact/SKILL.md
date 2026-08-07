---
name: better-contact
description: BetterContact is an AI-powered contact data enrichment platform that aggregates 20+ data providers to find and verify B2B email addresses and phone numbers, enabling sales teams to improve lead quality, automate enrichment workflows, and increase outreach effectiveness with accurate, real-time contact data. Read and write Better Contact data through One: enrichmentrequests, leadfinderrequests, account, asyncrequests, leadfinderrequestresults and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in Better Contact, create or update a record there, or build code against the Better Contact API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: better-contact
  generated-from: one-knowledge-base
---

# Better Contact through One

BetterContact is an AI-powered contact data enrichment platform that aggregates 20+ data providers to find and verify B2B email addresses and phone numbers, enabling sales teams to improve lead quality, automate enrichment workflows, and increase outreach effectiveness with accurate, real-time contact data.

One exposes Better Contact through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `better-contact` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Better Contact is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Better Contact account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### EnrichmentRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a New Enrichment Request | POST | `/api/v2/async` | `conn_mod_def::GKiXKOfG64A::9JYwy9dbToKDyTOH_YCwYw` |

### LeadFinderRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Async Lead Finder Request | POST | `/api/v2/lead_finder/async` | `conn_mod_def::GKiXKOfQXXg::qhMqM3HaSqyCZmX_6SK1bQ` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Credits Balance | GET | `/api/v2/account` | `conn_mod_def::GKiXKOsFbOA::Mqd9hCP-Re-ChuRfm4RWng` |

### AsyncRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Request Results | GET | `/async/{{requestId}}` | `conn_mod_def::GKiXKP95oaA::3cUs8bjVRsCbSAmxV-XMyA` |

### LeadFinderRequestResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Lead Finder Request Results | GET | `/lead_finder/async/{{requestId}}` | `conn_mod_def::GKiXKRE12oA::ei9OwJ3gTv-_8JAC5zrwug` |

## When a call fails

The error comes from Better Contact, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/better-contact

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
