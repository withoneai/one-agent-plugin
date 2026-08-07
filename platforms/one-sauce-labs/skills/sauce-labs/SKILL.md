---
name: sauce-labs
description: Sauce Labs is a cloud-based testing platform that provides browser, mobile, and API test automation infrastructure, allowing development and QA teams to run cross-browser and cross-device tests, monitor application quality, and integrate testing into CI/CD workflows. Read and write Sauce Labs data through One: users, teams, adminusers, groups, organizations, invitations and more, 188 actions with real parameter documentation. Use whenever the user asks to look something up in Sauce Labs, create or update a record there, or build code against the Sauce Labs API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sauce-labs
  generated-from: one-knowledge-base
---

# Sauce Labs through One

Sauce Labs is a cloud-based testing platform that provides browser, mobile, and API test automation infrastructure, allowing development and QA teams to run cross-browser and cross-device tests, monitor application quality, and integrate testing into CI/CD workflows.

One exposes Sauce Labs through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `sauce-labs` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Sauce Labs is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Sauce Labs account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/team-management/v1/users/{{uuid}}/` | `conn_mod_def::GMXu9o2QCHA::gSHD2THtQtC3yvttUCH3KA` |
| Get a User in Sauce Labs | GET | `/rest/v1/users/{{username}}` | `conn_mod_def::GMXu9PMH9rA::dI_w39h7RwGcePNgW0lpwA` |
| Get a User's Concurrency | GET | `/rest/v1.2/users/{{username}}/concurrency` | `conn_mod_def::GMXu9OkS89A::t1uh4EC5RDaBUOWM5ZSsag` |
| Get a User's Organization Information | GET | `/rest/v1.1/users/{{username}}/organization` | `conn_mod_def::GMXu9TXDAIA::6BdNhICNT-aUf-FzmdQSdw` |
| Get the Signed-in User Profile | GET | `/team-management/v1/users/me/` | `conn_mod_def::GMXu9nsG7lg::DtstZBKqTlyir3-GezEp8A` |
| Get the Signed-in User's Access Key | GET | `/team-management/v1/users/me/access-key/` | `conn_mod_def::GMXu9gu1QBg::Wfs1swPSSniF0m7_uBCqyQ` |
| List Users | GET | `/team-management/v1/users/` | `conn_mod_def::GMXu9hiSldg::dfgxtKs_TkG4Z6UNlQRavw` |
| Read a User's Access Key | GET | `/team-management/v1/users/{{uuid}}/access-key/` | `conn_mod_def::GMXu9ZeJPrA::4gX_mYl1TDWTGZgUFw6Y8A` |
| Activate a User | POST | `/team-management/v1/users/{{uuid}}/activate/` | `conn_mod_def::GMXu9ZdlDRA::L29CPj8QTzWQbewIhAhfEg` |
| Create a User | POST | `/team-management/v1/users/` | `conn_mod_def::GMXu9Zsvfqg::ouc0WSOGSHSNh9RoJmibnQ` |
| Deactivate a User | POST | `/team-management/v1/users/{{uuid}}/deactivate/` | `conn_mod_def::GMXu9f0-jXg::3hjga6WfTe-zM_dBKqTkhg` |
| Partially Update a User | PATCH | `/team-management/v1/users/{{uuid}}/` | `conn_mod_def::GMXu9nshDdg::NuoapgZ0Tu2BQbnYlMGaZg` |

12 more Users actions are available through search.

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team | GET | `/team-management/v1/teams/{{uuid}}/` | `conn_mod_def::GMXu85Ubt7g::fIzTCMuDSw282Is5UyPV8g` |
| List a User's Teams | GET | `/team-management/v1/users/{{uuid}}/teams/` | `conn_mod_def::GMXu93WB00g::w21R3H-8TrOWq4bAkUIsMQ` |
| List Admin Teams | GET | `/team-management/v1/admin/teams/` | `conn_mod_def::GMXu5mYGUyg::dmoDuvE7Qv66zULggZKrnQ` |
| List an Organization's Teams | GET | `/team-management/v1/organizations/{{uuid}}/teams/` | `conn_mod_def::GMXu8lCRB8A::VbkWAQDLSqKAgcyjcSb0XQ` |
| List Teams | GET | `/team-management/v1/teams/` | `conn_mod_def::GMXu86RXXFA::8ZaYvFIwQ-OogZATzz1H9g` |
| List Teams for an Admin Organization | GET | `/team-management/v1/admin/organizations/{{uuid}}/teams/` | `conn_mod_def::GMXu5lwUiIA::wu1Ix2q3TNygpi9nGQ6ahQ` |
| Create a Team | POST | `/team-management/v1/teams/` | `conn_mod_def::GMXu8zRAL3g::PKxD-7KLQAuzXYpmeaQtMg` |
| Create an Admin Team | POST | `/team-management/v1/admin/teams/` | `conn_mod_def::GMXu5l-n5Ig::YpX65hWJQr6_VTtN7ull9w` |
| Delete a Team | DELETE | `/team-management/v1/teams/{{uuid}}/` | `conn_mod_def::GMXu8zGBfNg::RUqReAEkTkqcqBciJQfBcQ` |
| Partially Update a Team | PATCH | `/team-management/v1/teams/{{uuid}}/` | `conn_mod_def::GMXu8zLN3rA::iu7nzHs0SImpJdIBG6IujA` |
| Patch Teams | PATCH | `/team-management/v1/teams/` | `conn_mod_def::GMXu85YofGg::gdFBHw1QStei06DbeKjwfw` |
| Reset a Team's Access Key | POST | `/team-management/v1/admin/teams/{{uuid}}/reset-access-key/` | `conn_mod_def::GMXu5s81EUA::CPKhy2ElR3aFboNjQmVOfA` |

2 more Teams actions are available through search.

### AdminUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Admin User | GET | `/team-management/v1/admin/users/{{uuid}}/` | `conn_mod_def::GMXu59PYXVA::0HCdPXrzQzGy_lE1ZBba3w` |
| List Admin Users | GET | `/team-management/v1/admin/users/` | `conn_mod_def::GMXu59gnQSg::slRAjuD0SFyFBUQ-a9gWAQ` |
| Activate an Admin User | POST | `/team-management/v1/admin/users/{{uuid}}/activate/` | `conn_mod_def::GMXu50ktS5g::LJXbyOoASGe-6HIEvQGf-g` |
| Change an Admin User's Organization | POST | `/team-management/v1/admin/users/{{uuid}}/change-organization/` | `conn_mod_def::GMXu50knEdg::MPa7tEgJQSa3Ga7DoKaF8w` |
| Create an Admin User | POST | `/team-management/v1/admin/users/` | `conn_mod_def::GMXu53Ectug::or2vOOoQRtSjOs4yerhCyA` |
| Deactivate an Admin User | POST | `/team-management/v1/admin/users/{{uuid}}/deactivate/` | `conn_mod_def::GMXu52QvMKA::VtshSaLzRwuFXvaOs8i6vA` |
| Partially Update an Admin User | PATCH | `/team-management/v1/admin/users/{{uuid}}/` | `conn_mod_def::GMXu6BABE1g::JAbwWyHYQHCGhzq_oaO53g` |
| Reset Access Key for an Admin User | POST | `/team-management/v1/admin/users/{{uuid}}/reset-access-key/` | `conn_mod_def::GMXu59xVqJg::aDruWzEyRZS6nhEpiRUCKg` |
| Reset Password for an Admin User | POST | `/team-management/v1/admin/users/{{uuid}}/reset-password/` | `conn_mod_def::GMXu59Ka-1A::KjnKBQIWSAepr0neXy-R8Q` |
| Update an Admin User | PUT | `/team-management/v1/admin/users/{{uuid}}/` | `conn_mod_def::GMXu6HXMCRg::RtTHjaOmS7GoKYsjPvnNGg` |
| Verify an Admin User's Email | POST | `/team-management/v1/admin/users/{{uuid}}/verify-email/` | `conn_mod_def::GMXu6TeiMog::tdSgrcuqT8eeO2_DzXguwA` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group | GET | `/team-management/v1/groups/{{uuid}}/` | `conn_mod_def::GMXu7a3CiSg::5St63N3IRCy5ne7sMuMACw` |
| List an Organization's Groups | GET | `/team-management/v1/organizations/{{uuid}}/groups/` | `conn_mod_def::GMXu8W_AYzA::lGI9DCdlS7S_hy7iGQ8YxA` |
| List Groups | GET | `/team-management/v1/groups/` | `conn_mod_def::GMXu7RWD-OA::vqw8w3BpTEKKZGhTrBFuUg` |
| Assign a Team to a Group | POST | `/team-management/v1/groups/{{uuid}}/teams/` | `conn_mod_def::GMXu7Lg59AA::oTltO3CSR9aySBdiJR6lQQ` |
| Create a Group | POST | `/team-management/v1/groups/` | `conn_mod_def::GMXu7JtqbzA::kB7c7OusSz2naqesOCBzMQ` |
| Delete a Line of Business by UUID | DELETE | `/team-management/v1/groups/{{uuid}}/` | `conn_mod_def::GMXu7S37uGg::XUHIpXMaSayIJeLQGWLRBg` |
| Partially Update a Group by UUID | PATCH | `/team-management/v1/groups/{{uuid}}/` | `conn_mod_def::GMXu7a3nIFg::nab5OEzYR4Cpm7wsDLiwow` |
| Partially Update Groups | PATCH | `/team-management/v1/groups/` | `conn_mod_def::GMXu7S4W2bg::kRpoEMF9TmiBvWO8fAssRg` |
| Remove a Team from a Group | DELETE | `/team-management/v1/groups/{{uuid}}/teams/{{teamUuid}}` | `conn_mod_def::GMXu7ZRe3xg::V7W0CmOnTPO-hTnLTs_WeQ` |
| Set Batch Concurrency for a Group | PATCH | `/team-management/v1/groups/{{uuid}}/set-batch-concurrency/` | `conn_mod_def::GMXu7a39Aeg::BqWjPTTVSXSER1RidngXrQ` |
| Update a Group | PUT | `/team-management/v1/groups/{{uuid}}/` | `conn_mod_def::GMXu7hrw2mg::uXjFtUI7T7u6suCGILiKag` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Organization Members CSV for an Admin | GET | `/team-management/v1/admin/organizations/{{uuid}}/members-csv/` | `conn_mod_def::GMXu5RLr-fA::SN-goHwDTTaMj_jBAuTWLA` |
| Get an Organization by UUID | GET | `/team-management/v1/organizations/{{uuid}}/` | `conn_mod_def::GMXu8fFVzbg::lt525vpgRdmH0s8_toTfIA` |
| List Organizations | GET | `/team-management/v1/organizations/` | `conn_mod_def::GMXu8Yoywgg::p5YZBNvESPWBJy33FLxaKg` |
| List Organizations for an Admin | GET | `/team-management/v1/admin/organizations/` | `conn_mod_def::GMXu5R97jXA::3iasFy8ERbGSitHaK2jw1Q` |
| Create an Organization as an Admin | POST | `/team-management/v1/admin/organizations/` | `conn_mod_def::GMXu5KtQN-g::B_iHfuXgTpiohK8c6RJ2rQ` |
| Partial Update an Admin Organization | PATCH | `/team-management/v1/admin/organizations/{{uuid}}/` | `conn_mod_def::GMXu5SIuhCg::nfKE2F46Syu7ECBN7oezYQ` |
| Partially Update an Organization | PATCH | `/team-management/v1/organizations/{{uuid}}/` | `conn_mod_def::GMXu8etZgDA::YNzAHhebRTqgxCw3lSCKvg` |
| Reset an Organization Access Key | POST | `/team-management/v1/organizations/{{uuid}}/reset-access-key/` | `conn_mod_def::GMXu8e0YP2A::wLXwTdCITB6xSdJ8oGIFFw` |
| Update an Organization | PUT | `/team-management/v1/organizations/{{uuid}}/` | `conn_mod_def::GMXu8s21ukg::41avCYrWQd2E3bH6lg8Wdw` |
| Update an Organization as an Admin | PUT | `/team-management/v1/admin/organizations/{{uuid}}/` | `conn_mod_def::GMXu5mKRRPA::NZNhUUdEQI2ZkYm2J8Asyw` |

### Invitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invitations | GET | `/team-management/v1/invitations/` | `conn_mod_def::GMXu7vmaNhA::1O1yJzXuQr6GJdwsVXp4oQ` |
| Read an Invitation by Token | GET | `/team-management/v1/invitations/{{token}}/` | `conn_mod_def::GMXu73mRB-A::sqqcU-q3RIKdx_X5kY6aOg` |
| Accept an Invitation | POST | `/team-management/v1/invitations/{{token}}/accept/` | `conn_mod_def::GMXu7ouk44A::dqO6LHkcQFu2_7ho3eQVWQ` |
| Create an Invitation | POST | `/team-management/v1/invitations/` | `conn_mod_def::GMXu7usDn2A::zGl6qkHuQ7SrhPchmOJQRw` |
| Decline an Invitation | POST | `/team-management/v1/invitations/{{token}}/decline/` | `conn_mod_def::GMXu7xVWM7g::9IojYUlKRTKsRqqn7mSt2w` |
| Delete an Invitation by Token | DELETE | `/team-management/v1/invitations/{{token}}/` | `conn_mod_def::GMXu7u_gLNg::Nt54uZ78QEWqTOvdPyc3CA` |
| Move an Invitation | POST | `/team-management/v1/invitations/{{token}}/move/` | `conn_mod_def::GMXu7vB1JZA::wX6q434wRnStfnlk3FMp4Q` |
| Renew an Invitation | POST | `/team-management/v1/invitations/{{token}}/renew/` | `conn_mod_def::GMXu74EU2-A::rzlRSAOyQSeegkUAVvczsg` |
| Revoke an Invitation by Token | POST | `/team-management/v1/invitations/{{token}}/revoke/` | `conn_mod_def::GMXu734Ah2A::RUs4vytxTEGiFiWR7APXnQ` |

### DeviceSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Device Sessions | GET | `/rdc/v2/sessions` | `conn_mod_def::GMXu8zrmq2g::R-xvPymgRbGgXGv9_7m17w` |
| Create a Device Session | POST | `/rdc/v2/sessions` | `conn_mod_def::GMXu8s4Idfg::EdU7XDvyRlerFyVOBv7wug` |
| Execute Shell Command on a Device Session | POST | `/rdc/v2/sessions/{{sessionId}}/device/executeShellCommand` | `conn_mod_def::GMXu63VrS-g::JCinUlXdQKWodSXnU3tIOQ` |
| Install App for a Device Session | POST | `/rdc/v2/sessions/{{sessionId}}/device/installApp` | `conn_mod_def::GMXu64EKXRg::MP-OK7uqSa6U83t6GnR6kg` |
| Launch App on a Device Session | POST | `/rdc/v2/sessions/{{sessionId}}/device/launchApp` | `conn_mod_def::GMXu62M9gNA::hXGuPUZ2RVKcAO2y-pUkdA` |
| Push a File to a Device Session | POST | `/rdc/v2/sessions/{{sessionId}}/device/pushFile` | `conn_mod_def::GMXu6qHBgWg::YCbgZbiUQH6jULGVfhrIWw` |
| Reset Network Conditions for a Device Session | DELETE | `/rdc/v2/sessions/{{sessionId}}/network/condition` | `conn_mod_def::GMXu8NEbu1g::QI3J9fZxSGWJn6eq9nGBEg` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Information | GET | `/rest/v1.1/jobs/{{id}}` | `conn_mod_def::GMXu731OkMg::8cOYugvsTdiLVOeleDCBmg` |
| Get Job Information for a User | GET | `/rest/v1/{{username}}/jobs/{{id}}` | `conn_mod_def::GMXu7_o4XTA::2rsrIwVbRY-gZw6IoEIczg` |
| List a User's Jobs | GET | `/rest/v1.1/{{username}}/jobs` | `conn_mod_def::GMXu75-RKjg::IEzX4FK-TleJdtMbS72yVw` |
| List Jobs for a Build | GET | `/rest/v1/builds/{{id}}/jobs` | `conn_mod_def::GMXu6aBsoPA::udD8ATJFTReTIR8mJISCzw` |
| Stop Job Information for a User | PUT | `/rest/v1/{{username}}/jobs/{{id}}/stop` | `conn_mod_def::GMXu8ALN62g::6OK0hA7ITz-FZ_6huK9GkQ` |
| Update Job Information for a User | PUT | `/rest/v1/{{username}}/jobs/{{id}}` | `conn_mod_def::GMXu8AEzXdg::fpDmhfHlQ5S1ZnxB6g6NXA` |

### AdminTeams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Admin Team by UUID | GET | `/team-management/v1/admin/teams/{{uuid}}/` | `conn_mod_def::GMXu5s8vHdA::ZDFE0gj7TTOqIbeZ7LQeaw` |
| Delete an Admin Team | DELETE | `/team-management/v1/admin/teams/{{uuid}}/` | `conn_mod_def::GMXu5mAQDJg::KQBYwgmFSNaZZHjYfLp3Gw` |
| Move Membership for Admin Teams | PATCH | `/team-management/v1/admin/teams/move_membership/` | `conn_mod_def::GMXu5s8T4Sg::BIoWQNaURpaipSNaWd2Ojw` |
| Partially Update an Admin Team | PATCH | `/team-management/v1/admin/teams/{{uuid}}/` | `conn_mod_def::GMXu5t7Jn5A::7b3uYiMmRyK1AawkhMx7yw` |
| Update an Admin Team | PUT | `/team-management/v1/admin/teams/{{uuid}}/` | `conn_mod_def::GMXu50ksjDA::MBG5kBM4TXmc4m11vT1MJQ` |

### Tunnels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Tunnel | GET | `/rest/v1/{{username}}/tunnels/{{id}}` | `conn_mod_def::GMXu9IUBlPA::6072NUIkRreLH413Xbnmkw` |
| List a User's Tunnels | GET | `/rest/v1/{{username}}/tunnels` | `conn_mod_def::GMXu9IeezUA::sU_uMAfVRaCzH_Sv_ghkpg` |
| List All Tunnels for a User | GET | `/rest/v1/{{username}}/all_tunnels` | `conn_mod_def::GMXu9CKhf_A::juw_sRWKTTyPYLM2mbWX_Q` |
| Delete a Tunnel for a User | DELETE | `/rest/v1/{{username}}/tunnels/{{id}}` | `conn_mod_def::GMXu9CIPG2A::CCeF8w8KTu6_cDXMEM5mow` |

### AdminInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Admin Invitations | GET | `/team-management/v1/admin/invitations/` | `conn_mod_def::GMXu5D7KX5A::fNF6AfE5RLaV3VNWEijhww` |
| Read an Admin Invitation | GET | `/team-management/v1/admin/invitations/{{token}}/` | `conn_mod_def::GMXu5Dgy43g::pvIjx47uQMiL0scpuLuzNw` |
| Create an Admin Invitation | POST | `/team-management/v1/admin/invitations/` | `conn_mod_def::GMXu5C-pLIA::7rwIzsUES4WFdC_dq26jYA` |

1 more AdminInvitations actions are available through search.

This lists 90 of 188 actions. For anything not here, call `search_one_platform_actions` with platform `sauce-labs`. The full catalog is at https://www.withone.ai/knowledge/sauce-labs.

## When a call fails

The error comes from Sauce Labs, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sauce-labs

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
