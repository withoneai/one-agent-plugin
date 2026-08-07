---
name: alchemy-gas-manager
description: Alchemy is a blockchain developer platform, and its Gas Manager provides APIs and controls for sponsoring, tracking, and managing transaction gas fees, allowing teams to build user-friendly web3 applications with flexible fee payment and account abstraction workflows. Read and write Alchemy Gas Manager data through One: policies, policy, policystats, sponsorships and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Alchemy Gas Manager, create or update a record there, or build code against the Alchemy Gas Manager API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: alchemy-gas-manager
  generated-from: one-knowledge-base
---

# Alchemy Gas Manager through One

Alchemy is a blockchain developer platform, and its Gas Manager provides APIs and controls for sponsoring, tracking, and managing transaction gas fees, allowing teams to build user-friendly web3 applications with flexible fee payment and account abstraction workflows.

One exposes Alchemy Gas Manager through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `alchemy-gas-manager` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Alchemy Gas Manager is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Alchemy Gas Manager account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Policies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Policies | GET | `/api/gasManager/policies` | `conn_mod_def::GLGPxOEafBs::4oTiP5_1RcSbKrPof6FAgQ` |
| Delete Policy | DELETE | `/api/gasManager/policy/{{id}}` | `conn_mod_def::GLGPxQg7HeY::iUYlI6gIQvyuMa7FAiej0A` |
| Update Policy Status | PUT | `/api/gasManager/policy/{{id}}/status` | `conn_mod_def::GLGPxYWraM8::pfnf8L65QZWUVqfN7UAh3Q` |

### Policy

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Policy | GET | `/api/gasManager/policy/{{id}}` | `conn_mod_def::GLGPxNyUcU0::H90hXTMPR7mb1gVVq3KAqA` |
| Create Policy | POST | `/api/gasManager/policy` | `conn_mod_def::GLGPxNlSck8::l_bYRlXSRRCzYoABbspPaQ` |
| Replace Policy | PUT | `/api/gasManager/policy/{{id}}` | `conn_mod_def::GLGPxYtsCsA::AEJbJWmwSkqtKyxImiBG9Q` |

### PolicyStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Policy Stats | GET | `/api/gasManager/policy/{{id}}/stats/details` | `conn_mod_def::GLGPxNDQXnY::zkAUw0tdQGu_mBiqfXLe7w` |

### Sponsorships

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sponsorships | GET | `/api/gasManager/policy/{{id}}/sponsorships` | `conn_mod_def::GLGPxZDJJzk::kqLLWSmWTcWvwgObaFYopA` |

## When a call fails

The error comes from Alchemy Gas Manager, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/alchemy-gas-manager

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
