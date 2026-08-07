---
name: crustdata
description: Crustdata is a real-time B2B data platform and API that provides live people and company data for AI agents and business systems, enabling sales, recruiting, and investment teams to search, enrich, and keep CRM or ATS records up to date. Read and write Crustdata data through One: companies, people, batchjobstatus, batchjobs, batchsearchjobs, personbatchenrich and more, 21 actions with real parameter documentation. Use whenever the user asks to look something up in Crustdata, create or update a record there, or build code against the Crustdata API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: crustdata
  generated-from: one-knowledge-base
---

# Crustdata through One

Crustdata is a real-time B2B data platform and API that provides live people and company data for AI agents and business systems, enabling sales, recruiting, and investment teams to search, enrich, and keep CRM or ATS records up to date.

One exposes Crustdata through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `crustdata` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Crustdata is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Crustdata account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Search Companies | POST | `/batch/company/search` | `conn_mod_def::GMiHw0BdsIA::yTmGm8k-QW-GVXHv3J-_Qw` |
| Enrich Companies | POST | `/company/enrich` | `conn_mod_def::GMiHxE4pMcA::o1Gd7KUYSBSX4uJUyzamcA` |
| Enrich Companies in Batch | POST | `/batch/company/enrich` | `conn_mod_def::GMiHw0_eh_A::lma0CaKzR7uAEqhowE5Fzg` |
| Identify Companies | POST | `/company/identify` | `conn_mod_def::GMiHxEt0ALg::Q7iT70s1TLGShB74O7m24Q` |
| Search Companies | POST | `/company/search` | `conn_mod_def::GMiHxEAolZg::mNOhUhmuQz2YTomNI48YtA` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Enrich People | POST | `/person/enrich` | `conn_mod_def::GMiHxMHTuqA::jyL7MfJETLWM0DWDVrnDIw` |
| Search People | POST | `/person/search` | `conn_mod_def::GMiHxMk3pqg::hyYQjU37TbyuLyumDzMsww` |

### BatchJobStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Batch Job Status | GET | `/batch/{{batchId}}` | `conn_mod_def::GMiHwyd6SmA::MKppQAwnRm-3b_hkxfOPQQ` |

### BatchJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Batch Jobs | GET | `/batch` | `conn_mod_def::GMiHwyeCuog::5QpegOYBQ6CNUnRdtKkWMg` |

### BatchSearchJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Search Jobs | POST | `/batch/job/search` | `conn_mod_def::GMiHwzCck_A::s4EKq8svRfKS23bReMmCyQ` |

### PersonBatchEnrich

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Person Enrich Using Batch | POST | `/batch/person/enrich` | `conn_mod_def::GMiHw792qVg::91hVOt8ySvivcXk6ITNzCA` |

### CompanySearchAutocomplete

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete Using Company Search | POST | `/company/search/autocomplete` | `conn_mod_def::GMiHw7-EiCA::vkuq96W4Twa17qgcqiaqjQ` |

### BatchPersonContactEnrich

| Action | Method | Path | Action id |
|---|---|---|---|
| Contact Enrich Using Batch Person | POST | `/batch/person/contact/enrich` | `conn_mod_def::GMiHw8IYRqg::kDtdVb-0QzW3m7B-LDEkZw` |

### PeopleBatchSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search People in Batch | POST | `/batch/person/search` | `conn_mod_def::GMiHw8QaZ9g::mPxs24jeT9WlJMJd6vkULw` |

### Person

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Identify Person | POST | `/batch/person/identify` | `conn_mod_def::GMiHw86MWxg::ACBMC0AxS_aU15tR5gkyoA` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Jobs | POST | `/job/search` | `conn_mod_def::GMiHxD9c-Jg::GQGu4_E2SCaWec5N6VI1ug` |

### JobSearchAutocomplete

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete Using Job Search | POST | `/job/search/autocomplete` | `conn_mod_def::GMiHxD9-lhA::saCpQ-62Si2JB1WY3JAPDw` |

### PersonSearchAutocomplete

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete Using Person Search | POST | `/person/search/autocomplete` | `conn_mod_def::GMiHxMHTozA::wuTNtyLfT7Gr4uz4W_E7bg` |

### PersonContactEnrich

| Action | Method | Path | Action id |
|---|---|---|---|
| Contact Enrich for a Person | POST | `/person/contact/enrich` | `conn_mod_def::GMiHxMhxk6A::VdgB4jFtRPOEnjHr7P110g` |

### WebEnrichLive

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Using Web Enrich Live | POST | `/web/enrich/live` | `conn_mod_def::GMiHxMzBqCg::R3ZrABt6QU2Zy-myEa8jOQ` |

### WebSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Using Web | POST | `/web/search/live` | `conn_mod_def::GMiHxTjzXXA::vg_YoeywTwKNV1-KBqn6_A` |

## When a call fails

The error comes from Crustdata, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/crustdata

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
