---
name: gift-up
description: Gift Up! is a gift card sales platform that enables businesses to sell branded digital and physical gift cards online, handling checkout, payment, delivery, scheduling, and multi-currency support so merchants can offer gift certificates through their websites and social channels. Read and write Gift Up data through One: giftcards, orders, items, users, groups, giftcardartwork and more, 55 actions with real parameter documentation. Use whenever the user asks to look something up in Gift Up, create or update a record there, or build code against the Gift Up API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gift-up
  generated-from: one-knowledge-base
---

# Gift Up through One

Gift Up! is a gift card sales platform that enables businesses to sell branded digital and physical gift cards online, handling checkout, payment, delivery, scheduling, and multi-currency support so merchants can offer gift certificates through their websites and social channels.

One exposes Gift Up through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gift-up` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Gift Up is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Gift Up account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### GiftCards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Gift Cards | GET | `/gift-cards` | `conn_mod_def::GMk2TKPKKSo::fQHRh0vRT7u58-Wj37DaNg` |
| Retrieve a Gift Card by Code | GET | `/gift-cards/{{code}}` | `conn_mod_def::GMk2TPenhe8::sku128JVQRqi7T-PRcGekQ` |
| Reactivate a Gift Card | POST | `/gift-cards/{{code}}/reactivate` | `conn_mod_def::GMk2TJHoFaY::CC89B-sQTSuIbBbtBXAZTw` |
| Redeem a Gift Card | POST | `/gift-cards/{{code}}/redeem` | `conn_mod_def::GMk2TKJzzxA::FyAMeX15RyifEU9PkDK3YQ` |
| Redeem a Gift Card in Full | POST | `/gift-cards/{{code}}/redeem-in-full` | `conn_mod_def::GMk2TZ197DQ::fnl1j8OhSDaTOuVi2_wrMg` |
| Top Up a Gift Card | POST | `/gift-cards/{{code}}/top-up` | `conn_mod_def::GMk2TYIxjOw::OW-kFF0TRtqrHo_BePCJEA` |
| Transfer Balances Between Gift Cards | POST | `/gift-cards/transfer-balances` | `conn_mod_def::GMk2TZANBbI::IQJ5--m6QcC41u-hbryTKQ` |
| Undo Redemption for a Gift Card | POST | `/gift-cards/{{code}}/undo-redemption` | `conn_mod_def::GMk2TZwtlU8::o3_a60G0RDyvrTx2vQjr2Q` |
| Update a Gift Card | PATCH | `/gift-cards/{{code}}` | `conn_mod_def::GMk2TajM4TM::7DLj61mpSnK_Eueym2kaEA` |
| Void a Gift Card | POST | `/gift-cards/{{code}}/void` | `conn_mod_def::GMk2TkKr5ag::1psJpaJdQWW9rVyuiDfTgg` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Order by ID | GET | `/orders/{{id}}` | `conn_mod_def::GMk2UDAYXDw::i3nreVbFR26x-ZsseJKBmg` |
| List Orders | GET | `/orders` | `conn_mod_def::GMk2UDCuvNU::V_4T8WSkQnC7Ubkabghmxg` |
| Add a Note to an Order | POST | `/orders/{{id}}/notes` | `conn_mod_def::GMk2T4QIZQU::Tj9yBMV9SZ28dBlszwtRng` |
| Create an Order | POST | `/orders` | `conn_mod_def::GMk2UGqL1I8::F48oGeEORp-r7x3Rvv9rWw` |
| Post an Order | POST | `/orders/{{id}}/post` | `conn_mod_def::GMk2UHnplas::Xf-LBx5QTh2SFUK3HYuRgQ` |
| Update an Order | PATCH | `/orders/{{id}}` | `conn_mod_def::GMk2UBElY2I::k3oBYkPtTi2nQZ9SH37Mog` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Item | GET | `/items/{{id}}` | `conn_mod_def::GMk2T26-8yI::GvguVq26ReyiT5NmJg4VYQ` |
| List Items | GET | `/items` | `conn_mod_def::GMk2T4nX7tg::MfvReuE2Qka088TxTqImvw` |
| Create an Item for Sale | POST | `/items` | `conn_mod_def::GMk2TtxFPd0::SxyacIdJSlmnCM4Bvw2mdw` |
| Delete an Item by ID | DELETE | `/items/{{id}}` | `conn_mod_def::GMk2Tvbs8qQ::V37M6bSwRZGFS6dCzqYoIQ` |
| Update an Item | PATCH | `/items/{{id}}` | `conn_mod_def::GMk2T4RD-zA::s5oQR4CaQxy1xxJ9dmecYQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/users/{{id}}` | `conn_mod_def::GMk2U2fNXOo::U97BGc4TRVC27QT0fciZVQ` |
| List Users | GET | `/users` | `conn_mod_def::GMk2U0peW6E::RZ-OjZ_ySaydMjAzIgKvyw` |
| Create a User | POST | `/users` | `conn_mod_def::GMk2U1BzXjU::rTEoCyb3Tr-HSXcZ211fEA` |
| Delete a User by ID | DELETE | `/users/{{id}}` | `conn_mod_def::GMk2U3txYCg::onCDySOkRricluiakEb9ug` |
| Update a User by ID | PATCH | `/users/{{id}}` | `conn_mod_def::GMk2U_VO49A::wVf-xsf2Rc-pzjX3xAc5lQ` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group | GET | `/groups/{{id}}` | `conn_mod_def::GMk2TuC_83w::ZSjU0is8Qke901DboIn3Ag` |
| Create an Item Group | POST | `/groups` | `conn_mod_def::GMk2TibF3aA::ohIpVbWJQEuLsariYyIOeA` |
| Delete an Item Group by ID | DELETE | `/groups/{{id}}` | `conn_mod_def::GMk2TkNN7E8::LVDf_wOkQ9Gyz_5P2Oslog` |

### GiftCardArtwork

| Action | Method | Path | Action id |
|---|---|---|---|
| List Gift Card Artwork | GET | `/settings/gift-card/artwork` | `conn_mod_def::GMk2UvUM8VE::irVEti_HS4SJ1FJugb8jjg` |
| Delete Gift Card Artwork | DELETE | `/settings/gift-card/artwork/{{id}}` | `conn_mod_def::GMk2Uc50Stk::iPle5ifMSt2VCJcYjA3w1Q` |
| Upload Gift Card Artwork | POST | `/settings/gift-card/artwork` | `conn_mod_def::GMk2U3Dg_2U::d8jA8P2wRWGFzJdjhaZeMA` |

### Ping

| Action | Method | Path | Action id |
|---|---|---|---|
| Ping | GET | `/ping` | `conn_mod_def::GMk2UQdVJXs::nSLnXsdgR0KtOgtvxme0zA` |
| Ping | POST | `/ping` | `conn_mod_def::GMk2UTV5BIM::MZv7C4m1TqCtutoiBeAW-Q` |

### EmailSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Default Email Settings | GET | `/settings/email` | `conn_mod_def::GMk2UatEZZo::FqFWqDXzSh2jSaQtM4d_-w` |
| Update Email Settings | PATCH | `/settings/email` | `conn_mod_def::GMk2Uto4-_k::_CcmoALPQue9_zHoRkzyiQ` |

### GiftCardSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Gift Card Settings | GET | `/settings/gift-card` | `conn_mod_def::GMk2UbUuTs8::ude7kWjOTV-MoqjLzg-4fA` |
| Update Gift Card Settings | PATCH | `/settings/gift-card` | `conn_mod_def::GMk2UupiLHM::ZB-aN8rSS4OsZeGlMkegAg` |

### CheckoutSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Checkout Settings | GET | `/settings/checkout` | `conn_mod_def::GMk2Ulbv4m8::3AR6x4RwT3umePdg0I6Y5g` |
| Update Checkout Settings | PATCH | `/settings/checkout` | `conn_mod_def::GMk2Uy4L7no::nx7SVPMMSMSlhIcUXWvGtA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/hooks` | `conn_mod_def::GMk2U_J9cxU::qr3xxVycTTygF_10ZDXqxQ` |
| Retrieve a Webhook by ID | GET | `/hooks/{{id}}` | `conn_mod_def::GMk2VA_WJ6I::Qh68FoBrRpmYuff55MYXVQ` |

### Company

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current Company Details | GET | `/company` | `conn_mod_def::GMk2TJNLH4w::rJGoO-SZRJK6Kx1EieBmVQ` |

### StripeConnectionSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Stripe Connection Settings | GET | `/integrations/stripe/connection` | `conn_mod_def::GMk2TkkIakk::-oCpVjsCTF2BnvzHEw7D3Q` |

### StripeConnection

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Update a Stripe Connection | POST | `/integrations/stripe/connection` | `conn_mod_def::GMk2Tkm8_UA::CwvSyxJATtGRg88qw3yAtA` |

### ItemGroup

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Item Group | PATCH | `/groups/{{id}}` | `conn_mod_def::GMk2TtKzc8A::3ehDxvwASfqV07P6CgV2cg` |

### ItemGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Item Groups | GET | `/groups` | `conn_mod_def::GMk2TvSWFRk::gs-ccQBdSmWpT1EFVf6EvA` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Locations | GET | `/locations` | `conn_mod_def::GMk2T3nRLLI::U2jUwd8cRRKKlRpGi7r4Bw` |

### TransactionReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transaction Report by ID | GET | `/reports/transactions/{{id}}` | `conn_mod_def::GMk2UPdbws0::U9Aj7wEfS1aUcS_I6Hjaww` |

### Promotions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Promotions | GET | `/promotions` | `conn_mod_def::GMk2UPziOJk::5w4frHlmR3GWsZvJVixxog` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Account Using Partners | POST | `/partners/account/create` | `conn_mod_def::GMk2UR6y9ok::BYp-X59jS-KWbnIJKBLCAA` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transactions | GET | `/reports/transactions` | `conn_mod_def::GMk2Ufv7BDA::tya3e2WNQf28d2w-EIP_hg` |

### ShippingSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Shipping Settings | GET | `/settings/shipping` | `conn_mod_def::GMk2UuCK5RY::owQZt4KeQwq4RFqWKyodOg` |

### WebhookEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Webhook Endpoint | DELETE | `/hooks/{{id}}` | `conn_mod_def::GMk2U_A71yY::XuvIX3R_TeKm43bi6H4Pnw` |

### WebhookSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Subscribe to a Webhook for a Gift Up Event | POST | `/hooks/{{event}}/subscribe` | `conn_mod_def::GMk2VAeoruE::y0U7G-giRaqXSI6F_lz3uw` |

## When a call fails

The error comes from Gift Up, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gift-up

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
