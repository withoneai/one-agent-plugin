---
name: security-trails
description: SecurityTrails is a cybersecurity data platform that provides DNS, domain, IP, and historical internet asset intelligence through APIs, allowing security teams, researchers, and developers to investigate infrastructure, enrich threat analysis, and monitor changes across internet-facing assets. Read and write SecurityTrails data through One: projectassets, projects, ips, projectassetfilters, domains, projecttags and more, 40 actions with real parameter documentation. Use whenever the user asks to look something up in SecurityTrails, create or update a record there, or build code against the SecurityTrails API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: security-trails
  generated-from: one-knowledge-base
---

# SecurityTrails through One

SecurityTrails is a cybersecurity data platform that provides DNS, domain, IP, and historical internet asset intelligence through APIs, allowing security teams, researchers, and developers to investigate infrastructure, enrich threat analysis, and monitor changes across internet-facing assets.

One exposes SecurityTrails through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `security-trails` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SecurityTrails is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SecurityTrails account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ProjectAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Project's Assets | GET | `/v2/projects/{{projectId}}/assets` | `conn_mod_def::GLGCJYhfbog::jE6h2-aoT3iuL7L7sby7Dw` |
| Read a Project Asset by ID | GET | `/v2/projects/{{projectId}}/assets/{{assetId}}` | `conn_mod_def::GLGCJhxvxkA::21oD_xIKR26b9LsdNWGG0g` |
| Apply Tag To a Project Asset | PUT | `/v2/projects/{{projectId}}/assets/{{assetId}}/tags/{{tagName}}` | `conn_mod_def::GLGCJMPdYuA::e9sOobepRG6Pb06lddU1-A` |
| Remove Tag From a Project Asset | DELETE | `/v2/projects/{{projectId}}/assets/{{assetId}}/tags/{{tagName}}` | `conn_mod_def::GLGCJf_RiqA::MtUDl-miQeyyhPQXljFHrg` |
| Search a Project's Assets | POST | `/v2/projects/{{projectId}}/assets/_search` | `conn_mod_def::GLGCJiIqLLA::9BE4jWbbR2SKXiRqQpC3nw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Tag Task Status for a Project | GET | `/v2/projects/{{projectId}}/tags/_task_status/{{taskId}}` | `conn_mod_def::GLGCLFzL_Ug::3BpKpmUhQom3-Xl2CwZTfQ` |
| List Projects | GET | `/projects` | `conn_mod_def::GLGCKjhtKWA::aQp0H9B7SbaCmjwkNu3uyQ` |
| Bulk Add Remove Assets for a Project | POST | `/v2/projects/{{projectId}}/tags/_bulk_tag_assets` | `conn_mod_def::GLGCKvAI-fA::PT7YhoK7T9Crg_-q6geBtQ` |

### Ips

| Action | Method | Path | Action id |
|---|---|---|---|
| Explore Nearby IPs | GET | `/v1/ips/nearby/{{ipaddress}}` | `conn_mod_def::GLGCJprzaKA::t6A6tCA0Qwes2p-4Dc8cAg` |
| Get IP Whois | GET | `/v1/ips/{{ipaddress}}/whois` | `conn_mod_def::GLGCJ29DsDg::6JCpU4jTQ06DZE3VBlMOCQ` |
| Search IPs Using DSL | POST | `/ips/list` | `conn_mod_def::GLGCKX-H3Sg::yJNAyEgpQ9OEJdsCNE6FSA` |

### ProjectAssetFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Asset Filters | GET | `/v2/projects/{{projectId}}/filters` | `conn_mod_def::GLGCJOGu8kg::YvZ9SKD2SZ-616M7erHKFw` |
| Get Filters for a Project's Assets | POST | `/v2/projects/{{projectId}}/filters` | `conn_mod_def::GLGCJKpA8ag::XN9MvMSrS5uxkb1uYvp28w` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Domains by Filter | POST | `/domains/list` | `conn_mod_def::GLGCKYIEGCg::DY0s7tEESSOTuoz4GbWcRw` |
| Search Domains Using DSL | POST | `/v1/domains/list-backup` | `conn_mod_def::GLGCKbanrig::gXZbfA2lQ8awFp_eUAijPA` |

### ProjectTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Tags | GET | `/v2/projects/{{projectId}}/tags` | `conn_mod_def::GLGCKvJRkjA::nn22CRIJQPaSb-ZOnTT6qA` |
| Add a Project Tag | POST | `/v2/projects/{{projectId}}/tags/{{tagName}}` | `conn_mod_def::GLGCKvAPICg::lG9yIYsOTv210M8Hepsipw` |

### ProjectAssetTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Add Remove Asset Tags for a Project Asset | POST | `/v2/projects/{{projectId}}/assets/{{assetId}}/tags` | `conn_mod_def::GLGCJKpsQ4A::gE15XDM1RrOTdupvfhhFBw` |

### ProjectAssetExposures

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project Asset's Exposures | GET | `/v2/projects/{{projectId}}/assets/{{assetId}}/exposures` | `conn_mod_def::GLGCJgXXaWA::jwUvQtR9RjuJMaf_t3EGJw` |

### ExposureAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Exposure Assets for a Project | GET | `/v2/projects/{{projectId}}/exposures/{{signatureId}}` | `conn_mod_def::GLGCJguSXHA::FQpAM_ZUTPCMJOWREFmaaA` |

### WhoisHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| WHOIS History by Domain | GET | `/v1/history/{{hostname}}/whois` | `conn_mod_def::GLGCKkG2c1A::k_FUp_6xTDy1Y6Z5WVOMVg` |

### ProjectStaticAssetsRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Static Assets to a Project's Rules | POST | `/v2/projects/{{projectId}}/rules/_bulk_static_assets` | `conn_mod_def::GLGCKkgZ30g::UWi6G5VnRXKinGZAI0Q8IQ` |

### FeedSubdomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Feed Subdomains by Type | GET | `/v1/feeds/subdomains/{{type}}` | `conn_mod_def::GLGCKkyM7PA::Cc4zhkbxTaWOG87pgi7aJA` |

### DnsHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get DNS History for a Hostname by Record Type | GET | `/v1/history/{{hostname}}/dns/{{type}}` | `conn_mod_def::GLGCJqDA9Wg::h4zEmHt2R0qJHft-n0mW6w` |

### DomainFeedFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Domain Feed Files by Type | GET | `/v1/feeds/domains/{{type}}` | `conn_mod_def::GLGCJrNBHnA::F8EQVKuGRS6sqS9mnMdWxQ` |

### AssociatedDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Associated Domains for a Domain | GET | `/v1/domain/{{hostname}}/associated` | `conn_mod_def::GLGCJrf8ulA::DfwZmh48QVKHEh1z3bhJxg` |

### ProjectExposures

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Exposures | GET | `/v2/projects/{{projectId}}/exposures` | `conn_mod_def::GLGCJtudQcg::hYXODSXgQlmHk28Zgvq8xQ` |

### DomainWhois

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Domain WHOIS | GET | `/v1/domain/{{hostname}}/whois` | `conn_mod_def::GLGCJ2ThImA::Pa1hn9SQQoK3vfN64x07tQ` |

### UserAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Agents for an IP Address | GET | `/v1/ips/{{ipaddress}}/useragents` | `conn_mod_def::GLGCJ2ThUUA::NoCQw88UTgiO8tjfuj2voQ` |

### DomainSsl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Domain SSL | GET | `/v1/domain/{{hostname}}/ssl` | `conn_mod_def::GLGCJ7Nvtvg::zUFu3NeURSex6HrxHli1zg` |

### Domain

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Domain | GET | `/v1/domain/{{hostname}}` | `conn_mod_def::GLGCKGHej5g::Y6cAUw1STCOJYwSSlVahCQ` |

### DomainTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Domain's Tags | GET | `/v1/domain/{{hostname}}/tags` | `conn_mod_def::GLGCKOK89pA::kQyiQlgDS0e772qnvQ0kaw` |

### IpSearchStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| IP Search Statistics | POST | `/ips/stats` | `conn_mod_def::GLGCKOLg9Wg::Dz309tj5Q4q3ncpcjNYzSg` |

### ProjectReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Report Type | GET | `/v2/action_center/reports/{{projectId}}/{{reportType}}` | `conn_mod_def::GLGCKOTgctA::df7ZtGPmQx2AEYXx4xU4AA` |

### Subdomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Subdomains for a Domain | GET | `/v1/domain/{{hostname}}/subdomains` | `conn_mod_def::GLGCKO1cakA::wlniD9fuRnmR6a--5xnZXw` |

### Ping

| Action | Method | Path | Action id |
|---|---|---|---|
| Ping | GET | `/ping` | `conn_mod_def::GLGCKPfG-uA::wZo7sfS8SLizdkGVEkl4pg` |

### ScrollResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scroll Results by Scroll ID | GET | `/v1/scroll/{{scrollId}}` | `conn_mod_def::GLGCKXAqGjA::hvo84V28SSaGe86KcxInFA` |

### DomainStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Domain Statistics | POST | `/domains/stats` | `conn_mod_def::GLGCKXw82Kg::i42LmBfURCmLoZyXY56HPQ` |

### AccountUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Usage | GET | `/v1/account/usage` | `conn_mod_def::GLGCKljDwbA::a6lAKRIoSkesGGb1VOehVA` |

### ProjectStaticAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Static Assets | GET | `/v2/projects/{{projectId}}/rules/static_assets` | `conn_mod_def::GLGCKvijlSA::eXrOPfj0TdivmQf-X_-IWw` |

## When a call fails

The error comes from SecurityTrails, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/security-trails

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
