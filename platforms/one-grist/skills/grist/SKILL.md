---
name: grist
description: A flexible data workspace that combines spreadsheet simplicity with database structure, enabling teams to organize, analyze, and collaborate on structured data, build custom apps, and automate workflows without coding. Read and write Grist data through One: documents, attachments, workspaces, serviceaccounts, records, tables and more, 120 actions with real parameter documentation. Use whenever the user asks to look something up in Grist, create or update a record there, or build code against the Grist API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: grist
  generated-from: one-knowledge-base
---

# Grist through One

A flexible data workspace that combines spreadsheet simplicity with database structure, enabling teams to organize, analyze, and collaborate on structured data, build custom apps, and automate workflows without coding.

One exposes Grist through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `grist` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Grist is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Grist account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Compare Document Versions | GET | `/docs/{{docId}}/compare` | `conn_mod_def::GKIqU8nZXKc::aR4ETrpVQe2kC9Gc8QPzvg` |
| Compare Two Documents | GET | `/docs/{{docId}}/compare/{{docId2}}` | `conn_mod_def::GKIqU9PYeds::Lwp3mTVwRhSPc-T4L3zbkw` |
| Describe a Document | GET | `/docs/{{docId}}` | `conn_mod_def::GKIqVNp3eIw::ieDtcasnTqOhKcMb_BTPFg` |
| Download a Document as a SQLite File | GET | `/docs/{{docId}}/download` | `conn_mod_def::GKIqU8zVLW8::vjPd1XCOSeSAPU5-jtIg5A` |
| Download a Document as an Excel File | GET | `/docs/{{docId}}/download/xlsx` | `conn_mod_def::GKIqU86eKfE::6gLFWnriSVGlAM47FLSg6A` |
| Download a Document Table as CSV | GET | `/docs/{{docId}}/download/csv` | `conn_mod_def::GKIqVFfqmfM::oElWBzPmQrOAVwmOf2rTKg` |
| Download a Document's All Attachments Archive | GET | `/docs/{{docId}}/attachments/archive` | `conn_mod_def::GKIqT1DkwlU::aYJItaSNS46xiahZFWdndw` |
| Run an SQL Query Against a Document | GET | `/docs/{{docId}}/sql` | `conn_mod_def::GKIqW-skL6Q::wPuqFJrTTxedyKS_5d2KzA` |
| Apply a List of User Actions to a Document | POST | `/docs/{{docId}}/apply` | `conn_mod_def::GKIqUz0EH0Y::9FVGTlXLQuObtNxpLb3DCw` |
| Change Access for a Document | PATCH | `/docs/{{docId}}/access` | `conn_mod_def::GKIqU78MC9g::hvVBcekqSNOJwKte_9C0jg` |
| Copy a Document to a Workspace | POST | `/docs/{{docId}}/copy` | `conn_mod_def::GKIqVE256iU::7DzcOOnlT5Wx9qVo5ZIEYw` |
| Create a Change Proposal for a Document | POST | `/docs/{{docId}}/propose` | `conn_mod_def::GKIqVE9L-1U::Ga4UA9YrSD2uxrPMTp1xrg` |

21 more Documents actions are available through search.

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Attachment's Contents | GET | `/docs/{{docId}}/attachments/{{attachmentId}}/download` | `conn_mod_def::GKIqT0Fff4Y::wp33pMgeQ-OCtKjaUVdMIA` |
| Get a Document's External Attachment Store | GET | `/docs/{{docId}}/attachments/store` | `conn_mod_def::GKIqT0fXfu0::oyntdoC8SAapsQAqaUK3MA` |
| Get Attachment Metadata for a Document | GET | `/docs/{{docId}}/attachments/{{attachmentId}}` | `conn_mod_def::GKIqT-2X6SI::zK19e3a3STCM8zV79xMkFA` |
| List a Doc's Attachment Metadata | GET | `/docs/{{docId}}/attachments` | `conn_mod_def::GKIqULgErmc::jLX8hX90QtuylMZfjJbNAg` |
| Delete Unused Attachments From a Document | POST | `/docs/{{docId}}/attachments/removeUnused` | `conn_mod_def::GKIqT2rI6yg::ib6YuSKwTH6KbaOjqOf5qA` |
| Set a Document's Attachment Store | POST | `/docs/{{docId}}/attachments/store` | `conn_mod_def::GKIqT-1HSxM::4ABH4_3VQWS5w3pGzS05lw` |
| Start Transferring a Document's Attachments | POST | `/docs/{{docId}}/attachments/transferAll` | `conn_mod_def::GKIqT-Si2As::IrTpHcXqRvaPc-_3a6sj0A` |
| Update Attachment Usage Tracking for a Document | POST | `/docs/{{docId}}/attachments/updateUsed` | `conn_mod_def::GKIqUTUSsNk::8lyk7KGGTS-A5907V_0-Lw` |
| Upload Attachments to a Doc | POST | `/docs/{{docId}}/attachments` | `conn_mod_def::GKIqUTmfKRA::rZnqv4c5RTykLYO4e64zNg` |
| Upload Missing Attachments for a Document | POST | `/docs/{{docId}}/attachments/archive` | `conn_mod_def::GKIqUTvjweA::41gmkT8HT1yX5XDzJT5Hng` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Workspace | GET | `/workspaces/{{workspaceId}}` | `conn_mod_def::GKIqXifF4m8::THmNzH1XSh-BrOzEuUr_hw` |
| List an Org's Workspaces | GET | `/orgs/{{orgId}}/workspaces` | `conn_mod_def::GKIqXqj7sdo::LrxPO_LRQDmmGhVO-JnE7w` |
| Change Access for a Workspace | PATCH | `/workspaces/{{workspaceId}}/access` | `conn_mod_def::GKIqXgsDA1E::5kehJbUyQJeaqNjnZw0WRg` |
| Create an Empty Workspace in an Organization | POST | `/orgs/{{orgId}}/workspaces` | `conn_mod_def::GKIqXhfTC48::BjeHymE2TamLvuyjng3Iow` |
| Delete a Workspace | DELETE | `/workspaces/{{workspaceId}}` | `conn_mod_def::GKIqXgKLCc4::A470E5pOSrqoWmv9WfbKzw` |
| Modify a Workspace | PATCH | `/workspaces/{{workspaceId}}` | `conn_mod_def::GKIqXqKgCBY::r4Daomx_TVeAOKO2rWUz8A` |
| Remove a Workspace | POST | `/workspaces/{{workspaceId}}/remove` | `conn_mod_def::GKIqXqbwlwY::R_XI6vwyRnGC2akR4r1sSw` |
| Restore a Workspace From Trash | POST | `/workspaces/{{workspaceId}}/unremove` | `conn_mod_def::GKIqXreIy1s::_UEiCJxASlOWrvZa_0ayFw` |

### ServiceAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service Account's Details | GET | `/service-accounts/{{saId}}` | `conn_mod_def::GKIqW1ChxDw::7kWnqOikTJiYQFimNGurlw` |
| List Service Accounts | GET | `/api/service-accounts` | `conn_mod_def::GKIqW0MYoIg::kvplbd6YRX6EstXiUNcsdg` |
| Create a Service Account | POST | `/api/service-accounts` | `conn_mod_def::GKIqWpjIjnU::KBriIiRyQ9CEX2BaJ13-Cg` |
| Delete a Service Account | DELETE | `/service-accounts/{{saId}}` | `conn_mod_def::GKIqW0MHaIQ::RDJHIiVbSoy_nsyiWh4oDg` |
| Modify a Service Account | PATCH | `/service-accounts/{{saId}}` | `conn_mod_def::GKIqW9fNWwg::F3AAJhzbQ2ecLViYK3juQA` |
| Regenerate a Service Account's API Key | POST | `/service-accounts/{{saId}}/apikey` | `conn_mod_def::GKIqW0bH3b4::SXkWIHLzQymTeXCqsD9u6A` |

### Records

| Action | Method | Path | Action id |
|---|---|---|---|
| List Records From a Document Table | GET | `/docs/{{docId}}/tables/{{tableId}}/records` | `conn_mod_def::GKIqWsHynEA::AQb7kEYgTsqQzYn802ExRw` |
| Add or Update Records in a Document Table | PUT | `/docs/{{docId}}/tables/{{tableId}}/records` | `conn_mod_def::GKIqWhs-ab0::Ni5EMj5_S_-KhjUuQOATBw` |
| Add Records to a Doc Table | POST | `/docs/{{docId}}/tables/{{tableId}}/records` | `conn_mod_def::GKIqWqun1Zk::Qh_x0U9VTxK0P71ATFEpsA` |
| Delete Records of a Table in a Document | POST | `/docs/{{docId}}/tables/{{tableId}}/records/delete` | `conn_mod_def::GKIqWqiv8EA::jy5iOftYRwO24BM1d-VB3A` |
| Modify Records of a Table in a Document | PATCH | `/docs/{{docId}}/tables/{{tableId}}/records` | `conn_mod_def::GKIqWrKjqpA::Eh1c7vXyT-WLWIbcYD3tTQ` |

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tables in a Document | GET | `/docs/{{docId}}/tables` | `conn_mod_def::GKIqXHQz2-A::XeizaBiqRVevB5G2IWReEw` |
| Add Tables to a Document | POST | `/docs/{{docId}}/tables` | `conn_mod_def::GKIqXHI_tSU::8e1MXRJVQQS0lGcvEQK1FQ` |
| Modify a Document's Tables | PATCH | `/docs/{{docId}}/tables` | `conn_mod_def::GKIqXHYoons::e2GNNBW6TdCFOMpOmHj-7w` |
| Modify Rows of a Table in a Document | PATCH | `/docs/{{docId}}/tables/{{tableId}}/data` | `conn_mod_def::GKIqUz4pCiM::tEtxZqUuSt6sEUhiyoE4LA` |

### Orgs

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe an Org | GET | `/orgs/{{orgId}}` | `conn_mod_def::GKIqWE8Gytk::sBL4-SCMSQiI9OwlLA9DgQ` |
| List Orgs | GET | `/api/orgs` | `conn_mod_def::GKIqWT5vRHM::H1kI_gAoTjuFBims_bB9zQ` |
| Delete an Org | DELETE | `/orgs/{{orgId}}/{{name}}` | `conn_mod_def::GKIqWFzEHmo::w5SOCvsFQE-NxpRhvH9HUg` |
| Modify an Org | PATCH | `/orgs/{{orgId}}` | `conn_mod_def::GKIqWU0d7s8::w0FSmDMRT9muodbbgsL4iw` |

### Columns

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Columns to a Table in a Document | POST | `/docs/{{docId}}/tables/{{tableId}}/columns` | `conn_mod_def::GKIqUd0twRU::vcociUdLST6P1DzCBZK6xA` |
| Add or Update Columns of a Table in a Document | PUT | `/docs/{{docId}}/tables/{{tableId}}/columns` | `conn_mod_def::GKIqUmy0Mzs::fpFe-XE3SjmvJ51VjQG6EQ` |
| Modify a Table's Columns | PATCH | `/docs/{{docId}}/tables/{{tableId}}/columns` | `conn_mod_def::GKIqUmhj3xM::7-T08rXjT8aku-12IObXGg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a User | DELETE | `/users/{{userId}}` | `conn_mod_def::GKIqXP7n5r4::Yd9kYbTKRqmfpb98TncXWg` |
| Disable a User | POST | `/users/{{userId}}/disable` | `conn_mod_def::GKIqXPup01c::TODAr4RaTAmR6gGJvk4-Zw` |
| Enable a User | POST | `/users/{{userId}}/enable` | `conn_mod_def::GKIqXPhRe2Y::4bQH8x3UT8ir9cKoLpN9EQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Document's Webhooks | GET | `/docs/{{docId}}/webhooks` | `conn_mod_def::GKIqXYUE_gU::A5Pi-7kmSBqC0mXMoZHIOw` |
| Create Webhooks for a Document | POST | `/docs/{{docId}}/webhooks` | `conn_mod_def::GKIqXYplagE::-iYEPVIIT6a8L_dtw5Mxng` |
| Modify a Doc's Webhook | PATCH | `/docs/{{docId}}/webhooks/{{webhookId}}` | `conn_mod_def::GKIqXZPb3RQ::SJdG-AWUQfO8w9gtnxd1wg` |

### DocumentTableColumns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Columns in a Document Table | GET | `/docs/{{docId}}/tables/{{tableId}}/columns` | `conn_mod_def::GKIqUnVMeKE::qnb07AfKTDSYa6rvJoDdOw` |
| Delete a Table Column From a Document Table | DELETE | `/docs/{{docId}}/tables/{{tableId}}/columns/{{colId}}` | `conn_mod_def::GKIqUqvDoxU::DOTES-j9SROhVj-gFQIpLA` |

### DocumentTiming

| Action | Method | Path | Action id |
|---|---|---|---|
| Start Formula Timing for a Document | POST | `/docs/{{docId}}/timing/start` | `conn_mod_def::GKIqV8fD0Wg::aIaIrm20Qt6L3h3QzLZGUg` |
| Stop Formula Timing for a Document | POST | `/docs/{{docId}}/timing/stop` | `conn_mod_def::GKIqV8fDTDw::kSwSFEmiQ4CCZAl__7ytHg` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Template Details | GET | `/templates/{{templateId}}` | `conn_mod_def::GKIqXHH8QH8::W80-OP-CTH2P7UssYvRNnA` |
| List Available Templates | GET | `/api/templates` | `conn_mod_def::GKIqXPKDdjk::E9I85yltSYWmAndQbCKLXQ` |

### ApiKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Regenerate API Key | POST | `/api/profile/apikey` | `conn_mod_def::GKIqWVeuulI::3YiYjLhXTYCNNLS7UQnBtw` |

### AttachmentTransferStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Attachment Transfer Status for a Document | GET | `/docs/{{docId}}/attachments/transferStatus` | `conn_mod_def::GKIqT09W_Ks::Q-kehFzYSFOe6kCzRCjwdQ` |

### UserLocale

| Action | Method | Path | Action id |
|---|---|---|---|
| Update User Locale | POST | `/api/profile/user/locale` | `conn_mod_def::GKIqWenygI8::DV0ymbk-RYScgo5gwhCkvA` |

### AttachmentStores

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Document's External Attachment Stores | GET | `/docs/{{docId}}/attachments/stores` | `conn_mod_def::GKIqT-fQQos::WnWH7YTBT3-QmSOSZzdb9g` |

### DocumentTableRows

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Rows to a Document Table | POST | `/docs/{{docId}}/tables/{{tableId}}/data` | `conn_mod_def::GKIqUoGUNCw::Et9WyaF8RsKbdEtNjAyq1A` |

### DocumentProposals

| Action | Method | Path | Action id |
|---|---|---|---|
| Apply a Document Proposal | POST | `/docs/{{docId}}/proposals/{{proposalId}}/apply` | `conn_mod_def::GKIqUzGrPFc::R-TlA3z7SzCaho_bVvdeiA` |

### DocumentTableData

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Data From a Document Table | GET | `/docs/{{docId}}/tables/{{tableId}}/data` | `conn_mod_def::GKIqU0IUeEM::I9JNUNABQi6ybYGgfIQvww` |

### DocumentTableDsv

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Document Table as DSV | GET | `/docs/{{docId}}/download/dsv` | `conn_mod_def::GKIqVF4SvGw::ZPPI-mSpRKeTCjz6qqHb9g` |

### DocumentTableTsv

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Document Table as TSV | GET | `/docs/{{docId}}/download/tsv` | `conn_mod_def::GKIqVF8Hk-w::O5ZohqZZQK6kC0VHs3PhYg` |

### DocumentActionHistoryStates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document's Action History States | GET | `/docs/{{docId}}/states` | `conn_mod_def::GKIqVVgqw3Y::DCpNtw0aSqKrO3RQHFgulw` |

### FormulaTimingStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Formula Timing Status for a Document | GET | `/docs/{{docId}}/timing` | `conn_mod_def::GKIqVV8-5qg::8HiOhO6aTl2Yyx0jaZo9MA` |

### WorkspaceDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Import a Workspace Document | POST | `/workspaces/{{workspaceId}}/import` | `conn_mod_def::GKIqVenQ7-k::_LCeQ4U-Tyubydu_Csb-Jw` |

### DocumentAccess

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users With Access to a Document | GET | `/docs/{{docId}}/access` | `conn_mod_def::GKIqVeuU9Iw::TT9Mg1x0RReYYUiNL3jNEg` |

### DocumentUsersForViewAs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document's Users for View As | GET | `/docs/{{docId}}/usersForViewAs` | `conn_mod_def::GKIqVe4o7sY::JzyWJBzdQzm6aooPEDs_Ig` |

### Proposals

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Document's Change Proposals | GET | `/docs/{{docId}}/proposals` | `conn_mod_def::GKIqVfUSjBY::cXD-9C64R0yD7t1zN5U-yw` |

### Snapshots

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Document's Snapshots | GET | `/docs/{{docId}}/snapshots` | `conn_mod_def::GKIqVfmKKSA::bqwwS8G2QYijS6F8K01HHg` |

### DocumentSnapshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove Document Snapshots | POST | `/docs/{{docId}}/snapshots/remove` | `conn_mod_def::GKIqVzOEFRE::JQZZG3kTQQqQ_DrYDZ6rJw` |

### DocumentTableSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Document's Table Schema | GET | `/docs/{{docId}}/download/table-schema` | `conn_mod_def::GKIqV8uG0RY::NAGn8unHSMuT4RNYOxLj7A` |

### DocsFormViewData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Doc's Form View Data | GET | `/docs/{{docId}}/forms/{{viewSectionId}}` | `conn_mod_def::GKIqWEfzWS0::ANgzUV-cScGfDPxDrIzmpA` |

### OrganizationUsageSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization's Usage Summary | GET | `/orgs/{{orgId}}/usage` | `conn_mod_def::GKIqWFOPaug::m2E0Ne4UTYS2fsgAuePYBQ` |

### OrgAccess

| Action | Method | Path | Action id |
|---|---|---|---|
| Change Access for an Org | PATCH | `/orgs/{{orgId}}/access` | `conn_mod_def::GKIqWFxNmGE::aVbNT7NNTheXZHkyTFK1FQ` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete the Current User's API Key | DELETE | `/api/profile/apikey` | `conn_mod_def::GKIqWUKdKXk::Uckb8bb5Rl-HR2OdS8hFcQ` |

### OrgAccessUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users With Access to an Org | GET | `/orgs/{{orgId}}/access` | `conn_mod_def::GKIqWWG4y2w::3KTV_FqtQ4G0rVyHC1vZBg` |

### ProfileApiKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User's API Key | GET | `/api/profile/apikey` | `conn_mod_def::GKIqWdSF4U4::2hzrv2IyQm6GtIY89ToDqA` |

### Profile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User's Profile | GET | `/api/profile/user` | `conn_mod_def::GKIqWdhM0hE::MEYfHXeaR7WxxvejBNDwfg` |

### ProfileUserName

| Action | Method | Path | Action id |
|---|---|---|---|
| Update User Name | POST | `/api/profile/user/name` | `conn_mod_def::GKIqWeYzUcY::5cCqszW0SPOoFUtiI-IDoA` |

This lists 90 of 120 actions. For anything not here, call `search_one_platform_actions` with platform `grist`. The full catalog is at https://www.withone.ai/knowledge/grist.

## When a call fails

The error comes from Grist, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/grist

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
