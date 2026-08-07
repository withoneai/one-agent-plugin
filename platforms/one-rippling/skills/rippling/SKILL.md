---
name: rippling
description: Rippling is a workforce management platform that unifies HR, IT, finance, and payroll data, enabling businesses to onboard, pay, and manage global employees and contractors while automating workflows, enforcing policies, and using AI to answer questions and complete tasks. Read and write Rippling data through One: customobjectrecords, customapps, objectcategories, customsettings, titles, worklocations and more, 102 actions with real parameter documentation. Use whenever the user asks to look something up in Rippling, create or update a record there, or build code against the Rippling API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: rippling
  generated-from: one-knowledge-base
---

# Rippling through One

Rippling is a workforce management platform that unifies HR, IT, finance, and payroll data, enabling businesses to onboard, pay, and manage global employees and contractors while automating workflows, enforcing policies, and using AI to answer questions and complete tasks.

One exposes Rippling through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `rippling` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Rippling is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Rippling account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CustomObjectRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Object Record | GET | `/custom-objects/{{customObjectApiName}}/records/{{codrId}}/` | `conn_mod_def::GMjW838Tq8s::lQEJTRkgQ2mqp4Vej3FsCg` |
| List Records for a Custom Object | GET | `/custom-objects/{{customObjectApiName}}/records/` | `conn_mod_def::GMjW831-Ozo::v7GQNvWxREWMjd6zzbv6tw` |
| Retrieve a Custom Object Record by External ID | GET | `/custom-objects/{{customObjectApiName}}/records/external_id/{{externalId}}/` | `conn_mod_def::GMjW8_06f0Q::PT9dxkjgQlWfbKl-6noi2g` |
| Bulk Create Records for a Custom Object | POST | `/custom-objects/{{customObjectApiName}}/records/bulk/` | `conn_mod_def::GMjW8woqxSU::gf_L1UDlQDmXK1xEl3Jr4w` |
| Bulk Delete Custom Object Records | POST | `/custom-objects/{{customObjectApiName}}/records/bulk-delete/` | `conn_mod_def::GMjW8wTNxlY::7B3b6H9cSui3VrDzdyJptw` |
| Bulk Update Custom Object Records | PATCH | `/custom-objects/{{customObjectApiName}}/records/bulk/` | `conn_mod_def::GMjW8wHcrS8::RWES-jB2RGmShp7ULymHyA` |
| Create a Custom Object Record | POST | `/custom-objects/{{customObjectApiName}}/records/` | `conn_mod_def::GMjW83oxm2M::9qggYc9ISqSg9Sjqd0f_Rg` |
| Delete a Custom Object Record | DELETE | `/custom-objects/{{customObjectApiName}}/records/{{codrId}}/` | `conn_mod_def::GMjW836WuWQ::Gg0mTDekStyS8myLjBVVLg` |
| Query Custom Object Records | POST | `/custom-objects/{{customObjectApiName}}/records/query/` | `conn_mod_def::GMjW84Nl7B8::GaTfOsRbTZObUo-SfJHyXA` |

### CustomApps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom App by ID | GET | `/custom-apps/{{id}}/` | `conn_mod_def::GMjW9Q6KJ0A::rKcWY5YbSUifchTsAAEeYw` |
| List Custom Apps | GET | `/custom-apps/` | `conn_mod_def::GMjW9Qd8X88::0fa3-xYOS92cGX5qiq4GWA` |
| Create a Custom App | POST | `/custom-apps/` | `conn_mod_def::GMjW9H-MYf4::--B8PBmUTqSyDs5t80C7YA` |
| Delete a Custom App | DELETE | `/custom-apps/{{id}}/` | `conn_mod_def::GMjW9H-xFYc::xdE5nP9-RYmIpc3CXC91mQ` |
| Update a Custom App | PATCH | `/custom-apps/{{id}}/` | `conn_mod_def::GMjW9Q780Nw::GZO5BJyZQBijM57ynNo_wA` |

### ObjectCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Object Category by ID | GET | `/object-categories/{{id}}/` | `conn_mod_def::GMjW9-tIdGI::Iw3udtU4SLSdVg1442KiqQ` |
| List Object Categories | GET | `/object-categories/` | `conn_mod_def::GMjW9_HXVAU::7EInjYNFSCCq6si1OVaFUg` |
| Create an Object Category | POST | `/object-categories/` | `conn_mod_def::GMjW9_8gbAs::e9ZfLn66Re2Wy70zxe9dhw` |
| Delete an Object Category | DELETE | `/object-categories/{{id}}/` | `conn_mod_def::GMjW9-Qrif8::d-bGp0jnQkiP1kiZtHUNGw` |
| Update an Object Category | PATCH | `/object-categories/{{id}}/` | `conn_mod_def::GMjW-LPQjog::O9Kq4jyXSWOV0sYkLrZkUQ` |

### CustomSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Setting by ID | GET | `/custom-settings/{{id}}/` | `conn_mod_def::GMjW-dLgn7g::wx9uyr_0SH2qDDAS-WopVQ` |
| List Custom Settings | GET | `/custom-settings/` | `conn_mod_def::GMjW-gbt0d8::CpkEy2xXQIi8CrAtjUk1LA` |
| Create a Custom Setting | POST | `/custom-settings/` | `conn_mod_def::GMjW-RkGNmQ::YCWu_t3ZQyapFb_D_rdG4w` |
| Delete a Setting | DELETE | `/custom-settings/{{id}}/` | `conn_mod_def::GMjW-Rpc3hY::yjLb6u-5TW-EfYwGzfZTgQ` |
| Update a Custom Setting | PATCH | `/custom-settings/{{id}}/` | `conn_mod_def::GMjW-cCthvY::wgXgAHG4QZGlkKgh_tKgbg` |

### Titles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Title by ID | GET | `/titles/{{id}}/` | `conn_mod_def::GMjW-5GtaNs::LUKlq3VaSy2FI3mze1yUTg` |
| List Titles | GET | `/titles/` | `conn_mod_def::GMjW-vzBQ_4::ZVahN0UsRmWII1aLDhmmCg` |
| Create a New Title | POST | `/titles/` | `conn_mod_def::GMjW-xVJoDM::YOZx8yDhQ42IW2j8yHHlcQ` |
| Delete a Title | DELETE | `/titles/{{id}}/` | `conn_mod_def::GMjW-wog0FY::d5uk6BrPQz-gNmuIoAwoSg` |
| Update a Title | PATCH | `/titles/{{id}}/` | `conn_mod_def::GMjW-54CzH8::h1HcT6UoTGWajefzKPJ1tw` |

### WorkLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Work Locations | GET | `/work-locations/` | `conn_mod_def::GMjW_BFrS5o::cme7DKCaRweiIRsfXeMXmg` |
| Retrieve a Work Location by ID | GET | `/work-locations/{{id}}/` | `conn_mod_def::GMjW_ACc13w::lHpUYlflQzuowdSr634QYg` |
| Create a Work Location | POST | `/work-locations/` | `conn_mod_def::GMjW-51e8qs::hE386fAsTwaGA2wGWAH9Zw` |
| Delete a Work Location | DELETE | `/work-locations/{{id}}/` | `conn_mod_def::GMjW_BF5ZmQ::w-WVk0PXSAWJrkQQxPGjQg` |
| Update a Work Location | PATCH | `/work-locations/{{id}}/` | `conn_mod_def::GMjW_AV3MCM::TTId8NDbTU24zr8KsCekSQ` |

### BusinessPartners

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business Partner by ID | GET | `/business-partners/{{id}}/` | `conn_mod_def::GMjW8TW3K_4::zLcFoknlSqWlytruW2iTQQ` |
| List Business Partners | GET | `/business-partners/` | `conn_mod_def::GMjW8eZ_gEg::puBWyIsqTuy3qIPWC-Kc7Q` |
| Create Business Partners | POST | `/business-partners/` | `conn_mod_def::GMjW8LdIxcI::gT75ptz1TIu_giOci6XS4A` |
| Delete a Business Partner | DELETE | `/business-partners/{{id}}/` | `conn_mod_def::GMjW8Jqqy1Y::lwnS7TCYSrauAW-PEguDRg` |

### BusinessPartnerGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business Partner Group by ID | GET | `/business-partner-groups/{{id}}/` | `conn_mod_def::GMjW8ULHD04::zeEZntrWRDSexgIMykXezQ` |
| List Business Partner Groups | GET | `/business-partner-groups/` | `conn_mod_def::GMjW8TYPYRY::XqNMjm_mTLK7KMVqKz5WbQ` |
| Create a Business Partner Group | POST | `/business-partner-groups/` | `conn_mod_def::GMjW8KLvH7w::mqqfco1RQtaCnmu3iGy-ZQ` |
| Delete a Business Partner Group | DELETE | `/business-partner-groups/{{id}}/` | `conn_mod_def::GMjW8TkPkj0::TPot3no6SjCoTQ953GLudQ` |

### CustomObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Objects | GET | `/custom-objects/` | `conn_mod_def::GMjW8_CLeYw::OepVnRKzQcWEwWDvIfOrjw` |
| Create Custom Objects | POST | `/custom-objects/` | `conn_mod_def::GMjW8_Jz4gw::_xY7Tlf3T5SVMd8Ox4d0ZQ` |
| Delete a Custom Object | DELETE | `/custom-objects/{{customObjectApiName}}/` | `conn_mod_def::GMjW9BD-f-Q::eZkG2n4VQOWK8iFuKuGk5g` |
| Update a Custom Object | PATCH | `/custom-objects/{{customObjectApiName}}/` | `conn_mod_def::GMjW9JuQS8w::gNNMhPfpTYaoYRtWy7Show` |

### CustomPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Page by ID | GET | `/custom-pages/{{id}}/` | `conn_mod_def::GMjW9X3jUW4::TFLPdqviQaqW6IbPMJZ5Aw` |
| List Custom Pages | GET | `/custom-pages/` | `conn_mod_def::GMjW9Xjrpb0::oZho4ZKNToO3mvWc6JT8Rw` |
| Create a Custom Page | POST | `/custom-pages/` | `conn_mod_def::GMjW9Q0Zyng::dVoB3ql1TJChDOr7YpG5Hg` |
| Delete a Custom Page | DELETE | `/custom-pages/{{id}}/` | `conn_mod_def::GMjW9QPWSfw::3xE2ZiRuRLOcF2XYfyWqyQ` |

### Departments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Department by ID | GET | `/departments/{{id}}/` | `conn_mod_def::GMjW9emUd-Y::mY2uUZH7RNKoXNg5zy9OEg` |
| List Departments | GET | `/departments/` | `conn_mod_def::GMjW9XepgHU::_VoVbjgxROyXMduCHswaoQ` |
| Create a Department | POST | `/departments/` | `conn_mod_def::GMjW9XsNXG8::1NveMz2yTVOBCrCuk7hA6w` |
| Update a Department | PATCH | `/departments/{{id}}/` | `conn_mod_def::GMjW9e18F2U::INWHf9uuR7iOF8jYYKhENA` |

### CustomObjectFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Custom Object Field | GET | `/custom-objects/{{customObjectApiName}}/fields/{{fieldApiName}}/` | `conn_mod_def::GMjW8wIAoCE::Ho2uIkMETxeRVdVyUUjA1Q` |
| Delete a Custom Object Field | DELETE | `/custom-objects/{{customObjectApiName}}/fields/{{fieldApiName}}/` | `conn_mod_def::GMjW8lq5yUI::V_gtsmBrQTGHC4bxYXgeFA` |
| Update a Custom Object Field | PATCH | `/custom-objects/{{customObjectApiName}}/fields/{{fieldApiName}}/` | `conn_mod_def::GMjW8vkAOKw::S_MppWAzR3msm0vHiobKIw` |

### EarningsInputs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Earnings Inputs | GET | `/earnings-inputs/` | `conn_mod_def::GMjW9pYLi4U::Dlki0DAYT62I41MIVavVEw` |
| Create Earnings Inputs | POST | `/earnings-inputs/` | `conn_mod_def::GMjW9gEUPWI::laeZUrHJRsynn-_chuiwnA` |
| Delete an Earnings Input | DELETE | `/earnings-inputs/{{id}}/` | `conn_mod_def::GMjW9ovYQbU::VlLljb9WQ_yr2LqZy9rwjQ` |

### Supergroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Supergroup by ID | GET | `/supergroups/{{id}}/` | `conn_mod_def::GMjW-nSVIrc::5KU21qglSLmIZhy4_cN9Jg` |
| List Supergroups | GET | `/supergroups/` | `conn_mod_def::GMjW-na7_ws::lGFGs7asTUCwpyAv_Bw1YA` |
| Update Inclusion Members for a Supergroup | PATCH | `/supergroups/{{groupId}}/inclusion-members/` | `conn_mod_def::GMjW-ovB5xE::rn1InRSJQ2-j1qNIb4CvlA` |

### AppUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an App User | GET | `/app-users/{{id}}/` | `conn_mod_def::GMjW8KVDz2s::w_bS5wWHRaGKX2m992R0lQ` |
| List App Users | GET | `/app-users/` | `conn_mod_def::GMjW8J0N-3A::2MztSx6hQRySoXQKFtpRLw` |

### EmploymentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Employment Type by ID | GET | `/employment-types/{{id}}/` | `conn_mod_def::GMjW9pe4C24::e5VnYiCBScuDDuZmkR3xMg` |
| List Employment Types | GET | `/employment-types/` | `conn_mod_def::GMjW9p78A0I::xBWvWgx9RFatQkZtk-1wuA` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Specific File | GET | `/files/{{id}}/` | `conn_mod_def::GMjW93A0UPs::AFrLl_DXQpSe4i5mEZFWqQ` |
| Create a File | POST | `/files/` | `conn_mod_def::GMjW92Mb9U8::55S9LCRdQgWLVhFEbrnHuw` |

### JobFunctions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job Function by ID | GET | `/job-functions/{{id}}/` | `conn_mod_def::GMjW94Vv5d0::ExXhmp7yQ0aPhLLhDVQi6A` |
| List Job Functions | GET | `/job-functions/` | `conn_mod_def::GMjW920lZM4::nC-FGFcAT1O5XvPbWkQwow` |

### PayrollRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Payroll Run by ID | GET | `/payroll-runs/{{id}}/` | `conn_mod_def::GMjW-GGoM_I::IR2Pfd4sTji10gsECXVhug` |
| List Payroll Runs | GET | `/payroll-runs/` | `conn_mod_def::GMjW-GgZFYs::7IDtwOAfQZ2ktRH5Z8SYag` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Filters for a Report | GET | `/reports/{{reportId}}/available-filters/` | `conn_mod_def::GMjW-Gtb_vs::BNrm2upWSVeQNtB7JzOapA` |
| Retrieve a Report | GET | `/reports/{{id}}/` | `conn_mod_def::GMjW-RGsYDM::yBgID581TOur_q2BPaFLWg` |

### ReportRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Report Run | GET | `/report-runs/{{runId}}/` | `conn_mod_def::GMjW-TEKrv0::fZmSgPAeTVqV1duhH8kSyA` |
| Trigger a Report Run | POST | `/report-runs/` | `conn_mod_def::GMjW-VqW0hQ::DJpFX__2SD25lIBxUVzNYQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team by ID | GET | `/teams/{{id}}/` | `conn_mod_def::GMjW-yoRZ64::y_tnlSXnTR-yek6gfF-WAA` |
| List Teams | GET | `/teams/` | `conn_mod_def::GMjW-wff_Ho::CnDyII_6SFWkzc2MtlDkUw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/users/{{id}}/` | `conn_mod_def::GMjW-5J9FlU::elgEvxdaQdy4OH3tOJ2eUA` |
| List Users | GET | `/users/` | `conn_mod_def::GMjW-5emUJw::kS4Td1VjT96VIveXJSUpjQ` |

### Workers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Worker by ID | GET | `/workers/{{id}}/` | `conn_mod_def::GMjW_Hqpg64::bgI02CsZT5yZKmq3TAtLfQ` |
| List Workers | GET | `/workers/` | `conn_mod_def::GMjW_AqgLSA::9KQsmBFZQ-yz-DZqumURMw` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Companies | GET | `/companies/` | `conn_mod_def::GMjW8lehNbk::LIEWYAITTeSsUW5gDMyVkg` |

### CustomObjectField

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Custom Object Field | POST | `/custom-objects/{{customObjectApiName}}/fields/` | `conn_mod_def::GMjW8lwPBKs::IHJFzJ1HQHCyl0SVRZ97NA` |

### CustomObjectsFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Custom Object's Fields | GET | `/custom-objects/{{customObjectApiName}}/fields/` | `conn_mod_def::GMjW8mN49fs::xbI21iZ0T8WYaKeSaKkDOQ` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Fields | GET | `/custom-fields/` | `conn_mod_def::GMjW8n_QkHM::3h3ZtYCPTE-p2rnrekGksA` |

### CustomObjectRecord

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Custom Object Record | PATCH | `/custom-objects/{{customObjectApiName}}/records/{{codrId}}/` | `conn_mod_def::GMjW9ANHi1w::Q3FQ1gN5SyOtbE1RI4kIUA` |

### CustomObject

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Object | GET | `/custom-objects/{{customObjectApiName}}/` | `conn_mod_def::GMjW9H8GRMw::uRVzI5UYTWSS6qXYLXQuXg` |

### PlatformCapabilities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Platform Capabilities | GET | `/platform-capabilities/` | `conn_mod_def::GMjW9IWIxWI::u66AtpioQGCnynASz40fXQ` |

This lists 90 of 102 actions. For anything not here, call `search_one_platform_actions` with platform `rippling`. The full catalog is at https://www.withone.ai/knowledge/rippling.

## When a call fails

The error comes from Rippling, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/rippling

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
