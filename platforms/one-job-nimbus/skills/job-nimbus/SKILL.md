---
name: job-nimbus
description: JobNimbus is an all-in-one CRM and project management platform tailored for contractors, combining lead tracking, custom job workflows, estimating, invoicing, mobile access, material ordering, integrated communications and analytics to streamline operations and drive profitability. Read and write JobNimbus data through One: files, contacts, jobs, invoices, products, tasks and more, 59 actions with real parameter documentation. Use whenever the user asks to look something up in JobNimbus, create or update a record there, or build code against the JobNimbus API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: job-nimbus
  generated-from: one-knowledge-base
---

# JobNimbus through One

JobNimbus is an all-in-one CRM and project management platform tailored for contractors, combining lead tracking, custom job workflows, estimating, invoicing, mobile access, material ordering, integrated communications and analytics to streamline operations and drive profitability.

One exposes JobNimbus through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `job-nimbus` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm JobNimbus is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real JobNimbus account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| List File Attachments | GET | `/api1/files` | `conn_mod_def::GJ4sdr0dEvM::m-eEm-OdRV-7plSrvcD5gQ` |
| Retrieve a File Attachment | GET | `/files/{{jnid}}` | `conn_mod_def::GJ4sdro_pv0::qapaN1T3RbKHne6rq7GiLQ` |
| Create a File Attachment (Deprecated) | POST | `/api1/files` | `conn_mod_def::GJ4se9E9DJo::nMpgTX7aQBuEYD8eSqYI6g` |
| Create a File Attachment from a Public URL | POST | `/files/fromUrl` | `conn_mod_def::GJ4sduzWPgE::IrnlZAOuTa-9Yl7WwTeuIA` |
| Upload Multipart File (Multiple Presigned URLs) | POST | `/files/v1/uploads/multi-urls` | `conn_mod_def::GJ4sfE8txyY::BhT2wZJ7R8mjfAVBozyZlA` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Contact | GET | `/contacts/{{jnid}}` | `conn_mod_def::GJ4sdS0SupM::7YNVO9b3QNaPIVPgppVhdw` |
| Retrieve All Contacts | GET | `/api1/contacts` | `conn_mod_def::GJ4sdT_Sfps::dZc5N93gQouiNQQiaWdk1w` |
| Create a Contact | POST | `/contacts` | `conn_mod_def::GJ4sdTP9I0o::2iGaujm8TUKuzA59dt1QRw` |
| Update a Contact | PUT | `/contacts/{{jnid}}` | `conn_mod_def::GJ4sdXumH5Q::oZEEGkzKTsCxZssZByw7uQ` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Job | GET | `/jobs/{{jnid}}` | `conn_mod_def::GJ4sfP288Do::L0FSO2MRTMSyo1r-FqdJHQ` |
| Retrieve All Jobs | GET | `/api1/jobs` | `conn_mod_def::GJ4sfPsNb5c::a1CEz4l-R0iKqIpMOvwv1w` |
| Create a Job | POST | `/jobs` | `conn_mod_def::GJ4sfQJb8fo::TlZL2pMkTCWNX2K_QSvKYw` |
| Update a Job | PUT | `/jobs/{{jnid}}` | `conn_mod_def::GJ4sfOX788A::wLgRh2FRQye3cuJv4LRdMg` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All Invoices | GET | `/api1/v2/invoices` | `conn_mod_def::GJ4sfG3BaGY::W1cNor6USjaLnSXIuqhbmA` |
| Retrieve an Invoice | GET | `/invoices/{{jnid}}` | `conn_mod_def::GJ4sfGVli7E::Q8rYjyuXQq6c4QJkodo7nQ` |
| Create an Invoice | POST | `/api1/v2/invoices` | `conn_mod_def::GJ4sfFHxcQY::DqmHN8LWRWWFjD4sWQuf-A` |
| Update an Invoice | PUT | `/v2/invoices/{{jnid}}` | `conn_mod_def::GJ4sfPmJyOw::nuqjGTeBSomDGGa0hpW6qQ` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Product | GET | `/v2/products/{{jnid}}` | `conn_mod_def::GJ4sfq_TfLA::-Mw3tCwnQxa4w4r52o9yag` |
| Retrieve All Products | GET | `/api1/v2/products` | `conn_mod_def::GJ4sfl7UB-w::WGihexRmQNa4MtPYuq84vA` |
| Create a Product | POST | `/api1/v2/products` | `conn_mod_def::GJ4sfoqFnwk::uRqOOcC0TsulT4oxvPViSQ` |
| Update a Product | PUT | `/v2/products/{{jnid}}` | `conn_mod_def::GJ4sf2jqy4w::Capb_OKoTxOHydYhJU1BVA` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Task | GET | `/tasks/{{jnid}}` | `conn_mod_def::GJ4sfyX8xmU::zLlpHrrVTc-ajBzeM-xYaQ` |
| Retrieve All Tasks | GET | `/api1/tasks` | `conn_mod_def::GJ4sf18Ah1s::lTuZozvyQQSp33D-4jSSZA` |
| Create a Task | POST | `/tasks` | `conn_mod_def::GJ4sfydm4YA::ohaPImRpSpqFspVrhvmJUw` |
| Update a Task | PUT | `/tasks/{{jnid}}` | `conn_mod_def::GJ4sfyl9o3w::9i40ETwOS5mehr77GCm0NA` |

### Workorders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Work Order | GET | `/v2/workorders/{{jnid}}` | `conn_mod_def::GJ4sf-nTe2M::sZuU2if3R622HNKw7VFgpQ` |
| Retrieve All Work Orders | GET | `/api1/v2/workorders` | `conn_mod_def::GJ4sgBqVId4::PJhBNtfjRLqcAl5a5-zACg` |
| Create a Work Order | POST | `/workorders` | `conn_mod_def::GJ4sf-aRjbs::B81uS0u5REanBEEUo36G4w` |
| Update a Work Order | PUT | `/v2/workorders/{{id}}` | `conn_mod_def::GJ4sgB28Xd4::FFZo19L7TH-NkujOhTAQPg` |

### Estimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All Estimates | GET | `/api1/v2/estimates` | `conn_mod_def::GJ4sdgK77CQ::2QO4V8_bRP2MDb7XYCfClQ` |
| Retrieve an Estimate | GET | `/v2/estimates/{{jnid}}` | `conn_mod_def::GJ4sdibiVwI::JDeL_AuJQZKLiI-Fg5ViyA` |
| Create an Estimate | POST | `/api1/v2/estimates` | `conn_mod_def::GJ4sdS6Oboo::vlpuNoLySMGaNSk-plP65w` |
| Update an Estimate | PUT | `/v2/estimates/{{jnid}}` | `conn_mod_def::GJ4sdkT11KI::hEoVL1B-STinyn2qK-lO9A` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All Activities | GET | `/api1/activities` | `conn_mod_def::GJ4sdJBdE9M::6ldot6nERyma-BBv9mM0iw` |
| Retrieve an Activity | GET | `/activities/{{jnid}}` | `conn_mod_def::GJ4sdHDnvqo::ik6UmrYURiuwLQ5_2zT9KQ` |
| Create an Activity | POST | `/activities` | `conn_mod_def::GJ4sdK7NLk8::Al-KCgoARpSoEkGGzd1Aaw` |

### MaterialOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Material Order | GET | `/v2/materialorders/{{jnid}}` | `conn_mod_def::GJ4sfa0wLz0::YxCBTI9MQ-SWcKCq1lf15w` |
| Delete (Deactivate) a MaterialOrder | PUT | `/v2/materialorders/{{jnid}}` | `conn_mod_def::GJ4sfd8HWTY::6ktFT9A5SoCpadSSFIyBSQ` |
| Update a MaterialOrder | PUT | `/v2/materialorders/{{jnid}}` | `conn_mod_def::GJ4sfY_RPHQ::Trshxg_aRpaNq19SUWPL7w` |

### Uploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Abort a Multipart Upload | POST | `/files/v1/uploads/multi-abort` | `conn_mod_def::GJ4sdihihlE::vbc-LZVoSZ-b30mMm0pgYA` |
| Complete a Single-Part Upload | POST | `/files/v1/uploads/{{jnid}}/complete` | `conn_mod_def::GJ4sdjNIriA::N4dCDAlDRsSNyTDUxQdrGw` |
| Upload a File (via Presigned URL) | PUT | `` | `conn_mod_def::GJ4sdr6oIek::eu8Zh2DBTIiuBr9M-1IKaQ` |

### Materialorders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All Material Orders | GET | `/materialorders` | `conn_mod_def::GJ4sfYhw_fM::CldkO1huQpmovYWk5ire-A` |
| Create a MaterialOrder | POST | `/v2/materialorders` | `conn_mod_def::GJ4sfZTcV6U::_g7PBWGuQtKvIUXm0DlltA` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All Payments | GET | `/api1/payments` | `conn_mod_def::GJ4sfmodXfE::go_tkHnvSku9285Z9Az08A` |
| Create a Payment | POST | `/api2/v2/payments` | `conn_mod_def::GJ4sfmVdigI::Q_jlasDPSHeCG9duoblqzg` |

### LeadSources

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Lead Source (Account) | POST | `/account/leadsource` | `conn_mod_def::GJ4scxvibGc::ocq_Rpf4SFGTrxKCpZ9eyA` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Location (Account Settings) | POST | `/api1/account/location` | `conn_mod_def::GJ4scxncxl8::BR9Gh95MR0aPQreO3y0dxw` |

### WorkflowStatuses

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Status Within a Workflow (Account Settings) | POST | `/account/workflow/{{workflowid}}/status` | `conn_mod_def::GJ4scyMeGHk::4jmFmqTYTf61xuhL7eLNUw` |

### AccountSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Account Settings | GET | `/account/settings` | `conn_mod_def::GJ4sc8kBdEY::T4ZEMHNoQeaB0YA92m-sZw` |

### AccountWorkflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workflow in an Account | POST | `/api1/account/workflow` | `conn_mod_def::GJ4sc-1VGx4::LwYqSnwoSfyo92USz6UhgA` |

### FileUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a Single-Part File (Get Presigned Upload URL) | POST | `/files/v1/uploads/url` | `conn_mod_def::GJ4sfFPN4qE::Wjx2giBhQ5i0xeYtPlxHlg` |

### FileTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a File Type | POST | `/account/filetype` | `conn_mod_def::GJ4scxni7P4::a8CPa43qRe6hbAtV7ZoC2g` |

### AccountCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Custom Field (Account) | POST | `/account/customfield` | `conn_mod_def::GJ4sc0T_z-E::98okgnQYRMKkICMS0K3UzA` |

### ActivityTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Activity Type (Account Settings) | POST | `/api1/account/activitytype` | `conn_mod_def::GJ4sc9boXqo::Rn5qPb_wSlS5SWyUzfJ7ZA` |

### UtilityUoms

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Units of Measurement (UoMs) | GET | `/api1/utility/uoms` | `conn_mod_def::GJ4sc-Q6wSc::xvQ3pCByR_WOp0txl-MsDg` |

### TaskTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Task Type (Account Settings) | POST | `/account/tasktype` | `conn_mod_def::GJ4sc_JforI::-DWWbyITRVukJ0EI3YyQeA` |

### Budgets

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All Budgets | GET | `/api1/budgets` | `conn_mod_def::GJ4sdG6EKqU::RjoBpSLvQHeMcAjBQT8mgw` |

### AccountUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Users (Team Members) | GET | `/account/users` | `conn_mod_def::GJ4sdG__Pf8::qAm1zO0GRwa5s2dkKB45gw` |

## When a call fails

The error comes from JobNimbus, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/job-nimbus

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
