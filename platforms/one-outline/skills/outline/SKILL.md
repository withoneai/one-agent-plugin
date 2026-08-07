---
name: outline
description: Outline is a collaborative knowledge base and documentation platform that provides structured team wikis, publishing tools, and an API, allowing organizations to create, organize, and share internal documentation and public knowledge resources across teams and workflows. Read and write Outline data through One: documents, collections, templates, users, groups, oauthclients and more, 112 actions with real parameter documentation. Use whenever the user asks to look something up in Outline, create or update a record there, or build code against the Outline API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: outline
  generated-from: one-knowledge-base
---

# Outline through One

Outline is a collaborative knowledge base and documentation platform that provides structured team wikis, publishing tools, and an API, allowing organizations to create, organize, and share internal documentation and public knowledge resources across teams and workflows.

One exposes Outline through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `outline` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Outline is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Outline account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Add A Document User | POST | `/api/documents.add_user` | `conn_mod_def::GLK0bN10oPg::rVO4r_08TaOtXT-wTdfAJw` |
| Add A Group To A Document | POST | `/api/documents.add_group` | `conn_mod_def::GLK0bRSuHEg::tFkFGQNKS7WEMEla_JfzXA` |
| Archive A Document | POST | `/api/documents.archive` | `conn_mod_def::GLK0bZKN_Mg::eyWoMojkSn-U095Y-WHmEQ` |
| Create A Document | POST | `/api/documents.create` | `conn_mod_def::GLK0bjAGE1A::8QNEj1KNRByboLv8bXEBnw` |
| Delete A Document | POST | `/api/documents.delete` | `conn_mod_def::GLK0bZCuW6A::zPlyIarLSf-O3WEFcYtDaA` |
| Duplicate A Document | POST | `/api/documents.duplicate` | `conn_mod_def::GLK0bdSNcxA::AJvvXiZmTz60FNlVFqGltg` |
| Empty Trash | POST | `/api/documents.empty_trash` | `conn_mod_def::GLK0brqmDTA::u6e8AMcpTA-7cGvXcpgopg` |
| Export A Document | POST | `/api/documents.export` | `conn_mod_def::GLK0brA8T4A::JF-3iFqMTtGKvmcdY6v8Rw` |
| Import A File As A Document | POST | `/api/documents.import` | `conn_mod_def::GLK0brBMxlg::swtf6z0RQoayrKvrGFZvjQ` |
| List All Archived Documents | POST | `/api/documents.archived` | `conn_mod_def::GLK0bqvQTog::wFH48CGpRR-GjUENw_nfsQ` |
| List All Deleted Documents | POST | `/api/documents.deleted` | `conn_mod_def::GLK0brm6TaA::TzEb9Gw8RYeFzeJ4Vm5dUw` |
| List All Documents | POST | `/api/documents.list` | `conn_mod_def::GLK0bzfH1aA::95T-PJBvRAWxmzHU7uEbcQ` |

14 more Documents actions are available through search.

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Add A Collection User | POST | `/api/collections.add_user` | `conn_mod_def::GLK0Y95-qSA::8ZJ3DblbTg2YWfYV-JMcog` |
| Add A Group To A Collection | POST | `/api/collections.add_group` | `conn_mod_def::GLK0ZJQY2Wg::HVySTaonQoq6WWvTMT8G7Q` |
| Create A Collection | POST | `/api/collections.create` | `conn_mod_def::GLK0ZKCSEkA::UU92o2NwRGK-szJlrBz79A` |
| Delete A Collection | POST | `/api/collections.delete` | `conn_mod_def::GLK0ZJReQvA::hFRduzLSSTCU9ZZkgS9wBg` |
| Export A Collection | POST | `/api/collections.export` | `conn_mod_def::GLK0ZH7TVqA::TEeeGZW6TaOKJeQH8y6iuQ` |
| Export All Collections | POST | `/api/collections.export_all` | `conn_mod_def::GLK0ZHr2nVg::lB-q1VXSTgihUNwiU9eJnQ` |
| List All Collections | POST | `/api/collections.list` | `conn_mod_def::GLK0ZRx9AJA::Vu6TF3nuQAKU4DO1pqR9bg` |
| Remove A Collection Group | POST | `/api/collections.remove_group` | `conn_mod_def::GLK0ZSDV6tA::8DdYVU7NRlOqpsMGv763EA` |
| Remove A Collection User | POST | `/api/collections.remove_user` | `conn_mod_def::GLK0ZRX2KjA::briNdz5AQNq152iTC5XeuA` |
| Retrieve A Collection | POST | `/api/collections.info` | `conn_mod_def::GLK0a6kKAig::SETLlviTTnWiZM_KXgKSSQ` |
| Update A Collection | POST | `/api/collections.update` | `conn_mod_def::GLK0a6isYWg::XtMKheS5Qu-hpupIcuOjbA` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Create A Template | POST | `/api/templates.create` | `conn_mod_def::GLK0dSkmz_A::UVA1VB1DROWCVhLbYZSA6Q` |
| Create A Template From A Document | POST | `/api/documents.templatize` | `conn_mod_def::GLK0bZCdrhg::2J1YmLvSSVCfimtuFpzKzQ` |
| Delete A Template | POST | `/api/templates.delete` | `conn_mod_def::GLK0dSjCZOg::5dFx0WG6QkqQHKYjj7rEFA` |
| Duplicate A Template | POST | `/api/templates.duplicate` | `conn_mod_def::GLK0dSaatnA::gufifMYgRsCHtgAWcKJu_g` |
| List All Templates | POST | `/api/templates.list` | `conn_mod_def::GLK0dSX97bg::nRYT0ug8QFON8CuqZhRacw` |
| Restore A Template | POST | `/api/templates.restore` | `conn_mod_def::GLK0dTKwXwA::Jn2-EqU9RjGynkvjGgModA` |
| Retrieve A Template | POST | `/api/templates.info` | `conn_mod_def::GLK0daQ-Bwg::WelWGrWqSK-28I_zN3pw8w` |
| Update A Template | POST | `/api/templates.update` | `conn_mod_def::GLK0daiiBTg::Gv_y46utSX2rkDEnyjJIzA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate A User | POST | `/api/users.activate` | `conn_mod_def::GLK0daKxrjA::icM7Cdh3QYeV0RGAWaMlag` |
| Change A Users Role | POST | `/api/users.update_role` | `conn_mod_def::GLK0dabxkjA::U4p4ejwJQO269nVbL_7DNQ` |
| Delete A User | POST | `/api/users.delete` | `conn_mod_def::GLK0dacAQ-g::9XxY6hHrRuujVID7yQ3JcA` |
| Invite Users | POST | `/api/users.invite` | `conn_mod_def::GLK0diIOifA::elUqiDjNTROOnUQ9WK8jsw` |
| List All Users | POST | `/api/users.list` | `conn_mod_def::GLK0dh_sMqg::G-j8LTNJRZOw7itYtJXK8Q` |
| Retrieve A User | POST | `/api/users.info` | `conn_mod_def::GLK0dirV5ig::roqGyGEGSYKB4GDqKH2rKg` |
| Suspend A User | POST | `/api/users.suspend` | `conn_mod_def::GLK0dj9gqFg::FET5Q3kwR_GX0K0AkEdSLw` |
| Update A User | POST | `/api/users.update` | `conn_mod_def::GLK0diPf3vA::osw6LoZJTreQ2wcnaFrcWg` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Add A Group Member | POST | `/api/groups.add_user` | `conn_mod_def::GLK0cYaO7Kg::yGSSZgUTTeuFjTH8cmkQLg` |
| Create A Group | POST | `/api/groups.create` | `conn_mod_def::GLK0cYZPbsA::XM3WWjzdTOW6_HJR64iGww` |
| Delete A Group | POST | `/api/groups.delete` | `conn_mod_def::GLK0cgwVZ4A::f-iIfcSMRCmj3HWvXrdbKA` |
| List All Groups | POST | `/api/groups.list` | `conn_mod_def::GLK0chWKvsg::QJcJewq7SGKIN9hIATcaDA` |
| Remove A Group Member | POST | `/api/groups.remove_user` | `conn_mod_def::GLK0chORsdA::6ZtAQeT5TUCiTS7fravRTA` |
| Retrieve A Group | POST | `/api/groups.info` | `conn_mod_def::GLK0cgohKQA::HgRnyck5T0WRMk9yVgPTZg` |
| Update A Group | POST | `/api/groups.update` | `conn_mod_def::GLK0crcQN6A::1xTZab6XRiWKF3eL6iZwIw` |

### OauthClients

| Action | Method | Path | Action id |
|---|---|---|---|
| Create An OAuth Client | POST | `/api/oauthClients.create` | `conn_mod_def::GLK0ctORCAA::bfJdPovrSJmmIKYG-xfYOQ` |
| Delete An OAuth Client | POST | `/api/oauthClients.delete` | `conn_mod_def::GLK0ctATdhg::QxfCZ--PRkarwYSVAMHVzg` |
| List Accessible OAuth Clients | POST | `/api/oauthClients.list` | `conn_mod_def::GLK0c2UnoXA::7dryu9AwShm2TpoqIUym_A` |
| Retrieve An OAuth Client | POST | `/api/oauthClients.info` | `conn_mod_def::GLK0c1eqtDg::VLhOt5DWTdKciFVuSYOLlA` |
| Rotate The Secret For An OAuth Client | POST | `/api/oauthClients.rotate_secret` | `conn_mod_def::GLK0c2WOccA::NnaNmFq3SgiAQunTkjfxVg` |
| Update An OAuth Client | POST | `/api/oauthClients.update` | `conn_mod_def::GLK0c1MxjBA::SP3ANgh0QlaO78NGx9ItWA` |

### Shares

| Action | Method | Path | Action id |
|---|---|---|---|
| Create A Share | POST | `/api/shares.create` | `conn_mod_def::GLK0c-lfUUA::lSQKU7gZTyu2leq-R1D4yg` |
| List All Shares | POST | `/api/shares.list` | `conn_mod_def::GLK0c-aYgIA::3rw5kyjtQTO1W1MTCEiWww` |
| Retrieve A Share Object | POST | `/api/shares.info` | `conn_mod_def::GLK0c97QTJg::NicFMG8lTxOasKE8WNXqzA` |
| Revoke A Share | POST | `/api/shares.revoke` | `conn_mod_def::GLK0c9wbZcg::zNQfMFsSQs6XPIiwVOBU8A` |
| Update A Share | POST | `/api/shares.update` | `conn_mod_def::GLK0dF-RCdA::742T8EoRSoiOYpiopgYFvg` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create A Comment | POST | `/api/comments.create` | `conn_mod_def::GLK0a7oB_MA::Wn5f4uH_RHeR9zqxmOlgCg` |
| Delete A Comment | POST | `/api/comments.delete` | `conn_mod_def::GLK0a7nCCag::OroOCWiFTZyi2R9SxkZeLQ` |
| List All Comments | POST | `/api/comments.list` | `conn_mod_def::GLK0bDWAlLA::Eo5Th1jXSSqRU5thL8drqQ` |
| Retrieve A Comment | POST | `/api/comments.info` | `conn_mod_def::GLK0bD5OlCA::l7xJ3hO5TN2q5hioio6Usw` |
| Update A Comment | POST | `/api/comments.update` | `conn_mod_def::GLK0bDZAjTg::_ijx3yiORyC0vF1KjKCyFA` |

### DataAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create A Data Attribute | POST | `/api/dataAttributes.create` | `conn_mod_def::GLK0bDqEFtA::j7fK6AgKTNS5Z1ipT2sHUw` |
| Delete A Data Attribute | POST | `/api/dataAttributes.delete` | `conn_mod_def::GLK0bF5WpuA::4ae9OoOETcCnAmeTCJn4Uw` |
| List All Data Attributes | POST | `/api/dataAttributes.list` | `conn_mod_def::GLK0bQ0GzkA::sXjQaFBHQWOydgXfhH7Mgw` |
| Retrieve A Data Attribute | POST | `/api/dataAttributes.info` | `conn_mod_def::GLK0bNofJMg::kBdgmnRVT4qQPU1tM_4R_Q` |
| Update A Data Attribute | POST | `/api/dataAttributes.update` | `conn_mod_def::GLK0bPhe6wg::_w_iQbITSma1HmEi_E9qbw` |

### AccessRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Approve An Access Request | POST | `/api/accessRequests.approve` | `conn_mod_def::GLK0Y1ffV8A::8WiN8TtGTgm60TpG4JFvOA` |
| Create An Access Request | POST | `/api/accessRequests.create` | `conn_mod_def::GLK0Y0pWi3g::97jeptf7TvagQ7BXBO2HCA` |
| Dismiss An Access Request | POST | `/api/accessRequests.dismiss` | `conn_mod_def::GLK0Y1Ck0WA::hHPBoMQuSzyE9NsFUDkJBg` |
| Retrieve An Access Request | POST | `/api/accessRequests.info` | `conn_mod_def::GLK0Y2kSFVA::8egBRBc0S8-Y1DECMaG_gw` |

### Stars

| Action | Method | Path | Action id |
|---|---|---|---|
| Create A Star | POST | `/api/stars.create` | `conn_mod_def::GLK0dKv60jg::SOduLVS1QTaKbfhmJr44cA` |
| Delete A Star | POST | `/api/stars.delete` | `conn_mod_def::GLK0dGf6V-g::vOgc5v_eQIWulBpt4tWYQQ` |
| List All Stars | POST | `/api/stars.list` | `conn_mod_def::GLK0dGYEFcg::WwEjLZZtSZiGQwpw16O8iA` |
| Update A Stars Order In The Sidebar | POST | `/api/stars.update` | `conn_mod_def::GLK0dHtgDpA::XVXLAzR7SVSr3i4wANsSaA` |

### FileOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete A File Operation | POST | `/api/fileOperations.delete` | `conn_mod_def::GLK0cQkXW0g::adgfHiPPTJGfsdndqEVH9Q` |
| List All File Operations | POST | `/api/fileOperations.list` | `conn_mod_def::GLK0cZmDT5g::2T5tR1I8SyqSb0AX0XcLjQ` |
| Retrieve A File Operation | POST | `/api/fileOperations.info` | `conn_mod_def::GLK0cZG4FkA::hFxwNMWiToGJCSOuzUOK_w` |
| Retrieve The File | POST | `/api/fileOperations.redirect` | `conn_mod_def::GLK0cYUozPg::SdFnbyjUSg2Snrwxf614LA` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create An Attachment | POST | `/api/attachments.create` | `conn_mod_def::GLK0Y1CnxzA::wjUz09_6TGyvuk3CBYhPhg` |
| Delete An Attachment | POST | `/api/attachments.delete` | `conn_mod_def::GLK0Y_madvg::uqtOXM2YS3OvX_uUVSEkHw` |
| Retrieve An Attachment | POST | `/api/attachments.redirect` | `conn_mod_def::GLK0Y9ujF-A::8N1XUhsiQnydLWauyrO_yQ` |

### OauthAuthentications

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete An OAuth Authentiation | POST | `/api/oauthAuthentications.delete` | `conn_mod_def::GLK0ctXkkQg::hMVNs_jhQAS2KTbkwjrWSQ` |
| List Accessible OAuth Authentications | POST | `/api/oauthAuthentications.list` | `conn_mod_def::GLK0cuIeV7A::FznsZIb0TtOJlU5GMrIHDw` |

### Revisions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Revisions | POST | `/api/revisions.list` | `conn_mod_def::GLK0c1UTLPA::ROSWdIoUS5CF9R_tHX7oTQ` |
| Retrieve A Revision | POST | `/api/revisions.info` | `conn_mod_def::GLK0c-Vf5Sg::iPkEGVKZTiSVD97vI_hSKQ` |

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| Create A View | POST | `/api/views.create` | `conn_mod_def::GLK0drCiT1g::PyBiFU02TyaGR1tHybzFMw` |
| List All Views | POST | `/api/views.list` | `conn_mod_def::GLK0drZFl9A::zcGyD2_wTY6x6ACDMp_3MA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Events | POST | `/api/events.list` | `conn_mod_def::GLK0cQYla3g::M4rSv-rmRwe_JtV7EPGCYg` |

### CollectionsDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve A Collections Document Structure | POST | `/api/collections.documents` | `conn_mod_def::GLK0a6jncoA::SD1Ev2pLQ7K2YRpjrR5zdw` |

This lists 90 of 112 actions. For anything not here, call `search_one_platform_actions` with platform `outline`. The full catalog is at https://www.withone.ai/knowledge/outline.

## When a call fails

The error comes from Outline, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/outline

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
