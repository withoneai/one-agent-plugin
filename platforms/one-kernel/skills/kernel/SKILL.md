---
name: kernel
description: Kernel is a serverless browser automation and web agent platform that enables developers to deploy, scale, and run headless or full-browser tasks as APIs without managing infrastructure, offering parallel execution, session persistence, real-time debugging, and usage-based pricing. Read and write Kernel data through One: browsers, authconnections, browserpools, credentialproviders, credentials, invocations and more, 112 actions with real parameter documentation. Use whenever the user asks to look something up in Kernel, create or update a record there, or build code against the Kernel API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: kernel
  generated-from: one-knowledge-base
---

# Kernel through One

Kernel is a serverless browser automation and web agent platform that enables developers to deploy, scale, and run headless or full-browser tasks as APIs without managing infrastructure, offering parallel execution, session persistence, real-time debugging, and usage-based pricing.

One exposes Kernel through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `kernel` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Kernel is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Kernel account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Browsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Browser Session Directory as a ZIP Archive | GET | `/browsers/{{id}}/fs/download_dir_zip` | `conn_mod_def::GJ4tAzjrq8w::2nfAviSJTcGAMBdevhIS5Q` |
| Get a Browser Session’s Details | GET | `/browsers/{{id}}` | `conn_mod_def::GJ4tCHo6OGg::lL2SSIgOSfmI7s0A6iGDSw` |
| List Browser Sessions | GET | `/browsers` | `conn_mod_def::GJ4tCJfyu9Y::jnKv_I4oQS-iM_kMiR5DsA` |
| Stream a Browser Process’s Stdout | GET | `/browsers/{{id}}/process/{{processId}}/stdout/stream` | `conn_mod_def::GJ4tBkFNtyw::39FSFdqXSkmBAuhtR-KY-Q` |
| Click Mouse in a Browser Session | POST | `/browsers/{{id}}/computer/click_mouse` | `conn_mod_def::GJ4tAmpXkWM::l8DWToomTXer2Zq8EBeTrg` |
| Create a Browser Session | POST | `/browsers` | `conn_mod_def::GJ4tB65TNaM::yV5IE-gERVCtkBiD2Vjnfw` |
| Delete a Browser Session by ID | DELETE | `/browsers/{{id}}` | `conn_mod_def::GJ4tCAbDYF0::u4AebMEcSzqG9ZpWdcahpw` |
| Delete a Persistent Browser Session (Deprecated) | DELETE | `/browsers` | `conn_mod_def::GJ4tB5PNbYg::YhSsD4D8S7GNE5cJY1vxpg` |
| Drag Mouse in a Browser Session | POST | `/browsers/{{id}}/computer/drag_mouse` | `conn_mod_def::GJ4tAfeg_Kg::SjX0ckaISlOOh90z2G4g0Q` |
| Execute a Browser Session Command (Synchronous) | POST | `/browsers/{{id}}/process/exec` | `conn_mod_def::GJ4tBjnG6h0::_7-Eze0ARgGb65PXqwPwjw` |
| Execute a Browser Session’s Batch Computer Actions | POST | `/browsers/{{id}}/computer/batch` | `conn_mod_def::GJ4tB5nySlo::jJXizvNdTDWxw6Q-KNIrWg` |
| Execute Playwright Code in a Browser Session | POST | `/browsers/{{id}}/playwright/execute` | `conn_mod_def::GJ4tBQHI5TY::6mEuJolvRK2KiqhvDocNPw` |

12 more Browsers actions are available through search.

### AuthConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Auth Connection by ID | GET | `/auth/connections/{{id}}` | `conn_mod_def::GJ4tDNkRmDU::SnI8JkRMTMqBYIe-YfoEGg` |
| List Auth Connections | GET | `/auth/connections` | `conn_mod_def::GJ4tDQJjgX4::DvQRmw07RnyzRqptzPpplA` |
| Stream an Auth Connection’s Login Flow Events | GET | `/auth/connections/{{id}}/events` | `conn_mod_def::GJ4tDXGzeLo::5qBf_MJZQomaEMYmasIPDw` |
| Create an Auth Connection | POST | `/auth/connections` | `conn_mod_def::GJ4tDApsxzY::goBZ6CE3Qxqh1W4sQV51Yw` |
| Delete an Auth Connection | DELETE | `/auth/connections/{{id}}` | `conn_mod_def::GJ4tDOUXda8::MpSAjLgSTDi-NhQZHZDJ0A` |
| Exchange an Auth Connection Handoff Code for a JWT | POST | `/auth/connections/{{id}}/exchange` | `conn_mod_def::GJ4tDNSJZT0::ibjOaojDRHKdVyBWwcCRtw` |
| Start a Login Flow for an Auth Connection | POST | `/auth/connections/{{id}}/login` | `conn_mod_def::GJ4tDOCrYJY::VNExYA2OSzmmMiCXjJoRNw` |
| Submit Auth Connection Field Values | POST | `/auth/connections/{{id}}/submit` | `conn_mod_def::GJ4tDXS0fL0::AOkU0IpZRsmj58JsTuKqQg` |

### BrowserPools

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Browser Pool’s Details | GET | `/browser_pools/{{idOrName}}` | `conn_mod_def::GJ4tBYYPuVY::FDzlpVqeTYm-v5AogxJyyw` |
| List Browser Pools | GET | `/browser_pools` | `conn_mod_def::GJ4tBYnkBGU::MVkYwMVGROODsvifX2g_qA` |
| Acquire a Browser from a Browser Pool | POST | `/browser_pools/{{idOrName}}/acquire` | `conn_mod_def::GJ4tBP6Y3jY::ZX7h8c-kQFaYWjnpSM3FYQ` |
| Create a Browser Pool | POST | `/browser_pools` | `conn_mod_def::GJ4tBQB43Y4::P7hw4qaORmq812e2hhePXg` |
| Delete a Browser Pool | DELETE | `/browser_pools/{{idOrName}}` | `conn_mod_def::GJ4tBP6zz9A::dqmrkSVQRvSLVMtKWaDKrw` |
| Flush a Browser Pool’s Idle Browsers | POST | `/browser_pools/{{idOrName}}/flush` | `conn_mod_def::GJ4tBRcio_g::hUeSq9SpSuSB9kqYeMzFLQ` |
| Release a Browser Pool Browser Back to the Pool | POST | `/browser_pools/{{idOrName}}/release` | `conn_mod_def::GJ4tBcNvLFE::SGTq5yI3ScOgnVLeBlTKcA` |
| Update a Browser Pool by ID or Name | PATCH | `/browser_pools/{{idOrName}}` | `conn_mod_def::GJ4tBZwWpsI::gJj4lfpGQTmK8dHtG78xKw` |

### CredentialProviders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Credential Provider by ID | GET | `/org/credential_providers/{{id}}` | `conn_mod_def::GJ4tCT-FOIk::rfVjBlqaQG6oLYXXTsABmA` |
| List an Organization’s Credential Providers | GET | `/org/credential_providers` | `conn_mod_def::GJ4tCQOTSe0::FHD_1KOZQUOg19BK4lfp8Q` |
| Create an Organization Credential Provider | POST | `/org/credential_providers` | `conn_mod_def::GJ4tCIUryyU::W8DAe-5aSJ6f59kvkPaorA` |
| Delete an Organization Credential Provider | DELETE | `/org/credential_providers/{{id}}` | `conn_mod_def::GJ4tCRTy9xg::7ciNI8fuSKa4N2-UWM2Abg` |
| Test an Organization Credential Provider Connection | POST | `/org/credential_providers/{{id}}/test` | `conn_mod_def::GJ4tCQ5MY2k::NXdmJOdTRSKK15uKBAfdqA` |
| Update a Credential Provider | PATCH | `/org/credential_providers/{{id}}` | `conn_mod_def::GJ4tCatz-4U::T5pE4RCLSI2wAlWz0PAcJg` |

### Credentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Credential’s TOTP Code | GET | `/credentials/{{idOrName}}/totp-code` | `conn_mod_def::GJ4tCbCRbas::gi9qhJ54Sa6qqJphGWn3mw` |
| Get a Credential by ID or Name | GET | `/credentials/{{idOrName}}` | `conn_mod_def::GJ4tCa4RKuc::ObzGhcZ2ThCwtpSPSY40wA` |
| List Credentials | GET | `/credentials` | `conn_mod_def::GJ4tCmGLX24::f5Xlko38R-GIftNhnjlBig` |
| Create a Credential | POST | `/credentials` | `conn_mod_def::GJ4tCbNUOmw::V9K33gZkTxWw4cxlIRv_iA` |
| Delete a Credential by ID or Name | DELETE | `/credentials/{{idOrName}}` | `conn_mod_def::GJ4tCd0goB0::8qwHROxwRWWCFySnnzjDCg` |
| Update a Credential by ID or Name | PATCH | `/credentials/{{idOrName}}` | `conn_mod_def::GJ4tCmSNivI::tzz--yH-SvybiviaTi_M1Q` |

### Invocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invocation’s Details | GET | `/invocations/{{id}}` | `conn_mod_def::GJ4tC1CN5dU::8JzCZwUrSHC7b19B_5QX9A` |
| List Invocations | GET | `/invocations` | `conn_mod_def::GJ4tDCJDfg4::IlDQNjhyS8mD0qPBYLhEyA` |
| Stream an Invocation’s Events | GET | `/invocations/{{id}}/events` | `conn_mod_def::GJ4tDGCCgtA::P3WezkzbQgaXq5mLkleLog` |
| Delete an Invocation’s Browser Sessions | DELETE | `/invocations/{{id}}/browsers` | `conn_mod_def::GJ4tC1L2MiU::1yLCv1_URbOCdPX_0rey4A` |
| Invoke an Action | POST | `/invocations` | `conn_mod_def::GJ4tC07F9MI::YiwoOSUyRteud9gTSIrApw` |
| Update an Invocation by ID | PATCH | `/invocations/{{id}}` | `conn_mod_def::GJ4tDD8s0zo::HAS165ucTxqcZ-84a4Rheg` |

### Deployments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Deployment Details | GET | `/deployments/{{id}}` | `conn_mod_def::GJ4tClEiMVw::h2mldCQeRiWugzpCLjVtCw` |
| List Deployments | GET | `/deployments` | `conn_mod_def::GJ4tCuM3A5I::klcj7155RTW1CxaD5P0H2g` |
| Stream a Deployment’s Events | GET | `/deployments/{{id}}/events` | `conn_mod_def::GJ4tCtf8Dgw::_GkfzbXgQpO1Tl6g6qRB_g` |
| Create a Deployment | POST | `/deployments` | `conn_mod_def::GJ4tCmKYAGU::6UzQPF0OSEmh_yEp75lSWQ` |
| Delete a Deployment | DELETE | `/deployments/{{id}}` | `conn_mod_def::GJ4tCkhuCtg::gWOyKoH9R_eQ8Y1vCS7PTw` |

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Profile Archive (ZIP) by ID or Name | GET | `/profiles/{{idOrName}}/download` | `conn_mod_def::GJ4tDXIKKvo::X_DzjhxqQeapnBVUX7W11A` |
| Get a Profile by ID or Name | GET | `/profiles/{{idOrName}}` | `conn_mod_def::GJ4tDeBcQ7g::SysiMTUqQn6KD9s6L2Hwdw` |
| List Profiles | GET | `/profiles` | `conn_mod_def::GJ4tDek1bXQ::gCxNfUEhQpe57jTVOP4NOg` |
| Create a Profile | POST | `/profiles` | `conn_mod_def::GJ4tDXHChwc::_vge-NC-QEGdk4PFtBPENw` |
| Delete a Profile by ID or Name | DELETE | `/profiles/{{idOrName}}` | `conn_mod_def::GJ4tDXJqDYg::rChhDXvSSvy6mR5etSq_kQ` |

### Proxies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Proxy by ID | GET | `/proxies/{{id}}` | `conn_mod_def::GJ4tDq-LCzA::70hT9Jt1SUq5N3lNXwo5qA` |
| List Proxies | GET | `/proxies` | `conn_mod_def::GJ4tDqDMkJE::-xQNWs8sSTO_BW4GxMIE1A` |
| Check a Proxy’s Health | POST | `/proxies/{{id}}/check` | `conn_mod_def::GJ4tDhPZxxs::OWDCWVx8S6ukOReHwW4rrw` |
| Create a Proxy | POST | `/proxies` | `conn_mod_def::GJ4tDem1d4Q::LDo3vHv6R-K4URMtI9Ps4A` |
| Delete a Proxy by ID | DELETE | `/proxies/{{id}}` | `conn_mod_def::GJ4tDjnPbtE::MDVbhkFwTE-_Fw5DFI9jEw` |

### Extensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Extension Archive (by ID or Name) | GET | `/extensions/{{idOrName}}` | `conn_mod_def::GJ4tCtNq_10::KC2eQ94OR9ON5g3a3r5P3A` |
| Download Unpacked Extension from Chrome Web Store | GET | `/extensions/from_chrome_store` | `conn_mod_def::GJ4tCt-Vufc::LqfOnrmdQAKx9Jwr-pyn5Q` |
| List Browser Extensions | GET | `/extensions` | `conn_mod_def::GJ4tC07fr-Y::Fn_1Y4mKRoiTmggIhpLMwA` |
| Delete an Extension by ID or Name | DELETE | `/extensions/{{idOrName}}` | `conn_mod_def::GJ4tCtV4qPQ::4n-O76P9TJ2X-4nkrXi_Zg` |
| Upload a Browser Extension | POST | `/extensions` | `conn_mod_def::GJ4tC5Rb9Sk::lXbEfiDRQ7qtAJ1DB7xZxA` |

### AuthAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Auth Agent by ID (Deprecated) | GET | `/agents/auth/{{id}}` | `conn_mod_def::GJ4tAWXmqwQ::mRR3C16KTDm-xdHEE2u5yQ` |
| List Auth Agents (Deprecated) | GET | `/agents/auth` | `conn_mod_def::GJ4tAXf5NmE::J92v6uV8TAuPkdgbDzWfjA` |
| Create or Find an Auth Agent | POST | `/agents/auth` | `conn_mod_def::GJ4tAIOScfc::U5VJhWy9QjCzVf3h5J9c_Q` |
| Delete an Auth Agent | DELETE | `/agents/auth/{{id}}` | `conn_mod_def::GJ4tAICoMUc::12AoJ8fSR9-NGvPy1njBhA` |

### BrowserReplays

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Browser Replay Recording | GET | `/browsers/{{id}}/replays/{{replayId}}` | `conn_mod_def::GJ4tBwf4zTI::rzDQmLdeQra9oqcWaPXbEg` |
| Start a Browser Session Replay Recording | POST | `/browsers/{{id}}/replays` | `conn_mod_def::GJ4tBwtGtgE::o9PAkdo8TXi52wID2v7yIQ` |
| Stop a Browser Session Replay Recording | POST | `/browsers/{{id}}/replays/{{replayId}}/stop` | `conn_mod_def::GJ4tBw84VXs::mOqlx5m0RjmQLZe2s7_hXQ` |

### BrowserSessionFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Read a Browser Session File’s Contents | GET | `/browsers/{{id}}/fs/read_file` | `conn_mod_def::GJ4tA7IS8HA::xctMYuSfQXmxZp37r4HWYw` |
| Delete a Browser Session File | PUT | `/browsers/{{id}}/fs/delete_file` | `conn_mod_def::GJ4tAzudqHw::Okr233yNS322IMdnOh-w9A` |
| Write a Browser Session File | PUT | `/browsers/{{id}}/fs/write_file` | `conn_mod_def::GJ4tBIlBpVU::u2LoGTF-RYOey6nM18ae6A` |

### BrowserProcesses

| Action | Method | Path | Action id |
|---|---|---|---|
| Spawn an Asynchronous Process in a Browser Session | POST | `/browsers/{{id}}/process/spawn` | `conn_mod_def::GJ4tBb3lFSo::lZ59vdRoQ5eFz3MSUnQghQ` |
| Write to a Browser Process’s STDIN | POST | `/browsers/{{id}}/process/{{processId}}/stdin` | `conn_mod_def::GJ4tBx68sDU::p0gAwvGIT0mKtFFAeOFDtQ` |

### AuthAgentInvocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Auth Agent Invocation's Details (Deprecated) | GET | `/agents/auth/invocations/{{invocationId}}` | `conn_mod_def::GJ4tAXaHLas::DXrjppJ7SJepCXbnC2DZRg` |
| Create an Auth Agent Invocation | POST | `/agents/auth/invocations` | `conn_mod_def::GJ4tAIWoIgc::XalyTov-SYu5-oyecO5vZQ` |

### AgentAuthInvocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Exchange an Agent Auth Invocation's Handoff Code for a JWT | POST | `/agents/auth/invocations/{{invocationId}}/exchange` | `conn_mod_def::GJ4tALq3yrI::IdN5hVYMRHG4shPsRIev6A` |

### BrowserSessionFilesystem

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Browser Session Directory | PUT | `/browsers/{{id}}/fs/delete_directory` | `conn_mod_def::GJ4tAzfXDMU::3RAMj7VcR2C4iLmBXy1akg` |

### BrowserSessionFileInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Browser Session File or Directory Info | GET | `/browsers/{{id}}/fs/file_info` | `conn_mod_def::GJ4tAznw0cg::YrbWQfn4RpaybK8ysxMY4g` |

### InvocationBrowsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Invocation’s Browsers | GET | `/invocations/{{id}}/browsers` | `conn_mod_def::GJ4tDDh17hs::jtfAESytSgawnnzFECc7Rg` |

### BrowserSessionReplays

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Browser Session’s Replays | GET | `/browsers/{{id}}/replays` | `conn_mod_def::GJ4tBw0oqfg::T1WCuz6KSemy8Y4o1yHxJw` |

### BrowserExtensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Extensions to a Browser Instance | POST | `/browsers/{{id}}/extensions` | `conn_mod_def::GJ4tB8DYe6k::lUM-DfvQRhqsJ1kVJCp0cQ` |

### BrowserSessionDirectoryWatches

| Action | Method | Path | Action id |
|---|---|---|---|
| Start a Browser Session Directory Watch | POST | `/browsers/{{id}}/fs/watch` | `conn_mod_def::GJ4tBHv3xrY::rr8g3id2RSiJKWCNTtNgXQ` |

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Apps | GET | `/apps` | `conn_mod_def::GJ4tAPGPiAQ::EqDDVThcSBSmZiOd_CCFow` |

### AuthInvocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit Field Values for an Auth Invocation (Deprecated) | POST | `/agents/auth/invocations/{{invocationId}}/submit` | `conn_mod_def::GJ4tAWpMAjQ::HlbQ0tWYT1mjRk_JCpIfUw` |

### BrowserScreenshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Take a Browser Session Screenshot (Region) | POST | `/browsers/{{id}}/computer/screenshot` | `conn_mod_def::GJ4tAXIdNAk::0TWYxKcYQwehPJt057q11w` |

This lists 90 of 112 actions. For anything not here, call `search_one_platform_actions` with platform `kernel`. The full catalog is at https://www.withone.ai/knowledge/kernel.

## When a call fails

The error comes from Kernel, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/kernel

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
