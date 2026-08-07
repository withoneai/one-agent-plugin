---
name: zeplin
description: Zeplin is a design delivery and collaboration platform that bridges designers and developers by turning finalized designs into structured specifications, assets, and code snippets, enabling teams to streamline design handoff, maintain design systems, and ensure accurate implementation across products. Read and write Zeplin data through One: projects, styleguides, projectwebhooks, userwebhooks, styleguidecomponents, organizations and more, 123 actions with real parameter documentation. Use whenever the user asks to look something up in Zeplin, create or update a record there, or build code against the Zeplin API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: zeplin
  generated-from: one-knowledge-base
---

# Zeplin through One

Zeplin is a design delivery and collaboration platform that bridges designers and developers by turning finalized designs into structured specifications, assets, and code snippets, enabling teams to streamline design handoff, maintain design systems, and ensure accurate implementation across products.

One exposes Zeplin through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `zeplin` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Zeplin is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Zeplin account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Member's Projects in an Organization | GET | `/organizations/{{organizationId}}/members/{{memberId}}/projects` | `conn_mod_def::GKrMn7AWm6A::a4KKVAe-TeiAnIhvOsKKIA` |
| Get a Single Project | GET | `/v1/projects/{{projectId}}` | `conn_mod_def::GKrMoWPv_Dg::Lm7swGoXRqqSPF9N_MaUwA` |
| Get Personal Projects | GET | `/v1/users/me/projects` | `conn_mod_def::GKrMp5XYVzA::GKr_TWapQsmE92-4EDf2gw` |
| List an Organization's Projects | GET | `/v1/organizations/{{organizationId}}/projects` | `conn_mod_def::GKrMoLtrVGg::hZx0Z5JIS7uGWt7f0QWnIA` |
| List Projects | GET | `/v1/projects` | `conn_mod_def::GKrMoWRcmOg::ndLRhsEFSmuiPUY6dBXAdw` |
| Remove a Project Member | DELETE | `/projects/{{projectId}}/members/{{memberId}}` | `conn_mod_def::GKrMogPtsBg::X5n8zwrFTMOmrY3N-fxDLQ` |
| Update a Project | PATCH | `/v1/projects/{{projectId}}` | `conn_mod_def::GKrMofthq0g::apKk57rWSs6vMzOAFWk7UQ` |

### Styleguides

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Styleguide | GET | `/v1/styleguides/{{styleguideId}}` | `conn_mod_def::GKrMpkySgIg::BmXeRFBXR4uVmetOdTEs9A` |
| Get an Organization Member's Styleguides | GET | `/organizations/{{organizationId}}/members/{{memberId}}/styleguides` | `conn_mod_def::GKrMoCK5Ftg::jRiyPQJLSkqas_Gezlz5CA` |
| Get Personal Styleguides | GET | `/users/me/styleguides` | `conn_mod_def::GKrMqFO8_wg::ugKPwAr1TrK0venAq9ELBQ` |
| List an Organization's Styleguides | GET | `/v1/organizations/{{organizationId}}/styleguides` | `conn_mod_def::GKrMoMQjIEA::bOyCpyfARGWNuH17nRpQnw` |
| List Member Styleguides | GET | `/styleguides` | `conn_mod_def::GKrMpkvLNQA::3ee2s2eqRnmxbT5r6EisjA` |
| Update a Styleguide | PATCH | `/v1/styleguides/{{styleguideId}}` | `conn_mod_def::GKrMpvJD6-g::qLJ1EOUoTdGhg7y5Zwk_uQ` |
| Update a Styleguide's Text Style | PATCH | `/v1/styleguides/{{styleguideId}}/text_styles/{{textStyleId}}` | `conn_mod_def::GKrMp50byrg::AsbjfGglT4Kc-VnZPOTmqg` |

### ProjectWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Webhook by ID | GET | `/v1/projects/{{projectId}}/webhooks/{{webhookId}}` | `conn_mod_def::GKrMqeX-oHg::5six0_QhTDipnI9Dn1QDIg` |
| List a Project's Webhooks | GET | `/v1/projects/{{projectId}}/webhooks` | `conn_mod_def::GKrMqo0KJWg::D4o22jV7ShWePgx4kvLhwQ` |
| Create a Project's Webhooks | POST | `/v1/projects/{{projectId}}/webhooks` | `conn_mod_def::GKrMqF1SztA::YzmaCBHWSKed0GKHe2ZDDQ` |
| Delete a Project Webhook | DELETE | `/v1/projects/{{projectId}}/webhooks/{{webhookId}}` | `conn_mod_def::GKrMqPUr8kA::37UuQb_vRQWUbiLbOYyXLQ` |
| Update a Project Webhook | PATCH | `/projects/{{projectId}}/webhooks/{{webhookId}}` | `conn_mod_def::GKrMqyB_Owg::e2wOZGgzROyUI8pSKrGCgw` |

### UserWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Webhook by ID | GET | `/users/me/webhooks/{{webhookId}}` | `conn_mod_def::GKrMqbvUg4A::yh0zAkpATja4aAf6c760Gg` |
| Get User Webhooks | GET | `/users/me/webhooks` | `conn_mod_def::GKrMqpYR3jA::OUsne0dTTo6urd7oYFFCGQ` |
| Create User Webhooks | POST | `/v1/users/me/webhooks` | `conn_mod_def::GKrMqPE38Ag::-Tvj_9kyRBygasEyPWoOKg` |
| Delete a User Webhook | DELETE | `/users/me/webhooks/{{webhookId}}` | `conn_mod_def::GKrMqQ9ir3g::T-9uyUDfTCOMlNAMTRj4EA` |
| Update a User Webhook | PATCH | `/v1/users/me/webhooks/{{webhookId}}` | `conn_mod_def::GKrMq12xagA::81VmjRLrRDGcPMh0i9QniQ` |

### StyleguideComponents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Styleguide Component | GET | `/v1/styleguides/{{styleguideId}}/components/{{componentId}}` | `conn_mod_def::GKrMms69NBA::Ga1kw4y5TDeoGlIojGXI3w` |
| Get a Styleguide Component's Latest Version | GET | `/styleguides/{{styleguideId}}/components/{{componentId}}/versions/latest` | `conn_mod_def::GKrMm3BPjcg::kcg0VVsgTbmnbJ6me135Pw` |
| Get a Styleguide's Components | GET | `/v1/styleguides/{{styleguideId}}/components` | `conn_mod_def::GKrMnG0LmLg::h78vmbYBSYeoxZ08Gn9tnQ` |
| Update a Styleguide Component | PATCH | `/v1/styleguides/{{styleguideId}}/components/{{componentId}}` | `conn_mod_def::GKrMnILu9ag::fasova_qS2iWlhcZ-ceaJg` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Organization | GET | `/v1/organizations/{{organizationId}}` | `conn_mod_def::GKrMn6sY9YA::krq281bsTw-Xhi-U54DcUw` |
| Get an Organization's Billing Details | GET | `/v1/organizations/{{organizationId}}/billing` | `conn_mod_def::GKrMn6jDm6A::-I4hUQ12QyymSNrVtkVuoQ` |
| List Organizations | GET | `/organizations` | `conn_mod_def::GKrMoLyUbwA::1g1bXnxyQDWzzIwW1MlWiw` |
| Remove an Organization Member | DELETE | `/v1/organizations/{{organizationId}}/members/{{memberId}}` | `conn_mod_def::GKrMoVlhUWg::isNDUzubTOS3BKDM0p2gHA` |

### Screens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Screen | GET | `/v1/projects/{{projectId}}/screens/{{screenId}}` | `conn_mod_def::GKrMoyzSCWA::rup_HEgFRYCBbrU8-Ahkkg` |
| List a Project's Screens | GET | `/v1/projects/{{projectId}}/screens` | `conn_mod_def::GKrMo7wgGjA::J6gzmJwtQ3SfMiR9UCt5Kw` |
| Create a New Screen in a Project | POST | `/v1/projects/{{projectId}}/screens` | `conn_mod_def::GKrMopdyVhg::Ea50uEpIR0-i6E0qyFfYNw` |
| Delete a Screen Note in a Project | DELETE | `/v1/projects/{{projectId}}/screens/{{screenId}}/notes/{{noteId}}` | `conn_mod_def::GKrMop3cTdg::3Ko-x20URsKA3BRzccvdMg` |

### ScreenAnnotations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Project Screen Annotation | GET | `/projects/{{projectId}}/screens/{{screenId}}/annotations/{{annotationId}}` | `conn_mod_def::GKrMozOxmpg::9tXgRMuFQ82J8CbwSRuv_g` |
| List a Project Screen's Annotations | GET | `/v1/projects/{{projectId}}/screens/{{screenId}}/annotations` | `conn_mod_def::GKrMpElhGQg::nHh--178RLaz-zNzIcXC1Q` |
| Delete a Screen Annotation | DELETE | `/v1/projects/{{projectId}}/screens/{{screenId}}/annotations/{{annotationId}}` | `conn_mod_def::GKrMoysXrzA::y-beon-YSR-fmMaFP5228w` |
| Update a Screen Annotation | PATCH | `/projects/{{projectId}}/screens/{{screenId}}/annotations/{{annotationId}}` | `conn_mod_def::GKrMpPKGcZA::dTo_fpHRQJmA34l2WCtqFg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Webhooks | GET | `/organizations/{{organizationId}}/webhooks` | `conn_mod_def::GKrMqoW42ug::RJk9H_uUQNiSWdvcfUeiWg` |
| Create an Organization's Webhooks | POST | `/organizations/{{organizationId}}/webhooks` | `conn_mod_def::GKrMqFGE9RA::P3YQWqATTQishwnHQ5Xmxw` |
| Delete a Styleguide Webhook | DELETE | `/v1/styleguides/{{styleguideId}}/webhooks/{{webhookId}}` | `conn_mod_def::GKrMqT9YB3g::OCkryfLBRku7wQNbDyaz3w` |
| Delete an Organization Webhook | DELETE | `/v1/organizations/{{organizationId}}/webhooks/{{webhookId}}` | `conn_mod_def::GKrMqbVu8MA::KICi_obPSx2GFMh8nwoC5g` |

### StyleguideWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Styleguide Webhook by ID | GET | `/v1/styleguides/{{styleguideId}}/webhooks/{{webhookId}}` | `conn_mod_def::GKrMqb4KGJA::fptOn14MQwu1tyaPN4EXug` |
| List a Styleguide's Webhooks | GET | `/v1/styleguides/{{styleguideId}}/webhooks` | `conn_mod_def::GKrMqoHBbbA::fcgMsIwYQ1uUrVO-RGQicg` |
| Create a Styleguide's Webhooks | POST | `/v1/styleguides/{{styleguideId}}/webhooks` | `conn_mod_def::GKrMqPXFV8g::_ojEYlplT3iMe60_S1E5YQ` |
| Update a Styleguide Webhook | PATCH | `/v1/styleguides/{{styleguideId}}/webhooks/{{webhookId}}` | `conn_mod_def::GKrMqyr3XFA::Y9baUuXtQ36Ku8l4XyEN4Q` |

### ProjectColors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Colors | GET | `/v1/projects/{{projectId}}/colors` | `conn_mod_def::GKrMmhNRa9g::Cb1hCeooQa6WlQecCAlfRQ` |
| Create a Project Color | POST | `/v1/projects/{{projectId}}/colors` | `conn_mod_def::GKrMmg8Yv4A::clN2Mf5wRl27XqEVnQq8Gw` |
| Update a Project Color | PATCH | `/v1/projects/{{projectId}}/colors{{colorId}}` | `conn_mod_def::GKrMmsNe-Ig::-1D406rUTz665BnM11HA_g` |

### StyleguideColors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Styleguide's Colors | GET | `/styleguides/{{styleguideId}}/colors` | `conn_mod_def::GKrMmseDC3A::73ZcJanKQVmOiR0CSOforw` |
| Create a Styleguide Color | POST | `/v1/styleguides/{{styleguideId}}/colors` | `conn_mod_def::GKrMmhCQY5A::0juuBaplTQCIhFH0Pve7GQ` |
| Update a Styleguide Color | PATCH | `/styleguides/{{styleguideId}}/colors/{{colorId}}` | `conn_mod_def::GKrMmrgZxyg::dR7Ap4NASpW8JSd_p-2XAQ` |

### Components

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Component's Latest Version | GET | `/v1/projects/{{projectId}}/components/{{componentId}}/versions/latest` | `conn_mod_def::GKrMm1DyWTg::l6w7bG4lTeWpqJFWzSz1Fw` |
| List a Project Screen's Components | GET | `/v1/projects/{{projectId}}/screens/{{screenId}}/components` | `conn_mod_def::GKrMpFxC1og::gZ63FBjtTtiiX5KP44i6Cg` |
| List a Project's Components | GET | `/v1/projects/{{projectId}}/components` | `conn_mod_def::GKrMm3pa35g::rad1HCgcQvKbj_YvMKUoYg` |

### UserNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Notification by ID | GET | `/v1/users/me/notifications/{{notificationId}}` | `conn_mod_def::GKrMnv1m3TA::QUFms-KySSu4jqQKsshZog` |
| Bulk Update User Notifications | PATCH | `/v1/users/me/notifications` | `conn_mod_def::GKrMnxwy6Zg::VNM5Hv2URNOPB8lzLDA8rA` |
| Update a User Notification | PATCH | `/v1/users/me/notifications/{{notificationId}}` | `conn_mod_def::GKrMnw5Bg_g::48u_4Sc0RSCWb1qM9Et5xg` |

### OrganizationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Members | GET | `/v1/organizations/{{organizationId}}/members` | `conn_mod_def::GKrMoNPxGcg::AQsBqe79RXWw25dpcP16zg` |
| Invite an Organization Member | POST | `/v1/organizations/{{organizationId}}/members` | `conn_mod_def::GKrMoYTL3aA::lGVEBUZiQRKHObVH3g87dA` |
| Update an Organization Member | PATCH | `/v1/organizations/{{organizationId}}/members/{{memberId}}` | `conn_mod_def::GKrMoVxu-uA::H3Y5WoFPRc-QwpVqDogcWg` |

### ScreenNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project Screen's Notes | GET | `/v1/projects/{{projectId}}/screens/{{screenId}}/notes` | `conn_mod_def::GKrMpEskYGA::V768_WiZRXC0m1BzmvOoQg` |
| Create a Screen's Note in a Project | POST | `/v1/projects/{{projectId}}/screens/{{screenId}}/notes` | `conn_mod_def::GKrMorNH5qA::7iuf84QPRDC2xysnCGGVHQ` |
| Update a Screen Note | PATCH | `/v1/projects/{{projectId}}/screens/{{screenId}}/notes/{{noteId}}` | `conn_mod_def::GKrMpPKMp2g::hgPR7us0S46lGWauYZJRRg` |

### SpacingTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Spacing Tokens | GET | `/v1/projects/{{projectId}}/spacing_tokens` | `conn_mod_def::GKrMpZFlKLA::Edojyp-rQG6pH3JiDBaQUw` |
| Get a Styleguide's Spacing Tokens | GET | `/v1/styleguides/{{styleguideId}}/spacing_tokens` | `conn_mod_def::GKrMpa824xA::_jaPi2fmQnSP-0zoQJJkaw` |
| Update a Project's Spacing Token | PATCH | `/v1/projects/{{projectId}}/spacing_tokens/{{spacingTokenId}}` | `conn_mod_def::GKrMpklLHbg::GP_QcDJ2TfeCwgYjnXrdcg` |

### StyleguideMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Styleguide's Members | GET | `/v1/styleguides/{{styleguideId}}/members` | `conn_mod_def::GKrMpu4Ojzg::EdPTPIMsQHmt70VbS45D7A` |
| Invite a Member to a Styleguide | POST | `/styleguides/{{styleguideId}}/members` | `conn_mod_def::GKrMpuSeuhg::gcTejW0bTbuycfOUvT83DQ` |
| Remove a Styleguide Member | DELETE | `/v1/styleguides/{{styleguideId}}/members/{{memberId}}` | `conn_mod_def::GKrMptXvIRA::CAPLyAZ-RLSD20EU8Xnb9w` |

### ProjectComponents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Project Component | GET | `/projects/{{projectId}}/components/{{componentId}}` | `conn_mod_def::GKrMmsWWXnA::WuTHaYfPQF-mheA3iqKdag` |
| Update a Project Component | PATCH | `/v1/projects/{{projectId}}/components/{{componentId}}` | `conn_mod_def::GKrMnDN2yEg::uaPLcJ_VRYyaouZBBJ2-QA` |

### ComponentSections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Styleguide's Component Sections | GET | `/styleguides/{{styleguideId}}/component_sections` | `conn_mod_def::GKrMnFI6Nag::OmLquobGQc6RbMY2OKr5Dw` |
| List a Project's Component Sections | GET | `/v1/projects/{{projectId}}/component_sections` | `conn_mod_def::GKrMm7I8K9g::TIIGXux1TYyfX6g9VqMK5A` |

### ConnectedComponents

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Connected Components | GET | `/v1/projects/{{projectId}}/connected_components` | `conn_mod_def::GKrMnQ1iA4g::TeKrfEBJRC-kXaIomFUp0A` |
| List a Styleguide's Connected Components | GET | `/v1/styleguides/{{styleguideId}}/connected_components` | `conn_mod_def::GKrMncyDhKg::wmokwTH2SsCVEs0ABo4Eig` |

### FlowBoards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Flow Board | GET | `/projects/{{projectId}}/flow_boards/{{flowBoardId}}` | `conn_mod_def::GKrMnQ1w96g::pDR9VsSITICxv522XLU1fA` |
| List a Project's Flow Boards | GET | `/v1/projects/{{projectId}}/flow_boards` | `conn_mod_def::GKrMnwptWhg::XRqdQCo7T8SXPWbH95ocOw` |

### DesignTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Design Tokens | GET | `/v1/projects/{{projectId}}/design_tokens` | `conn_mod_def::GKrMnShpqTg::RlngVuErS2CXM7hOUvHE1w` |
| Get a Styleguide's Design Tokens | GET | `/v1/styleguides/{{styleguideId}}/design_tokens` | `conn_mod_def::GKrMnXd7jwA::cIXJizAjTeeiTyVpcwyRAQ` |

### ProjectMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Members | GET | `/v1/projects/{{projectId}}/members` | `conn_mod_def::GKrMogCjQ_A::nkICx2itTXuYC4u2fJBV5A` |
| Invite a Member to a Project | POST | `/v1/projects/{{projectId}}/members` | `conn_mod_def::GKrMof82D8A::YjrkUoXbSQqTpaX-yDFpng` |

### ScreenVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Screen Version | GET | `/projects/{{projectId}}/screens/{{screenId}}/versions/{{versionId}}` | `conn_mod_def::GKrMo7EZswg::PywhHav0TEK7um4KWHRitg` |
| Create a New Screen Version in a Project Screen | POST | `/v1/projects/{{projectId}}/screens/{{screenId}}/versions` | `conn_mod_def::GKrMoplDKjA::xw7HFU67S_2oUqjx0sIE1Q` |

### ScreenNoteComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Screen Note Comment | DELETE | `/v1/projects/{{projectId}}/screens/{{screenId}}/notes/{{noteId}}/comments/{{commentId}}` | `conn_mod_def::GKrMoyyP48g::TOtV26LdTo-iSisWxbXYaA` |
| Update a Screen Note Comment | PATCH | `/v1/projects/{{projectId}}/screens/{{screenId}}/notes/{{noteId}}/comments/{{commentId}}` | `conn_mod_def::GKrMpZiRyHg::fgU7UESQQrmc7rFkpR8WGQ` |

### ScreenVariants

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Project Screen Variant | GET | `/v1/projects/{{projectId}}/screen_variants/{{variantId}}` | `conn_mod_def::GKrMo6qHcsg::eBQKWLcuTJupqqqgm-CsYg` |
| List a Project's Screen Variants | GET | `/v1/projects/{{projectId}}/screen_variants` | `conn_mod_def::GKrMpEl3zYg::Zu5HR4xSRLG8PlCnhgrxBQ` |

This lists 90 of 123 actions. For anything not here, call `search_one_platform_actions` with platform `zeplin`. The full catalog is at https://www.withone.ai/knowledge/zeplin.

## When a call fails

The error comes from Zeplin, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/zeplin

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
