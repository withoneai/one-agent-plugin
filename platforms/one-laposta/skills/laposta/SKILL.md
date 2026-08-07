---
name: laposta
description: Laposta is an email marketing platform for creating and sending digital newsletters, with contact management, templates, campaign delivery, and compliance-focused hosting in the Netherlands, allowing organizations to run professional email communications and newsletter campaigns at small or larger scale. Read and write Laposta data through One: campaign, list, field, segment, webhook, member and more, 41 actions with real parameter documentation. Use whenever the user asks to look something up in Laposta, create or update a record there, or build code against the Laposta API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: laposta
  generated-from: one-knowledge-base
---

# Laposta through One

Laposta is an email marketing platform for creating and sending digital newsletters, with contact management, templates, campaign delivery, and compliance-focused hosting in the Netherlands, allowing organizations to run professional email communications and newsletter campaigns at small or larger scale.

One exposes Laposta through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `laposta` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Laposta is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Laposta account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Campaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign | GET | `/v2/campaign/{{campaignId}}` | `conn_mod_def::GMk5lJRoUDA::LE8ztkahSQaff6ngebSF6A` |
| Create a Campaign | POST | `/v2/campaign` | `conn_mod_def::GMk5kaq4eOk::mnGv_35vTO-Nqi47C3Xl9Q` |
| Delete a Campaign | DELETE | `/v2/campaign/{{campaignId}}` | `conn_mod_def::GMk5k9THYaQ::TF-WTlEHSh-fOGEACjCH-g` |
| Fill Campaign Content | POST | `/v2/campaign/{{campaignId}}/content` | `conn_mod_def::GMk5kachrfk::vZXhCzBWSw24tomE7szqUw` |
| Schedule a Campaign | POST | `/v2/campaign/{{campaignId}}/action/schedule` | `conn_mod_def::GMk5kYyi4Ec::c32oQRHaQImn0ZhH3oIdMA` |
| Send a Campaign | POST | `/v2/campaign/{{campaignId}}/action/send` | `conn_mod_def::GMk5lLHo7cU::Q7FELoZQTn6qqP44_7qAJg` |
| Send a Test Mail for a Campaign | POST | `/v2/campaign/{{campaignId}}/action/testmail` | `conn_mod_def::GMk5lXjfHAA::OUyFqfVhRCSnW9nNRcJDew` |
| Update a Campaign | POST | `/v2/campaign/{{campaignId}}` | `conn_mod_def::GMk5khFJVE0::HeGJzizORYieREz5fBQPIg` |

### List

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List | GET | `/v2/list/{{listId}}` | `conn_mod_def::GMk5lrlrsf4::zHjfMluPTW6EJ6z10pzwdA` |
| Create a List | POST | `/v2/list` | `conn_mod_def::GMk5lhb7iMw::2bCRiS9DQVGIgyN_54CCgQ` |
| Delete a List | DELETE | `/v2/list/{{listId}}` | `conn_mod_def::GMk5lhSbI6A::WxplfzQBSzSsFvZeq1hhAQ` |
| Purge All Active Subscribers from a List | DELETE | `/v2/list/{{listId}}/members` | `conn_mod_def::GMk5lfhycc4::IYE7QugOTLe7eVu0rsrsMQ` |
| Update a List | POST | `/v2/list/{{listId}}` | `conn_mod_def::GMk5lff_59U::mkVpaE_LSfCbl0QgTWkOUA` |

### Field

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Field | GET | `/v2/field/{{fieldId}}` | `conn_mod_def::GMk5lSyJIII::SjGSBrPTTea0aqu8Z3ZLVw` |
| Create a Field | POST | `/v2/field` | `conn_mod_def::GMk5lWa3xiQ::gNlGmVDOQsCxjFxwke10tQ` |
| Delete a Field | DELETE | `/v2/field/{{fieldId}}` | `conn_mod_def::GMk5lVCxWwA::bx5FHlIfSMe8sXIU0IT9YA` |
| Update a Field | POST | `/v2/field/{{fieldId}}` | `conn_mod_def::GMk5lWA70qk::6WAPkN_wQjyOdPWPyVW7CQ` |

### Segment

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Segment | GET | `/v2/segment/{{segmentId}}` | `conn_mod_def::GMk5mbN3HsE::67l6TgYaR-WSM3ElYF-WHg` |
| Create a Segment | POST | `/v2/segment` | `conn_mod_def::GMk5mMR978M::fe8-PBO_Tn2K4cn6braMyg` |
| Delete a Segment | DELETE | `/v2/segment/{{segmentId}}` | `conn_mod_def::GMk5mPZhcoE::OX5IHE7KQM2SVvEzsGicug` |
| Update a Segment | POST | `/v2/segment/{{segmentId}}` | `conn_mod_def::GMk5mMEr_1U::plY3ULBvQEyWlsRqybczbw` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/v2/webhook/{{webhookId}}` | `conn_mod_def::GMk5mZ_5Gb8::uynizdBeQVCiIWrv9p2M2g` |
| Create a Webhook | POST | `/v2/webhook` | `conn_mod_def::GMk5maW58-Q::X_kp1_vaS9CT0z6T6QyFqw` |
| Delete a Webhook | DELETE | `/v2/webhook/{{webhookId}}` | `conn_mod_def::GMk5meFCUmU::eF6fugsDTuGtQvoA1YQZYQ` |
| Update a Webhook | POST | `/v2/webhook/{{webhookId}}` | `conn_mod_def::GMk5mb4NhIg::TDa_I_saRE2ANu7eGtfgQQ` |

### Member

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Member from a List | GET | `/v2/member/{{memberId}}` | `conn_mod_def::GMk5l_Le2c4::Qp_MRsAJR9yzrFBn3ZERdw` |
| Create a Member | POST | `/v2/member` | `conn_mod_def::GMk5luovP5M::b2J2tWMpSZ6b2KwLF0R6KA` |
| Update a Member | POST | `/v2/member/{{memberId}}` | `conn_mod_def::GMk5l4fMV7o::oz_NKpT0S4uixjeAb4qT_g` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| List Members | GET | `/v2/member` | `conn_mod_def::GMk5mATaN00::qTRmc4a1TnaFhCXYtUmXGA` |
| Add or Update Members for a List | POST | `/v2/list/{{listId}}/members` | `conn_mod_def::GMk5luEbeBM::SU7CMMKHT_uHOrz7FnO2kg` |

### CampaignHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Campaign's Event History | GET | `/v2/campaign/{{campaignId}}/history` | `conn_mod_def::GMk5lKIWXGE::cH4HW8oGTEe1LhcH52trHg` |

### CampaignContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign Content | GET | `/v2/campaign/{{campaignId}}/content` | `conn_mod_def::GMk5lLcGHhc::kMgY460YRHGACScYiBTNJw` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Campaigns | GET | `/v2/campaign` | `conn_mod_def::GMk5lL2NLBM::t6rEZTWBRj-CedH1fYTDMQ` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fields for a List | GET | `/v2/field` | `conn_mod_def::GMk5le1rmhI::ZlMsX772ThGkNM7m58c2tw` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Lists | GET | `/v2/list` | `conn_mod_def::GMk5ltRJxqI::h5CkUIlNTGKu-XegIkz78A` |

### Subscriber

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Subscriber from a List | DELETE | `/v2/member/{{memberId}}` | `conn_mod_def::GMk5lt8Kuag::hMnyXv_RRlWdncW1b1gu2w` |

### CampaignReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign Report | GET | `/v2/report/{{campaignId}}` | `conn_mod_def::GMk5l4T0Xfg::z8ZgFJUQSESwVvyWAsqUnQ` |

### MembersHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Member's History | GET | `/v2/member/{{memberId}}/history` | `conn_mod_def::GMk5l9QKTFk::3k_YEaRLSGuiezngkDVGqA` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| List Reports | GET | `/v2/report` | `conn_mod_def::GMk5mI8p1Eo::eJAWX8UMSUKMhm_vOxxxHw` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Segments for a List | GET | `/v2/segment` | `conn_mod_def::GMk5mLhiQCE::H8X6w6tBSY2jeXyPyf4o0A` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks for a List | GET | `/v2/webhook` | `conn_mod_def::GMk5mpLcXXw::yaAKVm41St24T6S1IqokPw` |

## When a call fails

The error comes from Laposta, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/laposta

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
