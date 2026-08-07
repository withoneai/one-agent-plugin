---
name: post-grid-verify
description: PostGrid Verify is an address validation API that standardizes, verifies, and enriches postal addresses using global reference data, allowing developers and operations teams to improve deliverability, reduce returned mail, and maintain cleaner customer address records across applications and workflows. Read and write PostGrid Verify data through One: addverlists, addverlistscompletions, addressverifications, addresssuggestions, zipcodes, addverlistsparses and more, 11 actions with real parameter documentation. Use whenever the user asks to look something up in PostGrid Verify, create or update a record there, or build code against the PostGrid Verify API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: post-grid-verify
  generated-from: one-knowledge-base
---

# PostGrid Verify through One

PostGrid Verify is an address validation API that standardizes, verifies, and enriches postal addresses using global reference data, allowing developers and operations teams to improve deliverability, reduce returned mail, and maintain cleaner customer address records across applications and workflows.

One exposes PostGrid Verify through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `post-grid-verify` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm PostGrid Verify is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real PostGrid Verify account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### AddverLists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Lists | GET | `/v1/addver_lists/` | `conn_mod_def::GLopuYM-CXA::WbGiL8uLSAWgMAnXfy3UmQ` |
| Retrieve Addver List | GET | `/v1/addver_lists/{{id}}` | `conn_mod_def::GLopuaRj7Cg::SwpOY1TKRMmz0o3OWvH1wQ` |
| City States Lookup Using Addver Lists | POST | `/v1/addver/city_states` | `conn_mod_def::GLopuhiU20g::B0eWn6A0R6msGSOcJMwL6w` |
| Upload List Using Addver Lists | POST | `/v1/addver_lists/` | `conn_mod_def::GLopuXvgwKA::KCnPiS5WQ5GgMawRk475FA` |

### AddverListsCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Autocomplete Previews Using Addver Lists Completions | GET | `/v1/addver/completions` | `conn_mod_def::GLopugLPwHA::OfroiZNSQxiDhPu9ZtKqWw` |
| Completions Using Addver Lists | POST | `/v1/addver/completions` | `conn_mod_def::GLopuXkd62g::8lpDmCgZQHqCOTD6phHvFQ` |

### AddressVerifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Verify Addresses | POST | `/v1/addver/verifications/batch` | `conn_mod_def::GLopuYII4Og::xxa-6b3lQIC3WPZ2BOb0KQ` |

### AddressSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Suggest Addresses | POST | `/v1/addver/suggestions` | `conn_mod_def::GLopufr0H-A::K5QlUp44TaCBYDuGCegtxg` |

### ZipCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup ZIP Codes From US City/State | POST | `/v1/addver/zip_codes` | `conn_mod_def::GLopuf7MPXg::JpQvUA1sSJSn8U_oHovAZA` |

### AddverListsParses

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse an Address | POST | `/v1/addver/parses` | `conn_mod_def::GLopuiFnnXg::5wppiFACSdiYwKP7usKR7g` |

### AddressVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify a Structured Address | POST | `/v1/addver/verifications` | `conn_mod_def::GLopuo6-jSg::MWjrxtTmTNmhZ9PbiP2scw` |

## When a call fails

The error comes from PostGrid Verify, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/post-grid-verify

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
