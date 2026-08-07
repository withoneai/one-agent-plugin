---
name: youtube-data
description: YouTube is a video hosting and streaming platform, and the YouTube Data API provides programmatic access to videos, channels, playlists, comments, and search results, allowing developers to build integrations for content management, analytics, discovery, and audience engagement workflows. Read and write YouTube Data data through One: videos, comments, captions, livebroadcasts, livechatmessages, channelsections and more, 83 actions with real parameter documentation. Use whenever the user asks to look something up in YouTube Data, create or update a record there, or build code against the YouTube Data API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: youtube-data
  generated-from: one-knowledge-base
---

# YouTube Data through One

YouTube is a video hosting and streaming platform, and the YouTube Data API provides programmatic access to videos, channels, playlists, comments, and search results, allowing developers to build integrations for content management, analytics, discovery, and audience engagement workflows.

One exposes YouTube Data through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `youtube-data` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm YouTube Data is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real YouTube Data account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ratings for Videos | GET | `/youtube/v3/videos/getRating` | `conn_mod_def::GKKPEuhLLbk::7s-e4xuPTh602PqgTlEHIA` |
| List Videos | GET | `/youtube/v3/videos` | `conn_mod_def::GKKPEyCYjmc::jTY7ENAyQ1uugwAPicQ3gg` |
| Delete a Video | DELETE | `/youtube/v3/videos` | `conn_mod_def::GKKPEuAivfU::cZPLigbbQuqST6AKWnWp7w` |
| Insert a YouTube Video | POST | `/youtube/v3/videos` | `conn_mod_def::GKKPExZEsRs::BbVp6cmoSRe_w1arK7S_sg` |
| Rate a Video | POST | `/youtube/v3/videos/rate` | `conn_mod_def::GKKPE7zMN2M::GGwxuLOcSdSmMIG3uTZySA` |
| Report Abuse for a Video | POST | `/youtube/v3/videos/reportAbuse` | `conn_mod_def::GKKPE6t_tXk::rD4CxOqdRz6gVDCMnzos_g` |
| Update a Video | PUT | `/youtube/v3/videos` | `conn_mod_def::GKKPE8pVOco::uRoXtLWDQ-mmps1Vq1ocCQ` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments | GET | `/youtube/youtube/v3/comments` | `conn_mod_def::GKKPCeGUHL8::N8QaLl3QSHiJzXLbL9vBOA` |
| Delete a Comment | DELETE | `/youtube/v3/comments` | `conn_mod_def::GKKPCKGHSIQ::_CVIgrIQRP--s9CKk7dcyQ` |
| Insert a YouTube Comment | POST | `/youtube/v3/comments` | `conn_mod_def::GKKPCc0F08c::Gj4OBw5dQZetsNebH5fDmQ` |
| Mark Comments as Spam | POST | `/youtube/v3/comments/markAsSpam` | `conn_mod_def::GKKPCbsMoXo::b7hK__DASpiBf2-o8GA-Aw` |
| Set Moderation Status for YouTube Comments | POST | `/youtube/v3/comments/setModerationStatus` | `conn_mod_def::GKKPCdlbATU::Upotyr-jRlK1TRYbJdx_rA` |
| Update a Comment | PUT | `/youtube/v3/comments` | `conn_mod_def::GKKPCdoaMnI::hLAY_cUETcqkQbb4npe2ow` |

### Captions

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Caption Track | GET | `/youtube/v3/captions/{{id}}` | `conn_mod_def::GKKPBy5GNmk::PcGvJYgtTlG8psh0G2k0sg` |
| List Video Captions | GET | `/youtube/v3/captions` | `conn_mod_def::GKKPB9fkzeg::468r40KXTpS4M0605Beqag` |
| Delete Captions | DELETE | `/youtube/v3/captions` | `conn_mod_def::GKKPBxamsk4::zqbu9n4uSU6Imolq0wL-NQ` |
| Insert a YouTube Caption Track | POST | `/youtube/youtube/v3/captions` | `conn_mod_def::GKKPByC3J7s::4CpHyFstQo-dyj94FpFYuA` |
| Update a YouTube Caption Track | PUT | `/youtube/v3/captions` | `conn_mod_def::GKKPB_G0kKo::HnuSlBvrQxi02JMwasSKNw` |

### LiveBroadcasts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Channel's Live Broadcasts | GET | `/youtube/v3/liveBroadcasts` | `conn_mod_def::GKKPC7YKjXg::JdDqMn1KSA-AKf7CFCBDPQ` |
| Bind a Live Broadcast to a Stream | POST | `/youtube/v3/liveBroadcasts/bind` | `conn_mod_def::GKKPCpKhwM4::FF8RAMufSKWADL1Obw3JPA` |
| Delete a Live Broadcast | DELETE | `/youtube/v3/liveBroadcasts` | `conn_mod_def::GKKPCziZUj8::ziPkrzDdSoqxjFa2R8ZFKA` |
| Transition a Live Broadcast | POST | `/youtube/v3/liveBroadcasts/transition` | `conn_mod_def::GKKPC0H1eco::jAnhopHjSp62dJCUHa_5hg` |
| Update a User's Live Broadcast | PUT | `/youtube/v3/liveBroadcasts` | `conn_mod_def::GKKPDF1C_Qs::0DHrkOa3Sj2Zc6wNONgAAg` |

### LiveChatMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Live Chat Messages | GET | `/youtube/v3/liveChat/messages` | `conn_mod_def::GKKPDdHmajA::hLAkm6DQTN-VBLpP3YM5Ew` |
| Stream Live Chat Messages | GET | `/youtube/v3/liveChat/messages/stream` | `conn_mod_def::GKKPFIkNL44::gcH2mRf-RhSxuEGovLOtwQ` |
| Delete a Live Chat Message | DELETE | `/youtube/v3/liveChat/messages` | `conn_mod_def::GKKPDQA6TIw::MjJOUnWDRVGRK2Xszre7Yg` |
| Insert a YouTube Live Chat Message | POST | `/youtube/v3/liveChat/messages` | `conn_mod_def::GKKPDEAhoNg::Hw8s5pS8QdWmiNZWdnAMhg` |
| Transition a Live Chat Message Event | POST | `/youtube/v3/liveChat/messages/transition` | `conn_mod_def::GKKPDYyRvg8::rMhrMkaOScGE94O8NmUsnA` |

### ChannelSections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Channel Sections | GET | `/youtube/v3/channelSections` | `conn_mod_def::GKKPCMTKoGY::t8HaYQsWTCyx0t2hPxvnyw` |
| Delete a Channel Section | DELETE | `/youtube/v3/channelSections` | `conn_mod_def::GKKPCTwSFm4::eCSqanrcS9S3sjdpw5IO0Q` |
| Insert a Channel Section | POST | `/youtube/v3/channelSections` | `conn_mod_def::GKKPCMNIFaA::fVhcHZ_2RqSP_ANWrZWHMQ` |
| Update Channel Section | PUT | `/youtube/v3/channelSections` | `conn_mod_def::GKKPCKAHF8w::NriukV_jQuqHdt4_gU0g8Q` |

### LiveStreams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Live Streams for a Channel | GET | `/youtube/v3/liveStreams` | `conn_mod_def::GKKPDl4plO8::WOq6B-FsTgKtOZS_cn_TaA` |
| Delete a User's Live Stream | DELETE | `/youtube/v3/liveStreams` | `conn_mod_def::GKKPDmjoIhY::ME9ibnZ2Qj2j-JRBkk8mGQ` |
| Insert a YouTube Live Stream | POST | `/youtube/v3/liveStreams` | `conn_mod_def::GKKPDlmaURY::uK7yGkC0TQGVyKW6KsqVqw` |
| Update a Live Stream | PUT | `/youtube/v3/liveStreams` | `conn_mod_def::GKKPDnWYNR4::-mljTB_tQVC4jCag8sWYfw` |

### PlaylistImages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Playlist Images | GET | `/youtube/v3/playlistImages` | `conn_mod_def::GKKPDxW9WWg::cL7U4GbkSOKW9fEM4H3AHw` |
| Delete Playlist Images | DELETE | `/youtube/v3/playlistImages` | `conn_mod_def::GKKPDwkmnT4::fdWUxeHeT2K5IN6C8QA69A` |
| Insert a Playlist Image | POST | `/youtube/v3/playlistImages` | `conn_mod_def::GKKPDyEAWTw::4ZuCDR4_SZ-p1CdNKFA4ZA` |
| Update Playlist Images | PUT | `/upload/youtube/v3/playlistImages` | `conn_mod_def::GKKPDw5ceB8::KlybpDuXQhKiN39dgU9oyw` |

### PlaylistItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Playlist Items | GET | `/youtube/v3/playlistItems` | `conn_mod_def::GKKPD-ndjXw::3Jq2iL2zRrePHcrq9GV7yQ` |
| Delete a Playlist Item | DELETE | `/youtube/v3/playlistItems` | `conn_mod_def::GKKPD7Kd-do::go16PmEYT7mrHbp_qFftTA` |
| Insert a Playlist Item | POST | `/youtube/v3/playlistItems` | `conn_mod_def::GKKPD7DBGEA::LfkzL-f1SXaG6eB6Ox2v3w` |
| Update Playlist Items | PUT | `/youtube/v3/playlistItems` | `conn_mod_def::GKKPD7jYqjc::lA7m_PxNRqeUPLp0nMRs-Q` |

### Playlists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Playlists | GET | `/youtube/v3/playlists` | `conn_mod_def::GKKPEI4xYlI::mH9wDgN0R7eIRgRzWV5q7Q` |
| Delete a Playlist | DELETE | `/youtube/v3/playlists` | `conn_mod_def::GKKPD7TewIs::ceyVQMGXQMynSYu9W-306Q` |
| Insert a YouTube Playlist | POST | `/youtube/v3/playlists` | `conn_mod_def::GKKPEI-cejw::QLhJIQ68RoaOk351DvRJtw` |
| Update a Playlist | PUT | `/youtube/v3/playlists` | `conn_mod_def::GKKPEIIULhs::8VcxXSpjQue5OdzIizc4xA` |

### ThirdPartyLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Third-Party Links | GET | `/youtube/v3/thirdPartyLinks` | `conn_mod_def::GKKPEkDKnXw::FJFtvAvGR_OnK7O7qhk07w` |
| Delete Third-Party Links | DELETE | `/youtube/v3/thirdPartyLinks` | `conn_mod_def::GKKPEXz6fI8::_-rk0YyaRLOlZP1mqYcv5w` |
| Insert a Third-Party Link | POST | `/youtube/v3/thirdPartyLinks` | `conn_mod_def::GKKPEj1BB4g::fllRVF1CQHydCVb5sjW7Tg` |
| Update Third-Party Links | PUT | `/youtube/v3/thirdPartyLinks` | `conn_mod_def::GKKPEkWf7N8::r-Kp8Jk2T8ys2qp_tZ1Rrg` |

### CommentThreads

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comment Threads | GET | `/youtube/v3/commentThreads` | `conn_mod_def::GKKPCpi8PV8::D4GT88-wSh6X1Em-D9pQRQ` |
| Insert a Comment Thread | POST | `/youtube/v3/commentThreads` | `conn_mod_def::GKKPCnWM_Jg::lqUJH2BlR0SwK8wWkmLmXA` |
| Update Comment Threads | PUT | `/youtube/v3/commentThreads` | `conn_mod_def::GKKPFFV9Fm0::MlcmqlXUQ6uuYkikmmyF0A` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List YouTube Subscriptions | GET | `/youtube/v3/subscriptions` | `conn_mod_def::GKKPEapWl0o::L8d3hQk1RaWawF66Z7jftA` |
| Delete a Subscription | DELETE | `/youtube/v3/subscriptions` | `conn_mod_def::GKKPEGIf3oY::TdVFcyaQTmS7kvireJMb2Q` |
| Insert a YouTube Subscription | POST | `/youtube/v3/subscriptions` | `conn_mod_def::GKKPEYL-GDY::8tdOS18tQpe4hm-U-m1Evw` |

### LiveChatModerators

| Action | Method | Path | Action id |
|---|---|---|---|
| List Live Chat Moderators | GET | `/youtube/v3/liveChat/moderators` | `conn_mod_def::GKKPDZlazjY::N_U3eiwGS82v3oTA7qYqhw` |
| Delete a Live Chat Moderator | DELETE | `/youtube/v3/liveChat/moderators` | `conn_mod_def::GKKPDYkxUsU::9Xe7MLDuT2CIew-LbgXPmg` |
| Insert a Live Chat Moderator | POST | `/youtube/v3/liveChat/moderators` | `conn_mod_def::GKKPDY_xeLQ::FE350VYdTFWsMo9gLvIfdQ` |

### LiveChatBans

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Live Chat Ban | DELETE | `/youtube/v3/liveChat/bans` | `conn_mod_def::GKKPDDiOGwE::mPEgh0arQXadhhsReHpJLA` |
| Insert a Live Chat Ban | POST | `/youtube/v3/liveChat/bans` | `conn_mod_def::GKKPDE6-97g::yhQN3_zmTqGNud12lIfBnQ` |

### Watermarks

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a Channel Watermark | POST | `/youtube/v3/watermarks/unset` | `conn_mod_def::GKKPFY-fnLQ::cIQJW7CuT1qXB1CYAw7SAQ` |
| Set a Channel Watermark | POST | `/upload/youtube/v3/watermarks/set` | `conn_mod_def::GKKPE8CXAhY::At_qQunORsSlWf2JJOAVUw` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Channels | GET | `/youtube/v3/channels` | `conn_mod_def::GKKPCBjQE60::zygriKUoRveDnsUAgdlwyA` |
| Update Channels | PUT | `/youtube/v3/channels` | `conn_mod_def::GKKPB9-zqxE::MyU_yZ15RjibFe1TF1dB-Q` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| List YouTube Activities | GET | `/youtube/v3/activities` | `conn_mod_def::GKKPBzqXC7E::dEGeHyjOSiqob2gZ3cNbMg` |

### AbuseReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Insert an Abuse Report | POST | `/youtube/v3/abuseReports` | `conn_mod_def::GKKPBzvvSQc::r74cNNMCSMqQ-2c-S1W--Q` |

### LiveBroadcast

| Action | Method | Path | Action id |
|---|---|---|---|
| Insert a Live Broadcast | POST | `/youtube/v3/liveBroadcasts` | `conn_mod_def::GKKPC0SqiJ8::hUYBiq0QSKCDSc2s4KAOEA` |

### MembershipsLevels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Channel Membership Pricing Levels | GET | `/youtube/v3/membershipsLevels` | `conn_mod_def::GKKPDv3i-zg::nMJ51lr9TT2s3In5QmsGSg` |

### SearchResources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Search Resources | GET | `/youtube/v3/search` | `conn_mod_def::GKKPEPj66co::N_9ZRxVwRNGloCs-rFMqiw` |

### SuperChatEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Super Chat Events | GET | `/youtube/v3/superChatEvents` | `conn_mod_def::GKKPEX9GKp4::cvS442ziQl6jQ7yGXVyDWw` |

### TestItem

| Action | Method | Path | Action id |
|---|---|---|---|
| Insert a YouTube Test Item | POST | `/youtube/v3/tests` | `conn_mod_def::GKKPEa0sps0::OodIIe5ETBGZ_UuRq-keKg` |

### VideoAbuseReportReasons

| Action | Method | Path | Action id |
|---|---|---|---|
| List Video Abuse Report Reasons | GET | `/youtube/v3/videoAbuseReportReasons` | `conn_mod_def::GKKPEkNT5FM::22K63f4jSsG3gY4ATN_Xmw` |

### Thumbnails

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a Video Thumbnail | POST | `/upload/youtube/v3/thumbnails/set` | `conn_mod_def::GKKPElL_g6I::slW-7F0rSaWq3Av8C1nbtg` |

### VideoCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Video Categories | GET | `/youtube/v3/videoCategories` | `conn_mod_def::GKKPEuJeF0g::_e6GbSQTS5yKP1PqFpa0Ig` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| List Channel Members | GET | `/youtube/v3/members` | `conn_mod_def::GKKPDn3EUKo::ucFyP8f9RcKUHldqlWIc1w` |

### ChannelBanners

| Action | Method | Path | Action id |
|---|---|---|---|
| Insert a Channel Banner | POST | `/upload/youtube/v3/channelBanners/insert` | `conn_mod_def::GKKPB_Lapz8::HTTI3kyRR2-DXiVGKl-QdQ` |

### I18nRegions

| Action | Method | Path | Action id |
|---|---|---|---|
| List YouTube i18n Regions | GET | `/youtube/v3/i18nRegions` | `conn_mod_def::GKKPCnzwWDQ::Nq0i3lcxSECnzv6x_t2Ddw` |

### I18nLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| List YouTube i18n Languages | GET | `/youtube/v3/i18nLanguages` | `conn_mod_def::GKKPCn3eYu8::K4Q276aQSxWAsms5E846ag` |

### VideoTrainability

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Video Trainability | GET | `/youtube/v3/videoTrainability` | `conn_mod_def::GKKPE7CZ5bE::GTnx0lCLRIWkpxfZUU4xaA` |

### LiveBroadcastCuepoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Insert a Live Broadcast Cuepoint | POST | `/youtube/v3/liveBroadcasts/cuepoint` | `conn_mod_def::GKKPC0z8tuQ::b9Ux_X8fTUKdsMKgo7aGrQ` |

## When a call fails

The error comes from YouTube Data, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/youtube-data

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
