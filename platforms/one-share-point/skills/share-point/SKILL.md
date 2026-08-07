---
name: share-point
description: Microsoft SharePoint is a web-based collaboration and content management platform that enables organizations to create websites for secure document storage, information sharing, workflow automation, and team collaboration, accessible from any device. Read and write SharePoint data through One: termstoreterm, termstoreset, mailboxsettings, driveitem, termstorerelation, serviceprovisioningerrors and more, 3334 actions with real parameter documentation. Use whenever the user asks to look something up in SharePoint, create or update a record there, or build code against the SharePoint API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: share-point
  generated-from: one-knowledge-base
---

# SharePoint through One

Microsoft SharePoint is a web-based collaboration and content management platform that enables organizations to create websites for secure document storage, information sharing, workflow automation, and team collaboration, accessible from any device.

One exposes SharePoint through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `share-point` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SharePoint is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SharePoint account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### TermStoreTerm

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Child Term from a Site's Term Store Term | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}` | `conn_mod_def::GJYvYuQUodg::P9qzI1DeSnacR5v7E8tG7g` |
| Get a Child Term of a Term in a Group Site Term Store Set | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/children/{{TERM-ID}}/children/{{TERM-ID1}}` | `conn_mod_def::GJYsehvnZjs::iJFAnxEMSmG5rrwLW_ENEw` |
| Get a Child Term of a Term in a Site Term Store | GET | `/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}` | `conn_mod_def::GJYuyEuXbpk::KYD86GLnQXWT2kFCI--TVQ` |
| Get a Child Term of a Term in a Site Term Store Set | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/children/{{TERM-ID}}/children/{{TERM-ID1}}` | `conn_mod_def::GJYvIXNMUtc::cBB6hBtvRPW3t_ePUQTcyA` |
| Get a Child Term’s Children in a Group Site Term Store Set | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/children/{{TERM-ID}}/children/{{TERM-ID1}}` | `conn_mod_def::GJYsj02dYqU::HupwTA_8TTuMMA3x5kEj7g` |
| Get a Group Site Term Store Relation’s toTerm | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/children/{{TERM-ID}}/relations/{{RELATION-ID}}/toTerm` | `conn_mod_def::GJYtEZnoJKE::GOyQGvA0SMepGDeTJ_frCg` |
| Get a Group Site Term Store Set Relation's toTerm | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/relations/{{RELATION-ID}}/toTerm` | `conn_mod_def::GJYtR9voX-g::3l4nlR99SjCOk_xCa2Qr3Q` |
| Get a Group Site Term Store Set Term’s Child Term’s Children | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/children/{{TERM-ID}}/children/{{TERM-ID1}}` | `conn_mod_def::GJYtBHgrxBs::nYu0tLzgQUKzgGjp6edufg` |
| Get a Relation's fromTerm for a Child Term in a Group Site Term Store | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}/fromTerm` | `conn_mod_def::GJYtUQulEPs::fb1cUjkGQYCrxrcK0rbh6Q` |
| Get a Relation’s fromTerm for a Child Term in a Site Term Store | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/children/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}/fromTerm` | `conn_mod_def::GJYvJXx0ccA::fVE3l_faT5Wzc_nQMcx3Vw` |
| Get a Relation’s fromTerm for a Group’s Site Term Store Term | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/relations/{{RELATION-ID}}/fromTerm` | `conn_mod_def::GJYtVwAsOH4::Xk1Nx9pGS42UdO8SNWllmw` |
| Get a Relation’s fromTerm for a Site Term Store Term | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/groups/{{GROUP-ID}}/sets/{{SET-ID}}/children/{{TERM-ID}}/relations/{{RELATION-ID}}/fromTerm` | `conn_mod_def::GJYu__zThPk::vhY5VxeLRwudGIDVSGZADA` |

92 more TermStoreTerm actions are available through search.

### TermStoreSet

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Child Term Relation’s Set (from a Site Term Store) | GET | `/sites/{{SITE-ID}}/termStore/groups/{{GROUP-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}/set` | `conn_mod_def::GJYuj2zE3sw::bPJIM_zPTuubJjq7jEonag` |
| Get a Child Term’s Set (from a Group/Term Store Hierarchy) | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/set` | `conn_mod_def::GJYtO1qGkF4::-FyzkwgwSmGqH4RTS-bUbA` |
| Get a Child Term’s Set (from a Site Term Store Set) | GET | `/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/set` | `conn_mod_def::GJYuzkjecy8::2DvgCKefRjKsn8XzVbCcyg` |
| Get a Child Term’s Set (from a Site Term Store) | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/groups/{{GROUP-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/set` | `conn_mod_def::GJYvEvMkiHs::xeGVpuJWQLa8byEi_0hGCQ` |
| Get a Child Term’s Set (from a Site Term Store) | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/set` | `conn_mod_def::GJYvaZDQiR0::I1N5dzkOTKGfNPwzq_p4Eg` |
| Get a Group Site Term Store Set | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}` | `conn_mod_def::GJYs_0J0EPc::NPskQZPkSMCbeyIfSM12AQ` |
| Get a Group Site Term Store Set | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}` | `conn_mod_def::GJYsdNLMot8::mdfSlqN3SLCPxK-1QUUQ9A` |
| Get a Parent Group’s Set from a Site’s Term Store | GET | `/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}` | `conn_mod_def::GJYurbbGNjY::lq_RMd6aReaFJh0fngWH5Q` |
| Get a Parent Group’s Set Under a Set (Term Store) | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}` | `conn_mod_def::GJYsihOLoSk::7XeuikofRdiO4CeUhhF54g` |
| Get a Related Set for a Relation in a Group Term Store Set | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/relations/{{RELATION-ID}}/set` | `conn_mod_def::GJYtLrG1Mxk::o8Ab7ghAS5uNqjygW5ne7w` |
| Get a Related Set for a Relation in a Site's Term Store (Set) | GET | `/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/relations/{{RELATION-ID}}/set` | `conn_mod_def::GJYuwxzCQlQ::noyUe8uERqKwIDyS085XNg` |
| Get a Related Set for a Term Store Relation (from a Site) | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/relations/{{RELATION-ID}}/set` | `conn_mod_def::GJYvR4UP-dM::Xj3cVSy2Qim7piFUQBrPtg` |

77 more TermStoreSet actions are available through search.

### MailboxSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Drive Creator User's Mailbox Settings | GET | `/drives/{{DRIVE-ID}}/createdByUser/mailboxSettings` | `conn_mod_def::GJYDU299LFs::kug9hNR-R-qklgc6sYgDmw` |
| Get a Drive Item Creator's Mailbox Settings | GET | `/drives/{{DRIVE-ID}}/items/{{DRIVEITEM-ID}}/createdByUser/mailboxSettings` | `conn_mod_def::GJYCK9aZ_xc::TUl08cp3RSav1nSCfxBpZg` |
| Get a Drive Item Creator's Mailbox Settings (in a Group Drive) | GET | `/groups/{{GROUP-ID}}/drives/{{DRIVE-ID}}/items/{{DRIVEITEM-ID}}/createdByUser/mailboxSettings` | `conn_mod_def::GJYDlbEyal0::8FbD_owmRXSMbJIVkyJMvg` |
| Get a Drive Item ListItem CreatedByUser Mailbox Settings | GET | `/drives/{{DRIVE-ID}}/items/{{DRIVEITEM-ID}}/listItem/createdByUser/mailboxSettings` | `conn_mod_def::GJYCN0GA7WY::JIaBqizWShuU-pMJBKgX8w` |
| Get a Drive Item ListItem’s Last Modified By User Mailbox Settings | GET | `/drives/{{DRIVE-ID}}/items/{{DRIVEITEM-ID}}/listItem/lastModifiedByUser/mailboxSettings` | `conn_mod_def::GJYCSGtUrqc::svYEH0w1Sma192pEziDkXQ` |
| Get a Drive Item's Last Modified By User Mailbox Settings | GET | `/drives/{{DRIVE-ID}}/items/{{DRIVEITEM-ID}}/lastModifiedByUser/mailboxSettings` | `conn_mod_def::GJYCMEQp12I::dDWA1VobQM2JC2uPWU07pw` |
| Get a Drive List Creator's Mailbox Settings (in a Group Drive) | GET | `/groups/{{GROUP-ID}}/drives/{{DRIVE-ID}}/list/createdByUser/mailboxSettings` | `conn_mod_def::GJYEGpuWIWw::Or_P-XNySoW0e8FwScJo8g` |
| Get a Drive Root List Item Creator's Mailbox Settings | GET | `/drives/{{DRIVE-ID}}/root/listItem/createdByUser/mailboxSettings` | `conn_mod_def::GJYCqqTJccU::gpL5I0wKRyOCMvYRiGMcSw` |
| Get a Drive Root List Item's Last Modified By User Mailbox Settings | GET | `/drives/{{DRIVE-ID}}/root/listItem/lastModifiedByUser/mailboxSettings` | `conn_mod_def::GJYCu4IoH74::0mEmWGHSRkGqlrQC0Mzw6w` |
| Get a Drive Root's CreatedByUser Mailbox Settings | GET | `/drives/{{DRIVE-ID}}/root/createdByUser/mailboxSettings` | `conn_mod_def::GJYCnnUCTTY::hv_82vSgQeqf63IliNFKRw` |
| Get a Drive Root's Last Modified By User Mailbox Settings | GET | `/drives/{{DRIVE-ID}}/root/lastModifiedByUser/mailboxSettings` | `conn_mod_def::GJYCo3oyk-g::_FufIc54SwyZZUAvHoIi-g` |
| Get a Drive's Last Modified By User Mailbox Settings | GET | `/drives/{{DRIVE-ID}}/lastModifiedByUser/mailboxSettings` | `conn_mod_def::GJYDV4A-k_Q::vUrpPIG4T1CqwlB-9p2QVA` |

47 more MailboxSettings actions are available through search.

### DriveItem

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Drive Item for a Site List Item | GET | `/sites/{{SITE-ID}}/lists/{{LIST-ID}}/items/{{LISTITEM-ID}}/driveItem` | `conn_mod_def::GJYuO4oHEG4::IG9SXDz-SGS4AmTqi0zZKw` |
| Get a Drive Item from a Share | GET | `/shares/{{SHAREDDRIVEITEM-ID}}/items/{{DRIVEITEM-ID}}` | `conn_mod_def::GJYtYHcMGAk::jgSHm5tNT4eMfW7CWklO6A` |
| Get a Drive Item from a Share (via List Item) | GET | `/shares/{{SHAREDDRIVEITEM-ID}}/listItem/driveItem` | `conn_mod_def::GJYtrm-qdA0::oxQI4tZ_Rw6wF-nu-sjN6Q` |
| Get a Drive Item from a Shared Drive Item’s List Item | GET | `/shares/{{SHAREDDRIVEITEM-ID}}/list/items/{{LISTITEM-ID}}/driveItem` | `conn_mod_def::GJYtiuoOJEc::eKztRRbGRcKCQZitkjXO0A` |
| Get a Drive Root ListItem's driveItem from a Drive | GET | `/drives/{{DRIVE-ID}}/root/listItem/driveItem` | `conn_mod_def::GJYCtX0t_Vs::pZEi-f2ORqaVXdSDWCtRGA` |
| Get a Drive's Item Activity DriveItem | GET | `/drives/{{DRIVE-ID}}/root/analytics/itemActivityStats/{{ITEMACTIVITYSTAT-ID}}/activities/{{ITEMACTIVITY-ID}}/driveItem` | `conn_mod_def::GJYCj8lhG6Y::7WW0ZXsoSRWEiHUzet_K_A` |
| Get a DriveItem for a Drive's DriveItem ListItem | GET | `/drives/{{DRIVE-ID}}/items/{{DRIVEITEM-ID}}/listItem/driveItem` | `conn_mod_def::GJYCQoCAg78::auay0-OQTq2Syk4AXsDiig` |
| Get a Group Drive Item Followed by the User | GET | `/groups/{{GROUP-ID}}/drives/{{DRIVE-ID}}/following/{{DRIVEITEM-ID}}` | `conn_mod_def::GJYDac3SN0Y::DNx0OIbFQn6gLPx3NT2NFQ` |
| Get a Group Drive Item for a List Item (driveItem relationship) | GET | `/groups/{{GROUP-ID}}/drives/{{DRIVE-ID}}/items/{{DRIVEITEM-ID}}/listItem/driveItem` | `conn_mod_def::GJYDrsyvi5M::9EwkEncOSjeoYzmkV7Hi-Q` |
| Get a Site Item Activity's Drive Item | GET | `/sites/{{SITE-ID}}/analytics/itemActivityStats/{{ITEMACTIVITYSTAT-ID}}/activities/{{ITEMACTIVITY-ID}}/driveItem` | `conn_mod_def::GJYuEMFpqgA::569kc1KRTUyR1RaLTfZl9Q` |
| Get a User Drive Item’s Child (by ID) | GET | `/users/{{USER-ID}}/drives/{{DRIVE-ID}}/root/children/{{DRIVEITEM-ID}}` | `conn_mod_def::GJYwD0ubWZY::ckO1WYDCTimuv5VWRzKGfw` |
| Get a User Drive's Special Drive Item | GET | `/users/{{USER-ID}}/drives/{{DRIVE-ID}}/special/{{DRIVEITEM-ID}}` | `conn_mod_def::GJYwSqIlc-s::WXXRgGNTR9a-cKlaLgbz3Q` |

43 more DriveItem actions are available through search.

### TermStoreRelation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Child Term Relation for a Group Site Term Store Set Term | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYtT04Bo-I::4ZM0EBhhR0qnmRjqxxrRpw` |
| Get a Child Term Relation for a Site Term Store Term | GET | `/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYu35r6rdY::t35WDt8-T9-ojtSysAMWmQ` |
| Get a Child Term Relation from a Site Term Store | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYvZbcMaV0::WKWNLWjuTduyTywLQw85eA` |
| Get a Child Term’s Relation in a Site Term Store | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/groups/{{GROUP-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYvD15fr3M::pOeo4687S8G7RjuaxSATpg` |
| Get a Group Site Term Store Set Child Term Relation | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/children/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYtB4p8cPg::gBkXAwK2Sg6x8-DOTstJJg` |
| Get a Group Site Term Store Set Parent Group Set Child Term Relation | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/children/{{TERM-ID}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYtJk7CvF0::aqFj79L8QJKuQQ5mthBr_Q` |
| Get a Group Site Term Store Set Term Relation | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYtVYUbESI::YtCOSeNwS1-IQgy6NuOsEQ` |
| Get a Group Site Term Store Term Relation | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/children/{{TERM-ID}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYsgsaTo2A::MV1KEmU0R_enDUx-fOMf_w` |
| Get a Group Term Store Term Child Term Relation | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYtNxigCsE::BLMe6J9zTpmal40av8YgTA` |
| Get a Relation for a Child Term in a Site Term Store | GET | `/sites/{{SITE-ID}}/termStore/groups/{{GROUP-ID}}/sets/{{SET-ID}}/children/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYudj65acg::TKCe1BF8S5ezqBa4drlW7Q` |
| Get a Relation for a Child Term in a Site Term Store Set | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYvUAbB5VQ::xWxmAp2uQeSRlxckIQsZbA` |
| Get a Relation for a Term in a Site Term Store | GET | `/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/children/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}` | `conn_mod_def::GJYutZouRQE::XdwNnkIIS16i5kwPkshIEg` |

38 more TermStoreRelation actions are available through search.

### ServiceProvisioningErrors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Drive Item List Item’s Last Modified By User Service Provisioning Errors | GET | `/drives/{{DRIVE-ID}}/items/{{DRIVEITEM-ID}}/listItem/lastModifiedByUser/serviceProvisioningErrors` | `conn_mod_def::GJYCSda0Z7Y::-5Z_TthgQAakOdEH9D2hdQ` |
| Get a Drive Item ListItem CreatedByUser Service Provisioning Errors | GET | `/drives/{{DRIVE-ID}}/items/{{DRIVEITEM-ID}}/listItem/createdByUser/serviceProvisioningErrors` | `conn_mod_def::GJYCORjWUJo::xRtEjkk-SXuxBzQ_ubhz6Q` |
| Get a Drive Root createdByUser serviceProvisioningErrors Count | GET | `/drives/{{DRIVE-ID}}/root/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJYCoUYB8pQ::y-lP2HgiQUaAII69JdREcA` |
| Get a Drive Root Last Modified By User’s Service Provisioning Errors | GET | `/users/{{USER-ID}}/drives/{{DRIVE-ID}}/root/lastModifiedByUser/serviceProvisioningErrors` | `conn_mod_def::GJYwGQoVC-w::xv_4VxPBRJ6w4Ahd_Z-Zbw` |
| Get a Drive Root List Item CreatedByUser ServiceProvisioningErrors Count | GET | `/drives/{{DRIVE-ID}}/root/listItem/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJYCrQL-NZc::pbsGt8RDTl-2NpzaKJ22Kw` |
| Get a Drive Root List Item Creator's Service Provisioning Errors | GET | `/drives/{{DRIVE-ID}}/root/listItem/createdByUser/serviceProvisioningErrors` | `conn_mod_def::GJYCrEe9XLQ::QGETSE4vQKm09DMCZzm_kQ` |
| Get a Drive Root List Item's Last Modified By User Service Provisioning Errors | GET | `/drives/{{DRIVE-ID}}/root/listItem/lastModifiedByUser/serviceProvisioningErrors` | `conn_mod_def::GJYCvU4l454::GKVVZzmARyCmJ0dka3l1WQ` |
| Get a Drive Root's Last Modified By User Service Provisioning Errors | GET | `/drives/{{DRIVE-ID}}/root/lastModifiedByUser/serviceProvisioningErrors` | `conn_mod_def::GJYCpV2NEyk::riJxX13ZQnCsRyxQKcSBTA` |
| Get a Group Site Page's `createdByUser` `serviceProvisioningErrors` Count | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/pages/{{BASESITEPAGE-ID}}/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJYsH-t4Odo::_GirCiIgSw-5NgPGWss4OA` |
| Get a List Item Creator's Service Provisioning Errors | GET | `/sites/{{SITE-ID}}/lists/{{LIST-ID}}/items/{{LISTITEM-ID}}/createdByUser/serviceProvisioningErrors` | `conn_mod_def::GJYuNIV4gIw::OkTv8CGATISxd0FH3MyEog` |
| Get a List Item's Last Modified By User Service Provisioning Errors | GET | `/users/{{USER-ID}}/drives/{{DRIVE-ID}}/list/items/{{LISTITEM-ID}}/lastModifiedByUser/serviceProvisioningErrors` | `conn_mod_def::GJYv7sJbEP8::yBRrbyqzQDa8UaxvK6p98w` |
| Get a List Item’s lastModifiedByUser serviceProvisioningErrors | GET | `/sites/{{SITE-ID}}/lists/{{LIST-ID}}/items/{{LISTITEM-ID}}/lastModifiedByUser/serviceProvisioningErrors` | `conn_mod_def::GJYuQBHwEXw::aE2hxoWGRAW89_8mkvJWHA` |

26 more ServiceProvisioningErrors actions are available through search.

### ContentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group Site's Content Types Count | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/contentTypes/$count` | `conn_mod_def::GJYFByPo-D4::AeaclKbGQ8Opv1OxzOnLJg` |
| Get a Site Content Type’s Base Type (Ancestor) from baseTypes | GET | `/sites/{{SITE-ID}}/contentTypes/{{CONTENTTYPE-ID}}/baseTypes/{{CONTENTTYPE-ID1}}` | `conn_mod_def::GJYt9vAqz8E::Ff4LGDSqQnOqndPnqwAcyw` |
| Get a Site’s Content Types Count | GET | `/sites/{{SITE-ID}}/contentTypes/$count` | `conn_mod_def::GJYuA9SyrG4::NewncY0vRNyixU65kszCqA` |
| Get Applicable Content Types for a List by Site Path | GET | `/sites/{{site-id}}/microsoft.graph.getByPath(path='{{path}}')/microsoft.graph.getApplicableContentTypesForList(listId='{{listId}}')` | `conn_mod_def::GJYuZRoefzQ::rc56oTQjT1ymUfX4fw_7lg` |
| Get Applicable Content Types for a Site List | GET | `/sites/{{SITE-ID}}/microsoft.graph.getApplicableContentTypesForList(listId='{{LISTID}}')` | `conn_mod_def::GJYuYrrFx4U::_ZL_7hoHQj6YG_e3ZEC3KA` |
| List a Group Site List's Content Types | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/lists/{{LIST-ID}}/contentTypes` | `conn_mod_def::GJYFI3XhZiQ::TlF2fxjdQlac-UEpEd9NSQ` |
| List a List's Content Types | GET | `/sites/{{SITE-ID}}/lists/{{LIST-ID}}/contentTypes` | `conn_mod_def::GJYuGvmmBuw::50Brka7tTA-5cxkQX953BQ` |
| List a Site’s Content Types (Get By Path) | GET | `/sites/{{SITE-ID}}/microsoft.graph.getByPath(path='{{PATH}}')/contentTypes` | `conn_mod_def::GJYuBiHBXnc::FMPBTpf7R_Kar9hCYiYbrw` |
| List Base Content Types for a Group's Site List Content Type | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/lists/{{LIST-ID}}/contentTypes/{{CONTENTTYPE-ID}}/baseTypes` | `conn_mod_def::GJYFJ4dZrwI::21XKHMrIToqHyivTzxfeLQ` |
| List Base Types for a Shared Drive Item’s List Content Type | GET | `/shares/{{SHAREDDRIVEITEM-ID}}/list/contentTypes/{{CONTENTTYPE-ID}}/baseTypes` | `conn_mod_def::GJYtbmS4y2U::qeiAvTUZQb-CX4C-laUfhQ` |
| List Compatible Hub Content Types for a Group Drive List | GET | `/groups/{{GROUP-ID}}/drives/{{DRIVE-ID}}/list/contentTypes/microsoft.graph.getCompatibleHubContentTypes()` | `conn_mod_def::GJYEGQDxmMY::2bH9SrboSDGFKzZEreWqCg` |
| List Content Types by Path for a Group Site | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/microsoft.graph.getByPath(path='{{PATH}}')/contentTypes` | `conn_mod_def::GJYruHboOJE::eIljdHa6Tc-ccoFL-iKS4w` |

20 more ContentTypes actions are available through search.

### TermStoreFromTerm

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Relation's From Term for a Term in a Site Term Store | GET | `/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/terms/{{TERM-ID}}/relations/{{RELATION-ID}}/fromTerm` | `conn_mod_def::GJYvV1CE0zE::twNPUp4ASqWSKzQX9GAg-A` |
| Get a Relation’s fromTerm (Term Store) from a Group’s Site | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/children/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}/fromTerm` | `conn_mod_def::GJYtIHbxx7o::r1-C1PY6SJ6uBaovT6W9ow` |
| Get a Relation's fromTerm for a Child Term in a Group Site Term Store | GET | `/groups/{{GROUP-ID}}/sites/{{SITE-ID}}/termStores/{{STORE-ID}}/sets/{{SET-ID}}/children/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}/fromTerm` | `conn_mod_def::GJYtCSWl4t8::RgpzGJnJQTCYq-fOygT9vg` |
| Get a Relation's fromTerm for a Child Term in a Site Term Store | GET | `/sites/{{SITE-ID}}/termStore/groups/{{GROUP-ID}}/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}/fromTerm` | `conn_mod_def::GJYujtlAi24::qpjs09qoRDiwZbq3Xzu-NQ` |
| Get a Relation’s fromTerm for a Child Term in a Site Term Store | GET | `/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/parentGroup/sets/{{SET-ID1}}/children/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}/fromTerm` | `conn_mod_def::GJYut2V-bv8::_ECeVqBGTUGRVrG4e2TS1A` |
| Get a Relation’s fromTerm for a Child Term in a Site Term Store | GET | `/sites/{{SITE-ID}}/termStore/sets/{{SET-ID}}/terms/{{TERM-ID}}/children/{{TERM-ID1}}/relations/{{RELATION-ID}}/fromTerm` | `conn_mod_def::GJYu4Po3cCU::X1-2uMHtR2SrIjVomzWBOQ` |

20 more TermStoreFromTerm actions are available through search.

This lists 90 of 3334 actions. For anything not here, call `search_one_platform_actions` with platform `share-point`. The full catalog is at https://www.withone.ai/knowledge/share-point.

## When a call fails

The error comes from SharePoint, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/share-point

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
