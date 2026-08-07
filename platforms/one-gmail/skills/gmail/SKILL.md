---
name: gmail
description: A widely-used email platform that provides smart inbox management, integration with productivity tools, and robust security features for personal and professional communication. Read and write Gmail data through One: messages, drafts, labels, csekeypairs, threads, cseidentities and more, 79 actions with real parameter documentation. Use whenever the user asks to look something up in Gmail, create or update a record there, or build code against the Gmail API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gmail
  generated-from: one-knowledge-base
---

# Gmail through One

A widely-used email platform that provides smart inbox management, integration with productivity tools, and robust security features for personal and professional communication.

One exposes Gmail through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gmail` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Gmail is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Gmail account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Gmail Message | GET | `/gmail/v1/users/{{userId}}/messages/{{id}}` | `conn_mod_def::GJ3ocvMGOS8::D__3BgQSSzWtDUoOqLuX2A` |
| List a User’s Gmail Messages | GET | `/gmail/v1/users/{{userId}}/messages` | `conn_mod_def::GJ3odOE-fdw::ijLww5s-SCSplLQtLpxkrw` |
| Batch Delete a User’s Gmail Messages | POST | `/gmail/v1/users/{{userId}}/messages/batchDelete` | `conn_mod_def::GJ3ocPuzcSs::5GZpXAxhQjyxPCQpvtibjA` |
| Batch Modify a User’s Gmail Messages (Labels) | POST | `/gmail/v1/users/{{userId}}/messages/batchModify` | `conn_mod_def::GJ3ocX2edTU::mhLdczGoT2O9KVIUEjp8xw` |
| Import a User’s Message | POST | `/gmail/v1/users/{{userId}}/messages/import` | `conn_mod_def::GJ3oc4oyLDQ::fu4AK9A8SFmN0P05jGmDpw` |
| Insert a Message Into a User’s Mailbox | POST | `/gmail/v1/users/{{userId}}/messages` | `conn_mod_def::GJ3odB0xmWo::q4zXVfyJSuiqzRIFjn0rQg` |
| Modify a User's Message Labels | POST | `/gmail/v1/users/{{userId}}/messages/{{id}}/modify` | `conn_mod_def::GJ3odV3ej0w::B1LcFIIiSlm2ZyqYT6qP5w` |
| Permanently Delete a User's Gmail Message | DELETE | `/gmail/v1/users/{{userId}}/messages/{{id}}` | `conn_mod_def::GJ3ocgKltKQ::s8UCfiDLSaO9w9oPU32TYA` |
| Send a User’s Gmail Message | POST | `/gmail/v1/users/{{userId}}/messages/send` | `conn_mod_def::GJ3odhCpd3I::gujvYoneSk6NFWltse9bGg` |
| Trash a User’s Gmail Message | POST | `/gmail/v1/users/{{userId}}/messages/{{id}}/trash` | `conn_mod_def::GJ3odorcmQ4::cewPnC6rSn-LSEg_wZ0a7g` |
| Untrash a User's Message | POST | `/gmail/v1/users/{{userId}}/messages/{{id}}/untrash` | `conn_mod_def::GJ3od0pi0O0::a_NjcFpISHys6NY0dybTWg` |

### Drafts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Draft | GET | `/gmail/v1/users/{{userId}}/drafts/{{id}}` | `conn_mod_def::GJ3oadCawlA::wsmeD4FhT4qWwCaA-xUuog` |
| List a User’s Drafts | GET | `/gmail/v1/users/{{userId}}/drafts` | `conn_mod_def::GJ3oamEcU-s::uNEB0VuLRKyJNVX530aUHA` |
| Create a User’s Draft | POST | `/gmail/v1/users/{{userId}}/drafts` | `conn_mod_def::GJ3oaMOtsBE::KznPt5lMTxmqAv5VYAqxwQ` |
| Delete a User's Draft | DELETE | `/gmail/v1/users/{{userId}}/drafts/{{id}}` | `conn_mod_def::GJ3oaUdVmW4::w5IE55OoRc2lm6sylOqk5Q` |
| Send a User’s Draft Email | POST | `/gmail/v1/users/{{userId}}/drafts/send` | `conn_mod_def::GJ3oatTRIQc::fj4wiYxZRuG68hX235-sUg` |
| Update a User's Draft | PUT | `/gmail/v1/users/{{userId}}/drafts/{{id}}` | `conn_mod_def::GJ3oa1OxwjE::08EvDsLsTSSJ6QhfdP_gdA` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Gmail Label | GET | `/gmail/v1/users/{{userId}}/labels/{{id}}` | `conn_mod_def::GJ3obmSdmRY::4y99rYJESFywDtZpMhSgiQ` |
| List a User’s Gmail Labels | GET | `/gmail/v1/users/{{userId}}/labels` | `conn_mod_def::GJ3obtut_gA::L4R17Zu8QL-awsrk5_4b8w` |
| Create a User’s Gmail Label | POST | `/gmail/v1/users/{{userId}}/labels` | `conn_mod_def::GJ3obSDbZXA::SU-y_lLPQwWPvwvrPRPbEg` |
| Delete a User’s Gmail Label | DELETE | `/gmail/v1/users/{{userId}}/labels/{{id}}` | `conn_mod_def::GJ3obewI1xs::RsgLyhF9Tr6nNRDbhTHO1Q` |
| Patch a User’s Gmail Label | PATCH | `/gmail/v1/users/{{userId}}/labels/{{id}}` | `conn_mod_def::GJ3ob3LIbV8::UeHWashoQ-WbJXsqUGdW_w` |
| Update a User's Label | PUT | `/gmail/v1/users/{{userId}}/labels/{{id}}` | `conn_mod_def::GJ3ob-vagxk::uFtyeudiSh6S74SE_nVXfg` |

### CseKeyPairs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Client-Side Encryption (CSE) Key Pair | GET | `/gmail/v1/users/{{userId}}/settings/cse/keypairs/{{keyPairId}}` | `conn_mod_def::GJ3ofHYasN8::7osTIYHhTeWi7hGYI18iwA` |
| List a User’s Client-Side Encryption (CSE) Key Pairs | GET | `/gmail/v1/users/{{userId}}/settings/cse/keypairs` | `conn_mod_def::GJ3ofQaC9L0::CHmIlWpsQc2YnTr_wTObjA` |
| Create a User's Gmail CSE S/MIME Key Pair | POST | `/gmail/v1/users/{{userId}}/settings/cse/keypairs` | `conn_mod_def::GJ3oerviucM::KVdptt-RTJ-jb_7iEn7APg` |
| Disable a User’s Client-Side Encryption (CSE) Key Pair | POST | `/gmail/v1/users/{{userId}}/settings/cse/keypairs/{{keyPairId}}:disable` | `conn_mod_def::GJ3oe0_7f20::BdNaN-T1TFi71CJh7v0_ug` |
| Enable a User’s Client-Side Encryption (CSE) Key Pair | POST | `/gmail/v1/users/{{userId}}/settings/cse/keypairs/{{keyPairId}}:enable` | `conn_mod_def::GJ3oe-7K8DA::01A7k_2TQt2rI8AFy9r_MA` |
| Obliterate a User's CSE Key Pair | POST | `/gmail/v1/users/{{userId}}/settings/cse/keypairs/{{keyPairId}}:obliterate` | `conn_mod_def::GJ3ofcXSMlg::1EHj50AiSFawddh_ltsriw` |

### Threads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Thread | GET | `/gmail/v1/users/{{userId}}/threads/{{id}}` | `conn_mod_def::GJ3ok0Eq0R8::AAzgZVLqTg2iBuITKpJLZg` |
| List a User’s Gmail Threads | GET | `/gmail/v1/users/{{userId}}/threads` | `conn_mod_def::GJ3ok-Q0D40::oLWNlcx4QDORaL_18z-MsQ` |
| Modify a User’s Thread Labels | POST | `/gmail/v1/users/{{userId}}/threads/{{id}}/modify` | `conn_mod_def::GJ3olIfJ9E0::xBAV1bF_RXG94_j4bmye2A` |
| Permanently Delete a User’s Thread | DELETE | `/gmail/v1/users/{{userId}}/threads/{{id}}` | `conn_mod_def::GJ3okqXKyjA::eoDTQJA4S1OoPi2-CcYTlA` |
| Trash a User’s Gmail Thread | POST | `/gmail/v1/users/{{userId}}/threads/{{id}}/trash` | `conn_mod_def::GJ3olQIYeTM::xi2rqKkgRgifobrxAHsFMg` |
| Untrash a User's Thread | POST | `/gmail/v1/users/{{userId}}/threads/{{id}}/untrash` | `conn_mod_def::GJ3olaXO26o::HwvTM21OQaSagPHwUCCsqQ` |

### CseIdentities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Client-Side Encryption (CSE) Identity Configuration | GET | `/gmail/v1/users/{{userId}}/settings/cse/identities/{{cseEmailAddress}}` | `conn_mod_def::GJ3oeQvJJoI::1_OrPIqNQayDJcfZn6LdaQ` |
| List a User’s Client-Side Encrypted (CSE) Identities | GET | `/gmail/v1/users/{{userId}}/settings/cse/identities` | `conn_mod_def::GJ3oeZiDcp0::1AxvgjrHTU6q4quVGIaC-g` |
| Create a User’s Client-Side Encryption (CSE) Identity | POST | `/gmail/v1/users/{{userId}}/settings/cse/identities` | `conn_mod_def::GJ3od9N2jlM::xDGjXksWRjeSmRljh3rkhw` |
| Delete a User’s Client-Side Encryption (CSE) Identity | DELETE | `/gmail/v1/users/{{userId}}/settings/cse/identities/{{cseEmailAddress}}` | `conn_mod_def::GJ3oeIhKnXg::GecAb3u8T5SoCrBl4Nvu0g` |
| Update a User’s Client-Side Encryption (CSE) Identity Key Pair | PATCH | `/gmail/v1/users/{{userId}}/settings/cse/identities/{{emailAddress}}` | `conn_mod_def::GJ3oeia0EqE::a7Hkc1VaQIy7RIcLxJ9P9w` |

### SendAs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Send-As Alias Settings | GET | `/gmail/v1/users/{{userId}}/settings/sendAs/{{sendAsEmail}}` | `conn_mod_def::GJ3oiaNCd0U::LOS5TNXYS5mNacZH4Fq_yg` |
| List a User’s “Send As” Aliases | GET | `/gmail/v1/users/{{userId}}/settings/sendAs` | `conn_mod_def::GJ3oiit3L1A::Ptbj-qDlQJar1tusI8ZHRg` |
| Create a User’s “Send Mail As” Alias | POST | `/gmail/v1/users/{{userId}}/settings/sendAs` | `conn_mod_def::GJ3oiCsXjS0::hrfCWAZyT6-FaG-dDBao2Q` |
| Patch a User’s Send-As Alias Settings | PATCH | `/gmail/v1/users/{{userId}}/settings/sendAs/{{sendAsEmail}}` | `conn_mod_def::GJ3oitRsXAo::48HZcXxzR2WnI8hJnSq77A` |
| Update a User’s “Send As” Alias Settings | PUT | `/gmail/v1/users/{{userId}}/settings/sendAs/{{sendAsEmail}}` | `conn_mod_def::GJ3ojlUvn_s::vX5m0PqmRKWvJm_pe9t27Q` |

### SmimeInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an S/MIME Configuration for a Send-As Alias | GET | `/gmail/v1/users/{{userId}}/settings/sendAs/{{sendAsEmail}}/smimeInfo/{{id}}` | `conn_mod_def::GJ3oi9u5i5k::L7YgXn92R0uyPouAQBwIHA` |
| List S/MIME Configs for a User’s Send-As Alias | GET | `/gmail/v1/users/{{userId}}/settings/sendAs/{{sendAsEmail}}/smimeInfo` | `conn_mod_def::GJ3ojUyFvJ4::P1P6l2qKRN62sG3mEbq1gg` |
| Delete an S/MIME Configuration for a Send-As Alias | DELETE | `/gmail/v1/users/{{userId}}/settings/sendAs/{{sendAsEmail}}/smimeInfo/{{id}}` | `conn_mod_def::GJ3oi1e9hys::sST2FXqIRIS8ADHgh5kwmw` |
| Insert S/MIME Info for a User's Send-As Alias | POST | `/gmail/v1/users/{{userId}}/settings/sendAs/{{sendAsEmail}}/smimeInfo` | `conn_mod_def::GJ3ojMPMrMY::laatzGbXTcqVN81mSQ8Izg` |
| Set Default S/MIME Configuration for a User’s Send-As Alias | POST | `/gmail/v1/users/{{userId}}/settings/sendAs/{{sendAsEmail}}/smimeInfo/{{id}}/setDefault` | `conn_mod_def::GJ3ojdYceEY::RRo8BIILTnOqO6OYsJNoRA` |

### Delegates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Gmail Delegate | GET | `/gmail/v1/users/{{userId}}/settings/delegates/{{delegateEmail}}` | `conn_mod_def::GJ3ogB2njmc::Ab-dCaIvQzenmWWM8psdEQ` |
| List a User’s Gmail Delegates | GET | `/gmail/v1/users/{{userId}}/settings/delegates` | `conn_mod_def::GJ3ogKgPK1A::9vQonY8WSkyqwFLr_tstUg` |
| Create a User’s Gmail Delegate | POST | `/gmail/v1/users/{{userId}}/settings/delegates` | `conn_mod_def::GJ3oflPdD6c::M8aAcSDwQluS8uSz43kQCQ` |
| Remove a User’s Gmail Delegate | DELETE | `/gmail/v1/users/{{userId}}/settings/delegates/{{delegateEmail}}` | `conn_mod_def::GJ3of06Vmkk::3vcKk27fSe-DKff3DmyUgg` |

### ForwardingAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Forwarding Address Setting | GET | `/gmail/v1/users/{{userId}}/settings/forwardingAddresses/{{forwardingEmail}}` | `conn_mod_def::GJ3ohEX__UI::ifonmvsaTKW8wvhZyaBg_w` |
| List a User’s Forwarding Addresses (Gmail Settings) | GET | `/gmail/v1/users/{{userId}}/settings/forwardingAddresses` | `conn_mod_def::GJ3ohL2huEs::a8tvxudtR42CH8qNZcKddA` |
| Create a User's Forwarding Address | POST | `/gmail/v1/users/{{userId}}/settings/forwardingAddresses` | `conn_mod_def::GJ3og0U4eeQ::MzHaN0eDRJKGoyaTERnXfQ` |
| Delete a User's Forwarding Address | DELETE | `/gmail/v1/users/{{userId}}/settings/forwardingAddresses/{{forwardingEmail}}` | `conn_mod_def::GJ3og7ys438::85j7r42gSOuXz1cjCcXEyw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Gmail Profile | GET | `/gmail/v1/users/{{userId}}/profile` | `conn_mod_def::GJ3oa8bJZNA::ZS9kXmE_Rzi4utfESor_ng` |
| Set Up a User Mailbox Push Notification Watch | POST | `/gmail/v1/users/{{userId}}/watch` | `conn_mod_def::GJ3olj0BlWE::X_zNS67STLWZW4OkJfwKCg` |
| Stop Push Notifications for a Gmail User | POST | `/gmail/v1/users/{{userId}}/stop` | `conn_mod_def::GJ3okhh9hD4::ENMOzzgLTiCf369rkAORvg` |

### ImapSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s IMAP Settings | GET | `/gmail/v1/users/{{userId}}/settings/imap` | `conn_mod_def::GJ3ohbK277A::bBmhFj-NQEic9g7OWHJYRQ` |
| Update a User’s IMAP Settings | PUT | `/gmail/v1/users/{{userId}}/settings/imap` | `conn_mod_def::GJ3okArB8ZU::U28IjXIMT9SJoVNgg9fPiQ` |

### AutoForwarding

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Gmail Auto-Forwarding Settings | GET | `/gmail/v1/users/{{userId}}/settings/autoForwarding` | `conn_mod_def::GJ3ohTcnvyQ::NhBf14T5T8i0R9LZVLDRRA` |
| Update a User’s Auto-Forwarding Settings | PUT | `/gmail/v1/users/{{userId}}/settings/autoForwarding` | `conn_mod_def::GJ3oj3mc-YU::x-nOYO-fSpajvusK4LmQXg` |

### SendAsAliases

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a User's Send-As Alias | DELETE | `/gmail/v1/users/{{userId}}/settings/sendAs/{{sendAsEmail}}` | `conn_mod_def::GJ3oiM-Ngm0::GypKLWQEQXGGGfmPaBnAYA` |
| Send a Verification Email for a User’s Send-as Alias | POST | `/gmail/v1/users/{{userId}}/settings/sendAs/{{sendAsEmail}}/verify` | `conn_mod_def::GJ3ojvJP0VQ::HEVQ9Gm1QI2TntLejFuWfA` |

### History

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Gmail History | GET | `/gmail/v1/users/{{userId}}/history` | `conn_mod_def::GJ3obKaXB1U::JWUEs9nESz2__4shMOpyIg` |

### GmailMessageAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Gmail Message Attachment (for a User’s Message) | GET | `/gmail/v1/users/{{userId}}/messages/{{messageId}}/attachments/{{id}}` | `conn_mod_def::GJ3ocG2ED_w::LGrrJyM-QFmKBaHwvMWwzQ` |

### GmailMessageFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Gmail Message Filters | GET | `/gmail/v1/users/{{userId}}/settings/filters` | `conn_mod_def::GJ3ogsegCio::JfABQ0ohS6WriZn8TvHqYQ` |

### UsersSettingsLanguage

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a User’s Gmail Language Settings | PUT | `/gmail/v1/users/{{userId}}/settings/language` | `conn_mod_def::GJ3okJkhtMk::Ja-0OXehRWSJjNmi5e1bng` |

### PopSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a User’s POP Settings | PUT | `/gmail/v1/users/{{userId}}/settings/pop` | `conn_mod_def::GJ3okR9saBk::0YDv-QBTSDalsZW2EPE96A` |

### GmailVacationResponderSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Gmail Vacation Responder Settings | GET | `/gmail/v1/users/{{userId}}/settings/vacation` | `conn_mod_def::GJ3oh6a8ETE::LXxWPVTATr-8VX96a2WEAA` |

### Filters

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a User Gmail Filter | POST | `/gmail/v1/users/{{userId}}/settings/filters` | `conn_mod_def::GJ3ogSsF48E::1HDxsOsIStOvuFtv9KZA1Q` |

### GmailSettingsFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a User's Gmail Settings Filter | DELETE | `/gmail/v1/users/{{userId}}/settings/filters/{{id}}` | `conn_mod_def::GJ3ogaaX2g0::SkT9l6duSgmphv_HnhSClg` |

### SettingsFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Gmail Settings Filter | GET | `/gmail/v1/users/{{userId}}/settings/filters/{{id}}` | `conn_mod_def::GJ3ogjnFPn8::sePhmnthTduIKf3KvqpakA` |

### GmailSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Gmail Language Settings | GET | `/gmail/v1/users/{{userId}}/settings/language` | `conn_mod_def::GJ3ohiovxJo::1-6mh7DORumX3FWS9yIkbw` |

### UsersSettingsPop

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s POP Settings | GET | `/gmail/v1/users/{{userId}}/settings/pop` | `conn_mod_def::GJ3ohyeTk0A::RUlOCBFMRWKYyrrObVzxvQ` |

### VacationSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a User's Vacation Responder Settings | PUT | `/gmail/v1/users/{{userId}}/settings/vacation` | `conn_mod_def::GJ3okZ0TB50::FyqfRPPmRlK7a27cOg0nIw` |

## When a call fails

The error comes from Gmail, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gmail

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
