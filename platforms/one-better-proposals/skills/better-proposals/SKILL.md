---
name: better-proposals
description: A web-based platform that enables businesses to create, customize, send, and track professional sales proposals and contracts with interactive elements, e-signatures, and analytics to streamline client engagement and close deals faster. Read and write Better Proposals data through One: proposals, company, proposal, quote, companies, currencies and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in Better Proposals, create or update a record there, or build code against the Better Proposals API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: better-proposals
  generated-from: one-knowledge-base
---

# Better Proposals through One

A web-based platform that enables businesses to create, customize, send, and track professional sales proposals and contracts with interactive elements, e-signatures, and analytics to streamline client engagement and close deals faster.

One exposes Better Proposals through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `better-proposals` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Better Proposals is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Better Proposals account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Proposals

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Proposals | GET | `/proposal/count` | `conn_mod_def::GJt0qVU92Ag::Efx41lPUQW2YWEdyOcrHNQ` |
| List New Proposals | GET | `/proposal/new` | `conn_mod_def::GJt0pY8rKis::1NPVDqDaQg-2OkOrJi4aNw` |
| List Proposals | GET | `/proposal` | `conn_mod_def::GJt0pSKM8qI::VVWVLgScT3qY4wHVAfQJOw` |

### Company

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company | GET | `/company/{{COMPANY_ID}}/` | `conn_mod_def::GJt0oZ3gNlE::t87wjY-ARg2YfBs87ST-QQ` |
| Create a Company | POST | `/company/create` | `conn_mod_def::GJt0oj9v4pc::SZ9yhZEoR8-vUcf2oLy0rg` |

### Proposal

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Proposal | GET | `/proposal/{{PROPOSAL_ID}}/` | `conn_mod_def::GJt0qO3Eu1Q::Vd45hQ4AQCqH4JuFuOmtaA` |
| Create a Proposal | POST | `/proposal/create` | `conn_mod_def::GJt0qeCF88w::snFeBv7_TASmd6ZbVc-BYA` |

### Quote

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Quote | GET | `/quote/{{QUOTE_ID}}/` | `conn_mod_def::GJt0qzXAKy0::rxtqFl2iQMupporX6wKEjw` |
| Create a Quote | POST | `/quote/create` | `conn_mod_def::GJt0q9XIico::8vWuLCiHTLGxiOb8v48ufg` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Companies | GET | `/company` | `conn_mod_def::GJt0oI82Spo::-PO46yH0Rh-gRqiba0rEEw` |

### Currencies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Currencies | GET | `/currency` | `conn_mod_def::GJt0oqidpyk::8tnG9lzfTdOu53DWere8KA` |

### Currency

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Currency | GET | `/currency/{{CURRENCY_ID}}/` | `conn_mod_def::GJt0oz7h734::ZE71CWvOQcKdjh8rkGr4UQ` |

### DocumentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Document Types | GET | `/doctype` | `conn_mod_def::GJt0o_fu4b8::V4_fLWgoRjWcN2tnkOtSmQ` |

### DocumentType

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Document Type | POST | `/doctype/create` | `conn_mod_def::GJt0pLSdkko::zvV4Bxh0QVmLWZlO_SRU1A` |

### OpenedProposals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Opened Proposals | GET | `/proposal/opened` | `conn_mod_def::GJt0pjv_dUQ::-p6A5JVETVqR1JfjqhEqjQ` |

### SentProposals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sent Proposals | GET | `/proposal/sent` | `conn_mod_def::GJt0prDGtZM::IMFr530zRdGagK6k2ifJWA` |

### SignedProposals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Signed Proposals | GET | `/proposal/signed` | `conn_mod_def::GJt0p2MAB8c::O-6V_coMQlKQeIqVM0u0Lw` |

### PaidProposals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Paid Proposals | GET | `/proposal/paid` | `conn_mod_def::GJt0qFAlKsM::u9cuVzVBQ8meEqEglbqZIg` |

### ProposalCover

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Proposal Cover | POST | `/proposal/cover/create` | `conn_mod_def::GJt0qmGFxBY::yFMuynyqQo-rXN3GRSM3bA` |

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Quotes | GET | `/quote` | `conn_mod_def::GJt0qr81GBA::Mn2q9VimSMWESk7SqHzxKg` |

### AccountSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Settings | GET | `/settings` | `conn_mod_def::GJt0rDMpJXc::syH3OYh1RhqIV5qkLGseCw` |

### BrandSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Brand Settings | GET | `/settings/brand` | `conn_mod_def::GJt0rI2Fv1c::wHdMMOiJSPSHJvEcRFXKww` |

### MergeTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Merge Tags (Settings) | GET | `/settings/merge_tag` | `conn_mod_def::GJt0rOTy-iU::NuKDzPKjT4-QlLlJbfR5Aw` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Templates | GET | `/template` | `conn_mod_def::GJt0rXOtJWg::6-0PYvgHTH6AGTvoIhdR9w` |

### Template

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template | GET | `/template/{{TEMPLATE_ID}}/` | `conn_mod_def::GJt0rdrVTWQ::Fo9q7ghRSzOey_PHcl2xow` |

## When a call fails

The error comes from Better Proposals, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/better-proposals

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
