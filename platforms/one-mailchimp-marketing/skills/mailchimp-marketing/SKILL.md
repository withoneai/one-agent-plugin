---
name: mailchimp-marketing
description: Mailchimp Marketing is an all-in-one marketing platform that helps businesses manage and automate their email campaigns, audience segmentation, social media ads, and more to grow and engage their customer base effectively. Read and write Mailchimp Marketing data through One: campaigns, reports, lists, automations, landingpages, audiencecontacts and more, 282 actions with real parameter documentation. Use whenever the user asks to look something up in Mailchimp Marketing, create or update a record there, or build code against the Mailchimp Marketing API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mailchimp-marketing
  generated-from: one-knowledge-base
---

# Mailchimp Marketing through One

Mailchimp Marketing is an all-in-one marketing platform that helps businesses manage and automate their email campaigns, audience segmentation, social media ads, and more to grow and engage their customer base effectively.

One exposes Mailchimp Marketing through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mailchimp-marketing` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mailchimp Marketing is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mailchimp Marketing account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign’s Content | GET | `/campaigns/{{campaignId}}/content` | `conn_mod_def::GJ40sfpWRdg::DioRwWYkQemc6c-3XeMFfA` |
| Get a Campaign’s Info | GET | `/campaigns/{{campaignId}}` | `conn_mod_def::GJ40shAWuHw::IZFQ5x1qTF-KLmP_P0UcLA` |
| Get a Campaign’s Send Checklist | GET | `/campaigns/{{campaignId}}/send-checklist` | `conn_mod_def::GJ40soh9v-o::fIFoY7FUTy2naIUo3nNMPg` |
| List Campaigns | GET | `/campaigns` | `conn_mod_def::GJ40stxq72Y::YC_W_sIfRB2PSqcmNpjqtw` |
| Search Campaigns | GET | `/search-campaigns` | `conn_mod_def::GJ400toyXZQ::YnTfXU3YQBmLKA-fiIc7EQ` |
| Add a Campaign | POST | `/campaigns` | `conn_mod_def::GJ40sXvE9Fk::_8e6REIxRkWvRR0GBuYNVA` |
| Cancel a Campaign Send | POST | `/campaigns/{{campaignId}}/actions/cancel-send` | `conn_mod_def::GJ40sSBiLu4::yQmMAV1YRGu0i-OzScD2lA` |
| Create a List Survey Campaign Email | POST | `/lists/{{listId}}/surveys/{{surveyId}}/actions/create-email` | `conn_mod_def::GJ400wbXAqk::1PApJkznSjiwp5alJE6aTg` |
| Delete a Campaign | DELETE | `/campaigns/{{campaignId}}` | `conn_mod_def::GJ40sevIsgM::eLWBoDu9S_C27AP4QEqW5Q` |
| Pause an RSS Campaign | POST | `/campaigns/{{campaignId}}/actions/pause` | `conn_mod_def::GJ40sn8QWDc::18i6kvYzTLuxfddp5a4Wew` |
| Replicate a Campaign | POST | `/campaigns/{{campaignId}}/actions/replicate` | `conn_mod_def::GJ40ssOY2gA::BoZq0t0UQ9WreSknfgZvug` |
| Resend a Campaign (Create Resend for a Campaign) | POST | `/campaigns/{{campaignId}}/actions/create-resend` | `conn_mod_def::GJ40s_rbIxA::Sxa64NzkTDOZWem7h4NK-A` |

6 more Campaigns actions are available through search.

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign Link’s Click Details (Report) | GET | `/reports/{{campaignId}}/click-details/{{linkId}}` | `conn_mod_def::GJ40z339f8E::1NCsG_MWQb-0N-fSsEP9tQ` |
| Get a Campaign Recipient’s Report Info | GET | `/reports/{{campaignId}}/sent-to/{{subscriberHash}}` | `conn_mod_def::GJ400CBTwm8::Ka1S0cRETPy5AMgXEdWgjA` |
| Get a Campaign Report | GET | `/reports/{{campaignId}}` | `conn_mod_def::GJ400EJ_plg::7DnhsNq7Tpygh0dGjI3lnw` |
| Get a Campaign Subscriber’s Email Activity | GET | `/reports/{{campaignId}}/email-activity/{{subscriberHash}}` | `conn_mod_def::GJ400CKY_sg::fEMWWPEiT4mKOSoIOGya_g` |
| Get Open Details for a Campaign Subscriber | GET | `/reports/{{campaignId}}/open-details/{{subscriberHash}}` | `conn_mod_def::GJ400BQwz9A::M_cHLRu7TFK6_xR2TTi9Mw` |
| List a Campaign’s Child Campaign Reports | GET | `/reports/{{campaignId}}/sub-reports` | `conn_mod_def::GJ400W7bwL8::bgR0Tis-SPy0qklhceV4HQ` |
| List a Campaign’s Click Details Report | GET | `/reports/{{campaignId}}/click-details` | `conn_mod_def::GJ400OJDTQ0::Qv29yxpOTsW_Ru6MyQRf5Q` |
| List a Campaign’s Domain Performance Stats | GET | `/reports/{{campaignId}}/domain-performance` | `conn_mod_def::GJ400kVAf7I::IbjIGEsfS9Ku4vfS0q7Z3Q` |
| List a Campaign’s Ecommerce Product Activity Report | GET | `/reports/{{campaignId}}/ecommerce-product-activity` | `conn_mod_def::GJ400WxvpCs::A2Allhu_T2u6FOL7i9mJjA` |
| List a Campaign’s EepURL Activity Report | GET | `/reports/{{campaignId}}/eepurl` | `conn_mod_def::GJ400jxKsXc::-q-xiwBlQnuGPu0n0D9iXA` |
| List a Campaign’s Email Activity | GET | `/reports/{{campaignId}}/email-activity` | `conn_mod_def::GJ400kmomNI::dQO1WTQ2RniMekJ1_kzf5A` |
| List a Campaign’s Feedback (Advice) | GET | `/reports/{{campaignId}}/advice` | `conn_mod_def::GJ400Mey9tM::gt3tNib-SJOdzmO5eOl3VA` |

4 more Reports actions are available through search.

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List’s Information | GET | `/lists/{{listId}}` | `conn_mod_def::GJ40yG1WqI8::HnJSzaDATHW_fC86jb8CPw` |
| Get Lists (Audiences) Information | GET | `/lists` | `conn_mod_def::GJ40yLUD4L4::T2dxSyPnSFmYPmbBJJsh1A` |
| List a List’s Abuse Reports | GET | `/lists/{{listId}}/abuse-reports` | `conn_mod_def::GJ40yfIAbQU::kn8F2-S3ROu8tzU_2QoOlQ` |
| List a List’s Recent Activity | GET | `/lists/{{listId}}/activity` | `conn_mod_def::GJ40y2UPwac::h8VBdxMzR4q7ctaYZXadDA` |
| List a List’s Subscriber Locations | GET | `/lists/{{listId}}/locations` | `conn_mod_def::GJ40ymSFEu4::NAKyCF_eQyOKwFwk1CgjKA` |
| List a List’s Top Email Clients | GET | `/lists/{{listId}}/clients` | `conn_mod_def::GJ40zERa1k4::e_EZypUlT-6WXBxd3zef9Q` |
| Batch Subscribe or Unsubscribe List Members | POST | `/lists/{{listId}}` | `conn_mod_def::GJ40xoLBzwE::_EnybjFYT6ewzjo0BYTexg` |
| Create a List (Audience) | POST | `/lists` | `conn_mod_def::GJ40xTi8kQE::s2BTvU9qS0CGrUuzECA1oA` |
| Delete a List | DELETE | `/lists/{{listId}}` | `conn_mod_def::GJ40x1fGW2Y::KmYQLCwHRziy5lfCYC8miA` |
| Update a List | PATCH | `/lists/{{listId}}` | `conn_mod_def::GJ40zSLdPaA::ol_1HeD0TrSJhAvskID9wQ` |

### Automations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Automation Workflow Summary | GET | `/automations/{{workflowId}}` | `conn_mod_def::GJ40reeSbTo::rDE_L5DjQuOzFpCuz2wIzw` |
| List Automations | GET | `/automations` | `conn_mod_def::GJ40rrWu2IU::_EG_0db0Suy8KFoOgePMJw` |
| List Removed Subscribers from an Automation Workflow | GET | `/automations/{{workflowId}}/removed-subscribers` | `conn_mod_def::GJ40rnzPS34::j3R6Vm70SIK2udxSjclxtw` |
| Archive an Automation Workflow | POST | `/automations/{{workflowId}}/actions/archive` | `conn_mod_def::GJ40rUrJ4sg::N5XBfd93SNmz0l-OjTZFqA` |
| Create a Classic Automation | POST | `/automations` | `conn_mod_def::GJ40rV3GCYs::Op5p2p7YSVukIvslkixWSQ` |
| Pause All Emails in an Automation Workflow | POST | `/automations/{{workflowId}}/actions/pause-all-emails` | `conn_mod_def::GJ40roNCn_0::hHPCknmIR667V8PtHQs2vA` |
| Start All Emails in a Classic Automation Workflow | POST | `/automations/{{workflowId}}/actions/start-all-emails` | `conn_mod_def::GJ40rzfAVPI::79SEOtuMRaeuSrSmJ-CPLQ` |
| Start an Automation Workflow Email | POST | `/automations/{{workflowId}}/emails/{{workflowEmailId}}/actions/start` | `conn_mod_def::GJ40rzsIVbQ::lZecYHR7S5qCg7UacGceNg` |

### LandingPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Landing Page’s Information | GET | `/landing-pages/{{pageId}}` | `conn_mod_def::GJ40w87xSKI::esvN4k19RRmoDfAqkdVzKA` |
| List Landing Pages | GET | `/landing-pages` | `conn_mod_def::GJ40xMQ8ks0::lpn2Sj1eSSS63Wj3vebTvQ` |
| Add a Landing Page | POST | `/landing-pages` | `conn_mod_def::GJ40w89D_Hg::pY4072d5SfCFaT8yald-pQ` |
| Delete a Landing Page | DELETE | `/landing-pages/{{pageId}}` | `conn_mod_def::GJ40w8fs-Ow::rbPZW0DRQhOEFMMsIs6oIA` |
| Publish a Landing Page | POST | `/landing-pages/{{pageId}}/actions/publish` | `conn_mod_def::GJ40xG8dH5k::RWjTCNf7QxSqod5m3rq_hQ` |
| Unpublish a Landing Page | POST | `/landing-pages/{{pageId}}/actions/unpublish` | `conn_mod_def::GJ40xHCp8GY::spdSsNOuTZm4H44shMoclg` |
| Update a Landing Page | PATCH | `/landing-pages/{{pageId}}` | `conn_mod_def::GJ40xIvavM4::Y09tPHFkRWuEqf9fmnRFUQ` |

### AudienceContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audience Contact | GET | `/audiences/{{audienceId}}/contacts/{{contactId}}` | `conn_mod_def::GJ40rHoc1hE::OUkJM6eNT3yjL5DawDgjEA` |
| List an Audience’s Contacts | GET | `/audiences/{{audienceId}}/contacts` | `conn_mod_def::GJ40rNbLUe8::5w50kwKrS-SejLc4gsmkTw` |
| Add a Contact to an Audience | POST | `/audiences/{{audienceId}}/contacts` | `conn_mod_def::GJ40q-1j4Xo::zkE_ENeDTaeqZEb8PASe2g` |
| Archive an Audience Contact | POST | `/audiences/{{audienceId}}/contacts/{{contactId}}/actions/archive` | `conn_mod_def::GJ40tW1zpso::yD7XxBPdRH-OmxN5kXAxEA` |
| Forget a Contact in an Audience | POST | `/audiences/{{audienceId}}/contacts/{{contactId}}/actions/forget` | `conn_mod_def::GJ40tl7rwrs::BA5jjriMQCGh1VgUP1Tsfg` |
| Update an Audience Contact | PATCH | `/audiences/{{audienceId}}/contacts/{{contactId}}` | `conn_mod_def::GJ40rIXs06E::q2Shhco0T7-ac51ONXFkcw` |

### ListMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List Member’s Info | GET | `/lists/{{listId}}/members/{{subscriberHash}}` | `conn_mod_def::GJ40yTR9wfg::jBiRwNHVRyS129IdmRwqLg` |
| List a List’s Members | GET | `/lists/{{listId}}/members` | `conn_mod_def::GJ40y7s_Y9o::e7Bjnh9eSBuSZqVadtwArQ` |
| Add or Update a List Member | PUT | `/lists/{{listId}}/members/{{subscriberHash}}` | `conn_mod_def::GJ40xedYCxI::MpQZreb0TF-m7RsAFuLoEA` |
| Archive a List Member | DELETE | `/lists/{{listId}}/members/{{subscriberHash}}` | `conn_mod_def::GJ40xk-WNA0::MWOKwpmuQ2GK6zjg9Fn1Kw` |
| Permanently Delete a List Member | POST | `/lists/{{listId}}/members/{{subscriberHash}}/actions/delete-permanent` | `conn_mod_def::GJ40x0kWb30::ld997ZLkRKWp19KcuczLXg` |
| Update a List Member | PATCH | `/lists/{{listId}}/members/{{subscriberHash}}` | `conn_mod_def::GJ40zTLAnNo::-oktMr_lQYyV1wtN8_1hlg` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template’s Default Content Sections | GET | `/templates/{{templateId}}/default-content` | `conn_mod_def::GJ401WnWr_I::tpaQefI3TmuNPfril23Pjg` |
| Get a Template's Information | GET | `/templates/{{templateId}}` | `conn_mod_def::GJ401EzB7AQ::Jq2ahKWHRsKI6hanHkXFQQ` |
| List Templates | GET | `/templates` | `conn_mod_def::GJ401OSRUlw::QWnX5Po4S1yg1Jk8LjydOg` |
| Create a Template | POST | `/templates` | `conn_mod_def::GJ401GRRJ8s::3ED8ViB1Rjy1PS696UMC3Q` |
| Delete a Template | DELETE | `/templates/{{templateId}}` | `conn_mod_def::GJ401ChdVas::3g_lrn70QPmPZlGbk0SVGQ` |
| Update a Template | PATCH | `/templates/{{templateId}}` | `conn_mod_def::GJ401WLop3g::sjkWZyzdSjm8EQnVfNvxPw` |

### BatchWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Batch Webhook | GET | `/batch-webhooks/{{batchWebhookId}}` | `conn_mod_def::GJ40r9ijMdE::QEeUrbJXRymoKRFVwLs0Jw` |
| List Batch Webhooks | GET | `/batch-webhooks` | `conn_mod_def::GJ40sIPuw2E::4EiiQt81RGK5CeVNSw6FoQ` |
| Add a Batch Webhook | POST | `/batch-webhooks` | `conn_mod_def::GJ40sAI4HSE::WtIJRq5JT-ehDyWckG3JnA` |
| Delete a Batch Webhook | DELETE | `/batch-webhooks/{{batchWebhookId}}` | `conn_mod_def::GJ40r8aqINQ::fn-sVfMIT7SOewh2dUIChg` |
| Update a Batch Webhook | PATCH | `/batch-webhooks/{{batchWebhookId}}` | `conn_mod_def::GJ40sH3S6q4::AmvM2N_6QEW347d27VWXPw` |

### CampaignFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign Folder | GET | `/campaign-folders/{{folderId}}` | `conn_mod_def::GJ40sIQJlYw::M6Aq_E7YS5OoDnKA1NYLCw` |
| List Campaign Folders | GET | `/campaign-folders` | `conn_mod_def::GJ40sSOGLEs::nTuO5CvcTN-cocgR6XryyQ` |
| Add a Campaign Folder | POST | `/campaign-folders` | `conn_mod_def::GJ40sKsscOA::uFSOhJ__RhuAn_3nXjfN2Q` |
| Delete a Campaign Folder | DELETE | `/campaign-folders/{{folderId}}` | `conn_mod_def::GJ40sH20-Vs::7_V7YCHjR5OcN1Hs1q7pIg` |
| Update a Campaign Folder | PATCH | `/campaign-folders/{{folderId}}` | `conn_mod_def::GJ40sRio2DA::HWu8vEb-Tt26bD906Zp1rA` |

### ConnectedSites

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connected Site | GET | `/connected-sites/{{connectedSiteId}}` | `conn_mod_def::GJ40tchFoG0::MQT5fNf5QDaOklJuv-jlOA` |
| List Connected Sites | GET | `/connected-sites` | `conn_mod_def::GJ40tYKbcn0::Y2pXbU9iSVyqxfBRi7Wqug` |
| Add a Connected Site | POST | `/connected-sites` | `conn_mod_def::GJ40tKBcobs::bkjV2eyAR62qnZ5JxRS_gw` |
| Delete a Connected Site | DELETE | `/connected-sites/{{connectedSiteId}}` | `conn_mod_def::GJ40tdzyGrw::uIvNaWwrQbGQgr3vecZ4Bg` |
| Verify a Connected Site’s Script Installation | POST | `/connected-sites/{{connectedSiteId}}/actions/verify-script-installation` | `conn_mod_def::GJ40tX79Gbs::XjlO468fSBWUZBKigcTiIw` |

### PromoRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Store’s Promo Rule | GET | `/ecommerce/stores/{{storeId}}/promo-rules/{{promoRuleId}}` | `conn_mod_def::GJ40vN4i5_s::rMLbUd2MQm6c3cF_Y4pubA` |
| List a Store’s Promo Rules | GET | `/ecommerce/stores/{{storeId}}/promo-rules` | `conn_mod_def::GJ40wBvW0Q8::7Ekb1b4cRj-74lKj4FIvbQ` |
| Add a Store Promo Rule | POST | `/ecommerce/stores/{{storeId}}/promo-rules` | `conn_mod_def::GJ40uWEMI9Q::0zG9yVm1SLOt4E2WqjYVww` |
| Delete a Store’s Promo Rule | DELETE | `/ecommerce/stores/{{storeId}}/promo-rules/{{promoRuleId}}` | `conn_mod_def::GJ40urOXCpA::BhzfRd4XTfiW4RhjpAwdNA` |
| Update a Store’s Promo Rule | PATCH | `/ecommerce/stores/{{storeId}}/promo-rules/{{promoRuleId}}` | `conn_mod_def::GJ40wV2_5vM::mLaPjYSvTFG8vqkZ6qShIg` |

### PromoCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Store Promo Rule Promo Code | GET | `/ecommerce/stores/{{storeId}}/promo-rules/{{promoRuleId}}/promo-codes/{{promoCodeId}}` | `conn_mod_def::GJ40vMepfE4::MmZivFvRRN-A8YocPdjedg` |
| List a Store Promo Rule’s Promo Codes | GET | `/ecommerce/stores/{{storeId}}/promo-rules/{{promoRuleId}}/promo-codes` | `conn_mod_def::GJ40vpyWQsg::EcPWqVxpQ32AqoGoATf3DA` |
| Add a Promo Code to a Store’s Promo Rule | POST | `/ecommerce/stores/{{storeId}}/promo-rules/{{promoRuleId}}/promo-codes` | `conn_mod_def::GJ40uOCxlVo::k-x5_lOoSgGfr2l1dGdhAQ` |

2 more PromoCodes actions are available through search.

This lists 90 of 282 actions. For anything not here, call `search_one_platform_actions` with platform `mailchimp-marketing`. The full catalog is at https://www.withone.ai/knowledge/mailchimp-marketing.

## When a call fails

The error comes from Mailchimp Marketing, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mailchimp-marketing

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
