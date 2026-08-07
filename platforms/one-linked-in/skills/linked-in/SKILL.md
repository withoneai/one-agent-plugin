---
name: linked-in
description: LinkedIn is a professional networking platform where users can connect, share industry knowledge, and discover job opportunities. It's also widely used for recruiting and B2B marketing. Read and write LinkedIn data through One: creatives, posts, dmpsegments, adcampaigns, adaccountusers, socialactions and more, 427 actions with real parameter documentation. Use whenever the user asks to look something up in LinkedIn, create or update a record there, or build code against the LinkedIn API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: linked-in
  generated-from: one-knowledge-base
---

# LinkedIn through One

LinkedIn is a professional networking platform where users can connect, share industry knowledge, and discover job opportunities. It's also widely used for recruiting and B2B marketing.

One exposes LinkedIn through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `linked-in` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm LinkedIn is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real LinkedIn account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Creatives

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Get Dynamic Follower Ads | GET | `/rest/creatives` | `conn_mod_def::GKRUPiynyzg::YS43jJ_2R1CRiDfat5kKqw` |
| Batch Get Text Ads | GET | `/rest/creatives` | `conn_mod_def::GKRUPtzbyo8::x7gcgeWSTpuag-T1JNqmvg` |
| Batch Get VAST Tag Video Ads | GET | `/rest/creatives` | `conn_mod_def::GKRUPtyvlQM::Su-B3DYkQ_Ovjg2iYcMumw` |
| Find Dynamic Follower Ad Creatives by Criteria | GET | `/rest/creatives` | `conn_mod_def::GKRUQr5CS5o::e916aOSySu2QLW2Jobz60A` |
| Get a Dynamic Follower Ad | GET | `/rest/creatives/{{sponsoredCreativeUrn}}` | `conn_mod_def::GKRUQ5T0pj0::SC3PmbZrSy6yaVrGxdC3ug` |
| Get a Dynamic Job Ad Creative | GET | `/rest/creatives/{{sponsoredCreativeUrn}}` | `conn_mod_def::GKRUQ6l6Vvs::tOP7KDTGRdWAWvVq-QOmeQ` |
| Get a Dynamic Spotlight Ad Creative | GET | `/rest/creatives/{{sponsoredCreativeUrn}}` | `conn_mod_def::GKRUQ6nGBug::yXLK_MFTRm2MjhXCDIakwQ` |
| Get a Text Ad | GET | `/rest/creatives/{{sponsoredCreativeUrn}}` | `conn_mod_def::GKRURDcWzY8::pwac1xcdQzeRF2YlFzRYUQ` |
| Get a VAST Tag Video Ad Creative | GET | `/rest/creatives/{{sponsoredCreativeUrn}}` | `conn_mod_def::GKRURE-nHdg::LukzEjcZSP-DYFCgv4MYQw` |
| Search an Ad Account's Creatives | GET | `/rest/adAccounts/{{adAccountId}}/creatives` | `conn_mod_def::GKRUVIcQaIA::-Vqw8TBYQzm5TxC1ffjFNw` |
| Batch Create Dynamic Follower Ads | POST | `/rest/creatives` | `conn_mod_def::GKRUPNESiEI::TYHsCIPCQ7CvFXNjdBbXqQ` |
| Batch Create Dynamic Job Ads | POST | `/rest/creatives` | `conn_mod_def::GKRUPMexWoo::xXNfy062S3eRdFREbqBVvw` |

25 more Creatives actions are available through search.

### Posts

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Get Carousel Content for Posts | GET | `/rest/posts` | `conn_mod_def::GKRUPkDovI0::LBV4u6YGRJ-49EI-67lNfw` |
| Batch Get Celebration Content for Posts | GET | `/rest/posts` | `conn_mod_def::GKRUVqEPNkY::sGkBwapIT_K3PmeVuvd4dA` |
| Batch Get Poll Content for Multiple Posts | GET | `/rest/posts` | `conn_mod_def::GKRUVq7ODfs::N_VrAPZ2Tj6Ce9-cH3v1JQ` |
| Batch Get Posts | GET | `/rest/posts` | `conn_mod_def::GKRUV10B6vA::EfsQcORuSWG1tIFwmjhCVQ` |
| Batch Get Posts with MultiImage or Other Content Types | GET | `/rest/posts` | `conn_mod_def::GKRUVpHaBGc::zI8w7PhwSi-LbR13ih_fhA` |
| Find Posts by Account | GET | `/rest/posts` | `conn_mod_def::GKRUWOBL5ig::qRaTgSeFTwqDPWbg_c7BFQ` |
| Find Posts by Author | GET | `/rest/posts` | `conn_mod_def::GKRUWP3XZhU::f7x-M_W5S8mqJJBYxlkeIA` |
| Get a Post by URN | GET | `/rest/posts/{{ugcPostUrn}}` | `conn_mod_def::GKRUQ5dyN6k::ZENd5lcmQNKouAqVaYAkzw` |
| Get a Post by URN | GET | `/rest/posts/{{encodedPostUrn}}` | `conn_mod_def::GKRUWZFzzxM::6IfeaM1eRruSqlGoLaTn4g` |
| Get Carousel Content for a Post | GET | `/rest/posts/{{postId}}` | `conn_mod_def::GKRURGBZLZw::BMmQoYrASmOHBxwteGC6_w` |
| Get Celebration Content From a Post | GET | `/rest/posts/{{postUrn}}` | `conn_mod_def::GKRUWM294oM::he4dIi8jSpyIC6nZ1O4xxA` |
| Get MultiImage Content From a Post | GET | `/rest/posts/{{postId}}` | `conn_mod_def::GKRUWdDFcek::lsbe654eSMGmhOVxlu5p5A` |

15 more Posts actions are available through search.

### DmpSegments

| Action | Method | Path | Action id |
|---|---|---|---|
| Find DMP Segments by Account | GET | `/rest/dmpSegments` | `conn_mod_def::GKRUYMm2Hqk::IG_-S4RPQjig7wOfVkS6Pw` |
| Get a DMP Segment | GET | `/rest/dmpSegments/{{segmentId}}` | `conn_mod_def::GKRUYLixlpQ::E9ORLxmsRk2ggX8ILiBO9w` |
| Get Multiple DMP Segments | GET | `/rest/dmpSegments` | `conn_mod_def::GKRUYLjoaDk::bU8EP4fyQ2SSRcKjL3jkew` |
| Monitor Status of a DMP Segment | GET | `/rest/dmpSegments/{{dmpSegmentId}}` | `conn_mod_def::GKRUYYfgVYA::kt99uUqFTpGQJaXUeFNpHQ` |
| Add or Remove a Company from a DMP Segment | POST | `/rest/dmpSegments/{{dmpSegmentId}}/companies` | `conn_mod_def::GKRUXc6KWcY::FE5OlAt0RRKq0VnfVHoVTA` |
| Add or Remove a User from a DMP Segment | POST | `/rest/dmpSegments/{{dmpSegmentId}}/users` | `conn_mod_def::GKRUXpXccUc::6UCUlWCzTT2kP_3nlczJCw` |
| Batch Delete DMP Segments | DELETE | `/rest/dmpSegments` | `conn_mod_def::GKRUX177xho::gv57QRweQ_OPAYehtejxkg` |
| Create a DMP Segment | POST | `/rest/dmpSegments` | `conn_mod_def::GKRUTPWa73I::SfyP8StOQUOFSHDaM6XWMQ` |
| Create a DMP Segment's Predictive Audience | POST | `/rest/dmpSegments/{{dmpSegmentId}}/businessObjectiveBasedAudiences` | `conn_mod_def::GKRUYB0mpLk::O-GfS26lQ4KP-8G6lf0p3w` |
| Create DMP Segment | POST | `/rest/dmpSegments` | `conn_mod_def::GKRUX2VnXR8::JFAi3at1S1iZ2MrhU6QbKQ` |
| Create List Upload DMP Segment | POST | `/rest/dmpSegments` | `conn_mod_def::GKRUX2HUSiE::QXxFa4udTd-zVk2NDj1wBw` |
| Delete a DMP Segment | DELETE | `/rest/dmpSegments/{{segmentId}}` | `conn_mod_def::GKRUYAyZMo0::XysSkvO4RlSPzbByU7akyA` |

2 more DmpSegments actions are available through search.

### AdCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign for an Ad Account | GET | `/rest/adAccounts/{{adAccountId}}/adCampaigns/{{campaignID}}` | `conn_mod_def::GKRUUmrXN2w::hiEoGVBQQnmHBmG381yvpQ` |
| Search an Ad Account's Campaigns | GET | `/rest/adAccounts/{{adAccountId}}/adCampaigns` | `conn_mod_def::GKRUVHf8vmY::me9iEYBJRqCfkLmDMfY6Yg` |
| Apply Targeting to a LinkedIn Ad Campaign | POST | `/rest/adAccounts/{{adAccountId}}/adCampaigns/{{campaignId}}` | `conn_mod_def::GKRUXp3JRM8::_kxAuFGWT_CARck5a9eQYA` |
| Batch Create Campaigns for an Ad Account | POST | `/rest/adAccounts/{{adAccountId}}/adCampaigns` | `conn_mod_def::GKRUUaRCto0::Vb-73wPhTrSZsWAF-tHTuw` |
| Create a Campaign for an Event Ad Account | POST | `/rest/adAccounts/{{adAccountId}}/adCampaigns` | `conn_mod_def::GKRUP584v2Q::jvq4U6-FSpe5MUVZkg0kGw` |
| Create a Campaign with Offsite Delivery Enabled for an Ad Account | POST | `/rest/adAccounts/{{adAccountId}}/adCampaigns` | `conn_mod_def::GKRUR_mYSfw::ndY-1fKMShiIPhBeb32NZA` |
| Create an Ad Account Campaign | POST | `/rest/adAccounts/{{adAccountId}}/adCampaigns` | `conn_mod_def::GKRUUZxhSl0::HY_IXr7aShuphNpPV72JDQ` |
| Delete a Campaign from an Ad Account | DELETE | `/rest/adAccounts/{{adAccountId}}/adCampaigns/{{campaignId}}` | `conn_mod_def::GKRUUbQiUcA::IE5g596FTv-K6TqVEBWLkg` |
| Disable Offsite Delivery for an Ad Campaign | POST | `/rest/adAccounts/{{adAccountId}}/adCampaigns/{{campaignId}}` | `conn_mod_def::GKRUSMiQLl8::4efDOZSMQ_Od17L80-66vQ` |
| Enable Offsite Delivery for an Existing Ad Campaign | POST | `/rest/adAccounts/{{adAccountId}}/adCampaigns/{{campaignId}}` | `conn_mod_def::GKRUSa4wBdw::N9oNWJcCQ4Gb4iUK2JK_DQ` |
| Reactivate an Ad Account Campaign | POST | `/rest/adAccounts/{{adAccountId}}/adCampaigns/{{campaignId}}` | `conn_mod_def::GKRUVA6HFK0::SE7kYmfPRCSpkdmbV7LS2Q` |
| Update a Campaign in an Ad Account | POST | `/rest/adAccounts/{{adAccountId}}/adCampaigns/{{campaignId}}` | `conn_mod_def::GKRUVR_2hF8::sCyvVIsSRn-B9KdX2nTPMw` |

2 more AdCampaigns actions are available through search.

### AdAccountUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Specific Ad Account User | GET | `/rest/adAccountUsers/(account={{account}},user={{user}})` | `conn_mod_def::GKRUOimnw1w::_HtjWap8T-OW75BEmc_I-A` |
| Fetch Existing Ad Account Users | GET | `/rest/adAccountUsers` | `conn_mod_def::GKRUOumtlWc::ydhtuRz-Rsufx1fqZvK13Q` |
| Find Ad Accounts for the Authenticated User | GET | `/rest/adAccountUsers` | `conn_mod_def::GKRUO3CiQaw::k9CanZAmRv-Hf9GTEBMqGA` |
| Find Users for an Ad Account | GET | `/rest/adAccountUsers` | `conn_mod_def::GKRUO3_gwo8::IBULmbOdSFajkV7tvT6XLA` |
| Get an Ad Account User | GET | `/rest/adAccountUsers/(account={{account}},user={{user}})` | `conn_mod_def::GKRUOunNIdE::cbYhSLLNTNyqccAWUgCXzQ` |
| List the Authenticated User’s LinkedIn Ads Account Access Levels | GET | `/rest/adAccountUsers` | `conn_mod_def::GKRUXLvGVEw::7NV_kukwQR2V7x9P7_5I9w` |
| Create an Ad Account User | PUT | `/rest/adAccountUsers/(account:{{sponsoredAccountURN}},user:{{personURN}})` | `conn_mod_def::GKRUOletCHw::xrL17G0uQ-mFnz3zIXtsmQ` |
| Delete an Ad Account User | DELETE | `/rest/adAccountUsers/(account={{account}},user={{user}})` | `conn_mod_def::GKRUOkQ5CM8::qChZkj3zRd270zyps4HUKg` |
| Grant User Access to an Ad Account | PUT | `/rest/adAccountUsers/(account={{account}},user={{user}})` | `conn_mod_def::GKRUPA5WiAI::qlfultxcT0eYGer-bMKlbA` |
| Remove User Access From an Ad Account | DELETE | `/rest/adAccountUsers/(account={{account}},user={{user}})` | `conn_mod_def::GKRUPB0wP5k::L6LlipSVRomIp2cT6Y-8kw` |
| Update an Existing Ad Account User | POST | `/rest/adAccountUsers/(account={{account}},user={{user}})` | `conn_mod_def::GKRUPCCYfD8::gYGDwTNKSuSifx3s_OxVAQ` |

### SocialActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Get Summary of Social Actions | GET | `/rest/socialActions` | `conn_mod_def::GKRUZX0bqq0::DzQfiHGqSZK_CfJzGVfpmQ` |
| Get a Comment on a Social Action | GET | `/rest/socialActions/{{shareUrnUgcPostUrnCommentUrn}}/comments/{{commentId}}` | `conn_mod_def::GKRUZ1KS3o4::jvRt7jLcQc2Z84tC8EBKow` |
| Retrieve a Summary of Social Actions for a Share, UGC Post, or Comment | GET | `/rest/socialActions/{{shareUrn\|ugcPostUrn\|commentUrn}}` | `conn_mod_def::GKRUaDZZuw4::GuOpPtLBRte7vX66N3GDeQ` |
| Retrieve Likes on a Social Action | GET | `/rest/socialActions/{{shareUrnUgcPostUrnCommentUrn}}/likes` | `conn_mod_def::GKRUahoXPxs::gDutPJGPSzOX_4lsBHEN_w` |
| Create a Comment on a Share, UGC Post, or Comment | POST | `/rest/socialActions/{{shareUrnUgcPostUrnCommentUrn}}/comments` | `conn_mod_def::GKRUbqXHHCQ::OYYZ1WUYSzS6M1HY6sfzXw` |
| Create a Comment on a Social Action | POST | `/rest/socialActions/{{shareUrnUgcPostUrnCommentUrn}}/comments` | `conn_mod_def::GKRUZrTNxH8::bv3XMw8vTTKWVXYrirhR8w` |
| Create a Like on a Share, UGC Post, or Comment | POST | `/rest/socialActions/{{shareUrn\|ugcPostUrn\|commentUrn}}/likes` | `conn_mod_def::GKRUZrjn2Ik::bSubQkcNRv-OwABTkT6TIg` |
| Delete a Like on a Social Action | DELETE | `/rest/socialActions/{{socialActionUrn}}/likes/{{actor}}` | `conn_mod_def::GKRUZ1AcJY4::Q0jzWZt5TiyNOwhjHB9d5w` |
| Edit a Comment on a Social Action | POST | `/rest/socialActions/{{shareUrnOrUgcPostUrn}}/comments/{{commentId}}` | `conn_mod_def::GKRUbqhUGzk::PnXQ_0BsTn-Fgj9i5RHkPQ` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Live Event Recipe Status | GET | `/v2/assets/{{id}}` | `conn_mod_def::GKRUNgiyP1U::NIaFt6_xS6C0-7mPpSjNQQ` |
| Check Status of an Asset Upload | GET | `/rest/assets/{{assetId}}` | `conn_mod_def::GKRUVznb2qM::E8SCHFeGS-OGdQYgLGNxgQ` |
| Get Media Artifacts for an Asset | GET | `/rest/assets/{{assetId}}` | `conn_mod_def::GKRUWYhBmGs::Rv2gjOxJT0WvxUfM9k1f2A` |
| Complete a Multi-Part Asset Upload | POST | `/rest/assets` | `conn_mod_def::GKRUV1lBdC4::V-ZwZQMXRwqyDHiVvbnD2g` |
| Register a Multi-Part Asset Upload | POST | `/rest/assets` | `conn_mod_def::GKRUXCSGT8w::q2bdmmU-SxmOUPTcPwM9SQ` |
| Register a Video Upload Asset | POST | `/rest/assets` | `conn_mod_def::GKRUWxmVGBg::mS9KfDFeQGOzkbCmfN4iXg` |
| Register an Image or Video Upload | POST | `/v2/assets` | `conn_mod_def::GKRUNG-b79E::gIoaOu9bQxaODDj1TTAVKA` |
| Register an Image Upload | POST | `/rest/assets` | `conn_mod_def::GKRUWxmY0Ec::ZhYtOFPOS1KLAKYI47b2Lw` |

### UgcPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve UGC Posts | GET | `/v2/ugcPosts/{{encodedUgcPostUrnOrShareUrn}}` | `conn_mod_def::GKRUM811fxI::UsjbtlPbTjeEz4yRWnYy4Q` |
| Create a Group UGC Post | POST | `/v2/ugcPosts` | `conn_mod_def::GKRUMu0VHdY::WeDgVRjrSyeO-N7T5LgJIA` |
| Create a LinkedIn Share Post | POST | `/v2/ugcPosts` | `conn_mod_def::GKRUNHOSId0::9SKsD7MBSHKFKk8iH2z0dQ` |
| Create a LinkedIn UGC Post | POST | `/v2/ugcPosts` | `conn_mod_def::GKRUNwzQCEo::xNrVspp-SHORRzv9gleOcw` |
| Create an Announcement UGC Post | POST | `/v2/ugcPosts` | `conn_mod_def::GKRUNWAjzj4::tkikDebrS3ibshFbIyZ-YA` |
| Create an Organic Targeted Company UGC Post | POST | `/rest/ugcPosts` | `conn_mod_def::GKRUb2gnnv0::CIqlnLQKRy6gKlgGdkFMOA` |
| Create UGC Posts | POST | `/v2/ugcPosts` | `conn_mod_def::GKRUMv3YUF0::HvE7ltd-R-aaJpw921ydGA` |
| Delete a UGC Post | DELETE | `/v2/ugcPosts/{{encodedUgcPostUrnOrShareUrn}}` | `conn_mod_def::GKRUMuqR_S4::C1MB-qitSMuQn68tSRNMuQ` |

### AdAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch an Ad Account | GET | `/rest/adAccounts/{{adAccountID}}` | `conn_mod_def::GKRUOvSkI7U::JW-0A5APTte2nZ5oCQl_vQ` |
| Get an Ad Account with Additional Info Fields | GET | `/rest/adAccounts/{{adAccountId}}` | `conn_mod_def::GKRUXNlRsPg::q2ERYepwQ_-hAMWbcO2XDg` |
| Search Ad Accounts | GET | `/rest/adAccounts` | `conn_mod_def::GKRUPC04guk::v-EZkz9yTzOmXXt5CRgAQQ` |
| Batch Create Ad Accounts | POST | `/rest/adAccounts` | `conn_mod_def::GKRUOY1bb7g::x0uxugUnTimtjhAPcbvWhA` |
| Create a Test Ad Account | POST | `/rest/adAccounts` | `conn_mod_def::GKRUOjc7Kk0::LsFW-ME_Qi-SuNfDWAUh-A` |
| Create Ad Account | POST | `/rest/adAccounts` | `conn_mod_def::GKRUOYhPRew::g0law-asSJWfaAXCeUBxTQ` |

2 more AdAccounts actions are available through search.

This lists 90 of 427 actions. For anything not here, call `search_one_platform_actions` with platform `linked-in`. The full catalog is at https://www.withone.ai/knowledge/linked-in.

## When a call fails

The error comes from LinkedIn, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/linked-in

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
