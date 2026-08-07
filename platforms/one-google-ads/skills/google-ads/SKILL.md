---
name: google-ads
description: Google Ads is an online advertising platform that enables businesses to promote products or services through pay-per-click or cost-per-view campaigns across Google Search, YouTube, and partner sites. It offers real-time campaign management, audience targeting, and budget control to help advertisers reach relevant users and drive conversions. Read and write Google Ads data through One: experiments, batchjobs, customers, offlineuserdatajobs, customeroperations, productlinkinvitations and more, 173 actions with real parameter documentation. Use whenever the user asks to look something up in Google Ads, create or update a record there, or build code against the Google Ads API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: google-ads
  generated-from: one-knowledge-base
---

# Google Ads through One

Google Ads is an online advertising platform that enables businesses to promote products or services through pay-per-click or cost-per-view campaigns across Google Search, YouTube, and partner sites. It offers real-time campaign management, audience targeting, and budget control to help advertisers reach relevant users and drive conversions.

One exposes Google Ads through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `google-ads` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Google Ads is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Google Ads account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Experiments

| Action | Method | Path | Action id |
|---|---|---|---|
| Graduate an Experiment | POST | `/v23/{{experiment}}:graduateExperiment` | `conn_mod_def::GJ3rT3A-4l8::oDKtFaeGTcOuyC88Qqs7bQ` |
| Mutate a Customer’s Experiments | POST | `/experiments:mutate` | `conn_mod_def::GJ3rUQK7CCQ::-JcrlsiOT72nzvNUhVDE2Q` |
| Promote a Customer Experiment | POST | `/v23/{{resourceName}}:promoteExperiment` | `conn_mod_def::GJ3rUbp7xUE::oT9hIOexSzeYd8x6wQL5PA` |
| Schedule a Customer Experiment | POST | `/v23/{{resourceName}}:scheduleExperiment` | `conn_mod_def::GJ3rUoWzcKY::PcWpkqlASOy9ViWI7HtEOQ` |

### BatchJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Operations to a Batch Job (Customers) | POST | `/v23/{{resourceName}}:addOperations` | `conn_mod_def::GJ3rKFkRhpE::pxmyHA7fSUGNu9Af_EpC9g` |
| Mutate (Create/Remove) Batch Jobs for a Customer | POST | `/batchJobs:mutate` | `conn_mod_def::GJ3rKc3GSg0::aEVoAiNBRvakltxYNbVmqw` |
| Run a Customer Batch Job | POST | `/v23/{{resourceName}}:run` | `conn_mod_def::GJ3rKnKAA2M::wlyW-y3zQWaXVSLFV_Mk_Q` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Accessible Customers | GET | `/v23/customers:listAccessibleCustomers` | `conn_mod_def::GJ3raCaTHoo::g6gBvlkGRc-tsYa9r8xf_A` |
| Generate Suggested Targeting Insights for a Customer | POST | `` | `conn_mod_def::GJ3rXBY0XPQ::w5_NLRipQ2OHE4cMltCYpQ` |
| Mutate a Customer (Update Customer Settings) | POST | `` | `conn_mod_def::GJ3ram_RVP8::o98vMndnTeuId4_CzPOVOQ` |

### OfflineUserDataJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Operations to an Offline User Data Job (Customer) | POST | `/v23/{{resourceName}}:addOperations` | `conn_mod_def::GJ3rax5OtvQ::3zvEtJHtSyqRN5_0jyeD_g` |
| Create an Offline User Data Job (Customer) | POST | `/offlineUserDataJobs:create` | `conn_mod_def::GJ3ra84ALrk::c36BkfP2Snm7pTo4ljysZQ` |
| Run a Customer’s Offline User Data Job | POST | `/v23/{{resourceName}}:run` | `conn_mod_def::GJ3rbHdB4jo::XDhtGLvwRheraNbDJSulfQ` |

### CustomerOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer Operation | GET | `/v23/{{name}}` | `conn_mod_def::GJ3rbl-C0zY::NvGblTFPSBSRcWm48dLtZA` |
| Cancel a Customer Operation | POST | `/v23/{{name}}:cancel` | `conn_mod_def::GJ3rbRtg5sk::pRBtV1DdTA-cIVo2-fD_2A` |
| Delete a Customer Operation | DELETE | `/v23/{{name}}` | `conn_mod_def::GJ3rbcvV5Ro::s1hy9snGTyaW8R2JaErcJA` |

### ProductLinkInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Product Link Invitation for a Customer | POST | `/productLinkInvitations:create` | `conn_mod_def::GJ3rcR1kBeM::u5XRsdO6SpyTV7LfsTJhAA` |
| Remove a Customer’s Product Link Invitation | POST | `/productLinkInvitations:remove` | `conn_mod_def::GJ3rcd-i2OQ::Wn91MGmkT7uLVeQ3fTY0dg` |
| Update a Customer’s Product Link Invitation | POST | `/productLinkInvitations:update` | `conn_mod_def::GJ3rcowKMP0::_MNCJC05SjuwgJt-IkmlXQ` |

### Recommendations

| Action | Method | Path | Action id |
|---|---|---|---|
| Apply Recommendations for a Customer | POST | `/recommendations:apply` | `conn_mod_def::GJ3rdJg46LY::V0ljkDHJRyixz3vo4w-VFQ` |
| Dismiss Recommendations for a Customer | POST | `/recommendations:dismiss` | `conn_mod_def::GJ3rdTkrgbI::32d8uasCTmK3gzfGaBBa1Q` |
| Generate Recommendations for a Customer | POST | `/recommendations:generate` | `conn_mod_def::GJ3rdgAq3QM::51j7KVjyTUy97KFsft1beg` |

### YouTubeVideoUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a YouTube Video Upload for a Customer | POST | `/youTubeVideoUploads:create` | `conn_mod_def::GJ3rirZlCcs::K9-lDlllS66JkVqzub0Ekw` |
| Remove YouTube Video Uploads for a Customer | POST | `/youTubeVideoUploads:remove` | `conn_mod_def::GJ3rhfodD9o::hWB1I802TSmcGi_5hpcqZA` |
| Update a Customer’s YouTube Video Upload | POST | `/youTubeVideoUploads:update` | `conn_mod_def::GJ3rhqE-O7Q::0Q0bX999QXSuxVKgo80oTg` |

### DataLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Customer Data Link | POST | `/dataLinks:create` | `conn_mod_def::GJ3rS6cNIaQ::jenh1-TVSimsE3FaMA13xg` |
| Remove a Customer’s Data Link | POST | `/dataLinks:remove` | `conn_mod_def::GJ3rTFHN9O8::vk_MWchfR26-SIoRUUWexw` |
| Update a Customer’s Data Link | POST | `/dataLinks:update` | `conn_mod_def::GJ3rTQBNa1Y::wflzIcEjTzGFY26UxnBq2w` |

### AdGroupAds

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Ad Group Ads | POST | `/adGroupAds:mutate` | `conn_mod_def::GJ3rFejoLyM::86iMui3HQjG1x5sJQP6sPg` |
| Remove Automatically Created Assets from an Ad Group Ad | POST | `/v23/{{adGroupAd}}:removeAutomaticallyCreatedAssets` | `conn_mod_def::GJ3rFp7UjbY::b77h-Jl7QluKlC-nk5ouSQ` |

### AssetGenerations

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Images for a Customer | POST | `/assetGenerations:generateImages` | `conn_mod_def::GJ3rH_d8LOc::G5WVkY8mR7ula-BV6a_caA` |
| Generate Text Assets for a Customer | POST | `/assetGenerations:generateText` | `conn_mod_def::GJ3rIJnJ03A::3BLkwXekRtS-hBvxeKeSzA` |

### CampaignDrafts

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Campaign Drafts | POST | `/campaignDrafts:mutate` | `conn_mod_def::GJ3rM-fo1L4::fDqCCLpxQj2ap3qFhTcPaQ` |
| Promote a Customer’s Campaign Draft | POST | `/v23/{{campaignDraft}}:promote` | `conn_mod_def::GJ3rNKrNSyY::6HJkDQ8wRZKkiBETOaiD2Q` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Enable Performance Max Brand Guidelines for Campaigns | POST | `/campaigns:enablePMaxBrandGuidelines` | `conn_mod_def::GJ3rOBx3cTs::QgnoNKpxQIuJZCRWedU9Kg` |
| Mutate a Customer’s Campaigns | POST | `/campaigns:mutate` | `conn_mod_def::GJ3rOOCLn5o::V45nEFtDRkeAqP1vINPcuA` |

### Incentives

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Incentive Offer | GET | `/v23/incentives:fetchIncentive` | `conn_mod_def::GJ3riV25tEA::2Jb6-lLbQWiKunm6fde8Cw` |
| Apply an Incentive to a Customer (Selected Incentive) | POST | `/incentives/{{selectedIncentiveId}}:applyIncentive` | `conn_mod_def::GJ3rYhGwKQk::zXrc4FzTQjin_yVcHbTmZQ` |

### Operations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Customer’s Long-Running Operations | GET | `/v23/{{name}}` | `conn_mod_def::GJ3rbxwvMu8::uTEje0aQR56cWBQFcIffAA` |
| Wait for a Customer Operation to Complete | POST | `/v23/{{name}}:wait` | `conn_mod_def::GJ3rb8Jvvp8::K0r2s0EhSYGLsZE0yWn31w` |

### ProductLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Customer Product Link | POST | `/productLinks:create` | `conn_mod_def::GJ3rcy2vwIk::Ixzh0f0ZTLuqzc02zS6Riw` |
| Remove a Customer’s Product Link | POST | `/productLinks:remove` | `conn_mod_def::GJ3rc9eG9Nc::3Lpr5sHxTq6ZoPDhnTEw9A` |

### SmartCampaignSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Smart Campaign Setting’s Smart Campaign Status | GET | `/v23/{{resourceName}}:getSmartCampaignStatus` | `conn_mod_def::GJ3reyk3V40::wAM_A-uFRHCWFAzwBp_TCQ` |
| Mutate a Customer’s Smart Campaign Settings | POST | `/smartCampaignSettings:mutate` | `conn_mod_def::GJ3re-zj4h4::FKIWL7ynSWmfpHzRbKk5HA` |

### IdentityVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer’s Identity Verification | GET | `/getIdentityVerification` | `conn_mod_def::GJ3rXhoR2DI::nCh2tVn3TfyHl4T1A0gg6Q` |
| Start Identity Verification for a Customer | POST | `` | `conn_mod_def::GJ3rfJwaPMI::_4RREhqDTM6D8mZs48uKQQ` |

### GoogleAdsFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Google Ads Field | GET | `/v23/{{resourceName}}` | `conn_mod_def::GJ3rh-cfoDg::Nqbi3Oo8RZWTTJ_eEbkq7A` |
| Search Google Ads Fields | POST | `/v23/googleAdsFields:search` | `conn_mod_def::GJ3riKfJifs::0pdoVGE8SSWkYQVAZGjuGA` |

### AccountLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Account Link for a Customer | POST | `/accountLinks:create` | `conn_mod_def::GJ3rExLVwu4::rgSDkb2DSu-cbDb877UbMA` |
| Mutate a Customer’s Account Links | POST | `/accountLinks:mutate` | `conn_mod_def::GJ3rE_bcHDA::mxTmF6PPRDGbXh6EPc7fzA` |

### CustomerManagerLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Move a Customer’s Manager Link | POST | `/customerManagerLinks:moveManagerLink` | `conn_mod_def::GJ3rRc1_W7k::S__Rqp2jTCeFDKNcJ-oKpQ` |
| Mutate a Customer’s Customer Manager Links | POST | `/customerManagerLinks:mutate` | `conn_mod_def::GJ3rRoAb-Gk::P3kqarhdQRWWTdBfbX5xWw` |

### AdGroupAdLabels

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate Ad Group Ad Labels (Create/Remove) for a Customer | POST | `/adGroupAdLabels:mutate` | `conn_mod_def::GJ3rFQdHPto::U7sf7neHSm6Fb-zxMxQKaw` |

### AdGroupAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Ad Group Assets | POST | `/adGroupAssets:mutate` | `conn_mod_def::GJ3rF1htTE0::uss965cvTUm2mqVPhmQPlA` |

### AdGroupAssetSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Ad Group Asset Sets | POST | `/adGroupAssetSets:mutate` | `conn_mod_def::GJ3rGBDIWl0::bSWbRYjgTk2nA6fJHCvQ7A` |

### AdGroupBidModifiers

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Ad Group Bid Modifiers | POST | `/adGroupBidModifiers:mutate` | `conn_mod_def::GJ3rGNI5L2k::-9yU72Q0SueEYYiMya2eDQ` |

### AdGroupCriterionCustomizers

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s AdGroup Criterion Customizers | POST | `/AdGroupCriterionCustomizers:mutate` | `conn_mod_def::GJ3rGmdGBZM::6SPCoPEKSG2kmhtcJbrFAw` |

### AdGroupCriterionLabels

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate Ad Group Criterion Labels (for a Customer) | POST | `/adGroupCriterionLabels:mutate` | `conn_mod_def::GJ3rGxyktXM::FtWI9IVnS4W4F6t4ZjzvIQ` |

### AdGroupCustomizers

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Ad Group Customizers | POST | `/adGroupCustomizers:mutate` | `conn_mod_def::GJ3rG87aRxg::QOt-9qQwTteFOQuu28unGA` |

### AdGroupLabels

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Ad Group Labels | POST | `/adGroupLabels:mutate` | `conn_mod_def::GJ3rHJ8u35U::rYsbFjudQ3ykb63bhWYksg` |

### AdParameters

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Ad Parameters | POST | `/adParameters:mutate` | `conn_mod_def::GJ3rHicllR4::zQwAs8m0Sc6liE_Nz1MipQ` |

### AssetGroupAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Asset Group Assets | POST | `/assetGroupAssets:mutate` | `conn_mod_def::GJ3rIVfSW9U::qqx0Xo7jSjqhKRCJu77E7w` |

### AssetGroupListingGroupFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer's Asset Group Listing Group Filters | POST | `/assetGroupListingGroupFilters:mutate` | `conn_mod_def::GJ3rIhBFrOQ::BUemz-ZqSJa6VtjmX5Un6A` |

### AssetGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Asset Groups | POST | `/assetGroups:mutate` | `conn_mod_def::GJ3rIsFq7Qg::6_g-k0fhR5y_bji64kmRSQ` |

### AssetGroupSignals

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Asset Group Signals | POST | `/assetGroupSignals:mutate` | `conn_mod_def::GJ3rI4JOcY4::P9jTmMaDSIGu3QW5pMl3Zw` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Assets | POST | `/assets:mutate` | `conn_mod_def::GJ3rJEMRaS8::xgVCPXXOQZemRvF4MIsEVA` |

### AssetSetAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Asset Set Assets | POST | `/assetSetAssets:mutate` | `conn_mod_def::GJ3rJh7fUiQ::AiX6_2-xRJeDOcm1kQHxTA` |

### AssetSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Asset Sets | POST | `/assetSets:mutate` | `conn_mod_def::GJ3rJt49270::JnyZognFT6GhhngRdIVWTA` |

### Audiences

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate Audiences for a Customer | POST | `/audiences:mutate` | `conn_mod_def::GJ3rJ6Ltm2w::PgnrQsATRtm20NXsAO5tKA` |

### BatchJobResults

| Action | Method | Path | Action id |
|---|---|---|---|
| List Batch Job Results | GET | `/v23/{{resourceName}}:listResults` | `conn_mod_def::GJ3rKRXs57A::yF6YpZf6Sv6MRdM-5eb6aA` |

### BiddingDataExclusions

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Bidding Data Exclusions | POST | `/biddingDataExclusions:mutate` | `conn_mod_def::GJ3rKzaVyQk::K6bFD5nuR7CgRAvgEN7cCw` |

### BiddingSeasonalityAdjustments

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate Bidding Seasonality Adjustments (Customer) | POST | `/biddingSeasonalityAdjustments:mutate` | `conn_mod_def::GJ3rK_Br_Bk::PtAfeDjbQCCZq02FIVjXig` |

### BiddingStrategies

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Bidding Strategies | POST | `/biddingStrategies:mutate` | `conn_mod_def::GJ3rLLy9-zY::5NkjfnM-RbGiiD29JqwZVw` |

### CampaignAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Campaign Assets | POST | `/campaignAssets:mutate` | `conn_mod_def::GJ3rLiO2TIE::N2BdxMXkSp6MMj-8cQyVqg` |

### CampaignAssetSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Campaign Asset Sets | POST | `/campaignAssetSets:mutate` | `conn_mod_def::GJ3rLsy76K8::e1O9ncyxQv2P-6UUSG0rEQ` |

### CampaignBudgets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Campaign Budgets | POST | `/campaignBudgets:mutate` | `conn_mod_def::GJ3rMF9GoJI::Yu-Quew0S0KpBAXXwrN0Jw` |

### CampaignCriteria

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Campaign Criteria | POST | `/campaignCriteria:mutate` | `conn_mod_def::GJ3rMbeYt2M::Wtf6Mvv0SOG1Uk4HP6Xw6w` |

### CampaignCustomizers

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Campaign Customizers | POST | `/campaignCustomizers:mutate` | `conn_mod_def::GJ3rMnPxi-Q::2522CAfZSeu8FhCxntqPzQ` |

### CampaignGoalConfigs

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Campaign Goal Configs | POST | `/CampaignGoalConfigs:mutate` | `conn_mod_def::GJ3rNV26apA::Bwz5EZ5nRAuEm3rMIJR_pQ` |

### CampaignLabels

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate Campaign Labels for a Customer | POST | `/campaignLabels:mutate` | `conn_mod_def::GJ3rNrrEilQ::4GJPGUb6SJW1twnMrmybfg` |

### CampaignSharedSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Campaign Shared Sets | POST | `/campaignSharedSets:mutate` | `conn_mod_def::GJ3rOaLvYpg::86yKkLuiS5m-0tbcZH33Ug` |

### ConversionActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Conversion Actions | POST | `/conversionActions:mutate` | `conn_mod_def::GJ3rOlnbEHE::0uojHS8fRz65tTsmFBNGvA` |

### ConversionCustomVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Conversion Custom Variables | POST | `/conversionCustomVariables:mutate` | `conn_mod_def::GJ3rO1b6kA8::T67OHYIWSEeg1QtjR3u24Q` |

### ConversionValueRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Conversion Value Rules | POST | `/conversionValueRules:mutate` | `conn_mod_def::GJ3rPN1poMU::O58nknhWRiKnlmQ1RO34_A` |

### ConversionValueRuleSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Conversion Value Rule Sets | POST | `/conversionValueRuleSets:mutate` | `conn_mod_def::GJ3rPY6GaQI::Sd0Ooo2XQ-a-JOn4hV9HiA` |

### CustomAudiences

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Custom Audiences | POST | `/customAudiences:mutate` | `conn_mod_def::GJ3rPuSddy0::c6PQlpqQQyCbSbwUjPR6Lw` |

### CustomConversionGoals

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Custom Conversion Goals | POST | `/customConversionGoals:mutate` | `conn_mod_def::GJ3rP5khnyw::AMDg865rQea_y9Rdp2wRRQ` |

### CustomerAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Customer Assets | POST | `/customerAssets:mutate` | `conn_mod_def::GJ3rQEhA5-8::nbckNckZQ3WJloQ_IFRw7w` |

### CustomerCustomizers

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate a Customer’s Customer Customizers | POST | `/CustomerCustomizers:mutate` | `conn_mod_def::GJ3rQ4cinRI::B2Yf4sYHQGKdpU1CbR674g` |

### CustomerLabels

| Action | Method | Path | Action id |
|---|---|---|---|
| Mutate Customer Labels for a Customer | POST | `/customerLabels:mutate` | `conn_mod_def::GJ3rREVfNyU::QyPfYJWTQgGqk3pMYQNyyg` |

This lists 90 of 173 actions. For anything not here, call `search_one_platform_actions` with platform `google-ads`. The full catalog is at https://www.withone.ai/knowledge/google-ads.

## When a call fails

The error comes from Google Ads, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/google-ads

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
