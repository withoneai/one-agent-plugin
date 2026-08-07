---
name: builder-io-admin
description: Builder.io Admin is a visual CMS and content management platform that provides APIs, a visual editor, and developer tooling for managing structured content and page experiences, allowing teams to build, update, and deliver digital content across websites and applications. Read and write Builder.io Admin data through One: models, folders, webhooks, contententries, spaces, spacesettings and more, 46 actions with real parameter documentation. Use whenever the user asks to look something up in Builder.io Admin, create or update a record there, or build code against the Builder.io Admin API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: builder-io-admin
  generated-from: one-knowledge-base
---

# Builder.io Admin through One

Builder.io Admin is a visual CMS and content management platform that provides APIs, a visual editor, and developer tooling for managing structured content and page experiences, allowing teams to build, update, and deliver digital content across websites and applications.

One exposes Builder.io Admin through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `builder-io-admin` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Builder.io Admin is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Builder.io Admin account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Models | GET | `/models` | `conn_mod_def::GLdz1dggn1Q::gYuMuk6-RNOti-J8Dj-rcg` |
| Add Model | POST | `/graphql` | `conn_mod_def::GLdzz57mT6Q::bgIOFAJoTDyGvHWk9s6uqg` |
| Delete Model | POST | `/` | `conn_mod_def::GLdz0OhxlKY::qwT6nHrXTyGq-TzXLgJHvw` |
| Get Model by ID | POST | `/` | `conn_mod_def::GLdz1RW1QZs::YrhlZ-VjS3qGX2o6VG_ijw` |
| Update Model | POST | `/graphql` | `conn_mod_def::GLdz0lbQOBg::B8lbFIlcT3qgYOZtOYMnjQ` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Folder | POST | `/` | `conn_mod_def::GLdz0ELJ8ZM::KXyH42FiQ6GN632R2W7QbQ` |
| Delete Folder | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0NN_oks::mIaSg0tERDq76jUiaZ65Dg` |
| Get Folder | POST | `/api/v1/graphql` | `conn_mod_def::GLdz1FLIUbA::rPpx0nofRl2CRvTZmjXd3w` |
| Get Folders | POST | `/` | `conn_mod_def::GLdz1EzvhHQ::_WIng-dQToud2gUVySukzg` |
| Update Folder | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0kxh8xk::amV8Jh6eR6ihjN8Dx0-tNg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Webhook | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0YfzGM0::cfQywWoxT92ZMBjafzzc3w` |
| Get Webhooks for a Space | POST | `/api/v1/getWebhooks` | `conn_mod_def::GLdz1FbTU8M::6DyWYJR3R0ivCFhssEv_fg` |
| Set Webhooks for a Space | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0vHyhmY::eOwugOecSrC-QlfgIt9wJA` |
| Update Webhooks | POST | `/api/v1/graphql` | `conn_mod_def::GLdz03-HTJA::eiHIdi3OSeeJxDBkL2jylw` |

### ContentEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Content Entry | POST | `/api/v1/write/{{model}}` | `conn_mod_def::GLdz1o9qgcg::WHCkGDuUTpWzKfwcSfFaYQ` |
| Delete Content Entry | DELETE | `/api/v1/write/{{model}}/{{entryId}}` | `conn_mod_def::GLdz1psgFb8::9nbuBpW6SwmRze9iEul0IQ` |
| Replace Content Entry | PUT | `/api/v1/write/{{model}}/{{entryId}}` | `conn_mod_def::GLdz1oNS3wo::Kg2e_OKHR_uYw7xKqtsHUg` |
| Update Content Entry | PATCH | `/api/v1/write/{{model}}/{{entryId}}` | `conn_mod_def::GLdz1oho0Ic::bvl-3wmtQuiTqGybS-hWwg` |

### Spaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Copy Space | POST | `/api/v1/graphql` | `conn_mod_def::GLdzz5d3cPE::V20qxV4FSQ2W8axbYN1wiw` |
| Create Space | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0EX6jlk::_Gv5Q45vTo6K4kzvLgeQRg` |

### SpaceSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Add OIDC Provider to Space Settings | POST | `/api/v1/graphql` | `conn_mod_def::GLdzz6OEgck::Ymy_qPLwQuumdP5c_ToZaQ` |
| Add SAML Provider to Space Settings | POST | `/api/v1/graphql` | `conn_mod_def::GLdzz8sy0jk::K0nBAZoSRUCrgmgrEvbn4g` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Asset | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0FUNHw4::M6XGrDhDQXe3BlKCpMrTYQ` |
| Query Assets | POST | `/assets` | `conn_mod_def::GLdz1Evh5YQ::vEw9E6c4TGGP04K8VSeFdA` |

### CustomTargetingAttribute

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Custom Targeting Attribute | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0NAEZ9c::m0_JDF7KRhmnSRDU8TyM7g` |
| Upsert Custom Targeting Attribute | POST | `/api/v1/graphql` | `conn_mod_def::GLdz04eFsKU::ycfVbQo7R7eAT54KPSBM7A` |

### SpaceLocaleGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Space Locale Groups | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0b2-DV4::9LR3SNJBTcialnxPDJoxFg` |
| Upsert Space Locale Group | POST | `/api/v1/graphql` | `conn_mod_def::GLdz07ZOa6U::2Yv5O7RsS66YFWksGTY0uw` |

### SpaceLocales

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Space Locales | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0kVIMn4::vVTxgMQcT72qQOdxgJnSbg` |
| Upsert Space Locale | POST | `/api/v1/graphql` | `conn_mod_def::GLdz03UIPco::g4nVP2ytTXyPVdTrMlWIow` |

### Space

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive Space | POST | `/api/v1/graphql` | `conn_mod_def::GLdzz5bsBUU::v74h34eTRd6BqiqqX-IKGQ` |

### AuthProvider

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Auth Provider | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0EXJ_ZY::8ZySNFohTaWD_NRfkIasqw` |

### AssetFolder

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Asset Folder | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0FakbtM::oMb4zpg4SqOvj0wgH4vWEQ` |

### SpaceLocaleGroup

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Space Locale Group | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0NMRGHY::UJM5Iw-iQg-a3kSS3p7izQ` |

### SpaceLocale

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Space Locale | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0PwtuhA::xfSe5CxKS7mfERWcL5LsPg` |

### EmbedToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Embed Token | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0YCmEa4::7QFlR_BxT6Cyr0Xyz0Tbww` |

### CustomTargetingAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Custom Targeting Attributes | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0ZDBu78::2RUuL30VRaW9PvpizufU4A` |

### SpaceBreakpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Space Breakpoints | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0ZplU7k::McmMmVsrQ-GFcu_aUlHTsQ` |

### Plugins

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Plugins | POST | `/api/v1/graphql` | `conn_mod_def::GLdz0lzaAw8::EeB7xaueTGKJYaf_SIwxYA` |

### SpaceEditorSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Space Editor Settings | POST | `/api/v1/graphql` | `conn_mod_def::GLdz03LmBU8::LE2o580DT96lRFvRw3IUcw` |

### DownloadClone

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Clone Query | POST | `/` | `conn_mod_def::GLdz1HOYxLs::HK3TWligSS-hBN1j0wYNzQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Users for a Space | POST | `/users` | `conn_mod_def::GLdz1O8aaBI::3H6j7kAwR1eDzPRnk2ah-A` |

### Settings

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Settings | POST | `/settings` | `conn_mod_def::GLdz1P4MoN8::6BKzRkoqSz2oOT0aqwcxkg` |

### IdQuery

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Id Query | POST | `/{{id}}` | `conn_mod_def::GLdz1P_OG8g::oi3zdEcuRGqfgSd70-8jEA` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload File | POST | `/api/v1/upload` | `conn_mod_def::GLdz1nhC_h8::sTAL7GOVT1aat7ullC9C-Q` |

### TestConnection

| Action | Method | Path | Action id |
|---|---|---|---|
| Test Connection | POST | `/builder-io-admin/test-connection` | `conn_mod_def::GLehx7GoBsA::kM3wfCaIRSG6dGjQmlzPSQ` |

## When a call fails

The error comes from Builder.io Admin, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/builder-io-admin

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
