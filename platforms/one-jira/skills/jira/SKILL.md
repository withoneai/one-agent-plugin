---
name: jira
description: Jira is a robust work and issue tracking platform that helps teams plan, track, and manage tasks—from bug fixes and feature sprints to cross-departmental projects—using custom workflows, agile boards, real-time reporting, and seamless integrations within a single, scalable hub. Read and write Jira data through One: workflowschemes, issues, users, workflows, filters, projects and more, 784 actions with real parameter documentation. Use whenever the user asks to look something up in Jira, create or update a record there, or build code against the Jira API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: jira
  generated-from: one-knowledge-base
---

# Jira through One

Jira is a robust work and issue tracking platform that helps teams plan, track, and manage tasks—from bug fixes and feature sprints to cross-departmental projects—using custom workflows, agile boards, real-time reporting, and seamless integrations within a single, scalable hub.

One exposes Jira through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `jira` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Jira is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Jira account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### WorkflowSchemes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Draft Workflow Scheme (by Workflow Scheme ID) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflowscheme/{{id}}/draft` | `conn_mod_def::GJ4qtD8--Q8::tvSDfCuySKmxdUtsHvdzyg` |
| Get a Workflow Scheme | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflowscheme/{{id}}` | `conn_mod_def::GJ4qt4FhKyI::Em4M8JslR9mgMzLUKB6PJw` |
| Get a Workflow Scheme’s Default Workflow | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflowscheme/{{id}}/default` | `conn_mod_def::GJ4qtnE9EIU::Yr-4htVCQXaX0RLgTdcD4w` |
| Get a Workflow Scheme’s Workflow for an Issue Type | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflowscheme/{{id}}/issuetype/{{issueType}}` | `conn_mod_def::GJ4qt0mihaU::R-kNb3FsS9C8JPiu_RD13w` |
| Get All Workflow Schemes | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflowscheme` | `conn_mod_def::GJ4qtnDgZQQ::K41mX2RlRby0QeDMR7GPNg` |
| List Workflow Scheme Usages for a Workflow | GET | `/workflow/{{workflowId}}/workflowSchemes` | `conn_mod_def::GJ4qvA_KOBw::uZBe6ugMSomzC2-iLtssEg` |
| Assign Workflow Scheme to Project | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflowscheme/project` | `conn_mod_def::GJ4qtOvANSQ::YzMQ6MvGQreZaK1me2qF_w` |
| Bulk Get Workflow Schemes (by IDs or Project IDs) | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflowscheme/read` | `conn_mod_def::GJ4qtcX4Bkw::mtyu77mBSo-7E4W_D6WkHw` |
| Create a Draft Workflow Scheme from an Active Workflow Scheme | POST | `/rest/api/3/workflowscheme/{{id}}/createdraft` | `conn_mod_def::GJ4qs6lMnO4::sUe6E_NGTt24lo0CzaOYPA` |
| Create Workflow Scheme | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflowscheme` | `conn_mod_def::GJ4qteIqIhE::zi3UregASL-7_dMiT_l3jA` |
| Delete a Draft Workflow Scheme’s Issue Type Mapping | DELETE | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflowscheme/{{id}}/draft/issuetype/{{issueType}}` | `conn_mod_def::GJ4qs1nrqIQ::dy0dkAG8QM26i8v3GHeUWw` |
| Delete a Workflow Scheme | DELETE | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflowscheme/{{id}}` | `conn_mod_def::GJ4qtmVscsg::wdC1fQYCTi-l5klB0NVSew` |

13 more WorkflowSchemes actions are available through search.

### Issues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Issue (Agile Fields) for a Jira Cloud Site | GET | `/ex/jira/{{jiraCloudId}}/rest/agile/1.0/issue/{{issueIdOrKey}}` | `conn_mod_def::GJ4qVw9buT0::A7S8DT76THuFpsKz66oxjg` |
| Get an Issue (by ID or Key) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/issue/{{issueIdOrKey}}` | `conn_mod_def::GJ4qe6eIMMg::dTjGYNwLTBu34ueB7q45TA` |
| Get an Issue’s Edit Metadata | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/issue/{{issueIdOrKey}}/editmeta` | `conn_mod_def::GJ4qes3m5V8::kjwrqbNnS4yyuAAqT6gtdw` |
| Get Issues for a Sprint on a Board | GET | `/agile/1.0/board/{{boardId}}/sprint/{{sprintId}}/issue` | `conn_mod_def::GJ4qRWC-rYc::FonoGiObTjysJ0wDlVMe7Q` |
| Get Issues Without an Epic (Agile) | GET | `/ex/jira/{{jiraCloudId}}/rest/agile/1.0/epic/none/issue` | `conn_mod_def::GJ4qTteEFss::ghc4lftkS-yl0iJWEgCuHQ` |
| Search for Issues Using JQL (GET) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/search` | `conn_mod_def::GJ4qbOSGDew::7zjmjnpsSQif18vEv0_fTw` |
| Search Issues Using JQL (Enhanced Search) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/search/jql` | `conn_mod_def::GJ4qbdtRYhI::S3uWGiHPRMCzy6qMTxFe1A` |
| Archive Issues (by Issue ID/Key) | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/issue/archive` | `conn_mod_def::GJ4qeC4AfY0::kdkhBfL4QbOLIfNbuDmkDQ` |
| Archive Issues by JQL (Async) for a Jira Cloud Site | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/issue/archive` | `conn_mod_def::GJ4qeSXQYpk::s2SG13XMTPi7jQW9JdQV9A` |
| Bulk Create Issues (Create up to 50 issues) in a Jira Cloud Site | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/issue/bulk` | `conn_mod_def::GJ4qeReo29A::xjtzbtoVRO6ntmYKyRU08w` |
| Bulk Fetch Issues (by ID or Key) | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/issue/bulkfetch` | `conn_mod_def::GJ4qeVOxkB4::0uhygFUNTSSaIsKyjPfi6g` |
| Count Issues Using JQL (Approximate) | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/search/approximate-count` | `conn_mod_def::GJ4qbM0aNCs::33PRRQmAQlaMtkvWDFMLNA` |

9 more Issues actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Get Users (by account IDs) in a Jira Cloud Site | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user/bulk` | `conn_mod_def::GJ4qsDnpWxg::UpiUCHG4Q8OMu8GJns53jQ` |
| Find Assignable Users (Jira Cloud) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user/assignable/search` | `conn_mod_def::GJ4qr16ddFg::ytBWxIzSSYaQ9CuQ1vPMag` |
| Find Bulk Assignable Users (Multi-Project) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user/assignable/multiProjectSearch` | `conn_mod_def::GJ4qrydic78::qOsE5UHkS-G4CZofH8lXmQ` |
| Find User Keys by Structured Query (Paginated) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user/search/query/key` | `conn_mod_def::GJ4qrhk_hIM::D5DccHjXT0-2KadK3yuIew` |
| Find Users (Search Active Users) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user/search` | `conn_mod_def::GJ4qr2i2tJ0::RKOpssZwTJSNWgjvH5XOtQ` |
| Find Users by Structured Query (Paginated) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user/search/query` | `conn_mod_def::GJ4qruSGEIU::oMvbKgF2Q4mGECykaZrQBA` |
| Find Users for Picker (in a Jira Cloud Site) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user/picker` | `conn_mod_def::GJ4qr3D1wBQ::gOXbjtBLT0GeOeIoCz_rxw` |
| Find Users With Browse Permission (in a Jira Cloud Site) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user/viewissue/search` | `conn_mod_def::GJ4qsD1aRNI::0wNM15P1QcWH8jjngbFdzQ` |
| Find Users With Permissions (in a Project or Issue) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user/permission/search` | `conn_mod_def::GJ4qsBtzZ5M::O_JTbBQVTTGzkEjMQJuUlA` |
| Get a User (by accountId) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user` | `conn_mod_def::GJ4qsMdYKHw::A5D0HcEiStq8T7RoPAZ45w` |
| Get Account IDs for Users (Bulk Migration) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/user/bulk/migration` | `conn_mod_def::GJ4qsPpY8Gw::0b5CUU3qQuCpnUB-OZlRYA` |
| Get Current User (Myself) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/myself` | `conn_mod_def::GJ4qf9A7ovg::8tDiDTDhRIi_6SHphsPAJA` |

4 more Users actions are available through search.

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Default Workflow Editor | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflows/defaultEditor` | `conn_mod_def::GJ4qu-WAlc8::_H9-9UIOTZKxX0JYWTfXJQ` |
| Get All Workflows (Deprecated) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflow` | `conn_mod_def::GJ4quwkO60Y::Xr347W0XQRWnKcY49xa4Ow` |
| Get Workflows (Paginated) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflow/search` | `conn_mod_def::GJ4qvCTZhec::oW6SvgmZQQ-47geQ6UxyWA` |
| Search Workflows | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflows/search` | `conn_mod_def::GJ4qvPKhxjk::-1BzoiudSSalVOwZ9sRSxg` |
| Bulk Create Workflows | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflows/create` | `conn_mod_def::GJ4qujtQX5o::656xdpf7RfG9iETGcqnwWw` |
| Bulk Get Workflows (Jira Cloud) | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflows` | `conn_mod_def::GJ4qujGT12o::8mEvxrUDRcW3RuWFH3Uzqg` |
| Bulk Update Workflows | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflows/update` | `conn_mod_def::GJ4qukkiew4::KqobRX5BTNqwgZS_9Cu7HA` |
| Create Workflow (Deprecated) | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflow` | `conn_mod_def::GJ4qukIPSIo::Tj_NIwY7T5qG4-u8-Sy2pA` |
| Delete an Inactive Workflow (by Entity ID) | DELETE | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflow/{{entityId}}` | `conn_mod_def::GJ4quxzbmUE::y42_8JFeSPau-6eU44qaDQ` |
| Preview Workflows in a Project | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflows/preview` | `conn_mod_def::GJ4qvAFw_XE::oX72F5-eQzaOp_342jQHVw` |
| Validate Bulk Create Workflows (Jira Cloud) | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflows/create/validation` | `conn_mod_def::GJ4qvLmPbAA::uNiwkMWtT82jHZMFkmlzHg` |
| Validate Bulk Workflow Update Payload (Jira Cloud) | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/workflows/update/validation` | `conn_mod_def::GJ4qvLbYLkA::TWP6rV_FTQm6RB1B6vLH2g` |

### Filters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Filter (by ID) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/filter/{{id}}` | `conn_mod_def::GJ4qVMPJy5Y::2-H_dEtfR4qfGNOuJ_21Fg` |
| Get a User’s Favorite Filters | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/filter/favourite` | `conn_mod_def::GJ4qVDEp8XI::gamP30unT9y5XbO82jVvHw` |
| List My Filters | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/filter/my` | `conn_mod_def::GJ4qVMX42tc::tPxXJ5tbS2GUk_aBPJSn7A` |
| Search Filters (Paginated) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/filter/search` | `conn_mod_def::GJ4qVPGEbzU::dCdbb0FAQUiIeMWtxfKjvA` |
| Add a Filter as Favorite (for the Current User) | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/filter/{{id}}/favourite` | `conn_mod_def::GJ4qUxnz1bY::3JX69plnQqKIuBek-dn1rg` |
| Change a Filter’s Owner | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/filter/{{id}}/owner` | `conn_mod_def::GJ4qVBHIzes::mSOIMzXMQoe9ktBQoWT1cw` |
| Create a Filter (Jira Cloud) | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/filter` | `conn_mod_def::GJ4qVDhQesU::nK_XfKgMRNuuhhvQKptb-Q` |
| Delete a Filter | DELETE | `/ex/jira/{{jiraCloudId}}/rest/api/3/filter/{{id}}` | `conn_mod_def::GJ4qVAUNfzQ::gGweK5MYR8OTs03iB7z3Jg` |
| Remove a Filter as Favorite (for a Jira Site) | DELETE | `/filter/{{id}}/favourite` | `conn_mod_def::GJ4qVNn0q8E::EskRWwm3R2OfCY2FdZAEDg` |
| Set Columns for a Filter (Jira Cloud) | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/filter/{{id}}/columns` | `conn_mod_def::GJ4qVYIidV4::Vtso9LimR5qEvUwnZ0M_yA` |
| Update a Filter | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/filter/{{id}}` | `conn_mod_def::GJ4qVXz-b10::no6I4xyVSmGKiNSD7-fX5g` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project (by ID or Key) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/project/{{projectIdOrKey}}` | `conn_mod_def::GJ4qkqa9wp4::C5WNHbf7RBya0l4E7uICBw` |
| Get Recent Projects (for a Jira Cloud Site) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/project/recent` | `conn_mod_def::GJ4qk-Q39Ls::CW-XUE5cTwKw_Sv99Ye9dQ` |
| List All Projects (Deprecated) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/project` | `conn_mod_def::GJ4qkzOV2Aw::_aC66hJ8SfGv5rGQ2XldCg` |
| Search Projects (Paginated) in a Jira Cloud Site | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/project/search` | `conn_mod_def::GJ4qlDPH6mc::r_NJ8t11Qt2Iuv0IRgQFfg` |
| Archive a Project | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/project/{{projectIdOrKey}}/archive` | `conn_mod_def::GJ4qkdcptjs::LW-2l0-cQj2h_azziE-f3g` |
| Create a Jira Project | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/project` | `conn_mod_def::GJ4qkd7VrzM::MGCDwQAGR_OBv1OWdBizsg` |
| Delete a Project | DELETE | `/ex/jira/{{jiraCloudId}}/rest/api/3/project/{{projectIdOrKey}}` | `conn_mod_def::GJ4qkhGYxQU::-oQMsKSdQEOW28hIROGtBg` |
| Delete a Project Asynchronously | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/project/{{projectIdOrKey}}/delete` | `conn_mod_def::GJ4qkcyS3Qg::XUqCTOaSS5KWHoYS1CEywQ` |
| Restore a Deleted or Archived Project | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/project/{{projectIdOrKey}}/restore` | `conn_mod_def::GJ4qk7Rj1p4::WqTs6bbYRbSciQWwF76w_g` |
| Update a Jira Project (by Project ID or Key) | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/project/{{projectIdOrKey}}` | `conn_mod_def::GJ4qk7vri5U::J6kSxkMzRwm_BAVrg265tQ` |
| Update a Project’s Default Data Classification Level | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/project/{{projectIdOrKey}}/classification-level/default` | `conn_mod_def::GJ4qiFFDHcY::MYRQbU39SFqCKUssP4qk0A` |

### IssueSecuritySchemes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Issue Security Scheme (by ID) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/issuesecurityschemes/{{id}}` | `conn_mod_def::GJ4qb0KgTtA::bhiYSgxkS9K1kk413tZEVA` |
| Get Projects Using Issue Security Schemes (Jira Cloud) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/issuesecurityschemes/project` | `conn_mod_def::GJ4qb3WbgnM::B-_HxxpPSZ20xAYz2o2-lg` |
| List Issue Security Schemes | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/issuesecurityschemes` | `conn_mod_def::GJ4qb1u2wdY::U7F-_kjrRASPyP-7uoE41Q` |
| Search Issue Security Schemes (Jira Cloud) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/issuesecurityschemes/search` | `conn_mod_def::GJ4qcBh9Qjs::6V3lO20fT7G_E0XLMx9QWg` |
| Add Issue Security Levels to an Issue Security Scheme | PUT | `/api/3/issuesecurityschemes/{{schemeId}}/level` | `conn_mod_def::GJ4qbmpTmLA::QhuOBleIRnal1RmJGi1BEA` |
| Associate an Issue Security Scheme to a Project (Async) | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/issuesecurityschemes/project` | `conn_mod_def::GJ4qbmQJrqo::xmyL4aFxRASpcf3uNXjz1g` |
| Create an Issue Security Scheme | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/issuesecurityschemes` | `conn_mod_def::GJ4qbl6tlbI::SZCoZEpFSW2m_Kc_cdmWOw` |
| Delete an Issue Security Scheme | DELETE | `/api/3/issuesecurityschemes/{{schemeId}}` | `conn_mod_def::GJ4qbnk-AaY::zZ6MRZYfRQ6SA-0aT8BKag` |
| Set Default Issue Security Levels for Schemes | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/issuesecurityschemes/level/default` | `conn_mod_def::GJ4qcHdfwQU::ttpYPwk1T_i8kYDIa-dQ4g` |
| Update an Issue Security Scheme | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/issuesecurityschemes/{{id}}` | `conn_mod_def::GJ4qb_1YArI::c-scKZY0TCipFCYzL_EJLw` |

### Plans

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Plan | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/plans/plan/{{planId}}` | `conn_mod_def::GJ4qhMI_kyA::1T1-KTDGRzOxgo0sMSAhXw` |
| Get Plans (Paginated) | GET | `/ex/jira/{{jiraCloudId}}/rest/api/3/plans/plan` | `conn_mod_def::GJ4qhW5e7Sc::0pBGgQ86QS6vCBpUspyYYw` |
| Add an Atlassian Team to a Plan | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/plans/plan/{{planId}}/team/atlassian` | `conn_mod_def::GJ4qpcUA6po::Rai_uVRvQ_yB47mlCQk5Fw` |
| Archive a Plan (Jira Cloud) | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/plans/plan/{{planId}}/archive` | `conn_mod_def::GJ4qhLvcVQk::5BYAxOXxSKSrmjNXM1q35w` |
| Create Plan (Advanced Roadmaps) | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/plans/plan` | `conn_mod_def::GJ4qhNKd1gI::Mnv05nuoQhy9VYCwCMPHnQ` |
| Duplicate a Plan (Jira Cloud) | POST | `/ex/jira/{{jiraCloudId}}/rest/api/3/plans/plan/{{planId}}/duplicate` | `conn_mod_def::GJ4qhNh5THg::UXRKr2UgTIqnEyFvZ9qM2w` |
| Remove an Atlassian Team from a Plan (Jira) | DELETE | `/ex/jira/{{jiraCloudId}}/rest/api/3/plans/plan/{{planId}}/team/atlassian/{{atlassianTeamId}}` | `conn_mod_def::GJ4qpoCAEKE::tF9RAB8rT9KbNxk2LJ_yzw` |
| Trash a Plan (Move Plan to Trash) | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/plans/plan/{{planId}}/trash` | `conn_mod_def::GJ4qhVDNDV8::HFKlG_p4Qf69GYF88c_MOQ` |
| Update a Plan (by Plan ID) | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/plans/plan/{{planId}}` | `conn_mod_def::GJ4qhWkTSvc::qrNtV_rVTgKXiwwWqxjFVw` |
| Update an Atlassian Team in a Plan | PUT | `/ex/jira/{{jiraCloudId}}/rest/api/3/plans/plan/{{planId}}/team/atlassian/{{atlassianTeamId}}` | `conn_mod_def::GJ4qpltmmo4::ew34r-EFSRG0h_hxHO6PhQ` |

This lists 90 of 784 actions. For anything not here, call `search_one_platform_actions` with platform `jira`. The full catalog is at https://www.withone.ai/knowledge/jira.

## When a call fails

The error comes from Jira, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/jira

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
