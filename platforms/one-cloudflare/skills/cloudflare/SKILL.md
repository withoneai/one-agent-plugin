---
name: cloudflare
description: Cloudflare is a cloud infrastructure and edge platform that provides content delivery, DNS, security, serverless compute, and network services through APIs, allowing developers and businesses to improve website performance, protect applications, and build globally distributed services. Read and write Cloudflare data through One: workersai, cloudforceoneevents, accountsai, ipaccessrules, dnsrecords, custompages and more, 3204 actions with real parameter documentation. Use whenever the user asks to look something up in Cloudflare, create or update a record there, or build code against the Cloudflare API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: cloudflare
  generated-from: one-knowledge-base
---

# Cloudflare through One

Cloudflare is a cloud infrastructure and edge platform that provides content delivery, DNS, security, serverless compute, and network services through APIs, allowing developers and businesses to improve website performance, protect applications, and build globally distributed services.

One exposes Cloudflare through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `cloudflare` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Cloudflare is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Cloudflare account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### WorkersAi

| Action | Method | Path | Action id |
|---|---|---|---|
| Open Websocket Connection Using @cf/deepgram Aura 2 En Ws | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/aura-2-en-ws` | `conn_mod_def::GLv3Qnsc1pw::R_6w-e8WSK6EcNfbtF-yJg` |
| Open Websocket Connection Using @cf/deepgram Aura-2 | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/aura-2` | `conn_mod_def::GLv3QgskPYI::2BrnBdEcRBeh_JzaIrUQEQ` |
| Open Websocket Connection Using @cf/deepgram/aura-1-internal | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/aura-1-internal` | `conn_mod_def::GLv3Qg31K5s::0XhnMxJaRD2M5nuz9MWrUQ` |
| Open Websocket Connection Using @cf/deepgram/aura-2-en | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/aura-2-en` | `conn_mod_def::GLv3QouvD28::AXg7o9LYSM2Tmjk2LocR0g` |
| Open Websocket Connection Using @cf/deepgram/flux | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/flux` | `conn_mod_def::GLv3MmEVTc8::6C3UEfQkTyai48WEXIBdVA` |
| Open Websocket Connection Using @cf/deepgram/nova-3 | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/nova-3` | `conn_mod_def::GLv3Mu_F90o::b0CfMqolSl2fR6DwzJKclQ` |
| Open Websocket Connection Using @cf/deepgram/nova-3-internal | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/nova-3-internal` | `conn_mod_def::GLv3MunMGPs::l2lhzjEBSnCfaWAl-BA2cw` |
| Open WebSocket Connection Using @cf/deepgram/nova-3-ws | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/nova-3-ws` | `conn_mod_def::GLv3Mu_pHTU::2TOIsHQqScShaP8MNUXTuw` |
| Open WebSocket Connection Using @cf/nvidia/nemotron-speech-streaming-en-0.6b | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/nvidia/nemotron-speech-streaming-en-0.6b` | `conn_mod_def::GLv3Mv2AM7g::jI3S2tS1RAKK6O6Z-FGMnw` |
| Open Websocket Connection Using @cf/sven/test-pipe-http | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/sven/test-pipe-http` | `conn_mod_def::GLv3QKuCvgg::4ZJAQNleSa6aAbC9CbXjRg` |
| Open Websocket Connection Using @cf/test/hello-world-cog | GET | `/client/v4/accounts/{{accountId}}/ai/run/@cf/test/hello-world-cog` | `conn_mod_def::GLv3M3jtPy4::fxb7bK0oQb26yAbopFI08w` |
| Run @cf/ai4bharat/nonomni-indictrans2-en-indic-1b Using AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/ai4bharat/nonomni-indictrans2-en-indic-1b` | `conn_mod_def::GLv3QppMhHI::4TPQY1R7Qo6qMLg2_qNn7g` |

6 more WorkersAi actions are available through search.

### CloudforceOneEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Aggregate Events Using Cloudforce One | GET | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/aggregate` | `conn_mod_def::GLv2JdgD358::okrgrYCTQvC7klbgQX5otg` |
| Attackers Using Accounts Cloudforce One Events | GET | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/attackers` | `conn_mod_def::GLv1v6Q4rYs::bhLJbzidR2mrGCB7BOg5Ag` |
| Query Graph Neighborhood from Cloudforce One Events | GET | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/graph` | `conn_mod_def::GLv2Kgt0VJU::DE6GnYudTqSrwSXlI5-Rsw` |
| Read an Event Using Cloudforce One | GET | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/{{eventId}}` | `conn_mod_def::GLv2KMoZFAw::ARfYX5AgTziEnqWI94cVwg` |
| Read Raw Event Data for a Cloudforce One Event | GET | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/{{eventId}}/raw/{{rawId}}` | `conn_mod_def::GLv2KK41bqQ::oaJDZkP6QmG-OPcPXuuJ7Q` |
| Bulk Update Events Using Cloudforce One Events Update | PATCH | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/update/bulk` | `conn_mod_def::GLv2Jcc_2g0::mxzngnErT62h56e1zsMJTw` |
| Create Bulk Events Using Cloudforce One Events | POST | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/create/bulk` | `conn_mod_def::GLv2J2YjcV0::553uVvpGRhWcvx0sOI92Og` |
| Create Bulk Relationships Using Cloudforce One Events | POST | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/create/bulk/relationships` | `conn_mod_def::GLv2Jndndkg::8kt3ydt1Tgi5uuK7dUwN8A` |
| Create Event Using Cloudforce One Events | POST | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/create` | `conn_mod_def::GLv2JvW9WGA::BVbssiPZRi-zXal0uzCN-g` |
| Delete Events Using Cloudforce One | DELETE | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/{{datasetId}}/delete` | `conn_mod_def::GLv2J2j6EgA::U4LIv72TTvCnKCo5707aNg` |
| Move Events to a Dataset Using Cloudforce One | POST | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/dataset/{{datasetId}}/move` | `conn_mod_def::GLv2KBMknx8::sHu0_HIRQtKJbmyAo08IXQ` |
| Remove an Event Tag Using Cloudforce One Events | DELETE | `/client/v4/accounts/{{accountId}}/cloudforce-one/events/event_tag/{{eventId}}` | `conn_mod_def::GLv2KWDUjwg::LQnoDxOjTnSpPs8RxC48Iw` |

2 more CloudforceOneEvents actions are available through search.

### AccountsAi

| Action | Method | Path | Action id |
|---|---|---|---|
| Run @cf/black-forest-labs/flux-2-klein-4b Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/black-forest-labs/flux-2-klein-4b` | `conn_mod_def::GLv3P6CH1Iw::TGf61jJTTCeF1q5pXcwMsw` |
| Run @cf/deepgram/aura-1 Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/aura-1` | `conn_mod_def::GLv3QPayufE::tvw54gXSSmyxgAlXPIIYmA` |
| Run @cf/deepgram/aura-2-es Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/aura-2-es` | `conn_mod_def::GLv3QZgAu1g::oqDLIYAYQ8iBDkgQANTVHA` |
| Run @cf/deepgram/flux Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/deepgram/flux` | `conn_mod_def::GLv3Mdf4jJg::Al6Tg6sMRLev19vaiY_XKw` |
| Run @cf/leonardo/phoenix-1.0 Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/leonardo/phoenix-1.0` | `conn_mod_def::GLv3QBMqnXg::-gu9DrL-RA2eU6n58EknPw` |
| Run @cf/meta/llama-3.3-70b-instruct-fp8-fast Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast` | `conn_mod_def::GLv3Oi5EOb8::RM4l_UShSl6lh-TVUWXVWw` |
| Run @cf/meta/llama-guard-3-8b Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/meta/llama-guard-3-8b` | `conn_mod_def::GLv3OiXNv-w::4kPQ8VLnR9WgitGJxvuHbA` |
| Run @cf/mistralai/mistral-small-3.1-24b-instruct Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/mistralai/mistral-small-3.1-24b-instruct` | `conn_mod_def::GLv3Or2524E::52JQdeqnSUiSKblNvBJ8DA` |
| Run @cf/myshell-ai/melotts Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/myshell-ai/melotts` | `conn_mod_def::GLv3QhqwKfI::7yZX038_QJCQzLFqdE2U-g` |
| Run @cf/nvidia/nemotron-3-120b-a12b Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/nvidia/nemotron-3-120b-a12b` | `conn_mod_def::GLv3O1FRV5s::lxuLSOfnSUmQz3Ggynw_mg` |
| Run @cf/nvidia/nemotron-speech-streaming-en-0.6b Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/nvidia/nemotron-speech-streaming-en-0.6b` | `conn_mod_def::GLv3MmoPa8k::eXK4b0y8Q9mCGbRqLd5-Aw` |
| Run @cf/openai/gpt-oss-20b Using Accounts AI | POST | `/client/v4/accounts/{{accountId}}/ai/run/@cf/openai/gpt-oss-20b` | `conn_mod_def::GLv3O88nyCk::R11my1tkRumIBHZN0oIOFw` |

2 more AccountsAi actions are available through search.

### IpAccessRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an IP Access Rule for a User | GET | `/client/v4/user/firewall/access_rules/rules/{{ruleId}}` | `conn_mod_def::GLv2OBnOoMQ::bE1x4pPITCqDH9JqMBdPAg` |
| Get an IP Access Rule for an Account | GET | `/client/v4/accounts/{{accountId}}/firewall/access_rules/rules/{{ruleId}}` | `conn_mod_def::GLv2Pf7Omsg::Xp2z7VBuT9SI7kygm486gA` |
| List IP Access Rules for a User | GET | `/client/v4/user/firewall/access_rules/rules` | `conn_mod_def::GLv2OD2_Qmg::BhSDDdIfQqKihCGneLTxQw` |
| List IP Access Rules for a Zone | GET | `/client/v4/zones/{{zoneId}}/firewall/access_rules/rules` | `conn_mod_def::GLv2OMLvCLc::aboMLZjXQga6_FZ3jmJl4w` |
| List IP Access Rules for an Account | GET | `/client/v4/accounts/{{accountId}}/firewall/access_rules/rules` | `conn_mod_def::GLv2OTNd7WU::ggx6LCwFSk2qneWmCj39JQ` |
| Create an IP Access Rule for a User | POST | `/client/v4/user/firewall/access_rules/rules` | `conn_mod_def::GLv2OBQOQQQ::hcvq7um8Sd6dRMhgGY8Pmw` |
| Create an IP Access Rule for a Zone | POST | `/client/v4/zones/{{zoneId}}/firewall/access_rules/rules` | `conn_mod_def::GLv2OLKOdKs::21jKSE1gTkC2O7C9qezJTg` |
| Create an IP Access Rule for an Account | POST | `/client/v4/accounts/{{accountId}}/firewall/access_rules/rules` | `conn_mod_def::GLv2OSs6fQk::y2AwTsfOQpOFv5mYdso36A` |
| Delete an IP Access Rule for a Zone | DELETE | `/client/v4/zones/{{zoneId}}/firewall/access_rules/rules/{{ruleId}}` | `conn_mod_def::GLv2OKMNZDU::4Rd2vOwWSwq0Qktk8Fbpng` |
| Delete an IP Access Rule for an Account | DELETE | `/client/v4/accounts/{{accountId}}/firewall/access_rules/rules/{{ruleId}}` | `conn_mod_def::GLv2OUgfibc::2X3VHaPxRLqBYrGNpS-HiA` |
| Update an IP Access Rule for a User | PATCH | `/client/v4/user/firewall/access_rules/rules/{{ruleId}}` | `conn_mod_def::GLv2OKUGsAw::Cdvvdqr-SuqkliZNMQdvcA` |
| Update an IP Access Rule for a Zone | PATCH | `/client/v4/zones/{{zoneId}}/firewall/access_rules/rules/{{ruleId}}` | `conn_mod_def::GLv2OKgeqFQ::m5K1WHuvSoy429RoF2909A` |

1 more IpAccessRules actions are available through search.

### DnsRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| DNS Record Details for a Zone | GET | `/client/v4/zones/{{zoneId}}/dns_records/{{dnsRecordId}}` | `conn_mod_def::GLv2CxnyUJA::EVBexzKwSOKVrbeZ_Zy-_w` |
| Export DNS Records for a Zone | GET | `/client/v4/zones/{{zoneId}}/dns_records/export` | `conn_mod_def::GLv2CxTgE9o::eKIqJDu0QUyECxYrJoM3xQ` |
| List DNS Records for a Zone | GET | `/client/v4/zones/{{zoneId}}/dns_records` | `conn_mod_def::GLv2C8r6EWU::aVXUoivtSp6Kec5jPs-4MA` |
| Review Scanned DNS Records for a Zone | GET | `/client/v4/zones/{{zoneId}}/dns_records/scan/review` | `conn_mod_def::GLv2C4w4hvg::z5BKnjVuT0qATFFNcYdaqQ` |
| Batch DNS Records for a Zone | POST | `/client/v4/zones/{{zoneId}}/dns_records/batch` | `conn_mod_def::GLv2CpnSI78::zzTFj2AXQc-Lo3UyFgp60g` |
| Create DNS Record for a Zone | POST | `/client/v4/zones/{{zoneId}}/dns_records` | `conn_mod_def::GLv2Cyi6wRA::X5_yIcAwRwuZ-3tH8mARvQ` |
| Delete DNS Record for a Zone | DELETE | `/client/v4/zones/{{zoneId}}/dns_records/{{dnsRecordId}}` | `conn_mod_def::GLv2Cwy4zPA::G3MWVUPaR7W1VJnO_Jwp-A` |
| Import DNS Records for a Zone | POST | `/client/v4/zones/{{zoneId}}/dns_records/import` | `conn_mod_def::GLv2C5D-9jA::rBGzBrDuTSq6UUgTnqzbDw` |
| Overwrite DNS Record for a Zone | PUT | `/client/v4/zones/{{zoneId}}/dns_records/{{dnsRecordId}}` | `conn_mod_def::GLv2C9Cj73U::094-OJnpSQ-jQjJjTvWg7w` |
| Scan DNS Records for a Zone | POST | `/client/v4/zones/{{zoneId}}/dns_records/scan` | `conn_mod_def::GLv2DECq3Xo::U-XqzG5mQp6WEvS73QILMg` |
| Trigger DNS Record Scan for a Zone | POST | `/client/v4/zones/{{zoneId}}/dns_records/scan/trigger` | `conn_mod_def::GLv2DD27SDc::1TratBW1SDyB3N7gKDQ8_w` |

### CustomPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Page for a Zone | GET | `/client/v4/zones/{{zoneIdentifier}}/custom_pages/{{identifier}}` | `conn_mod_def::GLv15_XoUd4::ifdXosoKR0q0PsgbSwPp_w` |
| Get a Custom Page for an Account | GET | `/client/v4/accounts/{{accountId}}/access/custom_pages/{{customPageId}}` | `conn_mod_def::GLv1jVV_TBo::e9BkgaYSTsqpGJRej9kyDQ` |
| Get a Custom Page for an Account | GET | `/client/v4/accounts/{{accountIdentifier}}/custom_pages/{{identifier}}` | `conn_mod_def::GLv16GPa1zo::iStBuOPASxumd74qe2lh2w` |
| List Custom Pages for a Zone | GET | `/client/v4/zones/{{zoneIdentifier}}/custom_pages` | `conn_mod_def::GLv15_AYZNg::nWi9bs0rSB-zT3Hntbh0Ng` |
| List Custom Pages for an Account | GET | `/client/v4/accounts/{{accountId}}/access/custom_pages` | `conn_mod_def::GLv1jcCtK7s::JUNrITPzSS2obAdJfA5vSg` |
| List Custom Pages for an Account | GET | `/client/v4/accounts/{{accountIdentifier}}/custom_pages` | `conn_mod_def::GLv16FPn2IY::EUzeetLwRWyiv3Jgy2YOvw` |
| Create a Custom Page for an Account | POST | `/client/v4/accounts/{{accountId}}/access/custom_pages` | `conn_mod_def::GLv1jVLejKo::FynbW1QNT9y4Nsba_U6z1A` |
| Delete a Custom Page for an Account | DELETE | `/client/v4/accounts/{{accountId}}/access/custom_pages/{{customPageId}}` | `conn_mod_def::GLv1jT6Ns64::ZR1NGiy2QOWRUFa8UdhQfg` |
| Update a Custom Page for an Account | PUT | `/client/v4/accounts/{{accountId}}/access/custom_pages/{{customPageId}}` | `conn_mod_def::GLv1jcmi9Ks::Ece4i_QRQUmIe--2zrkK6w` |
| Update a Custom Page for an Account | PUT | `/client/v4/accounts/{{accountIdentifier}}/custom_pages/{{identifier}}` | `conn_mod_def::GLv16MssAqM::IVFbrWmyTgmOqQzwBjDATg` |

### AccessGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Access Group for a Zone | GET | `/client/v4/zones/{{zoneId}}/access/groups/{{groupId}}` | `conn_mod_def::GLv3YdnHJKw::0wa9aCShQgKJGNhc0wigWA` |
| Get an Access Group for an Account | GET | `/client/v4/accounts/{{accountId}}/access/groups/{{groupId}}` | `conn_mod_def::GLv1jcV_yB8::Cpgj50ojSdaY7OLicqfN6w` |
| List Access Groups for a Zone | GET | `/client/v4/zones/{{zoneId}}/access/groups` | `conn_mod_def::GLv3YZPiRqo::t9RyUGrcTJadTm-zGsKytw` |
| List Access Groups for an Account | GET | `/client/v4/accounts/{{accountId}}/access/groups` | `conn_mod_def::GLv1jlzqFko::j5Y2gRjRQNmrWyOsia88sQ` |
| Create an Access Group for a Zone | POST | `/client/v4/zones/{{zoneId}}/access/groups` | `conn_mod_def::GLv3YSET178::WJnp8yWTTdyKQODIXxqoKQ` |
| Create an Access Group for an Account | POST | `/client/v4/accounts/{{accountId}}/access/groups` | `conn_mod_def::GLv1jfFlndg::BCgMc_TgReC47KXko9oWIA` |
| Delete an Access Group for a Zone | DELETE | `/client/v4/zones/{{zoneId}}/access/groups/{{groupId}}` | `conn_mod_def::GLv3YZ3NGqo::4KWdojyvQH2zd5vTkJzpig` |
| Delete an Access Group for an Account | DELETE | `/client/v4/accounts/{{accountId}}/access/groups/{{groupId}}` | `conn_mod_def::GLv1jd44LDE::Oewp5gJeT_Wkqvt4XA8S7A` |
| Update an Access Group for a Zone | PUT | `/client/v4/zones/{{zoneId}}/access/groups/{{groupId}}` | `conn_mod_def::GLv3YZ4iyHc::_cpCmqk-RhyMogKmixDFlw` |
| Update an Access Group for an Account | PUT | `/client/v4/accounts/{{accountId}}/access/groups/{{groupId}}` | `conn_mod_def::GLv1j3bZhRg::EDGHVfuuRPiI_AiPvnmC2g` |

### LogpushJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Logpush Job Details for an Account | GET | `/client/v4/accounts/{{accountId}}/logpush/jobs/{{jobId}}` | `conn_mod_def::GLv2T_XkglI::zNXVOsugQzW-w9Z33OxbyQ` |
| List Jobs Using Accounts Logpush Datasets | GET | `/client/v4/accounts/{{accountId}}/logpush/datasets/{{datasetId}}/jobs` | `conn_mod_def::GLv2UGYHnp8::3tTIs60MQb6kqeHxAuZxGA` |
| List Logpush Jobs for a Dataset in a Zone | GET | `/client/v4/zones/{{zoneId}}/logpush/datasets/{{datasetId}}/jobs` | `conn_mod_def::GLv2Ttqsxjw::QYGEGxLqRRisAIFKr1QkNA` |
| List Logpush Jobs for a Zone | GET | `/client/v4/zones/{{zoneId}}/logpush/jobs` | `conn_mod_def::GLv2Ts7UmhY::2I82ZbrSSUye5ptpigkl_w` |
| List Logpush Jobs for an Account | GET | `/client/v4/accounts/{{accountId}}/logpush/jobs` | `conn_mod_def::GLv2T_1GOwE::9Pv9O_TDSQqYlSfDWFk4Uw` |
| Create Logpush Jobs for a Zone | POST | `/client/v4/zones/{{zoneId}}/logpush/jobs` | `conn_mod_def::GLv2TlECaOQ::F5HN7VvrQUiWzPX4vJdVPQ` |
| Create Logpush Jobs for an Account | POST | `/client/v4/accounts/{{accountId}}/logpush/jobs` | `conn_mod_def::GLv2T3pen1A::vNihSzfqRmytNOgqYVpyxQ` |
| Delete a Logpush Job for an Account | DELETE | `/client/v4/accounts/{{accountId}}/logpush/jobs/{{jobId}}` | `conn_mod_def::GLv2T-glQIw::wgzNKrQsRbWHM04DoXATvQ` |
| Update Logpush Job for a Zone | PUT | `/client/v4/zones/{{zoneId}}/logpush/jobs/{{jobId}}` | `conn_mod_def::GLv2TtrMGFY::OhkOWIyDRkiheR1L5Agz5g` |
| Update Logpush Job for an Account | PUT | `/client/v4/accounts/{{accountId}}/logpush/jobs/{{jobId}}` | `conn_mod_def::GLv2UGdFtV8::oYdlHRyCSOiIJeYFzOBAlw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| All Webhooks Using Accounts Realtime Kit | GET | `/client/v4/accounts/{{accountId}}/realtime/kit/{{appId}}/webhooks/all` | `conn_mod_def::GLv3KP4RriA::cut7KqRSQsuQZ9rY6UXRCg` |

9 more Webhooks actions are available through search.

This lists 90 of 3204 actions. For anything not here, call `search_one_platform_actions` with platform `cloudflare`. The full catalog is at https://www.withone.ai/knowledge/cloudflare.

## When a call fails

The error comes from Cloudflare, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/cloudflare

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
