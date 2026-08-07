---
name: alt-text-ai
description: An AI-driven service that automatically analyzes images and generates descriptive, SEO-friendly alt text to improve website accessibility, enhance search visibility across languages, and streamline image metadata workflows for developers, content creators, and e-commerce platforms. Read and write AltText AI data through One: images, accountsettings, account and more, 10 actions with real parameter documentation. Use whenever the user asks to look something up in AltText AI, create or update a record there, or build code against the AltText AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: alt-text-ai
  generated-from: one-knowledge-base
---

# AltText AI through One

An AI-driven service that automatically analyzes images and generates descriptive, SEO-friendly alt text to improve website accessibility, enhance search visibility across languages, and streamline image metadata workflows for developers, content creators, and e-commerce platforms.

One exposes AltText AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `alt-text-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm AltText AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real AltText AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Image by Asset ID | GET | `/images/{{ASSET_ID}}` | `conn_mod_def::GJtxRZqHe48::CBwLUtYWQBeAdiwGBHoHBw` |
| List Images | GET | `/images` | `conn_mod_def::GJtxRHDrQCE::380jVhW8R0WOGs61CFbHmA` |
| Search Images in Library | GET | `/images/search` | `conn_mod_def::GJtxRso5sVI::x9Z0UHgmRmiRC9pptehTdQ` |
| Bulk Create Images (CSV Upload) | POST | `/images/bulk_create` | `conn_mod_def::GJtxRylyP9M::G_tTS4ZNReSaeANIFyJvYg` |
| Create Image (Generate Alt Text) | POST | `/images` | `conn_mod_def::GJtxRPiWZSs::ajnELMGbRiSFwypV0qonaQ` |
| Delete an Image by Asset ID | DELETE | `/images/{{ASSET_ID}}` | `conn_mod_def::GJtxRm2ry9k::6KbGrrJ6SsilD72jnUQP6A` |
| Scrape a Web Page’s Images for Alt Text Generation | POST | `/images/page_scrape` | `conn_mod_def::GJtxR6YtUds::-T-5a1NhRkq17CE6neekug` |
| Update an Image by Asset ID | PUT | `/images/{{ASSET_ID}}` | `conn_mod_def::GJtxRgaT7QI::krhpBh6cTUCSbude9PXbUw` |

### AccountSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Settings | GET | `/account` | `conn_mod_def::GJtxQ5-_vi0::sHF4enDKQZ2eabk2rmpqaQ` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Account Settings | PUT | `/account` | `conn_mod_def::GJtxRBdPpiM::1PBRziUpQ8Wk0JvxrZWa0Q` |

## When a call fails

The error comes from AltText AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/alt-text-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
