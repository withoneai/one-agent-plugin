---
name: clockify
description: Clockify is a time tracking and timesheet platform that enables teams and businesses to record work hours, manage projects, track billable time, and analyze productivity through web, mobile, and API-based integrations for reporting, payroll, and workflow automation. Read and write Clockify data through One: timeentries, workspaces, invoices, approvalrequests, webhooks, timeoffrequests and more, 155 actions with real parameter documentation. Use whenever the user asks to look something up in Clockify, create or update a record there, or build code against the Clockify API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: clockify
  generated-from: one-knowledge-base
---

# Clockify through One

Clockify is a time tracking and timesheet platform that enables teams and businesses to record work hours, manage projects, track billable time, and analyze productivity through web, mobile, and API-based integrations for reporting, payroll, and workflow automation.

One exposes Clockify through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `clockify` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Clockify is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Clockify account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### TimeEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Workspace Time Entry | GET | `/api/v1/workspaces/{{workspaceId}}/time-entries/{{id}}` | `conn_mod_def::GLSyN3WF5Hg::Ig7ZV7r2QYuLoxPgdRPLpQ` |
| Get Time Entries for a User on a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/user/{{userId}}/time-entries` | `conn_mod_def::GLSyOCPsd-g::y0O4Ln8-R_OScvJgjfzXrg` |
| Add a New Time Entry for a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/time-entries` | `conn_mod_def::GLSyNeCAClg::XKjjIVypSluVa0YVS96bGg` |
| Bulk Edit Time Entries for a Workspace User | PUT | `/api/v1/workspaces/{{workspaceId}}/user/{{userId}}/time-entries` | `conn_mod_def::GLSyNe-y1VA::ynaqotDcTmGvP_1UuSSGUQ` |
| Delete a User's Time Entries in a Workspace | DELETE | `/api/v1/workspaces/{{workspaceId}}/user/{{userId}}/time-entries` | `conn_mod_def::GLSyNtutrRg::ZhIegOMoRcaa3-K_d5jPGQ` |
| Delete a Workspace Time Entry | DELETE | `/api/v1/workspaces/{{workspaceId}}/time-entries/{{id}}` | `conn_mod_def::GLSyNeJxkYg::pvUB31-lSXSbLi-3yDGzeA` |
| Stop a User's Running Timer in a Workspace | PATCH | `/api/v1/workspaces/{{workspaceId}}/user/{{userId}}/time-entries` | `conn_mod_def::GLSyOKrLlVA::jPl-pvzMTiSPVHRH5hMa6A` |
| Update a Workspace Time Entry | PUT | `/api/v1/workspaces/{{workspaceId}}/time-entries/{{id}}` | `conn_mod_def::GLSyOK0T33A::byK0f8imSjWfU1e0TuoZ-g` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get My Workspaces | GET | `/api/v1/workspaces` | `conn_mod_def::GLSyJA7hPrA::GeWgXWr0Rte1e8nHv1CjjA` |
| Get Workspace Info | GET | `/api/v1/workspaces/{{workspaceId}}` | `conn_mod_def::GLSyJByLF-g::VnmAfntDQbmvwlDuSeQkwA` |
| Add a Workspace | POST | `/api/v1/workspaces` | `conn_mod_def::GLSyImIiA2g::2tG7_L66QlOeYufiTUA3bw` |
| Add User to a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/users` | `conn_mod_def::GLSyI33XOYg::uzlbGeQ8TLuf6_AlDxirjA` |
| Update Workspace Billable Rate | PUT | `/api/v1/workspaces/{{workspaceId}}/hourly-rate` | `conn_mod_def::GLSyJcOq5wA::5EjXTcYYTtCr_qFyktlRXw` |
| Update Workspace Cost Rate | PUT | `/api/v1/workspaces/{{workspaceId}}/cost-rate` | `conn_mod_def::GLSyJcdfipA::XJBZCHEWTPqJp9GJP-KGIg` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice by ID for a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/invoices/{{invoiceId}}` | `conn_mod_def::GLSyLFm6ijg::gPjMVT6uS02NLXWoFswE1A` |
| Add an Invoice for a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/invoices` | `conn_mod_def::GLSyKtt_eyA::peFHhxOjQj2aHQ0gHPNyhQ` |
| Add Item to an Invoice | POST | `/api/v1/workspaces/{{workspaceId}}/invoices/{{invoiceId}}/items` | `conn_mod_def::GLSyKu2YZng::GD3ZtaDUS5aEcElhFlGUTw` |
| Delete an Invoice in a Workspace | DELETE | `/api/v1/workspaces/{{workspaceId}}/invoices/{{invoiceId}}` | `conn_mod_def::GLSyK3syfeg::pW7x-4ORRGiQQMwUtePGAg` |
| Delete an Invoice Item in a Workspace | DELETE | `/api/v1/workspaces/{{workspaceId}}/invoices/{{invoiceId}}/items/{{order}}` | `conn_mod_def::GLSyK39EdBg::kJNIoVK1QGm2OqlXBPKTnA` |
| Filter Out Invoices for a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/invoices/info` | `conn_mod_def::GLSyLG4ENFg::rS-AdcFbSOOD49xGHosayw` |

### ApprovalRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Approval Requests for a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/approval-requests` | `conn_mod_def::GLSyIZjm99g::Z-t25tC4Q_OWETc-leDbtA` |
| Resubmit Entries for Approval | POST | `/api/v1/workspaces/{{workspaceId}}/approval-requests/resubmit-entries-for-approval` | `conn_mod_def::GLSyIK_5IZA::JRZkzfRDRWCowpAnKchALA` |
| Submit an Approval Request for a User | POST | `/api/v1/workspaces/{{workspaceId}}/approval-requests/users/{{userId}}` | `conn_mod_def::GLSyIeXlZvA::gI8mtjBmRtWgPYKsZozi3A` |
| Submit Approval Request for a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/approval-requests` | `conn_mod_def::GLSyIIXxcRg::OImWADYLQQiwiY2CB6luag` |
| Update an Approval Request | PATCH | `/api/v1/workspaces/{{workspaceId}}/approval-requests/{{approvalRequestId}}` | `conn_mod_def::GLSyImZOQCg::8PPOz8qhSwS383zzqftiBQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook by ID for a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/webhooks/{{webhookId}}` | `conn_mod_def::GLSyO2g6elA::9VpwRFvQQsenFCURAyfX8w` |
| List a Workspace's Webhooks | GET | `/api/v1/workspaces/{{workspaceId}}/webhooks` | `conn_mod_def::GLSyPCvqYRg::rfhYuchnRUWyd0apPrlJBA` |
| Create a Webhook for a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/webhooks` | `conn_mod_def::GLSyOstGZMA::De4EMaFlQgK4917yhwp_ig` |
| Delete a Workspace Webhook | DELETE | `/api/v1/workspaces/{{workspaceId}}/webhooks/{{webhookId}}` | `conn_mod_def::GLSyOszw2KA::B633QgQvQj6IFUxLsIfILQ` |
| Generate a New Webhook Token | PATCH | `/api/v1/workspaces/{{workspaceId}}/webhooks/{{webhookId}}/token` | `conn_mod_def::GLSyOtdu9Sg::wLa0QaJORyWLM1E3c0ic0g` |

### TimeOffRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Change Time Off Request Status | PATCH | `/api/v1/workspaces/{{workspaceId}}/time-off/policies/{{policyId}}/requests/{{requestId}}` | `conn_mod_def::GLSyOLXBrLA::jvv3AktnQRe99vPCOMMiRg` |
| Create a Time Off Request for a Workspace Policy | POST | `/api/v1/workspaces/{{workspaceId}}/time-off/policies/{{policyId}}/requests` | `conn_mod_def::GLSyOLCbf5A::xaPc9oeaSeuigbQ06IwuLA` |
| Create a User Time Off Request for a Policy in a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/time-off/policies/{{policyId}}/users/{{userId}}/requests` | `conn_mod_def::GLSyOPNktkg::eI_190wvRW-c-j2W4IP9Bw` |
| Delete a Time Off Request | DELETE | `/api/v1/workspaces/{{workspaceId}}/time-off/policies/{{policyId}}/requests/{{requestId}}` | `conn_mod_def::GLSyOXdekfg::Swk7pYkGRyyM43WG5VGvLA` |
| Get All Time Off Requests on a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/time-off/requests` | `conn_mod_def::GLSyOYa9eeg::Kdrorgo6QOCuudftX1qX5g` |

### Holidays

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Holidays for a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/holidays` | `conn_mod_def::GLSyKkYOCOA::1IzAkuafRNy0zP6l59brdw` |
| Get Holidays in a Workspace for a Specific Period | GET | `/api/v1/workspaces/{{workspaceId}}/holidays/in-period` | `conn_mod_def::GLSyKlide_g::J2bl7a9RTGGWuUcDrd5AKA` |
| Create a Holiday in a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/holidays` | `conn_mod_def::GLSyKkJAxKA::C7jkxXORQ-28tXIr_zZ4pg` |
| Delete a Workspace Holiday | DELETE | `/api/v1/workspaces/{{workspaceId}}/holidays/{{holidayId}}` | `conn_mod_def::GLSyKkApDBg::xPTVMXBHRrm1fuKryHbnTA` |

### Expenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Expenses on a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/expenses` | `conn_mod_def::GLSyKPKKpQg::OT5F0QbUQWqnTWsqHSuz6A` |
| Create an Expense in a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/expenses` | `conn_mod_def::GLSyKFCQZag::QlF7frDBQviTxd_5R-HMlw` |
| Delete an Expense in a Workspace | DELETE | `/api/v1/workspaces/{{workspaceId}}/expenses/{{expenseId}}` | `conn_mod_def::GLSyKEVxRmA::z85i7LudSjeJoZOhFxUIpg` |
| Update an Expense in a Workspace | PUT | `/api/v1/workspaces/{{workspaceId}}/expenses/{{expenseId}}` | `conn_mod_def::GLSyKOAiq2g::V7t-nPx3SqeGFIBeReeRjQ` |

### WorkspaceUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspace Users | GET | `/api/v1/workspaces/{{workspaceId}}/users` | `conn_mod_def::GLSyOa27UXg::slLcot8wTAKoQHnB4T0lnw` |
| Filter Workspace Users | POST | `/api/v1/workspaces/{{workspaceId}}/users/info` | `conn_mod_def::GLSyOYGKQPA::62NR3QViQ3WVQTyMFC18aw` |
| Remove a User from a Workspace | DELETE | `/api/v1/workspaces/{{workspaceId}}/users/{{userId}}` | `conn_mod_def::GLSyJT-uSEg::eoQfiZqTRl6f8uYvW_HMEA` |
| Update a User's Status in a Workspace | PUT | `/api/v1/workspaces/{{workspaceId}}/users/{{userId}}` | `conn_mod_def::GLSyJTapJ5A::dYtg6qsESKmVvcHqR3_AUA` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Tags in a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/tags` | `conn_mod_def::GLSyM4PlvEA::TedXikQXSGuJy1xp0vVtAw` |
| Add a New Tag for a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/tags` | `conn_mod_def::GLSyMquCMnA::OLYGqSy_QZyBrBX40TssPg` |
| Delete a Workspace Tag | DELETE | `/api/v1/workspaces/{{workspaceId}}/tags/{{id}}` | `conn_mod_def::GLSyMpNKF-A::miC_FXWaRxOxmTz5oJujnw` |
| Update a Workspace Tag | PUT | `/api/v1/workspaces/{{workspaceId}}/tags/{{id}}` | `conn_mod_def::GLSyM2kHRYg::5VP8os1KQSGlzFz3TYeEVw` |

### Clients

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Clients on a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/clients` | `conn_mod_def::GLSyJpobqVA::3p_svfIMQyaFJ6aGAaf9pA` |
| Create a Workspace Client | POST | `/api/v1/workspaces/{{workspaceId}}/clients` | `conn_mod_def::GLSyJm9v8Kg::m7CGMXKPSp2dGgxjNBt9Eg` |
| Update a Workspace Client | PUT | `/api/v1/workspaces/{{workspaceId}}/clients/{{id}}` | `conn_mod_def::GLSyJ6SqO4g::JgHB0Rw4TjqNupYRl9iV7w` |

### WorkspaceCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workspace Custom Field | POST | `/api/v1/workspaces/{{workspaceId}}/custom-fields` | `conn_mod_def::GLSyIpjEOCg::mFZiK9k7TmeIu1TJ-vWMQQ` |
| Delete a Workspace Custom Field | DELETE | `/api/v1/workspaces/{{workspaceId}}/custom-fields/{{customFieldId}}` | `conn_mod_def::GLSyImlLX0A::D-I9MzxCQg6j24sRzZOQuQ` |
| Update a Workspace Custom Field | PUT | `/api/v1/workspaces/{{workspaceId}}/custom-fields/{{customFieldId}}` | `conn_mod_def::GLSyJdNrBag::QZ9kBoPkSyWTLrGhey8MXA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a User's Team Managers | GET | `/api/v1/workspaces/{{workspaceId}}/users/{{userId}}/managers` | `conn_mod_def::GLSyOku8cgg::KDfEbPZJQLms8RpgjVHYEA` |
| Update a User's Cost Rate | PUT | `/api/v1/workspaces/{{workspaceId}}/users/{{userId}}/cost-rate` | `conn_mod_def::GLSyJTVRfwA::Bu_KPAReTjaYWdN9NOxPqg` |
| Update a User's Hourly Rate in a Workspace | PUT | `/api/v1/workspaces/{{workspaceId}}/users/{{userId}}/hourly-rate` | `conn_mod_def::GLSyJTtw8KA::VrhTEwehT0SibkF2gZjgew` |

### RecurringAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Recurring Assignment for a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/scheduling/assignments/recurring` | `conn_mod_def::GLSyMPjDaZg::lLxUTWUiQK62nQ7saWMRJQ` |
| Delete a Recurring Assignment in a Workspace | DELETE | `/api/v1/workspaces/{{workspaceId}}/scheduling/assignments/recurring/{{assignmentId}}` | `conn_mod_def::GLSyL8PjjxA::8fsQSIZ5RpeUzDt59tZaMQ` |
| Update a Recurring Assignment in a Workspace | PATCH | `/api/v1/workspaces/{{workspaceId}}/scheduling/assignments/recurring/{{assignmentId}}` | `conn_mod_def::GLSyMt2QveA::-CJK8IkZTAqXHdD_LGk6dg` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Tasks on a Project | GET | `/api/v1/workspaces/{{workspaceId}}/projects/{{projectId}}/tasks` | `conn_mod_def::GLSyNI-1NtA::PQR3R85lTxCGuM4SVU33mw` |
| Create a Task for a Project in a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/projects/{{projectId}}/tasks` | `conn_mod_def::GLSyM7eT0pg::Wo-jDs64Qhq4oLNtKz562w` |
| Update Task Cost Rate | PUT | `/api/v1/workspaces/{{workspaceId}}/projects/{{projectId}}/tasks/{{id}}/cost-rate` | `conn_mod_def::GLSyND8Dh6A::YHBYPYAXRcW7DOAkEl6-tg` |

### Balances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Balance for a User | GET | `/api/v1/workspaces/{{workspaceId}}/time-off/balance/user/{{userId}}` | `conn_mod_def::GLSyJeis_jA::pqN0jhVVTHGyaDvIVJh2lg` |
| Get Balances for a Policy in a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/time-off/balance/policy/{{policyId}}` | `conn_mod_def::GLSyJew1_eA::6nvQbGR8SWuwo5nZkqWH8g` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workspace Project | POST | `/api/v1/workspaces/{{workspaceId}}/projects` | `conn_mod_def::GLSyLZKYPoA::lPMhRnxTQEispnfSomku1Q` |
| Remove a Custom Field from a Project | DELETE | `/api/v1/workspaces/{{workspaceId}}/projects/{{projectId}}/custom-fields/{{customFieldId}}` | `conn_mod_def::GLSyJBF8wYA::ZI-ncBsnSY2wgizSBA-t-Q` |

### ProjectCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Custom Fields | GET | `/api/v1/workspaces/{{workspaceId}}/projects/{{projectId}}/custom-fields` | `conn_mod_def::GLSyJJdvjtA::P905MvF7SZq9zZi21cncdw` |
| Update a Project Custom Field Using Workspace, Project, and Custom Field IDs | PATCH | `/api/v1/workspaces/{{workspaceId}}/projects/{{projectId}}/custom-fields/{{customFieldId}}` | `conn_mod_def::GLSyJTZOGvg::vAJ3ubAPSf-SPA0gJTh8Mg` |

### ExpenseCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Expense Categories for a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/expenses/categories` | `conn_mod_def::GLSyKQ6ItMA::ZvN8MdapTPyza4O7pg1r5w` |
| Delete an Expense Category in a Workspace | DELETE | `/api/v1/workspaces/{{workspaceId}}/expenses/categories/{{categoryId}}` | `conn_mod_def::GLSyKFjXCMA::x5-B4v6fSY6F7MlWG6qi4w` |

### ProjectAssignmentTotals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Assignment Totals for a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/scheduling/assignments/projects/totals` | `conn_mod_def::GLSyMeo6VrA::P0A6x6JGRkeqOFSmeeZINg` |
| Get Project Assignment Totals for a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/scheduling/assignments/projects/totals` | `conn_mod_def::GLSyMeystkA::Ez76N1n7Tki0_kaUjgLWXQ` |

### MemberProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Member's Profile in a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/member-profile/{{userId}}` | `conn_mod_def::GLSyOjE2oqA::FwTXXKdhRNOiPdAJYW-weA` |
| Update a Member's Profile Using Workspaces Member Profile | PATCH | `/api/v1/workspaces/{{workspaceId}}/member-profile/{{userId}}` | `conn_mod_def::GLSyOuR7JwA::0DnihdIMTPauwoU1qXJ8Zg` |

### UpdatedEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Updated Entities for a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/entities/updated` | `conn_mod_def::GLSyJ7ljqvA::qwbSTWsST8uj2UFqMQR_AA` |

### TimeOffPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Change a Time-off Policy Status in a Workspace | PATCH | `/api/v1/workspaces/{{workspaceId}}/time-off/policies/{{id}}` | `conn_mod_def::GLSyLPrhulg::q4p7OPsyTJ2k5QS2F6tvrA` |

### UserGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Groups for a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/user-groups` | `conn_mod_def::GLSyKcdqqYA::pWzsCPqWRvmmIbROxzwB1Q` |

### InvoicePayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Payment to an Invoice in a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/invoices/{{invoiceId}}/payments` | `conn_mod_def::GLSyKtnzn0g::FrNO0u7lTCmFXMO4erfLvQ` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Fields on a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/custom-fields` | `conn_mod_def::GLSyJLGT-KA::7z7kc1PbRxK6pmFrlrpBeg` |

### DeletedEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Deleted Entities for a Workspace | GET | `/api/v1/workspaces/{{workspaceId}}/entities/deleted` | `conn_mod_def::GLSyJ6F139A::HHQoQ1hFS0Gqu2ssm7d0fg` |

### WorkspaceWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Workspace Webhook | PUT | `/api/v1/workspaces/{{workspaceId}}/webhooks/{{webhookId}}` | `conn_mod_def::GLSyO2ljeZA::_HeR_mvAQsuuXls2dxOTuA` |

### UserRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Give a User a Manager Role in a Workspace | POST | `/api/v1/workspaces/{{workspaceId}}/users/{{userId}}/roles` | `conn_mod_def::GLSyOk91FQg::kc6KdAr7QD-nwn6EMZ1jGw` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current Logged-In User's Info | GET | `/user` | `conn_mod_def::GLSyOj4s5zA::X7yJ21t6TA-NxFmVx1NOrQ` |

### WorkspaceAssignmentSeries

| Action | Method | Path | Action id |
|---|---|---|---|
| Change the Recurring Period for a Workspace Assignment Series | PUT | `/api/v1/workspaces/{{workspaceId}}/scheduling/assignments/series/{{assignmentId}}` | `conn_mod_def::GLSyL7sHvJA::6NdiFIJcTDKt6m4xNqwyXA` |

### WorkspaceUserTotals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Totals for a Workspace User | GET | `/api/v1/workspaces/{{workspaceId}}/scheduling/assignments/users/{{userId}}/totals` | `conn_mod_def::GLSyMhxjfqA::nWQQtIB1TiGsuopiDJY7FA` |

### ProjectTotals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Totals for a Single Project | GET | `/api/v1/workspaces/{{workspaceId}}/scheduling/assignments/projects/totals/{{projectId}}` | `conn_mod_def::GLSyMcQDOiA::a2nQ6HaySAShOe4zJ16WgQ` |

This lists 90 of 155 actions. For anything not here, call `search_one_platform_actions` with platform `clockify`. The full catalog is at https://www.withone.ai/knowledge/clockify.

## When a call fails

The error comes from Clockify, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/clockify

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
