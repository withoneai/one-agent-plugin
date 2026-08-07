---
name: beeminder
description: Beeminder is a goal-tracking and commitment platform that combines progress monitoring with financial incentives, enabling users to connect apps and data sources, track measurable goals automatically, and use its API to integrate goal data into personal productivity and accountability workflows. Read and write Beeminder data through One: goals, datapoints, goaldatapoints, charges, users and more, 17 actions with real parameter documentation. Use whenever the user asks to look something up in Beeminder, create or update a record there, or build code against the Beeminder API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: beeminder
  generated-from: one-knowledge-base
---

# Beeminder through One

Beeminder is a goal-tracking and commitment platform that combines progress monitoring with financial incentives, enabling users to connect apps and data sources, track measurable goals automatically, and use its API to integrate goal data into personal productivity and accountability workflows.

One exposes Beeminder through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `beeminder` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Beeminder is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Beeminder account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Goals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Goal | GET | `/users/{{userId}}/goals/{{goalSlug}}.json` | `conn_mod_def::GKzsJMpAMrA::vHZzAmFTRSmZ20TigCZ-Eg` |
| List a User's Archived Goals | GET | `/users/{{userId}}/goals/archived.json` | `conn_mod_def::GKzsJMziYIg::fV8NX8idTXKxRF9kZidZZw` |
| List a User's Goals | GET | `/users/{{userId}}/goals.json` | `conn_mod_def::GKzsJCj1ZWA::jiYltDi9Q3-6dOd_i6yazQ` |
| Refresh a User's Goal Graph | GET | `/users/{{userId}}/goals/{{goalSlug}}/refresh_graph.json` | `conn_mod_def::GKzsI4xBBGg::fUjKRbrWTIWxZ7aHYYgNZw` |
| Test Connection | GET | `/users/{{userId}}/goals/archived.json` | `conn_mod_def::GKzscrJmZGg::ncsZZOX7Q_KfJbWyYrid0A` |
| Cancel Stepdown for a User's Goal | POST | `/users/{{userId}}/goals/{{goalSlug}}/cancel_stepdown.json` | `conn_mod_def::GKzsI4xFWcg::JzQErI9-Rtee07FWf-8NDQ` |
| Create a User Goal | POST | `/users/{{userId}}/goals.json` | `conn_mod_def::GKzsJDOI7kg::vGsTypVNSAKOgicvGDoeJw` |
| Short Circuit a User's Goal | POST | `/users/{{userId}}/goals/{{goalSlug}}/shortcircuit.json` | `conn_mod_def::GKzsJM-O7qA::9wpy_gxdQIK8Da4eRei0TA` |
| Step Down a User's Goal | POST | `/users/{{userId}}/goals/{{goalSlug}}/stepdown.json` | `conn_mod_def::GKzsJCqRoKA::a-205euxT6yLhcFVmgelGg` |
| Update a User's Goal | PUT | `/users/{{userId}}/goals/{{goalSlug}}.json` | `conn_mod_def::GKzsJPGP7xg::nKQ44esFQ_6cywLEN9GGrA` |

### Datapoints

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Goal Datapoints | GET | `/users/{{userId}}/goals/{{goalSlug}}/datapoints.json` | `conn_mod_def::GKzsJEEb79g::vgIZ3JuwRzS5b72BT14LNw` |
| Add All New Datapoints to a User's Goal | POST | `/users/{{userId}}/goals/{{goalSlug}}/datapoints/create_all.json` | `conn_mod_def::GKzsI5hfbyg::FxK6SAkkQbqyMQx8xfbEng` |
| Create a Datapoint for a User's Goal | POST | `/users/{{userId}}/goals/{{goalSlug}}/datapoints.json` | `conn_mod_def::GKzsI6iYOHA::3QK6-ixVRYKvG4BMhTQq7Q` |

### GoalDatapoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Goal Datapoint for a User | DELETE | `/users/{{userId}}/goals/{{goalSlug}}/datapoints/{{datapointId}}.json` | `conn_mod_def::GKzsJDxZBOA::KN39KDY2RtGWD33IvaP85w` |
| Update a Goal Datapoint for a User | PUT | `/users/{{userId}}/goals/{{goalSlug}}/datapoints/{{datapointId}}.json` | `conn_mod_def::GKzsJX5qtfg::Hizia1pUTKSHCD9IK1BrJg` |

### Charges

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Charge for a User | POST | `/charges.json` | `conn_mod_def::GKzsI5Y7WpA::CjcQ-6DuSjqpJtMNsPQp0g` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/users/{{userId}}.json` | `conn_mod_def::GKzsJN7ATlA::p34yfD-cQEuOSzbDbXrvdA` |

## When a call fails

The error comes from Beeminder, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/beeminder

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
