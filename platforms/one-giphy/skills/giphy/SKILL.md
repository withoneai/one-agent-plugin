---
name: giphy
description: Giphy is an online GIF and sticker platform and search engine that hosts a vast library of animated content for users, brands, and developers to discover, create and share expressive visuals across messaging apps, social media and third-party integrations. Read and write Giphy data through One: gifs, stickers, channels, trendingsearchterms, gifsearchtags, gifcategories and more, 19 actions with real parameter documentation. Use whenever the user asks to look something up in Giphy, create or update a record there, or build code against the Giphy API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: giphy
  generated-from: one-knowledge-base
---

# Giphy through One

Giphy is an online GIF and sticker platform and search engine that hosts a vast library of animated content for users, brands, and developers to discover, create and share expressive visuals across messaging apps, social media and third-party integrations.

One exposes Giphy through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `giphy` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Giphy is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Giphy account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Gifs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a GIF by ID | GET | `/gifs/{{gif_id}}` | `conn_mod_def::GJfEi8TMHYg::aprNL7mUTMmwP24XE8SYCQ` |
| Get a Random GIF | GET | `/gifs/random` | `conn_mod_def::GJfEjNAGLhg::naBJEywPRlyRV8bPYZAM1g` |
| Get GIFs by ID | GET | `/gifs` | `conn_mod_def::GJfEjEzWrxg::9eE4ditkTPazAtr76dmF3g` |
| List Trending GIFs | GET | `/gifs/trending` | `conn_mod_def::GJfEkVRJz8g::N-yADqgyRbSO7pJohpzG0g` |
| Search GIFs | GET | `/gifs/search` | `conn_mod_def::GJfEjgGbbZg::YxOom25ITRykVO5HX84cUw` |
| Translate a GIF | GET | `/gifs/translate` | `conn_mod_def::GJfEkEWDjyA::sO7aY9bTR4qCy6nNOLWS2g` |
| Upload a GIF | POST | `/gifs` | `conn_mod_def::GJfEkru3Jdg::BuHanJaVSC2ViIE8CiLMog` |

### Stickers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Random Sticker | GET | `/stickers/random` | `conn_mod_def::GJfEjTPCDkA::qtk_aajZQGK1ReINu4m7ZA` |
| List Trending Stickers | GET | `/stickers/trending` | `conn_mod_def::GJfEkbKXBDg::D0j4Oiw2TFK0caziVsu-gQ` |
| Search Stickers | GET | `/stickers/search` | `conn_mod_def::GJfEjnRDMGA::uXeKlALhRdCG_CG7OAPQWg` |
| Translate Stickers | GET | `/stickers/translate` | `conn_mod_def::GJfEkJiol-A::VA_qJokDRqKOGBaej2phag` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Channels | GET | `/channels/search` | `conn_mod_def::GJfEi0Kd3gA::BiSvS_4oQ--ioEJovJz8Ng` |

### TrendingSearchTerms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Trending Search Terms | GET | `/trending/searches` | `conn_mod_def::GJfEkkOf8CA::XU4CHqoFS-i_MIBujKeS9g` |

### GifSearchTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete GIF Search Tags | GET | `/gifs/search/tags` | `conn_mod_def::GJfEif-K_RA::srCcQCT-QRqxlSPoBqrsrg` |

### GifCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List GIF Categories | GET | `/gifs/categories` | `conn_mod_def::GJfEimZjetA::lwO-wEJWRYaGzCWKEcVCKg` |

### RandomId

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Random ID | GET | `/randomid` | `conn_mod_def::GJfEjZ7vvSA::bqIAz16oSASHipddacdy-A` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Related Tag Terms for a Tag | GET | `/tags/related/{{term}}` | `conn_mod_def::GJfEjv4S0lA::6fSHvHlaSSO8DJ5CIZ6d5Q` |

### EmojiVariations

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Emoji’s Variations | GET | `/v2/emoji/{{gif_id}}/variations` | `conn_mod_def::GJfEj1G13OA::A1vhp8CzSC66XLCa2CcIdg` |

### Emoji

| Action | Method | Path | Action id |
|---|---|---|---|
| List Emoji GIF Objects | GET | `/emoji` | `conn_mod_def::GJfEj62Cw1g::-D1uqO42T1WAVo5Kl91B1g` |

## When a call fails

The error comes from Giphy, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/giphy

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
