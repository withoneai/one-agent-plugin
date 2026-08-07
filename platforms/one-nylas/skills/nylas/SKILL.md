---
name: nylas
description: Nylas provides a unified communications API platform enabling developers to embed email, calendar, contacts, scheduler, and meeting intelligence features into applications quickly and securely, with support for providers like Gmail, Outlook, IMAP, and real-time webhooks. Read and write Nylas data through One: templates, notetakers, workflows, messages, calendars, schedulingconfigurations and more, 180 actions with real parameter documentation. Use whenever the user asks to look something up in Nylas, create or update a record there, or build code against the Nylas API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: nylas
  generated-from: one-knowledge-base
---

# Nylas through One

Nylas provides a unified communications API platform enabling developers to embed email, calendar, contacts, scheduler, and meeting intelligence features into applications quickly and securely, with support for providers like Gmail, Outlook, IMAP, and real-time webhooks.

One exposes Nylas through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `nylas` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Nylas is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Nylas account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Grant’s Template | GET | `/v3/grants/{{grantId}}/templates/{{templateId}}` | `conn_mod_def::GJ5E3FWe0zk::3fks-_bkTou8hLHl9C2erQ` |
| Get an Application-level Template | GET | `/v3/templates/{{templateId}}` | `conn_mod_def::GJ5Ez3Z8iBQ::lrN1FlxmRvqc1EYFN4CYog` |
| List a Grant’s Templates | GET | `/v3/grants/{{grantId}}/templates` | `conn_mod_def::GJ5E3DOGAYM::bMqJny1eS0u7dIpm5Fo19g` |
| List Application-level Templates | GET | `/v3/templates` | `conn_mod_def::GJ5E0AEcCNo::xiCDTUZmRNC2ix5d4RJ-Mw` |
| Create a Grant-Level Template | POST | `/v3/grants/{{grantId}}/templates` | `conn_mod_def::GJ5E249ZyPM::m4LHDWfQTyqFkLN9oA04PA` |
| Create an Application-Level Template | POST | `/v3/templates` | `conn_mod_def::GJ5Ez3UpThM::JDJ6q1J5SiOK8Ea7Asj_HQ` |
| Delete a Grant’s Template | DELETE | `/v3/grants/{{grantId}}/templates/{{templateId}}` | `conn_mod_def::GJ5E24k5jsM::YfK1w0teRoak2-A2nENiOg` |
| Delete an Application-level Template | DELETE | `/v3/templates/{{templateId}}` | `conn_mod_def::GJ5Ez3_wDx0::rWWn2TyNR3iwc2UVwllasg` |
| Render a Grant-Level Template as HTML | POST | `/v3/grants/{{grantId}}/templates/render` | `conn_mod_def::GJ5E3C2oORY::ZZSbr7ubRZGEQ-SSNSM0AA` |
| Render a Grant’s Template | POST | `/v3/grants/{{grantId}}/templates/{{templateId}}/render` | `conn_mod_def::GJ5E24li9hQ::jPti4uHaRR2huArzOajYhg` |
| Render a Template as HTML | POST | `/v3/templates/render` | `conn_mod_def::GJ5Ez3_qTwo::5bSoU1SCRNSLVxTKU345NQ` |
| Render an Application-level Template | POST | `/v3/templates/{{templateId}}/render` | `conn_mod_def::GJ5Ez3eb_TQ::VZ0FAPw5RMq0HIrgwKF0Cw` |

2 more Templates actions are available through search.

### Notetakers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Grant’s Notetaker | GET | `/v3/grants/{{grantId}}/notetakers/{{notetakerId}}` | `conn_mod_def::GJ5E5BCC6F8::ujJpNNngROu78O1PZpNz9A` |
| Get a Standalone Notetaker | GET | `/v3/notetakers/{{notetakerId}}` | `conn_mod_def::GJ5E5e-UCfY::TO0q3_1BTRKiPfRXVOja3w` |
| List a Grant’s Notetakers | GET | `/v3/grants/{{grantId}}/notetakers` | `conn_mod_def::GJ5E5EDjqDU::tiXDCNy9Q4iBopcIrnYC-Q` |
| List Standalone Notetakers | GET | `/v3/notetakers` | `conn_mod_def::GJ5E5uIGeFk::pK68aL9DSyO8obDusUtVIg` |
| Cancel a Grant’s Scheduled Notetaker | DELETE | `/v3/grants/{{grantId}}/notetakers/{{notetakerId}}/cancel` | `conn_mod_def::GJ5E4mugpas::fwJOqe6uTlKEetxSApApuA` |
| Cancel a Standalone Notetaker | DELETE | `/v3/notetakers/{{notetakerId}}/cancel` | `conn_mod_def::GJ5E5ip44ig::oDIpbk5hT3er21RbUmU9Mw` |
| Delete a Grant’s Notetaker | DELETE | `/v3/grants/{{grantId}}/notetakers/{{notetakerId}}` | `conn_mod_def::GJ5E4oiUkII::y1_IfIx7SFKU9Oo3TQgNLg` |
| Delete a Standalone Notetaker | DELETE | `/v3/notetakers/{{notetakerId}}` | `conn_mod_def::GJ5E5eTtBgg::dhRHW8xoTS2Pj3yOcFc64Q` |
| Invite a Notetaker to a Grant’s Meeting | POST | `/v3/grants/{{grantId}}/notetakers` | `conn_mod_def::GJ5E41Vyp6s::dsaSLKufS9uRZHZqillfZQ` |
| Invite a Standalone Notetaker to a Meeting | POST | `/v3/notetakers` | `conn_mod_def::GJ5E5eh_BXg::682sGQtvSvKWLveCYmWomg` |
| Remove a Notetaker from a Grant’s Meeting | POST | `/v3/grants/{{grantId}}/notetakers/{{notetakerId}}/leave` | `conn_mod_def::GJ5E4nmYHcY::AYzXce7ASMeTRnD1ELR7MQ` |
| Remove a Standalone Notetaker from a Meeting | POST | `/v3/notetakers/{{notetakerId}}/leave` | `conn_mod_def::GJ5E5fEBUf8::JbhY_kDUTKqlNdQ5b81CJA` |

2 more Notetakers actions are available through search.

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Grant’s Workflow | GET | `/v3/grants/{{grantId}}/workflows/{{workflowId}}` | `conn_mod_def::GJ5E3NinyUk::pc4CG2CIR6ecPMRJiYFUXg` |
| Get a Workflow | GET | `/v3/workflows/{{workflowId}}` | `conn_mod_def::GJ5Ez_1nwYA::xZVVt6yATK2qMsaKwcO9sg` |
| List a Grant's Workflows | GET | `/v3/grants/{{grantId}}/workflows` | `conn_mod_def::GJ5E3OIODOU::LEOmYT6EQUavBszogSc12A` |
| List Workflows | GET | `/v3/workflows` | `conn_mod_def::GJ5E0MgmFKU::rt23HjSMTRSliTK1G6_fEA` |
| Create a Grant Workflow | POST | `/v3/grants/{{grantId}}/workflows` | `conn_mod_def::GJ5E3CiPvCI::hwhPoJlTRxus2TFJT6-l4g` |
| Create a Workflow (Application Level) | POST | `/v3/workflows` | `conn_mod_def::GJ5Ez_8MaE0::IISXu--bQGS_0joa7C0GMw` |
| Delete an Application Workflow | DELETE | `/v3/workflows/{{workflowId}}` | `conn_mod_def::GJ5Ez_x54E0::UDflcZQSTBmcSUNv64d9Vg` |
| Update a Grant’s Workflow | PUT | `/v3/grants/{{grantId}}/workflows/{{workflowId}}` | `conn_mod_def::GJ5E3N8j2EY::SE2RjABrQUCH_BmnraC1sA` |
| Update a Workflow | PUT | `/v3/workflows/{{workflowId}}` | `conn_mod_def::GJ5E0I3Wl0I::w2CpWmyXRiaCHcvH0t01-w` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Grant’s Message | GET | `/v3/grants/{{grantId}}/messages/{{messageId}}` | `conn_mod_def::GJ5E4WZPbBQ::Y_V2TUzFR7ye96FOa5ZphA` |
| List a Grant’s Messages | GET | `/v3/grants/{{grantId}}/messages` | `conn_mod_def::GJ5E4eWUFtY::yjpccJ52QbySyb7Ym9yY_Q` |
| Clean a Grant’s Messages | PUT | `/v3/grants/{{grantId}}/messages/clean` | `conn_mod_def::GJ5E4MFlbxc::DL1gUb7WTCiWF-e7PTMhNQ` |
| Delete a Grant’s Message | DELETE | `/v3/grants/{{grantId}}/messages/{{messageId}}` | `conn_mod_def::GJ5E4GjOX3Y::UjMY1bVVSHOpcI9gEAfTFw` |
| Send a Grant’s Message | POST | `/v3/grants/{{grantId}}/messages/send` | `conn_mod_def::GJ5E4WpSly0::tErxbu9uR9eFwBLOeZbNgw` |
| Smart Compose a Message for a Grant | POST | `/v3/grants/{{grantId}}/messages/smart-compose` | `conn_mod_def::GJ5E5W1iIWU::32_59vqsRRKOfUTTQuq2xQ` |
| Smart Compose a Reply to a Message (Grant) | POST | `/v3/grants/{{grantId}}/messages/{{messageId}}/smart-compose` | `conn_mod_def::GJ5E5Wts14k::2BYwTn4OTB64Mdm06c3frA` |
| Update a Grant’s Message Attributes | PUT | `/v3/grants/{{grantId}}/messages/{{messageId}}` | `conn_mod_def::GJ5E4nSIGQc::lE4M_WZaQgmXCXgFb0JfsA` |

### Calendars

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Grant’s Calendar | GET | `/v3/grants/{{grantId}}/calendars/{{calendarId}}` | `conn_mod_def::GJ5E1DAg4Xk::ZY0jAQ8_QcWOcZa_IrWMCg` |
| List a Grant’s Calendars | GET | `/v3/grants/{{grantId}}/calendars` | `conn_mod_def::GJ5E1EBPpKc::ELDHGHcbR5qnTumXGSJLUA` |
| Create a Grant’s Calendar | POST | `/v3/grants/{{grantId}}/calendars` | `conn_mod_def::GJ5E05oR1sg::sX8rj4AnRrqrKp8NifeRLA` |
| Delete a Grant’s Calendar | DELETE | `/v3/grants/{{grantId}}/calendars/{{calendarId}}` | `conn_mod_def::GJ5E04UeTUU::6n51Z6yeSHqR4wGBzpozSw` |
| Get a Grant’s Calendar Free/Busy Schedule | POST | `/v3/grants/{{grantId}}/calendars/free-busy` | `conn_mod_def::GJ5E048pe8g::l-b0N-O2RHyCZDqZB-M_Zw` |
| Get Calendar Availability | POST | `/v3/calendars/availability` | `conn_mod_def::GJ5E040AaGA::f3iUfrjAQACHxh8RGsB-Mw` |
| Update a Grant’s Calendar | PUT | `/v3/grants/{{grantId}}/calendars/{{calendarId}}` | `conn_mod_def::GJ5E1E9B4vA::Ah2WdXisROeywhC-BuLPPw` |

### SchedulingConfigurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Grant’s Scheduling Configuration | GET | `/v3/grants/{{grantId}}/scheduling/configurations/{{configurationId}}` | `conn_mod_def::GJ5E1MvhWEo::OVv3wkgGQhGw1HZ0hg1kTQ` |
| List a Grant’s Scheduling Configurations | GET | `/v3/grants/{{grantId}}/scheduling/configurations` | `conn_mod_def::GJ5E1NCJBkw::p1F8hRDjQseCePhUv2KwYg` |
| Create a Grant’s Scheduling Configuration | POST | `/v3/grants/{{grantId}}/scheduling/configurations` | `conn_mod_def::GJ5E1ErRfo0::Cl2te83cSReWjMbhDwxbdA` |
| Delete a Grant’s Scheduling Configuration | DELETE | `/v3/grants/{{grantId}}/scheduling/configurations/{{configurationId}}` | `conn_mod_def::GJ5E1BP1OPE::TQWS1S4PSaeuDg_pLipsrA` |
| Import Group Events to a Scheduling Configuration | POST | `/v3/scheduling/configurations/{{configurationId}}/import-group-events` | `conn_mod_def::GJ5E3XNdTgE::fPiNWUE4QDWl46RSh4LO7g` |
| Update a Grant’s Scheduling Configuration | PUT | `/v3/grants/{{grantId}}/scheduling/configurations/{{configurationId}}` | `conn_mod_def::GJ5E1VBHh_g::rvcxLcpuSTuhwrL2fDC7Hg` |
| Validate a Scheduling Configuration Group Event Time Slot | POST | `/v3/scheduling/configurations/{{configurationId}}/group-events/validate-timeslot` | `conn_mod_def::GJ5E3X40dGU::yf-EAEzKQzaioV3IZynb5A` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event for a Grant | GET | `/v3/grants/{{grantId}}/events/{{eventId}}` | `conn_mod_def::GJ5E2gwzrcM::F_8xgBq5TMulCejxUKo2zA` |
| Import Events for a Grant | GET | `/v3/grants/{{grantId}}/events/import` | `conn_mod_def::GJ5E2YWgLjs::lJWFAI5XTj-mM69JTagfPQ` |
| List a Grant’s Events | GET | `/v3/grants/{{grantId}}/events` | `conn_mod_def::GJ5E2nsXAFQ::2u9xK3YqTVOSBG5PHhoNKA` |
| Create an Event for a Grant | POST | `/v3/grants/{{grantId}}/events` | `conn_mod_def::GJ5E2XIGq1w::WT2fejwVQdSXpEMmcx75MQ` |
| Delete a Grant’s Event | DELETE | `/v3/grants/{{grantId}}/events/{{eventId}}` | `conn_mod_def::GJ5E2VRpNVk::_dbOtNnaS-WdLm7CQqvpLQ` |
| Send RSVP for an Event (Grant Scoped) | POST | `/v3/grants/{{grantId}}/events/{{eventId}}/send-rsvp` | `conn_mod_def::GJ5E2k0ZrBo::MP6_KbZ3QoiAFe8EZaiDzg` |
| Update a Grant’s Event | PUT | `/v3/grants/{{grantId}}/events/{{eventId}}` | `conn_mod_def::GJ5E2iGuTIk::5LrmLRsTQHCrwf4e_ZHAnA` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace | GET | `/v3/workspaces/{{workspaceId}}` | `conn_mod_def::GJ5E6j9lOh8::05hq0cKATI2UhnTzk044fA` |
| List Workspaces | GET | `/v3/workspaces` | `conn_mod_def::GJ5E6jHq7bA::2EIYJNhAQKK1s1qBQ0kDyg` |
| Configure Automatic Grant Grouping for a Workspace | POST | `/v3/workspaces/auto-group` | `conn_mod_def::GJ5E6YOOybM::oY-F1Hy6S9ONWNI7myZwRw` |
| Create a Workspace | POST | `/v3/workspaces` | `conn_mod_def::GJ5E6VZQkEg::7fWl3-N_TNKb7pfO5387QA` |
| Delete a Workspace | DELETE | `/v3/workspaces/{{workspaceId}}` | `conn_mod_def::GJ5E6fzqVZQ::0-CxeSksQoKRBqeSeUsK1A` |
| Manually Assign or Remove Grants From a Workspace | POST | `/v3/workspaces/{{workspaceId}}/manual-assign` | `conn_mod_def::GJ5E6hIVngI::YEDJm3C3Sfm3eP31w_yv-A` |
| Update a Workspace | PATCH | `/v3/workspaces/{{workspaceId}}` | `conn_mod_def::GJ5E6kPlnC0::Vl5tQyAgQr2SEFhV_5pYTQ` |

### Drafts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Grant’s Draft by ID | GET | `/v3/grants/{{grantId}}/drafts/{{draftId}}` | `conn_mod_def::GJ5E2KpQUIc::5VUhgv_RSrmsPm0MH7xFfA` |
| List a Grant’s Drafts | GET | `/v3/grants/{{grantId}}/drafts` | `conn_mod_def::GJ5E2M0HpFg::t6oUCaVeRK6iW3ULITGd1A` |
| Create a Grant’s Draft | POST | `/v3/grants/{{grantId}}/drafts` | `conn_mod_def::GJ5E2KL6tr0::GMIQh4kuTl6RewvnumzYwA` |
| Delete a Grant’s Draft | DELETE | `/v3/grants/{{grantId}}/drafts/{{draftId}}` | `conn_mod_def::GJ5E2MYXnec::CX6bAixiQICCSr_Lo7jhZg` |
| Send a Grant’s Draft | POST | `/v3/grants/{{grantId}}/drafts/{{draftId}}` | `conn_mod_def::GJ5E2V6Ie5M::ndujf680RF27vnfa5v-UsA` |
| Update a Grant’s Draft | PUT | `/v3/grants/{{grantId}}/drafts/{{draftId}}` | `conn_mod_def::GJ5E2U_mnp8::ciKv5zHASq6pRzkA0qNzdQ` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain | GET | `/v3/admin/domains/{{domainId}}` | `conn_mod_def::GJ5E3wvuA78::uJbp9Es5TGuWnOZaZ7AK_g` |
| List Domains (Admin) | GET | `/v3/admin/domains` | `conn_mod_def::GJ5E3tlwMYE::9ffprTVmSIKjG0PCG8aPow` |
| Delete a Domain (Admin) | DELETE | `/v3/admin/domains/{{domainId}}` | `conn_mod_def::GJ5E3wiSWfE::kKNxmY7LRCiTNwfYYMCAfA` |
| Get a Domain’s DNS Verification Info | POST | `/v3/admin/domains/{{domainId}}/info` | `conn_mod_def::GJ5E3ti1G4w::OIxnb4mfRXeCqJq87ofAKQ` |
| Update a Domain | PUT | `/v3/admin/domains/{{domainId}}` | `conn_mod_def::GJ5E3uRKOAU::tWJNGrf4TMW-MUE1BP6VVw` |
| Verify a Domain’s DNS Records | POST | `/v3/admin/domains/{{domainId}}/verify` | `conn_mod_def::GJ5E35H0kRs::rhUXdg40St6UyiCNoE3krw` |

### Grants

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Grant by ID | GET | `/v3/grants/{{grantId}}` | `conn_mod_def::GJ5E38UVqKs::ZbjtqBvMR7KxHi32NvT-sg` |
| Get Current Grant (Me) | GET | `/v3/grants/me` | `conn_mod_def::GJ5E3-RCIJ4::QVsFqydMRCmY7JNHXAc5hA` |
| List All Grants | GET | `/v3/grants` | `conn_mod_def::GJ5E4OBmkrc::ZKTQUn9TTn-JQ26xdH1dhA` |
| Create a Grant Using Bring Your Own (BYO) Authentication | POST | `/v3/connect/custom` | `conn_mod_def::GJ5E37wev9g::umi3wgq1S6m5sS5wgeH5eQ` |
| Delete a Grant | DELETE | `/v3/grants/{{grantId}}` | `conn_mod_def::GJ5E38ErQnc::fYp7P5DCSGazZk2DdgFLSA` |
| Update a Grant | PATCH | `/v3/grants/{{grantId}}` | `conn_mod_def::GJ5E4IzsfDU::0zb65YpUQGeEdVksogsiyA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Application’s Webhook Destinations | GET | `/v3/webhooks` | `conn_mod_def::GJ5E6JOFb40::lY3yQq8iQ7aigEHmxtaQyQ` |
| Create a Webhook Destination | POST | `/v3/webhooks` | `conn_mod_def::GJ5E6NJ8JjI::17-mwk0_Tpu15VvPOhzGhg` |
| Get a Mock Webhook Notification Payload | POST | `/v3/webhooks/mock-payload` | `conn_mod_def::GJ5E6JCX7Sw::iqst8VtQT0Cprl2QGknmlg` |

3 more Webhooks actions are available through search.

This lists 90 of 180 actions. For anything not here, call `search_one_platform_actions` with platform `nylas`. The full catalog is at https://www.withone.ai/knowledge/nylas.

## When a call fails

The error comes from Nylas, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/nylas

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
