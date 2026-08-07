---
name: livesession
description: LiveSession is a product analytics and session replay platform that enables teams to track user behavior, visualize interactions through recordings and heatmaps, and analyze conversion funnels to optimize user experience, debug issues, and make data-driven product decisions. Read and write Livesession data through One: alerts, webhooks, websites, sessions and more, 11 actions with real parameter documentation. Use whenever the user asks to look something up in Livesession, create or update a record there, or build code against the Livesession API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: livesession
  generated-from: one-knowledge-base
---

# Livesession through One

LiveSession is a product analytics and session replay platform that enables teams to track user behavior, visualize interactions through recordings and heatmaps, and analyze conversion funnels to optimize user experience, debug issues, and make data-driven product decisions.

One exposes Livesession through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `livesession` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Livesession is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Livesession account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Alerts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Alerts | GET | `/alerts` | `conn_mod_def::GKbNZrXZbTg::OaSe2v12SMmeJP1pmRiPGQ` |
| Create Alert | POST | `/alerts` | `conn_mod_def::GKbNZq6UY3A::WL3EOtjOQTK08nalE4NYbg` |
| Delete an Alert by ID | DELETE | `/alerts/{{id}}` | `conn_mod_def::GKbNZrCOqOg::xK462m0RQL6UUZU2A-sWhA` |
| Update an Alert by ID | PUT | `/alerts/{{id}}` | `conn_mod_def::GKbNZrxT46A::fUQOjBzdRhuzW2MPm4xqeA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GKbNZ0d3s4A::c9wRooERTrujc1KDizBtag` |
| Create Webhook | POST | `/v1/webhooks` | `conn_mod_def::GKbNZ1R9D1g::crhngw-iTHSDHz66fauLhA` |
| Delete a Webhook | DELETE | `/webhooks/{{id}}` | `conn_mod_def::GKbNZ0vL3ug::f2QrbpgXQVqjq2uRlzxnwg` |
| Update a Webhook | PUT | `/webhooks/{{id}}` | `conn_mod_def::GKbNZ1joIgg::xa5C3bfUTVKaTXvYwTUZPg` |

### Websites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Websites | GET | `/v1/websites` | `conn_mod_def::GKbNZ-LX0wA::Hn-iSTzrQrKz3ynTZqZUnw` |
| Create Website | POST | `/v1/websites` | `conn_mod_def::GKbNZ0VJACg::39uBMst4QvC2N-TGDAgwjA` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sessions | GET | `/sessions` | `conn_mod_def::GKbNZsjKiFA::o-knFKP2SYWa9lPMY_hh_g` |

## When a call fails

The error comes from Livesession, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/livesession

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
