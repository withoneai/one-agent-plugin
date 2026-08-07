---
name: abstract-ip-intelligence
description: An API that provides IP address data including geolocation, ISP, proxy and VPN detection, and risk signals to help applications enhance security, prevent fraud, and deliver location-aware experiences. Read and write Abstract IP Intelligence data through One: ipintelligence and more, 1 actions with real parameter documentation. Use whenever the user asks to look something up in Abstract IP Intelligence, create or update a record there, or build code against the Abstract IP Intelligence API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: abstract-ip-intelligence
  generated-from: one-knowledge-base
---

# Abstract IP Intelligence through One

An API that provides IP address data including geolocation, ISP, proxy and VPN detection, and risk signals to help applications enhance security, prevent fraud, and deliver location-aware experiences.

One exposes Abstract IP Intelligence through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `abstract-ip-intelligence` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Abstract IP Intelligence is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Abstract IP Intelligence account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### IpIntelligence

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate (Lookup) an IP Address (IP Intelligence) | GET | `/v1/` | `conn_mod_def::GJwRAK0eh1I::gY4NqhM_RYO6N75j6UysxA` |

## When a call fails

The error comes from Abstract IP Intelligence, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/abstract-ip-intelligence

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
