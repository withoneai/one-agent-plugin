---
name: the-cat-api
description: TheCatAPI is an image and metadata API that provides access to cat photos, breeds, and related attributes, allowing developers to build pet-focused apps, generate random cat content, and integrate searchable breed data into websites, bots, and other software. Read and write The Cat API data through One: images, favourites, votes, breeds, facts, webhooks and more, 22 actions with real parameter documentation. Use whenever the user asks to look something up in The Cat API, create or update a record there, or build code against the The Cat API API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: the-cat-api
  generated-from: one-knowledge-base
---

# The Cat API through One

TheCatAPI is an image and metadata API that provides access to cat photos, breeds, and related attributes, allowing developers to build pet-focused apps, generate random cat content, and integrate searchable breed data into websites, bots, and other software.

One exposes The Cat API through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `the-cat-api` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm The Cat API is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real The Cat API account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Image's Analysis Results | GET | `/images/{{imageId}}/analysis` | `conn_mod_def::GKTsjtz-mRg::dA2q_k-IRYaGQ8W6r1ORKQ` |
| List an Image's Breeds | GET | `/images/{{imageId}}/breeds` | `conn_mod_def::GKTsjvEhdfM::HcuU2jWESlmFsrjepwoHaQ` |
| List Your Uploaded Images | GET | `/v1/images/` | `conn_mod_def::GKTstkLDCDg::nJfsERCxRPedEl4-8U00rA` |
| Search or Get Random Cat Images | GET | `/images/search` | `conn_mod_def::GKTstk-XfE0::nm7qGwM5ReW3XbM0PHwh0A` |
| Create Breeds for an Image | POST | `/images/{{imageId}}/breeds` | `conn_mod_def::GKTsjtyFkgw::IlUQR7_YRBWbAm0Zm8pbNA` |
| Delete a Breed From an Image | DELETE | `/images/{{imageId}}/breeds/{{breedId}}` | `conn_mod_def::GKTsj9IFK2Q::n9SrDQNYTECQ3ujjV9bkhA` |
| Delete an Image | DELETE | `/images/{{imageId}}` | `conn_mod_def::GKTsjud2jnM::OswEIwIhT-GS37TY-EPCLA` |
| Upload an Image | POST | `/images/upload` | `conn_mod_def::GKTsj37myPk::FJzo5mQyRj6wsUZvOXaYVg` |

### Favourites

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Favourite | GET | `/favourites/{{favouriteId}}` | `conn_mod_def::GKTsjha2Zcc::sgGJM9seSDCkjSM061HOJA` |
| List Favourites | GET | `/favourites` | `conn_mod_def::GKTsjhbcAVY::kk8xX9GfRlyFnMRas5OFow` |
| Create a Favourite | POST | `/favourites` | `conn_mod_def::GKTsthhh5ao::Z3chGdBKSk2UhK0UbQRS1Q` |
| Delete a Favourite | DELETE | `/favourites/{{favouriteId}}` | `conn_mod_def::GKTsjvJ2J80::4LQzEUX5S4CtS6B_-3AiJg` |

### Votes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Vote | GET | `/votes/{{voteId}}` | `conn_mod_def::GKTsj3L8a2U::cM8mhTIgRX-6YQyXiWkomA` |
| List Votes | GET | `/votes` | `conn_mod_def::GKTsj3AGCI0::UVwpfrvmRtKcAhlXxuyUow` |
| Create a Vote | POST | `/votes` | `conn_mod_def::GKTsj4G5Od0::nR5xwTOCQ_i9STGV7G9Mbg` |
| Delete a Vote | DELETE | `/vote/{{voteId}}` | `conn_mod_def::GKTst0gXfRE::NFhV5RYQSbiE9KDWF5Thaw` |

### Breeds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Breed | GET | `/breeds/{{breedId}}` | `conn_mod_def::GKTsjl0H_44::JyRIE3ItSNyCYg_IWstnNA` |
| List Breeds | GET | `/v1/breeds` | `conn_mod_def::GKTsjh0hcKo::wthf0RUcSgej0qyM-50s0w` |
| Search Breeds | GET | `/breeds/search` | `conn_mod_def::GKTsjhvY6Ig::rV-3Tp0PTPmnfExEQJ-dUQ` |

### Facts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Random Fact(s) | GET | `/facts` | `conn_mod_def::GKTsthyK2xQ::qbrgLCyhRpCRboBDvO0TZg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Webhook | POST | `/webhooks` | `conn_mod_def::GKTst0oxdfM::0Yw1aNtyQC2iw0GDhcKX7w` |

### BreedFacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ordered Fact(s) About a Breed | GET | `/breeds/{{breedId}}/facts` | `conn_mod_def::GKTstlNBsI8::7hfyGiAzQJejgk3r-TX0NQ` |

## When a call fails

The error comes from The Cat API, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/the-cat-api

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
