---
name: cert-central
description: CertCentral is DigiCert’s platform for managing digital certificates and related public key infrastructure workflows, helping organizations issue, monitor, and automate certificate lifecycle operations for websites, applications, and connected systems. Read and write CertCentral data through One: certificateorders, certificate, scan, domain, user, reports and more, 360 actions with real parameter documentation. Use whenever the user asks to look something up in CertCentral, create or update a record there, or build code against the CertCentral API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: cert-central
  generated-from: one-knowledge-base
---

# CertCentral through One

CertCentral is DigiCert’s platform for managing digital certificates and related public key infrastructure workflows, helping organizations issue, monitor, and automate certificate lifecycle operations for websites, applications, and connected systems.

One exposes CertCentral through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `cert-central` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm CertCentral is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real CertCentral account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CertificateOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Certificate Orders | GET | `/services/v2/order/certificate` | `conn_mod_def::GMZmRoxZf0s::ZycQcPc-S2Ofyoo6fnTyCg` |
| View Signature Units for a Certificate Order | GET | `/services/v2/order/certificate/{{orderId}}/signature-unit` | `conn_mod_def::GMZmTuU72VM::7WONBfjqQICSL13hT9U8-Q` |
| Change CT Status for a Certificate Order | PUT | `/services/v2/order/certificate/{{orderId}}/ct-status` | `conn_mod_def::GMZmQ2JjJcw::Ys8vgbq-T_qiRwFcOPBmQw` |
| Change DCV Method for a Certificate Order | PUT | `/services/v2/order/certificate/{{orderId}}/dcv-method` | `conn_mod_def::GMZmQ85z-pQ::en8bnhS0Tf2rnVuwXXYqFw` |
| Delete a Custom Renewal Message for a Certificate Order | DELETE | `/services/v2/order/certificate/{{orderId}}/custom-renewal-message` | `conn_mod_def::GMZmQ9xcPnI::Sc0C9R43Soaf_KroiTGn_w` |
| Email a Certificate Order's Site Seal | POST | `/services/v2/order/certificate/{{orderId}}/site-seal/email-seal` | `conn_mod_def::GMZmRfC24GQ::iSpSWrTiRDqLTo4Hmg9O9g` |
| Generate DCV Random Value for a Certificate Order | PUT | `/services/v2/order/certificate/{{orderId}}/dcv-random-value` | `conn_mod_def::GMZmRH8WYUM::zdCgemuKQdeXcENjxgu3MQ` |
| Order a Secure Site EV Certificate | POST | `/services/v2/order/certificate/ssl_ev_securesite_flex` | `conn_mod_def::GMZmSwdXDhc::CLNXFA1XQsOrcYfM2n4PDQ` |
| Order a Secure Site OV Certificate | POST | `/services/v2/order/certificate/ssl_securesite_flex` | `conn_mod_def::GMZmSwsd-LU::S_13u0lUQNugiCAqTTn6Xg` |
| Order Basic EV SSL Certificate | POST | `/services/v2/order/certificate/ssl_ev_basic` | `conn_mod_def::GMZmRwVK_9c::b-gT4XtgRS6QnS6AS0LaHg` |
| Order Certificate Using SSL Dv Geotrust Flex | POST | `/services/v2/order/certificate/ssl_dv_geotrust_flex` | `conn_mod_def::GMZmSLVRisc::SWL2WiYnT4igL5HJGHnaug` |
| Order Certificate Using SSL EV Basic | POST | `/services/v2/order/certificate/ssl_ev_basic` | `conn_mod_def::GMZmSTryLNw::P3cLPVuGT_6WvkuS_p92aA` |

6 more CertificateOrders actions are available through search.

### Certificate

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Certificate | GET | `/services/v2/certificate/{{certificateId}}/download/platform` | `conn_mod_def::GMZmKNpJIEo::0Ei_DhTVTS6JETg58cMGHA` |
| Download a Certificate for an Order | GET | `/services/v2/certificate/download/order/{{orderId}}` | `conn_mod_def::GMZmKOkl2G8::vrukx2KOTEK6RVlQh9D_Cg` |
| Download Certificate | GET | `/apicontroller/v1/certificate/download` | `conn_mod_def::GMZmKQLPEjI::PxfbASN7T6yQrTYHjwd11A` |
| Download Certificate by Format | GET | `/services/v2/certificate/{{certificateId}}/download/format/{{formatType}}` | `conn_mod_def::GMZmKXIxekc::urNcJmS0QmuKcuESlTugkA` |
| Download Certificate by Format for an Order | GET | `/services/v2/certificate/download/order/{{orderId}}/format/{{formatType}}` | `conn_mod_def::GMZmKXP-5z8::S_DGUUrbSHmGmfTjNNoKFg` |
| Archive a Certificate | PUT | `/services/v2/certificate/{{certificateId}}/archive` | `conn_mod_def::GMZmKGocEd8::60J9wzudQV2gOQoPPpzhqQ` |
| Delete Certificate | POST | `/apicontroller/v1/certificate/delete` | `conn_mod_def::GMZmKPHifdw::7lrAwm4JRBuo-9zICF6oYg` |
| Duplicate a Certificate for an Order | POST | `/services/v2/order/certificate/{{orderId}}/duplicate` | `conn_mod_def::GMZmQ8zxgYA::yTpBg6HKTziya1z4SC9zzA` |
| Restore a Certificate | PUT | `/services/v2/certificate/{{certificateId}}/unarchive` | `conn_mod_def::GMZmKfc9ZCk::hZbr78ITT1C2wOsSC3aQhw` |
| Revoke a Certificate | PUT | `/services/v2/certificate/{{certificateIdentifier}}/revoke` | `conn_mod_def::GMZmKhRGS3o::fJ_7h8lmQEe7nDZzhMMsnw` |
| Send Email for a Certificate | PUT | `/services/v2/certificate/{{certificateId}}/sendemail` | `conn_mod_def::GMZmKX75h4k::Dfary_cOR4CxcqKyECXzFg` |

### Scan

| Action | Method | Path | Action id |
|---|---|---|---|
| Abort Scan | POST | `/apicontroller/v1/scan/abort` | `conn_mod_def::GMZmVPHwP9g::hhs8JJuzSTOtJf8KDgLAgw` |
| Create Scan | POST | `/apicontroller/v1/scan/create` | `conn_mod_def::GMZmVR04Iy0::VPJb3pBBSF6AMXo-urDnEA` |
| Delete Future Job Using Scan | POST | `/apicontroller/v1/scan/deleteFutureJob` | `conn_mod_def::GMZmVaQFoIs::nQ4OzVxCQsuHs-ID2BfPVQ` |
| Delete Scan | POST | `/apicontroller/v1/scan/delete` | `conn_mod_def::GMZmVY_XJgU::L_iYLpzhR8KfA6DbR6ARyA` |
| Filter Scan | POST | `/apicontroller/v1/scan/filter` | `conn_mod_def::GMZmVhGKnMo::iY7kmKazSvCCFddksuRVDg` |
| Get Subdomains from a Scan | POST | `/apicontroller/v1/scan/getSubdomains` | `conn_mod_def::GMZmVoOzZP0::287VkHdLT62LUijePwLEcg` |
| Reinstate a Scan | POST | `/apicontroller/v1/scan/reinstate` | `conn_mod_def::GMZmVv1UUWA::8loSjShKRiitJK2iXQ9xpQ` |
| Remove Jobs for a Scan | POST | `/apicontroller/v1/scan/removeJobs` | `conn_mod_def::GMZmVvzvdVc::MpBn-STySPWbJsBwtfxL4g` |
| Restore Jobs Using Scan | POST | `/apicontroller/v1/scan/restoreJobs` | `conn_mod_def::GMZmVv9xgzQ::_wj0fn0BRDeUJVcar-C04Q` |
| Suspend Scan | POST | `/apicontroller/v1/scan/suspend` | `conn_mod_def::GMZmVvZQgAU::qMni8Kj6T3WSIgu2KDOpqg` |
| Update a Scan | POST | `/apicontroller/v1/scan/update` | `conn_mod_def::GMZmV3oo7zc::z5Z8NP-MSf2IwoMfQfnuzg` |

### Domain

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate a Domain | PUT | `/services/v2/domain/{{domainId}}/activate` | `conn_mod_def::GMZmLfUPKL4::x1GhIyDDRBG0U8TNzdDtLg` |
| Activate Domain Locking for a Domain | PUT | `/services/v2/domain/{{domainId}}/activate-domain-locking` | `conn_mod_def::GMZmLfjpGGM::2s4Sa-2WQraFL-mlJl8jsg` |
| Add a Domain | POST | `/services/v2/domain` | `conn_mod_def::GMZmLhC6N5g::237KNCO0QT6dMMIOZIsC8g` |
| Change DCV Method for a Domain | PUT | `/services/v2/domain/{{domainId}}/dcv/method` | `conn_mod_def::GMZmLiaFG2s::MfFtQaw9TkqCicsqQQjV2A` |
| Check CAA for a Domain | PUT | `/services/v2/domain/{{domainId}}/caa` | `conn_mod_def::GMZmLiDkNgo::nXEVbkbuQqqkBmiZ99YG1Q` |
| Deactivate a Domain | PUT | `/services/v2/domain/{{domainId}}/deactivate` | `conn_mod_def::GMZmLpk_1WY::hOAuxew4SA-imr4aLPmHhA` |
| Deactivate Domain Locking for a Domain | PUT | `/services/v2/domain/{{domainId}}/deactivate-domain-locking` | `conn_mod_def::GMZmLpMO7fM::T6cP7NseRg2STuYhcahnbw` |
| Delete a Domain | DELETE | `/services/v2/domain/{{domainId}}` | `conn_mod_def::GMZmLpOQKhs::fdLBcntST3CzhbwdugK05Q` |
| Resend DCV Emails for a Domain | PUT | `/services/v2/domain/{{domainId}}/dcv/emails` | `conn_mod_def::GMZmP52XFb8::j5lwllPGTMuIG_GvH48-mQ` |
| Validate a Domain's DCV Token | PUT | `/services/v2/domain/{{domainId}}/dcv/validate-token` | `conn_mod_def::GMZmL4tx1uM::rutQ-LbuSwqsgVfJlZ2XCQ` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/services/v2/user/{{userId}}` | `conn_mod_def::GMZmWpfl8aw::_3ujZEWETn2mjoZMTjdngw` |
| Resend Create Email for a User | GET | `/services/v2/user/{{userId}}/resend-create-email` | `conn_mod_def::GMZmWpHtovM::oul_JTEmRe2hWww1V5c1LQ` |
| Add a Service User | POST | `/services/v2/user` | `conn_mod_def::GMZmWXNJWAg::JJrna-bsQvSEFmA9cfmwHw` |
| Change a User Role | PUT | `/services/v2/user/{{userId}}/role` | `conn_mod_def::GMZmWfPjmxk::vpjwsM6tQWuf5JLIbE542w` |
| Create a User | POST | `/services/v2/user` | `conn_mod_def::GMZmWXaqqRk::NTWCp9vdTGWlGuUHLsxIbw` |
| Delete a User | DELETE | `/services/v2/user/{{userId}}` | `conn_mod_def::GMZmWiUOAE0::zY92zJxfTMSk7P9XZOVidw` |
| Edit a Service User | PUT | `/services/v2/user/{{userId}}` | `conn_mod_def::GMZmWgYvGks::pP-5ckIUTP-j4FwVgjXNqg` |
| Edit a User | PUT | `/services/v2/user/{{userId}}` | `conn_mod_def::GMZmWfL1GpA::jQ5eIh9rSxKMQAffM37AXQ` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Report Run | GET | `/reports/v1/report/{{reportIdentifier}}/{{reportRunIdentifier}}#download` | `conn_mod_def::GMZmUl-T2pM::c-Zs-PVbTU-iw8YpAcDBOg` |
| Get JSON Report | GET | `/reports/v1/report/{{reportIdentifier}}/{{reportRunIdentifier}}/json` | `conn_mod_def::GMZmUyTwAJs::k-f5CCxbSA-WMrm-hAsLxg` |
| Create Report | POST | `/reports/v1/report` | `conn_mod_def::GMZmUcoGdbE::26ck0REMS36mF4tQWdRhDA` |
| Delete a Report | DELETE | `/reports/v1/report/{{reportIdentifier}}` | `conn_mod_def::GMZmUkKcuxg::0RA9Ube4T4Kf33rvRDC4CA` |
| Delete Endpoints | POST | `/apicontroller/v1/reports/delete` | `conn_mod_def::GMZmVF5VnJs::azKUu4lZSLuXvMxtneujzQ` |
| Edit a Report | PUT | `/reports/v1/report/{{reportIdentifier}}` | `conn_mod_def::GMZmUog7wzg::rlVBv1xLQjyMgpKYglXtfQ` |
| Filter Report Values Using Apicontroller Reports | POST | `/apicontroller/v1/reports/filter` | `conn_mod_def::GMZmVFzx65o::OE8htj2nShubDeiTZ3r_KA` |

### Sensor

| Action | Method | Path | Action id |
|---|---|---|---|
| Reinstate Sensor | POST | `/apicontroller/v1/sensor/reinstate` | `conn_mod_def::GMZmV4ewjAo::4Puw-TyqSw6RFw_pNP9viQ` |
| Stop Debug for a Sensor | POST | `/apicontroller/v1/sensor/stopDebug` | `conn_mod_def::GMZmWCiMkY4::ZXyeilN7S4CqYvF9WZY-UQ` |
| Suspend Sensor | POST | `/apicontroller/v1/sensor/suspend` | `conn_mod_def::GMZmWAT3EsE::CLzQGtoHReKX2bvpCMg8jQ` |
| Update Advanced Settings for a Sensor | POST | `/apicontroller/v1/sensor/updateAdvancedSettings` | `conn_mod_def::GMZmWBZDv68::vOVgAJYMSsOUB3QQij6CzA` |
| Update Sensor Details | POST | `/apicontroller/v1/sensor/updateSensorDetails` | `conn_mod_def::GMZmWKclRYk::TpZ4XswBQRqqYAn5sdGBPQ` |
| Upgrade Sensor | POST | `/apicontroller/v1/sensor/upgradeSensor` | `conn_mod_def::GMZmWJnoDao::5a0jJQXAQByyTT_NAm4Q5w` |
| Void Sensor | POST | `/apicontroller/v1/sensor/void` | `conn_mod_def::GMZmWJHzZXs::28DccMiMRcWw_DMGazo8UA` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate a Webhook | PUT | `/services/v2/webhook/{{webhookId}}/activate` | `conn_mod_def::GMZmXfs1SL4::NcYRlJRuR9-erXgof934Ag` |
| Check Challenge Using Services v2 Webhook | PUT | `/services/v2/webhook/{{webhookId}}/check-challenge` | `conn_mod_def::GMZmXx0HJ48::AraIx9hXSxCkcUc-CmZMxg` |
| Create Webhook | POST | `/services/v2/webhook` | `conn_mod_def::GMZmXgXxKnE::-OEJnSGqSDWgdlf7sbnTkQ` |
| Deactivate a Webhook | PUT | `/services/v2/webhook/{{webhookId}}/deactivate` | `conn_mod_def::GMZmXgrddHM::MYsBJAv_TqWV5hyjq7P5MA` |
| Send Challenge Using Webhook | PUT | `/services/v2/webhook/{{webhookId}}/send-challenge` | `conn_mod_def::GMZmXy3G9xY::YjJorPW6QO2nHVhDTWYwlw` |
| Send Test Event to a Webhook Endpoint | POST | `/services/v2/webhook/test-endpoint` | `conn_mod_def::GMZmXyTj1yA::fhfXCdGNTUiOBeoqSiVl3w` |
| Update a Webhook Endpoint | PUT | `/services/v2/webhook/{{webhookId}}` | `conn_mod_def::GMZmXxuYvG4::0swy4tuJRQ2VMTHSwfHXjg` |

### Container

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Container Info | GET | `/services/v2/container/{{containerId}}` | `conn_mod_def::GMZmK1TNvec::LkUYAT0kRX-tSqoK1-qq5A` |
| Activate a Container | PUT | `/services/v2/container/{{containerId}}/activate` | `conn_mod_def::GMZmKoSyK4I::Se_6Ted8T1WkmPAwSWA16A` |
| Create a Child Container | POST | `/services/v2/container/{{containerId}}/children` | `conn_mod_def::GMZmK1vh0TE::SWKmVrEfQjeyKeVWX4Hcdw` |
| Deactivate a Container | PUT | `/services/v2/container/{{containerId}}/deactivate` | `conn_mod_def::GMZmK0JgeUY::jizXqgFTTWehlDJFZi4NYg` |
| Edit a Container | PUT | `/services/v2/container/{{containerId}}` | `conn_mod_def::GMZmK0py_XA::Y8O6q4oSSnqkGP1BhvVtfw` |
| Update Allowed Domains for a Container | PUT | `/services/v2/container/{{containerId}}/allowed-domain-names` | `conn_mod_def::GMZmLE7PKV4::8MPc8RuwRH-atc-4MFwoBg` |

### AccountMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Fields for an Account | GET | `/services/v2/account/metadata` | `conn_mod_def::GMZmI5X_lIU::qIwfGDuDQbGhdzMaUwZNQw` |
| Add a Custom Field to the Account | POST | `/services/v2/account/metadata` | `conn_mod_def::GMZmIg8uahg::1N4YLiyETOmPrwOPdA4v3g` |
| Bulk Add Fields for Account Metadata | POST | `/services/v2/account/metadata/bulk` | `conn_mod_def::GMZmIpY4KXw::huTTDqH_QPiC34nmVCBZ4w` |
| Delete Account Metadata | DELETE | `/services/v2/account/metadata/{{metadataId}}` | `conn_mod_def::GMZmIw1ibPQ::_aYc5MYfR4SZWpBzWmFduA` |
| Edit a Custom Account Metadata Field | PUT | `/services/v2/account/metadata/{{metadataId}}` | `conn_mod_def::GMZmIxE8MtE::5aZn2sP5QjaUPn4hZVlcxQ` |

### CertificateOrder

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Certificate Order Info | GET | `/services/v2/order/certificate/{{orderId}}` | `conn_mod_def::GMZmSLBC_wk::ZCRsqV4_SQOziptSGgmwyg` |
| Delete a Certificate Order | DELETE | `/services/v2/order/certificate/{{orderId}}` | `conn_mod_def::GMZmQ_-X3zU::iycF6BSdSd6sgHM943a0LA` |
| Pkio Organisation Person Certificate Order | POST | `/services/v2/order/certificate/pkio_organisation_person` | `conn_mod_def::GMZmSUNHWWY::UoedQopiTqWht64zxXHXWg` |
| Reissue a Certificate for a Certificate Order | POST | `/services/v2/order/certificate/{{orderId}}/reissue` | `conn_mod_def::GMZmTLyu_VE::yBmQ8wu2RhO7R1ZrG8ftdg` |
| Update Auto-Reissue Settings for a Certificate Order | PUT | `/services/v2/order/certificate/{{orderId}}/auto-reissue` | `conn_mod_def::GMZmTVNAAFE::EjpoaLyVQACM6ctvS2iVDQ` |

### Organization

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization | GET | `/services/v2/organization/{{organizationId}}` | `conn_mod_def::GMZmUCdmIrg::Psas5bkcQ4WpmUhnwVPUUg` |

4 more Organization actions are available through search.

This lists 90 of 360 actions. For anything not here, call `search_one_platform_actions` with platform `cert-central`. The full catalog is at https://www.withone.ai/knowledge/cert-central.

## When a call fails

The error comes from CertCentral, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/cert-central

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
