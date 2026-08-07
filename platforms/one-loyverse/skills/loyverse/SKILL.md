---
name: loyverse
description: Loyverse is a cloud-based point-of-sale and retail management platform that provides tools for sales processing, inventory tracking, employee management, and customer loyalty programs, allowing retailers, restaurants, and small businesses to manage in-store operations and connect transaction data with business workflows. Read and write Loyverse data through One: items, categories, customers, discounts, modifiers, posdevices and more, 57 actions with real parameter documentation. Use whenever the user asks to look something up in Loyverse, create or update a record there, or build code against the Loyverse API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: loyverse
  generated-from: one-knowledge-base
---

# Loyverse through One

Loyverse is a cloud-based point-of-sale and retail management platform that provides tools for sales processing, inventory tracking, employee management, and customer loyalty programs, allowing retailers, restaurants, and small businesses to manage in-store operations and connect transaction data with business workflows.

One exposes Loyverse through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `loyverse` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Loyverse is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Loyverse account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Item | GET | `/items/{{itemId}}` | `conn_mod_def::GK1E38mgsCg::353DNGAXQQmiAWiEiJcCsA` |
| List Items | GET | `/items` | `conn_mod_def::GK1E31ONMeA::r4WlTGfdRMiSLaHW55vHpA` |
| Create or Update a Single Item | POST | `/v1.0/items` | `conn_mod_def::GK1E3zV4wWA::FXuwERlOQEmhVdFBMTYzXQ` |
| Delete a Single Item Resource | DELETE | `/items/{{itemId}}` | `conn_mod_def::GK1E3ycnMpA::Jd65Ge8gShGo_JRiHrkbTg` |
| Delete an Item's Image | DELETE | `/items/{{itemId}}/image` | `conn_mod_def::GK1E3zotb9A::L4eT9oF0S4CSOyvmp6mW0g` |
| Upload a Single Item Image | POST | `/items/{{itemId}}/image` | `conn_mod_def::GK1E39CHnDA::5T7o-xSGQyGWwYf7-GyOKQ` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Category | GET | `/categories/{{categoryId}}` | `conn_mod_def::GK1E3Qo6Gdg::8PmtJ-O8SfSG0nfGRzQL0A` |
| List Categories | GET | `/categories` | `conn_mod_def::GK1E3TGp4WA::qTX9WZWyTYCUTS0zqcu5ng` |
| Create or Update a Category | POST | `/v1.0/categories` | `conn_mod_def::GK1E3Qo6d5g::0p5aSOhAQqe9gsscmueLqA` |
| Delete a Category | DELETE | `/categories/{{categoryId}}` | `conn_mod_def::GK1E3Q6rmRA::2uF6rIuyQzCzKY_kJhF1nw` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Customer | GET | `/customers/{{customerId}}` | `conn_mod_def::GK1E3bBMtCA::S4_1p53RRCy4snm3SPIX7A` |
| List Customers | GET | `/customers` | `conn_mod_def::GK1E3efXmzA::yaax838BSi2sZLsCDGFETA` |
| Create or Update a Customer | POST | `/v1.0/customers` | `conn_mod_def::GK1E3RqAizg::rF6pgl9CRD2zXBQAqd5VYg` |
| Delete a Customer | DELETE | `/customers/{{customerId}}` | `conn_mod_def::GK1E3bBRrZA::7pfLA2iJSzyH-HsgZTHe-A` |

### Discounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Discount | GET | `/discounts/{{discountId}}` | `conn_mod_def::GK1E3m4l6kg::m7LrkRBSRfCxEFi9qOmmwg` |
| List Discounts | GET | `/discounts` | `conn_mod_def::GK1E3nmcAzA::G-6vKWUFRG2IvS-6Aw77ew` |
| Create or Update a Discount | POST | `/discounts` | `conn_mod_def::GK1E3bV6NEA::EdhaWec0SYC2-aUZNTf0Vw` |
| Delete a Discount | DELETE | `/discounts/{{discountId}}` | `conn_mod_def::GK1E3bs-rNA::ZgZ8FZ6PQlOTKCbOc_2cEw` |

### Modifiers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Modifier | GET | `/modifiers/{{modifierId}}` | `conn_mod_def::GK1E4Fbq9gA::weQdRBFdTayal1e9UIquRg` |
| List Modifiers | GET | `/modifiers` | `conn_mod_def::GK1E4IOKAsg::lR7xYulXS_GWxoOGbJBHmQ` |
| Create or Update a Modifier | POST | `/v1.0/modifiers` | `conn_mod_def::GK1E39RsWEA::Dxe_Jk4yQq2a7WcY7MIrDg` |
| Delete a Modifier | DELETE | `/modifiers/{{modifierId}}` | `conn_mod_def::GK1E3994Lgg::K2nOV_sXSrCbPUJgmSCswA` |

### PosDevices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single POS Device | GET | `/pos_devices/{{posDeviceId}}` | `conn_mod_def::GK1E4QK-GQg::H6LSB4kbSaeLH-Ep4MhHZQ` |
| List POS Devices | GET | `/pos_devices` | `conn_mod_def::GK1E4Rl0y4g::bjFKX1gcQxC7dvulhcsOyw` |
| Create or Update a POS Device | POST | `/pos_devices` | `conn_mod_def::GK1E4GJnzXg::GHzy7TmtSeeelzf2MkCD_g` |
| Delete a POS Device | DELETE | `/pos_devices/{{posDeviceId}}` | `conn_mod_def::GK1E4QkMFLg::Jevks90fRge8ystAYuRdKg` |

### Receipts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Receipt | GET | `/receipts/{{receiptNumber}}` | `conn_mod_def::GK1E4bMCbSg::pXqWIkGRRc-Jr3YxPJ3wMw` |
| List Receipts | GET | `/v1.0/receipts` | `conn_mod_def::GK1E4lAkXQA::0kurVoL4S6qqvuNwquNCmw` |
| Create a Refund Receipt for a Sales Receipt | POST | `/receipts/{{receiptNumber}}/refund` | `conn_mod_def::GK1E4SNK8BA::t2BQzj9uSfOXqtCtLDmgPQ` |
| Create a Sales Receipt | POST | `/receipts` | `conn_mod_def::GK1E4SC_tTg::mRKwLP38Tiu5tjS_z6u-cg` |

### Suppliers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Supplier | GET | `/suppliers/{{supplierId}}` | `conn_mod_def::GK1E4s66nQA::aQ1qI3ChSXm0R2pc_1O2RQ` |
| List Suppliers | GET | `/suppliers/` | `conn_mod_def::GK1E4tUy2Rg::BYiIAT0bSBe5zgwkSXAsfA` |
| Create or Update a Supplier | POST | `/suppliers/` | `conn_mod_def::GK1E4tU3zqA::ynB8sgc7RKWSC94kIcwWWQ` |
| Delete a Single Supplier | DELETE | `/suppliers/{{supplierId}}` | `conn_mod_def::GK1E4tDj_RA::WJshqEquQLSV-ACCSDp4mQ` |

### Taxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Tax | GET | `/taxes/{{taxId}}` | `conn_mod_def::GK1E41sV06A::w6IqiJgyTmSHby2-UdkC8w` |
| List Taxes | GET | `/taxes` | `conn_mod_def::GK1E44gbhcA::kSJvXOZIQm-v5VQUyG96Ow` |
| Create or Update a Single Tax | POST | `/taxes` | `conn_mod_def::GK1E43VDEyg::kkpH1pIaSJ2zBeg1JOjoow` |
| Delete a Tax | DELETE | `/taxes/{{taxId}}` | `conn_mod_def::GK1E41PO-QA::BgrwBNH8QEW_5--fpfoVHw` |

### Variants

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Item Variant | GET | `/variants/{{variantId}}` | `conn_mod_def::GK1E5BSlQog::6rza2rbyTxyVZ32cSpdCuQ` |
| List Item Variants | GET | `/variants` | `conn_mod_def::GK1E5EGvztg::7UuWlmQ3SfCExEXe4-dAgg` |
| Create or Update a Variant | POST | `/variants` | `conn_mod_def::GK1E41slYBg::ga7IbkgsSbujrr-jzkI3VQ` |
| Delete a Variant | DELETE | `/variants/{{variantId}}` | `conn_mod_def::GK1E5AqjKBg::W9k4i9-STi6HGy-1fDE6UQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Webhook | GET | `/webhooks/{{webhookId}}` | `conn_mod_def::GK1E5M6lCyg::TNd_de4dTyCLe1F3FPg6_w` |
| List Webhooks | GET | `/webhooks/` | `conn_mod_def::GK1E5N7Ys_A::7nRxakQeTWitSXH38vXWVA` |
| Create or Update a Webhook | POST | `/v1.0/webhooks/` | `conn_mod_def::GK1E5BiEJoA::PKOt0k_aQCeED8YG6x9aZg` |
| Delete a Single Webhook | DELETE | `/webhooks/{{webhookId}}` | `conn_mod_def::GK1E5C8AWHA::xe87ikRwSMGOe2k20XG3ZA` |

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Employee | GET | `/employees/{{employeeId}}` | `conn_mod_def::GK1E3m4DmSA::IfePSOVuR5iB8aWFr5fC0g` |
| List Employees | GET | `/v1.0/employees` | `conn_mod_def::GK1E3qKEJmA::kaXgzNc1SC2vqyKwUTvv1A` |

### PaymentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Payment Type | GET | `/payment_types/{{paymentTypeId}}` | `conn_mod_def::GK1E4GnwtkA::zgsJdOf2RS-NiWJ2SaBRPA` |
| List Payment Types | GET | `/payment_types` | `conn_mod_def::GK1E4H9077g::vdXa1M68S9qLwPSKcRZrCw` |

### Shifts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Shift | GET | `/shifts/{{shiftId}}` | `conn_mod_def::GK1E4bytuPA::FyRE6rihRYqQjNx6TwnBIQ` |
| List Shifts | GET | `/v1.0/shifts` | `conn_mod_def::GK1E4dxJrAA::oiF2tCmvRX6S50kYU0q3CA` |

### Stores

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Store | GET | `/stores/{{storeId}}` | `conn_mod_def::GK1E4sUHAFA::76BAN5j-Qqic5nFjMCDQXA` |
| List Stores | GET | `/stores` | `conn_mod_def::GK1E4eS1fqA::c3WDd2c3Tjm0EcDeUZU8LQ` |

### Inventory

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Update Inventory Levels for Item Variants | POST | `/v1.0/inventory` | `conn_mod_def::GK1E3nwJhKg::besEYevDQEOJRLQ4tsLXEg` |

### InventoryLevels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Inventory Levels for Item Variants | GET | `/inventory` | `conn_mod_def::GK1E3zeUabg::xvzs-916Sx6Bs9pwxcoXsA` |

### Merchant

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Merchant Information | GET | `/merchant/` | `conn_mod_def::GK1E388qcXg::u-f3MUekTq-I6ra6kIL2XA` |

## When a call fails

The error comes from Loyverse, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/loyverse

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
