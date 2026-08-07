---
name: sage-sales-management
description: Sage Sales Management (formerly ForceManager) is a mobile-first CRM built for field sales teams, offering tools like route planning, visit tracking, pipeline management and AI-driven insights to help reps spend more time selling and less on administrative tasks. Read and write Sage Sales Management data through One: products, users, calls, usertypes, accountaddresses, accountsegments and more, 266 actions with real parameter documentation. Use whenever the user asks to look something up in Sage Sales Management, create or update a record there, or build code against the Sage Sales Management API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sage-sales-management
  generated-from: one-knowledge-base
---

# Sage Sales Management through One

Sage Sales Management (formerly ForceManager) is a mobile-first CRM built for field sales teams, offering tools like route planning, visit tracking, pipeline management and AI-driven insights to help reps spend more time selling and less on administrative tasks.

One exposes Sage Sales Management through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `sage-sales-management` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Sage Sales Management is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Sage Sales Management account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product | GET | `/api/v4/products/{{id}}` | `conn_mod_def::GJ2fEeWrqLs::gvqUm7AXT5SJ3MJPngLhog` |
| Get Products Schema | GET | `/api/v4/products/schema` | `conn_mod_def::GJ2fGS3fw9Y::SIaz_TSJQgqhJw0kdswwpg` |
| List Products | GET | `/api/v4/products` | `conn_mod_def::GJ2fFw-YFmY::T2luCcm-TVqskDbCfpwRCQ` |
| Bulk Create Products | POST | `/api/v4/products/bulk` | `conn_mod_def::GJ2fC88pd0I::zjKPRsrmTb2w3S_UYQ9HFQ` |
| Bulk Delete Products | DELETE | `/api/v4/products/bulk` | `conn_mod_def::GJ2fDEL7B9w::haq48z_SRUu2jQhsLs7hOA` |
| Bulk Update Products | PUT | `/api/v4/products/bulk` | `conn_mod_def::GJ2fDLu9hZw::yY6KIAl6QUSIjL9Aq4cnwg` |
| Create a Product | POST | `/api/v4/products` | `conn_mod_def::GJ2fDUrw8_A::mJmadGkUTcOxxo-dd8sj-g` |
| Delete a Product | DELETE | `/api/v4/products/{{id}}` | `conn_mod_def::GJ2fD-7iu-k::GQzMZ7x6SFOS_0R7WZ88zA` |
| Update a Product | PUT | `/api/v4/products/{{id}}` | `conn_mod_def::GJ2fGahthYA::jT9cMKfhQteIY7MZ17AYZw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/api/v4/users/{{id}}` | `conn_mod_def::GJ2fMQiS8q0::mbsDnVqZR9SgVpp3ZrL3BA` |
| List a User’s Hierarchy | GET | `/api/v4/users/{{id}}/hierarchy` | `conn_mod_def::GJ2fMe6gVDQ::BNiDNL5kT8eyH3bQeYf1eQ` |
| List Users | GET | `/api/v4/users` | `conn_mod_def::GJ2fMxw7nQ8::kWLyh6CGRu60HHoqLc-Mew` |
| Add Roles to a User | PUT | `/api/v4/users/{{id}}/roles` | `conn_mod_def::GJ2fJoUxEU8::eJ9MHImfQM6AXRwptINMFw` |
| Create User | POST | `/api/v4/users` | `conn_mod_def::GJ2fLuW9ZDU::6yBqzfL6S1GzzoerSeulcg` |
| Delete a User | DELETE | `/api/v4/users/{{id}}` | `conn_mod_def::GJ2fL9TNmGw::17xtmggQSjabCEnsfr98bg` |
| Update a User | PUT | `/api/v4/users/{{id}}` | `conn_mod_def::GJ2fNEYDJT4::OKtkexbsTp-PVwrJTCvGog` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call | GET | `/api/v4/calls/{{id}}` | `conn_mod_def::GJ2eywzA_EI::IkKqptlSQZGXXv7Ycxz6QQ` |
| Get Resources by Phone Number (Calls) | GET | `/api/v4/calls/phone/{{phoneNumber}}` | `conn_mod_def::GJ2ey3c95eI::AFyQG7J5R_6xZoq-qH5_zg` |
| List Calls | GET | `/api/v4/calls` | `conn_mod_def::GJ2ey_ON8B4::hvSsKEXHRFOjnqCbcbtLaA` |
| Create a Call for a User (by salesRepId) | POST | `/api/v4/calls` | `conn_mod_def::GJ2eyWbpC20::4ZgWtLokRB--5Yz-lzZCPg` |
| Create a Call Identified by a ForceManager User Phone Number | POST | `/api/v4/calls/identify` | `conn_mod_def::GJ2eyfWoP2E::L5qUu69iTKCuwA5wY8FPgg` |
| Delete a Call | DELETE | `/api/v4/calls/{{id}}` | `conn_mod_def::GJ2eypp2APs::JONOasQhTjqecgKIyOkLGg` |
| Update a Call | PUT | `/api/v4/calls/{{id}}` | `conn_mod_def::GJ2ezHPO8ro::cuzQWfnETQWYdWcu35qrRA` |

### UserTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Type | GET | `/api/v4/userTypes/{{id}}` | `conn_mod_def::GJ2fMYA3HrM::jNvODB2bSd2PQ5gFjaxC8g` |
| Get User Types Schema | GET | `/api/v4/userTypes/schema` | `conn_mod_def::GJ2fNX7lBPo::HSXW0PzXTV-7EbbMETeEGQ` |
| List User Types | GET | `/api/v4/userTypes` | `conn_mod_def::GJ2fMoag-W0::0zEvsWXhSo2taF3lW1B_Iw` |
| Create a User Type | POST | `/api/v4/userTypes` | `conn_mod_def::GJ2fL14HzR8::QMujLrnwQRKJJo6B7Z0_1w` |
| Delete a User Type | DELETE | `/api/v4/userTypes/{{id}}` | `conn_mod_def::GJ2fMGRqX_0::NrEQqOS4T3GYzIfjcrbECw` |
| Update a User Type | PUT | `/api/v4/userTypes/{{id}}` | `conn_mod_def::GJ2fNPgsra0::H4OlMayJReyBtaD5OQBV5Q` |

### AccountAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Addresses Schema | GET | `/api/v4/accountAddresses/schema` | `conn_mod_def::GJ2erNRrTUg::1bEUbl2xQDKUOc_EL2z2Cg` |
| Get an Account Address | GET | `/api/v4/accountAddresses/{{id}}` | `conn_mod_def::GJ2erj4Jeo0::MIEzddSgT8SkcM7hWBtirg` |
| List Account Addresses | GET | `/api/v4/accountAddresses` | `conn_mod_def::GJ2erq9JPu4::i2JKeppJQImJyLJrNC4HPw` |
| Create an Account Address | POST | `/api/v4/accountAddresses` | `conn_mod_def::GJ2erVPaTEM::dorRqG2LQWSp9aLXTxu91Q` |
| Delete an Account Address | DELETE | `/api/v4/accountAddresses/{{id}}` | `conn_mod_def::GJ2erbzJAqM::Ytsd72ZIT5K9S1ua6jiZAw` |
| Update an Account Address | PUT | `/api/v4/accountAddresses/{{id}}` | `conn_mod_def::GJ2erzCUZKg::uuKhfeRQQueXFUWYt0TtFA` |

### AccountSegments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Segments Schema | GET | `/api/v4/accountSegments/schema` | `conn_mod_def::GJ2er7ETJxo::yTngcp2CTR2m7fde_GPw0w` |
| Get an Account Segment | GET | `/api/v4/accountSegments/{{id}}` | `conn_mod_def::GJ2etiKmMMw::JvEC04jwQSObXi1D87tyVw` |
| List Account Segments | GET | `/api/v4/accountSegments` | `conn_mod_def::GJ2et7A_0x4::gs_mMdgQRuC7_3Nn0i1mIA` |
| Create an Account Segment | POST | `/api/v4/accountSegments` | `conn_mod_def::GJ2esf7Udq0::odUAlYsIR4qDkrCIIoFbHg` |
| Delete an Account Segment | DELETE | `/api/v4/accountSegments/{{id}}` | `conn_mod_def::GJ2es_ybOUk::F71ufyp9TDeJzNFbgHoQJw` |
| Update an Account Segment | PUT | `/api/v4/accountSegments/{{id}}` | `conn_mod_def::GJ2eurv2kDE::0Smx9XFCSk-Vw2jFpjjnfw` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Activities Schema | GET | `/api/v4/activities/schema` | `conn_mod_def::GJ2evDzX6vQ::c8Xr0vuXQ0e_h0j32qyw3Q` |
| Get an Activity | GET | `/api/v4/activities/{{id}}` | `conn_mod_def::GJ2ev1ycvHk::6NtwZUThT6-2mgVJB3P8Tg` |
| List Activities | GET | `/api/v4/activities` | `conn_mod_def::GJ2ewIKirjk::vmDeHKoQS0WDM3fVXV9PEQ` |
| Create Activity | POST | `/api/v4/activities` | `conn_mod_def::GJ2evW4ALcI::FkDegUiCRVSnuJsSj7dX-Q` |
| Delete an Activity | DELETE | `/api/v4/activities/{{id}}` | `conn_mod_def::GJ2evlvlzKw::mmXk3xzmTRyJOqJvWMRvRw` |
| Update an Activity | PUT | `/api/v4/activities/{{id}}` | `conn_mod_def::GJ2ewvVB8IQ::x6b9AYk3TTKUp_1LfuDj8w` |

### OpportunityTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Opportunity Type | GET | `/api/v4/opportunityTypes/{{id}}` | `conn_mod_def::GJ2e_GPGyT8::gpHdA-LgTHquyHfsId3CsA` |
| Get Opportunity Types Schema | GET | `/api/v4/opportunityTypes/schema` | `conn_mod_def::GJ2e_y-lXiw::hckcfSLCTR2Wft92Ud9PsA` |
| List Opportunity Types | GET | `/api/v4/opportunityTypes` | `conn_mod_def::GJ2e13juO_k::CDLfjhDyQNiIdt24hL-vyA` |
| Create an Opportunity Type | POST | `/api/v4/opportunityTypes` | `conn_mod_def::GJ2e-NLImtw::ryXHdxJ7Rw2MlnokW1Tj7A` |
| Delete an Opportunity Type | DELETE | `/api/v4/opportunityTypes/{{id}}` | `conn_mod_def::GJ2e-r_TiTc::ILlRAoOeQsuh_XYIEVzwFQ` |
| Update an Opportunity Type | PUT | `/api/v4/opportunityTypes/{{id}}` | `conn_mod_def::GJ2fARHnTWc::UAjZSJaKQzyRasNxiJhcLA` |

### Opportunities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Opportunity | GET | `/api/v4/opportunities/{{id}}` | `conn_mod_def::GJ2e-zn3DSs::FTLg4TznQJicIZtOjzbyEw` |
| Get the Opportunities Schema | GET | `/api/v4/opportunities/schema` | `conn_mod_def::GJ2e_f7g5dE::qolxkaTiSJCiZhoT8-buow` |
| List Opportunities | GET | `/api/v4/opportunities` | `conn_mod_def::GJ2e_Pm66Jc::9GW_QGTMQLSVZzusC4O5dA` |
| Create Opportunity | POST | `/api/v4/opportunities` | `conn_mod_def::GJ2e98XEIhs::J3vc4L0kT36lTCIOBxB-GQ` |
| Delete an Opportunity | DELETE | `/api/v4/opportunities/{{id}}` | `conn_mod_def::GJ2e-Y8D-M4::YTE2Dw78QF22VnUcCUf6kA` |
| Update an Opportunity | PUT | `/api/v4/opportunities/{{id}}` | `conn_mod_def::GJ2e_629kWQ::E7VMeVrST5GvBSBjJqD3Gg` |

### SalesorderStatuses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Order Status | GET | `/api/v4/salesorderStatuses/{{id}}` | `conn_mod_def::GJ2fBf7IKhk::qXkFBmnfSpaS6ZJVNSB88w` |
| Get Sales Order Statuses Schema | GET | `/api/v4/salesorderStatuses/schema` | `conn_mod_def::GJ2fCYKBv9I::gHQH3Y8USbaz_seQtk_MXw` |
| List Order Statuses | GET | `/api/v4/salesorderStatuses` | `conn_mod_def::GJ2fB8jqx4s::HjaORPeQQ06qiQjFaX7duQ` |
| Create Order Status | POST | `/api/v4/salesorderStatuses` | `conn_mod_def::GJ2fApTn2rM::VCRm7_-DQwOk0aUpqVZdpQ` |
| Delete an Order Status | DELETE | `/api/v4/salesorderStatuses/{{id}}` | `conn_mod_def::GJ2fBC_lUyc::Got9W-SsTlu8tABxIKygBA` |
| Update an Order Status | PUT | `/api/v4/salesorderStatuses/{{id}}` | `conn_mod_def::GJ2fCuObQtQ::2x0BTiMqQxKVrKPxNqM--w` |

### ProductCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product Category | GET | `/api/v4/productCategories/{{id}}` | `conn_mod_def::GJ2fEmlq17Y::EtNcuJb6TayQ4dqXDAc9iQ` |
| Get Product Categories Schema | GET | `/api/v4/productCategories/schema` | `conn_mod_def::GJ2fF4cyjSQ::mO8BcaKjSk6-Ch2klb52aw` |
| List Product Categories | GET | `/api/v4/productCategories` | `conn_mod_def::GJ2fFX2nLg4::sc-052oTTJaWVRpiAlha0g` |
| Create Product Category | POST | `/api/v4/productCategories` | `conn_mod_def::GJ2fDcS_huU::RIZwsJhBRGqi8l-QFjT_sA` |
| Delete a Product Category | DELETE | `/api/v4/productCategories/{{id}}` | `conn_mod_def::GJ2fEJKlnHk::0ApnFv7CQMa6F1_bXwZaQA` |
| Update a Product Category | PUT | `/api/v4/productCategories/{{id}}` | `conn_mod_def::GJ2fGjYdK0c::TDHTtp5GQLW50MMyM8FeCw` |

### ProductFamilies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product Family | GET | `/api/v4/productFamilies/{{id}}` | `conn_mod_def::GJ2fFG8SRqw::mQkSO5UuSsaRYSCbd124eA` |
| Get Product Families Schema | GET | `/api/v4/productFamilies/schema` | `conn_mod_def::GJ2fGBCuRnc::JoYG2ShTQnWxBrlvKWLNlw` |
| List Product Families | GET | `/api/v4/productFamilies` | `conn_mod_def::GJ2fFe3SpOk::61EMkpnoRH6TVslH7HzDow` |
| Create Product Family | POST | `/api/v4/productFamilies` | `conn_mod_def::GJ2fDnWDSAA::vzBqFuolT9WOIOl209rBKQ` |
| Delete a Product Family | DELETE | `/api/v4/productFamilies/{{id}}` | `conn_mod_def::GJ2fEPOYLjo::cgur0DKERr27lD4ji89b-g` |
| Update a Product Family | PUT | `/api/v4/productFamilies/{{id}}` | `conn_mod_def::GJ2fGsuLl04::VhIoEJ--ShC-nPYbx6a_dQ` |

### ProductRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product Rate | GET | `/api/v4/productRates/{{id}}` | `conn_mod_def::GJ2fFPcoQKQ::h-NoJb4yS12sa2b7eUP_CA` |
| Get Product Rates Schema | GET | `/api/v4/productRates/schema` | `conn_mod_def::GJ2fGLonF4Y::-tGrGceLRz-qWi2tfwAYZg` |
| List Product Rates | GET | `/api/v4/productRates` | `conn_mod_def::GJ2fFplFYxg::Hbj99HCATNWlE9I1IjUK2A` |
| Create Product Rate | POST | `/api/v4/productRates` | `conn_mod_def::GJ2fDvKNrL4::k_BcpolySQ6rBLZgArbIbg` |
| Delete a Product Rate | DELETE | `/api/v4/productRates/{{id}}` | `conn_mod_def::GJ2fEWXSXC4::y1kmW45PRm6dmi6v2C-cGA` |
| Update a Product Rate | PUT | `/api/v4/productRates/{{id}}` | `conn_mod_def::GJ2fG0ORXoI::F8zpTU8VSz-fGOVxaviODg` |

### AccountsRelated

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Related Accounts Schema | GET | `/api/v4/accountsRelated/schema` | `conn_mod_def::GJ2fItIHtJU::xMbJh-zKTmKvjPhUi2eWDg` |
| List Related Accounts | GET | `/api/v4/accountsRelated` | `conn_mod_def::GJ2fIcXJbA8::iYudjUe8R4-4JFmC3BO8Cg` |
| Retrieve a Related Account by ID | GET | `/api/v4/accountsRelated/{{id}}` | `conn_mod_def::GJ2fI4wvBhQ::4bwaB2ixR1ustNEn_-x8nA` |
| Create a Related Account | POST | `/api/v4/accountsRelated` | `conn_mod_def::GJ2fHsfH3-Q::jMzX4-ShRzOaEuDEK_5g6A` |
| Delete a Related Account | DELETE | `/api/v4/accountsRelated/{{id}}` | `conn_mod_def::GJ2fIA70LJ0::RUaVkJZ3QOChMfJ72bABdA` |
| Update a Related Account | PUT | `/api/v4/accountsRelated/{{id}}` | `conn_mod_def::GJ2fJM3TMQw::HUcNumtVTu2HybwxMmhL8Q` |

### AccountTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Types Schema | GET | `/api/v4/accountTypes/schema` | `conn_mod_def::GJ2esJ82c6E::8D0KsomaRRy9BTKArsp6Bw` |

5 more AccountTypes actions are available through search.

This lists 90 of 266 actions. For anything not here, call `search_one_platform_actions` with platform `sage-sales-management`. The full catalog is at https://www.withone.ai/knowledge/sage-sales-management.

## When a call fails

The error comes from Sage Sales Management, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sage-sales-management

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
