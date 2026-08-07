---
name: todoist
description: Todoist is a versatile, cross-platform task manager that uses natural-language input, priorities, due dates, subtasks, and real-time collaboration to help individuals and teams organize projects, stay productive, and track goals—complete with recurring tasks, integrations, and an AI assistant for smarter workflows. Read and write Todoist data through One: tasks, projects, labels, workspaces, sections, comments and more, 89 actions with real parameter documentation. Use whenever the user asks to look something up in Todoist, create or update a record there, or build code against the Todoist API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: todoist
  generated-from: one-knowledge-base
---

# Todoist through One

Todoist is a versatile, cross-platform task manager that uses natural-language input, priorities, due dates, subtasks, and real-time collaboration to help individuals and teams organize projects, stay productive, and track goals—complete with recurring tasks, integrations, and an AI assistant for smarter workflows.

One exposes Todoist through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `todoist` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Todoist is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Todoist account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task | GET | `/v1/tasks/{{taskId}}` | `conn_mod_def::GJ7PCgyRCGw::PnfdUsGfTyKwwggJ5RyaFw` |
| Get Tasks By Filter | GET | `/tasks/filter` | `conn_mod_def::GJ7PChfTDIs::iF4XVW62S6St7mPW05Ej0g` |
| List Completed Tasks by Completion Date | GET | `/api/v1/tasks/completed/by_completion_date` | `conn_mod_def::GJ7PCuJ8JsI::wtzP-UoPRgmsLS8fvYCwNg` |
| List Completed Tasks by Due Date | GET | `/v1/tasks/completed/by_due_date` | `conn_mod_def::GJ7PCrl2S0w::gD6vshiRRfSPCNqLeKjFOg` |
| List Tasks | GET | `/tasks` | `conn_mod_def::GJ7PCjHBvQk::JJygXfkgRJKdU_iB8NWWjg` |
| Close a Task | POST | `/v1/tasks/{{taskId}}/close` | `conn_mod_def::GJ7PCWLOwrg::5B-MtnloTy2_KbiB4ls5Yw` |
| Create Task | POST | `/tasks` | `conn_mod_def::GJ7PCaJjeT0::wJkE5Ps8R0m37gJEIlmDmw` |
| Delete a Task | DELETE | `/v1/tasks/{{taskId}}` | `conn_mod_def::GJ7PCin5aqw::1SSecYbSQAaj9XC0Fw-DCg` |
| Move a Task | POST | `/v1/tasks/{{taskId}}/move` | `conn_mod_def::GJ7PCgYQn_A::5TiPIKFuQna_idYxfNLVvg` |
| Quick Add a Task (Natural Language) | POST | `/api/v1/tasks/quick` | `conn_mod_def::GJ7PCpj4rX8::VkTPQ2h8SemFvQC6K0Cx_A` |
| Reopen a Task | POST | `/v1/tasks/{{taskId}}/reopen` | `conn_mod_def::GJ7PCpgVqW8::_W9i4o4zRJiYqRRgKE2fAQ` |
| Update a Task | POST | `/tasks/{{taskId}}` | `conn_mod_def::GJ7PCp3OTbs::qRygIdgcQsidUzEwBqBJZQ` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/projects/{{projectId}}` | `conn_mod_def::GJ7PB1VGtGA::RGIoviZOSZ-tKiq1w9_oKA` |
| List Archived Projects | GET | `/projects/archived` | `conn_mod_def::GJ7PB19E0pI::0pABdWOgQP2bA79Vj3Sf3A` |
| List Projects | GET | `/api/v1/projects` | `conn_mod_def::GJ7PB1FcN10::z83dOy8nQHmHHKVAc-DKVQ` |
| Search Projects | GET | `/projects/search` | `conn_mod_def::GJ7PB_bqS0A::FKwCu5RWSI238NqtHlJzDA` |
| Archive a Project | POST | `/v1/projects/{{projectId}}/archive` | `conn_mod_def::GJ7PBrj2m2w::P2yx2SNZQQGq8vwzCK0m7A` |
| Create Project | POST | `/api/v1/projects` | `conn_mod_def::GJ7PBuwlutU::NXtoZ8RiTgixSMnlkfQUeQ` |
| Delete a Project | DELETE | `/projects/{{projectId}}` | `conn_mod_def::GJ7PB4b4gKI::J0kHUV3cTduCB2vj9W7LdQ` |
| Join a Workspace Project | POST | `/v1/projects/{{projectId}}/join` | `conn_mod_def::GJ7PB-9WpiY::BJ7vDDPNTlu2SuzjPCMk5w` |
| Unarchive a Project | POST | `/projects/{{projectId}}/unarchive` | `conn_mod_def::GJ7PB-gROuI::meOjDHsVSOmowsEyk7tCHg` |
| Update a Project | POST | `/v1/projects/{{projectId}}` | `conn_mod_def::GJ7PB_NWXJo::uTIUEDLrReumuZnFrqcEKw` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Label | GET | `/v1/labels/{{labelId}}` | `conn_mod_def::GJ7PBhrhJPk::aM-UD5xXT52xuXi67uGH3g` |
| List Labels | GET | `/labels` | `conn_mod_def::GJ7PBiKpqpo::ZEC3oU5bTY2Ra8DYVbNgtQ` |
| List Shared Labels | GET | `/labels/shared` | `conn_mod_def::GJ7PBiM28wk::YD9SDgIXSVKUNebGdpWy3g` |
| Search Labels | GET | `/labels/search` | `conn_mod_def::GJ7PBisfRJk::Oo7AO2jvRZ2Yh72XOCHnqw` |
| Create a Label | POST | `/labels` | `conn_mod_def::GJ7PBYYSBiQ::xMhArB8EQSC1HLXUT4_0ig` |
| Delete a Label | DELETE | `/v1/labels/{{labelId}}` | `conn_mod_def::GJ7PBlJqU-U::oC4DR7AdTO6LH0Linrm3Ng` |
| Remove a Shared Label From All Active Tasks | POST | `/api/v1/labels/shared/remove` | `conn_mod_def::GJ7PBr_OkDs::rGa47NOzS3OEjvPNm3J6Kw` |
| Rename a Shared Label | POST | `/api/v1/labels/shared/rename` | `conn_mod_def::GJ7PBsNZtHU::RRBcjkykRoOAuQFU6N1NMw` |
| Update a Label | POST | `/v1/labels/{{labelId}}` | `conn_mod_def::GJ7PBrjAPoM::RnkbwoWkQOehZzWHGZE4hw` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace | GET | `/v1/workspaces/{{workspaceId}}` | `conn_mod_def::GJ7PDLAaLhg::hWpkQBDwSsy8kUlZEjgy5g` |
| Get a Workspace’s Plan Details | GET | `/workspaces/plan_details` | `conn_mod_def::GJ7PDVHtXNA::lfAE9bYhSCeRSONKjGXD0A` |
| List Workspaces | GET | `/workspaces` | `conn_mod_def::GJ7PDNpBeY4::vq8LF8d0QjyjCW7w1t4urQ` |
| Accept a Workspace Invitation | PUT | `/v1/workspaces/invitations/{{inviteCode}}/accept` | `conn_mod_def::GJ7PDCOM7qY::ED-j5qk6RB-UxIZmZ2jz5g` |
| Create Workspace | POST | `/workspaces` | `conn_mod_def::GJ7PDC1bjMA::-kNmJP1qTLCui4kdQ1blGA` |
| Delete a Workspace | DELETE | `/v1/workspaces/{{workspaceId}}` | `conn_mod_def::GJ7PDKXb0Go::FcDkUDyWQVaAMo1jXE6wZw` |
| Join a Workspace | POST | `/workspaces/join` | `conn_mod_def::GJ7PDVB2AM0::wdp47akCSuCRNAh-gNrsPw` |
| Update a Workspace | POST | `/v1/workspaces/{{workspaceId}}` | `conn_mod_def::GJ7PDb0Wbxw::Cu74dEtTS-yInmUVjGlirw` |
| Update a Workspace's Logo | POST | `/workspaces/logo` | `conn_mod_def::GJ7PDbpk7U0::AmURBpx8SiK3-YVYOb1nOA` |

### Sections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Section | GET | `/sections/{{sectionId}}` | `conn_mod_def::GJ7PCOU6Q4o::vhrGQoHXSzK95d1gf7DB0Q` |
| List Sections (User) | GET | `/sections` | `conn_mod_def::GJ7PCPGNdN4::xCzs5gLOSmu8yA-f4KTbmw` |
| Search Sections | GET | `/sections/search` | `conn_mod_def::GJ7PCWK92zU::A46chr1WSpmkq8Df2rVKSA` |
| Archive a Project Section | POST | `/v1/sections/{{sectionId}}/archive` | `conn_mod_def::GJ7PCOCjH3c::aHGIJJquQ16UZaPOsCvG-Q` |
| Create Section | POST | `/sections` | `conn_mod_def::GJ7PCOKvaqc::cS7lQLsoSF2GwhObQSW0jQ` |
| Delete a Section | DELETE | `/sections/{{sectionId}}` | `conn_mod_def::GJ7PCNv8vtM::XWcq6dtRTt6k8Clr0Npbmg` |
| Unarchive a Section | POST | `/v1/sections/{{sectionId}}/unarchive` | `conn_mod_def::GJ7PCVnwc-g::_lj8yHt1SgCr-8EU1iacFw` |
| Update a Section | POST | `/sections/{{sectionId}}` | `conn_mod_def::GJ7PCVosbPs::SWz4DwPoRQK8yu3LRfOg-g` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Comment by ID | GET | `/v1/comments/{{commentId}}` | `conn_mod_def::GJ7PBSOQjD0::kM4GeOtbRWWUzeJ8hHgeFg` |
| List Comments (for a Task or Project) | GET | `/v1/comments` | `conn_mod_def::GJ7PBSDaPeY::XbIwXwDeTEyJHAYCaLJuyw` |
| Create Comment on a Project or Task | POST | `/comments` | `conn_mod_def::GJ7PBQivLFs::szfJQnfYQ0q3XTaoViBgQw` |
| Delete a Comment | DELETE | `/v1/comments/{{commentId}}` | `conn_mod_def::GJ7PBQSvOCw::5tKoQmBmQbSUavdtM4KcmQ` |
| Update a Comment | POST | `/v1/comments/{{commentId}}` | `conn_mod_def::GJ7PBYjBQes::_Ajo6yFZSkCuu2ohQ7igLQ` |

### Reminders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Reminder by ID | GET | `/reminders/{{reminderId}}` | `conn_mod_def::GJ7PCGzlPOo::DEyAe36VSkeLqyJf2s0y1g` |
| Get Reminders | GET | `/api/v1/reminders` | `conn_mod_def::GJ7PCHYZow0::RNLuHvEfT4qiAsk7s5kybQ` |
| Create a Reminder for a Task | POST | `/api/v1/reminders` | `conn_mod_def::GJ7PCGhUgSQ::MW7y1SayQJCidETOrYSyNw` |
| Delete a Reminder | DELETE | `/v1/reminders/{{reminderId}}` | `conn_mod_def::GJ7PCIE7-p4::WbATHepZSaGfUg6H11PpXA` |
| Update a Reminder | POST | `/v1/reminders/{{reminderId}}` | `conn_mod_def::GJ7PCGhpDRo::i70GklyRRvWVa-5G-aIarQ` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Project Template as a File (CSV) | GET | `/templates/file` | `conn_mod_def::GJ7PC1FCjuk::mIRFzy_JRCm_Evfuojol5w` |
| Export a Project Template as a Shareable URL | GET | `/templates/url` | `conn_mod_def::GJ7PC1Slae4::mJI61dUwS5Knl8kdq0jdrA` |
| Create a Project From a Template File | POST | `/api/v1/templates/create_project_from_file` | `conn_mod_def::GJ7PC0rZXoE::IB7nE5XPRXesEbLgT2ktGw` |
| Import a Template into a Project (by Template ID) | POST | `/templates/import_into_project_from_template_id` | `conn_mod_def::GJ7PC06CnnQ::RZt0hgb2T4KJ0IwS4_1VFg` |
| Import a Template Into a Project From File | POST | `/templates/import_into_project_from_file` | `conn_mod_def::GJ7PC05rmSc::yorrl1VXQn2D4_9nk5fiFQ` |

### WorkspaceUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspace Users | GET | `/workspaces/users` | `conn_mod_def::GJ7PDLPtx04::x2qvfcRRQNG89oDMp8_LtQ` |
| Invite Users to a Workspace | POST | `/v1/workspaces/{{workspaceId}}/users/invite` | `conn_mod_def::GJ7PDUHPpY0::4GjJRi0KQb6w48t4Le-aBw` |
| Remove a Workspace User | DELETE | `/v1/workspaces/{{workspaceId}}/users/{{userId}}` | `conn_mod_def::GJ7PDbo8cp8::GK3fOr_qTlCxJtDhPc5Qfg` |
| Update a Workspace User | POST | `/v1/workspaces/{{workspaceId}}/users/{{userId}}` | `conn_mod_def::GJ7PDbzHUlA::TzWeSfYvSIu5f4kyF1aXsg` |

### WorkspaceInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Workspace Invitations | GET | `/v1/workspaces/invitations/all` | `conn_mod_def::GJ7PDB7Gx1Q::fwn6k9b7S_yd1pdbPWaQgA` |
| List Pending Workspace Invitations (Emails) | GET | `/workspaces/invitations` | `conn_mod_def::GJ7PDU0zTRQ::x8e83C3qSIe9YLlQMoHgrQ` |
| Delete a Workspace Invitation | POST | `/api/v1/workspaces/invitations/delete` | `conn_mod_def::GJ7PDMn-GgE::dl1bLhePThq2iNFKNfD6rg` |

### Uploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Upload | DELETE | `/uploads` | `conn_mod_def::GJ7PC7rEM4Y::gTFR_OUISISeELN8yzEoGg` |
| Upload a File | POST | `/uploads` | `conn_mod_def::GJ7PC76aO0k::lDzlWdsBRsuR4XLfOtfRgg` |

### WorkspaceProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace’s Active Projects | GET | `/v1/workspaces/{{workspaceId}}/projects/active` | `conn_mod_def::GJ7PDEKHCng::XVQhyTnfQbOyohPZwH7D7Q` |
| List a Workspace’s Archived Projects | GET | `/v1/workspaces/{{workspaceId}}/projects/archived` | `conn_mod_def::GJ7PDCpjRjQ::5kbQ9oaoQzW2Me-Eu9gHMg` |

### AccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Migrate a Personal Token to an OAuth Access Token | POST | `/api/v1/access_tokens/migrate_personal_token` | `conn_mod_def::GJ7PBEnJMKY::5Tyzks8gR2emLmalxGbZpw` |
| Revoke an OAuth Access Token | DELETE | `/api/v1/access_tokens` | `conn_mod_def::GJ7PBJvbAKw::x_2C3OLxRXOSkAlsCoX8tA` |

### Backups

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Backup | GET | `/backups/download` | `conn_mod_def::GJ7PBE2OjQI::Gwh12wCdTDWsgzE1RjmlVA` |
| Get Backups | GET | `/backups` | `conn_mod_def::GJ7PBP9HYms::sHUMiYAfSPCALDyMq_xpmw` |

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| Disable Email for a Todoist Object | DELETE | `/v1/emails` | `conn_mod_def::GJ7PBZ0Njug::-yaZEISgSTmPmGxwAgmUCQ` |
| Get or Create an Email for a Todoist Object | PUT | `/api/v1/emails` | `conn_mod_def::GJ7PBYiDCNM::EYE7byiESCS_l-lwJYNmtw` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Activity Logs | GET | `/activities` | `conn_mod_def::GJ7PBIEEUc8::xwNbJ_TtRjOX-i6CAowV2g` |

### IdMappings

| Action | Method | Path | Action id |
|---|---|---|---|
| Translate ID Mappings for an Object Type | GET | `/v1/id_mappings/{{objName}}/{{objIds}}` | `conn_mod_def::GJ7PBbZlFMI::DilsNp17SjS4s2wkn61YeQ` |

### ProjectCollaborators

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Collaborators | GET | `/v1/projects/{{projectId}}/collaborators` | `conn_mod_def::GJ7PB2FYC8A::3wHuaMEpStm3ZL0EFmvoVA` |

### ProductivityStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Productivity Stats | GET | `/api/v1/tasks/completed/stats` | `conn_mod_def::GJ7PC7w14zA::mfWyconxQOelQh6zxnakVg` |

### NotificationSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Notification Setting | PUT | `/notification_setting` | `conn_mod_def::GJ7PC71Df4w::oP44VHXpRH6yGmhmAsurRw` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User Info | GET | `/user` | `conn_mod_def::GJ7PC7ysy9o::6Nxg-n7dSKKXMJBvLYcQnQ` |

### WorkspacesInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Reject a Workspace Invitation | PUT | `/v1/workspaces/invitations/{{inviteCode}}/reject` | `conn_mod_def::GJ7PDUKm_v0::HBi_0gKbTxqVbc6DZeit-Q` |

### ProjectPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Project Permission Roles and Actions | GET | `/projects/permissions` | `conn_mod_def::GJ7PB-nseiQ::FgUm6oawTSqyAUWtD-hldQ` |

### OauthTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Revoke an OAuth Token (RFC 7009) | POST | `/api/v1/revoke` | `conn_mod_def::GJ7PBFWcCNU::4uLliqdJT8CTSlLs99ADvQ` |

## When a call fails

The error comes from Todoist, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/todoist

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
