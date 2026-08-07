---
name: beehiiv
description: Beehiiv is a newsletter platform designed for creators and publishers to grow, manage, and monetize their email audiences with powerful tools for writing, scheduling, analytics, and audience segmentation. Read and write Beehiiv data through One: subscriptions, customfields, posts, tiers, webhooks, publications and more, 69 actions with real parameter documentation. Use whenever the user asks to look something up in Beehiiv, create or update a record there, or build code against the Beehiiv API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: beehiiv
  generated-from: one-knowledge-base
---

# Beehiiv through One

Beehiiv is a newsletter platform designed for creators and publishers to grow, manage, and monetize their email audiences with powerful tools for writing, scheduling, analytics, and audience segmentation.

One exposes Beehiiv through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `beehiiv` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Beehiiv is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Beehiiv account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication Subscription by Email | GET | `/publications/{{publicationId}}/subscriptions/by_email/{{email}}` | `conn_mod_def::GJ0HFHOTSP0::JBkA3YG2T4GePkcSUfU1vA` |
| Get a Publication Subscription by ID | GET | `/publications/{{publicationId}}/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ0HFO9m0wk::HlxOzQ7ZQVylYqUgk6QE7A` |
| Get a Publication Subscription by Subscriber ID | GET | `/publications/{{publicationId}}/subscriptions/by_subscriber_id/{{subscriberId}}` | `conn_mod_def::GJ0HFXJS_8s::ok_K127uR6mSLyf9kLeFsg` |
| Get a Subscription JWT Token for a Publication | GET | `/publications/{{publicationId}}/subscriptions/{{subscriptionId}}/jwt_token` | `conn_mod_def::GJ0HFerwvS0::65L5AiqlS9CRwfAinGfdNA` |
| List a Publication’s Subscriptions | GET | `/publications/{{publicationId}}/subscriptions` | `conn_mod_def::GJ0HFormz-0::ChMYYz1fRAKXDvEreCf05A` |
| Add Tags to a Publication Subscription | POST | `/publications/{{publicationId}}/subscriptions/{{subscriptionId}}/tags` | `conn_mod_def::GJ0HGLA1KfQ::TRf7C1v6QOmn1ZEeXSaDdw` |
| Bulk Create Subscriptions for a Publication | POST | `/publications/{{publicationId}}/bulk_subscriptions` | `conn_mod_def::GJ0G_77ye10::pRbWuNzjSWOKrorp65ej6w` |
| Bulk Update a Publication’s Subscriptions | PUT | `/publications/{{publicationId}}/subscriptions/bulk_actions` | `conn_mod_def::GJ0HAUEvZM8::SQ5MJuxYRFKkUkhBf6k7xA` |
| Bulk Update a Publication’s Subscriptions | PATCH | `/publications/{{publicationId}}/subscriptions/bulk_actions` | `conn_mod_def::GJ0HAbWVosw::4cgU8nX1R2qPD4IXAbWyCw` |
| Bulk Update a Publication’s Subscriptions Status | PUT | `/publications/{{publicationId}}/subscriptions` | `conn_mod_def::GJ0HAkOwmaE::MZJ8yTstSuGBKfLTZutQZg` |
| Bulk Update a Publication’s Subscriptions Status | PATCH | `/publications/{{publicationId}}/subscriptions` | `conn_mod_def::GJ0HArrul1w::ADVCa2bgQTmQsGnoqCW7RQ` |
| Create a Publication Subscription | POST | `/publications/{{publicationId}}/subscriptions` | `conn_mod_def::GJ0HE3rwVh4::N9MSz6kvTheyasjr8UX1Tw` |

4 more Subscriptions actions are available through search.

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication Custom Field | GET | `/publications/{{publicationId}}/custom_fields/{{id}}` | `conn_mod_def::GJ0HBQx8yto::A1QXtgCSR2S8UHKsPlD0wA` |
| List a Publication’s Custom Fields | GET | `/publications/{{publicationId}}/custom_fields` | `conn_mod_def::GJ0HBY789yw::AEppsZ1JTDGOQM742U9UXw` |
| Create a Publication Custom Field | POST | `/publications/{{publicationId}}/custom_fields` | `conn_mod_def::GJ0HBCCTdNg::O39oYJ0ERjeLvHSP-Vguwg` |
| Delete a Publication's Custom Field | DELETE | `/publications/{{publicationId}}/custom_fields/{{id}}` | `conn_mod_def::GJ0HBJUxvD0::bR-Hx4KwRsi_P4ovFT-hIg` |
| Update a Publication Custom Field | PUT | `/publications/{{publicationId}}/custom_fields/{{id}}` | `conn_mod_def::GJ0HBg3CyRw::pvNKL0reSIyOgWY8HZ4V4Q` |
| Update a Publication Custom Field | PATCH | `/publications/{{publicationId}}/custom_fields/{{id}}` | `conn_mod_def::GJ0HBrx1VDU::-GXEilcMSmirIzBpNhDAaA` |

### Posts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication’s Aggregate Post Stats | GET | `/publications/{{publicationId}}/posts/aggregate_stats` | `conn_mod_def::GJ0HDCRgn9w::hWQifHGUS4OjQ7b8EBemcw` |
| Get a Publication’s Post | GET | `/publications/{{publicationId}}/posts/{{postId}}` | `conn_mod_def::GJ0HDKvVe0o::6LECeEBdTSymCTwaaLyNWg` |
| List a Publication’s Posts | GET | `/publications/{{publicationId}}/posts` | `conn_mod_def::GJ0HDUJ8yHU::cTstisQ4Rp2r-yFXynKGRg` |
| Create a Publication Post | POST | `/publications/{{publicationId}}/posts` | `conn_mod_def::GJ0HCxJ9Uu8::0oGpEtH6QTCLZssH2cWwgg` |
| Delete a Publication’s Post | DELETE | `/publications/{{publicationId}}/posts/{{postId}}` | `conn_mod_def::GJ0HC4EgWz0::Jr4UNhf0T8mPbA0ZI8UpNA` |

### Tiers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication’s Tier | GET | `/publications/{{publicationId}}/tiers/{{tierId}}` | `conn_mod_def::GJ0HGfb4-XE::Me8lC-WLSyqBmaLh09_AlA` |
| List a Publication’s Tiers | GET | `/publications/{{publicationId}}/tiers` | `conn_mod_def::GJ0HGnfqddw::5zNhucoNTlaA7KCr_hp7Cw` |
| Create a Publication Tier | POST | `/publications/{{publicationId}}/tiers` | `conn_mod_def::GJ0HGVGISLw::-MGV2N6tSlu6qj6wrZKglw` |
| Update a Publication’s Tier | PUT | `/publications/{{publicationId}}/tiers/{{tierId}}` | `conn_mod_def::GJ0HGvFsbCI::zb7MnXH_QqWKnXE0bxPIjA` |
| Update a Publication’s Tier | PATCH | `/publications/{{publicationId}}/tiers/{{tierId}}` | `conn_mod_def::GJ0HG27UWTo::gIVsKiFOQkuwqVysNEyStg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication Webhook Endpoint | GET | `/publications/{{publicationId}}/webhooks/{{endpointId}}` | `conn_mod_def::GJ0HHQy6Tjw::LBijL9dVTmGI6-Z-OZYHJw` |
| List a Publication's Webhooks | GET | `/publications/{{publicationId}}/webhooks` | `conn_mod_def::GJ0HHamDnSw::gf-DV0CcQD2z8Y6flNvBhw` |
| Create a Publication Webhook | POST | `/publications/{{publicationId}}/webhooks` | `conn_mod_def::GJ0HHCSTqGU::Vz_XH3tITXSUZKqOLllVzg` |
| Delete a Publication Webhook Endpoint | DELETE | `/publications/{{publicationId}}/webhooks/{{endpointId}}` | `conn_mod_def::GJ0HHJlsR1s::FpxJUaAcQPi-jEcot6ONDA` |
| Update a Publication Webhook | PATCH | `/publications/{{publicationId}}/webhooks/{{endpointId}}` | `conn_mod_def::GJ0HHp_qw1I::4X0uegO9QOqlT5f2Cb60qg` |

### Publications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication | GET | `/publications/{{publicationId}}` | `conn_mod_def::GJ0HDl4-4rg::73dwwy3rTR2XCQv_RvULDw` |
| Get a Publication's Engagements | GET | `/publications/{{publicationId}}/engagements` | `conn_mod_def::GJ0HCJrDkAA::goJ7xrOIT4WWjZY5dvtyHQ` |
| Get Workspace Publications by Subscription Email | GET | `/workspaces/publications/by_subscription_email/{{email}}` | `conn_mod_def::GJ0HHzaqQUs::0A5HixGoT1qEL83X5HsucA` |
| List Publications | GET | `/publications` | `conn_mod_def::GJ0HDvUfQM4::g6pVcxnBQHqzJVe_Hs0W8g` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication Segment | GET | `/publications/{{publicationId}}/segments/{{segmentId}}` | `conn_mod_def::GJ0HEI2ndk0::nAaM8BHqT1WKCntdWV2pQg` |
| List a Publication's Segments | GET | `/publications/{{publicationId}}/segments` | `conn_mod_def::GJ0HEmLvDgQ::5isnB6WxQ72mBpGISKCayw` |
| Delete a Publication’s Segment | DELETE | `/publications/{{publicationId}}/segments/{{segmentId}}` | `conn_mod_def::GJ0HEAgIcgQ::2lqN1N2CR-anKY-Ej6EIVA` |
| Recalculate a Publication Segment | PUT | `/publications/{{publicationId}}/segments/{{segmentId}}/recalculate` | `conn_mod_def::GJ0HEtbHf2g::7SOyi8m_TbGeO0HwGnO-ZQ` |

### AutomationJourneys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Automation Journey for a Publication Automation | GET | `/publications/{{publicationId}}/automations/{{automationId}}/journeys/{{automationJourneyId}}` | `conn_mod_def::GJ0G-wjgizE::VZLsVw7nQjebIm-bZtXMQQ` |
| List an Automation’s Journeys (for a Publication) | GET | `/publications/{{publicationId}}/automations/{{automationId}}/journeys` | `conn_mod_def::GJ0G_aGDtk4::EvRQ_p6HQGiB7i_-WkvtUw` |
| Add a Subscription to a Publication’s Automation Journey | POST | `/publications/{{publicationId}}/automations/{{automationId}}/journeys` | `conn_mod_def::GJ0G-n213kU::uSHcXGWIRSyI7hw3s4s1Ig` |

### Authors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication Author | GET | `/publications/{{publicationId}}/authors/{{authorId}}` | `conn_mod_def::GJ0G-V6emtI::0l2XR_TXQC2fcdcBjJwLBQ` |
| List a Publication’s Authors | GET | `/publications/{{publicationId}}/authors` | `conn_mod_def::GJ0G-fe8lWk::PVwtvBs7RCuzaTwfJryobA` |

### Automations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication's Automation | GET | `/publications/{{publicationId}}/automations/{{automationId}}` | `conn_mod_def::GJ0G_jw9mJA::Xi9-BqTcROuHpMsQ-ESciw` |
| List a Publication’s Automations | GET | `/publications/{{publicationId}}/automations` | `conn_mod_def::GJ0G_0hMsSc::wM3XwVl8QRCy6obsA05BGg` |

### BulkSubscriptionUpdates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication's Bulk Subscription Update | GET | `/publications/{{publicationId}}/bulk_subscription_updates/{{id}}` | `conn_mod_def::GJ0HADCuGZc::FsLmYO4aR8-TqoMOj51s3Q` |
| List a Publication’s Bulk Subscription Updates | GET | `/publications/{{publicationId}}/bulk_subscription_updates` | `conn_mod_def::GJ0HAKaX5yQ::VZY-lpb6R5S1yJcp3ch-Lg` |

### ConditionSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication’s Condition Set | GET | `/publications/{{publicationId}}/condition_sets/{{conditionSetId}}` | `conn_mod_def::GJ0HAzN1f9M::GJH_18D3TBqeVJnBUDVqwA` |
| List a Publication’s Condition Sets | GET | `/publications/{{publicationId}}/condition_sets` | `conn_mod_def::GJ0HA7D4rWw::u9PkUFuSQWSIYwst14vzDw` |

### EmailBlasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication’s Email Blast | GET | `/publications/{{publicationId}}/email_blasts/{{emailBlastId}}` | `conn_mod_def::GJ0HB1AA8kU::Nl2v3llvSoaek8llgpuZhw` |
| List a Publication's Email Blasts | GET | `/publications/{{publicationId}}/email_blasts` | `conn_mod_def::GJ0HB_WfFtY::kEWQVG2gQJuhiGliE1LiDA` |

### Polls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication’s Poll | GET | `/publications/{{publicationId}}/polls/{{pollId}}` | `conn_mod_def::GJ0HCQ-88K8::KUSqXmGQS6m9QD06Bm-avA` |
| List a Publication's Polls | GET | `/publications/{{publicationId}}/polls` | `conn_mod_def::GJ0HCi8x2Bk::sQYa2dETS2-A9ryvSp1hkA` |

### AdvertisementOpportunities

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Publication’s Advertisement Opportunities | GET | `/publications/{{publicationId}}/advertisement_opportunities` | `conn_mod_def::GJ0G-OUNUPI::tyfvNsm6Shu9WOZU6JrcRA` |

### AutomationEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Publication Automation’s Emails | GET | `/publications/{{publicationId}}/automations/{{automationId}}/emails` | `conn_mod_def::GJ0G_sluv5M::8_OFtvLHR-6FYHC1pme2XQ` |

### PollResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Publication Poll’s Responses | GET | `/publications/{{publicationId}}/polls/{{pollId}}/responses` | `conn_mod_def::GJ0HCaSNY9A::rtVv1kPRSpGAApW4NxJomg` |

### PostTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Publication’s Post Templates | GET | `/publications/{{publicationId}}/post_templates` | `conn_mod_def::GJ0HDdNvMSU::I94xgMKTRouUt_YTURo0DQ` |

### ReferralProgram

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Publication’s Referral Program | GET | `/publications/{{publicationId}}/referral_program` | `conn_mod_def::GJ0HD5UTO6E::Ce6XEvCWRIu5Mte0ABVjTg` |

### SegmentResults

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Publication Segment’s Subscriber (Subscription) IDs | GET | `/publications/{{publicationId}}/segments/{{segmentId}}/results` | `conn_mod_def::GJ0HERlvZSk::095zkFEnSwS6nDT95XDnwA` |

### SegmentMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Segment’s Subscribers (Members) | GET | `/publications/{{publicationId}}/segments/{{segmentId}}/members` | `conn_mod_def::GJ0HEcBMQTM::o59uWGGTSkiwrcXCCdfqMw` |

### WebhookTests

| Action | Method | Path | Action id |
|---|---|---|---|
| Test a Publication Webhook Endpoint | GET | `/publications/{{publicationId}}/webhooks/{{endpointId}}/tests` | `conn_mod_def::GJ0HHiNubwg::NhT6X5jgTZ6WLCxDN0caOw` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Identify the Current Workspace | GET | `/workspaces/identify` | `conn_mod_def::GJ0HH7rWbog::Tih7dP4uSReMsYWAISynbg` |

This lists 65 of 69 actions. For anything not here, call `search_one_platform_actions` with platform `beehiiv`. The full catalog is at https://www.withone.ai/knowledge/beehiiv.

## When a call fails

The error comes from Beehiiv, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/beehiiv

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
