---
name: bug-bug
description: A no-code testing platform that automatically crawls websites and web apps to detect visual issues, broken links, and UI regressions, helping teams maintain quality, catch bugs early, and streamline QA workflows. Read and write BugBug data through One: tests, groups, suiteruns, suites, steps, testruns and more, 46 actions with real parameter documentation. Use whenever the user asks to look something up in BugBug, create or update a record there, or build code against the BugBug API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bug-bug
  generated-from: one-knowledge-base
---

# BugBug through One

A no-code testing platform that automatically crawls websites and web apps to detect visual issues, broken links, and UI regressions, helping teams maintain quality, catch bugs early, and streamline QA workflows.

One exposes BugBug through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bug-bug` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BugBug is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BugBug account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tests

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tests | GET | `/api/v2/tests/` | `conn_mod_def::GJ47qqEBXkY::z-lwtUWaSOWKB7cazzX3Xg` |
| Retrieve a Test by ID | GET | `/api/v2/tests/{{id}}/` | `conn_mod_def::GJ47qiDENo4::msW6mzINTEGfPo-nHhSdfA` |
| Test Connection | GET | `/api/v2/tests/` | `conn_mod_def::GJ49E9r6n7o::NP_Dj6XrQkK8hNGcainX5Q` |
| Create a New Test | POST | `/api/v2/tests/` | `conn_mod_def::GJ47px9k3zI::X8K4olU7QAG4QYXmk8zqnw` |
| Delete a Test | DELETE | `/api/v2/tests/{{id}}/` | `conn_mod_def::GJ47qR3Jtek::EfQaZNrFQT23voozmYDQmQ` |
| Insert a Component into a Test | POST | `/api/v2/tests/{{id}}/insert-component/` | `conn_mod_def::GJ47p-tuJ-U::ZFYBn3VASxWyJZeQnW09iQ` |
| Move a Test Step to a Different Position or Group | POST | `/api/v2/tests/{{id}}/update-step-position/` | `conn_mod_def::GJ47qKVI2A0::LM_U-8HHRJibMx4GXgrpoQ` |
| Unlink a Component From a Test | POST | `/api/v2/tests/{{id}}/unlink-component/` | `conn_mod_def::GJ47qxsoT18::3bMFLoUGRDqVY5O1pe3GuA` |
| Update a Test by ID (Partial Update) | PATCH | `/api/v2/tests/{{id}}/` | `conn_mod_def::GJ47qZpGYFc::cpsb6SgIQ2m-PxmHV8MjYg` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Groups | GET | `/api/v2/groups/` | `conn_mod_def::GJ47ltlz3OU::K-QPaQTUSbWjbXGOq3U5mA` |
| Retrieve a Group by ID | GET | `/groups/{{id}}/` | `conn_mod_def::GJ47llfQj48::XbBXEwfrRaysFZmkATpJMA` |
| Create a Group | POST | `/groups/` | `conn_mod_def::GJ47lJ01yx4::VQjaCboQTjGJy1xZl0QrSA` |
| Partially Update a Group | PATCH | `/api/v2/groups/{{id}}/` | `conn_mod_def::GJ47lRIU_z0::c2Zp1ekNTlWinEnba1V3mw` |
| Remove a Group | DELETE | `/api/v2/groups/{{id}}/` | `conn_mod_def::GJ47lavKLNk::WbSjPhywQyC8Y8ozT1tzpQ` |
| Update a Group | PUT | `/api/v2/groups/{{id}}/` | `conn_mod_def::GJ47l06awvo::7quA1ES5Tdaaj04DpS4Omg` |

### SuiteRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Suite Run's JUnit Report | GET | `/api/v2/suiteruns/{{id}}/report/junit/` | `conn_mod_def::GJ47nEOs_Q8::-6Rf4tANSZ-flMcvKqE6Ag` |
| Get a Suite Run’s Status | GET | `/api/v2/suiteruns/{{id}}/status/` | `conn_mod_def::GJ47nTFPNT0::u4nT2Z-JQvuuAEm2PvGhhw` |
| List Suite Runs | GET | `/api/v2/suiteruns/` | `conn_mod_def::GJ47nuFe7Tw::2e68wtFcS_WqsuBMV8P6Qg` |
| Retrieve a Suite Run Result | GET | `/api/v2/suiteruns/{{id}}/` | `conn_mod_def::GJ47nlvW5uE::VO62nWE8Q-eyl_Iy_Dj2Pw` |
| Execute a Suite (Create a Suite Run) | POST | `/suiteruns/` | `conn_mod_def::GJ47nL-7wf0::G3LrDb2RTvCUMV6BS1V2PQ` |
| Stop a Suite Run | POST | `/api/v2/suiteruns/{{id}}/stop/` | `conn_mod_def::GJ47n1uDLIY::aLSl6RVwTwa2puqSY4JcbA` |

### Suites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Suites | GET | `/api/v2/suites/` | `conn_mod_def::GJ47od7W7Ao::HwfVYeCiQdipuWf8nZM1Yw` |
| Retrieve a Suite by ID | GET | `/api/v2/suites/{{id}}/` | `conn_mod_def::GJ47oVjkLoI::3I2gy48CRDek3zCdCrmVGg` |
| Create a Suite | POST | `/api/v2/suites/` | `conn_mod_def::GJ47n9Dk7oY::i1Xh8bscTp2WsPliPyHE3g` |
| Partially Update a Suite | PATCH | `/api/v2/suites/{{id}}/` | `conn_mod_def::GJ47oFds8Tw::Bd5DFLfsS2GPxixKwVmrIg` |
| Remove a Suite | DELETE | `/api/v2/suites/{{id}}/` | `conn_mod_def::GJ47oOdaUtI::vhYEk3Y1SD6ngOLAcquJmA` |
| Update a Suite by ID | PUT | `/api/v2/suites/{{id}}/` | `conn_mod_def::GJ47olMxfgU::1l4m9YlDSs-LSBoOV18vcg` |

### Steps

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Step by ID | GET | `/api/v2/steps/{{id}}/` | `conn_mod_def::GJ47mwbbDN8::zAQXHheHQQCQXLEekRUX4w` |
| Create a Step | POST | `/api/v2/steps/` | `conn_mod_def::GJ47mZZIR7I::L_zljhs6ScKHe956bIw-Zg` |
| Partially Update a Step | PATCH | `/api/v2/steps/{{id}}/` | `conn_mod_def::GJ47mhUAy4I::ZCC5ErgoRGKekuE-kKoFuw` |
| Remove a Step | DELETE | `/api/v2/steps/{{id}}/` | `conn_mod_def::GJ47mpB_5Q4::OByDuVJpTaeBlSjXRWKOxQ` |
| Update a Step | PUT | `/api/v2/steps/{{id}}/` | `conn_mod_def::GJ47m8wewkY::zr-g64A2RGOpNPZdENEkNg` |

### Testruns

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Test Run’s JUnit XML Report | GET | `/api/v2/testruns/{{id}}/report/junit/` | `conn_mod_def::GJ47osnJTJo::kCiBv3CZTumj5qYF7fvlaQ` |
| List Historical Test Runs | GET | `/api/v2/testruns/` | `conn_mod_def::GJ47pgmqRSk::cv2WVE5vRgidCs6OfU_aQw` |
| Execute a Test Run | POST | `/api/v2/testruns/` | `conn_mod_def::GJ47o_WlinI::RfAU0jWPT22FYj77dHmMwQ` |

### TestRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Test Run's Logs | GET | `/api/v2/testruns/{{id}}/logs/` | `conn_mod_def::GJ47o0Pt6r0::8wgPQ1T5QhSIAewcJATJ_Q` |
| Get a Test Run’s Status | GET | `/api/v2/testruns/{{id}}/status/` | `conn_mod_def::GJ47pHiAO9g::YttS0E8RQKGuLFWNQQa52Q` |
| Stop a Test Run | POST | `/api/v2/testruns/{{id}}/stop/` | `conn_mod_def::GJ47po2hiD8::S5bxq3yMS2SgGSHHFQLHPQ` |

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Profiles | GET | `/api/v2/profiles/` | `conn_mod_def::GJ47mJrO2yI::_cxx9QxzR0-Wulais3_Vzw` |
| Retrieve a Profile by ID | GET | `/api/v2/profiles/{{id}}/` | `conn_mod_def::GJ47l_X-KyA::SPIpvcq4Q_--cVW6JlnU5Q` |

### Components

| Action | Method | Path | Action id |
|---|---|---|---|
| List Components | GET | `/api/v2/components/` | `conn_mod_def::GJ47k51BKl8::VeOy0dhZTP6jD8TLTqNe8A` |

### ConfigIps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bugbug Infrastructure IP Addresses | GET | `/api/v2/config/ips/` | `conn_mod_def::GJ47lCQAtFw::DO7vZbZySn6qqbfqWdu-sw` |

### StepRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Step Run’s Details | GET | `/api/v2/stepruns/{{id}}/` | `conn_mod_def::GJ47mRMFgLg::a_a88lBTTZGrVUc-XpCKag` |

### SuiteRunStepScreenshots

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Suite Run’s Step Screenshots | GET | `/api/v2/suiteruns/{{id}}/screenshots/` | `conn_mod_def::GJ47ndzG2HY::-G_Fr58SQ-WHzuW26rWryQ` |

### TestRunStepScreenshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test Run’s Step Screenshots | GET | `/api/v2/testruns/{{id}}/screenshots/` | `conn_mod_def::GJ47pPVT1v8::6eLnB_S8R0qrMbPanzx22g` |

### TestRunResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Test Run Result | GET | `/api/v2/testruns/{{id}}/` | `conn_mod_def::GJ47pXmhBo8::Hp4o4VPCRtOtlseHQ7EB1g` |

## When a call fails

The error comes from BugBug, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bug-bug

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
