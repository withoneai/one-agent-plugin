---
name: q2
description: Q2 offers an integrated digital banking platform enabling financial institutions to manage consumer, small-business, and commercial banking operations, including onboarding, payments, risk/fraud management, analytics, and embedded finance via a unified, scalable solution. Read and write Q2 data through One: users, adminusers, openbankingpayments, customers, achpayments, tactargets and more, 115 actions with real parameter documentation. Use whenever the user asks to look something up in Q2, create or update a record there, or build code against the Q2 API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: q2
  generated-from: one-knowledge-base
---

# Q2 through One

Q2 offers an integrated digital banking platform enabling financial institutions to manage consumer, small-business, and commercial banking operations, including onboarding, payments, risk/fraud management, analytics, and embedded finance via a unified, scalable solution.

One exposes Q2 through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `q2` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Q2 is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Q2 account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Add User (Enroll a User Under an Existing Customer) | POST | `/v2/AddUser` | `conn_mod_def::GJ6L8M7qudY::THIBkYwbQ4i46QE8VJVPmw` |
| Change a User’s Logon Name | PUT | `/v2/ChangeUserLogonName` | `conn_mod_def::GJ6L8dGozFI::fM7WZi_5TsKTSIsgAsuDIQ` |
| Change a User’s Role | PUT | `/v2/ChangeUserRole` | `conn_mod_def::GJ6L8cxHREQ::UGwSx0J8SWKuGKBv_ManUw` |
| Delete a User | DELETE | `/v2/DeleteUser/{{userId}}` | `conn_mod_def::GJ6L85EF_NA::LyNw1RScTSeXaCTy0HCKwQ` |
| Lookup a User | POST | `/v2/LookupUser` | `conn_mod_def::GJ6L-Z3WgV0::DSDCXlKhT2e1Lh7MriA5pQ` |
| Search for a User | POST | `/v2/SearchUser` | `conn_mod_def::GJ6L-i3SbdM::ZNLYb_pBRde7XmJF_S5DnA` |
| Unlock a User (by Logon Name) | POST | `/v2/UnlockUser/{{logonname}}` | `conn_mod_def::GJ6L-uYsykY::l_43oI2NRha22DCnpFmXNA` |

### AdminUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Admin User List | GET | `/v2/GetAdminUserList` | `conn_mod_def::GJ6L73dFT0s::okzCO56sTUaWrq7g2FJDyg` |
| Add Admin User | POST | `/v2/AddAdminUser` | `conn_mod_def::GJ6L7r0e8pA::d9zkYqsvTouN0fflzpTw6g` |
| Delete an Admin User | DELETE | `/v2/DeleteAdminUser/{{adminUserId}}` | `conn_mod_def::GJ6L7vqUyWw::Hb241SsvSGmMsp511BnyKg` |
| Disable an Admin User | POST | `/v2/DisableAdminUser` | `conn_mod_def::GJ6L74YxK0g::immK9dCKQ1CL7TZS9AJ_9Q` |
| Enable an Admin User | POST | `/v2/EnableAdminUser` | `conn_mod_def::GJ6L76-WLaU::Tr3vWUJgT1WmxaFkF-LAGQ` |
| Update an Admin User | PUT | `/v2/UpdateAdminUser` | `conn_mod_def::GJ6L8Eu4fgE::rjSiQLYiR-mLllAraqWAJQ` |

### OpenBankingPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup Payment Status (Beta) | POST | `/v2/OpenBanking/Payment/LookupPaymentStatus` | `conn_mod_def::GJ6L_TBkNMI::6KRgzvAtTVy8-RQWJjn2vQ` |
| Make a Domestic Wire Payment (Open Banking) | POST | `/v2/OpenBanking/Payment/MakeDomesticWire` | `conn_mod_def::GJ6L_e1xT6Q::m5IgE-wURNK0sQiKkH4hWA` |
| Make ACH Payment (Beta) | POST | `/v2/OpenBanking/Payment/MakeACHPayments` | `conn_mod_def::GJ6L_hiX74A::73tDVs8NSdCH3X4koQXQYw` |
| Make an International Wire Payment (Open Banking) | POST | `/v2/OpenBanking/Payment/MakeInternationalWire` | `conn_mod_def::GJ6L_e6797o::9LC4dt7zQ5a0HxaZELVehw` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Customer | DELETE | `/v2/DeleteCustomer/{{customerId}}` | `conn_mod_def::GJ6L8waqDcQ::E8xJgzyqQvm7w3KbTcr8XQ` |
| Lookup a Customer | POST | `/v2/LookupCustomer` | `conn_mod_def::GJ6L-Y6e_to::bkZicMDlRCWS_BURgXatVg` |
| Search Customers | POST | `/v2/SearchCustomer` | `conn_mod_def::GJ6L-jEWS_M::u6MuYxdXTAeFge6Yehl2sg` |
| Update Customer Info | PUT | `/v2/UpdateCustomerInfo` | `conn_mod_def::GJ6L-uOifq8::Ff-iqr6WR0OkHfkjrI7fMg` |

### AchPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Authorize an ACH Payment | GET | `/v2/ACH/AuthorizePayment/{{paymentid}}` | `conn_mod_def::GJ6L7fNKDTo::O0GiZ8A_TEKz5VbEeNKv4g` |
| Get an ACH Payment | GET | `/v2/ACH/GetPayment/{{paymentid}}` | `conn_mod_def::GJ6L7jSWSjg::YKp1BW9wRH-YQWMCsAvaQw` |
| Make ACH Payment | POST | `/v2/ACH/MakePayment` | `conn_mod_def::GJ6L7fS6GAY::pZ5TfJaqRQiqxszCmNya1Q` |

### TacTargets

| Action | Method | Path | Action id |
|---|---|---|---|
| List TAC Targets | GET | `/v2/TacTargets` | `conn_mod_def::GJ6L98lX8L8::coDbYgkxT0SnpwddAZ0-zQ` |
| Add TAC Target | POST | `/v2/AddTacTarget` | `conn_mod_def::GJ6L8Mw85pk::_JlS_5hRS6-QOvoDTcs3yw` |
| Delete a TAC Target | DELETE | `/v2/DeleteTacTarget` | `conn_mod_def::GJ6L8wmf_yg::AcI0rweWQ8WVYtGhe0mNPw` |

### CustomSdkExtensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Call a Custom SDK Extension (Custom Endpoint Passthrough) | POST | `/v2/Cust/{{extensionName}}` | `conn_mod_def::GJ6L8lGVHmk::FImrJrqlToK8mM_F0JHKrA` |
| Call a Custom SDK Extension (Passthrough) | PATCH | `/v2/Cust/{{extensionName}}` | `conn_mod_def::GJ6L8xCha9Y::43UquZbcSTawdWKgdw99dg` |
| Delete a Custom SDK Extension (Passthrough) | DELETE | `/v2/Cust/{{extensionName}}` | `conn_mod_def::GJ6L8wq4zf4::cDHyhicPQ_WLyGhRrKRF_Q` |

### Logons

| Action | Method | Path | Action id |
|---|---|---|---|
| Disable a User’s Logon | POST | `/v2/DisableLogon/{{logonname}}` | `conn_mod_def::GJ6L85YYfII::_B_GCRPCSmm2yZOYFICjWg` |
| Enable a User’s Logon | POST | `/v2/EnableLogon/{{logonname}}` | `conn_mod_def::GJ6L88MsUw4::yyDwh7z-RhGoVbXKbllgbw` |

### ExchangeRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Exchange Rates | GET | `/v2/GetExchangeRates` | `conn_mod_def::GJ6L9iCwldY::j7vlZ72fTECN8G7QfQsQiA` |
| Import Exchange Rate | POST | `/v2/ImportExchangeRate` | `conn_mod_def::GJ6L-WltZzU::FqS-OmM5Te6sbSMZO7j2Iw` |

### PolicyData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Policy Data for an Entity | GET | `/v2/GetPolicyData` | `conn_mod_def::GJ6L9x078kU::OexS9PGlQwmfWBQdr4xtoQ` |
| Update Policy Data | PUT | `/v2/UpdatePolicyData` | `conn_mod_def::GJ6L-2gNamU::jSZ9bVDsRMygSOfnZJSpvQ` |

### InstantPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Credit Transfer (Instant Payments) | POST | `/v2/InstantPayments/CreateCreditTransfer` | `conn_mod_def::GJ6L_GGRMRY::epdD_cxPQCuGK-xNkGRUoQ` |
| Create Payment Request | POST | `/v2/InstantPayments/CreatePaymentRequest` | `conn_mod_def::GJ6L_ACSu84::0UwzNpfaQfaOn_MC6ijQQg` |

### TreasuryFulfillment

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Pre-Draft Service Request Status | GET | `/v2/TreasuryFulfillment/CreateServiceRequest` | `conn_mod_def::GJ6L_p-sWoY::5QnUp9iwRZ-aOSrT-HZGJQ` |
| Create Treasury Fulfillment Service Request | POST | `/v2/TreasuryFulfillment/CreateServiceRequest` | `conn_mod_def::GJ6L_p-1KQM::KHtGKqNqQnCJkUdef0H_3g` |

### AchRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get ACH Recipients | GET | `/v2/ACH/GetRecipients` | `conn_mod_def::GJ6L7ewz6SM::3gjFc1iLTVGI4CYA7JO8ww` |
| Create ACH Recipient | POST | `/v2/ACH/CreateRecipient/` | `conn_mod_def::GJ6L7erQ4G0::JDSwZeoWR5Wao4fW5aFsFg` |

### MicroDeposits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Micro Deposits for a User | GET | `/v2/MicroDeposit/Get` | `conn_mod_def::GJ6L9lpVOOg::-8cI1MUgQk-1FF8fl8pBAw` |
| Create Micro Deposits | POST | `/v2/MicroDeposit/Create` | `conn_mod_def::GJ6L8lT_jeg::BrF0K6nGQvmvN2yZEaXckw` |

### OpenBankingPayment

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup Account History (Open Banking) | POST | `/v2/OpenBanking/Payment/LookupAccountHistory` | `conn_mod_def::GJ6L_OxLs8k::Yt8Il44HQFyhMFHxFa4hlA` |
| Lookup an Account Summary (Open Banking Payment) | POST | `/v2/OpenBanking/Payment/LookupAccountSummary` | `conn_mod_def::GJ6L_OiiEvg::vH7MiT4ERLqmHbK7fBZ-qw` |

### RestrictedEntitlementMode

| Action | Method | Path | Action id |
|---|---|---|---|
| Disable Restricted Entitlement Mode (Customer Level) | POST | `/v2/DisableRestrictedEntitlementMode` | `conn_mod_def::GJ6L86EpdK0::rSkdv52kSZephW5SIg6vkA` |
| Enable Restricted Entitlement Mode (Customer Level) | POST | `/v2/EnableRestrictedEntitlementMode` | `conn_mod_def::GJ6L86OZhqI::Wl05zBq1RHS4GUvXXsqm6Q` |

### BalanceAlerts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Balance Alerts | GET | `/v2/GetAllAlerts/Balance` | `conn_mod_def::GJ6L9V7gafU::zdfWm5DTRwO1zFJY3EIxxw` |
| Generate Balance Alerts | POST | `/v2/GenerateBalanceAlerts` | `conn_mod_def::GJ6L9GvIt0I::PeJAv5TvSv-tb6dn7ShmiA` |

### UserRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer’s User Roles | GET | `/v2/GetUserRoles/{{customerId}}` | `conn_mod_def::GJ6L-HNKo4I::aZ595XFbS5i-1RDajn8c1w` |
| Add a User Role (for a Customer) | POST | `/v2/AddUserRole` | `conn_mod_def::GJ6L8NP-pyA::2Kb6RGBzRVKE1g4EnxXCeg` |

### TransactionAlerts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Transaction Alerts (Transaction History) | GET | `/v2/GetAllAlerts/Transaction` | `conn_mod_def::GJ6L9_cgyX8::zGLDupLkSJmLtqQ59e7rvg` |
| Generate Transaction Alerts | POST | `/v2/GenerateTransactionAlerts` | `conn_mod_def::GJ6L9FJivKk::kn7sUx14SxG1W_nfI-p3bg` |

### Audiences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audience's User Count | GET | `/v2/SMART/Audiences/{{audienceId}}/count` | `conn_mod_def::GJ6L_fsT5dg::s1RR4WeOT_qGUPI5CiwjKg` |
| Get an Audience’s Users | GET | `/v2/SMART/Audiences/{{audienceId}}/users` | `conn_mod_def::GJ6L_d9vsvU::bkrrAmc-SV2Fi2kIcKi4nA` |

### AccountAssociations

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Account Association (Create a User’s Account Association) | POST | `/v2/AddAccountAssociation` | `conn_mod_def::GJ6L8FIYBpI::cA3HtkphT7-08fbtyAEIGA` |

### Subsidiaries

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Subsidiary (for a Company/Customer) | POST | `/v2/CreateSubsidiary` | `conn_mod_def::GJ6L8lDceaw::QR2l0AfFSEScldpkL-5spQ` |

### Enrollment

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Enrollment (Customer, User, and Logon) | POST | `/v2/Enrollment` | `conn_mod_def::GJ6L9EQzwWk::e4eEZysOSl2NVjtwIgdR2w` |

### AccountDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Details | GET | `/v2/GetAccountDetails` | `conn_mod_def::GJ6L9FzMw-Y::T8rPU42HQ-a3jEsWKIM4IQ` |

### AccountHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account History for a Host Account | GET | `/v2/GetAccountHistory/{{hostAccountId}}` | `conn_mod_def::GJ6L9YfWT0I::EbT7ZjoTQIquosEwMe4Kfg` |

### CurrencyCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Currency Codes | GET | `/v2/GetCurrencyCodes` | `conn_mod_def::GJ6L9Wiwrbo::ziN30kcXR4ePpZNTfmBMbA` |

### AlertAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Alert Accounts | GET | `/v2/GetAlertAccounts` | `conn_mod_def::GJ6L9ZWzyfE::scRY_7MgTxyHBFGwB1I61w` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account List | GET | `/v2/GetAccountList` | `conn_mod_def::GJ6L9ai7v4w::WkAPDnjSRni3or1CaBbgOw` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Products | GET | `/v2/GetProducts` | `conn_mod_def::GJ6L9zWLNRY::ZYYUM211QyeYCmrusSrblw` |

### UserLoginInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Login Info | GET | `/v2/GetUserLoginInfo` | `conn_mod_def::GJ6L97LyLwM::lJUR3zlUTdyaOSi2u1dw0g` |

### StopPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Stop Payment | POST | `/v2/StopPayment` | `conn_mod_def::GJ6L-ta6ljs::guKjdMvDTXGw9vnYNCpEIw` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Transaction Status | PUT | `/v2/UpdateTransactionStatus` | `conn_mod_def::GJ6L-2BG7h4::PT_ch76_Tmio255ZtjroVw` |

### DemographicInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Demographic Info | PUT | `/v2/UpdateDemographicInfo` | `conn_mod_def::GJ6L-234jdI::jIEIs8ZzTSiaTzBh6C4WxA` |

### MicroDeposit

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Micro Deposits for a User | POST | `/v2/MicroDeposit/Verify` | `conn_mod_def::GJ6L_BbNY9A::AlaoIt_zTBWxdFD5tDWIkA` |

### OpenBankingAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup a Customer’s Accounts (Beta) | POST | `/v2/OpenBanking/Payment/LookupAccounts` | `conn_mod_def::GJ6L_W2KO2A::PxAM1lcIQ6eHZUdXeACIdg` |

### Authenticate

| Action | Method | Path | Action id |
|---|---|---|---|
| Authenticate a User (Validate LoginName/Password) | POST | `/v2/Authenticate` | `conn_mod_def::GJ6MK1PoFY8::HuaeZObbT9Cd2NeNcwJRvw` |

### SmartTraits

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a Trait for Multiple Users (Batch) | POST | `/v2/SMART/Traits/{{traitId}}/batch` | `conn_mod_def::GJ6L_rqTfW4::gQXGkJJXSUSlniWUNfT_MQ` |

### AdminNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Admin Note | POST | `/v2/AddAdminNote` | `conn_mod_def::GJ6L7rh1f-4::0gUujLWAR4-KeKTLLEVifw` |

### BrowserRegistrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Flush Browser Registrations | POST | `/v2/FlushBrowserRegistrations` | `conn_mod_def::GJ6L9OUToO4::RI2Xr9B2QRifD2W8w83Nvg` |

### SuspectTransactionsGt

| Action | Method | Path | Action id |
|---|---|---|---|
| Decide on a Suspect Transaction (GT) | PUT | `/v2/DecideSuspectGT` | `conn_mod_def::GJ6L7rzV5dA::eLX8-LS5QZyY4RbZghocYw` |

### SecureMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Secure Message | POST | `/v2/SendSecureMessage` | `conn_mod_def::GJ6L-uY7oak::5yRBNe2jT2KZBD3lGHuRTg` |

### Oauth2Tokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an OAuth2 Token (Client Credentials) | POST | `/v2/oauth2/token` | `conn_mod_def::GJ6L_AquI90::KOAmtw6TSemHkl__0Af-NQ` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Notification | POST | `/v2/SendNotification` | `conn_mod_def::GJ6L-lHaYAA::AUXMCPs_SfS0BJE8VdqhFQ` |

### PinionMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Pinion Message | POST | `/v2/SendPinionMessage` | `conn_mod_def::GJ6L-l2upKE::38TOzbjITkqHODxHY-pQgA` |

### VerisignTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate a Verisign Token for a User | POST | `/v2/ValidateToken` | `conn_mod_def::GJ6L_BDnUB8::GqjrcMlURg2-G0ml4hF0DA` |

### PasswordPolicy

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Password Policy (Online Banking) | GET | `/v2/GetPasswordPolicy` | `conn_mod_def::GJ6L9uqu1t4::tVgget08QFarCqKmBtPpOg` |

### CsrAssist

| Action | Method | Path | Action id |
|---|---|---|---|
| Initiate a CSR Assist Session | POST | `/v2/CSRAssist` | `conn_mod_def::GJ6L8lXP8Mc::lbJFQX2ORXSdCwNRutJdKw` |

### CorporateAccess

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Corporate Access (by Login Name) | PUT | `/v2/UpdateCorporateAccess` | `conn_mod_def::GJ6L-uSek7g::_Dss9Jk1QMiSIsThkpnvWg` |

### SsoIdentifiers

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an End User’s SSO Identifier | PUT | `/v2/UpdateSSOIdentifier` | `conn_mod_def::GJ6L-3vPQmY::kVjedUdzStqh-3pL_I2E3Q` |

### GroupMover

| Action | Method | Path | Action id |
|---|---|---|---|
| Move Customers Between Groups (Group Mover) | PUT | `/v2/GroupMover` | `conn_mod_def::GJ6L-ItGcSI::WI5QKA0HRumqDW1l0fqUVA` |

### UserInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Update User Info | PUT | `/v2/UpdateUserInfo` | `conn_mod_def::GJ6L-1_pFwM::UUAo5V_4Q0eNE4rfhKKSTQ` |

### UserLogons

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a User Logon (Under an Existing User) | POST | `/v2/AddUserLogon` | `conn_mod_def::GJ6L8RwcppQ::u1YnwwljR8S5Jeq1-j4mwQ` |

### SmartAudiences

| Action | Method | Path | Action id |
|---|---|---|---|
| List SMART Audiences | GET | `/v2/SMART/Audiences` | `conn_mod_def::GJ6L_onUIyg::N_LNJAgJScKlZbETrJRKQA` |

### Traits

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a User’s Traits | POST | `/v2/SMART/Traits/users/{{userId}}` | `conn_mod_def::GJ6L_qMFakw::KjBFZGHYTuyMFnnsEg08lA` |

This lists 90 of 115 actions. For anything not here, call `search_one_platform_actions` with platform `q2`. The full catalog is at https://www.withone.ai/knowledge/q2.

## When a call fails

The error comes from Q2, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/q2

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
