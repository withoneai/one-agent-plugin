---
name: docuseal
description: DocuSeal is an open-source eSignature and document workflow platform that enables users and developers to send, sign, and manage legally binding documents with customizable templates, API integrations, and self-hosting options for greater control, security, and automation. Read and write Docuseal data through One: templates, submissions, submitters, submissiondocuments and more, 22 actions with real parameter documentation. Use whenever the user asks to look something up in Docuseal, create or update a record there, or build code against the Docuseal API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: docuseal
  generated-from: one-knowledge-base
---

# Docuseal through One

DocuSeal is an open-source eSignature and document workflow platform that enables users and developers to send, sign, and manage legally binding documents with customizable templates, API integrations, and self-hosting options for greater control, security, and automation.

One exposes Docuseal through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `docuseal` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Docuseal is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Docuseal account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template | GET | `/templates/{{id}}` | `conn_mod_def::GKzwkZ9kDhA::0fnIvTkuSjeSKFnO9m1jUg` |
| List Templates | GET | `/templates` | `conn_mod_def::GKzwkbsVPhg::r9_VST6pRPeDsBcev8q-kA` |
| Archive a Template | DELETE | `/templates/{{id}}` | `conn_mod_def::GKzwkP4mzYA::WTpuyj6FTMWcxSSzXCLAkw` |
| Clone a Template | POST | `/templates/{{id}}/clone` | `conn_mod_def::GKzwkPrzvdA::HPJgeO1xRPyiqE_QVw6R-Q` |
| Create a Template from HTML | POST | `/templates/html` | `conn_mod_def::GKzwkQQzihA::zPBqM7dfQraFTe9xLP9uTA` |
| Create a Template From PDF | POST | `/templates/pdf` | `conn_mod_def::GKzwkao97sg::W51j7WOdQPSXgOinKSWo7w` |
| Create a Template From Word DOCX | POST | `/templates/docx` | `conn_mod_def::GKzwkajpV2A::9fDYe5hhQiWRT2wwatXmQA` |
| Merge Templates | POST | `/templates/merge` | `conn_mod_def::GKzwkcldO7A::DR8HBMUkQre20g5Aywr9sA` |
| Update a Template | PUT | `/templates/{{id}}` | `conn_mod_def::GKzwkl6lPJA::2qFWhziTSxWJ3jRgPa2PGw` |
| Update a Template's Documents | PUT | `/templates/{{id}}/documents` | `conn_mod_def::GKzwkle726A::1shfyXRlRjWZtsc0DcFjdA` |

### Submissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Submission | GET | `/submissions/{{id}}` | `conn_mod_def::GKzwkGMa6IA::Rc50Jn1OQfGowwRbu7eZjw` |
| List Submissions | GET | `/submissions` | `conn_mod_def::GKzwkCFEwHA::u5wRT-uzR9me0MQuw93VFw` |
| Archive a Submission | DELETE | `/submissions/{{id}}` | `conn_mod_def::GKzwj0alYAA::Ww6y_NZQTAG7Iyhlvh3efg` |
| Create a PDF Submission | POST | `/submissions/pdf` | `conn_mod_def::GKzwjNiFeWg::TzJKyAf7S2yFzZTNHSlCMw` |
| Create a Submission | POST | `/submissions` | `conn_mod_def::GKzwjJz6nYg::7U8NlOfUR6mTDzTqEmKZIw` |
| Create a Submission From DOCX | POST | `/submissions/docx` | `conn_mod_def::GKzwjKnVgkg::ihw24BYjT_yqsbhxhLVloQ` |
| Create a Submission from HTML | POST | `/submissions/html` | `conn_mod_def::GKzwjLAxf-g::6C6Aeh1ISeu7a0v-prTrcg` |
| Create Submissions From Emails | POST | `/submissions/emails` | `conn_mod_def::GKzwkHzSHUg::1dNa63cDSyCNi4Lec37ySw` |

### Submitters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Submitter | GET | `/submitters/{{id}}` | `conn_mod_def::GKzwj86zwiA::ysMlZGAmTm2385n70NJ6aw` |
| List Submitters | GET | `/submitters` | `conn_mod_def::GKzwkSd_Ydg::xB21_PoLRc-z2wpcGvc1Eg` |
| Update a Submitter | PUT | `/submitters/{{id}}` | `conn_mod_def::GKzwkPzibnA::FiBa3DmfR4yubKmzdOlWUQ` |

### SubmissionDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Submission's Documents | GET | `/submissions/{{id}}/documents` | `conn_mod_def::GKzwj-Mi8bg::FqEYW9uhTZGuam1cvUC0-A` |

## When a call fails

The error comes from Docuseal, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/docuseal

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
