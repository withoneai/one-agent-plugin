---
name: tomba
description: Tomba is a lead generation and email discovery platform that provides APIs for finding professional email addresses, enriching company and contact data, and verifying deliverability, allowing sales and recruiting teams to build prospect lists and improve outreach accuracy. Read and write Tomba data through One: bulkfinders, bulksearches, bulkverifications, leads, leadslists, bulkip and more, 48 actions with real parameter documentation. Use whenever the user asks to look something up in Tomba, create or update a record there, or build code against the Tomba API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: tomba
  generated-from: one-knowledge-base
---

# Tomba through One

Tomba is a lead generation and email discovery platform that provides APIs for finding professional email addresses, enriching company and contact data, and verifying deliverability, allowing sales and recruiting teams to build prospect lists and improve outreach accuracy.

One exposes Tomba through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `tomba` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Tomba is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Tomba account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### BulkFinders

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Bulk Finders File | GET | `/v1/bulk-finders/{{id}}/download` | `conn_mod_def::GLTgrw-KVHg::j6FTkhxGS-iL2y-JLtQ9eg` |
| Get a Bulk Finder by ID | GET | `/v1/bulk-finders/{{id}}` | `conn_mod_def::GLTgrx7tdnA::9mMgzptIQWeD7U-ok0hpwA` |
| List Bulk Finders | GET | `/bulk-finders` | `conn_mod_def::GLTgrytNtMA::nmH1ezDjTAa85O-aJgtG3Q` |
| Create Bulk Finders | POST | `/bulk-finders` | `conn_mod_def::GLTgrx21FbA::N708fl2DRAKJwAXq58FSMA` |
| Delete a Bulk Finder | DELETE | `/v1/bulk-finders/{{id}}` | `conn_mod_def::GLTgrz5f_Ag::qjaGE-emQJqRt94hvBmigA` |

### BulkSearches

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Bulk Search File | GET | `/v1/bulk-searches/{{id}}/download` | `conn_mod_def::GLTgsFRw77A::I_Djt7ejTpOc3nW-SdMa4Q` |
| Get a Bulk Search by ID | GET | `/v1/bulk-searches/{{id}}` | `conn_mod_def::GLTgsEmi2oA::1unmWer0RlCd6i3uroUqKQ` |
| List Bulk Searches | GET | `/bulk-searches` | `conn_mod_def::GLTgsFAAXsA::--NT-f--Qxujpd4u7dSsQQ` |
| Delete a Bulk Search by ID | DELETE | `/v1/bulk-searches/{{id}}` | `conn_mod_def::GLTgsGGy06A::6GGES2IOR5C3hNh22XXWcQ` |
| List Bulk Searches | POST | `/bulk-searches` | `conn_mod_def::GLTgsEmpx_A::DwfZRtroTgW26KxEDvYV7g` |

### BulkVerifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Bulk Verification File | GET | `/v1/bulk-verifications/{{id}}/download` | `conn_mod_def::GLTgsXdToFg::P8XSxFq4SSmxT9dAq8mWLQ` |
| Get a Bulk Verification by ID | GET | `/v1/bulk-verifications/{{id}}` | `conn_mod_def::GLTgsWwYdWA::sKHgqtqaQS6ykzWi-sWyxw` |
| List Bulk Verifications | GET | `/bulk-verifications` | `conn_mod_def::GLTgsOtdcQA::heHpaCWhQ32Movxaj_488g` |
| Delete a Bulk Verification | DELETE | `/v1/bulk-verifications/{{id}}` | `conn_mod_def::GLTgsWw9fdg::TXS51BfXSweveu0zMcqq_g` |
| List Bulk Verifications | POST | `/bulk-verifications` | `conn_mod_def::GLTgsWJMtQA::NG7mRqBrSAWyW3RCJGbgqA` |

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead by ID | GET | `/v1/leads/{{id}}` | `conn_mod_def::GLTgswS-UdA::vdg3VFdGT6K6bfx_XkxXRg` |
| List Leads | GET | `/leads/` | `conn_mod_def::GLTgsvuT9dg::nMdLoOGhSl6F99DktqoQ7Q` |
| Create a Lead | POST | `/leads` | `conn_mod_def::GLTgsvrLYjA::iozjrZHCRlm9q6-S8vvUjw` |
| Delete a Lead | DELETE | `/v1/leads/{{id}}` | `conn_mod_def::GLTgs6Cyxfg::Ff6MejOQTu2OzbyDitfuhg` |
| Update a Lead by ID | PUT | `/v1/leads/{{id}}` | `conn_mod_def::GLTgswZecSg::ns6JDLNYRe-xO8XAF4YVlA` |

### LeadsLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Leads List by ID | GET | `/v1/leads_lists/{{id}}` | `conn_mod_def::GLTgs7kUjIA::Uu9q4bniSm6HH9M1IzmXpA` |
| List Leads Lists | GET | `/leads_lists/` | `conn_mod_def::GLTgs5pJxFA::WWQMPKCkQBeACQ_aPB9rSA` |
| Create a Leads List | POST | `/leads_lists/` | `conn_mod_def::GLTgs5w5NFg::akWBxjYdTZawOvW92rubJg` |
| Delete a Leads List by ID | DELETE | `/v1/leads_lists/{{id}}` | `conn_mod_def::GLTgtC9wfag::Euk93W1XRP-QCvRy5r4VtA` |
| Update a Leads List by ID | PUT | `/v1/leads_lists/{{id}}` | `conn_mod_def::GLTgs5q5Q0g::CFlzFoTyQ4yMlbN5oJHGbA` |

### BulkIp

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Bulk IP File | GET | `/v1/bulk-ip/{{id}}/download` | `conn_mod_def::GLTgr71mKGA::l-FoPbucQVSUhDKBaveVaA` |
| Get a Bulk IP | GET | `/v1/bulk-ip/{{id}}` | `conn_mod_def::GLTgr72KD8g::1ayGMWSVQSCjzi4YLJiJAQ` |
| Create a Bulk IP Request | POST | `/bulk-ip` | `conn_mod_def::GLTgr77PVVA::yoEO4XXSTbSzo-llGyEhVA` |
| Delete Bulk IP | DELETE | `/v1/bulk-ip/{{id}}` | `conn_mod_def::GLTgr8t0ymA::QDASllswSy-gl67edG3O8Q` |

### BulkTechnologies

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Bulk Technologies File | GET | `/v1/bulk-technologies/{{id}}/download` | `conn_mod_def::GLTgsO2IuVg::wcrY9uxuQHiX0bL50jVtTg` |
| Get a Bulk Technologies | GET | `/v1/bulk-technologies/{{id}}` | `conn_mod_def::GLTgsOrWrQA::Te_ZKptjQTGXwLWVovL6fQ` |
| Get Bulk Technologies | GET | `/v1/bulk-technologies` | `conn_mod_def::GLTgsOFUSeA::7xIu3xB_Tbe-NP3xOYph9A` |
| Delete Bulk Technologies | DELETE | `/v1/bulk-technologies/{{id}}` | `conn_mod_def::GLTgsN2xt1A::YGduRrcUQGa6gBjuYfmhIA` |

### Keys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Key by ID | GET | `/v1/keys/{{id}}` | `conn_mod_def::GLTgsnmSa6A::zERNw3FsTOq0NUKiuB35KQ` |
| Delete a Key | DELETE | `/v1/keys/{{id}}` | `conn_mod_def::GLTgszISeeA::EwrDlDwFRQKy-BnRPtA87A` |
| Update a Key | PUT | `/v1/keys/{{id}}` | `conn_mod_def::GLTgsoWc8KA::AOxGq-skTS2FmL_njlhRZQ` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Keys | GET | `/keys` | `conn_mod_def::GLTgsmzbyCA::eMHK7AhFQnSm8pdAV0UOgg` |
| Create a New API Key | POST | `/keys` | `conn_mod_def::GLTgsoOgr1g::B-YOVrrHTPGnTwjU9sk_fg` |

### BulkIps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bulk IPs | GET | `/v1/bulk-ip` | `conn_mod_def::GLTgr76nbng::uI2qZuykQFqGvbwc26Fwxg` |

### DomainSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Domain Search Using v1 | GET | `/v1/domain-search/{{domain}}` | `conn_mod_def::GLTgsXHKPMg::v4ajq05xQQ2HhruAX4t-PQ` |

### Ip

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup IP Address Information | GET | `/ip` | `conn_mod_def::GLTgsesoPqg::t_npS5qOS2iq537IJNYgDQ` |

### IpAddressDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get IP Address Details | GET | `/v1/ip/{{ip}}` | `conn_mod_def::GLTgsfFfBPA::SPFJQ9goQ-m1d0XYNMdIiw` |

### EmailFinder

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Finder Result by ID | GET | `/v1/email-finder/{{id}}` | `conn_mod_def::GLTgsfTuePg::lMVTd9ZsQIWK3tPPJEIDEg` |

### DomainSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Domain Suggestions | GET | `/v1/domains-suggestion` | `conn_mod_def::GLTgsfaMZdA::wxsNQPXVSPCUgzhCPQaoHw` |

### EmailVerifierResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Verifier Result by ID | GET | `/v1/email-verifier/{{id}}` | `conn_mod_def::GLTgsfe6IAA::Q_x3UtoISl6BksjiYivZuQ` |

### IpDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Batch IP Details | GET | `/v1/ip/batch/{{listIp}}` | `conn_mod_def::GLTgsncbMeA::DkWM0lMNRZWHY0Md8Bbzmw` |

### Technologies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Technologies for a Domain | GET | `/v1/technologies/{{domain}}` | `conn_mod_def::GLTgtDmSBvg::zhbCDM4_SEid46l1Uu8aww` |

### Logo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Logo by Domain | GET | `/v1/logo/{{domain}}` | `conn_mod_def::GLTgtLdk34g::hoyutA64QLa96M2wFzE2Mw` |

## When a call fails

The error comes from Tomba, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/tomba

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
