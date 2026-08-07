---
name: jump-cloud
description: JumpCloud is a cloud directory and identity management platform that provides single sign-on, device management, and access control APIs, allowing IT teams to manage users, endpoints, and authentication policies across applications, networks, and operating systems from a unified service. Read and write JumpCloud data through One: systemusers, applications, systems, commands, usergroups, applemdmdevices and more, 703 actions with real parameter documentation. Use whenever the user asks to look something up in JumpCloud, create or update a record there, or build code against the JumpCloud API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: jump-cloud
  generated-from: one-knowledge-base
---

# JumpCloud through One

JumpCloud is a cloud directory and identity management platform that provides single sign-on, device management, and access control APIs, allowing IT teams to manage users, endpoints, and authentication policies across applications, networks, and operating systems from a unified service.

One exposes JumpCloud through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `jump-cloud` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm JumpCloud is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real JumpCloud account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SystemUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a System User by ID | GET | `/systemusers/{{id}}` | `conn_mod_def::GLCUojZ99Jg::62rTB4yiTWyl6lIT6nnsLQ` |
| Get a System User's TOTP Enrollment Info | GET | `/systemusers/{{id}}/totpinfo` | `conn_mod_def::GLCUoWhHLxg::ZBu9D4cRTiG_trHx87-g2A` |
| List a System's Users | GET | `/systems/{{systemId}}/users` | `conn_mod_def::GLCUZYK2ZGg::wtnjkGSeRnGX0hEawgNMqQ` |
| List All System Users | GET | `/api/systemusers` | `conn_mod_def::GLCUol4HvGA::hRWBMrBKShW9t_iTKo5bVw` |
| Activate a System User | POST | `/systemusers/{{id}}/state/activate` | `conn_mod_def::GLCUoMG0KdA::NM9Z-AFsSX6cHPcd-oROrQ` |
| Create a System User | POST | `/api/systemusers` | `conn_mod_def::GLCUoNWOyig::8IvcJ-J1Qk-k5DCfmEkDSw` |
| Delete a System User | DELETE | `/systemusers/{{id}}` | `conn_mod_def::GLCUoWhauwA::PYYllWf1TYqgzMFOnfkF6w` |
| Expire a System User's Password | POST | `/systemusers/{{id}}/expire` | `conn_mod_def::GLCUoWnGm1g::jQdlslVbQMusNOVCN4hiwQ` |
| Force Set a System User's Password | POST | `/systemusers/{{id}}/password` | `conn_mod_def::GLCUoiDPrYA::83DZljOwTEapUtCR9MP-8w` |
| Reactivate a System User | POST | `/systemusers/{{id}}/reactivate` | `conn_mod_def::GLCUohw3YLA::FrI_YAa1S_ebeuVLUvezBQ` |
| Reset a System User's MFA Token | POST | `/systemusers/{{id}}/resetmfa` | `conn_mod_def::GLCUouj_tZg::eHh7Xx1xRlmYw5lQ-lpnwA` |
| Search System Users | POST | `/api/search/systemusers` | `conn_mod_def::GLCUkvkLP9A::PBhCUUGyQ4m92RWY0Vav0A` |

5 more SystemUsers actions are available through search.

### Applications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Application (by ID) | GET | `/applications/{{applicationId}}` | `conn_mod_def::GLCUSuGXurA::MnAwpnArQFqK0frinFCOYQ` |
| Get an Application (by ID) | GET | `/applications/{{id}}` | `conn_mod_def::GLCUSvKYFdA::b50s84bLTjSWYqvU1TBnZQ` |
| Get an Application by ID | GET | `/saas-management/applications/{{applicationId}}` | `conn_mod_def::GLCUj5VV6wA::Vf8r30ZOQUOnzmgtT3I9mw` |
| List Applications | GET | `/api/applications` | `conn_mod_def::GLCUSbEhRSg::SfC0CQ_XRAS_CcCYK4ljDw` |
| List Applications | GET | `/api/v2/saas-management/applications` | `conn_mod_def::GLCUkEJF5-g::n2MFTMhcQiW40s79uC_ycA` |
| List Importable Users for an Application | GET | `/applications/{{applicationId}}/import/users` | `conn_mod_def::GLCUSmmOa5A::UF3a7Pc0T-2XeqeYuvBz1Q` |
| Create an Application | POST | `/api/applications` | `conn_mod_def::GLCUSYl3mVA::YGq8_fuOQUS79qKiyP3-TA` |
| Create Application | POST | `/api/v2/saas-management/applications` | `conn_mod_def::GLCUjuuU10g::q09jBnVJQSm_F5prcmLNGg` |
| Delete an Application | DELETE | `/saas-management/applications/{{applicationId}}` | `conn_mod_def::GLCUj4j-jiA::TJAOkdZ6TpCgjNskE6QjsA` |
| Delete an Application (by ID) | DELETE | `/applications/{{id}}` | `conn_mod_def::GLCUShxtMjg::-cpRFDp2ROCROGe8KKyeaA` |
| Delete an Application Image | DELETE | `/applications/{{applicationId}}/logo` | `conn_mod_def::GLCUSiUZeNg::UHpxPOv3Rqm_TDMdSCiI8w` |
| Manage an Application's Associations | POST | `/applications/{{applicationId}}/associations` | `conn_mod_def::GLCUa8bNs1g::FmkZqXooQzuvEx0mt-6A8A` |

3 more Applications actions are available through search.

### Systems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a System's FDE Key | GET | `/systems/{{systemId}}/fdekey` | `conn_mod_def::GLCUntoDwmg::oCIV7e13Q0uTOPgj8YE6Mg` |
| Get an Individual System | GET | `/systems/{{id}}` | `conn_mod_def::GLCUnvyUPVg::kPLWifkATxS0ct0IZCQHZg` |
| List All Systems | GET | `/systems` | `conn_mod_def::GLCUnvELSFA::LozbKYVPTGu6JyZPqn9Zaw` |
| Delete a System | DELETE | `/systems/{{id}}` | `conn_mod_def::GLCUnkimn-g::0pAZ20TyS6qAdwjsjmAxNg` |
| Erase a System | POST | `/systems/{{systemId}}/command/builtin/erase` | `conn_mod_def::GLCUnsGqxeA::zWsWTKuxRNi8KdPBkxRrFQ` |
| Lock a System | POST | `/systems/{{systemId}}/command/builtin/lock` | `conn_mod_def::GLCUn4cNOsA::r1Yqs-TXQhyeB__5FECbvQ` |
| Restart a System | POST | `/systems/{{systemId}}/command/builtin/restart` | `conn_mod_def::GLCUn4MB3BA::dfCW1bRMREubO-3I3oXQ5Q` |
| Search Systems | POST | `/search/systems` | `conn_mod_def::GLCUkum4jOA::UVMGbLb2RJKJVC_042hLYA` |
| Shutdown a System | POST | `/systems/{{systemId}}/command/builtin/shutdown` | `conn_mod_def::GLCUn4Lg7mA::hXB3seDTTliv48rf9323Zw` |
| Transfer a Device Between Organizations | POST | `/systems/{{systemObjectId}}/transfer` | `conn_mod_def::GLCUWh9pGdg::61K92lZsQr2sLvmeEjzsiA` |
| Update a System | PUT | `/systems/{{id}}` | `conn_mod_def::GLCUoEBXJMg::LC-XoTn7TQut5mHgbNrwyA` |

### Commands

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Individual Command | GET | `/commands/{{id}}` | `conn_mod_def::GLCUUjkJutA::1mntswMiQmi7P-slclJbrw` |
| Get Results for a Specific Command | GET | `/commands/{{id}}/results` | `conn_mod_def::GLCUUjtRZMg::tN1QpjHVS9WvlaZBfILTRQ` |
| List All Commands | GET | `/commands` | `conn_mod_def::GLCUUlleAWA::LOWWZdusQ8aSY1tbFjCbjw` |
| Create A Command | POST | `/api/commands` | `conn_mod_def::GLCUUSChQpg::trr1WwrDRE-HEuBrQ7AVlA` |
| Delete a Command | DELETE | `/commands/{{id}}` | `conn_mod_def::GLCUUR6KFrA::etRrWApwQ7qoFeLrb-gWTw` |
| Launch a Command via a Trigger | POST | `/command/trigger/{{triggername}}` | `conn_mod_def::GLCUUR6jqZA::1ubYD2HnTlmOpghIb7Hg0g` |
| Manage a Command's Associations | POST | `/commands/{{commandId}}/associations` | `conn_mod_def::GLCUZraPZeA::JL1X6z1uQSCneg77ZuHIKA` |
| Run a Command | POST | `/runCommand` | `conn_mod_def::GLCUUh7xENA::_GvHaEXOTqWP85bAatsKxQ` |
| Search Commands | POST | `/api/search/commands` | `conn_mod_def::GLCUkumh2GA::areRVJHuQxq0CGHQcIhr-g` |
| Update a Command by ID | PUT | `/commands/{{id}}` | `conn_mod_def::GLCUUtBBz8g::wt-f8Sz9TPaYKERV_LeVmQ` |

### UserGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Group by ID | GET | `/usergroups/{{id}}` | `conn_mod_def::GLCUpK8mUCg::9CRa5AQHQ2eLrosYCH2AGQ` |
| List a Routing Policy's User Groups | GET | `/identity-provider/policies/{{idpRoutingPolicyId}}/associations/usergroups` | `conn_mod_def::GLCUZEONMSg::vg7gqmVGSZ21b8N35cH-3g` |
| List a User Group's Bound System Groups | GET | `/usergroups/{{groupId}}/systemgroups` | `conn_mod_def::GLCUYr5WK1A::ltG283O3QzypG1EeJepNjA` |
| List a User Group's Office 365 Instances | GET | `/usergroups/{{groupId}}/office365s` | `conn_mod_def::GLCUX2iWhcg::cBaHF-v9QYie1qTrVL3v1w` |
| List User Groups | GET | `/api/v2/usergroups` | `conn_mod_def::GLCUpMV1X2g::KiHm-YRaRjClxCaPnlss-g` |
| Apply Suggestions for a User Group | POST | `/usergroups/{{groupId}}/suggestions` | `conn_mod_def::GLCUpCGq3Hg::EBn1LZiSR-KGLNgvLPHcbw` |
| Create a New User Group | POST | `/api/v2/usergroups` | `conn_mod_def::GLCUpCH7BAA::mUJLZkCwTAyn6iW8XRxaAA` |
| Delete a User Group | DELETE | `/usergroups/{{id}}` | `conn_mod_def::GLCUpLtM6Kg::ThuggrfTSUiK-kCeBPo8ow` |
| Manage a User Group's Associations | POST | `/usergroups/{{groupId}}/associations` | `conn_mod_def::GLCUa7_cijg::SQ0u2clgTnSLxasowwOu-A` |
| Update a User Group | PUT | `/usergroups/{{id}}` | `conn_mod_def::GLCUpLs5PYA::iOpq9-TmSG6Pjy7nvILm0Q` |

### AppleMdmDevices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Apple MDM Device | GET | `/applemdms/{{appleMdmId}}/devices/{{deviceId}}` | `conn_mod_def::GLCURx6zurA::ijyjd_SCRvWHp1VvXcSsjw` |
| Get Recovery Lock Password for an Apple MDM Device | GET | `/applemdms/{{deviceManagerObjectId}}/devices/{{deviceObjectId}}/getrecoverylockpassword` | `conn_mod_def::GLCUb1yevrA::nQm-Pgb1R7uCPgS7MF_Ruw` |
| List an Apple MDM's Devices | GET | `/applemdms/{{appleMdmId}}/devices` | `conn_mod_def::GLCUSG-TH9g::GC3ZeShiTSmTMfQBHNTUpg` |
| Clear Activation Lock for an Apple MDM Device | POST | `/applemdms/{{appleMdmId}}/devices/{{deviceId}}/clearActivationLock` | `conn_mod_def::GLCURy2a9eg::_ze0pILhTwqU86Tzk2lIrA` |
| Clear Restrictions Password for an Apple MDM Device | POST | `/applemdms/{{appleMdmId}}/devices/{{deviceId}}/clearRestrictionsPassword` | `conn_mod_def::GLCURyAC09g::eTKov6fqTL-5d0XJYsjTKw` |
| Control Lost Mode for an Apple MDM Device | POST | `/applemdms/{{deviceManagerObjectId}}/devices/{{deviceObjectId}}/lostmode` | `conn_mod_def::GLCUb0bjSJg::R1roDLHWR3WHrg64quMT1A` |
| Erase an Apple MDM Device | POST | `/applemdms/{{appleMdmId}}/devices/{{deviceId}}/erase` | `conn_mod_def::GLCUR8_cxZg::EJD6FaQoQFigWEYxZ-wMSQ` |
| Lock an Apple MDM Device | POST | `/applemdms/{{appleMdmId}}/devices/{{deviceId}}/lock` | `conn_mod_def::GLCUSF5KYXg::gOWxB3K6QVOX1MEWIAbGug` |
| Restart an Apple MDM Device | POST | `/applemdms/{{appleMdmId}}/devices/{{deviceId}}/restart` | `conn_mod_def::GLCUSQYHXBg::Mol4zeQ5QJKti2FJe37vmw` |
| Shut Down an Apple MDM Device | POST | `/applemdms/{{appleMdmId}}/devices/{{deviceId}}/shutdown` | `conn_mod_def::GLCUSQV7Gdg::-XRzyxp4SiiYCtJ7vZjTaA` |

### ActiveDirectories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Active Directory (by ID) | GET | `/activedirectories/{{id}}` | `conn_mod_def::GLCURPv21vg::D9woy7PBQeSJWeQerAe1nA` |
| List a Provider's Active Directories | GET | `/providers/{{providerId}}/activedirectories` | `conn_mod_def::GLCUhUfGBXg::nr5nJLHUQYexJ4FAtJsF_A` |
| List a User's Active Directory Instances | GET | `/users/{{userId}}/activedirectories` | `conn_mod_def::GLCUWk7e5YA::-mklWyoSR8mU--M75FydKw` |
| List Active Directories | GET | `/api/v2/activedirectories` | `conn_mod_def::GLCURdjwvYA::iklf_vvCTEG25ZU9tE_MwQ` |
| Bulk Translation Rules Operations for an Active Directory | POST | `/activedirectories/{{activedirectoryId}}/translation-rules/bulk` | `conn_mod_def::GLCUo4wksYg::q8BplzACQD-IvaU9zYWoLw` |
| Create a New Active Directory | POST | `/api/v2/activedirectories` | `conn_mod_def::GLCURF2Fj3g::hahcyrhLSaGIOhVyyaQ7dg` |
| Delete an Active Directory (by ID) | DELETE | `/activedirectories/{{id}}` | `conn_mod_def::GLCURTjZlgA::eiSce8hKQlSEVEhUIQxyJg` |
| Preview Translation Rules for Active Directories | POST | `/activedirectories/translation-rules/preview` | `conn_mod_def::GLCUpCuJXaA::0xD4Gv07R1e6P40w3D6Xnw` |
| Update an Active Directory Instance | PATCH | `/activedirectories/{{id}}` | `conn_mod_def::GLCUReLCB9g::QiMT1T11RdKlAkfNxahjbg` |

### Applemdms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Apple MDM CSR Plist | GET | `/applemdms/{{appleMdmId}}/csr` | `conn_mod_def::GLCUR8_cXCA::yitElJAYQa6aB_U2-k6S-g` |
| Get an Organization's ADUE Configuration | GET | `/applemdms/{{organizationObjectId}}/account-driven-service-discovery` | `conn_mod_def::GLCUbok4rCA::crh7sIIaTCagEjZVA8yxGg` |
| Validate an Apple MDM Server Service Discovery URL | GET | `/applemdms/{{deviceManagerObjectId}}/validate-service-discovery-url` | `conn_mod_def::GLCUbrsO1fg::hTf_6Oq9SKq9zQqnxqJFuw` |
| Delete an Apple MDM | DELETE | `/applemdms/{{id}}` | `conn_mod_def::GLCURx6Kj6A::2Hh3Xg1ZS0m6jdE6_Wu96Q` |
| Delete an Apple MDM Server's Service Discovery URL | DELETE | `/applemdms/{{deviceManagerObjectId}}/service-discovery-url` | `conn_mod_def::GLCUbopjImA::xzN45auzQ3mCeOnBCKZ_9Q` |
| Remove an Apple MDM Device's Enrollment | DELETE | `/applemdms/{{appleMdmId}}/devices/{{deviceId}}` | `conn_mod_def::GLCUSP1qRDA::coYIAsmIQHCACL_YQdMLaA` |
| Request the Status of an OS Update for an Apple MDM Device | POST | `/applemdms/{{appleMdmId}}/devices/{{deviceId}}/osUpdateStatus` | `conn_mod_def::GLCUSQknozA::v_59q4LHQDaoDMBQCe-dPA` |
| Update an Apple MDM (by ID) | PUT | `/applemdms/{{id}}` | `conn_mod_def::GLCUSZt0mDg::z1onmlgqTl-KvOlzvSaR2w` |
| Update an Apple MDM Server's Service Discovery URL | POST | `/applemdms/{{deviceManagerObjectId}}/service-discovery-url` | `conn_mod_def::GLCUbn6rfDg::mQJFeR-7ShGoJ31fIFtiPg` |

### GoogleEmmDevices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Device's Android Policy JSON | GET | `/google-emm/devices/{{deviceId}}/policy_results` | `conn_mod_def::GLCUWPnztEg::nszpGIozSt6eJbALOGvgCg` |
| Get a Google EMM Device by ID | GET | `/google-emm/devices/{{deviceId}}` | `conn_mod_def::GLCUWPdn0Xg::3taSRlMoSAyDbVn8Zev4Kg` |
| Erase an Android Device | POST | `/google-emm/devices/{{deviceId}}/erase-device` | `conn_mod_def::GLCUWFsx9yA::N7F1rJhMShGnQrHd7Qf6Qw` |
| Lock a Google EMM Device | POST | `/google-emm/devices/{{deviceId}}/lock` | `conn_mod_def::GLCUWY_QnkA::8y9dK3GrTgGHCunq2J2xGw` |
| Reboot a Google EMM Device | POST | `/google-emm/devices/{{deviceId}}/reboot` | `conn_mod_def::GLCUWZPwjpA::QvEpCpF9Q5-9ZTeIsTffgg` |
| Reset Password of a Device | POST | `/google-emm/devices/{{deviceId}}/resetpassword` | `conn_mod_def::GLCUWY_Ycig::_yhDMwQ9RwWACAG3jqrL-w` |
| Start Lost Mode for a Google EMM Device | POST | `/google-emm/devices/{{deviceId}}/lostmode/start` | `conn_mod_def::GLCUWZIKzwA::QW2mEwU3TTehC9U_mMfjLQ` |

1 more GoogleEmmDevices actions are available through search.

This lists 90 of 703 actions. For anything not here, call `search_one_platform_actions` with platform `jump-cloud`. The full catalog is at https://www.withone.ai/knowledge/jump-cloud.

## When a call fails

The error comes from JumpCloud, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/jump-cloud

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
