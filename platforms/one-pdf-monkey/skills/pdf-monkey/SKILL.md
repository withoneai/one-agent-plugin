---
name: pdf-monkey
description: PDFMonkey is a PDF generation platform that lets teams build and manage document templates, insert dynamic JSON data, and generate personalized PDFs through a simple REST API, helping developers automate document creation without building PDF logic from scratch. Read and write PDFMonkey data through One: documents, documenttemplates, documentcards, currentuser, documenttemplatecards and more, 13 actions with real parameter documentation. Use whenever the user asks to look something up in PDFMonkey, create or update a record there, or build code against the PDFMonkey API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: pdf-monkey
  generated-from: one-knowledge-base
---

# PDFMonkey through One

PDFMonkey is a PDF generation platform that lets teams build and manage document templates, insert dynamic JSON data, and generate personalized PDFs through a simple REST API, helping developers automate document creation without building PDF logic from scratch.

One exposes PDFMonkey through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `pdf-monkey` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm PDFMonkey is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real PDFMonkey account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document | GET | `/api/v1/documents/{{id}}` | `conn_mod_def::GMjmM8e6BW4::qTJylrSGSCOVkoMO24mzPA` |
| Create a Document | POST | `/api/v1/documents` | `conn_mod_def::GMjmNFkXBuE::6h2VwT_TTqu9K1C2-DYOcQ` |
| Delete a Document | DELETE | `/api/v1/documents/{{id}}` | `conn_mod_def::GMjmM6p2R9E::q268u6gnSlS-lb-RUPZyfA` |
| Generate a Document Synchronously | POST | `/api/v1/documents/sync` | `conn_mod_def::GMjmNFBcQ1s::c-uiQhrjRk-xdqmpPnMQoQ` |
| Update a Document | PUT | `/api/v1/documents/{{id}}` | `conn_mod_def::GMjmNGEGAjE::fHYBMTEsTXWbjS_ORcIySA` |

### DocumentTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document Template | GET | `/api/v1/document_templates/{{id}}` | `conn_mod_def::GMjmNOOPd0o::tWILgs4pQEejmoQBvlamHA` |
| Create a Document Template | POST | `/api/v1/document_templates` | `conn_mod_def::GMjmNPX3AGk::88JkbrekQq-zUBcw5MAR2Q` |
| Delete a Document Template | DELETE | `/api/v1/document_templates/{{id}}` | `conn_mod_def::GMjmNFL9IpE::yWf38lF-TumP5_97npuFfg` |
| Update a Document Template | PUT | `/api/v1/document_templates/{{id}}` | `conn_mod_def::GMjmNO8yLiM::NZi8sVrNQFSgCSD7HP_hIQ` |

### DocumentCards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document Card | GET | `/api/v1/document_cards/{{id}}` | `conn_mod_def::GMjmM7NX9LQ::zGnO4XhiRTieEImRSN9Ivg` |
| List Document Cards | GET | `/api/v1/document_cards` | `conn_mod_def::GMjmM83M2DQ::fiMhN1QDR9GDTFwZgE3xVw` |

### CurrentUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current User | GET | `/api/v1/current_user` | `conn_mod_def::GMjmM6YxXb4::mH7F96VsTPWFC0BbPmWUJQ` |

### DocumentTemplateCards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Document Template Cards | GET | `/api/v1/document_template_cards` | `conn_mod_def::GMjmNF6E84M::NqdcHkr1Skyt5P3QPSjvIA` |

## When a call fails

The error comes from PDFMonkey, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/pdf-monkey

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
