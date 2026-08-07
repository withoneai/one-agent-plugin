---
name: similarweb
description: Similarweb is a digital data intelligence platform that provides market, competitor, traffic, search, app, sales, and retail insights through analytics tools and APIs, allowing businesses to research demand, benchmark performance, enrich leads, and monitor digital trends in real time. Read and write Similarweb data through One: website, keywords, appdownloads, activeusers, appengagement, s3integration and more, 148 actions with real parameter documentation. Use whenever the user asks to look something up in Similarweb, create or update a record there, or build code against the Similarweb API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: similarweb
  generated-from: one-knowledge-base
---

# Similarweb through One

Similarweb is a digital data intelligence platform that provides market, competitor, traffic, search, app, sales, and retail insights through analytics tools and APIs, allowing businesses to research demand, benchmark performance, enrich leads, and monitor digital trends in real time.

One exposes Similarweb through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `similarweb` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Similarweb is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Similarweb account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Website

| Action | Method | Path | Action id |
|---|---|---|---|
| Also Visited Mobile Audience Interests for a Website | GET | `/v4/website/{{domainName}}/mobile-audience-interests/also-visited` | `conn_mod_def::GMklwpfcoDA::c3eSilADSByVX_aKdMDFow` |
| Desktop Unique Visitors for a Website | GET | `/v1/website/{{domainName}}/unique-visitors/desktop_unique_visitors` | `conn_mod_def::GMklz4OmW4A::onvMuFxuQ5e5wRD4-oBDWQ` |
| Get Mobile Traffic by Country for a Website | GET | `/v4/website/{{domainName}}/geo/mobile-traffic-by-country` | `conn_mod_def::GMklv3OwM8g::n8BcSKqYSUGrQhuH9w3gPw` |
| Get Mobile Web Bounce Rate for a Website Domain | GET | `/v2/website/{{domainName}}/mobile-web/bounce-rate` | `conn_mod_def::GMklwy21X8A::dVta_jIhQ0i3gLFQHSfwaw` |
| Get Mobile Web Page Views for a Website | GET | `/v2/website/{{domainName}}/mobile-web/page-views` | `conn_mod_def::GMklw_DU5Zg::d3oTFJvwQiuJY3oLhFOWew` |
| Get Mobile Web Visits for a Website Domain | GET | `/v2/website/{{domainName}}/mobile-web/visits` | `conn_mod_def::GMklxBzIj2A::L0O4bRW_QMm0S7-UUxtVIQ` |
| Get Outgoing Ads Ad Networks for a Website | GET | `/v4/website/{{domainName}}/traffic-sources/outgoing-ads-adnetworks` | `conn_mod_def::GMklzZoKApg::Pd-RoGLnT8u1L6IEmDIeSQ` |
| Organic Outgoing Referrals for a Website | GET | `/v4/website/{{domainName}}/traffic-sources/outgoing-referrals` | `conn_mod_def::GMklzbTEyJg::AN74yf5SRAmEt06s5AVtsA` |
| Page Views Using Total Traffic and Engagement | GET | `/v1/website/{{domainName}}/total-traffic-and-engagement/page-views` | `conn_mod_def::GMklx1fnU9A::CCzKID7YQ6WwK_0tJAHnsw` |
| Paid Search Competitors for a Website | GET | `/v4/website/{{domainName}}/search-competitors/paidsearchcompetitors` | `conn_mod_def::GMklxYexEhA::-0j2nvW1TWyVqU9JPBMheg` |
| Top Sites Mobile Using Website Category | GET | `/v4/website/{{category}}/topsites/mobile` | `conn_mod_def::GMklu0LP7-A::B7XPwTjVQzSCpNEy4-imcA` |
| Top Sites Total Using Website | GET | `/v4/website/{{category}}/topsites/total` | `conn_mod_def::GMkluyICjWg::snJZre6uT2irhpUwjeFgjg` |

### Keywords

| Action | Method | Path | Action id |
|---|---|---|---|
| Aggregated Overview Using Keywords Overview | GET | `/v4/keyword-search/keywords/overview/aggregated` | `conn_mod_def::GMklwfAqsbA::VPqd5n0TTo2e4rJZMMKYrw` |
| Get Keyword Analysis Overview | GET | `/v4/keywords/{{keyword}}/analysis/overview` | `conn_mod_def::GMkluToaNbA::3_MnmwgZTXez9ckLKpng4g` |
| Get Landing Pages for Keywords | GET | `/v4/keywords/landing-pages` | `conn_mod_def::GMklweHvgXA::JLs-3PqjRxGqhnecAeTREg` |
| Get SERP Players for a Keyword | GET | `/v4/keywords/{{keyword}}/analysis/competitors` | `conn_mod_def::GMkluWt0XXA::GZ3EzvarT_OCN9JUsDNWAQ` |

### AppDownloads

| Action | Method | Path | Action id |
|---|---|---|---|
| App Downloads Using Apple | GET | `/v5/apps/apple/downloads` | `conn_mod_def::GMkluVWLV0g::vyVxYW1vRMqr-sTWMlZSjQ` |
| Get App Downloads | GET | `/v1/app/{{store}}/{{appId}}/engagement/downloads` | `conn_mod_def::GMklvS5mjkA::fj7UQqPlR0a5f3H_AU8IYg` |
| Get App Downloads for Android | GET | `/v5/apps/google/downloads` | `conn_mod_def::GMklwTeM2nA::FKdEOaiYRS6YaHFRBG7A7w` |

### ActiveUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Active Users for Google Apps | GET | `/v5/apps/Google/active-users` | `conn_mod_def::GMklwEUcM6g::WmPSshhxSd6yRwU8O6o7eg` |
| Get Daily Active Users for an iOS App | GET | `/v4/app/Apple/{{appId}}/active-users/daily-active-users` | `conn_mod_def::GMklueaGbDg::QcrEQSLqSS2ImTRUz-lk3A` |
| Weekly Active Users Using Google Active Users | GET | `/v4/app/Google/{{appId}}/active-users/weekly-active-users` | `conn_mod_def::GMklwd4iZEA::6rGAXXJPQwyC7VcKkTSkVg` |

### AppEngagement

| Action | Method | Path | Action id |
|---|---|---|---|
| Average Sessions Time Using Google App Engagement | GET | `/v1/app/Google/{{appId}}/engagement/average-sessions-time` | `conn_mod_def::GMklwRWDE-A::dF2caRYtRii064iwHH4FoA` |
| Get Store Downloads (Unique Installs) for an App | GET | `/v1/app/{{store}}/{{appId}}/engagement/unique-installs` | `conn_mod_def::GMklvenC7Sg::ySRumnWbS5OYF8C4y0A45g` |
| Total Sessions Time Using Google App Engagement | GET | `/v1/app/Google/{{appId}}/engagement/total-sessions-time` | `conn_mod_def::GMklwVoqzpg::ZGyQy0MdT-6V7CN0D0bU1w` |

### S3Integration

| Action | Method | Path | Action id |
|---|---|---|---|
| Renew S3 Integration | POST | `/v3/batch/s3-connector/renew` | `conn_mod_def::GMkl0KJyATA::TVWjdKGsRGyqDRpjt6MIxg` |
| Revoke S3 Integration | POST | `/v3/batch/s3-connector/revoke` | `conn_mod_def::GMkl0KmrwFg::vKRArj3fRhCAYT0HtRNpbg` |
| Set Up S3 Integration | POST | `/v3/batch/s3-connector/setup` | `conn_mod_def::GMkl0V6zZQA::y8KH8uwrR_eBhCJslyMPQQ` |

### AudienceInterests

| Action | Method | Path | Action id |
|---|---|---|---|
| Also Visited Audience Interests for a Website | GET | `/v4/website/{{domainName}}/audience-interests/also-visited` | `conn_mod_def::GMklugViYtg::Mc_8CJBRSX2o00I1iyZHDw` |
| Get Also Visited Audience Interests for a Website | GET | `/v4/website/{{domainName}}/total-audience-interests/also-visited` | `conn_mod_def::GMklxq8bkOA::k8xOPtvYSU-dPRsp5kHP6Q` |

### PagesPerVisit

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Pages Per Visit for a Website | GET | `/v1/website/{{domainName}}/traffic-and-engagement/pages-per-visit` | `conn_mod_def::GMklx_luzGA::lH0Wpk9qQMSd31ScpbHTdA` |
| Pages Per Visit Using Mobile Web | GET | `/v2/website/{{domainName}}/mobile-web/pages-per-visit` | `conn_mod_def::GMklw0Hm7gA::sASTOOjSQzuMd0lDF31hSw` |

### WebsiteAverageVisitDuration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Average Visit Duration for a Website | GET | `/v1/website/{{domainName}}/traffic-and-engagement/average-visit-duration` | `conn_mod_def::GMklyAIUIag::V1XsByQhTWOmMSJiv3D_9w` |
| Get Mobile Web Average Visit Duration for a Website | GET | `/v2/website/{{domainName}}/mobile-web/average-visit-duration` | `conn_mod_def::GMklw1Wpekg::VNPKPMuwQkeqRYLgpnKQcw` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Total Marketing Channels for a Segment | GET | `/v1/segment/{{segmentId}}/total-marketing-channels/query` | `conn_mod_def::GMklxmqG_IA::iuU__IcQTKCTRC41PugKbQ` |
| Query Total Traffic and Engagement for a Segment | GET | `/v1/segment/{{segmentId}}/total-traffic-and-engagement/query` | `conn_mod_def::GMklx1VbWZA::BeyAVxT1SvmZa6fYJVBWbQ` |

### WebsiteBounceRate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bounce Rate for a Website | GET | `/v1/website/{{domainName}}/total-traffic-and-engagement/bounce-rate` | `conn_mod_def::GMklxncE9DA::oTgBNYopRcS4naYNeYEedA` |
| Get Desktop Bounce Rate for a Website | GET | `/v1/website/{{domainName}}/traffic-and-engagement/bounce-rate` | `conn_mod_def::GMklzH4WriA::A798oIV6Qt-gbCqlKNXnNg` |

### GcsIntegration

| Action | Method | Path | Action id |
|---|---|---|---|
| Renew GCS Integration | POST | `/v4/batch/gcs-connector/renew` | `conn_mod_def::GMkl0eAQkRg::bDlkE6blRn6bTjkraX3qGw` |
| Revoke GCS Integration | POST | `/v4/batch/gcs-connector/revoke` | `conn_mod_def::GMkl0uFevrg::12PsdC5IRqK0ZEP_0ez5jA` |

### IosAppActiveUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get iOS App Active Users | GET | `/v5/apps/apple/active-users` | `conn_mod_def::GMkluUyg3sg::2889v4mbRsGj0st2fXZysQ` |

### AppleAppSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Apple App Sessions | GET | `/v5/apps/apple/sessions` | `conn_mod_def::GMkluVrtQWA::VBkumRcJS1-VMNu9vQgl1w` |

### AppRetention

| Action | Method | Path | Action id |
|---|---|---|---|
| Get App Retention for an App | GET | `/v1/app/{{store}}/{{appId}}/appretention` | `conn_mod_def::GMklueQPdOA::h_7r3-F4SbSkEBXTyPtjIw` |

### WeeklyActiveUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Weekly Active Users for an iOS App | GET | `/v4/app/Apple/{{appId}}/active-users/weekly-active-users` | `conn_mod_def::GMklugYUNkg::_Hbfia5BS7aLBXPssvLKXg` |

### WebsiteAudience

| Action | Method | Path | Action id |
|---|---|---|---|
| Get New vs. Returning All Traffic for a Website | GET | `/v1/website/{{domainName}}/audience/total-new-vs-returning` | `conn_mod_def::GMklug_gxbA::dBSaeZemRWWm9ZUd6_IOqg` |

### RequestValidate

| Action | Method | Path | Action id |
|---|---|---|---|
| Request Validate | POST | `/batch/v4/request-validate` | `conn_mod_def::GMkluoch4tA::hQHYIyz5Qj-FpxXRf4fpTA` |

### GcsTable

| Action | Method | Path | Action id |
|---|---|---|---|
| Revoke GCS Table | POST | `/batch/v4/revoke-table` | `conn_mod_def::GMkluovNyyg::59lMl-rsTcmubiDLlYESOw` |

### Integration

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Table Using Batch v4 Integration | POST | `/batch/v4/integration/create-table` | `conn_mod_def::GMkluo4cwFA::WrKkdvprT0e-u5FRd4-fJQ` |

### GoogleCloudStorageIntegration

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Up Google Cloud Storage Integration | POST | `/batch/v4/gcs-connector/setup` | `conn_mod_def::GMklupDAzqA::eWgNVW0vT9uQuJ86lp3HvQ` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Request Report | POST | `/batch/v4/request-report` | `conn_mod_def::GMklupgUhjg::YN6bkYFGSFmWzaGF3knCQQ` |

### WebsiteIndustryRank

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Industry Rank for a Website | GET | `/v1/website/{{domainName}}/category-rank/category-rank` | `conn_mod_def::GMkluwtztgg::4Wy_mSWjQjKYPdvTwvDL-g` |

### Websites

| Action | Method | Path | Action id |
|---|---|---|---|
| Branded Keywords Distribution Using Website Analysis Overview | GET | `/v4/websites/analysis/overview/branded-keywords-distribution` | `conn_mod_def::GMkluyO9IjA::_wJdU83sTeewDK4LsDOPlA` |

### TopSites

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Top Sites by Category for Desktop | GET | `/v4/website/{{category}}/topsites/desktop` | `conn_mod_def::GMkluzBJnLg::JSpyEAs4QTu7R_waF704sg` |

### AppDemographicsOverTimeByGender

| Action | Method | Path | Action id |
|---|---|---|---|
| Get App Demographics Over Time by Gender | GET | `/v4/app/{{appId}}/demographics/gender` | `conn_mod_def::GMklu8fuLyA::MwaJK-0MRzWSvLvfKerJYA` |

### DeduplicatedAudiences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Deduplicated Audiences for a Website | GET | `/v1/website/{{domainName}}/dedup/deduplicated-audiences` | `conn_mod_def::GMklu8jqnDg::v12LJs9TTL2sAAHAYnTQKA` |

### ConversionAnalysis

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Conversion Analysis for a Conversion Segment | GET | `/v1/segment/{{conversionSegmentId}}/conversion-analysis/query` | `conn_mod_def::GMklu82kFTg::WaIQdYZCRw-_UW_DwPUZVg` |

### AppDemographicsOverTimeByAge

| Action | Method | Path | Action id |
|---|---|---|---|
| Get App Demographics Over Time by Age | GET | `/v4/app/{{appId}}/demographics/age` | `conn_mod_def::GMklu9ife_g::GtxCiiSHS3qk94446yCU-Q` |

### WebsiteCountryRank

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Country Rank for a Website | GET | `/v1/website/{{domainName}}/country-rank/country-rank` | `conn_mod_def::GMklu9v5k9g::3QdlLP2WQJ2XOofCgscZyg` |

### AppDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get App Details | GET | `/v1/app/{{store}}/{{appId}}/Details/details` | `conn_mod_def::GMklvFAwoWA::7SOcsVVoQNuyD5zAyzWrFg` |

### CompanyDesktopTrafficAndEngagement

| Action | Method | Path | Action id |
|---|---|---|---|
| Desktop Traffic and Engagement Query for a Company | GET | `/v1/company/{{companyId}}/desktop-traffic-and-engagement/query` | `conn_mod_def::GMklvHWA2JA::uw0MZ8uHROyJlTfiznSi8w` |

### WebsiteDemographicsAge

| Action | Method | Path | Action id |
|---|---|---|---|
| Age Using Demographics v2 for a Website | GET | `/v4/website/{{domainName}}/demographics_v2/age` | `conn_mod_def::GMklvI3FBPg::Xdrwh3AvQ1ipnidg3GxhWQ` |

### WebsiteGenderDemographicsTotal

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Gender Demographics Total for a Website | GET | `/v4/website/{{domainName}}/demographics_v2/gender` | `conn_mod_def::GMklvJ-YkoA::RKxa5FjuS6m5HdgOBvTxUw` |

### Demographics20GroupsTotal

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Demographics 2.0 Groups Total for a Website | GET | `/v4/website/{{domainName}}/demographics_v2/groups` | `conn_mod_def::GMklvKYtkeA::NIYWUdxxR6CuNRMLP5UG2g` |

### DailyActiveUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Daily Active Users for an App | GET | `/v1/app/{{store}}/{{appId}}/engagement/dau` | `conn_mod_def::GMklvSDn47g::Dj0XFqKIQsKr1nZJE7xhug` |

### MonthlyActiveUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Monthly Active Users for an App | GET | `/v1/app/{{store}}/{{appId}}/engagement/mau` | `conn_mod_def::GMklvST8ALA::DmaLVYAgRX6mFxBBtbOv9A` |

### CurrentInstallsUsingAppEngagement

| Action | Method | Path | Action id |
|---|---|---|---|
| Current Installs Using App Engagement | GET | `/v1/app/{{store}}/{{appId}}/engagement/current-installs` | `conn_mod_def::GMklvSrzulg::i68s0AdFT_G_syW7bFPUuQ` |

### DailyStickiness

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Daily Stickiness for an App | GET | `/v1/app/{{store}}/{{appId}}/engagement/daily-stickiness` | `conn_mod_def::GMklvU_8fJA::bb-zX855TYGDe9ei_1izzg` |

### AppIds

| Action | Method | Path | Action id |
|---|---|---|---|
| Find App IDs by App Name Prefix | GET | `/v1/app/{{store}}/find-app-name/` | `conn_mod_def::GMklvcvdSSA::iCE1DJ-0RPK4-2QF-pNS1w` |

### WebsiteGeneralData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get General Data for a Website | GET | `/v1/website/{{domainName}}/general-data/all` | `conn_mod_def::GMklvdEo_6A::iLZmKR8FRxWajPgE8-3-0Q` |

### WebsiteDescription

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Website's Description | GET | `/v1/website/{{domainName}}/general-data/description` | `conn_mod_def::GMklveQuZgg::wc4yq4qqQ-ebEZs-EId8hA` |

### AppCategoryGoogleStoreRankTopApps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Top Apps Using AppCategory Google StoreRank | GET | `/v4/appCategory/Google/StoreRank/top-apps/` | `conn_mod_def::GMklvkdg8fA::rLoPAzy_QRi-K0Wfryy2GA` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Companies | GET | `/v1/company/traffic-and-engagement/describe/` | `conn_mod_def::GMklvsmsAHg::6Me2Pd25QPupWLwlRZMcAQ` |

### CustomSegments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Segments | GET | `/v1/segment/traffic-and-engagement/describe/` | `conn_mod_def::GMklvtHzJHg::pnhA2ap4Rk6Os4x2L4OsuQ` |

### TopApps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Top Apps Using AppCategory Rank StoreRank | GET | `/v4/appCategory/rank/StoreRank/top-apps/` | `conn_mod_def::GMklvtbWImA::3olrnTc1Syy879EerBSpCQ` |

### AudienceOverlap

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Audience Overlap for Desktop Websites | GET | `/v1/website/audience/overlap/` | `conn_mod_def::GMklvtbuVbA::jdBkAiBNSGyIp7ibfa02cg` |

### ConversionSegments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Conversion Segments | GET | `/v1/segment/conversion-analysis/describe/` | `conn_mod_def::GMklvt7AFug::_qjycV3YSkmStlh1Pe6b-A` |

### WebsiteTrafficByCountry

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Total Traffic by Country for a Website | GET | `/v4/website/{{domainName}}/geo/total-traffic-by-country` | `conn_mod_def::GMklv2d04pg::mkafl2W6RyeZA0Y8812k9Q` |

### SimilarRankTopSites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Top SimilarRank Sites | GET | `/v1/similar-rank/top-sites/` | `conn_mod_def::GMklv25lubA::D7ituS4iTCil3sTgsH_drw` |

### AppCategoryGoogleUsageRank

| Action | Method | Path | Action id |
|---|---|---|---|
| Top Apps Using App Category Google Usage Rank | GET | `/v4/appCategory/Google/UsageRank/top-apps/` | `conn_mod_def::GMklv5kc4CA::Y2nalS0eRl6l1lHENGhcoQ` |

### Geography

| Action | Method | Path | Action id |
|---|---|---|---|
| Traffic by Country Using Website Geography Desktop | GET | `/v4/website/{{domainName}}/geo/traffic-by-country` | `conn_mod_def::GMklv7c-mvg::77Eas-gJQV6FAcw1yWyf8w` |

### AppDemographicsByGender

| Action | Method | Path | Action id |
|---|---|---|---|
| Get App Demographics by Gender for a Google App | GET | `/v1/app/Google/{{appId}}/demographics/gender` | `conn_mod_def::GMklwDw4Ykg::M0V5C7VbQDeQCnPv-z0gSQ` |

### AppDemographicsAge

| Action | Method | Path | Action id |
|---|---|---|---|
| Get App Demographics by Age for a Google App | GET | `/v1/app/Google/{{appId}}/demographics/age` | `conn_mod_def::GMklwEbE_cA::a5zxwEEfTN-5hZRduTQt_w` |

### WebsiteGlobalRank

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Rank Using Website Global Rank | GET | `/v1/website/{{domainName}}/global-rank/global-rank` | `conn_mod_def::GMklwG2R-YA::tjpt_fRbSrS6Q7oLPpLgIw` |

### AppAudienceInterests

| Action | Method | Path | Action id |
|---|---|---|---|
| Also Used Apps for an App on Google Play | GET | `/v4/app/Google/{{appId}}/audience-interests/also-used-apps` | `conn_mod_def::GMklwIQEUAA::qDFGq4RDQsadop2oWoVnsw` |

### AppSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get App Sessions for Android Apps from Google | GET | `/v5/apps/Google/sessions` | `conn_mod_def::GMklwQoi8BA::Eh0kNTzoT3awEaID5QNWMg` |

### SessionsPerUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sessions Per User Using Google Engagement | GET | `/v1/app/Google/{{appId}}/engagement/sessions-per-user` | `conn_mod_def::GMklwRJt-Cg::Q-jv5ppGTk2GtWtC0kbFwQ` |

### CustomIndustryEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe Custom Industry Entities | GET | `/v5/industry-analysis/custom-industries/describe` | `conn_mod_def::GMklweM188A::4kEN3ruMSEiw0h_ABnpKLw` |

### WebsiteKeywords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Website Keywords | GET | `/v4/website-analysis/keywords` | `conn_mod_def::GMklwfT0oYg::aoVPaMuCStCLPAW3gXwUuQ` |

### SegmentMarketingChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Marketing Channels for a Segment | GET | `/v1/segment/{{segmentId}}/marketing-channels/query` | `conn_mod_def::GMklwn5hwLg::Je6HaaqWTfyvT7dU4nVmPg` |

### WebsiteLeadEnrichment

| Action | Method | Path | Action id |
|---|---|---|---|
| Lead Enrichment Using Website Domain | GET | `/v1/website/{{domainName}}/lead-enrichment/all` | `conn_mod_def::GMklwoheNdg::GtANLUt0QFmEL86KtS6jnA` |

This lists 90 of 148 actions. For anything not here, call `search_one_platform_actions` with platform `similarweb`. The full catalog is at https://www.withone.ai/knowledge/similarweb.

## When a call fails

The error comes from Similarweb, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/similarweb

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
