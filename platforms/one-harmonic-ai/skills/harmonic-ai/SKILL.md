---
name: harmonic-ai
description: Harmonic is a startup intelligence platform that aggregates and analyzes data on companies, founders, investors, and market activity, enabling venture capital and growth teams to discover emerging startups, track opportunities, and integrate enriched company data into workflows via APIs and bulk data access. Read and write Harmonic.ai data through One: companies, persons, companywatchlists, peoplewatchlists, savedsearches, companyattachments and more, 81 actions with real parameter documentation. Use whenever the user asks to look something up in Harmonic.ai, create or update a record there, or build code against the Harmonic.ai API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: harmonic-ai
  generated-from: one-knowledge-base
---

# Harmonic.ai through One

Harmonic is a startup intelligence platform that aggregates and analyzes data on companies, founders, investors, and market activity, enabling venture capital and growth teams to discover emerging startups, track opportunities, and integrate enriched company data into workflows via APIs and bulk data access.

One exposes Harmonic.ai through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `harmonic-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Harmonic.ai is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Harmonic.ai account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Get Company By Id Or Urn | GET | `/companies` | `conn_mod_def::GKBWP4A46XE::Ll8DARErSI6909QHnNj9iQ` |
| Get Company By ID or URN | GET | `/companies/{{idOrUrn}}` | `conn_mod_def::GKBWQKN5bxM::O66MMdk-TUqGsBEN4oiZhQ` |
| Get Global Company Custom Fields | GET | `/companies/custom_fields` | `conn_mod_def::GKBWQaam7-s::h46q1c-6Sl2uSycGicAOlA` |
| Batch Complete Upload for a Company | PUT | `/companies/{{idOrUrn}}/attachments` | `conn_mod_def::GKBWPtXfZ_8::SJOEh1QTSjK-lb4U8V97QA` |
| Batch Get Companies By ID or URN | POST | `/companies/batchGet` | `conn_mod_def::GKBWPvniddg::9Omu8wQoTJ6KQCs0GM8qqw` |
| Create Global Custom Field for Companies | POST | `/companies/custom_field` | `conn_mod_def::GKBWP_ydd1o::mG49ZZBcTmmCMpVVmPIeXA` |
| Get Company By Identifiers | POST | `/companies` | `conn_mod_def::GKBWQN1BZIA::FbHuoVncQZm4s0YgBdFaFg` |
| Global Import Companies | POST | `/companies/entries` | `conn_mod_def::GKBWQjlIE7w::Y3Z-9EPyS4qT1NmB-pP3wQ` |
| Link Attachments to a Company | PATCH | `/companies/{{idOrUrn}}/attachments` | `conn_mod_def::GKBWQk2nbDM::jqjCD_PwSuuIuD3sll54SQ` |
| Search Companies By Keywords | POST | `/search/companies_by_keywords` | `conn_mod_def::GKBWQtQbDMY::8MtV45rlQMykFOB-AlmhRw` |
| Update Global Custom Field | PUT | `/companies/custom_field` | `conn_mod_def::GKBWQ05azUg::VFWGABzXSG6CuOazwP9J7A` |

### Persons

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Get Persons By Id Or Urn | GET | `/persons` | `conn_mod_def::GKBWRla5A_Q::nYdSu3QFQvyYGor5mICCWQ` |
| Get Person By ID or URN | GET | `/persons/{{idOrUrn}}` | `conn_mod_def::GKBWRs4PDH0::8KPRakkTTWWw5jqSh9ePqA` |
| Batch Get Persons by ID or URN | POST | `/persons/batchGet` | `conn_mod_def::GKBWRY_CgU4::8mUw1RphQkCFD8Tt-Rc_MA` |
| Delete Global Custom Field | DELETE | `/persons/custom_field` | `conn_mod_def::GKBWRj6CbpM::-kTXFrDMRrqc6W2gRHplVw` |
| Get Person By Canonical | POST | `/persons` | `conn_mod_def::GKBWRtilq58::CfkNOKVCTOSPNqfGp2kOAg` |
| Global Import People | POST | `/persons/entries` | `conn_mod_def::GKBWRt01z2w::wEDmLC-GRd-4_7mNiBQoFw` |
| Link Attachments to a Person | PATCH | `/persons/{{idOrUrn}}/attachments` | `conn_mod_def::GKBWRtDsW5w::nWoKQu5hSGq-pmjplCHK9w` |
| Update Global Custom Field for Persons | PUT | `/persons/custom_field` | `conn_mod_def::GKBWR2JjRW8::KOIqQIVlQpCr0cgqgdw_XQ` |

### CompanyWatchlists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Watchlist | GET | `/watchlists/companies/{{idOrUrn}}` | `conn_mod_def::GKBWQS5dQEE::sDf6uT0dQ02sgD_o3b6uIQ` |
| Get Company Watchlists By Owner | GET | `/watchlists/companies` | `conn_mod_def::GKBWQc6bZOk::fgh2p3f_TI-8s9kEAOIPVg` |
| Add Companies To a Company Watchlist | POST | `/watchlists/companies/{{idOrUrn}}:addCompanies` | `conn_mod_def::GKBWPuIJjLg::yxV0CmoORKC_K27oxDRpoA` |
| Batch Delete Entries from a Company Watchlist | POST | `/watchlists/companies/{{idOrUrn}}/entries:batchDelete` | `conn_mod_def::GKBWP4PyA5o::63R1TQD7QCKlwwLRi2T2TQ` |
| Create Company Watchlist | POST | `/watchlists/companies` | `conn_mod_def::GKBWP3zA8_o::c6HaSGUqTjitG2GauoARvA` |
| Delete Company Watchlist | DELETE | `/watchlists/companies/{{idOrUrn}}` | `conn_mod_def::GKBWP_m4iEc::zLNdqdWUTBy62OBLkZ0MxA` |
| Update Company Watchlist | PUT | `/watchlists/companies/{{idOrUrn}}` | `conn_mod_def::GKBWQr4_H1Q::BEWn4swwSkmv0-rfvB0Kfg` |

### PeopleWatchlists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a People Watchlist | GET | `/watchlists/people/{{idOrUrn}}` | `conn_mod_def::GKBWRGPzx6M::KD_xw2fbTtGf_LqO9BYrgw` |
| Get People Watchlists By Owner | GET | `/watchlists/people` | `conn_mod_def::GKBWRF-JZIU::1mf3AJbGSq-Wh9hmhGnYqw` |
| Add People To A People Watchlist | POST | `/watchlists/people/{{idOrUrn}}:addPeople` | `conn_mod_def::GKBWQ1cwOIs::VoYdbUOYRAys9UjdXSQ96w` |
| Create People Watchlist | POST | `/watchlists/people` | `conn_mod_def::GKBWQ9O0lQI::p4bXCGh_TO6qzhLOJ_mhMw` |
| Delete a People Watchlist | DELETE | `/watchlists/people/{{idOrUrn}}` | `conn_mod_def::GKBWQ9FE7AU::YaeSingAQ9GO9Wgkrp2OfQ` |
| Remove Person From a People Watchlist | POST | `/watchlists/people/{{idOrUrn}}:removePeople` | `conn_mod_def::GKBWRP6O338::7Wi_SQCCRXqEeh_1fB8ang` |
| Update a People Watchlist | PUT | `/watchlists/people/{{idOrUrn}}` | `conn_mod_def::GKBWRPE5vnY::xIP7u3orT3Gs_mW3iPEyWA` |

### SavedSearches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Saved Search By Owner | GET | `/saved_searches` | `conn_mod_def::GKBWR9Rx3P8::geJYC-tRR5648L0wxZBJew` |
| Get Saved Searches By Owner | GET | `/savedSearches` | `conn_mod_def::GKBWR9z3ne8::p4D26YcNR3S22lJtiZRgVA` |
| Clear Net New Results for a Saved Search | POST | `/savedSearches/{{idOrUrn}}/clear_net_new_results` | `conn_mod_def::GKBWR1-KoBA::UQ_7hS1LQ922Og1X3ovjTA` |
| Clear Net New Results for a Saved Search | POST | `/saved_searches/{{idOrUrn}}/clear_net_new_results` | `conn_mod_def::GKBWR2esLH8::APwTBClBRveoZxAQXheovQ` |
| Create Saved Search | POST | `/saved_searches` | `conn_mod_def::GKBWR1JVsZU::xUQgyZN2ReSD7_T4tGmjaQ` |
| Create Saved Search | POST | `/savedSearches` | `conn_mod_def::GKBWR1PVH70::Bf2cbtO3Sd-kvtaTZtxFlQ` |

### CompanyAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Attachment Content | GET | `/companies/{{idOrUrn}}/attachments/{{urn}}` | `conn_mod_def::GKBWQKEIrDA::W1xjcGM7RjuFKOQtG3KVjg` |
| Batch Create Attachments for a Company | POST | `/companies/{{idOrUrn}}/attachments` | `conn_mod_def::GKBWPth_hkQ::DYf5BOiDRVSs2uqdGHqH4A` |
| Batch Get Company Attachments | POST | `/companies/attachments` | `conn_mod_def::GKBWPtIChHo::CgqmrLLfSky2owi365_Yhw` |
| Delete a Company's Attachment | DELETE | `/companies/{{idOrUrn}}/attachments/{{urn}}` | `conn_mod_def::GKBWP_6YS-o::66ks5ucKR9a3t8DqzjyfEQ` |

### CompanyWatchlistCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Company Watchlist Custom Field | POST | `/watchlists/companies/{{idOrUrn}}/custom_field` | `conn_mod_def::GKBWP3cPIl0::zmH-i1bNTmeTKbokE5y--g` |
| Delete a Company Watchlist Custom Field | DELETE | `/watchlists/companies/{{idOrUrn}}/custom_field` | `conn_mod_def::GKBWQA4-54I::oqOzDey0TjeZBSya2whYXQ` |
| Update a Company Watchlist Custom Field | PUT | `/watchlists/companies/{{idOrUrn}}/custom_field` | `conn_mod_def::GKBWQ1opXc8::GxfJ8kqDRxi-Q1JuA7whcQ` |

### PersonsAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Complete Upload for a Person's Attachments | PUT | `/persons/{{idOrUrn}}/attachments` | `conn_mod_def::GKBWRZviYpQ::KYPkiNmTTV2YW2isnES6fQ` |
| Batch Create a Person's Attachments | POST | `/persons/{{idOrUrn}}/attachments` | `conn_mod_def::GKBWRcVHNQ0::1x3r9jwMQoCSVc-CBhFMeg` |
| Delete a Person's Attachment | DELETE | `/persons/{{idOrUrn}}/attachments/{{urn}}` | `conn_mod_def::GKBWRjy0FWY::hWYjefArSDme12LVBYNJWA` |

### CompanyWatchlistEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Watchlist Entries | GET | `/watchlists/companies/{{idOrUrn}}/entries` | `conn_mod_def::GKBWQKqi78I::Uf_LTr5RRxeFJYUFpD9_EA` |
| Add Entries to a Company Watchlist | POST | `/watchlists/companies/{{idOrUrn}}/entries` | `conn_mod_def::GKBWP3ozYZc::5qMO1n0TSL-zHoG63Z-DFg` |

### PeopleWatchlistEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get People Watchlist Entries | GET | `/watchlists/people/{{idOrUrn}}/entries` | `conn_mod_def::GKBWRH_8918::VTcz8l-iQ56DRY687qz4zA` |
| Add Entries to a People Watchlist | POST | `/watchlists/people/{{idOrUrn}}/entries` | `conn_mod_def::GKBWRQDnktw::jqJ4VfTuQrmmy8FZkcfPmg` |

### SavedSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Saved Search Results | GET | `/saved_searches:results/{{idOrUrn}}` | `conn_mod_def::GKBWSA9TWyo::AFjpVixuQw-kjbGTAr3GrQ` |
| Get Saved Search Results | GET | `/savedSearches:results/{{idOrUrn}}` | `conn_mod_def::GKBWSKzYuwU::E9zinbXbSp2hYJCmCp8aIA` |

### SavedSearchNetNewResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Saved Search Net New Results | GET | `/savedSearches/{{idOrUrn}}/net_new_results` | `conn_mod_def::GKBWSArEMuM::YC1PkO4-RP6QjfR1fmaCrQ` |
| Get Saved Search Net New Results | GET | `/saved_searches/{{idOrUrn}}/net_new_results` | `conn_mod_def::GKBWR_Y34K0::UFDZk6Z0TFWm6GNsojX2kw` |

### PeopleWatchlistCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a People Watchlist Custom Field | POST | `/watchlists/people/{{idOrUrn}}/custom_field` | `conn_mod_def::GKBWQ-GsA9g::ZTRZT74tRbWjVlCz_d3coA` |
| Delete a People Watchlist Custom Field | DELETE | `/watchlists/people/{{idOrUrn}}/custom_field` | `conn_mod_def::GKBWQ99ZfaQ::4k05n7ImTTmFj0mtLPm99A` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Custom Fields | GET | `/persons/custom_fields` | `conn_mod_def::GKBWRtTIdRk::qtEb4L6cQ5erbuhHdwCI4A` |
| Delete Global Custom Field | DELETE | `/companies/custom_field` | `conn_mod_def::GKBWQAWSrC0::RbEyzy4QRfihZazbbIBDNw` |

### PersonAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Person Attachment's Content | GET | `/persons/{{idOrUrn}}/attachments/{{urn}}` | `conn_mod_def::GKBWRkfFaXo::45Gz_DXARcaw97APhMsckg` |
| Batch Get Person Attachments | POST | `/persons/attachments` | `conn_mod_def::GKBWRZNtY9E::CWbxVzxdS4aIaA1E9aN2hA` |

### UserPeopleImportEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User People Import Entries | GET | `/watchlists/people/imports/{{idOrUrn}}/entries` | `conn_mod_def::GKBWRRNir_E::YGOmAVqLSQaU4n6oqkKKsw` |

### PeopleWatchlistCustomField

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a People's Watchlist Custom Field | PUT | `/watchlists/people/{{idOrUrn}}/custom_field` | `conn_mod_def::GKBWRRyf0xA::WHws3to8TROLI_M4uErSaQ` |

### SimilarCompanies

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Similar Companies | GET | `/search/similar_companies/{{idOrUrn}}` | `conn_mod_def::GKBWQs-6_Lk::ceFcemE9QJK0eIq6jP_6pw` |

### SearchAgent

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Agent | GET | `/search/search_agent` | `conn_mod_def::GKBWQtC7cG4::ZupL8vm5TTOH2yC8y76Dag` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Typeahead Search | GET | `/search/typeahead` | `conn_mod_def::GKBWQtFFmPg::ETrJb4Y-QQigwd0tNpHXLw` |

### EnrichmentRequestStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Enrichment Request Status | GET | `/enrichment_status` | `conn_mod_def::GKBWQ1fSBpM::NzuFQ3njRXWClzylkI_kdA` |

### CompanyWatchlistsNamedViews

| Action | Method | Path | Action id |
|---|---|---|---|
| Upsert a Company Watchlist's Named Views | POST | `/watchlists/companies/{{idOrUrn}}/named_views` | `conn_mod_def::GKBWQ1vkvIs::ymiNU4xaSze84J0bUvRpDQ` |

### UserConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's User Connections | GET | `/companies/{{idOrUrn}}/userConnections` | `conn_mod_def::GKBWQkUE8yo::N-eoFMu1Rna-7vXbFFEeqQ` |

### UserCompanyImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Company Import | GET | `/watchlists/companies/imports/{{idOrUrn}}` | `conn_mod_def::GKBWQaxmMQw::YTLUC9C4QL2hwy3jE1rcjw` |

### CompanyWatchlistImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Watchlist Imports | GET | `/watchlists/companies/{{idOrUrn}}/imports` | `conn_mod_def::GKBWQb4InhM::YVeqxbk-RkmUq5PMQxnJvA` |

### CompanyEmployees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Employees | GET | `/companies/{{idOrUrn}}/employees` | `conn_mod_def::GKBWQccFKgM::uvYounZWQfyc9dbSXN5K5A` |

### UserCompanyImportEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Company Import Entries | GET | `/watchlists/companies/imports/{{idOrUrn}}/entries` | `conn_mod_def::GKBWQlGbkfo::kM1HMK0FSxOTe9NG0nhHoA` |

### UserPeopleImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User People Import | GET | `/watchlists/people/imports/{{idOrUrn}}/` | `conn_mod_def::GKBWRFh6Zxw::fLCXAgJ7TC2NCe8L8kzkbw` |

### PeopleWatchlistsImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a People Watchlist's Imports | GET | `/watchlists/people/{{idOrUrn}}/imports` | `conn_mod_def::GKBWRFnw9vw::Eh4XH1vPTO2NAUY17IwtLA` |

### PeopleWatchlistsNamedViews

| Action | Method | Path | Action id |
|---|---|---|---|
| Upsert a People Watchlist's Named Views | POST | `/watchlists/people/{{idOrUrn}}/named_views` | `conn_mod_def::GKBWRa0XRBw::ULHHjAMsTyWHhFmFEShYVg` |

### PersonsCustomField

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Global Custom Field for Persons | POST | `/persons/custom_field` | `conn_mod_def::GKBWRkeoPAs::6W-wCL2ZSgOY0onJecS5xg` |

### PersonWatchlistEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Delete Entries from a Person Watchlist | POST | `/watchlists/people/{{idOrUrn}}/entries:batchDelete` | `conn_mod_def::GKBWQ9uygOc::M9676xUsSrqyRg-7V_kGPA` |

### Watchlists

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove Companies From a Company Watchlist | POST | `/watchlists/companies/{{idOrUrn}}:removeCompanies` | `conn_mod_def::GKBWQk8c56A::rNtLF9DETHCf2MFXAw2AAw` |

## When a call fails

The error comes from Harmonic.ai, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/harmonic-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
