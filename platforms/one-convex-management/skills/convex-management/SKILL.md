---
name: convex-management
description: Convex Management provides a developer console for managing applications built on the Convex backend platform, including database data, serverless functions, deployments, logs, and configuration, helping teams monitor, operate, and scale real-time applications from a centralized interface. Read and write Convex Management data through One: deployments, projects, deploykey, teamproject, projectdeployment, deploymentclasses and more, 20 actions with real parameter documentation. Use whenever the user asks to look something up in Convex Management, create or update a record there, or build code against the Convex Management API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: convex-management
  generated-from: one-knowledge-base
---

# Convex Management through One

Convex Management provides a developer console for managing applications built on the Convex backend platform, including database data, serverless functions, deployments, logs, and configuration, helping teams monitor, operate, and scale real-time applications from a centralized interface.

One exposes Convex Management through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `convex-management` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Convex Management is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Convex Management account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Deployments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deployment | GET | `/deployments/{{DEPLOYMENT_NAME}}` | `conn_mod_def::GJj9jKe8ihs::K8WdOzgqTjWCtRGtHQg1IQ` |
| List a Project’s Deployments | GET | `/projects/{{PROJECT_ID}}/list_deployments` | `conn_mod_def::GJj9iYmynbw::wl2zkUx4R1mFZLMQ9R8-Ew` |
| Delete a Deployment | POST | `/deployments/{{DEPLOYMENT_NAME}}/delete` | `conn_mod_def::GJj9jEHxxSA::1rM03XibTwiC_EihkDAfIQ` |
| Delete a Deployment's Custom Domain | POST | `/deployments/{{DEPLOYMENT_NAME}}/delete_custom_domain` | `conn_mod_def::GJj9kITJIG8::I1yeqWs5QiqYhNEqPZ4mqA` |
| Update a Deployment's Settings | PATCH | `/deployments/{{DEPLOYMENT_NAME}}` | `conn_mod_def::GJj9jQbiL3c::Hke8RHCUQ0Oe-HJ8yXYyPQ` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project by ID | GET | `/projects/{{PROJECT_ID}}` | `conn_mod_def::GJj9inTMA4U::XDV6wTuiSXiIcKPKD5EWTw` |
| Get a Team's Project by Slug | GET | `/teams/{{TEAM_ID_OR_SLUG}}/projects/{{PROJECT_SLUG}}` | `conn_mod_def::GJj9izsGNa4::1GrNf2byRiKotQhbIjPRMg` |
| List a Team’s Projects | GET | `/teams/{{TEAM_ID}}/list_projects` | `conn_mod_def::GJj9iOAs5Ig::DxaMoNriQIOydppPFJhc2w` |
| Delete a Project | POST | `/projects/{{PROJECT_ID}}/delete` | `conn_mod_def::GJj9ihFLJiI::JVry-hJoTJO-gufHHQg6Zw` |

### DeployKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Deployment Deploy Key | POST | `/deployments/{{DEPLOYMENT_NAME}}/create_deploy_key` | `conn_mod_def::GJj9jlTBFvU::Yd8mlDR1TsOIyPUNMXv9yg` |
| Delete a Deployment's Deploy Key | POST | `/deployments/{{DEPLOYMENT_NAME}}/delete_deploy_key` | `conn_mod_def::GJj9jzFjhHg::CHHBEX9KRP-Z76tTx3rLsg` |

### TeamProject

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team Project | POST | `/teams/{{TEAM_ID}}/create_project` | `conn_mod_def::GJj9iHYlo48::2X9QDW__TcKBXVQa5kUCvA` |

### ProjectDeployment

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Project Deployment | POST | `/projects/{{PROJECT_ID}}/create_deployment` | `conn_mod_def::GJj9i7kzIO0::yPWYy14lSxirjf_kvdZo3Q` |

### DeploymentClasses

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Deployment Classes | GET | `/teams/{{TEAM_ID}}/list_deployment_classes` | `conn_mod_def::GJj9jWIJESg::jNO3aPH0Su-fO5Qg-joLzA` |

### DeploymentRegions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Deployment Regions | GET | `/teams/{{TEAM_ID}}/list_deployment_regions` | `conn_mod_def::GJj9jfTX1DU::VsdzhHKDTuGWxqP84tquwg` |

### DeployKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Deployment's Deploy Keys | GET | `/deployments/{{DEPLOYMENT_NAME}}/list_deploy_keys` | `conn_mod_def::GJj9jsQSW5o::MrSdoc74Ro2z0L0OyM7clw` |

### TokenDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Token Details | GET | `/token_details` | `conn_mod_def::GJj9j5gzJ9k::kmM3yzYrR4We4SF0oCofnQ` |

### DeploymentCustomDomain

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Deployment's Custom Domain | POST | `/deployments/{{DEPLOYMENT_NAME}}/create_custom_domain` | `conn_mod_def::GJj9kArnYTQ::Yhly4pTtQb6nuzxipvDV4A` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team’s Members | GET | `/teams/{{TEAM_ID}}/list_members` | `conn_mod_def::GJj9kcQUEtk::9GPs3TvDSc21LHQFTzg_6A` |

### CustomDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Deployment's Custom Domains | GET | `/deployments/{{DEPLOYMENT_NAME}}/custom_domains` | `conn_mod_def::GJj9kO-hUj8::Vp6oKSiPTmuQ6Pg4zg0UmQ` |

## When a call fails

The error comes from Convex Management, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/convex-management

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
