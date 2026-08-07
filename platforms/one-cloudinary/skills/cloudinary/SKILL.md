---
name: cloudinary
description: Cloudinary is a cloud-based media management platform that enables developers and teams to store, optimize, transform and deliver images and videos at scale through APIs, automation and global CDN delivery. Read and write Cloudinary data through One: assets, resources, livestreams, usergroups, metadatafields, asset and more, 157 actions with real parameter documentation. Use whenever the user asks to look something up in Cloudinary, create or update a record there, or build code against the Cloudinary API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: cloudinary
  generated-from: one-knowledge-base
---

# Cloudinary through One

Cloudinary is a cloud-based media management platform that enables developers and teams to store, optimize, transform and deliver images and videos at scale through APIs, automation and global CDN delivery.

One exposes Cloudinary through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `cloudinary` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Cloudinary is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Cloudinary account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Assets by Asset IDs | GET | `/resources/by_asset_ids` | `conn_mod_def::GJe5UsKawZg::xQEmo02sQJ6oYR0-6KjiIQ` |
| List Assets by Contextual Metadata Key | GET | `/resources/{{resource_type}}/context` | `conn_mod_def::GJe5U93mgFQ::JNy7yX11Qn-U6_LvrGUlWg` |
| List Assets in an Asset Folder (Direct Children Only) | GET | `/resources/by_asset_folder` | `conn_mod_def::GJe5Ukkovx8::aeJobHYrSrasqSEFGiizEA` |
| Search Assets (Resources) | GET | `/resources/search` | `conn_mod_def::GJe5VfJ9Ljk::n5DZVMD5TqSSwDWGM1vAlg` |
| Delete Assets by Tag | DELETE | `/resources/{{resource_type}}/tags/{{tag}}` | `conn_mod_def::GJe5W_Lcdsw::_RQaiGlkQt-SieeP-nKHWg` |
| Manage Contextual Metadata for Assets (Add or Remove All) | POST | `/{{resource_type}}/context` | `conn_mod_def::GJe5OTT41wc::0cYY1aE_S_eOAEye5woFwA` |
| Permanently Delete an Asset (by Asset ID) | POST | `/image/destroy` | `conn_mod_def::GJe5Omoj4Bk::-S4r68KvRim5INyGPPMLaQ` |
| Rename an Asset (by Resource Type) | POST | `/{resource_type}/rename` | `conn_mod_def::GJe5UUi_kC8::UtBUQtC9QiaaPmgTB1vWpA` |
| Restore Backed Up Resources (Assets) | POST | `/resources/{{resource_type}}/{{type}}/restore` | `conn_mod_def::GJe5WG-GsrE::RIg5VHbaRk2nFGnmrNdC7w` |
| Unrelate an Asset from Other Assets (by Asset ID) | DELETE | `/resources/related_assets/{{asset_id}}` | `conn_mod_def::GJe5WiyCPDg::-PUIKm-rTBOFkrGF5v6biw` |
| Update an Asset's Attributes (by Asset ID) | PUT | `/resources/{{asset_id}}` | `conn_mod_def::GJe5Vy0GKeQ::ZC5XhbulRcS4XhV1qHW_qQ` |
| Update an Asset's Attributes (by Public ID) | POST | `/resources/{{resource_type}}/{{type}}/{{public_id}}` | `conn_mod_def::GJe5V4sIZkw::rpjPqXawS42moNl9Y6JX3Q` |

1 more Assets actions are available through search.

### Resources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Resources (Assets) by Tag | GET | `/resources/{{resource_type}}/tags/{{tag}}` | `conn_mod_def::GJe5U2dcZcs::-AT39LPARy-hkWhmr2pzoA` |
| List Resources by Moderation Status | GET | `/resources/{resource_type}/moderations/{moderation_kind}/{status}` | `conn_mod_def::GJe5VIIl0Bc::S7CQNtl2RF6n0G1n0UKt9A` |
| List Resources in a Last Access Report | GET | `/resources/last_access_report/{{report_id}}` | `conn_mod_def::GJe5XmzaDPk::DTtYkM5JRgmk36ElEM2dzw` |
| List Uploaded Resources (Assets) | GET | `/resources/{resource_type}/{type}` | `conn_mod_def::GJe5UfC_Z80::Z44YSsuHSRapHEF-sO8GzQ` |
| Run a Visual Search for Resources (Images) | GET | `/resources/visual_search` | `conn_mod_def::GJe5VqrAOZA::wb9RT6nZQHmDmNI4YmSytw` |
| Delete Resources (Assets) by Type and Delivery Type | DELETE | `/resources/{{resource_type}}/{{type}}` | `conn_mod_def::GJe5W3NnaLY::0PkxCs0mQWagHSOvx-awfw` |
| Delete Resources by Asset IDs | DELETE | `/resources` | `conn_mod_def::GJe5Ww34KJY::_Dd0zZxFTkq9S5YvT824Yg` |
| Restore Resources by Asset IDs | POST | `/resources/restore` | `conn_mod_def::GJe5WAmIPtQ::HYLviLdKSfC2crARyGLYgQ` |

### LiveStreams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Live Stream | GET | `/live_streams/{{liveStreamId}}` | `conn_mod_def::GJe5QiZTbMU::nli5RhcTR-m207Shw5Ie0w` |
| List Live Streams | GET | `/live_streams` | `conn_mod_def::GJe5QWvQ1Nc::iKdfxAH2RwCC11EpMgZCIA` |
| Create a Live Stream | POST | `/live_streams` | `conn_mod_def::GJe5QcG9FzU::wglMWLdORNOw9aw2APrjlg` |
| Delete a Live Stream | DELETE | `/live_streams/{{liveStreamId}}` | `conn_mod_def::GJe5Qt2W8D8::a-6hkXWyRpOJzUsrOnl1Dw` |
| Manually Activate a Live Stream | POST | `/live_streams/{{liveStreamId}}/activate` | `conn_mod_def::GJe5Q0GqdP0::VDfoel3TRQmIwRlGAgCxeg` |
| Manually Idle a Live Stream | POST | `/live_streams/{{liveStreamId}}/idle` | `conn_mod_def::GJe5RAuLShY::3GF5D9amTsmd6j3aoLr_jg` |
| Update a Live Stream (Video) | PATCH | `/live_streams/{{liveStreamId}}` | `conn_mod_def::GJe5Qoappj0::5wK-IztUS1Wi9mAew-42pA` |

### UserGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Group (Provisioning Account) | GET | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/user_groups/{{GROUP_ID}}` | `conn_mod_def::GJe5cXBgM28::GXIiyeUTT-6dB0WhZah6Lw` |
| List an Account’s User Groups | GET | `/provisioning/accounts/{{ACCOUNTID}}/user_groups` | `conn_mod_def::GJe5cIB9dio::gj6YrZCWR3KcZrVzDgXS4Q` |
| Add a User to an Account’s User Group | POST | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/user_groups/{{GROUP_ID}}/users/{{USER_ID}}` | `conn_mod_def::GJe5cwxf5-8::6XxMaroqTF6iQeTzpAdGmw` |
| Create a User Group for an Account | POST | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/user_groups` | `conn_mod_def::GJe5cOjHbhk::_kx4kTl_Q_qSC5Hw0ZHiaA` |
| Delete a User Group (Account Scoped) | DELETE | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/user_groups/{{GROUP_ID}}` | `conn_mod_def::GJe5ci4IdSk::-AVQQBpFTu6exXJWvabnLQ` |
| Remove a User from an Account User Group | DELETE | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/user_groups/{{GROUP_ID}}/users/{{USER_ID}}` | `conn_mod_def::GJe5c3Y_vlc::mMbsMIh8Q96EodUpJyvu6g` |
| Update an Account’s User Group | PUT | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/user_groups/{{GROUP_ID}}` | `conn_mod_def::GJe5ccQphdw::wkUI_FRATtCnK8Omfpp8PA` |

### MetadataFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Metadata Field Definitions | GET | `/metadata_fields` | `conn_mod_def::GJe5RuWmvF8::-_p59NV_TEigc_3SEJcOug` |
| Delete (Block) Datasource Entries for a Metadata Field | DELETE | `/metadata_fields/{{external_id}}/datasource` | `conn_mod_def::GJe5SyGn8eE::MohahyaDRDeZMrXU1mrKnQ` |
| Delete a Metadata Field Definition | DELETE | `/metadata_fields/{{external_id}}` | `conn_mod_def::GJe5SrFk4M4::IdPG0ELDR860kLAkXtWH_A` |
| Reorder a Metadata Field’s Datasource Values | PUT | `/metadata_fields/{{external_id}}/datasource/order` | `conn_mod_def::GJe5SUr5REk::jm_skToYTaupVF3PmNEA9A` |
| Restore a Metadata Field’s Datasource Entries | POST | `/metadata_fields/{{external_id}}/datasource_restore` | `conn_mod_def::GJe5SNK74YE::CBPsUS2mQIqhIAwxJ8NJdw` |
| Update a Metadata Field Definition | PUT | `/metadata_fields/{{external_id}}` | `conn_mod_def::GJe5Sccb1aE::2RnpwpN9Q7eTi4fIOEVhYA` |

### Asset

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Asset (Resource) Details | GET | `/resources/{{resource_type}}/{{type}}/{{public_id}}` | `conn_mod_def::GJe5VXoTWmQ::lb-GfxWBQly-EAm-Vqd7yQ` |
| Permanently Delete an Asset (Destroy) by Resource Type and Public ID | POST | `/{{resource_type}}/destroy` | `conn_mod_def::GJe5OtCpZRI::Go10WJ0sSKeSQ2g7d0W_7g` |
| Update (Explicit) an Existing Asset | POST | `/{resource_type}/explicit` | `conn_mod_def::GJe5O5LoKJ0::xCkLTSE5T2KJbmmFiRUCFA` |
| Upload an Asset to a Cloudinary Product Environment | POST | `/{resource_type}/upload` | `conn_mod_def::GJe5aXRcIYA::nH0FaddTTkaT85tvyeNmYQ` |
| Upload an Asset to a Product Environment | POST | `/{resource_type}/upload` | `conn_mod_def::GJe5ahd6xyc::cbSGqrFcRTaHgYWb3D7gFg` |

### LiveStreamOutputs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Live Stream Output | GET | `/live_streams/{{liveStreamId}}/outputs/{{liveStreamOutputId}}` | `conn_mod_def::GJe5RVuViV4::Bcoi3QiTS2q90P150d6K8Q` |
| List a Live Stream’s Outputs | GET | `/live_streams/{{liveStreamId}}/outputs` | `conn_mod_def::GJe5RIVZOLk::_rkhhYCzSIysXohZzLquMQ` |
| Create a Live Stream Output for a Live Stream | POST | `/live_streams/{{liveStreamId}}/outputs` | `conn_mod_def::GJe5RPprkDU::hTRu0bH_TISUN97rVG3FgA` |
| Delete a Live Stream Output | DELETE | `/live_streams/{{liveStreamId}}/outputs/{{liveStreamOutputId}}` | `conn_mod_def::GJe5Rhh-dH4::3G2YeOO5RA6s40lHTBw0XQ` |
| Update a Live Stream's Output | PATCH | `/live_streams/{{liveStreamId}}/outputs/{{liveStreamOutputId}}` | `conn_mod_def::GJe5RbBu6Bg::UTbP9KtDSAa8SjFaU_uo6Q` |

### StreamingProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Streaming Profile by Name | GET | `/streaming_profiles/{{name}}` | `conn_mod_def::GJe5X6EB8bg::1-6duo4YRsmTEe2gDdfv5A` |
| List Streaming Profiles | GET | `/streaming_profiles` | `conn_mod_def::GJe5XxtfWts::RmJRUoSCRH6isheCmbPzQw` |
| Create a Custom Streaming Profile | POST | `/streaming_profiles` | `conn_mod_def::GJe5YB1PAic::hDNEPyZOTvuSQFesVFc7iQ` |
| Delete a Streaming Profile | DELETE | `/streaming_profiles/{{name}}` | `conn_mod_def::GJe5YQlPGNo::8awVeW8hRay1QMHN-amBQw` |
| Update a Streaming Profile | PUT | `/streaming_profiles/{{name}}` | `conn_mod_def::GJe5YKzPl3E::_TatF1eTSFWKsQ71kjgoyQ` |

### AssetTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Asset Tags by Resource Type | GET | `/tags/{{resource_type}}` | `conn_mod_def::GJe5Y16k4rY::ermSrpyyQKuLI0rv7q3DoQ` |
| Manage Asset Tags (Add/Remove/Remove All/Replace) | POST | `/{resource_type}/tags` | `conn_mod_def::GJe5YeRygq8::XDJpeO8tQsmKftUc_lrVNQ` |
| Manage Asset Tags (Add/Remove/Remove All/Replace) | POST | `/{resource_type}/tags` | `conn_mod_def::GJe5YsgWf-o::rRmyfQOKTpOJt2s6WCsX1g` |
| Manage Asset Tags (Add/Remove/Replace) | POST | `/{resource_type}/tags` | `conn_mod_def::GJe5YXXqpi8::bccoJr8MSNOxNvSOoc9C0w` |
| Manage Asset Tags (Add/Remove/Replace) for a Resource Type | POST | `/{resource_type}/tags` | `conn_mod_def::GJe5YkcUWE0::9tJj_KzWQE-CJE9hlRMLsw` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Folder’s Subfolders | GET | `/folders/{{folder}}` | `conn_mod_def::GJe5PN5Wt0A::wOYnoAkZRTutu8L0mHEs0g` |
| List Root Folders | GET | `/folders` | `conn_mod_def::GJe5PHQM5WE::4indSeGHTFe5o0gePIrxtg` |
| Search Folders in a Cloudinary Account | GET | `/folders/search` | `conn_mod_def::GJe5PVL21z8::dIx84N1lS12PWogSlHb0_g` |
| Delete an Empty Folder | DELETE | `/folders/{{folder}}` | `conn_mod_def::GJe5PqeY6QY::nsqTueP2RLqlxe2g47YUnQ` |

### Triggers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Triggers | GET | `/triggers` | `conn_mod_def::GJe5Z21003M::u1gxw9gaS1Skjs-xJCWOVg` |
| Create a Trigger (Webhook Notification) | POST | `/triggers` | `conn_mod_def::GJe5aBwXARw::Ci2rTy2wTYG4YcwPZHLoHQ` |
| Delete a Trigger | DELETE | `/triggers/{{id}}` | `conn_mod_def::GJe5aOqs54Q::FYlw3BDaTiexGCGDn9iA4A` |
| Update a Trigger’s Notification URL | PUT | `/triggers/{{id}}` | `conn_mod_def::GJe5aH7Oyxg::GFRvpu-ySy6ZM5gA7P95hw` |

### UploadMappings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Upload Mappings | GET | `/upload_mappings` | `conn_mod_def::GJe5ao5wSmo::fUCrtV5HSaaRGW9hF7tEsA` |
| Retrieve an Upload Mapping by Folder | GET | `/upload_mappings` | `conn_mod_def::GJe5azJzpA4::DRjoS4AzRG-S2-4ySkZQyA` |
| Create an Upload Mapping (Folder → URL Template) | POST | `/upload_mappings` | `conn_mod_def::GJe5a53z4s0::yVcANIULQ-6dPUUJEPAEyQ` |
| Delete an Upload Mapping by Folder Name | DELETE | `/upload_mappings` | `conn_mod_def::GJe5bT5hd9g::gXo6oUbuSCStWebq7AYUTA` |

### UploadPresets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Upload Presets | GET | `/upload_presets` | `conn_mod_def::GJe5bbi0bqQ::SIyr0T5gQTy0jKPRtz_o3A` |
| Retrieve an Upload Preset's Details | GET | `/upload_presets/{{name}}` | `conn_mod_def::GJe5bip7CJY::lEnskO2bTgizlhDeKH0mcw` |
| Create an Upload Preset | POST | `/upload_presets` | `conn_mod_def::GJe5bnml4UE::LHvmalyNSSeWJqCDE2PEnA` |
| Delete an Upload Preset | DELETE | `/upload_presets/{{name}}` | `conn_mod_def::GJe5b2nxyyo::qO1BBlIgSgeFxbcxtj8lfg` |

### Archive

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate an Archive of Assets (by Resource Type) | POST | `/{resource_type}/generate_archive` | `conn_mod_def::GJe5PxFNVtQ::CFclJPJXQyGn_xRUwhJbcg` |
| Generate an Archive of Assets (by Resource Type) | POST | `/{resource_type}/generate_archive` | `conn_mod_def::GJe5QEN_Wro::3MkIFUfzTHCoTehTzGCbvQ` |
| Generate an Archive of Assets (by Resource Type) | POST | `/{{resource_type}}/generate_archive` | `conn_mod_def::GJe5QKLh8r8::y8PEafWnQKmdkdYBc0JnRA` |

### ProductEnvironment

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product Environment (Sub-account) for an Account | GET | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/sub_accounts/{{SUB_ACCOUNT_ID}}` | `conn_mod_def::GJe5T4Ga_aA::vZlIwawDQom016IRwSnFqQ` |
| Create a Product Environment for an Account | POST | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/sub_accounts` | `conn_mod_def::GJe5TvUle0M::PSCN2AWSSQasFKBx_fuEqw` |
| Delete a Product Environment in an Account | DELETE | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/sub_accounts/{{SUB_ACCOUNT_ID}}` | `conn_mod_def::GJe5ULarB6Q::CdGGvgxDTf27RXTtT94GNQ` |

### RelatedAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Related Assets by Asset ID (Relate an Asset to Other Assets) | POST | `/resources/related_assets/{{asset_id}}` | `conn_mod_def::GJe5WWM_DJM::mtI3lpMGRD-peChVEhmOmQ` |
| Relate Assets to a Resource (Add Related Assets) | POST | `/resources/related_assets/{{resource_type}}/{{type}}/{{public_id}}` | `conn_mod_def::GJe5Wb-FJo4::SEsK4Ff9SnW-pJukIzNrTg` |
| Unrelate an Asset’s Related Assets | DELETE | `/resources/related_assets/{{resource_type}}/{{type}}/{{public_id}}` | `conn_mod_def::GJe5Wqm7IBw::FgStlT8RRO--heX9ifd42w` |

### Transformations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transformation’s Details | GET | `/transformations/{{transformation}}` | `conn_mod_def::GJe5Ze6DPe0::l7amnqzLQ66rIsa8zRVnLA` |
| List Transformations | GET | `/transformations` | `conn_mod_def::GJe5ZX2uFVc::Aifz8n2mThqaLf4asVlwww` |
| Delete a Single Transformation | DELETE | `/transformations/{{transformation}}` | `conn_mod_def::GJe5ZxLg6do::18WLGTDrRt2XZQbbIVhAxg` |

### AccessKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Sub-Account’s Access Keys | GET | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/sub_accounts/{{SUB_ACCOUNT_ID}}/access_keys` | `conn_mod_def::GJe5Lq-9W08::pft3M4wgQWacJIeFBjbY_Q` |
| Generate an Access Key for a Sub-Account | POST | `/v1_1/provisioning/accounts/{{ACCOUNTID}}/sub_accounts/{{SUB_ACCOUNT_ID}}/access_keys` | `conn_mod_def::GJe5Ly_zc3E::JB1p5aEFReGGmJaKQ6arNg` |

This lists 90 of 157 actions. For anything not here, call `search_one_platform_actions` with platform `cloudinary`. The full catalog is at https://www.withone.ai/knowledge/cloudinary.

## When a call fails

The error comes from Cloudinary, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/cloudinary

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
