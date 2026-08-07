---
name: blaze-meter-performance
description: BlazeMeter is a testing platform for web and API applications, and its Performance API enables developers to programmatically create, configure, run, and retrieve results from large-scale performance and load tests. Read and write BlazeMeter Performance data through One: multitests, privatelocations, projects, masters, multitest, apmintegrationcredentials and more, 101 actions with real parameter documentation. Use whenever the user asks to look something up in BlazeMeter Performance, create or update a record there, or build code against the BlazeMeter Performance API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: blaze-meter-performance
  generated-from: one-knowledge-base
---

# BlazeMeter Performance through One

BlazeMeter is a testing platform for web and API applications, and its Performance API enables developers to programmatically create, configure, run, and retrieve results from large-scale performance and load tests.

One exposes BlazeMeter Performance through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `blaze-meter-performance` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BlazeMeter Performance is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BlazeMeter Performance account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### MultiTests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Multi-Test Details | GET | `/multi-tests/{{COLLECTIONID}}` | `conn_mod_def::GJsl8bDI8jc::bHDA6i6QQPu87lxNiefFFQ` |
| List Multi-Tests | GET | `/multi-tests` | `conn_mod_def::GJsl8RcWbx4::e9TjGujLSgiy4NlfVMWaXw` |
| Create a Multi-Test | POST | `/multi-tests` | `conn_mod_def::GJsl7GCakFM::W7dEx4lDSeSFdBr6PX-qMA` |
| Delete a Multi-Test | DELETE | `/multi-tests/{{collectionId}}` | `conn_mod_def::GJsl8qGpl_M::fqthjLbrSuWwWIELzw5jOw` |
| Duplicate a Multi-Test (Test Suite) | POST | `/multi-tests/{{COLLECTIONID}}/duplicate` | `conn_mod_def::GJsl8ivfYzw::R0Sfqa5MS8CaCT3ChrtQFQ` |

### PrivateLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Private Location Details | GET | `/private-locations/{{HARBORID}}` | `conn_mod_def::GJsl9iBM2kI::x90OyqOnTdigBJRmPsjKtA` |
| List Private Locations | GET | `/private-locations` | `conn_mod_def::GJsl9aieBS8::VI0JlSBLQ7-0M1QPonlC9A` |
| Add a Workspace to a Private Location | POST | `/private-locations/{{HARBORID}}/add-workspace` | `conn_mod_def::GJsl9Q2zqho::mFk1SazkSWCLTAZJdbs-BA` |
| Delete a Private Location | DELETE | `/private-locations/{{HARBORID}}` | `conn_mod_def::GJsl-lstdqI::b40fjDn7TBGdI_b02RiAHw` |
| Update a Private Location | PATCH | `/private-locations/{{HARBORID}}` | `conn_mod_def::GJsl9uNtFjA::bKks1i8ETGeJqm5bE-aQMQ` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Details | GET | `/projects/{{PROJECTID}}` | `conn_mod_def::GJsl-78N80k::5F8TXj9KQ_qy_4S414WMkA` |
| List Projects | GET | `/projects` | `conn_mod_def::GJsl-1BQQJc::wY8WPgd1Tr--a_jxjevokQ` |
| Create a Project | POST | `/projects` | `conn_mod_def::GJsl-t3xuKA::BqV2izzHS4SacECTZuJ2Tg` |
| Delete a Project | DELETE | `/projects/{{PROJECTID}}` | `conn_mod_def::GJsl_Jqh8gM::JgxA9w1sRcOiPHrVuYNAYw` |
| Update a Project | PATCH | `/projects/{{PROJECTID}}` | `conn_mod_def::GJsl_Cu8fsc::tVOhS2k_TYuG5zpilz-BiA` |

### Masters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Master Details | GET | `/masters/{{MASTERID}}` | `conn_mod_def::GJsmBVgCYI8::DFwo7TDvQ6uv5AqJ2kNJJw` |
| List Masters | GET | `/masters` | `conn_mod_def::GJsmBg4c-3E::9y6SeuxiQ9O0pT1nzxiokw` |
| Terminate All Masters in a Project | POST | `/projects/{{PROJECTID}}/terminate-masters` | `conn_mod_def::GJsl_RCP6Uk::bjKLHgNzQcGz8tQE8BscAg` |
| Terminate Masters in an Account | POST | `/accounts/{{ACCOUNTID}}/terminate-masters` | `conn_mod_def::GJsl6DDBJqs::a7ohPIhxTxuPK0YZ_8CD1g` |

### MultiTest

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Tests to a Multi-Test (Collection) | POST | `/collections/{{COLLECTIONID}}/add-tests-executions` | `conn_mod_def::GJsl7O_YPy4::lgMU8hx9Q-qx-PctPRYXyQ` |
| Edit a Multi-Test’s Test Execution Overrides | PUT | `/collections/{{COLLECTIONID}}/override-tests-executions` | `conn_mod_def::GJsl7Xy2fps::mLbvsSvnQ-mrwIkdlgXaow` |
| Remove a Test From a Multi-Test (by Collection ID) | POST | `/collections/{{COLLECTIONID}}/remove-tests-executions` | `conn_mod_def::GJsl7gMpQVA::CCrw2-tDQyKR9UzKc4RvGA` |
| Update a Multi-Test (Collection) | PUT | `/collections/{{COLLECTIONID}}` | `conn_mod_def::GJsl8KPqMfE::7WGo-jUbTtmf5H53I9L65Q` |

### ApmIntegrationCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Create APM Integration Credentials | POST | `/credentials/credentialsCreateCredentials` | `conn_mod_def::GJsl6TF9fC0::x8C8hWkjR1C1ACNcEzlIXg` |
| Create APM Integration Credentials | POST | `/credentials/credentialsCreateCredentials` | `conn_mod_def::GJsl6c4USd0::vPVKmbCLRTyWSGTJE-SI0A` |
| Create APM Integration Credentials | POST | `/credentials/credentialsCreateCredentials` | `conn_mod_def::GJsl6lxjuLw::M-UsMt1CSDqnWkFtkO1npA` |

### PrivateLocationAgent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Private Location Agent's Details | GET | `/private-locations/{{HARBORID}}/servers/{{SHIPID}}` | `conn_mod_def::GJsl9_a-zrw::XaBVHDERRouWFAlAhttegg` |
| Delete a Private Location Agent (Server) | DELETE | `/private-locations/{{HARBORID}}/servers/{{SHIPID}}` | `conn_mod_def::GJsl-fFNwx4::LTgJ260WSnqCsRfeTb5c_Q` |
| Update a Private Location’s Agent (Server) | PATCH | `/private-locations/{{HARBORID}}/servers/{{SHIPID}}` | `conn_mod_def::GJsl-GuLoQw::Mj59VTXMT3GbOitD1tD-wA` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shared Folders (by Workspace) | GET | `/folders` | `conn_mod_def::GJsl_pGYfe0::As9TJBMyRSqv0n3ywEzPrg` |
| Create a Shared Folder | POST | `/folders` | `conn_mod_def::GJsl_giGM30::ALUGaAuORWK_s4EhztgMrw` |
| Delete a Shared Folder | DELETE | `/folders/{{folderId}}` | `conn_mod_def::GJsmAlECWCo::LbTv5Fv8QmmgTTzSO5E-Zw` |

### SharedFolderFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Signed Upload URL for a Shared Folder File | GET | `/folders/{{FOLDERID}}/s3/sign` | `conn_mod_def::GJsmANLzc5g::PGUWbcoMRZaHKY_d2bRh0w` |
| List a Shared Folder’s Files | GET | `/folders/{{FOLDERID}}/files` | `conn_mod_def::GJsmAUvyfDQ::Cx40F4TYQkG21K7hSJ-jQA` |
| Delete a Shared Folder File | POST | `/folders/{{FOLDERID}}/delete-file` | `conn_mod_def::GJsmAeGJzNw::ZLe4EzG6Qdmyx5plqBU-MQ` |

### WorkspaceTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace’s Tags | GET | `/workspaces/{{WORKSPACEID}}/tags` | `conn_mod_def::GJsmA3fx8Q8::dXp-iOcfTsO25f2G5QczVw` |
| Create a Workspace Tag | POST | `/workspaces/{{WORKSPACEID}}/tags` | `conn_mod_def::GJsmAvkFfAQ::nWwfBiPtSO23q8wG3DA0ZQ` |
| Delete a Workspace Tag | DELETE | `/workspaces/{{WORKSPACEID}}/tags/{{TAGID}}` | `conn_mod_def::GJsmBIpJxcI::QzGzNBAgSX6O1s5iAXfWVg` |

### Credentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Integrated App Credentials (Username/Password or Access Token) | POST | `/credentials/validate` | `conn_mod_def::GJsl6wE6Fkw::gYgyR4SZRk-IdgXwOyyqNg` |
| Validate Integrated App Credentials (Username/Password or Access Token) | POST | `/credentials/validate` | `conn_mod_def::GJsl64AJmsE::RK4Q1K5WQYGkfeFzXiaSlQ` |

### SharedFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Shared Folder Details | GET | `/folders/{{FOLDERID}}` | `conn_mod_def::GJsl_vDxPio::0mLac2XxSby3PmQlXvKV8Q` |
| Update a Shared Folder | PATCH | `/folders/{{folderId}}` | `conn_mod_def::GJsl_43M5cY::8iOIY5USQrmMcl94mRLJmQ` |

### Invitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a User to an Account (Create Invitation) | POST | `/accounts/{{ACCOUNTID}}/invitations` | `conn_mod_def::GJsl5JdxmYE::LPrUIaAXRvCuzODEHiMRvw` |

### AccountInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Invitations | GET | `/accounts/{{ACCOUNTID}}/invitations` | `conn_mod_def::GJsl5Q4eccU::v751MqthQQO8bfHIc639RQ` |

### AccountUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Users | GET | `/accounts/{{ACCOUNTID}}/users` | `conn_mod_def::GJsl5aXht38::cy2h3OVZSES1JSRjO1fY4Q` |

### AccountUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Account User | PUT | `/accounts/{{ACCOUNTID}}/users/{{USERID}}` | `conn_mod_def::GJsl5iqNW_Q::FFtzXSXXSP2k32XoQnnx6g` |

### AccountUsersWithPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Users with Effective Permissions | GET | `/accounts/{{ACCOUNTID}}/users-with-permissions` | `conn_mod_def::GJsl5rpfha0::S0i4Zb1ATWij9dPSICOP-g` |

### AccountUtilizationReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account’s Engine Utilization Report | GET | `/accounts/{{ACCOUNTID}}/utilization-report` | `conn_mod_def::GJsl53VlRME::eEi8eGO7RyeH-7mTUriXEw` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Customize an Account’s Welcome Screen | PATCH | `/accounts/{{ACCOUNTID}}` | `conn_mod_def::GJsl6Jya2Ag::8tWHkx98TJSTnTxmCQBL7g` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Globally | POST | `/search` | `conn_mod_def::GJsl6_OUvrA::i--UhQfjSkuIgup67O6XaA` |

### CollectionDataFileUploadSignedUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection Data File Upload Signed URL | GET | `/collections/{{COLLECTIONID}}/s3/sign` | `conn_mod_def::GJsl7pEp-dw::OSZMPDORRKq-JRsDBKiUWA` |

### MultiTestFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Multi-Test’s Data Files | GET | `/multi-tests/{{COLLECTIONID}}/files` | `conn_mod_def::GJsl72RZIHQ::kB6Uk5yySqydutBR7e6j6Q` |

### CollectionDataFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Collection Data File | POST | `/collections/{{COLLECTIONID}}/delete-file` | `conn_mod_def::GJsl8B5QPm8::uF4Hl7apRraxstftPVjT8Q` |

### PrivateLocation

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Private Location | POST | `/private-locations` | `conn_mod_def::GJsl81LGcg4::33FyQTcWRlWNv6yzBUK3cg` |

### AgentServer

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Agent (Server) in a Private Location | POST | `/private-locations/{{HARBORID}}/servers` | `conn_mod_def::GJsl89WjjTE::ax7lLPSBRSqTlgQnViFm7Q` |

### PrivateLocationAgentDockerCommand

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Private Location Agent Docker Command | POST | `/private-locations/{{HARBORID}}/ships/{{SHIPID}}/docker-command` | `conn_mod_def::GJsl9GIPhs0::QQLzEdHXRrm-JoJ6aJEEQg` |

### PrivateLocationAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Private Location's Agents (Servers) | GET | `/private-locations/{{HARBORID}}/servers` | `conn_mod_def::GJsl94XPyyY::FZV1irbLRNe1n_tXpc4WeQ` |

### PrivateLocationAgentImageVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Private Location Agent’s Image Versions | GET | `/private-locations/{{HARBORID}}/ships/{{SHIPID}}/versions` | `conn_mod_def::GJsl-PYVSGA::b0Kmb9Z5SB-mDdRa2oxQ8A` |

### PrivateLocationWorkspace

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Private Location Workspace | DELETE | `/private-locations/{{HARBORID}}/workspaces/{{WORKSPACEID}}` | `conn_mod_def::GJsl-WPYwmI::46q_b_P3RuSWPwfEFyeSGw` |

### Tests

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Test’s Tags | PATCH | `/tests/{{TESTID}}` | `conn_mod_def::GJsmBBMrIEI::XP9a9Ob7Skm-JtOz2Pk8KQ` |

This lists 60 of 101 actions. For anything not here, call `search_one_platform_actions` with platform `blaze-meter-performance`. The full catalog is at https://www.withone.ai/knowledge/blaze-meter-performance.

## When a call fails

The error comes from BlazeMeter Performance, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/blaze-meter-performance

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
