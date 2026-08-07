---
name: kaleido
description: Kaleido is a blockchain infrastructure platform that provides managed networks, digital asset tooling, and integration services, allowing developers and enterprises to build, deploy, and operate blockchain applications with APIs for identity, tokenization, and interoperability. Read and write Kaleido data through One: nodes, compiledcontracts, consortia, services, apikeys, contracts and more, 177 actions with real parameter documentation. Use whenever the user asks to look something up in Kaleido, create or update a record there, or build code against the Kaleido API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: kaleido
  generated-from: one-knowledge-base
---

# Kaleido through One

Kaleido is a blockchain infrastructure platform that provides managed networks, digital asset tooling, and integration services, allowing developers and enterprises to build, deploy, and operate blockchain applications with APIs for identity, tokenization, and interoperability.

One exposes Kaleido through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `kaleido` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Kaleido is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Kaleido account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Nodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Node's Runtime Status | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes/{{nodeId}}/status` | `conn_mod_def::GK50fA8HPUA::aN1qxHqqTEKcJF33qR9omA` |
| Get a Node's Transaction Pool Contents | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes/{{nodeId}}/txpool/content` | `conn_mod_def::GK50fL4nJgA::mjedN8xgRR2VLhc71m-EmA` |
| List an Environment's Nodes | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes` | `conn_mod_def::GK50fAaf_oA::UBq_Ts8GQnScSX96gTFySg` |
| Backup a Node's /qdata | PUT | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes/{{nodeId}}/backup` | `conn_mod_def::GK50ez1g92g::Nq2RQTy8QZacTx9vnYShmQ` |
| Create a Node for an Environment in a Consortium | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes` | `conn_mod_def::GK50ezxlRdA::WlDRa9_8TNyi9346Z7u8FQ` |
| Delete a Node in an Environment | DELETE | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes/{{nodeId}}` | `conn_mod_def::GK50e0EvnyA::8tfo-T3NQVqTvfJ_5HTBdA` |
| Reset a Node in an Environment | PUT | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes/{{nodeId}}/reset` | `conn_mod_def::GK50fA1U-WA::xlDRBd0CSXqHxrML8hxq2Q` |
| Restart a Node in an Environment | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes/{{nodeId}}/restart` | `conn_mod_def::GK50fAhHFwA::UDYl48BgSe--wMSKNIecQw` |
| Start a Consortium Environment Node | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes/{{nodeId}}/start` | `conn_mod_def::GK50fKgJAjA::dWxydt28T2KE3YwLorZXCA` |
| Stop a Node in an Environment | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes/{{nodeId}}/stop` | `conn_mod_def::GK50fLD22fg::yzQPXKZ7Suakd6quf2DJKg` |
| Update a Node in an Environment | PATCH | `/consortia/{{consortiaId}}/environments/{{environmentId}}/nodes/{{nodeId}}` | `conn_mod_def::GK50fQCP6VA::_wU8OCBNTl2xCUpuHdmySQ` |

### CompiledContracts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Contract's Compiled Contract | GET | `/consortia/{{consortiaId}}/contracts/{{contractId}}/compiled_contracts/{{compiledContractId}}` | `conn_mod_def::GK50bhq3CEA::kVJwg0r0TVWL2vtFD5EnvQ` |
| Get All Compiled Contracts for a Consortia Contract | GET | `/consortia/{{consortiaId}}/contracts/{{contractId}}/compiled_contracts` | `conn_mod_def::GK50bhsBraA::mc2b9ZI5Rfigt039HiOtgQ` |
| Create a Compiled Contract for a Consortia Contract | POST | `/binaries/consortia/{{consortiaId}}/contracts/{{contractId}}/compiled_contracts` | `conn_mod_def::GK50bhPPqvA::X63tjvH9RvCryy3Q4MM_DQ` |
| Create a Consortia Contract Compiled Contract | POST | `/consortia/{{consortiaId}}/contracts/{{contractId}}/compiled_contracts` | `conn_mod_def::GK50bUpjJ1A::SauUpo4JRYitKPFbrOlSoA` |
| Delete a Contract's Specific Compiled Contract | DELETE | `/consortia/{{consortiaId}}/contracts/{{contractId}}/compiled_contracts/{{compiledContractId}}` | `conn_mod_def::GK50bhfTPYg::6lhlJMwBTuC0qVNTdrmteg` |
| Promote a Compiled Contract to an Environment | POST | `/consortia/{{consortiaId}}/contracts/{{contractId}}/compiled_contracts/{{compiledContractId}}/promote` | `conn_mod_def::GK50biQ3XAg::VzS1VweiRjmmahkjOeNG6Q` |
| Update a Contract's Specific Compiled Contract | PATCH | `/consortia/{{consortiaId}}/contracts/{{contractId}}/compiled_contracts/{{compiledContractId}}` | `conn_mod_def::GK50brZ9OKg::J-CoDMKTRoydLY-ouTlyMw` |

### Consortia

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Consortia | GET | `/consortia/{{consortiaId}}` | `conn_mod_def::GK50b0whU6g::3_G4UvpUSke3Hyz63GdNPQ` |
| List Consortia | GET | `/api/v1/consortia` | `conn_mod_def::GK50b-pXuPA::fIf-JWioTj-D5Ep1jTqCMQ` |
| Create a Consortia | POST | `/api/v1/consortia` | `conn_mod_def::GK50b0T47eg::JlVUYBCVSYmded3ywQA0IQ` |
| Delete a Specific Consortia | DELETE | `/api/v1/consortia/{{consortiaId}}` | `conn_mod_def::GK50b129NzA::0IbbQsv8R_Oi0QYbIQWB-Q` |
| Update a Specific Consortia | PATCH | `/consortia/{{consortiaId}}` | `conn_mod_def::GK50b-NVbRg::QiXWA20-TZiKpKKYialEjQ` |
| Upgrade a Consortium Environment to the Latest Version | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/upgrade` | `conn_mod_def::GK50csBZvUg::OzCO5DgRQwuLfC8p_oB7zQ` |

### Services

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Environment's Services | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/services` | `conn_mod_def::GK50gid49rA::H5NSej9hSOafcWALEZo0xw` |
| List Services | GET | `/api/v1/services` | `conn_mod_def::GK50ghUBp0g::Yz4qO-qsRvGXa0qcu475WQ` |
| Backup a Service's /qdata | PUT | `/consortia/{{consortiaId}}/environments/{{environmentId}}/services/{{serviceId}}/backup` | `conn_mod_def::GK50gKq9PGg::P_IFNJJEQNedqiDL9P-4WQ` |
| Create a Service for an Environment | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/services` | `conn_mod_def::GK50gZNMWLA::QVy7TCB8R-quDgrjE3lsHA` |
| Delete a Service in an Environment | DELETE | `/consortia/{{consortiaId}}/environments/{{environmentId}}/services/{{serviceId}}` | `conn_mod_def::GK50gKo4j5A::WcvPOgbYSpGyxId8qdOX_Q` |
| Update a Specific Service | PATCH | `/consortia/{{consortiaId}}/environments/{{environmentId}}/services/{{serviceId}}` | `conn_mod_def::GK50gvEXNMg::Jq0VAW8cSsGuaFGFbYpWXA` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific API Key | GET | `/apikeys/{{apikeyId}}` | `conn_mod_def::GK50avjOpCA::Otb77mgcShGS4dVy2C7jfA` |
| List API Keys | GET | `/api/v1/apikeys` | `conn_mod_def::GK50aumNtBA::zVk69RuvT0m4aRFIvmv7BA` |
| Create a New API Key | POST | `/api/v1/apikeys` | `conn_mod_def::GK50avbjoOg::UXM49bbRS9W-eYYCHyc1oQ` |
| Delete an API Key | DELETE | `/api/v1/apikeys/{{apikeyId}}` | `conn_mod_def::GK50avbCNjg::Bd0Zwl3SQaK5QbB8JHFmhg` |
| Update an API Key | PATCH | `/apikeys/{{apikeyId}}` | `conn_mod_def::GK50aumoqmg::_VKy2Wi8RSqUg36fP8qdPg` |

### Contracts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Consortium Contract | GET | `/consortia/{{consortiaId}}/contracts/{{contractId}}` | `conn_mod_def::GK50cHCtGKA::pJqgzBB4RUS4xy5F0bOPSw` |
| List a Consortia's Contracts | GET | `/consortia/{{consortiaId}}/contracts` | `conn_mod_def::GK50cGnOG9g::B0eoKTFrS42LhcyCWFPRnQ` |
| List Contracts Deployed on a Chain in an Environment | GET | `/ledger/{{consortiaId}}/{{environmentId}}/contracts` | `conn_mod_def::GK50d2HSKZA::L4cR_EDLQYyowReS6FpAMg` |
| Create a Consortium Contract | POST | `/consortia/{{consortiaId}}/contracts` | `conn_mod_def::GK50b-6FMhg::36FAqRlPSAmDD_kEbirnSw` |
| Update a Contract's Metadata | PUT | `/ledger/{{consortiaId}}/{{environmentId}}/contracts/{{address}}` | `conn_mod_def::GK50ecNSrcg::6H6xAwVkR4SUvGhqsMsb6A` |

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Environment's Genesis Configuration | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/genesis` | `conn_mod_def::GK50cfwUIkg::mwCmRLGLTRCMIrFV0CChLA` |
| Get an Environment's Status | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/status` | `conn_mod_def::GK50coIDVbg::Hc07IBxWR9S4OcS4aR_6aQ` |
| List a Consortium's Environments | GET | `/consortia/{{consortiaId}}/environments` | `conn_mod_def::GK50cakGbjA::NbgTIoCMSOa7uj3bADn9BQ` |
| Apply Available Hard Fork EIPs to a Specific Environment | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/hardfork` | `conn_mod_def::GK50cIGVV-A::kXbitz2uTK2RTLRLeJXZ3w` |
| Create an Environment for a Consortium | POST | `/consortia/{{consortiaId}}/environments` | `conn_mod_def::GK50cHdYldA::KLT8OR6FQNyVoXChGUadmQ` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Organization | GET | `/api/v1/orgs/{{orgId}}` | `conn_mod_def::GK50fkkLtVA::K8fWLenLQha1etmlOqSYEA` |
| List Organizations Accessible to the User | GET | `/api/v1/orgs` | `conn_mod_def::GK50fvFuC_g::mNUxUOHLT2GYDmyYPrz1zg` |
| Create a New Organization | POST | `/api/v1/orgs` | `conn_mod_def::GK50fluXohA::20fjr8fFTimt9lU8ESFxhg` |
| Delete a Specific Organization | DELETE | `/orgs/{{orgId}}` | `conn_mod_def::GK50fjgfFPg::9q_vWxC9Tpq0ODpIPTObqg` |
| Update an Organization | PATCH | `/orgs/{{orgId}}` | `conn_mod_def::GK50fu_Ss0g::6qVqp7_STBKHKl0G5VDWkw` |

### EnvironmentDeploymentZones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Environment Deployment Zone | GET | `/api/v1/consortia/{{consortiaId}}/environments/{{environmentId}}/zones/{{zoneId}}` | `conn_mod_def::GK50hHVUdTg::RJhCsGy4TLC8U8mjC-K_Yw` |
| Create an Environment Deployment Zone | POST | `/api/v1/consortia/{{consortiaId}}/environments/{{environmentId}}/zones` | `conn_mod_def::GK50g94FLsA::CXG_Oa-aRQW14mxXltvsmg` |
| Delete an Environment's Deployment Zone | DELETE | `/consortia/{{consortiaId}}/environments/{{environmentId}}/zones/{{zoneId}}` | `conn_mod_def::GK50hGcr5oA::BTmHbpphTl20JRVvBrZO2w` |
| Update a Consortium Environment Deployment Zone | PATCH | `/consortia/{{consortiaId}}/environments/{{environmentId}}/zones/{{zoneId}}` | `conn_mod_def::GK50hVLL6GA::0CrrJXvYQumQpI5WbFRCUg` |

### DeploymentZones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Consortium's Deployment Zone | GET | `/api/v1/consortia/{{consortiaId}}/zones/{{zoneId}}` | `conn_mod_def::GK50hMayYig::Xn4bk27TQNKDiZ8QZifYfQ` |
| List a Consortium's Deployment Zones | GET | `/consortia/{{consortiaId}}/zones` | `conn_mod_def::GK50hHVEIYg::IdMY2OGuTwui_3Nx83jJGg` |
| List an Environment's Deployment Zones | GET | `/api/v1/consortia/{{consortiaId}}/environments/{{environmentId}}/zones` | `conn_mod_def::GK50hHCiapA::_bQDhwjeT4u0jExmFzRlKw` |
| List Deployment Zones | GET | `/api/v1/regions` | `conn_mod_def::GK50f5I_ipg::TfIlXizISY-82bG-rXF0pA` |

### Configurations

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Environment's Configurations | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/configurations` | `conn_mod_def::GK50bsIbCYg::QiyZMn6NRSyg58nEHKYWyA` |
| Delete a Configuration in an Environment | DELETE | `/consortia/{{consortiaId}}/environments/{{environmentId}}/configurations/{{configId}}` | `conn_mod_def::GK50bry3WlA::_KVpMa85QzeyPYMZmOVm0g` |
| Update a Configuration in an Environment | PATCH | `/consortia/{{consortiaId}}/environments/{{environmentId}}/configurations/{{configId}}` | `conn_mod_def::GK50b0OqE0A::CSnmBxYSTImkolPljF5xYg` |
| Upsert a Configuration in a Consortia Environment | PUT | `/api/v1/consortia/{{consortiaId}}/environments/{{environmentId}}/configurations/{{configId}}` | `conn_mod_def::GK50b133C-A::r02b_j2ST6S_loo5jzCD6Q` |

### EnvironmentBackupConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Environment's Backup Configuration | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/backup` | `conn_mod_def::GK50cbqqFgA::CaKxupxZQAGiMMwjbkQETw` |
| Create an Environment's Backup Configuration | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/backup` | `conn_mod_def::GK50cQtndog::KiAjxJVrRwC4mXG9P7cOMQ` |
| Delete an Environment's Backup Configuration | DELETE | `/consortia/{{consortiaId}}/environments/{{environmentId}}/backup` | `conn_mod_def::GK50cRO1aLg::Bny365A4Sw-wAyemmdQyIQ` |
| Update an Environment's Backup Configuration | PATCH | `/consortia/{{consortiaId}}/environments/{{environmentId}}/backup` | `conn_mod_def::GK50cpbhe5A::bAp7EWmDTWuUtcZRbAu3LA` |

### ApplicationCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Environment's Application Credentials | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/appcreds` | `conn_mod_def::GK50a49kHDA::Ou0txqdcQC200-Mrx2D-WQ` |
| Create Application Credentials for an Environment in a Consortium | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/appcreds` | `conn_mod_def::GK50a5kZFIg::jmykVUD4T9iPGnKK8rSCVg` |
| Update an Environment Application Credential | PATCH | `/consortia/{{consortiaId}}/environments/{{environmentId}}/appcreds/{{appkeyId}}` | `conn_mod_def::GK50bKyKHHg::CceLnrZjS-2JIqFx8PIgSw` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Channels in a Fabric Environment | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/channels` | `conn_mod_def::GK50bVCpYqA::PfT22Pz6Tx-EWxiZGmpuHA` |
| Create a Channel in a Fabric Environment | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/channels` | `conn_mod_def::GK50bE-MfjA::n-mv4eG5T3awetrf6Id3TA` |
| Deploy Chaincode to a Channel | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/channels/{{channelId}}/deploy` | `conn_mod_def::GK50bYqUJvg::RpWSg2nwSzyqcpCPIgU5Fw` |

### ConsortiumEnvironments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Consortium Environment | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}` | `conn_mod_def::GK50cQtBTQA::IW-qtJrsS_OvJf9PeXO2PA` |
| Delete a Consortium Environment | DELETE | `/consortia/{{consortiaId}}/environments/{{environmentId}}` | `conn_mod_def::GK50cQs_Fpg::e9Jp1kvLTpKwawk62aGyTQ` |
| Update a Consortium Environment | PATCH | `/consortia/{{consortiaId}}/environments/{{environmentId}}` | `conn_mod_def::GK50coP-z8g::n7P2_hoQTUC6LSKzagilsA` |

### OrganizationIdProofs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Organization ID Proof | GET | `/orgs/{{orgId}}/idproofs/{{proofId}}` | `conn_mod_def::GK50c049FqA::nyavUOs4ROaSOL8kQnChfQ` |
| Add an Organization ID Proof | POST | `/orgs/{{orgId}}/idproofs` | `conn_mod_def::GK50c0XHCtA::7_5K69qFRPquJG3y9OVHBQ` |
| Update an Organization's ID Proof | PATCH | `/orgs/{{orgId}}/idproofs/{{proofId}}` | `conn_mod_def::GK50c083zjg::AeS2pZ-0RSCYV5AK3Cxm0A` |

### EnvironmentIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Environment Integration | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/integrations/{{integrationId}}` | `conn_mod_def::GK50c9uKv6g::MvmhixuhRImXm41k5tBl1w` |
| Delete a Specific Environment Integration in a Consortium | DELETE | `/consortia/{{consortiaId}}/environments/{{environmentId}}/integrations/{{integrationId}}` | `conn_mod_def::GK50c9ppo_A::sOEv0YjiSguG8onnlLma-Q` |
| Update a Specific Environment Integration | PATCH | `/consortia/{{consortiaId}}/environments/{{environmentId}}/integrations/{{integrationId}}` | `conn_mod_def::GK50dGae83A::b-b7fSmTRuyfSTA0OxsyLQ` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Environment's Integrations | GET | `/consortia/{{consortiaId}}/environments/{{environmentId}}/integrations` | `conn_mod_def::GK50c9wfrKg::VY_fWMknRjCJdYN8zTBanw` |
| Create an Integration for an Environment | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/integrations` | `conn_mod_def::GK50c9wh8rA::eUvPXe_nRLOKAa8ETOmuvg` |
| Reset an Integration in an Environment | POST | `/consortia/{{consortiaId}}/environments/{{environmentId}}/integrations/{{integrationId}}/reset` | `conn_mod_def::GK50c-Eg8JA::7li7nBl3QAOWAXjmjSJrlg` |

### ConsortiaInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Consortia Invitation | POST | `/consortia/{{consortiaId}}/invitations` | `conn_mod_def::GK50dGFSRtg::Hx1xLW-VTdO8Wb-OAp0olg` |
| Update a Consortia Invitation | PATCH | `/consortia/{{consortiaId}}/invitations/{{invitationId}}` | `conn_mod_def::GK50deOIDug::wirbpwgaROWvq2k3eHl0cA` |
| Upsert a Specific Consortia Invitation | PUT | `/consortia/{{consortiaId}}/invitations/{{invitationId}}` | `conn_mod_def::GK50dePIX8A::3OaqgU5DROuxiHFIrl96dw` |

### Memberships

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Membership's Owner | GET | `/consortia/{{consortiaId}}/memberships/{{membershipId}}/owner` | `conn_mod_def::GK50em007bA::7Nfp3veVSLyolzmq30ofjA` |
| List a Consortia's Memberships | GET | `/consortia/{{consortiaId}}/memberships` | `conn_mod_def::GK50enB2m5A::gr84g4FlTsC4HrKvriEVdw` |
| List Current User Memberships | GET | `/api/v1/memberships` | `conn_mod_def::GK50elBtxYA::kAYVpSS4Tqq8TM5_seA2XA` |

This lists 90 of 177 actions. For anything not here, call `search_one_platform_actions` with platform `kaleido`. The full catalog is at https://www.withone.ai/knowledge/kaleido.

## When a call fails

The error comes from Kaleido, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/kaleido

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
