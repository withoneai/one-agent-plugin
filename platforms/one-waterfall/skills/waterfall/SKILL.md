---
name: waterfall
description: Waterfall provides a unified B2B data platform that aggregates multiple vendors into one API to deliver verified contact details, phone numbers, job changes, and enrichment at scale for sales and GTM teams. Read and write Waterfall data through One: apikeys, companyenrichmentjobs, phoneenrichmentjobs, prospector, companytitles, companytitlesfinderjobs and more, 23 actions with real parameter documentation. Use whenever the user asks to look something up in Waterfall, create or update a record there, or build code against the Waterfall API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: waterfall
  generated-from: one-knowledge-base
---

# Waterfall through One

Waterfall provides a unified B2B data platform that aggregates multiple vendors into one API to deliver verified contact details, phone numbers, job changes, and enrichment at scale for sales and GTM teams.

One exposes Waterfall through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `waterfall` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Waterfall is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Waterfall account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Keys for the Account | GET | `/api-keys` | `conn_mod_def::GJ8TOqyg9n0::AaJGRR9iRt6B7PPO2f2VMw` |
| Create an API Key (Sub-key) | POST | `/api-keys` | `conn_mod_def::GJ8TOrTu7Ek::vGo7jNFKRZOJFwYdd4Am7g` |
| Modify an API Key | PUT | `/api-keys` | `conn_mod_def::GJ8TOrq2eVw::jL3i59oNRBmY41DxY-AEVQ` |

### CompanyEnrichmentJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Enrichment Job Result | GET | `/v1/enrichment/company` | `conn_mod_def::GJ8TO1PYaBY::8OM6_A84QmS1S06QY-u5WQ` |
| Launch a Company Enrichment Job | POST | `/enrichment/company` | `conn_mod_def::GJ8TOzyc4RU::esfuuH0PSa-nCv0RfInLbg` |

### PhoneEnrichmentJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Enrichment Job Result | GET | `/v1/enrichment/phone` | `conn_mod_def::GJ8TO8ctVu8::vO-e3wzNT-C_Ciqe8U77nw` |
| Launch a Phone Enrichment Job | POST | `/enrichment/phone` | `conn_mod_def::GJ8TO8KKXpQ::-ZUbt7RFSM-lLoOp7sB-6A` |

### Prospector

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Prospector Job Result | GET | `/v1/prospector` | `conn_mod_def::GJ8TPDZqsfk::1Ab3COaaQEaNEgMhmVgQLA` |
| Launch a Prospector Contact Search Job | POST | `/prospector` | `conn_mod_def::GJ8TPDNZVjU::cZIymcdcQbS09ThH2cwKUg` |

### CompanyTitles

| Action | Method | Path | Action id |
|---|---|---|---|
| Launch a Company Titles Job | POST | `/company-titles` | `conn_mod_def::GJ8TOyOHzck::2XoNM3qNQ7-Lvg55oRI9yA` |

### CompanyTitlesFinderJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Titles Finder Job | GET | `/v1/company-titles` | `conn_mod_def::GJ8TOyyuE2Y::zItQI1STRHiPlmlViNWg5g` |

### ContactEnrichmentJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Launch a Contact Enrichment Job | POST | `/enrichment/contact` | `conn_mod_def::GJ8TO7447nQ::hAK2N7SuR1qrHYqCVpg4aA` |

### EnrichmentContactJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Enrichment Job Result | GET | `/enrichment/contact` | `conn_mod_def::GJ8TO8hhrxw::Nyu4RqYASxCkZkn5ttpMDA` |

### SearchContact

| Action | Method | Path | Action id |
|---|---|---|---|
| Launch a Search Contact Job | POST | `/search/contact` | `conn_mod_def::GJ8TPKZ__nQ::bxMUMwb_ShyoRERZnOnKMQ` |

### JobChangeJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job Change Job (State & Result) | GET | `/job/change` | `conn_mod_def::GJ8TO8e4VBk::ySY0G-RJQoyGpS0BwDdzbQ` |

### JobChange

| Action | Method | Path | Action id |
|---|---|---|---|
| Launch a Job Change Check | POST | `/job/change` | `conn_mod_def::GJ8TPC1o90g::PRo6Lmr9TjufSg8rk7xoJA` |

### SearchCompany

| Action | Method | Path | Action id |
|---|---|---|---|
| Launch a Search Company Job | POST | `/search/company` | `conn_mod_def::GJ8TPDPh0oU::k5oRdx-VSuu9E2i7N4ArMg` |

### SearchCompanyJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Search Company Job (Company Finder) | GET | `/v1/search/company` | `conn_mod_def::GJ8TPDWe_KA::FyOnqTyUQTOcikqSqLzosw` |

### EmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify a Single Email Address | POST | `/v1/verify/email` | `conn_mod_def::GJ8TPKVW8Y8::o6FSX1dTTwmbM4ja_ELtUA` |

### SearchContactFinderJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Search Contact Finder Job | GET | `/v1/search/contact` | `conn_mod_def::GJ8TPKk3BI0::t5fZMCrERgm99suuFp5BUA` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Usage Information (Account Reporter V2) | GET | `/v2/account` | `conn_mod_def::GJ8TOr93_00::oXvKXXWsRbe9a1k-Us7tkA` |

### CompanyReveal

| Action | Method | Path | Action id |
|---|---|---|---|
| Launch a Company Reveal Job | POST | `/company-reveal` | `conn_mod_def::GJ8TOyuh1b4::yrGUs-iOS7mhG0ePO3emCA` |

### CompanyRevealJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Company Reveal Job | GET | `/v1/company-reveal` | `conn_mod_def::GJ8TOrlXKH4::tJRaFIaDQiOl9YQFdWcb1Q` |

## When a call fails

The error comes from Waterfall, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/waterfall

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
