---
name: getprospect
description: A sales intelligence platform that helps businesses discover verified B2B leads, find professional email addresses from domains or LinkedIn profiles, and export contact lists to fuel outreach and prospecting workflows. Read and write GetProspect data through One: contacts, companies, contactlists, email, contactslists, properties and more, 32 actions with real parameter documentation. Use whenever the user asks to look something up in GetProspect, create or update a record there, or build code against the GetProspect API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: getprospect
  generated-from: one-knowledge-base
---

# GetProspect through One

A sales intelligence platform that helps businesses discover verified B2B leads, find professional email addresses from domains or LinkedIn profiles, and export contact lists to fuel outreach and prospecting workflows.

One exposes GetProspect through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `getprospect` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm GetProspect is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real GetProspect account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Contact | GET | `/api/v1/contacts/contact/{{contactId}}` | `conn_mod_def::GKBg6rhjZ-4::YhD1DW8uTuCNbzjmwPQgPw` |
| List Contacts in a List | GET | `/api/v1/contacts/lists/{{list}}/contacts/search` | `conn_mod_def::GKBg8TBq_SQ::Ak-nByf3Ri2Vyhl1O4aN8w` |
| Add Companies to a Contact | POST | `/api/v1/contacts/contact/{{contactId}}/companies` | `conn_mod_def::GKBg6TrsZiA::utaJ5qopRROwETFcKVKhYA` |
| Add Contacts to a List | POST | `/api/v1/contacts/lists/{{list}}/add` | `conn_mod_def::GKBg73Hz_aY::LcFiagdfSLSnxoeZ2KRBbg` |
| Create a Contact | POST | `/contacts/contact` | `conn_mod_def::GKBg6b8wY8Y::3pF0A4o6T0CmN8DA_5-wcw` |
| Delete a Contact | DELETE | `/api/v1/contacts/contact/{{contactId}}` | `conn_mod_def::GKBg6kBI52k::LCUxyCg0R1K-BatUoe0Tbw` |
| Search Contacts | POST | `/api/v1/contacts/contact/search` | `conn_mod_def::GKBg6132dZY::a9cdbxkiT_ica1K75IrxGA` |
| Update a Contact | PATCH | `/api/v1/contacts/contact/{{contactId}}` | `conn_mod_def::GKBg69gvIbk::ouJhX7g8TIe1l0hKnYr-zQ` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company by ID | GET | `/api/v1/companies/company/{{companyId}}` | `conn_mod_def::GKBg5l_z4Ao::bOFGWviNSVagD_H0NgelqA` |
| Search Companies | GET | `/api/v1/companies/company/search/query` | `conn_mod_def::GKBg5u2g-ZU::EP2tYi3oRGOwURocKHSDLA` |
| Create a Company | POST | `/companies/company` | `conn_mod_def::GKBg5UyaDqM::iSrk0JE_ROilRBoK7UtQcg` |
| Delete a Company | DELETE | `/api/v1/companies/company/{{companyId}}` | `conn_mod_def::GKBg5eVLNbM::FeClHOGDT1aPCU9_nMQu2A` |
| Update a Company | PATCH | `/api/v1/companies/company/{{companyId}}` | `conn_mod_def::GKBg5411_as::7do5aNWOReK1yP5aX1wQUQ` |

### ContactLists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Lists | GET | `/api/v1/contacts/lists` | `conn_mod_def::GKBg8mJbppQ::u4t39H-HT4qsJh-s73viTw` |
| Create a New Contact List | POST | `/api/v1/contacts/lists` | `conn_mod_def::GKBg7_BF1og::EuwLpw-fQpquZoGmIO82OQ` |
| Delete Contact Lists | DELETE | `/contacts/lists` | `conn_mod_def::GKBg8J9LRyY::YNci-olfQ92JEgMw-cjxsA` |

### Email

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Contact's Business Email | GET | `/public/v1/email/find` | `conn_mod_def::GKBg7F05Px4::QCHsOVgdS7CI7Wq7QMEeFQ` |
| Verify an Email Address | GET | `/public/v1/email/verify` | `conn_mod_def::GKBg7Vr-l_4::HB7a079mR2-7YxL3DZ7nzw` |

### ContactsLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Counts for Lists | POST | `/api/v1/contacts/lists/lists-sizes` | `conn_mod_def::GKBg8cywd-o::iVnYVXUmR0i7gF2JfkKdzw` |
| Update a Contacts List | PATCH | `/api/v1/contacts/lists/{{listId}}` | `conn_mod_def::GKBg8tp-F68::4fo72sdZQJWTAIQJ3tIrEg` |

### Properties

| Action | Method | Path | Action id |
|---|---|---|---|
| List Properties (Workspace) | GET | `/api/v1/properties` | `conn_mod_def::GKBg89DYFYI::NhPzrm_sQjyZZGCSQV-tJQ` |

### StripePurchaseStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Stripe Purchase Status | GET | `/api/v1/stripe/purchase/status` | `conn_mod_def::GKBg9swwx7s::RJHjTGYvT72za3UyUC0H9Q` |

### EmailVerifier

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify an Email Address | GET | `/email-verifier` | `conn_mod_def::GKBg7mNIpOM::XU3DcUIeQ32YmOixPoeITQ` |

### InsightsContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Leads (Contacts Insights) | POST | `/public/v1/insights/contacts` | `conn_mod_def::GKBg9kze8ws::u8ysvhxbQmWCPTwk0Tmmwg` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Test API Health (Health Check) | GET | `/api/v1/health/test` | `conn_mod_def::GKBg7uozJ_c::9AxbGkxORFGoUDmJ6cwsJQ` |

### InternalMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Internal Prometheus Metrics | GET | `/internal/metrics` | `conn_mod_def::GKBg81RJnDM::iEfxM568QGu7zS4KoGK8Vw` |

### CompanyEnrich

| Action | Method | Path | Action id |
|---|---|---|---|
| Company Enrich | GET | `/v2/company-enrich` | `conn_mod_def::GKBg6CslTKE::0gKDEIIlTFyxpCIuRJMD0Q` |

### EmailFinder

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Contact’s Business Email | GET | `/email-finder` | `conn_mod_def::GKBg7emH9ds::fTBpBdm8SyawyCVBte6Ruw` |

### EmailLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup Email | GET | `/public/v1/email/lookup` | `conn_mod_def::GKBg7N2yNLY::AmrwynsiRAa6sOAzS5moJA` |

### InsightsCompanies

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Companies (Insights) | POST | `/public/v1/insights/companies` | `conn_mod_def::GKBg9Suagq0::s-mv7gYQQ0yiNGindVaqCw` |

### Insights

| Action | Method | Path | Action id |
|---|---|---|---|
| Fast Search Insight Contacts and Companies | GET | `/api/v1/insights/search/fast-search/{{search}}` | `conn_mod_def::GKBg9F18orA::ypHQa-0KRia5V7aUf2R81w` |

### ContactInsights

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Lead by LinkedIn Link (Get Contact Insights) | GET | `/public/v1/insights/contact` | `conn_mod_def::GKBg9apRnnI::Db62YaLyRIyQVbIzZsI17Q` |

## When a call fails

The error comes from GetProspect, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/getprospect

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
