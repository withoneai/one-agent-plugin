---
name: givebutter
description: Givebutter is a fundraising platform that manages campaigns, contacts, transactions, tickets, payouts, funds, plans, and webhooks via REST, used by nonprofits to run donation pages, events, and supporter relationships. Read and write Givebutter data through One: contacts, households, campaigns, webhooks, campaigndiscountcodes, funds and more, 68 actions with real parameter documentation. Use whenever the user asks to look something up in Givebutter, create or update a record there, or build code against the Givebutter API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: givebutter
  generated-from: one-knowledge-base
---

# Givebutter through One

Givebutter is a fundraising platform that manages campaigns, contacts, transactions, tickets, payouts, funds, plans, and webhooks via REST, used by nonprofits to run donation pages, events, and supporter relationships.

One exposes Givebutter through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `givebutter` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Givebutter is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Givebutter account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/v1/contacts/{{contact}}` | `conn_mod_def::GK8OJEN5bPA::LZ_qRNUVRqibWwLnN9e5Sg` |
| List Contacts | GET | `/v1/contacts` | `conn_mod_def::GK8OJVfkWYg::JhIZejk7S7WlW10y-US01A` |
| Add Tags to a Contact | POST | `/v1/contacts/{{contact}}/tags/add` | `conn_mod_def::GK8OI3yBNRA::xN8dJaIyTreRE6bMUaBtlQ` |
| Create a Contact | POST | `/contacts` | `conn_mod_def::GK8OJFdMc_g::zfAoKeL_QcyhjMT5eqiMSA` |
| Delete a Contact | DELETE | `/v1/contacts/{{contact}}` | `conn_mod_def::GK8OJC8HZsg::FnNOuyqASeGJA6xTPhzIsw` |
| Remove Tags From a Contact | POST | `/v1/contacts/{{contact}}/tags/remove` | `conn_mod_def::GK8OJDD8Ctg::eAy7qVPvSEiNa3gAkXimKQ` |
| Restore a Contact | PATCH | `/v1/contacts/{{contact}}/restore` | `conn_mod_def::GK8OJN1RD-A::szznirVqRn-tfqc1mevbaw` |
| Sync Tags for a Contact | POST | `/v1/contacts/{{contact}}/tags/sync` | `conn_mod_def::GK8OJEGvHNA::86qQMsVyS5GKGRU7e95UHw` |
| Update a Contact | PUT | `/v1/contacts/{{contact}}` | `conn_mod_def::GK8OJOdDETg::dBCH64npQr6vbY7P--KxFA` |

### Households

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Household | GET | `/v1/households/{{household}}` | `conn_mod_def::GK8OKF3lqMA::Um0aW6rfS9WEpbM8L4E6AA` |
| List All Households | GET | `/households` | `conn_mod_def::GK8OKVMPBug::IESOrJ2lRHWLlFWhs9-93Q` |
| Add a Contact to a Household | POST | `/v1/households/{{household}}/contacts` | `conn_mod_def::GK8OJ66lHIg::xi3Imgp3TAy8KU7-YlLbNQ` |
| Create a Household | POST | `/households` | `conn_mod_def::GK8OKJ36u_g::ou0whkLdR_SyRdyr1f-FMg` |
| Delete a Household | DELETE | `/v1/households/{{household}}` | `conn_mod_def::GK8OKETUEmg::J2eebUIjS9y696nUiK3sIw` |
| Remove a Contact From a Household | DELETE | `/v1/households/{{household}}/contacts/{{contact}}` | `conn_mod_def::GK8OKGiX7Ng::wLZX-LViQ9-t7muMFZ6tTA` |
| Update a Household | PUT | `/v1/households/{{household}}` | `conn_mod_def::GK8OKTcU_nA::mUaEUauKRB2vN7zohs2Thg` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign | GET | `/v1/campaigns/{{campaign}}` | `conn_mod_def::GK8OIu55ONA::RPNgubvmRYiFkbHV-3hrtw` |
| List Campaigns | GET | `/campaigns` | `conn_mod_def::GK8OItb1xFg::90GANdZAT12ODOY69pBJqg` |
| Create a Campaign | POST | `/campaigns` | `conn_mod_def::GK8OIhblxIg::D38f3KpXTnGDLZgvHw9Jjg` |
| Delete a Campaign | DELETE | `/v1/campaigns/{{campaign}}` | `conn_mod_def::GK8OIqqMC-g::LbEEcgY5St2O6ASpPpvelA` |
| Update a Campaign | PUT | `/v1/campaigns/{{campaign}}` | `conn_mod_def::GK8OIp6LALA::F9wL6gSISdqcIY7DraLpmg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/v1/webhooks/{{webhook}}` | `conn_mod_def::GK8OLWg4rCg::pyt2NLyMR9KQ2LaiLRw77Q` |
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GK8OLXaJQPg::hnQOwb7pQMekRsmyow9taw` |
| Create a Webhook | POST | `/v1/webhooks` | `conn_mod_def::GK8OLM_I4lA::o7MPpGtNQqyTrnkEbIOQIw` |
| Delete a Webhook | DELETE | `/v1/webhooks/{{webhook}}` | `conn_mod_def::GK8OLMCph-g::1XYIguYaQXecqB1RGRD6uQ` |
| Update a Webhook | PUT | `/v1/webhooks/{{webhook}}` | `conn_mod_def::GK8OLh5uSYA::hwI_UD1TQUKFhbBw6F8X0Q` |

### CampaignDiscountCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign Discount Code | GET | `/v1/campaigns/{{campaign}}/discount-codes/{{discountCode}}` | `conn_mod_def::GK8OILCdK-A::zllY3IgcRHaRpN_eRTx7Jg` |
| List a Campaign's Discount Codes | GET | `/v1/campaigns/{{campaign}}/discount-codes` | `conn_mod_def::GK8OIKyJk7g::f-7Fh1kzTxWbv8SmPws84A` |
| Create a Campaign Discount Code | POST | `/v1/campaigns/{{campaign}}/discount-codes` | `conn_mod_def::GK8OILSIh0A::m_ks6XkIR4mwx9Jq_O4nyQ` |
| Delete a Campaign Discount Code | DELETE | `/v1/campaigns/{{campaign}}/discount-codes/{{discountCode}}` | `conn_mod_def::GK8OIMCL7_A::F7-ZDbF0RNuXPH1ob-6Uhg` |
| Update a Campaign Discount Code | PUT | `/v1/campaigns/{{campaign}}/discount-codes/{{discountCode}}` | `conn_mod_def::GK8OINucllA::Aoh0TWaJT7GV94pnEA96cw` |

### Funds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Fund | GET | `/v1/funds/{{fund}}` | `conn_mod_def::GK8OJeAHrvA::dEnsXSVwSy6vyg--LOSTHA` |
| List Funds | GET | `/funds` | `conn_mod_def::GK8OJeIibOg::rrLSfr0dSlymKzDYNR9sgw` |
| Create a Fund | POST | `/v1/funds` | `conn_mod_def::GK8OJOyJHoA::Ps7eJ_qNR9mj2Qo5557WBA` |
| Delete a Fund | DELETE | `/v1/funds/{{fund}}` | `conn_mod_def::GK8OJOypSOA::KxOTjnXlSQyQO3KxOVaz3A` |
| Update a Fund | PUT | `/v1/funds/{{fund}}` | `conn_mod_def::GK8OJe64lAA::Ivyuj0uFS56RBTyXAAcyKA` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transaction | GET | `/v1/transactions/{{transaction}}` | `conn_mod_def::GK8OLBX_vfg::GERy8eJvS7aLbSpbnZfy0A` |
| List All Transactions | GET | `/transactions` | `conn_mod_def::GK8OLDmZkpg::0mBTwRakReufTGog33LrdA` |
| Create a Transaction | POST | `/transactions` | `conn_mod_def::GK8OLAafemA::9GNchZGYSTqgkT908pfP_Q` |
| Update a Transaction | PUT | `/v1/transactions/{{transaction}}` | `conn_mod_def::GK8OLM3hVdA::vamKnIFDSV21v8c52Y81XA` |

### ContactActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Activity | GET | `/v1/contacts/{{contact}}/activities/{{activity}}` | `conn_mod_def::GK8OI4Q8o3A::mEDzb0rXTpCTqQ5Rd8G4AA` |
| List a Contact's Activities | GET | `/v1/contacts/{{contact}}/activities` | `conn_mod_def::GK8OI4h--HA::DEr9XlBbRRiSici2WfQH5w` |
| Create a Contact's Activity | POST | `/v1/contacts/{{contact}}/activities` | `conn_mod_def::GK8OIrLhXNA::TmaY8CnpRYyGeYXlu4JLpw` |
| Delete a Contact Activity | DELETE | `/v1/contacts/{{contact}}/activities/{{activity}}` | `conn_mod_def::GK8OI6Ad_4A::VxmE5NiOQUWjNzmhD6OitA` |

### CampaignTeams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign's Team | GET | `/v1/campaigns/{{campaign}}/teams/{{team}}` | `conn_mod_def::GK8OIWegbcA::nLGnEfu8SIS4KpHn1XXNxA` |
| List a Campaign's Teams | GET | `/v1/campaigns/{{campaign}}/teams` | `conn_mod_def::GK8OIhUYjjg::tF-O7UClR_CkvkhcG1Kb0A` |
| Delete a Campaign Team | DELETE | `/v1/campaigns/{{campaign}}/teams/{{team}}` | `conn_mod_def::GK8OIW5zIgA::pq6V8qziTTK_7s5y8hivNw` |

### CampaignMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign's Member | GET | `/v1/campaigns/{{campaign}}/members/{{member}}` | `conn_mod_def::GK8OIWeQ4Ug::Nv_8ovzHTiu_zgL8hm0Njg` |
| List a Campaign's Members | GET | `/v1/campaigns/{{campaign}}/members` | `conn_mod_def::GK8OIWFPRZA::sPQh7IeDQ-WC2Pah-tSMuw` |
| Delete a Campaign Member | DELETE | `/v1/campaigns/{{campaign}}/members/{{member}}` | `conn_mod_def::GK8OIWIp_cA::aHgZ_-RoQe2yXkaOhePRzQ` |

### CampaignTickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign's Ticket | GET | `/v1/campaigns/{{campaign}}/items/tickets/{{ticketId}}` | `conn_mod_def::GK8OIhlSEWg::Z-dX2QTiSwyQ0S-i6FV_9g` |
| List a Campaign's Tickets | GET | `/v1/campaigns/{{campaign}}/items/tickets` | `conn_mod_def::GK8OIhOSMKA::kJVAr2wtQv2uHk_TuU_83A` |
| Create a Campaign Ticket | POST | `/v1/campaigns/{{campaign}}/items/tickets` | `conn_mod_def::GK8OIfuFUHg::KgjX8Z8KRwupWxHdMOT5tA` |

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Ticket | GET | `/v1/tickets/{{ticket}}` | `conn_mod_def::GK8OLBGQq9g::gKhJWKl5S4StuXCX6GLpRQ` |
| List All Tickets | GET | `/tickets` | `conn_mod_def::GK8OK_cE-KA::CeOz-HiuS_GqAQNoyNBlxQ` |

### Pledges

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pledge | GET | `/v1/pledges/{{pledge}}` | `conn_mod_def::GK8OK2SfdnA::XDor_397Ra2MYgv3BM30TA` |
| List Pledges | GET | `/pledges` | `conn_mod_def::GK8OK1cUYDg::Cf0-gl-nQNWxj4rcH6qfiQ` |

### Plans

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Recurring Plan | GET | `/v1/plans/{{plan}}` | `conn_mod_def::GK8OK3hZVBA::PUV_jP4OTW6vdh-KUIPe5A` |
| List All Recurring Plans | GET | `/plans` | `conn_mod_def::GK8OK1qnbiA::MT23OmK9Q7C9-dxmhg7GSQ` |

### Payouts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Payout | GET | `/v1/payouts/{{payout}}` | `conn_mod_def::GK8OKVMnhHA::rOCcbJF8TECAC8UxiASOBw` |
| List All Payouts | GET | `/payouts` | `conn_mod_def::GK8OK1zogJg::Y594tekYQbakhzgKfrYKeA` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Message | GET | `/v1/messages/{{message}}` | `conn_mod_def::GK8OKTOokyg::GOOMVdEkSIKiGyyz_-ybxQ` |
| List All Messages | GET | `/messages` | `conn_mod_def::GK8OKtAV_ug::dT3e4GfCTw-OkAMQkSVOfg` |

### HouseholdContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Household Contact | GET | `/v1/households/{{household}}/contacts/{{contact}}` | `conn_mod_def::GK8OJiI17cg::ov4AWGBBSfiwEg6l3nvceA` |
| List a Household's Contacts | GET | `/v1/households/{{household}}/contacts` | `conn_mod_def::GK8OKEVZGRg::O4fN2c3jSzufTEuXqjFS1g` |

### WebhookActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Webhook's Activities | GET | `/v1/webhooks/{{webhook}}/activities` | `conn_mod_def::GK8OLNZgcfA::alNjrrMiTjSuQkT8TlHLqg` |

### ContactsActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Contact Activity | PUT | `/v1/contacts/{{contact}}/activities/{{activity}}` | `conn_mod_def::GK8OI4h--HA::KbZKZPEBTfuavfy6Qqf2GA` |

### WebhookActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook's Activity | GET | `/v1/webhooks/{{webhook}}/activities/{{activity}}` | `conn_mod_def::GK8OLMyT8ig::LqzRAmBlQ3ukzOLuf5w9ag` |

## When a call fails

The error comes from Givebutter, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/givebutter

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
