---
name: crowdin
description: Crowdin is a localization management platform that provides translation workflows, collaboration tools, and APIs for managing multilingual content, allowing development, product, and localization teams to automate software and content translation across websites, apps, and digital products. Read and write Crowdin data through One: translations, webhooks, applications, screenshots, tms, glossaries and more, 338 actions with real parameter documentation. Use whenever the user asks to look something up in Crowdin, create or update a record there, or build code against the Crowdin API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: crowdin
  generated-from: one-knowledge-base
---

# Crowdin through One

Crowdin is a localization management platform that provides translation workflows, collaboration tools, and APIs for managing multilingual content, allowing development, product, and localization teams to automate software and content translation across websites, apps, and digital products.

One exposes Crowdin through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `crowdin` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Crowdin is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Crowdin account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Translations

| Action | Method | Path | Action id |
|---|---|---|---|
| Import Translations Report | GET | `/api/v2/projects/{{projectId}}/translations/imports/{{importTranslationId}}/report` | `conn_mod_def::GLK6VuE4GNg::QeTezgFrT-e9K8GDEVVj3Q` |
| List a Project's Translations | GET | `/api/v2/projects/{{projectId}}/translations` | `conn_mod_def::GLK6S87hG-A::IeFTvXd1Q8e5R1x7DwvYdA` |
| Add Translation | POST | `/api/v2/projects/{{projectId}}/translations` | `conn_mod_def::GLK6Sn6_RhA::A7079V25QYazOjYRrsM8CQ` |
| Delete String-Asset Translations | DELETE | `/api/v2/projects/{{projectId}}/translations` | `conn_mod_def::GLK6Sy5Ioug::kTcGu29rQgevWMfR2Wqe1Q` |
| Delete Translation | DELETE | `/api/v2/projects/{{projectId}}/translations/{{translationId}}` | `conn_mod_def::GLK6Sv0uGFA::UNnf5f8AQ0OdpdR3Ny4_Ig` |
| Import Translations | POST | `/api/v2/projects/{{projectId}}/translations/imports` | `conn_mod_def::GLK6VsLiZVA::qVLZs28KT6iXlYM5X2_aRg` |
| Restore Translation | PUT | `/api/v2/projects/{{projectId}}/translations/{{translationId}}` | `conn_mod_def::GLK6TKtUUfA::gKENXRXVRz6NuJpZVG_ivQ` |
| Translation Alignment | POST | `/api/v2/projects/{{projectId}}/translations/alignment` | `conn_mod_def::GLK6TK3Yn1g::lLTwrWS3SIGCQ1uQ5lhDxA` |
| Translation Batch Operations | PATCH | `/api/v2/projects/{{projectId}}/translations` | `conn_mod_def::GLK6TKhC80A::xw9rD9OiRkWYtRK_5ZsqvQ` |
| Upload Translations | POST | `/api/v2/projects/{{projectId}}/translations/{{languageId}}` | `conn_mod_def::GLK6V1dp7MA::4UKAlnmVSmG8wbpujEP8cA` |
| Validate Text By QA Checks | POST | `/api/v2/projects/{{projectId}}/translations/validate-qa-checks` | `conn_mod_def::GLK6V_ScwNA::5RYaw8ziTnWPJPskUzUWlw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhook | GET | `/api/v2/webhooks/{{organizationWebhookId}}` | `conn_mod_def::GLK6PH05FAA::32JtPq3oQMuPeY5IIAsB1A` |
| Get Webhook | GET | `/api/v2/projects/{{projectId}}/webhooks/{{webhookId}}` | `conn_mod_def::GLK6WRe2pkg::IUYM_dnFRLyVlJLBkWSVjA` |
| List Webhooks | GET | `/api/v2/projects/{{projectId}}/webhooks` | `conn_mod_def::GLK6WSL3rUA::jPOD2rkLRP2N0QeNyG8g4A` |
| List Webhooks | GET | `/api/v2/webhooks` | `conn_mod_def::GLK6PIMgbkA::SSMSdd74R8ykFiBJzdiLNA` |
| Add Webhook | POST | `/api/v2/webhooks` | `conn_mod_def::GLK6O7T_tUg::zzae5a6kQ2KrFDJw5r9Kkg` |
| Add Webhook | POST | `/api/v2/projects/{{projectId}}/webhooks` | `conn_mod_def::GLK6WIqC1nA::GSo6GM_nTIyX1PxMqpIyDg` |
| Delete Webhook | DELETE | `/api/v2/webhooks/{{organizationWebhookId}}` | `conn_mod_def::GLK6PHeoo8A::-9PPffoxTuam1uJTinFJKA` |
| Delete Webhook | DELETE | `/api/v2/projects/{{projectId}}/webhooks/{{webhookId}}` | `conn_mod_def::GLK6WJnxw_A::Ny0UOd_bToOIbqub5odF6g` |
| Edit Webhook | PATCH | `/api/v2/webhooks/{{organizationWebhookId}}` | `conn_mod_def::GLK6PHe-Oxg::f1bnuyVPSBWtxMb9gs_3rQ` |
| Edit Webhook | PATCH | `/api/v2/projects/{{projectId}}/webhooks/{{webhookId}}` | `conn_mod_def::GLK6WQ4R1qg::KIQwgRwsS56fHV-xB2ME8A` |

### Applications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Application Data | GET | `/api/v2/applications/{{applicationIdentifier}}/api/{{path}}` | `conn_mod_def::GLK6MsZwp1A::Cu96yrBrSEiu_LmEXmZNww` |
| Get Application Settings | GET | `/api/v2/applications/{{applicationIdentifier}}/api/settings` | `conn_mod_def::GLK6Nw3ZhPA::9BPeRUqsQVOiwkO_AzYcvQ` |
| Integration Login Form Fields | GET | `/api/v2/applications/{{applicationIdentifier}}/api/login-fields` | `conn_mod_def::GLK6OEA8TaA::FIGpdNglQPakelB9UoVWeA` |
| Add Application Data | POST | `/api/v2/applications/{{applicationIdentifier}}/api/{{path}}` | `conn_mod_def::GLK6MkD7KCA::uSqVuMd1TXaROvge0_oPug` |
| Delete Application Data | DELETE | `/api/v2/applications/{{applicationIdentifier}}/api/{{path}}` | `conn_mod_def::GLK6MjOJdeg::lEfEdwm_RXKGXOufydLECw` |
| Edit Application Data | PATCH | `/api/v2/applications/{{applicationIdentifier}}/api/{{path}}` | `conn_mod_def::GLK6Mr_7Mig::lclTFl8pQ8ixXQoj1yGzAA` |
| Integration Login | POST | `/api/v2/applications/{{applicationIdentifier}}/api/login` | `conn_mod_def::GLK6N8zpjWg::hmTQM1awR2anseYQbNT6xg` |
| Update Crowdin Files | POST | `/api/v2/applications/{{applicationIdentifier}}/api/crowdin-update` | `conn_mod_def::GLK6ONfnzXg::fk_BAfCJTr2m7qarqH-Qtw` |
| Update Integration Files | POST | `/api/v2/applications/{{applicationIdentifier}}/api/integration-update` | `conn_mod_def::GLK6ONfa-FA::DEwBO-_aQiKb4ZVzLy-QmQ` |
| Update Or Restore Application Data | PUT | `/api/v2/applications/{{applicationIdentifier}}/api/{{path}}` | `conn_mod_def::GLK6M1Ys_pg::fgln_-krQlyo4Ko91qBFvQ` |

### Screenshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Screenshot | GET | `/api/v2/projects/{{projectId}}/screenshots/{{screenshotId}}` | `conn_mod_def::GLK6RD_doRg::k5jhXnvES461rh7enTO5Nw` |
| List Screenshots | GET | `/api/v2/projects/{{projectId}}/screenshots` | `conn_mod_def::GLK6RGIxvug::6kelp7rSRvCry74RGJYYeQ` |
| Add Screenshot | POST | `/api/v2/projects/{{projectId}}/screenshots` | `conn_mod_def::GLK6Q7DAujg::VD70xVpkRbuHuNhmskYeQQ` |
| Assign Label To Screenshots | POST | `/api/v2/projects/{{projectId}}/labels/{{labelId}}/screenshots` | `conn_mod_def::GLK6OW0ttzA::-Lywt_qsRIOWvXbsASLTxA` |
| Clear Tags | DELETE | `/api/v2/projects/{{projectId}}/screenshots/{{screenshotId}}/tags` | `conn_mod_def::GLK6Q7Tie2A::X_TElha3RdGPSOBWni6xGQ` |
| Delete Screenshot | DELETE | `/api/v2/projects/{{projectId}}/screenshots/{{screenshotId}}` | `conn_mod_def::GLK6Q7jIpqA::DZpberJ6RSGD8zcOpgwOjA` |
| Edit Screenshot | PATCH | `/api/v2/projects/{{projectId}}/screenshots/{{screenshotId}}` | `conn_mod_def::GLK6RD6xdVg::99wckRvfRwq8QWWtNeBquA` |
| Replace Tags (Auto Tag) | PUT | `/api/v2/projects/{{projectId}}/screenshots/{{screenshotId}}/tags` | `conn_mod_def::GLK6RO5dE7g::SBKaiZKJTQqIZFA-i18W8A` |
| Unassign Label From Screenshots | DELETE | `/api/v2/projects/{{projectId}}/labels/{{labelId}}/screenshots` | `conn_mod_def::GLK6OiFxjtg::WzFEeCHJR9iMo2Py1NF4ww` |
| Update Screenshot | PUT | `/api/v2/projects/{{projectId}}/screenshots/{{screenshotId}}` | `conn_mod_def::GLK6RNxb8jg::8ApVrtDOTk6tmUwv8xg75A` |

### Tms

| Action | Method | Path | Action id |
|---|---|---|---|
| Download TM | GET | `/api/v2/tms/{{tmId}}/exports/{{exportId}}/download` | `conn_mod_def::GLK6UanDNHg::oW5-df_wRu6JCXkMEOI9Sg` |
| Get TM | GET | `/api/v2/tms/{{tmId}}` | `conn_mod_def::GLK6Ui3t7-A::cbbDYTWJSk-sL_RbvOr8dQ` |
| List Tms | GET | `/api/v2/tms` | `conn_mod_def::GLK6Ut_DT_g::c8zZtvhFSwKdc2aj3s23yQ` |
| Add TM | POST | `/api/v2/tms` | `conn_mod_def::GLK6UCx3_7g::QpUlgmuMTxaFETkceNn-bQ` |
| Clear TM | DELETE | `/api/v2/tms/{{tmId}}/segments` | `conn_mod_def::GLK6UREZ95g::OUmHEvqrRAarGEzPGA5B-g` |
| Concordance Search In TMs | POST | `/api/v2/projects/{{projectId}}/tms/concordance` | `conn_mod_def::GLK6USyAAVg::MvrFEKymTOufCVzqe14Mfg` |
| Delete TM | DELETE | `/api/v2/tms/{{tmId}}` | `conn_mod_def::GLK6UZulDdA::UZdePellQNORHH2QrnI-Kg` |
| Edit Tm | PATCH | `/api/v2/tms/{{tmId}}` | `conn_mod_def::GLK6Uixbszg::SBKH3ukQTUSh0dt6WYGApQ` |
| Export TM | POST | `/api/v2/tms/{{tmId}}/exports` | `conn_mod_def::GLK6UjYbv4A::HRMXyjqbRpugCrB3ccnJlg` |
| Import TM | POST | `/api/v2/tms/{{tmId}}/imports` | `conn_mod_def::GLK6Uu17kLA::_4hH-k0LQUavAGHjoUoHZQ` |

### Glossaries

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Glossary | GET | `/api/v2/glossaries/{{glossaryId}}/exports/{{exportId}}/download` | `conn_mod_def::GLK6NfgBQQA::KcPrS38ARl2E563NZtvUAg` |
| Get Glossary | GET | `/api/v2/glossaries/{{glossaryId}}` | `conn_mod_def::GLK6NojULLA::G6GkmdFmQPG8b8UplUtpLQ` |
| List Glossaries | GET | `/api/v2/glossaries` | `conn_mod_def::GLK6N013nyA::vUYXclRzRziMF3HbygORNg` |
| Add Glossary | POST | `/api/v2/glossaries` | `conn_mod_def::GLK6NIgi99A::imPPrKK2QICs-wSvU9_n0Q` |
| Clear Glossary | DELETE | `/api/v2/glossaries/{{glossaryId}}/terms` | `conn_mod_def::GLK6NXvEpIg::RyTnMg-_TBa-ZzRpt0JSfg` |
| Concordance Search In Glossaries | POST | `/api/v2/projects/{{projectId}}/glossaries/concordance` | `conn_mod_def::GLK6NT_Mxmg::plUvvLG1SoWlTQvp4_fjCw` |
| Delete Glossary | DELETE | `/api/v2/glossaries/{{glossaryId}}` | `conn_mod_def::GLK6NS1dI9g::r66jYMOCRPGMnv74IUl9dg` |
| Edit Glossary | PATCH | `/api/v2/glossaries/{{glossaryId}}` | `conn_mod_def::GLK6NezJZbA::wTQdxzdDSp65RZpgGqvkbw` |
| Export Glossary | POST | `/api/v2/glossaries/{{glossaryId}}/exports` | `conn_mod_def::GLK6Ng2kqtg::JHPBUUMMTdCc9fxkIKnuzw` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download File | GET | `/api/v2/projects/{{projectId}}/files/{{fileId}}/download` | `conn_mod_def::GLK6RhNRz8g::YbuplnNYRA6sVTgLXmMfkA` |
| Download File Preview | GET | `/api/v2/projects/{{projectId}}/files/{{fileId}}/preview` | `conn_mod_def::GLK6RhI3WzA::MoM9Gr50SZ6QBGXnMYTPWw` |
| Get File | GET | `/api/v2/projects/{{projectId}}/files/{{fileId}}` | `conn_mod_def::GLK6RykmP0A::FElU-5ixQg2pHdyBGHhEzw` |
| List Files | GET | `/api/v2/projects/{{projectId}}/files` | `conn_mod_def::GLK6R9qyvxg::rjvEHN2xTsuZe1zGvya6pg` |
| Add File | POST | `/api/v2/projects/{{projectId}}/files` | `conn_mod_def::GLK6RZq0CNg::v_8xQi6vSm6w7vfuoA-HGg` |
| Delete File | DELETE | `/api/v2/projects/{{projectId}}/files/{{fileId}}` | `conn_mod_def::GLK6RjiT2hA::MRcZ8FvBRRa90XRGYzmdGQ` |
| Edit File | PATCH | `/api/v2/projects/{{projectId}}/files/{{fileId}}` | `conn_mod_def::GLK6RrVVTlg::DWW2KcR9RHmWY0pDOYvOpQ` |
| Update Or Restore File | PUT | `/api/v2/projects/{{projectId}}/files/{{fileId}}` | `conn_mod_def::GLK6R9Q2otA::jyz9dmhbS76xOXH4XIW43A` |

### Bundles

| Action | Method | Path | Action id |
|---|---|---|---|
| Bundle List Files | GET | `/api/v2/projects/{{projectId}}/bundles/{{bundleId}}/files` | `conn_mod_def::GLK6VSUjZ5g::BP8OuGnWST2YQyyifR_GdA` |
| Download Bundle | GET | `/api/v2/projects/{{projectId}}/bundles/{{bundleId}}/exports/{{exportId}}/download` | `conn_mod_def::GLK6VZnvqHA::6LRppQnGQwuLZ65RGRV8CQ` |
| Get Bundle | GET | `/api/v2/projects/{{projectId}}/bundles/{{bundleId}}` | `conn_mod_def::GLK6VkJ32oA::tf-Rgem5SkCkyI6kGy37-Q` |
| List Bundles | GET | `/api/v2/projects/{{projectId}}/bundles` | `conn_mod_def::GLK6VssRWeg::Y1U4rOahTfyN-x5loFcyVA` |
| Add Bundle | POST | `/api/v2/projects/{{projectId}}/bundles` | `conn_mod_def::GLK6VCXiEVg::BMDN1KbRRY-xgyw0wGvVww` |
| Delete Bundle | DELETE | `/api/v2/projects/{{projectId}}/bundles/{{bundleId}}` | `conn_mod_def::GLK6VZhwhmg::xuVNSwqDTIKJxnSW2YHtWw` |
| Edit Bundle | PATCH | `/api/v2/projects/{{projectId}}/bundles/{{bundleId}}` | `conn_mod_def::GLK6VkBiaAA::sXjq0R7wSuSleOVIWKEN4A` |
| Export Bundle | POST | `/api/v2/projects/{{projectId}}/bundles/{{bundleId}}/exports` | `conn_mod_def::GLK6VjI7IWg::Y8aryjrgT8yhWZTDDGDJpw` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Label | GET | `/api/v2/projects/{{projectId}}/labels/{{labelId}}` | `conn_mod_def::GLK6OiF3Q8g::5awSkMRsRjGbhFwbbci42Q` |
| List Labels | GET | `/api/v2/projects/{{projectId}}/labels` | `conn_mod_def::GLK6OlKbLNA::P80i_t1nQW6-HdT7EXzI_w` |
| Add Label | POST | `/api/v2/projects/{{projectId}}/labels` | `conn_mod_def::GLK6OW0afVA::Oq0r_GQQRjq6wqHkhY3nkA` |
| Assign Label to Strings | POST | `/api/v2/projects/{{projectId}}/labels/{{labelId}}/strings` | `conn_mod_def::GLK6OYKGVJg::IbTH-kOvT5KrcG1UEf6w8g` |
| Delete Label | DELETE | `/api/v2/projects/{{projectId}}/labels/{{labelId}}` | `conn_mod_def::GLK6OXbNlTA::hPWpWyNTSrSyQvrkd2yY-g` |
| Edit Label | PATCH | `/api/v2/projects/{{projectId}}/labels/{{labelId}}` | `conn_mod_def::GLK6Oa2n9Ng::SQkqh56PSc6g1AkzTg9_2g` |
| Unassign Label From Strings | DELETE | `/api/v2/projects/{{projectId}}/labels/{{labelId}}/strings` | `conn_mod_def::GLK6OiP8BmA::GLF28cj6RV-aaMjT2e3Qqg` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get String Asset Comment | GET | `/api/v2/projects/{{projectId}}/comments/{{commentId}}` | `conn_mod_def::GLK6ScP6CpA::O1X-_GxRT66eKF2Un819BQ` |
| List String-Asset Comments | GET | `/api/v2/projects/{{projectId}}/comments` | `conn_mod_def::GLK6SgL0nXg::aClZkntjTOOiJYRW8P6Lig` |
| Add String-Asset Comment | POST | `/api/v2/projects/{{projectId}}/comments` | `conn_mod_def::GLK6SUMpqXA::D3kwJcWMQBaZB4eXOgtbAg` |
| Delete Attachment From String-Asset Comment | DELETE | `/api/v2/projects/{{projectId}}/comments/{{commentId}}/attachments/{{attachmentId}}` | `conn_mod_def::GLK6SfBo27A::FQtgsWZ-QdCcVGvHU47T2Q` |
| Delete String-Asset Comment | DELETE | `/api/v2/projects/{{projectId}}/comments/{{commentId}}` | `conn_mod_def::GLK6ScPxsdg::ZcwZwVaySRuNRbWwXkWuwA` |
| Edit String-Asset Comment | PATCH | `/api/v2/projects/{{projectId}}/comments/{{commentId}}` | `conn_mod_def::GLK6ScPqLBA::CtLgJBGZSyWQeEUZyhESPg` |
| String-Asset Comment Batch Operations | PATCH | `/api/v2/projects/{{projectId}}/comments` | `conn_mod_def::GLK6Sn5t3jg::fJM7tzcpQXeLIOwLz7Tbkg` |

This lists 90 of 338 actions. For anything not here, call `search_one_platform_actions` with platform `crowdin`. The full catalog is at https://www.withone.ai/knowledge/crowdin.

## When a call fails

The error comes from Crowdin, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/crowdin

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
