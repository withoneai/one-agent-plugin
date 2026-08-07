---
name: nyne-ai
description: Nyne.ai surfaces person- and business-level purchase-intent signals by monitoring over 200 million sources for real-time buying events, life-changes and enriched contact data, delivered through APIs and webhooks for growth, sales and AI workflows. Read and write Nyne.ai data through One: companyenrichment, personarticlesearch, personask, persondiscover, personevents, socialprofiles and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in Nyne.ai, create or update a record there, or build code against the Nyne.ai API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: nyne-ai
  generated-from: one-knowledge-base
---

# Nyne.ai through One

Nyne.ai surfaces person- and business-level purchase-intent signals by monitoring over 200 million sources for real-time buying events, life-changes and enriched contact data, delivered through APIs and webhooks for growth, sales and AI workflows.

One exposes Nyne.ai through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `nyne-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Nyne.ai is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Nyne.ai account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CompanyEnrichment

| Action | Method | Path | Action id |
|---|---|---|---|
| Enrich a Company | POST | `/company/enrichment` | `conn_mod_def::GKoxUJNDwVY::DJbJWYETRY29obLRikUFOw` |

### PersonArticleSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Articles About a Person | GET | `/person/articlesearch` | `conn_mod_def::GKoxUfZkEUI::TqUnhkobTdGp9Gv-XHydFA` |

### PersonAsk

| Action | Method | Path | Action id |
|---|---|---|---|
| Ask Natural Language Questions About a Person | POST | `/person/ask` | `conn_mod_def::GKoxUqYBSIQ::WIcs2vfnQj-yK3n-Wzwpog` |

### PersonDiscover

| Action | Method | Path | Action id |
|---|---|---|---|
| Discover People by Keywords | POST | `/person/discover` | `conn_mod_def::GKoxUqxw0FQ::OQ2GHjvHRCmgnoXr1y7kDg` |

### PersonEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Discover People Linked to Events | GET | `/person/events` | `conn_mod_def::GKoxU50nvCo::o8XFagYsQpW0gN5jUAUbsQ` |

### SocialProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Look Up Social Media Profiles for a Person | POST | `/person/social-profiles` | `conn_mod_def::GKoxVJ0xFlU::w6yuUpbGSZ2zf-5Lbo46NQ` |

### InvestorLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| Queue an Investor Lookup | POST | `/company/funders` | `conn_mod_def::GKoxUKgDIBQ::ndSwxgtiQm6J5sWZhhUOaQ` |

### CompanySearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search for Companies | POST | `/company/search` | `conn_mod_def::GKoxUZZ9cEI::YNsrPgMfTwyUa8UE6HsZzA` |

### SingleSocialLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| Look Up a Person's Single Social Profile URL | GET | `/person/single-social-lookup` | `conn_mod_def::GKoxVI69sqg::fi8Ybo_xTma5gn1ml699Vw` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Search for People | POST | `/person/search` | `conn_mod_def::GKoxVJuvWHk::15gtDYvoS0eFr0Vsw2CeIQ` |

### CompanyFunding

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Company Funding Information | GET | `/company/funding` | `conn_mod_def::GKoxUaWZQao::_7b2q10hTiiploeJqID6gw` |

### CompanyFeatureChecks

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Company's Website for a Specific Feature | POST | `/company/checkfeature` | `conn_mod_def::GKoxUKstMVY::qs_cBG-xSWaMz_3pB1eUjw` |

### PersonInteractions

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Person Interaction Data | GET | `/person/interactions` | `conn_mod_def::GKoxU88uHpk::5oqPZcImRa-xdwPiDlabfA` |

### CompanyNeeds

| Action | Method | Path | Action id |
|---|---|---|---|
| Summarize a Company's Recent Pain Points and Challenges from Official Filings | POST | `/company/needs` | `conn_mod_def::GKoxUcJmjgc::IbV8YErWQBeqODpxFBUtiw` |

### PersonNewsfeed

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Person's Recent Social Media Newsfeed | GET | `/person/newsfeed` | `conn_mod_def::GKoxVIZTDZ4::1br3w_hDRUGG1HdKEFmuRA` |

### PersonLeads

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Potential Leads Using Natural Language Descriptions | GET | `/person/leads` | `conn_mod_def::GKoxU-dlZsE::0GSYWBO2SyOvAeexkVxJNg` |

### CompanyCheckseller

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Whether a Company Sells a Specific Product or Service | POST | `/company/checkseller` | `conn_mod_def::GKoxUMfNHHI::w2R1lLYHQ3SyvSXmgWhq3g` |

### PersonalInterests

| Action | Method | Path | Action id |
|---|---|---|---|
| Discover a Person's Personal Interests | GET | `/person/interests` | `conn_mod_def::GKoxU6ngawI::SEr09Fd3Sr2w5P-YVAHOFg` |

### PersonDeepResearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Deep Research Dossier for a Person | POST | `/person/deep-research` | `conn_mod_def::GKoxUr1xdMI::PDes7ksZSl-vp2xJLHXjMQ` |

### PersonDiscovery

| Action | Method | Path | Action id |
|---|---|---|---|
| Discover People from the Open Web | GET | `/person/discovery` | `conn_mod_def::GKoxUvcDvuU::J2jMm7CwQHq8r2WpjsOz1Q` |

### CompanyDiscovery

| Action | Method | Path | Action id |
|---|---|---|---|
| Discover Companies From the Open Web | GET | `/company/discovery` | `conn_mod_def::GKoxUKv6CYs::Bnij_UOiQxuC38s0j9hCIQ` |

### CompetitorEngagements

| Action | Method | Path | Action id |
|---|---|---|---|
| Discover Competitor Engagements for LinkedIn Profiles | POST | `/person/competitor-engagements` | `conn_mod_def::GKoxUszjFgw::5xAs2XczSf6vmT6HWU6ZmA` |

### PersonSimulation

| Action | Method | Path | Action id |
|---|---|---|---|
| Simulate a Person's Response to a Question | POST | `/person/simulation` | `conn_mod_def::GKoxVIgAVgA::AaAvjTtZQtmgTvtAo7U8Iw` |

### PersonEnrichment

| Action | Method | Path | Action id |
|---|---|---|---|
| Enrich a Person | POST | `/person/enrichment` | `conn_mod_def::GKoxU6dD1yg::18Zet5PTRZCU-xc1yWmskQ` |

### Usage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Usage Statistics | GET | `/usage` | `conn_mod_def::GKoxUbBGBnk::xwQGs_EfQc6JdCdpG8x1IQ` |

## When a call fails

The error comes from Nyne.ai, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/nyne-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
