---
name: pdf-co
description: PDF.co is a document processing API platform that enables developers to extract data, convert, generate, edit, and automate PDFs and other documents using RESTful APIs, with support for OCR, AI-powered parsing, and integrations to streamline data extraction and document workflows. Read and write PDF.co data through One: pdf, files, pdfsecurity, documentparsertemplates, htmltemplates, pdfeditadd and more, 68 actions with real parameter documentation. Use whenever the user asks to look something up in PDF.co, create or update a record there, or build code against the PDF.co API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: pdf-co
  generated-from: one-knowledge-base
---

# PDF.co through One

PDF.co is a document processing API platform that enables developers to extract data, convert, generate, edit, and automate PDFs and other documents using RESTful APIs, with support for OCR, AI-powered parsing, and integrations to streamline data extraction and document workflows.

One exposes PDF.co through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `pdf-co` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm PDF.co is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real PDF.co account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Pdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a URL to PDF | POST | `/v1/pdf/convert/from/url` | `conn_mod_def::GKylEXrx5uA::52aRw3BXQpeSrmigUCCYvQ` |
| Convert an Email File to PDF | POST | `/v1/pdf/convert/from/email` | `conn_mod_def::GKylEXrttKg::ESI8FOfmRdaNFsIhqVtR0Q` |
| Convert CSV, XLS, or XLSX to PDF | POST | `/pdf/convert/from/csv` | `conn_mod_def::GKylENcsKpg::P5UTMknnRzyWiJkghVtNVw` |
| Convert HTML to PDF | POST | `/v1/pdf/convert/from/html` | `conn_mod_def::GKylEWl-neA::5crbVJKbRYmViJMhzAXpnA` |
| Convert Image to PDF | POST | `/v1/pdf/convert/from/image` | `conn_mod_def::GKylEWaAPng::EZJA6_7VToG4_4nn8WGACw` |
| Delete Pages from a PDF | POST | `/v1/pdf/edit/delete-pages` | `conn_mod_def::GKylEMqY8YA::WR5id6JvRCKEEIf0g_YuVQ` |
| Make PDF Text Unsearchable | POST | `/v1/pdf/makeunsearchable` | `conn_mod_def::GKylDymNWQg::yllGSOkHQhWFFe81opAO2Q` |
| Make Text Searchable | POST | `/pdf/makesearchable` | `conn_mod_def::GKylEC7B6Jg::MSgwPN5zQ2G-hFPXwgickQ` |
| Merge PDF | POST | `/pdf/merge` | `conn_mod_def::GKylE6c0kOg::_67JDAd4QWO7agwzFnQlgQ` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Pre-signed URL | GET | `/file/upload/get-presigned-url` | `conn_mod_def::GKylC1G6UuA::zSPlRr8UTe-U7g7JCIp_eQ` |
| Upload a File from a Source URL | GET | `/v1/file/upload/url` | `conn_mod_def::GKylDJXO0Qg::ZQfWoeD2SG65ygyClKfUhw` |
| Delete Temporary File | POST | `/file/delete` | `conn_mod_def::GKylCpxncIA::fJ08g5WFQeiBuSL0yGElpw` |
| Upload File from a URL | POST | `/v1/file/upload/url` | `conn_mod_def::GKylDIa2ZBA::MuGQfbYBR-CqRFf396iJ_w` |
| Upload File Using Base64 | POST | `/v1/file/upload/base64` | `conn_mod_def::GKylDIjG_GA::QXm-pILcRGy5Zss6xjZ_kg` |

### PdfSecurity

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Password to PDF | POST | `/pdf/security/add` | `conn_mod_def::GKylCmmP78A::ep3IijU4TM-dKVjqTVo3eA` |
| Remove Password from PDF | POST | `/pdf/security/remove` | `conn_mod_def::GKylC9qPVKg::OTr0U2UWR32ehc9DEzn-kQ` |

### DocumentParserTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Document Parser Templates | GET | `/pdf/documentparser/templates` | `conn_mod_def::GKylDoYUxqg::AYEVZvfRTieXlpr3hTyvcA` |
| Retrieve a Document Parser Template by ID | GET | `/v1/pdf/documentparser/templates/{{id}}` | `conn_mod_def::GKylDoZrfeA::GSPDiw1BR4qGamKiklADTA` |

### HtmlTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Return All HTML Templates | GET | `/templates/html` | `conn_mod_def::GKylE6VTbQg::M2QmRu_qRh6swrzv34B3jw` |
| Return an HTML Template by ID | GET | `/v1/templates/html/{{id}}` | `conn_mod_def::GKylE7miibA::b6Eg2QHkQlu1YHN7FxsiDA` |

### PdfEditAdd

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Content to a PDF | POST | `/pdf/edit/add` | `conn_mod_def::GKylDS2M6pg::oB8XM-xdS-q3kYBY91mkvw` |

### BarcodeImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Barcode Images | POST | `/barcode/generate` | `conn_mod_def::GKylCl6WiLg::Ve1yCcgZQjeQ853ji7iYHQ` |

### BackgroundJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Background Job | POST | `/v1/job/check` | `conn_mod_def::GKylCmmD4dA::b178GIumTianbO89irAFcw` |

### Barcodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Read Barcodes From a URL | POST | `/v1/barcode/read/from/url` | `conn_mod_def::GKylCm2fo9A::Q9V8cQ8bSqyzJU0HGMA_hA` |

### PdfClassifier

| Action | Method | Path | Action id |
|---|---|---|---|
| Classify a PDF or Image Document | POST | `/pdf/classifier` | `conn_mod_def::GKylCy8a83A::WTeD_cNgRbOLgU1k6es-sg` |

### EmailAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Email Attachments | POST | `/v1/email/extract-attachments` | `conn_mod_def::GKylCy9X-Ig::aNVibvGFT2-i_DafsVINgg` |

### PdfToHtml

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to HTML | POST | `/pdf/convert/to/html` | `conn_mod_def::GKylEgYGOeg::I9WEDtzGTWeRiTsQi2O7Qg` |

### PdfJsonMeta

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a PDF or Scanned Image to JSON Metadata with AI | POST | `/pdf/convert/to/json-meta` | `conn_mod_def::GKylEiafysA::KE3bdZViQOq48OpPmPWagQ` |

### PdfToJpg

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a PDF to JPG | POST | `/v1/pdf/convert/to/jpg` | `conn_mod_def::GKylEjwtjaA::tVC4-mJlRHaLdlSBZO6TNA` |

### PdfToJson

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to JSON | POST | `/pdf/convert/to/json2` | `conn_mod_def::GKylEmz6Lug::7vkSAnq4TRWZziKbczxtZQ` |

### PdfToPng

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to PNG | POST | `/v1/pdf/convert/to/png` | `conn_mod_def::GKylEm6UvHg::SVq_C55WRBqm14NE6s8hDA` |

### PdfToText

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to Text | POST | `/v1/pdf/convert/to/text` | `conn_mod_def::GKylEvZ1xTg::rcBSGcUcRXCQbxDnq956uQ` |

### PdfToTiff

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to TIFF | POST | `/v1/pdf/convert/to/tiff` | `conn_mod_def::GKylEwQrw9A::X4tAsDx9SayoshDnltYryg` |

### PdfToWebp

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to WebP | POST | `/v1/pdf/convert/to/webp` | `conn_mod_def::GKylEwkgGyA::NKroLUkZRMe5f_DVq20DRw` |

### PdfToXls

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to XLS | POST | `/v1/pdf/convert/to/xls` | `conn_mod_def::GKylEwzXWqg::n7GVvfr3SBime_YJfayhAw` |

### PdfToSimpleText

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a PDF to Simple Text | POST | `/v1/pdf/convert/to/text-simple` | `conn_mod_def::GKylExZJStg::LwjlAmyFROagEajsXiYpsw` |

### PdfDeleteText

| Action | Method | Path | Action id |
|---|---|---|---|
| Search and Delete Text in a PDF | POST | `/pdf/edit/delete-text` | `conn_mod_def::GKylDTFq2Hg::mKgqEncoT7uz2wLHdgdiiQ` |

### XlsConvertToCsv

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert an Excel File to CSV | POST | `/v1/xls/convert/to/csv` | `conn_mod_def::GKylDUigxUg::OdTTfO0wSHubqCOH-wfUbQ` |

### PdfEdit

| Action | Method | Path | Action id |
|---|---|---|---|
| Search and Replace Text with Image in a PDF | POST | `/pdf/edit/replace-text-with-image` | `conn_mod_def::GKylDUjWXAg::NQuuVbNkTqGDzVHWdf9gxw` |

### PdfEditReplaceText

| Action | Method | Path | Action id |
|---|---|---|---|
| Search and Replace Text in a PDF | POST | `/pdf/edit/replace-text` | `conn_mod_def::GKylDVUOq7A::yRpIWWRcSFaiz51hUqPekw` |

### XlsToJson

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert an Excel File to JSON | POST | `/xls/convert/to/json` | `conn_mod_def::GKylDeJzZvg::M_arEOfnRPOsitjqJnBNUQ` |

### XlsToXml

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert an Excel File to XML | POST | `/xls/convert/to/xml` | `conn_mod_def::GKylDeT6rhg::yGjNOp8_TBaW477TIL48MQ` |

### XlsToText

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert an Excel File to Text | POST | `/v1/xls/convert/to/txt` | `conn_mod_def::GKylDeqSE5g::sqCf2gEGREGKpPjSmwQOIg` |

### XlsToHtml

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert an Excel File to HTML | POST | `/v1/xls/convert/to/html` | `conn_mod_def::GKylDfKE4cA::HA5IMZi9T1W9-gAGTNTEZQ` |

### XlsToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert an Excel File to PDF | POST | `/xls/convert/to/pdf` | `conn_mod_def::GKylDfVNGeA::87ZboqgZRwOo4isMRtYRdQ` |

### PdfAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Attachments From a PDF | POST | `/pdf/attachments/extract` | `conn_mod_def::GKylDoPrVvg::jRkr75AoS_qM6tY1OhhJAA` |

### PdfToCsv

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to CSV | POST | `/v1/pdf/convert/to/csv` | `conn_mod_def::GKylEWM5LbA::2_DuGotFTzyHYgrSI7Q2_A` |

### AccountBalanceInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Balance Info | GET | `/v1/account/credit/balance` | `conn_mod_def::GKylCzD7fvg::SJi1aJOxQ86ZIhr8QsAU1A` |

### EmailDecode

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Data from an Email File | POST | `/email/decode` | `conn_mod_def::GKylCzQTyxg::5YmQfBC_QMuCrYzrg7HMCg` |

### PdfInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Read PDF Information | POST | `/pdf/info` | `conn_mod_def::GKylC9qSAEA::1X3PURkrQsCHaq6QeLTY1A` |

### FileHash

| Action | Method | Path | Action id |
|---|---|---|---|
| Get MD5 Hash of File by URL | POST | `/file/hash` | `conn_mod_def::GKylC-Cje6g::XvWaiYfnTv-t4XLbWpyOVQ` |

### PdfCompress

| Action | Method | Path | Action id |
|---|---|---|---|
| Compress a PDF File | POST | `/v2/pdf/compress` | `conn_mod_def::GKylC-WOQcA::RDM5mE3gTbCJwYSMMcQ3FQ` |

### PdfOptimize

| Action | Method | Path | Action id |
|---|---|---|---|
| Optimize a PDF File | POST | `/pdf/optimize` | `conn_mod_def::GKylC--0MBA::-mOovOExQQKQEImoDfdcrA` |

### File

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Small File | POST | `/v1/file/upload` | `conn_mod_def::GKylDIqO32g::u3UpJmXiRsKNGWEpyWTbPA` |

### Email

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Email with File | POST | `/email/send` | `conn_mod_def::GKylDJT89mA::_v_HSI7CQ2Cd_EbElrJtPQ` |

### DocumentParser

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse a Document | POST | `/pdf/documentparser` | `conn_mod_def::GKylDolbebA::jyscHcJWSaygiG_eOj3FAw` |

### InvoiceData

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse Invoice Data with AI | POST | `/v1/ai-invoice-parser` | `conn_mod_def::GKylDo6DskA::xpKDDfH2REyr4c_uOtOrEQ` |

### PdfFindTable

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Text in Table with AI | POST | `/pdf/find/table` | `conn_mod_def::GKylDxtlM8g::opNpG0-qQ4SXnYLDkJKI8Q` |

### PdfFormFieldsInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Read PDF Form Fields Information | POST | `/v1/pdf/info/fields` | `conn_mod_def::GKylDyaDTVg::jp18VDJ6ToudyWPl-P9SDA` |

### PdfFind

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Text in a PDF | POST | `/pdf/find` | `conn_mod_def::GKylDyi84dg::Zza36PivSs2bjrvqoIfeWQ` |

### PdfEditRotateAuto

| Action | Method | Path | Action id |
|---|---|---|---|
| Auto-Rotate PDF Pages with AI | POST | `/pdf/edit/rotate/auto` | `conn_mod_def::GKylEL1jy0g::htO74SJkQuynUnVZ6IDYSg` |

### PdfRotate

| Action | Method | Path | Action id |
|---|---|---|---|
| Rotate Selected Pages in a PDF | POST | `/pdf/edit/rotate` | `conn_mod_def::GKylEMo9IZg::xYv4g3v4R0ioRU_fOryg1w` |

### PdfConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOC Files to PDF | POST | `/pdf/convert/from/doc` | `conn_mod_def::GKylENA8jAA::OuQjohYISyepiYWcWgH1-w` |

### PdfToXlsx

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to XLSX | POST | `/pdf/convert/to/xlsx` | `conn_mod_def::GKylE65xNkA::9tgaJlzJRqiAPiQjcUxkwg` |

### PdfToXml

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a PDF to XML | POST | `/pdf/convert/to/xml` | `conn_mod_def::GKylE7MeieA::LE_VRTq7TCKoGlgKTKqZqw` |

### PdfSplitByTextSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Split PDF by Text Search | POST | `/pdf/split2` | `conn_mod_def::GKylFEfRpZA::0EnywSwcTp2rR11EJMfrrA` |

### PdfSplit

| Action | Method | Path | Action id |
|---|---|---|---|
| Split PDF | POST | `/pdf/split` | `conn_mod_def::GKylFEs_ozA::05oRZX3jR1u3Acgt2ZAEkg` |

### PdfMerge2

| Action | Method | Path | Action id |
|---|---|---|---|
| Merge Various Document Types into a PDF | POST | `/pdf/merge2` | `conn_mod_def::GKylFE7mpng::eA3OGuMnRW2lMP9fK3YcLg` |

## When a call fails

The error comes from PDF.co, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/pdf-co

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
