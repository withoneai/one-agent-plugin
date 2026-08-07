---
name: ayrshare
description: Ayrshare provides a unified REST-based social media API that lets developers programmatically post, schedule, delete, and analyze content across 13 major networks, manage comments and messages, and automate engagement and advertising workflows from a single integration. Read and write Ayrshare data through One: comments, reviews, media, posts, userprofile, posthistory and more, 91 actions with real parameter documentation. Use whenever the user asks to look something up in Ayrshare, create or update a record there, or build code against the Ayrshare API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ayrshare
  generated-from: one-knowledge-base
---

# Ayrshare through One

Ayrshare provides a unified REST-based social media API that lets developers programmatically post, schedule, delete, and analyze content across 13 major networks, manage comments and messages, and automate engagement and advertising workflows from a single integration.

One exposes Ayrshare through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ayrshare` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Ayrshare is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Ayrshare account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Comments for a Post or Comment | GET | `/api/comments/{{id}}` | `conn_mod_def::GJbhMfISx6g::L0QwYmgTRBO76dUdXt084A` |
| Add a Comment to a Published Post | POST | `/api/comments` | `conn_mod_def::GJbhMW-tbqg::y8cYFR9GR4WtU1ijlbV9Yw` |
| Delete Comments (Single Comment or All Comments Under a Post) | DELETE | `/api/comments/{{id}}` | `conn_mod_def::GJbhMnr4X4g::ox1slu1FQ_OE9D6W3Pb7cA` |
| Reply to a Comment | POST | `/api/comments/reply/{{commentId}}` | `conn_mod_def::GJbhMxNlWqA::Wtc3ciHlRO28vPONdY0l1A` |

### Reviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Review | GET | `/api/reviews/{{id}}` | `conn_mod_def::GJbhaLV-z4A::8IAshOr2R_WRrWlW9iLCew` |
| Get All Reviews for a Platform | GET | `/api/reviews` | `conn_mod_def::GJbhaFiggNg::0YG9haQuRlWOEhFUkHlLeQ` |
| Add a Reply to a Review | POST | `/api/reviews` | `conn_mod_def::GJbhaaN_Ylg::pSwmLUwpTwexHT2smJSCkg` |
| Delete a Reply on a Review | DELETE | `/api/reviews` | `conn_mod_def::GJbhaj2akkA::9MXrkzBcT3GamXuQsY2GLQ` |

### Media

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Media in the Gallery | GET | `/api/media` | `conn_mod_def::GJbhQCQ_y1A::Q76926txTbmvJmgj9RliRg` |
| Resize a Social Media Image | POST | `/api/media/resize` | `conn_mod_def::GJbhQLL5OVg::_7XMEuYaQHiXZerwuB1FIg` |
| Upload Media (Image or Small Video) for a Post | POST | `/api/media/upload` | `conn_mod_def::GJbhPjeNAtg::QfgydsYbQg2ZDX2WPNKi-Q` |

### Posts

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Schedule Posts (CSV Upload) | PUT | `/api/post/bulk` | `conn_mod_def::GJbhZOiXScg::ZE5XsQ1jSpeRbEXTQyCG_A` |
| Copy an Existing Post to New Social Media Platforms | POST | `/api/post/copy` | `conn_mod_def::GJbhZGxuTMA::5J19KA9RRY2XR6xgmRe3Kw` |
| Retry Publishing a Failed Post | PUT | `/api/post/retry` | `conn_mod_def::GJbhY-8ce3A::4FUw6LC6RGuZazFjOSClNA` |

### UserProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Authenticated User or User Profile Details | GET | `/api/user` | `conn_mod_def::GJbhaqtDjdg::3fky-ZgSQyuCOpg4755Hog` |
| Create a User Profile (Under Primary Profile) | POST | `/api/profiles` | `conn_mod_def::GJbhZXc3yQA::HO0MGljgTCe_VjcxnbRKnA` |
| Update a User Profile | PATCH | `/api/profiles` | `conn_mod_def::GJbhZmuA2Ug::dNR3_eulS0Sb8Q_POFjpng` |

### PostHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Post History by ID | GET | `/api/history/{{id}}` | `conn_mod_def::GJbhO0bLsFg::GzQRQDOOT-Ofb-mUKp5HPA` |
| List History of Sent Posts for a Platform | GET | `/api/history/{{platform}}` | `conn_mod_def::GJbhO89vvuA::3W0cyI2ISO-07S1S_nURMg` |
| Retrieve Post History by Social Post ID | GET | `/api/history/{{socialId}}` | `conn_mod_def::GJbhPIXz1hA::L79I6r1QTKiwIBos9txguw` |

### UserProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Get All User Profiles (User Data Export) | GET | `/api/user/batch` | `conn_mod_def::GJbhbA4MdaA::6CfFruocQge_6TH6H3ZOIQ` |
| List a Primary Profile’s User Profiles | GET | `/api/profiles` | `conn_mod_def::GJbhZuzfRbA::tVe1z2C0RZCMPW58yZ72RQ` |
| Delete a User Profile | DELETE | `/api/profiles` | `conn_mod_def::GJbhZeKpCMA::nzNLi-4lRLeRvuSuCHjTQg` |

### Hashtags

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Banned Hashtags | GET | `/api/hashtags/banned` | `conn_mod_def::GJbhOT0VcjA::TSic47LARq60GLPwKJ9Unw` |
| Recommend Hashtags (TikTok) | GET | `/api/hashtags/recommend` | `conn_mod_def::GJbhObrmhaA::1BBHF3hzT0OatExW-QEUSA` |
| Auto-Generate Hashtags for a Post | POST | `/api/hashtags/auto` | `conn_mod_def::GJbhOMd6mqA::i8mNj5oKT0-Xk7v8OnXJuw` |

### Analytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Analytics for an Ayrshare Post | POST | `/api/analytics/post` | `conn_mod_def::GJbhKkdp--g::F662qge8RPCnU1xdAQdR9Q` |
| Get Analytics on a Post by Social Post ID | POST | `/api/analytics/post` | `conn_mod_def::GJbhKrLMXvg::V1nBnvO2RrKph9HwkCj3WQ` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Messages or Conversations for a Messaging Platform | GET | `/api/messages/{{platform}}` | `conn_mod_def::GJbhQsnTV9g::m3tsaX1dTkaVUHFa3phorw` |
| Send a Direct Message on a Platform | POST | `/api/messages/{{PLATFORM}}` | `conn_mod_def::GJbhQmIKT_g::dczU1COkTJ-o3_-rQoy_sQ` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Register a Webhook | POST | `/api/hook/webhook` | `conn_mod_def::GJbhcZCKlIA::WyjUkAYUThyKO-JOUKUMbg` |
| Unregister a Webhook | DELETE | `/api/hook/webhook` | `conn_mod_def::GJbhcd997fg::8FFBWjhQQWW7_PUWWPHqfQ` |

### FacebookBoostedAds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Facebook Boosted Ads (Facebook Ads) | GET | `/api/ads/facebook/ads` | `conn_mod_def::GJbhJrQ_IcA::A12XUKciRCipGwIjm5z4cA` |
| Update a Facebook Boosted Ad's Status | PUT | `/api/ads/facebook/ads` | `conn_mod_def::GJbhKcr4gEg::H3KsrUHRSQKS0hghZ16qCg` |

### RssFeed

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an RSS Feed | DELETE | `/api/feed` | `conn_mod_def::GJbhNCh_Y1g::t3ChdZ6LR8iki3-fPMmeQQ` |
| Update an RSS Feed | PUT | `/api/feed` | `conn_mod_def::GJbhNTcgxoA::xPmZ7Pp8TjGx7f55ZZBnEA` |

### Post

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Post by Ayrshare Post ID | GET | `/api/post/{{id}}` | `conn_mod_def::GJbhRhAzr-A::aWgrgVrARQW8haMIh-IULA` |
| Delete a Post | DELETE | `/api/post` | `conn_mod_def::GJbhRoiQBOg::j32pZfq9Q1-duB__QoLM3w` |

### YouTubeWatermark

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a YouTube Channel Watermark | DELETE | `/api/post/youTubeWatermark` | `conn_mod_def::GJbhbu-OsLg::DBa5gpq7TIWEmsZN7AK30Q` |
| Set a YouTube Channel Watermark | POST | `/api/post/youTubeWatermark` | `conn_mod_def::GJbhbngMZBg::_nHW4EKASZSBHpaP0VtHAA` |

### FacebookAds

| Action | Method | Path | Action id |
|---|---|---|---|
| Boost a Facebook Post (Create Facebook Boosted Ad) | POST | `/api/ads/facebook/boost` | `conn_mod_def::GJbhJhlKYog::PzaoYmjyTcGtYcNmTuLrHg` |

### SocialProfileAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Social Profile Analytics (Across Platforms) | POST | `/api/analytics/social` | `conn_mod_def::GJbhKzir_iA::OML-5obzQSabw0a8A3wJdg` |

### AutoPostSchedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Set an Auto-Post Schedule | POST | `/api/auto-schedule/set` | `conn_mod_def::GJbhLS54ShA::sjkFwAunRqWEr97IgxmoKA` |

### ShortLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Short Link | POST | `/api/links` | `conn_mod_def::GJbhPRS0DmA::WWQwJVI3Q-CVPGvlv8cEcA` |

### MediaUploadUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Presigned Upload URL for Large Media Files | GET | `/api/media/uploadUrl` | `conn_mod_def::GJbhPzZKkrg::4QVWnPvGRZG-EdliGTRrEA` |

### RedditFlair

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Subreddit's Reddit Flair IDs | GET | `/api/post/redditFlair/{{SUBREDDIT}}` | `conn_mod_def::GJbhbQl4hNg::akeWIADzQ3SwC99txssFiQ` |

### ContentModeration

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Content Moderation | POST | `/api/validate/moderation` | `conn_mod_def::GJbhcCbAO6A::44uObmksSJWt1kn_yWqhHg` |

### WebhookDeliveryHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhook Delivery History Grouped by Action | GET | `/api/hook/history` | `conn_mod_def::GJbhcxbddlA::81rACR1ORcKI3FKQJYJteg` |

### FacebookAdsHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Facebook Ads Historical Daily Spend & Analytics | GET | `/api/ads/facebook/history` | `conn_mod_def::GJbhJzamldA::wM77zVydS4iMjrztYaeOqA` |

### LinkedinBrandSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search LinkedIn Companies or People (Brand) | GET | `/api/brand/search/linkedin` | `conn_mod_def::GJbhMPss-Cg::VKXoI_OjSZmdpDS-nMuI_w` |

### TranslatedText

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Translated Text for a Post | POST | `/api/generate/translate` | `conn_mod_def::GJbhN2OHc0g::iCbiIzZ4SI-xidG2AuzuIQ` |

### SocialMediaPost

| Action | Method | Path | Action id |
|---|---|---|---|
| Publish a Social Media Post | POST | `/api/post` | `conn_mod_def::GJbhRZj53fA::AIdbUW8cRbSZWofR4z7iVg` |

### SocialNetworkAccountUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Social Network Account/User (Platform) | PATCH | `/api/user/{{PLATFORM}}` | `conn_mod_def::GJbha6apuUA::wjcQbkoPTjOUDjP1g19J9Q` |

### Subreddit

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if a Subreddit Exists | GET | `/api/validate/redditExists/{{subreddit}}` | `conn_mod_def::GJbhb7Uqz1A::SgGXJsWiSG-m-WtQDVMFWA` |

### FacebookAdAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Facebook Ad Accounts | GET | `/api/ads/facebook/accounts` | `conn_mod_def::GJbhJXgqUqA::WxZzEORaRE-cWpLuFAvwzQ` |

### FacebookAdInterests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Facebook Ad Interests | GET | `/api/ads/facebook/interests` | `conn_mod_def::GJbhJ6ag69g::E76UdeO3StSiWVrLB1uC8w` |

### FacebookAdsRegions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Facebook Ads Regions (Search by Name) | GET | `/api/ads/facebook/regions` | `conn_mod_def::GJbhKFZ6g8A::ohYGJzY6TkK99Yl01t8yZg` |

### FacebookAdCities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Facebook Ad Cities by Name | GET | `/api/ads/facebook/cities` | `conn_mod_def::GJbhKNH94lg::F-CugrsOQZC2hK4nRRmvEw` |

### FacebookAdsDsaRecommendations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Facebook Ads DSA Recommendations | GET | `/api/ads/facebook/dsaRecommendations` | `conn_mod_def::GJbhKVv1odA::e6OjR7afS_C7Q7QTHLHFvw` |

### YouTubePlaylistsAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Playlists Analytics for the Connected Channel | GET | `/api/analytics/youTubePlaylists` | `conn_mod_def::GJbhK7WLUtg::4B943H-OSOSPw4GsVegRBg` |

### InstagramOnlineFollowersAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Instagram Online Followers (Hourly) Analytics for a Day | GET | `/api/analytics/getInstagramOnlineFollowers` | `conn_mod_def::GJbhLEyasfA::G6uKPkYaQISCEyS7dcJSeA` |

### AutoSchedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Auto Schedule | DELETE | `/api/auto-schedule/delete` | `conn_mod_def::GJbhLbZTaxg::36ipubWBQcyNDWDJUy7Wig` |

### AutoSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| List Active Auto Schedules | GET | `/api/auto-schedule/list` | `conn_mod_def::GJbhLlNQDCg::4vm12Qb2TFe1aaicZc5xQA` |

### AutoSchedulePosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Pending Auto Schedule Posts | GET | `/api/auto-schedule/pending` | `conn_mod_def::GJbhLtlhcYA::iHUpYu_sQrekIENDsJTa9g` |

### Brand

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Brand's Public Social Account Information by Username | GET | `/api/brand/byUser` | `conn_mod_def::GJbhL7M2q_A::BXAf34_NShWbz_BEpBkWew` |

### FacebookPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Facebook Pages (Brand Search) | GET | `/api/brand/search/facebook` | `conn_mod_def::GJbhMCMqkYg::bOBVb9WZRf2NmAb0-owfIw` |

### Feeds

| Action | Method | Path | Action id |
|---|---|---|---|
| Add an RSS Feed for Automated Posting | POST | `/api/feed` | `conn_mod_def::GJbhM9T6Eig::zvit3LFnRNOvx_S6DihgoQ` |

### RssFeeds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Registered RSS Feeds | GET | `/api/feed` | `conn_mod_def::GJbhNK940wg::Z5a1r59wR6eF0OHta3tRZQ` |

### SocialPostTextCopy

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Social Post's Text Copy (AI) | POST | `/api/generate/post` | `conn_mod_def::GJbhNahlLKA::2byKh3lmSziEXKBOmnP-ug` |

### RewriteVariations

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Rewrite Variations for a Social Media Post | POST | `/api/generate/rewrite` | `conn_mod_def::GJbhNhye4dg::keQYMnmOQxGkvl0ejivbhw` |

### Transcription

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Transcription (and Title) for an Ayrshare-Hosted Video | POST | `/api/generate/transcription` | `conn_mod_def::GJbhNqZy-Gg::DrLPIW0iRG2IFcBGdZwkGA` |

### AltText

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate AI Alt Text for an Image | POST | `/api/generate/altText` | `conn_mod_def::GJbhN8Y6lgA::o0VO9_XtSASS5yCMNPrOFQ` |

### SentimentAnalysis

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Sentiment Analysis for Text | POST | `/api/generate/sentiments` | `conn_mod_def::GJbhOFkExaA::6gd8w4RFTgmByrfZPQzHHQ` |

### InstagramHashtagSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Instagram Media by Hashtag Keyword | GET | `/api/hashtags/search` | `conn_mod_def::GJbhOks4mPA::w4MyIg5aT6qil8111r8EAg` |

### History

| Action | Method | Path | Action id |
|---|---|---|---|
| List History of Ayrshare Posts | GET | `/api/history` | `conn_mod_def::GJbhOrt27Tg::taMAAiqrQ8OZG-8-Kbrx4A` |

### LinkAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Link Analytics (All Links or a Specific Short Link) | GET | `/api/links{{#if id}}/{{id}}{{/if}}` | `conn_mod_def::GJbhPbE9RJA::sQTsJFcRQPSV63QUcrLGDQ` |

### MediaUrlExists

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify a Media URL Exists | POST | `/api/media/urlExists` | `conn_mod_def::GJbhP5cZwtA::_bPI3verT125nvdroFHCAQ` |

### MediaFileMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Media File Metadata | GET | `/api/media/meta` | `conn_mod_def::GJbhQb9166g::fHyiDxnJRC20LGJNIJlhng` |

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Conversation’s Status (Archive/Activate) on a Platform | PUT | `/api/messages/{{platform}}/{{conversationId}}` | `conn_mod_def::GJbhQ1NSk8A::IPqO4rV6SImEkW3qf3Om0A` |

### UserProfileMessagesAutoResponse

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a User Profile's Messages Auto Response | POST | `/api/messages/autoresponse` | `conn_mod_def::GJbhRJLNyxg::9UyDEClhTC-_iI6KyeZlXQ` |

### MessagesAutoResponseSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Messages Auto Response Settings | GET | `/api/messages/autoresponse` | `conn_mod_def::GJbhRREOgKg::5RWxgn_BTfmlJjVYvtYf6g` |

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Unlink a Social Network From a Profile | DELETE | `/api/profiles/social` | `conn_mod_def::GJbhZ1Rgetg::S9yi-mAITQq4VMdZ_Pr5Jw` |

### ProfileJwt

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a JWT for a Profile (SSO) | POST | `/api/profiles/generateJWT` | `conn_mod_def::GJbhZ9PEAaA::ytJ25U9DR7y72EJRKkdQ1w` |

### PinterestUserBoardDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Pinterest User Board Details | GET | `/api/user/details/pinterest` | `conn_mod_def::GJbhaylCJaA::sH1DfE9iSuOBU1xu3V0MOg` |

### InstagramCollaboratorRequestStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Instagram Collaborator Request Status | GET | `/api/post/collaborators/{{id}}` | `conn_mod_def::GJbhbIWFqiA::_oCAec8gTcCGKZ0PXKIgFA` |

### UserLookups

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Monthly User Lookups | GET | `/api/user/lookups` | `conn_mod_def::GJbhbYk3SwA::hi3QbAeKSd6A0NDlgk5AmA` |

### YouTubeCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve YouTube Categories for a Region | GET | `/youTubeCategories/{{REGION}}` | `conn_mod_def::GJbhbgkp6pg::NTkYwTDaSxC2TwMRS8dPtQ` |

### PostLengthValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate a Post’s Weighted Length (Character Count) | POST | `/api/validate/postLength` | `conn_mod_def::GJbhb1bljgg::dfs0AwetQGmPGeHxMWrE-A` |

### JsonValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate JSON Formatting | POST | `/api/validate/json` | `conn_mod_def::GJbhcK-GMdg::uVCkiAL0RmqbIXDN_s5xeg` |

### PostValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate a Post Before Publishing | POST | `/validate/post` | `conn_mod_def::GJbhcRsvTmA::CCfEtZ2IR3Wx1dGZllBILQ` |

This lists 90 of 91 actions. For anything not here, call `search_one_platform_actions` with platform `ayrshare`. The full catalog is at https://www.withone.ai/knowledge/ayrshare.

## When a call fails

The error comes from Ayrshare, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ayrshare

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
