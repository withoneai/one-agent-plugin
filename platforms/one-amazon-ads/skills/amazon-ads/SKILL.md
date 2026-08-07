---
name: amazon-ads
description: Amazon Ads is an advertising platform that enables brands to promote their products across Amazon’s ecosystem, helping them reach shoppers through targeted ads, sponsored listings, and display campaigns. Read and write Amazon Ads data through One: targets, amcinstances, sdadgroups, sdbudgetrules, sdnegativetargets, posts and more, 792 actions with real parameter documentation. Use whenever the user asks to look something up in Amazon Ads, create or update a record there, or build code against the Amazon Ads API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: amazon-ads
  generated-from: one-knowledge-base
---

# Amazon Ads through One

Amazon Ads is an advertising platform that enables brands to promote their products across Amazon’s ecosystem, helping them reach shoppers through targeted ads, sponsored listings, and display campaigns.

One exposes Amazon Ads through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `amazon-ads` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Amazon Ads is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Amazon Ads account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Targets

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Targets | POST | `/adsApi/v1/create/targets` | `conn_mod_def::GJz4bC9HDZQ::wp0g1RjRSsqBO9LxKtJDWg` |
| Create Targets (RAS v1) | POST | `/ras/v1/targets` | `conn_mod_def::GJz4cBNhFOU::QUe0GJ2LQSitncNzXJxIxg` |
| Delete Targets (Bulk) | POST | `/adsApi/v1/delete/targets` | `conn_mod_def::GJz4bWBOWeg::8etlvFWiRYKG4yghqs6LwA` |
| Delete Targets (RAS v1) | POST | `/ras/v1/targets/delete` | `conn_mod_def::GJz4cKBHvU4::_V_fv6yYQQyDgjcAXP7rJQ` |
| List Targets (RAS v1) | POST | `/ras/v1/targets/list` | `conn_mod_def::GJz4cT6xjLs::YZCAgvxTT9OLLzcRH3Cj3Q` |
| Query Targets | POST | `/adsApi/v1/query/targets` | `conn_mod_def::GJz4b4wRZ84::4_GUEE1CTZSt6aD0TQTKEw` |
| Update Targets | POST | `/adsApi/v1/update/targets` | `conn_mod_def::GJz4csjzqMo::BXtU5CaoS0q51DG4oC2KTQ` |
| Update Targets (RAS v1) | PUT | `/ras/v1/targets` | `conn_mod_def::GJz4cdRiR7E::1oy23pPYR4KjKOzA91mS6A` |

### AmcInstances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an AMC Instance | GET | `/amc/instances/{{instanceId}}` | `conn_mod_def::GJz3ti1wZ04::IOK6Dj7xT1C59yDqxHaFkg` |
| Get an AMC Instance’s Collaboration Metadata | GET | `/amc/instances/{{instanceId}}/collaboration` | `conn_mod_def::GJz3J7THgiY::755AD0ipQ7SlXVbTgmHidg` |
| List AMC Instances | GET | `/amc/instances` | `conn_mod_def::GJz3tYnyyNY::pnphS0NAS0-s-MCfboAS8w` |
| Create an AMC Instance | POST | `/amc/instances` | `conn_mod_def::GJz3s4_6B94::DcnrSfWrR_ifW_B-ejG10A` |
| Delete an AMC Instance | DELETE | `/amc/instances/{{instanceId}}` | `conn_mod_def::GJz3tCLzN1s::2jrr9LwpSnS3MSmmGjaffQ` |
| List a Collaboration’s ID Namespaces in an AMC Instance | POST | `/amc/instances/{{instanceId}}/collaboration/idnamespaces/list` | `conn_mod_def::GJz3KmLGOVU::rYxiZWAIRqiU99wcyeDmYg` |
| Update an AMC Instance | PUT | `/amc/instances/{{instanceId}}` | `conn_mod_def::GJz3uUa_D0k::MyjtU-8YSvOenBq-2PTs3Q` |
| Update an AMC Instance's Customer AWS Account Metadata | POST | `/amc/instances/{{instanceId}}/updateCustomerAwsAccount` | `conn_mod_def::GJz3uIYW9Og::YoroJYS9T_O2vRiW4i9usw` |

### SdAdGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sponsored Display Ad Group | GET | `/sd/adGroups/{{adGroupId}}` | `conn_mod_def::GJz2lUJx2e0::NvFjKaV7S4ayjw-GHbu0TA` |
| Get a Sponsored Display Ad Group’s Extended Information | GET | `/sd/adGroups/extended/{{adGroupId}}` | `conn_mod_def::GJz2leWTxPY::5JDxB2YQRXasc6E4zxiM0A` |
| List Sponsored Display Ad Groups | GET | `/sd/adGroups` | `conn_mod_def::GJz2k__1LFA::jL2i_-faRfWARere9SzV6g` |
| List Sponsored Display Ad Groups (Extended Fields) | GET | `/sd/adGroups/extended` | `conn_mod_def::GJz2lK9raRg::Kc9zNiG-TnaVa7qwb-oXvw` |
| Archive a Sponsored Display Ad Group | DELETE | `/sd/adGroups/{{adGroupId}}` | `conn_mod_def::GJz2lnE8KMs::d5VznAO9RdS7foVfKS9NIQ` |
| Create Sponsored Display Ad Groups | POST | `/sd/adGroups` | `conn_mod_def::GJz2kwNJAa4::fu-V7hjgRgmSUlu1OPL7Vg` |
| Update Sponsored Display Ad Groups | PUT | `/sd/adGroups` | `conn_mod_def::GJz2lv-A_dE::ckm0LN2oQIGkTU4gxqprSA` |

### SdBudgetRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SD Budget Rule by ID | GET | `/sd/budgetRules/{{budgetRuleId}}` | `conn_mod_def::GJz28EwTVEM::n4apPJvpQeeh734xgpAxyQ` |
| Get an SD Budget Rule by ID | GET | `/sd/budgetRules/{{budgetRuleId}}` | `conn_mod_def::GJz2-cOxGCw::9N8VxvHaTkil2kgQC-gEmg` |
| List an Advertiser’s Sponsored Display Budget Rules | GET | `/sd/budgetRules` | `conn_mod_def::GJz278ETmC8::05uvokBPRZWr32P-MbNd4w` |
| List an Advertiser’s Sponsored Display Budget Rules | GET | `/sd/budgetRules` | `conn_mod_def::GJz2-R_OQXA::VkIQf-SiQ4ukq4IVuuVfkg` |
| Create Sponsored Display (SD) Budget Rules | POST | `/sd/budgetRules` | `conn_mod_def::GJz27k3gmkE::bXWgOoBoRPOWb6hgTBD-Kg` |
| Create Sponsored Display (SD) Budget Rules | POST | `/sd/budgetRules` | `conn_mod_def::GJz2999ljuE::_ji7Vje-Rf-Ko_lZq5vETw` |
| Update Sponsored Display (SD) Budget Rules | PUT | `/sd/budgetRules` | `conn_mod_def::GJz2-4rW_5s::rxciN-STRTO393Hi9TblpQ` |

### SdNegativeTargets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Negative Targeting Clause’s Extended Information (Sponsored Display) | GET | `/sd/negativeTargets/extended/{{negativeTargetId}}` | `conn_mod_def::GJz39mdLA7k::eWUMTHS0TuuZyxOLKwiwpA` |
| Get a Sponsored Display Negative Target by ID | GET | `/sd/negativeTargets/{{negativeTargetId}}` | `conn_mod_def::GJz39cy4N_I::nY_TeMh6RKGEeAHjSzvBVQ` |
| List Sponsored Display Negative Targeting Clauses | GET | `/sd/negativeTargets` | `conn_mod_def::GJz39PbgM1A::7kL-D01PSXO9krGXEPXL3A` |
| List Sponsored Display Negative Targeting Clauses (Extended Fields) | GET | `/sd/negativeTargets/extended` | `conn_mod_def::GJz39E9LsjQ::K8_hPHhdQ0mOl9Qyv1Btaw` |
| Archive a Sponsored Display Negative Targeting Clause | DELETE | `/sd/negativeTargets/{{negativeTargetId}}` | `conn_mod_def::GJz39wV9clM::bx54j2ItRJWs_ZRB7i-L_Q` |
| Create Sponsored Display Negative Targeting Clauses | POST | `/sd/negativeTargets` | `conn_mod_def::GJz386gXr48::eSPI0lhtRJeQsigRWGX3Qw` |
| Update Sponsored Display Negative Targeting Clauses | PUT | `/sd/negativeTargets` | `conn_mod_def::GJz395V_Gi4::9_UoeoMgRl-Qx22SeiLTXw` |

### Posts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Post | GET | `/bp/v2/posts/{{postId}}` | `conn_mod_def::GJz4EAJ6_6c::_Hre9VmiTfK4nB8W77LTxQ` |
| Create a Post | POST | `/bp/v2/posts` | `conn_mod_def::GJz4DfoAwHs::RNzw4sZTRZm-JJdpuM3utA` |
| List Posts (with Performance Metrics) | POST | `/bp/v2/posts/list` | `conn_mod_def::GJz4Dswuerg::CFbUmQavTTa1MDX8kmnuxw` |
| Submit a Post for Review | PUT | `/bp/v2/posts/{{postId}}/submitForReview` | `conn_mod_def::GJz4EvPsqEw::zJd289nmTBO8cgfdYmsS_g` |
| Unpublish a Post (Withdraw a Post) | PUT | `/bp/v2/posts/{{postId}}/unpublish` | `conn_mod_def::GJz4E6OH10w::qCItTXvqS8KsQzrL7tRgaw` |
| Update a Post’s Data | PUT | `/bp/v2/posts/{{postId}}` | `conn_mod_def::GJz4FDgXEy8::VhdotMB2RGSH39hq2sOD_g` |

### SdProductAds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sponsored Display Product Ad | GET | `/sd/productAds/{{adId}}` | `conn_mod_def::GJz4Gbrc8ac::-3DBxi1aSiiLK8Jct9j3tw` |
| Get Extended Information for a Sponsored Display Product Ad | GET | `/sd/productAds/extended/{{adId}}` | `conn_mod_def::GJz4GkP4ycA::7mPlHVElSDedIMAZ8P6zpA` |
| List Sponsored Display Product Ads | GET | `/sd/productAds` | `conn_mod_def::GJz4GI01ZcQ::Y0DB1x2wTXKxe1sMizfbBw` |
| Archive a Sponsored Display Product Ad | DELETE | `/sd/productAds/{{adId}}` | `conn_mod_def::GJz4Gs7O2r0::ZHElqEXaSF-BQ5wcOyyJ5g` |
| Create Sponsored Display Product Ads | POST | `/sd/productAds` | `conn_mod_def::GJz4F81Utgs::kzzv5uuRSM-e9iYJdt8Yyg` |
| Update Sponsored Display Product Ads (Batch) | PUT | `/sd/productAds` | `conn_mod_def::GJz4G21tJeA::Rs5mtpaCSNusoDwPpGj4Jg` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Report File (Redirect to S3) | GET | `/v2/reports/{{reportId}}/download` | `conn_mod_def::GJz4QYIpquU::jE4NN1oITp6arEJQsf-fmQ` |
| Download a Sponsored Ads Report (Redirect to S3) | GET | `/v2/reports/{{reportId}}/download` | `conn_mod_def::GJz4QhhCTUc::wvpJQNFJRQy2NkFEt8o98w` |
| Get a Report's Status | GET | `/v2/reports/{{reportId}}` | `conn_mod_def::GJz4RXU96pk::ZbwrXxYdSxWLiNbpemdmnQ` |
| Get a Report’s Status | GET | `/v2/reports/{{reportId}}` | `conn_mod_def::GJz4Q8LNCVE::8OBO1V3tQvy3EH2dDlRLUQ` |
| Create an Async Report Request | POST | `/reporting/reports` | `conn_mod_def::GJz2wTgY0Bs::4TOH6PBqQjyseV5F_gbNWg` |
| Delete an Async Report by ID | DELETE | `/reporting/reports/{{reportId}}` | `conn_mod_def::GJz2wc5rmV0::OLrUAxBxTDu1fona-6TiEQ` |

### AdGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Ad Groups | POST | `/adsApi/v1/create/adGroups` | `conn_mod_def::GJz2nGkLGiQ::pxzF3n7eTbmqrkUMHuIfmQ` |
| Delete Ad Groups | POST | `/adsApi/v1/delete/adGroups` | `conn_mod_def::GJz2nZV4-TY::-WZub7D4Tou9vJWazSMUng` |
| Delete Ad Groups (RAS v1) | POST | `/ras/v1/adGroups/delete` | `conn_mod_def::GJz2oNgjqIc::_OR6JSh8R-axCtGJl8aiBQ` |
| Query Ad Groups | POST | `/adsApi/v1/query/adGroups` | `conn_mod_def::GJz2n5X1ARg::vTDZpXoKTyiIcoBZZ9YzFA` |
| Update Ad Groups | POST | `/adsApi/v1/update/adGroups` | `conn_mod_def::GJz2orRh3q0::vTcD4gpeQxaZ98TR3tPCGA` |
| Update Ad Groups (RAS v1) | PUT | `/ras/v1/adGroups` | `conn_mod_def::GJz2oh78DGI::BB-nHuKzSCqqZ_htoyXh1w` |

### SdCampaignBudgetRules

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Sponsored Display Campaign’s Associated Budget Rules | GET | `/sd/campaigns/{{campaignId}}/budgetRules` | `conn_mod_def::GJz28NnhVeE::H7LQ7fAEScC9J4zZdxm7LQ` |
| List a Sponsored Display Campaign’s Associated Budget Rules | GET | `/sd/campaigns/{{campaignId}}/budgetRules` | `conn_mod_def::GJz2-lr6wpA::tm6B3A10STuCuViQwddKjg` |
| Associate Budget Rules to an SD Campaign | POST | `/sd/campaigns/{{campaignId}}/budgetRules` | `conn_mod_def::GJz27b_5XI4::xyB3WVrvQWmqqbJQSLQWfQ` |
| Associate Budget Rules to an SD Campaign | POST | `/sd/campaigns/{{campaignId}}/budgetRules` | `conn_mod_def::GJz29ySIB0A::at19vtPLSQCau0JUAI_l6g` |
| Disassociate a Budget Rule from a Sponsored Display Campaign | DELETE | `/sd/campaigns/{{campaignId}}/budgetRules/{{budgetRuleId}}` | `conn_mod_def::GJz27yvk8Oc::rWq9AoDnQgiKb9mIFztyvA` |
| Disassociate a Budget Rule from a Sponsored Display Campaign | DELETE | `/sd/campaigns/{{campaignId}}/budgetRules/{{budgetRuleId}}` | `conn_mod_def::GJz2-HEuFYI::1nHa10d6ThG_d1ZHTipY1g` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Campaigns | POST | `/adsApi/v1/create/campaigns` | `conn_mod_def::GJz3Ebb2RNw::edRoVwuBQI6dL8RiPlMDpw` |
| Create Campaigns (RAS v1) | POST | `/ras/v1/campaigns` | `conn_mod_def::GJz3G_DNe9w::izdd588vQAGNHVz3B-yq6w` |
| Delete Campaigns | POST | `/adsApi/v1/delete/campaigns` | `conn_mod_def::GJz3FNZv2lk::CMt5UX1-QeS_1pSszGsM9A` |
| Query Campaigns | POST | `/adsApi/v1/query/campaigns` | `conn_mod_def::GJz3G1307p4::HHwWcSGeRi6nJrQUGu4ITg` |
| Update Campaigns (Bulk) | POST | `/adsApi/v1/update/campaigns` | `conn_mod_def::GJz3H6tz3nA::P3qIwbIcRNW8H0QtC3RMhw` |
| Update Campaigns (RAS v1) | PUT | `/ras/v1/campaigns` | `conn_mod_def::GJz3HcHhgeM::RQa9rSbFS4G7pytYohyhww` |

### SdCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sponsored Display Campaign | GET | `/sd/campaigns/{{campaignId}}` | `conn_mod_def::GJz3GCd0DjA::FX7cS8XmQp6GZOSRsw25YQ` |
| Get a Sponsored Display Campaign’s Extended Information | GET | `/sd/campaigns/extended/{{campaignId}}` | `conn_mod_def::GJz3GLHGZYM::i0baPjpgRbuJz83GmGYs6w` |
| List Sponsored Display Campaigns | GET | `/sd/campaigns` | `conn_mod_def::GJz3FvaQ7Rs::J4bWxUmcSEq4CFE9gsXHlA` |
| List Sponsored Display Campaigns (Extended Fields) | GET | `/sd/campaigns/extended` | `conn_mod_def::GJz3F5zT_II::9fP0FpVaTH-vAOvtyJEKjQ` |
| Create Sponsored Display Campaigns | POST | `/sd/campaigns` | `conn_mod_def::GJz3EkXTedc::yJNbC7QLTJO6WC1H64AHFQ` |
| Update Sponsored Display Campaigns (Bulk) | PUT | `/sd/campaigns` | `conn_mod_def::GJz3IDlXgNA::F8KjRMwXR4iIZfksCGhB1g` |

### FrequencyGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Frequency Group (v1) | GET | `/frequencyGroups/v1/{{frequencyGroupId}}` | `conn_mod_def::GJz3knEXsoM::WyATLlrfQguV56PHaZc0Sg` |
| Create a Frequency Group (v1) | POST | `/frequencyGroups/v1` | `conn_mod_def::GJz3kbfpHBY::z1enHvLqSLqsLjw8VY4aig` |
| List a DSP Advertiser’s Campaign/Frequency Group Associations | POST | `/frequencyGroups/v1/campaigns/list` | `conn_mod_def::GJz3lektvdw::kk9OxB6VRz2xDrukfv9E7w` |
| List Advertisers’ Frequency Group Associations (v1) | POST | `/frequencyGroups/v1/advertisers/list` | `conn_mod_def::GJz3lUmL35Q::RrBAJoj-T4qmMGC7wkqUzQ` |
| List Frequency Groups | POST | `/frequencyGroups/v1/list` | `conn_mod_def::GJz3kycBUM0::peM5pedhTYicPO6RjXiuQA` |
| Update a Frequency Group | PATCH | `/frequencyGroups/v1/{{frequencyGroupId}}` | `conn_mod_def::GJz3k86JOKI::it1M15PuRke9TKx--9phqg` |

### PartnerOpportunities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Partner Opportunity Data File Redirect URL | GET | `/partnerOpportunities/{{partnerOpportunityId}}/file` | `conn_mod_def::GJz4BbgEHGw::D3FGLsCjR3ittOAjLtkmMg` |
| List Partner Opportunities | GET | `/partnerOpportunities` | `conn_mod_def::GJz4BlBH0rc::C369sdtYQqODftOI9XENKA` |
| Summarize a Partner’s Opportunities | GET | `/partnerOpportunities/summary` | `conn_mod_def::GJz4Bv3uGrY::tANX1TafQ_iSd5oUOZD4SA` |
| Apply Recommendations for a Partner Opportunity | POST | `/partnerOpportunities/{{partnerOpportunityId}}/apply` | `conn_mod_def::GJz4BS6ZsyY::ohbWTDS6TOKHflYq4q6YFQ` |
| Get a Partner Opportunity’s Application Status | POST | `/partnerOpportunities/{{partnerOpportunityId}}/applicationStatus` | `conn_mod_def::GJz4BKC3Uq0::PzX2GNWVT1GvhJPHAtTTuA` |

This lists 90 of 792 actions. For anything not here, call `search_one_platform_actions` with platform `amazon-ads`. The full catalog is at https://www.withone.ai/knowledge/amazon-ads.

## When a call fails

The error comes from Amazon Ads, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/amazon-ads

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
