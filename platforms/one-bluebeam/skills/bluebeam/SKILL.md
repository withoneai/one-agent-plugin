---
name: bluebeam
description: Bluebeam is a PDF-centric collaboration platform tailored for architecture, engineering, and construction professionals, offering industry-grade markup, measurement, takeoff, and document management tools combined with real-time collaboration via Bluebeam Studio for streamlined project workflows across office and field environments. Read and write Bluebeam data through One: projectfiles, jobs, projects, projectfolders, subscriptions, projectusers and more, 133 actions with real parameter documentation. Use whenever the user asks to look something up in Bluebeam, create or update a record there, or build code against the Bluebeam API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bluebeam
  generated-from: one-knowledge-base
---

# Bluebeam through One

Bluebeam is a PDF-centric collaboration platform tailored for architecture, engineering, and construction professionals, offering industry-grade markup, measurement, takeoff, and document management tools combined with real-time collaboration via Bluebeam Studio for streamlined project workflows across office and field environments.

One exposes Bluebeam through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bluebeam` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Bluebeam is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Bluebeam account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ProjectFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project File’s Metadata | GET | `/publicapi/v1/projects/{{projectId}}/files/{{id}}` | `conn_mod_def::GJ0EnHpuCFc::6Em_6M6iQrqcdadZ4P-WQg` |
| Get a Project File's Metadata by Path | GET | `/publicapi/v1/projects/{{projectId}}/files/by-path` | `conn_mod_def::GJ0Em-z1lNg::q3PDDpawSuSK5F7CsqAadA` |
| List All Files in a Project | GET | `/publicapi/v1/projects/{{projectId}}/files` | `conn_mod_def::GJ0Em3TRgRA::j8glYlxuQpWSxz3Z2v3JNA` |
| Check In a Project File (Get Upload URL) | POST | `/publicapi/v1/projects/{{projectId}}/files/{{id}}/checkin` | `conn_mod_def::GJ0El4uGscs::YSJBBNI5Q0O9IqG-hO-68w` |
| Checkout a Project File for Modification | POST | `/publicapi/v1/projects/{{projectId}}/files/{{id}}/checkout` | `conn_mod_def::GJ0EmA8_8DQ::vxB866USQa6zEuX2CLEgEA` |
| Checkout a Project File to a Studio Session | POST | `/publicapi/v1/projects/{{projectId}}/files/{{id}}/checkout-to-session` | `conn_mod_def::GJ0EmJtEa10::JWhwVCMmR6WlXZpoy15Btw` |
| Confirm a Project File Upload in a Project | POST | `/publicapi/v1/projects/{{projectId}}/files/{{id}}/confirm-upload` | `conn_mod_def::GJ0EmZHuEEk::Q0mKljQXRIqM6ai3UmdwfQ` |
| Confirm Check-In of a Project File | POST | `/publicapi/v1/projects/{{projectId}}/files/{{id}}/confirm-checkin` | `conn_mod_def::GJ0EmRWgqOo::VbfOAo18Q86mItLSsLiHbg` |
| Copy a Project File | POST | `/publicapi/v1/projects/{{projectId}}/files/{{id}}/copy` | `conn_mod_def::GJ0EmgbIolE::-Pf9EQAbSdCRVNKBiECgLg` |
| Create a Project File (Create Metadata) | POST | `/publicapi/v1/projects/{{projectId}}/files` | `conn_mod_def::GJ0EmoJfOgI::ipgsrwIDTxKCOSzNqFAVtw` |
| Delete a Project File | DELETE | `/publicapi/v1/projects/{{projectId}}/files/{{id}}` | `conn_mod_def::GJ0EmvFXEjs::0PAcB1K_S8eN1u1VqvEY6g` |
| Unflatten a Project File | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/unflatten` | `conn_mod_def::GJ0Ek0dvJlA::_Yjd3LbeQ6e01RiJ9o1FoA` |

1 more ProjectFiles actions are available through search.

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job's Metadata | GET | `/publicapi/v1/jobs/{{id}}` | `conn_mod_def::GJ0Efh_vUs8::KtbhFTH8QAKtU1ONk8N12Q` |
| List Jobs | GET | `/jobs` | `conn_mod_def::GJ0EfaolneU::PrdN0kMYSNa2hulzU8zLRw` |
| Cancel a Job | PUT | `/publicapi/v1/jobs/{{id}}/cancel` | `conn_mod_def::GJ0EfTUSfps::D7aWxc8xSdyn6BllLVmlYw` |
| Convert a Project File to PDF/A-1b (Create Save-as-PDF/A Job) | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/saveaspdfa` | `conn_mod_def::GJ0Eg6K7tp4::5OrKOc3sQfiJ1HFhMZGGoQ` |
| Create a PDF/A-1b Compliance Text Report for a Project File | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/createpdfareport` | `conn_mod_def::GJ0EiwHFOts::mMy_kQKNTHa2AnqMoVp1XQ` |
| Delete Pages from a Project File (PDF) | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/deletepages` | `conn_mod_def::GJ0Eh0UleoQ::1443QMB2TW-DcMrA6iY7Uw` |
| Export a Project File’s PDF Form Data (Job) | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/exportformdata` | `conn_mod_def::GJ0EiD0_M0s::ZjATh_5RRNiNq_AlpY5IZA` |
| Import Custom Columns Job for a Project File | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/importcustomcolumns` | `conn_mod_def::GJ0Ei4OYbfM::q1qJs5wmT2S_W6GFQlwkNw` |
| Import Markups Into a Project File (Job) | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/importmarkups` | `conn_mod_def::GJ0Ei_0N04Y::ULGcgrp3QJaQ6NMXiyQ_cA` |
| Insert Blank Pages into a Project File (Create Job) | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/insertblankpages` | `conn_mod_def::GJ0EjbXKvLA::WRNFKlukS4StGPI6E9oVJg` |
| Set a Project File’s Open Password | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/openpassword` | `conn_mod_def::GJ0ElK4hKv8::o9i7z3CgQdqwe8eo2-DIkA` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/publicapi/v1/projects/{{id}}` | `conn_mod_def::GJ0EpE1cbDY::x1w_VP11QpWwhmMlneaWVg` |
| List Projects | GET | `/publicapi/v1/projects` | `conn_mod_def::GJ0EpMam1MY::PYLuZhhWTqeOaDvPQ8XD3A` |
| Create a Project | POST | `/publicapi/v1/projects` | `conn_mod_def::GJ0Eo1l0nzs::wbpmf3EmSDaA4asKrqi9Zw` |
| Delete a Project | DELETE | `/publicapi/v1/projects/{{id}}` | `conn_mod_def::GJ0Eo8iBp2Q::eGSYQgiDSx-xRsgSMsoG0g` |
| Invite a User to a Project by Email | POST | `/publicapi/v1/projects/{{projectId}}/invite` | `conn_mod_def::GJ0Eqm7gwhI::pvf5_dsZTN-spO52XcWxZQ` |
| Update a Project | PUT | `/publicapi/v1/projects/{{id}}` | `conn_mod_def::GJ0EpTVWdUA::VOK6k1qPStCgGsR7mUeeig` |

### ProjectFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Folder’s Metadata | GET | `/publicapi/v1/projects/{{projectId}}/folders/{{id}}` | `conn_mod_def::GJ0EoYnRLxo::hmyFNpIwTkaRrHGCYzq9rw` |
| List All Files and Folders in a Project (Recursive) | GET | `/publicapi/v1/projects/{{projectId}}/folders` | `conn_mod_def::GJ0EoGxe5u0::u9JnK3ALRnmADFCso8m-JQ` |
| Create a Project Folder | POST | `/publicapi/v1/projects/{{projectId}}/folders` | `conn_mod_def::GJ0En4EuaeI::R-c6kEuQT5a_o8VLywjKaQ` |
| Delete a Project’s Folder | DELETE | `/publicapi/v1/projects/{{projectId}}/folders/{{id}}` | `conn_mod_def::GJ0En-q4YlE::0igf5bufRD-1BXkr4uS6OA` |
| Update a Project Folder | PUT | `/publicapi/v1/projects/{{projectId}}/folders/{{id}}` | `conn_mod_def::GJ0EofzTFTg::XwJ-TiNPQtKYBb6mnVSsHQ` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscription | GET | `/publicapi/v2/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ0Eu70L2zU::5pM4ES-tRDCKL3nMNPGVDA` |
| List Subscriptions | GET | `/subscriptions` | `conn_mod_def::GJ0Eu1O2VBA::6kMfcH3pSJmj8CLt2h5FhA` |
| Create a Subscription (Webhook) for a Studio Project or Session | POST | `/publicapi/v2/subscriptions` | `conn_mod_def::GJ0EuoAOFnY::6qSN_EAoSH-2haOPN5JAiw` |
| Delete a Subscription | DELETE | `/publicapi/v2/subscriptions/{{subscriptionId}}` | `conn_mod_def::GJ0Euu1twKA::_T7texofTNOWLO94aFirJA` |
| Update a Subscription | PUT | `/publicapi/v2/subscriptions` | `conn_mod_def::GJ0EvCOckO4::-anM4PYLShKGUCGZmPUmHQ` |

### ProjectUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project User | GET | `/publicapi/v1/projects/{{projectId}}/users/{{id}}` | `conn_mod_def::GJ0EqXweBMw::UvMmrW5RSuWykscV7ifpxw` |
| List a Project’s Users | GET | `/publicapi/v1/projects/{{projectId}}/users` | `conn_mod_def::GJ0EqfrO1Kk::O7mvlWMoSsiyIHA9fv2D_g` |
| Add a User to a Project | POST | `/publicapi/v1/projects/{{projectId}}/users` | `conn_mod_def::GJ0EqQ3Y0q4::4zjadaEITdmT4TlcbGNPDQ` |
| Update a User in a Project | PUT | `/publicapi/v1/projects/{{projectId}}/users/{{id}}` | `conn_mod_def::GJ0Eq1yIIMQ::TtWZ41M_SXe9ZqVR5ORaZA` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Studio Session | POST | `/publicapi/v1/sessions` | `conn_mod_def::GJ0EtDQ6dFk::ynjJipqWR5OVYEFRXVAMYA` |
| Delete a Studio Session's Authorizations | DELETE | `/publicapi/v1/sessions/{{id}}` | `conn_mod_def::GJ0EtKqNJbQ::2jmXG68VRa-QEcPVMYGNVg` |
| Invite a User to a Studio Session by Email | POST | `/publicapi/v1/sessions/{{sessionId}}/invite` | `conn_mod_def::GJ0EuX6IjV8::susrsDvrQ9azvZ-JP8qIsg` |
| Update a Studio Session’s Permissions | PUT | `/publicapi/v1/sessions/{{sessionId}}/permissions` | `conn_mod_def::GJ0Es8J4Jc4::cJmFuwIPQY-GzclPkMFAnA` |

### ProjectFileRevisions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project File Revision's Metadata | GET | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/revisions/{{id}}` | `conn_mod_def::GJ0EliXVqdQ::fwUou3C6SoW6W62SpfTHqg` |
| List a Project File's Revisions | GET | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/revisions` | `conn_mod_def::GJ0Elpyq_i0::WC6neFTmRoS-51OtWaSnbw` |
| Restore a Project File Revision | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/revisions/{{id}}/restore` | `conn_mod_def::GJ0ElxJCaXA::gdzm8VkmSpSaVy284veC_g` |

### StudioSessionFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Studio Session File's Metadata | GET | `/publicapi/v1/sessions/{{sessionId}}/files/{{id}}` | `conn_mod_def::GJ0Er8yKA7g::dE81YAG5QDqNkKSkQr7S8g` |
| List Files in a Studio Session | GET | `/publicapi/v1/sessions/{{sessionId}}/files` | `conn_mod_def::GJ0ErpwmDVo::GxZHWSOEStOS5KoOtT0VWA` |
| Delete a Studio Session File | DELETE | `/publicapi/v1/sessions/{{sessionId}}/files/{{id}}` | `conn_mod_def::GJ0Erhvpq0I::RYr2Ks-MSCitSdTzo_Q-Lw` |

### StudioSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Studio Session’s Metadata | GET | `/publicapi/v1/sessions/{{id}}` | `conn_mod_def::GJ0EtRw3QmA::Lm8oIyO6Stu0mUAXWXqGKg` |
| List Studio Sessions (Get All Studio Sessions Authorizations) | GET | `/sessions` | `conn_mod_def::GJ0EtbHRgnU::InwlzqUzTqaO_1uapAmBnA` |
| Update a Studio Session | PUT | `/publicapi/v1/sessions/{{id}}` | `conn_mod_def::GJ0Etkzz_CQ::RBgIWLU3QFSZTMcvN_2W-Q` |

### JobResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job Result's Metadata | GET | `/publicapi/v1/jobs/{{id}}/results/{{resultId}}` | `conn_mod_def::GJ0EfMqkw-o::ub_qPvblS76a5qkjq85lzA` |
| List a Job’s Results Metadata | GET | `/publicapi/v1/jobs/{{id}}/results` | `conn_mod_def::GJ0EfFj9qlk::oFydZSQuSu2CiI1--M_TDQ` |

### PageRotationJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Page Rotation Job Result (PageRotation) for a Project | GET | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/pagerotation/{{jobId}}` | `conn_mod_def::GJ0Ej_lj6Bw::_8yhniZkS8eWGfU3t0RHXg` |
| Create a Page Rotation Job for a Project File | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/pagerotation` | `conn_mod_def::GJ0EhUtKCnQ::Exm4vP8jTZCfWJ9_75cGIQ` |

### ProjectFolderPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Folder's Permission | GET | `/publicapi/v1/projects/{{projectId}}/folders/{{folderId}}/permissions` | `conn_mod_def::GJ0EngX9N9M::pWYREJ9KSHCoGghHjxoklg` |
| Update a Project Folder’s Permissions for a User | PUT | `/publicapi/v1/projects/{{projectId}}/folders/{{folderId}}/permissions` | `conn_mod_def::GJ0Enu_Q5is::J4HZu2JBRHW8m5wr3iiEYg` |

### ProjectPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Permissions | GET | `/publicapi/v1/projects/{{projectId}}/permissions` | `conn_mod_def::GJ0EonK7DJM::eEelPe7oThe_DA4yAmIQ8g` |
| Update a Project’s Permissions | PUT | `/publicapi/v1/projects/{{projectId}}/permissions` | `conn_mod_def::GJ0EouBS_UI::1shZGoidR-SVfqNtXStmGw` |

### SharedLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Shared Links | GET | `/publicapi/v1/projects/{{projectId}}/sharedlinks` | `conn_mod_def::GJ0Eppsk7RI::xMs35zhNSTinThXNHbk3rg` |
| Create a Shared Link for a Project File | POST | `/publicapi/v1/projects/{{projectId}}/sharedlinks` | `conn_mod_def::GJ0EpafZ4eo::bVL2MZezSDWxpOM1TnjT4g` |

### ProjectSharedLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Shared Link’s Metadata | GET | `/publicapi/v1/projects/{{projectId}}/sharedlinks/{{id}}` | `conn_mod_def::GJ0EpxCjBC4::qX0KmTNxS0iR7y2mhWGdKQ` |
| Update a Project Shared Link | PUT | `/publicapi/v1/projects/{{projectId}}/sharedlinks/{{id}}` | `conn_mod_def::GJ0Ep4fxtmM::ZAFXcyWrQr6JMDkWoLZDeg` |

### ProjectUserPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project User’s Permissions | GET | `/publicapi/v1/projects/{{projectId}}/users/{{userId}}/permissions` | `conn_mod_def::GJ0Ep_i6nhg::mHGf64R1TnCo9CuZiteRWA` |
| Update a Project User’s Permissions | PUT | `/publicapi/v1/projects/{{projectId}}/users/{{userId}}/permissions` | `conn_mod_def::GJ0EqHh7NBw::ccbzXPXOQpaVBWGvQAEuSw` |

### SessionActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Studio Session’s Activities | GET | `/publicapi/v1/sessions/{{sessionId}}/activities` | `conn_mod_def::GJ0ErMdkgNs::GWbNit-kRUq2AnK75xecWA` |
| Create a Studio Session Activity | POST | `/publicapi/v1/sessions/{{sessionId}}/activities` | `conn_mod_def::GJ0Eq9DzriM::bn1nAB-LRXmajhn4wQBIOw` |

### SessionFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Check In a Session File to Update the Studio Project Copy | POST | `/publicapi/v1/sessions/{{sessionId}}/files/{{id}}/checkin` | `conn_mod_def::GJ0EsLX-iNM::8m8WNEiwRlKznmeUUTBlsg` |
| Create a Studio Session File’s Upload Metadata | POST | `/publicapi/v1/sessions/{{sessionId}}/files` | `conn_mod_def::GJ0Era_0qr0::w8QGYN-LT52adzpVBNBgFw` |

### SessionFileMarkups

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Session File’s Markups | GET | `/publicapi/v2/sessions/{{sessionId}}/files/{{fileId}}/markups` | `conn_mod_def::GJ0EsdCXnSs::GBaAI-RtR3Ky8HMUFOzSMg` |
| List Detailed Markups for a Session File | GET | `/publicapi/v2/sessions/{{sessionId}}/files/{{fileId}}/markups/details` | `conn_mod_def::GJ0EsVevWQg::SwZgro5OTSGOTemJhfXk7Q` |

### StudioSessionUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Studio Session User | GET | `/publicapi/v1/sessions/{{sessionId}}/users/{{id}}` | `conn_mod_def::GJ0EuE8B-vo::y7GZiTcATj-WNWwp7FG-rw` |
| Update a Studio Session User | PUT | `/publicapi/v1/sessions/{{sessionId}}/users/{{id}}` | `conn_mod_def::GJ0Eug8hLy0::55Y6Ch9lRhut_Ls-Oo7ZQg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Currently Authenticated User | GET | `/publicapi/v1/users/me` | `conn_mod_def::GJ0EvNR_gVo::QmxZpOx2QliSMDcicYrg8g` |
| Update the Authenticated User (Me) | PUT | `/publicapi/v1/users/me` | `conn_mod_def::GJ0EvUa_ddI::R34LNh95QhKqvjI-SPObSA` |

### Oauth2Authorization

| Action | Method | Path | Action id |
|---|---|---|---|
| Get OAuth 2.0 Authorization Code | GET | `/oauth2/authorize` | `conn_mod_def::GJ0EewFKvM0::AVjBvV6aRROJn-Yqzg0sJQ` |

### Oauth2Tokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get OAuth2 Authentication Token | POST | `/oauth2/token` | `conn_mod_def::GJ0Ee3ZZ5b4::8cAwQ8QpRYu04W5-o6qZEQ` |

### Healthcheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Healthcheck | GET | `/healthcheck` | `conn_mod_def::GJ0Ee929OfM::VZ8lWIhORLKDJkHrll59Mg` |

### ProjectFileHeaderAndFooterJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Apply Header and Footer to a Project File (PDF) | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/headerandfooter` | `conn_mod_def::GJ0EfqT0uhQ::3kg6iSsLTjKfnweOxREcxg` |

### PdfSecurityJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Apply PDF Security Permissions to a Project File | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/pdfsecurity` | `conn_mod_def::GJ0Ef0tlZdc::nxMGa6jpTh2BEi18IDaucQ` |

### FileCombineJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Combine a Project File with Other PDF Files | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/combine` | `conn_mod_def::GJ0Ef9BtwvI::dHi28xmcTZK6NwzB2ey6zg` |

### Dwg2pdfJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a Project File (DWG) to PDF | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/dwg2pdf` | `conn_mod_def::GJ0EgFS17II::XIaqcC1aQKelNxTvf3preg` |

### Ps2pdfJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a Project File from PostScript to PDF (PS2PDF Job) | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/ps2pdf` | `conn_mod_def::GJ0EgNCWICs::F1M4xXf7SK-pV2YuWYkBug` |

### ProjectFileWordToPdfJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a Project File (Word) to PDF | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/word2pdf` | `conn_mod_def::GJ0EgVHYFS4::CoOzE1EyTBqy9w9crtXQzQ` |

### Excel2pdfJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a Project File (Excel) to PDF (Create Excel-to-PDF Job) | POST | `/publicapi/v1/projects/{{projectId}}/files/{{fileId}}/jobs/excel2pdf` | `conn_mod_def::GJ0EgdYRq74::3qbfd4DKSgGRVR667A0gXQ` |

This lists 90 of 133 actions. For anything not here, call `search_one_platform_actions` with platform `bluebeam`. The full catalog is at https://www.withone.ai/knowledge/bluebeam.

## When a call fails

The error comes from Bluebeam, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bluebeam

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
