---
name: xodo-sign
description: Xodo Sign is an electronic signature platform that enables teams to send, sign, edit, store, and manage documents online, with compliance features, audit trails, templates, and an eSignature API for automating signing workflows and integrating with existing tools. Read and write Xodo Sign data through One: documents, bulkjobs, document, templates, businesses, bulkjobstatus and more, 24 actions with real parameter documentation. Use whenever the user asks to look something up in Xodo Sign, create or update a record there, or build code against the Xodo Sign API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: xodo-sign
  generated-from: one-knowledge-base
---

# Xodo Sign through One

Xodo Sign is an electronic signature platform that enables teams to send, sign, edit, store, and manage documents online, with compliance features, audit trails, templates, and an eSignature API for automating signing workflows and integrating with existing tools.

One exposes Xodo Sign through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `xodo-sign` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Xodo Sign is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Xodo Sign account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Final PDF | GET | `/download_final_document` | `conn_mod_def::GMTjM5IpL6g::EZgvsbVUQ7KfLQZ7LowuYg` |
| Download Original PDF | GET | `/download_raw_document` | `conn_mod_def::GMTjM5NRyVg::fzr6sutbSQSP_DECtpyv4Q` |
| Get a Document or Template | GET | `/document` | `conn_mod_def::GMTjNEZ6zqg::0m5i89m4Q5WHqK6cBlE5Iw` |
| List Documents | GET | `/document` | `conn_mod_def::GMTjNKhFK4g::tZEJ-6jFTL6vDSnjLeeZ8A` |
| Cancel Document | DELETE | `/document` | `conn_mod_def::GMTjMsURCSg::3TI8gphwSlqdEAgo44zpmA` |
| Create Document | POST | `/document` | `conn_mod_def::GMTjMsDHwtA::eX22VcX1TnusX9JixOXInA` |
| Delete a Document or Template | DELETE | `/document` | `conn_mod_def::GMTjM8zEe2g::p9bMDuJ8Qjyszzh7xwjq8g` |
| Trash a Document or Template | DELETE | `/document` | `conn_mod_def::GMTjNLbtD-g::C0ofFU2YRLmgKHxzOn5IYQ` |

### BulkJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bulk Jobs | GET | `/bulk_job` | `conn_mod_def::GMTjNESCqCg::NQRSwjfySLaQchDyt4cuRA` |
| Create a Bulk Job Using a Template | POST | `/template/{{templateHash}}/bulk/job` | `conn_mod_def::GMTjMvsUBDA::9GrZZyr_QGO2070uH0NLKg` |

### Document

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Template Using Document | POST | `/document` | `conn_mod_def::GMTjMsbZSfA::dcEqi3cuQDe9IAYg7X-VrQ` |
| Use Template | POST | `/document` | `conn_mod_def::GMTjNekcaKA::wUwknJckQuCgVkWt7FUtOQ` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Blank CSV from Template for Bulk Sending | GET | `/template/{{templateHash}}/bulk/csv/blank` | `conn_mod_def::GMTjM3E_LRA::qXytZ5o3Rnebqx71IuyPZg` |
| List Templates | GET | `/document` | `conn_mod_def::GMTjNVs7Klg::Vt7GeyALTeapXACCu7RPqw` |

### Businesses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Businesses | GET | `/business` | `conn_mod_def::GMTjNC6-f4A::8xji5JrxSdWgo6KHFMMT9Q` |

### BulkJobStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulk Job Status by ID | GET | `/bulk_job/{{bulkSendingJobId}}/status` | `conn_mod_def::GMTjNEhDXZA::fnzqXJvqSteWKSdfQ63p1A` |

### TestConnection

| Action | Method | Path | Action id |
|---|---|---|---|
| Test Connection | GET | `/xodo-sign/test-connection` | `conn_mod_def::GMTlAUXOUKA::3JVmlEWrTLqI01g3ibrTgA` |

### DocumentAuditLog

| Action | Method | Path | Action id |
|---|---|---|---|
| Audit Log for a Document | GET | `/document/{{documentHash}}/audit_log` | `conn_mod_def::GMTjMsD2FjA::9i13PwttQ9qPwh3d2ReEHQ` |

### BulkJobDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Documents for a Bulk Job by ID | GET | `/bulk_job/{{bulkSendingJobId}}/documents` | `conn_mod_def::GMTjND9H1eA::AL7fOUqqTQ25AJhsSnpyGA` |

### BulkJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bulk Job by ID | GET | `/bulk_job/{{bulkSendingJobId}}` | `conn_mod_def::GMTjM5u1tIg::ZimjWsfiRxm0nDjuAmZQmQ` |

### Reminders

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Reminder | POST | `/send_reminder` | `conn_mod_def::GMTjNL__LNg::LKuL-WNUR52H3spv6bfm7g` |

### Signer

| Action | Method | Path | Action id |
|---|---|---|---|
| Reassign Signer | POST | `/reassign` | `conn_mod_def::GMTjNMM_6Ig::WkLaz7qhS6yp5xXaoBzdug` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload File to a Business | POST | `/file` | `conn_mod_def::GMTjNb29F2g::AVPmpkrrQvOARAjEVuZt0g` |

### TemplateBulkCsvValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Bulk Sending CSV from a Template | POST | `/template/{{templateHash}}/bulk/csv/validate` | `conn_mod_def::GMTjNe0satA::_FcpAfEXSDCzgO7R2lBinw` |

## When a call fails

The error comes from Xodo Sign, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/xodo-sign

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
