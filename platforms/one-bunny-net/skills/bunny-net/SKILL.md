---
name: bunny-net
description: Bunny.net is a content delivery and edge cloud platform that provides CDN, storage, streaming, DNS, and security services through APIs and global infrastructure, allowing developers and teams to deliver content, media, and applications with low latency and scalable performance. Read and write Bunny.net data through One: videos, databases, videolibrary, applications, pullzone, livestreams and more, 293 actions with real parameter documentation. Use whenever the user asks to look something up in Bunny.net, create or update a record there, or build code against the Bunny.net API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bunny-net
  generated-from: one-knowledge-base
---

# Bunny.net through One

Bunny.net is a content delivery and edge cloud platform that provides CDN, storage, streaming, DNS, and security services through APIs and global infrastructure, allowing developers and teams to deliver content, media, and applications with low latency and scalable performance.

One exposes Bunny.net through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bunny-net` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Bunny.net is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Bunny.net account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Video from a Library | GET | `/library/{{libraryId}}/videos/{{videoId}}` | `conn_mod_def::GKys8rn-sbg::m5uNwJS-SiGzKOvmLNSMZg` |
| Get a Video's Heatmap Data | GET | `/library/{{libraryId}}/videos/{{videoId}}/play/heatmap` | `conn_mod_def::GKys8tq5O_g::XeAnOEaVRBeqqg4-VVmrUA` |
| Get a Video's Storage Size Info | GET | `/library/{{libraryId}}/videos/{{videoId}}/storage` | `conn_mod_def::GKys9D5vx7A::Aq6ke0fPQhq0HmZUJyT79w` |
| List a Library's Videos | GET | `/library/{{libraryId}}/videos` | `conn_mod_def::GKys9EL76zg::kfuJ8LtkTy6nN2VIs-5DoA` |
| Add Caption to a Library Video | POST | `/library/{{libraryId}}/videos/{{videoId}}/captions/{{srclang}}` | `conn_mod_def::GKys8Q22Z6g::MVLg5y-gT3i8R7qOjU0C1w` |
| Add Output Codec to a Library Video | PUT | `/library/{{libraryId}}/videos/{{videoId}}/outputs/{{outputCodecId}}` | `conn_mod_def::GKys8UEG-Jg::UlC3OpinRzO5HYNUnUpa9g` |
| Create a Video in a Library | POST | `/library/{{libraryId}}/videos` | `conn_mod_def::GKys8glQstA::F9_02wPTR7KmzELuceCVsw` |
| Fetch a Library Video From a URL | POST | `/library/{{libraryId}}/videos/fetch` | `conn_mod_def::GKys8foLZZA::5w46A6lnQOOCmLDHmc4bJA` |
| Reencode a Library Video | POST | `/library/{{libraryId}}/videos/{{videoId}}/reencode` | `conn_mod_def::GKys9F9oaHg::Z9bkJJTlRRGqiRdbG5IxZg` |
| Repackage a Library Video | POST | `/library/{{libraryId}}/videos/{{videoId}}/repackage` | `conn_mod_def::GKys9EHtcQg::G_YreNSiT_yCy-HeFmijGA` |
| Set a Video Thumbnail | POST | `/library/{{libraryId}}/videos/{{videoId}}/thumbnail` | `conn_mod_def::GKys9IQGtMg::ALYFwasMRcKey9bdbvOQJA` |
| Trigger Smart Actions for a Video | POST | `/library/{{libraryId}}/videos/{{videoId}}/smart` | `conn_mod_def::GKys9iCRDsg::h32Oe6DUSXWxUrCTYdRG6g` |

### Databases

| Action | Method | Path | Action id |
|---|---|---|---|
| List Databases | GET | `/database/v2/databases` | `conn_mod_def::GKys4dK7dVg::R5sxW7XWT7eVdyLRnyTW3g` |
| List Databases | GET | `/database/v1/databases` | `conn_mod_def::GKys4B9EAxA::-oLcr0heQP2OIEu3wTAEDw` |
| Read a Database | GET | `/database/v2/databases/{{dbId}}` | `conn_mod_def::GKys4nHHFJA::dJrz7DbcTQmAT1ZVJ-p2Vg` |
| Read a Database | GET | `/v1/databases/{{dbId}}` | `conn_mod_def::GKys4ARt_IA::oi8LaaYKSheyeEbDQh6tQQ` |
| Create Database | POST | `/database/v2/databases` | `conn_mod_def::GKys4X1QHkg::l1N3MaTcScexcC5u1x6aCw` |
| Create Database | POST | `/v1/databases` | `conn_mod_def::GKys3TCm4IA::lUFn5FKAQ966BLT2KLIANg` |
| Delete a Database | DELETE | `/v2/databases/{{dbId}}` | `conn_mod_def::GKys4WFXTlA::4dj8q5p-T2CgoX6O1ukDZA` |
| Delete a Database | DELETE | `/v1/databases/{{dbId}}` | `conn_mod_def::GKys2-cAscg::a0lDyA_7TIusRdz1IXiNwg` |
| Destructive Restore for a Database | POST | `/v1/databases/{{dbId}}/restore` | `conn_mod_def::GKys2y5F7Eg::6tWq7P0VQ_iSo-4qr7-lSg` |
| Fork a Database | POST | `/v1/databases/{{dbId}}/fork` | `conn_mod_def::GKys2-D9hnA::tLmEzEUlQXmHmtRJqv0QLg` |
| Invalidate a Database's Auth Tokens | POST | `/v1/databases/{{dbId}}/auth/invalidate` | `conn_mod_def::GKys4Am5xog::two5EdC2T--V1aVrVWWuAA` |
| Update a Database | PATCH | `/database/v2/databases/{{dbId}}` | `conn_mod_def::GKys4mEgQ1A::qHAiUnWESMe2kZUbYdRnFQ` |

### VideoLibrary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Video Library | GET | `/videolibrary/{{id}}` | `conn_mod_def::GKytCNQ0neg::xA2T_JvLRSaRSQC4DuElxg` |
| Add a Live Thumbnail to a Video Library | PUT | `/videolibrary/{{id}}/live/thumbnail` | `conn_mod_def::GKytB5L0NvA::Sls9Hh7nTxqrVrpUcsSK2A` |
| Add Blocked Referer to a Video Library | POST | `/videolibrary/{{id}}/addBlockedReferrer` | `conn_mod_def::GKytB5zX8_A::OWuaa27-R7-KftelhVPeqQ` |
| Add Live Watermark to a Video Library | PUT | `/videolibrary/{{id}}/live/watermark` | `conn_mod_def::GKytB6KihwA::RAysP4fhRzKELPA6IgGBTQ` |
| Add Video Library | POST | `/videolibrary` | `conn_mod_def::GKytB6L3Wdg::Y-SZnngYTm6rYkmbCyHZxg` |
| Add Watermark to a Video Library | PUT | `/videolibrary/{{id}}/watermark` | `conn_mod_def::GKytB42ID8A::h5T63kwQQjSr9ep7zpuEHw` |
| Delete a Video Library | DELETE | `/videolibrary/{{id}}` | `conn_mod_def::GKytCD7lNoA::mJ2P0GsRQJS0lj2bZm9osA` |
| Remove Allowed Referer From a Video Library | POST | `/videolibrary/{{id}}/removeAllowedReferrer` | `conn_mod_def::GKytCOxaLmA::SbpKYHqrTkiFNDmU-JXldQ` |
| Reset a Video Library API Key | POST | `/videolibrary/{{id}}/resetApiKey` | `conn_mod_def::GKytCcJbG8g::C4qWgjHnSoSgqtnCFeAHMw` |
| Reset a Video Library's Read Only API Key | POST | `/videolibrary/{{id}}/resetReadOnlyApiKey` | `conn_mod_def::GKytCY2fWkg::o_CKDq9-SO-NXO75Y3fUQQ` |
| Update a Video Library | POST | `/videolibrary/{{id}}` | `conn_mod_def::GKytCY2srHA::JiGpu01STQWo4vypOmineQ` |

### Applications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Application | GET | `/apps/{{appId}}` | `conn_mod_def::GKys0cMk5kg::ltqi-LqzSmGnW22HSmBDIw` |
| Get an Application Overview | GET | `/apps/{{appId}}/overview` | `conn_mod_def::GKys0V-wY6g::Vm2xzABjQIS7ANe0ge2elA` |
| List Applications | GET | `/mc/apps` | `conn_mod_def::GKys1XkP9iA::IeS5lSvVSNKUcPV-vi61Mg` |
| Add Application | POST | `/mc/apps` | `conn_mod_def::GKys0LTP5dA::FD1FX5LTTtqTl5DdYfoW1A` |
| Delete Application | DELETE | `/apps/{{appId}}` | `conn_mod_def::GKys0V-lS9A::NSvYm1FuQDWRbYX3v74sHA` |
| Patch an Application | PATCH | `/apps/{{appId}}` | `conn_mod_def::GKys1W-2slg::okOsii0CR9uqLssDq1EcYA` |
| Restart an Application | POST | `/apps/{{appId}}/restart` | `conn_mod_def::GKys1W1J4Kg::vlmyQ2OLSqOHOzq3Wwkdaw` |
| Undeploy an Application | POST | `/apps/{{appId}}/undeploy` | `conn_mod_def::GKys1XL6LSg::EV9rxnkHRwe5tBvSU9Q2jQ` |
| Update an Application | PUT | `/apps/{{appId}}` | `conn_mod_def::GKys1hyq1cA::31uzhkxpRmiS-toa7jsQNQ` |
| Update an Application's Autoscaling | PUT | `/apps/{{appId}}/autoscaling` | `conn_mod_def::GKys1iWzs4A::S65UrxpjS0eSkvygPXxZMQ` |

### PullZone

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pull Zone | GET | `/pullzone/{{id}}` | `conn_mod_def::GKys-whkFeg::BYiSK51dReC-suPYTVswLA` |
| Load Free Certificate | GET | `/pullzone/loadFreeCertificate` | `conn_mod_def::GKys-xb7jyg::fzn6D5LCQYOdvogszbcElg` |
| Add Pull Zone | POST | `/pullzone` | `conn_mod_def::GKys-UozP1A::bBv6b3oUQ-ex3k-aCwtjaA` |
| Check Pull Zone Availability | POST | `/pullzone/checkavailability` | `conn_mod_def::GKys-kmHH6g::3Hz2s29mTYOwWQeaZjV0FA` |
| Delete a Pull Zone | DELETE | `/pullzone/{{id}}` | `conn_mod_def::GKys-kqFzuA::VMbU6DzdTnm6cOSXQGodDg` |
| Purge a Pull Zone's Cache | POST | `/pullzone/{{id}}/purgeCache` | `conn_mod_def::GKys--_u8TA::h8QnWCAbTta6ZA3I7-V1kw` |
| Remove an Allowed Referer from a Pull Zone | POST | `/pullzone/{{id}}/removeAllowedReferrer` | `conn_mod_def::GKys_O3MF9g::owSqZ34KSy6fY-rH9JlTBA` |
| Reset a Pull Zone Token Key | POST | `/pullzone/{{id}}/resetSecurityKey` | `conn_mod_def::GKys_YcABKA::9QijZdHhQWysENnyUqEQcw` |
| Set Force SSL for a Pull Zone | POST | `/pullzone/{{id}}/setForceSSL` | `conn_mod_def::GKys_bHs-IA::7DLVGkL7SOqkv5B3j9EwTg` |
| Update a Pull Zone | POST | `/pullzone/{{id}}` | `conn_mod_def::GKys_lBpzQg::h4j9Zj89QiavYuEc9XBXkQ` |

### LiveStreams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Live Stream's Bitrate History | GET | `/library/{{libraryId}}/live/{{streamId}}/bitrate-history` | `conn_mod_def::GKys7ygUfYA::3z-wEgzoSuOrWC0SHagmGg` |
| Get a Live Stream's Latest Bitrate | GET | `/library/{{libraryId}}/live/{{streamId}}/current-bitrate` | `conn_mod_def::GKys8GsGA2A::CwuLZlHEQEy6qp7dkyjrPA` |
| Get a Live Stream's Play Data | GET | `/library/{{libraryId}}/live/{{streamId}}/play` | `conn_mod_def::GKys7ovX_Ag::stXFlGtjTX-OHKxMgPjg1A` |
| List a Library’s Live Streams | GET | `/library/{{libraryId}}/live` | `conn_mod_def::GKys7z4cK1A::NBE1TjdZREWHJKfmTh6oBg` |
| Delete a Library Live Stream | DELETE | `/library/{{libraryId}}/live/{{streamId}}` | `conn_mod_def::GKys7l5-UdA::QTfoyiCWR_CtQkjE2bc7Sw` |
| Regenerate a Live Stream Key | PUT | `/library/{{libraryId}}/live/{{streamId}}/regenerate-key` | `conn_mod_def::GKys7xtXPpg::8WtSg4JHQfKp9OduQt3aZA` |
| Start a Live Stream in a Library | PUT | `/library/{{libraryId}}/live/{{streamId}}/start` | `conn_mod_def::GKys8PLmKZA::ZzNnHYeIS5KCdzdlviHpXQ` |
| Stop a Library Live Stream | PUT | `/library/{{libraryId}}/live/{{streamId}}/stop` | `conn_mod_def::GKys8RMwKzg::9ZP0dq_gSX-CXTsYaDMP4g` |

### DnsZone

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a DNS Zone | GET | `/dnszone/{{id}}/export` | `conn_mod_def::GKys6CRXN0g::SAq1TwYtSoaTDubi-_yK-Q` |
| Export a DNS Zone | GET | `/dnszone/{{id}}/export` | `conn_mod_def::GKys6KX7T6A::7Nu2OmIFRpaN7resR8-VxA` |
| Get a DNS Zone | GET | `/dnszone/{{id}}` | `conn_mod_def::GKys6LECckg::37H_2Q6VSxy_2_kUQzvsAQ` |
| Add DNS Zone | POST | `/dnszone` | `conn_mod_def::GKys5BbP_hA::mKFa0hakQOS3H0yfpUaYMA` |
| Delete a DNS Zone | DELETE | `/dnszone/{{id}}` | `conn_mod_def::GKys6B7ivzA::GrdTznYjTUWn2jISABjvLw` |
| Import DNS Records for a DNS Zone | POST | `/dnszone/{{zoneId}}/import` | `conn_mod_def::GKys6XQ7LUA::hEkWA_m9R6W3R0x_S77ILA` |
| Update a DNS Zone | POST | `/dnszone/{{id}}` | `conn_mod_def::GKys6g-LVtA::IOtkd4BDTsSwLn-0K600Iw` |

### DatabaseGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Database Group's Aggregated Usage | GET | `/v1/groups/{{groupId}}/aggregated_usage` | `conn_mod_def::GKys4qvSzmg::6H6go7JrT9-C_wDEqpf6EA` |
| List Database Groups | GET | `/database/v1/groups` | `conn_mod_def::GKys40y_wGA::IiLxZ6iVTEq3JK9EgSVQSw` |
| Read a Database Group | GET | `/v1/groups/{{groupId}}` | `conn_mod_def::GKys4y9PW_g::2Raf7yiHRUe7V5M1CfzTvA` |
| Create a Database Group | POST | `/database/v1/groups` | `conn_mod_def::GKys4meihdA::o9Wrb_poSJCCq3LrVH9ieQ` |
| Delete a Database Group | DELETE | `/v1/groups/{{groupId}}` | `conn_mod_def::GKys4zgXORg::4SVJc6EgSWKWe1HZGYTpbw` |
| Invalidate Tokens for a Database Group | POST | `/v2/databases/{{dbId}}/auth/revoke` | `conn_mod_def::GKys4WOEfvA::fFjHubp9TfiB5yJVkrYIPA` |
| Update a Database Group | PATCH | `/v1/groups/{{groupId}}` | `conn_mod_def::GKys5BBD_2A::R7lyGnpISHiL4XX5LTstMA` |

### StorageZone

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Storage Zone | GET | `/storagezone/{{id}}` | `conn_mod_def::GKytApafdiA::jUWgl2IAQYqokCeZakDZcw` |
| Add Storage Zone | POST | `/storagezone` | `conn_mod_def::GKytAdlVNaA::UA6fo_HwRbiaFX9lFBlyqw` |
| Delete a Storage Zone | DELETE | `/storagezone/{{id}}` | `conn_mod_def::GKytAqGucJg::YCSVomDtSfu859QfK2u0HA` |
| Reset a Storage Zone Password | POST | `/storagezone/{{id}}/resetPassword` | `conn_mod_def::GKytA0hht7A::wxZh8JI7R0qRfncKvvXsxA` |
| Reset Read-Only Password for a Storage Zone | POST | `/storagezone/resetReadOnlyPassword` | `conn_mod_def::GKytA0zr_qg::pv-SJIrvQtWf4iJWHi0oCg` |
| Update a Storage Zone | POST | `/storagezone/{{id}}` | `conn_mod_def::GKytA1InlEA::4x30-SHlRgKYW2kvEUWYkQ` |

### LibraryVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Cleanup Unconfigured Resolutions for a Library Video | POST | `/library/{{libraryId}}/videos/{{videoId}}/resolutions/cleanup` | `conn_mod_def::GKys8fcFzoA::t7bDUkKAShOTy1qvONVeyQ` |
| Delete a Library Video | DELETE | `/library/{{libraryId}}/videos/{{videoId}}` | `conn_mod_def::GKys8cecMAg::4Bkv_L74TbS7S17jfaAImQ` |
| Transcribe a Library Video | POST | `/library/{{libraryId}}/videos/{{videoId}}/transcribe` | `conn_mod_def::GKys9c5ilyA::vxEULQFkQySVQRxucgCLqw` |
| Update a Library Video | POST | `/library/{{libraryId}}/videos/{{videoId}}` | `conn_mod_def::GKys9SMHwPg::DGfvrhbnS8u5tC2K5sb1dA` |
| Upload Video to a Library Video | PUT | `/library/{{libraryId}}/videos/{{videoId}}` | `conn_mod_def::GKys9WAiQXA::sUWFzxdoTe-ow-MwX7NBnw` |

### ContainerRegistries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Container Registry | GET | `/registries/{{registryId}}` | `conn_mod_def::GKys2RkVlcg::3-wPxTd6S82eKgGWJ9Z3Sw` |
| List Container Registries | GET | `/mc/registries` | `conn_mod_def::GKys2l5LK8A::l6BdbhVQQ8-n0aSQ9b_N6g` |

3 more ContainerRegistries actions are available through search.

This lists 90 of 293 actions. For anything not here, call `search_one_platform_actions` with platform `bunny-net`. The full catalog is at https://www.withone.ai/knowledge/bunny-net.

## When a call fails

The error comes from Bunny.net, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bunny-net

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
