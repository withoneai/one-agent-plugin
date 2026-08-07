---
name: dub
description: Dub is a link management and attribution platform that enables teams to create branded short links, track conversions from click to revenue, and manage affiliate programs with real-time analytics and APIs for scalable marketing workflows. Read and write Dub data through One: links, domains, customers, folders, partners, tags and more, 53 actions with real parameter documentation. Use whenever the user asks to look something up in Dub, create or update a record there, or build code against the Dub API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: dub
  generated-from: one-knowledge-base
---

# Dub through One

Dub is a link management and attribution platform that enables teams to create branded short links, track conversions from click to revenue, and manage affiliate programs with real-time analytics and APIs for scalable marketing workflows.

One exposes Dub through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `dub` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Dub is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Dub account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Links

| Action | Method | Path | Action id |
|---|---|---|---|
| List Links | GET | `/links` | `conn_mod_def::GKxTTNwIv2A::H2BbZqZbSqyuWO0cpif63g` |
| Retrieve a Link | GET | `/links/info` | `conn_mod_def::GKxTTJKHl_g::jVqd8rGKSiO5bne5y8At7g` |
| Retrieve Links Count | GET | `/links/count` | `conn_mod_def::GKxTTbCwEDg::sE6I6z4_TCqZdRjH81CNsQ` |
| Bulk Create Links | POST | `/links/bulk` | `conn_mod_def::GKxTS7CZLyg::HK3MnYFgRQmmgDFyIr7xoA` |
| Bulk Delete Links | DELETE | `/links/bulk` | `conn_mod_def::GKxTS9SMN7g::99T4up_ZQcG63XFolGpFYQ` |
| Bulk Update Links | PATCH | `/links/bulk` | `conn_mod_def::GKxTTIWxfcg::-cIpjeIqS4KJQfTDg63rZQ` |
| Create a Link | POST | `/links` | `conn_mod_def::GKxTTHhVAUA::MmjqnWDTSwi16M08Odak9w` |
| Delete a Workspace Link | DELETE | `/links/{{linkId}}` | `conn_mod_def::GKxTTHhU2jA::nbpNc2LoT0mi8Voi6yTKRQ` |
| Update a Workspace Link | PATCH | `/links/{{linkId}}` | `conn_mod_def::GKxTTYsnYAA::AVgQx32hQ-Kb3EEBeiJSUA` |
| Upsert a Link | PUT | `/links/upsert` | `conn_mod_def::GKxTTX7qYSA::f9AxhziETzabSEboc-KmGg` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Domain Availability Status | GET | `/domains/status` | `conn_mod_def::GKxTSSjOHdA::JqaxxlNyQR6fWo5WsTLZLA` |
| List Domains | GET | `/domains` | `conn_mod_def::GKxTSTuQ4aA::0PcxWzFHTSi3JMhdEk6D1w` |
| Create a Domain | POST | `/domains` | `conn_mod_def::GKxTSStr6pA::W7Np7XRmSf-6enrl79pmGQ` |
| Delete a Domain | DELETE | `/domains/{{slug}}` | `conn_mod_def::GKxTSTmBQ1A::aXMvtcsDSHSST4EvAln6JQ` |
| Register a Domain | POST | `/domains/register` | `conn_mod_def::GKxTSdaaRgA::P6-tLBDTSVqGAiNH2K16Bw` |
| Update a Workspace Domain | PATCH | `/domains/{{slug}}` | `conn_mod_def::GKxTShIRAYg::v2sYC4psS1KYlGoKStzkXA` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Customers | GET | `/customers` | `conn_mod_def::GKxTSFnvmug::pSM1KApsSPqLHgwG4eaPhw` |
| Retrieve a Customer | GET | `/customers/{{id}}` | `conn_mod_def::GKxTSBEN1Eg::i2YBD9qQRrSJhWIAJjcAUQ` |
| Delete a Customer | DELETE | `/customers/{{id}}` | `conn_mod_def::GKxTSBE2zJA::E9dNbBnVTrGVZlOEJU3-2Q` |
| Update a Customer | PATCH | `/customers/{{id}}` | `conn_mod_def::GKxTSTCUiLA::wRKDx6G9Quy1FnVtQjneGg` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Folders | GET | `/folders` | `conn_mod_def::GKxTS5LD9kA::RbFEqEAOSJ2h002tcJG4CA` |
| Create a Folder | POST | `/folders` | `conn_mod_def::GKxTSd0Ve9A::2ScskwmnQjuv9aw7OKtFQA` |
| Delete a Folder | DELETE | `/folders/{{id}}` | `conn_mod_def::GKxTS3fm_lg::bS0geeloTXysSiEMiJNtzg` |
| Update a Folder | PATCH | `/folders/{{id}}` | `conn_mod_def::GKxTS4JtjvA::euKiI1FLRlqGg45bqYTlXg` |

### Partners

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Partners | GET | `/partners` | `conn_mod_def::GKxTT1b8M9A::qYxNaNyTSo-oTRZPAJ1I-g` |
| Ban a Partner | POST | `/partners/ban` | `conn_mod_def::GKxTTos2rNA::Wl30vT1HR5mC-c0HPPKgnA` |
| Create or Update a Partner | POST | `/partners` | `conn_mod_def::GKxTToVLheg::-QsVF6NGS5uAKjB4smjUGw` |
| Deactivate a Partner | POST | `/partners/deactivate` | `conn_mod_def::GKxTTk7irMA::TdGZ64N_RD-z64xGzA5r2Q` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags | GET | `/tags` | `conn_mod_def::GKxTUA6Zjug::l_1M4zl2RLi5TpYoq6Pg5w` |
| Create a Tag | POST | `/tags` | `conn_mod_def::GKxTT-xvkkA::vF3mEbICQsqCfmssUDQHmg` |
| Delete a Tag | DELETE | `/tags/{{id}}` | `conn_mod_def::GKxTT-3WgPg::i5DdDeYFT2qFbzrX6fK5fA` |
| Update a Tag | PATCH | `/tags/{{id}}` | `conn_mod_def::GKxTT9uJ40A::e3SbomOuSwaoLnovYUqDSg` |

### Commissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Commissions | GET | `/commissions` | `conn_mod_def::GKxTSIYncdA::Po3Jxa9bTtKpjTHwzP0DCg` |
| Bulk Update Commissions | PATCH | `/commissions/bulk` | `conn_mod_def::GKxTRo04WkA::QLCPZ6VgSYejX3qJHQMJVg` |
| Update a Commission | PATCH | `/commissions/{{id}}` | `conn_mod_def::GKxTSE6uq2A::l37-3iVTTmGUGOi-wyEqmw` |

### PartnerApplications

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pending Partner Applications | GET | `/partners/applications` | `conn_mod_def::GKxTTXOKDnA::7LdgDQYER7i-lqZuQvNDaw` |
| Approve a Partner Application | POST | `/partners/applications/approve` | `conn_mod_def::GKxTTYBPvYA::sH-DHih_R3CCxEOqvxOMBw` |
| Reject a Partner Application | POST | `/partners/applications/reject` | `conn_mod_def::GKxTTlGWT1g::rIELzexuRh64GI5uGRpL9A` |

### BountySubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Bounty's Submissions | GET | `/bounties/{{bountyId}}/submissions` | `conn_mod_def::GKxTRsTZjFg::Lp-bdIB5SMWTlrnis7QWMg` |
| Reject a Bounty Submission | POST | `/bounties/{{bountyId}}/submissions/{{submissionId}}/reject` | `conn_mod_def::GKxTRpuoiOg::81vpik9wTT6bqCBkO4n6Iw` |

### PartnerLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Partner Link | POST | `/partners/links` | `conn_mod_def::GKxTTnSjGoA::et5il1EFTviwGu2c8sIEXw` |
| Upsert a Partner Link | PUT | `/partners/links/upsert` | `conn_mod_def::GKxTTy7xLhg::xr41VG4EQmyj7kGFhi8wJw` |

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Track a Lead | POST | `/track/lead` | `conn_mod_def::GKxTULTFN0A::-mPTivQTR5qSHsFwfAPhew` |

### BountySubmission

| Action | Method | Path | Action id |
|---|---|---|---|
| Approve a Bounty Submission | POST | `/bounties/{{bountyId}}/submissions/{{submissionId}}/approve` | `conn_mod_def::GKxTRqMfQXA::yeFa6TmSRwOLTsAPsNzcMg` |

### Analytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Analytics for a Link, a Domain, or the Authenticated Workspace | GET | `/analytics` | `conn_mod_def::GKxTR2hrrbA::AY3hclhjQZ6y3vGZPSzBrw` |

### DeepLinkOpenEvent

| Action | Method | Path | Action id |
|---|---|---|---|
| Track a Deep Link Open Event | POST | `/track/open` | `conn_mod_def::GKxTULTJG1g::TfT1J7GFR9uuvNEXdHfPvw` |

### Sales

| Action | Method | Path | Action id |
|---|---|---|---|
| Track a Sale | POST | `/track/sale` | `conn_mod_def::GKxTULpTq7A::lFQRhIutQ2ajao9dtYU4XQ` |

### ReferralsEmbedToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Referrals Embed Token | POST | `/tokens/embed/referrals` | `conn_mod_def::GKxTSfjMTUA::sk3sXgBuRVGe7kOl1MyMZQ` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Events | GET | `/events` | `conn_mod_def::GKxTSt8eoLg::y3Ew0m3ARjOcaQ2rZeVp5g` |

### PartnersLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Partner's Links | GET | `/partners/links` | `conn_mod_def::GKxTTxjzkmg::25n61xoMRo-C3bSgoUzN5g` |

### PartnerAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Partner Analytics | GET | `/partners/analytics` | `conn_mod_def::GKxTT0m4Agg::ZjbAb2qQS9qR0OLwb2QcNQ` |

### Payouts

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Payouts | GET | `/payouts` | `conn_mod_def::GKxTT1cVGtA::oDyPb3dXR4iQcRLUglZvIw` |

### QrCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a QR Code | GET | `/qr` | `conn_mod_def::GKxTUBlb3Hg::N_eRrfzuS7SolO3FOKMvBA` |

## When a call fails

The error comes from Dub, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/dub

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
