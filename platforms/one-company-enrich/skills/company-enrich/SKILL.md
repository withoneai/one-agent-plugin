---
name: company-enrich
description: Company Enrich is a data enrichment platform that provides company and person data through APIs, enabling teams to append firmographic details, contact information, and business attributes to records for lead qualification, segmentation, and workflow automation. Read and write Company Enrich data through One: companies, people, companylists, personsearchexportjobs, bulkenrichmentjobs, countries and more, 48 actions with real parameter documentation. Use whenever the user asks to look something up in Company Enrich, create or update a record there, or build code against the Company Enrich API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: company-enrich
  generated-from: one-knowledge-base
---

# Company Enrich through One

Company Enrich is a data enrichment platform that provides company and person data through APIs, enabling teams to append firmographic details, contact information, and business attributes to records for lead qualification, segmentation, and workflow automation.

One exposes Company Enrich through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `company-enrich` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Company Enrich is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Company Enrich account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete Companies by Partial Domain Name | GET | `/companies/autocomplete` | `conn_mod_def::GK9gq0LXkQg::dB1vjQTJTNmzLQ27mwulaw` |
| Enrich a Company by Domain | GET | `/companies/enrich` | `conn_mod_def::GK9gq91u4kg::EKNU2xsVQ4-XUnd5MyRPIw` |
| Get a Company by ID | GET | `/companies` | `conn_mod_def::GK9grWLByNg::tFoO7MlMTdShijPdDocYrw` |
| Batch Enrich Companies | POST | `/companies/enrich/batch` | `conn_mod_def::GK9gq0PeqJg::Zy4lg-K3QmuQHjbOjuEe5g` |
| Count Companies Matching Search Criteria | POST | `/companies/search/count` | `conn_mod_def::GK9grV7vWGA::XPv49IJXRsemNCutkdUDVg` |
| Enrich a Company by Properties | POST | `/companies/enrich` | `conn_mod_def::GK9gq_gfDXA::fYYUlHISRfyV43L_yqX2vw` |
| Find Similar Companies | POST | `/companies/similar` | `conn_mod_def::GK9gr8D_ZrA::Soyjyq6uR3OlM5EwmdWGqA` |
| Preview Company Search Results | POST | `/companies/search/preview` | `conn_mod_def::GK9grVQTg6g::0gGM0ae5RWCZUgstk3c87A` |
| Preview Similar Companies | POST | `/companies/similar/preview` | `conn_mod_def::GK9grkWrnPA::UeKo1r5ZReqgETNl2gqG8Q` |
| Scroll Search Companies | POST | `/companies/search/scroll` | `conn_mod_def::GK9grVgpNuA::AGzwfrZCRVCvMqm7KOxm_w` |
| Scroll Similar Companies | POST | `/companies/similar/scroll` | `conn_mod_def::GK9grlDBpBg::gxj7Wo4jQji_R4Izg-fxPQ` |
| Search Companies | POST | `/companies/search` | `conn_mod_def::GK9grj2J11g::vLgKmyCaQBmN8lNi4SR8UQ` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Person by ID | GET | `/people` | `conn_mod_def::GK9gsrLyYzA::iMIc0XkFTUiHTqBHNAxVkA` |
| Resolve a Person's Work Email | GET | `/people/email` | `conn_mod_def::GK9gsiVd5Vg::ARQeb4GWQrSqe_wPpn-shw` |
| Lookup Person | POST | `/people/lookup` | `conn_mod_def::GK9gsq4rbRA::UMxbjMN7S7mu9UTy1ZO1hg` |
| Preview Search for People | POST | `/people/search/preview` | `conn_mod_def::GK9gsrf2rIg::WXm023ArSNyxLWQIfcjXjA` |
| Search People | POST | `/people/search` | `conn_mod_def::GK9gsrL-iJA::2A8uNF04QdOtwEiBibQ2lA` |

### CompanyLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company List by ID | GET | `/lists/companies/{{id}}` | `conn_mod_def::GK9grM1FTmA::z_DHZfM9RImcVRSgb65tyg` |
| List Company Lists | GET | `/lists/companies` | `conn_mod_def::GK9grIIm0ng::mr_3c7L4SraOfnSRyE_ejg` |
| Create Company List | POST | `/lists/companies` | `conn_mod_def::GK9grMV1pFA::i2jZ-knhQMeP0YBNIA-2zA` |
| Delete a Company List | DELETE | `/lists/companies/{{id}}` | `conn_mod_def::GK9grM1b63A::LJn6xUqTRUaWqiU4U4k6rQ` |
| Update a Company List | PUT | `/lists/companies/{{id}}` | `conn_mod_def::GK9graRWCdA::ttRMFSOOSXml4ZFBDPSq-g` |

### PersonSearchExportJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Person Search Export Job Status | GET | `/people/search/async/{{jobId}}` | `conn_mod_def::GK9gsfqrQyg::faYTRTmrTqaMKFfPyKkseA` |
| List Person Search Export Jobs | GET | `/people/search/async/jobs` | `conn_mod_def::GK9gsiVjsbg::I_86famsQOGXZwxfjmJjkw` |

### BulkEnrichmentJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulk Enrichment Job Status | GET | `/companies/enrich/bulk/{{jobId}}` | `conn_mod_def::GK9gqzbKNXg::8XVAiPtdTgKJ_-6OuOjRmA` |
| List Bulk Enrichment Jobs | GET | `/companies/enrich/bulk/jobs` | `conn_mod_def::GK9gq0m4UvA::zFdPaEj7TeWMNt29yNWA2w` |

### Countries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Country by Code | GET | `/geo/countries/{{countryCode}}` | `conn_mod_def::GK9gsFX2wwg::VI58saAlTb6i45bazSgfsQ` |
| Search Countries | POST | `/geo/countries` | `conn_mod_def::GK9gsGEJ1GA::-Xi66MjoT2Gvu_x9gulFIQ` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Details | GET | `/jobs/{{jobId}}` | `conn_mod_def::GK9gsRvNSsA::d0j5W4ZWS8qeEMvNa1ZXsg` |
| List All Jobs | GET | `/jobs` | `conn_mod_def::GK9gsTZqbtA::gzskb3SQQCqcZD4Fpvzr7Q` |

### BulkEmailEnrichmentJobStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulk Email Enrichment Job Status | GET | `/people/email/bulk/{{jobId}}` | `conn_mod_def::GK9gshNgG1A::XSsxptKQR7GP1DhM-l8Gjw` |

### PeopleSearchExportJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a People Search Export Job | POST | `/people/search/async` | `conn_mod_def::GK9gshdyUAA::iVYbYiqCQ7-86BcmlTJjfg` |

### CompanyEnrichmentJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Bulk Company Enrichment Job | POST | `/companies/enrich/bulk` | `conn_mod_def::GK9gqz-kz3g::Gjqq2_QPQn6EdrKeTqjHEA` |

### CompanyWorkforceInsights

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Workforce Insights | GET | `/companies/workforce` | `conn_mod_def::GK9gq-otoAA::vl08qi4MSLG0qm_cZUBpFg` |

### CompanySearchExportJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Company Search Export Job | POST | `/companies/search/async` | `conn_mod_def::GK9gq-zjPmg::RX4xKUghTP-D5_u_aTMlPA` |

### SearchExportJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Search Export Job's Status | GET | `/companies/search/async/{{jobId}}` | `conn_mod_def::GK9grAAssrA::yfLtLqO6Q8OaOxzsARprmg` |

### ExportJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Export Jobs | GET | `/companies/search/async/jobs` | `conn_mod_def::GK9grMZoGqA::y-g3Rx5kTXiEEYJuZ64USg` |

### SimilarCompanies

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Similar Companies | POST | `/companies/similar/count` | `conn_mod_def::GK9grkcnNLg::1fKJ8hewRhCrIfWjVyhwUg` |

### Cities

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Cities | POST | `/geo/cities` | `conn_mod_def::GK9gsFYCjpA::oaqlPMYdTyy_wP7oSWY5DQ` |

### Regions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Regions | GET | `/geo/regions` | `conn_mod_def::GK9gsGjF_kA::GUrQcQRBRM6bGLF7Ruy36Q` |

### States

| Action | Method | Path | Action id |
|---|---|---|---|
| Search States | POST | `/geo/states` | `conn_mod_def::GK9gsKcGfHA::GkDJMhPVSVOGgpDT6jLsRQ` |

### Keywords

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup Keywords | GET | `/keywords/autocomplete` | `conn_mod_def::GK9gsRvNTqg::Li2W02FTTqykj1ZL7CEPXg` |

### Industries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Industries | GET | `/industries` | `conn_mod_def::GK9gsRvVIpA::X0CIybP_ToyCZ6D92m_aPA` |

### BulkEmailEnrichmentJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Bulk Email Enrichment Job | POST | `/people/email/bulk` | `conn_mod_def::GK9gsXLApUg::2LfyxBSBQI2bP3BY1jDaEw` |

### PeopleSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scroll Through People Search Results | POST | `/people/search/scroll` | `conn_mod_def::GK9gssrlecg::ZORCTh2fQG-IgtcMvb5Vgw` |

### Technologies

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup Technologies | GET | `/technologies/autocomplete` | `conn_mod_def::GK9gs1Sp7HA::yK4BvBOeRqmu4sHHoUkBnA` |

### Positions

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup Positions | GET | `/positions/autocomplete` | `conn_mod_def::GK9gs2smaJg::T-CNgKE6RDGotj11stkBJg` |

### CurrentUserInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User Information | GET | `/me` | `conn_mod_def::GK9gs0B5IYA::EcVK9P57QGWkD6ndTTWX7w` |

## When a call fails

The error comes from Company Enrich, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/company-enrich

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
