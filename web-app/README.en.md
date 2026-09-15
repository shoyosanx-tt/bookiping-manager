# Ads Manager — Features & Usage Guide

> Versi bahasa Indonesia: [README.md](README.md)

Ads Manager is a **web-based job tracker** for managing ad job orders per client/worker — from track data, source links, posting status, payments, to uploaded draft video results. All data is stored **automatically in the cloud (Firebase)** and can be accessed from any device with the same account.

---

## Quick Start

1. Open the app → the **login** screen appears.
2. Sign in with **email & password** (create a new account if you don't have one).
3. After signing in, click **Project** in the sidebar, then **+ New Project** to get started.
4. Data is auto-saved to the cloud — no manual save button needed.

> All data is stored in **Firebase Cloud Firestore** (1 account = 1 database). Nothing is kept in device localStorage, so switching phones/browsers is fine as long as you sign in with the same account.

---

## 1. Sidebar (Main Menu)

The left sidebar has 4 views:

| Icon | View | Purpose |
|------|------|---------|
| **Project** | Projects | Manage work groups/projects (create, select, rename, delete, export) |
| **Client** | Clients | List of clients/jobs per project; click to select |
| **Worker** | Workers | List of workers; opens a dedicated worker panel |
| **Noted** | Noted | Shows all jobs that have a note |

- The toggle button at the bottom **collapses / expands** the sidebar.
- The client list is auto-sorted from the **most recently active** first.

---

## 2. Projects

A project is a container that groups clients & jobs.

- **New Project** — create a new empty project (give it a name).
- **Open Project** — choose the project you want to work on.
- **Rename / Delete** — edit the name or delete a project (deleting removes all data inside it).
- **Import** — import a CSV file as a new project.
- **Export** — export data to a CSV file (active project or all projects).
- In the sidebar, the **"All Jobs"** item shows the total job count in the active project.

---

## 3. Clients

A client holds a collection of jobs.

- **Add Client** — via the button below the client list.
- **Select single** — click the client name.
- **Select multiple** — `Shift` + click for a range, `Ctrl/Cmd` + click to pick individually. You can then bulk-change status/batch for several clients at once.
- **Edit** — click the pencil icon next to the client name (rename).
- **Delete** — via the right-click menu; deleting a client removes all its jobs.
- Each client shows its job count next to its name.

---

## 4. Jobs

### Creating a Job
Use the **+ New Job** button in the top bar (or the right-click menu). Fill in the form:

- **Batch** — grouping for jobs (e.g., Batch 1)
- **No / Client / Title** — sequence number, client name, song/job title
- **Worker** + quantity (Qty)
- **Deadline** — due date
- **Price / Currency / Paid Status**
- **Source Link** — track source link
- **Work note & client note**

### Table Columns & Statuses
| Column | Usage |
|--------|-------|
| **No, Client, Song/Job Title** | Job identity; the title auto-marquee shows its note |
| **Song/Source Link** | Button to open the source link |
| **Deadline** | Due date |
| **On Working** | Green dot — click to mark in-progress / done |
| **Post Status** | Click the badge to cycle: NOT YET → partial → POSTED |
| **Post Link** | Button to add/edit the posting result link |
| **Worker (select)** | Assign a different worker via dropdown |
| **Worker Qty** | Number of jobs per worker |
| **Worker Paid** | Click to mark paid / unpaid |
| **Worker Note** | Icon/click to write a note for the worker |
| **Actions** | Draft video upload button + edit button |

### Editing a Job
- Click the **pencil** icon in the job row, or double-click the row.
- **Duplicate** — from the right-click menu, create a copy of the job.

---

## 5. Upload Draft Video (per Job)

Every job has a **draft video upload** button (film icon) in the rightmost action column.

1. Click the film icon → the **Draft Video** window appears.
2. Click **Upload Draft** → choose a video file (MP4, WebM, MOV, AVI, MKV, M4V).
3. The video is uploaded to **Gofile** and saved as `job.draftVideo` in the cloud.
4. When a draft exists, the button turns **blinking green** — a sign the draft is ready.
5. In the draft window you can **Download**, **Replace**, or **Delete** the video.

> Gofile storage note: free accounts keep files ~10 days, renewed whenever someone downloads; videos with no downloads may expire. Use Gofile Premium for permanent storage. Your primary data stays safe in Firestore.

---

## 6. Workers & Shareable Links

The **Worker** view in the sidebar lists all workers.

- **Worker Link** — each worker has a dedicated link that can be **shared WITHOUT login**.
- Workers who open the link can directly:
  - **Mark done**
  - **Submit source/result links**
  - **Upload job videos** (uploaded to Gofile, saved under the job's `workerUploads`)
- The link only reads/fills the account owner's job data — no account needed.
- Open a worker's detail panel to see all their jobs.

---

## 7. Dashboard Meters (Summary)

At the top of the table an automatic summary appears that **follows your selection** (selected clients):

- **Total Jobs**
- **% Posted**
- **Revenue Collected / Pending**
- **Worker Paid: Paid / Pending**

---

## 8. Search, Filters & Sorting

The control bar above the table:

- **Search** — search by title, client name, note, etc.
- **Worker filter** — show jobs of a specific worker.
- **Deadline filter** — overdue / not yet / done.
- **Post status filter** — NOT YET / partial / POSTED.
- **Paid status filter** — paid / unpaid.
- **Worker paid filter** — paid / unpaid workers.
- **Month & Year filter** — view jobs per month/year.
- **Sort** — Most Urgent (deadline), **Newest** (default), Oldest, A–Z, Z–A, Custom (manual order).

---

## 9. Batches & Bulk Actions

- **Add Batch** — select several jobs then group them into one batch.
- Colored batch headers show their batch name.
- **Bulk Price Edit / Bulk Mark Paid** — change statuses for many jobs at once via the right-click menu or batch buttons.
- **Client Report** — view a summary per client in one screen.

---

## 10. Right-Click (Context Menu)

The right-click menu **adapts** to what you click:

- **On a job** — Edit, Duplicate, Copy, Cut, Paste, Delete, toggle batch, status, etc.
- **On a client/project** — rename, delete, export.
- **On empty space** — new job, expand all, reset, etc.
- The menu **auto-flips** near the screen edges so it never gets cut off.

---

## 11. Undo / Redo

- **Ctrl+Z** — undo the last change.
- **Ctrl+Y / Ctrl+Shift+Z** — redo.
- Supports up to **20 levels of history**.

---

## 12. Clipboard (Copy/Paste Jobs)

- **Ctrl+X / Ctrl+C / Ctrl+V** work inside the table to **move/copy jobs** across clients.
- Or use the right-click menu: **Cut, Copy, Paste, Duplicate**.

---

## 13. Import & Export CSV

- **Import CSV** — always creates a **new project**; if data already exists you'll get 3 choices (open as new project / merge / cancel). A sample format is provided in the import guide.
- **Export CSV** — saves the active project or all projects to a `.csv` file (opens in Excel/Sheets).
- The "All Projects" option appears when there is more than 1 project.

---

## 14. Settings

Opened via the gear icon:

- **Language** — Indonesia (default), English, Melayu, Japanese.
- **Currency** — currency for prices & payments.
- **Theme** — dark / light (auto-follows system).
- **Upload Provider** — video upload service settings (default Gofile).
- Settings are auto-saved to the cloud per account.

### Others
- **Currency toggle button** (money icon) in the top bar — show/hide money values.
- **Theme toggle** in the top bar — quick dark/light switch.
- **Sync status** — indicator of when data is saved to the cloud.

---

## 15. Security & Storage

- **Login required** — each account only sees its own data (Firebase Authentication + Firestore Security Rules).
- **Realtime** — changes sync instantly across devices.
- **Auto-save** — data saves automatically (~1.2s after you stop typing), plus Undo/Redo history.
- **No localStorage** — everything lives in the cloud.
- Use the **password reset link** on the login page if you forget your password.

---

## Quick Tips

- Your latest data is always safe in the cloud — no manual backups needed.
- Share the **worker link** so your workers can fill in / mark done / upload videos without an account.
- Use **batches** for grouped jobs; edit price/payment status all at once.
- Occasionally download draft videos so the Gofile storage period stays active.