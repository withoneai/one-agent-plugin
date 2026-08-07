---
name: omnisend
description: Omnisend is a marketing automation platform for ecommerce businesses that provides email, SMS, and push notification tools, along with customer segmentation, workflow automation, and campaign analytics, allowing merchants to run personalized multichannel marketing and improve customer engagement and sales. Read and write Omnisend data through One: campaigns, automations, contacts, emailtemplates, universallayouts, images and more, 77 actions with real parameter documentation. Use whenever the user asks to look something up in Omnisend, create or update a record there, or build code against the Omnisend API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: omnisend
  generated-from: one-knowledge-base
---

# Omnisend through One

Omnisend is a marketing automation platform for ecommerce businesses that provides email, SMS, and push notification tools, along with customer segmentation, workflow automation, and campaign analytics, allowing merchants to run personalized multichannel marketing and improve customer engagement and sales.

One exposes Omnisend through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `omnisend` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Omnisend is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Omnisend account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign by ID | GET | `/api/campaigns/{{id}}` | `conn_mod_def::GL4lF1ndMZg::WEkc6BQSRSSKBuNjpZYL-w` |
| Get UTM Using Campaigns | GET | `/api/campaigns/{{id}}/utm` | `conn_mod_def::GL4lF2YNmdA::J8zSILy_Qt2xCvxt0OhfEg` |
| List Campaigns | GET | `/api/campaigns` | `conn_mod_def::GL4lF4oemkA::VT11N19lSEuxb5fFnMMIIw` |
| Cancel Campaign | POST | `/api/campaigns/{{id}}/cancel` | `conn_mod_def::GL4lFtbokOg::1tcFUETfSM-VK0B4ZCUh1g` |
| Copy Campaign for a Campaign | POST | `/api/campaigns/{{id}}/copy` | `conn_mod_def::GL4lFvCEXhA::T1qxG760RDKNxBfznoh4ew` |
| Create Campaign | POST | `/api/campaigns` | `conn_mod_def::GL4lF1w8jfg::hEIsIi8-TtmF3fVCMXduaw` |
| Delete a Campaign | DELETE | `/api/campaigns/{{id}}` | `conn_mod_def::GL4lF1XX3cg::0nJ0Uo80QV2PVwHyMCAS_A` |
| Resume a Campaign's A/B Test | POST | `/api/campaigns/{{id}}/ab-test/resume` | `conn_mod_def::GL4lF_Jczjg::K4jOjkB5SpiyI6lO1rxZ8Q` |
| Select A/B Test Winner for a Campaign | POST | `/api/campaigns/{{id}}/ab-test/winner` | `conn_mod_def::GL4lF_NPkqg::czpLB1RFQxaDxYi-p0FPeA` |
| Send Campaign | POST | `/api/campaigns/{{id}}/send` | `conn_mod_def::GL4lF-4BduA::TI9SZHo1SfyAGKLpvgpbDg` |
| Stop A/B Test for a Campaign | POST | `/api/campaigns/{{id}}/ab-test/stop` | `conn_mod_def::GL4lF-7YFEg::2cwpiYJAR8erKhQoyYIhNA` |
| Update a Campaign | PATCH | `/api/campaigns/{{id}}` | `conn_mod_def::GL4lF_ty4sg::z90PgsJ9SUmiMwzk4YcT3Q` |

1 more Campaigns actions are available through search.

### Automations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Automation Workflow by ID | GET | `/api/automations/{{id}}` | `conn_mod_def::GL4lFTqK-9g::lZ0LnoG5TlOtX-HfdRd7ZA` |
| Get UTM Tags for an Automation Block | GET | `/api/automations/{{id}}/blocks/{{blockId}}/utm` | `conn_mod_def::GL4lFTp3rnA::sqfAnJUQSF2nEVfhrkGnTA` |
| Get UTM Using Automations | GET | `/api/automations/{{id}}/utm` | `conn_mod_def::GL4lFTIz-Vg::WmXIu-HbSwiGYL-Sjn2wPg` |
| List Automation Workflows | GET | `/api/automations` | `conn_mod_def::GL4lFWPJrzA::CYDIxYJeQyWQ7PLjG1kyVw` |
| Copy an Automation Workflow | POST | `/api/automations/{{id}}/copy` | `conn_mod_def::GL4lFKyPlkA::Vg8W3OTaRfq5V_gVXGgxqA` |
| Create Automation Workflow | POST | `/api/automations` | `conn_mod_def::GL4lFMkdbpA::gF-OjBFyQciZAlrheVD7dA` |
| Delete an Automation Workflow | DELETE | `/api/automations/{{id}}` | `conn_mod_def::GL4lFKxeunA::chjjSsN_RDCKc2RQRQDooQ` |
| Disable an Automation Workflow | POST | `/api/automations/{{id}}/disable` | `conn_mod_def::GL4lFLbn9qA::nctpGuXYROmVUp9ZHvhbeQ` |
| Enable Automation Workflow | POST | `/api/automations/{{id}}/enable` | `conn_mod_def::GL4lFLac_zg::BNxIT6QKTjCzHAes7K4Aew` |
| Patch an Automation Workflow | PATCH | `/api/automations/{{id}}` | `conn_mod_def::GL4lFgjFxLA::iALaf0vkS5igHimhpovoYg` |
| Replace Automation Workflow Blocks | PUT | `/api/automations/{{id}}/blocks` | `conn_mod_def::GL4lFn9Zhug::JF4wcissRcWzXDcDCgqTVw` |
| Update UTM Tags Using Automations Blocks | PUT | `/api/automations/{{id}}/blocks/{{blockId}}/utm` | `conn_mod_def::GL4lFnH841A::LeBBBGakRwWwNSfW5Rf_Kw` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact | GET | `/api/contacts/{{id}}` | `conn_mod_def::GL4lGF5p7FA::WiADNgDXTcWqmM7f8K64AA` |
| List Contacts | GET | `/api/contacts` | `conn_mod_def::GL4lGOQ7y_A::KDOBJxYQQrWyZJjxKBPzjQ` |
| Add Tags to Contacts in Batch | POST | `/api/contacts/tags` | `conn_mod_def::GL4lGFtNbfg::IVCTfgg2QkWj8oQs209tig` |
| Create or Update Contact | POST | `/api/contacts` | `conn_mod_def::GL4lGFkTbBg::gTWbKVSrTYeHyattob0hiw` |
| Remove Tags from Contacts in Batch | DELETE | `/api/contacts/tags` | `conn_mod_def::GL4lGF0Ek9g::OaYpyC5XQpaoWpDvIqSpzA` |
| Update Contact by Email | PATCH | `/api/contacts` | `conn_mod_def::GL4lGNUij_A::N8i85MgvRRiFckqYMoQs-A` |
| Update Contact by ID | PATCH | `/api/contacts/{{id}}` | `conn_mod_def::GL4lGMwq1Og::ArIkacshSHSfbXe-zIK9Vw` |

### EmailTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Email Template | GET | `/api/email-templates/{{id}}` | `conn_mod_def::GL4lGcDKZbg::klRzV4mnRrGskfa9FD34bg` |
| Get Email Templates | GET | `/api/email-templates` | `conn_mod_def::GL4lGXeWc_A::6v15CDjURfOTBJhgPTzCkw` |
| Create Email Template | POST | `/api/email-templates` | `conn_mod_def::GL4lGW_agMA::InjatKUER_On5KOJI3xjtg` |
| Delete Email Template | DELETE | `/api/email-templates/{{id}}` | `conn_mod_def::GL4lGXQClwA::iYJ0L4gXSuGgJyOd6n-98A` |
| Import Email Template from HTML | POST | `/api/email-templates/import` | `conn_mod_def::GL4lGlhnnVA::dLaKwMH3SKqKE9OSXil7AA` |
| Render Email Template | POST | `/api/email-templates/{{id}}/render` | `conn_mod_def::GL4lGjWn1QA::709UlMrKRHmspJxsHLJucw` |
| Update an Email Template by ID | PUT | `/api/email-templates/{{id}}` | `conn_mod_def::GL4lGjWEM-g::mECWqP3dQLi0L3yKgnFt-w` |

### UniversalLayouts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Universal Layout | GET | `/api/email-universal-layouts/{{id}}` | `conn_mod_def::GL4lGrqvPJg::uQ8WXizVQNeuU7NV4UnTtQ` |
| Get Universal Layouts | GET | `/api/email-universal-layouts` | `conn_mod_def::GL4lG2CZOHA::m7coAbLuTYmoMf7bzIKv2Q` |
| Create Universal Layout | POST | `/api/email-universal-layouts` | `conn_mod_def::GL4lGin4cCA::5hE3mc5jQRON_5I4-KEHww` |
| Delete a Universal Layout | DELETE | `/api/email-universal-layouts/{{id}}` | `conn_mod_def::GL4lGjWPdrg::t6Cv7sxpSFu36UqTew06zQ` |
| Update a Universal Layout by ID | PUT | `/api/email-universal-layouts/{{id}}` | `conn_mod_def::GL4lGseBU3A::A0T-78yyS6KPcm75pLNsGA` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Image | GET | `/api/images/{{id}}` | `conn_mod_def::GL4lG8KKwKg::G05H_hI5SB2_-eQwC4EwOQ` |
| List Images | GET | `/api/images` | `conn_mod_def::GL4lG-6L-xg::ww844wx1T0ewRS_wP1tRCQ` |
| Delete Image | DELETE | `/api/images/{{id}}` | `conn_mod_def::GL4lGsVtirg::AEt-VP0-RFOhRcUtUGFTow` |
| Upload Image by URL | POST | `/api/images` | `conn_mod_def::GL4lG95aA-g::oyfkwxhNSeSElMht_x3Pgg` |
| Upload Image File | POST | `/api/images/upload` | `conn_mod_def::GL4lHCFSCwA::CxVqJLTJRa2o6xEin7rPWA` |

### ProductCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Product Category | GET | `/api/product-categories/{{categoryId}}` | `conn_mod_def::GL4lHIHi3kA::d6zTOPJWQZKNG4meT-THeg` |
| List Product Categories | GET | `/api/product-categories` | `conn_mod_def::GL4lHK5B7Dg::IUmX2LeSRN27HTa3keRz-g` |
| Create Product Category | POST | `/api/product-categories` | `conn_mod_def::GL4lG8gjcjA::n4VcJdpyRImFzM2XUSpFIg` |
| Delete Product Category | DELETE | `/api/product-categories/{{categoryId}}` | `conn_mod_def::GL4lHKYvtwA::VDZMsYXLS0Cne6_gJJy2LA` |
| Update Product Category | PATCH | `/api/product-categories/{{categoryId}}` | `conn_mod_def::GL4lHIP65Og::iPE1Ih3UQ5GCEa3To7n_KA` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Product Using Products | GET | `/api/products/{{productId}}` | `conn_mod_def::GL4lHX2MZ8A::TcB8jApxT9a_gXnMwwEfww` |
| List Products | GET | `/api/products` | `conn_mod_def::GL4lHRMxWsA::cVdMoPGuSUmmhIBjS58z7w` |
| Create Product | POST | `/api/products` | `conn_mod_def::GL4lHIKmDwA::IDsMQ-8lS56bL-Wpp69_qg` |
| Delete Product | DELETE | `/api/products/{{productId}}` | `conn_mod_def::GL4lHREneTA::M9sLP0JvSyG6YGMwMKX_Vw` |
| Replace a Product by ID | PUT | `/api/products/{{productId}}` | `conn_mod_def::GL4lHRLhH7A::EDgzy5n9QsqHgnZ6ilym7Q` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Segment by ID | GET | `/api/segments/{{segmentId}}` | `conn_mod_def::GL4lHfGWTrA::nfTRMjDMSN-9xVEwAIhigQ` |
| List Segments | GET | `/api/segments` | `conn_mod_def::GL4lHe6NiyA::gycN9RJ0S5e4iaCKLOCl9Q` |
| Create Segment | POST | `/api/segments` | `conn_mod_def::GL4lHfqrXYg::HnN5kB0AQDKs1u7-ql8cnQ` |
| Delete Segment | DELETE | `/api/segments/{{segmentId}}` | `conn_mod_def::GL4lHkQ0UQg::hLR81bFqSgKE7mnOWFtmTA` |
| Update Segment | PUT | `/api/segments/{{segmentId}}` | `conn_mod_def::GL4lHr3gIOA::5ZXqgZ-yQResBN7r7uIbOw` |

### Batches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Batch Information | GET | `/api/batches/{{batchId}}` | `conn_mod_def::GL4lFmkN3sA::DHYM4eFfSXK5BCyObw7Z1w` |
| Get Batches | GET | `/api/batches` | `conn_mod_def::GL4lFu3Usxg::7jIq6kaTRJ6VmAhF0ML7rQ` |
| Create Batch | POST | `/api/batches` | `conn_mod_def::GL4lFm9OKog::Y8tUcOmQTwq2HY438xP-NA` |

### EmailContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Email Content | GET | `/api/email-content/{{id}}` | `conn_mod_def::GL4lGQJ3NQA::blGQn4eNQiGgxBvqw1nP4A` |
| Render Using Email Content | POST | `/api/email-content/{{id}}/render` | `conn_mod_def::GL4lGNJZzxg::H4zXOv2iTji5oLgAXiGI3A` |
| Update Email Content by ID | PUT | `/api/email-content/{{id}}` | `conn_mod_def::GL4lGXhWHlg::J-TN5BliSAagFTpil7aoSw` |

### Brands

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Information About Brand | GET | `/api/brands/current` | `conn_mod_def::GL4lFuYniRA::kauKnPy4RGW3vw-7mdmRsw` |
| Connect Brand | POST | `/api/brands/current` | `conn_mod_def::GL4lFuOY5yA::jw8EOGVWSlarU5ehKpTOQg` |

### BatchItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Batch Items for a Batch | GET | `/api/batches/{{batchId}}/items` | `conn_mod_def::GL4lFnRrR1g::dcOn1uZaSNeDnQVkeOgaNw` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Customer Event | POST | `/api/events` | `conn_mod_def::GL4lGrxzxEA::J3odNih9QviI7LSzKXQz7g` |

### SegmentStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Segment Statistics for a Segment | GET | `/api/segments/{{segmentId}}/statistics` | `conn_mod_def::GL4lHfqJ6wg::X5_93Y4fRSWhAdbH0M5lrA` |

### AnalyticsStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Report Using Analytics Statistics | POST | `/api/analytics/statistics` | `conn_mod_def::GL4lHtQmUpg::o6uR0QUDR6i7syartZPH4g` |

### AnalyticsReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Report Using Analytics Reports | POST | `/api/analytics/reports` | `conn_mod_def::GL4lHRXSITg::_74JktZ2T0KWV1PKZWXxpg` |

This lists 76 of 77 actions. For anything not here, call `search_one_platform_actions` with platform `omnisend`. The full catalog is at https://www.withone.ai/knowledge/omnisend.

## When a call fails

The error comes from Omnisend, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/omnisend

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
