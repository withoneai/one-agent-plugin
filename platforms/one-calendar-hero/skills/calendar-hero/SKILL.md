---
name: calendar-hero
description: CalendarHero is meeting scheduling software that automates booking workflows for video calls and group meetings, with integrations for calendars, conferencing, CRM, ATS, and file tools, allowing teams to reduce back-and-forth, prepare with attendee insights, and streamline meeting tasks. Read and write CalendarHero data through One: contacts, contact, meetingtasks, usersettings, webhookevent, userdirectories and more, 40 actions with real parameter documentation. Use whenever the user asks to look something up in CalendarHero, create or update a record there, or build code against the CalendarHero API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: calendar-hero
  generated-from: one-knowledge-base
---

# CalendarHero through One

CalendarHero is meeting scheduling software that automates booking workflows for video calls and group meetings, with integrations for calendars, conferencing, CRM, ATS, and file tools, allowing teams to reduce back-and-forth, prepare with attendee insights, and streamline meeting tasks.

One exposes CalendarHero through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `calendar-hero` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm CalendarHero is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real CalendarHero account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Count | GET | `/contact/count` | `conn_mod_def::GMcAGinmBIg::vlN8gkaISlyAG_kFapL_8w` |
| Get Contacts | GET | `/contact` | `conn_mod_def::GMcAGhBO5pg::ntRuIiHIT02QlLv5loixAA` |
| Delete a Contact | DELETE | `/contact/{{id}}` | `conn_mod_def::GMcAGfZmIlA::5dZlJ38tQw6y8O5QOpRq7g` |

### Contact

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact by ID | GET | `/contact/{{id}}` | `conn_mod_def::GMcAGgw6HcA::AJ0-r7gQTZ61fzSJ_TKn3w` |
| Create a Contact | POST | `/contact` | `conn_mod_def::GMcAGgBi1fA::f5OgneLiRI2r2JtFtEW8VQ` |
| Update a Contact | PUT | `/contact/{{id}}` | `conn_mod_def::GMcAGo9tp-g::KpbfWRLxTuSHQeBi6FtC6g` |

### MeetingTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Meeting Tasks | GET | `/meeting/tasks` | `conn_mod_def::GMcAGw4_M5g::1DuQumatQhCrZ8cCAo6x3g` |
| Delete a Meeting Task | DELETE | `/meeting/tasks/{{id}}` | `conn_mod_def::GMcAGojWtIg::SI-sgN51TceazUFkX4kCJQ` |
| Remind a Meeting Task Contact | PUT | `/meeting/tasks/{{id}}/remind` | `conn_mod_def::GMcAGpscfEA::-QBuetxmRM2JpxqVcQFBZg` |

### UserSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Restricted Apps in User Settings | PUT | `/user/settings/restrictedapps` | `conn_mod_def::GMcAHKXDBgg::MKRwnX8DSgSSWpZ_Newhmw` |
| Update the Signed-in User's Address Settings | PUT | `/user/settings/address` | `conn_mod_def::GMcAHK62QLg::2ckN91drQMm-3CqLWgRV7g` |
| Update User Work Location Settings | PUT | `/user/settings/worklocation` | `conn_mod_def::GMcAHKJuBtg::X4elimWfTiaBdvnCUFwssg` |

### WebhookEvent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Event | GET | `/webhook/{{event}}` | `conn_mod_def::GMcAHalzTyg::Y7mo6aXpRk2z3RugU3sQ2Q` |
| Delete a Webhook Event | DELETE | `/webhook/{{event}}` | `conn_mod_def::GMcAHbzqzJg::qZfovKbET6i7Utxqnex6ow` |
| Post Webhook Event | POST | `/webhook/{{event}}` | `conn_mod_def::GMcAHauW7pA::Sir4CU3VQ9qoJSfAmU8GdQ` |

### UserDirectories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Directory by Directory ID | GET | `/user/directories/{{uuid}}` | `conn_mod_def::GMcAHAtPzvg::CsmDak18QJ2tYAqMqLWqXA` |
| Delete a User Directory | DELETE | `/user/directories/{{uuid}}` | `conn_mod_def::GMcAG3QoirA::HHSRCNLuQ4aA-F0txGmpKg` |

### Directories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User's Directories | GET | `/user/directories` | `conn_mod_def::GMcAHBt69BA::UDg6x9G-RbixFWb3SWeUjw` |
| Add a New Directory | POST | `/user/directories` | `conn_mod_def::GMcAG3ktzgg::aWU56P9mQcGkwVzlayrIPA` |

### MeetingTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Meeting Types | GET | `/user/meeting` | `conn_mod_def::GMcAHA27Kag::BU5M4kJUTT2p645rVQ2X6A` |
| Update the User's Meeting Type | PUT | `/user/meeting` | `conn_mod_def::GMcAHTy26fg::XIQud_D9SrWFRypcmVlooQ` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the User | GET | `/user` | `conn_mod_def::GMcAHKMPEWg::vIXWnTY7TPqUKPYdnl6ZfQ` |
| Update the User | PUT | `/user` | `conn_mod_def::GMcAHcN_UuA::oraaI5h9QAarzvZa8lnMug` |

### MeetingRequest

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Meeting Request | POST | `/meeting/tasks` | `conn_mod_def::GMcAGo06KgA::OfixYM36RiWMPw_G8mTGWw` |

### MeetingCategoriesStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Meeting Categories Stats | GET | `/meeting/categories` | `conn_mod_def::GMcAGo9Vm6g::-jxdhn0DTgWJ-30PScCi9A` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a User's Message into the Assistant | POST | `/msg/web` | `conn_mod_def::GMcAGwd7CgA::y2D7IqgVSJKk7vlhqbtXmw` |

### ReplyMessage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Reply Message for the User | GET | `/msg/web` | `conn_mod_def::GMcAGwfUvtg::L9jRodGQRhirmDEvCxgdDQ` |

### Meetings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Meetings Within a Timeframe | GET | `/meeting` | `conn_mod_def::GMcAGw4y6xA::Myh5wmaOQxSR6eQdFvgu8Q` |

### Provider

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Provider | GET | `/provider` | `conn_mod_def::GMcAGxbNqWg::GB_eDVpZQOiav4rIvfGS-Q` |

### SearchResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Search Result by ID | GET | `/search/{{id}}` | `conn_mod_def::GMcAG3w6uBg::eNQQXftaS9GixgU4rnutcw` |

### Meeting

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a New Meeting Type for a User | POST | `/user/meeting/{{type}}` | `conn_mod_def::GMcAG4ymPag::n1zaqQbBTQG6NBwCOEvL5Q` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Across the User's Integrations | GET | `/search` | `conn_mod_def::GMcAG6XQkAg::cquOeknSR8SKlXWNd33ymg` |

### UserCalendly

| Action | Method | Path | Action id |
|---|---|---|---|
| Import a User's Calendly Event Types | GET | `/user/calendly` | `conn_mod_def::GMcAHCYpa4A::YsBG42sRQpivdJX1QtA3bA` |

### UserMeetingTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a User Meeting Type | DELETE | `/user/meeting/{{type}}` | `conn_mod_def::GMcAHDxL3OA::qYkl0fKWTBur1PDh0ii45Q` |

### UserSettingsInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Update User Settings Info | PUT | `/user/settings/info` | `conn_mod_def::GMcAHLfbzjg::6vBHtwGbRTGRdvS0pyl0tA` |

### UserSavings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Savings | GET | `/user/savings` | `conn_mod_def::GMcAHSGDqDg::UZI_KeK6SP-6Ra0wXZGg9A` |

### UserOrganization

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the User's Organization | GET | `/user/org` | `conn_mod_def::GMcAHSb-8mg::g_kjddXWTZWJ5hUcqf_ZlA` |

### UserDirectory

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a User Directory | PUT | `/user/directories/{{uuid}}` | `conn_mod_def::GMcAHSs5NQA::7e_ksrHkTY-6gCO2ZRGRVg` |

### MeetingType

| Action | Method | Path | Action id |
|---|---|---|---|
| Share a Meeting Type | POST | `/user/meeting/{{type}}/share` | `conn_mod_def::GMcAHS6IOPA::t2OxFzjdRjemVRBudToLmw` |

### WebhookEventSample

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Event Sample | GET | `/webhook/{{event}}/sample` | `conn_mod_def::GMcAHcCQcFA::HPUa3th5RsqRiSy4vh1acg` |

## When a call fails

The error comes from CalendarHero, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/calendar-hero

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
