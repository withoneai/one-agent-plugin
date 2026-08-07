---
name: acculynx
description: AccuLynx is a roofing business management platform that provides tools for lead tracking, estimating, job management, material ordering, scheduling, and invoicing, allowing roofing contractors and their teams to centralize operations, streamline workflows, and integrate business data across field and office processes. Read and write Acculynx data through One: jobs, contacts, jobcustomfields, states, countries, accounttypes and more, 111 actions with real parameter documentation. Use whenever the user asks to look something up in Acculynx, create or update a record there, or build code against the Acculynx API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: acculynx
  generated-from: one-knowledge-base
---

# Acculynx through One

AccuLynx is a roofing business management platform that provides tools for lead tracking, estimating, job management, material ordering, scheduling, and invoicing, allowing roofing contractors and their teams to centralize operations, streamline workflows, and integrate business data across field and office processes.

One exposes Acculynx through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `acculynx` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Acculynx is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Acculynx account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job's Accounting Integration Status | GET | `/api/v2/jobs/{{jobId}}/accounting/integration-status` | `conn_mod_def::GKshC61EAqg::IcpqZR_HT8-YBYB2DzthQg` |
| Get a Job's Sales Owner | GET | `/api/v2/jobs/{{jobId}}/representatives/sales-owner` | `conn_mod_def::GKshDgzWDPA::yWJk9PzDRGqBohLKqDWiSw` |
| Get Job by Id | GET | `/api/v2/jobs/{{jobId}}` | `conn_mod_def::GKshDOp5xnA::rB-JTv1YR_KrYxzs05bfGA` |
| List Jobs | GET | `/api/v2/jobs` | `conn_mod_def::GKshDwL18Hg::9ktTFSbNRp2aF7PQzmQaJg` |
| Add or Update a Job's A/R Owner | POST | `/api/v2/jobs/{{jobId}}/representatives/ar-owner` | `conn_mod_def::GKshCFd0S9g::DbLdf8HbSoKBr1nYVa_uaQ` |
| Add or Update a Job's Initial Appointment | PUT | `/api/v2/jobs/{{jobId}}/initial-appointment` | `conn_mod_def::GKshCeKtvaA::Z9xwhQ8GSV-kPy4gktS4Nw` |
| Add or Update a Job's Sales Owner | POST | `/api/v2/jobs/{{jobId}}/representatives/sales-owner` | `conn_mod_def::GKshCaY4L7g::NoXVoCobRG-JhfpYJtsbEA` |
| Create Job | POST | `/api/v2/jobs` | `conn_mod_def::GKshCbGQkyg::YtE5dmqTSGKZ8_CzALloNw` |
| Delete a Job's A/R Owner | DELETE | `/api/v2/jobs/{{jobId}}/representatives/ar-owner` | `conn_mod_def::GKshCx4WJ_A::DpzbmqgDS4y1F5P8k2K0nA` |
| Delete a Job's Sales Owner | DELETE | `/api/v2/jobs/{{jobId}}/representatives/sales-owner` | `conn_mod_def::GKshCx0Yeog::59hRrW9dQHG9ACqPOiJE4g` |
| Search Jobs | POST | `/api/v2/jobs/search` | `conn_mod_def::GKshDwr3g-A::OavSFmsfRuqqZPUdsSns8g` |
| Set a Job's Insurance Company | PUT | `/api/v2/jobs/{{jobId}}/insurance/insurance-company` | `conn_mod_def::GKshD9kS5ag::VxrGel9NRM2DSUfqDuzyzg` |

3 more Jobs actions are available through search.

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact by ID | GET | `/api/v2/contacts/{{contactId}}` | `conn_mod_def::GKshBC_wrug::2rs1-PRWSNmQt3BNCl2JnQ` |
| List Contacts | GET | `/api/v2/contacts` | `conn_mod_def::GKshA3urrmA::aDs4oA_9RueSVcKRQJeabA` |
| Add a Contact's Phone Numbers | POST | `/api/v2/contacts/{{contactId}}/phone-numbers` | `conn_mod_def::GKshA3--lsA::HyqRESvDSoG7zL-fVceOgg` |
| Create Contact | POST | `/api/v2/contacts` | `conn_mod_def::GKshA3ocdyg::o9-qEukwT468kqyLE5JXrw` |
| Search Contacts | POST | `/api/v2/contacts/search` | `conn_mod_def::GKshA3-mIQg::pnR8e7oAQ3G_2S_avIQ-ig` |
| Set a Contact Custom Field Value by Contact ID | PUT | `/api/v2/contacts/{{contactId}}/custom-fields/{{customFieldId}}` | `conn_mod_def::GKshBRD-lxA::25MGjlKyRSWq6CZnx9TV8g` |
| Set a Contact's Custom Field Values | PUT | `/api/v2/contacts/{{contactId}}/custom-fields` | `conn_mod_def::GKshBVvpnxg::a0JM9NY8SiS0PiHflYGhsw` |

### JobCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Job Custom Field by ID | GET | `/api/v2/jobs/{{jobId}}/custom-fields/{{customFieldId}}` | `conn_mod_def::GKshD_TuiOA::5Cz6zlvmTNirSrjqrN-RPg` |
| Retrieve a Job's Custom Fields | GET | `/api/v2/jobs/{{jobId}}/custom-fields` | `conn_mod_def::GKshD-bLLjA::h6LQeUB3RPWb0CPe_-dJnA` |
| Set a Job Custom Field Value by ID | PUT | `/api/v2/jobs/{{jobId}}/custom-fields/{{customFieldId}}` | `conn_mod_def::GKshENk_KIg::X0njeksYRyioZyWH7xcjEg` |

### States

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Country's State | GET | `/api/v2/acculynx/countries/{{countryId}}/states/{{stateId}}` | `conn_mod_def::GKsg_l1X-Ig::ugjxdT1ITrmHjxKmSskvUw` |
| Get States for a Country | GET | `/api/v2/acculynx/countries/{{countryId}}/states` | `conn_mod_def::GKsg_nncLBg::UEiT_piYQcmitPLHZh7few` |

### Countries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AccuLynx Countries | GET | `/api/v2/acculynx/countries` | `conn_mod_def::GKsg_nfljDg::w2tXProaQyWJqL3CbUj6DQ` |
| Get an AccuLynx Country | GET | `/api/v2/acculynx/countries/{{countryId}}` | `conn_mod_def::GKsg_mZY5wg::C-oOFyR5T3ONEIuEMf5rAA` |

### AccountTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Active Account Type by ID | GET | `/api/v2/company-settings/location-settings/account-types/{{accountTypeId}}` | `conn_mod_def::GKsg_2uEDHA::d1VLD_YzSyez1y6xWgMvKg` |
| Get Company Active Account Types | GET | `/api/v2/company-settings/location-settings/account-types` | `conn_mod_def::GKshAHI1f9A::B_oH1fjwRfakEVzjNs8IIA` |

### LeadSources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Child Lead Source by Id | GET | `/api/v2/company-settings/leads/lead-sources/{{leadSourceParentId}}/children/{{leadSourceId}}` | `conn_mod_def::GKshAI8utIA::lHSz9RziRBi6PKbvm-StzA` |
| Get Active Lead Sources for a Company | GET | `/api/v2/company-settings/leads/lead-sources` | `conn_mod_def::GKsg_3jKcLg::Ki7vo6D3RdGF8lMIZIpZ_w` |

### ContactPhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact's Phone Number by ID | GET | `/api/v2/contacts/{{contactId}}/phone-numbers/{{phoneId}}` | `conn_mod_def::GKshBIKvrpA::QJR72PzuSce6bd1obRLdEQ` |
| List a Contact's Phone Numbers | GET | `/api/v2/contacts/{{contactId}}/phone-numbers` | `conn_mod_def::GKshBDDpsQA::-YcFTBuRQfmXjZqudMjGWQ` |

### ContactEmailAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact's Email Address by ID | GET | `/api/v2/contacts/{{contactId}}/email-addresses/{{emailId}}` | `conn_mod_def::GKshBD48VgA::Cd0xNUrLTz-dNEGvoaOkyg` |
| Get a Contact's Email Address List | GET | `/api/v2/contacts/{{contactId}}/email-addresses` | `conn_mod_def::GKshBDRDAag::2XhrP08yTcujnw2U_kcktg` |

### ContactCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Contact's Custom Field by ID | GET | `/api/v2/contacts/{{contactId}}/custom-fields/{{customFieldId}}` | `conn_mod_def::GKshBR3sJSg::T4Yn55EOQ4ino6DtNhB85w` |
| Retrieve a Contact's Custom Fields | GET | `/api/v2/contacts/{{contactId}}/custom-fields` | `conn_mod_def::GKshBRw255A::HJSyu2OJTXyY_SSNeVpGWw` |

### Estimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Estimate | GET | `/api/v2/estimates/{{estimateId}}` | `conn_mod_def::GKshBdxGpPg::lomNG0e6SEawgnGEazBSYA` |
| Get Estimates | GET | `/api/v2/estimates` | `conn_mod_def::GKshB0sVCLA::YBC30etTR9ugbifk9z-EvQ` |

### EstimateSections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Estimate's Section | GET | `/api/v2/estimates/{{estimateId}}/sections/{{estimateSectionId}}` | `conn_mod_def::GKshBfbMcHg::KS8t1GWETfu8pz87CcckRQ` |
| Get Estimate Sections | GET | `/api/v2/estimates/{{estimateId}}/sections` | `conn_mod_def::GKshB2iMiWg::dNmr7eiNT1GXAQntkdq1Bg` |

### JobContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job Contact by ID | GET | `/api/v2/jobs/{{jobId}}/contacts/{{jobContactId}}` | `conn_mod_def::GKshCyKzP1A::ZblPDlR9SseZEkehPkYRzA` |
| List a Job's Contacts | GET | `/api/v2/jobs/{{jobId}}/contacts` | `conn_mod_def::GKshCaYvs9g::b4ttslkwR6q9B2SVEgi1bA` |

### JobMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Job Message | POST | `/api/v2/jobs/{{jobId}}/messages` | `conn_mod_def::GKshCnRlFeA::NuXtp4UsQsa0TEPNiUPFdg` |
| Reply to a Job Message | POST | `/api/v2/jobs/{{jobId}}/messages/{{messageId}}/replies` | `conn_mod_def::GKshD54PjTA::VmK4mZKDQFyKOqIhP3bCoQ` |

### JobMilestones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job Milestone by ID | GET | `/api/v2/jobs/{{jobId}}/milestones/{{milestoneId}}` | `conn_mod_def::GKshCyTrk4A::NPrMJLmpSdiPYK0B9JDVIw` |
| Get a Job's Current Milestone | GET | `/api/v2/jobs/{{jobId}}/milestones/current` | `conn_mod_def::GKshDhFt0Qg::oD6tfF86RMaaUFEyxDjBzg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/api/v2/users/{{userId}}` | `conn_mod_def::GKshEtcUGHg::gkvF26DnTTy6FdaEGOBy5w` |
| Get Users | GET | `/api/v2/users` | `conn_mod_def::GKshE-0frSA::TpbqqP23RrmViBPTpJ4fOQ` |

### Supplements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Supplement by ID | GET | `/api/v2/supplements/{{supplementId}}` | `conn_mod_def::GKshEw9FbQA::rVGGs3JJR2GNS4-ogMTa3w` |
| Get All Supplements Across the Company | GET | `/api/v2/supplements` | `conn_mod_def::GKshE1oxqaA::IsILu1OtT0yMcpzr4l9gvg` |

### UnitsOfMeasure

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Units of Measure | GET | `/api/v2/acculynx/units-of-measure` | `conn_mod_def::GKsg_uBIbtA::TECYYvOJTpO7flN8yqHGWA` |

### Calendars

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calendars | GET | `/api/v2/calendars` | `conn_mod_def::GKsg_20Kz5g::nxWJz5E7QSiy9MH9h05RXg` |

### CalendarAppointments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Calendar's Appointments | GET | `/api/v2/calendars/{{calendarId}}/appointments` | `conn_mod_def::GKsg_3PWguA::9eixUivzTkWtEbioGrj0Pw` |

### Appointments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Appointment Details for a Calendar | GET | `/api/v2/calendars/{{calendarId}}/appointments/{{appointmentId}}` | `conn_mod_def::GKsg__ldW3g::8lQ-W53wTqWaJgi6JN0_BA` |

### CompanyCountries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Countries | GET | `/api/v2/company-settings/location-settings/countries` | `conn_mod_def::GKshAIk-s2g::qVxkiAkXR5SyNAkf8lXC6A` |

### CompanyPhotoAndVideoTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Photo and Video Tags | GET | `/api/v2/company-settings/job-file-settings/photo-video-tags` | `conn_mod_def::GKshAI0AKDg::UMDcvJm_T4iYNcy9utdPfw` |

### CompanyLeadSources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Lead Source by ID | GET | `/api/v2/company-settings/leads/lead-sources/{{leadSourceId}}` | `conn_mod_def::GKshANJlM8g::tPqCM7SBRmCmZMcHPzRkuQ` |

### CompanySettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Settings | GET | `/api/v2/company-settings` | `conn_mod_def::GKshAVoeq6A::B_c8frcFRtWyoGE43FNVRw` |

### CompanyCountryStates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Country States | GET | `/api/v2/company-settings/location-settings/countries/{{countryId}}/states` | `conn_mod_def::GKshAWUhhKA::pFI5Fo_8QJauJtKDgvHqVQ` |

### InsuranceCompanies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Insurance Companies | GET | `/api/v2/company-settings/job-file-settings/insurance-companies` | `conn_mod_def::GKshAWYHbBg::DfP1VHTwQLWzSvs69A27qw` |

### CompanyDocumentFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Document Folders | GET | `/api/v2/company-settings/job-file-settings/document-folders` | `conn_mod_def::GKshAXBK1Ug::mH1EhBmbTNiyCPT6BUWKsw` |

### CompanyCustomFieldDefinitions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Custom Field Definitions | GET | `/api/v2/company-settings/custom-fields` | `conn_mod_def::GKshAXBgSXg::NFJuRCquQriA3OdzulDWgw` |

### WorkflowMilestones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Workflow Milestones | GET | `/api/v2/company-settings/job-file-settings/workflow-milestones` | `conn_mod_def::GKshAfWgykA::gyNtd7O1TjmQhCiXA5lpkA` |

### CompanyJobCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Job Categories | GET | `/api/v2/company-settings/job-file-settings/job-categories` | `conn_mod_def::GKshAfqX6IA::eEDPh04PQ8GML1d2_iGPJA` |

### WorkflowMilestoneStatuses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Statuses for a Workflow Milestone | GET | `/api/v2/company-settings/job-file-settings/workflow-milestones/{{milestone}}/statuses` | `conn_mod_def::GKshAf50jkA::KpGv69QNTzKsIFJIvBMHMw` |

### CompanyTradeTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Trade Types | GET | `/api/v2/company-settings/job-file-settings/trade-types` | `conn_mod_def::GKshAl9C8zg::9eMdN5zyTcSC_k1T1sZ2NQ` |

### WorkTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Work Types | GET | `/api/v2/company-settings/job-file-settings/work-types` | `conn_mod_def::GKshAu0LAEg::86IGvVdsSOiHv1_y_am1XA` |

### ContactLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Contact Log | POST | `/api/v2/contacts/{{contactId}}/logs` | `conn_mod_def::GKshA6RZCrA::AtInsXl1QReFFNbOAvCQXw` |

### ContactTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Types | GET | `/api/v2/contacts/contact-types` | `conn_mod_def::GKshBTqJIHg::H6oQxnJKSauq7Vx2hT03hw` |

### EstimateSectionItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Estimate Section Item | GET | `/api/v2/estimates/{{estimateId}}/sections/{{estimateSectionId}}/items/{{estimateItemId}}` | `conn_mod_def::GKshBea0w8A::0UEBLEa7R8eLBy6p_vIUZA` |

### Diagnostics

| Action | Method | Path | Action id |
|---|---|---|---|
| Check API Server Responsiveness | GET | `/api/v2/diagnostics/ping` | `conn_mod_def::GKshBfCGpnA::HsOvMm5yTYWhNsfmeZpnjg` |

### EstimateSectionsItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Estimate Section's Items | GET | `/api/v2/estimates/{{estimateId}}/sections/{{estimateSectionId}}/items` | `conn_mod_def::GKshBrR_MuA::Eom2E9AkRBKN_uw2yIu9BQ` |

### FinancialsWorksheetItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Worksheet Item for Financials | POST | `/api/v2/financials/{{financialsId}}/worksheet/items` | `conn_mod_def::GKshBz6rb9g::TxhZ7TasRYCTUV6IERGxxg` |

### FinancialAmendments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Financial Amendment by ID | GET | `/api/v2/financials/{{financialsId}}/amendments/{{financialsAmendmentId}}` | `conn_mod_def::GKshB0yqkRg::7jyKo0a5TSKecp7ArejjZA` |

### FinancialsAmendments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Financial's Amendments | GET | `/api/v2/financials/{{financialsId}}/amendments` | `conn_mod_def::GKshB8lLG5g::JZL_M1b0RD-ckKbq7DSdHw` |

### Financials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Financials by Financial ID | GET | `/api/v2/financials/{{financialsId}}` | `conn_mod_def::GKshCHMnVIg::gCBrN2dnQBOhdvNasXmIhg` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice | GET | `/api/v2/invoices/{{invoiceId}}` | `conn_mod_def::GKshCKucJmg::jo8ztpD3STqnR4I3sxP0pw` |

### FinancialsWorksheet

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Financial's Worksheet | GET | `/api/v2/financials/{{financialsId}}/worksheet` | `conn_mod_def::GKshCO8EkvA::BWOxy_B9SDuwMmk_gOkNSA` |

### JobDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Job Document | POST | `/api/v2/jobs/{{jobId}}/documents` | `conn_mod_def::GKshCRQoxJg::_9CjVG_BQbmQbR0gd2hvRQ` |

### MeasurementsOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a New Measurements Order for a Job | POST | `/api/v2/jobs/{{jobId}}/measurements/files` | `conn_mod_def::GKshCaqWB7A::b_nEjEG1QCSF0uwyRiDNFQ` |

### JobPaymentPaid

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Job Payment Paid | POST | `/api/v2/jobs/{{jobId}}/payments/paid` | `conn_mod_def::GKshCn41cfA::GrR9QgIXTEm6nOplML_UWA` |

### PaymentAdditionalJobExpenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Payment Additional Job Expenses for a Job | POST | `/api/v2/jobs/{{jobId}}/payments/expense` | `conn_mod_def::GKshCn48cug::dnszOIqcShW6A-AS3Fo-3g` |

### ManualMeasurements

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Manual Measurements for a Job | POST | `/api/v2/jobs/{{jobId}}/measurements` | `conn_mod_def::GKshCoTy_Dg::t-3xFUVETX-Bk-iFLpRctw` |

### PaymentsReceived

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Payment Received for a Job | POST | `/api/v2/jobs/{{jobId}}/payments/received` | `conn_mod_def::GKshConn2Fg::t3BrJm32QO2XsOV5-_wxoQ` |

### JobMilestoneStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job Milestone Status by ID | GET | `/api/v2/jobs/{{jobId}}/milestones/{{milestoneId}}/status/{{statusId}}` | `conn_mod_def::GKshCxosYtA::IqPIA0gVRvuIbQwUjcQ1qw` |

### JobEstimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job's Estimates | GET | `/api/v2/jobs/{{jobId}}/estimates` | `conn_mod_def::GKshC61B1BA::H3h4YifgRAaXoLyH8Xqvjg` |

### JobExternalReferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job External References | GET | `/api/v2/jobs/external-references` | `conn_mod_def::GKshC7FBvSg::lxHwBQ3BQ_mA0tElLSQZNQ` |

### JobArOwner

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job's A/R Owner | GET | `/api/v2/jobs/{{jobId}}/representatives/ar-owner` | `conn_mod_def::GKshC7hkGAg::pcB5vF74T-uP7OQZwOJVBQ` |

### JobCompanyRepresentative

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job's Company Representative | GET | `/api/v2/jobs/{{jobId}}/representatives/company` | `conn_mod_def::GKshDEwv5OA::4PIOS-UpRZi9OCjarbURvA` |

### JobFinancials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job's Financials | GET | `/api/v2/jobs/{{jobId}}/financials` | `conn_mod_def::GKshDNRPF7A::0fmjotRhRWuY39zrVcJ8Lw` |

This lists 90 of 111 actions. For anything not here, call `search_one_platform_actions` with platform `acculynx`. The full catalog is at https://www.withone.ai/knowledge/acculynx.

## When a call fails

The error comes from Acculynx, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/acculynx

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
