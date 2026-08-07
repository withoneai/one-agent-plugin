---
name: seqera
description: Seqera is a workflow orchestration and data operations platform for scientific computing that provides tools for running, monitoring, and scaling bioinformatics and other data-intensive pipelines, allowing research and engineering teams to manage reproducible workflows across cloud, on-premises, and hybrid infrastructure. Read and write Seqera data through One: datasets, datalinks, pipelines, actions, studios, credentials and more, 229 actions with real parameter documentation. Use whenever the user asks to look something up in Seqera, create or update a record there, or build code against the Seqera API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: seqera
  generated-from: one-knowledge-base
---

# Seqera through One

Seqera is a workflow orchestration and data operations platform for scientific computing that provides tools for running, monitoring, and scaling bioinformatics and other data-intensive pipelines, allowing research and engineering teams to manage reproducible workflows across cloud, on-premises, and hybrid infrastructure.

One exposes Seqera through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `seqera` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Seqera is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Seqera account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Datasets

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Dataset's Metadata | GET | `/datasets/{{datasetId}}/metadata` | `conn_mod_def::GK0x7vxrwoA::QOqSZxXBQNiubFIEpBiVlA` |
| Describe a Workspace Dataset's Metadata | GET | `/workspaces/{{workspaceId}}/datasets/{{datasetId}}/metadata` | `conn_mod_def::GK0x7wNNzIg::0N9qYajtTUCPla8zfIUvbw` |
| Download Dataset Content for a Dataset Version | GET | `/datasets/{{datasetId}}/v/{{version}}/n/{{fileName}}` | `conn_mod_def::GK0x7wrEPsA::XdutrdULTu6Yl3NwZxNn3Q` |
| List a Workspace's Available Datasets | GET | `/workspaces/{{workspaceId}}/datasets` | `conn_mod_def::GK0x74clN9A::L5iqh1onS42sJdMkeaF6Og` |
| List Datasets | GET | `/datasets` | `conn_mod_def::GK0x8DCJUsA::oAzS_kxpS2i78Yfw1Ey-ZQ` |
| Preview a Dataset Version's Linked Content | GET | `/datasets/{{datasetId}}/v/{{version}}/preview` | `conn_mod_def::GK0x8Cs8rfg::6PitymkKTO6Weg3av5AKvQ` |
| Add Labels to Datasets | POST | `/datasets/labels/add` | `conn_mod_def::GK0x8-qoSEg::OdhDojZUR-yNXqv6chlvug` |
| Create a Workspace Dataset | POST | `/workspaces/{{workspaceId}}/datasets` | `conn_mod_def::GK0x7nVscug::CGhi7WlQTle8TwRxsuEMPg` |
| Create Dataset | POST | `/datasets` | `conn_mod_def::GK0x7nVjP3A::i2u2CDkmSoi_yEMzBkPveA` |
| Delete a Workspace's Dataset | DELETE | `/workspaces/{{workspaceId}}/datasets/{{datasetId}}` | `conn_mod_def::GK0x7l-lHcA::rYIu9tXqS4-yqd4BYCNlwQ` |
| Delete Dataset | DELETE | `/datasets/{{datasetId}}` | `conn_mod_def::GK0x7lyzKgg::GFDvbgmMTfehaMi-LYz3yA` |
| Delete Datasets | DELETE | `/datasets` | `conn_mod_def::GK0x7nsqKQA::FnK2BFDGS12BzNi87dQ36w` |

11 more Datasets actions are available through search.

### DataLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Data-Link | GET | `/data-links/{{dataLinkId}}` | `conn_mod_def::GK0x7IUXkPg::xBBHTdQsToef5TY1KSfguw` |
| Download a Data-Link File at Path | GET | `/data-links/{{dataLinkId}}/download/{{filePath}}` | `conn_mod_def::GK0x7GnrIVA::gTPsuwq4RhmSmB1XJasAxQ` |
| Explore a Data-link Path | GET | `/data-links/{{dataLinkId}}/browse/{{path}}` | `conn_mod_def::GK0x7S3tTpg::qSfaGlJsTQuMN-U0mZ0fTw` |
| Explore a Data-Link Tree | GET | `/data-links/{{dataLinkId}}/browse-tree` | `conn_mod_def::GK0x7HDHIHg::qW8BHN4HT92OOslSxslTng` |
| Explore a Data-Link's Contents | GET | `/data-links/{{dataLinkId}}/browse` | `conn_mod_def::GK0x7IM79xA::gtbWIYJ6QQqlNsv0lLzjfA` |
| Generate a Data-Link File Download URL | GET | `/data-links/{{dataLinkId}}/generate-download-url` | `conn_mod_def::GK0x7T4xGEg::oIJojuIXQZSMzXsAFaMjIg` |
| Generate Download Script for a Data-Link | GET | `/data-links/{{dataLinkId}}/script/download` | `conn_mod_def::GK0x7eMbERA::CkWzT7mBTZGs9MMA643VpA` |
| List Data-Links | GET | `/data-links` | `conn_mod_def::GK0x7ctbnTg::LdxA7GJqRgOOZ1ehCNAJrQ` |
| List Mounted Data-Links | GET | `/studios/data-links` | `conn_mod_def::GK0x_bepeTA::7QjvTOxhTBaiiGY66n3icA` |
| Create Data-Link | POST | `/data-links` | `conn_mod_def::GK0x68OLFtA::CuISd6qaRnetTMfMR7JIdA` |
| Delete a Data-Link | DELETE | `/data-links/{{dataLinkId}}` | `conn_mod_def::GK0x68N6Omg::lzyu7kY1T1SiPJmVJrw4ZA` |
| Finish a Data-Link File Upload | POST | `/data-links/{{dataLinkId}}/upload/finish` | `conn_mod_def::GK0x7Sy9qDg::8_F3whudScaAdimQ6q0u9g` |

4 more DataLinks actions are available through search.

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Pipeline | GET | `/pipelines/{{pipelineId}}` | `conn_mod_def::GK0x-a4-zRg::teFaZjg9S-iyHMlHH7YbAQ` |
| Describe a Pipeline Launch | GET | `/pipelines/{{pipelineId}}/launch` | `conn_mod_def::GK0x-bLy22A::modrMErYQ4en9lIr10H2ZA` |
| Describe a Remote Pipeline Repository | GET | `/pipelines/info` | `conn_mod_def::GK0x-dJSlHg::whDoyX27RX63m1xGk_DEFA` |
| List Pipeline Repositories | GET | `/pipelines/repositories` | `conn_mod_def::GK0x-lRCRGA::Gk67pZMvQ9a5y6Q2eVOFcQ` |
| List Pipelines | GET | `/pipelines` | `conn_mod_def::GK0x-ofnPrA::tiG8GeRISLS5fGUgGHBfBQ` |
| Validate Pipeline Name | GET | `/pipelines/validate` | `conn_mod_def::GK0x-l9ElKg::HPacakiFQG67hFgXryj-2Q` |
| Add Labels to Pipelines | POST | `/pipelines/labels/add` | `conn_mod_def::GK0x86dm68A::Uu7XcPu2QuSGhsc0RYs6og` |
| Create Pipeline | POST | `/pipelines` | `conn_mod_def::GK0x-RNeSZA::js3F-qylSl6CdZG_sgDxwg` |
| Delete Pipeline | DELETE | `/pipelines/{{pipelineId}}` | `conn_mod_def::GK0x-az-Zag::5gxT62UrQq2sVnW6rSsGwg` |
| Remove Labels From Pipelines | POST | `/pipelines/labels/remove` | `conn_mod_def::GK0x9RYivZA::5n8TBVuPRUmASZM-GSfYyw` |
| Replace Pipeline Labels | POST | `/pipelines/labels/apply` | `conn_mod_def::GK0x9ZnHvpg::rV9g7eBRRSeTVXVHVGK97A` |
| Update a Pipeline | PUT | `/pipelines/{{pipelineId}}` | `conn_mod_def::GK0x-l9P05A::LIqT4X8pRZqpVYXLmh8n_g` |

1 more Pipelines actions are available through search.

### Actions

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe an Action | GET | `/actions/{{actionId}}` | `conn_mod_def::GK0x6J4d9Ng::Iu-OJPM_Qz-wUe6gNdrbvw` |
| List Actions | GET | `/actions` | `conn_mod_def::GK0x6It-i9A::Qnv0xm16QXu_Cv2gUWuUfQ` |
| Validate Action Name | GET | `/actions/validate` | `conn_mod_def::GK0x6TyQeMA::17HT4yNCQ3qIXsjJpsuiGA` |
| Add Labels to Actions | POST | `/actions/labels/add` | `conn_mod_def::GK0x86xReyg::UXtucsBTTniiVnrcZj4W_g` |
| Apply Labels to Actions | POST | `/actions/labels/apply` | `conn_mod_def::GK0x9QX-46g::NgR_33EYQjaJORMnmn1NYw` |
| Create Action | POST | `/actions` | `conn_mod_def::GK0x6KMgxzA::HoqXdCLwRaOrIJtFrdO39g` |
| Delete an Action | DELETE | `/actions/{{actionId}}` | `conn_mod_def::GK0x6LaHJdA::qfrCwRAlSfC2k2ArzRLADQ` |
| Pause or Resume an Action | POST | `/actions/{{actionId}}/pause` | `conn_mod_def::GK0x6Tymw8g::g4mZXd4_SlOZYAnkCkOUyA` |
| Remove Labels From Actions | POST | `/actions/labels/remove` | `conn_mod_def::GK0x9HfPK4g::ODXXv3M1StyTvpELWabB2Q` |
| Update an Action | PUT | `/actions/{{actionId}}` | `conn_mod_def::GK0x6T89WOA::hczhIgqSTnyrK1pJXU5__A` |

### Studios

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Studio Session | GET | `/studios/{{sessionId}}` | `conn_mod_def::GK0x_Rku8oA::ezPUwzQoTke5tkmCn9dn8w` |
| List Studios | GET | `/studios` | `conn_mod_def::GK0x_aPeFzA::HE_QapxQS1y5z9lnwyh2dQ` |
| Validate a Studio Name | GET | `/studios/validate` | `conn_mod_def::GK0x_pqH7yA::JkW3iV6lQm6rBvvgq-znTw` |
| Create Studio | POST | `/studios` | `conn_mod_def::GK0x_RkzR-A::GqLx6o83SVeHbQiWSCfhRw` |
| Delete a Studio by Session ID | DELETE | `/studios/{{sessionId}}` | `conn_mod_def::GK0x_QA6dWA::P2OeJq-OTXqvn-LqefyOVg` |
| Extend a Studio Session's Lifespan | POST | `/studios/{{sessionId}}/lifespan` | `conn_mod_def::GK0x_Rk2Ocg::od7A0xTGR9-qOtL7ZnIMXA` |
| Start a Studio Session | PUT | `/studios/{{sessionId}}/start` | `conn_mod_def::GK0x_pjqa8A::DTlQpgQiQSaI8c1uUooNQg` |
| Stop a Studio Session | PUT | `/studios/{{sessionId}}/stop` | `conn_mod_def::GK0x_qVROcA::1q91YERxR12cFZYLAdcCGA` |
| Update a Studio | PUT | `/studios/{{sessionId}}` | `conn_mod_def::GK0x_pjoEjA::pmPiER6RRxGhcAkJL-2TMQ` |

### Credentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe Credentials | GET | `/credentials/{{credentialsId}}` | `conn_mod_def::GK0x6zeUSzg::b2yto7raT0eQVSjWhNkjyg` |
| Get Encrypted Credentials | GET | `/credentials/{{credentialsId}}/keys` | `conn_mod_def::GK0x60LnX0g::hLQD8kXXQ9W3XdzbRprd7A` |
| List Credentials | GET | `/credentials` | `conn_mod_def::GK0x67zgDtA::3N7g4tfzRz6SfhNaLBB8KA` |
| Validate Credential Name | GET | `/credentials/validate` | `conn_mod_def::GK0x69voLiA::lFcZp9rWSQWGhfgmV2qcNg` |
| Create Credentials | POST | `/credentials` | `conn_mod_def::GK0x60M8UWA::n9y4_iVFQNGqNcEtl5GR4w` |
| Delete Credentials | DELETE | `/credentials/{{credentialsId}}` | `conn_mod_def::GK0x60RS2hA::u9dh8jzWTIyp0XyRAF3xwg` |
| Update Credentials | PUT | `/credentials/{{credentialsId}}` | `conn_mod_def::GK0x68dcHAA::2YmIQ9YMSMqmY5mt-XWZ3A` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe an Organization | GET | `/orgs/{{orgId}}` | `conn_mod_def::GK0x9jng-Vg::8owiYstXRgmcAAtp6q9cmw` |
| List Organizations | GET | `/orgs` | `conn_mod_def::GK0x9uL7dKA::33nG5kwjSmGV5-FjZ3hGUA` |
| Validate Organization Name | GET | `/orgs/validate` | `conn_mod_def::GK0x94U8hOg::19kA8abASiOVv8CFPXytpg` |
| Create Organization | POST | `/orgs` | `conn_mod_def::GK0x9i6d5vA::nKRn4UhyRtC1zCz7gSOhvg` |
| Delete Organization | DELETE | `/orgs/{{orgId}}` | `conn_mod_def::GK0x9h0bMLg::APqYRZk_RH-p6nsWs-A73g` |
| Leave an Organization | DELETE | `/orgs/{{orgId}}/members/leave` | `conn_mod_def::GK0x9uHW6gA::fiyRWbcVSy2aekYin0pDrA` |
| Update an Organization | PUT | `/orgs/{{orgId}}` | `conn_mod_def::GK0x937dHEg::rBc38OzpR7WxQtfsS2XWDg` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Workspace | GET | `/orgs/{{orgId}}/workspaces/{{workspaceId}}` | `conn_mod_def::GK0yBOkjVdg::3PSDAZweQEu70inor7UW8A` |
| List a Team's Workspaces | GET | `/orgs/{{orgId}}/teams/{{teamId}}/workspaces` | `conn_mod_def::GK0yAAccDpA::JbjvCyZPTw6Mi33heppUwA` |
| List an Organization's Workspaces | GET | `/orgs/{{orgId}}/workspaces` | `conn_mod_def::GK0yBYM4ioA::5EwAXGAHSEeColCP8La5Rg` |
| Validate a Workspace Name | GET | `/orgs/{{orgId}}/workspaces/validate` | `conn_mod_def::GK0yBipqshA::2fKLS0FrSLWPeRrXok-KiA` |
| Create an Organization Workspace | POST | `/orgs/{{orgId}}/workspaces` | `conn_mod_def::GK0yBHaYCDg::Xqfk0wqCSb-ifoIgIsrkhQ` |
| Delete a Workspace in an Organization | DELETE | `/orgs/{{orgId}}/workspaces/{{workspaceId}}` | `conn_mod_def::GK0yBQf6zCA::20BC4geKQGS5xFxwg1KLAg` |
| Update a Workspace | PUT | `/orgs/{{orgId}}/workspaces/{{workspaceId}}` | `conn_mod_def::GK0yBhVNc-A::QqBYBVf0Q7-PfDoIdGOpcA` |

### Workflow

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Workflow | GET | `/workflow/{{workflowId}}` | `conn_mod_def::GK0yAngrnvA::caZXsCKpT2WupwByokydvA` |
| Generate a Random Workflow Name | GET | `/workflow/random-name` | `conn_mod_def::GK0yAwBKSQg::9wkgZoN0RVuMMjubuMN4Qw` |
| Cancel Workflow | POST | `/workflow/{{workflowId}}/cancel` | `conn_mod_def::GK0yAenGAfA::QcTFUonHQ4yW__wosnVctg` |
| Delete a Workflow | DELETE | `/workflow/{{workflowId}}` | `conn_mod_def::GK0yAmnF6-A::bl1dwofARxykeMEgtCL3rA` |
| Launch Workflow | POST | `/workflow/launch` | `conn_mod_def::GK0yA76R4QA::kpHOBJ1WQtuYOfIvT8wbBA` |
| Star a Workflow | POST | `/workflow/{{workflowId}}/star` | `conn_mod_def::GK0yBGiqqdg::siryUoQMQwuXGh-K1D5GVA` |
| Unstar a Workflow | DELETE | `/workflow/{{workflowId}}/star` | `conn_mod_def::GK0yBGq8GQA::0y4k2dBXRgupRgqs74wFIQ` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Workflow's Files | GET | `/workflow/{{workflowId}}/download` | `conn_mod_def::GK0yAwliPhA::K8JZhkozRqqTwbCH2E8lMg` |
| List Workflows | GET | `/workflow` | `conn_mod_def::GK0yA907VfA::Il1Quk16QOO-Ldl67gC4hg` |
| Add Labels to Workflows | POST | `/workflow/labels/add` | `conn_mod_def::GK0x85YA0cA::1eNvO9smTsm2Qv_-Y04UYQ` |
| Delete Workflows | POST | `/workflow/delete` | `conn_mod_def::GK0yAnRSzag::QV9RumCkRbidcrNeU8bTIw` |
| Remove Labels From Workflows | POST | `/workflow/labels/remove` | `conn_mod_def::GK0x9RZBRfg::7-1tuvfwQqyqNQM9gy6_Hg` |
| Replace Workflow Labels | POST | `/workflow/labels/apply` | `conn_mod_def::GK0x9aTpfcA::DuAL1KXqQBCxqGrtZEhFoA` |

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Role by Name | GET | `/roles/{{roleName}}` | `conn_mod_def::GK0x-wt-2gg::r3WZnH24R-6MrXbU48Eazw` |

5 more Roles actions are available through search.

This lists 90 of 229 actions. For anything not here, call `search_one_platform_actions` with platform `seqera`. The full catalog is at https://www.withone.ai/knowledge/seqera.

## When a call fails

The error comes from Seqera, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/seqera

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
