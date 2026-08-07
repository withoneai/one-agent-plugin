---
name: clover
description: Clover is a point-of-sale and business management system that helps businesses accept payments, track sales, manage inventory, and run operations from one integrated platform. Read and write Clover data through One: inventory, merchants, platformapi:orders, device, platformapi:customers, employees and more, 279 actions with real parameter documentation. Use whenever the user asks to look something up in Clover, create or update a record there, or build code against the Clover API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: clover
  generated-from: one-knowledge-base
---

# Clover through One

Clover is a point-of-sale and business management system that helps businesses accept payments, track sales, manage inventory, and run operations from one integrated platform.

One exposes Clover through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `clover` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Clover is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Clover account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Inventory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Categories | GET | `categories` | `conn_mod_def::F8_9lqtPujg::t9S0hB0RTwGxg-LQqX_1PA` |
| Get All Categories of a Single Item | GET | `items/{{id}}/categories` | `conn_mod_def::F8_9mwrmeTg::e_csRdqFTxG2XfST2p4F7g` |
| Get All Discounts | GET | `discounts` | `conn_mod_def::F8__GTLAHpc::seC5qmxsT3GKqrJtsWCHwg` |
| Get All Inventory Items | GET | `inventory/items` | `conn_mod_def::F8_9hEWEKYA::aarms5nvRP-_KGDM3Hlzmw` |
| Get All Inventory Without a Revenue Class | GET | `items_no_revenue_class` | `conn_mod_def::F8_9hMK3dlA::5PiaQYVxSGSlInZ1n1EKbg` |
| Get All Item Attributes | GET | `item_attributes` | `conn_mod_def::F8_9pbXm9qA::NtXbemQiSaeCees-wBtD_g` |
| Get All Item Groups | GET | `item_groups` | `conn_mod_def::F8_9izlR1NA::Iem44SF_QGCr4-OLm8I2FA` |
| Get All Item Variants | GET | `item_groups/{{id}}/options` | `conn_mod_def::F8_9qe6T20A::XZhUcw89Qjq3PXY3zGkmzw` |
| Get All Items For Single Tag | GET | `tags/{{id}}/items` | `conn_mod_def::F8_9nUX45qg::j8gb_pUiRg-YfS3CtPNbWQ` |
| Get All Items in a Single Category | GET | `categories/{{id}}/items` | `conn_mod_def::F8_9po_4HOg::FVEfTwTdTSqX6ELAvoocVw` |
| Get All Items in a Single Modifier Group | GET | `modifier_groups/{{id}}/items` | `conn_mod_def::F8_9p7EK66g::gl2SNq9MTqywWO3pMersvA` |
| Get All Modifier Groups | GET | `modifier_groups` | `conn_mod_def::F8_9nln7swA::G72MRQ0qQh2CHeoRke9ekQ` |

68 more Inventory actions are available through search.

### Merchants

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Devices Provisioned to a Merchant | GET | `devices` | `conn_mod_def::F8_9Ps13R94::4sy7J3d-QkO6RtJB0i3KKQ` |
| Get All Order Types for Merchant | GET | `order_types` | `conn_mod_def::F8_9F5exfTg::o713WWo_QQyR5LiZcUeOTw` |
| Get All Roles for a Merchant | GET | `roles` | `conn_mod_def::F8_9WJbCkNc::-yhZbB6TS0y08X6-2324FA` |
| Get All Tenders for a Merchant | GET | `tenders` | `conn_mod_def::F8_9GqC7aPA::UbKVsjJnTeWks4Ae3vSjoA` |
| Get All Tip Suggestions for a Merchant | GET | `tip_suggestions` | `conn_mod_def::F8_9Ef2J9wg::FnF4v3hEQC-M6kArsco0tg` |
| Get Default Service Charge | GET | `default_service_charge` | `conn_mod_def::F8_9EE4FnJg::K2qLoPt3THqq3U-ak1HC-w` |
| Get Merchant Details | GET | `` | `conn_mod_def::F8_9DgwHsyg::euOlp-0lTQykxSND7nT4OA` |
| Get Merchant Opening Hours | GET | `opening_hours` | `conn_mod_def::F8_9HZ6bjtA::gdmbJxfcScuTDHB0aEEwRQ` |
| Get Merchant Opening Hours | GET | `hours/{{id}}` | `conn_mod_def::F8_9HdsOMqA::1_no2ifMQuWK_jRiz1ONmg` |
| Get Merchant Tender | GET | `tenders/{{id}}` | `conn_mod_def::F8_9GSUDfmA::DGFGzYTqSYOG-PqdUXrMGg` |
| Get Merchant's Address | GET | `address` | `conn_mod_def::F8_9DEjvx8g::4MEzWmaaQ82wMFLOTviKhg` |
| Get Merchant's Payment Gateway Configuration | GET | `gateway` | `conn_mod_def::F8_9D3JpQnA::izQktYbVQfaU2m1912qX1w` |

22 more Merchants actions are available through search.

### Platformapi:orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Line Item | GET | `orders/{{id}}/line_items/{{lineItemId}}` | `conn_mod_def::F8_90rPJrvg::hndnqRyqSW6Qj98YT44Qeg` |
| Get a Single Order | GET | `orders/{{id}}?expand=lineItems,serviceCharge,discounts,credits,payments,refunds` | `conn_mod_def::F8_9yjkkLrA::maON6C4jSdqvaw7M5EZSJw` |
| Get All Discounts for an Order | GET | `orders/{{id}}/discounts` | `conn_mod_def::F8_9yTnWiBg::PRlY25IkQuuXyci-l0FYBw` |
| Get all line items for an order | GET | `orders/{{id}}/line_items` | `conn_mod_def::F8_93YJufJg::Go_lBJgTSsegAnoGUfalug` |
| Get Deleted Line Items and Orders Summary | GET | `deleted_summary` | `conn_mod_def::F8_90vdgV3A::QnJW5gHrReeUD7A9JYQ69w` |
| Get Line Items from Voided Orders | GET | `voided_orders` | `conn_mod_def::F8__XONWoQw::0SuWYTe6ST6TVWCm6PCntA` |
| Get List of Orders | GET | `orders?expand=employee,payments,refunds,credits,voids,payment.tender,payment.cardTransaction,lineItems,customers,serviceCharge,discounts,orderType,lineItems.discounts,lineItems.modification` | `conn_mod_def::F8_918KqxgA::GerAYkB_S5WsypYCB0K68A` |
| Apply Modification to a Line Item | POST | `orders/{{id}}/line_items/{{lineItemId}}/modifications` | `conn_mod_def::F8_903v0zUA::N5jVdMP0SiC3sO5Rj4nuxw` |
| Apply Service Charge to Order | POST | `orders/{{id}}` | `conn_mod_def::F8_90CHUx1A::5gX2NHi0S1CodVCl9QZdqg` |
| Checkout Atomic Order | POST | `atomic_order/checkouts` | `conn_mod_def::F9AD3rdetss::156vcdhKSICHNC4a3ypBMA` |
| Create a Discount on an Order | POST | `orders/{{id}}/discounts` | `conn_mod_def::F8_9y5rLFEg::7TZ-3wuzTEq1eNtyNEogqg` |
| Create a New Line Item | POST | `orders/{{id}}/line_items` | `conn_mod_def::F8_91RiAPJg::V7FKhEfTTtCYwXqg-s4jmg` |

16 more Platformapi:orders actions are available through search.

### Device

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Device Status | GET | `/v3/devices/{deviceId}/status` | `conn_mod_def::F9AG01dxPKU::jHaNNC1HRFOGYJ5uOEgAOQ` |
| Get Device Status | GET | `/v3/devices/{{deviceId}}/status` | `conn_mod_def::F9ASglvncYM::gtCOMP0QT4W9eiZbOt7CQw` |
| Get Device's Status | GET | `/v3/devices/{deviceId}/status` | `conn_mod_def::F9ASf7y0aAc::4QvueGLCS1utSYbNDk00yA` |
| Get Merchant Devices | GET | `/v3/merchants/{{merchant_id}}/devices` | `conn_mod_def::F8_-OncF8kg::6zj_lO2FQGSLsOeKLprKVA` |
| Get Print Job Status | GET | `/v3/printers/print_jobs/{{printJobId}}` | `conn_mod_def::F9ASoZMQvAY::xkhsT6yFT8WsXCzPwUsZaA` |
| Retrieve Cash Drawers | GET | `/v3/devices/{{deviceId}}/cash_drawers` | `conn_mod_def::F9AGR3C2TLs::ILI6LeifSIOrgx_yrutsXQ` |
| Retrieve Cash Drawers List | GET | `/v3/devices/{{xCloverDeviceId}}/cash_drawers` | `conn_mod_def::F9AGUjgSRwA::Giha3VY0R1KSUo8kOZtrZA` |
| Retrieve Printers | GET | `/v3/devices/{{cloverDeviceId}}/printers` | `conn_mod_def::F9AFabYruqI::0myKIPB8QMGaFTAKX6_9qg` |
| Retrieve Printers List | GET | `/v3/printers` | `conn_mod_def::F8_-P83p4aA::a4AWxyfmRG24Kx8mq0WTIg` |
| Verify Connectivity | GET | `/connectivity_check` | `conn_mod_def::F9AGprriy8c::S4Ud9I9QTk2WS9kW7hkDIQ` |
| Verify Device Connectivity | GET | `/connectivity_check` | `conn_mod_def::F8_-OKzzOQg::Pguy56_0Qcin1zJQ9uEt4A` |
| Cancel In-Flight Operations | POST | `/cancel_operations` | `conn_mod_def::F9AHzqWOoR8::YyjXUzpKQ1qnU9NhSCadPw` |

15 more Device actions are available through search.

### Platformapi:customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get List of Customers | GET | `customers?expand=addresses,emailAddresses,phoneNumbers,cards,metadata` | `conn_mod_def::F8_9NSrvfug::hpAxD_38StCUgRmBecxS_A` |
| Get List of Customers in CSV Format | GET | `customers/csv` | `conn_mod_def::F8_9NyRRYTA::dAAKjeCzT-G5ErzGTScfrA` |
| Get Single Customer | GET | `customers/{{id}}?expand=addresses,emailAddresses,phoneNumbers,cards,metadata` | `conn_mod_def::F8_9NLu0eXA::o6_zReh2RHypEscB7RZQPg` |
| Create Card Entry for Customer | POST | `customers/{{id}}/cards` | `conn_mod_def::F8_9QJE32Tg::7HmqcLTfSlyz4g86-MSgkg` |
| Create Customer | POST | `customers?expand=addresses,emailAddresses,phoneNumbers,cards,metadata` | `conn_mod_def::F8_9URfKjSg::5yH0benfTGiJ0sO2DkY6KQ` |
| Create Customer Address | POST | `customers/{{id}}/addresses` | `conn_mod_def::F8_9PALJEUg::oFcLBgz8RDqDOgWJiSr3Vg` |
| Create Customer Phone Number | POST | `customers/{{id}}/phone_numbers` | `conn_mod_def::F8_9Mlfczmg::bQkcATNJQ5ysCKyX6zmX5w` |
| Create Email Address for Customer | POST | `customers/{{id}}/email_addresses` | `conn_mod_def::F8_9N4DvDPg::0vn0t3qPQb6qeXevQTaj2A` |
| Create note, birthday, business name for a customer | POST | `/{{mId}}/customers/{{customerId}}` | `conn_mod_def::F8_9O0Cn5Lg::MVdkYnHOTqSjnZbh0UnBsw` |
| Delete a Customer Address | DELETE | `customers/{{id}}/addresses/{{addressId}}` | `conn_mod_def::F8_9NelpC_A::B7NvExM7SM6JxkxD72AIXA` |
| Delete Customer | DELETE | `customers/{{id}}` | `conn_mod_def::F8_9MaQ62Cg::9qrO882OTPiBIVNn0kK_JA` |
| Delete Customer Card | DELETE | `customers/{{id}}/cards/{{cardId}}` | `conn_mod_def::F8_9OWNn1mg::mBNTEcHvTS6WV1I6CVpuXA` |

7 more Platformapi:customers actions are available through search.

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Shift | GET | `employees/{{id}}/shifts/{{shiftId}}` | `conn_mod_def::F8_9TxaE8Bg::wA2nOTlyRZetUiMdkqFKGw` |
| Get All Employees | GET | `employees` | `conn_mod_def::F8_9R9Gta0g::d4O8KyviR861U2j59peFTg` |
| Get all orders for an employee | GET | `employees/{{id}}/orders` | `conn_mod_def::F8_9TU8HVPA::6xw4usVHSYKLZtHsRGB2Rg` |
| Get All Shifts | GET | `shifts` | `conn_mod_def::F8_9TPyBnVg::onBrPW0QT-qfyva27bIOcQ` |
| Get Employee Shifts | GET | `employees/{{id}}/shifts` | `conn_mod_def::F8_9T5HYeJg::CTCX3zUJTEuWnG13FUI5BA` |
| Get Shifts CSV | GET | `shifts/export` | `conn_mod_def::F8_9SDrUgHA::V6b5Tn9HSVO6oELPhzknrA` |
| Get Single Employee | GET | `employees/{{id}}` | `conn_mod_def::F8_9Ss6ClYA::eeONcOupSgGBJpcW5as0KA` |
| Get Single Shift | GET | `shifts/{{id}}` | `conn_mod_def::F8_9TrtnJcA::VIzgl_nZRyWVIt9gR6V3xA` |
| Create Employee | POST | `employees` | `conn_mod_def::F8_9TSNm58A::i3aKCo72Sqmy7GEPA0QG2g` |
| Create Shift for an Employee | POST | `employees/{{id}}/shifts` | `conn_mod_def::F8_9T7ouZhg::i6IJg_LFQgOMcfGn-NGk6g` |
| Delete Employee | DELETE | `employees/{{id}}` | `conn_mod_def::F8_9RCFcRXg::tb5FWHoAStKSTjITosavCw` |
| Delete Employee Shift | DELETE | `employees/{{id}}/shifts/{{shiftId}}` | `conn_mod_def::F8_9TXEzEtA::sR2p4MJ1RL6EYg0lJTAgBw` |

2 more Employees actions are available through search.

### Platformapi:payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Authorizations | GET | `authorizations` | `conn_mod_def::F8_97eXap4g::NcAgV2OXSMisKCEjQcyVCA` |
| Get All Payments | GET | `payments` | `conn_mod_def::F8_95gFfQvA::KMH5l8feRCGfh99YzF8utw` |
| Get All Payments for an Order | GET | `orders/{{id}}/payments` | `conn_mod_def::F8__ZsVXMqk::Xindk2ApTBqYrnjAxV4KdQ` |
| Get All Payments Under an Employee | GET | `employees/{{id}}/payments` | `conn_mod_def::F8_97VErFhg::fIQRRjbiQtaJrUafUss5pQ` |
| Get All Refunds for a Merchant | GET | `refunds` | `conn_mod_def::F8_9-Vo4-sA::_w6GH_YbS1Wd2LXjjA16aQ` |
| Get Credit Refund | GET | `credits/{{id}}` | `conn_mod_def::F8_97pBnwbg::kcgIK9xMSy-4eg-Pl9zjoQ` |
| Get Credit Refunds List | GET | `refunds` | `conn_mod_def::F8_959LCGeg::S0DrjO4vTjmbGTCvYBZOmw` |
| Get Single Authorization | GET | `authorizations/{{id}}` | `conn_mod_def::F8_95ZsrKyA::lYyarOckRKGS79CP4r4I_g` |
| Get Single Payment | GET | `payments/{{id}}` | `conn_mod_def::F9AD2hUpnME::WikOkR1GRxOJVYxkLG-zKA` |
| Get Single Refund Detail | GET | `refunds/{{id}}` | `conn_mod_def::F9AAwAGxLgo::mZGIAIxSTfeuv2nbTI4LTw` |
| Create Authorization on a Payment | POST | `payments` | `conn_mod_def::F8_98yOqeBg::gO9PU2WrQveYaZ_uCDMDvg` |
| Delete Authorization | DELETE | `authorizations/{{id}}` | `conn_mod_def::F8_94yesseg::vvd2wCo6QreSiti3upc8Ww` |

2 more Platformapi:payments actions are available through search.

### Restpaydisplayapi:payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Payment Information | GET | `payments/{{id}}` | `conn_mod_def::F9AD2njwXnA::nyWLC4uNSkmu5PqcXK7oSQ` |
| Get Payment Information By External payment id | GET | `payments/{{id}}` | `conn_mod_def::F8_-TQ1tTGA::IVJADIqdQUOpRhW1TRt5Eg` |
| Capture Pre-Auth Payment | POST | `payments/{{id}}` | `conn_mod_def::F9AFMY1FlYQ::N5t-hoHERNOOYePWX4woeA` |
| Increment Authorization Amount | POST | `payments/{{id}}/increment` | `conn_mod_def::F9AFLfdKykY::J_AnE_xTQRKQ7VBoA-BsPw` |
| Send Payment Request to Clover Device | POST | `payments` | `conn_mod_def::F8_-UGvbMHA::LXIibCD7SPm3UjyC9ImAPw` |
| Tip Adjust a Payment | POST | `payments/{{id}}/tip-adjust` | `conn_mod_def::F8_-SGfpQug::12lLKFKDQQ6E7Nr4mvqX8g` |

This lists 90 of 279 actions. For anything not here, call `search_one_platform_actions` with platform `clover`. The full catalog is at https://www.withone.ai/knowledge/clover.

## When a call fails

The error comes from Clover, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/clover

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
