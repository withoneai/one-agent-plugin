---
name: active-campaign
description: ActiveCampaign is a customer experience automation platform that combines email marketing, automation, sales automation, and CRM tools to help businesses engage with customers and drive growth. Read and write ActiveCampaign data through One: contacts, segmentsv2, users, personalizations, smsbroadcasts, accounts and more, 321 actions with real parameter documentation. Use whenever the user asks to look something up in ActiveCampaign, create or update a record there, or build code against the ActiveCampaign API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: active-campaign
  generated-from: one-knowledge-base
---

# ActiveCampaign through One

ActiveCampaign is a customer experience automation platform that combines email marketing, automation, sales automation, and CRM tools to help businesses engage with customers and drive growth.

One exposes ActiveCampaign through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `active-campaign` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ActiveCampaign is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ActiveCampaign account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List, Search, and Filter Contacts | GET | `/api/3/contacts` | `conn_mod_def::GJzzbG2HP0U::-KANfSK3RtSbF1PHyI_6dQ` |
| Retrieve a Contact | GET | `/api/3/contacts/{{id}}` | `conn_mod_def::GJzzbO8E7kE::DRnIr11cTH-0sFKibe799w` |
| Retrieve a Contact’s Automation Entry Counts | GET | `/contacts/{{id}}/automationEntryCounts` | `conn_mod_def::GJzzcZTIjoE::FtTNXhMsT7W5tw1JTVKXtA` |
| Retrieve a Contact’s Bounce Logs | GET | `/api/3/contacts/{{id}}/bounceLogs` | `conn_mod_def::GJzzbWgJLK8::3ExfDJH0RsKqtfHJwTc1iQ` |
| Retrieve a Contact’s Deals | GET | `/api/3/contacts/{{id}}/deals` | `conn_mod_def::GJzzbltmhjY::MY6JQeHlQIiBEApKySmYOA` |
| Retrieve a Contact's Field Values | GET | `/contacts/{{id}}/fieldValues` | `conn_mod_def::GJzzbtHRw_Q::tJE2bwvMQ4yLlhK9Yz90nQ` |
| Retrieve a Contact’s Geo IPs | GET | `/api/3/contacts/{{id}}/geoIps` | `conn_mod_def::GJzzcojILNg::Iadlt3JrQUeVnE6EYvsA1A` |
| Retrieve a Contact’s Organization | GET | `/contacts/{{id}}/organization` | `conn_mod_def::GJzzc3VP-ZQ::LymNycFvS1ml1_pF5mRdBA` |
| Retrieve a Contact’s Plus Append | GET | `/contacts/{{id}}/plusAppend` | `conn_mod_def::GJzzc-zXyPc::HSgzK7QTTR-tnd5PaJ4KnA` |
| Retrieve a Contact's Score Values | GET | `/contacts/{{id}}/scoreValues` | `conn_mod_def::GJzzcLWDpqo::UylzVETZSuu4_JkMCE1FlQ` |
| Retrieve a Contact’s Tracking Logs | GET | `/api/3/contacts/{{id}}/trackingLogs` | `conn_mod_def::GJzzdGffsvE::VMEEARfoQASjfWktPgom8Q` |
| Bulk Import Contacts | POST | `/api/3/import/bulk_import` | `conn_mod_def::GJzzaFp3d6o::BAPVfP1BQRSoUZzVbpBqMQ` |

4 more Contacts actions are available through search.

### SegmentsV2

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Segment’s Count History (Before Timestamp) | GET | `/segmentsV2/{{segmentId}}/count-history/{{timestamp}}` | `conn_mod_def::GJzzeYqrZzg::qM35EGtJT2qjOf8b5qduTg` |
| Retrieve a Segment | GET | `/api/3/segmentsV2/{{segmentId}}` | `conn_mod_def::GJzzzOWMpb8::VxvQa9iMSUy7YaDYAakGPQ` |
| Retrieve a Segment’s Count History | GET | `/api/3/segmentsV2/{{segmentId}}/count-history` | `conn_mod_def::GJzzePHwDyU::1u19NmpAQHeu2sohxpY5Mw` |
| Retrieve a Segment’s Historic Definition | GET | `/api/3/segmentsV2/{{segmentId}}/createdDate/{{timestamp}}` | `conn_mod_def::GJzzzV4LtEs::-WiRzhfTTIC5iBwsmG63Rg` |
| Retrieve Most Recent Count History for Segments | GET | `/api/3/segmentsV2/count-history` | `conn_mod_def::GJzzvbYHbz4::h9sCzl4ZQuOJhtTGVHVidQ` |
| Create a Segment | POST | `/api/3/segmentsV2` | `conn_mod_def::GJzzy_q8phM::f66SdrIpS869h6tlmJ0DYA` |
| Delete a Segment (V2) by Segment ID (Including Historic Versions) | DELETE | `/api/3/segmentsV2/{{segmentId}}` | `conn_mod_def::GJzzzHHCAGI::0oTn5k04RQmM9oe6B2pO9Q` |
| Revert a Segment to a Historic Definition | PUT | `/api/3/segmentsV2/{{segmentId}}/createdDate/{{timestamp}}` | `conn_mod_def::GJzzzfp3MH4::rWbG4prER7uz3RzFyyfxqg` |
| Update a Segment | PUT | `/segmentsV2/{{segmentId}}` | `conn_mod_def::GJzzzpRtEhM::txwWRVXYSAWJam24OhyXrg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Users | GET | `/api/3/users` | `conn_mod_def::GJzz50OHFPA::s-7njVWjRwK2a7W6XUsRAA` |
| Retrieve a User | GET | `/users/{{id}}` | `conn_mod_def::GJzz564eKmM::cJCx4G6JQO-adSgBBki8uA` |
| Retrieve a User by Email | GET | `/api/3/users/email/{{email}}` | `conn_mod_def::GJzz6CC_qnM::8GlbeZWJRC-4kVxVsSoSxg` |
| Retrieve a User by Username | GET | `/api/3/users/username/{{username}}` | `conn_mod_def::GJzz6I96b3Q::_jf5Oi20TMus9h28jS-OCQ` |
| Retrieve Logged-in User | GET | `/api/3/users/me` | `conn_mod_def::GJzz6P2A82A::6xteY59KSEKGMMHgSdCMsQ` |
| Create a User | POST | `/api/3/users` | `conn_mod_def::GJzz5nH-68g::37lsxLMwRqalPB_77mwPpA` |
| Delete a User | DELETE | `/api/3/users/{{id}}` | `conn_mod_def::GJzz5t1Dt8g::kCu9n2eHTY26NFFKmIdT2w` |
| Update a User | PUT | `/api/3/users/{{id}}` | `conn_mod_def::GJzz6Wm8r-o::Xl2MEiWAT8e8FeqqC7eWyQ` |

### Personalizations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Personalization Variables | GET | `/api/3/personalizations` | `conn_mod_def::GJzz69zrSTg::T_SqiaphRC65PqD_EVZeSw` |
| Retrieve a Personalization Variable | GET | `/api/3/personalizations/{{variableId}}` | `conn_mod_def::GJzz7Od4BW0::mdP5Y4QRQOCMfYxjD0FDew` |
| Bulk Delete Personalization Variables | DELETE | `/api/3/personalizations/bulkdelete` | `conn_mod_def::GJzz6dkZyS4::Zdy-XGIZR7ynMXR-IeTpwg` |
| Create a Personalization Variable | POST | `/api/3/personalizations` | `conn_mod_def::GJzz6khJTGc::pWeO5152T5uyh8lKm-kZgw` |
| Delete a Personalization Variable | DELETE | `/api/3/personalizations/{{variableId}}` | `conn_mod_def::GJzz6sY9-nY::an5BL2mGR9a5u50ax83_pA` |
| Edit a Personalization Variable | PUT | `/api/3/personalizations/{{variableId}}` | `conn_mod_def::GJzz6zyyvyQ::orLFAcbFSxSiiJoM1U5A7w` |
| Lock a Personalization Variable | PATCH | `/personalizations/{{variableId}}/lock` | `conn_mod_def::GJzz7FJ1hsg::_4_91Kq7T4-fs-tP7tTcRQ` |
| Unlock a Personalization Variable | PATCH | `/personalizations/{{variableId}}/unlock` | `conn_mod_def::GJzz7VWniVY::2mBxTRRsTIWDR24-hvDI7g` |

### SmsBroadcasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SMS Broadcast Message | GET | `/sms/broadcasts/{{id}}` | `conn_mod_def::GJzzXydCReI::CNxNlw-pSniXZ_S_RJNoWQ` |
| List SMS Broadcast Messages | GET | `/api/3/sms/broadcasts` | `conn_mod_def::GJzzXq-FLoQ::M56qq6ylTFCDQmfBBHbKhw` |
| Create AI-generated SMS Broadcast | POST | `/api/3/sms/broadcasts/ai` | `conn_mod_def::GJzzVpNmVjs::zUNs0Y7IR6GBG9LhTSLJBw` |
| Create an SMS Broadcast Message | POST | `/api/3/sms/broadcasts` | `conn_mod_def::GJzzXRyNyUM::L13MlxZFSOqchLm_3W_EjA` |
| Delete an SMS Broadcast Message | DELETE | `/sms/broadcasts/{{id}}` | `conn_mod_def::GJzzXY5NCMU::iRoDExz4ShKUFzi1wal50w` |
| Update an SMS Broadcast Message | PUT | `/sms/broadcasts/{{id}}` | `conn_mod_def::GJzzX6Tyr2Y::9eyd_zVFTTCZpLymVmxoXg` |
| Update an SMS Broadcast with AI | PUT | `/api/3/sms/broadcasts/ai` | `conn_mod_def::GJzzV658ZuA::RuLPSJ6-Q3aDBN2-t6UN8Q` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Accounts | GET | `/api/3/accounts` | `conn_mod_def::GJzzUMAvgdk::VPo27bikRxC5F4rno2_91Q` |
| Retrieve an Account | GET | `/api/3/accounts/{{id}}` | `conn_mod_def::GJzzUS4VmL4::3y-mRKpRS-yN9-6swrGVjA` |
| Bulk Delete Accounts | DELETE | `/api/3/accounts/bulk_delete` | `conn_mod_def::GJzzTue4r2Q::d0h4tB8uRVyHZeKM1Xwi9A` |
| Create an Account | POST | `/api/3/accounts` | `conn_mod_def::GJzzT1xo5uc::eSgtC_YvTYOqa1mxKP4Rpg` |
| Delete an Account | DELETE | `/accounts/{{id}}` | `conn_mod_def::GJzzUER2V2s::-f1eFq5GS82wsoTrd05zFw` |
| Update an Account | PUT | `/api/3/accounts/{{id}}` | `conn_mod_def::GJzzUa6iKEU::9MTD5JPfSMqpudIknzfRzw` |
| Update an Account Note | PUT | `/api/3/accounts/{{id}}/notes/{{noteid}}` | `conn_mod_def::GJzzUicoxOY::nfBd0FvdTN2SSNGz__2_qQ` |

### AccountCustomFieldData

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Custom Field Values | GET | `/api/3/accountCustomFieldData` | `conn_mod_def::GJzzfRz5Xmk::HeZ7cDAuROqZlyZoOMTFJg` |
| Retrieve an Account Custom Field Value | GET | `/accountCustomFieldData/{{id}}` | `conn_mod_def::GJzzfZIRWp4::As9Nlvm3TfaiegmP5KEPAg` |
| Bulk Create Custom Account Field Values | POST | `/api/3/accountCustomFieldData/bulkCreate` | `conn_mod_def::GJzzeozYYbA::hrcFAAcaTwS_aeL0bFUUKw` |
| Bulk Update Custom Account Field Values | PATCH | `/api/3/accountCustomFieldData/bulkUpdate` | `conn_mod_def::GJzze4T_9Y0::ZTodgmTzQ0i-YIjHoOjQjw` |
| Create an Account Custom Field Value | POST | `/api/3/accountCustomFieldData` | `conn_mod_def::GJzzfCldkX8::OutEdQCtT52QViYBf9pdGA` |
| Delete an Account Custom Field Value | DELETE | `/api/3/accountCustomFieldData/{{id}}` | `conn_mod_def::GJzzfJ991ew::gUQvF7vNTX26ZY-0L6ZrBg` |
| Update an Account Custom Field Value | PUT | `/api/3/accountCustomFieldData/{{id}}` | `conn_mod_def::GJzzfg-UCTg::jopx8FQGQuuooJqKVwB6Jw` |

### DealCustomFieldData

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Deal Custom Field Values | GET | `/api/3/dealCustomFieldData` | `conn_mod_def::GJzzg7pDpag::D4HAmnvmSImlhMI1UNJkiQ` |
| Retrieve a Custom Deal Field Value | GET | `/api/3/dealCustomFieldData/{{id}}` | `conn_mod_def::GJzzhEH1X0Q::iYIOc0J9QxWlPBmzYbR4tw` |
| Bulk Create Custom Deal Field Values | POST | `/api/3/dealCustomFieldData/bulkCreate` | `conn_mod_def::GJzzgZz6MT8::C6gXXopHTomY0Fbnn2UBrA` |
| Bulk Update Deal Custom Field Data Values | PATCH | `/api/3/dealCustomFieldData/bulkUpdate` | `conn_mod_def::GJzzgiACwvs::wqOflHS5QsCOQsQP4epF-Q` |
| Create a Custom Deal Field Value | POST | `/api/3/dealCustomFieldData` | `conn_mod_def::GJzzgrJEHKg::9Hqha1hCRli5beGaflJHCQ` |
| Delete a Custom Deal Field Value | DELETE | `/dealCustomFieldData/{{id}}` | `conn_mod_def::GJzzgyJy57w::BwepRbSeQ7OhWj9NDCYVMQ` |
| Update a Deal's Custom Field Value | PUT | `/dealCustomFieldData/{{id}}` | `conn_mod_def::GJzzhLkBpfc::nErRacZ8TYmhMJDtLv-7jg` |

### CustomObjectSchemas

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Custom Object Schemas | GET | `/api/3/customObjects/schemas` | `conn_mod_def::GJzzkz3n8bE::KTwYq21pSZOiLQ_Oji5HLg` |
| Retrieve a Custom Object Schema | GET | `/customObjects/schemas/{{schemaId}}` | `conn_mod_def::GJzzk7YzUNk::GxLyufIlQ12EB8Aj8fG0zw` |
| Create a Child Custom Object Schema (Extend a Parent Schema) | POST | `/customObjects/schemas/{{id}}/child` | `conn_mod_def::GJzzwAetHX8::BYkBbn7jR3C5p92H2DigKw` |
| Create a Custom Object Schema | POST | `/api/3/customObjects/schemas` | `conn_mod_def::GJzzkbeE3RM::LQpwKbI2RzybPzJJxI0fVQ` |
| Create a Public Custom Object Schema | POST | `/api/3/customObjects/schemas/public` | `conn_mod_def::GJzzwIch5ok::b8G2InFPTe6_0FUeYkkM1w` |
| Delete a Custom Object Schema (and Associated Records) | DELETE | `/api/3/customObjects/schemas/{{id}}` | `conn_mod_def::GJzzkr1NwWU::cAL0_dJYQ16iLDb_ulxx0g` |
| Update a Custom Object Schema | PUT | `/customObjects/schemas/{{schemaId}}` | `conn_mod_def::GJzzlEwOo4g::IPj-ZN7BSzuUA4DvlXzvqQ` |

### DealStages

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Deal Stages | GET | `/api/3/dealStages` | `conn_mod_def::GJzz04WFlq4::gwY5sfLBRrWDzAP_UE62UQ` |
| Retrieve a Deal Stage | GET | `/api/3/dealStages/{{id}}` | `conn_mod_def::GJzz1I5UCUw::aBZMb3dlTjupDSggWJOVEw` |
| Create a Deal Stage (Pipeline Stage) | POST | `/api/3/dealStages` | `conn_mod_def::GJzz0l-LcVQ::l-ZyoOvURXa6IiFmChxH_Q` |
| Delete a Deal Stage | DELETE | `/dealStages/{{id}}` | `conn_mod_def::GJzz0uteYQo::VSw7pQWUTjSuTIGbUFsgxA` |
| Move Deals in a Deal Stage to Another Stage | PUT | `/dealStages/{{id}}/deals` | `conn_mod_def::GJzz1ANN-48::NayX8JgUQ2yiegYgrWcRrQ` |
| Update a Deal Stage | PUT | `/api/3/dealStages/{{id}}` | `conn_mod_def::GJzz1QXqyWY::m5Kqc5IcS4edHJl4pDXCnw` |

### DealTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Deal Tasks | GET | `/api/3/dealTasks` | `conn_mod_def::GJzz4e3DWTw::zg55DhhoQQGjCOQum5nvyg` |
| Retrieve a Deal Task | GET | `/dealTasks/{{id}}` | `conn_mod_def::GJzz4mn7r_g::HyipsMKdTfyD6-9OlLDYzQ` |
| Create a Deal Task | POST | `/api/3/dealTasks` | `conn_mod_def::GJzz4HHipPc::4ujG8ub-ReGEjkIGCpStPw` |
| Delete a Task | DELETE | `/api/3/dealTasks/{{id}}` | `conn_mod_def::GJzz4OW2W94::GMGlvTj7QPOFFLD0vdqYcg` |
| Move Deal Tasks to Another Deal Task Type | PUT | `/dealTasktypes/{{id}}/dealTasks` | `conn_mod_def::GJzz3XzBv2k::O6_wifG0SE-591KpKW9w-A` |
| Update a Deal Task | PUT | `/api/3/dealTasks/{{id}}` | `conn_mod_def::GJzz4uBw9D0::4H9ZVlZ8QruzU8h_eF_bdQ` |

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Deals | GET | `/api/3/deals` | `conn_mod_def::GJzzmWycnuk::uITez0NZRLCINF_chwMUtQ` |
| Retrieve a Deal | GET | `/deals/{{id}}` | `conn_mod_def::GJzzmdvj4ss::RN8l9nJ4Rs6uitvOxa0yIg` |
| Bulk Update Deal Owners | PATCH | `/api/3/deals/bulkUpdate` | `conn_mod_def::GJzzlkF3W3s::T_XGL0sBTJitOMHMFUgl1g` |
| Create a Deal | POST | `/api/3/deals` | `conn_mod_def::GJzzlr7LEzc::T-RiAlnkS1G_sapuArW0cg` |
| Delete a Deal | DELETE | `/api/3/deals/{{id}}` | `conn_mod_def::GJzzl9OO2_w::_VkW82dcQ2utvHPPBZt7Qw` |
| Update a Deal | PUT | `/api/3/deals/{{id}}` | `conn_mod_def::GJzzmlOXN1U::aqgo3E6_SlWJNZBo5kFA5A` |

This lists 90 of 321 actions. For anything not here, call `search_one_platform_actions` with platform `active-campaign`. The full catalog is at https://www.withone.ai/knowledge/active-campaign.

## When a call fails

The error comes from ActiveCampaign, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/active-campaign

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
