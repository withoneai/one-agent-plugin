---
name: airtable
description: Airtable is a flexible collaboration platform that combines the simplicity of a spreadsheet with the power of a database, enabling teams to organize work, manage data, and build custom workflows. Read and write Airtable data through One: enterpriseaccountusers, records, scimgroups, scimusers, workspaces, webhooks and more, 99 actions with real parameter documentation. Use whenever the user asks to look something up in Airtable, create or update a record there, or build code against the Airtable API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: airtable
  generated-from: one-knowledge-base
---

# Airtable through One

Airtable is a flexible collaboration platform that combines the simplicity of a spreadsheet with the power of a database, enabling teams to organize work, manage data, and build custom workflows.

One exposes Airtable through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `airtable` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Airtable is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Airtable account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### EnterpriseAccountUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Enterprise Account User by ID | GET | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/users/{{userId}}` | `conn_mod_def::GJz_bXAN8P0::lPUqaBOsQkiS18_Z3LWlzg` |
| Get Enterprise Account Users by ID or Email | GET | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/users` | `conn_mod_def::GJz_bggAnUY::TdPzD0btQOydjv4NZPOebg` |
| Batch Manage an Enterprise Account’s Users | PATCH | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/users` | `conn_mod_def::GJz_cDK82Ds::i64dqsYyQQ-RsieBlebfTg` |
| Delete an Enterprise Account User by ID | DELETE | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/users/{{userId}}` | `conn_mod_def::GJz_bEu651s::Yi3hXhxqR-aDDNcsZ9z9AQ` |
| Delete Users by Email (Enterprise Account) | DELETE | `/meta/enterpriseAccounts/{{enterpriseAccountId}}/users` | `conn_mod_def::GJz_bNzn6ig::ZhmGR4SkTemS8KlmYEmTfw` |
| Grant Admin Access to Users in an Enterprise Account | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/users/grantAdminAccess` | `conn_mod_def::GJz_bpsPiyU::VXdAm8erSG2fFZucF3KbMQ` |
| Log Out an Enterprise Account User | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/users/{{userId}}/logout` | `conn_mod_def::GJz_bxRS_9c::PAXEMyTsS0Whdm50v262DQ` |
| Manage an Enterprise Account User | PATCH | `/meta/enterpriseAccounts/{{enterpriseAccountId}}/users/{{userId}}` | `conn_mod_def::GJz_b7NbBVg::jY9gV-eiRIy5_qM1TDSSeA` |
| Manage an Enterprise Account’s User Membership (Claim/Unclaim Users) | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/users/claim` | `conn_mod_def::GJz_cNW6cjY::_mLTJGFSRUS7o7ql5rrRZQ` |
| Remove a User from an Enterprise Account | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/users/{{userId}}/remove` | `conn_mod_def::GJz_WsIMvlg::4TB2eIozR4C3sfG-BcgKzw` |
| Revoke Admin Access for Enterprise Account Users | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/users/revokeAdminAccess` | `conn_mod_def::GJz_cVCLsQY::pIdzbDAXRBKHagLx2gunjQ` |

### Records

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Record in a Base Table | GET | `/v0/{{baseId}}/{{tableIdOrName}}/{{recordId}}` | `conn_mod_def::GJz_X6J54w8::8BvJJ6rySyGQRRIE3fKsCQ` |
| List Records in a Base Table | GET | `/v0/{{baseId}}/{{tableIdOrName}}` | `conn_mod_def::GJz_YE7BwKk::1sPbZAuRTkWvELUJh-6mcw` |
| Create Records in a Base Table | POST | `/{{baseId}}/{{tableIdOrName}}` | `conn_mod_def::GJz_XidaPDk::SxO92xzKQEWMDdWGK1gUAQ` |
| Delete a Record in a Base Table | DELETE | `/{{baseId}}/{{tableIdOrName}}/{{recordId}}` | `conn_mod_def::GJz_XyBtLKQ::HzoIxKGFTeCNOB6g86yGxA` |
| Delete Multiple Records in a Base Table | DELETE | `/{{baseId}}/{{tableIdOrName}}` | `conn_mod_def::GJz_XqZZN2c::Hvd2hOLSR2ufMy5bFLDLPA` |
| Update a Record in a Base (PUT) | PUT | `/{{baseId}}/{{tableIdOrName}}/{{recordId}}` | `conn_mod_def::GJz_WAQQmmQ::hBoet4fNSzG2UStvJv4Q6Q` |
| Update a Record in a Base Table | PATCH | `/v0/{{baseId}}/{{tableIdOrName}}/{{recordId}}` | `conn_mod_def::GJz_YeFaTvw::6K0XbZzeQPirQqJOJgJjdw` |
| Update Multiple Records in a Base Table | PUT | `/v0/{{baseId}}/{{tableIdOrName}}` | `conn_mod_def::GJz_V5BcE2s::rX6Ebw0kTWa-i3dCu2SgHg` |
| Update Multiple Records in a Table (Base) | PATCH | `/v0/{{baseId}}/{{tableIdOrName}}` | `conn_mod_def::GJz_YVdZ3Q4::ZmOQrB3-SZWUTgiJ34gKGg` |

### ScimGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a SCIM Group | GET | `/scim/v2/Groups/{{groupId}}` | `conn_mod_def::GJz_ZPkmS3c::73O2fGidRPeEtn8yKR8xnQ` |
| List SCIM Groups | GET | `/scim/v2/Groups` | `conn_mod_def::GJz_Zh83eE8::Z6UNIvZxR8u__IZWLW9-7g` |
| Create a SCIM Group | POST | `/scim/v2/Groups` | `conn_mod_def::GJz_Ys6x750::6Pp5JOpyRlaAA9b4GIYIQA` |
| Delete a SCIM Group | DELETE | `/scim/v2/Groups/{{groupId}}` | `conn_mod_def::GJz_Y-imPxw::knXIJ56YRIiezVCE4pdR_w` |
| Patch a SCIM Group | PATCH | `/scim/v2/Groups/{{groupId}}` | `conn_mod_def::GJz_Z18P_jo::Llbgs5SdQjyoovJ3lbTG2Q` |
| Replace a SCIM Group | PUT | `/scim/v2/Groups/{{groupId}}` | `conn_mod_def::GJz_aJd2iek::iZK7hPmCSiCvNoG6uZIEug` |

### ScimUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a SCIM User | GET | `/scim/v2/Users/{{userId}}` | `conn_mod_def::GJz_ZYY14S0::LsJpbMUFQdiJ4XEQ6zRL5g` |
| List SCIM Users | GET | `/scim/v2/Users` | `conn_mod_def::GJz_ZrsSNDY::QIfw5897Tsi2J_lyTtRZcw` |
| Create a SCIM User | POST | `/scim/v2/Users` | `conn_mod_def::GJz_Y1i4u9g::-n0vLgydQTyf8P4SRwtj0g` |
| Delete a SCIM User | DELETE | `/scim/v2/Users/{{userId}}` | `conn_mod_def::GJz_ZHESg3M::EG0yp7ZiTEOh-_eBt0xL3w` |
| Patch a SCIM User | PATCH | `/scim/v2/Users/{{userId}}` | `conn_mod_def::GJz_aAf5mQE::kl3YlOJuRg2d8sHrTzknwQ` |
| Replace a SCIM User | PUT | `/scim/v2/Users/{{userId}}` | `conn_mod_def::GJz_aTbdSi4::iRoAG-eNSKidcVPSeMV6FA` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace’s Collaborators | GET | `/v0/meta/workspaces/{{workspaceId}}` | `conn_mod_def::GJz_UnDgxXA::rB7rvhgnQty4D1Nh9HB7AA` |
| Create a Workspace in an Enterprise Account | POST | `/meta/workspaces` | `conn_mod_def::GJz_d_dQ3dM::IVJw7_arRp272cA96-mgYg` |
| Delete a Workspace | DELETE | `/v0/meta/workspaces/{{workspaceId}}` | `conn_mod_def::GJz_eN9CqkE::IJf9tKA-TNWNwyiFHzpdrA` |
| Move a Base from a Workspace to Another Workspace | POST | `/v0/meta/workspaces/{{workspaceId}}/moveBase` | `conn_mod_def::GJz_eV6xwE4::IaQZTEjWRBiPn4HxQ-7kIw` |
| Update a Workspace’s Sharing Restrictions | POST | `/v0/meta/workspaces/{{workspaceId}}/updateRestrictions` | `conn_mod_def::GJz_ek9MyV0::jX9IOww0T3y8XF4VzgrZ6Q` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Base’s Webhooks | GET | `/v0/bases/{{baseId}}/webhooks` | `conn_mod_def::GJz_doOng4w::I_UFMtKHRoSxMK9lPTJh5w` |
| Create a Webhook in a Base | POST | `/v0/bases/{{baseId}}/webhooks` | `conn_mod_def::GJz_dH8z2Qk::AJ_Amv9mSD2Nn2VM7PLEyQ` |
| Delete a Base's Webhook | DELETE | `/v0/bases/{{baseId}}/webhooks/{{webhookId}}` | `conn_mod_def::GJz_dPcM17s::s1_kGr_wTciZIw36g1SKjA` |
| Enable/Disable a Base Webhook’s Notification Pings | POST | `/v0/bases/{{baseId}}/webhooks/{{webhookId}}/enableNotifications` | `conn_mod_def::GJz_dXzjAtA::DnnNAjpgT8mkxUaOM20qVg` |
| Refresh a Base Webhook | POST | `/v0/bases/{{baseId}}/webhooks/{{webhookId}}/refresh` | `conn_mod_def::GJz_dvtrwDw::ztV_iAFHS2mZuKjlYsPE5Q` |

### Bases

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bases | GET | `/meta/bases` | `conn_mod_def::GJz_Sb6BlEA::sIsib021RqaWmG7fwKLkiw` |
| Create a Base | POST | `/v0/meta/bases` | `conn_mod_def::GJz_SMetaB4::krbgQ9GNSzyFjolV5iuJ_w` |
| Create a Base from a Package (Enterprise Account) | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/packages/{{packageId}}/install` | `conn_mod_def::GJz_WKWFAxo::h7TJVY6kTXOmlclmYhqSVQ` |
| Delete a Base | DELETE | `/meta/bases/{{baseId}}` | `conn_mod_def::GJz_eGzTk58::feD67lqJRvuhfcwOP_GyqQ` |

### EnterpriseAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Enterprise Account | GET | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}` | `conn_mod_def::GJz_WZnznII::nMnRRrHwRsy-y94azaImXw` |
| Create a Descendant Enterprise Account (Org Unit) for an Enterprise Account | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/descendants` | `conn_mod_def::GJz_WSAdDqw::NENp1JiyTF-I1NRnW7B5xw` |
| Move User Groups for an Enterprise Account | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/moveGroups` | `conn_mod_def::GJz_ckZMmv8::W--b83PbRUuiCG-lRo_BGw` |
| Move Workspaces for an Enterprise Account | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/moveWorkspaces` | `conn_mod_def::GJz_edU2_PM::76jMTgcJRRO6c_bAio3tlA` |

### BlockInstallations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Base’s Block Installations | GET | `/meta/bases/{{baseId}}/blockInstallations` | `conn_mod_def::GJz_SwvDgdA::DXH79gUVRmyqlfglL9t3AQ` |
| Delete a Base’s Block Installation | DELETE | `/meta/bases/{{baseId}}/blockInstallations/{{blockInstallationId}}` | `conn_mod_def::GJ0AJcwfQ7Q::VP8QJ71FT2mipGziiSEGnw` |
| Manage a Base’s Block Installation | PATCH | `/v0/meta/bases/{{baseId}}/blockInstallations/{{blockInstallationId}}` | `conn_mod_def::GJz_S6ht7kY::0CePNFCDSW-gx01WRBzDTQ` |

### BaseCollaborators

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Base Collaborator | POST | `/v0/meta/bases/{{baseId}}/collaborators` | `conn_mod_def::GJz_TnzZgyI::vczn1CnhRB2RjolOz2zbQQ` |
| Delete a Base Collaborator | DELETE | `/v0/meta/bases/{{baseId}}/collaborators/{{userOrGroupId}}` | `conn_mod_def::GJz_UAf7wLw::QLIqsa0qQf-t1FBiYsvPSQ` |
| Update a Base Collaborator’s Permission Level | PATCH | `/v0/meta/bases/{{baseId}}/collaborators/{{userOrGroupId}}` | `conn_mod_def::GJz_UuoNIpU::5Eex7jBeT1m1YejRqBkfWQ` |

### InterfaceCollaborators

| Action | Method | Path | Action id |
|---|---|---|---|
| Add an Interface Collaborator to a Base Interface Page Bundle | POST | `/v0/meta/bases/{{baseId}}/interfaces/{{pageBundleId}}/collaborators` | `conn_mod_def::GJz_TvbiLIo::h2J3_j6QSoWJiFDBbWx_FA` |
| Delete an Interface Collaborator from a Base Interface | DELETE | `/v0/meta/bases/{{baseId}}/interfaces/{{pageBundleId}}/collaborators/{{userOrGroupId}}` | `conn_mod_def::GJz_UImp8jE::fgKKYBZrQBCuZA375KiTxQ` |
| Update an Interface Collaborator’s Permissions | PATCH | `/v0/meta/bases/{{baseId}}/interfaces/{{pageBundleId}}/collaborators/{{userOrGroupId}}` | `conn_mod_def::GJz_U2h6usc::R85CLtKCSgulyLxb19UyFg` |

### WorkspaceCollaborators

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Workspace Collaborator | POST | `/v0/meta/workspaces/{{workspaceId}}/collaborators` | `conn_mod_def::GJz_T5OepY4::_T2Cj9j1Qq-kdiHQZitXcw` |
| Delete a Workspace Collaborator | DELETE | `/v0/meta/workspaces/{{workspaceId}}/collaborators/{{userOrGroupId}}` | `conn_mod_def::GJz_UQK4lFI::H5sT3s02Tp6pDy8wvQLlig` |
| Update a Workspace Collaborator | PATCH | `/v0/meta/workspaces/{{workspaceId}}/collaborators/{{userOrGroupId}}` | `conn_mod_def::GJz_U9vngRU::2WvE_SNgTVOMWZT9mV_QoQ` |

### EDiscoveryExports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an eDiscovery Export (Enterprise Account) | GET | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/exports/{{enterpriseTaskId}}` | `conn_mod_def::GJz_TZEDVY8::K8CPHUoaTGKReXU7-dvjQA` |
| Create an eDiscovery Export for an Enterprise Account | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/exports` | `conn_mod_def::GJz_TQGDeHc::YGRR2yP2SaWY2rLefxLz3A` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Record’s Comments | GET | `/v0/{{baseId}}/{{tableIdOrName}}/{{recordId}}/comments` | `conn_mod_def::GJz_VpJleWU::WUnZHILZREK7WwRrlix18A` |
| Create a Comment on a Record | POST | `/v0/{{baseId}}/{{tableIdOrName}}/{{recordId}}/comments` | `conn_mod_def::GJz_VZaTHYY::UX_rq0P6RcaLyrY8ontKWQ` |

### RecordComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Record Comment | DELETE | `/v0/{{baseId}}/{{tableIdOrName}}/{{recordId}}/comments/{{rowCommentId}}` | `conn_mod_def::GJz_Vg-nKUE::hvZB2sGRRLyhnKnFRLuUcQ` |
| Update a Record Comment | PATCH | `/v0/{{baseId}}/{{tableIdOrName}}/{{recordId}}/comments/{{rowCommentId}}` | `conn_mod_def::GJz_VwxjiPU::_w7GYGX0QWmrnHtk3buYng` |

### BaseShares

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Base Share | DELETE | `/v0/meta/bases/{{baseId}}/shares/{{shareId}}` | `conn_mod_def::GJz_aaQQQRU::cWP2WmqoTFOxD9dpYb493A` |
| Manage a Base Share | PATCH | `/v0/meta/bases/{{baseId}}/shares/{{shareId}}` | `conn_mod_def::GJz_asM6cfQ::W0cvWw7vTFG_-DqhtAHhLg` |

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Base’s Table | POST | `/v0/meta/bases/{{baseId}}/tables` | `conn_mod_def::GJz_a01CznU::60OMudAYSuqxM-u2Q2w2uA` |
| Update a Base’s Table | PATCH | `/v0/meta/bases/{{baseId}}/tables/{{tableIdOrName}}` | `conn_mod_def::GJz_a8F3bdw::9zD5cIMfRImpwBcZAaOY1A` |

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Base View’s Metadata | GET | `/v0/meta/bases/{{baseId}}/views/{{viewId}}` | `conn_mod_def::GJz_cyY2Rm0::GW4k3M5_TdqiLQZgVMWTTA` |
| Delete a Base’s View | DELETE | `/v0/meta/bases/{{baseId}}/views/{{viewId}}` | `conn_mod_def::GJz_crMqWOQ::foL3r_fKQyiH_Tq3hY-HTw` |

### EnterpriseAccountAuditLogRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Enterprise Account Audit Log Request | POST | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/auditLogs` | `conn_mod_def::GJz_Rrt97pk::IbuANo9VQ7-jjDvqhErFdw` |

### EnterpriseAuditLogRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Enterprise Account’s Audit Log Request | GET | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/auditLogs/{{enterpriseAuditLogTaskId}}` | `conn_mod_def::GJz_RzcZveM::4bC-lW4kSEupfR-CPmMBUQ` |

### EnterpriseAccountAuditLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Enterprise Account’s Audit Log Requests | GET | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/auditLogs` | `conn_mod_def::GJz_R8UGvGI::L_2b5ZcYQlifcXJRkxa4nw` |

### AuditLogEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Enterprise Account’s Audit Log Events | GET | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/auditLogEvents` | `conn_mod_def::GJz_SFqBdtY::3uL6OzuFSUadI0xV4EVZuQ` |

### BaseTableSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Base’s Table Schema (Metadata) | GET | `/v0/meta/bases/{{baseId}}/tables` | `conn_mod_def::GJz_STx7I8I::QZIJGrIkTOKVXXUn0f_i0w` |

### EnterpriseAccountChangeEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Enterprise Account’s Change Events | GET | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/changeEvents` | `conn_mod_def::GJz_TGzq0R4::VWXYlIeTQ7yhALjD9ZOyMw` |

### EnterpriseAccountEdiscoveryExports

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Enterprise Account’s eDiscovery Exports | GET | `/meta/enterpriseAccounts/{{enterpriseAccountId}}/exports` | `conn_mod_def::GJz_TgspumM::juE_RueGSGmMigqC8an2qQ` |

### BaseMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Base’s Collaborators (Base Metadata) | GET | `/v0/meta/bases/{{baseId}}` | `conn_mod_def::GJz_UX8z-c8::Jrkq_94UR82ZUdEmpWpHSg` |

### Interfaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Interface (Metadata) for a Base | GET | `/v0/meta/bases/{{baseId}}/interfaces/{{pageBundleId}}` | `conn_mod_def::GJz_UfjAxBc::x8YitsjMRGG4ETDNl5orGQ` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Field in a Table | POST | `/v0/meta/bases/{{baseId}}/tables/{{tableId}}/fields` | `conn_mod_def::GJz_VHPGqGA::OL5p3la9S360kF9-jCd5NA` |

### TableFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Table Field in a Base | PATCH | `/meta/bases/{{baseId}}/tables/{{tableId}}/fields/{{columnId}}` | `conn_mod_def::GJz_VSCb8jE::T6xaThAPQ8G6_nWV9A9fCg` |

### EnterprisePackages

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Enterprise Account’s Packages | GET | `/v0/meta/enterpriseAccounts/{{enterpriseAccountId}}/packages` | `conn_mod_def::GJz_WkFpwkE::0yFCb_bUSj-LuRT5gw0bNA` |

### HyperdbRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete HyperDB Records by Primary Keys (Enterprise Account → Data Table) | POST | `/v0/{{enterpriseAccountId}}/{{dataTableId}}/deleteRecords` | `conn_mod_def::GJz_WzyLXLQ::yq5_b0K3TU6BMrA4e0Ia_A` |

### HyperdbTableRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Read HyperDB Table Records (Enterprise Account → Data Table) | POST | `/v0/{{enterpriseAccountId}}/{{dataTableId}}/getRecords` | `conn_mod_def::GJz_W7Y1I5I::F9gx563UTvOYPBxBFpx2IQ` |

### HyperDbRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Upsert Records in a HyperDB Table by Primary Keys | PUT | `/v0/{{enterpriseAccountId}}/{{dataTableId}}/upsertRecords` | `conn_mod_def::GJz_XDfNbh4::LDRYgLhAQGuNaweXdwBdBw` |

### BaseInvites

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Base Invite | DELETE | `/v0/meta/bases/{{baseId}}/invites/{{inviteId}}` | `conn_mod_def::GJz_XKy7ndQ::Fv-8dNCeTyelxMqtqSNcUw` |

This lists 90 of 99 actions. For anything not here, call `search_one_platform_actions` with platform `airtable`. The full catalog is at https://www.withone.ai/knowledge/airtable.

## When a call fails

The error comes from Airtable, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/airtable

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
