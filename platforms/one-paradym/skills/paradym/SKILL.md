---
name: paradym
description: Paradym is an identity verification platform that provides APIs and workflows for issuing, verifying, and managing reusable digital credentials, allowing developers and organizations to build privacy-focused onboarding, compliance, and authentication experiences across web and mobile applications. Read and write Paradym data through One: credentialtemplates, certificates, presentationtemplates, trustedentities, didcommconnections, authorizationservers and more, 93 actions with real parameter documentation. Use whenever the user asks to look something up in Paradym, create or update a record there, or build code against the Paradym API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: paradym
  generated-from: one-knowledge-base
---

# Paradym through One

Paradym is an identity verification platform that provides APIs and workflows for issuing, verifying, and managing reusable digital credentials, allowing developers and organizations to build privacy-focused onboarding, compliance, and authentication experiences across web and mobile applications.

One exposes Paradym through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `paradym` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Paradym is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Paradym account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CredentialTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Anoncreds Credential Template for a Project | POST | `/v1/projects/{{projectId}}/templates/credentials/anoncreds` | `conn_mod_def::GLOsYE9oDVg::5W-gByPdRQSlmXJNS9wwvg` |
| Unarchive an Anoncreds Credential Template for a Project | POST | `/v1/projects/{{projectId}}/templates/credentials/anoncreds/{{credentialTemplateId}}/unarchive` | `conn_mod_def::GLOsYOQMjsA::T3eVBKZJT6-fJRDY6S9hTw` |
| Unarchive an Mdoc Credential Template for a Project | POST | `/v1/projects/{{projectId}}/templates/credentials/mdoc/{{credentialTemplateId}}/unarchive` | `conn_mod_def::GLOsafukwSA::_IldcGvzSq204X8Df054EA` |
| Unarchive an SD-JWT-VC Credential Template for a Project | POST | `/v1/projects/{{projectId}}/templates/credentials/sd-jwt-vc/{{credentialTemplateId}}/unarchive` | `conn_mod_def::GLOsbco-CdA::gL9R2FC5TsCBLiaCak3e2A` |
| Update an SD-JWT VC Credential Template for a Project | PUT | `/v1/projects/{{projectId}}/templates/credentials/sd-jwt-vc/{{credentialTemplateId}}` | `conn_mod_def::GLOsbhTpTaA::QksebtzhTN64UGwkvTsaig` |

### Certificates

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Certificates for a Project | GET | `/v1/projects/{{projectId}}/certificates` | `conn_mod_def::GLOsYyimnxA::uS2JtTLzRyO7IwAhTnMsBA` |
| Activate a Project Certificate | POST | `/v1/projects/{{projectId}}/certificates/{{certificateId}}/activate` | `conn_mod_def::GLOsYtenh3g::ZvVnaK8oSPWASla7SExwuQ` |
| Create a Project Certificate | POST | `/v1/projects/{{projectId}}/certificates` | `conn_mod_def::GLOsYuJ21Sg::K8usBaXXRzaTbzUUt4yz2Q` |
| Create Certificate Signing Request for a Project | POST | `/v1/projects/{{projectId}}/certificates/csrs` | `conn_mod_def::GLOsYk95g7A::SQcejAv7S6i1hRuJmf7cDg` |
| Import Certificate from a Certificate Signing Request | POST | `/v1/projects/{{projectId}}/certificates/csrs/{{certificateSigningRequestId}}/import` | `conn_mod_def::GLOsYlcxTHg::NHoBFUwIRWepmIv1iejJsA` |

### PresentationTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Presentation Template for a Project | GET | `/v1/projects/{{projectId}}/templates/presentations/{{presentationTemplateId}}` | `conn_mod_def::GLOsbAvDm2A::Bu4ioU6NQXqdh-lWj-NIJA` |
| Retrieve Presentation Templates for a Project | GET | `/v1/projects/{{projectId}}/templates/presentations` | `conn_mod_def::GLOsa9KF83A::uBQPmaTlTe6PR0oBw0V79g` |
| Archive Presentation Template for a Project | DELETE | `/v1/projects/{{projectId}}/templates/presentations/{{presentationTemplateId}}` | `conn_mod_def::GLOsaroP_hg::hU7oRShkSF21xwOo9StZ0w` |
| Create a Project Presentation Template | POST | `/v1/projects/{{projectId}}/templates/presentations` | `conn_mod_def::GLOsa9KaYeg::yqvL5wZ6SSa42znKwdPNSA` |
| Update a Presentation Template | PUT | `/v1/projects/{{projectId}}/templates/presentations/{{presentationTemplateId}}` | `conn_mod_def::GLOsa7noYFA::4LVQBVK_QqmfvV6aEUTM2w` |

### TrustedEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Trusted Entities | GET | `/v1/projects/{{projectId}}/trusted-entities` | `conn_mod_def::GLOsbqrSl5A::fBbHNK39TbWP1ryQf9ygdw` |
| Retrieve a Project Trusted Entity by ID | GET | `/v1/projects/{{projectId}}/trusted-entities/{{trustedEntityId}}` | `conn_mod_def::GLOsbrEUtDA::8aIiaQobRkOj78u8L8zKdQ` |
| Create a Project Trusted Entity | POST | `/v1/projects/{{projectId}}/trusted-entities` | `conn_mod_def::GLOsbp7OqhA::TuzNdEPORmOi5Vsi9xA3bw` |
| Delete a Trusted Entity for a Project | DELETE | `/v1/projects/{{projectId}}/trusted-entities/{{trustedEntityId}}` | `conn_mod_def::GLOsbonB5qA::C0RVl7q-RFG8ULs4L8oovw` |
| Update a Project Trusted Entity | PUT | `/v1/projects/{{projectId}}/trusted-entities/{{trustedEntityId}}` | `conn_mod_def::GLOsbp5ctjA::8SYuo8ykSZqAxVSapF7b4A` |

### DidcommConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a DIDComm Connection for a Project | GET | `/v1/projects/{{projectId}}/didcomm/connections/{{didcommConnectionId}}` | `conn_mod_def::GLOsY6rmjfA::dYiHV_6fT7W9Z72iKZD0Jg` |
| Retrieve DIDComm Connections for a Project | GET | `/v1/projects/{{projectId}}/didcomm/connections` | `conn_mod_def::GLOsY9UxmJg::ztKE0oBEQcaZOACuTfq53w` |
| Delete a DIDComm Connection | DELETE | `/v1/projects/{{projectId}}/didcomm/connections/{{didcommConnectionId}}` | `conn_mod_def::GLOsY6Hs1xg::uSL_2nSASCWbhcGufPdxYA` |
| Receive DIDComm Invitation for a Project | POST | `/v1/projects/{{projectId}}/didcomm/invitations/receive` | `conn_mod_def::GLOsZRPgNQg::cUdvaJjGTOiHWFcuORwDeQ` |
| Update a DIDComm Connection for a Project | POST | `/v1/projects/{{projectId}}/didcomm/connections/{{didcommConnectionId}}` | `conn_mod_def::GLOsZFQssQA::SxwVrmAVQayRnvjc3jtFSg` |

### AuthorizationServers

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Project Authorization Server | GET | `/v1/projects/{{projectId}}/authorization-servers/{{authorizationServerId}}` | `conn_mod_def::GLOsYW8hS0A::JMqkqjFBSjKSJbzV-rWSAA` |
| Retrieve a Project's Authorization Servers | GET | `/v1/projects/{{projectId}}/authorization-servers` | `conn_mod_def::GLOsYYxnmjg::_hzavwQ_TiqShlY5Se4J-g` |
| Create an Authorization Server for a Project | POST | `/v1/projects/{{projectId}}/authorization-servers` | `conn_mod_def::GLOsYXa2C0g::Yvnj33yGQI-TNgG4mtabRw` |
| Delete an Authorization Server for a Project | DELETE | `/v1/projects/{{projectId}}/authorization-servers/{{authorizationServerId}}` | `conn_mod_def::GLOsYX41VyA::VEcETAieTUyP6Mb_rXleQA` |
| Update a Project Authorization Server | PUT | `/v1/projects/{{projectId}}/authorization-servers/{{authorizationServerId}}` | `conn_mod_def::GLOsYj7xZdA::OGnP24BCS6CDIDeJ1DfGjw` |

### MdocCredentialTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an mdoc Credential Template for a Project | GET | `/v1/projects/{{projectId}}/templates/credentials/mdoc/{{credentialTemplateId}}` | `conn_mod_def::GLOsaWbHHrg::T_XjGkhyTLqjzgyAb4NyhA` |
| Retrieve mdoc Credential Templates for a Project | GET | `/v1/projects/{{projectId}}/templates/credentials/mdoc` | `conn_mod_def::GLOsajwCtJg::NOD-vgugRMacp7Hb5mbLQA` |
| Archive an Mdoc Credential Template for a Project | DELETE | `/v1/projects/{{projectId}}/templates/credentials/mdoc/{{credentialTemplateId}}` | `conn_mod_def::GLOsaWoA5Sg::paODnc7iTWqlp59gwTDEtw` |
| Create Mdoc Credential Template for a Project | POST | `/v1/projects/{{projectId}}/templates/credentials/mdoc` | `conn_mod_def::GLOsaWiJ7Pg::DHcihAZhQLO-6Xko8LNU-Q` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Projects | GET | `/v1/projects` | `conn_mod_def::GLOsbUzffrA::CoAI5SXLTWSOMlopOrnSNg` |
| Create Project | POST | `/projects` | `conn_mod_def::GLOsbImocWg::ChkE6NlqR0WLUdA9zVFfLA` |
| Update a Project | POST | `/v1/projects/{{projectId}}` | `conn_mod_def::GLOsbRAVSOg::3AWt4nC9Sp2CCcxQ129LtQ` |
| Update a Project's Default Profile | PUT | `/v1/projects/{{projectId}}/profiles/default` | `conn_mod_def::GLOsbIxKcGA::n-0Bs7lJTYaSROo700u7lA` |

### SdJwtVcCredentialTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve SD-JWT VC Credential Template for a Project | GET | `/v1/projects/{{projectId}}/templates/credentials/sd-jwt-vc/{{credentialTemplateId}}` | `conn_mod_def::GLOsbeG-JtA::e-TaatqNQAy2Pv5XyZFAwQ` |
| Retrieve SD-JWT VC Credential Templates for a Project | GET | `/v1/projects/{{projectId}}/templates/credentials/sd-jwt-vc` | `conn_mod_def::GLOsbhbcBYA::K2XctsnLTrWnYWx3RVuGVA` |
| Archive an SD-JWT-VC Credential Template for a Project | DELETE | `/v1/projects/{{projectId}}/templates/credentials/sd-jwt-vc/{{credentialTemplateId}}` | `conn_mod_def::GLOsbS8r6xA::OUCL5kuIT6Glf0VvVcuJfQ` |
| Create SD-JWT-VC Credential Template for a Project | POST | `/v1/projects/{{projectId}}/templates/credentials/sd-jwt-vc` | `conn_mod_def::GLOsbRkxnwg::gx2jiAuAQxab4fkcRXA-NA` |

### AttributeProviders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Attribute Providers | GET | `/v1/projects/{{projectId}}/attribute-providers` | `conn_mod_def::GLOsYOwbgAg::MwVvbu8SThu2o4JS3m23_Q` |
| Retrieve an Attribute Provider for a Project | GET | `/v1/projects/{{projectId}}/attribute-providers/{{attributeProviderId}}` | `conn_mod_def::GLOsYMgvCxA::FH-12GVKSQueM4O9f4RpOQ` |
| Create an Attribute Provider for a Project | POST | `/v1/projects/{{projectId}}/attribute-providers` | `conn_mod_def::GLOsYMkqS2A::8M0f5JozQwmeHl1QUbAKHQ` |
| Delete an Attribute Provider for a Project | DELETE | `/v1/projects/{{projectId}}/attribute-providers/{{attributeProviderId}}` | `conn_mod_def::GLOsYPjA8TA::EW6TaJEaQPiUb7gFvMHgFg` |

### DidcommInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a DIDComm Invitation for a Project | GET | `/v1/projects/{{projectId}}/didcomm/invitations/{{didcommInvitationId}}` | `conn_mod_def::GLOsZT58Gug::JQe1gFasQeeZ4BJTbqKJMw` |
| Retrieve DIDComm Invitations for a Project | GET | `/v1/projects/{{projectId}}/didcomm/invitations` | `conn_mod_def::GLOsZVsluJg::_rJS_FKFTpGUcOANSIfscw` |
| Create Connection Invitation for a Project DIDComm Invitations | POST | `/v1/projects/{{projectId}}/didcomm/invitations/create-connection` | `conn_mod_def::GLOsZJlY9Wg::yKoGLvkQS66M30yvgYHhuA` |
| Delete a DIDComm Invitation for a Project | DELETE | `/v1/projects/{{projectId}}/didcomm/invitations/{{didcommInvitationId}}` | `conn_mod_def::GLOsZUzSBug::oGsaAsMgRmCy6ohNszpIAw` |

### AnoncredsCredentialTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Anoncreds Credential Template for a Project | GET | `/v1/projects/{{projectId}}/templates/credentials/anoncreds/{{credentialTemplateId}}` | `conn_mod_def::GLOsYDrfbgg::d8dLLur3Rn6PGDcUcJ6-1Q` |
| Retrieve Anoncreds Credential Templates for a Project | GET | `/v1/projects/{{projectId}}/templates/credentials/anoncreds` | `conn_mod_def::GLOsYFanSsA::TaDoLCXqR5ay0JAFhs8wfg` |
| Archive an Anoncreds Credential Template for a Project | DELETE | `/v1/projects/{{projectId}}/templates/credentials/anoncreds/{{credentialTemplateId}}` | `conn_mod_def::GLOsYDjsIbg::uWcqyo7aTgCLZhN9gMCFvg` |

### ProjectCertificates

| Action | Method | Path | Action id |
|---|---|---|---|
| Deactivate a Project Certificate | POST | `/v1/projects/{{projectId}}/certificates/{{certificateId}}/deactivate` | `conn_mod_def::GLOsYtedgRA::jp8XYchhSNmOZLvc0qDZjQ` |
| Revoke a Project Certificate | POST | `/v1/projects/{{projectId}}/certificates/{{certificateId}}/revoke` | `conn_mod_def::GLOsYtPoPVg::PoZW-ugARlCNr5CnIY5K2g` |

### CertificateSigningRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Certificate Signing Requests for a Project | GET | `/v1/projects/{{projectId}}/certificates/csrs` | `conn_mod_def::GLOsYl_l4Bg::093hHYAnSX-jAy-hgC4owQ` |
| Delete a Certificate Signing Request for a Project | DELETE | `/v1/projects/{{projectId}}/certificates/csrs/{{certificateSigningRequestId}}` | `conn_mod_def::GLOsYkG3scA::Wu1CFbGFTpCkrdsaW27Nkg` |

### DidcommVerificationSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a DIDComm Verification Session for a Project | GET | `/v1/projects/{{projectId}}/didcomm/verification/{{didcommVerificationId}}` | `conn_mod_def::GLOsaGbtj7g::on89YL-jTQaPdKKxSWmdwA` |
| Retrieve DIDComm Verification Sessions for a Project | GET | `/v1/projects/{{projectId}}/didcomm/verification` | `conn_mod_def::GLOsaOIjxGg::D6-G_KliSsCgVyp9h-VeUw` |

### ProjectMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Project Members | GET | `/v1/projects/{{projectId}}/members` | `conn_mod_def::GLOsbJbT7vg::tERgf5kHRdyWA-xlNhbweA` |
| Add Member to a Project | POST | `/v1/projects/{{projectId}}/members/add` | `conn_mod_def::GLOsbI21FFA::OrjNhPWGTxyz8cmdi88CsQ` |

### DidcommMediatorConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Mediator Connections for a DIDComm Mediator | GET | `/v1/projects/{{projectId}}/didcomm/mediators/{{didcommMediatorId}}/connections` | `conn_mod_def::GLOsZ-1PiyA::3wAq33z1RjyuoVR0GkNGBQ` |
| Allow Mediator Connection Using a Project DIDComm Mediator | POST | `/v1/projects/{{projectId}}/didcomm/mediators/{{didcommMediatorId}}/connections` | `conn_mod_def::GLOsZpSkHZg::KTh0kVATT-ejVqjPKbt-nQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Project's Webhooks | GET | `/v1/projects/{{projectId}}/webhooks` | `conn_mod_def::GLOsb0PSHkg::zc4HN6EeRuW5VKT9gV9SCw` |
| Create a Project Webhook | POST | `/v1/projects/{{projectId}}/webhooks` | `conn_mod_def::GLOsb0xSneA::UZM1-ZLHQ3K8VtO93AsBNw` |

### DidcommIssuanceSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a DIDComm Issuance Session for a Project | GET | `/v1/projects/{{projectId}}/didcomm/issuance/{{didcommIssuanceId}}` | `conn_mod_def::GLOsZoRWTYA::k2morF5RTBiPbwwWljNdJw` |
| Retrieve DIDComm Issuance Sessions for a Project | GET | `/v1/projects/{{projectId}}/didcomm/issuance` | `conn_mod_def::GLOsZz_0Gmg::guXhQ6LrR8afT0JkNxtDHA` |

### MediatorConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Mediator Connection for a Project | GET | `/v1/projects/{{projectId}}/didcomm/mediators/{{didcommMediatorId}}/connections/{{didcommMediatorConnectionId}}` | `conn_mod_def::GLOsZ9cKwMg::w1uFdV0GTJO2v7gHLpZ_lg` |
| Delete a Mediator Connection | DELETE | `/v1/projects/{{projectId}}/didcomm/mediators/{{didcommMediatorId}}/connections/{{didcommMediatorConnectionId}}` | `conn_mod_def::GLOsZobZEGA::ql25SbZxQX2pZPxRKUQWjQ` |

### DidcommIssuanceOffers

| Action | Method | Path | Action id |
|---|---|---|---|
| Create DIDComm Issuance Offer for a Project | POST | `/v1/projects/{{projectId}}/didcomm/issuance/offer` | `conn_mod_def::GLOsZd7yeWg::jzHuSRl2TtqTinSYaiPuUA` |

### DidcommMediators

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a DIDcomm Mediator by ID for a Project | GET | `/v1/projects/{{projectId}}/didcomm/mediators/{{didcommMediatorId}}` | `conn_mod_def::GLOsZovuo4A::_BcSC_UWTLiCd8QRIhDjyQ` |

### Openid4vcVerificationSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve OpenID4VC Verification Sessions for a Project | GET | `/v1/projects/{{projectId}}/openid4vc/verification` | `conn_mod_def::GLOsaxGukKg::ce0s4FxjTyyRKY_yfjhZqg` |

### ProjectDefaultProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Project's Default Profile | GET | `/v1/projects/{{projectId}}/profiles/default` | `conn_mod_def::GLOsa7hBFQg::6JndR80fTPa5ehOtBZARYA` |

### Revocation

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Revoke Credentials for a Project | POST | `/v1/projects/{{projectId}}/revocation/batch` | `conn_mod_def::GLOsbSiOZBg::HB_jGDcGQz21UOMXOw3rwA` |

### ProjectWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Project Webhook by ID | DELETE | `/v1/projects/{{projectId}}/webhooks/{{webhookId}}` | `conn_mod_def::GLOsbzhmzxg::UUOmlt3eSKe2jlFJoNQLBA` |

### IssuedCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Issued Credentials for a Project | GET | `/v1/projects/{{projectId}}/issuance` | `conn_mod_def::GLOsaXy_meg::a1WPxCkKTGGTOlz6tWXohg` |

### OpenId4vcIssuanceSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve OpenID4VC Issuance Sessions for a Project | GET | `/v1/projects/{{projectId}}/openid4vc/issuance` | `conn_mod_def::GLOsaz8E6zg::jLVXGpUxRCmQmY_KT1t44A` |

### CredentialTemplateJsonSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve JSON Schema for an SD-JWT VC Credential Template | GET | `/v1/projects/{{projectId}}/templates/credentials/sd-jwt-vc/{{credentialTemplateId}}/json-schema` | `conn_mod_def::GLOsbdstC4g::nqGQVYXsQyCuVeVgHulj1A` |

### DidcommVerificationRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create DIDComm Verification Request for a Project | POST | `/v1/projects/{{projectId}}/didcomm/verification/request` | `conn_mod_def::GLOsaI8v6YA::wJfsj6KvQKyE2bGISCvx7A` |

### Dids

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve DIDs for a Project | GET | `/v1/projects/{{projectId}}/dids` | `conn_mod_def::GLOsaJWbBjg::Tla-1z9rSZaqRQ2Sr9Z5aw` |

### Mediators

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Mediators for a Project | GET | `/v1/projects/{{projectId}}/didcomm/mediators` | `conn_mod_def::GLOsZ9o7DXA::TgS133DpQhmouR1XMGAshQ` |

### SdJwtVcIssuance

| Action | Method | Path | Action id |
|---|---|---|---|
| Issue SD-JWT VC for a Project | POST | `/v1/projects/{{projectId}}/issuance/sd-jwt-vc` | `conn_mod_def::GLOsaHtiRWA::idShHEbrTGGzTfFib0Ctow` |

### MdocCredentialTemplateJsonSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get JSON Schema for an mdoc Credential Template in a Project | GET | `/v1/projects/{{projectId}}/templates/credentials/mdoc/{{credentialTemplateId}}/json-schema` | `conn_mod_def::GLOsaXjbHFg::Sft5WW-sSm2NpDQrG0fL4g` |

### MdocCredentialTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Mdoc Credential Template for a Project | PUT | `/v1/projects/{{projectId}}/templates/credentials/mdoc/{{credentialTemplateId}}` | `conn_mod_def::GLOsagESHOg::evX-qvwJQvWiDTxKvmRdjg` |

### Openid4vcIssuanceOffers

| Action | Method | Path | Action id |
|---|---|---|---|
| Create OpenID4VC Issuance Offer for a Project | POST | `/v1/projects/{{projectId}}/openid4vc/issuance/offer` | `conn_mod_def::GLOsaguUNPg::pki3sKBxTVW42a1VUa7hYg` |

### OpenId4VcIssuanceSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an OpenID4VC Issuance Session for a Project | GET | `/v1/projects/{{projectId}}/openid4vc/issuance/{{openId4VcIssuanceId}}` | `conn_mod_def::GLOsag1da9g::kWyB3dNVSwmySzC-SzVs1g` |

### VerificationRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Verification Request Using Openid4vc Verification | POST | `/v1/projects/{{projectId}}/openid4vc/verification/request` | `conn_mod_def::GLOsasALq3g::Iuh39F0IR_6tv2l5qLbDCg` |

### OpenId4VcVerificationSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an OpenID4VC Verification Session for a Project | GET | `/v1/projects/{{projectId}}/openid4vc/verification/{{openId4VcVerificationId}}` | `conn_mod_def::GLOsasIYa2g::0VvY4it2TwWaruL-Pl-DQQ` |

### DidcommMessaging

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Basic Message for a Project DIDComm Messaging | POST | `/v1/projects/{{projectId}}/didcomm/messaging/basic/send` | `conn_mod_def::GLOsZ8jrG1A::qbnbmQ8bQlq0TQvtHWoNUQ` |

### AnoncredsCredentialTemplateJsonSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get JSON Schema for an Anoncreds Credential Template in a Project | GET | `/v1/projects/{{projectId}}/templates/credentials/anoncreds/{{credentialTemplateId}}/json-schema` | `conn_mod_def::GLOsYFFWjxg::A6aHJkp4RxOfpGpo1zWheA` |

This lists 90 of 93 actions. For anything not here, call `search_one_platform_actions` with platform `paradym`. The full catalog is at https://www.withone.ai/knowledge/paradym.

## When a call fails

The error comes from Paradym, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/paradym

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
