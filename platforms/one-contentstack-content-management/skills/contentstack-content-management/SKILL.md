---
name: contentstack-content-management
description: Contentstack’s Content Management API is a powerful, API-first REST interface that enables developers to programmatically create, update, delete, and structure content—supporting secure token-based access, customizable content types, and flexible workflows for managing headless CMS operations across cloud-native environments. Read and write Contentstack Content Management data through One: assets, extensions, entries, releases, stacks, taxonomies and more, 240 actions with real parameter documentation. Use whenever the user asks to look something up in Contentstack Content Management, create or update a record there, or build code against the Contentstack Content Management API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: contentstack-content-management
  generated-from: one-knowledge-base
---

# Contentstack Content Management through One

Contentstack’s Content Management API is a powerful, API-first REST interface that enables developers to programmatically create, update, delete, and structure content—supporting secure token-based access, customizable content types, and flexible workflows for managing headless CMS operations across cloud-native environments.

One exposes Contentstack Content Management through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `contentstack-content-management` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Contentstack Content Management is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Contentstack Content Management account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Asset with Permanent URL (by API Key, Asset UID, and Slug) | GET | `/v3/assets/{{apiKey}}/{{assetUid}}/{{slug}}` | `conn_mod_def::GJ1W86QMzcY::e0QvP3JdR6S9ht8hkkvPXA` |
| Get All Versions of an Asset | GET | `/v3/assets/{{assetUid}}/versions` | `conn_mod_def::GJ1W9vCM4Yk::ckkZ4uEGTj6g-FbLNKa1pA` |
| Get an Asset (by Asset UID) | GET | `/v3/assets/{{assetUid}}` | `conn_mod_def::GJ1W9a2DLDw::Ndbkz6KhSM2WK-zNu2iZZw` |
| Get Asset References | GET | `/v3/assets/{{assetUid}}/references` | `conn_mod_def::GJ1W9lGgX2E::Axx7vJXyT9OVKOAKX6xTYg` |
| Get Either Only Images or Videos (Assets by Type) | GET | `/v3/assets/{{assetType}}` | `conn_mod_def::GJ1W95hn4Ho::M-wxobwsQxKTz-vzhehGew` |
| List Assets (Optionally Filter by Folder / Include Subfolders) | GET | `/assets` | `conn_mod_def::GJ1W9PDmv9E::pJqXf-CTR7u4cjfFrgLZCw` |
| Delete an Asset | DELETE | `/v3/assets/{{assetUid}}` | `conn_mod_def::GJ1W8mvTzCo::uHzPJnhhQRCru_RBpquRNQ` |
| Delete an Asset Version’s Name | DELETE | `/v3/assets/{{assetUid}}/versions/{{versionNumber}}/name` | `conn_mod_def::GJ1W8wExQA4::2DW-glsjQ6i8R1zRMB1IKQ` |
| Publish an Asset | POST | `/v3/assets/{{assetUid}}/publish` | `conn_mod_def::GJ1W-MPhgUY::Ql9XXbyLQrKBK09df5DbJA` |
| Replace an Asset (Update a Specific Asset) | PUT | `/v3/assets/{{assetUid}}` | `conn_mod_def::GJ1W-Y3IPqM::uQDpTullTlGq8B5CJhAbvA` |
| Set a Version Name for an Asset | POST | `/v3/assets/{{assetUid}}/versions/{{versionNumber}}/name` | `conn_mod_def::GJ1W-kqbTSw::Z3ia95tRQ_ezJqF9CeG0oQ` |
| Unpublish an Asset | POST | `/v3/assets/{{assetUid}}/unpublish` | `conn_mod_def::GJ1W-tO4wr4::4q7dtXR_SZ2ZLwCv4Mrp5g` |

1 more Assets actions are available through search.

### Extensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Asset Sidebar Extension | GET | `/v3/extensions/{{assetSidebarExtensionUid}}` | `conn_mod_def::GJ1XIIF2pc0::nFSH11YkR3mts2FfLHUelw` |
| Get a Single Custom Field (Extension) | GET | `/v3/extensions/{{customFieldUid}}` | `conn_mod_def::GJ1XIV2GLm4::uxur45jiQoiGR3ZtBs0LVg` |
| Get a Single JSON RTE Plugin | GET | `/v3/extensions/{{jsonRtePluginUid}}` | `conn_mod_def::GJ1XIgOfCn4::LF3hnFtdQ3yo6yAdS45pCg` |
| List Stack Extensions (Custom Fields, Widgets, Dashboard Widgets, JSON RTE Plugins) | GET | `/v3/extensions` | `conn_mod_def::GJ1XIqoW1KA::lXboInfiT8Of_s-UwKrJBg` |
| Create an Extension (Custom Field / Widget / Dashboard Widget / RTE Plugin / Asset Sidebar Widget) | POST | `/extensions` | `conn_mod_def::GJ1XJowpsLE::PsZzMGIYTkiKxQ_gbhqiuw` |
| Delete a Custom Field (Extension) | DELETE | `/v3/extensions/{{customFieldUid}}` | `conn_mod_def::GJ1XHqZx_Fs::tFhIoFs-TbCI5e-MMabp4w` |
| Delete a Dashboard Widget (Extension) | DELETE | `/v3/extensions/{{extensionUid}}` | `conn_mod_def::GJ1XH-06GW4::kZxd8bhoQIGRI8qZ8fNrLQ` |
| Delete a JSON RTE Plugin (Extension) | DELETE | `/v3/extensions/{{jsonRtePluginUid}}` | `conn_mod_def::GJ1XH1g48U4::iLOt8xaKSGGaUj6x_jKbQA` |
| Delete a Widget (Extension) | DELETE | `/v3/extensions/{{widgetUid}}` | `conn_mod_def::GJ1XHZiUfhw::zqjrB9LORKq1_DNGZ1OcWg` |
| Delete an Asset Sidebar Extension | DELETE | `/v3/extensions/{{assetSidebarExtensionUid}}` | `conn_mod_def::GJ1XHiPJw7w::2pnNASTIQvW9xbE58nu8_Q` |
| Update a Custom Field (Extension) | PUT | `/v3/extensions/{{customFieldUid}}` | `conn_mod_def::GJ1XIzsn56E::Vxm5JHJrTpadDwydZghehg` |
| Update a Dashboard Widget (Extension) | PUT | `/v3/extensions/{{extensionUid}}` | `conn_mod_def::GJ1XJfvWH4U::FqYnhb1ASGuTNnS_QeEnew` |

1 more Extensions actions are available through search.

### Entries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Entry (Get Embedded RTE Objects Info) | GET | `/v3/content_types/{{contentTypeUid}}/entries/{{entryUid}}` | `conn_mod_def::GJ1XDLio3OU::1HKU3bnTQwao7dTvb02nhQ` |
| List Entries for a Content Type | GET | `/v3/content_types/{{contentTypeUid}}/entries` | `conn_mod_def::GJ1XELUIVKs::GRm0mEXMSY-D-HPykwy18Q` |
| Create an Entry for a Content Type | POST | `/v3/content_types/{{contentTypeUid}}/entries` | `conn_mod_def::GJ1XC-doqFE::Of0O9VZBS0uHjks3PSLtWQ` |
| Delete a Content Type Entry | DELETE | `/v3/content_types/{{contentTypeUid}}/entries/{{entryUid}}` | `conn_mod_def::GJ1XDvDhqR0::RGvJr3I-RUyp-mKm1dXX7g` |
| Delete a Version Name of an Entry | DELETE | `/v3/content_types/{{contentTypeUid}}/entries/{{entryUid}}/versions/{{versionNumber}}/name` | `conn_mod_def::GJ1XD4QHoe0::iXs0qouxR4CiaNLTMO9Akg` |
| Import an Entry into a Content Type | POST | `/v3/content_types/{{contentTypeUid}}/entries/import` | `conn_mod_def::GJ1XEz_z_ao::lfXlZOhURwmaGysuGzvG_Q` |
| Import an Existing Entry (Create a New Version) | POST | `/v3/content_types/{{contentTypeUid}}/entries/{{entryUid}}/import` | `conn_mod_def::GJ1XE9wKld8::zCN0gSwDQiqy-p1OVWDRzA` |
| Publish an Entry (or Entry Variant) for a Content Type | POST | `/v3/content_types/{{contentTypeUid}}/entries/{{entryUid}}/publish` | `conn_mod_def::GJ1XGFoqXlw::qMqV-7qMQROSwrlvOC0Lzw` |
| Set an Entry’s Workflow Stage (or Request/Accept/Reject Entry Publish Request) | POST | `/content_types/{{contentTypeUid}}/entries/{{entryUid}}/workflow` | `conn_mod_def::GJ1XhYFiZXg::saAtiC3TSEai797xU30BBw` |
| Unlocalize an Entry (in a Content Type) | POST | `/v3/content_types/{{contentTypeUid}}/entries/{{entryUid}}/unlocalize` | `conn_mod_def::GJ1XFQVzqhI::-2xemXWHR1eNC5sBY6tKew` |
| Unpublish an Entry (or Entry Variant) for a Content Type | POST | `/v3/content_types/{{contentTypeUid}}/entries/{{entryUid}}/unpublish` | `conn_mod_def::GJ1XGO7U76Y::M93yzGgZTv-m189-Gk1iDw` |
| Update an Entry (by Content Type UID and Entry UID) | PUT | `/v3/content_types/{{contentTypeUid}}/entries/{{entryUid}}` | `conn_mod_def::GJ1XDVe-pk4::NFjGxf8TQfa4tcortwNGfg` |

### Releases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Release | GET | `/v3/releases/{{releaseUid}}` | `conn_mod_def::GJ1XSA9ufAs::qr2-X2NNQqm4FK-J6GAzoA` |
| Get All Releases (Stack) | GET | `/releases` | `conn_mod_def::GJ1XSTLFCyA::VoVz053VQVGaIwX5O91mlg` |
| Add a Single Item to a Release | POST | `/v3/releases/{{releaseUid}}/item` | `conn_mod_def::GJ1XRKGhjJk::_c4rUXp-QKi-HKIu4IMnHg` |
| Add Multiple Items to a Release | POST | `/v3/releases/{{releaseUid}}/items` | `conn_mod_def::GJ1XRSvStHY::QJlHYG9_TT-kJSOMuIsAvg` |
| Clone a Release (in a Stack) | POST | `/v3/releases/{{releaseUid}}/clone` | `conn_mod_def::GJ1XRbLh2DQ::fsU2jorBTBq1YDYblfHrbQ` |
| Create a Release | POST | `/releases` | `conn_mod_def::GJ1XRmLc3zc::53sdIrsoTA6v0XL-zsUl0Q` |
| Delete a Stack Release | DELETE | `/v3/releases/{{releaseUid}}` | `conn_mod_def::GJ1XRvUEHdw::JwU-PIxdTsORYR0qxSU7-A` |
| Deploy a Release | POST | `/v3/releases/{{releaseUid}}/deploy` | `conn_mod_def::GJ1XR3f03qc::oqkr8jDpQ0qhFl_yr__yzg` |
| Remove Items from a Release (Single or Multiple) | DELETE | `/v3/releases/{{releaseUid}}/items` | `conn_mod_def::GJ1XSctNJ9w::ULKtUZoSRh6ytK3D1oRyyw` |
| Update a Release (Lock/Unlock) | PUT | `/v3/releases/{{releaseUid}}` | `conn_mod_def::GJ1XSoGeFpE::22rZjj8xRvmomkRPHYKRSg` |
| Update a Release’s Items to Their Latest Versions | PUT | `/v3/releases/{{releaseUid}}/update_items` | `conn_mod_def::GJ1XSzJiO10::bfzC5hfTTy2BwcQhHt0DVw` |

### Stacks

| Action | Method | Path | Action id |
|---|---|---|---|
| Accept a Stack Ownership Invitation (via Ownership Token) | GET | `/v3/stacks/accept_ownership/{{ownershipToken}}` | `conn_mod_def::GJ1XTx9cDys::n9AHEH59Syuu5_QOjFBiRA` |
| Get a Single Stack | GET | `/v3/stacks` | `conn_mod_def::GJ1XUUcCFWs::uSE2mfLAQQCPiOXtLq3YMA` |
| Get All Stacks | GET | `/stacks/` | `conn_mod_def::GJ1XUgvJTH4::89uwveFsQHyyAVZWgkO9Lw` |
| List an Organization’s Stacks | GET | `/v3/organizations/{{organizationUid}}/stacks` | `conn_mod_def::GJ1XPrIbLFU::8awiM6z-R5iMjpS2Z0q3HA` |
| Create Stack | POST | `/stacks` | `conn_mod_def::GJ1XUEJlbQM::Vfa5mLtyRNqCEmp3UkE-Vg` |
| Delete a Stack | DELETE | `/stacks` | `conn_mod_def::GJ1XUL3rfpk::Wsh8abq0TpWnPvzDxNYRKA` |
| Share a Stack | POST | `/stacks/share` | `conn_mod_def::GJ1XVF28xxo::PbnFGlD-TiaA7oyiDX96AQ` |
| Transfer Stack Ownership to Other Users | POST | `/stacks/transfer_ownership` | `conn_mod_def::GJ1XVO27Qnk::gAv3gE8WS-mAHXAAOgbxvw` |
| Unshare a Stack | POST | `/stacks/unshare` | `conn_mod_def::GJ1XVYnyeSw::Vt7LSMSMT4mgkTCjdXearQ` |
| Update Stack | PUT | `/stacks` | `conn_mod_def::GJ1XVhHe534::LdpJrsP8S7-O9s0GmwtrUA` |

### Taxonomies

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Taxonomy | GET | `/v3/taxonomies/{{taxonomyUid}}/export` | `conn_mod_def::GJ1XWJ0j7IQ::3qWtFwDbQyeJpbkLg4z5_g` |
| Get a Single Taxonomy (by UID) | GET | `/v3/taxonomies/{{taxonomyUid}}` | `conn_mod_def::GJ1XWXPNc3c::ew3ISNXCTRO66icD4Csb9w` |
| Get All Taxonomies | GET | `/taxonomies` | `conn_mod_def::GJ1XWtSER7s::swAFrwWFTzm7i4avPKCpjQ` |
| Get Ancestors of a Taxonomy Term | GET | `/v3/taxonomies/{{taxonomyUid}}/terms/{{termUid}}/ancestors` | `conn_mod_def::GJ1XXN9vs3w::yckOlwKNRpKaIvm8461zJg` |
| Create a Taxonomy (in a Stack) | POST | `/taxonomies/` | `conn_mod_def::GJ1XVywKzBw::MrUvSCWxS0SThOgbc4UlCA` |
| Import a Taxonomy (Upload JSON/CSV) | POST | `/taxonomies/import` | `conn_mod_def::GJ1XXo-YRQQ::o3Jvx1aQQJGNsjT2cG93Nw` |
| Localize a Taxonomy | POST | `/v3/taxonomies/{{taxonomyUid}}` | `conn_mod_def::GJ1XXxdC2xA::nnv6rjD1SGeJDfIHYDH6nw` |
| Unlocalize or Delete a Taxonomy | DELETE | `/v3/taxonomies/{{taxonomyUid}}` | `conn_mod_def::GJ1XYP_N7Ug::FdLHy_ZFR1SmXnbHRO0OGQ` |
| Update a Taxonomy | PUT | `/v3/taxonomies/{{taxonomyUid}}` | `conn_mod_def::GJ1XYiUF6pI::vFKAYtq2Q_iEq8tJk-Mh2w` |

### ContentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Compare Content Types Between Branches | GET | `/stacks/branches_compare/content_types` | `conn_mod_def::GJ1W_miJh1M::a3S-a2HXQi62SxreQ0jMzA` |
| Export a Content Type (Schema) | GET | `/v3/content_types/{{contentTypeUid}}/export` | `conn_mod_def::GJ1XCPpkbnk::4LoeReZhSfmEfX56xMYQkA` |
| Get a Single Content Type | GET | `/v3/content_types/{{contentTypeUid}}` | `conn_mod_def::GJ1XCY9vuvA::-fGgBodVT3m8vmqurIsm8A` |
| List All Content Types in a Stack | GET | `/content_types` | `conn_mod_def::GJ1XCh-sDzg::rH0ttu5cS4ic_wNGD9aBDQ` |
| Create a Content Type | POST | `/v3/content_types` | `conn_mod_def::GJ1XHQ_95No::_0WhlKFvSN2lTBA3tp-B6w` |
| Delete a Content Type | DELETE | `/v3/content_types/{{contentTypeUid}}` | `conn_mod_def::GJ1XCG_7lbw::q6tW3QEcRuuGzVCis4WbDg` |
| Import a Content Type into a Stack | POST | `/content_types/import` | `conn_mod_def::GJ1XC1Boo4M::SMTwfdIlQkeOQzcDWpolDQ` |
| Update a Content Type | PUT | `/v3/content_types/{{contentTypeUid}}` | `conn_mod_def::GJ1XDe0h0fw::zKpv759eS-mDY6ZdvUsthQ` |

### GlobalFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Compare a Specific Global Field Between Branches | GET | `/v3/stacks/branches_compare/global_fields/{{globalFieldUid}}` | `conn_mod_def::GJ1XAEg7KpE::SuUW5W4dTE2qax2fZ5Abaw` |
| Export a Global Field | GET | `/v3/global_fields/{{globalFieldUid}}/export` | `conn_mod_def::GJ1XKTAR924::rTrIxEAtTwKYHlr3lgzWPQ` |
| Get a Single Global Field | GET | `/v3/global_fields/{{globalFieldUid}}` | `conn_mod_def::GJ1XKc9ZuDs::Q--ISfCCTDiq_npyW3hoyw` |
| List All Global Fields | GET | `/global_fields` | `conn_mod_def::GJ1XKqYUiqo::JH3C-EP_R4O_kHtOSXW3HQ` |
| Create a Global Field | POST | `/global_fields` | `conn_mod_def::GJ1XJ84cIj0::iqO95pIBRrCcM26WBPQ8MQ` |
| Delete a Global Field | DELETE | `/v3/global_fields/{{globalFieldUid}}` | `conn_mod_def::GJ1XKKEuoF0::2yrEqh5rRxKsvttX_Cwvjg` |
| Import a Global Field | POST | `/global_fields/import` | `conn_mod_def::GJ1XKzAxN34::3F77ZYDpTeqe4iVyOPOBFQ` |
| Update a Global Field | PUT | `/v3/global_fields/{{globalFieldUid}}` | `conn_mod_def::GJ1XK9LGFv0::iHqczb5hSvyOG1kDAjwiHQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Webhook | GET | `/v3/webhooks/{{webhookUid}}/export` | `conn_mod_def::GJ1Xd_3Z06o::iJc2d3QaS8CChBk11VpuvQ` |
| Get a Webhook | GET | `/v3/webhooks/{{webhookUid}}` | `conn_mod_def::GJ1XemJsyjw::dLpDti8gRQu5t9VA2nnpSg` |
| List All Webhooks | GET | `/webhooks` | `conn_mod_def::GJ1XeKCMvPs::bkGDH2YKRDG8ttE1YOhLDQ` |
| Create a Webhook (in a Stack) | POST | `/v3/webhooks` | `conn_mod_def::GJ1Xduoej8Y::w72l7xfAQbCnrJOeDcmukA` |
| Delete a Webhook | DELETE | `/v3/webhooks/{{webhookUid}}` | `conn_mod_def::GJ1Xd3U2iGo::KI5CDukTTSmC5vwQQ6yLcg` |
| Import a Webhook | POST | `/webhooks/import` | `conn_mod_def::GJ1Xeu2mLQ4::9l6LR8dRSL-tKhL5MNSZGQ` |
| Import an Existing Webhook (Update via Import) | POST | `/v3/webhooks/{{webhookUid}}/import` | `conn_mod_def::GJ1Xe4QFQp8::sNnCrRyzSReboPVE-JG0ig` |
| Update a Webhook in a Stack | PUT | `/v3/webhooks/{{webhookUid}}` | `conn_mod_def::GJ1XfKLZab8::NHumDbiuTlajn9UrCiF-Pg` |

This lists 90 of 240 actions. For anything not here, call `search_one_platform_actions` with platform `contentstack-content-management`. The full catalog is at https://www.withone.ai/knowledge/contentstack-content-management.

## When a call fails

The error comes from Contentstack Content Management, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/contentstack-content-management

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
