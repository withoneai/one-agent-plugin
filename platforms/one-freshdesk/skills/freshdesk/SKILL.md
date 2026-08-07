---
name: freshdesk
description: Freshdesk is a cloud-based customer support platform that offers ticketing, automation, self-service, and multichannel support to help businesses deliver excellent customer service. Read and write Freshdesk data through One: tickets, contacts, groups, agents, companies, ticketfields and more, 243 actions with real parameter documentation. Use whenever the user asks to look something up in Freshdesk, create or update a record there, or build code against the Freshdesk API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: freshdesk
  generated-from: one-knowledge-base
---

# Freshdesk through One

Freshdesk is a cloud-based customer support platform that offers ticketing, automation, self-service, and multichannel support to help businesses deliver excellent customer service.

One exposes Freshdesk through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `freshdesk` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Freshdesk is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Freshdesk account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Filter Tickets (Search Tickets) | GET | `/api/v2/search/tickets` | `conn_mod_def::GJ2hz-ZMj9Y::zVFxct_QT-yHkFqxkXA9xA` |
| Get a Ticket’s Associated Tickets | GET | `/api/v2/tickets/{{id}}/associated_tickets` | `conn_mod_def::GJ2h0OVc-V0::vojywfFFSICAvpdlJySJ-Q` |
| Get a Ticket’s Prime Association | GET | `/api/v2/tickets/{{id}}/prime_association` | `conn_mod_def::GJ2h0VrqyxQ::sFWbZah9SXa4V6Vej5Xaog` |
| List All Tickets | GET | `/api/v2/tickets` | `conn_mod_def::GJ2h1djXT5s::eiaDKEIhR_yr2HL7E6cGaw` |
| View a Service Task (Ticket) | GET | `/api/v2/tickets/{{id}}` | `conn_mod_def::GJ2hobms9K4::erISV252Rf6yvHStHG1aKA` |
| View a Ticket | GET | `/api/v2/tickets/{{id}}` | `conn_mod_def::GJ2h3M2ba5s::af1T8DGzSiWairaIY9ZKDA` |
| View an Archived Ticket | GET | `/api/v2/tickets/archived/{{id}}` | `conn_mod_def::GJ2h3VGjzzg::IvUMUwwoR66NYHHpL2Sg6g` |
| Add a Watcher to a Ticket | POST | `/api/v2/tickets/{{id}}/watch` | `conn_mod_def::GJ2hyxSQzsI::6DMNI0WiR7iw7Kde8iYfOA` |
| Add a Watcher to Multiple Tickets | PUT | `/api/v2/tickets/bulk_watch` | `conn_mod_def::GJ2hy55cIic::isgl9ZM9T6epBCjB2r-TCg` |
| Create a Service Task (Ticket) | POST | `/api/v2/tickets` | `conn_mod_def::GJ2hnii5D7g::c4OBiMsjR3SZ9WFJi6SyeA` |
| Create a Ticket | POST | `/api/v2/tickets` | `conn_mod_def::GJ2hzCsTthU::HYqJKYEWQLutBGQxNMQ1BQ` |
| Create an Outbound Email Ticket | POST | `/api/v2/tickets/outbound_email` | `conn_mod_def::GJ2hzLfe_zE::UgHWRreIT9qR-431uKm3TA` |

16 more Tickets actions are available through search.

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Filter Contacts (Search Contacts) | GET | `/api/v2/search/contacts` | `conn_mod_def::GJ2heb4Tss8::k7gC8CNNSL2BhysPDkuOJA` |
| List All Contacts | GET | `/api/v2/contacts` | `conn_mod_def::GJ2hemNcaGc::wtH2o6H1Q4m8xupVryl91A` |
| Search Contacts (Autocomplete) | GET | `/api/v2/contacts/autocomplete` | `conn_mod_def::GJ2hfPeilvc::tAcl1XdyRg2hZF1CIXrKlA` |
| View a Contact | GET | `/api/v2/contacts/{{id}}` | `conn_mod_def::GJ2hfzWaNXk::Bf8roqaWS86AHLiCCxmXTg` |
| Convert a Contact to an Agent (Make Agent) | PUT | `/api/v2/contacts/{{id}}/make_agent` | `conn_mod_def::GJ2hevNiCdE::TETMyVDVSJa1gatj5B3Nlg` |
| Create a Contact | POST | `/api/v2/contacts` | `conn_mod_def::GJ2heS_xrAQ::xC3Wk2iyQhK-v6zIITCuJg` |
| Export Contacts (Start Export Job) | POST | `/api/v2/contacts/export` | `conn_mod_def::GJ2heBlIroc::ORf0zUBkQoq-MWJh72VtjQ` |
| Make a Contact a Field Technician (Agent) | PUT | `/api/v2/contacts/{{id}}/make_agent` | `conn_mod_def::GJ2hn6yXJSs::aZa3GwDmS1GSLzaB7LOBxw` |
| Merge Contacts | POST | `/api/v2/contacts/merge` | `conn_mod_def::GJ2he2qfLPg::y1LJcRh1TvmsxI_KG-i0wA` |
| Permanently Delete a Contact (Hard Delete) | DELETE | `/api/v2/contacts/{{id}}/hard_delete` | `conn_mod_def::GJ2he_v00g0::YDAeo5UfT2O-M25rs1Rqwg` |
| Restore a Contact | PUT | `/api/v2/contacts/{{id}}/restore` | `conn_mod_def::GJ2hfHQ4sjY::SSE5xzXXTzu0m7geegsN_Q` |
| Send Invite to a Contact | PUT | `/api/v2/contacts/{{id}}/send_invite` | `conn_mod_def::GJ2hfZcVgmg::4l8lBcUQRHOs2LEtnob4PQ` |

2 more Contacts actions are available through search.

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Groups | GET | `/api/v2/admin/groups` | `conn_mod_def::GJ2hWvnpl0Q::VDrlY60DSqilBmf-7amaEg` |
| List All Groups | GET | `/api/v2/groups` | `conn_mod_def::GJ2hpOoUiBs::KmnAIOCiRV-yw7A4BO1O2Q` |
| View a Group | GET | `/api/v2/groups/{{id}}` | `conn_mod_def::GJ2hpjfqNeI::KTCk2fU2QUye8qG9AMeIYw` |
| View a Service Group | GET | `/api/v2/groups/{{id}}` | `conn_mod_def::GJ2hoTIFJnA::zuqToQkRSY6fGpzY_gLGyQ` |
| Add or Remove Agents in a Group | PUT | `/api/v2/admin/groups/{{id}}/agents` | `conn_mod_def::GJ2hWNt2S3Y::uKFENdoVQiywjKzmuHmMTw` |
| Create a Group | POST | `/api/v2/groups` | `conn_mod_def::GJ2iHCUpvMI::xO9N6fLLQMmOsSiZhifpsw` |
| Create a Service Group | POST | `/api/v2/groups` | `conn_mod_def::GJ2hnamGREs::YDPX8gIZTFucSqy3jiIFNQ` |
| Delete a Group | DELETE | `/api/v2/groups/{{id}}` | `conn_mod_def::GJ2hpGZkuz8::iTnPACPnQ9W7HxipiFBhSA` |
| Delete a Service Group | DELETE | `/api/v2/groups/{{id}}` | `conn_mod_def::GJ2hnrHDjnQ::FpK_x1uSRhCmER5KpT_Jjg` |
| Update a Group | PUT | `/api/v2/groups/{{id}}` | `conn_mod_def::GJ2hpZSvb6U::td3h9UM-RDWjZpByJw60bQ` |
| Update a Group | PUT | `/api/v2/admin/groups/{{id}}` | `conn_mod_def::GJ2hW3tuW6Q::g09k1o1NRNamo7iYbVMFfA` |
| Update a Service Group | PUT | `/api/v2/groups/{{id}}` | `conn_mod_def::GJ2hoDePrKQ::MfjJVgsASmaK4Jh6K1A7qA` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Currently Authenticated Agent | GET | `/api/v2/agents/me` | `conn_mod_def::GJ2hXdzjbfc::62NrwFm-SFOzz8oMQJXsgg` |
| List All Agents | GET | `/api/v2/agents` | `conn_mod_def::GJ2hXt7Suyo::HcQrOeLOTHq9GvJdgXIeKg` |
| List All Agents’ Availability | GET | `/api/v2/agents` | `conn_mod_def::GJ2hY6FmTDs::-39eTI4MS_OmUcXdGqZNZA` |
| Search Agents (Autocomplete) | GET | `/api/v2/agents/autocomplete` | `conn_mod_def::GJ2hX4A2aRc::hvMWDDUhQdKNEUNvnu9a_Q` |
| View an Agent | GET | `/api/v2/agents/{{id}}` | `conn_mod_def::GJ2hYG3-kOE::ulnuWOAURAi_GBXxto4EGA` |
| View an Agent’s Availability | GET | `/api/v2/agents/{{id}}/availability` | `conn_mod_def::GJ2hZJmjVj8::eOFow2jiRUm2fpgThVs83w` |
| Create an Agent | POST | `/api/v2/agents` | `conn_mod_def::GJ2hXJvMoIs::FF7CqhcKTgaHhXi7DlAaww` |
| Create Multiple Agents (Bulk) | POST | `/api/v2/agents/bulk` | `conn_mod_def::GJ2hXRtQNOM::SfcC2qWgSSW8QBnmmjVP6g` |
| Delete an Agent | DELETE | `/api/v2/agents/{{id}}` | `conn_mod_def::GJ2hXlLr01o::o4tC8zAiQfCo8V2z58qQ0Q` |
| Update an Agent | PUT | `/api/v2/agents/{{id}}` | `conn_mod_def::GJ2hX_UMxxg::KQ97hXLhRQa8nMoYEzG6AA` |
| Update an Agent’s Load Settings (Availability) | PATCH | `/api/v2/agents/{{id}}/availability` | `conn_mod_def::GJ2hZCBmxsA::g3sSmLYJSVepH9wA63JM9Q` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Filter Companies (Search by Company Fields) | GET | `/api/v2/search/companies` | `conn_mod_def::GJ2hbMpf43w::xL9hOgBsTk-VRMQOXjwtDw` |
| List All Companies | GET | `/api/v2/companies` | `conn_mod_def::GJ2hbUE8ySE::VXdqA_uMSDeJ7AAi2HXctg` |
| Search Companies (Autocomplete) | GET | `/api/v2/companies/autocomplete` | `conn_mod_def::GJ2hbb6aFeM::n1aZtIlUTMuPBJaSt0GY9g` |
| View a Company | GET | `/api/v2/companies/{{id}}` | `conn_mod_def::GJ2hbq35Y5g::JLh0cuHkR-2ESlmpDkjnaQ` |
| Create a Company | POST | `/api/v2/companies` | `conn_mod_def::GJ2ha9IqMvQ::TyUcSDUGToO68C8hO4N5Uw` |
| Delete a Company | DELETE | `/api/v2/companies/{{id}}` | `conn_mod_def::GJ2hbEns_lE::4KuVucjxTsuDhav8UHNj1g` |
| Update a Company | PUT | `/api/v2/companies/{{id}}` | `conn_mod_def::GJ2hbj0lt0I::LahmyF_NQIC7592pg1cuDQ` |

### TicketFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Ticket Fields | GET | `/api/v2/admin/ticket_fields` | `conn_mod_def::GJ2hwwdZTsw::Byy-NjZCTH2xASocsHy4Wg` |
| List All Ticket Fields | GET | `/api/v2/ticket_fields` | `conn_mod_def::GJ2h1PgE5Uw::HjE7ehwVQpSS0ZpPF8w-cw` |
| View a Ticket Field (Admin) | GET | `/api/v2/admin/ticket_fields/{{id}}` | `conn_mod_def::GJ2hxOzJc7M::fATKz_oOTS-FjCE-NW_uXA` |
| Create a Ticket Field | POST | `/api/v2/admin/ticket_fields` | `conn_mod_def::GJ2hwF-5C6Q::NsyA_YSjRciK384fqIemhQ` |
| Delete a Ticket Field | DELETE | `/api/v2/admin/ticket_fields/{{id}}` | `conn_mod_def::GJ2hwV4Nkl4::6xXC1KhXQtuuT-v9UPbMrg` |
| Update a Ticket Field (Admin) | PUT | `/api/v2/admin/ticket_fields/{{id}}` | `conn_mod_def::GJ2hxFUsSag::xbPokkEQRl29X-b5NV12lQ` |

### TicketForms

| Action | Method | Path | Action id |
|---|---|---|---|
| Clone a Ticket Form | GET | `/api/v2/ticket-forms/{{id}}/clone` | `conn_mod_def::GJ2hxW_r1Hc::y2j5BJ_KSH-_R6VvttWY3Q` |
| List All Ticket Forms | GET | `/api/v2/ticket-forms` | `conn_mod_def::GJ2hx7OFYyA::90DTlrUTTG6KQ2wYY7yfVA` |
| View a Ticket Form | GET | `/api/v2/ticket-forms/{{id}}` | `conn_mod_def::GJ2hyYLmYPM::sPkJTrrbQyOYgk8yi92bXg` |
| Create a Ticket Form | POST | `/api/v2/ticket-forms` | `conn_mod_def::GJ2hxecLQsg::HnbeWQkhSAWoerXzgtNY1g` |
| Delete a Ticket Form | DELETE | `/api/v2/ticket-forms/{{id}}` | `conn_mod_def::GJ2hxmAQlXw::z-0cJP4DR8eWPWoaupSOuw` |
| Update a Ticket Form | PUT | `/api/v2/ticket-forms/{{id}}` | `conn_mod_def::GJ2hyEsnLno::Cvp0RI_iSxS66zVug64rbA` |

### TimeEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Ticket’s Time Entries | GET | `/api/v2/tickets/{{id}}/time_entries` | `conn_mod_def::GJ2h1oyJbu8::rw_V3CVeROK0J8e_pcup1g` |
| List All Time Entries | GET | `/api/v2/time_entries` | `conn_mod_def::GJ2h3_Qb8Hc::pAGO_EqURN6OUkWXJTLocw` |
| Create a Ticket Time Entry | POST | `/api/v2/tickets/{{ticketId}}/time_entries` | `conn_mod_def::GJ2h3utqFQY::UFgfsE56RaeRGYgitMQPHQ` |
| Delete a Time Entry | DELETE | `/api/v2/time_entries/{{id}}` | `conn_mod_def::GJ2h32cYVnQ::VIgZ9o4fTy-xErO9qIQr2g` |
| Start/Stop a Time Entry Timer | PUT | `/api/v2/time_entries/{{timeEntryId}}/toggle_timer` | `conn_mod_def::GJ2h4G72xPQ::t9YmyJAMQG-7hZhr_79cbQ` |
| Update a Time Entry | PUT | `/api/v2/time_entries/{{id}}` | `conn_mod_def::GJ2h4RAvllI::P8j2DAFMR0O7wkdxLOq8tg` |

### CompanyFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Fields | GET | `/api/v2/company_fields` | `conn_mod_def::GJ2hc7HjPqs::QDjSykuiShq7Goc7wO6zdQ` |
| View a Company Field | GET | `/api/v2/company_fields/{{id}}` | `conn_mod_def::GJ2hdL-PQus::BbIUkS4HSiOZKlHxLotN9A` |
| Create a Company Field | POST | `/api/v2/company_fields` | `conn_mod_def::GJ2hcr8Y-uw::DMqKruK3Sx-YE7Cpi8vwAg` |
| Delete a Company Field | DELETE | `/api/v2/company_fields/{{id}}` | `conn_mod_def::GJ2hczLSYP0::vdsOAeHZQfyPugvbP7MLkg` |
| Update a Company Field | PUT | `/api/v2/company_fields/{{id}}` | `conn_mod_def::GJ2hdDp89WA::08qivEMgQfyLpXcoHe9TEQ` |

### ContactFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Fields | GET | `/api/v2/contact_fields` | `conn_mod_def::GJ2hdp0MtMo::R3zGcuoyRNeTa_gyylvB-Q` |
| View a Contact Field | GET | `/api/v2/contact_fields/{{id}}` | `conn_mod_def::GJ2hd5Iswl4::G5seHawkRf6Hz2GhUviwEA` |
| Create a Contact Field | POST | `/api/v2/contact_fields` | `conn_mod_def::GJ2hdXXG4KU::0SSErDhHSSSv-IIXfTg4BA` |
| Delete a Contact Field | DELETE | `/api/v2/contact_fields/{{id}}` | `conn_mod_def::GJ2hdie__fc::KGgW9khfTxSIz4YV_lYWwg` |
| Update a Contact Field | PUT | `/api/v2/contact_fields/{{id}}` | `conn_mod_def::GJ2hdxk1HQg::Bl9t-SXqSjWm9zOVVf3Ujg` |

### DiscussionTopics

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Monitored Discussion Topics | GET | `/api/v2/discussions/topics/followed_by` | `conn_mod_def::GJ2hj2jxJBY::vWlIGcr9QFGLTDy8YkgTSA` |
| List All Topics in a Forum | GET | `/api/v2/discussions/forums/{{id}}/topics` | `conn_mod_def::GJ2hkHSX30o::WWQQM2UpSWeBqNssDfA4aQ` |
| View a Discussion Topic | GET | `/api/v2/discussions/topics/{{id}}` | `conn_mod_def::GJ2hlzjw3_8::GxKOBaZzQIG4nhlf_L8euQ` |
| Create a Forum Topic (Discussion) | POST | `/api/v2/discussions/forums/{{forumId}}/topics` | `conn_mod_def::GJ2hi0Z6SGs::182mIr8AQm2da-PoZUbtlA` |
| Update a Discussion Topic | PUT | `/api/v2/discussions/topics/{{id}}` | `conn_mod_def::GJ2hldu46bg::EeziEzv8Qsev1d6r3QDv6w` |

### Forums

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Forums in a Discussion Category | GET | `/api/v2/discussions/categories/{{id}}/forums` | `conn_mod_def::GJ2hjuF1eXg::5FfSKBJQTp-Oefkmkel20g` |
| View a Forum | GET | `/api/v2/discussions/forums/{{id}}` | `conn_mod_def::GJ2hlkxJSVI::ozE24wcPSeiC6mZSmNABVg` |
| Delete a Forum | DELETE | `/api/v2/discussions/forums/{{id}}` | `conn_mod_def::GJ2hjEShrUE::FTGpsAbdRp6czV9JVsr6zg` |

2 more Forums actions are available through search.

This lists 90 of 243 actions. For anything not here, call `search_one_platform_actions` with platform `freshdesk`. The full catalog is at https://www.withone.ai/knowledge/freshdesk.

## When a call fails

The error comes from Freshdesk, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/freshdesk

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
