---
name: runpod
description: RunPod is a cloud infrastructure platform designed for running GPU-accelerated workloads such as AI training, inference and scalable compute, providing on-demand and serverless GPU environments with developer-friendly APIs and automation tools. Read and write Runpod data through One: pods, networkvolumes, templates, containerregistryauth, serverlessendpoint, serverlessendpoints and more, 37 actions with real parameter documentation. Use whenever the user asks to look something up in Runpod, create or update a record there, or build code against the Runpod API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: runpod
  generated-from: one-knowledge-base
---

# Runpod through One

RunPod is a cloud infrastructure platform designed for running GPU-accelerated workloads such as AI training, inference and scalable compute, providing on-demand and serverless GPU environments with developer-friendly APIs and automation tools.

One exposes Runpod through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `runpod` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Runpod is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Runpod account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Pods

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pod by ID | GET | `/pods/{{PODID}}` | `conn_mod_def::GJbbvSgk1y0::bX6bQ5wATIKaDnDun5pHSw` |
| List Pods | GET | `/pods` | `conn_mod_def::GJbbvB5QoN4::HnTbZLRBTZCVyro-KSsCOw` |
| Create a Pod | POST | `/pods` | `conn_mod_def::GJbbvJgq2DQ::n95uFL1MSJSaS2qU1L7tYg` |
| Delete a Pod | DELETE | `/pods/{{PODID}}` | `conn_mod_def::GJbbvd-jq1o::FFZbvtt5ToymIWwFZSuUbg` |
| Reset a Pod | POST | `/pods/{{PODID}}/reset` | `conn_mod_def::GJbbv-l5JCo::cR3sqaMJSU6X3Yeg38pepw` |
| Restart a Pod | POST | `/pods/{{PODID}}/restart` | `conn_mod_def::GJbbwEdBap8::_mIXKkMbTQORiMa4Drj-aQ` |
| Start or Resume a Pod | POST | `/pods/{{PODID}}/start` | `conn_mod_def::GJbbvs86GLo::r6gYglSGRc2IheQb1eqR9w` |
| Stop a Pod | POST | `/pods/{{PODID}}/stop` | `conn_mod_def::GJbbv5q1WwU::u9GC9QEgQfq8Y2aHJrIF9Q` |
| Update a Pod | PATCH | `/pods/{{PODID}}` | `conn_mod_def::GJbbvZEoOH4::ZbSsQuXoSrqaQwwKX2Aa6w` |
| Update a Pod | POST | `/pods/{{PODID}}/update` | `conn_mod_def::GJbbvlZmSp8::DyX89HzwTCWLu_YMmE1jmw` |

### NetworkVolumes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Network Volume by ID | GET | `/networkvolumes/{{NETWORKVOLUMEID}}` | `conn_mod_def::GJbbuoD9o80::2zcI1NjySJCOTi1jjh3slg` |
| List Network Volumes | GET | `/networkvolumes` | `conn_mod_def::GJbbubznXBM::eixud5y8TI2oindOljVPPw` |
| Create a Network Volume | POST | `/networkvolumes` | `conn_mod_def::GJbbuiTVrA4::xmDsZWVzTx6U_rpGshcSHg` |
| Delete a Network Volume | DELETE | `/networkvolumes/{{NETWORKVOLUMEID}}` | `conn_mod_def::GJbbuz7qG8U::XhmAVft0SASoHTShEtYb9A` |
| Update a Network Volume | PATCH | `/networkvolumes/{{NETWORKVOLUMEID}}` | `conn_mod_def::GJbbuvAAuPg::Y_lTrZTnQKevoJ-Lsvnewg` |
| Update a Network Volume | POST | `/networkvolumes/{{NETWORKVOLUMEID}}/update` | `conn_mod_def::GJbbu52o8t4::R_NSLQeGRr-QIjZvWOUEZA` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template by ID | GET | `/templates/{{templateId}}` | `conn_mod_def::GJbbwXZhb40::3T91WmBXQY-65yJQUzKGXA` |
| List Templates | GET | `/templates` | `conn_mod_def::GJbbwKUDoEc::VWoVHEhJSuK0N_Y8lglzPQ` |
| Create a Template | POST | `/templates` | `conn_mod_def::GJbbwQAbfyA::PZivPn36SJODfNA-uttK5Q` |
| Delete a Template | DELETE | `/templates/{{TEMPLATEID}}` | `conn_mod_def::GJbbwi1Vcyc::DUYeIzoPS12XwlnN8Kr1gQ` |
| Update a Template | PATCH | `/templates/{{TEMPLATEID}}` | `conn_mod_def::GJbbwconBtI::tl6F7KWuSXSjJgS8_TblEQ` |
| Update a Template | POST | `/templates/{{TEMPLATEID}}/update` | `conn_mod_def::GJbbwoSTH_k::j4Eikwf8SwSvGpkYg5Yi9g` |

### ContainerRegistryAuth

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Container Registry Auth by ID | GET | `/containerregistryauth/{{CONTAINERREGISTRYAUTHID}}` | `conn_mod_def::GJbbtPdRWHQ::z3OaX6loRFqdUx3RJHsDFQ` |
| Create a Container Registry Auth | POST | `/containerregistryauth` | `conn_mod_def::GJbbtKdl8LY::lEML36OIQCq8WvwHHmLQFg` |
| Delete a Container Registry Auth | DELETE | `/containerregistryauth/{{CONTAINERREGISTRYAUTHID}}` | `conn_mod_def::GJbbtVsqMJA::R3TwSVoSTz6BEGN8zSyfvg` |

### ServerlessEndpoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Serverless Endpoint by ID | GET | `/endpoints/{{endpointId}}` | `conn_mod_def::GJbbuCohIdQ::JzjnnmjKT9KnXZKBgnGGYA` |
| Update a Serverless Endpoint | PATCH | `/endpoints/{{ENDPOINTID}}` | `conn_mod_def::GJbbuJMe0pE::L30B-18pS_iura26AzD8gg` |
| Update a Serverless Endpoint | POST | `/endpoints/{{ENDPOINTID}}/update` | `conn_mod_def::GJbbuVdjrWU::ZMtR1tqYQwSH8e6DrVuvWg` |

### ServerlessEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| List Serverless Endpoints | GET | `/endpoints` | `conn_mod_def::GJbbttxHBxM::U4CDUTr4SqCI5Ie65O4-Lg` |
| Create a Serverless Endpoint | POST | `/endpoints` | `conn_mod_def::GJbbt2E3pzs::KCwpLGLuS4eilSsESsVn9A` |

### PodBillingHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pod Billing History | GET | `/billing/pods` | `conn_mod_def::GJbbswUrhj8::RW1fgflGThygGXQFwCrjmA` |

### ServerlessEndpointBillingHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| List Serverless Endpoint Billing History | GET | `/billing/endpoints` | `conn_mod_def::GJbbs4gEB50::imRzH6bOSbSGocZwbWR8ZQ` |

### NetworkVolumeBillingHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| List Network Volume Billing History | GET | `/v1/billing/networkvolumes` | `conn_mod_def::GJbbs-RGMRM::nWJSFarER7yF6zJzQhlcgQ` |

### ContainerRegistryAuths

| Action | Method | Path | Action id |
|---|---|---|---|
| List Container Registry Auths | GET | `/containerregistryauth` | `conn_mod_def::GJbbtE425qw::tHFXW1cwSeOveicffR9fDA` |

### OpenapiSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the OpenAPI 3.0 Schema | GET | `/openapi.json` | `conn_mod_def::GJbbtc1jPNg::r2wE7mU1Rcu29l4pNANx5Q` |

### ApiDocumentation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Interactive API Documentation | GET | `/docs` | `conn_mod_def::GJbbtlUFFGU::2SA43V0YSg297v4dvvb1BA` |

### Endpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Endpoint | DELETE | `/endpoints/{{endpointId}}` | `conn_mod_def::GJbbuO626hY::l9lVN4HcSjKasldsf0hGNA` |

## When a call fails

The error comes from Runpod, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/runpod

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
