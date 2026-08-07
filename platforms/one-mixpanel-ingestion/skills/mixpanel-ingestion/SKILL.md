---
name: mixpanel-ingestion
description: Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions. Read and write Mixpanel Ingestion data through One: groups, engageprofiles, profiles, groupprofiles, events, lookuptables and more, 21 actions with real parameter documentation. Use whenever the user asks to look something up in Mixpanel Ingestion, create or update a record there, or build code against the Mixpanel Ingestion API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mixpanel-ingestion
  generated-from: one-knowledge-base
---

# Mixpanel Ingestion through One

Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions.

One exposes Mixpanel Ingestion through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mixpanel-ingestion` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mixpanel Ingestion is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mixpanel Ingestion account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Group Property (Unset) | POST | `/groups#group-unset` | `conn_mod_def::GJ4-LO8F-Ik::fL03jg6PT2-5WVOmj0xhfg` |
| Remove a Value From a Group’s List Property | POST | `/groups#group-remove-from-list` | `conn_mod_def::GJ4-LX_nX-s::D7ahEkdRRfawfQ_jAqCjRA` |
| Set Group Property Once | POST | `/groups` | `conn_mod_def::GJ4-LXW7aeI::FnkSy4ZBQNycKX9PDYNxXw` |
| Union to a Group Profile’s List Property | POST | `/groups` | `conn_mod_def::GJ4-LYDk29c::SuNl-mINQb65qZBbnHnv9g` |
| Update a Group Profile’s Properties (Set) | POST | `/groups#group-set` | `conn_mod_def::GJ4-LcqbTB0::0qIH08TfTYmAhPHgrPd3kQ` |

### EngageProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Mixpanel Profile (Engage) | POST | `/engage#profile-delete` | `conn_mod_def::GJ4-LwD5kcE::YJWz7-GdRPapeCLxulGd8Q` |
| Increment a User Profile’s Numerical Properties (Add) | POST | `/engage#profile-numerical-add` | `conn_mod_def::GJ4-L5qHYqU::vrc6QzzhTpuaT8HlGSpFOg` |
| Set a Mixpanel Profile Property Once (Engage) | POST | `/engage#profile-set-once` | `conn_mod_def::GJ4-L48Pj74::NFYT5fHqSJqc_Vkr-zp-Ig` |
| Set Profile Properties (Engage Profile Set) | POST | `/engage#profile-set` | `conn_mod_def::GJ4-L4x_E8I::-KGL5a9xQd64RItDiNhl0g` |
| Union Values Into a User Profile’s List Property | POST | `/engage#profile-union` | `conn_mod_def::GJ4-L5SWJVc::llaxn-i7Qty_LpdmjVXYMQ` |

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Append to a Profile’s List Property | POST | `/engage#profile-list-append` | `conn_mod_def::GJ4-LmV-Vmc::ivpuLyz3QIWmRhzzGmRZhA` |
| Delete a Profile Property (Unset) | POST | `/engage#profile-unset` | `conn_mod_def::GJ4-LlBEQBg::2TTU-5_VRc-d1Gq561-_nA` |
| Update Multiple Profiles (Batch Profile Update) | POST | `/engage#profile-batch-update` | `conn_mod_def::GJ4-MDgc584::G75FXXiDSR-NjfZ5iwxOWQ` |

### GroupProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Update Group Profiles | POST | `/groups` | `conn_mod_def::GJ4-LNSArkM::_QyONqVwR8ewFP02XY_NpA` |
| Delete a Group Profile | POST | `/groups#group-delete` | `conn_mod_def::GJ4-LNwH6OI::_XIbaOiHR6qoXb11LZKhIA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Import Events into a Mixpanel Project | POST | `/import` | `conn_mod_def::GJ4-LNyuZmo::IsYg5nj3QqqKN4z5VaiszQ` |
| Track Events (Ingestion) | POST | `/track` | `conn_mod_def::GJ4-LOG66XE::B5hZS_-SR9-hsiguR9ppFA` |

### LookupTables

| Action | Method | Path | Action id |
|---|---|---|---|
| List Lookup Tables | GET | `/lookup-tables` | `conn_mod_def::GJ4-LZkPS2s::8Mz006lgTJa8KfadWUCqYQ` |
| Replace a Lookup Table | PUT | `/lookup-tables/{{id}}` | `conn_mod_def::GJ4-LoO6_fY::-8-94JTHTh6caSd642bKfg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/api/app/me` | `conn_mod_def::GJ4-LkM8XlY::tHYZUCfIQr-n3sUXC48UYg` |

### UserProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a Value From a User Profile List Property | POST | `/engage#profile-list-remove` | `conn_mod_def::GJ4-L5DqxH4::MSnZyTDpRkaDaWyILPfviA` |

## When a call fails

The error comes from Mixpanel Ingestion, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mixpanel-ingestion

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
