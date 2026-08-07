---
name: reply-io
description: Reply.io enables sales and marketing teams to automate and scale multichannel outreach by orchestrating personalized sequences via email, LinkedIn, SMS, calls, and WhatsApp. It incorporates AI-generated messages, integrates with CRMs and lead databases, automates follow-ups and meeting scheduling, and offers performance analytics to fuel lead generation and revenue growth. Read and write Reply.io data through One: people, webhooks, schedules, campaigns, customfields, campaignsteps and more, 75 actions with real parameter documentation. Use whenever the user asks to look something up in Reply.io, create or update a record there, or build code against the Reply.io API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: reply-io
  generated-from: one-knowledge-base
---

# Reply.io through One

Reply.io enables sales and marketing teams to automate and scale multichannel outreach by orchestrating personalized sequences via email, LinkedIn, SMS, calls, and WhatsApp. It incorporates AI-generated messages, integrates with CRMs and lead databases, automates follow-ups and meeting scheduling, and offers performance analytics to fuel lead generation and revenue growth.

One exposes Reply.io through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `reply-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Reply.io is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Reply.io account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contacts in a List (by List ID) | GET | `/v1/people/list/{{listId}}` | `conn_mod_def::GJ6N1e1LrM8::OXVdkROKRXaMLJX44wQFQA` |
| Get Contacts in a List (by List Name) | GET | `/people/list` | `conn_mod_def::GJ6N1wiksPM::5n2C7YYuTFe_ykeuDe1y9g` |
| List Contacts (People) | GET | `/people` | `conn_mod_def::GJ6N1TPuyaU::wpSt7_ZUTna3QKyQmMlqaQ` |
| Create or Update a Contact | POST | `/people` | `conn_mod_def::GJ6N07wC1rI::RIBLi74jRcCLfDJdaXzRrQ` |
| Delete a Contact | DELETE | `/v1/people/` | `conn_mod_def::GJ6N1EBWDUs::k496jgd2TVOD__5nTO_7KA` |
| Import Contacts (Schedules Embedded) | POST | `/v1/people/import/schedules-embedded` | `conn_mod_def::GJ6N2L9-Ds8::P0Sc5myKTM6WFhTw-NOaow` |
| Look Up a Prospect ID by Email or LinkedIn | POST | `/people/lookup` | `conn_mod_def::GJ6N2KNuIiE::XsNzVjqaTEK9Dw_6Gq9Rkw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Subscription by ID | GET | `/api/v2/webhooks/{{webhookId}}` | `conn_mod_def::GJ6N3H9DCto::nYe9iN6wSWWbUYxTzFme9Q` |
| List Webhook Subscriptions | GET | `/api/v2/webhooks` | `conn_mod_def::GJ6OJgj7xOk::0MdflAEBQkqMQStYS8Qn6w` |
| Add a Webhook Subscription | POST | `/api/v2/webhooks` | `conn_mod_def::GJ6N2rcMOFM::20QFFTiMRBq2086-oqFgCw` |
| Delete a Webhook Subscription | DELETE | `/api/v2/webhooks/{{webhookId}}` | `conn_mod_def::GJ6N22r1fyE::HYFdyMlpQ56Ynk94T2o--Q` |
| Test a Webhook by Event Type and URL | POST | `/api/v2/webhooks/test` | `conn_mod_def::GJ6N346SZbQ::mzTWpxBKSA6_uE9u7DesFA` |
| Test a Webhook Subscription by ID | POST | `/api/v2/webhooks/{{subsriptionId}}/test` | `conn_mod_def::GJ6N37fWWsQ::4nh9D9HwSYyNDqv5-fwP0Q` |
| Update a Webhook Subscription | PUT | `/api/v2/webhooks/{{webhookId}}` | `conn_mod_def::GJ6N330oIA8::eWwubKWaS0-G5Graed_91Q` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Schedule by ID | GET | `/v2/schedules/{{id}}` | `conn_mod_def::GJ6N3xAv1oo::6fIHAEwtQ9-Ie0qIDC1K0Q` |
| Get Default Campaign Schedule for the Authenticated User | GET | `/schedules/default` | `conn_mod_def::GJ6N1-J48jg::OOTWetZuQpOPkuLTIewDMA` |
| List All Campaign Schedules | GET | `/schedules` | `conn_mod_def::GJ6N2Cxw3Oo::O8rXqXr_SaSVbi5Vzyj3qQ` |
| Create Schedule | POST | `/schedules` | `conn_mod_def::GJ6N23ODocc::u6bdMOoTSSK8AraJ7NT16g` |
| Delete a Schedule by ID | DELETE | `/v2/schedules/{{id}}` | `conn_mod_def::GJ6N29ZAbIs::-YiPPggrQcyVouo96WEhZA` |
| Set a Schedule as Default by ID | POST | `/v2/schedules/{{id}}/set-default` | `conn_mod_def::GJ6N3sFQLA8::jWbHOUr_TMSSe-HBbZeQIg` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign Details by Name (or ID) | GET | `/campaigns` | `conn_mod_def::GJ6N1Wst0qU::mmHA4l8hTDGSAPvenfu9gA` |
| Archive a Campaign | POST | `/v2/campaigns/{{campaignId}}/archive` | `conn_mod_def::GJ6N2vPOWbY::QhbwLynyRzmALxIw7ORXTg` |
| Create Campaign (Custom Step Text) | POST | `/campaigns` | `conn_mod_def::GJ6N2213KJk::_Ftbs6XsTT-1OuCfor1Zzw` |
| Pause a Campaign | POST | `/campaigns/{{campaignId}}/pause` | `conn_mod_def::GJ6N3Q17VDs::IalbEeDGS7ysRTPnz4DkVg` |
| Start a Campaign | POST | `/v2/campaigns/{{campaignId}}/start` | `conn_mod_def::GJ6N3rckk4k::RCkLRF32SCSe9PYrpoN6aQ` |
| Update a Campaign’s Settings | PATCH | `/v2/campaigns/{{campaignId}}` | `conn_mod_def::GJ6N3417MHk::cgwYZDhwQIa2-iZAz4qzYw` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field by ID | GET | `/v1/custom-fields/{{id}}` | `conn_mod_def::GJ6N12jdSVg::0IK6gmjuRRmNvbZCtaqr0g` |
| List All Custom Fields | GET | `/custom-fields/all` | `conn_mod_def::GJ6N1vifZ_g::roPHskemTfOI_Kc_SLotvg` |
| Add a New Custom Field | POST | `/custom-fields` | `conn_mod_def::GJ6N04CfsfA::hsyHGMghSiuDTTteKDM2xQ` |
| Delete a Custom Field | DELETE | `/v1/custom-fields/{{id}}` | `conn_mod_def::GJ6N1GtbwDw::Na-dghyrSmigW9s12Q28KA` |
| Update a Custom Field | PUT | `/custom-fields/{{id}}` | `conn_mod_def::GJ6N2d0Y0n8::ghcuXsZKQa-B75peI_3Z3Q` |

### CampaignSteps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign’s Step by ID | GET | `/v2/campaigns/{{campaignId}}/steps/{{campaignStepId}}` | `conn_mod_def::GJ6N3EtMOdc::cAsbB2z6TwOubqVUOmI9IA` |
| List a Campaign’s Steps | GET | `/v2/campaigns/{{campaignId}}/steps` | `conn_mod_def::GJ6N3QqhDOE::LdRaXB_9S1CDL8gtK8Ew7w` |
| Add a Step to a Campaign | POST | `/v2/campaigns/{{campaignId}}/steps` | `conn_mod_def::GJ6N2qw6Leg::H9z98aiGT6utXfmDIEPP9A` |
| Delete a Campaign Step | DELETE | `/v2/campaigns/{{campaignId}}/steps/{{campaignStepId}}` | `conn_mod_def::GJ6N2280Ips::dXT7oxw3To2NPDxnFxe4Eg` |
| Update a Campaign’s Step | PATCH | `/v2/campaigns/{{campaignId}}/steps/{{campaignStepId}}` | `conn_mod_def::GJ6N34ci49E::Xx0bv5HGRqePQmaZe5VSQw` |

### PeopleLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a People List by ID | GET | `/v1/people/lists/{{listId}}` | `conn_mod_def::GJ6N1vtjre4::wRmU6v98T8uFmfd2vzDEKA` |
| Get All People Lists | GET | `/people/lists` | `conn_mod_def::GJ6N1U93jnE::QbUtDOhiSEWhQOeiisIPzA` |
| Create a People List | POST | `/people/lists` | `conn_mod_def::GJ6N1HxQqMk::lvPaCkqYQ6-6GcenV3uJFw` |
| Delete a List by ID | DELETE | `/people/lists/{{listId}}` | `conn_mod_def::GJ6N1URvc7Y::z6c7IEmmTfWjkKq8JNY-4Q` |

### Actions

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Push Contacts to a Sequence | POST | `/Actions/pushContactsToSequence` | `conn_mod_def::GJ6N03rxkLY::D5QETsIFS5yLLssjPRD02w` |
| Mark a Contact as Replied (by Email) | POST | `/actions/markasreplied` | `conn_mod_def::GJ6N2WtcbSs::ZoOhVXimRR-W7N_Hm11j-A` |
| Move Contacts to Lists | POST | `/Actions/moveContactsToLists` | `conn_mod_def::GJ6N2T1XsmY::0lIVSPfhSJmv_dgH4vldQw` |
| Remove a Contact from All Sequences | POST | `/actions/removepersonfromallcampaigns` | `conn_mod_def::GJ6N2Wum_uE::0c1TeR_xT56qxyf8JaFXRQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contacts With Stage Changes | GET | `/Contacts/prospects-by-status-changes` | `conn_mod_def::GJ6N1-5briw::-cB5ga1xQpWa2XhSPc8TTg` |
| Create and Push Contact to a Campaign Sequence | POST | `/actions/addandpushtocampaign` | `conn_mod_def::GJ6N1EFzuIE::gEcRoVfqSGyPxrwd72Y4DQ` |
| Mark a Contact as Finished (by Email) | POST | `/v1/actions/markasfinished` | `conn_mod_def::GJ6N2T68eaI::4MxJiWA-QEqfkKTRSEE_9Q` |
| Unmark a Contact as Out of Office | POST | `/actions/unmark-as-out-of-office` | `conn_mod_def::GJ6N2eHdy20::giHA18zgSR2nrhfpoYcK-Q` |

### EmailAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Email Accounts | GET | `/emailAccounts` | `conn_mod_def::GJ6N2JzwtrE::JPT3b5F8Q3eDJE4yrh68HA` |
| Add New Email Account | POST | `/EmailAccounts` | `conn_mod_def::GJ6N07vWr6g::jtiSsMZDTfiinwWVFSRtHg` |
| Delete an Email Account | DELETE | `/EmailAccounts` | `conn_mod_def::GJ6N1KdFJlQ::PPyjp8kuSkmK_gNe_9_BqA` |

### Stats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact’s Status in a Campaign | GET | `/stats/status_in_campaign` | `conn_mod_def::GJ6N1eW1qDg::VMvr4bneT5GSdwaGD9bs_g` |
| Get Campaign Click Statistics | GET | `/v1/Stats/CampaignClicks` | `conn_mod_def::GJ6N1SbdAOU::Y2slLmMGQo6xxwgWInl9wA` |
| Get Campaign Statistics (People Sent) for a Campaign | GET | `/v1/stats/GetPeopleSentPerCampaign` | `conn_mod_def::GJ6N1fH1SSU::W47We6KUTravpbO93ls6DA` |

### Blacklist

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Blacklisted Domains and Emails | GET | `/Blacklist` | `conn_mod_def::GJ6N1-n-3u0::Ud-aW6lpRGGmGElsrca21w` |
| Add a Domain or Email to the Blacklist | POST | `/Blacklist` | `conn_mod_def::GJ6N04LRKUw::xGyBU4J0THONG7dxNvGrsg` |
| Remove a Domain or Email from the Blacklist | DELETE | `/v1/Blacklist` | `conn_mod_def::GJ6N2i_rwbc::fgLVuLzlRkqnl7egokBPjA` |

### BrandedLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Branded Link (Match Sending Domain) | POST | `/api/v2/branded-links` | `conn_mod_def::GJ6N2q9DUTU::ebEEzXsLSqu_CpWZ4mYR9A` |
| Change a Branded Link’s Active State | PUT | `/api/v2/branded-links/{{brankedLinkId}}/active` | `conn_mod_def::GJ6N2qyZo-w::YlS4Z9qiQZeUNfECiXj9-g` |

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Message’s Content | GET | `/api/v2/emails/{{emailMessageId}}/content` | `conn_mod_def::GJ6N3JfWBjw::mUTFczKJS0ydgLYKqX2dOA` |
| Send Test Email | POST | `/emails/test` | `conn_mod_def::GJ6N3sB8kzU::KimCuOp1S9qQsmT-tRA8dQ` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Generated Email Report | GET | `/api/v2/reports/download` | `conn_mod_def::GJ6N3Qu8LW4::Ti5ekS5eTcqRIGZPhtBNBg` |
| Generate Email Report (Get Report URL) | GET | `/api/v2/reports/generate-email-report` | `conn_mod_def::GJ6N3FXv7Gw::2R12LcsXTXub9UdRjMXU2A` |

### CampaignContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Push Contact to a Campaign (Sequence) | POST | `/actions/pushtocampaign` | `conn_mod_def::GJ6N2Td0qGY::aJAUG7F8QDujm5M1bMPnHw` |
| Remove a Contact from a Campaign (Sequence) | POST | `/actions/removepersonfromcampaignbyid` | `conn_mod_def::GJ6N2fPhcuo::QPx5kxMwSXicGUKNacEjvQ` |

### CampaignStepStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign Step Statistics | GET | `/Stats/CampaignStep` | `conn_mod_def::GJ6N1jT665Q::lexyjxzzTD-CmL8xYRYCTg` |

### SharedPageUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Email Account Shared Page URL | GET | `/SharedPageUrl` | `conn_mod_def::GJ6N1094zWE::1iuVBdSNRc2a8AkkibVKPQ` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template by ID | GET | `/templates` | `conn_mod_def::GJ6N2MSdwIw::E89PucLpQNuGHC92tCeLew` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Import Prospect Accounts from CSV (API Import) | POST | `/accounts/import` | `conn_mod_def::GJ6N2MDUdoo::xRfX4V4XQDaPkrUw9LZh7A` |

### ContactStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Statistics | GET | `/v1/stats/person` | `conn_mod_def::GJ6OJj7uov8::hN8pgzVoQqy_gioBP17PTg` |

### Sequences

| Action | Method | Path | Action id |
|---|---|---|---|
| List Campaigns (Sequences) for a Contact | GET | `/v1/people/{{contactId}}/sequences` | `conn_mod_def::GJ6N1-SBMro::aZK3z0GaTKiIeBbez1I6mQ` |

### CampaignEmailStepVariants

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate or Pause a Campaign Email Step Variant | POST | `/v2/campaigns/{{campaignStepId}}/variants/toggle` | `conn_mod_def::GJ6N2fTgGOg::iFuxAvLEQHqafg_bVuu00g` |

### WebhookLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Subscription’s Error Logs | GET | `/api/v2/webhooks/{{webhookId}}/logs` | `conn_mod_def::GJ6N3SpHQag::rJKDn3MqSbSgb7tfJwm3PQ` |

### BillingInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Billing Info | GET | `/billing/info` | `conn_mod_def::GJ6N3JUU49w::yDfmZ-APQtuDjjkENR5xzQ` |

### Prospects

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Direct Email to a Prospect | POST | `/v2/prospects/{{prospectid}}/emails` | `conn_mod_def::GJ6N3rwK2kc::9e34cCiyRXyswipnwtLuzg` |

## When a call fails

The error comes from Reply.io, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/reply-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
