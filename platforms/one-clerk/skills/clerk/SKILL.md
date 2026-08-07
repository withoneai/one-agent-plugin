---
name: clerk
description: Clerk provides user authentication and user management solutions for modern web applications, including features like sign-in, sign-up, user profiles, and session handling out-of-the-box. Read and write Clerk data through One: users, organizations, apikeys, organizationinvitations, machines, oauthapplications and more, 206 actions with real parameter documentation. Use whenever the user asks to look something up in Clerk, create or update a record there, or build code against the Clerk API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: clerk
  generated-from: one-knowledge-base
---

# Clerk through One

Clerk provides user authentication and user management solutions for modern web applications, including features like sign-in, sign-up, user profiles, and session handling out-of-the-box.

One exposes Clerk through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `clerk` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Clerk is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Clerk account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Users | GET | `/users/count` | `conn_mod_def::GJ1L3NtHkXI::hDXsAQrkSa27qnqU1SvwQg` |
| List Users | GET | `/users` | `conn_mod_def::GJ1L4sXQ2AE::S0As9aD3QU63FtiTBpAA_w` |
| Retrieve a User | GET | `/users/{{userId}}` | `conn_mod_def::GJ1L5DdgkqE::UgwnohPiR-GpoHvFkZdB8A` |
| Retrieve a User’s Billing Credit Balance | GET | `/users/{{userId}}/billing/credits` | `conn_mod_def::GJ1L5VNrzXE::Lt02peI1TKOi8hdQNC-krQ` |
| Retrieve a User’s OAuth Access Token (by Provider) | GET | `/users/{{userId}}/oauth_access_tokens/{{provider}}` | `conn_mod_def::GJ1L53IyQ9Y::780xRf4tQOKl3lgbNVAz-w` |
| Ban a User | POST | `/users/{{userId}}/ban` | `conn_mod_def::GJ1L23UMYGY::mhmyjEQpRZi5-p5qdOpYgw` |
| Ban Multiple Users | POST | `/users/ban` | `conn_mod_def::GJ1L2_Z0Aow::KTsP3NrfRwSRqGVMIwXM2g` |
| Create a New User | POST | `/users` | `conn_mod_def::GJ1L3YJ_Mro::bJYRwmT6SzSMNudDD1LgDQ` |
| Delete a User | DELETE | `/users/{{userId}}` | `conn_mod_def::GJ1L3fJE1xk::0dn082cwTzKfBX8MW4EiCA` |
| Delete a User’s Profile Image | DELETE | `/users/{{userId}}/profile_image` | `conn_mod_def::GJ1L4Pa8ZH0::Ntixk43OSWK7smXUW6Lx0Q` |
| Delete a User's TOTPs | DELETE | `/users/{{userId}}/totp` | `conn_mod_def::GJ1L3-zGrL0::6nSaJaRxRSy_V-zmOoA9Jg` |
| Delete a User's Web3 Wallet | DELETE | `/users/{{userId}}/web3_wallets/{{web3WalletIdentificationId}}` | `conn_mod_def::GJ1L3u_jdW8::Rh2ykuVvQ2GuvovOHWyNwQ` |

13 more Users actions are available through search.

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organizations | GET | `/organizations` | `conn_mod_def::GJ1Lx0gBa9g::geQ-0cuORt6UR8EURFQPCw` |
| Retrieve an Organization by ID or Slug | GET | `/organizations/{{organizationId}}` | `conn_mod_def::GJ1LyEgtKt4::J3m8iIQuTsSsWHzOtSdDrQ` |
| Retrieve an Organization’s Billing Subscription | GET | `/organizations/{{organizationId}}/billing/subscription` | `conn_mod_def::GJ1LyNN0QYg::-moyZW32TFWqUHPDh11DAQ` |
| Create an Organization | POST | `/organizations` | `conn_mod_def::GJ1Lxawn9yU::pViwrnt9RbyIPqIuheOeUw` |
| Delete an Organization | DELETE | `/organizations/{{organizationId}}` | `conn_mod_def::GJ1LxkEYAfE::dsPqmM5UTFK5gkgGOuZ86w` |
| Delete an Organization's Logo | DELETE | `/organizations/{{organizationId}}/logo` | `conn_mod_def::GJ1LxraTy_c::vOpMvHqlTO2oqOhPLKeAuA` |
| Merge an Organization’s Metadata | PATCH | `/organizations/{{organizationId}}/metadata` | `conn_mod_def::GJ1Lx778EGU::DwfA2j-VSPG8cTr0P17Vkg` |
| Update an Organization | PATCH | `/organizations/{{organizationId}}` | `conn_mod_def::GJ1LyevcJEs::cpcVXdHMQMeG2-s2pETSuA` |
| Upload an Organization Logo | PUT | `/organizations/{{organizationId}}/logo` | `conn_mod_def::GJ1LymFCEoU::cFMw5PypQzSJfHqEEC6wAQ` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API Key by ID | GET | `/api_keys/{{apiKeyId}}` | `conn_mod_def::GJ1LicorBBY::EE3ic8MMS02eWsgazMNL1A` |
| Get an API Key's Secret | GET | `/api_keys/{{apiKeyID}}/secret` | `conn_mod_def::GJ1Lim_JYw0::tnvlnz0dT8Gvm4u9_rKnTg` |
| List API Keys (Filtered by Subject) | GET | `/api_keys` | `conn_mod_def::GJ1Liy6cqMI::UjvoiaThQUqVY5T4qsfiFw` |
| Create an API Key | POST | `/api_keys` | `conn_mod_def::GJ1LiJPEnLM::bQvl_7ZtQISl-xSJyWt1Zw` |
| Delete an API Key | DELETE | `/api_keys/{{apiKeyId}}` | `conn_mod_def::GJ1LiSq3wRA::df4cSIahTXaAjQRT5CC7wA` |
| Revoke an API Key | POST | `/api_keys/{{apiKeyId}}/revoke` | `conn_mod_def::GJ1Li93ePzA::8d7jzmcLT4miqK60eVvqZA` |
| Update an API Key | PATCH | `/api_keys/{{apiKeyId}}` | `conn_mod_def::GJ1LjFXdM_w::pPQA4dC2SkyXJCg5FBqbFw` |
| Verify an API Key | POST | `/api_keys/verify` | `conn_mod_def::GJ1LjQKm7nU::ARSwC6udRjC_4CGBKG6LNA` |

### OrganizationInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Organization Invitations | GET | `/users/{{userId}}/organization_invitations` | `conn_mod_def::GJ1L5hBJ2qM::-rGZU2IjSp2KyOKAcIITIg` |
| List an Organization’s Invitations | GET | `/organizations/{{organizationId}}/invitations` | `conn_mod_def::GJ1LuLMYq_U::Spg4Nt9JRPqJN9aIUXMmvw` |
| List an Organization’s Pending Invitations | GET | `/organizations/{{organizationId}}/invitations/pending` | `conn_mod_def::GJ1Lubf1Bq0::WOhyw8-yTi-8p5YY-kpftg` |
| List Instance Organization Invitations | GET | `/organization_invitations` | `conn_mod_def::GJ1LuT61TAA::dBy3WfIBTZm3z9hvascj1g` |
| Retrieve an Organization Invitation | GET | `/organizations/{{organizationId}}/invitations/{{invitationId}}` | `conn_mod_def::GJ1Lukw_HvU::V870EuQAQDOvZamlrZp14Q` |
| Bulk Create Organization Invitations | POST | `/organizations/{{organizationId}}/invitations/bulk` | `conn_mod_def::GJ1Lt1i_IGU::ijA9MOvRTj6zCt6Vh6h0aw` |
| Create an Organization Invitation | POST | `/organizations/{{organizationId}}/invitations` | `conn_mod_def::GJ1Lt__xnF8::r1G0r7KiSr-jbwQTt1_6oQ` |
| Revoke an Organization Invitation | POST | `/organizations/{{organizationId}}/invitations/{{invitationId}}/revoke` | `conn_mod_def::GJ1LuswPLzU::4ggTpKOpTX-TNtZjbxlnUw` |

### Machines

| Action | Method | Path | Action id |
|---|---|---|---|
| List Machines | GET | `/machines` | `conn_mod_def::GJ1Lrcm2IYA::tPC9HQMDTMejooh-UIjs3A` |
| Retrieve a Machine | GET | `/machines/{{machineId}}` | `conn_mod_def::GJ1LrkgTDXI::cQsXrLgySKinRMVpV6_J_w` |
| Retrieve a Machine’s Secret Key | GET | `/machines/{{machineId}}/secret_key` | `conn_mod_def::GJ1LrsCikbE::JFEKEfABRKGbbKpGy0osYw` |
| Create a Machine | POST | `/machines` | `conn_mod_def::GJ1Lq6pfwpg::6VoXcacWSPaUvSpwBCKEYQ` |
| Delete a Machine | DELETE | `/machines/{{machineId}}` | `conn_mod_def::GJ1LrLMuXHA::fbqBCw8uRcWKDSZWPq6S8Q` |
| Rotate a Machine’s Secret Key | POST | `/machines/{{machineId}}/secret_key/rotate` | `conn_mod_def::GJ1LrzYb5Nw::SncuPSgwTr6J9W6XXwjypw` |
| Update a Machine | PATCH | `/machines/{{machineId}}` | `conn_mod_def::GJ1Lr8h7psM::UIFUaq3MTxqya6VdJjjvhA` |

### OauthApplications

| Action | Method | Path | Action id |
|---|---|---|---|
| List OAuth Applications for an Instance | GET | `/oauth_applications` | `conn_mod_def::GJ1Lsos7Z9Y::k-ny1FMGQrCx-9ixoaVCQg` |
| Retrieve an OAuth Application by ID | GET | `/oauth_applications/{{oauthApplicationId}}` | `conn_mod_def::GJ1LswvKIIE::XZgGQ_NTS4-LzRpnJKprnQ` |
| Create an OAuth Application | POST | `/oauth_applications` | `conn_mod_def::GJ1LsYPQksg::cN1jouDbQbedPZtDczvUqg` |
| Delete an OAuth Application | DELETE | `/oauth_applications/{{oauthApplicationId}}` | `conn_mod_def::GJ1LsfIlcC4::34z5VprdRnaMFKVaThtRkg` |
| Rotate an OAuth Application's Client Secret | POST | `/oauth_applications/{{oauthApplicationId}}/rotate_secret` | `conn_mod_def::GJ1Ls3plpIU::TQMkZ4fSQ_WHGq7iwiD4sg` |
| Update an OAuth Application | PATCH | `/oauth_applications/{{oauthApplicationId}}` | `conn_mod_def::GJ1Ls_iM7JY::eMRncTw3Q8SxjeETJxSEiw` |
| Verify an OAuth Application Access Token | POST | `/oauth_applications/access_tokens/verify` | `conn_mod_def::GJ1LsRWhYPs::uDLkzinYRgGq1NNfJpKNmw` |

### OrganizationMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Organization Memberships | GET | `/users/{{userId}}/organization_memberships` | `conn_mod_def::GJ1L5sj3ka0::Zs95qvXjSay9PEc8oejouQ` |
| List an Organization’s Memberships | GET | `/organizations/{{organizationId}}/memberships` | `conn_mod_def::GJ1LvHewPY8::vQk0ahTFRCi0wgFIBQMX4A` |
| List Organization Memberships in an Instance | GET | `/organization_memberships` | `conn_mod_def::GJ1LvP2pHBA::04ARMs_3Rvqc1Op70LK7bw` |
| Create an Organization Membership (Add a User to an Organization) | POST | `/organizations/{{organizationId}}/memberships` | `conn_mod_def::GJ1Lu0Vfa50::TUeVdKNhTUCQzmAR7l8XBA` |
| Remove an Organization Member (Delete Organization Membership) | DELETE | `/organizations/{{organizationId}}/memberships/{{userId}}` | `conn_mod_def::GJ1LvgqC7ts::hkpoquD1Qx23u_L387yL8w` |
| Update an Organization Membership | PATCH | `/organizations/{{organizationId}}/memberships/{{userId}}` | `conn_mod_def::GJ1LvoXTtTw::MTw3njtFRmeA5idf_0uhUg` |
| Update an Organization Membership’s Metadata | PATCH | `/organizations/{{organizationId}}/memberships/{{userId}}/metadata` | `conn_mod_def::GJ1LvZD7L44::neEHh4prSxaed02Jry7LAw` |

### OrganizationRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organization Roles | GET | `/organization_roles` | `conn_mod_def::GJ1LwxCG7kQ::sx5L4fXmQMWLqgli86fArA` |
| Retrieve an Organization Role | GET | `/organization_roles/{{organizationRoleId}}` | `conn_mod_def::GJ1LxAcbw88::clYm7Mv7R9GR9SKzwVmVJA` |
| Assign a Permission to an Organization Role | POST | `/organization_roles/{{organizationRoleId}}/permissions/{{permissionId}}` | `conn_mod_def::GJ1LwayyMzE::9S31SBIIRZehwlP2CPLhYw` |
| Create an Organization Role | POST | `/organization_roles` | `conn_mod_def::GJ1LwiG3P44::WPAnfht2RGCSuzoXY45CJA` |
| Delete an Organization Role | DELETE | `/organization_roles/{{organizationRoleId}}` | `conn_mod_def::GJ1LwoyFzPU::-HAtaQbDQpCDhZNR4jdcyw` |
| Remove a Permission from an Organization Role | DELETE | `/organization_roles/{{organizationRoleId}}/permissions/{{permissionId}}` | `conn_mod_def::GJ1Lw5oHFOg::NhHp8jqWQZSDHHK3YC7m6w` |
| Update an Organization Role | PATCH | `/organization_roles/{{organizationRoleId}}` | `conn_mod_def::GJ1LxIwu5Eg::X3XJJk8AQYaOCY5nhFk47g` |

### RoleSets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Role Sets | GET | `/role_sets` | `conn_mod_def::GJ1L0B2NMb0::nx1uAFRHR5iO1Y1llgDNkg` |
| Retrieve a Role Set | GET | `/role_sets/{{roleSetKeyOrId}}` | `conn_mod_def::GJ1L0Y-F2Ts::oYzPvyzOQ9eN_c-eSnmUcg` |
| Add Roles to a Role Set | POST | `/role_sets/{{roleSetKeyOrId}}/roles` | `conn_mod_def::GJ1LzxjFehA::W8r1KSjvRG2Rb3CTcz9EXA` |
| Create a Role Set | POST | `/role_sets` | `conn_mod_def::GJ1Lz42xCw0::rpuFPTl6QiyJPmIBoIvZlQ` |
| Replace a Role in a Role Set | POST | `/role_sets/{{roleSetKeyOrId}}/roles/replace` | `conn_mod_def::GJ1L0KF6Vrg::33zJeQkTSQ6FB9BZkKOVwg` |
| Replace a Role Set | POST | `/role_sets/{{roleSetKeyOrId}}/replace` | `conn_mod_def::GJ1L0ROCpv0::e0ruV0tWRm-ikN9cCxoSCA` |
| Update a Role Set | PATCH | `/role_sets/{{roleSetKeyOrId}}` | `conn_mod_def::GJ1L0hS17iI::-JBMzFNmSVOG7gzKtuVdpw` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Templates by Type | GET | `/templates/{{templateType}}` | `conn_mod_def::GJ1LmnQ298w::Ovx6f_RGRWaWYrT8PuoJYw` |
| Retrieve a Template | GET | `/templates/{{templateType}}/{{slug}}` | `conn_mod_def::GJ1Lm3uDNo0::1k6u6kCBSRGqzkZpnF2PHw` |
| Preview a Template’s Changes | POST | `/templates/{{templateType}}/{{slug}}/preview` | `conn_mod_def::GJ1LmvIerO8::RwHILXwFT16O6xVyJwou1Q` |
| Revert a Template | POST | `/templates/{{templateType}}/{{slug}}/revert` | `conn_mod_def::GJ1LnBYPyuk::7PmA6EADS26713WE8dojcg` |
| Toggle Delivery for a Template (by Type and Slug) | POST | `/templates/{{templateType}}/{{slug}}/toggle_delivery` | `conn_mod_def::GJ1LnLp36ck::Ffd-O5snQoG4YGbrwGHhbA` |
| Update (Upsert) a Template by Type and Slug | PUT | `/templates/{{templateType}}/{{slug}}` | `conn_mod_def::GJ1LnTgNS_o::Y-GEwJGSRlOPgkrh4zzzCA` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sessions | GET | `/sessions` | `conn_mod_def::GJ1L1o7UvZY::fLjSzlMNRJiZmujLCfVU0g` |
| Retrieve a Session | GET | `/sessions/{{sessionId}}` | `conn_mod_def::GJ1L12Ansoc::rpqhj4LsRP2hOPRob2JDAA` |
| Create a Session (Testing Only) | POST | `/sessions` | `conn_mod_def::GJ1L1RfnuB4::N8GCs8wGTp-cOIMN3D_Npw` |
| Create a Session Token (JWT) for a Session | POST | `/sessions/{{sessionId}}/tokens` | `conn_mod_def::GJ1L1ZMqJHM::DomtoQ-zRMa6e_O0he7b3w` |
| Refresh a Session | POST | `/sessions/{{sessionId}}/refresh` | `conn_mod_def::GJ1L1vg4U5Y::LRhB2uZlRySVlKSO2jbRLA` |
| Revoke a Session | POST | `/sessions/{{sessionId}}/revoke` | `conn_mod_def::GJ1L19_Md1I::PjXhZDlbQo2GzLz51pWhJQ` |

### WaitlistEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Waitlist Entries | GET | `/waitlist_entries` | `conn_mod_def::GJ1L73g2_R0::hIRB00MdSgarctjyovc33w` |
| Create a Waitlist Entry | POST | `/waitlist_entries` | `conn_mod_def::GJ1L7Uruqd8::wyU7STckTMGsdHLNIlNeZg` |
| Create Bulk Waitlist Entries | POST | `/waitlist_entries/bulk` | `conn_mod_def::GJ1L7cV7hRQ::evBxouiGStafiIbAK1JC8g` |
| Delete a Pending Waitlist Entry | DELETE | `/waitlist_entries/{{waitlistEntryId}}` | `conn_mod_def::GJ1L7kLyMtk::Sl6M-smVTheTceVJ-nIAnQ` |
| Invite a Waitlist Entry | POST | `/waitlist_entries/{{waitlistEntryId}}/invite` | `conn_mod_def::GJ1L7vzVp7A::QWzyEHOGSvqAkGnWeQPlDA` |
| Reject a Waitlist Entry | POST | `/waitlist_entries/{{waitlistEntryId}}/reject` | `conn_mod_def::GJ1L7-xzWk8::bkF1fyNXQuis7g1GsPuWcA` |

This lists 90 of 206 actions. For anything not here, call `search_one_platform_actions` with platform `clerk`. The full catalog is at https://www.withone.ai/knowledge/clerk.

## When a call fails

The error comes from Clerk, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/clerk

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
