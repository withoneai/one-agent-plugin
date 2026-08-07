---
name: rite-kit
description: RiteKit is a social media optimization platform that provides tools for hashtag suggestions, content enhancement, and post analysis, enabling marketers and creators to improve social publishing workflows and increase the visibility and engagement of their social media content. Read and write RiteKit data through One: images, emoji, hashtags, emojisuggestions, hashtaghistory, autohashtagstats and more, 13 actions with real parameter documentation. Use whenever the user asks to look something up in RiteKit, create or update a record there, or build code against the RiteKit API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: rite-kit
  generated-from: one-knowledge-base
---

# RiteKit through One

RiteKit is a social media optimization platform that provides tools for hashtag suggestions, content enhancement, and post analysis, enabling marketers and creators to improve social publishing workflows and increase the visibility and engagement of their social media content.

One exposes RiteKit through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `rite-kit` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm RiteKit is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real RiteKit account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Animate Image | GET | `/v1/images/animate` | `conn_mod_def::GMa8rnFeadE::Ji99gEt-QxSRRs6-wxTmnA` |
| Text to Image Using Quote Images | GET | `/v1/images/quote` | `conn_mod_def::GMa8ruTIixU::ic1rD-m_RZ-k-h1rMhfkvw` |

### Emoji

| Action | Method | Path | Action id |
|---|---|---|---|
| Auto Emojify Text | GET | `/v1/emoji/auto-emojify` | `conn_mod_def::GMa8rSt0w-4::wsHXylWmS8ylh7qkmWBuvA` |

### Hashtags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Stats for Multiple Hashtags | GET | `/v1/stats/multiple-hashtags` | `conn_mod_def::GMa8raMDmZ8::trtvdm-cSYqv2XfmR4Dn6A` |

### EmojiSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Emoji Suggestions | GET | `/v1/emoji/suggestions` | `conn_mod_def::GMa8raQYf1k::Dy5szkpFRrWyxaSEQlrTqw` |

### HashtagHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Hashtag History | GET | `/v1/stats/history/{{hashtag}}` | `conn_mod_def::GMa8ramxJ0Y::l1NWfC8GRl68MU-AKK-iZg` |

### AutoHashtagStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Auto-Hashtag Stats | GET | `/v1/stats/auto-hashtag` | `conn_mod_def::GMa8rdbV8ZY::uOo83QKIQXSt_WaQp2W61w` |

### HashtagSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Hashtag Suggestions | GET | `/v1/stats/hashtag-suggestions` | `conn_mod_def::GMa8rm4SEfY::OE1tozH-SSOyNmo-nK50mA` |

### CompanyLogos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Logo by Domain | GET | `/v1/images/logo` | `conn_mod_def::GMa8roXkc2A::Pp8Wo5lwSa6IiamAKhfiZw` |

### TrendingHashtags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Trending Hashtags | GET | `/v1/search/trending` | `conn_mod_def::GMa8rtPfVVA::8iBxeQgtScCM76oD9iYZ4g` |

### Ctas

| Action | Method | Path | Action id |
|---|---|---|---|
| List CTAs | GET | `/v1/link/cta` | `conn_mod_def::GMa8r4Z1NtE::keqGTz_QSxmoq042-2ajDg` |

### InstagramHashtags

| Action | Method | Path | Action id |
|---|---|---|---|
| Clean Instagram Hashtags | GET | `/v2/instagram/hashtags-cleaner` | `conn_mod_def::GMa8r5imyRY::MnRGC_DERDqe9IeVVXPnRg` |

### Link

| Action | Method | Path | Action id |
|---|---|---|---|
| Short Link Using v1 Link | GET | `/v1/link/short-link` | `conn_mod_def::GMa8r50RnNw::XQhU6UrhT4y_-I2jPs5l5A` |

## When a call fails

The error comes from RiteKit, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/rite-kit

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
