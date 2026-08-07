---
name: mailcoach
description: Mailcoach is an email marketing platform that provides newsletters, drip campaigns, transactional email, marketing automations, and a developer-friendly API, allowing creators, startups, developers, and businesses to grow audiences, automate outreach, and manage email communication from one system. Read and write Mailcoach data through One: subscribers, subscriberimports, campaigns, emaillists, templates, tags and more, 73 actions with real parameter documentation. Use whenever the user asks to look something up in Mailcoach, create or update a record there, or build code against the Mailcoach API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mailcoach
  generated-from: one-knowledge-base
---

# Mailcoach through One

Mailcoach is an email marketing platform that provides newsletters, drip campaigns, transactional email, marketing automations, and a developer-friendly API, allowing creators, startups, developers, and businesses to grow audiences, automate outreach, and manage email communication from one system.

One exposes Mailcoach through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mailcoach` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mailcoach is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mailcoach account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscriber | GET | `/api/subscribers/{{subscriber}}` | `conn_mod_def::GMK4O--KNHg::v66CFnd5Qki0QptVJXOhhw` |
| List Subscribers for an Email List | GET | `/api/email-lists/{{emailList}}/subscribers` | `conn_mod_def::GMK4PB0Ya9A::IymNGdPdSfuvAuArurU-LQ` |
| Add Tags to a Subscriber | POST | `/api/subscribers/{{subscriber}}/tags` | `conn_mod_def::GMK4O4yodCg::tJZd-4BBTqu-E0LvnN-0xA` |
| Confirm a Subscriber | POST | `/api/subscribers/{{subscriber}}/confirm` | `conn_mod_def::GMK4O4wauug::80EDVh3wRsiC42AwF4qAng` |
| Confirm a Subscriber by List | POST | `/api/email-lists/{{emailList}}/confirm` | `conn_mod_def::GMK4PBOtl_A::zcmkxrd6R_GpYSyLR2HOaQ` |
| Delete a Subscriber | DELETE | `/api/subscribers/{{subscriber}}` | `conn_mod_def::GMK4O-I8dWA::SFGXSem5Q7eRijCoNgxogg` |
| Remove Tags from a Subscriber | DELETE | `/api/subscribers/{{subscriber}}/tags` | `conn_mod_def::GMK4O_jMz3g::WDRliBmARS6ceZjwXN3wOA` |
| Resend Confirmation Mail for a Subscriber | POST | `/api/subscribers/{{subscriber}}/resend-confirmation` | `conn_mod_def::GMK4PIl8Dlg::-nm_d76RTACby15z0wH7zg` |
| Resubscribe a Subscriber | POST | `/api/subscribers/{{subscriber}}/resubscribe` | `conn_mod_def::GMK4PIebY5A::uy8DG_fRSzCaDEaydGAmqQ` |
| Resubscribe a Subscriber by Email List | POST | `/api/email-lists/{{emailList}}/resubscribe` | `conn_mod_def::GMK4PI1exsg::zktctA-GTNqd50DBsqgtRg` |
| Subscribe an Email Address to an Email List | POST | `/api/email-lists/{{emailList}}/subscribers` | `conn_mod_def::GMK4PIUyWqA::Zfv3VWwRSbGK2ygiYHYLAg` |
| Unsubscribe a Subscriber | POST | `/api/subscribers/{{subscriber}}/unsubscribe` | `conn_mod_def::GMK4PQGWymg::6ZtHru7FTiG-aCcS4lBZqw` |

2 more Subscribers actions are available through search.

### SubscriberImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscriber Import | GET | `/api/subscriber-imports/{{subscriberImport}}` | `conn_mod_def::GMK4OvvAN3A::79Hv8q52Tl69vYvlZo98hg` |
| List Subscriber Imports | GET | `/api/subscriber-imports` | `conn_mod_def::GMK4O4SmSGg::VWRC9d1MSgSyE1BhT6339w` |
| Append CSV Data to a Subscriber Import | POST | `/api/subscriber-imports/{{subscriberImport}}/append` | `conn_mod_def::GMK4OxGqpPg::YumcEvWeSn2oOZvPCoSEjA` |
| Create a Subscriber Import | POST | `/api/subscriber-imports` | `conn_mod_def::GMK4Oxd5vEg::2ALOmzWsQp2V9RHc6nsu1Q` |
| Delete a Subscriber Import | DELETE | `/api/subscriber-imports/{{subscriberImport}}` | `conn_mod_def::GMK4OyAUxNg::n1xV71UMSUK9yoJrr_MOcg` |
| Start a Subscriber Import | POST | `/api/subscriber-imports/{{subscriberImport}}/start` | `conn_mod_def::GMK4O4l6H2g::5d47Y2TjQrecIXUmvQ7Rig` |
| Update a Subscriber Import | PUT | `/api/subscriber-imports/{{subscriberImport}}` | `conn_mod_def::GMK4O5SWzbA::ktU8G-6FRNi7LZWaWJLKUg` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Campaigns | GET | `/api/campaigns` | `conn_mod_def::GMK4OOtHDBg::2nxVfFm0STCkC8N-0w3Q4g` |
| Create a Campaign | POST | `/api/campaigns` | `conn_mod_def::GMK4ONewNzg::uyb5uXhwRKCRzXsOIAQDbg` |
| Delete a Campaign | DELETE | `/api/campaigns/{{campaign}}` | `conn_mod_def::GMK4OPMR57A::LUxZHZy7QCWYHMQIlcLkSw` |
| Send a Campaign | POST | `/api/campaigns/{{campaign}}/send` | `conn_mod_def::GMK4ONetf-g::rsYwDU57TJS1rqb_JOGiQA` |
| Send Test Email for a Campaign | POST | `/api/campaigns/{{campaign}}/send-test` | `conn_mod_def::GMK4OVhlPHA::sjlZIkElSlOB7JTle7bIIg` |
| Update a Campaign | PUT | `/api/campaigns/{{campaign}}` | `conn_mod_def::GMK4OVGiP6A::uTeDxcOIRkyEg8O0Pi5Q9w` |

### EmailLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email List | GET | `/api/email-lists/{{emailList}}` | `conn_mod_def::GMK4OgsdwPg::tWNCUXzwTyWhn_OycpdoGw` |
| List Email Lists | GET | `/api/email-lists` | `conn_mod_def::GMK4OhNoyRA::B5HTxQ_fTEmUEbWQfvqIwg` |
| Create an Email List | POST | `/api/email-lists` | `conn_mod_def::GMK4OZgGsgA::0b7OtDArTuq800kTI3XRww` |
| Delete an Email List | DELETE | `/api/email-lists/{{emailList}}` | `conn_mod_def::GMK4OVDwUNg::Gn3KLrIpQTuu-Z_FIJBOCQ` |
| Resend Confirmation Mail by List | POST | `/api/email-lists/{{emailList}}/resend-confirmation` | `conn_mod_def::GMK4PJWBYzg::fmutZ5g0TzOVi35X36Fkug` |
| Update an Email List | PUT | `/api/email-lists/{{emailList}}` | `conn_mod_def::GMK4OgsGKeg::z7IAUxxDRkSHrpe-hW_VoQ` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template | GET | `/api/templates/{{template}}` | `conn_mod_def::GMK4Pe3PtNA::VgWBoTr4RY-jmHEwB7JAzw` |
| List Templates | GET | `/api/templates` | `conn_mod_def::GMK4PnF_QRA::DlilUYwvR0-WwSiBPe0U5A` |
| Create a Template | POST | `/api/templates` | `conn_mod_def::GMK4PflWolA::1KwsUH9uS7KM9wGCFJMQyg` |
| Delete a Template | DELETE | `/api/templates/{{template}}` | `conn_mod_def::GMK4Pewfj-g::fCHhQ0uqTaqqvlfjD-3eYw` |
| Update a Template | PUT | `/api/templates/{{template}}` | `conn_mod_def::GMK4Pmh6Xtg::aPo2ELChS0CWLRsa-ACniA` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag for an Email List | GET | `/api/email-lists/{{emailList}}/tags/{{tag}}` | `conn_mod_def::GMK4PXcqrLg::G1pom5n6R6uQax0G3_e2VA` |
| List Tags for an Email List | GET | `/api/email-lists/{{emailList}}/tags` | `conn_mod_def::GMK4Pfw8bMA::VF8zrADkSgSDzYSIiJLQCg` |
| Create a Tag for an Email List | POST | `/api/email-lists/{{emailList}}/tags` | `conn_mod_def::GMK4PYfEpOg::X5oQngvpRl-d25VoHNVV1g` |
| Delete a Tag from an Email List | DELETE | `/api/email-lists/{{emailList}}/tags/{{tag}}` | `conn_mod_def::GMK4PXVDehA::TrariNjXSQKU-0jV-W_PxA` |
| Update a Tag for an Email List | PUT | `/api/email-lists/{{emailList}}/tags/{{tag}}` | `conn_mod_def::GMK4Pfr8tRg::dzmpRAL3QD64XgrI6U4RIw` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Segment from an Email List | GET | `/api/email-lists/{{emailList}}/segments/{{segment}}` | `conn_mod_def::GMK4OqUGa0g::rd9vPkwqR9KXp7hWp6R8Wg` |
| List Segments for an Email List | GET | `/api/email-lists/{{emailList}}/segments` | `conn_mod_def::GMK4OoSY3_g::ZY87pOc_SBy45xJKy_L_fw` |
| Create a Segment for an Email List | POST | `/api/email-lists/{{emailList}}/segments` | `conn_mod_def::GMK4OgIek7A::SGxBqVaxRzmySJghM7VpDw` |
| Delete a Segment from an Email List | DELETE | `/api/email-lists/{{emailList}}/segments/{{segment}}` | `conn_mod_def::GMK4Of0FmXg::i6_g4cXtRY-8Pg7OG9QLmQ` |
| Update a Segment for an Email List | PUT | `/api/email-lists/{{emailList}}/segments/{{segment}}` | `conn_mod_def::GMK4OoU50xg::6-HkKa0uT42kSkcOA1H_ug` |

### Suppressions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Suppression | GET | `/api/suppressions/{{suppression}}` | `conn_mod_def::GMK4PQGiYyg::RAncs6-VSXCUfCvjPZezbw` |
| List Suppressions | GET | `/api/suppressions` | `conn_mod_def::GMK4PRewdbA::KWQElC0lT5mSY84XUsR40A` |
| Remove a Suppression | DELETE | `/api/suppressions/{{suppression}}` | `conn_mod_def::GMK4PXF4TPg::DNgioDfpR-qKR2cSzmoqwQ` |
| Suppress an Email Address | POST | `/api/suppressions` | `conn_mod_def::GMK4PYQYnHg::FUoCHLW4SwObz5TqjlHEiA` |

### AutomationMails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Automation Mail | GET | `/api/automation-mails/{{automationMail}}` | `conn_mod_def::GMK4N_qpWGA::uy4ZQmppQW-VGsRdoicQQg` |
| List Automation Mails | GET | `/api/automation-mails` | `conn_mod_def::GMK4N_-s0rA::WqVpGrymTMq4k-n0NasUeQ` |
| Create an Automation Mail | POST | `/api/automation-mails` | `conn_mod_def::GMK4N_qZAMg::2gurSjlIR9SRfmA0gPsmeg` |

### TransactionalMails

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transactional Mail Log Items | GET | `/api/transactional-mails` | `conn_mod_def::GMK4Pnf8PAA::Tj2BAekQR92-Bd-SQc3aww` |
| Resend a Transactional Mail | POST | `/api/transactional-mails/{{transactionalMail}}/resend` | `conn_mod_def::GMK4Pthuphg::vn7BpvZNQ3SwaU80ixHB2A` |
| Send Transactional Mail | POST | `/api/transactional-mails/send` | `conn_mod_def::GMK4PtxXgNg::OvHUGrh8St-9I-5rsIXjSg` |

### Sends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Send | GET | `/api/sends/{{send}}` | `conn_mod_def::GMK4Om0KpbA::l-rzTiXVTeaZXyJEpgEn2g` |
| List Sends | GET | `/api/sends` | `conn_mod_def::GMK4Ox18zEg::zAknIqR3TZCyYBcdl-n5BQ` |
| Delete a Send | DELETE | `/api/sends/{{send}}` | `conn_mod_def::GMK4Om6EAyg::IDOtahAPQhiktsNZIJ2R6g` |

### AutomationMail

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Automation Mail | DELETE | `/api/automation-mails/{{automationMail}}` | `conn_mod_def::GMK4N_qNg2A::0iXxlT9DSIaqcqfztARBwQ` |
| Update an Automation Mail | PUT | `/api/automation-mails/{{automationMail}}` | `conn_mod_def::GMK4N_30Khg::7WU20atDTri-JsiBjdbWvw` |

### TransactionalMailTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transactional Mail Template | GET | `/api/transactional-mails/templates/{{transactionalMailTemplate}}` | `conn_mod_def::GMK4PmCvFeA::3Yii2rZgQNWB1i6y9QOOAg` |
| List Transactional Mail Templates | GET | `/api/transactional-mails/templates` | `conn_mod_def::GMK4PuUJBzg::0S8NgzKkS7qH5FTjmt5fmQ` |

### TransactionalMailLogItem

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transactional Mail Log Item | GET | `/api/transactional-mails/{{transactionalMail}}` | `conn_mod_def::GMK4PmDJqpA::AMD7FpPRQ1qBpLMAYz4ykg` |

### Automations

| Action | Method | Path | Action id |
|---|---|---|---|
| Trigger an Automation via Webhook | POST | `/api/automations/{{automation}}/trigger` | `conn_mod_def::GMK4OGQqm3g::AKOAUPg0Tc2w7_iXcVkkRw` |

### CampaignLinkClicks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Campaign Link Clicks for a Campaign | GET | `/api/campaigns/{{campaign}}/clicks` | `conn_mod_def::GMK4OGx2flA::W86lBRJ5TzepN-Cse7iBQw` |

### CampaignUnsubscribes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Campaign Unsubscribes | GET | `/api/campaigns/{{campaign}}/unsubscribes` | `conn_mod_def::GMK4OG6jNdg::zZyVZclfToWvAG1Wi10SAw` |

### CampaignBounces

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Campaign's Bounces | GET | `/api/campaigns/{{campaign}}/bounces` | `conn_mod_def::GMK4OHJxWMA::3YhZ0B6BRbOQE65wEg49lw` |

### CampaignOpens

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Campaign's Opens | GET | `/api/campaigns/{{campaign}}/opens` | `conn_mod_def::GMK4OHnw5wA::ijrciGusT6Cpyfczm9FZsQ` |

### Campaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign | GET | `/api/campaigns/{{campaign}}` | `conn_mod_def::GMK4ON8lEzA::MXcT-Zz_SZ6S0DOvAUJCKA` |

### TrackedLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tracked Link | GET | `/api/links/{{link}}` | `conn_mod_def::GMK4OVLm0Xg::00i8deOfTNyFLKkkTn72AQ` |

This lists 71 of 73 actions. For anything not here, call `search_one_platform_actions` with platform `mailcoach`. The full catalog is at https://www.withone.ai/knowledge/mailcoach.

## When a call fails

The error comes from Mailcoach, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mailcoach

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
