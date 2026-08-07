---
name: canva
description: Canva is a cloud-based graphic design platform with a drag‑and‑drop editor, extensive template and asset library, real‑time collaboration, and AI-powered tools for creating visuals like social posts, presentations, websites, and printed media quickly and easily. Read and write Canva data through One: folders, assets, brandtemplates, designs, designcommentthreadreplies, autofills and more, 48 actions with real parameter documentation. Use whenever the user asks to look something up in Canva, create or update a record there, or build code against the Canva API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: canva
  generated-from: one-knowledge-base
---

# Canva through One

Canva is a cloud-based graphic design platform with a drag‑and‑drop editor, extensive template and asset library, real‑time collaboration, and AI-powered tools for creating visuals like social posts, presentations, websites, and printed media quickly and easily.

One exposes Canva through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `canva` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Canva is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Canva account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Folder | GET | `/v1/folders/{{folderId}}` | `conn_mod_def::GJ1DFqRniU4::OvRCMHhiRI29fYwIBW0xTw` |
| List a Folder’s Items | GET | `/v1/folders/{{folderId}}/items` | `conn_mod_def::GJ1DFzH6eoo::rVAHMw-sQPiWVqGbmu3XpA` |
| Create a Folder | POST | `/folders` | `conn_mod_def::GJ1DFaTImx8::gGdJLARASIaAGG8RHbSK3w` |
| Delete a Folder | DELETE | `/v1/folders/{{folderId}}` | `conn_mod_def::GJ1DFhGB96k::-Ep_RrqvQDi9kFJiYBTjlw` |
| Move a Folder Item | POST | `/rest/v1/folders/move` | `conn_mod_def::GJ1DF5_4ceQ::PzphUHLJR_Wto7DiXX93Dw` |
| Update a Folder’s Details | PATCH | `/v1/folders/{{folderId}}` | `conn_mod_def::GJ1DGCtxTpA::qYx-tz2MRa2S4E-5jQbCWA` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Asset | GET | `/assets/{{assetId}}` | `conn_mod_def::GJ1DCCHDj-E::nG133gpJQ-Oo--hpLCDEtA` |
| Delete an Asset | DELETE | `/assets/{{assetId}}` | `conn_mod_def::GJ1DB6jbQHw::E3f1Ns26RtuIH7vomqvpFw` |
| Update an Asset | PATCH | `/assets/{{assetId}}` | `conn_mod_def::GJ1DCZhzzaU::CHkgFZO8Spq4ruiPmz_6Ig` |

### BrandTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Brand Template | GET | `/v1/brand-templates/{{brandTemplateId}}` | `conn_mod_def::GJ1DCwGSu8M::ALR3_HSdT3Ko8c4QiwcImg` |
| Get a Brand Template’s Dataset Definition | GET | `/brand-templates/{{brandTemplateId}}/dataset` | `conn_mod_def::GJ1DC3Ybv_o::-4hG-kq5TnOhxJHBBKDxpQ` |
| List Brand Templates | GET | `/v1/brand-templates` | `conn_mod_def::GJ1DC_iDbLw::1k0LJYotTAe_zgRfX_LHfw` |

### Designs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Design’s Metadata | GET | `/v1/designs/{{designId}}` | `conn_mod_def::GJ1DEMjo1wg::HkI6yId_QVyrDZL2dzjg8Q` |
| List Designs | GET | `/designs` | `conn_mod_def::GJ1DEkA7s9M::hqWom7sFSbyr1kXWoznsxw` |
| Create a Design | POST | `/rest/v1/designs` | `conn_mod_def::GJ1DEFdLB4w::bKcK46NBRsyKBMMkoMJn_w` |

### DesignCommentThreadReplies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Design Comment Thread Reply | GET | `/designs/{{designId}}/comments/{{threadId}}/replies/{{replyId}}` | `conn_mod_def::GJ1DDnw_KfU::_KoBGcv7Rf-gMwf-iKoJrg` |
| List a Design Comment Thread’s Replies | GET | `/v1/designs/{{designId}}/comments/{{threadId}}/replies` | `conn_mod_def::GJ1DD3LOafY::yUS0AzikSYW4H9FSnXjpLA` |
| Create a Reply in a Design Comment Thread | POST | `/v1/designs/{{designId}}/comments/{{threadId}}/replies` | `conn_mod_def::GJ1DDPqTnmQ::B1FpBOtkTP6ATyFLNZ7Ozw` |

### Autofills

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Design Autofill Job Result | GET | `/v1/autofills/{{jobId}}` | `conn_mod_def::GJ1DCpRJdew::Yr9FrMrtREC9NPSeTLKJsw` |
| Create a Design Autofill Job | POST | `/rest/v1/autofills` | `conn_mod_def::GJ1DChfhwaw::uVDmFthCQ1aGgJmbpJkhvg` |

### UrlImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a URL Import Job Result | GET | `/v1/url-imports/{{jobId}}` | `conn_mod_def::GJ1DFCpxvb8::qAdgE2NuRjqT5A3Xdr3RrQ` |
| Create a URL Import Job (Import External File as a New Design) | POST | `/rest/v1/url-imports` | `conn_mod_def::GJ1DE0VPRlE::RRpB7VW0QDmQuXevitMHRw` |

### DesignImportJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Design Import Job Result | GET | `/v1/imports/{{jobId}}` | `conn_mod_def::GJ1DE7-FS4E::vRygMalQSEePWx_91EZZNQ` |
| Create a Design Import Job | POST | `/imports` | `conn_mod_def::GJ1DEr0j_5g::GpIXHbLeRI-sNuJYBxYygw` |

### Exports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Design Export Job Result | GET | `/v1/exports/{{exportId}}` | `conn_mod_def::GJ1DFRpKv3k::VCaJg5YkRjiCbiHcRGvKrQ` |
| Create a Design Export Job | POST | `/exports` | `conn_mod_def::GJ1DFK7zko0::VuxrRFG6TwKWvILJRlKe2A` |

### OauthTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Exchange OAuth Access Token (Authorization Code or Refresh Token) | POST | `/rest/v1/oauth/token` | `conn_mod_def::GJ1DGKRN8bo::3cJwlp65QqewOTqxnES6wg` |
| Introspect an OAuth Access Token | POST | `/rest/v1/oauth/introspect` | `conn_mod_def::GJ1DGSB7My0::pTYF8nNeSk-nBs4CFzaYrA` |

### AssetUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Asset Upload Job Result | GET | `/v1/asset-uploads/{{jobId}}` | `conn_mod_def::GJ1DCKaSkuQ::_dt2m_puTwa-9wezsnjNTA` |
| Create an Asset Upload Job (Async) | POST | `/asset-uploads` | `conn_mod_def::GJ1DBrszmGw::myv4cssOSB6lpG5mUOhyMA` |

### UrlAssetUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a URL Asset Upload Job Result | GET | `/v1/url-asset-uploads/{{jobId}}` | `conn_mod_def::GJ1DCRrVGuA::Q08XiW7PRqakoEJZ5HHCtw` |
| Create URL Asset Upload Job | POST | `/url-asset-uploads` | `conn_mod_def::GJ1DBzrj3Bk::CV7Oo7MBSsq1R8ekQd76dQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Authenticated User’s IDs (User ID and Team ID) | GET | `/users/me` | `conn_mod_def::GJ1DHPpofMk::ZdKQq5M_SwaUnVTms4_Amw` |
| Get the Authenticated User’s Profile | GET | `/v1/users/{{userId}}/profile` | `conn_mod_def::GJ1DHH_LlCQ::DonNHOWwRMKq1gFvMGQw4A` |

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an App’s JWKS (Public Keys) | GET | `/v1/apps/{{appId}}/jwks` | `conn_mod_def::GJ1DBkEvYoc::U95Bh_qjSV2rxdSY2BrRNw` |

### CommentReplies

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Reply to a Comment (Deprecated Preview) | POST | `/v1/comments/{{commentId}}/replies` | `conn_mod_def::GJ1DDX4iPE8::4nZkaLB3QlK0U1UrBvbMpA` |

### DesignComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Design Comment Thread | POST | `/v1/designs/{{designId}}/comments` | `conn_mod_def::GJ1DDfDyc9M::oapxPRG0SjOKIiteuTtwfA` |

### DesignExportFormats

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Design’s Export Formats | GET | `/v1/designs/{{designId}}/export-formats` | `conn_mod_def::GJ1DET9MBYc::ZciStbkxQHW6Hd2hkMdeIQ` |

### DesignPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Design’s Pages (Preview) | GET | `/v1/designs/{{designId}}/pages` | `conn_mod_def::GJ1DEcegNS8::ZnonuELyT064Q05H-5WBaA` |

### Oauth

| Action | Method | Path | Action id |
|---|---|---|---|
| Revoke OAuth Token | POST | `/rest/v1/oauth/revoke` | `conn_mod_def::GJ1DGZsEMlk::sa7EHVoLSMiViK6Y6xxgyg` |

### OidcUserinfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get OIDC UserInfo for the Authorized User | GET | `/rest/v1/oidc/userinfo` | `conn_mod_def::GJ1DGpYcQsI::eFQIG1iuSRygdYA8KjVa_Q` |

### Resizes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Design Resize Job | POST | `/rest/v1/resizes` | `conn_mod_def::GJ1DGxnUn_I::0D4CV1BURaGczNBk1pR-0g` |

### UserCapabilities

| Action | Method | Path | Action id |
|---|---|---|---|
| List the Authenticated User’s API Capabilities | GET | `/v1/users/{{userId}}/capabilities` | `conn_mod_def::GJ1DHAxb52c::I0mpNGuhQmqnVNigSyFZzg` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Top-level Comment on a Design (Deprecated) | POST | `/rest/v1/comments` | `conn_mod_def::GJ1DDHOutIs::yynd77ypSwyuVcXCxfQrxg` |

### DesignCommentThreads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Design Comment Thread | GET | `/v1/designs/{{designId}}/comments/{{threadId}}` | `conn_mod_def::GJ1DDuo-sWw::w_rZ4JINQeCZCvyroRTlFA` |

### ConnectKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Canva Connect Webhook Signing Public Keys (JWKS) | GET | `/v1/connect/keys` | `conn_mod_def::GJ1DD-Hotw4::K5G1NzSzRJ2dCeJx-Loq7g` |

### OidcJwks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get OIDC JWKS (JSON Web Key Set) | GET | `/rest/v1/oidc/jwks` | `conn_mod_def::GJ1DGiKCA2s::j5MQOWMgTGCvBRuVO-Tiqw` |

### DesignResizeJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Design Resize Job Result | GET | `/v1/resizes/{{jobId}}` | `conn_mod_def::GJ1DG5S-UW8::xy0e0bJDQdui_BNylpxhIw` |

## When a call fails

The error comes from Canva, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/canva

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
