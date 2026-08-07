---
name: handwrytten
description: Handwrytten is a service that lets users choose greeting cards, compose messages, and have robotic systems write and mail handwritten notes, supporting personalized outreach and correspondence through an automated physical mail workflow. Read and write Handwrytten data through One: orders, cards, basket, qrcode, recipientaddress, profileaddress and more, 47 actions with real parameter documentation. Use whenever the user asks to look something up in Handwrytten, create or update a record there, or build code against the Handwrytten API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: handwrytten
  generated-from: one-knowledge-base
---

# Handwrytten through One

Handwrytten is a service that lets users choose greeting cards, compose messages, and have robotic systems write and mail handwritten notes, supporting personalized outreach and correspondence through an automated physical mail workflow.

One exposes Handwrytten through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `handwrytten` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Handwrytten is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Handwrytten account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Order Details | GET | `/v2/orders/details` | `conn_mod_def::GMJ0qosFEIg::XFAZlJ2VTxyUHdCm8qn0qw` |
| Cancel Order | POST | `/v2/orders/cancel` | `conn_mod_def::GMJ0qoGFn1A::ej1fdTTNSY6KB1h-q3LKDg` |
| Place Basket Order | POST | `/v2/orders/placeBasket` | `conn_mod_def::GMJ0qh9JAHA::0bCOX1a2RkyDAF5U7iUGmA` |
| Preview Order | POST | `/v2/outbound/process` | `conn_mod_def::GMJ0qoRedVg::Tm8f-oBmTZaagqpJtsI_HQ` |
| Single Step Order Using Orders | POST | `/v2/orders/singleStepOrder` | `conn_mod_def::GMJ0qiUWJ6g::QNcjXlDBT-a5kR6Mrpiwwg` |

### Cards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Cards | GET | `/v2/cards/list` | `conn_mod_def::GMJ0qLeNLKA::BO4pym7bRpSVjuICZgXjkA` |
| List Cards by Categories | GET | `/v2/cards/list/sections` | `conn_mod_def::GMJ0qT7JJ3g::ZlFJ64U4ThGzy-gPPrspPw` |
| View Card Details | GET | `/v2/cards/view` | `conn_mod_def::GMJ0qMWCKDg::I-PFQm6cRQ6VWLpxk5-3_A` |
| Check Uploaded Custom Logo Image Quality | POST | `/v2/cards/checkUploadedCustomLogo` | `conn_mod_def::GMJ0qTgXusA::WQkXX-6JQ4CJuyVO_cMkPA` |
| Create Custom Card Using Cards | POST | `/v2/cards/createCustomCard` | `conn_mod_def::GMJ0qUIL2xA::6Aqhr5HCQgqwWgQVrOGKXw` |

### Basket

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Basket Item Count | GET | `/v2/basket/count` | `conn_mod_def::GMJ0qKRiFcg::BWblwijNShu72s0WLqG0AA` |
| Clear Basket | POST | `/v2/basket/clear` | `conn_mod_def::GMJ0qNxhPpA::62WMjVT8R-eqCw1OUC0j7w` |
| Send Basket | POST | `/v2/basket/send` | `conn_mod_def::GMJ0qN3NfKg::ddO1HZUMQzKDnJhCNtCMRA` |

### QrCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Create QR Code | POST | `/v2/qrCode` | `conn_mod_def::GMJ0quFE7dg::iqnkUMpiTWGkwnYxKNGuEw` |
| Delete a QR Code | DELETE | `/v2/qrCode/{{id}}` | `conn_mod_def::GMJ0qvFw6cg::1d5dld9rThugEXOL03peew` |

### RecipientAddress

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Recipient Address | POST | `/v2/profile/deleteRecipient` | `conn_mod_def::GMJ0pz-W8Xg::x1Tr31VGTJiV3NKbMrYbkA` |
| Update Recipient Address | PUT | `/v2/profile/updateRecipient` | `conn_mod_def::GMJ0qE2284g::YSwZoBjPS-CoNyA77Iz3fA` |

### ProfileAddress

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Default Sender Address Info | GET | `/v2/profile/address` | `conn_mod_def::GMJ0p0EmU6g::o-RCoTEQQIW1lwsvsIpJLg` |
| Create a Sender Address for the User Profile | POST | `/v2/profile/createAddress` | `conn_mod_def::GMJ0p1IZTQA::5wAbz1riSPSwt-G9NLAHDg` |

### Profile

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Recipient Address to the User Profile | POST | `/v2/profile/addRecipient` | `conn_mod_def::GMJ0p0Li3HA::Z2X8mpWPQHuPPG_Wu0W1tw` |
| Set Default Sender Address | POST | `/v2/profile/setDefaultAddress` | `conn_mod_def::GMJ0p7EFfKg::nOJYqLc7TAq_hnkTp_Z0Vg` |

### SenderAddress

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Sender Address | POST | `/v2/profile/deleteAddress` | `conn_mod_def::GMJ0p0yd36g::6w_3EhocScqKCURWqRjaig` |
| Update Sender Address | PUT | `/v2/profile/updateAddress` | `conn_mod_def::GMJ0qEJk9NA::gYMwH9STQiODyp46lcb2Lg` |

### QrCodeFrames

| Action | Method | Path | Action id |
|---|---|---|---|
| List QR Code Frames | GET | `/v2/qrCode/frames` | `conn_mod_def::GMJ0quCns9g::0oMVeAIJQpihV_U7rlB4ew` |

### QrCodeStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get QR Code Statistics | GET | `/v2/qrCode/dashboard` | `conn_mod_def::GMJ0qvKaI6A::vvXNRdIuSA6ituO2oNkddg` |

### QrCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| List QR Codes | GET | `/v2/qrCode` | `conn_mod_def::GMJ0qyY22MA::CVmlMP7JRFm2AyGowxwIiQ` |

### StampOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Stamp Options | GET | `/v2/shipping/stampOptions` | `conn_mod_def::GMJ0q3poWBA::MBGnbK8DTmSHTlHFjr8IIA` |

### Signatures

| Action | Method | Path | Action id |
|---|---|---|---|
| List Signatures | GET | `/v2/profile/signatures` | `conn_mod_def::GMJ0q4Zrjfg::CVrXJVL3SoGdhiy8F04knw` |

### RecipientAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Recipient Addresses | GET | `/v2/profile/recipientsList` | `conn_mod_def::GMJ0p7U_KtA::YN4XpnBFQweqzi06XeD8xg` |

### SenderAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sender Addresses | GET | `/v2/profile/listAddresses` | `conn_mod_def::GMJ0p8kshCA::E266WYi1Sp6o98dlLpvCvQ` |

### Countries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Countries | GET | `/v2/countries/list` | `conn_mod_def::GMJ0p6L-Lag::8nQcjjbpQWOikLISSUIDdw` |

### States

| Action | Method | Path | Action id |
|---|---|---|---|
| List States | GET | `/v2/countries/listStates` | `conn_mod_def::GMJ0p9LhMkA::dv_taxtgRfSi1e9fdouaBQ` |

### UserInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Info | GET | `/v2/auth/getUser` | `conn_mod_def::GMJ0qD4h8Ag::9ktk80gaThiMh2wsF2K7xw` |

### Authentication

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Authentication | GET | `/v2/checkauth/auth` | `conn_mod_def::GMJ0qEIud5g::-AbRrSMoR4qF4V4SLkzFYw` |

### OutboundProspectingOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Add to Basket for Outbound Prospecting Orders | POST | `/v2/outbound/addToBasket` | `conn_mod_def::GMJ0qopL-bg::vdnzrcoBTjOWZyx8PohnaQ` |

### TestMode

| Action | Method | Path | Action id |
|---|---|---|---|
| Toggle Test Mode | POST | `/v2/auth/setTestMode` | `conn_mod_def::GMJ0qE8LIXg::X2eX4v81RE2slU8GGz8XzA` |

### CustomCard

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Custom Card | POST | `/v2/design/delete` | `conn_mod_def::GMJ0qTPM0nA::bO48gT6mRC2PfagocJkdGA` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Categories | GET | `/v2/categories/list` | `conn_mod_def::GMJ0qUftJog::bytuDvLsS0W1BXAvjKE9Ig` |

### CustomCards

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Custom Image | POST | `/v2/cards/deleteCustomLogo` | `conn_mod_def::GMJ0qZ1YnNg::yIh6BA_rTJGAueO59GArFw` |

### PresetCoverImages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Preset Cover Images | GET | `/v2/design/presetImages` | `conn_mod_def::GMJ0qaHNtfA::IfPOCGNaRn6nXnwmiYKDDQ` |

### CustomUserImages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom User Images | GET | `/v2/cards/listCustomUserImages` | `conn_mod_def::GMJ0qbc8c2g::q3EirDR9S7qo-OVtdxgUlg` |

### CardDimensions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Card Dimensions | GET | `/v2/design/dimensions` | `conn_mod_def::GMJ0qblkbBg::-RWHF1hpS_-71Nt62WQLKg` |

### CustomImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Custom Image | POST | `/v2/cards/uploadCustomLogo` | `conn_mod_def::GMJ0qcBeW1A::sXm_lhdtSOK5y_Ke0zwA0Q` |

### GiftCards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Gift Cards | GET | `/v2/giftCards/list` | `conn_mod_def::GMJ0qhxavgg::JEMb7ayaT9OfAcK1YrINSA` |

### Fonts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fonts | GET | `/v2/fonts/list` | `conn_mod_def::GMJ0qh3fK4g::rSlDGEiDQ-G8d0NdCbu2cg` |

### Inserts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Inserts | GET | `/v2/inserts/list` | `conn_mod_def::GMJ0qiEv1Vg::S4xhlw7mSm61qZHDf9zXOA` |

### OutboundTargets

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Targets Using Outbound | POST | `/v2/outbound/calcTargets` | `conn_mod_def::GMJ0qoLM5JA::zpwEmNSlRByqHsvd8g1fLA` |

## When a call fails

The error comes from Handwrytten, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/handwrytten

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
