---
name: square
description: Square offers payment processing and business tools for merchants, including POS systems, online store setup, invoicing, and employee management solutions. Read and write Square data through One: subscriptions, customers, orders, transferorders, invoices, webhooksubscriptions and more, 327 actions with real parameter documentation. Use whenever the user asks to look something up in Square, create or update a record there, or build code against the Square API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: square
  generated-from: one-knowledge-base
---

# Square through One

Square offers payment processing and business tools for merchants, including POS systems, online store setup, invoicing, and employee management solutions.

One exposes Square through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `square` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Square is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Square account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Subscription | GET | `/v2/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ7KFd4kY-s::V4ma6gJaQRqmiTX_9jpdBw` |
| Bulk Swap Subscription Plan Variation | POST | `/v2/subscriptions/bulk-swap-plan` | `conn_mod_def::GJ7KFM7cJns::AEqdgvIVSumJcGjkt0vXzg` |
| Cancel a Subscription | POST | `/v2/subscriptions/{{subscriptionId}}/cancel` | `conn_mod_def::GJ7KFL9cSbc::428lc1e0Rwi6krAgjIW0ew` |
| Change a Subscription’s Billing Anchor Date | POST | `/v2/subscriptions/{{subscriptionId}}/billing-anchor` | `conn_mod_def::GJ7KFT1L4e0::UkEOCeTiQmW5vWjO8U0abw` |
| Create a Subscription | POST | `/v2/subscriptions` | `conn_mod_def::GJ7KFTsN8hQ::HWe9ImZPTB2WyfFTlpBmYg` |
| Delete a Subscription’s Scheduled Action | DELETE | `/v2/subscriptions/{{subscriptionId}}/actions/{{actionId}}` | `conn_mod_def::GJ7KFTqA3vU::3xVs8ociSL2VKzpBIkDd9A` |
| Pause a Subscription | POST | `/v2/subscriptions/{{subscriptionId}}/pause` | `conn_mod_def::GJ7KFVf-aOg::5WWiVyvtSDKVdUlWjyGq8Q` |
| Resume a Subscription | POST | `/v2/subscriptions/{{subscriptionId}}/resume` | `conn_mod_def::GJ7KFb8EHzk::Lhgffi9KSk-sz5fd44XoBA` |
| Search Subscriptions | POST | `/v2/subscriptions/search` | `conn_mod_def::GJ7KFcOyqWM::r0iBnYVKTCG0oBUyPSW-xw` |
| Swap a Subscription’s Plan Variation | POST | `/v2/subscriptions/{{subscriptionId}}/swap-plan` | `conn_mod_def::GJ7KFcjihNY::yWtIwHfzSdqDGo8eXAqlgQ` |
| Update a Subscription | PUT | `/v2/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ7KFhFpar8::0cbDvmf7SCW6q-CrgF764w` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customers | GET | `/v2/customers` | `conn_mod_def::GJ7J_7ICYbo::j2kO0wNqS0ub9XclqXR9Ig` |
| Retrieve a Customer | GET | `/v2/customers/{{customerId}}` | `conn_mod_def::GJ7J_68BL_w::2XzZEeMyQyGvcymVaajV2Q` |
| Bulk Create Customers | POST | `/v2/customers/bulk-create` | `conn_mod_def::GJ7J_p2IvCo::1lRyspT0QSC4mDYhqLevUw` |
| Bulk Delete Customers | POST | `/v2/customers/bulk-delete` | `conn_mod_def::GJ7J_jy4XI4::riHqCCMWRcWZ19glk4Iyyg` |
| Bulk Retrieve Customers | POST | `/v2/customers/bulk-retrieve` | `conn_mod_def::GJ7J_wMtJzs::qZQJmBN4ReWFDoGn8LBbrQ` |
| Bulk Update Customers | POST | `/v2/customers/bulk-update` | `conn_mod_def::GJ7J_wL-uzk::WpmqoiZNS0S8O67MCXpPSA` |
| Create Customer | POST | `/v2/customers` | `conn_mod_def::GJ7J_wS6B24::SuDZFsztTluM7zjmEmoZWg` |
| Delete a Customer | DELETE | `/v2/customers/{{customerId}}` | `conn_mod_def::GJ7J_z_w9pk::FSUW31xOQMiHzCFDcHDDXg` |
| Search Customers | POST | `/v2/customers/search` | `conn_mod_def::GJ7J_6hiLZw::yh234AFiQQWrr_eobNO5IA` |
| Update a Customer Profile | PUT | `/v2/customers/{{customerId}}` | `conn_mod_def::GJ7KABsTdQc::HZaNkIL8Sf-l4yVNiWOmhw` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Order by ID | GET | `/v2/orders/{{orderId}}` | `conn_mod_def::GJ7KEcq8Bxg::HVyYckl7Rk6xkUz8n94-gA` |
| Batch Retrieve Orders (by Order IDs) | POST | `/v2/orders/batch-retrieve` | `conn_mod_def::GJ7KEVJPC_Q::RBQWE1NrTwSYQpFmNgJBUQ` |
| Calculate an Order (Preview Pricing) | POST | `/v2/orders/calculate` | `conn_mod_def::GJ7KEPu-5JE::3gxtLwxaSyWbjE6Yeb-dow` |
| Clone an Order | POST | `/v2/orders/clone` | `conn_mod_def::GJ7KEcrlPGg::sRVte9f3S4-kf05GdpjMyA` |
| Create Order | POST | `/v2/orders` | `conn_mod_def::GJ7KEcKW3tc::teBlUhVAQPS1WpOQo39SwQ` |
| Pay for an Order | POST | `/v2/orders/{{orderId}}/pay` | `conn_mod_def::GJ7KEcEYXmM::WomygOkmSS-RewVOlIAekw` |
| Search Orders (All Locations Specified) | POST | `/v2/orders/search` | `conn_mod_def::GJ7KEbzBCww::bGJjpakwQq6wYz42kkBO0w` |
| Update an Order | PUT | `/v2/orders/{{orderId}}` | `conn_mod_def::GJ7KEjIEIrg::n0TN27ulQEuWbYLYXhgEDQ` |
| Update an Order for a Location (V1) | PUT | `/v1/{{locationId}}/orders/{{orderId}}` | `conn_mod_def::GJ7KG-BzZyU::dTxo9nFpRVu5ZWhxwXXfZQ` |

### TransferOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Transfer Order | GET | `/v2/transfer-orders/{{transferOrderId}}` | `conn_mod_def::GJ7KG1KWex4::Sh6CwHvhRhK0AZyCw5pCWw` |
| Cancel a Transfer Order | POST | `/v2/transfer-orders/{{transferOrderId}}/cancel` | `conn_mod_def::GJ7KGofBgT4::m_M0RhZ9TsqUbnnrNljmPA` |
| Create a Transfer Order | POST | `/v2/transfer-orders` | `conn_mod_def::GJ7KGoUFTAs::p5M4VfzBTemV5oO4eMfZ8w` |
| Delete a Transfer Order | DELETE | `/v2/transfer-orders/{{transferOrderId}}` | `conn_mod_def::GJ7KGnpj3DI::3XIZ0L25QVCBdTwF8iXXMQ` |
| Receive a Transfer Order’s Items | POST | `/v2/transfer-orders/{{transferOrderId}}/receive` | `conn_mod_def::GJ7KGvIlmbA::zpglG9SOS1uSH9uvymsQlg` |
| Search Transfer Orders | POST | `/v2/transfer-orders/search` | `conn_mod_def::GJ7KG2SOZow::yRcvpFVOQh26NjJVmMKLnQ` |
| Start a Transfer Order | POST | `/v2/transfer-orders/{{transferOrderId}}/start` | `conn_mod_def::GJ7KG2MxZ6o::UqNpPqpdQUKZ0x7v8s1dVQ` |
| Update a Transfer Order | PUT | `/v2/transfer-orders/{{transferOrderId}}` | `conn_mod_def::GJ7KG1723rg::ojCmRLcJQk6CxlkUsg_q_w` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invoices (by Location) | GET | `/v2/invoices` | `conn_mod_def::GJ7KBek0gpk::-1t0CBHOR1W-8Panutm7kg` |
| Retrieve an Invoice by ID | GET | `/v2/invoices/{{invoiceId}}` | `conn_mod_def::GJ7KBa2a1K8::qi86KoB9QSaVqT9MqE6BXQ` |
| Cancel an Invoice | POST | `/v2/invoices/{{invoiceId}}/cancel` | `conn_mod_def::GJ7KBT_X6GI::RpnNU37fSFmRt6rqtBXWCQ` |
| Create Invoice (Draft) | POST | `/v2/invoices` | `conn_mod_def::GJ7KBSAlNIo::6ZfPmh_xTH6NA2shJMVdRw` |
| Delete an Invoice | DELETE | `/v2/invoices/{{invoiceId}}` | `conn_mod_def::GJ7KBSZ-UHQ::Vc4QW_-mT-uz9z8vP_h9Ig` |
| Publish an Invoice | POST | `/v2/invoices/{{invoiceId}}/publish` | `conn_mod_def::GJ7KBa4FmtA::tLzxwJODRySKpWAvvaahnQ` |
| Search Invoices | POST | `/v2/invoices/search` | `conn_mod_def::GJ7KBbVTVSQ::wz-1nCY2Sg-x6X5H2WeYxQ` |
| Update an Invoice | PUT | `/v2/invoices/{{invoiceId}}` | `conn_mod_def::GJ7KBajWevU::P74T3bylThaes6MTarTG-Q` |

### WebhookSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Subscriptions | GET | `/v2/webhooks/subscriptions` | `conn_mod_def::GJ7KHSrWNKE::Q-BALViSQG2MD2Wr7rixvg` |
| Retrieve a Webhook Subscription | GET | `/v2/webhooks/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ7KHRm8JkU::nhl32FViR2qq5bhyjvMe_w` |
| Create Webhook Subscription | POST | `/v2/webhooks/subscriptions` | `conn_mod_def::GJ7KHEY1Hbs::GrX_TxZ8SAmAi8YhKYU90Q` |
| Delete a Webhook Subscription | DELETE | `/v2/webhooks/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ7KHRxroKI::8yQ0kTAPTbCAWAle_HOflQ` |
| Test a Webhook Subscription | POST | `/v2/webhooks/subscriptions/{{subscriptionId}}/test` | `conn_mod_def::GJ7KHW0sedc::j9yxLOhVQAOj9hqzC1813w` |
| Update a Webhook Subscription | PUT | `/v2/webhooks/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ7KHdSo09g::gOZh7A-7QI2ZqXJnx9NTVQ` |
| Update a Webhook Subscription’s Signature Key | POST | `/v2/webhooks/subscriptions/{{subscriptionId}}/signature-key` | `conn_mod_def::GJ7KHigPIJs::6Z4huNXpQHW4_jefSLJYUA` |

### CatalogObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Catalog Object by ID | GET | `/v2/catalog/object/{{objectId}}` | `conn_mod_def::GJ7J-dY1oGc::KedGLhmBQDKxC9E9bPeVww` |
| Batch Delete Catalog Objects | POST | `/v2/catalog/batch-delete` | `conn_mod_def::GJ7J-U03nBk::pDZgjj9WTgeZ0x8jQV2wow` |
| Batch Retrieve Catalog Objects | POST | `/v2/catalog/batch-retrieve` | `conn_mod_def::GJ7J-TBKme4::rXmnZS2gR4uLl9DyZPkdhg` |
| Batch Upsert Catalog Objects | POST | `/v2/catalog/batch-upsert` | `conn_mod_def::GJ7J-TYtbJw::8sy8YeRKQ12yNhSdz3pujQ` |
| Delete a Catalog Object | DELETE | `/v2/catalog/object/{{objectId}}` | `conn_mod_def::GJ7J-fvqboc::rY8dkS2JRdi8Lmb0pucWEg` |
| Search Catalog Objects | POST | `/v2/catalog/search` | `conn_mod_def::GJ7J-dT-oNQ::npH_5ikQSRu2k_aGL3suNg` |
| Upsert a Catalog Object | POST | `/v2/catalog/object` | `conn_mod_def::GJ7J-mi1hIE::a2gGPZbtScOIJpQACVDvUQ` |

### GiftCards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Gift Cards | GET | `/v2/gift-cards` | `conn_mod_def::GJ7KAvQa7WI::B4ZZEb0JRseEN8ndYbij7A` |
| Retrieve a Gift Card | GET | `/v2/gift-cards/{{id}}` | `conn_mod_def::GJ7KAt6Pfxw::04rgAti9RVC6TQw3852aZg` |
| Create a Gift Card | POST | `/v2/gift-cards` | `conn_mod_def::GJ7KAuEbYKs::UYn_7-fwTkiC0SFW9OEsIQ` |
| Link a Customer to a Gift Card | POST | `/v2/gift-cards/{{giftCardId}}/link-customer` | `conn_mod_def::GJ7KAuVLDMQ::-cnJxeHwStezfcKIlLHA8w` |
| Retrieve a Gift Card from a GAN | POST | `/v2/gift-cards/from-gan` | `conn_mod_def::GJ7KAunhic0::ip-qgep3SkujN1Byr3lN5A` |
| Retrieve a Gift Card from a Nonce | POST | `/v2/gift-cards/from-nonce` | `conn_mod_def::GJ7KA15-cio::_csDmxe6QQik3RAJf8aTNQ` |
| Unlink a Customer from a Gift Card | POST | `/v2/gift-cards/{{giftCardId}}/unlink-customer` | `conn_mod_def::GJ7KA2ENjy4::tR9-k7BsTqyWTTjuk1R2wg` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Team Member | GET | `/v2/team-members/{{teamMemberId}}` | `conn_mod_def::GJ7KFwVv48A::kRAOwGKoRayRh5Kjm7S3Zw` |
| Bulk Create Team Members | POST | `/v2/team-members/bulk-create` | `conn_mod_def::GJ7KFnsSSOE::GNWiPnuoRVWPg2cd4mbk8g` |
| Bulk Update Team Members | POST | `/v2/team-members/bulk-update` | `conn_mod_def::GJ7KFpLto44::q0BnD_XRTbCqT3DtySI8yA` |
| Create a Team Member | POST | `/v2/team-members` | `conn_mod_def::GJ7KFnlWdUU::Xf-8XaRnQAOYmQse7BQwJA` |
| Create or Replace a Team Member’s Wage Setting | PUT | `/v2/team-members/{{teamMemberId}}/wage-setting` | `conn_mod_def::GJ7KF8qeG64::Nade7vIdRPWfDU76EPXp3g` |
| Search Team Members | POST | `/v2/team-members/search` | `conn_mod_def::GJ7KFvxWY3g::012SN0_1Qh63UcEZdE8Xxw` |
| Update a Team Member | PUT | `/v2/team-members/{{teamMemberId}}` | `conn_mod_def::GJ7KF7rrh-0::9DUFweNHQ8-NDmDYOK7Y3Q` |

### Vendors

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Vendor | GET | `/v2/vendors/{{vendorId}}` | `conn_mod_def::GJ7KHD2wtZ4::_-wpzm_CQb29Np_ecS4A-A` |
| Bulk Create Vendors | POST | `/v2/vendors/bulk-create` | `conn_mod_def::GJ7KG8mel5I::KxBIeG8ER5OO-69GC5ecWg` |
| Bulk Retrieve Vendors | POST | `/v2/vendors/bulk-retrieve` | `conn_mod_def::GJ7KG8eFfZk::P_xUPPg_RV6M8oWi-EYv-g` |
| Bulk Update Vendors | PUT | `/v2/vendors/bulk-update` | `conn_mod_def::GJ7KG8fbhbM::AYXWcsUYQwKn0PWIKVL5xQ` |
| Create a Vendor | POST | `/v2/vendors/create` | `conn_mod_def::GJ7KHEhSwPE::iEwMg2K4S4Kqt3JjsCtQCQ` |
| Search Vendors | POST | `/v2/vendors/search` | `conn_mod_def::GJ7KHD8dMGs::NNKAH-KBQhS9t1-oZNIpOg` |
| Update a Vendor | PUT | `/v2/vendors/{{vendorId}}` | `conn_mod_def::GJ7KHLjox1w::aDSojwzkTyGa3toXt0jIWQ` |

### CustomerGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customer Groups | GET | `/v2/customers/groups` | `conn_mod_def::GJ7J_VwTSkE::y-dAQBJCQayTOqc2NG1uPw` |
| Retrieve a Customer Group | GET | `/v2/customers/groups/{{groupId}}` | `conn_mod_def::GJ7J_htGZ4o::drNlaVQQT_uARIyE8tUKmg` |
| Add a Customer to a Customer Group | PUT | `/v2/customers/{{customerId}}/groups/{{groupId}}` | `conn_mod_def::GJ7J_h80oM0::hfteqsbqSdm9Vc-zP8eobw` |
| Create a Customer Group | POST | `/v2/customers/groups` | `conn_mod_def::GJ7J_VYrGyI::c15x4gwjSTSqij1SyEzvbQ` |
| Delete a Customer Group | DELETE | `/v2/customers/groups/{{groupId}}` | `conn_mod_def::GJ7J_VIYxuY::CCWUREpcSrmd1QKZhJ3UiA` |
| Remove a Customer From a Customer Group | DELETE | `/v2/customers/{{customerId}}/groups/{{groupId}}` | `conn_mod_def::GJ7J_6ZECkg::WhlZQUAUQXuTJHIbvDua7w` |
| Update a Customer Group | PUT | `/v2/customers/groups/{{groupId}}` | `conn_mod_def::GJ7J_j6stNw::wVhHMO_-TnmSCNU1Sn7Raw` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Payments | GET | `/v2/payments` | `conn_mod_def::GJ7KE68Zx_E::gX-MvBvqQZK4Bn1QzlBoXA` |
| Retrieve a Payment | GET | `/v2/payments/{{paymentId}}` | `conn_mod_def::GJ7KExqYY6o::pXDHtFKXS2CEk_FOstMa4A` |

5 more Payments actions are available through search.

This lists 90 of 327 actions. For anything not here, call `search_one_platform_actions` with platform `square`. The full catalog is at https://www.withone.ai/knowledge/square.

## When a call fails

The error comes from Square, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/square

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
