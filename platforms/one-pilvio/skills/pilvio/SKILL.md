---
name: pilvio
description: Pilvio is a cloud-based field service management platform that provides scheduling, dispatching, work order tracking, and mobile tools, allowing service teams and contractors to manage on-site operations, technician workflows, and customer service processes more efficiently. Read and write Pilvio data through One: virtualmachine, loadbalancers, network, floatingip, payment, billingaccount and more, 111 actions with real parameter documentation. Use whenever the user asks to look something up in Pilvio, create or update a record there, or build code against the Pilvio API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: pilvio
  generated-from: one-knowledge-base
---

# Pilvio through One

Pilvio is a cloud-based field service management platform that provides scheduling, dispatching, work order tracking, and mobile tools, allowing service teams and contractors to manage on-site operations, technician workflows, and customer service processes more efficiently.

One exposes Pilvio through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `pilvio` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Pilvio is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Pilvio account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### VirtualMachine

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Virtual Machine Data | GET | `/user-resource/vm` | `conn_mod_def::GLGDIr7K87g::CMKtX4ALTW--HsVvBNhRtg` |
| Clone an Existing Virtual Machine | POST | `/v1/user-resource/vm/clone` | `conn_mod_def::GLGDIhZHuxg::iKlaM-xgRJSywaupkY2PzQ` |
| Create a Virtual Machine | POST | `/v1/user-resource/vm` | `conn_mod_def::GLGDIhHhmgg::O-wvEk7eRN-iloXlL7fekg` |
| Delete a Virtual Machine | DELETE | `/v1/user-resource/vm` | `conn_mod_def::GLGDIqvAvtg::jJCoXcqLSCysbkZKwdhEdw` |
| Rebuild a Virtual Machine from a Replica | POST | `/v1/user-resource/vm/rebuild` | `conn_mod_def::GLGDI1JXWhg::Oox6x2YxRCykNgVZj3hP5g` |
| Reinstall a Virtual Machine | POST | `/v1/user-resource/vm/reinstall` | `conn_mod_def::GLGDI-Mm0vg::BDfRpu-gTvC4XpDihHfe3Q` |
| Start Virtual Machine | POST | `/v1/user-resource/vm/start` | `conn_mod_def::GLGDI-1RDtg::nT7yeY5JSOWfT40_WTA-4w` |
| Stop a Virtual Machine | POST | `/v1/user-resource/vm/stop` | `conn_mod_def::GLGDI_xAh3A::CVruFgf9TMW5DpGleauOWw` |
| Toggle Automatic Backups for a Virtual Machine | POST | `/v1/user-resource/vm/backup` | `conn_mod_def::GLGDJJchaLg::pEcMulVOSKWUeuDVzcs4EA` |

### LoadBalancers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Load Balancer by UUID | GET | `/network/load_balancers/{{loadBalancerUuid}}` | `conn_mod_def::GLGDGoi0bjg::vgcAUMPIQzWAKbwQ2iIghw` |
| List Load Balancers | GET | `/v1/network/load_balancers` | `conn_mod_def::GLGDGqdJ1lg::hYYErcG0SdObzPugAlVojQ` |
| Change a Load Balancer's Billing Account | PUT | `/network/load_balancers/{{lbUuid}}/billing_account` | `conn_mod_def::GLGDGf8n6-A::PaDO_FWpRkOLtZhl2mosBA` |
| Delete a Load Balancer | DELETE | `/network/load_balancers/{{loadBalancerId}}` | `conn_mod_def::GLGDGgGBtng::jv5dsBohTE60sImk4JLYiQ` |
| Unlink Target from a Load Balancer | DELETE | `/network/load_balancers/{{lbUuid}}/targets/{{targetUuid}}` | `conn_mod_def::GLGDGo6c_RA::merlHafESiOzHrzaP_6EAQ` |

### Network

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Network Data | GET | `/network/network/{{networkUuid}}` | `conn_mod_def::GLGDIDgxxvg::smU9XrBJTNaonueguOyhuQ` |
| Change a Network Name | PATCH | `/network/network/{{networkUuid}}` | `conn_mod_def::GLGDH6RRIjA::QE-DW1klQkq8hhlzUwLSsQ` |
| Create a Network | POST | `/network/network` | `conn_mod_def::GLGDIDfzK6A::ckQAsCP6QzWhYaUM9swHWA` |
| Delete a Network | DELETE | `/network/network/{{networkUuid}}` | `conn_mod_def::GLGDIEFnF6A::Hu_18BwoRnOnA2Rx68imFg` |
| Set a Network as the Default Network | PUT | `/network/network/{{networkUuid}}/default` | `conn_mod_def::GLGDH55gF3g::-D7VGySzQYaDeRscLcGzoQ` |

### FloatingIp

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Floating IP by Public IPv4 Address | GET | `/network/ip_addresses/{{publicIpv4Address}}` | `conn_mod_def::GLGDGWzhxQg::520ZUm5dRoqt1LBeHJgt-w` |
| Create New Floating IP | POST | `/network/ip_addresses` | `conn_mod_def::GLGDGKLwH2A::AZroiTx8SQiXpsv_DvrZmA` |
| Un-assign a Floating IP | POST | `/network/ip_addresses/{{publicIpv4Address}}/unassign` | `conn_mod_def::GLGDGTtewFg::-l2dF0oiQSOHajQocD6CAA` |
| Update a Floating IP by Public IPv4 Address | PATCH | `/network/ip_addresses/{{publicIpv4Address}}` | `conn_mod_def::GLGDGUAp6LA::rIvervBZQ86Ew6D_BBlZ_Q` |

### Payment

| Action | Method | Path | Action id |
|---|---|---|---|
| Apply for Invoice Payment | POST | `/payment/apply_for_invoice_payment` | `conn_mod_def::GLGDHR5gjZg::qZILm74LQ5-TStGNmU8ZRg` |
| Pay All Billing Account Invoices | POST | `/payment/pay_all` | `conn_mod_def::GLGDHmRq8CA::jsYt_Vz4SLCPNDpu1M85Xw` |
| Pay an Amount | POST | `/payment/pay_amount` | `conn_mod_def::GLGDHyJvuog::t9nfSLORTxSc8cq4ZlTg7g` |
| Pay Invoice | POST | `/payment/pay_invoice` | `conn_mod_def::GLGDHtyG0Sg::99RNckDdRYybX_VQ4huX6w` |

### BillingAccount

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Billing Account | GET | `/v1/payment/billing_account` | `conn_mod_def::GLGDHRtMHcA::MoLO3bbVSeSyWhXvB8CLAA` |
| Delete a Billing Account | DELETE | `/v1/payment/billing_account` | `conn_mod_def::GLGDHaVknAg::4kOpNvblTz6eIF7o74qp5w` |
| Set Default Billing Account | POST | `/v1/payment/billing_account/set_default` | `conn_mod_def::GLGDH7y681A::D2FrqGP7QJeKhniV6_hLmw` |
| Update Billing Account | PUT | `/v1/payment/billing_account` | `conn_mod_def::GLGDH5UtboA::HhpTnmsGRPqmAdrXy83FcA` |

### VirtualMachineStorage

| Action | Method | Path | Action id |
|---|---|---|---|
| Attach Storage to a Virtual Machine | POST | `/v1/user-resource/vm/storage/attach` | `conn_mod_def::GLGDFlh5U5A::zjbH7CKAQTK6GIW3gVBErQ` |
| Create and Add Storage to a Virtual Machine | POST | `/user-resource/vm/storage` | `conn_mod_def::GLGDIW0h-Rg::GMF2IGabTHCN3IWbsN0Fug` |
| Detach Storage From a Virtual Machine | POST | `/v1/user-resource/vm/storage/detach` | `conn_mod_def::GLGDF2h0nYA::G07xba9IQPqIaT-R5NaaJA` |
| Modify a Virtual Machine Disk's Capacity | PATCH | `/v1/user-resource/vm/storage` | `conn_mod_def::GLGDI25ZSgA::n_SJ_05NQVucEnDakWrUxA` |

### StorageBucket

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Storage Bucket | PUT | `/storage/bucket` | `conn_mod_def::GLGDGx0hUVg::J2i0FmhgQgWqyltxCin4VA` |
| Delete an S3 Object Storage Bucket | DELETE | `/storage/bucket` | `conn_mod_def::GLGDGyfAlig::2E_YAfLqS_uCQaxjhoW6hQ` |
| Modify a Storage Bucket's Billing Account | PATCH | `/v1/storage/bucket` | `conn_mod_def::GLGDG6Uw0KA::MF2-QDYfQry4O1Wl6MeLMw` |

### Firewalls

| Action | Method | Path | Action id |
|---|---|---|---|
| List Firewalls | GET | `/network/firewalls` | `conn_mod_def::GLGDGBUDsdA::hsr7XtH2QleYb_i-vu5Yug` |
| Create a Firewall | POST | `/v1/network/firewalls` | `conn_mod_def::GLGDGB6KFGA::ul71DRXGS3SLIkLz7v7fDA` |
| Delete a Firewall | DELETE | `/network/firewalls/{{firewallUuid}}` | `conn_mod_def::GLGDGA58pMA::yphcIEjNQbm7Jk_Lfnub4g` |

### Disks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get One Disk | GET | `/storage/disks/{{diskUuid}}` | `conn_mod_def::GLGDF104syA::v65379VnSjW0Lylbgs3DFA` |
| List User's Disks | GET | `/storage/disks` | `conn_mod_def::GLGDF25svLg::NBsdb3NNS3W7EHKtmJtCSw` |
| Modify a Disk | PATCH | `/storage/disks/{{diskUuid}}` | `conn_mod_def::GLGDF12p81A::4pPVuEIVTM6K8gu8-2fIuQ` |

### PaymentCard

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Credit Card to a Billing Account | POST | `/payment/card` | `conn_mod_def::GLGDHRGAVZA::AFtd1CUwSgiMvHR5XYu8Ow` |
| Remove Credit Card | DELETE | `/v1/payment/card` | `conn_mod_def::GLGDHvto6hg::IJfrxjqKRF-cT1utzWvpFw` |
| Set Primary Payment Card | PUT | `/v1/payment/card/set_primary` | `conn_mod_def::GLGDHuDIfjA::qmwCOj-rSY6wrEXcFEeP5A` |

### SshKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List SSH Public Keys | GET | `/user-resource/ssh_keys` | `conn_mod_def::GLGDIUoJCJA::pJmZjdqNTImbZfzOlsM61Q` |
| Delete an SSH Key by UUID | DELETE | `/user-resource/ssh_keys/{{uuid}}` | `conn_mod_def::GLGDILlomqg::tgN7k0FrR3uq-kF0S94OiA` |
| Rename an SSH Key | PATCH | `/user-resource/ssh_keys/{{uuid}}` | `conn_mod_def::GLGDIVdljOg::LUoptj4YTiKyFj857om31g` |

### Vm

| Action | Method | Path | Action id |
|---|---|---|---|
| Boot a VM from ISO Media | POST | `/v1/user-resource/vm/boot_iso_media` | `conn_mod_def::GLGDIhjfF2g::-C3kFnegTBG6MXOirzmBZw` |
| Update a VM | PATCH | `/v1/user-resource/vm` | `conn_mod_def::GLGDIzHUnQA::PPieS7QRTHWqcgqYs-TUxA` |

### VmReplica

| Action | Method | Path | Action id |
|---|---|---|---|
| Create replica from block storage | POST | `/v1/user-resource/vm/replica` | `conn_mod_def::GLGDIinqNHA::ZP4BgCdmT--3uFiOOqwQIA` |
| Delete a VM Replica | DELETE | `/user-resource/vm/replica` | `conn_mod_def::GLGDIqp9p-g::m68LrSa-SfuVFslMImsW5w` |

### VirtualMachines

| Action | Method | Path | Action id |
|---|---|---|---|
| List Virtual Machines | GET | `/v1/user-resource/vm/list` | `conn_mod_def::GLGDI1I_ytg::oSNURGZAQVW-ffmt2neB5w` |
| Release a Virtual Machine's Public IPv4 Address | DELETE | `/v1/user-resource/vm/ip/public` | `conn_mod_def::GLGDI_9XArg::hMhNOc6GS5OJylLRGWPILw` |

### StorageDisks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Storage Disk | POST | `/v1/storage/disks` | `conn_mod_def::GLGDFuNOAaA::o9Nmd-y6R46qiubMHn2-qA` |
| Delete a Storage Disk by UUID | DELETE | `/storage/disks/{{diskUuid}}` | `conn_mod_def::GLGDFl2vCUA::1G81nI-HR-aeRokt3C393g` |

### LoadBalancerForwardingRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Load Balancer Forwarding Rule | POST | `/network/load_balancers/{{loadBalancerId}}/forwarding_rules` | `conn_mod_def::GLGDGghI4Zg::m0xMa2YQTwK06lShd84gTg` |
| Delete a Load Balancer Forwarding Rule | DELETE | `/network/load_balancers/{{lbUuid}}/forwarding_rules/{{ruleUuid}}` | `conn_mod_def::GLGDGoxrHTg::3JJr1OacTnqht1p17BecjQ` |

### FirewallAssociations

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a Firewall Association from a Virtual Machine | DELETE | `/network/firewalls/{{firewallUuid}}/vms` | `conn_mod_def::GLGDGLj_amg::XlTcATKVQGiuUV3pSjPHPQ` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Locations | GET | `/v1/config/locations` | `conn_mod_def::GLGDGUsqMXA::bb-HXwYMQR-jm3PAjmQBeQ` |

### FloatingIps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Floating IPs | GET | `/network/ip_addresses` | `conn_mod_def::GLGDGVTx3tg::JzaMr4rNRXqv6By0SGXv_A` |

### StorageUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Storage User Info | GET | `/storage/user` | `conn_mod_def::GLGDG50YH0A::yqJ5ydA7TNKaNqyGA47qhw` |

### AppCatalogVmImages

| Action | Method | Path | Action id |
|---|---|---|---|
| List App Catalog VM Images | GET | `/v1/config/vm_images/app_catalog` | `conn_mod_def::GLGDHEZtlDA::vog5IDwLQFCD9NwYARaw7g` |

### VmCreationParameters

| Action | Method | Path | Action id |
|---|---|---|---|
| List VM Creation Parameters | GET | `/v1/api/parameters/vm` | `conn_mod_def::GLGDHErdQpA::wMhXqHMoTGmWbnfCftJGig` |

### VmImages

| Action | Method | Path | Action id |
|---|---|---|---|
| List VM Images | GET | `/config/vm_images` | `conn_mod_def::GLGDHJXJnnA::5cxeKGqySueFou9huCkZyg` |

### CreditTopUpInvoice

| Action | Method | Path | Action id |
|---|---|---|---|
| Request a Credit Top-Up Invoice | POST | `/v1/payment/credit/request_invoice` | `conn_mod_def::GLGDHwZD5_g::-5Z_kPwlTsuSMuXt5sdrSA` |

### VirtualMachineStorageReplicas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Virtual Machine Storage Replica List | GET | `/user-resource/vm/replica` | `conn_mod_def::GLGDIrBCR4g::vVtwDWmzRDSROcOGu2opbQ` |

### VmStorageDisk

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a VM Storage Disk | DELETE | `/v1/user-resource/vm/storage` | `conn_mod_def::GLGDIr7pzig::PRWdBAHPSSim80c1VdOdvA` |

### HostPools

| Action | Method | Path | Action id |
|---|---|---|---|
| List Host Pools | GET | `/user-resource/host_pool/list` | `conn_mod_def::GLGDIzSOmJg::JD0RcTjfQ56qX6Ey8kv35g` |

### BootImages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Boot Images | GET | `/v1/config/boot_images` | `conn_mod_def::GLGDHC34o2g::1rx_lQ-MQNyllz-dbyQzNw` |

### BillingAccountRecurringPayment

| Action | Method | Path | Action id |
|---|---|---|---|
| Configure Recurring Payment for a Billing Account | PUT | `/payment/billing_account/{{billingAccountId}}/recurring_payment` | `conn_mod_def::GLGDHbFDMvA::NHyJssUYQiOdsSYdhYhD4Q` |

### PaymentCardDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Payment Card Details | GET | `/payment/card` | `conn_mod_def::GLGDHbHRMoA::3PlJhchZQvaP_Ls1jfd_cQ` |

### Invoice

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Invoice Details | GET | `/payment/invoice` | `conn_mod_def::GLGDHbRi7Wg::ZOvXe3TBQwW13CQh05gPjg` |

### BillingResources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Billing Account Resources | GET | `/user-resource/billing_resources` | `conn_mod_def::GLGDFl2m7wg::E6OA-gOrSTeFbVr641-VUg` |

### UserResourceBilling

| Action | Method | Path | Action id |
|---|---|---|---|
| Associate a Resource with a Billing Account | POST | `/v1/user-resource/resource_billing` | `conn_mod_def::GLGDFqBKaZg::VyS_cqaFTOGtOAICVeo-wA` |

### ChargingUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Charging Usage for a Billing Account | GET | `/charging/usage` | `conn_mod_def::GLGDF4HIvwA::gBa9FD8bS467AzmhbWY-KQ` |

### FirewallRule

| Action | Method | Path | Action id |
|---|---|---|---|
| Firewall Rule Object | POST | `` | `conn_mod_def::GLGDF_WEM-g::NBoClEKcSP6AUmH_fAehOg` |

### FirewallVirtualMachines

| Action | Method | Path | Action id |
|---|---|---|---|
| Associate a Firewall with a Virtual Machine | POST | `/network/firewalls/{{firewallUuid}}/vms` | `conn_mod_def::GLGDGA6hOAg::PbTurTflQRmFynH5czzsgg` |

### FloatingIpAddress

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Floating IP Address | DELETE | `/network/ip_addresses/{{publicIpv4Address}}` | `conn_mod_def::GLGDGJsdBmg::hD1KDZBKRx24XNDJRkE3CQ` |

### Firewall

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Firewall | PUT | `/network/firewalls/{{firewallUuid}}` | `conn_mod_def::GLGDGJ2m0hA::ezmiUtI-Q9ClFU4dzylhAw` |

### IpAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign a Floating IP | POST | `/network/ip_addresses/{{publicIpv4Address}}/assign` | `conn_mod_def::GLGDGKYDdfg::5W4ZbFzFQmy9eGveqQCQdQ` |

### LoadBalancerTargets

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a New Target to a Load Balancer | POST | `/network/load_balancers/{{loadBalancerId}}/targets` | `conn_mod_def::GLGDGgPZH7A::aUw1SlY0RhyMZX4OgU7rtw` |

### NetworkLoadBalancers

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Network Load Balancer | POST | `/v1/network/load_balancers` | `conn_mod_def::GLGDGgzJGlg::pRN7EUWtQQWZ7L6oBaFWfg` |

### LoadBalancer

| Action | Method | Path | Action id |
|---|---|---|---|
| Rename a Load Balancer | PATCH | `/network/load_balancers/{{loadBalancerUuid}}` | `conn_mod_def::GLGDGoixTXA::nIlplJBQQTiiV3ybBU2cJQ` |

### BillingAccountUnpaidTotalAmount

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Billing Account's Unpaid Total Amount | GET | `/v1/payment/billing_account/unpaid_amount` | `conn_mod_def::GLGDHcKGQEg::EQZAxzSwQRi_LwpsyVk7Ug` |

### UserStorageS3Keys

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a User Storage S3 Key Pair | POST | `/storage/user/keys` | `conn_mod_def::GLGDGyLDHug::euMijGBARduVMkuN4To1KA` |

### UserStorageKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a User Storage Key | DELETE | `/storage/user/keys` | `conn_mod_def::GLGDGyUc0hA::4p6IgKjRQ2mck4DYgvFP-A` |

### Bucket

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bucket Information | GET | `/storage/bucket` | `conn_mod_def::GLGDGypNmgg::t-gl54eQTbyv05B4v9EvoQ` |

This lists 90 of 111 actions. For anything not here, call `search_one_platform_actions` with platform `pilvio`. The full catalog is at https://www.withone.ai/knowledge/pilvio.

## When a call fails

The error comes from Pilvio, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/pilvio

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
