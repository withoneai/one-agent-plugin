---
name: custom-js
description: CustomJS is an automation platform that provides JavaScript execution, PDF generation, screenshots, forms, static hosting, web scraping, and email-to-webhook tools through Make.com, n8n, and HTTP APIs, allowing teams to add custom logic and backend capabilities to no-code and AI workflows. Read and write CustomJS data through One: htmltopdf, pdf, customjsfunction, pdfpages, pdfs, pages and more, 10 actions with real parameter documentation. Use whenever the user asks to look something up in CustomJS, create or update a record there, or build code against the CustomJS API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: custom-js
  generated-from: one-knowledge-base
---

# CustomJS through One

CustomJS is an automation platform that provides JavaScript execution, PDF generation, screenshots, forms, static hosting, web scraping, and email-to-webhook tools through Make.com, n8n, and HTTP APIs, allowing teams to add custom logic and backend capabilities to no-code and AI workflows.

One exposes CustomJS through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "custom-js", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm CustomJS is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real CustomJS account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### HtmlToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| HTML to PDF | POST | `/html2pdf` | `conn_mod_def::GMa2rhUxtCA::Wr-gQASvQHayBM4mtt5UEw` |
| Test Connection | POST | `/html2pdf` | `conn_mod_def::GMa0rTyROug::z4_htVW6S7-uhd--tr2c-A` |

### Pdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Compress PDF | POST | `/{{functionId}}` | `conn_mod_def::GMa2rhfKujg::R1lqOcDpSEWkR2DVrgYSUg` |

### CustomJsFunction

| Action | Method | Path | Action id |
|---|---|---|---|
| PDF to PNG Using a CustomJS Function | POST | `/{{functionId}}` | `conn_mod_def::GMa2riyPbHA::NYk87HY8TsSwSbK_XePkeQ` |

### PdfPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Pages from PDF Using CustomJS | POST | `/{{functionId}}` | `conn_mod_def::GMa2ri0Q1Vg::lys_jLnSR-Wd4T7Hvuc5VA` |

### Pdfs

| Action | Method | Path | Action id |
|---|---|---|---|
| Merge PDFs | POST | `/{{functionId}}` | `conn_mod_def::GMa2rjIteRA::7dtrkWkaQAm3C8LCBEy4iA` |

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an HTML Page | POST | `/pages/page/upload-html` | `conn_mod_def::GMa2rpj_zLA::pJpB2GDCQv6oCCs7x-Tjrw` |

### InvoiceGenerator

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate an Invoice PDF Using CustomJS Invoice Generator API | POST | `/invoice-generator-api` | `conn_mod_def::GMa2rqcqmaA::n0PXQAJWQi-ae7OO4ck49Q` |

### PdfToText

| Action | Method | Path | Action id |
|---|---|---|---|
| PDF to Text Using CustomJS | POST | `/{{functionId}}` | `conn_mod_def::GMa2rsqfgSA::TDzQ6gR0QziqCXvPocLYrA` |

### CustomJsExecution

| Action | Method | Path | Action id |
|---|---|---|---|
| Run JavaScript Using CustomJS | POST | `/{{scriptId}}` | `conn_mod_def::GMa2rupk3cA::fTwpdysSSaOpFD8Nxojzrg` |

## When a call fails

The error comes from CustomJS, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/custom-js

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
