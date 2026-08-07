---
name: salesflare
description: Salesflare is an intelligent CRM platform designed for B2B sales teams that automates data entry, tracks customer interactions, and manages pipelines by pulling data from email, calendar, and social sources, enabling teams to streamline workflows and focus on closing deals. Read and write Salesflare data through One: accounts, contacts, tags, customfields, opportunities, workflows and more, 72 actions with real parameter documentation. Use whenever the user asks to look something up in Salesflare, create or update a record there, or build code against the Salesflare API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: salesflare
  generated-from: one-knowledge-base
---

# Salesflare through One

Salesflare is an intelligent CRM platform designed for B2B sales teams that automates data entry, tracks customer interactions, and manages pipelines by pulling data from email, calendar, and social sources, enabling teams to streamline workflows and focus on closing deals.

One exposes Salesflare through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `salesflare` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Salesflare is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Salesflare account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Details | GET | `/accounts/{{accountId}}` | `conn_mod_def::GKhRRf09xhA::INZ3laWESrer2f8LXCf3Rg` |
| List Accounts | GET | `/accounts` | `conn_mod_def::GKhRRlgws8A::wjDFYYpmSSq7asEtnSJ1KQ` |
| Create an Account | POST | `/accounts` | `conn_mod_def::GKhRRgigxFg::PxSgSdYARwCIcPi_25MqLQ` |
| Delete an Account | DELETE | `/accounts/{{accountId}}` | `conn_mod_def::GKhRRgdakIg::cIQ_jMRcSgmTKMJcs5Z6dA` |
| Update an Account | PUT | `/accounts/{{accountId}}` | `conn_mod_def::GKhRRtkGYFg::Q91_ejKvTKCjI82mfjEoXg` |
| Update an Account's Contacts | POST | `/accounts/{{accountId}}/contacts` | `conn_mod_def::GKhRRtda6qg::XfHE4xWnTqyiIbOmpxxebA` |
| Update an Account's Contacts | PUT | `/accounts/{{accountId}}/contacts` | `conn_mod_def::GKhRRt2oq8A::sDYdceoZTd2opznLqKicew` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Details | GET | `/contacts/{{contactId}}` | `conn_mod_def::GKhRSJ4NMwg::G0rBB1IcTxm_BE9bwk7VgQ` |
| List Contacts | GET | `/contacts` | `conn_mod_def::GKhRSaEfkmA::6xIedsvCRZG2COfvPyl10A` |
| List Current User's Contacts | GET | `/me/contacts` | `conn_mod_def::GKhRTyUyaqA::cyoS0689Q0WWArPn21ElEg` |
| Create a Contact | POST | `/contacts` | `conn_mod_def::GKhRSNG93Yg::jp_A3pBSQD-TWhIIGu1w5w` |
| Delete a Contact | DELETE | `/contacts/{{contactId}}` | `conn_mod_def::GKhRSJZvIEg::1p3QhiKrT5yiiv3YpliAIA` |
| Update a Contact | PUT | `/contacts/{{contactId}}` | `conn_mod_def::GKhRSVjCQeg::PR78z5SHTRu1lqLihgKVDQ` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag's Usage Details | GET | `/tags/{{tagId}}/usage` | `conn_mod_def::GKhRThcT_tA::iPybFLgWTYqDIMJxSW3ctQ` |
| Get Tag Details | GET | `/tags/{{tagId}}` | `conn_mod_def::GKhRTZY__-g::OJ0wEJhtTWuCGqPc0mJSBw` |
| List Tags | GET | `/tags` | `conn_mod_def::GKhRTjCRrQg::KHECZt8WS_y1i8KQKZpkVA` |
| Create a Tag | POST | `/tags` | `conn_mod_def::GKhRTYErqvg::SiLEmhz9SSWYqAYQ3GA6jg` |
| Delete a Tag | DELETE | `/tags/{{tagId}}` | `conn_mod_def::GKhRTX7VnWg::OfU7_b7vRniRpfoqAcrtCw` |
| Update a Tag | PUT | `/tags/{{tagId}}` | `conn_mod_def::GKhRTh1NPeg::1EKbVmszR4yr4v6UaE__yQ` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Field Details | GET | `/customfields/{{itemClass}}/{{id}}` | `conn_mod_def::GKhRSVsVjHA::mEV7jIj5Q_C3DdbhKRE1fQ` |
| List Custom Fields of a Type | GET | `/customfields/{{itemClass}}` | `conn_mod_def::GKhRSih-uSA::ejiKROLMTeusLt6DgdVbHQ` |
| Create a Custom Field of a Type | POST | `/customfields/{{itemClass}}` | `conn_mod_def::GKhRSVuwEwg::5hNFE4lmQ1iQcjG9iKkExg` |
| Delete a Custom Field | DELETE | `/customfields/{{itemClass}}/{{id}}` | `conn_mod_def::GKhRSU0Y94g::0TOEZ2TGTp-srDbFcLgvBQ` |
| Update a Custom Field | PUT | `/customfields/{{itemClass}}/{{id}}` | `conn_mod_def::GKhRSiGXoiA::ZRCcTFEgTEKyQDmvb-30fg` |

### Opportunities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Opportunity's Details | GET | `/opportunities/{{id}}` | `conn_mod_def::GKhRS-KgDnA::n6wuueEwSTOG0zBtYGbS5Q` |
| List Opportunities | GET | `/opportunities` | `conn_mod_def::GKhRTP4o_KA::abe5Ga3aTP28BadG5t6Z4g` |
| Create an Opportunity | POST | `/opportunities` | `conn_mod_def::GKhRS94xlKg::Qdh295-6Ty6DdmLO8SgTCQ` |
| Delete an Opportunity | DELETE | `/opportunities/{{id}}` | `conn_mod_def::GKhRS_VsvVA::Za_GZheURhCHLYVQdM98SQ` |
| Update an Opportunity | PUT | `/opportunities/{{id}}` | `conn_mod_def::GKhRTIX_7Jg::ku8vD2BHT5ywBgpPng6dhA` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Workflow Details | GET | `/workflows/{{id}}` | `conn_mod_def::GKhRT6pyclA::qZ0TvB2ZTDyqLx7uXapc0g` |
| List Workflows | GET | `/workflows` | `conn_mod_def::GKhRT8spCNg::q9APJmZjS7Cf822ZLfE4Gw` |
| Create a Workflow | POST | `/workflows` | `conn_mod_def::GKhRT7GM-Ug::sahklAv8SBOcdyQHCkp2vA` |
| Re-enter or Exit an Entity from a Workflow | PUT | `/workflows/{{id}}/audience/{{recordId}}` | `conn_mod_def::GKhRUFqON6A::-2QpLiatScC0O_noeVWsQw` |
| Update a Workflow | PUT | `/workflows/{{id}}` | `conn_mod_def::GKhRUG6ZI0A::XnDo1K8TQfG_A838w0VDQA` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Messages | GET | `/accounts/{{accountId}}/messages` | `conn_mod_def::GKhRRuZ6xfg::SzBiBCluR02sPA-vq0BznQ` |
| Create an Internal Note | POST | `/messages` | `conn_mod_def::GKhRSq3Aejg::YJtpRPWLQyubZEdHWl_tQA` |
| Create an Internal Note for a Message | POST | `/messages/{{messageId}}/feedback` | `conn_mod_def::GKhRR4EYl0g::lvi3fZi7SguZ8djNURp3eA` |
| Delete an Internal Note | DELETE | `/messages/{{messageId}}` | `conn_mod_def::GKhRS07yf8g::hzTUC98oQ7qQOYJCaL9yyQ` |

### Meetings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Meeting Details | GET | `/meetings/{{meetingId}}` | `conn_mod_def::GKhRS1gRJ6g::av6l9EurTYWJ7dLu4IW7Uw` |
| Create a Meeting | POST | `/meetings` | `conn_mod_def::GKhRS1w4Yyg::f81-pE2tT5ulca_YUZycSg` |
| Delete a Meeting | DELETE | `/meetings/{{meetingId}}` | `conn_mod_def::GKhRS1wySKg::CvArfVqjTeig_0YX86XuiA` |
| Update a Meeting | PUT | `/meetings/{{meetingId}}` | `conn_mod_def::GKhRS_VxDsg::om_zz6ibSya4iL7BSWFYBQ` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks | GET | `/tasks` | `conn_mod_def::GKhRTs26PDA::vSv73dYcTmSWkIbiObFkYA` |
| Create a Task | POST | `/tasks` | `conn_mod_def::GKhRThwv6vA::MIkBORO_QSSf4rHc5Zgk8g` |
| Delete a Task | DELETE | `/tasks/{{id}}` | `conn_mod_def::GKhRTiSsjkA::L1XebFA_Qd-8Hh38o9deQQ` |
| Update a Task | PUT | `/tasks/{{id}}` | `conn_mod_def::GKhRTqp3xsA::18-sCy3rRpWh_h4MIe9neA` |

### AccountUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Account's Users | POST | `/accounts/{{accountId}}/users` | `conn_mod_def::GKhRRuJ-LIg::lDIGuGPrQz2JhctFARszLw` |
| Update an Account's Users | PUT | `/accounts/{{accountId}}/users` | `conn_mod_def::GKhRR3Zf5qg::Mxwz4jekR8WBRHjDpKxF-A` |

### AiSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AI Settings | GET | `/settings/ai` | `conn_mod_def::GKhRR2_lg8g::LJeomK3HRa-TWBIDzy1h-g` |
| Update AI Settings | PUT | `/settings/ai` | `conn_mod_def::GKhRR3QUe8A::QOwj3NvtTcm-3XftwBnaKA` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Calls | POST | `/calls` | `conn_mod_def::GKhRSJJUqlA::rqFBRYp9SVaxJnnDfNfmGQ` |
| Update a Call | PUT | `/calls/{{meetingId}}` | `conn_mod_def::GKhRSJoRCuA::y8XuhdKeRpSlLv4iEV-PTA` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group | GET | `/groups/{{id}}` | `conn_mod_def::GKhRSrfzeEg::SGWayJciTqiSF5K2knCyew` |
| List Groups | GET | `/groups` | `conn_mod_def::GKhRSq3mQhg::ZOqPSy2ASpKF6QVq9eYg1A` |

### Stages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Stage Details | GET | `/stages/{{stageId}}` | `conn_mod_def::GKhRTIPCCog::aE-6mTcIRVO--oRd9Tch0Q` |
| List Stages | GET | `/stages` | `conn_mod_def::GKhRTZZNB9g::fU3nZimYRq2Mm79keycKTA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Details | GET | `/users/{{id}}` | `conn_mod_def::GKhRTqQ9R1g::yVE_CfDtRIWO1ZKrjxTqhw` |
| List Users | GET | `/users` | `conn_mod_def::GKhRT8c9JMA::Q91nwqkbSWWq68Zq-RDlTA` |

### AccountsFeed

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account's Feed | GET | `/accounts/{{accountId}}/feed` | `conn_mod_def::GKhRRgjMwhA::KqdZzLToQ828AQTj1gFIZA` |

### MessageFeedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Feedback for a Message | POST | `/message/{{messageId}}/feedback` | `conn_mod_def::GKhRSCGG08A::CClJyag6Qi-nKN79SoPQFg` |

### CustomFieldTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Field Types | GET | `/customfields/types` | `conn_mod_def::GKhRSiGRnxA::ysw7zEivQ_6rPsqIIyXdyQ` |

### EmailDataSources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Email Data Sources | GET | `/datasources/email` | `conn_mod_def::GKhRSicy2DA::CMH_F7x5Q2GWTDd0Wx2QjA` |

### CustomFieldsOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Custom Field's Options | GET | `/customfields/{{itemClass}}/{{customFieldApiField}}/options` | `conn_mod_def::GKhRSjG0QHg::Ff_3_z3ARqq4vK3B7xs-2Q` |

### EmailDataSource

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Email Data Source | PUT | `/datasources/email/{{id}}` | `conn_mod_def::GKhRSrRkv8A::4VA8ZUz2SkKvqRaQ1LYw5g` |

### FilterFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Filter Fields for an Entity | GET | `/filterfields/{{entity}}` | `conn_mod_def::GKhRStKFp6g::mxbpJ3QxRaGXyDBhdHlUFg` |

### InternalNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Internal Note | PUT | `/messages/{{messageId}}` | `conn_mod_def::GKhRS1aAbbg::VYqfvLV3QuGMLxEOyDX7iQ` |

### Conferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Meeting Details by Conference ID | GET | `/conferences/{{conferenceId}}` | `conn_mod_def::GKhRS_j5VuA::VB4Q6fHsSByxl6csKATENw` |

### Persons

| Action | Method | Path | Action id |
|---|---|---|---|
| List Persons | GET | `/persons` | `conn_mod_def::GKhRTIQoTjg::TkZrIuv4TbO-h-Q1WoV4Ag` |

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pipelines | GET | `/pipelines` | `conn_mod_def::GKhRTJIGWrg::dvv5qjYwSKakTSpCfXFdLA` |

### Currencies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Currencies | GET | `/currencies` | `conn_mod_def::GKhRTYEoyLA::WcyCM7TzQ56YP5eSvfeysQ` |

### Me

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User's Details | GET | `/me` | `conn_mod_def::GKhRTqp9h2g::jjqQzQnQSTqrutfvpV0i6g` |

### WorkflowMergeFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Workflow Merge Fields | GET | `/campaigns/mergefields` | `conn_mod_def::GKhRT6biH6A::Qlmxlb0bQLyelCg7faRbLg` |

## When a call fails

The error comes from Salesflare, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/salesflare

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
