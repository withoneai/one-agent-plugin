---
name: new-relic
description: New Relic is an observability platform that provides application performance monitoring, infrastructure metrics, logs, and distributed tracing through APIs and dashboards, allowing engineering and operations teams to monitor system health, investigate incidents, and improve software reliability and performance. Read and write New Relic data through One: applications, alertslocationfailureconditions, alertconditions, alertsentityconditions, externalserviceconditions, alertspolicies and more, 58 actions with real parameter documentation. Use whenever the user asks to look something up in New Relic, create or update a record there, or build code against the New Relic API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: new-relic
  generated-from: one-knowledge-base
---

# New Relic through One

New Relic is an observability platform that provides application performance monitoring, infrastructure metrics, logs, and distributed tracing through APIs and dashboards, allowing engineering and operations teams to monitor system health, investigate incidents, and improve software reliability and performance.

One exposes New Relic through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `new-relic` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm New Relic is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real New Relic account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Applications

| Action | Method | Path | Action id |
|---|---|---|---|
| List Applications | GET | `/applications.json` | `conn_mod_def::GLV89rl7hFA::cz8pf3IoTA-EBfKlMVZ2lQ` |
| Show Application by ID | GET | `/v2/applications/{{id}}.json` | `conn_mod_def::GLV8-YtK32A::cK97AKryT-GwNIhnIg6r1Q` |
| Delete an Application | DELETE | `/v2/applications/{{id}}.json` | `conn_mod_def::GLV89qDGiQA::-Dit7331SImY9W94KnYp7Q` |
| Update an Application | PUT | `/v2/applications/{{id}}.json` | `conn_mod_def::GLV8-kxJLwA::lUVEpra4QoKs824ZYfQB3w` |

### AlertsLocationFailureConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Alerts Location Failure Conditions for a Policy | GET | `/v2/alerts_location_failure_conditions/policies/{{policyId}}.json` | `conn_mod_def::GLV8_P8z8IA::8JfNmo92Su6_8ky8ypTLXg` |
| Create Alerts Location Failure Conditions for a Policy | POST | `/v2/alerts_location_failure_conditions/policies/{{policyId}}.json` | `conn_mod_def::GLV8_PlsGKg::5UbIXtf5TvGf4a_EbJeXJQ` |
| Delete an Alerts Location Failure Condition | DELETE | `/v2/alerts_location_failure_conditions/{{conditionId}}.json` | `conn_mod_def::GLV8_Xbdtpg::qyja6QjLTDWwQKeoi-A9Kg` |
| Update Alerts Location Failure Condition | PUT | `/v2/alerts_location_failure_conditions/{{conditionId}}.json` | `conn_mod_def::GLV8_PxC40A::glzyK_y7QVCiTvglX-E0Eg` |

### AlertConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Alert Conditions | GET | `/v2/alerts_conditions.json` | `conn_mod_def::GLV88jpdjtg::bg1AzMIFSgatCGCNxCp6jQ` |
| Create an Alert Condition for a Policy | POST | `/v2/alerts_conditions/policies/{{policyId}}.json` | `conn_mod_def::GLV88lt8Cwg::7xwvXF2XTaaqwnNVwfneYg` |
| Update an Alert Condition | PUT | `/v2/alerts_conditions/{{conditionId}}.json` | `conn_mod_def::GLV88jiWSBA::HDCmGFwfTAeLZINNZ_ldKg` |

### AlertsEntityConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Alerts Entity Conditions for an Entity | GET | `/v2/alerts_entity_conditions/{{entityId}}.json` | `conn_mod_def::GLV88y8ACcA::hi3QkOBPTMS4aya6USorCw` |
| Add an Entity to an Alerts Condition | PUT | `/v2/alerts_entity_conditions/{{entityId}}.json` | `conn_mod_def::GLV88lwF6AA::6jDVRgdVQoa3yljXNrov5A` |
| Remove an Alerts Entity Condition | DELETE | `/v2/alerts_entity_conditions/{{entityId}}.json` | `conn_mod_def::GLV88xroqqA::pehg3ZyFQdieu0rRmG3j-g` |

### ExternalServiceConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| List External Service Conditions | GET | `/v2/alerts_external_service_conditions.json` | `conn_mod_def::GLV88xTSTTg::Cn-g6OrDTgGTSYqoSpxBNQ` |
| Create an External Service Condition for an Alert Policy | POST | `/v2/alerts_external_service_conditions/policies/{{policyId}}.json` | `conn_mod_def::GLV88xThKeg::riNrOHrISL-DPBlAAZ9jxQ` |
| Delete an External Service Condition | DELETE | `/v2/alerts_external_service_conditions/{{conditionId}}.json` | `conn_mod_def::GLV88u8O1iA::iOtVVI68Rv6SHnrzyS1LrA` |

### AlertsPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Alerts Policies | POST | `/v2/alerts_policies.json` | `conn_mod_def::GLV89JEkPXg::zKmsPnflRWK-AGfzl8euUg` |
| Delete an Alerts Policy | DELETE | `/v2/alerts_policies/{{policyId}}.json` | `conn_mod_def::GLV89Qwaojg::Z4oJq4pfTwKwojkATj6X_g` |
| Update an Alerts Policy | PUT | `/v2/alerts_policies/{{policyId}}.json` | `conn_mod_def::GLV89RFZZFA::bLswy350SG6Xd5JJ2Ld-dw` |

### SyntheticsConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Synthetics Conditions | GET | `/v2/alerts_synthetics_conditions.json` | `conn_mod_def::GLV89hbiDyA::ZVIeRVYTQ7y7pG2bQWq3SA` |
| Create a Policy's Synthetics Condition | POST | `/v2/alerts_synthetics_conditions/policies/{{policyId}}.json` | `conn_mod_def::GLV89L_EpDg::64jD66CaTvajO_3Y7uSSNQ` |
| Delete a Synthetics Condition | DELETE | `/v2/alerts_synthetics_conditions/{{conditionId}}.json` | `conn_mod_def::GLV89Z8mMDg::2RdInbwcR92usQ8Id-8lMA` |

### AlertsChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Alerts Channels | GET | `/v2/alerts_channels.json` | `conn_mod_def::GLV8-tP5rfg::AzgTqj-QQyGiwJpZFQlgzA` |
| Create Alerts Channel | POST | `/v2/alerts_channels.json` | `conn_mod_def::GLV8_Ehkl7A::HxXL7Vo9QJmNnOFrZa1RSg` |
| Delete an Alerts Channel | DELETE | `/v2/alerts_channels/{{channelId}}.json` | `conn_mod_def::GLV8-tniZ8g::Z7PNNbW9RkyRQSIQJKkpEA` |

### AlertsNrqlConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an NRQL Condition for an Alerts Policy | POST | `/v2/alerts_nrql_conditions/policies/{{policyId}}.json` | `conn_mod_def::GLV88-bOe0A::1qddJvY5Qruh32iL2ir8aw` |
| Delete an Alerts NRQL Condition | DELETE | `/v2/alerts_nrql_conditions/{{conditionId}}.json` | `conn_mod_def::GLV889QDFIA::VA42TP4BQl6iHIGEDk1pfw` |

### Deployments

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Application's Deployments | GET | `/v2/applications/{{applicationId}}/deployments.json` | `conn_mod_def::GLV89xwuWOg::f_S8_fupTxqJLsrBMi_7Cw` |
| Create Deployment for an Application | POST | `/v2/applications/{{applicationId}}/deployments.json` | `conn_mod_def::GLV89aHQZMA::pjEWDuN5TC-Ph9K80goAUg` |

### ApplicationHosts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Hosts for an Application | GET | `/v2/applications/{{applicationId}}/hosts.json` | `conn_mod_def::GLV8900jacA::9Qat5R1PSauPT1N_1CauHw` |
| Show an Application Host | GET | `/v2/applications/{{applicationId}}/hosts/{{id}}.json` | `conn_mod_def::GLV8-ZXXEWA::b5quaDiUT-Wedd1dkVNqEw` |

### AlertsPolicyChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Alerts Policy Channel Associations | DELETE | `/alerts_policy_channels.json` | `conn_mod_def::GLV8_P20l8g::44Ov3qSWS3KCvUeiVkxdqA` |
| Update Alerts Policy Channels | PUT | `/alerts_policy_channels.json` | `conn_mod_def::GLV8_gzpdNg::By1bTP68STaDENRsPtchFA` |

### KeyTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Key Transactions | GET | `/v2/key_transactions.json` | `conn_mod_def::GLV8_iGDCAA::ZXDcXCX9SZSd5vynat-8lg` |
| Show Key Transaction by ID | GET | `/v2/key_transactions/{{id}}.json` | `conn_mod_def::GLV8_gcqERA::5CtPA3-xTNCg0MHOIUaEyQ` |

### MobileApplications

| Action | Method | Path | Action id |
|---|---|---|---|
| List Mobile Applications | GET | `/v2/mobile_applications.json` | `conn_mod_def::GLV8_0sCcJg::P6mafiwuRjCk1KhQg5YtTg` |
| Show Mobile Application | GET | `/v2/mobile_applications/{{id}}.json` | `conn_mod_def::GLV9ARNasGg::IIvfdWKmSTCDAoFARY_Ppw` |

### AlertsConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Alerts Condition | DELETE | `/v2/alerts_conditions/{{conditionId}}.json` | `conn_mod_def::GLV88idx6jA::rIl6FqTqR-G5FPVcUtDb2A` |

### NrqlAlertConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| Update NRQL Alert Condition | PUT | `/v2/alerts_nrql_conditions/{{conditionId}}.json` | `conn_mod_def::GLV889n718g::ZMJfHLiFT_6jJEzwqCJ6FQ` |

### NrqlConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| List NRQL Conditions | GET | `/v2/alerts_nrql_conditions.json` | `conn_mod_def::GLV8892fYHA::GAdpCdHhT3-HRgrl91vdSg` |

### AlertsExternalServiceConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Alerts External Service Condition | PUT | `/v2/alerts_external_service_conditions/{{conditionId}}.json` | `conn_mod_def::GLV88_eA4Vg::GPRV620XTxOpGMrXoPixsA` |

### AlertPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Alert Policies | GET | `/v2/alerts_policies.json` | `conn_mod_def::GLV89Jt6hrA::JWIczAeTS6SbloMFODK4nQ` |

### AlertsSyntheticsConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Alerts Synthetics Condition | PUT | `/v2/alerts_synthetics_conditions/{{conditionId}}.json` | `conn_mod_def::GLV89a48MBg::GBWyIIeDQS2cE3LFYN_LmA` |

### ApplicationDeployments

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Application Deployment | DELETE | `/v2/applications/{{applicationId}}/deployments/{{id}}.json` | `conn_mod_def::GLV89d0om8g::ez8xFXNbQS-WfTh8c2m7jA` |

### ApplicationsInstances

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Application's Instances | GET | `/v2/applications/{{applicationId}}/instances.json` | `conn_mod_def::GLV89_K0SRg::Xt4hM--mTO-BoSr9jVuZjg` |

### ApplicationMetricData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Metric Data for an Application | GET | `/v2/applications/{{applicationId}}/metrics/data.json` | `conn_mod_def::GLV8-KBKnAg::HpU3xdP4Sr-sOWf3uNzsfQ` |

### ApplicationHostMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| List Metric Names for an Application Host | GET | `/v2/applications/{{applicationId}}/hosts/{{hostId}}/metrics.json` | `conn_mod_def::GLV8-KMVk0g::ZSdRssfuQO2gyo-7vHzZuA` |

### ApplicationInstanceMetricData

| Action | Method | Path | Action id |
|---|---|---|---|
| Metric Data for an Application Instance | GET | `/v2/applications/{{applicationId}}/instances/{{instanceId}}/metrics/data.json` | `conn_mod_def::GLV8-L-vL1A::uNaU00JYQc6g3pOhDcYnjQ` |

### ApplicationHostMetricData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Metric Data for an Application Host | GET | `/v2/applications/{{applicationId}}/hosts/{{hostId}}/metrics/data.json` | `conn_mod_def::GLV8-MLYLOA::VPebhjpiSiq6uBrbupDf7A` |

### ApplicationInstanceMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| List Metric Names for an Application Instance | GET | `/v2/applications/{{applicationId}}/instances/{{instanceId}}/metrics.json` | `conn_mod_def::GLV8-QWzPeg::6-O7dgP3QQaBJU72irI3jA` |

### ApplicationInstance

| Action | Method | Path | Action id |
|---|---|---|---|
| Show an Application Instance | GET | `/v2/applications/{{applicationId}}/instances/{{id}}.json` | `conn_mod_def::GLV8-ZL2gsg::7dNWsUFISQe2cb7JIUSKMQ` |

### ApplicationMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| List Metric Names for an Application | GET | `/v2/applications/{{applicationId}}/metrics.json` | `conn_mod_def::GLV8-alTq2g::XZ8BWUiFR1O0wfxgocx-8g` |

### AlertsIncidents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Alerts Incidents | GET | `/v2/alerts_incidents.json` | `conn_mod_def::GLV8-uxWVAA::uYuU96QHQKSmaECMf04UXg` |

### AlertEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Alert Events | GET | `/alerts_events.json` | `conn_mod_def::GLV8-wTTR5A::3ie7BodJS5q20MZpyOXL_Q` |

### AlertViolations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Alert Violations | GET | `/v2/alerts_violations.json` | `conn_mod_def::GLV8_iYVE0A::-K_HB2XaT8uQ0odKbl1VLw` |

### MobileApplicationMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| List Metric Names for a Mobile Application | GET | `/v2/mobile_applications/{{mobileApplicationId}}/metrics.json` | `conn_mod_def::GLV9ACWvqAA::xjV7hy6eQIKePOviKqfi-Q` |

### MobileApplicationMetricsData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Metric Data for a Mobile Application | GET | `/v2/mobile_applications/{{mobileApplicationId}}/metrics/data.json` | `conn_mod_def::GLV9AEnjldg::3WbtIQkHRie-b4bYvnUBUA` |

## When a call fails

The error comes from New Relic, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/new-relic

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
