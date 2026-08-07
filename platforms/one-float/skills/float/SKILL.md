---
name: float
description: Float is resource management software that provides scheduling, capacity planning, project scoping, time tracking, and reporting, allowing professional services firms and delivery teams to see team availability, allocate work, monitor utilization, and keep project delivery aligned with budgets and timelines. Read and write Float data through One: projecttasks, projects, tasks, clients, currencies, departments and more, 102 actions with real parameter documentation. Use whenever the user asks to look something up in Float, create or update a record there, or build code against the Float API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: float
  generated-from: one-knowledge-base
---

# Float through One

Float is resource management software that provides scheduling, capacity planning, project scoping, time tracking, and reporting, allowing professional services firms and delivery teams to see team availability, allocate work, monitor utilization, and keep project delivery aligned with budgets and timelines.

One exposes Float through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `float` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Float is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Float account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ProjectTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Task | GET | `/v3/project-tasks/{{projectTaskId}}` | `conn_mod_def::GMjTFmSDZyM::JiuYgZ_1TiWJVQi4mrUShg` |
| List Project Tasks | GET | `/v3/project-tasks` | `conn_mod_def::GMjTFj5FqC0::w1Cv2KZmTn-Ggq0szvtBPQ` |
| Add a Project Task | POST | `/v3/project-tasks` | `conn_mod_def::GMjTFj1ArSE::apu6lq0lRqaGMAe6anF8WA` |
| Delete a Project Task | DELETE | `/v3/project-tasks/{{projectTaskId}}` | `conn_mod_def::GMjTFtl_hsQ::Q80rQdrYSUW-dRZsd_vASw` |
| Merge Project Tasks | POST | `/v3/project-tasks/merge` | `conn_mod_def::GMjTFmXcOuM::7K2KXHcQQAOuTT4rOuL7lw` |
| Update a Project Task | PATCH | `/v3/project-tasks/{{projectTaskId}}` | `conn_mod_def::GMjTF05C2oU::WODoLwlrT-2yNsYZEUxjAw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/v3/projects` | `conn_mod_def::GMjTF1BstMI::v0ogBL-WQeqVQKbSTh8v7g` |
| Retrieve a Project by ID | GET | `/v3/projects/{{projectId}}` | `conn_mod_def::GMjTF1d9CLI::JMWi9OcTQuqgSI7ExjJYHw` |
| Add a Project | POST | `/v3/projects` | `conn_mod_def::GMjTFz3rJqs::v44pH7F8Sje8nJVvHIru3w` |
| Create a Project from a Template | POST | `/v3/projects/from-template/{{projectTemplateId}}` | `conn_mod_def::GMjTGpESdFE::6P-sldtsQuKmjsSqjPRYtw` |
| Delete a Project | DELETE | `/v3/projects/{{projectId}}` | `conn_mod_def::GMjTFzvnxI0::kE_XJAKAT06H51CsgrzPUQ` |
| Update a Project | PATCH | `/v3/projects/{{projectId}}` | `conn_mod_def::GMjTF9WFhqk::UouKxCUXQJqqvxxLuaw7eQ` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Allocation as a Task | GET | `/v3/tasks/{{taskId}}` | `conn_mod_def::GMjTDnKAHR8::4Lup6QqQQt-TfsUdQJBQ2g` |
| List Allocations as Tasks | GET | `/v3/tasks` | `conn_mod_def::GMjTDMcl-hs::9-vFEHciQPOTPVZcZatenA` |
| Create a Task Allocation | POST | `/v3/tasks` | `conn_mod_def::GMjTDLHACdI::5yIsfEVlTvG_xsUVJ0e3Og` |
| Delete a Task Allocation | DELETE | `/v3/tasks/{{taskId}}` | `conn_mod_def::GMjTDK1g4KU::xvyS8bGrSc6cvVYUo8vOFg` |
| Update a Task Allocation | PATCH | `/v3/tasks/{{taskId}}` | `conn_mod_def::GMjTDmwOq6E::6iliVzHGTfGrRooiLSr7hg` |

### Clients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Client by ID | GET | `/v3/clients/{{clientId}}` | `conn_mod_def::GMjTECOx-O0::jj77V6OAQy-z8cZc9dtOQA` |
| List Clients | GET | `/v3/clients` | `conn_mod_def::GMjTD6OBNDg::Rq3GrLs5SeKKE31O5FYBJQ` |
| Add a Client | POST | `/v3/clients` | `conn_mod_def::GMjTDm2Q9Zk::27mJRIcLSBu-aW5Xf4KyQQ` |
| Delete a Client | DELETE | `/v3/clients/{{clientId}}` | `conn_mod_def::GMjTDmv8Kxk::vY9yMnqaS6q8MyR3sLAblw` |
| Update a Client | PATCH | `/v3/clients/{{clientId}}` | `conn_mod_def::GMjTEUGcpSQ::EzB-q0dlRB-a_Cl-FLylkA` |

### Currencies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Currency | GET | `/v3/currencies/{{currencyId}}` | `conn_mod_def::GMjTEapA16E::gL3l3p89RR6nVLV6Uxzn6g` |
| List Currencies | GET | `/v3/currencies` | `conn_mod_def::GMjTEB_lQGs::CvSV1EgWTDqUOHzM2zLtwA` |
| Add a Currency | POST | `/v3/currencies` | `conn_mod_def::GMjTEBqFbd8::AKBj7HqkTpC77P8FPYR6Aw` |
| Delete a Currency | DELETE | `/v3/currencies/{{currencyId}}` | `conn_mod_def::GMjTEBJ9r7I::8JRdDn66SnK6s6s-I4N-UA` |
| Update a Currency | PATCH | `/v3/currencies/{{currencyId}}` | `conn_mod_def::GMjTEacpnrc::6Zn4W8XJTJ2GV8le5dRiBw` |

### Departments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Department by ID | GET | `/v3/departments/{{departmentId}}` | `conn_mod_def::GMjTEkwWY4o::RgdSjlIDRIKBdCtbnyqIHw` |
| List Departments | GET | `/v3/departments` | `conn_mod_def::GMjTEmIv8jI::kWWmj5tRQES7bV3VTbAb4Q` |
| Add a Department | POST | `/v3/departments` | `conn_mod_def::GMjTEjzdNXw::vO9qIv0HT9yI8aaMqwszfg` |
| Delete a Department | DELETE | `/v3/departments/{{departmentId}}` | `conn_mod_def::GMjTEj4v_W4::fNKId09mSU607_VXGs87OA` |
| Update a Department | PATCH | `/v3/departments/{{departmentId}}` | `conn_mod_def::GMjTEmqOVws::el2uTfUwRNy9IvGcV5ngBg` |

### LoggedTime

| Action | Method | Path | Action id |
|---|---|---|---|
| List Logged Time for a Project or Person | GET | `/v3/logged-time` | `conn_mod_def::GMjTEva3h6I::_ZKM0ZE9RM6iZrCSyqPhbA` |
| Retrieve a Logged Time Entry | GET | `/v3/logged-time/{{loggedTimeId}}` | `conn_mod_def::GMjTEtPWXLY::H0AIWhyiRhyV7MbpeLLzCQ` |
| Delete a Logged Time Entry | DELETE | `/v3/logged-time/{{loggedTimeId}}` | `conn_mod_def::GMjTEtFmjy4::Ia5JHIznRjGbzqq-C9g78Q` |
| Log Time Using Logged Time | POST | `/v3/logged-time` | `conn_mod_def::GMjTEtOjatw::ZNWCC9qvTDqxIKW3hJBpNA` |
| Update a Logged Time Entry | PATCH | `/v3/logged-time/{{loggedTimeId}}` | `conn_mod_def::GMjTEtdDa_w::learJXI1QAun9CYBtfMPIg` |

### Milestones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Milestone | GET | `/v3/milestones/{{milestoneId}}` | `conn_mod_def::GMjTE4gaEYI::V4a0elQ9R7G0EE_7j5Juhg` |
| List Project Milestones | GET | `/v3/milestones` | `conn_mod_def::GMjTE3ojbgU::tbCbtiPSQbyzsXKMyHGQKw` |
| Add a Milestone | POST | `/v3/milestones` | `conn_mod_def::GMjTE67XqbY::W2KyltUMQBCeww_Ea8Dl_w` |
| Delete a Milestone | DELETE | `/v3/milestones/{{milestoneId}}` | `conn_mod_def::GMjTE26oxjw::lEMQXfDaScWD7HcY5Gg_vg` |
| Update a Milestone | PATCH | `/v3/milestones/{{milestoneId}}` | `conn_mod_def::GMjTE1a4NRA::FwMXPLuFQnWRiqBkUPDfXg` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Person | GET | `/v3/people/{{peopleId}}` | `conn_mod_def::GMjTFCf5X9o::ic6dcC03Ti6Xf7G6eyTyqg` |
| List People | GET | `/v3/people` | `conn_mod_def::GMjTFD6tEeA::ntqrwSnDQSWP5hkvvFVuVg` |
| Add a Person | POST | `/v3/people` | `conn_mod_def::GMjTFCWrgFE::iMbknNvwRAmlA2ourK__2w` |
| Delete a Person | DELETE | `/v3/people/{{peopleId}}` | `conn_mod_def::GMjTFBSh0fA::-g5fcOLPSYq-Zxf48FW96w` |
| Update a Person | PATCH | `/v3/people/{{peopleId}}` | `conn_mod_def::GMjTFCK-VDU::kUFyYNr5SDWy0qTe73nW8Q` |

### Phases

| Action | Method | Path | Action id |
|---|---|---|---|
| List Phases | GET | `/v3/phases` | `conn_mod_def::GMjTFMyYZ7I::5dBmN5YHQ_6eQrsonhIieA` |
| Retrieve a Phase | GET | `/v3/phases/{{phaseId}}` | `conn_mod_def::GMjTFKYKW7c::JgWrgCWtTS-36-KDRllf8w` |
| Create a Phase | POST | `/v3/phases` | `conn_mod_def::GMjTFJzZq60::wi9YQ8c3S02utGVDzrUs1Q` |
| Delete a Phase | DELETE | `/v3/phases/{{phaseId}}` | `conn_mod_def::GMjTFKUqsag::B2KJ2sIqSDit_BoMF2ts5A` |
| Update a Phase | PATCH | `/v3/phases/{{phaseId}}` | `conn_mod_def::GMjTFNag388::KkkQIHXKTsO21U_G59AY2g` |

### ProjectExpenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Expense | GET | `/v3/project-expenses/{{projectExpenseId}}` | `conn_mod_def::GMjTFTgtpEU::O1peVdslRBSuy55035bvwg` |
| List Project Expenses | GET | `/v3/project-expenses` | `conn_mod_def::GMjTFUkYnvc::lhmEgZAMRJuL4EsMXSm_Lw` |
| Create a Project Expense | POST | `/v3/project-expenses` | `conn_mod_def::GMjTFTzsO_0::FDqEGHvVRdin7QabJtv4sg` |
| Delete a Project Expense | DELETE | `/v3/project-expenses/{{projectExpenseId}}` | `conn_mod_def::GMjTFTzUZDA::Uk8s2grbTL2nHLjz324LBg` |
| Update a Project Expense | PATCH | `/v3/project-expenses/{{projectExpenseId}}` | `conn_mod_def::GMjTFTu7UXU::3elTyzUcQueSW_5DaJgmjQ` |

### ProjectStages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Stage | GET | `/v3/project-stages/{{id}}` | `conn_mod_def::GMjTFb-FdGA::QDQCsjdPTISbpgWqkigN9w` |
| List Project Stages | GET | `/v3/project-stages` | `conn_mod_def::GMjTFa3mQmk::iu1UMrwfTgKu8HyuE2F0tg` |
| Add a Project Stage | POST | `/v3/project-stages` | `conn_mod_def::GMjTFayjv74::1qVoZC3AQEKbXw72Uh18qA` |
| Delete a Project Stage | DELETE | `/v3/project-stages/{{id}}` | `conn_mod_def::GMjTFaT3Quk::Wk8o1jQ8SICFVg0LXAq91Q` |
| Update a Project Stage | PATCH | `/v3/project-stages/{{id}}` | `conn_mod_def::GMjTFdFtFa0::CwqJmLh0Tk-zLNb3m5IxfA` |

### RateCards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Rate Card | GET | `/v3/rate-cards/{{rateCardId}}` | `conn_mod_def::GMjTGFUtntk::lODhpvdeS-6fOw3-DgPM7g` |
| List Rate Cards | GET | `/v3/rate-cards` | `conn_mod_def::GMjTGEy5pzU::y2CE7t_nQDGKpPH12AjKlA` |
| Add a Rate Card | POST | `/v3/rate-cards` | `conn_mod_def::GMjTF8gEyl4::huRj-Gk8SYClyzEbMOp62w` |
| Delete a Rate Card | DELETE | `/v3/rate-cards/{{rateCardId}}` | `conn_mod_def::GMjTF7wBmCk::7HeuJYyaRR2yLKMgKUQ30w` |
| Update a Rate Card | PATCH | `/v3/rate-cards/{{rateCardId}}` | `conn_mod_def::GMjTGFLpj3s::4hI6z71FRLi_qDCZmEJNPg` |

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Role | GET | `/v3/roles/{{roleId}}` | `conn_mod_def::GMjTGNdqBt0::nGNK1rgXQQG_WIt5P5WG6w` |
| List Roles | GET | `/v3/roles` | `conn_mod_def::GMjTGLJ80kU::wC8cE4O7TlmXcVda_QHnOg` |
| Add a Role | POST | `/v3/roles` | `conn_mod_def::GMjTGMrwDLY::hZZRBoWBRsKhQEuckoGARQ` |
| Delete a Role | DELETE | `/v3/roles/{{roleId}}` | `conn_mod_def::GMjTGLDlHQ0::JUMLHswIQX6hWWh9R-D2iQ` |
| Update a Role | PATCH | `/v3/roles/{{roleId}}` | `conn_mod_def::GMjTGMtpHo8::1mDyXCijQ8S25e-xr9qmmA` |

### Holidays

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team Holiday by ID | GET | `/v3/holidays/{{holidayId}}` | `conn_mod_def::GMjTGhuexGA::7AxEe6hxRVmfJIU4Nog_wQ` |
| List Team Holidays | GET | `/v3/holidays` | `conn_mod_def::GMjTGh3sQ7E::bL3JJ6wiSvqF7Di6A1yORA` |
| Create a Team Holiday | POST | `/v3/holidays` | `conn_mod_def::GMjTGhhQNOU::04UXgSf7SDKTk83Y3xFOuQ` |
| Delete a Team Holiday | DELETE | `/v3/holidays/{{holidayId}}` | `conn_mod_def::GMjTGhFpg4U::0lN2N7PdQ06LFnrZnXjhmg` |
| Update a Holiday | PATCH | `/v3/holidays/{{holidayId}}` | `conn_mod_def::GMjTGiG0BRg::Zl_RgEYkTNa1Xh7o1waURQ` |

### Status

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Status | GET | `/v3/status/{{statusId}}` | `conn_mod_def::GMjTGUXfP8A::IHnqpeT2ToyBhC_hBnvR5Q` |
| Add a Status | POST | `/v3/status` | `conn_mod_def::GMjTGUCLxQ4::Uo8x-WOWR0SXjT9ArPDJ5Q` |
| Delete a Status | DELETE | `/v3/status/{{statusId}}` | `conn_mod_def::GMjTGUtZnCk::0n-bs6r3QOmMxleHG8itOA` |
| Update a Status | PATCH | `/v3/status/{{statusId}}` | `conn_mod_def::GMjTGTkOapw::WDM8KH0fT_iYlkizZhCuqg` |

### TimeOffTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Time Off Type | GET | `/v3/timeoff-types/{{timeoffTypeId}}` | `conn_mod_def::GMjTG328hgQ::XNfbmKraTOaeMi9tOiVAvA` |
| List Time Off Types | GET | `/v3/timeoff-types` | `conn_mod_def::GMjTGwlnHXo::0snug3HGQ5-09LE-Aw36Ow` |
| Update a Time Off Type | PATCH | `/v3/timeoff-types/{{timeoffTypeId}}` | `conn_mod_def::GMjTG6ZHl3M::Rzkgt6AeR-6Ltgm4Cuf68w` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account | GET | `/v3/accounts/{{accountId}}` | `conn_mod_def::GMjTDfyNhRo::IZXlTMM6Ri-xHhW3Mg8UDw` |
| List Accounts | GET | `/v3/accounts` | `conn_mod_def::GMjTDL9-hbU::DMczgR1WSm6E9kw9W_HOZw` |

### PublicHolidays

| Action | Method | Path | Action id |
|---|---|---|---|
| List Public Holidays | GET | `/v3/public-holidays` | `conn_mod_def::GMjTF8gPc1s::XsPM1so6Rim6sNWBBMX79A` |
| Retrieve a Public Holiday | GET | `/v3/public-holidays/{{publicHolidayId}}` | `conn_mod_def::GMjTF70o3x8::2b0I-SIqTRqpdCxPMIxlUQ` |

### Timeoffs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Scheduled Time Off | GET | `/v3/timeoffs` | `conn_mod_def::GMjTGxGQ3Nk::2pwzEMH2QcGrBipKGS06Aw` |
| Create a Time Off | POST | `/v3/timeoffs` | `conn_mod_def::GMjTGoGzpwE::elRaIcWFRGuC5WL5UC4Bzg` |

This lists 90 of 102 actions. For anything not here, call `search_one_platform_actions` with platform `float`. The full catalog is at https://www.withone.ai/knowledge/float.

## When a call fails

The error comes from Float, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/float

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
