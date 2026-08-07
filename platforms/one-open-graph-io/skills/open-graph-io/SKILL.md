---
name: open-graph-io
description: OpenGraph.io is a URL intelligence platform that provides APIs for link previews, Open Graph metadata, Markdown extraction, screenshots, embeds, and web content extraction, allowing developers and AI builders to turn URLs into structured, reusable data for applications and pipelines. Read and write OpenGraph.io data through One: sitemetadata, markdown, extractcontent, queryapi, scrape, oembed and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in OpenGraph.io, create or update a record there, or build code against the OpenGraph.io API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: open-graph-io
  generated-from: one-knowledge-base
---

# OpenGraph.io through One

OpenGraph.io is a URL intelligence platform that provides APIs for link previews, Open Graph metadata, Markdown extraction, screenshots, embeds, and web content extraction, allowing developers and AI builders to turn URLs into structured, reusable data for applications and pipelines.

One exposes OpenGraph.io through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `open-graph-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OpenGraph.io is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OpenGraph.io account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SiteMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Site Metadata | GET | `/api/3.0/site/{{encodedUrl}}` | `conn_mod_def::GMkqtZA2-9A::0By6hzWdRtSYZXjwOSW8_Q` |
| Test Connection | GET | `/api/3.0/site/https%3A%2F%2Fgithub.com` | `conn_mod_def::GMkrBAA215A::R9sFzfczS5O9tAGjupd39A` |

### Markdown

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a Webpage to Markdown | GET | `/api/3.0/markdown/{{encodedUrl}}` | `conn_mod_def::GMkqtKO_FGg::sFt3AtXJSJmgukMHzRgYEw` |

### ExtractContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Content | POST | `/api/3.0/extract` | `conn_mod_def::GMkqtLFQxgg::ucT3CvajRnWGFqFaIb5bgQ` |

### QueryApi

| Action | Method | Path | Action id |
|---|---|---|---|
| Query a Webpage Using Query API | GET | `/api/3.0/query/{{encodedUrl}}` | `conn_mod_def::GMkqtM70LQg::2cKa2RVtSiC1qDqCw_BFrg` |

### Scrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Raw HTML from a Website | GET | `/api/3.0/scrape/{{encodedUrl}}` | `conn_mod_def::GMkqtOVhU2g::vcikog3lSL-Fe6PdVcxBNQ` |

### Oembed

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Embeddable Representation of a URL | GET | `/api/3.0/oembed/{{encodedUrl}}` | `conn_mod_def::GMkqtRYQ32A::vi7ghZ8OQ0atMhirZJqYlA` |

### Screenshot

| Action | Method | Path | Action id |
|---|---|---|---|
| Capture a Screenshot | GET | `/api/3.0/screenshot/{{encodedUrl}}` | `conn_mod_def::GMkqtaKlK0g::trneEgR1RlOb2hyqDmf26w` |

## When a call fails

The error comes from OpenGraph.io, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/open-graph-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
