---
name: supabase
description: Supabase is an open-source backend-as-a-service platform that provides a real-time database, authentication, storage, and serverless functions built on PostgreSQL. Read and write Supabase data through One: database, projects, domains, edgefunctions, auth, environments and more, 77 actions with real parameter documentation. Use whenever the user asks to look something up in Supabase, create or update a record there, or build code against the Supabase API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: supabase
  generated-from: one-knowledge-base
---

# Supabase through One

Supabase is an open-source backend-as-a-service platform that provides a real-time database, authentication, storage, and serverless functions built on PostgreSQL.

One exposes Supabase through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `supabase` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Supabase is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Supabase account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Database

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate TypeScript Types | GET | `/v1/projects/{{ref}}/types/typescript` | `conn_mod_def::GC40R8lUrh0::_BuxJ564QjuKnlee7jfudg` |
| Get Project SSL Enforcement Configuration | GET | `/projects/{{ref}}/ssl-enforcement` | `conn_mod_def::GC40SPkxm8w::r59joKAxS9a3BLWguLfZPQ` |
| Get Project's Pgbouncer Config | GET | `/projects/{{ref}}/config/database/pgbouncer` | `conn_mod_def::GC40SCO68Tw::5q0HqGQ9S9-JAnyFetxiLw` |
| Get Project's Postgres Config | GET | `/projects/{{ref}}/config/database/postgres` | `conn_mod_def::GC40SMT31a4::u8XcvKnmShOce_TkuLS0gQ` |
| Get Project's Readonly Mode Status | GET | `/projects/{{ref}}/readonly` | `conn_mod_def::GC40SFwb-08::u3ixU9WiSYmYk3URNPVTvw` |
| Get Project's Supavisor Config | GET | `/projects/{{ref}}/config/database/pooler` | `conn_mod_def::GC40SszDDAE::bp-Li7FiT7Sop5ZN3g5V6w` |
| Get SQL Snippet | GET | `/snippets/{{id}}` | `conn_mod_def::GC40R-FcSOU::j-QatNcTTJ2ytXFZgwdMZQ` |
| List All Backups | GET | `/projects/{{ref}}/database/backups` | `conn_mod_def::GC40SVaj4Yw::kOHsC9xQTiCmv0g7WqgDIQ` |
| List SQL Snippets | GET | `/v1/snippets` | `conn_mod_def::GC40SSqjgKI::vys6h_oeS6OSLMbQ4kszcg` |
| Disable Project's Readonly Mode Temporarily | POST | `/projects/{{ref}}/readonly/temporary-disable` | `conn_mod_def::GC40Rk71X1E::w5RLcH2YTtm6R6saaQcg8A` |
| Enable Database Webhooks | POST | `/projects/{{ref}}/database/webhooks/enable` | `conn_mod_def::GC40RyVkdqI::5ujcAD__SBCg_P77neEr5g` |
| Remove a Read Replica | POST | `/projects/{{ref}}/read-replicas/remove` | `conn_mod_def::GC40Sep3qmU::Uf4bIMccQAeoprP_oeP3Xw` |

6 more Database actions are available through search.

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Project's Eligibility for Upgrades | GET | `/projects/{{ref}}/upgrade/eligibility` | `conn_mod_def::GC40UsOBCos::FPBBwCDSTPGpnF2KxpBFxQ` |
| Get Project Upgrade Status | GET | `/projects/{{ref}}/upgrade/status` | `conn_mod_def::GC40UuAXnCo::YKFbWCjfS5-A9L1IanmzIg` |
| Get Project's Network Restrictions | GET | `/projects/{{ref}}/network-restrictions` | `conn_mod_def::GC40Uo6S-bQ::VpggjSG2TH-_dchISvBzPw` |
| Get Project's Service Health Status | GET | `/projects/{{ref}}/health` | `conn_mod_def::GC40UzKOniM::6S6n8JvxSmeTBP15a8iNGQ` |
| Get Specific Project | GET | `/projects/{{ref}}` | `conn_mod_def::GC40UsaJ0ao::GR6yGwJzQsKBP0vcayJ0lQ` |
| List All Projects | GET | `/projects` | `conn_mod_def::GC40U5B8xKY::_N0C5lBNSoWseIxyeQs1KQ` |
| List Available Restore Versions for Project | GET | `/v1/projects/{{ref}}/restore` | `conn_mod_def::GC40U7VJj60::VpisBTNkQPOmmz-Zp1TEOQ` |
| Cancel Project Restoration | POST | `/projects/{{ref}}/restore/cancel` | `conn_mod_def::GC40UP0_mf4::pweSXuy1T0qMqwCoI5dzVQ` |
| Create Project | POST | `/projects` | `conn_mod_def::GC40UrUylhA::tg4BqV7zSTiH0ERCUwFUDg` |
| Delete Project | DELETE | `/projects/{{ref}}` | `conn_mod_def::GC40UWO1p7o::G9WvmhChT06-j6FJmPy6rQ` |
| Get Project's Network Bans | POST | `/projects/{{ref}}/network-bans/retrieve` | `conn_mod_def::GC40Uys90pw::QUrTWfF0TdWFZvFjBulowg` |
| Pause Project | POST | `/v1/projects/{{ref}}/pause` | `conn_mod_def::GC40U6wHFO4::5Q12BjKpQa6BOJv_NT6Rgw` |

4 more Projects actions are available through search.

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Vanity Subdomain Config | GET | `/projects/{{ref}}/vanity-subdomain` | `conn_mod_def::GC40S4zXg6Q::XGFHIIYbSqW_oWSI0n1Xnw` |
| Get Project's Custom Hostname Config | GET | `/projects/{{ref}}/custom-hostname` | `conn_mod_def::GC40S4xqDbM::xmyFU997RdqGHbhhikIkCg` |
| Activate Custom Hostname for Project | POST | `/projects/{{ref}}/custom-hostname/activate` | `conn_mod_def::GC40S9fnrC0::PeMZm4R7RlGUEoVO_kEVnw` |
| Activate Vanity Subdomain | POST | `/projects/{{ref}}/vanity-subdomain/activate` | `conn_mod_def::GC40S3CUZWQ::XMvki81sQI2FmSZc3PQmmw` |
| Check Vanity Subdomain Availability | POST | `/projects/{{ref}}/vanity-subdomain/check-availability` | `conn_mod_def::GC40S0Z2Azc::yUGxEFDPQwapOK9XD5M6Dw` |
| Delete Project's Vanity Subdomain Configuration | DELETE | `/v1/projects/{{ref}}/vanity-subdomain` | `conn_mod_def::GC40S-ggISc::5i8aeMT5Q0uwLBEPCPDhQQ` |
| Reverify DNS Configuration for Custom Hostname | POST | `/projects/{{ref}}/custom-hostname/reverify` | `conn_mod_def::GC40TJADTLw::HwScG4gIRB2MweEgEUTpew` |
| Update Project's Custom Hostname Configuration | POST | `/projects/{{ref}}/custom-hostname/initialize` | `conn_mod_def::GC40TQxzFzY::FSr8zStaSRS0FhNa89yLyw` |

### EdgeFunctions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Functions | GET | `/projects/{{ref}}/functions` | `conn_mod_def::GC40TgyDb-c::Lo77b6bQR3WQjoFyLFm3mA` |
| Retrieve a Function | GET | `/projects/{{ref}}/functions/{{function_slug}}` | `conn_mod_def::GC40Tdn193o::UtfaruQITDm4rYfTqhnn4A` |
| Retrieve Function Body | GET | `/projects/{{ref}}/functions/{{function_slug}}/body` | `conn_mod_def::GC40TjVUP-Q::cJj72ogNTcyftmhGrcXgsA` |
| Bulk Update Functions | PUT | `/projects/{{ref}}/functions` | `conn_mod_def::GC40T122bII::TtmRCeyYR9m09kXh9RPnhA` |
| Create Function (Deprecated) | POST | `/projects/{{ref}}/functions` | `conn_mod_def::GC40Tm-3C4w::szcQYC6oQAmyWOdMHvSF7g` |
| Delete Function | DELETE | `/projects/{{ref}}/functions/{{function_slug}}` | `conn_mod_def::GC40TQjV0Os::gDfqikIXSJGV1DnrzM5TNQ` |
| Deploy Function | POST | `/projects/{{ref}}/functions/deploy` | `conn_mod_def::GC40T84CyNM::ee8XBvT6TRua_1upUL_H5Q` |
| Update a Function | PATCH | `/projects/{{ref}}/functions/{{function_slug}}` | `conn_mod_def::GC40T9G4D2s::JTpF0ZTqR22d8DcPOiAyfw` |

### Auth

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project's Auth Config | GET | `/projects/{{ref}}/config/auth` | `conn_mod_def::GC40TM5gJ7A::_NENqM6aTkOuGqUV-fHWbg` |
| Get SSO Provider by UUID | GET | `/projects/{{ref}}/config/auth/sso/providers/{{provider_id}}` | `conn_mod_def::GC40RhaMIgk::E1Bm6qZFQSGs5XTAJjRWRQ` |
| List All SSO Providers | GET | `/projects/{{ref}}/config/auth/sso/providers` | `conn_mod_def::GC40R-0Pao0::dNWrpZPqSDm6eC453iK9ew` |
| Create SSO Provider | POST | `/projects/{{ref}}/config/auth/sso/providers` | `conn_mod_def::GC40R9SDxX4::RCAo6QLIRp-Fda_LSNJxMQ` |
| Remove SSO Provider | DELETE | `/projects/{{ref}}/config/auth/sso/providers/{{provider_id}}` | `conn_mod_def::GC40RksAUZo::s58b0yruRPmhjO114tZzVg` |
| Update Project's Auth Config | PATCH | `/projects/{{ref}}/config/auth` | `conn_mod_def::GC43ZRsFwpU::1bl7idCRTmm-sL79xQMM5Q` |
| Update SSO Provider | PUT | `/v1/projects/{{ref}}/config/auth/sso/providers/{{provider_id}}` | `conn_mod_def::GC40SF9lEjw::IQgu7597SWextSt95VYT3w` |

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Database Branch Config | GET | `/v1/branches/{{branch_id}}` | `conn_mod_def::GC40T9qO_mA::srkPpgjqQ1mZHhn6zMYB-A` |
| List All Database Branches | GET | `/projects/{{ref}}/branches` | `conn_mod_def::GC40UC1Z_gw::uLsMhfdDQSmxNdFx4JLrZQ` |
| Delete Database Branch | DELETE | `/branches/{{branch_id}}` | `conn_mod_def::GC40TiDueDQ::O3EQsdyfQ7q9bxsEoudohA` |
| Disable Preview Branching | DELETE | `/projects/{{ref}}/branches` | `conn_mod_def::GC40T3DZqfw::AF-bwdEdQsaiUURd_q8U6w` |
| Push Database Branch | POST | `/branches/{{branch_id}}/push` | `conn_mod_def::GC40UHrVixc::xYqD-9brR_a2Pl_pj_0xFQ` |
| Reset Database Branch | POST | `/branches/{{branch_id}}/reset` | `conn_mod_def::GC40T5kF56Q::SXvZZIe5QD6ka2c73MIACQ` |
| Update Database Branch Config | PATCH | `/branches/{{branch_id}}` | `conn_mod_def::GC40UK47fY0::0a-NnlBnQvSj2heAX2NZfw` |

### Secrets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project API Keys | GET | `/v1/projects/{{ref}}/api-keys` | `conn_mod_def::GC40Vgkr-As::vZSHdjjWT6yYgNHR0LdiIw` |
| Get Project's pgsodium Config | GET | `/projects/{{ref}}/pgsodium` | `conn_mod_def::GC40VWbKNXA::TwgrYpdKSyuRjoRbFOAbbQ` |
| List All Secrets | GET | `/projects/{{ref}}/secrets` | `conn_mod_def::GC40VblRspw::AEWBxCtoRfmRwHqtiRozkQ` |
| Bulk Create Secrets | POST | `/projects/{{ref}}/secrets` | `conn_mod_def::GC40VRKWzwQ::U1WZrM1xRlqzW0r6eOEITg` |
| Bulk Delete Secrets | DELETE | `/projects/{{ref}}/secrets` | `conn_mod_def::GC40VamprpU::V8dLGUf4S9O1XxHGOj17qA` |
| Update Project's Pgsodium Config | PUT | `/projects/{{ref}}/pgsodium` | `conn_mod_def::GC40Vj6NHV8::QvsG_DGZRq-Qso0eUaCpsg` |

### Oauth

| Action | Method | Path | Action id |
|---|---|---|---|
| Authorize User Through Oauth | GET | `/oauth/authorize` | `conn_mod_def::GC40UNCCy40::InD2wblFRaiRdaOCBwbVZQ` |
| Exchange Auth Code for User's Access and Refresh Token | POST | `/v1/oauth/token` | `conn_mod_def::GC40UNZVgcY::cBtwTQijQYKWPIG3WYJWAg` |
| Revoke OAuth App Authorization | POST | `/oauth/revoke` | `conn_mod_def::GC40UA7ACjw::rF8yUOgeSb67OWub4l8D2A` |

### Rest

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project's Postgrest Config | GET | `/projects/{{ref}}/postgrest` | `conn_mod_def::GC40VSYs1xc::D0eLTVxaRpC-z9qotuMiQQ` |
| Update Project's Postgrest Config | PATCH | `/v1/projects/{{ref}}/postgrest` | `conn_mod_def::GC40VJOvuGc::jxSSXxSnSrax1MnK6ID4Ag` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Organizations | GET | `/organizations` | `conn_mod_def::GC40UF2XalU::2cBlMddjST2mgH3oOZVJ0w` |

### Storage

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Buckets | GET | `/projects/{{ref}}/storage/buckets` | `conn_mod_def::GC40Vqn3jwA::XzZUOU0vQ-eJc-q--4CV6A` |

This lists 67 of 77 actions. For anything not here, call `search_one_platform_actions` with platform `supabase`. The full catalog is at https://www.withone.ai/knowledge/supabase.

## When a call fails

The error comes from Supabase, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/supabase

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
