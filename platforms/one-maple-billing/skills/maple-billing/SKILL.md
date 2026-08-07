---
name: maple-billing
description: Maple Billing is an all-in-one revenue management platform that empowers SaaS companies to streamline billing, invoicing, and contract workflows across usage-based, seat-based, and hybrid pricing models—without taking a cut of your revenue. Read and write Maple Billing data through One: subscriptions, invoices, credits, objects, customers, entitlements and more, 77 actions with real parameter documentation. Use whenever the user asks to look something up in Maple Billing, create or update a record there, or build code against the Maple Billing API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: maple-billing
  generated-from: one-knowledge-base
---

# Maple Billing through One

Maple Billing is an all-in-one revenue management platform that empowers SaaS companies to streamline billing, invoicing, and contract workflows across usage-based, seat-based, and hybrid pricing models—without taking a cut of your revenue.

One exposes Maple Billing through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `maple-billing` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Maple Billing is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Maple Billing account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Subscription | GET | `/subscriptions/{{id}}` | `conn_mod_def::GJ45N4NnC2o::sVH0aBs7Q5ylf7oFbKPtjQ` |
| Cancel a Company's Subscription | POST | `/subscriptions/{{id}}/cancel` | `conn_mod_def::GJ45Npd1P10::QIik8JfSS2yEoPJnTivAjw` |
| Change a Company's Subscription | POST | `/subscriptions/{{id}}/change` | `conn_mod_def::GJ45NpsQyEg::0cSNvAGeTj-1OGw8scE_Ow` |
| Create a Company's Subscription | POST | `/subscriptions` | `conn_mod_def::GJ45NqJ-1Tk::vexMKBJsRNugdb1hTAYjLw` |
| Extend a Subscription’s Trial End Date (for a Company) | POST | `/subscriptions/{{id}}/extend` | `conn_mod_def::GJ45NwHi6AY::lVM_oXI5S72j-bSHNCuznw` |
| Find a Company's Subscriptions | POST | `/subscriptions/find` | `conn_mod_def::GJ45N4-tqOE::PN4PBqVoT5yaZdNXe8KFIQ` |
| Generate Next Invoice for a Company Subscription | POST | `/subscriptions/{{id}}/generate_next_invoice` | `conn_mod_def::GJ45N6mrKEI::ApN7-gAQTnukc0q1cS7ZhQ` |
| Get a Subscription’s Current-Period Usage | POST | `/subscriptions/{{id}}/current_period_usage` | `conn_mod_def::GJ45N9eQ8rQ::Nc-Z0gpZTIOF4m7Q45ggPA` |
| Get a Subscription’s Usage | POST | `/subscriptions/{{id}}/usage` | `conn_mod_def::GJ45N4KyeK0::NfrFyMuhTX2oHfZhJpSoCA` |
| Undo a Company Subscription’s Upcoming Cancellation | POST | `/subscriptions/{{id}}/undo_cancel` | `conn_mod_def::GJ45OF4IJ6g::k0vjoFLdQBGmiOXgxo-RuA` |
| Update a Company's Subscription | PATCH | `/subscriptions/{{id}}` | `conn_mod_def::GJ45OFYWdJw::hkoTxwt-Qoak80-S-plezQ` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate an Invoice PDF for a Company | GET | `/invoices/{{uuid}}/pdf` | `conn_mod_def::GJ45MkI0ZQA::jinYiv0qQk2_Ag1HWyfBZA` |
| Get a Company Invoice by UUID | GET | `/invoices/{{uuid}}` | `conn_mod_def::GJ45MkdrTW8::NINoGQhGTKm41e1sDHbC4Q` |
| Get an Invoice Link (with Embedded Auth Token) for a Company | GET | `/invoices/{{uuid}}/link` | `conn_mod_def::GJ45Mkc85B4::D-ld2uP_QcSLJbCzN2v_Gw` |
| Finalize a Company's Draft Invoice | POST | `/invoices/{{uuid}}/finalize` | `conn_mod_def::GJ45Ml6OGWo::D4BRskIDS8Gtsrx-WQ3g-A` |
| Find a Company's Invoices | POST | `/invoices/find` | `conn_mod_def::GJ45MkaKaEE::OeSP3yUdQ7e7DJBvliBxTw` |
| Mark a Company Invoice as Paid | POST | `/invoices/{{uuid}}/mark_paid` | `conn_mod_def::GJ45Mt7tdR4::TsUi46m-Rzyv97_taOQkqg` |
| Retrieve Next Invoice for a Company | POST | `/invoices/next` | `conn_mod_def::GJ45MuE4kzk::NF50zCzMQH-TpGWzZXcv8g` |
| Update a Company's Invoice | PATCH | `/invoices/{{uuid}}` | `conn_mod_def::GJ45MvX2Oms::jiebc7RzTw-qTdrrLUHwxw` |
| Void a Company's Invoice | POST | `/invoices/{{uuid}}/void` | `conn_mod_def::GJ45Muq29OA::bGl9p9wWSimD3C3TLPeGdA` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Customer’s Credits Balance (for a Company) | GET | `/credits/check_balance/{{customerId}}` | `conn_mod_def::GJ45Lm9fpyI::DF0mt2DBQxOUMhhiOzPbKg` |
| Get a Company's Credit | GET | `/credits/{{id}}` | `conn_mod_def::GJ45Lx11BVk::XuqJmHEfS-yh6dkTbbM_8Q` |
| Consume a Company’s Credits | POST | `/credits/consume` | `conn_mod_def::GJ45LmWfy7o::8nH9bmdYTlGma0jWIemKkw` |
| Create a Company's Credit | POST | `/credits` | `conn_mod_def::GJ45LmVtF7I::euVSuvvqTCOG0GWD0W1qSA` |
| Find a Company’s Credits | POST | `/credits/find` | `conn_mod_def::GJ45L1SRHfg::skZklyPuQNqxf60yllZ2tg` |
| Revoke a Company's Credit | DELETE | `/credits/{{id}}` | `conn_mod_def::GJ45LxYGUDA::g8zDnyreRh2PttUkCjJCzw` |

### Objects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Object by ID | GET | `/objects/{{id}}` | `conn_mod_def::GJ45M3CyWh4::R3K3dTWmQcCIViHsyDPHDA` |
| Create an Object for Metrics Calculation (Company) | POST | `/objects` | `conn_mod_def::GJ45M4F1VMc::wbsmMNG-TkSDwXCd2yU7ng` |
| Delete a Company's Object | DELETE | `/objects/{{id}}` | `conn_mod_def::GJ45M3Cbe08::N13olTajSS2-WvWJDjbdBw` |
| Find a Company’s Objects | POST | `/objects/find` | `conn_mod_def::GJ45M3w9TIY::vVz6odPyRHO6wMfBDEuJww` |
| Ingest Objects for a Company | POST | `/objects/ingest` | `conn_mod_def::GJ45M3kfESo::xZqCe3RQT_2GBCcimJfKMw` |
| Update a Company's Object | PATCH | `/objects/{{id}}` | `conn_mod_def::GJ45NAV8IrE::pdJ-Ijj6S4m5eWNGrmWFkA` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Customer | GET | `/customers/{{customerId}}` | `conn_mod_def::GJ45L9Iw_MI::UvsdOe8xTJmol00TkAak9A` |
| Create a Company's Customer | POST | `/customers` | `conn_mod_def::GJ45MCn8cLA::-FPowKLLS-q90iKvyghhHA` |
| Find a Company's Customers | POST | `/customers/find` | `conn_mod_def::GJ45L9f2DyE::zj5vRpSNRa6z-w1TTyK4jg` |
| Start Managing a Company Customer | PATCH | `/customers/{{customerId}}/start_managing` | `conn_mod_def::GJ45MLTbDlI::c5FuEWPDQfyg7UEMkDQD3w` |
| Update a Company's Customer | PATCH | `/customers/{{customerId}}` | `conn_mod_def::GJ45MKf81CM::RouFXENDQKGDHWiQgEpdAg` |

### Entitlements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Entitlement | GET | `/entitlements/{{id}}` | `conn_mod_def::GJ45McROGGI::4r7BxCrSQgi7OSQCN8M4UA` |
| Create a Company's Entitlement | POST | `/entitlements` | `conn_mod_def::GJ45MKitsRs::8PMuaBJxTHauYssz7Tv_oQ` |
| Delete a Company's Entitlement | DELETE | `/entitlements/{{id}}` | `conn_mod_def::GJ45MX1dGqI::13VuyNKwTlGPx-Ueh2aGOw` |
| Find a Company's Entitlements | POST | `/entitlements/find` | `conn_mod_def::GJ45MZZwZ0w::KujpQLGBS6OG60s_AkheBg` |
| Update a Company's Entitlement | PATCH | `/entitlements/{{id}}` | `conn_mod_def::GJ45MZAMK98::Xgl0hGF0TXWAyz5OYwMZGA` |

### Contracts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Contract | GET | `/contracts/{{id}}` | `conn_mod_def::GJ45LaTIrjo::otUJnBZqQw24PSP4t6uPxw` |
| Create a Company's Contract | POST | `/contracts` | `conn_mod_def::GJ45LaTdiew::HyjY6meESeGTPRiPxMaJLQ` |
| Find a Company’s Contracts | POST | `/contracts/find` | `conn_mod_def::GJ45LdhIKOY::-OjV-LVgT6OVTPThpiTtRg` |
| Update a Company's Contract | PATCH | `/contracts/{{id}}` | `conn_mod_def::GJ45Lpxwhwk::y90N6kvwTZOVN629TKT-7A` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Product | GET | `/products/{{id}}` | `conn_mod_def::GJ45Ncwn-Qc::a6Dsx5zUSx29lvvGRhQ7aA` |
| Create a Product for a Company | POST | `/products` | `conn_mod_def::GJ45NLiwTU0::zFOtiyFyTwSqloJ6zxAoLw` |
| Find a Company's Products | POST | `/products/find` | `conn_mod_def::GJ45NTFdR6A::dlNTzLMUQpCB_CgwzIZKPg` |
| Update a Company's Product | PATCH | `/products/{{id}}` | `conn_mod_def::GJ45NdJBZE4::lTnpP6fmSWWje601j8_umg` |

### BillableItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Company's Billable Item | POST | `/billable_items` | `conn_mod_def::GJ45NI2uZVk::WaQS9ySAT--kTzmlrWVPgw` |
| Find a Company's Billable Items | POST | `/billable_items/find` | `conn_mod_def::GJ45NJ20UIQ::LylumTJ_Qq2Jpqtf5ylbPA` |
| Update a Company’s Billable Item | PATCH | `/billable_items/{{id}}` | `conn_mod_def::GJ45NcsN6d0::Hb1cNe23S3e_0slkQ62j7Q` |

### BillableMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Company Billable Metric | POST | `/billable_metrics` | `conn_mod_def::GJ45NJqc3MI::SBnvPW5sTbSwHehQ5uLp8g` |
| Find a Company’s Billable Metrics | POST | `/billable_metrics/find` | `conn_mod_def::GJ45NTzaZ3k::TZt9RN7aSkmrg0zXidvSzg` |
| Update a Company’s Billable Metric | PATCH | `/billable_metrics/{{id}}` | `conn_mod_def::GJ45Nd8jPZo::F-f94AfPRD6Wu-WFthllDQ` |

### ProductPricing

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Product Pricing | GET | `/pricing/{{id}}` | `conn_mod_def::GJ45Nhipd0k::UZVD67mUStiawXsYuDJzrA` |
| Find a Company’s Product Pricing | POST | `/pricing/find` | `conn_mod_def::GJ45NUJ1Nco::WrIkM7d0RB226GbnZC2WUg` |
| Update a Company's Product Pricing | PATCH | `/pricing/{{id}}` | `conn_mod_def::GJ45NqJajwc::NGOQ41VsSN6uqkRR0VRQvg` |

### CheckoutSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Checkout Session | GET | `/checkout/{{id}}` | `conn_mod_def::GJ45Lafx-XQ::e1MHqfKqR1KRiKdRzkJOFQ` |
| Create a Company's Checkout Session | POST | `/checkout` | `conn_mod_def::GJ45LZkz09I::RG8LkmqFT3WdO28AWgBeoQ` |

### PaymentMethods

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Customer’s Payment Methods (for a Company) | GET | `/customers/{{customerId}}/payment_methods` | `conn_mod_def::GJ45L9dJewo::vy_IFGA7RdCK6heA3z5T_Q` |
| Update a Customer’s Payment Method | PATCH | `/customers/{{customerId}}/payment_methods/{{id}}` | `conn_mod_def::GJ45MK_A9yA::Wif6Gd21Sfeb_-1QxnLJ7g` |

### PaymentTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Company's Payment Transactions | POST | `/payments/transactions/find` | `conn_mod_def::GJ45NAXj9Rc::MVee35gVRsGyH0jBjz1arA` |
| Refund a Company's Payment Transaction | POST | `/payments/transactions/{{id}}/refund` | `conn_mod_def::GJ45NAibfxs::9vpHSRwHRHq9DVhXdZSJGA` |

### OneTimes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create One-Time Charges for a Company | POST | `/one_times` | `conn_mod_def::GJ45NBD0VZM::glUtzOxcStmz8xv2TPJrzA` |
| Find a Company's One-Time Charges | POST | `/one_times/find` | `conn_mod_def::GJ45NA6uUSk::XhbHfwAAQdOzySemRq5UIA` |

### Bundles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Bundle | GET | `/bundles/{{id}}` | `conn_mod_def::GJ45NT9bSp4::YyXS07wDRWywu_Mpa3mF-Q` |
| Find a Company’s Bundles | POST | `/bundles/find` | `conn_mod_def::GJ45NThC3GE::_vZqPeNMQPCEd3ABDeRVtQ` |

### CreditLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Company’s Credit Logs | POST | `/credits/logs/find` | `conn_mod_def::GJ45LmEVSyM::NOJ1KvSmSh6jxl-XoM272w` |

### CustomerPortals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer’s Portal Link | POST | `/customer_dashboards/{{customer_id}}/portal` | `conn_mod_def::GJ45LyNufj8::iBkr75cPQ0CLIrQlvktUXg` |

### PaymentMethodLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Payment Method Link for a Customer | POST | `/customers/{{customerId}}/add_payment_method_link` | `conn_mod_def::GJ45LyafCqE::y6UYfJE8Qlyn7At7XBpEmQ` |

### CustomerPaymentMethods

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Customer’s Payment Method | DELETE | `/customers/{{customerId}}/payment_methods/{{id}}` | `conn_mod_def::GJ45L8_fWwE::D07VbpdgRGaSOmjlfSFWjg` |

### PaymentProviderSetupIntents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer’s Payment Provider Setup Intent | GET | `/customers/{{customerId}}/payment_methods/setup_intent` | `conn_mod_def::GJ45MQSHNzo::1w11O8AgSFe8yNeo4Or84w` |

### UsageEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Ingest Usage Events for a Company | POST | `/events/ingest` | `conn_mod_def::GJ45MYnpOx8::rhQe_g98SeuFhA7F1nnyZQ` |

### Pricing

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Company's Product Pricing | POST | `/pricing` | `conn_mod_def::GJ45NJjwm0U::vhcP4PdGR3udmDfg7PTQxA` |

### CachedMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cached Metrics Data for a Company | POST | `/report/cached_metrics` | `conn_mod_def::GJ45MulHOYI::S3kkyPtsRSCo9WZ8zIImVg` |

## When a call fails

The error comes from Maple Billing, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/maple-billing

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
