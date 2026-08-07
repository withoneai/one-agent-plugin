---
name: businessmap
description: Businessmap is a work management and Kanban platform that provides planning, workflow visualization, and automation tools, enabling teams to manage projects, track delivery, and integrate operational data across business processes for improved coordination, transparency, and execution. Read and write Businessmap data through One: cards, boards, cardtemplates, dashboardpages, customfields, docs and more, 742 actions with real parameter documentation. Use whenever the user asks to look something up in Businessmap, create or update a record there, or build code against the Businessmap API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: businessmap
  generated-from: one-knowledge-base
---

# Businessmap through One

Businessmap is a work management and Kanban platform that provides planning, workflow visualization, and automation tools, enabling teams to manage projects, track delivery, and integrate operational data across business processes for improved coordination, transparency, and execution.

One exposes Businessmap through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `businessmap` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Businessmap is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Businessmap account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Cards

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Card's Parent Relationship | GET | `/cards/{{cardId}}/parents/{{parentCardId}}` | `conn_mod_def::GKz3xApZJ6g::mZTVulzJSWGvRvV8xfdI3g` |
| Check a Card's Successor Relationship for a Given Card | GET | `/cards/{{cardId}}/successors/{{successorCardId}}` | `conn_mod_def::GKz3yAmMBzg::xxXrV_Q_Tw-yHEkdcsCOIg` |
| Check if a Tag Is Added to a Card | GET | `/cards/{{cardId}}/tags/{{tagId}}` | `conn_mod_def::GKz3yLqGA0A::VkB4Anr4Rpu__r6liv_HeA` |
| Check Whether a Card Has a Specific Child Card | GET | `/cards/{{cardId}}/children/{{childCardId}}` | `conn_mod_def::GKz32hnmByA::VUWCyyDRRSiGmGwd-rsvBQ` |
| Check Whether a Card Has a Specific Relative | GET | `/cards/{{cardId}}/relatives/{{relatedCardId}}` | `conn_mod_def::GKz3xcEiWRg::f4RrzMW1TXigslBf9T8nBA` |
| Check Whether a Card Is a Predecessor of a Given Card | GET | `/cards/{{cardId}}/predecessors/{{predecessorCardId}}` | `conn_mod_def::GKz3xKE32dA::FH5kO6-CRMCpMs0RrSaTlw` |
| Check Whether the Current User Is a Watcher of a Card | GET | `/cards/{{cardId}}/watched` | `conn_mod_def::GKz311gQzkg::V9VfImRMRNq56uK5W_naCQ` |
| Get a Card's Block Reason | GET | `/cards/{{cardId}}/blockReason` | `conn_mod_def::GKz3vEUwvnA::vgiYlVXESWyIA0mQqdSAFw` |
| Get a Card's Child Graph | GET | `/cards/{{cardId}}/childGraph` | `conn_mod_def::GKz32pzK2PA::hVMJsRUqSoaPJET41uA6uw` |
| Get a Card's Cover Image Details | GET | `/cards/{{cardId}}/coverImage` | `conn_mod_def::GKz3vtp2tXg::062s2txlSPOe4wWhNE2Fxw` |
| Get a Card's Predecessor Graph | GET | `/cards/{{cardId}}/predecessorGraph` | `conn_mod_def::GKz3xbmJqUA::JR9O_lsUR56X3iYwtOu3zA` |
| Get a Card's Successor Cards | GET | `/cards/{{cardId}}/successors` | `conn_mod_def::GKz3yKlD_4g::MOBBcypuTKeFZTo0miorvA` |

42 more Cards actions are available through search.

### Boards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Board's Current Structure | GET | `/boards/{{boardId}}/currentStructure` | `conn_mod_def::GKz3uDNtbeA::UtU4CnwsRXyZ9hYzveuKJg` |
| Get a Board's Current Structure Revision | GET | `/boards/{{boardId}}/currentStructure/revision` | `conn_mod_def::GKz3uDmbhYA::BxX8yXiNTzGjuBK9gqvq_g` |
| Get a Board's Effective Cycle Time Columns | GET | `/boards/{{boardId}}/effectiveCycleTimeColumns` | `conn_mod_def::GKz3tRFEZuA::PFevexiRRcymafZzV2wGmA` |
| Get a Board's Settings | GET | `/boards/{{boardId}}/settings` | `conn_mod_def::GKz3tv00TLg::0Rdc3R9sS_awayQ7YpIOqw` |
| Get a Single Board's Details | GET | `/boards/{{boardId}}` | `conn_mod_def::GKz3ueCJX4g::tMPCjdYcTkyMyoreIVjc9A` |
| List Boards | GET | `/api/v2/boards` | `conn_mod_def::GKz3ufk5jGA::Y7etQavBRzenPGxR4vZCEQ` |
| List Boards for a Tag | GET | `/tags/{{tagId}}/boards` | `conn_mod_def::GKz4AtR2aAA::6k9ydn0aQ1GcFqy7D4-npQ` |
| List Boards Where the Current User Is a Point of Contact | GET | `/api/v2/my/pointOfContactForBoards` | `conn_mod_def::GKz3-GalFCA::W4c-12iFRumhP4XgGQUVTw` |
| Add a Custom Field to a Board | PUT | `/boards/{{boardId}}/customFields/{{fieldId}}` | `conn_mod_def::GKz3scZj3eg::LMrQbzINQquC6CWYS6f8Xg` |
| Create a Board | POST | `/api/v2/boards` | `conn_mod_def::GKz3ueUCOZA::jpnS6gu-SXKx9l6ZjGSh2Q` |
| Delete a Board | DELETE | `/boards/{{boardId}}` | `conn_mod_def::GKz3uhsycqA::GiebqDLSQO6sWsUB5FBkEw` |
| Make a Board Standard Field Visible | PUT | `/boards/{{boardId}}/visibleStandardFields/{{fieldName}}` | `conn_mod_def::GKz3ueIe78A::YYUBXg7YTh64PKaZEmXMvg` |

10 more Boards actions are available through search.

### CardTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Board's Card Templates | GET | `/boards/{{boardId}}/cardTemplates` | `conn_mod_def::GKz3rj_44og::L3-Y0mMEQK-8XZZMlWZZEQ` |
| Get a Card Template's Single Card Details | GET | `/cardTemplates/{{templateId}}/cards/{{cardId}}` | `conn_mod_def::GKz30rr2NhA::19LCM0mtQ9ihNzGHP7FgVg` |
| Get a Single Card Template | GET | `/cardTemplates/{{templateId}}` | `conn_mod_def::GKz302gZlzg::iNda-m2cRe-sj7K1cQBx1g` |
| List a Card Template's Cards | GET | `/cardTemplates/{{templateId}}/cards` | `conn_mod_def::GKz30tDcpCg::eJZQuvYETvW4fzQxVDiOtA` |
| List Card Templates | GET | `/api/v2/cardTemplates` | `conn_mod_def::GKz304qzwqA::t4P-Z5gqRqu2ypO-kVx3Qg` |
| Add a Card to a Card Template | POST | `/cardTemplates/{{templateId}}/cards` | `conn_mod_def::GKz30hLyjbA::uIGm-CHpRu-Lchp4ckoS2A` |
| Add a Parent Card to a Card in a Card Template | PUT | `/cardTemplates/{{templateId}}/cards/{{cardId}}/parents/{{parentCardId}}` | `conn_mod_def::GKz3zZ0mbag::20uI0_1UTAOiaLsMLfEf0A` |
| Create Card Template | POST | `/api/v2/cardTemplates` | `conn_mod_def::GKz305nzP5g::u_y6Ni9ZSJmPz4eKomXeBA` |
| Delete a Card from a Card Template | DELETE | `/cardTemplates/{{templateId}}/cards/{{cardId}}` | `conn_mod_def::GKz30fZWfMA::yb3lwJwfRj2EAQCj2oPAmQ` |
| Delete a Card Template | DELETE | `/cardTemplates/{{templateId}}` | `conn_mod_def::GKz302C2ejg::-B1ashdbTS2EuhMQL6-zoQ` |
| Delete Many Card Templates | POST | `/api/v2/cardTemplates/deleteMany` | `conn_mod_def::GKz30q8g3lg::DP_ekMkCRtS88rNLTpKm0g` |
| Disable Many Card Templates | POST | `/api/v2/cardTemplates/disableMany` | `conn_mod_def::GKz30r9ZEzA::elayIbYkQMihxouU4ZA0nA` |

7 more CardTemplates actions are available through search.

### DashboardPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Dashboard Page User Assignment | GET | `/dashboardPages/{{dashboardPageId}}/users/{{userId}}` | `conn_mod_def::GKz34A0rhFA::ROzkFN8AQ9WZbz51-jhgDw` |
| Check Whether a Team Has Access to a Dashboard Page | GET | `/dashboardPages/{{dashboardPageId}}/teams/{{teamId}}` | `conn_mod_def::GKz3331lOig::W9pHTNYqT5GlPUER9aJ7jA` |
| Check Whether a Workspace Is Added to a Dashboard Page | GET | `/dashboardPages/{{dashboardPageId}}/workspaces/{{workspaceId}}` | `conn_mod_def::GKz34OMu4rg::JbomB1Z4TliwYPp_Ub-Lhg` |
| Get a Specific Dashboard Page's Details | GET | `/dashboardPages/{{dashboardPageId}}` | `conn_mod_def::GKz34WcbdBA::uyp98HU6QJqg8KWuvWSmLQ` |
| List Dashboard Pages | GET | `/api/v2/dashboardPages` | `conn_mod_def::GKz34Zb7Z4A::9CiQFNF1RCWvDh7aZq8ZVw` |
| Clone a Dashboard Page | POST | `/dashboardPages/{{dashboardPageId}}/clone` | `conn_mod_def::GKz34NbQjLA::FXN_P0I-Rc28Lt79kaftsw` |
| Create a Dashboard Page | POST | `/api/v2/dashboardPages` | `conn_mod_def::GKz34XnMkFg::4UsMKDxKSaayDxRmRjjBjA` |
| Delete a Dashboard Page | DELETE | `/dashboardPages/{{dashboardPageId}}` | `conn_mod_def::GKz34YKE9Ig::VUwuKiX5SyGggWiFOwdw_w` |
| Grant or Update a Team's Access to a Dashboard Page | PUT | `/dashboardPages/{{dashboardPageId}}/teams/{{teamId}}` | `conn_mod_def::GKz333koV7A::D7OasiVvR8eG57hU50K_7A` |
| Make a Workspace Available on a Dashboard Page | PUT | `/dashboardPages/{{dashboardPageId}}/workspaces/{{workspaceId}}` | `conn_mod_def::GKz34LEGwIA::xE9-EgW2S8irrkwLu52Tug` |
| Remove a Team's Access to a Dashboard Page | DELETE | `/dashboardPages/{{dashboardPageId}}/teams/{{teamId}}` | `conn_mod_def::GKz34Aedz0g::My0pQwY9RX2q7yIJxfgHqQ` |
| Remove a User's Access to a Dashboard Page | DELETE | `/dashboardPages/{{dashboardPageId}}/users/{{userId}}` | `conn_mod_def::GKz34DVj-tg::9FYR6PHCQzWdZ6ZVbnCYOQ` |

2 more DashboardPages actions are available through search.

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field's Details | GET | `/customFields/{{fieldId}}` | `conn_mod_def::GKz333T7EVA::BOv_MEYNTPKrorMKS4ZL2Q` |
| Get Allowed Values for a Custom Field Dropdown | GET | `/customFields/{{fieldId}}/allowedValues` | `conn_mod_def::GKz33WQ9-0A::s9N8EHAjTkOsaklAgX0yxw` |
| List Boards for a Custom Field | GET | `/customFields/{{fieldId}}/boards` | `conn_mod_def::GKz33jPONkA::vbYU0yk4Qj6fjRp5qS4JSg` |
| List Cards for a Custom Field | GET | `/customFields/{{fieldId}}/cards` | `conn_mod_def::GKz33jF2GVg::JtVxuMDlRsKrmEBa6XvAyw` |
| List Custom Fields | GET | `/api/v2/customFields` | `conn_mod_def::GKz33uip0Xg::tWvMVpbeTJKiBKGRl9Sn0Q` |
| Change a Custom Field's Board Availability | POST | `/customFields/{{fieldId}}/batchBoardOperations` | `conn_mod_def::GKz33Wn7vRA::48i_6DeJSkqXiCGxQVi5PQ` |
| Create a Custom Field | POST | `/api/v2/customFields` | `conn_mod_def::GKz33r_emKA::eVLfhJpwQV-vj3Wexhv8uw` |
| Delete a Custom Field | DELETE | `/customFields/{{fieldId}}` | `conn_mod_def::GKz33rBIqsA::rejyYZw-TJScF3lHqooH1Q` |
| Delete an Allowed Value from a Custom Field | DELETE | `/customFields/{{fieldId}}/allowedValues/{{valueId}}` | `conn_mod_def::GKz33GUJJDg::VLCPhibPSlOAO6Xk8ccWXA` |
| Delete Many Custom Fields | POST | `/api/v2/customFields/deleteMany` | `conn_mod_def::GKz33hKn2nA::VYaEXxsdROWZgF5miN8UiQ` |
| Disable Many Custom Fields | POST | `/api/v2/customFields/disableMany` | `conn_mod_def::GKz33hyoQ0g::rGgbsrTdQeqnoplePUbnFQ` |
| Enable Many Custom Fields | POST | `/api/v2/customFields/enableMany` | `conn_mod_def::GKz33rBtq2g::asIOApOzSjWcFm8bw1E4-g` |

2 more CustomFields actions are available through search.

### Docs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Doc's History | GET | `/docs/{{docId}}/history` | `conn_mod_def::GKz35nL5GtA::BoSyHI4_Q1Gfqh2vyUn8pQ` |
| Get a Doc's Permissions | GET | `/docs/{{docId}}/permissions` | `conn_mod_def::GKz35mCALVg::CdrdeynURFSt1SDkjdTnCw` |
| Get a Doc's Successors | GET | `/docs/{{docId}}/successors` | `conn_mod_def::GKz35vbeSYg::HZH7xG7KSjif3PZ_FHQQKQ` |
| Get a Single Doc | GET | `/docs/{{docId}}` | `conn_mod_def::GKz35uUzy7g::mjSI_EmFSDGZNcmOvEZeFQ` |
| Get a Specific Revision for a Doc | GET | `/docs/{{docId}}/revisions/{{revision}}` | `conn_mod_def::GKz35Zbq4FA::rh4Zo8w2S_Cswn_KeLVasA` |
| Get Sharing Information for a Doc | GET | `/docs/{{docId}}/sharedWith` | `conn_mod_def::GKz35mGmnFg::HLmtl_QBTvW5MWZ8Cn8UcA` |
| List Docs | GET | `/api/v2/docs` | `conn_mod_def::GKz35diJYkg::au9es11xTxqP3H0-9J_dzg` |
| Clone a Doc | POST | `/docs/{{docId}}/clone` | `conn_mod_def::GKz35P-XFZg::TSqN2-r_QC-DP8JWlC_BRQ` |
| Create a Doc | POST | `/api/v2/docs` | `conn_mod_def::GKz35OlfekA::otVIiwyaTTCYRJ-wPXjGig` |
| Delete a Doc | DELETE | `/docs/{{docId}}` | `conn_mod_def::GKz35PVAU0g::hvb2H--qR4Cd66dDCiGYkQ` |
| Delete a Doc Attachment | DELETE | `/docs/{{docId}}/attachments/{{attachmentId}}` | `conn_mod_def::GKz35OaMWSg::5vgk9p_VRcOB8UkfjcZMew` |
| Update a Doc | PATCH | `/docs/{{docId}}` | `conn_mod_def::GKz35vIORwA::_jKzlbC_SMuvYeC6BNAwPQ` |

2 more Docs actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a User's Global Privilege | GET | `/users/{{userId}}/globalPrivileges/{{privilegeName}}` | `conn_mod_def::GKz369I1EmA::BUMyjMWnQeWzlZu5J8S0hQ` |
| Check If a User Is Assigned to a Team | GET | `/users/{{userId}}/teams/{{teamId}}` | `conn_mod_def::GKz4B_2QR7A::0oZg2_nFTIaNulWJi9UzZg` |
| Get a User's Details | GET | `/users/{{userId}}` | `conn_mod_def::GKz4CKTYJdg::n8UFijHMSGWQcQ3ZtSEiwQ` |
| Get a User's Last Activity | GET | `/users/{{userId}}/lastActivity` | `conn_mod_def::GKz4BjYak_g::Neeho8uDS-Kmb_SF6B8etA` |
| List Users | GET | `/api/v2/users` | `conn_mod_def::GKz4CNhEstg::JoVoRFV6QvagIN77LGOefA` |
| Add and Invite a New User | POST | `/users/invite` | `conn_mod_def::GKz4B_sj9ug::Ddf27ePKQ8KZ63Ce63lACg` |
| Delete a User | DELETE | `/users/{{userId}}` | `conn_mod_def::GKz4CKSKqeg::l4vfoJuMT9ex-5HRWr7uAA` |
| Delete a User Attribute | DELETE | `/users/{{userId}}/attributes/{{attributeId}}` | `conn_mod_def::GKz4CVeyKJg::EbUEYjxrSHqIXdtN_YxHYw` |
| Grant a User a Global Privilege | PUT | `/users/{{userId}}/globalPrivileges/{{privilegeName}}` | `conn_mod_def::GKz37LYvJcg::KbGaMzxnQdyw7gIY8Q9tsg` |
| Remove a User's Global Privilege | DELETE | `/users/{{userId}}/globalPrivileges/{{privilegeName}}` | `conn_mod_def::GKz37KpSNMA::vSZFsiioQbiy92Jk1UHr6w` |
| Resend a User's Invitation | POST | `/users/{{userId}}/resendInvitation` | `conn_mod_def::GKz4CK8QBeg::-74NvRyPQSOLhrYvj6dFwA` |
| Set a User Attribute Value | PUT | `/users/{{userId}}/attributes/{{attributeId}}` | `conn_mod_def::GKz4CV5im1A::il4jS91RRkSeN5GnU7e10A` |

1 more Users actions are available through search.

### Stickers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Sticker's Details | GET | `/stickers/{{stickerId}}` | `conn_mod_def::GKz4Ag2ASzA::gMA95lEyTgy2z11BJNEZJg` |
| List a Board's Stickers | GET | `/boards/{{boardId}}/stickers` | `conn_mod_def::GKz3t5omJ_g::B_Ffb6SlTDyctb90UT6yiQ` |
| List a Sticker's Available Boards | GET | `/stickers/{{stickerId}}/boards` | `conn_mod_def::GKz4AMCaUvg::8AkLme8nS1Gl_kaAWspzCQ` |
| List Cards for a Sticker | GET | `/stickers/{{stickerId}}/cards` | `conn_mod_def::GKz4AL68GTA::RmSa4vf8SneYFaz8cyPa3g` |
| List Stickers | GET | `/stickers` | `conn_mod_def::GKz4AgXffTg::UmxMUmtJRfSiqCcXaqfqfA` |
| List Stickers for a Card in a Card Template | GET | `/cardTemplates/{{templateId}}/cards/{{cardId}}/stickers` | `conn_mod_def::GKz3ztYXPJA::jl-1a6GKTA6IhQ5Ca2HsnQ` |

7 more Stickers actions are available through search.

This lists 90 of 742 actions. For anything not here, call `search_one_platform_actions` with platform `businessmap`. The full catalog is at https://www.withone.ai/knowledge/businessmap.

## When a call fails

The error comes from Businessmap, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/businessmap

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
