---
name: mixpanel-service-accounts
description: Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions. Read and write Mixpanel Service Accounts data through One: serviceaccounts, users and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Mixpanel Service Accounts, create or update a record there, or build code against the Mixpanel Service Accounts API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mixpanel-service-accounts
  generated-from: one-knowledge-base
---

# Mixpanel Service Accounts through One

Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions.

One exposes Mixpanel Service Accounts through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mixpanel-service-accounts` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mixpanel Service Accounts is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mixpanel Service Accounts account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ServiceAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization’s Service Account | GET | `/organizations/{{organizationId}}/service-accounts/{{serviceAccountId}}` | `conn_mod_def::GJ4-70vrhMo::tvlwlIu-RLOkBmikM0zcdw` |
| List a Project’s Service Accounts | GET | `/projects/{{projectId}}/service-accounts` | `conn_mod_def::GJ4-7mcRBms::5y5eAqPATGmp3XHP9o7VNg` |
| List an Organization’s Service Accounts | GET | `/organizations/{{organizationId}}/service-accounts` | `conn_mod_def::GJ4-70L3hJk::rzk1ZnHnSU2Oaw0s76su1g` |
| Add Service Accounts to an Organization’s Projects | POST | `/organizations/{{organizationId}}/service-accounts/add-to-project` | `conn_mod_def::GJ4-7stLUzE::9RQA3LGoTv2p6WVPEtCZTQ` |
| Create a Service Account for an Organization | POST | `/organizations/{{organizationId}}/service-accounts` | `conn_mod_def::GJ4-7n__8HY::He3XAL3XShCCB5XgcjaTtQ` |
| Delete an Organization’s Service Account | DELETE | `/organizations/{{organizationId}}/service-accounts/{{serviceAccountId}}` | `conn_mod_def::GJ4-7nTqO9M::-xJkbL09RLS4pNHLWvjBzA` |
| Remove Service Accounts From an Organization’s Projects | POST | `/organizations/{{organizationId}}/service-accounts/remove-from-project` | `conn_mod_def::GJ4-7nDcebg::FiEwq-_-S1mbVhcE1M-BZg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/api/app/me` | `conn_mod_def::GJ4-70a7J3I::wFD8xfzjQcC5QnI_4gOT5w` |

## When a call fails

The error comes from Mixpanel Service Accounts, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mixpanel-service-accounts

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
