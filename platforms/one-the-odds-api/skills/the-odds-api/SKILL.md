---
name: the-odds-api
description: The Odds API is a sports data API that provides real-time and historical odds, scores, and bookmaker market data across multiple sports, allowing developers, analysts, and betting applications to integrate structured sports wagering information into products and workflows. Read and write The Odds API data through One: events, eventmarketkeys, eventodds, scores, odds, participants and more, 10 actions with real parameter documentation. Use whenever the user asks to look something up in The Odds API, create or update a record there, or build code against the The Odds API API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: the-odds-api
  generated-from: one-knowledge-base
---

# The Odds API through One

The Odds API is a sports data API that provides real-time and historical odds, scores, and bookmaker market data across multiple sports, allowing developers, analysts, and betting applications to integrate structured sports wagering information into products and workflows.

One exposes The Odds API through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `the-odds-api` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm The Odds API is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real The Odds API account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| List Events for a Sport | GET | `/v4/sports/{{sport}}/events` | `conn_mod_def::GLmLBo82h5A::EodhgfELQKml2CG9Wb_tiA` |

### EventMarketKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List Event Market Keys for a Sport | GET | `/v4/sports/{{sport}}/events/{{eventId}}/markets` | `conn_mod_def::GLmLBp-3H6g::hbOSZbACTH-i8hNJ7QLLZQ` |

### EventOdds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Event Odds for a Sport | GET | `/v4/sports/{{sport}}/events/{{eventId}}/odds` | `conn_mod_def::GLmLBrZUUtA::zsY-HFpiTQWXLioykPxbYA` |

### Scores

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Scores for a Sport | GET | `/v4/sports/{{sport}}/scores` | `conn_mod_def::GLmLBrrJWGA::Rv7fnLAcSy-U6I7Ew5mfPA` |

### Odds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Odds for a Sport | GET | `/v4/sports/{{sport}}/odds` | `conn_mod_def::GLmLBv8EpUg::HOUH9EP-TEWlJ_Ghm2t8QQ` |

### Participants

| Action | Method | Path | Action id |
|---|---|---|---|
| List Participants for a Sport | GET | `/v4/sports/{{sport}}/participants` | `conn_mod_def::GLmLB2jDVvA::j-ouaCJJTxWgo34s0UCzOg` |

### HistoricalSportsOdds

| Action | Method | Path | Action id |
|---|---|---|---|
| Odds Using v4 Historical Sports | GET | `/v4/historical/sports/{{sport}}/odds` | `conn_mod_def::GLmLB5dL4FA::mbikvTG6QYiZC68w14kWOg` |

### HistoricalEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Historical Events for a Sport | GET | `/v4/historical/sports/{{sport}}/events` | `conn_mod_def::GLmLB5rBY7g::hGxgMPhZSgKQP1A3pMwDaQ` |

### HistoricalEventOdds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Event Odds | GET | `/v4/historical/sports/{{sport}}/events/{{eventId}}/odds` | `conn_mod_def::GLmLB5ycOlA::1lWL0GISRnektMZdZoN2nw` |

### Sports

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sports | GET | `/v4/sports` | `conn_mod_def::GLmLB2khNjA::XKAQeds3Ryygi_THHDe5SQ` |

## When a call fails

The error comes from The Odds API, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/the-odds-api

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
