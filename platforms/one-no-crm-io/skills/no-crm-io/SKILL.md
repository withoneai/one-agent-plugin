---
name: no-crm-io
description: noCRM.io is a sales lead management platform that helps sales teams capture, qualify, and track leads through customizable pipelines, enabling users to manage prospecting activities, follow-ups, and conversions without the complexity of a traditional customer relationship management system. Read and write NoCRM.io data through One: leads, teams, users, comments, webhooks, auth and more, 82 actions with real parameter documentation. Use whenever the user asks to look something up in NoCRM.io, create or update a record there, or build code against the NoCRM.io API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: no-crm-io
  generated-from: one-knowledge-base
---

# NoCRM.io through One

noCRM.io is a sales lead management platform that helps sales teams capture, qualify, and track leads through customizable pipelines, enabling users to manage prospecting activities, follow-ups, and conversions without the complexity of a traditional customer relationship management system.

One exposes NoCRM.io through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `no-crm-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm NoCRM.io is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real NoCRM.io account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead's Business Card | GET | `/api/v2/leads/{{id}}/business_card` | `conn_mod_def::GMcTMNLnVGs::8yXcSTUJQ5OmTyDuEKc-mw` |
| List a Lead's Duplicates | GET | `/api/v2/leads/{{id}}/duplicates` | `conn_mod_def::GMcTMNlLYWU::h-yJSViTSbebHr_85wmhBw` |
| List Leads | GET | `/api/v2/leads` | `conn_mod_def::GMcTMEicYRY::hyQcVN49SKGBgb8u0o2_tA` |
| List Unassigned Leads | GET | `/api/v2/leads/unassigned` | `conn_mod_def::GMcTMYZoXbA::iUs-0Ob-TaCP03CAqKHt3A` |
| Retrieve a Lead | GET | `/api/v2/leads/{{id}}` | `conn_mod_def::GMcTMCZOvqs::5YI7NJw4SAu_wMZYKJkvrg` |
| Add to Client Using Leads | POST | `/api/v2/leads/{{id}}/add_to_client` | `conn_mod_def::GMcTMgV71KU::ZS4SGU_ISGOd5yfP4ocjsQ` |
| Assign a Lead | POST | `/api/v2/leads/{{id}}/assign` | `conn_mod_def::GMcTMhJXGGw::otBp1PmYTIusdU9SU8TL7w` |
| Create a Call on a Lead | POST | `/api/v2/leads/{{id}}/call` | `conn_mod_def::GMcTMhG36NA::_iUQyXrCTh2qthVEZCKUTA` |
| Create a Lead | POST | `/api/v2/leads` | `conn_mod_def::GMcTMPXk5Rc::orbZ1jDUSzSYkfy6MNFhNQ` |
| Create Lead from a Prospect in a Spreadsheet | POST | `/api/v2/spreadsheets/{{spreadsheetId}}/rows/{{id}}/create_lead` | `conn_mod_def::GMcTNmdvgOY::2D645OJQQciYslA8O8nV5w` |
| Delete a Lead | DELETE | `/api/v2/leads/{{id}}` | `conn_mod_def::GMcTLwE81pg::D2A0lWw8SbOYr7rMvbLbvg` |
| Delete Multiple Leads | DELETE | `/api/v2/leads/delete_multiple` | `conn_mod_def::GMcTLw_P9Pw::IIl5nF6ITn6n13prSw710g` |

3 more Leads actions are available through search.

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Teams | GET | `/api/v2/teams` | `conn_mod_def::GMcTOOpWSkA::C4Cd2QDWRSav3lMAthHimg` |
| Retrieve a Team | GET | `/api/v2/teams/{{id}}` | `conn_mod_def::GMcTONfVZBw::DLJPJWn-RkCezxWlA_WKZQ` |
| Add Member Using Teams | POST | `/api/v2/teams/{{id}}/add_member` | `conn_mod_def::GMcTOPM1q14::bJ5udGjkTYu7Me62OpHY-w` |
| Create a Team | POST | `/api/v2/teams` | `conn_mod_def::GMcTOPSRKfM::Fz9WgB4uTLG88MrdHOyqAA` |
| Delete a Team | DELETE | `/api/v2/teams/{{id}}` | `conn_mod_def::GMcTNux0-TE::Ly8TwB-XR0K1uC7gAO6zng` |
| Remove Member Using Teams | DELETE | `/api/v2/teams/{{id}}/remove_member` | `conn_mod_def::GMcTOPd8g2g::DYgDvzBNSq-iHGWE1p-Xzg` |
| Update a Team | PUT | `/api/v2/teams/{{id}}` | `conn_mod_def::GMcTOYcNsfE::g5ymR5P7QtWDUGbg0P2Cug` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/api/v2/users` | `conn_mod_def::GMcTObXiGQw::qkUtOjppSrChG5q0iZPKHg` |
| Retrieve a User | GET | `/api/v2/users/{{id}}` | `conn_mod_def::GMcTOc1kcmI::_OI1X16sSmqYeCFQLFaOoA` |
| Send Activation Email for a User | GET | `/api/v2/users/{{id}}/send_activation_email` | `conn_mod_def::GMcTOXTiPzM::RaORnxRNTDWOWnFsqKGu3Q` |
| Create a User | POST | `/api/v2/users` | `conn_mod_def::GMcTOZLBoCQ::lQoMqgqHSMaWw8VzLp7X1g` |
| Disable a User | PUT | `/api/v2/users/{{id}}/disable` | `conn_mod_def::GMcTOniorvo::MxIz_KY7RgKm3d0iZ9L1XQ` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Comment on a Lead | POST | `/api/v2/leads/{{id}}/comments` | `conn_mod_def::GMcTMgVaLxo::G7uZbkWoQterojlkD_dSKg` |
| Create a Comment on a Prospect in a Spreadsheet | POST | `/api/v2/spreadsheets/{{spreadsheetId}}/rows/{{id}}/comments` | `conn_mod_def::GMcTNlOliE4::Q5m0cFNZTo-GSlMUHQIdbw` |
| Create a Comment on a Prospecting List | POST | `/api/v2/spreadsheets/{{id}}/comments` | `conn_mod_def::GMcTNVznnso::SpstVdqTTDGOd4XPIDf6dQ` |
| Delete a Comment on a Lead | DELETE | `/api/v2/leads/{{leadId}}/comments/{{id}}` | `conn_mod_def::GMcTLxEucxI::fAXh93P6TK2BX4Eo73I2NQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/api/v2/webhooks` | `conn_mod_def::GMcTOkhzpDM::LI1qhtNrR-u7czpvPRdUZg` |
| Activate a Webhook | PUT | `/api/v2/webhooks/{{id}}/activate` | `conn_mod_def::GMcTOx6HHJA::WcNxuMUQRFqaBelnDngS3Q` |
| Create a Webhook | POST | `/api/v2/webhooks` | `conn_mod_def::GMcTOwk89QQ::4wkCFKQ6QpydMaTIEF7ugw` |
| Disable a Webhook | DELETE | `/api/v2/webhooks/{{id}}` | `conn_mod_def::GMcTOl428wc::EDBqz4usQUinjasAlKdoAA` |

### Auth

| Action | Method | Path | Action id |
|---|---|---|---|
| Log As a User | GET | `/api/v2/auth/log_as` | `conn_mod_def::GMcTLDbwJUY::0z9ON6EMSBuFkIz_ikct-Q` |
| Login to noCRM | GET | `/api/v2/auth/login` | `conn_mod_def::GMcTLDjBwWc::E6Cz7hGqT_GogjKnTrDztg` |
| Logout | GET | `/api/v2/auth/logout` | `conn_mod_def::GMcTLC2Q0Ho::HdD9O4E8QHq64r1dyRMgUw` |

### ClientFolder

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Client Folder | GET | `/api/v2/clients/{{id}}` | `conn_mod_def::GMcTLXO7xO4::LAd5NdJgRxSAfQ7LLMW9SQ` |
| Create a Client Folder | POST | `/api/v2/clients` | `conn_mod_def::GMcTLlpvVgY::GLjGl8vzRPqrxbmy66aM-A` |
| Delete a Client Folder | DELETE | `/api/v2/clients/{{id}}` | `conn_mod_def::GMcTLZBMwW0::cxNVVrsLQUqMlGR6ZWrNUw` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve One Attachment for a Lead | GET | `/api/v2/leads/{{leadId}}/attachments/{{id}}` | `conn_mod_def::GMcTMFPyZRE::336pXefAQ0eXrcQabSaGyg` |
| Add an Attachment to a Lead | POST | `/api/v2/leads/{{id}}/attachments` | `conn_mod_def::GMcTMgFPo98::kmZ2ipcORwafnTiIQJPdbw` |
| Delete an Attachment for a Lead | DELETE | `/api/v2/leads/{{leadId}}/attachments/{{id}}` | `conn_mod_def::GMcTLwlm5r0::_EQHYvKzS9yjKR1x8mmoBQ` |

### ProspectingLists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Prospecting Lists | GET | `/api/v2/spreadsheets` | `conn_mod_def::GMcTNTeOgKo::iiFteQtfSFOAFX1IloE7xQ` |
| Assign a Prospecting List | POST | `/api/v2/spreadsheets/{{id}}/assign` | `conn_mod_def::GMcTNT22JKk::ogSOdReqSVGsZedFoGOkcg` |
| Update a Prospect in a Prospecting List | PUT | `/api/v2/spreadsheets/{{spreadsheetId}}/rows/{{id}}` | `conn_mod_def::GMcTNk4QIpA::GnuzWMA7SlG8GRD2jrQ-Ig` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fields | GET | `/api/v2/fields` | `conn_mod_def::GMcTLju7rVw::AfQFK8SLTAmto1keBdwNKA` |
| Create a Field | POST | `/api/v2/fields` | `conn_mod_def::GMcTLmlzF6k::fLxWR_a5TJmUyMvZgB3alQ` |

### PredefinedTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Predefined Tags | GET | `/api/v2/predefined_tags` | `conn_mod_def::GMcTNEdjkgg::FX-5D6sFT0eMuPVPSFBlBQ` |
| Create a Predefined Tag | POST | `/api/v2/predefined_tags` | `conn_mod_def::GMcTNHYb-UM::d5xqNeOrRsq7uLbRzTisig` |

### ProspectingList

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Prospecting List | GET | `/api/v2/spreadsheets/{{id}}` | `conn_mod_def::GMcTNcl3aP0::67uPW_FlTv2yNq4GEta--Q` |
| Create a Prospecting List | POST | `/api/v2/spreadsheets` | `conn_mod_def::GMcTNS3GpYA::QPmfNcu5RRarWJOXqRFo0Q` |

### Steps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Steps | GET | `/api/v2/steps` | `conn_mod_def::GMcTNwSPs-s::Y9UgKNd8R1ex_V4O_IKYaA` |
| Retrieve a Step | GET | `/api/v2/steps/{{id}}` | `conn_mod_def::GMcTOGj53Ow::4YeuG-OtRTqs10pXA-1Iqw` |

### WebhookEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Events | GET | `/api/v2/webhook_events` | `conn_mod_def::GMcTOlCLwuM::RIgnUiv8Ri-jer-IKKM4uQ` |
| Retrieve a Webhook Event | GET | `/api/v2/webhook_events/{{id}}` | `conn_mod_def::GMcTOl1C-W8::XjIsH7wxQgaxAywWVsAfyw` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Activities | GET | `/api/v2/activities` | `conn_mod_def::GMcTLC_4AJE::ctuhIh5CTPqcApdBzND_-A` |

### Ping

| Action | Method | Path | Action id |
|---|---|---|---|
| Ping the noCRM API | GET | `/api/v2/ping` | `conn_mod_def::GMcTLOn76ao::3rZb2tKrQzGDeeSwZOBojA` |

### Clients

| Action | Method | Path | Action id |
|---|---|---|---|
| List Client Folders | GET | `/api/v2/clients` | `conn_mod_def::GMcTLVyBNqc::XAF7MfIZTtyO3TqWi8Rw3w` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Categories | GET | `/api/v2/categories` | `conn_mod_def::GMcTLWEsz70::EHl261_QRZax0CiSlASePA` |

### Category

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Category | POST | `/api/v2/category` | `conn_mod_def::GMcTLWG04VM::gDIhqwQLSU-B2agjveuTcQ` |

### ClientFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Client Folder | PUT | `/api/v2/clients/{{id}}` | `conn_mod_def::GMcTLkLy1J8::mNSb2Q6yQHm48zdLKHggFg` |

### EmailSignatures

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Update a User Email Signature | POST | `/api/v2/email_signatures` | `conn_mod_def::GMcTLmh5tpU::feeMB_NXS76HPiOF0YtAEw` |

### LeadBusinessCard

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Lead's Business Card | DELETE | `/api/v2/leads/{{id}}/business_card` | `conn_mod_def::GMcTLxDqA8k::HU1KE1N1QsiLVzxQNoJi1A` |

### LeadAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Lead's Attachments | GET | `/api/v2/leads/{{id}}/attachments` | `conn_mod_def::GMcTMB-3CGY::VkDd9DQpS7OZuM9w_eC4fw` |

### ActionHistories

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Lead's Action Histories | GET | `/api/v2/leads/{{id}}/action_histories` | `conn_mod_def::GMcTMEa99Kk::dWHa2HAfQVyU63zRs4XmEQ` |

### LeadsComments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Lead's Comments | GET | `/api/v2/leads/{{id}}/comments` | `conn_mod_def::GMcTMO1_IOE::nnIAtZRBTguEINqEub9uIQ` |

### PartnerIntegration

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate a Partner Integration | POST | `/api/v2/partners/activate` | `conn_mod_def::GMcTMpq1wGs::BznlhWGlRm2Hu5xaczcATw` |

### LeadComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Lead Comment | PUT | `/api/v2/leads/{{leadId}}/comments/{{id}}` | `conn_mod_def::GMcTMquyJjM::0UEvsq92TB67zImbYCdYfg` |

### PartnerIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Revoke a Partner Integration Key | POST | `/api/v2/partners/revoke` | `conn_mod_def::GMcTM5Wpveg::zpRU1rIQTv6-vQ-kNylg1Q` |

### FollowUpTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Task for a Follow Up | PUT | `/api/v2/follow_ups/{{followUpId}}/tasks/{{taskId}}` | `conn_mod_def::GMcTM5tzAQ0::kkUPwBQkSgmnLP9FH6iv_g` |

### LeadsFollowUps

| Action | Method | Path | Action id |
|---|---|---|---|
| Create From Template Using Leads Follow Ups | POST | `/api/v2/leads/{{leadId}}/follow_ups/create_from_template` | `conn_mod_def::GMcTM6T40pU::scEnO2k8SPiRswSNx-5ADA` |

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pipelines | GET | `/api/v2/pipelines` | `conn_mod_def::GMcTM7rKh3o::mU1t0qjzQIOWGim6pU5GTQ` |

### FollowUps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Post-Sales Tasks | GET | `/api/v2/follow_ups` | `conn_mod_def::GMcTM9QUlYs::Bwc6CPhuTfuxYuKIgZ85GQ` |

### ProspectingListProspect

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Prospect in a Prospecting List | DELETE | `/api/v2/spreadsheets/{{spreadsheetId}}/rows/{{id}}` | `conn_mod_def::GMcTNGNns8M::wBJ6lokoT8S84VHdkhXaWg` |

### ProspectsCalledFrom

| Action | Method | Path | Action id |
|---|---|---|---|
| List Prospects Called From noCRM | GET | `/api/v2/rows/called_from` | `conn_mod_def::GMcTNGxBQc0::O3IlEPVgSlONmtvh76dgxw` |

### Rows

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Prospects by Email or Field | GET | `/api/v2/rows` | `conn_mod_def::GMcTNJjfzgc::MRI9rfj3RYyDCLFMl9ch2w` |

### Spreadsheets

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Rows Using Spreadsheets | POST | `/api/v2/spreadsheets/{{spreadsheetId}}/rows` | `conn_mod_def::GMcTNkvxL50::dR6ouYtDT8Gi0w7C1MKhXg` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Call on a Prospect | POST | `/api/v2/spreadsheets/{{spreadsheetId}}/rows/{{id}}/call` | `conn_mod_def::GMcTNlDruCg::tGp5r-i1Rk-veRBYieqchQ` |

### ProspectComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Prospect Comment | PUT | `/api/v2/spreadsheets/{{spreadsheetId}}/rows/{{prospectId}}/comments/{{id}}` | `conn_mod_def::GMcTNvu6MTQ::icZuppIhTXGs2zXrwXLbuA` |

### SpreadsheetsRows

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Fields Using Spreadsheets Rows for a Prospecting List | PUT | `/api/v2/spreadsheets/{{spreadsheetId}}/rows/{{id}}/update_fields` | `conn_mod_def::GMcTNwth2kE::dkxZkYunTxmlpG80LT-xig` |

This lists 79 of 82 actions. For anything not here, call `search_one_platform_actions` with platform `no-crm-io`. The full catalog is at https://www.withone.ai/knowledge/no-crm-io.

## When a call fails

The error comes from NoCRM.io, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/no-crm-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
