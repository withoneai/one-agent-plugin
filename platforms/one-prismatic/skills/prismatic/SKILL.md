---
name: prismatic
description: Prismatic is an embedded integration platform that enables software companies to build, deploy, and manage customer-facing integrations and workflow automation, allowing product and engineering teams to connect their applications with third-party systems through low-code tools, APIs, and reusable components. Read and write Prismatic data through One: integrations, users, instances, workflows, alertmonitor, customers and more, 229 actions with real parameter documentation. Use whenever the user asks to look something up in Prismatic, create or update a record there, or build code against the Prismatic API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: prismatic
  generated-from: one-knowledge-base
---

# Prismatic through One

Prismatic is an embedded integration platform that enables software companies to build, deploy, and manage customer-facing integrations and workflow automation, allowing product and engineering teams to connect their applications with third-party systems through low-code tools, APIs, and reusable components.

One exposes Prismatic through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `prismatic` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Prismatic is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Prismatic account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Update Instances to Latest Integration Version | POST | `/api` | `conn_mod_def::GLkz5e3Xp8I::ImlmOh6jSI2MJ3ONPNU-fA` |
| Create Integration | POST | `/api` | `conn_mod_def::GLkz5_tjajM::ZBf2DWjuTey77otYi46p4w` |
| Delete Integration | POST | `/api` | `conn_mod_def::GLkz7HKja90::XFW11_NeQaCsjJuPmgKlYw` |
| Fork Integration | POST | `/api` | `conn_mod_def::GLkz8SV1AXg::2Pl5GGieSqSQP1IbCL4hkg` |
| Get Integration | POST | `/api` | `conn_mod_def::GLk0AHdDMvw::eYhpeNIVTBSzwmTiyWMmWw` |
| Import Integration | POST | `/api` | `conn_mod_def::GLkz8QMFTOc::7OePNqixQP6poAoEsXNcdw` |
| List Integrations | POST | `/api` | `conn_mod_def::GLk0AUrrmLs::FZJTFEWBRJCCd5fYd20PQA` |
| Publish Integration | POST | `/api` | `conn_mod_def::GLkz8Z5JRD0::2WUal32sRRKPsPDBzVKoUw` |
| Update Integration | POST | `/api` | `conn_mod_def::GLkz9hYLm1o::3KJQQqEJTPet71axV_KnGw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Change Password | POST | `/api` | `conn_mod_def::GLkz5dkan9k::MHlt213xSC2qJ5TQOy6p2w` |
| Check Whether a User Exists | POST | `/api` | `conn_mod_def::GLk0BWjusRE::Kk-ZYZsfTCCG3ZUnEZfAtA` |
| Delete User | POST | `/api` | `conn_mod_def::GLkz7rgZuEo::oaNzlWEiRzaOAeBzfrPTTQ` |
| Get User | POST | `/api` | `conn_mod_def::GLk0BN6iAiQ::RNK657yQSuSBdQpZsTKIcg` |
| List Users | POST | `/api` | `conn_mod_def::GLk0BYrdM24::PLu78jhrQ7m46wxKdHDNHA` |
| Update User | POST | `/api` | `conn_mod_def::GLkz92eV_E8::KrZL5KXqTnu96rA16efoTA` |

### Instances

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Instance | POST | `/api` | `conn_mod_def::GLkz550JhvU::FjPKfiTQToSHnYlwyJ0Mbg` |
| Delete Instance | POST | `/api` | `conn_mod_def::GLkz7I3n9yo::i_cnpEAVRU69WbLDMSs-qw` |
| Deploy Instance | POST | `/api` | `conn_mod_def::GLkz79EMa-s::zVLhHihQT-O1r6tlKydLxQ` |
| Query Instances | POST | `/api` | `conn_mod_def::GLk0AHonCbY::rPf3PljNTaaRDmZ4Dg2L-g` |
| Update Instance | POST | `/api` | `conn_mod_def::GLkz9WmwQXw::6QwCliAFSXy07i_CP5Vr6w` |
| Update Instances Using Customer Config Variable | POST | `/api` | `conn_mod_def::GLkz9hgObyI::N5Wts7BaR82IFjnhUg6KhA` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Workflow | POST | `/api` | `conn_mod_def::GLkz75ASvaw::K6A0aZNlRy-5U0NoMAtzVQ` |
| Disable Workflow | POST | `/api` | `conn_mod_def::GLkz77BGNAg::ObHFiIxfSmqVHB75B3DRBQ` |
| Enable Workflow | POST | `/api` | `conn_mod_def::GLkz8KCCavM::Y6337fu3QRKD36HYsf2esw` |
| Import Workflow | POST | `/api` | `conn_mod_def::GLkz8nfs3CE::PYveAu_YSJ2sRuB7i5d_-A` |
| List Workflows | POST | `/api` | `conn_mod_def::GLk0ItdBw4Q::frZHhCdwQVuC0sqNpD9oQA` |
| Publish Workflow | POST | `/api` | `conn_mod_def::GLkz8uIw1xo::xf4K7lHHTra5MLU8519uQQ` |

### AlertMonitor

| Action | Method | Path | Action id |
|---|---|---|---|
| Clear Alert Monitor | POST | `/api` | `conn_mod_def::GLkz5eop6og::ZZtu8ps2TES6OKx5qGL5EQ` |
| Create Alert Monitor | POST | `/api` | `conn_mod_def::GLkz5lhzPVE::RyU1bZarQ9q_pUjwvKfQWA` |
| Delete Alert Monitor | POST | `/api` | `conn_mod_def::GLkz6mSs3vw::AgJferulQqWR_prjocUyPw` |
| Get Alert Monitor | POST | `/api` | `conn_mod_def::GLkz-PWvFtg::Dn_w-F3KQeyXVE1BDGW_9g` |
| Update Alert Monitor | POST | `/api` | `conn_mod_def::GLkz9EylyPY::bqIrzVKDR725K269AokVzQ` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Customer | POST | `/api` | `conn_mod_def::GLkz5vmXkl0::MWSHyL6-SnSdZolXeBxoIw` |
| Delete Customer | POST | `/api` | `conn_mod_def::GLkz7Agtmn8::YM55b1JjTPW0dvzwmym04g` |
| Get Customer | POST | `/api` | `conn_mod_def::GLkz-xzdK1Y::LojOSyJvTvOdhCGuiAZyLw` |
| List Customers | POST | `/api` | `conn_mod_def::GLkz-5iCEHA::NPI3JskXQAa1cJDXhI3OYg` |
| Update Customer | POST | `/api` | `conn_mod_def::GLkz9P_NaLE::vri3ZQnmSE-h7mOoVJLTcQ` |

### WebhookEndpoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Webhook Endpoint | POST | `/api` | `conn_mod_def::GLkz6k-YCXk::fzeJd-FmQoKfsUAaFV4QLw` |
| Delete Webhook Endpoint | POST | `/api` | `conn_mod_def::GLkz7bTtAAE::-IUNZPQBQyyp6RGRu9gGZw` |
| Query Webhook Endpoint | POST | `/api` | `conn_mod_def::GLk0BYVTU1k::8TMuma1PT2GrWtlmZ0cOMg` |
| Test Webhook Endpoint | POST | `/api` | `conn_mod_def::GLkz9EPgaTA::8MTGudthQEmlvbS-JQNAlA` |
| Update Webhook Endpoint | POST | `/api` | `conn_mod_def::GLkz94nNnyw::tuxlstfDRO2kb6xmvSyq_g` |

### Components

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Component | POST | `/api` | `conn_mod_def::GLkz69zu790::RZNSaJNiRreKo6cv6CA3ig` |
| Get Component | POST | `/api` | `conn_mod_def::GLkz-hcilCg::JtuUWlsnReG8ohvwINuIsA` |
| List Components | POST | `/api` | `conn_mod_def::GLkz-pcgn9s::9zJwD58uSbKBjSQURfSxOA` |
| Publish Component | POST | `/api` | `conn_mod_def::GLkz8Zhvybc::KXAOofZNRKe7L1eWCFnNxw` |
| Update Component | POST | `/api` | `conn_mod_def::GLkz9HY9SAA::paA_uHU8SOykkLJuFufCRA` |

### AlertGroup

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Alert Group | POST | `/api` | `conn_mod_def::GLkz5mTQUvY::vFsHTGhbRG-Ip6MTtANE8g` |
| Delete Alert Group | POST | `/api` | `conn_mod_def::GLkz6iw2Fsk::vEj4rOJNTvaBTf2W1Qx0bg` |
| Query Alert Group | POST | `/api` | `conn_mod_def::GLkz-TBHhYI::IvdxG4fxTv2Qy_KVskmvow` |
| Update Alert Group | POST | `/api` | `conn_mod_def::GLkz9Ey-SqQ::ZAoCHFbJQpWHl2pdMZ2hgg` |

### AlertWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Alert Webhook | POST | `/api` | `conn_mod_def::GLkz5o9ycvA::MTba7zmBS5afsFUJCz19aA` |
| Delete Alert Webhook | POST | `/api` | `conn_mod_def::GLkz7BQVpCI::itvwTGeNTleJ4MJM1kI9YQ` |
| Get an Alert Webhook | POST | `/api` | `conn_mod_def::GLkz-Z3YJzw::ccjCQsjKS1uzEwDv5jfHiA` |
| Update Alert Webhook | POST | `/api` | `conn_mod_def::GLkz9FONp-I::Y1TIMmZ6QxWSpypVHXQVYQ` |

### CustomerConfigVariable

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Customer Config Variable | POST | `/api` | `conn_mod_def::GLkz5viH3JY::BukvpUyTQYmVCfhIOinB0A` |
| Delete Customer Config Variable | POST | `/api` | `conn_mod_def::GLkz7HtehNQ::_fYJvfL2TtKUYu8h_slUBw` |
| Query a Customer Config Variable | POST | `/api` | `conn_mod_def::GLkz-zFgQEI::t0JkOwHgTny4XkcAXAqIjg` |
| Update Customer Config Variable | POST | `/api` | `conn_mod_def::GLkz9O8pHwM::CnglbcmFT8G59H2-N71hUQ` |

### ConnectionTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Connection Template | POST | `/api` | `conn_mod_def::GLkz5vzihrs::NeKILGM4SVeZzNNk6X56vQ` |
| Delete Connection Template | POST | `/api` | `conn_mod_def::GLkz6_HiPMY::J6_HCshGR_ywkQIvsX6v9g` |
| Get Connection Template | POST | `/api` | `conn_mod_def::GLkz-qHU1UM::w0xYARS4QgaYitFcYqhzOA` |
| Update Connection Template | POST | `/api` | `conn_mod_def::GLkz9O92zlw::cj0KIZvCTZCzNxzU2K8EYw` |

### ExternalLogStream

| Action | Method | Path | Action id |
|---|---|---|---|
| Create External Log Stream | POST | `/api` | `conn_mod_def::GLkz520y9Tw::VI6dpS7yQ_WGtos8iCuyCA` |
| Delete External Log Stream | POST | `/api` | `conn_mod_def::GLkz7Jr2LMs::4IpCoH47SfmW2t-5m-t_jw` |
| External Log Stream | POST | `/api` | `conn_mod_def::GLkz_VQz1v0::xDsYsjZiR0WS8QGsu3QToA` |
| Update External Log Stream | POST | `/api` | `conn_mod_def::GLkz9WdNv1w::PicuC-bRToSqsoLOrrS0UQ` |

### TestCase

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Test Case | POST | `/api` | `conn_mod_def::GLkz6IvO0Eo::a6WdkZ8zRK6Xb8kgtIVTig` |
| Delete Test Case | POST | `/api` | `conn_mod_def::GLkz7carSjo::Yps79hOwT92-ypoI7l_YYQ` |
| Get Test Case | POST | `/api` | `conn_mod_def::GLk0BN6LnCE::Qut8wAQ5S4S_P4xP7nZbUA` |
| Update Test Case | POST | `/api` | `conn_mod_def::GLkz9u5o03U::swlZxJYkSR-3hFkfiTdazg` |

### ScopedConfigVariable

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Scoped Config Variable | POST | `/api` | `conn_mod_def::GLkz6b7XUf4::yTY7rNuNRd-mDZgoF0136A` |
| Delete Scoped Config Variable | POST | `/api` | `conn_mod_def::GLkz7zCA09k::FVBESt4_RCe5g06_tl240g` |
| Get a Scoped Config Variable | POST | `/api` | `conn_mod_def::GLk0A_L2Mgc::2hVT0fO7TG6pN2GBADzM2w` |
| Update Scoped Config Variable | POST | `/api` | `conn_mod_def::GLkz9sfotwg::q7wLBVaPSoSWKKPJaZCLng` |

### WorkflowContext

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Workflow Context | POST | `/api` | `conn_mod_def::GLkz6k8k48Q::0qfdCibeSMK9ABZfQeLA3Q` |
| Delete Workflow Context | POST | `/api` | `conn_mod_def::GLkz75NruYw::8HJN0nzNSaOz-bcI1xRPlQ` |
| Update Workflow Context | POST | `/api` | `conn_mod_def::GLkz90_kSYU::zEeANdqlS_CNctDkT53WmQ` |
| Workflow Context Query | POST | `/api` | `conn_mod_def::GLk0BevQV44::_XqPFNvzQKGmpsxIBgteNw` |

### Credentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Credential | POST | `/api` | `conn_mod_def::GLkz7AEwdqk::5Pj_IYaWQ9WlfHeHCL5pHA` |
| Get Credential | POST | `/api` | `conn_mod_def::GLkz-xVJJU8::wd2Ysm4kSiiUTC1Eh7ab_Q` |
| List Credentials | POST | `/api` | `conn_mod_def::GLkz-xLCZgA::CDhELeVJQMild3uAOhb9yQ` |
| Update Credential | POST | `/api` | `conn_mod_def::GLkz9OACtRM::EBeUPirAQp-_1PpaA8BqFQ` |

### InstanceProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Instance Profile | POST | `/api` | `conn_mod_def::GLkz52xfi_w::NAPQNtTHRQKygl9LPQDFJg` |
| Get an Instance Profile | POST | `/api` | `conn_mod_def::GLk0AL9QJM0::1Y_ttlb9QdqqJmHsgYqTbw` |
| Update Instance Profile | POST | `/api` | `conn_mod_def::GLkz9XeuZhA::AgAt1_kNRluMbbxNHSAkkg` |

### IntegrationTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Integration Template | POST | `/api` | `conn_mod_def::GLkz7Qyw5Pw::1iYSoHdOSbqpYNr9AJ4ayw` |
| Import Integration Template | POST | `/api` | `conn_mod_def::GLkz8aJkj-M::ZPXDl9TKQnOqpihdokMVeA` |
| Standard Integration Template | POST | `/api` | `conn_mod_def::GLk0A-Qqi70::oqOA4umhT7qyJ17-juv2pQ` |

### WorkflowTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Workflow Template | POST | `/api` | `conn_mod_def::GLkz75E0Gy0::r9ldZpCJQz2XQLh9I0DgNw` |

2 more WorkflowTemplate actions are available through search.

This lists 90 of 229 actions. For anything not here, call `search_one_platform_actions` with platform `prismatic`. The full catalog is at https://www.withone.ai/knowledge/prismatic.

## When a call fails

The error comes from Prismatic, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/prismatic

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
