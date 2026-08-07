---
name: humanitix
description: Humanitix is an event ticketing and registration platform that provides tools and APIs for managing ticket sales, attendee data, check-in, and event operations, allowing organizers to run in-person or online events while integrating ticketing workflows into their systems. Read and write Humanitix data through One: events, tickets, tags, eventtickets, eventorders, orders and more, 16 actions with real parameter documentation. Use whenever the user asks to look something up in Humanitix, create or update a record there, or build code against the Humanitix API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: humanitix
  generated-from: one-knowledge-base
---

# Humanitix through One

Humanitix is an event ticketing and registration platform that provides tools and APIs for managing ticket sales, attendee data, check-in, and event operations, allowing organizers to run in-person or online events while integrating ticketing workflows into their systems.

One exposes Humanitix through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `humanitix` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Humanitix is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Humanitix account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event's Check In Count | GET | `/v1/events/{{eventId}}/check-in-count` | `conn_mod_def::GLCVwcgLyCA::f33pwMdJSke5wYTwFjQWNg` |
| Get Event by ID | GET | `/v1/events/{{eventId}}` | `conn_mod_def::GLCVwdl81tA::GOcgRjXNRBGy_xf_aANuUA` |
| List Events | GET | `/v1/events` | `conn_mod_def::GLCVwdyCtDA::_6EDpQrdRJWIP1EJ7bO78w` |
| test connection | GET | `/v1/events?page=1` | `conn_mod_def::GLCWvmBduVQ::kyrj8fHoQZyw1SlJZlUKQw` |
| Create Event | POST | `/events` | `conn_mod_def::GLCVwcwH-Bg::ut0e6Q8jTvyUDlbJDteFvQ` |
| Update an Event | PATCH | `/v1/events/{{eventId}}` | `conn_mod_def::GLCVwdxvhgg::IT8rkzFhRf6syD7pxG62lw` |

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Ticket for an Event | GET | `/v1/events/{{eventId}}/tickets/{{ticketId}}` | `conn_mod_def::GLCVw4ymvYg::YubtVmo3QRSGKHmGT7ESfw` |
| Get an Event's Tickets | GET | `/v1/events/{{eventId}}/tickets` | `conn_mod_def::GLCVw4PUsvA::u7aLe5w1QayGoLcIgJtO3Q` |
| Check In a Ticket for an Event | POST | `/v1/events/{{eventId}}/tickets/{{ticketId}}/check-in` | `conn_mod_def::GLCVw3OygtA::VVAvkQ-ZQRKSbwHG8JKlhw` |
| Transfer a Ticket for an Event | POST | `/v1/events/{{eventId}}/tickets/{{ticketId}}/transfer` | `conn_mod_def::GLCVw7BlY_A::29gXDkLlShWkh-mp2a5iMQ` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tag by ID | GET | `/v1/tags/{{tagId}}` | `conn_mod_def::GLCVwpmoeNg::IHQZ9K7yQzWJ8rWatYKCBg` |
| Get Tags | GET | `/v1/tags` | `conn_mod_def::GLCVwoDq3oA::MKZbj762TYO0oGckycPsPQ` |

### EventTickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Out an Event Ticket | POST | `/v1/events/{{eventId}}/tickets/{{ticketId}}/check-out` | `conn_mod_def::GLCVw3rX-pA::FrlxbIAAQEqOz8WylqRJNQ` |

### EventOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event Order | GET | `/v1/events/{{eventId}}/orders/{{orderId}}` | `conn_mod_def::GLCVwpFW8LA::MDOJx6ezTjaKH4W3QytsQQ` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Event's Orders | GET | `/v1/events/{{eventId}}/orders` | `conn_mod_def::GLCVwsFPlHA::j51GNx_HRs29fFMQ2Bmuww` |

### GlobalEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Global Events | GET | `/global/events` | `conn_mod_def::GLCVwpAV-Lg::aeUT82SdSSiHEbZvXViF_Q` |

## When a call fails

The error comes from Humanitix, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/humanitix

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
