---
name: gitea
description: Gitea is a lightweight, self-hosted Git service that provides source code hosting, repository management, pull requests, issue tracking, and CI/CD integrations, allowing development teams to collaborate on software projects with control over deployment, access, and infrastructure. Read and write Gitea data through One: issues, repositories, organizations, teams, users, pullrequests and more, 471 actions with real parameter documentation. Use whenever the user asks to look something up in Gitea, create or update a record there, or build code against the Gitea API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gitea
  generated-from: one-knowledge-base
---

# Gitea through One

Gitea is a lightweight, self-hosted Git service that provides source code hosting, repository management, pull requests, issue tracking, and CI/CD integrations, allowing development teams to collaborate on software projects with control over deployment, access, and infrastructure.

One exposes Gitea through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gitea` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Gitea is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Gitea account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Issues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Issue in a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}/issues/{{index}}` | `conn_mod_def::GLxDar1gDn0::uQfmDzWAQuKhg7KbEy6lQQ` |
| List a Repository's Issues | GET | `/api/v1/repos/{{owner}}/{{repo}}/issues` | `conn_mod_def::GLxDa1mkF1A::VxULqMHpTTu89zIA0p300Q` |
| List an Issue's Dependencies | GET | `/api/v1/repos/{{owner}}/{{repo}}/issues/{{index}}/dependencies` | `conn_mod_def::GLxDa1_qld4::r7jdKt_WRVmWogzksPKJBg` |
| List Comments and Events on an Issue | GET | `/api/v1/repos/{{owner}}/{{repo}}/issues/{{index}}/timeline` | `conn_mod_def::GLxDa2PXHCc::8jQoxA5eS2ePhNCYBX_nxg` |
| Add a Comment to an Issue in a Repository | POST | `/api/v1/repos/{{owner}}/{{repo}}/issues/{{index}}/comments` | `conn_mod_def::GLxDZTQXPG0::GxSNTv-PQJ2BJYnc_P5Lsg` |
| Add a Label to an Issue in a Repository | POST | `/api/v1/repos/{{owner}}/{{repo}}/issues/{{index}}/labels` | `conn_mod_def::GLxDZTI-3JE::CmANg2VHQRmcrlCTv_IBzQ` |
| Block an Issue Using a Repository Issue | POST | `/api/v1/repos/{{owner}}/{{repo}}/issues/{{index}}/blocks` | `conn_mod_def::GLxDZfN2Jr8::_iuuGYb-ThuB1flhRMeFWQ` |
| Create an Issue in a Repository | POST | `/api/v1/repos/{{owner}}/{{repo}}/issues` | `conn_mod_def::GLxDZp-2MCM::l6FsSKMvQ1mWCx3VQqERig` |
| Create Issue Dependencies for a Repository Issue | POST | `/api/v1/repos/{{owner}}/{{repo}}/issues/{{index}}/dependencies` | `conn_mod_def::GLxDbILGyEc::cmpBh6l7RJ2VKCMPMrZBtA` |
| Delete an Issue Attachment | DELETE | `/api/v1/repos/{{owner}}/{{repo}}/issues/{{index}}/assets/{{attachmentId}}` | `conn_mod_def::GLxDaN_l6qQ::ioLDmCu3RciV0_ahxgclAQ` |
| Delete an Issue in a Repository | DELETE | `/api/v1/repos/{{owner}}/{{repo}}/issues/{{index}}` | `conn_mod_def::GLxDaDd0pFg::x8a0N7XqSASFSIg8O7JsCw` |
| Delete an Issue's Existing Stopwatch | DELETE | `/api/v1/repos/{{owner}}/{{repo}}/issues/{{index}}/stopwatch/delete` | `conn_mod_def::GLxDaNOtCTI::lIBXySVwSU6S4Zm4eCMDag` |

18 more Issues actions are available through search.

### Repositories

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Collaborator Status for a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}/collaborators/{{collaborator}}` | `conn_mod_def::GLxDfpFJklQ::vuuG3Z9DRLeFoYCce0AW4w` |
| Check Subscription for a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}/subscription` | `conn_mod_def::GLxDfmEeuDY::9L27tYBEQOe34jNexgofHQ` |
| Get a Raw File from a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}/raw/{{filepath}}` | `conn_mod_def::GLxDhhHFG3w::f0ES0WBFTw2eHgmXCNjpxg` |
| Get a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}` | `conn_mod_def::GLxDiA7KPhs::egjQ13CQRoKrWKV275Q7aA` |
| Get a Repository by ID | GET | `/api/v1/repositories/{{id}}` | `conn_mod_def::GLxDh_kVCuU::EsXAEb9dTIGmcRwFDoFzPw` |
| Get an Annotated Tag for a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}/git/tags/{{sha}}` | `conn_mod_def::GLxDjXIb9qc::l4hyHezKRjuk3fAItroH0g` |
| Get Commit Comparison Information for a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}/compare/{{basehead}}` | `conn_mod_def::GLxDigtFB80::MZz9s5gjRpCDm7WTdr1OtQ` |
| Get Signing Key.pub for a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}/signing-key.pub` | `conn_mod_def::GLxDiyo6EvE::Pi_ppaMERW-wno-sD7GxgQ` |
| List a Repository's Forks | GET | `/api/v1/repos/{{owner}}/{{repo}}/forks` | `conn_mod_def::GLxDjxuKjpk::kvz2xcVSTXeVzECuRb-x4A` |
| Search for Repositories | GET | `/api/v1/repos/search` | `conn_mod_def::GLxDk2gCVHs::jMbR8wVdTHCZb4A_PIPwXA` |
| Add a Team to a Repository | PUT | `/api/v1/repos/{{owner}}/{{repo}}/teams/{{team}}` | `conn_mod_def::GLxDfV7OH3I::Y-6hRjsIRNGNVRPc3RYCHA` |
| Adopt an Unadopted Repository | POST | `/api/v1/admin/unadopted/{{owner}}/{{repo}}` | `conn_mod_def::GLxDYgjtX_o::tlobmjBgQwSPdgTCTfrSvQ` |

17 more Repositories actions are available through search.

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Public Membership in an Organization | GET | `/api/v1/orgs/{{org}}/public_members/{{username}}` | `conn_mod_def::GLxDcjNnNqU::vGZOac0wTV6vYLPnR_W1BA` |
| Get an Organization | GET | `/api/v1/orgs/{{org}}` | `conn_mod_def::GLxDdp6RwzE::27IhmGniSiywyRlfei8sHQ` |
| List a User's Organizations | GET | `/api/v1/users/{{username}}/orgs` | `conn_mod_def::GLxDd_ukv7k::ZmFVhlbiS3KTxa9iJ7ixoQ` |
| List All Organizations | GET | `/api/v1/admin/orgs` | `conn_mod_def::GLxDY8j_fI0::dh_3WBbBTS-o-sNL_Rk7XA` |
| List Organizations | GET | `/api/v1/orgs` | `conn_mod_def::GLxDdxp6yvw::FJXVJojdSiKGRWJUcOOXVw` |
| List the Current User's Organizations | GET | `/api/v1/user/orgs` | `conn_mod_def::GLxDeeqhIXA::0fAcEZFyQe6YnqGapvg8cg` |
| Block a User for an Organization | PUT | `/api/v1/orgs/{{org}}/blocks/{{username}}` | `conn_mod_def::GLxDcmNJLq8::BUJ8ZMmIRveZiedESFi0Kw` |
| Create an Organization | POST | `/api/v1/orgs` | `conn_mod_def::GLxDdDZqjOg::LTjRsHnoSZGSah5MasBtnw` |
| Create an Organization for a User | POST | `/api/v1/admin/users/{{username}}/orgs` | `conn_mod_def::GLxDYqg1ZrE::BjvV7GZyQ5CBGfL5NR8PMA` |
| Delete an Organization | DELETE | `/api/v1/orgs/{{org}}` | `conn_mod_def::GLxDdZWZ8N0::W83tcc2rRkqrs5QLRzLefw` |
| Delete Avatar for an Organization | DELETE | `/api/v1/orgs/{{org}}/avatar` | `conn_mod_def::GLxDdYFxX9o::ZZydbGiORXSHhYlIdt54xQ` |
| Edit an Organization | PATCH | `/api/v1/orgs/{{org}}` | `conn_mod_def::GLxDdY1a4mM::jFYFApnMTyuZCj65LmccUg` |

2 more Organizations actions are available through search.

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team | GET | `/api/v1/teams/{{id}}` | `conn_mod_def::GLxDdhDhLpU::Ls75Il8mTRStc6rsfjNHDw` |
| List a Team's Repos | GET | `/api/v1/teams/{{id}}/repos` | `conn_mod_def::GLxDeBgfMfE::K59ngEC3TgOKAs6orC4aNw` |
| List an Organization's Teams | GET | `/api/v1/orgs/{{org}}/teams` | `conn_mod_def::GLxDebqulDQ::TYJC97NATBa3BnV3gQRWVw` |
| List Members Using Teams | GET | `/api/v1/teams/{{id}}/members` | `conn_mod_def::GLxDd_kMByE::YCuXysowT2m484AGjBCN8g` |
| List Teams for the Authenticated User | GET | `/api/v1/user/teams` | `conn_mod_def::GLxDmuC-ySQ::AdJtHZCGTWWHNgSg4x35xg` |
| Search Teams Within an Organization | GET | `/api/v1/orgs/{{org}}/teams/search` | `conn_mod_def::GLxDemuHvOE::XFS7QJfgSNCIjuuhY8hxFw` |
| Add a Repository to a Team | PUT | `/api/v1/teams/{{id}}/repos/{{org}}/{{repo}}` | `conn_mod_def::GLxDcjFs_dE::Thqb6Vm9S2ihMUYbJnQlxA` |
| Add a Team Member to a Team | PUT | `/api/v1/teams/{{id}}/members/{{username}}` | `conn_mod_def::GLxDckPZ4PY::K4cdnPVzSUSTCFgcgWdMNg` |
| Create a Team in an Organization | POST | `/api/v1/orgs/{{org}}/teams` | `conn_mod_def::GLxDdEHD83Q::XEDg5D6ES_y4eLrD0Y29HQ` |
| Delete a Team | DELETE | `/api/v1/teams/{{id}}` | `conn_mod_def::GLxDdN0mf0c::3hwWGnMdQcm0XYOmiY34Aw` |
| Edit a Team | PATCH | `/api/v1/teams/{{id}}` | `conn_mod_def::GLxDdWSxhtE::CsLqz8kCSGyPsmpJie6zwg` |
| Remove a Repository from a Team | DELETE | `/api/v1/teams/{{id}}/repos/{{org}}/{{repo}}` | `conn_mod_def::GLxDen-o0EY::SEZQCx4QSgaJHUcKo-klgw` |

1 more Teams actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if One User Is Following Another User | GET | `/api/v1/users/{{username}}/following/{{target}}` | `conn_mod_def::GLxDlifZFsI::n2IAjhHCSTiiXAak7dYVhw` |
| Get a User | GET | `/api/v1/users/{{username}}` | `conn_mod_def::GLxDmM586Po::NKQahi07Riicu25bpj_V_w` |
| List a User's Followers | GET | `/api/v1/users/{{username}}/followers` | `conn_mod_def::GLxDnE1ZEPI::mbe2-b7pSryMIGTswlMWXQ` |
| List Following Users for a User | GET | `/api/v1/users/{{username}}/following` | `conn_mod_def::GLxDnL6rIb0::SO3lVlZqSp2RCOKo0vR2kw` |
| List Users Blocked by an Organization | GET | `/api/v1/orgs/{{org}}/blocks` | `conn_mod_def::GLxDeflk8ZA::b1UjiiFwSsqDW9uyBov6sw` |
| List Users Blocked by the Authenticated User | GET | `/api/v1/user/blocks` | `conn_mod_def::GLxDnLgJXq0::uTNGs9uyTTORaxO30t6frg` |
| Search for Users | GET | `/api/v1/users/search` | `conn_mod_def::GLxDnTD0Lu0::Z3hhJFabRfCEWOLxiqbKFQ` |
| Create a User | POST | `/api/v1/admin/users` | `conn_mod_def::GLxDYrBVAI4::wbJlYk6BSheAkwfNCMWb-w` |
| Delete a User | DELETE | `/api/v1/admin/users/{{username}}` | `conn_mod_def::GLxDYqOdiQg::EN61OT1qS76Ix_ExFd64zw` |
| Delete a User's Access Token | DELETE | `/api/v1/users/{{username}}/tokens/{{token}}` | `conn_mod_def::GLxDl9Ey7l8::lCQudNOUQvScjfg7PxTdgw` |
| Edit a User | PATCH | `/api/v1/admin/users/{{username}}` | `conn_mod_def::GLxDYxsQELc::OBTcWNq7R1e7GOtbypVPAg` |
| Rename a User | POST | `/api/v1/admin/users/{{username}}/rename` | `conn_mod_def::GLxDZMr_xNY::EqNd56dsSXm3esWTDoC7uQ` |

### PullRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pull Request by Base and Head for a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{base}}/{{head}}` | `conn_mod_def::GLxDhzNSylg::8ZeIbCHTQzmd3o7BGU501Q` |
| Get a Pull Request Diff or Patch | GET | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}.{{diffType}}` | `conn_mod_def::GLxDhz6F04c::vWrLiAnuR96EV6ICKuD_OQ` |
| Get a Pull Request for a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}` | `conn_mod_def::GLxDhnMk7Sc::tdhAR_P0THKhgTKOez6r6g` |
| List a Repo's Pinned Pull Requests | GET | `/api/v1/repos/{{owner}}/{{repo}}/pulls/pinned` | `conn_mod_def::GLxDjeZMzyo::DZvxtx-BTKqUGjWgbq9Fsg` |
| List a Repo's Pull Requests | GET | `/api/v1/repos/{{owner}}/{{repo}}/pulls` | `conn_mod_def::GLxDjgeLzno::gbapyGbjS120jIM9Axu_8w` |
| Cancel Scheduled Auto Merge for a Repository Pull Request | DELETE | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}/merge` | `conn_mod_def::GLxDfdZ4WSw::WtA-PekwS0Keyk4SUiAFfg` |
| Create a Pull Request for a Repository | POST | `/api/v1/repos/{{owner}}/{{repo}}/pulls` | `conn_mod_def::GLxDgA9ksRU::xRyq0zjbQxuxkJTK6_km4A` |
| Create Review Requests for a Pull Request | POST | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}/requested_reviewers` | `conn_mod_def::GLxDga4ywiY::jODzYhCtSGyJhrFNlSNQ1g` |
| Merge a Pull Request | POST | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}/merge` | `conn_mod_def::GLxDkXSVJZg::4zHMKPS7S7Kmhqqm2s1BXg` |
| Update a Pull Request Using Repos Pulls | POST | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}/update` | `conn_mod_def::GLxDkWoO6q0::Mnn6hrUgSWKYl8agAqc89g` |

### Packages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Package for an Owner | GET | `/api/v1/packages/{{owner}}/{{type}}/{{name}}/{{version}}` | `conn_mod_def::GLxDe33Gaig::uJamAtaVQnOhbTGAac9Y1g` |
| Get the Latest Version of a Package | GET | `/api/v1/packages/{{owner}}/{{type}}/{{name}}/-/latest` | `conn_mod_def::GLxDfOe8i5M::1lg5ZDj2Tnm9jCNOs7d1cQ` |
| List Package Versions | GET | `/api/v1/packages/{{owner}}/{{type}}/{{name}}` | `conn_mod_def::GLxDfO5_010::ubqQ21MIRhuUqbjKZDU9xw` |
| List Packages for an Owner | GET | `/api/v1/packages/{{owner}}` | `conn_mod_def::GLxDfOA4cx0::ASlruorITCaBJ1EiqOiPkg` |
| Delete a Package | DELETE | `/api/v1/packages/{{owner}}/{{type}}/{{name}}` | `conn_mod_def::GLxDe3ELXKA::_Y5eB4GoTGC_GIUHPld7Jg` |
| Delete a Package Version | DELETE | `/api/v1/packages/{{owner}}/{{type}}/{{name}}/{{version}}` | `conn_mod_def::GLxDe4Cdwao::PuNf1hnjSRWONK7ZiObxyQ` |
| Link a Package to a Repository | POST | `/api/v1/packages/{{owner}}/{{type}}/{{name}}/-/link/{{repoName}}` | `conn_mod_def::GLxDfOnOnJU::ltd31RkQRLmLCTy3uFyVEQ` |
| Unlink a Package from a Repository | POST | `/api/v1/packages/{{owner}}/{{type}}/{{name}}/-/unlink` | `conn_mod_def::GLxDfOLxGIc::CmYNtEStRFqWpgCxS-dvlw` |

### Repos

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Repos | GET | `/api/v1/users/{{username}}/repos` | `conn_mod_def::GLxDnDm8Vs4::cIJfxX4ET62Ss6I6MeqDzg` |
| List an Organization's Repos | GET | `/api/v1/orgs/{{org}}/repos` | `conn_mod_def::GLxDeKWKJ0s::lL0MBIgmQUWzAoGUpuSLWg` |
| List Repos for the Authenticated User | GET | `/api/v1/user/repos` | `conn_mod_def::GLxDnL-4UJo::MKV8-rkqTZCGdng6A1Z1nA` |
| Accept Repo Transfer | POST | `/api/v1/repos/{{owner}}/{{repo}}/transfer/accept` | `conn_mod_def::GLxDfVFRo-8::UttKeuspTFuC2bEiXwkXTg` |
| Migrate a Remote Git Repository | POST | `/api/v1/repos/migrate` | `conn_mod_def::GLxDkcMfFOc::j_vziSWLT1CV67T6-HMRzQ` |
| Unwatch a Repo | DELETE | `/api/v1/repos/{{owner}}/{{repo}}/subscription` | `conn_mod_def::GLxDlFymq2k::G5HaOf19QammOHHb5CTkfQ` |

### PullRequestReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Pull Request Review | GET | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}/reviews/{{id}}` | `conn_mod_def::GLxDiIPsnZg::DFl-VDV3RVadMgb3aUEaJA` |
| List Pull Request Reviews for a Repository | GET | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}/reviews` | `conn_mod_def::GLxDj6nGoqY::_eeaJ92mSKe8MPfxXaV_6Q` |
| Create a Pull Request Review for a Repository | POST | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}/reviews` | `conn_mod_def::GLxDgTgUmdI::VEYjiwsUS3KHx-ElGsP0Gg` |
| Delete a Pull Request Review | DELETE | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}/reviews/{{id}}` | `conn_mod_def::GLxDgzFfdyA::NtIs-VQ9SU-_2MKPHGwM4A` |
| Dismiss a Pull Request Review | POST | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}/reviews/{{id}}/dismissals` | `conn_mod_def::GLxDhHpchR8::-82OtcdLT9OeAwmuOvQAuw` |
| Undismiss a Pull Request Review for a Repository | POST | `/api/v1/repos/{{owner}}/{{repo}}/pulls/{{index}}/reviews/{{id}}/undismissals` | `conn_mod_def::GLxDfer7fhE::zcpHYXtcRS-yzceymo-0Cw` |

This lists 90 of 471 actions. For anything not here, call `search_one_platform_actions` with platform `gitea`. The full catalog is at https://www.withone.ai/knowledge/gitea.

## When a call fails

The error comes from Gitea, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gitea

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
