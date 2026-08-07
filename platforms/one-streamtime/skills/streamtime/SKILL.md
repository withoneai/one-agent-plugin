---
name: streamtime
description: Streamtime is a project management and business operations platform for agencies and studios that provides project planning, time tracking, budgeting, invoicing, and reporting tools, allowing teams to manage client work, monitor profitability, and streamline delivery from estimate to payment. Read and write Streamtime data through One: loggedtimes, jobmilestones, jobs, jobitemusers, jobitems, jobitemroles and more, 82 actions with real parameter documentation. Use whenever the user asks to look something up in Streamtime, create or update a record there, or build code against the Streamtime API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: streamtime
  generated-from: one-knowledge-base
---

# Streamtime through One

Streamtime is a project management and business operations platform for agencies and studios that provides project planning, time tracking, budgeting, invoicing, and reporting tools, allowing teams to manage client work, monitor profitability, and streamline delivery from estimate to payment.

One exposes Streamtime through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `streamtime` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Streamtime is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Streamtime account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### LoggedTimes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Logged Time Entry By ID | GET | `/v2/logged_times/{{loggedTimeId}}` | `conn_mod_def::GLNRCxDR__A::Bzo-gApXRyuwdCVWUeg0Sw` |
| Create A Logged Time Entry | POST | `/v2/logged_times` | `conn_mod_def::GLNRCncMsGg::fJ3QxBwAQyeDkhvGZBsfZA` |
| Create Multiple Logged Time Entries | POST | `/v2/logged_times/bulk` | `conn_mod_def::GLNRCxt5_yA::dHlLsLNLTTqX7Qwdxn0hzQ` |
| Delete Logged Time Entry | DELETE | `/v2/logged_times/{{loggedTimeId}}` | `conn_mod_def::GLNRCwh1VDg::lpsoWjZ7QC-_CTj54e_tOg` |
| Update Logged Time Entry | PUT | `/v2/logged_times/{{loggedTimeId}}` | `conn_mod_def::GLNRCxDXDOg::dfQN6sxJRgGj32mpryXpUw` |

### JobMilestones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Milestone By ID | GET | `/v2/job_milestones/{{jobMilestoneId}}` | `conn_mod_def::GLNRBFtoprA::aeSHHxGYSOS-WQnedSZJ5A` |
| List Job Milestones | GET | `/v2/jobs/{{jobId}}/job_milestones` | `conn_mod_def::GLNRByWL5UA::grTwMuE8QGynQM-VEdDXxQ` |
| Create A Job Milestone | POST | `/v2/jobs/{{jobId}}/job_milestones` | `conn_mod_def::GLNRBpCkX5g::AbE_f0pAQqqQ1mJsH_rXDQ` |
| Delete A Job Milestone By ID | DELETE | `/v2/job_milestones/{{jobMilestoneId}}` | `conn_mod_def::GLNRBYAFuVg::G0QViixmRTWVLsX8M1EOYQ` |
| Update A Job Milestone By ID | PUT | `/v2/job_milestones/{{jobMilestoneId}}` | `conn_mod_def::GLNRBGKfbCA::AQdTG8grTda5NeDxyzpR0g` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Job | GET | `/v2/jobs/{{jobId}}` | `conn_mod_def::GLNRBn4Sg1A::qT1lcl-YSxiLA2NE1aI7HA` |
| Create A Job | POST | `/v2/jobs` | `conn_mod_def::GLNRBgUZF3A::_Kn66vyRQ2ajtXiCLB3-Lg` |
| Duplicate A Job | POST | `/v2/jobs/{{jobId}}/duplicate` | `conn_mod_def::GLNRBohnSdA::AzhQa-K1QaizShDUnqjf-Q` |
| Update A Job | PUT | `/v2/jobs/{{jobId}}` | `conn_mod_def::GLNRByrtXhA::uuMgJ9_ASzG4wR6mfKImrg` |
| Update A Job's Status | PUT | `/v2/jobs/{{jobId}}/job_status` | `conn_mod_def::GLNRCNXXh1A::u1qkgtGMS_-HqalFdF_KIg` |

### JobItemUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Item User By ID | GET | `/v2/job_item_users/{{jobItemUserId}}` | `conn_mod_def::GLNRA0Uwj4A::CVrjrcqXSrG7vjJcRnduRQ` |
| List Job Item Users | GET | `/v2/job_items/{{jobItemId}}/job_item_users` | `conn_mod_def::GLNRBFnQOBg::wpCo5xERTqmqBpKjF1hg8g` |
| Create A Job Item User | POST | `/v2/job_items/{{jobItemId}}/job_item_users` | `conn_mod_def::GLNRA0et2_A::CyfS_GSyR_-uiicJFwKNLQ` |
| Update Job Item User | PUT | `/v2/job_item_users/{{jobItemUserId}}` | `conn_mod_def::GLNRA1C8elg::n3Eur89eQgaYtwxlbwBbow` |

### JobItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Item By ID | GET | `/v2/job_items/{{jobItemId}}` | `conn_mod_def::GLNRA8v6isA::22WNAK0KQSKApaivPCz3-A` |
| List Job Items | GET | `/v2/jobs/{{jobId}}/job_items` | `conn_mod_def::GLNRBxuLfGg::_QPk7mr2T1qESpbxoTlVpA` |
| Create A Job Item | POST | `/v2/jobs/{{jobId}}/job_items` | `conn_mod_def::GLNRBgsPabg::9cB7N2CdQ4KClhObm_j8IA` |
| Update Job Item | PUT | `/v2/job_items/{{jobItemId}}` | `conn_mod_def::GLNRBGO_1Cg::03lXZoJrRB2rF2N3JT3vyQ` |

### JobItemRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Item Role By ID | GET | `/v2/job_item_roles/{{jobItemRoleId}}` | `conn_mod_def::GLNRAocyFkg::PnFyk54KQXeaHFvECfy6TA` |
| List Job Item Roles | GET | `/v2/job_items/{{jobItemId}}/job_item_roles` | `conn_mod_def::GLNRA9EsROg::1PrGAsgHTjGvlWadTNBR5Q` |
| Create Job Item Role | POST | `/v2/job_items/{{jobItemId}}/job_item_roles` | `conn_mod_def::GLNRA-fF8bg::Y-DDgQ3rROmP54-imle-hg` |
| Update Job Item Role | PUT | `/v2/job_item_roles/{{jobItemRoleId}}` | `conn_mod_def::GLNRAmYgNKg::g0F3WRgARtK6iWUGMqh8Lg` |

### JobPhases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Phase By ID | GET | `/v2/job_phases/{{jobPhaseId}}` | `conn_mod_def::GLNRBffbmIA::LFtX9jyeRZCv0SlpV8iCHg` |
| List Job Phases | GET | `/v2/jobs/{{jobId}}/job_phases` | `conn_mod_def::GLNRCEhHQ4A::LYQhDrVHRlWDwRVBJg4SAw` |
| Create A Job Phase | POST | `/v2/jobs/{{jobId}}/job_phases` | `conn_mod_def::GLNRBovHBwA::qJqMGpuGS5ucjW9ur8P5eg` |
| Update A Job Phase By ID | PUT | `/v2/job_phases/{{jobPhaseId}}` | `conn_mod_def::GLNRBgsIsvg::CkoQpTPLTpqqglxpiX678w` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Invoice As PDF | GET | `/v2/invoices/{{invoiceId}}/pdf` | `conn_mod_def::GLNRAWw143A::IBLAFGygRRSk9QeFcjlVNQ` |
| Get Invoice By ID | GET | `/v2/invoices/{{invoiceId}}` | `conn_mod_def::GLNRAWhZHnA::oWFUCvFoTAWE5C_0F97PuQ` |
| Get Invoice HTML | GET | `/v2/invoices/{{invoiceId}}/html` | `conn_mod_def::GLNRAWo5_-g::r5m_LobdS-Ohh75NdEqs_Q` |
| Update Invoice | PUT | `/v2/invoices/{{invoiceId}}` | `conn_mod_def::GLNRAl_fVHA::U0jA9yl-SMWx0ZPYYtcmZw` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Labels | GET | `/v2/labels` | `conn_mod_def::GLNRCM69kOA::pNkvfDlvThSjcb_JK_1FoQ` |
| Bulk Fetch Labels For Multiple Entities | POST | `/v2/labels/search` | `conn_mod_def::GLNRCMYHyKg::9juCjU14Se6Pr1pXY74tAQ` |
| Create A Label | POST | `/v2/labels` | `conn_mod_def::GLNRCMY0ehA::Apq9OUnMS9u00c06kZpEXQ` |
| Delete A Label | DELETE | `/v2/labels/{{labelId}}` | `conn_mod_def::GLNRCMY0nTg::5eBugYgeQ42g60BXlZ38ew` |

### JobItemSubItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Item Sub Item By ID | GET | `/v2/job_item_sub_items/{{jobItemSubItemId}}` | `conn_mod_def::GLNRA0V7UDg::niRKpdJkRIyA3eyOMg_vOw` |
| List Job Item Sub-Items | GET | `/v2/job_items/{{jobItemId}}/job_item_sub_items` | `conn_mod_def::GLNRA80fW7A::iJu9Aj8BTUyBnbiZJvyZdA` |
| Create Job Item Sub-Item | POST | `/v2/job_items/{{jobItemId}}/job_item_sub_items` | `conn_mod_def::GLNRA9R_scA::IJhxulz9QFeDRGmeh9vXIg` |

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Quote As PDF | GET | `/v2/quotes/{{quoteId}}/pdf` | `conn_mod_def::GLNRCU_etcg::pLAfE8NgTTy1OQmNvk-zTQ` |
| Get Quote By ID | GET | `/v2/quotes/{{quoteId}}` | `conn_mod_def::GLNRCVIPwrA::uEMfYft4SE6mBkzzbZC-QQ` |
| Get Quote HTML | GET | `/v2/quotes/{{quoteId}}/html` | `conn_mod_def::GLNRCU_jB0A::yIzF1fhFQ5mWo7nKyWzb-A` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company By ID | GET | `/v2/companies/{{companyId}}` | `conn_mod_def::GLNQ_6VPWCg::JhYTH8B1TvazpxG9_nKDtQ` |
| Create A Company | POST | `/v2/companies` | `conn_mod_def::GLNQ_57UdGA::b9eEeNe6ScG8NgC2VRHy0w` |
| Update Company | PUT | `/v2/companies/{{companyId}}` | `conn_mod_def::GLNRADEXO_A::aExZDpl8QNCb_ksw3d5KGQ` |

### LoggedExpenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Logged Expense By ID | GET | `/v2/logged_expenses/{{loggedExpenseId}}` | `conn_mod_def::GLNRANu0HTA::PlQCw58DQGmAXsPZH0vK5Q` |
| Create A Logged Expense | POST | `/v2/logged_expenses` | `conn_mod_def::GLNRAN5t3jA::hXR1cj-5SWyGXWxWUhkVnA` |
| Update Logged Expense | PUT | `/v2/logged_expenses/{{loggedExpenseId}}` | `conn_mod_def::GLNRAN2zudg::zl7esfOtQNWzBJdAGcTRZA` |

### Branches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Branch By ID | GET | `/v2/branches/{{branchId}}` | `conn_mod_def::GLNQ_7GOkVg::98R-EHHnTBaadA7W9WOfCA` |
| List Branches | GET | `/v2/branches` | `conn_mod_def::GLNQ_5isvZA::MBrdeq9LRMWhDfFyOuMEpQ` |

### RateCards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Specific Rate Card | GET | `/v2/rate_cards/{{rateCardId}}` | `conn_mod_def::GLNRCdetW4A::l2OqC78MRmmBxx58tZr3Dg` |
| List Your Organisation's Rate Cards | GET | `/v2/rate_cards` | `conn_mod_def::GLNRCdnP0gg::oqVKrt-uRF-qqo8HiNuKGg` |

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Specific Role | GET | `/v2/roles/{{roleId}}` | `conn_mod_def::GLNRCfp0LJg::fqvVKAIcTMKDDsDjYWyRrg` |
| List Your Organisation's Roles | GET | `/v2/roles` | `conn_mod_def::GLNRCd7CvhA::l470rnF6SxuVCI3JXa9UVw` |

### TrackedLineItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tracked Line Items For A Quote Use This To Determine The Source Of A Quote Line Item, As Well As Where It Was Eventually Invoiced To | GET | `/v2/quotes/{{quoteId}}/tracked_line_items` | `conn_mod_def::GLNRCfz4vGg::6qUOxvcKQT6tIMtBdscrPQ` |
| List Tracked Line Items For An Invoice | GET | `/v2/invoices/{{invoiceId}}/tracked_line_items` | `conn_mod_def::GLNRAmQtGyA::hxvDwjEiQ5uMNBfX5T3bIA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Specific User | GET | `/v2/users/{{userId}}` | `conn_mod_def::GLNRCwUih4g::QyoXUpJIQn-E0QzhR7xjkg` |
| List Your Organisation's Users | GET | `/v2/users` | `conn_mod_def::GLNRC4yqizg::eZe1gf9RRLS2P7HodPyP1A` |

### CompanyContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Contacts | GET | `/v2/companies/{{companyId}}/contacts` | `conn_mod_def::GLNRADiLslg::vd67NSy7Q8KbvEKni8U9RQ` |
| Create Company Contact | POST | `/v2/companies/{{companyId}}/contacts` | `conn_mod_def::GLNQ_7wPbQA::ZYzHSYEuSruWelljy2X-Qg` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get A Specific Contact | GET | `/v2/contacts/{{contactId}}` | `conn_mod_def::GLNRADKygRg::IrQ1u4wHS7mOdyAP6AQBSg` |
| Update A Contact | PUT | `/v2/contacts/{{contactId}}` | `conn_mod_def::GLNRADnNOtg::einN2rxTTt-bDMFJci0ZKw` |

### InvoicePayments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invoice Payments And Payouts | GET | `/v2/invoices/{{invoiceId}}/invoice_payments` | `conn_mod_def::GLNRAsp_s4g::A0XXIjw-RkGksUzI-e2cvg` |
| Create An Invoice Payment | POST | `/v2/invoices/{{invoiceId}}/invoice_payments` | `conn_mod_def::GLNRAeWosYg::iDQq0B-RQyKPrAIr-UTG3w` |

### SearchSetup

| Action | Method | Path | Action id |
|---|---|---|---|
| Get The Configuration Details Required To Construct A Search Request Accurately | GET | `/v2/search/setup` | `conn_mod_def::GLNRCn_HWqA::AiPqraqSQyqGDI99IYA0QQ` |

### GroupedSearchTimeSeries

| Action | Method | Path | Action id |
|---|---|---|---|
| Runs A Report Within Streamtime To Return Grouped Results Split Into Time Based Buckets | POST | `/v2/grouped_search/time_series` | `conn_mod_def::GLNRCn_LiPA::6OxHL2H-Ray30TLN60EuGQ` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Searches For Records That Match Your Search Conditions | POST | `/v2/search` | `conn_mod_def::GLNRCoYR9wg::-JxSbI5zRJiqRDLYo7MmeA` |

### GroupedSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Runs A Report Within Streamtime To Return Grouped Results | POST | `/v2/grouped_search/column_series` | `conn_mod_def::GLNRCpTJzXA::fLSQAhurRAGvNZ1LfXeRJQ` |

### SavedSegments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Saved Segments For A User | GET | `/v2/users/{{userId}}/saved_segments` | `conn_mod_def::GLNRDDuDPYA::oAEEbVkfQfiKJjzkX38d1A` |

### JobSubItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Job Sub Item | PUT | `/v2/job_item_sub_items/{{jobItemSubItemId}}` | `conn_mod_def::GLNRA0ln4DA::8tbKsGZASr-Td29pBKi3ng` |

### JobActivityEntryComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create A Job Activity Entry Comment | POST | `/v2/jobs/{{jobId}}/activity_entries` | `conn_mod_def::GLNRBgMA5dA::Gn2iyqUeT8SovRynvoN9tA` |

### Organisation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Your Organisation's Details | GET | `/v2/organisation` | `conn_mod_def::GLNRCU0Fheg::MowCi92wRvKFK8KFu6siRQ` |

### CompanyAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Addresses | GET | `/v2/companies/{{companyId}}/addresses` | `conn_mod_def::GLNRAFV1edA::nU5ZyJqgTrGNhQMCw7daTw` |

### PurchaseOrderLineItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Purchase Order Line Items For A Logged Expense | GET | `/v2/logged_expenses/{{loggedExpenseId}}/purchase_order_line_items` | `conn_mod_def::GLNRANuuDmg::2Xe2AVdMQFOOVj7JEecV9A` |

### PurchaseOrder

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Purchase Order For A Logged Expense | GET | `/v2/logged_expenses/{{loggedExpenseId}}/purchase_order` | `conn_mod_def::GLNRAPTZ52g::rTorAt78RjeMMT4dAUX7RA` |

### InvoiceLineItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invoice Line Items | GET | `/v2/invoices/{{invoiceId}}/invoice_line_items` | `conn_mod_def::GLNRAWcFu6A::wfjSJzphRly6HO7mmxWc0Q` |

### JobActivityEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Job Activity Entries | GET | `/v2/jobs/{{jobId}}/activity_entries` | `conn_mod_def::GLNRBqcwukA::ylCFBk62Q0OE6TBhptYwAw` |

### QuoteLineItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Quote Line Items For A Quote | GET | `/v2/quotes/{{quoteId}}/quote_line_items` | `conn_mod_def::GLNRCVnPPDg::4LGMzhkWQvqSoz05EgxmkA` |

### JobItemDependencies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Job Item Dependencies | GET | `/v2/jobs/{{jobId}}/job_items/dependencies` | `conn_mod_def::GLNRByK_sZg::HEVojGLYTi6EnS1-k1r0uA` |

## When a call fails

The error comes from Streamtime, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/streamtime

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
