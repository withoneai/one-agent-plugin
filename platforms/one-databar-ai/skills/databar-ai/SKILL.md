---
name: databar-ai
description: Databar.ai is a no-code data enrichment and automation platform that connects to third-party APIs and public data sources, allowing teams to collect, enrich, and sync business data in spreadsheets and workflows without building custom integrations. Read and write Databar.ai data through One: waterfalls, connectors, folders, tablerows, enrichments, tablecolumns and more, 44 actions with real parameter documentation. Use whenever the user asks to look something up in Databar.ai, create or update a record there, or build code against the Databar.ai API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: databar-ai
  generated-from: one-knowledge-base
---

# Databar.ai through One

Databar.ai is a no-code data enrichment and automation platform that connects to third-party APIs and public data sources, allowing teams to collect, enrich, and sync business data in spreadsheets and workflows without building custom integrations.

One exposes Databar.ai through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `databar-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Databar.ai is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Databar.ai account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Waterfalls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Waterfall (by Identifier) | GET | `/v1/waterfalls/{{waterfallIdentifier}}` | `conn_mod_def::GK7BasUP2CI::4zBphx4UT-irXQHsOjWLVQ` |
| Get a Table's Waterfalls | GET | `/v1/table/{{tableUuid}}/waterfalls` | `conn_mod_def::GK7BaaKUdBY::zTdrSwVpRsOy6yuR-uTcXQ` |
| List Available Waterfalls | GET | `/waterfalls/` | `conn_mod_def::GK7BatxlX7Y::4tfB9Y3YQL-T8z38F3ERpg` |
| Add Waterfall to a Table | POST | `/v1/table/{{tableUuid}}/add-waterfall` | `conn_mod_def::GK7BaFItw0c::50QsASiqRVqZhI8xZNTKGg` |
| Run a Bulk Waterfall | POST | `/v1/waterfalls/{{waterfallIdentifier}}/bulk-run` | `conn_mod_def::GK7Bayr5a38::4Hha9aIkSca3bdqDfNRMaQ` |
| Run a Waterfall Task | POST | `/v1/waterfalls/{{waterfallIdentifier}}/run` | `conn_mod_def::GK7BatGk-zo::tPvxa5DwSmGxQ9H9EpFPJQ` |

### Connectors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connector (by ID) | GET | `/v1/connectors/{{connectorId}}` | `conn_mod_def::GK7BZV7H1Sc::IH9ZF9RhRGO6Xar_tFrxKA` |
| List Custom API Connectors | GET | `/connectors/` | `conn_mod_def::GK7BZVwaFWw::csEMlj4SSxqfwnUzAgBjxQ` |
| Create a Custom API Connector | POST | `/connectors/` | `conn_mod_def::GK7BZVk2XhI::dG3FKHqdTrGFVu0rTZuszg` |
| Delete a Connector | DELETE | `/v1/connectors/{{connectorId}}` | `conn_mod_def::GK7BZVXGTKI::HYy70LviSUqhWQ-Yfey46g` |
| Update a Connector | PUT | `/v1/connectors/{{connectorId}}` | `conn_mod_def::GK7BZVwMTBA::32GzMjZpSLG205220uAVAg` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Folders | GET | `/folders` | `conn_mod_def::GK7BZuS56HY::jA_-zWqmS-ORLOT-480R4Q` |
| Create a Folder | POST | `/v1/folders` | `conn_mod_def::GK7BZwy8iZg::bSMwTAgHTsGxJhRqwSMF9g` |
| Delete a Folder | DELETE | `/v1/folders/{{folderId}}` | `conn_mod_def::GK7BZumJfss::1BRwwVVyTLez4kk_9F4b3Q` |
| Move a Table Into or Out of a Folder | POST | `/folders/move-table` | `conn_mod_def::GK7BZ8wjg4I::hiZnDRlSSCKbyMvTQpBqgw` |
| Rename a Folder | PATCH | `/v1/folders/{{folderId}}` | `conn_mod_def::GK7BZ79L7wE::5y6nSUK9RlWJZ10yYEMZwg` |

### TableRows

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Table's Rows | GET | `/v1/table/{{tableUuid}}/rows` | `conn_mod_def::GK7BabHIFpw::eAPlIl5aT2-1RE_TiKyiPA` |
| Delete Rows from a Table | POST | `/v1/table/{{tableUuid}}/rows/delete` | `conn_mod_def::GK7BaPzG-Yk::dMCf67oRQhyEhr-CDQVVjw` |
| Insert Multiple Rows Into a Table | POST | `/v1/table/{{tableUuid}}/rows` | `conn_mod_def::GK7BabAixv4::56LK-yeiSCGJ8jkSVifh9w` |
| Partially Update Multiple Rows in a Table | PATCH | `/v1/table/{{tableUuid}}/rows` | `conn_mod_def::GK7BaZ597W4::5tA8x03ZSA61h1NDn8lB-A` |
| Upsert Rows in a Table | POST | `/v1/table/{{tableUuid}}/rows/upsert` | `conn_mod_def::GK7BakNIFG4::X3tSOwJVQfWXKyGo-UWHDA` |

### Enrichments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Enrichment (by ID) | GET | `/v1/enrichments/{{enrichmentId}}` | `conn_mod_def::GK7BZd7Ps1I::vBuKqdZ2RyKCFGyTYBtYdQ` |
| List Available Enrichments | GET | `/v1/enrichments/` | `conn_mod_def::GK7BZfjKF7U::AQJQScj6QECoAG3j3Ua2mQ` |
| Run a Bulk Enrichment | POST | `/v1/enrichments/{{enrichmentId}}/bulk-run` | `conn_mod_def::GK7BZmW4SoY::gtBgbnxITL6g_6sRzYE1WA` |
| Run an Enrichment Task | POST | `/v1/enrichments/{{enrichmentId}}/run` | `conn_mod_def::GK7BZej_FwQ::O2WHLBfJSiqIYozSrt_zRw` |

### TableColumns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Table's Columns | GET | `/v1/table/{{tableUuid}}/columns` | `conn_mod_def::GK7BaO6k5zg::Pg0Qcu2UTY2-uBog_dH87A` |
| Add a Column to a Table | POST | `/v1/table/{{tableUuid}}/columns` | `conn_mod_def::GK7BZ8l9Rro::nQK0xXJiQHyz51r5krJ84A` |
| Delete a Table Column | DELETE | `/v1/table/{{tableUuid}}/columns/{{columnId}}` | `conn_mod_def::GK7BaEAxFa8::mCcm-M88T2W4elmjs8hC9w` |
| Rename a Table Column | PATCH | `/v1/table/{{tableUuid}}/columns/{{columnId}}` | `conn_mod_def::GK7BajXbQNY::ogwhhfmpTBm5GDlvOHe4JQ` |

### Table

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Table | POST | `/v1/table/create` | `conn_mod_def::GK7BaEFBh2M::0iZ-n3fISjarQyA_HQsluA` |
| Delete a Table | DELETE | `/v1/table/{{tableUuid}}` | `conn_mod_def::GK7BaO7JVZg::xHacDA5yRUSh_i4h6yk6-Q` |
| Rename a Table by UUID | PATCH | `/v1/table/{{tableUuid}}` | `conn_mod_def::GK7BajFQIhw::g9vPkwtcRRWgV_4fLWB5kg` |

### Exporters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Exporter (by ID) | GET | `/v1/exporters/{{exporterId}}` | `conn_mod_def::GK7BZ0l09wE::eqH9RcP1Toav9ZHaI98oow` |
| List Available Exporters | GET | `/v1/exporters/` | `conn_mod_def::GK7BZuv_mxc::eiJs-7F-ReqBJ_8I0hiPGw` |

### TableExporters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Table's Exporters | GET | `/v1/table/{{tableUuid}}/exporters` | `conn_mod_def::GK7BaZWGE1g::vYqx4enAS4uP8QZw6I7Ylw` |
| Add an Exporter to a Table | POST | `/v1/table/{{tableUuid}}/add-exporter` | `conn_mod_def::GK7BaHHWsnw::C41e10laSkeCKIz9GROHHQ` |

### EnrichmentParameterChoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Choices for an Enrichment Parameter | GET | `/v1/enrichments/{{enrichmentId}}/params/{{paramSlug}}/choices` | `conn_mod_def::GK7BZe73yM8::OJnpUwZvRWWf07tKqkM3QQ` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Task Data or Status (by Task ID) | GET | `/v1/tasks/{{taskId}}` | `conn_mod_def::GK7BZ8gbATI::L8zqBBH4TP6wVYtf7j8NuQ` |

### TableEnrichment

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Enrichment to a Table | POST | `/v1/table/{{tableUuid}}/add-enrichment` | `conn_mod_def::GK7BaFOTAQc::XkuR-0bhQbmc7QuVh8w5fw` |

### TableEnrichmentRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Table Enrichment or Waterfall | POST | `/v1/table/{{tableUuid}}/run-enrichment/{{enrichmentId}}` | `conn_mod_def::GK7Baj8iMFM::3q8Y4YliSQ6Qv0Boy9a0aQ` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Health Check | GET | `/health` | `conn_mod_def::GK7BZ9A4enU::jvEo2ThwQbqa6wVFEirr3g` |

### TableEnrichments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Table's Enrichments | GET | `/v1/table/{{tableUuid}}/enrichments` | `conn_mod_def::GK7BaRpK8eA::_oL33m6SRyWjs3403gn-Nw` |

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspace Tables | GET | `/table/` | `conn_mod_def::GK7BaPFFGrc::R8o27MnZTUq5B9aQEtRKeA` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Info | GET | `/user/me` | `conn_mod_def::GK7Baj4_7HU::-W882EwVT8GI8CYWvZNkkg` |

## When a call fails

The error comes from Databar.ai, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/databar-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
