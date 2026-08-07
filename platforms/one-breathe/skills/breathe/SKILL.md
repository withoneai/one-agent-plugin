---
name: breathe
description: Breathe is a cloud-based HR software designed for small and medium-sized businesses, providing tools for managing employee records, leave requests, performance reviews, document storage, and reporting, while simplifying compliance and reducing administrative workload through an intuitive and secure online platform. Read and write Breathe data through One: leaverequests, employeeexpenseclaims, employeeexpenses, sicknesses, changerequests, employeetrainingcourses and more, 62 actions with real parameter documentation. Use whenever the user asks to look something up in Breathe, create or update a record there, or build code against the Breathe API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: breathe
  generated-from: one-knowledge-base
---

# Breathe through One

Breathe is a cloud-based HR software designed for small and medium-sized businesses, providing tools for managing employee records, leave requests, performance reviews, document storage, and reporting, while simplifying compliance and reducing administrative workload through an intuitive and secure online platform.

One exposes Breathe through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `breathe` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Breathe is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Breathe account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### LeaveRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Leave Request | GET | `/v1/leave_requests/{{id}}` | `conn_mod_def::GJ08mMpBU-s::E8XBne0KRUKuLHie5uT1WQ` |
| Get the Leave Request Being Cancelled by a Leave Request | GET | `/leave_requests/{{id}}/cancelling` | `conn_mod_def::GJ08mFmnvp4::S4cod1OtSXKU4Lfpge5PLw` |
| List a Department's Leave Requests | GET | `/departments/{{id}}/leave_requests` | `conn_mod_def::GJ08hG9zx6U::pZYAZxxeS-uTTKfpA3Qofg` |
| List an Employee’s Leave Requests | GET | `/employees/{{id}}/leave_requests` | `conn_mod_def::GJ08k79mClg::rPYf0HyrShOWnhkAfwBq-g` |
| List Leave Requests | GET | `/leave_requests` | `conn_mod_def::GJ08mWEtWvw::TVT3ZHd_QDarbbP7bFj4yw` |
| Approve a Leave Request | POST | `/leave_requests/{{id}}/approve` | `conn_mod_def::GJ08l9WcToQ::0ZrBg8V3TzK9BC1T61FTcQ` |
| Create an Employee Leave Request | POST | `/v1/employees/{{id}}/leave_requests` | `conn_mod_def::GJ08jWi8BcY::JL0BhHy_RtG0Acv_8yTQXQ` |
| Reject a Leave Request | POST | `/v1/leave_requests/{{id}}/reject` | `conn_mod_def::GJ08mlGaOBY::Fmgvz7FpSne_AaTn_sqtvA` |

### EmployeeExpenseClaims

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Employee Expense Claim | GET | `/v1/employee_expense_claims/{{id}}` | `conn_mod_def::GJ08iBxop6Y::cvbsjaOvQnW2xJsQ-h_fOA` |
| List Employee Expense Claims | GET | `/employee_expense_claims` | `conn_mod_def::GJ08iKPK38c::dz1pRPUrRBW7mVFZG1fs6Q` |
| Approve or Reject an Employee Expense Claim | PUT | `/v1/employee_expense_claims/{{id}}` | `conn_mod_def::GJ08hdtRlgE::oNfTxSW2RKere2v-hY1-kA` |
| Create an Expense Claim | POST | `/employee_expense_claims` | `conn_mod_def::GJ08hoYQj_U::msLbe8U5QZmgQVzjxb1toA` |
| Delete an Employee Expense Claim | DELETE | `/v1/employee_expense_claims/{{id}}` | `conn_mod_def::GJ08h5YL3Uc::Ia-sjenzQKKj6yi5MJO4pg` |

### EmployeeExpenses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Employee Expenses | GET | `/employee_expenses` | `conn_mod_def::GJ08ildqBo0::z8XJrqpNRUKF1IBgzgDnWA` |
| Show an Employee Expense Record | GET | `/v1/employee_expenses/{{id}}` | `conn_mod_def::GJ08iubvokk::PQ4Nqk0ZSkyWpQxyh6yGMA` |
| Create an Employee Expense Record | POST | `/employee_expenses` | `conn_mod_def::GJ08iVODVv4::gmPBeD1gTaGFwVNA1owp7g` |
| Delete an Employee Expense | DELETE | `/employee_expenses/{{id}}` | `conn_mod_def::GJ08icpSTak::GsoHZc_KQ4mrzWQLkQAWFQ` |
| Update an Employee Expense | PUT | `/employee_expenses/{{id}}` | `conn_mod_def::GJ08i2wKRf0::h5RAfhKcS4WyG7D_gVcO4w` |

### Sicknesses

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Employee’s Sicknesses | GET | `/employees/{{id}}/sicknesses` | `conn_mod_def::GJ08kN2slWI::TyVTkkrVTAmUPOwyoQR8Ig` |
| List Sicknesses | GET | `/sicknesses` | `conn_mod_def::GJ08nMLxSa0::KSUvP6VWQQCZtU1EljJbdg` |
| Create an Employee Sickness Record | POST | `/employees/{{id}}/sicknesses` | `conn_mod_def::GJ08jnbew88::_0uNQ4UxRVCiFQWvBmdEbw` |
| Delete a Sickness Record | DELETE | `/v1/sicknesses/{{id}}` | `conn_mod_def::GJ08nDKIJj0::GjwlqaqYShibnipYzT510w` |
| Update a Sickness Record | PUT | `/v1/sicknesses/{{id}}` | `conn_mod_def::GJ08nWLpLVo::qeCIxGK4SZueVO86wyGYpA` |

### ChangeRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Employee’s Change Requests | GET | `/v1/employees/{{id}}/change_requests` | `conn_mod_def::GJ08jvtHCuc::g5J32nvfT9afIttR3Kc4cw` |
| List Change Requests | GET | `/change_requests` | `conn_mod_def::GJ08f2v5bcs::eCHulQyxTcaxilVLVunNLA` |
| Approve an Employee’s Change Request | POST | `/v1/employees/{{employeeId}}/change_requests/{{id}}/approve` | `conn_mod_def::GJ08jN0P7yM::3RZIJC2fTGGvDBvT3jFEog` |
| Create an Employee Change Request | POST | `/v1/employees/{{id}}/change_requests` | `conn_mod_def::GJ08jGG4C3w::n_Oo9bzMR7al6e0iDpxGdA` |

### EmployeeTrainingCourses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Employee Training Courses | GET | `/employee_training_courses` | `conn_mod_def::GJ08lh1qdoU::hCeQ9zQ3Rj2auvnS8EZO_g` |
| Create an Employee Training Course | POST | `/employee_training_courses` | `conn_mod_def::GJ08lQlNYcQ::hMB1SluFR56B29YtIyHUEA` |
| Delete an Employee Training Course Record | DELETE | `/v1/employee_training_courses/{{id}}` | `conn_mod_def::GJ08lZ3Y-Sg::n7dgC0-1SMirBRcVy_IT3Q` |
| Update an Employee Training Course Record | PUT | `/v1/employee_training_courses/{{id}}` | `conn_mod_def::GJ08lqAz3ok::YmJcU7UrQnScOAi5mipgdg` |

### Absences

| Action | Method | Path | Action id |
|---|---|---|---|
| List Absences | GET | `/absences` | `conn_mod_def::GJ08fI7HMB4::bh8ErhBfQlW4HJCnSmqdWg` |
| List an Employee’s Absences | GET | `/employees/{{id}}/absences` | `conn_mod_def::GJ08kXSZoDs::vlGXH1VKRfW6JPDdpZqqTg` |
| Cancel an Absence | POST | `/v1/absences/{{id}}/cancel` | `conn_mod_def::GJ08e7ilQLQ::YLm-z3ZyT7G9himwYlgugA` |

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Employee | GET | `/v1/employees/{{id}}` | `conn_mod_def::GJ08j38hr5M::rmHmx2OLRbWsjgjHVhyDbA` |
| List Employees | GET | `/employees` | `conn_mod_def::GJ08kznOgL4::gL_Z4-VWSLSo5QrPxQdNnw` |
| Create a New Employee | POST | `/employees` | `conn_mod_def::GJ08jezWTqE::Txh1ao54QyWWVIfQrs0BVg` |

### Bonuses

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Department's Bonuses | GET | `/departments/{{id}}/bonuses` | `conn_mod_def::GJ08g1D7VEI::-LE6WCQ1RPqjHKWQ_W6jXQ` |
| List Bonuses | GET | `/bonuses` | `conn_mod_def::GJ08ftfnd-Y::7Wl9EJA1Q4GSGmHraR7UzA` |

### CompanyProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Project | GET | `/company_projects/{{id}}` | `conn_mod_def::GJ08gINxOBw::nS4EJ3OiS0ibQW26vrit8g` |
| List Company Projects | GET | `/company_projects` | `conn_mod_def::GJ08gRxG_CE::CXJsEHKQSJaeeDpgk9Mrdg` |

### OtherLeaveReasons

| Action | Method | Path | Action id |
|---|---|---|---|
| List Other Leave Reasons | GET | `/leave_requests/other_leave_reasons` | `conn_mod_def::GJ08meAl9h8::2PFxy2VOTKCIWRqLGksTcA` |
| List Other Leave Reasons | GET | `/other_leave_reasons` | `conn_mod_def::GJ08mygUNKg::ocyFD-OGTBa87wT2Edesog` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Details | GET | `/account` | `conn_mod_def::GJ08fUNC_nQ::Zwhg5naQQva-AIvlzqgPTw` |

### CompanyTrainingTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Training Types | GET | `/company_training_types` | `conn_mod_def::GJ08gZfzAM0::6PzMUE13S86JlcMlAq-AHg` |

### DepartmentsAbsences

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Department's Absences | GET | `/v1/departments/{{id}}/absences` | `conn_mod_def::GJ08gi2jmC8::1mYR-wKRSNGxO1hQcHXg6g` |

### Departments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Departments | GET | `/departments` | `conn_mod_def::GJ08g8v0BGw::DhffHrG_Qw6JY6LDl6_Drw` |

### DepartmentSalaries

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Department’s Salaries | GET | `/departments/{{id}}/salaries` | `conn_mod_def::GJ08hP101Tk::nooU9QcMRHin_aeMGvLJyA` |

### Divisions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Divisions | GET | `/divisions` | `conn_mod_def::GJ08hWchtRs::Ct1cmppTQwSjghfj3GDw7Q` |

### EmployeeJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Employee Jobs | GET | `/employee_jobs` | `conn_mod_def::GJ08i-ZSY1o::Kpi7FtLJRC--kQi8dPCLLQ` |

### EmployeeBenefits

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Employee’s Benefits | GET | `/v1/employees/{{id}}/benefits` | `conn_mod_def::GJ08khL0Vlg::lucZiV17T627AN3g7BHleQ` |

### EmployeeSalaries

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Employee’s Salaries | GET | `/employees/{{id}}/salaries` | `conn_mod_def::GJ08lGVsqQE::lq0x43UySbW81WovmSBzhg` |

### HolidayAllowances

| Action | Method | Path | Action id |
|---|---|---|---|
| List Holiday Allowances | GET | `/holiday_allowances` | `conn_mod_def::GJ08l0urWwk::Pe36mwhgRfuJY2O9J-SkaA` |

### Salaries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Salaries | GET | `/salaries` | `conn_mod_def::GJ08m6FAjqE::bXMKfyTmT0uMFXMn7IzYQQ` |

### WorkingPatterns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Working Patterns | GET | `/working_patterns` | `conn_mod_def::GJ08npB0AGg::AFtkL_AkSACzLkTcciSWPw` |

### EmployeeBonuses

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Employee’s Bonuses | GET | `/employees/{{id}}/bonuses` | `conn_mod_def::GJ08ksb2Sfw::IT2NSULBRzibtf0_PPHISg` |

### Benefits

| Action | Method | Path | Action id |
|---|---|---|---|
| List Benefits | GET | `/benefits` | `conn_mod_def::GJ08fkp5-bw::ktFuVvfsRXSVnMWG5xnHiw` |

### CompanyDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Documents | GET | `/company_documents` | `conn_mod_def::GJ08gBhPYwQ::0CHVHoLySi6jZ3ErZq-hLg` |

### DepartmentsBenefits

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Department’s Benefits | GET | `/departments/{{id}}/benefits` | `conn_mod_def::GJ08grC5uUo::lzQ39iYpQq-zFohAgUhUtg` |

### EmployeeHolidayYears

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Employee's Holiday Years | GET | `/v1/employees/{{id}}/employee_holiday_years` | `conn_mod_def::GJ08kAvTwCI::h2mOXq6xTA-w9QgTP4jTbA` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Locations | GET | `/locations` | `conn_mod_def::GJ08mrvop7o::yVRd3drdT_mL6qfqfMLYHQ` |

### StatutoryHolidayCountries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Statutory Holiday Countries | GET | `/statutory_holiday_countries` | `conn_mod_def::GJ08nfyJftI::TObpgjHnRXCn2jErRsjFbw` |

## When a call fails

The error comes from Breathe, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/breathe

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
