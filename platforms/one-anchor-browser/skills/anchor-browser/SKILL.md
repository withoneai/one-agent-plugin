---
name: anchor-browser
description: Anchor Browser is a cloud-hosted automation platform that lets AI agents interact with web pages like a human—navigating sites, clicking, typing, submitting forms and extracting data—so teams can automate workflows where APIs are unavailable or limited. Read and write Anchor Browser data through One: sessions, tasks, identities, applications, extensions, profiles and more, 84 actions with real parameter documentation. Use whenever the user asks to look something up in Anchor Browser, create or update a record there, or build code against the Anchor Browser API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: anchor-browser
  generated-from: one-knowledge-base
---

# Anchor Browser through One

Anchor Browser is a cloud-hosted automation platform that lets AI agents interact with web pages like a human—navigating sites, clicking, typing, submitting forms and extracting data—so teams can automate workflows where APIs are unavailable or limited.

One exposes Anchor Browser through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `anchor-browser` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Anchor Browser is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Anchor Browser account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Sessions Status | GET | `/sessions/all/status` | `conn_mod_def::GJkB-s1eSy0::hbq4SayCR9K_lPQ4UhsB8Q` |
| Take a Session Screenshot | GET | `/sessions/{{SESSIONID}}/screenshot` | `conn_mod_def::GJkCBFLzqjo::-ZkgZCirT8uLz4jBftXxKw` |
| Copy Selected Text for a Session | POST | `/sessions/{{SESSIONID}}/copy` | `conn_mod_def::GJkCCh4Nz3Y::XIgUVbE5QTiaQ1ScUmAG_w` |
| End All Sessions | DELETE | `/sessions/all` | `conn_mod_def::GJkB-kQvD80::CxqzYv5_QYKLZ-BATkwDUg` |
| Mouse Down in a Session | POST | `/sessions/{{SESSIONID}}/mouse/down` | `conn_mod_def::GJkCBa_polU::pcbjE0lLQGSOGxahhTuuiQ` |
| Move Mouse in a Session | POST | `/v1/sessions/{{SESSIONID}}/mouse/move` | `conn_mod_def::GJkCBukVruM::LF-XCiGLTveB3snwbH1YiQ` |
| Navigate a Session to a URL | POST | `/sessions/{{SESSIONID}}/goto` | `conn_mod_def::GJkCCuxFSqY::YIOCRkhKSbuhdhRQptAI9w` |
| Paste Text in a Session | POST | `/v1/sessions/{{SESSIONID}}/paste` | `conn_mod_def::GJkCCo5HG9Q::OtJtAs_VRz6hdu73X5XSWQ` |
| Pause a Session’s Agent | POST | `/v1/sessions/{{SESSION_ID}}/agent/pause` | `conn_mod_def::GJkB8rrDSb4::eDvVugYVQne99n2oJPTymg` |
| Pause a Session’s Recording | POST | `/v1/sessions/{{SESSION_ID}}/recordings/pause` | `conn_mod_def::GJkCDN2PxbA::t85rNj_ASjuJUrLrC0IRsg` |
| Perform Drag and Drop in a Session | POST | `/v1/sessions/{{SESSIONID}}/drag-and-drop` | `conn_mod_def::GJkCB1wAp-8::jeTyZhLCQIWJE1-womZF0g` |
| Perform Mouse Up in a Session | POST | `/v1/sessions/{{SESSIONID}}/mouse/up` | `conn_mod_def::GJkCBkz-M9M::3TwufSP4RbSTVK71W6j3sQ` |

3 more Sessions actions are available through search.

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task’s Latest Version (Legacy) | GET | `/v1/task/{{TASKID}}/latest` | `conn_mod_def::GJkCE2CV1YU::kA223JsAQo-AgOpNFalKJw` |
| List Tasks (Legacy) | GET | `/v1/task` | `conn_mod_def::GJkCD6Fv3Zg::sowWrcttQgicHr9Xd8vyVw` |
| Create or Update a Task (Legacy) | POST | `/task` | `conn_mod_def::GJkCEDNeQQA::lqcyGGWlRlaLH3BF3huQrw` |
| Deploy a Task (Legacy) | POST | `/v1/task/{{TASKID}}/deploy` | `conn_mod_def::GJkCFK6TkPI::pQ7lEbqsRgm4GM9U1JaNcQ` |
| Run a Task | POST | `/v2/tasks/{{taskId}}/run` | `conn_mod_def::GJkCDsxWdQA::fYV7Q7EATdGzeOOlCuk7dA` |
| Update a Task’s Metadata (Legacy) | PUT | `/v1/task/{{TASKID}}` | `conn_mod_def::GJkCEhrOvco::v6hOqZL2TH-tifNIzcwUBg` |

### Identities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Identity | GET | `/v1/identities/{{IDENTITYID}}` | `conn_mod_def::GJkCALh6knY::KF0gF4h9Sbuk5K1nMN0uMw` |
| List an Application’s Identities | GET | `/applications/{{APPLICATIONID}}/identities` | `conn_mod_def::GJkB9eOUN3o::_0LxoMLMTMeDvlJo7c8n6g` |
| Create Identity | POST | `/identities` | `conn_mod_def::GJkCAEn6BK0::pr-inMFJQyGP6AF63Q1xvg` |
| Delete an Identity | DELETE | `/identities/{{IDENTITYID}}` | `conn_mod_def::GJkCAfeozms::2iTY8DD3RiS0RKoaIxmbCg` |
| Update an Identity | PUT | `/v1/identities/{{IDENTITYID}}` | `conn_mod_def::GJkCAWHZ0To::c6-XN_iCTtS-g5Ui-_tg2g` |

### Applications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Application | GET | `/applications/{{APPLICATIONID}}` | `conn_mod_def::GJkB9QWK4_I::dMCSlxFYS6qDaG0LS30Zag` |
| List Applications | GET | `/applications` | `conn_mod_def::GJkB9FVyuHE::DFdL0aWCRsOdo0LCpqofsQ` |
| Create an Application | POST | `/applications` | `conn_mod_def::GJkB9LN4ees::o_nVg81SQDy4vcSMvGdMFA` |
| Delete an Application | DELETE | `/applications/{{APPLICATIONID}}` | `conn_mod_def::GJkB9WaXKm4::LaTy2O0UTR62GHE0trpp1g` |

### Extensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Extension Details | GET | `/extensions/{{id}}` | `conn_mod_def::GJkB_2E5rGQ::YIKybFD2TxynK-vpACWCmA` |
| List Extensions | GET | `/extensions` | `conn_mod_def::GJkB_ihdUns::ob-tCvdMQBKVmUVwkF2tMA` |
| Delete an Extension | DELETE | `/extensions/{{id}}` | `conn_mod_def::GJkB_7dhs6Y::3HhorfyRRweighLKe8ky1w` |
| Upload Extension | POST | `/extensions` | `conn_mod_def::GJkB_qBs2Uc::dC1ZlqpOQ2KKOPicpDvi-A` |

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Profile by Name | GET | `/profiles/{{name}}` | `conn_mod_def::GJkCDB3f2n4::entQnEraTey9nPMHBcpwLw` |
| List Profiles | GET | `/profiles` | `conn_mod_def::GJkCC1DElFI::02JQrCTNSzO6HYVu2roaFQ` |
| Create Profile | POST | `/profiles` | `conn_mod_def::GJkCC7qeykg::nrGsThx5S56yGTFxgho_aw` |
| Delete a Profile | DELETE | `/profiles/{{NAME}}` | `conn_mod_def::GJkCDHl4GhE::ETsRvzFmS0WUaLUFAaaqzg` |

### Task

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Legacy Task Metadata | GET | `/v1/task/{{TASKID}}` | `conn_mod_def::GJkCEbjGItQ::EsL-yhFDQ4SUXGWcv78nng` |
| Run a Task (Legacy) | POST | `/task/run` | `conn_mod_def::GJkCEJCqqSg::zcuplm5KS2a-FGSmo1TsEA` |
| Run a Task by Name (Legacy) | POST | `/v1/task/run/{{taskName}}` | `conn_mod_def::GJkCET9SRuY::3HAEGJsuS3GRpZqAuN0Itw` |

### AuthFlows

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Application’s Authentication Flows | GET | `/applications/{{APPLICATIONID}}/auth-flows` | `conn_mod_def::GJkB9lXrWB0::p9MieaBzRguWM1pQpNEwyA` |
| Delete an Application's Authentication Flow | DELETE | `/applications/{{APPLICATIONID}}/auth-flows/{{AUTHFLOWID}}` | `conn_mod_def::GJkB-Ata9_4::CfUhUg-rTOCnsuHBoAkxWQ` |
| Update an Application’s Authentication Flow | PATCH | `/v1/applications/{{APPLICATIONID}}/auth-flows/{{AUTHFLOWID}}` | `conn_mod_def::GJkB9y2WFq8::Hn8BxnCyTfiUFPkt9mjx6g` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Integrations | GET | `/integrations` | `conn_mod_def::GJkCAtYQ8jI::i4lg0LgfR8uQvx0JvSLutw` |
| Create Integration | POST | `/integrations` | `conn_mod_def::GJkCA31y8ZM::UvuwcecoTUOx8nJZrQaFAA` |
| Delete an Integration | DELETE | `/integrations/{{INTEGRATIONID}}` | `conn_mod_def::GJkCA-f7V5A::aIDrbjbuRSKlaVKb78TPyw` |

### TaskVersion

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task Version (Legacy) | GET | `/v1/task/{{TASKID}}/{{TASKVERSION}}` | `conn_mod_def::GJkCFlrVO7Q::O7EALgfuSMOkiPT7xtPXDg` |
| Delete a Task Version (Legacy) | DELETE | `/v1/task/{{taskId}}/{{taskVersion}}` | `conn_mod_def::GJkCF1urEC8::DSbquZZJTzanPA9rh2MA0A` |
| Publish a Task Version (Legacy) | POST | `/task/{{taskId}}/{{taskVersion}}` | `conn_mod_def::GJkCFr-bZQM::4rVd9-SpTpeRQKSze32PVQ` |

### BatchSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Batch Session Status | GET | `/v1/batch-sessions/{{batch_id}}` | `conn_mod_def::GJkB-X_YfEY::iErwawkkSXiOcUJojwKt8w` |
| Create Batch Sessions | POST | `/batch-sessions` | `conn_mod_def::GJkB-SIFDRg::0eIjgmAJSeG1aFb6NDN7kQ` |

### SessionRecording

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Session’s Primary Recording File | GET | `/v1/sessions/{{SESSION_ID}}/recordings/primary/fetch` | `conn_mod_def::GJkCDmhSWYo::Lbp1U_SvSP2jCWcQaKrKlQ` |
| Resume a Session Recording | POST | `/v1/sessions/{{SESSION_ID}}/recordings/resume` | `conn_mod_def::GJkCDTGnmak::QaibNvr2Qxio8q2sp95MkA` |

### TaskDraft

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task’s Draft (Legacy) | GET | `/v1/task/{{TASKID}}/draft` | `conn_mod_def::GJkCE7Tw68U::2V9FBXpbQriiXJFsC-budw` |
| Create or Update a Task’s Draft (Legacy) | POST | `/v1/task/{{TASKID}}/draft` | `conn_mod_def::GJkCFE9cgm8::nVFtIRWLRAmYnrE4I0uT7g` |

### AgentResources

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Agent Resources to a Session | POST | `/v1/sessions/{{SESSIONID}}/agent/files` | `conn_mod_def::GJkB8lsagjo::CEl6ziZMR8eZtqIcBX0jMg` |

### WebTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform Web Task | POST | `/tools/perform-web-task` | `conn_mod_def::GJkB84wsqPw::gI1k9fl1T7mndXxKuhF0tg` |

### PerformWebTaskStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Perform Web Task Status | GET | `/v1/tools/perform-web-task/{{WORKFLOWID}}/status` | `conn_mod_def::GJkB8_V-HFo::rVUbC3wjQiyaxFwq2XDREw` |

### ApplicationAuthFlows

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Application Authentication Flow | POST | `/v1/applications/{{APPLICATIONID}}/auth-flows` | `conn_mod_def::GJkB9sXrtfs::_ci4DE2cRYO2ZhxBhHoPlw` |

### AgentFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Session’s Agent Resources | GET | `/v1/sessions/{{SESSIONID}}/agent/files` | `conn_mod_def::GJkB8eD6AJs::bKBysp7VQju0o6XM_4HG5g` |

### WebpageContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Webpage Content | POST | `/tools/fetch-webpage` | `conn_mod_def::GJkCF8fKyoU::lCPwfX6xQNWpPEzII5MN1A` |

### Screenshot

| Action | Method | Path | Action id |
|---|---|---|---|
| Screenshot a Webpage | POST | `/v1/tools/screenshot` | `conn_mod_def::GJkCGD_eK-Y::usse5qnNSJ-115ZgTxALbA` |

### IdentityToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Identity Token for an Application | POST | `/v1/applications/{{APPLICATIONID}}/tokens` | `conn_mod_def::GJkB-H4OrXE::Tk_bP3pgT-aCPpj4Yi8ygw` |

### BrowserSession

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Browser Session | GET | `/sessions/{{SESSION_ID}}` | `conn_mod_def::GJkB-z-mSlQ::RAv3xKGDQPSIcGuZOL5o3A` |

### SessionRecordings

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Session’s Recordings | GET | `/sessions/{{SESSION_ID}}/recordings` | `conn_mod_def::GJkCDgByRjQ::C5VhFG5hTqesfO13bK7Xpw` |

### BrowserSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| End a Browser Session | DELETE | `/sessions/{{SESSION_ID}}` | `conn_mod_def::GJkB-5t8foQ::age2pTR4STOEIG7sY-PsxA` |

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Browser Session’s Pages | GET | `/v1/sessions/{{SESSION_ID}}/pages` | `conn_mod_def::GJkB_AutV_4::4Pq5Hwt-TvST4WWAr7rVUw` |

### SessionUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Files to a Session | POST | `/sessions/{{SESSIONID}}/uploads` | `conn_mod_def::GJkB_H0dN3o::AT9GDKm3QrC-kwBHaG9o-w` |

### SessionDownloads

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Session’s Downloads | GET | `/sessions/{{SESSION_ID}}/downloads` | `conn_mod_def::GJkB_Nt28OE::ON7f8rgTSOKEaz3oRYwjWA` |

### Event

| Action | Method | Path | Action id |
|---|---|---|---|
| Wait for an Event | POST | `/events/{{EVENT_NAME}}/wait` | `conn_mod_def::GJkB_Wen1YU::uVAw6XdoRiiPrCV-bTlFSQ` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Signal an Event | POST | `/v1/events/{{event_name}}` | `conn_mod_def::GJkB_cAdt3Y::iGNqEfbkQuG5-D50xH3O7w` |

### IdentityCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Identity’s Credentials | GET | `/identities/{{IDENTITYID}}/credentials` | `conn_mod_def::GJkCAnVY5Ig::e1t5DRUBS1Wys3lH-4zDNw` |

### SessionMouseClick

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform a Session Mouse Click | POST | `/v1/sessions/{{SESSIONID}}/mouse/click` | `conn_mod_def::GJkCBLSktAc::I4npKic9T9aAzmLLzUpbMA` |

### SessionMouseDoubleClick

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform a Session Mouse Double Click | POST | `/v1/sessions/{{SESSIONID}}/mouse/doubleClick` | `conn_mod_def::GJkCBUBWWQM::K1vFoF-4SdGn0oN6iD685A` |

### Keyboard

| Action | Method | Path | Action id |
|---|---|---|---|
| Type Text in a Session (Keyboard) | POST | `/sessions/{{SESSIONID}}/keyboard/type` | `conn_mod_def::GJkCCDlvffM::SMmSt2OaTvuvfsW6soGOBQ` |

### SessionKeyboardShortcut

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform a Session Keyboard Shortcut | POST | `/v1/sessions/{{SESSIONID}}/keyboard/shortcut` | `conn_mod_def::GJkCCKs7H94::DSyJFGsdQyaZ2W830xzpGA` |

### SessionClipboard

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Session’s Clipboard Content | GET | `/v1/sessions/{{SESSIONID}}/clipboard` | `conn_mod_def::GJkCCRDX1vg::sE22yvDQR3W10di7WZRmFw` |

### Clipboard

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Clipboard Content for a Session | POST | `/v1/sessions/{{SESSIONID}}/clipboard` | `conn_mod_def::GJkCCYzK_n8::5a3xBn-5S5eNvL1MDbuxxQ` |

### TaskRunStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task Run’s Status | GET | `/v2/tasks/runs/{{runId}}/status` | `conn_mod_def::GJkCDy9k84g::qjKsXhGBStCbmb1Y6QyGLw` |

### LegacyTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Legacy Task | DELETE | `/v1/task/{{TASKID}}` | `conn_mod_def::GJkCEoXPzYg::NwU9fg4uToemBds0kC8oXg` |

### TaskVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Task’s Versions (Legacy) | GET | `/v1/task/{{TASKID}}/versions` | `conn_mod_def::GJkCEvzR6bw::BgPMbgKYTxukdAGittz9zg` |

### TaskExecutions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Task’s Executions (Legacy) | GET | `/v1/task/{{TASKID}}/executions` | `conn_mod_def::GJkCFZr6ke8::YKd9HpGHQxqJnryGZc6uFA` |

### TaskExecutionResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task Execution Result (Legacy) | GET | `/v1/task/{{TASKID}}/executions/{{EXECUTIONID}}` | `conn_mod_def::GJkCFftiXEc::JVj82TijTL2aYtAjKJoByw` |

This lists 81 of 84 actions. For anything not here, call `search_one_platform_actions` with platform `anchor-browser`. The full catalog is at https://www.withone.ai/knowledge/anchor-browser.

## When a call fails

The error comes from Anchor Browser, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/anchor-browser

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
