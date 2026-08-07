---
name: blaze-meter-service-virtualization
description: BlazeMeter is a testing platform for web and API applications, and its Service Virtualization API enables developers to programmatically create and manage virtual services that simulate APIs and system dependencies for testing when real services are unavailable. Read and write BlazeMeter Service Virtualization data through One: tags, servicemocks, virtualservicetemplate, workspacetransaction, servicemock, workspaceservice and more, 45 actions with real parameter documentation. Use whenever the user asks to look something up in BlazeMeter Service Virtualization, create or update a record there, or build code against the BlazeMeter Service Virtualization API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: blaze-meter-service-virtualization
  generated-from: one-knowledge-base
---

# BlazeMeter Service Virtualization through One

BlazeMeter is a testing platform for web and API applications, and its Service Virtualization API enables developers to programmatically create and manage virtual services that simulate APIs and system dependencies for testing when real services are unavailable.

One exposes BlazeMeter Service Virtualization through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `blaze-meter-service-virtualization` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BlazeMeter Service Virtualization is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BlazeMeter Service Virtualization account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag by ID | GET | `/tags/{{tagId}}` | `conn_mod_def::GJspyhTDryo::OivuzjHdRa6WrMpqXuF7JQ` |
| Get a Tag by Name | GET | `/tags/name/{{name}}` | `conn_mod_def::GJspyo_XTbY::ln4xh3HhRZKLqXH28bTC2A` |
| List Tags | GET | `/tags` | `conn_mod_def::GJspyZhp-gk::OwzorJsET-umeMIVdSmTnQ` |
| Create a Tag | POST | `/api/v1/tags` | `conn_mod_def::GJspySwhmH0::5kIsqEs1TvKKGGnN1xoWQQ` |
| Delete a Tag | DELETE | `/tags/{{tagId}}` | `conn_mod_def::GJspy4AZSC8::2WZnjklvRs26ctndvRQrag` |
| Update a Tag | PUT | `/tags/{{tagId}}` | `conn_mod_def::GJspyxyPOqI::zPaSkB6jQ8iu7Sw3VoOlAg` |

### ServiceMocks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace’s Virtual Services (Service Mocks) | GET | `/workspaces/{{WORKSPACEID}}/service-mocks` | `conn_mod_def::GJspv4oQ_Tw::P6KMTwVRT1WPLoHPArfdJg` |
| Stop a Workspace’s Virtual Service Mock | GET | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}/stop` | `conn_mod_def::GJspw5HQNjg::mvaAz51ZTX2LBi1wxeSXZw` |
| Configure and Deploy a Workspace’s Virtual Services (Service Mocks) | POST | `/workspaces/{{WORKSPACEID}}/service-mocks/configure` | `conn_mod_def::GJspxDLh6lE::hXwUKV74QF6MthtdFOeqXA` |
| Create a Workspace Virtual Service (Service Mock) | POST | `/workspaces/{{WORKSPACEID}}/service-mocks` | `conn_mod_def::GJspvuc0TNQ::_NHSo4VjRZKKWLmHMGs6aw` |
| Delete a Workspace’s Virtual Service (Service Mock) | DELETE | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}` | `conn_mod_def::GJspwg5BY2c::PwohN4QCREuzVnUwwlflNQ` |

### VirtualServiceTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace’s Virtual Service Template | GET | `/workspaces/{{WORKSPACEID}}/service-mock-templates/{{SERVICEMOCKID}}` | `conn_mod_def::GJsp1_OSsJs::nAqkjgJOQf-gc6ezKTzdbg` |
| Create a Workspace’s Virtual Service Template | POST | `/workspaces/{{WORKSPACEID}}/service-mock-templates` | `conn_mod_def::GJsp1socE1c::8tZ62FKnRFSpj5BjYFC0Ew` |
| Delete a Workspace’s Virtual Service Template | DELETE | `/workspaces/{{WORKSPACEID}}/service-mock-templates/{{SERVICEMOCKTEMPLATEID}}` | `conn_mod_def::GJsp2XfVgZ8::E3v0x1s_RYCt0mrGsJ8C3w` |
| Update a Workspace’s Virtual Service Template | PUT | `/workspaces/{{WORKSPACEID}}/service-mock-templates/{{SERVICEMOCKTEMPLATEID}}` | `conn_mod_def::GJsp2OrJbhY::WNQvcXfvQM2kc7SyLXlMtg` |
| Update a Workspace’s Virtual Service Template Properties | PATCH | `/workspaces/{{WORKSPACEID}}/service-mock-templates/{{SERVICEMOCKTEMPLATEID}}` | `conn_mod_def::GJsp2gwS-Fc::DFSqqtRDQPSGoia9XPVKOA` |

### WorkspaceTransaction

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace Transaction | GET | `/workspaces/{{WORKSPACEID}}/transactions/{{TRANSACTIONID}}` | `conn_mod_def::GJspzpSclJw::LU1-hW53Q3O69gQOCf0LJQ` |
| Create a Workspace Transaction | POST | `/workspaces/{{WORKSPACEID}}/transactions` | `conn_mod_def::GJspzPi_BZY::789vkGX2RLW52yOxCBY01w` |
| Delete a Workspace Transaction | DELETE | `/workspaces/{{WORKSPACEID}}/transactions/{{TRANSACTIONID}}` | `conn_mod_def::GJsp0KmH_JQ::FJYEDfwUT6W9bhmHxsa0qQ` |
| Update a Workspace Transaction | PUT | `/workspaces/{{WORKSPACEID}}/transactions/{{TRANSACTIONID}}` | `conn_mod_def::GJsp0CquWf8::wRhc8RquSriHBd7J5hYBCA` |

### ServiceMock

| Action | Method | Path | Action id |
|---|---|---|---|
| Configure a Workspace’s Virtual Service Mock | GET | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}/configure` | `conn_mod_def::GJspxU20QPo::3TD7IqHeSjiAVdLY4HdzgA` |
| Get a Workspace’s Virtual Service (Service Mock) | GET | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}` | `conn_mod_def::GJspwD3dtpY::0qRM6XeDQzGcoXXnDTQeuA` |
| Update a Workspace’s Virtual Service (Service Mock) | PUT | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}` | `conn_mod_def::GJspwQWEctc::RiBl5pqlTpK3jtNMN2J52A` |

### WorkspaceService

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace Service by ID | GET | `/workspaces/{{WORKSPACEID}}/services/{{SERVICEID}}` | `conn_mod_def::GJspyArKvWA::gCSjgcIDRyqcgL2haLh0ew` |
| Create a Workspace Service | POST | `/workspaces/{{WORKSPACEID}}/services` | `conn_mod_def::GJspxoiqFHY::rpTrLFPQQQ2Tp-XHhe3_CQ` |
| Update a Workspace Service | PUT | `/workspaces/{{WORKSPACEID}}/services/{{SERVICEID}}` | `conn_mod_def::GJspyKHC0_M::_iiTw0cvQ4Cdy_eZZVmaTA` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace’s Transactions | GET | `/workspaces/{{WORKSPACEID}}/transactions` | `conn_mod_def::GJspzymYyk4::vG0NM9y1TRysTuWxYXL67w` |
| Import Transactions (Convert File to Generic DSL) | POST | `/transactions/convert` | `conn_mod_def::GJspzhfpK4o::xyYios_lS--GYNrjsky8Tw` |
| Perform Bulk Operations on a Workspace’s Transactions | PATCH | `/workspaces/{{WORKSPACEID}}/transactions` | `conn_mod_def::GJspz5_N_40::O5RXThaqSgySD71FF99vTQ` |

### VirtualServiceTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace’s Virtual Service Templates | GET | `/workspaces/{{WORKSPACEID}}/service-mock-templates` | `conn_mod_def::GJsp12ckboE::tFHdQF6WT9qERjIc3KFPZA` |
| Apply a Template to a Workspace’s Virtual Service | PATCH | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}/apply-template/{{TEMPLATEID}}` | `conn_mod_def::GJspwYrJOWc::b5nRCLJ_RNudzFbiTSOF0w` |

### WorkspaceVirtualService

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Workspace Virtual Service (Service Mock) Properties | PATCH | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}` | `conn_mod_def::GJspwpUN3NI::nqYnoq5hQySzzR07PZTudQ` |

### VirtualServiceContainer

| Action | Method | Path | Action id |
|---|---|---|---|
| Deploy a Workspace’s Virtual Service Container | GET | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}/deploy` | `conn_mod_def::GJspwwu1YyY::t0f7LnoMTt2gBuLVJxOgRA` |

### WorkspaceServiceMockValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate a Workspace’s Service Mock Dependencies (Taurus Configuration) | POST | `/workspaces/{{WORKSPACEID}}/service-mocks/validate` | `conn_mod_def::GJspxgZ58QM::oxoKoZGYQRatO8Dv0ASVkg` |

### Services

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace’s Services | GET | `/workspaces/{{WORKSPACEID}}/services` | `conn_mod_def::GJspx5KG9FQ::cbT-S7tAR_y_nE2zLKcxKg` |

### TransactionDslTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Transaction Types (DSL) | GET | `/transaction-dsl-types` | `conn_mod_def::GJspzA3kqXw::WuGuqOVATSibUrUNVQA2gQ` |

### WorkspaceTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workspace Transaction from Sources | POST | `/workspaces/{{WORKSPACEID}}/transactions` | `conn_mod_def::GJspzXfBq-c::PHtrPvJyQZePkoGflhTsjA` |

### WorkspaceConflictingTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace’s Conflicting Transactions | GET | `/workspaces/{{WORKSPACEID}}/transactions/conflicts` | `conn_mod_def::GJsp0Ur48K0::IW13g9ByT8aikYENOIaxxw` |

### WorkspaceLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace’s Locations | GET | `/workspaces/{{WORKSPACEID}}/locations` | `conn_mod_def::GJsp0eii24c::nvdwnjbqQE6PTQz7FyiHEQ` |

### VirtualServiceLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Refresh a Virtual Service’s Logs | POST | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}/log/refresh` | `conn_mod_def::GJsp0nyhqHg::tno5YLavSrSVw9jdzKXAnQ` |

### VirtualServiceLog

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Virtual Service Log File (Snapshot) | GET | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}/log` | `conn_mod_def::GJsp0yZqnxk::mwljoY-vQRGCk3p11bE6_w` |

### LogSnapshot

| Action | Method | Path | Action id |
|---|---|---|---|
| Take a Log Snapshot of a Workspace’s Virtual Service | GET | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}/log` | `conn_mod_def::GJsp1CpUyPw::d5R0j8fYScCwD1WKyS58GQ` |

### VirtualServiceLogSnapshot

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Virtual Service’s Log Snapshot | PUT | `/workspaces/{{WORKSPACEID}}/service-mocks/{{SERVICEMOCKID}}/log/{{LOGID}}` | `conn_mod_def::GJsp1L_eF2w::8g3kJpgQSkaQRJ_ishzTBw` |

### VirtualServiceAnalyticsRequestIds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Virtual Service’s Analytics Request IDs | GET | `/reports/api/v1/workspaces/{{WORKSPACEID}}/inspection-data/service-mock/{{SERVICEMOCKID}}` | `conn_mod_def::GJsp1Wsa_Yk::UAsWMjV6T8So0pVd8XzVKg` |

### VirtualServiceInspectionData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Virtual Service’s Analytics (Inspection Data) for a Request | GET | `/reports/api/v1/workspaces/{{WORKSPACEID}}/inspection-data/requests/{{REQUESTID}}` | `conn_mod_def::GJsp1jzXHsU::QrENYuWPT-afil0wg0-DDQ` |

## When a call fails

The error comes from BlazeMeter Service Virtualization, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/blaze-meter-service-virtualization

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
