---
name: docparser
description: Docparser is a document parsing and data extraction platform that converts PDFs, invoices, forms, and other files into structured data, allowing teams and developers to automate document workflows and send extracted information to business systems through integrations and APIs. Read and write Docparser data through One: document, documents, documentstatus, docparserping, documentparsers, results and more, 10 actions with real parameter documentation. Use whenever the user asks to look something up in Docparser, create or update a record there, or build code against the Docparser API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: docparser
  generated-from: one-knowledge-base
---

# Docparser through One

Docparser is a document parsing and data extraction platform that converts PDFs, invoices, forms, and other files into structured data, allowing teams and developers to automate document workflows and send extracted information to business systems through integrations and APIs.

One exposes Docparser through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `docparser` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Docparser is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Docparser account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Document

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Document Using Document v2 | POST | `/v2/document/fetch/{{id}}` | `conn_mod_def::GMbDNSCZtlI::GL_YnGu8SeaVmN3CEm1wuA` |
| Upload a Document to a Parser | POST | `/v1/document/upload/{{id}}` | `conn_mod_def::GMbDNy9jdU4::Z_5WzuR4SRiNX4FY5D421g` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Data of Multiple Documents | GET | `/v1/results/{{id}}` | `conn_mod_def::GMbDNTZ6K4E::Pq5ko8KsRd2Al7VGUz9_9Q` |
| Re-Parse Documents for a Parser | POST | `/v1/document/reparse/{{id}}` | `conn_mod_def::GMbDN7mdCnE::UeQQbXhyRziDuk0dDKiV0w` |

### DocumentStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Document Status | GET | `/v2/document/status/{{id}}/{{id}}` | `conn_mod_def::GMbDNRw6vMI::yDAu5MZrSkSKfOH3bXexYw` |

### DocparserPing

| Action | Method | Path | Action id |
|---|---|---|---|
| Ping Docparser v1 | GET | `/v1/ping` | `conn_mod_def::GMbDNRw88SI::ldIF8W5ITmGJEqh8STHWkg` |

### DocumentParsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Document Parsers | GET | `/v1/parsers` | `conn_mod_def::GMbDN88zlmc::b7FYoeygQFivbIzvyaDGxw` |

### Results

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Data of One Document for a Parser | GET | `/v1/results/{{id}}/{{id}}` | `conn_mod_def::GMbDN9XvHRM::oRS-7e4FRWGFy11jZ4KE-Q` |

### DocumentReintegrate

| Action | Method | Path | Action id |
|---|---|---|---|
| Re-Integrate Data for a Parser | POST | `/v1/document/reintegrate/{{id}}` | `conn_mod_def::GMbDN972Kgs::yJPYHflPQDKh-ydq2F2big` |

### ParserModelLayouts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Parser Model Layouts for a Parser | GET | `/v1/parser/models/{{id}}` | `conn_mod_def::GMbDN-QFN-g::uyHKiCshRnmUfa1OsZLAHg` |

## When a call fails

The error comes from Docparser, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/docparser

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
