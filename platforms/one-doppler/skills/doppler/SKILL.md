---
name: doppler
description: Doppler is an email marketing and automation platform that provides campaign creation, audience segmentation, transactional messaging, and performance analytics, allowing businesses to manage subscriber communications and automate personalized email workflows through integrations and API-based delivery capabilities. Read and write Doppler data through One: subscribers, useraccounts, subscriberlists, campaigns, campaigncontent, accounts and more, 74 actions with real parameter documentation. Use whenever the user asks to look something up in Doppler, create or update a record there, or build code against the Doppler API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: doppler
  generated-from: one-knowledge-base
---

# Doppler through One

Doppler is an email marketing and automation platform that provides campaign creation, audience segmentation, transactional messaging, and performance analytics, allowing businesses to manage subscriber communications and automate personalized email workflows through integrations and API-based delivery capabilities.

One exposes Doppler through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `doppler` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Doppler is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Doppler account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscriber for an Account | GET | `/accounts/{{accountName}}/subscribers/{{email}}` | `conn_mod_def::GLNXOK3eOUg::vGjpGRLMQPGuactViZ5F4w` |
| Get Paginated Subscribers for an Account | GET | `/accounts/{{accountName}}/subscribers` | `conn_mod_def::GLNXOMZ2MtA::APAGniEETP6Ar62HMsvHDA` |
| Get Subscribers by Origin | GET | `/subscribers/{{origin}}` | `conn_mod_def::GLNXOVrf9Sg::DUFqnVm5Tc22FSBi34OqrA` |
| Get Subscribers for an Account List | GET | `/accounts/{{accountName}}/lists/{{listId}}/subscribers` | `conn_mod_def::GLNXObwoUMg::QU00osWOQx-3lpbZZsSVSg` |
| Associate a Subscriber to a List for an Account | POST | `/accounts/{{accountName}}/lists/{{listId}}/subscribers` | `conn_mod_def::GLNXNosOOvA::PKs7XMlUSOiy9mFY_K1Ogw` |
| Check a Subscriber by Email for an Account | HEAD | `/accounts/{{accountName}}/subscribers/{{email}}` | `conn_mod_def::GLNXNn3oLAA::iANGVb8oTFCFe5leC7mOEQ` |
| Double Optin Using Accounts Lists Subscribers Doble Optin | POST | `/accounts/{{accountName}}/lists/{{listId}}/subscribers/doble-optin/{{templateId}}` | `conn_mod_def::GLNXNsPRPHA::1CKQ3PYhQ0GsullWXP028g` |
| Import CSV Subscribers for an Account List | POST | `/accounts/{{accountName}}/lists/{{listId}}/subscribers/import-csv` | `conn_mod_def::GLNXOAenH0A::yW1n4SiAStScgK9OYbsv4g` |
| Import Subscribers for an Account | POST | `/accounts/{{accountName}}/subscribers/import` | `conn_mod_def::GLNXOBpQzTA::NUo662CrRzCA3_2YwgV17g` |
| Import Subscribers to an Account List | POST | `/accounts/{{accountName}}/lists/{{listId}}/subscribers/import` | `conn_mod_def::GLNXN_zfauA::xwd6jaICSTGvZSQd10vfRQ` |
| Remove a Subscriber from a List for an Account | DELETE | `/accounts/{{accountName}}/lists/{{listId}}/subscribers/{{email}}` | `conn_mod_def::GLNXOlIwzwA::Ur3VxxLuR9ipdHXbJNhktQ` |
| Unsubscribe a Subscriber from an Account | POST | `/accounts/{{accountName}}/unsubscribed` | `conn_mod_def::GLNXNosCzSg::UM5FCu6uRd-nd1chiANWGA` |

### UserAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Client Manager's User Account | GET | `/clientManagers/{{clientManagerName}}/userAccounts/{{userId}}` | `conn_mod_def::GLNXPTKmcGA::EYriKVq6TmSAdKfTLUDVJA` |
| List a Client Manager's User Accounts | GET | `/clientManagers/{{clientManagerName}}/userAccounts` | `conn_mod_def::GLNXPT_C0sA::PIe1bl-ZTAe2pjLpymRUJw` |
| Activate or Deactivate a User Account for a Client Manager | POST | `/clientManagers/{{clientManagerName}}/userAccounts/{{userId}}/active` | `conn_mod_def::GLNXPABJFlA::DvGHbMaAQR-L-WfudcRieg` |
| Create a User Account for a Client Manager | POST | `/clientManagers/{{clientManagerName}}/userAccounts` | `conn_mod_def::GLNXPI1jkcg::mqJzom3nQAKGK9PZKF_ykg` |
| Edit a User Account for a Client Manager | PUT | `/clientManagers/{{clientManagerName}}/userAccounts/{{userId}}` | `conn_mod_def::GLNXPJBITrA::Q4zIV2sNSCWC_GQn30BiLw` |

### SubscriberLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscriber List for an Account | GET | `/accounts/{{accountName}}/lists/{{listId}}` | `conn_mod_def::GLNXNenZM9g::qPpZzCo9TEi8L0SMU72azQ` |
| Create a Subscriber List for an Account | POST | `/accounts/{{accountName}}/lists` | `conn_mod_def::GLNXNejy7qA::GfFrsK2pTQWNg4hTxnOppw` |
| Delete a Subscriber List for an Account | DELETE | `/accounts/{{accountName}}/lists/{{listId}}` | `conn_mod_def::GLNXNeCt1hA::mqv9eMSkQ7G_t2NHP3_qGQ` |
| Edit a Subscriber List for an Account | PUT | `/accounts/{{accountName}}/lists/{{listId}}` | `conn_mod_def::GLNXNfLNnzg::LZ0RB-6OSUez5ICzKYud3g` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign for an Account | GET | `/accounts/{{accountName}}/campaigns/{{campaignId}}` | `conn_mod_def::GLNXMs9MDRg::MKSuYr_RQz6XdhI1C27REw` |
| List Campaigns for an Account | GET | `/accounts/{{accountName}}/campaigns` | `conn_mod_def::GLNXM40GSZA::DoIi4spUT1iTZrzrI3XOuA` |
| Create a Campaign Draft for an Account | POST | `/accounts/{{accountName}}/campaigns` | `conn_mod_def::GLNXMe-i5RA::I6w7SKJdQgaEwnmlJbpimQ` |
| Delete a Campaign for an Account | DELETE | `/accounts/{{accountName}}/campaigns/{{campaignId}}` | `conn_mod_def::GLNXM1mlKlg::eWVPEo5aQzifJ9kZGEo35Q` |

### CampaignContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign Content for an Account | GET | `/accounts/{{accountName}}/campaigns/{{campaignId}}/content` | `conn_mod_def::GLNXMSmbvCA::Gmsuxu99Rr6mRLUpmvHvEw` |
| Edit Campaign Content for an Account | PUT | `/accounts/{{accountName}}/campaigns/{{campaignId}}/content` | `conn_mod_def::GLNXMW7qUbA::SnnmATYOR5mFvI8QzYuJ5w` |
| Edit Text Alternative Content for an Account Campaign | PUT | `/accounts/{{accountName}}/campaigns/{{campaignId}}/content/text-alternative` | `conn_mod_def::GLNXMSmfRmA::muPxVIluQ5eKJWtIIglbxw` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account Home Page | GET | `/accounts/{{accountName}}` | `conn_mod_def::GLNXNQewSng::fn3X_XYpS_iEmgC0sukbwQ` |
| Create User Account | POST | `/accounts` | `conn_mod_def::GLNXPKyX4Zg::Of_hB0g0QtStxKWIStMc7g` |

### CampaignRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Recipients for a Campaign | GET | `/accounts/{{accountName}}/campaigns/{{campaignId}}/recipients` | `conn_mod_def::GLNXMfcwpCA::BQa-XBrPSy6HwZkTXMKWBA` |
| Edit Recipients for a Campaign | PUT | `/accounts/{{accountName}}/campaigns/{{campaignId}}/recipients` | `conn_mod_def::GLNXMferfVg::VHfq5pLaTnK2CdMDz2LjJg` |

### UnsubscribedSubscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Unsubscribed Subscribers for an Account | GET | `/accounts/{{accountName}}/unsubscribed` | `conn_mod_def::GLNXOlBpIqg::AVpFkTzXQTCzJZDPjSeJ4Q` |
| Import Unsubscribed Subscribers for an Account | POST | `/accounts/{{accountName}}/unsubscribed/import` | `conn_mod_def::GLNXOAdO2Zg::QjDp0McJQi-gZmd8p5Q8uQ` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task for an Account | GET | `/accounts/{{accountName}}/tasks/{{taskId}}` | `conn_mod_def::GLNXOktayxg::r-NjS2K9SSu9jJ9njwC-xQ` |
| List Tasks for an Account | GET | `/accounts/{{accountName}}/tasks` | `conn_mod_def::GLNXOlTU-Kg::_zWizsV9QCOMar1yXW2rnQ` |

### CampaignContentTextAlternative

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign's Content Text Alternative | GET | `/accounts/{{accountName}}/campaigns/{{campaignId}}/content/text-alternative` | `conn_mod_def::GLNXMfRt8hA::vElXEo1ATPa08ziosBzPIA` |
| Delete a Campaign Content Text Alternative | DELETE | `/accounts/{{accountName}}/campaigns/{{campaignId}}/content/text-alternative` | `conn_mod_def::GLNXMTDq48A::2wl75K1NSbi0UeXiFNETNQ` |

### CampaignShippings

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Campaign Shipping for an Account | DELETE | `/accounts/{{accountName}}/campaigns/{{campaignId}}/shippings/{{shippingId}}` | `conn_mod_def::GLNXM3eIm-A::eezxooRLTJeiV79sFvHHsQ` |
| Send or Schedule a Campaign Shipping for an Account Campaign | POST | `/accounts/{{accountName}}/campaigns/{{campaignId}}/shippings` | `conn_mod_def::GLNXM2D7J_g::yUucE-rWTPm6DpliV1b3KQ` |

### AutomationCollections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Automation Collections for an Account | GET | `/accounts/{{accountName}}/automations/lists` | `conn_mod_def::GLNXMBV3AEg::FcDqkQwoQOuyMvPBKOL06Q` |

### CampaignPreview

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign Preview for an Account | GET | `/accounts/{{accountName}}/campaigns/{{campaignId}}/preview` | `conn_mod_def::GLNXMsavK-A::OkLbEfuYQoOV6BTHl5Ywtg` |

### OpensAndClicksInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Opens and Clicks Info for an Account Automation | GET | `/accounts/{{accountName}}/automations/opensandclicks/{{scheduledTaskId}}` | `conn_mod_def::GLNXMAFvTOA::VvFdEeKRQOGrWkvJLtjhtg` |

### ActivationEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Activation Email | POST | `/activation-email` | `conn_mod_def::GLNXPIrCv5g::tlpH451CRMG0kscepJO9PA` |

### ApiIndex

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Index | GET | `/` | `conn_mod_def::GLNXNQUgi2A::b3mImaLTRSCz1oUXGEFRgg` |

### SubscriberPermissionFieldUpdateHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscriber Permission Field Update History for an Account | GET | `/accounts/{{accountName}}/subscribers/{{email}}/permissions-history/{{fieldName}}` | `conn_mod_def::GLNXOCoadUA::HOYL8IWYRO-bOxuqKYMqdQ` |

### SubscriberDeliveries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Subscriber Delivery Details for an Account | GET | `/accounts/{{accountName}}/subscribers/{{email}}/deliveries` | `conn_mod_def::GLNXOLomogg::gFI5mGwFRH-ZqAWtWH7hAQ` |

### AccountIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account Integration Status | GET | `/accounts/{{accountName}}/integrations/{{integrationName}}` | `conn_mod_def::GLNXPAXfICg::L1vq9xyVR-m8LfNWJxM7ow` |

### ThirdPartyAppIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Update a Third-Party App Integration for an Account | PUT | `/accounts/{{accountName}}/integrations/{{integrationName}}` | `conn_mod_def::GLNXO_WVkeg::8SryWXZXRA-DMkzcWF4aLQ` |

### AccountFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Fields | GET | `/accounts/{{accountName}}/fields` | `conn_mod_def::GLNXNTWKSEA::lLr-jAQ5QFCHWe8u1wiGdA` |

### DoubleOptInTemplateContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit Double Opt-In Template Content for an Account | PUT | `/accounts/{{accountName}}/DobleOptinTemplate/{{templateId}}/content` | `conn_mod_def::GLNXNWA7IWg::31tcF7xiQuqB3X7LSUvFzQ` |

### Campaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit a Campaign for an Account | PUT | `/accounts/{{accountName}}/campaigns/{{campaignId}}` | `conn_mod_def::GLNXMsFCung::vaV5taZUT4mS1vTwz7f-Dw` |

### CampaignUnsubscribedContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Unsubscribed Contacts for a Campaign | GET | `/accounts/{{accountName}}/campaigns/{{campaignId}}/unsubscribed` | `conn_mod_def::GLNXM3nFJjA::KF8TO8N0RuiPd6I7OIFhFQ` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Subscriber Lists for an Account | GET | `/accounts/{{accountName}}/lists` | `conn_mod_def::GLNXNfZTmXg::oJjLKIgfSxKx9RRGgZW2Jw` |

### ResetPasswordEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Reset Password Email | POST | `/reset-password-email` | `conn_mod_def::GLNXPTTa9-g::PWwdKmiATg-i95l17jk3sQ` |

### ClientManagersUserPlans

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Client Manager's User Plans | GET | `/clientManagers/{{clientManagerName}}/plans` | `conn_mod_def::GLNXPT2gveA::byomWN1PQEmHU6vk51OcTw` |

### AutomationSummaryReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Automation Summary Report for an Account | GET | `/accounts/{{accountName}}/automations/summary/{{scheduledTaskId}}` | `conn_mod_def::GLNXMVOARJg::JdRtbeNrTCeiGpC8RW1Neg` |

### AccountSubscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| Associate a Subscriber to an Account's Subscribers | POST | `/accounts/{{accountName}}/subscribers` | `conn_mod_def::GLNXN23Kpgg::hlXLQqXxRDij3Hi5oTaKRw` |

### CampaignDeliveries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign Delivery Details by Subscriber for an Account | GET | `/accounts/{{accountName}}/campaigns/{{campaignId}}/deliveries` | `conn_mod_def::GLNXMtfL7Ig::yfUChA6pRXCGu8tvyjFSFQ` |

### DoubleOptInEmailTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Double Opt-In Email Template for an Account | POST | `/accounts/{{accountName}}/DobleOptinTemplate` | `conn_mod_def::GLNXNBcBEmA::3_umEilbQoCHnF08v3r_yA` |

### CampaignSocialMediaPreferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit Social Media Preferences for an Account Campaign | PUT | `/accounts/{{accountName}}/campaigns/{{campaignId}}/social-media` | `conn_mod_def::GLNXNGZpB2g::NR1R4TruSHOtnAXKt4bkdw` |

### ImportErrors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Import Errors for an Account Task | GET | `/accounts/{{accountName}}/tasks/{{taskId}}/import-errors` | `conn_mod_def::GLNXO1M_zNg::51DRdPEnRwmGZg6IymR7UQ` |

### Tokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Authenticate a User and Return a Token | POST | `/tokens` | `conn_mod_def::GLNXO-zlEUA::46rjgn_8Sr2s5cqwU9TxOA` |

### Authentication

| Action | Method | Path | Action id |
|---|---|---|---|
| Authenticate User | POST | `/authenticate` | `conn_mod_def::GLNXPIxAhfg::tHYVVfhcSqmMmQLLDRflmA` |

### CampaignApprovals

| Action | Method | Path | Action id |
|---|---|---|---|
| Approve a Campaign for an Account | POST | `/accounts/{{accountName}}/campaigns/{{campaignId}}/approvals` | `conn_mod_def::GLNXMjneMNA::dKUC6qPvQOW_bR0iQQWTwg` |

### ClientManagers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Client Manager Home Page | GET | `/clientManagers/{{clientManagerName}}` | `conn_mod_def::GLNXNFWp0BA::SYPN-MLNSvmD8ELmT0QS1Q` |

### ScheduledCampaignShippings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scheduled Campaign Shipping for an Account | GET | `/accounts/{{accountName}}/campaigns/{{campaignId}}/shippings/{{shippingId}}` | `conn_mod_def::GLNXNCkKfPg::DryTaZdKTa2lhYci65xsow` |

### DoubleOptInValidationTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Double Opt-In Validation Template for an Account | GET | `/accounts/{{accountName}}/DobleOptinTemplate/{{templateId}}` | `conn_mod_def::GLNXNQUlPoA::fA7Y0UjGTea10uz3NCeXKA` |

### SocialMediaPreferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Social Media Preferences for an Account's Campaign | GET | `/accounts/{{accountName}}/campaigns/{{campaignId}}/social-media` | `conn_mod_def::GLNXNGf9eng::tJr4Cg6tTcG_syrmswPh3w` |

### CampaignResultsSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign's Results Summary | GET | `/accounts/{{accountName}}/campaigns/{{campaignId}}/results-summary` | `conn_mod_def::GLNXMsUiWfA::T1CIVXxMTCyslYEfq2HBWw` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete User Third Party App for an Account | DELETE | `/accounts/{{accountName}}/integrations/{{integrationName}}` | `conn_mod_def::GLNXO-Wiq0A::olyRGAHzRO-j7O91UkR_4A` |

### UnsubscribeActivityInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Unsubscribe Activity Info for an Account Automation Scheduled Task | GET | `/accounts/{{accountName}}/automations/unsubscribeactivity/{{scheduledTaskId}}` | `conn_mod_def::GLNXMBhcZSg::N5u2aUgtTne3vPZY-qBV1g` |

### LinksTrackingInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Links Tracking Info for an Account Automation | GET | `/accounts/{{accountName}}/automations/linkstracking/{{scheduledTaskId}}` | `conn_mod_def::GLNXMJWyttA::K_ZGdJxTSKaEtzxCxf1vBg` |

### DeliverabilityRateInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Deliverability Rate Info for an Account Automation Scheduled Task | GET | `/accounts/{{accountName}}/automations/deliverabilityrate/{{scheduledTaskId}}` | `conn_mod_def::GLNXMBVT1GA::tRA2aD8DRLuS_VIGQhmFkQ` |

## When a call fails

The error comes from Doppler, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/doppler

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
