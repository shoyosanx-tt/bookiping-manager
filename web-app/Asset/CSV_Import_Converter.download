---
name: notes-to-csv-import
description: Convert any messy note/tracking file (Excel/spreadsheet, Notepad/txt, Markdown, screenshot/image of a table, chat log, PDF, etc.) into the strict "template-import.csv" job-tracking schema.
---

# Notes → CSV Import Converter

Convert any source (Excel, Notepad, Markdown, image of a table, chat log, PDF, etc.) into CSV rows that are **100% compliant with the template schema**, without fabricating data.

## Core Principles (non-negotiable)

1. **The template is the contract.** Always re-read `template-import.csv` (header + sample rows) at the start of every conversion — do NOT rely on memory from previous sessions, as the template may change.
2. **Never fabricate data.** Fields that are missing / unclear in the source → leave empty (empty string), do NOT guess. Better empty and honest than filled but wrong.
3. **Understand the pattern first, then convert.** Before writing a single CSV row, complete the ANALYSIS phase (below) until you can explain the source data pattern to the user in one paragraph. If you cannot explain the pattern, you are not ready to convert.
4. **Every ambiguous mapping decision must be documented**, either to the user or as a note in the output (e.g. in the Worker Note column or in a summary message), so the user can correct it.
5. **Validate before delivering**: the output row count must be explainable (how many rows were skipped and why), and a manual spot-check (5–10 random rows) must match the source 1:1.

## Phase 0 — When the final target is an APPLICATION (not just "CSV" in general)

If the user mentions/sends a target application (web app, mobile app, spreadsheet tool, etc.) that will READ the resulting CSV, do not rely solely on `template-import.csv` as the contract — **the application's source code itself is a more authoritative contract**. Do this BEFORE converting:

1. **Read the importer/parser code of that application directly** (e.g. find `parseCsvText`/`import`/`CSV_HEADERS` function in the JS/source files). Note exactly: column order searched, header names matched (lowercased), default values for each field when empty, and parsing rules (regex, uppercase/lowercase, number parsing, etc.). Do not guess from field names alone — similar field names do not guarantee the same value format/conventions.
2. **Also read its EXPORT function** if available (the function that produces CSV from internal application data) — this is the MOST authoritative form of "what correct data looks like" because it was written by the app's developer.
3. **If the user provides an actual export file from that application, treat it as ground truth**, not just a rough reference. Compare every column of your conversion against the real patterns in that file:
   - Date format EXACTLY (e.g. `YYYY-MM-DD` vs `M/D/YYYY` — easy to guess wrong, do NOT assume from template examples if real ground truth from the app exists).
   - Fields that are ALWAYS empty or ALWAYS contain a specific default in the real app (e.g. a "working" toggle that is always empty in real data because it's a manual status managed inside the app, not historical data) — do not force-fill such fields just because the old source has a similarly-named column.
   - Number conventions (2 decimals? separate currency column?), text status conventions (all uppercase? default when empty?).
   - **Entity names (client/category/etc.) already used by the user in the application** — if the ground truth shows standardized/normalized naming, while the source data has many spelling variations for the same entity (typos, different capitalization, extra labels), this is where **name normalization/deduplication** work is needed, not just column mapping. See sub-section below.
4. **After conversion, VALIDATE by re-running the actual application parser** (e.g. run the importer function via Node.js against the CSV you produced) to ensure the result is parsed as expected (correct number of clients/records, no fields falling into unwanted defaults). This is far more reliable than just visually re-reading the CSV.

### Entity name normalization (client/category/etc.) across sources

If there are multiple source files (or one file with many sheets/sections) that record the same entity with different spellings (typos, ALL CAPS vs lowercase, extra account/label suffixes):

- First group all raw variations by a normalized key (lowercase, strip spaces/symbols) to catch obvious duplicates (different case/spacing only) — these can be safely auto-merged.
- For variations that differ by a clear TYPO (e.g. "coocked" vs "cooked") or where a standardized name exists from application ground truth — create an explicit alias map and merge, BUT preserve any lost information (e.g. discarded account labels) in `Worker Note` so nothing is lost entirely.
- For variations that are STILL AMBIGUOUS (e.g. "Management", "Management Anime Account", "Management Mozzciz Pop" — could be 3 different entities, could be 1) — do NOT auto-merge. Leave them as separate entities, and report to the user as a list of "possible duplicates, needs manual check" so they can merge via the app's rename feature (if available).
- Always produce a mapping report (final name ← list of raw variations merged) as a separate attachment, so the user can audit the merging decisions.

## Required Columns (order MUST be exact)

`Project, Client, No, Worker, Deadline, Song/Job Title, On Working, Song/Source Link, Post Status, Post Link, Paid Status, Price/Vid, Currency, Worker Paid, Worker Fee, Worker Fee Currency, Worker Note`

**Project column**: Optional — if absent or empty, all rows are imported into a single project named "Imported". If present, rows are grouped by project name and each group becomes a separate project in the app. Use the same project name for rows belonging to the same project. Leave empty when converting a single project's data.

Value conventions (take actual examples from template sample rows, do not assume):
- Boolean-ish statuses (On Working / Post Status / Paid Status / Worker Paid) typically use explicit text like `YES`/empty, `POSTED`/`NOT YET`, `PAID`/`NOT YET` — **match the actual values used in the template sample rows**, do not use raw TRUE/FALSE.
- Numbers (Price/Vid, Worker Fee) are plain without currency symbols; currency goes in the separate Currency / Worker Fee Currency column.
- Deadline uses `YYYY-MM-DD` format if the source has a valid original date.

## Phase 1 — SOURCE ANALYSIS (required, before writing any code/CSV)

For any file type, explicitly answer these questions first:

- **File shape**: 1 consistent sheet? multiple sheets (per month/per client)? freeform text? image of a table? chat log?
- **Unit of one job row**: what defines "one job/video/song" in this source?
- **Header/group vs data row**: are there rows/labels that are actually HEADER GROUPS (e.g. client name written once, applying to several rows below / merged cells), not real data rows? If yes → needs forward-fill strategy for that column (usually Client, sometimes Price/Vid).
- **Hidden legend/codes**: do TRUE/FALSE, checkboxes, cell colors, or symbols (`-`, `✔`) carry status meaning? Check for a "Command"/"Legend"/notes sheet if present — do not guess blindly.
- **Columns with no template equivalent** (e.g. "Character", extra comment columns): do not discard — put into `Worker Note` with a brief label, or ask the user if significant.
- **Template columns with NO source equivalent**: leave empty. Do not fill with values from other template columns just because the position looks similar.
- **Empty/placeholder rows** (slots for jobs not yet filled): decide whether these are real data rows (skip) or truly represent "no job yet" (skip too, unless user asks to keep empty rows).

If after analysis there is still major ambiguity that could affect many rows (e.g. a "Due" column that constantly contains "DONE" text instead of actual dates) — **report to the user, do not silently guess**, then proceed with the safest assumption (usually: leave empty).

## Phase 2 — Create a Mapping Table

Before generating CSV, write an explicit mapping: `source column → template column`, including value transformations (boolean→status text, forward-fill, etc.). Essential for large files / multiple sheets to ensure consistency across all sections.

## Phase 3 — Convert

- For structured files (xlsx/csv): use Python (openpyxl/pandas) and check `merged_cells` to detect client/header groups.
- For unstructured files (txt/md/chat log/image): read the full content first (OCR/vision for images), then identify records one by one before assembling CSV rows — do not naively split by line.
- Write output as valid CSV (comma delimiter, quote fields containing commas), header exactly matching the template, column order the same.
- If the source has multiple sheets/sections (e.g. per month), merge all into a single CSV output, and add an origin marker (e.g. in Worker Note: `[Source: January 2026]`) ONLY if useful for audit — remove/clean up if the user does not want extra notes attached.

## Phase 4 — Validation & User Report

After conversion, always briefly report to the user:
- Number of rows successfully converted (and from how many sheets/sections if relevant).
- Rows/sections skipped and why (empty header groups, placeholder blanks, etc.).
- Template columns that had to be left empty because the source had no data (name the columns), so the user knows and can fill manually if needed.
- Non-trivial assumptions made (e.g. "I left the Due column empty because it only contained the text 'DONE', not an actual date").

## Implementation Notes (Excel-specific) — CRITICAL, especially for Deadline/dates

The Deadline field is most often "lost" or wrong not because the data is absent, but because it is **hidden**: through cross-sheet formulas, through sheet names, or through inconsistent user date-writing habits. Never conclude "this column is empty" just from `data_only=True` — that only shows FORMULA RESULTS, not the original formula source.

1. **Load the workbook TWICE**: once with `data_only=False` (to see raw formulas as strings like `=...`) and once with `data_only=True` (for calculated values). Compare both, especially in columns related to dates/statuses.
2. **Scan ALL sheets for formulas**, not just visually relevant sheets. Find cells whose string starts with `=`. If you find a formula like `=Command!F3` or `=OtherSheet!X5`, it means sheets are interconnected — trace to the source sheet, do NOT just use the resulting value if it turns out to be a derived status text (e.g. a formula that converts a date into "DONE"/countdown after due date — take the RAW date from the source sheet, not the "DONE" result).
   - Common pattern: a formula points to another column relative to the referenced column (e.g. the original date column = referenced column − 1). Verify this pattern by checking headers around the referenced cell, do not assume.
   - Such formulas may differ per block/client (inconsistent drag-fill) — do not assume one pattern applies to the entire sheet; **parse formulas per row/per cell**, since the formula itself tells you the correct coordinates for that row.
3. **Check every sheet name** — sheet names often carry context (month/year/client/category) used to complete the data in its rows. If a date column contains only numbers 1–31, suspect these are "day-of-month" values that must be combined with month/year from the SHEET NAME (e.g. sheet "AUGUST 2025" + cell value `26` → 26 August 2025). Build a month name mapping (English & Indonesian) for parsing.
4. **A single column can contain mixed data types** because it was manually typed over time: sometimes native date objects, sometimes just day numbers, sometimes full date text ("SATURDAY 10 JANUARY 2026" — use regex to extract pattern `\d{1,2}\s+[A-Za-z]+\s+\d{4}`), sometimes not a date at all but a stray status text that ended up in this column (e.g. "ALREADY SENT", "PAID"). In the latter case: do NOT force it into a date — move it to `Worker Note` as an original note, and leave Deadline empty.
5. Check `ws.merged_cells.ranges` for Client/grouping columns — the group value is in the first row of the range, other rows must be forward-filled from that value.
6. Check additional sheets like "Command"/"Legend"/"Projects Taken" for the meaning of TRUE/FALSE and for possible lookup tables of dates/prices that serve as data sources for other sheets.
7. After completion, **report the Deadline fill rate** to the user (e.g. "342/359 rows got actual dates from the Command sheet; 17 rows genuinely had no recorded date in the source file") — so the user knows the difference between "empty because there was no data" vs "empty because tracing failed".

## For non-Excel files (Word/.docx, Notepad/.txt, Markdown, PDF, image of a table, chat log)

- **Read the file in full first**, do not process line-by-line or in chunks without context. For long documents, read the entire thing before starting to map — the structural pattern (e.g. "1 record = 1 paragraph" or "1 record = 1 line in a table") only becomes clear after seeing the whole document, not just the beginning.
- Look for **context that applies to many rows at once** (e.g. section headings indicating client name or month — same treatment as Excel sheet names): forward-fill/merge into each row below until the next heading.
- For images/screenshots of tables: read the visual as carefully as possible (including small text/watermarks/dates in corners) before assembling data rows — do not guess blurred cells, flag them as needing user verification if truly unreadable.
- For chat logs: one "record" is usually spread across multiple consecutive messages (e.g. someone sends a link first, then replies with the price) — group related messages before treating as one data row, do not assume each chat line = one CSV row.
- The same principles from the Excel section still apply: fields genuinely missing from the source → leave empty, do not guess; ambiguous fields → preserve as original note in `Worker Note` and report to the user.
