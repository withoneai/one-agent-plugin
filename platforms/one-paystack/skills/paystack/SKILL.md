---
name: paystack
description: Paystack is a payments platform that enables businesses to accept online and offline payments, manage transactions, and integrate secure payment processing through APIs and dashboards across web and mobile applications. Read and write Paystack data through One: transfers, transactions, disputes, paymentrequests, transferrecipients, charge and more, 117 actions with real parameter documentation. Use whenever the user asks to look something up in Paystack, create or update a record there, or build code against the Paystack API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: paystack
  generated-from: one-knowledge-base
---

# Paystack through One

Paystack is a payments platform that enables businesses to accept online and offline payments, manage transactions, and integrate secure payment processing through APIs and dashboards across web and mobile applications.

One exposes Paystack through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `paystack` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Paystack is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Paystack account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Transfers

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Transfers | GET | `/transfer/export` | `conn_mod_def::GJ5_rCvMWno::EjQ5K2jATPubcDwIWxSgpQ` |
| Fetch a Transfer by Code | GET | `/transfer/{{code}}` | `conn_mod_def::GJ5_rBv_20c::rzDmDNAiRyuUK5OhTbnnmw` |
| List Transfers | GET | `/transfer` | `conn_mod_def::GJ5_rRT8wgA::mnpm6rc3R0GjwWvDhjQvdA` |
| Verify a Transfer by Reference | GET | `/transfer/verify/{{reference}}` | `conn_mod_def::GJ5_rYT_Nd4::syks6-BESTK3QCiDU32--A` |
| Disable OTP Requirement for Transfers | POST | `/transfer/disable_otp` | `conn_mod_def::GJ5_rCrlvR4::a1xkNjI6RBy4h0Ycy1QguQ` |
| Finalize a Transfer | POST | `/transfer/finalize_transfer` | `conn_mod_def::GJ5_rQfZTHQ::t2cRLlXXSuOyjELenq3FiQ` |
| Finalize Disabling of OTP Requirement for Transfers | POST | `/transfer/disable_otp_finalize` | `conn_mod_def::GJ5_rJV_J3o::M_tOfqtzQq6t8v5duNxdnA` |
| Initiate a Transfer | POST | `/transfer` | `conn_mod_def::GJ5_rRANjMQ::jg3MEtnTQ82z38RKWEOfsg` |
| Initiate Bulk Transfer | POST | `/transfer/bulk` | `conn_mod_def::GJ5_rQExsxo::mbaNnGrkRBaMQAvGZk-7-g` |
| Resend OTP for a Transfer | POST | `/transfer/resend_otp` | `conn_mod_def::GJ5_rRceyMA::8H66U6XnTxCHU1uBGClUFA` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Transactions | GET | `/transaction/export` | `conn_mod_def::GJ5_qreqq8M::Yr69XqZ0TTqRotd5SZ-tJQ` |
| Fetch a Transaction | GET | `/transaction/{{id}}` | `conn_mod_def::GJ5_qvd5p0c::rQVd5OesR0i_1ol32DKxDg` |
| Fetch a Transaction’s Timeline | GET | `/transaction/timeline/{{idOrReference}}` | `conn_mod_def::GJ5_quoL7CA::LMiVb8G2R9q0HMCksn8UqQ` |
| Get Transaction Totals | GET | `/transaction/totals` | `conn_mod_def::GJ5_q3IJ8Hc::kdKQMAuQQxazSkm0mbZGUQ` |
| List Transactions | GET | `/transaction` | `conn_mod_def::GJ5_q7tMQ-U::ftQlmH59Quyk5c41jFayhg` |
| Verify a Transaction (by Reference) | GET | `/transaction/verify/{{reference}}` | `conn_mod_def::GJ5_q2kOrWo::gM52B3i2SCaUbwvT9eHJog` |
| Charge Authorization | POST | `/transaction/charge_authorization` | `conn_mod_def::GJ5_qjz149s::laFx1NBCTg-oPj9J8wXt_Q` |
| Initialize Transaction | POST | `/transaction/initialize` | `conn_mod_def::GJ5_q2lbhS8::iR0SjtjxTn6NLNfdMi2tDQ` |
| Partial Debit a Transaction | POST | `/transaction/partial_debit` | `conn_mod_def::GJ5_q2w4XKc::AQ2Q5l9jR6qIlFH_bOLnyQ` |

### Disputes

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Disputes | GET | `/dispute/export` | `conn_mod_def::GJ5_o4NzVsI::fMU50M_-T4GTvalektdy9w` |
| Fetch a Dispute | GET | `/dispute/{{id}}` | `conn_mod_def::GJ5_o27jneU::5nREjbczTqiZUHSDHCll_g` |
| Get a Dispute Upload URL | GET | `/dispute/{{id}}/upload_url` | `conn_mod_def::GJ5_o4eGAPs::R5ICbXX5SAOxZFL5dER1qA` |
| List a Transaction’s Disputes | GET | `/dispute/transaction/{{id}}` | `conn_mod_def::GJ5_pDngVNg::aAZfYSM4TTKKGOAv7phKvA` |
| List Disputes | GET | `/dispute` | `conn_mod_def::GJ5_o5SCsEs::wbHlC9TXTemlI8L-PenTLw` |
| Add Evidence to a Dispute | POST | `/dispute/{{id}}/evidence` | `conn_mod_def::GJ5_o3IIvho::gTM0OlOKTUKQg7mM23-YPQ` |
| Resolve a Dispute | PUT | `/dispute/{{id}}/resolve` | `conn_mod_def::GJ5_pDpozIA::Mwtzk1SnR9mU7shCQp5WkA` |
| Update a Dispute | PUT | `/dispute/{{id}}` | `conn_mod_def::GJ5_o_-Ip3Y::LXKOAc-XSiixnVtc2ycnbw` |

### PaymentRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Payment Request | GET | `/paymentrequest/{{id}}` | `conn_mod_def::GJ5_pbhIads::Lv_wMcoBQaO20k5adizvAw` |
| List Payment Requests | GET | `/paymentrequest` | `conn_mod_def::GJ5_pcUaHUk::6Q2aY-JjQCK7wcDZzkwIdg` |
| Verify a Payment Request | GET | `/paymentrequest/verify/{{id}}` | `conn_mod_def::GJ5_pkuLtsI::XCGRrMUpR7ijiRNPhyqEUA` |
| Archive a Payment Request | POST | `/paymentrequest/archive/{{id}}` | `conn_mod_def::GJ5_pSJKfjE::Rzluk5GeSWKEO5RtkUN-Zg` |
| Create Payment Request | POST | `/paymentrequest` | `conn_mod_def::GJ5_pbyDVCY::qxUWmr-JT0uJdOFJMv2IeA` |
| Finalize a Payment Request | POST | `/paymentrequest/finalize/{{id}}` | `conn_mod_def::GJ5_peXZgtc::odQuBmyPTxGI0mldaQdC2A` |
| Send Notification for a Payment Request | POST | `/paymentrequest/notify/{{id}}` | `conn_mod_def::GJ5_plTAod0::fxuVHx5FRFy7acSWT_yLXA` |
| Update a Payment Request | PUT | `/paymentrequest/{{id}}` | `conn_mod_def::GJ5_pldUEGk::57l4tXB-TVGffB-FJJlwIw` |

### TransferRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Transfer Recipient by Code | GET | `/transferrecipient/{{code}}` | `conn_mod_def::GJ5_rX1yfZs::2wThhDrvTnKACmy8lw_SXQ` |
| List Transfer Recipients | GET | `/transferrecipient` | `conn_mod_def::GJ5_roXTzDU::xnO9ur9vQJ2HBCVOEoQXgQ` |
| Bulk Create Transfer Recipients | POST | `/transferrecipient/bulk` | `conn_mod_def::GJ5_rYC3CnM::Xwh4B1saQvObdMfKUSsORA` |
| Create Transfer Recipient | POST | `/transferrecipient` | `conn_mod_def::GJ5_rg10rjU::2ELwb3R-R0-8ZXTX4dFMPQ` |
| Delete a Transfer Recipient | DELETE | `/transferrecipient/{{code}}` | `conn_mod_def::GJ5_rXdq5hw::Ln3V0e0FRqK0LNyHJYfZ1w` |
| Update a Transfer Recipient | PUT | `/transferrecipient/{{code}}` | `conn_mod_def::GJ5_rn-pE1Y::FyWkDbZpTaeETNfKkQhCfQ` |

### Charge

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Pending Charge by Reference | GET | `/charge/{{reference}}` | `conn_mod_def::GJ5_n-Ksy9k::ef2lTFE_R6ylAjk0YQc_kA` |
| Submit Address for a Charge | POST | `/charge/submit_address` | `conn_mod_def::GJ5_n-RU_k8::ZO0TucyZQOG6MNgBEy_2zQ` |
| Submit Birthday for a Charge | POST | `/charge/submit_birthday` | `conn_mod_def::GJ5_n-hqklU::k7YZHCmeRjifObNKrdmw-g` |
| Submit OTP for a Charge | POST | `/charge/submit_otp` | `conn_mod_def::GJ5_oB7F7Ts::b3Nl-DVEStCOjooxD6ZXgQ` |
| Submit Phone for a Charge | POST | `/charge/submit_phone` | `conn_mod_def::GJ5_oI0UXSc::Q8yy2PvgRDGUV866x-irhg` |
| Submit PIN for a Charge | POST | `/charge/submit_pin` | `conn_mod_def::GJ5_oLxPFFA::xsu7hGULRBy1HL5jJ0m-Gw` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Customer by Code | GET | `/customer/{{code}}` | `conn_mod_def::GJ5_oImeoDo::nZXRrtXpSma3DfJsNM9hrQ` |
| List Customers | GET | `/customer` | `conn_mod_def::GJ5_oUlNRcU::0yzL1lZuTqCK_ZB7Vfu-yQ` |
| Create Customer | POST | `/customer` | `conn_mod_def::GJ5_oI64NyQ::A7SsFXPXRkCL45179Nr0jA` |
| Update a Customer | PUT | `/customer/{{code}}` | `conn_mod_def::GJ5_oV9uzM0::s5_TuSU1SSi6BpiSLcMvSQ` |
| White/Blacklist a Customer | POST | `/customer/set_risk_action` | `conn_mod_def::GJ5_oTodMcA::l8w16fYARn2my-Fd9wWKtQ` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Subscription by Code | GET | `/subscription/{{code}}` | `conn_mod_def::GJ5_qjmVJfo::PK5sBMhzQhWjp1gPPxiKnA` |
| List Subscriptions | GET | `/subscription` | `conn_mod_def::GJ5_qkG-pyY::VCVcN69TT7-5P8eIdVxK_w` |
| Create Subscription | POST | `/subscription` | `conn_mod_def::GJ5_qcrptYI::hjiGVmpGR1y4MOSw0YPdHQ` |
| Disable a Subscription | POST | `/subscription/disable` | `conn_mod_def::GJ5_qbv9cGU::iGpNGdB5TyKujocDvQCb9w` |
| Enable a Subscription | POST | `/subscription/enable` | `conn_mod_def::GJ5_qbB77RU::KiXijzfuRxaG3axR1F-xzw` |

### Plans

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Plan | GET | `/plan/{{code}}` | `conn_mod_def::GJ5_pkoGDlk::ZdUNBZg0QOmw-6U0MsWilw` |
| List Plans | GET | `/plan` | `conn_mod_def::GJ5_ptYjjpk::xmcjBymzSwWXCdDnwYEJmg` |
| Create Plan | POST | `/plan` | `conn_mod_def::GJ5_plY8Gh4::QHHgKI6MSxiGyAk63Fit-g` |
| Update a Plan | PUT | `/plan/{{code}}` | `conn_mod_def::GJ5_psZIVTE::qteUJyusQWS3xmAyrbPtfw` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| List Products | GET | `/product` | `conn_mod_def::GJ5_p348jQg::3XP2pQbdTmyrARxS-ES0hg` |
| Create Product | POST | `/product` | `conn_mod_def::GJ5_pro1jVg::u7SGleFBQB6e5qTfZK42ZA` |
| Delete a Product | DELETE | `/product/{{id}}` | `conn_mod_def::GJ5_pvq8i-4::-DVDEJ06R4WchvCiOIszbg` |
| Update a Product | PUT | `/product/{{id}}` | `conn_mod_def::GJ5_p_zUITo::PQTQ5rD4T-q7pCKHb50Pww` |

### Subaccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Subaccount | GET | `/subaccount/{{code}}` | `conn_mod_def::GJ5_qPzPka0::EMmvvipaSaS5an5EkIDHpA` |
| List Subaccounts | GET | `/subaccount` | `conn_mod_def::GJ5_qaL-drU::vkHnx75RTJCfwwRTVZqvow` |
| Create Subaccount | POST | `/subaccount` | `conn_mod_def::GJ5_qPztx0E::63GILkCmQjOolnYkcJD47Q` |
| Update a Subaccount | PUT | `/subaccount/{{code}}` | `conn_mod_def::GJ5_qZng2ks::fofYcodJQoGlLVrqV9BD1Q` |

### DedicatedAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Dedicated Account | GET | `/dedicated_account/{{accountId}}` | `conn_mod_def::GJ5_or8kH3A::c0_AgkSSQ7qJGgPcCdUcvg` |
| List Dedicated Accounts | GET | `/dedicated_account` | `conn_mod_def::GJ5_ouKVsYA::1Bc_bAndT1Cw1AlV_Hbt8w` |
| Create Dedicated Account | POST | `/dedicated_account` | `conn_mod_def::GJ5_oURz6ls::tBX12rQHQ5-h-Tmqp3RZyA` |
| Deactivate a Dedicated Account | DELETE | `/dedicated_account/{{accountId}}` | `conn_mod_def::GJ5_owE-bLk::aziNkzBfRx2xdYU3cljwAg` |

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Page Slug's Availability | GET | `/page/check_slug_availability/{{slug}}` | `conn_mod_def::GJ5_pJ_4vL8::0bdn23lWRZiid6PYeijABQ` |
| List Pages | GET | `/page` | `conn_mod_def::GJ5_pTRy92k::IkOFA2DoSLePVK48VIiQyw` |
| Create Page | POST | `/page` | `conn_mod_def::GJ5_pSIvATU::P1QZMhHCQDu-l_g22OK_nA` |
| Update a Page | PUT | `/page/{{id}}` | `conn_mod_def::GJ5_pU8agLg::6RLoSdYFScC-XDE8ceWqDA` |

### Refunds

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Refund | GET | `/refund/{{id}}` | `conn_mod_def::GJ5_p1sFW7c::k_8O8ysUQW6tCXBzWYdTPw` |
| List Refunds | GET | `/refund` | `conn_mod_def::GJ5_p2wcqQo::Vizhxq6mThSY8_R4GdcGIA` |
| Create Refund | POST | `/refund` | `conn_mod_def::GJ5_p2HgsQM::iuXRVJxUTAui7sqaQBUKpQ` |

### BulkChargeBatches

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bulk Charge Batches | GET | `/bulkcharge` | `conn_mod_def::GJ5_n3Ex9bE::mHZ6IHM_RaSUAS55NpCgEg` |
| Pause a Bulk Charge Batch | GET | `/bulkcharge/pause/{{code}}` | `conn_mod_def::GJ5_nx7VZr0::AX9RhfHlTYaTL6tzf8yC8A` |
| Resume a Bulk Charge Batch | GET | `/bulkcharge/resume/{{code}}` | `conn_mod_def::GJ5_nyK73yM::b5SOo90qRe-6fapMsEAvBg` |

### BulkCharge

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Bulk Charge Batch | GET | `/bulkcharge/{{code}}` | `conn_mod_def::GJ5_nmyjnuI::C6hoX2c0TUKcyal6EacNIA` |
| Fetch Charges in a Batch | GET | `/bulkcharge/{{code}}/charges` | `conn_mod_def::GJ5_nx9MkqQ::zqA7Ypp_TQyp9mrX1V_7pQ` |
| Initiate Bulk Charge | POST | `/bulkcharge` | `conn_mod_def::GJ5_nxzdQBw::UVWyfvsCSDekA4mVOP6StQ` |

### DedicatedAccount

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Bank Providers | GET | `/dedicated_account/available_providers` | `conn_mod_def::GJ5_or1vHsM::9q4FaBJRRaWxD8DR4-057A` |
| Split Dedicated Account Transaction | POST | `/dedicated_account/split` | `conn_mod_def::GJ5_osOWNNg::zMOwrkAdSjWzWJn0FPSz3A` |

### Integration

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Payment Session Timeout | GET | `/integration/payment_session_timeout` | `conn_mod_def::GJ5_pKfdeM8::78Xx76Q1SdW2Z-kEN4MD-Q` |
| Update Payment Session Timeout | PUT | `/integration/payment_session_timeout` | `conn_mod_def::GJ5_pKpACU0::ojeyUrjuT8-chQKMgBS90g` |

This lists 90 of 117 actions. For anything not here, call `search_one_platform_actions` with platform `paystack`. The full catalog is at https://www.withone.ai/knowledge/paystack.

## When a call fails

The error comes from Paystack, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/paystack

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
