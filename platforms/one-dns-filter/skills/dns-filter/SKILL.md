---
name: dns-filter
description: A cloud-based DNS security service that protects networks and devices by blocking malicious domains, filtering unwanted content, enforcing policy controls, and providing threat intelligence to prevent malware, phishing, and cyber threats at the DNS level. Read and write DNSFilter data through One: trafficreports, policies, networks, organizations, distributorusers, useragents and more, 275 actions with real parameter documentation. Use whenever the user asks to look something up in DNSFilter, create or update a record there, or build code against the DNSFilter API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: dns-filter
  generated-from: one-knowledge-base
---

# DNSFilter through One

A cloud-based DNS security service that protects networks and devices by blocking malicious domains, filtering unwanted content, enforcing policy controls, and providing threat intelligence to prevent malware, phishing, and cyber threats at the DNS level.

One exposes DNSFilter through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `dns-filter` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm DNSFilter is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real DNSFilter account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### TrafficReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Application Request Statistics for Users | GET | `/v1/traffic_reports/total_applications_users_stats` | `conn_mod_def::GKHfYWe3aAY::7x23yBnETwSQmKRRqRu3CQ` |
| Get QPS Active Users Traffic Report | GET | `/traffic_reports/qps_active_users` | `conn_mod_def::GKHfZQm3wmE::1o4jyKDwS8qPSfhug4oYSA` |
| Get QPS for Active Collections | GET | `/v1/traffic_reports/qps_active_collections` | `conn_mod_def::GKHfZBQa0Ic::utxq8rmLQaepK3dZ8W5glA` |
| Get QPS for Active Roaming Clients | GET | `/traffic_reports/qps_active_agents` | `conn_mod_def::GKHfZCYf8RM::SAOgSeOZQWmSDN1pgw1S2Q` |
| Get QPS for Organizations | GET | `/v1/traffic_reports/qps_active_organizations` | `conn_mod_def::GKHfZC4VX-A::Tc6t_YwyTCqPrY1evKGAEg` |
| Get Queries Per Second for Traffic Reports | GET | `/v1/traffic_reports/qps` | `conn_mod_def::GKHfZP0Szsg::vHzg5SRJS6etP2G6FnLykQ` |
| Get Roaming Client Application Request Statistics | GET | `/traffic_reports/total_applications_agents_stats` | `conn_mod_def::GKHfYKew1xg::tOQslu1LTiGACUyiJuiUjg` |
| Get Top Organizations by Number of Requests | GET | `/v1/traffic_reports/top_organizations_requests` | `conn_mod_def::GKHfaAlZNh8::cKVTdU-sQ4aSrioSLzdLfg` |
| Get Top Requested Domains Report | GET | `/traffic_reports/top_domains` | `conn_mod_def::GKHfZk-MIrk::Iwg0vEL8T0axLj4ArjTdlg` |
| Get Top Traffic Report Collections | GET | `/traffic_reports/top_collections` | `conn_mod_def::GKHfZtcgb0Y::TbN4klCsRj-NzdGeSkC92g` |
| Get Top Users Traffic Report | GET | `/traffic_reports/top_users` | `conn_mod_def::GKHfaCd90_k::DO-e7jAlSj-FLT3MFr1Slg` |
| Get Total Application Request Statistics | GET | `/v1/traffic_reports/total_applications_stats` | `conn_mod_def::GKHfYZka0CI::-_GHOSqYR8qi_49DQXSwEg` |

36 more TrafficReports actions are available through search.

### Policies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Policy's Permissive Mode | GET | `/v1/policies/{{id}}/permissive_mode` | `conn_mod_def::GKHfXHoCLUs::DGe08-C5TTqRm_1E9gbzLA` |
| Get All Policies | GET | `/policies/all` | `conn_mod_def::GKHfW-HDyfU::MAWOfynqQ0e1S4G88xbfFg` |
| List Policies | GET | `/v1/policies` | `conn_mod_def::GKHfXHDeOdM::FZvBq_tfSCWpIy3TNs9FLQ` |
| Show a Policy | GET | `/v1/policies/{{id}}` | `conn_mod_def::GKHfXPzFYEk::-AiVXyvPROyCIe-11Rb38Q` |
| Add Allow Category to a Policy | POST | `/v1/policies/{{id}}/add_allowed_application` | `conn_mod_def::GKHfWx33Kc8::YvZoOc9GQPCXzYfQCTRW7Q` |
| Add Allow Domain to a Policy | POST | `/v1/policies/{{id}}/add_whitelist_domain` | `conn_mod_def::GKHfWy0ChB0::tAyQKJnMShWNz-Yi6CUSww` |
| Add Block Application to a Policy | POST | `/v1/policies/{{id}}/add_blocked_application` | `conn_mod_def::GKHfWxXQv88::tBhRAraaSI23AZV5sm964g` |
| Add Block Category to a Policy | POST | `/v1/policies/{{id}}/add_blacklist_category` | `conn_mod_def::GKHfW7Uqe6Q::Agfu02LXSH2905MfMrLEvg` |
| Add Block Domain to a Policy | POST | `/v1/policies/{{id}}/add_blacklist_domain` | `conn_mod_def::GKHfW7DALAs::M_GsUNH1T1--A1OJcHbH0g` |
| Bulk Add Allowlist Domains to Policies | POST | `/policies/bulk/add_allowlist_domains` | `conn_mod_def::GKHfXYS0Qvc::MCFHaEaiRgeJqJiRctjVgw` |
| Bulk Add Domains to Policies' Block Lists | POST | `/policies/bulk/add_blocklist_domains` | `conn_mod_def::GKHfXYRBeLo::upfiEtEARpO42rl69DeJfg` |
| Bulk Delete Allowlisted Domains From Policies | POST | `/policies/bulk/remove_allowlist_domains` | `conn_mod_def::GKHfXYE-Mqc::Feq5SLVVT4-l85Yh1lMgSA` |

11 more Policies actions are available through search.

### Networks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulk Delete Status for a Network Job | GET | `/v1/networks/bulk_destroy/{{id}}` | `conn_mod_def::GKHfVcdBoSk::6EopiPeLSp2Ubd1z3QMg4Q` |
| Get Extant MSP Networks | GET | `/v1/networks/msp` | `conn_mod_def::GKHfVx5_YL0::nXSaYuPETJKnHYYpeF3MyA` |
| Get Geo | GET | `/networks/geo` | `conn_mod_def::GKHfWB6gUsY::PN3OKvi5RqqO2AKcQ4pDWQ` |
| List All MSP Networks | GET | `/networks/msp/all` | `conn_mod_def::GKHfVzNxYUE::cqQjHdXSS1qfRNVvYqFFKw` |
| List All Networks | GET | `/networks/all` | `conn_mod_def::GKHfVx0sNvg::2tuvwZrcS22rNDFaKW5PgQ` |
| List Networks | GET | `/networks` | `conn_mod_def::GKHfVwraYc8::Lw5dRNBeQXaMlxoVS9bNow` |
| Show a Network | GET | `/v1/networks/{{id}}` | `conn_mod_def::GKHfWKlBVsw::vDzTN1m6S2yNgFz1vzgj3A` |
| Bulk Create Networks | POST | `/networks/bulk_create` | `conn_mod_def::GKHfVSjgUMI::6fGn5Sl-S6Ci1rnZ8DuCxQ` |
| Bulk Delete Networks | DELETE | `/v1/networks/bulk_destroy` | `conn_mod_def::GKHfVb26M0U::iJpQ0jPtQoO02F_ebrgZZA` |
| Bulk Update Networks | POST | `/v1/networks/bulk_update` | `conn_mod_def::GKHfVbqwXC4::QSgBqoE6S1aDGo5LJYNTqQ` |
| Create a Network Secret Key | POST | `/v1/networks/{{id}}/secret_key` | `conn_mod_def::GKHfVl7Ax70::1w_FzIcrSxmtMj85UW2juA` |
| Create Network | POST | `/networks` | `conn_mod_def::GKHfVl4MmPQ::FEvsPTo-QQW1e4yGNPZhAw` |

4 more Networks actions are available through search.

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Organizations | GET | `/organizations/all` | `conn_mod_def::GKHfWnK453Y::Zm4vc9_WQT6VfQrBxgqhWg` |
| List Organizations | GET | `/v1/organizations` | `conn_mod_def::GKHfWnNRF7M::vQc-hSVaTwC4F8ZuFkqprA` |
| Show an Organization | GET | `/v1/organizations/{{id}}` | `conn_mod_def::GKHfWx6bCio::HpJZ8aXKQRWePkH3VoRppQ` |
| Bulk Update Organizations | PATCH | `/organizations/bulk_update` | `conn_mod_def::GKHfWb7s3GE::fWif2AQJRJK2VDuFHd9zvA` |
| Cancel an Organization | POST | `/v1/organizations/{{id}}/cancel` | `conn_mod_def::GKHfWatYRso::pc4jYa9BT16dupReK4PyrA` |
| Create an Organization | POST | `/organizations` | `conn_mod_def::GKHfWb8KOXk::vSm4sRcsRL-b3qW0iLZf5w` |
| Delete an MSP Customer | DELETE | `/v1/organizations/{{id}}` | `conn_mod_def::GKHfWp1EZjU::_mFDNnOvRNKsIgNcqJs8jA` |
| Promote an Organization to MSP | POST | `/organizations/promote_to_msp` | `conn_mod_def::GKHfWkyYalk::zqYP8pf1Qx6Qqgow2GdK0g` |
| Update an Organization | PATCH | `/v1/organizations/{{id}}` | `conn_mod_def::GKHfWxNkaGA::lRAqZamwSd2WAvqHv8SuqA` |

### DistributorUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Distributor Users | GET | `/v1/distributors/users` | `conn_mod_def::GKHfUIwAn6Y::-gSQJCxIQ1KS3CdMRBIOpA` |
| Show a Distributor User | GET | `/v1/distributors/users/{{id}}` | `conn_mod_def::GKHfT1RTIaU::JDzo5nORQn2KK-VotzJxhw` |
| Add Membership to a Distributor User | POST | `/v1/distributors/users/{{id}}/add_membership` | `conn_mod_def::GKHfTJGNE_0::yjKEzWejT9CIpWdFvE4ozg` |
| Create a Distributor User | POST | `/distributors/users` | `conn_mod_def::GKHfTS4Y1RY::uBHtujaITku98uWglotIAA` |
| Create a Reset Password URL for a Distributor User | POST | `/v1/distributors/users/{{id}}/reset_password_url` | `conn_mod_def::GKHfTtLz9Jo::Qqe0dLHSS-eak4u1cr8kLg` |
| Remove a Distributor User's Membership | POST | `/v1/distributors/users/{{id}}/remove_membership` | `conn_mod_def::GKHfTr4SN3M::O_uhlEabRpqtP2NkgpHOpQ` |
| Reset Password Email for a Distributor User | POST | `/v1/distributors/users/{{id}}/send_reset_password_email` | `conn_mod_def::GKHfTr2BzwA::FvMSWpfvTni2B6MIamw1-w` |
| Update a Distributor User's Membership | POST | `/v1/distributors/users/{{id}}/update_membership` | `conn_mod_def::GKHfUGDyAXE::ss9VIfsqSS-wAfNsykpV3g` |

### UserAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All User Agents | GET | `/v1/user_agents/all` | `conn_mod_def::GKHfbqalkuU::38bi-nwfSQGWw_3Z3VP0Xg` |
| Get an Organization's User Agent Uninstall PIN | GET | `/v1/user_agents/uninstall_pin` | `conn_mod_def::GKHfcE32nNQ::3A678fZcS3ag2zs-pae0NQ` |
| List User Agents | GET | `/user_agents` | `conn_mod_def::GKHfbzEBLbA::knWEIuuARSi5ODukoOT6sQ` |
| Show a User Agent | GET | `/v1/user_agents/{{id}}` | `conn_mod_def::GKHfb7Fb7Pw::PonwZaS5Q-OOJfly8Ts8pg` |
| Delete a User Agent | DELETE | `/v1/user_agents/{{id}}` | `conn_mod_def::GKHfboelIyw::FGrqwXIsSJmLKwP4jOiLOw` |
| Remove a User Agent From the Uninstall Queue | POST | `/user_agents/dequeue_uninstall` | `conn_mod_def::GKHfb87fSC0::NaiPr8KwT9GcBpw_ExWjkw` |
| Update a User Agent | PATCH | `/v1/user_agents/{{id}}` | `conn_mod_def::GKHfb7f2ovQ::jAoBzZ-0QWusrgrulRGy4g` |
| Update a User Agent's Settings | PATCH | `/v2/user_agents/{{id}}/update_settings` | `conn_mod_def::GKHfcNTgkns::NqE1xeIbSz2bljwax4HrXA` |

### IpAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All IP Addresses | GET | `/ip_addresses/all` | `conn_mod_def::GKHfUsAofh4::qwwAarvtSEKPKimz3O_xJA` |
| Get My IP Address | GET | `/ip_addresses/myip` | `conn_mod_def::GKHfUrdyAvY::LdyiMS7NRNKcM1CpbIwSRA` |
| List IP Addresses | GET | `/v1/ip_addresses` | `conn_mod_def::GKHfUscQW0w::QJceig7GQgyI9UVrKnsZ0g` |
| Show an IP Address | GET | `/v1/ip_addresses/{{id}}` | `conn_mod_def::GKHfUrUw-FE::4ZLiOEwmSASYORliqHPEyw` |
| Verify an IP Address | GET | `/ip_addresses/verify` | `conn_mod_def::GKHfU0vRtV8::veNF7GrKTq2-HU1hy6jLyA` |
| Create an IP Address | POST | `/v1/ip_addresses` | `conn_mod_def::GKHfUjIsBqM::9MD0dzyBS36ovo2foS1t_g` |
| Delete an IP Address | DELETE | `/v1/ip_addresses/{{id}}` | `conn_mod_def::GKHfUrWmBTU::Wsxu88I1RZ6Jn9_bxiqHJw` |
| Update an IP Address | PATCH | `/v1/ip_addresses/{{id}}` | `conn_mod_def::GKHfU0gV_Ro::0o_xUt0GRMG_ok_xyVXZgA` |

### DistributorOrganizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Distributor Organizations | GET | `/v1/distributors/organizations` | `conn_mod_def::GKHfThsg-WE::usZYHh8JRx6PUhEArLa-Qg` |
| Show a Distributor Organization | GET | `/v1/distributors/organizations/{{id}}` | `conn_mod_def::GKHfT06x6OQ::Ovk4bVGjQJm-FqD554-VoQ` |
| Add a SKU to a Distributor Organization | POST | `/v1/distributors/organizations/{{id}}/add_sku` | `conn_mod_def::GKHfTJWAbqs::In14p2AgT3qBG0SCguguHw` |
| Cancel a Distributor Suborganization | POST | `/v1/distributors/organizations/{{id}}/cancel` | `conn_mod_def::GKHfTJR1zoE::NXu3sXuuQJiH-WZKcV71wg` |
| Create a Distributor Suborganization | POST | `/distributors/organizations` | `conn_mod_def::GKHfTR7Xlkc::N8lMx306R1W165mC5RnD6w` |
| Reactivate a Distributor Organization Sub-Organization | POST | `/v1/distributors/organizations/{{id}}/reactivate` | `conn_mod_def::GKHfTsCJOP0::xA808lBETdy-S23NldO3vg` |
| Remove Sku From a Distributor Organization | POST | `/v1/distributors/organizations/{{id}}/remove_sku` | `conn_mod_def::GKHfTsB9wJk::0BXefuZuQ0udz5P1g0wUyw` |

### BlockPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Block Pages | GET | `/block_pages/all` | `conn_mod_def::GKHfSjbi-6c::7IHOI3sgTgynCOHh7Vvqgw` |
| List Block Pages | GET | `/block_pages` | `conn_mod_def::GKHfStANgsA::Uc3fsZ-OQPCGu9lWE9uReg` |
| Show a Block Page | GET | `/v1/block_pages/{{id}}` | `conn_mod_def::GKHfSsNLvMw::UOyUWlvpThuA_ygKRAvCTQ` |
| Create Block Page | POST | `/block_pages` | `conn_mod_def::GKHfSgpMstc::fvSy74u-QnKMtpoDm4I7tQ` |
| Delete a Block Page | DELETE | `/v1/block_pages/{{id}}` | `conn_mod_def::GKHfSgwmITs::bFVtnz_2Q_-k5JNDoljRpQ` |
| Update a Block Page | PATCH | `/v1/block_pages/{{id}}` | `conn_mod_def::GKHfSsdIRh8::10YVD9WtT5mIH2tbJKavmQ` |

### MacAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| List All MAC Addresses | GET | `/v1/mac_addresses/all` | `conn_mod_def::GKHfU1VRDkw::P0uKwej5RKWanrs0PqX2ZQ` |
| List MAC Addresses for an Organization | GET | `/mac_addresses` | `conn_mod_def::GKHfU-XzzfE::XHjxn3YJSFiU41AzK1-LEg` |
| Show a MAC Address | GET | `/v1/mac_addresses/{{id}}` | `conn_mod_def::GKHfU8FAt2s::scL_IXHGTR6zen-agnRR7A` |
| Create a MAC Address | POST | `/mac_addresses` | `conn_mod_def::GKHfU0gei3U::SFvs85wqQcGV3u0xYc4SKA` |
| Delete a MAC Address | DELETE | `/v1/mac_addresses/{{id}}` | `conn_mod_def::GKHfU0YVerA::qtsvb6NtR56wtBzS1aBUwg` |
| Update a MAC Address | PATCH | `/v1/mac_addresses/{{id}}` | `conn_mod_def::GKHfU8HD1dM::geEYvAnzS1aBXOjd4N34cw` |

### ScheduledPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Scheduled Policies | GET | `/scheduled_policies/all` | `conn_mod_def::GKHfXthGATg::G-nPokr8R-aXi5wcL1S7Jg` |
| List Scheduled Policies | GET | `/scheduled_policies` | `conn_mod_def::GKHfXtr-1zc::eqWwBK31RhmrexhNvxSX0A` |

4 more ScheduledPolicies actions are available through search.

This lists 90 of 275 actions. For anything not here, call `search_one_platform_actions` with platform `dns-filter`. The full catalog is at https://www.withone.ai/knowledge/dns-filter.

## When a call fails

The error comes from DNSFilter, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/dns-filter

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
