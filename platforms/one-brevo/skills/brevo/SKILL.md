---
name: brevo
description: Brevo is an all-in-one marketing and CRM platform that enables businesses to run email, SMS, WhatsApp and chat campaigns, automate customer journeys, manage sales pipelines, and integrate data across channels for unified audience engagement. Read and write Brevo data through One: contacts, emailcampaigns, smscampaigns, resellerchildren, loyaltyprograms, companies and more, 288 actions with real parameter documentation. Use whenever the user asks to look something up in Brevo, create or update a record there, or build code against the Brevo API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: brevo
  generated-from: one-knowledge-base
---

# Brevo through One

Brevo is an all-in-one marketing and CRM platform that enables businesses to run email, SMS, WhatsApp and chat campaigns, automate customer journeys, manage sales pipelines, and integrate data across channels for unified audience engagement.

One exposes Brevo through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `brevo` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Brevo is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Brevo account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact’s Details | GET | `/contacts/{{identifier}}` | `conn_mod_def::GJ09BwbiHkw::G1j_lOjfQPyvuIc3aXmd8w` |
| Get a Contact’s Email Campaign Statistics | GET | `/contacts/{{identifier}}/campaignStats` | `conn_mod_def::GJ09CqaUqR8::EfQYWFfuTNmtZyGIle0gVg` |
| List All Contacts | GET | `/contacts` | `conn_mod_def::GJ09CJEa-ls::HzOZBGjzTAuGJTBiSexohA` |
| List Contacts in a List | GET | `/contacts/lists/{{listId}}/contacts` | `conn_mod_def::GJ09CiRwPzo::k_QH3ardSvKyCjDch8pybA` |
| Create a Contact | POST | `/contacts` | `conn_mod_def::GJ09AOjcvK0::xkt-oI9RSKWZa0BhrMVTHg` |
| Create a Contact via Double Opt-In (DOI) Confirmation | POST | `/contacts/doubleOptinConfirmation` | `conn_mod_def::GJ09At1chYQ::AmwXIGyOQCSyvM1fCjKVOA` |
| Delete a Contact | DELETE | `/contacts/{{identifier}}` | `conn_mod_def::GJ09A2PLVT8::ihKYVRoRQ32Pu4-4M5FvQA` |
| Export Contacts (Background Process) | POST | `/contacts/export` | `conn_mod_def::GJ09BlCf6YY::CWlKGb9iRDS0aWGjSyZu9g` |
| Import Contacts | POST | `/contacts/import` | `conn_mod_def::GJ09C50u6is::ngyPSaGQTKu7kdY4FKQ4hA` |
| Remove Contacts from a List | POST | `/contacts/lists/{{listId}}/contacts/remove` | `conn_mod_def::GJ09A9PRRcw::34mYMzA3R5KvdrYrYm6ggw` |
| Update a Contact (by Identifier) | PUT | `/contacts/{{identifier}}` | `conn_mod_def::GJ09DUNIep4::hnVE5-MxQ0OoVn-JDW7Rlg` |
| Update Multiple Contacts (Batch) | POST | `/contacts/batch` | `conn_mod_def::GJ09Dyi_B5g::-A6xhiAETLOuTjsgofIZzg` |

### EmailCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an A/B Test Email Campaign Results | GET | `/emailCampaigns/{{campaignId}}/abTestCampaignResult` | `conn_mod_def::GJ09QH2dOKg::8GkR8APFQ4yv3RyiGkGosg` |
| Get an Email Campaign Report | GET | `/emailCampaigns/{{campaignId}}` | `conn_mod_def::GJ09QQIJdho::ybnN9MRKTvyJs2FDnfDCLg` |
| Get an Email Campaign's Shared Template URL | GET | `/emailCampaigns/{{campaignId}}/sharedUrl` | `conn_mod_def::GJ09P1bOFI4::0Ftm_bKzROus4l7B1w9gOw` |
| List Email Campaigns | GET | `/emailCampaigns` | `conn_mod_def::GJ09QrOgos0::mP7yfkmZR92JmqRj3ykRKQ` |
| Create an Email Campaign | POST | `/emailCampaigns` | `conn_mod_def::GJ09O3ifZaA::HSb6y-w1Sned8yCy8sVsLg` |
| Delete an Email Campaign | DELETE | `/emailCampaigns/{{campaignId}}` | `conn_mod_def::GJ09PUHS3Nc::PZ81qRM7RuGdgZ7SvL3vIA` |
| Send a Test Email for an Email Campaign | POST | `/emailCampaigns/{{campaignId}}/sendTest` | `conn_mod_def::GJ09RjLGeLc::FKA53f7NQJOgsJEyTr9teA` |
| Send an Email Campaign Now | POST | `/emailCampaigns/{{campaignId}}/sendNow` | `conn_mod_def::GJ09Rbmwb4Y::yQj4rHD4Tninwy4LyIO09g` |
| Send an Email Campaign's Report | POST | `/emailCampaigns/{{campaignId}}/sendReport` | `conn_mod_def::GJ09RzhwUU0::9A6kmCWuSIGogbh1jGG9rQ` |
| Update an Email Campaign | PUT | `/emailCampaigns/{{campaignId}}` | `conn_mod_def::GJ09SeptU3E::Bke-N8BeRka2GxBzg9JDiA` |
| Update an Email Campaign’s Status | PUT | `/emailCampaigns/{{campaignId}}/status` | `conn_mod_def::GJ09SmdDVFg::ay9q1OTnR7WSKXhuW6FiOQ` |

### SmsCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SMS Campaign | GET | `/smsCampaigns/{{campaignId}}` | `conn_mod_def::GJ09QXbZFmk::fN8ky97_QGWquTfrEk2wYA` |
| List SMS Campaigns | GET | `/smsCampaigns` | `conn_mod_def::GJ09RIMG--U::2qY5j5tISI6qNkGTjPu9GA` |
| Create an SMS Campaign | POST | `/smsCampaigns` | `conn_mod_def::GJ09PGOHYSQ::yEJ4MKkFRQm34wEHkhYjfw` |
| Delete an SMS Campaign | DELETE | `/smsCampaigns/{{campaignId}}` | `conn_mod_def::GJ09PdYfDXw::tqus5a6MTfaV-ngQTqh35Q` |
| Send a Test SMS Campaign | POST | `/smsCampaigns/{{campaignId}}/sendTest` | `conn_mod_def::GJ09RSVnjro::Sr1sypiWRIaCrbc_szdjsw` |
| Send an SMS Campaign Immediately (Send Now) | POST | `/smsCampaigns/{{campaignId}}/sendNow` | `conn_mod_def::GJ09R7MRFGU::cV7CVv90RPOmCFbTBxqpoQ` |
| Send an SMS Campaign's Report | POST | `/smsCampaigns/{{campaignId}}/sendReport` | `conn_mod_def::GJ09RrfgPqs::6VWNmu7nTZyzNfDvWDqPNQ` |
| Update an SMS Campaign | PUT | `/smsCampaigns/{{campaignId}}` | `conn_mod_def::GJ09StlpVWw::IFB9RLRYQOyTkemEg8qGcw` |
| Update an SMS Campaign's Status | PUT | `/smsCampaigns/{{campaignId}}/status` | `conn_mod_def::GJ09SNNtcCA::VapQgYV2R8arkBBM9DOSGA` |

### ResellerChildren

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Reseller Child Account Creation Status | GET | `/reseller/children/{{childIdentifier}}/accountCreationStatus` | `conn_mod_def::GJ089HDqA2g::VlIGBibjQyafBPYUAz0UCw` |
| Get a Reseller Child Account’s Details | GET | `/reseller/children/{{childIdentifier}}` | `conn_mod_def::GJ086owqmBM::FxyhtYdUTzW0gw8atoPXfA` |
| List a Reseller’s Children Accounts | GET | `/reseller/children` | `conn_mod_def::GJ088SBx9qg::5qZ66kmIT2eD-iVi4atOuQ` |
| Create a Reseller Child | POST | `/reseller/children` | `conn_mod_def::GJ084kpEXZY::_2ttdGUpR_u1mzIKj2-rZQ` |
| Delete a Reseller Child | DELETE | `/reseller/children/{{childIdentifier}}` | `conn_mod_def::GJ085BaiP4Q::rL6KL-sKS_ChWCwfBasEPA` |
| Update a Reseller Child Account’s Status | PUT | `/reseller/children/{{childIdentifier}}/accountStatus` | `conn_mod_def::GJ08_L4VHng::YJV_LD5CQia6Z2bfOhLlJw` |
| Update a Reseller Child's Info | PUT | `/reseller/children/{{childIdentifier}}` | `conn_mod_def::GJ08_TUYjbk::b22aEy3BSFuxq-kIBdCw6w` |

### LoyaltyPrograms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Loyalty Program’s Info | GET | `/loyalty/config/programs/{{loyaltyProgramId}}` | `conn_mod_def::GJ09L4_w7ek::U6NTOGgtRQmwa4b00BLj_Q` |
| List Loyalty Programs | GET | `/loyalty/config/programs` | `conn_mod_def::GJ09MFL-3j4::JJ1l92xlT9WTO4AmqaT10A` |
| Create a Loyalty Program | POST | `/loyalty/config/programs` | `conn_mod_def::GJ09JOmUu24::OVd0ZxpjRD6Dba8_vvOkPw` |
| Delete a Loyalty Program | DELETE | `/loyalty/config/programs/{{loyaltyProgramId}}` | `conn_mod_def::GJ09KZ0pCPY::V_o4j_gyTueqeU7dsOUjrg` |
| Partially Update a Loyalty Program | PATCH | `/loyalty/config/programs/{{loyaltyProgramId}}` | `conn_mod_def::GJ09NmlNsno::cnlKSWijTr-N-scRZ3VqTA` |
| Publish a Loyalty Program | POST | `/loyalty/config/programs/{{loyaltyProgramId}}/publish` | `conn_mod_def::GJ09NuY2i3c::EU6esVmsRRKulgoP55-mGQ` |
| Update a Loyalty Program | PUT | `/loyalty/config/programs/{{loyaltyProgramId}}` | `conn_mod_def::GJ09OF4lOi0::OgjsmUmMQvysL3Nf8sLW7g` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company | GET | `/companies/{{id}}` | `conn_mod_def::GJ09UqM1Lkk::mzOHIu1nQpye1HHikraklw` |
| List Companies | GET | `/companies` | `conn_mod_def::GJ09VNWy4GY::9VMC1ad8QEyCIr27GdMcFA` |
| Create a Company | POST | `/companies` | `conn_mod_def::GJ09TUz0zCw::ZlmfpN4HT4O0X2qkHD1B3w` |
| Delete a Company | DELETE | `/companies/{{id}}` | `conn_mod_def::GJ09T7HLliE::jZQywLAKQlCUUN7EtM6L0g` |
| Import Companies (Creation and Updation) | POST | `/companies/import` | `conn_mod_def::GJ09Wct9Cgc::YDTWtaGEShOveeAgDm6b5Q` |
| Link and Unlink a Company with Contacts and Deals | PATCH | `/companies/link-unlink/{{id}}` | `conn_mod_def::GJ09WtDxcH8::TKaf88xdQ7uCq_49st7liQ` |
| Update a Company | PATCH | `/companies/{{id}}` | `conn_mod_def::GJ09W0TO3Xw::n2GVj9DJTdSxeZd5y_xxPw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook’s Details | GET | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ0866EVZQM::Mm_IlYaqROODWDFqten4fQ` |
| List All Webhooks | GET | `/webhooks` | `conn_mod_def::GJ087aUZHQs::YPlotCwgRNC5wDHxXhPSaQ` |
| Create a Webhook | POST | `/webhooks` | `conn_mod_def::GJ084MOIb6U::C2ynn0bOS0yj7je-ELOvVg` |
| Delete a Webhook | DELETE | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ085O3L040::rLqeBZRFR4uXepYQU5j_Eg` |
| Export All Webhook Events | POST | `/webhooks/export` | `conn_mod_def::GJ086KcIph4::V_1zQJYgQF2WyZ1FWoh22A` |
| Update a Webhook | PUT | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ08-5lfgo0::K1-XFtmkRgKLd4Bh22yTTQ` |

### Senders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Sender’s Dedicated IPs | GET | `/senders/{{senderId}}/ips` | `conn_mod_def::GJ087LHpn7c::ENWHV5f3RGyzI71mes9tGw` |
| List All Senders | GET | `/senders` | `conn_mod_def::GJ088tTFaRA::PXXtVmU9QMejN3umm_pzOA` |
| Create a New Sender | POST | `/senders` | `conn_mod_def::GJ0838xUO_E::UgQTYgUcSYeiZfw2xxCE6g` |
| Delete a Sender | DELETE | `/senders/{{senderId}}` | `conn_mod_def::GJ0846w8C-w::YmihI3VdT-KuC3bnITkc4Q` |
| Update a Sender | PUT | `/senders/{{senderId}}` | `conn_mod_def::GJ08-ycu3zA::dxVKTyYQS26EX0H8PUk3CQ` |
| Validate a Sender Using OTP | PUT | `/senders/{{senderId}}/validate` | `conn_mod_def::GJ09AAObxvA::mcN7Y7QvRS2QvIDn0nItYA` |

### WhatsappCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a WhatsApp Template | GET | `/whatsappCampaigns/template` | `conn_mod_def::GJ09Ov-y9YE::C4pvYOq5RR-h6QcxgmSyIQ` |
| Get Your WhatsApp API Account Information | GET | `/whatsappCampaigns/config` | `conn_mod_def::GJ09Qf2EyQI::iEMqbtnxQTmWsNoLxwB9HA` |
| List WhatsApp Campaigns | GET | `/whatsappCampaigns` | `conn_mod_def::GJ09Q0lCmvE::PXK1ilS_SQ-e-zgI5aB7qQ` |
| Create and Send a WhatsApp Campaign | POST | `/whatsappCampaigns` | `conn_mod_def::GJ09O-pyMX4::_HvkgZS5RmqMdxQzaGBYhw` |
| Send a WhatsApp Campaign Template for Approval | POST | `/whatsappCampaigns/template/approval/{{templateId}}` | `conn_mod_def::GJ09SECP6Pc::wAmPL-gwRSe74D9g5aG3Cg` |
| Update a WhatsApp Campaign | PUT | `/whatsappCampaigns/{{campaignId}}` | `conn_mod_def::GJ09SXTSS7g::6eR2pd8aQ8qxD6NUZlZ32w` |

### SmtpTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SMTP Template's Information | GET | `/smtp/templates/{{templateId}}` | `conn_mod_def::GJ09a7N_GOA::6V6IXekaSPWGVc4MO5dQvw` |
| Create an Email Template | POST | `/smtp/templates` | `conn_mod_def::GJ09XkLHFUA::iFPyaXuSSFiaZTwi7zmGHA` |
| Delete an Inactive Email Template | DELETE | `/smtp/templates/{{templateId}}` | `conn_mod_def::GJ09XrCqrtk::eFUEfdB0RMCID9cwZ6mDpw` |
| Generate a Rendered Preview of a Transactional Template | POST | `/smtp/template/preview` | `conn_mod_def::GJ09YZaafXw::5goMAg5OT0-cpnN7k_BiyA` |
| Send a Template to Your Test List | POST | `/smtp/templates/{{templateId}}/sendTest` | `conn_mod_def::GJ09bC2jGjE::v5QEWPDVQOq7k1aydObubg` |
| Update an Email Template | PUT | `/smtp/templates/{{templateId}}` | `conn_mod_def::GJ09b-jOd8I::uwY2dAcDSjW8_keuYZaY1Q` |

### ContactLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact List’s Details | GET | `/contacts/lists/{{listId}}` | `conn_mod_def::GJ09B3NIlN0::tmG9rNIQQGi0u9ZAtnqwTg` |
| List Contact Lists | GET | `/contacts/lists` | `conn_mod_def::GJ09CSnijaw::3D0uILP6RfqjtrNQXMaP_Q` |
| Create a Contact List | POST | `/contacts/lists` | `conn_mod_def::GJ09AcuOzXI::BiIupRMKRwyugPLnUq9BwA` |
| Delete a Contact List | DELETE | `/contacts/lists/{{listId}}` | `conn_mod_def::GJ09BM1L-ck::i2fYsr7aTQWGSbvhyiio9A` |
| Update a Contact List | PUT | `/contacts/lists/{{listId}}` | `conn_mod_def::GJ09DioM6xY::JZcNJPPwSX6NjyIrGxJYKw` |

### ContactAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Contact Attributes | GET | `/contacts/attributes` | `conn_mod_def::GJ09DCuW1cE::4TRSa7nHTPuawXZ7lYGxIw` |
| Create a Contact Attribute | POST | `/contacts/attributes/{{attributeCategory}}/{{attributeName}}` | `conn_mod_def::GJ09Aj2k4qs::2K766ZSvRW2499EyLfWwxQ` |
| Delete a Contact Attribute | DELETE | `/contacts/attributes/{{attributeCategory}}/{{attributeName}}` | `conn_mod_def::GJ09BePJ2vQ::Il8aiWcAT3mxW8qaWNaWig` |
| Delete a Multiple-Choice Attribute Option | DELETE | `/contacts/attributes/{{attributeType}}/{{multipleChoiceAttribute}}/{{multipleChoiceAttributeOption}}` | `conn_mod_def::GJ09BXp4EkE::nPoQJQysQZ2nUr7Xqb95wQ` |
| Update a Contact Attribute | PUT | `/contacts/attributes/{{attributeCategory}}/{{attributeName}}` | `conn_mod_def::GJ09Dr-_xoU::bTr3K_fWSBSqumrIil6dkQ` |

### LoyaltyBalanceDefinitions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Loyalty Program Balance Definition | GET | `/loyalty/balance/programs/{{loyaltyProgramId}}/balance-definitions/{{balanceDefinitionId}}` | `conn_mod_def::GJ09LOouZ5k::JPR7KvNuRZi8r8W_29Rd_w` |
| List a Loyalty Program’s Balance Definitions | GET | `/loyalty/balance/programs/{{loyaltyProgramId}}/balance-definitions` | `conn_mod_def::GJ09LW04ygk::31P3C4rARCe6rLak5YSYeA` |
| Create a Loyalty Program Balance Definition | POST | `/loyalty/balance/programs/{{loyaltyProgramId}}/balance-definitions` | `conn_mod_def::GJ09I3ZYsvA::S-XUVhKARai0Wu_CQbBDPg` |

2 more LoyaltyBalanceDefinitions actions are available through search.

This lists 90 of 288 actions. For anything not here, call `search_one_platform_actions` with platform `brevo`. The full catalog is at https://www.withone.ai/knowledge/brevo.

## When a call fails

The error comes from Brevo, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/brevo

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
