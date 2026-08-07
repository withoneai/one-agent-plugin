---
name: lemlist
description: Lemlist is a sales engagement platform that provides email outreach, multichannel sequencing, lead database access, and personalization tools, allowing sales teams to automate prospecting, manage campaigns, and improve response rates through integrated workflows and analytics. Read and write lemlist data through One: leads, campaigns, schedules, unsubscribes, tasks, campaignleads and more, 82 actions with real parameter documentation. Use whenever the user asks to look something up in lemlist, create or update a record there, or build code against the lemlist API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: lemlist
  generated-from: one-knowledge-base
---

# lemlist through One

Lemlist is a sales engagement platform that provides email outreach, multichannel sequencing, lead database access, and personalization tools, allowing sales teams to automate prospecting, manage campaigns, and improve response rates through integrated workflows and analytics.

One exposes lemlist through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `lemlist` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm lemlist is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real lemlist account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Lead With Email | GET | `/leads/{{email}}` | `conn_mod_def::GLK-IiUN48A::_CVeb90bRn2D6hjbXV9Fsg` |
| Retrieve Lead With Email Or Id | GET | `/leads` | `conn_mod_def::GLK-Il845Wg::OUGcX2iLRGykGTc1HUyGNw` |
| Add Variables | POST | `/leads/{{leadId}}/variables` | `conn_mod_def::GLK-IPtvEDA::Xpt5hObVRieWNmw4dKy7EQ` |
| Create Lead In A Campaign | POST | `/campaigns/{{campaignId}}/leads/{{email}}` | `conn_mod_def::GLK-IQjraPg::kK5a7YHQRaCLxT4d5JYySw` |
| Delete Lead | DELETE | `/campaigns/{{campaignId}}/leads/{{leadId}}` | `conn_mod_def::GLK-IPNvEwg::8GQtkxpHSUKFoezyMUPjCw` |
| Enrich Lead | POST | `/leads/{{leadId}}/enrich` | `conn_mod_def::GLK-H8yGFJA::9tr5yLXhRCuLbS9BMHVz-w` |
| Import Leads From CRM | POST | `/campaigns/{{campaignId}}/leads/import` | `conn_mod_def::GLK-IYi0Dng::6zoQP-F8SfS_1jaDleAy-Q` |
| Mark A Lead As Interested | POST | `/leads/interested/{{leadIdOrEmail}}` | `conn_mod_def::GLK-IapFKmg::loDZNBNESzCYhHxW3NjILQ` |
| Mark A Lead As Not Interested | POST | `/leads/notinterested/{{leadIdOrEmail}}` | `conn_mod_def::GLK-IYgKRaA::LrVl6i2AQ9CGgvxCfHb4Wg` |
| Pause a Lead | POST | `/leads/pause/{{leadId}}` | `conn_mod_def::GLK-IhoShNA::_SbT_4RYQKOk-EFcD1Lwew` |
| Resume A Paused Lead | POST | `/leads/start/{{leadId}}` | `conn_mod_def::GLK-Ihqu6-A::NKXAizfjR5WjW2y2GhXRZg` |
| Update Lead | PATCH | `/campaigns/{{campaignId}}/leads/{{leadId}}` | `conn_mod_def::GLK-It1XVYg::0GNQ7Co9RViXrOpuT58BmQ` |

2 more Leads actions are available through search.

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All Campaigns | GET | `/api/campaigns` | `conn_mod_def::GLK-HlSSE7g::alb3yX9rSCuQqM_lTUUj6A` |
| Retrieve One Campaigns | GET | `/campaigns/{{campaignId}}` | `conn_mod_def::GLK-HjqtrKA::LAyrae3MRD-IKBdb1Hvj6Q` |
| Associate Schedule With Campaign | POST | `/campaigns/{{campaignId}}/schedules/{{scheduleId}}` | `conn_mod_def::GLK-Jamyklg::vIIhE9zbQ3e1xO60zXlb-Q` |
| Create A New Campaign | POST | `/api/campaigns` | `conn_mod_def::GLK-HZ7us-A::cJCGi8bdQSGwnxgBun0_BQ` |
| Export Campaign Send Status By Email | PUT | `/campaigns/{{campaignId}}/export/{{exportId}}/email/{{email}}` | `conn_mod_def::GLK-Hb2-3vg::dsOQuy6_TpqH80KPiaMTZA` |
| Pause A Campaign | POST | `/campaigns/{{campaignId}}/pause` | `conn_mod_def::GLK-Hj968_A::Mf3_ih8yQBuJWLS95mAoig` |
| Unsubscribe Lead From Campaign | DELETE | `/campaigns/{{campaignId}}/leads/{{email}}` | `conn_mod_def::GLK-IhslGcg::NwWEwevYQ1SI8NibFnh3kA` |
| Update Campaign Configuration | PATCH | `/campaigns/{{campaignId}}` | `conn_mod_def::GLK-HxAnbJA::O8ZC7EKITrm0nRcFNujWQA` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All Schedules | GET | `/api/schedules` | `conn_mod_def::GLK-JjqUgcg::Koyhh_fyTqeR0aEjXCX2zw` |
| Retrieve One Schedule | GET | `/schedules/{{scheduleId}}` | `conn_mod_def::GLK-JjPPsDg::XqHmDW9wTyu35cyUw979aQ` |
| Create A New Schedule | POST | `/api/schedules` | `conn_mod_def::GLK-JZqXK6g::ppkVZLcqTAW-LVSIR8dpWA` |
| Delete A Schedule | DELETE | `/schedules/{{scheduleId}}` | `conn_mod_def::GLK-JZq4MMg::BJvId8PYTBeKHQ0HePUSmg` |
| Update A Schedule | PATCH | `/schedules/{{scheduleId}}` | `conn_mod_def::GLK-JjPDezg::MSO-ZsiOSc2m-vUfHD-c7w` |

### Unsubscribes

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Unsubscribes | GET | `/api/unsubs/export` | `conn_mod_def::GLK-K1s-NZA::KT_CATx-TnOLtZdRSrPu4w` |
| Get Unsubscribe Email | GET | `/unsubscribes/{{email}}` | `conn_mod_def::GLK-K18gm_g::9uqiqNd9T4uJqQMHCIjL5A` |
| Retrieve Unsubscribes | GET | `/api/unsubscribes/` | `conn_mod_def::GLK-K2b6VEA::XKA_y1DyR_i_IYoRlWuIEA` |
| Add Unsubscribe Email-Domain | POST | `/unsubscribes/{{emailOrDomain}}` | `conn_mod_def::GLK-Kuac-HA::oH-Xar_GRrqqVkWhrVN0sA` |
| Delete Unsubscribe Email | DELETE | `/unsubscribes/{{email}}` | `conn_mod_def::GLK-KuD2mug::mE-tUYyNStelk6Xnf7kw7Q` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tasks | GET | `/api/tasks` | `conn_mod_def::GLK-J1bDBpg::FPUcfADbTVOWqq1Jh6TGFg` |
| Create Task | POST | `/api/tasks` | `conn_mod_def::GLK-J0tckZg::SmNWG7PLR1KUS8K2x6DymA` |
| Ignore Tasks | POST | `/api/tasks/ignore` | `conn_mod_def::GLK-Km_C2oA::igDnzof-SraG7yXoPaffIw` |
| Update Tasks | PATCH | `/api/tasks` | `conn_mod_def::GLK-J13vmqg::7Iv6QI1AQGyFTBkzD9UayQ` |

### CampaignLeads

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Campaign Leads | GET | `/campaigns/{{campaignId}}/export/leads` | `conn_mod_def::GLK-HafA0gA::h6a55ZCOTiSeCyS0torQEw` |
| Mark A Lead As Interested In One Campaign | POST | `/campaigns/{{campaignId}}/leads/{{leadIdOrEmail}}/interested` | `conn_mod_def::GLK-IY50j2g::pqSAhE7kQri2xezuzy-M9Q` |
| Mark A Lead As Not Interested In One Campaign | POST | `/campaigns/{{campaignId}}/leads/{{leadIdOrEmail}}/notinterested` | `conn_mod_def::GLK-IYf5r4g::6-9TJqinRrCGG15lsZi0NQ` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Companies Schema | GET | `/schema/companies` | `conn_mod_def::GLK-JHkOrAA::ljnJskk-SnWkbaDBL_hSNw` |
| Retrieve Companies | GET | `/api/companies` | `conn_mod_def::GLK-HyzPYHg::juktKUoSQMm5GXOL8xTv3g` |
| Companies Database | POST | `/api/database/companies` | `conn_mod_def::GLK-JJzMd6g::BSjHaVVqTd6QlNUE1iaH7Q` |

### CampaignStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Campaign Stats V2 | GET | `/v2/campaigns/{{campaignId}}/stats` | `conn_mod_def::GLK-JvAoaLA::6frRQ6wBR4KJPYtH6MB9sw` |
| Get Campaign Stats | GET | `/campaigns/{{campaignId}}/stats` | `conn_mod_def::GLK-JsfilEg::jHruW5YqQrefb65SQTDHVA` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact | GET | `/contacts/{{idOrEmail}}` | `conn_mod_def::GLK-Hxe-atA::Aa1pzIyITHqjHEuuTc-Mlw` |
| Get Contacts | GET | `/api/contacts` | `conn_mod_def::GLK-H58McsA::e_79ku9_TMqSc6aumtJ_FQ` |

### CompanyNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Company Notes | GET | `/companies/{{companyId}}/notes` | `conn_mod_def::GLK-HyxU3TA::6pvdbafbQjqqeHDraUzUZw` |
| Create Company Note | POST | `/companies/{{companyId}}/notes` | `conn_mod_def::GLK-HxqEPag::FDcsaaJ1S7Cm46yPJrRXwA` |

### SequenceSteps

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Sequence Step | DELETE | `/sequences/{{sequenceId}}/steps/{{stepId}}` | `conn_mod_def::GLK-JsZUUyg::Y__iGCJhQFGqSrw5Y6aikg` |
| Update Sequence Step | PATCH | `/sequences/{{sequenceId}}/steps/{{stepId}}` | `conn_mod_def::GLK-JsQuTng::CmYIC__FQ96wrfJIeejU9w` |

### Enrich

| Action | Method | Path | Action id |
|---|---|---|---|
| Enrich #1 | GET | `/enrich/{{enrichId}}` | `conn_mod_def::GLK-H7vN1mA::Mjpxt97ZTNGsr4bY7F3qJw` |
| Enrich #2 | POST | `/api/enrich` | `conn_mod_def::GLK-H9VpiDA::gj4_5mCzQSmnCNh7o_5ecA` |

### Inbox

| Action | Method | Path | Action id |
|---|---|---|---|
| Contact Messages | GET | `/inbox/{{contactId}}` | `conn_mod_def::GLK-IFf_ijg::3xzKJiXlRXCpNGBDJ0W4Lw` |
| Retrieve Inbox List | GET | `/inbox` | `conn_mod_def::GLK-IFjsxLA::wEG7PQWHSqia7Z1cZvlctQ` |

### Lemwarm

| Action | Method | Path | Action id |
|---|---|---|---|
| Pause Lemwarm | POST | `/lemwarm/{{userMailboxId}}/pause` | `conn_mod_def::GLK-Iu1vriA::fcvriA2RRWaFKgTyXB05FQ` |
| Start Lemwarm | POST | `/lemwarm/{{userMailboxId}}/start` | `conn_mod_def::GLK-JHXKccg::ytCBZjhJSrqyuoqPJFopqA` |

### LemwarmSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Settings | GET | `/lemwarm/{{userMailboxId}}/settings` | `conn_mod_def::GLK-I_3uf_A::R6toK9I-Spm2L67OnDNNnQ` |
| Update Settings | PATCH | `/lemwarm/{{userMailboxId}}/settings` | `conn_mod_def::GLK-JSLC2vA::HuuP2Pb9Ream9MVnuUJy2g` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Webhooks | GET | `/api/hooks` | `conn_mod_def::GLK-LEMeh8A::v3IPkymCRSquqEonAOloNw` |
| Delete A Webhook | DELETE | `/hooks/{{hookId}}` | `conn_mod_def::GLK-LEszGnA::5B_fGJqxRmO-xtLAzTJYdA` |

### CampaignExportStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Status Of Campaign Export | GET | `/campaigns/{{campaignId}}/export/{{exportId}}/status` | `conn_mod_def::GLK-HZ7FG3A::F-d-P5BaQwirbwiP8rOWaQ` |

### CampaignStatsExport

| Action | Method | Path | Action id |
|---|---|---|---|
| Start An Export Campaign Stats | GET | `/campaigns/{{campaignId}}/export/start` | `conn_mod_def::GLK-HpsuU0A::xuqCudlCTj2wjM2VdHbC-Q` |

### CampaignSequences

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Campaign Sequences | GET | `/campaigns/{{campaignId}}/sequences` | `conn_mod_def::GLK-JsQHt5A::0zfUeqdsSIOmI63FAXbrNw` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Activities | GET | `/api/activities/` | `conn_mod_def::GLK-Hb4Kbrg::VkVy6eUfSCa7C2ANzmWFiA` |

### CampaignReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Reports | GET | `/api/campaigns/reports` | `conn_mod_def::GLK-Hj29JvA::WR1i9GkIRpKUu4QwFbrJlQ` |

### Enrichments

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Enrichments | POST | `/api/v2/enrichments/bulk` | `conn_mod_def::GLK-H7E773A::PnhoFLDBT1GZJ4bzF7cJGA` |

### InboxEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Email | POST | `/api/inbox/email` | `conn_mod_def::GLK-IEmHg8A::xHGQl0B4T62kYaj-T10Pkw` |

### WhatsAppMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send WhatsApp Message | POST | `/api/inbox/whatsapp` | `conn_mod_def::GLK-IFAh2lA::mUgLgLbDRd6p1tYJDmi1uw` |

### LinkedinMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Linkedin Message | POST | `/api/inbox/linkedin` | `conn_mod_def::GLK-IHSoNbg::rwB1odJ9QKmgAe3JswdEkg` |

### CrmFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get CRM Filters | GET | `/api/crm/filters` | `conn_mod_def::GLK-IPsM-tA::kJxgXOveSaK7yZbjlEMjxQ` |

### Variables

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Variables | DELETE | `/leads/{{leadId}}/variables` | `conn_mod_def::GLK-IPwgQ3g::e9RvjY96R2-xtlighdCuiA` |

### DatabaseFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Database Filters | GET | `/api/database/filters` | `conn_mod_def::GLK-JHGGoeA::a3mCyAREQYqIj0OYkKZQDw` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| People Schema | GET | `/schema/people` | `conn_mod_def::GLK-JZ7M6gA::0UifEKZxT-S4W2XKUdnziQ` |

### PeopleDatabase

| Action | Method | Path | Action id |
|---|---|---|---|
| People Database | POST | `/api/database/people` | `conn_mod_def::GLK-JbR-cSA::zQL9ngjrTh2i6n74cnCYgw` |

### CampaignSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Campaign Schedules | GET | `/campaigns/{{campaignId}}/schedules/` | `conn_mod_def::GLK-JjPX-VA::iGvcB6ywTpKtf8x1OX5Ulw` |

### Sequences

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Step To Sequence | POST | `/sequences/{{sequenceId}}/steps` | `conn_mod_def::GLK-JjfparA::zhB3JKC_SFqHCyoygjTf5Q` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credits | GET | `/api/team/credits` | `conn_mod_def::GLK-J1_ynmg::km5NnUbTQsqXnsmt4QAZUw` |

### Team

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team | GET | `/api/team` | `conn_mod_def::GLK-KuAkTvg::R0HYcYGUSQCppqeUxOWSgw` |

### CrmUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Users CRMs | GET | `/api/team/crmUsers` | `conn_mod_def::GLK-KuOG_hA::b9nDGg4WTY2h3y58P1cMhQ` |

### Senders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Senders | GET | `/api/team/senders` | `conn_mod_def::GLK-KuS7vSA::AofihtzCT_qUugXNjLXYMQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User | GET | `/users/{{userId}}` | `conn_mod_def::GLK-K1s5T6g::JCb6USqZS4u7pBYPzZEXLQ` |

### Hooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Add A Webhook | POST | `/hooks` | `conn_mod_def::GLK-K9N7kOg::9E-1sYCrTlejxDuSjoKOaA` |

This lists 80 of 82 actions. For anything not here, call `search_one_platform_actions` with platform `lemlist`. The full catalog is at https://www.withone.ai/knowledge/lemlist.

## When a call fails

The error comes from lemlist, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/lemlist

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
