---
name: telnyx
description: Telnyx is a communications platform that provides APIs for voice, messaging, phone numbers, wireless connectivity, and networking services, allowing developers and businesses to build telephony, SMS, IoT, and real-time communication workflows on programmable infrastructure. Read and write Telnyx data through One: calls, conferences, phonenumbers, externalconnections, portingorders, simcards and more, 1163 actions with real parameter documentation. Use whenever the user asks to look something up in Telnyx, create or update a record there, or build code against the Telnyx API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: telnyx
  generated-from: one-knowledge-base
---

# Telnyx through One

Telnyx is a communications platform that provides APIs for voice, messaging, phone numbers, wireless connectivity, and networking services, allowing developers and businesses to build telephony, SMS, IoT, and real-time communication workflows on programmable infrastructure.

One exposes Telnyx through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `telnyx` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Telnyx is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Telnyx account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calls for an Account | GET | `/v2/texml/Accounts/{{accountSid}}/Calls` | `conn_mod_def::GMTguAl684A::DbwIgcTjS4aAJj_b1jgCKA` |
| Retrieve Call Status | GET | `/v2/calls/{{callControlId}}` | `conn_mod_def::GMTgTaSvw8g::YsKnY1AASQi-QgVZbj08Eg` |
| Add Messages to an AI Assistant for a Call | POST | `/v2/calls/{{callControlId}}/actions/ai_assistant_add_messages` | `conn_mod_def::GMTgR0K95MA::AzdsMkUOT5OPz0nG6J8u3w` |
| AI Assistant Join Using Calls Actions | POST | `/v2/calls/{{callControlId}}/actions/ai_assistant_join` | `conn_mod_def::GMTgSOmgMcA::FThbyMonT1yxGrUeAZIcuQ` |
| Answer a Call | POST | `/v2/calls/{{callControlId}}/actions/answer` | `conn_mod_def::GMTgR1cJTDA::-8Sl2cgnQaWvXpTdtm6u0Q` |
| Bridge Calls | POST | `/v2/calls/{{callControlId}}/actions/bridge` | `conn_mod_def::GMTgR8lA5CA::nkIF1BvWQneFUWQHpnaCJg` |
| Dial a Call | POST | `/v2/calls` | `conn_mod_def::GMTgR-ergyA::KAPZ8ev6RYuHLp_dCO_png` |
| Enqueue a Call | POST | `/v2/calls/{{callControlId}}/actions/enqueue` | `conn_mod_def::GMTgR9WNSGg::ocQhOGSlThOU9XCXUcCLpA` |
| Fork Start Using Calls Actions | POST | `/v2/calls/{{callControlId}}/actions/fork_start` | `conn_mod_def::GMTgR9WhVTg::kqk5ceOGQKKDHGCUIFAeLQ` |
| Gather for a Call | POST | `/v2/calls/{{callControlId}}/actions/gather` | `conn_mod_def::GMTgSFsPz4g::vPvzUFC-T_imr5EpMHjDHw` |
| Gather Using AI for a Call | POST | `/v2/calls/{{callControlId}}/actions/gather_using_ai` | `conn_mod_def::GMTgSF4aGbg::iDRNqDu6SNCu6NhBT3M6yg` |
| Gather Using Audio for a Call | POST | `/v2/calls/{{callControlId}}/actions/gather_using_audio` | `conn_mod_def::GMTgSFUpZ3g::ZjZ9HGrLR8ileD9P23jE8A` |

31 more Calls actions are available through search.

### Conferences

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Conference Resources | GET | `/v2/texml/Accounts/{{accountSid}}/Conferences` | `conn_mod_def::GMTguUXKO2A::0dyKRd_ITVORGMaN5A0oLw` |
| List Conferences | GET | `/v2/conferences` | `conn_mod_def::GMTgVexvdyg::pqJLKJLlQB605cjmIc6_Kw` |
| Retrieve a Conference | GET | `/v2/conferences/{{id}}` | `conn_mod_def::GMTgVii0OOA::7xqRWsvORjaT5VqA6oXq2g` |
| Create a Conference | POST | `/v2/conferences` | `conn_mod_def::GMTgVFz0YCg::aC-6hxpXRiuZBFD4-XqeCA` |
| End a Conference | POST | `/v2/conferences/{{id}}/actions/end` | `conn_mod_def::GMTgVGXnOTA::FpzBNlEmSwu-zN5s3661ag` |
| Gather Using Audio for a Conference | POST | `/v2/conferences/{{id}}/actions/gather_using_audio` | `conn_mod_def::GMTgVRIWcnA::3loBqAvGQQa3iANEHZVfCQ` |
| Hold Conference Participants | POST | `/v2/conferences/{{id}}/actions/hold` | `conn_mod_def::GMTgVP8fFcg::1KytKW-FQ8-5y6wU-8VjYQ` |
| Join a Call Leg to a Conference | POST | `/v2/conferences/{{id}}/actions/join` | `conn_mod_def::GMTgVQQUxNg::pe_1NhDDRme2SPPOdixtJw` |
| Leave a Conference | POST | `/v2/conferences/{{id}}/actions/leave` | `conn_mod_def::GMTgVPc9pPA::PU_YTNgrTM2HB1HpxQzsfQ` |
| Mute Conference Participants | POST | `/v2/conferences/{{id}}/actions/mute` | `conn_mod_def::GMTgVX8vR7A::Iv1mum0GQ3qEDy-xTQ2ibQ` |
| Pause Conference Recording | POST | `/v2/conferences/{{id}}/actions/record_pause` | `conn_mod_def::GMTgU89z17A::Q-GMaxQnRWql9wxZ4qHFHw` |
| Play Audio to a Conference | POST | `/v2/conferences/{{id}}/actions/play` | `conn_mod_def::GMTgVX33POA::VJ9Nr_C-SoSuraLos3w59Q` |

9 more Conferences actions are available through search.

### PhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Phone Numbers | GET | `/v2/phone_numbers` | `conn_mod_def::GMTgk0akCig::gRE3AFzES3uSCRrJdIRtoQ` |
| List Phone Numbers for a DIR | GET | `/v2/dir/{{dirId}}/phone_numbers` | `conn_mod_def::GMTgl-7wikA::biJS6TaJRueeI1ph6ai0ZQ` |
| List Phone Numbers With Voice Settings | GET | `/v2/phone_numbers/voice` | `conn_mod_def::GMTgkwpSfwA::oB6eX75wTUWkGSbn37SCmA` |
| List Slim Phone Numbers | GET | `/v2/phone_numbers/slim` | `conn_mod_def::GMTgk-aB0ig::3hbAD9GmTuuB6yFLjU7PKg` |
| Retrieve a Phone Number | GET | `/v2/phone_numbers/{{id}}` | `conn_mod_def::GMTgk8GwMTg::icgJmyOSSJOjP-OL0Dvibg` |
| Retrieve Messaging Settings for a Phone Number | GET | `/v2/phone_numbers/{{id}}/messaging` | `conn_mod_def::GMTgi0LbqVg::XwLR1eB3QGGYEczPa2OwTw` |
| Retrieve Voice Settings for a Phone Number | GET | `/v2/phone_numbers/{{id}}/voice` | `conn_mod_def::GMTgk7MoyUA::Rd2gBnqRQHGa8z_64A54KA` |
| Change Bundle Status for a Phone Number | PATCH | `/v2/phone_numbers/{{id}}/actions/bundle_status_change` | `conn_mod_def::GMTgkvwRqXA::RYSz8oPRSgSXae2WPosntg` |
| Create CSV Download for Phone Numbers | POST | `/v2/phone_numbers/csv_downloads` | `conn_mod_def::GMTgXTcXdsA::e4xgF7YcRiSnShKfr88gjQ` |
| Delete a Batch of Phone Numbers | POST | `/v2/phone_numbers/jobs/delete_phone_numbers` | `conn_mod_def::GMTgRsnA00g::DSmFvkORRV-QtCNcBQ4rcg` |
| Delete a Phone Number | DELETE | `/v2/phone_numbers/{{id}}` | `conn_mod_def::GMTgktnvSgA::g4Qzj1v8QqOsPCNQ9gCNtQ` |
| Enable Emergency for a Phone Number | POST | `/v2/phone_numbers/{{id}}/actions/enable_emergency` | `conn_mod_def::GMTgktdJU2g::hLeasHiTSFeITKja2wkk5g` |

5 more PhoneNumbers actions are available through search.

### ExternalConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Upload Status for an External Connection | GET | `/v2/external_connections/{{id}}/uploads/status` | `conn_mod_def::GMTgbG4ddKg::mdJZN9ybQASGfOdU7Svs8A` |
| List Civic Addresses for an External Connection | GET | `/v2/external_connections/{{id}}/civic_addresses` | `conn_mod_def::GMTgbG-yuqg::1mzvR7xkQP656i1hnkPk1A` |
| List External Connections | GET | `/v2/external_connections` | `conn_mod_def::GMTgbOxu18A::Vbayv2fURUGMTqiyhpcGzw` |
| List Releases for an External Connection | GET | `/v2/external_connections/{{id}}/releases` | `conn_mod_def::GMTgbP-AGVA::BZAfQB74Q0StnYbayM97Sw` |
| Retrieve a Civic Address for an External Connection | GET | `/v2/external_connections/{{id}}/civic_addresses/{{addressId}}` | `conn_mod_def::GMTgbX5hApg::Pd8C16O6SIuEsYWJ6LSldQ` |
| Retrieve a Phone Number for an External Connection | GET | `/v2/external_connections/{{id}}/phone_numbers/{{phoneNumberId}}` | `conn_mod_def::GMTgbWcTpcg::Nklm-zInRO-qWN-PcDVHKg` |
| Retrieve an External Connection | GET | `/v2/external_connections/{{id}}` | `conn_mod_def::GMTgbgVQd5g::kthDlJ6ZQEetgA7r5xLcZg` |
| Create an External Connection | POST | `/v2/external_connections` | `conn_mod_def::GMTga_c2fag::Ll_IerNxTkWqW0ywjXYpNw` |
| Create an Upload Request for an External Connection | POST | `/v2/external_connections/{{id}}/uploads` | `conn_mod_def::GMTgbGukOzA::is5zGybVSrKQ0J2ZopICDQ` |
| Delete an External Connection | DELETE | `/v2/external_connections/{{id}}` | `conn_mod_def::GMTgbFyb7yA::Evchfl3lQ5mco0mPcn6phQ` |
| Refresh Uploads for an External Connection | POST | `/v2/external_connections/{{id}}/uploads/refresh` | `conn_mod_def::GMTgbY_TA3g::lx89ndLEQTmfJ6iLarmcAQ` |
| Retry an Upload for an External Connection | POST | `/v2/external_connections/{{id}}/uploads/{{ticketId}}/retry` | `conn_mod_def::GMTgbh3EWtg::UXSB0yiCRNOIGQHLNCPnEA` |

3 more ExternalConnections actions are available through search.

### PortingOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Porting Order LOA Template | GET | `/v2/porting_orders/{{id}}/loa_template` | `conn_mod_def::GMTgmsFIS0g::1aRB5SuvTqWHalHes4Ym5A` |
| Get a Porting Order's Sub Request | GET | `/v2/porting_orders/{{id}}/sub_request` | `conn_mod_def::GMTgnlnZ-Vg::US1BFWeQQQ6Jd1uEGw9BKQ` |
| List Allowed FOC Windows for a Porting Order | GET | `/v2/porting_orders/{{id}}/allowed_foc_windows` | `conn_mod_def::GMTgnUifZSA::bmW-9p2JRuebKLs_69H4RA` |
| List Porting Orders | GET | `/v2/porting_orders` | `conn_mod_def::GMTgnNjwQRg::5-CZCwAbSkauOFa-yRsGEA` |
| Retrieve a Porting Order | GET | `/v2/porting_orders/{{id}}` | `conn_mod_def::GMTgnmlgpPg::rGizbYmhRYG6GF2UbBvE1w` |
| Activate a Porting Order's Numbers | POST | `/v2/porting_orders/{{id}}/actions/activate` | `conn_mod_def::GMTgl-cIrOA::cuRsZR-xR7-2-2qQtHBhDw` |
| Cancel a Porting Order | POST | `/v2/porting_orders/{{id}}/actions/cancel` | `conn_mod_def::GMTgmIhllug::3Ka56J1fRV6El94b8C5SIw` |
| Confirm a Porting Order | POST | `/v2/porting_orders/{{id}}/actions/confirm` | `conn_mod_def::GMTgnwu8fLg::ZZJ0UV6TTJGrR3UHex1kfA` |
| Create a Porting Order | POST | `/v2/porting_orders` | `conn_mod_def::GMTgmYEOrcA::BUtiKlQITWeZap11yo3oxg` |
| Delete a Porting Order | DELETE | `/v2/porting_orders/{{id}}` | `conn_mod_def::GMTgmizj78A::04THuMG-QAGWTqVKClKT7A` |
| Delete an Additional Document for a Porting Order | DELETE | `/v2/porting_orders/{{id}}/additional_documents/{{additionalDocumentId}}` | `conn_mod_def::GMTgmjRjtLA::6o-ofqLZRmyf8ASquBpuyA` |
| Edit a Porting Order | PATCH | `/v2/porting_orders/{{id}}` | `conn_mod_def::GMTgmsDgXdA::wOs1orj9QBCb6FNRtumYCw` |

3 more PortingOrders actions are available through search.

### SimCards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a SIM Card | GET | `/v2/sim_cards/{{id}}` | `conn_mod_def::GMTgsgkWUOg::FaRT1kX9Q1S4-21YpR8OsQ` |
| Get a SIM Card's Public IP | GET | `/v2/sim_cards/{{id}}/public_ip` | `conn_mod_def::GMTgsduedDg::94o89vRXQvaIKoRtCeRa2A` |
| Get Activation Code for a SIM Card | GET | `/v2/sim_cards/{{id}}/activation_code` | `conn_mod_def::GMTgsUPrNAA::bkvbWi68RVullK-zve-3tA` |
| List SIM Cards | GET | `/v2/sim_cards` | `conn_mod_def::GMTgsWdpnRg::WupdsWFZQIqZ0LY6dIIeGA` |
| Bulk Disable Voice for SIM Cards | POST | `/v2/sim_cards/actions/bulk_disable_voice` | `conn_mod_def::GMTgsnBX0Xg::2IOBEDdpQ4KL-hCal_E1UQ` |
| Bulk Set Public IPs for SIM Cards | POST | `/v2/sim_cards/actions/bulk_set_public_ips` | `conn_mod_def::GMTgsxEgnYg::gI9O0wi5TweB7WsKxNNAcA` |
| Delete a SIM Card | DELETE | `/v2/sim_cards/{{id}}` | `conn_mod_def::GMTgsW_KxUA::3yj-PFgbR_ScgfsfAoTrCg` |
| Disable a SIM Card | POST | `/v2/sim_cards/{{id}}/actions/disable` | `conn_mod_def::GMTgsm5S4Yg::WAZK0byFTiyl-onZF-p3DA` |
| Enable a SIM Card | POST | `/v2/sim_cards/{{id}}/actions/enable` | `conn_mod_def::GMTgsmfNcog::KRinDeyvT7uZXV4ck8jnzA` |
| Register SIM Cards | POST | `/v2/actions/register/sim_cards` | `conn_mod_def::GMTgsog2vAA::vrjR0gJAQG-iB15zJy1NkA` |
| Remove Public IP from a SIM Card | POST | `/v2/sim_cards/{{id}}/actions/remove_public_ip` | `conn_mod_def::GMTgswXeQrg::vr3ls3ZKRr2qO4SkiNW1Lg` |
| Set Public IP for a SIM Card | POST | `/v2/sim_cards/{{id}}/actions/set_public_ip` | `conn_mod_def::GMTgsw-0AbA::ss8yViYUQWWi2l96QLpA2A` |

3 more SimCards actions are available through search.

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate an RCS Deeplink | GET | `/v2/messages/rcs/deeplinks/{{agentId}}` | `conn_mod_def::GMTgpWRHmtg::OfaCfyNhR7eoj9rzSe_pYg` |
| Retrieve a Message | GET | `/v2/messages/{{id}}` | `conn_mod_def::GMTgfZ9k6yA::CdoG2VdhQKOlb9B3U7UbzQ` |
| Retrieve Group MMS Messages | GET | `/v2/messages/group/{{messageId}}` | `conn_mod_def::GMTgfgaIKZg::M7P3sQtnRfKIAvFrENpdeA` |
| Cancel a Message | DELETE | `/v2/messages/{{id}}` | `conn_mod_def::GMTgfZyYt3g::XGvYs8q0THuPLNh4gov-1Q` |
| Create an Anthropic-Compatible Message Using AI Anthropic v1 | POST | `/v2/ai/anthropic/v1/messages` | `conn_mod_def::GMTgORHX4_A::H7b7oiyBTZiFBoxob_wRRw` |
| Schedule a Message | POST | `/v2/messages/schedule` | `conn_mod_def::GMTgfh4sObg::iuqdk_lHS4uuQmiOcnQiVA` |
| Send a Group MMS Message | POST | `/v2/messages/group_mms` | `conn_mod_def::GMTgfg6J87A::Zf_Ot07xQVmI_eebBm5pjw` |
| Send a Long Code Message | POST | `/v2/messages/long_code` | `conn_mod_def::GMTgfhASPXg::dF8KNK02Tj2k0sZZI9KhCQ` |
| Send a Message | POST | `/v2/messages` | `conn_mod_def::GMTgfgqwatA::vqJStnx-SOWezABuxpAoxw` |
| Send a Message Using Number Pool | POST | `/v2/messages/number_pool` | `conn_mod_def::GMTgfpm79GA::j2x9HYGiTkymsV2L6OtX4Q` |
| Send a Short Code Message | POST | `/v2/messages/short_code` | `conn_mod_def::GMTgfpreFdA::sYAfxXCCQkqlmwVfIOErYA` |
| Send a WhatsApp Message | POST | `/v2/messages/whatsapp` | `conn_mod_def::GMTgyVp9Zlg::WEnpQvhNRQ-f5BTjbHhMQQ` |

2 more Messages actions are available through search.

### Queues

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calls in a Queue | GET | `/v2/queues/{{queueName}}/calls` | `conn_mod_def::GMTgpIBAuhg::VBqf6EJFRie9NLc3rG6igw` |
| List Queue Resources for an Account | GET | `/v2/texml/Accounts/{{accountSid}}/Queues` | `conn_mod_def::GMTguUnLhAg::Qu_4-VSOTciHq8iSVv0T_A` |
| List Queues | GET | `/v2/queues` | `conn_mod_def::GMTgpHKHjwA::ZPhuETJMRAG7Finwo72YnA` |
| Retrieve a Call From a Queue | GET | `/v2/queues/{{queueName}}/calls/{{callControlId}}` | `conn_mod_def::GMTgpH8TlFg::jIl2SMfwSq6IIk8sSMmnFw` |
| Retrieve a Call Queue | GET | `/v2/queues/{{queueName}}` | `conn_mod_def::GMTgpHLujjA::3ieC-QJkTryaGu6Yo2eWLw` |
| Create a Queue | POST | `/v2/queues` | `conn_mod_def::GMTgo_D6CAA::Y9wf9dydS-6xh6u60MA5vg` |

5 more Queues actions are available through search.

This lists 90 of 1163 actions. For anything not here, call `search_one_platform_actions` with platform `telnyx`. The full catalog is at https://www.withone.ai/knowledge/telnyx.

## When a call fails

The error comes from Telnyx, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/telnyx

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
