---
name: stripe
description: Stripe is a payment processing platform that helps businesses accept payments, send payouts, and manage financial operations with APIs for web and mobile apps. Read and write Stripe data through One: invoices, terminalreaders, subscriptions, issuingauthorizations, paymentintents, refunds and more, 587 actions with real parameter documentation. Use whenever the user asks to look something up in Stripe, create or update a record there, or build code against the Stripe API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: stripe
  generated-from: one-knowledge-base
---

# Stripe through One

Stripe is a payment processing platform that helps businesses accept payments, send payouts, and manage financial operations with APIs for web and mobile apps.

One exposes Stripe through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `stripe` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Stripe is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Stripe account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invoices | GET | `/invoices` | `conn_mod_def::GJ7KswBYlCw::BN6om4mlSIeedATrlfjvbA` |
| Retrieve an Invoice | GET | `/invoices/{{invoice}}` | `conn_mod_def::GJ7K5UwPNmw::qSndUbDMQ8CtAPCDkw93Ow` |
| Search Invoices | GET | `/invoices/search` | `conn_mod_def::GJ7K6C1M66U::y57YnN44T5aHu59tr5uZLg` |
| Attach a Payment to an Invoice | POST | `/invoices/{{invoice}}/attach_payment` | `conn_mod_def::GJ7KlfMmsOw::_Z0CRvEYQvqmyw6b37hJqA` |
| Bulk Add Line Items to an Invoice (Draft Only) | POST | `/invoices/{{invoice}}/add_lines` | `conn_mod_def::GJ7KlugmC7I::0Ziyp-zDR9CUIXYPpd0X9w` |
| Bulk Remove an Invoice’s Line Items | POST | `/invoices/{{invoice}}/remove_lines` | `conn_mod_def::GJ7Klt2VZ3g::ZJXAaq2rQFin2aQd0hmghg` |
| Bulk Update an Invoice’s Line Items | POST | `/invoices/{{invoice}}/update_lines` | `conn_mod_def::GJ7KlsMN07M::6P03cndMTg6ZBW8dXbtMwQ` |
| Create a Preview Invoice | POST | `/invoices/create_preview` | `conn_mod_def::GJ7KnrydtIM::DxjGKwVISkKB6h8foI2TRw` |
| Create an Invoice | POST | `/invoices` | `conn_mod_def::GJ7Ko5Qb5xM::e9nL9hM4SruJVu2TxU1JLQ` |
| Delete a Draft Invoice | DELETE | `/invoices/{{invoice}}` | `conn_mod_def::GJ7KqCQmgug::VU2NPpraQESYqRQKGjicKQ` |
| Finalize an Invoice | POST | `/invoices/{{invoice}}/finalize` | `conn_mod_def::GJ7Kq1IRAXw::thn5-Gs3R128_DFO3_-oVA` |
| Mark an Invoice as Uncollectible | POST | `/invoices/{{invoice}}/mark_uncollectible` | `conn_mod_def::GJ7KvGyUCjE::bckhGDPXTPe5dZYgjiQ5vw` |

4 more Invoices actions are available through search.

### TerminalReaders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Terminal Readers | GET | `/terminal/readers` | `conn_mod_def::GJ7KteqaylI::PM0MOYIOSmGR810s0FeAEA` |
| Retrieve a Terminal Reader | GET | `/terminal/readers/{{reader}}` | `conn_mod_def::GJ7Kyg-RHeQ::NPLzLfYcTI20FBbEC7cWsQ` |
| Cancel a Terminal Reader’s Current Action | POST | `/v1/terminal/readers/{{reader}}/cancel_action` | `conn_mod_def::GJ7KmFpxfYU::je4ek7PbTK2UnszT1XgbsA` |
| Collect a Payment Method on a Terminal Reader for a PaymentIntent | POST | `/terminal/readers/{{reader}}/collect_payment_method` | `conn_mod_def::GJ7KrRI0ELA::1b7IQxGBTlipccH5G9PTbQ` |
| Collect Inputs on a Terminal Reader | POST | `/terminal/readers/{{reader}}/collect_inputs` | `conn_mod_def::GJ7KmOjSfVQ::5TMS2cOdRWGF26N9bt1iaw` |
| Confirm a Reader’s PaymentIntent (Terminal) | POST | `/v1/terminal/readers/{{reader}}/confirm_payment_intent` | `conn_mod_def::GJ7KmYERNlA::5tx_eQ3VTjePYdLXgIoThw` |
| Create a Terminal Reader | POST | `/terminal/readers` | `conn_mod_def::GJ7KnzEGUtM::nkV9MWLsQOSngRkF7vAi3A` |
| Delete a Terminal Reader | DELETE | `/terminal/readers/{{reader}}` | `conn_mod_def::GJ7KqKIfxKE::E19VA2iSQi6NxVQf8Gps0w` |
| Hand Off a SetupIntent to a Terminal Reader (Process SetupIntent) | POST | `/v1/terminal/readers/{{reader}}/process_setup_intent` | `conn_mod_def::GJ7KrRQLF3I::aj9azMcQTfyrO85MT2_Bvg` |
| Initiate an In‑Person Refund on a Terminal Reader (Charge or PaymentIntent) | POST | `/terminal/readers/{{reader}}/refund_payment` | `conn_mod_def::GJ7KwTw5vZ4::Uqx7H33BQjO7Pf2F7NBl0g` |
| Process a PaymentIntent on a Terminal Reader | POST | `/terminal/readers/{{reader}}/process_payment_intent` | `conn_mod_def::GJ7KrQ9f8Ko::Wro_IhkWTNiCl8UYRmV1Ag` |
| Set a Terminal Reader’s Display (Cart Details) | POST | `/terminal/readers/{{reader}}/set_reader_display` | `conn_mod_def::GJ7K6UY0sHs::p7sVSJckTNG__GPkX_-8iA` |

4 more TerminalReaders actions are available through search.

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Customer’s Active Subscriptions | GET | `/customers/{{customer}}/subscriptions` | `conn_mod_def::GJ7KrkzkpqU::KRvjQaTsQCajvxNGNZNOPg` |
| List Subscriptions | GET | `/subscriptions` | `conn_mod_def::GJ7Ku75hXu8::mfT7dYOYQQCoxlI7D5uKIw` |
| Retrieve a Customer’s Subscription | GET | `/customers/{{customer}}/subscriptions/{{subscriptionExposedId}}` | `conn_mod_def::GJ7K4Qis9LI::DgiSyyieRZSYXmT_SfzzJg` |
| Retrieve a Subscription | GET | `/subscriptions/{{subscriptionExposedId}}` | `conn_mod_def::GJ7K4QggPAA::ZABhhlUtRC2xoXQDIvGugw` |
| Search Subscriptions | GET | `/subscriptions/search` | `conn_mod_def::GJ7K6NavVog::75UgNO4VSZ2ZWjokI8v3zQ` |
| Cancel a Customer’s Subscription | DELETE | `/customers/{{customer}}/subscriptions/{{subscriptionExposedId}}` | `conn_mod_def::GJ7Kl9MPZjE::X8UnoMSSSaqcLkI4lJdzgw` |
| Cancel a Subscription | DELETE | `/subscriptions/{{subscriptionExposedId}}` | `conn_mod_def::GJ7Kl-OLkmw::nyt6f9b_RgmkJZ4FdFP_jA` |
| Create a Customer Subscription | POST | `/customers/{{customer}}/subscriptions` | `conn_mod_def::GJ7KoH3kg7I::EDBxGFjeQDK_B76SacK12w` |
| Create a Subscription | POST | `/subscriptions` | `conn_mod_def::GJ7KoHXZpqw::ew3KnbPRT3imwMjZ1ATeHw` |
| Delete a Subscription's Discount | DELETE | `/subscriptions/{{subscriptionExposedId}}/discount` | `conn_mod_def::GJ7KqKP4JoE::bJ8CcurkS7ibM_vqHRhUKA` |
| Migrate a Subscription | POST | `/subscriptions/{{subscription}}/migrate` | `conn_mod_def::GJ7KvGtYYeU::1l5buj-cSeGAxhX66HMhew` |
| Resume a Subscription | POST | `/subscriptions/{{subscription}}/resume` | `conn_mod_def::GJ7Kw1qAUG8::zS3vvRJXRj6KPtHzU6TXQg` |

2 more Subscriptions actions are available through search.

### IssuingAuthorizations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Issuing Authorizations | GET | `/issuing/authorizations` | `conn_mod_def::GJ7KrwEqZ9U::7IsjXjwOTQelpEmTsUvRsQ` |
| Retrieve an Issuing Authorization | GET | `/issuing/authorizations/{{authorization}}` | `conn_mod_def::GJ7K5EKG7Fo::ahSy2dQZQJ6gE5F5Zl3U4g` |
| Approve an Issuing Authorization | POST | `/issuing/authorizations/{{authorization}}/approve` | `conn_mod_def::GJ7Klk0czYg::aorGlIWFTaW4yjLSIol8xQ` |
| Capture a Test-Mode Issuing Authorization | POST | `/test_helpers/issuing/authorizations/{{authorization}}/capture` | `conn_mod_def::GJ7KmQ5SMtg::9iC6PgEbR-qoFFzZND5c0g` |
| Create a Test-Mode Issuing Authorization | POST | `/test_helpers/issuing/authorizations` | `conn_mod_def::GJ7KoYxnzNs::iusvtcy5T4-dhXm6ojEGyw` |
| Decline an Issuing Authorization | POST | `/issuing/authorizations/{{authorization}}/decline` | `conn_mod_def::GJ7KptkyfOU::sMSrf0wEQOytwsuTRHy3WA` |
| Expire a Test-mode Issuing Authorization | POST | `/test_helpers/issuing/authorizations/{{authorization}}/expire` | `conn_mod_def::GJ7KquQUaQc::wcvX7WUVS-SQAW2c9rwGFw` |
| Finalize a Test-mode Issuing Authorization’s Amount | POST | `/v1/test_helpers/issuing/authorizations/{{authorization}}/finalize_amount` | `conn_mod_def::GJ7Kq16Ep_Y::kway80vcTOWWSSPm5kCDVQ` |
| Increment a Test-Mode Issuing Authorization | POST | `/v1/test_helpers/issuing/authorizations/{{authorization}}/increment` | `conn_mod_def::GJ7Krd1I3yQ::k5tvDNlpRBCFTaFKYeOafg` |
| Respond to a Fraud Challenge on an Issuing Authorization (Test Helpers) | POST | `/test_helpers/issuing/authorizations/{{authorization}}/fraud_challenges/respond` | `conn_mod_def::GJ7Kw24kdz0::YoS7VaLiRo2xPpVc5HZqyw` |
| Reverse a Test-mode Issuing Authorization | POST | `/v1/test_helpers/issuing/authorizations/{{authorization}}/reverse` | `conn_mod_def::GJ7K54zPT5w::Wq9rw3gbQsSb4NB13I1Uzg` |
| Update an Issuing Authorization | POST | `/issuing/authorizations/{{authorization}}` | `conn_mod_def::GJ7K8u8YJYQ::vb4I2CovSkCfn1gsN62Xqg` |

### PaymentIntents

| Action | Method | Path | Action id |
|---|---|---|---|
| List PaymentIntents | GET | `/payment_intents` | `conn_mod_def::GJ7KtHxuWGw::AkCadQ_cSUi4XPBVJcOSBA` |
| Retrieve a PaymentIntent | GET | `/payment_intents/{{intent}}` | `conn_mod_def::GJ7KyJU0T_c::xRWfQtdCREG855MzO3gy7A` |
| Search PaymentIntents | GET | `/payment_intents/search` | `conn_mod_def::GJ7K6FLTmp4::ZxHtSFDAR7GH2S23-YT7Sg` |
| Cancel a PaymentIntent | POST | `/payment_intents/{{intent}}/cancel` | `conn_mod_def::GJ7KltVKcSI::lDkv8x4lQqyfsbNsQVqa0w` |
| Capture a PaymentIntent’s Funds | POST | `/payment_intents/{{intent}}/capture` | `conn_mod_def::GJ7KmOq-J0w::vWWTi30KTemJhFWuOwRD0A` |
| Confirm a PaymentIntent | POST | `/payment_intents/{{intent}}/confirm` | `conn_mod_def::GJ7KmYABYpc::ma_cU2wQSTGeu0_qyzrLag` |
| Create a PaymentIntent | POST | `/payment_intents` | `conn_mod_def::GJ7Knc6z3ig::F4_E_KR8RtCKWVIQTz3Ezw` |
| Increment a PaymentIntent’s Authorization | POST | `/payment_intents/{{intent}}/increment_authorization` | `conn_mod_def::GJ7KrYTxl5s::zRLrHWnBQ-e-3DJHl8y64Q` |
| Reconcile a PaymentIntent’s Customer Balance | POST | `/payment_intents/{{intent}}/apply_customer_balance` | `conn_mod_def::GJ7KwK4bgE8::hRNbJxz9TEKEDHfMcSKcqQ` |
| Update a PaymentIntent | POST | `/payment_intents/{{intent}}` | `conn_mod_def::GJ7K7rf5Dmg::cO39UGMJTWWWThavfkqR6w` |
| Verify Microdeposits on a PaymentIntent | POST | `/payment_intents/{{intent}}/verify_microdeposits` | `conn_mod_def::GJ7K9KUlzoc::UtS3MCPsQY-PRWS0ttbNuQ` |

### Refunds

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Charge’s Refunds | GET | `/charges/{{charge}}/refunds` | `conn_mod_def::GJ7KtrLf7Es::pZDbGcS6RNKFEuuHqhJrxA` |
| List Refunds | GET | `/refunds` | `conn_mod_def::GJ7Ktnfpb8s::uRT0qx0mTSqn1DQIWvWsYQ` |
| Retrieve a Charge’s Refund | GET | `/charges/{{charge}}/refunds/{{refund}}` | `conn_mod_def::GJ7KrGX7IUU::VQNJMni7TR60ewZNtiG6tg` |
| Retrieve a Refund | GET | `/refunds/{{refund}}` | `conn_mod_def::GJ7KyqYz0Co::EfnmXibBRei2wv9e27V92g` |
| Cancel a Refund | POST | `/refunds/{{refund}}/cancel` | `conn_mod_def::GJ7Kl1yxKyE::V79N2CvjSlu4rDfTy9iaRQ` |
| Create a Refund (Customer Balance Refund) | POST | `/refunds` | `conn_mod_def::GJ7KpkTA_dc::Od_rWeH9TVOLKMbBMtEJYA` |
| Expire a Test Helper Refund | POST | `/v1/test_helpers/refunds/{{refund}}/expire` | `conn_mod_def::GJ7Kqt4j9ro::Dmk5DErhSv2PBV3-GhzRgg` |
| Update a Charge’s Refund | POST | `/charges/{{charge}}/refunds/{{refund}}` | `conn_mod_def::GJ7KvenbDzA::m992nE7SStG6VFGQj-C3Vg` |
| Update a Refund | POST | `/refunds/{{refund}}` | `conn_mod_def::GJ7K8E2ec6E::Wr2KGe_XTV-wJzBBuFts1w` |

### IssuingCards

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Issuing Cards | GET | `/issuing/cards` | `conn_mod_def::GJ7Kr9d_xdo::rSaUItNvSI-gR58raYRwqg` |
| Retrieve an Issuing Card | GET | `/issuing/cards/{{card}}` | `conn_mod_def::GJ7KxHuVknM::GhhV8b0wRUCh-zwU4uS6Iw` |
| Create an Issuing Card | POST | `/issuing/cards` | `conn_mod_def::GJ7KmoWjkAM::seOrfivWQLKhl7B3ALRIIA` |
| Deliver a Testmode Issuing Card Shipment (Mark as Delivered) | POST | `/v1/test_helpers/issuing/cards/{{card}}/shipping/deliver` | `conn_mod_def::GJ7Kqmq24Ow::j-sM4_EpStyB7fai8gSBwg` |
| Fail an Issuing Card’s Shipping (Test Helpers) | POST | `/test_helpers/issuing/cards/{{card}}/shipping/fail` | `conn_mod_def::GJ7Kq2xB9U0::HoZsZLt2QxScN7ybD21o8w` |
| Return an Issuing Card’s Shipping in Test Mode | POST | `/v1/test_helpers/issuing/cards/{{card}}/shipping/return` | `conn_mod_def::GJ7K53nZyDo::Zn8dPDz5QnuDjYIqsrPkmA` |
| Ship a Test-Mode Issuing Card (Set Shipping Status to `shipped`) | POST | `/test_helpers/issuing/cards/{{card}}/shipping/ship` | `conn_mod_def::GJ7K6b1t_FE::Szlz06RHRie3Z9_0BtN9Aw` |
| Submit Shipping for an Issuing Card (Test Helpers) | POST | `/test_helpers/issuing/cards/{{card}}/shipping/submit` | `conn_mod_def::GJ7K6kDYjCU::3xGTtVrXSLSm4LmcNvXOZw` |
| Update an Issuing Card | POST | `/issuing/cards/{{card}}` | `conn_mod_def::GJ7K7JTJoYU::eIC2gFKGSluimV6SQoz39w` |

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Quote's PDF | GET | `/quotes/{{quote}}/pdf` | `conn_mod_def::GJ7KqugudbI::x42IWdEhQ6-IaNYpZeOAxg` |
| List Quotes | GET | `/quotes` | `conn_mod_def::GJ7KteURrKY::v-TUNM0CR7OBhAI7PM0hMQ` |
| Retrieve a Quote | GET | `/quotes/{{quote}}` | `conn_mod_def::GJ7KyhLoY_M::pLzdwBw8TL2hfd4mocGmZA` |
| Accept a Quote | POST | `/quotes/{{quote}}/accept` | `conn_mod_def::GJ7KlWPtsYg::FszoA9DZSciRRa_pQ0sONQ` |
| Cancel a Quote | POST | `/quotes/{{quote}}/cancel` | `conn_mod_def::GJ7Kl1g2oKs::1B_Rb7v_Tn6n3e0HL_Ojdw` |
| Create a Quote | POST | `/quotes` | `conn_mod_def::GJ7KnyOZMnM::0K9waFxcR4OYSFMPruJP1g` |
| Finalize a Quote | POST | `/quotes/{{quote}}/finalize` | `conn_mod_def::GJ7Kq1pXU9Q::qGRdY6cuQI6ARdDuhBuIWg` |
| Update a Quote | POST | `/quotes/{{quote}}` | `conn_mod_def::GJ7K79ZRF0Q::dka1uRgsS7eR8rc0aJHRzA` |

### TaxIds

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Customer’s Tax IDs | GET | `/customers/{{customer}}/tax_ids` | `conn_mod_def::GJ7KsQ5FEYE::4ndxSTAASa62EmDeUBJmhg` |
| List Tax IDs | GET | `/tax_ids` | `conn_mod_def::GJ7Kt-dSt-M::XfWBEPB3TfaG3AKGn6u6yw` |
| Retrieve a Customer’s Tax ID | GET | `/customers/{{customer}}/tax_ids/{{id}}` | `conn_mod_def::GJ7KxuOp4LA::hbjZScc0TUuLyjGzlBk36A` |
| Retrieve a Tax ID | GET | `/tax_ids/{{id}}` | `conn_mod_def::GJ7K4YHoPcw::rCF6Qs2AQbyusmzI-hRQtg` |
| Create a Customer’s Tax ID | POST | `/customers/{{customer}}/tax_ids` | `conn_mod_def::GJ7Km3ubkLQ::cBGR40ooRqeBRGcyWKjzGw` |

3 more TaxIds actions are available through search.

This lists 90 of 587 actions. For anything not here, call `search_one_platform_actions` with platform `stripe`. The full catalog is at https://www.withone.ai/knowledge/stripe.

## When a call fails

The error comes from Stripe, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/stripe

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
