---
name: loops
description: Loops is a modern email marketing and automation platform designed for developers and product-led companies, focusing on simplicity, speed, and real-time user event triggers. Read and write Loops data through One: contacts, contactproperties, transactionalemails, apikey, lists, events and more, 12 actions with real parameter documentation. Use whenever the user asks to look something up in Loops, create or update a record there, or build code against the Loops API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: loops
  generated-from: one-knowledge-base
---

# Loops through One

Loops is a modern email marketing and automation platform designed for developers and product-led companies, focusing on simplicity, speed, and real-time user event triggers.

One exposes Loops through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `loops` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Loops is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Loops account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Contact | GET | `/contacts/find` | `conn_mod_def::GJ40RqROcUE::Xng9E4f9RVacUnsDcGVsyQ` |
| Create a Contact | POST | `/api/v1/contacts/create` | `conn_mod_def::GJ40RZenIGw::B4EC_53eQaeDg1CZPRYk4w` |
| Delete a Contact | POST | `/contacts/delete` | `conn_mod_def::GJ40RZ4iMjI::iSMEbV_TSI6bN_OLVmosEQ` |
| Update a Contact | PUT | `/contacts/update` | `conn_mod_def::GJ40RqN_GSU::-OZPfvMnTiOR7aDmYoWMZw` |

### ContactProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Properties | GET | `/contacts/properties` | `conn_mod_def::GJ40RiYdjNk::l63HVQHKSnKRnX7kLxBmyg` |
| Create a Contact Property | POST | `/contacts/properties` | `conn_mod_def::GJ40RYRnO6c::i38LF7ASTquxejURlaHtBQ` |

### TransactionalEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transactional Emails | GET | `/api/v1/transactional` | `conn_mod_def::GJ40R5IZ8Q4::0RGMRplHSMuoJVHpS1mTCg` |
| Send a Transactional Email to a Contact | POST | `/transactional` | `conn_mod_def::GJ40R42agVA::1KvEwLJtTHeb6RIO_SRQYg` |

### ApiKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Test an API Key | GET | `/api/v1/api-key` | `conn_mod_def::GJ40RYu9etA::4ACkWdwqQFyQO8K5BnwsLA` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Mailing Lists | GET | `/lists` | `conn_mod_def::GJ40RqAUUZs::HOMU18-4Qq2OxfR8kH6dxQ` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an Event | POST | `/api/v1/events/send` | `conn_mod_def::GJ40RwgzTgE::YpqPJfFURv6sMLdFtu2mrQ` |

### DedicatedSendingIps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Dedicated Sending IP Addresses | GET | `/dedicated-sending-ips` | `conn_mod_def::GJ40RqZbp_M::mKrHftyuSlWkrPXRk_V0EQ` |

## When a call fails

The error comes from Loops, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/loops

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
