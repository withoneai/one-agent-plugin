---
name: twilio
description: Twilio is a cloud communications platform that enables developers to build SMS, voice, video, and messaging applications with APIs and scalable infrastructure. Read and write Twilio data through One: services, credentials, channels, roles, messages, users and more, 1437 actions with real parameter documentation. Use whenever the user asks to look something up in Twilio, create or update a record there, or build code against the Twilio API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: twilio
  generated-from: one-knowledge-base
---

# Twilio through One

Twilio is a cloud communications platform that enables developers to build SMS, voice, video, and messaging applications with APIs and scalable infrastructure.

One exposes Twilio through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `twilio` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Twilio is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Twilio account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Services

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Chat Service | GET | `/v1/Services/{{sid}}` | `conn_mod_def::GJ7T2UcRcLU::4hPNNxshS2uy-Br8HEn6Lg` |
| Fetch a Chat Service | GET | `/v2/Services/{{sid}}` | `conn_mod_def::GJ7T3ylUEXI::k3VWRp1gSv2KzJhBkqnfrg` |
| Fetch a Conversation Service | GET | `/v1/Services/{{sid}}` | `conn_mod_def::GJ7T6m2bOWQ::mJQ3zqPIS9C3PWYv9w_GGA` |
| Fetch a Notify Service | GET | `/v1/Services/{{sid}}` | `conn_mod_def::GJ7UIK_r5xM::hjCGk2nYRpCE6YAla_GRSw` |
| Fetch a Proxy Service | GET | `/v1/Services/{{sid}}` | `conn_mod_def::GJ7UMH8jhQs::8_JKUvDFTpKiWSrd1i5k3A` |
| Fetch a Sync Service | GET | `/Services/{{sid}}` | `conn_mod_def::GJ7UVcKvofo::rNBicfAeTsiJ-JCuLeww5w` |
| Fetch a Twilio IP Messaging Service | GET | `/v2/Services/{{sid}}` | `conn_mod_def::GJ7UEhaNQqo::K1aJ_BWuR5GCZeGVQ5u4vg` |
| Fetch a Twilio Serverless Service | GET | `/Services/{{sid}}` | `conn_mod_def::GJ7US08TOGs::q1r7awDvSOi1E2kQkn5_hw` |
| List an Account's Verification Services | GET | `/v2/Services` | `conn_mod_def::GJ7UcVy3xfM::VSMhZtXlSTics-Bcc54T7g` |
| List Conversation Services | GET | `/Services` | `conn_mod_def::GJ7T6oG6RD4::a9bICz6PT1KBh2fGYkfWBg` |
| List Notify Services | GET | `/Services` | `conn_mod_def::GJ7UIKhSRwg::PzQ94pnZRm-lUhX9FTfyww` |
| List Proxy Services | GET | `/Services` | `conn_mod_def::GJ7UMInBNhQ::1fZ7IfwTRC6W_T_IPfPK7A` |

29 more Services actions are available through search.

### Credentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Credential | GET | `/v2/Credentials/{{sid}}` | `conn_mod_def::GJ7T3Gs6Aqo::nUP6CXhFTnaFmVkBrvxT4A` |
| Fetch a Credential | GET | `/v2/Credentials/{{sid}}` | `conn_mod_def::GJ7UDqJQtc8::YthYcweUSWSy51N4XOHGvA` |
| Fetch a Credential | GET | `/Credentials/{{sid}}` | `conn_mod_def::GJ7T1hUbMJY::3KxnCRL6S4qsYxjqaHu6SQ` |
| Fetch a Credential | GET | `/v1/Credentials/{{sid}}` | `conn_mod_def::GJ7UB8cb8Wc::UZTU75c4STCZPgxdkfK4UA` |
| Fetch a Notify Credential | GET | `/v1/Credentials/{{sid}}` | `conn_mod_def::GJ7UICNJj2E::m_Z65hpXRR-KP9eUs8Aepw` |
| Fetch a Push Notification Credential | GET | `/v1/Credentials/{{sid}}` | `conn_mod_def::GJ7T5TKOyMc::mWGSUAsZRm2ABZgxntvqvA` |
| List Credentials | GET | `/Credentials` | `conn_mod_def::GJ7T3HWVptE::jTsP7KgcSwiI_hcJ51OUnQ` |
| List Credentials | GET | `/Credentials` | `conn_mod_def::GJ7T1iUQqYg::Bs9zrpuxTMeajFrYKx1z4Q` |
| List Credentials | GET | `/v1/Credentials` | `conn_mod_def::GJ7UIDGRnw8::yFWmr8NiRKa8NofcLLkKww` |
| List Credentials | GET | `/Credentials` | `conn_mod_def::GJ7UB_YsCAQ::zNRliCqURMubLww8astXQg` |
| List Credentials | GET | `/Credentials` | `conn_mod_def::GJ7UDrVYZFI::VWwrGAbkQ9i5zTKYidGUnQ` |
| List Push Notification Credentials | GET | `/Credentials` | `conn_mod_def::GJ7T5UnY50Y::W9aZBTsISymMDak1SP6Sog` |

18 more Credentials actions are available through search.

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Flex Chat Channel | GET | `/v1/Channels/{{sid}}` | `conn_mod_def::GJ7T8admpPA::u4hma6kuQ5mleZNhyBw2uA` |
| Fetch a Service's Channel | GET | `/v1/Services/{{serviceSid}}/Channels/{{sid}}` | `conn_mod_def::GJ7T1Zvz3g8::5Iu7eXRrShKlO_dWilLseQ` |
| Fetch a Service's Channel | GET | `/Services/{{serviceSid}}/Channels/{{sid}}` | `conn_mod_def::GJ7T231bYYw::7yW6hSAFQRGWa2JRN7VnWQ` |
| Fetch a Service's Channel | GET | `/v1/Services/{{serviceSid}}/Channels/{{sid}}` | `conn_mod_def::GJ7UB0ShQU0::_MDIDLviTYC1b-CIgx5nAw` |
| Fetch a Service’s Channel | GET | `/v2/Services/{{serviceSid}}/Channels/{{sid}}` | `conn_mod_def::GJ7UDiLkzL4::y4lvgmATSN242pjHqsXb3w` |
| List a Service's Channels | GET | `/v1/Services/{{serviceSid}}/Channels` | `conn_mod_def::GJ7UB0g2kfs::1OtvRzM3QXyC4wApZDgL7w` |
| List a Service's Channels | GET | `/v1/Services/{{serviceSid}}/Channels` | `conn_mod_def::GJ7T1ZoHZgY::moRtsTTmT2uihjSZk_eOxQ` |
| List a Service's Channels | GET | `/v2/Services/{{serviceSid}}/Channels` | `conn_mod_def::GJ7UDjzkINM::NXopmY7JSwG4tQDFGvZskQ` |
| List a Service’s Channels | GET | `/v2/Services/{{serviceSid}}/Channels` | `conn_mod_def::GJ7T3AjzJkQ::1E4SL8R3R7yHLHcvms3R3g` |
| List a User's Channels | GET | `/v2/Services/{{serviceSid}}/Users/{{userSid}}/Channels` | `conn_mod_def::GJ7UE2dt5tQ::rXZGYsPnSrm4Lg2Z8qHgEg` |
| List a User’s Channels | GET | `/v1/Services/{{serviceSid}}/Users/{{userSid}}/Channels` | `conn_mod_def::GJ7T2nAn8I8::tNaYBY8rR7ePh1jlfHkPeQ` |
| List a User's Channels (IP Messaging) | GET | `/v1/Services/{{serviceSid}}/Users/{{userSid}}/Channels` | `conn_mod_def::GJ7UDagH_6c::5_gSTOihSs6ug4XFcMImJQ` |

16 more Channels actions are available through search.

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Conversation Service Role | GET | `/v1/Services/{{chatServiceSid}}/Roles/{{sid}}` | `conn_mod_def::GJ7T6SIKBDs::oaukdonJTNe3gSreybbGGA` |
| Fetch a Role | GET | `/v1/Roles/{{sid}}` | `conn_mod_def::GJ7T6XZUo-o::Ou8gDm39T4ihjkTo6wcqdw` |
| Fetch a Service Role | GET | `/Services/{{serviceSid}}/Roles/{{sid}}` | `conn_mod_def::GJ7UCiAwQGo::3Wnfvy_zReqKynqXJoXRog` |
| Fetch a Service's Role | GET | `/v1/Services/{{serviceSid}}/Roles/{{sid}}` | `conn_mod_def::GJ7T2NRt9I4::9vEZroCxQxWUOnYtJWdYbg` |
| Fetch a Service's Role | GET | `/v2/Services/{{serviceSid}}/Roles/{{sid}}` | `conn_mod_def::GJ7T3ru1onw::fFktusTwS6W-bv5n1-4UyQ` |
| List a Conversation Service's Roles | GET | `/v1/Services/{{chatServiceSid}}/Roles` | `conn_mod_def::GJ7T6g8f_N4::APMzI1y8TUif0vaI94Ze4w` |
| List a Service's Roles | GET | `/v1/Services/{{serviceSid}}/Roles` | `conn_mod_def::GJ7UCjIe1PM::c73rVrGdTZCG0iOXo2T7sg` |
| List a Service's Roles | GET | `/v2/Services/{{serviceSid}}/Roles` | `conn_mod_def::GJ7UEUitCww::Q-R1o4iGRXuYgxR9qMX2Yw` |
| List a Service's Roles | GET | `/v2/Services/{{serviceSid}}/Roles` | `conn_mod_def::GJ7T3tEi3pA::dfboHYsWT4-mzSrA32L0NA` |
| List a Service’s Roles | GET | `/v1/Services/{{serviceSid}}/Roles` | `conn_mod_def::GJ7T2OIGEO4::2UNYjfyWTqG9NUpFYkOWiA` |
| List Roles (Default Conversations Service) | GET | `/Roles` | `conn_mod_def::GJ7T6eUtjuA::nZnCaq1uTx-X-emjYfPAWw` |
| Create a Conversation Service Role | POST | `/v1/Services/{{chatServiceSid}}/Roles` | `conn_mod_def::GJ7T6SLvh2M::JksitZqiTlKDsLWjuN30Hw` |

12 more Roles actions are available through search.

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Channel Message | GET | `/v1/Services/{{serviceSid}}/Channels/{{channelSid}}/Messages/{{sid}}` | `conn_mod_def::GJ7T2F2zC_g::Ml06ZplXS8W39BhQeyFgwQ` |
| Fetch a Channel Message | GET | `/v2/Services/{{serviceSid}}/Channels/{{channelSid}}/Messages/{{sid}}` | `conn_mod_def::GJ7T3k_T4Lo::XItZUsu8TxKv6det3i7e1g` |
| Fetch a Message for an Account | GET | `/2010-04-01/Accounts/{{TWILIO_ACCOUNT_SID}}/Messages/{{sid}}.json` | `conn_mod_def::GJ7TyjjjDn4::D0FgAus5Ra6-ggJVBDpBzA` |
| List a Channel's Messages | GET | `/v1/Services/{{serviceSid}}/Channels/{{channelSid}}/Messages` | `conn_mod_def::GJ7T2HKKz28::zOFY8YDFRbCbAcDltEEoMA` |
| List a Channel's Messages | GET | `/v2/Services/{{serviceSid}}/Channels/{{channelSid}}/Messages` | `conn_mod_def::GJ7T3lZ0EM4::1alXFk3YTdS2rEWl2AfnVg` |
| List a Channel’s Messages | GET | `/v1/Services/{{serviceSid}}/Channels/{{channelSid}}/Messages` | `conn_mod_def::GJ7UCX3y9-8::fesvyOc7RMGH-YCWILhTGA` |
| List a Channel’s Messages | GET | `/v2/Services/{{serviceSid}}/Channels/{{channelSid}}/Messages` | `conn_mod_def::GJ7UEIJ08II::YKbDtO3VTCOVTNYfOq2HTQ` |
| List a Conversation’s Messages | GET | `/v1/Conversations/{{conversationSid}}/Messages` | `conn_mod_def::GJ7T5s84ffY::HUIvZQPzSd2bCSowirTWqw` |
| List a Service Conversation’s Messages | GET | `/v1/Services/{{chatServiceSid}}/Conversations/{{conversationSid}}/Messages` | `conn_mod_def::GJ7T5tTXIVk::H2GUm4Z3QIKyD36POwKkGA` |
| List a Session's Messages | GET | `/Sessions/{{sessionId}}/Messages` | `conn_mod_def::GJ7T_2N6zeI::qeAK1DmuQZOiwPg9W2Ow_g` |
| List an Account's Messages | GET | `/2010-04-01/Accounts/{{TWILIO_ACCOUNT_SID}}/Messages.json` | `conn_mod_def::GJ7TysMvmlc::ocoRKpVrTMyeYksar6fRRg` |
| Create a Channel Message | POST | `/v2/Services/{{serviceSid}}/Channels/{{channelSid}}/Messages` | `conn_mod_def::GJ7T3dhQUh8::ue_sZoPpQcq78Rms_QnZOA` |

11 more Messages actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Conversation Service User | GET | `/v1/Services/{{chatServiceSid}}/Users/{{sid}}` | `conn_mod_def::GJ7T6wu_dRk::ilWQQKu4TrangHbloOCgFA` |
| Fetch a Frontline User | GET | `/v1/Users/{{sid}}` | `conn_mod_def::GJ7T-lYnkeQ::0WVpfvhXTZyuXLCR_SLluw` |
| Fetch a Service's User | GET | `/v2/Services/{{serviceSid}}/Users/{{sid}}` | `conn_mod_def::GJ7T36hpWTo::PznRlGmLSpS3rd7TJ_kNqA` |
| Fetch a Service's User | GET | `/v2/Services/{{serviceSid}}/Users/{{sid}}` | `conn_mod_def::GJ7UEoIDdg4::IJ7T46zBTQ6pGqGWOzh8dQ` |
| List a Conversation Service’s Users | GET | `/Services/{{chatServiceSid}}/Users` | `conn_mod_def::GJ7T7AnA5XY::wpS28bkCSUSSYUAOxhIIow` |
| List a Service's Users | GET | `/v2/Services/{{serviceSid}}/Users` | `conn_mod_def::GJ7UEpK0q4M::yAK4Mwv9SL-X3apnOkBvhQ` |
| List a Service's Users | GET | `/v1/Services/{{serviceSid}}/Users` | `conn_mod_def::GJ7T2e1JtaA::Ko_i0uAwQUG_yHQIlaTpHg` |
| List a Service's Users | GET | `/Services/{{serviceSid}}/Users` | `conn_mod_def::GJ7T37S0KOA::EumjgdnaS2StgjkAZRF3_Q` |
| List a Service's Users | GET | `/v1/Services/{{serviceSid}}/Users` | `conn_mod_def::GJ7UC0gqwI4::xu1yIwgdST2h84g4dpxVpA` |
| List Conversation Users (Default Service) | GET | `/v1/Users` | `conn_mod_def::GJ7T6yZcs0E::ictA0kk7TzCnfhC6gvNT6w` |
| Create a Service User (Twilio IP Messaging) | POST | `/v1/Services/{{serviceSid}}/Users` | `conn_mod_def::GJ7UDS5KiIU::ncIeVusoR9Ocik9xOMnyrQ` |
| Delete a Conversation User (Default Service) | DELETE | `/v1/Users/{{sid}}` | `conn_mod_def::GJ7T64nGHiE::aNQw2UhbT5-UXw8HlUHuGA` |

8 more Users actions are available through search.

### Bindings

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Conversation Service Push Notification Binding | GET | `/Services/{{chatServiceSid}}/Bindings/{{sid}}` | `conn_mod_def::GJ7T4yGxoRY::H-BMUwpFRW2grAsT6ZTdsA` |
| Fetch a Notify Service’s Binding | GET | `/Services/{{serviceSid}}/Bindings/{{sid}}` | `conn_mod_def::GJ7UH4kX9as::rjZsy_b2SoOllLGXHk5k7g` |
| Fetch a Service's Binding | GET | `/v2/Services/{{serviceSid}}/Bindings/{{sid}}` | `conn_mod_def::GJ7T2yDXXMk::5LbXBq0QRAqnnNLYP80JtQ` |
| Fetch a Service's Binding | GET | `/Services/{{serviceSid}}/Bindings/{{sid}}` | `conn_mod_def::GJ7UDaIdyxQ::QVnQ_M3YSmq2mliyPJQtow` |
| Fetch a User’s Binding | GET | `/v2/Services/{{serviceSid}}/Users/{{userSid}}/Bindings/{{sid}}` | `conn_mod_def::GJ7UEoHDaWg::33wfu6egSn6mIyd_Q0eXaA` |
| List a Conversation Service's Push Notification Bindings | GET | `/v1/Services/{{chatServiceSid}}/Bindings` | `conn_mod_def::GJ7T4wT7w80::t1tSii1BSt61-NXKa2WGJQ` |
| List a Service's Bindings | GET | `/v2/Services/{{serviceSid}}/Bindings` | `conn_mod_def::GJ7T2nAHkOk::oguhJpHDThqczYEMNs5kig` |
| List a Service's Bindings | GET | `/v2/Services/{{serviceSid}}/Bindings` | `conn_mod_def::GJ7UDbO3o1Y::xoazopsiQ46OE_vE09Z78A` |
| List a Service’s Bindings | GET | `/v1/Services/{{serviceSid}}/Bindings` | `conn_mod_def::GJ7UH8Y6ybo::FUsJW9ekRv2brshwzccUvQ` |
| List a User's Bindings | GET | `/v2/Services/{{serviceSid}}/Users/{{userSid}}/Bindings` | `conn_mod_def::GJ7UExRqny4::CMq7M8OVSSOxLRJIJbCBsA` |
| List a User’s Bindings | GET | `/v2/Services/{{serviceSid}}/Users/{{userSid}}/Bindings` | `conn_mod_def::GJ7T4CK0OCQ::nfzB4iJoS3-wnL8WntfT_g` |
| Delete a Notify Service Binding | DELETE | `/Services/{{serviceSid}}/Bindings/{{sid}}` | `conn_mod_def::GJ7UH34gAm4::EivEykgvS2Kkyp7bT5Rozw` |

4 more Bindings actions are available through search.

### Participants

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Conversation Service Conversation Participant | GET | `/v1/Services/{{chatServiceSid}}/Conversations/{{conversationSid}}/Participants/{{sid}}` | `conn_mod_def::GJ7T57SUUYE::2G8v6xr6TgqLxUPDAIFZLA` |
| Fetch a Room's Participant | GET | `/Rooms/{{roomSid}}/Participants/{{sid}}` | `conn_mod_def::GJ7UdQBqa-Q::dKctS3bDQvywP7d9L5pikg` |
| Fetch a Session Participant in a Service | GET | `/v1/Services/{{serviceSid}}/Sessions/{{sessionSid}}/Participants/{{sid}}` | `conn_mod_def::GJ7UL2lNl8Y::Gvu_jZiBQ2O5bqUqLIJQfw` |
| List a Conference's Participants (Account) | GET | `/Accounts/{{TWILIO_ACCOUNT_SID}}/Conferences/{{conferenceSid}}/Participants.json` | `conn_mod_def::GJ7TzQhNyhU::gerxNiHGQHaSEqh5DODZZA` |
| List a Conversation’s Participants | GET | `/v1/Conversations/{{conversationSid}}/Participants` | `conn_mod_def::GJ7T57o1Ylk::sxB7UuVDTJW4MdCMrvfmtg` |
| List a Service Conversation’s Participants | GET | `/v1/Services/{{chatServiceSid}}/Conversations/{{conversationSid}}/Participants` | `conn_mod_def::GJ7T58bz4YU::jdoskgf3SS-A45HAFN8-YQ` |

8 more Participants actions are available through search.

This lists 90 of 1437 actions. For anything not here, call `search_one_platform_actions` with platform `twilio`. The full catalog is at https://www.withone.ai/knowledge/twilio.

## When a call fails

The error comes from Twilio, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/twilio

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
