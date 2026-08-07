---
name: hotspot-system
description: HotspotSystem is a cloud-based Wi‑Fi hotspot management and billing platform that runs on compatible routers, enabling businesses and resellers to create free or paid public internet access, manage multiple locations centrally, and offer white-label hotspot services. Read and write Hotspot System data through One: subscribers, locations, customers, vouchers and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Hotspot System, create or update a record there, or build code against the Hotspot System API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: hotspot-system
  generated-from: one-knowledge-base
---

# Hotspot System through One

HotspotSystem is a cloud-based Wi‑Fi hotspot management and billing platform that runs on compatible routers, enabling businesses and resellers to create free or paid public internet access, manage multiple locations centrally, and offer white-label hotspot services.

One exposes Hotspot System through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `hotspot-system` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Hotspot System is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Hotspot System account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Subscribers | GET | `/v1.0/subscribers.json` | `conn_mod_def::GMZlI1lZhMA::Yk4hTI50Sfatl29KwS7X0w` |
| List Subscribers for a Location | GET | `/v1.0/locations/{{id}}/subscribers.json` | `conn_mod_def::GMZlIqgKa6g::E2t3YU_sQxGAA9ikswW0Rg` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Voucher for a Location | GET | `/v1.0/locations/{{id}}/generate/voucher.json` | `conn_mod_def::GMZlIsLSpvg::u1DnE15uS7GhFR-HxYFOSQ` |
| List Locations | GET | `/v1.0/locations.json` | `conn_mod_def::GMZlIrmgllg::vSmFcbL3SW69ReZ_XZklZg` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customers | GET | `/v1.0/customers.json` | `conn_mod_def::GMZlIsAe6Qg::GV8BwLBASl6u5fzOjK_dOg` |
| List Customers for a Location | GET | `/v1.0/locations/{{id}}/customers.json` | `conn_mod_def::GMZlIt9lysA::8SEOBLWxQsu8FHpuCU58Wg` |

### Vouchers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Location's Vouchers | GET | `/v1.0/locations/{{id}}/vouchers.json` | `conn_mod_def::GMZlI1snsSg::MOxYaqFWTpGPI0aZqIAnSA` |
| List Vouchers | GET | `/v1.0/vouchers.json` | `conn_mod_def::GMZlI2Fpzcg::Ie_xpKenQTWHBb0oOHd77A` |

## When a call fails

The error comes from Hotspot System, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/hotspot-system

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
