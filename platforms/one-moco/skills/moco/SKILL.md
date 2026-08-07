---
name: moco
description: MOCO is a business management platform for agencies and service-based teams that provides project planning, time tracking, invoicing, budgeting, and resource management, allowing organizations to manage operations and financial workflows from a single system with integration and reporting capabilities. Read and write MOCO data through One: projects, activities, purchases, invoices, accountwebhooks, companies and more, 288 actions with real parameter documentation. Use whenever the user asks to look something up in MOCO, create or update a record there, or build code against the MOCO API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: moco
  generated-from: one-knowledge-base
---

# MOCO through One

MOCO is a business management platform for agencies and service-based teams that provides project planning, time tracking, invoicing, budgeting, and resource management, allowing organizations to manage operations and financial workflows from a single system with integration and reporting capabilities.

One exposes MOCO through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `moco` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm MOCO is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real MOCO account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project | GET | `/api/v1/projects/{{id}}` | `conn_mod_def::GLK3EAsXzGA::XxNXgupITOylu1a_xjIOUA` |
| Get Project Report | GET | `/api/v1/projects/{{id}}/report` | `conn_mod_def::GLK3D_l7AmA::xanujcnhQnm8wZRQjUfQGA` |
| List Projects | GET | `/api/v1/projects` | `conn_mod_def::GLK3EJIiO6A::oCXnC1X8Q5i_0Bek9Rwt4w` |
| List Projects Assigned To Current User | GET | `/api/v1/projects/assigned` | `conn_mod_def::GLK3EAsqOyA::XmzUZMl1RDKDmaIa9l0hRQ` |
| Archive Project | PUT | `/api/v1/projects/{{id}}/archive` | `conn_mod_def::GLK3Dzvinfg::cnrSWldLQFyAwVxQEahIHQ` |
| Assign Project To Project Group | PUT | `/api/v1/projects/{{id}}/assign_project_group` | `conn_mod_def::GLK3Dxu5T2g::kR28sORtQ9S5UYkZcp7-Fw` |
| Create Project | POST | `/api/v1/projects` | `conn_mod_def::GLK3DxNm_CA::eO3MxBPMToqnUJAdhbcH1Q` |
| Delete Project | DELETE | `/api/v1/projects/{{id}}` | `conn_mod_def::GLK3D3LuuBg::xw0N00IBQd23r5PMnTMfZw` |
| Disable Project Report Sharing | PUT | `/api/v1/projects/{{id}}/disable_share` | `conn_mod_def::GLK3Dw2C1jA::5J1sxv2dR3q334Sc_4JiWw` |
| Enable Project Report Sharing | PUT | `/api/v1/projects/{{id}}/share` | `conn_mod_def::GLK3EA3-nIg::NgaTdzq-QyqWXX5spegJgw` |
| Recur Project Recurring Expense | POST | `/api/v1/projects/{{projectId}}/recurring_expenses/{{id}}/recur` | `conn_mod_def::GLK3G2vJHvA::UFUr_MPnR9C_0ZU2bMozEw` |
| Unarchive Project | PUT | `/api/v1/projects/{{id}}/unarchive` | `conn_mod_def::GLK3EQVKQlg::MivBNwMMSSurOCZndrbNVw` |

6 more Projects actions are available through search.

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Activity | GET | `/api/v1/activities/{{id}}` | `conn_mod_def::GLK2_8ZcoBA::cRkkhCXZQpm0_YvGT7CGhw` |
| List Activities | GET | `/api/v1/activities` | `conn_mod_def::GLK3AAXTUGg::qFKIyAGoRQuAjO1qsUfmBw` |
| Create Activities In Bulk | POST | `/api/v1/activities/bulk` | `conn_mod_def::GLK2_hn4qBA::J8bSY6uYTSq9RBxjgoE0nQ` |
| Create Activity | POST | `/api/v1/activities` | `conn_mod_def::GLK2_g4jOOg::ZP92RW1STdif5k0Rdq7ZRw` |
| Delete Activity | DELETE | `/api/v1/activities/{{id}}` | `conn_mod_def::GLK2_ziabwA::gvJIFdx7SYmqzB_ZukgVLA` |
| Disregard Activities For Invoicing | POST | `/api/v1/activities/disregard` | `conn_mod_def::GLK2_8Osi6A::wdl_V1ScQE-ZqexarKxZMg` |
| Start Activity Timer | PATCH | `/api/v1/activities/{{id}}/start_timer` | `conn_mod_def::GLK2_8x5OyA::SqQCJONiTbyCb6TA4ZyKew` |
| Stop Activity Timer | PATCH | `/api/v1/activities/{{id}}/stop_timer` | `conn_mod_def::GLK2_7zT3CA::v4VhXgxxTaCxkKW8b5-XPw` |
| Update Activity #1 | PUT | `/api/v1/activities/{{id}}` | `conn_mod_def::GLK3AJtDwNg::o4eeD_b8SKuiEjw6HXMFoQ` |
| Update Activity #2 | PATCH | `/api/v1/activities/{{id}}` | `conn_mod_def::GLK3AJVD0aA::hZgEFG9kSh-MvD15ZjLsOA` |
| Update Activity Billable Seconds | PATCH | `/api/v1/activities/{{id}}/billable_seconds` | `conn_mod_def::GLK3AJNOO2A::yv31iujbReu1j9Af9itgQA` |

### Purchases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Purchase | GET | `/api/v1/purchases/{{id}}` | `conn_mod_def::GLK3FPKlOxg::BBKLpFIRR1Wixa3tASfmFQ` |
| List Purchases | GET | `/api/v1/purchases` | `conn_mod_def::GLK3FViuJDg::OkJUhwriQYq4N4VwJKvc9g` |
| Assign Purchase Item To Project | POST | `/api/v1/purchases/{{id}}/assign_to_project` | `conn_mod_def::GLK3FGQMvqg::r1BETPnXR3uxJVBYHJNdoA` |
| Create Purchase | POST | `/api/v1/purchases` | `conn_mod_def::GLK3FFA3oHg::ulMVShqiReiA1sKFdx8t2g` |
| Delete Purchase | DELETE | `/api/v1/purchases/{{id}}` | `conn_mod_def::GLK3FFnKP9g::JfuAdw58RleTCgTBkijcmg` |
| Store Purchase Document | PATCH | `/api/v1/purchases/{{id}}/store_document` | `conn_mod_def::GLK3FRNPMyg::o2TmmevWTrSjxCQfrq47MQ` |
| Update Purchase #1 | PUT | `/api/v1/purchases/{{id}}` | `conn_mod_def::GLK3GaHJcLA::6pyQ9IHKTNeqLD3OMmRgHA` |
| Update Purchase #2 | PATCH | `/api/v1/purchases/{{id}}` | `conn_mod_def::GLK3FRQ-IyA::onPNhznsS-W2Ng_NsV6hjQ` |
| Update Purchase Status | PATCH | `/api/v1/purchases/{{id}}/update_status` | `conn_mod_def::GLK3GjETwJA::PgalbWPXR0aZk8akI7TBQw` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Invoice PDF | GET | `/api/v1/invoices/{{id}}.pdf` | `conn_mod_def::GLK3CcH_Keg::JjotC9X4RBaum2G5Cu-S_g` |
| Download Invoice Timesheet PDF | GET | `/api/v1/invoices/{{id}}/timesheet.pdf` | `conn_mod_def::GLK3CcQee8A::Dpqn5_7sS3Cgm1dKa-NNbA` |
| Get Invoice | GET | `/api/v1/invoices/{{id}}` | `conn_mod_def::GLK3Cd7ugyg::ktash2RWTtmnHT9tTD9GlQ` |
| List Invoices | GET | `/api/v1/invoices` | `conn_mod_def::GLK3CsC4wig::CySNlpi4RLSJS6UoXiDP2A` |
| List Locked Invoices | GET | `/api/v1/invoices/locked` | `conn_mod_def::GLK3ComY8Sg::0NxkdjGvSo6LmkVZ76zmQA` |
| Create Invoice | POST | `/api/v1/invoices` | `conn_mod_def::GLK3CRLRdeg::EgOilQloRc6bwGwSVaEHpA` |
| Delete Invoice | DELETE | `/api/v1/invoices/{{id}}` | `conn_mod_def::GLK3CcMZ3QA::ZkcwJxD9TGOucipfWovFUQ` |
| Send Invoice By Email | POST | `/api/v1/invoices/{{id}}/send_email` | `conn_mod_def::GLK3Cm5gvcg::MPR3Qv7sTKaBkO9YxNz1Pg` |
| Update Invoice Status | PUT | `/api/v1/invoices/{{id}}/update_status` | `conn_mod_def::GLK3CmsxFTA::Lq3Ar3l6T1uzbPgRVHT3OA` |

### AccountWebHooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Web Hook | GET | `/api/v1/account/web_hooks/{{id}}` | `conn_mod_def::GLK2_Xjr3cA::-ucCyyW2RpibouQLJqm2mA` |
| List Account Web Hooks | GET | `/api/v1/account/web_hooks` | `conn_mod_def::GLK2_RyLu-A::3pL5NS07RmSJXAh9Kwgttw` |
| Create Account Web Hook | POST | `/api/v1/account/web_hooks` | `conn_mod_def::GLK2-7s2xtg::JW2RmtMdRIWgoNFDZFA2GQ` |
| Delete Account Web Hook | DELETE | `/api/v1/account/web_hooks/{{id}}` | `conn_mod_def::GLK2_PJ1p9A::tjwsGNBeQM-VtFyFPpovqw` |
| Disable Account Web Hook | PUT | `/api/v1/account/web_hooks/{{id}}/disable` | `conn_mod_def::GLK2_PctSCg::CUNSxrzNSraqNu0PyQPtcg` |
| Enable Account Web Hook | PUT | `/api/v1/account/web_hooks/{{id}}/enable` | `conn_mod_def::GLK2_PKjfjA::nBmJH0rJQwGmKzMoxGx5Eg` |
| Update Account Web Hook #1 | PUT | `/api/v1/account/web_hooks/{{id}}` | `conn_mod_def::GLK2_gVWbhA::AxJHN5dPTZ6J8yX1zgmi4g` |
| Update Account Web Hook #2 | PATCH | `/api/v1/account/web_hooks/{{id}}` | `conn_mod_def::GLK2_gVf4_A::WaF9jB53T0q5AMlHWJxbyg` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company | GET | `/api/v1/companies/{{id}}` | `conn_mod_def::GLK3AeGuooA::lyS7N0J-SXST9kg8wn75Rw` |
| List Companies | GET | `/api/v1/companies` | `conn_mod_def::GLK3Af7yeKg::0R6xZC0JQpOpOOovAM7DKQ` |
| Archive Company | PUT | `/api/v1/companies/{{id}}/archive` | `conn_mod_def::GLK3AdPiFng::8gt4PDh-T5CFdDID687FEg` |
| Create Company | POST | `/api/v1/companies` | `conn_mod_def::GLK3AgfKpZA::4JsK7LEuSNyYF_lEdyCF_w` |
| Delete Company | DELETE | `/api/v1/companies/{{id}}` | `conn_mod_def::GLK3Ac906Lg::vhNf7Lk2Rua5yXKnq9_78g` |
| Unarchive Company | PUT | `/api/v1/companies/{{id}}/unarchive` | `conn_mod_def::GLK3ApWl1RA::Y5CysI0LT9i8ppQtyef4EQ` |
| Update Company #1 | PUT | `/api/v1/companies/{{id}}` | `conn_mod_def::GLK3Aq05L9g::3Sw8LsvlQkmZMnf512enIQ` |
| Update Company #2 | PATCH | `/api/v1/companies/{{id}}` | `conn_mod_def::GLK3Aqn_t4g::ZKVbplaTQ7KVEBWC5WWA8Q` |

### ProjectExpenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Expense | GET | `/api/v1/projects/{{projectId}}/expenses/{{id}}` | `conn_mod_def::GLK3BlY57bg::RG03nSZdRa2tFy6zQGm3yg` |
| List Project Expenses | GET | `/api/v1/projects/{{projectId}}/expenses` | `conn_mod_def::GLK3BqCpGrg::jp2YfhZDSee0jfdLt2qsoA` |
| Create Project Expense | POST | `/api/v1/projects/{{projectId}}/expenses` | `conn_mod_def::GLK3BdH3cEg::3Wz8-ii4RCey1SagXygGFQ` |
| Create Project Expenses In Bulk | POST | `/api/v1/projects/{{projectId}}/expenses/bulk` | `conn_mod_def::GLK3BcyCWAg::t4dThzcKRsG-BXDvhm2HVg` |
| Delete Project Expense | DELETE | `/api/v1/projects/{{projectId}}/expenses/{{id}}` | `conn_mod_def::GLK3Bcp288A::TR4CJ2xLTnCHyRswJFHqxg` |
| Disregard Project Expenses | POST | `/api/v1/projects/{{projectId}}/expenses/disregard` | `conn_mod_def::GLK3BmDZPkA::vQHmrMMnSCqkVuVHhV2tFg` |
| Update Project Expense #1 | PUT | `/api/v1/projects/{{projectId}}/expenses/{{id}}` | `conn_mod_def::GLK3BmIbzHg::75ml3YOgTkaIr1BeDi7Fwg` |
| Update Project Expense #2 | PATCH | `/api/v1/projects/{{projectId}}/expenses/{{id}}` | `conn_mod_def::GLK3BzY_9xg::tL86qy-oSbGX7CY5HOPZiQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User | GET | `/api/v1/users/{{id}}` | `conn_mod_def::GLK3I1sZBUA::RZir-lvIRoW65fa-sQALoA` |
| List Users | GET | `/api/v1/users` | `conn_mod_def::GLK3JAay6Ag::DE-e2jWBR0qPGqEfOFkWgw` |
| Create User | POST | `/api/v1/users` | `conn_mod_def::GLK3I1rF5AA::0nDjRSZHSdGzB53jk-neyg` |
| Delete User | DELETE | `/api/v1/users/{{id}}` | `conn_mod_def::GLK3I10BJjA::Jlm4Y6cIS_ujrzI92_l9AQ` |
| Update User #1 | PUT | `/api/v1/users/{{id}}` | `conn_mod_def::GLK3I_YYhmA::omjY_L_ORm2cKQrohQAlCA` |
| Update User #2 | PATCH | `/api/v1/users/{{id}}` | `conn_mod_def::GLK3I_RPxLA::vb7GFa04SU-bBMzxDEIn_g` |
| Update User Employment #1 | PUT | `/api/v1/users/employments/{{id}}` | `conn_mod_def::GLK3IMLZF7g::4FJwf8cGSDWfj27WM0yznQ` |
| Update User Employment #2 | PATCH | `/api/v1/users/employments/{{id}}` | `conn_mod_def::GLK3IMD_nMg::WLzpF_z5Ql2KbzgWICexQw` |

### UserPresences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Presence | GET | `/api/v1/users/presences/{{id}}` | `conn_mod_def::GLK3Iqqe9zg::IoPUZmrORGismpWeDPFF3Q` |
| List User Presences | GET | `/api/v1/users/presences` | `conn_mod_def::GLK3IubrdWg::vwG-NikVRTa6WzXgTZtWDg` |
| Create User Presence | POST | `/api/v1/users/presences` | `conn_mod_def::GLK3IWDl6Hg::FYrvjfmDT9WBfkfnkXgR4A` |
| Delete User Presence | DELETE | `/api/v1/users/presences/{{id}}` | `conn_mod_def::GLK3IjcL7fg::t8kXV4yLQn6mhZ-XWb3xMg` |
| Touch User Presence | POST | `/api/v1/users/presences/touch` | `conn_mod_def::GLK3ItUm0Eg::JJ1tdnmrToqs5nZkQ_sAcA` |
| Update User Presence #1 | PUT | `/api/v1/users/presences/{{id}}` | `conn_mod_def::GLK3IrgB-6A::NMKHzXt8QtGNSGkfi7VPAQ` |
| Update User Presence #2 | PATCH | `/api/v1/users/presences/{{id}}` | `conn_mod_def::GLK3Ir1-oXg::SZp0IO4WTQahLlXlRpiziw` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Comment | GET | `/api/v1/comments/{{id}}` | `conn_mod_def::GLK3AR7F87g::IyoRfJaNTGqtwNFj3kHbkA` |
| List Comments | GET | `/api/v1/comments` | `conn_mod_def::GLK3ASpfIRg::icqxqRFKQSiolN_DA8oWkQ` |
| Create Comment | POST | `/api/v1/comments` | `conn_mod_def::GLK3AHzB8Fg::hR5CyjpVRDCV9bKclf_-jw` |
| Create Comments In Bulk | POST | `/api/v1/comments/bulk` | `conn_mod_def::GLK3AJJUYnA::SNqUkvHARR6hIfZQYD35dg` |
| Delete Comment | DELETE | `/api/v1/comments/{{id}}` | `conn_mod_def::GLK3ARzvJGA::2fKz1bT5RmKQX_BacAw8Lg` |
| Update Comment #1 | PUT | `/api/v1/comments/{{id}}` | `conn_mod_def::GLK3ARy-_EA::3S15wdxRRvmNEuBUZdOEQA` |
| Update Comment #2 | PATCH | `/api/v1/comments/{{id}}` | `conn_mod_def::GLK3ARy-1TA::FstyItMBRty1mzEdzjpvXw` |

### InvoicePayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Invoice Payment | GET | `/api/v1/invoices/payments/{{id}}` | `conn_mod_def::GLK3CGpU9Ag::hB-ozpS5REymPWmjzPADfA` |
| List Invoice Payments | GET | `/api/v1/invoices/payments` | `conn_mod_def::GLK3CJUBd9A::3lE5yll7RD2ZZLJwtikgMw` |
| Create Invoice Payment | POST | `/api/v1/invoices/payments` | `conn_mod_def::GLK3B9jqAmA::WYyHjMOhSKKs9I_YyhSEXA` |

4 more InvoicePayments actions are available through search.

This lists 90 of 288 actions. For anything not here, call `search_one_platform_actions` with platform `moco`. The full catalog is at https://www.withone.ai/knowledge/moco.

## When a call fails

The error comes from MOCO, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/moco

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
