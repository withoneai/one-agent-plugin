---
name: google-places
description: Google Places is a location-based service that provides detailed information about places, such as businesses, landmarks, and points of interest, helping developers integrate rich location data into their applications. Read and write Google Places data through One: places, photomedia and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in Google Places, create or update a record there, or build code against the Google Places API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: google-places
  generated-from: one-knowledge-base
---

# Google Places through One

Google Places is a location-based service that provides detailed information about places, such as businesses, landmarks, and points of interest, helping developers integrate rich location data into their applications.

One exposes Google Places through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `google-places` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Google Places is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Google Places account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Places

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Place Details (by Resource Name) | GET | `/v1/places/{{placeId}}` | `conn_mod_def::GJ3znkiGMcE::L1Cmf763TQCDy7DnaVP8qw` |
| Autocomplete Places | POST | `/v1/places:autocomplete` | `conn_mod_def::GJ3znZmHofE::vc1ARoWCRIW-cu1zXBoVIA` |
| Search Nearby Places | POST | `/v1/places:searchNearby` | `conn_mod_def::GJ3zn3YN_9Y::s_hQ5BcmRY6WUo5CBtkp_Q` |
| Search Places by Text Query | POST | `/v1/places:searchText` | `conn_mod_def::GJ3zn_mhdq0::3SdDu4OGRmu_63gi9byIGA` |

### PhotoMedia

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Place Photo's Media | GET | `/v1/places/{{placeId}}/photos/{{photoId}}/media` | `conn_mod_def::GJ3znvV1Dik::-hpmTvDrRZSt8j-1WwAaug` |

## When a call fails

The error comes from Google Places, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/google-places

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
