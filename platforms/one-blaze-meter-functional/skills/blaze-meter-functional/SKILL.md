---
name: blaze-meter-functional
description: BlazeMeter is a testing platform for web and API applications, and its Functional API enables developers to programmatically create, manage, and run automated API tests to validate responses, workflows, and service behavior across development and production environments. Read and write BlazeMeter Functional data through One: tests, projects, schedules, multitests, privatelocations, testsuite and more, 79 actions with real parameter documentation. Use whenever the user asks to look something up in BlazeMeter Functional, create or update a record there, or build code against the BlazeMeter Functional API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: blaze-meter-functional
  generated-from: one-knowledge-base
---

# BlazeMeter Functional through One

BlazeMeter is a testing platform for web and API applications, and its Functional API enables developers to programmatically create, manage, and run automated API tests to validate responses, workflows, and service behavior across development and production environments.

One exposes BlazeMeter Functional through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `blaze-meter-functional` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BlazeMeter Functional is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BlazeMeter Functional account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Test Details | GET | `/tests/{{testId}}` | `conn_mod_def::GJo4sVVs-8k::H81mRY7QRDqS0TWb2IituA` |
| List Tests | GET | `/tests` | `conn_mod_def::GJo4sOV_JeI::T__2n6EKS1uU7poYptIupA` |
| Create a Test | POST | `/tests` | `conn_mod_def::GJo4rbPsFbQ::fLcbnqCjRzK1DMhlntkgIg` |
| Delete a Test | DELETE | `/tests/{{testId}}` | `conn_mod_def::GJo4sjuq0U8::tsNapgZwSJ2gmEpaER7sFg` |
| Duplicate a Test | POST | `/tests/{{TESTID}}/duplicate` | `conn_mod_def::GJo4sd8BhnA::9wtLmOYRRbmIJRvtDQnOUA` |
| Start a Test | POST | `/tests/{{testId}}/start` | `conn_mod_def::GJo4pRnxj04::5SsDXBjcRDCkywydHU_MPQ` |
| Update a Test | PATCH | `/tests/{{TESTID}}` | `conn_mod_def::GJo4sFh-0ZY::UpiYuXvvTUSPmT7UTE8Anw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Details | GET | `/projects/{{projectId}}` | `conn_mod_def::GJo4l4D9YjQ::AFIr3LucTsmFnTFYJVU-XA` |
| List Projects | GET | `/projects` | `conn_mod_def::GJo4lrc01nc::D8njAqJiSwODKlBRgGnmDg` |
| Create a Project | POST | `/projects` | `conn_mod_def::GJo4ljIt4O0::AmBeg4oeRne_yQh7B2rQwQ` |
| Delete a Project | DELETE | `/projects/{{projectId}}` | `conn_mod_def::GJo4mFxg3k8::gf81e_YlQuSy4DQAiehZmw` |
| Update a Project | PATCH | `/projects/{{PROJECTID}}` | `conn_mod_def::GJo4l_WM_58::3ho_6Q7AR0irvOz5oYZvqA` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Schedule Details | GET | `/schedules/{{SCHEDULEID}}` | `conn_mod_def::GJo4p6Wof3E::zK3EUT3WQhuD0nwGWf0amw` |
| List Schedules | GET | `/schedules` | `conn_mod_def::GJo4pzxH0_E::cqVRvITETc6gI0dmjA9gWA` |
| Create a Schedule | POST | `/schedules` | `conn_mod_def::GJo4pjLP06Y::5icSN_93TFeWOaA02YVuvQ` |
| Delete a Schedule | DELETE | `/schedules/{{scheduleId}}` | `conn_mod_def::GJo4qKXjOJw::iXvATCPYT-etYGv4ku8h0g` |

### MultiTests

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Tests to a Test Suite (Multi-Test) | POST | `/multi-tests/{{COLLECTIONID}}/add-tests-executions` | `conn_mod_def::GJo4qdA-M0k::24F0TucWQmep7_u3B2NVMg` |
| Create a Test Suite (Multi-Test) | POST | `/multi-tests` | `conn_mod_def::GJo4qQfSRno::VAo7McfeTEy83AOnw6pCLw` |
| Duplicate a Test Suite (Multi-Test) | POST | `/multi-tests/{{COLLECTIONID}}/duplicate` | `conn_mod_def::GJo4rHN67wo::OY_esxwsSFq6B39kajVeHg` |
| Remove a Test Execution From a Test Suite (Multi-Test) | POST | `/multi-tests/{{COLLECTIONID}}/remove-tests-executions` | `conn_mod_def::GJo4qlme3pA::O0aDlKeKSkWSeGIYOrYVVQ` |

### PrivateLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Private Location's Details | GET | `/private-locations/{{HARBORID}}` | `conn_mod_def::GJo4kRtzKBo::zvK27McGR6Odjmgs8jcHGA` |
| List Private Locations | GET | `/private-locations` | `conn_mod_def::GJo4kKRHy5M::IppPU9wYRmqZEFIGsq196w` |
| Delete a Private Location | DELETE | `/private-locations/{{HARBORID}}` | `conn_mod_def::GJo4lcmqBZk::guQD2zrxTHSWzkj-hGYdNw` |
| Update a Private Location | PATCH | `/private-locations/{{HARBORID}}` | `conn_mod_def::GJo4kYdiRKk::92xcIWE3SgeSKAudqG8Vcg` |

### TestSuite

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test Suite’s Details | GET | `/multi-tests/{{collectionId}}` | `conn_mod_def::GJo4q1tAlhQ::Nyz77xVlQe67ys_STS-GEA` |
| Delete a Test Suite | DELETE | `/multi-tests/{{collectionId}}` | `conn_mod_def::GJo4rSGWiZ8::S62W7fyDTP67QEcB5vUw2Q` |
| Update a Test Suite | PUT | `/multi-tests/{{COLLECTIONID}}` | `conn_mod_def::GJo4rAwZj4s::4SZevQd4QlGzG5Z9qdC6cA` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Workspace Details | GET | `/workspaces/{{WORKSPACEID}}` | `conn_mod_def::GJo4s52uAbY::r7k264nuQYS2kfh_Osk2Ig` |
| List Workspaces | GET | `/workspaces` | `conn_mod_def::GJo4szBpd5M::HSDCdYBhRLWBw_C6xSQNHQ` |
| Create a Workspace | POST | `/workspaces` | `conn_mod_def::GJo4ssb_99Y::Ssenup9TQySbZN3vuuz_5Q` |

### Masters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Master Details | GET | `/masters/{{MASTERID}}` | `conn_mod_def::GJo4nTLV3sA::7ZK3QYZWQpiLBNlZM3uETQ` |
| List Masters (Test Runs) | GET | `/masters` | `conn_mod_def::GJo4nbNt0_U::7MYAQq-6TvODQT_e3lidOQ` |
| Add a Public Token to a Master | POST | `/masters/{{MASTERID}}/public-token` | `conn_mod_def::GJo4npX-ET4::9urw7sFLTFmhyZyoGV1vkQ` |

### PrivateLocationAgent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Private Location Agent's Details | GET | `/private-locations/{{HARBORID}}/servers/{{SHIPID}}` | `conn_mod_def::GJo4koAlHSQ::yRzrH5ojTXSLWz51Oq9SIg` |
| Create a Private Location Agent (Server) | POST | `/private-locations/{{HARBORID}}/servers` | `conn_mod_def::GJo4juvtZTk::AHX97qyPRsCMTVbJbyPpBQ` |
| Update a Private Location Agent (Server) | PATCH | `/private-locations/{{HARBORID}}/servers/{{SHIPID}}` | `conn_mod_def::GJo4ku6VJZc::Dy33E4sHQ-CwpYs7jVEFuw` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace’s Shared Folders | GET | `/folders` | `conn_mod_def::GJo4mTdO4oA::kv2J2Ke8TnqZ7jb0IEvPTA` |
| Create a Shared Folder | POST | `/folders` | `conn_mod_def::GJo4mLfAm0g::-gu4C0ZURwi8d_rtbrYbdw` |
| Delete a Shared Folder | DELETE | `/folders/{{folderId}}` | `conn_mod_def::GJo4nMTRGGw::8EvUiDB7RwmXIgLQgCOkdw` |

### WorkspaceUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Users | GET | `/workspaces/{{WORKSPACEID}}/users` | `conn_mod_def::GJo4tKkayA8::_BxO5dEHQPiztKUZ2Q14MQ` |
| Add a User to a Workspace | POST | `/workspaces/{{WORKSPACEID}}/users` | `conn_mod_def::GJo4tCPmYyg::-1SorpzgRNS4kCPBhpkH-A` |

### PrivateLocation

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Workspace to a Private Location | POST | `/private-locations/{{HARBORID}}/add-workspace` | `conn_mod_def::GJo4kDIKpfM::_jc7OfzgTnitJ3Qt5_Yt-A` |
| Create a Private Location | POST | `/private-locations` | `conn_mod_def::GJo4jnS_wNY::goAgUIkfSpimlPwhFfPKww` |

### PrivateLocationAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Private Location's Agents (Servers) | GET | `/private-locations/{{HARBORID}}/servers` | `conn_mod_def::GJo4kfg_uZo::1EwpftiaThe6wSsp2fzWWw` |
| Delete an Agent from a Private Location | DELETE | `/private-locations/{{HARBORID}}/servers/{{SHIPID}}` | `conn_mod_def::GJo4lUjov98::ZIx6TgSCRiC7jX0aQensgw` |

### SharedFolderFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Shared Folder’s Files | GET | `/folders/{{FOLDERID}}/files` | `conn_mod_def::GJo4m84MQHA::JeG0ijcYSXGGVw2uVxw8Dw` |
| Delete a Shared Folder File | POST | `/folders/{{FOLDERID}}/delete-file` | `conn_mod_def::GJo4nGAU0hU::q7uLUN-8RTyEDQWWTxpJvw` |

### WorkspaceManagers

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a Workspace's Managers | POST | `/workspaces/{{WORKSPACEID}}/delete-managers` | `conn_mod_def::GJo4tYdL5Yg::OOjlx6NjR_qOzQhJSfcUNA` |

### TestFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Test’s Files | GET | `/tests/{{TESTID}}/files` | `conn_mod_def::GJo4rh2vZpo::EMFSD7mPQ2CTz53d3eU6SQ` |

### ScheduleHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| List Schedule History | GET | `/schedules/history` | `conn_mod_def::GJo4qER5vKQ::-E8LNXleR7-vIK2SeaFP6A` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Users | GET | `/accounts/{{BLAZE_METER_ACCOUNT_ID}}/users` | `conn_mod_def::GJo4jDIoJyA::KmZXy81fQRCsFwj8TC_2Bw` |

### AccountUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Account User | PUT | `/users/{{userId}}` | `conn_mod_def::GJo4jLcFO40::C4bCPrCzSkqnobCdal1usw` |

### PrivateLocationAgentDockerCommand

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Private Location Agent Docker Command | POST | `/private-locations/{{HARBORID}}/ships/{{SHIPID}}/docker-command` | `conn_mod_def::GJo4j3iCozc::uRoW116XTnefZRAkUqNlsQ` |

### AccountUtilizationReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account’s Engine Utilization Report | GET | `/utilization-report` | `conn_mod_def::GJo4jSEdZ8Q::tHqXMGaaRyShqPb673benA` |

### TestFileValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate a Test File | POST | `/tests/{{TESTID}}/validate` | `conn_mod_def::GJo4r2gi60M::6jWnxR85TQmmJXdV3ZbuKA` |

### TestSuites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Test Suites (Multi-Tests) | GET | `/multi-tests` | `conn_mod_def::GJo4qsKmPC8::t-vH4yBpRtqEV2j4LEZiEg` |

### TestFileValidations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Test’s File Validations | GET | `/tests/{{TESTID}}/validations` | `conn_mod_def::GJo4r-Rj3Ig::DBFRyr5ARaWigWg5YRrcPg` |

### WorkspaceUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Workspace User | PUT | `/workspaces/{{WORKSPACEID}}/users/{{USERID}}` | `conn_mod_def::GJo4tQhDai8::gzfYOp9KRgqQ6Fm4CSkcDQ` |

### Invitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Add User to an Account (Create Invitations) | POST | `/invitations` | `conn_mod_def::GJo4iya557o::xJaJQ3UwRWW5LOhBMEII9g` |

### AccountInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Invitations | GET | `/invitations` | `conn_mod_def::GJo4i5w8M-A::qagOr9ioTViq01nxltGutA` |

### PrivateLocationAgentImageVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Private Location Agent’s Latest Image Versions | GET | `/private-locations/{{HARBORID}}/ships/{{SHIPID}}/versions` | `conn_mod_def::GJo4k4VR1mA::2IT219ACSY-60yMKSjMJJg` |

### TestAssetFile

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Test’s Asset File | POST | `/tests/{{TESTID}}/delete-file` | `conn_mod_def::GJo4rrXexzI::XNXfvBFYSXCbeWTZYEs0pw` |

### Functionalities

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Functionalities | GET | `/functionalities` | `conn_mod_def::GJo4jYodGHg::UJYx8iY3Qs6h2l_DSPPXhQ` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Customize an Account's Welcome Screen | PATCH | `/` | `conn_mod_def::GJo4jgZmcBw::4u1Kn2vuQaiibQj1raSCMA` |

### PrivateLocationsBrowsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Private Locations’ Supported Browsers | GET | `/private-locations/browsers` | `conn_mod_def::GJo4lCwIyps::dzyize47QjGqEbT2zXg1Dw` |

### MastersFunctionalGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Functional Summary Statistics for a Master’s Groups | GET | `/masters/{{MASTERID}}/reports/functional/groups` | `conn_mod_def::GJo4o4UKBdA::4bSzymrVSk6XhDbS5bEJ9w` |

### PrivateLocationWorkspace

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Private Location Workspace | DELETE | `/private-locations/{{HARBORID}}/workspaces/{{WORKSPACEID}}` | `conn_mod_def::GJo4lLAfOb4::643emBohSo2lBl7eoSSyKQ` |

### ApiFunctionalGroupReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API Functional Group Full Report for a Master | GET | `/masters/{{MASTERID}}/reports/functional/groups/{{GROUPID}}` | `conn_mod_def::GJo4pAxIku0::8sJU-a1tTj2ny7-FkpamNg` |

### TestSuiteMasterSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test Suite Master's Summary | GET | `/masters/{{MASTERID}}/test-suite-summary` | `conn_mod_def::GJo4pJROD-w::s8wRAOwrRRiIbrCdCGFjJQ` |

### SharedFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Shared Folder Details | GET | `/folders/{{FOLDERID}}` | `conn_mod_def::GJo4mcCxxWA::1gJZYNu-SMyr5cFEwI4WxA` |

### SharedFolder

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Shared Folder | PATCH | `/folders/{{FOLDERID}}` | `conn_mod_def::GJo4mjA5aFM::WOkC2Ai4RCiIH3GZIDiUCg` |

### SharedFolderFileUploadSignedUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shared Folder File Upload Signed URL | GET | `/folders/{{FOLDERID}}/s3/sign` | `conn_mod_def::GJo4m2HHVh4::GaqrU9kPSHqL5jTZATJwug` |

### MultiTestSuites

| Action | Method | Path | Action id |
|---|---|---|---|
| Start a Multi-Test Suite | POST | `/multi-tests/{{COLLECTIONID}}/start` | `conn_mod_def::GJo4pdBL6fI::AIGt_7bmR0-Vva6pyXDtlA` |

### Schedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Schedule | PATCH | `/schedules/{{SCHEDULEID}}` | `conn_mod_def::GJo4pqOAYfU::W58f4-8nQMW0zKXzL46tYA` |

### MastersPublicToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Master's Public Token | DELETE | `/masters/{{MASTERID}}/public-token` | `conn_mod_def::GJo4nxG-Auw::szfmF3-8TtuRe-WlEiI5hA` |

### SessionLogsReportFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Session’s Logs Report Files | GET | `/sessions/{{SESSIONID}}/reports/logs/data` | `conn_mod_def::GJo4oSiCHNQ::JTz7SSDbSM-5OsCIEEJE7w` |

### MastersXbtSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Master’s GUI Functional Summary Statistics (XBT Summary) | GET | `/masters/{{MASTERID}}/xbt-summary` | `conn_mod_def::GJo4ocWhKYo::a-OrwJdQTvujONUQOgedbA` |

### MastersGuiFunctionalScenariosSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Master’s GUI Functional Scenarios Summary | GET | `/masters/{{MASTERID}}/xbt-scenarios-summary` | `conn_mod_def::GJo4ol7asgw::h3XEJ_SVT4KjyFdQYqXPbQ` |

### GuiFunctionalSessionXbtReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a GUI Functional Session Full XBT Report | GET | `/sessions/{{SESSIONID}}/xbt-report` | `conn_mod_def::GJo4outVzTE::hk1OkyecT32x_K8xrVxS7g` |

## When a call fails

The error comes from BlazeMeter Functional, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/blaze-meter-functional

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
