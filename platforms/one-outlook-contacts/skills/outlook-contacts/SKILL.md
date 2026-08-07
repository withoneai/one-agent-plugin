---
name: outlook-contacts
description: Outlook Contacts is a contact management service within Outlook that provides APIs for accessing, organizing, and syncing people and address book data, allowing developers and teams to manage contact records, integrate communication workflows, and keep customer or personal information up to date. Read and write Outlook Contacts data through One: contacts, contactfolders, contactextensions, contactphotocontent, extensions, contactphoto and more, 147 actions with real parameter documentation. Use whenever the user asks to look something up in Outlook Contacts, create or update a record there, or build code against the Outlook Contacts API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: outlook-contacts
  generated-from: one-knowledge-base
---

# Outlook Contacts through One

Outlook Contacts is a contact management service within Outlook that provides APIs for accessing, organizing, and syncing people and address book data, allowing developers and teams to manage contact records, integrate communication workflows, and keep customer or personal information up to date.

One exposes Outlook Contacts through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `outlook-contacts` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Outlook Contacts is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Outlook Contacts account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Contacts in a User Contact Folder Child Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/$count` | `conn_mod_def::GLoXYpqoVjs::Dmqr78rbS5-d2FIrBpuTuA` |
| Count Signed-In User Contacts | GET | `/v1.0/me/contacts/$count` | `conn_mod_def::GMIWYnSWqbc::S1beuCU0TJ6pfnC0WfgQiQ` |
| Delta Contacts for the Signed-in User | GET | `/v1.0/me/contacts/microsoft.graph.delta()` | `conn_mod_def::GMIWZxHrbZQ::DI7-kfbdTg-tFXyqoPLReQ` |
| Delta Contacts in a Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/microsoft.graph.delta()` | `conn_mod_def::GMIWZyniKH4::zCpZ7oRkS52BtSXEO3SJ6w` |
| Delta Using Me Contact Folders Child Folders Contacts | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/microsoft.graph.delta()` | `conn_mod_def::GMIWZxLjwDk::AjhQYDsJSOGKl71LGRBu6A` |
| Delta Using User Contact Folder Child Folder Contacts | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/microsoft.graph.delta()` | `conn_mod_def::GLoXYygVSx4::7Z2o4MnOTTq9wVffsuFyxQ` |
| Delta Using Users ContactFolders Contacts Microsoft Graph Delta | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/microsoft.graph.delta()` | `conn_mod_def::GLoXZBRwBo4::86j3XvYoR5uaZafoaNwnNQ` |
| Get a Contact for the Signed-in User | GET | `/v1.0/me/contacts/{{contactId}}` | `conn_mod_def::GMIWYGpiCac::wd0Zu54RR06bJ-tiPj3p5Q` |
| Get a Contact from a Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}` | `conn_mod_def::GMIWYJG8EIE::JppwOVthSAaPkCydnjFUqQ` |
| Get a Contact in a Child Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}` | `conn_mod_def::GMIWX_-HtJI::LpNGJSC2TPucXA31i20Oqw` |
| Get a Contact in a User Contact Folder Child Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}` | `conn_mod_def::GLoXYLyFX9w::IeEZFNx1QJW518j9X2u_gw` |
| Get a User's Contact (by contact ID) | GET | `/v1.0/users/{{userId}}/contacts/{{contactId}}` | `conn_mod_def::GLoXXUs_dMI::ZdL40ywQQmq3UMG_sqDf7Q` |

37 more Contacts actions are available through search.

### ContactFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Delta Child Contact Folders for a User Contact Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/microsoft.graph.delta()` | `conn_mod_def::GLoXY7zVw5s::FrQwBjTbRUejwvmJV6mWqA` |
| Delta Child Contact Folders in a Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/microsoft.graph.delta()` | `conn_mod_def::GMIWZ-D62ZE::tGr4JEjUQ2euW8lNmvcsWQ` |
| Delta Contact Folders for a User | GET | `/v1.0/users/{{userId}}/contactFolders/microsoft.graph.delta()` | `conn_mod_def::GLoXY6T0qNk::OeY7i7nsSfqWQbUxQYen4A` |
| Delta Contact Folders for the Signed-In User | GET | `/v1.0/me/contactFolders/microsoft.graph.delta()` | `conn_mod_def::GMIWZxwl3X8::3tRnFHGcS6-rFnNkb_nCcA` |
| Get a User Contact Folder by ID | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}` | `conn_mod_def::GLoXYMIuKPg::rBgr325rRvC13P7wW_ihDw` |
| Get a User Contact Folder Child Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}` | `conn_mod_def::GLoXYEeCnyY::IwjSR1m_QLSEKqkOqAwO7Q` |
| Get Child Folder Count for a User Contact Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/$count` | `conn_mod_def::GLoXYpigNa0::d5E49T46TyOxQm6trJZe4Q` |
| Get Child Folder Count for My Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/$count` | `conn_mod_def::GMIWYgwuZxM::ZV-lkfTESfCOCay26Z_isw` |
| Get Count of a User's Contact Folders | GET | `/v1.0/users/{{userId}}/contactFolders/$count` | `conn_mod_def::GLoXYpVjP0o::yQ9owzbuQcuKmii3oic8nA` |
| Get Count of Contact Folders | GET | `/v1.0/me/contactFolders/$count` | `conn_mod_def::GMIWYoHbz3Y::dGf2KiBWTuiKvXMz2EV9Sw` |
| List a User Contact Folder's Child Folders | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders` | `conn_mod_def::GLoXYFDnRlk::qBIC97dlSzOl_Y6EXuqx_w` |
| List a User's Contact Folders | GET | `/v1.0/users/{{userId}}/contactFolders` | `conn_mod_def::GLoXYK58DPw::kCG6KxOWTsiYNsvAfSMgcg` |

15 more ContactFolders actions are available through search.

### ContactExtensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Contact Extensions | GET | `/v1.0/me/contacts/{{contactId}}/extensions/$count` | `conn_mod_def::GMIWZhm0_fA::TgLgWxwTTzOHu8azEZYSQQ` |
| Count Contact Extensions in a Child Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/extensions/$count` | `conn_mod_def::GMIWYhKb7Co::TJTRZ0DtRTWUtjc82FoQkw` |
| Get a Contact Extension for a User | GET | `/v1.0/users/{{userId}}/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GLoXXUbitbE::lTUwNrRwQnCntFGFUi69Ow` |
| Get a Contact Extension for the Signed-in User | GET | `/v1.0/me/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIWYTArBLg::Q16C8aHaQ-W790zRqnj7Xg` |
| Get a Contact Extension from the Signed-in User | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIWYQ3CFeI::-GojcqCbQ-qyDfIDGtvjug` |
| Get an Extension from a Contact in a Child Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIWYQcF4XE::js4zKTr2QAWC1_6C5zmBJg` |
| Get Count of Contact Extensions in a Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions/$count` | `conn_mod_def::GMIWYhEFkVw::3hjEGCLsRbGXyc-4ZskYng` |
| List Contact Extensions in a Child Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/extensions` | `conn_mod_def::GMIWYHDyIUg::b6am4vVySAi1M_V5Mnoh2A` |
| List Contact Extensions in a User's Child Contact Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/extensions` | `conn_mod_def::GLoXYTmwRgg::07XYdsdETIKBgH_kiNOsQQ` |
| List Extensions for a Contact in a Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions` | `conn_mod_def::GMIWYQ_6y9k::cWLn_aAmRbeFgOKzqIepXw` |
| Create an Extension for My Contact | POST | `/v1.0/me/contacts/{{contactId}}/extensions` | `conn_mod_def::GMIWXezDnow::BTyobmqiTpqJcIpBgN9xDw` |
| Delete a Contact Extension | DELETE | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIWXz3MoTw::_TdRUlaYQKyLqCQ69cpupA` |

7 more ContactExtensions actions are available through search.

### ContactPhotoContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Photo Content for a Contact in a Child Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GMIWYZLe7Qw::psCh5Ew8QM-u0XNHY24xFQ` |
| Get Photo Content for a Contact in a Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GMIWYZDzwB0::A-fZEmKtSAaR_3fVAOMpRg` |
| Get Photo Content for a Contact in a User's Contact Folder Child Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GLoXYgcGrFM::5QE4H4bfS1yR3_cbkJU6Ew` |
| Delete Contact Photo Content for a User | DELETE | `/v1.0/users/{{userId}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GLoXXNHU2Mc::3NfNO-vVQZGEKlTqEjUfNw` |
| Delete Contact Photo Content in a Child Contact Folder | DELETE | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GMIWXfCwKIk::RCra3CIWSNqBaWc8npxL_g` |
| Delete Contact Photo Content in a User's Child Contact Folder | DELETE | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GLoXX9Gjyl0::iMwv8uC6RwGfRVL5y60fow` |
| Delete Photo Content for a Contact in a Contact Folder | DELETE | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GMIWXe1gdgE::GS75j6OCQqm7m3RSZLj0gQ` |
| Set Photo Content for a Contact in a Child Folder | PUT | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GMIWaEYC9cE::2YDyGJi0T9iHSw05ASUPvw` |
| Set Photo Content for a Contact in a Signed-In User's Contact Folder | PUT | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GMIWaE-FKQw::H1Fz4gPxTr6ud6gFAExZng` |

### Extensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Extension for a User Contact in a Child Contact Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GLoXYVa9dxk::fHHOuoEBThWFfjDhaxfjNg` |
| Get Extension for a User Contact in a Contact Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GLoXYTrs8gI::n6mD603JSFeYPya_RxDZwA` |
| List Extensions for a Signed-In User's Contact | GET | `/v1.0/me/contacts/{{contactId}}/extensions` | `conn_mod_def::GMIWYS0ZH2c::-GYk71obS7CKFm16gaquuQ` |
| List Extensions for a User Contact | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions` | `conn_mod_def::GLoXYZ-k9f0::ANOFYpN_RmSNZFNvursonQ` |
| Create an Extension for a Contact in a Child Contact Folder | POST | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/extensions` | `conn_mod_def::GMIWXeyO-Dc::tEn9zLugTgiKsD6ZacIPVg` |
| Create an Extension for a Contact in a Signed-In User's Contact Folder | POST | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions` | `conn_mod_def::GMIWXlccwIs::w522lPvARlmqAm9sCzdQvA` |
| Create Extension for a User Contact in a Child Contact Folder | POST | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/extensions` | `conn_mod_def::GLoXXzxgQ7s::Fh1i3DZaQ_usNrEPFce2Tw` |
| Create Extensions for a User Contact | POST | `/v1.0/users/{{userId}}/contacts/{{contactId}}/extensions` | `conn_mod_def::GLoXXN_emQI::1qpDVelgSty-fKN42Dtlhg` |
| Create Extensions for a User Contact | POST | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions` | `conn_mod_def::GLoXX1N6qB4::4glnVZiGTeyrnJboqfzChg` |

### ContactPhoto

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Photo for a Contact in a Signed-In User's Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/photo` | `conn_mod_def::GMIWYaPbeKE::a7XK5g95SsSLKqosV5NnLA` |
| Get Photo from a Contact in a Child Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/photo` | `conn_mod_def::GMIWYZ0vDqI::BkaqIMSsT5m3NE9VLGcVEg` |
| Get Photo from a Signed-In User's Contact | GET | `/v1.0/me/contacts/{{contactId}}/photo` | `conn_mod_def::GMIWYhq-rcw::H-tTNeA1StiwF_BLJ2jn8A` |
| Update a Contact Photo for the Signed-in User | PATCH | `/v1.0/me/contacts/{{contactId}}/photo` | `conn_mod_def::GMIWaWPMBsg::EekmPMvJRNqnmIVEroNrRg` |
| Update a Contact's Photo in My Contact Folder | PATCH | `/v1.0/me/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/photo` | `conn_mod_def::GMIWaXI8bko::0DrewJeySoSEalTAKghvmA` |
| Update Photo for a Contact in a Child Contact Folder | PATCH | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/photo` | `conn_mod_def::GMIWaXRBjtQ::6J1-BYcPQlGEKjTOZru-oQ` |

### UserContactExtensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Count of a User Contact's Extensions in a Child Contact Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/extensions/$count` | `conn_mod_def::GLoXYggawMI::_UN0kPnkSZ2F6mk4ZSjkrg` |
| Delete a User Contact Extension | DELETE | `/v1.0/users/{{userId}}/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GLoXXKtPCUE::ateyZhXgRM6bui9Po501og` |
| Update a User Contact Extension | PATCH | `/v1.0/users/{{userId}}/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GLoXXr02WJo::MEjVbNTmTra8A83xjpffFg` |
| Update a User Contact Extension | PATCH | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GLoXZQwVh30::6SNehfYvR-G9qQzpgz3bpA` |

### UserContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Contact in a Contact Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}` | `conn_mod_def::GLoXYS2um4k::UryjuDsZQKiOQ-mx_yYSaw` |
| Delete a User Contact in a Contact Folder | DELETE | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}` | `conn_mod_def::GLoXYExQLGg::42RWKtqnT82HU_KW5H_-Tg` |
| Permanently Delete a User Contact in a Contact Folder | POST | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/microsoft.graph.permanentDelete` | `conn_mod_def::GLoXYxWHR_k::9Zy050DYQJ-NYTI_FjouMA` |
| Update a User Contact in a Child Contact Folder | PATCH | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}` | `conn_mod_def::GLoXZKGdbzM::7-xmd-b1QwWQph-Ag3evEw` |

### UserContactPhotoContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Photo Content for a User Contact | GET | `/v1.0/users/{{userId}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GLoXXXE7Hxc::5marGj1cR5GpY5SkXmnerg` |
| Get Photo Content for a User Contact in a Contact Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GLoXYipXqWw::OVomaCzDRV2c8yHPLlXaag` |
| Set Photo Content for a User Contact | PUT | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GLoXY5Mu3Lo::uGK3IZrwRIyj6eD3-LUnUA` |

### UserContactsExtensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Count a User Contact's Extensions | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions/$count` | `conn_mod_def::GLoXYqPfPB8::JI_JTmpkTJC_aWKVA_1suw` |
| List a User Contact's Extensions | GET | `/v1.0/users/{{userId}}/contacts/{{contactId}}/extensions` | `conn_mod_def::GLoXXY2l0F8::aBsIpgRGTQqQvBo9hUkGhQ` |
| Delete a User Contact's Extension | DELETE | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/extensions/{{extensionId}}` | `conn_mod_def::GLoXYEt0j3s::Fwyl1s5pQ_CMchkzkNL1HA` |

### UserContactPhoto

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Photo for a User Contact in a Child Contact Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/photo` | `conn_mod_def::GLoXYh6fvpk::Jf73PaUQQc-40uID69_bpQ` |
| Update a User Contact Photo | PATCH | `/v1.0/users/{{userId}}/contacts/{{contactId}}/photo` | `conn_mod_def::GLoXXqArYfc::arX-dVi1Qhq_PzA8ucKTzw` |

### UserContactFolderChildFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a User Contact Folder Child Folder | DELETE | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}` | `conn_mod_def::GLoXX76agKA::AxQfJH9EQ7uA4DIPPv_p6A` |
| Permanent Delete a User Contact Folder Child Folder | POST | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/microsoft.graph.permanentDelete` | `conn_mod_def::GLoXYx10pkQ::leZkhgKiTc2tRyl7Rf0QYw` |

### ContactFolder

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Child Contact Folder | GET | `/v1.0/me/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}` | `conn_mod_def::GMIWX8R2k9s::cqdU7I2xRjKZEuMMAjDkIA` |
| Get a Signed-In User's Contact Folder by ID | GET | `/v1.0/me/contactFolders/{{contactFolderId}}` | `conn_mod_def::GMIWX_4UT8U::JnYHTvBDR-Wc7McVVBMP3A` |

### UserContactExtensionCount

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Extension Count for a User Contact | GET | `/v1.0/users/{{userId}}/contacts/{{contactId}}/extensions/$count` | `conn_mod_def::GLoXXfJdNzo::fuR2TxbISKu2PnRXESbzdA` |

### UsersContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Delta Using Users Contacts | GET | `/v1.0/users/{{userId}}/contacts/microsoft.graph.delta()` | `conn_mod_def::GLoXXfvp5uk::KuNu-psORHmUDL-MVW-wGw` |

### ContactFolderChildFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a User Contact Folder Child Folder | POST | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders` | `conn_mod_def::GLoXXq4bxxc::vRl7G6axRaSaOTaY8E3_zQ` |

### UserContactFolderContactPhotoContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Contact Photo Content for a User Contact Folder Contact | DELETE | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/photo/$value` | `conn_mod_def::GLoXX7UxOns::TsgLmiLdSCKnW4WMegOyiw` |

### UserContactFolderContactPhoto

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Photo for a User Contact in a Contact Folder | GET | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/photo` | `conn_mod_def::GLoXYgWRguw::FXCHiqiER0KxwblGu3k8PQ` |

### Photo

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Photo for a User's Contact in a Contact Folder | PATCH | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/contacts/{{contactId}}/photo` | `conn_mod_def::GLoXZQ4VtQs::-n3PJ_mSSIijsX9KB81dbg` |

### UserContactPhotos

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a User Contact Photo in a Child Contact Folder | PATCH | `/v1.0/users/{{userId}}/contactFolders/{{contactFolderId}}/childFolders/{{contactFolderId1}}/contacts/{{contactId}}/photo` | `conn_mod_def::GLoXZYX4fyg::PHU7sqdmRMaHgtR5d6YJNQ` |

### UserProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Signed-in User Profile | GET | `/v1.0/me` | `conn_mod_def::GMIWYn-3naY::1tMUK570Rc2Yu_FVlh6ncg` |

This lists 88 of 147 actions. For anything not here, call `search_one_platform_actions` with platform `outlook-contacts`. The full catalog is at https://www.withone.ai/knowledge/outlook-contacts.

## When a call fails

The error comes from Outlook Contacts, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/outlook-contacts

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
