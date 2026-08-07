---
name: click-send
description: A cloud-based messaging and communication service that enables businesses to send and receive SMS, email, voice, and chat messages globally through APIs, automation tools, and dashboards to engage customers, deliver notifications, and streamline multichannel communications. Read and write ClickSend data through One: contacts, subaccounts, emailcampaigns, mmscampaigns, postreturnaddresses, smscampaigns and more, 188 actions with real parameter documentation. Use whenever the user asks to look something up in ClickSend, create or update a record there, or build code against the ClickSend API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: click-send
  generated-from: one-knowledge-base
---

# ClickSend through One

A cloud-based messaging and communication service that enables businesses to send and receive SMS, email, voice, and chat messages globally through APIs, automation tools, and dashboards to engage customers, deliver notifications, and streamline multichannel communications.

One exposes ClickSend through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `click-send` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ClickSend is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ClickSend account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact in a List | GET | `/lists/{{LIST_ID}}/contacts/{{CONTACT_ID}}` | `conn_mod_def::GJxn6lFlZZI::ivtESyl5Qtmsye3qt14QUQ` |
| List Contacts in a List | GET | `/lists/{{LIST_ID}}/contacts` | `conn_mod_def::GJxn6UHJ8Z8::zClR_tgyRZCY5fMzfG3QWg` |
| Copy a Contact to Another List | PUT | `/lists/{{FROM_LIST_ID}}/contacts/{{CONTACT_ID}}/copy/{{TO_LIST_ID}}` | `conn_mod_def::GJxn7IlfC7U::5AfGvLKqS9S4hEaBOIoaJA` |
| Create a New Contact in a List | POST | `/lists/{{LIST_ID}}/contacts` | `conn_mod_def::GJxn6b0ttgY::kHKzBSM-QT-_aD5i2mTKBQ` |
| Import Contacts to a List | POST | `/lists/{{LIST_ID}}/import` | `conn_mod_def::GJxn75-8Ob8::KOqv6eENRsSiKrB4N1XE2Q` |
| Remove Duplicate Contacts From a List | PUT | `/lists/{{LIST_ID}}/remove-duplicates` | `conn_mod_def::GJxn7zAz6FM::7ONEw1u6SmGfNtgRucZ3bA` |
| Transfer a Contact to Another List | PUT | `/lists/{{FROM_LIST_ID}}/contacts/{{CONTACT_ID}}/transfer/{{TO_LIST_ID}}` | `conn_mod_def::GJxn7C_tB_w::g7Wfub3UShO9lCaRdvgRNQ` |

### Subaccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Subaccount | GET | `/subaccounts/{{SUBACCOUNT_ID}}` | `conn_mod_def::GJxoK6VKo1s::hxodwCx1ROymbLhAOjHB3g` |
| List Subaccounts | GET | `/subaccounts` | `conn_mod_def::GJxoKtYFM_A::96o48rbnQgqgqvaI5XN9Fw` |
| Create a New Subaccount | POST | `/subaccounts` | `conn_mod_def::GJxoKzkVyaw::jaidXVq-ToK8J-n7F3wjeA` |
| Delete a Subaccount | DELETE | `/subaccounts/{{SUBACCOUNT_ID}}` | `conn_mod_def::GJxoLKPuEck::qCaOuPKKTdyAVJ26zllaGA` |
| Regenerate a Subaccount's API Key | PUT | `/subaccounts/{{SUBACCOUNT_ID}}/regen-api-key` | `conn_mod_def::GJxoLR3OTwM::fRmdn5qfRCSmSS2-07uZ0A` |
| Update a Subaccount | PUT | `/subaccounts/{{SUBACCOUNT_ID}}` | `conn_mod_def::GJxoLCtabV0::TO5jziUCTgGDKFjvR3RmgQ` |

### EmailCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Campaign | GET | `/email-campaigns/{{EMAIL_CAMPAIGN_ID}}` | `conn_mod_def::GJxn9gm67JE::xa0QTPctQ02VnDJJDWn43w` |
| List Email Campaigns | GET | `/email-campaigns` | `conn_mod_def::GJxn9Z85D6s::5toidx1IR2y4RBVB3sazhQ` |
| Cancel an Email Campaign | PUT | `/email-campaigns/{{EMAIL_CAMPAIGN_ID}}/cancel` | `conn_mod_def::GJxn9z3_PP8::E8RObQE9S2Kb8gdg6uMQ_A` |
| Edit an Email Campaign | PUT | `/email-campaigns/{{EMAIL_CAMPAIGN_ID}}` | `conn_mod_def::GJxn9l9F3O8::7bM1bpn_RtCBdhWIlZd4aA` |
| Send an Email Campaign | POST | `/email-campaigns/send` | `conn_mod_def::GJxn9s5egbE::_bCdkHJAR_K6YQEQ3qt1bw` |

### MmsCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an MMS Campaign | GET | `/mms-campaigns/{{MMS_CAMPAIGN_ID}}` | `conn_mod_def::GJxoEJ_bOb8::mHYEwiL4SBWcsjq9YqMkXA` |
| List MMS Campaigns | GET | `/mms-campaigns` | `conn_mod_def::GJxoElhw688::hHq5UTcqRzmBX-RDXY230Q` |
| Cancel an MMS Campaign | PUT | `/mms-campaigns/{{MMS_CAMPAIGN_ID}}/cancel` | `conn_mod_def::GJxoEZBbdz4::tY2ybzuiSTa_qUiaTL6LtQ` |
| Send an MMS Campaign | POST | `/mms-campaigns/send` | `conn_mod_def::GJxoDznUzsA::6AKzu1yXSUyr4FQ1sF0eJA` |
| Update an MMS Campaign | PUT | `/mms-campaigns/{{MMS_CAMPAIGN_ID}}` | `conn_mod_def::GJxoER0Mxv8::GXtNoUxnQ6GEWuu98ohEsA` |

### PostReturnAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Post Return Address | GET | `/post/return-addresses/{{RETURN_ADDRESS_ID}}` | `conn_mod_def::GJxoGPglEck::paC_QPUmSM6RRVbzDSkKNg` |
| List Post Return Addresses | GET | `/post/return-addresses` | `conn_mod_def::GJxoGDTgfUQ::hAEtNC28T_-zGgZzEQ6lpg` |
| Create a Post Return Address | POST | `/post/return-addresses` | `conn_mod_def::GJxoGJHXF9g::sFf9sdCXQXWojx72SMSAhQ` |
| Delete a Post Return Address | DELETE | `/post/return-addresses/{{RETURN_ADDRESS_ID}}` | `conn_mod_def::GJxoGbzZ880::Cxbki9KRRkuQJr5KxZIOqg` |
| Update a Post Return Address | PUT | `/post/return-addresses/{{RETURN_ADDRESS_ID}}` | `conn_mod_def::GJxoGVfxsgo::QNx_yoySRoexjeZr8RfceA` |

### SmsCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SMS Campaign | GET | `/sms-campaigns/{{SMS_CAMPAIGN_ID}}` | `conn_mod_def::GJxoJU5bFuk::klDZ__7tTkKfvJ7gKERV3A` |
| List SMS Campaigns | GET | `/sms-campaigns` | `conn_mod_def::GJxoJq_G5l4::BE4fZq9LTfiApHPA43z5Dg` |
| Cancel an SMS Campaign | PUT | `/sms-campaigns/{{SMS_CAMPAIGN_ID}}/cancel` | `conn_mod_def::GJxoJkmZ57g::aRAEhbk8SxSkhiml0j6LxQ` |
| Send an SMS Campaign | POST | `/sms-campaigns/send` | `conn_mod_def::GJxoJCvXxf0::l2QoXdD_SCKN0sCteos_ag` |
| Update an SMS Campaign | PUT | `/sms-campaigns/{{SMS_CAMPAIGN_ID}}` | `conn_mod_def::GJxoJdB3TLE::feix8zlMQTCl6Nr3HWzo7g` |

### EmailTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Email Template | GET | `/email/templates/{{template_id}}` | `conn_mod_def::GJxoMNqxXpk::qUC4UQEjR1O2UUePR7TBow` |
| List Email Templates | GET | `/email/templates` | `conn_mod_def::GJxoMCRWB_0::Ga-_FvlqTM2_j21DRO10vw` |
| Create an Email Template | POST | `/email/templates` | `conn_mod_def::GJxoMHelbdE::zzBKZ30sSICZC0pzViHnfQ` |
| Delete an Email Template | DELETE | `/email/templates/{{TEMPLATE_ID}}` | `conn_mod_def::GJxoMa3LriE::wOUcinmBR0SEh2tIHLCkxg` |
| Update an Email Template | PUT | `/email/templates/{{TEMPLATE_ID}}` | `conn_mod_def::GJxoMU8pJZU::bFJ1o6h0QH-GUKVhTY6D2g` |

### ContactLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Contact List | GET | `/lists/{{LIST_ID}}` | `conn_mod_def::GJxn7dB4AaA::y8g1xgGUQQOl5TRMLNCGKw` |
| List Contact Lists | GET | `/lists` | `conn_mod_def::GJxn7N0A8oc::Uk1Yp8EpSqKxsNc1CCNEHA` |
| Search Contact Lists | GET | `/search/contacts-lists` | `conn_mod_def::GJxoHGwSVfM::uXe3FVAgQ36miTaQqR1-MA` |
| Delete a Contact List | DELETE | `/lists/{{list_id}}` | `conn_mod_def::GJxn7rRX8Uo::OnOUekaFQuS71rHVETw7QQ` |

### FaxReceipts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Fax Receipt by Message ID | GET | `/fax/receipts/{{MESSAGE_ID}}` | `conn_mod_def::GJxn_VvoDBw::srF0FTUmRmCuhVfXn1VB8Q` |
| List Fax Delivery Receipts | GET | `/fax/receipts` | `conn_mod_def::GJxn_IaAkWA::jGg1tHh0R0KzqEIgtbSCgA` |
| Add a Fax Delivery Receipt | POST | `/fax/receipts` | `conn_mod_def::GJxn_O4_Qt8::kiUk7p9uSnudKGPifOa3fg` |
| Mark Fax Delivery Receipts as Read | PUT | `/fax/receipts-read` | `conn_mod_def::GJxn_eb3Wqk::Ab-qNHi0RgCmA1B8T5RjAQ` |

### SmsReceipts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SMS Delivery Receipt by Message ID | GET | `/sms/receipts/{{MESSAGE_ID}}` | `conn_mod_def::GJxoI2QNiio::SRbrhBu0QUGOVkFyUHhKfQ` |
| List SMS Delivery Receipts | GET | `/sms/receipts` | `conn_mod_def::GJxoHg10WhQ::8sfiFqHWRN6ui9cPFTx8Sg` |
| Add an SMS Delivery Receipt URL | POST | `/sms/receipts` | `conn_mod_def::GJxoHm8s6JE::6erEFZBeTxOA2U2-y-_t4A` |
| Mark SMS Delivery Receipts as Read | PUT | `/sms/receipts-read` | `conn_mod_def::GJxoHucgCuE::JBwHgfRxSRisDwn7KAs1ww` |

### InboundSms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Inbound SMS | GET | `/sms/inbound` | `conn_mod_def::GJxoH0pYFzQ::1a1QsJNrQDmMqa8eo_lcbg` |
| Create Inbound SMS | POST | `/sms/inbound` | `conn_mod_def::GJxoH6TEFhc::KWyX5nivReSerd6wFkg64g` |
| Mark an Inbound SMS as Read | PUT | `/sms/inbound-read/{{MESSAGE_ID}}` | `conn_mod_def::GJxoIv64vag::YOibAoc9QnuZpNi9ffXRTA` |
| Mark Inbound SMS as Read | PUT | `/sms/inbound-read` | `conn_mod_def::GJxoIm3xRzk::QV0T8OrzRl2h9mwPJ1grjg` |

### SmsTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List SMS Templates | GET | `/sms/templates` | `conn_mod_def::GJxoIMEVe9E::9F8L08b5QQqsRRiC3ugaeQ` |
| Create an SMS Template | POST | `/sms/templates` | `conn_mod_def::GJxoIQ9tByQ::TZdFA3EFQeGkWR0hbYfv5g` |
| Delete an SMS Template | DELETE | `/sms/templates/{{TEMPLATE_ID}}` | `conn_mod_def::GJxoIfhj5Lw::Lkmmxiu1Te2zkDb1fZNmqQ` |
| Update an SMS Template | PUT | `/sms/templates/{{TEMPLATE_ID}}` | `conn_mod_def::GJxoIXPvLs8::9WlQx7BgQD2GBAqPEL8OKg` |

### EmailDeliveryReceiptAutomationRule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Delivery Receipt Automation Rule | GET | `/automations/email/receipts/{{RECEIPT_RULE_ID}}` | `conn_mod_def::GJxn8hmhPfk::FwOPc_cNSLWWs0V2Dw8I9Q` |
| Delete an Email Delivery Receipt Automation Rule | DELETE | `/automations/email/receipts/{{RECEIPT_RULE_ID}}` | `conn_mod_def::GJxn8uRU-tU::uWZyZDFVScWkkkVIZ_L7XA` |
| Update an Email Delivery Receipt Automation Rule | PUT | `/automations/email/receipts/{{RECEIPT_RULE_ID}}` | `conn_mod_def::GJxn8nVIS14::h4jB9yl7SqCWjSYTMSaQqA` |

### AllowedEmailAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Allowed Email Address | GET | `/email/addresses/{{email_address_id}}` | `conn_mod_def::GJxn9OmlSu4::R9Mc8r8jRsKIvh5sKZBriA` |
| Create an Allowed Email Address | POST | `/email/addresses` | `conn_mod_def::GJxn877Z9Sw::cbTbf9m8RAq_BJ1cCDZBXQ` |
| Delete a Specific Allowed Email Address | DELETE | `/email/addresses/{{EMAIL_ADDRESS_ID}}` | `conn_mod_def::GJxn9T_GoSk::3j4M0n39QBycN98fGwfcug` |

### UserCountries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Countries for Global Sending | GET | `/user-countries` | `conn_mod_def::GJxoAksrV7c::KhCl6LnrTKqLXT-yzpv3Gg` |
| Agree to User Country Rules and Regulations | POST | `/user-countries/agree` | `conn_mod_def::GJxoAzaT6vQ::--35KXB4Q5O0-QGMnRNlMg` |
| Select Countries for Global Sending | POST | `/user-countries` | `conn_mod_def::GJxoArPngL4::LEfGT9LMTgC4hhJgA-56wQ` |

### InboundSmsAutomationRule

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Inbound SMS Automation Rule | POST | `/automations/sms/inbound` | `conn_mod_def::GJxoB1Dm2BA::gRI5N3LAQzGlS7LqdzS0Mw` |
| Delete an Inbound SMS Automation Rule | DELETE | `/automations/sms/inbound/{{INBOUND_RULE_ID}}` | `conn_mod_def::GJxoCObk3ys::yNNz6naCQOyNOHPbGm9BDw` |
| Update an Inbound SMS Automation Rule | PUT | `/automations/sms/inbound/{{INBOUND_RULE_ID}}` | `conn_mod_def::GJxoCE_nsks::V-TqjclaQiyU2a7Jkenrqw` |

### DedicatedNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dedicated Numbers by Country | GET | `/numbers/search/{{country}}` | `conn_mod_def::GJxoFCW2l9Q::vyfdoAVnR4CuhuvCXnoJ3w` |
| List Available Dedicated Numbers | GET | `/numbers` | `conn_mod_def::GJxoEvbg2ZQ::fNnaXN48QLacaiTCX25jKw` |
| Buy a Dedicated Number | POST | `/numbers/buy/{{DEDICATED_NUMBER}}` | `conn_mod_def::GJxoE6S6OkM::tFu6o2gkQM-qeJBtrMCyTQ` |

### SmsDeliveryReceiptAutomationRule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SMS Delivery Receipt Automation Rule | GET | `/automations/sms/receipts/{{RECEIPT_RULE_ID}}` | `conn_mod_def::GJxoKEj8mJo::Ilv6AmB8QtaL6R35Cac5Yw` |
| Delete an SMS Delivery Receipt Automation Rule | DELETE | `/automations/sms/receipts/{{RECEIPT_RULE_ID}}` | `conn_mod_def::GJxoKT0Sup4::fokbox37SginXhZQD3KZMQ` |
| Update an SMS Delivery Receipt Automation Rule | PUT | `/automations/sms/receipts/{{RECEIPT_RULE_ID}}` | `conn_mod_def::GJxoKMHQgac::iUP0cJ9bTn6c11f2IOkyxQ` |

### VoiceMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Voice Message by Message ID | PUT | `/voice/{{MESSAGE_ID}}/cancel` | `conn_mod_def::GJxoNC6K9e4::aSwvQ0fmTwqKbPSskasQ2Q` |
| Cancel All Voice Messages | PUT | `/voice/cancel-all` | `conn_mod_def::GJxoNH8W37g::Oz2xc42ZQGCzX-UEnFratQ` |
| Send Voice Message(s) | POST | `/voice/send` | `conn_mod_def::GJxoMgH1Ccs::dr6yeqmcSs6IuKo1lknt8w` |

### VoiceReceipts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Voice Delivery Receipts | GET | `/voice/receipts` | `conn_mod_def::GJxoMxAxyHc::3C9ftPNrQOi6dMQJOL7Ntw` |
| Add a Voice Delivery Receipt | POST | `/voice/receipts` | `conn_mod_def::GJxoM2ZV5v0::sALGZVqZS429vTfegtaHGQ` |
| Mark Voice Delivery Receipts as Read | PUT | `/voice/receipts-read` | `conn_mod_def::GJxoM9Q0hlw::9lilONxyTMqMvbMPha_40g` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Information | GET | `/account` | `conn_mod_def::GJxn4msq_UI::o78GoZa8Q76nwmbhF9D3Xg` |
| Create an Account | POST | `/account` | `conn_mod_def::GJxn4tL5rQQ::4vqFTyPsTVeRwBKCN-0JJA` |

### RechargeTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Recharge Transaction | GET | `/recharge/transactions/{{TRANSACTION_ID}}` | `conn_mod_def::GJxn6LhZIDs::NRnXXGd7RHGr9zaZ8fGnxg` |
| List Recharge Transactions | GET | `/recharge/transactions` | `conn_mod_def::GJxn6EwzBEo::5XvRh5zaQLSXgOfUi1aMpw` |

### ContactList

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Contact List | POST | `/lists` | `conn_mod_def::GJxn7VAuayY::_PAj7QcYRbOAVcOj4JxGkQ` |
| Update a Contact List | PUT | `/lists/{{LIST_ID}}` | `conn_mod_def::GJxn7lG84ww::I_88osGPSoiM6K2-Jga0tw` |

### Countries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Countries | GET | `/country-list` | `conn_mod_def::GJxoA6GpHXg::4B7-h6dlR1i8lDTGnsgEkQ` |
| List Countries (Country Codes) | GET | `/countries` | `conn_mod_def::GJxn7_nxgLA::0zv2UKEjRletcQ9FA6W2qw` |

This lists 90 of 188 actions. For anything not here, call `search_one_platform_actions` with platform `click-send`. The full catalog is at https://www.withone.ai/knowledge/click-send.

## When a call fails

The error comes from ClickSend, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/click-send

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
