---
name: globalping
description: Globalping is a network testing platform that provides distributed probes and APIs for running ping, traceroute, DNS, and HTTP checks from locations worldwide, allowing developers and operators to measure latency, routing, and availability from diverse geographic and network perspectives. Read and write Globalping data through One: measurements, ratelimits, probes and more, 4 actions with real parameter documentation. Use whenever the user asks to look something up in Globalping, create or update a record there, or build code against the Globalping API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: globalping
  generated-from: one-knowledge-base
---

# Globalping through One

Globalping is a network testing platform that provides distributed probes and APIs for running ping, traceroute, DNS, and HTTP checks from locations worldwide, allowing developers and operators to measure latency, routing, and availability from diverse geographic and network perspectives.

One exposes Globalping through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "globalping", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Globalping is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Globalping account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Measurements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Measurement by ID | GET | `/v1/measurements/{{id}}` | `conn_mod_def::GMLBMv2pMLg::ah9JwJiXQXC8WLicWFuLdQ` |
| Create a Measurement | POST | `/v1/measurements` | `conn_mod_def::GMLBMwA2klg::qjC-HkI6RMO1-Jv-pcW-Og` |

### RateLimits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Rate Limits | GET | `/v1/limits` | `conn_mod_def::GMLBMv1rAsA::N47_6mjsR2u2_d_hbJnG1A` |

### Probes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Online Probes | GET | `/v1/probes` | `conn_mod_def::GMLBMvnHxFA::hb0e9t2oSruLvnPR9JMZYg` |

## When a call fails

The error comes from Globalping, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/globalping

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
