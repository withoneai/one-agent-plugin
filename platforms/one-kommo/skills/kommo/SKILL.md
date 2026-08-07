---
name: kommo
description: Kommo is a sales-CRM platform that unifies messaging apps, live chat and pipeline management into one inbox, enabling teams to nurture leads, automate outreach and close deals more efficiently. Read and write Kommo data through One: files, sources, notes, chattemplates, customfields, leads and more, 159 actions with real parameter documentation. Use whenever the user asks to look something up in Kommo, create or update a record there, or build code against the Kommo API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: kommo
  generated-from: one-knowledge-base
---

# Kommo through One

Kommo is a sales-CRM platform that unifies messaging apps, live chat and pipeline management into one inbox, enabling teams to nurture leads, automate outreach and close deals more efficiently.

One exposes Kommo through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `kommo` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Kommo is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Kommo account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File by UUID | GET | `/v1.0/files/{{fileUuid}}` | `conn_mod_def::GJ4uibjQFdQ::IlL-V-3AQpiTYGReUOIWww` |
| Get a File’s Versions | GET | `/v1.0/files/{{fileUuid}}/versions` | `conn_mod_def::GJ4uia1IsOM::bVAuMYtJQYa3XkYtWszs2Q` |
| Get Entities Associated With a File | GET | `/api/v4/files/{{fileUuid}}/links` | `conn_mod_def::GJ4uloodUZk::5eMkGWGuTtq4AgiJwUzIlA` |
| List Account Files | GET | `/v1.0/files` | `conn_mod_def::GJ4uieRVTI4::7UVy2KpjQkOrStsZ67L2MQ` |
| List Files Attached to an Entity | GET | `/api/v4/{{entity}}/{{entityId}}/files` | `conn_mod_def::GJ4ulxNSuMc::mzM6Vd4uQUqO3k4THcPQoQ` |
| Attach Files to an Entity | PUT | `/api/v4/{{entity}}/{{entityId}}/files` | `conn_mod_def::GJ4uj8Kybkk::0JlpDuC9SAyLScFRpSgXMw` |
| Delete Files | DELETE | `/files` | `conn_mod_def::GJ4uiakSBts::ZUytsYGpQoi01VwkPckW8A` |
| Detach Files From an Entity | DELETE | `/api/v4/{{entity}}/{{entityId}}/files` | `conn_mod_def::GJ4ukttinOI::psbNMUIdTj6jmfMaStNcHQ` |
| Edit a File | PATCH | `/v1.0/files/{{fileUuid}}` | `conn_mod_def::GJ4uia5tnpY::o4_g8xpfQdu31kBfy3lt4Q` |
| Restore Account Files | POST | `/v1.0/files/restore` | `conn_mod_def::GJ4uioon1RY::EtpGfSDjTPOuNKtnJ2yERw` |
| Upload a Part of a File (Upload Session Token) | POST | `/upload/{{sessionToken}}` | `conn_mod_def::GJ4uipP7swo::L4P_-wwlQJuW1LS0BBnI3Q` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Source by ID | GET | `/api/v4/sources/{{id}}` | `conn_mod_def::GJ4ulkC7l28::Db8hlzGPQ0asbtKkg2Fu5A` |
| List Integration Sources | GET | `/api/v4/sources` | `conn_mod_def::GJ4ulbX4wug::8Klmf4LrTxGkXQrQxMpxug` |
| Add a Text Source (AI Rewriter) | POST | `/api/v2/sources/text` | `conn_mod_def::GJ4uiprKf1M::nFySL3wnRGCZaBp9Wh_XYg` |
| Add a URL Source (AI Rewriter) | POST | `/api/v2/sources/url` | `conn_mod_def::GJ4uiurRQ_c::iBhqI4pQS5WDxXNYMMrSlw` |
| Add Integration Sources | POST | `/api/v4/sources` | `conn_mod_def::GJ4ujJKoQIQ::t47NmBM-Q12VL3IuZ1lXeg` |
| Delete a Source | DELETE | `/api/v4/sources/{{id}}` | `conn_mod_def::GJ4ukX5dsn8::gEBh6A1GQ0a0eWfqnel-GQ` |
| Delete Integration Sources (Batch) | DELETE | `/api/v4/sources` | `conn_mod_def::GJ4ukbdHXoM::2U0CZ6ELQRav1EKtEzPpHg` |
| Update a Source | PATCH | `/api/v4/sources/{{id}}` | `conn_mod_def::GJ4unp7-HhA::u4-ursDsQ9Kf4bVIHTgkYQ` |
| Update Sources (Batch) | PATCH | `/api/v4/sources` | `conn_mod_def::GJ4un1VxZEI::b7fSBpwARCWxZQJDCaLcTw` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note by ID (for an Entity Type) | GET | `/api/v4/{{entityType}}/notes/{{id}}` | `conn_mod_def::GJ4ulkSNjIo::igZ1YhYNScGsLABi7fmRXg` |
| List Notes by Entity Type | GET | `/api/v4/{{entityType}}/notes` | `conn_mod_def::GJ4um5ZK6MA::xeVC2aG9TNieSYyZZxD0-w` |
| List Notes for an Entity | GET | `/api/v4/{{entityType}}/{{entityId}}/notes` | `conn_mod_def::GJ4umK3TozE::YFplsbNnTy2cp2uqqdd9xw` |
| Add Notes to an Entity Type | POST | `/api/v4/{{entity_type}}/notes` | `conn_mod_def::GJ4ujmXaZT8::82uiBTdHRrimuMt_oOwcGQ` |
| Edit a Note for an Entity Type | PATCH | `/api/v4/{{entity_type}}/notes/{{id}}` | `conn_mod_def::GJ4uk74pHA0::vOvLV60jT16QVF3CREkJcA` |
| Edit Notes for an Entity Type | PATCH | `/api/v4/{{entity_type}}/notes` | `conn_mod_def::GJ4ulEHk0jM::eKk0oRCGRJmKRcf3DGFsyg` |
| Pin a Note in an Entity Type | POST | `/api/v4/{{entity_type}}/notes/{{id}}/pin` | `conn_mod_def::GJ4unVy36Jw::NcTeqSCMR7KrRMbxfl1LfA` |
| Unpin a Note for an Entity (Leads/Contacts/Companies) | POST | `/api/v4/{{entityType}}/notes/{{id}}/unpin` | `conn_mod_def::GJ4ukHnGeio::kE0hPd_LToiCA22JnBSWjQ` |

### ChatTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Chat Template by ID | GET | `/api/v4/chats/templates/{{id}}` | `conn_mod_def::GJ4uloUMahI::DyMpW0T5Sk62zD4U3kUHfg` |
| List Chat Templates | GET | `/api/v4/chats/templates` | `conn_mod_def::GJ4ulcD2lYQ::WGHA1A4bTLeY-VkhJDxYdA` |
| Add Chat Templates (Batch) | POST | `/api/v4/chats/templates` | `conn_mod_def::GJ4ujKhHVbE::uqYrpieeT72BSvJPoUscUg` |
| Delete a Chat Template | DELETE | `/api/v4/chats/templates/{{id}}` | `conn_mod_def::GJ4uka0n4aI::bq6UuePSQDiZ_SwgogtUEA` |
| Delete Chat Templates | DELETE | `/api/v4/chats/templates` | `conn_mod_def::GJ4ukjqFsCI::Y_hIJDw9RpOoi9GmGXU0yg` |
| Edit Chat Templates (Batch) | PATCH | `/api/v4/chats/templates` | `conn_mod_def::GJ4ukxuxBcQ::g3FR__UjRCaqj5PM42T9Vg` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field by ID (for an Entity Type) | GET | `/api/v4/{{entityType}}/custom_fields/{{id}}` | `conn_mod_def::GJ4umTHJ-d4::bqNMDrUtTd6SX4fQA5Prtg` |
| List an Entity Type’s Custom Fields | GET | `/api/v4/{{entityType}}/custom_fields` | `conn_mod_def::GJ4ukK0KGWY::FNx1APbAR2-2FuwoKBwxLw` |
| Add Custom Fields to an Entity | POST | `/api/v4/{{entityType}}/custom_fields` | `conn_mod_def::GJ4ujbj1MDM::En1DR1w4SlCW3MKNqIbrqQ` |
| Delete a Custom Field for an Entity | DELETE | `/api/v4/{{entity}}/custom_fields/{{id}}` | `conn_mod_def::GJ4ukjrynk0::pJPqDnfESByl31ttTIcCvQ` |
| Update an Entity Type’s Custom Fields (Bulk) | PATCH | `/api/v4/{{entity_type}}/custom_fields` | `conn_mod_def::GJ4uoDEvSUc::rAheTRU-RG-6KyAqqr5L2w` |
| Update an Entity’s Custom Field | PATCH | `/api/v4/{{entityType}}/custom_fields/{{id}}` | `conn_mod_def::GJ4un1PPn7k::454CLsK_TsCqCKexzcdMrA` |

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead by ID | GET | `/api/v4/leads/{{id}}` | `conn_mod_def::GJ4ul7i1UOM::KOGM7ou5T76gS3gno6twhA` |
| List Leads | GET | `/api/v4/leads` | `conn_mod_def::GJ4umu8m3pk::vo81bA7MS4CcC0ax2kNFBw` |
| Add Leads | POST | `/api/v4/leads` | `conn_mod_def::GJ4ujVVczSs::2TeneDyqRVKI9Wu06i5DLg` |
| Add Leads with Contact and Company (Complex Batch) | POST | `/api/v4/leads/complex` | `conn_mod_def::GJ4uj6lzmZg::1aVZqoo-Q8uAy-in2Mw3LA` |
| Update a Lead | PATCH | `/api/v4/leads/{{id}}` | `conn_mod_def::GJ4un1Vx2yY::vVvY5bleQZOWCRwmpgHQyw` |
| Update Leads (Bulk) | PATCH | `/api/v4/leads` | `conn_mod_def::GJ4uoQGr75k::g3BZsqvLRi-GYoZfwOVUpQ` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company by ID | GET | `/api/v4/companies/{{id}}` | `conn_mod_def::GJ4ul7XR4G4::MtOeMVBvTCGNGbi3RkFBrg` |
| List Companies | GET | `/api/v4/companies` | `conn_mod_def::GJ4uj-9BWTo::fS0rJgKPSgKSeDaqOXLSyw` |
| Add Companies | POST | `/api/v4/companies` | `conn_mod_def::GJ4ui42o2Tw::UvhkH35HQ9WWQP3-nEhMIQ` |
| Update a Company | PATCH | `/api/v4/companies/{{id}}` | `conn_mod_def::GJ4un0-25UY::kTJDCblnT8OtmyLSt5ri_A` |
| Update Companies (Bulk) | PATCH | `/api/v4/companies` | `conn_mod_def::GJ4uoDTACbM::3P_c0wzyToafiFSWYuSRyg` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact by ID | GET | `/api/v4/contacts/{{id}}` | `conn_mod_def::GJ4ul7nE_SE::aebkNszURd2BM2cqYB1KaQ` |
| List Contacts | GET | `/api/v4/contacts` | `conn_mod_def::GJ4ukQpV1bU::uydXuJ15SmqAzOoybEtFnw` |
| Add Contacts (Create One or More Contacts) | POST | `/api/v4/contacts` | `conn_mod_def::GJ4ujVNApiQ::0xuI7dioS-Kg6PYM6iuFYQ` |
| Update a Contact | PATCH | `/api/v4/contacts/{{id}}` | `conn_mod_def::GJ4uoDP6LUk::e2Dxyh4YSlWNOoVStXBW-g` |
| Update Contacts (Batch) | PATCH | `/api/v4/contacts` | `conn_mod_def::GJ4uoC8Vkf8::Vq0ZdPLTSkm1xjCmSJWeRw` |

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Role by ID | GET | `/api/v4/roles/{{id}}` | `conn_mod_def::GJ4umIFaWco::d_vuWfzVQHylzfeE-PzESA` |
| List User Roles | GET | `/api/v4/roles` | `conn_mod_def::GJ4uoSl3YWs::NSyNX6AAQnCKfOyI0j-tBQ` |
| Add Roles to an Account | POST | `/api/v4/roles` | `conn_mod_def::GJ4ujilbNdQ::ro53Zk3lRKOR5oiPpH0QEw` |
| Delete a Role | DELETE | `/api/v4/roles/{{id}}` | `conn_mod_def::GJ4uktcDfMI::PH_juGYXR5ukx7F4EbzPGg` |
| Edit Roles | PATCH | `/api/v4/roles` | `conn_mod_def::GJ4ulGcK3KA::iSPEqHm3QPutu_U3cA3uRg` |

### Catalogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Catalog by ID | GET | `/api/v4/catalogs/{{id}}` | `conn_mod_def::GJ4ulRIxF4c::7tI-oh3KRJCyj7N7SJHBLA` |
| List Available Catalogs (Lists) | GET | `/api/v4/catalogs` | `conn_mod_def::GJ4ulcZnIU8::uUS3TD_LQ0O6yzsERRMn0g` |
| Add Catalog Lists | POST | `/api/v4/catalogs` | `conn_mod_def::GJ4ujjZTshU::XAkC_gxhS62ENWzqhlAJkA` |
| Edit a Catalog List | PATCH | `/api/v4/catalogs/{{id}}` | `conn_mod_def::GJ4uk7qu15M::aAItxDEER3GwKW-hzLXLhA` |
| Edit Catalog Lists (Bulk) | PATCH | `/api/v4/catalogs` | `conn_mod_def::GJ4ulDmekcA::BdPAUvBURXahgvK2769kmg` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task by ID | GET | `/api/v4/tasks/{{id}}` | `conn_mod_def::GJ4umH6oU9I::g2mI2KLyS8mMq8uQ_k8Iaw` |
| List Tasks | GET | `/api/v4/tasks` | `conn_mod_def::GJ4untn5n8A::aCTnWo4aSwWoT4futVVrxQ` |
| Add Tasks (Bulk) | POST | `/api/v4/tasks` | `conn_mod_def::GJ4ujw69wGg::A2UBBxu8Qf-kmEKfN0oKKg` |
| Edit a Task | PATCH | `/api/v4/tasks/{{id}}` | `conn_mod_def::GJ4uk6oL7nI::Fw-XBCMvR0e9wHlZJVCBvw` |
| Edit Tasks (Batch) | PATCH | `/api/v4/tasks` | `conn_mod_def::GJ4ulJ5ASVQ::wjcfByxkRleFlWzHZbmmXQ` |

### CustomFieldGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field Group for an Entity Type | GET | `/api/v4/{{entityType}}/custom_fields/groups/{{id}}` | `conn_mod_def::GJ4ulzofVDo::W0hWlJi0R96BUNbn_-qGWw` |
| List an Entity Type’s Custom Field Groups | GET | `/api/v4/{{entityType}}/custom_fields/groups` | `conn_mod_def::GJ4ulweAiyU::a3Qc5N04TSqJMORlkJ4jzQ` |
| Create a Custom Field Group for an Entity Type | POST | `/api/v4/{{entity_type}}/custom_fields/groups` | `conn_mod_def::GJ4uniBgS3o::wA63aWDNRcW-J_qesQXFoQ` |
| Delete a Custom Field Group for an Entity | DELETE | `/api/v4/{{entityType}}/custom_fields/groups/{{id}}` | `conn_mod_def::GJ4ukjrs5tE::Iyk-OkieQcCzmIiszjsZPA` |
| Update a Custom Field Group for an Entity Type | PATCH | `/api/v4/{{entityType}}/custom_fields/groups/{{id}}` | `conn_mod_def::GJ4um21RtvM::KsLo8JtfROOoPJ5H-argUA` |

### WebsiteButtons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a CRM Plugin (Website Button Source) | GET | `/api/v4/website_buttons/{{sourceId}}` | `conn_mod_def::GJ4ulTZQ8Zk::Xa3ZbMg7TPOoPCSO0tv3bg` |
| List CRM Plugins (Website Buttons) | GET | `/api/v4/website_buttons` | `conn_mod_def::GJ4ulb5yrrQ::64s67Pe2SqaW-RCmhSQEuA` |
| Add a CRM Plugin | POST | `/api/v4/website_buttons` | `conn_mod_def::GJ4ujJVwTTo::b_LOCNP1RvCszBjTU9dpww` |
| Update a CRM Plugin | PATCH | `/api/v4/website_buttons/{{sourceId}}` | `conn_mod_def::GJ4unsiy_eU::qBKAg3okQqi4wqYBPWRgLA` |

### CatalogCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Catalog List’s Custom Fields | GET | `/api/v4/catalogs/{{listId}}/custom_fields` | `conn_mod_def::GJ4ukcD4Qnc::FJVPwHA-T_CXqFKk2NVeFA` |
| Add Custom Fields to a Catalog List | POST | `/api/v4/catalogs/{{listId}}/custom_fields` | `conn_mod_def::GJ4ujKyd6D4::rFw4lykfQtCUgUYuA2GQOA` |
| Update a Catalog List Custom Field | PATCH | `/api/v4/catalogs/{{listId}}/custom_fields/{{cfId}}` | `conn_mod_def::GJ4un7ic8Xs::D0TDc54hTKaPL5BxQqsigg` |
| Update a Catalog’s Custom Fields (Bulk) | PATCH | `/api/v4/catalogs/{{id}}/custom_fields` | `conn_mod_def::GJ4uoJCM4pQ::9cwj_2-_QAS6Cmqh7AqbXw` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Entity Type’s Tags | GET | `/api/v4/{{entityType}}/tags` | `conn_mod_def::GJ4umqosGDc::ZCq4YeqfRu6HqJF0evMhtQ` |
| Add Tags to Multiple Entities (Leads/Contacts/Companies) | PATCH | `/api/v4/{{entity_type}}` | `conn_mod_def::GJ4ujuY70bI::EGmeRtNiSKmMWGzAeiIB_A` |
| Create Tags for an Entity Type | POST | `/api/v4/{{entity_type}}/tags` | `conn_mod_def::GJ4ukHAdCng::OY9zgwhdTduYYcugzj5lFg` |
| Update Tags for a Single Entity | PATCH | `/api/v4/{{entityType}}/{{id}}` | `conn_mod_def::GJ4ujxpum-g::f_1yFFfDTZedHqDT3cyWCg` |

### Bots

| Action | Method | Path | Action id |
|---|---|---|---|
| Confirm a SalesBot Widget Block Execution (Continue a Bot) | POST | `/api/v4/{{bot}}/{{botId}}/continue/{{continueId}}` | `conn_mod_def::GJ4unipz04s::fCTy0dq7T7aWwXjQI_qx6A` |
| Run a Salesbot | POST | `/api/v4/bots/run` | `conn_mod_def::GJ4unat4JJE::i2wy0rvQRB2BP0RXVGgF1A` |

2 more Bots actions are available through search.

This lists 90 of 159 actions. For anything not here, call `search_one_platform_actions` with platform `kommo`. The full catalog is at https://www.withone.ai/knowledge/kommo.

## When a call fails

The error comes from Kommo, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/kommo

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
