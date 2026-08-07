---
name: memberstack
description: Memberstack is a membership platform that adds authentication, user logins, Stripe billing, and gated content to Webflow, WordPress, and other websites, allowing builders to launch membership sites quickly without building account management, payments, or access controls from scratch. Read and write Memberstack data through One: members, datatablerecords, datatables and more, 14 actions with real parameter documentation. Use whenever the user asks to look something up in Memberstack, create or update a record there, or build code against the Memberstack API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: memberstack
  generated-from: one-knowledge-base
---

# Memberstack through One

Memberstack is a membership platform that adds authentication, user logins, Stripe billing, and gated content to Webflow, WordPress, and other websites, allowing builders to launch membership sites quickly without building account management, payments, or access controls from scratch.

One exposes Memberstack through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `memberstack` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Memberstack is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Memberstack account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Member by ID or Email | GET | `/members/{{idOrEmail}}` | `conn_mod_def::GMTY0uvA_-g::xI2b-O4oQxGeKhrsW95LoQ` |
| List Members | GET | `/members` | `conn_mod_def::GMTY03izWfA::JaDe-fZtQueURJDMwbhy2A` |
| Add a Free Plan to a Member | POST | `/members/{{id}}/add-plan` | `conn_mod_def::GMTY0vSeFqA::_FZQmXQwTAiTp7ZwjtGaug` |
| Create a Member | POST | `/members` | `conn_mod_def::GMTY0uJUzHg::4egtro9eTJyLE_Urwxf6gw` |
| Delete a Member Permanently | DELETE | `/members/{{id}}` | `conn_mod_def::GMTY0uLH2Zg::Ao-9xW2tSK-XLj-T6YwzlA` |
| Remove a Free Plan from a Member | POST | `/members/{{id}}/remove-plan` | `conn_mod_def::GMTY016dgpg::onsu6jneRzGg1RlKyV1J5A` |
| Update a Member | PATCH | `/members/{{id}}` | `conn_mod_def::GMTY02uiMpA::q9TOBxalSh6JnTDP_SFgPw` |
| Verify Member Token | POST | `/members/verify-token` | `conn_mod_def::GMTY02oZvdA::b_WF4sUzRMmGulNiuOYDUQ` |

### DataTableRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Record in a Data Table | POST | `/v2/data-tables/{{tableKey}}/records` | `conn_mod_def::GMTY0oFTaNA::725lP6d1QfWaLqSkCsLENQ` |
| Delete a Data Table Record | DELETE | `/v2/data-tables/{{tableKey}}/records/{{recordId}}` | `conn_mod_def::GMTY0nbQ-tA::MTOlfTtoQOmGLQ3nCGdyoA` |
| Query Data Table Records | POST | `/v2/data-tables/{{tableKey}}/records/query` | `conn_mod_def::GMTY0m6cQag::WGhzUCluRuKyxDWbzBD0yg` |
| Update a Data Table Record | PUT | `/v2/data-tables/{{tableKey}}/records/{{recordId}}` | `conn_mod_def::GMTY0u1uPqA::4DzykNs5QSCwJswyOCOHiA` |

### DataTables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Data Table by Key or ID | GET | `/v2/data-tables/{{tableKey}}` | `conn_mod_def::GMTY0nm8ELg::uHOjdYVQSj-ZjWdIJKalMg` |
| List Data Tables | GET | `/v2/data-tables` | `conn_mod_def::GMTY0mS2s9A::Ol9DbQWdQriUfN_zgg151g` |

## When a call fails

The error comes from Memberstack, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/memberstack

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
