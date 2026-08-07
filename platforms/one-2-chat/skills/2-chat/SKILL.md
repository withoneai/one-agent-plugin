---
name: 2-chat
description: 2Chat is a business messaging platform that provides APIs and automation tools for WhatsApp communication, enabling teams and developers to send messages, manage conversations, integrate chat workflows, and support customer engagement across sales, marketing, and service use cases. Read and write 2Chat data through One: contacts, whatsappgroups, catalog, groups, webhooks, wabatemplates and more, 56 actions with real parameter documentation. Use whenever the user asks to look something up in 2Chat, create or update a record there, or build code against the 2Chat API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: 2-chat
  generated-from: one-knowledge-base
---

# 2Chat through One

2Chat is a business messaging platform that provides APIs and automation tools for WhatsApp communication, enabling teams and developers to send messages, manage conversations, integrate chat workflows, and support customer engagement across sales, marketing, and service use cases.

One exposes 2Chat through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `2-chat` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm 2Chat is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real 2Chat account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/open/contacts/{{contactUuid}}` | `conn_mod_def::GLT35AXTzKc::UXg7sd2zRdKhxmx2ZjTt2g` |
| List Contacts | GET | `/open/contacts` | `conn_mod_def::GLT348d7WSg::l1QOJt7oQnKwx-5Y6MSgUg` |
| Search Contacts | GET | `/open/contacts/search` | `conn_mod_def::GLT35JlfZR8::jm03mMDyQ9qpoU1yxyWLhA` |
| Create Contact Using Contacts | POST | `/open/contacts` | `conn_mod_def::GLT349vfDT8::DjBuJ2AdQcWfLlNzpqZgBg` |
| Delete a Contact | DELETE | `/open/contacts/{{contactUuid}}` | `conn_mod_def::GLT346yhKBg::9gRFVfGeQkCPCnMOUgGARw` |
| Update a Contact | PUT | `/open/contacts/{{contactUuid}}` | `conn_mod_def::GLT35IC2-P8::6xFWYSKuRfKd6NKN0x9ULg` |

### WhatsAppGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List WhatsApp Groups | GET | `/open/whatsapp/groups/{{phoneNumber}}` | `conn_mod_def::GLT37V2KQzI::yD_FZogMTWGf3qto8HjS8Q` |
| Create WhatsApp Group | POST | `/open/whatsapp/group/create` | `conn_mod_def::GLT37MYwGto::RzKjzh5uQVGlZOpRS4fohQ` |
| Set Picture for a WhatsApp Group | POST | `/open/whatsapp/group/{{groupUuid}}/set-picture` | `conn_mod_def::GLT37VlHJHo::pKl6dZP2SdmqYTMU4vEeIw` |

### Catalog

| Action | Method | Path | Action id |
|---|---|---|---|
| List Products in a WhatsApp Catalog | GET | `/open/whatsapp/catalog/products/{{phoneNumber}}` | `conn_mod_def::GLT362lSVYk::wNrVMGy6T0StHH0C_-q08Q` |
| Add Product Using WhatsApp Catalog | POST | `/open/whatsapp/catalog/product` | `conn_mod_def::GLT36hlcgkE::_bOTA2SdSCCW9UkMcajjrw` |
| Delete Product from WhatsApp Catalog | DELETE | `/open/whatsapp/catalog/product/{{productId}}` | `conn_mod_def::GLT36sW1m9s::fSQE_jTSRVW7zyf5nk40SA` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List WhatsApp Group Participants | GET | `/open/whatsapp/group/{{groupUuid}}` | `conn_mod_def::GLT37UV8Zf8::FGKJKZC-R5-giCs5PDoVSA` |
| Promote Participant Using WhatsApp Group | POST | `/open/whatsapp/group/{{groupUuid}}/promote-participant` | `conn_mod_def::GLT37U-BuOw::c9kNiaqmTEOHT3EqTFozmg` |
| Set Description for a WhatsApp Group | POST | `/open/whatsapp/group/{{groupUuid}}/set-description` | `conn_mod_def::GLT37d9i1s4::eYOvCXGpRCuQNRf8L0YLnQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Webhooks | GET | `/open/webhooks` | `conn_mod_def::GLT36NzCVTM::bxEhl0IvQBujuglYfcbYtg` |
| List Webhooks by Channel | GET | `/open/webhooks/channel/{{channelUuid}}` | `conn_mod_def::GLT36N9qGNw::_9aNV3nTT46mzEsO7hvVVQ` |
| Delete Subscription | DELETE | `/open/webhooks/{{webhookId}}` | `conn_mod_def::GLT36FZOfS4::F0avvjQFQm-oJb1pl9BI5g` |

### WabaTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get WABA Templates by Number | GET | `/open/waba/templates` | `conn_mod_def::GLT36POPSlg::nLTyE9suRG2bgM8jr4SRrA` |
| Delete a WABA Template | DELETE | `/open/waba/templates/{{templateUuid}}` | `conn_mod_def::GLT36OEhnOw::wABKLuW8Qr2ozpe0mGwpEw` |
| Sync WABA Templates | POST | `/open/waba/templates/sync` | `conn_mod_def::GLT36ZQZn_M::JNnSi5JyStCKSsg6bWq9Hg` |

### WhatsAppGroupParticipants

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Participant to a WhatsApp Group | POST | `/open/whatsapp/group/{{groupUuid}}/add-participant` | `conn_mod_def::GLT362RB0A8::9mI_hIx-QbaNnQJAr_Jzxw` |
| Demote Participant in a WhatsApp Group | POST | `/open/whatsapp/group/{{groupUuid}}/demote-participant` | `conn_mod_def::GLT363m-qZg::AsD98fTaT3u4UE8ks0r5LA` |
| Remove Participant from a WhatsApp Group | POST | `/open/whatsapp/group/{{groupUuid}}/remove-participant` | `conn_mod_def::GLT37VRKRwM::712CN13eQOutQf6g9Rs6ug` |

### NumbersReservations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Reservations for Numbers | GET | `/open/numbers/reservations` | `conn_mod_def::GLT36DCw0qo::bDqOBqxaRpCLFZK8ns5nmQ` |
| Reserve a Number | POST | `/open/numbers/reservations` | `conn_mod_def::GLT35_Ttfi4::0gGsrED3Sp2us4Dmr5YPNQ` |

### WhatsAppCatalogCollection

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a WhatsApp Catalog Collection | DELETE | `/open/whatsapp/catalog/collection/{{collectionId}}` | `conn_mod_def::GLT36sjzr0o::ENVBSILXTqWIKR86otFCUw` |
| Edit a WhatsApp Catalog Collection | PUT | `/open/whatsapp/catalog/collection/{{collectionId}}` | `conn_mod_def::GLT36tRNS0U::T9hUunv_Shev-wYEw0FcZA` |

### VirtualNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Virtual Numbers | GET | `/open/voip/virtual-numbers` | `conn_mod_def::GLT35d5XKuA::ig84MiMTQNKsukDfuzBPJQ` |
| Delete a Virtual Number | DELETE | `/open/voip/virtual-numbers/{{virtualNumberUuid}}` | `conn_mod_def::GLT35ln7W9g::xJ6Y1QMMT7K42-UgrYVrfw` |

### CallHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Call History | GET | `/open/voip/call-history` | `conn_mod_def::GLT35LjgW9c::vTRCt91MQzyyZGFxz8P5lA` |

### CallerIds

| Action | Method | Path | Action id |
|---|---|---|---|
| List Caller IDs | GET | `/open/voip/caller-ids` | `conn_mod_def::GLT35XM2rcM::TDqVaCH_TX2cswFf6Ga2dA` |

### NumberGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Number Groups | GET | `/open/numbers/groups` | `conn_mod_def::GLT36EYOfKo::lYA8lPc_S8-YZIPgCZ3Vgg` |

### WabaMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Message Using WABA | POST | `/open/waba/send-message` | `conn_mod_def::GLT36X5sndE::qLEJrduqT7616zbxiv6GRQ` |

### WhatsAppNumber

| Action | Method | Path | Action id |
|---|---|---|---|
| Get WhatsApp Number | GET | `/open/whatsapp/channel/{{channelId}}` | `conn_mod_def::GLT36XNiITo::d3u5nu9UQ8uIoc62T1s3jw` |

### WhatsappNumberCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Number on WhatsApp Using WhatsApp | GET | `/open/whatsapp/check-number/{{yourNumber}}/{{numberToCheck}}` | `conn_mod_def::GLT36YtLkUY::tLJXiKh_T62JKHuNZwnVkg` |

### CallDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Call Details | GET | `/open/voip/call/{{callUuid}}` | `conn_mod_def::GLT35IiVVl0::fLNbfUPEQuOWLVZsAxRGrw` |

### DidTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List DID Types Using Numbers | GET | `/open/numbers/did-types` | `conn_mod_def::GLT35mXWUEQ::owwv3c3vTD2oOkUyIXmnwQ` |

### WabaNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Number Using WABA | GET | `/open/waba/numbers/{{wabaUuid}}` | `conn_mod_def::GLT36NRkJI0::TTopry-iSKSJwOvH5BWQWQ` |

### WhatsAppNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| List WhatsApp Numbers | GET | `/open/whatsapp/get-numbers` | `conn_mod_def::GLT36YhlqlU::AYPAClk1Qj2KlBt05pwVQQ` |

### WhatsAppCatalogProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit a WhatsApp Catalog Product | PUT | `/open/whatsapp/catalog/product/{{productId}}` | `conn_mod_def::GLT36sUYyMk::qvGMReljQ5WW9XR_QVARSg` |

### Numbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Purchase Numbers | POST | `/open/numbers/purchase` | `conn_mod_def::GLT35-Em8u0::vFAkBfp4RsWXiRFp0x6B9g` |

### CallPrice

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Call Price | GET | `/open/voip/estimated-call-price/{{phoneNumber}}` | `conn_mod_def::GLT35JFqeMQ::BIuKDor-QBm-NpbsV2cPAA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Users | GET | `/open/users` | `conn_mod_def::GLT35WHeLZ8::yXrqBHv5RM61e-57B0xtOg` |

### WhatsAppCatalogCollections

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Collection Using WhatsApp Catalog | POST | `/open/whatsapp/catalog/collection` | `conn_mod_def::GLT36hRDHaE::4Gy3WVdQQ1W-cIYe6RmPWw` |

### Regions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Regions for Numbers | GET | `/open/numbers/regions` | `conn_mod_def::GLT35nacDlA::dEr9FgZwT0yoVb4TJzqgpA` |

### WhatsappProfilePicture

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Profile Picture for a WhatsApp Number | POST | `/open/whatsapp/set-profile-picture/{{number}}` | `conn_mod_def::GLT36ib_f6I::eQAKL-w2THqXaAZdYsfb_Q` |

### Cities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cities for Numbers | GET | `/open/numbers/cities` | `conn_mod_def::GLT35nJ6qu0::k4g7T6AiT3a3H3PHieL4cw` |

### Sms

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Using SMS | POST | `/open/sms/send` | `conn_mod_def::GLT35VvnNM4::U4TE5p32R5GKELDyUsiKOQ` |

### Reservations

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Reservation | DELETE | `/open/numbers/reservations/{{uuid}}` | `conn_mod_def::GLT35WWEmSc::ZxFU4_oATQW68yM-mPDRSg` |

### ProductImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Product Image | DELETE | `/open/whatsapp/catalog/product/image/{{productId}}/{{imageIndex}}` | `conn_mod_def::GLT36tB3xlM::0Z6TR2OTRNihqqJPG0MQeA` |

### WhatsAppCatalogProductImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Product Image to a WhatsApp Catalog Product | POST | `/open/whatsapp/catalog/product/image/{{productId}}` | `conn_mod_def::GLT36j7vNW4::JGOFcz_lQXizHTTU_GO5nQ` |

### AvailableNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Available Numbers | GET | `/open/numbers/available` | `conn_mod_def::GLT352scugs::78sCDW2cSsK-76FucDz0Ww` |

### WhatsAppMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Message Using WhatsApp | POST | `/open/whatsapp/send-message` | `conn_mod_def::GLT36h2YX10::ZyT37RtSStiRwZiURRZJFg` |

### WhatsAppCatalog

| Action | Method | Path | Action id |
|---|---|---|---|
| List Collections in a WhatsApp Catalog | GET | `/open/whatsapp/catalog/collections/{{phoneNumber}}` | `conn_mod_def::GLT362vbvzU::JqTLPa40T-CCxsdUBc0nOg` |

### BillingInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Billing Info | GET | `/open/info` | `conn_mod_def::GLT347RtJFM::z265AoPhRxG4ZCEY0RtGjw` |

## When a call fails

The error comes from 2Chat, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/2-chat

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
