---
name: docraptor
description: DocRaptor is a document generation platform that provides an API for converting HTML, CSS, and JavaScript into PDF and Excel files, allowing developers to automate high-quality report, invoice, and document creation within applications and workflows. Read and write DocRaptor data through One: docs, hostedasyncdocs, hosteddocs, asyncdocs, hosteddocument, asyncdocstatus and more, 7 actions with real parameter documentation. Use whenever the user asks to look something up in DocRaptor, create or update a record there, or build code against the DocRaptor API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: docraptor
  generated-from: one-knowledge-base
---

# DocRaptor through One

DocRaptor is a document generation platform that provides an API for converting HTML, CSS, and JavaScript into PDF and Excel files, allowing developers to automate high-quality report, invoice, and document creation within applications and workflows.

One exposes DocRaptor through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `docraptor` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm DocRaptor is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real DocRaptor account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Docs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Doc | POST | `/docs` | `conn_mod_def::GLV9AyRbR7g::eqTU7EkKR9WKh8ppmly3yA` |

### HostedAsyncDocs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Hosted Async Doc | POST | `/hosted_async_docs` | `conn_mod_def::GLV9AyR12IA::WKEek5WoRr-V_QoBNjj6UA` |

### HostedDocs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Hosted Document | POST | `/hosted_docs` | `conn_mod_def::GLV9AyR-ixA::9Y3s03UKS3a_te43xsGWRQ` |

### AsyncDocs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Async Doc | POST | `/async_docs` | `conn_mod_def::GLV9AyljThg::T4f5f2FKTCmDCaQgpXWUkQ` |

### HostedDocument

| Action | Method | Path | Action id |
|---|---|---|---|
| Expire a Hosted Document | PATCH | `/expire/{{id}}` | `conn_mod_def::GLV9Ayon6iA::cBN7jeBGQie0xcUi9tPqxg` |

### AsyncDocStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Async Doc Status | GET | `/status/{{id}}` | `conn_mod_def::GLV9A7HRslg::Q6EpklzrSJ28MSbq7OZZOg` |

### FinishedDocument

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Finished Document | GET | `/download/{{id}}` | `conn_mod_def::GLV9A7La1Vg::f_cSH0XfSY6XoqQJPbJKOQ` |

## When a call fails

The error comes from DocRaptor, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/docraptor

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
