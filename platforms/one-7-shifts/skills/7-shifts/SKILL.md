---
name: 7-shifts
description: 7Shifts is a cloud‑based workforce management platform tailored for restaurants, combining intuitive drag‑and‑drop scheduling, mobile time tracking, automated payroll and tip management, labor compliance alerts, and team communication tools—all integrated with POS systems to streamline operations and reduce labor costs. Read and write 7shifts data through One: timeoff, availabilities, externalusermappings, webhooks, departments, employmentrecords and more, 148 actions with real parameter documentation. Use whenever the user asks to look something up in 7shifts, create or update a record there, or build code against the 7shifts API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: 7-shifts
  generated-from: one-knowledge-base
---

# 7shifts through One

7Shifts is a cloud‑based workforce management platform tailored for restaurants, combining intuitive drag‑and‑drop scheduling, mobile time tracking, automated payroll and tip management, labor compliance alerts, and team communication tools—all integrated with POS systems to streamline operations and reduce labor costs.

One exposes 7shifts through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `7-shifts` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm 7shifts is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real 7shifts account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### TimeOff

| Action | Method | Path | Action id |
|---|---|---|---|
| List Time Off | GET | `/time_off` | `conn_mod_def::GJzwYXQKonM::R_ljJ7RGS_i5m3MAhLsNXg` |
| Retrieve a Time Off Request | GET | `/v2/time_off/{{timeOffId}}` | `conn_mod_def::GJzwYe7CIig::VkVRL5_VRG2EoS4MOPyLoA` |
| Retrieve Time Off Hours | GET | `/time_off/total_hours` | `conn_mod_def::GJzwYqA3LCI::z2lDh6C9RuG6bT6oX-bXSg` |
| Approve a Time Off Request | POST | `/v2/time_off/{{timeOffId}}/approve` | `conn_mod_def::GJzwXr-Gj08::931MpIXBQi2D-SUInaTRqQ` |
| Create Time Off | POST | `/time_off` | `conn_mod_def::GJzwXzwE3Ck::zuuUJtRNQtWEGjwOUngIWg` |
| Decline a Time Off Request | POST | `/v2/time_off/{{timeOffId}}/decline` | `conn_mod_def::GJzwYEkdKGM::1d4VNC6vR4uK12CuCTU2kQ` |
| Delete a Time Off Request | DELETE | `/v2/time_off/{{timeOffId}}` | `conn_mod_def::GJzwYMUAjzo::imvbNi0-SpmIiBTULlo1xA` |
| Update a Time Off Request | PATCH | `/v2/time_off/{{timeOffId}}` | `conn_mod_def::GJzwY63R63I::gmN1SqIyQAeIyarvMHQwow` |

### Availabilities

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Availabilities | GET | `/v2/company/{{companyId}}/availabilities` | `conn_mod_def::GJzwKLgR-Bc::_DSMGfpxQIGVwbwYRZgt3w` |
| Retrieve an Availability | GET | `/v2/company/{{companyId}}/availabilities/{{availabilityId}}` | `conn_mod_def::GJzwKeZUDhQ::tdhPVL00Rgaif4S29RhOFA` |
| Create a Company Availability | POST | `/v2/company/{{companyId}}/availabilities` | `conn_mod_def::GJzwJojnBXI::yOaKHj5ETxS70HwiGAKseg` |
| Delete a Company's Availability | DELETE | `/v2/company/{{companyId}}/availabilities/{{availabilityId}}` | `conn_mod_def::GJzwJ5EK4XU::w4X4C0XEStSFIk38VJd2UA` |
| Update a Company Availability | PUT | `/v2/company/{{companyId}}/availabilities/{{availabilityId}}` | `conn_mod_def::GJzwKlosT-k::HOkWSN6iTB2f0nF4n1jSIg` |
| Update a Company Availability’s Status | PUT | `/v2/company/{{companyId}}/availabilities/{{availabilityId}}/status` | `conn_mod_def::GJzwK2byanM::BeL59OpeRxicBs7nh-jWow` |

### ExternalUserMappings

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's External User Mappings | GET | `/v2/company/{{companyId}}/external_user_mappings` | `conn_mod_def::GJzwN86q4q0::0xWTseFYTEy3hTbLtfg4Uw` |
| Retrieve a Company User External Mapping | GET | `/v2/company/{{companyId}}/external_user_mappings/{{identifier}}` | `conn_mod_def::GJzwOEQyLrk::PPqFAyItSKiTAY0hyeNASw` |
| Create a Company’s User External Mappings (Bulk) | POST | `/v2/company/{{companyId}}/external_user_mappings_bulk` | `conn_mod_def::GJzwNqPmTi0::8p9pAWRQRYez7p9774lHzg` |
| Create an External User Mapping (Company) | POST | `/v2/company/{{companyId}}/external_user_mappings` | `conn_mod_def::GJzwNiQ9jb8::ViaMXAc1TEmauVy1q5V8XQ` |
| Delete a Company's External User Mapping | DELETE | `/v2/company/{{companyId}}/external_user_mappings/{{identifier}}` | `conn_mod_def::GJzwNxh2NCY::lOdCitOdTcW7eB5xcL8NJA` |
| Update a Company's External User Mapping | PUT | `/v2/company/{{companyId}}/external_user_mappings/{{identifier}}` | `conn_mod_def::GJzwONGgPMg::6mqr0rfzQ1OnjmlBfzVy5Q` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Webhooks | GET | `/v2/company/{{companyId}}/webhooks` | `conn_mod_def::GJzwd6hxPnA::NsIlJUcTSyaAI40MifClQA` |
| Test a Company Webhook | GET | `/v2/company/{{companyId}}/test_webhook` | `conn_mod_def::GJzweDQjzzA::TTbsySBgRoumSqH5S3CSrg` |
| Create a Company's Webhook | POST | `/v2/company/{{companyId}}/webhooks` | `conn_mod_def::GJzwdq3pHGA::UtoQnyldReWLmsZG2bpkMQ` |
| Delete a Company's Webhook | DELETE | `/v2/company/{{companyId}}/webhooks/{{webhookId}}` | `conn_mod_def::GJzwdxc6Vbc::Hp9eOSQTR22pUWo-hHt4vg` |
| Update a Company's Webhook | PUT | `/v2/company/{{companyId}}/webhooks/{{webhookId}}` | `conn_mod_def::GJzweNBaDEY::gBPIDB4dTNSUor6iy2RDCA` |

### Departments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Departments | GET | `/v2/company/{{companyId}}/departments` | `conn_mod_def::GJzwMJi9_pU::I1iAcWc-T06nK8nplaavpA` |
| Retrieve a Company Department | GET | `/v2/company/{{companyId}}/departments/{{departmentId}}` | `conn_mod_def::GJzwMTJO4K4::JfqF-HHESYWYz2cKLG3kqg` |
| Create a Company Department | POST | `/company/{{companyId}}/departments` | `conn_mod_def::GJzwLyxuKtU::xzxoFSgfS02yXFrUR0cR1Q` |
| Delete a Company Department | DELETE | `/v2/company/{{companyId}}/departments/{{departmentId}}` | `conn_mod_def::GJzwL_EU5NU::UDBmU7MbTRKWWYlHxKiY3A` |
| Update a Company Department | PUT | `/v2/company/{{companyId}}/departments/{{departmentId}}` | `conn_mod_def::GJzwMdWjUSQ::NzxZ0FMkTiO8AWYlK5lmbA` |

### EmploymentRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Employment Records | GET | `/v2/company/{{companyId}}/employment_records` | `conn_mod_def::GJzwNArL1Og::BnWsPEmKTqi-LGB5jmV2zA` |
| Bulk Create or Update a Company’s Employment Records | POST | `/v2/company/{{companyId}}/bulk_employment_records` | `conn_mod_def::GJzwMulvhDk::NdFoQ619SGW8CDGmLuR2Kw` |
| Create a Company's Employment Record | POST | `/v2/company/{{companyId}}/employment_records` | `conn_mod_def::GJzwMl2zCok::Fo9yj_wOS3uf7s34QPlE9Q` |
| Delete a Company Employment Record | DELETE | `/v2/company/{{companyId}}/employment_record/{{uuid}}` | `conn_mod_def::GJzwM3UDeVk::mLmVjjm7QyWFjdD2JxYEUQ` |
| Update a Company's Employment Record | PUT | `/v2/company/{{companyId}}/employment_record/{{uuid}}` | `conn_mod_def::GJzwNKgFEi8::t_HpiixkRcKGCuzsR6pFlg` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Locations | GET | `/v2/company/{{companyId}}/locations` | `conn_mod_def::GJzwP9C2St4::aGneLqCGRh226oTSLp9RJA` |
| Retrieve a Company Location | GET | `/v2/company/{{companyId}}/locations/{{locationId}}` | `conn_mod_def::GJzwQFL4Hac::7HT8dHKlThi1FWX_6OcXvw` |
| Create a Company's Location | POST | `/v2/company/{{companyId}}/locations` | `conn_mod_def::GJzwPqkt8i0::5ua0o3jBRE6FSZ4eWOqtdw` |
| Delete a Company's Location | DELETE | `/v2/company/{{companyId}}/locations/{{locationId}}` | `conn_mod_def::GJzwP08-FoY::bO66pGamSKiRHUGjP9KEtA` |
| Update a Company's Location | PUT | `/v2/company/{{companyId}}/locations/{{locationId}}` | `conn_mod_def::GJzwQNaTV2A::tlQkFrIXRn-95VOfCojasA` |

### Shifts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Shifts | GET | `/v2/company/{{companyId}}/shifts` | `conn_mod_def::GJzwVlAhLa0::vIL_aRbASMuB6Nnm7ma25w` |
| Retrieve a Company's Shift | GET | `/v2/company/{{companyId}}/shifts/{{shiftId}}` | `conn_mod_def::GJzwVvJWXnA::meJJJjVxR46iT2NOSLNlQg` |
| Create a Company's Shift | POST | `/v2/company/{{companyId}}/shifts` | `conn_mod_def::GJzwVSrgSNM::Rjo5uAKWTN-dLDqGLa1gYA` |
| Delete a Company Shift | DELETE | `/v2/company/{{companyId}}/shifts/{{shiftId}}` | `conn_mod_def::GJzwVaMLsgU::xHFU0nJ4TP26jIJBwWFZdQ` |
| Update a Company Shift | PUT | `/v2/company/{{companyId}}/shifts/{{shiftId}}` | `conn_mod_def::GJzwV3L9QBw::IHp-ajn6THmC4s86nRMXrQ` |

### TaskListTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Task List Templates | GET | `/v2/company/{{companyId}}/task_list_templates` | `conn_mod_def::GJzwW4Ot-ng::t6kl7-4KTOq1MddyDjGVRQ` |
| Retrieve a Company's Task List Template | GET | `/v2/company/{{companyId}}/task_list_templates/{{uuid}}` | `conn_mod_def::GJzwXkDPuuc::0hu4dKAMQyyNnjnbvBN0DA` |
| Create a Company Task List Template | POST | `/v2/company/{{companyId}}/task_list_templates` | `conn_mod_def::GJzwWP9byD0::xEBtoPyUTcmHaAlImaanDA` |
| Delete a Company’s Task List Template | DELETE | `/v2/company/{{companyId}}/task_list_templates/{{uuid}}` | `conn_mod_def::GJzwWgvYTYc::q4fPYdz6SL2qwiLlXcEnbw` |
| Edit a Company Task List Template | PUT | `/v2/company/{{companyId}}/task_list_templates/{{uuid}}` | `conn_mod_def::GJzwWv2wnkQ::C2IqGF7FTAKiaaRvQ7__Kw` |

### TimePunches

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Time Punches | GET | `/v2/company/{{companyId}}/time_punches` | `conn_mod_def::GJzwZdTmzlE::K2lGhZqxSemsCl2ZhiBO3g` |
| Retrieve a Company Time Punch | GET | `/v2/company/{{companyId}}/time_punches/{{timePunchId}}` | `conn_mod_def::GJzwZlK56Rc::5iSCUtTeQDiZH7IWuXFLAg` |
| Create a Company's Time Punch | POST | `/v2/company/{{companyId}}/time_punches` | `conn_mod_def::GJzwZE8_V_Y::0rFjVCNKSFOmCMpH9A_I8A` |
| Delete a Company's Time Punch | DELETE | `/v2/company/{{companyId}}/time_punches/{{timePunchId}}` | `conn_mod_def::GJzwZNhxU00::bjfeyRi8SfixEkjZeW6Rjg` |
| Update a Company Time Punch | PUT | `/v2/company/{{companyId}}/time_punches/{{timePunchId}}` | `conn_mod_def::GJzwZtCO3hc::MtG_VQzmSE2fQIYxUBE8lQ` |

### RoleAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Role Assignments | GET | `/v2/company/{{companyId}}/users/{{userId}}/role_assignments` | `conn_mod_def::GJzwb50y5Sc::viEFb90JSlGTbBvDAfrazg` |
| Create a User’s Role Assignment | POST | `/v2/company/{{companyId}}/users/{{userId}}/role_assignments` | `conn_mod_def::GJzwa-0uNGw::f7oTQHHkRmmiGZoibQQY5A` |
| Create Many Role Assignments for a Company (Batch) | POST | `/v2/batch/company/{{companyId}}/users/role_assignments` | `conn_mod_def::GJzwa2emUS0::vQE5Y3mUQuy-TEKYnmC-ww` |
| Delete a User’s Role Assignment | DELETE | `/v2/company/{{companyId}}/users/{{userId}}/role_assignments/{{roleId}}` | `conn_mod_def::GJzwbW_Gh_c::V2m_d0Q0RoGXbK1NS6WKKw` |
| Update a User’s Role Assignment | PUT | `/v2/company/{{companyId}}/users/{{userId}}/role_assignments/{{roleId}}` | `conn_mod_def::GJzwcCpqyAc::QlKyaQ9CRLqGxJNp0G3GrQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Users | GET | `/v2/company/{{companyId}}/users` | `conn_mod_def::GJzwdCRItrc::LPaR-F0aTUu7nkX_7RMuzg` |
| Retrieve a Company User by Identifier | GET | `/v2/company/{{companyId}}/users/{{identifier}}` | `conn_mod_def::GJzwdSQ3UWI::N0up79lzREWXZ6wdSnlCfw` |
| Create Many Users (for a Company) | POST | `/v2/company/{{companyId}}/create_many_users` | `conn_mod_def::GJzwcdlFxlM::8iyAIeMYSIu_d-n4qN-Gyw` |
| Deactivate a Company's User | DELETE | `/v2/company/{{companyId}}/users/{{identifier}}` | `conn_mod_def::GJzwctFPApA::5Kk2sa8YTou6Hm2ppjMppw` |
| Update a Company's User | PUT | `/v2/company/{{companyId}}/users/{{identifier}}` | `conn_mod_def::GJzwdit-bQ4::hRh5W8lMQRqD0skc-JXRYw` |

### AvailabilityReasons

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Availability Reasons | GET | `/v2/company/{{companyId}}/availability_reasons` | `conn_mod_def::GJzwKXJ4esA::7hVWvwWCTNGJaz3MQIb4wQ` |
| Create a Company's Availability Reason | POST | `/v2/company/{{companyId}}/availability_reasons` | `conn_mod_def::GJzwJyXaiGM::4l1DLQpRRXu9k6CiOqmsOg` |
| Delete a Company's Availability Reason | DELETE | `/v2/company/{{companyId}}/availability_reasons/{{availabilityReasonId}}` | `conn_mod_def::GJzwKAu3B5I::asxVTx7KT_St9MHnx5Brsg` |
| Update a Company’s Availability Reason | PUT | `/v2/company/{{companyId}}/availability_reasons/{{availabilityReasonId}}` | `conn_mod_def::GJzwKucaUoc::PXpJpNqtQ3SO9tKFg7M4kA` |

### LogBookCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Log Book Categories (Beta) | GET | `/v2/company/{{companyId}}/log_book_categories` | `conn_mod_def::GJzwRVX5QPA::w_AxZFnVQtefFQqa8fqK_Q` |
| Create a Company's Log Book Category (Beta) | POST | `/v2/company/{{companyId}}/log_book_categories` | `conn_mod_def::GJzwQYTgnWM::Pv8NXVhUQVmzGs0BUUEN6A` |
| Delete a Company's Log Book Category (Beta) | DELETE | `/v2/company/{{companyId}}/log_book_categories/{{id}}` | `conn_mod_def::GJzwQ7rYb8g::Os0xOd0SQJOg93wSe9HTWQ` |
| Update a Company’s Log Book Category (Beta) | PATCH | `/v2/company/{{companyId}}/log_book_categories/{{id}}` | `conn_mod_def::GJzwSDjKShI::xpW3q7UkSm2XQ1JPzUqPUQ` |

### LogBookComments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Log Book Comments (Beta) | GET | `/v2/company/{{companyId}}/log_book_comments` | `conn_mod_def::GJzwRfowFxE::ZKQhayTyQCCGsMIstnVnEw` |
| Retrieve a Company's Log Book Comment (Beta) | GET | `/v2/company/{{companyId}}/log_book_comments/{{id}}` | `conn_mod_def::GJzwRy9FqN4::rQhQN1LHShyMbrIBwNo0ZQ` |
| Create a Company Log Book Comment (Beta) | POST | `/v2/company/{{companyId}}/log_book_comments` | `conn_mod_def::GJzwQhcTdxk::ALxbRQx6SZqO6C_Eg6FF0Q` |
| Delete a Company’s Log Book Comment (Beta) | DELETE | `/v2/company/{{companyId}}/log_book_comments/{{id}}` | `conn_mod_def::GJzwRDpTr8Y::ZeBxoqwmS-S19ed8cMHfrA` |

### LogBookPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Log Book Posts (Beta) | GET | `/v2/company/{{companyId}}/log_book_posts` | `conn_mod_def::GJzwRpIkgK8::8-TkvfkZTgmRXfytLMj-TQ` |
| Retrieve a Company’s Log Book Post (Beta) | GET | `/v2/company/{{companyId}}/log_book_posts/{{id}}` | `conn_mod_def::GJzwR6V7qV8::PAswg8DlSImGz2Y2DSuDhw` |
| Create a Company Log Book Post (Beta) | POST | `/v2/company/{{companyId}}/log_book_posts` | `conn_mod_def::GJzwhgDZIL8::rF99GRc_ScigT-xecWzCeA` |
| Delete a Company's Log Book Post (Beta) | DELETE | `/v2/company/{{companyId}}/log_book_posts/{{id}}` | `conn_mod_def::GJzwRNNukLY::pXCboKDfQZi-X41XW7ROEg` |

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Roles | GET | `/v2/company/{{companyId}}/roles` | `conn_mod_def::GJzwTupP0Wo::_aGl-gh2QWqYPdYFdAXb1w` |
| Retrieve a Company Role | GET | `/v2/company/{{companyId}}/roles/{{roleId}}` | `conn_mod_def::GJzwhNRt-QI::HEjaS2NjQkKVZ5SsaQIjUQ` |
| Create a Company Role | POST | `/v2/company/{{companyId}}/roles` | `conn_mod_def::GJzwTWuMxoQ::O9B4f11WR6aOkIxiJC0cwA` |
| Update a Company's Role | PUT | `/v2/company/{{companyId}}/roles/{{roleId}}` | `conn_mod_def::GJzwUEttALU::onTFZ91ARYGlMx7gv5lpXQ` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Companies | GET | `/companies` | `conn_mod_def::GJzwK-544D0::LisDtEdaQluBFwKp0Widaw` |
| Retrieve a Company | GET | `/v2/companies/{{id}}` | `conn_mod_def::GJzwLPgjmis::M9ODObTWQva2kO-II0EB8Q` |
| Update a Company | PATCH | `/v2/companies/{{id}}` | `conn_mod_def::GJzwLgcaZ9I::6I87HSUhQDmFCDXvw242Nw` |

### SalesCategoryMappings

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Location’s Sales Category Mappings (for a Company) | GET | `/v2/company/{{companyId}}/location/{{locationId}}/sales_category_mappings` | `conn_mod_def::GJzwPhRkc-o::qLgrEPOtQ2WZJbq9KX4gCQ` |
| Create a Location’s Sales Category Mappings (Bulk) | POST | `/v2/company/{{companyId}}/location/{{locationId}}/sales_category_mappings_bulk` | `conn_mod_def::GJzwPOwPQLs::qkR8-WPBReCOfVXjMZeO1g` |

1 more SalesCategoryMappings actions are available through search.

This lists 90 of 148 actions. For anything not here, call `search_one_platform_actions` with platform `7-shifts`. The full catalog is at https://www.withone.ai/knowledge/7-shifts.

## When a call fails

The error comes from 7shifts, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/7-shifts

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
