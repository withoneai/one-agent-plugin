---
name: rentman
description: Rentman is an operations management platform for event and media production teams that provides tools for equipment planning, crew scheduling, transport coordination, and project administration, allowing businesses to manage rentals and workflows through centralized software and integrations. Read and write Rentman data through One: filefolders, filecollection, vehicles, equipmentsetcontent, projectrequestequipment, timeregistration and more, 242 actions with real parameter documentation. Use whenever the user asks to look something up in Rentman, create or update a record there, or build code against the Rentman API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: rentman
  generated-from: one-knowledge-base
---

# Rentman through One

Rentman is an operations management platform for event and media production teams that provides tools for equipment planning, crew scheduling, transport coordination, and project administration, allowing businesses to manage rentals and workflows through centralized software and integrations.

One exposes Rentman through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `rentman` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Rentman is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Rentman account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### FileFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get File Folder Collection | GET | `/equipment/{{id}}/file_folders` | `conn_mod_def::GLMLL8pM39A::ciBSPZT3QoSz0rTGIU9uwQ` |
| Get File Folder Collection | GET | `/projects/{{id}}/file_folders` | `conn_mod_def::GLMLO12Y2QA::OGWLxnMzRT-xF4923frkUw` |
| Get File Folder Collection | GET | `/subrentals/{{id}}/file_folders` | `conn_mod_def::GLMLQ3wfIJg::DQewB0xwTbS8XEeOgFQPwg` |
| Get File Folder Collection | GET | `/vehicles/{{id}}/file_folders` | `conn_mod_def::GLMLRsec70g::urLOQ1_pRWOXH5QB_ndI1Q` |
| Get File Folder Collection | GET | `/suppliers/{{id}}/file_folders` | `conn_mod_def::GLMLRSb22xg::NbwYMtL6Si6uIoFkgSj8Nw` |
| Get File Folder Collection | GET | `/contactpersons/{{id}}/file_folders` | `conn_mod_def::GLMLI54TcOg::ilwcEnylQkunhjLAILWJGA` |
| Get File Folder Collection | GET | `/contacts/{{id}}/file_folders` | `conn_mod_def::GLMLJDPOmkA::MFeoxbpvS1qbY88cctKveg` |
| Get File Folder Collection | GET | `/crew/{{id}}/file_folders` | `conn_mod_def::GLMLJ2A0lhg::BuE0gKoGS_i7CYDqTFRqmQ` |
| Get File Folder Collection | GET | `/file_folders` | `conn_mod_def::GLMLMoOpcOA::fJobORMzRWqofXQbNC1gOw` |
| Get File Folder Collection | GET | `/repairs/{{id}}/file_folders` | `conn_mod_def::GLMLPsF0auA::4A0p6zBORb-WTIjGX0hROg` |
| Get File Folder Collection | GET | `/serialnumbers/{{id}}/file_folders` | `conn_mod_def::GLMLQGnzNYg::h_8OWb-SRBmMVM8BUtbzIA` |
| Get File Folder Collection | GET | `/subprojects/{{id}}/file_folders` | `conn_mod_def::GLMLQXDbqvA::82ZNe9WcStOuiAxeBJBGuA` |

1 more FileFolders actions are available through search.

### FileCollection

| Action | Method | Path | Action id |
|---|---|---|---|
| Get File Collection | GET | `/equipment/{{id}}/files` | `conn_mod_def::GLMLL9Dpsxg::e3usU-eXS8SqI3tYJ-2eSw` |
| Get File Collection | GET | `/quotes/{{id}}/files` | `conn_mod_def::GLMLPZlGXZA::mIDWz5doTJSyvndK7LUE1w` |
| Get File Collection | GET | `/serialnumbers/{{id}}/files` | `conn_mod_def::GLMLP08PhCA::ytl-kO7bRyO57aWLRktJSw` |
| Get File Collection | GET | `/subrentals/{{id}}/files` | `conn_mod_def::GLMLQ6dB-Vg::ECWbq-URTxGg-GKBDvEf2w` |
| Get File Collection | GET | `/timeregistration/{{id}}/files` | `conn_mod_def::GLMLRaOEM4g::zcWLhwqNQp-gNtFzTekOjw` |
| Get File Collection | GET | `/contacts/{{id}}/files` | `conn_mod_def::GLMLJENq1Wg::WB4wLQ7HRQSB4bMq0qQQHA` |
| Get File Collection | GET | `/contracts/{{id}}/files` | `conn_mod_def::GLMLJQtqqag::mfUu29WAQqWJhIg8pRjbCg` |
| Get File Collection | GET | `/crew/{{id}}/files` | `conn_mod_def::GLMLJ0505oA::BWm12eQETkCYzqG3VO7yWA` |
| Get File Collection | GET | `/contactpersons/{{id}}/files` | `conn_mod_def::GLMLIwl_sJA::7Ti_0uRVTb-fbUjXv9DeuA` |
| Get File Collection | GET | `/invoices/{{id}}/files` | `conn_mod_def::GLMLNSbf30A::0MfTmyytTMqEPoS7pTRZ_Q` |
| Get File Collection | GET | `/repairs/{{id}}/files` | `conn_mod_def::GLMLPq9_CTA::CPff-jqaTgSvpQWWn7Rw4A` |
| Get File Collection | GET | `/suppliers/{{id}}/files` | `conn_mod_def::GLMLRKlpjzg::EfaEssTUTxeBih2HbkxOJg` |

### Vehicles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Vehicle Collection | GET | `/vehicles` | `conn_mod_def::GLMLRtj1Pgg::-hsRYUvfTdW1bQlW2hYwGA` |
| Get Vehicle Collection | GET | `/stocklocations/{{id}}/vehicles` | `conn_mod_def::GLMLQOaoaRg::tF10UwEGRMWeQK0dTxJ0Hw` |
| Get Vehicle Item | GET | `/vehicles/{{id}}` | `conn_mod_def::GLMLR0zwEZg::hSQNHmsjTcCB987C38Bpeg` |
| Create Vehicle Item | POST | `/vehicles` | `conn_mod_def::GLMLRseTF8A::p9udWDaaQ0uvzxHU0RbjqA` |
| Create Vehicle Item | POST | `/stocklocations/{{id}}/vehicles` | `conn_mod_def::GLMLQOxoOkA::CN3Y3zawRiyfIia266wrNw` |
| Delete Vehicle Item | DELETE | `/vehicles/{{id}}` | `conn_mod_def::GLMLRtj-E8A::Lpy8H5sfTniwQh0Do7m_VA` |
| Update Vehicle Item | PUT | `/vehicles/{{id}}` | `conn_mod_def::GLMLR04TOMA::uchaLmTwRlqxjsqTuHMmfw` |

### EquipmentSetContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Equipment Set Content Collection | GET | `/equipment/{{id}}/equipmentsetscontent` | `conn_mod_def::GLMLL8dR54A::lrp69VJaTvOebe7nuivFoA` |
| Get Equipment Set Content Collection | GET | `/equipmentsetscontent` | `conn_mod_def::GLMLMgw_LJg::g6NIdjWcRJ2RLREX6mOWCQ` |
| Get Equipment Set Content Item | GET | `/equipmentsetscontent/{{id}}` | `conn_mod_def::GLMLMWgET_A::v0KtCnZGQQ2TZ33UkTMEwg` |
| Create Equipment Set Content Item | POST | `/equipment/{{id}}/equipmentsetscontent` | `conn_mod_def::GLMLKOf3ing::wSf44HXFRcajtMXOLtXi5w` |
| Delete Equipment Set Content Item | DELETE | `/equipmentsetscontent/{{id}}` | `conn_mod_def::GLMLMOmVx-g::dRUiowWUQTeYFqLA8SgYcQ` |
| Update Equipment Set Content Item | PUT | `/equipmentsetscontent/{{id}}` | `conn_mod_def::GLMLMWqPa4g::b50JdKYoRJO3CGeRfSuz5Q` |

### ProjectRequestEquipment

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Request Equipment Collection | GET | `/projectrequestequipment` | `conn_mod_def::GLMLOPByTlg::qG8n2cvuRqixJwjeBaPWuQ` |
| Get Project Request Equipment Collection | GET | `/projectrequests/{{id}}/projectrequestequipment` | `conn_mod_def::GLMLOZnssGg::vHXOnXQCQyOX-V6RuHsY_g` |
| Get Project Request Equipment Item | GET | `/projectrequestequipment/{{id}}` | `conn_mod_def::GLMLOPMDuyA::PtYPoJZCSb6-Qz9-jpZymw` |
| Create Project Request Equipment Item | POST | `/projectrequests/{{id}}/projectrequestequipment` | `conn_mod_def::GLMLOQ_EZyg::bd_heGI8QnqwEvhyRu9gZA` |
| Delete Project Request Equipment Item | DELETE | `/projectrequestequipment/{{id}}` | `conn_mod_def::GLMLOHi6mdg::cHXFSRn9SS622sB9kzBltg` |
| Update Project Request Equipment Item | PUT | `/projectrequestequipment/{{id}}` | `conn_mod_def::GLMLOQtSjhg::XJVVrXWGQEOKliiGxyw4IA` |

### TimeRegistration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Time Registration Collection | GET | `/timeregistration` | `conn_mod_def::GLMLRc25YIg::08M60BgSRKm22uE4SRxvNQ` |
| Get Time Registration Item | GET | `/timeregistration/{{id}}` | `conn_mod_def::GLMLRkFjnzA::YK1Uc5oDRdOYmtBCjr529Q` |
| Create Time Registration Item | POST | `/timeregistration` | `conn_mod_def::GLMLRbeSYxg::-6u_bo_tQC65WZYHn7Kqag` |
| Create Time Registration Item | POST | `/leaverequest/{{id}}/timeregistration` | `conn_mod_def::GLMLNalvUZg::jvv5nMbzQPCWj9pIxZtbqw` |
| Delete Time Registration Item | DELETE | `/timeregistration/{{id}}` | `conn_mod_def::GLMLRZwXeZg::DkqsZVLySK6ROsB5fHewMA` |
| Update Time Registration Item | PUT | `/timeregistration/{{id}}` | `conn_mod_def::GLMLRkhLiSA::QBFpvMm7R8yMKzcBTkpikg` |

### ContactPersons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Person Collection | GET | `/contacts/{{id}}/contactpersons` | `conn_mod_def::GLMLJCxljbg::rqaPtmKoSFGtB8RvJerVTg` |
| Get Contact Person Collection | GET | `/contactpersons` | `conn_mod_def::GLMLIv73wGg::nO2FBvWPTQefytk2aqZGCQ` |
| Get Contact Person Item | GET | `/contactpersons/{{id}}` | `conn_mod_def::GLMLIv4qL2g::LtmaJIhoSdKsQVasSpDJnw` |
| Create Contact Person Item | POST | `/contacts/{{id}}/contactpersons` | `conn_mod_def::GLMLI6vwaBA::yi_k38KxQ6u0rT1vxFs1dg` |
| Delete Contact Person Item | DELETE | `/contactpersons/{{id}}` | `conn_mod_def::GLMLIvtJaiA::RKK3FPEuSdiqlL2zixS9qA` |
| Update ContactPerson Item | PUT | `/contactpersons/{{id}}` | `conn_mod_def::GLMLI6CUcpA::Puf39E2rRgyLeYQCr7yxrQ` |

### Appointments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Appointment Collection | GET | `/crew/{{id}}/appointments` | `conn_mod_def::GLMLJi-dC9A::jbvE4b4CRg6PqSkneg2W5w` |
| Get Appointment Collection | GET | `/appointments` | `conn_mod_def::GLMLIn12mWA::TEPzVosHTuSsXu0GXgm01w` |
| Get Appointment Item | GET | `/appointments/{{id}}` | `conn_mod_def::GLMLIndDo6g::Gy4Dq1f4S7CBGNOZbhLFPw` |
| Create Appointment Item | POST | `/appointments` | `conn_mod_def::GLMLIeB8zuA::ezNVPVBfT7O__sGpvFvrDQ` |
| Delete Appointment Item | DELETE | `/appointments/{{id}}` | `conn_mod_def::GLMLInXnLKA::F9RpHG1eRumDSAqMxs8guw` |
| Update Appointment Item | PUT | `/appointments/{{id}}` | `conn_mod_def::GLMLIx5tO9A::S1ZldPMuSdmuAi2NfcKAlQ` |

### Accessories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Accessory Collection | GET | `/accessories` | `conn_mod_def::GLMLIMMiyjA::JQ2_x2wkTgKbTDHG9oHV-Q` |
| Get Accessory Collection | GET | `/equipment/{{id}}/accessories` | `conn_mod_def::GLMLLyKZpUg::IFLhizXhSkSnQSgDV15MPw` |
| Get Accessory Item | GET | `/accessories/{{id}}` | `conn_mod_def::GLMLIL992ig::Lj9bdDtgS5CgCD1rfZfLaA` |
| Delete Accessory Item | DELETE | `/accessories/{{id}}` | `conn_mod_def::GLMLILCr8-A::Z9G32BmhSIKwMr8Deok58A` |
| Update Accessory Item | PUT | `/accessories/{{id}}` | `conn_mod_def::GLMLIMAN1Yg::n5kjYOnfRAyPuWGfLndztA` |

### ProjectRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Request Collection | GET | `/projectrequests` | `conn_mod_def::GLMLOZv0inA::SuyDT1OtT8G_rYjvZHTI-w` |
| Get Project Request Item | GET | `/projectrequests/{{id}}` | `conn_mod_def::GLMLOYH4MnA::O29ZArQRQ0iqO9G4HMKxCA` |
| Create Project Request Item | POST | `/projectrequests` | `conn_mod_def::GLMLOQtn6tg::vE5gG9CYQsCXjnYhXSrfsw` |
| Delete Project Request Item | DELETE | `/projectrequests/{{id}}` | `conn_mod_def::GLMLOZDcHgA::soXditH1RgSXlUyTIpg6FA` |
| Update Project Request Item | PUT | `/projectrequests/{{id}}` | `conn_mod_def::GLMLOj8v1VA::DaWmNYAqQy-2d7HyX5AA5A` |

### ProjectFunctionGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Function Group Collection | GET | `/projects/{{id}}/projectfunctiongroups` | `conn_mod_def::GLMLPMWDrBA::xMqfBO8USx-4SPTek_eoMA` |
| Get Project Function Group Collection | GET | `/subprojects/{{id}}/projectfunctiongroups` | `conn_mod_def::GLMLQg0RFAA::4vrmOn38Rsi0IbgpmCZkDA` |
| Get Project Function Group Collection | GET | `/projectfunctiongroups` | `conn_mod_def::GLMLN-mVBFA::im02X5hHRbe_1dvjD_KvEw` |
| Get Project Function Group Item | GET | `/projectfunctiongroups/{{id}}` | `conn_mod_def::GLMLN_LQ5Kg::S3DalgmxSa6WTQ-V2vWBwg` |
| Create Project Function Group Item | POST | `/projects/{{id}}/projectfunctiongroups` | `conn_mod_def::GLMLOtScpBA::mKGjTNtKRHqdD1V85G3jww` |

### ProjectEquipment

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Equipment Collection | GET | `/projects/{{id}}/projectequipment` | `conn_mod_def::GLMLO_xXmIg::onYUKABAS1CbrO7-bnLMmA` |
| Get Project Equipment Collection | GET | `/subprojects/{{id}}/projectequipment` | `conn_mod_def::GLMLQouzqEA::GtQRGsacQd6YwPeMRecW-g` |
| Get Project Equipment Collection | GET | `/projectequipment` | `conn_mod_def::GLMLN028eLA::Vtbn7akJSqWpk_zjho6Imw` |
| Get Project Equipment Collection | GET | `/projectequipmentgroup/{{id}}/projectequipment` | `conn_mod_def::GLMLN2ZKIZg::1Xk26BFTQvGALgK90cu7AA` |
| Get Project Equipment Item | GET | `/projectequipment/{{id}}` | `conn_mod_def::GLMLN13ZbPg::GUXgZ9PeSIGUoQIydUwN4Q` |

### Projectcrew

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Projectcrew Collection | GET | `/projects/{{id}}/projectcrew` | `conn_mod_def::GLMLO_8TNhg::ptM-DdWaQQyi2E9-hOlL8w` |
| Get Projectcrew Collection | GET | `/subprojects/{{id}}/projectcrew` | `conn_mod_def::GLMLQg_X0Tg::zXaHgdOJRc22Q6ZtbFJRfA` |
| Get Projectcrew Collection | GET | `/projectfunctions/{{id}}/projectcrew` | `conn_mod_def::GLMLOG--SvA::N5ZFQzU7TZesFvCcX3q92Q` |
| Get Projectcrew Collection | GET | `/projectcrew` | `conn_mod_def::GLMLN0saBIg::yM20_xBESMibzgGGY_qGoA` |
| Get Projectcrew Item | GET | `/projectcrew/{{id}}` | `conn_mod_def::GLMLN13KKrg::L36Zy7IAT2COV73-EzQ69Q` |

### ProjectVehicles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Vehicle Collection | GET | `/projects/{{id}}/projectvehicles` | `conn_mod_def::GLMLPLvdTgA::TTE6R9GnQLCZK8XRYe0UYw` |
| Get Project Vehicle Collection | GET | `/projectvehicles` | `conn_mod_def::GLMLPZWv7Hg::bk6qYefdQOmuoPuoH8KRMQ` |
| Get Project Vehicle Collection | GET | `/subprojects/{{id}}/projectvehicles` | `conn_mod_def::GLMLQhrGbog::A_R-9Wp4TOy4CNhVZ4C9jQ` |
| Get Project Vehicle Collection | GET | `/projectfunctions/{{id}}/projectvehicles` | `conn_mod_def::GLMLOHSL0MA::dlyAp5dkTiKb0dq4Aa_vEA` |

1 more ProjectVehicles actions are available through search.

This lists 90 of 242 actions. For anything not here, call `search_one_platform_actions` with platform `rentman`. The full catalog is at https://www.withone.ai/knowledge/rentman.

## When a call fails

The error comes from Rentman, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/rentman

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
