---
name: mixpanel-query
description: Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions. Read and write Mixpanel Query data through One: events, funnels, eventactivitystream, eventsproperties, engageprofiles, eventpropertyvalues and more, 20 actions with real parameter documentation. Use whenever the user asks to look something up in Mixpanel Query, create or update a record there, or build code against the Mixpanel Query API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mixpanel-query
  generated-from: one-knowledge-base
---

# Mixpanel Query through One

Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions.

One exposes Mixpanel Query through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mixpanel-query` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mixpanel Query is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mixpanel Query account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Aggregate Event Counts | GET | `/api/query/events` | `conn_mod_def::GJ4-uisjABo::mMnMFlTcRdyWdkI4X9fUiw` |
| Get Today’s Top Events | GET | `/api/query/events/top` | `conn_mod_def::GJ4-utKnGWA::yjm_cDa0Ru26fLT1h5raPA` |

### Funnels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Saved Funnels (Project) | GET | `/api/query/funnels/list` | `conn_mod_def::GJ4-uthoDvY::JZzgmK7ASdKuuZ4ntvA7Lw` |
| Query a Saved Funnel Report | GET | `/api/query/funnels` | `conn_mod_def::GJ4-u-LoBXk::8hnXzdkrRW2fma1me5TxEg` |

### EventActivityStream

| Action | Method | Path | Action id |
|---|---|---|---|
| Query a Profile’s Event Activity Stream | GET | `/api/query/stream/query` | `conn_mod_def::GJ4-ue_6x0A::LHPnV4ZsQVml1ddVzIFweg` |

### EventsProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Aggregated Event Property Values | GET | `/api/query/events/properties` | `conn_mod_def::GJ4-ukmsplM::3739wEFjTN2Gq6zLZss33g` |

### EngageProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Profiles (Engage) | POST | `/api/query/engage` | `conn_mod_def::GJ4-ueczIyM::qcPEBbknR_yR_gmzjkJm-A` |

### EventPropertyValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Top Event Property Values | GET | `/api/query/events/properties/values` | `conn_mod_def::GJ4-utrBQfc::66oOtlS6Rg2Qy2OjdyCf6A` |

### EventNames

| Action | Method | Path | Action id |
|---|---|---|---|
| List Top Event Names (Last 31 Days) | GET | `/api/query/events/names` | `conn_mod_def::GJ4-uykgbr8::LVWuZrsuQwCTLjSbO2jcCA` |

### Insights

| Action | Method | Path | Action id |
|---|---|---|---|
| Query a Saved Insights Report (by Bookmark ID) | GET | `/api/query/insights` | `conn_mod_def::GJ4-u7F2v9o::grmsjvJ9R9-UH9fxTfnkfw` |

### RetentionReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Query a Retention Report | GET | `/api/query/retention` | `conn_mod_def::GJ4-u-kC-I4::Jr_KGSPJTD6ECwWo9n08Wg` |

### MixpanelJql

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Custom JQL Query | POST | `/api/query/jql` | `conn_mod_def::GJ4-u7hxq9E::4hVvsALbTQi6Z5lP0-yHJw` |

### CurrentUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/api/app/me` | `conn_mod_def::GJ4-vGmRRfA::xIvRYoHmTwS7fshbYSnlug` |

### NumericSegmentation

| Action | Method | Path | Action id |
|---|---|---|---|
| Numerically Bucket (Numeric Segmentation Query) | GET | `/api/query/segmentation/numeric` | `conn_mod_def::GJ4-vJJH_1k::kZMFb8CPRlSr6yYvot-elg` |

### SegmentationSum

| Action | Method | Path | Action id |
|---|---|---|---|
| Numerically Sum (Segmentation Sum Query) | GET | `/api/query/segmentation/sum` | `conn_mod_def::GJ4-vIQKjb8::oVrkQKbzQauKDwba7gmBPg` |

### SegmentationReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Segmentation Report (Query Segmentation) | GET | `/api/query/segmentation` | `conn_mod_def::GJ4-vJhIXsw::o3e1n51yTpyNhjfxI9Uuxg` |

### EventProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Top Event Properties | GET | `/api/query/events/properties/top` | `conn_mod_def::GJ4-usv7IsY::4Zt0WKCSQiKPB1zlsHUmWw` |

### RetentionAddiction

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Frequency Report (Retention “Addiction”) | GET | `/api/query/retention/addiction` | `conn_mod_def::GJ4-u7juxIk::GtA9QhZRR82Rr3NAAIH6pA` |

### SegmentationAverage

| Action | Method | Path | Action id |
|---|---|---|---|
| Numerically Average (Segmentation Query) | GET | `/api/query/segmentation/average` | `conn_mod_def::GJ4-vL7W1cE::2VI9yjrzTR6iFt3SLtUK-Q` |

### Cohorts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Saved Cohorts | POST | `/api/query/cohorts/list` | `conn_mod_def::GJ4-ueKyIbk::97iHcOpFS5SjJPzRuO1Ghw` |

## When a call fails

The error comes from Mixpanel Query, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mixpanel-query

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
