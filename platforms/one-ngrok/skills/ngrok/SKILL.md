---
name: ngrok
description: Ngrok is a secure connectivity platform that enables developers to expose local servers to the internet, create stable public endpoints, inspect traffic, and manage ingress with authentication, observability, and edge controls—without complex network configuration. Read and write Ngrok data through One: reserveddomains, vaultsecrets, certificateauthorities, eventdestinations, sshhostcertificates, tlscertificates and more, 241 actions with real parameter documentation. Use whenever the user asks to look something up in Ngrok, create or update a record there, or build code against the Ngrok API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ngrok
  generated-from: one-knowledge-base
---

# Ngrok through One

Ngrok is a secure connectivity platform that enables developers to expose local servers to the internet, create stable public endpoints, inspect traffic, and manage ingress with authentication, observability, and edge controls—without complex network configuration.

One exposes Ngrok through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ngrok` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Ngrok is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Ngrok account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ReservedDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Reserved Domain | GET | `/reserved_domains/{{id}}` | `conn_mod_def::GJgN-3_WZsA::_wHL62JUQJmhWcbwLY2IGA` |
| List Reserved Domains | GET | `/reserved_domains` | `conn_mod_def::GJgN-hIkDeA::gI7ZFYvKSaK2H1qL5igw-g` |
| Create a Reserved Domain | POST | `/reserved_domains` | `conn_mod_def::GJgN-okaYng::szmrbnrtQVOsOgiZJ1hJnw` |
| Delete a Reserved Domain | DELETE | `/reserved_domains/{{id}}` | `conn_mod_def::GJgN_I3L7dA::M19xSa0pRM6NLPzpn-43bg` |
| Detach a Reserved Domain's Certificate | DELETE | `/reserved_domains/{{ID}}/certificate` | `conn_mod_def::GJgN_RILVjA::zQUNYeagTTyY-xHQom0Buw` |
| Detach a Reserved Domain's Certificate Management Policy | DELETE | `/reserved_domains/{{id}}/certificate_management_policy` | `conn_mod_def::GJgN_aU4-sA::rlzbbRyeRE64qgG_d2J4_A` |
| Update a Reserved Domain | PATCH | `/reserved_domains/{{id}}` | `conn_mod_def::GJgN_A1wLCg::ptB3ZKYWR6SHgibn_CRUiQ` |

### VaultSecrets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Vault Secret by ID | GET | `/vault_secrets/{{id}}` | `conn_mod_def::GJgN_vRHTVA::ZClUqmHkScuwmrigNkM1jQ` |
| List a Vault’s Secrets | GET | `/vaults/{{ID}}/secrets` | `conn_mod_def::GJgOKC9EMOg::1PxAmyHvRmCJuXfG_DFHEA` |
| List Vault Secrets | GET | `/vault_secrets` | `conn_mod_def::GJgN_gXVT1A::HzCaMo-vSV2Ohl-_G2mXaQ` |
| Create a Vault Secret | POST | `/vault_secrets` | `conn_mod_def::GJgN_ohSTwA::AXmkYPykRsC8MZXANg3O_A` |
| Delete a Vault Secret | DELETE | `/vault_secrets/{{id}}` | `conn_mod_def::GJgN_9wmDSg::_FFl_DyPSdWV-qj9B1j4Aw` |
| Update a Vault Secret by ID | PATCH | `/vault_secrets/{{ID}}` | `conn_mod_def::GJgN_3n1dGg::AxfDkw0hQAaeWAsP4dwhiA` |

### CertificateAuthorities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Certificate Authority | GET | `/certificate_authorities/{{id}}` | `conn_mod_def::GJgNsxpuGCA::EGgZMcsUQxOB8BOo1r9i1A` |
| List Certificate Authorities | GET | `/certificate_authorities` | `conn_mod_def::GJgNsgPPKNA::Wdm9CoCET0-roOO4BTJ37A` |
| Create a Certificate Authority | POST | `/certificate_authorities` | `conn_mod_def::GJgNsqDKjXg::yeCZVh3MQt-cFDSpsszpUA` |
| Delete a Certificate Authority | DELETE | `/certificate_authorities/{{id}}` | `conn_mod_def::GJgNs_fW6TA::GKpCVUuQQrGeUs8-HbrLHA` |
| Update a Certificate Authority | PATCH | `/certificate_authorities/{{ID}}` | `conn_mod_def::GJgNs5K_Ofg::5cL6SSuyR6qArG2VYJhl2w` |

### EventDestinations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event Destination | GET | `/event_destinations/{{id}}` | `conn_mod_def::GJgN3scPcUg::oVJ-3jIKR1S2NdF9Y4bEzQ` |
| List Event Destinations | GET | `/event_destinations` | `conn_mod_def::GJgN3VOKwRA::IYwe0JxTT5K47OvFaocYBw` |
| Create an Event Destination | POST | `/event_destinations` | `conn_mod_def::GJgN3ggQdBg::CgwHg3_JS5OSQvfrXRMBlw` |
| Delete an Event Destination | DELETE | `/event_destinations/{{id}}` | `conn_mod_def::GJgN3_I3Rjg::Z9Jwl4F4Q9K9NYzFYQnVoQ` |
| Update an Event Destination | PATCH | `/event_destinations/{{ID}}` | `conn_mod_def::GJgN31eJLPA::pn4G8LbvQpCrG5fz9WljwQ` |

### SshHostCertificates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SSH Host Certificate | GET | `/ssh_host_certificates/{{id}}` | `conn_mod_def::GJgOCfDBF3g::AHvCYqhBS2alcf1ApanK9w` |
| List SSH Host Certificates | GET | `/ssh_host_certificates` | `conn_mod_def::GJgOCM7A7wA::Q8vPWckoRzahF6Sld3bebA` |
| Create an SSH Host Certificate | POST | `/ssh_host_certificates` | `conn_mod_def::GJgOCV0NWsg::rJL7LvSKSVi441xOSM7cfA` |
| Delete an SSH Host Certificate | DELETE | `/ssh_host_certificates/{{id}}` | `conn_mod_def::GJgOCvrJCNg::ctGSisjtSLeEi40rzHURNw` |
| Update an SSH Host Certificate | PATCH | `/ssh_host_certificates/{{id}}` | `conn_mod_def::GJgOCnuPn1A::rcn-7LBFT7SkzY2b8rTS5A` |

### TlsCertificates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a TLS Certificate | GET | `/tls_certificates/{{id}}` | `conn_mod_def::GJgOFm8rGRg::6qOP2euKTPeTdzzZzrSPKg` |
| List TLS Certificates | GET | `/tls_certificates` | `conn_mod_def::GJgOFTy0O8g::zHEGdW-sRJ29xXy-HZ-0QQ` |
| Create a TLS Certificate | POST | `/tls_certificates` | `conn_mod_def::GJgOFetrizA::pxNYKCtiQyuQBvNx98b_KA` |
| Delete a TLS Certificate | DELETE | `/tls_certificates/{{id}}` | `conn_mod_def::GJgOF30hgrg::ZdovSTngQPG4QlwSr5OMuA` |
| Update a TLS Certificate | PATCH | `/tls_certificates/{{id}}` | `conn_mod_def::GJgOFxayMsA::cvMEaOjKRDq1OJJg6Wvy3g` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API Key | GET | `/api_keys/{{id}}` | `conn_mod_def::GJgNq_RNFBg::TzI6LXf3RRGHQ-c05PX82w` |
| List API Keys | GET | `/api_keys` | `conn_mod_def::GJgNqwqM7fg::D6j4gx23QwybeFpCCKcivQ` |
| Create an API Key | POST | `/api_keys` | `conn_mod_def::GJgNq3AaA-A::tCBFIGVxTYOzyBRjR8-HfQ` |
| Delete an API Key | DELETE | `/api_keys/{{id}}` | `conn_mod_def::GJgNrNdg2ng::j1tSpAiXQrOwyeoEQv981Q` |
| Update an API Key | PATCH | `/api_keys/{{id}}` | `conn_mod_def::GJgNrGKCVdg::fjdRULIYRJm1tJ7KAnTpUQ` |

### BotUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bot User | GET | `/bot_users/{{id}}` | `conn_mod_def::GJgNsLuA0Yg::oebTXXC2Qzepl6AwZHTKUw` |
| List Bot Users | GET | `/bot_users` | `conn_mod_def::GJgNr6rITjA::PYA96oyLRCKQT3Lz5Nx5KQ` |
| Create a Bot User | POST | `/bot_users` | `conn_mod_def::GJgNsEnfV0g::aIij1PKPThG5kdneA93qxA` |
| Delete a Bot User | DELETE | `/bot_users/{{id}}` | `conn_mod_def::GJgNsZtPisA::MRoY0MFXSjC8xeLl2fBppQ` |
| Update a Bot User | PATCH | `/bot_users/{{id}}` | `conn_mod_def::GJgNsT_zewA::JCy4gdTETnKSv_C9OyPa6A` |

### Endpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Endpoint's Status | GET | `/endpoints/{{id}}` | `conn_mod_def::GJgN25GCEzA::hRdzjy0sR1yuYQTsCVwc5Q` |
| List Endpoints | GET | `/endpoints` | `conn_mod_def::GJgN2qQC4XA::FB_G0aenQmOsU-Ag1e9bsw` |
| Create an Endpoint | POST | `/endpoints` | `conn_mod_def::GJgN2w9V5ug::1KA-NQAvTY-Ph68MoFwfcg` |
| Delete an Endpoint | DELETE | `/endpoints/{{id}}` | `conn_mod_def::GJgN3JQYKiA::_lbSM-5LQIWtXQMPcFbFvw` |
| Update an Endpoint by ID | PATCH | `/endpoints/{{id}}` | `conn_mod_def::GJgN3BF9kFA::o_vWzH8jTYC5qsYx1wAvcg` |

### EventSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event Subscription by ID | GET | `/event_subscriptions/{{id}}` | `conn_mod_def::GJgN5MnCiCA::zIolbKX6TGGGhKrXlthbOA` |
| List an Account's Event Subscriptions | GET | `/event_subscriptions` | `conn_mod_def::GJgN48RJCCA::eO92xRfJRl2kpJSrLd1yaQ` |
| Create an Event Subscription | POST | `/event_subscriptions` | `conn_mod_def::GJgN5DPCblg::_esY_U6nQoWDPORWQx82_Q` |
| Delete an Event Subscription | DELETE | `/event_subscriptions/{{id}}` | `conn_mod_def::GJgN5aC535A::ojQxYgPpTCishMq23gtoxQ` |
| Update an Event Subscription | PATCH | `/event_subscriptions/{{id}}` | `conn_mod_def::GJgN5TaIW2A::AkKx8nI2ShO6HrtYEwHa_Q` |

### IpPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an IP Policy | GET | `/ip_policies/{{id}}` | `conn_mod_def::GJgN8LzoMcA::JWqNSKQ0Ss2oxI945a6-9A` |
| List IP Policies | GET | `/ip_policies` | `conn_mod_def::GJgN76NnY-g::uUoXu0LBSL2lG07PT3t7UA` |
| Create an IP Policy | POST | `/ip_policies` | `conn_mod_def::GJgN8B8sqZg::TGU1SdZdQZKeKU5dF9CFLA` |
| Delete an IP Policy | DELETE | `/ip_policies/{{id}}` | `conn_mod_def::GJgN8Z2ettA::oeY6E_z0SFa03wlNs7rO-g` |
| Update an IP Policy | PATCH | `/ip_policies/{{ID}}` | `conn_mod_def::GJgN8SeFwhg::cCZsOqSUTCGHr-fGQNNErQ` |

### IpPolicyRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an IP Policy Rule | GET | `/ip_policy_rules/{{id}}` | `conn_mod_def::GJgN80Ah2AA::VvyZ_bCXTLmnTy9wwJ0Y4Q` |
| List IP Policy Rules | GET | `/ip_policy_rules` | `conn_mod_def::GJgN8go8dFg::4t2ipHAARxSQSFJ3PewFOA` |
| Create an IP Policy Rule | POST | `/ip_policy_rules` | `conn_mod_def::GJgN8o16Wtg::aCgpY2UyT4e9sLfVE5uO6A` |
| Delete an IP Policy Rule | DELETE | `/ip_policy_rules/{{id}}` | `conn_mod_def::GJgN9DLVDdg::D1PFdKFqTQube-F6BuTdxA` |
| Update an IP Policy Rule by ID | PATCH | `/ip_policy_rules/{{ID}}` | `conn_mod_def::GJgN87QEykg::c5FHlRZ2S-CI5WI5SrD5gQ` |

### IpRestrictions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an IP Restriction | GET | `/ip_restrictions/{{id}}` | `conn_mod_def::GJgN9ZeCt0g::6RvQRXe7RxiBfYtBKTBrMw` |
| List IP Restrictions | GET | `/ip_restrictions` | `conn_mod_def::GJgN9NrgQ9A::J9M0e5r5QCiKvg9_etcyeA` |
| Create an IP Restriction | POST | `/ip_restrictions` | `conn_mod_def::GJgN9Tp2IPg::1lpwMWSSQ9CZ36LNWFWYEg` |
| Delete an IP Restriction | DELETE | `/ip_restrictions/{{id}}` | `conn_mod_def::GJgN9oeCiQg::gQV8tDOMRZCblwlG5BtPhQ` |
| Update an IP Restriction by ID | PATCH | `/ip_restrictions/{{id}}` | `conn_mod_def::GJgN9hqqwCA::0GgtTXl9Sh670LUL-QLcVA` |

### SshCertificateAuthorities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SSH Certificate Authority | GET | `/ssh_certificate_authorities/{{id}}` | `conn_mod_def::GJgOBIk8SlA::6bWR2Y0rSbWZcMjwABSqiQ` |
| List SSH Certificate Authorities | GET | `/ssh_certificate_authorities` | `conn_mod_def::GJgOA4yiJxA::UMFc69tFSDeWvW7umL3HBQ` |
| Create an SSH Certificate Authority | POST | `/ssh_certificate_authorities` | `conn_mod_def::GJgOBBR-iGg::zEs-fpQwSKCj95oHuR2m_w` |
| Delete an SSH Certificate Authority | DELETE | `/ssh_certificate_authorities/{{id}}` | `conn_mod_def::GJgOBao0Gug::DEi5dGOnQJ-iEYO4T14qmA` |
| Update an SSH Certificate Authority | PATCH | `/ssh_certificate_authorities/{{ID}}` | `conn_mod_def::GJgOBRkYwEA::mxaRXjmQQDuRozXMZAyAlQ` |

### SshCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SSH Credential | GET | `/ssh_credentials/{{ID}}` | `conn_mod_def::GJgOB1XSxxg::KwCnHSFATwCqAhmeP2x0kg` |
| List SSH Credentials | GET | `/ssh_credentials` | `conn_mod_def::GJgOBhLcOCg::MTITpgkqQlSXxBW-M2PgBg` |
| Create an SSH Credential | POST | `/ssh_credentials` | `conn_mod_def::GJgOBtI1IOA::Fbqriq5eRSeYPcQlCPVMlg` |
| Delete an SSH Credential | DELETE | `/ssh_credentials/{{id}}` | `conn_mod_def::GJgOCE9GUhA::qiUu5-JWSxmKKFweOqhIAQ` |
| Update an SSH Credential by ID | PATCH | `/ssh_credentials/{{id}}` | `conn_mod_def::GJgOB8yw6GA::JZygQh9pRD6DZqzYl4ORMQ` |

### SshUserCertificates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SSH User Certificate | GET | `/ssh_user_certificates/{{id}}` | `conn_mod_def::GJgODIL9umg::Nc1sDYh5RTyFQ4kYaVQPVA` |
| List SSH User Certificates | GET | `/ssh_user_certificates` | `conn_mod_def::GJgOC5FXVPg::4XNSPJrGQN6C5tKhwQkZgA` |
| Create an SSH User Certificate | POST | `/ssh_user_certificates` | `conn_mod_def::GJgOC__S-kA::QHKt0rdxRd6QXX7jjecWvA` |
| Delete an SSH User Certificate | DELETE | `/ssh_user_certificates/{{id}}` | `conn_mod_def::GJgODXODgSA::oc9sM7cjSsiKSsbKRMqKyQ` |
| Update an SSH User Certificate | PATCH | `/ssh_user_certificates/{{id}}` | `conn_mod_def::GJgODPGeApg::XCrX5TjRTFasFPS_ETqKGQ` |

### Vaults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Vault by ID | GET | `/vaults/{{id}}` | `conn_mod_def::GJgOJrRHg_A::PpaKm1h5SqmnQ98vBDXCnQ` |
| List Vaults | GET | `/vaults` | `conn_mod_def::GJgOJYFAOfg::d5ygJ3bISgyHC1VCphqRyg` |
| Create a Vault | POST | `/vaults` | `conn_mod_def::GJgOJiqF-2A::P7pFLr2qT32l_udo0G3_HQ` |
| Delete a Vault | DELETE | `/vaults/{{id}}` | `conn_mod_def::GJgOJ7969TA::JEdlh1_XS3anuQxshRcRnA` |
| Update a Vault by ID | PATCH | `/vaults/{{id}}` | `conn_mod_def::GJgOJxtaQ8A::vdl5c8ZgRQaevaRenQxXww` |

### TlsEdge

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a TLS Edge by ID | GET | `/edges/tls/{{id}}` | `conn_mod_def::GJgN2SZumag::KvsbwlRZSHGJ34Z-K7c4WA` |
| Create a TLS Edge | POST | `/edges/tls` | `conn_mod_def::GJgN2IC0XHg::YGdDT15jR-qwyf8-qWiDlg` |

2 more TlsEdge actions are available through search.

This lists 90 of 241 actions. For anything not here, call `search_one_platform_actions` with platform `ngrok`. The full catalog is at https://www.withone.ai/knowledge/ngrok.

## When a call fails

The error comes from Ngrok, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ngrok

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
