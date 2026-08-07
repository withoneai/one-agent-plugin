---
name: foursquare-places
description: Foursquare Places is a location data platform that provides APIs for place search, venue details, geocoding, and movement intelligence, allowing developers and businesses to build location-aware applications, enrich customer context, and analyze real-world foot traffic and visitation patterns. Read and write Foursquare Places data through One: places, offlinejobs, placephotos, offlinejobsstatus, geotaggingcandidates, geotaggingconfirm and more, 21 actions with real parameter documentation. Use whenever the user asks to look something up in Foursquare Places, create or update a record there, or build code against the Foursquare Places API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: foursquare-places
  generated-from: one-knowledge-base
---

# Foursquare Places through One

Foursquare Places is a location data platform that provides APIs for place search, venue details, geocoding, and movement intelligence, allowing developers and businesses to build location-aware applications, enrich customer context, and analyze real-world foot traffic and visitation patterns.

One exposes Foursquare Places through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `foursquare-places` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Foursquare Places is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Foursquare Places account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Places

| Action | Method | Path | Action id |
|---|---|---|---|
| Ask Places | GET | `/places/ask` | `conn_mod_def::GMT7mr8iyy0::p0ISLUo-TYKCahXEdxaghQ` |
| Autocomplete Places | GET | `/autocomplete` | `conn_mod_def::GMT7mPHxlTg::F_m-PXadQjeJWa8D6mmFCw` |
| Get Place Details | GET | `/places/{{fsqPlaceId}}` | `conn_mod_def::GMT7nFaEEP0::MnUcGSB1QQCQhb-tlErw1g` |
| Match a Place | GET | `/places/match` | `conn_mod_def::GMT7nIl3wnY::Sf67C1gfSnOiyxRmRlKtyQ` |
| Resolve a Place Identifier | GET | `/places/resolve` | `conn_mod_def::GMT7nC9lzEY::OlebjXYUQBi7IwYZUBXjGg` |
| Review Places With Pending Suggested Edits | GET | `/places/suggest/review` | `conn_mod_def::GMT7mdh6VrY::LkcwDNjuTE6IhV6ez57xMg` |
| Search Places | GET | `/places/search` | `conn_mod_def::GMT7nTkLNv0::I1ksOJMKTAGNd90R8FS1sw` |
| Flag a Place | POST | `/places/{{fsqPlaceId}}/suggest/flag` | `conn_mod_def::GMT7mcFpeDk::WCtLzd-FSmO7cLYfhUuPLw` |
| Remove a Place | POST | `/places/{{fsqPlaceId}}/suggest/remove` | `conn_mod_def::GMT7m5onYGk::muhgwTJhTw6vp3Xa5reXyA` |
| Suggest a Merge for a Place | POST | `/places/{{fsqPlaceId}}/suggest/merge` | `conn_mod_def::GMT7mxXYcsM::ZZ-ihsNFQXKKlUczpT0usg` |
| Suggest a New Place | POST | `/places/suggest/place` | `conn_mod_def::GMT7mujUtTg::uEbT0SYkQk2JxlqT6r_X4g` |
| Suggest Edit for a Place | POST | `/places/{{fsqPlaceId}}/suggest/edit` | `conn_mod_def::GMT7md-JN3w::pIrU92JoRmWIumrAkU-_4w` |

### OfflineJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute an Offline Job | POST | `/offline-jobs/{{fsqJobId}}/execute` | `conn_mod_def::GMT7mH3bvYM::y40p07P7Q0m31eV3VFd4kw` |
| Initialize an Offline Job | POST | `/offline-jobs/initialize` | `conn_mod_def::GMT7maoXV9E::8NtM2TIMTGahtgHY8hlOAQ` |
| Refresh Credentials for an Offline Job | POST | `/offline-jobs/{{fsqJobId}}/credentials/refresh` | `conn_mod_def::GMT7ma72CFs::Z_xnGWDAS8uCsnawVFxCmQ` |

### PlacePhotos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Place Photos for an FSQ Place | GET | `/places/{{fsqPlaceId}}/photos` | `conn_mod_def::GMT7nFmnhcM::nfOyOpU3Sjugeha1gF462Q` |

### OfflineJobsStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Offline Jobs Status | GET | `/offline-jobs/status` | `conn_mod_def::GMT7mJzzT80::bcQgwbg-SNiUw6IvVcxGrA` |

### GeotaggingCandidates

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Geotagging Candidates | GET | `/geotagging/candidates` | `conn_mod_def::GMT7mJ_sQpU::ncQfbFQXT8KbME_qCTv46w` |

### GeotaggingConfirm

| Action | Method | Path | Action id |
|---|---|---|---|
| Confirm Geotagging Candidate Selection | POST | `/geotagging/confirm` | `conn_mod_def::GMT7mPJa87A::SZEa1bkfSD-MlKYE3OiG_A` |

### SuggestionStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Suggestion Status | GET | `/places/suggest/status` | `conn_mod_def::GMT7moc2LJU::PcKpwWELSQWTcctchFwebw` |

### Tips

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tips for a Place | GET | `/places/{{fsqPlaceId}}/tips` | `conn_mod_def::GMT7nDJLXCE::AP69v2cWTgeSCVPmkCNCjA` |

## When a call fails

The error comes from Foursquare Places, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/foursquare-places

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
