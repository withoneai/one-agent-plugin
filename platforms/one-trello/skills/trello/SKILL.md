---
name: trello
description: Trello is a visual project management and collaboration tool that helps individuals and teams organize tasks, projects, and workflows using boards, lists, and cards. Read and write Trello data through One: cards, boards, members, organizations, checklists, lists and more, 256 actions with real parameter documentation. Use whenever the user asks to look something up in Trello, create or update a record there, or build code against the Trello API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: trello
  generated-from: one-knowledge-base
---

# Trello through One

Trello is a visual project management and collaboration tool that helps individuals and teams organize tasks, projects, and workflows using boards, lists, and cards.

One exposes Trello through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `trello` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Trello is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Trello account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Cards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Card by ID | GET | `/1/cards/{{id}}` | `conn_mod_def::GJ7RdT9UitQ::RBL78HjWQsWpY_HBShqDfw` |
| Get a Card for an Action | GET | `/actions/{{id}}/card` | `conn_mod_def::GJ7RglR0ufU::aNgWFvr8TQWNqZ8WNOwUFA` |
| Get a Card’s Board | GET | `/1/cards/{{id}}/board` | `conn_mod_def::GJ7RglG4htU::V7lMiY-GRnWizI6sKmMfGA` |
| Get a Card’s Check Item States | GET | `/1/cards/{{id}}/checkItemStates` | `conn_mod_def::GJ7Re3tddIA::FH0KM5pdQS2vpNEEMWh9UA` |
| Get a Card's Custom Field Items | GET | `/1/cards/{{id}}/customFieldItems` | `conn_mod_def::GJ7RfQLFMSo::4y2Hw2I6Rgy-sJgDdd3Png` |
| Get a Card’s List | GET | `/1/cards/{{id}}/list` | `conn_mod_def::GJ7Rgs3YDfM::rhQhhLq2R9OUtu5ym8AZ0A` |
| Get a Card’s Members | GET | `/1/cards/{{id}}/members` | `conn_mod_def::GJ7Rg3sQpTw::LSo8HQ6eQ7aaxsIp7brQeA` |
| Get a Field on a Card | GET | `/1/cards/{{id}}/{{field}}` | `conn_mod_def::GJ7RdaVGO24::4yU_lggFQNK2z8klN3AY1A` |
| Get Filtered Cards on a Board | GET | `/1/boards/{{id}}/cards/{{filter}}` | `conn_mod_def::GJ7RfWrzNpE::IwwswwwPRoaN5YNmOD_YAQ` |
| Get Members Who Voted on a Card | GET | `/1/cards/{{id}}/membersVoted` | `conn_mod_def::GJ7Rfz5u9lg::8JSxqLdbS8Wjow4DuUO4hw` |
| Get Shared Plugin Data on a Card | GET | `/cards/{{id}}/pluginData` | `conn_mod_def::GJ7RgPeYWoM::LpEo0EorQB-F_SwnwX_nfw` |
| List a Board's Cards | GET | `/1/boards/{{id}}/cards` | `conn_mod_def::GJ7Re3AgvU4::O9oHmVzETi-qIyz6bbA-qw` |

19 more Cards actions are available through search.

### Boards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Board | GET | `/boards/{{id}}` | `conn_mod_def::GJ7RdHaW12M::-XOav8vpRtGJc2YsB1ZNzg` |
| Get a Board for an Action | GET | `/1/actions/{{id}}/board` | `conn_mod_def::GJ7RgYLAtus::276HGOJ6Q4WyKFHIndQ-Aw` |
| Get a List’s Board | GET | `/1/lists/{{id}}/board` | `conn_mod_def::GJ7RgedYfHg::Z_fWYN6nTG2GJGb_pmLA1w` |
| Get a Specific Field on a Board | GET | `/1/boards/{{id}}/{{field}}` | `conn_mod_def::GJ7RdZrXhvY::wi3xcSlnQVKJETHWU6dhHw` |
| List a Board’s Members | GET | `/boards/{{id}}/members` | `conn_mod_def::GJ7Rg4X3WPs::Gz9nw0PkRtaoRV_C1QceTw` |
| List a Workspace’s Boards | GET | `/1/organizations/{{id}}/boards` | `conn_mod_def::GJ7Reu6WIMI::_OWW4B8oT4el4hys1q_FqA` |
| Add a Member to a Board | PUT | `/1/boards/{{id}}/members/{{idMember}}` | `conn_mod_def::GJ7Ra72SxB4::qkLEQ3qMROCPFGpRkwBhPg` |
| Create a Board | POST | `/boards/` | `conn_mod_def::GJ7RbQvXbys::JXnaSIK1TAmehuh2MAS2Tw` |
| Create a Tag for a Board | POST | `/1/boards/{{id}}/idTags` | `conn_mod_def::GJ7RbuNzJuI::H3AUMvm3R8yLwu23P_1jGg` |
| Delete a Board | DELETE | `/1/boards/{{id}}` | `conn_mod_def::GJ7RcHEG-ss::62l5Ghm5QASx-FHbAlLoxw` |
| Disable a Power-Up on a Board | DELETE | `/1/boards/{{id}}/boardPlugins/{{idPlugin}}` | `conn_mod_def::GJ7RdE-qz_w::ePoh5CviTPKuXFi4MzHL1A` |
| Generate a Board Calendar Key | POST | `/1/boards/{{id}}/calendarKey/generate` | `conn_mod_def::GJ7RbRNlxr4::tMcy6C4pTJWpPwsVSrhcrw` |

11 more Boards actions are available through search.

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Field on a Member | GET | `/1/members/{{id}}/{{field}}` | `conn_mod_def::GJ7RdajkzGA::ZOSt0PkkQN6G7cET01Zg6Q` |
| Get a Member | GET | `/1/members/{{id}}` | `conn_mod_def::GJ7RdoM5UZA::ilFyemlSRHGpN-4Ahq0xHA` |
| Get a Member’s Blocked Notification Keys for a Channel | GET | `/1/members/{{id}}/notificationsChannelSettings/{{channel}}` | `conn_mod_def::GJ7ReuxK0Cs::P18bsVFcSvGRcykbXrsxhg` |
| Get a Member's Notification Channel Settings | GET | `/1/members/{{id}}/notificationsChannelSettings` | `conn_mod_def::GJ7Rd3bbt2k::-zPEKky_RJKdA6c0XXbUiw` |
| List a Member's Actions | GET | `/members/{{id}}/actions` | `conn_mod_def::GJ7RduYLn38::rkejmpqeSByR0Ob1W6cf3g` |
| List a Member’s Invited Boards | GET | `/1/members/{{id}}/boardsInvited` | `conn_mod_def::GJ7RevQ6-u8::iMTcsfMhSSeUhr60hszV_Q` |
| List a Member's Saved Searches | GET | `/1/members/{{id}}/savedSearches` | `conn_mod_def::GJ7RfhW1Uh0::gCf4_USvQTGM20cxy7i7hQ` |
| List Cards a Member Is On | GET | `/1/members/{{id}}/cards` | `conn_mod_def::GJ7Re3HFoq4::0lELfkRqTaSvDQ7sATCn6g` |
| Search Trello Members | GET | `/search/members/` | `conn_mod_def::GJ7Rhhu2-zg::soSQ-ClnT0mumANQeEqutw` |
| Create an Avatar for a Member | POST | `/members/{{id}}/avatar` | `conn_mod_def::GJ7Rb20xMvs::0wefc0bRQCChzYhP4bJyzg` |
| Delete a Member's Custom Sticker | DELETE | `/1/members/{{id}}/customStickers/{{idSticker}}` | `conn_mod_def::GJ7RcmNwf5U::g_InYx3ZS2qFbapmpuJxjg` |
| Dismiss a Member's One-Time Message | POST | `/1/members/{{id}}/oneTimeMessagesDismissed` | `conn_mod_def::GJ7RdEAvslQ::BmWzQc73QAqtudnS20c4Qw` |

6 more Members actions are available through search.

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization | GET | `/1/organizations/{{id}}` | `conn_mod_def::GJ7Rekd3SOY::LW1nI0jMT2aSP1WpqJM-_A` |
| Get an Organization Field | GET | `/1/organizations/{{id}}/{{field}}` | `conn_mod_def::GJ7RfWO1oK4::0B7tjLmgSCaraq6kcDR4Pw` |
| Get an Organization’s New Billable Guests for a Board | GET | `/1/organizations/{{id}}/newBillableGuests/{{idBoard}}` | `conn_mod_def::GJ7RgIZEvok::2FbOqSRgR-unwZpBG8B3DA` |
| Get an Organization’s Plugin Data | GET | `/organizations/{{id}}/pluginData` | `conn_mod_def::GJ7RhACRdb4::sRli3k2TQkS_w_y0gp2n5Q` |
| List a Member's Organizations (Workspaces) | GET | `/1/members/{{id}}/organizations` | `conn_mod_def::GJ7Rfs2r4zc::H5wiq1gyR36Q8ajZgjuIaQ` |
| List a Workspace's Actions | GET | `/organizations/{{id}}/actions` | `conn_mod_def::GJ7ReWmcIe4::wEzP1GH2TWirD6FjwRd_xQ` |
| Create a Workspace (Organization) | POST | `/organizations` | `conn_mod_def::GJ7Rbnjnecs::rFvjI7lOR2moN0B69_xMuA` |
| Delete a Workspace's Invite Email Domain Restriction | DELETE | `/1/organizations/{{id}}/prefs/orgInviteRestrict` | `conn_mod_def::GJ7Rc7LwqBU::LtnvhK-yRUaUdx84hFVoDw` |
| Delete an Organization | DELETE | `/organizations/{{id}}` | `conn_mod_def::GJ7Rc0bk2I8::BjNxQbZOSE67quzBZg3s2A` |
| Delete an Organization's Logo | DELETE | `/organizations/{{id}}/logo` | `conn_mod_def::GJ7Rc69hLm8::WCZeNoPlQkqV4JRCPib_tA` |
| Remove a Member from a Workspace and All Workspace Boards | DELETE | `/1/organizations/{{id}}/members/{{idMember}}/all` | `conn_mod_def::GJ7RhZm58Kc::RUXQOYITT-y4tWAydY3n0Q` |
| Remove a Member from an Organization (Workspace) | DELETE | `/1/organizations/{{id}}/members/{{idMember}}` | `conn_mod_def::GJ7RhYrWdH8::XEtwd0BoRE6D6iEArzNADA` |

3 more Organizations actions are available through search.

### Checklists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Checklist | GET | `/1/checklists/{{id}}` | `conn_mod_def::GJ7RdOVQkAM::0Da2xcx_T-yJ-zxqI9vXgQ` |
| Get a Checklist’s Checkitem | GET | `/1/checklists/{{id}}/checkItems/{{idCheckItem}}` | `conn_mod_def::GJ7RdPTLTa8::eIK9tWwBT3yDEQM0a8oqIg` |
| Get a Field on a Checklist | GET | `/1/checklists/{{id}}/{{field}}` | `conn_mod_def::GJ7RfPo44-Y::Dl3aNzT9TD2RjvCt7B_PXA` |
| Get the Board for a Checklist | GET | `/1/checklists/{{id}}/board` | `conn_mod_def::GJ7RglKgn-M::Q_a1b3HpToyy3kJ1YQSlLg` |
| Get the Cards on a Checklist | GET | `/1/checklists/{{id}}/cards` | `conn_mod_def::GJ7RglBrgjo::fZVQ57aAR-e2HhtEsTJhMg` |
| List a Board's Checklists | GET | `/1/boards/{{id}}/checklists` | `conn_mod_def::GJ7Re_EpB_U::uNxSpEouRgmcwAIUb1s7cQ` |
| List a Card's Checklists | GET | `/cards/{{id}}/checklists` | `conn_mod_def::GJ7Re_00CGQ::J5WSgmjuR42tJn5eBf-UTw` |
| Create a Checklist on a Card | POST | `/checklists` | `conn_mod_def::GJ7RbPV9_lc::AzyyYvQzTwWcKLLvdc_Meg` |
| Create a Checklist on a Card | POST | `/cards/{{id}}/checklists` | `conn_mod_def::GJ7Rb3We9bU::xOqctV__RzSwLOaWDQxzgA` |
| Delete a Check Item from a Checklist | DELETE | `/1/checklists/{{id}}/checkItems/{{idCheckItem}}` | `conn_mod_def::GJ7Rc0rmaXw::k8-7irSfRSiF6BERSmF02g` |
| Delete a Checklist | DELETE | `/checklists/{{id}}` | `conn_mod_def::GJ7RcfY2slU::LSvM9QyVTVmI8XV6FzdYEw` |
| Update a Checklist | PUT | `/1/checklists/{{id}}` | `conn_mod_def::GJ7RhuCffqY::81YDiLz5R3-ySCoCFJFFAA` |

1 more Checklists actions are available through search.

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List | GET | `/1/lists/{{id}}` | `conn_mod_def::GJ7RdjxaujA::Gms01fH_SBObFh9rsts4cQ` |
| Get Filtered Lists on a Board | GET | `/1/boards/{{id}}/lists/{{filter}}` | `conn_mod_def::GJ7RfaAzL-4::Df5au29MSnGljhODgVCf4w` |
| List a Board’s Lists | GET | `/boards/{{id}}/lists` | `conn_mod_def::GJ7RfXy1Znc::RVm-tOqxRouIlXWFI9v5Ow` |
| List Actions for a List | GET | `/1/lists/{{id}}/actions` | `conn_mod_def::GJ7ReNu_-Tw::eJC5pZEFQSGOVRihQkvHIA` |
| Archive All Cards in a List | POST | `/lists/{{id}}/archiveAllCards` | `conn_mod_def::GJ7RbE0Nli8::6_Ci4OSbRUKUDZ1DIjoKlg` |
| Archive or Unarchive a List | PUT | `/lists/{{id}}/closed` | `conn_mod_def::GJ7RbGxgtyg::h3Tl9jrWS6uTsUq76sy-XQ` |
| Create a List on a Board | POST | `/1/boards/{{id}}/lists` | `conn_mod_def::GJ7RbY9niGg::Yf8ixb3kT4qInYUGJXhGRg` |
| Create a New List on a Board | POST | `/lists` | `conn_mod_def::GJ7RbjFMIDo::SGta_soaRcaaLD_Z4GMaaw` |
| Move a List to a Different Board | PUT | `/lists/{{id}}/idBoard` | `conn_mod_def::GJ7RhQ7tVoU::Ir8aMSoyQdyOos8G1HJRDw` |
| Move All Cards in a List | POST | `/1/lists/{{id}}/moveAllCards` | `conn_mod_def::GJ7RhQmBfc8::Egw-R29TRQi-nzeghxMc8w` |
| Update a Field on a List | PUT | `/1/lists/{{id}}/{{field}}` | `conn_mod_def::GJ7Rh5jXrJg::OJMspZoGTCib414K2Qbphg` |
| Update a List | PUT | `/1/lists/{{id}}` | `conn_mod_def::GJ7RiDsBVHw::8Qf-fMBhRUmApYnvrWkyZw` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Field of a Notification | GET | `/1/notifications/{{id}}/{{field}}` | `conn_mod_def::GJ7RddnWHZ0::gitnwtxMQt2L-c_4inZU9Q` |
| Get a Notification | GET | `/1/notifications/{{id}}` | `conn_mod_def::GJ7Rd-r4VmU::NjvxtxY1RJi2J5g9z7ingw` |
| Get a Notification’s Associated Organization | GET | `/1/notifications/{{id}}/organization` | `conn_mod_def::GJ7Rd45mT3U::b9OFdFH3SxGJtQ8B4_ZNmA` |
| Get a Notification’s Board | GET | `/1/notifications/{{id}}/board` | `conn_mod_def::GJ7RgYQ41dQ::FmSf6I7GTtOEwEnyvbR2eg` |
| Get a Notification’s Card | GET | `/1/notifications/{{id}}/card` | `conn_mod_def::GJ7Rgl_fXus::qkIYy7XgT7aBxPHsl6DsGA` |
| Get a Notification’s Creator Member | GET | `/1/notifications/{{id}}/memberCreator` | `conn_mod_def::GJ7Rg5JeMPU::bOv4fsaHRS-yOFVc3YjGlw` |
| Get a Notification’s List | GET | `/1/notifications/{{id}}/list` | `conn_mod_def::GJ7RgxPtn0w::RoAF0kC7R4egI463Vh9e8Q` |
| Get a Notification’s Related Member (Not the Creator) | GET | `/1/notifications/{{id}}/member` | `conn_mod_def::GJ7RgtmGQ-A::GsRngPJ_QWaifNTcXPxqZA` |
| Mark All Notifications as Read | POST | `/notifications/all/read` | `conn_mod_def::GJ7RhRFiHOs::GNphRMY2RB6Js-g79_SnFw` |
| Update a Notification’s Read Status | PUT | `/1/notifications/{{id}}` | `conn_mod_def::GJ7RiKvYxbk::iw1b6fGGRmyRx5YfJYOpCA` |
| Update a Notification’s Read Status | PUT | `/1/notifications/{{id}}/unread` | `conn_mod_def::GJ7RisE1_WU::50YLtsUtSJuCAJUWav-fYA` |

### Actions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List for an Action | GET | `/1/actions/{{id}}/list` | `conn_mod_def::GJ7RgtM2LYs::EZV_GIQJT2yWIsID0p1mgQ` |
| Get an Action | GET | `/1/actions/{{id}}` | `conn_mod_def::GJ7ReYcLCPY::0i_tog2yRkGnFJpJTVKwrw` |
| Get an Action Field | GET | `/1/actions/{{id}}/{{field}}` | `conn_mod_def::GJ7ReFGt1jU::rPB0o_0ZTdWxDqWA-sOaCQ` |
| Get an Action’s Member Creator | GET | `/1/actions/{{id}}/memberCreator` | `conn_mod_def::GJ7RgsnAgq8::UbxKpovBRqOTJvQLkKIGZw` |
| Get an Action’s Organization | GET | `/actions/{{id}}/organization` | `conn_mod_def::GJ7Rg_-Luz0::w26_VvsXQDyKeTJIJEAWNg` |
| Get the Member of an Action | GET | `/1/actions/{{id}}/member` | `conn_mod_def::GJ7Rg5Gxq0g::tZ25s2wSRtW88sEde8WDiQ` |
| List an Action's Reaction Summary | GET | `/1/actions/{{idAction}}/reactionsSummary` | `conn_mod_def::GJ7RhJh89Fw::02oMFKY-T1qjUXLsgFmNpQ` |

3 more Actions actions are available through search.

This lists 90 of 256 actions. For anything not here, call `search_one_platform_actions` with platform `trello`. The full catalog is at https://www.withone.ai/knowledge/trello.

## When a call fails

The error comes from Trello, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/trello

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
