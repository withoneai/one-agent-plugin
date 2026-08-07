---
name: share-file
description: ShareFile is a secure file sharing and content collaboration solution that supports workflows for document storage, e-signatures, and encrypted file transfer in professional environments. Read and write ShareFile data through One: items, users, shares, accounts, encryptedemails, reports and more, 336 actions with real parameter documentation. Use whenever the user asks to look something up in ShareFile, create or update a record there, or build code against the ShareFile API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: share-file
  generated-from: one-knowledge-base
---

# ShareFile through One

ShareFile is a secure file sharing and content collaboration solution that supports workflows for document storage, e-signatures, and encrypted file transfer in professional environments.

One exposes ShareFile through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `share-file` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ShareFile is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ShareFile account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Item’s Content | GET | `/sf/v3/Items({{id}})/Download` | `conn_mod_def::GJ6ak3UPa7Q::Z3GFM31PSmOInkWb99BM2A` |
| Get a Folder TreeView (Items) | GET | `/sf/v3/Items({{id}})` | `conn_mod_def::GJ6alqnn9pI::Ko5x7fn4RQir0zrcesOLAw` |
| Get a Folder’s Access Info (Effective ACL) | GET | `/sf/v3/Items({{id}})/Info` | `conn_mod_def::GJ6alMMHRm0::7_vUsyOMRZiE2gNAstLXKA` |
| Get an Item by ID | GET | `/sf/v3/Items({{id}})` | `conn_mod_def::GJ6alDsC2vc::2NjDkx76QNOXA4Xpt8kN_Q` |
| Get an Item by ID or Tree View | GET | `/sf/v3/Items({{id}})` | `conn_mod_def::GJ6alFQuIjE::kqjwfBvqRjCR-tecFGiHcg` |
| Get an Item by Path | GET | `/sf/v3/Items/ByPath` | `conn_mod_def::GJ6albo-_qo::Jz5hN_NLTWqNy1FMOU7vtw` |
| Get an Item by Relative Path from an ID | GET | `/sf/v3/Items({{id}})/ByPath` | `conn_mod_def::GJ6alZ93ZsU::eI5-5gv_RFSU41EY-jUAnQ` |
| Get an Item Stream’s Versions (Stream) | GET | `/sf/v3/Items({{id}})/Stream` | `conn_mod_def::GJ6almtnzOQ::xIZ0b9rCQhyOOdZMg8SszQ` |
| Get an Item’s Access Control List (ACL) | GET | `/sf/v3/Items({{id}})/AccessControls` | `conn_mod_def::GJ6aefE4SBg::9LOkbsbGTnCdA9yfiLVczA` |
| Get an Item’s Breadcrumbs | GET | `/sf/v3/Items({{id}})/Breadcrumbs` | `conn_mod_def::GJ6ak7PJrSM::xicivrieS6KwW0qLNS1yBw` |
| Get an Item’s Parent | GET | `/sf/v3/Items({{id}})/Parent` | `conn_mod_def::GJ6alVh3WaE::05c5rvEgS0WWinaBaBB8eg` |
| Get an Item’s Protocol Links | GET | `/sf/v3/Items({{id}})/ProtocolLinks({{platform}})` | `conn_mod_def::GJ6alZLoqFo::hSN3yN_xSw-v0XH9X9DGMw` |

35 more Items actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User (by ID, by Email Address, or Current User) | GET | `/sf/v3/Users` | `conn_mod_def::GJ6ar4Ho3Qo::0iRrpWJJSX6xgu2w3iC4vA` |
| Get a User (by ID, Email, or Current User) | GET | `/sf/v3/Users({{id}})` | `conn_mod_def::GJ6ar1V948g::HaUVXeaPTui_kSeZayGPAA` |
| Get a User’s FileBox Children | GET | `/sf/v3/Users({{id}})/Box` | `conn_mod_def::GJ6asCT0F6A::fs4qSpCTT0-7AYAlX3VFcQ` |
| Get a User’s FileBox Folder | GET | `/sf/v3/Users({{id}})/FileBox` | `conn_mod_def::GJ6asMs_BiI::dx5UARcPSB-UI1h9rQTh9A` |
| Get a User’s Home Folder | GET | `/sf/v3/Users/{{userId}}/HomeFolder` | `conn_mod_def::GJ6arUt2nG0::mEuzWl3ZTTeKKZrvuc_VuQ` |
| Get a User's Inbox Metadata | GET | `/sf/v3/Users/InboxMetadata` | `conn_mod_def::GJ6arUahu7s::vghqMf3SSWqC32PxaVJH-A` |
| Get a User's Preferences | GET | `/sf/v3/Users/Preferences` | `conn_mod_def::GJ6asChnpkw::k6fDPJJoQ46bTSrzQG6CVg` |
| Get a User’s Preferences | GET | `/sf/v3/Users({{id}})/Preferences` | `conn_mod_def::GJ6asCou9Hg::WMNOjtNyTBaaKFoW8iY-Pg` |
| Get a User’s Security Settings | GET | `/sf/v3/Users({{id}})/Security` | `conn_mod_def::GJ6asBioLcE::FTofuZ82Qd6ITC0bwagneA` |
| Get a User's Sent Messages | GET | `/sf/v3/Users({{userId}})/SentMessages` | `conn_mod_def::GJ6ar3dsNOU::4OPSTnV0Qki7Q5tiA_jPug` |
| Get a User’s Top Folders | GET | `/sf/v3/Users({{id}})/TopFolders` | `conn_mod_def::GJ6asMBMIAE::acSHsjdnR6iQFioTVG_gRw` |
| Get Current User Info | GET | `/sf/v3/Users/Info` | `conn_mod_def::GJ6arJFXJec::ZxvK7EzuQwS5C2jNJC4eTg` |

31 more Users actions are available through search.

### Shares

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Share’s Items | GET | `/sf/v3/Shares({{shareId}})/Download` | `conn_mod_def::GJ6apEPW1Hw::11k4Sj0uTQ609dszDT0zqQ` |
| Download a Share’s Items | GET | `/sf/v3/Shares({{shareId}})/Download` | `conn_mod_def::GJ6apEDmIss::JAaqKnAbRcuhByLpJfKjNg` |
| Download a Share’s Items (or a Specific Top-Level Item) | GET | `/sf/v3/Shares({{shareId}})/Download` | `conn_mod_def::GJ6apO0Y3y0::JVKM5jrTSHapNa6lStAVLQ` |
| Download a Share’s Items (or a Specific Top-Level Item) | GET | `/sf/v3/Shares({{shareId}})/Download({{itemId}})` | `conn_mod_def::GJ6apTY__7A::HQ-dY4CHSLKoa3nFFj0yOQ` |
| Download Items from a Share for a Recipient (with Alias) | GET | `/sf/v3/Shares({{shareId}})/Recipients({{aliasid}})/DownloadWithAlias` | `conn_mod_def::GJ6apF4RIQc::oueTcimdTl6MDMNmn0AnAA` |
| Get a Recipient’s Shares Inbox | GET | `/sf/v3/Shares/Inbox({{id}})` | `conn_mod_def::GJ6apYRO4Xs::4Xm9LmM7TEiWzDHKmaw2dg` |
| Get a Recipient’s Shares Inbox | GET | `/sf/v3/Shares/Inbox` | `conn_mod_def::GJ6apPA0O60::dCSJvy5ARlSdVIQQ43SiNA` |
| Get a Share | GET | `/sf/v3/Shares({{id}})` | `conn_mod_def::GJ6ap4gFn7g::qIJ69C-lQ8aRwiOFUJ9C3w` |
| Get a Share Item Thumbnail | GET | `/sf/v3/Shares({{shareid}})/Items({{itemid}})/Thumbnail` | `conn_mod_def::GJ6apxKwNmQ::MDmtjGeTTsyWuiG6giCuLg` |
| Get a Share Recipient’s Sent Message Content | GET | `/sf/v3/Shares({{shareId}})/Recipients({{aliasId}})/Message` | `conn_mod_def::GJ6apwDOfYw::fj2VAOHJSomMK55zN_uPYg` |
| Get a Share’s Encrypted Email | GET | `/sf/v3/Shares({{id}})/EncryptedEmail` | `conn_mod_def::GJ6ahs5c8wI::Me5QDskpREO7vRDuE3e8wQ` |
| Get a Share’s Recipients | GET | `/sf/v3/Shares({{id}})/Recipients` | `conn_mod_def::GJ6apmX1F4E::o1lRSU2-SsSnZz1d4lAXDQ` |

15 more Shares actions are available through search.

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if WebPop Is Required for an Account | GET | `/sf/v3/Accounts/RequireWebPop` | `conn_mod_def::GJ6aerHaEYk::kGtQHRfoQW2H-jxDkL6AkA` |
| Check Whether a ShareFile Subdomain Is Required for an Account | GET | `/sf/v3/Accounts/RequireSubdomain` | `conn_mod_def::GJ6aetNBHlw::FQdljk6HR1KPmdTG2BVe7g` |
| Get Account Mobile Security Settings | GET | `/sf/v3/Accounts/MobileSecuritySettings` | `conn_mod_def::GJ6afIzi7cg::lf5o7OqOSfqkWFGyE3MdVQ` |
| Get Account Preferences | GET | `/sf/v3/Accounts/Preferences` | `conn_mod_def::GJ6afMiu_lY::p6Ewz1mGQGe9H_IrXYQf3g` |
| Get Account Product Defaults | GET | `/sf/v3/Accounts/ProductDefaults` | `conn_mod_def::GJ6afZJqY9M::9NVsegOhTnKT6_h2FxsMSw` |
| Get an Account’s Folder Access Control Domain List | GET | `/sf/v3/Accounts/FolderAccessControlDomains` | `conn_mod_def::GJ6afvti85U::-NZddyY1Ro6A9_LZOzQ7zQ` |
| Get an Account’s Single Sign-On (SSO) Configuration | GET | `/sf/v3/Accounts/SSO` | `conn_mod_def::GJ6afYHaMY8::xg0iEuWRT62ZYFPkp0Xu7g` |
| Get Current Account (by Account ID) | GET | `/sf/v3/Accounts({{id}})` | `conn_mod_def::GJ6afVBawmk::wA7QQOmBSw6OMpUEyXY4AQ` |
| Get Current Account (by Subdomain) | GET | `/sf/v3/Accounts` | `conn_mod_def::GJ6afUnXAsA::eCPLeEc_RLe2AJxCPvknLQ` |
| Get SSO Info for an Account Subdomain | GET | `/sf/v3/Accounts/SSOInfo` | `conn_mod_def::GJ6afgwvE5I::ookBbxtgRnedVVObRsc8qQ` |
| Get Tenant Zone Usage for an Account | GET | `/sf/v3/Accounts/Tenants/ZoneUsage` | `conn_mod_def::GJ6afsvjRiY::0juwve9xRZeoqPkWCMnsvg` |
| Create a One-Time Web App Admin Login URI for an Account | POST | `/sf/v3/Accounts/WebAppAdmin` | `conn_mod_def::GJ6aeqsEfLE::zDN_pn-eRSiun723rahybQ` |

3 more Accounts actions are available through search.

### EncryptedEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Encrypted Email’s Message | GET | `/sf/v3/EncryptedEmails/{{id}}/Message` | `conn_mod_def::GJ6ahsd1neA::ajyWWrF1Qae_SSzWwpIcIw` |
| Get an Encrypted Email by ID | GET | `/sf/v3/EncryptedEmails({{id}})` | `conn_mod_def::GJ6ahr5Kfcg::6R64lGtuQQO2nyizPxMUSw` |
| Get an Encrypted Email by ID | GET | `/sf/v3/EncryptedEmails({{id}})` | `conn_mod_def::GJ6ahrlwM2o::1OOf-SCdQ72oA1hyVC1DUA` |
| Get an Encrypted Email Thread’s Messages | GET | `/sf/v3/EncryptedEmails({{id}})/Thread` | `conn_mod_def::GJ6ah9NA8pA::8RpeDsGQQFyChJWFrtUJIQ` |
| Get an Encrypted Email’s Message Thread | GET | `/sf/v3/EncryptedEmails({{id}})/Thread` | `conn_mod_def::GJ6aiI6U2cI::pnlLDCDQQ1iLHtylZ3nxsg` |
| Authorize an Encrypted Email | POST | `/sf/v3/EncryptedEmails({{id}})/Authorize` | `conn_mod_def::GJ6ahjy9tEg::yqHwEkD2T3K4mtg22ICRzA` |
| Authorize an Encrypted Email | POST | `/sf/v3/EncryptedEmails/{{id}}/Authorize` | `conn_mod_def::GJ6ahakbhPA::GqoyEfosT2Gbg1hD_g-eFA` |
| Create an Encrypted Email | POST | `/sf/v3/EncryptedEmails` | `conn_mod_def::GJ6ahbcnKBM::EKuPYWkARA62QaJ4qKC9kQ` |
| Delete an Encrypted Email | DELETE | `/sf/v3/EncryptedEmails({{id}})` | `conn_mod_def::GJ6ahwKdmd0::-efoghn7TSK4mGDSZFyUHw` |
| Reply All to an Encrypted Email (Create Reply Draft) | POST | `/sf/v3/EncryptedEmails({{id}})/ReplyAll` | `conn_mod_def::GJ6ah3uhZ-8::qicxINPBRmyOjNna9IXbuw` |
| Reply to an Encrypted Email (Create Reply Draft) | POST | `/sf/v3/EncryptedEmails({{id}})/Reply` | `conn_mod_def::GJ6ah3qqAAY::iGqTTu-sSAyT4b7hYiORMA` |
| Send an Encrypted Email | POST | `/sf/v3/EncryptedEmails({{id}})/Send` | `conn_mod_def::GJ6ah3t59JE::jxuFVKmxQeCs05CxTivHVA` |

1 more EncryptedEmails actions are available through search.

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Report by ID | GET | `/sf/v3/Reports({{id}})` | `conn_mod_def::GJ6aoEr2kJ0::uEgQS_AWSP6X6nWr5nmB8A` |
| Get a Report Record by ID | GET | `/sf/v3/Reports/Record({{id}})` | `conn_mod_def::GJ6aoGQhoMI::0B_V93IXS0GqLYOz8MK48Q` |
| Get a Report Record’s JSON Data | GET | `/sf/v3/Reports/Records({{id}})/GetJsonData` | `conn_mod_def::GJ6any5_D5Q::fru24JeIRUq5ZMcRXMxJEA` |
| Get a Report’s Records | GET | `/sf/v3/Reports({{id}})/Records` | `conn_mod_def::GJ6an1RpM40::MB6kNq9zRYSDjD4egwokOw` |
| Get Recent Reports for the Current Account | GET | `/sf/v3/Reports/Recent` | `conn_mod_def::GJ6antFq9xs::G4g8d71qRNauFD3Ypskd3g` |
| Get Reports for the Current Account | GET | `/sf/v3/Reports` | `conn_mod_def::GJ6an-dD5c0::aeZk5MWmRRSmnQl5oW94Hg` |
| Run a Report | GET | `/sf/v3/Reports/{{id}}/Run` | `conn_mod_def::GJ6aoNjsbqI::eZ1dKS9OQlyT--u6nt8zuA` |
| Create a Report | POST | `/sf/v3/Reports` | `conn_mod_def::GJ6anYs4xJI::vM65ti_5Q6izAMW7ZP9JPw` |
| Delete a Report | DELETE | `/sf/v3/Reports/{{id}}` | `conn_mod_def::GJ6anwpogic::vT1PVMYqTqiP-TSlahg1_g` |
| Get a Report Preview Location | POST | `/sf/v3/Reports({{reportId}})/Preview` | `conn_mod_def::GJ6ans4mDac::4lqHdyp0TvaYuaTCJcKkOg` |
| Move a Report to a Folder | POST | `/sf/v3/Reports({{reportId}})/Move` | `conn_mod_def::GJ6aoODoIFU::CPFG_68nSsub1n2l_qc_LQ` |
| Update a Report | PATCH | `/sf/v3/Reports` | `conn_mod_def::GJ6aoOypJWo::PyvUlmHIScC-j2suK4J46Q` |

### ConnectorGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connector Group by Provider | GET | `/sf/v3/ConnectorGroups/ByProvider` | `conn_mod_def::GJ6ahCTcid0::jD4d_pJ9TXWRdSVWiS0AJA` |
| Get a Connector Group by Service ID | GET | `/sf/v3/ConnectorGroups({{id}})` | `conn_mod_def::GJ6ahD4V6rQ::dOFyBNDKTDWGruZTfQef2g` |
| Get a Connector Group’s Symbolic Links (Children) | GET | `/sf/v3/ConnectorGroups({{id}})/Children` | `conn_mod_def::GJ6almSwBbw::scs_UCDSSwSeEFOcxjg9KQ` |
| Get a Connector Group’s Zone by Service ID and Zone ID | GET | `/sf/v3/ConnectorGroups({{serviceid}})/Zones({{zoneid}})` | `conn_mod_def::GJ6ag9uckgE::pX8N90cuRI2Ws-FOqH1bMA` |
| Get Connector Groups in a Zone | GET | `/sf/v3/ConnectorGroups/GetByZone({{zoneid}})` | `conn_mod_def::GJ6ag8v4W64::HXoIN2bhRmePjNnVhQZiAg` |
| List a Connector Group’s Storage Centers in a Zone | GET | `/sf/v3/ConnectorGroups({{id}})/Zones({{zoneid}})/StorageCenters` | `conn_mod_def::GJ6ahLSYDsA::5qvVfHOqRdWm866hdv71MQ` |
| List Connector Groups in the Account | GET | `/sf/v3/ConnectorGroups` | `conn_mod_def::GJ6agwFp8PY::GvukRV1QT7evqKitCqqjCA` |
| Add a Connector Group to a Storage Center (in a Zone) | POST | `/sf/v3/ConnectorGroups({{id}})/Zones({{zoneid}})/StorageCenters` | `conn_mod_def::GJ6ag14tGm0::gRLvtPfpQ0meQassEhuD2g` |
| Create a Connector Group Associated With a Zone | POST | `/sf/v3/ConnectorGroups` | `conn_mod_def::GJ6agxR1R_E::JipHYPk2RQasVzvdPMYK9w` |
| Remove a Connector Group | DELETE | `/sf/v3/ConnectorGroups({{id}})` | `conn_mod_def::GJ6ahLUEArs::8XWem36aRpODreoSXg54NQ` |
| Remove a Connector Group’s Zone Association | DELETE | `/sf/v3/ConnectorGroups({{parentid}})/Zones({{id}})` | `conn_mod_def::GJ6ahLMLByM::6fevN59hQVS1lKsZc7O19w` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Group’s Contacts as a Document | GET | `/sf/v3/Groups({{id}})/ExportDocument` | `conn_mod_def::GJ6ajt2Z9FQ::a0heIvMuTI-4Obo1z1c4nw` |
| Get a Group by ID | GET | `/sf/v3/Groups({{id}})` | `conn_mod_def::GJ6ajuMuEQw::CqHc8mGSQYSBmNKnADU0_g` |
| List a Group’s Contacts | GET | `/sf/v3/Groups({{id}})/Contacts` | `conn_mod_def::GJ6aj1bPm9U::6VZzTNhESMiAsug3vRcG9w` |
| List Distribution Groups | GET | `/sf/v3/Groups` | `conn_mod_def::GJ6aj4FBww8::JCnXgFPqQFefFr8UyfVhDA` |
| Retrieve an Authenticated User’s Groups | GET | `/sf/v3/Users({{id}})/Groups` | `conn_mod_def::GJ6aj84cZas::7mp4_qquR_WYlDM8GzF91A` |
| Add Contacts to a Group | POST | `/sf/v3/Groups({{id}})/Contacts` | `conn_mod_def::GJ6ajpJpvpE::OhrU_Sb7T4ag-ngfrrm1Wg` |
| Create a Group | POST | `/sf/v3/Groups` | `conn_mod_def::GJ6ajo3SSo8::t4tEfkidSe-4oHR5yFdfXQ` |

3 more Groups actions are available through search.

This lists 90 of 336 actions. For anything not here, call `search_one_platform_actions` with platform `share-file`. The full catalog is at https://www.withone.ai/knowledge/share-file.

## When a call fails

The error comes from ShareFile, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/share-file

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
