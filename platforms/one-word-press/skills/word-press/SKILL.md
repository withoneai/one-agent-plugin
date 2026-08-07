---
name: word-press
description: WordPress is a popular open-source content management system (CMS) that enables individuals and businesses to create, manage, and publish websites or blogs with customizable themes, plugins, and tools. Read and write WordPress data through One: posts, publicizeconnections, tags, media, sitestats, menus and more, 230 actions with real parameter documentation. Use whenever the user asks to look something up in WordPress, create or update a record there, or build code against the WordPress API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: word-press
  generated-from: one-knowledge-base
---

# WordPress through One

WordPress is a popular open-source content management system (CMS) that enables individuals and businesses to create, manage, and publish websites or blogs with customizable themes, plugins, and tools.

One exposes WordPress through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `word-press` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm WordPress is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real WordPress account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Posts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Post by ID | GET | `/rest/v1.1/sites/{{site}}/posts/{{postId}}` | `conn_mod_def::GJ8WXNGbYGM::_Lphh8PRQNSqpQ7AJlIuQQ` |
| Get a Site Post by ID | GET | `/rest/v1.2/read/sites/{{site}}/posts/{{postId}}` | `conn_mod_def::GJ8WX-Xe3u4::APfslObqQgKEX_b5G_8gQg` |
| Get a Site Post by Slug | GET | `/sites/{{site}}/posts/slug:{{postSlug}}` | `conn_mod_def::GJ8WXXgUSok::gFZi1cVwT1KRGv0OStmpRQ` |
| List a Site’s Posts (Matching Query) | GET | `/rest/v1.1/sites/{{site}}/posts` | `conn_mod_def::GJ8WXEUg-j8::zOcTG5C7T1uVoVvhK22Irg` |
| List Posts Across All of the User’s Sites | GET | `/rest/v1.1/me/posts` | `conn_mod_def::GJ8WXQwFX5g::c-8sa6GkRuCJaHYlrnLVxA` |
| Create a Post for a Site | POST | `/sites/{{site}}/posts/new` | `conn_mod_def::GJ8WW_SF41c::2UIlchnrQjqCWCK2VaWxwA` |
| Delete a Post for a Site | POST | `/rest/v1.1/sites/{{site}}/posts/{{postId}}/delete` | `conn_mod_def::GJ8WW_e5GyU::NLOo-uV-TpuH26s2AdBxHQ` |
| Delete Multiple Posts for a Site | POST | `/sites/{{site}}/posts/delete` | `conn_mod_def::GJ8WXAN-Z9Q::a19uccUyTG65dBTn9Mx35g` |
| Edit a Site Post | POST | `/rest/v1.1/sites/{{site}}/posts/{{postId}}` | `conn_mod_def::GJ8WW_Rkdgk::kDL3z2YJRoSwWmGXMVaJgg` |
| Restore a Site Post (or Page) From Trash | POST | `/rest/v1.1/sites/{{site}}/posts/{{postId}}/restore` | `conn_mod_def::GJ8WXjekrHc::jz3N8VrfRYmWVUf9_N-aZQ` |
| Restore Multiple Posts for a Site | POST | `/sites/{{site}}/posts/restore` | `conn_mod_def::GJ8WXhGjQBw::t1PMQJooTIqwsqen0fW0qw` |
| Search a Site Post for Related Posts | POST | `/rest/v1.1/sites/{{site}}/posts/{{post}}/related` | `conn_mod_def::GJ8WXgzN_30::rMxS5KeASkaJC1jGs2TmZA` |

### PublicizeConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Publicize Connection for the Current User | GET | `/rest/v1.1/me/publicize-connections/{{publicizeConnectionId}}` | `conn_mod_def::GJ8WY4KIMlk::6sm0snimSK-3DoVat9WqTA` |
| Get a Site’s Publicize Connection | GET | `/rest/v1.1/sites/{{site}}/publicize-connections/{{publicizeConnectionId}}` | `conn_mod_def::GJ8WYtw5pdo::fONgBFgiRFSPtMwVMUnKBw` |
| List a Site’s Publicize Connections | GET | `/rest/v1.1/sites/{{site}}/publicize-connections/` | `conn_mod_def::GJ8WYkfPf2Y::4gbIiOtVRQaCOfxhExD_Tg` |
| List the Current User’s Publicize Connections | GET | `/rest/v1.1/me/publicize-connections/` | `conn_mod_def::GJ8WYlh7KlE::DEsH5wMaTK2Peyuiw1Hg5Q` |
| Create a New Publicize Connection for a Site | POST | `/sites/{{site}}/publicize-connections/new` | `conn_mod_def::GJ8WYR2nCz0::3l11VjdZRBSeo7NeipGW6Q` |
| Delete a Site’s Publicize Connection | POST | `/rest/v1.1/sites/{{site}}/publicize-connections/{{publicizeConnectionId}}/delete` | `conn_mod_def::GJ8WYaePE3A::2OZhJni8SYyW8Ygu1j6B5g` |
| Delete a User’s Publicize Connection | POST | `/rest/v1.1/me/publicize-connections/{{publicizeConnectionId}}/delete` | `conn_mod_def::GJ8WYbuzJMU::C9f3GK3XQBy7r1G_CO7e4A` |
| Update a Site’s Publicize Connection | POST | `/rest/v1.1/sites/{{site}}/publicize-connections/{{publicizeConnectionId}}` | `conn_mod_def::GJ8WZA_QGK4::umjUjhjsQfS8RDUZYU4Vnw` |
| Update the Current User’s Publicize Connection | POST | `/rest/v1.1/me/publicize-connections/{{publicizeConnectionId}}` | `conn_mod_def::GJ8WYtOy0js::Eoct_oezTbiMsH9GtiMHyQ` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Tag by Slug | GET | `/sites/{{site}}/tags/slug:{{tag}}` | `conn_mod_def::GJ8WbufoFSQ::mgAhofxAT-uvfLNAP11pHA` |
| Get Tag Details | GET | `/rest/v1.1/read/tags/{{tag}}` | `conn_mod_def::GJ8WYGzq4C8::lb__EgkdTwaC4dzXJQbJVw` |
| List a Site’s Tags | GET | `/sites/{{site}}/tags` | `conn_mod_def::GJ8WbubhaVs::Aez4EYqYT2msU9NNIbliUA` |
| List Top Tags Grouped by Alphabet Letter | GET | `/read/tags/alphabetic` | `conn_mod_def::GJ8WXrjxnvI::n8tC0xDyTnqc1TkHzN_W3w` |
| Create a New Tag for a Site | POST | `/sites/{{site}}/tags/new` | `conn_mod_def::GJ8WbaQLCGA::SPcW-gkcQByjkc8Sy4MHVA` |
| Delete a Site Tag by Slug | POST | `/rest/v1.1/sites/{{site}}/tags/slug:{{tag}}/delete` | `conn_mod_def::GJ8WbbLsmBI::lFkYUh-IRFi8Fmf8Ta1gJg` |
| Edit a Site Tag (by Slug) | POST | `/rest/v1.1/sites/{{site}}/tags/slug:{{tag}}` | `conn_mod_def::GJ8WbkoHt78::vd1Ug1M5Tn6wiE6gH2zhjw` |

### Media

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Media Item | GET | `/rest/v1.1/sites/{{site}}/media/{{mediaId}}` | `conn_mod_def::GJ8WWs2zUNY::GoYgJ3pwRbmHObIt4PXonA` |
| List a Site’s Media Library Items | GET | `/rest/v1.1/sites/{{site}}/media` | `conn_mod_def::GJ8WWur3fD8::e4zbZOw7ToifL9bSXEPf0g` |
| Delete a Site’s Media Item | POST | `/rest/v1.1/sites/{{site}}/media/{{mediaId}}/delete` | `conn_mod_def::GJ8WWkdKk2M::WpyzRvn1SQmWr7IVzvNlng` |
| Edit a Site’s Media Item | POST | `/rest/v1.2/sites/{{site}}/media/{{mediaId}}/edit` | `conn_mod_def::GJ8WWjqRaik::KF-DuLjIR0eC6FDdCml7_w` |
| Edit a Site’s Media Item (Basic Information) | POST | `/rest/v1.1/sites/{{site}}/media/{{mediaId}}` | `conn_mod_def::GJ8WWixgQEU::V9EHNbrOTry5al4p_MW21A` |
| Upload Media to a Site | POST | `/rest/v1.1/sites/{{site}}/media/new` | `conn_mod_def::GJ8WWsjueAk::Qkp130d-RrGoY3MKgJD3wA` |

### SiteStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Stats | GET | `/sites/{{site}}/stats` | `conn_mod_def::GJ8WaC9VwNQ::pJyT62BZS0qZYuqeuZ6qKQ` |
| View a Site’s File Downloads Stats | GET | `/sites/{{site}}/stats/file-downloads` | `conn_mod_def::GJ8WaS2lra4::DUTomJDzQWGUfrZmq_Ad5g` |
| View a Site’s Video Plays Stats | GET | `/sites/{{site}}/stats/video-plays` | `conn_mod_def::GJ8WaoZiTF8::wv9olW8jQWiwxhYD5VH_Bg` |
| View a Site’s Views by Country | GET | `/sites/{{site}}/stats/country-views` | `conn_mod_def::GJ8Wan9OkU4::HvwgMN9JTkKt2lHR-QiGEg` |
| View Email Clicks by Link for an Email Post (Site Stats) | GET | `/rest/v1.1/sites/{{site}}/stats/clicks/emails/{{postId}}/link` | `conn_mod_def::GJ8Wa_KxBaU::tzNBf4UXShGzYJnxJnfLdg` |

### Menus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Navigation Menu | GET | `/rest/v1.1/sites/{{site}}/menus/{{menuId}}` | `conn_mod_def::GJ8WW3GBcdo::u7YxLMFmQXauQ2iI94SA6g` |
| List a Site’s Navigation Menus | GET | `/sites/{{site}}/menus` | `conn_mod_def::GJ8WW2jRe30::E3eifHTyRkusCRGCmkGSrg` |
| Create a New Navigation Menu for a Site | POST | `/rest/v1.1/sites/{{site}}/menus/new` | `conn_mod_def::GJ8WWssLES0::EBpVxahoR5y_-cYyTF9P-w` |
| Delete a Site Navigation Menu | POST | `/sites/{{site}}/menus/{{menuId}}/delete` | `conn_mod_def::GJ8WWseLnNs::bMS6-fm3RAGhacxARl0XSA` |
| Update a Site’s Navigation Menu | POST | `/rest/v1.1/sites/{{site}}/menus/{{menuId}}` | `conn_mod_def::GJ8WW2hBdCw::HQoYZ2OwR6-SKUzfoeHELA` |

### Widgets

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site’s Widgets (Active and Inactive) | GET | `/sites/{{site}}/widgets` | `conn_mod_def::GJ8WZokj_Jk::-a6iYNDNQ6KNC0VaQpruHg` |
| Activate a Widget on a Site | POST | `/rest/v1.1/sites/{{site}}/widgets/new` | `conn_mod_def::GJ8WZAyYDdk::Qk3sbpKgR0yZ714ZPWsElg` |
| Deactivate a Widget on a Site (Delete if Already Deactivated) | POST | `/sites/{{site}}/widgets/widget:{{id}}/delete` | `conn_mod_def::GJ8WZAhygHo::_9DUUCKIQaGB9ag_GZkzUg` |
| Update a Site Widget by ID | POST | `/sites/{{site}}/widgets/widget:{{id}}` | `conn_mod_def::GJ8WZwyocDw::mIVsKKRTS4eN2y_6jQJcdA` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Comment | GET | `/rest/v1.1/sites/{{site}}/comments/{{commentId}}` | `conn_mod_def::GJ8WV1Or7Sw::4cYIUOeyRJKtlE0bHxsDyg` |
| List a Site’s Recent Comments | GET | `/rest/v1.1/sites/{{site}}/comments/` | `conn_mod_def::GJ8WV34DZa8::dbehRqF-QfqoUjSRrPrnBA` |
| Delete a Site Comment | POST | `/rest/v1.1/sites/{{site}}/comments/{{commentId}}/delete` | `conn_mod_def::GJ8WV1PQ4Og::O33gMnSCQmWj45lk-KhZ9Q` |
| Edit a Site Comment | POST | `/rest/v1.1/sites/{{site}}/comments/{{commentId}}` | `conn_mod_def::GJ8WV13asTg::DmpdHGE1S02JEEuWWf29-A` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site’s Categories | GET | `/sites/{{site}}/categories` | `conn_mod_def::GJ8WbjzuMaA::aQTdBF8QQKGLrKk0AUB-HA` |
| Create a New Category for a Site | POST | `/sites/{{site}}/categories/new` | `conn_mod_def::GJ8WbbFvJ-0::peP2QHXfTRC0j5BSAFIIAQ` |
| Delete a Site Category by Slug | POST | `/rest/v1.1/sites/{{site}}/categories/slug:{{category}}/delete` | `conn_mod_def::GJ8WbbsCfWY::3yx4Sc76T4eDyvCW2OZcKg` |
| Edit a Site Category (by Slug) | POST | `/rest/v1.1/sites/{{site}}/categories/slug:{{category}}` | `conn_mod_def::GJ8WbjJ44IQ::d7jcZpvTQzyyVz0ZFjuPKw` |

### TaxonomyTerms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Taxonomy Term by Slug | GET | `/rest/v1.1/sites/{{site}}/taxonomies/{{taxonomy}}/terms/slug:{{slug}}` | `conn_mod_def::GJ8Wb37P1HQ::JNYuDnF0Sf6ke_SxQvNLiA` |
| List a Site’s Taxonomy Terms | GET | `/sites/{{site}}/taxonomies/{{taxonomy}}/terms` | `conn_mod_def::GJ8WbuOGZk4::JdNGIU1xSvyMWT3_rRcoog` |
| Delete a Site Taxonomy Term (by Slug) | POST | `/rest/v1.1/sites/{{site}}/taxonomies/{{taxonomy}}/terms/slug:{{slug}}/delete` | `conn_mod_def::GJ8Wbk05e1U::yAiIFAoQSzebmjS46YRdNw` |
| Edit a Site Taxonomy Term (by Slug) | POST | `/rest/v1.1/sites/{{site}}/taxonomies/{{taxonomy}}/terms/slug:{{slug}}` | `conn_mod_def::GJ8Wbkh9H6A::LfGQfAhvT2OeZSeyH0wflg` |

### CommentLikes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Comment’s Likes (WordPress.com Site) | GET | `/rest/v1.1/sites/{{site}}/comments/{{commentId}}/likes/` | `conn_mod_def::GJ8WWAF2_0o::xhWiU9idSXmUZfCLPz0pPw` |
| Get a User’s Like Status for a Comment | GET | `/rest/v1.1/sites/{{site}}/comments/{{commentId}}/likes/mine/` | `conn_mod_def::GJ8WV_k3LSY::I-5XTXsJSn2zXsySYgGEyA` |
| Like a Site Comment (Add Like) | POST | `/rest/v1.1/sites/{{site}}/comments/{{commentId}}/likes/new` | `conn_mod_def::GJ8WV_8ldnA::Zx8nxiVeQI6P5aB6aEtvig` |
| Remove the Authenticated User’s Like from a Site Comment | POST | `/rest/v1.1/sites/{{site}}/comments/{{commentId}}/likes/mine/delete` | `conn_mod_def::GJ8WWIee-VE::LKpnFWyyRlG8BH23iDZ7Pw` |

### Sites

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Information | GET | `/rest/v1.1/sites/{{site}}` | `conn_mod_def::GJ8WZSthCVE::tToJrUy8QAKhVmEcJZ_dpg` |
| Get a Site’s SSH Access Setting Type | GET | `/sites/{{wpcomSite}}/hosting/ssh-access` | `conn_mod_def::GJ8WZ47y6zA::8Us3vr-lTvOZV6CzN4yOaw` |
| List the Current User’s Sites | GET | `/me/sites` | `conn_mod_def::GJ8WZK8ZkGU::3xSkhNFnRTulsbVdseYtag` |
| Search a Site (Elasticsearch Query) | POST | `/rest/v1.2/sites/{{site}}/search` | `conn_mod_def::GJ8WZpC7ODE::F8ae3xMpQ6mPV30kvYnmcw` |

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a VideoPress Video Poster Playlist | GET | `/rest/v1.1/videos/{{guid}}/playlist/{{format}}` | `conn_mod_def::GJ8WcrMaxWY::i1WOvhelQPmvwEO5ei5E3Q` |
| Get a VideoPress Video’s Poster | GET | `/videos/{{guid}}/poster` | `conn_mod_def::GJ8WcrVqK6Q::Sjg3dXjnS8q4vkLdIqWVTQ` |
| Get VideoPress Video Metadata | GET | `/rest/v1.1/videos/{{guid}}` | `conn_mod_def::GJ8Wco3vevY::2yHEn1YWReGtz1Bs8Pqbjw` |
| Upload a VideoPress Video Poster | POST | `/rest/v1.1/videos/{{guid}}/poster` | `conn_mod_def::GJ8WcpORlcw::sMj43jTaQLKMnxZDtumbyw` |

### SiteUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site User’s Details by Login | GET | `/rest/v1.1/sites/{{site}}/users/login:{{userId}}` | `conn_mod_def::GJ8Wb_lN10A::WeO3inP2SyG4NbF9FI7izA` |
| Delete a Site User | POST | `/rest/v1.1/sites/{{site}}/users/{{userId}}/delete` | `conn_mod_def::GJ8Wb35yPj8::W8STxQfEShisfjeAlG0dKw` |
| Update a Site User’s Details | POST | `/rest/v1.1/sites/{{site}}/users/{{userId}}` | `conn_mod_def::GJ8WcVh49-k::C8vilfP8SX-BddXUAaTXQQ` |

### PostLikes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current User’s Like Status for a Site Post | GET | `/rest/v1.1/sites/{{site}}/posts/{{postId}}/likes/mine/` | `conn_mod_def::GJ8WXYnt_4g::iyvXgUOnRM6QrDD97gjnvg` |
| List a Post’s Likes (for a Site) | GET | `/rest/v1.1/sites/{{site}}/posts/{{postId}}/likes/` | `conn_mod_def::GJ8WXLgjZp4::AVpWZIMKR9aNeOahQIIOOQ` |
| Like a Post | POST | `/rest/v1.1/sites/{{site}}/posts/{{postId}}/likes/new` | `conn_mod_def::GJ8WXZL9228::1GA0elGBQnyM0zIHygzI6w` |

### KeyringConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current User’s Keyring Connection (Deprecated) | GET | `/rest/v1.1/me/keyring-connections/{{keyringConnectionId}}` | `conn_mod_def::GJ8WYuUOKlw::7hHzjzzkSNW2fCBvTLnaAw` |
| List the Current User's Keyring Connections (Deprecated) | GET | `/me/keyring-connections/` | `conn_mod_def::GJ8WYkZUoH4::9TIOTx4kQj2d867SgFb_tg` |
| Delete a User’s Keyring Connection (Deprecated) | POST | `/rest/v1.1/me/keyring-connections/{{keyringConnectionId}}/delete` | `conn_mod_def::GJ8WYbKT3kM::O2PPcCD5S7CFXG6_W8lMAw` |

### SharingButtons

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site’s Sharing Buttons | GET | `/rest/v1.1/sites/{{site}}/sharing-buttons/` | `conn_mod_def::GJ8WYbSyOkQ::KzBNWFwMSk2pU6_LOjcLMA` |
| List Supported Sharing Button Services | GET | `/meta/sharing-buttons` | `conn_mod_def::GJ8WYi-y6jA::xuxJee6IQJW-FqIRdpAFvg` |
| Edit a Site’s Sharing Buttons | POST | `/sites/{{site}}/sharing-buttons` | `conn_mod_def::GJ8WYbym_Os::CTE0q_SdSC-oTdjkB-f0tw` |

### ConnectedApplications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current User’s Connected Application | GET | `/rest/v1.1/me/connected-applications/{{id}}` | `conn_mod_def::GJ8WcMHGnLg::6BmYRwFcT02baDvqy4VAsw` |
| List the Current User’s Connected Applications | GET | `/rest/v1.1/me/connected-applications/` | `conn_mod_def::GJ8Wb_jo9L8::4bET7JL6Q4StQwncNAGxXQ` |
| Delete a User’s Connected Application Access Token | POST | `/rest/v1.1/me/connected-applications/{{id}}/delete` | `conn_mod_def::GJ8Wb3RohDM::11z8v4qYSyen6IdkwQzR3A` |

### StagingSites

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site’s Staging Sites | GET | `/wpcom/v2/sites/{{wpcomSite}}/staging-site` | `conn_mod_def::GJ8WVtYHYAI::K_1QnglgQeeNHJagy4dQKg` |
| Create a Staging Site for a Site | POST | `/wpcom/v2/sites/{{wpcomSite}}/staging-site` | `conn_mod_def::GJ8WVlfhHDE::616iXiE_R7ul_9D1ynFeCA` |
| Delete a Site’s Staging Site | DELETE | `/wpcom/v2/sites/{{wpcomSite}}/staging-site/{{stagingSiteId}}` | `conn_mod_def::GJ8WVkQBxEM::O3OM4T0LTKW2sPNTg-w_BQ` |

This lists 90 of 230 actions. For anything not here, call `search_one_platform_actions` with platform `word-press`. The full catalog is at https://www.withone.ai/knowledge/word-press.

## When a call fails

The error comes from WordPress, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/word-press

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
