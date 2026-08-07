## Features
- **Projects** — group clients & jobs into separate projects
- **Clients** — add/rename/delete with cascade job delete
- **Full job CRUD** — No, Worker, Due, Song/Job Title, On Working, Song/Source Link, Post Status, Post Link, Paid Status, Price/Vid, Worker Paid, Note
- **Dashboard meters** — total jobs, % posted, revenue collected/pending, worker paid/pending (scoped to active client selection)
- **Search + filters** — worker, due, post status, paid status, worker paid, month/year, sort
- **Multi-language** — Indonesian (default), English, Malay, Japanese (via Settings)
- **Full cloud storage** — ALL data lives in Firebase Cloud Firestore (`users/{uid}`). No localStorage. Login is required. Same account on any device = same data.
- **Worker links** — shareable link per worker; worker can open it WITHOUT login and submit links / mark done (reads the owner's Firestore doc)
- **Context menu** — right-click on jobs/clients/projects/empty area. Adapts to selection. Flips at viewport edges
- **Undo/Redo** — 20-level history stack
- **Clipboard** — cut/copy/paste/duplicate jobs across clients
- **Import CSV** — always creates a new project. 3-choice modal if data exists
- **Export CSV** — current project or all projects
- **Inline prompt** — custom modal replaces browser `prompt()` for naming projects/clients
- Dark theme, skeleton loading, toasts, modal animations, reduced-motion safe

## Running
Open `index.html` directly (login screen appears). Requires a Firebase project — see setup below.

## Storage
Every account's data is stored in Firestore at `users/{uid}`. Nothing is kept in localStorage. Changes are auto-saved (debounced ~1.2s) and synced instantly to any device logged in with the same account. Settings (language/currency) and sort order are stored in the same document.

## Firebase Setup (new project)
1. Create a Firebase project at https://console.firebase.google.com
2. Enable **Authentication** → Sign-in method → Email/Password
3. Enable **Firestore Database** (production mode)
4. Register a Web App and copy its config into `web-app/firebase-config.js`
5. Set the project ID in `firebase.json` / `.firebaserc`
6. Deploy: `firebase deploy` (hosting + firestore rules + optional functions)
