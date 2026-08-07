---
name: ch-meetings
description: ChMeetings is a church management platform that provides tools for member databases, event scheduling, donations, communication, and reporting, enabling churches and ministries to manage operations, engage congregations, and integrate administrative workflows through web and mobile applications. Read and write ChMeetings data through One: posts, families, people, contributionbatches, contributionfunds, events and more, 95 actions with real parameter documentation. Use whenever the user asks to look something up in ChMeetings, create or update a record there, or build code against the ChMeetings API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ch-meetings
  generated-from: one-knowledge-base
---

# ChMeetings through One

ChMeetings is a church management platform that provides tools for member databases, event scheduling, donations, communication, and reporting, enabling churches and ministries to manage operations, engage congregations, and integrate administrative workflows through web and mobile applications.

One exposes ChMeetings through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ch-meetings` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ChMeetings is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ChMeetings account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Posts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Post by ID | GET | `/api/v1/posts/{{id}}` | `conn_mod_def::GMa0MxqBv9g::RX19R0a9RDaD-2XNtMNsFA` |
| Get an Organization Post by ID | GET | `/api/v1/organizations/{{organizationId}}/posts/{{postId}}` | `conn_mod_def::GMa0MMqJrpg::K8OeYd0FQly5WAVOc2FNIg` |
| List an Organization's Posts | GET | `/api/v1/organizations/{{organizationId}}/posts` | `conn_mod_def::GMa0MF0M8yA::imtBTX_DR4-HcEJR4PHaRA` |
| List Posts | GET | `/api/v1/posts` | `conn_mod_def::GMa0Mtjz54A::uxph3Su9SV6siVsd-5d_rw` |
| Create a Post | POST | `/api/v1/posts` | `conn_mod_def::GMa0MmTgEZg::5ymZteGQQ1C4JVXoFKxQJA` |
| Create a Post for an Organization | POST | `/api/v1/organizations/{{organizationId}}/posts` | `conn_mod_def::GMa0Ly2bUwg::SJE6HnY3RfKgGpHmefbXHw` |
| Delete a Post by ID | DELETE | `/api/v1/posts/{{id}}` | `conn_mod_def::GMa0Mm4jNVA::WO0r8qGrQMeINvVWizfh9w` |
| Delete an Organization Post by ID | DELETE | `/api/v1/organizations/{{organizationId}}/posts/{{postId}}` | `conn_mod_def::GMa0L68yHSA::SC2MlGdbRKqyYHlDM1nUEg` |
| Remove a Post's Image | DELETE | `/api/v1/posts/{{postId}}/image` | `conn_mod_def::GMa0MtblK8A::m_s9cjNURoukHJqShOlqEw` |
| Set a Post's Image | POST | `/api/v1/posts/{{postId}}/image` | `conn_mod_def::GMa0MvDFdCg::cEU8YvfOQf6y6EqnIMa5xg` |
| Update a Post by ID | PUT | `/api/v1/posts/{{id}}` | `conn_mod_def::GMa0MvL1SJA::2slufE1oSNer7HtpV3aIwA` |

### Families

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Family by ID | GET | `/api/v1/families/{{id}}` | `conn_mod_def::GMa0LMImujg::_HHsIIkES2qqCsQGxclDVQ` |
| List Families | GET | `/api/v1/families` | `conn_mod_def::GMa0LMdNUNA::xQO0SrnxSuibEXqE5k68aA` |
| Add Members to a Family | POST | `/api/v1/families/{{id}}/members` | `conn_mod_def::GMa0K8fKiKg::LFNR6pzTSiKQDvmWlW0S-A` |
| Change a Family Member's Role | PATCH | `/api/v1/families/{{id}}/members/{{personId}}` | `conn_mod_def::GMa0K6sV9kg::mMEq3GfGTD-ojhjOWiZDeQ` |
| Create a Family | POST | `/api/v1/families` | `conn_mod_def::GMa0K65-QuA::E_G72ua9SE69w8v_gKMbZg` |
| Delete a Family | DELETE | `/api/v1/families/{{id}}` | `conn_mod_def::GMa0LMj9AIg::LuHM0xJXRtylpX3q2bms3w` |
| Remove a Member from a Family | DELETE | `/api/v1/families/{{id}}/members/{{personId}}` | `conn_mod_def::GMa0LMnCX-A::EqfoWuQQT8CO9RoEE-iwaw` |
| Replace Family Members for a Family | PUT | `/api/v1/families/{{id}}/members` | `conn_mod_def::GMa0LT1GcRg::HqLcfkrEQI6IzSyeS3DM3g` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Person by ID | GET | `/api/v1/people/{{id}}` | `conn_mod_def::GMa0MeKCPmA::P63yIxNlSPKfE78QKR_J6g` |
| List an Organization's People | GET | `/api/v1/organizations/{{organizationId}}/people` | `conn_mod_def::GMa0Lzo7Sdg::b2JNzbOaR4-82I3iRW8I1g` |
| List People | GET | `/api/v1/people` | `conn_mod_def::GMa0MXFi6Ig::89hXqejESVe9d4H6PnM4wA` |
| Create a Person | POST | `/api/v1/people` | `conn_mod_def::GMa0MN12xlg::sT7A-eqxSl6YrQ85YJH8lQ` |
| Delete a Person by ID | DELETE | `/api/v1/people/{{id}}` | `conn_mod_def::GMa0MVCgX2g::szf1chdIQdO-ZfA4jZZ7bA` |
| Set a Person's Profile Photo | POST | `/api/v1/people/{{personId}}/photo` | `conn_mod_def::GMa0MeW5yoA::Y3fmxwHARL6EJrryKa6pbg` |
| Update a Person by ID | PUT | `/api/v1/people/{{id}}` | `conn_mod_def::GMa0MepXoUg::1an8aYZQRca5TXdj0nkguw` |

### ContributionBatches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contribution Batch by ID | GET | `/api/v1/contributions/batches/{{id}}` | `conn_mod_def::GMa0KaKpang::QPcEJOitTaW7qGg-BDF4xQ` |
| List Contribution Batches | GET | `/api/v1/contributions/batches` | `conn_mod_def::GMa0Kj7a0DA::EEAQLOR6TiWzsxcF1aagsw` |
| Close a Contribution Batch | POST | `/api/v1/contributions/batches/{{id}}/close` | `conn_mod_def::GMa0KK66aOA::LxC64SkqTwOBHidKh6PFPg` |
| Create a New Contribution Batch | POST | `/api/v1/contributions/batches` | `conn_mod_def::GMa0KTAISug::aZo9hvDkSEaLOES8rK0zsQ` |
| Reopen a Contribution Batch | POST | `/api/v1/contributions/batches/{{id}}/reopen` | `conn_mod_def::GMa0KrejJag::qJrwBWPZST2cCowoptbhJA` |
| Update a Contribution Batch | PUT | `/api/v1/contributions/batches/{{id}}` | `conn_mod_def::GMa0KrWWACg::kXizlGq5Q_WfZOByu4rdkA` |

### ContributionFunds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contribution Fund by ID | GET | `/api/v1/contributions/funds/{{id}}` | `conn_mod_def::GMa0KcgF6jA::Fa37j4QwSfS967bdYdOgIA` |
| List Contribution Funds | GET | `/api/v1/contributions/funds` | `conn_mod_def::GMa0KkMgq4g::5tXnT-AURf-8uDGaASMgEQ` |
| Create a Contribution Fund | POST | `/api/v1/contributions/funds` | `conn_mod_def::GMa0KTCqS5A::HiHvoDp2QRSxLXNtd07ACQ` |
| Delete a Contribution Fund | DELETE | `/api/v1/contributions/funds/{{id}}` | `conn_mod_def::GMa0KaHSdyA::UQOUAGcZSK6-YrF0d08kgA` |
| Update a Contribution Fund by ID | PUT | `/api/v1/contributions/funds/{{id}}` | `conn_mod_def::GMa0Kr9kyeA::o6iIeZw0RHWiBCMh8dUGeA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event by ID | GET | `/api/v1/events/{{eventId}}` | `conn_mod_def::GMa0Kzvb5ug::9Y6jYfprS6uvoWNxnTigJA` |
| Get Event Statistics for an Event | GET | `/api/v1/events/{{eventId}}/statistics` | `conn_mod_def::GMa0K0RStgg::uMwfFMxhTMyhrGmFLK3TRg` |
| List an Event's Occurrences | GET | `/api/v1/events/{{eventId}}/occurrences` | `conn_mod_def::GMa0LEAjGNg::hsN_-uiVRTu5FZDd5lw66g` |
| List an Organization's Events | GET | `/api/v1/organizations/{{organizationId}}/events` | `conn_mod_def::GMa0LqvevSg::kBkkpjb5SuGaKyhKas4kHQ` |
| List Events | GET | `/api/v1/events` | `conn_mod_def::GMa0KyqvyKg::mGtSIEanRFmmuPIMHL_t2A` |

### PeopleNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Person's Notes | GET | `/api/v1/people/{{personId}}/notes` | `conn_mod_def::GMa0LbjROiA::Q0Mewqs4Tfqhr4bqlK73_A` |
| Create a Note for a Person | POST | `/api/v1/people/{{personId}}/notes` | `conn_mod_def::GMa0LbNFoCg::lJc1fYFGSyuyDlAxsxXdxw` |
| Delete a Member Note for a Person | DELETE | `/api/v1/people/{{personId}}/notes/{{noteId}}` | `conn_mod_def::GMa0LbqGZDA::aYt2bX15SDCHLjpY3OhyEg` |
| Update a Person's Note | PUT | `/api/v1/people/{{personId}}/notes/{{noteId}}` | `conn_mod_def::GMa0LaSxQ8g::boJLFscSQU-vp4OoxPU7EQ` |

### PaymentMethods

| Action | Method | Path | Action id |
|---|---|---|---|
| List Payment Methods | GET | `/api/v1/contributions/payment-methods` | `conn_mod_def::GMa0KsGw-Bg::jBPobFHrQI-qr-pSkd95mA` |
| Create a Payment Method | POST | `/api/v1/contributions/payment-methods` | `conn_mod_def::GMa0KSJL-yA::Ht4yKxlwQOiu6ioRcnimoA` |
| Delete a Payment Method | DELETE | `/api/v1/contributions/payment-methods/{{id}}` | `conn_mod_def::GMa0KZNM84g::oGYfbyM2QxOde5NoXfR6aA` |

### Contributions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contributions | GET | `/api/v1/contributions` | `conn_mod_def::GMa0KkVKShg::EDUYlth7SkqRLFo4QCrolA` |
| Create a Contribution | POST | `/api/v1/contributions` | `conn_mod_def::GMa0KSov8IA::G7IY7RThSiSlvVSdGhuXdA` |
| Delete a Contribution | DELETE | `/api/v1/contributions/{{id}}` | `conn_mod_def::GMa0KZH47Kg::xu-E3wdCTUG21lCSo_peGw` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Groups | GET | `/api/v1/organizations/{{organizationId}}/groups` | `conn_mod_def::GMa0Lyp19yg::6RrkSNFQSCmXfn9WnOnkJw` |
| List Groups | GET | `/api/v1/groups` | `conn_mod_def::GMa0LTztOUA::PiZ0qIm_SN2LzNE7hJhUEQ` |
| Remove a Person from a Group | DELETE | `/api/v1/groups/{{groupId}}/memberships/{{personId}}` | `conn_mod_def::GMa0LT_1e-g::vpxZnFJTRISlptivK-Qn8Q` |

### GroupMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Person to a Group | POST | `/api/v1/groups/{{groupId}}/memberships` | `conn_mod_def::GMa0LT0mcbA::qApqqmO3TKSHl5aG19cQ8g` |
| Add a Person to a Group in an Organization | POST | `/api/v1/organizations/{{organizationId}}/groups/{{groupId}}/memberships` | `conn_mod_def::GMa0LrA9XFg::11FSVlYmS1SbWd45VC8kvA` |
| Remove a Person from a Group in an Organization | DELETE | `/api/v1/organizations/{{organizationId}}/groups/{{groupId}}/memberships/{{personId}}` | `conn_mod_def::GMa0LzDcIkA::i2s_iBuyR3awJlYi18preA` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization by ID | GET | `/api/v1/organizations/{{organizationId}}` | `conn_mod_def::GMa0Lid72sA::DOwl27bzQpW-0Rgj3QPZ9w` |
| List a Person's Organizations | GET | `/api/v1/people/{{personId}}/organizations` | `conn_mod_def::GMa0Me_48dg::L-UdJCQPQwCwE4sJlvBxEg` |
| List Organizations | GET | `/api/v1/organizations` | `conn_mod_def::GMa0LjHF7vg::tuVTXhNoTiqMpPwnASylvw` |

### OrganizationPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove an Organization Post's Image | DELETE | `/api/v1/organizations/{{organizationId}}/posts/{{postId}}/image` | `conn_mod_def::GMa0MOCOkZA::8twNbfMERE-9GOfQSzHIiA` |
| Set an Organization Post's Image | POST | `/api/v1/organizations/{{organizationId}}/posts/{{postId}}/image` | `conn_mod_def::GMa0MNF8ebA::pWmUBb58S4qmVbjNjN_2Cw` |
| Update an Organization Post by ID | PUT | `/api/v1/organizations/{{organizationId}}/posts/{{postId}}` | `conn_mod_def::GMa0MMhKEyA::Vw410KQPS8yydIN4sqXSrg` |

### ContributionPaymentMethods

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contribution Payment Method by ID | GET | `/api/v1/contributions/payment-methods/{{id}}` | `conn_mod_def::GMa0Kk01PIg::UOIooTrpTXG7rQOsL2zQiQ` |
| Update a Contribution Payment Method | PUT | `/api/v1/contributions/payment-methods/{{id}}` | `conn_mod_def::GMa0Krd06bg::JSONX1bRQ6Kk2qwqdcyKVw` |

### AttendanceSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Attendance Summary for an Occurrence | GET | `/api/v1/occurrences/{{occurrenceId}}/attendance/summary` | `conn_mod_def::GMa0KznHJDA::cwxR3dw2SsiKPaNDkL6Dvg` |
| Get Attendance Summary for an Organization Occurrence | GET | `/api/v1/organizations/{{organizationId}}/occurrences/{{occurrenceId}}/attendance/summary` | `conn_mod_def::GMa0LjdVcPA::6L1RgpyOS2CtRvV4rtV5rw` |

### Attendance

| Action | Method | Path | Action id |
|---|---|---|---|
| List Attendance for an Occurrence | GET | `/api/v1/occurrences/{{occurrenceId}}/attendance` | `conn_mod_def::GMa0K9yJS1g::bR3VWK_CQ0yK6j3fst2XaQ` |
| List Attendance for an Organization Occurrence | GET | `/api/v1/organizations/{{organizationId}}/occurrences/{{occurrenceId}}/attendance` | `conn_mod_def::GMa0LriS1FA::abxqkv36SuKTaL9iwXqh1g` |

### GroupPeople

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Group People | GET | `/api/v1/groups/people` | `conn_mod_def::GMa0LT1vZXg::UIE9iAV_S2m378u1BrtwjQ` |
| List Group People in an Organization | GET | `/api/v1/organizations/{{organizationId}}/groups/{{groupId}}/memberships` | `conn_mod_def::GMa0Ly5Pi8A::vJcuQjbjSCWA1rXA9bDFYg` |

### PostCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Post Categories | GET | `/api/v1/organizations/{{organizationId}}/posts/categories` | `conn_mod_def::GMa0L7t1yvA::ggXkb4ZgStqUZ7yHbySCsg` |
| List Post Categories | GET | `/api/v1/posts/categories` | `conn_mod_def::GMa0MlviYyA::4FmOXO-4ScOIfAvZ_cWpRA` |

### Countries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Countries | GET | `/api/v1/address/countries` | `conn_mod_def::GMa0KImG6UA::5FaA94qfQfyHqc2Cw6DPLg` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Campaigns | GET | `/api/v1/campaigns` | `conn_mod_def::GMa0KKxxdsg::_SDWO0tHRtCxT14xpQXTIg` |

### CampaignPledges

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Campaign's Pledges | GET | `/api/v1/campaigns/{{id}}/pledges` | `conn_mod_def::GMa0KLN6z1A::id3t4Sc0QmKw0zcXdS_hnQ` |

### States

| Action | Method | Path | Action id |
|---|---|---|---|
| Get States by Country ID | GET | `/api/v1/address/states` | `conn_mod_def::GMa0KLpOvBA::Me_JrtxpRuGBRxnSBJZ-qQ` |

### ContributionsBatches

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Contributions Batch | DELETE | `/api/v1/contributions/batches/{{id}}` | `conn_mod_def::GMa0KS4ZLOg::qNAgdugASOaSGUF6dn0gBA` |

### MembersWithoutEnvelopes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Members Without Envelopes | GET | `/api/v1/contributions/members/no-envelopes` | `conn_mod_def::GMa0Kkj-Iog::PbYTaUmZQX2zfMuYsz6Jag` |

### Occurrences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Occurrence by ID | GET | `/api/v1/occurrences/{{occurrenceId}}` | `conn_mod_def::GMa0KyJCtbg::5LF6rzw3TIWpqZBd2gmLnw` |

### FamilyRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Family Roles | GET | `/api/v1/families/family-roles` | `conn_mod_def::GMa0LMi2nQA::BIIrYxzuT8aMpDBX7mhClw` |

### MemberNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Member Note by ID | GET | `/api/v1/people/{{personId}}/notes/{{noteId}}` | `conn_mod_def::GMa0LbYsURA::8beASdfvT-OyCSp2YEMvWQ` |

### OrganizationOccurrences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Occurrence by ID | GET | `/api/v1/organizations/{{organizationId}}/occurrences/{{occurrenceId}}` | `conn_mod_def::GMa0Li1tgbg::6nbcMOvBRNSf6b8OMclFcw` |

### OrganizationEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Event by ID | GET | `/api/v1/organizations/{{organizationId}}/events/{{eventId}}` | `conn_mod_def::GMa0LjtbzmA::oGB3a5KkThSpFmDnR9UOpw` |

### EventAttendanceStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Event Attendance Statistics for an Organization | GET | `/api/v1/organizations/{{organizationId}}/events/{{eventId}}/statistics` | `conn_mod_def::GMa0LqavArg::GIQ_vq4NRoeOfa83AWCUsA` |

### EventOccurrences

| Action | Method | Path | Action id |
|---|---|---|---|
| List Event Occurrences for an Organization | GET | `/api/v1/organizations/{{organizationId}}/events/{{eventId}}/occurrences` | `conn_mod_def::GMa0LriTHog::I_8GPeDHQX2lRo7aTnzpNA` |

### OrganizationPostLikes

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization Post's Likes | GET | `/api/v1/organizations/{{organizationId}}/posts/{{postId}}/likes` | `conn_mod_def::GMa0L7LJn6g::IBLRQEHkRo-TjahVNuXSHg` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments for an Organization Post | GET | `/api/v1/organizations/{{organizationId}}/posts/{{postId}}/comments` | `conn_mod_def::GMa0L8qQP3A::K676oq0CSE-IpHzekInHwA` |

### Genders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Genders | GET | `/api/v1/people/genders` | `conn_mod_def::GMa0MUcEbVA::asQP6-eCSzCj4i2t8QNP9w` |

This lists 90 of 95 actions. For anything not here, call `search_one_platform_actions` with platform `ch-meetings`. The full catalog is at https://www.withone.ai/knowledge/ch-meetings.

## When a call fails

The error comes from ChMeetings, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ch-meetings

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
