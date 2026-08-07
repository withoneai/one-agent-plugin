---
name: deel
description: Deel is a global payroll and workforce management platform that provides tools and APIs for hiring, onboarding, paying, and managing employees and contractors across countries, allowing businesses to handle international compliance, contracts, and payroll operations from a unified system. Read and write Deel data through One: contracts, eorcontracts, organizationstructures, people, timesheets, workerrelations and more, 398 actions with real parameter documentation. Use whenever the user asks to look something up in Deel, create or update a record there, or build code against the Deel API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: deel
  generated-from: one-knowledge-base
---

# Deel through One

Deel is a global payroll and workforce management platform that provides tools and APIs for hiring, onboarding, paying, and managing employees and contractors across countries, allowing businesses to handle international compliance, contracts, and payroll operations from a unified system.

One exposes Deel through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `deel` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Deel is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Deel account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contracts

| Action | Method | Path | Action id |
|---|---|---|---|
| Equity Withholding Estimate for a Contract | GET | `/rest/v2/contracts/{{contractId}}/equity_withholding_estimate` | `conn_mod_def::GLYwCWYDHvo::rvSXc956R0i0FhUAVa3oaw` |
| Get IC Invoicing Taxes for a Contract | GET | `/rest/v2/contracts/{{contractId}}/ic-invoicing-taxes` | `conn_mod_def::GLYwIc9ZuqU::Hclr8A2XQUypFrZaXQPgxg` |
| Get Worker Invite Link for a Contract | GET | `/rest/v2/contracts/{{contractId}}/invite` | `conn_mod_def::GLYwCUifQog::G9ZEhEStT52jUHsRnGmnzQ` |
| List Contracts | GET | `/rest/v2/contracts` | `conn_mod_def::GLYwCjRuq84::B4ODKg1xQSm80914mfR0rw` |
| Preview a Contract Agreement | GET | `/rest/v2/contracts/{{contractId}}/preview` | `conn_mod_def::GLYwCKR5_JQ::WLUMwdhWRMGxJLVzoJsxUA` |
| Retrieve a Single Contract | GET | `/rest/v2/contracts/{{contractId}}` | `conn_mod_def::GLYwCikFISU::7PN_Dcy_Sy28_snztU5MqA` |
| Retrieve Custom Fields for a Contract | GET | `/rest/v2/contracts/{{contractId}}/custom_fields` | `conn_mod_def::GLYwDOTe1KE::oTk_nJSERMWnc24TGrDRVg` |
| Retrieve Offboarding Attachment for a Contract | GET | `/rest/v2/eor/contracts/{{contractId}}/offboarding/attachments/{{attachmentId}}` | `conn_mod_def::GLYwGItaj1U::jikCB9-TTF-HKlJTTFYjfg` |
| Add External Id to a Contract | PATCH | `/rest/v2/contracts/{{contractId}}` | `conn_mod_def::GLYwCKWM-9Y::ZATt7VauRSSnXVo1aY5joQ` |
| Add Off-Cycle Payment for a Contract | POST | `/rest/v2/contracts/{{contractId}}/off-cycle-payments` | `conn_mod_def::GLYwKC8qvhA::MoudYzxdSvORzeEWA5mxOw` |
| Assign Cost Centers to an Employment Contract | POST | `/rest/v2/contracts/{{contractId}}/cost-centers` | `conn_mod_def::GLYwC5WX4s4::In5oghMXQwaOmTmo6_gEMA` |
| Attach a Document to a Contract | POST | `/rest/v2/contracts/{{contractId}}/documents` | `conn_mod_def::GLYwCEOlTdE::RoiuItRJS2-HkH-WUXy-QA` |

15 more Contracts actions are available through search.

### EorContracts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Contract Document for an EOR Contract | GET | `/rest/v2/eor/contracts/{{contractId}}/documents/{{type}}` | `conn_mod_def::GLYwERIG0Js::xyhxVspwSOeJ0EZ1Ru69FA` |
| Fetch Project Assignment PDF for an EOR Contract | GET | `/rest/v2/eor/contracts/{{contractId}}/project-assignment` | `conn_mod_def::GLYwEc0P2RM::_5Izq1pQRqiDVIH5bBi9fw` |
| List All Amendments for an EOR Contract | GET | `/rest/v2/eor/contracts/{{contractId}}/amendments` | `conn_mod_def::GLYwE3ARiUQ::GFQnMchdSq6B9fR7UIr5yA` |
| Required Information for Employee Termination Using EOR Contract Offboarding | GET | `/rest/v2/eor/contracts/{{contractId}}/offboarding/required-information` | `conn_mod_def::GLYwEccyChM::1PmdoLOqSA2BEZT_LgKIbw` |
| Retrieve EOR Contract Details | GET | `/rest/v2/eor/contracts/{{contractId}}/details` | `conn_mod_def::GLYwFtMv1u8::gcD8UZIWShWkINKPXJc5kQ` |
| Retrieve Restricted Offboarding Dates for an EOR Contract | GET | `/rest/v2/eor/contracts/{{contractId}}/offboarding/restricted-dates` | `conn_mod_def::GLYwF4ycnjY::R2aft9ShRWCVOwrEmqBJUw` |
| View Amendment Information for an EOR Contract | GET | `/rest/v2/eor/contracts/{{contractId}}/amendments/{{amendmentId}}` | `conn_mod_def::GLYwG6p9LIk::I9Ly4TFbRx2qSMP0L1dxvQ` |
| Accept Project Assignment Using EOR Contracts | POST | `/rest/v2/eor/contracts/{{contractId}}/project-assignment/accept` | `conn_mod_def::GLYwDpjSGD0::aMNllEBrRD2CY4_8QdpwFA` |
| Confirm an EOR Contract Amendment | POST | `/rest/v2/eor/contracts/{{contractId}}/amendments/{{amendmentId}}/confirm` | `conn_mod_def::GLYwEFDz18o::BYjDXulbR42T3scYxuCqVg` |
| Employee Information Using EOR Contracts | PATCH | `/rest/v2/eor/contracts/{{contractId}}/employee-information` | `conn_mod_def::GLYwGr9VTcY::NX-_IkSHSNKHVLU-_15zVg` |
| Request Contract Resignation for an EOR Contract | POST | `/rest/v2/eor/contracts/{{contractId}}/offboarding/resignation` | `conn_mod_def::GLYwFO1WImc::nXKxvqk-SX6J2dOPo51H8w` |
| Sign EOR Contract Document | POST | `/rest/v2/eor/contracts/{{contractId}}/documents/{{type}}/sign` | `conn_mod_def::GLYwGT-E-ZA::LXF9bmMtTUWGORMFH780VA` |

2 more EorContracts actions are available through search.

### OrganizationStructures

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch an Organization Structure | GET | `/rest/v2/hris/organization_structures/{{hrisOrgStructureId}}` | `conn_mod_def::GLYwKmBwMYQ::CMryCEk-QG28PWF0YUQz8w` |
| Fetch an Organization Structure by External ID | GET | `/rest/v2/hris/organization_structures/external/{{externalId}}` | `conn_mod_def::GLYwKqycIsw::mg3ezwV_SQiHLqtcahZLfg` |
| Get Organization Structure | GET | `/rest/v2/hris/organization_structures/{{hrisOrgStrId}}` | `conn_mod_def::GLca5g2NmF8::NsahdConRmmdR7uKW-RCHg` |
| Get Organization Structures Using Hris | GET | `/rest/v2/hris/organization_structures` | `conn_mod_def::GLYwKo51RUw::8K5f7Z54TPuMgnOFX8j1gw` |
| Create Organization Structures Using HRIS | POST | `/rest/v2/hris/organization_structures` | `conn_mod_def::GLYwKY1FrWI::rXcq4y0STz6sIK8sCVDaqg` |
| Delete an Organization Structure | DELETE | `/rest/v2/hris/organization_structures/{{hrisOrgStructureId}}` | `conn_mod_def::GLYwKmbf5BI::IxJ0rAXCQSiNndps8d6fgw` |
| Delete an Organization Structure by External ID | DELETE | `/rest/v2/hris/organization_structures/external/{{externalId}}` | `conn_mod_def::GLYwKmT7lz4::lSaQlJrAQm63-0ISGTMYNA` |
| Delete Organization Structure | DELETE | `/rest/v2/hris/organization_structures/{{hrisOrgStrId}}` | `conn_mod_def::GLca5iy5YtM::J5OteqSkRkCqJDDWlBqdiA` |
| Update an HRIS Organization Structure by External ID | PATCH | `/rest/v2/hris/organization_structures/external/{{externalId}}` | `conn_mod_def::GLYwK1EVvtA::r2fDSScWQ9qDWwB-wT2VTw` |
| Update Organization Structure | PATCH | `/rest/v2/hris/organization_structures/{{hrisOrgStrId}}` | `conn_mod_def::GLca5gY2_JQ::1cQaUfFTTCq_Ny09rrdoHA` |
| Update Organization Structures Using Hris | PATCH | `/rest/v2/hris/organization_structures/{{hrisOrgStructureId}}` | `conn_mod_def::GLYwKz9c0rk::EUJFEiLeTu2vXB1GoFmIGA` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Get My Current Personal Profile | GET | `/rest/v2/people/me` | `conn_mod_def::GLYwL3mAR20::vmOnRF_wT0OzXdl89Gg_EQ` |
| Get Personal Information for a Worker | GET | `/rest/v2/people/{{workerId}}/personal` | `conn_mod_def::GLYwL3Khqco::aeElkbKkR6esjkPhu6XpuQ` |
| List People | GET | `/rest/v2/people` | `conn_mod_def::GLYwL7gZ8qM::ymfU7-jjRqiWt8jzJygKSw` |
| Retrieve a Single Person | GET | `/rest/v2/people/{{hrisProfileId}}` | `conn_mod_def::GLYwMFuuVuQ::kBWPiTYRS1yS4yKlKRnmGA` |
| Create Direct Employee | POST | `/rest/v2/people` | `conn_mod_def::GLYwLtD5nbQ::daRRdo1rQUygOt_h5p8QXA` |
| Update Custom Field Value for a Worker | PUT | `/rest/v2/people/{{workerId}}/custom_fields` | `conn_mod_def::GLYwDPs5sO0::7318eJH8Tk6vl1n2LYOH_Q` |
| Update Department for a Person | PUT | `/rest/v2/people/{{id}}/department` | `conn_mod_def::GLYwMJsnqCg::4XjsonMsQVG6SPHkuG4TPw` |
| Update Personal Information for a Worker | PATCH | `/rest/v2/people/{{workerId}}/personal` | `conn_mod_def::GLYwMHyHKqQ::WaV0H4CURqOgHPEg7UDkLQ` |
| Update Personal Information Using People External Personal | PATCH | `/rest/v2/people/external/{{workerId}}/personal` | `conn_mod_def::GLYwMI_qlvg::PFThITs1Rxi0nqOLejEi1Q` |
| Update Working Location for a Person | PUT | `/rest/v2/people/{{id}}/working-location` | `conn_mod_def::GLYwMDM3sdc::HQcU0jMsSqStnn8s_ib__Q` |

### Timesheets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Hourly Report Root Presets | GET | `/rest/v2/timesheets/root-presets` | `conn_mod_def::GLYwMtYghqs::QtSuGkI0Q-67dBw5YVTh7w` |
| List Timesheets | GET | `/rest/v2/timesheets` | `conn_mod_def::GLYwOq5bvp8::q62uD-D9SCeZZgoOYHyGWA` |
| List Timesheets Using Contracts | GET | `/rest/v2/contracts/{{contractId}}/timesheets` | `conn_mod_def::GLYwOtfXdlw::7r6eXrS-TuCT84fI3Jnllg` |
| Retrieve a Timesheet | GET | `/rest/v2/time-tracking/timesheets/{{timesheetId}}` | `conn_mod_def::GLYwOgBsU8s::K2bFPNSTRPC09f7rHtM-AA` |
| Retrieve a Timesheet Entry by ID | GET | `/rest/v2/timesheets/{{id}}` | `conn_mod_def::GLYwOpdMcgQ::JSjV-BesQ_egDLIhyRn5Ng` |
| Create a Timesheet Entry | POST | `/rest/v2/timesheets` | `conn_mod_def::GLYwObuQ8CM::rXFjF2-IQrmUW43HoE-SVw` |
| Delete a Timesheet Entry | DELETE | `/rest/v2/timesheets/{{id}}` | `conn_mod_def::GLYwOokKtN4::i1tal3jMTyukxhQBHOyQcg` |
| Review a Submitted Timesheet | POST | `/rest/v2/time-tracking/timesheets/{{timesheetId}}/review` | `conn_mod_def::GLYwObS1vtY::ME0gOSW-Tp-WmrrEhS8dsg` |
| Review a Timesheet | POST | `/rest/v2/timesheets/{{id}}/reviews` | `conn_mod_def::GLYwOsnGTG0::qx7T9kc5RDC5ndd6BcXZmw` |
| Update a Timesheet Entry | PATCH | `/rest/v2/timesheets/{{id}}` | `conn_mod_def::GLYwO206m_Y::TE5elxTPT1yT6RH3g3bcXg` |

### WorkerRelations

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Worker Relations of an HRIS Profile by External ID | GET | `/rest/v2/hris/worker_relations/profile/external/{{profileId}}` | `conn_mod_def::GLYwPnfcq24::8Kv1yFpoTC6GnQ5Un5K9oQ` |
| List Worker Relations for an HRIS Profile | GET | `/rest/v2/hris/worker_relations/profile/{{hrisProfileOid}}` | `conn_mod_def::GLYwPneNPms::gNHlwvlZTC2GWdlwNRBtZQ` |
| Create Child Worker Relation for an HRIS Profile | PUT | `/rest/v2/hris/worker_relations/profile/{{hrisProfileOid}}/child` | `conn_mod_def::GLYwPRG_cRc::R6KpyG1MTOODGzp2BrzeJA` |
| Create Child Worker Relation Using HRIS Worker Relations Profile External | PUT | `/rest/v2/hris/worker_relations/profile/external/{{profileId}}/child` | `conn_mod_def::GLYwPR8D6Qo::bZ4qFY_MQ12TEo8f-S-rKg` |
| Create Parent Worker Relation for an HRIS Profile | PUT | `/rest/v2/hris/worker_relations/profile/{{hrisProfileOid}}/parent` | `conn_mod_def::GLYwPQ0et38::XvU44iX_TAKXj1r5vkLPuQ` |
| Create Worker Relations Profile External Using Hris Worker Relations | POST | `/rest/v2/hris/worker_relations/profile/external` | `conn_mod_def::GLYwPeuRgT0::53b1IzG1TXq_pjfRiGOJiQ` |
| Delete a Worker Relation by External ID | DELETE | `/rest/v2/hris/worker_relations/profile/external/{{profileId}}` | `conn_mod_def::GLYwPeJH0BQ::vup4_XN3QO22JIOMhaIb6w` |
| Parent Using Hris Worker Relations Profile External | PUT | `/rest/v2/hris/worker_relations/profile/external/{{profileId}}/parent` | `conn_mod_def::GLYwPQMhBNE::-KEvR0fWTbiOHD6j0bBqUw` |

### TimeOffs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Time-Off Requests for an Organization | GET | `/rest/v2/time_offs` | `conn_mod_def::GLYwN4nWVVs::NlHHuzynSYGMnvuXLr8TfA` |
| Cancel a Time Off Request | DELETE | `/rest/v2/time_offs/{{timeOffId}}` | `conn_mod_def::GLYwNbgwel4::OhhoUYe7SH-jEMC0luTAUA` |
| Create Time Off Request | POST | `/rest/v2/time_offs` | `conn_mod_def::GLYwNdc2V2w::Ako4uyYJSWC_u7JyKxdefA` |
| Review Time Off Requests | POST | `/rest/v2/time_offs/review` | `conn_mod_def::GLYwNdEW7W0::eKyckektRu2GoxjAN02oIA` |
| Sync Global Payroll Time Offs Using Time Offs Global Payroll | POST | `/rest/v2/time_offs/global-payroll/sync` | `conn_mod_def::GLYwNcoiFOc::DX3Mp34HQka_ZfkZ0O_MaQ` |
| Update Time-Off Request | PATCH | `/rest/v2/time_offs/{{timeOffId}}` | `conn_mod_def::GLYwN07xoeU::bKSTbMpiSxOmIgG4MW7s9w` |
| Validate Time Off Request | POST | `/rest/v2/time_offs/validate` | `conn_mod_def::GLYwN2gi5u4::IZ4jfncnR_OS2q7T031f4g` |

### WorkerRelationTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Worker Relation Types Using Hris Worker Relations | GET | `/rest/v2/hris/worker_relations/types` | `conn_mod_def::GLYwPo2qcro::acCu9rmUQ-OJ5LY8-MeP5Q` |
| Create Worker Relation Type Using Hris Worker Relations | POST | `/rest/v2/hris/worker_relations/types` | `conn_mod_def::GLYwPbBXk2I::opcnCCxmRpGmyQx1K7h-zw` |
| Delete a Worker Relation Type | DELETE | `/rest/v2/hris/worker_relations/types/{{typeId}}` | `conn_mod_def::GLYwPZ08uGg::hlBQQHg7R7KI00bmrNGU_g` |
| Delete Worker Relation Type by External ID | DELETE | `/rest/v2/hris/worker_relations/types/external/{{externalId}}` | `conn_mod_def::GLYwPnfA-k0::k0u5aoelRUGLV6MzCUQkmA` |
| Update Worker Relation Type | PATCH | `/rest/v2/hris/worker_relations/types/{{typeId}}` | `conn_mod_def::GLYwPo3wZaE::c3uUIc9CSamGE4_vD52o5g` |
| Update Worker Relation Type by External ID | PATCH | `/rest/v2/hris/worker_relations/types/external/{{externalId}}` | `conn_mod_def::GLYwPxyJh9w::pqtI2tKlS0e8WgXuZ2daIw` |

### InvoiceAdjustments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Invoice Adjustment by ID | GET | `/rest/v2/invoice-adjustments/{{id}}` | `conn_mod_def::GLYwJGHi1n4::fT76LdOiQfawONhWcU8X_Q` |
| List Invoice Adjustments | GET | `/rest/v2/invoice-adjustments` | `conn_mod_def::GLYwJHz9ihI::XC0nlIu0RpanUS8g3y4tFw` |
| Create Invoice Adjustments | POST | `/rest/v2/invoice-adjustments` | `conn_mod_def::GLYwJEeBIwo::fNRsGSnhT5O428YarTgltA` |
| Delete Invoice Adjustment | DELETE | `/rest/v2/invoice-adjustments/{{id}}` | `conn_mod_def::GLYwJF1k-3c::IP7FoH6vSr-FSdLgUHLw6Q` |
| Review an Invoice Adjustment | POST | `/rest/v2/invoice-adjustments/{{id}}/reviews` | `conn_mod_def::GLYwJP5jIyg::K_9HhRUBT363QRsPFUsxlA` |
| Update an Invoice Adjustment | PATCH | `/rest/v2/invoice-adjustments/{{id}}` | `conn_mod_def::GLYwJQwud3M::tBhCXsoaRxm1A0MKyWEbQQ` |

### LegalEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Legal Entities | GET | `/rest/v2/legal-entities` | `conn_mod_def::GLYwLAzgpFo::6OJIsGeLRBafXESelqKVUw` |
| Activate 401k Integration for a Legal Entity | POST | `/rest/v2/benefits/legal-entities/{{id}}/benefits/401k/activate` | `conn_mod_def::GLYwMVqXVqU::LON03DTzSFWxnEhGy5phKA` |
| Create Legal Entities | POST | `/rest/v2/legal-entities` | `conn_mod_def::GLYwJbdkwx0::5JRWsZh7TiuhGo478qULDw` |
| Delete a Legal Entity | DELETE | `/rest/v2/legal-entities/{{id}}` | `conn_mod_def::GLYwJmtjZTI::0ou63rGCTMiWczyCCOycwA` |
| Edit a Legal Entity | PATCH | `/rest/v2/legal-entities/{{id}}` | `conn_mod_def::GLYwJmnhe_w::906F5W-9TRmy3TCT-XWKIg` |

### Benefits

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Benefits for Employee | GET | `/rest/v2/eor/worker/benefits` | `conn_mod_def::GLYwFeWkgfk::o34oIvxNQD-4cFVSwvpZfg` |
| Retrieve Benefits Using Eor | GET | `/rest/v2/eor/benefits` | `conn_mod_def::GLYwFjlCgjQ::cZu5kuaQTxuR4cTPW3ZcEQ` |
| Clean Up 401k Plans for a Legal Entity | POST | `/rest/v2/benefits/legal-entities/{{id}}/401k/plans/clean-up` | `conn_mod_def::GLYwMWIvowk::hF5anLeqS1-mGRYgSiSMew` |

2 more Benefits actions are available through search.

This lists 90 of 398 actions. For anything not here, call `search_one_platform_actions` with platform `deel`. The full catalog is at https://www.withone.ai/knowledge/deel.

## When a call fails

The error comes from Deel, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/deel

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
