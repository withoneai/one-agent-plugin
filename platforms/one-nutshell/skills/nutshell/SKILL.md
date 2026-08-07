---
name: nutshell
description: Nutshell is an AI-powered CRM and marketing automation platform for small businesses that provides contact management, pipeline tracking, email marketing, reporting, and sales communication tools, allowing teams to manage leads, automate outreach, and close deals more efficiently. Read and write Nutshell data through One: leads, accounts, contacts, notes, tasks, activities and more, 109 actions with real parameter documentation. Use whenever the user asks to look something up in Nutshell, create or update a record there, or build code against the Nutshell API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: nutshell
  generated-from: one-knowledge-base
---

# Nutshell through One

Nutshell is an AI-powered CRM and marketing automation platform for small businesses that provides contact management, pipeline tracking, email marketing, reporting, and sales communication tools, allowing teams to manage leads, automate outreach, and close deals more efficiently.

One exposes Nutshell through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `nutshell` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Nutshell is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Nutshell account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead | GET | `/rest/leads/{{id}}` | `conn_mod_def::GMZncy_vLKA::ix6KDKn_SXKm0UFtMRtMIA` |
| Get a Lead's Stages | GET | `/rest/leads/{{id}}/stages` | `conn_mod_def::GMZndepxxyA::tj03ZhOaQPWAvWt5DjupGA` |
| Get Lead Fields | GET | `/rest/leads/list/fields` | `conn_mod_def::GMZndk0O2Wg::zKzNIloyT7q30RuMQCiQeQ` |
| Get Reports for Leads | GET | `/rest/leads/report` | `conn_mod_def::GMZndnBOXPA::MdRhtbOiQ6uFfoFm3ypXyw` |
| List Items for All Leads | GET | `/rest/leads/list` | `conn_mod_def::GMZndneHdCA::sYGRTzIKS1CnFf6I5yyUSw` |
| List Leads | GET | `/rest/leads` | `conn_mod_def::GMZndVj5LWA::RTmBSHehTWixwQo8Nv8ZBg` |
| Create a Lead | POST | `/rest/leads` | `conn_mod_def::GMZnczmJE0g::cPe-yIhVTVWmd0siyvyexA` |
| Delete a Lead | DELETE | `/rest/leads/{{id}}` | `conn_mod_def::GMZnczEsFYg::wFPpffVyRlSRJumiDGoiFQ` |
| Reopen a Lead | POST | `/rest/leads/{{id}}/reopen` | `conn_mod_def::GMZndlCR1gg::nX9BzZuKRMqTWwsxxwkrDw` |
| Set the Pipeline for a Lead | POST | `/rest/leads/{{id}}/stageset` | `conn_mod_def::GMZndlfEhJg::6BxubBILQwiGnNcGK7LeWA` |
| Undelete a Lead | POST | `/rest/leads/{{id}}/undelete` | `conn_mod_def::GMZndwH8CKA::2fzHdBg1SV6QtXPCEb6mTg` |
| Update a Lead | PATCH | `/rest/leads/{{id}}` | `conn_mod_def::GMZndt953cA::aFosE4-YTXW0UqqHp860mA` |

3 more Leads actions are available through search.

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account by ID | GET | `/rest/accounts/{{id}}` | `conn_mod_def::GMZnbgjKnOA::oL9UoDsCSxWAeK23TYJE4Q` |
| Get Custom Fields for an Account | GET | `/rest/accounts/{{id}}/customfields` | `conn_mod_def::GMZnbgW9g_A::nCwj0Q-wS7-y_Qisaz5qBg` |
| List Accounts | GET | `/rest/accounts` | `conn_mod_def::GMZnbXMqu-g::-V7gGf37Ry6tYeDkvo-IEQ` |
| List Accounts in List Item Format | GET | `/rest/accounts/list` | `conn_mod_def::GMZnbhMEr3A::NgMDZphLQFCYamu43TGrvg` |
| Create an Account | POST | `/rest/accounts` | `conn_mod_def::GMZnbVQAHJA::1JCMzbSURVGnrppxyBU2DA` |
| Delete an Account | DELETE | `/rest/accounts/{{id}}` | `conn_mod_def::GMZnbWWtfKg::MzcHeckXS6aPRh2h02sd6w` |
| Undelete an Account | POST | `/rest/accounts/{{id}}/undelete` | `conn_mod_def::GMZnbnoAGpg::HpK1S4sYTK-__GPw1DFksg` |
| Update an Account | PATCH | `/rest/accounts/{{id}}` | `conn_mod_def::GMZnbotRumg::tbdD9i6-Tl66zVxJP75Adg` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/rest/contacts/{{id}}` | `conn_mod_def::GMZncJmMREg::T_2Sqda4Rni-h1z9iQJILg` |
| List Contacts | GET | `/rest/contacts` | `conn_mod_def::GMZncSYHGKg::q564Nom3R8uzNbVVBQ9H8w` |
| Create a Contact | POST | `/rest/contacts` | `conn_mod_def::GMZncK8542g::H05c-R3oTA6Lpcsl9cfmNw` |
| Create a Contact Custom Field | POST | `/rest/contacts/customfield` | `conn_mod_def::GMZncKGEqCA::Fisfbb39RCy5IUaKrrYbkw` |
| Delete a Contact | DELETE | `/rest/contacts/{{id}}` | `conn_mod_def::GMZncJej8JA::uGdHyqkFQGCXWGzfz6L1KA` |
| Undelete a Contact | POST | `/rest/contacts/{{id}}/undelete` | `conn_mod_def::GMZncZM2a7g::ooVQ-C5bSl-S41YjGqMh9w` |
| Update a Contact | PATCH | `/rest/contacts/{{id}}` | `conn_mod_def::GMZncZMjWOg::RkdbO680SQS2hufaJDhXRw` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note | GET | `/rest/notes/{{id}}` | `conn_mod_def::GMZnd_55ZLA::65eibOj3SoiC7rSkHyH-cw` |
| List Notes | GET | `/rest/notes` | `conn_mod_def::GMZnd5WXxMg::2nOb9BNtTfW3gdyNAzxr_A` |
| Create a Note | POST | `/rest/notes` | `conn_mod_def::GMZnd3SvjyA::6wOVREi1SX-Gknozfgs5Gg` |
| Delete a Note | DELETE | `/rest/notes/{{id}}` | `conn_mod_def::GMZnd3f3_3g::GroZ9Y_1QjaQ4Gr8oIsf7Q` |
| Undelete a Note | POST | `/rest/notes/{{id}}/undelete` | `conn_mod_def::GMZneBL7-SA::I_N_MIN8SMyzf5_8D4tK2Q` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task | GET | `/rest/tasks/{{id}}` | `conn_mod_def::GMZne5-8CJg::w2hgOT_BQ7u9_hK848s5_g` |
| List Tasks | GET | `/rest/tasks` | `conn_mod_def::GMZne7ZUwzg::FADj5oVuQqaZNnY9sqaHow` |
| Create a Task | POST | `/rest/tasks` | `conn_mod_def::GMZne5vSQ3g::Mm-cSZ_SQv-0yEpmM7XDcQ` |
| Delete a Task | DELETE | `/rest/tasks/{{id}}` | `conn_mod_def::GMZne5qZt8A::pF-pNiOBTk2SE11CeQDEXg` |
| Update a Task | PATCH | `/rest/tasks/{{id}}` | `conn_mod_def::GMZnfCtrijA::HuDF_NS1TVCiFQZmhfF09Q` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Activity | GET | `/rest/activities/{{id}}` | `conn_mod_def::GMZnb7Tp-mA::vZS0bKsPQ-O4E34V5p2iVg` |
| List Activities | GET | `/rest/activities` | `conn_mod_def::GMZnbp2m1AA::JnBppsdhQzagSthwgoxu8g` |
| Create an Activity | POST | `/rest/activities` | `conn_mod_def::GMZnb0pI1_g::m_EkZBzDTD-IkbAa-Wbxnw` |
| Update an Activity | PUT | `/rest/activities/{{id}}` | `conn_mod_def::GMZnb75QkFA::oL_KQKYOTSKM7kBxUt6_7w` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product | GET | `/rest/products/{{id}}` | `conn_mod_def::GMZneJAH67g::JxGsyo_ZQFi80mAsRwfGdg` |
| List Products | GET | `/rest/products` | `conn_mod_def::GMZneP8kTXA::DJ2G0JSlRyO0MlCFgWt-WQ` |
| Delete a Product | DELETE | `/rest/products/{{id}}` | `conn_mod_def::GMZneH9UPYA::CSIJzKWKTOurQhB3t9k-ww` |
| Undelete a Product | POST | `/rest/products/{{id}}/undelete` | `conn_mod_def::GMZnePGCbzA::QEfEuanQTzuU1yKlh6Hh3w` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sources | GET | `/rest/sources` | `conn_mod_def::GMZnecSpq9A::hO_1F6HySNyku2zoDTv2mw` |
| Create a Source | POST | `/rest/sources` | `conn_mod_def::GMZneaNt1AA::eADLhZ1oTJKfHL66NgYS8g` |
| Delete a Source | DELETE | `/rest/sources/{{id}}` | `conn_mod_def::GMZneZnpUeg::UuVpgnGAQiWUoo49R3xHHg` |
| Undelete a Source | POST | `/rest/sources/{{id}}/undelete` | `conn_mod_def::GMZneqYMpVA::gCPnqVZNRduABZ1iMdTyDw` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags | GET | `/rest/tags` | `conn_mod_def::GMZnexuTpsA::KPRFqQZzTT2Zzi2aN_W28Q` |
| Create a Tag | POST | `/rest/tags` | `conn_mod_def::GMZnewsetwg::cDH9_hEMSx6JZxvEiBR6LQ` |
| Delete Tag | DELETE | `/rest/tags/{{id}}` | `conn_mod_def::GMZney97SyA::Ps7Gz_sFSYijPfii_SKXwA` |
| Undelete a Tag | POST | `/rest/tags/{{id}}/undelete` | `conn_mod_def::GMZne5uSDfg::GhoepHOSRImMgy1CKxyO7w` |

### CompetitorMaps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead-Competitor Relationship | GET | `/rest/competitormaps/{{id}}` | `conn_mod_def::GMZncCN4VLg::Izd5BhTIRI6kkl8NlIym2w` |
| List Lead-Competitor Relationships | GET | `/rest/competitormaps` | `conn_mod_def::GMZncDiFiXA::SPFe08o-QJuetgru0Y9bqw` |
| Update a Lead-Competitor Relationship | PATCH | `/rest/competitormaps/{{id}}` | `conn_mod_def::GMZncK1yx5g::TL6TOKzvTLqwjFEm_FYOfQ` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form | GET | `/rest/forms/{{id}}` | `conn_mod_def::GMZncgyLYTA::9tYwiT1CQrOAFwJpQ5zhog` |
| Get a Form Field | GET | `/rest/forms/{{fieldId}}` | `conn_mod_def::GMZncg4ImvA::umPiP7yCRT-k5f2Orz1qNA` |
| List Forms | GET | `/rest/forms` | `conn_mod_def::GMZncpytsfA::QDA5ojXFRl6-1Ssx94kp5A` |

### ProductCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product Category | GET | `/rest/productcategories/{{id}}` | `conn_mod_def::GMZnd_oZJ3A::DRdipxC_Q1ScVwmJkd6XlQ` |
| List All Product Categories | GET | `/rest/productcategories` | `conn_mod_def::GMZneAFSqBg::9OWpGJtyQG6cRo_plfl4Nw` |
| Create Product Categories | POST | `/rest/productcategories` | `conn_mod_def::GMZneAP-qZA::pvOFpY1lSbqkRqW5wO0FXQ` |

### ProductMaps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Lead Product | GET | `/rest/productmaps/{{id}}` | `conn_mod_def::GMZneICRhCg::GVfF-7RRQLOiLaKIzU77_g` |
| Get Lead Products | GET | `/rest/productmaps` | `conn_mod_def::GMZneIbzUhA::P6R1eUy2QhyLa2KmEeH5Kg` |
| Delete a Product on a Lead | DELETE | `/rest/productMaps/{{id}}` | `conn_mod_def::GMZneI6s0Fg::bp5xR8JiQr2hDtuomp4sEA` |

### Industries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Industry by ID | GET | `/rest/industries/{{id}}` | `conn_mod_def::GMZncrNdY3g::XogcVovYTXKDUAHVMhpLCQ` |
| List Industries | GET | `/rest/industries` | `conn_mod_def::GMZnbhAHjHA::TBPGRQsnTdmWTkjVrIW9eA` |

### Audiences

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audiences | GET | `/rest/audiences` | `conn_mod_def::GMZnb6-SSXg::tA1FREW6QM2JuzUa__rLYw` |
| Create an Audience | POST | `/rest/audiences` | `conn_mod_def::GMZnb7jGyxg::8_oz6oTVS82CkysF7imztw` |

### Competitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Competitor | GET | `/rest/competitors/{{id}}` | `conn_mod_def::GMZncCeAyVA::2moQkja8Qb-Txk6rqV820g` |
| List Competitors | GET | `/rest/competitors` | `conn_mod_def::GMZncDcaMdA::1DDK9i23RzKAYWU8pZf1RQ` |

### ContactCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Applicable Contact Custom Fields | GET | `/rest/contacts/customfields/attributes` | `conn_mod_def::GMZncRhGVEA::VG5lH5X6TaSQq9hQNigJ8g` |
| Get Contact Custom Fields | GET | `/rest/contacts/{{id}}/customfields` | `conn_mod_def::GMZncRXIb3g::hoS6k53IRoSk7_G1G0yFjg` |

### Editions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Edition by ID | GET | `/rest/editions/{{id}}` | `conn_mod_def::GMZncZMnhzg::UcNL9eY4Sc2--R0GVelzYg` |
| List Editions | GET | `/rest/editions` | `conn_mod_def::GMZncaf7e7A::tk2WsV2wROK9EMI9UqydHQ` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice | GET | `/rest/invoices/{{id}}` | `conn_mod_def::GMZncrEy9eA::RcEtgUxtRMOvsw6smceYkA` |
| List Invoices | GET | `/rest/invoices` | `conn_mod_def::GMZncsUms-g::70vGkal1ThinLFWNGxsv1w` |

### Markets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Market by ID | GET | `/rest/markets/{{id}}` | `conn_mod_def::GMZnd3ShhWA::EhBmyuzlT4q0pC_o8kMZUw` |
| List Markets | GET | `/rest/markets` | `conn_mod_def::GMZnd2ql13g::UhJJTwJDQCabY5vPWbIelg` |

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Quote | GET | `/rest/quotes/{{id}}` | `conn_mod_def::GMZneRq7sAA::woYDrRjwT4ebFDdR2v2yqQ` |
| List Quotes | GET | `/rest/quotes` | `conn_mod_def::GMZneTfYDLA::0aAluvgfR0uR_B6-afZ4Wg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/rest/users/{{id}}` | `conn_mod_def::GMZnfC_bniA::Jtff5VBNQ-uRgxwKBNWtog` |
| List Users | GET | `/rest/users` | `conn_mod_def::GMZnfBtRyjg::Tvc10o3cSWOWLjWmgf3S7g` |

### AccountsCustomField

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Account Custom Field | POST | `/rest/accounts/customfield` | `conn_mod_def::GMZnbXNQLdg::RfrP7ZC8R5Wm8jx-KXWYLg` |

### AccountTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Types | GET | `/rest/accounttypes` | `conn_mod_def::GMZnbZ1c09g::daBJGG-cTOGkM8msGiwgcQ` |

### AccountCustomFieldAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Custom Field Attributes | GET | `/rest/accounts/customfields/attributes` | `conn_mod_def::GMZnbgdCCOA::TVaQLO96RJmmgz57gDl_oA` |

### AccountFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Fields | GET | `/rest/accounts/list/fields` | `conn_mod_def::GMZnbn2fnAA::A3FA0I9UQSSxfRNP_g9mpA` |

### ActivityTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Activity Types | GET | `/rest/activitytypes` | `conn_mod_def::GMZnb7GOOLg::wd92IMqtQa2gH9eM6eC3bg` |

### Competitormaps

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Lead-Competitor Relationship | DELETE | `/rest/competitormaps/{{id}}` | `conn_mod_def::GMZncCdz-BA::3sCwCfliQ1aXBDP5V9pYvg` |

### ContactFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Fields | GET | `/rest/contacts/list/fields` | `conn_mod_def::GMZncSJFr5A::s7CuDBr9TF-SP3_IyG8Esw` |

This lists 90 of 109 actions. For anything not here, call `search_one_platform_actions` with platform `nutshell`. The full catalog is at https://www.withone.ai/knowledge/nutshell.

## When a call fails

The error comes from Nutshell, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/nutshell

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
