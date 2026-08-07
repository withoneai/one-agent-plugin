---
name: simplero
description: Simplero is an all-in-one business platform for coaches, course creators, and thought leaders that combines courses, community, email, CRM, payments, and automations, allowing users to run sales, customer communication, and digital programs from a single system. Read and write Simplero data through One: customers, pages, courses, courselessons, landingpages, tickets and more, 719 actions with real parameter documentation. Use whenever the user asks to look something up in Simplero, create or update a record there, or build code against the Simplero API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: simplero
  generated-from: one-knowledge-base
---

# Simplero through One

Simplero is an all-in-one business platform for coaches, course creators, and thought leaders that combines courses, community, email, CRM, payments, and automations, allowing users to run sales, customer communication, and digital programs from a single system.

One exposes Simplero through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `simplero` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Simplero is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Simplero account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/api/v2/customers/{{id}}` | `conn_mod_def::GMPzbdwcHFg::cu4Ltde2QEa0kYjuLx-0Fw` |
| List Customers | GET | `/api/v2/customers` | `conn_mod_def::GMPzcBaQA8A::l3N6fgutS46I-IYnDF9Yew` |
| Add Badge for a Customer | POST | `/api/v2/customers/{{id}}/actions/add_badge` | `conn_mod_def::GMPza32WPmg::t_U8YH3gT9aHP2f8ulKtBQ` |
| Add Paid Purchase to a Customer's Product | POST | `/api/v2/customers/{{id}}/actions/product_add_paid_purchase` | `conn_mod_def::GMPza4KpWLg::QjTnBnz9SRGtYhD_PKEDdw` |
| Add Tag to a Customer | POST | `/api/v2/customers/{{id}}/actions/add_tag` | `conn_mod_def::GMPza5YyvDA::eqCM7qtKR9WEQLqBJZoH2w` |
| Add to Affiliate Program for a Customer | POST | `/api/v2/customers/{{id}}/actions/add_to_affiliate_program` | `conn_mod_def::GMPza4iLMNA::cRm-u2SZTjSBVH4ai5WRag` |
| Add to Coaching Program for a Customer | POST | `/api/v2/customers/{{id}}/actions/coaching_client_add` | `conn_mod_def::GMPzbBFHO_g::IE-CmhM-TSmMlBlpRUvmsQ` |
| Add to Conversation for a Customer | POST | `/api/v2/customers/{{id}}/actions/add_to_conversation` | `conn_mod_def::GMPza_oAijA::xYwtwxDTTQCn4p11InnUFg` |
| Add to Meta Custom Audience for a Customer | POST | `/api/v2/customers/{{id}}/actions/add_to_meta_custom_audience` | `conn_mod_def::GMPzbA7PSqA::rnNlM5wCQ_2MggeZ5RUGuw` |
| Adjust Lead Score for a Customer | POST | `/api/v2/customers/{{id}}/actions/adjust_lead_score` | `conn_mod_def::GMPzbA7X3fA::q0vQPPuwQqqrnxARTOyS8w` |
| Approve Registration for an Event for a Customer | POST | `/api/v2/customers/{{id}}/actions/approve_registration_for_an_event` | `conn_mod_def::GMPzbBLBj4g::MEfyAifySpyvlDE-KoPqwQ` |
| Archive a Contact | POST | `/api/v2/customers/{{id}}/actions/mark_as_archived` | `conn_mod_def::GMPzbH0PWgA::G-rWdMIHT9WVNavFpp62Yw` |

99 more Customers actions are available through search.

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Page | GET | `/api/v2/pages/{{id}}` | `conn_mod_def::GMPzjwlAOIg::k2-y4u3HQlCxL2Ah4KRdaw` |
| Get Builder Node Type Schema for a Page | GET | `/api/v2/pages/{{id}}/builder/content/node_types/detail` | `conn_mod_def::GMPzj0A3QCA::EvV4LRzuSHubty1nw875yQ` |
| Get Builder Node Type Settings Detail for a Page | GET | `/api/v2/pages/{{id}}/builder/content/node_types/settings_detail` | `conn_mod_def::GMPzj95ld6g::mw-V8md4TS6qC9CUyFHw-A` |
| Get HTML Section Content for a Page | GET | `/api/v2/pages/{{id}}/builder/content/html_section` | `conn_mod_def::GMPzj-MoTxg::DDCox9wERD-YG5TcvcYPxA` |
| List Available Builder Node Types for a Page | GET | `/api/v2/pages/{{id}}/builder/content/node_types` | `conn_mod_def::GMPzkF7XKoA::U-iSHPBLQTehQzqVMr1ipw` |
| List Pages | GET | `/api/v2/pages` | `conn_mod_def::GMPzkINGxbA::ISGMfSbcSUK47Y7X3f3PHA` |
| Add Labels to a Page | POST | `/api/v2/pages/{{id}}/actions/add_labels` | `conn_mod_def::GMPzjbvYG-g::J9uipRKUT36xWQ0nIDPnAA` |
| Add to Main Nav for a Page | POST | `/api/v2/pages/{{id}}/actions/add_to_main_nav` | `conn_mod_def::GMPzjaiLisA::M6xID_MAT6myjmipBUq0zQ` |
| Clone a Page to Another Site | POST | `/api/v2/pages/{{id}}/actions/clone_to_site` | `conn_mod_def::GMPzjZ7j5JA::uA5mL7WRScaOHlTq4dtBaA` |
| Convert a Page to a Landing Page | POST | `/api/v2/pages/{{id}}/actions/convert_to_landing_page` | `conn_mod_def::GMPzkugZFMg::6iXLz8qtSmmA1P8JydZb-w` |
| Convert to Builder V2 for a Page | POST | `/api/v2/pages/{{id}}/actions/convert_to_builder_v2` | `conn_mod_def::GMPzjZvAMng::jrCJp8SRSD6lQOKViWbH4Q` |
| Create a Builder Doc Node for a Page | POST | `/api/v2/pages/{{id}}/builder/content/nodes` | `conn_mod_def::GMPzjjqMDXg::PyVBeQRzTleV1MvR_-KZ5A` |

32 more Pages actions are available through search.

### Courses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Course | GET | `/api/v2/courses/{{id}}` | `conn_mod_def::GMPzZ39FUpg::b6QeKLlIQ_26dCweBwebAA` |
| List Courses | GET | `/api/v2/courses` | `conn_mod_def::GMPzaCJ2f6A::cU9Pz6SSR8Sivx4GRgUK5A` |
| Add Labels to a Course Action | POST | `/api/v2/courses/{{id}}/actions/add_labels` | `conn_mod_def::GMPzZnK9Vag::hyXYOBkrS7Kq_uSyA65Z-Q` |
| Allow Downloads for a Course | POST | `/api/v2/courses/{{id}}/actions/allow_downloads` | `conn_mod_def::GMPzZobVtpg::RNM1NXeDRXCRnjCYuc2C1w` |
| Create a Course | POST | `/api/v2/courses` | `conn_mod_def::GMPzZxk0kag::HZlp3D62QVeORf4RW0UJAw` |
| Delete Ai Generated Summaries Using Courses Actions | POST | `/api/v2/courses/{{id}}/actions/delete_ai_generated_summaries` | `conn_mod_def::GMPzZw4TnaA::PrC8p2gSQvqMWIueHERP_Q` |
| Disable Autoplay for a Course | POST | `/api/v2/courses/{{id}}/actions/disable_autoplay` | `conn_mod_def::GMPzZwpfOJA::368-SOI2Sr-m7JNZCtotNw` |
| Drip a Course | POST | `/api/v2/courses/{{id}}/actions/drip` | `conn_mod_def::GMPzZwQkINA::CXC6TeuORImWz9HcJva0pA` |
| Duplicate a Course | POST | `/api/v2/courses/{{id}}/actions/duplicate` | `conn_mod_def::GMPzZwQZYtA::rOO3QXTLS0aUAUsgdQNSkQ` |
| Duplicate to Other Site for a Course | POST | `/api/v2/courses/{{id}}/actions/duplicate_to_other_site` | `conn_mod_def::GMPzZ5DEHOg::-858P4dGS4Spl6iJcL4Saw` |
| Enable Autoplay for a Course | POST | `/api/v2/courses/{{id}}/actions/enable_autoplay` | `conn_mod_def::GMPzZ4Yjq1A::t7RwYGJXRkqpYaZpS6Dahw` |
| Exclude From New Content for a Course | POST | `/api/v2/courses/{{id}}/actions/exclude_from_new_content` | `conn_mod_def::GMPzZ4HkPIA::7cmeJ51bQ2GA2sF7oJaD8A` |

20 more Courses actions are available through search.

### CourseLessons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Course Lesson by ID | GET | `/api/v2/course_lessons/{{id}}` | `conn_mod_def::GMPzZFu2TxA::EbkaHMK-TkGylvWp7UInBw` |
| List Course Lessons | GET | `/api/v2/course_lessons` | `conn_mod_def::GMPzZHscxrg::AUDldKgFRpuRYDO_fLqQ9w` |
| Allow Multiple Completions for a Course Lesson | POST | `/api/v2/course_lessons/{{id}}/actions/allow_multiple_completions` | `conn_mod_def::GMPzY3HaRFA::aM517ND5SvyEacvSwiXQyw` |
| Apply Loudness Filter to a Course Lesson | POST | `/api/v2/course_lessons/{{id}}/actions/apply_loudness_filter` | `conn_mod_def::GMPzY28Pg8A::YhPVi1BMQ2CI7LLAV_yCLg` |
| Create a Course Lesson | POST | `/api/v2/course_lessons` | `conn_mod_def::GMPzY-JAAnA::Gi72QSf_S86NSb4foEwnfQ` |
| Deepgram Using Course Lessons | POST | `/api/v2/course_lessons/{{id}}/actions/deepgram` | `conn_mod_def::GMPzZWwwlNA::6q6z2O9CSx6ji6-VvYPmiA` |
| Delete AI Generated Summary for a Course Lesson | POST | `/api/v2/course_lessons/{{id}}/actions/delete_ai_generated_summary` | `conn_mod_def::GMPzY-BSPDA::TM9bwRrlSCmRy_V5Ygs5Ww` |
| Disable Preferred Playback Rate for a Course Lesson | POST | `/api/v2/course_lessons/{{id}}/actions/disable_preferred_playback_rate` | `conn_mod_def::GMPzZW77l8g::R7P45F0PSA2iYylw0FKHiQ` |
| Disallow Multiple Completions for a Course Lesson | POST | `/api/v2/course_lessons/{{id}}/actions/disallow_multiple_completions` | `conn_mod_def::GMPzZFWY6OA::zAdz-mozSD6HhGCKJ2p0CQ` |
| Duplicate a Course Lesson | POST | `/api/v2/course_lessons/{{id}}/actions/duplicate` | `conn_mod_def::GMPzZE9PeUA::W2sNnWxSTZCcSdWVkqFQMg` |
| Enable Preferred Playback Rate for a Course Lesson | POST | `/api/v2/course_lessons/{{id}}/actions/enable_preferred_playback_rate` | `conn_mod_def::GMPzZXPwg4g::ms50Bt0qS8qHTu3gksaMRg` |
| Move to Module for a Course Lesson | POST | `/api/v2/course_lessons/{{id}}/actions/move_module` | `conn_mod_def::GMPzZF1w1Dg::82V4DJDuRhmL6XifzeVVeA` |

13 more CourseLessons actions are available through search.

### LandingPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Landing Page | GET | `/api/v2/landing_pages/{{id}}` | `conn_mod_def::GMPzhtU-kRg::py3YaxOlTfCbr7U86NP9bA` |
| Get Builder Node Type Schema for a Landing Page | GET | `/api/v2/landing_pages/{{id}}/builder/content/node_types/detail` | `conn_mod_def::GMPzhuzFo1g::HAAsPMN5Qf-IWJ884pMH6g` |
| Get HTML Section Content for a Landing Page | GET | `/api/v2/landing_pages/{{id}}/builder/content/html_section` | `conn_mod_def::GMPzh3gBHdA::CLSpukioRjuMbta5GJMnmw` |
| Get the Builder Doc Node Tree for a Landing Page | GET | `/api/v2/landing_pages/{{id}}/builder/content/nodes` | `conn_mod_def::GMPzh3VueIg::AYRlAbRPS4qbn9Ov34PIkw` |
| List Landing Pages | GET | `/api/v2/landing_pages` | `conn_mod_def::GMPzh7MRelA::K_lyz2kPTZOHQqQMH0jCFg` |
| Add Labels for a Landing Page | POST | `/api/v2/landing_pages/{{id}}/actions/add_labels` | `conn_mod_def::GMPzhc8BduA::0U0ZbRQOTN6qnFS7Sqh3GA` |
| Convert to Builder v2 for a Landing Page | POST | `/api/v2/landing_pages/{{id}}/actions/convert_to_builder_v2` | `conn_mod_def::GMPzhdy-1DA::bkah2Gi9QvCxsde0jsXBLw` |
| Create a Funnel from a Landing Page | POST | `/api/v2/landing_pages/{{id}}/actions/create_funnel_from` | `conn_mod_def::GMPziLvQzrA::n2_RFFuDTeGR6LPsvHiCzw` |
| Create a Landing Page | POST | `/api/v2/landing_pages` | `conn_mod_def::GMPzhlAm9RA::dzIeugvlRQaNJM9kBTiONg` |
| Create or Update HTML Section Content for a Landing Page | POST | `/api/v2/landing_pages/{{id}}/builder/content/html_section` | `conn_mod_def::GMPzhkik-bg::AnjtbMJkSSa8gXZ0NERDpQ` |
| Duplicate a Landing Page | POST | `/api/v2/landing_pages/{{id}}/actions/duplicate` | `conn_mod_def::GMPzhk2kGsA::fBWqNCOjQ6Kgp79KcxWHCw` |
| Move to Funnel for a Landing Page | POST | `/api/v2/landing_pages/{{id}}/actions/move_to_funnel` | `conn_mod_def::GMPzh3vQcWg::kanZ-ajzSia9DeaRGPS7gA` |

12 more LandingPages actions are available through search.

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Ticket | GET | `/api/v2/tickets/{{id}}` | `conn_mod_def::GMPzqArgF9A::qvQOEpaRTXKExr7XkeB9cg` |
| List Tickets | GET | `/api/v2/tickets` | `conn_mod_def::GMPzqGCvrvA::9wNwHU5BSUy7N_au_lABVQ` |
| Add Comment to a Ticket | POST | `/api/v2/tickets/{{id}}/actions/add_comment` | `conn_mod_def::GMPzp4Z-Rtg::wChqkSBsT0igJ1Lclljf6w` |
| Add Facet to a Ticket | POST | `/api/v2/tickets/{{id}}/actions/add_facet` | `conn_mod_def::GMPzp6QCqHA::b3ll5Z2_RbarO3aXJhqwpA` |
| Add Facet Values to a Ticket | POST | `/api/v2/tickets/{{id}}/actions/add_facet_values` | `conn_mod_def::GMPzp4gnnZA::S2gF1z4NT-aHOPNEgo1yXA` |
| Assign to Me for a Ticket | POST | `/api/v2/tickets/{{id}}/actions/assign_to_me` | `conn_mod_def::GMPzqBwF8Jg::xzt8KoBqS5awdD_u7bP8vw` |
| Create a Ticket | POST | `/api/v2/tickets` | `conn_mod_def::GMPzqArVB8g::17fjZ2OfSI6WJ4DORjEBxw` |
| Exclude From CSAT Reporting for a Ticket | POST | `/api/v2/tickets/{{id}}/actions/exclude_from_csat` | `conn_mod_def::GMPzqBD8XPA::JlmjVJ-ZQfW86hjKkxsy0w` |
| Mark Read by Assignee for a Ticket | POST | `/api/v2/tickets/{{id}}/actions/mark_read` | `conn_mod_def::GMPzqMs8tOg::qSQaJpUEQtmmGrXC_5xUgQ` |
| Mark Unread by Assignee for a Ticket | POST | `/api/v2/tickets/{{id}}/actions/mark_unread` | `conn_mod_def::GMPzqNzsUzg::O-kAZdpEQXqtyFty1zeBjg` |
| Move to Pipeline for a Ticket | POST | `/api/v2/tickets/{{id}}/actions/move_to_pipeline` | `conn_mod_def::GMPzqNule1g::tGwN-FKnQc-oO9lyqn8A_A` |
| Move to Stage for a Ticket | POST | `/api/v2/tickets/{{id}}/actions/move_to_stage` | `conn_mod_def::GMPzqNTaEkg::Zk_SlPCeRL-Z1ji4PdUzmg` |

6 more Tickets actions are available through search.

### Purchases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Purchase | GET | `/api/v2/purchases/{{id}}` | `conn_mod_def::GMPzmPRmXIA::UK2QPQJqTZ2j7dDQpu6Y0Q` |
| List Purchases | GET | `/api/v2/purchases` | `conn_mod_def::GMPzmXAznSg::gaJ0Fv2TS2Wp2rNKo6WgUQ` |
| Cancel a Purchase | POST | `/api/v2/purchases/{{id}}/actions/cancel` | `conn_mod_def::GMPzmIL2I6A::WR1E8XwyQ-6yIQmAHxWWxg` |
| Capture a Purchase | POST | `/api/v2/purchases/{{id}}/actions/capture` | `conn_mod_def::GMPzmINTrPA::qLlwvugUS8-TwzMPXi__YQ` |
| Change Price for a Purchase | POST | `/api/v2/purchases/{{id}}/actions/change_price` | `conn_mod_def::GMPzmHdnGAA::SVUUe1UVSGiMvWw2JVpAKQ` |
| Change Tax Percent for a Purchase | POST | `/api/v2/purchases/{{id}}/actions/change_tax_percent` | `conn_mod_def::GMPzmPqNdxA::AbJIzV1DQIa8x8TQ9EwObw` |
| Disassociate a Purchase From a Funnel | POST | `/api/v2/purchases/{{id}}/actions/disassociate_from_funnel` | `conn_mod_def::GMPzmPRi2hA::BS3SV6QdSMSTduY2NJHjfg` |
| Move to Product for a Purchase | POST | `/api/v2/purchases/{{id}}/actions/move_to_product` | `conn_mod_def::GMPzmPRGi_g::h5Flt1AgTtWvGhRLrdqwyQ` |
| Pause a Purchase | POST | `/api/v2/purchases/{{id}}/actions/pause` | `conn_mod_def::GMPzmds5fKA::BEH7yOpQTbW2RujkRFQO6w` |
| Postpone Period Ends At By for a Purchase | POST | `/api/v2/purchases/{{id}}/actions/postpone_period_ends_at_by` | `conn_mod_def::GMPzmeO49oA::HA8te-C1ROWSUhvfBsDDRw` |
| Postpone Upcoming Charges By for a Purchase | POST | `/api/v2/purchases/{{id}}/actions/postpone_upcoming_charges_by` | `conn_mod_def::GMPzmeUzu1g::ZhIolZxJSAixyyOODnPN8A` |
| Refund a Purchase | POST | `/api/v2/purchases/{{id}}/actions/refund` | `conn_mod_def::GMPzmdtjxNg::llCZ1dp_QsWrvtl96PUVRw` |

4 more Purchases actions are available through search.

### Affiliates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Affiliate | GET | `/api/v2/affiliates/{{id}}` | `conn_mod_def::GMPzWRBWgYA::lYOMbTx_Qh6JunrnTnJ9cg` |
| List Affiliates | GET | `/api/v2/affiliates` | `conn_mod_def::GMPzWUFpxNA::n3clGLINTLyrLISKvn7vZQ` |
| Add to Conversation for an Affiliate | POST | `/api/v2/affiliates/{{id}}/actions/add_to_conversation` | `conn_mod_def::GMPzWJoJJrg::vBvhk01hSNynGTFvgcqm9A` |
| Approve an Affiliate | POST | `/api/v2/affiliates/{{id}}/actions/approve` | `conn_mod_def::GMPzWJctWuA::XH5g-_DbRZWAmXyOPHKtQw` |
| Approve Documentation for an Affiliate | POST | `/api/v2/affiliates/{{id}}/actions/approve_documentation` | `conn_mod_def::GMPzWJnY9sg::ygvSxMBRTNarBCYfQeGHPg` |
| Create an Affiliate | POST | `/api/v2/affiliates` | `conn_mod_def::GMPzWRBclDA::OEkBUUDSR5-qH6oDzh9mwA` |

9 more Affiliates actions are available through search.

This lists 90 of 719 actions. For anything not here, call `search_one_platform_actions` with platform `simplero`. The full catalog is at https://www.withone.ai/knowledge/simplero.

## When a call fails

The error comes from Simplero, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/simplero

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
