---
name: turbot-pipes
description: Turbot Pipes is a cloud-based workflow and query platform that enables teams to connect APIs, run SQL over cloud and SaaS resources, and automate operational tasks, allowing developers and operators to build integrations, dashboards, and event-driven processes. Read and write Turbot Pipes data through One: connections, connectionfolder, integrations, workspaces, datatank, orgconnections and more, 544 actions with real parameter documentation. Use whenever the user asks to look something up in Turbot Pipes, create or update a record there, or build code against the Turbot Pipes API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: turbot-pipes
  generated-from: one-knowledge-base
---

# Turbot Pipes through One

Turbot Pipes is a cloud-based workflow and query platform that enables teams to connect APIs, run SQL over cloud and SaaS resources, and automate operational tasks, allowing developers and operators to build integrations, dashboards, and event-driven processes.

One exposes Turbot Pipes through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `turbot-pipes` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Turbot Pipes is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Turbot Pipes account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Connections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Connection | GET | `/user/{{userHandle}}/connection/{{connectionHandle}}` | `conn_mod_def::GK7ApABra3A::kpXpvq-NTqaYkqRHwn9FUA` |
| Get an Org Connection | GET | `/org/{{orgHandle}}/connection/{{connectionHandle}}` | `conn_mod_def::GK7AccZb5Cg::kIqXSya9QnGlIcmo5mFa_Q` |
| List a User Workspace Aggregator's Connections | GET | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/aggregator/{{aggregatorHandle}}/connection` | `conn_mod_def::GK7ArJinagg::qmwHiJ-dQkaD6y4K-6ay5w` |
| List a User Workspace's Connections | GET | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/connection` | `conn_mod_def::GK7Ary7SAGg::0SVMUnXhQxmGqV4MFMdcPQ` |
| List a User's Connections | GET | `/user/{{userHandle}}/connection` | `conn_mod_def::GK7ApMCOHGg::fYGLM9fyQKumOl11zF5I7A` |
| List a User's Connections | GET | `/user/{{userHandle}}/conn` | `conn_mod_def::GK7ApN3Dd4g::NRn09bUIRhSU88CauSRQVg` |
| List an Aggregator's Connections in an Org Workspace | GET | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/aggregator/{{aggregatorHandle}}/connection` | `conn_mod_def::GK7Aff6A_aA::oHQNJxAxRjShuc22igopdg` |
| List an Org's Connections | GET | `/org/{{orgHandle}}/connection` | `conn_mod_def::GK7Acn6LWZg::o3-HC451TQq4w2fOcEY4YQ` |
| List an Org's Connections | GET | `/org/{{orgHandle}}/conn` | `conn_mod_def::GK7Acoe1pfA::2mJzBXn_TrmQDpC5gQIQAg` |
| Create a Connection for an Org Workspace | POST | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/connection` | `conn_mod_def::GK7Af-HNpVg::LJYlnD-6THy5Ku70GLuzpw` |
| Create a User Workspace Connection | POST | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/connection` | `conn_mod_def::GK7ArzKWGQA::7ZafsLXJQB-g2vbh-_EjCA` |
| Create an Organization Connection | POST | `/org/{{orgHandle}}/conn` | `conn_mod_def::GK7Ab7qrKdg::KPNzmdtqQhqrD6Vk2bDmjw` |

3 more Connections actions are available through search.

### ConnectionFolder

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tenant Connection Folder | GET | `/connection_folder/{{folderId}}` | `conn_mod_def::GK7Alr7qW_A::XEam9-HaTW-3s5p6QQ9bgg` |
| Get a User Workspace Connection Folder | GET | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/connection_folder/{{folderId}}` | `conn_mod_def::GK7ArpVvwEA::NZb4OT0bRDu9O6-F1IQpvw` |
| Get an Org Connection Folder | GET | `/org/{{orgHandle}}/connection_folder/{{folderId}}` | `conn_mod_def::GK7AbrncGzA::INX32DUlSg-c4hpttSJwvw` |
| Get an Org Workspace Connection Folder | GET | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/connection_folder/{{folderId}}` | `conn_mod_def::GK7Af-DFXRg::F75IYxrqS3mz9xjJtBf6FA` |
| Create a User Workspace Connection Folder | POST | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/connection_folder` | `conn_mod_def::GK7Ark0CnQA::KwqAneL8QPiFExwZEGyM2Q` |
| Create an Org Connection Folder | POST | `/org/{{orgHandle}}/connection_folder` | `conn_mod_def::GK7AbimYOLA::IDxWUPPVTkeBGitM1Bx5Uw` |
| Create an Org Workspace Connection Folder | POST | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/connection_folder` | `conn_mod_def::GK7AfuQ_lMg::xL6ahCx-RzmknjWRcSQMeA` |
| Create Tenant Connection Folder | POST | `/connection_folder` | `conn_mod_def::GK7AlfUbgIg::Lrx9-tCoT1uujHyK79421A` |
| Delete a Tenant Connection Folder | DELETE | `/connection_folder/{{folderId}}` | `conn_mod_def::GK7AleHkczA::BrFhIucERYO-ZM-CvYWRLQ` |
| Delete an Org Connection Folder | DELETE | `/org/{{orgHandle}}/connection_folder/{{folderId}}` | `conn_mod_def::GK7AbR6EkCg::osjNsUzjR2y2rmLrm8W_TQ` |
| Update a Tenant Connection Folder | PATCH | `/connection_folder/{{folderId}}` | `conn_mod_def::GK7Al7MSctA::4KcpUtY7ROqyb2JsG9GNvg` |
| Update an Org Connection Folder | PATCH | `/org/{{orgHandle}}/connection_folder/{{folderId}}` | `conn_mod_def::GK7Ab8LVZ2g::4-_Th47lQT-C8DqaFwWk4Q` |

1 more ConnectionFolder actions are available through search.

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Integration | GET | `/user/{{userHandle}}/integration/{{integrationHandle}}` | `conn_mod_def::GK7ApclZT9g::hIEFIpyXQA-ZU2IP5lpnrw` |
| Install GitHub Integration on a Custom Tenant | GET | `/integration/{{integrationHandle}}/github/install` | `conn_mod_def::GK7AmaTtslg::H9RlXQp4Q9qhDAl4tKurcg` |
| List a User Workspace's Integrations | GET | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/integration` | `conn_mod_def::GK7AuLUMHPA::QV-wc1lcQJ24zaXz-gOW2w` |
| List a User's Integrations | GET | `/user/{{userHandle}}/integration` | `conn_mod_def::GK7AptAgsIA::M5eArv8ISa2jndCeTTNoXw` |
| List an Org Workspace's Integrations | GET | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/integration` | `conn_mod_def::GK7AiocWVGA::7lsY2TyhTDK2t-jfQpDHIw` |
| List an Org's Integrations | GET | `/org/{{orgHandle}}/integration` | `conn_mod_def::GK7AdHZclXg::6BI_pEsuTTOa5fht-SdbBg` |
| Create an Org Integration | POST | `/org/{{orgHandle}}/integration` | `conn_mod_def::GK7Ac2XTgqg::n_-9ObiTSMSrg-QFveDrmQ` |
| Test a User Integration | POST | `/user/{{userHandle}}/integration/{{integrationHandle}}/test` | `conn_mod_def::GK7Ap5N0fSg::EixBZjEdRHWf537teX-q4A` |
| Test an Org Integration | POST | `/org/{{orgHandle}}/integration/{{integrationHandle}}/test` | `conn_mod_def::GK7AdVQuywA::4MBL0_xCS_2AE_KOmXu4VQ` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Workspace | GET | `/user/{{userHandle}}/workspace/{{workspaceHandle}}` | `conn_mod_def::GK7AvYVQXSg::IBeyO9iUQbm_028LZL5ThA` |
| Get an Organization Workspace | GET | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}` | `conn_mod_def::GK7Aj5Lg7Dg::BUYYTtbGRhSxdRXL12tItw` |
| List a Tenant Connection Folder's Workspaces | GET | `/connection_folder/{{folderId}}/workspace` | `conn_mod_def::GK7AlrKVYHA::l17uHxJQRJu_5Mfh_6Y3aw` |
| List a User's Workspaces | GET | `/user/{{userHandle}}/workspace` | `conn_mod_def::GK7AvYJKDoA::CzRdevD1SGu6bzcuPleGgQ` |
| List an Org Connection's Workspaces | GET | `/org/{{orgHandle}}/connection/{{connectionHandle}}/workspace` | `conn_mod_def::GK7AcfIMKAg::z7lho8frQmSPdV7LYA7GZQ` |
| List an Organization's Workspaces | GET | `/org/{{orgHandle}}/workspace` | `conn_mod_def::GK7Aj772ALA::BK4yJiPeRyO0NjpwJUQPQw` |
| Delete a User's Workspace | DELETE | `/user/{{userHandle}}/workspace/{{workspaceHandle}}` | `conn_mod_def::GK7AvYU7lNg::gD8z2kUmTk2JoLWq21F9Gg` |
| Update a User's Workspace | PATCH | `/user/{{userHandle}}/workspace/{{workspaceHandle}}` | `conn_mod_def::GK7AvlUBR1g::EiwOhdVVSgelQ9u0WclQGg` |

### Datatank

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Org Workspace Datatank | GET | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/datatank/{{datatankHandle}}` | `conn_mod_def::GK7Agr2AySA::nYjlofkWRM-xaeT2AhwrSA` |
| List a User Workspace Datatank | GET | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/datatank` | `conn_mod_def::GK7Asn7ag3A::ze45DUEvRdyNBxCUflkCQA` |
| List an Org Workspace Datatank | GET | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/datatank` | `conn_mod_def::GK7Ag6qeUuA::CrrGmuq8TdGJNfaM3D_fXw` |
| Create a User Workspace Datatank | POST | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/datatank` | `conn_mod_def::GK7AsaldpqA::jm1v6Mz_QH6kiBaEiq89dA` |
| Create an Org Workspace Datatank | POST | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/datatank` | `conn_mod_def::GK7Agr-bXCA::H0DOZ5GkQU2KnXUG3AU6zg` |
| Delete an Org Workspace Datatank | DELETE | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/datatank/{{datatankHandle}}` | `conn_mod_def::GK7AgyDLs1A::YSS80Ku9QlaqEJ6N0MzN-w` |
| Update a User Workspace Datatank | PATCH | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/datatank/{{datatankHandle}}` | `conn_mod_def::GK7AsnzemBg::Bi9JFrYlSnGW2vyOxTchxw` |
| Update an Org Workspace Datatank | PATCH | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/datatank/{{datatankHandle}}` | `conn_mod_def::GK7Ag71K3zA::pw87ugBQQ9eozH2RpL55AQ` |

### OrgConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Org Connection | DELETE | `/org/{{orgHandle}}/conn/{{connHandle}}` | `conn_mod_def::GK7AcPHtBIg::vNrSrBRYTlyRmTyGJ3oZNA` |
| Delete an Org Connection | DELETE | `/org/{{orgHandle}}/connection/{{connectionHandle}}` | `conn_mod_def::GK7AcPs8Ohg::xP-SR6l9TYGQBz7QIf-mUQ` |
| Test an Org Connection | POST | `/org/{{orgHandle}}/conn/{{connHandle}}/test` | `conn_mod_def::GK7AcoRm3Jg::N_vf0nlwRNqDnqiWYYxDrg` |
| Test an Org Connection | POST | `/org/{{orgHandle}}/connection/{{connectionHandle}}/test` | `conn_mod_def::GK7AcpM00xA::RNIqLEgsQrW1p1HviYsFMA` |
| Update an Org Connection | PATCH | `/org/{{orgHandle}}/conn/{{connHandle}}` | `conn_mod_def::GK7AcuNCyDA::0Cmi8hLnRtelVfXp7DGw2A` |
| Update an Org Connection | PATCH | `/org/{{orgHandle}}/connection/{{connectionHandle}}` | `conn_mod_def::GK7Ac3v3sVg::gZvaHVhJTzudDvtZWYqt8A` |

### Notifier

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tenant Notifier | GET | `/notifier/{{notifierName}}` | `conn_mod_def::GK7AnCpHpHA::ygoAtnrYS2WTZXK-iVWpHw` |
| Create an Org Notifier | POST | `/org/{{orgHandle}}/notifier` | `conn_mod_def::GK7Ad9HWVzg::xUGMkKd1QjC7DWmoYMHp3w` |
| Create an Org Workspace Notifier | POST | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/notifier` | `conn_mod_def::GK7AjTTiP6g::PPLEqSlBQe-IUkQfBWdKdA` |
| Create Tenant Notifier | POST | `/notifier` | `conn_mod_def::GK7AnBiH5Tg::4D48Ot73SfuE4q05zkLD9Q` |
| Delete Tenant Notifier | DELETE | `/notifier/{{notifierName}}` | `conn_mod_def::GK7AnBb4nmA::uErsKgg_RwCKLf5Aok2UhQ` |
| Update a Tenant Notifier | PATCH | `/notifier/{{notifierName}}` | `conn_mod_def::GK7AnaELlXA::Ne6TTSnnTVKnJ7JhMfXrUg` |

### Aggregator

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Org Workspace Aggregator | GET | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/aggregator/{{aggregatorHandle}}` | `conn_mod_def::GK7AfONHthA::Qf-Ub2vbRICCOEHBXr__cA` |
| Create an Aggregator for a User Workspace | POST | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/aggregator` | `conn_mod_def::GK7ArAipjVA::USBq7NpuSFKQuGfS-V9-aA` |
| Create an Aggregator for an Org Workspace | POST | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/aggregator` | `conn_mod_def::GK7AfVxWvTA::tbZE1QskR5ySkT5bI7n9zQ` |
| Delete an Org Workspace Aggregator | DELETE | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/aggregator/{{aggregatorHandle}}` | `conn_mod_def::GK7AfN5_AqA::8lMTzJYjRW2qAMK3Jdcq1A` |
| Update a User Workspace Aggregator | PATCH | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/aggregator/{{aggregatorHandle}}` | `conn_mod_def::GK7ArMZSSVA::VfIOpDbRQNqPfll1Q7GY9Q` |
| Update an Org Workspace Aggregator | PATCH | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/aggregator/{{aggregatorHandle}}` | `conn_mod_def::GK7Aff6Gd_g::siM0y_MDQXWVppPf2HhS_A` |

### DatatankTable

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Workspace Datatank Table | GET | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/datatank/{{datatankHandle}}/table/{{datatankTableName}}` | `conn_mod_def::GK7AswlSW-A::9zGS4J9iTRaY5pz11xaNqw` |
| Create a User Workspace Datatank Table | POST | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/datatank/{{datatankHandle}}/table` | `conn_mod_def::GK7Asnzzc_A::WBCPEhm7RwarMeh-WW5eNA` |
| Create an Org Workspace Datatank Table | POST | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/datatank/{{datatankHandle}}/table` | `conn_mod_def::GK7Ag9xdnUA::iyTC3JsITpGPr2aFfZDnlw` |
| Delete an Org Workspace Datatank Table | DELETE | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/datatank/{{datatankHandle}}/table/{{datatankTableName}}` | `conn_mod_def::GK7Ag8EPJqg::mUiNCtwNTuucRrafeT1s7A` |
| Update a User Workspace Datatank Table | PATCH | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/datatank/{{datatankHandle}}/table/{{datatankTableName}}` | `conn_mod_def::GK7AswuhdDA::seTRnLy-SZ2NsXeC1aO2ig` |
| Update an Org Workspace Datatank Table | PATCH | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/datatank/{{datatankHandle}}/table/{{datatankTableName}}` | `conn_mod_def::GK7AhLYOIUA::s7GE4QRfTUSz5WeXt41RWw` |

### ModVariableSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Mod Variable Setting for an Organization Workspace | GET | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/mod/{{modAlias}}/variable/{{variableName}}` | `conn_mod_def::GK7AjGzc2aA::_upPrRiiTieYTjAJjIdCNw` |
| Create a Setting for a Mod Variable in a User Workspace | POST | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/mod/{{modAlias}}/variable` | `conn_mod_def::GK7AuUVXF9g::nDTBTsL1SoyYMItG0b_YeA` |
| Create a Setting for a Mod Variable in an Organization Workspace | POST | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/mod/{{modAlias}}/variable` | `conn_mod_def::GK7AjGjVDQA::oXQ-lnoKQ0WoT2zA3XRi0Q` |
| Delete a Mod Variable Setting in a User Workspace | DELETE | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/mod/{{modAlias}}/variable/{{variableName}}` | `conn_mod_def::GK7AuUzMHsg::A7GWoXpRRWOzJwbUciAjhA` |
| Delete a Mod Variable Setting in an Organization Workspace | DELETE | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/mod/{{modAlias}}/variable/{{variableName}}` | `conn_mod_def::GK7AjGsX6IA::P79wJuQZR6eCONV1PonUtw` |
| Update a Mod Variable Setting in an Organization Workspace | PATCH | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/mod/{{modAlias}}/variable/{{variableName}}` | `conn_mod_def::GK7AjSxakDg::TP6IPhELRu-F3vnxozFV5Q` |

### Pipeline

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a User Workspace Pipeline | POST | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/pipeline` | `conn_mod_def::GK7AuyE7M_A::0apDC9TxQseYqelWNDdyWg` |
| Create an Organization Workspace Pipeline | POST | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/pipeline` | `conn_mod_def::GK7AjcSz6-A::lX6_6j71QUWAOIpUKbSKvg` |
| Delete a User Workspace Pipeline | DELETE | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/pipeline/{{pipelineId}}` | `conn_mod_def::GK7Au67U9XA::F3qYXWFMSfyQh1rxEX9bPA` |
| Delete an Organization Workspace Pipeline | DELETE | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/pipeline/{{pipelineId}}` | `conn_mod_def::GK7Ajc3xJ-A::uKPlokubToibWKcF9DgfIA` |
| Update a User Workspace Pipeline | PATCH | `/user/{{userHandle}}/workspace/{{workspaceHandle}}/pipeline/{{pipelineId}}` | `conn_mod_def::GK7Au6s1ptA::phadxl4fSequjqaIq4p0rg` |
| Update an Organization Workspace Pipeline | PATCH | `/org/{{orgHandle}}/workspace/{{workspaceHandle}}/pipeline/{{pipelineId}}` | `conn_mod_def::GK7Ajmq4aOA::MzI2WhVGRk2AnxGX87WpIg` |

### Integration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tenant Integration | GET | `/integration/{{integrationHandle}}` | `conn_mod_def::GK7AmcurLVg::ZzuEkVq6SW27B4iIfXBV3g` |
| Create Tenant Integration | POST | `/integration` | `conn_mod_def::GK7AmZTaM_A::MqQQMci3ToavpUGJdVTlGw` |
| Delete Tenant Integration | DELETE | `/integration/{{integrationHandle}}` | `conn_mod_def::GK7AmZvgQLg::brLuAAdcR96iU1O4Fb4L7Q` |
| Run a Tenant Integration Command | POST | `/integration/{{integrationHandle}}/command` | `conn_mod_def::GK7AmltchDg::uxSsoj4tR3ucJZvisJtmDA` |
| Test a Tenant Integration | POST | `/integration/{{integrationHandle}}/test` | `conn_mod_def::GK7Amls_1Hg::JyIBApPaRf2159gXE9TW-w` |

1 more Integration actions are available through search.

This lists 90 of 544 actions. For anything not here, call `search_one_platform_actions` with platform `turbot-pipes`. The full catalog is at https://www.withone.ai/knowledge/turbot-pipes.

## When a call fails

The error comes from Turbot Pipes, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/turbot-pipes

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
