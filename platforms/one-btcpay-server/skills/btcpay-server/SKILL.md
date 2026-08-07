---
name: btcpay-server
description: BTCPay Server is an open-source cryptocurrency payment platform that enables merchants to accept Bitcoin and other digital asset payments without intermediaries, providing self-hosted invoicing, wallet integration, point-of-sale tools, and APIs for managing payments, stores, and checkout workflows. Read and write BTCPay Server data through One: users, invoices, stores, apps, pullpayments, payouts and more, 390 actions with real parameter documentation. Use whenever the user asks to look something up in BTCPay Server, create or update a record there, or build code against the BTCPay Server API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: btcpay-server
  generated-from: one-knowledge-base
---

# BTCPay Server through One

BTCPay Server is an open-source cryptocurrency payment platform that enables merchants to accept Bitcoin and other digital asset payments without intermediaries, providing self-hosted invoicing, wallet integration, point-of-sale tools, and APIs for managing payments, stores, and checkout workflows.

One exposes BTCPay Server through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `btcpay-server` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BTCPay Server is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BTCPay Server account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Users | GET | `/api/v1/users` | `conn_mod_def::GLNXZRsTpsA::j3FxkpXLTMmy-AlLGx1t9Q` |
| Get Current User Information | GET | `/api/v1/users/me` | `conn_mod_def::GLNXZZbyzXA::4SblnJS4ROSkzMLnTfXjPw` |
| Get Current User Information | GET | `/api/v1/users/me` | `conn_mod_def::GLNl3oKf4Xg::vs4zdwx0QKK17JGSANQzzg` |
| Get User by ID or Email | GET | `/api/v1/users/{{idOrEmail}}` | `conn_mod_def::GLNXZZjGl1g::thEQq_e5RTqXRvMUnNDKRw` |
| Get User by ID or Email | GET | `/api/v1/users/{{idOrEmail}}` | `conn_mod_def::GLNl3ozNGvg::SdeDePqRQoureUo8Xa5UeA` |
| List Users | GET | `/api/v1/users` | `conn_mod_def::GLNl3b9K-5A::tJ-EmcICT4amaTLyhdJclQ` |
| Create User | POST | `/api/v1/users` | `conn_mod_def::GLNXZRal3MA::c4g6QIxARnm6xbkalZgtlA` |
| Create User | POST | `/api/v1/users` | `conn_mod_def::GLNl3fUEUwg::LfM9nydUQD6HhnxVkEaReQ` |
| Delete a User | DELETE | `/api/v1/users/{{idOrEmail}}` | `conn_mod_def::GLNXZRYJjSA::c01ySHP4QV20QU-l1mHfUg` |
| Delete a User | DELETE | `/api/v1/users/{{idOrEmail}}` | `conn_mod_def::GLNl3cPLMGg::PCISZP_wS7mRq3N0ERACWw` |
| Delete Current User Profile | DELETE | `/api/v1/users/me` | `conn_mod_def::GLNXZRaB_Sg::61ar15lhT1KhesL1cktD5w` |
| Delete Current User Profile | DELETE | `/api/v1/users/me` | `conn_mod_def::GLNl3dMx_8g::RNvFLA1FRParJ9W_3Gk-6w` |

11 more Users actions are available through search.

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice for a Store | GET | `/api/v1/stores/{{storeId}}/invoices/{{invoiceId}}` | `conn_mod_def::GLNXRFVN8ZA::-54SetHxRWu3_Ya7Iv_tXA` |
| Get Invoice for a Store | GET | `/api/v1/stores/{{storeId}}/invoices/{{invoiceId}}` | `conn_mod_def::GLNlvBSPhUg::wON8dfvJR7e5e5q-zEgePA` |
| Get Invoice Refund Trigger Data for a Store Invoice Payment Method | GET | `/api/v1/stores/{{storeId}}/invoices/{{invoiceId}}/refund/{{paymentMethodId}}` | `conn_mod_def::GLNXRO3sPag::tr1HBtmeTEKRHx8tgZwAMw` |
| Get Invoices for a Store | GET | `/api/v1/stores/{{storeId}}/invoices` | `conn_mod_def::GLNXRP4XvJg::s9CyzHzJQn-lVXzdenO4tg` |
| Get Invoices for a Store | GET | `/api/v1/stores/{{storeId}}/invoices` | `conn_mod_def::GLNlvQ1rYDg::vmdWYrkxQcqn-f9BIt5gzA` |
| Invoice Checkout | GET | `/i/{{invoiceId}}` | `conn_mod_def::GLNlxFjiwag::3zx31dMYR-WWJS3yuS0P4A` |
| Activate Payment Method for a Store Invoice | POST | `/api/v1/stores/{{storeId}}/invoices/{{invoiceId}}/payment-methods/{{paymentMethodId}}/activate` | `conn_mod_def::GLNlvBeBr7A::1RAOdEwBQlKYa7ViKEeW_A` |
| Archive an Invoice for a Store | DELETE | `/api/v1/stores/{{storeId}}/invoices/{{invoiceId}}` | `conn_mod_def::GLNXRCfUS9g::UHLAgmwfTB6NGT1KiAMk2g` |
| Archive an Invoice for a Store | DELETE | `/api/v1/stores/{{storeId}}/invoices/{{invoiceId}}` | `conn_mod_def::GLNlvBS2EHg::yDlQc8RqSNeTvrxpNbduiQ` |
| Create an Invoice for a Store | POST | `/api/v1/stores/{{storeId}}/invoices` | `conn_mod_def::GLNlvD3C8eg::_Al63BtaTmOS2BqFTGyRLg` |
| Create Invoice for a Store | POST | `/api/v1/stores/{{storeId}}/invoices` | `conn_mod_def::GLNXRD8tcEg::6loGt88DQCmsVAX6LO-eJA` |
| Mark Invoice Status for a Store Invoice | POST | `/api/v1/stores/{{storeId}}/invoices/{{invoiceId}}/status` | `conn_mod_def::GLNXRSlEfIA::WCEl9uxjQ-KuGLV4kjpfDw` |

6 more Invoices actions are available through search.

### Stores

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Store | GET | `/api/v1/stores/{{storeId}}` | `conn_mod_def::GLNXWGBZqGg::SKgFWDhUT9ercxLWBysTdg` |
| Get Store | GET | `/api/v1/stores/{{storeId}}` | `conn_mod_def::GLNl0nyKutA::jOIevCcnQgquU1DVML_nKQ` |
| Get Stores | GET | `/api/v1/stores` | `conn_mod_def::GLNXWUE4BLA::2tbHI7NZSl6DBiDmo2sJ5Q` |
| Get Stores | GET | `/api/v1/stores` | `conn_mod_def::GLNl06u1GLg::IfPiQoc6RBSANpJUa5OsCg` |
| Create Store | POST | `/api/v1/stores` | `conn_mod_def::GLNXWGfegiA::tC6xIytqR_ibEIt_qHruGA` |
| Create Store | POST | `/api/v1/stores` | `conn_mod_def::GLNl0lpzKQA::JWqr91s5Qnyob3wpL8sJqA` |
| Delete Store Logo | DELETE | `/api/v1/stores/{{storeId}}/logo` | `conn_mod_def::GLNXWGBVFIg::E-GMOZoeQcenbzfxtE9Iaw` |
| Delete Store Logo | DELETE | `/api/v1/stores/{{storeId}}/logo` | `conn_mod_def::GLNl0wu5pvg::D7jQuGK5TZOrRqnutE76mg` |
| Remove Store | DELETE | `/api/v1/stores/{{storeId}}` | `conn_mod_def::GLNXWPMpMyA::uCZ6WH00S3WxiFNI1PiEqg` |
| Remove Store | DELETE | `/api/v1/stores/{{storeId}}` | `conn_mod_def::GLNl047VkkA::BFK5_ALGSSiUUeG6RrHxAA` |
| Send Email for a Store | POST | `/api/v1/stores/{{storeId}}/email/send` | `conn_mod_def::GLNl1GkNBTg::u9ScNCnwQAKoRdwXmMsQTw` |
| Send Email Using a Store | POST | `/api/v1/stores/{{storeId}}/email/send` | `conn_mod_def::GLNXWsoU6Ng::gUzVlwGRRJ6eg6UIA9---g` |

4 more Stores actions are available through search.

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Apps | GET | `/api/v1/apps` | `conn_mod_def::GLNXQH0Tdwg::Ef9AfueIS9aJn39EDmjmjw` |
| Get App Data | GET | `/api/v1/apps/{{appId}}` | `conn_mod_def::GLNluhOPeNA::ztL62jfyQMK3j6M8GH-Nkg` |
| Get App Using Api v1 Apps | GET | `/api/v1/apps/{{appId}}` | `conn_mod_def::GLNXQIA2qDg::EzCidHlYRXiUvC1btJrJCA` |
| List Apps | GET | `/api/v1/apps` | `conn_mod_def::GLNlug9l_xg::8hTmq6juTmyHmjuTtzj20A` |
| List Apps for a Store | GET | `/api/v1/stores/{{storeId}}/apps` | `conn_mod_def::GLNXQH1Fujg::_R9cwNOvQ-6MjTSBADwluw` |
| List Apps for a Store | GET | `/api/v1/stores/{{storeId}}/apps` | `conn_mod_def::GLNluiZLuKg::gpdT4HnhRH-zCGLUR4KqcQ` |
| Delete an App Item Image | DELETE | `/api/v1/apps/{{appId}}/image/{{fileId}}` | `conn_mod_def::GLNXP68DAiA::JcZO-oSAT4egAfTXX2VBOQ` |
| Delete an App Item Image | DELETE | `/api/v1/apps/{{appId}}/image/{{fileId}}` | `conn_mod_def::GLNluX0_EHA::JTSQxTo0TfygZLpqixv4rA` |
| Delete App | DELETE | `/api/v1/apps/{{appId}}` | `conn_mod_def::GLNXP7eb84g::Ibxm3wsARvCyFA1JZrT-Yg` |
| Delete App | DELETE | `/api/v1/apps/{{appId}}` | `conn_mod_def::GLNluXyPa5g::zjBhLfRcQ4CnQ1juf8unZA` |
| Update a Point of Sale App | PUT | `/api/v1/apps/pos/{{appId}}` | `conn_mod_def::GLNlusWAb2g::nK1UZvPtSO-wNGXQm5GpkA` |
| Upload Image for an App Item | POST | `/api/v1/apps/{{appId}}/image` | `conn_mod_def::GLNXQWTbhkg::CdJpNtnYTmCHT-xSGlxfow` |

1 more Apps actions are available through search.

### PullPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pull Payment | GET | `/api/v1/pull-payments/{{pullPaymentId}}` | `conn_mod_def::GLNXTl0a5Hg::E0x9lxBQSiGTHEq9wEhVVg` |
| Get a Pull Payment | GET | `/api/v1/pull-payments/{{pullPaymentId}}` | `conn_mod_def::GLNlygilpxg::iAtJ6DhHSPatGPexi8VbGw` |
| Get LNURL Details for a Pull Payment | GET | `/api/v1/pull-payments/{{pullPaymentId}}/lnurl` | `conn_mod_def::GLNXTmJ3RJg::zcpE3c8eTNKajLhdaRTwPQ` |
| Get LNURL Details for a Pull Payment | GET | `/api/v1/pull-payments/{{pullPaymentId}}/lnurl` | `conn_mod_def::GLNlyhZk0Vg::irGiC-fcQOaaWd4QtFd-pw` |
| List a Store's Pull Payments | GET | `/api/v1/stores/{{storeId}}/pull-payments` | `conn_mod_def::GLNXTdXiKag::DUjDo0qmQmqXOBhm5xu5zg` |
| List a Store's Pull Payments | GET | `/api/v1/stores/{{storeId}}/pull-payments` | `conn_mod_def::GLNlyW_On5A::-kzKLBlESnCfyED0FH9jVg` |
| Archive a Store Pull Payment | DELETE | `/api/v1/stores/{{storeId}}/pull-payments/{{pullPaymentId}}` | `conn_mod_def::GLNXTRvcLxg::SzqeldIlTcqhx9AwJXK2GQ` |
| Archive a Store Pull Payment | DELETE | `/api/v1/stores/{{storeId}}/pull-payments/{{pullPaymentId}}` | `conn_mod_def::GLNlyN3M2KA::_xE_6495THuwQadDEovyGQ` |
| Create Pull Payment for a Store | POST | `/api/v1/stores/{{storeId}}/pull-payments` | `conn_mod_def::GLNXTapX2KA::sqV210tBQ9KROg9MUFoFjA` |
| Create Pull Payments Using API v1 Stores | POST | `/api/v1/stores/{{storeId}}/pull-payments` | `conn_mod_def::GLNlyX4TfGA::esNCDtaqRD2r7k7Su9iIvw` |
| Link a Boltcard to a Pull Payment | POST | `/api/v1/pull-payments/{{pullPaymentId}}/boltcards` | `conn_mod_def::GLNlyjztyvA::OXUh26iZSC-H_5bntd7Paw` |
| Link Boltcard to a Pull Payment | POST | `/api/v1/pull-payments/{{pullPaymentId}}/boltcards` | `conn_mod_def::GLNXTmXgrlg::VoFanoMMSXqpTTrwfkaGLA` |

### Payouts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Payouts for a Pull Payment | GET | `/api/v1/pull-payments/{{pullPaymentId}}/payouts` | `conn_mod_def::GLNXTbtBBig::ZK7yvM_uQPS52NHWFjbvpg` |
| Get Payouts for a Pull Payment | GET | `/api/v1/pull-payments/{{pullPaymentId}}/payouts` | `conn_mod_def::GLNlyYaX85g::-O1yuirzRTWfm1L6tDnBZw` |
| Approve a Store Payout | POST | `/api/v1/stores/{{storeId}}/payouts/{{payoutId}}` | `conn_mod_def::GLNXXsQGL8A::ZbAGMvz4R-WE18PwtvFc1g` |
| Approve a Store Payout | POST | `/api/v1/stores/{{storeId}}/payouts/{{payoutId}}` | `conn_mod_def::GLNl2PB10AA::YgTz5AFoQMS-_HrhzFDkow` |
| Cancel a Store Payout | DELETE | `/api/v1/stores/{{storeId}}/payouts/{{payoutId}}` | `conn_mod_def::GLNXXtQh56A::uhcf8gWgQ1O6Is5pDZfXFg` |
| Cancel Payout for a Store | DELETE | `/api/v1/stores/{{storeId}}/payouts/{{payoutId}}` | `conn_mod_def::GLNl2QLjtUA::I0pvZcB4Q5ucVSnqjmH8_w` |
| Create a Payout for a Pull Payment | POST | `/api/v1/pull-payments/{{pullPaymentId}}/payouts` | `conn_mod_def::GLNXTa1LXrA::Xf__9LhSQq-3jP737pi2xg` |
| Create a Payout for a Store | POST | `/api/v1/stores/{{storeId}}/payouts` | `conn_mod_def::GLNXXytW7qg::wWM_uqLNQ7eAZcHYBGjL1w` |
| Create Payout for a Store | POST | `/api/v1/stores/{{storeId}}/payouts` | `conn_mod_def::GLNl2QZ8j4g::6emXsYd7TV6bT4VDsHobzA` |
| Mark a Store Payout | POST | `/api/v1/stores/{{storeId}}/payouts/{{payoutId}}/mark` | `conn_mod_def::GLNl2a-WUzg::xu_qCj9PQP6lueDa1IBCqw` |
| Mark Paid for a Store Payout | POST | `/api/v1/stores/{{storeId}}/payouts/{{payoutId}}/mark-paid` | `conn_mod_def::GLNl2a7DQ_g::jfPn-JotS1SZ6I2Lx1Z8aw` |
| Mark Payout for a Store | POST | `/api/v1/stores/{{storeId}}/payouts/{{payoutId}}/mark` | `conn_mod_def::GLNXX66DXIA::Iths0dRJT0-Aq6kQOqimLA` |

### PaymentRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Payment Request for a Store | GET | `/api/v1/stores/{{storeId}}/payment-requests/{{paymentRequestId}}` | `conn_mod_def::GLNXTR5NrBg::H9HZQcDERZqLJEVPKhJ1FA` |
| Get a Store Payment Request | GET | `/api/v1/stores/{{storeId}}/payment-requests/{{paymentRequestId}}` | `conn_mod_def::GLNlyNgGPTA::mmJZn8x-Sse44Wy01IBYGw` |
| List a Store's Payment Requests | GET | `/api/v1/stores/{{storeId}}/payment-requests` | `conn_mod_def::GLNXTRcYF1g::XJEmC9tpS8qiyagpKi3h2w` |
| List a Store's Payment Requests | GET | `/api/v1/stores/{{storeId}}/payment-requests` | `conn_mod_def::GLNlyNzsY7A::BcbE5p0SQoul7SuA5At_PA` |
| Archive a Store Payment Request | DELETE | `/api/v1/stores/{{storeId}}/payment-requests/{{paymentRequestId}}` | `conn_mod_def::GLNXTDSjX7g::Uwt6hNVtQ5Ok3_IFD75cuQ` |
| Archive a Store Payment Request | DELETE | `/api/v1/stores/{{storeId}}/payment-requests/{{paymentRequestId}}` | `conn_mod_def::GLNlyBgBNfg::l_DDjTNTSi-puCYJCPp7SQ` |
| Create Payment Request for a Store | POST | `/api/v1/stores/{{storeId}}/payment-requests` | `conn_mod_def::GLNXTI9lw6A::GU0CJEEnSNGWMfMcqPcWMg` |
| Create Payment Requests Using Stores | POST | `/api/v1/stores/{{storeId}}/payment-requests` | `conn_mod_def::GLNlyD5njGA::Ia9VJPdlRp-AeeBlI1ZO-g` |
| Pay a Payment Request | POST | `/api/v1/stores/{{storeId}}/payment-requests/{{paymentRequestId}}/pay` | `conn_mod_def::GLNXTDhys1A::NVjEV79jQ6KMgbL40ReiXw` |
| Pay a Payment Request | POST | `/api/v1/stores/{{storeId}}/payment-requests/{{paymentRequestId}}/pay` | `conn_mod_def::GLNlyCu8xTA::zBlDijwHT72I6-mpvyuZvA` |
| Update a Payment Request | PUT | `/api/v1/stores/{{storeId}}/payment-requests/{{paymentRequestId}}` | `conn_mod_def::GLNXTQ04RkA::qGsGRqLFTNqTgtQDv8Cgjw` |
| Update a Payment Request | PUT | `/api/v1/stores/{{storeId}}/payment-requests/{{paymentRequestId}}` | `conn_mod_def::GLNlyNFEJtg::SKhMbRjORzeLs3AzRGNO2w` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Authorize User API Key | GET | `/api-keys/authorize` | `conn_mod_def::GLNXQp72jPA::yYGmigbASJeyRSoUK9xLYA` |
| Authorize User API Key | GET | `/api-keys/authorize` | `conn_mod_def::GLNlu1Twxag::vnKH1MhFQ8ehBz1bIwIJ7Q` |
| Get Current API Key Information | GET | `/api/v1/api-keys/current` | `conn_mod_def::GLNXPx8tFBA::qwet5hLGRmGtctMpyxxLHg` |
| Get Current API Key Information | GET | `/api/v1/api-keys/current` | `conn_mod_def::GLNluLJAsdA::yeob5Bl5T9-6aAqk5d3oog` |
| Create a New API Key | POST | `/api/v1/api-keys` | `conn_mod_def::GLNluKdw6wg::X7RefjkBR7ORgYkYm7xbTw` |
| Create an API Key | POST | `/api/v1/api-keys` | `conn_mod_def::GLNXPvx0d7A::Li830IaCRBGbRWSyeYjrYw` |

4 more ApiKeys actions are available through search.

This lists 90 of 390 actions. For anything not here, call `search_one_platform_actions` with platform `btcpay-server`. The full catalog is at https://www.withone.ai/knowledge/btcpay-server.

## When a call fails

The error comes from BTCPay Server, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/btcpay-server

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
