---
name: zoho
description: Zoho offers a suite of cloud-based applications for businesses, including CRM, project management, accounting, and collaboration tools. Its integrated ecosystem supports businesses in managing operations, sales, marketing, and finance. Read and write Zoho data through One: leads, contacts, products, deals, quotes, salesorders and more, 759 actions with real parameter documentation. Use whenever the user asks to look something up in Zoho, create or update a record there, or build code against the Zoho API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: zoho
  generated-from: one-knowledge-base
---

# Zoho through One

Zoho offers a suite of cloud-based applications for businesses, including CRM, project management, accounting, and collaboration tools. Its integrated ecosystem supports businesses in managing operations, sales, marketing, and finance.

One exposes Zoho through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `zoho` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Zoho is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Zoho account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Leads | GET | `/crm/v8/Leads/actions/count` | `conn_mod_def::GJ8dw8a5MBc::UcO12mvHRAGP1hs5BdbqwA` |
| Download a Lead Record Attachment | GET | `/crm/v8/Leads/{{recordId}}/Attachments/{{attachmentId}}` | `conn_mod_def::GJ8dxD8xYNQ::GOX9iD43QhC8pK5MOUiDyw` |
| Download a Lead Record’s Fields Attachments | GET | `/crm/v8/Leads/{{recordId}}/actions/download_fields_attachment` | `conn_mod_def::GJ8dt-Ot_9M::wNQhtDnGQUmXedzSVgVrMA` |
| Download a Lead’s Photo | GET | `/crm/v8/Leads/{{recordId}}/photo` | `conn_mod_def::GJ8dxEEosus::g0f19g_6SeiRzNfo5xdhGQ` |
| Download Inline Images for a Lead Email | GET | `/crm/v8/Leads/{{recordId}}/Emails/actions/download_inline_images` | `conn_mod_def::GJ8dt-eWT6o::CKFtI0kURyiVHFMjvIiAcQ` |
| Get a Lead by External Field Value | GET | `/crm/v8/Leads/{{externalFieldValue}}` | `conn_mod_def::GJ8d5Yyj6z4::Sp9aIe7IQzmlN3r4DzDgGw` |
| Get a Lead Email’s Attachments | GET | `/crm/v8/Leads/{{recordId}}/Emails/attachments` | `conn_mod_def::GJ8dvW6lAio::4qAX4PegRum0kvnr3S7bhg` |
| Get a Lead Mass Update Job Status | GET | `/crm/v8/Leads/actions/mass_update` | `conn_mod_def::GJ8dxR5tQhM::WvNPG04LSSe6tAtmQRYYCg` |
| Get a Lead Record’s Blueprint Transitions | GET | `/crm/v8/Leads/{{recordId}}/actions/blueprint` | `conn_mod_def::GJ8dwuY9CPE::7y5mC3rBQvCrIid4K2kDEA` |
| Get a Lead Record’s Email Sharing Details | GET | `/crm/v8/Leads/{{recordId}}/__emails_sharing_details` | `conn_mod_def::GJ8dvn6ogF0::TPMKJCaAR2e67-uy6xEohA` |
| Get a Lead Record’s Share Details | GET | `/crm/v8/Leads/{{recordId}}/actions/share` | `conn_mod_def::GJ8dxKIASA0::Qws7Nq9zSuapSmFaGwFMqA` |
| Get a Lead Record’s Subform Data | GET | `/crm/v8/Leads/{{recordId}}` | `conn_mod_def::GJ8d3fokh5I::XDqGiSxyQ42Sr8Scz6YvUQ` |

39 more Leads actions are available through search.

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Contacts | GET | `/crm/v8/Contacts/actions/count` | `conn_mod_def::GJ8drSo4Mrk::eCP-icCBR7S8WvRMZ1rsFg` |
| Download a Contact Record Attachment | GET | `/crm/v8/Contacts/{{recordId}}/Attachments/{{attachmentId}}` | `conn_mod_def::GJ8drZpan_o::srR9WChHSASMxcjTywQ5Xw` |
| Download a Contact’s Photo | GET | `/crm/v8/Contacts/{{recordId}}/photo` | `conn_mod_def::GJ8drbmJZr4::kHopULI1Q52VRG-QIXbfRw` |
| Get a Contact Record's Blueprint Transitions | GET | `/crm/v8/Contacts/{{recordId}}/actions/blueprint` | `conn_mod_def::GJ8dr032MzQ::VDlMK88OQnmjRHx3P56ZXA` |
| Get a Mass Update Job Status for Contacts | GET | `/crm/v8/Contacts/actions/mass_update` | `conn_mod_def::GJ8drrcdqp4::IAmQcCf5ROqsjHGm0P4DRQ` |
| Get a Shared Contact Record's Share Details | GET | `/crm/v8/Contacts/{{recordId}}/actions/share` | `conn_mod_def::GJ8drjVpE8c::wmN95uDiQGubEyO1g4wBoA` |
| List a Contact’s Reporting Contacts | GET | `/crm/v8/Contacts/{{recordId}}/Reporting_Contacts` | `conn_mod_def::GJ8d1zheqHI::8zO0Xkz_S-uWwvEblFPFvg` |
| List Contact Records | GET | `/crm/v8/Contacts` | `conn_mod_def::GJ8dr0X1fSQ::6baDkTTnQP-T9XWki2QrmQ` |
| List Deleted Contacts | GET | `/crm/v8/Contacts/deleted` | `conn_mod_def::GJ8drTEdFrk::-JVh1OSjSNyEUVHr89DG6Q` |
| Add a Contact Record Photo (by Record ID) | POST | `/crm/v8/Contacts/{{recordId}}/photo` | `conn_mod_def::GJ8draOxT_k::iXsGKctUT9awgsV9ujCB6g` |
| Add Tags to Contact Records | POST | `/crm/v8/Contacts/actions/add_tags` | `conn_mod_def::GJ8drh_OWi4::rFkycOSeQDaAQR19nK3DNg` |
| Attach a File to a Contact (Add Attachment) | POST | `/crm/v8/Contacts/{{recordId}}/Attachments` | `conn_mod_def::GJ8drboVcHE::voX5lQKRSBa6yZ9AN17AGQ` |

14 more Contacts actions are available through search.

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Products | GET | `/crm/v8/Products/actions/count` | `conn_mod_def::GJ8dzaubITc::VZLwopRzTsCzfCUhCAJUZQ` |
| Download a Product Record Attachment | GET | `/crm/v8/Products/{{recordId}}/Attachments/{{attachmentId}}` | `conn_mod_def::GJ8dzbeYG-8::KjxRRzZiR5iJhR43MgRsVA` |
| Download a Product’s Photo | GET | `/crm/v8/Products/{{recordId}}/photo` | `conn_mod_def::GJ8dzhSVg8Q::XEIfAoc6T86Hit2mRszJdw` |
| Get a Product Record's Blueprint Transitions | GET | `/Products/{{recordId}}/actions/blueprint` | `conn_mod_def::GJ8dz6Rbiqw::s6yHUzr8TcGJfpLVKw0zWg` |
| Get a Shared Product Record’s Share Details | GET | `/crm/v8/Products/{{recordId}}/actions/share` | `conn_mod_def::GJ8dzpjSPu0::WgZbytbsRuSG7S2BomAGug` |
| Get Products Mass Update Job Status | GET | `/crm/v8/Products/actions/mass_update` | `conn_mod_def::GJ8dzriKZgU::Za8hEqsyS86hNlcmxJ0D7w` |
| List an Account’s Products | GET | `/crm/v8/Accounts/{{recordId}}/Products` | `conn_mod_def::GJ8dzyE_Q-U::y3HV9FCrRe6lgvoNDRUQ7g` |
| List Deleted Product Records | GET | `/crm/v8/Products/deleted` | `conn_mod_def::GJ8dzauAuXQ::w9_horE_RJOqfNjcuaGhSg` |
| List Products | GET | `/crm/v8/Products` | `conn_mod_def::GJ8dz5h3NOg::UbZUostWQqW6MqgztSRNOQ` |
| List Products Associated With a Contact | GET | `/crm/v8/Contacts/{{recordId}}/Products` | `conn_mod_def::GJ8dzyZiNtk::tnpCM0K7QTmnHXFe101xhg` |
| Add a Product Record Photo | POST | `/crm/v8/Products/{{recordId}}/photo` | `conn_mod_def::GJ8dzh0oPaU::kHw2_TIjQMmKfsHHlSX_Jw` |
| Add Tags to Product Records | POST | `/crm/v8/Products/actions/add_tags` | `conn_mod_def::GJ8dzjh0DtA::nsFbFHLiTNu4aMwasAR3Zg` |

12 more Products actions are available through search.

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Deals | GET | `/crm/v8/Deals/actions/count` | `conn_mod_def::GJ8ds_oYynQ::DaXtzGaDQzSJPGFdE1hJoA` |
| Download a Deal Record Attachment | GET | `/crm/v8/Deals/{{recordId}}/Attachments/{{attachmentId}}` | `conn_mod_def::GJ8dtHN378I::hgKI5m62ROa-gN8wtQk87Q` |
| Get a Deal Record’s Blueprint Transitions | GET | `/crm/v8/Deals/{{recordId}}/actions/blueprint` | `conn_mod_def::GJ8dtW5qZ5A::wCKXGEQCQ2-HaGkmZMzwIg` |
| Get a Shared Deal Record’s Share Details | GET | `/crm/v8/Deals/{{recordId}}/actions/share` | `conn_mod_def::GJ8dtHESLn4::wLeBVFRATomTP8JEXOdGZw` |
| Get Mass Update Job Status for Deals | GET | `/crm/v8/Deals/actions/mass_update` | `conn_mod_def::GJ8dtOduPec::gvq_u6pLTdSvdnMXo0KFJg` |
| List a Contact’s Deals | GET | `/crm/v8/Contacts/{{recordId}}/Deals` | `conn_mod_def::GJ8dtV3T2SA::TJHTVIbjTHGZvmJDDcjj8w` |
| List an Account's Deals | GET | `/crm/v8/Accounts/{{recordId}}/Deals` | `conn_mod_def::GJ8dtPf1_W4::s-2GUEggSy6YB9joezzBLw` |
| List Deals | GET | `/crm/v8/Deals` | `conn_mod_def::GJ8dtfBsTz0::oPQHqyNwQwqYU8z8KUE1Rg` |
| List Deleted Deals | GET | `/crm/v8/Deals/deleted` | `conn_mod_def::GJ8dtAJvQoI::NB2iCeGgQAa7Xak8X5w79Q` |
| Add Tags to Deal Records | POST | `/crm/v8/Deals/actions/add_tags` | `conn_mod_def::GJ8dtPtrIqQ::bpxvj8jLRCWQP_m1SiCpbQ` |
| Associate an Email to a Deal Record | POST | `/crm/v8/Deals/{{recordId}}/actions/associate_email` | `conn_mod_def::GJ8doxfFVX0::h6-2vRJoQnapvDlsVHCo3Q` |
| Associate Email with a Deal Record | POST | `/crm/v8/Deals/{{dealId}}/actions/associate_email` | `conn_mod_def::GJ8do8Lq_Xk::UN-0CDoDR9eKxcGErVS11g` |

11 more Deals actions are available through search.

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Quotes | GET | `/crm/v8/Quotes/actions/count` | `conn_mod_def::GJ8d0uXZ0iQ::1_DBWtzYT0KzKmztiQXk8g` |
| Get a Quote Record’s Blueprint (Next Transitions) | GET | `/crm/v8/Quotes/{{recordId}}/actions/blueprint` | `conn_mod_def::GJ8d1ErhyXc::YlhBZhOxSW-Vo8RZGhkbRw` |
| Get a Quote’s Stage History | GET | `/crm/v8/Quotes/{{recordId}}/Quote_Stage_History` | `conn_mod_def::GJ8d0njZslo::SkJ8EloXSYCz9Vufa4r0CA` |
| Get a Shared Quote Record’s Share Details | GET | `/crm/v8/Quotes/{{recordId}}/actions/share` | `conn_mod_def::GJ8d01QLDRQ::SrNOdnBrScOH-uff0HyUCQ` |
| Get Quotes Mass Update Job Status | GET | `/crm/v8/Quotes/actions/mass_update` | `conn_mod_def::GJ8d08HMNxg::AA7jtLkURbW9OsCzbas_hw` |
| List a Contact’s Quotes | GET | `/crm/v8/Contacts/{{recordId}}/Quotes` | `conn_mod_def::GJ8d1FBPqk8::YTCgNqRgTYuvVUaOQawzLg` |
| List an Account's Quotes | GET | `/crm/v8/Accounts/{{recordId}}/Quotes` | `conn_mod_def::GJ8d0-bNwQk::VbWNcsAeQIiFzqm3P0J-Ow` |
| List Deleted Quotes | GET | `/crm/v8/Quotes/deleted` | `conn_mod_def::GJ8d0u8bDR0::o0JdGUgxQUCbR_dBa-Z6YA` |
| List Quotes | GET | `/crm/v8/Quotes` | `conn_mod_def::GJ8d1EnLa-Q::1_O3fVQmSvKvtKP0gFiiiQ` |
| List Quotes for a Deal | GET | `/crm/v8/Deals/{{recordId}}/Quotes` | `conn_mod_def::GJ8d1E5uo5I::aN-A6NVnTgmlbH7TqMvoug` |
| Add Tags to Quote Records | POST | `/crm/v8/Quotes/actions/add_tags` | `conn_mod_def::GJ8d096_2g0::tOmXkYFFS7iEneRFmzzj1g` |
| Attach a File to a Quote Record | POST | `/crm/v8/Quotes/{{recordId}}/Attachments` | `conn_mod_def::GJ8d0t0QIDI::Yhi6-ZKDSd2FDIYv4JhPdQ` |

11 more Quotes actions are available through search.

### SalesOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Sales Orders | GET | `/crm/v8/Sales_Orders/actions/count` | `conn_mod_def::GJ8d2gOAbu4::Us-NpHUuTPm1DnCwn8WsmQ` |
| Download a Sales Order Attachment | GET | `/crm/v8/Sales_Orders/{{recordId}}/Attachments/{{attachmentId}}` | `conn_mod_def::GJ8d17yw4YY::f0qf2ufiQKyVkwqp5d6nKA` |
| Get a Sales Order's Blueprint Transitions | GET | `/crm/v8/Sales_Orders/{{recordId}}/actions/blueprint` | `conn_mod_def::GJ8d2aR3zZE::DBrCDdGoTSS3CzTomSrlyw` |
| Get a Sales Orders Mass Update Job Status | GET | `/crm/v8/Sales_Orders/actions/mass_update` | `conn_mod_def::GJ8d2QRuXZI::ZmoEoZXHS-yijPSip9zQzA` |
| Get a Shared Sales Order Record's Share Details | GET | `/crm/v8/Sales_Orders/{{recordId}}/actions/share` | `conn_mod_def::GJ8d2INlt0s::o9i_lXFiSG6cFqcYU6xgcQ` |
| List a Contact’s Sales Orders | GET | `/crm/v8/Contacts/{{recordId}}/SalesOrders` | `conn_mod_def::GJ8d2R43h_w::c5jlyJ73Rs6ftq9in3yELQ` |
| List a Quote’s Sales Orders | GET | `/crm/v8/Quotes/{{recordId}}/SalesOrders` | `conn_mod_def::GJ8d2YezKtU::zEco_3OgQAq2Tm82rPpaLg` |
| List an Account's Sales Orders | GET | `/crm/v8/Accounts/{{recordId}}/SalesOrders` | `conn_mod_def::GJ8d2QVcBEk::dWA988BhRXitGBU9xgBU_A` |
| List Deleted Sales Orders Records | GET | `/crm/v8/Sales_Orders/deleted` | `conn_mod_def::GJ8d172dLL8::68aeNHHdSeiKGfSrHQC-Vg` |
| List Sales Orders | GET | `/crm/v8/Sales_Orders` | `conn_mod_def::GJ8d2YAzv74::sCNUIscvQq2AzBgb-uBm8g` |
| Add Tags to Sales Orders Records | POST | `/crm/v8/Sales_Orders/actions/add_tags` | `conn_mod_def::GJ8d18BpzPA::CtF4RHb4RZOMXHCFP4C6eQ` |
| Attach a File to a Sales Order Record | POST | `/crm/v8/Sales_Orders/{{recordId}}/Attachments` | `conn_mod_def::GJ8d2AnAung::JtdkACfgT-6XexGZ0_uHcA` |

11 more SalesOrders actions are available through search.

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Accounts | GET | `/crm/v8/Accounts/actions/count` | `conn_mod_def::GJ8dnlRGva0::-Y5yn-Z5Sh2H4v-4MdOaMA` |
| Download an Account Record Attachment | GET | `/crm/v8/Accounts/{{recordId}}/Attachments/{{attachmentId}}` | `conn_mod_def::GJ8dntZtuGQ::6yeOxWBSTIC2UpUyVFk_8Q` |
| Download an Account Record Photo | GET | `/crm/v8/Accounts/{{recordId}}/photo` | `conn_mod_def::GJ8dnsgn9AU::E-tEeawZQuKE9-qiZaYfjQ` |
| Get Accounts Mass Update Job Status | GET | `/crm/v8/Accounts/actions/mass_update` | `conn_mod_def::GJ8dn7fgoL4::RTF9g3tBRQCQQvc_m3ewRg` |
| Get an Account Record's Blueprint Transitions | GET | `/crm/v8/Accounts/{{recordId}}/actions/blueprint` | `conn_mod_def::GJ8doCacKnc::fklo1OhdT0mw_7VZTa8t-w` |
| Get an Account Record’s Share Details | GET | `/crm/v8/Accounts/{{recordId}}/actions/share` | `conn_mod_def::GJ8dn0Xzzh4::S5CDS-RUTeO8Hqrk8YUYaA` |
| List Accounts (CRM) | GET | `/crm/v8/Accounts` | `conn_mod_def::GJ8doDekUzI::lwrRFDC0Q16IsgVspIFp2g` |
| List an Account’s Child Accounts | GET | `/crm/v8/Accounts/{{recordId}}/Child_Accounts` | `conn_mod_def::GJ8drDc-Xx4::IUklDZTGQ0GbPfhvVEGE9w` |
| List Deleted Accounts Records | GET | `/crm/v8/Accounts/deleted` | `conn_mod_def::GJ8dnm0yyPg::gh5PpN21Q7qR4IlRwfmleg` |
| Add an Account Record Photo | POST | `/crm/v8/Accounts/{{recordId}}/photo` | `conn_mod_def::GJ8dn1km_XY::nmYWx5RTThOIgKtaobIFWg` |
| Add Tags to Account Records | POST | `/crm/v8/Accounts/actions/add_tags` | `conn_mod_def::GJ8dn0JqPB8::5FO-GgB6QeWvh-fULtWerw` |
| Create an Account | POST | `/crm/v8/Accounts` | `conn_mod_def::GJ8doCcWghM::SIYv9nMaSJ6UFcBK0PpWeg` |

10 more Accounts actions are available through search.

### PurchaseOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Purchase Orders | GET | `/crm/v8/Purchase_Orders/actions/count` | `conn_mod_def::GJ8d0mWalsw::ptRm4uUXSL6rWrfwK0aigA` |
| Get a Purchase Order Mass Update Job Status | GET | `/crm/v8/Purchase_Orders/actions/mass_update` | `conn_mod_def::GJ8d0WVAbZE::U_y2KY-8Rc6vj3xkp2Zi9w` |
| Get a Purchase Order's Blueprint (Next Transitions) | GET | `/crm/v8/Purchase_Orders/{{recordId}}/actions/blueprint` | `conn_mod_def::GJ8d0fMBfgc::GCBOH3emTSqgdzEt0RtgYQ` |
| Get a Shared Purchase Order Record’s Details | GET | `/crm/v8/Purchase_Orders/{{recordId}}/actions/share` | `conn_mod_def::GJ8d0PAmZJw::w5axz5nsRDKwHkVKsw-b2g` |
| List a Contact’s Purchase Orders | GET | `/crm/v8/Contacts/{{recordId}}/PurchaseOrders` | `conn_mod_def::GJ8d0Vc_hfQ::EWDsuvYmQ7mff8iaReojYw` |
| List a Vendor's Purchase Orders | GET | `/crm/v8/Vendors/{{recordId}}/PurchaseOrders` | `conn_mod_def::GJ8d0YkR00Y::drmQiKY1RO6fGHzQX9CmFA` |

16 more PurchaseOrders actions are available through search.

This lists 90 of 759 actions. For anything not here, call `search_one_platform_actions` with platform `zoho`. The full catalog is at https://www.withone.ai/knowledge/zoho.

## When a call fails

The error comes from Zoho, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/zoho

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
