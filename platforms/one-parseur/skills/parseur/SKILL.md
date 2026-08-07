---
name: parseur
description: Parseur is a document processing and data extraction platform that uses AI and OCR to parse emails, PDFs, and attachments into structured data, allowing teams to automate data entry and connect extracted information to downstream systems and workflows. Read and write Parseur data through One: documents, mailbox, customdownloads, templates, mailboxes, webhook and more, 29 actions with real parameter documentation. Use whenever the user asks to look something up in Parseur, create or update a record there, or build code against the Parseur API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: parseur
  generated-from: one-knowledge-base
---

# Parseur through One

Parseur is a document processing and data extraction platform that uses AI and OCR to parse emails, PDFs, and attachments into structured data, allowing teams to automate data entry and connect extracted information to downstream systems and workflows.

One exposes Parseur through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `parseur` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Parseur is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Parseur account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Documents in a Mailbox | GET | `/parser/{{id}}/document_set` | `conn_mod_def::GLS0LkQvuLA::ujBPdygzSeOG1LVqG2JgSQ` |
| Copy a Document to a Target Mailbox | POST | `/document/{{id}}/copy/{{targetMailboxId}}` | `conn_mod_def::GLS0K--uCHA::uo3GtGfUQkKDbY4_koqlEg` |
| Delete a Document | DELETE | `/document/{{id}}` | `conn_mod_def::GLS0LPH8d6A::kwsC2I1yR1-cMBNtRro_kQ` |
| Reprocess a Document | POST | `/document/{{id}}/process` | `conn_mod_def::GLS0K_OoGXA::sQDbQbWjT1SPmhc23jNTAw` |
| Skip a Document | POST | `/document/{{id}}/skip` | `conn_mod_def::GLS0Ls3cu1g::2WxQZC2nSGuopGdZ888G-w` |

### Mailbox

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Mailbox | GET | `/parser/{{id}}` | `conn_mod_def::GLS0LYtc3yA::PCfHRmOWTg6y2YQUfC8N8w` |
| Create Mailbox | POST | `/parser` | `conn_mod_def::GLS0LIInwmg::Th1NOvcDQ7WwEiARcXqAGg` |
| Delete a Mailbox | DELETE | `/parser/{{id}}` | `conn_mod_def::GLS0K_bKBmg::KFlGwll3QVKQmpsQbfRyfQ` |
| Update a Mailbox | PUT | `/parser/{{id}}` | `conn_mod_def::GLS0LtcjUeA::zcUMiBPCTnujZ1GbquPleQ` |

### CustomDownloads

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Downloads for a Parser | GET | `/parser/{{id}}/export_config` | `conn_mod_def::GLS0LhrKsNg::vlscVIMEQDCYgghlobUJAw` |
| Delete a Custom Download for a Parser | DELETE | `/parser/{{mailboxId}}/export_config/{{id}}` | `conn_mod_def::GLS0LPlSmGg::reJkMc6FTxCOqnq5aEYxAA` |
| Update a Custom Download for a Mailbox | PATCH | `/parser/{{mailboxId}}/export_config/{{id}}` | `conn_mod_def::GLS0Lt2-plg::Y6xEgRwnRa-xBRlmj_QCcQ` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List templates in a mailbox | GET | `/parser/{{id}}/template_set` | `conn_mod_def::GLS0LtOzJag::zLNmZdxYQqOy1bnJZokHpQ` |
| Copy a Template to a Target Mailbox | POST | `/template/{{id}}/copy/{{targetMailboxId}}` | `conn_mod_def::GLS0K_bGJjg::cjIS1T7GTfefICpSMzvhRg` |
| Delete a Template | DELETE | `/template/{{id}}` | `conn_mod_def::GLS0LO3SZZA::co3ME7f4Rb-5-NVuimouXA` |

### Mailboxes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Mailboxes | GET | `/parser` | `conn_mod_def::GLS0Lkl3NSg::Y3pLPPvlRYS1eP77COvHFA` |
| Copy a Mailbox | POST | `/parser/{{id}}/copy` | `conn_mod_def::GLS0K_vE-SA::r7gPRgbbSjSaD2gLVgloow` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Webhook | POST | `/webhook` | `conn_mod_def::GLS0LHNpJaA::BMMV4UJrSWug0vTQd2GBGg` |
| Delete a Webhook | DELETE | `/webhook/{{id}}` | `conn_mod_def::GLS0LOvD9_A::j3YxI3K2TVemthq3VCcAvQ` |

### MailboxSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Mailbox Schema | GET | `/parser/{{id}}/schema` | `conn_mod_def::GLS0LhjuocA::Fzv3WV4bRcSztGYm5_sGow` |

### DocumentLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Document Logs | GET | `/document/{{id}}/log_set` | `conn_mod_def::GLS0LiBxDmA::33NSq4ZmQqWI17QDdF3m4g` |

### ParserWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Disable a Parser Webhook | DELETE | `/parser/{{mailboxId}}/webhook_set/{{id}}` | `conn_mod_def::GLS0LP6uYDA::OPOxe1cUQOiqlLu2_CcbPg` |

### Template

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template | GET | `/template/{{id}}` | `conn_mod_def::GLS0LX85_8A::k-skFhqhTKatHTNPnfN70g` |

### BootstrapConfig

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bootstrap Config | GET | `/bootstrap` | `conn_mod_def::GLS0LYih1gA::vfpvj1mZRNij6EyDHyLLWA` |

### Document

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document | GET | `/document/{{id}}` | `conn_mod_def::GLS0LYtHxMg::7CkwXJDgTB6itQyM3RhoNA` |

### Parser

| Action | Method | Path | Action id |
|---|---|---|---|
| Enable a Webhook for a Parser | POST | `/parser/{{mailboxId}}/webhook_set/{{id}}` | `conn_mod_def::GLS0LaBJk4g::OEc33welSJWqR3ciVjxkNA` |

### ExportConfig

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Config Using Parser | POST | `/parser/{{id}}/export_config` | `conn_mod_def::GLS0LHNO6sg::LggPmnQGTYuVlPpO7BtNuQ` |

### EmailDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload an Email or Text Document | POST | `/email` | `conn_mod_def::GLS0LHzWqQA::pn__L7oHT5WMZJXBpw9bPw` |

### ParserUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a Binary Document to a Parser | POST | `/parser/{{id}}/upload` | `conn_mod_def::GLS0LH__MWA::unRj_xDrRVWVqmQGzZuAjQ` |

## When a call fails

The error comes from Parseur, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/parseur

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
