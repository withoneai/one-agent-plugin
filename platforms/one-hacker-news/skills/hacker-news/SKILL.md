---
name: hacker-news
description: Hacker News is a social news website run by Y Combinator, focusing on computer science, entrepreneurship, and topics that satisfy intellectual curiosity. Read and write HackerNews data through One: items, jobstories, askstories, beststories, updates, newstories and more, 10 actions with real parameter documentation. Use whenever the user asks to look something up in HackerNews, create or update a record there, or build code against the HackerNews API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: hacker-news
  generated-from: one-knowledge-base
---

# HackerNews through One

Hacker News is a social news website run by Y Combinator, focusing on computer science, entrepreneurship, and topics that satisfy intellectual curiosity.

One exposes HackerNews through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `hacker-news` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm HackerNews is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real HackerNews account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Item | GET | `/v0/item/{{itemId}}.json` | `conn_mod_def::GJ310NV-FZs::GcvaGuXIRdCwhqJyntmCWw` |
| Get Max Item ID | GET | `/v0/maxitem.json` | `conn_mod_def::GJ310me3ivY::-7tvjIYCSQWXkRrJY2sCOA` |

### JobStories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Job Stories (IDs) | GET | `/v0/jobstories.json` | `conn_mod_def::GJ310e5SkMU::xw3KpSSMRtaqEvoYH7szPA` |

### AskStories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Ask HN Story IDs | GET | `/v0/askstories.json` | `conn_mod_def::GJ31z-kwoIs::Sxqd8iwhQpe0k9GYQWJgHw` |

### BestStories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Best Stories | GET | `/v0/beststories.json` | `conn_mod_def::GJ310Fk71hs::uUBNdp5eS22fk6ngfCu9WA` |

### Updates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Item & Profile Updates | GET | `/updates.json` | `conn_mod_def::GJ310WoY-JU::gxZul_MiTPWdlyBhy3Hq-g` |

### NewStories

| Action | Method | Path | Action id |
|---|---|---|---|
| List New Stories | GET | `/v0/newstories.json` | `conn_mod_def::GJ310twRcgg::qSwHbHSkTjW8MLXxI7gycQ` |

### ShowStories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Show HN Story IDs | GET | `/v0/showstories.json` | `conn_mod_def::GJ31007hqMc::ZSsXfWzdS6673tNSrBUfFA` |

### TopStories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Top Stories | GET | `/v0/topstories.json` | `conn_mod_def::GJ3108Dwmm4::avAMAq7HQtW6PT8JhPg5vA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/v0/user/{{userId}}.json` | `conn_mod_def::GJ311DlEyu8::J665kezDS3qYydh0VqEDKQ` |

## When a call fails

The error comes from HackerNews, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/hacker-news

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
