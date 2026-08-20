---
name: one-integrations
description: Read and write real data in third-party apps (Gmail, Slack, Stripe, Shopify, HubSpot, QuickBooks, Linear, Notion, Salesforce and 700+ more) through the One MCP server. Use when the user asks to send an email, post a message, look up a customer, pull invoices, create a ticket, sync records, or take any action in an external SaaS app, even if they never say "One".
license: MIT
metadata:
  author: one-systems
  version: "1.0"
---

# Working with third-party apps through One

One exposes every connected app through four tools. No matter how many apps or actions the user has connected, it stays four tools, so search is how you find things rather than reading a giant tool list.

| Tool | What it does |
|------|--------------|
| `list_one_integrations` | Lists platforms and active connections, each stamped with the access it allows |
| `search_one_platform_actions` | Searches actions on one platform |
| `get_one_action_knowledge` | Returns the real documentation for one action: parameters, types, auth, request shape |
| `execute_one_action` | Runs the action against the live account |

## The loop

Follow it in order. Skipping a step is where these calls fail.

1. **List.** Call `list_one_integrations` once at the start of a task. It tells you which platforms the user actually has connected and what you are allowed to run on each.
2. **Search.** Call `search_one_platform_actions` with the platform and a plain description of the outcome ("send an email", "list paid invoices"). Search by what you want to happen, not by an endpoint name you are guessing at.
3. **Read the knowledge.** Call `get_one_action_knowledge` for the action you picked, every time, before you execute it. This is the step agents skip and it is the step that prevents the failure.
4. **Execute.** Call `execute_one_action` with parameters copied from the knowledge.

## Never guess parameters

`get_one_action_knowledge` returns the actual schema: required fields, exact names, types, enum values, where each value belongs (path, query, body, header). Guessing a field name that looks obvious produces a 400 from the platform, or worse, a 200 that wrote the wrong thing.

If a required parameter is missing and you cannot derive it from the conversation or from a previous read call, ask the user for it. Do not invent an id, an email address, an amount, or a date.

## Read the access field before you plan

Each connection in `list_one_integrations` carries an `access` field describing exactly what you may run:

- `{"policy": "full"}` runs every action on that connection.
- `{"policy": "methods", "methods": ["GET"]}` is read-only. Plan a read-only answer and say so rather than attempting a write that will be refused.
- `{"policy": "actions", "actions": [...]}` names the exact allowed actions, with their ids and titles. When you see this, use one of those actions directly. You do not need to search first.

If execution is unavailable entirely, the server is in knowledge-only mode. See the `integration-code` skill: write code instead of running calls.

## Before a write, say what you are about to do

Sends, payments, deletions, and status changes land on real accounts and real people, and they cannot be recalled. Before the first write in a task, state the platform, the action, and the specific target in one line ("Sending to jane@acme.com through Gmail") and let the user stop you. Reads need no confirmation.

Never write to a platform the user did not ask you to touch. Pulling a contact from HubSpot is not permission to update it.

## Getting more back than you expected

List actions are paginated. The knowledge names the parameters (`limit`, `cursor`, `page`, `starting_after`, depending on the platform). Ask for what you need rather than paging the whole account into context. When you are summarizing, fetch a bounded page, summarize that, and tell the user it was a page rather than everything.

## When something is not connected

If a platform is missing from `list_one_integrations`, the user has not connected it. Say which platform is missing and point them at https://app.withone.ai to add it. Do not fall back to a raw HTTP request, a scraped page, or a different platform that happens to be connected.

## When a call fails

The error comes back from the platform, not from One. Read it.

- 400 or 422: your parameters do not match the schema. Re-read the knowledge, fix the field, retry once.
- 401 or 403: the connection lacks permission or needs re-authorizing. Tell the user which platform and stop. Retrying will not help.
- 404: the id does not exist on that account. Verify it with a read call before assuming the action is wrong.
- 429: rate limited. Back off, and if you were in a loop, batch instead.

Report the failure with the platform's own message. Do not retry a write more than once: the first attempt may have succeeded.

## Multiple platforms in one task

Chain reads before writes. Pull from every source first, reconcile in your own reasoning, then write once per target. A per-record read-then-write loop across two platforms is slow and leaves half-finished state when it breaks.

## Setup

The user signs in through their client's OAuth prompt on first connect. There is no API key to paste. The consent screen is where they scope the agent: which connections, read or read-write, or knowledge-only.

Full docs: https://www.withone.ai/docs/mcp
