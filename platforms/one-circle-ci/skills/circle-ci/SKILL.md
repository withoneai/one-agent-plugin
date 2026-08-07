---
name: circle-ci
description: CircleCI is a continuous integration and delivery (CI/CD) platform that automates software testing, build pipelines, and deployment workflows across environments with configurable workflows, scalable execution, and integrations to streamline release velocity. Read and write Circle CI data through One: oidccustomclaims, pipeline, webhook, pipelinedefinitions, context, pipelines and more, 111 actions with real parameter documentation. Use whenever the user asks to look something up in Circle CI, create or update a record there, or build code against the Circle CI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: circle-ci
  generated-from: one-knowledge-base
---

# Circle CI through One

CircleCI is a continuous integration and delivery (CI/CD) platform that automates software testing, build pipelines, and deployment workflows across environments with configurable workflows, scalable execution, and integrations to streamline release velocity.

One exposes Circle CI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `circle-ci` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Circle CI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Circle CI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### OidcCustomClaims

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s OIDC Custom Claims | GET | `/api/v2/org/{{ORGID}}/project/{{PROJECTID}}/oidc-custom-claims` | `conn_mod_def::GJj4xYDv2_g::H9S5bH-IRlSe0KGF8apANg` |
| Get an Organization’s OIDC Custom Claims | GET | `/org/{{ORGID}}/oidc-custom-claims` | `conn_mod_def::GJj4xB_VpgA::qS0FI5UKQWit7kxFAGtSVA` |
| Delete a Project’s OIDC Custom Claims (Project-Level) | DELETE | `/api/v2/org/{{ORGID}}/project/{{PROJECTID}}/oidc-custom-claims` | `conn_mod_def::GJj4xl7J_Ng::x91IOF7vSk-nnMSfq4PACQ` |
| Delete an Organization’s OIDC Custom Claims | DELETE | `/api/v2/org/{{ORGID}}/oidc-custom-claims` | `conn_mod_def::GJj4xRjAfOA::mMU9Hw0ETLGlkCbxskO-VA` |
| Patch a Project’s OIDC Custom Claims (Project-level) | PATCH | `/api/v2/org/{{ORGID}}/project/{{PROJECTID}}/oidc-custom-claims` | `conn_mod_def::GJj4xegUkXA::hem7nIq2STWgenq3bheJEg` |
| Patch an Organization’s OIDC Custom Claims | PATCH | `/org/{{ORGID}}/oidc-custom-claims` | `conn_mod_def::GJj4xJYNbVg::PsU8NEquSQaBk6ZqsxHAvw` |

### Pipeline

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pipeline by ID | GET | `/api/v2/pipeline/{{PIPELINE-ID}}` | `conn_mod_def::GJj4yhMx8wg::oqeswc5bRB2msiOH8XPWLg` |
| Get a Project Pipeline by Pipeline Number | GET | `/api/v2/project/{{PROJECT-SLUG}}/pipeline/{{PIPELINE-NUMBER}}` | `conn_mod_def::GJj4zXhuBxg::JgxIC8UhTTCP0b3-9pR6rQ` |
| Continue a Pipeline | POST | `/pipeline/continue` | `conn_mod_def::GJj4ybQjWsg::sJBirPd0T9uTrEEv3Dy05g` |
| Trigger a New Pipeline for a Project | POST | `/api/v2/project/{{PROJECT-SLUG}}/pipeline` | `conn_mod_def::GJj4zGIBkag::62kyKR8WTNe8EvoSpvs2rw` |
| Trigger a New Pipeline for a Project | POST | `/api/v2/project/{{PROVIDER}}/{{ORGANIZATION}}/{{PROJECT}}/pipeline/run` | `conn_mod_def::GJj4zfVbOpg::-ydxO503QW6u3oYgJTfC2w` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook by ID | GET | `/api/v2/webhook/{{WEBHOOK-ID}}` | `conn_mod_def::GJj44Xai0NA::f9DDRBwmQaecwSmwMhmMPQ` |
| Create an Outbound Webhook | POST | `/webhook` | `conn_mod_def::GJj44Q0eQfg::BbPXN0fDRqepJQJ2FJ-Dgg` |
| Delete an Outbound Webhook | DELETE | `/api/v2/webhook/{{WEBHOOK-ID}}` | `conn_mod_def::GJj44lqNRDg::AVmSmwbwQwSBCKcruB_Ppw` |
| Update an Outbound Webhook | PUT | `/api/v2/webhook/{{WEBHOOK-ID}}` | `conn_mod_def::GJj44c4uTKg::ApscqGdAShWjlW_fyHUb0Q` |

### PipelineDefinitions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Pipeline Definitions | GET | `/projects/{{PROJECT_ID}}/pipeline-definitions` | `conn_mod_def::GJj4zkunOWA::CJXSQfodRfWnEF_DLHntmQ` |
| Create a Project’s Pipeline Definition | POST | `/api/v2/projects/{{PROJECT_ID}}/pipeline-definitions` | `conn_mod_def::GJj4zrH7Ibg::XTd1RWIlQtCrlu4hK8_f2w` |
| Delete a Project’s Pipeline Definition | DELETE | `/api/v2/projects/{{PROJECT_ID}}/pipeline-definitions/{{PIPELINE_DEFINITION_ID}}` | `conn_mod_def::GJj40BsrlCg::DP5QdT_qSsWBJ0z_IBCwmw` |
| Update a Project’s Pipeline Definition | PATCH | `/api/v2/projects/{{PROJECT_ID}}/pipeline-definitions/{{PIPELINE_DEFINITION_ID}}` | `conn_mod_def::GJj4z7PnPQg::tj-S1kCyTgiJ-xnrUL_rpQ` |

### Context

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Context | GET | `/api/v2/context/{{CONTEXT_ID}}` | `conn_mod_def::GJj4tMky0ng::UTFu9-bSRqi1d0TlXP9wxg` |
| Create a New Context | POST | `/context` | `conn_mod_def::GJj4tC5dVyg::WG3WMgLGREWWQbsfJ_mALA` |
| Delete a Context | DELETE | `/context/{{CONTEXT_ID}}` | `conn_mod_def::GJj4tU-OQPA::DVlel5VCR-SyU5n9_Ag1CQ` |

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Pipelines for a Project | GET | `/api/v2/project/{{PROJECT-SLUG}}/pipeline/mine` | `conn_mod_def::GJj4zPhx0mA::Qy9V0J_8R9C567GLkJxP_g` |
| List a Project’s Pipelines | GET | `/api/v2/project/{{PROJECT-SLUG}}/pipeline` | `conn_mod_def::GJj4y966aBA::Om5TP2p0RxelQFu8MlC5JQ` |
| List Pipelines | GET | `/pipeline` | `conn_mod_def::GJj4yTyWb2g::7Q0T7jI4QCSMDYaE-40X1A` |

### Project

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/api/v2/project/{{PROJECT-SLUG}}` | `conn_mod_def::GJj41VmqbVA::yLgXzy1pQw2qR45Sg-iLIA` |
| Create a CircleCI Project (Deprecated) | POST | `/api/v2/project/{{provider}}/{{organization}}/{{project}}` | `conn_mod_def::GJj42Wtzbug::DRNxIMrEQ8S1rn03e6MhTQ` |
| Delete a Project | DELETE | `/api/v2/project/{{PROJECT-SLUG}}` | `conn_mod_def::GJj41bI8myg::mSyiKBftQrCvZuBlylqmNg` |

### Workflow

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workflow | GET | `/workflow/{{id}}` | `conn_mod_def::GJj44qwF1Xg::du6-TUonRnWqLXcFfN-8iA` |
| Cancel a Workflow | POST | `/workflow/{{ID}}/cancel` | `conn_mod_def::GJj4419YfvA::b_3L5rb-T2mahNohL8ejUA` |
| Rerun a Workflow | POST | `/api/v2/workflow/{{id}}/rerun` | `conn_mod_def::GJj45Br-AIA::pv0OfAO2RbqHlmImTL7Wdw` |

### OrganizationGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization’s Groups | GET | `/api/v2/organizations/{{ORG_ID}}/groups` | `conn_mod_def::GJj4uvXcrcA::BwpFJQpfSx6mEDvgHx5UhA` |
| Create an Organization Group | POST | `/api/v2/organizations/{{ORG_ID}}/groups` | `conn_mod_def::GJj4u4sZHbA::6hrUb4qOTs-PsQ4Hthil7g` |
| Delete an Organization Group | DELETE | `/api/v2/organizations/{{ORG_ID}}/groups/{{GROUP_ID}}` | `conn_mod_def::GJj4vEUECng::JXbNunjCQ6uJrQGrXVSwZg` |

### Organization

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization | GET | `/api/v2/organization/{{ORG-SLUG-OR-ID}}` | `conn_mod_def::GJj4xx4Q4Eg::jcqrYu5KR5OkQqtvZy7qjw` |
| Create a New Organization | POST | `/organization` | `conn_mod_def::GJj4xsC3XpA::MTtlYxhYS8u4oso4swj7Vw` |
| Delete an Organization | DELETE | `/api/v2/organization/{{ORG-SLUG-OR-ID}}` | `conn_mod_def::GJj4x4vsB6A::5EeWnJ9hSXmBH9g1uxHysQ` |

### ProjectCheckoutKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Checkout Key | GET | `/api/v2/project/{{project-slug}}/checkout-key/{{fingerprint}}` | `conn_mod_def::GJj41vL0A9A::mRINJRYoSP2P9PjoCp-LLA` |
| Create a New Project Checkout Key | POST | `/api/v2/project/{{PROJECT_SLUG}}/checkout-key` | `conn_mod_def::GJj41nk_Uog::z-zHd5iXTJegYsrsKE3NKw` |
| Delete a Project Checkout Key | DELETE | `/api/v2/project/{{PROJECT-SLUG}}/checkout-key/{{FINGERPRINT}}` | `conn_mod_def::GJj412vsvAA::he0v8dV5SE2nhizOeglp1g` |

### ProjectEnvVar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Masked Environment Variable | GET | `/api/v2/project/{{PROJECT-SLUG}}/envvar/{{NAME}}` | `conn_mod_def::GJj42JXTBIg::O6FIBXcGSDCF0uH8A8eezA` |
| Create a Project Environment Variable | POST | `/api/v2/project/{{PROJECT_SLUG}}/envvar` | `conn_mod_def::GJj42DPdwzA::hAStXbXWRTGTnuP8dsAGzA` |
| Delete a Project Environment Variable | DELETE | `/api/v2/project/{{PROJECT-SLUG}}/envvar/{{NAME}}` | `conn_mod_def::GJj42RCAOug::F6C8JlBKSnC9gqNpcwfKBA` |

### Schedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Schedule by ID | GET | `/api/v2/schedule/{{SCHEDULE-ID}}` | `conn_mod_def::GJj427WD61A::kwyFvkgQR3qx2KAhnCCNPA` |
| Delete a Schedule | DELETE | `/api/v2/schedule/{{SCHEDULE-ID}}` | `conn_mod_def::GJj43Ig2cQg::sl82oL1tRBqOxeI9kpQs4w` |
| Update a Schedule | PATCH | `/api/v2/schedule/{{SCHEDULE-ID}}` | `conn_mod_def::GJj43CvWHGA::hRUjq_VrRQeOkhQmyXNKeg` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User Information | GET | `/me` | `conn_mod_def::GJj435Z1TyA::UDSeowqfQbySF1Yzwss-Bg` |
| Get User Information | GET | `/api/v2/user/{{ID}}` | `conn_mod_def::GJj44EjRqeg::coV34OuJTSiYlG9EGCys6g` |

### ContextEnvironmentVariable

| Action | Method | Path | Action id |
|---|---|---|---|
| Add or Update a Context Environment Variable | PUT | `/api/v2/context/{{CONTEXT_ID}}/environment-variable/{{ENV_VAR_NAME}}` | `conn_mod_def::GJj4tkotX1A::-6vEU3kfS8ijIZ3yKF3Dxw` |
| Remove a Context Environment Variable | DELETE | `/context/{{context_id}}/environment-variable/{{env_var_name}}` | `conn_mod_def::GJj4ts7GIrA::kgDPMVW7SI6DGwjcuqpjTw` |

### ContextRestriction

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Context Restriction | POST | `/context/{{CONTEXT_ID}}/restrictions` | `conn_mod_def::GJj4t7oP8ig::3KRruZJLQ6qlUcxkFVecVg` |
| Delete a Context Restriction | DELETE | `/api/v2/context/{{CONTEXT_ID}}/restrictions/{{RESTRICTION_ID}}` | `conn_mod_def::GJj4uDbqn3g::mMvwJdIqQ-m0D2rev-DBxw` |

### ProjectJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Job’s Details | GET | `/api/v2/project/{{PROJECT-SLUG}}/job/{{JOB-NUMBER}}` | `conn_mod_def::GJj4wj-rotg::bvfPpv2STvS03VCXqb4hPg` |
| Cancel a Project Job by Job Number | POST | `/api/v2/project/{{PROJECT-SLUG}}/job/{{JOB-NUMBER}}/cancel` | `conn_mod_def::GJj4wr_Ctng::Rx7GPxocRjy-TUXYA5Tshw` |

### PolicyBundle

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Context Policy Document (Policy Bundle) for an Owner | GET | `/api/v2/owner/{{OWNERID}}/context/{{CONTEXT}}/policy-bundle/{{POLICYNAME}}` | `conn_mod_def::GJj41Jqj9hA::JvZ4I74TTxKmLN7Tgv7J8Q` |
| Retrieve a Policy Bundle for a Decision Log | GET | `/owner/{{OWNERID}}/context/{{CONTEXT}}/decision/{{DECISIONID}}/policy-bundle` | `conn_mod_def::GJj400veNaA::3p2QqKhISAC2Ir2BIRcHbw` |

### ContextPolicyBundle

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Context Policy Bundle for an Owner | GET | `/api/v2/owner/{{OWNERID}}/context/{{CONTEXT}}/policy-bundle` | `conn_mod_def::GJj407YpqnA::CqWb3n5kTBiKJSBFj5vvsw` |
| Create a Context Policy Bundle for an Owner | POST | `/api/v2/owner/{{OWNERID}}/context/{{CONTEXT}}/policy-bundle` | `conn_mod_def::GJj41CovW0A::74PzgaCcTfObvseLcLISJQ` |

### ProjectTrigger

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Trigger | GET | `/api/v2/projects/{{PROJECT_ID}}/triggers/{{TRIGGER_ID}}` | `conn_mod_def::GJj43awhmNA::vLaLW7BFTPa3-AjNyTSTWA` |
| Update a Project Trigger | PATCH | `/api/v2/projects/{{PROJECT_ID}}/triggers/{{TRIGGER_ID}}` | `conn_mod_def::GJj43hwL4Xg::fqJ3S3iKS0K9vqob5PKpWw` |

### WorkflowRunsInsights

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Recent Workflow Runs (Insights) for a Project | GET | `/api/v2/insights/{{PROJECT-SLUG}}/workflows/{{WORKFLOW-NAME}}` | `conn_mod_def::GJj4v9wArSA::K7rGjq_CS46P5TprChaydA` |

### ProjectJobTestMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Job’s Test Metadata | GET | `/api/v2/project/{{PROJECT-SLUG}}/{{JOB-NUMBER}}/tests` | `conn_mod_def::GJj4w6vTPQg::yTe-JoQ5QVWM-gHqEgGxdQ` |

### OrganizationUrlOrbAllowListEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization’s URL Orb Allow-list Entries | GET | `/organization/{{ORG-SLUG-OR-ID}}/url-orb-allow-list` | `conn_mod_def::GJj4x-ylD9g::PoDqoqdNTeeKlRKQQnK3gA` |

### PipelineValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pipeline’s Values | GET | `/api/v2/pipeline/{{PIPELINE-ID}}/values` | `conn_mod_def::GJj4yu61z6g::BxGqfl0DQOWbeFBTJkh6tQ` |

### PipelineWorkflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pipeline’s Workflows | GET | `/api/v2/pipeline/{{PIPELINE-ID}}/workflow` | `conn_mod_def::GJj4y2IKCsg::kb4KAI3WQ4mVn4RTzUmVrw` |

### DecisionAuditLog

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Owner's Decision Audit Log | GET | `/api/v2/owner/{{OWNERID}}/context/{{CONTEXT}}/decision/{{DECISIONID}}` | `conn_mod_def::GJj40m-eIWg::PShuClFWR2uquPrC_b7CNQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks (by Scope) | GET | `/webhook` | `conn_mod_def::GJj44LZ-GFA::O1HnuS65QqKKYlp3dbluqQ` |

### WorkflowJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workflow’s Jobs | GET | `/api/v2/workflow/{{ID}}/job` | `conn_mod_def::GJj448R-82g::bSfdbEpJSNWCO-lYb1AU2Q` |

### Contexts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contexts for an Owner | GET | `/context` | `conn_mod_def::GJj4s853u_A::fvSXSs-qRtWARPxI-KjphQ` |

### ContextEnvironmentVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Context’s Environment Variables | GET | `/context/{{CONTEXT_ID}}/environment-variable` | `conn_mod_def::GJj4tdJmgAA::W4m0MJFwQQqmPM3kVEkHLw` |

### ContextRestrictions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Context Restrictions | GET | `/api/v2/context/{{CONTEXT_ID}}/restrictions` | `conn_mod_def::GJj4t0GRing::yG7ik0QESdGO7nMclx7IEA` |

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Environments | GET | `/deploy/environments` | `conn_mod_def::GJj4uKqn8PA::Gz5VgPVJRGurLRt9JwksRQ` |

### DeployEnvironment

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deploy Environment by ID | GET | `/api/v2/deploy/environments/{{ENVIRONMENT_ID}}` | `conn_mod_def::GJj4uSmEiMA::v6xcynTDQuaybnNZrLZoFg` |

### DeployComponents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Deploy Components for an Organization | GET | `/deploy/components` | `conn_mod_def::GJj4uYkMjvA::oIeoimw1TG29tFsmIM7ARg` |

### DeployComponent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deploy Component | GET | `/api/v2/deploy/components/{{COMPONENT_ID}}` | `conn_mod_def::GJj4ugjGcxg::qQAouFuTTlioItp0PnhMzg` |

### ComponentVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Component Versions | GET | `/deploy/components/{{COMPONENT_ID}}/versions` | `conn_mod_def::GJj4unLs6yg::g92iRsVaQbaxUUqTzEMk3g` |

### OrganizationGroup

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization’s Group Details | GET | `/organizations/{{ORG_ID}}/groups/{{GROUP_ID}}` | `conn_mod_def::GJj4u-3I8MA::4ija52EwQ_ikTsK1id0eXQ` |

### ProjectInsightsSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Insights Summary Metrics and Trends | GET | `/api/v2/insights/pages/{{PROJECT-SLUG}}/summary` | `conn_mod_def::GJj4vMtRnhA::3gEGJd88QYWeiaiM4yRQpQ` |

### JobTimeseriesData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Timeseries Data for a Workflow in a Project | GET | `/api/v2/insights/time-series/{{PROJECT-SLUG}}/workflows/{{WORKFLOW-NAME}}/jobs` | `conn_mod_def::GJj4vVAOEig::tpijesxrTWuw3BtEWnypMg` |

### OrganizationInsightsSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization’s Insights Summary Metrics (with Project Trends) | GET | `/insights/{{ORG_SLUG}}/summary` | `conn_mod_def::GJj4vdHIJ2g::Rn0OfGwLQpCF-7x92bzX6w` |

### InsightBranches

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Insight Branches | GET | `/api/v2/insights/{{PROJECT-SLUG}}/branches` | `conn_mod_def::GJj4vlQh0Dg::H3iZYYc2TMaSsLJuJf3UUw` |

### FlakyTests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Flaky Tests | GET | `/api/v2/insights/{{PROJECT-SLUG}}/flaky-tests` | `conn_mod_def::GJj4vumVB5g::lyQzEZ-GQe-EOI6ihv0onw` |

### WorkflowSummaryMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Workflow Summary Metrics (Insights) | GET | `/api/v2/insights/{{PROJECT_SLUG}}/workflows` | `conn_mod_def::GJj4v1As8hg::WsehZqktQUeeKxDbdQ4oaw` |

### WorkflowJobSummaryMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Summary Metrics for a Project Workflow’s Jobs | GET | `/api/v2/insights/{{PROJECT-SLUG}}/workflows/{{WORKFLOW-NAME}}/jobs` | `conn_mod_def::GJj4wFSrMcg::tWARRLnXT3GJ8AK6FL3zxw` |

### ProjectWorkflowInsightsSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Workflow’s Insights Summary (Metrics & Trends) | GET | `/api/v2/insights/{{PROJECT_SLUG}}/workflows/{{WORKFLOW_NAME}}/summary` | `conn_mod_def::GJj4wNQ9BCA::3rYo2dLrT3CrZVfrG_ijNA` |

### TestMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Test Metrics for a Project’s Workflow | GET | `/api/v2/insights/{{PROJECT-SLUG}}/workflows/{{WORKFLOW-NAME}}/test-metrics` | `conn_mod_def::GJj4wVlScZA::dtLvwPymRTGv0EH_2imuGQ` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Job by Job ID | POST | `/jobs/{{job-id}}/cancel` | `conn_mod_def::GJj4wbVo6BA::Cm4iChnSRsWaroor2Z3HHQ` |

### JobArtifacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job’s Artifacts (Project) | GET | `/api/v2/project/{{PROJECT-SLUG}}/{{JOB-NUMBER}}/artifacts` | `conn_mod_def::GJj4wyP11fg::lvYJX7z_QUaHN3E2OJ6C9w` |

### UrlOrbAllowListEntry

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a URL Orb Allow-List Entry for an Organization | POST | `/organization/{{ORG-SLUG-OR-ID}}/url-orb-allow-list` | `conn_mod_def::GJj4yFRsSsg::No_x-GLNRC2CTWBDPDh6PA` |

### OrganizationUrlOrbAllowListEntry

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove an Organization URL Orb Allow-List Entry | DELETE | `/api/v2/organization/{{ORG-SLUG-OR-ID}}/url-orb-allow-list/{{ALLOW-LIST-ENTRY-ID}}` | `conn_mod_def::GJj4yMAAGjA::WfTqywHaQg6yN9NPpOn5AQ` |

This lists 90 of 111 actions. For anything not here, call `search_one_platform_actions` with platform `circle-ci`. The full catalog is at https://www.withone.ai/knowledge/circle-ci.

## When a call fails

The error comes from Circle CI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/circle-ci

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
