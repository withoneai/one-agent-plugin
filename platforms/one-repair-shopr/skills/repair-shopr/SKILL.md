---
name: repair-shopr
description: RepairShopr is a repair shop management platform that provides ticketing, CRM, invoicing, inventory tracking, and automation tools, allowing repair businesses and service teams to manage customer work orders, streamline operations, and integrate business workflows through its API. Read and write RepairShopr data through One: tickets, invoices, estimates, customers, products, portalusers and more, 169 actions with real parameter documentation. Use whenever the user asks to look something up in RepairShopr, create or update a record there, or build code against the RepairShopr API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: repair-shopr
  generated-from: one-knowledge-base
---

# RepairShopr through One

RepairShopr is a repair shop management platform that provides ticketing, CRM, invoicing, inventory tracking, and automation tools, allowing repair businesses and service teams to manage customer work orders, streamline operations, and integrate business workflows through its API.

One exposes RepairShopr through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `repair-shopr` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm RepairShopr is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real RepairShopr account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tickets | GET | `/api/v1/tickets` | `conn_mod_def::GMKXV513ldU::NABFakdlTjy4wmcLRIV3_g` |
| Retrieve a Ticket by ID | GET | `/api/v1/tickets/{{id}}` | `conn_mod_def::GMKXVwKONvI::L7JD13iSR9Ojxq18du6J5Q` |
| Add a Comment to a Ticket | POST | `/api/v1/tickets/{{id}}/comment` | `conn_mod_def::GMKXVnF9PbI::UNIxq0aITpWBTaG2nzleqQ` |
| Add Line Item to a Ticket | POST | `/api/v1/tickets/{{id}}/add_line_item` | `conn_mod_def::GMKXVuBQt3Q::SVm6hdSzS3aGSrk_kmbqqA` |
| Attach File Url to a Ticket | POST | `/api/v1/tickets/{{id}}/attach_file_url` | `conn_mod_def::GMKXVmoaEGQ::6oIVpMdNRveRD-zuygYBxA` |
| Charge a Ticket Timer Entry | POST | `/api/v1/tickets/{{id}}/charge_timer_entry` | `conn_mod_def::GMKXVmNRRIE::yim3QOxXTmiutA3gmaJLSw` |
| Create a Ticket | POST | `/api/v1/tickets` | `conn_mod_def::GMKXVtp5wf0::b5OTqiS1QEa2mTQ8jukWvg` |
| Delete a Ticket Attachment | POST | `/api/v1/tickets/{{id}}/delete_attachment` | `conn_mod_def::GMKXVt4wZnU::K-pZqKOOQP-tAXv3mXirrg` |
| Delete a Ticket by ID | DELETE | `/api/v1/tickets/{{id}}` | `conn_mod_def::GMKXVtUhGlE::KgavNltoRY-8s9MbUIRlEg` |
| Delete a Ticket Timer Entry for a Ticket | POST | `/api/v1/tickets/{{id}}/delete_timer_entry` | `conn_mod_def::GMKXVvtU6OQ::dbFuyddPRSaNJFivrc4XDg` |
| Print a Ticket by ID | POST | `/api/v1/tickets/{{id}}/print` | `conn_mod_def::GMKXVv-MFYY::0npt9LFpQU6zA2zslks5JA` |
| Remove a Line Item from a Ticket | POST | `/api/v1/tickets/{{id}}/remove_line_item` | `conn_mod_def::GMKXVvlX_A8::yfmO4wkEQEW-EJ5Jm6XH6Q` |

3 more Tickets actions are available through search.

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice by ID or Number | GET | `/api/v1/invoices/{{id}}` | `conn_mod_def::GMKXT71TFbw::uLUCK11ZQhWcQNLfHcA80Q` |
| Get an Invoice's Associated Ticket | GET | `/api/v1/invoices/{{id}}/ticket` | `conn_mod_def::GMKXT7Cdyzs::EIhUEOZoTuqY8hmDzfltYw` |
| List Invoices | GET | `/api/v1/invoices` | `conn_mod_def::GMKXT7yg8Ms::JKaY5JoTRWGlhB_ZrYPrHQ` |
| Create a Line Item for an Invoice | POST | `/api/v1/invoices/{{id}}/line_items` | `conn_mod_def::GMKXUDwQOuY::ipqSMnYrQN-xKOIfZpXsmw` |
| Create an Invoice | POST | `/api/v1/invoices` | `conn_mod_def::GMKXT08xmYM::Tu1S-9c-TWCeGS00ewlPpw` |
| Delete an Invoice | DELETE | `/api/v1/invoices/{{id}}` | `conn_mod_def::GMKXT6iLP-A::l5Z7ST5FRxmtWINCDlfFtg` |
| Email an Invoice | POST | `/api/v1/invoices/{{id}}/email` | `conn_mod_def::GMKXUDcED-4::ORqqrzxaSyeEM-dxrZuKKg` |
| Print an Invoice | POST | `/api/v1/invoices/{{id}}/print` | `conn_mod_def::GMKXT7KHPaY::Ea5vhb4nQD68auaoj00oyA` |
| Update an Invoice by ID | PUT | `/api/v1/invoices/{{id}}` | `conn_mod_def::GMKXUCZCSrc::D5eC-jSfS3eEOQjygXcfrg` |
| Update an Invoice Line Item by ID | PUT | `/api/v1/invoices/{{id}}/line_items/{{lineItemId}}` | `conn_mod_def::GMKXUCGJVas::EUntC8nyT5y629Ne0RnabA` |

### Estimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Estimate by ID or Number | GET | `/api/v1/estimates/{{id}}` | `conn_mod_def::GMKXTuy2I9s::jHLe78paTU2YYD0pCvK5Dg` |
| List Estimates | GET | `/api/v1/estimates` | `conn_mod_def::GMKXT1E9xoQ::y04nc2Z9QgybPTSte_Chnw` |
| Add a Line Item to an Estimate | POST | `/api/v1/estimates/{{id}}/line_items` | `conn_mod_def::GMKXToi-fQo::aCyUzN9_SHGVwWMZwq7R_w` |
| Convert an Estimate to an Invoice | POST | `/api/v1/estimates/{{id}}/convert_to_invoice` | `conn_mod_def::GMKXToVvhtw::ls4igZqoR9Cn6aww9y78fQ` |
| Create an Estimate | POST | `/api/v1/estimates` | `conn_mod_def::GMKXTuWBi5o::4_iVXkGPRwqKuQxyOs8tyw` |
| Delete a Line Item from an Estimate | DELETE | `/api/v1/estimates/{{id}}/line_items/{{lineItemId}}` | `conn_mod_def::GMKXTuuwurA::5XiJQRJ-SyiId9RVAwDJIQ` |
| Delete an Estimate by ID | DELETE | `/api/v1/estimates/{{id}}` | `conn_mod_def::GMKXTum8Cxo::x9RIKb-ySOGubs05MyH0gw` |
| Email an Estimate to a Customer | POST | `/api/v1/estimates/{{id}}/email` | `conn_mod_def::GMKXT1CFvLg::mAye0rZXTJWM-yvXVt3sKQ` |
| Print an Estimate | POST | `/api/v1/estimates/{{id}}/print` | `conn_mod_def::GMKXTukZ85U::DkxRuYwgTByCLw7_xmwDpA` |
| Update an Estimate by ID | PUT | `/api/v1/estimates/{{id}}` | `conn_mod_def::GMKXT0t0pVU::95DEihCeQb6rK__aIy4aiQ` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete Customers | GET | `/api/v1/customers/autocomplete` | `conn_mod_def::GMKXTojLNvc::hGkFk5P-TuOp_R3RdKsW7Q` |
| Get a Customer by ID | GET | `/api/v1/customers/{{id}}` | `conn_mod_def::GMKXThb8Gqg::JEyf2il0RYOKFoeP1rl8MA` |
| Get the Latest Customer | GET | `/api/v1/customers/latest` | `conn_mod_def::GMKXToCqkys::Oz5Q50ntQxmz1CYH4IqdkA` |
| List a Customer's Phones | GET | `/api/v1/customers/{{customerId}}/phones` | `conn_mod_def::GMKXUqCJLVE::ZqHAzI62RhuGQdkLC18Czw` |
| List Customers | GET | `/api/v1/customers` | `conn_mod_def::GMKXTiPGbOE::t3q9CxOxTGKi7AIflisr5Q` |
| Create a Customer | POST | `/api/v1/customers` | `conn_mod_def::GMKXTh_5jeM::FIKnaS6HSSeiqz2OmM3XRg` |
| Delete a Customer by ID | DELETE | `/api/v1/customers/{{id}}` | `conn_mod_def::GMKXTiHKdLc::hYjWThVbSeueCKWdC-v1HA` |
| Update a Customer by ID | PUT | `/api/v1/customers/{{id}}` | `conn_mod_def::GMKXTn8Mn3E::ZbTb3GcxQBqxwAhPr_wjzg` |
| Update a Customer's Phone by ID | PUT | `/api/v1/customers/{{customerId}}/phones/{{id}}` | `conn_mod_def::GMKXUqRJUbw::c7EFoJQzTj2lte9LWLotZQ` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product by Barcode | GET | `/api/v1/products/barcode` | `conn_mod_def::GMKXU35Cgqg::pqptTrGiQ0-DYa5d70WANA` |
| Get a Product by ID | GET | `/api/v1/products/{{id}}` | `conn_mod_def::GMKXU3mG_WM::QdZ04n5dTjaKvGuVCmeXPw` |
| List Products | GET | `/api/v1/products` | `conn_mod_def::GMKXU5XxswU::VYlMNTsrRfydVo3od_lGMA` |
| Add Images to a Product | POST | `/api/v1/products/{{id}}/add_images` | `conn_mod_def::GMKXUwkgmAs::SeufWrQ3THqsd_VH5WKNog` |
| Create a Product | POST | `/api/v1/products` | `conn_mod_def::GMKXUwiPf9k::HV75MCkSQYqgMbmdUPPJJQ` |
| Delete Image for a Product | DELETE | `/api/v1/products/{{id}}/delete_image` | `conn_mod_def::GMKXUxp_ENY::bvrUrDSuQgOYj5NkyccT9A` |
| Update a Product by ID | PUT | `/api/v1/products/{{id}}` | `conn_mod_def::GMKXU_1O2RM::y1CKUIUzS22KR4GV2yZ9Nw` |
| Update a Product's Location Quantities | PUT | `/api/v1/products/{{id}}/location_quantities` | `conn_mod_def::GMKXU4dR30M::BQ3MxOprR7W5UxZOaN5QnA` |

### PortalUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Portal Users | GET | `/api/v1/portal_users` | `conn_mod_def::GMKXUwpG8Bc::VEgHmGR6QDiSQmP04QRYfQ` |
| Create a Portal User | POST | `/api/v1/portal_users` | `conn_mod_def::GMKXUp6OiuE::fS2AkWxBR7S3W0ZKDUntsQ` |
| Create Invitation for a Portal User | POST | `/api/v1/portal_users/create_invitation` | `conn_mod_def::GMKXUqMvAPo::f1mxwU5BQ6a4bN3apBVsXg` |
| Delete a Portal User by ID | DELETE | `/api/v1/portal_users/{{id}}` | `conn_mod_def::GMKXUpyHYtI::E1kAsZUfTWC_ulszpaekeA` |
| Update a Portal User by ID | PUT | `/api/v1/portal_users/{{id}}` | `conn_mod_def::GMKXUwwLf5g::3cB8nqGgQ0qlICB745FSlg` |

### RmmAlerts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an RMM Alert by ID | GET | `/api/v1/rmm_alerts/{{id}}` | `conn_mod_def::GMKXVRhZq0M::1KXxi0AgSFyFmT7NiCAO7A` |
| List RMM Alerts | GET | `/api/v1/rmm_alerts` | `conn_mod_def::GMKXVQ4ddbI::sY4iJeooSUCdf1wPmvch4g` |
| Create an RMM Alert | POST | `/api/v1/rmm_alerts` | `conn_mod_def::GMKXVQ6qU8Y::0S2dq8o4Ree36kopUcMROQ` |
| Delete an RMM Alert by ID | DELETE | `/api/v1/rmm_alerts/{{id}}` | `conn_mod_def::GMKXVQj8TRQ::d43UcJ-cQ8uex3x_d9waOQ` |
| Mute an RMM Alert by ID | POST | `/api/v1/rmm_alerts/{{id}}/mute` | `conn_mod_def::GMKXVSKXWjI::4blMQtMoQDOndofBFIWFSg` |

### Appointments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Appointment by ID | GET | `/api/v1/appointments/{{id}}` | `conn_mod_def::GMKXS4AKydw::0tmk6pbpRZaR--XHdwynBg` |
| List Appointments | GET | `/api/v1/appointments` | `conn_mod_def::GMKXS4RqMGs::iusq9Rr4QSyrbPXNEatCqg` |
| Create an Appointment | POST | `/api/v1/appointments` | `conn_mod_def::GMKXS336JeY::d-Img3EdQyaiSAAnyeTEMA` |
| Delete an Appointment by ID | DELETE | `/api/v1/appointments/{{id}}` | `conn_mod_def::GMKXS3e-7qI::pfP7QJ4pSJ65xqj-yD7FYA` |
| Update an Appointment by ID | PUT | `/api/v1/appointments/{{id}}` | `conn_mod_def::GMKXS4ypSfI::4aJaoh8NQNOIE-gajwQt2Q` |

### AppointmentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Appointment Type by ID | GET | `/api/v1/appointment_types/{{id}}` | `conn_mod_def::GMKXS-7U4jA::JevKj737Qma3JOlLRf-nlw` |
| List Appointment Types | GET | `/api/v1/appointment_types` | `conn_mod_def::GMKXS-iQHEw::lIfwyB8VRFKiZAnKE_o7hg` |
| Create an Appointment Type | POST | `/api/v1/appointment_types` | `conn_mod_def::GMKXS-jR5Wg::1QO3hNvKQ2a-1aJT3OTkjg` |
| Delete an Appointment Type by ID | DELETE | `/api/v1/appointment_types/{{id}}` | `conn_mod_def::GMKXS-yXIbY::brrq3jfkQ4OYssThYo8qLA` |
| Update an Appointment Type by ID | PUT | `/api/v1/appointment_types/{{id}}` | `conn_mod_def::GMKXS_Meq1E::a19cXUvQT5OdY0KUIjD7gw` |

### PaymentProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer's Payment Profile by ID | GET | `/api/v1/customers/{{customerId}}/payment_profiles/{{id}}` | `conn_mod_def::GMKXUjEmmkw::dxpgCLZyQC2TbZwbBN1ryg` |
| List a Customer's Payment Profiles | GET | `/api/v1/customers/{{customerId}}/payment_profiles` | `conn_mod_def::GMKXUj6cM5U::OxFtjGvISsiw2L3dSwlXlw` |
| Create a Payment Profile for a Customer | POST | `/api/v1/customers/{{customerId}}/payment_profiles` | `conn_mod_def::GMKXUcstvkw::_gshP-LNS1GLU_LBIB0FRw` |
| Delete a Customer's Payment Profile | DELETE | `/api/v1/customers/{{customerId}}/payment_profiles/{{id}}` | `conn_mod_def::GMKXUcJy9ic::PiZOqaiFRRiyjyOg9VkOKA` |
| Update a Customer's Payment Profile | PUT | `/api/v1/customers/{{customerId}}/payment_profiles/{{id}}` | `conn_mod_def::GMKXUjKfA0k::VLqilqkkSmecsOterNLc6w` |

### PurchaseOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Purchase Order by ID | GET | `/api/v1/purchase_orders/{{id}}` | `conn_mod_def::GMKXVIgkHPc::qTJ_jkZMRFiBc9Ho8KihOg` |
| List Purchase Orders | GET | `/api/v1/purchase_orders` | `conn_mod_def::GMKXVIG3cpc::fH7PFikYSm60z4KzeaIlUA` |
| Create a Purchase Order | POST | `/api/v1/purchase_orders` | `conn_mod_def::GMKXVJ5jlhc::9G8d77iyREabNx5v8d4egQ` |
| Create Po Line Item for a Purchase Order | POST | `/api/v1/purchase_orders/{{id}}/create_po_line_item` | `conn_mod_def::GMKXVI8VdR8::EBFv1CUoRrOQKyGhKOPFNQ` |
| Receive a Purchase Order | POST | `/api/v1/purchase_orders/{{id}}/receive` | `conn_mod_def::GMKXVIu-Tgs::JlxQ5flQRIGa7eC1b8_VQQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact by ID | GET | `/api/v1/contacts/{{id}}` | `conn_mod_def::GMKXTTk1k5o::e4DvAtjxQba_B0Ypm5AFCw` |
| List Contacts | GET | `/api/v1/contacts` | `conn_mod_def::GMKXTS4cRkg::EMI_Qh9nTsCPYKNCOU2DGA` |
| Create a Contact | POST | `/api/v1/contacts` | `conn_mod_def::GMKXTUA6PpM::IQ5MwJheTiuZfDDYLcxnRQ` |
| Delete a Contact | DELETE | `/api/v1/contacts/{{id}}` | `conn_mod_def::GMKXTTMrzKU::bPt4MJ6TS5G5sRMS01vSlA` |
| Update a Contact | PUT | `/api/v1/contacts/{{id}}` | `conn_mod_def::GMKXTbH3TOg::GEiuMVVHS-OSfE30LDYSMg` |

### Contracts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contract by ID | GET | `/api/v1/contracts/{{id}}` | `conn_mod_def::GMKXTb2TBZ0::JcNB3x_IShqIeneiSW6_4A` |
| List Contracts | GET | `/api/v1/contracts` | `conn_mod_def::GMKXTbxPsKA::o07tbu1cQCO_1XlZFHffXg` |
| Create a Contract | POST | `/api/v1/contracts` | `conn_mod_def::GMKXTbRQYGU::pg6fA2QXSLacRdGqwIIBLg` |
| Delete a Contract by ID | DELETE | `/api/v1/contracts/{{id}}` | `conn_mod_def::GMKXTbDiHkQ::RmnsaV7VR8COLQf01TKpqg` |
| Update a Contract by ID | PUT | `/api/v1/contracts/{{id}}` | `conn_mod_def::GMKXThxLQdE::ksYheRgCSCWLWvQuXilZ4g` |

### WikiPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Wiki Page | GET | `/api/v1/wiki_pages/{{id}}` | `conn_mod_def::GMKXWcnzIeU::SdMcYEg4S-aKrAIrEu7CcA` |

4 more WikiPages actions are available through search.

This lists 90 of 169 actions. For anything not here, call `search_one_platform_actions` with platform `repair-shopr`. The full catalog is at https://www.withone.ai/knowledge/repair-shopr.

## When a call fails

The error comes from RepairShopr, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/repair-shopr

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
