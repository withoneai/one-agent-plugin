---
name: sensibo
description: Sensibo is a smart climate control platform that connects air conditioners and heat pumps through mobile apps, cloud services, and APIs, allowing users and developers to monitor, automate, and optimize indoor temperature, air quality, and energy usage. Read and write Sensibo data through One: pods, podschedules, smartmode, schedules, podtimer, historicalmeasurements and more, 17 actions with real parameter documentation. Use whenever the user asks to look something up in Sensibo, create or update a record there, or build code against the Sensibo API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sensibo
  generated-from: one-knowledge-base
---

# Sensibo through One

Sensibo is a smart climate control platform that connects air conditioners and heat pumps through mobile apps, cloud services, and APIs, allowing users and developers to monitor, automate, and optimize indoor temperature, air quality, and energy usage.

One exposes Sensibo through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `sensibo` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Sensibo is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Sensibo account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Pods

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Specific Device Info for a Pod | GET | `/pods/{{deviceId}}` | `conn_mod_def::GLXOIvy7rLg::uSlDA9mWTt6JIsyQARmnqg` |
| Get Timer for a Pod | GET | `/pods/{{deviceId}}/timer/` | `conn_mod_def::GLXOI6qGzzA::XXYYxUiPQmi3kpoO6bsD2g` |
| List a User's Pods | GET | `/users/me/pods` | `conn_mod_def::GLXOI8WtfjA::G19Lsq7nRSSe-csXASnoGw` |
| Change an AC State Property for a Pod | PATCH | `/pods/{{deviceId}}/acStates/{{property}}` | `conn_mod_def::GLXOJFUJfWg::1HKVtjy7RdaemFXN6FN8fA` |
| Enable or Disable Smartmode for a Pod | PUT | `/pods/{{deviceId}}/smartmode` | `conn_mod_def::GLXOJOl8taA::Zklc4s2eRJy6fpxT860F2A` |
| Set a Timer for a Pod | PUT | `/pods/{{deviceId}}/timer/` | `conn_mod_def::GLXOJO9H2Tg::68hhGdGVT963eKJ2tIdD3A` |
| Set AC State for a Pod | POST | `/pods/{{deviceId}}/acStates` | `conn_mod_def::GLXOJE9fZsA::oPKf8XiiRu6A-D2sGCzYLg` |

### PodSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pod Schedule | GET | `/pods/{{deviceId}}/schedules/{{scheduleId}}/` | `conn_mod_def::GLXOI6-5IbA::PnvwWlm7TAau3UmUrL6m0w` |
| Delete a Pod Schedule | DELETE | `/pods/{{deviceId}}/schedules/{{scheduleId}}/` | `conn_mod_def::GLXOIuSNt9A::qiel_R9kR4afrou3jmPvTw` |
| Update a Pod Schedule | PUT | `/pods/{{deviceId}}/schedules/{{scheduleId}}/` | `conn_mod_def::GLXOJFzo0zA::Dk26w8LcRcaXKA5z_N6DGg` |

### Smartmode

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Smartmode Using Pods Smartmode | GET | `/pods/{{deviceId}}/smartmode` | `conn_mod_def::GLXOI7AHInA::OSaDsx07SAKTGFK_s0x6Yg` |
| Set Smartmode for a Pod | POST | `/pods/{{deviceId}}/smartmode` | `conn_mod_def::GLXOJFBV7CA::WZ4hBZOoTcWYM0H_cYsDTQ` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Schedule for a Pod | POST | `/pods/{{deviceId}}/schedules/` | `conn_mod_def::GLXOJFL0FqA::CpxhYpoZSQmIYRQXpSGkaw` |

### PodTimer

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Pod Timer | DELETE | `/pods/{{deviceId}}/timer/` | `conn_mod_def::GLXOIvyN7cg::UuJ0T0q8SEiO4_jwEvDQmw` |

### HistoricalMeasurements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Measurements for a Pod | GET | `/pods/{{deviceId}}/historicalMeasurements` | `conn_mod_def::GLXOIwwP5kg::LmF0RO7USqWhhibOhxDtlw` |

### AcStates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AC States for a Pod | GET | `/pods/{{deviceId}}/acStates` | `conn_mod_def::GLXOIxFugLg::kOMDCUNKToisbtL8gFPUuw` |

### ScheduledItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Scheduled Items for a Pod | GET | `/pods/{{deviceId}}/schedules/` | `conn_mod_def::GLXOI6qA19g::zimIMJg6TCKZ1BW1g-VX0g` |

## When a call fails

The error comes from Sensibo, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sensibo

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
