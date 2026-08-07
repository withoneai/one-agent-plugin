---
name: click-up
description: ClickUp offers a unified, cloud-based work platform that consolidates tasks, docs, chat, whiteboards, time tracking, automations, AI-powered workflows, and customizable views—enabling teams of any size or industry to manage projects, collaborate, and streamline productivity within a single, scalable workspace. Read and write ClickUp data through One: tasks, lists, timeentries, views, folders, chatchannels and more, 170 actions with real parameter documentation. Use whenever the user asks to look something up in ClickUp, create or update a record there, or build code against the ClickUp API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: click-up
  generated-from: one-knowledge-base
---

# ClickUp through One

ClickUp offers a unified, cloud-based work platform that consolidates tasks, docs, chat, whiteboards, time tracking, automations, AI-powered workflows, and customizable views—enabling teams of any size or industry to manage projects, collaborate, and streamline productivity within a single, scalable workspace.

One exposes ClickUp through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `click-up` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ClickUp is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ClickUp account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task | GET | `/task/{{taskId}}` | `conn_mod_def::GJ1NYOSxJAc::GS03N1JBS7Gtdcvi7gpS4Q` |
| Get a Task’s Time in Status | GET | `/v2/task/{{taskId}}/time_in_status` | `conn_mod_def::GJ1NYYqQc60::EnIYcbzBSGWv8Bb7CIIfSw` |
| Get Bulk Tasks' Time in Status | GET | `/v2/task/bulk_time_in_status/{{taskIds}}` | `conn_mod_def::GJ1NX1SNkHY::hhzq6zfWSai9eS4urKhxuA` |
| Get Filtered Team Tasks (List a Workspace’s Tasks by Filter) | GET | `/v2/team/{{teamId}}/task` | `conn_mod_def::GJ1NYDORpUY::6-x-1O0hShKg4Q7pWppKlw` |
| List Tasks in a List | GET | `/v2/list/{{listId}}/task` | `conn_mod_def::GJ1NYoUtZHs::W4JHGlAnRLiNoXDYORTxwQ` |
| List Tasks in a View | GET | `/v2/view/{{viewId}}/task` | `conn_mod_def::GJ1Nd0zQaOY::Uhk2G-6zRdijUKGb1m-fnA` |
| Add a Task to an Additional List | POST | `/v2/list/{{listId}}/task/{{taskId}}` | `conn_mod_def::GJ1NS3ARiec::o5jJzOBMQAmOxSr4Ps2Dnw` |
| Add Guest to a Task | POST | `/v2/task/{{taskId}}/guest/{{guestId}}` | `conn_mod_def::GJ1NR3DBv1Q::auF2alciTzSX6iWw2yQO_g` |
| Add Tag to a Task | POST | `/v2/task/{{taskId}}/tag/{{tagName}}` | `conn_mod_def::GJ1NVWV9vwA::05ksG8agQaGmsvrwg5MIdw` |
| Create a Task From a Template in a List | POST | `/v2/list/{{listId}}/taskTemplate/{{templateId}}` | `conn_mod_def::GJ1NXjFzd1w::LGdCH85ISXiy0Ivl_1Rm1A` |
| Create a Task in a List | POST | `/v2/list/{{listId}}/task` | `conn_mod_def::GJ1NXbQ4T7g::GQuOI_YJSPKX3BRGFScliQ` |
| Delete a Task | DELETE | `/task/{{taskId}}` | `conn_mod_def::GJ1NXqpLDP4::YOTezrkvT56i3uNWgVbZ2Q` |

9 more Tasks actions are available through search.

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List | GET | `/list/{{listId}}` | `conn_mod_def::GJ1NTxDQHbY::L7iWqy3yTaCTQzXUI8Mh3w` |
| List a Folder’s Lists | GET | `/folder/{{folderId}}/list` | `conn_mod_def::GJ1NT46rNs0::0xCGHGlKSK-TyDwksjrYXQ` |
| List Folderless Lists in a Space | GET | `/v2/space/{{spaceId}}/list` | `conn_mod_def::GJ1NTqJRX7k::8oFOB0BbTxa0XNriUIqpgA` |
| Add Guest to a List | POST | `/v2/list/{{listId}}/guest/{{guestId}}` | `conn_mod_def::GJ1NRua2lqQ::nBqUsxh2T6ajwfk9seH1PQ` |
| Create a Folder List (Create List) | POST | `/v2/folder/{{folderId}}/list` | `conn_mod_def::GJ1NTGC8kfE::_WWCctSFRMyB8xAu8VZZxQ` |
| Create a Folderless List in a Space | POST | `/space/{{spaceId}}/list` | `conn_mod_def::GJ1NS-zQkbQ::3uXmJ1yuQdCse_GY9QxmhA` |
| Create a List From a Template in a Folder | POST | `/v2/folder/{{folderId}}/list_template/{{templateId}}` | `conn_mod_def::GJ1NTOZ23zk::UpgMaS-zSYirf-hgvJxA7A` |
| Create a List From a Template in a Space | POST | `/v2/space/{{spaceId}}/list_template/{{templateId}}` | `conn_mod_def::GJ1NTY_6TAQ::OxzDq1RSQNq4dFlnyA2X5g` |
| Delete a Workspace List | DELETE | `/list/{{listId}}` | `conn_mod_def::GJ1NTgGOVLI::-BunrEnoTz6uZyiMUBbAGQ` |
| Remove a Guest From a List | DELETE | `/v2/list/{{listId}}/guest/{{guestId}}` | `conn_mod_def::GJ1NSeU0_iM::6V0HUDVJQMW1TmKGOF_QMQ` |
| Update a List | PUT | `/list/{{listId}}` | `conn_mod_def::GJ1NUH9F25Q::MTqFXqmSS3moadXyrHompQ` |

### TimeEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace Time Entry | GET | `/v2/team/{{teamId}}/time_entries/{{timerId}}` | `conn_mod_def::GJ1NaATG8Kk::lVMqOYm7TuG9B8QiPlpOtA` |
| Get a Workspace’s Current Running Time Entry | GET | `/team/{{teamId}}/time_entries/current` | `conn_mod_def::GJ1NZ3Ac9JM::lyPdRrhKRqSPWzhxdvAukg` |
| Get Time Entries Within a Date Range (for a Workspace) | GET | `/team/{{teamId}}/time_entries` | `conn_mod_def::GJ1NaQD1Fgk::vcyS1pdLSLWUI6JqY8J-9w` |
| Add Tags to a Workspace’s Time Entries | POST | `/team/{{teamId}}/time_entries/tags` | `conn_mod_def::GJ1NZKVNRyU::I1hyxcPfTNWFumq0LgYAlA` |
| Create a Time Entry for a Workspace (Team) | POST | `/team/{{teamId}}/time_entries` | `conn_mod_def::GJ1NZceWLDg::TZe6fzDlSdWlQmf1ThpfJw` |
| Delete a Workspace Time Entry | DELETE | `/v2/team/{{teamId}}/time_entries/{{timerId}}` | `conn_mod_def::GJ1NZn5o63o::GgwC_LCTQVuMzWT4rPpfww` |
| Remove Tags From a Workspace's Time Entries | DELETE | `/v2/team/{{teamId}}/time_entries/tags` | `conn_mod_def::GJ1Nag8jtD8::Z4i094nqQjmkUmyXwDZdZw` |
| Start a Workspace Time Entry Timer (Authenticated User) | POST | `/v2/team/{{teamId}}/time_entries/start` | `conn_mod_def::GJ1NatOCQvo::JvahSr7BQCyO5MfdBt03AA` |
| Stop a Workspace Time Entry Timer (Authenticated User) | POST | `/v2/team/{{teamId}}/time_entries/stop` | `conn_mod_def::GJ1Na2t14Iw::ApuC6gLnRO-wRGCqEx5mgg` |
| Update a Workspace Time Entry | PUT | `/team/{{teamId}}/time_entries/{{timerId}}` | `conn_mod_def::GJ1Na_W43Ug::LshdkgjbRK-5DBQIFUEruw` |

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a View | GET | `/view/{{viewId}}` | `conn_mod_def::GJ1NdryfdXM::qiJ3mJFWQwqyOl3K-GeHcw` |
| List a List’s Views | GET | `/list/{{listId}}/view` | `conn_mod_def::GJ1NdeCzx-U::G7Z3euUVSbanBSy8k559xw` |
| List a Space’s Views | GET | `/space/{{spaceId}}/view` | `conn_mod_def::GJ1NdlAGQCw::43hN_vLMTy6U2ypXVJofcQ` |
| List a Workspace’s Everything-Level Views | GET | `/team/{{teamId}}/view` | `conn_mod_def::GJ1Nd7cxtXI::-xKrz5qHSdygipbnbFnhrg` |
| Create a Folder View | POST | `/folder/{{folderId}}/view` | `conn_mod_def::GJ1Ncurlc9E::b_RN1mKNSaScPV4yMoxmMw` |
| Create a List View | POST | `/v2/list/{{listId}}/view` | `conn_mod_def::GJ1Nc10fYUs::54EKcGn-QrKaJwyUmkEDcg` |
| Create a Workspace (Everything Level) View | POST | `/v2/team/{{teamId}}/view` | `conn_mod_def::GJ1NdJK-0bA::334Gx3F1RUu21kEWUn--1A` |
| Delete a View | DELETE | `/view/{{viewId}}` | `conn_mod_def::GJ1NdQFggug::xWp-0tF6TEWeBk6FdAcx1g` |
| Update a View | PUT | `/view/{{viewId}}` | `conn_mod_def::GJ1NeEkXDZ8::_QmPG4XMSTOJ7ln4sSJ-iQ` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Folder | GET | `/folder/{{folderId}}` | `conn_mod_def::GJ1NQJqMB1w::9T5SGrkbQzajUo7eGafuqg` |
| List a Space’s Folders | GET | `/space/{{spaceId}}/folder` | `conn_mod_def::GJ1NQRFFRE0::owJX2ismRVKcgu0ylO9NmQ` |
| Add a Guest to a Folder | POST | `/v2/folder/{{folderId}}/guest/{{guestId}}` | `conn_mod_def::GJ1NRmiqraY::FhIMqs7aTpKM_hBOZpzvsQ` |
| Create a Folder From a Template in a Space | POST | `/v2/space/{{spaceId}}/folder_template/{{templateId}}` | `conn_mod_def::GJ1NP7sjPdI::BIaM1gM1Q6mo9LExZ500-Q` |
| Create a Space Folder | POST | `/v2/space/{{spaceId}}/folder` | `conn_mod_def::GJ1NPxoYM2c::dLLsnxZMTIWLvMWTxThxUQ` |
| Delete a Folder | DELETE | `/folder/{{folderId}}` | `conn_mod_def::GJ1NQC-nnqY::6XrGcye5T1W1FXlNhFlxXg` |
| Remove a Guest From a Folder | DELETE | `/folder/{{folderId}}/guest/{{guestId}}` | `conn_mod_def::GJ1NSWeeBoU::upmEKQR-R-Sai-qi-0dTrg` |
| Update a Folder | PUT | `/folder/{{folderId}}` | `conn_mod_def::GJ1NQYhQjgs::of-LVBEmRtGMp1QR39SMaQ` |

### ChatChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Workspace Chat Channel | GET | `/v3/workspaces/{{workspaceId}}/chat/channels/{{channelId}}` | `conn_mod_def::GJ1OGQcUyT8::xjte8bCCT2qt9mzwe2LhtA` |
| Retrieve a Workspace’s Chat Channels | GET | `/v3/workspaces/{{workspaceId}}/chat/channels` | `conn_mod_def::GJ1OG1lZ5lk::cmauRAP8QzinKDTvKmQO6A` |
| Create a Chat Channel on a Space, Folder, or List (Location) | POST | `/v3/workspaces/{{workspaceId}}/chat/channels/location` | `conn_mod_def::GJ1OFNjMzDY::YoZUeAmkQ9eGGVXgpz0LFg` |
| Create a Workspace Chat Channel | POST | `/v3/workspaces/{{workspaceId}}/chat/channels` | `conn_mod_def::GJ1OFFjViwg::S5hQBDRYQQi9DBbZHEG64Q` |
| Create a Workspace Direct Message Chat Channel | POST | `/v3/workspaces/{{workspaceId}}/chat/channels/direct_message` | `conn_mod_def::GJ1OFW0Z3TU::X1-uhiIcT-2dTqYhUilf8Q` |
| Delete a Workspace Chat Channel | DELETE | `/v3/workspaces/{{workspaceId}}/chat/channels/{{channelId}}` | `conn_mod_def::GJ1OF14b_oU::FuMJr1nEQp6acFzlc8RPFw` |
| Update a Workspace's Chat Channel | PATCH | `/v3/workspaces/{{workspaceId}}/chat/channels/{{channelId}}` | `conn_mod_def::GJ1OHnJ4zhk::NYarIkneRIC6_fEk-0vw6w` |

### Goals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Goal | GET | `/goal/{{goalId}}` | `conn_mod_def::GJ1NRM-pawg::bjhFv4l6QrWqIxaAPm4o6Q` |
| List a Workspace's Goals | GET | `/team/{{teamId}}/goal` | `conn_mod_def::GJ1NRWxJITE::tUSHPMALTLqWU706SG9cgQ` |
| Create a Workspace Goal | POST | `/v2/team/{{teamId}}/goal` | `conn_mod_def::GJ1NQfokOzE::Pp7BREZaRpKIBSOeZNQ30w` |
| Delete a Workspace Goal | DELETE | `/goal/{{goalId}}` | `conn_mod_def::GJ1NQxq1xKQ::9suLQ93vTzmT6sTwg1qIOg` |
| Update a Goal | PUT | `/goal/{{goalId}}` | `conn_mod_def::GJ1NRdtCSLY::IYAReXSZR_-idb42FEQHDw` |

### Spaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Space | GET | `/space/{{spaceId}}` | `conn_mod_def::GJ1NU8B3LnA::qbng_scvS2yCZwrgSMwkng` |
| List a Workspace’s Spaces | GET | `/team/{{teamId}}/space` | `conn_mod_def::GJ1NVFt0Eag::qj1VbfWCSJe2Zb4YUgmaUw` |
| Create a Workspace Space | POST | `/v2/team/{{teamId}}/space` | `conn_mod_def::GJ1NUscGXs8::04lnbOA0RqKUgfhd-Q8Xeg` |
| Delete a Workspace Space | DELETE | `/space/{{spaceId}}` | `conn_mod_def::GJ1NU1RlzzQ::fKI7XSmeQl-5NipEs6U9Pw` |
| Update a Space | PUT | `/v2/space/{{spaceId}}` | `conn_mod_def::GJ1NVNwFWuk::cNssm4v5SsG4LRogYhY88A` |

### Guests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace Guest | GET | `/v2/team/{{teamId}}/guest/{{guestId}}` | `conn_mod_def::GJ1NSGmz3so::JtIgXee_QsuiuVsPeAtBOA` |
| Edit a Guest on a Workspace | PUT | `/team/{{teamId}}/guest/{{guestId}}` | `conn_mod_def::GJ1NR_EzoOk::tcbsfsToRd2kJqPwHQTfvA` |
| Invite a Guest to a Workspace | POST | `/team/{{teamId}}/guest` | `conn_mod_def::GJ1NSOVa_K4::11XBqbeBRdCR-Tf9SxNX4g` |
| Remove a Guest From a Workspace | DELETE | `/team/{{teamId}}/guest/{{guestId}}` | `conn_mod_def::GJ1NSvvmC7o::PPRq4-LAQGmshVLbJqSt1Q` |

### SpaceTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Space’s Tags | GET | `/space/{{spaceId}}/tag` | `conn_mod_def::GJ1NV1JqfRc::iF3wVHcJROGSSKaXJ80MfA` |
| Create a Space Tag | POST | `/v2/space/{{spaceId}}/tag` | `conn_mod_def::GJ1NVfgcADQ::KzTWANGmRj2hgZdaanJxHg` |
| Delete a Space Tag | DELETE | `/v2/space/{{spaceId}}/tag/{{tagName}}` | `conn_mod_def::GJ1NVmvqC9U::ZEMrYrEkSIq3ziIszbqdtQ` |
| Edit a Space Tag | PUT | `/v2/space/{{spaceId}}/tag/{{tagName}}` | `conn_mod_def::GJ1NVuFq1Iw::t-YHm1eYQISd8u22mh9FPQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Webhooks | GET | `/v2/team/{{teamId}}/webhook` | `conn_mod_def::GJ1NedRPmXs::4Ex8rIB5T_qWHv_dj5tgrw` |
| Create a Workspace Webhook | POST | `/v2/team/{{teamId}}/webhook` | `conn_mod_def::GJ1NeMF9EG8::r4hUAnV8Q9Ohyd9JsGqnDQ` |
| Delete a Webhook | DELETE | `/webhook/{{webhookId}}` | `conn_mod_def::GJ1NeV5fOwQ::DeHeW0QvRgONKAvTDBQThg` |
| Update a Webhook | PUT | `/webhook/{{webhookId}}` | `conn_mod_def::GJ1NekGz4pc::Hiy6BUT6SHy6ZNoqYGJdlg` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Threaded Comments for a Comment | GET | `/comment/{{commentId}}/reply` | `conn_mod_def::GJ1NOp_-XNQ::WZN8-Gb3QmWhB-BG2iJ6qw` |
| List Comments for a List | GET | `/list/{{listId}}/comment` | `conn_mod_def::GJ1NOZYpbfI::gdNE2CDCRI-ciJvGXgF8Cw` |
| Delete a Task Comment | DELETE | `/comment/{{commentId}}` | `conn_mod_def::GJ1NOHunFWQ::qn7Z0PxbRniIY3JUEOYB_g` |
| Update a Comment | PUT | `/comment/{{commentId}}` | `conn_mod_def::GJ1NOwisnhw::pSSyfPlISRSspvypNzpxHA` |

### ChecklistItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Checklist Item in a Checklist | POST | `/v2/checklist/{{checklistId}}/checklist_item` | `conn_mod_def::GJ1NWTHrLXU::k9pV2PDuT7mgRwlGpjfdiw` |
| Delete a Checklist's Checklist Item | DELETE | `/checklist/{{checklistId}}/checklist_item/{{checklistItemId}}` | `conn_mod_def::GJ1NWhYFAtM::C6_pSKWTQ-qW9s8-Ao1eww` |
| Edit a Checklist’s Item | PUT | `/v2/checklist/{{checklistId}}/checklist_item/{{checklistItemId}}` | `conn_mod_def::GJ1NWxslu2Y::B05M4qBaTUCHS7m1NV9_gg` |

### UserGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workspace User Group | POST | `/v2/team/{{teamId}}/group` | `conn_mod_def::GJ1NbzgNyxc::47db8qH2SQ-_elHfg6s5hQ` |
| Delete a Workspace User Group | DELETE | `/group/{{groupId}}` | `conn_mod_def::GJ1Nb6sv2Os::rkV5dxAXRFubUTkfni2bcw` |
| Update a User Group | PUT | `/group/{{groupId}}` | `conn_mod_def::GJ1NcKDm80c::mDOcTeKvSfS6GLwk4CF9dg` |

### Docs

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Workspace Doc | GET | `/v3/workspaces/{{workspaceId}}/docs/{{docId}}` | `conn_mod_def::GJ1OIYkCWs8::kymbBz3cQRmInw4uC03tAA` |

2 more Docs actions are available through search.

This lists 90 of 170 actions. For anything not here, call `search_one_platform_actions` with platform `click-up`. The full catalog is at https://www.withone.ai/knowledge/click-up.

## When a call fails

The error comes from ClickUp, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/click-up

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
