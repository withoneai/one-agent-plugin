---
name: data-robot
description: DataRobot is an AI and machine learning platform that provides tools for building, deploying, and managing predictive models and generative AI applications, allowing data science and engineering teams to automate model development, governance, monitoring, and integration into business workflows. Read and write DataRobot data through One: deployments, datasets, notebooksessions, files, projects, notebooks and more, 1687 actions with real parameter documentation. Use whenever the user asks to look something up in DataRobot, create or update a record there, or build code against the DataRobot API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: data-robot
  generated-from: one-knowledge-base
---

# DataRobot through One

DataRobot is an AI and machine learning platform that provides tools for building, deploying, and managing predictive models and generative AI applications, allowing data science and engineering teams to automate model development, governance, monitoring, and integration into business workflows.

One exposes DataRobot through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `data-robot` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm DataRobot is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real DataRobot account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Deployments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Accuracy Over Batch for a Deployment | GET | `/api/v2/deployments/{{deploymentId}}/accuracyOverBatch/` | `conn_mod_def::GMkgxCjpBRg::zUjlrqpTRqOjycB4NWDiaw` |
| List Batch Service Health Metrics for a Deployment | GET | `/api/v2/deployments/{{deploymentId}}/batchServiceStats/` | `conn_mod_def::GMkgzL7rmig::vtZOuNkrSFaE8POMNnHheA` |
| List Deployments | GET | `/api/v2/deployments/` | `conn_mod_def::GMkgeCYwuSA::MS-_rNpjRbSgXVvOYKS_fQ` |
| List Deployments for a Registered Model | GET | `/api/v2/registeredModels/{{registeredModelId}}/deployments/` | `conn_mod_def::GMkgo-tHGoA::7z0wgwAWQx-aq5xvFG7tpg` |
| List Deployments for a Registered Model Version | GET | `/api/v2/registeredModels/{{registeredModelId}}/versions/{{versionId}}/deployments/` | `conn_mod_def::GMkgo1pJD8A::eyEvctCIRZKumbaVrF81fQ` |
| List Deployments for a Use Case | GET | `/api/v2/useCases/{{useCaseId}}/deployments/` | `conn_mod_def::GMkg5uDresA::asCLPNYdT0mDCIWWv9LiYQ` |
| Retrieve a Deployment by ID | GET | `/api/v2/deployments/{{deploymentId}}/` | `conn_mod_def::GMkgeJa6EIg::rTTRD726RRK3iW1ouAvgZw` |
| Retrieve a Deployment's Champion Model History | GET | `/api/v2/deployments/{{deploymentId}}/modelHistory/` | `conn_mod_def::GMkgeJpCqqg::QXTc-lu5RQyF8WtIMie_5g` |
| Retrieve a Deployment's Champion Model Package | GET | `/api/v2/deployments/{{deploymentId}}/championModelPackage/` | `conn_mod_def::GMkgoG_WNfA::DhebH4v0SxO5Fuj8c7B-tA` |
| Retrieve a Deployment's Custom Metrics Bulk Summary | GET | `/api/v2/deployments/{{deploymentId}}/customMetricsSummary/` | `conn_mod_def::GMkgyTgxE4A::UP7fwg-7RBywYW6eeMH9Eg` |
| Retrieve Accuracy Metrics for a Deployment | GET | `/api/v2/deployments/{{deploymentId}}/accuracy/` | `conn_mod_def::GMkgw8f4nRg::eoIzW_hNThu0d3yJ94E_Bg` |
| Retrieve Accuracy Over Space for a Deployment | GET | `/api/v2/deployments/{{deploymentId}}/accuracyOverSpace/` | `conn_mod_def::GMkgxKMk3Ag::3OaHPYmjSDuPCd9lDj8_dQ` |

31 more Deployments actions are available through search.

### Datasets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dataset Feature Transform by Dataset ID | GET | `/api/v2/datasets/{{datasetId}}/featureTransforms/{{featureName}}/` | `conn_mod_def::GMkgYyjo9Fg::IqmdTTXtQziZK7ndQmUkmA` |
| Get All Feature Details for a Dataset | GET | `/api/v2/datasets/{{datasetId}}/allFeaturesDetails/` | `conn_mod_def::GMkgYz9pslg::IRkCLuv0Qo2OfDvGzyEhNg` |
| Get Dataset Details by ID | GET | `/api/v2/datasets/{{datasetId}}/` | `conn_mod_def::GMkgYqF4uoA::2csvUwAkQney02KWaZQoaw` |
| Get Dataset Version Details by Dataset ID | GET | `/api/v2/datasets/{{datasetId}}/versions/{{datasetVersionId}}/` | `conn_mod_def::GMkgYp78oqg::CmZ33-N8S4SvEQLpBhu9_g` |
| List Access Control for a Dataset | GET | `/api/v2/datasets/{{datasetId}}/accessControl/` | `conn_mod_def::GMkgZGi4M2g::SX7GUXtNQSG-x6QHDqeTrw` |
| List All Feature Details for a Dataset Version | GET | `/api/v2/datasets/{{datasetId}}/versions/{{datasetVersionId}}/allFeaturesDetails/` | `conn_mod_def::GMkgZtQFdeg::g-JVE4AyQTO318FTuR7huA` |
| List an Image Data Quality Log for a Dataset | GET | `/api/v2/datasets/{{datasetId}}/imagesDataQualityLog/` | `conn_mod_def::GMkghK6oQvg::gokbTi6uTYqDA-WJqJSGKQ` |
| List Datasets | GET | `/api/v2/datasets/` | `conn_mod_def::GMkgZS9_-PA::TXhumP3mQFKDgCR8NIIWdQ` |
| List Related Datasets for a Dataset | GET | `/api/v2/datasets/{{datasetId}}/relationships/` | `conn_mod_def::GMkgZSRv4VA::JSoVpbh3R2iCpDQoZeB2mg` |
| Retrieve a Dataset's Documents Data Quality Log | GET | `/api/v2/datasets/{{datasetId}}/documentsDataQualityLog/` | `conn_mod_def::GMkghCHhWgg::15phjMaLQnWdcXG1hP8hCA` |
| Retrieve a Documents Data Quality Log File for a Dataset | GET | `/api/v2/datasets/{{datasetId}}/documentsDataQualityLog/file/` | `conn_mod_def::GMkggZ6G-OA::322C-aLZSEyNADn2aGoPmA` |
| Retrieve an Images Data Quality Log File for a Dataset | GET | `/api/v2/datasets/{{datasetId}}/imagesDataQualityLog/file/` | `conn_mod_def::GMkggmPv9aA::8mhVpwFJTiyk0EqfDF1WEA` |

26 more Datasets actions are available through search.

### NotebookSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Filesystem Objects for a Notebook Session | GET | `/api/v2/notebookSessions/{{notebookId}}/filesystem/objects/download/` | `conn_mod_def::GMkgtVlp0gg::rbyIwXnIQCiRI8M07w6mEA` |
| Retrieve a Notebook by ID | GET | `/api/v2/notebookSessions/{{notebookId}}/notebook/` | `conn_mod_def::GMkgtqhqxrg::oR6y3z9pR-KMc_lriwDSgw` |
| Retrieve Download by Notebook ID | GET | `/api/v2/notebookSessions/{{notebookId}}/filesystem/download/` | `conn_mod_def::GMkgtWSTZRg::MjQchpkOQn6DD-I8Y4x97g` |
| Retrieve Executing Files by Notebook ID | GET | `/api/v2/notebookSessions/{{notebookId}}/scripts/executing/` | `conn_mod_def::GMkgtiwlb-A::jT5Jami6TQaRLyeRvBFsCw` |
| Retrieve Kernelspecs for a Notebook Session | GET | `/api/v2/notebookSessions/{{notebookId}}/kernelspecs/` | `conn_mod_def::GMkgtq_a58A::a1oqaaMHQ_mctwNn9IY5_w` |
| Retrieve Metadata by Notebook ID | GET | `/api/v2/notebookSessions/{{notebookId}}/filesystem/objects/metadata/` | `conn_mod_def::GMkgtqBa06A::4YxB11PRRtSqv9V4su0w5A` |
| Retrieve Status by Notebook ID | GET | `/api/v2/notebookSessions/{{notebookId}}/git/clone/status/` | `conn_mod_def::GMkguVsx14A::4j9CoeOeSsK-A9-Cz1Y5oA` |
| Cancel Cells for a Notebook Session | POST | `/api/v2/notebookSessions/{{notebookId}}/notebook/cells/cancel/` | `conn_mod_def::GMkgqV_o-dA::SzKW5YfsQlOorFn7eFpz9w` |
| Cancel Clone for a Notebook Session | POST | `/api/v2/notebookSessions/{{notebookId}}/git/clone/cancel/` | `conn_mod_def::GMkgqWXBnnA::OBINIsdiR6W7KmGHqXvKqA` |
| Copy Filesystem Objects by Notebook ID | POST | `/api/v2/notebookSessions/{{notebookId}}/filesystem/objects/copy/` | `conn_mod_def::GMkgq4SBPNg::RzScBeghQRysDL4j8DZbQw` |
| Create a Download for a Notebook Session | POST | `/api/v2/notebookSessions/{{notebookId}}/filesystem/objects/download/` | `conn_mod_def::GMkgrBHQDsA::ABPQy-G6R5WjqHx-TBi3Pw` |
| Create an Upload for a Notebook Session | POST | `/api/v2/notebookSessions/{{notebookId}}/filesystem/objects/upload/` | `conn_mod_def::GMkgr8mQQEA::c45UWuX-RNi_MNALirVelA` |

14 more NotebookSessions actions are available through search.

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Files for a Catalog | GET | `/api/v2/files/{{catalogId}}/allFiles/` | `conn_mod_def::GMkgY9n0B2A::apSUQa9OTsyOjVFEKMBdUw` |
| List All Files for a Catalog Version | GET | `/api/v2/files/{{catalogId}}/versions/{{catalogVersionId}}/allFiles/` | `conn_mod_def::GMkgZr-6_MA::P4_FstdAQpCB8cN2r-Olnw` |
| Retrieve a File Version by ID | GET | `/api/v2/files/{{catalogId}}/versions/{{catalogVersionId}}/file/` | `conn_mod_def::GMkgaAdPdgA::aAZL6l8aRwGVhYusnqShyg` |
| Add Files from a Data Source to a Files Catalog Item | POST | `/api/v2/files/{{catalogId}}/fromDataSource/` | `conn_mod_def::GMkgXO2xX-g::LpGYol4YSsSkp-IbdNWXSQ` |
| Apply Staged Files by Catalog ID | POST | `/api/v2/files/{{catalogId}}/fromStage/` | `conn_mod_def::GMkgXSFrRbA::CKq2dbpJQMmrBgazIe-qVw` |
| Clone a Files Collection by Catalog ID | POST | `/api/v2/files/{{catalogId}}/clone/` | `conn_mod_def::GMkgXiGMm7A::Kg-grVbTQwuLpYdKugu7Hw` |
| Copy a File by Catalog ID | POST | `/api/v2/files/{{catalogId}}/copy/` | `conn_mod_def::GMkgXOYTRVg::MK1bWL0qQ5yLyAHocY7Zfg` |
| Copy Multiple Files by Catalog ID | POST | `/api/v2/files/{{catalogId}}/copyBatch/` | `conn_mod_def::GMkgXOPNk0g::mkjxWPWSRdKwxpS-74-kKQ` |
| Create a File from a File | POST | `/api/v2/files/fromFile/` | `conn_mod_def::GMkgXikD7JA::Er279jb_R2KSEJ8v-apFtA` |
| Create a File from a File for a Files Catalog Item | POST | `/api/v2/files/{{catalogId}}/fromFile/` | `conn_mod_def::GMkgXj8daPg::5dQttQ1eQ7W1TDXFYF_QZQ` |
| Create a File from a URL | POST | `/api/v2/files/fromURL/` | `conn_mod_def::GMkgXi35Iog::G3Cucw52S6q1JlCwdTZGvg` |
| Create a File from a URL for a Catalog Item | POST | `/api/v2/files/{{catalogId}}/fromURL/` | `conn_mod_def::GMkgXs3xSIg::FzjpJaExQAWPftxHsznrIg` |

10 more Files actions are available through search.

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Project Status by Project ID | GET | `/api/v2/projects/{{projectId}}/status/` | `conn_mod_def::GMkg1ot0DOg::OWrQXT7qTISlZr1zKDN0aQ` |
| Get a Potential Multicategorical Format Errors File for a Project | GET | `/api/v2/projects/{{projectId}}/multicategoricalInvalidFormat/file/` | `conn_mod_def::GMkgjFY7oPg::FFYvUx41QHGlHd5bp1LtyQ` |
| Get a Project by Project ID | GET | `/api/v2/projects/{{projectId}}/` | `conn_mod_def::GMkg2ByIF1A::hoXqlAX-SICvT7vXBDg-Tw` |
| List Projects | GET | `/api/v2/projects/` | `conn_mod_def::GMkg2K49ZCA::aCQIpWrlRua0UAYHNiAOvg` |
| List Projects for a Dataset Version by Dataset ID | GET | `/api/v2/datasets/{{datasetId}}/versions/{{datasetVersionId}}/projects/` | `conn_mod_def::GMkgY9N0Axg::cJLpWC1TTu6NTzVQiaycww` |
| Retrieve a Batch Variable Type Transformation Result for a Project | GET | `/api/v2/projects/{{projectId}}/batchTypeTransformFeaturesResult/{{jobId}}/` | `conn_mod_def::GMkghTH8rxg::1NqtPEwTQ0mIZlo4reE1CA` |
| Retrieve a Blueprint JSON for a Project | GET | `/api/v2/projects/{{projectId}}/blueprints/{{blueprintId}}/json/` | `conn_mod_def::GMkgOPt1P9g::ldkDIXSvSYGCN7Iw3ZT1nQ` |
| Retrieve a Project's Eureqa Distribution Plot | GET | `/api/v2/projects/{{projectId}}/eureqaDistributionPlot/{{solutionId}}/` | `conn_mod_def::GMkgcLbnqjA::fN92SgXhR-m-H8nMSQgOLA` |
| Retrieve a Project's Multicategorical Invalid Format Log | GET | `/api/v2/projects/{{projectId}}/multicategoricalInvalidFormat/` | `conn_mod_def::GMkglO56Uvg::bLhry4SEQZmaYyTzo08ApA` |
| Create a Project | POST | `/api/v2/projects/` | `conn_mod_def::GMkg12QQWfg::BxkfhZFvS_SKPBP0f6BdUQ` |
| Create a Project | POST | `/api/v2/projects/` | `conn_mod_def::GMkg12rOIsA::y73SmUE_SeW0g2AVDC4yDw` |
| Create Multiple New Features by Changing Feature Types for a Project | POST | `/api/v2/projects/{{projectId}}/batchTypeTransformFeatures/` | `conn_mod_def::GMkgfFa7mag::slfrOVSwSk-PSVNE37HEZg` |

9 more Projects actions are available through search.

### Notebooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Use Case's Notebooks | GET | `/api/v2/useCases/{{useCaseId}}/notebooks/` | `conn_mod_def::GMkg57LI5cg::rNwOo44aScG0PXb5Uuo9vw` |
| List Notebooks Across All Use Cases | GET | `/api/v2/useCases/notebooks/` | `conn_mod_def::GMkg55ZvUGA::-UWdv7BNRgqtamjwSP7UcQ` |
| Retrieve a Notebook by ID | GET | `/api/v2/notebooks/{{notebookId}}/` | `conn_mod_def::GMkguIm57Ng::qgZ9rKbXQ_2WTkWPpaIfJA` |
| Retrieve Notebooks | GET | `/api/v2/notebooks/` | `conn_mod_def::GMkgt-guGwA::K2AQtoqCTzytbIuWtwyC4w` |
| Retrieve Notebooks by Environment ID | GET | `/api/v2/notebookExecutionEnvironments/{{environmentId}}/notebooks/` | `conn_mod_def::GMkguIBDcJg::Fz8gz2p6TpOYpPFxdWVd0Q` |
| Retrieve To File by Notebook ID | GET | `/api/v2/notebooks/{{notebookId}}/toFile/` | `conn_mod_def::GMkgutk926A::vwISJlabS22GO0CtczLbnA` |
| Batch Clear Output for Cells in a Notebook | PATCH | `/api/v2/notebooks/{{notebookId}}/cells/batchClearOutput/` | `conn_mod_def::GMkgsnQvn9A::XerB5TBhQsCqGH557ZCWzg` |
| Batch Update Sources Using Notebook ID | PATCH | `/api/v2/notebooks/{{notebookId}}/cells/batchUpdateSources/` | `conn_mod_def::GMkgswiF3hA::PaXJ79SYTTqsXYelqoFqlQ` |
| Create a Notebook From URL | POST | `/api/v2/notebooks/fromUrl/` | `conn_mod_def::GMkgrCYYl9A::7OqWbkcsQsyWqmHxIdh-bw` |
| Create Bulk Link Use Case | POST | `/api/v2/notebooks/bulkLinkUseCase/` | `conn_mod_def::GMkgqqSgdog::LyST06EvTeqBLBgClcKvUA` |
| Create Cells for a Notebook | POST | `/api/v2/notebooks/{{notebookId}}/cells/` | `conn_mod_def::GMkgqq8o9zg::UJlifzwmSvWI-aYwdM9maw` |
| Create From File Using Notebooks | POST | `/api/v2/notebooks/fromFile/` | `conn_mod_def::GMkgrAbPg5g::CXK0XEWGTCOnsaQKdzHpCw` |

9 more Notebooks actions are available through search.

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Draft Pipeline Task | GET | `/api/v2/pipelines/{{pipelineId}}/tasks/{{taskId}}` | `conn_mod_def::GMkg06zTJ6A::v-rDyKdBT26qStytdT05HA` |
| Get a Pipeline Version | GET | `/api/v2/pipelines/{{pipelineId}}/versions/{{versionId}}` | `conn_mod_def::GMkg1CQ9-Ig::AXsPxzEoRf-t4YOIeYca2w` |
| Get a Pipeline Version's Graph | GET | `/api/v2/pipelines/{{pipelineId}}/versions/{{versionId}}/graph` | `conn_mod_def::GMkg1DLRZqA::QV3UkF3pQNa_glNi7bXm_Q` |
| Get a Pipeline's Draft Graph | GET | `/api/v2/pipelines/{{pipelineId}}/graph` | `conn_mod_def::GMkg07cHG8g::KeYWNUx0SpK0GQlA1Ba5eg` |
| Get a Task Durable Log URL for a Pipeline Dispatch Task | GET | `/api/v2/pipelines/{{pipelineId}}/dispatches/{{dispatchId}}/tasks/{{taskId}}/logs/{{stream}}` | `conn_mod_def::GMkgzhLhwOg::4WNnHQAiTSubFLK4WgLOwQ` |
| Get a Task for a Pipeline Version | GET | `/api/v2/pipelines/{{pipelineId}}/versions/{{versionId}}/tasks/{{taskId}}` | `conn_mod_def::GMkg1PZVndA::nm616WzlRjWwdNtOAu3bHA` |
| Get Draft Dispatch Status for a Pipeline | GET | `/api/v2/pipelines/{{pipelineId}}/dispatches/{{dispatchId}}/status` | `conn_mod_def::GMkgzh1I1ug::EzI6HSJdQKK2loRa0vnwUw` |
| Get Draft Source for a Pipeline | GET | `/api/v2/pipelines/{{pipelineId}}/source` | `conn_mod_def::GMkg07iv0lg::rmcHoDM5RO-MdaVtDTbWlA` |
| Get Locked Dispatch Status for a Pipeline Version | GET | `/api/v2/pipelines/{{pipelineId}}/versions/{{versionId}}/dispatches/{{dispatchId}}/status` | `conn_mod_def::GMkgzhKTP0A::v1xR9GnBQBGNsGmXXsfojw` |
| Get Pipeline Detail | GET | `/api/v2/pipelines/{{pipelineId}}` | `conn_mod_def::GMkg1CZXZpA::7JaiMXk7Ts2Y3YfcNEPyGw` |
| List All Pipelines | GET | `/api/v2/pipelines` | `conn_mod_def::GMkg1iB4icg::4UYbOr9eTE-ogYk8MRcrRw` |
| List Draft Dispatches for a Pipeline | GET | `/api/v2/pipelines/{{pipelineId}}/dispatches` | `conn_mod_def::GMkgzqkG7uA::xMU8K2Y3QpWvTqgMyGc9XQ` |

8 more Pipelines actions are available through search.

### CustomModels

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Custom Model Version Bundle | GET | `/api/v2/customModels/{{customModelId}}/versions/{{customModelVersionId}}/download/` | `conn_mod_def::GMkgRadEHuA::nihfZit6Sra_hD0QLMoIYA` |
| Download the Latest Custom Model Version Content Using Custom Model | GET | `/api/v2/customModels/{{customModelId}}/download/` | `conn_mod_def::GMkgRbYgQkA::S0ofIfbpTyeAAyDgGpoYow` |
| Get a Custom Model by ID | GET | `/api/v2/customModels/{{customModelId}}/` | `conn_mod_def::GMkgRrJ2tWA::PP7OZRgZTom6El3SP21-ow` |
| Get a Custom Model Version by Custom Model ID | GET | `/api/v2/customModels/{{customModelId}}/versions/{{customModelVersionId}}/` | `conn_mod_def::GMkgRz2Xi4g::LGef1J7ZQQCXXH0W6sRY2g` |
| List Custom Models | GET | `/api/v2/customModels/` | `conn_mod_def::GMkgSCtCDyA::9Jwho2eKR2aamflZnAWWcQ` |
| Add or Replace Training and Holdout Data for a Custom Model | PATCH | `/api/v2/customModels/{{customModelId}}/versions/withTrainingData/` | `conn_mod_def::GMkgQ4AWIYA::SJdgndCIRAiM1zTEO3Koxg` |

13 more CustomModels actions are available through search.

This lists 90 of 1687 actions. For anything not here, call `search_one_platform_actions` with platform `data-robot`. The full catalog is at https://www.withone.ai/knowledge/data-robot.

## When a call fails

The error comes from DataRobot, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/data-robot

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
