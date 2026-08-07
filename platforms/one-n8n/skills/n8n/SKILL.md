---
name: n8n
description: n8n is an open-source workflow automation platform that lets you connect apps and services to automate repetitive tasks, build custom data pipelines, and streamline business processes without writing extensive code. Read and write n8n data through One: workflows, executions, credentials, projects, datatablerows, datatables and more, 59 actions with real parameter documentation. Use whenever the user asks to look something up in n8n, create or update a record there, or build code against the n8n API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: n8n
  generated-from: one-knowledge-base
---

# n8n through One

n8n is an open-source workflow automation platform that lets you connect apps and services to automate repetitive tasks, build custom data pipelines, and streamline business processes without writing extensive code.

One exposes n8n through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `n8n` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm n8n is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real n8n account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workflows | GET | `/api/v1/workflows` | `conn_mod_def::GJ5A0vdlNSw::JJxjw-PTTjC2ohlkevWC9A` |
| Retrieve a Workflow | GET | `/api/v1/workflows/{{id}}` | `conn_mod_def::GJ5A0qRuJGk::imLCW9DeTx297_0WRvJOYA` |
| Create a Workflow | POST | `/api/v1/workflows` | `conn_mod_def::GJ5A0h8UYKo::2VDrnFnkTm6RD8lLGe1DLA` |
| Deactivate a Workflow | POST | `/api/v1/workflows/{{id}}/deactivate` | `conn_mod_def::GJ5A0ia8jw8::TJgFbA0WRhyoV4EDybnDdQ` |
| Delete a Workflow | DELETE | `/api/v1/workflows/{{id}}` | `conn_mod_def::GJ5A0pW8dDk::uXEJUlz4SOyy1bNholzz_g` |
| Publish (Activate) a Workflow Version | POST | `/api/v1/workflows/{{id}}/activate` | `conn_mod_def::GJ5A0rsAXMI::ZTEcN_20SDyquJGBAaoWtA` |
| Transfer a Workflow to Another Project | PUT | `/api/v1/workflows/{{id}}/transfer` | `conn_mod_def::GJ5A07yW-q4::hPJAMagWSp6C9UJs9f4h0g` |
| Update a Workflow | PUT | `/api/v1/workflows/{{id}}` | `conn_mod_def::GJ5A03S8_58::Vu2Z02b8SeyVUKgnBNN1xw` |
| Update a Workflow's Tags | PUT | `/api/v1/workflows/{{id}}/tags` | `conn_mod_def::GJ5A02mQamE::WEIq7lDJSP6uW6HlzzItDA` |

### Executions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Executions | GET | `/api/v1/executions` | `conn_mod_def::GJ5AzeyQSG8::HwR6CKaERsOExBZvcJ45lA` |
| Retrieve an Execution | GET | `/api/v1/executions/{{id}}` | `conn_mod_def::GJ5Azpw0X-4::ffMU0YWVQCyc0r2BVDTJCg` |
| Delete an Execution | DELETE | `/api/v1/executions/{{id}}` | `conn_mod_def::GJ5AzaLSIF0::evB4O14LTd2q_zuXmwwJWQ` |
| Retry an Execution | POST | `/api/v1/executions/{{id}}/retry` | `conn_mod_def::GJ5Azp-juM0::vjrI3aBwSfOoHRGQBjDuBA` |
| Stop an Execution | POST | `/api/v1/executions/{{id}}/stop` | `conn_mod_def::GJ5AzmhyIRk::4BKJSTkwSHOQv_p4jn0BDQ` |
| Stop Multiple Executions | POST | `/api/v1/executions/stop` | `conn_mod_def::GJ5AzsB8ZkQ::wp5WjUhRSvWaut7ZGZTC_A` |
| Update an Execution’s Tags | PUT | `/api/v1/executions/{{id}}/tags` | `conn_mod_def::GJ5AzmpIFYk::mHe1-5euRp-_vX0dHCbZew` |

### Credentials

| Action | Method | Path | Action id |
|---|---|---|---|
| List Credentials | GET | `/api/v1/credentials` | `conn_mod_def::GJ5Ay52weM0::93ODZYbfQwioMypwKTnSnA` |
| Show a Credential Type’s Schema | GET | `/api/v1/credentials/schema/{{credentialTypeName}}` | `conn_mod_def::GJ5Ay6WEFrk::hN2TuO9bR2qe_IGUiAJ-CQ` |
| Create a Credential | POST | `/api/v1/credentials` | `conn_mod_def::GJ5Ay5Xc-pU::nKnLHiBBQsq5NQCT8cP3sQ` |
| Delete a Credential by ID | DELETE | `/api/v1/credentials/{{id}}` | `conn_mod_def::GJ5Ay48gYrI::QOOP30AqT_ybq9WSKPMVKg` |
| Transfer a Credential to Another Project | PUT | `/api/v1/credentials/{{id}}/transfer` | `conn_mod_def::GJ5AzCcHmQk::212XF1GJSZyW6IdWFJ8okg` |
| Update a Credential by ID | PATCH | `/api/v1/credentials/{{id}}` | `conn_mod_def::GJ5AzDEe_GQ::rTE-iUC3QaS3a78bTHqE2w` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/api/v1/projects` | `conn_mod_def::GJ5Az977woU::WL62c_LnSzOyehKjvNKZ3g` |
| Add Users to a Project | POST | `/api/v1/projects/{{projectId}}/users` | `conn_mod_def::GJ5Az0wjpZw::-IUOOpgnQVK7ajFex5VbFw` |
| Create a Project | POST | `/api/v1/projects` | `conn_mod_def::GJ5Az0PaWDY::hFRAK05eQf2nrxraJ54xyA` |
| Delete a Project | DELETE | `/api/v1/projects/{{projectId}}` | `conn_mod_def::GJ5Az0hD0Ik::-IbiNtJyRQaiRKBiMc72Tw` |
| Remove a User from a Project | DELETE | `/api/v1/projects/{{projectId}}/users/{{userId}}` | `conn_mod_def::GJ5Az0GXsxw::0w8teIQQQz6eeFkAS_2h9A` |
| Update a Project | PUT | `/api/v1/projects/{{projectId}}` | `conn_mod_def::GJ5A0C6kuBY::tyDoq8uGS96lqU3dW3kQ_Q` |

### DataTableRows

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Data Table’s Rows | GET | `/api/v1/data-tables/{{dataTableId}}/rows` | `conn_mod_def::GJ5AzSlfF-Y::Fwkul5eFQCa8eI6cE3k1PQ` |
| Delete Rows from a Data Table | DELETE | `/api/v1/data-tables/{{dataTableId}}/rows/delete` | `conn_mod_def::GJ5AzD-uBDk::WDJRc3d2QAeOsKmFt2MgNQ` |
| Insert Rows into a Data Table | POST | `/api/v1/data-tables/{{dataTableId}}/rows` | `conn_mod_def::GJ5AzMybGTI::3VroD0-iQj-Hl1q4b6DqpA` |
| Update Rows in a Data Table | PATCH | `/api/v1/data-tables/{{dataTableId}}/rows/update` | `conn_mod_def::GJ5AzbJqS3I::uarVpNQqRI-NbnlizkYbTA` |
| Upsert a Data Table Row | POST | `/api/v1/data-tables/{{dataTableId}}/rows/upsert` | `conn_mod_def::GJ5AzbDLDYw::f90P2RLdReyDAUqwoxRkkg` |

### DataTables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Data Table | GET | `/api/v1/data-tables/{{dataTableId}}` | `conn_mod_def::GJ5AzLVj7qc::30iXTXx7T4CbL6SVJG04mA` |
| List Data Tables | GET | `/api/v1/data-tables` | `conn_mod_def::GJ5AzQHWmPI::0X-_yrFhQlqu4wnPNkDR3Q` |
| Create a Data Table | POST | `/api/v1/data-tables` | `conn_mod_def::GJ5AzCyTBAI::HJR_IV_MSL-ZVFUXABZCVw` |
| Delete a Data Table | DELETE | `/api/v1/data-tables/{{dataTableId}}` | `conn_mod_def::GJ5AzCOds1g::Z7_Zs2IRSyiLlKqpdVNjbQ` |
| Update a Data Table | PATCH | `/api/v1/data-tables/{{dataTableId}}` | `conn_mod_def::GJ5AzLcm2kQ::KYgkn15HTQyZ6jEuHv519A` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID or Email | GET | `/api/v1/users/{{id}}` | `conn_mod_def::GJ5A0ZqwBb8::LEhmWFXJT1m3zsosJ_Y3Zg` |
| List Users | GET | `/api/v1/users` | `conn_mod_def::GJ5A0afWOOI::7ptg0PRXSZ68O2Vcp81tNw` |
| Change a User's Global Role | PATCH | `/api/v1/users/{{id}}/role` | `conn_mod_def::GJ5A0KgcwH4::uwdF1_WxRrm6OM-YHZT5lA` |
| Create Multiple Users | POST | `/api/v1/users` | `conn_mod_def::GJ5A0ZWJE_I::9YiEcJPhTtCJ0FLkVsMs1w` |
| Delete a User | DELETE | `/api/v1/users/{{id}}` | `conn_mod_def::GJ5A0ZIVxNo::MD76AYZ5SOizVTVXR9znHQ` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags | GET | `/api/v1/tags` | `conn_mod_def::GJ5A0K_hCYE::ON6ZlL2TTay1KFwJ2N9V6g` |
| Retrieve a Tag | GET | `/api/v1/tags/{{id}}` | `conn_mod_def::GJ5A0Rw8zr4::U_C3AZNiR4SFY3WuFIIU6A` |
| Create a Tag | POST | `/api/v1/tags` | `conn_mod_def::GJ5Az8m6PGg::RlOdht6HQdOE-wW6hRam-Q` |
| Delete a Tag | DELETE | `/api/v1/tags/{{id}}` | `conn_mod_def::GJ5A0Kf-5zQ::GNEVdKepR4-C04dgxiqviw` |
| Update a Tag | PUT | `/api/v1/tags/{{id}}` | `conn_mod_def::GJ5A0LA6FRA::dAnvEYnwTvilO5TY1QGMmA` |

### Variables

| Action | Method | Path | Action id |
|---|---|---|---|
| List Variables | GET | `/api/v1/variables` | `conn_mod_def::GJ5A0iDNXXU::98xwksVNRq6gt7TvguZ_Zg` |
| Create a Variable | POST | `/api/v1/variables` | `conn_mod_def::GJ5A0ZMVB3E::4-j4cjT4SdeQnK0Cf5elFw` |
| Delete a Variable | DELETE | `/api/v1/variables/{{id}}` | `conn_mod_def::GJ5A0hziipQ::DWTtwYpWTj-X6Zj5lUtBOg` |
| Update a Variable | PUT | `/api/v1/variables/{{id}}` | `conn_mod_def::GJ5A0hQMp-k::N8LzV-28TnizsPNkRZgXPA` |

### Audit

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate an n8n Instance Security Audit | POST | `/api/v1/audit` | `conn_mod_def::GJ5Ay6joKzY::IDjDt73sQBmv6LtzJVHfkA` |

### SourceControl

| Action | Method | Path | Action id |
|---|---|---|---|
| Pull Source Control Changes from Remote Repository | POST | `/api/v1/source-control/pull` | `conn_mod_def::GJ5Az8Sq418::MrXkaQgKRuCLJZIjkzTflQ` |

### ProjectMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Members | GET | `/api/v1/projects/{{projectId}}/users` | `conn_mod_def::GJ5Az-ITwrs::lCG-PkubTja0io-cKFffLA` |

### WorkflowTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workflow’s Tags | GET | `/api/v1/workflows/{{id}}/tags` | `conn_mod_def::GJ5A0p19fbE::RFHE5JTKT5-9kPNU95s4rA` |

### WorkflowVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Workflow Version (Workflow History) | GET | `/api/v1/workflows/{{id}}/{{versionId}}` | `conn_mod_def::GJ5A07_v_qU::jrfyGTLNSnSttdr0LURrzQ` |

### ProjectUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Change a User's Role in a Project | PATCH | `/api/v1/projects/{{projectId}}/users/{{userId}}` | `conn_mod_def::GJ5Az0hjI3w::BoON8semRYuwrCFzQs9rGQ` |

### ExecutionTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Execution’s Tags | GET | `/api/v1/executions/{{id}}/tags` | `conn_mod_def::GJ5AzbCRTL0::i08pFO-KQP2vya1FWzq5RQ` |

## When a call fails

The error comes from n8n, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/n8n

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
