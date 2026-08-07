---
name: cockroach-labs
description: Cockroach Labs develops a distributed SQL database designed for cloud applications, providing scalable, resilient, strongly consistent data storage with multi-region replication, automatic failover, and ACID transactions for mission-critical workloads. Read and write Cockroach Labs data through One: clusters, groups, egressprivateendpoints, scimuser, apikeys, folders and more, 144 actions with real parameter documentation. Use whenever the user asks to look something up in Cockroach Labs, create or update a record there, or build code against the Cockroach Labs API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: cockroach-labs
  generated-from: one-knowledge-base
---

# Cockroach Labs through One

Cockroach Labs develops a distributed SQL database designed for cloud applications, providing scalable, resilient, strongly consistent data storage with multi-region replication, automatic failover, and ACID transactions for mission-critical workloads.

One exposes Cockroach Labs through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `cockroach-labs` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Cockroach Labs is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Cockroach Labs account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Clusters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Extended Cluster Information | GET | `/api/v1/clusters/{{CLUSTER_ID}}` | `conn_mod_def::GJlL0oKvFyg::095_-NBuThCYPVr7Dmw-wg` |
| List Clusters in the Organization | GET | `/clusters` | `conn_mod_def::GJlL0WTP9Fg::jxGe07mpSm-D3spyRmVADQ` |
| Create a Cluster | POST | `/clusters` | `conn_mod_def::GJlL0cjVrsA::y8dGU0bxQ3-GyOHsjHqhyA` |
| Delete a Cluster | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}` | `conn_mod_def::GJlL03lxUUg::cLtt-hd8QHeiAzTrNH61wg` |
| Disable Prometheus Metric Export for a Cluster | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/metricexport/prometheus` | `conn_mod_def::GJlL7cM4JdA::yT0OT2zKRoiXNSFL4zugLA` |
| Enable CMEK for a Cluster | POST | `/api/v1/clusters/{{CLUSTER_ID}}/cmek` | `conn_mod_def::GJlL1d0Hayg::8FP9TGFyT4-_2vyU_mdlvA` |
| Enable Prometheus Metric Export for a Cluster | POST | `/api/v1/clusters/{{CLUSTER_ID}}/metricexport/prometheus` | `conn_mod_def::GJlL7VfDexA::1EI7hIxTS3mXqo-oH8HxAA` |
| Scale, Edit, or Upgrade a Cluster | PATCH | `/api/v1/clusters/{{CLUSTER_ID}}` | `conn_mod_def::GJlL0ug3DJA::NXnx6JWJRN2TQo4UqdyoVw` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Groups | GET | `/Groups` | `conn_mod_def::GJlL-EU-MIg::BETOEzwRRhy2XpRT5wguOQ` |
| Create a Group (SCIM) | POST | `/Groups` | `conn_mod_def::GJlL-M5vGag::jzJzOqLnT7WboAAW41JorQ` |
| Search a Group by ID | POST | `/api/scim/v2/Groups/{{ID}}/.search` | `conn_mod_def::GJlL_Dn9fsg::uh0dxJw5SziWswdYvS24ug` |
| Search a Group by ID (Deprecated) | PUT | `/Groups/{{ID}}/.search` | `conn_mod_def::GJlL_JLvLdg::iGAIOXf8R9SUZWzgof0KXQ` |
| Search Groups (SCIM) | POST | `/api/scim/v2/Groups/.search` | `conn_mod_def::GJlL-VF1J0g::OV6GU9b_TGeMtjErNPizvQ` |
| Update a Group | PUT | `/api/scim/v2/Groups/{{ID}}` | `conn_mod_def::GJlL-uvlcxg::a1lJ6sdvTlWDTN3MXUCuAA` |

### EgressPrivateEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Egress Private Endpoint for a Cluster | GET | `/api/v1/clusters/{{CLUSTER_ID}}/networking/egress-private-endpoints/{{ID}}` | `conn_mod_def::GJlL22M1CTA::PYXtyIrQTuOksZn9AhD2JA` |
| List a Cluster’s Egress Private Endpoints | GET | `/api/v1/clusters/{{CLUSTER_ID}}/networking/egress-private-endpoints` | `conn_mod_def::GJlL2hUbuUg::AC6EGVYBQYq39kvnOVrXPA` |
| Create a Cluster Egress Private Endpoint | POST | `/api/v1/clusters/{{CLUSTER_ID}}/networking/egress-private-endpoints` | `conn_mod_def::GJlL2o-_GCA::VF4yt566Te24ot4JdmUfVQ` |
| Delete a Cluster’s Egress Private Endpoint | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/networking/egress-private-endpoints/{{ID}}` | `conn_mod_def::GJlL3B-Aitg::9RgHQ9VfTbWEcw-PAjnyLw` |
| Update a Cluster’s Egress Private Endpoint | PATCH | `/api/v1/clusters/{{CLUSTER_ID}}/networking/egress-private-endpoints/{{ID}}` | `conn_mod_def::GJlL28Uv5CA::Z1RL2LsUT7ms7IhGvq-cTA` |
| Update an Egress Private Endpoint’s Domain Names | PATCH | `/api/v1/clusters/{{CLUSTER_ID}}/networking/egress-private-endpoints/{{ID}}/domain-names` | `conn_mod_def::GJlL3JfftnA::Q5uEibHhS9ezC5_vDDIHjg` |

### ScimUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a SCIM User by ID | GET | `/api/scim/v2/Users/{{id}}` | `conn_mod_def::GJlMAPPpCwA::LQUgF2BBR12oQ1ExFiuWCA` |
| Delete a SCIM User by ID | DELETE | `/api/scim/v2/Users/{{id}}` | `conn_mod_def::GJlMAjhi4ng::X_Lh39J-TkubdcLH1Aq2Uw` |
| Patch a SCIM User | PATCH | `/api/scim/v2/Users/{{ID}}` | `conn_mod_def::GJlMAdC2ZzA::u7-JvU1xSXKtuRqVCsAaTA` |
| Search SCIM User by ID | POST | `/api/scim/v2/Users/{{ID}}/.search` | `conn_mod_def::GJlMAq-uW_A::zX-_d7b1R3KOL-aU9xDzgA` |
| Update a SCIM User | PUT | `/Users/{{id}}` | `conn_mod_def::GJlMAXIalcA::HtkpDNCzQASYhReD9sKUwA` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API Key by ID | GET | `/api/v1/api-keys/{{id}}` | `conn_mod_def::GJlLxaJzv4A::9QBdkwTIS2W7UPkP8wTlCQ` |
| List API Keys | GET | `/api-keys` | `conn_mod_def::GJlLxN3HxXg::aP9ezPQWQkyjhvt4OYhdNQ` |
| Create an API Key | POST | `/api-keys` | `conn_mod_def::GJlLxT-ANIA::Cpj_ge62TSGOufRLQHW1Lg` |
| Delete an API Key | DELETE | `/api/v1/api-keys/{{id}}` | `conn_mod_def::GJlLxnWMoFg::SVUxk-D5RluV1u7ttBq_bA` |
| Update an API Key | PATCH | `/api/v1/api-keys/{{id}}` | `conn_mod_def::GJlLxgIXixA::EJEbCmopQi2P7TLCgexAQA` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Folder’s Info | GET | `/api/v1/folders/{{FOLDER_ID}}` | `conn_mod_def::GJlL4PUu7qA::0LK1Mtq6T4O4qGfPK3ZJHg` |
| List Organization Folders | GET | `/folders` | `conn_mod_def::GJlL4CIb7bA::6doErdV8RgaJ-VcxuPQPjg` |
| Create a Folder | POST | `/folders` | `conn_mod_def::GJlL4KAn-sg::Et4__DAOQj-xeF9EUsfwcw` |
| Delete a Folder | DELETE | `/api/v1/folders/{{FOLDER_ID}}` | `conn_mod_def::GJlL4ZoJuLA::ti1OhqOCT9K7uWfJrM4qew` |
| Update a Folder | PATCH | `/api/v1/folders/{{FOLDER_ID}}` | `conn_mod_def::GJlL4UlSrmg::mvwVZdNsRBKXGOHpcYLgGg` |

### PhysicalReplicationStreams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Physical Replication Stream | GET | `/api/v1/physical-replication-streams/{{id}}` | `conn_mod_def::GJlL71znCeg::Zm5XJ8afQfW_a7_uC0m16A` |
| List Physical Replication Streams | GET | `/physical-replication-streams` | `conn_mod_def::GJlL7qAzg1g::e3Yko3jQT-2QGS9Gb18Szg` |
| Create a Physical Replication Stream | POST | `/physical-replication-streams` | `conn_mod_def::GJlL7wfWC8A::ypy9L9roTiSMTzjPWAikxQ` |
| Update a Physical Replication Stream | PATCH | `/api/v1/physical-replication-streams/{{ID}}` | `conn_mod_def::GJlL79OUkcg::sd8Ps6HvSJ-mtUxvvHYTUw` |

### ServiceAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service Account by ID | GET | `/api/v1/service-accounts/{{ID}}` | `conn_mod_def::GJlMBEzzyJA::DBkIYRimTxuf0owHHISpKg` |
| List Service Accounts | GET | `/service-accounts` | `conn_mod_def::GJlMA4qJC_g::_tCBkGxpQ22syV0uRtq2-Q` |
| Delete a Service Account | DELETE | `/api/v1/service-accounts/{{ID}}` | `conn_mod_def::GJlMBRAsj0A::1KfsySChRBKR9BeLob87EA` |
| Update a Service Account | PATCH | `/api/v1/service-accounts/{{ID}}` | `conn_mod_def::GJlMBKoGv7A::f4pODtsiR-WPT8kglHzU-w` |

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Role to a User or Service Account | POST | `/api/v1/roles/{{USER_ID}}/{{RESOURCE_TYPE}}/{{RESOURCE_ID}}/{{ROLE_NAME}}` | `conn_mod_def::GJlL9s1KnRA::0Z-tiQrqSAeOMeVvMHxsgA` |
| Remove a Role From a User or Service Account | DELETE | `/api/v1/roles/{{user_id}}/{{resource_type}}/{{resource_id}}/{{role_name}}` | `conn_mod_def::GJlL90nE-iA::LT4XTTIiQTCwqWlCiQaniw` |
| Replace Roles for a User or Service Account | PUT | `/api/v1/roles/{{USER_ID}}` | `conn_mod_def::GJlL9j_9q6A::7W01xLcLT6O2fsbfY21rDQ` |

### ScimGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a SCIM Group by ID | GET | `/api/scim/v2/Groups/{{id}}` | `conn_mod_def::GJlL-of5lcg::iLIUgKGESzm3wxFlNl4xiQ` |
| Delete a SCIM Group by ID | DELETE | `/Groups/{{id}}` | `conn_mod_def::GJlL-8vncVA::vmg7LCK8TIiBcuPunoXB2w` |
| Search SCIM Groups (Deprecated) | PUT | `/Groups/.search` | `conn_mod_def::GJlL-gXnWiA::oVp8RXCyTIC8kQJHoi9X1w` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a User (SCIM) | POST | `/Users` | `conn_mod_def::GJlL_8Du5FA::edNQgTNzS1qyHfEAK37_fw` |
| Search for a User by ID (Deprecated) | PUT | `/Users/{{id}}/.search` | `conn_mod_def::GJlMAxZYPBg::0keW4kFXRhmZGjd-0VJgww` |
| Search Users (Deprecated) | PUT | `/Users/.search` | `conn_mod_def::GJlMAIRyY-g::7cozWY4ERo6w3q8sX9pa_Q` |

### EgressRule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cluster’s Egress Rule | GET | `/api/v1/clusters/{{CLUSTER_ID}}/networking/egress-rules/{{RULE_ID}}` | `conn_mod_def::GJlL3pZ78eg::M6l5-PRvQICYj-znPv1Ijw` |
| Add an Egress Rule to a Cluster | POST | `/api/v1/clusters/{{CLUSTER_ID}}/networking/egress-rules` | `conn_mod_def::GJlL3akHvKg::glej6uLVRbK68fW6MKYZVA` |
| Edit a Cluster’s Egress Rule | PATCH | `/api/v1/clusters/{{CLUSTER_ID}}/networking/egress-rules/{{RULE_ID}}` | `conn_mod_def::GJlL3v72OMg::cXkgoNXfSkCT0u90bk544g` |

### JwtIssuers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a JWT Issuer | GET | `/jwt-issuers/{{id}}` | `conn_mod_def::GJlL5irrxqg::rwIsJmGITCihybx4lN8Irw` |
| List JWT Issuers | GET | `/api/v1/jwt-issuers` | `conn_mod_def::GJlL5XOXrXg::bst683MCTuaj_m6D1asHdg` |
| Add a JWT Issuer | POST | `/jwt-issuers` | `conn_mod_def::GJlL5c-OiiA::80G_XuC8Qw6ag2NbApJFIQ` |

### PrivateEndpointConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Cluster’s Private Endpoint Connections | GET | `/api/v1/clusters/{{CLUSTER_ID}}/networking/private-endpoint-connections` | `conn_mod_def::GJlL8R9znWg::60vhX7x3QPW7cGtg4-PAnA` |
| Add a Connection to a Cluster’s Private Endpoint Service | POST | `/api/v1/clusters/{{CLUSTER_ID}}/networking/private-endpoint-connections` | `conn_mod_def::GJlL8ZQVgoA::ZfuMbOxXQQuRO7VhcHpkgw` |
| Delete a Cluster's Private Endpoint Connection | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/networking/private-endpoint-connections/{{ENDPOINT_ID}}` | `conn_mod_def::GJlL8ijwlKg::iqatHREWSVC9z4I2sIR01A` |

### ClusterClientCaCert

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cluster’s Client CA Certificate Information | GET | `/api/v1/clusters/{{CLUSTER_ID}}/client-ca-cert` | `conn_mod_def::GJlLzjUU5cg::PTxSvLFISNWzLnfeMO6RKw` |
| Delete a Cluster’s Client CA Certificate | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/client-ca-cert` | `conn_mod_def::GJlLz21KZ3g::rGumTsclQJupEZlVrHDrqg` |
| Update a Cluster’s Client CA Certificate | PATCH | `/api/v1/clusters/{{CLUSTER_ID}}/client-ca-cert` | `conn_mod_def::GJlLzxADQPg::GmzKblheSRSq9iDE1lzk8w` |

### Databases

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Cluster’s Databases | GET | `/api/v1/clusters/{{CLUSTER_ID}}/databases` | `conn_mod_def::GJlL14NflOA::z6fW-FTkQRqNcuP3uAxItg` |
| Create a Database in a Cluster | POST | `/api/v1/clusters/{{CLUSTER_ID}}/databases` | `conn_mod_def::GJlL2Cw01YA::CAN-34OVS2mpZwCwSeo-WQ` |
| Update a Cluster’s Database | PATCH | `/api/v1/clusters/{{CLUSTER_ID}}/databases` | `conn_mod_def::GJlL2KKEdlA::WbCAlM3_THKXbr-AKuW-Cw` |

### ClusterLogExportConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cluster’s Log Export Configuration | GET | `/api/v1/clusters/{{CLUSTER_ID}}/logexport` | `conn_mod_def::GJlL53I68bg::M7vyG7H2QLKJyFCMBD3FUA` |
| Delete a Cluster's Log Export Configuration | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/logexport` | `conn_mod_def::GJlL6FX5LNA::Di0yJnslTn6MLAXLiFxw3w` |

### ClusterMaintenanceWindow

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Cluster's Maintenance Window | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/maintenance-window` | `conn_mod_def::GJlL6Y0ErXA::N-AXKR87RvGLQQabSYR1Eg` |
| Set a Cluster's Maintenance Window | PUT | `/api/v1/clusters/{{CLUSTER_ID}}/maintenance-window` | `conn_mod_def::GJlL6StDBwg::_j5XE_yGQuuFk0vsT2j1_Q` |

### ClusterCloudwatchMetricExportConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cluster’s CloudWatch Metric Export Configuration | GET | `/api/v1/clusters/{{CLUSTER_ID}}/metricexport/cloudwatch` | `conn_mod_def::GJlL6hASMTg::zFJqC48_RIGp7-nShgWhVA` |
| Create or Update a Cluster’s CloudWatch Metric Export Configuration | POST | `/api/v1/clusters/{{CLUSTER_ID}}/metricexport/cloudwatch` | `conn_mod_def::GJlL6oRqILg::XwyttJKLSRKYPfE0muDtJA` |

### ClusterMetricExport

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Cluster's CloudWatch Metric Export Configuration | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/metricexport/cloudwatch` | `conn_mod_def::GJlL6vA_Umg::vSN-BiWWReCmv0S9CUY87Q` |
| Delete a Cluster's Datadog Metric Export Configuration | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/metricexport/datadog` | `conn_mod_def::GJlL7FuFZjg::QdwuO11DRUyXad2wDvCKOg` |

### PrivateEndpointServices

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Cluster's Private Endpoint Services | GET | `/api/v1/clusters/{{CLUSTER_ID}}/networking/private-endpoint-services` | `conn_mod_def::GJlL8o1ELKg::S05XeD6-TsOPEXqarp989A` |
| Create a Cluster’s Private Endpoint Services | POST | `/api/v1/clusters/{{CLUSTER_ID}}/networking/private-endpoint-services` | `conn_mod_def::GJlL8wKXUMA::J3D2ixN2TM2NrIGzf3ZuBQ` |

### PrivateEndpointTrustedOwners

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Cluster’s Private Endpoint Trusted Owners | GET | `/api/v1/clusters/{{CLUSTER_ID}}/networking/private-endpoint-trusted-owners` | `conn_mod_def::GJlL83sK10g::fx_qUwfvRYKL6wct4euhnQ` |
| Remove a Cluster Private Endpoint Trusted Owner | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/networking/private-endpoint-trusted-owners/{{OWNER_ID}}` | `conn_mod_def::GJlL9NsyYEA::3-alYVyVTs-PRNI5xkwhYw` |

### ScimUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users (SCIM) | GET | `/api/scim/v2/Users` | `conn_mod_def::GJlL_zxRoJg::Hbc7M9qdSYOAdlvD-khpKw` |
| Search SCIM Users | POST | `/Users/.search` | `conn_mod_def::GJlMACLPlAg::4jUM84kKQrGVx8I3VH0BQg` |

### SqlUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Cluster’s SQL Users | GET | `/api/v1/clusters/{{CLUSTER_ID}}/sql-users` | `conn_mod_def::GJlMBZUgJKA::wPzBtTO-RxyUI-OsBqx53g` |
| Delete a Cluster's SQL User | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/sql-users/{{NAME}}` | `conn_mod_def::GJlMBn6yj7g::fweHMb9uS0-lqkFAWEjUtg` |

### ScimResourceTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a SCIM Resource Type by ID | GET | `/ResourceTypes/{{resourceId}}` | `conn_mod_def::GJlL_WO-YRg::3F2GXCmoTi2uMjh5-O9GuQ` |
| List SCIM Resource Types | GET | `/ResourceTypes` | `conn_mod_def::GJlL_PyWb4A::kVk36aF1RZeWTJ_fjkImSg` |

### ScimSchemas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a SCIM Schema by ID | GET | `/Schemas/{{SCHEMAID}}` | `conn_mod_def::GJlL_lhjygA::N_3kcxh3QTS5o_FD5ATEaw` |
| List SCIM Schemas | GET | `/Schemas` | `conn_mod_def::GJlL_edgMbg::_Zgs2fYaR0iSuur8lHKHIQ` |

### ClusterVersionDeferralPolicy

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cluster’s Version Upgrade Deferral Policy | GET | `/api/v1/clusters/{{CLUSTER_ID}}/version-deferral` | `conn_mod_def::GJlMB2lZ8Sg::xHeFzxAjShWcrWi7kmwt4Q` |
| Set a Cluster’s Version Upgrade Deferral Policy | PUT | `/api/v1/clusters/{{CLUSTER_ID}}/version-deferral` | `conn_mod_def::GJlMB_rbpvA::a_cVn7dnS1uxjd1onRobIg` |

### ClusterDatabase

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Cluster Database | DELETE | `/api/v1/clusters/{{CLUSTER_ID}}/databases/{{NAME}}` | `conn_mod_def::GJlL2Y9qjMA::1o6J50oSRruytxuomQVjEw` |

1 more ClusterDatabase actions are available through search.

This lists 90 of 144 actions. For anything not here, call `search_one_platform_actions` with platform `cockroach-labs`. The full catalog is at https://www.withone.ai/knowledge/cockroach-labs.

## When a call fails

The error comes from Cockroach Labs, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/cockroach-labs

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
