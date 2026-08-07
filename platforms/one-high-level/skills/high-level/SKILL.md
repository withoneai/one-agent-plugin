---
name: high-level
description: HighLevel is an all-in-one sales and marketing automation platform that helps agencies and businesses manage CRM, funnels, messaging, bookings, and campaigns from a single system, with extensible integrations via its marketplace. Read and write HighLevel data through One: contacts, invoices, customfields, opportunities, products, locations and more, 413 actions with real parameter documentation. Use whenever the user asks to look something up in HighLevel, create or update a record there, or build code against the HighLevel API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: high-level
  generated-from: one-knowledge-base
---

# HighLevel through One

HighLevel is an all-in-one sales and marketing automation platform that helps agencies and businesses manage CRM, funnels, messaging, bookings, and campaigns from a single system, with extensible integrations via its marketplace.

One exposes HighLevel through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `high-level` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm HighLevel is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real HighLevel account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/contacts/{{contactId}}` | `conn_mod_def::GJ32M81x0Ck::Q5BePD-TT2iurnnJYjqQSA` |
| Get Contacts by Business ID | GET | `/contacts/business/{{businessId}}` | `conn_mod_def::GJ32NPD3d4k::TaLLw_NiRxWcQsQD5satSA` |
| Get Duplicate Contact (Search for Duplicates) | GET | `/contacts/search/duplicate` | `conn_mod_def::GJ32NYBDV9Y::JABucLBJRwSd9HLGXvHimQ` |
| List Contacts (Deprecated) | GET | `/contacts/` | `conn_mod_def::GJ32NGnVevc::7_cgGXfZQXKtGvdQNGv-VA` |
| Add a Contact to a Campaign | POST | `/contacts/{{contactId}}/campaigns/{{campaignId}}` | `conn_mod_def::GJ32K3F8Daw::chwSGTKqTjqK9PelXIVUgQ` |
| Add Followers to a Contact | POST | `/contacts/{{contactId}}/followers` | `conn_mod_def::GJ32LTD5iis::5pEBhx27QVyroGwf5H9MUQ` |
| Add Tags to a Contact | POST | `/contacts/{{contactId}}/tags` | `conn_mod_def::GJ32Lb0gHIo::bszvcB22S4yM1gh2LFjB5g` |
| Add/Remove Contacts From Business (Bulk) | POST | `/contacts/bulk/business` | `conn_mod_def::GJ32LjgDBYc::UZ9oKnHXTJSGS38v_yqJzA` |
| Create Contact | POST | `/contacts/` | `conn_mod_def::GJ32LrolxcI::_QyzIkbyRIqRieXizb_AdQ` |
| Delete a Contact | DELETE | `/contacts/{{contactId}}` | `conn_mod_def::GJ32MDavC6I::91InD8qXQzWvPAv9yypDOg` |
| Delete a Contact from a Workflow | DELETE | `/contacts/{{contactId}}/workflow/{{workflowId}}` | `conn_mod_def::GJ32ML8yu74::m7l9gqXgQvuhNTxvQcN_Hg` |
| Remove a Contact From Every Campaign | DELETE | `/contacts/{{contactId}}/campaigns/removeAll` | `conn_mod_def::GJ32N2_VP1o::8OaM5q9VTKuhnIyanhQEHg` |

7 more Contacts actions are available through search.

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate an Estimate Number for a Location | GET | `/invoices/estimate/number/generate` | `conn_mod_def::GJ32Xw4HcyE::6CJXer1HSfakeevT4jNewQ` |
| Generate an Invoice Number for a Location | GET | `/invoices/generate-invoice-number` | `conn_mod_def::GJ32X5BOEI0::FpyQ3FoSSmGbZWdUC8P-3g` |
| Get an Invoice | GET | `/invoices/{{invoiceId}}` | `conn_mod_def::GJ32YREW5HI::l3tMSCZIQ4WZRCoDbxy47A` |
| List Invoices | GET | `/invoices/` | `conn_mod_def::GJ32YuVpXnM::Z1Ata4M9SKqV1jPJ9AJQGA` |
| Cancel a Scheduled Invoice (by Schedule ID) | POST | `/invoices/schedule/{{scheduleId}}/cancel` | `conn_mod_def::GJ32V7WoaRM::h8m9RO5bTdWtpEKyck6eVQ` |
| Create an Invoice from an Estimate | POST | `/invoices/estimate/{{estimateId}}/invoice` | `conn_mod_def::GJ32Weoe2Y4::KSiXHzGASg-6uNefr_CDFg` |
| Create Invoice | POST | `/invoices/` | `conn_mod_def::GJ32WTxcozw::jL73dSvSTPW8dEk7-rH-Rw` |
| Create or Update a Text2Pay Invoice | POST | `/invoices/text2pay` | `conn_mod_def::GJ32WDwWYgM::Uy7jBs4xSwqqhL2t6itzgg` |
| Delete an Invoice | DELETE | `/invoices/{{invoiceId}}` | `conn_mod_def::GJ32XS2UYaY::H7MU7z6WSbKv6jplUvetbA` |
| Record a Manual Payment for an Invoice | POST | `/invoices/{{invoiceId}}/record-payment` | `conn_mod_def::GJ32Ze55xBY::97OtwPTwQLqlGCFYyL02qA` |
| Send an Invoice (by Invoice ID) | POST | `/invoices/{{invoiceId}}/send` | `conn_mod_def::GJ32Z3UaRns::2EuujccfSY-NFaAnxQwDBg` |
| Update an Invoice by ID | PUT | `/invoices/{{invoiceId}}` | `conn_mod_def::GJ32aZ_fQFY::NLWn1QdGTk2XqffEmnlhrQ` |

3 more Invoices actions are available through search.

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field / Folder by ID | GET | `/custom-fields/{{id}}` | `conn_mod_def::GJ32SYSmilw::RY19XQVlQuOooxMuq8dzbA` |
| Get a Location’s Custom Field | GET | `/locations/{{locationId}}/customFields/{{id}}` | `conn_mod_def::GJ32eGP9L9Y::jbdpIDHrQc-0ZRhG0t6sqg` |
| Get Custom Fields for an Object (by Object Key) | GET | `/custom-fields/object-key/{{objectKey}}` | `conn_mod_def::GJ32ShTho9s::E_-2wJ1IR5mmLRZbGhicBg` |
| List a Location’s Custom Fields | GET | `/locations/{{locationId}}/customFields` | `conn_mod_def::GJ32ePi4ODU::hVm1sUWjQ3W9s9T-Mhpj4g` |
| Create a Location Custom Field | POST | `/locations/{{locationId}}/customFields` | `conn_mod_def::GJ32cXC0pQE::s5djtR-yQqecXiw9eorWJA` |
| Create Custom Field (Custom Objects / Company) | POST | `/custom-fields/` | `conn_mod_def::GJ32R5Bqko8::4DpZLlj_Q_KdnaECb-Nzzw` |
| Delete a Custom Field by ID | DELETE | `/custom-fields/{{id}}` | `conn_mod_def::GJ32SIF9-Gc::x6BvMpqlTh2IRTgBLn-ATQ` |
| Delete a Location’s Custom Field | DELETE | `/locations/{{locationId}}/customFields/{{id}}` | `conn_mod_def::GJ32dHPSxVI::YMmoZq0DQ425X-3oi57j6w` |
| Update a Custom Field by ID | PUT | `/custom-fields/{{id}}` | `conn_mod_def::GJ32So0d740::nF-obpVQTxmCDMOOJpje6w` |
| Update a Location’s Custom Field | PUT | `/locations/{{locationId}}/customFields/{{id}}` | `conn_mod_def::GJ32fmVWbu4::NYD-CsAFRr-qumAHao6gyw` |
| Upload Files to a Location’s Custom Fields | POST | `/locations/{{locationId}}/customFields/upload` | `conn_mod_def::GJ32gJlUmp4::HXhCE1JcQu27CKZSxCOYdQ` |

### Opportunities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Opportunity | GET | `/opportunities/{{id}}` | `conn_mod_def::GJ32kIwIhPg::4husGHAiQcyySABFzeB7TA` |
| Search Opportunities (by Location) | GET | `/opportunities/search` | `conn_mod_def::GJ32kpIUOnI::wnkEggEKQluDQ2AAMp6wiw` |
| Add Followers to an Opportunity | POST | `/opportunities/{{id}}/followers` | `conn_mod_def::GJ32jyKUCAk::5Fkm1tu6T--ojyU-vbEPhg` |
| Create an Opportunity | POST | `/opportunities/` | `conn_mod_def::GJ32j59epO0::0ZPWdCEzTZWN3FMnuiOz_Q` |
| Delete an Opportunity | DELETE | `/opportunities/{{id}}` | `conn_mod_def::GJ32kBNBUT0::9hUMsqN3QTOO1Mo6IdTiPA` |
| Remove Followers from an Opportunity | DELETE | `/opportunities/{{id}}/followers` | `conn_mod_def::GJ32kZXBe9Q::gm13tLF_TDm0o-NIZdIJeQ` |
| Update an Opportunity | PUT | `/opportunities/{{id}}` | `conn_mod_def::GJ32kxpaW44::qmWmy0jCThSNeeu_2cF5RA` |
| Update an Opportunity’s Status | PUT | `/opportunities/{{id}}/status` | `conn_mod_def::GJ32k6rceIA::hoZzOAYESZu9qjFM5exYkQ` |
| Upsert an Opportunity | POST | `/opportunities/upsert` | `conn_mod_def::GJ32lDZwVWA::K4GS4Of-SSOi4je7D89kNw` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Product by ID | GET | `/products/{{productId}}` | `conn_mod_def::GJ32rQiWmfY::4NSpMZ-yQcmsyy-2MV7_lw` |
| List Products | GET | `/products/` | `conn_mod_def::GJ32ruwY0O4::n4dSuEysQ4GM45-xw7XkLA` |
| Bulk Edit Products and Prices | POST | `/products/bulk-update/edit` | `conn_mod_def::GJ32pKCmTAU::YpQA_nxST7-RghYi99AgSw` |
| Bulk Update Products | POST | `/products/bulk-update` | `conn_mod_def::GJ32pTGeWWw::w8CJ7fr9QISvMw8G-ii7Tg` |
| Create Product | POST | `/products/` | `conn_mod_def::GJ32pmDBkbc::nzHOsokPQRCpKLvucoCfJg` |
| Delete Product by ID | DELETE | `/products/{{productId}}` | `conn_mod_def::GJ32p-UDiZE::9YCVeoFbSW6kGvNZnCq3xA` |
| Update a Product by ID | PUT | `/products/{{productId}}` | `conn_mod_def::GJ32sHOtVEo::JDMsU2AnTeuoUZ-xDguryg` |
| Update a Store’s Product Display Priorities | POST | `/products/store/{{storeId}}/priority` | `conn_mod_def::GJ32sZFtB7Q::N2gjDTq4QY6blYWzq8dd8g` |
| Update a Store’s Product Inclusion Status | POST | `/products/store/{{storeId}}` | `conn_mod_def::GJ32pBstYeY::WnYrVmhLQsivr0k7T5i72A` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sub-Account (Location) by ID | GET | `/locations/{{locationId}}` | `conn_mod_def::GJ32ewjbqRw::7htUPgjxQ0Cuu33X40lMMw` |
| Get Locations by Stripe Customer or Subscription ID (Company Scoped) | GET | `/saas/locations` | `conn_mod_def::GJ32u8h2Tag::JpyEjxFFRiCgTaTq1sInGg` |
| List Locations by Stripe Customer or Subscription (Company Scoped) | GET | `/saas-api/public-api/locations` | `conn_mod_def::GJ32uzWtC80::2nlem28GSYKmcxIoB8AzFg` |
| Search Locations (Sub-Accounts) | GET | `/locations/search` | `conn_mod_def::GJ32fU5V6eU::iTNI6ctyT9uVL9BmJqxzRw` |
| Create a Sub-Account (Location) | POST | `/locations/` | `conn_mod_def::GJ32cvF_eSQ::T8kQT6e0QX6Ve9ni0yjM_A` |
| Delete a Sub-Account (Location) | DELETE | `/locations/{{locationId}}` | `conn_mod_def::GJ32djuk3Co::H50FlyqgQQ-Esel1IL25aw` |
| Pause a Location (Deprecated) | POST | `/saas-api/public-api/pause/{{locationId}}` | `conn_mod_def::GJ32vnyDMOQ::61-S4SuoQBeu9Sv8RXNu7Q` |
| Update a Sub-Account (Location) | PUT | `/locations/{{locationId}}` | `conn_mod_def::GJ32fLnlj0c::qB1-lqhJRfKOOQArOaPj7Q` |

### Associations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Association by ID | GET | `/associations/{{associationId}}` | `conn_mod_def::GJ32DubHlUo::NL9A4hPMQvawPrYNWqjMeQ` |
| Get an Association by Object Key | GET | `/associations/objectKey/{{objectKey}}` | `conn_mod_def::GJ32D3CYMRA::8nnAKbkZTHGe3HEdJYyq_A` |
| Get an Association Key by Key Name | GET | `/associations/key/{{keyName}}` | `conn_mod_def::GJ32EA2QIR0::6aEei1YuReqN6og94amFHA` |
| List Associations for a Location (Sub-account) | GET | `/associations/` | `conn_mod_def::GJ32DciATio::1qc7tc7xRUGo4mXOHYrz2Q` |
| Create Association (Contacts ↔ Contacts / Contacts ↔ Custom Objects) | POST | `/associations/` | `conn_mod_def::GJ32C6pc0p4::ujGgBoHTRe6jAsP09D0-Fw` |
| Delete a User-Defined Association by ID | DELETE | `/associations/{{associationId}}` | `conn_mod_def::GJ32DLTBU0E::_fQdrDH1Rt2V0VGTh1O4IA` |
| Update an Association by ID | PUT | `/associations/{{associationId}}` | `conn_mod_def::GJ32EIvBNBY::y2M-okjZRbassMqvZDPYXA` |

### InvoiceTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice Template | GET | `/invoices/template/{{templateId}}` | `conn_mod_def::GJ32YJJ0owg::PpY1PHTbRoGTzCRrRm94KQ` |
| List Invoice Templates | GET | `/invoices/template` | `conn_mod_def::GJ32ZE-F2R4::qQ4O0GnOQ-i3wZ57twjdFw` |
| Create an Invoice Template | POST | `/invoices/template` | `conn_mod_def::GJ32W5haBNc::Wq7NwRj-RzOO4-IQSS1CKg` |
| Delete an Invoice Template | DELETE | `/invoices/template/{{templateId}}` | `conn_mod_def::GJ32Xiyruns::YM0LLONlQ8WOI_7Z-6GATw` |
| Update an Invoice Template | PUT | `/invoices/template/{{templateId}}` | `conn_mod_def::GJ32bDZAXEg::vvLa9qFBSWGGEuWFEW0Ztw` |
| Update an Invoice Template’s Late Fees Configuration | PATCH | `/invoices/template/{{templateId}}/late-fees-configuration` | `conn_mod_def::GJ32bNEcqpg::L3Tt8rT7Tv-HCddDb7IqEQ` |
| Update an Invoice Template’s Payment Methods Configuration | PATCH | `/invoices/template/{{templateId}}/payment-methods-configuration` | `conn_mod_def::GJ32bWRerPw::8jQ9dAxzSiOs9H7pK3B1Ig` |

### Saas

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Disable SaaS for a Company’s Locations | POST | `/saas/bulk-disable-saas/{{companyId}}` | `conn_mod_def::GJ32t1gPHN0::9nDPuVr2S-SRVhjPg9_-_g` |
| Bulk Disable SaaS for a Company’s Locations (Deprecated) | POST | `/saas-api/public-api/bulk-disable-saas/{{companyId}}` | `conn_mod_def::GJ32ttc-5fQ::ylFlY4V8QrOp2zWsIS0d7Q` |
| Bulk Enable SaaS for a Company | POST | `/saas/bulk-enable-saas/{{companyId}}` | `conn_mod_def::GJ32tjOWgw4::QNLh1KVVSFCtDDvkw4Y9Sg` |
| Bulk Enable SaaS for a Company (Deprecated) | POST | `/saas-api/public-api/bulk-enable-saas/{{companyId}}` | `conn_mod_def::GJ32tbQAZ94::JWN322k8SImUsBYjdZrp_A` |
| Enable SaaS for a Sub-Account (Location) | POST | `/saas-api/public-api/enable-saas/{{locationId}}` | `conn_mod_def::GJ32t969-6c::FYzinazjTaSDomJHRJ2xVg` |
| Enable SaaS for a Sub-Account (Location) | POST | `/saas/enable-saas/{{locationId}}` | `conn_mod_def::GJ32uG8JRXw::Dy-I6TQiQLS8mydD5WuYAQ` |
| Pause a Location (Sub-Account) | POST | `/saas/pause/{{locationId}}` | `conn_mod_def::GJ32vvva2UQ::9mAwWXUWTqipoKnMXb8oSw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/users/{{userId}}` | `conn_mod_def::GJ327UUtl18::rEtrKTmlSFe9X0LWKpTshQ` |
| Get Users by Location | GET | `/users/` | `conn_mod_def::GJ327dgk3PY::oz4p75CVT1WjZ0Vm1hlHZw` |
| Search Users (in a Company) | GET | `/users/search` | `conn_mod_def::GJ327pEcV84::PiBoLzA5SYuF4inKidqABw` |
| Create User | POST | `/users/` | `conn_mod_def::GJ326mg89uQ::jgYhEaWsTrGuAgu9jp52Yw` |
| Delete a User | DELETE | `/users/{{userId}}` | `conn_mod_def::GJ326uN-p7k::5atR0hM7SKCxI8Mna8iQcQ` |
| Filter Users by Email (Company Scoped) | POST | `/users/search/filter-by-email` | `conn_mod_def::GJ3262xZe-Q::l8n5XGVmSTucYFuMzDE-uw` |
| Update a User | PUT | `/users/{{userId}}` | `conn_mod_def::GJ3270EAokA::FMqTZyUhRImhO6SBHZFcfg` |

### InvoiceSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice Schedule | GET | `/invoices/schedule/{{scheduleId}}` | `conn_mod_def::GJ32YBuyJqs::03pQPJapQ8O5g3aUD2bybw` |

5 more InvoiceSchedules actions are available through search.

This lists 90 of 413 actions. For anything not here, call `search_one_platform_actions` with platform `high-level`. The full catalog is at https://www.withone.ai/knowledge/high-level.

## When a call fails

The error comes from HighLevel, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/high-level

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
