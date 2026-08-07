---
name: codacy
description: A cloud-based code quality and static analysis tool that automatically reviews code for bugs, security issues, and style violations, tracks coverage and quality metrics across languages, and integrates with CI/CD pipelines to help teams maintain high standards and reduce technical debt. Read and write Codacy data through One: organizations, repositories, codingstandards, gatepolicies, repositoryqualitysettings, jiratickets and more, 279 actions with real parameter documentation. Use whenever the user asks to look something up in Codacy, create or update a record there, or build code against the Codacy API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: codacy
  generated-from: one-knowledge-base
---

# Codacy through One

A cloud-based code quality and static analysis tool that automatically reviews code for bugs, security issues, and style violations, tracks coverage and quality metrics across languages, and integrates with CI/CD pipelines to help teams maintain high standards and reduce technical debt.

One exposes Codacy through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `codacy` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Codacy is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Codacy account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Check If a User Can Leave an Organization | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/people/leave/check` | `conn_mod_def::GKCpvW4vXXE::3N7ngt9WQnmxUNUGX3hZiA` |
| Get an Organization by Provider and Remote Organization Name | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}` | `conn_mod_def::GKCpv04b6Ow::s5wNxxsvQ2KOPtEnqtozCQ` |
| Get an Organization by Provider Installation ID | GET | `/organizations/{{provider}}/installation/{{installationId}}` | `conn_mod_def::GKCpqKrup6U::RUs-6x7hTBCrGpMKXdNNbg` |
| Get an Organization's Detailed Billing Information | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/billing` | `conn_mod_def::GKCpv2G5rZY::dj1JTLLqSb2TW6Y9IcK-1A` |
| List an Enterprise's Organizations | GET | `/enterprises/{{provider}}/{{enterpriseName}}/organizations` | `conn_mod_def::GKCpt6pG5vI::ShbtJpMWSiOY0j3QspcBMA` |
| List Organizations for the Authenticated User | GET | `/api/v3/user/organizations` | `conn_mod_def::GKCpqUcbA-E::aOrBpTZOSUqEGnEuJpqDDw` |
| Add an Organization to Codacy | POST | `/api/v3/organizations` | `conn_mod_def::GKCpvNqteiY::RNJGeM9kRUysQRsq0vhZOA` |
| Add People to an Organization | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/people` | `conn_mod_def::GKCpwaB_Bp8::GVub86SeRsma8xld-AC00g` |
| Apply Default Settings to an Organization's Repositories | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/integrations/providerSettings/apply` | `conn_mod_def::GKCpvW5QGMo::BPa7PORGQpijKcMZKVyk5A` |
| Change an Organization's Plan | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/billing/change-plan` | `conn_mod_def::GKCpvWTRbMI::jYP5YDD9Tr65Yj6A_xhM-A` |
| Clean an Organization Cache for the Authenticated User | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/cache/clean` | `conn_mod_def::GKCpvWl6TbY::DayVfF3UR2yewLTUG9VzMg` |
| Decline Requests to Join an Organization | DELETE | `/organizations/{{provider}}/{{remoteOrganizationName}}/join` | `conn_mod_def::GKCpvjmOvjY::AJc-J0X0QZeJX-uDfeonTA` |

11 more Organizations actions are available through search.

### Repositories

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Repository Post-Commit Hook for an Organization | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/integrations/postCommitHook` | `conn_mod_def::GKCpwxaW3po::lSzslGYmTyGUJ8qqhSEdzQ` |
| Fetch an Organization Repository | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}` | `conn_mod_def::GKCpw7HBmv8::2FERYxEmQhGvWD_XYr3row` |
| List an Organization's Repositories for the Authenticated User | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories` | `conn_mod_def::GKCpwBf87rw::EvO91rNARDqMEWOlEw2gHg` |
| List an Organization's Repositories That Have AI Inventory Resources | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/ai-risk/inventory/repositories` | `conn_mod_def::GKCprEXlMhY::Ckdc0salRi6YKX58EMrp4g` |
| Add a Repository to Codacy | POST | `/api/v3/repositories` | `conn_mod_def::GKCpwyG0Dms::TF2d-u5WThaZZVQjx4cZlA` |
| Create a Repository Badge Pull Request for an Organization | POST | `/organizations/gh/{{remoteOrganizationName}}/repositories/{{repositoryName}}/badge` | `conn_mod_def::GKCpwxWptsA::2imyxRV6Q_KW8BOJO6S0pw` |
| Delete an Organization Repository | DELETE | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}` | `conn_mod_def::GKCpw6jyOuI::25eXEnzkQZmAJ6nN-fRbpQ` |
| Follow an Organization Repository That Was Already Added to Codacy | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/follow` | `conn_mod_def::GKCpw7CMmm0::9FgR35bWQfeEtwshvPoN9w` |
| Reanalyze a Repository Commit in an Organization | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/reanalyzeCommit` | `conn_mod_def::GKCpxyofOXc::kbVwXs9aRHimofpIM-i5wQ` |
| Regenerate a Repository's SSH Key | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/settings/ssh-repository-key` | `conn_mod_def::GKCpxwzB3vA::53Zi3F-LSIm6o990n4S25A` |
| Regenerate a Repository's User SSH Key | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/settings/ssh-user-key` | `conn_mod_def::GKCpxxAIESE::2Zq4iRhzT9mbQ1MYEHdNXA` |
| Set a Repository Branch as Default | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/branches/{{branchName}}/setDefault` | `conn_mod_def::GKCpx716BAo::UaE2Qhn7RIqpvs71Ye4dAw` |

2 more Repositories actions are available through search.

### CodingStandards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization's Coding Standard | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/coding-standards/{{codingStandardId}}` | `conn_mod_def::GKCptKKejjE::3Wm70lSMSxaNtQ75YtTS4A` |
| List an Organization's Coding Standards | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/coding-standards` | `conn_mod_def::GKCptSwZt1k::mvfYzerKRCWwlEfcW5odpA` |
| Apply a Coding Standard to an Organization's Repositories | PATCH | `/organizations/{{provider}}/{{remoteOrganizationName}}/coding-standards/{{codingStandardId}}/repositories` | `conn_mod_def::GKCps7MduX4::-SeZCoPbT7GakbZYEMuz5w` |
| Configure a Tool in an Organization's Draft Coding Standard | PATCH | `/organizations/{{provider}}/{{remoteOrganizationName}}/coding-standards/{{codingStandardId}}/tools/{{toolUuid}}` | `conn_mod_def::GKCps7UDKGY::HNJFxtYuQvyjnxlsFEz23A` |
| Create a Draft Coding Standard for an Organization | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/coding-standards` | `conn_mod_def::GKCptK3TmsI::vj9nqwsrSpW8ZBFTYFzOLg` |
| Delete an Organization's Coding Standard | DELETE | `/organizations/{{provider}}/{{remoteOrganizationName}}/coding-standards/{{codingStandardId}}` | `conn_mod_def::GKCptJw3xeI::SCnfYOBpQT2jQ6QC5vvlUQ` |
| Duplicate an Organization's Coding Standard | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/coding-standards/{{codingStandardId}}/duplicate` | `conn_mod_def::GKCptKAgS7s::6KELa1oTSK-5KahsfHBe8g` |
| Promote an Organization's Draft Coding Standard | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/coding-standards/{{codingStandardId}}/promote` | `conn_mod_def::GKCptfWnfrA::ypSAhUBQQiWTlN26XN8amg` |
| Set an Organization's Default Coding Standard | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/coding-standards/{{codingStandardId}}/setDefault` | `conn_mod_def::GKCptfPtKA4::iyUhgWNvQquBZH_B1WhrZw` |

### GatePolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Gate Policies | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/gate-policies` | `conn_mod_def::GKCpuOCwRXo::IrHrIevQQaaD2wqdLtU9ZA` |
| Apply a Gate Policy to an Organization's Repositories | PUT | `/organizations/{{provider}}/{{remoteOrganizationName}}/gate-policies/{{gatePolicyId}}/repositories` | `conn_mod_def::GKCpuE0XBDY::WWhCLkdSRQGWBl1GzR-ifw` |
| Delete an Organization's Gate Policy | DELETE | `/organizations/{{provider}}/{{remoteOrganizationName}}/gate-policies/{{gatePolicyId}}` | `conn_mod_def::GKCpuNHXxsU::LUi0KXA4RfypbfBYqaqaQg` |
| Set an Organization Gate Policy as the Default | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/gate-policies/{{gatePolicyId}}/setDefault` | `conn_mod_def::GKCpuXI6FCw::3U_A6J2VSeODYXqcz1N8ug` |
| Update an Organization's Gate Policy | PATCH | `/organizations/{{provider}}/{{remoteOrganizationName}}/gate-policies/{{gatePolicyId}}` | `conn_mod_def::GKCpuXmUSw0::wMMlTl9rTwOVq_RjL5tgXQ` |

### RepositoryQualitySettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Repository's Quality Settings | GET | `/analysis/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/quality-settings` | `conn_mod_def::GKCprpK88aU::yR6PAyRUSvunG_WB0FxXrA` |
| Get a Repository's Quality Settings | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/settings/quality/repository` | `conn_mod_def::GKCpxQC6ee8::1TZRRm11Slq29cY-f4zjnw` |
| Reset a Repository's Quality Settings | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/settings/quality/repository/reset` | `conn_mod_def::GKCpx7v_NsU::Be6AMfztTCKmpMJ1MpbL3Q` |
| Update a Repository's Quality Goals Settings | PUT | `/organizations/{{provider}}/repositories/{{remoteOrganizationName}}/{{repositoryName}}/settings/quality/repository` | `conn_mod_def::GKCpyEMcZv8::_B8x7VRzSam0Clx5XmDdrw` |

### JiraTickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Jira Tickets for an Organization's Codacy Element | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/integrations/jira/tickets` | `conn_mod_def::GKCputW1n-A::GUCo2n1nSgm9p8av4tFlEQ` |
| Create a Jira Ticket for an Organization Integration | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/integrations/jira/tickets` | `conn_mod_def::GKCpuggv0Jg::cl60-jFaThajiQ6JYoYQKg` |
| Create a Repository Jira Ticket | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/integrations/jira/tickets` | `conn_mod_def::GKCpugbp49s::aDTjDEMAQfawOpgDWRSXVA` |
| Unlink a Repository Jira Ticket | DELETE | `/organizations/{{provider}}/{{remoteOrganizationName}}/integrations/jira/tickets/{{jiraTicketIdentifier}}` | `conn_mod_def::GKCpur1iDio::eT0aNhtcRMq0jTMQGzNkXA` |

### EnterpriseMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Latest Grouped Metric Values for All Organizations in an Enterprise | POST | `/enterprises/{{provider}}/{{enterpriseName}}/metrics/{{metricName}}/latest-grouped` | `conn_mod_def::GKCpu7ajHxc::9sk5APK7QlijZ0XtWnvhrQ` |
| Retrieve Latest Metric Values for All Organizations in an Enterprise | POST | `/enterprises/{{provider}}/{{enterpriseName}}/metrics/{{metricName}}/latest` | `conn_mod_def::GKCpu6_B3iI::-WbP0CmpTzmU4EgLN_7Edw` |
| Retrieve Metric Values for a Specific Period for All Organizations in an Enterprise | POST | `/enterprises/{{provider}}/{{enterpriseName}}/metrics/{{metricName}}/period` | `conn_mod_def::GKCpu7TKS9c::_JxIrn7rQPar-ncgFtC3dw` |
| Retrieve Period-Grouped Metric Values for an Enterprise | POST | `/enterprises/{{provider}}/{{enterpriseName}}/metrics/{{metricName}}/period-grouped` | `conn_mod_def::GKCpvEABvxI::6SCnHOPWQM2Jbrce7qlU3w` |

### SecurityItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Security and Risk Management Items | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/security/items` | `conn_mod_def::GKCpy8za5TQ::KkyXjWHSRpGixQ4xUdeisg` |
| Generate a CSV Export of an Organization's Security Items | POST | `/reports/organizations/{{provider}}/{{remoteOrganizationName}}/security/items/search` | `conn_mod_def::GKCpwjBjCF8::71qlevJHRdO1Ck3VKkG5cg` |
| Ignore a Security Item for an Organization | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/security/items/{{srmItemId}}/ignore` | `conn_mod_def::GKCpyyk-Y1c::Rfa1N6BGSYejmzzHfA3MXA` |
| List an Organization's Security and Risk Management Items | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/security/items/search` | `conn_mod_def::GKCpy8hzB0E::QXmvr2tRTbmFuzP1gh6_hQ` |

### DastTargets

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Configured DAST Targets | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/dast/targets` | `conn_mod_def::GKCptyo-WJg::_jV4581HRzaH315cV01llw` |
| Create an Organization's DAST Target | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/dast/targets` | `conn_mod_def::GKCpto4_iSw::67Irr23eTq6Jc-6o2yIE6w` |
| Delete an Organization's DAST Target | DELETE | `/organizations/{{provider}}/{{remoteOrganizationName}}/dast/targets/{{dastTargetId}}` | `conn_mod_def::GKCptn6Ft-w::WcYt9VgPQMyVKHo2gVimOA` |

### OrganizationMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Organization Metric Value for a Specific Period | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/metrics/{{metricName}}/period` | `conn_mod_def::GKCpu67eV2o::WhudxANFQHyuz8jdBz-ecw` |
| Retrieve an Organization Metric's Latest Value | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/metrics/{{metricName}}/latest` | `conn_mod_def::GKCpvN3_5JY::KRGnSyXFRv-jwtF1KLCJfA` |
| Retrieve Period-Grouped Metric Values for an Organization | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/metrics/{{metricName}}/period-grouped` | `conn_mod_def::GKCpu6692Vk::8VmGmqa2QIip1h-2sFT0qQ` |

### RepositoryApiTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Repository's API Tokens | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/tokens` | `conn_mod_def::GKCpxmOY9JY::Q9s-xIUpR6K1EUHq1wjWgA` |
| Create a Repository API Token for an Organization Repository | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/tokens` | `conn_mod_def::GKCpwxECgFU::clLv8p2eRkiLiw82XhpCBw` |
| Delete a Repository API Token | DELETE | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/tokens/{{tokenId}}` | `conn_mod_def::GKCpwxMYpZw::M6L-HJdOQq-Ultc-f97GUQ` |

### ImageSboms

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete All SBOMs for an Organization Image | DELETE | `/organizations/{{provider}}/{{remoteOrganizationName}}/image-sboms/{{imageName}}` | `conn_mod_def::GKCpyPfDAI4::M9dKkdtqQOWHpG46Wr975g` |
| Delete an Organization Image SBOM by Image Name and Tag | DELETE | `/organizations/{{provider}}/{{remoteOrganizationName}}/image-sboms/{{imageName}}/tags/{{tag}}` | `conn_mod_def::GKCpyO_xip8::0cL9HIjSRm6AkXqeisb19w` |
| Upload an Organization's Docker Image SBOM | POST | `/organizations/{{provider}}/{{remoteOrganizationName}}/image-sboms` | `conn_mod_def::GKCpyXb7te4::pEZse3H3S7-dhcYJYhDFFQ` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Authenticated User | GET | `/user` | `conn_mod_def::GKCpqUfVu10::90_oBaCbRPyQkfRe_u1kUw` |
| Delete the Authenticated User | DELETE | `/api/v3/user` | `conn_mod_def::GKCpqGgkphI::4uY5DwPgT12j3SusQgVzug` |
| Update the Authenticated User | PATCH | `/api/v3/user` | `conn_mod_def::GKCpqqtaC3Y::kNGIUfxdQ0m-xwxbNSSv2Q` |

### UserEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| List the Authenticated User's Emails | GET | `/api/v3/user/emails` | `conn_mod_def::GKCpqXwAwSg::J3b7sW_sTteoX6Ld4ANgjg` |
| Remove an Email From the Authenticated User Account | POST | `/api/v3/user/emails/remove` | `conn_mod_def::GKCpqhDCYko::nKpveyvaRSCz0x5AaCdaIQ` |
| Set Default Email | POST | `/api/v3/user/emails/set-default` | `conn_mod_def::GKCpqf-Bbes::RwDjk7KwSB6KrCsBj411Yg` |

### UserApiTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List Authenticated User API Tokens | GET | `/api/v3/user/tokens` | `conn_mod_def::GKCpqgBFCb4::N6-AS_WEQ8WblW_z-OAnNg` |
| Delete an Authenticated User's API Token | DELETE | `/user/tokens/{{tokenId}}` | `conn_mod_def::GKCpqGfJVOs::98XGnCmMSemNm5-gktNWoA` |

### Issues

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Ignore Issues in a Repository | POST | `/analysis/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/issues/bulk-ignore` | `conn_mod_def::GKCprFVNW-Y::BikU9PhNTYeVUwoYE3cL5Q` |
| Ignore or Unignore an Issue in a Repository | PATCH | `/analysis/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/issues/{{issueId}}` | `conn_mod_def::GKCprzhdrMw::i3UYdolyTGSULmfFD_Cp0g` |

### Enterprises

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Enterprise | GET | `/enterprises/{{provider}}/{{enterpriseName}}` | `conn_mod_def::GKCpt58at_U::Jte25veDSv2XSZNETGlNEA` |
| List a User's Enterprises by Provider | GET | `/enterprises/{{provider}}` | `conn_mod_def::GKCpt8AdT0E::S_W_qF94Sv-qAqrAhbBglA` |

### OrganizationGitProviderSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization's Git Provider Settings | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/integrations/providerSettings` | `conn_mod_def::GKCpv1zev_k::EZj6k_u8SVeTBiosCgVypg` |
| Create or Update an Organization's Git Provider Settings | PATCH | `/organizations/{{provider}}/{{remoteOrganizationName}}/integrations/providerSettings` | `conn_mod_def::GKCpvjpHBk8::4_FJ7_eFSMKDpx3CRubmhA` |

### JiraIntegration

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Update an Organization's Jira Integration | PUT | `/organizations/{{provider}}/{{remoteOrganizationName}}/integrations/jira` | `conn_mod_def::GKCpvkHo-S8::hO4rWEe4SKyTjgJzGgil3w` |
| Delete an Organization's Jira Integration | DELETE | `/organizations/{{provider}}/{{remoteOrganizationName}}/integrations/jira` | `conn_mod_def::GKCpvscNbmE::3dfGMd31QmCRaXd50xG0kw` |

### OrganizationSlackIntegration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization's Slack Integration | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/integrations/slack` | `conn_mod_def::GKCpv-vawQ0::EUY4SXiAQL--J0hHf1fQZw` |
| Create or Update an Organization's Slack Integration | PUT | `/organizations/{{provider}}/{{remoteOrganizationName}}/integrations/slack` | `conn_mod_def::GKCpvkQteM4::O-nL_WM9TtylQ2rFEdfqmg` |

### PeopleSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Repository's People Suggestions | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/people/suggestions` | `conn_mod_def::GKCpwW-iOjA::i4YmxH2eTw-UhJTGUIqM-Q` |
| List an Organization's People Suggestions | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/people/suggestions` | `conn_mod_def::GKCpwWmtNjw::0ge9aoGbSOagEb31HaJxPA` |

### RepositoryFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Repository File's Analysis Information and Coverage Metrics | GET | `/organizations/{{provider}}/repositories/{{repositoryName}}/files/{{fileId}}` | `conn_mod_def::GKCpw7F1bEY::F19J7WgqT468EdPfVMpl0g` |
| List a Repository's Files | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/files` | `conn_mod_def::GKCpxoBnh80::7C7u4mFOTeyPHMGsXeHuUA` |

### RepositoryGitProviderIntegrationSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Repository's Git Provider Integration Settings | GET | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/integrations/providerSettings` | `conn_mod_def::GKCpxGIkkBc::VBLDc6gIS0WZNAbL08135Q` |
| Update a Repository's Git Provider Integration Settings | PATCH | `/organizations/{{provider}}/{{remoteOrganizationName}}/repositories/{{repositoryName}}/integrations/providerSettings` | `conn_mod_def::GKCpyFz4eRQ::lTWRKehOQKmXtsbi4h7Nqw` |

This lists 90 of 279 actions. For anything not here, call `search_one_platform_actions` with platform `codacy`. The full catalog is at https://www.withone.ai/knowledge/codacy.

## When a call fails

The error comes from Codacy, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/codacy

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
