---
name: files-com
description: Files.com is a cloud-based file transfer and automation platform that provides managed file transfer, secure file sharing, and storage integrations through APIs, allowing businesses and developers to exchange, sync, and automate file workflows across internal systems, partners, and cloud services. Read and write Files.com data through One: users, remoteservers, apikeys, groupusers, publickeys, syncs and more, 347 actions with real parameter documentation. Use whenever the user asks to look something up in Files.com, create or update a record there, or build code against the Files.com API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: files-com
  generated-from: one-knowledge-base
---

# Files.com through One

Files.com is a cloud-based file transfer and automation platform that provides managed file transfer, secure file sharing, and storage integrations through APIs, allowing businesses and developers to exchange, sync, and automate file workflows across internal systems, partners, and cloud services.

One exposes Files.com through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `files-com` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Files.com is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Files.com account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/api/rest/v1/users` | `conn_mod_def::GKxd_Hzqj4A::Dk3PcDFbRyONBve265aatw` |
| Show a User | GET | `/users/{{id}}` | `conn_mod_def::GKxd_Qy-efA::_7SLsr78TdC6QmqbS84SkQ` |
| Create a User in a Group | POST | `/groups/{{groupId}}/users` | `conn_mod_def::GKxd18ZNB0A::DLcyv57XSTSFhRdH7wpPFg` |
| Create User | POST | `/api/rest/v1/users` | `conn_mod_def::GKxd-zBJNbA::nKo7VkKkRySVjAHCJCdcUA` |
| Delete a User | DELETE | `/users/{{id}}` | `conn_mod_def::GKxd-zE24XA::_4s26CndTcGwgrQyyjMtDg` |
| Resend a User's Welcome Email | POST | `/users/{{id}}/resend_welcome_email` | `conn_mod_def::GKxd_PlZU9A::knaNtZ-7R32mTPvAX5Hjuw` |
| Trigger a User's 2FA Reset Process | POST | `/users/{{id}}/2fa/reset` | `conn_mod_def::GKxd_Q0nOlg::0IrI-MdDTmeGE89QlJsQmA` |
| Unlock a User | POST | `/users/{{id}}/unlock` | `conn_mod_def::GKxd_QgTKfA::W9Kdm0VTTlCF7CMq6NYqVw` |
| Update a User | PATCH | `/users/{{id}}` | `conn_mod_def::GKxd_XAcDXg::rhOJeALjR2O_DOkmZFvxYQ` |

### RemoteServers

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Remote Server Configuration File | GET | `/remote_servers/{{id}}/configuration_file` | `conn_mod_def::GKxd6tz6Dqg::mvETOWq0QGmPe9Jk2DqjKw` |
| List Remote Servers | GET | `/api/rest/v1/remote_servers` | `conn_mod_def::GKxd6v-WfDA::-iRBeV9kSEWw99qGv4u-Ww` |
| Show a Remote Server | GET | `/remote_servers/{{id}}` | `conn_mod_def::GKxd66MjD6g::5ohrBg7jS9Sbm6YmUnvgnA` |
| Create a Remote Server | POST | `/api/rest/v1/remote_servers` | `conn_mod_def::GKxd6g7g9tA::5gyu1WqjRxiEbhMIF8seGQ` |
| Delete a Remote Server | DELETE | `/remote_servers/{{id}}` | `conn_mod_def::GKxd6udlUvg::n9BSvZOhTq--wLIqU4lUPQ` |
| Post a Remote Server Configuration File | POST | `/remote_servers/{{id}}/configuration_file` | `conn_mod_def::GKxd6u1BDKg::-MV7aGIYSX-Wvmvo19Z-kw` |
| Push Update to a Remote Server's Files Agent | POST | `/remote_servers/{{id}}/agent_push_update` | `conn_mod_def::GKxd6uiItLg::XzsKEu-VQ-6Lw2MXujHs8g` |
| Update a Remote Server | PATCH | `/remote_servers/{{id}}` | `conn_mod_def::GKxd66eo2jA::TxUoSREYRJemgJ2KZTFKbw` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's API Keys | GET | `/user/api_keys` | `conn_mod_def::GKxd996ZU9g::6uCub7gBRvmH1F2blLgYpQ` |
| List a User's API Keys | GET | `/users/{{userId}}/api_keys` | `conn_mod_def::GKxd-2cmGeA::OZuf4RngQAmj93jjgdMwoQ` |
| List API Keys | GET | `/api/rest/v1/api_keys` | `conn_mod_def::GKxdwIlMMFg::hVoZOvyrT4qmWPwIVBrJ8A` |
| List Site API Keys | GET | `/api/rest/v1/site/api_keys` | `conn_mod_def::GKxd8RQUQwg::-Mtr97daQumb98ChwC5EfA` |
| Show an API Key | GET | `/api_keys/{{id}}` | `conn_mod_def::GKxdwRW0NFA::fSqYKrzFRAWm2QYDq9uD6Q` |
| Create API Key | POST | `/api/rest/v1/api_keys` | `conn_mod_def::GKxdwJLW6Eg::AHV95__5TYapxEn9K_V5xg` |
| Delete an API Key | DELETE | `/api_keys/{{id}}` | `conn_mod_def::GKxdwHeC3AA::QKUEE8GRQwiBRCpAVZmjdA` |
| Update an API Key | PATCH | `/api_keys/{{id}}` | `conn_mod_def::GKxdwSilVzg::VI4Z3LWGQOyeC0HPPVEtKg` |

### GroupUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Group's Users | GET | `/groups/{{groupId}}/users` | `conn_mod_def::GKxd1-COctg::nL1MUmVNSm6-VhmAC_6yCQ` |
| List a User's Group Users | GET | `/users/{{userId}}/groups` | `conn_mod_def::GKxd-1STN-A::Fcq4kMkMT_ahZh9WqaCXaQ` |
| List Group Users | GET | `/api/rest/v1/user/groups` | `conn_mod_def::GKxd-G88cUA::njWsbOcgQDib3cb5XVIEXA` |
| List Group Users | GET | `/api/rest/v1/group_users` | `conn_mod_def::GKxd1o7Dxzg::vcjsKvc9TRiIeK5atmVb5Q` |
| Create Group User | POST | `/api/rest/v1/group_users` | `conn_mod_def::GKxd1nJ7mtg::DtXIKqBvRHSHounmpxAZoQ` |
| Delete a Group User | DELETE | `/group_users/{{id}}` | `conn_mod_def::GKxd1y97CwA::Ax2nx7lWRAWkjVJF_ijdQA` |
| Update a Group User | PATCH | `/group_users/{{id}}` | `conn_mod_def::GKxd1oion0A::Ea6jKsYISeyJTcXNoVTPNg` |
| Update a Group User Membership | PATCH | `/groups/{{groupId}}/memberships/{{userId}}` | `conn_mod_def::GKxd2IFUwjA::mzCimsW_QK6d6zTEevLspQ` |

### PublicKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Public Keys | GET | `/users/{{userId}}/public_keys` | `conn_mod_def::GKxd_C-1QYg::wKlON-FkS5C4V3cESZbKWQ` |
| List Public Keys | GET | `/public_keys` | `conn_mod_def::GKxd539AOFg::lz8rqtHOTjCou1xI2LLk7g` |
| List User Public Keys | GET | `/user/public_keys` | `conn_mod_def::GKxd-JJH2PA::j0KgD1d5SrSWuddyObkHsA` |
| Show a Public Key | GET | `/public_keys/{{id}}` | `conn_mod_def::GKxd6BgjmAg::FhmsyzI1Rb-BQYr3_mRkHg` |
| Create Public Key | POST | `/api/rest/v1/public_keys` | `conn_mod_def::GKxd51utAwg::svp8DTlBS3m0E-u4-3XU8A` |
| Delete a Public Key | DELETE | `/public_keys/{{id}}` | `conn_mod_def::GKxd509Ge1g::T_HQvJySSU-gwC2lhE8t3w` |
| Update a Public Key | PATCH | `/api/rest/v1/public_keys/{{id}}` | `conn_mod_def::GKxd6CkAKwA::V_7bddPlTiekHu3HaKCroQ` |

### Syncs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Syncs | GET | `/syncs` | `conn_mod_def::GKxd9hnCemg::gwh_E5maSGmtg314P5wruA` |
| Show a Sync | GET | `/syncs/{{id}}` | `conn_mod_def::GKxd9K78Bng::PLmXOhTEREC9OdLk1L_PzA` |
| Create a Sync | POST | `/api/rest/v1/syncs` | `conn_mod_def::GKxd8-Dj9Fg::ql6xF0_SRNSP_Vpg53Lybw` |
| Delete Sync | DELETE | `/syncs/{{id}}` | `conn_mod_def::GKxd895J-Cg::7rqvcBDwSHCCNDUM0fG59Q` |
| Dry Run a Sync | POST | `/syncs/{{id}}/dry_run` | `conn_mod_def::GKxd9PeNU4g::FgGGbPp0QYGPOsIr3dG-HA` |
| Manually Run a Sync | POST | `/syncs/{{id}}/manual_run` | `conn_mod_def::GKxd9Mq_FLg::wsSTnF7HQWi2zPWzp00KZg` |
| Update a Sync | PATCH | `/syncs/{{id}}` | `conn_mod_def::GKxd9VNpSXg::9xGBuwUOTaGeDxkE7dKpdw` |

### FileActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Find File or Folder Metadata by Path | GET | `/file_actions/metadata/{{path}}` | `conn_mod_def::GKxd0UBISzg::KUWOcvTTQTin7-6HG5kyGw` |
| List the Contents of a ZIP File | GET | `/file_actions/zip_list/{{path}}` | `conn_mod_def::GKxd0WTGLqg::PANsxb93TRGFp7K0ngGmMQ` |
| Begin File Upload for a Path | POST | `/api/rest/v1/file_actions/begin_upload/{{path}}` | `conn_mod_def::GKxd0Gm-X4A::hTDdsp8lRzGKI_tl7capLA` |
| Copy File or Folder at a Path | POST | `/file_actions/copy/{{path}}` | `conn_mod_def::GKxd0RXrCIA::ukZV3XEnT6Kj7ITuJi-TCg` |
| Create a ZIP From One or More Paths | POST | `/api/rest/v1/file_actions/zip` | `conn_mod_def::GKxd0Sf2_3A::BqxI3pFET1iDRI75vjw8aQ` |
| Extract a ZIP File to a Destination Folder | POST | `/api/rest/v1/file_actions/unzip` | `conn_mod_def::GKxd0Sf9a_g::7WN_HTqdSTSfGkI7jllgIw` |
| Move a File or Folder | POST | `/file_actions/move/{{path}}` | `conn_mod_def::GKxd0hYGmfA::wqpGh4cYQPWVWBfuIx4h3Q` |

### RemoteMountBackends

| Action | Method | Path | Action id |
|---|---|---|---|
| List Remote Mount Backends | GET | `/api/rest/v1/remote_mount_backends` | `conn_mod_def::GKxd6UMAOvg::JqbPZwaeTIWPiF7fmH7IHg` |
| Show a Remote Mount Backend | GET | `/remote_mount_backends/{{id}}` | `conn_mod_def::GKxd6THiYRA::Nd4dlM5oQCaBJw0-Zvtqzg` |
| Create a Remote Mount Backend | POST | `/api/rest/v1/remote_mount_backends` | `conn_mod_def::GKxd6DxRAeg::lsCYKHqPReOcIebxrDAirA` |
| Delete a Remote Mount Backend | DELETE | `/remote_mount_backends/{{id}}` | `conn_mod_def::GKxd6CkXUMg::NaFKwLBzT3mN4mzwoYLrsg` |
| Reset a Remote Mount Backend's Status to Healthy | POST | `/remote_mount_backends/{{id}}/reset_status` | `conn_mod_def::GKxd6Usqvtg::o4hGV-PWQ_OucrxQzuIGlw` |
| Update a Remote Mount Backend | PATCH | `/remote_mount_backends/{{id}}` | `conn_mod_def::GKxd6TGjAmg::BX4hUvCrT-yoy_ZUjKYsjA` |

### Snapshots

| Action | Method | Path | Action id |
|---|---|---|---|
| List Snapshots | GET | `/snapshots` | `conn_mod_def::GKxd8qHWuUA::WqEzG_1URbCZyi5RnmQ0OA` |
| Show Snapshot | GET | `/snapshots/{{id}}` | `conn_mod_def::GKxd8qGHGnA::-atHBFjpTXWHTj_1J_ZgPg` |
| Create Snapshot | POST | `/api/rest/v1/snapshots` | `conn_mod_def::GKxd8gneF1A::rzbA1Xf2T7KtnK4BX6iltg` |
| Delete Snapshot | DELETE | `/snapshots/{{id}}` | `conn_mod_def::GKxd8gJ3otg::d1LzCIkdRAGQ29auipWAPw` |
| Finalize a Snapshot | POST | `/snapshots/{{id}}/finalize` | `conn_mod_def::GKxd8qRlrTg::OKYNimvsSyKYcUBH3MYrhA` |
| Update a Snapshot | PATCH | `/snapshots/{{id}}` | `conn_mod_def::GKxd8rlXHJA::zuSrD1-9QuSrHpKjLsNiuw` |

### Automations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Automations | GET | `/api/rest/v1/automations` | `conn_mod_def::GKxdxeVX3yg::f6ad4rloSPiZg9RP9-qt1w` |
| Show Automation | GET | `/automations/{{id}}` | `conn_mod_def::GKxdxoPCc9A::PcffxHJOSbi4MTLqmI7Ovg` |
| Create Automation | POST | `/automations` | `conn_mod_def::GKxdxIuZBdA::Z7GyJo0NR0yWaC2H5eBt8w` |
| Delete an Automation | DELETE | `/automations/{{id}}` | `conn_mod_def::GKxdxc7fgbA::uXUsOTCnTEGy_N7syd0Wtw` |
| Manually Run an Automation | POST | `/automations/{{id}}/manual_run` | `conn_mod_def::GKxdxeTSvSA::yWzvfZMwTmKU3fCNaUm9_A` |
| Update an Automation | PATCH | `/automations/{{id}}` | `conn_mod_def::GKxdxdB0mNA::MuIphCagTU2-sGWluOzoDg` |

### Behaviors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Behaviors | GET | `/api/rest/v1/behaviors` | `conn_mod_def::GKxdx2Y9FxA::BuirOlL4SRWAm2eQ0FNpGQ` |
| List Behaviors for a Folder Path | GET | `/behaviors/folders/{{path}}` | `conn_mod_def::GKxdx0WjvOg::5VGI8J3uT2aKGnbaDkKFlg` |
| Show a Behavior by ID | GET | `/behaviors/{{id}}` | `conn_mod_def::GKxdyAXVLzg::kBw_--9QQPKAt516hJhSFg` |
| Create a Behavior | POST | `/api/rest/v1/behaviors` | `conn_mod_def::GKxdxxr-Kng::qBJP-iZhQzmePmFjOTAJxQ` |
| Delete a Behavior | DELETE | `/behaviors/{{id}}` | `conn_mod_def::GKxdxyNqmVg::guOxvPf5TtSt6fuXPP0hWw` |
| Update a Behavior | PATCH | `/behaviors/{{id}}` | `conn_mod_def::GKxdx_UWhIA::qV1-vWvdSoi6ICFUJwqbHA` |

### MetadataCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Metadata Categories | GET | `/api/rest/v1/metadata_categories` | `conn_mod_def::GKxd4PzkOQA::7hG4pMJSSJGqQ7cNUkgDSg` |
| List Metadata Categories by Path | GET | `/metadata_categories/list_by_path/{{path}}` | `conn_mod_def::GKxd4TlPO7A::CtynkFqgTnyiisXT_uFz4g` |
| Show Metadata Category | GET | `/metadata_categories/{{id}}` | `conn_mod_def::GKxd4erENBg::76MOM7-DQJuKMj6DeCJQPA` |
| Create Metadata Category | POST | `/api/rest/v1/metadata_categories` | `conn_mod_def::GKxd4Ph0sbA::AHwIbcjeTNC-xaZNMmKgcw` |
| Delete a Metadata Category | DELETE | `/metadata_categories/{{id}}` | `conn_mod_def::GKxd4OyNc_A::b2nv3X2BTDyThfOKttlz-Q` |
| Update a Metadata Category | PATCH | `/metadata_categories/{{id}}` | `conn_mod_def::GKxd4cyIQlA::1213tzUtTQOJVeF-7tE8Hw` |

### PartnerSiteRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Partner Site Request by Pairing Key | GET | `/partner_site_requests/find_by_pairing_key` | `conn_mod_def::GKxd42q1GSA::O7LdPSpjT96S27r1N2_82Q` |
| List Partner Site Requests | GET | `/api/rest/v1/partner_site_requests` | `conn_mod_def::GKxd43IqWqg::ZNu9ExZBSxaI05umyTuUQw` |
| Approve a Partner Site Request | POST | `/partner_site_requests/{{id}}/approve` | `conn_mod_def::GKxd4q4r6mg::tJ7sC262QtK_9WRg62SVIQ` |
| Create Partner Site Request | POST | `/api/rest/v1/partner_site_requests` | `conn_mod_def::GKxd4qOzGVg::CXmOfa9-SiOqN4ZE8plSsg` |
| Delete a Partner Site Request | DELETE | `/partner_site_requests/{{id}}` | `conn_mod_def::GKxd435xZ8A::szMvrUSYQQWIUfV5bUXZpA` |
| Reject a Partner Site Request | POST | `/partner_site_requests/{{id}}/reject` | `conn_mod_def::GKxd42wl5zA::ABYgufMvTYqHGwqkT5DMGw` |

This lists 90 of 347 actions. For anything not here, call `search_one_platform_actions` with platform `files-com`. The full catalog is at https://www.withone.ai/knowledge/files-com.

## When a call fails

The error comes from Files.com, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/files-com

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
