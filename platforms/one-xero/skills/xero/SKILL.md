---
name: xero
description: Xero is an online accounting software platform designed for small businesses. It provides tools for invoicing, payroll, bank reconciliation, and financial reporting, helping businesses manage their finances efficiently and in real time. Read and write Xero data through One: timesheets, employees, reports, salaryandwages, payruns, timesheetlines and more, 475 actions with real parameter documentation. Use whenever the user asks to look something up in Xero, create or update a record there, or build code against the Xero API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: xero
  generated-from: one-knowledge-base
---

# Xero through One

Xero is an online accounting software platform designed for small businesses. It provides tools for invoicing, payroll, bank reconciliation, and financial reporting, helping businesses manage their finances efficiently and in real time.

One exposes Xero through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `xero` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Xero is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Xero account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Timesheets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Timesheets | GET | `/Timesheets` | `conn_mod_def::GJ8cfuflNuA::6KsunZhhSiujR8hnNJMBTA` |
| List Timesheets | GET | `/Timesheets` | `conn_mod_def::GJ8cgHKj2TQ::ELOldHGwTZ2KF3XYYWZ7vg` |
| List Timesheets | GET | `/payroll.xro/2.0/Timesheets` | `conn_mod_def::GJ8cjjKhmfs::jyDQy-ruTG2UUoRi1QWNlw` |
| List Timesheets | GET | `/Timesheets` | `conn_mod_def::GJ8chtnLik0::6r_IPYLdSxyemg5Lx7M4-A` |
| Retrieve a Payroll Timesheet by ID | GET | `/payroll.xro/1.0/Timesheets/{{timesheetId}}` | `conn_mod_def::GJ8cfdxC9KY::Hk1B2VEoQcuSinz_rY5lEg` |
| Retrieve a Specific Timesheet | GET | `/payroll.xro/2.0/Timesheets/{{timesheetId}}` | `conn_mod_def::GJ8cgG8L8GE::JOyuZvzGRdCFoOIcRoMvdQ` |
| Retrieve a Specific Timesheet | GET | `/payroll.xro/2.0/Timesheets/{{timesheetId}}` | `conn_mod_def::GJ8chF-UQC0::3iJ-nGitRTq58QDz2zklnQ` |
| Retrieve a Specific Timesheet | GET | `/payroll.xro/2.0/Timesheets/{{timesheetId}}` | `conn_mod_def::GJ8cily08IM::11s-2mDtTIm3mVakWG-ZdQ` |
| Approve a Specific Timesheet | POST | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Approve` | `conn_mod_def::GJ8cf-srh_k::JP0eCwkmRL6r6yuBWWt42A` |
| Approve a Specific Timesheet | POST | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Approve` | `conn_mod_def::GJ8ch-eC61w::76JR3bqaQnOdBwGdDy2zVw` |
| Approve a Timesheet | POST | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Approve` | `conn_mod_def::GJ8cgOP50W0::TvbfzdvLQJCH9MUv1R4SLA` |
| Create a Timesheet | POST | `/payroll.xro/2.0/Timesheets` | `conn_mod_def::GJ8cf-li76c::-Qylf4ORQdCFHnSqQSnp_w` |

10 more Timesheets actions are available through search.

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Employee | GET | `/api.xro/2.0/Employees/{{employeeId}}` | `conn_mod_def::GJ8caE4ceKc::NXjce-AMSE-l5yMynjJvXw` |
| Get an Employee | GET | `/payroll.xro/2.0/Employees/{{employeeId}}` | `conn_mod_def::GJ8cjaoUd5U::bqw9Xnc5TbSbZNGCuX50RA` |
| Get an Employee by ID | GET | `/payroll.xro/1.0/Employees/{{employeeId}}` | `conn_mod_def::GJ8cfdtyIrI::823ZkCnuRGeD8SGO9ocdcw` |
| Get an Employee's Statutory Leave Balances | GET | `/payroll.xro/2.0/Employees/{{employeeId}}/StatutoryLeaveBalance` | `conn_mod_def::GJ8cius2Nsw::Nqc8pOQYTHCHWaMQmZkVtw` |
| List Employees | GET | `/Employees` | `conn_mod_def::GJ8chUsjrck::F9ULoEnwSn-1f_ahHhnHyA` |
| List Employees | GET | `/Employees` | `conn_mod_def::GJ8cjQoR9sA::Kh3GGUBvQrCBiMRZonVE0w` |
| List Employees Used in Xero Payrun | GET | `/api.xro/2.0/Employees` | `conn_mod_def::GJ8cbKdN3g4::DRt5ejqISpahF8n8_Ndjqg` |
| Retrieve an Employee by Employee ID | GET | `/payroll.xro/2.0/Employees/{{employeeId}}` | `conn_mod_def::GJ8chNPlfKo::Rn1UsD9vSwOHIC8xgEdTIw` |
| Search Payroll Employees | GET | `/Employees` | `conn_mod_def::GJ8cf3Liof4::OBKfJG0uRcmUYbi6hpwdsQ` |
| Create an Employee | POST | `/Employees` | `conn_mod_def::GJ8cgm5F_mM::wEool-U7ScCvCNqhKAu07g` |
| Create Employees | POST | `/Employees` | `conn_mod_def::GJ8cYLT7WFM::bsBOO5vtQi6sVch0LKo42g` |
| Create Employees | PUT | `/Employees` | `conn_mod_def::GJ8cYod6rEw::W-xuouWvQ1qP3kKj1aQKoQ` |

6 more Employees actions are available through search.

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Aged Receivables by Contact Report | GET | `/api.xro/2.0/Reports/AgedReceivablesByContact` | `conn_mod_def::GJ8ccCv_NGc::n18oY-9uRNeQAhi4tbubaw` |
| List an Organisation's Unique Reports | GET | `/Reports` | `conn_mod_def::GJ8cZV-sZNo::FA_DL1U_Tsm4ufJfUo7Caw` |
| Retrieve 1099 Reports | GET | `/api.xro/2.0/Reports/TenNinetyNine` | `conn_mod_def::GJ8cZWIffR0::ykucIOlMTwWtIaTCGa8F3g` |
| Retrieve a Specific Report by Report ID | GET | `/api.xro/2.0/Reports/{{reportId}}` | `conn_mod_def::GJ8cagKuA4E::lxLaP8-8TbKbBnjNlatGCA` |
| Retrieve Bank Summary Report | GET | `/api.xro/2.0/Reports/BankSummary` | `conn_mod_def::GJ8ccNzZtmU::PlyKv6zUTBCJMHWav0pxnQ` |
| Retrieve Budget Summary Report | GET | `/Reports/BudgetSummary` | `conn_mod_def::GJ8ccNxvbDQ::OQ1Cb0AwTSi9pJJsMjNtUw` |
| Retrieve Executive Summary Report | GET | `/Reports/ExecutiveSummary` | `conn_mod_def::GJ8ccN4P4pI::1Pw0SKGMQxqgimmz_6hWWQ` |
| Retrieve Profit and Loss Report | GET | `/Reports/ProfitAndLoss` | `conn_mod_def::GJ8ccQEncR4::8a_QOz-PQLi0G_o0Ddu_Zg` |
| Retrieve the Aged Payables by Contact Report | GET | `/Reports/AgedPayablesByContact` | `conn_mod_def::GJ8ccCmOX7g::_EcTEydoTwGQUJxzJufFfQ` |
| Retrieve the Balance Sheet Report | GET | `/api.xro/2.0/Reports/BalanceSheet` | `conn_mod_def::GJ8ccPFK4CQ::xQwe2DJwRgKtYOiylZ249A` |
| Retrieve Trial Balance Report | GET | `/Reports/TrialBalance` | `conn_mod_def::GJ8ccX_DJMU::it4QyWhSQc6oclQX0H2XKw` |

### SalaryAndWages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Employee's Salary and Wages | GET | `/payroll.xro/2.0/Employees/{{employeeId}}/SalaryAndWages` | `conn_mod_def::GJ8ci3B4-Mo::iX5dsrZxQqKWTkXgg7Y8bQ` |
| List an Employee's Salary and Wages | GET | `/payroll.xro/2.0/Employees/{{employeeId}}/SalaryAndWages` | `conn_mod_def::GJ8chGOmFM0::8_lOXUmEQqCx5L7Ory2g_w` |
| Retrieve an Employee's Salary and Wages Record | GET | `/payroll.xro/2.0/Employees/{{employeeId}}/SalaryAndWages/{{salaryAndWagesId}}` | `conn_mod_def::GJ8chNrI9Hw::ox7n05mLT3OFGNB7oAGCHQ` |
| Retrieve an Employee's Specific Salary and Wages Record | GET | `/payroll.xro/2.0/Employees/{{employeeId}}/SalaryAndWages/{{salaryAndWagesId}}` | `conn_mod_def::GJ8cjIoXQBE::m3veA9l0T8-awFeFJ-Fe6g` |
| Create an Employee Salary and Wage Record | POST | `/payroll.xro/2.0/Employees/{{employeeId}}/SalaryAndWages` | `conn_mod_def::GJ8ciOlq3uc::Uiyw-g9GSqmfQCak_FwBRg` |
| Create an Employee Salary and Wage Record | POST | `/payroll.xro/2.0/Employees/{{employeeId}}/SalaryAndWages` | `conn_mod_def::GJ8cgeuxFQA::A7Qie1ajTd2ywyUbfPzrkA` |
| Delete an Employee's Salary and Wages Record | DELETE | `/payroll.xro/2.0/Employees/{{employeeId}}/SalaryAndWages/{{salaryAndWagesId}}` | `conn_mod_def::GJ8cg3HJazg::XYgcx0noTb2c4vD-9j8MlA` |
| Delete an Employee's Salary and Wages Record | DELETE | `/payroll.xro/2.0/Employees/{{employeeId}}/SalaryAndWages/{{salaryAndWagesId}}` | `conn_mod_def::GJ8cieaYlhE::w0CEahdeS4-qvEZv0nWLUg` |
| Update an Employee's Salary and Wages Record | PUT | `/payroll.xro/2.0/Employees/{{employeeId}}/SalaryAndWages/{{salaryAndWagesId}}` | `conn_mod_def::GJ8cjsiyNFo::H7BW4cJDQtG6wg7kJoZeHw` |
| Update an Employee's Salary and Wages Record | PUT | `/payroll.xro/2.0/Employees/{{employeeId}}/SalaryAndWages/{{salaryAndWagesId}}` | `conn_mod_def::GJ8ch2yQde8::4LavOL03SNmvn8auuvH8dw` |

### PayRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pay Runs | GET | `/PayRuns` | `conn_mod_def::GJ8chd24J74::tPGQRJ36TTqCZ-fiq_BZkg` |
| List Pay Runs | GET | `/payroll.xro/2.0/PayRuns` | `conn_mod_def::GJ8cjQpkODY::V9g5LazzT4O3yXGMcC8OvA` |
| List Pay Runs | GET | `/PayRuns` | `conn_mod_def::GJ8cfmyNt08::G9R2_yfvScqYd8EN4sSSJA` |
| Retrieve a Pay Run by ID | GET | `/payroll.xro/1.0/PayRuns/{{payRunId}}` | `conn_mod_def::GJ8cfd6n-NQ::UOrRBcwpRbSKNoYdt9oe1A` |
| Retrieve a Pay Run by ID | GET | `/payroll.xro/2.0/PayRuns/{{payRunId}}` | `conn_mod_def::GJ8cg-p1EeA::Zt1b0HbjRFGiMyvrd4ekZQ` |
| Retrieve a Specific Pay Run | GET | `/payroll.xro/2.0/PayRuns/{{payRunId}}` | `conn_mod_def::GJ8ci-jNZv4::pWVdU1f-TJWCOrLVca7pZw` |
| Create a Pay Run | POST | `/PayRuns` | `conn_mod_def::GJ8cfOuVRTI::h2pe2KVLQCW5mo9bEdYr9w` |
| Create a Pay Run | POST | `/PayRuns` | `conn_mod_def::GJ8cgeeZqj4::v_Em4K1xT8G0OlZteJvEVg` |
| Update a Pay Run | POST | `/payroll.xro/1.0/PayRuns/{{payRunId}}` | `conn_mod_def::GJ8cf3CBKtc::ULDj7W-fQ7G8tu9k-StjTA` |

### TimesheetLines

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Timesheet Line for a Specific Timesheet | POST | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Lines` | `conn_mod_def::GJ8cgPP4tYk::nbt9_Zh0TVKWoNAEspEQIw` |
| Create a Timesheet Line for a Timesheet | POST | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Lines` | `conn_mod_def::GJ8cf_HhB3Y::TmiCJgGRRQ2vUlQUCCNP8A` |
| Create a Timesheet Line for a Timesheet | POST | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Lines` | `conn_mod_def::GJ8ciG9BHtc::M9YBLBWKRjisIWvhZbYKYw` |
| Delete a Timesheet Line from a Timesheet | DELETE | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Lines/{{timesheetLineId}}` | `conn_mod_def::GJ8cgG5dN7E::iqAjaXktRyilIsdpOlLFaw` |
| Delete a Timesheet Line from a Timesheet | DELETE | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Lines/{{timesheetLineId}}` | `conn_mod_def::GJ8cg2uRXfQ::_uK2Y942RBmE4PgZhbqy2w` |
| Delete a Timesheet's Line | DELETE | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Lines/{{timesheetLineId}}` | `conn_mod_def::GJ8ciexye7I::jwTYZSWoQSKT6ZACLS0-Zg` |
| Update a Timesheet Line for a Timesheet | PUT | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Lines/{{timesheetLineId}}` | `conn_mod_def::GJ8cjssFr5A::mgO8wFfKSC2-G3IivVT5fg` |
| Update a Timesheet's Line | PUT | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Lines/{{timesheetLineId}}` | `conn_mod_def::GJ8cgPKOCHw::iDNeHj5ZSPOTsjwdplJK_A` |
| Update a Timesheet's Line | PUT | `/payroll.xro/2.0/Timesheets/{{timesheetId}}/Lines/{{timesheetLineId}}` | `conn_mod_def::GJ8ch1ZO0mE::DFV9_EjiQUK4C08bz7j7Pg` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| List Files | GET | `/Files` | `conn_mod_def::GJ8cephYQlw::t3vsz_UlSxK3SPQr6ra8Yw` |
| Retrieve a File by File ID | GET | `/files.xro/1.0/Files/{{fileId}}` | `conn_mod_def::GJ8cehNv42o::elthx4gkSU-e1Y3JeSv90Q` |
| Retrieve a File's Content | GET | `/files.xro/1.0/Files/{{fileId}}/Content` | `conn_mod_def::GJ8ceyh-lUU::8MsE2s8FTiaTdqgbEwjFHw` |
| Delete a File's Association | DELETE | `/files.xro/1.0/Files/{{fileId}}/Associations/{{objectId}}` | `conn_mod_def::GJ8ceiYuQCs::gCID4R4yRNq9cSSgjbiuPg` |
| Delete a Specific File | DELETE | `/files.xro/1.0/Files/{{fileId}}` | `conn_mod_def::GJ8cegynspY::fn-nqQ-IRduHYuF-7wrjPw` |
| Update a File | PUT | `/files.xro/1.0/Files/{{fileId}}` | `conn_mod_def::GJ8ceyqpXjY::JaT1bznuSIe9dowKbrf26Q` |
| Upload a File to a Folder | POST | `/files.xro/1.0/Files/{{folderId}}` | `conn_mod_def::GJ8ce0wCKl0::_mLecz-uShKFWgmey2SnNQ` |
| Upload a File to the Inbox | POST | `/Files` | `conn_mod_def::GJ8ceynbjUA::cfVCUI6OR4ybUTzoQebLuA` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Item by Item ID | GET | `/api.xro/2.0/Items/{{itemId}}` | `conn_mod_def::GJ8caFsoJCc::h2MPgA1aQsCsOOdJP4HsKA` |
| List Items | GET | `/api.xro/2.0/Items` | `conn_mod_def::GJ8cbrmFGn0::gTwVbnugRjmx5hrAE0f6Jw` |
| Retrieve an Item's History | GET | `/api.xro/2.0/Items/{{itemId}}/History` | `conn_mod_def::GJ8cbSajLtk::EoPT-GfZTU62aQEvDSqsnQ` |
| Create History Record for an Item | PUT | `/api.xro/2.0/Items/{{itemId}}/History` | `conn_mod_def::GJ8cXwKem2k::DHShqYpIRd6EgtVyRsfw9Q` |
| Create Items | PUT | `/Items` | `conn_mod_def::GJ8cYwNDVKI::fVJKJ4ipR7y4oTpn1Zs8iQ` |
| Delete an Item | DELETE | `/api.xro/2.0/Items/{{itemId}}` | `conn_mod_def::GJ8cZCq4htE::_iPZT3INRIaaD9wxK233-Q` |
| Update an Item | POST | `/api.xro/2.0/Items/{{itemId}}` | `conn_mod_def::GJ8cdNFP7EQ::L_hfDeyFSf6MCo8oWfJtog` |
| Update or Create Items | POST | `/api.xro/2.0/Items` | `conn_mod_def::GJ8cdoP_NYQ::VEDFGHsiTuuCrll0_mV9uA` |

### PurchaseOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Purchase Order as PDF | GET | `/api.xro/2.0/PurchaseOrders/{{purchaseOrderId}}/pdf` | `conn_mod_def::GJ8cchhxwkU::FHLskBayRWK3d-48soab-w` |
| Get a Purchase Order by ID | GET | `/api.xro/2.0/PurchaseOrders/{{purchaseOrderId}}` | `conn_mod_def::GJ8caV6ytRY::Wp4_i3soQhmpGxGXPAE2CA` |
| List Purchase Orders | GET | `/PurchaseOrders` | `conn_mod_def::GJ8ccGUmTEI::mrQHAUrQTgOkLEcbnZccAg` |
| Retrieve a Purchase Order by Purchase Order Number | GET | `/api.xro/2.0/PurchaseOrders/{{purchaseOrderNumber}}` | `conn_mod_def::GJ8caY_7mAE::OAKe8oJZTXqP4mh40tvIEg` |
| Retrieve a Purchase Order's History | GET | `/api.xro/2.0/PurchaseOrders/{{purchaseOrderId}}/History` | `conn_mod_def::GJ8cbSYIlSI::nzQTse-JQU6vNyKNJo7m6g` |
| Create Purchase Orders | PUT | `/api.xro/2.0/PurchaseOrders` | `conn_mod_def::GJ8cYvhB3v4::0cWVY88dTLKNKnpXBxFCJQ` |
| Update a Purchase Order | POST | `/api.xro/2.0/PurchaseOrders/{{purchaseOrderId}}` | `conn_mod_def::GJ8cdWI4vGU::GJwx-JmNQBCC6Vmy5AF6mg` |
| Update or Create Purchase Orders | POST | `/api.xro/2.0/PurchaseOrders` | `conn_mod_def::GJ8cdzV016U::3r55FyueTEqhBkSUOU6aGw` |

### LeaveApplications

| Action | Method | Path | Action id |
|---|---|---|---|
| List Leave Applications | GET | `/payroll.xro/1.0/LeaveApplications` | `conn_mod_def::GJ8cfmNuOAQ::KK3qlz9RReCEpUa84WvWUA` |
| List Leave Applications | GET | `/payroll.xro/1.0/LeaveApplications/v2` | `conn_mod_def::GJ8cfmp6vbU::Xx3oIEmvQtmWg00qA4KhqQ` |
| Retrieve a Leave Application by ID | GET | `/payroll.xro/1.0/LeaveApplications/{{leaveApplicationId}}` | `conn_mod_def::GJ8cfWCgUoo::Yt7oxtaVRRyKNP_VhMatRw` |

4 more LeaveApplications actions are available through search.

This lists 90 of 475 actions. For anything not here, call `search_one_platform_actions` with platform `xero`. The full catalog is at https://www.withone.ai/knowledge/xero.

## When a call fails

The error comes from Xero, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/xero

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
