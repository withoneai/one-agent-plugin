---
name: hunter
description: Hunter is an email outreach platform that enables users to find and verify professional email addresses, manage contact lists, and run cold email campaigns—helping sales, marketing, and recruiting teams connect with prospects more efficiently. Read and write Hunter data through One: leads, leadslists, leadcustomattributes, campaignrecipients, companies, domainsearch and more, 29 actions with real parameter documentation. Use whenever the user asks to look something up in Hunter, create or update a record there, or build code against the Hunter API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: hunter
  generated-from: one-knowledge-base
---

# Hunter through One

Hunter is an email outreach platform that enables users to find and verify professional email addresses, manage contact lists, and run cold email campaigns—helping sales, marketing, and recruiting teams connect with prospects more efficiently.

One exposes Hunter through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `hunter` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Hunter is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Hunter account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead | GET | `/leads/{{id}}` | `conn_mod_def::GKHsrW6EgSg::mb3_NxFiSmeLAkTQX5YgHw` |
| List Leads | GET | `/leads` | `conn_mod_def::GKHsrd0XX8A::hO0GSGHEQ4yfcs1cBkE1Gw` |
| Create a Lead | POST | `/v2/leads` | `conn_mod_def::GKHsrOMB-zA::98M7Ud70RE-1mkYlzV67Eg` |
| Create or Update a Lead | PUT | `/leads` | `conn_mod_def::GKHsrOsmpvg::uNSWevsvRua9s-_IP-9rWg` |
| Delete a Lead | DELETE | `/leads/{{id}}` | `conn_mod_def::GKHsrMUqfEA::MhmblRSuT5an1VwRKpZPkA` |
| Update a Lead | PUT | `/leads/{{leadId}}` | `conn_mod_def::GKHsrYpc5Fg::Q6iWBRP6SjaoJUGRmTsJXQ` |

### LeadsLists

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Leads Lists | GET | `/leads_lists` | `conn_mod_def::GKHsroHEPAA::uStFMASWQcOO1XaQPRYihg` |
| Create a Leads List | POST | `/leads_lists` | `conn_mod_def::GKHsrYOobkg::34J4m-hXRlefHocg-o4NTw` |
| Delete a Leads List | DELETE | `/leads_lists/{{id}}` | `conn_mod_def::GKHsrW4bAVg::xoZcI1MeTYO1F8XNIkYPUA` |
| Update a Leads List | PUT | `/leads_lists/{{leadsListId}}` | `conn_mod_def::GKHsrnZfdLA::AIN6kATQTJmH5TflK8AJew` |

### LeadCustomAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Lead Custom Attributes | GET | `/leads_custom_attributes` | `conn_mod_def::GKHsqfbnMgg::TdSNcR_DQgutuDk9mXM8Tg` |
| Update a Lead Custom Attribute | PUT | `/leads_custom_attributes/{{id}}` | `conn_mod_def::GKHsq2_V2tg::iW4IbHgaTR6JTiEmtRSkeA` |

### CampaignRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Campaign's Recipients | GET | `/campaigns/{{campaignId}}/recipients` | `conn_mod_def::GKHsrE6cR-g::uNM6NX3LQtOi85oJrG-x0Q` |
| Add a Recipient to a Sequence (Campaign) | POST | `/campaigns/{{id}}/recipients` | `conn_mod_def::GKHsrDtkwXg::CjjVIXy2SoqDNT7-YtmXMw` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Company by Domain (Company Enrichment) | GET | `/companies/find` | `conn_mod_def::GKHsrNNvAyA::cIKNW5SPQwSu2dJRJ6zcFQ` |
| Discover Companies | POST | `/discover` | `conn_mod_def::GKHsq4aimeA::L6WyPrq6Q1mKM1dbHaR_2Q` |

### DomainSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Domain Search | GET | `/domain-search` | `conn_mod_def::GKHsq6FmWMA::C-7oeOcBR4OdY0XWCKWglQ` |
| Test Connection | GET | `/domain-search?domain=intercom` | `conn_mod_def::GKHtbG07cMg::VD1ceDH-TzO2p0miFiqltg` |

### LeadsCustomAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Attribute | GET | `/leads_custom_attributes/{{id}}` | `conn_mod_def::GKHsqu_Rqyg::b0sRhT2URpS-aK0vnGi2XQ` |
| Create a Lead Custom Attribute | POST | `/v2/leads_custom_attributes` | `conn_mod_def::GKHsqffKjSg::rFjbUf25TDGyeyZ9jchfDA` |

### CustomAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Custom Attribute | DELETE | `/leads_custom_attributes/{{id}}` | `conn_mod_def::GKHsqgMSWoA::GNPs4R-7SIaXQ9eVsbVpkg` |

### CombinedEnrichment

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Combined Enrichment for an Email Address (Person + Company) | GET | `/combined/find` | `conn_mod_def::GKHsrD1wSOg::EXQm44xeQT2TBGGW2gxAkg` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Sequences (Campaigns) | GET | `/campaigns` | `conn_mod_def::GKHsrD5uCdg::adBLnJjoT_ifkmanKoXY4w` |

### EmailVerifier

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify an Email Address (Email Verifier) | GET | `/email-verifier` | `conn_mod_def::GKHsrEOOBQg::cV6dy4XITlSBL97UlSc3QQ` |

### LeadsList

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Leads List | GET | `/leads_lists/{{id}}` | `conn_mod_def::GKHsrnswVeA::xiKVDASjQ2qXCAGG54mbBw` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Information | GET | `/account` | `conn_mod_def::GKHsqfhVc8A::vLzeDT_FQseIccmL0E6x0A` |

### EmailFinder

| Action | Method | Path | Action id |
|---|---|---|---|
| Find an Email Address (Email Finder) | GET | `/email-finder` | `conn_mod_def::GKHsq4zExrg::RWffHccvRj6CleVN4L6KAA` |

### EmailCount

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Email Count for a Domain or Company | GET | `/email-count` | `conn_mod_def::GKHsq7YQdkg::22Y0x76BQzKavAe9CvMxhA` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Email Enrichment (Find a Person by Email or LinkedIn Handle) | GET | `/people/find` | `conn_mod_def::GKHsrOeeBQg::AqrH9gEFSC27fy5Non7Y_A` |

## When a call fails

The error comes from Hunter, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/hunter

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
