---
name: rootly
description: Rootly is an incident management platform that enables engineering and operations teams to automate incident response, coordinate stakeholders, run postmortems, and integrate with collaboration and observability tools to reduce downtime and improve operational reliability. Read and write Rootly data through One: incidents, meetingrecordings, alerts, escalationlevels, catalogentities, dashboards and more, 557 actions with real parameter documentation. Use whenever the user asks to look something up in Rootly, create or update a record there, or build code against the Rootly API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: rootly
  generated-from: one-knowledge-base
---

# Rootly through One

Rootly is an incident management platform that enables engineering and operations teams to automate incident response, coordinate stakeholders, run postmortems, and integrate with collaboration and observability tools to reduce downtime and improve operational reliability.

One exposes Rootly through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `rootly` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Rootly is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Rootly account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Incidents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Incident by ID | GET | `/v1/incidents/{{id}}` | `conn_mod_def::GMIfwx31zrA::L2GDTufDTGenmzdVrJvVyQ` |
| List Incidents | GET | `/v1/incidents` | `conn_mod_def::GMIfwinEGuA::vy3PLEvuQteErLlezHqKQw` |
| Add Subscribers Using Incident | POST | `/v1/incidents/{{id}}/add_subscribers` | `conn_mod_def::GMIfv1D9hAA::nYxvVSrOSgOo27TcAEgJzA` |
| Assign Role to User Using Incidents | POST | `/v1/incidents/{{id}}/assign_role_to_user` | `conn_mod_def::GMIfv1_XA5g::x_kF7faTTba9xiyryQ6mVg` |
| Attach Alerts to an Incident | POST | `/v1/incidents/{{incidentId}}/alerts` | `conn_mod_def::GMIfnsYuBAA::d72mtvCnTE6nhppcuapnFQ` |
| Cancel an Incident | PUT | `/v1/incidents/{{id}}/cancel` | `conn_mod_def::GMIfv_hwPtA::ycmN-IauQ5uph2h1CVOVAg` |
| Create Incident | POST | `/v1/incidents` | `conn_mod_def::GMIfv_vhLlg::Isevm83GRDWB9ydJ5iIvGA` |
| Delete an Incident by ID | DELETE | `/v1/incidents/{{id}}` | `conn_mod_def::GMIfv-0Ebrg::Rso_tM7YRrSjLEWPhYQMxw` |
| Detach From Parent Using Incidents | PUT | `/v1/incidents/{{id}}/detach_from_parent` | `conn_mod_def::GMIfwAN1jLg::4LM1plzLSIaGSSOIO10mDg` |
| Mark an Incident as Duplicate | PUT | `/v1/incidents/{{id}}/duplicate` | `conn_mod_def::GMIfwp3FfiA::KZadr99vS8ePqLkuYa1zpg` |
| Mitigate an Incident | PUT | `/v1/incidents/{{id}}/mitigate` | `conn_mod_def::GMIfwpwCzyA::RM93s5e2QY6uAmQaNvbNJQ` |
| Remove Duplicate Marking Using Incidents Unmark As Duplicate | PUT | `/v1/incidents/{{id}}/unmark_as_duplicate` | `conn_mod_def::GMIfwpwcfVg::FEc9mmD6T2-su7tZ_iAwxw` |

6 more Incidents actions are available through search.

### MeetingRecordings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Meeting Recording | GET | `/v1/meeting_recordings/{{id}}` | `conn_mod_def::GMIfxs773QA::jCS-54dsTd-52HdBdHi2BA` |
| List All Meeting Recordings | GET | `/v1/meeting_recordings` | `conn_mod_def::GMIfxzh54BA::bhLg1Bw9SjKBR1vptGGvfg` |
| List Meeting Recordings for an Incident | GET | `/v1/incidents/{{incidentId}}/meeting_recordings` | `conn_mod_def::GMIfxzkPyvg::FB1mUvVjRZ2AuTmaUN4eqA` |
| Create Meeting Recordings for an Incident | POST | `/v1/incidents/{{incidentId}}/meeting_recordings` | `conn_mod_def::GMIfxi_s1rA::PfqwGoCfTfqxZ87vFuQpJA` |
| Delete a Meeting Recording | DELETE | `/v1/meeting_recordings/{{id}}` | `conn_mod_def::GMIfxpsy58A::RljHdS5-SQ-Yt_2UIZGyQg` |
| Delete Session for a Meeting Recording | DELETE | `/v1/meeting_recordings/{{id}}/delete_session` | `conn_mod_def::GMIfxrCcJvg::KYKkE8rpR0KCeghRB_LcUg` |
| Delete Video Using Meeting Recordings | DELETE | `/v1/meeting_recordings/{{id}}/delete_video` | `conn_mod_def::GMIfxrlBaLg::H3jnbvMSROms6Z8swT1iMg` |
| Import Meeting Recordings for an Incident | POST | `/v1/incidents/{{incidentId}}/meeting_recordings/import` | `conn_mod_def::GMIfxq1HQyA::tc27bRIGRHmH_6miVxCcXw` |
| Leave a Meeting Recording Call | POST | `/v1/meeting_recordings/{{id}}/leave` | `conn_mod_def::GMIfx1nm8XA::Fh6EC3IVQhamUVzda_YzXA` |
| Pause a Meeting Recording | POST | `/v1/meeting_recordings/{{id}}/pause` | `conn_mod_def::GMIfxzl5GAA::YcjToQC-SwqlkBQ-86vRbA` |
| Resume a Meeting Recording | POST | `/v1/meeting_recordings/{{id}}/resume` | `conn_mod_def::GMIfyAwPuRg::Ckt6on_yT3Sv9yzRgrD0YA` |
| Start Session for Meeting Recordings | POST | `/v1/meeting_recordings/start_session` | `conn_mod_def::GMIfyGwQ8qA::eVMZAgiJTimHyIICazf1Bw` |

1 more MeetingRecordings actions are available through search.

### Alerts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Alert | GET | `/v1/alerts/{{id}}` | `conn_mod_def::GMIfnzCMDqA::InVoNDdzT9On_DOMesjTUw` |
| List Alerts | GET | `/v1/alerts` | `conn_mod_def::GMIfn85lSFg::vedM4fCdQb2oC-GsutG6Wg` |
| Acknowledge an Alert | POST | `/v1/alerts/{{id}}/acknowledge` | `conn_mod_def::GMIfnsmsJnA::_VzkrKP4QrqGgP01C2F4ww` |
| Create Alert | POST | `/v1/alerts` | `conn_mod_def::GMIfnsEOIEA::pZwwyX2ySLWh3dFdpuQcqw` |
| Escalate an Alert | POST | `/v1/alerts/{{id}}/escalate` | `conn_mod_def::GMIfns1I6Lg::JPfVRmnuSeOh3eQIMsU7gw` |
| Resolve an Alert | POST | `/v1/alerts/{{id}}/resolve` | `conn_mod_def::GMIfnzCTu3g::dqc0I5BQRh6Ux_qlp6zKTw` |
| Snooze an Alert | POST | `/v1/alerts/{{id}}/snooze` | `conn_mod_def::GMIfoEdzn7A::gjqqoZFdRlm5YH66V_av9g` |
| Update an Alert | PATCH | `/v1/alerts/{{id}}` | `conn_mod_def::GMIfoDOAN5g::JdcVJDjgQSqhI__5RREnIg` |

### EscalationLevels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Escalation Level | GET | `/v1/escalation_levels/{{id}}` | `conn_mod_def::GMIfsBUkwIg::wrQXw5S9TK2vcnrKf4VivA` |
| List Escalation Levels for an Escalation Path | GET | `/v1/escalation_paths/{{escalationPolicyPathId}}/escalation_levels` | `conn_mod_def::GMIfsKy9d8g::dhmQARdRRwawCClDjJ4j3Q` |
| List Escalation Levels for an Escalation Policy | GET | `/v1/escalation_policies/{{escalationPolicyId}}/escalation_levels` | `conn_mod_def::GMIfsJ8RGgg::AXA7KXv4S8GTla0l_nGIGA` |
| Create Escalation Levels for an Escalation Path | POST | `/v1/escalation_paths/{{escalationPolicyPathId}}/escalation_levels` | `conn_mod_def::GMIfsCGcR8g::bRuJGBqZQBeU5xyZTUH63g` |
| Create Escalation Levels for an Escalation Policy | POST | `/v1/escalation_policies/{{escalationPolicyId}}/escalation_levels` | `conn_mod_def::GMIfsK9yM6A::gjppzPxdRo6_XAOlThvKJw` |
| Delete an Escalation Level | DELETE | `/v1/escalation_levels/{{id}}` | `conn_mod_def::GMIfsArLrHg::8ybkQ85FQjS_zYkdGKCz7A` |
| Update an Escalation Level | PUT | `/v1/escalation_levels/{{id}}` | `conn_mod_def::GMIfsArVrvg::Yrt8bLgaTKGtRjz-a03-MA` |

### CatalogEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Catalog Entities for a Catalog | GET | `/v1/catalogs/{{catalogId}}/entities` | `conn_mod_def::GMIfpQIlZgA::1KPRnMG2TQCuVhShSQBOOQ` |
| Retrieve a Catalog Entity | GET | `/v1/catalog_entities/{{id}}` | `conn_mod_def::GMIfpOLS2AA::QjEwFMafRfiwpcXzhGba_w` |
| Bulk Delete Catalog Entities | POST | `/v1/catalogs/{{catalogId}}/entities/bulk_delete` | `conn_mod_def::GMIfo92rf0A::YYVanTeYRxmo3TQQx46CZw` |
| Bulk Upsert Catalog Entities | POST | `/v1/catalogs/{{catalogId}}/entities/bulk_upsert` | `conn_mod_def::GMIfpA3jI-g::OvKNlm18TRy9Vm7w31Kg0w` |
| Create a Catalog Entity for a Catalog | POST | `/v1/catalogs/{{catalogId}}/entities` | `conn_mod_def::GMIfpFfn2wA::UCeLzcbgSqempPqBavbwhg` |
| Delete a Catalog Entity | DELETE | `/v1/catalog_entities/{{id}}` | `conn_mod_def::GMIfpLXUQjA::gK35yYldRsW12-fhEURkQQ` |
| Update a Catalog Entity | PUT | `/v1/catalog_entities/{{id}}` | `conn_mod_def::GMIfpOJuKpA::wmi6e6dwQWyX5OkIk26oBA` |

### Dashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Dashboards | GET | `/v1/dashboards` | `conn_mod_def::GMIfrAD0FZA::GIWMcZF5QMaIB9fIjWymBA` |
| Retrieve a Dashboard | GET | `/v1/dashboards/{{id}}` | `conn_mod_def::GMIfq9ChU4A::AIoHiLJuSl-eeQTMtlKrwg` |
| Create Dashboard | POST | `/v1/dashboards` | `conn_mod_def::GMIfq0p6HDg::ej7FVWqiRTu03iGAxHq9BQ` |
| Delete a Dashboard | DELETE | `/v1/dashboards/{{id}}` | `conn_mod_def::GMIfq0c-eTg::1WPK12h9ROKGZ8YT9vQ3jg` |
| Duplicate a Dashboard | POST | `/v1/dashboards/{{id}}/duplicate` | `conn_mod_def::GMIfq00jXpA::5lK28dTPSqOR9lpyiem_mQ` |
| Set Default Dashboard | POST | `/v1/dashboards/{{id}}/set_default` | `conn_mod_def::GMIfq8oUM8A::0_O9ODUtQcS4lfcDKlP95w` |
| Update a Dashboard | PUT | `/v1/dashboards/{{id}}` | `conn_mod_def::GMIfq9GJNsg::DEZ4RAHVR7GaD0IN382GsA` |

### EdgeConnectors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Edge Connectors | GET | `/v1/edge_connectors` | `conn_mod_def::GMIfrwgHcQg::ZL_APHJrTYyG93kLwLCxHg` |
| Show Edge Connector | GET | `/v1/edge_connectors/{{id}}` | `conn_mod_def::GMIfrv6j0Og::lB-4JZK1TM6hUeou8B8ZWA` |
| Show Edge Connector Action | GET | `/v1/edge_connectors/{{edgeConnectorId}}/actions/{{id}}` | `conn_mod_def::GMIfroVY-Ug::UHzZ_xNRTImCenboWH8ydw` |
| Create Edge Connector | POST | `/v1/edge_connectors` | `conn_mod_def::GMIfrocK9tg::Pc2lUoJqRZ-V3P0RQVpKZQ` |
| Delete Edge Connector | DELETE | `/v1/edge_connectors/{{id}}` | `conn_mod_def::GMIfrvOszyg::imcK4ZYdTHKlXDqXiWIknQ` |
| Update Edge Connector | PATCH | `/v1/edge_connectors/{{id}}` | `conn_mod_def::GMIfrwHmjFA::lYa8SxuTRQKFst2db2jXdw` |

### Functionalities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Uptime Chart for a Functionality | GET | `/v1/functionalities/{{id}}/uptime_chart` | `conn_mod_def::GMIftuxeaWg::cCNMWlpFTm6r-BhZCj0Z9g` |
| List Functionalities | GET | `/v1/functionalities` | `conn_mod_def::GMIftukMQMg::21UyqPT3TI2q0-BRbM3_dQ` |
| Retrieve a Functionality | GET | `/v1/functionalities/{{id}}` | `conn_mod_def::GMIft1PuXAA::ZFsdXkWOSIyhSl0a7MATCQ` |
| Create a Functionality | POST | `/v1/functionalities` | `conn_mod_def::GMIftjDzHjA::0dmouU-IQiekaNFTWx1RPw` |
| Delete Functionality | DELETE | `/v1/functionalities/{{id}}` | `conn_mod_def::GMIftrWlPcA::PleTXqhJRYiDVlxdrsZchg` |
| Update a Functionality | PUT | `/v1/functionalities/{{id}}` | `conn_mod_def::GMIft1X5bkA::99LIK6wSSQOodCWLhsPr8w` |

### LiveCallRouters

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Phone Number for Live Call Router | GET | `/v1/live_call_routers/generate_phone_number` | `conn_mod_def::GMIfxiiRDLA::inmvLgTURWiw6Qfb8tmJrg` |
| List Live Call Routers | GET | `/v1/live_call_routers` | `conn_mod_def::GMIfxkQcUbA::ZujTAhBuSwKCY7QM143-0w` |
| Retrieve a Live Call Router | GET | `/v1/live_call_routers/{{id}}` | `conn_mod_def::GMIfxhZwMhg::HMlg8NCDR-2bp7gj1u0Zww` |
| Create a Live Call Router | POST | `/v1/live_call_routers` | `conn_mod_def::GMIfxbTs0Rg::bsM6dgwVSumPORHLe17nbA` |
| Delete a Live Call Router | DELETE | `/v1/live_call_routers/{{id}}` | `conn_mod_def::GMIfxaXAxLA::_WdGHBOEQymTZCToF4gIAg` |
| Update a Live Call Router | PUT | `/v1/live_call_routers/{{id}}` | `conn_mod_def::GMIfxi_ipVA::T0u9HsDyRvGUYz0Rg_hm5g` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Schedule's Shifts | GET | `/v1/schedules/{{id}}/shifts` | `conn_mod_def::GMIf1dl--RA::8fafZ3oNRIayQ9z40ePURg` |
| List Schedules | GET | `/v1/schedules` | `conn_mod_def::GMIf0wsY4LA::zZ_u4G3JSOqFvdFIiTVmcg` |
| Retrieve a Schedule by ID | GET | `/v1/schedules/{{id}}` | `conn_mod_def::GMIf0u8KCBg::tQGA4pM9SXmfznuXS1fhaw` |
| Create Schedule | POST | `/v1/schedules` | `conn_mod_def::GMIf0u5UUJA::VHJUsx_ZTX6P3oBBiE3w2g` |
| Delete a Schedule | DELETE | `/v1/schedules/{{id}}` | `conn_mod_def::GMIf0vulndA::DyMD9i6-Qr-1ENam6uzW7Q` |
| Update a Schedule | PUT | `/v1/schedules/{{id}}` | `conn_mod_def::GMIf0vE-Drg::nTFxF4nERfeorjVDgkZnBg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/v1/users/me` | `conn_mod_def::GMIf3Ymr6KA::ywgOXp71QQKa1QKM3220zA` |
| List Users | GET | `/v1/users` | `conn_mod_def::GMIf3TDd_dA::4EH7pKJPT0-u0d2hVp_cTA` |
| Retrieve a User | GET | `/v1/users/{{id}}` | `conn_mod_def::GMIf3edrMQg::0_fiUpmyQCapm0EqGCQJdQ` |
| Retrieve a User's Email Addresses | GET | `/v1/users/{{userId}}/email_addresses` | `conn_mod_def::GMIf20jS38A::PmQy0S_zQNWBmBMbf4MXrQ` |
| Delete a User | DELETE | `/v1/users/{{id}}` | `conn_mod_def::GMIf3TLKcDg::ADKOSNq7Qwas9C_X-cO7bA` |
| Update a User | PUT | `/v1/users/{{id}}` | `conn_mod_def::GMIf3eRUW-g::JB8D3Je1TYCY3fwklgFskg` |

### CatalogProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| List Catalog Properties | GET | `/v1/services/properties` | `conn_mod_def::GMIf1F6-zGA::2NoK36GkSECKbOWgwnorbQ` |
| List Catalog Properties for a Catalog | GET | `/v1/catalogs/{{catalogId}}/properties` | `conn_mod_def::GMIfpf-nbIg::AfauhWREQRqbRNHgBR3UFQ` |
| Retrieve a Catalog Property | GET | `/v1/catalog_properties/{{id}}` | `conn_mod_def::GMIfpeOhy1A::xBwEX5JTTUWnNhNqrWiDjQ` |
| Create a Catalog Property for a Catalog | POST | `/v1/catalogs/{{catalogId}}/properties` | `conn_mod_def::GMIfpWPVqzA::bJpKxX7cQXmzmIIlXTS-yA` |
| Delete a Catalog Property | DELETE | `/v1/catalog_properties/{{id}}` | `conn_mod_def::GMIfpeOGhtg::NswDVFeOTkmsPwjWgYsFhw` |
| Update a Catalog Property | PUT | `/v1/catalog_properties/{{id}}` | `conn_mod_def::GMIfpeczbfA::7_7sNqSxQ8qV9yAwROhDcA` |

### AlertRoutes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Alert Route | GET | `/v1/alert_routes/{{id}}` | `conn_mod_def::GMIfnZRPimg::uMZ81IGBQNWnaquvWPIw3Q` |

5 more AlertRoutes actions are available through search.

This lists 90 of 557 actions. For anything not here, call `search_one_platform_actions` with platform `rootly`. The full catalog is at https://www.withone.ai/knowledge/rootly.

## When a call fails

The error comes from Rootly, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/rootly

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
