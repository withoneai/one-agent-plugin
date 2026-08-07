---
name: hookdeck
description: Hookdeck is a webhook infrastructure platform that enables developers to receive, route, transform, retry, and monitor webhook events, allowing teams to build more reliable event-driven integrations and debug webhook delivery issues across third-party services and internal systems. Read and write Hookdeck data through One: connections, destinations, sources, issuetriggers, transformations, bookmarks and more, 116 actions with real parameter documentation. Use whenever the user asks to look something up in Hookdeck, create or update a record there, or build code against the Hookdeck API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: hookdeck
  generated-from: one-knowledge-base
---

# Hookdeck through One

Hookdeck is a webhook infrastructure platform that enables developers to receive, route, transform, retry, and monitor webhook events, allowing teams to build more reliable event-driven integrations and debug webhook delivery issues across third-party services and internal systems.

One exposes Hookdeck through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `hookdeck` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Hookdeck is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Hookdeck account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Connections

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Connections | GET | `/2025-07-01/connections/count` | `conn_mod_def::GLf2c-SmVzg::cfAsGDO5QGiQfUvmYrG_aA` |
| Retrieve a Connection | GET | `/connections/{{id}}` | `conn_mod_def::GLf2dcLT_cA::_AaJ78B0Qrud3AwY2fu4vQ` |
| Retrieve Connections | GET | `/2025-07-01/connections` | `conn_mod_def::GLf2dgqGrog::96Rp1-1xTvm4mKm138LDCA` |
| Archive a Connection | PUT | `/connections/{{id}}/archive` | `conn_mod_def::GLf2dSFZdbA::3i8fyyz0TU-caUxn0KvXkg` |
| Create Connection | POST | `/2025-07-01/connections` | `conn_mod_def::GLf2c9EjEig::utU9abGxRbGXd3abFowdrA` |
| Create or Update a Connection | PUT | `/2025-07-01/connections` | `conn_mod_def::GLf2dStQdGA::GCGZHE8cRxCcvgx5qwKofw` |
| Delete a Connection | DELETE | `/connections/{{id}}` | `conn_mod_def::GLf2dSHb8Ag::kJE0EJxbQDyR332tI0dh5w` |
| Disable a Connection | PUT | `/connections/{{id}}/disable` | `conn_mod_def::GLf2dUD7g0A::YhSMWIGEQX2jF5dbbJj9Zw` |
| Enable a Connection | PUT | `/connections/{{id}}/enable` | `conn_mod_def::GLf2dSG0wMg::y1tOMJiaRHyK9iL8-2Ggeg` |
| Pause a Connection | PUT | `/connections/{{id}}/pause` | `conn_mod_def::GLf2db6CffA::LwelZ_2bTGez8vEyagD_GQ` |
| Unarchive a Connection | PUT | `/connections/{{id}}/unarchive` | `conn_mod_def::GLf2dbwVE-g::pJrhscB7TWCGcdGcPpeM8w` |
| Unpause a Connection | PUT | `/connections/{{id}}/unpause` | `conn_mod_def::GLf2db_8ROA::ZIYAieFYRPWC9erOoscLXw` |

1 more Connections actions are available through search.

### Destinations

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Destinations | GET | `/2025-07-01/destinations/count` | `conn_mod_def::GLf2dzSIO4g::2IW_HbHcRr2uGkhx6UEdPQ` |
| Retrieve a Destination | GET | `/destinations/{{id}}` | `conn_mod_def::GLf2d7-I_sA::xGS_zh1uTFOIxjKjKKfPYw` |
| Retrieve Destinations | GET | `/2025-07-01/destinations` | `conn_mod_def::GLf2eIiAx5A::iEoxRb9oRBuaEHN7gVjPCg` |
| Archive a Destination | PUT | `/destinations/{{id}}/archive` | `conn_mod_def::GLf2d8V1bcg::3WvHlDQfSqqz_QLUmJ0I4w` |
| Create Destination | POST | `/2025-07-01/destinations` | `conn_mod_def::GLf2dop7_aA::A8LHtHYPQpqweWT_5CfVrQ` |
| Create or Update a Destination | PUT | `/2025-07-01/destinations` | `conn_mod_def::GLf2dpFAoFA::6_KTX_jqTsal4ZT1Tn4aIw` |
| Delete a Destination | DELETE | `/destinations/{{id}}` | `conn_mod_def::GLf2doqOHkA::1jW9lLuiQTadi4oWZsuBXQ` |
| Disable a Destination | PUT | `/destinations/{{id}}/disable` | `conn_mod_def::GLf2d72LBBA::q_XK8hscQzq9RmopQJRIoQ` |
| Enable a Destination | PUT | `/destinations/{{id}}/enable` | `conn_mod_def::GLf2d72ZWAg::fvY7quRnSRusO5GWpywrrA` |
| Enable a Destination | PUT | `/destinations/{{id}}/unarchive` | `conn_mod_def::GLf2d-EcGmg::XFehji8rS_SmPLgk1UVnkA` |
| Update a Destination | PUT | `/destinations/{{id}}` | `conn_mod_def::GLf2eGK0Zzg::2J3Zb_xrScuExJocz1kznA` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Sources | GET | `/2025-07-01/sources/count` | `conn_mod_def::GLf2f8W63bA::BNMa68OeRTCpb1n0aZvRUQ` |
| Retrieve a Source | GET | `/sources/{{id}}` | `conn_mod_def::GLf2gLhDt8g::BzdO9-CbQuCE7w5zXDZ5Rw` |
| Retrieve Sources | GET | `/2025-07-01/sources` | `conn_mod_def::GLf2gKloBbA::NyL-QT3PSlat0JysTdqlJQ` |
| Archive a Source | PUT | `/sources/{{id}}/archive` | `conn_mod_def::GLf2gIEtumg::xDEu4xvcRHC-qt0ct3L5kQ` |
| Create or Update a Source | PUT | `/2025-07-01/sources` | `conn_mod_def::GLf2f_wFNkA::RC2Xg1Z3TRmX-JM9Bgphjg` |
| Create Source | POST | `/2025-07-01/sources` | `conn_mod_def::GLf2f7TwTBg::L7kXAVC_QniLVzlqQNp9eQ` |
| Delete a Source | DELETE | `/sources/{{id}}` | `conn_mod_def::GLf2f6p9-xg::GV6dYLxUThCGxa4sYnIksg` |
| Disable a Source | PUT | `/sources/{{id}}/disable` | `conn_mod_def::GLf2f6sDeuA::amrTG6TVQ12cvmXuzi8ODw` |
| Enable a Source | PUT | `/sources/{{id}}/unarchive` | `conn_mod_def::GLf2gIlflTA::1gUIFSmuR6mlzkLWHLtICQ` |
| Enable a Source | PUT | `/sources/{{id}}/enable` | `conn_mod_def::GLf2gJr9cKA::M3BNmIPiRY6PAnpN-yfBmg` |
| Update a Source | PUT | `/sources/{{id}}` | `conn_mod_def::GLf2gTFkmTg::SvPXOWcGSYGhfcAmYNS0PQ` |

### IssueTriggers

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Issue Trigger | GET | `/issue-triggers/{{id}}` | `conn_mod_def::GLf2e-fQTVg::CclF4cT8RuW0FbnhXBp2WA` |
| Retrieve Issue Triggers | GET | `/2025-07-01/issue-triggers` | `conn_mod_def::GLf2fDNJwlA::L8zhPhHJRXi9tOWtuJz_zw` |
| Create an Issue Trigger | POST | `/2025-07-01/issue-triggers` | `conn_mod_def::GLf2esa3KYA::wRzzSKImRcq_qZG7yMP3cg` |
| Create or Update an Issue Trigger | PUT | `/2025-07-01/issue-triggers` | `conn_mod_def::GLf2e2ctXQg::0g-HsLUMSlavtdK9uvJfuQ` |
| Delete Issue Trigger | DELETE | `/issue-triggers/{{id}}` | `conn_mod_def::GLf2es072Rg::jabkT-0QSlyR0LhQ8-yUxw` |
| Disable an Issue Trigger | PUT | `/issue-triggers/{{id}}/disable` | `conn_mod_def::GLf2es2c9Hg::jWc6MuWSQJGHEMy_OmiMhw` |
| Enable an Issue Trigger | PUT | `/issue-triggers/{{id}}/enable` | `conn_mod_def::GLf2etYrVsA::LF0lNaauRCi6HBiPJ77jNw` |
| Update an Issue Trigger | PUT | `/issue-triggers/{{id}}` | `conn_mod_def::GLf2e-wgoGA::c-cMR96DRKyopAL7xa7wYw` |

### Transformations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Transformations Count | GET | `/2025-07-01/transformations/count` | `conn_mod_def::GLf2geqEmMg::2euX4Ce8Q4mQz_Uil_Pgjg` |
| Retrieve a Transformation | GET | `/transformations/{{id}}` | `conn_mod_def::GLf2gfWj5vA::HxanbWeVQJ6JnKKAfNQirw` |
| Retrieve Transformations | GET | `/2025-07-01/transformations` | `conn_mod_def::GLf2ggWMA-A::HkUghBHmRU2aRZa2gmTkDA` |
| Create a Transformation | POST | `/2025-07-01/transformations` | `conn_mod_def::GLf2gTP_ovA::KQFztZHwRvOqqaWHwxjyOw` |
| Create or Update a Transformation | PUT | `/2025-07-01/transformations` | `conn_mod_def::GLf2gW_9o2A::XtqgFNM5RFW8cJFupXGrfQ` |
| Delete a Transformation | DELETE | `/transformations/{{id}}` | `conn_mod_def::GLf2gS3E3Tg::GkcXQ8d-RaOx0La4RTJQiA` |
| Run a Transformation Test | PUT | `/2025-07-01/transformations/run` | `conn_mod_def::GLf2gfSVZPA::qoGlHrAlQvGPHHh5V0yCyg` |
| Update a Transformation | PUT | `/transformations/{{id}}` | `conn_mod_def::GLf2gpKduUA::cnbvkGTUQfO99yTP8D39Tg` |

### Bookmarks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Raw Body Data for a Bookmark | GET | `/bookmarks/{{id}}/raw_body` | `conn_mod_def::GLf2boqiQAg::Wi_J_m1GTN-DpXDnS30tsg` |
| Retrieve a Bookmark | GET | `/bookmarks/{{id}}` | `conn_mod_def::GLf2bzJY3cA::XzryjL3hR7avDLh5VAwQ7Q` |
| Retrieve Bookmarks | GET | `/2025-07-01/bookmarks` | `conn_mod_def::GLf2b4cag2g::k25Pzqk8SF-b6ib0n4ze-Q` |
| Create Bookmark | POST | `/2025-07-01/bookmarks` | `conn_mod_def::GLf2boN3HxA::hpXFOGkjROKe3LPyZW0ERA` |
| Delete a Bookmark | DELETE | `/bookmarks/{{id}}` | `conn_mod_def::GLf2boN3E1g::N7Hqff8xSoKa-ArmiJKh_Q` |
| Trigger a Bookmark | POST | `/bookmarks/{{id}}/trigger` | `conn_mod_def::GLf2byLFrwA::dEWWEHw4RhqRenIxRZ_Ttg` |
| Update a Bookmark | PUT | `/bookmarks/{{id}}` | `conn_mod_def::GLf2b0qgjJg::vTnxpCwSSLGClBkdwVvkPA` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Integration | GET | `/integrations/{{id}}` | `conn_mod_def::GLf2eko8yIg::vJhp2GiHRAOr9y7PuoPxxg` |
| Get Integrations | GET | `/2025-07-01/integrations` | `conn_mod_def::GLf2ek_mqIA::gDE0LsNBSzS59cBuer7kIg` |
| Attach an Integration to a Source | PUT | `/integrations/{{id}}/attach/{{sourceId}}` | `conn_mod_def::GLf2eSlJi9A::CnIfahMMTCaPBKijXB9Zag` |
| Create Integration | POST | `/2025-07-01/integrations` | `conn_mod_def::GLf2edIpQDg::KEqxAjzySCC0xadSl6gBuA` |
| Delete an Integration | DELETE | `/integrations/{{id}}` | `conn_mod_def::GLf2ekZ39HA::0YamL_zpSw6ottp2_M-UEQ` |
| Detach a Source from an Integration | PUT | `/integrations/{{id}}/detach/{{sourceId}}` | `conn_mod_def::GLf2eksOIkg::75HWsQFnS8GYMHN_8UixkQ` |
| Update an Integration | PUT | `/integrations/{{id}}` | `conn_mod_def::GLf2ekuxOEg::FQRpBkDSSbGlMowGgiqMpQ` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Event Raw Body | GET | `/events/{{id}}/raw_body` | `conn_mod_def::GLf2eF-RWTA::wwZ5c-5UQRmd_P5-XowqjA` |
| Retrieve an Event | GET | `/events/{{id}}` | `conn_mod_def::GLf2eR6pnwg::W8wsxs3tT_uzzEdit1y-mQ` |
| Retrieve Events | GET | `/events` | `conn_mod_def::GLf2ebG6UXA::1WoiJn_hSw2v5uA5X_0zwQ` |
| Cancel an Event | PUT | `/events/{{id}}/mute` | `conn_mod_def::GLf2eFXonag::U-fFPKDbS1mfzgfYqG07gw` |
| Cancel an Event | PUT | `/events/{{id}}/cancel` | `conn_mod_def::GLf2eGxa8EA::sR1pQgUwT0ekuPxGPxsp4Q` |
| Retry an Event | POST | `/events/{{id}}/retry` | `conn_mod_def::GLf2eQ2i9qA::jHLUg-r4S_W7bNTsLf91MA` |

### Issues

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Issues | GET | `/2025-07-01/issues/count` | `conn_mod_def::GLf2fEA3Y_A::l-lztplYQGCEz2xBAPm3HQ` |
| Retrieve an Issue | GET | `/issues/{{id}}` | `conn_mod_def::GLf2fMWPcBA::5rVBm3k_QnqwDszj-VcyDA` |
| Retrieve Issues | GET | `/2025-07-01/issues` | `conn_mod_def::GLf2fRXNqKg::KFHmrgUDTs-pQtuF8QlG3A` |
| Dismiss an Issue | DELETE | `/issues/{{id}}` | `conn_mod_def::GLf2e-vIiZg::uIQeaOV8SySsyyyzWBOnnQ` |
| Update an Issue | PUT | `/issues/{{id}}` | `conn_mod_def::GLf2fMaUMfg::FsXVQUFZS-ywX-2FVyJk5Q` |

### Requests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Raw Body Data for a Request | GET | `/requests/{{id}}/raw_body` | `conn_mod_def::GLf2flX788A::bnmSFYAtSkeHpyqt8bEweQ` |
| Retrieve a Request | GET | `/requests/{{id}}` | `conn_mod_def::GLf2ftif0Kg::gGazeZRRQBG4iliKl4WoNA` |
| Retrieve Requests | GET | `/2025-07-01/requests` | `conn_mod_def::GLf2fxcJkVg::82499BIKTMmu6XEQlMMr4w` |
| Retry a Request | POST | `/requests/{{id}}/retry` | `conn_mod_def::GLf2ftULYzA::B-yfwDyGRSK0XSKMPIzOXQ` |

### IgnoredEventsBulkRetry

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Ignored Events Bulk Retry | GET | `/bulk/ignored-events/retry/{{id}}` | `conn_mod_def::GLf2cgurMhA::s1vt6_3aSY2yBLgfckyCSw` |
| Cancel Ignored Events Bulk Retry | POST | `/bulk/ignored-events/retry/{{id}}/cancel` | `conn_mod_def::GLf2cQWmUmA::0FdZgkPFQpGO4waV4efI1Q` |
| Retry Ignored Events in Bulk | POST | `/2025-07-01/bulk/ignored-events/retry` | `conn_mod_def::GLf2cQWKBEg::3YAcxWO9T0ev5lHRDu6JPg` |

### CustomDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Domains for the Current Team | GET | `/2025-07-01/teams/current/custom_domains` | `conn_mod_def::GLf2flCCHKg::iyDyFL7VRzSiX1uMGspuow` |
| Add a Custom Domain to the Current Team Project | POST | `/2025-07-01/teams/current/custom_domains` | `conn_mod_def::GLf2fledGNA::31CCyYm1RLao9bgBCGyyWg` |
| Remove a Custom Domain from the Current Team Project | DELETE | `/teams/current/custom_domains/{{domainId}}` | `conn_mod_def::GLf2fl8lHwg::umILYt5oRq2dVS4k4x2K_Q` |

### Attempts

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Attempt | GET | `/attempts/{{id}}` | `conn_mod_def::GLf2bopVosA::LH8ndEAPQcW-EzRQLR0Rcw` |
| Retrieve Attempts | GET | `/2025-07-01/attempts` | `conn_mod_def::GLf2bqau8dg::4d8cT0lfQDmKMBe9GF_DpQ` |

### BulkEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel Plan for Bulk Events | GET | `/2025-07-01/bulk/events/cancel/plan` | `conn_mod_def::GLf2cBvK75g::E8TSrqg3RfWUmAm_zWoO0Q` |
| Retry Plan for Bulk Events | GET | `/2025-07-01/bulk/events/retry/plan` | `conn_mod_def::GLf2cQhDSEg::EAjGhBNOSGC1SuIZqGIrYQ` |

### EventsBulkRetry

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Events Bulk Retry | GET | `/bulk/events/retry/{{id}}` | `conn_mod_def::GLf2cQ7DUHg::eYojYztuSDaUbwK6tQDxwA` |

1 more EventsBulkRetry actions are available through search.

This lists 90 of 116 actions. For anything not here, call `search_one_platform_actions` with platform `hookdeck`. The full catalog is at https://www.withone.ai/knowledge/hookdeck.

## When a call fails

The error comes from Hookdeck, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/hookdeck

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
