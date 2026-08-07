---
name: quaderno
description: Quaderno is a tax automation platform that provides APIs and tools for calculating sales tax, VAT, and GST, generating compliant invoices and receipts, and helping online businesses and developers manage indirect tax compliance across jurisdictions. Read and write Quaderno data through One: proformas, invoices, credits, taxids, coupons, receipts and more, 92 actions with real parameter documentation. Use whenever the user asks to look something up in Quaderno, create or update a record there, or build code against the Quaderno API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: quaderno
  generated-from: one-knowledge-base
---

# Quaderno through One

Quaderno is a tax automation platform that provides APIs and tools for calculating sales tax, VAT, and GST, generating compliant invoices and receipts, and helping online businesses and developers manage indirect tax compliance across jurisdictions.

One exposes Quaderno through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `quaderno` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Quaderno is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Quaderno account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Proformas

| Action | Method | Path | Action id |
|---|---|---|---|
| Deliver a Proforma | GET | `/proformas/{{id}}/deliver` | `conn_mod_def::GMIjcvQUXYg::WgES4F8vQsC12SjZzG9lDw` |
| List Proformas | GET | `/proformas` | `conn_mod_def::GMIjcvQyDxg::4fOV3BsEQ3i61BOPVSzifA` |
| Retrieve a Proforma | GET | `/proformas/{{id}}` | `conn_mod_def::GMIjcxZzEkg::hqdA9xfpTy6SvDW605dd-w` |
| Accept a Proforma | PUT | `/proformas/{{id}}/accept` | `conn_mod_def::GMIjcpLwP0A::uggHL9-nRJ-13EpPlllx9w` |
| Convert a Proforma to an Invoice | PUT | `/proformas/{{id}}/convert` | `conn_mod_def::GMIjcpBdX2A::KeBUFr5FTleprRkJ_qBv9g` |
| Create Proforma | POST | `/proformas` | `conn_mod_def::GMIjcpZkDSg::cZeukMhZR8WFM1uP7fK0OQ` |
| Decline a Proforma | PUT | `/proformas/{{id}}/decline` | `conn_mod_def::GMIjcvdAygA::03GwzxTCS3G38_04D_kaLw` |
| Revert a Proforma | PUT | `/proformas/{{id}}/revert` | `conn_mod_def::GMIjcvWLmCA::01sYBMwIRkaU20Xg4SAFkg` |
| Update a Proforma | PUT | `/proformas/{{id}}` | `conn_mod_def::GMIjc34Lq7g::JXP0fMKJQ5iMWsyWtMEpDA` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Deliver an Invoice | GET | `/invoices/{{id}}/deliver` | `conn_mod_def::GMIjbhegaMg::lNxyQAI_QUWkAYQt4X88Og` |
| List Invoices | GET | `/invoices` | `conn_mod_def::GMIjcaarmPA::JWv9lHnvQLiCWlOYBxwNSg` |
| Retrieve an Invoice | GET | `/invoices/{{id}}` | `conn_mod_def::GMIjbjTuDqg::yniQaTyUSKiHbYnnrlL3Rw` |
| Create Invoice | POST | `/invoices` | `conn_mod_def::GMIjbZFNJCg::bs7FthsFQGGzbKhvUtxe1Q` |
| Mark an Invoice as Uncollectible | PUT | `/invoices/{{id}}/mark_uncollectible` | `conn_mod_def::GMIjbi3VCmg::VhjdvdNWQjuFAFvP023npQ` |
| Update an Invoice | PUT | `/invoices/{{id}}` | `conn_mod_def::GMIjcf_omUA::m06kJdawR0mczw7Ovj3FlQ` |
| Void an Invoice | PUT | `/invoices/{{id}}/void` | `conn_mod_def::GMIjcilhMOg::84xZLYPuTZ-scQvaqKnHcA` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Deliver a Credit | GET | `/credits/{{id}}/deliver` | `conn_mod_def::GMIja-hS0IA::8xW_Z48nT32vE6Avb3bs6g` |
| List Credits | GET | `/credits` | `conn_mod_def::GMIjbKZ7sTA::CGlbxtRWR023iBlx6DKr9g` |
| Create Credit Note | POST | `/credits` | `conn_mod_def::GMIja_ZiUSg::AMVlEHHYT_iO6GpUryxITg` |
| Record a Credit Payment | POST | `/credits/{{id}}/payments` | `conn_mod_def::GMIjbFxWx-g::MHogQYBMSPSMAtvHrc8f5w` |
| Update a Credit Note | PUT | `/credits/{{id}}` | `conn_mod_def::GMIjbFy0cHg::t7rsTvLTQLKHYQnn7OHl0w` |
| Void a Credit Note | PUT | `/credits/{{id}}/void` | `conn_mod_def::GMIjbFWN33g::1OQoy6RRSwm7FP28L_Ml_w` |

### TaxIds

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tax IDs | GET | `/tax_ids` | `conn_mod_def::GMIjdOIK5Og::c8CVyn3MRSSWIpnU37ORpg` |
| Retrieve a Tax ID | GET | `/tax_ids/{{id}}` | `conn_mod_def::GMIjdN53Pqg::DVysT8_jS3-5BtWuyrEMnQ` |
| Validate Tax ID | GET | `/tax_ids/validate` | `conn_mod_def::GMIjdWJzh3A::_KEvCG1iTne4vKYkR1uVnQ` |
| Create Tax IDs | POST | `/tax_ids` | `conn_mod_def::GMIjdOvu3IA::RHthjBSqTXSTGZeuCLMP_A` |
| Delete a Tax ID | DELETE | `/tax_ids/{{id}}` | `conn_mod_def::GMIjdNsAlkg::CdoPVkQiSJ2wLcG-u91JKg` |
| Update a Tax ID | PUT | `/tax_ids/{{id}}` | `conn_mod_def::GMIjdWUWfIA::-IAEj-0dQY-D_oU4q9jj6A` |

### Coupons

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Coupons | GET | `/checkout/coupons` | `conn_mod_def::GMIja_tke4g::GC4XEqmCSiGVSOgDUfPCyg` |
| Retrieve a Coupon | GET | `/checkout/coupons/{{id}}` | `conn_mod_def::GMIja_JBFNA::oXgX7FqjRP6xXFvAn46iuw` |
| Create Coupon | POST | `/checkout/coupons` | `conn_mod_def::GMIja30mPsg::tekJaXpRQTiXZBxfHIUAeA` |
| Delete a Coupon | DELETE | `/checkout/coupons/{{id}}` | `conn_mod_def::GMIja4yh4jA::iZaKP4NaSAG8ohQJenYa8g` |
| Update Coupon | PUT | `/checkout/coupons/{{id}}` | `conn_mod_def::GMIja_c1LaA::1fwn7O1KTPCbYrycUGrvxw` |

### Receipts

| Action | Method | Path | Action id |
|---|---|---|---|
| Deliver a Receipt | GET | `/receipts/{{id}}/deliver` | `conn_mod_def::GMIjc3DRLlA::FMVyJMWZTOulp9oTeDSGZg` |
| List Receipts | GET | `/receipts` | `conn_mod_def::GMIjc3S35jA::3X6Cixe5R7C41zd3IJfx5A` |
| Retrieve a Receipt | GET | `/receipts/{{id}}` | `conn_mod_def::GMIjc8Dgjrg::wbBZzrOnRW-8_VWCjsCUZQ` |
| Create Receipt | POST | `/receipts` | `conn_mod_def::GMIjc3RpcEA::G5zOM6tFRASHeLQ8Taf7Ig` |
| Void a Receipt | PUT | `/receipts/{{id}}/void` | `conn_mod_def::GMIjdBOspfA::Tn3IXZeaQ7mQOUZie9CRDQ` |

### Recurring

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Recurring | GET | `/recurring` | `conn_mod_def::GMIjdCdplLg::H8U28nrYT0ieHiYF2LG_Ow` |
| Retrieve a Recurring | GET | `/recurring/{{id}}` | `conn_mod_def::GMIjdBTqJzA::YR4fER7MS8WyzQby9MGpyw` |
| Create Recurring | POST | `/recurring` | `conn_mod_def::GMIjdB0Yvgg::zSi3yohoTZSCVTyi75sG2w` |
| Delete a Recurring | DELETE | `/recurring/{{id}}` | `conn_mod_def::GMIjdH4ILAg::rWpXNO6tRFOrjyK981nBIQ` |
| Update a Recurring | PUT | `/recurring/{{id}}` | `conn_mod_def::GMIjdOwzbzA::UvweyCsuSbirYvU5a19B6g` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contacts | GET | `/contacts` | `conn_mod_def::GMIja3bu3EA::StS6Zy1gRyu0V6flfCY37w` |
| Retrieve a Contact | GET | `/contacts/{{id}}` | `conn_mod_def::GMIja4BJLZA::qpnXinZMQAOR_ugyeNdckQ` |
| Create Contact | POST | `/contacts` | `conn_mod_def::GMIjaw-TtUg::hWWia6gmQY2L8F1IOUZRfQ` |
| Delete a Contact | DELETE | `/contacts/{{id}}` | `conn_mod_def::GMIjawscG5A::RUu1xLY-RDCfMCz99WZExA` |
| Update a Contact | PUT | `/contacts/{{id}}` | `conn_mod_def::GMIja38SglA::mHz0WEqXTIqFSjaUY0KUig` |

### Expenses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Expenses | GET | `/expenses` | `conn_mod_def::GMIjbZGRrwg::Zo8n9UK1T1uNse2QgYgX1A` |
| Retrieve an Expense | GET | `/expenses/{{id}}` | `conn_mod_def::GMIjbY4YqTA::AVuOTh_lQWKRjsN-1SH2oA` |
| Create Expense | POST | `/expenses` | `conn_mod_def::GMIjbSOTnjA::40LHcRxUQ22zHfN1AulQCg` |
| Delete an Expense | DELETE | `/expenses/{{id}}` | `conn_mod_def::GMIjbYdT50A::cYjonlhKSLusIOSCQqZRkg` |
| Update an Expense | PUT | `/expenses/{{id}}` | `conn_mod_def::GMIjbcNxgYg::dicP7Z8pR2mpFcP2P-W88A` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GMIjd-76yRg::k9vXIL50R1Cm_8tpcCfC1A` |
| Retrieve a Webhook | GET | `/webhooks/{{id}}` | `conn_mod_def::GMIjeGCSnpg::3CbNebLRTr-xzq7OpBJQTg` |
| Create Webhook | POST | `/webhooks` | `conn_mod_def::GMIjd_HU_rA::NKAZ-OQqTbCwGTpVuKI0Gg` |
| Delete a Webhook | DELETE | `/webhooks/{{id}}` | `conn_mod_def::GMIjd91zc0g::2a57W7ZfS7yle-v0ilg1aQ` |
| Update a Webhook | PUT | `/webhooks/{{id}}` | `conn_mod_def::GMIjeG28-xg::FMvTgyBWS5K2E7AbeKAPtA` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Accounts | GET | `/accounts` | `conn_mod_def::GMIjarXrZFA::F6vWOkkqTxOivhmFOYlyCA` |
| Retrieve a Custom Account | GET | `/accounts/{{id}}` | `conn_mod_def::GMIjaqtGpSg::Lmx3dvjCSsGm7QU2AhuRsw` |
| Create Account | POST | `/accounts` | `conn_mod_def::GMIjaqTrdpA::p094mzUGTWSf_jgM3cnqdg` |
| Update Account | PUT | `/accounts/{{id}}` | `conn_mod_def::GMIjarkHNsg::opAzpZ4yTyq_NnjIb9Da8w` |

### CheckoutSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Checkout Sessions | GET | `/checkout/sessions` | `conn_mod_def::GMIjdb37Vmg::YdDAXtzcQcq6Ad7rVyVzBA` |
| Create Checkout Sessions | POST | `/checkout/sessions` | `conn_mod_def::GMIjdfBT5xA::KgBdjziZTuGzsaASv_UHTA` |
| Delete a Checkout Session | DELETE | `/checkout/sessions/{{id}}` | `conn_mod_def::GMIjdvl-6dg::uRUtORtDQdKOFxGkX8FoGQ` |
| Update a Checkout Session | PUT | `/checkout/sessions/{{id}}` | `conn_mod_def::GMIjdcT604A::K_ujHuxwR4CjksAf-IBw7Q` |

### Addresses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Addresses | GET | `/addresses` | `conn_mod_def::GMIjaxP9j3g::wpk679GcTJCkiRP5WDRBsQ` |
| Retrieve an Address | GET | `/addresses/{{id}}` | `conn_mod_def::GMIjaxFQcNg::ZadNgyTxShu5oFL52P_pmg` |
| Create Address | POST | `/addresses` | `conn_mod_def::GMIjaqwjl6g::JomV51kPTLWPLy2hXGusQA` |
| Update Address | PUT | `/addresses/{{id}}` | `conn_mod_def::GMIjax5VW2g::RRiJR2T3QpmsR3EJXgPNvg` |

### Evidence

| Action | Method | Path | Action id |
|---|---|---|---|
| List Evidence | GET | `/evidence` | `conn_mod_def::GMIjbQZWIQg::GFDN-FDPSQym8oowGRVmyA` |
| Retrieve an Evidence | GET | `/evidence/{{id}}` | `conn_mod_def::GMIjbPuQ9Rg::uw3w--6bS0ucBGEVMN_Tfg` |
| Create Evidence | POST | `/evidence` | `conn_mod_def::GMIjbS8FJyA::4xZU6qn3TnSHl70Jpu_Gqw` |
| Update an Evidence | PUT | `/evidence/{{id}}` | `conn_mod_def::GMIjbQA9sGA::gOHftxZuRYWtlOiH0AZr7A` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| List Products | GET | `/items` | `conn_mod_def::GMIjchBdZdA::ANWmdo7OTam_Z3aFRAYE8g` |
| Retrieve a Product | GET | `/items/{{id}}` | `conn_mod_def::GMIjcon387A::6q7gXsC3SCmcApZMMfoECA` |
| Delete a Product | DELETE | `/items/{{id}}` | `conn_mod_def::GMIjcg_Uiqg::ztEMHacwSZ-h-0yeCZpKAw` |

### Jurisdictions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Jurisdictions | GET | `/jurisdictions` | `conn_mod_def::GMIjd1vDZHA::XrSgUxlXTjSjt-aEqAZu9w` |
| Retrieve a Jurisdiction | GET | `/jurisdictions/{{id}}` | `conn_mod_def::GMIjd0y2n9g::bw3VJmSfSeO3NmzIXMU1FQ` |

### TaxCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tax Codes | GET | `/tax_codes` | `conn_mod_def::GMIjd0_vvlA::Nmyihn26TPiIPGLAjaaq0A` |
| Retrieve a Tax Code | GET | `/tax_codes/{{id}}` | `conn_mod_def::GMIjd2U1OUg::oAmZNTF-SQGjcCsEaWPqFw` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Product | POST | `/items` | `conn_mod_def::GMIjchecbIg::mu9P6xXbQjWX5Moad5heWA` |
| Update an Item | PUT | `/items/{{id}}` | `conn_mod_def::GMIjcpUHEVA::d4nB-GhBSqKdJvJomBeWPg` |

### ReportingRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List Reporting Requests | GET | `/reporting/requests` | `conn_mod_def::GMIjdUe_QYA::XydBUs8zSsSjE4zaky0kgA` |
| Retrieve a Reporting Request | GET | `/reporting/requests/{{id}}` | `conn_mod_def::GMIjdU4zEMg::tDbjC7t0TdeWZdInEWT_cg` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Record a Payment for an Invoice | POST | `/invoices/{{id}}/payments` | `conn_mod_def::GMIjbldIbgg::dPIsm8opTmGRkeW2WW7LbA` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Transaction | POST | `/transactions` | `conn_mod_def::GMIjeASAz4A::YktKmjxUQIGlpAnqL68a1w` |

### CreditNote

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Credit Note | GET | `/credits/{{id}}` | `conn_mod_def::GMIjbFyozAA::LXbgWYQITFqQruU5aFvPFw` |

### ReportRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Request a Report | POST | `/reporting/requests` | `conn_mod_def::GMIjdUvHd5g::dRgdtblVSHmWFjyMRMRJAQ` |

### CheckoutSession

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Checkout Session | GET | `/checkout/sessions/{{id}}` | `conn_mod_def::GMIjdcBEzVA::pc-fj_hjSYmGOcKIweuqGQ` |

This lists 90 of 92 actions. For anything not here, call `search_one_platform_actions` with platform `quaderno`. The full catalog is at https://www.withone.ai/knowledge/quaderno.

## When a call fails

The error comes from Quaderno, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/quaderno

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
