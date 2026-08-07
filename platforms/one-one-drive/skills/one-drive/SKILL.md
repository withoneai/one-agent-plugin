---
name: one-drive
description: A cloud storage service that allows users to store, sync, and share files securely with access across devices. It integrates seamlessly with productivity and collaboration tools. Read and write OneDrive data through One: driveitems, mailboxsettings, serviceprovisioningerrors, documentsetversions, shares, drives and more, 1514 actions with real parameter documentation. Use whenever the user asks to look something up in OneDrive, create or update a record there, or build code against the OneDrive API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: one-drive
  generated-from: one-knowledge-base
---

# OneDrive through One

A cloud storage service that allows users to store, sync, and share files securely with access across devices. It integrates seamlessly with productivity and collaboration tools.

One exposes OneDrive through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `one-drive` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OneDrive is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OneDrive account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### DriveItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Delta Query for a Group Drive Item | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/microsoft.graph.delta(token='{{token}}')` | `conn_mod_def::GJ52uVqdGlg::BbIWV7pfSiSWkeMlwAqT3Q` |
| Delta Query for a User’s Drive Item | GET | `/users/{{userId}}/drives/{{driveId}}/items/{{driveItemId}}/microsoft.graph.delta(token='{{token}}')` | `conn_mod_def::GJ53HZ3K5dA::Ud8diAM0R2-diBzWtoNBSw` |
| Download a Drive Item’s Content (File Stream) | GET | `/drives/{{driveId}}/items/{{driveItemId}}/content` | `conn_mod_def::GJ52UOJzrgE::ygWbE_4lSfyhM3Q6u8THkg` |
| Download a Drive Item’s Content in a Group Drive (Child Item) | GET | `/groups/{{groupId}}/drives/{{driveId}}/root/children/{{driveItemId}}/content` | `conn_mod_def::GJ52l_f30o0::qpG5e5R2QCWVBlApkYRt7A` |
| Get a Child DriveItem’s File Content in a Group Drive | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/children/{{driveItemId1}}/content` | `conn_mod_def::GJ52l_pRy2c::q_YnXRPkRgSDT7hxY4U9sA` |
| Get a Child Item's Children in a Group Drive | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/children/{{driveItemId1}}` | `conn_mod_def::GJ52lbnTkDM::6mu6qhzkTLaOwC7RW_1ALQ` |
| Get a Drive Item Child for a User (from Drive Root Children) | GET | `/users/{{userId}}/drives/{{driveId}}/root/children/{{driveItemId}}` | `conn_mod_def::GJ529uq6k9g::TYVfAiWeQpeySF-UnewnRg` |
| Get a Drive Item Child's Children (in a Drive) | GET | `/drives/{{driveId}}/items/{{driveItemId}}/children/{{driveItemId1}}` | `conn_mod_def::GJ52T52ab8w::NP6_9e12QK68Kx0yp-cT-g` |
| Get a Drive Item Child’s Content Stream | GET | `/drives/{{driveId}}/items/{{driveItemId}}/children/{{driveItemId1}}/content` | `conn_mod_def::GJ52TvaqpsU::mbDNi_cZRIqWF10To0x9ig` |
| Get a Drive Item Child's Content Stream for a User | GET | `/users/{{userId}}/drives/{{driveId}}/root/children/{{driveItemId}}/content` | `conn_mod_def::GJ52-IOlD-o::7jxVdtieT6C4Qngp0TwouA` |
| Get a Drive Item Count | GET | `/drives/{{driveId}}/items/$count` | `conn_mod_def::GJ52XSyV_V4::zHK5SPOzSKWKWUflH02QmA` |
| Get a Drive Item for a List Item in a Drive | GET | `/drives/{{driveId}}/list/items/{{listItemId}}/driveItem` | `conn_mod_def::GJ52ealkPSI::crStSPCNQ4WNMW7S6-6_4w` |

199 more DriveItems actions are available through search.

### MailboxSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Drive Creator User’s Mailbox Settings | GET | `/drives/{{driveId}}/createdByUser/mailboxSettings` | `conn_mod_def::GJ52hqE9A5k::flIKzDA4REmYo3QhZA21Hw` |
| Get a Drive Item Creator's Mailbox Settings | GET | `/drives/{{driveId}}/items/{{driveItemId}}/createdByUser/mailboxSettings` | `conn_mod_def::GJ52V6qA3mo::0mBWBxLDRmajaK0_u7CBIA` |
| Get a Drive Item Creator's Mailbox Settings (CreatedByUser) | GET | `/users/{{userId}}/drives/{{driveId}}/items/{{driveItemId}}/createdByUser/mailboxSettings` | `conn_mod_def::GJ53BL0YHJ0::Yihmfh12RHW6-MihNcZaAA` |
| Get a Drive Item Creator’s Mailbox Settings (in a Group Drive) | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/createdByUser/mailboxSettings` | `conn_mod_def::GJ52o42BWAU::gX7tswZvR1eDSui_XMErJA` |
| Get a Drive Item List Item CreatedByUser Mailbox Settings | GET | `/drives/{{driveId}}/items/{{driveItemId}}/listItem/createdByUser/mailboxSettings` | `conn_mod_def::GJ52V7uP94s::4xPfT0uiQA2xB4okhaH6Xg` |
| Get a Drive List Creator User’s Mailbox Settings | GET | `/drives/{{driveId}}/list/createdByUser/mailboxSettings` | `conn_mod_def::GJ52eoNKylE::k4CUzS8EToabh-A29q3upg` |
| Get a Drive List’s Last Modified By User Mailbox Settings | GET | `/drives/{{driveId}}/list/lastModifiedByUser/mailboxSettings` | `conn_mod_def::GJ52e6BaP_Y::_o1_--NhSqmXcA856uIsjQ` |
| Get a Drive Root Creator User's Mailbox Settings | GET | `/users/{{userId}}/drives/{{driveId}}/root/createdByUser/mailboxSettings` | `conn_mod_def::GJ53A_AFi4w::ZC9_n12SShqAfdGgxNmuYQ` |
| Get a Drive Root Creator's Mailbox Settings | GET | `/drives/{{driveId}}/root/createdByUser/mailboxSettings` | `conn_mod_def::GJ52V8Q1jdQ::WrAOD2etSDCRvepMKfseeg` |
| Get a Drive Root List Item Creator’s Mailbox Settings | GET | `/drives/{{driveId}}/root/listItem/createdByUser/mailboxSettings` | `conn_mod_def::GJ52WJuh67M::fxmz5RNuSGaJykF-tVuTgQ` |
| Get a Drive Root List Item Creator’s Mailbox Settings for a User | GET | `/users/{{userId}}/drives/{{driveId}}/root/listItem/createdByUser/mailboxSettings` | `conn_mod_def::GJ53A_oBNhA::bSf2R0U1Sdq6yEO0aQUPOw` |
| Get a Drive Root List Item Last Modified By User’s Mailbox Settings | GET | `/drives/{{driveId}}/root/listItem/lastModifiedByUser/mailboxSettings` | `conn_mod_def::GJ52WIQkh_0::Fs0xNjEiRjmii-RLjsulzg` |

84 more MailboxSettings actions are available through search.

### ServiceProvisioningErrors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Drive List CreatedByUser ServiceProvisioningErrors Count | GET | `/drives/{{driveId}}/list/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52f_gLYrw::GWTAMMYBS4aqtm5srtG3jA` |
| Get a Group Drive CreatedByUser ServiceProvisioningErrors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52qxFfDjA::8xPTpYWMS0uMO8S27qzVfg` |
| Get a Group Drive Item CreatedByUser ServiceProvisioningErrors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52r40lhxQ::wKHcF2zBSEG5UM2YJxbt9Q` |
| Get a Group Drive Item Last Modified By User Service Provisioning Errors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/lastModifiedByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52r43etaQ::H0flFgT7QF6r8bDS--5KfQ` |
| Get a Group Drive Item ListItem CreatedByUser ServiceProvisioningErrors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/listItem/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52r4wVl6E::DHC48kw7QHGQO2I4E-5APg` |
| Get a Group Drive Item ListItem Last Modified By User Service Provisioning Errors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/listItem/lastModifiedByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52qa4a7n8::6Yj8L56nQ6iqn67j7tLPdw` |
| Get a Group Drive List CreatedByUser ServiceProvisioningErrors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/list/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52q5KPj5M::HnXPYN6IRQyll6KfF7U9Kw` |
| Get a Group Drive List Last Modified By User Service Provisioning Errors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/list/lastModifiedByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52rCBnC74::GVoNm3y9QGSs5odujsRVzA` |
| Get a Group Drive Root CreatedByUser ServiceProvisioningErrors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/root/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52rWRSODc::H40TXXTcT_aaMZYE69U6LA` |
| Get a Group Drive Root Last Modified By User Service Provisioning Errors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/root/lastModifiedByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52rWWPHXU::av8_MwsxRW-YCU6-vx7grw` |
| Get a Group Drive Root List Item CreatedByUser ServiceProvisioningErrors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/root/listItem/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52rXCLsdY::f7xiaAmbS8y-T4vm3rIsjQ` |
| Get a Group Drive Root List Item Last Modified By User Service Provisioning Errors Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/root/listItem/lastModifiedByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52rflfHCM::ka-XuEfvQCikJSFh3fqpWA` |

68 more ServiceProvisioningErrors actions are available through search.

### DocumentSetVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document Set Version from a Shared Drive Item | GET | `/shares/{{sharedDriveItemId}}/list/items/{{listItemId}}/documentSetVersions/{{documentSetVersionId}}` | `conn_mod_def::GJ520FRaMcI::F0b_l7hrS_agi69icCrdjQ` |
| Get a Drive Item's Document Set Version | GET | `/drives/{{driveId}}/items/{{driveItemId}}/listItem/documentSetVersions/{{documentSetVersionId}}` | `conn_mod_def::GJ52Ui_CR_w::OMDSvXYTTSCZQ16C9P2G3Q` |
| Get a Drive List Item Document Set Version Count | GET | `/drives/{{driveId}}/list/items/{{listItemId}}/documentSetVersions/$count` | `conn_mod_def::GJ52gDHRv1k::8Crl82dnQsyNV_fhhPiO-g` |
| Get a Drive List Item’s Document Set Version | GET | `/drives/{{driveId}}/list/items/{{listItemId}}/documentSetVersions/{{documentSetVersionId}}` | `conn_mod_def::GJ52ePguzXU::tcD5I2xCRBmyDIQMrBor5A` |
| Get a Drive Root List Item Document Set Version Count | GET | `/drives/{{driveId}}/root/listItem/documentSetVersions/$count` | `conn_mod_def::GJ52XdVcoVk::IuF9ljUnTTuf-xSpMnZNyQ` |
| Get a Drive Root List Item’s Document Set Version | GET | `/drives/{{driveId}}/root/listItem/documentSetVersions/{{documentSetVersionId}}` | `conn_mod_def::GJ52UieJFcA::JX-U2rOKRNutOyVTYF0_dw` |
| Get a Group Drive Item ListItem Document Set Version | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/listItem/documentSetVersions/{{documentSetVersionId}}` | `conn_mod_def::GJ52mrFZZfs::LdSJWXeBQe-L6arioOssyg` |
| Get a Group Drive Item ListItem Document Set Versions Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/listItem/documentSetVersions/$count` | `conn_mod_def::GJ52qXdpsqo::gUABt6CzQSWxrSs1X9YnQw` |
| Get a Group Drive List Item Document Set Version | GET | `/groups/{{groupId}}/drives/{{driveId}}/list/items/{{listItemId}}/documentSetVersions/{{documentSetVersionId}}` | `conn_mod_def::GJ52m1dgbiw::x33OHzxkT-a9Tw9NCkdvAg` |
| Get a Group Drive List Item Document Set Version Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/list/items/{{listItemId}}/documentSetVersions/$count` | `conn_mod_def::GJ52rFWvkhY::FeNA7TIIQqiWcCPpa-fcEA` |
| Get a Group Drive Root List Item Document Set Version | GET | `/groups/{{groupId}}/drives/{{driveId}}/root/listItem/documentSetVersions/{{documentSetVersionId}}` | `conn_mod_def::GJ52m0yE3HU::3f9x9MTJR2m5o9IV_SyWtw` |
| Get a Group Drive Root List Item Document Set Version Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/root/listItem/documentSetVersions/$count` | `conn_mod_def::GJ52rWbYPXc::jK9EW8kFTiqJzep8_8Qiiw` |

63 more DocumentSetVersions actions are available through search.

### Shares

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Shared Drive Item List Content Type Publishing Status (isPublished) | GET | `/shares/{{sharedDriveItemId}}/list/contentTypes/{{contentTypeId}}/microsoft.graph.isPublished()` | `conn_mod_def::GJ522ci6Ux4::8uPU2-0FTymOePqKBJopxA` |
| Get a Share’s Content Type Column Position | GET | `/shares/{{sharedDriveItemId}}/list/contentTypes/{{contentTypeId}}/columnPositions/{{columnDefinitionId}}` | `conn_mod_def::GJ52zoIp5tE::USSR8MB0Qv6ifpB_Itp4bg` |
| Get a Share's List Content Type | GET | `/shares/{{sharedDriveItemId}}/list/contentTypes/{{contentTypeId}}` | `conn_mod_def::GJ520DTXiFM::TmN0eL7DRKKMkCA6qIWGfA` |
| Get a Shared Drive Item List Item’s Activities by Interval | GET | `/shares/{{sharedDriveItemId}}/listItem/microsoft.graph.getActivitiesByInterval(startDateTime='{{startDateTime}}',endDateTime='{{endDateTime}}',interval='{{interval}}')` | `conn_mod_def::GJ524TP_Vg4::eZdPe-6xQum_FWvnY9HzsA` |
| Get a Shared Drive Item List Item's Analytics (from a Share) | GET | `/shares/{{sharedDriveItemId}}/listItem/analytics` | `conn_mod_def::GJ523eT-7ZI::bkTs2JtoTMmQ1G_7Tzdn6g` |
| Get a Shared Drive Item List Item’s createdByUser | GET | `/shares/{{sharedDriveItemId}}/list/items/{{listItemId}}/createdByUser` | `conn_mod_def::GJ520DlMBeo::tIj2zMHtSx2CIG22WkKgTA` |
| Get a Shared Drive Item List's createdByUser | GET | `/shares/{{sharedDriveItemId}}/list/createdByUser` | `conn_mod_def::GJ520FmBZ3k::-kDcStXWTsq9UqUF0e9QdA` |
| Get a Shared Drive Item ListItem's lastModifiedByUser | GET | `/shares/{{sharedDriveItemId}}/listItem/lastModifiedByUser` | `conn_mod_def::GJ5231J_tbo::YoMJXnylSXGJSoJc6NWPAA` |
| Get a Shared Drive Item's createdByUser | GET | `/shares/{{sharedDriveItemId}}/createdByUser` | `conn_mod_def::GJ525AU8kbI::bijV4UF1Ssyu2wjCPHPwsg` |
| Get a Shared Drive Item’s Last Modified By User (from Shares) | GET | `/shares/{{sharedDriveItemId}}/list/lastModifiedByUser` | `conn_mod_def::GJ520et213Q::Qp01D5L4Ry-N_lx66Bp50A` |
| Get a Shared Drive Item’s lastModifiedByUser (via shares) | GET | `/shares/{{sharedDriveItemId}}/lastModifiedByUser` | `conn_mod_def::GJ525QYzCAU::Mw3ChBVGT8-LGdMyEQSuGg` |
| Get a Shared Drive Item’s listItem | GET | `/shares/{{sharedDriveItemId}}/listItem` | `conn_mod_def::GJ523zM6KVY::llEZKc-1QR6Jqm51b0B3uA` |

41 more Shares actions are available through search.

### Drives

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Drive by ID | GET | `/drives/{{driveId}}` | `conn_mod_def::GJ52LbR9Sfc::_6i3-zS2TJKW5KXrq0ZgLA` |
| Get a Drive from a Shared Drive Item's List | GET | `/shares/{{sharedDriveItemId}}/list/drive` | `conn_mod_def::GJ520TXaN1U::Bp16tCK-QKGL2PX2EeQFPg` |
| Get a Drive Root createdByUser serviceProvisioningErrors Count | GET | `/drives/{{driveId}}/root/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52Xcl-9D8::nL-RyJe0RG6-Q6BVQ3lKoQ` |
| Get a Drive Root Item's createdByUser | GET | `/drives/{{driveId}}/root/createdByUser` | `conn_mod_def::GJ52UWnZUvo::t3IJ36pyQmOSH31Vj5hSxw` |
| Get a Drive Root Item’s lastModifiedByUser | GET | `/drives/{{driveId}}/root/lastModifiedByUser` | `conn_mod_def::GJ52VgL4gvY::Z2sWWxULQSyIZtiWPsI2HA` |
| Get a Drive Root Last Modified By User’s Mailbox Settings | GET | `/drives/{{driveId}}/root/lastModifiedByUser/mailboxSettings` | `conn_mod_def::GJ52WI6k3BY::h5w9EFVRQgeE1lYD00_d5g` |
| Get a Drive Root List Item CreatedByUser ServiceProvisioningErrors Count | GET | `/drives/{{driveId}}/root/listItem/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52XcqK3ok::0yDKSKBvTTeQth6RJ9ix8Q` |
| Get a Drive Root List Item’s lastModifiedByUser | GET | `/drives/{{driveId}}/root/listItem/lastModifiedByUser` | `conn_mod_def::GJ52VxtDjO8::pdihKoeNTmeUPP88mRG6Rg` |
| Get a Drive's createdByUser | GET | `/drives/{{driveId}}/createdByUser` | `conn_mod_def::GJ52hh53qs0::nTJbMKHQQciw-_4nzgjDDQ` |
| Get a Drive's createdByUser serviceProvisioningErrors Count | GET | `/drives/{{driveId}}/createdByUser/serviceProvisioningErrors/$count` | `conn_mod_def::GJ52h2tsIk8::XPOnFROLT4qh29EpmKw5qA` |
| Get a Drive’s Following Count | GET | `/drives/{{driveId}}/following/$count` | `conn_mod_def::GJ52XSiO3zM::zpcIIxP7Qtuj9OzA3w5yNw` |
| Get a Drive's lastModifiedByUser | GET | `/drives/{{driveId}}/lastModifiedByUser` | `conn_mod_def::GJ52huQwFeI::LwCQXlnxSGSZ2taQW6DrxQ` |

40 more Drives actions are available through search.

### ContentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Group Drive List Content Type Publishing Status (isPublished) | GET | `/groups/{{groupId}}/drives/{{driveId}}/list/contentTypes/{{contentTypeId}}/microsoft.graph.isPublished()` | `conn_mod_def::GJ52u0to3OM::wtZwdSfaSu6d6XoSZW92Nw` |
| Check a User Drive List Content Type Publishing Status (isPublished) | GET | `/users/{{userId}}/drives/{{driveId}}/list/contentTypes/{{contentTypeId}}/microsoft.graph.isPublished()` | `conn_mod_def::GJ53ICvGY9U::OSFoz43mTdWXfrJctRFYvQ` |
| Get a Base Type for a Shared Drive Item’s List Content Type | GET | `/shares/{{sharedDriveItemId}}/list/contentTypes/{{contentTypeId}}/baseTypes/{{contentTypeId1}}` | `conn_mod_def::GJ52zY18E3k::p44ytmgMTlagjTnCnP7wMg` |
| Get a Drive List Content Type Base Type | GET | `/drives/{{driveId}}/list/contentTypes/{{contentTypeId}}/baseTypes/{{contentTypeId1}}` | `conn_mod_def::GJ52dd1hW5A::CFGqKRdzRhy4yNQ3YbkLDw` |
| Get a Group Drive List Content Type | GET | `/groups/{{groupId}}/drives/{{driveId}}/list/contentTypes/{{contentTypeId}}` | `conn_mod_def::GJ52mhtRB7g::dHA8Egc0Rq2Ijo-guxvwWg` |
| Get a Group Drive List Content Type Base Type | GET | `/groups/{{groupId}}/drives/{{driveId}}/list/contentTypes/{{contentTypeId}}/baseTypes/{{contentTypeId1}}` | `conn_mod_def::GJ52lbc_esI::oZDcPh8tQJ2lhcNagGyZJw` |
| Get a Group Drive List Content Type’s Base Content Type | GET | `/groups/{{groupId}}/drives/{{driveId}}/list/contentTypes/{{contentTypeId}}/base` | `conn_mod_def::GJ52lR8D_cA::p2ziWF-rS4y6Msm6qo06kA` |
| Get a Shared Drive Item Content Type’s Base Content Type | GET | `/shares/{{sharedDriveItemId}}/list/contentTypes/{{contentTypeId}}/base` | `conn_mod_def::GJ52zW5JZas::6r9UWiO7RFStqSfiHiYomQ` |
| Get a User Drive List Content Type | GET | `/users/{{userId}}/drives/{{driveId}}/list/contentTypes/{{contentTypeId}}` | `conn_mod_def::GJ52-ryF1Zo::VmkBT49uTvWpLeg8PmVqcg` |
| Get a User Drive List Content Type Base | GET | `/users/{{userId}}/drives/{{driveId}}/list/contentTypes/{{contentTypeId}}/base` | `conn_mod_def::GJ529SEIvb8::crrshQfARGucUskO5-lx0g` |
| Get a User Drive List Content Type Base Type | GET | `/users/{{userId}}/drives/{{driveId}}/list/contentTypes/{{contentTypeId}}/baseTypes/{{contentTypeId1}}` | `conn_mod_def::GJ529hTORN4::Nhy5FSCLSS-tv3JQWNUfRQ` |
| Get a User Drive List Content Types Count | GET | `/users/{{userId}}/drives/{{driveId}}/list/contentTypes/$count` | `conn_mod_def::GJ53DMGF6mE::WG3qLAguRFO6KD_fQeNaqQ` |

35 more ContentTypes actions are available through search.

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Drive Item Subscription | GET | `/drives/{{driveId}}/items/{{driveItemId}}/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ52W-pXDtE::-Eg718jbSf2B1DO238W3UQ` |
| Get a Group Drive Item Subscription | GET | `/groups/{{groupId}}/drives/{{driveId}}/items/{{driveItemId}}/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ52qLt7T5k::mj8l81qqSl-c21O0qBPCJQ` |
| Get a Group Drive List Subscription | GET | `/groups/{{groupId}}/drives/{{driveId}}/list/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ52qMXWMHg::qXpYf9bdQ-aJk8Z4rPlCfg` |
| Get a Group Drive Root Subscription | GET | `/groups/{{groupId}}/drives/{{driveId}}/root/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ52qWrM1Qs::-gphT1UPRj-19Zfeq9gOSA` |
| Get a Group Drive Root Subscription Count | GET | `/groups/{{groupId}}/drives/{{driveId}}/root/subscriptions/$count` | `conn_mod_def::GJ52ret7wZs::_oH4S8g9RQqSVTVWrI3ELg` |
| Get a Share's List Subscription | GET | `/shares/{{sharedDriveItemId}}/list/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ521ICiCoU::fwuIZmKnTNS_S-dP1fyDKQ` |

35 more Subscriptions actions are available through search.

This lists 90 of 1514 actions. For anything not here, call `search_one_platform_actions` with platform `one-drive`. The full catalog is at https://www.withone.ai/knowledge/one-drive.

## When a call fails

The error comes from OneDrive, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/one-drive

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
