---
name: graph-hopper
description: 'GraphHopper provides routing and logistics APIs that enable developers to calculate routes, optimize deliveries, perform geocoding, and analyze travel distances using customizable profiles and global map data. Category: Developer tools / Routing & navigation API'. Read and write Graph Hopper data through One: profiles, matrix, routes, matrixcomputationjobresult, match, routeoptimizationjobs and more, 40 actions with real parameter documentation. Use whenever the user asks to look something up in Graph Hopper, create or update a record there, or build code against the Graph Hopper API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: graph-hopper
  generated-from: one-knowledge-base
---

# Graph Hopper through One

'GraphHopper provides routing and logistics APIs that enable developers to calculate routes, optimize deliveries, perform geocoding, and analyze travel distances using customizable profiles and global map data. Category: Developer tools / Routing & navigation API'.

One exposes Graph Hopper through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `graph-hopper` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Graph Hopper is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Graph Hopper account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Custom Routing Profile | POST | `/profiles` | `conn_mod_def::GKIwS96MUVg::0puM_FLIR3eXgVWy4LRLVw` |
| Delete a Custom Routing Profile | DELETE | `/profiles/{{profileId}}` | `conn_mod_def::GKIwS71jeNA::19fYHA_OTY6SBi9O0442Nw` |
| Delete a Custom Routing Profile | DELETE | `/profiles/{{profileId}}` | `conn_mod_def::GKIwXixsh_A::fzwnF35xSlee0fflKRfJDg` |
| Submit a Profile Creation Job | POST | `/profiles/calculate` | `conn_mod_def::GKIwTLXzcfg::y57AvTuQRnunLrnPLewCGg` |
| Submit a Profile Creation Job | POST | `/profiles/calculate` | `conn_mod_def::GKIwXsT-i4A::vTNVzVKXT1yrq3zn229ycA` |

### Matrix

| Action | Method | Path | Action id |
|---|---|---|---|
| Compute a Matrix | GET | `/matrix` | `conn_mod_def::GKIwTcO0yag::2eQG4wXxTUOUAnWpIKT-Kw` |
| Compute a Matrix | GET | `/matrix` | `conn_mod_def::GKIwX7aX3Ug::Lh4InrklSn2NgPu0IFRM-A` |
| Compute a Matrix | POST | `/matrix` | `conn_mod_def::GKIwTW9pNpA::SMcAnGPdR266HMv0crrL2Q` |
| Compute a Matrix | POST | `/matrix` | `conn_mod_def::GKIwX4mXOCA::MpN1AzFFTiOfnl78gMBcxw` |

### Routes

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate a Route | GET | `/route` | `conn_mod_def::GKIwYOHVryA::zyfsI8c8T-KRokC6IBOMTw` |
| Calculate a Route | POST | `/api/1/route` | `conn_mod_def::GKIwTklDUwA::sdQeJZ0JRIKWtBPeeVLErg` |

### MatrixComputationJobResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Matrix Computation Job Result | GET | `/matrix/solution/{{jobId}}` | `conn_mod_def::GKIwTZAUwPg::n5F2LlENS7eoekmTLQhdDQ` |
| Retrieve a Matrix Computation Job Result | GET | `/matrix/solution/{{jobId}}` | `conn_mod_def::GKIwX4rDTHA::ufYOI1LOTjyzzpaJnKE8ug` |

### Match

| Action | Method | Path | Action id |
|---|---|---|---|
| Map-Match a GPX File | POST | `/api/1/match` | `conn_mod_def::GKIwTa_JzdA::-2tfaL4XSJ6Z2IRuaYqp7Q` |
| Map-Match a GPX File | POST | `/match` | `conn_mod_def::GKIwX81untA::myJCHtiuSYKibPi_OiGpYg` |

### RouteOptimizationJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit a Route Optimization Job | POST | `/vrp/optimize` | `conn_mod_def::GKIwTkwMz1g::pJ1M7OVqTmK4MAb0lPD1ow` |
| Submit a Route Optimization Job | POST | `/vrp/optimize` | `conn_mod_def::GKIwYHm2WYA::nxT4QOCRRQKIPzj5BhVR6g` |

### VehicleRoutingProblem

| Action | Method | Path | Action id |
|---|---|---|---|
| Solve a Vehicle Routing Problem | POST | `/vrp` | `conn_mod_def::GKIwTlNp7TA::2TiyKA0xTJu562ON4ZG4vw` |
| Solve a Vehicle Routing Problem | POST | `/vrp` | `conn_mod_def::GKIwYGgNDGA::wu31di9yTLiTFkxpwfh-7g` |

### RouteOptimizationJobSolutions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Route Optimization Job Solution | GET | `/vrp/solution/{{jobId}}` | `conn_mod_def::GKIwTmgII9g::crdC7bKdSCuXgQAtyDMaHw` |
| Retrieve a Route Optimization Job Solution | GET | `/vrp/solution/{{jobId}}` | `conn_mod_def::GKIwYGk0fTA::bOL7OPPvQ-KKAYkbVCHrtg` |

### Route

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate a Route | GET | `/route` | `conn_mod_def::GKIwTtSN7JA::qTgPW83AQIehJzeiSYEhjg` |
| Calculate a Route | POST | `/api/1/route` | `conn_mod_def::GKIwYEsGHBA::IeW-AruSTCaO15tsZsuDcQ` |

### MatrixComputationJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit a Matrix Computation Job | POST | `/matrix/calculate` | `conn_mod_def::GKIwX5lHDtA::WLjl4KbYTXyYUV4olv_7HA` |
| Submit a Matrix Computation Job | POST | `/matrix/calculate` | `conn_mod_def::GKIwTXN8YVg::iwrK8OfxQZ2zw00K9MY5WA` |

### Cluster

| Action | Method | Path | Action id |
|---|---|---|---|
| Solve a Clustering Problem | POST | `/cluster` | `conn_mod_def::GKIwTDEWUpg::QHBcZexMS96yqHccbHgqdg` |
| Solve a Clustering Problem | POST | `/cluster` | `conn_mod_def::GKIwXk17kwA::7RsmQan6SvWeK0R-ZmAW0Q` |

### ClusteringJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit a Clustering Job | POST | `/cluster/calculate` | `conn_mod_def::GKIwTDTlDdg::H__guwqJQM-bV4ZY1giI6A` |
| Submit a Clustering Job | POST | `/cluster/calculate` | `conn_mod_def::GKIwXk5go6A::QGIcPav8QbOLsQxL21pn4A` |

### CustomRoutingProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Routing Profiles | GET | `/profiles` | `conn_mod_def::GKIwTMbcyng::UDNGZr2mR5CvmmxuXG1QOw` |
| List Custom Routing Profiles | GET | `/profiles` | `conn_mod_def::GKIwXsALp0g::x9gusyerRj6xNn2tXCb0eA` |

### Isochrone

| Action | Method | Path | Action id |
|---|---|---|---|
| Compute an Isochrone | GET | `/api/1/isochrone` | `conn_mod_def::GKIwTOgdaPA::Db0hUh0uS1KOxf6HOEfUBA` |
| Compute an Isochrone | GET | `/isochrone` | `conn_mod_def::GKIwXuq8p4A::hVtpoSsITxKeO73VQOmfcg` |

### Geocoding

| Action | Method | Path | Action id |
|---|---|---|---|
| Geocoding Endpoint | GET | `/api/1/geocode` | `conn_mod_def::GKIwTPPs9Eg::y3CotTnnR3mM7c3Jo6bGLQ` |
| Geocoding Endpoint | GET | `/geocode` | `conn_mod_def::GKIwXwt6jSA::ge1kA9_kRNGFIGt-hvIaaw` |

### ClusteringJobSolution

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Clustering Job Solution | GET | `/cluster/solution/{{jobId}}` | `conn_mod_def::GKIwS8_SAiA::D1Xrkt97QiuRkObw07HE4w` |

### ProfileCreationJobResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Profile Creation Job Result | GET | `/profiles/solution/{{jobId}}` | `conn_mod_def::GKIwTLw5tRg::EWg4G5XCRBGpkG0mFSaZ4Q` |

### ClusteringJobSolutions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Clustering Job Solution | GET | `/cluster/solution/{{jobId}}` | `conn_mod_def::GKIwXk15yfg::TUSXa_DURxmFIb9XFtnAdg` |

### RoutingProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Custom Routing Profile | POST | `/profiles` | `conn_mod_def::GKIwXk2haoA::BSXOGbpaT8iM6PmwZ6hLeA` |

### ProfileCreationJobResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Profile Creation Job Result | GET | `/profiles/solution/{{jobId}}` | `conn_mod_def::GKIwXtkf9PA::D54kf5YtRFuXb-c7V0wlYA` |

## When a call fails

The error comes from Graph Hopper, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/graph-hopper

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
