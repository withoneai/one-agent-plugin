---
name: truvera
description: Truvera is an AI observability and evaluation platform that provides tools for testing, monitoring, and improving large language model applications, allowing developers and ML teams to assess quality, trace behavior, and manage model performance in production. Read and write Truvera data through One: trustregistries, trustregistryparticipants, credentials, proofrequests, messaging, dids and more, 154 actions with real parameter documentation. Use whenever the user asks to look something up in Truvera, create or update a record there, or build code against the Truvera API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: truvera
  generated-from: one-knowledge-base
---

# Truvera through One

Truvera is an AI observability and evaluation platform that provides tools for testing, monitoring, and improving large language model applications, allowing developers and ML teams to assess quality, trace behavior, and manage model performance in production.

One exposes Truvera through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `truvera` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Truvera is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Truvera account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### TrustRegistries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Public Information About a Trust Registry | GET | `/trust-registries/{{registryId}}/public` | `conn_mod_def::GLOsdZZiUlg::Zx8JPww_QlCmGYZumKhJVw` |
| Get Trust Registry | GET | `/trust-registries/{{registryId}}` | `conn_mod_def::GLOsdY2jRwg::vHWyh9vkTDiTMEMj_zKKFg` |
| List Trust Registries | GET | `/trust-registries` | `conn_mod_def::GLOsdraNRaA::lZU1OJ7mRt-A2f_nGW815w` |
| Assign a Proof Template to a Trust Registry | POST | `/trust-registries/{{registryId}}/proof-templates` | `conn_mod_def::GLOsdQqDVIA::iVTK2lUGQnG-YFUjdA7IWA` |
| Create Trust Registry | POST | `/trust-registries` | `conn_mod_def::GLOsdRZrIsg::V5gflYKxTWWiFiSB5CLXrw` |
| Delete Trust Registry | DELETE | `/trust-registries/{{registryId}}` | `conn_mod_def::GLOsdY26B0A::eE4mU24ZTeWCBVOnV8utsQ` |
| Query Trust Registries | POST | `/trust-registries/query` | `conn_mod_def::GLOsdzhIRUA::3E8asJ1IRFCmDPidgZh1RQ` |
| Update a Trust Registry | PATCH | `/trust-registries/{{registryId}}` | `conn_mod_def::GLOseCdJivA::3wGlZmsESDyrnKiQaknbog` |

### TrustRegistryParticipants

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Trust Registry Participant | GET | `/trust-registries/{{registryId}}/participants/{{participantId}}` | `conn_mod_def::GLOsdjoj_5A::H0WcaD0HRnOOk2tmY1OALA` |
| Get Trust Registry Participants | GET | `/trust-registries/{{registryId}}/participants` | `conn_mod_def::GLOsdhrlhjA::HH3DNpzPS_C8DnInsH0uqA` |
| Accept an Ecosystem Invitation | POST | `/trust-registries/invitations/accept` | `conn_mod_def::GLOsdP8uQLg::yG3QpPzxSQi1S_SUAhWhoQ` |
| Invite a Trust Registry Participant | POST | `/trust-registries/{{registryId}}/participants` | `conn_mod_def::GLOsdrQtg7A::8KtgP4lQRMiAkj7kUcQ_6A` |
| Remove a Trust Registry Participant | DELETE | `/trust-registries/{{registryId}}/participants/{{participantId}}` | `conn_mod_def::GLOsd1UyGHA::DRILsLF3SkuTidpGY_Y1yA` |
| Update a Trust Registry Participant | PATCH | `/trust-registries/{{registryId}}/participants/{{participantId}}` | `conn_mod_def::GLOseGyKfFA::yxo6_wFZQuyrWw6PNoK4lA` |
| Update a Trust Registry Participant's Info | PATCH | `/trust-registries/{{registryId}}/participants/{{participantId}}/info` | `conn_mod_def::GLOseDf-mLg::XZyqj029Ql25B9vEggfriw` |

### Credentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credential Metadata and Contents | GET | `/credentials/{{id}}` | `conn_mod_def::GLOsX5fvxnA::ckiuSHWGTFeZa-wUCBLi5A` |
| List Credentials | GET | `/credentials` | `conn_mod_def::GLOsX3uHQNA::pjldfnGfTsOlOuBwGhLZhw` |
| Delete a Credential | DELETE | `/credentials/{{id}}` | `conn_mod_def::GLOsX3h1FwA::UEb-MadGSUeihk1lIOYkyA` |
| Issue a Credential | POST | `/credentials` | `conn_mod_def::GLOsX5hj7NA::vFZ2NspfRDOnaJkDMZOyQw` |
| Request Claims Using Credentials | POST | `/credentials/request-claims` | `conn_mod_def::GLOsYbQ6QkA::d3EYTQ25Rz274wYWfEhoHg` |
| Revoke a Credential | POST | `/credentials/{{id}}/revoke` | `conn_mod_def::GLOsYhc0-TA::M5yTD85FQpW7QlirWI1cvA` |
| Unrevoke a Credential | POST | `/credentials/{{id}}/unrevoke` | `conn_mod_def::GLOsYigZRLg::uSJd6TklSzWZN1sbWkz_uA` |

### ProofRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Proof Request | GET | `/proof-requests/{{id}}` | `conn_mod_def::GLOsbOIHQtA::EAWkBNEtS9ebhRBGYctzhg` |
| Get a Proof Request PEX Definition | GET | `/proof-requests/{{id}}/pex` | `conn_mod_def::GLOsbW2YvOg::18qWUmHfS6WzVpig4oPYtA` |
| List Proof Requests | GET | `/proof-requests` | `conn_mod_def::GLOsbV_U26A::Ek5tI9HiS7KNeh2jLOHtDg` |
| Create Proof Requests | POST | `/proof-requests` | `conn_mod_def::GLOsbFUdvoA::SNArwyuMT1mt_prS0wDZpw` |
| Delete Proof Request | DELETE | `/proof-requests/{{id}}` | `conn_mod_def::GLOsbNi8APg::TH22t9urRHKF7qK_AD6P8g` |
| Request a Proof From a Proof Template | POST | `/proof-templates/{{id}}/request` | `conn_mod_def::GLOsbOH9LMg::nUYw0X2rREa5zwz9WPQeGg` |
| Send Presentation Using Proof Requests | POST | `/proof-requests/{{id}}/send-presentation` | `conn_mod_def::GLOsbf_fNcg::_p7SfTegRmGIf0pLoszlWw` |

### Messaging

| Action | Method | Path | Action id |
|---|---|---|---|
| Decrypt a Messaging Request | POST | `/messaging/decrypt` | `conn_mod_def::GLOsaEUYDBA::MinauJ-UQEufI5PvtwCXLA` |
| Encrypt a Message | POST | `/messaging/encrypt` | `conn_mod_def::GLOsaYgb5Vg::UVc4FnfzTZyfSNjyPyBwFQ` |
| Receive DIDComm Messages for a DID | POST | `/messaging/{{did}}/receive` | `conn_mod_def::GLOsahD2p8g::9ZBTRut-SpS3nLpkG1cNNg` |
| Send Messaging | POST | `/messaging/send` | `conn_mod_def::GLOsaEsEnkA::F-IT4UKLTvWAAw3XPmA4eQ` |
| Sign a Messaging Message | POST | `/messaging/sign` | `conn_mod_def::GLOsafOL5Mg::4NfqNo_ERXaQl-AbRoq2hA` |
| Verify Messaging JWS | POST | `/messaging/verify` | `conn_mod_def::GLOsaf9fBhg::ZHOWLgzsSJmz1WXjlhb-5Q` |

### Dids

| Action | Method | Path | Action id |
|---|---|---|---|
| Get DID | GET | `/dids/{{did}}` | `conn_mod_def::GLOsZnBWEEA::rWK2ZUeYSSCyL5o1YXQ1aw` |
| List DIDs | GET | `/dids` | `conn_mod_def::GLOsZ0LyiXA::v6OLxkC1RBW3qLuodQmBqQ` |
| Create DID | POST | `/dids` | `conn_mod_def::GLOsZnVb1IA::fX4EGFo5Qkm4LYz7JHt8Rw` |
| Delete DID | DELETE | `/dids/{{did}}` | `conn_mod_def::GLOsZnwN5Ug::cwv9vZF5RU6CdyO_x0ot2g` |
| Export DID Document and Keys | POST | `/dids/{{did}}/export` | `conn_mod_def::GLOsZrhbOlA::odSuNeY7Tue5xbAnB4t89Q` |
| Import DIDs | POST | `/dids/import` | `conn_mod_def::GLOsZychv5A::PJ1mJxH7T32Ipg9ebxXmvg` |

### ProofTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Proof Template | GET | `/proof-templates/{{id}}` | `conn_mod_def::GLOsbWcW67A::HwHuBdJgTn6o-QW9swuH4w` |
| Get Proof Templates for a Trust Registry | GET | `/trust-registries/{{registryId}}/proof-templates` | `conn_mod_def::GLOsdi2AdrA::qdePYqLvSPC_DVGOL0dw1w` |
| List Proof Templates | GET | `/proof-templates` | `conn_mod_def::GLOsbWUNe2g::fXmIhW50TeyXbLK9OzS7kw` |
| Create a Proof Template | POST | `/proof-templates` | `conn_mod_def::GLOsbFTNslA::uqi1yxA5Qtq4-gh0UJDYUg` |
| Delete Proof Templates | DELETE | `/proof-templates/{{id}}` | `conn_mod_def::GLOsbNbkmUg::qSYfYkR6R3qKt1QySNOtIg` |
| Update a Proof Template | PATCH | `/proof-templates/{{id}}` | `conn_mod_def::GLOsbgIY3dA::jo8BLQJqQl-a-jxZ_jLEEw` |

### OpenIdIssuers

| Action | Method | Path | Action id |
|---|---|---|---|
| Authorize with an OpenID Issuer | GET | `/openid/issuers/{{id}}/authorize` | `conn_mod_def::GLOsazVGTiA::qTFVMhFDT5uCicIN94kUFw` |
| Get an OpenID Issuer | GET | `/openid/issuers/{{id}}` | `conn_mod_def::GLOsao-nRcg::UrM6_KgHTT-aoVxOkcGOBA` |
| List OpenID Issuers | GET | `/openid/issuers` | `conn_mod_def::GLOsapRGLgA::j4PTmhLlRZuk21sEWfD7-A` |
| Create an OpenID Issuer | POST | `/openid/issuers` | `conn_mod_def::GLOsagLHgZA::k_XSU_KOSAuoKdNaOzQdKQ` |
| Delete OpenID Issuer | DELETE | `/openid/issuers/{{id}}` | `conn_mod_def::GLOsagotaWg::FXqjqWWXSO-oML7T2fUxFQ` |

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Profile by DID | GET | `/profiles/{{did}}` | `conn_mod_def::GLOsbf7Jk5A::OTz6eL1GTmi2xOziNM2o1A` |
| List All Profiles | GET | `/profiles` | `conn_mod_def::GLOsbngvNpA::piX-He_TRMSUc4hiZ6R7kA` |
| Create a Profile | POST | `/profiles` | `conn_mod_def::GLOsbgctW5g::IJvc7bt4Tj2nr4z5gGqqLA` |
| Delete a Profile | DELETE | `/profiles/{{did}}` | `conn_mod_def::GLOsbf62WbA::rNjd57csQN2n8jzhBy7beQ` |
| Update a Profile | PATCH | `/profiles/{{did}}` | `conn_mod_def::GLOsbnt4BKg::9GZCt9A3R8aWKE6Ch8FP6w` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/webhooks/{{id}}` | `conn_mod_def::GLOseOS4O5A::fNKth3gWTP6J4bC3GLn1RA` |
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GLOsePBmFeg::lbsDLJGNQf2N9HU7aJxLkg` |
| Create Webhook | POST | `/webhooks` | `conn_mod_def::GLOseBdrurg::LT5sEy2PT9KWLuck4sgJvA` |
| Delete a Webhook | DELETE | `/webhooks/{{id}}` | `conn_mod_def::GLOseOdh18A::zOsGA0oiTgK0EHlCKxvMmg` |
| Update a Webhook | PATCH | `/webhooks/{{id}}` | `conn_mod_def::GLOseOoZ06A::IUKiwDuMS4mc5agCBp_GWw` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template by ID | GET | `/templates/{{id}}` | `conn_mod_def::GLOsdF06Srg::uPMnr9nrQ9KpWQ6iMhUZ9g` |
| List Templates | GET | `/templates` | `conn_mod_def::GLOsdQDswWg::urDHmsRZQqaW8zvNcS2c1g` |
| Create a Template | POST | `/templates` | `conn_mod_def::GLOsdHm0aEA::U-ezmy6uQgip6IVbJNo6yQ` |
| Delete Template | DELETE | `/templates/{{id}}` | `conn_mod_def::GLOsdF3ZuyA::eUEwe_wyR9W1XA7vd4uNWg` |
| Update a Template | PATCH | `/templates/{{id}}` | `conn_mod_def::GLOsdQ6RCNg::HvkEykg6Rxa_XQvBZWNSsw` |

### Registries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Registry | GET | `/registries/{{id}}` | `conn_mod_def::GLOsbnf6U4A::Cgk_dIMjSHe0HzMbQPSvsg` |
| List Registries | GET | `/registries` | `conn_mod_def::GLOscFR-2gA::ks6a6PgkTzaRaPMbn63Bbg` |
| Create Registry | POST | `/registries` | `conn_mod_def::GLOsbnKQaog::h4ELPS1xTOOK1iLFWXeyaw` |
| Delete Registry | DELETE | `/registries/{{id}}` | `conn_mod_def::GLOsbn93q1g::MEujtCWESD2K4N96_t6o0w` |
| Revoke or Unrevoke a Credential Registry | POST | `/registries/{{id}}` | `conn_mod_def::GLOsbvjQABg::gItSsDDqT9my8jkzhj4eqA` |

### Keys

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Keys | GET | `/keys` | `conn_mod_def::GLOsZ820LIA::rBDJfKGmQmiRq1VuWrsXLQ` |
| Create a Key | POST | `/keys` | `conn_mod_def::GLOsZ8vD9UA::iNcAo7geTUi3NbVB7t3TyA` |
| Delete a Key | DELETE | `/keys/{{publicKey}}` | `conn_mod_def::GLOsZ9S193A::1rJC-10YSsm7Coc3YpgT1g` |
| Update a Key | PATCH | `/keys/{{publicKey}}` | `conn_mod_def::GLOsZ8hSdTA::W25MPcwrRqur_udFUy5uZg` |

### Subaccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subaccount by ID | GET | `/subaccounts/{{id}}` | `conn_mod_def::GLOscmGPyGA::RE1THr4fQXe3yQkxQU-ong` |
| List Subaccounts | GET | `/subaccounts` | `conn_mod_def::GLOscrb8JSg::FVeIwsZ6TKKkY16LKZx-0A` |
| Create a Sub-account | POST | `/subaccounts` | `conn_mod_def::GLOscPNufSg::xLEAyDSrQDe0Si8AMGbWzQ` |
| Delete a Subaccount | DELETE | `/subaccounts/{{id}}` | `conn_mod_def::GLOsckkS9_g::G2gGW6Q1RY2KZSqRnuxu6A` |

### Schemas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Schema by ID | GET | `/schemas/{{schemaId}}` | `conn_mod_def::GLOscdP6b8g::BT2OU4lqQFmj1TJwgXIirg` |
| List Schemas | GET | `/schemas` | `conn_mod_def::GLOscOEuQ1A::4xPkzerETii4oWlChPAotw` |
| Create Credential Schema | POST | `/schemas` | `conn_mod_def::GLOsbwoDRmA::wT7hg3APQlGNpi3XrMCqhQ` |
| Delete Schema | DELETE | `/schemas/{{schemaId}}` | `conn_mod_def::GLOscMHf1-g::wPcLXFhnTnWltxlbSVoLFg` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Data | GET | `/teams/{{id}}` | `conn_mod_def::GLOsc7Pq9DA::j1FB2cIGSKitFnPSbJ-oLw` |
| Accept Member Invite | POST | `/teams/accept-member-invite` | `conn_mod_def::GLOsczZODDg::RKvX8zcNTECoMybOlbrE-Q` |
| Invite Emails to a Team | POST | `/teams/{{id}}/invite` | `conn_mod_def::GLOsc8lTVMA::LBoZKXDeS4GLGg_J5a9rxw` |
| Update a Team | PATCH | `/teams/{{id}}` | `conn_mod_def::GLOsdF2GsVA::WsRzijW-TMKj5qfImkGsiQ` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Team Members for a Team | GET | `/teams/{{id}}/members` | `conn_mod_def::GLOsc8slvxg::1T7jgc5oQGyW6YP3curvWQ` |
| Delete a Team Member | DELETE | `/teams/{{id}}/members/{{userId}}` | `conn_mod_def::GLOsc0IaR-g::52kQOXK8Rw6LEGppvzlbQQ` |

1 more TeamMembers actions are available through search.

This lists 90 of 154 actions. For anything not here, call `search_one_platform_actions` with platform `truvera`. The full catalog is at https://www.withone.ai/knowledge/truvera.

## When a call fails

The error comes from Truvera, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/truvera

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
