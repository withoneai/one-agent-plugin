---
name: laravel-cloud
description: A fully managed cloud platform for deploying, scaling, and operating Laravel applications with built-in autoscaling, managed databases, caching, storage, security, and zero-server management so developers can ship apps faster without DevOps overhead. Read and write Laravel Cloud data through One: environments, databases, applications, caches, domains, websocketapplications and more, 96 actions with real parameter documentation. Use whenever the user asks to look something up in Laravel Cloud, create or update a record there, or build code against the Laravel Cloud API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: laravel-cloud
  generated-from: one-knowledge-base
---

# Laravel Cloud through One

A fully managed cloud platform for deploying, scaling, and operating Laravel applications with built-in autoscaling, managed databases, caching, storage, security, and zero-server management so developers can ship apps faster without DevOps overhead.

One exposes Laravel Cloud through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `laravel-cloud` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Laravel Cloud is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Laravel Cloud account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Environment | GET | `/environments/{{environment}}` | `conn_mod_def::GJ56JA8ezvE::2nf3RmivSSWDmn2moe9rgA` |
| List an Application's Environments | GET | `/applications/{{application}}/environments` | `conn_mod_def::GJ56JezrujQ::zFa_yT6HSeqY4HIBB8aa-g` |
| Add Environment Variables to an Environment | POST | `/environments/{{environment}}/variables` | `conn_mod_def::GJ56Ik46LsQ::KtD7t-B0QzyNHuQsyj2cDQ` |
| Create an Application Environment | POST | `/applications/{{application}}/environments` | `conn_mod_def::GJ56Ir-4bMY::tok_xpIITeal7iK-xayafg` |
| Delete an Environment | DELETE | `/environments/{{environment}}` | `conn_mod_def::GJ56IzlYs6Q::ZCW7oKNISmuMQQjJDqUNIQ` |
| Delete an Environment’s Variables | POST | `/environments/{{environment}}/variables/delete` | `conn_mod_def::GJ56I6QzsRU::qcUELpSXSiGaqbF0O9b9eA` |
| Start an Environment (Trigger Deployment) | POST | `/environments/{{environment}}/start` | `conn_mod_def::GJ56JmZZKog::LTnjGFlTQq-inBgRNjH9qQ` |
| Stop an Environment | POST | `/environments/{{environment}}/stop` | `conn_mod_def::GJ56Jt2sAos::2lT6hDFhQBO7xKgXbLCN8Q` |
| Update an Environment | PATCH | `/environments/{{environment}}` | `conn_mod_def::GJ56J1UJyJ8::_xvnvF_4RbeoHr4q-okpPA` |

### Databases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Database (Deprecated) | GET | `/databases/{{database}}` | `conn_mod_def::GJ56Gv0Zny8::-nzXozQaTry6KijqJvYBtg` |
| List Database Types | GET | `/api/databases/types` | `conn_mod_def::GJ56E4jKkF8::NXA_UwEWR2233O0DprBmTg` |
| List Databases (Deprecated) | GET | `/databases` | `conn_mod_def::GJ56G4dHpG8::NqMwfksFS1O1woMK3hHKJw` |
| Create a Database Cluster Restore | POST | `/databases/clusters/{{database}}/restore` | `conn_mod_def::GJ56FU-6Nqo::7u6d5nCBRoKnAcyNmctFyQ` |
| Create Database (Deprecated) | POST | `/databases` | `conn_mod_def::GJ56GiPM2nw::EmhU6FyRRwizSdDFcEvs5g` |
| Delete a Database (Deprecated) | DELETE | `/databases/{{database}}` | `conn_mod_def::GJ56Go0RJBc::4-gj6tuPRcuZAc69CpxI8w` |
| Delete a Database in a Cluster | DELETE | `/databases/clusters/{{database}}/databases/{{schema}}` | `conn_mod_def::GJ56GK8cLnw::ZJYYJZKpQY6CkAuMmeueIw` |
| Update a Database (Deprecated) | PATCH | `/databases/{{database}}` | `conn_mod_def::GJ56HB0BNLE::5Sol0HzKR1K-hfgs2DLJkw` |

### Applications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Application | GET | `/applications/{{application}}` | `conn_mod_def::GJ56BETiqwg::MTpf1pRkSAaYY60s6GO34Q` |
| List Applications | GET | `/api/applications` | `conn_mod_def::GJ56BMJQImA::sKVz8wgIR3a6haII81aH_A` |
| Create an Application | POST | `/api/applications` | `conn_mod_def::GJ56At7LgMc::4Swr7nc3RVaBe9y0ehLG4Q` |
| Delete an Application | DELETE | `/applications/{{application}}` | `conn_mod_def::GJ56A1L9reU::NRORf56tRzKP71Om4mddCw` |
| Delete an Application's Avatar | DELETE | `/applications/{{application}}/avatar` | `conn_mod_def::GJ56A84l0Mg::piUwbAPVRICAnKc1f9-Xaw` |
| Update an Application | PATCH | `/applications/{{application}}` | `conn_mod_def::GJ56BX4Bazc::3CEyH5aWT0K_bbLcyGGsYA` |
| Upload an Application's Avatar | POST | `/applications/{{application}}/avatar` | `conn_mod_def::GJ56Be9bMQw::qZ7kWbNrRbyu5nYrvoM8PQ` |

### Caches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cache | GET | `/caches/{{cache}}` | `conn_mod_def::GJ56DIQ1hVA::SIA2kctXSmKQOIXhpam7sg` |
| Get a Cache's Metrics | GET | `/caches/{{cache}}/metrics` | `conn_mod_def::GJ56DPNz55s::Qst3saFbTuqN5Ya3WqCEjw` |
| List Cache Types | GET | `/api/caches/types` | `conn_mod_def::GJ56DVVoZI8::FvMa1OgyRBy_p_Z7JAqJ9w` |
| List Caches | GET | `/api/caches` | `conn_mod_def::GJ56Df6o_PM::y_NyrDcnQsaxuAOvbkrt3A` |
| Create Cache | POST | `/api/caches` | `conn_mod_def::GJ56C7DQaJo::SeT_aShDRdCF8eL8bMXHdg` |
| Delete a Cache | DELETE | `/caches/{{cache}}` | `conn_mod_def::GJ56DBW-DLU::zJlRQWhETjupfs9NwtCO9w` |
| Update a Cache | PATCH | `/caches/{{cache}}` | `conn_mod_def::GJ56DnVFffs::zVjnDny2Sdy5HIrHnxAKww` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain | GET | `/domains/{{domain}}` | `conn_mod_def::GJ56IBHFvCg::4yt6HDrUQWOLVFBblR1DUw` |
| List an Environment's Domains | GET | `/environments/{{environment}}/domains` | `conn_mod_def::GJ56IKCVg88::jrXJ6W3BRt2cvLgoM35ZRA` |
| Create an Environment Domain | POST | `/environments/{{environment}}/domains` | `conn_mod_def::GJ56Hy2dVo8::9T4X6jdkQzC96J0Hr9516g` |
| Delete a Domain | DELETE | `/domains/{{domain}}` | `conn_mod_def::GJ56H5VB9A4::VSHFdY0lS9S1n4V2KxyqEw` |
| Update a Domain | PATCH | `/domains/{{domain}}` | `conn_mod_def::GJ56IRTM1B8::hN-dCsCpSe2m4nbUclZJwA` |
| Verify a Domain | POST | `/domains/{{domain}}/verify` | `conn_mod_def::GJ56Idyx8MI::pYHb-_9pRs217SkW3AUHRw` |

### WebsocketApplications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a WebSocket Application | GET | `/websocket-applications/{{websocketApplication}}` | `conn_mod_def::GJ56MGypa-c::Jo0ZSJMZSZOTMJcCpT2FPw` |
| Get a WebSocket Application's Metrics | GET | `/websocket-applications/{{websocketApplication}}/metrics` | `conn_mod_def::GJ56MOdKizw::sfW3C0uXTli6vTGT4PnGjA` |
| List a WebSocket Server’s Applications | GET | `/websocket-servers/{{websocketServer}}/applications` | `conn_mod_def::GJ56MYYIG4I::Thbx8VDfRGKJC3mL_Pntvg` |
| Create a WebSocket Server Application | POST | `/websocket-servers/{{websocketServer}}/applications` | `conn_mod_def::GJ56L4PxVhM::1PT7THKsTACYPI6clrQFdA` |
| Delete a WebSocket Application | DELETE | `/websocket-applications/{{websocketApplication}}` | `conn_mod_def::GJ56MAEmmdg::CjhCiG7cSZyE2K4x5IsKgA` |
| Update a WebSocket Application | PATCH | `/websocket-applications/{{websocketApplication}}` | `conn_mod_def::GJ56Mf-6koQ::9jPztXSrTTarG2T4ZN_kKw` |

### WebsocketServers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a WebSocket Cluster | GET | `/websocket-servers/{{websocketServer}}` | `conn_mod_def::GJ56M2wpISo::sMSbNS1oSVq6f1JwhrVTwQ` |
| Get a WebSocket Server's Metrics | GET | `/websocket-servers/{{websocketServer}}/metrics` | `conn_mod_def::GJ56M-Ssukk::xCsaZczFT7a25T5Z5jjFXg` |
| List WebSocket Clusters | GET | `/api/websocket-servers` | `conn_mod_def::GJ56NMpc_30::rvVF_En1QjmN_mTFMYE2PA` |
| Create a WebSocket Cluster | POST | `/api/websocket-servers` | `conn_mod_def::GJ56Mo7jqpw::QRvLqesgQHOhMnO-OcgYQg` |
| Delete a WebSocket Cluster | DELETE | `/websocket-servers/{{websocketServer}}` | `conn_mod_def::GJ56MvyiEFg::I7JGAm0tTQWtmvl7bmSd0g` |
| Update a WebSocket Server Cluster | PATCH | `/websocket-servers/{{websocketServer}}` | `conn_mod_def::GJ56NWYhjDo::O8jEk0AJS6udKgwpqJjHxg` |

### BackgroundProcesses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Background Process | GET | `/background-processes/{{backgroundProcess}}` | `conn_mod_def::GJ56B6co1nM::f9i5E241RgCTMGiM52x5Kw` |
| List an Instance’s Background Processes | GET | `/instances/{{instance}}/background-processes` | `conn_mod_def::GJ56CIjlPcU::hq89gGFUSQGa6G2Q7XSJWw` |
| Create an Instance Background Process | POST | `/instances/{{instance}}/background-processes` | `conn_mod_def::GJ56BoI-rmU::4d1vHDghS-K2XlcI-jC79Q` |
| Delete a Background Process | DELETE | `/background-processes/{{backgroundProcess}}` | `conn_mod_def::GJ56BzUHBIc::uiyl7K8KTkC08EfqUUFtKA` |
| Update a Background Process | PATCH | `/background-processes/{{backgroundProcess}}` | `conn_mod_def::GJ56CQMizGk::nEwRj3QBToGfQQcDJz2qsA` |

### DatabaseClusters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Database Cluster | GET | `/databases/clusters/{{database}}` | `conn_mod_def::GJ56EfIf8zc::SkFKWJUoS-6AJ2uM3UEKaA` |
| List Database Clusters | GET | `/api/databases/clusters` | `conn_mod_def::GJ56EyBH-tg::Uky8dyegQQKkfj_Ii4ycQw` |
| Create a Database Cluster | POST | `/api/databases/clusters` | `conn_mod_def::GJ56EQthljI::Nna453DETbyV4Fkkr_6jkQ` |
| Delete a Database Cluster | DELETE | `/databases/clusters/{{database}}` | `conn_mod_def::GJ56EXsJIyM::whB8H-HMRYS4XelCuhmfwQ` |
| Update a Database Cluster | PATCH | `/databases/clusters/{{database}}` | `conn_mod_def::GJ56FAGN0oI::ecCDLIZWTwufOL0HO6OUiQ` |

### Instances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Instance | GET | `/instances/{{instance}}` | `conn_mod_def::GJ56KOH_h14::fMX4kCryRHqRymuobGXPnw` |
| List an Environment's Instances | GET | `/environments/{{environment}}/instances` | `conn_mod_def::GJ56KhiZb7Q::oOklTBmGQNKd7aIKeVmNpA` |
| Create an Instance for an Environment | POST | `/environments/{{environment}}/instances` | `conn_mod_def::GJ56J88E_mo::RdEW7MNGTjuT81KZMXV20Q` |
| Delete an Instance | DELETE | `/instances/{{instance}}` | `conn_mod_def::GJ56KDxuaT8::h7YkbI6PRNGot4gOwrWmZw` |
| Update an Instance | PATCH | `/instances/{{instance}}` | `conn_mod_def::GJ56KonaIMI::m7e3TBm_SpWkrVWwAKcQ5g` |

### Buckets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Object Storage Bucket | GET | `/buckets/{{filesystem}}` | `conn_mod_def::GJ56LcYA2GM::RUtWS1J1T4evp40uLbCcXQ` |
| List Object Storage Buckets | GET | `/api/buckets` | `conn_mod_def::GJ56LpWeJA4::BLPwxObSRlyKuhz-wI4krg` |
| Create an Object Storage Bucket | POST | `/api/buckets` | `conn_mod_def::GJ56LEclhk8::eBtVwR99TXuoCHxdR_ct-g` |
| Delete an Object Storage Bucket | DELETE | `/buckets/{{filesystem}}` | `conn_mod_def::GJ56LRO5Fow::vtxd-dQMQGG8HqNXKIk5_A` |
| Update an Object Storage Bucket | PATCH | `/buckets/{{filesystem}}` | `conn_mod_def::GJ56Lwp8Yus::4hp8c3EDQeGjvtUPdjx2kA` |

### Deployments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deployment | GET | `/deployments/{{deployment}}` | `conn_mod_def::GJ56HQr1DbM::lU1_EwlORcmTiAfZOdSfpw` |
| Get a Deployment's Logs | GET | `/deployments/{{deployment}}/logs` | `conn_mod_def::GJ56HXPBX1I::eCyaS_4WRra4u9iwuKw8wQ` |
| List an Environment’s Deployments | GET | `/environments/{{environment}}/deployments` | `conn_mod_def::GJ56HsV2On8::z1NnmPQeRuO6TpySDXVXFQ` |
| Initiate an Environment Deployment | POST | `/environments/{{environment}}/deployments` | `conn_mod_def::GJ56HkdHMOA::UdH1JqhlQ2K3D6uA_i-aBg` |

### BucketKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Object Storage Key (Bucket Key) | GET | `/bucket-keys/{{filesystemKey}}` | `conn_mod_def::GJ56ClMPoNE::XxaxcNA-SPqDDbWt81qOYg` |
| Delete an Object Storage Key | DELETE | `/bucket-keys/{{filesystemKey}}` | `conn_mod_def::GJ56CeMNSQ8::NxEO9r_UTQ65IL3-nsI9oQ` |
| Update an Object Storage Key | PATCH | `/bucket-keys/{{filesystemKey}}` | `conn_mod_def::GJ56C0XsjPc::1OE1ubdQQye1fzh3GyhYhA` |

### Commands

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Command | GET | `/commands/{{command}}` | `conn_mod_def::GJ56DxTPTUk::oW2UTnkFQtKbKQaNkCNXcQ` |
| List an Environment’s Commands | GET | `/environments/{{environment}}/commands` | `conn_mod_def::GJ56D_ALy_s::vqMKNljFRb6Usho3pe-KzA` |
| Run a Command on an Environment | POST | `/environments/{{environment}}/commands` | `conn_mod_def::GJ56EGbNWJQ::TsSyYr6OR3exQ671zrpksg` |

### DatabaseSnapshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Database Snapshot | GET | `/database-snapshots/{{databaseSnapshot}}` | `conn_mod_def::GJ56FyfzzLs::lscJhZsqRiK6QqdIK5cj1Q` |
| List a Database Cluster’s Snapshots | GET | `/databases/clusters/{{database}}/snapshots` | `conn_mod_def::GJ56F7Xd-JE::S5uUkb1WQ1y1dThgZa40tA` |
| Delete a Database Snapshot | DELETE | `/database-snapshots/{{databaseSnapshot}}` | `conn_mod_def::GJ56Fi5DZVQ::1QgR1k9dRAC9vbCqzLfK7g` |

### DatabaseSchemas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cluster Database Schema | GET | `/databases/clusters/{{database}}/databases/{{schema}}` | `conn_mod_def::GJ56GSTMf9o::-61bTN4aSnGk5nPyk4Gogw` |
| List a Database Cluster’s Databases | GET | `/databases/clusters/{{database}}/databases` | `conn_mod_def::GJ56Gawk3as::nZvce4cjQSKevhq99lw3qg` |
| Create a Database Schema in a Database Cluster | POST | `/databases/clusters/{{database}}/databases` | `conn_mod_def::GJ56GCvLAGA::ArYBQU0FTmmmZbphDg_9_Q` |

### FilesystemKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Object Storage Bucket’s Keys | GET | `/buckets/{{filesystem}}/keys` | `conn_mod_def::GJ56CstIyLY::bfeSOrxSSiez-tQo5meoYQ` |
| Create an Object Storage Key for a Bucket | POST | `/buckets/{{filesystem}}/keys` | `conn_mod_def::GJ56CXlucsY::meX3qfB2SayjF1Zm6kJ5Kw` |

### DatabaseClusterMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Database Cluster’s Metrics | GET | `/databases/clusters/{{database}}/metrics` | `conn_mod_def::GJ56EmwmZ3U::Dzb9Ezc1TH2avK3lNd4m_Q` |

### DatabaseClusterSnapshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Database Cluster Snapshot | POST | `/databases/clusters/{{database}}/snapshots` | `conn_mod_def::GJ56FcmdfF8::LDTG2FCwQ1mu4IZoNEnk3A` |

### DedicatedClusters

| Action | Method | Path | Action id |
|---|---|---|---|
| List Dedicated Clusters | GET | `/api/dedicated-clusters` | `conn_mod_def::GJ56HI-Fus0::qLwY_IssT825x3dxXRhAFg` |

This lists 90 of 96 actions. For anything not here, call `search_one_platform_actions` with platform `laravel-cloud`. The full catalog is at https://www.withone.ai/knowledge/laravel-cloud.

## When a call fails

The error comes from Laravel Cloud, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/laravel-cloud

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
