---
name: coda
description: Coda is an all-in-one collaborative workspace that blends the flexibility of documents with the power of apps, enabling teams to build custom workflows, manage data, automate tasks and integrate seamlessly with their existing tools. Read and write Coda data through One: packs, docs, packinvitations, pages, folders, rows and more, 124 actions with real parameter documentation. Use whenever the user asks to look something up in Coda, create or update a record there, or build code against the Coda API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: coda
  generated-from: one-knowledge-base
---

# Coda through One

Coda is an all-in-one collaborative workspace that blends the flexibility of documents with the power of apps, enabling teams to build custom workflows, manage data, automate tasks and integrate seamlessly with their existing tools.

One exposes Coda through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `coda` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Coda is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Coda account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Packs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pack’s Listing Details | GET | `/packs/{{packId}}/listing` | `conn_mod_def::GJ1QQeTNEIk::B2QrBUekROKCeuPQQaBfNw` |
| Get a Pack’s Listing Draft | GET | `/packs/{{packId}}/listingDraft` | `conn_mod_def::GJ1QQlRsleY::u66O4oQKSCSIX-0iMM3tjw` |
| Get a Single Pack | GET | `/packs/{{packId}}` | `conn_mod_def::GJ1QQQ_SE3Q::HKk3tb9sRlq9vsPwEV6HoA` |
| List a Pack’s Featured Docs | GET | `/packs/{{packId}}/featuredDocs` | `conn_mod_def::GJ1QRT8zAMU::_6GdDxMbQ9ORwGGSy7nIzQ` |
| List Packs | GET | `/packs` | `conn_mod_def::GJ1QR4yG-3g::SKdPmc97R2Gclbcg2WDblA` |
| Retrieve a Pack’s OAuth Configuration | GET | `/packs/{{packId}}/oauthConfig` | `conn_mod_def::GJ1QVJiIz4M::REE_Yy2lQhS52A4qBNtkQA` |
| Add a Category to a Pack | POST | `/packs/{{packId}}/category` | `conn_mod_def::GJ1QOm2JdFA::Qapx-vUdT3iVLrybC26JEA` |
| Add a Maker to a Pack | POST | `/packs/{{packId}}/maker` | `conn_mod_def::GJ1QOu6FqVM::mgxfPy6cTGKpEbWmESGQxA` |
| Cancel a Pack’s Pending Review | POST | `/packs/{{packId}}/reviews/pending/cancel` | `conn_mod_def::GJ1QO9oN42w::VbcpaepeQn27xIadtb_pYA` |
| Complete a Pack Version Source Code Upload | POST | `/packs/{{packId}}/versions/{{packVersion}}/sourceCode/uploadComplete` | `conn_mod_def::GJ1QSx3Mb3Q::f4LTVynaQtma6itP1lY0IA` |
| Create Pack | POST | `/packs` | `conn_mod_def::GJ1QPUkinkw::fl6RPsIzTpmbUMw4VLiALQ` |
| Delete a Pack | DELETE | `/packs/{{packId}}` | `conn_mod_def::GJ1QQBjf5Bo::4phnjw5nRxqA6IVwVlWhZA` |

10 more Packs actions are available through search.

### Docs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Doc’s Metadata | GET | `/docs/{{docId}}` | `conn_mod_def::GJ1QM9ugovA::_HObuwi2QGqRfW3S5c-NRQ` |
| Get a Doc’s Sharing Metadata | GET | `/docs/{{docId}}/acl/metadata` | `conn_mod_def::GJ1QYOLpwxM::TPZF8MvnTPmD8ejtb5zfcQ` |
| List Docs | GET | `/docs` | `conn_mod_def::GJ1QNI_IEYk::EdNvS8cPQB2H513So_xM8A` |
| Create a Doc | POST | `/docs` | `conn_mod_def::GJ1QMv5WSE0::OFTWNI36Q-Ss6_1b5ooxFA` |
| Delete a Doc | DELETE | `/docs/{{docId}}` | `conn_mod_def::GJ1QM2rBGDc::3hkjgBF0ShKL1hI9lrszIA` |
| Unpublish a Doc | DELETE | `/docs/{{docId}}/publish` | `conn_mod_def::GJ1QY_uJuQY::ihhGnjNdTzav__WT9v-77Q` |
| Update a Doc | PATCH | `/docs/{{docId}}` | `conn_mod_def::GJ1QNQCUBfA::mfntr9AkTk-_aHR-JHb1kQ` |
| Update a Doc’s Publish Settings | PUT | `/docs/{{docId}}/publish` | `conn_mod_def::GJ1QY4OHBQQ::WJTBKDhVQzy_Tt1KhW9ySQ` |

### PackInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pack’s Invitations | GET | `/packs/{{packId}}/invitations` | `conn_mod_def::GJ1QRdqE8Bs::ZK4WmmgXTluvfyK2nh61og` |
| List Pending Pack Invitations for the Current User | GET | `/packs/invitations` | `conn_mod_def::GJ1QSBBFSnc::10q8iFmsQPuTGWi3xx51nw` |
| Create a Pack Invitation | POST | `/packs/{{packId}}/invitations` | `conn_mod_def::GJ1QPNavCQE::NOHpxXoNS_qzAe6iIiLiFw` |
| Reply to a Pack Invitation | POST | `/packs/invitations/{{invitationId}}/reply` | `conn_mod_def::GJ1QTQwZlyY::vY2WEBzhRriI9WmNW9SbsA` |
| Revoke a Pack Invitation | DELETE | `/packs/{{packId}}/invitations/{{invitationId}}` | `conn_mod_def::GJ1QVYeT_as::z4izzlCHQ8W2OLjVlhRuOQ` |
| Update a Pack Invitation | PUT | `/packs/{{packId}}/invitations/{{invitationId}}` | `conn_mod_def::GJ1QV9xLPNY::qX2HqjukRU2a6iK-MfU0vg` |

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Doc Page | GET | `/docs/{{docId}}/pages/{{pageIdOrName}}` | `conn_mod_def::GJ1QXXQmZfE::6dz-hxWZQ-m9IERKAAoj8A` |
| List Pages in a Doc | GET | `/docs/{{docId}}/pages` | `conn_mod_def::GJ1QXpGTv5w::txPqk1NLQAOYljTJPNs0Gg` |
| Create a Page in a Doc | POST | `/docs/{{docId}}/pages` | `conn_mod_def::GJ1QW9md3M8::UEyKrnaJTniBzNPDyJ1OYA` |
| Delete a Doc Page | DELETE | `/docs/{{docId}}/pages/{{pageIdOrName}}` | `conn_mod_def::GJ1QXELcOUQ::tqCsZBZFQwO3VYf075a70Q` |
| Delete a Doc Page’s Content | DELETE | `/docs/{{docId}}/pages/{{pageIdOrName}}/content` | `conn_mod_def::GJ1QXQI7cAc::l3CxT3BJTKy8xCctNquh9g` |
| Update a Doc Page | PUT | `/docs/{{docId}}/pages/{{pageIdOrName}}` | `conn_mod_def::GJ1QXxsuUoQ::lmEpgGJBRE-p-tmbLDHVHA` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Folder | GET | `/folders/{{folderId}}` | `conn_mod_def::GJ1QNk2nDC4::yz9Y3YWZRgC1B0RyHD7QWA` |
| List Folders | GET | `/folders` | `conn_mod_def::GJ1QNtM3Ils::1XgLtklkQS-RNfUpS3pcvA` |
| Create Folder | POST | `/folders` | `conn_mod_def::GJ1QNXCRkEY::HmG9QyyrTMSNlqbrpXGntg` |
| Delete a Folder | DELETE | `/folders/{{folderId}}` | `conn_mod_def::GJ1QNeOm8Xg::4LjTeD-YRfqylx8dZF6ueQ` |
| Update a Folder | PATCH | `/folders/{{folderId}}` | `conn_mod_def::GJ1QN0eUZak::KHYijN_qRmSui9WGQpBiPg` |

### Rows

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Table’s Rows | GET | `/docs/{{docId}}/tables/{{tableIdOrName}}/rows` | `conn_mod_def::GJ1QZwJJcZk::UQWZEWMHSgCTTfQiHqjrBw` |
| Delete a Row in a Doc Table | DELETE | `/docs/{{docId}}/tables/{{tableIdOrName}}/rows/{{rowIdOrName}}` | `conn_mod_def::GJ1QZRRAlMs::52yX1F7DQ82KJKzHAT_xdQ` |
| Delete Multiple Rows in a Doc Table | DELETE | `/docs/{{docId}}/tables/{{tableIdOrName}}/rows` | `conn_mod_def::GJ1QZJ9Rd18::GGFPL0ZaSZqJY9gQQW62Yg` |
| Update a Row in a Doc Table | PUT | `/docs/{{docId}}/tables/{{tableIdOrName}}/rows/{{rowIdOrName}}` | `conn_mod_def::GJ1QaAraj4A::lcE5PbiBT7Svhpj_Uc4sZA` |
| Upsert Rows in a Doc Table | POST | `/docs/{{docId}}/tables/{{tableIdOrName}}/rows` | `conn_mod_def::GJ1QZkHxeUA::lbXqNQprTwCjv68zEGmzgg` |

### DocDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Doc’s Custom Domains | GET | `/docs/{{docId}}/domains` | `conn_mod_def::GJ1QMeV9g3Y::R4X-rj2TQbWJkSPCbyiDKA` |
| Add a Custom Domain to a Doc | POST | `/docs/{{docId}}/domains` | `conn_mod_def::GJ1QMHYfjLQ::9SYYM7g8QIuT6mli8KZG4Q` |
| Delete a Doc’s Custom Domain | DELETE | `/docs/{{docId}}/domains/{{customDocDomain}}` | `conn_mod_def::GJ1QMOTnyrk::NZJwGoDoTrO2S3qgh_ORxA` |
| Update a Doc's Custom Domain | PATCH | `/docs/{{docId}}/domains/{{customDocDomain}}` | `conn_mod_def::GJ1QMmxDKbA::OObnNnoeTiS5FYxrDn-5Nw` |

### PackPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pack’s Permissions | GET | `/packs/{{packId}}/permissions` | `conn_mod_def::GJ1QSIcNYeY::bpRVWYnaSwOF8WFISaZNeg` |
| Add a Pack Permission | POST | `/packs/{{packId}}/permissions` | `conn_mod_def::GJ1QO2LM4FI::hqVaa74fRFaYbSa5yx4Tlg` |
| Delete a Pack Permission | DELETE | `/packs/{{packId}}/permissions/{{permissionId}}` | `conn_mod_def::GJ1QPyVN3UM::AfgSuNcQQESCLuzcAexMNQ` |
| Delete the Current User’s Pack Permission | DELETE | `/packs/{{packId}}/permissions` | `conn_mod_def::GJ1QP6tN-Bg::rG6E6aR5So2EjqmljPNWzg` |

### PackReleases

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pack’s Releases | GET | `/packs/{{packId}}/releases` | `conn_mod_def::GJ1QSb4oMZk::ri6wIsPjTHCK--u62NDx5Q` |
| Create a Pack Release | POST | `/packs/{{packId}}/releases` | `conn_mod_def::GJ1QPF2PUUI::YL2KPmnQSVCegMMupv8I_Q` |
| Update a Pack Release | PUT | `/packs/{{packId}}/releases/{{packReleaseId}}` | `conn_mod_def::GJ1QV2jo5UU::NSmaGYC0QXWe4Rcl8smfxQ` |

### PackVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pack’s Versions | GET | `/packs/{{packId}}/versions` | `conn_mod_def::GJ1QSi6vsTM::XkCe6r9dSQe9kgyZAlNH-A` |
| Mark a Pack Version Upload as Complete (Create Pack Version) | POST | `/packs/{{packId}}/versions/{{packVersion}}/uploadComplete` | `conn_mod_def::GJ1QS6BRoiE::K1IYVpRXR4a_oqRaDaS5NQ` |
| Register a Pack Version | POST | `/packs/{{packId}}/versions/{{packVersion}}/register` | `conn_mod_def::GJ1QTJHmMQY::hfFn0hSVTCO_9OA1Mv5t_Q` |

### DocPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Doc’s Permissions | GET | `/docs/{{docId}}/acl/permissions` | `conn_mod_def::GJ1QYZDBB_E::12oGp7mQT5ChGugsjuCaXg` |
| Add a Doc Permission | POST | `/docs/{{docId}}/acl/permissions` | `conn_mod_def::GJ1QX5Iv98g::lpWBL8AcQfCYFyGs9OqHPg` |
| Delete a Doc Permission | DELETE | `/docs/{{docId}}/acl/permissions/{{permissionId}}` | `conn_mod_def::GJ1QX_oaXBs::Z63jIqEYRAeYd-wxB2DsxQ` |

### Analytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Analytics Last Updated Day | GET | `/analytics/updated` | `conn_mod_def::GJ1QKVgUuds::CyQpziJ_TmCpWOSMbKeZgg` |
| List a Doc’s Page Analytics (Daily) | GET | `/analytics/docs/{{docId}}/pages` | `conn_mod_def::GJ1QLXABq_4::tPexp6CRQUmBi_0SB69xAA` |

### Columns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Doc Table Column | GET | `/docs/{{docId}}/tables/{{tableIdOrName}}/columns/{{columnIdOrName}}` | `conn_mod_def::GJ1QLm5wv70::8DlXpBt-TIeV866YB7R3Mw` |
| List a Table’s Columns | GET | `/docs/{{docId}}/tables/{{tableIdOrName}}/columns` | `conn_mod_def::GJ1QLxFVkjE::c-IfGa1KThK3t1tcY0QZSw` |

### Controls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Doc Control | GET | `/docs/{{docId}}/controls/{{controlIdOrName}}` | `conn_mod_def::GJ1QL4O603I::jVovbTNZQdSNOgkBocC8Hw` |
| List a Doc’s Controls | GET | `/docs/{{docId}}/controls` | `conn_mod_def::GJ1QMACy_N8::TphskSaZSFmWgbmq2ThEMg` |

### Formulas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Doc Formula | GET | `/docs/{{docId}}/formulas/{{formulaIdOrName}}` | `conn_mod_def::GJ1QN7zs-TM::pOQDFesBR-mTszGjY61GbQ` |
| List a Doc’s Formulas | GET | `/docs/{{docId}}/formulas` | `conn_mod_def::GJ1QODPwMiY::exPDSiKiS7S3HBCqZAWs9A` |

### PackReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pack’s Reviews | GET | `/packs/{{packId}}/reviews` | `conn_mod_def::GJ1QRtO9Ok4::LjgN1vvjRkew217ROBbsYA` |
| Create a Pack Review | POST | `/packs/{{packId}}/reviews` | `conn_mod_def::GJ1QPbjivks::bkPemX5JQdmTVPknOZFLdA` |

### PackCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pack’s Categories | GET | `/packs/{{packId}}/categories` | `conn_mod_def::GJ1QRMJq4Ik::BOQ1oNxlT5SvWc3e84YlhQ` |
| Delete a Pack Category | DELETE | `/packs/{{packId}}/category/{{categoryName}}` | `conn_mod_def::GJ1QPjhx6Nw::Z-hVRGHpQsmpPS9vHBranw` |

### DocsAclSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Doc’s ACL Settings | GET | `/docs/{{docId}}/acl/settings` | `conn_mod_def::GJ1QYG9FlgE::dkD4bw7hTjyK5thUCpA4Ow` |
| Update a Doc’s ACL Settings | PATCH | `/docs/{{docId}}/acl/settings` | `conn_mod_def::GJ1QYpO322U::3CtZaOazRJSUECN8iOW-xA` |

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Doc’s Table | GET | `/docs/{{docId}}/tables/{{tableIdOrName}}` | `conn_mod_def::GJ1QaMfzT_4::6WMh8VRkTKS0DOMstPDdQQ` |
| List a Doc’s Tables | GET | `/docs/{{docId}}/tables` | `conn_mod_def::GJ1QaU2Nt5c::nm_M3dlKTiuUS4rbZ4byOA` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace’s Role Activity | GET | `/workspaces/{{workspaceId}}/roles` | `conn_mod_def::GJ1QacwvMxA::O8oHJ9n-RiC6r7nctkfnIg` |
| Update a Workspace User’s Role | POST | `/workspaces/{{workspaceId}}/users/role` | `conn_mod_def::GJ1QasrGRnA::vMBHCH5nRH-37AChDSaI_w` |

### Whoami

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User Info (Who Am I) | GET | `/whoami` | `conn_mod_def::GJ1QKO1FCCw::X7fCINyNRgC3piVor-cPYw` |

### DocAnalyticsSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Doc Analytics Summary | GET | `/analytics/docs/summary` | `conn_mod_def::GJ1QKdi75fs::P34twAOTTRuUFDzoASMBGQ` |

### DocAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| List Doc Analytics | GET | `/analytics/docs` | `conn_mod_def::GJ1QK5FVHgA::oF2jxKQDQuWd-D-ZK_SPSg` |

### PackAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pack Analytics | GET | `/analytics/packs` | `conn_mod_def::GJ1QLDuXrXQ::8CNRPUSaSGKnHHcsVtGyQQ` |

### PackFormulaAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pack's Formula Analytics | GET | `/analytics/packs/{{packId}}/formulas` | `conn_mod_def::GJ1QLNp3FNk::ZdUoTMnKTZqthhhdaZb3ew` |

### DocAutomationWebhookRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Trigger a Doc Automation Webhook Rule | POST | `/docs/{{docId}}/hooks/automation/{{ruleId}}` | `conn_mod_def::GJ1QLfSqr2I::wAQc1XgNRuKfHJ5A7tFVGw` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Doc Domain’s Provider | GET | `/domains/provider/{{customDocDomain}}` | `conn_mod_def::GJ1QMVQRXso::mX8tR9TwSI6GyOjfSNyG9g` |

### GoLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Go Link for an Organization | POST | `/organizations/{{organizationId}}/goLinks` | `conn_mod_def::GJ1QOPRfpHk::zgwvwKxoQ6yPGsST2Gd1xg` |

### MutationStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Mutation Status | GET | `/mutationStatus/{{requestId}}` | `conn_mod_def::GJ1QOWNrvcc::Pu2tPnsiT-aJXXQiqwETOg` |

### BrowserLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Resolve a Coda Browser Link | GET | `/resolveBrowserLink` | `conn_mod_def::GJ1QOefPRUU::HYwRA5WvRJyJBTwC_gRHqg` |

### PacksMaker

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Pack's Maker | DELETE | `/packs/{{packId}}/maker/{{loginId}}` | `conn_mod_def::GJ1QPrBuNSo::TDuuj8aaS3GlPMgFoXYh1w` |

### PackVersionDiffs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Diffs Between Two Pack Versions | GET | `/packs/{{packId}}/versions/{{basePackVersion}}/diff/{{targetPackVersion}}` | `conn_mod_def::GJ1QQtOMgRQ::uml34e3uRCCvNhd3xq6mZA` |

### PackVersionSourceCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pack Version’s Source Code Download Links | GET | `/packs/{{packId}}/versions/{{packVersion}}/sourceCode` | `conn_mod_def::GJ1QQ8lVhGY::ZGE71PKaRfa5e8sbuNT92w` |

This lists 90 of 124 actions. For anything not here, call `search_one_platform_actions` with platform `coda`. The full catalog is at https://www.withone.ai/knowledge/coda.

## When a call fails

The error comes from Coda, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/coda

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
