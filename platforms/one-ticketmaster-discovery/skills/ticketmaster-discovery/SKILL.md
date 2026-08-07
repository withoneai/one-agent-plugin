---
name: ticketmaster-discovery
description: Ticketmaster Discovery is an events API that searches events, attractions, venues, and classifications across Ticketmaster's global inventory, used to surface live entertainment listings, schedules, and venue details inside applications. Read and write Ticketmaster Discovery data through One: events, classifications, venues, attractions, genres, suggest and more, 13 actions with real parameter documentation. Use whenever the user asks to look something up in Ticketmaster Discovery, create or update a record there, or build code against the Ticketmaster Discovery API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ticketmaster-discovery
  generated-from: one-knowledge-base
---

# Ticketmaster Discovery through One

Ticketmaster Discovery is an events API that searches events, attractions, venues, and classifications across Ticketmaster's global inventory, used to surface live entertainment listings, schedules, and venue details inside applications.

One exposes Ticketmaster Discovery through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ticketmaster-discovery` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Ticketmaster Discovery is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Ticketmaster Discovery account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event's Images | GET | `/discovery/v2/events/{{id}}/images` | `conn_mod_def::GK8OQX0Nf5g::Vl9tsakjQ0OAfoMo711Tgg` |
| Get Event Details | GET | `/discovery/v2/events/{{id}}` | `conn_mod_def::GK8OQV1ccjA::r940vWIeS1WgO7GEkvZudw` |
| Search Events | GET | `/discovery/v2/events` | `conn_mod_def::GK8OQMVyaog::QJcaLpW2QDCvaYH3TwYIig` |

### Classifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Classification Details | GET | `/discovery/v2/classifications/{{id}}` | `conn_mod_def::GK8OP_o6oLA::wEZwItjvSxCaa6wg0qsW-A` |
| Search Classifications | GET | `/discovery/v2/classifications` | `conn_mod_def::GK8OQA291iA::8qRlhu22QQOir28kO9xd_Q` |

### Venues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Venue Details | GET | `/discovery/v2/venues/{{id}}` | `conn_mod_def::GK8OQzsn6AA::ZrEmco00R-O3KW4yeS7bmA` |
| Search Venues | GET | `/discovery/v2/venues` | `conn_mod_def::GK8OQ2Se3bA::DJkT-QxJTB-aKA-PH_4Ndg` |

### Attractions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Attraction Details | GET | `/discovery/v2/attractions/{{id}}` | `conn_mod_def::GK8OQIS1W2g::r2BOQkPoThSZC0DvCespfg` |
| Search Attractions | GET | `/discovery/v2/attractions` | `conn_mod_def::GK8OQAIK5wA::iUy7xPokTgiKFEJilvyXJg` |

### Genres

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Genre Details | GET | `/discovery/v2/classifications/genres/{{id}}` | `conn_mod_def::GK8OQpofcxA::fecXdkbRQNCdD_1M8k86VQ` |

### Suggest

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Suggest | GET | `/discovery/v2/suggest` | `conn_mod_def::GK8OQ14yFzA::h7zJqOcASAOSbeLKO_xLZw` |

### SubGenres

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sub-Genre Details | GET | `/discovery/v2/classifications/subgenres/{{id}}` | `conn_mod_def::GK8OQWLb3vg::eFIcnZLYSw265bGX6UbI5g` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Segment Details | GET | `/discovery/v2/classifications/segments/{{id}}` | `conn_mod_def::GK8OQWRALdA::WWMVD0BmQVOtDqkVygvrbQ` |

## When a call fails

The error comes from Ticketmaster Discovery, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ticketmaster-discovery

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
