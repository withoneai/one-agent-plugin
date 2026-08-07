---
name: workiom
description: Workiom is an all-in-one no-code work management platform that enables teams to build custom apps, manage data, automate workflows, and collaborate on projects within a unified workspace to streamline operations and improve productivity. Read and write Workiom data through One: tenant, appdata, tenantsettings, apps, tenantsubscription, integrations and more, 568 actions with real parameter documentation. Use whenever the user asks to look something up in Workiom, create or update a record there, or build code against the Workiom API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: workiom
  generated-from: one-knowledge-base
---

# Workiom through One

Workiom is an all-in-one no-code work management platform that enables teams to build custom apps, manage data, automate workflows, and collaborate on projects within a unified workspace to streamline operations and improve productivity.

One exposes Workiom through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `workiom` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Workiom is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Workiom account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tenant

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Call API In Automation Settings for a Tenant | GET | `/api/services/app/Tenant/GetCallApiInAutomationSettings` | `conn_mod_def::GKT5BTWBMXA::Ni4_VyYFRdiY22X2hUtuQA` |
| Get Tenant Basic Public Info | GET | `/api/services/app/Tenant/GetTenantBasicPublicInfo` | `conn_mod_def::GKT5B8qwUNA::VIH1ERDxRmmPKHhAh3luNg` |
| Get Tenant For Edit | GET | `/api/services/app/Tenant/GetTenantForEdit` | `conn_mod_def::GKT5B6yvJeg::fake9JcwR7e5gOuWG4F_jA` |
| Activate a Tenant | POST | `/api/services/app/Tenant/ActivateTenant` | `conn_mod_def::GKT5AYr5x9g::RPSqkcCQQiWdGUNS7tlr9g` |
| Change a Tenant App Owner | POST | `/api/services/app/Tenant/ChangeOwner` | `conn_mod_def::GKT5Ads8u2A::nE0c5-ixQ0uTc6AMRcRV-w` |
| Clear Temp Logs for a Tenant | POST | `/api/services/app/Tenant/ClearTempLogs` | `conn_mod_def::GKT5AZPuH7A::iC1BFwSAR_KsvWsLWCDRYg` |
| Clone an App From an External Tenant | POST | `/api/services/app/Tenant/CloneAppFromExternalTenant` | `conn_mod_def::GKT5AbBWNAg::IsEsasGoSbSZqpAY0W7jdg` |
| Deactivate a Tenant | POST | `/api/services/app/Tenant/DeactivateTenant` | `conn_mod_def::GKT5Ao0W7dg::bMzrfOTxS0mvWu0Yf6NGtg` |
| Delete a Tenant | DELETE | `/api/services/app/Tenant/DeleteTenant` | `conn_mod_def::GKT5AoL6-jg::-TLOPG2kQe2adhH7Rx4FhQ` |
| Disable Tenant Maintenance Mode | POST | `/api/services/app/Tenant/DisableTenantMaintenanceMode` | `conn_mod_def::GKT5AqSCMug::FhFKPsI8Qn2yOd_b0oHm9w` |
| Execute an Automation Job Manually for a Tenant | POST | `/api/services/app/Tenant/ExecuteAutomationJobManually` | `conn_mod_def::GKT5A5qjiYg::MTkkgLebT625aRkjUnQ4IQ` |
| Execute Automation History Maintenance Job for a Tenant | POST | `/api/services/app/Tenant/ExecuteAutomationHistoryMaintenanceJob` | `conn_mod_def::GKT5A5Vc67g::7--u_YXeSvKsfNBHCsKDlA` |

11 more Tenant actions are available through search.

### AppData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get App Data | GET | `/api/services/app/Data/Get` | `conn_mod_def::GKT40w4V9TA::YkH6ptRCQsuVrg6loPIDdQ` |
| Get App Data by Field Value | GET | `/api/services/app/Data/GetByFieldValue` | `conn_mod_def::GKT40w4ct6g::_iKThJFcSquCgnrSADfaFA` |
| Bulk Calculate Expression Values for App Data | POST | `/api/services/app/Data/BulkCalculateExpressionValue` | `conn_mod_def::GKT40ZMNYVg::zcohoM9qR1q6ZustwULRBA` |
| Bulk Delete App Data | POST | `/api/services/app/Data/BulkDelete` | `conn_mod_def::GKT40T4Xt0g::8C2EWDlRSqm2sWPeyfgIsQ` |
| Bulk Update Partial Data in an App List | POST | `/api/services/app/Data/BulkUpdatePartial` | `conn_mod_def::GKT40Ukka7g::wQ9VK5qYRv2jTgG5u8ml_A` |
| Calculate AI Field Value for App Data | POST | `/api/services/app/Data/CaclulateAiFieldValue` | `conn_mod_def::GKT40Wfpc0A::1ODhbJWBTwavv-M30oQpfQ` |
| Calculate Calculated Field Values for App Data | POST | `/api/services/app/Data/CalculateCalculatedFieldValue` | `conn_mod_def::GKT40Uq36LA::IhaRs-8uSyKkVlV6ggqe-w` |
| Check Whether an App Data Field Is Empty | POST | `/api/services/app/Data/IsFieldEmpty` | `conn_mod_def::GKT409ziT6g::bs9qcZSkRyier97GMRD1pg` |
| Check Whether App Data Accepts Filters | POST | `/api/services/app/Data/IsAcceptFilters` | `conn_mod_def::GKT41FFyjTg::1mns3fkiTFKcf0ZyU679iw` |
| Create App Data | POST | `/api/services/app/Data/Create` | `conn_mod_def::GKT40odZBcg::VFrGEXlUTA-qrxFV5Ko6vQ` |
| Create Compressed File Field Archive for App Data | POST | `/api/services/app/Data/CreateCompressedFileFieldArchive` | `conn_mod_def::GKT40offYFA::Z0Kv7v5zRB6-PE5mbvpOOg` |
| Delete App Data | DELETE | `/api/services/app/Data/Delete` | `conn_mod_def::GKT40nTu7TA::trmvcCm0SXuX3SEnNHCghw` |

10 more AppData actions are available through search.

### TenantSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Tenant Setting Value | GET | `/api/services/app/TenantSettings/GetCustomSettingValue` | `conn_mod_def::GKT5Dwnf8Xg::4t6yUP-xRH67DGq7TDLI9w` |
| Get a Tenant Setting | GET | `/api/services/app/Tenant/GetSettingForTenant` | `conn_mod_def::GKT5Bpkc5hA::bVLC52csQCeSvMn9VoDQNg` |
| Get Custom Tenant Settings Values | GET | `/api/services/app/TenantSettings/GetCustomSettingsValue` | `conn_mod_def::GKT5Dq7tv0g::AjcTp1Q-SsuOuuHqQS6OnQ` |
| Get Invitation Email Domain Restriction Settings | GET | `/api/services/app/TenantSettings/GetInvitationEmailDomainRestrictionSettings` | `conn_mod_def::GKT5DnHpT0A::8dX_b9B3Tuq1XnCmd3s2tA` |
| Get Setting for a User | GET | `/api/services/app/Tenant/GetSettingForUser` | `conn_mod_def::GKT5Bx_7jkg::bZPrzvSqRzGETJbmf0vrWQ` |
| Get Setting for Application | GET | `/api/services/app/Tenant/GetSettingForApplication` | `conn_mod_def::GKT5Bfj5Tvg::uijg4XH6So-w1w6uXCMy1g` |
| Get SSO Auto Provisioning Login Settings | GET | `/api/services/app/TenantSettings/GetSsoAutoProvisioningLoginSettings` | `conn_mod_def::GKT5D8aSlXg::jFk8C012Qwecbo726m9XQg` |
| Get Timezone Settings | GET | `/api/services/app/TenantSettings/GetTimezoneSettings` | `conn_mod_def::GKT5D7lM9IA::5baOX5rfRUSU7ObJ42t85Q` |
| Get Two-Factor Login Settings | GET | `/api/services/app/TenantSettings/GetTwoFactorLoginSettings` | `conn_mod_def::GKT5EBbu4Ug::XcrTwT1FRTeO2TSWdzVigQ` |
| List Tenant Settings | GET | `/api/services/app/Tenant/GetAllSettings` | `conn_mod_def::GKT5BHUjSFA::NLvy1tviQdyH1USJvQCaIw` |
| Clear Tenant Logo | POST | `/api/services/app/TenantSettings/ClearLogo` | `conn_mod_def::GKT5DaWq2zg::2QOnavrKRjWrhFmSgobK5g` |
| Clear Tenant Watermark Settings | POST | `/api/services/app/TenantSettings/ClearWatermark` | `conn_mod_def::GKT5DbSo0sA::usYf9NR9Tj2Jk7CnD6wuJQ` |

10 more TenantSettings actions are available through search.

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Apps for Lookup Table | GET | `/api/services/app/Template/GetAllAppForLookupTable` | `conn_mod_def::GKT5ACPiG3g::wYmiQRoJS32yJoYntdXxcg` |
| Get an App | GET | `/api/services/app/Apps/Get` | `conn_mod_def::GKT4w60CMDg::gYzEPiTMSx-QvFkTwX26CA` |
| Get an App for Editing | GET | `/api/services/app/Apps/GetForEdit` | `conn_mod_def::GKT4wwtJLBA::EWJrWELwQ0mkSEAOcCgKpA` |
| List All Apps | GET | `/api/services/app/Apps/GetAll` | `conn_mod_def::GKT4wofTGqg::x_zi79f1SOS4fHnOKbnQ4A` |
| Check Whether an App Name Is Already Used | POST | `/api/services/app/Apps/IsAppNameAlreadyUsed` | `conn_mod_def::GKT4xD68cpA::VnogK1YVQS2td-gQYpzrUA` |
| Clone an App | POST | `/api/services/app/Apps/CloneApp` | `conn_mod_def::GKT4wSBQHaA::nd8b0OWLTeOe5YRZpCabaQ` |
| Clone an App From an External Tenant | POST | `/api/services/app/Apps/CloneAppFromExternalTenant` | `conn_mod_def::GKT4wW90Uug::p_22h-aWSd6lm2Jo2UKaag` |
| Create an App From a Template | POST | `/api/services/app/Apps/CreateFromTemplate` | `conn_mod_def::GKT4wbD9xkA::Tp1PDMWYRSu7MzLzsEq24Q` |
| Create an App from a Template Category | POST | `/api/services/app/Apps/CreateFromTemplateCategory` | `conn_mod_def::GKT4wSBFCbA::N3GOzbdGR_-kaQJPR4l9Eg` |
| Create App | POST | `/api/services/app/Apps/Create` | `conn_mod_def::GKT4wiy5BYg::n8djEKMUQYaXmQh_ujEcXQ` |
| Delete an App | DELETE | `/api/services/app/Apps/Delete` | `conn_mod_def::GKT4wi7e-pg::_-DlyZhSSMCI1I3dWbBqPg` |
| Delete Dummy Data for an App | DELETE | `/api/services/app/Apps/DeleteDummyData` | `conn_mod_def::GKT4wkT_2aA::qT6VNuTUTaSaPDR612kg0w` |

5 more Apps actions are available through search.

### TenantSubscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Tenant Subscription Period Info | GET | `/api/services/app/TenantSubscription/GetTenantCurrentPeriodInfo` | `conn_mod_def::GKT5FKRh6-g::Hix2YPJhQMycO6bx9EmC3w` |
| Get Tenant Subscription Info | GET | `/api/services/app/TenantSubscription/GetTenantSubscriptionInfo` | `conn_mod_def::GKT5FUPFRCg::DHmt2r7CRs2hBMK9I1BPbQ` |
| Cancel Tenant Subscription | POST | `/api/services/app/TenantSubscription/CancelTenantSubscription` | `conn_mod_def::GKT5Ei_oKpA::hzGmjjvaRjKn5AwErLa2DQ` |
| Check Whether a Tenant Can Have a Trial Edition Subscription | POST | `/api/services/app/TenantSubscription/CanTenantHasTrialEdition` | `conn_mod_def::GKT5Ej8knjA::56GMNBDURD2GgnQXynb3Bw` |
| Detach a Tenant Payment Method from a Tenant Subscription | POST | `/api/services/app/TenantSubscription/DetachTenantPaymentMethod` | `conn_mod_def::GKT5E6PxxiA::E_0d8_ouToOeaDPH3pW3PQ` |
| Disable Recurring Payments for Tenant Subscription | POST | `/api/services/app/TenantSubscription/DisableRecurringPayments` | `conn_mod_def::GKT5EzJLK2A::sbG3xKnbTFigW71yHvjQkQ` |
| Downgrade Tenant Subscription | POST | `/api/services/app/TenantSubscription/DowngradeTenantSubscription` | `conn_mod_def::GKT5Ez6OqlA::8krfSFHdT0-cdpRGWY2bJQ` |
| Enable Recurring Payments for Tenant Subscription | POST | `/api/services/app/TenantSubscription/EnableRecurringPayments` | `conn_mod_def::GKT5EzZ7V_A::MOuKHX8KS0-v0EwW5JNBnw` |
| Extend Trial Period for a Tenant Subscription | POST | `/api/services/app/TenantSubscription/ExtendTrialPeriod` | `conn_mod_def::GKT5EzjM-LA::AvNh7q43R9GA0_Kbx_3xdQ` |
| Move Tenant From Free Edition To Trial Edition | POST | `/api/services/app/TenantSubscription/MoveTenantFromFreeEditionToTrialEdition` | `conn_mod_def::GKT5FUO_1Yg::0vq1VEIpQN-AgcHL_OWQwA` |
| Move Tenant To Free Edition | POST | `/api/services/app/TenantSubscription/MoveTenantToFreeEdition` | `conn_mod_def::GKT5FVnQWRA::3hSmpjORRfWAq9us1_AhBA` |
| Move Tenant to Trial Edition | POST | `/api/services/app/TenantSubscription/MoveTenantToTrialEdition` | `conn_mod_def::GKT5FokIsRg::YWHWIxu2Smad9X7DWpmpJA` |

4 more TenantSubscription actions are available through search.

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Integration Properties | GET | `/api/services/app/Integrations/GetProperties` | `conn_mod_def::GKT47C061jg::Tnvfb_ylRTOIayElCNrKyg` |
| Create a Unifonic App Integration | POST | `/api/services/app/Integrations/CreateUnifonic` | `conn_mod_def::GKT47DW9fJg::MbRkZbovTEKbZbcWwMZmbA` |
| Create Gmail Integration | POST | `/api/services/app/Integrations/CreateGmail` | `conn_mod_def::GKT460xpuJA::QHMPn5s3RMyLfy98DWrRYg` |
| Create Outlook App Integration | POST | `/api/services/app/Integrations/CreateOutlook` | `conn_mod_def::GKT46046w1g::l7JUAot9Sq2W37SwIDlOWA` |
| Create Twilio Integration | POST | `/api/services/app/Integrations/CreateTwilio` | `conn_mod_def::GKT47Cji1lg::ZlonIr4oR_a1LyA2170TVw` |
| Test Gmail Connection for an App Integration | POST | `/api/services/app/Integrations/TestGmailConnection` | `conn_mod_def::GKT47QCBRyA::DwlnnfcUS5e5ThYdNkfaLw` |
| Test Outlook Connection for an App Integration | POST | `/api/services/app/Integrations/TestOutlookConnection` | `conn_mod_def::GKT47QGxEKg::xQCgqrT0TXmhCxevqLsV0A` |
| Test SMTP Connection for an App Integration | POST | `/api/services/app/Integrations/TestSmtpConnection` | `conn_mod_def::GKT47Qm2Qdg::eEz-ot3HQoy9yRuOjjqnPA` |
| Test Twilio Connection for an App Integration | POST | `/api/services/app/Integrations/TestTwilioConnection` | `conn_mod_def::GKT47QgInZA::_5e0vQwhRjKXl67DNWcGwQ` |
| Toggle an App Integration's Enabled State | POST | `/api/services/app/Integrations/ToggleEnabled` | `conn_mod_def::GKT47a6fSHA::2ZzA8oXdThSryE-CAIzPhw` |
| Update Gmail App Integration | PUT | `/api/services/app/Integrations/UpdateGmail` | `conn_mod_def::GKT47am2_xA::08UMALqMQeOjyLyx1uGe-A` |
| Update Outlook App Integration | PUT | `/api/services/app/Integrations/UpdateOutlook` | `conn_mod_def::GKT47azz1qg::WNFN1ivgR1qbgcW90m_F1g` |

3 more Integrations actions are available through search.

### TokenAuth

| Action | Method | Path | Action id |
|---|---|---|---|
| Log Out | GET | `/api/TokenAuth/LogOut` | `conn_mod_def::GKT5HqW5bZA::UU9pX3IJRe-RZnkZmNMU1w` |
| Test Notification | GET | `/api/TokenAuth/TestNotification` | `conn_mod_def::GKT5H4DkElg::A-IMML76QIqjg0m-AXKfwQ` |
| Authenticate and Create a Token | POST | `/api/TokenAuth/Authenticate` | `conn_mod_def::GKT5HLZoT6A::uFNafM-CSH6cCkO7QrZipg` |
| Authenticate Mobile User | POST | `/api/TokenAuth/AuthenticateMobile` | `conn_mod_def::GKT5HLXqZUA::De1GYNoQQzKlSfyGLsnX7g` |
| Delegated Impersonated Authenticate | POST | `/api/TokenAuth/DelegatedImpersonatedAuthenticate` | `conn_mod_def::GKT5HOwKRrg::tBP9TAV5TRyLMr_gCUrroQ` |
| External Authenticate | POST | `/api/TokenAuth/ExternalAuthenticate` | `conn_mod_def::GKT5HMx1BoA::_wuiKz0VT9GvBgqKICQ2mQ` |
| External Authenticate Mobile | POST | `/api/TokenAuth/ExternalAuthenticateMobile` | `conn_mod_def::GKT5HLE15bA::oGjT21FTS5aY4tg5Zi5BMA` |
| Impersonated Authenticate | POST | `/api/TokenAuth/ImpersonatedAuthenticate` | `conn_mod_def::GKT5HbtKu9g::nSMfnMZ8TcCOJ2wS_3XugQ` |
| Refresh an Access Token | POST | `/api/TokenAuth/RefreshToken` | `conn_mod_def::GKT5HqKewBA::Sz8wPUvJQ8GZkUg3HIWgwA` |
| Send a User's Two-Factor Authentication Code | POST | `/api/TokenAuth/SendTwoFactorAuthCode` | `conn_mod_def::GKT5HvDOY_g::pge2PLUZQg2nWD-gFWBfgw` |
| SSO Authentication via Token | POST | `/api/TokenAuth/SsoAuthentication` | `conn_mod_def::GKT5HrqcTlg::6dMGlxKyRDmMCAe3453UqA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Users to Excel | GET | `/api/services/app/User/GetUsersToExcel` | `conn_mod_def::GKT5IdQu0Qg::4ADaJwvoQVOKF_bO5mKnnw` |
| Get User | GET | `/api/services/app/CommonLookup/GetUser` | `conn_mod_def::GKT4zYUGExA::1BXe-ezgRFGOhF5HmwX4tw` |
| Get User for Edit | GET | `/api/services/app/User/GetUserForEdit` | `conn_mod_def::GKT5IaHr60A::JSLjWdUxT8qIOO-RWOmnVw` |
| Get Users | GET | `/api/services/app/User/GetUsers` | `conn_mod_def::GKT5IZR4j0A::oyTQmlGvTrSu_kyIZQPpcQ` |
| List All Users | GET | `/api/services/app/User/GetAllUsers` | `conn_mod_def::GKT5INdAoig::BWz8BKM1SkaU9N2DfghZzw` |
| List All Users and Invited Users | GET | `/api/services/app/User/GetAllUsersWithInvited` | `conn_mod_def::GKT5IPDKCGA::xtuwZmW5R4--BXl55FmuEw` |
| Find Users | POST | `/api/services/app/CommonLookup/FindUsers` | `conn_mod_def::GKT4zJ2UVXg::Cyvj5up3SF69YdK52uqBQA` |

3 more Users actions are available through search.

This lists 90 of 568 actions. For anything not here, call `search_one_platform_actions` with platform `workiom`. The full catalog is at https://www.withone.ai/knowledge/workiom.

## When a call fails

The error comes from Workiom, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/workiom

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
