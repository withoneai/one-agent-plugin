---
name: yespo
description: Yespo is a marketing automation platform that provides customer data collection, segmentation, and omnichannel campaign tools, enabling marketing teams to automate personalized email, web push, mobile push, SMS, and onsite messaging based on customer behavior and lifecycle events. Read and write Yespo data through One: messages, contacts, appinboxmessages, contact, mobilepushmessages, vibermessages and more, 113 actions with real parameter documentation. Use whenever the user asks to look something up in Yespo, create or update a record there, or build code against the Yespo API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: yespo
  generated-from: one-knowledge-base
---

# Yespo through One

Yespo is a marketing automation platform that provides customer data collection, segmentation, and omnichannel campaign tools, enabling marketing teams to automate personalized email, web push, mobile push, SMS, and onsite messaging based on customer behavior and lifecycle events.

One exposes Yespo through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `yespo` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Yespo is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Yespo account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Message | GET | `/api/v1/messages/email/{{id}}` | `conn_mod_def::GMhtI3Vemzg::DePmNYBzQVGtSs2tUTGTuQ` |
| Get an SMS Message | GET | `/api/v1/messages/sms/{{id}}` | `conn_mod_def::GMhtJKEC19A::gkugoif5SEWphaHdvbAPTA` |
| Search SMS Messages | GET | `/api/v1/messages/sms` | `conn_mod_def::GMhtJQTOa4A::iwTerX5pS6ehCHISzmhh1Q` |
| Add Base Email Message | POST | `/api/v1/messages/email` | `conn_mod_def::GMhtIaWMENA::KQfc_JXXROurF8UQQK6unQ` |
| Add Base SMS Message | POST | `/api/v1/messages/sms` | `conn_mod_def::GMhtIacPdLA::S3YRYZiRQBWjzU8e7KglKQ` |
| Create a Base Viber Message | POST | `/api/v1/messages/viber` | `conn_mod_def::GMhtIh48BBg::W_v_c1fRQGCIRVsPB_2mDw` |
| Delete a Basic Email Message | DELETE | `/api/v1/messages/email/{{id}}` | `conn_mod_def::GMhtIpHKG7g::vB_Ms0MTR0akPpcx2Uh_dA` |
| Delete a Translated Email Message | DELETE | `/api/v1/messages/email/{{id}}/{{language}}` | `conn_mod_def::GMhtIwiYSvg::LfSPjTD3RD6vFUs-MCk-9g` |
| Delete an SMS Message | DELETE | `/api/v1/messages/sms/{{id}}` | `conn_mod_def::GMhtIpD0urg::JRfEPJyxQ2e10dCK9-BbyA` |
| Send SMS Message | POST | `/api/v1/message/sms` | `conn_mod_def::GMhtJYTqcMA::xQZVK-g7S_OoTIW3BYxYSg` |
| Update a Base SMS Message | PUT | `/api/v1/messages/sms/{{id}}` | `conn_mod_def::GMhtJh7NYjg::foiRDvd6QgSNPaV9tWwGMQ` |
| Update a Base Telegram Bot Message | PUT | `/api/v1/messages/telegram/{{id}}` | `conn_mod_def::GMhtJgqUE5g::Bu_w_qVERs6Ymj2LqswqqA` |

3 more Messages actions are available through search.

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact ID by Token | GET | `/api/v1/contact/token/{{appUuid}}/{{tokenId}}/contactId` | `conn_mod_def::GMhtH_HLLcA::RW2umlU1RD-DZPQgdcD3ig` |
| Get Contact Recommendations Based on Web Tracking | GET | `/api/v2/contacts/recoms/{{dataSourceId}}` | `conn_mod_def::GMhtH5DotCg::uP7gIKjCSVCDhojmoQakCg` |
| Get Contacts from a Segment | GET | `/api/v1/group/{{id}}/contacts` | `conn_mod_def::GMhtH_TBimA::i4LCG6DDTtSLtBiz-9iggA` |
| Get Email Addresses by Contact ID | GET | `/api/v1/contacts/email` | `conn_mod_def::GMhtIGtqwMg::WwnDkPdrRjm6DRqFCsSUBg` |
| Search Contacts | GET | `/api/v1/contacts` | `conn_mod_def::GMhtINn8P9A::1GrWLK5BTtOJ7ekWdXTsyw` |
| Add or Update Contacts | POST | `/api/v1/contacts` | `conn_mod_def::GMhtHwHL5Lg::dxjN7N6UToyPZT0SI8IfeQ` |
| Delete Contacts From a Static Segment | POST | `/api/v1/group/{{id}}/contacts/detach` | `conn_mod_def::GMhtH32ewuA::3KDDoukBRAqgTenhwhpW4g` |
| Subscribe a Contact | POST | `/api/v1/contact/subscribe` | `conn_mod_def::GMhtIMtborg::32OHc-rWRmGglnsxT2056w` |
| Upload Contacts from an External File | POST | `/api/v1/contacts/upload` | `conn_mod_def::GMhtHv0ATwA::vNFElye8SzOho7HpBxWZDQ` |

### AppInboxMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an App Inbox Message | GET | `/api/v1/messages/appinbox/{{id}}` | `conn_mod_def::GMhtJH6w5LA::hUVGXxW0R6Gc6-VUlLHLxg` |
| Search for App Inbox Messages | GET | `/api/v1/messages/appinbox` | `conn_mod_def::GMhtJQzQOYA::yaTMJjNUT1i3lQf_RFvP6w` |
| Add an App Inbox Message | POST | `/api/v1/messages/appinbox` | `conn_mod_def::GMhtIcJgg1g::cHcWQW1YRDmlgSFQm3K0ow` |
| Delete a Translated App Inbox Message | DELETE | `/api/v1/messages/appinbox/{{id}}/{{language}}` | `conn_mod_def::GMhtIpC-Mcg::PPKdKjnpRZam1ErnCs5skg` |
| Delete an App Inbox Message | DELETE | `/api/v1/messages/appinbox/{{id}}` | `conn_mod_def::GMhtIiheWIg::U2jxDu7oSxavmjuBVlkH8g` |
| Update a Base App Inbox Message | PUT | `/api/v1/messages/appinbox/{{id}}` | `conn_mod_def::GMhtJoFYZ2g::eIMfkNNjT--UjS8pjO2xkA` |
| Update an App Inbox Message Language Version | PUT | `/api/v1/messages/appinbox/{{id}}/{{language}}` | `conn_mod_def::GMhtJofnRHg::HSS-HKXaSUKcPs9fNVy3EA` |

### Contact

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/api/v1/contact/{{id}}` | `conn_mod_def::GMhtH-uzszA::KKuMV1oAR-e0c1IdgGXXCw` |
| Add or Update a Contact | POST | `/api/v1/contact` | `conn_mod_def::GMhtHvsXNBA::cyWH_9NpQoaXLS-d5dfEUQ` |
| Delete Contact | DELETE | `/api/v1/contact/{{id}}` | `conn_mod_def::GMhtH4Qqc3A::S2qsLxINTLq9iMvlCw1FAg` |
| Delete Contact by External Customer ID | DELETE | `/api/v1/contact` | `conn_mod_def::GMhtH2E9p7A::HGOIoTYRQBu4vtoL2NBexw` |
| Update a Contact | PUT | `/api/v1/contact/{{id}}` | `conn_mod_def::GMhtIOoblXg::lqeF4mOESlu1RH1LI9QDlA` |

### MobilePushMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Mobile Push Message | GET | `/api/v1/messages/mobilepush/{{id}}` | `conn_mod_def::GMhtI3Hn4zg::u9SeRLHWQGu270kw3bTpTw` |
| Search Mobile Push Messages | GET | `/api/v1/messages/mobilepush` | `conn_mod_def::GMhtJP_8IvA::5OXbaBGySmG7TInrYE9UXQ` |
| Delete Language Version of a Mobile Push Message | DELETE | `/api/v1/messages/mobilepush/{{id}}/{{language}}` | `conn_mod_def::GMhtIpRDXQA::F1RnfvSaT9KEprflINGoyw` |
| Update a Base Mobile Push Message | PUT | `/api/v1/messages/mobilepush/{{id}}` | `conn_mod_def::GMhtJglRx8g::ZnRBI3oITBCMkdD1bZlcuA` |
| Update a Translated Mobile Push Message | PUT | `/api/v1/messages/mobilepush/{{id}}/{{language}}` | `conn_mod_def::GMhtJxiO1oA::rCJyQ-1MSIqoIDCElv_4Cg` |

### ViberMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Viber Message | GET | `/api/v1/messages/viber/{{id}}` | `conn_mod_def::GMhtJQUePRg::8pTt7hpdQIqn-Urt_UtNGw` |
| Search Viber Messages | GET | `/api/v1/messages/viber` | `conn_mod_def::GMhtJXPh77A::wTFho1UqSVaxV0BMoCF05Q` |
| Delete Translated Viber Message | DELETE | `/api/v1/messages/viber/{{id}}/{{language}}` | `conn_mod_def::GMhtIv6ePwg::kmcNjqusT8Gbvx32a8EpYA` |
| Send a Viber Message | POST | `/api/v1/message/viber` | `conn_mod_def::GMhtJh21Uug::pqdqn3FcQsy0h0N6YZe9LA` |
| Update Base Viber Message | PUT | `/api/v1/messages/viber/{{id}}` | `conn_mod_def::GMhtJh3BbJA::M8EzXjL8S4eW6Ip4NdGBMA` |

### TelegramMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Telegram Bot Messages | GET | `/api/v1/messages/telegram` | `conn_mod_def::GMhtJalKvfg::Nu1W_QU_RLSmB_P-itk0Bw` |
| Add a Telegram Bot Message | POST | `/api/v1/messages/telegram` | `conn_mod_def::GMhtIbP7CuA::j-zicWzbTyifhq9XPfJ4RA` |
| Delete a Translated Telegram Bot Message | DELETE | `/api/v1/messages/telegram/{{id}}/{{language}}` | `conn_mod_def::GMhtIv1V9_g::kV_8PQT7SBCMG7tJtkdMOg` |
| Update a Translated Telegram Bot Message | PUT | `/api/v1/messages/telegram/{{id}}/{{language}}` | `conn_mod_def::GMhtJv1_UTA::0He-KZohT1iLduACaEgAcw` |

### PastEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Past Events | DELETE | `/api/v1/past_events` | `conn_mod_def::GMhtIOBoOzA::lnDo09AHRS6sD0y4nY6n9Q` |
| Generate Past Events Using eSputnik API v2 | POST | `/api/v2/past_events` | `conn_mod_def::GMhtIUr57Hg::rQKYAI5aTSW62z3ky3dAdw` |
| Generate Past Events V3 | POST | `/api/v3/past_events` | `conn_mod_def::GMhtIUkiD5g::8t9TGaKaRQeOUNSuGV4o5A` |

### Broadcast

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Broadcast Info | GET | `/api/v1/broadcast/{{broadcastId}}` | `conn_mod_def::GMhtI3rDRHA::YOBvuc01RW2wjGqLdK8b4A` |
| Cancel a Scheduled Broadcast | DELETE | `/api/v1/broadcast/{{broadcastId}}` | `conn_mod_def::GMhtIiCGD3A::f_41AgOhQLSel2zbGHzAOg` |
| Create Broadcast | POST | `/api/v1/broadcast` | `conn_mod_def::GMhtIiGhYrA::3IHBiv3JSfqrSiK3-qNYXQ` |

### WebPushDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Web Push Domains | GET | `/api/v1/site/webpush/domains` | `conn_mod_def::GMhtKKMtonA::a50PEL4CRvGAtXlUPqSeGw` |
| Add a Web Push Domain | POST | `/api/v1/site/webpush/domain` | `conn_mod_def::GMhtJ_-GLCg::h7uiXOWHQHy_anks1sEyWg` |
| Delete a Web Push Domain | DELETE | `/api/v1/site/webpush/domains` | `conn_mod_def::GMhtKABli8A::lU_PQjrGSfi82libL4MEoQ` |

### ApplicationTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Application Tokens | POST | `/api/v1/apps/{{appUuid}}/tokens` | `conn_mod_def::GMhtHeYw3bg::AQc47SPQT4uakeQfqysAyA` |
| Mute Application Tokens | POST | `/api/v1/apps/{{appUuid}}/token/mute` | `conn_mod_def::GMhtHfxbShA::x7N0XwU3R2-Cbn8ksMpRqg` |

### ContactSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact's Subscriptions | GET | `/api/v1/contact/{{id}}/subscriptions` | `conn_mod_def::GMhtH-wxP9A::hEhiFlCATUyWYi7sSFxS0Q` |
| Update Contact Subscriptions | PUT | `/api/v1/contact/{{id}}/subscriptions` | `conn_mod_def::GMhtIM3_qTg::fZV2CEUGSHCcyqBXABjE-w` |

### Event

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Event v2 | POST | `/api/v2/event` | `conn_mod_def::GMhtIUZH1hg::dVvjyWOSSMmLYX8Ah5mKRw` |
| Generate Event v3 | POST | `/api/v3/event` | `conn_mod_def::GMhtIUxy2Kg::Z6XrqBFSQ_SXOs9X6xhHng` |

### MobilePushMessage

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Mobile Push Message | POST | `/api/v1/messages/mobilepush` | `conn_mod_def::GMhtIbTX2jg::PHmVjih3T-S_5lUNeBQP1w` |
| Delete Base Mobile Push Message | DELETE | `/api/v1/messages/mobilepush/{{id}}` | `conn_mod_def::GMhtIh-7TTA::FJCNSYTgQD6JhXfDin0g0A` |

### TelegramBotMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Telegram Bot Message | GET | `/api/v1/messages/telegram/{{id}}` | `conn_mod_def::GMhtJHF0c0g::EY1Q8NSJS7Srr8cnGuq9hg` |
| Delete a Telegram Bot Message | DELETE | `/api/v1/messages/telegram/{{id}}` | `conn_mod_def::GMhtIpb0MNg::dEeWtrqxQfWFgEq7m9Nc0w` |

### EmailMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Email Message View Link | GET | `/api/v1/messages/email/{{id}}/viewLink` | `conn_mod_def::GMhtI-RdM_A::7TV5T4s1R3qEuBB9oW34PA` |
| Search for Email Messages | GET | `/api/v1/messages/email` | `conn_mod_def::GMhtJQq_GHg::HJu1n3WlSzWh3tWzK9rHsA` |

### Promocodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Number of Available Promotional Codes | GET | `/api/v1/promocodes/count` | `conn_mod_def::GMhtJGmN1jg::Xi9cbxzpQKmBAkAB_FUCXg` |
| Upload Promotional Codes | POST | `/api/v1/promocodes` | `conn_mod_def::GMhtJ4HZiNg::nzfzt2NnQEueRZi6oIBMdw` |

### Message

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Prepared Message | POST | `/api/v1/message/{{id}}/smartsend` | `conn_mod_def::GMhtJWtYwXA::yj9x0pEgS6mUp47avMvmuA` |
| Send Email Message | POST | `/api/v1/message/email` | `conn_mod_def::GMhtJYOLgOg::EbyKosB5SmeKiCZJRF7Zjg` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Orders | POST | `/api/v1/orders` | `conn_mod_def::GMhtJ5sRTKA::G14_fu1aQp6RNReb2Q6c0Q` |
| Delete Orders | DELETE | `/api/v1/orders` | `conn_mod_def::GMhtJ4IFGTA::dZ6sDkt7THqD9n2R0iarDw` |

### OrganizationBalance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Balance | GET | `/api/v1/balance` | `conn_mod_def::GMhtHegRztA::Me5jF4Z2Tha-Rr6ee2sRiw` |

### OrganizationBillingHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Billing History | GET | `/api/v1/balance/history` | `conn_mod_def::GMhtHegyUwg::tgP7X-1XSwqbEsKhLBRJBQ` |

### AccountInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Info | GET | `/api/v1/account/info` | `conn_mod_def::GMhtHhtLTYA::7LV7z1OVRP2D1n7q0r2yJA` |

### ContactTokenActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Change Token Activity | PUT | `/api/v1/contact/token/activated/{{appUuid}}/{{tokenId}}` | `conn_mod_def::GMhtHnz6gUA::amwdh0s1QLmwVxlzPLbGGQ` |

### TokenActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Token Activity | GET | `/api/v1/contact/token/activated/{{appUuid}}/{{tokenId}}` | `conn_mod_def::GMhtHoYKqjA::ofsRh05URtiyJ9Ki6IN-ng` |

### ContactsMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact's Message History | GET | `/api/v2/contacts/messages` | `conn_mod_def::GMhtHpISWKA::uxoOmPFYTWaCig96SrXDJA` |

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| Unmute Application Tokens for an App | POST | `/api/v1/apps/{{appUuid}}/token/unmute` | `conn_mod_def::GMhtHpWvQfg::MMZcqfQuQASKTwqPjwC7AQ` |

### ContactsActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contacts Activity | GET | `/api/v2/contacts/activity` | `conn_mod_def::GMhtHpYnKUg::IUP-lKihSJ-fsxeDv1RxOw` |

### StaticSegments

| Action | Method | Path | Action id |
|---|---|---|---|
| Attach Contact to Static Segment | POST | `/api/v1/group/{{id}}/contacts/attach` | `conn_mod_def::GMhtHvsKM_A::xxFnUNQoSgicnaBZOOUfxw` |

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Emails to Unsubscribed List | POST | `/api/v1/emails/unsubscribed/add` | `conn_mod_def::GMhtHvxRbXg::oRWhkIbnQGOx3IME6bD_Rg` |

### AdditionalFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Additional Fields | GET | `/api/v1/additionalfields` | `conn_mod_def::GMhtH31eVrA::jB9C5uqiR-iR14V2vvy6Kg` |

### ContactImportStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Import Status | GET | `/api/v1/importstatus/{{sessionId}}` | `conn_mod_def::GMhtH-9uOpA::pLheUxakQ6-aXyE1V-Gcyw` |

### AddressBooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Address Books | GET | `/api/v1/addressbooks` | `conn_mod_def::GMhtIEys-Lg::kiczMS83TGOX4uTjoqmuwg` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Segments | GET | `/api/v1/groups` | `conn_mod_def::GMhtIE8_IQA::JxAjqV0mQwK1Easz8YZ78g` |

### UnsubscribedEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove Emails From the Unsubscribed List | POST | `/api/v1/emails/unsubscribed/delete` | `conn_mod_def::GMhtIFnW4_A::GJUH_GUrRLeHJlEK58jV7Q` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Workflows | GET | `/api/v1/workflows` | `conn_mod_def::GMhtIFndg0A::8qI8cEenTAijabkcZX7zLw` |

This lists 90 of 113 actions. For anything not here, call `search_one_platform_actions` with platform `yespo`. The full catalog is at https://www.withone.ai/knowledge/yespo.

## When a call fails

The error comes from Yespo, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/yespo

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
