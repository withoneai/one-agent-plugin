---
name: docsautomator
description: DocsAutomator is a document automation platform that generates PDFs and other business documents from templates and structured data, enabling teams and developers to automate contracts, invoices, reports, and forms through integrations, APIs, and workflow-driven document creation. Read and write DocsAutomator data through One: automation, automations, signingsessions, esignsessions, esignsessions, jobstatus and more, 18 actions with real parameter documentation. Use whenever the user asks to look something up in DocsAutomator, create or update a record there, or build code against the DocsAutomator API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: docsautomator
  generated-from: one-knowledge-base
---

# DocsAutomator through One

DocsAutomator is a document automation platform that generates PDFs and other business documents from templates and structured data, enabling teams and developers to automate contracts, invoices, reports, and forms through integrations, APIs, and workflow-driven document creation.

One exposes DocsAutomator through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `docsautomator` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm DocsAutomator is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real DocsAutomator account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Automation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Automation | GET | `/automation` | `conn_mod_def::GMZh78FWNhg::jnvYfqa4RU-ZWzqSw490uQ` |
| Create Automation | POST | `/createAutomation` | `conn_mod_def::GMZh76o6_Tg::ry9Jt8IYQemHXWoGXB87yQ` |
| Delete Automation | DELETE | `/deleteAutomation` | `conn_mod_def::GMZh78Of2-A::4mzJ-J2hREKPtodIteIFIA` |

### Automations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Automations | GET | `/automations` | `conn_mod_def::GMZh78PSE1g::zJCSgvAZQZmwDY2Rw9Kp3w` |
| Duplicate Automation | POST | `/duplicateAutomation` | `conn_mod_def::GMZh7_p79PA::pWOOzYWXTSK9ZeXRUKidRQ` |
| Update Automation | PUT | `/updateAutomation` | `conn_mod_def::GMZh8JfacMg::dxFMJs2nQMORHstruEws5A` |

### SigningSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Signing Sessions | GET | `/esign/sessions` | `conn_mod_def::GMZh8QLxS-g::byCjmFIyR2uWxvzhaIhUuA` |
| Cancel a Signing Session | POST | `/esign/sessions/{{sessionId}}/cancel` | `conn_mod_def::GMZh8Gqxjtg::ud51_VOnRCaeuetmq2QscQ` |

### ESignSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audit Trail for an eSign Session | GET | `/esign/sessions/{{sessionId}}/audit` | `conn_mod_def::GMZh8P57tdA::BJrrKlCdQZmDJEe_IjCHIA` |
| Resend a Signing Invitation for an E-sign Session Signer | POST | `/esign/sessions/{{sessionId}}/resend/{{signerIndex}}` | `conn_mod_def::GMZh8QoRTTg::YRZ3b6vgQLWmHwDzaoBNjA` |

### EsignSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Esign Session Details | GET | `/esign/sessions/{{sessionId}}` | `conn_mod_def::GMZh8RNg0Og::aH79IBD8SlicpknBv1JENw` |
| Get Signing Links for an E-Sign Session | GET | `/esign/sessions/{{sessionId}}/links` | `conn_mod_def::GMZh8Q6_-Jg::BwKuzicESzqExADAIOTK5g` |

### JobStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Status | GET | `/job/{{jobId}}` | `conn_mod_def::GMZh8GQv1RA::BtkxdzfoSQ6fgfGwuz_59Q` |

### QueueStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Queue Statistics | GET | `/queue/stats` | `conn_mod_def::GMZh8HqsurA::XlRUrsc1SnCOMt00olefzw` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Document | POST | `/createDocument` | `conn_mod_def::GMZh8IjmHgA::iv_CNiqjRAOFSE318DK9tg` |

### TestEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Test Email | POST | `/sendTestEmail` | `conn_mod_def::GMZh8YIvcGA::njoXTLNPQnaUe8h-DZ2XHw` |

### TemplatePlaceholders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Template Placeholders | GET | `/listPlaceholdersV2` | `conn_mod_def::GMZh8YI2t6g::tZQ_HGYcQGOvCPt13u7HGQ` |

### GoogleDocTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Duplicate Google Doc Template | POST | `/duplicateGoogleDocTemplate` | `conn_mod_def::GMZh8aKswsA::JvtVYhjoRUSp-81oFGdKRQ` |

## When a call fails

The error comes from DocsAutomator, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/docsautomator

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
