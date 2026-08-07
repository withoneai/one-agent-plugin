---
name: x
description: X is a real-time social networking platform for sharing short-form content, multimedia, and updates. It enables individuals, brands, and communities to engage through posts, live discussions, and trending conversations globally. Read and write X data through One: users, tweets, posts, dmevents, lists, webhooks and more, 148 actions with real parameter documentation. Use whenever the user asks to look something up in X, create or update a record there, or build code against the X API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: x
  generated-from: one-knowledge-base
---

# X through One

X is a real-time social networking platform for sharing short-form content, multimedia, and updates. It enables individuals, brands, and communities to engage through posts, live discussions, and trending conversations globally.

One exposes X through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `x` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm X is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real X account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/2/users/{{id}}` | `conn_mod_def::GJLaTlV6bzg::Z7tBxXNERxu0Fj3MVt9Gyg` |
| Get a User by Username | GET | `/2/users/by/username/{{username}}` | `conn_mod_def::GJLaS-7YzI8::rLOLcqh-S1qLXQftCGEGUg` |
| Get the Authenticated User (“me”) | GET | `/2/users/me` | `conn_mod_def::GJLaTJusYDc::A67WMmeURuC0nSuzIgfAGg` |
| Get Users by IDs | GET | `/2/users` | `conn_mod_def::GJLaSoaG_q8::opUbLPziStmEmFOurE7wKQ` |
| Get Users by Usernames | GET | `/2/users/by` | `conn_mod_def::GJLaSyQLZZ0::7O7jITB5R82dDWjXXlnENQ` |
| List a User’s Following | GET | `/2/users/{{id}}/following` | `conn_mod_def::GJLaWJy37M0::-EO33OpxT2KmP5EUk9gN1w` |
| List Users Who Reposted a Post (by Post ID) | GET | `/2/tweets/{{id}}/retweeted_by` | `conn_mod_def::GJLaR_J7Fs8::IP-kfMhITzu0KaIdDQHNaw` |
| Search Users | GET | `/users/search` | `conn_mod_def::GJLaTZDzJRg::qJ2m-kBzQnmy7lP700WglQ` |
| Block DMs for a User | POST | `/2/users/{{id}}/dm/block` | `conn_mod_def::GJLaVD0ZiXw::yGaxVkRwS_Oj24h99BDFWw` |
| Follow a User (from a User’s Following Collection) | POST | `/2/users/{{id}}/following` | `conn_mod_def::GJLaWRKzJv8::J2B3G0YNSxa8J3V3FwGemw` |
| Mute a User for an Authenticated Source User | POST | `/2/users/{{id}}/muting` | `conn_mod_def::GJLaXr-OGWI::DgtKoa9WQhO9g0WEXEuceQ` |
| Unblock DMs for a User | POST | `/2/users/{{id}}/dm/unblock` | `conn_mod_def::GJLaVMxLJGc::B_PAlGz-TxC_Q4VgiGU0fw` |

2 more Users actions are available through search.

### Tweets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Reposts for a Tweet | GET | `/2/tweets/{{id}}/retweets` | `conn_mod_def::GJLaSJWN7Hc::6ey8yL3fRY23E5zC8SCnGA` |
| List a User's Posts (Tweets) | GET | `/2/users/{{ID}}/tweets` | `conn_mod_def::GJLaYzxwiB8::SLxpkxgzRJCXrerGQ8YpDQ` |
| Stream 10% Sampled Posts (Sample10 Stream) | GET | `/2/tweets/sample10/stream` | `conn_mod_def::GJLaOhmNWPU::ZQarIDZcSAqU4y_6w0Sngw` |
| Stream All Posts (Firehose) | GET | `/tweets/firehose/stream` | `conn_mod_def::GJLaM-Q5Jkk::_OssEoivSTOou1XdKEsaqA` |
| Stream English Posts (Firehose) | GET | `/tweets/firehose/stream/lang/en` | `conn_mod_def::GJLaNUJR0Zo::gcgGc_NwTQarKJzFG5cqfQ` |
| Stream Filtered Posts (Filtered Stream) | GET | `/2/tweets/search/stream` | `conn_mod_def::GJLaOqCmfrI::Dov-NXbnTeGEteIN0gKVSA` |
| Stream Japanese-language Posts (Firehose) | GET | `/tweets/firehose/stream/lang/ja` | `conn_mod_def::GJLaNgRq8Zw::rJrnJi4vRryoysKjFPUV6Q` |
| Stream Korean-language Posts (Firehose) | GET | `/tweets/firehose/stream/lang/ko` | `conn_mod_def::GJLaNppBJZ8::4gokadejS3ykdypIRzGiUQ` |
| Stream Portuguese-Language Posts (Firehose) | GET | `/tweets/firehose/stream/lang/pt` | `conn_mod_def::GJLaN0KstLg::s1db-GN-SLiZVCfLu5_lRg` |
| Stream Sampled Posts | GET | `/tweets/sample/stream` | `conn_mod_def::GJLaOKwfYwM::vcIYKf7oQ8GloEH7CP8cFA` |
| Delete a Post (Tweet) by ID | DELETE | `/2/tweets/{{id}}` | `conn_mod_def::GJLaRiqSvQc::mYpnHkpOR1KA43BNg4e8Aw` |
| Hide (or Unhide) a Reply Tweet | PUT | `/2/tweets/{{TWEET_ID}}/hidden` | `conn_mod_def::GJLaSQbw5YI::iZ992LP3TzO2iV0CUAiPow` |

### Posts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Post by ID | GET | `/2/tweets/{{id}}` | `conn_mod_def::GJLaRawKmb4::XqYRWA9aRFiHRIvG7Qi5Vg` |
| Get Posts by IDs | GET | `/2/tweets` | `conn_mod_def::GJLaQREdqoc::S9NGR7b4S3q_dU2u3lNIEw` |
| List Posts in a List | GET | `/2/lists/{{id}}/tweets` | `conn_mod_def::GJLaIe0llbI::u6psT6uDT82HwPVmFim8Ng` |
| Search All Posts (Full-Archive) | GET | `/2/tweets/search/all` | `conn_mod_def::GJLaREvbOpE::tkOv4U8hSjCmy0-lKsKWDA` |
| Search Recent Posts | GET | `/tweets/search/recent` | `conn_mod_def::GJLaRPb3hDk::YzVojtkBQOG0BlKQmwugsg` |
| Create or Edit Post | POST | `/2/tweets` | `conn_mod_def::GJLaQYKOXew::Ha2rKcMVTwaFjzSQWpUFvw` |

### DmEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a DM Event by ID | GET | `/2/dm_events/{{EVENT_ID}}` | `conn_mod_def::GJLaG3Mniv4::txMAE_yHSUuVxhFC8GWpNQ` |
| Get DM Events | GET | `/dm_events` | `conn_mod_def::GJLaGvQXHy0::-XSyXgJYRo-APWIqviGbVQ` |
| Get DM Events for a One-to-One DM Conversation (by Participant) | GET | `/2/dm_conversations/with/{{PARTICIPANT_ID}}/dm_events` | `conn_mod_def::GJLaGMsE_60::F5JbSwB5SMqZsQnaNgjRIA` |
| List DM Events for a DM Conversation | GET | `/2/dm_conversations/{{id}}/dm_events` | `conn_mod_def::GJLaGm_2aIU::oOe-R0alTtyKftm_BPpTYA` |
| Delete a DM Event | DELETE | `/2/dm_events/{{EVENT_ID}}` | `conn_mod_def::GJLaG-LvhA4::ayQmPTeORmy6B7bDMyBSBw` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List by ID | GET | `/2/lists/{{id}}` | `conn_mod_def::GJLaHalYzSM::wj5O0nDaSeGb-N-hPfRlBQ` |
| Add a Member to a List | POST | `/2/lists/{{ID}}/members` | `conn_mod_def::GJLaIB7gD0Y::-isa551fTzuOpV821ED8Jg` |
| Create a List | POST | `/2/lists` | `conn_mod_def::GJLaHSfDGDM::o_sg7oO_QVGk1vCESYuRzA` |
| Delete a List | DELETE | `/2/lists/{{id}}` | `conn_mod_def::GJLaHmvFEEo::0RY1ad8nTeOyEphXiGi0eA` |
| Update a List | PUT | `/2/lists/{{ID}}` | `conn_mod_def::GJLaHgszitA::Us2Qi4yJTtCECS3sgQ1Bew` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks (Client App) | GET | `/2/webhooks` | `conn_mod_def::GJLaZyc9zLU::JWivMDkMRH-aSS-9LDGaPQ` |
| Create a Webhook | POST | `/2/webhooks` | `conn_mod_def::GJLaZ5MWlHk::KlwJPsJ4Q2iyle3n6dHDcQ` |
| Delete a Stream Link for a Webhook | DELETE | `/2/tweets/search/webhooks/{{WEBHOOK_ID}}` | `conn_mod_def::GJLaZr1yz8g::qxkNT5fOSYa-CTDNUuY6jA` |
| Delete a Webhook | DELETE | `/2/webhooks/{{WEBHOOK_ID}}` | `conn_mod_def::GJLaaMnXsVk::u4iXu5ZlRUeyg3-9eo4bYQ` |
| Validate a Webhook (Trigger CRC Check) | PUT | `/2/webhooks/{{WEBHOOK_ID}}` | `conn_mod_def::GJLaaGPU2z0::y3t-lOHOSQaH3HuUH7AKXg` |

### Connections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Connection History | GET | `/connections` | `conn_mod_def::GJLaFkxNxDI::-B608IMTSC-uVEbIW71hlQ` |
| Terminate All Connections | DELETE | `/connections/all` | `conn_mod_def::GJLaFwVoMq8::QqsSkzK6QVa-v2cDU26k9g` |
| Terminate Multiple Connections | DELETE | `/2/connections` | `conn_mod_def::GJLaFqhoJuQ::35w-TPn_SXeDUssle0dy_w` |
| Terminate Streaming Connections for an Endpoint | DELETE | `/2/connections/{{endpoint_id}}` | `conn_mod_def::GJLaF4YJ16g::Qbo54_JWSMiGDoN_Mr2KMw` |

### Spaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Space by ID | GET | `/2/spaces/{{id}}` | `conn_mod_def::GJLaLyOKyL0::g-9ORwpsSyKzDbCaUI20zg` |
| Get Spaces by Creator IDs | GET | `/2/spaces/by/creator_ids` | `conn_mod_def::GJLaLd23lag::ztZpYnLRQW22KZ5los8fnQ` |
| Get Spaces by IDs | GET | `/2/spaces` | `conn_mod_def::GJLaLNiy_24::h3ydINvMSMefGXl8WQAe_w` |
| Search Spaces | GET | `/2/spaces/search` | `conn_mod_def::GJLaLlfEHes::1_6EovqkTzyElrO79mrFyA` |

### Likes

| Action | Method | Path | Action id |
|---|---|---|---|
| Stream All Likes (Firehose) | GET | `/2/likes/firehose/stream` | `conn_mod_def::GJLaMclcda4::jPClxIecRlqQswb3DfKDjA` |
| Stream Sampled Likes (10% Sample) | GET | `/likes/sample10/stream` | `conn_mod_def::GJLaMnv5TU8::n8IdiF8UTZ6x205sRZ61Ew` |
| Like a User’s Post (Create Like) | POST | `/2/users/{{ID}}/likes` | `conn_mod_def::GJLaWjacoCk::bFg6iXMoThCrZ9W4Zvtf2g` |
| Unlike a User’s Liked Post | DELETE | `/2/users/{{ID}}/likes/{{TWEET_ID}}` | `conn_mod_def::GJLaWsJec0A::1f7gFQPaTS6LQ88X4Uv5qA` |

### CommunityNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Search for Community Notes Written | GET | `/2/notes/search/notes_written` | `conn_mod_def::GJLaE9M76uM::25U8a14CRzurQAMlLLT_sA` |
| Create a Community Note | POST | `/notes` | `conn_mod_def::GJLaE2dMPiQ::WXLPcV0gRximGURIVf6ntw` |
| Delete a Community Note | DELETE | `/2/notes/{{ID}}` | `conn_mod_def::GJLaFI25mBI::3CiCrg0SR5qbuAUaDx_NEw` |

### Media

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Media by Media Key | GET | `/2/media/{{media_key}}` | `conn_mod_def::GJLaKw2AKAQ::b0v2G1C1TA-BQOpGJaeMwQ` |
| Get Media by Media Keys | GET | `/2/media` | `conn_mod_def::GJLaIxkP5tk::agyNgx_xSN-7bqJ34ZomnA` |
| Upload Media | POST | `/2/media/upload` | `conn_mod_def::GJLaKIpTTCg::ALX50CA-Q-WtyBBzvf203g` |

### UserBookmarks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Bookmarks | GET | `/2/users/{{ID}}/bookmarks` | `conn_mod_def::GJLaUNA5WvQ::lGH-p7XcQEm-4NARcZu2cw` |
| Create a User Bookmark | POST | `/2/users/{{id}}/bookmarks` | `conn_mod_def::GJLaUYIl-KI::xvPGwyJ4Tx2Rk9N9zAvGSg` |
| Delete a User’s Bookmark (Remove a Post from Bookmarks) | DELETE | `/2/users/{{ID}}/bookmarks/{{TWEET_ID}}` | `conn_mod_def::GJLaU75WAf4::jz97g5UYSOKWfG8g2E6XQA` |

### AccountActivitySubscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Account Activity Subscription for a Webhook (All) | POST | `/2/account_activity/webhooks/{{WEBHOOK_ID}}/subscriptions/all` | `conn_mod_def::GJLaDAh1yhw::AU1XPyvlRN2176Tw_dK03w` |
| Delete an Account Activity Subscription for a Webhook and User | DELETE | `/2/account_activity/webhooks/{{WEBHOOK_ID}}/subscriptions/{{USER_ID}}/all` | `conn_mod_def::GJLaDO0hjow::S3vMPS0nTT-eQ9jJFd_Vfg` |

### ActivitySubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List X Activity Subscriptions | GET | `/activity/subscriptions` | `conn_mod_def::GJLaDY6VCZs::xzkVx3i7SEed3jqsNcTmWw` |
| Create an X Activity Subscription | POST | `/2/activity/subscriptions` | `conn_mod_def::GJLaDdzAeOY::WwuwE42-SZSlN7oP-njsVw` |

### ActivitySubscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Activity Subscription | DELETE | `/2/activity/subscriptions/{{SUBSCRIPTION_ID}}` | `conn_mod_def::GJLaDskUey0::0K5Z24XtRhedsPxl5WMCGg` |
| Update an X Activity Subscription | PUT | `/2/activity/subscriptions/{{SUBSCRIPTION_ID}}` | `conn_mod_def::GJLaDmPOhi0::W47_PqqhQeip5p0w8owiHA` |

### UserPublicKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Public Keys | GET | `/2/users/{{id}}/public_keys` | `conn_mod_def::GJLaETXP_gM::xc6szonXRZ-8DZ4fkLYTGg` |
| Add a User’s Public Key | POST | `/2/users/{{ID}}/public_keys` | `conn_mod_def::GJLaEc42GL8::MJPRiFlWQjOjRKochm8ZRg` |

### ComplianceJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Compliance Jobs | GET | `/compliance/jobs` | `conn_mod_def::GJLaFO_KOHg::pRcI2pOCQSCUv4fTnKMXMw` |
| Create Compliance Job | POST | `/compliance/jobs` | `conn_mod_def::GJLaFYgl8Bw::egkJexNSSKakOpIjW_VAUA` |

### DmMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a DM Message for a Participant | POST | `/2/dm_conversations/with/{{PARTICIPANT_ID}}/messages` | `conn_mod_def::GJLaGWMOLjQ::t6uTqPVpSfGQkUuhuisULw` |
| Create a DM Message in a Conversation | POST | `/2/dm_conversations/{{DM_CONVERSATION_ID}}/messages` | `conn_mod_def::GJLaGeiY6As::pmMekOCTRh6VCcSNRU8sMQ` |

### ListMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List’s Members | GET | `/2/lists/{{ID}}/members` | `conn_mod_def::GJLaH74lNPI::3JCaJyeFRkS3vYZ98V5mRw` |
| Remove a List Member | DELETE | `/2/lists/{{ID}}/members/{{USER_ID}}` | `conn_mod_def::GJLaIWdVZuE::e12f7jUiS7GFje-rw8t9Zg` |

### MediaSubtitles

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Media Subtitles | POST | `/media/subtitles` | `conn_mod_def::GJLaJrqc-6g::KPS-LoWfQl-GyB94lYoNrw` |
| Delete Media Subtitles | DELETE | `/2/media/subtitles` | `conn_mod_def::GJLaJzNKuu4::Q48NKgSvQ_O4NhBBccvMgw` |

### MediaUpload

| Action | Method | Path | Action id |
|---|---|---|---|
| Append Media Data to an Upload Session | POST | `/2/media/upload/{{ID}}/append` | `conn_mod_def::GJLaKardSZI::p2xJCuqbTCKuXMdy1EmChA` |
| Finalize a Media Upload | POST | `/2/media/upload/{{ID}}/finalize` | `conn_mod_def::GJLaKienXgQ::GI6a9x8BQ1azbP7Bl8zRZw` |

### News

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a News Story by ID | GET | `/2/news/{{id}}` | `conn_mod_def::GJLaLBS3Eeo::bAZ-QtOYTdigd0ZXczQP1w` |
| Search News | GET | `/news/search` | `conn_mod_def::GJLaK44SxII::U-Q4py0RRiGoww7Zo2Y3lg` |

### FilteredStreamRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Filtered Stream Rules | GET | `/tweets/search/stream/rules` | `conn_mod_def::GJLaOzz8n5o::vgKAxvc2QgSZB06D-Cf2dQ` |
| Update Filtered Stream Rules | POST | `/2/tweets/search/stream/rules` | `conn_mod_def::GJLaO6dTyfg::YjaVQQulT2aQQLvlM2t4NQ` |

### UsersFollowedLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Followed Lists | GET | `/2/users/{{ID}}/followed_lists` | `conn_mod_def::GJLaVZ9t7Rc::02yuND76TIqPSE5dt68GIQ` |
| Unfollow a User’s Followed List | DELETE | `/2/users/{{ID}}/followed_lists/{{LIST_ID}}` | `conn_mod_def::GJLaVvNAdgc::xeMvbaP-TgiXvHSGEwjHVw` |

This lists 90 of 148 actions. For anything not here, call `search_one_platform_actions` with platform `x`. The full catalog is at https://www.withone.ai/knowledge/x.

## When a call fails

The error comes from X, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/x

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
