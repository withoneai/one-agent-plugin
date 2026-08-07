---
name: klipfolio
description: Klipfolio is a dashboard and analytics platform that connects to hundreds of services and APIs, automates data retrieval, and enables teams and clients to build, customize, share, and distribute dashboards and reports with spreadsheet-like flexibility. Read and write Klipfolio data through One: clients, users, datasources, klips, groups, roles and more, 122 actions with real parameter documentation. Use whenever the user asks to look something up in Klipfolio, create or update a record there, or build code against the Klipfolio API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: klipfolio
  generated-from: one-knowledge-base
---

# Klipfolio through One

Klipfolio is a dashboard and analytics platform that connects to hundreds of services and APIs, automates data retrieval, and enables teams and clients to build, customize, share, and distribute dashboards and reports with spreadsheet-like flexibility.

One exposes Klipfolio through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `klipfolio` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Klipfolio is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Klipfolio account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Clients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Client | GET | `/api/1.0/clients/{{id}}` | `conn_mod_def::GMcEyb96srA::hyLQUfoQTHKwzEtwYzo5eg` |
| List a Client's Company Properties | GET | `/api/1.0/clients/{{id}}/properties` | `conn_mod_def::GMcEyBF4yfA::a-xvgLP5TK2mB71bSXztuQ` |
| List Clients | GET | `/api/1.0/clients` | `conn_mod_def::GMcEyYe-JLA::uZbmQsAyR92yG_EtMq-M7w` |
| Create a Client | POST | `/api/1.0/clients` | `conn_mod_def::GMcEyZabC2A::xRw-ZyhoSiegPoJAtg30gA` |
| Delete a Client | DELETE | `/api/1.0/clients/{{id}}` | `conn_mod_def::GMcEyXUtZZA::6OpDVjhESJO_0rxe8iwaxg` |
| Delete a Client's Company Property | DELETE | `/api/1.0/clients/{{id}}/properties` | `conn_mod_def::GMcEyG4PyrA::qg9IYz8SQnOci1vM1iU2Tg` |
| Enable Direct Billing for a Client | POST | `/api/1.0/clients/{{id}}/@/enable_direct_billing` | `conn_mod_def::GMcEyWl-RwA::h87Wu4D7RhKiRhgLuup_4A` |
| Extend Trial for a Client | POST | `/api/1.0/clients/{{id}}/@/extend_trial` | `conn_mod_def::GMcEykxawSA::VEdN_GabTHy4sVXY5kIOTQ` |
| Manage a Client's Company Properties | PUT | `/api/1.0/clients/{{id}}/properties` | `conn_mod_def::GMcEyEVvhfA::rsuYR48aQZ-rIKJPi-B-Ww` |
| Manage a Client's Settings | POST | `/api/1.0/clients/{{id}}/settings` | `conn_mod_def::GMcEyNC-r3g::7ymeTooaRsKE3hBPAX2ZzA` |
| Revoke a Group's Access to a Client | DELETE | `/api/1.0/clients/{{id}}/share-rights/{{groupId}}` | `conn_mod_def::GMcEyNsOszg::xHSVIi2SRLGODPnIBEquqw` |
| Update a Client | PUT | `/api/1.0/clients/{{id}}` | `conn_mod_def::GMcEyw1clxg::I5H6aiMbSsSuphyZknyP_Q` |

1 more Clients actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/api/1.0/users/{{id}}` | `conn_mod_def::GMcE2fjtMwA::p-lmW5SyQDKGHqsLcyZptw` |
| List a User's Properties | GET | `/api/1.0/users/{{id}}/properties` | `conn_mod_def::GMcE181arrg::PwGyQDDRSuSuzoffk_Zp9g` |
| List a User's Roles | GET | `/api/1.0/users/{{id}}/roles` | `conn_mod_def::GMcE2OXWQZA::9TamDbt7ToCmHqiaM7xKOg` |
| List Users | GET | `/api/1.0/users` | `conn_mod_def::GMcE2cvrVVg::PrRB2xtnSwyRNNKHcRkQbw` |
| Add a User to a Group | PUT | `/api/1.0/users/{{id}}/groups` | `conn_mod_def::GMcE138ShXg::8d4oybG0SM6LNAnTG7CNbQ` |
| Add Tab Instances for a User | PUT | `/api/1.0/users/{{id}}/tab-instances` | `conn_mod_def::GMcE2bcOa-g::r6j4nsRMSr26Xl06yC7euw` |
| Assign a Role to a User | PUT | `/api/1.0/users/{{userId}}/roles/{{roleId}}` | `conn_mod_def::GMcE2OsWndA::BqTp63_kQJ-N8GWGiktYFA` |
| Create a User | POST | `/api/1.0/users` | `conn_mod_def::GMcE2oGvulA::RIqVGL_8R82w5dWqEniQ5w` |
| Delete a User | DELETE | `/api/1.0/users/{{id}}` | `conn_mod_def::GMcE2cEYgVA::-GupUHvlRCS5lA0IAz3UnA` |
| Remove a User from a Group | DELETE | `/api/1.0/users/{{id}}/groups/{{groupId}}` | `conn_mod_def::GMcE1ryKIwg::mFeMg7cDSyqJfhC5y3IILA` |
| Resend Invite for a User | POST | `/api/1.0/users/{{id}}/@/resend-invite` | `conn_mod_def::GMcE13pt7Dg::_R_l2Oh1RKqEfP6zuLcIcg` |
| Reset Password for a User | POST | `/api/1.0/users/{{id}}/@/reset-password` | `conn_mod_def::GMcE15aSd4A::kWlgTLExSQCrI3fPIwIE5A` |

1 more Users actions are available through search.

### DataSources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Data Source by ID | GET | `/api/1.0/datasources/{{id}}` | `conn_mod_def::GMcEzkNcjSA::XIctfikIRRa8QqYjXRy_QA` |
| List Data Sources | GET | `/api/1.0/datasources` | `conn_mod_def::GMcEzbS5Xmg::lh9JtFR4SaubcgiWygDDyQ` |
| Create a Data Source | POST | `/api/1.0/datasources` | `conn_mod_def::GMcEzjfGD0A::fqCHIsJGSteppyilTyEGPw` |
| Create or Update a Data Source's Properties | PUT | `/api/1.0/datasources/{{id}}/properties` | `conn_mod_def::GMcEzKf_srg::OqVN6DXHSOypnNDCZaYrQg` |
| Delete a Data Source | DELETE | `/api/1.0/datasources/{{id}}` | `conn_mod_def::GMcEzbxhzYA::X6yao5tTShGHATguFKVNxw` |
| Delete Instances for a Data Source | POST | `/api/1.0/datasources/{{id}}/@/delete_instances` | `conn_mod_def::GMcEzBPHXLg::KdGTuMjFTeOSy34P0On9CA` |
| Disable a Data Source | POST | `/api/1.0/datasources/{{id}}/@/disable` | `conn_mod_def::GMcEy_RGvcA::peNW7iA8SNGjyqpmaEFlrQ` |
| Enable a Data Source | POST | `/api/1.0/datasources/{{id}}/@/enable` | `conn_mod_def::GMcEzH1O8QA::Sz2SN8-ITgG0RqXpV10wUw` |
| Import a Data Source | POST | `/api/1.0/datasources/{{id}}/@/import` | `conn_mod_def::GMcEzKpvQ4g::jBZKJGWDTcOJXwsjThb4gQ` |
| Refresh Data Sources | POST | `/api/1.0/datasources/@/refresh` | `conn_mod_def::GMcEyjSWcxg::35WYTAf4TJaraOQePLvkxw` |
| Update a Data Source | PUT | `/api/1.0/datasources/{{id}}` | `conn_mod_def::GMcEzjfwW2A::Y7GKl6brTZ2XIyPVcTh3fg` |
| Update Share Rights for a Data Source | PUT | `/api/1.0/datasources/{{id}}/share-rights` | `conn_mod_def::GMcEzckJ0tA::xJmJL-nmQvakMuEVfqakLw` |

### Klips

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Klip by ID | GET | `/api/1.0/klips/{{id}}` | `conn_mod_def::GMcE0mU0eUA::4SCb8pI2S8e6TJZ9ueRGaA` |
| Get a Klip's Schema | GET | `/api/1.0/klips/{{id}}/schema` | `conn_mod_def::GMcE0QupCBA::SdGZ01bIT3ypWk9-Tx4U3A` |
| Get a Klip's Share Rights | GET | `/api/1.0/klips/{{id}}/share-rights` | `conn_mod_def::GMcE0bkX_OA::7FLr4UXSSOqxWyh-_OK5mw` |
| List Client Instances for a Klip | GET | `/api/1.0/klips/{{id}}/client-instances` | `conn_mod_def::GMcE0kgsf1A::uBc7B5yLTZqo6jTOdbINfQ` |
| List Klips | GET | `/api/1.0/klips` | `conn_mod_def::GMcE0cI8WbA::paDdmVusSm2ELpregGVwzg` |
| Create a Klip | POST | `/api/1.0/klips` | `conn_mod_def::GMcE0jr-H3g::1l5AuuoxSre3XUrhwLgnqg` |
| Delete a Klip | DELETE | `/api/1.0/klips/{{id}}` | `conn_mod_def::GMcE0dXD7FA::xhDmmDMZQM2dz1zs4LO2QQ` |
| Delete Share Rights for a Klip | DELETE | `/api/1.0/klips/{{id}}/share-rights` | `conn_mod_def::GMcE0P1A5-g::k6JnOPjQRdGaT7tEQLo_lQ` |
| Import a Klip | POST | `/api/1.0/klips/{{id}}/@/import` | `conn_mod_def::GMcE0anlBvA::E3YnMGynRvKh4NSTUvqu9A` |
| Update a Klip | PUT | `/api/1.0/klips/{{id}}` | `conn_mod_def::GMcE0kAcC1A::UeQ_3GYVQze8tcaviJrgRw` |
| Update a Klip From Its Parent | POST | `/api/1.0/klips/{{id}}/@/update_from_parent` | `conn_mod_def::GMcE0QWyitA::bfkZ5aOiRzSZVCcpC2ukmQ` |
| Update a Klip's Share Rights | PUT | `/api/1.0/klips/{{id}}/share-rights` | `conn_mod_def::GMcE0dRhK-g::H7XvRdANTfyTqkMovBZisA` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group | GET | `/api/1.0/groups/{{id}}` | `conn_mod_def::GMcEzvmzedA::QahmNdWPRuih93XwXXgvZg` |
| Get a Group's Default Tab | GET | `/api/1.0/groups/{{id}}/default-tabs/{{id}}` | `conn_mod_def::GMcEz5-T4Ig::KpSFeAoyTqy6GoxuADrtig` |
| List a Group's Default Dashboards | GET | `/api/1.0/groups/{{id}}/default-tabs` | `conn_mod_def::GMcEz4QTt0g::ajmJNZydQ8y7nmuVxWgH8A` |
| List a Group's Users | GET | `/api/1.0/groups/{{id}}/users` | `conn_mod_def::GMcEzlY91XA::Op_Hd5nsSdW76GDrww3YSg` |
| List Groups | GET | `/api/1.0/groups` | `conn_mod_def::GMcEztEwJzg::QF8sqncCQKGHxZNV5Y16mA` |
| Add a Default Tab to a Group | POST | `/api/1.0/groups/{{id}}/default-tabs` | `conn_mod_def::GMcEz3Dlj0g::eZCxikdnTuKXcRFQRPTn5Q` |
| Add a User to a Group | PUT | `/api/1.0/groups/{{id}}/users/{{userid}}` | `conn_mod_def::GMcEzszA_ag::YlDGzbSsScSuIiZdjZDkeQ` |
| Create a Group | POST | `/api/1.0/groups` | `conn_mod_def::GMcEzsBeD9g::UDW9tUbsStCuYx0xq--Ftw` |
| Delete a Group | DELETE | `/api/1.0/groups/{{id}}` | `conn_mod_def::GMcEzvguc_g::UowxwINWRsSiRh7ev9kiKw` |
| Delete a User from a Group | DELETE | `/api/1.0/groups/{{groupId}}/users/{{userId}}` | `conn_mod_def::GMcEzjYvSnA::fUZssbaFRcK8efhMgyeXig` |
| Update a Group | PUT | `/api/1.0/groups/{{id}}` | `conn_mod_def::GMcEz6MM9gA::H7GWZQKITzuq6ejUHLX18A` |

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Role | GET | `/api/1.0/roles/{{id}}` | `conn_mod_def::GMcE1FDK3Qg::zfEiYQUvQ1auFRkujuMzXQ` |
| List a Role's Permissions | GET | `/api/1.0/roles/{{id}}/permissions` | `conn_mod_def::GMcE01yOS_g::Sjz8i_BlRlmWADhBuRgC5A` |
| List Roles | GET | `/api/1.0/roles` | `conn_mod_def::GMcE1P9bYsA::46DSWNz7RWaHMSj-G56OpA` |
| Add a User to a Role | PUT | `/api/1.0/roles/{{id}}/users/{{userId}}` | `conn_mod_def::GMcE00ioi_g::-Modv6kkTHCIKq558qYBtg` |
| Delete a Role | DELETE | `/api/1.0/roles/{{id}}` | `conn_mod_def::GMcE1B-U3xg::7Ih4x6C7SLiMuPZMV47KPw` |
| Delete Permissions for a Role | DELETE | `/api/1.0/roles/{{id}}/permissions` | `conn_mod_def::GMcE0tsm7oA::wCroZRYuTouYebemsb4UWg` |
| Remove a User from a Role | DELETE | `/api/1.0/roles/{{id}}/users/{{userId}}` | `conn_mod_def::GMcE01OJXgg::y2hXcQ5BQvqIcc_lBW3MVQ` |
| Update a Role | PUT | `/api/1.0/roles/{{id}}` | `conn_mod_def::GMcE1AprtiA::tttN9m8cRkyJdl8tIaWleA` |
| Update Permissions for a Role | PUT | `/api/1.0/roles/{{id}}/permissions` | `conn_mod_def::GMcE06IPqYg::PLYZEAAPSIGY_aM5shWNlw` |

### Tabs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tab | GET | `/api/1.0/tabs/{{id}}` | `conn_mod_def::GMcE1sS-crg::kHCOZ5FKSSe2h0eglRhDyg` |
| Get a Tab's Layout | GET | `/api/1.0/tabs/{{id}}/layout` | `conn_mod_def::GMcE1ZlGCOA::d3J61s8OT2m2y1MB-VuBYg` |
| List Tabs | GET | `/api/1.0/tabs` | `conn_mod_def::GMcE1hc1sHA::V4mhqA6dTtOqD45eH6Z_rA` |
| Create a Tab | POST | `/api/1.0/tabs` | `conn_mod_def::GMcE1qw03Mg::hDYjihz7QziuXdsgasMDsg` |
| Delete a Tab | DELETE | `/api/1.0/tabs/{{id}}` | `conn_mod_def::GMcE1hWxDEA::YE22EYPMQpKZkW-_3d7PnQ` |
| Import a Tab into a Client Account | POST | `/api/1.0/tabs/{{id}}/@/import` | `conn_mod_def::GMcE1XpvJwg::6FD6ye23SeaVwwaOPVwZdw` |
| Update a Tab | PUT | `/api/1.0/tabs/{{id}}` | `conn_mod_def::GMcE1w1IUXA::kQVNYB1LQdOtI0PMfIpCcw` |
| Update a Tab's Share Rights | PUT | `/api/1.0/tabs/{{id}}/share-rights` | `conn_mod_def::GMcE1g0wRlg::3qmQdNnpSlq4spv_ApOvgQ` |

### DataSourceInstances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Data Source Instance | GET | `/api/1.0/datasource-instances/{{id}}` | `conn_mod_def::GMcEy4KTiHA::OPLJeoqsQ72v1LxJ47BOUA` |
| Get Data for a Data Source Instance | GET | `/api/1.0/datasource-instances/{{id}}/data` | `conn_mod_def::GMcEzACI0Wg::KqBWi8TkRgy1f6Sou8K_VQ` |
| Create a Data Source Instance | POST | `/api/1.0/datasource-instances` | `conn_mod_def::GMcEy_6ObLA::iLb91B--RUyHUhTz5OIreg` |
| Delete a Data Source Instance | DELETE | `/api/1.0/datasource-instances/{{id}}` | `conn_mod_def::GMcEy4mGhlA::10RnkFd6QGKnZFgZ-SfwWQ` |
| Delete Properties for a Data Source Instance | DELETE | `/api/1.0/datasource-instances/{{id}}/properties` | `conn_mod_def::GMcEylAlRkA::m3jfuehLTuWQPYThcxeZHQ` |
| Refresh a Data Source Instance | POST | `/api/1.0/datasource-instances/{{id}}/@/refresh` | `conn_mod_def::GMcEyjPlFNg::Q4R7I_GuQlaUVVDz-k0_ag` |
| Update a Data Source Instance's Data | PUT | `/api/1.0/datasource-instances/{{id}}/data` | `conn_mod_def::GMcEy_d4NzA::bbH2edFfQH6V31KtIQ84NA` |

### Annotations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Annotations for a Klip | GET | `/api/1.0/klips/{{id}}/annotations` | `conn_mod_def::GMcE0Dl2xkg::Ngl1lMHKQimeCg7pFa5CEg` |
| Create an Annotation for a Klip | POST | `/api/1.0/klips/{{id}}/annotations` | `conn_mod_def::GMcE0C_6DGA::IZT9HtTXQQ2DU9dXw9crFA` |
| Delete an Annotation for a Klip | DELETE | `/api/1.0/klips/{{klipId}}/annotations/{{annotationId}}` | `conn_mod_def::GMcE0DmEuJg::G1nOHLAlTbCCyD6at717hA` |
| Update an Annotation for a Klip | PUT | `/api/1.0/klips/{{id}}/annotations/{{id}}` | `conn_mod_def::GMcE0ULFcfg::Y2zGwX9lQHWeVrmEOIC5ew` |

### DashboardPublishedLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dashboard Published Links | GET | `/api/1.0/dashboard-published-links/{{publishedLinkId}}` | `conn_mod_def::GMcE0t2ZJwA::n-Irz0t0Qyu1icy1Ayu8Nw` |
| Create a Published Link for a Dashboard | POST | `/api/1.0/dashboard-published-links/{{dashboardId}}` | `conn_mod_def::GMcE0t2iPyA::wYfMeU6iRXqN3Fo115hxJw` |
| Delete a Dashboard Published Link | DELETE | `/api/1.0/dashboard-published-links/{{publishedLinkId}}` | `conn_mod_def::GMcE0ttcE_g::kJ1k8c9OTZGbvD2kRPpPGA` |

1 more DashboardPublishedLinks actions are available through search.

This lists 90 of 122 actions. For anything not here, call `search_one_platform_actions` with platform `klipfolio`. The full catalog is at https://www.withone.ai/knowledge/klipfolio.

## When a call fails

The error comes from Klipfolio, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/klipfolio

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
