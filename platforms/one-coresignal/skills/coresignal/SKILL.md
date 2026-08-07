---
name: coresignal
description: Coresignal provides large-scale public web data for investment, HR tech, and other industries. It offers datasets on companies, jobs, people, and more to power business insights and machine learning models. Read and write Coresignal data through One: datarequests, datarequestfiles, employeebase, companybase, companyclean, companymultisource and more, 38 actions with real parameter documentation. Use whenever the user asks to look something up in Coresignal, create or update a record there, or build code against the Coresignal API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: coresignal
  generated-from: one-knowledge-base
---

# Coresignal through One

Coresignal provides large-scale public web data for investment, HR tech, and other industries. It offers datasets on companies, jobs, people, and more to power business insights and machine learning models.

One exposes Coresignal through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `coresignal` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Coresignal is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Coresignal account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### DataRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Data Request File (Bulk Collect) | GET | `/data_requests/{{dataRequestId}}/files/{{fileName}}` | `conn_mod_def::GJ2LfJPo_JA::dzveG86bSOeVXGqXXLf5Wg` |
| Download a Data Request File (Bulk Job Posting Dataset) | GET | `/data_requests/{{dataRequestId}}/files/{{fileName}}` | `conn_mod_def::GJ2LhiBthns::gD-7yVycQBqrpK02iOAaIA` |
| Create an Employee Base Data Request (Filter Search) | POST | `/data_requests/employee_base/filter` | `conn_mod_def::GJ2LfhfrOsE::pu8I9M-QRyO9GBofOw1tSA` |
| Submit a Bulk Job Base Data Request by ID File | POST | `/data_requests/job_base/id_file` | `conn_mod_def::GJ2Lhx4aFkY::SzDsjPLfRdSaCBHtfbdRHw` |

### DataRequestFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Data Request File (Bulk Employee Data) | GET | `/data_requests/{{dataRequestId}}/files/{{fileName}}` | `conn_mod_def::GJ2LgYquTAE::kT0mC4_cSmi2QrzASo83Mw` |
| Get Bulk Employee Data Request File Names (Status) | GET | `/data_requests/{{dataRequestId}}/files` | `conn_mod_def::GJ2LfQs7a_g::m9LvItxER-SCRoGnJCGqNQ` |
| Get Bulk Job Data Request Files (List File Names) | GET | `/data_requests/{{dataRequestId}}/files` | `conn_mod_def::GJ2LhpomlrU::VV2DqMBXTuKKAQiUT4eukg` |
| Get Data Request Files (List File Names) for a Bulk Employee Data Request | GET | `/data_requests/{{dataRequestId}}/files` | `conn_mod_def::GJ2LghwT5GM::dFwxOY3ST7isvXg2IaVAYQ` |

### EmployeeBase

| Action | Method | Path | Action id |
|---|---|---|---|
| Collect a Base Employee Profile (by ID or Shorthand Name) | GET | `/employee_base/collect/{{employeeKey}}` | `conn_mod_def::GJ2LfpIXUPQ::CPKIuzUTTE2YuYSnBdNYJA` |
| Map Employee IDs to Base Employee IDs | POST | `/cdapi/v2/employee_base/map/ids` | `conn_mod_def::GJ2Lf8giWZ4::tZl60bP8QX-4pjZ8yAh2gA` |
| Search Base Employee Profiles (Custom Filters) | POST | `/v2/employee_base/search/filter` | `conn_mod_def::GJ2LgE_gQSI::xAMiIrQyRuaks6rd2aalmQ` |
| Search Base Employee Records (Elasticsearch DSL) | POST | `/cdapi/v2/employee_base/search/es_dsl` | `conn_mod_def::GJ2LfyJLhT8::G89oSks7TR61nITd83tJtw` |

### CompanyBase

| Action | Method | Path | Action id |
|---|---|---|---|
| Collect a Company Profile (by ID or Shorthand Name) | GET | `/company_base/collect/{{companyIdentifier}}` | `conn_mod_def::GJ2Ldc8Wy78::CaXu0_p9RBiQyiEM_5t_eA` |
| Search Base Company IDs (Elasticsearch DSL) | POST | `/company_base/search/es_dsl` | `conn_mod_def::GJ2LdogCpfk::14Afeo9yQs6ki4FCj0VPtQ` |
| Search Company Profiles Using Custom Filters (Company Base) | POST | `/v2/company_base/search/filter` | `conn_mod_def::GJ2LdzfBePU::yjlsiHhdSz-ZNqFUUVNeCA` |

### CompanyClean

| Action | Method | Path | Action id |
|---|---|---|---|
| Collect a Clean Company Profile (by Company ID or Shorthand Name) | GET | `/company_clean/collect/{{identifier}}` | `conn_mod_def::GJ2Ld63a8ZA::pF6MX83jRpSd3L_SDvm-yg` |
| Enrich a Company Using a Website URL (Clean Company) | GET | `/company_clean/enrich` | `conn_mod_def::GJ2LeM7-2Uw::4cWdNBl_QFOuPeCyb_SObQ` |
| Search Clean Company IDs (Elasticsearch DSL) | POST | `/cdapi/v2/company_clean/search/es_dsl` | `conn_mod_def::GJ2LeERyTGY::u26jbi8PQ3eZVWi6-G68jQ` |

### CompanyMultiSource

| Action | Method | Path | Action id |
|---|---|---|---|
| Collect a Multi-Source Company by ID or Shorthand Name | GET | `/company_multi_source/collect/{{companyIdentifier}}` | `conn_mod_def::GJ2Leh2VuIQ::YkutnSGHTpiy5ezyg_Vk4A` |
| Enrich a Company (Multi-source) by Website URL | GET | `/cdapi/v2/company_multi_source/enrich` | `conn_mod_def::GJ2Le4VFsXg::D-lLe4m1QrShdm3UdVPwmg` |
| Search Multi-source Companies (Elasticsearch DSL) | POST | `/cdapi/v2/company_multi_source/search/es_dsl` | `conn_mod_def::GJ2Leq0-Ayo::z-nIBs-TSc2dSnqUMlBdLg` |

### JobBase

| Action | Method | Path | Action id |
|---|---|---|---|
| Collect a Job Posting by ID | GET | `/job_base/collect/{{jobId}}` | `conn_mod_def::GJ2LiBpRwjE::QDixeN_LTdCV8O2VSWUuWQ` |
| Search Job Posting IDs (Custom Filters) | POST | `/cdapi/v2/job_base/search/filter` | `conn_mod_def::GJ2LiWVvfps::npdN8mq6TwGoUh21NBZ2Zg` |
| Search Job Postings (ES DSL) | POST | `/cdapi/v2/job_base/search/es_dsl` | `conn_mod_def::GJ2LiNZknVU::D4hLSiwDQsCRx8A6Q5pB5w` |

### CompanyBaseDataRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Company Base Bulk Data Request (Search by Filters) | POST | `/v2/data_requests/company_base/filter` | `conn_mod_def::GJ2LdUxx2xg::xyNjKMqkRSOzzG7rg9d0aw` |
| Request Base Company Data in Bulk (Elasticsearch DSL) | POST | `/v2/data_requests/company_base/es_dsl` | `conn_mod_def::GJ2Lc-byHKw::MYyfDOfJQcGmBZDQWl1pSA` |

### EmployeeBaseDataRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Request Base Employee Data in Bulk (Elasticsearch DSL) | POST | `/data_requests/employee_base/es_dsl` | `conn_mod_def::GJ2LfA1-zAk::J6S8GMnMREiZJJ2BkWjfng` |
| Submit an Employee Base Bulk Data Request by IDs File | POST | `/v2/data_requests/employee_base/ids` | `conn_mod_def::GJ2LfZSIvlg::x4WM3UW8TIKUNKbafQiOSg` |

### EmployeeCleanDataRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Request Clean Employee Data in Bulk (Elasticsearch DSL) | POST | `/data_requests/employee_clean/es_dsl` | `conn_mod_def::GJ2LgQVrZh0::4N-LN77PRyeCLBtrXO1VSg` |
| Submit a Bulk Clean Employee Data Request Using an IDs File | POST | `/data_requests/employee_clean/id_file` | `conn_mod_def::GJ2Lgp5PZrc::oQTpgfF_TyyBLVowD6KJpw` |

### EmployeeClean

| Action | Method | Path | Action id |
|---|---|---|---|
| Collect a Clean Employee Profile (by Employee ID or Shorthand Name) | GET | `/employee_clean/collect/{{identifier}}` | `conn_mod_def::GJ2Lgxmssho::CdohRAmpQaWpZ21bJJTwSg` |
| Search Clean Employee IDs (Elasticsearch DSL) | POST | `/cdapi/v2/employee_clean/search/es_dsl` | `conn_mod_def::GJ2Lg-GralE::-bv_dQNOR5OCGycHfIEGNA` |

### EmployeePosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Collect an Employee Post by Post ID | GET | `/post_employee/collect/{{postId}}` | `conn_mod_def::GJ2LhJDmNv8::iw2QQWY7THuKdMRvsm-8RQ` |
| Search Employee Posts (Coresignal Custom Filters) | POST | `/cdapi/v2/post_employee/search/filter` | `conn_mod_def::GJ2LhY1G-Jg::cASw-d6BS4uxsm3WrP9k4g` |

### CompanyDataRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit a Company Data Request (Bulk) by Uploading an ID File | POST | `/v2/data_requests/company_base/id_file` | `conn_mod_def::GJ2LdJJnXCw::Rx_HRfOaTnSlBxHj3XnsJA` |

### HistoricalHeadcount

| Action | Method | Path | Action id |
|---|---|---|---|
| Collect a Company’s Historical Headcount (by Company ID) | GET | `/historical_headcount/collect/{{companyId}}` | `conn_mod_def::GJ2LeZMXAPA::rc5Qp_oUThe4bqtyAwnYqQ` |

### PostEmployee

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Employee Posts (Elasticsearch DSL) | POST | `/cdapi/v2/post_employee/search/es_dsl` | `conn_mod_def::GJ2LhRR5mVg::F8sMe94FR-yyo5jlAdZF1g` |

### JobBaseDataRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Job Postings in Bulk (Create a Job Base Data Request) | POST | `/v2/data_requests/job_base/filter` | `conn_mod_def::GJ2Lh6VPIdc::Ag9uizv3SEiMseOsb6X0dA` |

## When a call fails

The error comes from Coresignal, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/coresignal

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
