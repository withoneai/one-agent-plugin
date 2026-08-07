---
name: send-fox
description: SendFox is an email marketing platform that enables creators and small businesses to manage subscriber lists, build automated email sequences, and send newsletters, allowing teams to run audience engagement campaigns through simple tools and integrations. Read and write SendFox data through One: contacts, campaigns, automations, forms, contactfields, domains and more, 48 actions with real parameter documentation. Use whenever the user asks to look something up in SendFox, create or update a record there, or build code against the SendFox API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: send-fox
  generated-from: one-knowledge-base
---

# SendFox through One

SendFox is an email marketing platform that enables creators and small businesses to manage subscriber lists, build automated email sequences, and send newsletters, allowing teams to run audience engagement campaigns through simple tools and integrations.

One exposes SendFox through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `send-fox` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SendFox is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SendFox account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/contacts/{{id}}` | `conn_mod_def::GMbegkQwhrA::BwkRcdWaTdy5FdMQ3lluGw` |
| Get Contact Activity | GET | `/contacts/{{id}}/activity` | `conn_mod_def::GMbegkDlXwg::wodCHqSaR-6UBnC8Dqgiag` |
| List Contacts | GET | `/contacts` | `conn_mod_def::GMbegsqW6dg::a2kaHa7rQj6T7PupvxelTg` |
| List Contacts in a List | GET | `/lists/{{listId}}/contacts` | `conn_mod_def::GMbehJ1FX1g::D8nPf11lSAKtcvin6aQvBg` |
| List Unsubscribed Contacts | GET | `/contacts/unsubscribed` | `conn_mod_def::GMbegtbFqEg::g0cZfgeLSlOMzCpdycgBzg` |
| Batch Import Contacts | POST | `/contacts/batch` | `conn_mod_def::GMbegkQ5MXA::w8fCK9UsR3qvJo_Vi41fHw` |
| Create a Contact | POST | `/contacts` | `conn_mod_def::GMbegkD3TOA::9LOeiTyNSzOfRwyYYk2HBg` |
| Delete a Contact | DELETE | `/contacts/{{id}}` | `conn_mod_def::GMbeglzmBtA::uQQUAbWYRkGtebiAWMqKOg` |
| Unsubscribe a Contact by Email | PATCH | `/unsubscribe` | `conn_mod_def::GMbegvXVVTA::tZgYGFXrQ9y4AA8Zvjmyxw` |
| Update a Contact | PATCH | `/contacts/{{id}}` | `conn_mod_def::GMbegtCyIXA::2r9fEZ-EQqayZiDNjpqu_Q` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign | GET | `/campaigns/{{id}}` | `conn_mod_def::GMbegPUo9pg::09DF3SpCQeGOge8mfEoSPw` |
| List Campaigns | GET | `/campaigns` | `conn_mod_def::GMbegQEsIMg::uoIVxI8URK2V1sIJCQ6uNg` |
| Create a Campaign | POST | `/campaigns` | `conn_mod_def::GMbegCAGbsg::SUpzyPPQTee5X4dOrm11NA` |
| Delete a Campaign Draft | DELETE | `/campaigns/{{id}}` | `conn_mod_def::GMbegHVvQVA::LLN-KevsSa2D4VXQ4SxZbg` |
| Send a Campaign | POST | `/campaigns/{{id}}/send` | `conn_mod_def::GMbegPVI4ng::Ej-8RmvLQkCPkhlu3G6tAw` |
| Update a Draft Campaign | PATCH | `/campaigns/{{id}}` | `conn_mod_def::GMbegPVCvEA::l6N0ExNZSBymoyeJc2Tjag` |

### Automations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Automation | GET | `/automations/{{id}}` | `conn_mod_def::GMbef5S8eUg::rKbFGZa7QN2HyvMX6RYxGw` |
| List Automations | GET | `/automations` | `conn_mod_def::GMbef41GHoA::iXeKqAC7SxKg7FqLO5p1KQ` |
| Create an Automation | POST | `/automations` | `conn_mod_def::GMbef5S4GDA::uePIT-3UScGfDJ4mRTS0GQ` |
| Delete an Automation | DELETE | `/automations/{{id}}` | `conn_mod_def::GMbef6vzlsg::OCVWhD_xShiGr7-AWB61RQ` |
| Update an Automation | PATCH | `/automations/{{id}}` | `conn_mod_def::GMbegDiSjSg::mQz2BV3rR8WGaD0ZmQTCYg` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form | GET | `/forms/{{id}}` | `conn_mod_def::GMbeg9eSq4A::G5aHcrlSR3y-p44NVv3joA` |
| List Forms | GET | `/forms` | `conn_mod_def::GMbeg-NaVzg::YtnJABhqTMunTL7jrtwuNw` |
| Create a Form | POST | `/forms` | `conn_mod_def::GMbeg10E_1g::quYnifeER_S4pwT8K6Iu4Q` |
| Delete a Form | DELETE | `/forms/{{id}}` | `conn_mod_def::GMbeg9eI8zg::DXAznhN5QUOFmLNWHiY37A` |
| Update a Form | PATCH | `/forms/{{id}}` | `conn_mod_def::GMbeg9eXICA::e3a2QUkCTmCcRABZNOuAUw` |

### ContactFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Field by ID | GET | `/contact-fields/{{id}}` | `conn_mod_def::GMbegcRgW2g::nEUhqLI7RUKmTRxI-apImg` |
| List User Contact Fields | GET | `/contact-fields` | `conn_mod_def::GMbegY-U3pA::P-UjgvJtTPSbetoLksVMeQ` |
| Create a Contact Field | POST | `/contact-fields` | `conn_mod_def::GMbegXUpE1A::xheKElZIScWQlF2YnmS3oQ` |
| Delete a Contact Field | DELETE | `/contact-fields/{{id}}` | `conn_mod_def::GMbegY-Z1Bg::vuaEBkwRQmKS5Bb5zGzymg` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain with DNS Records | GET | `/domains/{{id}}` | `conn_mod_def::GMbeg2Mwa2A::leE3DSofT8a5DFSnrxYerQ` |
| Add a Sender Domain | POST | `/domains` | `conn_mod_def::GMbegsRBNZg::quYQ529TRMSM-Ucj0KMuRA` |
| Delete a Sender Domain | DELETE | `/domains/{{id}}` | `conn_mod_def::GMbeg1dDMmA::3wFBjY3lTPuX7-sLAfWGnw` |
| Validate a Domain's DNS Records | POST | `/domains/{{id}}/validate` | `conn_mod_def::GMbeg2mLneA::5QtGTHx5QGeJrdKZxPM-lQ` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Lists | GET | `/lists` | `conn_mod_def::GMbehI74bDg::RF0HiVaXRFiGbJt8h6IFxg` |
| Add a Contact to a List | POST | `/lists/{{listId}}/contacts` | `conn_mod_def::GMbehCxyi3A::_bTdRzoKTAKd3bpBlK64fA` |
| Create a Contact List | POST | `/lists` | `conn_mod_def::GMbehI61Iag::5m1vdLlwSves5P4JX-ZWLA` |
| Remove a Contact from a List | DELETE | `/lists/{{listId}}/contacts/{{contactId}}` | `conn_mod_def::GMbehUsknkA::pW2wLP6DRBCZKHYMW1V6RA` |

### AutomationEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Add an Email to an Automation | POST | `/automations/{{id}}/emails` | `conn_mod_def::GMbef1zmCkg::K_nOxL3vTuWCg4yP0k5c0Q` |
| Remove an Email from an Automation | DELETE | `/automation-emails/{{id}}` | `conn_mod_def::GMbegBlpwpA::12eESajCSa2yodmt7ciDoA` |
| Update an Automation Email | PATCH | `/automation-emails/{{id}}` | `conn_mod_def::GMbegCAYf8g::-rVNxVq-T0yCfAzMHS7sJQ` |

### ContactLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact List | GET | `/lists/{{id}}` | `conn_mod_def::GMbehI8ApbA::S3H6pbw_ROWAMwaRzWTsJQ` |
| Delete a Contact List | DELETE | `/lists/{{id}}` | `conn_mod_def::GMbehMrmNFA::W9FOQGqMSpySf341M8hYtA` |
| Update a Contact List | PATCH | `/lists/{{id}}` | `conn_mod_def::GMbehVEvhhA::fG9IjqqlQdyhWvtS792cGg` |

### CampaignPerformanceStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign Performance Statistics | GET | `/campaigns/{{id}}/stats` | `conn_mod_def::GMbegPrQMsg::J-nHzPrKTnKJaf8Df5mLoA` |

### ContactField

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Contact Field | PATCH | `/contact-fields/{{id}}` | `conn_mod_def::GMbegYGAj3A::cd0PIBwsSAiP3LXBbjKcKA` |

### SenderDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sender Domains | GET | `/domains` | `conn_mod_def::GMbeg1rnihA::C1cLoo6TRImjBTwKrBBY6Q` |

### UserProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Signed-in User Profile | GET | `/me` | `conn_mod_def::GMbehTLR32A::6yHbw2MXQwuTZj5cqWGDKw` |

## When a call fails

The error comes from SendFox, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/send-fox

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
