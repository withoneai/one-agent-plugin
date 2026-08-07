---
name: salesforce
description: Salesforce is a cloud-based CRM platform that provides APIs and tools for managing customer data, sales pipelines, service operations, and marketing workflows, allowing teams and developers to build integrations, automate processes, and support customer-facing business operations. Read and write Salesforce data through One: processrules, sobjectquickactions, sobjects, sobjectcollections, approvallayouts, processapprovals and more, 150 actions with real parameter documentation. Use whenever the user asks to look something up in Salesforce, create or update a record there, or build code against the Salesforce API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: salesforce
  generated-from: one-knowledge-base
---

# Salesforce through One

Salesforce is a cloud-based CRM platform that provides APIs and tools for managing customer data, sales pipelines, service operations, and marketing workflows, allowing teams and developers to build integrations, automate processes, and support customer-facing business operations.

One exposes Salesforce through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `salesforce` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Salesforce is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Salesforce account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ProcessRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Process Rule for an sObject | GET | `/services/data/v66.0/process/rules/{{sObjectName}}/{{workflowRuleId}}` | `conn_mod_def::GLcnoTXl69g::pCquGwEGSRu20micDw576w` |
| Get Process Rules | GET | `/services/data/v66.0/process/rules/` | `conn_mod_def::GLcnodQYA5A::cyxUi36kSGSVpSqgLqkzJA` |
| Get Process Rules for an sObject | GET | `/services/data/v66.0/process/rules/{{sObject}}` | `conn_mod_def::GLcnoStZLTg::6Lr8rT73Tk647SVqEFdAPw` |
| Return HTTP Headers for a Process Rule of an sObject | HEAD | `/services/data/v66.0/process/rules/{{sObjectName}}/{{workflowRuleId}}` | `conn_mod_def::GLcnoRvj-kA::DCIMPwHkTv-vjjL9SZzHiQ` |
| Return HTTP Headers for Process Rules | HEAD | `/services/data/v66.0/process/rules/` | `conn_mod_def::GLcnobiyBYg::7Mvo9GDZSW6XWUUcI-iikg` |
| Return HTTP Headers for Process Rules of an sObject | HEAD | `/services/data/v66.0/process/rules/{{sObject}}` | `conn_mod_def::GLcnocOo4Dg::at_nwgYtRAu_0m86f-xz9w` |
| Trigger a Process Rule for an sObject | POST | `/services/data/v66.0/process/rules/{{sObjectName}}/{{workflowRuleId}}` | `conn_mod_def::GLcnoQvKItg::PNyAr2cNRNKv10WjpIwi6g` |
| Trigger Process Rules | POST | `/services/data/v66.0/process/rules/` | `conn_mod_def::GLcnobievAg::-FVtu6JbSmqYi92SD_Asug` |

### SObjectQuickActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific sObject Quick Action | GET | `/services/data/v66.0/sobjects/{{sObject}}/quickActions/{{actionName}}` | `conn_mod_def::GLcnryz9ATg::nPA-teQhRVKQZvWGVecYfQ` |
| Get sObject Quick Action Details | GET | `/services/data/v66.0/sobjects/{{sObject}}/quickActions/{{actionName}}/describe/` | `conn_mod_def::GLcnqqIn-gg::KMf1jU1NTvKwtB3TitZ9eQ` |
| Get sObject Quick Actions | GET | `/services/data/v66.0/sobjects/{{sObject}}/quickActions/` | `conn_mod_def::GLcnqqZM91A::Oacv4br7Rom8jj-TCLDgsQ` |
| Create Records Using Specific sObject Quick Actions | POST | `/services/data/v66.0/sobjects/{{sObject}}/quickActions/{{actionName}}` | `conn_mod_def::GLcnryvNfgA::dt7_Jx4IT9SI5bMM0nUWjg` |
| Return Headers for a Specific sObject Quick Action | HEAD | `/services/data/v66.0/sobjects/{{sObject}}/quickActions/{{actionName}}` | `conn_mod_def::GLcnryzjGGg::ulDoOd3mSQeCyY2vJnpZFw` |
| Return Headers for sObject Quick Actions | HEAD | `/services/data/v66.0/sobjects/{{sObject}}/quickActions/` | `conn_mod_def::GLcnrBuXUEA::ymKNoJZLTfO8CuK_WELUuQ` |

### Sobjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe Global Objects | GET | `/services/data/v66.0/sobjects/` | `conn_mod_def::GLcnmcst1rg::kywV3dETQ5ylmrMz_i-xWA` |
| Get Updated Records for an sObject | GET | `/services/data/v66.0/sobjects/{{sObject}}/updated/` | `conn_mod_def::GLcnqMsdu-g::5toQG14NSUCPvqBFqwL3uQ` |
| Create Records Using sObject Basic Information | POST | `/services/data/v66.0/sobjects/{{sObject}}/` | `conn_mod_def::GLcnp3A7MrA::Lsur0CuRT8OOT1Y8zSQngw` |
| Create Records Using sObject Rows by External ID | POST | `/services/data/v66.0/sobjects/{{sObject}}/Id` | `conn_mod_def::GLcnrNpneSg::EW-dcMKVReqaOhm_Xty82A` |
| Upsert Records Using sObject Rows by External ID | PATCH | `/services/data/v66.0/sobjects/{{sObject}}/{{fieldName}}/{{fieldValue}}` | `conn_mod_def::GLcnre4A-Hg::IWhmKI8KQaCdtwAI5851Zg` |

### SObjectCollections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Records Using sObject Collections | GET | `/services/data/v66.0/composite/sobjects/{{sObject}}` | `conn_mod_def::GLcnp_eX-BA::VWGTbRj0TbaqMzWlAxskmA` |
| Create Records Using Salesforce sObject Collections | POST | `/services/data/v66.0/composite/sobjects` | `conn_mod_def::GLcnp2nMAwA::MEBwbrVHSLqX1NSPnbzrIQ` |
| Delete Records Using sObject Collections | DELETE | `/services/data/v66.0/composite/sobjects` | `conn_mod_def::GLcnp-sUxIg::r49y34cKRYGmW-tXoriZIg` |
| Get Records Using sObject Collections | POST | `/services/data/v66.0/composite/sobjects/{{sObject}}` | `conn_mod_def::GLcnqDNoAuA::_aACxQwrQEO5VE_7Zbp1Gw` |
| Update Records Using sObject Collections | PATCH | `/services/data/v66.0/composite/sobjects/` | `conn_mod_def::GLcnqBnn1_A::xdJMaRa2TXGvth7GvGHypA` |

### ApprovalLayouts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Layout for a Single Approval Process on a Specified Object | GET | `/services/data/v66.0/sobjects/{{sObject}}/describe/approvalLayouts/{{approvalProcessName}}` | `conn_mod_def::GLcnrnIu0MA::5D2ECm9pQsS7TrDRcXDZJw` |
| Get Approval Layouts for an Object | GET | `/services/data/v66.0/sobjects/{{sObject}}/describe/approvalLayouts` | `conn_mod_def::GLcnpsJke2A::7DkVU3fRSXSpQuLSQ6Gz0g` |
| Return Headers for a Single Approval Process on a Specified Object | HEAD | `/services/data/v66.0/sobjects/{{sObject}}/describe/approvalLayouts/{{approvalProcessName}}` | `conn_mod_def::GLcnrpBYbyA::keB9CeW3SCal7hAO0kK-Cw` |
| Return Headers for Approval Layouts | HEAD | `/services/data/v66.0/sobjects/{{sObject}}/describe/approvalLayouts/` | `conn_mod_def::GLcnp2dtG9A::NJ1S23BHTayC-jdqxMUG6g` |

### ProcessApprovals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Process Approvals | GET | `/services/data/v66.0/process/approvals/` | `conn_mod_def::GLcnnr65fgA::YjTaVB5GRoKSvOofWwYBmA` |
| Return HTTP Headers for Process Approvals | HEAD | `/services/data/v66.0/process/approvals/` | `conn_mod_def::GLcnntCBmdg::2l2oQYsBROycMif8jb2vEQ` |
| Submit, Approve, or Reject Process Approvals | POST | `/services/data/v66.0/process/approvals/` | `conn_mod_def::GLcnoP785jA::5JO9U24oRaqYBTYYZGgucQ` |

### OpportunityLineItemSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Product Schedules for an Opportunity Product | GET | `/services/data/v66.0/sobjects/OpportunityLineItem/{{opportunityLineItemId}}/OpportunityLineItemSchedules` | `conn_mod_def::GLcnonnkn-A::is1vQc6eROuhE61__hlTjA` |
| Create Product Schedules for an Opportunity Product | PUT | `/services/data/v66.0/sobjects/OpportunityLineItem/{{opportunityLineItemId}}/OpportunityLineItemSchedules` | `conn_mod_def::GLcnoeVns0g::eiM3SOgATbG6eoTNnlZ8EA` |
| Delete Product Schedules for an Opportunity Line Item | DELETE | `/services/data/v66.0/sobjects/OpportunityLineItem/{{opportunityLineItemId}}/OpportunityLineItemSchedules` | `conn_mod_def::GLcnooCc6mg::fTWp-jk6Qq-qQEWfJNNjkg` |

### QuickActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Quick Actions | GET | `/services/data/v66.0/quickActions/` | `conn_mod_def::GLcnozkOM2g::Fd7IK3ysTsGy5beMmYXqtg` |
| Create Records Using Quick Actions | POST | `/services/data/v66.0/quickActions/` | `conn_mod_def::GLcnoxe23Ig::pGNZVRxaRvyDiyjdPrC_Xw` |
| Return Headers of Quick Actions | HEAD | `/services/data/v66.0/quickActions/` | `conn_mod_def::GLcnow9ueDg::DyFnTPWmTIGNQcI8gKXprQ` |

### LocalizedValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Localized Values for Survey Fields | POST | `/services/data/v66.0/localizedvalue/records/delete` | `conn_mod_def::GLcnpfOAKDA::8J-juSbvR6eM2knah9k_0w` |
| Get Localized Values for Survey Fields | POST | `/services/data/v66.0/localizedvalue/records/get` | `conn_mod_def::GLcnph4lbIA::elNHI9dvR6et-mLu0kKIVQ` |
| Upsert Localized Values for Survey Fields | POST | `/services/data/v66.0/localizedvalue/records/upsert` | `conn_mod_def::GLcnpHSiAxg::wF2av_X6Q0OoOYoL5N41sg` |

### LocalizedValue

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Translated Value of a Survey Field | GET | `/services/data/v66.0/localizedvalue/record/{{developerName}}/{{language}}` | `conn_mod_def::GLcnpgTIZag::hkSrDFaSS0OochetomXI4Q` |
| Add or Change the Translation of a Survey Field | POST | `/services/data/v66.0/localizedvalue/record/{{developerName}}/{{language}}` | `conn_mod_def::GLcnpJvptOg::wjP1cklVRFeKvgHm7nJDIg` |
| Delete the Translated Value of a Survey Field | DELETE | `/services/data/v66.0/localizedvalue/record/{{developerName}}/{{language}}` | `conn_mod_def::GLcnpH88u9g::aEvzIw-lT7-oSSN_NhT__g` |

### SObjectQuickActionDefaultValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get sObject Quick Action Default Values | GET | `/services/data/v66.0/sobjects/{{sObject}}/quickActions/{{actionName}}/defaultValues/` | `conn_mod_def::GLcnqgjoCwg::bxt4Eiv2TF6O8vbSZ2YfMg` |
| Return Headers Using sObject Quick Action Default Values | HEAD | `/services/data/v66.0/sobjects/{{sObject}}/quickActions/{{actionName}}/defaultValues/` | `conn_mod_def::GLcnqgbuy0g::F5rU1iF6R--BAIcQKE1d0Q` |
| Return Headers Using sObject Quick Action Default Values by ID | HEAD | `/services/data/v66.0/sobjects/{{sObject}}/quickActions/{{actionName}}/defaultValues/{{contextId}}` | `conn_mod_def::GLcnqrliBYg::SuMCi9QiSQ2x8b_PbNKXzg` |

### SObjectRelationships

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Records Using sObject Relationships | GET | `/services/data/v66.0/sobjects/{{sObject}}/{{id}}/{{relationshipFieldName}}` | `conn_mod_def::GLcnrESjvIA::Jv8R8AnhQG25HSRZ3i2Llw` |
| Delete Records Using sObject Relationships | DELETE | `/services/data/v66.0/sobjects/{{sObject}}/{{id}}/{{relationshipFieldName}}` | `conn_mod_def::GLcnrEU1bWA::_CHpKeDVTiatVA0XUPWD2A` |
| Update Records Using sObject Relationships | PATCH | `/services/data/v66.0/sobjects/{{sObject}}/{{id}}/{{relationshipFieldName}}` | `conn_mod_def::GLcnrDbNIkA::zRVfjs4qTaiFRJ5oOCQhpw` |

### SObjectRows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Records Using sObject Rows | GET | `/services/data/v66.0/sobjects/{{sObject}}/{{id}}` | `conn_mod_def::GLcnrVAGW-A::xqIKYrfKR-i24j1CzspFdw` |
| Delete sObject Rows | DELETE | `/services/data/v66.0/sobjects/{{sObject}}/{{id}}` | `conn_mod_def::GLcnrO4U5zA::R0Ri6fhZQdSs2yj05ufsrQ` |
| Update Records Using sObject Rows | PATCH | `/services/data/v66.0/sobjects/{{sObject}}/{{id}}` | `conn_mod_def::GLcnrSk3e8A::U_wRcPh1TkybRu8JNpLSKA` |

### SObjectRowsByExternalId

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Records Using sObject Rows by External ID | GET | `/services/data/v66.0/sobjects/{{sObject}}/{{fieldName}}/{{fieldValue}}` | `conn_mod_def::GLcnrd9Plmg::Io-YUpwQTsu2aidDIat8pA` |
| Delete Records Using sObject Rows by External ID | DELETE | `/services/data/v66.0/sobjects/{{sObject}}/{{fieldName}}/{{fieldValue}}` | `conn_mod_def::GLcnreIc6yA::QyA9GBP0RDKZs35k0TZr_Q` |
| Return Headers Using sObject Rows by External ID | HEAD | `/services/data/v66.0/sobjects/{{sObject}}/{{fieldName}}/{{fieldValue}}` | `conn_mod_def::GLcnrecGNlA::l8iYVU37R7ClUlZJyrE-tA` |

### SelfServiceUserPassword

| Action | Method | Path | Action id |
|---|---|---|---|
| Reset Self-Service User Password | DELETE | `/services/data/v66.0/sobjects/SelfServiceUser/{{selfServiceUserId}}/password` | `conn_mod_def::GLcnrnjPrzA::2YQ9Zs2WTROGCRpWKEtb7A` |
| Return Headers for a Self-Service User Password | HEAD | `/services/data/v66.0/sobjects/SelfServiceUser/{{selfServiceUserId}}/password` | `conn_mod_def::GLcnroT6chg::PAKPB8wZQQ6wtRU6nIP9Xw` |
| Set Self-Service User Password | POST | `/services/data/v66.0/sobjects/SelfServiceUser/{{selfServiceUserId}}/password` | `conn_mod_def::GLcnrnjnt4g::v1nD8z0mRiigKCyMrThw4A` |

### UserPassword

| Action | Method | Path | Action id |
|---|---|---|---|
| Reset User Password | DELETE | `/services/data/v66.0/sobjects/User/{{userId}}/password` | `conn_mod_def::GLcnr8w8oPA::eL8kM6klRQ-PllV4rJiFNA` |
| Return Headers for an sObject User Password | HEAD | `/services/data/v66.0/sobjects/User/{{userId}}/password` | `conn_mod_def::GLcnr7dU0nA::auqysMVMQ4-z7266Uk_VAQ` |
| Set User Password | POST | `/services/data/v66.0/sobjects/User/{{userId}}/password` | `conn_mod_def::GLcnr-kwwNg::0rMJr9SJTIiG9cg_1cp0VA` |

### CompactLayouts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Compact Layouts Using sObject CompactLayouts | GET | `/services/data/v66.0/sobjects/{{sObject}}/describe/compactLayouts/` | `conn_mod_def::GLcnqLydwkg::TmesC8ukTEK39jfeSSh4yA` |
| List Compact Layouts | GET | `/services/data/v66.0/compactLayouts` | `conn_mod_def::GLcnmGUIK3g::chzOrXkjQ_qHH2gR31fwvg` |

### ConsentSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Compile Consent Settings | GET | `/services/data/v66.0/consent/action/{{action}}` | `conn_mod_def::GLcnmSD5WCA::iGeoqCOSSk2--iykisPGXw` |
| Compile Multiple Consent Settings | GET | `/services/data/v66.0/consent/multiaction` | `conn_mod_def::GLcnmcVXTSg::B7DNVTnoR9qxIarWdtK1WA` |

### EmbeddedServiceConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Embedded Service Configuration | GET | `/services/data/v66.0/support/embeddedservice/configuration/{{embeddedServiceConfigDeveloperName}}` | `conn_mod_def::GLcnmb2FVUA::AViqnhP3QxemNblfs1yvUA` |
| Return Headers for Embedded Service Configuration | HEAD | `/services/data/v66.0/support/embeddedservice/configuration/{{embeddedServiceConfigDeveloperName}}` | `conn_mod_def::GLcnmm0yEMg::wxLaXfbZTrWCn0QGhM8Q_w` |

### InvocableActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Invocable Actions | GET | `/services/data/v66.0/actions` | `conn_mod_def::GLcnmlQQ2nA::0xgXPCFQSQiwGrIHchcM7w` |
| Return HTTP Headers for Invocable Actions | HEAD | `/services/data/v66.0/actions` | `conn_mod_def::GLcnmlBm2Yg::VkVDicXGRXSdTuUvgwR2UQ` |

### StandardInvocableActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Standard Invocable Actions | GET | `/services/data/v66.0/actions/standard` | `conn_mod_def::GLcnmxKMQCA::jSvJJLu4QrSRfG9Pzo8u3Q` |
| Return HTTP Headers for Standard Invocable Actions | HEAD | `/services/data/v66.0/actions/standard` | `conn_mod_def::GLcnmx_BiYA::ciU2UTXIRmiKoIsoESdgDg` |

### CustomInvocableActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Invocable Actions | GET | `/services/data/v66.0/actions/custom` | `conn_mod_def::GLcnmy5PUkg::aQI4hDKqQkOvI7P4pVlHjQ` |
| Return HTTP Headers for Custom Invocable Actions | HEAD | `/services/data/v66.0/actions/custom` | `conn_mod_def::GLcnmxKTosA::On9FNYJCTeKHJoC3Xa80Mw` |

### ListViews

| Action | Method | Path | Action id |
|---|---|---|---|
| List Views for an Object | GET | `/services/data/v66.0/sobjects/{{sObject}}/listviews` | `conn_mod_def::GLcnnZ3CZQA::k14o5t0fTHC7pNt2YoOfDg` |
| Recent List Views for an sObject | GET | `/services/data/v66.0/sobjects/{{sObject}}/listviews/recent` | `conn_mod_def::GLcno8eYnkg::Zq_o3mrIRouCMJ-VkgrruA` |

### ParameterizedSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search with URI Parameters | GET | `/services/data/v66.0/parameterizedSearch/` | `conn_mod_def::GLcnnjMySNA::P3j9T8OfRu-sr5sSxCpgFg` |
| Search with Parameters in the Request Body | POST | `/services/data/v66.0/parameterizedSearch` | `conn_mod_def::GLcnnaVTf3A::GIlKPReQTrqrDvXeVvYagQ` |

### PlatformEventSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Platform Event Schema by Event Name | GET | `/services/data/v66.0/sobjects/{{eventName}}/eventSchema` | `conn_mod_def::GLcnnb7SmPA::05DhLsvaQXWBkZ9VYws9tw` |
| Get Platform Event Schema by Schema ID | GET | `/services/data/v66.0/event/eventSchema/{{schemaId}}` | `conn_mod_def::GLcnnsTHa0A::8OxdjkxwQ5qVCroF9uuk3A` |

### GlobalPublisherLayouts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Publisher Layouts and Descriptions | GET | `/services/data/v66.0/sobjects/Global/describe/layouts/` | `conn_mod_def::GLcnqXqEJ3A::DYjaD_DYRlyOhm1JP7Dzxg` |
| Return Headers for All Global Publisher Layouts | HEAD | `/services/data/v66.0/sobjects/Global/describe/layouts/` | `conn_mod_def::GLcnqXp6ioA::QdpGXe96Sc2lIsu1GkRDaQ` |

### SObjectLayouts

| Action | Method | Path | Action id |
|---|---|---|---|
| Return Layout Headers for a Specified Object | HEAD | `/services/data/v66.0/sobjects/{{sObject}}/describe/layouts/` | `conn_mod_def::GLcnqYAqaaA::3PH5ZbEgSmW27Wu5Ld_r5w` |
| Return Layout Headers for an Object With Multiple Record Types | HEAD | `/services/data/v66.0/sobjects/{{sObject}}/describe/layouts/{{recordTypeId}}` | `conn_mod_def::GLcnqhIIKeg::XA4PUCIeSXWhyYVGMGEOqQ` |

### SuggestedArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Suggested Articles for an sObject Record by ID | GET | `/services/data/v66.0/sobjects/{{sObject}}/{{id}}/suggestedArticles` | `conn_mod_def::GLcnr-nlR7A::5VzGINJ6QyWgIDu2IO5RCA` |
| Suggested Articles for an sObject | GET | `/services/data/v66.0/sobjects/{{sObject}}/suggestedArticles` | `conn_mod_def::GLcnsCYBR9A::i5DcOGpLRiG3XCfCFEgFvg` |

### Tabs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tabs | GET | `/services/data/v66.0/tabs/` | `conn_mod_def::GLcnsMnrnzA::_ukJDxlqRNq3yfq-2OD8ew` |
| Return Headers Using Tabs | HEAD | `/services/data/v66.0/tabs/` | `conn_mod_def::GLcnsJePsyg::l6W8xjcGT1GWpiC6zIjlCA` |

### AppMenuItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get App Menu Items | GET | `/services/data/v66.0/appMenu/AppSwitcher/` | `conn_mod_def::GLcnmFi8T-g::ptK1UqDHRQO8JBGOcVXckg` |

### AppMenuMobileItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AppMenu Mobile Items | GET | `/services/data/v66.0/appMenu/Salesforce1` | `conn_mod_def::GLcnmFqZSWA::RSRH_IpfRZqISXzcu0VfJw` |

### AppMenuAppSwitcherItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Return Headers of App Menu App Switcher Items | HEAD | `/services/data/v66.0/appMenu/AppSwitcher/` | `conn_mod_def::GLcnmGGVRAg::xBx0hJk5TvqkN02keAcI0w` |

This lists 90 of 150 actions. For anything not here, call `search_one_platform_actions` with platform `salesforce`. The full catalog is at https://www.withone.ai/knowledge/salesforce.

## When a call fails

The error comes from Salesforce, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/salesforce

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
