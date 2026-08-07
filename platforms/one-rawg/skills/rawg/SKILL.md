---
name: rawg
description: RAWG is a video game database platform that provides APIs for accessing game metadata, ratings, release information, screenshots, and platform details, allowing developers, publishers, and content teams to integrate structured game data into apps, websites, and discovery tools. Read and write RAWG data through One: games, platforms, genres, tags, publishers, stores and more, 30 actions with real parameter documentation. Use whenever the user asks to look something up in RAWG, create or update a record there, or build code against the RAWG API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: rawg
  generated-from: one-knowledge-base
---

# RAWG through One

RAWG is a video game database platform that provides APIs for accessing game metadata, ratings, release information, screenshots, and platform details, allowing developers, publishers, and content teams to integrate structured game data into apps, websites, and discovery tools.

One exposes RAWG through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `rawg` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm RAWG is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real RAWG account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Games

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Game's Twitch Streams | GET | `/games/{{id}}/twitch` | `conn_mod_def::GKTwjK4GXHU::kM1Dys14RJaRVLIn103_PA` |
| Get a Game's YouTube Videos | GET | `/games/{{id}}/youtube` | `conn_mod_def::GKTwjPuJiLs::DeiYI8dDRrmQ31Kq62aUHg` |
| Get Game Details | GET | `/games/{{id}}` | `conn_mod_def::GKTwi8vTicU::tg_YXmNbQumbEgEcRM1ONw` |
| List a Game's Parent Games | GET | `/games/{{gamePk}}/parent-games` | `conn_mod_def::GKTwi-oare8::ZyZq_F1NSfye5bK_GazW_A` |
| List a Game’s Store Links | GET | `/games/{{gamePk}}/stores` | `conn_mod_def::GKTwjNBD5ro::zR1gMM1dQbaQFUIF3CQHUg` |
| List Games | GET | `/api/games` | `conn_mod_def::GKTwizwW6GM::6_zDk-__QMqAZhA4Qcy8VA` |
| List Suggested Games for a Game | GET | `/games/{{id}}/suggested` | `conn_mod_def::GKTwi8xTnwU::_a4C6gbZSx6p-3JbLCZ9uQ` |

### Platforms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Details of a Platform | GET | `/platforms/{{id}}` | `conn_mod_def::GKTwjbnunHE::Cxa0vxvZSciV0hoHi-p93A` |
| List Video Game Platforms | GET | `/platforms` | `conn_mod_def::GKTwjhvzzFA::vqcvl84nTJuAxGrzhN2oDg` |

### Genres

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Genre Details | GET | `/genres/{{id}}` | `conn_mod_def::GKTwjby6CrA::l5bsU3IJRcSxyoQXmDmBuQ` |
| List Video Game Genres | GET | `/genres` | `conn_mod_def::GKTwjSVnYHQ::GoEgWR4fT0eDOF_yUpuHLw` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tag Details | GET | `/tags/{{id}}` | `conn_mod_def::GKTwjwvXzJ8::GX7XMFIgRoKnfv22plISlg` |
| List Tags | GET | `/api/tags` | `conn_mod_def::GKTwj1ZZAj0::Wp3-R8qDTYmnlCFlqcr8VQ` |

### Publishers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Publisher Details | GET | `/publishers/{{id}}` | `conn_mod_def::GKTwj0edOgk::ZP_Y9hDFR7msmj07K2-hlg` |
| List Video Game Publishers | GET | `/publishers` | `conn_mod_def::GKTwjcVTZIc::qb-Nv0zrRKuVwvKqZEuHiQ` |

### Stores

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Store Details | GET | `/stores/{{id}}` | `conn_mod_def::GKTwjzefmtA::Fx-3cjbuTLigXTRGptBYDA` |
| List Video Game Storefronts | GET | `/api/stores` | `conn_mod_def::GKTwj6dVcgk::CgS565sZQcqV7cSoeOonvA` |

### Developers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Developer Details | GET | `/developers/{{id}}` | `conn_mod_def::GKTwigroDAQ::eV4rOqK3ScmUMx5B5G4pRQ` |
| List Game Developers | GET | `/api/developers` | `conn_mod_def::GKTwiiw0nOk::O0fxdeb0S82_3hQ8WU6INQ` |

### Creators

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Creator Details | GET | `/creators/{{id}}` | `conn_mod_def::GKTwign43do::BeAszBfiTlWQA7ilo1V9OA` |
| List Game Creators | GET | `/creators` | `conn_mod_def::GKTwiiZNuno::pNrqjjMSRVywxe5O8jOfCA` |

### GameSeriesGames

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Game's Series Games | GET | `/games/{{gamePk}}/game-series` | `conn_mod_def::GKTwiul15g8::IFP-fOztSsCSiq52GCKwcA` |

### GameAdditions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Game's Additions | GET | `/games/{{gamePk}}/additions` | `conn_mod_def::GKTwiuxm76c::qCWnlVsYSTaULYQ1Y0R7rw` |

### GameDevelopmentTeam

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Game's Development Team | GET | `/games/{{gamePk}}/development-team` | `conn_mod_def::GKTwi_PsJC0::PvJ-p4_TT9Gqs5ATAZ0O1w` |

### GameScreenshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Game's Screenshots | GET | `/games/{{gamePk}}/screenshots` | `conn_mod_def::GKTwjMOYHzk::3F6bMdNkRVe8HQJfRjKZXQ` |

### ParentPlatforms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Parent Platforms | GET | `/platforms/lists/parents` | `conn_mod_def::GKTwjcvKkOE::DEms-XhsQ4-z9WTGV1xvLw` |

### GameTrailers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Game's Trailers | GET | `/games/{{id}}/movies` | `conn_mod_def::GKTwismTVWs::SEPo162bSR-bX4zrdyNsBw` |

### GameAchievements

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Game's Achievements | GET | `/games/{{id}}/achievements` | `conn_mod_def::GKTwir_820A::iwhfJOnYS8-MRRkBLkeulA` |

### CreatorPositions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Creator Positions | GET | `/creator-roles` | `conn_mod_def::GKTwijBOQ48::j75-jnXUR5Gcu_qkK2CKPQ` |

### GamesRedditPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Game's Most Recent Reddit Posts | GET | `/games/{{id}}/reddit` | `conn_mod_def::GKTwjCASX2w::sfwkficvSySvdm9ZAt-s6w` |

## When a call fails

The error comes from RAWG, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/rawg

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
