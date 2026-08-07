---
name: bigquery
description: BigQuery is a serverless, highly scalable, and cost-effective data warehouse designed for running fast SQL queries on large datasets. It enables businesses to analyze data quickly and make informed decisions. Read and write BigQuery data through One: routines, datasets, tables, rowaccesspolicies, jobs, models and more, 47 actions with real parameter documentation. Use whenever the user asks to look something up in BigQuery, create or update a record there, or build code against the BigQuery API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bigquery
  generated-from: one-knowledge-base
---

# BigQuery through One

BigQuery is a serverless, highly scalable, and cost-effective data warehouse designed for running fast SQL queries on large datasets. It enables businesses to analyze data quickly and make informed decisions.

One exposes BigQuery through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bigquery` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BigQuery is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BigQuery account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Routines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dataset Routine | GET | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/routines/{{routineId}}` | `conn_mod_def::GJ6RWiUxNOw::JF9a1HqoQZmA0dkO_8K-Tw` |
| List a Dataset's Routines | GET | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/routines` | `conn_mod_def::GJ6RWjIH6aQ::83ChQuEPTn21glsXG0cZ_g` |
| Create a Dataset Routine | POST | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/routines` | `conn_mod_def::GJ6RWl1QXeQ::Zh23Fy03TpSYbYAvz-5MqA` |
| Delete a Dataset Routine | DELETE | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/routines/{{routineId}}` | `conn_mod_def::GJ6RWgD9qNk::Byeq8dOaQuW3JKPAlsTRHQ` |
| Get a Routine's IAM Policy | POST | `/bigquery/v2/{{resource}}:getIamPolicy` | `conn_mod_def::GJ6RWiW7NKc::EMHmDdU-RU6LrxCzEc53dg` |
| Set IAM Policy for a BigQuery Routine | POST | `/bigquery/v2/{{resource}}:setIamPolicy` | `conn_mod_def::GJ6RWuruqyw::sp-7ibWrT0asrJkaJcOtLw` |
| Test IAM Permissions for a BigQuery Routine | POST | `/bigquery/v2/{{resource}}:testIamPermissions` | `conn_mod_def::GJ6RWupbyZM::IlSH9n06TAqzy4oHJ-IKsg` |
| Update a Dataset Routine | PUT | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/routines/{{routineId}}` | `conn_mod_def::GJ6RWv__y0o::zCBbwdnpS6aoSxiA2BlHXg` |

### Datasets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Dataset | GET | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}` | `conn_mod_def::GJ6RVZ4FxVU::9zhppaEdTx6nq4_gVvqOzA` |
| List a Project's Datasets | GET | `/bigquery/v2/projects/{{projectId}}/datasets` | `conn_mod_def::GJ6RVc7HjE8::0SUGmi0vQB6CJhiHQngBNQ` |
| Create a Project Dataset | POST | `/bigquery/v2/projects/{{projectId}}/datasets` | `conn_mod_def::GJ6RVZTV4Bw::jnQMLqMqQ-WJZQIL1-HyPQ` |
| Delete a Project's Dataset | DELETE | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}` | `conn_mod_def::GJ6RVYG2ulo::l2P_XWXNSS-ZhqvVSFE9Xg` |
| Patch a Project's Dataset | PATCH | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}` | `conn_mod_def::GJ6RVZyh5Q0::LmEq5CLvR0O82ll9aDm53Q` |
| Undelete a Project Dataset | POST | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}:undelete` | `conn_mod_def::GJ6RVlSfuwA::61fv34qOST2hEbvAnX-z2w` |
| Update a Project Dataset | PUT | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}` | `conn_mod_def::GJ6RVl2P1aA::LX0RdPVUSNGkgFBXV2jHRw` |

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Table from a Dataset | GET | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}` | `conn_mod_def::GJ6RXPdZoXo::OIiriG76QrClDCOjzgzgwQ` |
| List a Dataset's Tables | GET | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables` | `conn_mod_def::GJ6RXcQAm_E::6o9PBbIoS9-pqj1MLb4MQw` |
| Create a Dataset Table | POST | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables` | `conn_mod_def::GJ6RXb6uEzM::sBydTgVOSo--P_c54vjLFw` |
| Delete a Dataset Table | DELETE | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}` | `conn_mod_def::GJ6RXNfp1S0::UMuTzXPcSEueeX083m0lVw` |
| Patch a Table in a Dataset | PATCH | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}` | `conn_mod_def::GJ6RXcUBGLc::q9nwkmsxRnioXLI8Me034A` |
| Test IAM Permissions for a BigQuery Table | POST | `/bigquery/v2/{{resource}}:testIamPermissions` | `conn_mod_def::GJ6RXrHMbbA::iys7MxY3T-6PGEQce7ud_w` |
| Update a Project Dataset Table | PUT | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}` | `conn_mod_def::GJ6RXm12J7E::q0ABjtJwQVigJRFj2MGbsA` |

### RowAccessPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Table Row Access Policy | GET | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}/rowAccessPolicies/{{policyId}}` | `conn_mod_def::GJ6RXDnjSCc::Z0bj1vQRRZysYmq4GCpDKw` |
| List a Table's Row Access Policies | GET | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}/rowAccessPolicies` | `conn_mod_def::GJ6RXEw2720::_QILxgTDQgSFSKLRX2D71A` |
| Batch Delete a Table's Row Access Policies | POST | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}/rowAccessPolicies:batchDelete` | `conn_mod_def::GJ6RW66LMjE::cEFGBau9SmaK-qPr2jthog` |
| Create a Table Row Access Policy | POST | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}/rowAccessPolicies` | `conn_mod_def::GJ6RXD9Ejus::FnKF6UcNSVugiuqoiFwFig` |
| Delete a Table Row Access Policy | DELETE | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}/rowAccessPolicies/{{policyId}}` | `conn_mod_def::GJ6RWu_nIqU::4gng_DtcTKWGLGA8AbI_Ug` |
| Test IAM Permissions for a BigQuery Row Access Policy | POST | `/bigquery/v2/{{resource}}:testIamPermissions` | `conn_mod_def::GJ6RXDaO4cA::xjCODBVRR0CBztUVVNDp9Q` |
| Update a Table Row Access Policy | PUT | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}/rowAccessPolicies/{{policyId}}` | `conn_mod_def::GJ6RXO_dMBo::EDdw8R1wTJ2HxupMlrbJsg` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Job | GET | `/bigquery/v2/projects/{{projectId}}/jobs/{{jobId}}` | `conn_mod_def::GJ6RVliazl8::3NY84fssS1Sf1w7Ryi4V0Q` |
| List a Project's Jobs | GET | `/bigquery/v2/projects/{{projectId}}/jobs` | `conn_mod_def::GJ6RV5NYH3M::5NYm3yagTtmDG3F0S9U9rQ` |
| Cancel a Project Job | POST | `/bigquery/v2/projects/{{projectId}}/jobs/{{jobId}}/cancel` | `conn_mod_def::GJ6RVlig7D8::DVbo2qIjT3SRud231ngyuA` |
| Delete a BigQuery Project Job's Metadata | DELETE | `/bigquery/v2/projects/{{projectId}}/jobs/{{jobId}}/delete` | `conn_mod_def::GJ6RVtuxck4::aXQuymYVRe2IqYjqGCBHLQ` |
| Insert a Project Job | POST | `/bigquery/v2/projects/{{projectId}}/jobs` | `conn_mod_def::GJ6RV2Jk_hI::X_2I7oFASlylcRrVETEPQg` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dataset Model | GET | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/models/{{modelId}}` | `conn_mod_def::GJ6RWCpq1yo::lbqrvDkOQgS-PswjG2t4nw` |
| List a Dataset's Models | GET | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/models` | `conn_mod_def::GJ6RWD5FbME::VkllI9ljTJiLTwHZZL3OBA` |
| Delete a Dataset Model | DELETE | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/models/{{modelId}}` | `conn_mod_def::GJ6RV1vOiTA::Dd99nl_DTxSETl5Uy4gSWw` |
| Patch a BigQuery Project Dataset Model | PATCH | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/models/{{modelId}}` | `conn_mod_def::GJ6RWC9D11Q::zmy-h5dxRmmz5dOOebUBYw` |

### TableData

| Action | Method | Path | Action id |
|---|---|---|---|
| List Rows From a BigQuery Table | GET | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}/data` | `conn_mod_def::GJ6RXQuZCPw::BDzLbIa7SpuUYrYS24AGBw` |
| Stream Rows Into a BigQuery Table | POST | `/bigquery/v2/projects/{{projectId}}/datasets/{{datasetId}}/tables/{{tableId}}/insertAll` | `conn_mod_def::GJ6RXScUTSg::Lnt3KplMSCacLghVQdRUfA` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's BigQuery Service Account | GET | `/bigquery/v2/projects/{{projectId}}/serviceAccount` | `conn_mod_def::GJ6RWCvSsoA::PQmcxEK9QFe7PrxCEzk8Ww` |
| List BigQuery Projects | GET | `/bigquery/v2/projects` | `conn_mod_def::GJ6RWXiCBl4::qud-ffPGQ3SDg9M_S34XMw` |

### Queries

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Project Query Synchronously | POST | `/bigquery/v2/projects/{{projectId}}/queries` | `conn_mod_def::GJ6RV3Wlzc8::qxaXhFkrS7G7GftE1xTOYw` |

### QueryResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Query Results for a Project Job | GET | `/bigquery/v2/projects/{{projectId}}/queries/{{jobId}}` | `conn_mod_def::GJ6RV6MJjus::ulX_rOH4RjObvHjyAEwgfg` |

### TableIamPolicy

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a Table IAM Policy | POST | `/bigquery/v2/{{resource}}:setIamPolicy` | `conn_mod_def::GJ6RXbOr3_s::7DanbuDnTOi7iBbq6fUbyA` |

### TableIamPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Table IAM Policy | POST | `/bigquery/v2/{{resource}}:getIamPolicy` | `conn_mod_def::GJ6RXbjGL-A::uVeuZRxEQh6pvXQ3bfQFOw` |

### RowAccessPolicyIamPolicy

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Row Access Policy IAM Policy | POST | `/bigquery/v2/{{resource}}:getIamPolicy` | `conn_mod_def::GJ6RXDwyDa0::rvejgv1fT5OOai7Kod-BWA` |

## When a call fails

The error comes from BigQuery, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bigquery

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
