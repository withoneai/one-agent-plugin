---
name: weaviate
description: Weaviate is an open-source vector database designed for storing and searching large-scale unstructured data using machine learning. It's ideal for building semantic search, recommendation engines, and AI applications that rely on vector similarity. Read and write Weaviate data through One: objects, backups, schema, users, replicationoperations, schematenants and more, 98 actions with real parameter documentation. Use whenever the user asks to look something up in Weaviate, create or update a record there, or build code against the Weaviate API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: weaviate
  generated-from: one-knowledge-base
---

# Weaviate through One

Weaviate is an open-source vector database designed for storing and searching large-scale unstructured data using machine learning. It's ideal for building semantic search, recommendation engines, and AI applications that rely on vector similarity.

One exposes Weaviate through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `weaviate` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Weaviate is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Weaviate account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Objects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Object by ID (Deprecated) | GET | `/v1/objects/{{id}}` | `conn_mod_def::GJ8TaCrDnaM::BX4GQIXRQf6xlDx3UR8M1A` |
| Get an Object from a Collection | GET | `/v1/objects/{{className}}/{{id}}` | `conn_mod_def::GJ8TaD0Q3ck::ppiu8gwTQreSmT94iOLuGA` |
| List Objects (in a Collection) | GET | `/v1/objects` | `conn_mod_def::GJ8TaEUIAiM::_fur_jxCTu6OnD1qX1Ht3w` |
| Add an Object Reference (Deprecated) | POST | `/v1/objects/{{id}}/references/{{propertyName}}` | `conn_mod_def::GJ8TZUNq43k::F7dJ1FxlRZC4KeBRrDWCVA` |
| Add an Object Reference to an Object’s Reference Property | POST | `/v1/objects/{{className}}/{{id}}/references/{{propertyName}}` | `conn_mod_def::GJ8TZVBlhNM::-LaOFZOEShiW1OepoEPxbA` |
| Check if an Object Exists (Deprecated) | HEAD | `/v1/objects/{{id}}` | `conn_mod_def::GJ8TZTu0cE0::ygrgH0vxS_mhRub2_Pq5wQ` |
| Check if an Object Exists in a Class | HEAD | `/v1/objects/{{className}}/{{id}}` | `conn_mod_def::GJ8TZcfTOAw::Ilil5Y7pRt6qHCbCqKWHMw` |
| Create an Object | POST | `/v1/objects` | `conn_mod_def::GJ8TZ6-G3-M::qnJ8CTZxTAiwDjAr7p_E6g` |
| Delete an Object (Deprecated) | DELETE | `/v1/objects/{{id}}` | `conn_mod_def::GJ8TZcQdPns::mowpHnnUSzSokpBEw6lwQA` |
| Delete an Object from a Collection | DELETE | `/v1/objects/{{className}}/{{id}}` | `conn_mod_def::GJ8TZcg5adw::TmFcp7yoTvmZpqr-Fgljag` |
| Delete an Object’s Reference (Deprecated) | DELETE | `/v1/objects/{{id}}/references/{{propertyName}}` | `conn_mod_def::GJ8TZc4_SfY::a7TtikguTo-j2DvUtROGhA` |
| Delete an Object’s Reference (Remove Reference From a Property) | DELETE | `/v1/objects/{{className}}/{{id}}/references/{{propertyName}}` | `conn_mod_def::GJ8TaEHPSPo::OGY7UAScQYKW5BV9N7s62g` |

7 more Objects actions are available through search.

### Backups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Backup Creation Status | GET | `/v1/backups/{{backend}}/{{id}}` | `conn_mod_def::GJ8TY9jtX1M::9FiYzSpGSFaApIPqFBFNUg` |
| Get a Backup Restoration Status | GET | `/v1/backups/{{backend}}/{{id}}/restore` | `conn_mod_def::GJ8TY9gKxVo::iFR9c8IHRU6Yo0x3cLiaOg` |
| List Backups for a Backend | GET | `/v1/backups/{{backend}}` | `conn_mod_def::GJ8TY8jOEoA::7xzutdBwS8yzaSZLFXdllw` |
| Cancel a Backup | DELETE | `/v1/backups/{{backend}}/{{id}}` | `conn_mod_def::GJ8TY0TENUc::aB0AkaAITbqUDB53rNjAnQ` |
| Cancel a Backup Restoration on a Backend | DELETE | `/v1/backups/{{backend}}/{{id}}/restore` | `conn_mod_def::GJ8TY0MMUmY::gkvC0kdvScm_9NvLSxYOLw` |
| Create a Backup on a Backend | POST | `/v1/backups/{{backend}}` | `conn_mod_def::GJ8TY83MLic::WBNaP4aMQX6-W6eKoHRFdg` |
| Restore a Backup (Restore Collections From a Backup Backend) | POST | `/v1/backups/{{backend}}/{{id}}/restore` | `conn_mod_def::GJ8TY9Z6Ay8::XTuI80geRt25Piu0CPTaeA` |

### Schema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection’s Shard Statuses | GET | `/v1/schema/{{className}}/shards` | `conn_mod_def::GJ8Ta7Y1Gco::S_PeYCIBRLaRuLP5YSsdDQ` |
| Get a Single Collection (Schema) by Class Name | GET | `/v1/schema/{{className}}` | `conn_mod_def::GJ8Taz5hPrc::Ko1s343oR6qhWrFUWEUn_g` |
| Get All Collection Definitions (Schema Dump) | GET | `/v1/schema` | `conn_mod_def::GJ8Ta0VOQXw::cpuUc468RH60sq2uF51HKw` |
| Create a Collection (Schema Class) | POST | `/v1/schema` | `conn_mod_def::GJ8TasbY7K4::bFEJqW6PRue96_J7VtA8KA` |
| Delete a Collection (Schema Class) and All Associated Data | DELETE | `/v1/schema/{{className}}` | `conn_mod_def::GJ8TasCMtqE::efBtKeSWSHagAOGF3eQVDg` |
| Delete a Property’s Inverted Index in a Collection | DELETE | `/v1/schema/{{className}}/properties/{{propertyName}}/index/{{indexName}}` | `conn_mod_def::GJ8Tas_Nlvw::YoaiH9w9TWqVdc_9ZXtK5w` |
| Update a Collection Definition (Schema Class) | PUT | `/v1/schema/{{className}}` | `conn_mod_def::GJ8TbC8nPOE::Esj0UQ7NTqG9uT8YmsrfsQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Database User’s Info | GET | `/v1/users/db/{{userId}}` | `conn_mod_def::GJ8TbJ6gfZE::Kn3A-UQTR3ihjm7DKqfygQ` |
| Get Current User Info | GET | `/v1/users/own-info` | `conn_mod_def::GJ8TbJO78qE::ioL9tbhGQCq5_hykGKJQTg` |
| List All Database Users | GET | `/v1/users/db` | `conn_mod_def::GJ8TbKSCANI::qBrBETD7SGy012kFwqof2A` |
| Activate a Database User | POST | `/v1/users/db/{{userId}}/activate` | `conn_mod_def::GJ8TbC1SWAg::-C-se4A1Qg2krG6jaERCig` |
| Create a New Database User | POST | `/v1/users/db/{{userId}}` | `conn_mod_def::GJ8TbDO2RAM::1UGi7ijrRSaRiqUdoWctEA` |
| Deactivate a Database User | POST | `/v1/users/db/{{userId}}/deactivate` | `conn_mod_def::GJ8TbCnghSY::SMZ03E2NSTmbQF1V_-YjrA` |
| Rotate a Database User’s API Key | POST | `/v1/users/db/{{userId}}/rotate-key` | `conn_mod_def::GJ8TbKSOc9c::kaAzBLyoQhiRdX-Lk64vJA` |

### ReplicationOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Replication Operations | GET | `/v1/replication/replicate/list` | `conn_mod_def::GJ8TaeESTwU::hsiplz4wTmi3hFLNwN_EjQ` |
| Retrieve a Replication Operation | GET | `/v1/replication/replicate/{{id}}` | `conn_mod_def::GJ8Talx3YUo::nVuc4lgZTOuh04R1ZYtlUw` |
| Cancel a Replication Operation | POST | `/v1/replication/replicate/{{id}}/cancel` | `conn_mod_def::GJ8TaV3pyYA::L0_0rnlkRk-MgD3d37A44Q` |
| Delete a Replication Operation | DELETE | `/v1/replication/replicate/{{id}}` | `conn_mod_def::GJ8TaV5G94g::KSu9CX0tSQSIedvTIVdYKA` |
| Delete All Replication Operations | DELETE | `/v1/replication/replicate` | `conn_mod_def::GJ8TaVktuNA::kwPRFl8TTRSh3n9aAfbR8g` |
| Force Delete Replication Operations | POST | `/v1/replication/replicate/force-delete` | `conn_mod_def::GJ8TadIfwcs::nU5SIVBERgKTynNdXBGs2A` |

### SchemaTenants

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection Tenant | GET | `/v1/schema/{{className}}/tenants/{{tenantName}}` | `conn_mod_def::GJ8Ta0BIi18::eHEqZrAbQVupfW3Q7AvaoA` |
| List a Collection’s Tenants | GET | `/v1/schema/{{className}}/tenants` | `conn_mod_def::GJ8Ta65oVIQ::dXpu9mJITW6wfzpgqXKasQ` |
| Check if a Tenant Exists in a Collection | HEAD | `/v1/schema/{{className}}/tenants/{{tenantName}}` | `conn_mod_def::GJ8TalaDloA::LnlxKUiBTHSXfC8f7KT6wg` |
| Delete Tenants from a Collection | DELETE | `/v1/schema/{{className}}/tenants` | `conn_mod_def::GJ8Taz_i8Nk::cv3QpmMJQuG-4Ekypd3LvA` |
| Update a Collection’s Tenants | PUT | `/v1/schema/{{className}}/tenants` | `conn_mod_def::GJ8Ta8RLq1g::BXneNMEwTRObfo52k-gVvA` |

### Aliases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Alias | GET | `/v1/aliases/{{aliasName}}` | `conn_mod_def::GJ8Taza-lwY::uX-wfNpWTRG3dCVE-eeVGg` |
| List Aliases | GET | `/v1/aliases` | `conn_mod_def::GJ8Ta62olIQ::FAoL-p1BQ9arEKG3frKK-A` |
| Create an Alias | POST | `/v1/aliases` | `conn_mod_def::GJ8TalFUIqk::KCZ5_oKtRF-shqaWo6x_nw` |
| Delete an Alias | DELETE | `/v1/aliases/{{aliasName}}` | `conn_mod_def::GJ8Tasoic94::LfDsk-RYR5eeSEjBKR4WQw` |
| Update an Alias | PUT | `/v1/aliases/{{aliasName}}` | `conn_mod_def::GJ8TbCevjl0::t3vMdYS8SZ2v6WN71dElFQ` |

### AuthzRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Authorization Roles | GET | `/v1/authz/roles` | `conn_mod_def::GJ8TYjtYlsY::pJ-iziMDQ4qyWuRiOz6v3w` |
| Add Permissions to a Role | POST | `/v1/authz/roles/{{id}}/add-permissions` | `conn_mod_def::GJ8TYdG-0aY::B4h762mZTGmo9o0WRNkj_A` |
| Check Whether a Role Has a Permission | POST | `/v1/authz/roles/{{id}}/has-permission` | `conn_mod_def::GJ8TYdhP-94::2mLEqhF1TOqkE7c_X3kRVg` |
| Remove Permissions from a Role | POST | `/v1/authz/roles/{{id}}/remove-permissions` | `conn_mod_def::GJ8TY0yktJU::Mz8zKb-vRy2Ip9InSLFuQA` |

### AuthzGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Groups by Type | GET | `/v1/authz/groups/{{groupType}}` | `conn_mod_def::GJ8TYtwTkF0::tcyHQG1fRDO_Z5WlCiy61g` |
| Assign Roles to a Group | POST | `/v1/authz/groups/{{id}}/assign` | `conn_mod_def::GJ8TYdorQ28::VPtNYY3IT0W4idHZyFm0_g` |
| Revoke Roles From a Group | POST | `/v1/authz/groups/{{id}}/revoke` | `conn_mod_def::GJ8TY0x8hVo::HEKBTuC3SjGrS2_6sc7Dug` |

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Role | GET | `/v1/authz/roles/{{id}}` | `conn_mod_def::GJ8TYmcZ3vQ::KA78KuAqTmmzkzRvkOVo4g` |
| Create Role | POST | `/v1/authz/roles` | `conn_mod_def::GJ8TYdGdB_s::_gVgr5IfRRapATu8A4oLbQ` |

### BatchObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Objects in Batch | POST | `/v1/batch/objects` | `conn_mod_def::GJ8TZFOieO0::cI3FSLlSRjqPINBmgsL1Pw` |
| Delete Objects in Batch (by Filter) | DELETE | `/v1/batch/objects` | `conn_mod_def::GJ8TZGZjVuI::ba5fOoNKTeGYRuvMNhgteg` |

### Nodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cluster Node Status | GET | `/v1/nodes` | `conn_mod_def::GJ8TZTMebdg::csNPG-rsQxi75r4kMREv4w` |
| Get Node Status for a Collection | GET | `/v1/nodes/{{className}}` | `conn_mod_def::GJ8TZUJJPWg::qGphXh17TX-6dgwXj7Ym5A` |

### AuthzUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign Roles to a User | POST | `/v1/authz/users/{{id}}/assign` | `conn_mod_def::GJ8TYdQgBG0::SHvHsH5iRSCSg_YVRKi-HA` |
| Revoke Roles From a User | POST | `/v1/authz/users/{{id}}/revoke` | `conn_mod_def::GJ8TY2O7qns::jFTZsmRCRXCu_K_RJOCl3w` |

### Classifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Classification’s Status | GET | `/v1/classifications/{{id}}` | `conn_mod_def::GJ8TZD7LV38::aE_xQqYfTZawBKjBDsFW_Q` |
| Start a Classification | POST | `/v1/classifications/` | `conn_mod_def::GJ8TZEH0kVQ::Xk4RSKvQS_mAdkSuOIyoqQ` |

### WellKnown

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Weaviate Application Liveness | GET | `/v1/.well-known/live` | `conn_mod_def::GJ8TbQejHPk::5AWllIo9RueCUYocW_PoAw` |
| Check Weaviate Application Readiness | GET | `/v1/.well-known/ready` | `conn_mod_def::GJ8TbQ2NJi8::IDd5VxRrRzCpZ52KVuUWOA` |

### AuthorizationRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Authorization Role | DELETE | `/v1/authz/roles/{{id}}` | `conn_mod_def::GJ8TYj12d_o::BthyHYIdRyu47livxr2BlQ` |

### AuthzRolesUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users Assigned to a Role (Deprecated) | GET | `/v1/authz/roles/{{id}}/users` | `conn_mod_def::GJ8TYtwTC68::jn9H_rEzTE2Fw16jIF3spA` |

### RestApiEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available REST API Endpoints (Root) | GET | `/v1/` | `conn_mod_def::GJ8TalRlOmY::pY6WsUl9T9S-fcI1rQlPAg` |

### Meta

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Weaviate Instance Metadata | GET | `/v1/meta` | `conn_mod_def::GJ8TZM3-BR0::Wc-u4n1QQ-uOMWHRM47CqQ` |

### AuthzGroupRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Roles for a Group | GET | `/v1/authz/groups/{{id}}/roles/{{groupType}}` | `conn_mod_def::GJ8TYm55H9U::u_qdE1bSQ3SuGHS8h1ociQ` |

### RoleGroupAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Group Assignments for a Role | GET | `/v1/authz/roles/{{id}}/group-assignments` | `conn_mod_def::GJ8TYkAwp_c::XW4Ckq5vREGwM-qjgSa3kA` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Distributed Tasks in the Cluster | GET | `/v1/tasks` | `conn_mod_def::GJ8TZMxLnUs::az7U0pVbSL23q8INb5RWRg` |

### GraphqlBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform Batched GraphQL Queries | POST | `/v1/graphql/batch` | `conn_mod_def::GJ8TZM0ux-U::6ZVirZEvT7a6dLmfzpovkQ` |

### ClusterStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cluster Statistics | GET | `/v1/cluster/statistics` | `conn_mod_def::GJ8TZM8Mzj8::gRTrjuKMTqqfwF9nSsF19g` |

### SchemaProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Property to a Collection (Schema) | POST | `/v1/schema/{{className}}/properties` | `conn_mod_def::GJ8TalYOD8c::DeYr_GuZS6O9smV92UNf7Q` |

### DatabaseUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Database User | DELETE | `/v1/users/db/{{userId}}` | `conn_mod_def::GJ8TbJo62-4::ex6vsnYCTAiPYW2BQtD7cA` |

### AuthzUserRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Roles Assigned to a User | GET | `/v1/authz/users/{{id}}/roles/{{userType}}` | `conn_mod_def::GJ8TYuG24y8::KFJACGGPT5qGJ0Nb3yfPEQ` |

### AuthzUsersRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Assigned Roles (Deprecated) | GET | `/v1/authz/users/{{id}}/roles` | `conn_mod_def::GJ8TYtbtlCI::b-VeAT93RDqH9GS5gbaykA` |

### RoleUserAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users Assigned to a Role | GET | `/v1/authz/roles/{{id}}/user-assignments` | `conn_mod_def::GJ8TYtE9ypA::X6fJQXwxT_-liEenbGVOGg` |

### SchemaShards

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Collection Shard’s Status | PUT | `/v1/schema/{{className}}/shards/{{shardName}}` | `conn_mod_def::GJ8Ta7RCdPg::EyuBUdrCQyaLjlL2-tvH6w` |

### ReplicationScalingPlans

| Action | Method | Path | Action id |
|---|---|---|---|
| Apply a Replication Scaling Plan | POST | `/v1/replication/scale` | `conn_mod_def::GJ8TaWhKKL4::dggDeQF4Qoy_6t8tpxd-ow` |

### Replication

| Action | Method | Path | Action id |
|---|---|---|---|
| Initiate a Replica Movement (Replicate a Shard Replica) | POST | `/v1/replication/replicate` | `conn_mod_def::GJ8TadA6ius::u3sx9mwqTbCD6CoY8iNGCA` |

### ReplicationScalePlans

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Replication Scale Plan for a Collection | GET | `/v1/replication/scale` | `conn_mod_def::GJ8TaeAPpP4::33cVP3vZQQKROhSX3pskQA` |

### OidcDiscoveryConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get OIDC Discovery Configuration | GET | `/v1/.well-known/openid-configuration` | `conn_mod_def::GJ8TbQsCs5s::cRH8XJKNQamsR0Nm8RCc-w` |

### Graphql

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute a GraphQL Query | POST | `/v1/graphql` | `conn_mod_def::GJ8TZM-Yq3M::rnoxNMXgTla97IjMfUf8yg` |

### References

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Create Cross-References (References) in Weaviate | POST | `/v1/batch/references` | `conn_mod_def::GJ8TZEw0d6o::ewlZSdv9SHCb51wpTpj6_A` |

### ReplicationShardingState

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Replication Sharding State (All Collections or a Collection/Shard) | GET | `/v1/replication/sharding-state` | `conn_mod_def::GJ8TaepG1YQ::ISdeRgNSRT2A-0OQpi-v_g` |

This lists 90 of 98 actions. For anything not here, call `search_one_platform_actions` with platform `weaviate`. The full catalog is at https://www.withone.ai/knowledge/weaviate.

## When a call fails

The error comes from Weaviate, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/weaviate

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
