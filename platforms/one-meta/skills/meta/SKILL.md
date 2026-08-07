---
name: meta
description: Meta builds technologies that help people connect, find communities, and grow businesses. Its ecosystem spans social media, VR/AR platforms, and digital advertising tools used by billions of users. Read and write Meta data through One: ads, customconversions, adcreatives, adsets, adspixel, campaigns and more, 61 actions with real parameter documentation. Use whenever the user asks to look something up in Meta, create or update a record there, or build code against the Meta API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: meta
  generated-from: one-knowledge-base
---

# Meta through One

Meta builds technologies that help people connect, find communities, and grow businesses. Its ecosystem spans social media, VR/AR platforms, and digital advertising tools used by billions of users.

One exposes Meta through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `meta` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Meta is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Meta account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Ads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad by ID | GET | `/v25.0/{{adId}}` | `conn_mod_def::GKRjsbyRDLw::X8_Xh1baRueYUh1TK5Lh_w` |
| List an Ad Account's Ads | GET | `/v25.0/act_{{adAccountId}}/ads` | `conn_mod_def::GKRjtAx7Qu0::hM4yPa5RQ6-A3Y_WvPq5mQ` |
| List an Ad Campaign's Ads | GET | `/{{adCampaignId}}/ads` | `conn_mod_def::GKRjuDp3WdU::tXTjMvlgTRymYyXUZnMZiQ` |
| List an Ad Set's Ads | GET | `/v25.0/{{adSetId}}/ads` | `conn_mod_def::GKRju3p-mcw::kwrNYPGGSeOqYbp1yDs80g` |
| Create an Ad in an Ad Account | POST | `/v25.0/act_{{adAccountId}}/ads` | `conn_mod_def::GKRjs-q-OtE::QyASq5pbQvWoPls3FG7D5w` |
| Create an Ad in an Ad Account | POST | `/act_{{adAccountId}}/ads` | `conn_mod_def::GKRjsHq1qOU::sXbCtK7eS_SU7Y3pWkr0mQ` |
| Delete an Ad | DELETE | `/{{adId}}` | `conn_mod_def::GKRjsGOAQxI::xK2s6ytBQnybqjvoU0oY0Q` |

### CustomConversions

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Ad Account's Custom Conversions | GET | `/act_{{adAccountId}}/customconversions` | `conn_mod_def::GKRjvQuVNyw::EoRQzGYHTDONAw3HGyzjag` |
| List an Ad Account's Custom Conversions | GET | `/v25.0/{{adAccountId}}/customconversions` | `conn_mod_def::GKRjvaL-8-o::ybuu5eeXS1qqV6JQUBgReQ` |
| Create a Custom Conversion for an Ad Account | POST | `/act_{{adAccountId}}/customconversions` | `conn_mod_def::GKRjvQqGTww::_ejg1UcmTcqogx8h8Zp2Ug` |
| Create a Custom Conversion for an Ad Account | POST | `/act_{{adAccountId}}/customconversions` | `conn_mod_def::GKRjvQgiVCo::VI6x_cDtRgyxR9o2-OToVA` |
| Delete a Custom Conversion | DELETE | `/{{customConversionId}}` | `conn_mod_def::GKRjvQG5lsA::YxLOvTr9RmWthje4bF49pw` |
| Update a Custom Conversion | POST | `/{{customConversionId}}` | `conn_mod_def::GKRjvSXenFk::ZEpHg55QQa2ooVwfPxc0Pw` |

### AdCreatives

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad Creative's Previews | GET | `/v25.0/{{creativeId}}/previews` | `conn_mod_def::GKRjutIWCc0::f9ASPZuXSWqsg5ZKdickYA` |
| Get an Ad Set's Ad Creatives | GET | `/v25.0/{{adSetId}}/adcreatives` | `conn_mod_def::GKRju2FS8Yo::IRDpKUCiTTaIU9qfKoKsXw` |
| List an Ad Account's Ad Creatives | GET | `/v25.0/act_{{adAccountId}}/adcreatives` | `conn_mod_def::GKRjs2dGZiU::gbNWM1y4T-OxgK3Xz2pV_A` |
| List an Ad's Ad Creatives | GET | `/v25.0/{{adId}}/adcreatives` | `conn_mod_def::GKRjsHT_cd0::Rwed1Lp0SgClVcba7XB7vw` |
| Create an Ad Account Ad Creative | POST | `/act_{{adAccountId}}/adcreatives` | `conn_mod_def::GKRjs2B1X1c::CpfvED1SQQyLNqtRzjJQUA` |

### AdSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad Set | GET | `/v25.0/{{adSetId}}` | `conn_mod_def::GKRjuq3L49g::rgoSrAOjRQmqi6dBQo4F-Q` |
| List an Ad Account's Ad Sets | GET | `/v25.0/act_{{adAccountId}}/adsets` | `conn_mod_def::GKRjtA75d28::X1WyjBOGRS-WJObKSRAgVQ` |
| Create an Ad Account's Ad Set | POST | `/v25.0/act_{{adAccountId}}/adsets` | `conn_mod_def::GKRjtItg_Vg::1fC_0mNKRdW3CEGLZ6Y_uQ` |
| Create an Ad Set for an Ad Account | POST | `/act_{{adAccountId}}/adsets` | `conn_mod_def::GKRjupKqPAc::rBMPuxbbSkqYMveJO8uIlg` |

### AdsPixel

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ads Pixel | GET | `/v25.0/{{adsPixelId}}` | `conn_mod_def::GKRjvIAkZY4::rFdGI0q2RyWD7RLuat8T7Q` |
| Get an Ads Pixel | GET | `/v25.0/{{pixelId}}` | `conn_mod_def::GKRjvIEbLLc::SssOjuZASUeY8wQrHHnceA` |
| Update an Ads Pixel | POST | `/{{adsPixelId}}` | `conn_mod_def::GKRjvIXIzi8::g0cgyEjmT-ucKBm1N4pVaQ` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad Account's Campaigns | GET | `/v25.0/act_{{adAccountId}}/campaigns` | `conn_mod_def::GKRjtkpaKrA::AfnwDGdzTOK2XVw71lDpMw` |
| Create an Ad Campaign for an Ad Account | POST | `/act_{{adAccountId}}/campaigns` | `conn_mod_def::GKRjtu7AsjY::2x_M5XeVSpOvswvbLq67YA` |
| Delete an Ad Campaign | DELETE | `/act_{{adAccountId}}/campaigns` | `conn_mod_def::GKRjtwNcMdY::MMQ-eTX2TGml8PKW11VF9w` |

### AdImages

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Ad Account's Ad Images | GET | `/v25.0/{{adAccountId}}/adimages` | `conn_mod_def::GKRjtBkFq7c::Z8-kZCSWS_OteX-lCJEP3w` |
| Create an Ad Account Ad Image | POST | `/act_{{adAccountId}}/adimages` | `conn_mod_def::GKRjs2LTpnw::BTpA7mzJSSiZ1R0ETSZFLg` |
| Delete an Ad Account Ad Image | DELETE | `/act_{{adAccountId}}/adimages` | `conn_mod_def::GKRjs2bpTNU::itP27CpzTQau4wa0w07hvw` |

### AdCreative

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad Creative | GET | `/v25.0/{{creativeId}}` | `conn_mod_def::GKRjuDxrabk::srCvdRNPS72UWTkJPgSFiQ` |
| Delete an Ad Creative | DELETE | `/{{adCreativeId}}` | `conn_mod_def::GKRjuBDd4pE::CeiA0j6CRKKfYjROMcfv2A` |
| Update an Ad Creative | POST | `/{{adCreativeId}}` | `conn_mod_def::GKRjunroeyA::ENVBk-w5RZmKS6aycfZOng` |

### AdCampaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad Campaign | GET | `/{{campaignId}}` | `conn_mod_def::GKRjtv0Sd4I::goSRTv4IRBO7WEJKHcvXZA` |
| Update an Ad Campaign | POST | `/{{campaignId}}` | `conn_mod_def::GKRjtvMjGD0::emHzvzuWRJSeGqJel4Qt2w` |

### AdSetInsights

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ad Set Insights | GET | `/v25.0/{{adSetId}}/insights` | `conn_mod_def::GKRjtmKNZ94::lw4-ZiXBROyCwJH0TM_uFg` |
| Get an Ad Set's Insights | GET | `/v25.0/{{adSetId}}/insights` | `conn_mod_def::GKRju8WDVxI::GkVWvsgxTUqgP89JMDQRjw` |

### AdAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ad Account for a Business | POST | `/{{businessId}}/adaccount` | `conn_mod_def::GKRjslcQ770::Nl161vuAT76pzA6Sa0c0rg` |
| Update an Ad Account | POST | `/act_{{adAccountId}}` | `conn_mod_def::GKRjs1tp3Dg::8qTbyc0fT4-Fz4eqoL5E8Q` |

### AdsPixels

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ad Account's Ads Pixel | POST | `/act_{{adAccountId}}/adspixels` | `conn_mod_def::GKRjvInn3Dg::EKsyDdiRR9CcQBeT1gkzUA` |
| Create an Ad Account's Ads Pixel | POST | `/act_{{adAccountId}}/adspixels` | `conn_mod_def::GKRjvH6akaY::iGDeWH4UR62NLHCPo-fneA` |

### AdSet

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Ad Set | DELETE | `/{{adSetId}}/` | `conn_mod_def::GKRjuoPTo1w::PH8kokxhSMGN683LMwMBoQ` |

### AdAccount

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad Account | GET | `/act_{{adAccountId}}` | `conn_mod_def::GKRjslOV51Q::-7D8kAo3TNGrj1rrZ6GhKg` |

### AdSetsInsights

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad Set's Insights | GET | `/v25.0/{{adSetId}}/insights` | `conn_mod_def::GKRjstPUYO8::hYOUhUt8QyOTIpenLf4zaQ` |

### AdAccountVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ad Account Video | POST | `/act_{{adAccountId}}/advideos` | `conn_mod_def::GKRjtRsW_dY::-DzRZc5aRdCUjqK0XPw4fQ` |

### Campaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ad Account Campaign | POST | `/v25.0/act_{{adAccountId}}/campaigns` | `conn_mod_def::GKRjtSKC8xo::Ksa89qY2RD2uKR7C1RsQ_w` |

### AdCampaignInsightsReportRun

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Ad Campaign Insights Report Run | POST | `/{{campaignId}}/insights` | `conn_mod_def::GKRjuJuTIlM::xk1yq9W8Ta2bhFBW6u9vWQ` |

### AsyncAdRequestSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ad Account Async Ad Request Set | POST | `/act_{{adAccountId}}/asyncadrequestsets` | `conn_mod_def::GKRjtRsz-rg::0f-GsL5QRla4GKdRdUHePA` |

### CustomAudiences

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Ad Account's Custom Audiences | GET | `/v25.0/act_{{adAccountId}}/customaudiences` | `conn_mod_def::GKRjtd2eu5o::P2jlSHeVTN-fFa7ph8NLpg` |

### AdPreviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ad Previews for an Ad | GET | `/v25.0/{{adId}}/previews` | `conn_mod_def::GKRjspcpp_w::Bs5S_EvBTEW5V2SpkgmVzw` |

### AdReportRun

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ad Account Insights Report Run | POST | `/act_{{adAccountId}}/insights` | `conn_mod_def::GKRjtj77d1E::y-KLC2foSmmccNlEpuDwHA` |

### AdInsightsReportRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Ad Insights Report Run for an Ad | POST | `/{{adId}}/insights` | `conn_mod_def::GKRjsRejG3o::D8ohE6Z1QgmMUbk3eqigFg` |

### AdSetInsightsReportRun

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ad Set Insights Report Run | POST | `/{{adSetId}}/insights` | `conn_mod_def::GKRju_4lHKw::Bo4u94RxTJ2-9RF6xCLS1g` |

### AdSetCampaignInsights

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad Set's Campaign Insights | GET | `/v25.0/{{adSetId}}/insights` | `conn_mod_def::GKRjufY5WX4::u1yZrxTiQjOW9sErp3ESaA` |

### AdAccountCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Ad Account Campaigns | DELETE | `/act_{{adAccountId}}/campaigns` | `conn_mod_def::GKRjtbi-fGc::Oh02yHYpQmyIrdrQ_bv6ng` |

### AdAccountAsyncBatchRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Ad Account Async Batch Request | POST | `/act_{{adAccountId}}/async_batch_requests` | `conn_mod_def::GKRjtRmTucg::iJk4umV3SCuAf0gcMQQ_Ag` |

### AdsPixelSharedAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Ad Account Association from an Ads Pixel or Custom Audience | DELETE | `/{{adsPixelId}}/shared_accounts` | `conn_mod_def::GKRjsntoIC8::aypDqcQ-QZGy7rEoykrF4Q` |

### AdSetActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad Set's Activities | GET | `/{{adSetId}}/activities` | `conn_mod_def::GKRju4Se78k::WZiUH735SMiBpUQlCzxjsw` |

### AdAccountUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Ad Account User | GET | `/v25.0/act_{{adAccountId}}` | `conn_mod_def::GKRjt5JPobs::HYKScLRbSb6lDhnaXRnbKg` |

### AdVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Ad Account's Ad Videos | DELETE | `/act_{{adAccountId}}/advideos` | `conn_mod_def::GKRjtR4GH6g::pKCdYT-RRby6p28vf3haGw` |

## When a call fails

The error comes from Meta, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/meta

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
