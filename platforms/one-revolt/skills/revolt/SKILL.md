---
name: revolt
description: Revolt is an open-source messaging and community platform that provides real-time chat, voice channels, and developer APIs, allowing teams and online communities to build custom communication experiences, automate workflows, and integrate messaging features into their applications. Read and write Revolt data through One: users, channels, webhooks, messages, account, bots and more, 125 actions with real parameter documentation. Use whenever the user asks to look something up in Revolt, create or update a record there, or build code against the Revolt API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: revolt
  generated-from: one-knowledge-base
---

# Revolt through One

Revolt is an open-source messaging and community platform that provides real-time chat, voice channels, and developer APIs, allowing teams and online communities to build custom communication experiences, automate workflows, and integrate messaging features into their applications.

One exposes Revolt through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `revolt` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Revolt is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Revolt account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a User | GET | `/users/{{target}}` | `conn_mod_def::GMbedCXQY9g::bBVcqg-WROGfe4HIKfatEQ` |
| Fetch Default Avatar for a User | GET | `/users/{{target}}/default_avatar` | `conn_mod_def::GMbec7HsORA::haYWx3iBR02inWzJk3Nx-w` |
| Fetch User Profile | GET | `/users/{{target}}/profile` | `conn_mod_def::GMbedCQaN_g::lg-K8l-rQTGj_f_YA34VYg` |
| Get the Signed-in User Profile | GET | `/users/@me` | `conn_mod_def::GMbec5Q_kuA::8DDIiJOCQCq0RTNV0XeOuw` |
| Open Direct Message with a User | GET | `/users/{{target}}/dm` | `conn_mod_def::GMbeaKGAwDg::iv5icr8vRg2MHB_kAOiFaw` |
| Accept a Friend Request for a User | PUT | `/users/{{target}}/friend` | `conn_mod_def::GMbebQ77FbA::tnUtvtJESZeUWEn5zrQUMQ` |
| Block User | PUT | `/users/{{target}}/block` | `conn_mod_def::GMbebOcf4ig::yQaFp9tWQMCwZ0jRJ0QHig` |
| Change Username for the Signed-in User | PATCH | `/users/@me/username` | `conn_mod_def::GMbec2hDbTg::d7qZk9D7Ql2IEPqJ-TIJlw` |
| Deny a Friend Request or Remove a Friend | DELETE | `/users/{{target}}/friend` | `conn_mod_def::GMbebbBkQHA::uJo_MyIaSc607I6zg5MMTQ` |
| Edit a User | PATCH | `/users/{{target}}` | `conn_mod_def::GMbec426N2g::x44Xc_vVS4ypagz9bZNGlw` |
| Send Friend Request | POST | `/users/friend` | `conn_mod_def::GMbebdUPt9g::0tYsH_KUSky9HMfDS6ip6A` |
| Unblock User | DELETE | `/users/{{target}}/block` | `conn_mod_def::GMbebcGv3TA::kRfA7wlpQNqdbCGSpKj1RQ` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Channel | GET | `/channels/{{target}}` | `conn_mod_def::GMbeZ-KhcGg::ZyJFWLynQPSdtH4ZuR4HGw` |
| Acknowledge a Channel Message | PUT | `/channels/{{target}}/ack/{{message}}` | `conn_mod_def::GMbeajTg6Tg::V4X5dJ4GRZq2nmCaQAaFwQ` |
| Close Channel | DELETE | `/channels/{{target}}` | `conn_mod_def::GMbeZ2_lqKA::AJH-1tOlR4ezV0hoikuaOg` |
| Create a Channel for a Server | POST | `/servers/{{server}}/channels` | `conn_mod_def::GMbeblBJZyg::aCDjhGOVRyWiw0-HZjblOw` |
| Create Group Channel | POST | `/channels/create` | `conn_mod_def::GMbeaSKpuQg::qEwRasvuROyfp1N5r0s0Cg` |
| Edit a Channel | PATCH | `/channels/{{target}}` | `conn_mod_def::GMbeZ-F8swA::gGWMNGQORD2cWLhyfCvQtQ` |
| Join Call for a Channel | POST | `/channels/{{target}}/join_call` | `conn_mod_def::GMbedEX96Ig::zppfbYwsQlGdTF132xgpyA` |
| Set Default Permission for a Channel | PUT | `/channels/{{target}}/permissions/default` | `conn_mod_def::GMbeaBFqG8A::J6HT-0o9T3ynB45D2c-qBg` |
| Set Role Permission for a Channel | PUT | `/channels/{{target}}/permissions/{{roleId}}` | `conn_mod_def::GMbeaAkzHJA::cZ-f990AShuLlp1RAAM0HA` |
| Stop Ring in a Channel Call | PUT | `/channels/{{target}}/end_ring/{{targetUser}}` | `conn_mod_def::GMbedL39e3g::EfW-2weHRjKan2nAB-NU_Q` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/webhooks/{{webhookId}}` | `conn_mod_def::GMbedgqF1tg::qw5y64nlT_qQ9VsOiRITTQ` |
| Get a Webhook by Token | GET | `/webhooks/{{webhookId}}/{{token}}` | `conn_mod_def::GMbedgMar0A::e1xBLWNaStSq0iBbOPOIIg` |
| List a Channel's Webhooks | GET | `/channels/{{channelId}}/webhooks` | `conn_mod_def::GMbedfO4uhA::3EgA-V6aRHidxu0T0gI3QA` |
| Create a Webhook for a Channel | POST | `/channels/{{channelId}}/webhooks` | `conn_mod_def::GMbedM_GgbA::4q5u1H96TbaR8eY6L4j8rA` |
| Delete a Webhook | DELETE | `/webhooks/{{webhookId}}` | `conn_mod_def::GMbedXd_ZXA::tVaCwyyPSN6RRqGuWfL95A` |
| Delete a Webhook by Token | DELETE | `/webhooks/{{webhookId}}/{{token}}` | `conn_mod_def::GMbedNiCj2A::LlOjsQ2dRMiO_pNMVsrmxg` |
| Edit a Webhook | PATCH | `/webhooks/{{webhookId}}` | `conn_mod_def::GMbedWhfoZA::xvYCioDvTx6S98oB86GSBw` |
| Edit a Webhook by Token | PATCH | `/webhooks/{{webhookId}}/{{token}}` | `conn_mod_def::GMbedVZDR1A::qnrPE0UZQ-Cdzh57ORw-Nw` |
| Execute a GitHub Webhook | POST | `/webhooks/{{webhookId}}/{{token}}/github` | `conn_mod_def::GMbedgMsgcA::21ljULRHSj-n7EOJ20bBgA` |
| Execute a Webhook | POST | `/webhooks/{{webhookId}}/{{token}}` | `conn_mod_def::GMbedfWCTrA::Eqf0qsx3RqCO1wrKTsX1bw` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Message from a Channel | GET | `/channels/{{target}}/messages/{{msg}}` | `conn_mod_def::GMbeavWFqxA::osz41wqNQKG-WsJ7dysHqA` |
| List Messages in a Channel | GET | `/channels/{{target}}/messages` | `conn_mod_def::GMbeazYnz5A::0S-2n-Z3Qvm8vRdaaCKxBg` |
| Add Reaction to a Message | PUT | `/channels/{{target}}/messages/{{msg}}/reactions/{{emoji}}` | `conn_mod_def::GMbeaaEYFhg::jdv8t2bPR8i-PWZvilNx2w` |
| Bulk Delete Messages in a Channel | DELETE | `/channels/{{target}}/messages/bulk` | `conn_mod_def::GMbeakliLbg::J-xS07NrR4KPPXO5Ik_pLg` |
| Remove All Reactions from Message | DELETE | `/channels/{{target}}/messages/{{msg}}/reactions` | `conn_mod_def::GMbeabD0-_A::TA2ByUnIQ5K673tsZ6bOuA` |
| Remove Reactions to a Message | DELETE | `/channels/{{target}}/messages/{{msg}}/reactions/{{emoji}}` | `conn_mod_def::GMbeabwH3mg::VlKxYLFJSWeDgy5p2Hy5rQ` |
| Search for Messages in a Channel | POST | `/channels/{{target}}/search` | `conn_mod_def::GMbeaveyXrA::xUkIo1IzRVK22-H3gBWbOg` |
| Send a Message to a Channel | POST | `/channels/{{target}}/messages` | `conn_mod_def::GMbea-NCR3g::phRjrxkqQrSXxk4djSz6qA` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Change Email | PATCH | `/auth/account/change/email` | `conn_mod_def::GMbeZXSJ7kA::g8NkKoZaRbO3YSjMV-UI1Q` |
| Change Password | PATCH | `/auth/account/change/password` | `conn_mod_def::GMbeZXb-GsA::rb16gRLgQruRC59ogqnOrw` |
| Delete Account | POST | `/auth/account/delete` | `conn_mod_def::GMbeZYdLbdg::68m_1qgYQOuJ7RCXVPgxBg` |
| Disable Account | POST | `/auth/account/disable` | `conn_mod_def::GMbeZeVnm4A::Y_hmypQHTC2kcJKiw4lE5Q` |
| Reset Password | PATCH | `/auth/account/reset_password` | `conn_mod_def::GMbeZgZ46LA::Zdg--wl5Sb6ZcG2wsEkBFQ` |
| Send Password Reset | POST | `/auth/account/reset_password` | `conn_mod_def::GMbeZkgdK1A::jLuDGWUeSRGI7r5eyqFWKw` |
| Verify Email | POST | `/auth/account/verify/{{code}}` | `conn_mod_def::GMbeZrEriFg::5ogJ3VbnSuqi5CWZqa3atA` |

### Bots

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Bot by ID | GET | `/bots/{{botId}}` | `conn_mod_def::GMbeZ1zu1LA::grzFe7Q9Sa2y0n_KpOCUzg` |
| Fetch Public Bot Invite | GET | `/bots/{{target}}/invite` | `conn_mod_def::GMbeZ3Ht2Jg::KlBB8tLSRfmMnxZVvPYQFA` |
| Fetch the Signed-in User's Owned Bots | GET | `/bots/@me` | `conn_mod_def::GMbeZ2LvYCg::c5zmhZdIQZeGLJCU4O4xNg` |
| Create Bot | POST | `/bots/create` | `conn_mod_def::GMbeZsBmD8g::PNB2ikQdT72G89XFnZwq0w` |
| Delete a Bot | DELETE | `/bots/{{botId}}` | `conn_mod_def::GMbeZriIzUA::jRcc2973T5y1-7OIC-40eQ` |
| Edit a Bot | PATCH | `/bots/{{botId}}` | `conn_mod_def::GMbeZrwfs4g::5gQ6eWsVQiyoTMuIetKnvA` |
| Invite a Bot | POST | `/bots/{{target}}/invite` | `conn_mod_def::GMbeZ12i2qA::MfTiT6ImRk6BYRQ8oC0bfw` |

### Servers

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Server | GET | `/servers/{{target}}` | `conn_mod_def::GMbeblZ-e9g::SKwGxgGgQrK-vP_Dvu52sw` |
| Create Server | POST | `/servers/create` | `conn_mod_def::GMbebk0PI7g::yDV-8_OES9ecOldRuis_Lg` |
| Delete or Leave a Server | DELETE | `/servers/{{target}}` | `conn_mod_def::GMbebmtH4TA::OGfIFurIShy3YMlplXxQYQ` |
| Edit a Server | PATCH | `/servers/{{target}}` | `conn_mod_def::GMbebm1g8Xg::nqUWuhHpR7-6yfIUd-W8eA` |
| Edit Server Role Ranks | PATCH | `/servers/{{target}}/roles/ranks` | `conn_mod_def::GMbecJxa64A::Cmw2vtvGSZGO-IwO_pOwCg` |
| Mark Server As Read | PUT | `/servers/{{target}}/ack` | `conn_mod_def::GMbebttKPeg::-oolhN8BQpy-T3zMQOQMXg` |
| Set Default Permission for a Server | PUT | `/servers/{{target}}/permissions/default` | `conn_mod_def::GMbecRvQf2A::FgNoWL6xRoClVDX7CzgsmQ` |

### ServerRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Server Role by ID | GET | `/servers/{{target}}/roles/{{roleId}}` | `conn_mod_def::GMbecIoQiBg::r1luNvWfQ2uNT_Kbbm3Rjg` |
| Create a Role for a Server | POST | `/servers/{{target}}/roles` | `conn_mod_def::GMbecHUmDgA::eVBF9YzRQUe_LpPafJfNwA` |
| Delete a Server Role | DELETE | `/servers/{{target}}/roles/{{roleId}}` | `conn_mod_def::GMbecG_adsA::o9Cj5ZL6Sv2RLifF7sp9OA` |
| Edit a Server Role by ID | PATCH | `/servers/{{target}}/roles/{{roleId}}` | `conn_mod_def::GMbecG9wK9A::rStU0gaORkKPXk8cyiZBxg` |
| Set Role Permission for a Server Role | PUT | `/servers/{{target}}/permissions/{{roleId}}` | `conn_mod_def::GMbecSxrbag::PbxfTyMFT2aUJk0sFThi6A` |

### Emoji

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Emoji | GET | `/custom/emoji/{{emojiId}}` | `conn_mod_def::GMbeaR1foJg::YdKJ96U-SvuM7sCBqln6kg` |
| Create New Emoji | PUT | `/custom/emoji/{{emojiId}}` | `conn_mod_def::GMbeaISpTCg::dJzPv1Y6RKiVXT4r04ai9g` |
| Delete Emoji | DELETE | `/custom/emoji/{{emojiId}}` | `conn_mod_def::GMbeaJEwzUA::jo1iQyfNSM-Z5CiTJXz8dw` |
| Edit an Emoji by ID | PATCH | `/custom/emoji/{{emojiId}}` | `conn_mod_def::GMbeaSlQSIA::e2pLHcQ5TkCoQ6M0pUfAJw` |

### Invites

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch an Invite | GET | `/invites/{{target}}` | `conn_mod_def::GMbeakMbx3A::EAMVrl3DSW2F622srUU9LA` |
| Fetch Invites for a Server | GET | `/servers/{{target}}/invites` | `conn_mod_def::GMbebutFkNA::mHEiidTVTS2LHRuCq72anw` |
| Delete Invite | DELETE | `/invites/{{target}}` | `conn_mod_def::GMbeacOxbpA::dPVd5OPVS9yyBho_UWYdxQ` |
| Join an Invite | POST | `/invites/{{target}}` | `conn_mod_def::GMbeajl1Tgg::dx6d5xlZTjOgIBtR8gaITw` |

### ChannelMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Channel Message | DELETE | `/channels/{{target}}/messages/{{msg}}` | `conn_mod_def::GMbealejLkA::BSiUhF2BTg2e2rnRR8GK_g` |
| Edit a Channel Message | PATCH | `/channels/{{target}}/messages/{{msg}}` | `conn_mod_def::GMbeauQpSVg::UYuGK2DlQZOnEaVni7zFbg` |
| Pin a Channel Message | POST | `/channels/{{target}}/messages/{{msg}}/pin` | `conn_mod_def::GMbeavbDqVA::TP9GSXKHQ66UrYX4m9COEw` |
| Unpin a Channel Message | DELETE | `/channels/{{target}}/messages/{{msg}}/pin` | `conn_mod_def::GMbea9rxFUA::wDk2dvnzTRGALTGSidYWLg` |

### ServerMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Server Member | GET | `/servers/{{serverId}}/members/{{memberId}}` | `conn_mod_def::GMbeb7Uh3aA::vinVAe57TbmBaWac7jAbTw` |
| Query Server Members by Name | GET | `/servers/{{target}}/members_experimental_query` | `conn_mod_def::GMbeb9hEMIA::evxIM7EZQBOGRIHnbYkZSQ` |
| Edit a Server Member by ID | PATCH | `/servers/{{serverId}}/members/{{memberId}}` | `conn_mod_def::GMbebuuN5HA::4muzv8yDQD-6J8nhbjYoYA` |
| Kick a Server Member | DELETE | `/servers/{{serverId}}/members/{{memberId}}` | `conn_mod_def::GMbeb-brC0A::DtDOQ5LkRA-_VteugOvZHg` |

### ServerBans

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Bans for a Server | GET | `/servers/{{target}}/bans` | `conn_mod_def::GMbebvlzmeA::eHEAJNpjQEK-bcLatZqkEQ` |
| Ban a User from a Server | PUT | `/servers/{{server}}/bans/{{target}}` | `conn_mod_def::GMbebuTAFhg::ocVvaxTrSjSmEJtFvp1vlg` |
| Unban a User from a Server | DELETE | `/servers/{{server}}/bans/{{target}}` | `conn_mod_def::GMbeb-KnDHg::kC7u327qQg6sd3XnlY47oA` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch All Sessions | GET | `/auth/session/all` | `conn_mod_def::GMbecS5pDoA::CDG9jgkeSoiqiRAJEvI4gQ` |
| Delete All Sessions | DELETE | `/auth/session/all` | `conn_mod_def::GMbecTKi1Bg::sR_BVj7ERf6hfO-6sljv1A` |
| Edit Session | PATCH | `/auth/session/{{id}}` | `conn_mod_def::GMbecXN6QTg::lJsAoKjMSb-tAXXY1zestA` |

### Session

| Action | Method | Path | Action id |
|---|---|---|---|
| Login | POST | `/auth/session/login` | `conn_mod_def::GMbecfJqKlg::qdLLHvzmTr6uyJCZgXIWKg` |
| Logout | POST | `/auth/session/logout` | `conn_mod_def::GMbech_hP9A::7cezfQs0SbipkQcWVwz0Fg` |

1 more Session actions are available through search.

This lists 90 of 125 actions. For anything not here, call `search_one_platform_actions` with platform `revolt`. The full catalog is at https://www.withone.ai/knowledge/revolt.

## When a call fails

The error comes from Revolt, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/revolt

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
