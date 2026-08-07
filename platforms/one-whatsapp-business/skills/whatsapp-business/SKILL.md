---
name: whatsapp-business
description: WhatsApp Business is a business messaging platform that provides tools and APIs for managing customer conversations on WhatsApp, allowing companies to send notifications, offer support, and integrate messaging workflows into CRM systems, automation tools, and customer engagement applications. Read and write WhatsApp Business data through One: flows, groups, media, multipartnersolutions, whatsappbusinessprofile, messagetemplates and more, 114 actions with real parameter documentation. Use whenever the user asks to look something up in WhatsApp Business, create or update a record there, or build code against the WhatsApp Business API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: whatsapp-business
  generated-from: one-knowledge-base
---

# WhatsApp Business through One

WhatsApp Business is a business messaging platform that provides tools and APIs for managing customer conversations on WhatsApp, allowing companies to send notifications, offer support, and integrate messaging workflows into CRM systems, automation tools, and customer engagement applications.

One exposes WhatsApp Business through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `whatsapp-business` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm WhatsApp Business is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real WhatsApp Business account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Flows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Flow | GET | `/v23.0/{{flowId}}` | `conn_mod_def::GKbVsbjIjrE::wPowyxPARa6FgARGSrE_kg` |
| List a WhatsApp Business Account's Flows | GET | `/v23.0/{{wabaId}}/flows` | `conn_mod_def::GKbVsm0uux0::ePgPb7lFT8CQvrWwrp7xkA` |
| Create a WhatsApp Business Account Flow | POST | `/v23.0/{{wabaId}}/flows` | `conn_mod_def::GKbVsKqKUA4::iSHtqWI4Q_iHrHJd2p1Yyg` |
| Delete Flow | DELETE | `/v23.0/{{flowId}}` | `conn_mod_def::GKbVsUlUOmw::IUe2yu3ZSyWJKdD8f8RLRg` |
| Deprecate a Flow | POST | `/v23.0/{{flowId}}/deprecate` | `conn_mod_def::GKbVsVJwn60::zmPvLDjiShe2juvRZazTeg` |
| Migrate Flows for a WhatsApp Business Account | POST | `/v23.0/{{wabaId}}/migrate_flows` | `conn_mod_def::GKbVsm9PoWE::79yWPYaLSs2p3WChNqnSaA` |
| Publish a Flow | POST | `/v23.0/{{flowId}}/publish` | `conn_mod_def::GKbVsnckrbw::dYj-KXgmSHKYDImwA2oG4Q` |
| Update Flow Metadata | POST | `/v23.0/{{flowId}}` | `conn_mod_def::GKbVsmhPh2c::rJBroj72QqO_oJn3YxfVrA` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Active Groups for a Business Phone Number | GET | `/v23.0/{{phoneNumberId}}/groups` | `conn_mod_def::GKbVs8Mfx_I::hu015mNSTh-mpCSPq0tKtw` |
| Get Group Info | GET | `/v23.0/{{groupId}}` | `conn_mod_def::GKbVs65SjSU::C1XgXOQLToya87EIzBFjfg` |
| Create a Phone Number's Group | POST | `/v23.0/{{phoneNumberId}}/groups` | `conn_mod_def::GKbVsxMFe4g::IPc4yCHVRi-8Vp5kKLAzsA` |
| Delete a Group | DELETE | `/v23.0/{{groupId}}` | `conn_mod_def::GKbVswxVvIg::quBFN4WlTUeI6N-ixD0EiA` |
| Update Group Settings | POST | `/v23.0/{{groupId}}` | `conn_mod_def::GKbVtPFjktg::k-CtJrK-QJSDj0F5L1sUzA` |

### Media

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Media | GET | `/v23.0/{{mediaUrl}}` | `conn_mod_def::GKbVtYuWHXQ::GzPFl8KBRxWy0lv18wEx-A` |
| Retrieve Media URL | GET | `/v23.0/{{mediaId}}` | `conn_mod_def::GKbVta2qFO8::X_wkVy2HTmy4aVgdhGJbFQ` |
| Delete Media | DELETE | `/v23.0/{{mediaId}}` | `conn_mod_def::GKbVtZ2gb2s::kTGhcC-JTTmG9v35p30WkQ` |
| Upload Image to a Phone Number's Media Library | POST | `/v23.0/{{phoneNumberId}}/media` | `conn_mod_def::GKbVtar5q6g::-mQP_OOmTMeS8YSFX2R_6A` |

### MultiPartnerSolutions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Multi-Partner Solution Details | GET | `/v23.0/{{solutionId}}` | `conn_mod_def::GKbVt8HqYEs::2XpkIr-XR8Cq86Z814AoVg` |
| List a WABA's Multi-Partner Solutions | GET | `/v23.0/{{wabaId}}/solutions` | `conn_mod_def::GKbVuJSJuR4::zMjKU011Qiex-t-WpMujew` |
| Accept a Multi-Partner Solution Invitation | POST | `/v23.0/{{solutionId}}/accept` | `conn_mod_def::GKbVt5fNYJo::tn9jnfFcSauwL25F5ZiHpg` |
| Reject a Multi-Partner Solution Deactivation Request | POST | `/v23.0/{{solutionId}}/reject_deactivation_request` | `conn_mod_def::GKbVuJjrEcw::RuUuROoDTwG8o2zJQcThUQ` |

### WhatsAppBusinessProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number's WhatsApp Business Profile | GET | `/v23.0/{{phoneNumberId}}/whatsapp_business_profile` | `conn_mod_def::GKbVwDlRWWM::0vg_8WqKT9aYSi8EvoZ75A` |
| Get WhatsApp Business Profile Details | GET | `/v23.0/{{whatsAppBusinessProfileId}}` | `conn_mod_def::GKbVwO1-1XM::qZfKLFRkR2yqctc3dhP7Lw` |
| Update a Phone Number's WhatsApp Business Profile | POST | `/v23.0/{{phoneNumberId}}/whatsapp_business_profile` | `conn_mod_def::GKbVv-P6S0Q::2MuEOpYGS96N6oPgUFB10g` |
| Update a WhatsApp Business Profile | POST | `/v23.0/{{whatsAppBusinessProfileId}}` | `conn_mod_def::GKbVwNjmc8w::gvdNTb9eQq2TvcVjihFPuA` |

### MessageTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a WhatsApp Business Account Message Template by Name | GET | `/v23.0/{{wabaId}}/message_templates` | `conn_mod_def::GKbVvkk5z-4::fhcy3GUsTS2qZRgxwowi0g` |
| Create a WhatsApp Business Account Authentication Template with OTP Copy Code Button | POST | `/v23.0/{{wabaId}}/message_templates` | `conn_mod_def::GKbVsLs--UQ::Ld8g4zYnRbOkrQTmO_mDNg` |
| Delete a WABA Message Template by Name | DELETE | `/v23.0/{{wabaId}}/message_templates` | `conn_mod_def::GKbVvViJ-2w::fRffe6BpQF6ULgnkBKZy1A` |

### MessageQrdls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number's Individual Message QR Code | GET | `/v23.0/{{phoneNumberId}}/message_qrdls/{{qrCodeId}}` | `conn_mod_def::GKbVtP4YVdQ::mo2oXiGVQFmDZ9RWXPii3g` |
| Create or Update a Phone Number's Message QR Code | POST | `/v23.0/{{phoneNumberId}}/message_qrdls` | `conn_mod_def::GKbVvJNffeE::QRBBYrU6TwypjjcBamQbAw` |
| Delete a Phone Number's Individual Message QR Code | DELETE | `/v23.0/{{phoneNumberId}}/message_qrdls/{{qrCodeId}}` | `conn_mod_def::GKbVtPPTQes::MFNOph8ESd6iFGvkte5IhA` |

### BlockUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Block User(s) for a Phone Number | POST | `/v23.0/{{phoneNumberId}}/block_users` | `conn_mod_def::GKbVrhzzGzY::nMaWmGZ0SZm0EMIBLPPiAA` |
| Unblock Users for a Phone Number | DELETE | `/v23.0/{{phoneNumberId}}/block_users` | `conn_mod_def::GKbVrvvFqoQ::ZavauM7PS8WtUuus-pCdog` |

### WhatsappBusinessEncryption

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number's Business Encryption Public Key | GET | `/v23.0/{{phoneNumberId}}/whatsapp_business_encryption` | `conn_mod_def::GKbVsXInuwA::svxmNjCnTv2QQMQjB2dZKA` |
| Set a Phone Number's Business Encryption Public Key | POST | `/v23.0/{{phoneNumberId}}/whatsapp_business_encryption` | `conn_mod_def::GKbVrvRO7vU::H5ld15nwTDqbhtVB5ZZt_A` |

### WhatsappCommerceSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number's Commerce Settings | GET | `/v23.0/{{phoneNumberId}}/whatsapp_commerce_settings` | `conn_mod_def::GKbVr-aCtkA::QFG8YC4kQ-Ssq8IeMuMrOg` |
| Set or Update a Phone Number's Commerce Settings | POST | `/v23.0/{{phoneNumberId}}/whatsapp_commerce_settings` | `conn_mod_def::GKbVsMOLbYQ::I4Ud8f33QJS7uvNCbqmSWw` |

### GroupJoinRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group's Join Requests | GET | `/v23.0/{{groupId}}/join_requests` | `conn_mod_def::GKbVs7LxBzk::kwNenb_5Q7us1Ju_b-P_lg` |
| Approve a Group's Join Requests | POST | `/v23.0/{{groupId}}/join_requests` | `conn_mod_def::GKbVsw5YPU4::sHd_mhTTRM-yiOEAWewGfg` |

### WhatsAppBusinessAccount

| Action | Method | Path | Action id |
|---|---|---|---|
| Set OBO Mobility Intent for a WhatsApp Business Account | POST | `/v23.0/{{wabaId}}/set_obo_mobility_intent` | `conn_mod_def::GKbVuVGzCi4::BcavsU2nSvmzHUhyaZu_5A` |
| Update a WhatsApp Business Account | POST | `/v23.0/{{wabaId}}` | `conn_mod_def::GKbVvu9u1wU::dhkRFQUGQ6SV2xzBCYOpEw` |

### PhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a WhatsApp Business Account's Phone Numbers | GET | `/v23.0/{{wabaId}}/phone_numbers` | `conn_mod_def::GKbVujb4loY::oAVewyyuT4OYaPBahYLykA` |
| Update a Phone Number's Official Business Account Status | POST | `/v23.0/{{phoneNumberId}}/official_business_account` | `conn_mod_def::GKbVuVdaA9U::cxPG-cI_TFawsucO-zi0_Q` |

### WhatsAppBusinessPhoneNumber

| Action | Method | Path | Action id |
|---|---|---|---|
| Deregister a WhatsApp Business Phone Number | POST | `/v23.0/{{phoneNumberId}}/deregister` | `conn_mod_def::GKbVugx7j6o::Gav4cF95Th-AAhtipa4fYw` |
| Register a WhatsApp Business Phone Number | POST | `/v23.0/{{phoneNumberId}}/register` | `conn_mod_def::GKbVuhkxsjs::yCPtmC82RUeRfwgX6e5FEw` |

### WhatsAppBusinessAccountPhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a WhatsApp Business Account Phone Number | POST | `/v23.0/{{wabaId}}/phone_numbers` | `conn_mod_def::GKbVuh810Lc::mD4LXlbQTyi1fmdoZs2UGA` |
| Update a WhatsApp Business Account Phone Number's Status and Configuration | POST | `/v23.0/{{phoneNumberId}}` | `conn_mod_def::GKbVuuwZHuw::ESiouS-2SMOKerQN7R2Ogw` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a WhatsApp Business Account's Schedules | GET | `/v23.0/{{wabaId}}/schedules` | `conn_mod_def::GKbVvJq-S8k::uSenlgvpQ0K2wuvlEww4-Q` |
| Create a WhatsApp Business Account Schedule | POST | `/v23.0/{{wabaId}}/schedules` | `conn_mod_def::GKbVvGW6BKA::1Rw4_oZDQRKFtDdyE7DFmg` |

### WhatsAppBusinessAccountWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Subscribe to a WhatsApp Business Account's Webhooks | POST | `/v23.0/{{wabaId}}/subscribed_apps` | `conn_mod_def::GKbVvlbQ5XA::5ZMg0wkQSDGkyLmZ3vcnDQ` |
| Unsubscribe From a WhatsApp Business Account's Webhooks | DELETE | `/v23.0/{{wabaId}}/subscribed_apps` | `conn_mod_def::GKbVvkvOU_0::9eUQJop6RTiGU4RbfZmFlA` |

### WhatsAppBusinessAccountUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a User to a WhatsApp Business Account | POST | `/v23.0/{{whatsAppBusinessAccountId}}/assigned_users` | `conn_mod_def::GKbVvvLyLqQ::W3DAQbxJQWKgo33NoijHIg` |
| Remove a User from a WhatsApp Business Account | DELETE | `/v23.0/{{whatsappBusinessAccountId}}/assigned_users` | `conn_mod_def::GKbVv-wrtLU::MqavWuzlQNauxfv-yrHZ4A` |

### GroupInviteLink

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Group Invite Link | POST | `/v23.0/{{groupId}}/invite_link` | `conn_mod_def::GKbVsx98FzY::kHN-myeySeGTxWdvhA1-IA` |
| Delete a Group Invite Link | DELETE | `/v23.0/{{groupId}}/invite_link` | `conn_mod_def::GKbVs8bI_Bg::JKSnEYuxQQmNtCIS5zG7BA` |

### GroupParticipants

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Group Participants | POST | `/v23.0/{{groupId}}/participants` | `conn_mod_def::GKbVswyDmk4::CZeLBPB2R0GA5j5eStZLpQ` |
| Remove Group Participants | DELETE | `/v23.0/{{groupId}}/participants` | `conn_mod_def::GKbVtOwC4Gw::JxT9lkCVRJyqrzkxW5yq-g` |

### CreditLines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business's Credit Lines | GET | `/v23.0/{{businessId}}/extendedcredits` | `conn_mod_def::GKbVrhKd7sI::Cwkey83gSwC7gmmmKfQqRQ` |

### BusinessAccountPhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Phone Number to a Business Account | POST | `/v23.0/{{businessId}}/add_phone_numbers` | `conn_mod_def::GKbVru3ALE8::6eievkhoS-WwRTNwbVsayw` |

### BusinessComplianceInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number's Business Compliance Information | GET | `/v23.0/{{phoneNumberId}}/business_compliance_info` | `conn_mod_def::GKbVry5xAsg::OuqHuhG5QqCk-LI1sDEpiA` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Manage Calls for a Phone Number | POST | `/v23.0/{{phoneNumberId}}/calls` | `conn_mod_def::GKbVr_DLzNg::RpUp2J_-TWWE0esRGiApEA` |

### CallPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Call Permissions for a Phone Number | GET | `/v23.0/{{phoneNumberId}}/call_permissions` | `conn_mod_def::GKbVsAENCqg::Y6boBUgpQauR_8BcCbXWeQ` |

### ClientWhatsAppBusinessAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business's Client WhatsApp Business Accounts | GET | `/v23.0/{{businessId}}/client_whatsapp_business_accounts` | `conn_mod_def::GKbVsBKNKdM::i10h52MbTvK-Du6wrXQ7Ww` |

### MessagesEncrypted

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an Encrypted Message for a Phone Number | POST | `/v23.0/{{phoneNumberId}}/messages_encrypted` | `conn_mod_def::GKbVsLE86po::Bf6hAZVRQG2rOfe_ZzCt1A` |

### ConversationalAutomation

| Action | Method | Path | Action id |
|---|---|---|---|
| Configure Conversational Automation for a Phone Number | POST | `/v23.0/{{phoneNumberId}}/conversational_automation` | `conn_mod_def::GKbVsLT49bk::NCDqsKmNSOSyiQ7JM8n7Xw` |

### FlowAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Flow's Assets | GET | `/v23.0/{{flowId}}/assets` | `conn_mod_def::GKbVsVUQyQ0::fBXHngmOTTS1D8Ci_3mAew` |

### FlowJsonAsset

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Flow JSON Asset | POST | `/v23.0/{{flowId}}/assets` | `conn_mod_def::GKbVsnmqFTA::aDUa0scVTVOaDc6N_ruJXw` |

### WhatsAppWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Incoming WhatsApp Messages | POST | `/whatsapp/webhooks` | `conn_mod_def::GKbVtFBvMWA::5i3gx24_SPKfqph-wVmaZg` |

### JoinRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Reject Join Requests for a Group | DELETE | `/v23.0/{{groupId}}/join_requests` | `conn_mod_def::GKbVtPMGa7s::bDDSkofLTBKCEYqPsuQr-A` |

### MarketingMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Marketing Template Message | POST | `/v23.0/{{phoneNumberId}}/marketing_messages` | `conn_mod_def::GKbVtZhSOtc::RVt5rmnCS7Gtsflf7uRtnA` |

### MigrationIntentDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Migration Intent Details | GET | `/v23.0/{{migrationIntentId}}` | `conn_mod_def::GKbVtlQW8bc::wyGr4HbCRk-5IdpSz_gRrA` |

### Business

| Action | Method | Path | Action id |
|---|---|---|---|
| Onboard Partners to MM Lite for a Business | POST | `/v23.0/{{businessId}}/onboard_partners_to_mm_lite` | `conn_mod_def::GKbVtmcYRtA::B64btV5sQfu8ow5G9U-Iwg` |

### WhatsAppMessageHistoryEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get WhatsApp Message History Events | GET | `/v23.0/{{messageHistoryId}}/events` | `conn_mod_def::GKbVtm4ZDbg::_uS-zj0wToC9iJTfku4TkA` |

### WhatsAppMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a WhatsApp Message for a Phone Number | POST | `/v23.0/{{phoneNumberId}}/messages` | `conn_mod_def::GKbVtvCFZBw::lMpbuc9mS3-HxwPqc63A2Q` |

### WhatsappBusinessSolution

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Multi-Partner Solution for an Application | POST | `/v23.0/{{applicationId}}/whatsapp_business_solution` | `conn_mod_def::GKbVt6MwTyM::2sXJQwWFTmeMgVvbUkpreg` |

### MultiPartnerSolutionAccessToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Multi-Partner Solution Access Token | GET | `/v23.0/{{solutionId}}/access_token` | `conn_mod_def::GKbVt702QGk::qUnE1X6qTw65qH_XNvGUNA` |

### WhatsappBusinessSolutions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Application's Multi-Partner Solutions | GET | `/v23.0/{{applicationId}}/whatsapp_business_solutions` | `conn_mod_def::GKbVt971R8w::ehVt5k1uSs-laDQZNblpCg` |

### MultiPartnerSolutionRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Reject a Multi-Partner Solution Request | POST | `/v23.0/{{solutionId}}/reject` | `conn_mod_def::GKbVuIrFIhk::xhOtKepPQgSiBknjjUI8Ig` |

### MultiPartnerSolutionDeactivationRequest

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Multi-Partner Solution Deactivation Request | POST | `/v23.0/{{solutionId}}/send_deactivation_request` | `conn_mod_def::GKbVuJdb4zk::8I8KCJ4PQSa0_lnFhhTgcw` |

### WhatsAppBusinessAccountOboMobilityIntent

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a WhatsApp Business Account OBO Mobility Intent | POST | `/v23.0/{{wabaId}}/obo_mobility_intent` | `conn_mod_def::GKbVuKYwIV0::3gMVLyteRqKQ-AgdY9BuoA` |

### OboMobilityIntent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get OBO Mobility Intent Details | GET | `/v23.0/{{oboMobilityIntentId}}` | `conn_mod_def::GKbVuU13yCo::E5mAqr5gTYKA1jk_dZhX-w` |

### OwnedWhatsAppBusinessAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business's Owned WhatsApp Business Accounts | GET | `/v23.0/{{businessId}}/owned_whatsapp_business_accounts` | `conn_mod_def::GKbVuXRFDs8::4eTpHtWbSKKBuYC-Al-tcg` |

### OfficialBusinessAccountStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number's Official Business Account Status | GET | `/v23.0/{{phoneNumberId}}/official_business_account` | `conn_mod_def::GKbVuVa0kgw::MxPGDc_NR626vxf8IS09GQ` |

### PreverifiedNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Share a Business's Pre-Verified Phone Number with Another Business | POST | `/v23.0/{{businessId}}/share_preverified_numbers` | `conn_mod_def::GKbVusWSY9k::Ei5W60UzSK-4BiS4NLZ2Fg` |

### PreVerifiedPhoneNumbersPartners

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pre-Verified Phone Number's Partners | GET | `/v23.0/{{preVerifiedPhoneNumberId}}/partners` | `conn_mod_def::GKbVuuoEaDk::LAGfViBkRWGna2zcktWDoA` |

### WhatsAppBusinessPhoneNumberInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve WhatsApp Business Phone Number Information | GET | `/v23.0/{{phoneNumberId}}` | `conn_mod_def::GKbVuugLEcA::SZ1O-LOkQgKIRc0XaHU66w` |

### PhoneNumberVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify a Phone Number's Verification Code | POST | `/v23.0/{{phoneNumberId}}/verify_code` | `conn_mod_def::GKbVuwC5niQ::TJDiCGuMTqeMCm6sWEpu5A` |

### PreVerifiedPhoneNumber

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Pre-Verified Phone Number | DELETE | `/v23.0/{{preVerifiedPhoneNumberId}}` | `conn_mod_def::GKbVu6uDniw::ux0PyGU9QRSqdVA2L9yq6Q` |

### PreVerifiedPhoneNumberVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify OTP Code for a Pre-Verified Phone Number | POST | `/v23.0/{{preVerifiedPhoneNumberId}}/verify_code` | `conn_mod_def::GKbVu7IWZYA::xX5oPrLzScKmMvRAeGMKbA` |

### PhoneNumbersSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number's Settings | GET | `/v23.0/{{phoneNumberId}}/settings` | `conn_mod_def::GKbVvHFaMmc::NCrSLzVaQXC3u0ZpvegDBA` |

This lists 90 of 114 actions. For anything not here, call `search_one_platform_actions` with platform `whatsapp-business`. The full catalog is at https://www.withone.ai/knowledge/whatsapp-business.

## When a call fails

The error comes from WhatsApp Business, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/whatsapp-business

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
