---
name: dropcontact
description: Dropcontact is a lead enrichment and contact data platform that provides email discovery, verification, and CRM data cleaning through APIs and integrations, allowing sales and marketing teams to maintain accurate prospect records and automate contact enrichment workflows. Read and write Dropcontact data through One: webhook, enrichmentresults, enrichmentwebhook, contacts and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in Dropcontact, create or update a record there, or build code against the Dropcontact API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: dropcontact
  generated-from: one-knowledge-base
---

# Dropcontact through One

Dropcontact is a lead enrichment and contact data platform that provides email discovery, verification, and CRM data cleaning through APIs and integrations, allowing sales and marketing teams to maintain accurate prospect records and automate contact enrichment workflows.

One exposes Dropcontact through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `dropcontact` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Dropcontact is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Dropcontact account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Default Webhook URL | GET | `/v1/enrich/webhook` | `conn_mod_def::GMcZJw_h0_c::6KgahI9OTPCvs6SCqrQnTg` |
| Delete the Default Webhook URL | DELETE | `/v1/enrich/webhook` | `conn_mod_def::GMcZJz80guA::Q-PHuqEaSJm6R4b9-9qlQg` |

### EnrichmentResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Enrichment Results by Request ID | GET | `/v1/enrich/all/{{id}}` | `conn_mod_def::GMcZJwxJIwM::Xzq24GTuRLmWr7rRnLPH8g` |

### EnrichmentWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Set the Default Webhook URL for Enrichment | PUT | `/v1/enrich/webhook` | `conn_mod_def::GMcZJxhVLTE::7WMeAjzWQwKHy7NcfYsikg` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Enrich All Contacts | POST | `/v1/enrich/all` | `conn_mod_def::GMcZJxrwRxA::gg2FTNwrTwa_flrzPn3cmQ` |

## When a call fails

The error comes from Dropcontact, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/dropcontact

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
