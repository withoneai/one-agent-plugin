---
name: api-2-pdf
description: Api2Pdf is a document generation API that converts HTML, URLs, Office files, and raw content into PDFs, screenshots, and images, allowing developers to automate document rendering, reporting, and file conversion workflows within applications and backend systems. Read and write Api2Pdf data through One: chromepdfurl, chromeimageurl, wkhtmlpdfurl, chromeimagehtml, chromepdfhtml, libreofficehtmltoxlsx and more, 24 actions with real parameter documentation. Use whenever the user asks to look something up in Api2Pdf, create or update a record there, or build code against the Api2Pdf API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: api-2-pdf
  generated-from: one-knowledge-base
---

# Api2Pdf through One

Api2Pdf is a document generation API that converts HTML, URLs, Office files, and raw content into PDFs, screenshots, and images, allowing developers to automate document rendering, reporting, and file conversion workflows within applications and backend systems.

One exposes Api2Pdf through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `api-2-pdf` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Api2Pdf is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Api2Pdf account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ChromePdfUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert URL to PDF Using Chrome | GET | `/chrome/pdf/url` | `conn_mod_def::GLusyHJNIPM::2FdHL09ARHaK4DK0rRtyOQ` |
| URL to PDF Using Chrome | POST | `/chrome/pdf/url` | `conn_mod_def::GLusyRDk5A4::B-D05Cl6Q4ukw7RGNZfpIA` |

### ChromeImageUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| URL to Image Using Chrome | GET | `/chrome/image/url` | `conn_mod_def::GLusyKV-4_k::Ip7tjE93QqWicKI85CNueA` |
| URL to Image Using Chrome | POST | `/chrome/image/url` | `conn_mod_def::GLusyIDMq7w::1zB_nCIaQGmhtHRlqkaWWg` |

### WkhtmlPdfUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert URL to PDF Using Wkhtml | GET | `/wkhtml/pdf/url` | `conn_mod_def::GLusyshFTik::cgavdzQPSaW9xLGgViih7w` |
| Convert URL to PDF Using Wkhtml | POST | `/wkhtml/pdf/url` | `conn_mod_def::GLusytglV8g::p1m_t1LmQTqARekUIIgQVA` |

### ChromeImageHtml

| Action | Method | Path | Action id |
|---|---|---|---|
| HTML to Image Using Chrome | POST | `/chrome/image/html` | `conn_mod_def::GLusyG-Xa1M::1_XHTV-NSmOE31EbpBYfvw` |

### ChromePdfHtml

| Action | Method | Path | Action id |
|---|---|---|---|
| HTML to PDF Using Chrome | POST | `/chrome/pdf/html` | `conn_mod_def::GLusyJ3kJPM::YZHIz77yR0eEg0YtjtmnYg` |

### LibreofficeHtmlToXlsx

| Action | Method | Path | Action id |
|---|---|---|---|
| HTML to XLSX Using LibreOffice | POST | `/libreoffice/html-to-xlsx` | `conn_mod_def::GLusyQcus8w::DStA7QfSQ_OVDAfXHITCzw` |

### LibreOfficeAnyToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert Office Document or Image File to PDF Using LibreOffice | POST | `/libreoffice/any-to-pdf` | `conn_mod_def::GLusyQ-EL4o::6JXl-9Q7T_GkeNkLhsKH0A` |

### LibreOfficeHtmlToDocx

| Action | Method | Path | Action id |
|---|---|---|---|
| HTML to Docx Using LibreOffice | POST | `/libreoffice/html-to-docx` | `conn_mod_def::GLusyTWrh94::X4B73g5MS4Kh0TlpOvgadw` |

### LibreofficePdfToHtml

| Action | Method | Path | Action id |
|---|---|---|---|
| PDF to HTML Using LibreOffice | POST | `/libreoffice/pdf-to-html` | `conn_mod_def::GLusyTrV8WE::PaEvMV9vTeutAer9VvNvFg` |

### PdfsharpBookmarks

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Bookmarks Using PDFsharp | POST | `/pdfsharp/bookmarks` | `conn_mod_def::GLusyZ2urM8::o-Of6mYaQyC46-mxgHy7YQ` |

### Pdfsharp

| Action | Method | Path | Action id |
|---|---|---|---|
| Compress PDF Using Pdfsharp | POST | `/pdfsharp/compress` | `conn_mod_def::GLusyatQA-E::O-yqUV0aSamAA8e_IdvQAA` |

### PdfsharpMerge

| Action | Method | Path | Action id |
|---|---|---|---|
| Merge PDFs Using Pdfsharp | POST | `/pdfsharp/merge` | `conn_mod_def::GLusya2Rd1E::QKpf2doLQFuXK9Vm7olq1w` |

### LibreofficeThumbnail

| Action | Method | Path | Action id |
|---|---|---|---|
| Thumbnail Using LibreOffice | POST | `/libreoffice/thumbnail` | `conn_mod_def::GLusybXP9OA::BLcO8EFvREuIDGZVumiDvA` |

### PdfsharpPassword

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Password to an Existing PDF Using PDFsharp | POST | `/pdfsharp/password` | `conn_mod_def::GLusyb7lf30::D7Of_GjDTUaB1jzk8wlGBg` |

### ApiStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Check API Status | GET | `/status` | `conn_mod_def::GLusyhr6nhI::ZZTUNGvSRwu9k8z1ir5HMQ` |

### Balance

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Balance | GET | `/balance` | `conn_mod_def::GLusyhxDnoc::NIYHNhtxRUiRfZSSt0_Jfw` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a File | DELETE | `/file/{{responseId}}` | `conn_mod_def::GLusyh8t_Ak::C-M0L9GtQfuqsnmflyws6Q` |

### PdfsharpExtractPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Pages Using PDFsharp | POST | `/pdfsharp/extract-pages` | `conn_mod_def::GLusyikijmM::s_2GIatQQpmr3KSq6TmPOQ` |

### ZipFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Zip File from Multiple Files | POST | `/zip` | `conn_mod_def::GLusym8pYJ0::oo7tT3grTICMfvruFosRzw` |

### WkhtmlPdfHtml

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert HTML to PDF Using Wkhtmltopdf | POST | `/wkhtml/pdf/html` | `conn_mod_def::GLusytY3Bas::jCrXR4jyRhKL6iexNT23gw` |

### Zebra

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Bar Codes and QR Codes | GET | `/zebra` | `conn_mod_def::GLusyvs0L68::cGdE9HqWRLeR_4g6Wm9f6g` |

## When a call fails

The error comes from Api2Pdf, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/api-2-pdf

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
