---
name: nango
description: Nango is a developer integration platform that provides unified APIs, OAuth connection management, and sync infrastructure for third-party SaaS integrations, allowing engineering teams to authenticate users, access external data, and build product integrations without maintaining provider-specific auth and API logic. Read and write Nango data through One: connections, integrations, proxy, functions, sync, connection and more, 52 actions with real parameter documentation. Use whenever the user asks to look something up in Nango, create or update a record there, or build code against the Nango API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: nango
  generated-from: one-knowledge-base
---

# Nango through One

Nango is a developer integration platform that provides unified APIs, OAuth connection management, and sync infrastructure for third-party SaaS integrations, allowing engineering teams to authenticate users, access external data, and build product integrations without maintaining provider-specific auth and API logic.

One exposes Nango through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `nango` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Nango is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Nango account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Connections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connection | GET | `/connections/{{connectionId}}` | `conn_mod_def::GMTdhiVAxUg::TeJHT2DWTzOgqvCY2zN8nw` |
| List Connections | GET | `/connections` | `conn_mod_def::GMTdh8Ncbag::STzj652JT7-dhA-J5pG9fw` |
| List Connections | GET | `/connection` | `conn_mod_def::GMTdiDqZprA::3PX9nE3QT_OVTArSxyoWUA` |
| Delete a Connection | DELETE | `/connection/{{connectionId}}` | `conn_mod_def::GMTdhR0xteg::J_mI7QXxTK-MNYnqQC1Ldg` |
| Delete a Connection | DELETE | `/connections/{{connectionId}}` | `conn_mod_def::GMTdhStnPPA::OAp3qlNrR_i68ttd-3ulXQ` |
| Edit a Connection | PATCH | `/connections/{{connectionId}}` | `conn_mod_def::GMTdhadLRaA::KOCqGkwMQG2khzn6LzXx6g` |
| Edit Connection Metadata | PATCH | `/connections/metadata` | `conn_mod_def::GMTdhhAipIg::5V10MBE8RqCHcCIjUkmEGQ` |
| Set Connection Metadata | POST | `/connections/metadata` | `conn_mod_def::GMTdibM0NEA::Xp4xP3WaRayX2_QLh8s1ug` |
| Upsert a Connection | POST | `/connections` | `conn_mod_def::GMTdiiuLiAg::NYJBd7xbSgiefXseCrPKKA` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Function's Source Code for an Integration | GET | `/integrations/{{uniqueKey}}/functions/{{name}}/code` | `conn_mod_def::GMTdhoiixaA::kbTKY5ZOTbGq7gvtSma14Q` |
| Get an Integration | GET | `/integrations/{{uniqueKey}}` | `conn_mod_def::GMTdhpAu6og::gfKxqdkbTAWKLP8imH7Cdg` |
| List Integrations | GET | `/integrations` | `conn_mod_def::GMTdiL13qlA::nRE2jbYaSMa0YqnaKsOsEg` |
| Create a Quickstart Integration | POST | `/integrations/quickstart` | `conn_mod_def::GMTdhKOaDjg::yZH1t4T_RHG7r4rMJiHvCA` |
| Create an Integration | POST | `/integrations` | `conn_mod_def::GMTdhLr7h3g::F7E80gMLQYeUJS3UGWQqIA` |
| Delete a Function for an Integration | DELETE | `/integrations/{{uniqueKey}}/functions/{{name}}` | `conn_mod_def::GMTdhSn0pdg::ntxOH-VBSq-gexz-eGusbg` |
| Delete an Integration | DELETE | `/integrations/{{uniqueKey}}` | `conn_mod_def::GMTdhZOxogA::a4IEkG5kSMOL-lxkHirhhw` |
| Edit an Integration | PATCH | `/integrations/{{uniqueKey}}` | `conn_mod_def::GMTdhha8xGg::tyhWp8lTQJ-hN7J3OJfe0A` |

### Proxy

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete via Proxy | DELETE | `/proxy/{{anyPath}}` | `conn_mod_def::GMTdiMAStAg::wx0NyhbHQOKtyYIS6xxamw` |
| Patch a Proxy Path | PATCH | `/proxy/{{anyPath}}` | `conn_mod_def::GMTdiTyZWaA::gXAK3qtWQQqc0QzNyZ9Y9w` |
| Post to Any Proxy Path | POST | `/proxy/{{anyPath}}` | `conn_mod_def::GMTdiTD6JUg::C_XI6G9PSKmv4SS-zlMvfg` |
| Put to Any Proxy Path | PUT | `/proxy/{{anyPath}}` | `conn_mod_def::GMTdiULmT5g::LnnoOlxyQyCotd9Ndd4b4A` |

### Functions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Function for an Integration | GET | `/integrations/{{uniqueKey}}/functions/{{name}}` | `conn_mod_def::GMTdhoaarRg::MI-DaKL4Rmu8e-UBC-SbOA` |
| Compile a Function | POST | `/functions/compile` | `conn_mod_def::GMTdhKO15yA::aEPdOX35QgCyxeuCkM0x1w` |
| Dry Runs a Function | POST | `/functions/dryruns` | `conn_mod_def::GMTdhY7Z02A::6aOUjxyCQXOoPVZwGStXOw` |

### Sync

| Action | Method | Path | Action id |
|---|---|---|---|
| Pause a Sync | POST | `/sync/pause` | `conn_mod_def::GMTdiLZ8liA::tE_Yw2IjQ82xxlcYcjsgQQ` |
| Start a Sync | POST | `/sync/start` | `conn_mod_def::GMTdibL_Dsg::2gqWPGazRtKC10566JLfRA` |
| Trigger a Sync | POST | `/sync/trigger` | `conn_mod_def::GMTdicMJbUA::Yvm1V-OdTM-JltMDez6coA` |

### Connection

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connection Using Connection ID | GET | `/connection/{{connectionId}}` | `conn_mod_def::GMTdhhwZHLg::HVFYk6n7RiWUDzViMT9w9Q` |
| Add a Connection | POST | `/connection` | `conn_mod_def::GMTdhLS6ZNg::Djq9gK7ES3CXsLb4_aI69A` |

### SyncVariants

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Sync Variant | POST | `/sync/{{name}}/variant/{{variant}}` | `conn_mod_def::GMTdhR0nytg::B3Su1YjkTCOUEki6auHQTg` |
| Delete a Sync Variant | DELETE | `/sync/{{name}}/variant/{{variant}}` | `conn_mod_def::GMTdhZsMEFg::a98LQxmdR6qrtDBJyylG-w` |

### ConnectSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Connect Session | POST | `/connect/sessions` | `conn_mod_def::GMTdhSRu94A::EoGINuikTvKzVG5ptIZUSw` |
| Reconnect a Connect Session | POST | `/connect/sessions/reconnect` | `conn_mod_def::GMTdiSs0aIA::mOsAJUlgRmGRd91oWsQYsg` |

### ConnectSession

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Connect Session | GET | `/connect/session` | `conn_mod_def::GMTdhwW5aoA::b04KY88YTfKhpIIdxdyf0g` |
| Delete Connect Session | DELETE | `/connect/session` | `conn_mod_def::GMTdhaGDSqA::XuqzMmHaTWyoKsK53CuhkA` |

### ConnectionMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit Connection Metadata | PATCH | `/connection/metadata` | `conn_mod_def::GMTdhhoLGJA::wAVWsRojTea5JH4KrYmuNA` |
| Set Connection Metadata | POST | `/connection/metadata` | `conn_mod_def::GMTdibM0btg::WHT_nw15SQ2id5hqIcM4RA` |

### Providers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Provider | GET | `/providers/{{provider}}` | `conn_mod_def::GMTdhoH3HXg::9cmNRdcrRkiUDp98IqjCbg` |
| List All Providers | GET | `/providers` | `conn_mod_def::GMTdh-WbZWg::mbHozBP8QfWYFiCYYUOXRA` |

### Records

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Synced Records | GET | `/records` | `conn_mod_def::GMTdiD-SzHg::ZNPjxoQRQu20Xgb7TUjXFw` |
| Prune Records | PATCH | `/records/prune` | `conn_mod_def::GMTdiSjgBLg::egIBvtykQ1mQZx5jpC9hUg` |

### FunctionDeployments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Function Deployment | POST | `/functions/deployments` | `conn_mod_def::GMTdhKN49ZA::tm9XcrfoRHmNDh23MEwgTQ` |

### ProviderTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Provider Templates | GET | `/providers/{{provider}}/templates` | `conn_mod_def::GMTdiK8hovg::4sCML4GYRymxS--ZNuhd9g` |

### ActionResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Action Result | GET | `/action/{{actionId}}` | `conn_mod_def::GMTdhoZvauA::enb4xZjNTTGitzppek7vZw` |

### DryRunResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dry Run Results | GET | `/functions/dryruns/{{id}}` | `conn_mod_def::GMTdhuwPKiA::NJLz8meoTiOtNZYqiBDfVw` |

### ScriptsConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Scripts Configuration | GET | `/scripts/config` | `conn_mod_def::GMTdhvO2WOg::wdAH0LpXRKOBxgO0S3t1BQ` |

### SyncStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sync Status | GET | `/sync/status` | `conn_mod_def::GMTdhv21BHA::HktYZ9j-TcKhLp1myEOF_Q` |

### EnvironmentVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Environment Variables | GET | `/environment-variables` | `conn_mod_def::GMTdh1fm6Cg::rYkoRIwXRlKvXZSfu176Ow` |

### IntegrationFunctions

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Integration's Functions | GET | `/integrations/{{uniqueKey}}/functions` | `conn_mod_def::GMTdh8jiXmg::rqaaz7gCQmWFtbMetFaB9w` |

### ProxyResource

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Proxy Resource | GET | `/proxy/{{anyPath}}` | `conn_mod_def::GMTdiLexl5g::kpV9uqKkSSiNWP6STaoaDg` |

### Actions

| Action | Method | Path | Action id |
|---|---|---|---|
| Trigger an Action | POST | `/action/trigger` | `conn_mod_def::GMTdibPWBgg::o-Yfm8CKQgq3FIjbVh3NmA` |

### ConnectionFrequency

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Connection Frequency | PUT | `/sync/update-connection-frequency` | `conn_mod_def::GMTdii3yajA::lBJVXqcWQYWi61FM2iCUkA` |

## When a call fails

The error comes from Nango, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/nango

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
