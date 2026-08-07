---
name: netsuite
description: NetSuite is a cloud-based ERP platform that helps businesses manage finance, operations, customer relationships, and eCommerce in a unified system for better efficiency and scalability. Read and write Netsuite data through One: returnauthorization, opportunity, cashsale, cashrefund, customerrefund, workorderclose and more, 1032 actions with real parameter documentation. Use whenever the user asks to look something up in Netsuite, create or update a record there, or build code against the Netsuite API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: netsuite
  generated-from: one-knowledge-base
---

# Netsuite through One

NetSuite is a cloud-based ERP platform that helps businesses manage finance, operations, customer relationships, and eCommerce in a unified system for better efficiency and scalability.

One exposes Netsuite through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `netsuite` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Netsuite is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Netsuite account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ReturnAuthorization

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Return Authorization Record | GET | `/returnAuthorization/{{id}}` | `conn_mod_def::GJ5Cu_vHGYw::AEBJnGV1RhGc8iUc0Ndb5A` |
| Create a Return Authorization Record | POST | `/services/rest/record/v1/returnAuthorization` | `conn_mod_def::GJ5CvAcGYcU::qkQ2bSQ_Tuux7ToXSfv-Fg` |
| Remove a Return Authorization Record | DELETE | `/services/rest/record/v1/returnAuthorization/{{id}}` | `conn_mod_def::GJ5CvOU25MA::nWbaK9JjS_WnnGI5Q8HiGg` |
| Transform a Return Authorization to a Cash Refund | POST | `/returnAuthorization/{{id}}/!transform/cashRefund` | `conn_mod_def::GJ5CvP6edMA::zLJ74jYuR5GFwyDLHMaYpw` |
| Transform a Return Authorization to a Credit Memo | POST | `/returnAuthorization/{{id}}/!transform/creditMemo` | `conn_mod_def::GJ5CvSPlAYk::yqpYk9ENRZyWp5hpmLqA9A` |
| Transform a Return Authorization to an Item Receipt | POST | `/returnAuthorization/{{id}}/!transform/itemReceipt` | `conn_mod_def::GJ5CvVDtsgc::f0zTZi-SRhWw_7VEzCuiYQ` |
| Update a Return Authorization Record | PATCH | `/returnAuthorization/{{id}}` | `conn_mod_def::GJ5CvPgEAAI::znhKBgT-TASNn-v57TCQTw` |
| Upsert a Return Authorization Record | PUT | `/returnAuthorization/{{id}}` | `conn_mod_def::GJ5CvE_FCrE::OP0eU300TdKHF3HFfGtOEg` |

### Opportunity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Opportunity Record | GET | `/opportunity/{{id}}` | `conn_mod_def::GJ5CoA_vAlA::QjcObY1CRSinCdWTfSQWhA` |
| List Opportunity Records | GET | `/services/rest/record/v1/opportunity` | `conn_mod_def::GJ5CnzmXMPY::ZEJ7iRMWTEmcbWN6YWmR6Q` |
| Create an Opportunity Record | POST | `/services/rest/record/v1/opportunity` | `conn_mod_def::GJ5CoC13REQ::I66D1ubaQyWfqZstwGPaDw` |
| Remove an Opportunity Record | DELETE | `/services/rest/record/v1/opportunity/{{id}}` | `conn_mod_def::GJ5CoAGWcuw::wpD1unxIQvGdWnxZLxGr5g` |
| Transform an Opportunity to a Cash Sale | POST | `/opportunity/{{id}}/!transform/cashSale` | `conn_mod_def::GJ5CoGEoibc::JFVSP1lXQv6Lil5ShwSVPg` |
| Transform an Opportunity to a Sales Order | POST | `/opportunity/{{id}}/!transform/salesOrder` | `conn_mod_def::GJ5CoTr9Qyg::_6GCxAeKQ6eRkW0a2jSwtg` |
| Update an Opportunity Record | PATCH | `/opportunity/{{id}}` | `conn_mod_def::GJ5CoQfuNeM::0fTZM1QpRxysL23q5THX9Q` |
| Upsert an Opportunity Record (by External ID) | PUT | `/services/rest/record/v1/opportunity/{{id}}` | `conn_mod_def::GJ5CoFkzRK0::NqyRLLeLRii5ynj_KKVfSQ` |

### CashSale

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cash Sale Record | GET | `/services/rest/record/v1/cashSale/{{id}}` | `conn_mod_def::GJ5CO7rDGRg::i-vF_zNQRvGHl436Li0yFw` |
| Create a Cash Sale Record | POST | `/services/rest/record/v1/cashSale` | `conn_mod_def::GJ5CO8b32MY::7WrDVsM0Szi48RJxptFRDw` |
| Delete a Cash Sale Record | DELETE | `/cashSale/{{id}}` | `conn_mod_def::GJ5CO7_MVNU::qn1lQUXNR3ek-cJW3viTfQ` |
| Transform a Cash Sale into a Return Authorization | POST | `/cashSale/{{id}}/!transform/returnAuthorization` | `conn_mod_def::GJ5CPXoKbtQ::TeB0NnGGQ5u5XVOGRkkBtQ` |
| Transform a Customer to a Cash Sale | POST | `/customer/{{id}}/!transform/cashSale` | `conn_mod_def::GJ5CUtCjxFk::xe_dMdrGT5m_QnGXALqjaQ` |
| Transform a Sales Order to a Cash Sale | POST | `/salesOrder/{{id}}/!transform/cashSale` | `conn_mod_def::GJ5CwMwWHHw::xdhEngSGQx2tbIAcuCcOWg` |
| Update a Cash Sale Record | PATCH | `/cashSale/{{id}}` | `conn_mod_def::GJ5CPTCxcJA::uLG6S_xCS0SjWQhlsJ278A` |
| Upsert a Cash Sale Record | PUT | `/cashSale/{{id}}` | `conn_mod_def::GJ5CO7-j_xM::EjOVCcUbQv6qzeF7jiVK9Q` |

### CashRefund

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cash Refund Record | GET | `/services/rest/record/v1/cashRefund/{{id}}` | `conn_mod_def::GJ5COhzU22w::3UKFGaAVTY2OByvkAy0IGw` |
| List Cash Refund Records | GET | `/services/rest/record/v1/cashRefund` | `conn_mod_def::GJ5COdtI-qQ::eq7p-vAMRrCznCqUw00Ddg` |
| Create a Cash Refund Record | POST | `/services/rest/record/v1/cashRefund` | `conn_mod_def::GJ5COvETVjg::KbtctwRxToqCqyEKhDTEXA` |
| Remove a Cash Refund Record | DELETE | `/cashRefund/{{id}}` | `conn_mod_def::GJ5COxdy-PQ::M_JjXcbnT62fky2RYLIH3Q` |
| Transform a Cash Refund to a Credit Memo | POST | `/cashRefund/{{id}}/!transform/creditMemo` | `conn_mod_def::GJ5COxfifo4::hMxpKij-SRK5jh82IeX2mQ` |
| Transform a Cash Sale to a Cash Refund | POST | `/cashSale/{{id}}/!transform/cashRefund` | `conn_mod_def::GJ5CPITFXUA::DSbAi9WdQQah9TK3iekYnQ` |
| Update a Cash Refund Record | PATCH | `/services/rest/record/v1/cashRefund/{{id}}` | `conn_mod_def::GJ5COwUmnII::6mJZsYKUSdOiKuLaaREAGA` |
| Upsert a Cash Refund Record (by ID) | PUT | `/cashRefund/{{id}}` | `conn_mod_def::GJ5COgS-WqY::IfivYVFdRCiWjeGDeW4Xkg` |

### CustomerRefund

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer Refund Record | GET | `/services/rest/record/v1/customerRefund/{{id}}` | `conn_mod_def::GJ5CWGJlBqI::KbZvILjRRhCLtti7lfI3Lg` |
| List Customer Refund Records | GET | `/services/rest/record/v1/customerRefund` | `conn_mod_def::GJ5CWDU-FJM::3D8ZIY2yQdy6LPpe_3jgSQ` |
| Create a Customer Refund Record | POST | `/services/rest/record/v1/customerRefund` | `conn_mod_def::GJ5CWFo1RzQ::0z9ghP_eR-6fixn3UZ70Zw` |
| Remove a Customer Refund Record | DELETE | `/services/rest/record/v1/customerRefund/{{id}}` | `conn_mod_def::GJ5CWPNJ9Os::uLMBaYJUTGyJgIsxZPG7MQ` |
| Transform a Customer Deposit to a Customer Refund | POST | `/customerDeposit/{{id}}/!transform/customerRefund` | `conn_mod_def::GJ5CVk1rVkw::3AFO0SH3TPCK2tNiR243Fg` |
| Transform a Customer Payment into a Customer Refund | POST | `/services/rest/record/v1/customerPayment/{{id}}/!transform/customerRefund` | `conn_mod_def::GJ5CV6zIKzI::dbzlA-HERciNOTgYYCPkkg` |
| Update a Customer Refund Record | PATCH | `/customerRefund/{{id}}` | `conn_mod_def::GJ5CWRHOjkM::26ygglYfQLeAxYUVo93Amw` |
| Upsert a Customer Refund Record (by ID) | PUT | `/customerRefund/{{id}}` | `conn_mod_def::GJ5CWFiEKgM::zthBY5WgSpmMyqTQfkp09A` |

### WorkOrderClose

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Work Order Close Record | GET | `/workOrderClose/{{id}}` | `conn_mod_def::GJ5C8l0VnV4::Iy_6KwvORSW1OuouSiU0Sg` |
| List Work Order Close Records | GET | `/services/rest/record/v1/workOrderClose` | `conn_mod_def::GJ5C8CKpp8U::tjyine6ZSyypng385NZk2Q` |
| Insert a Work Order Close Record | POST | `/services/rest/record/v1/workOrderClose` | `conn_mod_def::GJ5C8ocG1lA::QAwzmPTaTh-8s1qHunq79A` |
| Remove a Work Order Close Record | DELETE | `/services/rest/record/v1/workOrderClose/{{id}}` | `conn_mod_def::GJ5C8mS8muM::-jypXUiDQRucKOlfw4H95Q` |
| Transform a Work Order to a Work Order Close | POST | `/workOrder/{{id}}/!transform/workOrderClose` | `conn_mod_def::GJ5C8chgNac::EblFlJAzSbKVjLGMCic77g` |
| Update a Work Order Close Record | PATCH | `/workOrderClose/{{id}}` | `conn_mod_def::GJ5C8n728YQ::cPq5s8C_QTK4_q5yPTiRUQ` |
| Upsert a Work Order Close Record | PUT | `/services/rest/record/v1/workOrderClose/{{id}}` | `conn_mod_def::GJ5C8sloVsw::MwKaTCdsSkGOGZ8LUnql9w` |

### AssemblyBuild

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Assembly Build Record | GET | `/assemblyBuild/{{id}}` | `conn_mod_def::GJ5CJc0vcjc::Ny5SRiZXR-m_61hlVXCZKg` |
| List Assembly Builds (Get list of records) | GET | `/assemblyBuild` | `conn_mod_def::GJ5CI59YZQ8::F5ECRvIOT9KeLdQwBzs1Iw` |
| Create an Assembly Build Record | POST | `/services/rest/record/v1/assemblyBuild` | `conn_mod_def::GJ5CJNGS7YI::XHs4iPHxTVmY-7NbDMXxjA` |
| Remove an Assembly Build Record | DELETE | `/services/rest/record/v1/assemblyBuild/{{id}}` | `conn_mod_def::GJ5CJHPgDoY::WS_oH67QS_WhcYRyfnKJqg` |
| Transform an Assembly Item to an Assembly Build | POST | `/assemblyItem/{{id}}/!transform/assemblyBuild` | `conn_mod_def::GJ5CJ_wRG6I::MyfmqmB5RaiF5vWOier9MQ` |
| Update an Assembly Build Record | PATCH | `/assemblyBuild/{{id}}` | `conn_mod_def::GJ5CJs5qSJQ::lExZykseQMKFMo0FSQ37Pg` |
| Upsert an Assembly Build Record | PUT | `/assemblyBuild/{{id}}` | `conn_mod_def::GJ5CJNFjlcA::lMi5CNLcQnCQSQiT7XJtow` |

### AssemblyUnbuild

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Assembly Unbuild Record | GET | `/assemblyUnbuild/{{id}}` | `conn_mod_def::GJ5CKNNhRts::svvI2vNFR2iJytnvPLipcw` |
| List Assembly Unbuild Records | GET | `/assemblyUnbuild` | `conn_mod_def::GJ5CJ5-VFYo::06REfTWqRlu20hxSGMRQQA` |
| Create an Assembly Unbuild Record | POST | `/services/rest/record/v1/assemblyUnbuild` | `conn_mod_def::GJ5CKK92hao::0M16mBXIRAaMEGQlAxmHPQ` |
| Remove an Assembly Unbuild Record | DELETE | `/assemblyUnbuild/{{id}}` | `conn_mod_def::GJ5CKJmWz2s::qIphQANYTEi0Xm14JOrvtw` |
| Transform an Assembly Build to an Assembly Unbuild | POST | `/assemblyBuild/{{id}}/!transform/assemblyUnbuild` | `conn_mod_def::GJ5CJI-hJJU::6AwsUrOtQxmT8z47tR_vtg` |
| Update an Assembly Unbuild Record | PATCH | `/assemblyUnbuild/{{id}}` | `conn_mod_def::GJ5CKW_pC_w::MQRoIfRORDKN9Zml62uRzA` |
| Upsert an Assembly Unbuild Record | PUT | `/services/rest/record/v1/assemblyUnbuild/{{id}}` | `conn_mod_def::GJ5CKOKeu6o::5hezpMRPTfGN6KGzf3FyEg` |

### ItemFulfillment

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Item Fulfillment Record | GET | `/itemFulfillment/{{id}}` | `conn_mod_def::GJ5ChFXrbLo::RzrdIpR_T-C303nBC6ICRQ` |
| List Item Fulfillment Records | GET | `/services/rest/record/v1/itemFulfillment` | `conn_mod_def::GJ5ChGoHMcU::i-J2tr49R0CP8dh8bRNqBw` |
| Create an Item Fulfillment Record | POST | `/services/rest/record/v1/itemFulfillment` | `conn_mod_def::GJ5ChSLw4ww::9w4JWk_tT6mq1XQi1o54uA` |
| Remove an Item Fulfillment Record | DELETE | `/services/rest/record/v1/itemFulfillment/{{id}}` | `conn_mod_def::GJ5ChPj2ZxI::UGGNTF9MQ3O01FewRg3fuw` |
| Transform a Sales Order to an Item Fulfillment | POST | `/salesOrder/{{id}}/!transform/itemFulfillment` | `conn_mod_def::GJ5CwZsh6iM::PLPZbmkHTM-LBgz4Yafw_A` |
| Update an Item Fulfillment Record | PATCH | `/itemFulfillment/{{id}}` | `conn_mod_def::GJ5ChTawBeM::e4u02fOES6Gcy8E_qr6sOw` |
| Upsert an Item Fulfillment Record | PUT | `/services/rest/record/v1/itemFulfillment/{{id}}` | `conn_mod_def::GJ5ChHZrPPs::sFld3CBdSQ2tyz8aOLEgDQ` |

### Invoice

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice Record | GET | `/services/rest/record/v1/invoice/{{id}}` | `conn_mod_def::GJ5CgSaIcaM::E8Z5QQ8rTTynPbM5Bh-n4g` |
| Create (Insert) an Invoice Record | POST | `/services/rest/record/v1/invoice` | `conn_mod_def::GJ5CgTp7WYE::K3a1gJE8Th62WraEiPMf2g` |
| Delete an Invoice Record | DELETE | `/invoice/{{id}}` | `conn_mod_def::GJ5CgfiJ8CI::_ZamngwvQoOWii8mNcsdpw` |
| Transform an Invoice to a Customer Payment | POST | `/invoice/{{id}}/!transform/customerPayment` | `conn_mod_def::GJ5CgjNRvLY::hCbFgYmqR7mfykmBTuIoyg` |
| Transform an Invoice to a Return Authorization | POST | `/invoice/{{id}}/!transform/returnAuthorization` | `conn_mod_def::GJ5Cgh6wKOk::NW5nhI8fTqmnvqlVO1P9Ow` |
| Update an Invoice Record | PATCH | `/invoice/{{id}}` | `conn_mod_def::GJ5CgiUso3w::JqBfP-CmSeGJOWSt23BQsw` |
| Upsert an Invoice Record (Insert or Update) | PUT | `/invoice/{{id}}` | `conn_mod_def::GJ5CgXDvNfc::-U4LY7v5SYmKgN-utMN3zg` |

### Job

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job Record | GET | `/services/rest/record/v1/job/{{id}}` | `conn_mod_def::GJ5CiHk5Va4::9559TVmeTX6fuWUF-vbnzQ` |
| List Job Records | GET | `/services/rest/record/v1/job` | `conn_mod_def::GJ5CiHY3oxs::4YHEkqmUSxyehyQVMnYeUQ` |
| Create a Job Record | POST | `/services/rest/record/v1/job` | `conn_mod_def::GJ5CiHijSxI::MRAZCoMITAWN_XNuocJ5yg` |
| Remove a Job Record | DELETE | `/services/rest/record/v1/job/{{id}}` | `conn_mod_def::GJ5CiSujnQc::Prz5sRPWQpGyZrUSwRESgA` |
| Transform a Job to a Cash Sale | POST | `/job/{{id}}/!transform/cashSale` | `conn_mod_def::GJ5CiVLg1r8::JMd4TtbGRBm3CebyTX3y3Q` |
| Update a Job Record | PATCH | `/services/rest/record/v1/job/{{id}}` | `conn_mod_def::GJ5CivEXo_U::SDASj8EzRhCgj5U5zCrHHw` |
| Upsert a Job Record (Insert or Update) | PUT | `/services/rest/record/v1/job/{{id}}` | `conn_mod_def::GJ5CiKYtemY::dirr-n8PQDK43mxCn01qBQ` |

### VendorPrepaymentApplication

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Vendor Prepayment Application Record | GET | `/vendorPrepaymentApplication/{{id}}` | `conn_mod_def::GJ5C6brjRjM::--N1P3HKSP2JZU2sw_4uqw` |
| List Vendor Prepayment Applications | GET | `/services/rest/record/v1/vendorPrepaymentApplication` | `conn_mod_def::GJ5C6c_NxnQ::RdhvwAkdRuG-M-oJ_Rjx-g` |
| Create a Vendor Prepayment Application Record | POST | `/services/rest/record/v1/vendorPrepaymentApplication` | `conn_mod_def::GJ5C6pvGavQ::4fLtplcxR4WtPgK2fJ686A` |
| Remove a Vendor Prepayment Application Record | DELETE | `/vendorPrepaymentApplication/{{id}}` | `conn_mod_def::GJ5C6pNMUuk::wWbI-ElrTJSHp6AQS8702g` |
| Transform a Vendor Prepayment to a Vendor Prepayment Application | POST | `/vendorPrepayment/{{id}}/!transform/vendorPrepaymentApplication` | `conn_mod_def::GJ5C6fFM204::G_ZyPQShRkeOdIBhB8lcnQ` |
| Update a Vendor Prepayment Application Record | PATCH | `/services/rest/record/v1/vendorPrepaymentApplication/{{id}}` | `conn_mod_def::GJ5C6vS4DAU::gTVVLTiPQ8K6xRMBsy8AFg` |
| Upsert a Vendor Prepayment Application Record | PUT | `/vendorPrepaymentApplication/{{id}}` | `conn_mod_def::GJ5C6raZ6sY::X1KBsL3oSPqi-pUfE_TtRQ` |

### VendorReturnAuthorization

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Vendor Return Authorization Record | GET | `/vendorReturnAuthorization/{{id}}` | `conn_mod_def::GJ5C65JNPW8::M8Eb5Ml1Qg6BHCo-BPOmTA` |

6 more VendorReturnAuthorization actions are available through search.

This lists 90 of 1032 actions. For anything not here, call `search_one_platform_actions` with platform `netsuite`. The full catalog is at https://www.withone.ai/knowledge/netsuite.

## When a call fails

The error comes from Netsuite, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/netsuite

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
