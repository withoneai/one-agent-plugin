---
name: listen-notes
description: Listen Notes is a podcast search and discovery platform that provides APIs for accessing podcast metadata, episodes, playlists, and recommendations, allowing developers and media products to build podcast search, analytics, and content discovery features into their applications. Read and write Listen Notes data through One: podcasts, episodes, curatedpodcasts, playlists, typeahead, bestpodcasts and more, 26 actions with real parameter documentation. Use whenever the user asks to look something up in Listen Notes, create or update a record there, or build code against the Listen Notes API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: listen-notes
  generated-from: one-knowledge-base
---

# Listen Notes through One

Listen Notes is a podcast search and discovery platform that provides APIs for accessing podcast metadata, episodes, playlists, and recommendations, allowing developers and media products to build podcast search, analytics, and content discovery features into their applications.

One exposes Listen Notes through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `listen-notes` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Listen Notes is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Listen Notes account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Podcasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Podcasts by a Publisher's Domain Name | GET | `/podcasts/domains/{{domainName}}` | `conn_mod_def::GK9gvGpuvmA::uQd5-gVoTxq2RZXTU3nvbw` |
| Get a Podcast by ID | GET | `/podcasts/{{id}}` | `conn_mod_def::GK9gu7rxVCA::GPru_m5qQYK1km9GveBEgg` |
| Batch Fetch Basic Metadata for Podcasts | POST | `/api/v2/podcasts` | `conn_mod_def::GK9gukZBN5A::ohDLbKV5Q3eD6-vd4Iy3Uw` |
| Delete a Podcast | DELETE | `/podcasts/{{id}}` | `conn_mod_def::GK9gvWcj55g::QspjUZBDQeaZZqNvVW6LGA` |
| Refresh a Podcast's RSS Feed | POST | `/podcasts/{{id}}/rss` | `conn_mod_def::GK9gvSF3LHg::maiLw-YyTjWmZSW11nO-aQ` |
| Submit a Podcast to the Listen Notes Database | POST | `/api/v2/podcasts/submit` | `conn_mod_def::GK9gvSEsRLA::S2H4QvR5Q1GjtZPYgDfvtg` |

### Episodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Detailed Metadata for an Episode by ID | GET | `/episodes/{{id}}` | `conn_mod_def::GK9gvJgK5CA::oaZlWtwmTsKuv-nZgVHoWA` |
| Search Episode Titles | GET | `/api/v2/search_episode_titles` | `conn_mod_def::GK9gvgXlkTg::Z8hLnSrFTAmzI3P1CIZYfw` |
| Batch Fetch Basic Metadata for Episodes | POST | `/episodes` | `conn_mod_def::GK9gujtlP7A::0fWiQyxSSrWrMmkCE8AjIA` |

### CuratedPodcasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Curated Podcast List by ID | GET | `/curated_podcasts/{{id}}` | `conn_mod_def::GK9guuLlQPA::N7Na7dBxQieqWzfzl5ENCw` |
| List Curated Podcast Lists | GET | `/api/v2/curated_podcasts` | `conn_mod_def::GK9gu2XFsag::tCyWvhvMRPSFYyXT76noSg` |

### Playlists

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Playlist's Info and Items | GET | `/playlists/{{id}}` | `conn_mod_def::GK9gvSfhicg::wNwva68dQmacZtaYHnn7uQ` |
| List Playlists | GET | `/api/v2/playlists` | `conn_mod_def::GK9gvTJQRNA::e65e7bVITnGIdLWzuP1y0A` |

### Typeahead

| Action | Method | Path | Action id |
|---|---|---|---|
| Typeahead Search | GET | `/typeahead` | `conn_mod_def::GK9gvxJMUlg::B-JyLnjbQjOTBhbO_TJdlw` |

### BestPodcasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Best Podcasts by Genre | GET | `/api/v2/best_podcasts` | `conn_mod_def::GK9guk0oeYg::el1OMbU8SoiN8sSGqZw_IQ` |

### Genres

| Action | Method | Path | Action id |
|---|---|---|---|
| List Podcast Genres | GET | `/api/v2/genres` | `conn_mod_def::GK9guouTxMA::r1vPkgWnR7GDol_5pSuuCg` |

### Languages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Podcast Languages | GET | `/languages` | `conn_mod_def::GK9gu2GV7pA::0cTM2PaWRfmGFiMiViTV4g` |

### Regions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Regions for Best Podcasts | GET | `/regions` | `conn_mod_def::GK9gu2eVl3g::gOPoyZMoSnqAIN_ilpNI9Q` |

### PodcastEpisodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Random Podcast Episode | GET | `/api/v2/just_listen` | `conn_mod_def::GK9gu2ljiUg::UnugWpxBSGudOHnCyHHYFA` |

### PodcastAudienceDemographics

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Podcast Audience Demographics | GET | `/podcasts/{{id}}/audience` | `conn_mod_def::GK9gvEElnxA::6EX9t6CuRR29SPhHr5TApQ` |

### EpisodeRecommendations

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Episode Recommendations | GET | `/episodes/{{id}}/recommendations` | `conn_mod_def::GK9gvEwmeFg::_m937psRSJegudB1VU6-Xg` |

### PodcastRecommendations

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Podcast Recommendations | GET | `/podcasts/{{id}}/recommendations` | `conn_mod_def::GK9gvHgoO4A::zO8n-NstReGUAWGvzgUqxw` |

### SpellCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Spell Check a Search Term | GET | `/api/v2/spellcheck` | `conn_mod_def::GK9gvemiPwg::G6WRzyBxQc2AUQ4p4_K45Q` |

### TrendingSearchTerms

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Trending Search Terms | GET | `/trending_searches` | `conn_mod_def::GK9gvfrFg6g::gnmVeiXKS7eJB_6QOKtKCw` |

### RelatedSearches

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Related Search Terms | GET | `/api/v2/related_searches` | `conn_mod_def::GK9gvgQ61wg::D3mVlq4wQCWaXUpU0MDeuA` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Full-Text Search | GET | `/search` | `conn_mod_def::GK9gvoSVopg::p-tvRN9iQUe3_G5qol4kow` |

## When a call fails

The error comes from Listen Notes, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/listen-notes

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
