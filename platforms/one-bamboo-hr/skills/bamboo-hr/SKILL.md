---
name: bamboo-hr
description: BambooHR is an HR software platform that combines hiring and onboarding, employee data and reporting, payroll, time tracking, benefits administration, performance management, and compensation tools, allowing businesses to manage the employee lifecycle and workforce operations from a single system. Read and write BambooHR data through One: compensationplanningcycles, breakpolicies, newhirepackets, employees, timetrackingprojects, shifts and more, 277 actions with real parameter documentation. Use whenever the user asks to look something up in BambooHR, create or update a record there, or build code against the BambooHR API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bamboo-hr
  generated-from: one-knowledge-base
---

# BambooHR through One

BambooHR is an HR software platform that combines hiring and onboarding, employee data and reporting, payroll, time tracking, benefits administration, performance management, and compensation tools, allowing businesses to manage the employee lifecycle and workforce operations from a single system.

One exposes BambooHR through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bamboo-hr` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BambooHR is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BambooHR account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CompensationPlanningCycles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Compensation Planning Cycle Summary | GET | `/api/v1/compensation/planning_cycles/{{id}}/summary` | `conn_mod_def::GMSIZV6f0a8::RruZLPAESkuNkdQL4Uc2fA` |
| Get Change Communication Letter Details for a Compensation Planning Cycle | GET | `/api/v1/compensation/planning_cycles/{{id}}/change_comm` | `conn_mod_def::GMSIZOTTvUI::SIOMRRlPQySZxkHOXgklrw` |
| Get Compensation Planning Cycle Details | GET | `/api/v1/compensation/planning_cycles/{{id}}` | `conn_mod_def::GMSIZV4OegM::togiBd3rSEit6kXqPNj55A` |
| List Compensation Planning Cycles | GET | `/api/v1/compensation/planning_cycles` | `conn_mod_def::GMSIZfjTCBI::XE3AYcJsQQe3gvm5W97Dmg` |
| Add Cycle Admins for a Compensation Planning Cycle | POST | `/api/v1/compensation/planning_cycles/{{id}}/admins` | `conn_mod_def::GMSIZGuHYOI::3Fp6LUd-Q5KSz-n1XyfVtA` |
| Add Employees to a Compensation Planning Cycle | POST | `/api/v1/compensation/planning_cycles/{{id}}/employees` | `conn_mod_def::GMSIZGlMtUs::qHW55fNCQZuSd_rsiU4fGg` |
| Complete a Compensation Planning Cycle | PUT | `/api/v1/compensation/planning_cycles/{{id}}/complete` | `conn_mod_def::GMSIZNLn8SA::90lGfZS8QtCiJ9qGBiDTMQ` |
| Create a Compensation Planning Cycle | POST | `/api/v1/compensation/planning_cycles` | `conn_mod_def::GMSIZMhwb5s::LwifjQP1Ti2_eKwbH-BrYw` |
| Delete a Compensation Planning Cycle | DELETE | `/api/v1/compensation/planning_cycles/{{id}}` | `conn_mod_def::GMSIZNOiwRU::_Hw2MHdYSduaUyIJHrXH3w` |
| Launch a Compensation Planning Cycle | PUT | `/api/v1/compensation/planning_cycles/{{id}}/launch` | `conn_mod_def::GMSIZeR-d5Q::aRnKZGK9SSOB8KA-wES8xA` |
| Remove a Cycle Admin from a Compensation Planning Cycle | DELETE | `/api/v1/compensation/planning_cycles/{{id}}/admins/{{employeeId}}` | `conn_mod_def::GMSIZoU6sPw::rE0LgSEbS9apTUcDtKL1hw` |
| Remove Employees From a Compensation Planning Cycle | DELETE | `/api/v1/compensation/planning_cycles/{{id}}/employees` | `conn_mod_def::GMSIZoo-AAI::3VWAZQdiS0y1mr8GbroekA` |

4 more CompensationPlanningCycles actions are available through search.

### BreakPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Break Policy by ID | GET | `/api/v1/time-tracking/break-policies/{{id}}` | `conn_mod_def::GMSIb1RUnsk::nBFRwELoSB-XA--YS011yw` |
| List an Employee's Break Policies | GET | `/api/v1/time-tracking/employees/{{id}}/break-policies` | `conn_mod_def::GMSIb9DyAYM::d6u4Pc4bQpmQ_Ifj9w1CwQ` |
| List Break Policies | GET | `/api/v1/time-tracking/break-policies` | `conn_mod_def::GMSIb2BJkBc::pCamqvLNS0SJMhD1Se7L4Q` |
| Assign Employees to a Break Policy | PUT | `/api/v1/time-tracking/break-policies/{{id}}/assign` | `conn_mod_def::GMSIb9eGwec::KWY5MGkxSHiLXvFiozO06w` |
| Assign Employees to a Break Policy | POST | `/api/v1/time-tracking/break-policies/{{id}}/assign` | `conn_mod_def::GMSIbkprrhQ::iP6MwKcdRSChz3xlR-raHg` |
| Create Break Policy | POST | `/api/v1/time-tracking/break-policies` | `conn_mod_def::GMSIbtUs96o::hlM8BuNyRwWKPbNICg_xGQ` |
| Delete a Break Policy | DELETE | `/api/v1/time-tracking/break-policies/{{id}}` | `conn_mod_def::GMSIbtqlP9E::azwwNrxxQHWglDrqcX0xtA` |
| Replace Breaks for a Break Policy | PUT | `/api/v1/time-tracking/break-policies/{{id}}/breaks` | `conn_mod_def::GMSIb866Rog::5orGz5lCTZS3IaKl3DBH-Q` |
| Sync a Break Policy | PUT | `/api/v1/time-tracking/break-policies/{{id}}/sync` | `conn_mod_def::GMSIcEt2ZXA::-7F_cznzRz6g2dPdlYJZdQ` |
| Unassign Employees from a Break Policy | POST | `/api/v1/time-tracking/break-policies/{{id}}/unassign` | `conn_mod_def::GMSIcFP9Reg::Mzyiyh3fReGkgUQHEYyC8Q` |
| Update a Break Policy | PATCH | `/api/v1/time-tracking/break-policies/{{id}}` | `conn_mod_def::GMSIcHpnp0o::x-OqtSfyRA6n5Qis9SBWXA` |

### NewHirePackets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a New Hire Packet by ID | GET | `/api/v1/new-hire-packets/{{id}}` | `conn_mod_def::GMSIcO6HTGI::29gUWFVjQL2Ufd1aXDtFJA` |
| List New Hire Packets | GET | `/api/v1/new-hire-packets` | `conn_mod_def::GMSIcXdDvpQ::S4dxtj-sQLC2dbpaFNV97Q` |
| Cancel a New Hire Packet | POST | `/api/v1/new-hire-packets/{{id}}/cancel` | `conn_mod_def::GMSIcFKOAPA::CSnLbBC0QMu5NH7erAHfHA` |
| Create a New Hire Packet | POST | `/api/v1/new-hire-packets` | `conn_mod_def::GMSIcOfQwvA::LV8nsFQnT4Gbs5hHRGgl3w` |
| Delete a New Hire Packet | DELETE | `/api/v1/new-hire-packets/{{id}}` | `conn_mod_def::GMSIcOJ1zvU::4-J4voVHQa-xQ0gKHBsNDA` |
| Send a New Hire Packet | POST | `/api/v1/new-hire-packets/{{id}}/send` | `conn_mod_def::GMSIcYIgsik::WvuZxpU1RwyXagsw887k1g` |
| Update a New Hire Packet | PUT | `/api/v1/new-hire-packets/{{id}}` | `conn_mod_def::GMSIcsd6KfU::Ots7ORK-T2aBheOJwE3wJQ` |
| Update GTKY Answer Visibility for a New Hire Packet | PUT | `/api/v1/new-hire-packets/{{id}}/question-visibility` | `conn_mod_def::GMSIclpe_zM::4bNjbhMtT-q0Ui0d3ttGqw` |

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Employee | GET | `/api/v1/employees/{{id}}` | `conn_mod_def::GMSIanzhwrA::vEpMrTvsRw6VYFeQacIWtw` |
| Get Changed Employee IDs | GET | `/api/v1/employees/changed` | `conn_mod_def::GMSIYb_GI7g::_HllkrE5SKmGFHpGZzrWGQ` |
| List Employees | GET | `/api/v1/employees` | `conn_mod_def::GMSIa8rwp5k::xUji4OubSWSU9BP6zMhQxA` |
| List Employees Assigned to a Break Policy | GET | `/api/v1/time-tracking/break-policies/{{id}}/employees` | `conn_mod_def::GMSIb145Tvw::3i2owhtfSMuwvlkm9-6OHQ` |
| Create an Employee | POST | `/api/v1/employees` | `conn_mod_def::GMSIafsjKpM::foQuaK6NSJa6nHneHWBIUg` |
| Delete an Employee | DELETE | `/api/v1/employees/{{id}}` | `conn_mod_def::GMSIae7YCZg::DhByc-c2ScW66nVePG8h6A` |
| Update an Employee | POST | `/api/v1/employees/{{id}}` | `conn_mod_def::GMSIanB5-Hk::YR3y_jM9QxWFTjndoILCzQ` |

### TimeTrackingProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Time Tracking Project by ID | GET | `/api/v1/time-tracking/projects/{{projectId}}` | `conn_mod_def::GMSIz3Bl2PA::k34-RIVcT6C6lCe9PWUKzw` |
| List Time Tracking Projects | GET | `/api/v1/time-tracking/projects` | `conn_mod_def::GMSIz-IW6EQ::AIHjUooDRDiOp_JNa5mjgA` |
| Create a Time Tracking Project | POST | `/api/v1/time-tracking/projects` | `conn_mod_def::GMSIycY53zA::xRyWy0wRRcSoOHggAJrh2g` |
| Create a Time Tracking Project | POST | `/api/v1/time_tracking/projects` | `conn_mod_def::GMSIycawnLY::PJJNAgHCSHGm6wMwbbwjMw` |
| Delete a Time Tracking Project | DELETE | `/api/v1/time-tracking/projects/{{id}}` | `conn_mod_def::GMSIzcELXxQ::GV21lKcdSz6rIyDS3dDM1A` |
| Update a Time Tracking Project | PATCH | `/api/v1/time-tracking/projects/{{id}}` | `conn_mod_def::GMSI0KU6gp0::fmLMFSzESfS47OiPyuk8rA` |

### Shifts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shift | GET | `/api/v1/scheduling/shifts/{{id}}` | `conn_mod_def::GMSIdgd2Xsk::XM0BEaDTS8qAb-AB6FkXsQ` |
| List Shifts | GET | `/api/v1/scheduling/shifts` | `conn_mod_def::GMSJXTJvmq8::llulBS4nQcOuaJnCduKZcw` |
| Create Shift | POST | `/api/v1/scheduling/shifts` | `conn_mod_def::GMSIdYQXosI::g_fgK2r9R7m_3E_-0mBoYA` |
| Delete a Shift | DELETE | `/api/v1/scheduling/shifts/{{id}}` | `conn_mod_def::GMSIdaO_bAE::sr60BGcgSJSR79SIbqxiZA` |
| Publish Shifts | POST | `/api/v1/scheduling/shifts/publish` | `conn_mod_def::GMSJXSdK0S8::TBOPqVuvTV6FEdmqGeef9w` |
| Update a Shift | PATCH | `/api/v1/scheduling/shifts/{{id}}` | `conn_mod_def::GMSJXS0hI6Y::lwyc2X59QlS7rJ95SuI_Qw` |

### CompensationBenchmarks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Compensation Benchmarks | GET | `/api/v1/compensation/benchmarks` | `conn_mod_def::GMSIZGMjMPA::LTsvA5R1ThiMcMRJqRtMEw` |
| Create a Compensation Benchmark | POST | `/api/v1/compensation/benchmarks` | `conn_mod_def::GMSIY3YXn4U::KgisEyAgRlKagxa_nj-kzQ` |
| Delete Compensation Benchmark | DELETE | `/api/v1/compensation/benchmarks/{{id}}` | `conn_mod_def::GMSIY3smtDc::g-0FEcgPTHmSIDj99ExiCQ` |
| Import Compensation Benchmarks From CSV | POST | `/api/v1/compensation/benchmarks/import` | `conn_mod_def::GMSIY-7Tg58::bVLi3CHqTEi6SNf2xt9iMg` |
| Update Compensation Benchmarks | PUT | `/api/v1/compensation/benchmarks` | `conn_mod_def::GMSIZF_8LsU::JJb6EFNWTuiDV4w1PhB8Hw` |

### Goals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Goals for an Employee | GET | `/api/v1/performance/employees/{{employeeId}}/goals` | `conn_mod_def::GMSIbVOwgFI::g9QOFi99Qe2CaAd1gmpWLg` |
| Close a Goal for an Employee | POST | `/api/v1/performance/employees/{{employeeId}}/goals/{{goalId}}/close` | `conn_mod_def::GMSIantzJNM::5GrgfMrqQdWfVhs3Pwd6Lg` |
| Create a Goal for an Employee | POST | `/api/v1/performance/employees/{{employeeId}}/goals` | `conn_mod_def::GMSIbFl-Ho0::KHXQqddNQVOpLNL96cjZ1A` |
| Delete a Goal for an Employee | DELETE | `/api/v1/performance/employees/{{employeeId}}/goals/{{goalId}}` | `conn_mod_def::GMSIbEgB7Y4::WfYbeTAHTsiadw0EovxTfQ` |
| Update a Goal for an Employee | PUT | `/api/v1_1/performance/employees/{{employeeId}}/goals/{{goalId}}` | `conn_mod_def::GMSIbULnkpE::T-qPj1RLQOyz4rhvBALZOg` |

### JobLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job Location by ID | GET | `/api/v1/hris/org/locations/{{id}}` | `conn_mod_def::GMSIbnNbWzQ::CpamSlQlQ_qz0COeOkg55w` |
| List Job Locations | GET | `/api/v1/hris/org/locations` | `conn_mod_def::GMSIbkj_6eY::JL81rkavSLW-x5P91UANwA` |
| Create a Job Location | POST | `/api/v1/hris/org/locations` | `conn_mod_def::GMSIbcVjh3I::Ji949y_2SVexAIj3VZTDMQ` |
| Delete a Job Location | DELETE | `/api/v1/hris/org/locations/{{id}}` | `conn_mod_def::GMSIbj0RiQw::pjcaZHzJR1qbBRQenXJnmA` |
| Update a Job Location | PUT | `/api/v1/hris/org/locations/{{id}}` | `conn_mod_def::GMSIbkb6_kc::X423HA53SnK5YgNiLFfWdA` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Schedule | GET | `/api/v1/scheduling/schedules/{{id}}` | `conn_mod_def::GMSIdhTiS1c::94HJSloJQQami4iTrP7a2Q` |
| List Schedules | GET | `/api/v1/scheduling/schedules` | `conn_mod_def::GMSIdhun5vU::CGU0WBXwSsueaq857encQg` |
| Create a Schedule | POST | `/api/v1/scheduling/schedules` | `conn_mod_def::GMSIdYmx2AE::7hrKzCDgRGCp44ApnkcRfA` |
| Delete a Schedule | DELETE | `/api/v1/scheduling/schedules/{{id}}` | `conn_mod_def::GMSIdYBrmWY::9aoDTzj-RlqlohhWQth5oA` |
| Update a Schedule | PATCH | `/api/v1/scheduling/schedules/{{id}}` | `conn_mod_def::GMSJXS_Aj7U::WcsCQNpoS66Yjgvkf5LTCA` |

### TimeTrackingShiftDifferentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Time Tracking Shift Differential by ID | GET | `/api/v1/time-tracking/shift-differentials/{{id}}` | `conn_mod_def::GMSIz-EmYRc::vFgZr6q_RD-LmfSqhU0NbA` |
| List Time Tracking Shift Differentials | GET | `/api/v1/time-tracking/shift-differentials` | `conn_mod_def::GMSIz-zTigE::5dv3dMS0QFW48Acqp6m_eQ` |
| Create Time Tracking Shift Differentials | POST | `/api/v1/time-tracking/shift-differentials` | `conn_mod_def::GMSIynSPjEw::Hr8_2GP4TeqcQQr-8PdIww` |
| Delete a Time Tracking Shift Differential | DELETE | `/api/v1/time-tracking/shift-differentials/{{id}}` | `conn_mod_def::GMSIz1XH7qo::e_3ur5H5RT6fnepwl0DE_g` |
| Update a Time Tracking Shift Differential | PATCH | `/api/v1/time-tracking/shift-differentials/{{id}}` | `conn_mod_def::GMSI0FXhsyM::pwecIjQXSd24-X8DH1L-og` |

### EmployeeFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Employee File | GET | `/api/v1/employees/{{id}}/files/{{fileId}}` | `conn_mod_def::GMSIaCQocvI::RvlPC8l8REewInE5SfdcHQ` |
| List an Employee's Files | GET | `/api/v1/employees/{{id}}/files/view` | `conn_mod_def::GMSIaKqWrbk::4HfEFbcVQlSHUtKtILQW_g` |
| Delete an Employee File | DELETE | `/api/v1/employees/{{id}}/files/{{fileId}}` | `conn_mod_def::GMSIaCI7f_g::M3wNPm43SRCVD6R4aVlSxg` |
| Update an Employee File | POST | `/api/v1/employees/{{id}}/files/{{fileId}}` | `conn_mod_def::GMSIaKCQcmo::czU8D6r4S4GQUphrnkv1FA` |
| Upload an Employee File | POST | `/api/v1/employees/{{id}}/files` | `conn_mod_def::GMSIaJ8UFhs::HnmwiA7KR3Wea5_FNHjX9w` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook by ID | GET | `/api/v1/webhooks/{{id}}` | `conn_mod_def::GMSI0whuDFo::7KNRTEdjTaCm1goJKwWCDA` |
| List Webhooks | GET | `/api/v1/webhooks` | `conn_mod_def::GMSI02cNK4U::LqOWxin3TW6oLLyKRi5gaw` |
| Create Webhook | POST | `/api/v1/webhooks` | `conn_mod_def::GMSI0pOt2Dw::yZ0rW1yrT0WPiqPn3ZP5xQ` |
| Delete a Webhook | DELETE | `/api/v1/webhooks/{{id}}` | `conn_mod_def::GMSI0vyRMDQ::yMypEo9DQ4SoymuiDspPXQ` |
| Update a Webhook | PUT | `/api/v1/webhooks/{{id}}` | `conn_mod_def::GMSI03CE4is::4Dy1ase4RW6bMrpF2KBz8g` |

### Timezones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Timezone by ID | GET | `/api/v1/meta/timezones/{{id}}` | `conn_mod_def::GMSIXmEOKZI::r8AFIUt5QcyvPOezLR5mYQ` |
| Get Timezone by ZIP Code | GET | `/api/v1/meta/timezones/by-zip/{{zip}}` | `conn_mod_def::GMSIXvMbQSg::rGx-znicSX2n_XpH7Bd8jA` |
| List Timezones | GET | `/api/v1/meta/timezones` | `conn_mod_def::GMSIX3rKCvs::VdzyEaA4RhKzBmFr3RLeWA` |
| List Timezones | GET | `/api/v1/scheduling/timezones` | `conn_mod_def::GMSJXTOvPjc::L3rQ5pLlTzeWah5EhKsr3g` |

### AlertConfigurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Alert Configuration by ID | GET | `/api/v1/alert-configurations/{{id}}` | `conn_mod_def::GMSIX-YXaH4::UEULYNTMQjGQFoQUWFITrg` |

3 more AlertConfigurations actions are available through search.

This lists 90 of 277 actions. For anything not here, call `search_one_platform_actions` with platform `bamboo-hr`. The full catalog is at https://www.withone.ai/knowledge/bamboo-hr.

## When a call fails

The error comes from BambooHR, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bamboo-hr

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
