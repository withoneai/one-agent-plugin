---
name: post-grid-print-mail
description: PostGrid is an address verification and print-and-mail platform whose Print & Mail API enables businesses to automate postcard, letter, check, and document delivery, allowing developers to send physical mail programmatically and manage direct mail workflows through integrated applications. Read and write PostGrid Print & Mail data through One: cheques, letters, postcards, boxes, returnenvelopeorders, selfmailers and more, 66 actions with real parameter documentation. Use whenever the user asks to look something up in PostGrid Print & Mail, create or update a record there, or build code against the PostGrid Print & Mail API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: post-grid-print-mail
  generated-from: one-knowledge-base
---

# PostGrid Print & Mail through One

PostGrid is an address verification and print-and-mail platform whose Print & Mail API enables businesses to automate postcard, letter, check, and document delivery, allowing developers to send physical mail programmatically and manage direct mail workflows through integrated applications.

One exposes PostGrid Print & Mail through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `post-grid-print-mail` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm PostGrid Print & Mail is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real PostGrid Print & Mail account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Cheques

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cheque | GET | `/print-mail/v1/cheques/{{id}}` | `conn_mod_def::GLl9csNEq1g::QqASsIXUTe69lU0Y1vp-BQ` |
| Get Deposit-Ready Digital Check for a Cheque | GET | `/print-mail/v1/cheques/{{id}}/with_deposit_ready_pdf` | `conn_mod_def::GLl9cs0gA-g::uNbXUcBIRzO5TA9nn3rKGw` |
| List Cheques | GET | `/print-mail/v1/cheques` | `conn_mod_def::GLl9ctHb7eg::YHPqYZJcSoWm-DKe8Kqpaw` |
| Cancel a Cheque with a Cancellation Note | POST | `/print-mail/v1/cheques/{{id}}/cancellation` | `conn_mod_def::GLl9ctXhLjA::Cuyz-cN2RVKkp5R2q2_Efw` |
| Cancel Cheque | DELETE | `/print-mail/v1/cheques/{{id}}` | `conn_mod_def::GLl9clQ8AIA::OAhAgRcjRsWOu_-vxrhG8w` |
| Create Cheque Using Print Mail v1 | POST | `/print-mail/v1/cheques` | `conn_mod_def::GLl9csu91_A::RFyTt3mxQXep3ebDR6yOyA` |
| Progress Test Cheque | POST | `/print-mail/v1/cheques/{{id}}/progressions` | `conn_mod_def::GLl9c5VLvnA::etqrT-MqT9qSnqTJsAHnlA` |

### Letters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Letter | GET | `/print-mail/v1/letters/{{id}}` | `conn_mod_def::GLl9c_cL-ZA::mIdzXcUSQguJ0reEcKlVYw` |
| List Letters Using Print Mail v1 | GET | `/print-mail/v1/letters` | `conn_mod_def::GLl9c_i5hmg::XaY4ZaGYSCWlhpNaPPr-ig` |
| Cancel a Letter | DELETE | `/print-mail/v1/letters/{{id}}` | `conn_mod_def::GLl9c-5CzIA::73Iv0QItTgCmfCWn7NURLw` |
| Cancel a Letter with Cancellation Note | POST | `/print-mail/v1/letters/{{id}}/cancellation` | `conn_mod_def::GLl9dAJN4xg::0Q7wy8XmR12eE-BmZe-MUA` |
| Create Letter | POST | `/print-mail/v1/letters` | `conn_mod_def::GLl9dGthTRg::eRONc9P2SFmuECPTQkObVg` |
| Progressions for a Letter | POST | `/print-mail/v1/letters/{{id}}/progressions` | `conn_mod_def::GLl9dGqzjKA::iQx07OM1TVSppsxmSu_eLw` |

### Postcards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Postcard | GET | `/print-mail/v1/postcards/{{id}}` | `conn_mod_def::GLl9dNl_o6g::jvMjMU0VS4edpwv-2_Gq1g` |
| List Postcards | GET | `/print-mail/v1/postcards` | `conn_mod_def::GLl9dMg90rg::dKXMIMYCTheiPBUIM1JBhg` |
| Cancel a Postcard | POST | `/print-mail/v1/postcards/{{id}}/cancellation` | `conn_mod_def::GLl9dGqclbg::vKgx6C4lQSylgXqiDBhs8g` |
| Cancel Postcard | DELETE | `/print-mail/v1/postcards/{{id}}` | `conn_mod_def::GLl9dGI3gag::AQkxzeh8Qa-FT0MAKc5u6g` |
| Create Postcards | POST | `/print-mail/v1/postcards` | `conn_mod_def::GLl9dGN3ujg::n3jpRXI_TtOr4T6ca2N-lQ` |
| Progressions for a Postcard | POST | `/print-mail/v1/postcards/{{id}}/progressions` | `conn_mod_def::GLl9dNmOaOg::jkFZ3rE9SuGW8TlDTfshrQ` |

### Boxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Box | GET | `/print-mail/v1/boxes/{{id}}` | `conn_mod_def::GLl9clJcX1g::3HaAqHVKQmOMg9t1H9CPQA` |
| List Boxes | GET | `/print-mail/v1/boxes` | `conn_mod_def::GLl9cl1Ig9g::HjkCAmanRp2HDOTsBB-xdA` |
| Cancel Box | DELETE | `/print-mail/v1/boxes/{{id}}` | `conn_mod_def::GLl9ce6xDXg::AAfjRV4DQw2SiURu4g4u5g` |
| Create Box With Cheques | POST | `/print-mail/v1/boxes` | `conn_mod_def::GLl9clZFMkg::69O7Ab0KRkya4Z6ip9Y_4A` |
| Progressions Using Boxes | POST | `/print-mail/v1/boxes/{{id}}/progressions` | `conn_mod_def::GLl9clC_TUA::A1EGgCC7QrSE3Wvi8T3Sug` |

### ReturnEnvelopeOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Return Envelope Order | GET | `/print-mail/v1/return_envelopes/{{id}}/orders/{{orderID}}` | `conn_mod_def::GLl9dYgkvug::idYWMoMjSl2YhlIO6MR4rA` |
| List Return Envelope Orders for a Return Envelope | GET | `/print-mail/v1/return_envelopes/{{id}}/orders` | `conn_mod_def::GLl9dXAy2QA::qgY6mEHFQxqQH7xEpnOzNA` |
| Cancel a Return Envelope Order | DELETE | `/print-mail/v1/return_envelopes/{{id}}/orders/{{orderId}}` | `conn_mod_def::GLl9dP1O1HA::B0CAucc9RpuZ4Eyc3c7ESg` |
| Create Return Envelope Orders for a Return Envelope | POST | `/print-mail/v1/return_envelopes/{{id}}/orders` | `conn_mod_def::GLl9dOAWOUg::MrG_cEY8S-i8-Vs6DIg_Dw` |
| Fill Using Return Envelopes Orders | POST | `/print-mail/v1/return_envelopes/{{id}}/orders/{{orderID}}/fills` | `conn_mod_def::GLl9dW4N6ag::N-xJ7bOHRUe69VR82dweUQ` |

### SelfMailers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Self Mailer | GET | `/print-mail/v1/self_mailers/{{id}}` | `conn_mod_def::GLl9dfESXSA::RwRG-N8PRoiwKdtnAk8Jtw` |
| List Self Mailers | GET | `/print-mail/v1/self_mailers` | `conn_mod_def::GLl9de18WWg::LkvC7O7sRZicWVGrZ-HHRA` |
| Cancel a Self Mailer | DELETE | `/print-mail/v1/self_mailers/{{id}}` | `conn_mod_def::GLl9dejJ5Ug::1Ix5uiXtQ0udPIUtyNM1Mw` |
| Create Self Mailers | POST | `/print-mail/v1/self_mailers` | `conn_mod_def::GLl9deqFAsg::-u__rqFGRauNeYkB6fJyuA` |
| Progressions Using Self Mailers | POST | `/print-mail/v1/self_mailers/{{id}}/progressions` | `conn_mod_def::GLl9dnOVtdA::ARx8jgQhTUGDE8zYQjazjA` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template by ID | GET | `/print-mail/v1/templates/{{id}}` | `conn_mod_def::GLl9duPJa1g::lafb0KB1Styf8JX28tCM2g` |
| List Templates | GET | `/print-mail/v1/templates` | `conn_mod_def::GLl9dtr2M_g::yzLptQc7TPmDpn8nJVumXA` |
| Create Template | POST | `/print-mail/v1/templates` | `conn_mod_def::GLl9dkwT9Lg::ufTfGsRtQZ-dhfL9Qy5C-A` |
| Delete Template | DELETE | `/print-mail/v1/templates/{{id}}` | `conn_mod_def::GLl9dsyv5BA::vbPhfp3BTZiqC8jSeXSprQ` |
| Update Template | POST | `/print-mail/v1/templates/{{id}}` | `conn_mod_def::GLl9dsy5Lvg::oUQZu5ebQRu8YrHpR07jdA` |

### Trackers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tracker | GET | `/print-mail/v1/trackers/{{id}}` | `conn_mod_def::GLl9d1esnCA::SazPfc9oQUyF1ZzUD_2pQA` |
| List Trackers | GET | `/print-mail/v1/trackers` | `conn_mod_def::GLl9d1XZuLA::fe9SQc--QCi_Csb3g4aIaQ` |
| Create Tracker | POST | `/print-mail/v1/trackers` | `conn_mod_def::GLl9duhHdYA::pRNfw7GmRleFvUiayIl0vw` |
| Delete Tracker | DELETE | `/print-mail/v1/trackers/{{id}}` | `conn_mod_def::GLl9d1VlzOg::xxLEQTINQ4KbORuhpPXi-A` |
| Update Tracker | POST | `/print-mail/v1/trackers/{{id}}` | `conn_mod_def::GLl9d1sQygg::A6NZZw-uRdagnnTnm1n2mg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook by ID | GET | `/print-mail/v1/webhooks/{{id}}` | `conn_mod_def::GLl9d7dHCUA::OGRGmQ7vReeLjSB9QxWIDA` |
| List Webhooks | GET | `/print-mail/v1/webhooks` | `conn_mod_def::GLl9d7dfa3A::qVzrP4C3TuiY96zmwx7CjQ` |
| Create Webhook | POST | `/print-mail/v1/webhooks` | `conn_mod_def::GLl9d7LN6Og::mszj_aXeRze9Ilc9EBcI3w` |
| Delete Webhook | DELETE | `/print-mail/v1/webhooks/{{id}}` | `conn_mod_def::GLl9d7qSGXg::Vs6xwnhiTWykndw3nDIEkg` |
| Update a Webhook | POST | `/print-mail/v1/webhooks/{{id}}` | `conn_mod_def::GLl9eFh16iA::ReDnh-9BQyqQ-rP3klXOqg` |

### BankAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bank Account by ID | GET | `/print-mail/v1/bank_accounts/{{id}}` | `conn_mod_def::GLl9ceBQa0g::J52DnSRhTI20Zohpqm-W9A` |
| List Bank Accounts | GET | `/print-mail/v1/bank_accounts` | `conn_mod_def::GLl9cd0Knrg::_RcxkQa4RXqkkkcAJtzatg` |
| Create Canadian Bank Account | POST | `/print-mail/v1/bank_accounts` | `conn_mod_def::GLl9ce8UR9A::azYF1r9USzi0SKqsDFWi2Q` |
| Delete Bank Account | DELETE | `/print-mail/v1/bank_accounts/{{id}}` | `conn_mod_def::GLl9cdwtBEA::NgIjbPr4Qeu3FRjMBnuwoA` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact | GET | `/print-mail/v1/contacts/{{id}}` | `conn_mod_def::GLl9c0AvF-g::oX8IXM-qTsGe4GgpYF2jFQ` |
| List Contacts | GET | `/print-mail/v1/contacts` | `conn_mod_def::GLl9c14cdIA::7i9r9NFIT_6Ntd7tV3XFHg` |
| Create Contact | POST | `/print-mail/v1/contacts` | `conn_mod_def::GLl9czN7I-g::W6YLtRbwQ9uLIxGDvbh4Cw` |
| Delete Contact | DELETE | `/print-mail/v1/contacts/{{id}}` | `conn_mod_def::GLl9czhUgPg::4A0VPsciTPe8vlVYoTyXnA` |

### ReturnEnvelopes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Return Envelope | GET | `/print-mail/v1/return_envelopes/{{id}}` | `conn_mod_def::GLl9dWiBeNg::LG3NBcc7SGOoVIBMgRnvdQ` |
| List Return Envelopes | GET | `/print-mail/v1/return_envelopes` | `conn_mod_def::GLl9dfFs-HA::TxYqs08mR8uZa84ihLxdeA` |
| Create Return Envelope | POST | `/print-mail/v1/return_envelopes` | `conn_mod_def::GLl9dWWED4g::NpjXAV45T32qKMnVlN3euA` |

### TemplateEditorSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sessions | GET | `/print-mail/v1/template_editor_sessions` | `conn_mod_def::GLl9dmq328g::0nGiAJJkSvKhQ5Rfsz-RXg` |
| Create Template Editor Session | POST | `/print-mail/v1/template_editor_sessions` | `conn_mod_def::GLl9dm4eocA::7A1S0uUVSVGLOQbgqXjJog` |
| Delete a Template Editor Session | DELETE | `/print-mail/v1/template_editor_sessions/{{id}}` | `conn_mod_def::GLl9dm16MBg::GSuZVJxESMCQZB7hjR5fTA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| List Events | GET | `/print-mail/v1/events` | `conn_mod_def::GLl9c_kqp1g::3A2H8QtiTbOnC5DQeo-Neg` |

### TrackerVisits

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tracker Visits | GET | `/print-mail/v1/trackers/{{id}}/visits` | `conn_mod_def::GLl9d1izr8g::qSsO4zz_RFmBZYJiLcx9fQ` |

### WebhookInvocations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Invocations for a Webhook | GET | `/print-mail/v1/webhooks/{{id}}/invocations` | `conn_mod_def::GLl9d_V6EiA::JScpnBObTfefsliIsTmTtw` |

## When a call fails

The error comes from PostGrid Print & Mail, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/post-grid-print-mail

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
