---
name: procore
description: Procore is a construction management platform that provides tools and APIs for project planning, financial management, document control, and field collaboration, allowing contractors, owners, and developers to connect workflows, track progress, and manage construction operations across the project lifecycle. Read and write Procore data through One: submittals, companyusers, coordinationissues, equipmentregister, punchitems, users and more, 2841 actions with real parameter documentation. Use whenever the user asks to look something up in Procore, create or update a record there, or build code against the Procore API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: procore
  generated-from: one-knowledge-base
---

# Procore through One

Procore is a construction management platform that provides tools and APIs for project planning, financial management, document control, and field collaboration, allowing contractors, owners, and developers to connect workflows, track progress, and manage construction operations across the project lifecycle.

One exposes Procore through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `procore` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Procore is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Procore account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Submittals

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Number for a Project's Submittals | GET | `/rest/v1.1/projects/{{projectId}}/submittals/check_number` | `conn_mod_def::GLdZWPYbXNg::Aj3RuhIESeOK9LuEd0oIhw` |
| Get Next Available Number by Spec Section for a Project's Submittals | GET | `/rest/v1.1/projects/{{projectId}}/submittals/next_available_number/{{specSectionId}}` | `conn_mod_def::GLdZWprf3qA::SNdJBufNRqqhzqazMosXvQ` |
| Get Next Available Number by Spec Section for a Project's Submittals | GET | `/rest/v1.0/projects/{{projectId}}/submittals/next_available_number/{{specSectionId}}` | `conn_mod_def::GLdZWgcawLg::m9YcFqmVT5mIleN88YuUmw` |
| Get Next Available Number for a Project's Submittals | GET | `/rest/v1.1/projects/{{projectId}}/submittals/next_available_number` | `conn_mod_def::GLdZWNrqMkA::1J1qV89LQayk2n0X3ST2rg` |
| Get Next Available Number for a Project's Submittals | GET | `/rest/v1.0/projects/{{projectId}}/submittals/next_available_number` | `conn_mod_def::GLdZWfy0SuA::LgGWSmZuS2SBF4UZOEk3Lw` |
| Get Workflow Data for a Project Submittal | GET | `/rest/v1.1/projects/{{projectId}}/submittals/{{id}}/workflow_data` | `conn_mod_def::GLdZWyp_84g::wIuVQ-KFR9y1nih7sbNKCQ` |
| List Ball in Court Company Filter Options for a Project's Submittals | GET | `/rest/v1.0/projects/{{projectId}}/submittals/filter_options/ball_in_court_company_id` | `conn_mod_def::GLdZXD8m25g::0cakXGiZRhiPd8mhibiCAg` |
| List Ball in Court Filter Options for a Project's Submittals | GET | `/rest/v1.0/projects/{{projectId}}/submittals/filter_options/ball_in_court_id` | `conn_mod_def::GLdZXVEkz3A::W-ZK8aV5QRSpKFyeAd3PDw` |
| List Buffer Time Filter Options for a Project's Submittals | GET | `/rest/v1.0/projects/{{projectId}}/submittals/filter_options/buffer_time` | `conn_mod_def::GLdZXHrK7Jg::PjWf5qQfToCa7veaqnIhXQ` |
| List Cost Code Filter Options for a Project's Submittals | GET | `/rest/v1.0/projects/{{projectId}}/submittals/filter_options/cost_code_id` | `conn_mod_def::GLdZXDd06ug::V3DumyObQoGTWl0bGt-JsA` |
| List Created Via Filter Options for a Project's Submittals | GET | `/rest/v1.0/projects/{{projectId}}/submittals/filter_options/created_via` | `conn_mod_def::GLdZXhDu1TA::8IxkdKcUQ2eYwcvzwowZDA` |
| List Current Revision Filter Options for a Project's Submittals | GET | `/rest/v1.0/projects/{{projectId}}/submittals/filter_options/current_revision` | `conn_mod_def::GLdZXgDjxvA::0Ljxbl7AQ8-EM0Hhi8FRAA` |

27 more Submittals actions are available through search.

### CompanyUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Users | GET | `/rest/v1.2/companies/{{companyId}}/users` | `conn_mod_def::GLdX-nH6IXg::JwXVjc1FSe2yjNf85Wlymw` |
| List Company Users | GET | `/rest/v1.3/companies/{{companyId}}/users` | `conn_mod_def::GLdX-SICzng::yBslddOQQX-3vqYw3MJOFw` |
| List Company Users | GET | `/rest/v1.1/companies/{{companyId}}/users` | `conn_mod_def::GLdX-jec--A::hTEtJ9i1RL6gN_8AFsu8MA` |
| List Company Users | GET | `/rest/v1.0/companies/{{companyId}}/users` | `conn_mod_def::GLdX-05wXPg::H_uY2AwbQ2KfBtTiPyat0w` |
| Show a Company User | GET | `/rest/v1.1/companies/{{companyId}}/users/{{id}}` | `conn_mod_def::GLdX_K-GCsg::eYIvbZc0TRGgscMKff3vxg` |
| Show a Company User | GET | `/rest/v1.2/companies/{{companyId}}/users/{{id}}` | `conn_mod_def::GLdX_AY8wwg::VCe28CWXR_2bDVzFgwuXmg` |
| Show a Company's User (by ID) | GET | `/rest/v1.3/companies/{{companyId}}/users/{{id}}` | `conn_mod_def::GLdX_A9SIAA::r8fLiWRjSJyTa_7SJ9vEiw` |
| Show Current Company User | GET | `/rest/v1.2/companies/{{companyId}}/me` | `conn_mod_def::GLdX_UIkb3g::5np6nr0TSPKDub7b7HSmLg` |
| Show Current Company User | GET | `/rest/v1.1/companies/{{companyId}}/me` | `conn_mod_def::GLdX_Uaf5Xg::PbMfUgDKRFu97_tncUVaqQ` |
| Show the Current Company User | GET | `/rest/v1.3/companies/{{companyId}}/me` | `conn_mod_def::GLdX_KovvVg::Ng2djgzXRm2dMYwRErdDuA` |
| Show the Current Company User | GET | `/rest/v1.0/companies/{{companyId}}/me` | `conn_mod_def::GLdX_UIMikg::J5DFE6gpQsiDtNpoLz59xg` |
| Bulk Add Company Users to Projects | POST | `/rest/v1.3/companies/{{companyId}}/users/bulk_add` | `conn_mod_def::GLdX91pegRA::Joj_BiOGTfKR7JaIBQMulA` |

18 more CompanyUsers actions are available through search.

### CoordinationIssues

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Coordination Issues | GET | `/rest/v1.0/coordination_issues/export` | `conn_mod_def::GLdYfIjVo-A::nZg1_hQBS8CqKWXWUo1xkA` |
| List Assignee Company Filter Options for Coordination Issues | GET | `/rest/v1.0/coordination_issues/filter_options/assignee_company_id` | `conn_mod_def::GLdYe_SXy7g::qq7BONyZSv60HywTiuaWug` |
| List Available Filters for Coordination Issues | GET | `/rest/v1.0/coordination_issues/filter_options` | `conn_mod_def::GLdYe9xKqlg::jrMdQFqGRFWjpyJqyKkvdw` |
| List Coordination Issues | GET | `/rest/v1.0/coordination_issues` | `conn_mod_def::GLdYhB_UhAg::OC74yqYrScS4Cjz_wxkA4Q` |
| List Coordination Issues for a Project | GET | `/rest/v2.0/companies/{{companyId}}/projects/{{projectId}}/coordination_issues` | `conn_mod_def::GLdYhAWuozg::Dmxiee4oSPu8hMIAsD-7EA` |
| List Coordination Issues in Recycle Bin | GET | `/rest/v1.0/coordination_issues/recycle_bin` | `conn_mod_def::GLdYf9lC85g::CeraZ4L_STaEegVSmz_bXA` |
| List Created By Company Filter Options for Coordination Issues | GET | `/rest/v1.0/coordination_issues/filter_options/created_by_company_id` | `conn_mod_def::GLdYfU1F7Kg::qOwOc5FARRiR7-x9J4LkEA` |
| List Creation Source Filter Options for Coordination Issues | GET | `/rest/v1.0/coordination_issues/filter_options/created_from` | `conn_mod_def::GLdYfSdPxQA::8dvYzjCmQiOvJcV8NpUsLw` |
| List Creator Filter Options for Coordination Issues | GET | `/rest/v1.0/coordination_issues/filter_options/created_by_id` | `conn_mod_def::GLdYfU1JGSg::An707PGKRISFX2x_hVUIAQ` |
| List Location Filter Options for Coordination Issues | GET | `/rest/v1.0/coordination_issues/filter_options/location_id` | `conn_mod_def::GLdYfZScRNA::QPVfwCucTcigAu9DEDZnUA` |
| List Status Filter Options for Coordination Issues | GET | `/rest/v1.0/coordination_issues/filter_options/status` | `conn_mod_def::GLdYfj62QkA::79EP0E2IT0q_SPtDYRx1vQ` |
| List Watcher Filter Options for Coordination Issues | GET | `/rest/v1.0/coordination_issues/filter_options/watcher_id` | `conn_mod_def::GLdYfmvp8dA::JkBrxjlcRDeFVETo9qfAdQ` |

16 more CoordinationIssues actions are available through search.

### EquipmentRegister

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Equipment Register for a Company | GET | `/rest/v2.0/companies/{{companyId}}/equipment_register` | `conn_mod_def::GLdZayPPIDA::rjBVbFWqSdu6OgJFROIwWw` |
| Get Equipment Register for a Project | GET | `/rest/v2.0/companies/{{companyId}}/projects/{{projectId}}/equipment_register` | `conn_mod_def::GLdZbefxVkg::c9CTkHqxRi6jbufdpfbqiQ` |
| Get Equipment Register for a Project | GET | `/rest/v2.1/companies/{{companyId}}/projects/{{projectId}}/equipment_register` | `conn_mod_def::GLdZblCGg-A::gw67ylFCROqPVtcBmDxnPA` |
| Associate Equipment with a Company's Equipment Register | POST | `/rest/v2.0/companies/{{companyId}}/equipment_register/associate` | `conn_mod_def::GLdZdUStHNA::zO4LWoflQESVObwsbCVQdA` |
| Associate Equipment with a Project | POST | `/rest/v2.0/companies/{{companyId}}/projects/{{projectId}}/equipment_register/associate` | `conn_mod_def::GLdZdVPWAKA::tihcR8qCRjaZVHhaKRwSJw` |
| Bulk Destroy Current Project Equipment Register Entries for a Project | DELETE | `/rest/v2.1/companies/{{companyId}}/projects/{{projectId}}/equipment_register/current_project/bulk_destroy` | `conn_mod_def::GLdZaMXH6CA::ktu7nmhQRhqZaWHmTfmiww` |
| Bulk Update Current Project for Company Equipment Register | PATCH | `/rest/v2.1/companies/{{companyId}}/equipment_register/current_project/bulk_update` | `conn_mod_def::GLdZaV-2yEg::nscY6adeSqiyUbHj-V4QRA` |
| Bulk Update Current Project Using Equipment Register | PATCH | `/rest/v2.1/companies/{{companyId}}/projects/{{projectId}}/equipment_register/current_project/bulk_update` | `conn_mod_def::GLdZaXoWchA::Ci6gVrDSRn2mSTQ12lpzTg` |
| Bulk Update Current Project Using Equipment Register | PATCH | `/rest/v2.0/companies/{{companyId}}/projects/{{projectId}}/equipment_register/current_project/bulk_update` | `conn_mod_def::GLdZaVrcyxA::9ET3_pXJQfidXvKbAT7Uhw` |
| Bulk Update Current Project Using Equipment Register for a Company | PATCH | `/rest/v2.0/companies/{{companyId}}/equipment_register/current_project/bulk_update` | `conn_mod_def::GLdZaWSOa_A::o38IcfncSZ-vkbneRRSuWg` |
| Bulk Update Equipment Status for a Company | PATCH | `/rest/v2.1/companies/{{companyId}}/equipment_register/status/bulk_update` | `conn_mod_def::GLdZaiAZCrA::Tlq-pX5iRBuPH3yZFe8MWw` |
| Bulk Update Equipment Status for a Project | PATCH | `/rest/v2.1/companies/{{companyId}}/projects/{{projectId}}/equipment_register/status/bulk_update` | `conn_mod_def::GLdZagrbGWg::JiPbMli5SdmF6aeZHFY6kg` |

15 more EquipmentRegister actions are available through search.

### PunchItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Deleted Punch Items | GET | `/rest/v1.0/punch_items/recycle_bin` | `conn_mod_def::GLdZNRihHFg::TZgnKEjIQqCBSAvP7NW81A` |
| List Deleted Punch Items | GET | `/rest/v1.1/punch_items/recycle_bin` | `conn_mod_def::GLdZNKjo2GA::YxgX65QSRYCjvsnLLjuLyw` |
| List Punch Items | GET | `/rest/v1.0/punch_items` | `conn_mod_def::GLdZNm0ismg::ytqhCd7hQ-y3m_aKdUyQ-A` |
| List Punch Items | GET | `/rest/v1.1/punch_items` | `conn_mod_def::GLdZNiJ8tig::EnD9M0oJQ2ibLTjzI65Uzw` |
| Show a Punch Item | GET | `/rest/v1.1/punch_items/{{id}}` | `conn_mod_def::GLdZNxfQh4A::3bd8EVlCSie8WWgeAxuvjw` |
| Show a Punch Item | GET | `/rest/v1.0/punch_items/{{id}}` | `conn_mod_def::GLdZN638j2A::w-VL7-rGRoaAbUgxI6U7Mw` |
| Add Punch Item Attachments | POST | `/rest/v1.0/punch_items/add_punch_item_attachments` | `conn_mod_def::GLdZM6LE29g::VZDZWp08RQ-ai2f-8jodAA` |
| Add Punch Item Attachments | POST | `/rest/v1.1/punch_items/add_punch_item_attachments` | `conn_mod_def::GLdZM6S6ZmA::MwkULclpTTCRi4O5-T7BwA` |
| Create Punch Item | POST | `/rest/v1.0/punch_items` | `conn_mod_def::GLdZNAM_Amg::-Bs8hqUQTOOmXhWxHla8Og` |
| Create Punch Item | POST | `/rest/v1.1/punch_items` | `conn_mod_def::GLdZNBNR8Eg::uWGFtsmHRD6mjf1utfKe-Q` |
| Delete a Punch Item | DELETE | `/rest/v1.0/punch_items/{{id}}` | `conn_mod_def::GLdZNM4R2IA::fwPkXwoiTvCKZLCZ3cI5QA` |
| Delete Punch Item | DELETE | `/rest/v1.1/punch_items/{{id}}` | `conn_mod_def::GLdZNKaeV9g::MOpGZz5qSg-PKeF21x1L8A` |

8 more PunchItems actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Users | GET | `/rest/v1.2/users` | `conn_mod_def::GLdX-iN1OXA::qXexfUTKRA2jsf1ZNobfKw` |
| List Company Users | GET | `/rest/v1.3/users` | `conn_mod_def::GLdX-iI8bzg::2Bd8S1MZSxW2JKW4MvswZw` |
| List Company Users | GET | `/rest/v1.1/users` | `conn_mod_def::GLdX-jBN92g::IRliiu35TFW71eS509k8zA` |
| List Company Users | GET | `/rest/v1.0/users` | `conn_mod_def::GLdX-2SOv0g::8kYunY4XRGCVLjbrF-Qeig` |
| List Inactive Users for a Company | GET | `/rest/v1.0/companies/{{companyId}}/users/inactive` | `conn_mod_def::GLdX9CfYFbA::mo21LsGPSkG55bHaoJNIgQ` |
| List Inactive Users for a Project | GET | `/rest/v1.0/projects/{{projectId}}/users/inactive` | `conn_mod_def::GLdYC8Gqx8A::Gt0DAZYwQROGMsu6XyceCA` |
| Show a Company User | GET | `/rest/v1.3/users/{{id}}` | `conn_mod_def::GLdX_BXTpwA::bbPh0sGPQE6KfoMEUwgANA` |
| Show a Company User | GET | `/rest/v1.0/users/{{id}}` | `conn_mod_def::GLdX_Kq1wfA::ibRmNp5GQjmIP7sLU_bvVg` |
| Show a Company User | GET | `/rest/v1.1/users/{{id}}` | `conn_mod_def::GLdX_LEgWdg::EgbEBHcISQ2kms_bMcLsWA` |
| Show a Company's User | GET | `/rest/v1.0/companies/{{companyId}}/users/{{id}}` | `conn_mod_def::GLdX_LCvAjg::UBNl4TAJQgaFvNsMa3M50Q` |
| Create a Company's User | POST | `/rest/v1.2/companies/{{companyId}}/users` | `conn_mod_def::GLdX-Sgwzqg::Ndof_5KeQpup2y5P-tAvsA` |
| Create a Company's User | POST | `/rest/v1.0/companies/{{companyId}}/users` | `conn_mod_def::GLdX-Uet25A::RsLNH2qcQiqmRsq1ycMhGg` |

6 more Users actions are available through search.

### Bids

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bids Within a Bid Package for a Project | GET | `/rest/v1.1/projects/{{projectId}}/bid_packages/{{bidPackageId}}/bids` | `conn_mod_def::GLdYQkHv8FA::eOamcBbvTX2W5CxGPFJH4A` |
| List Bids Within a Bid Package for a Project | GET | `/rest/v1.0/projects/{{projectId}}/bid_packages/{{bidPackageId}}/bids` | `conn_mod_def::GLdYQkOD8hg::1yEYKSTfSvC6C2vyp9-ZvQ` |
| List Bids Within a Company | GET | `/rest/v1.0/companies/{{companyId}}/bids` | `conn_mod_def::GLdYQwZOkZA::45Ywr3uARcWh-0_J_m9dZw` |
| List Bids Within a Company | GET | `/rest/v2.0/companies/{{companyId}}/bids` | `conn_mod_def::GLdYQvyQs-A::xvp-X3YySDe81lG5gPYxpw` |
| List Bids Within a Project | GET | `/rest/v2.0/companies/{{companyId}}/projects/{{projectId}}/bids` | `conn_mod_def::GLdYRVp5sag::Qf9JXP2qQtqAbmqDGhNKQA` |
| List Bids Within a Project | GET | `/rest/v1.0/projects/{{projectId}}/bids` | `conn_mod_def::GLdYQv9Bnyg::ANv-OkKcT7eAKMpRhFuKwA` |
| Show a Bid in a Project Bid Package | GET | `/rest/v1.0/projects/{{projectId}}/bid_packages/{{bidPackageId}}/bids/{{id}}` | `conn_mod_def::GLdYQ-7acbg::d4XF7U9uRbmJKWOU0QHvBQ` |
| Show a Bid Within a Bid Package for a Project | GET | `/rest/v1.1/projects/{{projectId}}/bid_packages/{{bidPackageId}}/bids/{{id}}` | `conn_mod_def::GLdYQ6VvICg::eoLvkKgaROG1Oszt9SFd8g` |
| Show a Bid within a Company | GET | `/rest/v1.1/companies/{{companyId}}/bids/{{id}}` | `conn_mod_def::GLdYQvbXGJA::s0eNydIBTLKQQjc6hwrOWQ` |
| Show a Bid Within a Company | GET | `/rest/v1.0/companies/{{companyId}}/bids/{{id}}` | `conn_mod_def::GLdYQvI5jAA::PExJgFc7QzW44DYemlW2Cw` |
| Show a Bid Within a Project | GET | `/rest/v1.1/projects/{{projectId}}/bids/{{id}}` | `conn_mod_def::GLdYQ6PTG5g::A6hqrjt-Qnaa8kfix3VMwg` |
| Show a Project Bid | GET | `/rest/v1.0/projects/{{projectId}}/bids/{{id}}` | `conn_mod_def::GLdYQ6hC4Wg::vq4OojIIQaag5gtG1SQ56A` |

6 more Bids actions are available through search.

### ManagedEquipment

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Managed Equipment | GET | `/rest/v1.0/companies/{{companyId}}/managed_equipment` | `conn_mod_def::GLdYxLH3gxg::-adT1h4wRSWLeFD7PY-DBA` |
| List Managed Equipment for a Project | GET | `/rest/v1.0/projects/{{projectId}}/managed_equipment` | `conn_mod_def::GLdYxwhSKXg::nbON6HspT7OVxWABjCEo8w` |
| Show a Project's Managed Equipment | GET | `/rest/v1.0/projects/{{projectId}}/managed_equipment/{{id}}` | `conn_mod_def::GLdYx7QcOEg::A0-KVShoSvS7oS0cFUVqhQ` |
| Show Managed Equipment for a Company (by ID) | GET | `/rest/v1.0/companies/{{companyId}}/managed_equipment/{{id}}` | `conn_mod_def::GLdYxXlxkUA::AJR58utuS4Wip1a2BVE1rg` |
| Bulk Destroy Managed Equipment for a Company | DELETE | `/rest/v1.0/companies/{{companyId}}/managed_equipment/bulk_destroy` | `conn_mod_def::GLdYw6i7nBg::wamStprOS2uVC9HDHS1TfA` |
| Bulk Restore Managed Equipment for a Company | PATCH | `/rest/v1.0/companies/{{companyId}}/managed_equipment/bulk_restore` | `conn_mod_def::GLdYw5t7Psg::_OCWrsbGT3-VMhNK1CtgmA` |

11 more ManagedEquipment actions are available through search.

This lists 90 of 2841 actions. For anything not here, call `search_one_platform_actions` with platform `procore`. The full catalog is at https://www.withone.ai/knowledge/procore.

## When a call fails

The error comes from Procore, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/procore

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
