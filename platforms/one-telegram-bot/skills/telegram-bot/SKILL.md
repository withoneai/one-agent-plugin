---
name: telegram-bot
description: Telegram is a cloud-based messaging platform, and its Bot API provides an HTTP-based interface that enables developers to build bots which can send and receive messages, automate interactions, and integrate services within chats, groups, and channels using simple RESTful requests. Read and write Telegram Bot data through One: messages, forumtopics, stickers, stickerset, chatinvitelink, gifts and more, 166 actions with real parameter documentation. Use whenever the user asks to look something up in Telegram Bot, create or update a record there, or build code against the Telegram Bot API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: telegram-bot
  generated-from: one-knowledge-base
---

# Telegram Bot through One

Telegram is a cloud-based messaging platform, and its Bot API provides an HTTP-based interface that enables developers to build bots which can send and receive messages, automate interactions, and integrate services within chats, groups, and channels using simple RESTful requests.

One exposes Telegram Bot through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `telegram-bot` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Telegram Bot is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Telegram Bot account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Copy a Message | POST | `/copyMessage` | `conn_mod_def::GKGPPIcvh2I::fGT2IQqgQny4wULtsZWzQA` |
| Copy Messages | POST | `/copyMessages` | `conn_mod_def::GKGPPRFceD4::A3wexc6EQnaiMx6e5sdm3g` |
| Delete a Chat Message | POST | `/deleteMessage` | `conn_mod_def::GKGPPljUUhk::yHXRbyeIRySXFmkeBHrtRQ` |
| Delete Multiple Messages in a Chat | POST | `/deleteMessages` | `conn_mod_def::GKGPPlhxeQ8::8J8j6aPIT_CMEUzfHi4SYQ` |
| Edit a Live Location Message | POST | `/editMessageLiveLocation` | `conn_mod_def::GKGPQTN3oP8::ruZOl7KGRV23nRiklvM_ow` |
| Edit a Message Caption | POST | `/editMessageCaption` | `conn_mod_def::GKGPQD95ddA::YsTSBlgXSKef3MZKIb5HDw` |
| Edit a Message's Reply Markup | POST | `/editMessageReplyMarkup` | `conn_mod_def::GKGPQRTgJPU::fzmE96UhTLyphM9xLfMAeQ` |
| Edit Message Media | POST | `/editMessageMedia` | `conn_mod_def::GKGPQQ2ihPA::3pNTi3Y-S0GnqYUUT3Npyw` |
| Edit Text or Game Message | POST | `/editMessageText` | `conn_mod_def::GKGPQYKZtgU::N0v12HUmShuzIwMUn_jl6A` |
| Forward a Message | POST | `/forwardMessage` | `conn_mod_def::GKGPQjWDoOo::2MpF22u4RXS8-5JxwtfrYw` |
| Forward Multiple Messages | POST | `/forwardMessages` | `conn_mod_def::GKGPQfl3Ti8::1U2YLZEkQ_qQCPHTqIKUxg` |
| Send a Checklist on Behalf of a Connected Business Account | POST | `/sendChecklist` | `conn_mod_def::GKGPSog-9Oc::AShDc_d0QCu4ui5cOxqpjg` |

16 more Messages actions are available through search.

### ForumTopics

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Forum Topic | POST | `/createForumTopic` | `conn_mod_def::GKGPPRoqWIQ::6iEm5gXFT-GcUCU6PhP61A` |
| Delete a Forum Topic | POST | `/deleteForumTopic` | `conn_mod_def::GKGPPnIamv0::BRi_E52JTceAym77IhxXjw` |
| Hide General Forum Topic | POST | `/hideGeneralForumTopic` | `conn_mod_def::GKGPRldaWeg::d8Ykskp-RwOqVPRDWQSszg` |
| Reopen a Forum Topic in a Supergroup Chat | POST | `/reopenForumTopic` | `conn_mod_def::GKGPSFCWa6M::aAQx9tt4RsOAowQ9IqFX4w` |
| Reopen a Supergroup Chat's General Forum Topic | POST | `/reopenGeneralForumTopic` | `conn_mod_def::GKGPSJWRMcQ::ZrpnrkwpRh-91xqST5lmUQ` |
| Unhide the General Forum Topic in a Supergroup Chat | POST | `/unhideGeneralForumTopic` | `conn_mod_def::GKGPWAgytD4::cuG9MUDtSZSk4GxKvjFuwA` |

### Stickers

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Sticker From a Bot-Created Sticker Set | POST | `/deleteStickerFromSet` | `conn_mod_def::GKGPPxF2ulw::5n1WWa3eRbWFreIXxVyIYw` |
| Set a Sticker's Emoji List | POST | `/setStickerEmojiList` | `conn_mod_def::GKGPVbTfwBg::tCuoXJu1TJqE444WKJT0oQ` |
| Set Sticker Keywords | POST | `/setStickerKeywords` | `conn_mod_def::GKGPVbS4_bo::h-L9X5X-T-G3Fe_RdBKM4Q` |
| Set Sticker Mask Position | POST | `/setStickerMaskPosition` | `conn_mod_def::GKGPVpg2TyE::UC59a8wgR3GvouitudwuJw` |
| Set Sticker Position In Set | POST | `/setStickerPositionInSet` | `conn_mod_def::GKGPVppzoUY::aDc96ByNTxeZvWYgKX9Gig` |

### StickerSet

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a New Sticker Set | POST | `/createNewStickerSet` | `conn_mod_def::GKGPPZZKMbk::rbN1wNyPTBaP7XgPsHU9mA` |
| Delete a Sticker Set Created by the Bot | POST | `/deleteStickerSet` | `conn_mod_def::GKGPPw5-_yo::Navhesj7R1CILyueMSKgtw` |
| Get a Sticker Set | POST | `/getStickerSet` | `conn_mod_def::GKGPRcl4lSo::VBgowi3cRMCEiVLG7BQhJg` |
| Replace a Sticker in a Sticker Set | POST | `/replaceStickerInSet` | `conn_mod_def::GKGPSGMqokQ::CoBnRZpxSXCyg7mPkNpABA` |

### ChatInviteLink

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Chat Invite Link | POST | `/createChatInviteLink` | `conn_mod_def::GKGPPQdmmQg::cE0w92KKQ--MMroPr9pyqA` |
| Edit a Chat Invite Link | POST | `/editChatInviteLink` | `conn_mod_def::GKGPPyDiNhc::r9xsj4wFR3a5zeHcfP6K5Q` |
| Export a Chat's Primary Invite Link | POST | `/exportChatInviteLink` | `conn_mod_def::GKGPQkDCXMI::J-wtbSn0QO-YKG-C6lcIww` |
| Revoke a Chat Invite Link | POST | `/revokeChatInviteLink` | `conn_mod_def::GKGPSV20jsY::3B64m0XQS6uYPD9TcybCEA` |

### Gifts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Available Gifts | POST | `/getAvailableGifts` | `conn_mod_def::GKGPQgZD-oo::qInpJw1YReGqCfKjG2xwDA` |
| Send a Gift | POST | `/sendGift` | `conn_mod_def::GKGPS2CSSJA::5bdUZi4IQhWLKhES1AG5ug` |
| Transfer a Gift Through a Business Connection | POST | `/transferGift` | `conn_mod_def::GKGPV0NDoIg::lLQkPhXNTOalkzLcRDW68A` |
| Upgrade a Business Connection's Gift | POST | `/upgradeGift` | `conn_mod_def::GKGPWKThxkw::bgGmLQnxQOKiBzKpSwaa3g` |

### ChatMember

| Action | Method | Path | Action id |
|---|---|---|---|
| Ban a Chat Member | POST | `/banChatMember` | `conn_mod_def::GKGPOyE_QXE::ynE4ntocT3m868KfB7-WkA` |
| Get Chat Member | POST | `/getChatMember` | `conn_mod_def::GKGPQ67wPoM::0RImMhZQTuOlAcfxOLwXqw` |
| Promote or Demote a Chat Member | POST | `/promoteChatMember` | `conn_mod_def::GKGPRtw6WFM::BLzY1qP9SH6C2Uz38p9m_g` |

### Chat

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Chat | POST | `/getChat` | `conn_mod_def::GKGPQsFNA8A::Uk59IHikTTWXdOzwLB4v6g` |
| Leave a Chat | POST | `/leaveChat` | `conn_mod_def::GKGPRsxTJw4::vEaXcI8iTdKMb-0ewzyKbw` |
| Set Chat Title | POST | `/setChatTitle` | `conn_mod_def::GKGPVGBi1xE::ROkT8Av1QiSO7tfFveZjHg` |

### StickerSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Sticker to a Sticker Set | POST | `/addStickerToSet` | `conn_mod_def::GKGPOpiEkdo::N9Yced6STi-2gl_806PeIw` |
| Set a Custom Emoji Sticker Set Thumbnail | POST | `/setCustomEmojiStickerSetThumbnail` | `conn_mod_def::GKGPVEMDQNc::d5w4oEmwSVSsopvcmk3Vew` |
| Set Sticker Set Title | POST | `/setStickerSetTitle` | `conn_mod_def::GKGPVpqqenw::KK73akuHSECFQtinrPxxDg` |

### BotProfilePhoto

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove the Bot's Profile Photo | POST | `/removeMyProfilePhoto` | `conn_mod_def::GKGPR8r66p8::In96Zpi8Q_21JRTY7dll5g` |
| Set the Bot's Profile Photo | POST | `/setMyProfilePhoto` | `conn_mod_def::GKGPVbQWsyo::zq1LIbDMQMSkuhSbXTRzLQ` |

### ChatJoinRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Approve a Chat Join Request | POST | `/approveChatJoinRequest` | `conn_mod_def::GKGPO7zhvxk::l4HOcNENTda_rUNLpwYaRA` |
| Decline a Chat Join Request | POST | `/declineChatJoinRequest` | `conn_mod_def::GKGPPchYLTA::vrMLqL6OQzacQd8RMVpNxw` |

### BusinessMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Business Messages | POST | `/deleteBusinessMessages` | `conn_mod_def::GKGPPZTPenI::C5xTNhFeRYyiueEdwrL-Mg` |
| Read a Business Message | POST | `/readBusinessMessage` | `conn_mod_def::GKGPR3MJ0XY::EN9vzLDaTz6Hn3wRXSGqbA` |

### ChatSubscriptionInviteLink

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Chat Subscription Invite Link | POST | `/createChatSubscriptionInviteLink` | `conn_mod_def::GKGPPRoljQQ::s8egcvVnTbOc7U_OgefqTA` |
| Edit a Chat Subscription Invite Link | POST | `/editChatSubscriptionInviteLink` | `conn_mod_def::GKGPP73Iw7k::ob-Fhk1aSYqas5HBQTJJIQ` |

### Stories

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit a Business Account Story | POST | `/editStory` | `conn_mod_def::GKGPQMheDes::G4Q_2RAcQ12Gt-AABTp39Q` |
| Post a Story for a Managed Business Account | POST | `/postStory` | `conn_mod_def::GKGPRvqP-us::XHmsSnM7T8SZxkwpLiin1w` |

### BotName

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current Bot Name for a User Language | POST | `/getMyName` | `conn_mod_def::GKGPRPt2y2E::rpJE_CAERaqWMN6bbtgIDQ` |
| Set Bot Name | POST | `/setMyName` | `conn_mod_def::GKGPVOOKsaw::MqJGlv3SSsK5Wapmiyj_Gw` |

### BusinessAccountProfilePhoto

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a Business Account's Profile Photo | POST | `/removeBusinessAccountProfilePhoto` | `conn_mod_def::GKGPR3xKra4::_MPjJ-IyQDiRedFimbFjBA` |
| Set Business Account Profile Photo | POST | `/setBusinessAccountProfilePhoto` | `conn_mod_def::GKGPUoTC_F4::RzYsyj9VT0i1-G_SRAoKcQ` |

### BotDescription

| Action | Method | Path | Action id |
|---|---|---|---|
| Get My Description | POST | `/getMyDescription` | `conn_mod_def::GKGPRSuIQB4::IJOvIwhuTama0v_twmKZJA` |
| Set Bot Description | POST | `/setMyDescription` | `conn_mod_def::GKGPVSFdDwE::kqq-HZ7VT6eMULcQlm6z-A` |

### Poll

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Poll | POST | `/sendPoll` | `conn_mod_def::GKGPT-fo0kM::vWW9EV5GTYeCYWhyk4Bbng` |
| Stop a Poll Sent by the Bot | POST | `/stopPoll` | `conn_mod_def::GKGPV0WqUxU::DmUNnpBFQw2W8EnfEBClyw` |

### ChatStickerSet

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Supergroup's Sticker Set | POST | `/deleteChatStickerSet` | `conn_mod_def::GKGPPl5X_aY::t-YPzOzHSdmzgD02UJ3vVg` |
| Set a Supergroup's Sticker Set | POST | `/setChatStickerSet` | `conn_mod_def::GKGPVG5GtbI::ebHAjHNtTuCLINN6GqciBw` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Webhook | POST | `/deleteWebhook` | `conn_mod_def::GKGPPz6BdkM::t7u4hKrMRJeKWEHrHdncqQ` |
| Set Webhook | POST | `/setWebhook` | `conn_mod_def::GKGPVzcU1zw::OBz4LeVaT8uWjtRRhOnt-Q` |

### ForumTopic

| Action | Method | Path | Action id |
|---|---|---|---|
| Close a Forum Topic in a Supergroup Chat | POST | `/closeForumTopic` | `conn_mod_def::GKGPPDRQams::7PJcJxp0Qc6pfdx0pjfG3A` |
| Edit a Forum Topic | POST | `/editForumTopic` | `conn_mod_def::GKGPQBPW0xA::IwYQtNxyQRywftd-h2GzQA` |

### GeneralForumTopic

| Action | Method | Path | Action id |
|---|---|---|---|
| Close a Chat's General Forum Topic | POST | `/closeGeneralForumTopic` | `conn_mod_def::GKGPPD1Y78U::AT_mmL-mRiSb-N9oHoq63A` |
| Edit a Supergroup's General Forum Topic | POST | `/editGeneralForumTopic` | `conn_mod_def::GKGPP7nv7IY::ANq4NcEeTrSQzPYs1O8DKQ` |

### ChatMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Unpin a Chat Message | POST | `/unpinChatMessage` | `conn_mod_def::GKGPWPDONu0::vvc0knZHRtqCX2sBBXn3mw` |
| Unpin All Pinned Messages in a Chat | POST | `/unpinAllChatMessages` | `conn_mod_def::GKGPWBzYQ7s::oAM57CiBSCijPbA4yoFESg` |

### SuggestedPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Approve a Suggested Post in a Direct Messages Chat | POST | `/approveSuggestedPost` | `conn_mod_def::GKGPO0G1Ql8::XR9dhPDTQzewnQaJC85wbA` |
| Decline a Suggested Post in a Direct Messages Chat | POST | `/declineSuggestedPost` | `conn_mod_def::GKGPPdouaI8::koVPSJeRRYqG8GXDS4lbMg` |

### ChatPhoto

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Chat Photo | POST | `/deleteChatPhoto` | `conn_mod_def::GKGPPZrCD6s::jN8vIq5DT1enH1d4ckGjog` |
| Set a Chat Photo | POST | `/setChatPhoto` | `conn_mod_def::GKGPVE4q3B4::miIrrJMpTw-FpuQDGwq0Og` |

### BotShortDescription

| Action | Method | Path | Action id |
|---|---|---|---|
| Get My Short Description | POST | `/getMyShortDescription` | `conn_mod_def::GKGPRMwB2JY::vL08TI4_QiWvfSK6bKU2_Q` |
| Set the Bot's Short Description | POST | `/setMyShortDescription` | `conn_mod_def::GKGPVbtlw3Y::l9KAJG4IQHGDbR0YQd0Fog` |

### BusinessAccountName

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Business Account Name | POST | `/setBusinessAccountName` | `conn_mod_def::GKGPUqirlXo::5qgRjuOnRNuTaOeP_dSfBw` |

### InlineQuery

| Action | Method | Path | Action id |
|---|---|---|---|
| Answer an Inline Query | POST | `/answerInlineQuery` | `conn_mod_def::GKGPOoOUzdI::qlGSB7tzSnaw10Qe4K1C0A` |

### Updates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Updates | POST | `/getUpdates` | `conn_mod_def::GKGPRdzFeCY::M7rpM-siSOudlIa0e2Zkww` |

### BotInstance

| Action | Method | Path | Action id |
|---|---|---|---|
| Close Bot Instance | POST | `/close` | `conn_mod_def::GKGPPDgH3wk::4XPshABgRWm0NsDKyh2xfQ` |

### WebAppQuery

| Action | Method | Path | Action id |
|---|---|---|---|
| Answer a Web App Query | POST | `/answerWebAppQuery` | `conn_mod_def::GKGPOzvPy0k::_d9qfkfDTva6ww1DQFphmQ` |

### UserProfilePhotos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Profile Photos | POST | `/getUserProfilePhotos` | `conn_mod_def::GKGPRlYWjMA::Td8e25_gSmyc6PDdS2spLA` |

### UserProfileAudios

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Profile Audios | POST | `/getUserProfileAudios` | `conn_mod_def::GKGPRluggV0::8ipj_MnZSFCyYZbPa-w6sw` |

### ShippingQuery

| Action | Method | Path | Action id |
|---|---|---|---|
| Answer a Shipping Query | POST | `/answerShippingQuery` | `conn_mod_def::GKGPOnxVI8s::c5PRZjABQ72Btq9Q0NX9Iw` |

### MyCommands

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete My Commands | POST | `/deleteMyCommands` | `conn_mod_def::GKGPPo0kW8o::9ig_uTU5TO-GYLGkI1inOg` |

### ChatGifts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Chat's Gifts | POST | `/getChatGifts` | `conn_mod_def::GKGPQ6mqk2M::8txED3tuSauXqLIRZxIpVg` |

### BotCommands

| Action | Method | Path | Action id |
|---|---|---|---|
| Get My Commands | POST | `/getMyCommands` | `conn_mod_def::GKGPRD6wK5Q::CYqjM8-STSWjC1p5U-eMfA` |

### UserGifts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Gifts | POST | `/getUserGifts` | `conn_mod_def::GKGPRdVhEjs::n6M5lt3HRtumCNZPJKjPnQ` |

This lists 90 of 166 actions. For anything not here, call `search_one_platform_actions` with platform `telegram-bot`. The full catalog is at https://www.withone.ai/knowledge/telegram-bot.

## When a call fails

The error comes from Telegram Bot, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/telegram-bot

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
