---
name: klazify
description: Klazify is a website classification platform that uses machine learning to categorize websites and online businesses, providing domain-based intelligence that developers and businesses can use to organize, enrich, or analyze web data. Read and write Klazify data through One: categorytaxonomy, discovery, domaincategorization, domainexpiration, companydata, domainsocialmedia and more, 13 actions with real parameter documentation. Use whenever the user asks to look something up in Klazify, create or update a record there, or build code against the Klazify API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: klazify
  generated-from: one-knowledge-base
---

# Klazify through One

Klazify is a website classification platform that uses machine learning to categorize websites and online businesses, providing domain-based intelligence that developers and businesses can use to organize, enrich, or analyze web data.

One exposes Klazify through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `klazify` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Klazify is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Klazify account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CategoryTaxonomy

| Action | Method | Path | Action id |
|---|---|---|---|
| List Category Taxonomy Using v1 or v2 | GET | `/api/list-category/{{version}}` | `conn_mod_def::GMjXSJew9wA::Aol2Jg95RRGqSscCbQf72A` |
| Test Connection | GET | `/api/list-category/{{version}}` | `conn_mod_def::GMjXoezEj8g::sLPGNFszQL2XnX3guArKbA` |

### Discovery

| Action | Method | Path | Action id |
|---|---|---|---|
| Discovery Search | POST | `/api/discovery` | `conn_mod_def::GMjXSJq6-uA::zGxdNAOOS8aDRXVRV37P7w` |

### DomainCategorization

| Action | Method | Path | Action id |
|---|---|---|---|
| Categorize a Domain All Together | POST | `/api/categorize` | `conn_mod_def::GMjXSKHABdg::a-_F0bb0RlKGMQR9Y88Dfw` |

### DomainExpiration

| Action | Method | Path | Action id |
|---|---|---|---|
| Domain Expiration | POST | `/api/domain_expiration` | `conn_mod_def::GMjXSKSyIKA::2wEPfPwPQk2MzbES7LdgBg` |

### CompanyData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Data by Domain | POST | `/api/domain_company` | `conn_mod_def::GMjXSKurf1A::-_FRmtuQRtiZkZlnMUpAeA` |

### DomainSocialMedia

| Action | Method | Path | Action id |
|---|---|---|---|
| Domain Social Media | POST | `/api/domain_social_media` | `conn_mod_def::GMjXSQ7mueA::N953XjqrSCus1nze7zstmg` |

### DomainLogo

| Action | Method | Path | Action id |
|---|---|---|---|
| Domain Logo Using Klazify | POST | `/api/domain_logo` | `conn_mod_def::GMjXSRVkj5A::6YI51mhGScO6gzUGvegk0g` |

### SimilarDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Similar Domains | POST | `/api/similar_domain` | `conn_mod_def::GMjXSRVWEKA::M2nIJ6bpQNSFCBgdwiB67A` |

### RealTimeCategorization

| Action | Method | Path | Action id |
|---|---|---|---|
| Real Time Categorization Using Klazify | POST | `/api/real_time_categorization` | `conn_mod_def::GMjXSSqvMtg::0yT0vXxPTpOxkkJZ3v71Cg` |

### DomainIabCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Domain Iab Categories | POST | `/api/domain_iab_categories` | `conn_mod_def::GMjXSZdncYg::6TzrgxCiSLSqyhhW23xz2A` |

### DomainTrafficIntelligence

| Action | Method | Path | Action id |
|---|---|---|---|
| Domain Traffic Intelligence | POST | `/api/domain_traffic_intelligence` | `conn_mod_def::GMjXSf7vo8A::7fxBkmo5RGOGhvYBSjuKZw` |

### DomainTech

| Action | Method | Path | Action id |
|---|---|---|---|
| Tech Stack Using Domain Tech | POST | `/api/domain_tech` | `conn_mod_def::GMjXSgDvsbA::8_zhPuyMTaKJtpw1q9CAGQ` |

## When a call fails

The error comes from Klazify, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/klazify

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
