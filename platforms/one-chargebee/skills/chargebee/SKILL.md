---
name: chargebee
description: Chargebee is a subscription billing and revenue operations platform that helps SaaS and subscription-based businesses manage recurring billing, invoicing, taxes, and analytics. Read and write Chargebee data through One: subscriptions, invoices, customers, hostedpages, paymentsources, exports and more, 409 actions with real parameter documentation. Use whenever the user asks to look something up in Chargebee, create or update a record there, or build code against the Chargebee API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: chargebee
  generated-from: one-knowledge-base
---

# Chargebee through One

Chargebee is a subscription billing and revenue operations platform that helps SaaS and subscription-based businesses manage recurring billing, invoicing, taxes, and analytics.

One exposes Chargebee through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `chargebee` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Chargebee is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Chargebee account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscription's Renewal Estimate | GET | `/subscriptions/{{subscriptionId}}/renewal_estimate` | `conn_mod_def::GJ1J1JvxdRg::-gG3a6lVR8a4CMK9x1EUDw` |
| List Subscriptions | GET | `/api/v2/subscriptions` | `conn_mod_def::GJ1JbS3UICA::eXm46MbaSDOPwmzTG98NIw` |
| Retrieve a Subscription | GET | `/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ1JsT84MAw::P1EkB0M_SVuqVgh1XPMbug` |
| Retrieve a Subscription with Scheduled Changes Applied | GET | `/subscriptions/{{subscriptionId}}/retrieve_with_scheduled_changes` | `conn_mod_def::GJ1Jzh04D6s::VmkhN7HOScmQB8bL5APs3A` |
| Retrieve a Subscription’s Advance Invoice Schedule | GET | `/subscriptions/{{subscriptionId}}/retrieve_advance_invoice_schedule` | `conn_mod_def::GJ1Jt-AgVL4::OE-Xs8oqQMSP0tK11iVecA` |
| Retrieve a Subscription’s Scheduled Change | GET | `/subscriptions/{{subscriptionId}}/scheduled_changes` | `conn_mod_def::GJ1JzuQhq7o::ebKVKrJjRxu2r4B-DYhyKA` |
| Add a Charge to a Subscription at Term End | POST | `/subscriptions/{{subscriptionId}}/add_charge_at_term_end` | `conn_mod_def::GJ1In4CFArQ::ZAhJUCEgT6aV04PKk00-dQ` |
| Cancel a Subscription’s Items | POST | `/subscriptions/{{subscriptionId}}/cancel_for_items` | `conn_mod_def::GJ1Ir08m9-Q::ABAWH3euT3KbJ1MSey-BCQ` |
| Change a Subscription’s Term End | POST | `/subscriptions/{{subscriptionId}}/change_term_end` | `conn_mod_def::GJ1IsdvkclI::P2OVU6c5SJ-5_V6tSI7lZA` |
| Charge Future Renewals for a Subscription | POST | `/subscriptions/{{subscriptionId}}/charge_future_renewals` | `conn_mod_def::GJ1IsuXzfL4::qJyNWxXMR4a26qvw5ANNqQ` |
| Create a Cancellation Estimate for a Subscription’s Items | POST | `/subscriptions/{{subscriptionId}}/cancel_subscription_for_items_estimate` | `conn_mod_def::GJ1IsH1hO0U::M8-ZeV5XQYatZSdtyfxxNQ` |
| Create a Customer Subscription for Items | POST | `/customers/{{customerId}}/subscription_for_items` | `conn_mod_def::GJ1I6Llrgeo::OkN35JmUS_GO1W6YsgEW6A` |

27 more Subscriptions actions are available through search.

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Invoice’s E-Invoice (XML/PDF) | GET | `/invoices/{{invoiceId}}/download_einvoice` | `conn_mod_def::GJ1JBx-BjcY::KDIXEvA5R7KDcRx_ViELoQ` |
| List an Invoice’s Payments | GET | `/invoices/{{invoiceId}}/payments` | `conn_mod_def::GJ1JWJFW9tU::qHLWfy73Q6SZhymUJCW6kg` |
| List Invoice Payment Reference Numbers (PRNs) | GET | `/invoices/payment_reference_numbers` | `conn_mod_def::GJ1JVpmWOe0::mBGxY4y8RmWNjMFnJk2l2Q` |
| List Invoices | GET | `/api/v2/invoices` | `conn_mod_def::GJ1JR2hReaA::w25XfQUGRQK8KDDdRPAxew` |
| Retrieve an Invoice | GET | `/invoices/{{invoiceId}}` | `conn_mod_def::GJ1Ju7TZNTY::Zuu4Qi7dTKSVGU5XAS8vQQ` |
| Retrieve an Invoice’s Payment Schedules | GET | `/invoices/{{invoiceId}}/payment_schedules` | `conn_mod_def::GJ1JyJXlqrc::_Pklk4oKQDy7kDaIdS_E2Q` |
| Add a Charge Item to a Pending Invoice | POST | `/invoices/{{invoiceId}}/add_charge_item` | `conn_mod_def::GJ1Inh0QOMk::2xrLvGw6TluqxiD8r0U8ug` |
| Add a One-Time Charge to a Pending Invoice | POST | `/invoices/{{invoiceId}}/add_charge` | `conn_mod_def::GJ1IofANXKs::xCeM53y6QciA0EzzzYNiww` |
| Apply a Payment Schedule Scheme to an Invoice | POST | `/invoices/{{invoiceId}}/apply_payment_schedule_scheme` | `conn_mod_def::GJ1IqACIIys::YW-amRahRgGf78hFVtFpuA` |
| Apply Credits for an Invoice | POST | `/invoices/{{invoiceId}}/apply_credits` | `conn_mod_def::GJ1Ipx6knlc::N7tGl4hcSXqTZR_b59RM4g` |
| Apply Payments for an Invoice | POST | `/invoices/{{invoiceId}}/apply_payments` | `conn_mod_def::GJ1IqUOikgs::ESJpO1DmT6WuvtJe3dFG_g` |
| Close a Pending Invoice | POST | `/invoices/{{invoiceId}}/close` | `conn_mod_def::GJ1Iuah_rDk::mbZe-co8Tla4ttZo3zNl0Q` |

22 more Invoices actions are available through search.

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer’s Account Hierarchy | GET | `/customers/{{customerId}}/hierarchy` | `conn_mod_def::GJ1JHV1EzdY::8KmAzbyNQjSB0hkTpUDXgw` |
| Get a Customer’s Upcoming Invoices Estimate | GET | `/customers/{{customerId}}/upcoming_invoices_estimate` | `conn_mod_def::GJ1J2_G2I50::8jbDSR_ITuWC5OtuGNDpaA` |
| List a Customer’s Account Hierarchy Details (Paginated) | GET | `/customers/{{customerId}}/hierarchy_detail` | `conn_mod_def::GJ1JHhLHe_o::dwATeOCVS2eBK9pPDLc8QA` |
| List Customers | GET | `/api/v2/customers` | `conn_mod_def::GJ1JOv5cIUY::GtTg3WmnSLSIwk1FhK1vtQ` |
| Retrieve a Customer | GET | `/customers/{{customerId}}` | `conn_mod_def::GJ1Jom8TIfU::bKbSV0tWS6Gqmz55dTSELQ` |
| Add a Contact to a Customer | POST | `/customers/{{customerId}}/add_contact` | `conn_mod_def::GJ1IoIQPro8::Do5S-rr-R0uj-rSq3-d0gQ` |
| Assign a Customer’s Payment Role (Primary/Backup/None) | POST | `/customers/{{customerId}}/assign_payment_role` | `conn_mod_def::GJ1IrNU9J9o::m-ddhoUVRpK1uX6OYiFMgA` |
| Change a Customer’s Billing Date | POST | `/customers/{{customerId}}/change_billing_date` | `conn_mod_def::GJ1IsQ9pBF8::p-6jrn6BSpiWT_vv7zZN-A` |
| Clear a Customer’s Personal Data | POST | `/customers/{{customerId}}/clear_personal_data` | `conn_mod_def::GJ1IuRKNzT4::xcxSDVBiTK-buil7j7eXYw` |
| Collect Payment for a Customer | POST | `/customers/{{customerId}}/collect_payment` | `conn_mod_def::GJ1Iu9h3_R0::DoL5EHJ3S6OulFx3wxIVMA` |
| Copy a Customer’s Card to Another Payment Gateway (Deprecated) | POST | `/customers/{{customerId}}/copy_card` | `conn_mod_def::GJ1Iv3H-3Ig::mPs2GFXAR8SXguG59uLsAw` |
| Create a Customer | POST | `/api/v2/customers` | `conn_mod_def::GJ1IxZASSls::Ccyy7SlMQq2PLYSGn3uJFg` |

17 more Customers actions are available through search.

### HostedPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Hosted Pages | GET | `/api/v2/hosted_pages` | `conn_mod_def::GJ1JQp9IgGI::4D1UfxYrQCG_XDcXZF0M0Q` |
| Retrieve a Hosted Page | GET | `/hosted_pages/{{hostedPageId}}` | `conn_mod_def::GJ1JpTlHaWM::93QfBCfnSmelYq9e5exG6g` |
| Accept a Quote (Generate Hosted Page) | POST | `/api/v2/hosted_pages/accept_quote` | `conn_mod_def::GJ1ImokrFj0::jLHZn7_LTx-c6FJCJcoVpw` |
| Acknowledge a Hosted Page | POST | `/hosted_pages/{{hostedPageId}}/acknowledge` | `conn_mod_def::GJ1Im4xGoBc::NrX2H9tKRRa2l7XMShxKBg` |
| Checkout a Gift Subscription for Items (Hosted Page) | POST | `/hosted_pages/checkout_gift_for_items` | `conn_mod_def::GJ1ItWuJ3oY::D2W_b7zqTUS52r49YvOjaQ` |
| Checkout One-Time for Items (Hosted Page) | POST | `/hosted_pages/checkout_one_time_for_items` | `conn_mod_def::GJ1ItHGfyX8::nFuB_MumR6KVzFojL4Ff-w` |
| Claim a Gift Subscription (Hosted Page) | POST | `/hosted_pages/claim_gift` | `conn_mod_def::GJ1IuBvwHPs::PSU9RIn9QNG8wqzq5iEMrA` |
| Create a Hosted Page Checkout to Update a Subscription (Existing Items) | POST | `/hosted_pages/checkout_existing_for_items` | `conn_mod_def::GJ1I48YtcCc::iU-KMjI6QwyxN_vbzfmxUA` |
| Create a Hosted Page to View Boleto Vouchers | POST | `/hosted_pages/view_voucher` | `conn_mod_def::GJ1IyKP32Z8::LfuFi7wvSkawXxvLcbJqFQ` |
| Create a Pre-cancel Hosted Page | POST | `/hosted_pages/pre_cancel` | `conn_mod_def::GJ1Iz65k7wk::5mCyCH_sQ9eaPfedkE05iA` |
| Create Hosted Page Checkout for a New Subscription (New Subscription Items) | POST | `/hosted_pages/checkout_new_for_items` | `conn_mod_def::GJ1I4xGo_Ng::tuRMbizuQYKru9cYoxjqzA` |
| Extend a Subscription (Hosted Page) | POST | `/hosted_pages/extend_subscription` | `conn_mod_def::GJ1JHH3hYHU::gaX0UoJXQHaw4vwKMzBKcw` |

5 more HostedPages actions are available through search.

### PaymentSources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Payment Sources | GET | `/payment_sources` | `conn_mod_def::GJ1JV6lzn9c::P-7fTzXYSCSVmI13A2bh7A` |
| Retrieve a Payment Source | GET | `/payment_sources/{{custPaymentSourceId}}` | `conn_mod_def::GJ1Jp4mCFGU::N5dSsriCTKiID_eyC9M18A` |
| Create a Bank Account Payment Source (Direct Debit) for a Customer | POST | `/api/v2/payment_sources/create_bank_account` | `conn_mod_def::GJ1IwIEXxCY::DqCfdS8JQ06G3BmZ9Lc0-A` |
| Create a Card Payment Source | POST | `/payment_sources/create_card` | `conn_mod_def::GJ1Iwl54SU0::rH7k4PgxT9mZhokY9yTmjg` |
| Create a Payment Source Using a Chargebee Token | POST | `/payment_sources/create_using_token` | `conn_mod_def::GJ1I6h1zAlg::ihGJ-Ym7TSW1c12DUZAp0Q` |
| Create a Payment Source Using a Gateway Temporary Token | POST | `/api/v2/payment_sources/create_using_temp_token` | `conn_mod_def::GJ1I6vas8hE::GgT8TuwzSWesI3EE0hkOdw` |
| Create a Payment Source Using a Payment Intent | POST | `/api/v2/payment_sources/create_using_payment_intent` | `conn_mod_def::GJ1I64loQjg::RGHk7LEzT4aYKbrTdmm_1Q` |
| Create a Payment Source Using a Permanent Token | POST | `/payment_sources/create_using_permanent_token` | `conn_mod_def::GJ1I7HeOTwI::OD_-GzjjS2Oc2EFfbbL52w` |
| Create a Voucher Payment Method (Payment Source) | POST | `/payment_sources/create_voucher_payment_source` | `conn_mod_def::GJ1I2fZSReQ::SAHnm6t0T3CHprE6wEw98w` |
| Delete a Customer Payment Source Reference (Local Delete) | POST | `/payment_sources/{{custPaymentSourceId}}/delete_local` | `conn_mod_def::GJ1Jd_VZet4::laMwEPbfSDev4fe-dBlxdw` |
| Delete a Payment Source | POST | `/payment_sources/{{custPaymentSourceId}}/delete` | `conn_mod_def::GJ1I9I4N4rc::uCtJBI-5R66PntCT2TwAGw` |
| Export a Payment Source to a Gateway | POST | `/payment_sources/{{custPaymentSourceId}}/export_payment_source` | `conn_mod_def::GJ1JF8jlWnI::3QbQTmqDQbqvLF4b8aYs0g` |

4 more PaymentSources actions are available through search.

### Exports

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Export | GET | `/exports/{{exportId}}` | `conn_mod_def::GJ1JuwNKdqc::GThhKdbJTgyNEWCc7IszoQ` |
| Export Attached Items | POST | `/api/v2/exports/attached_items` | `conn_mod_def::GJ1JD2U6sNg::IEbcQN99T7-22mHOXEsydA` |
| Export Coupons | POST | `/api/v2/exports/coupons` | `conn_mod_def::GJ1JD-4rD2I::JYFGsHlSSF66QS-xcxdRDQ` |
| Export Credit Notes | POST | `/api/v2/exports/credit_notes` | `conn_mod_def::GJ1JEMJ1tmc::ouTeRwgaSfO8oSU2M9U8Iw` |
| Export Customers | POST | `/api/v2/exports/customers` | `conn_mod_def::GJ1JEdZzyRc::crL9IG3IRNqmJMfNs-prgQ` |
| Export Deferred Revenue Reports (Deprecated) | POST | `/api/v2/exports/deferred_revenue` | `conn_mod_def::GJ1JEmOAhmA::qLD68_BPSvKNLuioMRdq5Q` |
| Export Differential Prices | POST | `/exports/differential_prices` | `conn_mod_def::GJ1JE3ObfeM::EpyGWShCQieLsv3jsxCH5A` |
| Export Invoices | POST | `/exports/invoices` | `conn_mod_def::GJ1JFCq7UtA::Ibjugx-9RhuRELhwRt_ITw` |
| Export Item Families | POST | `/exports/item_families` | `conn_mod_def::GJ1JFK7O-Oo::HHA6QHvjTlu0gHLhlU1FNA` |
| Export Item Prices | POST | `/exports/item_prices` | `conn_mod_def::GJ1JFT-V1mU::7IvnMD-vQTaHQ5JZSHtqLA` |
| Export Items | POST | `/exports/items` | `conn_mod_def::GJ1JFhph_oA::5y7XVqd5R2OvYJBPMMQmlw` |
| Export Orders | POST | `/api/v2/exports/orders` | `conn_mod_def::GJ1JFvdVazs::d8MS6ki7Qm605RtUgaB7uw` |

4 more Exports actions are available through search.

### CreditNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Credit Note’s E-Invoice | GET | `/credit_notes/{{creditNoteId}}/download_einvoice` | `conn_mod_def::GJ1JB8-CcaM::Gqea8gSoRy-toSGDrIeyPQ` |
| List Credit Notes | GET | `/api/v2/credit_notes` | `conn_mod_def::GJ1JNviT69c::MmeGGR-FQqy7H5K35aRB5g` |
| Retrieve a Credit Note | GET | `/credit_notes/{{creditNoteId}}` | `conn_mod_def::GJ1JoQixQGA::ru3o0MNSSN2sePkaBnPYmg` |
| Create a Credit Note | POST | `/credit_notes` | `conn_mod_def::GJ1I5MiNyOw::9eJQAtMJR_2zrjAm_-5H2Q` |
| Delete a Credit Note | POST | `/credit_notes/{{creditNoteId}}/delete` | `conn_mod_def::GJ1I8R0oE0o::zT25XlULRvKjSlNCEj6KYw` |
| Import a Credit Note | POST | `/api/v2/credit_notes/import_credit_note` | `conn_mod_def::GJ1JIc9CB0U::dFg3Oj_KTXaHllKxFPRZIQ` |
| Record a Refund for a Credit Note | POST | `/credit_notes/{{creditNoteId}}/record_refund` | `conn_mod_def::GJ1JibtDS1M::Mik77n4VQn61Z2zliWpPyA` |
| Refund a Credit Note | POST | `/credit_notes/{{creditNoteId}}/refund` | `conn_mod_def::GJ1Ji_VIuiI::0lBhN-_dT3OhFQPfcehZkg` |
| Remove Tax Withheld Refunds From a Credit Note | POST | `/credit_notes/{{creditNoteId}}/remove_tax_withheld_refund` | `conn_mod_def::GJ1Jl272Kyg::gHJSg1Q2QpKpvjkZnbrCUQ` |
| Resend Failed eInvoice for a Credit Note | POST | `/credit_notes/{{creditNoteId}}/resend_einvoice` | `conn_mod_def::GJ1JmhUXrXM::iOqKAqMSQ1Cvgbmc40uiBw` |
| Retrieve a Credit Note PDF Download URL | POST | `/credit_notes/{{creditNoteId}}/pdf` | `conn_mod_def::GJ1Jw6qV66c::2fB5Re9ZR2GXW0H3Woxw5w` |
| Send an E-Invoice for a Credit Note | POST | `/credit_notes/{{creditNoteId}}/send_einvoice` | `conn_mod_def::GJ1Jz6i8Hho::6xbyXidTSiubVviGrkzdfA` |

1 more CreditNotes actions are available through search.

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Quotes | GET | `/api/v2/quotes` | `conn_mod_def::GJ1JZUf6dMI::ld3CnZgxQbuV6V8LL4SJPA` |
| Retrieve a Quote | GET | `/quotes/{{quoteId}}` | `conn_mod_def::GJ1Jrxtx3hg::I4hIZdeDS_ifjd45DwS5nA` |
| Convert a Quote to an Invoice | POST | `/quotes/{{quoteId}}/convert` | `conn_mod_def::GJ1IvdHv_xs::2MF6-m0VTcq7kUzyQiEfrw` |
| Create a Quote for a Customer’s New Subscription Items | POST | `/customers/{{customerId}}/create_subscription_quote_for_items` | `conn_mod_def::GJ1I1Ei0Aj4::Ek1Zd0p8TDOT20DrcjXnfw` |
| Create a Quote for Charge Items and One-Time Charges | POST | `/api/v2/quotes/create_for_charge_items_and_charges` | `conn_mod_def::GJ1I01kgqOA::elPePRqDRPW0hss3Xpyzqg` |
| Create a Quote for Updating a Subscription (Items) | POST | `/api/v2/quotes/update_subscription_quote_for_items` | `conn_mod_def::GJ1I1OEZ2uU::l88SxRsqS3Ot5YyvA8-_1Q` |

7 more Quotes actions are available through search.

This lists 90 of 409 actions. For anything not here, call `search_one_platform_actions` with platform `chargebee`. The full catalog is at https://www.withone.ai/knowledge/chargebee.

## When a call fails

The error comes from Chargebee, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/chargebee

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
