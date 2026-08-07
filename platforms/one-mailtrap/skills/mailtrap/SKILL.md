---
name: mailtrap
description: Mailtrap is an email delivery platform that provides sandbox testing, email sending, and deliverability monitoring tools, allowing developers and product teams to test transactional emails safely, send production messages through APIs or SMTP, and troubleshoot email performance. Read and write Mailtrap data through One: sandboxes, sandboxmessages, domains, apitokens, projects, emailtemplates and more, 110 actions with real parameter documentation. Use whenever the user asks to look something up in Mailtrap, create or update a record there, or build code against the Mailtrap API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mailtrap
  generated-from: one-knowledge-base
---

# Mailtrap through One

Mailtrap is an email delivery platform that provides sandbox testing, email sending, and deliverability monitoring tools, allowing developers and product teams to test transactional emails safely, send production messages through APIs or SMTP, and troubleshoot email performance.

One exposes Mailtrap through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mailtrap` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mailtrap is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mailtrap account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Sandboxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sandbox Attributes | GET | `/api/sandboxes/{{sandboxId}}` | `conn_mod_def::GLoa35IyOpg::ai6vcGBBSIel72UPBJA2Kg` |
| List Sandboxes | GET | `/sandboxes` | `conn_mod_def::GLoa35IgXGA::A031qnsDRS6Sr8wMhtapMA` |
| Clean Sandbox | PATCH | `/api/sandboxes/{{sandboxId}}/clean` | `conn_mod_def::GLoa3iAEChA::B4rPlf_fTX-k1dgYYp_bUQ` |
| Create a Sandbox in a Project | POST | `/api/projects/{{projectId}}/sandboxes` | `conn_mod_def::GLoa3iscU1g::EjGUHo7zRhy-F2KE5xUp4Q` |
| Delete a Sandbox | DELETE | `/api/sandboxes/{{sandboxId}}` | `conn_mod_def::GLoa3zprBbA::ZWddppXBRlyzUiXhUR_M_g` |
| Mark as Read Using Sandboxes | PATCH | `/api/sandboxes/{{sandboxId}}/all_read` | `conn_mod_def::GLoa36KL1jg::iqcDcjFgQxamMRGXi_Qm6w` |
| Reset Credentials for a Sandbox | PATCH | `/api/sandboxes/{{sandboxId}}/reset_credentials` | `conn_mod_def::GLoa39FoV7A::YYGZfpnpReSJ5Li7qi8XzQ` |
| Reset Email Address for a Sandbox | PATCH | `/api/sandboxes/{{sandboxId}}/reset_email_username` | `conn_mod_def::GLoa36VLCcA::TuiLcrm0QKuYZXiuymKDdg` |
| Toggle Email Username for a Sandbox | PATCH | `/api/sandboxes/{{sandboxId}}/toggle_email_username` | `conn_mod_def::GLoa3hh_Zwg::53cFXaLLR12WMJqEPtdiLw` |
| Update a Sandbox | PATCH | `/api/sandboxes/{{sandboxId}}` | `conn_mod_def::GLoa4EJx8wg::MLxYicDOQ16eASU6MdyWYA` |

### SandboxMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get HTML Message from a Sandbox Message | GET | `/api/sandboxes/{{sandboxId}}/messages/{{messageId}}/body.html` | `conn_mod_def::GLoa3BXws-A::ECyDBQdbTPKwn6liEUgIfw` |
| Get HTML Source of a Sandbox Message | GET | `/api/sandboxes/{{sandboxId}}/messages/{{messageId}}/body.htmlsource` | `conn_mod_def::GLoa3EGE5EA::ZNK04ahCTrOYt1HPhLFQXQ` |
| Get Message as .eml from a Sandbox | GET | `/api/sandboxes/{{sandboxId}}/messages/{{messageId}}/body.eml` | `conn_mod_def::GLoa3EOpsHA::WK07gZbLTZGovq3Nq_cWsA` |
| Get Raw Message Body for a Sandbox Message | GET | `/api/sandboxes/{{sandboxId}}/messages/{{messageId}}/body.raw` | `conn_mod_def::GLoa3L-2tVA::ffVjVTf1RmGEs_9BIKsgxQ` |
| Get Text Message Body from a Sandbox Message | GET | `/api/sandboxes/{{sandboxId}}/messages/{{messageId}}/body.txt` | `conn_mod_def::GLoa3MhvEbA::bn3X0e_HRfOdG9FpApeZhA` |
| Show an Email Message in a Sandbox | GET | `/api/sandboxes/{{sandboxId}}/messages/{{messageId}}` | `conn_mod_def::GLoa3TQQtCg::5o04ExGARju_Ii52suz-Ug` |
| Delete a Sandbox Message | DELETE | `/api/sandboxes/{{sandboxId}}/messages/{{messageId}}` | `conn_mod_def::GLoa2519kug::-YOHhJtHRTiHU3flEAgOMg` |
| Forward Message for a Sandbox Message | POST | `/api/sandboxes/{{sandboxId}}/messages/{{messageId}}/forward` | `conn_mod_def::GLoa25shpXA::uG09iswhS1qn0vBkWylnJw` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain | GET | `/api/domains/{{domainId}}` | `conn_mod_def::GLoa2QAde1A::KQoLwqxkRp6lBXrhZDWfbA` |
| List Domains | GET | `/domains` | `conn_mod_def::GLoa2QrZb-A::IZ1doKB8So2PQSgpUA2-Hg` |
| Create Domain | POST | `/domains` | `conn_mod_def::GLoa2KHjxxA::njk1P7D-TQKOkgaYukBu8A` |
| Delete Domain | DELETE | `/api/domains/{{domainId}}` | `conn_mod_def::GLoa2ROHYEg::PQR8Rzf2Q1Suj1jLNlcvqw` |
| Send Setup Instructions for a Domain | POST | `/api/domains/{{domainId}}/send_setup_instructions` | `conn_mod_def::GLoa2SXfd4A::f3w651aMTQGKlNQThPBAjA` |
| Update a Domain | PATCH | `/api/domains/{{domainId}}` | `conn_mod_def::GLoa2ZGoSTg::yhWtXJpZRqepoDl5KRal8w` |

### ApiTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Token | GET | `/api/api_tokens/{{id}}` | `conn_mod_def::GLoa1cT5pgA::IXKA0tq7TG2aiez4lvbIng` |
| List API Tokens | GET | `/api_tokens` | `conn_mod_def::GLoa1cYGelA::c7lPsQzVQdqJm38MHkM9XA` |
| Create API Token | POST | `/api/api_tokens` | `conn_mod_def::GLoa1VUr0oA::_FzRdliNTFeERkatZhK3rw` |
| Delete API Token | DELETE | `/api/api_tokens/{{id}}` | `conn_mod_def::GLoa1SNneyg::W8CXh2nFQ0m7tsrRHoMfgA` |
| Reset API Token | POST | `/api/api_tokens/{{id}}/reset` | `conn_mod_def::GLoa1gAqnig::HSB4LSXWRH-eiRoXhR2efQ` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project by ID | GET | `/api/projects/{{projectId}}` | `conn_mod_def::GLoa3aRPM2g::v5O424uQSOGdS1TWJuKRSA` |
| List Projects | GET | `/projects` | `conn_mod_def::GLoa3ZMXFtg::gs2_u_gCTJa6ftYHWZXgOg` |
| Create Project | POST | `/projects` | `conn_mod_def::GLoa3a5oOQg::GId_AoKIS3y_fkkBHFFhtQ` |
| Delete Project | DELETE | `/api/projects/{{projectId}}` | `conn_mod_def::GLoa3an7HtA::910OFdk3TSeSctO0H4sHog` |
| Update a Project | PATCH | `/api/projects/{{projectId}}` | `conn_mod_def::GLoa3gehi_A::JKYZfEeYQ3OEq4qDrKHVOw` |

### EmailTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Template | GET | `/api/email_templates/{{emailTemplateId}}` | `conn_mod_def::GLoa4eeW2Jg::0GwKemKlTE6LUhe2GyrwsQ` |
| List Email Templates | GET | `/email_templates` | `conn_mod_def::GLoa4eRYcpA::utbB3-C9SLKmaVHvwGNrxg` |
| Create Email Template | POST | `/email_templates` | `conn_mod_def::GLoa4S9qRXA::L8E7U8IGSI67y7Jz8q0AVQ` |
| Delete Email Template | DELETE | `/api/email_templates/{{emailTemplateId}}` | `conn_mod_def::GLoa4S4lhLg::shqec5IEToWplrJ7DwrgaA` |
| Update Email Template | PATCH | `/api/email_templates/{{emailTemplateId}}` | `conn_mod_def::GLoa4eMpSTA::deBEXHn9TkWE6-_HdgG0fA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/api/webhooks/{{webhookId}}` | `conn_mod_def::GLoa4ksDoqg::YASCpnHnRN6YyvtNTDLlLg` |
| List Webhooks | GET | `/api/webhooks` | `conn_mod_def::GLoa4lQcbog::rddiVU_VQLePnohjVdtlaQ` |
| Create Webhook | POST | `/webhooks` | `conn_mod_def::GLoa4uXMg2g::fFIUUuwHQBegbTkLBOnx5Q` |
| Delete a Webhook | DELETE | `/api/webhooks/{{webhookId}}` | `conn_mod_def::GLoa4lDcYqA::KwIFIfx6Tp-KnTDsYljCoQ` |
| Update a Webhook | PATCH | `/api/webhooks/{{webhookId}}` | `conn_mod_def::GLoa4nhiYag::V1lLw9XJS-qbfEf3HNelhQ` |

### ContactLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact List | GET | `/api/contacts/lists/{{listId}}` | `conn_mod_def::GLoa2D-rw-A::ix3WxbMaTai928_0FVyfCw` |
| List Contact Lists | GET | `/contacts/lists` | `conn_mod_def::GLoa2BeacOA::2IatgxzFQyqrorG5yS6ydA` |
| Create Contact List | POST | `/contacts/lists` | `conn_mod_def::GLoa10jlZyg::L5COkfr8SeOU94bFMTU6Pw` |
| Delete Contact List | DELETE | `/api/contacts/lists/{{listId}}` | `conn_mod_def::GLoa2BCRWsA::0PUysRaaRkO-LXQVTrefeg` |
| Update a Contact List | PATCH | `/api/contacts/lists/{{listId}}` | `conn_mod_def::GLoa2BeSXng::MDb4MMlcTeqmxSnTWr_syw` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact | GET | `/api/contacts/{{contactIdentifier}}` | `conn_mod_def::GLoa2Jq2pmA::Rrp-O-0aTuiOCvK9hiPiYg` |
| Create a New Contact | POST | `/contacts` | `conn_mod_def::GLoa2B236pg::WP_c0U71Q1uL26hp-iJ5EA` |
| Delete Contact | DELETE | `/api/contacts/{{contactIdentifier}}` | `conn_mod_def::GLoa2J3irUg::lnIOz9pxR6GUAIxgr75KXw` |
| Update Contact | PATCH | `/api/contacts/{{contactIdentifier}}` | `conn_mod_def::GLoa2KUXsYA::8ELOgjGzRoWEWhIY2KLcGQ` |

### InboundFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Inbound Folder | GET | `/api/inbound/folders/{{folderId}}` | `conn_mod_def::GLoa2owqbaA::fdkeqnMTSNuMaMVFhO1qxw` |
| List Inbound Folders | GET | `/inbound/folders` | `conn_mod_def::GLoa2p86foA::dt81Oy3uTvm4ehgU_rA2Ow` |
| Create an Inbound Folder | POST | `/inbound/folders` | `conn_mod_def::GLoa2q-Dn2A::gg-rNe-QSqW0NWPP2Sqo5w` |
| Delete an Inbound Folder | DELETE | `/api/inbound/folders/{{folderId}}` | `conn_mod_def::GLoa2p9Vq4g::JiXLcCiZRo6dprJ6pwBYow` |

### ContactFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Field by ID | GET | `/api/contacts/fields/{{fieldId}}` | `conn_mod_def::GLoa1068WjA::2_tID0TSSJ60TTW2qHoRTg` |
| Get All Contact Fields | GET | `/contacts/fields` | `conn_mod_def::GLoa1ze5xeg::bHb77di6REWsgFMG3VzMjw` |
| Update Contact Field | PATCH | `/api/contacts/fields/{{fieldId}}` | `conn_mod_def::GLoa11MCTPg::mgoAmmjURyqXddqePwTXsg` |

### CompanyInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Info for a Domain | GET | `/api/domains/{{domainId}}/company_info` | `conn_mod_def::GLoa2Qqy-Dg::5JRxfqolQEu9r4TeOE2XFA` |
| Create Company Info for a Domain | POST | `/api/domains/{{domainId}}/company_info` | `conn_mod_def::GLoa2KySZZA::EnEarqD_Slex0Pi5O3TTIw` |
| Update Company Info for a Domain | PATCH | `/api/domains/{{domainId}}/company_info` | `conn_mod_def::GLoa2ZWdDsA::aJrJSB7dRXWkBY4kLSLTDw` |

### Suppressions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Suppressions | GET | `/suppressions` | `conn_mod_def::GLoa4XMFK9g::K5ZwrZ3KRayV0d8Kalxg0Q` |
| Create Suppression | POST | `/suppressions` | `conn_mod_def::GLoa4SXLIvA::3x_UilN1SbiUhwEvQr_RMA` |
| Delete Suppression | DELETE | `/api/suppressions/{{suppressionId}}` | `conn_mod_def::GLoa4UMsh4A::fZqtPWjKQ2OrXESNPJSzow` |

### AccountAccesses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Accesses | GET | `/account_accesses` | `conn_mod_def::GLoa1Tar0tg::FvUD0LBZTNmuJb-W0MzJWA` |
| Remove Account Access | DELETE | `/api/account_accesses/{{accountAccessId}}` | `conn_mod_def::GLoa1Saqv0g::wSoVj4oRSIavwwJ02aS3ig` |

### EmailLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Log Message by ID | GET | `/api/email_logs/{{sendingMessageId}}` | `conn_mod_def::GLoa2Y6ddlA::5i_PYPAISh6O7Sz9U_0aUA` |
| List Email Logs | GET | `/email_logs` | `conn_mod_def::GLoa2jS_EHA::tSAeK2jNSPWlrHgpJoqdxA` |

### Inboxes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Inboxes in an Inbound Folder | GET | `/api/inbound/folders/{{folderId}}/inboxes` | `conn_mod_def::GLoa2xVZ72A::Qr08Udl1Rx-xnHf4Ee0noQ` |
| Create an Inbox in an Inbound Folder | POST | `/api/inbound/folders/{{folderId}}/inboxes` | `conn_mod_def::GLoa2yXOu_A::CXqnkH5kRH6_bdTetpklzA` |

### InboundFolderInboxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Inbound Folder Inbox | DELETE | `/api/inbound/folders/{{folderId}}/inboxes/{{inboxId}}` | `conn_mod_def::GLoa2xWhh4A::oCqUUG3eTCaz_CN_38_Ktg` |
| Update an Inbound Folder Inbox | PATCH | `/api/inbound/folders/{{folderId}}/inboxes/{{inboxId}}` | `conn_mod_def::GLoa25v35Rg::kINptGN6TMSvfGelNUuaxQ` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Messages in a Sandbox | GET | `/api/sandboxes/{{sandboxId}}/messages` | `conn_mod_def::GLoa3LxZcPA::nbBcMzDmSnGY_hnGahJuYw` |
| List an Inbox's Messages | GET | `/api/inbound/inboxes/{{inboxId}}/messages` | `conn_mod_def::GLoa3Nuz_dA::Br_l6xMiQlScyIX2Zu9bZQ` |

### ContactField

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Contact Field | POST | `/contacts/fields` | `conn_mod_def::GLoa1rLQlLA::5Izu8FkMSHST66JKWhOgeA` |
| Delete Contact Field | DELETE | `/api/contacts/fields/{{fieldId}}` | `conn_mod_def::GLoa17iQAwg::lnjowPbKTzeOFaljp6-TQw` |

### ContactExports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Export | GET | `/api/contacts/exports/{{exportId}}` | `conn_mod_def::GLoa2p8687A::nTADYsNlRUmwZ4QA1c_VtA` |
| Create Contact Export | POST | `/contacts/exports` | `conn_mod_def::GLoa2ZvTEbg::aOfjfEnKTDetCodoEx5fMg` |

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Send Emails | POST | `/api/batch` | `conn_mod_def::GLoa4C_938A::7Notb-ZkSoONMrrlKP91Wg` |
| Batch Send Emails | POST | `/api/batch` | `conn_mod_def::GLoa4DCt2og::CCJOyeS4QhektWe0J_t7XQ` |

### OrganizationSubAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Sub Accounts | GET | `/api/organizations/{{organizationId}}/sub_accounts` | `conn_mod_def::GLoa3T1r96g::OarDIkAIRuekLb2YDMnvig` |
| Create Organization Sub Account | POST | `/api/organizations/{{organizationId}}/sub_accounts` | `conn_mod_def::GLoa3UPhp2g::D25wvR_KRh2Z2M0pVOk8kw` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Accounts | GET | `/accounts` | `conn_mod_def::GLoa1SkZiOA::Y9NiVksVQwO-17G8BpisPA` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Attachments for a Sandbox Message | GET | `/api/sandboxes/{{sandboxId}}/messages/{{messageId}}/attachments` | `conn_mod_def::GLoa1jyTGGg::2cqE8swHSoaLbA7nOMWvFQ` |

### ContactEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Contact Event | POST | `/api/contacts/{{contactIdentifier}}/events` | `conn_mod_def::GLoa1qx_Ikg::LlB9FkyjSq6z0HRHCA5_kg` |

### ContactsImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Import Contacts | POST | `/contacts/imports` | `conn_mod_def::GLoa1uThfZg::kTWbQtpDQum7PsaseGKP-Q` |

### InboundMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Message from an Inbound Inbox | GET | `/api/inbound/inboxes/{{inboxId}}/messages/{{id}}` | `conn_mod_def::GLoa263Cddg::XR8yx_afRB2CRtVMVWIohQ` |

### MailHeaders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Mail Headers of a Sandbox Message | GET | `/api/sandboxes/{{sandboxId}}/messages/{{messageId}}/mail_headers` | `conn_mod_def::GLoa3BQFUug::sUyfdPZdRGm8JizI_wnBlA` |

This lists 90 of 110 actions. For anything not here, call `search_one_platform_actions` with platform `mailtrap`. The full catalog is at https://www.withone.ai/knowledge/mailtrap.

## When a call fails

The error comes from Mailtrap, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mailtrap

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
