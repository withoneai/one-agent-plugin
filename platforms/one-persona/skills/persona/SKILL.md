---
name: persona
description: A secure identity verification and compliance platform that enables businesses to collect, verify, and manage user identities with customizable KYC, AML, age assurance, and fraud prevention workflows to streamline onboarding, risk assessment, and regulatory compliance. Read and write Persona data through One: inquiries, cases, reports, accounts, transactions, webhooks and more, 179 actions with real parameter documentation. Use whenever the user asks to look something up in Persona, create or update a record there, or build code against the Persona API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: persona
  generated-from: one-knowledge-base
---

# Persona through One

A secure identity verification and compliance platform that enables businesses to collect, verify, and manage user identities with customizable KYC, AML, age assurance, and fraud prevention workflows to streamline onboarding, risk assessment, and regulatory compliance.

One exposes Persona through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `persona` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Persona is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Persona account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Inquiries

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Inquiries | GET | `/inquiries` | `conn_mod_def::GKHlUcmqQZU::4laFx2M6TFqU0hLzKVC-CA` |
| Print an Inquiry PDF | GET | `/inquiries/{{inquiryId}}/print` | `conn_mod_def::GKHlUpADtnc::iY1n-R3PTlWF0LJGSF_0Og` |
| Retrieve an Inquiry | GET | `/inquiries/{{inquiryId}}` | `conn_mod_def::GKHlU7hCM_8::Mvo2KDAuTkCEpmtrPSxOtw` |
| Add Tag to an Inquiry | POST | `/inquiries/{{inquiryId}}/add-tag` | `conn_mod_def::GKHlUKvbhA0::2NuA5dt8QkmlgabIetvcpw` |
| Approve an Inquiry | POST | `/inquiries/{{inquiryId}}/approve` | `conn_mod_def::GKHlUKUenDQ::1VVLS23mQ-aYw1lnDS8DBQ` |
| Create an Inquiry | POST | `/api/v1/inquiries` | `conn_mod_def::GKHlUKmF7YM::nxIph_IVR8GDQW05K4zlXA` |
| Decline an Inquiry | POST | `/inquiries/{{inquiryId}}/decline` | `conn_mod_def::GKHlUUresJI::YDMmYbffT7CtTIUOiqW2qw` |
| Expire an Inquiry | POST | `/inquiries/{{inquiryId}}/expire` | `conn_mod_def::GKHlUdC4l60::mJec3E3LS8GTYnBrhbRMLw` |
| Generate a One-Time Link for an Inquiry | POST | `/inquiries/{{inquiryId}}/generate-one-time-link` | `conn_mod_def::GKHlUXHlMiM::EGvC7sCiRfegm_-tqxUEGw` |
| Mark an Inquiry for Manual Review | POST | `/inquiries/{{inquiryId}}/mark-for-review` | `conn_mod_def::GKHlUVAR1so::e5n4hgsYTiufkuNvOyrwYQ` |
| Perform Simulate Actions on an Inquiry | POST | `/inquiries/{{inquiryId}}/perform-simulate-actions` | `conn_mod_def::GKHlUoddc44::BWetd7jyRyCgHBUB2LCquA` |
| Redact an Inquiry | DELETE | `/inquiries/{{inquiryId}}` | `conn_mod_def::GKHlUochr8Y::abjbGQ9WRsagh4e8OFeJVQ` |

4 more Inquiries actions are available through search.

### Cases

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Cases | GET | `/api/v1/cases` | `conn_mod_def::GKHlSrpcl0A::PDjJSB8pRlKQNPf-gOYjpQ` |
| Retrieve a Case | GET | `/cases/{{caseId}}` | `conn_mod_def::GKHlSqplGH4::aJDtG8fRS0WkLm2eRodq5g` |
| Add Persona Objects to a Case | POST | `/cases/{{caseId}}/add-objects` | `conn_mod_def::GKHlSXgEpls::2cvWhPsaQyq-Sf7S5lLZQA` |
| Add Tag to a Case | POST | `/cases/{{caseId}}/add-tag` | `conn_mod_def::GKHlSfTZd8g::eLOU4nvUSx2eyXWvNPpQ0g` |
| Assign a Case | POST | `/cases/{{caseId}}/assign` | `conn_mod_def::GKHlSUrfVTQ::fibmbtl-SKaug1WF1hxUbg` |
| Create a Case | POST | `/api/v1/cases` | `conn_mod_def::GKHlSUr-zFU::niPa8UVlQVOHRxV_Kl0dTw` |
| Redact a Case | DELETE | `/cases/{{caseId}}` | `conn_mod_def::GKHlSokIP68::0yIeWW-HRl2a-9fBxIySbw` |
| Remove Tag from a Case | POST | `/cases/{{caseId}}/remove-tag` | `conn_mod_def::GKHlSpevNRY::b4O_Wb1JTGar6lmkcZ2z4w` |
| Search Cases | POST | `/cases/search` | `conn_mod_def::GKHlSqVOIeU::KHpGluDaQxyW0reMEjYUmA` |
| Set Status for a Case | POST | `/cases/{{caseId}}/set-status` | `conn_mod_def::GKHlS0kYV-Y::buxlk88eRR6BwHyEjzyOvQ` |
| Set Tags on a Case | POST | `/cases/{{caseId}}/set-tags` | `conn_mod_def::GKHlS2JsGk8::BDxUCd_gQi63zXQnw85HEg` |
| Update a Case | PATCH | `/cases/{{caseId}}` | `conn_mod_def::GKHlS4SHtF0::6ip-C8mfQTml55k8kvC22w` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Reports | GET | `/reports` | `conn_mod_def::GKHlXnoTbDY::lRDHXfPFSHCcSNT5kvPZXg` |
| Print a Report PDF | GET | `/reports/{{reportId}}/print` | `conn_mod_def::GKHlXxP4ZOw::LHKzT-swQvq7DdMIEYT0Xw` |
| Retrieve a Report | GET | `/reports/{{reportId}}` | `conn_mod_def::GKHlYBkYAeM::531g_LbcQy-OfVPXTfqNbA` |
| Add Tag to a Report | POST | `/reports/{{reportId}}/add-tag` | `conn_mod_def::GKHlXmg6dtw::vga7f9RATJe4rol3jaLO2g` |
| Create a Report | POST | `/api/v1/reports` | `conn_mod_def::GKHlXm14n8A::tfE8fXrxTUWLTyuwZePvsg` |
| Dismiss Matches for a Report | POST | `/reports/{{reportId}}/dismiss` | `conn_mod_def::GKHlXy0WZhQ::LRs9cYc7R7qbbrpYAnrS3A` |
| Pause Continuous Monitoring on a Report | POST | `/reports/{{reportId}}/pause` | `conn_mod_def::GKHlX0K3a9s::9PMeJKK5TLOmwlAnZZH6cw` |
| Re-run a Report | POST | `/reports/{{reportId}}/run` | `conn_mod_def::GKHlX_z9oN0::ejD5vHqTR_6A0CBb1LlMbA` |
| Redact a Report | DELETE | `/reports/{{reportId}}` | `conn_mod_def::GKHlXx8k554::NW1OY29PQ42Dv4LD4fU92w` |
| Remove Tag from a Report | POST | `/reports/{{reportId}}/remove-tag` | `conn_mod_def::GKHlXyw6f2U::OmBX6ZZVTKuKCIKOQn7uKA` |
| Resume Continuous Monitoring for a Report | POST | `/reports/{{reportId}}/resume` | `conn_mod_def::GKHlX_WlHJ4::KBSoWrOiRBWW9r15YeF5eA` |
| Set Tags on a Report | POST | `/reports/{{reportId}}/set-tags` | `conn_mod_def::GKHlYBFskPk::t-IDtWZ0Rou_fDs3pXyTUQ` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Accounts | GET | `/api/v1/accounts` | `conn_mod_def::GKHlRlqdQ74::O6zN7E5-TtiLx0iefzusEQ` |
| Retrieve an Account | GET | `/accounts/{{accountId}}` | `conn_mod_def::GKHlRp4rM6U::I8wPgGJgQsySMydLCfJ4nA` |
| Add Tag to an Account | POST | `/accounts/{{accountId}}/add-tag` | `conn_mod_def::GKHlRWw_ong::r3Y5zR90Rl6GZFFfkGs6fQ` |
| Consolidate Into an Account | POST | `/accounts/{{accountId}}/consolidate` | `conn_mod_def::GKHlRWqWTpM::xgGsPdIoTtm2b-sdGsclYg` |
| Create an Account | POST | `/api/v1/accounts` | `conn_mod_def::GKHlRX_fzJ8::eCikDN4bQDm7zpipG1O3MQ` |
| Redact an Account | DELETE | `/accounts/{{accountId}}` | `conn_mod_def::GKHlRll6gQw::gT1gM2btQGaAf7ZkCr1SHA` |
| Remove Tag from an Account | POST | `/accounts/{{accountId}}/remove-tag` | `conn_mod_def::GKHlRlNF0FI::KjUZiwHuTOGF8aQ7oyFaUg` |
| Run an Action for an Account | POST | `/accounts/{{accountId}}/run-action` | `conn_mod_def::GKHlRja-PJ0::lpBa2tb1TCKvyvzLWnb8-g` |
| Search Accounts | POST | `/api/v1/accounts/search` | `conn_mod_def::GKHlR3xF3S4::_C_polDJQxeoltUyz8UI3Q` |
| Set Tags on an Account | POST | `/accounts/{{accountId}}/set-tags` | `conn_mod_def::GKHlRzocWmU::ixaZ5UKtR0qXyYVXbM35mQ` |
| Update an Account | PATCH | `/accounts/{{accountId}}` | `conn_mod_def::GKHlRzRVNeA::fwQ2kHMHT1GEgOeo7bY0MQ` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Transactions | GET | `/api/v1/transactions` | `conn_mod_def::GKHlYdtdekw::htZi-w35QbuZ8_KbzlPBMA` |
| Retrieve a Transaction | GET | `/transactions/{{transactionId}}` | `conn_mod_def::GKHlYZ_6zcA::0RK5subYReykIN8KP3vevQ` |
| Add Tag to a Transaction | POST | `/transactions/{{transactionId}}/add-tag` | `conn_mod_def::GKHlYKNmlDY::acnClGb1TfG1_JQPd9ZkVw` |
| Create a Label for a Transaction | POST | `/transactions/{{transactionId}}/label` | `conn_mod_def::GKHlYQr0U7c::DwqKZiuEScSi8WSymqGpnw` |
| Create a Transaction | POST | `/api/v1/transactions` | `conn_mod_def::GKHlYMJn7Lw::xwgIP38aQcKBtdeAUT18JQ` |
| Redact a Transaction | DELETE | `/transactions/{{transactionId}}` | `conn_mod_def::GKHlYbxNBxI::eRJuqo0RRf2IW0abxKyoUQ` |
| Redact Biometrics for a Transaction | POST | `/transactions/{{transactionId}}/redact-biometrics` | `conn_mod_def::GKHlYc7thQk::jJ_DBtB6ROu5Kp4qP9do5w` |
| Remove Tag from a Transaction | POST | `/transactions/{{transactionId}}/remove-tag` | `conn_mod_def::GKHlYZ2hNu0::QnX9h2JtTEakDXVCCl1WMg` |
| Set Tags on a Transaction | POST | `/transactions/{{transactionId}}/set-tags` | `conn_mod_def::GKHlYqTwNQs::t8XmCcoORimBbECGEtJ5OA` |
| Update a Transaction | PATCH | `/transactions/{{transactionId}}` | `conn_mod_def::GKHlYnMohko::evyWNiJRQQaRl99UEER3MA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Webhooks | GET | `/api/v1/webhooks` | `conn_mod_def::GKHlZCDYRps::YDiG2wv2T16LQa_TXq1cjQ` |
| Retrieve a Webhook | GET | `/webhooks/{{webhookId}}` | `conn_mod_def::GKHlZBt7YH4::fnIhLMhPSR6ERAinpfWYMA` |
| Archive a Webhook | POST | `/webhooks/{{webhookId}}/archive` | `conn_mod_def::GKHlY1fJpB4::zcJHeg_RRY2n96vdx4853A` |
| Clone a Webhook | POST | `/webhooks/{{webhookId}}/clone` | `conn_mod_def::GKHlY2J_Epk::dFQ0TgZ7SD2oJegqsMqRHw` |
| Create a Webhook | POST | `/api/v1/webhooks` | `conn_mod_def::GKHlY4HeAoM::lBUMnGH-StChwaf-qBJ2xQ` |
| Disable a Webhook | POST | `/webhooks/{{webhookId}}/disable` | `conn_mod_def::GKHlZCQoOpY::upa4vtV9SySsezy0wOKhRw` |
| Enable a Webhook | POST | `/webhooks/{{webhookId}}/enable` | `conn_mod_def::GKHlZCQf4o4::CNtuI0yGTaC4vKTCxnyiAA` |
| Rotate a Webhook's Secret | POST | `/webhooks/{{webhookId}}/rotate-secret` | `conn_mod_def::GKHlZDPkCAk::IkXRIPH3RROObpVRWUcBQA` |
| Update a Webhook | PATCH | `/webhooks/{{webhookId}}` | `conn_mod_def::GKHlZPMLNDw::Zo3XMiDYQJ-hZsfoe2dwXw` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List All API Keys | GET | `/api/v1/api-keys` | `conn_mod_def::GKHlSI-TsrA::83xe6RzQTCijSnpsOFGl_Q` |
| Retrieve an API Key | GET | `/api-keys/{{apiKeyId}}` | `conn_mod_def::GKHlSIHEXI0::iuW96n9PQQmA7IPXc6XggQ` |
| Clone an API Key | POST | `/api-keys/{{apiKeyId}}/clone` | `conn_mod_def::GKHlR-lW6ps::XXZgHg_uQ2iN94dXIzi0tQ` |
| Create an API Key | POST | `/api/v1/api-keys` | `conn_mod_def::GKHlRzSGrWM::QdFCnhO8S_q5uk3VCVm2xg` |
| Expire an API Key | POST | `/api/v1/api-keys/{{apiKeyId}}/expire` | `conn_mod_def::GKHlSIOInHY::jXtHzr-RSxKjQA8Gs7916Q` |
| Update an API Key | PATCH | `/api-keys/{{apiKeyId}}` | `conn_mod_def::GKHlSJpVJ5c::qUf5lPfVRvKPcGc2ZzRNZA` |

### InquirySessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Inquiry Sessions | GET | `/api/v1/inquiry-sessions` | `conn_mod_def::GKHlVFAqN6Q::ZoKiX5jtT-OuTXwy89m4UA` |
| Retrieve an Inquiry Session | GET | `/inquiry-sessions/{{inquirySessionId}}` | `conn_mod_def::GKHlVF6xRmo::5YNeTUuDShy9_e7_oYg9kQ` |
| Create an Inquiry Session | POST | `/api/v1/inquiry-sessions` | `conn_mod_def::GKHlUzrrqlA::p2mnDRlxTvK5zyb_xwkKJA` |
| Expire an Inquiry Session | POST | `/inquiry-sessions/{{inquirySessionId}}/expire` | `conn_mod_def::GKHlUy7qR_M::r4knMZrUReSgp7gctpxCeQ` |
| Expire Inquiry Sessions | POST | `/api/v1/inquiry-sessions/expire-all` | `conn_mod_def::GKHlVGmtrQo::KCRm2bJiQduFodVUv_Vi-Q` |
| Generate a One-Time Link for an Inquiry Session | POST | `/inquiry-sessions/{{inquirySessionId}}/generate-one-time-link` | `conn_mod_def::GKHlVF7-cGI::7yvXwwVRQZaEytty76hi0A` |

### DeviceFingerprintListItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Device Fingerprint List Item | GET | `/list-item/device-fingerprints/{{listItemId}}` | `conn_mod_def::GKHlWcvV4-Y::CYD5cadLTGaT6abwFO-cRQ` |
| Archive a Device Fingerprint List Item | DELETE | `/list-item/device-fingerprints/{{listItemId}}` | `conn_mod_def::GKHlVRHFUYg::mQRNfGsZQM2zeYqVZ9dZhQ` |
| Create a Device Fingerprint List Item | POST | `/api/v1/list-item/device-fingerprints` | `conn_mod_def::GKHlVz6RgkU::Y3O-PclXR1GRKcUQRuWL6w` |

### BrowserFingerprintListItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Browser Fingerprint List Item | GET | `/list-item/browser-fingerprints/{{listItemId}}` | `conn_mod_def::GKHlWLXnuTo::yu6PIouhRI2lIKzqDvgkHw` |
| Archive a Browser Fingerprint List Item | DELETE | `/list-item/browser-fingerprints/{{listItemId}}` | `conn_mod_def::GKHlVSc1wpI::3zAM1Nq-Sa6SObch364gFg` |
| Create a Browser Fingerprint List Item | POST | `/api/v1/list-item/browser-fingerprints` | `conn_mod_def::GKHlVzPyHsY::mjse3I8hT3GOzEbCplJ9UA` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Lists | GET | `/api/v1/lists` | `conn_mod_def::GKHlW-HWvsg::DO_x9Hk3RtSfoH9cOVLdMA` |
| Retrieve a List | GET | `/lists/{{listId}}` | `conn_mod_def::GKHlXMSoScs::kXfDdRNuSn216A5N1Letmw` |
| Archive a List | DELETE | `/lists/{{listId}}` | `conn_mod_def::GKHlWmwL5yM::LkKm-XLyTv6CUEaQScxZKQ` |

### Verifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Print a Verification as PDF | GET | `/verifications/{{verificationId}}/print` | `conn_mod_def::GKHlYnKVRTg::YPkcTd0lQR6VqevPiexV9Q` |
| Retrieve a Verification | GET | `/verifications/{{verificationId}}` | `conn_mod_def::GKHlY2Dwznw::i_9c_HZCTEKgS8UThIbk-Q` |
| Redact a Verification | DELETE | `/verifications/{{verificationId}}` | `conn_mod_def::GKHlYzEJVUY::WUGEVBaORrOHQHm64InlNw` |

This lists 90 of 179 actions. For anything not here, call `search_one_platform_actions` with platform `persona`. The full catalog is at https://www.withone.ai/knowledge/persona.

## When a call fails

The error comes from Persona, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/persona

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
