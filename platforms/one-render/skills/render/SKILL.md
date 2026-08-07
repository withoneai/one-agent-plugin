---
name: render
description: Render is a cloud-hosting platform that enables developers to build, deploy, and scale web apps, APIs, static sites, and background workers with automated builds, managed infrastructure, global CDN, and built-in SSL—all without managing servers. Read and write Render data through One: keyvalue, postgresinstance, services, service, taskruns, projects and more, 196 actions with real parameter documentation. Use whenever the user asks to look something up in Render, create or update a record there, or build code against the Render API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: render
  generated-from: one-knowledge-base
---

# Render through One

Render is a cloud-hosting platform that enables developers to build, deploy, and scale web apps, APIs, static sites, and background workers with automated builds, managed infrastructure, global CDN, and built-in SSL—all without managing servers.

One exposes Render through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `render` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Render is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Render account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### KeyValue

| Action | Method | Path | Action id |
|---|---|---|---|
| List Key Value Instances | GET | `/key-value` | `conn_mod_def::GJgQ5VM5rHA::bDM62zqcSMKX1aPYY7_ZkQ` |
| Retrieve a Key Value Instance | GET | `/key-value/{{KEYVALUEID}}` | `conn_mod_def::GJgQ5j5-hmA::lv9RNgLZQd2sbdo7kq4l4A` |
| Create a Key Value Instance | POST | `/key-value` | `conn_mod_def::GJgQ5d6ReOg::YgTfOapNTdCgW8wcwr5z8w` |
| Delete a Key Value Instance | DELETE | `/key-value/{{keyValueId}}` | `conn_mod_def::GJgQ5u3vrAA::9RJ7kXF1Q8KzCEiWZtmnNA` |
| Resume a Key Value Instance | POST | `/v1/key-value/{{KEYVALUEID}}/resume` | `conn_mod_def::GJgQ6FGiyNA::-Pwfvo98QrmHrE7SM3PuBw` |
| Suspend a Key Value Instance | POST | `/v1/key-value/{{KEYVALUEID}}/suspend` | `conn_mod_def::GJgQ58uGJJA::xgmsg-YxTLCmqNLasXSpyA` |
| Update a Key Value Instance | PATCH | `/v1/key-value/{{KEYVALUEID}}` | `conn_mod_def::GJgQ5prfkqA::4-I5BCv5QtaDcduPxq4Jjw` |

### PostgresInstance

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Postgres Instance | GET | `/postgres/{{POSTGRESID}}` | `conn_mod_def::GJgQ__q3BzA::U-XSdok3SkK1-uGCYMKN6A` |
| Delete a Postgres Instance | DELETE | `/v1/postgres/{{POSTGRESID}}` | `conn_mod_def::GJgRANaazoA::AYK4l9Y2Ray7HFvYK4oZJQ` |
| Restart a Postgres Instance | POST | `/v1/postgres/{{POSTGRESID}}/restart` | `conn_mod_def::GJgRA1tvd4A::ztpRURJ0REOg0ucPJJ4kxg` |
| Resume a Postgres Instance | POST | `/v1/postgres/{{POSTGRESID}}/resume` | `conn_mod_def::GJgRAsAJ0fA::d-JNxIAMTcGYCjaQ5pV1gw` |
| Suspend a Postgres Instance | POST | `/postgres/{{POSTGRESID}}/suspend` | `conn_mod_def::GJgRAmW_ZPg::2jaLRJBHQbyH0_NvN2Dtyg` |

### Services

| Action | Method | Path | Action id |
|---|---|---|---|
| List Services | GET | `/services` | `conn_mod_def::GJgREDpdX8g::kCCL41fLRWqQVQGOV3ukAg` |
| Create a Service | POST | `/services` | `conn_mod_def::GJgREJV-8uA::0aQthDufSJqPZrBHEFTFdA` |
| Delete a Service | DELETE | `/v1/services/{{SERVICEID}}` | `conn_mod_def::GJgREeDi9mg::Xi4QK2THRV-qmo-M_8TQ4Q` |
| Scale a Service’s Instance Count | POST | `/v1/services/{{SERVICEID}}/scale` | `conn_mod_def::GJgRGQ-FVMg::jml70i-uS2m1mvrQ7e69Mg` |
| Update a Service | PATCH | `/services/{{SERVICEID}}` | `conn_mod_def::GJgREYKO6_g::ppqBCpV2RMS-9JeTNuMK6g` |

### Service

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Service | GET | `/services/{{serviceId}}` | `conn_mod_def::GJgREO9REvg::NxMJG_fIQ2KIj9q3Hic1Ug` |
| Restart a Service | POST | `/v1/services/{{SERVICEID}}/restart` | `conn_mod_def::GJgRGGUBlSA::15RVR3NVQI-zLXlf0YcqtQ` |
| Resume a Service | POST | `/v1/services/{{SERVICEID}}/resume` | `conn_mod_def::GJgRGAZydbA::rPnoWcr6T-WfyPtuAS69PQ` |
| Suspend a Service | POST | `/v1/services/{{SERVICEID}}/suspend` | `conn_mod_def::GJgRF5bnORA::A7bpAvf8TQaVjneE2tBWPg` |

### TaskRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Task Runs | GET | `/task-runs` | `conn_mod_def::GJgRJC7EdSA::rdJR3cEgT4acX05zLdCJKg` |
| Retrieve a Task Run | GET | `/task-runs/{{taskRunId}}` | `conn_mod_def::GJgRJbv35hA::i9qVJhidQAe0HU1VELoX6g` |
| Cancel a Task Run | DELETE | `/task-runs/{{TASKRUNID}}` | `conn_mod_def::GJgRJjT1o2g::MCOyyOp0Q86n47SzXV7rJA` |
| Run a Task | POST | `/task-runs` | `conn_mod_def::GJgRJJaJ4yA::UIHZeRsfT3OcNdUUnp0KVw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/projects` | `conn_mod_def::GJgRBuXgzGg::-ceCONQXTaSDjPjQg-HvmQ` |
| Create Project | POST | `/projects` | `conn_mod_def::GJgRB0k98pA::Xf3ZhM97QeexTFLqER5A7A` |
| Delete a Project | DELETE | `/v1/projects/{{PROJECTID}}` | `conn_mod_def::GJgRCGgvJYg::yHviEGj0RfqkTaV61z9VsA` |
| Update a Project | PATCH | `/projects/{{PROJECTID}}` | `conn_mod_def::GJgRCBe_Okg::7MPAyJCnQC6hN5jOUJb-Dg` |

### Blueprints

| Action | Method | Path | Action id |
|---|---|---|---|
| List Blueprints | GET | `/blueprints` | `conn_mod_def::GJgQ1EeaNdA::e4N4v0fYTUGDxMSfAjGUwg` |
| Retrieve a Blueprint | GET | `/v1/blueprints/{{blueprintId}}` | `conn_mod_def::GJgQ1Rso-lg::wM3Z0uJVTzCj6WvHCsRJrw` |
| Disconnect a Blueprint | DELETE | `/blueprints/{{BLUEPRINTID}}` | `conn_mod_def::GJgQ1fNQLtg::pZFECR8mTfGY2cZF2yVCHA` |
| Update a Blueprint | PATCH | `/blueprints/{{BLUEPRINTID}}` | `conn_mod_def::GJgQ1ZHFJOg::gGm9S6jwTLGAOkj3vkBJwA` |

### ServiceDeploy

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Service Deploy | GET | `/v1/services/{{SERVICEID}}/deploys/{{DEPLOYID}}` | `conn_mod_def::GJgQ2qEm4Yg::sKpXr10ES-SRqDm4A_nTcQ` |
| Cancel a Service Deploy | POST | `/v1/services/{{SERVICEID}}/deploys/{{DEPLOYID}}/cancel` | `conn_mod_def::GJgQ2xLCwjA::bkDlWcdMQSuWzvUzv5_S3A` |
| Roll Back a Service Deploy | POST | `/services/{{SERVICEID}}/rollback` | `conn_mod_def::GJgQ23H4mVA::UbwRS4W6Tl6qzyfdJvWSzg` |
| Trigger a Service Deploy | POST | `/services/{{SERVICEID}}/deploys` | `conn_mod_def::GJgQ2i1FCIA::h24q5pakRcemoe3TZhYR-w` |

### Disk

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Disk | GET | `/disks/{{DISKID}}` | `conn_mod_def::GJgQ3NFAPeA::o5s1N53IRhS6Vn5wafh_2A` |
| Add a Disk | POST | `/disks` | `conn_mod_def::GJgQ3FXG1hA::dpM9CsOwTQ2sjxOMC7hSdw` |
| Restore a Disk to a Snapshot | POST | `/v1/disks/{{DISKID}}/snapshots/restore` | `conn_mod_def::GJgQ3n1ytgA::h50RHKTvQWW5bXaNFDozyQ` |
| Update a Disk | PATCH | `/disks/{{diskId}}` | `conn_mod_def::GJgQ3Uxz2oA::eAS0e29NTS2ZurFJayfUaw` |

### EnvGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Environment Group | POST | `/env-groups` | `conn_mod_def::GJgQ31-RqJg::aSrNUo6gRQWQMGlQp9Rk3g` |
| Link a Service to an Environment Group | POST | `/v1/env-groups/{{ENVGROUPID}}/services/{{SERVICEID}}` | `conn_mod_def::GJgQ4TB2K7g::HBEpKlU1S8C08nzEFlBoPQ` |
| Remove an Environment Variable from an Environment Group | DELETE | `/v1/env-groups/{{ENVGROUPID}}/env-vars/{{ENVVARKEY}}` | `conn_mod_def::GJgQ4xQG5Tg::NebRUvAzTP2uEbGpC_t69w` |
| Unlink a Service from an Environment Group | DELETE | `/v1/env-groups/{{ENVGROUPID}}/services/{{SERVICEID}}` | `conn_mod_def::GJgQ4aQFlzA::Pe0L-RSBQumVp2rcykCV4Q` |

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Environments | GET | `/environments` | `conn_mod_def::GJgRCQNndaA::oRGcnudqSi6eYw1XaKuVqQ` |
| Create Environment | POST | `/environments` | `conn_mod_def::GJgRCUwmmRA::AiJuLj8UQXiEXOFaq0V34w` |
| Delete an Environment | DELETE | `/v1/environments/{{ENVIRONMENTID}}` | `conn_mod_def::GJgRCm8R6MA::U0U9OoHFTAqwtAeyxzIXow` |
| Update an Environment | PATCH | `/v1/environments/{{ENVIRONMENTID}}` | `conn_mod_def::GJgRCicEv9A::RtSpl22GQBK56Auk_DNV1w` |

### ServiceRoutes

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Service’s Redirect/Rewrite Rules | GET | `/v1/services/{{SERVICEID}}/routes` | `conn_mod_def::GJgRHjku9UA::QPfl7h6_QdqVi5CPq4TeFA` |
| Delete a Service's Redirect/Rewrite Rule | DELETE | `/services/{{SERVICEID}}/routes/{{ROUTEID}}` | `conn_mod_def::GJgRIC25_wA::fOcEwsbDTYGK1xKpVmTImg` |
| Update a Service Route's Redirect/Rewrite Rule Priority | PATCH | `/services/{{SERVICEID}}/routes` | `conn_mod_def::GJgRH4_rnqA::BN_USAB1Rqa0BgDvwjzbcw` |
| Update a Service’s Redirect/Rewrite Rules | PUT | `/v1/services/{{SERVICEID}}/routes` | `conn_mod_def::GJgRHyZYmKg::0m5Xh8vYQeedo6QOdJ7l-g` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GJgRIQE4ybA::u_SbibmETuWEFtk_4aQ6_w` |
| Create a Webhook | POST | `/webhooks` | `conn_mod_def::GJgRIWrlCLA::w3riaYpXT8-Zun_IEm7Qgw` |
| Delete a Webhook | DELETE | `/v1/webhooks/{{WEBHOOKID}}` | `conn_mod_def::GJgRIqMwCkg::0LEazDFTTmeZcOnU8jzMFg` |
| Update a Webhook | PATCH | `/webhooks/{{WEBHOOKID}}` | `conn_mod_def::GJgRIkv17ng::-Fn9MIbhSROe5gRZ-Xiv2A` |

### MaintenanceRun

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Maintenance Run | GET | `/maintenance/{{MAINTENANCERUNPARAM}}` | `conn_mod_def::GJgQ7TsDiFg::cr3Luw7FTDGBBTXAv4yNhA` |
| Trigger a Maintenance Run | POST | `/v1/maintenance/{{MAINTENANCERUNPARAM}}/trigger` | `conn_mod_def::GJgQ7isY8XA::sixEYszkTTG1yAUS8xZy2g` |
| Update a Maintenance Run | PATCH | `/v1/maintenance/{{MAINTENANCE_RUN_PARAM}}` | `conn_mod_def::GJgQ7ZG1LpA::5U1sSsrQTjKIMtXPJS7u2w` |

### MetricsStream

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Workspace’s Metrics Stream | GET | `/v1/metrics-stream/{{OWNERID}}` | `conn_mod_def::GJgQ7qD7p3A::BUpayo2dTPO2NNK_5QePrg` |
| Create or Update a Workspace’s Metrics Stream | PUT | `/v1/metrics-stream/{{OWNERID}}` | `conn_mod_def::GJgQ70FrDMg::yyDpwGUEQ96EDTEEiINAJw` |
| Delete a Workspace’s Metrics Stream | DELETE | `/metrics-stream/{{OWNERID}}` | `conn_mod_def::GJgQ77IIQiA::YqrgE_Y4SLaJJdbmdETcJg` |

### Postgres

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Postgres Instance | POST | `/postgres` | `conn_mod_def::GJgQ_3HdfUA::RPSGyXFhTEeLlueZ-RrzYg` |
| Failover a Postgres Instance | POST | `/postgres/{{POSTGRESID}}/failover` | `conn_mod_def::GJgRA7qCFwA::JUltc-4RSZy5bP4VdSGKsA` |
| Update a Postgres Instance | PATCH | `/postgres/{{POSTGRESID}}` | `conn_mod_def::GJgRAGqbJbg::E7i_3K9qTaWYga9pJ1bFAg` |

### EnvironmentGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Environment Groups | GET | `/env-groups` | `conn_mod_def::GJgQ3vVYufg::Xni7oO8zTYCsXXXIMQEfxg` |
| Delete an Environment Group | DELETE | `/env-groups/{{ENVGROUPID}}` | `conn_mod_def::GJgQ4L3P3Ag::VRyWDcssSu-jjO8tot7MRA` |
| Update an Environment Group | PATCH | `/env-groups/{{ENVGROUPID}}` | `conn_mod_def::GJgQ4FQOQEg::JmWjrPBfTHykkut4cgeXLQ` |

### EnvGroupSecretFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Environment Group’s Secret File | GET | `/v1/env-groups/{{ENVGROUPID}}/secret-files/{{SECRETFILENAME}}` | `conn_mod_def::GJgQ44ut6Eg::GqTrqhLLRg2Sy0uKWnk7tQ` |
| Add or Update an Environment Group Secret File | PUT | `/v1/env-groups/{{ENVGROUPID}}/secret-files/{{SECRETFILENAME}}` | `conn_mod_def::GJgQ5AdCzyg::EenOytffTwKnu9_pxnRpJg` |
| Remove an Environment Group Secret File | DELETE | `/v1/env-groups/{{ENVGROUPID}}/secret-files/{{SECRETFILENAME}}` | `conn_mod_def::GJgQ5ItuFzA::LGb28SZWTEibhAQOrOH5Dg` |

### RedisInstance

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Redis Instance | GET | `/redis/{{REDISID}}` | `conn_mod_def::GJgRDJjihUA::6HPmoWdxTZeOheeIEwxAQQ` |
| Delete a Redis Instance | DELETE | `/redis/{{REDISID}}` | `conn_mod_def::GJgRDWy3FPg::OAofw6JfSQq8PvTymkLGsA` |
| Update a Redis Instance | PATCH | `/redis/{{REDISID}}` | `conn_mod_def::GJgRDQ0qhqA::scwjL0bDQguX3JES16d0vw` |

### RegistryCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| List Registry Credentials | GET | `/registrycredentials` | `conn_mod_def::GJgRDmMmTRg::yI_0bbn6SzmORbYEaSYs2w` |
| Create Registry Credential | POST | `/registrycredentials` | `conn_mod_def::GJgRDsRUdbA::W253NkwbSUm63Piw8IuW7Q` |
| Delete a Registry Credential | DELETE | `/registrycredentials/{{REGISTRYCREDENTIALID}}` | `conn_mod_def::GJgRD93bYfA::UKz6RM6hSlCDbsXRNMZphQ` |

### ServiceEnvVar

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Service Environment Variable | GET | `/v1/services/{{SERVICEID}}/env-vars/{{ENVVARKEY}}` | `conn_mod_def::GJgRE7Uxxdg::bbjzHewHTli6PTDZjmTUog` |
| Add or Update a Service Environment Variable | PUT | `/v1/services/{{SERVICEID}}/env-vars/{{ENVVARKEY}}` | `conn_mod_def::GJgRFBnKx2A::tk1rZlF6QYO4hdJFAfAFgA` |
| Delete a Service Environment Variable | DELETE | `/v1/services/{{SERVICEID}}/env-vars/{{ENVVARKEY}}` | `conn_mod_def::GJgRFHmMIVg::KKGBwIJxTSuIWCD9oloClQ` |

### ServiceSecretFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Add or Update a Service Secret File | PUT | `/v1/services/{{SERVICEID}}/secret-files/{{SECRETFILENAME}}` | `conn_mod_def::GJgRFiyNfSg::oyZ4VytORtielN4ThYxYSA` |
| Delete a Service Secret File | DELETE | `/v1/services/{{SERVICEID}}/secret-files/{{SECRETFILENAME}}` | `conn_mod_def::GJgRFpC7bIg::nSY0_Jm6QGW8zNSyYgXvkQ` |
| Update a Service's Secret Files | PUT | `/services/{{SERVICEID}}/secret-files` | `conn_mod_def::GJgRFVMm11A::bXph8vasT4yfSd9Lo6--kA` |

### Workflow

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Workflow | GET | `/workflows/{{WORKFLOWID}}` | `conn_mod_def::GJgRJ20eBbg::DwgCvmFXQF6oNVm6fLuFaQ` |
| Create a Workflow | POST | `/workflows` | `conn_mod_def::GJgRJxIAVrg::SqSAgQP7RkCGcKXFnLBJYw` |
| Update a Workflow | PATCH | `/workflows/{{WORKFLOWID}}` | `conn_mod_def::GJgRKAX0Tdg::KZwp_LppRfif0Qwyx-y9kg` |

### WorkflowVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workflow Versions | GET | `/workflowversions` | `conn_mod_def::GJgRKPjaERg::45v7SLbcQweb5uVF8lWlHw` |
| Retrieve a Workflow Version | GET | `/v1/workflowversions/{{WORKFLOWVERSIONID}}` | `conn_mod_def::GJgRKezv4Eg::jhxupMbDRSiL0t_vA17FUA` |
| Deploy a Workflow Version | POST | `/workflowversions` | `conn_mod_def::GJgRKXIEZIA::g7VvzEJMTbqdYBLFrG4AFQ` |

This lists 90 of 196 actions. For anything not here, call `search_one_platform_actions` with platform `render`. The full catalog is at https://www.withone.ai/knowledge/render.

## When a call fails

The error comes from Render, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/render

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
