---
name: github
description: GitHub is a code hosting and collaboration platform that enables developers to work together on projects, manage version control using Git, and deploy code with integrated CI/CD tools. Read and write GitHub data through One: repositories, issues, teams, codespaces, gists, attestations and more, 1093 actions with real parameter documentation. Use whenever the user asks to look something up in GitHub, create or update a record there, or build code against the GitHub API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: github
  generated-from: one-knowledge-base
---

# GitHub through One

GitHub is a code hosting and collaboration platform that enables developers to work together on projects, manage version control using Git, and deploy code with integrated CI/CD tools.

One exposes GitHub through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `github` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm GitHub is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real GitHub account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Repositories

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if Vulnerability Alerts Are Enabled for a Repository | GET | `/repos/{{owner}}/{{repo}}/vulnerability-alerts` | `conn_mod_def::GJ3Z2zdE7UA::zs9-IUViQOS_jTSOCTec9g` |
| Get a Repository | GET | `/repos/{{owner}}/{{repo}}` | `conn_mod_def::GJ3Z__SN0V0::ucGQ66izT_y_Xjjd2mqxtA` |
| List a User’s Repositories | GET | `/users/{{username}}/repos` | `conn_mod_def::GJ3aJf8_YDY::AT5O656ISq-Cu-oK_o6iwg` |
| List an Organization Team’s Repositories | GET | `/orgs/{{org}}/teams/{{teamSlug}}/repos` | `conn_mod_def::GJ3aW12kd0s::ClWylhJJQGqwyVBGHseVnA` |
| List an Organization’s Repositories | GET | `/orgs/{{org}}/repos` | `conn_mod_def::GJ3aImbME-4::YOGUy_fSTwG_O0tjcZvLPQ` |
| List Public Repositories | GET | `/repositories` | `conn_mod_def::GJ3aI7VUveU::c9xSM0j9SZKohYowBNP9tQ` |
| List Repositories for an Authenticated User Migration | GET | `/user/migrations/{{migrationId}}/repositories` | `conn_mod_def::GJ3ZXSkWPu8::9dhlyevyR7qzZZ8jwoBGAA` |
| List Repositories for the Authenticated User | GET | `/user/repos` | `conn_mod_def::GJ3aJv0FLn0::-lTycDc4TMG2EV3FIxpXVA` |
| Search Repositories | GET | `/search/repositories` | `conn_mod_def::GJ3aQlvgUK8::J8cbD6_UTzK4GCP9MEJFIw` |
| Create a Repository for the Authenticated User | POST | `/user/repos` | `conn_mod_def::GJ3Z4tE4G5A::lTHBrlzlSouqu-x8AHeT3Q` |
| Create a Repository Using a Template | POST | `/repos/{{templateOwner}}/{{templateRepo}}/generate` | `conn_mod_def::GJ3Z4-moP9Q::5l2pvnlPSZqndVlJwFVUTQ` |
| Create an Organization Repository | POST | `/orgs/{{org}}/repos` | `conn_mod_def::GJ3Z5epxmv8::TxvdRb8uQdqkblorOGCl0Q` |

8 more Repositories actions are available through search.

### Issues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Repository Issue | GET | `/repos/{{owner}}/{{repo}}/issues/{{issue_number}}` | `conn_mod_def::GJ3ZPdCHwHA::Q4jcBemHQrqbLH99sC0cPQ` |
| Get a Repository Issue’s Parent Issue | GET | `/repos/{{owner}}/{{repo}}/issues/{{issue_number}}/parent` | `conn_mod_def::GJ3ZP0XI0BE::r9_ZZ8ZNT7SJrkTZQLtXWA` |
| List a Repository’s Issues | GET | `/repos/{{owner}}/{{repo}}/issues` | `conn_mod_def::GJ3ZSGEEgYo::s9O90_JUTgGLK5TSNPlZxw` |
| List an Issue’s Sub-Issues | GET | `/repos/{{owner}}/{{repo}}/issues/{{issue_number}}/sub_issues` | `conn_mod_def::GJ3ZSOzCznc::1R73ort3RICOViG76M0ZOw` |
| List Dependencies an Issue Is Blocking | GET | `/repos/{{owner}}/{{repo}}/issues/{{issueNumber}}/dependencies/blocking` | `conn_mod_def::GJ3ZQN0mmSU::9b6dfUE0S9SNoAp_d_S2iA` |
| List Issues Assigned to the Authenticated User | GET | `/issues` | `conn_mod_def::GJ3ZRK0QX5o::6KJNkfJsTq-Xg6GbV2YeXQ` |
| List Issues for the Authenticated User | GET | `/user/issues` | `conn_mod_def::GJ3ZSjn5AFI::n22CC9-AS-OClqbfc9nQaw` |
| Add a Sub-Issue to an Issue | POST | `/repos/{{owner}}/{{repo}}/issues/{{issueNumber}}/sub_issues` | `conn_mod_def::GJ3ZN2f7jXQ::yAvab5w4RAqahErzOtbXjg` |
| Add Assignees to a Repository Issue | POST | `/repos/{{owner}}/{{repo}}/issues/{{issueNumber}}/assignees` | `conn_mod_def::GJ3ZNcQOZCE::sp4gI7LVS8K40RI9_8gfzA` |
| Create an Issue for a Repository | POST | `/repos/{{owner}}/{{repo}}/issues` | `conn_mod_def::GJ3ZOgmKVac::6mksPa9nTK-WqE9cw3w6sg` |
| Lock a Repository Issue or Pull Request Conversation | PUT | `/repos/{{owner}}/{{repo}}/issues/{{issueNumber}}/lock` | `conn_mod_def::GJ3ZSr1g-Rc::It-wmVulR2S2xotoru3CHg` |
| Remove a Dependency an Issue Is Blocked By (in a Repository) | DELETE | `/repos/{{owner}}/{{repo}}/issues/{{issueNumber}}/dependencies/blocked_by/{{issueId}}` | `conn_mod_def::GJ3ZTaACHbI::pFIUOJVKRteFNg06ZpIyVQ` |

6 more Issues actions are available through search.

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Team’s Permissions for a Repository (Legacy) | GET | `/teams/{{teamId}}/repos/{{owner}}/{{repo}}` | `conn_mod_def::GJ3aU36k8Ag::peANNuxdSxGAxoOIaF2gLw` |
| Get a Legacy Team by ID | GET | `/teams/{{teamId}}` | `conn_mod_def::GJ3aVWrLsbw::DCU3Us-DQlmGqwG4k8fWbw` |
| Get a Legacy Team Member | GET | `/teams/{{teamId}}/members/{{username}}` | `conn_mod_def::GJ3aVlKv4Mw::EEHCvTe3TCSi8ac0d0VnMA` |
| Get a Team by Name (Org + Team Slug) | GET | `/orgs/{{org}}/teams/{{teamSlug}}` | `conn_mod_def::GJ3aVdswEFQ::gbv0BXs_R3-WW4oyDbrP0Q` |
| List a Team’s Child Teams (Legacy) | GET | `/teams/{{teamId}}/teams` | `conn_mod_def::GJ3aWHo9VAI::iN_ispBST7uqrVyibcV0zQ` |
| List an Organization Team’s Child Teams | GET | `/orgs/{{org}}/teams/{{teamSlug}}/teams` | `conn_mod_def::GJ3aV_LSrhk::1p3rYQ9mRd-tv5q0Ab3wDg` |
| List an Organization’s Teams | GET | `/orgs/{{org}}/teams` | `conn_mod_def::GJ3aXGxO-q8::I74wmqvNTveBorEgUpL0_A` |
| List Teams for the Authenticated User | GET | `/user/teams` | `conn_mod_def::GJ3aXQqLOwA::vOwOMKCRSFq4LIE98z0a4w` |
| List Teams with Access to a Protected Branch (Repository) | GET | `/repos/{{owner}}/{{repo}}/branches/{{branch}}/protection/restrictions/teams` | `conn_mod_def::GJ3aElMO_Fw::Te9-vBNASo6m6csZI9kGrQ` |
| Add or Update a Team’s Repository Permissions in an Organization | PUT | `/orgs/{{org}}/teams/{{teamSlug}}/repos/{{owner}}/{{repo}}` | `conn_mod_def::GJ3aUW7UrHA::8T06pWRIRK-jnl4SeBaWRQ` |
| Create an Organization Team | POST | `/orgs/{{org}}/teams` | `conn_mod_def::GJ3aU_fPyJQ::AMtfc0jvRvi7wd64dxa8jA` |
| Delete a Team (Legacy) | DELETE | `/teams/{{teamId}}` | `conn_mod_def::GJ3aVN3gV1c::yLDLuOsuSZiIro9ZDum4fQ` |

5 more Teams actions are available through search.

### Codespaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Devcontainer Permission Acceptance for a Repository | GET | `/repos/{{owner}}/{{repo}}/codespaces/permissions_check` | `conn_mod_def::GJ3Y5eQo_jI::feeFOfuXR9-9VMKOZFrvLQ` |
| Get an Authenticated User's Codespace | GET | `/user/codespaces/{{codespaceName}}` | `conn_mod_def::GJ3Y7TGaU_Q::giSFi86lS9uHhK3TyAzkng` |
| Get Default Attributes for a New Codespace in a Repository | GET | `/repos/{{owner}}/{{repo}}/codespaces/new` | `conn_mod_def::GJ3Y8CF96fw::R3RpdRXvRe2VOin-IvOymg` |
| List a User's Codespaces in an Organization | GET | `/orgs/{{org}}/members/{{username}}/codespaces` | `conn_mod_def::GJ3Y8jGlf7A::sxSR3fsPRYGT-2malzz5FQ` |
| List an Organization’s Codespaces | GET | `/orgs/{{org}}/codespaces` | `conn_mod_def::GJ3Y80U7fyY::l_wQIUN7R5mMAV29WhO1hQ` |
| List Codespaces in a Repository for the Authenticated User | GET | `/repos/{{owner}}/{{repo}}/codespaces` | `conn_mod_def::GJ3Y89m8a-E::_D0vlj8GTeuMiYPeRx-gkA` |
| List the Authenticated User’s Codespaces | GET | `/user/codespaces` | `conn_mod_def::GJ3Y8r8-Tyg::7DY0bi9BTkGu90OeE5yAjw` |
| Create a Codespace for a Pull Request (Authenticated User) | POST | `/repos/{{owner}}/{{repo}}/pulls/{{pullNumber}}/codespaces` | `conn_mod_def::GJ3Y5xDxlQQ::ZHiWi98rQF-S9VWHDaZYJQ` |
| Create a Codespace for the Authenticated User | POST | `/user/codespaces` | `conn_mod_def::GJ3Y5lolKEA::iDP7BBk3TOe1Mi7UnKye1g` |
| Create a Repository Codespace (Authenticated User) | POST | `/repos/{{owner}}/{{repo}}/codespaces` | `conn_mod_def::GJ3Y57YgEcY::MTN4KULyT4CTKup6FrI_FA` |
| Delete an Organization Member's Codespace | DELETE | `/orgs/{{org}}/members/{{username}}/codespaces/{{codespaceName}}` | `conn_mod_def::GJ3Y6rFKAJ8::PVIKIwoOQ0yUY9I5sv0OPg` |
| Delete the Authenticated User’s Codespace | DELETE | `/user/codespaces/{{codespaceName}}` | `conn_mod_def::GJ3Y6jgYbI4::Dg6Kc1IYQZKNcwqUK5ftFg` |

5 more Codespaces actions are available through search.

### Gists

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if a Gist is Starred | GET | `/gists/{{gistId}}/star` | `conn_mod_def::GJ3ZHGrmsPM::kTTDKxh8S8uO1h5NCn4phQ` |
| Get a Gist | GET | `/gists/{{gistId}}` | `conn_mod_def::GJ3ZHzEfRbI::Qnt9OGxRT069zN2-dva0xw` |
| Get a Gist Revision | GET | `/gists/{{gistId}}/{{sha}}` | `conn_mod_def::GJ3ZICDZqHs::ELENMAc2RAqa8Mg3xdXL9g` |
| List a User’s Gists | GET | `/users/{{username}}/gists` | `conn_mod_def::GJ3ZImTmPCo::niKw0zzmR_Odd49__qyZkQ` |
| List Public Gists | GET | `/gists/public` | `conn_mod_def::GJ3ZI1OXeGM::G-YUfoBnSIiUt2TjV819xQ` |
| List the Authenticated User’s Gists | GET | `/gists` | `conn_mod_def::GJ3ZIt6fyiE::Bw3uM-gYRAu8EzrS6WLngQ` |
| List the Authenticated User’s Starred Gists | GET | `/gists/starred` | `conn_mod_def::GJ3ZI9YQ2ww::n3Mvyo3vTsSEc8-XAbUewA` |
| Create a Gist | POST | `/gists` | `conn_mod_def::GJ3ZHOF9UwA::kVcwmUEwTvW6ELWRkw51tA` |
| Delete a Gist | DELETE | `/gists/{{gistId}}` | `conn_mod_def::GJ3ZHcApGV4::trJ7IyykRkejX_d3cgi7ZA` |
| Fork a Gist | POST | `/gists/{{gistId}}/forks` | `conn_mod_def::GJ3ZHrjaGrM::2UOLALlpR0uF_up9xopNLA` |
| Star a Gist | PUT | `/gists/{{gistId}}/star` | `conn_mod_def::GJ3ZJGB8PT0::kWkVc7ngQeeTQkWO_NKuJw` |
| Unstar a Gist | DELETE | `/gists/{{gistId}}/star` | `conn_mod_def::GJ3ZJMw4gbI::rQfsk7oZRq-3IhYwJ80aRQ` |

1 more Gists actions are available through search.

### Attestations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Repository’s Attestations by Subject Digest | GET | `/repos/{{owner}}/{{repo}}/attestations/{{subjectDigest}}` | `conn_mod_def::GJ3aGHlZnD8::SzKByoU4Rkyn9poWJ6qn_g` |
| List a User’s Attestations for a Subject Digest | GET | `/users/{{username}}/attestations/{{subjectDigest}}` | `conn_mod_def::GJ3abgkS9sw::sk9uBpwnSs-wH8pWARN2Hg` |
| List an Organization's Attestations by Subject Digest | GET | `/orgs/{{org}}/attestations/{{subjectDigest}}` | `conn_mod_def::GJ3Zg22K_0k::2wW-hxPlTF-uoHkKYnt9bw` |
| Create a Repository Attestation | POST | `/repos/{{owner}}/{{repo}}/attestations` | `conn_mod_def::GJ3Z5PVS8sg::uUzhekANSr-0VrB-HasP1w` |
| Delete a User's Attestation by ID | DELETE | `/users/{{username}}/attestations/{{attestationId}}` | `conn_mod_def::GJ3aZ7owNSw::HNuV1fRYShaK7yvwUjNfgA` |
| Delete a User's Attestations by Subject Digest | DELETE | `/users/{{username}}/attestations/digest/{{subjectDigest}}` | `conn_mod_def::GJ3aaDs0OfA::CVuvD0R4SuakQreQgMalWQ` |
| Delete a User’s Attestations in Bulk | POST | `/users/{{username}}/attestations/delete-request` | `conn_mod_def::GJ3aaOFtqyY::UKYcpeHzQWmy-imMyfzeyQ` |
| Delete an Organization’s Attestation by ID | DELETE | `/orgs/{{org}}/attestations/{{attestationId}}` | `conn_mod_def::GJ3ZcJMo-50::9_fWWsQORHWfrvdeIwIqnQ` |
| Delete an Organization's Attestations by Subject Digest | DELETE | `/orgs/{{org}}/attestations/digest/{{subjectDigest}}` | `conn_mod_def::GJ3ZcQ-Zwuk::IwoD1N4nQu6L5Jng6yYr5g` |
| Delete an Organization’s Attestations in Bulk (Delete Request) | POST | `/orgs/{{org}}/attestations/delete-request` | `conn_mod_def::GJ3ZcaJAldw::zfk9qXHKSjKATohRnmEbog` |
| List a User’s Attestations by Bulk Subject Digests | POST | `/users/{{username}}/attestations/bulk-list` | `conn_mod_def::GJ3abqH2OoY::cHd3F6ElSrmhfxuQQ_kuKg` |
| List an Organization’s Attestations by Bulk Subject Digests | POST | `/orgs/{{org}}/attestations/bulk-list` | `conn_mod_def::GJ3ZhBqUedM::Iq9-39RDRk2vy-tFc3m2_w` |

### CodespacesSecrets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Repository Codespaces Secret | GET | `/repos/{{owner}}/{{repo}}/codespaces/secrets/{{secretName}}` | `conn_mod_def::GJ3Y7hONICM::x0BVqDZOQS6Zxxz-2qQ9vQ` |
| Get an Authenticated User's Codespaces Secret | GET | `/user/codespaces/secrets/{{secretName}}` | `conn_mod_def::GJ3Y7ozO-_o::Ww0HgGO0RCmZGYQGS4mVbA` |
| List a Repository's Codespaces Secrets | GET | `/repos/{{owner}}/{{repo}}/codespaces/secrets` | `conn_mod_def::GJ3Y9d6FHyk::zhyQPnSQRQu1TQixpDODFg` |
| List an Organization’s Codespaces Secrets | GET | `/orgs/{{org}}/codespaces/secrets` | `conn_mod_def::GJ3Y9Ua9zMI::P8SwKQhTRXCILZHK8SBxkg` |
| List Codespaces Secrets for the Authenticated User | GET | `/user/codespaces/secrets` | `conn_mod_def::GJ3Y9lsJh1Y::Vu3MaJQLSTeg73L14Ljlrg` |
| Add a Selected Repository to an Authenticated User Codespaces Secret | PUT | `/user/codespaces/secrets/{{secretName}}/repositories/{{repositoryId}}` | `conn_mod_def::GJ3Y5Gv092w::BjY_vSl3RXqvxuGyy_TwIg` |
| Create or Update a Codespaces Secret for the Authenticated User | PUT | `/user/codespaces/secrets/{{secretName}}` | `conn_mod_def::GJ3Y6UBeTb0::CSawkGY9SYm-8H0TzcRWIw` |
| Create or Update a Repository Codespaces Secret | PUT | `/repos/{{owner}}/{{repo}}/codespaces/secrets/{{secretName}}` | `conn_mod_def::GJ3Y6L6yme4::gfrafSROTWSesUwE-UseWA` |
| Delete a Repository Codespaces Secret | DELETE | `/repos/{{owner}}/{{repo}}/codespaces/secrets/{{secret_name}}` | `conn_mod_def::GJ3Y6yKgp8Q::sFvw4r83QT2_EQTsbDgrgA` |
| Delete an Authenticated User's Codespaces Secret | DELETE | `/user/codespaces/secrets/{{secretName}}` | `conn_mod_def::GJ3Y65xaFJQ::OwpPMqM1TwC7o_okkEK_nA` |
| Remove a Repository from an Authenticated User's Codespaces Secret | DELETE | `/user/codespaces/secrets/{{secretName}}/repositories/{{repositoryId}}` | `conn_mod_def::GJ3Y-KBudnE::0F2JoVl5RMKlBJ_pHX-NGQ` |
| Remove a Selected Repository from an Organization Codespaces Secret | DELETE | `/orgs/{{org}}/codespaces/secrets/{{secret_name}}/repositories/{{repository_id}}` | `conn_mod_def::GJ3Y-SovIRU::x6nO6abvSeGfqXd_HwWYwQ` |

### CodeSecurityConfigurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization’s Code Security Configuration | GET | `/orgs/{{org}}/code-security/configurations/{{configurationId}}` | `conn_mod_def::GJ3Y3H3OG8w::DAJAt5xmRzKUkhYRNdRmBA` |
| Get an Organization’s Default Code Security Configurations | GET | `/orgs/{{org}}/code-security/configurations/defaults` | `conn_mod_def::GJ3Y3g5hXBk::ltgd9uq0QHOu2pxbB1rqlA` |
| List an Enterprise’s Code Security Configurations | GET | `/enterprises/{{enterprise}}/code-security/configurations` | `conn_mod_def::GJ3Y3QNGfzw::3CQq3B7CSVajAbaYIFnV6Q` |
| List an Organization's Code Security Configurations | GET | `/orgs/{{org}}/code-security/configurations` | `conn_mod_def::GJ3Y3ZfdKg8::_qx-1hsMQdqzna2v2NfeRg` |
| Attach a Code Security Configuration to an Organization’s Repositories | POST | `/orgs/{{org}}/code-security/configurations/{{configurationId}}/attach` | `conn_mod_def::GJ3Y2RfqJaY::yUKAouQqRkytx2WCpqDgjQ` |
| Create an Enterprise Code Security Configuration | POST | `/enterprises/{{enterprise}}/code-security/configurations` | `conn_mod_def::GJ3Y2qcyudg::gNRrreEyTxOwgikl4PbdTQ` |

5 more CodeSecurityConfigurations actions are available through search.

This lists 90 of 1093 actions. For anything not here, call `search_one_platform_actions` with platform `github`. The full catalog is at https://www.withone.ai/knowledge/github.

## When a call fails

The error comes from GitHub, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/github

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
