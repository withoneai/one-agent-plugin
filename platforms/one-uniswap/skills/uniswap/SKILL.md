---
name: uniswap
description: Uniswap is a decentralized finance platform that enables users to swap cryptocurrencies across Ethereum, Base, Arbitrum, Polygon, Unichain, and other networks through its web interface, providing access to onchain token trading without relying on a centralized exchange. Read and write Uniswap data through One: lpposition, executionplans, wallet, plan, lptokenapprovals, lppositionfees and more, 27 actions with real parameter documentation. Use whenever the user asks to look something up in Uniswap, create or update a record there, or build code against the Uniswap API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: uniswap
  generated-from: one-knowledge-base
---

# Uniswap through One

Uniswap is a decentralized finance platform that enables users to swap cryptocurrencies across Ethereum, Base, Arbitrum, Polygon, Unichain, and other networks through its web interface, providing access to onchain token trading without relying on a centralized exchange.

One exposes Uniswap through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `uniswap` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Uniswap is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Uniswap account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### LpPosition

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an LP Position | POST | `/v1/lp/create` | `conn_mod_def::GMjZDrLC69A::EeW03oWeTk6pWBQjLFYJTQ` |
| Create Classic LP Position | POST | `/v1/lp/create_classic` | `conn_mod_def::GMjZDogN6EA::BwR1qeX5Sze4nZjEh07FxA` |
| Decrease an LP Position | POST | `/v1/lp/decrease` | `conn_mod_def::GMjZDn_oSkg::HPLcJNjIRee9IoYI9osFlw` |
| Increase an LP Position | POST | `/v1/lp/increase` | `conn_mod_def::GMjZDqhwqdg::iZZb8qDaTZGz0suOVumnMA` |

### ExecutionPlans

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Execution Plan | GET | `/v1/plan/{{planId}}` | `conn_mod_def::GMjZDfMXzDg::_3TY0OymSlSDI7s6kM2lRg` |
| Update an Execution Plan | PATCH | `/v1/plan/{{planId}}` | `conn_mod_def::GMjZDgJZRQA::_JJHy0kISFei0dXQNlSjXQ` |

### Wallet

| Action | Method | Path | Action id |
|---|---|---|---|
| Encode 4337 Using Wallet | POST | `/v1/wallet/encode_4337` | `conn_mod_def::GMjZEHJc71g::j9ECnsFyRxabpfJ_dmL9oQ` |
| Encode 7702 Wallet Transactions | POST | `/v1/wallet/encode_7702` | `conn_mod_def::GMjZDyZfuRA::43aqeb7aTzC3sGdWpZKsig` |

### Plan

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Plan | POST | `/v1/plan` | `conn_mod_def::GMjZDgZ3PWg::TRpvsGcWRvGxABVu74ZGuw` |

### LpTokenApprovals

| Action | Method | Path | Action id |
|---|---|---|---|
| Check LP Token Approvals | POST | `/v1/lp/check_approval` | `conn_mod_def::GMjZDgceEHA::oKwCOQUQRwyN2sKMC9NEZg` |

### LpPositionFees

| Action | Method | Path | Action id |
|---|---|---|---|
| Claim Fees for an LP Position | POST | `/v1/lp/claim_fees` | `conn_mod_def::GMjZDgs44EA::Z4HWm4PbT6eWs7MBO9ywmw` |

### Swap5792Calldata

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Swap 5792 Calldata Using Uniswap Trade API | POST | `/v1/swap_5792` | `conn_mod_def::GMjZDq67XbA::_jLhkhH7Q2OS1mp3t0qCow` |

### Order

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Gasless Order | POST | `/v1/order` | `conn_mod_def::GMjZDyQmcrA::hr-uo7VlQe2NuH8ZRPiKSw` |

### Approval4337

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Approval 4337 | POST | `/v1/check_approval_4337` | `conn_mod_def::GMjZDzQgbdg::CdOV_iqjT22KlIabNIoTaA` |

### Swap7702

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Swap 7702 Calldata Using Uniswap Trade API | POST | `/v1/swap_7702` | `conn_mod_def::GMjZDzr_oVA::6cYvWWcZRum0DVzsrMu8DA` |

### Approval

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Approval | POST | `/v1/check_approval` | `conn_mod_def::GMjZDz-NlbA::h_i9rJGCRmWZ_yVqzdP7ZQ` |

### LimitOrderQuote

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Limit Order Quote | POST | `/v1/limit_order_quote` | `conn_mod_def::GMjZD8FHKgg::_V8-c9G0THecvqILE1XhUQ` |

### Swap4337

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Swap ERC-4337 UserOperation Using Uniswap Trade API | POST | `/v1/swap_4337` | `conn_mod_def::GMjZD8X1TLA::BvlZlPjHQnSOgGe29RoOWQ` |

### Swap

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Swap Calldata Using Uniswap Trade API | POST | `/v1/swap` | `conn_mod_def::GMjZD9BdOYg::7NfNoJpASdaMSihncDPjFQ` |

### Quote

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Quote | POST | `/v1/quote` | `conn_mod_def::GMjZD9D_dMg::x11APv99TkOChlQphJfKpQ` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Gasless Order Status | GET | `/v1/orders` | `conn_mod_def::GMjZD_AbCJA::uCCnyGQDTqG9eRGUzVuDjw` |

### Permissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Token KYC Permissions | POST | `/v1/permissions` | `conn_mod_def::GMjZEF60JNA::VBzrUEhtQWy6niy5h43OtQ` |

### Swaps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Swap Status | GET | `/v1/swaps` | `conn_mod_def::GMjZEGpIqsg::TCYblaQiQueuW9cqYE5lsw` |

### SwappableTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Swappable Tokens | GET | `/v1/swappable_tokens` | `conn_mod_def::GMjZEGw6TVA::oo0uRzI_QUmarW9mCsLJ1w` |

### PoolInfoUsingLp

| Action | Method | Path | Action id |
|---|---|---|---|
| Pool Info Using Lp | POST | `/v1/lp/pool_info` | `conn_mod_def::GMjZEH6kjPg::hl2srClnRMSnS3KIv_87bQ` |

### SupportedChains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Supported Chains | GET | `/v1/supported_chains` | `conn_mod_def::GMjZEPNbIvA::BNx6yMvwQ2O-dh1cQsXAkg` |

### WalletDelegation

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Wallet Delegation Using Wallet | POST | `/v1/wallet/check_delegation` | `conn_mod_def::GMjZEP9pvtA::5S46_quARpGXsDxO3dHXzA` |

## When a call fails

The error comes from Uniswap, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/uniswap

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
