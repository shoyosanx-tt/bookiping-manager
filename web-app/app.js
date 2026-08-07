(function () {
  "use strict";

  const CURRENCIES = {
    USD: { sym: "$", code: "USD", name: "US Dollar" },
    EUR: { sym: "\u20AC", code: "EUR", name: "Euro" },
    GBP: { sym: "\u00A3", code: "GBP", name: "Pound Sterling" },
    JPY: { sym: "\u00A5", code: "JPY", name: "Japanese Yen" },
    IDR: { sym: "Rp", code: "IDR", name: "Rupiah" },
    SGD: { sym: "S$", code: "SGD", name: "Singapore Dollar" },
    MYR: { sym: "RM", code: "MYR", name: "Malaysian Ringgit" },
    PHP: { sym: "\u20B1", code: "PHP", name: "Philippine Peso" },
    KRW: { sym: "\u20A9", code: "KRW", name: "South Korean Won" },
    CNY: { sym: "\u00A5", code: "CNY", name: "Chinese Yuan" },
  };
  const CURRENCY_CODES = Object.keys(CURRENCIES);

  // i18n
  const LANG = {
    id: {
      tagline: "Job tracker untuk posting",
      clients: "Clients", import: "Import", export: "Export", newJob: "Job Baru",
      addClient: "Tambah client", settings: "Pengaturan", language: "Bahasa / Language",
      dashboardCurrency: "Mata Uang Dashboard", save: "Simpan",
      all: "Semua", allClient: "Semua Client", multipleClients: "Multiple Client", month: "Bulan",
      worker: "Worker", noted: "Noted", noNotes: "Belum ada note", toggleTheme: "Mode terang/gelap", theme: "Tema", due: "Deadline", post: "Post", paid: "Paid", workerPaid: "Worker Paid", workerNote: "Worker Note", workerNotePh: "Catatan untuk worker\u2026",
      allWorker: "Semua Worker", allDue: "Semua Deadline", allPost: "Semua Post Status",
      allPaid: "Semua Paid Status", allWorkerPaid: "Semua Worker Paid",
      totalJob: "Total Job", deadlineOverdue: "deadline terlewat",
      posted: "Posted", postedPct: "% terpost",
      revenueCollected: "Revenue Diterima", fromClient: "dari client \u00B7 PAID",
      revenuePending: "Revenue Pending", notBilled: "belum ditagih/dibayar",
      workerPaidLabel: "Worker Terbayar", workerPaidSub: "sudah dibayarkan",
      workerPendingLabel: "Worker Pending", workerPendingSub: "belum dibayar",
      noClient: "Belum ada client", noClientDesc: "Tambahkan client pertama untuk mulai melacak job sound.",
      addClientBtn: "+ Tambah Client",
      noMatch: "Tidak ada job yang cocok", noMatchDesc: "Coba ubah pencarian atau filter, atau tambahkan job baru.",
      newJobBtn: "+ Job Baru",
      editJob: "Edit Job", newJobTitle: "Job Baru", dupJob: "Job Baru (Duplikat)",
      deleteJob: "Hapus", cancel: "Batal", saveJob: "Simpan Job",
      newClient: "Client Baru", editClient: "Edit Client", deleteClient: "Hapus Client",
      saveClient: "Simpan Client",

      workerFee: "Worker Fee",
      searchPlaceholder: "Cari lagu, worker, atau client\u2026",
      copied: "Copied", cut: "Cut", selectJobFirst: "Pilih job dulu (klik baris)",
      pickClient: "Pilih client terlebih dahulu", jobUpdated: "Job berhasil diperbarui",
      jobAdded: "Job baru ditambahkan", jobDeleted: "Job dihapus",
      clientUpdated: "Client diperbarui", clientAdded: "Client ditambahkan",
      clientDeleted: "Client dihapus", addClientFirst: "Tambahkan client dulu sebelum membuat job",
      csvExported: "CSV berhasil diexport", csvImported: "Import selesai",
      csvFailed: "Import gagal \u2014 periksa format CSV",
      replaceAll: "Ganti Semua",
      newProject: "Project Baru",
      newProjectBtn: "Buat Project Lain",
      projects: "Projects", allProject: "Semua Project", thisProject: "Project Ini",
      editProject: "Edit Project",
      saveProject: "Simpan Project",
      projectName: "Nama Project",
      projectNameRequired: "Nama project wajib diisi.",
      accountLinks: "Account Links",
      tiktok: "TikTok",
      instagram: "Instagram",
      close: "Tutup",
      rename: "Rename",
      delete: "Hapus",
      switchProject: "Ganti project",
      cantDeleteLastProject: "Tidak bisa hapus project terakhir",
      importDataExists: "Data sudah ada. Import sebagai project baru atau ganti project saat ini?",
      clipboardFail: "Gagal baca clipboard", clipboardBad: "Clipboard bukan format job",
      pasted: "Job ditempel",
      nothingToUndo: "Tidak ada yang bisa di-undo", nothingToRedo: "Tidak ada yang bisa di-redo",
      confirmDeleteJob: "Hapus job ini? Tindakan tidak bisa dibatalkan.",
      confirmDeleteClient: 'Hapus client "{name}" beserta {count} job di dalamnya? Tindakan tidak bisa dibatalkan.',
      confirmDeleteMultiple: 'Hapus {count} client? Tindakan tidak bisa dibatalkan.',
      moveTo: "Pindah ke Client...", moved: "Job dipindahkan",
      notYet: "NOT YET", coming: "COMING", overdue: "OVERDUE",
      hDay: "H-", telat: "Telat", hr: "hr",
      sound: "Sound", postLinkLabel: "Post",
      no: "No", client: "Client", clientNote: "Client / Note Pekerja",       songTitle: "Song/Job Title", working: "Status",
      songLink: "Song/Source Link", postStatus: "Post Status", postLink: "Post Link",
      price: "Price", on: "On", note: "Note",
      sortDefault: "Urut", newest: "Terbaru", oldest: "Terlama", az: "A-Z", za: "Z-A", custom: "Urut Sendiri", sortUrgent: "Prioritas", selected: "dipilih",
      job: "job", allJobs: "Semua Job",
      copy: "Copy", paste: "Paste", duplicate: "Duplikat", changeProject: "Project Lain", importCsv: "Import CSV", exportCsv: "Export CSV",
      undo: "Undo", redo: "Redo", saved: "Tersimpan", loadedFile: "Data dimuat dari file",
      syncSaving: "Menyimpan…", syncSaved: "Tersimpan ✓", syncError: "Gagal sinkron", realtime: "sinkron otomatis",
      selectCsvFile: "Pilih File CSV", convertDocToCsv: "Konversi Dokumen ke CSV",
      converterGuideTitle: "Konversi Dokumen ke CSV",
      converterStep1: "Buka Claude AI (klik tombol di bawah)",
      converterStep2: "Upload file catatan (Excel/Notepad/chat) atau screenshot tabel",
      converterStep3: "Download template CSV & prompt converter di bawah, salin/sertakan ke Claude",
      converterStep4: "Claude akan generate file CSV \u2192 download & import di sini",
      openClaude: "Buka Claude AI", downloadTemplate: "Download Template CSV", downloadConverter: "Download Prompt/Skill Converter",
      haveCsvFile: "Sudah punya file CSV?", selectFile: "Pilih File CSV",
      storageInfoTitle: "Penyimpanan Data", storageInfoDesc: '<b>Semua data tersimpan otomatis di Firebase Cloud (Firestore)</b> per akun login.\n\n<b>Sync:</b> login dengan akun yang sama di device/browser lain \u2192 data langsung muncul.\n\n<b>Pindah PC:</b> login lalu Export/Import CSV.',
      gotIt: "Mengerti",
      pricePerVid: "Price/Vid", paidStatus: "Paid Status", workerNote: "Worker Note", clientNameLabel: "Nama Client",
      note: "Note",
      editPrice: "Edit Harga", editPricePrompt: "Harga total batch (mis. ada bonus dari client):",
      promptProjectName: "Nama project:", promptNewClient: "Nama client baru:", promptNewProject: "Nama project baru:",
      storageDir: "Folder Penyimpanan",
      pickFolder: "Pilih Folder",
      orContinue: "atau lanjut tanpa akun",
      welcomeDesc: "Belum ada data. Mulai dengan membuat job baru atau import dari CSV.",
      shortcuts: '<div class="shortcut-ref"><h3>Pintasan Keyboard</h3><table><tr><td><kbd>Ctrl+S</kbd></td><td>Simpan</td></tr><tr><td><kbd>Ctrl+Z</kbd></td><td>Undo</td></tr><tr><td><kbd>Ctrl+Y</kbd> / <kbd>Ctrl+Shift+Z</kbd></td><td>Redo</td></tr><tr><td><kbd>Ctrl+C</kbd></td><td>Salin job terpilih</td></tr><tr><td><kbd>Ctrl+X</kbd></td><td>Potong job terpilih</td></tr><tr><td><kbd>Ctrl+V</kbd></td><td>Tempel job</td></tr><tr><td><kbd>Ctrl+D</kbd></td><td>Duplikat job terpilih</td></tr><tr><td><kbd>Del</kbd></td><td>Hapus job/client terpilih</td></tr><tr><td><kbd>F2</kbd></td><td>Edit langsung nama job/client</td></tr><tr><td><kbd>Shift</kbd>+Klik</td><td>Pilih rentang job/client</td></tr><tr><td><kbd>Ctrl</kbd>+Klik</td><td>Toggle pilih job/client</td></tr></table></div>',
      project: "Project", setting: "Setting", profile: "Profile", toggleSidebar: "Toggle sidebar", toggleMoney: "Toggle amounts",
      invalidFile: "File tidak valid", storageSaved: "Folder penyimpanan tersimpan",
      storageAccessFail: "Tidak dapat mengakses folder", storageRemoved: "Folder penyimpanan dihapus",
      resetConfirm: "Hapus SEMUA data akun ini dari Firebase? Tidak bisa dibatalkan. Lanjutkan?",
      enterSong: "Masukkan minimal satu lagu", exportData: "Export data?",
      song: "Lagu", link: "Link", links: "Links", addLinks: "+ Links", qty: "Qty",
      jobQty: "Job Qty", wkQty: "WK Qty", linksSent: "Link Terkirim", status: "Status",
      done: "Selesai", pending: "Pending", noTasks: "Tidak ada tugas", viewLinks: "Lihat Link",
      noWorkers: "Belum ada worker", copyLinkTitle: "Salin link worker", workerLinkCopied: "Link worker disalin!",
      workerName: "Nama worker", newWorker: "Worker Baru", confirmDeleteWorker: 'Hapus worker "{name}"?',
      deleteWorker: "Hapus Worker", postedLinks: "Posted Links", noLinksPosted: "Belum ada link dipost",
      copyAll: "Salin Semua", notSent: "belum terkirim", sent: "terkirim",
      jobNotFound: "Job tidak ditemukan", noLinksYet: "Belum ada link", untitled: "Tanpa judul",
      linkPost: "Link Post", add: "Tambah", noBatch: "(tanpa batch)",
      hello: "Halo", pendingTask: "tugas tertunda", pendingTasks: "tugas tertunda",
      allTasksDone: "Semua tugas selesai!", target: "Target", openAudio: "Buka Audio",
      send: "Kirim", markComplete: "Tandai Selesai", completed: "Selesai", refresh: "Muat Ulang",
      sendFailed: "Gagal mengirim. Coba lagi.", markedComplete: "Ditandai selesai!",
      markFailed: "Gagal. Coba lagi.", tryAgain: "Coba Lagi",
      workerDataNotAvailable: "Data worker tidak tersedia. Pastikan admin sudah menyimpan data ke Firebase dan link yang Anda gunakan benar.",
      workerLinkNeedLogin: "Login/Register dulu untuk membuat link worker.",
      workerViewNoCloud: "Admin belum menyimpan data ke cloud. Minta admin untuk login & menyimpan data, lalu coba lagi.",
      workerViewNoInternet: "Tidak dapat terhubung ke Firebase. Periksa koneksi internet, lalu coba lagi.",
      workerViewNoTasksYet: "Belum ada tugas untuk kamu. Tunggu admin memberikan tugas.",
      contactUs: "Hubungi Kami",       resetCloudData: "Reset Data (Hapus Semua Data Cloud)", cloudResetNote: "Menghapus seluruh data akun ini di Firestore. Semua device yang memakai akun ini akan mulai dari kosong.",
      cloudSafeNote: "Data di cloud tidak terpengaruh. Cocok untuk yg sudah login & datanya aman di cloud.",
      login: "Masuk", register: "Daftar", email: "Email", password: "Kata Sandi",
      forgotPassword: "Lupa kata sandi?", continueAsGuest: "Lanjut sebagai Tamu",
      backToLogin: "Kembali ke Login", guest: "Tamu", user: "Pengguna", account: "Akun",
      logout: "Keluar", loginRegister: "Login / Register",
      guestModeLabel: "Mode tamu \u2014", guestModeSuffix: "untuk menyimpan data permanen",
      firebaseNotConnected: "Firebase tidak terhubung. Periksa internet Anda.",
      fillAllFields: "Isi semua kolom.", passwordMin6: "Kata sandi minimal 6 karakter.",
      enterEmailFirst: "Masukkan email Anda dulu.", resetEmailSent: "Email reset kata sandi terkirim! Periksa inbox Anda.",
      songJobTitle: "Song/Job Title", addSong: "+ Add Song", batch: "Batch", batchPlaceholder: "mis. Batch 1",
      remove: "Hapus", songTitlePlaceholder: "Judul lagu", audioLinkPlaceholder: "Link audio https://...",
      none: "-- Tidak Ada --", min6Chars: "Min 6 karakter", clientNamePh: "Nama client / brand",
      clientAdReport: "Laporan Ad Client", addBatch: "Tambah Batch", addBatchPrompt: "Nama Batch", batchDiffClient: "Ada job yang berbeda client!", added: "ditambahkan", welcomeTitle: "Selamat Datang",
    },
    en: {
      tagline: "Job tracker for posting",
      clients: "Clients", import: "Import", export: "Export", newJob: "New Job",
      addClient: "Add client", settings: "Settings", language: "Language",
      dashboardCurrency: "Dashboard Currency", save: "Save",
      all: "All", allClient: "All Clients", multipleClients: "Multiple Clients", month: "Month",
      worker: "Worker", noted: "Noted", noNotes: "No notes yet", toggleTheme: "Light/dark mode", theme: "Theme", due: "Deadline", post: "Post", paid: "Paid", workerPaid: "Worker Paid", workerNote: "Worker Note", workerNotePh: "Note for the worker\u2026",
      allWorker: "All Workers", allDue: "All Deadlines", allPost: "All Post Status",
      allPaid: "All Paid Status", allWorkerPaid: "All Worker Paid",
      totalJob: "Total Jobs", deadlineOverdue: "deadlines overdue",
      posted: "Posted", postedPct: "% posted",
      revenueCollected: "Revenue Collected", fromClient: "from client · PAID",
      revenuePending: "Revenue Pending", notBilled: "not billed/paid",
      workerPaidLabel: "Worker Paid", workerPaidSub: "already paid",
      workerPendingLabel: "Worker Pending", workerPendingSub: "not yet paid",
      noClient: "No clients yet", noClientDesc: "Add your first client to start tracking sound jobs.",
      addClientBtn: "+ Add Client",
      noMatch: "No matching jobs", noMatchDesc: "Try changing search or filters, or add a new job.",
      newJobBtn: "+ New Job",
      editJob: "Edit Job", newJobTitle: "New Job", dupJob: "New Job (Duplicate)",
      deleteJob: "Delete", cancel: "Cancel", saveJob: "Save Job",
      newClient: "New Client", editClient: "Edit Client", deleteClient: "Delete Client",
      saveClient: "Save Client",

      workerFee: "Worker Fee",
      searchPlaceholder: "Search songs, workers, or clients\u2026",
      copied: "Copied", cut: "Cut", selectJobFirst: "Select a job first (click row)",
      pickClient: "Select a client first", jobUpdated: "Job updated",
      jobAdded: "Job added", jobDeleted: "Job deleted",
      clientUpdated: "Client updated", clientAdded: "Client added",
      clientDeleted: "Client deleted", addClientFirst: "Add a client first before creating a job",
      csvExported: "CSV exported", csvImported: "Import successful",
      csvFailed: "Import failed \u2014 check CSV format",
      replaceAll: "Replace All",
      newProject: "New Project",
      newProjectBtn: "Create Another Project",
      projects: "Projects", allProject: "All Projects", thisProject: "This Project",
      editProject: "Edit Project",
      saveProject: "Save Project",
      projectName: "Project Name",
      projectNameRequired: "Project name is required.",
      accountLinks: "Account Links",
      tiktok: "TikTok",
      instagram: "Instagram",
      close: "Close",
      rename: "Rename",
      delete: "Delete",
      switchProject: "Switch project",
      cantDeleteLastProject: "Cannot delete the last project",
      importDataExists: "Data already exists. Import as new project or replace current project?",
      clipboardFail: "Failed to read clipboard", clipboardBad: "Clipboard is not a job format",
      pasted: "Jobs pasted",
      nothingToUndo: "Nothing to undo", nothingToRedo: "Nothing to redo",
      confirmDeleteJob: "Delete this job? This cannot be undone.",
      confirmDeleteClient: 'Delete client "{name}" with {count} jobs? This cannot be undone.',
      confirmDeleteMultiple: 'Delete {count} clients? This cannot be undone.',
      moveTo: "Move to Client...", moved: "Jobs moved",
      notYet: "NOT YET", coming: "COMING", overdue: "OVERDUE",
      hDay: "D-", telat: "Late", hr: "d",
      sound: "Sound", postLinkLabel: "Post",
      no: "No", client: "Client", clientNote: "Client / Worker Note",       songTitle: "Song/Job Title", working: "Status",
      songLink: "Song/Source Link", postStatus: "Post Status", postLink: "Post Link",
      price: "Price", on: "On", note: "Note",
      sortDefault: "Sort", newest: "Newest", oldest: "Oldest", az: "A-Z", za: "Z-A", custom: "Custom Drag", sortUrgent: "Priority", selected: "selected",
      job: "job", allJobs: "All Jobs",
      copy: "Copy", paste: "Paste", duplicate: "Duplicate", changeProject: "Change Project", importCsv: "Import CSV", exportCsv: "Export CSV",
      undo: "Undo", redo: "Redo",
      saved: "Saved", loadedFile: "Data loaded from file",
      syncSaving: "Saving…", syncSaved: "Saved ✓", syncError: "Sync failed", realtime: "auto-sync",
      selectCsvFile: "Select CSV File", convertDocToCsv: "Convert Document to CSV",
      converterGuideTitle: "Convert Document to CSV",
      converterStep1: "Open Claude AI (click the button below)",
      converterStep2: "Upload your notes file (Excel/Notepad/chat) or table screenshot",
      converterStep3: "Download the template CSV & converter prompt below, include them in your Claude message",
      converterStep4: "Claude will generate a CSV file \u2192 download & import here",
      openClaude: "Open Claude AI", downloadTemplate: "Download Template CSV", downloadConverter: "Download Prompt/Skill Converter",
      haveCsvFile: "Already have a CSV file?", selectFile: "Select CSV File",
      storageInfoTitle: "Data Storage", storageInfoDesc: '<b>All data is auto-saved to Firebase Cloud (Firestore)</b> per login account.\n\n<b>Sync:</b> log in with the same account on another device/browser \u2192 data appears instantly.\n\n<b>Move PC:</b> log in, then Export/Import CSV.',
      gotIt: "Got It",
      pricePerVid: "Price/Vid", paidStatus: "Paid Status", workerNote: "Worker Note", clientNameLabel: "Client Name",
      note: "Note",
      editPrice: "Edit Price", editPricePrompt: "Batch total price (e.g. client bonus):",
      promptProjectName: "Project name:", promptNewClient: "New client name:", promptNewProject: "New project name:",
      storageDir: "Storage Folder",
      pickFolder: "Pick Folder",
      welcomeTitle: "Welcome",
      orContinue: "or continue without an account",
      welcomeDesc: "No data yet. Start by creating a new job or importing from CSV.",
      shortcuts: '<div class="shortcut-ref"><h3>Keyboard Shortcuts</h3><table><tr><td><kbd>Ctrl+S</kbd></td><td>Save</td></tr><tr><td><kbd>Ctrl+Z</kbd></td><td>Undo</td></tr><tr><td><kbd>Ctrl+Y</kbd> / <kbd>Ctrl+Shift+Z</kbd></td><td>Redo</td></tr><tr><td><kbd>Ctrl+C</kbd></td><td>Copy selected job</td></tr><tr><td><kbd>Ctrl+X</kbd></td><td>Cut selected job</td></tr><tr><td><kbd>Ctrl+V</kbd></td><td>Paste job</td></tr><tr><td><kbd>Ctrl+D</kbd></td><td>Duplicate selected job</td></tr><tr><td><kbd>Del</kbd></td><td>Delete selected job/client</td></tr><tr><td><kbd>F2</kbd></td><td>Inline edit job/client name</td></tr><tr><td><kbd>Shift</kbd>+Click</td><td>Select range of jobs/clients</td></tr><tr><td><kbd>Ctrl</kbd>+Click</td><td>Toggle select job/client</td></tr></table></div>',
      project: "Project", setting: "Setting", profile: "Profile", toggleSidebar: "Toggle sidebar", toggleMoney: "Toggle amounts",
      invalidFile: "Invalid file", storageSaved: "Storage folder saved",
      storageAccessFail: "Cannot access folder", storageRemoved: "Storage folder deleted",
      resetConfirm: "Delete ALL data for this account from Firebase? This cannot be undone. Continue?",
      enterSong: "Enter at least one song", exportData: "Export data?",
      song: "Song", link: "Link", links: "Links", addLinks: "+ Links", qty: "Qty",
      jobQty: "Job Qty", wkQty: "WK Qty", linksSent: "Links Sent", status: "Status",
      done: "Done", pending: "Pending", noTasks: "No tasks assigned", viewLinks: "View Links",
      noWorkers: "No workers", copyLinkTitle: "Copy worker link", workerLinkCopied: "Worker link copied!",
      workerName: "Worker name", newWorker: "New Worker", confirmDeleteWorker: 'Delete worker "{name}"?',
      deleteWorker: "Delete Worker", postedLinks: "Posted Links", noLinksPosted: "No links posted yet",
      copyAll: "Copy All", notSent: "not sent", sent: "sent",
      jobNotFound: "Job not found", noLinksYet: "No links yet", untitled: "untitled",
      linkPost: "Link Post", add: "Add", noBatch: "(no batch)",
      hello: "Hello", pendingTask: "pending task", pendingTasks: "pending tasks",
      allTasksDone: "All tasks completed!", target: "Target", openAudio: "Open Audio",
      send: "Send", markComplete: "Mark Complete", completed: "Completed", refresh: "Refresh",
      sendFailed: "Failed to send. Try again.", markedComplete: "Marked as complete!",
      markFailed: "Failed. Try again.", tryAgain: "Try Again",
      workerDataNotAvailable: "Worker data not available. Make sure the admin has saved data to Firebase and you have the correct link.",
      workerLinkNeedLogin: "Please login/register first to create a worker link.",
      workerViewNoCloud: "Admin hasn't saved data to the cloud yet. Ask the admin to login & save data, then try again.",
      workerViewNoInternet: "Cannot connect to Firebase. Check your internet connection, then try again.",
      workerViewNoTasksYet: "No tasks for you yet. Wait for the admin to assign you tasks.",
      contactUs: "Contact Us",       resetCloudData: "Reset Data (Delete All Cloud Data)", cloudResetNote: "Deletes all data for this account from Firestore. Every device using this account will start empty.",
      cloudSafeNote: "Cloud data is not affected. Suitable for those already logged in with data safely stored in the cloud.",
      login: "Login", register: "Register", email: "Email", password: "Password",
      forgotPassword: "Forgot password?", continueAsGuest: "Continue as Guest",
      backToLogin: "Back to Login", guest: "Guest", user: "User", account: "Account",
      logout: "Logout", loginRegister: "Login / Register",
      guestModeLabel: "Guest mode \u2014", guestModeSuffix: "to keep your data permanently",
      firebaseNotConnected: "Firebase not connected. Check your internet.",
      fillAllFields: "Please fill in all fields.", passwordMin6: "Password must be at least 6 characters.",
      enterEmailFirst: "Enter your email address first.", resetEmailSent: "Password reset email sent! Check your inbox.",
      songJobTitle: "Song/Job Title", addSong: "+ Add Song", batch: "Batch", batchPlaceholder: "e.g. Batch 1",
      remove: "Remove", songTitlePlaceholder: "Song title", audioLinkPlaceholder: "Audio link https://...",
      none: "-- None --", min6Chars: "Min 6 characters", clientNamePh: "Client name / brand",
      clientAdReport: "Client Ad Report", addBatch: "Add Batch", addBatchPrompt: "Batch Name", batchDiffClient: "There are jobs from different clients!", added: "added",
    },
    ms: {
      tagline: "Penjejak kerja untuk posting",
      clients: "Klien", import: "Import", export: "Eksport", newJob: "Kerja Baru",
      addClient: "Tambah klien", settings: "Tetapan", language: "Bahasa",
      dashboardCurrency: "Mata Wang Dashboard", save: "Simpan",
      all: "Semua", allClient: "Semua Klien", multipleClients: "Pelbagai Klien", month: "Bulan",
      worker: "Pekerja", noted: "Noted", noNotes: "Tiada nota lagi", toggleTheme: "Mod terang/gelap", theme: "Tema", due: "Tamat", post: "Post", paid: "Dibayar", workerPaid: "Pekerja Dibayar", workerNote: "Nota Pekerja", workerNotePh: "Nota untuk pekerja\u2026",
      allWorker: "Semua Pekerja", allDue: "Semua Tarikh Tamat", allPost: "Semua Status Post",
      allPaid: "Semua Status Bayar", allWorkerPaid: "Semua Pekerja Dibayar",
      totalJob: "Jumlah Kerja", deadlineOverdue: "tamat tempoh",
      posted: "Dipost", postedPct: "% dipost",
      revenueCollected: "Hasil Diterima", fromClient: "dari klien · PAID",
      revenuePending: "Hasil Belum", notBilled: "belum ditagih/dibayar",
      workerPaidLabel: "Pekerja Dibayar", workerPaidSub: "sudah dibayar",
      workerPendingLabel: "Pekerja Belum", workerPendingSub: "belum dibayar",
      noClient: "Belum ada klien", noClientDesc: "Tambah klien pertama untuk mula menjejak kerja sound.",
      addClientBtn: "+ Tambah Klien",
      noMatch: "Tiada kerja yang sepadan", noMatchDesc: "Cuba ubah carian atau tapisan, atau tambah kerja baru.",
      newJobBtn: "+ Kerja Baru",
      editJob: "Edit Kerja", newJobTitle: "Kerja Baru", dupJob: "Kerja Baru (Duplikat)",
      deleteJob: "Padam", cancel: "Batal", saveJob: "Simpan Kerja",
      newClient: "Klien Baru", editClient: "Edit Klien", deleteClient: "Padam Klien",
      saveClient: "Simpan Klien",

      workerFee: "Yuran Pekerja",
      searchPlaceholder: "Cari lagu, pekerja, atau klien\u2026",
      copied: "Disalin", cut: "Potong", selectJobFirst: "Pilih kerja dulu (klik baris)",
      pickClient: "Pilih klien dahulu", jobUpdated: "Kerja dikemaskini",
      jobAdded: "Kerja ditambah", jobDeleted: "Kerja dipadam",
      clientUpdated: "Klien dikemaskini", clientAdded: "Klien ditambah",
      clientDeleted: "Klien dipadam", addClientFirst: "Tambah klien dulu sebelum buat kerja",
      csvExported: "CSV berjaya dieksport", csvImported: "Import selesai",
      csvFailed: "Import gagal \u2014 periksa format CSV",
      replaceAll: "Ganti Semua",
      newProject: "Projek Baru",
      newProjectBtn: "Buat Projek Lain",
      projects: "Projek", allProject: "Semua Projek", thisProject: "Projek Ini",
      editProject: "Edit Projek",
      saveProject: "Simpan Projek",
      projectName: "Nama Projek",
      projectNameRequired: "Nama projek wajib diisi.",
      accountLinks: "Pautan Akaun",
      tiktok: "TikTok",
      instagram: "Instagram",
      close: "Tutup",
      rename: "Rename",
      delete: "Padam",
      switchProject: "Tukar projek",
      cantDeleteLastProject: "Tidak boleh padam projek terakhir",
      importDataExists: "Data sudah ada. Import sebagai projek baru atau ganti projek semasa?",
      clipboardFail: "Gagal baca clipboard", clipboardBad: "Clipboard bukan format kerja",
      pasted: "Kerja ditampal",
      nothingToUndo: "Tiada yang boleh dibatalkan", nothingToRedo: "Tiada yang boleh diulang",
      confirmDeleteJob: "Padam kerja ini? Tindakan tidak boleh dibatalkan.",
      confirmDeleteClient: 'Padam klien "{name}" bersama {count} kerja di dalamnya? Tindakan tidak boleh dibatalkan.',
      confirmDeleteMultiple: 'Padam {count} klien? Tindakan tidak boleh dibatalkan.',
      moveTo: "Pindah ke Klien...", moved: "Kerja dipindahkan",
      notYet: "NOT YET", coming: "COMING", overdue: "OVERDUE",
      hDay: "H-", telat: "Lambat", hr: "hr",
      sound: "Sound", postLinkLabel: "Post",
      no: "No", client: "Klien", clientNote: "Klien / Nota Pekerja", songTitle: "Tajuk Lagu/Job", working: "Status",
      songLink: "Pautan Lagu/Sumber", postStatus: "Status Post", postLink: "Pautan Post",
      price: "Harga", on: "On", note: "Nota",
      sortDefault: "Susun", newest: "Terbaru", oldest: "Terlama", az: "A-Z", za: "Z-A", custom: "Susun Sendiri", sortUrgent: "Keutamaan", selected: "dipilih",
      job: "kerja", allJobs: "Semua Kerja",
      copy: "Salin", paste: "Tampal", duplicate: "Duplikat", changeProject: "Tukar Projek", importCsv: "Import CSV", exportCsv: "Eksport CSV",
      undo: "Buat asal", redo: "Ulang", saved: "Disimpan", loadedFile: "Data dimuat dari fail",
      syncSaving: "Menyimpan…", syncSaved: "Disimpan ✓", syncError: "Sinkron gagal", realtime: "sinkron automatik",
      selectCsvFile: "Pilih Fail CSV", convertDocToCsv: "Tukar Dokumen ke CSV",
      converterGuideTitle: "Tukar Dokumen ke CSV",
      converterStep1: "Buka Claude AI (klik butang di bawah)",
      converterStep2: "Muat naik fail catatan (Excel/Notepad/chat) atau screenshot jadual",
      converterStep3: "Muat turun template CSV & prompt converter di bawah, salin/sertakan ke Claude",
      converterStep4: "Claude akan hasilkan fail CSV \u2192 muat turun & import di sini",
      openClaude: "Buka Claude AI", downloadTemplate: "Muat Turun Template CSV", downloadConverter: "Muat Turun Prompt/Skill Converter",
      haveCsvFile: "Sudah ada fail CSV?", selectFile: "Pilih Fail CSV",
      storageInfoTitle: "Simpanan Data", storageInfoDesc: '<b>Semua data disimpan automatik ke Firebase Cloud (Firestore)</b> mengikut akaun log masuk.\n\n<b>Sync:</b> log masuk dengan akaun sama pada peranti/pelayar lain \u2192 data terus muncul.\n\n<b>Pindah PC:</b> log masuk, kemudian Eksport/Import CSV.',
      gotIt: "Faham",
      pricePerVid: "Harga/Video", paidStatus: "Status Bayar", workerNote: "Nota Pekerja", clientNameLabel: "Nama Klien",
      note: "Nota",
      editPrice: "Edit Harga", editPricePrompt: "Jumlah harga batch (cth. bonus klien):",
      promptProjectName: "Nama projek:", promptNewClient: "Nama klien baru:", promptNewProject: "Nama projek baru:",
      storageDir: "Folder Simpanan",
      pickFolder: "Pilih Folder",
      welcomeTitle: "Selamat Datang",
      orContinue: "atau teruskan tanpa akaun",
      welcomeDesc: "Belum ada data. Mulakan dengan buat kerja baru atau import dari CSV.",
      shortcuts: '<div class="shortcut-ref"><h3>Pintasan Papan Kekunci</h3><table><tr><td><kbd>Ctrl+S</kbd></td><td>Simpan</td></tr><tr><td><kbd>Ctrl+Z</kbd></td><td>Buat asal</td></tr><tr><td><kbd>Ctrl+Y</kbd> / <kbd>Ctrl+Shift+Z</kbd></td><td>Ulang</td></tr><tr><td><kbd>Ctrl+C</kbd></td><td>Salin kerja terpilih</td></tr><tr><td><kbd>Ctrl+X</kbd></td><td>Potong kerja terpilih</td></tr><tr><td><kbd>Ctrl+V</kbd></td><td>Tampal kerja</td></tr><tr><td><kbd>Ctrl+D</kbd></td><td>Duplikat kerja terpilih</td></tr><tr><td><kbd>Del</kbd></td><td>Padam kerja/klien terpilih</td></tr><tr><td><kbd>F2</kbd></td><td>Sunting langsung nama kerja/klien</td></tr><tr><td><kbd>Shift</kbd>+Klik</td><td>Pilih julat kerja/klien</td></tr><tr><td><kbd>Ctrl</kbd>+Klik</td><td>Toggle pilih kerja/klien</td></tr></table></div>',
      project: "Projek", setting: "Tetapan", profile: "Profil", toggleSidebar: "Togol bar sisi", toggleMoney: "Togol jumlah",
      invalidFile: "Fail tidak sah", storageSaved: "Folder simpanan disimpan",
      storageAccessFail: "Tidak dapat mengakses folder", storageRemoved: "Folder simpanan dipadam",
      resetConfirm: "Padam SEMUA data akaun ini dari Firebase? Tidak boleh dibatalkan. Teruskan?",
      enterSong: "Masukkan sekurang-kurangnya satu lagu", exportData: "Eksport data?",
      song: "Lagu", link: "Pautan", links: "Pautan", addLinks: "+ Pautan", qty: "Qty",
      jobQty: "Qty Kerja", wkQty: "Qty WK", linksSent: "Pautan Dihantar", status: "Status",
      done: "Selesai", pending: "Belum Selesai", noTasks: "Tiada tugasan", viewLinks: "Lihat Pautan",
      noWorkers: "Tiada pekerja", copyLinkTitle: "Salin pautan pekerja", workerLinkCopied: "Pautan pekerja disalin!",
      workerName: "Nama pekerja", newWorker: "Pekerja Baru", confirmDeleteWorker: 'Padam pekerja "{name}"?',
      deleteWorker: "Padam Pekerja", postedLinks: "Pautan Dipost", noLinksPosted: "Belum ada pautan dipost",
      copyAll: "Salin Semua", notSent: "belum dihantar", sent: "dihantar",
      jobNotFound: "Kerja tidak dijumpai", noLinksYet: "Belum ada pautan", untitled: "Tanpa tajuk",
      linkPost: "Link Post", add: "Tambah", noBatch: "(tiada batch)",
      hello: "Halo", pendingTask: "tugasan belum selesai", pendingTasks: "tugasan belum selesai",
      allTasksDone: "Semua tugasan selesai!", target: "Sasaran", openAudio: "Buka Audio",
      send: "Hantar", markComplete: "Tandai Selesai", completed: "Selesai", refresh: "Muat Semula",
      sendFailed: "Gagal menghantar. Cuba lagi.", markedComplete: "Ditandai selesai!",
      markFailed: "Gagal. Cuba lagi.", tryAgain: "Cuba Lagi",
      workerDataNotAvailable: "Data pekerja tidak tersedia. Pastikan admin telah menyimpan data ke Firebase dan pautan yang anda gunakan betul.",
      workerLinkNeedLogin: "Sila log masuk/daftar dahulu untuk membuat pautan pekerja.",
      workerViewNoCloud: "Admin belum menyimpan data ke awan. Minta admin untuk log masuk & simpan data, kemudian cuba lagi.",
      workerViewNoInternet: "Tidak dapat bersambung ke Firebase. Periksa sambungan internet, kemudian cuba lagi.",
      workerViewNoTasksYet: "Belum ada tugasan untuk anda. Tunggu admin memberikan tugasan.",
      contactUs: "Hubungi Kami",       resetCloudData: "Reset Data (Padam Semua Data Awan)", cloudResetNote: "Memadam semua data akaun ini dari Firestore. Semua peranti yang memakai akaun ini akan mula kosong.",
      cloudSafeNote: "Data awan tidak terjejas. Sesuai untuk yang sudah log masuk & datanya selamat di awan.",
      login: "Log Masuk", register: "Daftar", email: "E-mel", password: "Kata Laluan",
      forgotPassword: "Lupa kata laluan?", continueAsGuest: "Teruskan sebagai Tetamu",
      backToLogin: "Kembali ke Log Masuk", guest: "Tetamu", user: "Pengguna", account: "Akaun",
      logout: "Log Keluar", loginRegister: "Log Masuk / Daftar",
      guestModeLabel: "Mod tetamu \u2014", guestModeSuffix: "untuk menyimpan data secara kekal",
      firebaseNotConnected: "Firebase tidak bersambung. Periksa internet anda.",
      fillAllFields: "Isi semua medan.", passwordMin6: "Kata laluan sekurang-kurangnya 6 aksara.",
      enterEmailFirst: "Masukkan e-mel anda dahulu.", resetEmailSent: "E-mel reset kata laluan dihantar! Semak peti masuk anda.",
      songJobTitle: "Tajuk Lagu/Job", addSong: "+ Tambah Lagu", batch: "Batch", batchPlaceholder: "cth. Batch 1",
      remove: "Padam", songTitlePlaceholder: "Tajuk lagu", audioLinkPlaceholder: "Pautan audio https://...",
      none: "-- Tiada --", min6Chars: "Min 6 aksara", clientNamePh: "Nama klien / jenama",
      clientAdReport: "Laporan Ad Klien", addBatch: "Tambah Batch", addBatchPrompt: "Nama Batch", batchDiffClient: "Terdapat job daripada client yang berbeza!", added: "ditambah",
    },
    ja: {
      tagline: "ジョブトラッカー",
      clients: "クライアント", import: "インポート", export: "エクスポート", newJob: "新規ジョブ",
      addClient: "クライアント追加", settings: "設定", language: "言語",
      dashboardCurrency: "ダッシュボード通貨", save: "保存",
      all: "すべて", allClient: "全クライアント", multipleClients: "複数クライアント", month: "月",
      worker: "ワーカー", noted: "メモあり", noNotes: "メモはありません", toggleTheme: "ライト/ダークモード", theme: "テーマ", due: "期限", post: "投稿", paid: "支払済", workerPaid: "ワーカー支払", workerNote: "ワーカーメモ", workerNotePh: "ワーカーへのメモ\u2026",
      allWorker: "全ワーカー", allDue: "全期限", allPost: "全投稿ステータス",
      allPaid: "全支払ステータス", allWorkerPaid: "全ワーカー支払",
      totalJob: "総ジョブ数", deadlineOverdue: "期限超過",
      posted: "投稿済", postedPct: "投稿率",
      revenueCollected: "売上計上", fromClient: "クライアントから · PAID",
      revenuePending: "未計上売上", notBilled: "未請求/未払い",
      workerPaidLabel: "ワーカー支払済", workerPaidSub: "支払い完了",
      workerPendingLabel: "ワーカー未払い", workerPendingSub: "未払い",
      noClient: "クライアントがありません", noClientDesc: "最初のクライアントを追加してジョブの追跡を開始しましょう。",
      addClientBtn: "+ クライアント追加",
      noMatch: "該当するジョブがありません", noMatchDesc: "検索条件を変更するか、新しいジョブを追加してください。",
      newJobBtn: "+ 新規ジョブ",
      editJob: "ジョブ編集", newJobTitle: "新規ジョブ", dupJob: "新規ジョブ（複製）",
      deleteJob: "削除", cancel: "キャンセル", saveJob: "ジョブを保存",
      newClient: "新規クライアント", editClient: "クライアント編集", deleteClient: "クライアント削除",
      saveClient: "クライアントを保存",

      workerFee: "ワーカー費用",
      searchPlaceholder: "曲名、ワーカー、クライアントを検索…",
      copied: "コピー", cut: "カット", selectJobFirst: "先にジョブを選択してください（行をクリック）",
      pickClient: "先にクライアントを選択してください", jobUpdated: "ジョブを更新しました",
      jobAdded: "ジョブを追加しました", jobDeleted: "ジョブを削除しました",
      clientUpdated: "クライアントを更新しました", clientAdded: "クライアントを追加しました",
      clientDeleted: "クライアントを削除しました", addClientFirst: "先にクライアントを追加してください",
      csvExported: "CSVをエクスポートしました", csvImported: "インポート完了",
      csvFailed: "インポート失敗 — CSV形式を確認してください",
      replaceAll: "すべて置き換え",
      newProject: "新規プロジェクト",
      newProjectBtn: "別のプロジェクトを作成",
      projects: "プロジェクト", allProject: "全プロジェクト", thisProject: "このプロジェクト",
      editProject: "プロジェクト編集",
      saveProject: "プロジェクトを保存",
      projectName: "プロジェクト名",
      projectNameRequired: "プロジェクト名は必須です。",
      accountLinks: "アカウントリンク",
      tiktok: "TikTok",
      instagram: "Instagram",
      close: "閉じる",
      rename: "名前変更",
      delete: "削除",
      switchProject: "プロジェクト切替",
      cantDeleteLastProject: "最後のプロジェクトは削除できません",
      importDataExists: "データが既に存在します。新しいプロジェクトとしてインポートするか、現在のプロジェクトを置き換えますか？",
      clipboardFail: "クリップボードの読み取りに失敗", clipboardBad: "クリップボードのデータはジョブ形式ではありません",
      pasted: "ジョブを貼り付け",
      nothingToUndo: "元に戻せる操作がありません", nothingToRedo: "やり直せる操作がありません",
      confirmDeleteJob: "このジョブを削除しますか？元に戻せません。",
      confirmDeleteClient: 'クライアント"{name}"と{count}件のジョブを削除しますか？元に戻せません。',
      confirmDeleteMultiple: '{count}件のクライアントを削除しますか？元に戻せません。',
      moveTo: "クライアントに移動…", moved: "ジョブを移動しました",
      notYet: "未着手", coming: "間近", overdue: "期限超過",
      hDay: "あと", telat: "遅延", hr: "日",
      sound: "音源", postLinkLabel: "投稿",
      no: "No", client: "クライアント", clientNote: "クライアント / ワーカーメモ", songTitle: "曲名/ジョブ名", working: "ステータス",
      songLink: "音源/ソースリンク", postStatus: "投稿ステータス", postLink: "投稿リンク",
      price: "単価", on: "ON", note: "メモ",
      sortDefault: "並替", newest: "新しい順", oldest: "古い順", az: "A-Z", za: "Z-A", custom: "カスタム", sortUrgent: "優先", selected: "選択中",
      job: "ジョブ", allJobs: "全ジョブ",
      copy: "コピー", paste: "貼り付け", duplicate: "複製", changeProject: "プロジェクト切替", importCsv: "CSVインポート", exportCsv: "CSVエクスポート",
      undo: "元に戻す", redo: "やり直す", saved: "保存しました", loadedFile: "ファイルからデータを読み込みました",
      syncSaving: "保存中…", syncSaved: "保存しました ✓", syncError: "同期失敗", realtime: "自動同期",
      selectCsvFile: "CSVファイルを選択", convertDocToCsv: "文書をCSVに変換",
      converterGuideTitle: "文書をCSVに変換",
      converterStep1: "Claude AIを開く（下のボタンをクリック）",
      converterStep2: "メモファイル（Excel/Notepad/チャット）または表のスクリーンショットをアップロード",
      converterStep3: "下のテンプレートCSVとコンバータープロンプトをダウンロードしてClaudeに含める",
      converterStep4: "ClaudeがCSVファイルを生成 → ダウンロードしてここにインポート",
      openClaude: "Claude AIを開く", downloadTemplate: "テンプレートCSVをダウンロード", downloadConverter: "プロンプト/スキルをダウンロード",
      haveCsvFile: "すでにCSVファイルをお持ちですか？", selectFile: "CSVファイルを選択",
      storageInfoTitle: "データ保存", storageInfoDesc: '<b>すべてのデータはログインアカウントごとにFirebase Cloud (Firestore)へ自動保存</b>されます。\n\n<b>同期:</b> 別の端末・ブラウザで同じアカウントにログイン → データがすぐ表示されます。\n\n<b>PC移行:</b> ログインしてから エクスポート/インポートCSV。',
      gotIt: "わかりました",
      pricePerVid: "単価/動画", paidStatus: "支払ステータス", workerNote: "ワーカーメモ", clientNameLabel: "クライアント名",
      note: "メモ",
      editPrice: "価格を編集", editPricePrompt: "バッチの合計価格（例: クライアントからのボーナス）:",
      promptProjectName: "プロジェクト名:", promptNewClient: "新しいクライアント名:", promptNewProject: "新しいプロジェクト名:",
      storageDir: "保存フォルダ",
      pickFolder: "フォルダを選択",
      welcomeTitle: "ようこそ",
      orContinue: "またはアカウントなしで続行",
      welcomeDesc: "データがまだありません。新しいジョブを作成するか、CSVからインポートしてください。",
      shortcuts: '<div class="shortcut-ref"><h3>キーボードショートカット</h3><table><tr><td><kbd>Ctrl+S</kbd></td><td>保存</td></tr><tr><td><kbd>Ctrl+Z</kbd></td><td>元に戻す</td></tr><tr><td><kbd>Ctrl+Y</kbd> / <kbd>Ctrl+Shift+Z</kbd></td><td>やり直す</td></tr><tr><td><kbd>Ctrl+C</kbd></td><td>選択ジョブをコピー</td></tr><tr><td><kbd>Ctrl+X</kbd></td><td>選択ジョブをカット</td></tr><tr><td><kbd>Ctrl+V</kbd></td><td>ジョブを貼り付け</td></tr><tr><td><kbd>Ctrl+D</kbd></td><td>選択ジョブを複製</td></tr><tr><td><kbd>Del</kbd></td><td>選択ジョブ/クライアントを削除</td></tr><tr><td><kbd>F2</kbd></td><td>インライン編集（名前）</td></tr><tr><td><kbd>Shift</kbd>+クリック</td><td>範囲選択</td></tr><tr><td><kbd>Ctrl</kbd>+クリック</td><td>選択切り替え</td></tr></table></div>',
      project: "プロジェクト", setting: "設定", profile: "プロフィール", toggleSidebar: "サイドバー切替", toggleMoney: "金額表示切替",
      invalidFile: "無効なファイル", storageSaved: "保存フォルダを保存しました",
      storageAccessFail: "フォルダにアクセスできません", storageRemoved: "保存フォルダを削除しました",
      resetConfirm: "このアカウントの全データをFirebaseから削除しますか？元に戻せません。続行しますか？",
      enterSong: "少なくとも1曲を入力してください", exportData: "データをエクスポートしますか？",
      song: "曲名", link: "リンク", links: "リンク", addLinks: "+ リンク", qty: "数量",
      jobQty: "ジョブ数", wkQty: "WK数", linksSent: "送信リンク", status: "ステータス",
      done: "完了", pending: "未完了", noTasks: "割り当てられたタスクはありません", viewLinks: "リンクを見る",
      noWorkers: "ワーカーがいません", copyLinkTitle: "ワーカーリンクをコピー", workerLinkCopied: "ワーカーリンクをコピーしました！",
      workerName: "ワーカー名", newWorker: "新規ワーカー", confirmDeleteWorker: 'ワーカー"{name}"を削除しますか？',
      deleteWorker: "ワーカー削除", postedLinks: "投稿リンク", noLinksPosted: "投稿されたリンクはまだありません",
      copyAll: "すべてコピー", notSent: "未送信", sent: "送信済",
      jobNotFound: "ジョブが見つかりません", noLinksYet: "リンクはまだありません", untitled: "無題",
      linkPost: "投稿リンク", add: "追加", noBatch: "（バッチなし）",
      hello: "こんにちは", pendingTask: "保留中のタスク", pendingTasks: "保留中のタスク",
      allTasksDone: "すべてのタスクが完了しました！", target: "目標", openAudio: "音源を開く",
      send: "送信", markComplete: "完了にする", completed: "完了", refresh: "更新",
      sendFailed: "送信に失敗しました。もう一度お試しください。", markedComplete: "完了としてマークしました！",
      markFailed: "失敗しました。もう一度お試しください。", tryAgain: "再試行",
      workerDataNotAvailable: "ワーカーデータを取得できません。管理者がFirebaseにデータを保存し、正しいリンクを使用していることを確認してください。",
      workerLinkNeedLogin: "ワーカーリンクを作成するには、先にログイン/登録してください。",
      workerViewNoCloud: "管理者がまだクラウドにデータを保存していません。管理者にログインしてデータを保存してもらってから、再度お試しください。",
      workerViewNoInternet: "Firebaseに接続できません。インターネット接続を確認して、もう一度お試しください。",
      workerViewNoTasksYet: "まだタスクはありません。管理者がタスクを割り当てるのをお待ちください。",
      contactUs: "お問い合わせ",       resetCloudData: "データをリセット（クラウド全データ削除）", cloudResetNote: "このアカウントの全データをFirestoreから削除します。このアカウントを使うすべての端末は空の状態から始まります。",
      cloudSafeNote: "クラウドデータは影響を受けません。ログイン済みでデータがクラウドに安全に保存されている場合に適しています。",
      login: "ログイン", register: "登録", email: "メール", password: "パスワード",
      forgotPassword: "パスワードをお忘れですか？", continueAsGuest: "ゲストとして続行",
      backToLogin: "ログインに戻る", guest: "ゲスト", user: "ユーザー", account: "アカウント",
      logout: "ログアウト", loginRegister: "ログイン / 登録",
      guestModeLabel: "ゲストモード —", guestModeSuffix: "データを永続的に保存するには",
      firebaseNotConnected: "Firebaseに接続されていません。インターネットを確認してください。",
      fillAllFields: "すべての項目を入力してください。", passwordMin6: "パスワードは6文字以上必要です。",
      enterEmailFirst: "先にメールアドレスを入力してください。", resetEmailSent: "パスワードリセットメールを送信しました！受信トレイを確認してください。",
      songJobTitle: "曲名/ジョブ名", addSong: "+ 曲を追加", batch: "バッチ", batchPlaceholder: "例: バッチ1",
      remove: "削除", songTitlePlaceholder: "曲名", audioLinkPlaceholder: "音源リンク https://...",
      none: "-- なし --", min6Chars: "6文字以上", clientNamePh: "クライアント名 / ブランド",
      clientAdReport: "クライアント広告レポート", addBatch: "バッチを追加", addBatchPrompt: "バッチ名", batchDiffClient: "別のクライアントのジョブがあります！", added: "追加しました",
    }
  };

  let settings = { lang: "en", currency: "USD", hideMoney: true, theme: "light" };
  let exchangeRates = null;
  let rateCacheTime = 0;

  let undoStack = [];
  let redoStack = [];

  function saveSnapshot() { return JSON.parse(JSON.stringify(state.clients)); }

  function commitSnapshot(before) {
    undoStack.push({ before, after: JSON.parse(JSON.stringify(state.clients)) });
    redoStack = [];
    if (undoStack.length > 20) undoStack.shift();
  }

  function undo() {
    const entry = undoStack.pop();
    if (!entry) { toast(_("nothingToUndo"), true); return; }
    redoStack.push({ before: JSON.parse(JSON.stringify(state.clients)), after: entry.after });
    state.clients = entry.before;
    state.selectedJobIds = new Set();
    state.cutJobIds = new Set();
    save(); renderAll();
  }

  function redo() {
    const entry = redoStack.pop();
    if (!entry) { toast(_("nothingToRedo"), true); return; }
    undoStack.push({ before: JSON.parse(JSON.stringify(state.clients)), after: entry.after });
    state.clients = entry.after;
    state.selectedJobIds = new Set();
    state.cutJobIds = new Set();
    save(); renderAll();
  }

  let state = {
    projects: [],
    currentProjectId: null,
    clients: [],
    workers: [],
    notifications: [],
    selectedClientIds: new Set(),
    batchOnly: false,
    allJobs: true,
    notedOnly: false,
    search: "",
    filters: { worker: "", due: "", post: "", paid: "", workerPaid: "", sortBy: "urgent" },
    filterMonth: "",
    filterYear: "",
    selectedJobIds: new Set(),
    cutJobIds: new Set(),
    shiftAnchorId: null,
    clientShiftAnchor: null,
    renamingJobId: null,
    renamingClientId: null,
    clipboard: false,
    isWorkerView: false,
    workerViewOwnerId: null,
    workerViewWorkerId: null,
  };

  const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  const today = () => { const d = new Date(); return d.toISOString().slice(0, 10); };
  const MONTHS = ["", "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const MONTHS_EN = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const MONTHS_MS = ["", "Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"];
  const MONTHS_JA = ["", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
  function monthName(m) {
    const map = { id: MONTHS, en: MONTHS_EN, ms: MONTHS_MS, ja: MONTHS_JA };
    return (map[settings.lang] || MONTHS_EN)[Number(m)] || "";
  }

  // i18n helper
  function _(key) { return (LANG[settings.lang] || LANG.id)[key] || key; }
  window.__t = _;

  // Theme (light/dark) applied on <html data-theme>
  function applyTheme() {
    const dark = settings.theme === "dark";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const sun = document.getElementById("themeIconSun");
    const moon = document.getElementById("themeIconMoon");
    if (sun) sun.style.display = dark ? "" : "none";
    if (moon) moon.style.display = dark ? "none" : "";
  }

  // ---------------------------------------------------------------
  // Persistence — VERSI FULL CLOUD (Firestore). Tanpa localStorage.
  // ---------------------------------------------------------------
  function saveSettings() {
    save();
  }
  window.__applyRemoteData = function (cloudData) {
    if (cloudData && Array.isArray(cloudData.projects)) {
      state.projects = cloudData.projects;
      migrateProjects();
      state.currentProjectId = cloudData.currentProjectId || (cloudData.projects[0] || {}).id || null;
      const cur = state.projects.find(function (p) { return p.id === state.currentProjectId; });
      state.clients = cur ? cur.clients : [];
      state.workers = cloudData.workers || [];
      if (cloudData.settings) Object.assign(settings, cloudData.settings);
      if (cloudData.ui && cloudData.ui.sortBy) {
        state.filters.sortBy = (cloudData.ui.sortBy === "urgent" || cloudData.ui.sortBy === "oldest") ? "urgent" : cloudData.ui.sortBy;
      }
      state.selectedJobIds = new Set();
      state.selectedClientIds = new Set();
      state.cutJobIds = new Set();
      undoStack = [];
      redoStack = [];
      applyTheme();
      renderAll();
    }
  };

  function save() {
    const proj = currentProject();
    if (!proj && state.projects.length) return;
    if (proj && proj.clients !== state.clients) proj.clients = state.clients;
    // auto-update postStatus based on posted links; keep legacy postLink in sync so migrateJobs won't resurrect deleted links
    state.clients.forEach(function(c) {
      (c.jobs || []).forEach(function(j) {
        if (!Array.isArray(j.links)) {
          j.links = j.postLink ? j.postLink.split('|').map(s => s.trim()).filter(Boolean).map(url => ({ url, qty: 1 })) : [];
        }
        var pMax = j.jumlah || 1;
        var pTotal = linkQtySum(j.links || []);
        j.postStatus = pTotal >= pMax ? 'POSTED' : 'NOT YET';
        j.postLink = j.links.map(l => l.url).join('|');
      });
    });
    const dataObj = { projects: state.projects, currentProjectId: state.currentProjectId, workers: state.workers, settings: settings, ui: { sortBy: state.filters.sortBy }, lastModified: Date.now() };
    if (typeof window.__firebase !== 'undefined' && window.__firebase.ready() && window.__firebaseCloudLoaded) {
      window.__firebase.notifyDataChange(dataObj);
    }
  }
  window.__firebaseSaveNow = function () {
    const proj = currentProject();
    if (!proj && state.projects.length) return;
    if (proj && proj.clients !== state.clients) proj.clients = state.clients;
    const dataObj = { projects: state.projects, currentProjectId: state.currentProjectId, workers: state.workers, settings: settings, ui: { sortBy: state.filters.sortBy }, lastModified: Date.now() };
    if (typeof window.__firebase !== 'undefined' && window.__firebase.ready()) {
      window.__firebase.saveCloudData(dataObj);
    }
  };

  function migrateJobs(jobs) {
    (jobs || []).forEach(function(j) {
      if (!j) return;
      // old format: posted stored in postStatus/postLink, new format derives status from links[]
      if (!Array.isArray(j.links)) j.links = [];
      if (j.links.length === 0 && j.postLink) {
        j.links = [{ url: j.postLink, qty: 1 }];
      }
      if (j.links.length === 0 && j.postStatus === 'POSTED') {
        j.links = [{ url: '', qty: 1 }];
      }
      if (!j.workerFee) j.workerFee = 0;
      if (!j.workerFeeCurrency) j.workerFeeCurrency = 'USD';
    });
  }

  function migrateProjects() {
    for (const p of state.projects) {
      if (!p.clients) p.clients = [];
      // migrate old socialLinks format to single accountLink
      if (p.socialLinks) {
        p.accountLink = p.socialLinks.tiktok || p.socialLinks.instagram || "";
        delete p.socialLinks;
      }
      if (!p.accountLink) p.accountLink = "";
      for (const c of p.clients) {
        if (c.socialLinks) {
          c.accountLink = c.socialLinks.tiktok || c.socialLinks.instagram || "";
          delete c.socialLinks;
        }
        if (!c.accountLink) c.accountLink = "";
        migrateJobs(c.jobs);
      }
    }
  }
  function currentProject() { return state.projects.find(p => p.id === state.currentProjectId) || null; }

  function switchProject(id) {
    state.currentProjectId = id;
    const proj = currentProject();
    state.clients = proj ? proj.clients : [];
    state.selectedClientIds = new Set();
    state.selectedJobIds = new Set();
    state.cutJobIds = new Set();
    undoStack = [];
    redoStack = [];
    save();
    renderAll();
  }

  function renderProjectSwitcher() {
    const el = $("#projectSwitcher");
    if (!el) return;
    const cur = currentProject();
    el.innerHTML = `<button class="btn btn-ghost project-btn" id="btnProjectPopup" title="${_("switchProject")}"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor" stroke-width="1.3" fill="none"/><path d="M4 6h8M4 9h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg> ${escapeHtml(cur ? cur.name : "")} <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;
    $("#btnProjectPopup").addEventListener("click", () => openProjectPopup());
    // update topbar project title & social links
    const titleEl = $("#projectTitle");
    if (titleEl) {
      titleEl.textContent = cur ? cur.name : "";
      titleEl.dataset.orig = cur ? cur.name : "";
      // append account link icon
      const existingIcons = titleEl.parentElement.querySelector(".topbar-social-icons");
      if (existingIcons) existingIcons.remove();
      const accountLink = cur?.accountLink || "";
      if (accountLink) {
        const wrapper = document.createElement("span");
        wrapper.className = "topbar-social-icons";
        wrapper.innerHTML = renderAccountLink(accountLink);
        titleEl.insertAdjacentElement("afterend", wrapper);
      }
    }
    // update sidebar project button label
    const pmLabel = document.querySelector("#btnProjectModal .pm-name");
    if (pmLabel) pmLabel.textContent = cur ? cur.name : _("projects");
  }

  function openProjectPopup() {
    const popup = $("#projectPopup");
    if (!popup) return;
    const list = popup.querySelector(".popup-list");
    list.innerHTML = state.projects.map(p => {
      const active = p.id === state.currentProjectId ? " active" : "";
      return `<div class="popup-item${active}" data-id="${p.id}">
        <span class="popup-item-name">${escapeHtml(p.name)}</span>
        <span class="popup-item-actions">
          <button class="icon-btn popup-edit" title="${_("editProject")}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg></button>
          <button class="icon-btn popup-delete" title="${_("delete")}"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M5 4V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V4M3 4v9.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </span>
      </div>`;
    }).join("");
    // click item to switch
    list.querySelectorAll(".popup-item").forEach(el => {
      el.addEventListener("click", (e) => {
        if (e.target.closest(".popup-item-actions")) return;
        switchProject(el.dataset.id);
        closeProjectPopup();
      });
    });
    // edit (name + account link)
    list.querySelectorAll(".popup-edit").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openProjectEdit(btn.closest(".popup-item").dataset.id);
      });
    });
    // delete
    list.querySelectorAll(".popup-delete").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.closest(".popup-item").dataset.id;
        if (state.projects.length <= 1) { toast(_("cantDeleteLastProject"), true); return; }
        if (state.currentProjectId === id) {
          const idx = state.projects.findIndex(p => p.id === id);
          state.projects.splice(idx, 1);
          switchProject(state.projects[0].id);
        } else {
          state.projects = state.projects.filter(p => p.id !== id);
          save(); renderAll();
        }
        closeProjectPopup();
      });
    });
    openModal(popup);
  }
  function closeProjectPopup() { closeModal($("#projectPopup")); }

  function openProjectEdit(projectId) {
    const popup = $("#projectEditPopup");
    if (!popup) return;
    const p = state.projects.find(x => x.id === projectId);
    if (!p) return;
    $("#projectEditId").value = p.id;
    $("#projectEditName").value = p.name;
    $("#projectEditAccountLink").value = p.accountLink || "";
    openModal(popup);
  }
  function closeProjectEdit() { closeModal($("#projectEditPopup")); }
  function saveProjectEdit() {
    const id = $("#projectEditId").value;
    const p = state.projects.find(x => x.id === id);
    if (!p) return;
    const name = $("#projectEditName").value.trim();
    if (!name) { toast(_("projectNameRequired"), true); return; }
    p.name = name;
    p.accountLink = $("#projectEditAccountLink").value.trim() || "";
    save();
    renderAll();
    closeProjectEdit();
    openProjectPopup();
  }

  // double-click project title to rename
  document.addEventListener("dblclick", (e) => {
    const titleEl = e.target.closest("#projectTitle");
    if (!titleEl) return;
    const proj = currentProject();
    if (!proj) return;
    const orig = proj.name;
    const input = document.createElement("input");
    input.type = "text"; input.value = orig;
    input.className = "rename-input";
    input.style.fontSize = "11px";
    input.style.fontWeight = "600";
    titleEl.textContent = ""; titleEl.appendChild(input);
    input.focus(); try { input.select(); } catch(e) {}
    renameState = { el: titleEl, orig, type: "project", id: proj.id, input };
    input.addEventListener("blur", () => {
      if (!renameState || renameState.input !== input) return;
      const rs = renameState; renameState = null;
      const p = state.projects.find(x => x.id === proj.id);
      if (p) { p.name = input.value.trim() || p.name; save(); }
      renderProjectSwitcher();
    });
    input.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") { ev.preventDefault(); input.blur(); }
      if (ev.key === "Escape") { ev.preventDefault(); renameState = null; titleEl.textContent = orig; }
    });
  });

  // ---------------------------------------------------------------
  // Exchange rates
  // ---------------------------------------------------------------
  function fetchRates() {
    if (exchangeRates && Date.now() - rateCacheTime < 3600000) return Promise.resolve(exchangeRates);
    return fetch("https://open.er-api.com/v6/latest/USD")
      .then(r => r.json())
      .then(data => {
        if (data.result === "success") {
          exchangeRates = data.rates;
          exchangeRates.USD = 1;
          rateCacheTime = Date.now();
        }
        return exchangeRates;
      })
      .catch(() => { /* keep old rates if any */ return exchangeRates; });
  }
  function convert(amount, from, to) {
    if (from === to || !amount) return amount;
    if (!exchangeRates || (!exchangeRates[from] && from !== "USD") || !exchangeRates[to]) return amount;
    const inUsd = from === "USD" ? amount : amount / exchangeRates[from];
    return to === "USD" ? inUsd : inUsd * exchangeRates[to];
  }

  // ---------------------------------------------------------------
  // Deadline helpers
  // ---------------------------------------------------------------
  function daysUntil(iso) {
    if (!iso) return null;
    const t = new Date(iso + "T00:00:00");
    const n = new Date(today() + "T00:00:00");
    return Math.round((t - n) / 86400000);
  }
  function deadlineLabel(iso) {
    if (!iso) return _("notYet");
    const d = daysUntil(iso);
    if (d > 0) return _("hDay") + d;
    if (d === 0) return _("hDay") + "0";
    return "DONE";
  }
  function deadlineKind(iso) {
    if (!iso) return "neutral";
    const d = daysUntil(iso);
    if (d > 3) return "ok";
    if (d > 1) return "warn";
    if (d >= 0) return "bad";
    return "neutral";
  }

  // Urgent priority: 0 = belum selesai & deadline mepet (<=3 hari atau overdue), 1 = belum dikerjakan (belum mulai posting & belum onWorking), 2 = sudah selesai / lainnya
  function urgentScore(job) {
    const posted = linkQtySum(job.links || []);
    const qty = Number(job.jumlah) || 1;
    if (posted >= qty) return 2;
    const d = daysUntil(job.deadline);
    if (d !== null && d <= 3) return 0;
    return 1;
  }
  function urgentEntryScore(entry) { return urgentScore(entry.job); }

  // ---------------------------------------------------------------
  // Derived helpers
  // ---------------------------------------------------------------
  function allJobsFlat() {
    const out = [];
    for (const c of state.clients) for (const j of c.jobs) out.push({ client: c, job: j });
    return out;
  }
  function findClient(id) { return state.clients.find((c) => c.id === id) || null; }
  function findJobEntry(jobId) {
    for (const c of state.clients) {
      const j = c.jobs.find((x) => x.id === jobId);
      if (j) return { client: c, job: j };
    }
    return null;
  }
  function allWorkers() {
    const set = new Set();
    for (const { job } of allJobsFlat()) if (job.worker) set.add(job.worker);
    for (const w of state.workers) if (w.name) set.add(w.name);
    return [...set].sort();
  }

  function matchMonthYear(deadline, month, year) {
    if (!deadline) return !month && !year;
    const [y, m] = deadline.split("-");
    if (year && y !== year) return false;
    if (month && m !== month) return false;
    return true;
  }

  function dateScopedEntries() {
    const sc = state.selectedClientIds;
    return allJobsFlat().filter(({ client, job }) => {
      if (sc.size && !sc.has(client.id)) return false;
      return matchMonthYear(job.deadline, state.filterMonth, state.filterYear);
    });
  }

  // ===== WORKER MANAGEMENT =====
  function getWorker(id) { return state.workers.find(w => w.id === id) || null; }
  function addWorker(name) {
    const w = { id: uid(), name: name.trim(), createdAt: Date.now(), paid: false, paymentAmount: 0 };
    state.workers.push(w);
    save(); renderWorkerSidebar();
    return w;
  }
  function deleteWorker(id) {
    state.workers = state.workers.filter(w => w.id !== id);
    for (const c of state.clients) {
      for (const j of c.jobs) {
        if (j.workerId === id) { j.workerId = ''; j.worker = ''; }
      }
    }
    save(); renderAll();
  }
  function workerProgress(workerId) {
    let sent = 0, total = 0;
    for (const c of state.clients) {
      for (const j of c.jobs) {
        if (j.workerId !== workerId) continue;
        const qty = j.workerQty || 1;
        total += qty;
        if (Array.isArray(j.workerLinks)) sent += j.workerLinks.filter(Boolean).length;
      }
    }
    return { sent, total };
  }
  function renderWorkerSidebar() {
    const list = document.getElementById('workerList');
    if (!list) return;
    list.innerHTML = '';
    if (state.workers.length === 0) {
      list.innerHTML = '<div style="padding:16px 8px;font-size:12px;color:var(--muted-2);text-align:center">' + _("noWorkers") + '</div>';
      return;
    }
    state.workers.forEach(w => {
      const div = document.createElement('div');
      div.className = 'worker-item';
      const prog = workerProgress(w.id);
      div.innerHTML = `
        <span class="worker-name">${escapeHtml(w.name)}</span>
        <span class="worker-badge" title="${_("sent")} ${prog.sent} / ${_("target")} ${prog.total}">${prog.sent}/${prog.total}</span>
        <button class="worker-link-btn" data-wid="${w.id}" title="${_("copyLinkTitle")}">${_("link")}</button>`;
      div.addEventListener('click', e => {
        if (e.target.closest('.worker-link-btn')) return;
        showWorkerDetail(w.id);
      });
      div.querySelector('.worker-link-btn').addEventListener('click', e => {
        e.stopPropagation();
        copyWorkerLink(w.id);
      });
      list.appendChild(div);
    });
  }
  function isFirebaseAuthed() {
    return typeof window.__firebase !== 'undefined' && window.__firebase.currentUser && window.__firebase.currentUser();
  }
  function workerLink(workerId) {
    const w = getWorker(workerId);
    if (!w) return '';
    const u = new URL(window.location.href.split('?')[0]);
    u.searchParams.set('worker', workerId);
    var ownerUid = isFirebaseAuthed() ? window.__firebase.currentUser().uid : '';
    if (!ownerUid) return '';
    u.searchParams.set('owner', ownerUid);
    return u.toString();
  }
  function copyWorkerLink(workerId) {
    if (!isFirebaseAuthed()) {
      toast(_("workerLinkNeedLogin"), true);
      const backdrop = document.getElementById("authBackdrop");
      if (backdrop) backdrop.classList.add("open");
      return;
    }
    const url = workerLink(workerId);
    if (!url) return;
    if (typeof window.__firebaseSaveNow === 'function') window.__firebaseSaveNow();
    navigator.clipboard.writeText(url).then(() => toast(_("workerLinkCopied")));
  }
  function showWorkerDetail(workerId) {
    const w = getWorker(workerId);
    if (!w) return;
    const overlay = document.getElementById('workerDetailOverlay');
    if (!overlay) return;
    overlay.dataset.workerId = workerId;
    document.getElementById('workerDetailTitle').textContent = w.name;
    const body = document.getElementById('workerDetailBody');
    const jobs = [];
    for (const c of state.clients) for (const j of c.jobs) if (j.workerId === workerId) jobs.push({ client: c, job: j });
    body.innerHTML = jobs.length ? `
      <table style="width:100%;border-collapse:collapse;font-size:12px">
        <thead><tr style="border-bottom:1px solid var(--border-soft)">
          <th style="padding:6px 8px;text-align:left">${_("client")}</th>
          <th style="padding:6px 8px;text-align:left">${_("song")}</th>
          <th style="padding:6px 8px;text-align:center">${_("jobQty")}</th>
          <th style="padding:6px 8px;text-align:center">${_("wkQty")}</th>
          <th style="padding:6px 8px;text-align:center">${_("linksSent")}</th>
          <th style="padding:6px 8px;text-align:center">${_("due")}</th>
          <th style="padding:6px 8px;text-align:center">${_("status")}</th>
          <th style="padding:6px 8px;text-align:center">${_("done")}</th>
        </tr></thead>
        <tbody>${jobs.map(({client, job}) => {
          const wlinks = job.workerLinks || [];
          const sentCount = wlinks.filter(Boolean).length;
          const wkQty2 = job.workerQty || 1;
          const linksBtn = sentCount > 0 ? '<button class="view-worker-links-btn btn btn-ghost" data-job-id="'+job.id+'" data-song="'+escapeAttr(job.songTitle || '')+'" style="font-size:11px;padding:3px 10px">' + _("viewLinks") + ' ('+sentCount+')</button>' : '<span style="color:var(--muted-2);font-size:11px">-</span>';
          return `<tr style="border-bottom:1px solid var(--border-soft)">
            <td style="padding:6px 8px">${escapeHtml(client.name)}</td>
            <td style="padding:6px 8px">${escapeHtml(job.songTitle || '-')}</td>
            <td style="padding:6px 8px;text-align:center">${job.jumlah || 1}</td>
            <td style="padding:6px 8px;text-align:center">${wkQty2}</td>
            <td style="padding:6px 8px;text-align:center">${sentCount}/${wkQty2}<br>${linksBtn}</td>
            <td style="padding:6px 8px;text-align:center">${job.deadline ? deadlineLabel(job.deadline) : '-'}</td>
            <td style="padding:6px 8px;text-align:center">${job.workerDone ? '<span style="color:var(--accent)">' + _("done") + '</span>' : '<span style="color:var(--accent-2)">' + _("pending") + '</span>'}</td>
            <td style="padding:6px 8px;text-align:center"><button class="worker-done-btn" data-job-id="${job.id}">${job.workerDone ? _("undo") : _("done")}</button></td>
          </tr>`;
        }).join('')}</tbody>
      </table>` : '<div style="padding:20px;text-align:center;color:var(--muted-2)">' + _("noTasks") + '</div>';
    body.querySelectorAll('.worker-done-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const e2 = findJobEntry(btn.dataset.jobId);
        if (e2) { e2.job.workerDone = !e2.job.workerDone; save(); showWorkerDetail(workerId); renderAll(); }
      });
    });
    body.querySelectorAll('.view-worker-links-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const jobId2 = btn.dataset.jobId;
        const song = btn.dataset.song || _("untitled");
        showWorkerLinksPopup(jobId2, song);
      });
    });
    openModal(overlay);
  }

  function showWorkerLinksPopup(jobId, songTitle) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-backdrop';
    overlay.style.cssText = 'z-index:9999';
    overlay.innerHTML = '<div class="modal" style="width:420px">'
      + '<div class="modal-head"><h2>' + _("links") + ' \u2014 ' + escapeHtml(songTitle) + '</h2><button class="icon-btn close-modal-btn" aria-label="' + _("close") + '"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button></div>'
      + '<div class="modal-body" style="max-height:50vh;overflow-y:auto"><div id="workerLinksPopupBody"></div></div>'
      + '<div class="modal-foot"><div class="spacer"></div><button class="btn btn-ghost close-modal-btn">' + _("close") + '</button></div>'
      + '</div>';
    document.body.appendChild(overlay);
    const body = overlay.querySelector('#workerLinksPopupBody');
    const entry = findJobEntry(jobId);
    if (entry) {
      const wlinks = entry.job.workerLinks || [];
      const hasAny = wlinks.some(Boolean);
      if (!hasAny) {
        body.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted-2);font-size:13px">' + _("noLinksSent") + '</div>';
      } else {
        body.innerHTML = '<div style="display:flex;flex-direction:column;gap:6px">'
          + wlinks.map(function(l, i) {
            if (!l) return '<div style="padding:8px 12px;background:var(--surface-alt);border-radius:var(--radius-sm);font-size:12px;color:var(--muted-2)">' + _("link") + ' ' + (i + 1) + ': <em>' + _("notSent") + '</em></div>';
            return '<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--accent-soft);border-radius:var(--radius-sm)"><span style="color:var(--accent);font-size:14px">\u2713</span><a href="'+escapeAttr(l)+'" target="_blank" rel="noopener" style="font-size:13px;color:var(--accent);text-decoration:none;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+escapeHtml(l)+'</a><span style="font-size:10px;color:var(--muted-2)">' + _("link") + ' ' + (i + 1) + '</span></div>';
          }).join('')
          + '</div>';
      }
    } else {
      body.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted-2);font-size:13px">' + _("jobNotFound") + '</div>';
    }
    overlay.querySelectorAll('.close-modal-btn').forEach(function(el) {
      el.addEventListener('click', function() { overlay.remove(); });
    });
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
    requestAnimationFrame(function() { overlay.classList.add('open'); });
  }

  function showBatchLinksPopup(key, clientId) {
    var items = [];
    for (var ci = 0; ci < state.clients.length; ci++) {
      var c = state.clients[ci];
      if (clientId && c.id !== clientId) continue;
      for (var ji = 0; ji < (c.jobs || []).length; ji++) {
        var j = c.jobs[ji];
        if (jobMatchesGroupKey(j, key)) {
          if (state.selectedJobIds.size > 0 && !state.selectedJobIds.has(j.id)) continue;
          items.push({ client: c, job: j });
        }
      }
    }
    showLinksReportPopup(items, _("postedLinks") + ' \u2014 ' + (key.startsWith('d:') ? jobDateLabel(items[0] && items[0].job) : batchLabel(key.slice(2))));
  }

  async function editBatchPrice(key, clientId) {
    const items = [];
    for (const c of state.clients) {
      if (clientId && c.id !== clientId) continue;
      for (const j of (c.jobs || [])) {
        if (jobMatchesGroupKey(j, key)) items.push({ client: c, job: j });
      }
    }
    if (!items.length) return;
    const cur = items.reduce((m, it) => Math.max(m, Number(it.job.price) || 0), 0);
    const raw = await inlinePrompt(_("editPricePrompt"), String(cur));
    if (raw === null) return;
    const val = Math.max(0, parseFloat(String(raw).replace(/[^\d.\-]/g, "")) || 0);
    const snap = saveSnapshot();
    items.forEach((it) => { it.job.price = val; });
    commitSnapshot(snap); save(); renderAll();
    toast(_("saved"), true);
  }

  function showSelectedAdReport() {
    var items = [];
    for (var ci = 0; ci < state.clients.length; ci++) {
      var c = state.clients[ci];
      for (var ji = 0; ji < (c.jobs || []).length; ji++) {
        var j = c.jobs[ji];
        if (state.selectedJobIds.has(j.id)) items.push({ client: c, job: j });
      }
    }
    showLinksReportPopup(items, _("clientAdReport") + ' \u2014 ' + state.selectedJobIds.size + ' ' + _("job") + ' ' + _("selected"));
  }

  function selectionHeaderHtml() {
    return `<div class="batch-header-inner"><span><button class="view-selected-ad-report-btn badge warn" style="cursor:pointer;margin-right:10px;font-size:11px">${_("clientAdReport")}</button><button class="add-batch-btn badge" style="cursor:pointer;margin-right:10px;font-size:11px">${_("addBatch")}</button><span class="batch-count">${state.selectedJobIds.size} ${_("job")} ${_("selected")}</span></span></div>`;
  }

  function syncStickyHeader() {
    if (!tableWrapEl) return;
    const th = tableWrapEl.querySelector("thead");
    if (!th) return;
    tableWrapEl.style.setProperty("--thead-h", th.offsetHeight + "px");
  }

  async function addBatchToSelected(ids) {
    let pool;
    if (ids && ids.length) {
      pool = ids.filter((id) => state.selectedJobIds.has(id));
    } else {
      pool = state.selectedJobIds.size ? [...state.selectedJobIds] : [];
    }
    const entries = allJobsFlat().filter(({job}) => pool.includes(job.id));
    if (!entries.length) { toast(_("selectJobFirst"), true); return; }
    const clientIds = new Set(entries.map(({client}) => client.id));
    if (clientIds.size > 1) { toast(_("batchDiffClient"), true); return; }
    const raw = await inlinePrompt(_("addBatchPrompt"), "");
    if (raw === null) return;
    const name = String(raw).trim();
    if (!name) return;
    const snap = saveSnapshot();
    entries.forEach(({job}) => { job.batch = name; });
    commitSnapshot(snap); save(); renderAll();
    toast(_("batch") + ": " + name);
  }

  function showLinksReportPopup(items, title) {
    var overlay = document.createElement('div');
    overlay.className = 'modal-backdrop';
    overlay.style.cssText = 'z-index:9999';
    overlay.innerHTML = '<div class="modal" style="width:600px;max-width:95vw">'
      + '<div class="modal-head"><h2>' + escapeHtml(title) + '</h2><button class="icon-btn close-modal-btn" aria-label="' + _("close") + '"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button></div>'
      + '<div class="modal-body" style="max-height:60vh;overflow-y:auto;padding:12px 16px"><div id="batchLinksPopupBody"></div></div>'
      + '<div class="modal-foot"><div class="spacer"></div><button class="btn btn-ghost close-modal-btn">' + _("close") + '</button></div>'
      + '</div>';
    document.body.appendChild(overlay);
    var body = overlay.querySelector('#batchLinksPopupBody');
    var hasAny = items.some(function(it) { var wl = it.job.workerLinks || []; var al = it.job.links || []; return wl.some(Boolean) || al.length > 0; });
    if (!hasAny) {
      body.innerHTML = '<div style="padding:30px;text-align:center;color:var(--muted-2);font-size:13px">' + _("noLinksPosted") + '</div>';
    } else {
      var html = '<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:var(--radius-md);padding:12px 16px">';
      var idx = 0;
      items.forEach(function(it) {
        var job = it.job, client = it.client;
        var wlinks = job.workerLinks || [];
        var alinks = job.links || [];
        var urls = [];
        alinks.forEach(function(al) { urls.push(al.url); });
        wlinks.forEach(function(wl) { if (wl) urls.push(wl); });
        if (urls.length === 0) return;
        idx++;
        html += '<div style="font-family:monospace;font-size:13px;margin-bottom:6px;color:var(--accent);font-weight:600">' + escapeHtml(idx + '. ' + (job.songTitle || _("untitled"))) + '</div>';
        if (state.selectedClientIds.size === 0 && state.selectedJobIds.size > 0) {
          html += '<div style="font-family:monospace;font-size:11px;padding:0 0 2px 24px;color:var(--muted-2)">' + escapeHtml(client.name) + '</div>';
        }
        urls.forEach(function(u) {
          html += '<div style="font-family:monospace;font-size:12px;padding:2px 0 2px 24px"><a href="' + escapeAttr(u) + '" target="_blank" rel="noopener" style="color:var(--text);text-decoration:none">' + escapeHtml(u) + '</a></div>';
        });
        html += '<div style="height:6px"></div>';
      });
      html += '</div>';
      body.innerHTML = html;
    }
    // copy all
    var textParts = [];
    items.forEach(function(it) {
      var urls = [];
      (it.job.links || []).forEach(function(al) { urls.push(al.url); });
      (it.job.workerLinks || []).forEach(function(wl) { if (wl) urls.push(wl); });
      if (urls.length === 0) return;
      textParts.push((it.job.songTitle || _("untitled")) + '\n' + urls.join('\n'));
    });
    var cpAll = document.createElement('button');
    cpAll.className = 'btn btn-primary';
    cpAll.textContent = _("copyAll") + ' (' + textParts.length + ')';
    cpAll.style.cssText = 'font-size:12px;padding:6px 16px;margin-bottom:12px';
    cpAll.addEventListener('click', function() {
      var text = textParts.join('\n\n');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
          var orig = cpAll.textContent; cpAll.textContent = _("copied") + '!'; cpAll.style.opacity = '0.6';
          setTimeout(function() { cpAll.textContent = orig; cpAll.style.opacity = ''; }, 1200);
        }).catch(function() {});
      }
    });
    if (textParts.length > 0) body.prepend(cpAll);
    overlay.querySelectorAll('.close-modal-btn').forEach(function(el) {
      el.addEventListener('click', function() { overlay.remove(); });
    });
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
    requestAnimationFrame(function() { overlay.classList.add('open'); });
  }

  // ===== BATCH HELPERS =====
  function batchLabel(b) { return b && b.trim() ? b.trim() : _("noBatch"); }
  function jobDateKey(job) {
    const ts = job && (job.createdAt || job.dateAdded);
    if (!ts) return '';
    const d = new Date(ts);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function jobDateLabel(job) {
    const ts = job && (job.createdAt || job.dateAdded);
    if (!ts) return '';
    const d = new Date(ts);
    return d.getDate() + ' ' + monthName(d.getMonth() + 1) + ' ' + d.getFullYear();
  }
  // ponytail: createdAt is "newest"; reused by batch grouping + entry sort
  const jobDeadlineTime = (job) => {
    const dl = job && job.deadline;
    return dl ? Date.parse(dl) : Infinity;
  };
  function jobMatchesGroupKey(job, key) {
    if (key.startsWith('d:')) return jobDateKey(job) === key.slice(2);
    if (key.startsWith('b:')) {
      const b = key.slice(2);
      return ((job.batch || '').trim() === b.trim()) || (!b.trim() && !job.batch);
    }
    return false;
  }

  // ===== LINK HELPERS =====
  function linkQtySum(links) { return (links || []).reduce((s, l) => s + (l.qty || 1), 0); }
  function openLinkModal(jobId) {
    const overlay = document.getElementById('linkModalOverlay');
    if (!overlay) return;
    overlay.dataset.jobId = jobId;
    const entry = findJobEntry(jobId);
    if (!entry) return;
    document.getElementById('linkModalTitle').textContent = _("linkPost") + ' - ' + (entry.job.songTitle || _("untitled"));
    const list = document.getElementById('linkList');
    const links = entry.job.links || [];
    const max = entry.job.jumlah || 1;
    const total = linkQtySum(links);
    document.getElementById('linkModalCount').textContent = total + ' / ' + max;
    const full = total >= max;
    document.getElementById('newLinkInput').style.display = full ? 'none' : '';
    document.getElementById('addLinkBtn').style.display = full ? 'none' : '';
    if (links.length === 0) {
      list.innerHTML = '<li style="color:var(--muted-2);text-align:center;padding:12px">' + _("noLinksYet") + '</li>';
    } else {
      list.innerHTML = links.map((l, i) =>
        `<li><a href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.url)}</a><span style="color:var(--muted-2);font-size:11px">${_("qty")}: ${l.qty || 1}</span><button class="del-link" data-li="${i}">&times;</button></li>`
      ).join('');
      list.querySelectorAll('.del-link').forEach(btn => {
        btn.addEventListener('click', () => {
          const entry2 = findJobEntry(jobId);
          if (!entry2) return;
          const li = parseInt(btn.dataset.li);
          if (!isNaN(li)) { entry2.job.links.splice(li, 1); save(); openLinkModal(jobId); renderAll(); }
        });
      });
    }
    document.getElementById('addLinkBtn').onclick = () => {
      const inp = document.getElementById('newLinkInput');
      const url = inp.value.trim();
      if (!url) return;
      const entry3 = findJobEntry(jobId);
      if (!entry3) return;
      if (!Array.isArray(entry3.job.links)) entry3.job.links = [];
      if (linkQtySum(entry3.job.links) >= (entry3.job.jumlah || 1)) return;
      entry3.job.links.push({ url, qty: 1 });
      inp.value = '';
      save(); openLinkModal(jobId); renderAll();
    };
    document.getElementById('newLinkInput').onkeydown = e => { if (e.key === 'Enter') document.getElementById('addLinkBtn').click(); };
    openModal(overlay);
  }

  function visibleEntries() {
    const q = state.search.trim().toLowerCase();
    const f = state.filters;
    return dateScopedEntries().filter(({ client, job }) => {
      if (state.notedOnly && !(job.note && job.note.trim())) return false;
      if (state.batchOnly && !((job.batch || "").trim())) return false;
      if (f.worker && job.worker !== f.worker) return false;
      if (f.due) {
        const d = daysUntil(job.deadline);
        if (f.due === "COMING") { if (d === null || d <= 0) return false; }
        else if (f.due === "DONE") { if (d === null || d > 0) return false; }
      }
      if (f.post) {
        const pTotal = linkQtySum(job.links || []);
        const pMax = job.jumlah || 1;
        if (f.post === "POSTED" && pTotal < pMax) return false;
        if (f.post === "NOT YET" && pTotal > 0) return false;
      }
      if (f.paid && job.paidStatus !== f.paid) return false;
      if (f.workerPaid && job.workerPaid !== f.workerPaid) return false;
      if (q) {
        const hay = `${job.songTitle} ${job.worker} ${client.name} ${job.note}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }).sort((a, b) => {
      const sort = f.sortBy;
      if (sort === "custom") {
        const order = currentProject()?.customJobOrder || [];
        const ia = order.indexOf(a.job.id);
        const ib = order.indexOf(b.job.id);
        return (ia === -1 ? 1e9 : ia) - (ib === -1 ? 1e9 : ib);
      }
      if (sort === "urgent") {
        const sa = urgentEntryScore(a), sb = urgentEntryScore(b);
        if (sa !== sb) return sa - sb;
        const da = Math.abs(daysUntil(a.job.deadline) ?? Infinity);
        const db = Math.abs(daysUntil(b.job.deadline) ?? Infinity);
        return da - db || (a.job.no ?? 0) - (b.job.no ?? 0);
      }
      if (sort === "newest") return jobDeadlineTime(b.job) - jobDeadlineTime(a.job) || (b.job.no ?? 0) - (a.job.no ?? 0);
      if (sort === "oldest") return jobDeadlineTime(a.job) - jobDeadlineTime(b.job) || (a.job.no ?? 0) - (b.job.no ?? 0);
      if (sort === "az") return a.client.name.localeCompare(b.client.name) || (a.job.no ?? 0) - (b.job.no ?? 0);
      if (sort === "za") return b.client.name.localeCompare(a.client.name) || (a.job.no ?? 0) - (b.job.no ?? 0);
      return (a.client.name.localeCompare(b.client.name)) || ((a.job.no ?? 0) - (b.job.no ?? 0));
    });
  }

  // ---------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------
  const $ = (sel) => document.querySelector(sel);
  const clientListEl = $("#clientList");
  const metersEl = $("#meters");
  const tableWrapEl = $("#tableWrap");
  const filterTitleEl = $("#filterTitle");
  window.addEventListener("resize", syncStickyHeader);
  window.addEventListener("load", () => setTimeout(syncStickyHeader, 0));
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(() => syncStickyHeader()).observe(tableWrapEl);
  }

  tableWrapEl.addEventListener("click", function (e) {
    const btn = e.target.closest(".batch-price-edit-btn");
    if (btn) { e.stopPropagation(); editBatchPrice(btn.dataset.key, btn.dataset.client); }
    const paidBtn = e.target.closest('[data-action="toggle-batch-paid"]');
    if (paidBtn) {
      e.stopPropagation();
      const clientId = paidBtn.dataset.client;
      const sub = paidBtn.dataset.key;
      const items = [];
      for (const c of state.clients) {
        if (clientId && c.id !== clientId) continue;
        for (const j of (c.jobs || [])) {
          if (jobMatchesGroupKey(j, sub)) items.push({ client: c, job: j });
        }
      }
      if (!items.length) return;
      const allPaid = items.every((it) => it.job.paidStatus === "PAID");
      const snap = saveSnapshot();
      items.forEach((it) => { it.job.paidStatus = allPaid ? "NOT YET" : "PAID"; });
      commitSnapshot(snap); save(); renderTable(); renderMeters();
    }
  });

  function money(n, currency) {
    const c = CURRENCIES[currency || settings.currency] || CURRENCIES.USD;
    return c.sym + (Number(n) || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function compactMoney(n, currency) {
    const c = CURRENCIES[currency || settings.currency] || CURRENCIES.USD;
    const v = Number(n) || 0;
    const useFull = c.code === "IDR" || settings.lang === "id" || settings.lang === "ms";
    if (useFull) {
      const s = v.toLocaleString("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return c.sym + " " + s;
    }
    if (v >= 1e9) return c.sym + (v / 1e9).toFixed(2) + "B";
    if (v >= 1e6) return c.sym + (v / 1e6).toFixed(2) + "M";
    return c.sym + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function renderClientList() {
    clientListEl.innerHTML = "";
    const sortedClients = [...state.clients].sort((a, b) => (a.name || "").localeCompare(b.name || "", undefined, { numeric: true }));
    for (const c of sortedClients) {
      const item = document.createElement("div");
      item.className = "client-item" + (state.selectedClientIds.has(c.id) ? " active" : "");
      item.dataset.clientId = c.id;
      item.innerHTML = `
        <span class="client-name">${escapeHtml(c.name)}</span>
        <span class="client-count">${c.jobs.length}</span>
        <button class="client-edit-btn" title="${_("editClient")}" aria-label="${_("editClient")} ${escapeHtml(c.name)}">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M11.3 2.3a1.5 1.5 0 012.1 2.1L5 12.8l-3 .7.7-3 8.6-8.2z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
        </button>`;
      item.addEventListener("click", (e) => {
        if (e.target.closest(".client-edit-btn")) return openClientModal(c.id);
        e.preventDefault();
        state.batchOnly = false;
        state.allJobs = false;
        if (e.shiftKey) {
          const ids = sortedClients.map((x) => x.id);
          const anchorIx = ids.indexOf(state.clientShiftAnchor ?? c.id);
          const clickIx = ids.indexOf(c.id);
          if (anchorIx !== -1 && clickIx !== -1) {
            const [lo, hi] = anchorIx < clickIx ? [anchorIx, clickIx] : [clickIx, anchorIx];
            state.selectedClientIds = new Set(ids.slice(lo, hi + 1));
          }
          state.selectedJobIds = new Set();
        } else if (e.ctrlKey || e.metaKey) {
          if (state.selectedClientIds.has(c.id)) state.selectedClientIds.delete(c.id);
          else state.selectedClientIds.add(c.id);
          state.clientShiftAnchor = c.id;
          state.selectedJobIds = new Set();
        } else {
          state.selectedClientIds = new Set([c.id]);
          state.selectedJobIds = new Set();
          state.clientShiftAnchor = c.id;
        }
        renderAll();
        window.autoHideSidebar?.(1250);
      });
      clientListEl.appendChild(item);
    }
  }

  function renderNotedList() {
    const el = $("#notedList");
    if (!el) return;
    el.innerHTML = "";
    const noted = [];
    for (const c of state.clients) {
      for (const j of c.jobs) {
        if (j.note && j.note.trim()) noted.push({ client: c, job: j });
      }
    }
    if (noted.length === 0) {
      el.innerHTML = `<div class="noted-empty">${_("noNotes")}</div>`;
      return;
    }
    for (const { client, job } of noted) {
      const item = document.createElement("div");
      item.className = "noted-item";
      item.dataset.jobId = job.id;
      item.innerHTML = `
        <span class="noted-song">${escapeHtml(job.songTitle || "—")}</span>
        <span class="noted-client">${escapeHtml(client.name)}${job.no != null ? " · " + job.no : ""}</span>
        <span class="noted-note">${escapeHtml(job.note)}</span>`;
      item.addEventListener("click", () => {
        el.querySelectorAll(".noted-item.active").forEach(n => n.classList.remove("active"));
        item.classList.add("active");
        openJobModal(job.id);
      });
      el.appendChild(item);
    }
  }

  function renderProjectList() {
    const el = $("#projectList");
    if (!el) return;
    $("#btnProjectModal")?.addEventListener("click", () => openProjectPopup());
    el.innerHTML = "";
    const jobsItem = document.createElement("div");
    jobsItem.className = "client-item" + (state.allJobs ? " active" : "");
    jobsItem.dataset.clientId = "";
    jobsItem.innerHTML = `<span class="client-name">${_("allJobs")}</span><span class="client-count">${state.clients.reduce((n, c) => n + c.jobs.length, 0)}</span>`;
    jobsItem.addEventListener("click", () => { state.allJobs = true; state.batchOnly = false; state.selectedClientIds = new Set(); state.selectedJobIds = new Set(); state.clientShiftAnchor = null; renderAll(); window.autoHideSidebar?.(1250); });
    el.appendChild(jobsItem);
    const batchItem = document.createElement("div");
    batchItem.className = "client-item" + (state.batchOnly ? " active" : "");
    batchItem.dataset.clientId = "";
    batchItem.innerHTML = `<span class="client-name">${_("batch")}</span><span class="client-count">${state.clients.reduce((n, c) => n + c.jobs.filter(j => ((j.batch || "").trim())).length, 0)}</span>`;
    batchItem.addEventListener("click", () => { state.batchOnly = true; state.allJobs = false; state.selectedClientIds = new Set(); state.selectedJobIds = new Set(); state.clientShiftAnchor = null; renderAll(); window.autoHideSidebar?.(1250); });
    el.appendChild(batchItem);
  }

  function detectPlatform(url) {
    try {
      const u = new URL(url);
      const host = u.hostname.toLowerCase();
      if (host.includes("tiktok")) return "tiktok";
      if (host.includes("instagram") || host.includes("instagr")) return "instagram";
      if (host.includes("youtube") || host.includes("youtu.be")) return "youtube";
      if (host.includes("twitter") || host.includes("x.com")) return "twitter";
      if (host.includes("facebook") || host.includes("fb.com")) return "facebook";
      if (host.includes("snapchat")) return "snapchat";
      if (host.includes("telegram")) return "telegram";
      if (host.includes("whatsapp")) return "whatsapp";
      if (host.includes("linkedin")) return "linkedin";
      if (host.includes("discord")) return "discord";
      if (host.includes("threads")) return "threads";
      return "link";
    } catch { return "link"; }
  }

  function platformIcon(platform) {
    const icons = {
      tiktok: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 8s-1-1-3-1c-2 0-3 1-3 1s-1-1-3-1c-2 0-3 1-3 1s-1-1-3-1C5 7 4 8 4 8"/><path d="M12 4v1"/><path d="M4 6v.01"/><path d="M20 6v.01"/><path d="M9 12h6"/><path d="M10 12v4"/><path d="M14 12v4"/><path d="M6 16h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"/></svg>',
      instagram: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><path d="M17.5 6.5h.01"/></svg>',
      youtube: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22.5 6.9a2.8 2.8 0 00-2-2C18.9 4.4 12 4.4 12 4.4s-6.9 0-8.5.5a2.8 2.8 0 00-2 2A30 30 0 001 12a30 30 0 00.5 5.1 2.8 2.8 0 002 2c1.6.5 8.5.5 8.5.5s6.9 0 8.5-.5a2.8 2.8 0 002-2A30 30 0 0023 12a30 30 0 00-.5-5.1z"/><path d="M10 15.5V8.5l5 3.5-5 3.5z"/></svg>',
      twitter: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4l11.7 16H20L8.3 4H4z"/><path d="M4 20l6.5-8M20 4l-6.5 8"/></svg>',
      facebook: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/></svg>'
    };
    return icons[platform] || '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 007.5 3.5l3.5 3.5"/><path d="M15 3a6 6 0 100 12 6 6 0 000-12z"/></svg>';
  }

  function extractUsername(url) {
    try {
      const u = new URL(url);
      const parts = u.pathname.replace(/\/+$/, "").split("/").filter(Boolean);
      const at = parts.find(p => p.startsWith("@"));
      if (at) return at;
      const valid = parts.filter(p => !/^[0-9a-f]{8,}$/i.test(p) && p.length > 1);
      if (valid.length) return "@" + valid[valid.length - 1];
      return "";
    } catch { return ""; }
  }

  function renderAccountLink(url) {
    if (!url) return "";
    const platform = detectPlatform(url);
    const username = extractUsername(url);
    return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener" class="account-link-icon" title="${platform} ${username}" onclick="event.stopPropagation()">${platformIcon(platform)}<span class="account-link-username">${escapeHtml(username || url.replace(/https?:\/\//,"").replace(/\/$/,""))}</span></a>`;
  }

  function renderMeters() {
    const entries = dateScopedEntries();
    const total = entries.length;
    const totalQty = entries.reduce((s, e) => s + (Number(e.job.jumlah) || 1), 0);
    const posted = entries.reduce((s, e) => s + linkQtySum(e.job.links || []), 0);

    function sumPrice(arr, paidFilter, useWorkerFee) {
      // per-batch pricing: only count price once per batch (by client+batch)
      const seen = new Set();
      return arr
        .filter(paidFilter)
        .filter(e => {
          const b = e.job.batch || '';
          if (!b) return true; // no batch = always count
          const key = e.client.id + '|' + b;
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        })
        .reduce((s, e) => {
          const amt = useWorkerFee ? (Number(e.job.workerFee) || 0) : (Number(e.job.price) || 0);
          const fromCur = useWorkerFee ? (e.job.workerFeeCurrency || "USD") : (e.job.priceCurrency || "USD");
          return s + convert(amt, fromCur, settings.currency);
        }, 0);
    }

    const revenueCollected = sumPrice(entries, (e) => e.job.paidStatus === "PAID", false);
    const revenuePending = sumPrice(entries, (e) => e.job.paidStatus !== "PAID", false);
    const workerPaidAmt = sumPrice(entries, (e) => e.job.workerPaid === "PAID", true);
    const workerPendingAmt = sumPrice(entries, (e) => e.job.workerPaid !== "PAID", true);
    const overdue = entries.filter((e) => { const d = daysUntil(e.job.deadline); return d !== null && d < 0; }).length;

    const meters = [
      { label: _("totalJob"), value: total, sub: `${overdue} ${_("deadlineOverdue")}`, cls: "" },
      { label: _("posted"), value: `${posted}/${totalQty}`, sub: totalQty ? Math.round((posted/totalQty)*100)+_("postedPct") : "\u2014", cls: "accent" },
      { label: _("revenueCollected"), value: compactMoney(revenueCollected - workerPaidAmt), sub: _("fromClient"), cls: "accent", money: true },
      { label: _("revenuePending"), value: compactMoney(revenuePending), sub: _("notBilled"), cls: "amber", money: true },
      { label: _("workerPaidLabel"), value: compactMoney(workerPaidAmt), sub: _("workerPaidSub"), cls: "accent", money: true },
      { label: _("workerPendingLabel"), value: compactMoney(workerPendingAmt), sub: _("workerPendingSub"), cls: "danger", money: true },
    ];

    metersEl.innerHTML = meters.map((m, i) => `
      <div class="meter" style="--meter-color:${m.cls==='danger'?'var(--danger)':m.cls==='amber'?'var(--accent-2)':'var(--accent)'};animation-delay:${i*35}ms">
        <div class="meter-label">${m.label}</div>
        <div class="meter-value ${m.cls}">${m.money && settings.hideMoney ? "***" : m.value}</div>
        <div class="meter-sub">${m.sub}</div>
      </div>`).join("");
  }

  function badge(text, kind) {
    return `<span class="badge ${kind}">${escapeHtml(text)}</span>`;
  }
  function statusKind(field, value) {
    return value === "POSTED" || value === "PAID" ? "ok" : "bad";
  }
  function linkCell(url, label) {
    if (!url || url === "-" ) return `<span class="dash">\u2014</span>`;
    const safe = escapeAttr(url);
    return `<a href="${safe}" target="_blank" rel="noopener noreferrer">${label} \u2197</a>`;
  }

  function renderJobRow(client, job, idx) {
    const cls = (state.selectedJobIds.has(job.id) ? " sel" : "") + (state.cutJobIds.has(job.id) ? " cut" : "");
    const noteAttr = job.note ? `data-note="${escapeAttr(job.note)}"` : "";
    const links = job.links || [];
    const max = job.jumlah || 1;
    const total = linkQtySum(links);
    const linkStatus = total >= max ? 'ok' : (total > 0 ? 'warn' : 'bad');
    const linkText = total >= max ? total + '/' + max : (total > 0 ? total + '/' + max : _("addLinks"));
    const workerOpts = '<option value="">--</option>' + state.workers.map(w => `<option value="${escapeAttr(w.id)}"${job.workerId === w.id ? ' selected' : ''}>${escapeHtml(w.name)}</option>`).join('');
    const wkQty = job.workerQty || 1;
    return `
        <tr style="animation-delay:${Math.min(idx,8)*30}ms" data-job-id="${job.id}" class="${cls}" ${noteAttr}>
          <td class="cell-no">${idx}</td>
          <td class="cell-client" title="${escapeAttr(client.name)}">${escapeHtml(client.name)}</td>
          <td class="cell-song" title="${escapeAttr(job.songTitle)}">${escapeHtml(job.songTitle || "—")}</td>
          <td class="cell-link cell-audio">${linkCell(job.songLink, _("sound"))}${job.note ? `<span class="sn-wrap" title="${escapeAttr(job.note)}"><span class="sn-track"><span class="sn-text">${escapeHtml(job.note)}</span><span class="sn-text" aria-hidden="true">${escapeHtml(job.note)}</span></span></span>` : ""}</td>
          <td>${badge(deadlineLabel(job.deadline), deadlineKind(job.deadline))}</td>
          <td><button class="dot-toggle ${total >= max ? "post" : (total > 0 ? "partial" : (job.onWorking ? "working" : ""))}" data-action="toggle-working" title="${_("working")}" aria-pressed="${!!job.onWorking}"><span class="dot-logo"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="7" fill="#5E6AD2"/><g stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18.6 4.6 12.8 19 9.9 12.3 3.4 9.6Z"/><path d="M18.6 4.6 9.9 12.3"/></g></svg></span></button></td>
          <td><span class="badge ${total >= max ? 'ok' : (total > 0 ? 'warn' : 'bad')}" title="${_("links")}: ${total}/${max}">${total >= max ? 'POSTED' : (total > 0 ? total + '/' + max : 'NOT YET')}</span></td>
          <td class="cell-qty"><span class="qty-num">${max}</span></td>
          <td class="cell-link"><button class="link-btn-sm badge ${linkStatus}" data-job-id="${job.id}" style="cursor:pointer">${linkText}</button></td>
          <td class="cell-worker"><select class="tbl-worker-select" data-job-id="${job.id}">${workerOpts}</select></td>
          <td class="cell-wkqty">${job.workerId ? `<input type="number" class="tbl-wkqty-input" data-job-id="${job.id}" min="1" value="${wkQty}">` : '<span class="dash">~</span>'}</td>
          <td>${job.workerId ? `<span class="badge ${statusKind("workerPaid", job.workerPaid)}" data-action="toggle-workerpaid">${escapeHtml(job.workerPaid || "NOT YET")}</span>` : '<span class="dash">~</span>'}</td>
          <td class="cell-wnote">
            <button class="wnote-btn${job.workerNote ? " has-note" : ""}" data-action="edit-workernote" title="${escapeAttr(job.workerNote || _("workerNote"))}">
              <svg class="wnote-ico" width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 2.5h10v8L9.5 13H3z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M5.5 6.5h5M5.5 8.5h3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
              ${job.workerNote ? `<span class="wnote-txt">${escapeHtml(job.workerNote)}</span>` : ""}
            </button>
          </td>
          <td class="cell-actions">
            <button class="row-menu-btn" data-action="edit" title="${_("editJob")}">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M11.3 2.3a1.5 1.5 0 012.1 2.1L5 12.8l-3 .7.7-3 8.6-8.2z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
            </button>
          </td>
        </tr>`;
  }
  function renderTable() {
    const entries = visibleEntries();
    let title = state.notedOnly ? _("noted") : state.allJobs ? _("allJobs") : state.batchOnly ? _("batch") : state.selectedClientIds.size === 1 ? (findClient(state.selectedClientIds.values().next().value)?.name || _("client")) : state.selectedClientIds.size > 1 ? _("multipleClients") : _("allClient");
    if (state.filterYear) {
      title += " \u00B7 " + (state.filterMonth ? monthName(state.filterMonth) + " " : "") + state.filterYear;
    }
    filterTitleEl.textContent = title + ` \u00B7 ${entries.length} ${_("job")}`;
    // client social links in filterbar
    const filterSocialEl = $("#filterSocial");
    if (filterSocialEl) {
      let socialHtml = "";
      if (state.selectedClientIds.size === 1) {
        const c = findClient(state.selectedClientIds.values().next().value);
        if (c) socialHtml = renderAccountLink(c.accountLink || "");
      }
      filterSocialEl.innerHTML = socialHtml;
    }

    if (state.clients.length === 0) {
      tableWrapEl.innerHTML = `
        <div class="empty-state">
          <h3>${_("noClient")}</h3>
          <p>${_("noClientDesc")}</p>
          <button class="btn btn-primary" id="emptyAddClient">${_("addClientBtn")}</button>
        </div>`;
      $("#emptyAddClient")?.addEventListener("click", () => openClientModal(null));
      return;
    }
    if (entries.length === 0) {
      tableWrapEl.innerHTML = `
        <div class="empty-state">
          <h3>${_("noMatch")}</h3>
          <p>${_("noMatchDesc")}</p>
          <button class="btn btn-primary" id="emptyAddJob">${_("newJobBtn")}</button>
        </div>`;
      $("#emptyAddJob")?.addEventListener("click", () => openJobModal(null));
      return;
    }

    // Determine whether to show batch headers
    const isAllClients = state.selectedClientIds.size === 0;
    const hasSelectedJobs = state.selectedJobIds.size > 0;

    let rowHtml = '';
    let globalIdx = 0;

    if (state.allJobs || (!state.batchOnly && isAllClients && hasSelectedJobs)) {
      // All Jobs: flat list, no batch headers. All Clients with selection: summary header + flat list.
      if (!state.allJobs) {
        rowHtml += `<tr class="batch-header sel-header"><td colspan="14">${selectionHeaderHtml()}</td></tr>`;
      }
      entries.forEach(({ client, job }) => {
        globalIdx++;
        rowHtml += renderJobRow(client, job, globalIdx);
      });
    } else {
      // All Clients & individual client(s) — group by client + batch (fallback: add date)
      const groups = {};
      entries.forEach(({ client, job }) => {
        const b = ((job && job.batch) || '').trim();
        const key = b ? client.id + '|b:' + b : client.id + '|d:' + (jobDateKey(job) || '');
        if (!groups[key]) groups[key] = [];
        groups[key].push({ client, job });
      });
      const sort = state.filters.sortBy;
      // custom drag: only customJobOrder reorders; empty order = newest base
      const customOrder = sort === "custom" && (currentProject()?.customJobOrder || []).length ? currentProject().customJobOrder : null;
      const sortOrder = customOrder ? (a, b) => {
        const ia = customOrder.indexOf(a.job.id), ib = customOrder.indexOf(b.job.id);
        return (ia === -1 ? 1e9 : ia) - (ib === -1 ? 1e9 : ib);
      } : sort === "urgent" ? (a, b) => {
        const sa = urgentEntryScore(a), sb = urgentEntryScore(b);
        if (sa !== sb) return sa - sb;
        return (Math.abs(daysUntil(a.job.deadline) ?? Infinity) - Math.abs(daysUntil(b.job.deadline) ?? Infinity)) || (a.job.no ?? 0) - (b.job.no ?? 0);
      } : sort === "az" || sort === "za" ? (a, b) => {
        const d = a.client.name.localeCompare(b.client.name);
        return sort === "az" ? d : -d;
      } : (a, b) => {
        const ta = jobDeadlineTime(a.job), tb = jobDeadlineTime(b.job);
        return sort === "oldest" ? ta - tb : tb - ta;
      };
      const groupScore = (key) => customOrder
        ? customOrder.indexOf(groups[key][0].job.id)
        : sort === "urgent"
          ? groups[key].reduce((m, it) => Math.min(m, urgentEntryScore(it)), 2)
          : sort === "az" || sort === "za"
            ? groups[key][0].client.name
            : groups[key].reduce((m, it) => {
                const s = jobDeadlineTime(it.job);
                return (m === null || (sort === "oldest" ? s < m : s > m)) ? s : m;
              }, null);
      const batchKeys = Object.keys(groups).sort((a, b) => {
        const sa = groupScore(a), sb = groupScore(b);
        if (sa === null) return sb === null ? 0 : 1;
        if (sb === null) return -1;
        if (customOrder) return (sa === -1 ? 1e9 : sa) - (sb === -1 ? 1e9 : sb);
        if (sort === "urgent") return sa - sb;
        if (sort === "az" || sort === "za") return sa.localeCompare(sb);
        return sort === "oldest" ? sa - sb : sb - sa;
      });
      batchKeys.forEach(key => {
        const items = groups[key].slice().sort(sortOrder);
        const sep = key.indexOf('|');
        const clientId = key.slice(0, sep);
        const sub = key.slice(sep + 1);
        const batchClientName = items[0].client ? items[0].client.name : '';
        const batchHasPosted = items.some(function(it) { var wl = it.job.workerLinks || []; var al = it.job.links || []; return wl.some(Boolean) || al.length > 0; });
        const isBatchGroup = sub.startsWith('b:') && sub.slice(2).trim();
        let batchPrice;
        if (isBatchGroup) {
          const maxIt = items.reduce((m, it) => (Number(it.job.price) || 0) > (Number(m.job.price) || 0) ? it : m, items[0]);
          batchPrice = convert(Number(maxIt.job.price) || 0, maxIt.job.priceCurrency || "USD", settings.currency);
        } else {
          batchPrice = items.reduce((s, it) => s + convert(Number(it.job.price) || 0, it.job.priceCurrency || "USD", settings.currency), 0);
        }
        const label = sub.startsWith('d:') ? (jobDateKey(items[0].job) ? jobDateLabel(items[0].job) : batchLabel('')) : batchLabel(sub.slice(2));
        const groupIds = items.map(({job}) => job.id).join(',');
        const groupSelCount = items.filter(({job}) => state.selectedJobIds.has(job.id)).length;
        const groupAddBatch = groupSelCount ? `<button class="add-batch-btn badge" data-ids="${escapeAttr(groupIds)}" style="cursor:pointer;margin-right:10px;font-size:11px">${_("addBatch")}</button>` : '';
        const batchPaid = items.every(({ job }) => job.paidStatus === "PAID");
        const batchPaidBadge = `<span class="badge ${batchPaid ? 'ok' : 'bad'}" data-action="toggle-batch-paid" data-client="${escapeAttr(clientId)}" data-key="${escapeAttr(sub)}" style="cursor:pointer" title="${escapeAttr(_("paid"))}">${batchPaid ? 'PAID' : 'NOT YET'}</span>`;
        rowHtml += `<tr class="batch-header"><td colspan="14"><div class="batch-header-inner"><span>${groupAddBatch}${batchHasPosted ? '<button class="view-batch-posted-btn badge warn" data-client="'+escapeAttr(clientId)+'" data-key="'+escapeAttr(sub)+'" style="cursor:pointer;margin-right:10px;font-size:11px">' + _("clientAdReport") + '</button>' : ''}<span class="batch-label">${isAllClients ? escapeHtml(batchClientName) + ' \u00B7 ' : ''}${escapeHtml(label)}</span><span class="batch-count">${items.length} ${_("job")}</span></span><div style="display:flex;align-items:center;gap:8px;margin-left:auto"><span class="batch-price">${escapeHtml(money(batchPrice, settings.currency))}</span>${batchPaidBadge}<button class="batch-price-edit-btn" data-client="${escapeAttr(clientId)}" data-key="${escapeAttr(sub)}" title="${escapeAttr(_("editPrice"))}" style="cursor:pointer;background:none;border:none;color:var(--muted-2);padding:2px;display:inline-flex;align-items:center"><svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M11.3 2.3a1.5 1.5 0 012.1 2.1L5 12.8l-3 .7.7-3 8.6-8.2z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg></button></div></div></td></tr>`;
        items.forEach(({ client, job }, batchIdx) => {
          globalIdx++;
          rowHtml += renderJobRow(client, job, globalIdx);
        });
      });
    }

    tableWrapEl.innerHTML = `
      <table>
        <thead><tr>
          <th>${_("no")}</th><th>${_("client")}</th><th>${_("song")}</th><th>${_("link")}</th><th>${_("due")}</th><th>${_("working")}</th><th>${_("post")}</th><th>${_("qty")}</th><th>${_("postLink")}</th><th>${_("worker")}</th><th>${_("wkQty")}</th><th>${_("workerPaid")}</th><th>${_("workerNote")}</th><th></th>
        </tr></thead>
        <tbody>${rowHtml}</tbody>
      </table>`;

    tableWrapEl.querySelectorAll("tr[data-job-id]").forEach((tr) => {
      const jobId = tr.dataset.jobId;
      tr.addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
        if (e.shiftKey) {
          e.preventDefault();
          const ids = visibleEntries().map(({job}) => job.id);
          const anchorIx = ids.indexOf(state.shiftAnchorId ?? jobId);
          const clickIx = ids.indexOf(jobId);
          if (anchorIx !== -1 && clickIx !== -1) {
            const [lo, hi] = anchorIx < clickIx ? [anchorIx, clickIx] : [clickIx, anchorIx];
            state.selectedJobIds = new Set(ids.slice(lo, hi + 1));
          }
        } else if (e.ctrlKey || e.metaKey) {
          if (state.selectedJobIds.has(jobId)) state.selectedJobIds.delete(jobId);
          else state.selectedJobIds.add(jobId);
          state.shiftAnchorId = jobId;
        } else {
          state.selectedJobIds = new Set([jobId]);
          state.shiftAnchorId = jobId;
        }
        updateSelection();
      });
      // note marquee: only animate when the note is longer than the cell
      const snWrap = tr.querySelector(".sn-wrap");
      if (snWrap) {
        const snTxt = snWrap.querySelector(".sn-text");
        if (snTxt && snTxt.scrollWidth <= snWrap.clientWidth) snWrap.classList.add("sn-fit");
      }
      tr.querySelector('[data-action="edit"]').addEventListener("click", () => openJobModal(jobId));
      tr.addEventListener("dblclick", () => openJobModal(jobId));
      tr.querySelector('[data-action="toggle-working"]').addEventListener("click", (e) => {
        e.stopPropagation();
        const ids = state.selectedJobIds.size > 1 ? state.selectedJobIds : new Set([jobId]);
        let changed = false;
        for (const id of ids) {
          const entry = findJobEntry(id);
          if (!entry) continue;
          entry.job.onWorking = !entry.job.onWorking;
          changed = true;
        }
        if (changed) { save(); renderTable(); renderMeters(); }
      });
      ["paid", "workerpaid"].forEach((key) => {
        const el = tr.querySelector(`[data-action="toggle-${key}"]`);
        if (!el) return;
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          const ids = state.selectedJobIds.size > 1 ? state.selectedJobIds : new Set([jobId]);
          const toggleMap = { paid: ["PAID", "NOT YET"], workerpaid: ["PAID", "NOT YET"] };
          const [onVal, offVal] = toggleMap[key];
          const field = { paid: "paidStatus", workerpaid: "workerPaid" }[key];
          let changed = false;
          for (const id of ids) {
            const entry = findJobEntry(id);
            if (!entry) continue;
            const old = entry.job[field];
            entry.job[field] = old === onVal ? offVal : onVal;
            changed = true;
          }
          if (changed) { save(); renderTable(); renderMeters(); }
        });
      });
      const wnBtn = tr.querySelector('[data-action="edit-workernote"]');
      if (wnBtn) wnBtn.addEventListener("click", (e) => { e.stopPropagation(); openWorkerNoteModal(jobId); });
// drag-and-drop reorder only in custom sort mode
      tr.draggable = state.filters.sortBy === "custom";
      tr.addEventListener("dragstart", (e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", jobId);
        tr.classList.add("drag");
      });
      tr.addEventListener("dragend", () => tr.classList.remove("drag"));
      tr.addEventListener("dragover", (e) => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; tr.classList.add("drop-target"); });
      tr.addEventListener("dragleave", () => tr.classList.remove("drop-target"));
      tr.addEventListener("drop", (e) => {
        e.preventDefault();
        tr.classList.remove("drop-target");
        const fromId = e.dataTransfer.getData("text/plain");
        if (!fromId || fromId === jobId) return;
        const tbody = tr.parentNode;
        const rows = [...tbody.querySelectorAll("tr[data-job-id]")];
        const fromRow = tbody.querySelector(`tr[data-job-id="${fromId}"]`);
        if (!fromRow) return;
        const rect = tr.getBoundingClientRect();
        const after = e.clientY > rect.top + rect.height / 2;
        if (after) {
          const next = tr.nextElementSibling;
          if (next) tbody.insertBefore(fromRow, next);
          else tbody.appendChild(fromRow);
        } else {
          tbody.insertBefore(fromRow, tr);
        }
        const proj = currentProject();
        if (proj) {
          proj.customJobOrder = [...tbody.querySelectorAll("tr[data-job-id]")].map(r => r.dataset.jobId);
          if (state.filters.sortBy !== "custom") {
            state.filters.sortBy = "custom";
            const sortSel = $("#sortBy");
            if (sortSel) sortSel.value = "custom";
          }
          save();
        }
      });
    });
    // link buttons
    // link button (post link) — opens link modal
    tableWrapEl.querySelectorAll('.link-btn-sm').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); openLinkModal(btn.dataset.jobId); });
    });
    // view posted batch links
    tableWrapEl.querySelectorAll('.view-batch-posted-btn').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); showBatchLinksPopup(btn.dataset.key, btn.dataset.client); });
    });
    // edit batch price — handled via delegated listener on tableWrapEl
    // view selected jobs ad report (All Clients)
    tableWrapEl.querySelectorAll('.view-selected-ad-report-btn').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); showSelectedAdReport(); });
    });
    // add batch to selected jobs
    tableWrapEl.querySelectorAll('.add-batch-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        addBatchToSelected(btn.dataset.ids ? btn.dataset.ids.split(',') : null);
      });
    });
    // add post link button
    // worker select
    tableWrapEl.querySelectorAll('.tbl-worker-select').forEach(sel => {
      sel.addEventListener('change', e => {
        e.stopPropagation();
        const jobId = sel.dataset.jobId;
        const entry = findJobEntry(jobId);
        if (!entry) return;
        const wid = sel.value;
        const w = wid ? getWorker(wid) : null;
        entry.job.workerId = wid;
        entry.job.worker = w ? w.name : '';
        if (wid && !entry.job.workerQty) entry.job.workerQty = 1;
        entry.job.workerDone = false;
        save(); renderTable(); renderMeters();
      });
    });
    // worker qty input
    tableWrapEl.querySelectorAll('.tbl-wkqty-input').forEach(inp => {
      inp.addEventListener('change', e => {
        e.stopPropagation();
        const jobId = inp.dataset.jobId;
        const entry = findJobEntry(jobId);
        if (!entry) return;
        entry.job.workerQty = Math.max(1, parseInt(inp.value) || 1);
        save();
      });
    });
    syncStickyHeader();
    window.autoHideSidebar?.(1250);
  }

  function renderSkeleton() {
    tableWrapEl.innerHTML = Array.from({ length: 6 }).map(() => `
      <div class="skeleton-row">
        <div class="sk" style="width:28px"></div>
        <div class="sk" style="width:90px"></div>
        <div class="sk" style="width:70px"></div>
        <div class="sk" style="width:180px"></div>
        <div class="sk" style="width:60px"></div>
        <div class="sk" style="width:60px;margin-left:auto"></div>
      </div>`).join("");
  }

  function renderMonthYearOptions() {
    const years = new Set(); const months = new Set();
    for (const { job } of allJobsFlat()) {
      if (!job.deadline) continue;
      const [y, m] = job.deadline.split("-");
      if (y) years.add(y);
      if (m) months.add(m);
    }
    const sortedYears = [...years].sort();
    const sortedMonths = [...months].sort((a, b) => Number(a) - Number(b));
    const yearSel = $("#filterYear");
    const curY = yearSel.value;
    yearSel.innerHTML = `<option value="">${_("all")}</option>` + sortedYears.map(y => `<option value="${y}">${y}</option>`).join("");
    yearSel.value = curY;

    const monthSel = $("#filterMonth");
    const curM = monthSel.value;
    monthSel.innerHTML = `<option value="">${_("month")}</option>` + sortedMonths.map(m => `<option value="${m}">${monthName(m)}</option>`).join("");
    monthSel.value = curM;
  }

  function renderFilterOptions() {
    const workerSel = $("#filterWorker");
    const cur = workerSel.value;
    workerSel.innerHTML = `<option value="">${_("allWorker")}</option>` + allWorkers().map((w) => `<option value="${escapeAttr(w)}">${escapeHtml(w)}</option>`).join("");
    workerSel.value = cur;
  }

  function renderClientSelect() {
    const sel = $("#jobClient");
    sel.innerHTML = state.clients.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join("");
  }

  function renderCurrencySelects() {
    // job modal price currency
    const sel = $("#jobPriceCurrency");
    const cur = sel.value || "USD";
    sel.innerHTML = CURRENCY_CODES.map(c => `<option value="${c}">${CURRENCIES[c].sym} ${c}</option>`).join("");
    sel.value = cur;

    // job modal worker fee currency
    const fSel = $("#jobWorkerFeeCurrency");
    const fCur = fSel.value || "USD";
    fSel.innerHTML = CURRENCY_CODES.map(c => `<option value="${c}">${CURRENCIES[c].sym} ${c}</option>`).join("");
    fSel.value = fCur;

    // settings currency
    const sSel = $("#settingsCurrency");
    const sCur = sSel.value || settings.currency;
    sSel.innerHTML = CURRENCY_CODES.map(c => `<option value="${c}">${CURRENCIES[c].sym} ${c} \u2014 ${CURRENCIES[c].name}</option>`).join("");
    sSel.value = sCur;
  }

  // ===== WORKER VIEW (public worker link) =====
  var workerViewAdminData = null;
  var workerViewError = null;
  function initWorkerView() {
    const params = new URLSearchParams(window.location.search);
    const wid = params.get('worker');
    const oid = params.get('owner');
    if (wid && oid) {
      state.isWorkerView = true;
      state.workerViewWorkerId = wid;
      state.workerViewOwnerId = oid;
      return true;
    }
    return false;
  }
  var workerViewUnsub = null;
  function startWorkerViewRealtime() {
    if (!state.isWorkerView) return;
    const oid = state.workerViewOwnerId;
    if (!oid || typeof window.__firebase === 'undefined' || !window.__firebase.ready() || typeof firebase === 'undefined') {
      console.warn('Worker view: Firebase not available, oid=' + oid + ' ready=' + (typeof window.__firebase !== 'undefined' && window.__firebase.ready()));
      workerViewError = 'no-firebase';
      renderAll();
      return;
    }
    var db = firebase.firestore();
    if (workerViewUnsub) workerViewUnsub();
    workerViewUnsub = db.collection('users').doc(oid).onSnapshot(function(doc) {
      if (doc.exists) {
        workerViewAdminData = doc.data();
        workerViewError = null;
      } else {
        console.warn('Worker view: admin doc not found for', oid);
        workerViewAdminData = null;
        workerViewError = 'not-found';
      }
      renderAll();
    }, function(err) {
      console.error('Worker view: realtime error:', err);
      workerViewAdminData = null;
      workerViewError = 'not-found';
      renderAll();
    });
  }
  function renderWorkerView() {
    document.querySelector('.body-shell').style.display = 'none';
    document.querySelector('.topbar').style.display = 'none';
    let container = document.getElementById('workerViewContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'workerViewContainer';
      container.style.cssText = 'padding:24px;max-width:900px;margin:0 auto;';
      document.body.prepend(container);
    }
    if (!workerViewAdminData) {
      var notAvailMsg = workerViewError === 'no-firebase' ? _("workerViewNoInternet") : _("workerViewNoCloud");
      container.innerHTML = '<div style="padding:40px;text-align:center;color:var(--muted-2);font-size:14px">' + notAvailMsg + '<br><br><button class="btn btn-primary" onclick="location.reload()" style="font-size:13px;padding:8px 20px">' + _("tryAgain") + '</button></div>';
      return;
    }
    var projects = workerViewAdminData.projects || [];
    var allClients = [];
    projects.forEach(function(p) {
      (p.clients || []).forEach(function(c) { allClients.push(c); });
    });
    var wid = state.workerViewWorkerId;
    var oid = state.workerViewOwnerId;
    var hasAnyJob = false;
    var jobs = [];
    allClients.forEach(function(c) {
      (c.jobs || []).forEach(function(j) {
        if (j.workerId === wid) {
          hasAnyJob = true;
          if (!j.workerDone) jobs.push({ client: c, job: j });
        }
      });
    });
    var w = null;
    if (workerViewAdminData.workers) w = workerViewAdminData.workers.find(function(x) { return x.id === wid; });
    var name = w ? w.name : _("worker");
    container.innerHTML = `
      <div style="margin-bottom:24px">
        <h1 style="font-size:22px;margin:0 0 2px">${_("hello")}, ${escapeHtml(name)}</h1>
        <p style="color:var(--muted-2);font-size:13px;margin:0">${jobs.length} ${jobs.length !== 1 ? _("pendingTasks") : _("pendingTask")}</p>
      </div>
      ${jobs.length === 0 ? '<div style="padding:60px 20px;text-align:center;color:var(--muted-2);font-size:14px">' + (hasAnyJob ? _("allTasksDone") : _("workerViewNoTasksYet")) + '</div>' :
      jobs.map(function(item) {
        var j = item.job;
        var wkQty = j.workerQty || 1;
        var str = '<div class="wk-task-card" style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-md);padding:16px;margin-bottom:10px">';
        str += '<div style="font-size:15px;font-weight:600;margin-bottom:8px">' + escapeHtml(j.songTitle || _("untitled")) + '</div>';
        if (j.deadline) str += '<div style="font-size:12px;color:var(--muted);margin-bottom:4px">' + _("due") + ': ' + deadlineLabel(j.deadline) + '</div>';
        if (j.workerNote) str += '<div style="font-size:12px;margin-bottom:8px;padding:8px 10px;background:var(--accent-soft);border-radius:var(--radius-sm);color:var(--accent)"><strong>' + _("workerNote") + ':</strong> ' + escapeHtml(j.workerNote) + '</div>';
        if (j.note) str += '<div style="font-size:12px;color:var(--muted);margin-bottom:8px">' + escapeHtml(j.note) + '</div>';
        str += '<div style="font-size:12px;color:var(--muted-2);margin-bottom:10px">' + _("target") + ': ' + wkQty + ' ' + (wkQty > 1 ? _("links") : _("link")) + '</div>';
        if (j.songLink) str += '<div style="margin-bottom:10px"><a href="' + escapeAttr(j.songLink) + '" target="_blank" rel="noopener" style="font-size:12px;color:var(--accent)">' + _("openAudio") + '</a></div>';
        str += '<div class="wk-link-rows" data-wk-job-id="' + j.id + '">';
        for (var li = 0; li < wkQty; li++) {
          var linkVal = (j.workerLinks && j.workerLinks[li]) || '';
          var sent = !!linkVal;
          if (sent) {
            str += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;padding:6px 10px;background:var(--accent-soft);border-radius:var(--radius-sm)"><span style="color:var(--accent);font-size:14px">&#10003;</span><a href="' + escapeAttr(linkVal) + '" target="_blank" rel="noopener" style="font-size:12px;color:var(--accent);text-decoration:none;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(linkVal) + '</a><span style="font-size:10px;color:var(--muted-2)">' + _("link") + ' ' + (li + 1) + ' ' + _("sent") + '</span></div>';
          } else {
            str += '<div style="display:flex;gap:6px;margin-bottom:4px"><input type="url" class="wk-link-inp" data-li="' + li + '" placeholder="' + _("link") + ' ' + (li + 1) + '..." style="flex:1;padding:6px 10px;font-size:12px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--surface);color:var(--text);font-family:var(--font-body)"><button class="wk-link-send btn btn-primary" data-li="' + li + '" style="font-size:11px;padding:6px 14px">' + _("send") + '</button></div>';
          }
        }
        str += '</div>';
        var allSent = true;
        for (var li2 = 0; li2 < wkQty; li2++) {
          if (!(j.workerLinks && j.workerLinks[li2])) { allSent = false; break; }
        }
        if (allSent && !j.workerDone) {
          str += '<div style="margin-top:10px;text-align:right"><button class="wk-mark-done btn btn-primary" data-job-id="' + j.id + '" style="font-size:12px;padding:6px 16px">' + _("markComplete") + '</button></div>';
        }
        if (j.workerDone) {
          str += '<div style="margin-top:8px;text-align:center;font-size:13px;color:var(--accent);font-weight:600">&#10003; ' + _("completed") + '</div>';
        }
        str += '</div>';
        return str;
      }.bind(this)).join('')}
      <div style="margin-top:16px;text-align:center;color:var(--muted-2);font-size:12px">${_("syncSaved")} — ${_("realtime")}</div>`;
    container.querySelectorAll('.wk-link-send').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var card = btn.closest('.wk-task-card');
        var jobId = card.querySelector('.wk-link-rows').dataset.wkJobId;
        var li = parseInt(btn.dataset.li);
        var inp = btn.parentElement.querySelector('.wk-link-inp');
        var url = inp.value.trim();
        if (!url) return;
        var found = false;
        allClients.forEach(function(c) {
          (c.jobs || []).forEach(function(j) {
            if (j.id === jobId) {
              if (!Array.isArray(j.workerLinks)) j.workerLinks = [];
              j.workerLinks[li] = url;
              found = true;
            }
          });
        });
        if (found && oid && typeof window.__firebase !== 'undefined' && window.__firebase.ready() && typeof firebase !== 'undefined') {
          inp.disabled = true; btn.textContent = '...';
          delete workerViewAdminData.writer;
          firebase.firestore().collection('users').doc(oid).set(workerViewAdminData).then(function() {
            toast(_("link") + ' ' + (li + 1) + ' ' + _("sent") + '!');
            renderWorkerView();
          }).catch(function(err) {
            console.error('Worker send error:', err);
            toast(_("sendFailed"), true);
            renderWorkerView();
          });
        } else {
          renderWorkerView();
        }
      });
    });
    container.querySelectorAll('.wk-link-inp').forEach(function(inp) {
      inp.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') { var btn = inp.parentElement.querySelector('.wk-link-send'); if (btn) btn.click(); }
      });
    });
    container.querySelectorAll('.wk-mark-done').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var jobId = btn.dataset.jobId;
        var found = false;
        allClients.forEach(function(c) {
          (c.jobs || []).forEach(function(j) {
            if (j.id === jobId) {
              j.workerDone = true;
              found = true;
            }
          });
        });
        if (found && oid && typeof window.__firebase !== 'undefined' && window.__firebase.ready() && typeof firebase !== 'undefined') {
          delete workerViewAdminData.writer;
          firebase.firestore().collection('users').doc(oid).set(workerViewAdminData).then(function() {
            toast(_("markedComplete"));
            renderWorkerView();
          }).catch(function(err) {
            console.error('Worker mark done error:', err);
            toast(_("markFailed"), true);
            renderWorkerView();
          });
        } else {
          renderWorkerView();
        }
      });
    });
  }

  function renderAll() {
    if (state.isWorkerView) { renderWorkerView(); return; }
    const proj = currentProject();
    if (proj && state.clients !== proj.clients) state.clients = proj.clients;
    renderProjectSwitcher();
    hideWelcomeIfData();
    renderClientList();
    renderProjectList();
    renderNotedList();
    renderMonthYearOptions();
    renderMeters();
    renderFilterOptions();
    renderClientSelect();
    renderCurrencySelects();
    const sortSel = $("#sortBy");
    if (sortSel && sortSel.value !== state.filters.sortBy) sortSel.value = state.filters.sortBy;
    renderTable();
    renderWorkerSidebar();
    applyI18n();
  }

  function escapeHtml(s) { return String(s ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])); }
  function escapeAttr(s) { return escapeHtml(s); }

  // ---------------------------------------------------------------
  // i18n DOM updater
  // ---------------------------------------------------------------
  function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (key && _(key)) el.textContent = _(key);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.dataset.i18nTitle;
      if (key && _(key)) el.title = _(key);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      if (key && _(key)) el.innerHTML = _(key);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const key = el.dataset.i18nAria;
      if (key && _(key)) el.setAttribute("aria-label", _(key));
    });
    document.querySelector("#searchInput").placeholder = _("searchPlaceholder");

    const setPlaceholder = (sel, key) => { const e = document.querySelector(sel); if (e) e.placeholder = _(key); };
    setPlaceholder("#jobNote", "note");
    setPlaceholder("#workerNoteInput", "workerNotePh");
    setPlaceholder("#clientName", "clientNamePh");
    // update labels with for attributes
    const labelMap = { jobDeadline: "due",
      jobPrice: "pricePerVid",
      jobPaidStatus: "paidStatus", jobWorkerPaid: "workerPaid", jobWorkerFee: "workerFee", jobNote: "note",
      jobClient: "client", clientName: "clientNameLabel", jobWorkerFeeCurrency: "workerFee" };
    document.querySelectorAll("label[for]").forEach(el => {
      const key = labelMap[el.getAttribute("for")];
      if (key && _(key)) el.textContent = _(key);
    });
  }

  // ---------------------------------------------------------------
  // Toasts
  // ---------------------------------------------------------------
  function toast(msg, danger) {
    const el = document.createElement("div");
    el.className = "toast" + (danger ? " danger" : "");
    el.textContent = msg;
    $("#toastStack").appendChild(el);
    setTimeout(() => {
      el.classList.add("leaving");
      setTimeout(() => el.remove(), 150);
    }, 2400);
  }

  // ---------------------------------------------------------------
  // Clipboard helpers
  // ---------------------------------------------------------------
  function jobToText(client, job) {
    return `${_("client")}: ${client.name}\n${_("no")}: ${job.no ?? ""}\n${_("worker")}: ${job.worker}\n${_("due")}: ${job.deadline || _("notYet")}\n${_("songTitle")}: ${job.songTitle}\n${_("songLink")}: ${job.songLink}\n${_("postStatus")}: ${job.postStatus}\n${_("postLink")}: ${job.postLink}\n${_("paid")}: ${job.paidStatus}\n${_("price")}: ${money(job.price, job.priceCurrency)}\n${_("workerPaid")}: ${job.workerPaid}\n${_("workerFee")}: ${job.workerFee}\n${_("workerNote")}: ${job.workerNote || ""}\n${_("note") || "Note"}: ${job.note}`;
  }

  function copySelected() {
    const entries = state.selectedJobIds.size
      ? allJobsFlat().filter(({job}) => state.selectedJobIds.has(job.id))
      : [];
    if (!entries.length) { toast(_("selectJobFirst"), true); return; }
    const text = entries.map(({client, job}) => jobToText(client, job)).join("\n---\n");
    navigator.clipboard.writeText(text).then(() => {
      state.clipboard = true;
      toast(_("copied") + " " + entries.length + " " + _("job"));
    });
  }

  function duplicateSelected() {
    const entries = state.selectedJobIds.size
      ? allJobsFlat().filter(({job}) => state.selectedJobIds.has(job.id))
      : [];
    if (!entries.length) { toast(_("selectJobFirst"), true); return; }
    const entry = entries[0];
    openJobModal(null, { ...entry.job, id: uid() });
  }

  function deleteSelected() {
    const entries = state.selectedJobIds.size
      ? allJobsFlat().filter(({job}) => state.selectedJobIds.has(job.id))
      : [];
    if (!entries.length) { toast(_("selectJobFirst"), true); return; }
    confirmAction(
      _("confirmDeleteJob") + " (" + entries.length + " " + _("job") + ")",
      () => {
        deleteIds(state.selectedJobIds);
      }
    );
  }

  function deleteIds(ids) {
    const snap = saveSnapshot();
    for (const { client, job } of allJobsFlat().filter(({job}) => ids.has(job.id))) {
      client.jobs = client.jobs.filter((j) => j.id !== job.id);
    }
    state.selectedJobIds = new Set();
    commitSnapshot(snap); save(); renderAll();
    toast(_("jobDeleted"), true);
  }

  function renumberClient(client) {
    client.jobs.forEach((j, i) => { j.no = i + 1; });
  }

  function updateSelection() {
    tableWrapEl.querySelectorAll("tr[data-job-id]").forEach((tr) => {
      tr.classList.toggle("sel", state.selectedJobIds.has(tr.dataset.jobId));
    });
    // batch mode shows per-batch Add Batch buttons — re-render so they appear on selection
    if (state.batchOnly) { renderTable(); return; }
    // update batch header in All Clients mode with selection
    if (state.selectedClientIds.size === 0 && !state.batchOnly) {
      let headerRow = tableWrapEl.querySelector("tr.batch-header");
      if (state.selectedJobIds.size > 0) {
        const html = `<td colspan="14">${selectionHeaderHtml()}</td>`;
        if (headerRow) {
          headerRow.innerHTML = html;
        } else {
          const tbody = tableWrapEl.querySelector("tbody");
          if (tbody) {
            headerRow = document.createElement("tr");
            headerRow.className = "batch-header sel-header";
            headerRow.innerHTML = html;
            tbody.insertBefore(headerRow, tbody.firstChild);
          }
        }
        const reportBtn = headerRow ? headerRow.querySelector('.view-selected-ad-report-btn') : null;
        if (reportBtn) reportBtn.addEventListener('click', e => { e.stopPropagation(); showSelectedAdReport(); });
        const addBatchBtn = headerRow ? headerRow.querySelector('.add-batch-btn') : null;
        if (addBatchBtn) addBatchBtn.addEventListener('click', e => { e.stopPropagation(); addBatchToSelected(); });
        syncStickyHeader();
      } else if (headerRow) {
        headerRow.remove();
      }
    }
  }

  // ---------------------------------------------------------------
  // Settings modal
  // ---------------------------------------------------------------
  const settingsModal = $("#settingsBackdrop");
  const accountModal = $("#accountModal");
  $("#btnSettings").addEventListener("click", () => {
    $("#settingsLang").value = settings.lang;
    $("#settingsTheme").value = settings.theme || "light";
    renderCurrencySelects();
    $("#shortcutRef").innerHTML = _("shortcuts");
    openModal(settingsModal);
  });
  $("#settingsClose").addEventListener("click", () => closeModal(settingsModal));
  $("#settingsSave").addEventListener("click", () => {
    settings.lang = $("#settingsLang").value;
    settings.theme = $("#settingsTheme").value;
    settings.currency = $("#settingsCurrency").value;
    applyTheme();
    saveSettings();
    closeModal(settingsModal);
    fetchRates().then(() => renderAll());
  });
  $("#resetLocalDataBtn").addEventListener("click", () => {
    if (confirm(_("resetConfirm"))) {
      if (typeof window.__firebase !== 'undefined' && typeof window.__firebase.resetData === 'function') {
        window.__firebase.resetData().then(() => { location.reload(); });
      }
    }
  });

  // ---------------------------------------------------------------
  // Job modal
  // ---------------------------------------------------------------
  const jobModal = $("#jobModalBackdrop");
  const jobForm = $("#jobForm");
  let editingJobId = null;
  let dupSource = null;

  function addSongRow(container, title, link, qty) {
    const idx = container.querySelectorAll('.song-row').length;
    const row = document.createElement('div');
    row.className = 'song-row';
    row.innerHTML = `
      <div class="song-row-head">
        <span class="song-idx">${idx + 1}.</span>
        <input type="text" class="sr-title" placeholder="${_("songTitlePlaceholder")}" value="${escapeAttr(title || '')}">
        <button type="button" class="sr-del" title="${_("remove")}">&times;</button>
      </div>
      <div class="song-row-body">
        <input type="url" class="sr-link" placeholder="${_("audioLinkPlaceholder")}" value="${escapeAttr(link || '')}">
        <label class="sr-qty-label">${_("qty")} <input type="number" class="sr-qty" min="1" value="${qty || 1}"></label>
      </div>`;
    row.querySelector('.sr-del').addEventListener('click', () => { row.remove(); syncDeadlineFields(); syncBatchField(); });
    container.appendChild(row);
    syncDeadlineFields();
    syncBatchField();
  }

  function syncDeadlineFields() {
    const singleField = document.getElementById('jobDeadlineField');
    if (singleField) singleField.style.display = '';
  }

  let batchAutoValue = null;
  function nextBatchFor(clientId) {
    const c = findClient(clientId);
    let max = 0;
    if (c) c.jobs.forEach(j => {
      const m = String(j.batch || '').trim().match(/^#?(\d+)$/);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    });
    return '#' + (max + 1);
  }
  function syncBatchField() {
    const rows = document.querySelectorAll('#songRows .song-row');
    const batchInput = $("#jobBatch");
    if (!batchInput) return;
    if (rows.length > 1) {
      if (!batchInput.value.trim()) {
        const val = nextBatchFor($("#jobClient").value);
        batchInput.value = val;
        batchAutoValue = val;
      } else if (!(batchAutoValue && batchInput.value === batchAutoValue)) {
        batchAutoValue = null;
      }
    } else {
      if (batchAutoValue && batchInput.value === batchAutoValue) batchInput.value = '';
      batchAutoValue = null;
    }
  }

  function renderSongRows(job) {
    const container = document.getElementById('songRows');
    if (!container) return;
    container.innerHTML = '';
    if (job) {
      addSongRow(container, job.songTitle, job.songLink, job.jumlah || 1);
    } else {
      addSongRow(container, '', '', 1);
    }
  }

  function openJobModal(jobId, prefill) {
    editingJobId = jobId;
    dupSource = prefill || null;
    renderClientSelect();
    renderCurrencySelects();
    const fill = (id, val) => { const el = $("#" + id); if (el) el.value = val ?? ""; };
    if (jobId) {
      const entry = findJobEntry(jobId);
      if (!entry) return;
      const { client, job } = entry;
      $("#jobModalTitle").textContent = _("editJob");
      $("#jobId").value = job.id;
      $("#jobClient").value = client.id;
      fill("jobBatch", job.batch);
      fill("jobDeadline", job.deadline);
      fill("jobPrice", job.price);
      $("#jobPriceCurrency").value = job.priceCurrency || "USD";
      $("#jobPaidStatus").value = job.paidStatus || "NOT YET";
      $("#jobWorkerPaid").value = job.workerPaid || "NOT YET";
      $("#jobWorkerFeeCurrency").value = job.workerFeeCurrency || "USD";
      fill("jobWorkerFee", job.workerFee);
      fill("jobNote", job.note);
      renderSongRows(job);
      $("#jobDelete").style.display = "";
    } else if (prefill) {
      $("#jobModalTitle").textContent = _("dupJob");
      jobForm.reset();
      $("#jobId").value = prefill.id || "";
      const firstClient = state.selectedClientIds.values().next().value;
      $("#jobClient").value = prefill.clientId || (firstClient || "");
      fill("jobBatch", prefill.batch);
      fill("jobDeadline", prefill.deadline);
      fill("jobPrice", prefill.price);
      $("#jobPriceCurrency").value = prefill.priceCurrency || "USD";
      $("#jobPaidStatus").value = prefill.paidStatus || "NOT YET";
      $("#jobWorkerPaid").value = prefill.workerPaid || "NOT YET";
      $("#jobWorkerFeeCurrency").value = prefill.workerFeeCurrency || "USD";
      fill("jobWorkerFee", prefill.workerFee);
      fill("jobNote", prefill.note);
      renderSongRows(prefill);
      $("#jobDelete").style.display = "none";
    } else {
      $("#jobModalTitle").textContent = _("newJobTitle");
      jobForm.reset();
      $("#jobId").value = "";
      const fc = state.selectedClientIds.values().next().value;
      if (fc) $("#jobClient").value = fc;
      autoBatchForNew();
      $("#jobPaidStatus").value = "NOT YET";
      $("#jobWorkerPaid").value = "NOT YET";
      renderSongRows();
      $("#jobDelete").style.display = "none";
    }
    openModal(jobModal);
    setTimeout(() => { const f = $(".sr-title"); if (f) f.focus(); }, 50);
  }
  function closeJobModal() { closeModal(jobModal); editingJobId = null; dupSource = null; }

  function autoBatchForNew() {
    if (editingJobId || dupSource) return;
    const clientId = $("#jobClient").value;
    if (!clientId) return;
    fill("jobBatch", nextBatchFor(clientId));
  }
  $("#jobClient").addEventListener("change", autoBatchForNew);

  function collectSongs() {
    const rows = document.querySelectorAll('#songRows .song-row');
    const globalDeadline = $("#jobDeadline") ? $("#jobDeadline").value : '';
    const songs = [];
    rows.forEach(row => {
      const title = (row.querySelector('.sr-title').value || '').trim();
      const link = (row.querySelector('.sr-link').value || '').trim();
      const qty = Math.max(1, parseInt(row.querySelector('.sr-qty').value) || 1);
      if (title || link) songs.push({ songTitle: title, songLink: link, jumlah: qty, deadline: globalDeadline });
    });
    return songs;
  }

  jobForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const clientId = $("#jobClient").value;
    const client = findClient(clientId);
    if (!client) { toast(_("pickClient"), true); return; }
    const snap = saveSnapshot();

    const batch = $("#jobBatch").value.trim();
    const editingEntry = editingJobId ? findJobEntry(editingJobId) : null;
    const srcJob = editingEntry ? editingEntry.job : dupSource;
    const shared = {
      workerId: srcJob ? (srcJob.workerId || "") : "",
      worker: srcJob ? (srcJob.worker || "") : "",
      batch: batch,
      deadline: $("#jobDeadline").value || "",
      postStatus: srcJob ? (srcJob.postStatus || "NOT YET") : "NOT YET",
      links: srcJob && Array.isArray(srcJob.links) ? srcJob.links : [],
      price: Number($("#jobPrice").value) || 0,
      priceCurrency: $("#jobPriceCurrency").value || "USD",
      paidStatus: $("#jobPaidStatus").value,
      workerPaid: $("#jobWorkerPaid").value,
      workerFee: Number($("#jobWorkerFee").value) || 0,
      workerFeeCurrency: $("#jobWorkerFeeCurrency").value || "USD",
      note: $("#jobNote").value.trim(),
    };

    const songs = collectSongs();
    if (songs.length === 0) { toast(_("enterSong"), true); return; }

    if (editingJobId) {
      const entry = findJobEntry(editingJobId);
      if (entry) {
        const merged = { ...shared, ...songs[0] };
        if (!merged.deadline) merged.deadline = shared.deadline;
        if (entry.client.id !== clientId) {
          entry.client.jobs = entry.client.jobs.filter((j) => j.id !== editingJobId);
          client.jobs.push(Object.assign(entry.job, merged));
        } else {
          Object.assign(entry.job, merged);
        }
      }
      toast(_("jobUpdated"));
    } else {
      const no = nextNoFor(client);
      const createdAt = Date.now();
      songs.forEach((s, i) => {
        const jobData = { id: uid(), no: no + i, ...shared, ...s, links: (shared.links || []).map(l => ({ url: l.url, qty: l.qty })), createdAt };
        if (!jobData.deadline) jobData.deadline = shared.deadline;
        client.jobs.push(jobData);
      });
      toast(songs.length + " " + _("job") + " " + _("added"));
    }
    save(); commitSnapshot(snap);
    closeJobModal();
    renderAll();
  });

  function nextNoFor(client) {
    return client.jobs.reduce((max, j) => Math.max(max, j.no || 0), 0) + 1;
  }

  $("#jobDelete").addEventListener("click", () => {
    if (!editingJobId) return;
    confirmAction(_("confirmDeleteJob"), () => {
      const snap = saveSnapshot();
      const entry = findJobEntry(editingJobId);
      if (entry) entry.client.jobs = entry.client.jobs.filter((j) => j.id !== editingJobId);
      commitSnapshot(snap); save(); closeJobModal(); renderAll();
      toast(_("jobDeleted"), true);
    });
  });
  $("#jobCancel").addEventListener("click", closeJobModal);
  $("#jobModalClose").addEventListener("click", closeJobModal);
  $("#btnAddJob").addEventListener("click", () => {
    if (state.clients.length === 0) { toast(_("addClientFirst"), true); openClientModal(null); return; }
    openJobModal(null);
  });

  // ---------------------------------------------------------------
  // Worker note modal (note untuk worker, terpisah dari note admin)
  // ---------------------------------------------------------------
  const workerNoteModal = $("#workerNoteModal");
  let workerNoteJobId = null;
  function openWorkerNoteModal(jobId) {
    const entry = findJobEntry(jobId);
    if (!entry) return;
    workerNoteJobId = jobId;
    $("#workerNoteInput").value = entry.job.workerNote || "";
    openModal(workerNoteModal);
    setTimeout(() => $("#workerNoteInput").focus(), 50);
  }
  function closeWorkerNoteModal() { closeModal(workerNoteModal); workerNoteJobId = null; }
  $("#workerNoteSave").addEventListener("click", () => {
    if (!workerNoteJobId) return;
    const entry = findJobEntry(workerNoteJobId);
    if (entry) { entry.job.workerNote = $("#workerNoteInput").value.trim(); save(); toast(_("saved")); }
    closeWorkerNoteModal(); renderAll();
  });
  $("#workerNoteCancel").addEventListener("click", closeWorkerNoteModal);
  $("#workerNoteClose").addEventListener("click", closeWorkerNoteModal);

  // ---------------------------------------------------------------
  // Client modal
  // ---------------------------------------------------------------
  const clientModal = $("#clientModalBackdrop");
  const clientForm = $("#clientForm");
  let editingClientId = null;

  function openClientModal(clientId) {
    editingClientId = clientId;
    if (clientId) {
      const c = findClient(clientId);
      $("#clientModalTitle").textContent = _("editClient");
      $("#clientId").value = c.id;
      $("#clientName").value = c.name;
      $("#clientAccountLink").value = (c.accountLink || "");
      $("#clientDelete").style.display = "";
    } else {
      $("#clientModalTitle").textContent = _("newClient");
      clientForm.reset();
      $("#clientId").value = "";
      $("#clientDelete").style.display = "none";
    }
    openModal(clientModal);
    setTimeout(() => $("#clientName").focus(), 50);
  }
  function closeClientModal() { closeModal(clientModal); editingClientId = null; }

  clientForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#clientName").value.trim();
    if (!name) return;
    const accountLink = $("#clientAccountLink").value.trim();
    if (editingClientId) {
      const c = findClient(editingClientId);
      c.name = name;
      c.accountLink = accountLink;
      toast(_("clientUpdated"));
    } else {
      const c = { id: uid(), name, jobs: [], accountLink };
      state.clients.push(c);
      state.selectedClientIds = new Set([c.id]);
      state.clientShiftAnchor = c.id;
      toast(_("clientAdded"));
    }
    save(); closeClientModal(); renderAll();
  });

  $("#clientDelete").addEventListener("click", () => {
    if (!editingClientId) return;
    const c = findClient(editingClientId);
    confirmAction(_("confirmDeleteClient").replace("{name}", c.name).replace("{count}", c.jobs.length), () => {
      const snap = saveSnapshot();
      state.clients = state.clients.filter((x) => x.id !== editingClientId);
      state.selectedClientIds.delete(editingClientId);
      state.clientShiftAnchor = null;
      commitSnapshot(snap); save(); closeClientModal(); renderAll();
      toast(_("clientDeleted"), true);
    });
  });
  $("#clientCancel").addEventListener("click", closeClientModal);
  $("#clientModalClose").addEventListener("click", closeClientModal);
  $("#btnAddClient").addEventListener("click", () => openClientModal(null));

  // ---------------------------------------------------------------
  // Confirm dialog
  // ---------------------------------------------------------------
  const confirmModal = $("#confirmBackdrop");
  const welcomeOverlay = $("#welcomeOverlay");
  let confirmCb = null;
  let confirmCbMerge = null;
  let confirmCbProject = null;
  function confirmAction(text, cb) {
    $("#confirmText").textContent = text;
    confirmCb = cb;
    confirmCbMerge = null;
    confirmCbProject = null;
    $("#confirmOk").className = "btn btn-danger";
    $("#confirmOk").textContent = _("delete") || "Hapus";
    $("#confirmOk").style.display = "";
    $("#confirmMerge").style.display = "none";
    $("#confirmProject").style.display = "none";
    openModal(confirmModal);
  }
  $("#confirmOk").addEventListener("click", () => { const cb = confirmCb; closeModal(confirmModal); confirmCb = confirmCbMerge = confirmCbProject = null; if (cb) cb(); });
  $("#confirmCancel").addEventListener("click", () => { closeModal(confirmModal); confirmCb = confirmCbMerge = confirmCbProject = null; });
  $("#confirmMerge").addEventListener("click", () => { const cb = confirmCbMerge; closeModal(confirmModal); confirmCb = confirmCbMerge = confirmCbProject = null; if (cb) cb(); });
  $("#confirmProject").addEventListener("click", () => { const cb = confirmCbProject; closeModal(confirmModal); confirmCb = confirmCbMerge = confirmCbProject = null; if (cb) cb(); });

  // ---------------------------------------------------------------
  // Generic modal open/close (+ escape/backdrop click)
  // ---------------------------------------------------------------
  function openModal(el) { el.classList.add("open"); }
  function closeModal(el) { el.classList.remove("open"); }
  let promptResolve = null;
  function inlinePrompt(label, defaultValue, showLink) {
    return new Promise(resolve => {
      promptResolve = resolve;
      $("#promptLabel").textContent = label;
      $("#promptInput").value = defaultValue || "";
      var linkRow = $("#promptLinkRow");
      if (linkRow) {
        linkRow.style.display = showLink ? "" : "none";
        if (showLink) $("#promptAccountLink").value = "";
      }
      openModal(promptModal);
      setTimeout(() => $("#promptInput").focus(), 50);
    });
  }
  $("#promptOk").addEventListener("click", () => {
    const val = $("#promptInput").value.trim();
    if (!val) return;
    closeModal(promptModal);
    if (promptResolve) {
      var linkRow = $("#promptLinkRow");
      var result = linkRow && linkRow.style.display !== "none" ? { name: val, accountLink: $("#promptAccountLink").value.trim() } : val;
      promptResolve(result); promptResolve = null;
    }
  });
  $("#promptCancel").addEventListener("click", () => {
    closeModal(promptModal);
    if (promptResolve) { promptResolve(null); promptResolve = null; }
  });
  $("#promptInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") { $("#promptOk").click(); }
    if (e.key === "Escape") { $("#promptCancel").click(); }
  });

  $("#welcomeNewJob").addEventListener("click", async () => {
    closeModal(welcomeOverlay);
    const projName = await inlinePrompt(_("promptProjectName"), currentProject()?.name || "Project 1");
    if (!projName) { renderAll(); return; }
    let proj = currentProject();
    if (proj) {
      proj.name = projName;
    } else {
      proj = { id: uid(), name: projName, clients: [], customJobOrder: [] };
      state.projects.push(proj);
    }
    state.currentProjectId = proj.id;
    state.clients = proj.clients;
    save();
    const clientName = await inlinePrompt(_("promptNewClient"), "");
    if (!clientName) { renderAll(); return; }
    const client = { id: uid(), name: clientName, jobs: [] };
    state.clients.push(client);
    state.selectedClientIds = new Set([client.id]);
    save(); renderAll();
    openJobModal(null);
  });
  $("#welcomeImport").addEventListener("click", () => {
    closeModal(welcomeOverlay);
    openModal(importOptionsOverlay);
  });
  $("#welcomeClose").addEventListener("click", () => closeModal($("#welcomeOverlay")));

  function showWelcomeIfEmpty() { if (!state.isWorkerView && !state.clients.length) openModal($("#welcomeOverlay")); }
  function hideWelcomeIfData() { if (!state.isWorkerView && state.clients.length) closeModal($("#welcomeOverlay")); }

  const projectPopup = $("#projectPopup");
  const promptModal = $("#promptBackdrop");
  function closePrompt(val) {
    closeModal(promptModal);
    if (promptResolve) { promptResolve(val); promptResolve = null; }
  }

  const importOptionsOverlay = $("#importOptionsOverlay");
  const converterGuideOverlay = $("#converterGuideOverlay");
  const projectEditPopup = $("#projectEditPopup");
  var authOverlay = document.getElementById('authBackdrop');
  [jobModal, clientModal, confirmModal, settingsModal, welcomeOverlay, projectPopup, projectEditPopup, promptModal, importOptionsOverlay, converterGuideOverlay, authOverlay, workerNoteModal, accountModal].filter(Boolean).forEach((m) => {
    m.addEventListener("mousedown", (e) => {
      if (e.target === m) {
        if (m === promptModal) { closePrompt(null); return; }
        closeModal(m);
      }
    });
  });
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") { e.preventDefault(); save(); toast(_("saved")); return; }
    if (e.key !== "Escape") return;
    if (promptModal.classList.contains("open")) { closePrompt(null); return; }
    if (authOverlay && authOverlay.classList.contains("open")) { closeModal(authOverlay); return; }
    [jobModal, clientModal, confirmModal, settingsModal, welcomeOverlay, projectPopup, projectEditPopup, importOptionsOverlay, converterGuideOverlay, workerDetailOverlay, linkModalOverlay, workerNoteModal, accountModal].forEach((m) => m && closeModal(m));
    if (state.cutJobIds.size) {
      state.cutJobIds = new Set();
      renderTable();
    }
  });

  // ---------------------------------------------------------------
  // Search & filters
  // ---------------------------------------------------------------
  let searchDebounce;
  $("#searchInput").addEventListener("input", (e) => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => { state.search = e.target.value; renderTable(); }, 120);
  });
  $("#filterYear").addEventListener("change", (e) => { state.filterYear = e.target.value; renderAll(); });
  $("#filterMonth").addEventListener("change", (e) => { state.filterMonth = e.target.value; renderAll(); });
  ["filterWorker", "filterDue", "filterPost", "filterPaid", "filterWorkerPaid"].forEach((id) => {
    $("#" + id).addEventListener("change", (e) => {
      const key = { filterWorker: "worker", filterDue: "due", filterPost: "post", filterPaid: "paid", filterWorkerPaid: "workerPaid" }[id];
      state.filters[key] = e.target.value;
      renderTable();
    });
  });
  $("#sortBy").addEventListener("change", (e) => {
    const val = e.target.value;
    const prevSort = state.filters.sortBy;
    state.filters.sortBy = val;
    if (val === "custom") {
      const proj = currentProject();
      if (proj && !proj.customJobOrder?.length) {
        state.filters.sortBy = prevSort;
        proj.customJobOrder = visibleEntries().map(({job}) => job.id);
        state.filters.sortBy = val;
        save();
      }
    }
    renderTable();
  });

  // restore hidden selects
  ["filterWorker", "filterPost", "filterPaid", "filterWorkerPaid"].forEach((id) => {
    const sel = $("#" + id);
    if (sel) sel.style.display = "";
  });
  // ---------------------------------------------------------------
  // Context menu
  // ---------------------------------------------------------------
  const ctxMenu = $("#ctxMenu");

  document.addEventListener("contextmenu", (e) => {
    if (e.target.closest("input") || e.target.closest("select") || e.target.closest("textarea") || e.target.closest("a") || e.target.closest(".modal-backdrop")) return;
    e.preventDefault();
    const jobRow = e.target.closest("tr[data-job-id]");
    const clientItem = e.target.closest(".client-item");

    if (jobRow) {
      const jobId = jobRow.dataset.jobId;
      if (!state.selectedJobIds.has(jobId)) {
        state.selectedJobIds = new Set([jobId]);
        state.shiftAnchorId = jobId;
      }
      state.selectedClientIds = new Set();
      updateSelection();
      renderClientList();
      showCtxItems("job");
    } else if (clientItem) {
      const cId = clientItem.dataset.clientId;
      state.selectedClientIds = new Set(cId ? [cId] : []);
      state.clientShiftAnchor = cId || null;
      state.selectedJobIds = new Set();
      renderClientList();
      updateSelection();
      showCtxItems("client");
    } else if (e.target.closest("#projectTitle")) {
      state.selectedJobIds = new Set();
      state.selectedClientIds = new Set();
      updateSelection();
      renderClientList();
      positionCtxMenu(e.clientX, e.clientY);
      showCtxItems("project");
      return;
    } else {
      state.selectedJobIds = new Set();
      state.selectedClientIds = new Set();
      updateSelection();
      renderClientList();
      positionCtxMenu(e.clientX, e.clientY);
      showCtxItems("empty");
      return;
    }
    positionCtxMenu(e.clientX, e.clientY);
  });

  function positionCtxMenu(x, y) {
    ctxMenu.style.left = x + "px";
    ctxMenu.style.top = y + "px";
    ctxMenu.classList.add("open");
    requestAnimationFrame(() => {
      const rect = ctxMenu.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        ctxMenu.style.top = (y - rect.height) + "px";
        if (ctxMenu.getBoundingClientRect().top < 0) ctxMenu.style.top = "0px";
      }
      if (rect.right > window.innerWidth) {
        ctxMenu.style.left = (window.innerWidth - rect.width) + "px";
      }
    });
  }
  function showCtxItems(ctx) {
    ctxMenu.querySelectorAll("[data-ctx]").forEach((el) => {
      const vals = el.dataset.ctx.split(" ");
      let show = vals.includes(ctx);
      const action = el.dataset.action;
      if (action === "cut" || action === "copy" || action === "duplicate") {
        if (!state.selectedJobIds.size) show = false;
      }
      if (action === "paste" && (ctx !== "job" || !state.clipboard)) show = false;
      if (action === "undo" && !undoStack.length) show = false;
      if (action === "redo" && !redoStack.length) show = false;
      el.style.display = show ? "" : "none";
    });
  }

  document.addEventListener("click", () => ctxMenu.classList.remove("open"));

  ctxMenu.addEventListener("click", (e) => {
    const btn = e.target.closest(".ctx-item");
    if (!btn) return;
    ctxMenu.classList.remove("open");
    switch (btn.dataset.action) {
      case "cut":
        if (!state.selectedJobIds.size) { toast(_("selectJobFirst"), true); return; }
        const cutEntries = allJobsFlat().filter(({job}) => state.selectedJobIds.has(job.id));
        const cutText = cutEntries.map(({client, job}) => jobToText(client, job)).join("\n---\n");
        navigator.clipboard.writeText(cutText);
        state.cutJobIds = new Set(state.selectedJobIds);
        state.selectedJobIds = new Set();
        renderTable();
        state.clipboard = true;
        toast(_("cut") + " " + state.cutJobIds.size + " job");
        break;
      case "copy":
        if (state.cutJobIds.size) { state.cutJobIds = new Set(); renderTable(); }
        copySelected();
        break;
      case "paste":
        doPaste();
        break;
      case "add-client": openClientModal(null); break;
      case "add-job":
        if (state.clients.length === 0) { openClientModal(null); return; }
        openJobModal(null);
        break;
      case "new-project": $("#popupNewProject").click(); break;
      case "change-project": openProjectPopup(); break;
      case "import": $("#btnImport").click(); break;
      case "export": $("#btnExport").click(); break;
      case "rename":
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "F2", bubbles: true }));
        break;
      case "add-batch":
        addBatchToSelected();
        break;
      case "duplicate": duplicateSelected(); break;
      case "delete":
        if (state.selectedJobIds.size) { deleteSelected(); }
        else if (state.selectedClientIds.size) {
          const count = state.selectedClientIds.size;
          confirmAction(
            (count === 1 ? _("confirmDeleteClient").replace("{name}", findClient(state.selectedClientIds.values().next().value)?.name || "").replace("{count}", "") : _("confirmDeleteMultiple").replace("{count}", count)),
            () => {
              const snap = saveSnapshot();
              for (const id of state.selectedClientIds) {
                state.clients = state.clients.filter((x) => x.id !== id);
              }
              state.selectedClientIds = new Set();
              commitSnapshot(snap); save(); renderAll();
              toast(_("clientDeleted"), true);
            }
          );
        }
        break;
      case "undo": undo(); break;
      case "redo": redo(); break;
    }
  });

  function doPaste() {
    if (state.cutJobIds.size) {
      const targetId = state.selectedClientIds.values().next().value;
      const target = targetId ? findClient(targetId) : state.clients[0];
      if (!target) { toast(_("addClientFirst"), true); return; }
      const snap = saveSnapshot();
      const cutList = state.cutJobIds;
      state.cutJobIds = new Set();
      let moved = 0;
      for (const { client, job } of allJobsFlat().filter(({job}) => cutList.has(job.id))) {
        if (client.id === target.id) continue;
        client.jobs = client.jobs.filter((j) => j.id !== job.id);
        renumberClient(client);
        job.no = nextNoFor(target);
        target.jobs.push(job);
        moved++;
      }
      if (moved) { navigator.clipboard.writeText(""); state.clipboard = false; commitSnapshot(snap); save(); renderAll(); toast(_("moved") + " " + moved + " job"); }
      return;
    }
    navigator.clipboard.readText().then((text) => {
      const snap = saveSnapshot();
      const targetId = state.selectedClientIds.values().next().value;
      const target = targetId ? findClient(targetId) : state.clients[0];
      if (!target) { toast(_("addClientFirst"), true); return; }
      const blocks = text.split("---").map(b => b.trim()).filter(Boolean);
      let count = 0;
      for (const block of blocks) {
        const lines = block.split("\n").map(l => l.trim());
        const get = (prefix) => { const m = lines.find(l => l.startsWith(prefix)); return m ? m.slice(prefix.length).trim() : ""; };
        const songTitle = get(_("songTitle") + ": ") || get("Song/Job Title: ") || get("Song Title: ") || get("Song: ");
        const worker = get(_("worker") + ": ") || get("Worker: ");
        const deadline = get(_("due") + ": ") || get("Deadline: ");
        const songLink = get(_("songLink") + ": ") || get("Song/Source Link: ") || get("Song Link: ") || get("Link: ");
        const postStatus = get(_("postStatus") + ": ") || get("Post Status: ") || get("Post: ") || "NOT YET";
        const postLink = get(_("postLink") + ": ") || get("Post Link: ");
        const paidStatus = get(_("paid") + ": ") || get("Paid Status: ") || get("Paid: ") || "NOT YET";
        const priceRaw = get(_("price") + ": ") || get("Price: ");
        const price = parseFloat((priceRaw || "").replace(/[^\d.-]/g, "")) || 0;
        const workerPaid = get(_("workerPaid") + ": ") || get("Worker Paid: ") || "NOT YET";
        const workerNote = get(_("workerNote") + ": ") || get("Worker Note: ");
        const note = get(_("note") + ": ") || get("Note: ");
        target.jobs.push({
          id: uid(), worker, songTitle, deadline: deadline !== _("notYet") ? deadline : "",
          songLink, postStatus, postLink, paidStatus, price, workerPaid, workerNote, note,
          onWorking: false, workerFee: 0, workerFeeCurrency: "USD", priceCurrency: "USD", createdAt: Date.now(),
        });
        count++;
      }
      if (count) { navigator.clipboard.writeText(""); state.clipboard = false; commitSnapshot(snap); save(); renderAll(); toast(_("pasted") + " " + count + " job"); }
      else toast(_("clipboardBad"), true);
    }).catch(() => toast(_("clipboardFail"), true));
  }

  // ---------------------------------------------------------------
  // Keyboard shortcuts
  // ---------------------------------------------------------------
  let renameState = null;
  document.addEventListener("keydown", (e) => {
    const ctrl = e.ctrlKey || e.metaKey;
    const inInput = ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName);
    if (!inInput && (e.key === "Delete" || e.key === "Backspace")) {
      e.preventDefault();
      if (state.selectedJobIds.size) {
        deleteSelected();
      } else if (state.selectedClientIds.size) {
        const count = state.selectedClientIds.size;
        confirmAction(
          (count === 1 ? _("confirmDeleteClient").replace("{name}", findClient(state.selectedClientIds.values().next().value)?.name || "").replace("{count}", "") : _("confirmDeleteMultiple").replace("{count}", count)),
          () => {
            const snap = saveSnapshot();
            for (const id of state.selectedClientIds) {
              state.clients = state.clients.filter((x) => x.id !== id);
            }
            state.selectedClientIds = new Set();
            commitSnapshot(snap); save(); renderAll();
            toast(_("clientDeleted"), true);
          }
        );
      } else {
        toast(_("selectJobFirst"), true);
      }
      return;
    }
    if (!inInput && e.key === "n") {
      e.preventDefault();
      if (state.clients.length === 0) { toast(_("addClientFirst"), true); openClientModal(null); return; }
      openJobModal(null);
      return;
    }
    if (!inInput && e.key === "F2") {
      e.preventDefault();
      if (state.selectedJobIds.size === 1) {
        const jobId = state.selectedJobIds.values().next().value;
        const tr = tableWrapEl.querySelector(`tr[data-job-id="${jobId}"]`);
        const cell = tr?.querySelector(".cell-song");
        if (!cell) return;
        const orig = (findJobEntry(jobId)?.job.songTitle || "").trim();
        const input = document.createElement("input");
        input.type = "text"; input.value = orig;
        input.className = "rename-input";
        cell.textContent = ""; cell.appendChild(input);
        input.focus();
        try { input.select(); } catch(e) {}
        input.addEventListener("blur", () => {
          if (!renameState || renameState.input !== input) return;
          const rs = renameState; renameState = null;
          const entry = findJobEntry(jobId);
          if (entry) { entry.job.songTitle = input.value.trim(); save(); }
          cell.textContent = entry ? entry.job.songTitle : orig;
        });
        renameState = { el: cell, orig, type: "song", id: jobId, input };
      } else if (state.selectedClientIds.size === 1) {
        const cId = state.selectedClientIds.values().next().value;
        const item = clientListEl.querySelector(`.client-item.active`);
        const nameEl = item?.querySelector(".client-name");
        if (!nameEl) return;
        const orig = (findClient(cId)?.name || "").trim();
        const input = document.createElement("input");
        input.type = "text"; input.value = orig;
        input.className = "rename-input";
        nameEl.textContent = ""; nameEl.appendChild(input);
        input.focus();
        try { input.select(); } catch(e) {}
        input.addEventListener("blur", () => {
          if (!renameState || renameState.input !== input) return;
          const rs = renameState; renameState = null;
          const c = findClient(cId);
          if (c) { c.name = input.value.trim(); save(); }
          nameEl.textContent = c ? c.name : orig;
        });
        renameState = { el: nameEl, orig, type: "client", id: cId, input };
      } else {
        // rename current project
        const proj = currentProject();
        if (!proj) return;
        const nameEl = $("#projectTitle");
        if (!nameEl) return;
        const orig = proj.name;
        const input = document.createElement("input");
        input.type = "text"; input.value = orig;
        input.className = "rename-input";
        input.style.width = "100%";
        nameEl.textContent = ""; nameEl.appendChild(input);
        input.focus(); try { input.select(); } catch(e) {}
        renameState = { el: nameEl, orig, type: "project", id: proj.id, input };
        input.addEventListener("blur", () => {
          if (!renameState || renameState.input !== input) return;
          const rs = renameState; renameState = null;
          const p = state.projects.find(x => x.id === proj.id);
          if (p) { p.name = input.value.trim() || p.name; save(); }
          renderProjectSwitcher();
        });
      }
      return;
    }
    if (renameState && (e.key === "Enter" || e.key === "Escape")) {
      e.preventDefault();
      const { el, orig, type, id, input } = renameState;
      renameState = null;
      if (e.key === "Enter") {
        if (type === "song") {
          const entry = findJobEntry(id);
          if (entry) { entry.job.songTitle = input.value.trim(); save(); }
          el.textContent = entry ? entry.job.songTitle : orig;
        } else if (type === "project") {
          const p = state.projects.find(x => x.id === id);
          if (p) { p.name = input.value.trim() || p.name; save(); }
          renderProjectSwitcher();
        } else {
          const c = findClient(id);
          if (c) { c.name = input.value.trim(); save(); }
          el.textContent = c ? c.name : orig;
        }
      } else {
        el.textContent = orig;
      }
      return;
    }
    if (!inInput && e.key === "Enter") {
      const openModal = document.querySelector(".modal-backdrop.open");
      if (openModal) {
        e.preventDefault();
        const btn = openModal.querySelector("#confirmOk, #settingsSave, #jobSave, #clientSave, #workerNoteSave");
        if (btn) btn.click();
        return;
      }
    }
    if (ctrl && e.key.toLowerCase() === "a") { if (!inInput) { e.preventDefault(); return; } }
    if (!ctrl || inInput) return;
    switch (e.key.toLowerCase()) {
      case "z":
        e.preventDefault();
        if (e.shiftKey) redo(); else undo();
        break;
      case "y":
        e.preventDefault();
        redo();
        break;
      case "c":
        e.preventDefault();
        if (state.cutJobIds.size) {
          state.cutJobIds = new Set();
          renderTable();
        }
        copySelected();
        break;
      case "d":
        e.preventDefault();
        duplicateSelected();
        break;
      case "e":
        e.preventDefault();
        if (state.selectedJobIds.size) {
          openJobModal(state.selectedJobIds.values().next().value);
        } else {
          toast(_("selectJobFirst"), true);
        }
        break;
      case "x":
        e.preventDefault();
        if (state.selectedJobIds.size) {
          const entries = allJobsFlat().filter(({job}) => state.selectedJobIds.has(job.id));
          const text = entries.map(({client, job}) => jobToText(client, job)).join("\n---\n");
          navigator.clipboard.writeText(text);
          state.cutJobIds = new Set(state.selectedJobIds);
          state.selectedJobIds = new Set();
          renderTable();
          state.clipboard = true;
          toast(_("cut") + " " + state.cutJobIds.size + " " + _("job"));
        }
        break;
      case "v":
        e.preventDefault();
        doPaste();
        break;
    }
  });

  // ---------------------------------------------------------------
  // CSV export / import
  // ---------------------------------------------------------------
  const CSV_HEADERS = ["Project", "Client", "No", "Worker", "Deadline", "Song/Job Title", "On Working", "Song/Source Link", "Post Status", "Post Link", "Paid Status", "Price/Vid", "Currency", "Worker Paid", "Worker Fee", "Worker Fee Currency", "Worker Note", "Note"];

  function csvEscape(v) {
    const s = String(v ?? "");
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  }

  function updateMoneyEye() {
    const el = document.getElementById("moneyEyeStrike");
    if (el) el.style.display = settings.hideMoney ? "" : "none";
  }

  $("#btnToggleMoney").addEventListener("click", () => {
    settings.hideMoney = !settings.hideMoney;
    updateMoneyEye();
    saveSettings();
    renderMeters();
  });

  $("#btnThemeToggle").addEventListener("click", () => {
    settings.theme = settings.theme === "dark" ? "light" : "dark";
    applyTheme();
    saveSettings();
  });

  function doExport(allProjects) {
    const rows = [CSV_HEADERS];
    const entries = allProjects ? state.projects.flatMap(p => p.clients.flatMap(c => c.jobs.map(j => ({ proj: p, client: c, job: j })))) : allJobsFlat().map(e => ({ proj: currentProject(), ...e }));
    entries.forEach(({ proj, client, job }, rowIndex) => {
      const links = job.links || [];
      const total = linkQtySum(links);
      const max = job.jumlah || 1;
      const postStatus = total >= max ? "POSTED" : (total > 0 ? "PARTIAL" : (job.postStatus || "NOT YET"));
      rows.push([proj?.name || "", client.name, rowIndex + 1, job.worker, job.deadline || "", job.songTitle, job.onWorking ? "YES" : "", job.songLink, postStatus, links.map(l => l.url).join(" | "), job.paidStatus, (Number(job.price) || 0).toFixed(2), job.priceCurrency || "USD", job.workerPaid, job.workerFee || 0, job.workerFeeCurrency || "USD", job.workerNote, job.note]);
    });
    const csv = rows.map((r) => r.map(csvEscape).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const suffix = allProjects ? "all-projects" : currentProject()?.name?.replace(/\s+/g, "-") || "project";
    a.href = url; a.download = `ads-manager-export-${suffix}-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    toast(_("csvExported"));
  }
  $("#btnExport").addEventListener("click", () => {
    if (state.projects.length <= 1) { doExport(false); return; }
    $("#confirmText").textContent = _("exportData");
    confirmCb = () => doExport(true);
    confirmCbMerge = () => doExport(false);
    confirmCbProject = null;
    $("#confirmOk").textContent = _("allProject");
    $("#confirmOk").className = "btn btn-primary";
    $("#confirmMerge").textContent = _("thisProject");
    $("#confirmMerge").style.display = "";
    $("#confirmProject").style.display = "none";
    $("#confirmOk").style.display = "";
    openModal(confirmModal);
  });

  let importCsvText = null;
  let importFileName = "";

  function importAsProject(name, replaceCurrent) {
    if (!importCsvText) return;
    let parsed;
    try { parsed = parseCsvText(importCsvText); } catch { importCsvText = null; toast(_("csvFailed"), true); return; }
    const isMulti = parsed.length > 1;
    if (!isMulti) parsed[0].name = name || parsed[0].name;
    if (replaceCurrent) {
      if (isMulti) {
        // Replace ALL projects with CSV projects
        state.projects = parsed.map(p => { p.id = uid(); return p; });
        const first = state.projects[0];
        state.currentProjectId = first.id;
        state.clients = first.clients;
      } else {
        const proj = currentProject();
        if (!proj) { importCsvText = null; return; }
        proj.clients = parsed[0].clients;
        state.clients = proj.clients;
      }
      save(); renderAll();
    } else {
      for (const p of parsed) {
        p.id = uid();
        state.projects.push(p);
      }
      switchProject(parsed[0].id);
    }
    autoRegisterWorkers();
    toast(_("csvImported"));
    importCsvText = null;
  }

  function autoRegisterWorkers() {
    var nameToId = {};
    (state.workers || []).forEach(function(w) { nameToId[w.name.toLowerCase().trim()] = w.id; });
    var changed = false;
    state.clients.forEach(function(c) {
      (c.jobs || []).forEach(function(j) {
        var name = (j.worker || '').trim();
        if (!name) return;
        var key = name.toLowerCase();
        if (!nameToId[key]) {
          var newW = { id: uid(), name: name };
          state.workers.push(newW);
          nameToId[key] = newW.id;
          changed = true;
        }
        if (!j.workerId) { j.workerId = nameToId[key]; changed = true; }
      });
    });
    if (changed) save();
  }

  function openImportFile() { closeModal(importOptionsOverlay); closeModal(converterGuideOverlay); setTimeout(() => $("#importFile").click(), 100); }

  $("#btnImport").addEventListener("click", () => openModal(importOptionsOverlay));
  $("#importFile").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        importCsvText = String(reader.result);
        importFileName = file.name.replace(/\.csv$/i, "").trim() || _("newProject");
        if (state.clients.length > 0) {
          confirmCb = importAsProject.bind(null, importFileName, true);
          confirmCbMerge = null;
          confirmCbProject = async () => {
            const name = await inlinePrompt(_("promptProjectName"), importFileName);
            if (name) importAsProject(name, false);
          };
          $("#confirmText").textContent = _("importDataExists");
          $("#confirmOk").textContent = _("replaceAll");
          $("#confirmOk").className = "btn btn-danger";
          $("#confirmOk").style.display = "";
          $("#confirmMerge").style.display = "none";
          $("#confirmProject").textContent = _("newProjectBtn");
          $("#confirmProject").style.display = "";
          openModal(confirmModal);
        } else {
          (async () => {
            const name = await inlinePrompt(_("promptProjectName"), importFileName);
            if (name) importAsProject(name, false);
          })();
        }
      } catch (err) {
        console.error(err);
        toast(_("csvFailed"), true);
      }
      e.target.value = "";
    };
    reader.readAsText(file);
  });

  function parseCsvText(text) {
    const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
    if (lines.length < 2) throw new Error("empty csv");
    const header = parseCsvLine(lines[0]).map((h) => h.trim().toLowerCase());
    const idx = (name, alt) => { const i = header.indexOf(name); return i !== -1 ? i : header.indexOf(alt); };
    const iProject = idx("project"), iClient = idx("client"), iNo = idx("no"), iWorker = idx("worker"), iDeadline = idx("deadline"),
      iSong = idx("song/job title", "song title"), iWorking = idx("on working"), iSongLink = idx("song/source link", "song link"),
      iPost = idx("post status"), iPostLink = idx("post link"), iPaid = idx("paid status"),
      iPrice = idx("price/vid"), iCurr = idx("currency"), iWorkerPaid = idx("worker paid"),
      iFee = idx("worker fee"), iFeeCurr = idx("worker fee currency"), iNote = idx("worker note"), iAdminNote = idx("note");
    const hasProject = iProject !== -1;
    const projectMap = {};
    for (let i = 1; i < lines.length; i++) {
      const cols = parseCsvLine(lines[i]);
      const projectName = hasProject ? ((cols[iProject] || "").trim() || "Imported") : "Imported";
      const clientName = (cols[iClient] || "Tanpa Nama").trim() || "Tanpa Nama";
      let proj = projectMap[projectName];
      if (!proj) { proj = { id: uid(), name: projectName, clients: [] }; projectMap[projectName] = proj; }
      let client = proj.clients.find((c) => c.name.toLowerCase() === clientName.toLowerCase());
      if (!client) { client = { id: uid(), name: clientName, jobs: [] }; proj.clients.push(client); }
      const rawPostStatus = ((cols[iPost] || "").trim().toUpperCase() || "NOT YET");
      const rawPostLink = (cols[iPostLink] || "").trim();
      const links = rawPostLink ? rawPostLink.split("|").map(s => s.trim()).filter(Boolean).map(url => ({ url, qty: 1 })) : [];
      client.jobs.push({
        id: uid(),
        no: cols[iNo] ? Number(cols[iNo]) : client.jobs.length + 1,
        worker: (cols[iWorker] || "").trim(),
        deadline: (cols[iDeadline] || "").trim(),
        songTitle: (cols[iSong] || "").trim(),
        onWorking: /^(y|yes|true|1)$/i.test((cols[iWorking] || "").trim()),
        songLink: (cols[iSongLink] || "").trim(),
        postStatus: rawPostStatus,
        postLink: rawPostLink,
        links: links,
        jumlah: links.length,
        paidStatus: (cols[iPaid] || "NOT YET").trim().toUpperCase() || "NOT YET",
        price: Number(String(cols[iPrice] || "0").replace(/[^0-9.\-]/g, "")) || 0,
        priceCurrency: (cols[iCurr] || "USD").trim().toUpperCase() || "USD",
        workerPaid: ((cols[iWorkerPaid] || "NOT YET").trim().toUpperCase() || "NOT YET"),
        workerFee: Number(String(cols[iFee] || "0").replace(/[^0-9.\-]/g, "")) || 0,
        workerFeeCurrency: (cols[iFeeCurr] || "USD").trim().toUpperCase() || "USD",
        workerNote: (cols[iNote] || "").trim(),
        note: (cols[iAdminNote] || "").trim(),
        createdAt: Date.now(),
      });
    }
    return Object.values(projectMap);
  }

  function parseCsvLine(line) {
    const out = []; let cur = ""; let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inQ) {
        if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
        else if (ch === '"') inQ = false;
        else cur += ch;
      } else {
        if (ch === '"') inQ = true;
        else if (ch === ",") { out.push(cur); cur = ""; }
        else cur += ch;
      }
    }
    out.push(cur);
    return out;
  }

  // ---------------------------------------------------------------
  // Boot — VERSI FULL CLOUD
  // Tunggu login (onReady dari firebase-init), lalu muat data Firestore.
  // ---------------------------------------------------------------
  function boot() {
    applyTheme();
    updateMoneyEye();
    renderSkeleton();
    window.__firebase.onReady(function (user, cloudData) {
      // Link worker (?worker=...&owner=...) bisa dibuka tanpa login.
      var hasWorkerRoute = initWorkerView();
      if (hasWorkerRoute) {
        startWorkerViewRealtime();
        return;
      }
      if (!user) return; // belum login — layar login tampil (auth-gate)
      if (!state.projects.length) {
        const proj = { id: uid(), name: "Project 1", clients: [], accountLink: "" };
        state.projects.push(proj);
        state.currentProjectId = proj.id;
        state.clients = proj.clients;
      }
      state.selectedJobIds = new Set();
      state.selectedClientIds = new Set();
      state.cutJobIds = new Set();
      save();
      fetchRates().then(() => {
        renderAll();
        showWelcomeIfEmpty();
      });
    });
  }
  boot();
  // Nav rail — toggle sidebar mode
  function initNavRail() {
    const items = document.querySelectorAll(".nav-rail .rail-item:not(.rail-toggle)");
    const clientMode = document.querySelector(".sidebar-mode.client-mode");
    const workerMode = document.querySelector(".sidebar-mode.worker-mode");
    const projectMode = document.querySelector(".sidebar-mode.project-mode");
    const notedMode = document.querySelector(".sidebar-mode.noted-mode");
    if (!items.length) return;
    const sidebarWrap = document.querySelector(".sidebar-wrap");
    const navRail = document.querySelector(".nav-rail");
    let lastView = "project";
    function applyView() {
      const activeBtn = Array.from(items).find(i => i.dataset.view === lastView);
      items.forEach(i => i.classList.toggle("active", i === activeBtn));
      if (lastView === "worker") switchSidebar("worker");
      else if (lastView === "project") switchSidebar("project");
      else switchSidebar("client");
    }

    function openSidebar() { 
      if (sidebarWrap) { sidebarWrap.classList.remove("collapsed"); navRail?.classList.remove("sidebar-closed"); }
    }
    function toggleSidebar() { 
      if (!sidebarWrap) return;
      sidebarWrap.classList.toggle("collapsed");
      navRail?.classList.toggle("sidebar-closed", sidebarWrap.classList.contains("collapsed"));
    }

    function switchSidebar(mode) {
      if (!clientMode || !workerMode) return;
      clientMode.classList.toggle("hidden", mode !== "client");
      workerMode.classList.toggle("hidden", mode !== "worker");
      if (projectMode) projectMode.classList.toggle("hidden", mode !== "project");
      if (notedMode) notedMode.classList.toggle("hidden", mode !== "noted");
    }
    items.forEach(btn => {
      btn.addEventListener("click", () => {
        const view = btn.dataset.view;
        if (!view) return; // skip toggle button
        // toggle sidebar if same icon clicked again
        if (view === lastView && sidebarWrap && !sidebarWrap.classList.contains("collapsed")) {
          toggleSidebar();
          return;
        }
        items.forEach(i => i.classList.remove("active"));
        btn.classList.add("active");
        lastView = view;
        openSidebar();
        if (view === "worker") { state.notedOnly = false; switchSidebar("worker"); }
        else if (view === "project") { state.notedOnly = false; switchSidebar("project"); }
        else if (view === "noted") { state.notedOnly = true; state.allJobs = false; state.batchOnly = false; state.selectedClientIds = new Set(); state.selectedJobIds = new Set(); switchSidebar("noted"); }
        else { state.notedOnly = false; switchSidebar("client"); }
        renderAll();
      });
    });
    applyView();
    // auto-hide sidebar: collapse when space is tight (narrow viewport or wide table)
    function autoHideSidebar(minWidth) {
      if (!sidebarWrap) return;
      if (window.innerWidth < (minWidth || 1100)) {
        sidebarWrap.classList.add("collapsed");
        navRail?.classList.add("sidebar-closed");
      }
    }
    autoHideSidebar();
    window.addEventListener("resize", () => autoHideSidebar());
    window.autoHideSidebar = autoHideSidebar;
    // manual toggle button
    $("#railToggle")?.addEventListener("click", (e) => { e.stopPropagation(); toggleSidebar(); });
  }
  initNavRail();
  $("#popupNewProject")?.addEventListener("click", async () => {
    closeProjectPopup();
    const result = await inlinePrompt(_("promptNewProject"), _("newProject") + " " + (state.projects.length + 1), true);
    if (!result) return;
    var name = result.name || result;
    var accountLink = result.accountLink || "";
    const proj = { id: uid(), name, clients: [], customJobOrder: [], accountLink };
    state.projects.push(proj);
    switchProject(proj.id);
  });
  $("#popupImport")?.addEventListener("click", () => { closeProjectPopup(); setTimeout(() => $("#importFile").click(), 100); });
  $("#popupExport")?.addEventListener("click", () => { closeProjectPopup(); setTimeout(() => $("#btnExport").click(), 100); });
  $("#popupClose")?.addEventListener("click", () => closeProjectPopup());
  $("#projectEditClose")?.addEventListener("click", () => closeProjectEdit());
  $("#projectEditCancel")?.addEventListener("click", () => closeProjectEdit());
  $("#projectEditForm")?.addEventListener("submit", (e) => { e.preventDefault(); saveProjectEdit(); });
  // import options popup
  $("#importOptionsClose")?.addEventListener("click", () => closeModal(importOptionsOverlay));
  $("#importOptionsFile")?.addEventListener("click", openImportFile);
  $("#importOptionsConvert")?.addEventListener("click", () => { closeModal(importOptionsOverlay); openModal(converterGuideOverlay); });
  // converter guide popup
  $("#converterGuideClose")?.addEventListener("click", () => closeModal(converterGuideOverlay));
  $("#converterGuideImport")?.addEventListener("click", openImportFile);
  // download asset files (embedded for file:// compatibility)
  const CSV_TEMPLATE_CONTENT = `Project,Client,No,Worker,Deadline,Song/Job Title,On Working,Song/Source Link,Post Status,Post Link,Paid Status,Price/Vid,Currency,Worker Paid,Worker Fee,Worker Fee Currency,Worker Note
Ads Manager,Client A,1,Rina,2026-08-15,Judul Lagu 1,YES,https://sound.example.com/1,POSTED,https://post.example.com/1,PAID,15,USD,PAID,5,USD,Catatan opsional
Ads Manager,Client A,2,Rina,2026-08-20,Judul Lagu 2,,https://sound.example.com/2,NOT YET,,NOT YET,20,USD,NOT YET,0,USD,
Ads Manager,Client B,1,Ahmad,2026-08-10,Judul Lagu 3,YES,https://sound.example.com/3,POSTED,https://post.example.com/3,PAID,25,USD,NOT YET,8,USD,`;
  const CONVERTER_SKILL_CONTENT = `---
name: notes-to-csv-import
description: Convert any messy note/tracking file (Excel/spreadsheet, Notepad/txt, Markdown, screenshot/image of a table, chat log, PDF, etc.) into the strict "template-import.csv" job-tracking schema.
---

# Notes → CSV Import Converter

Convert any source (Excel, Notepad, Markdown, image of a table, chat log, PDF, etc.) into CSV rows that are **100% compliant with the template schema**, without fabricating data.

## Core Principles (non-negotiable)

1. **The template is the contract.** Always re-read \`template-import.csv\` (header + sample rows) at the start of every conversion — do NOT rely on memory from previous sessions, as the template may change.
2. **Never fabricate data.** Fields that are missing / unclear in the source → leave empty (empty string), do NOT guess. Better empty and honest than filled but wrong.
3. **Understand the pattern first, then convert.** Before writing a single CSV row, complete the ANALYSIS phase (below) until you can explain the source data pattern to the user in one paragraph. If you cannot explain the pattern, you are not ready to convert.
4. **Every ambiguous mapping decision must be documented**, either to the user or as a note in the output (e.g. in the Worker Note column or in a summary message), so the user can correct it.
5. **Validate before delivering**: the output row count must be explainable (how many rows were skipped and why), and a manual spot-check (5–10 random rows) must match the source 1:1.

## Phase 0 — When the final target is an APPLICATION (not just "CSV" in general)

If the user mentions/sends a target application (web app, mobile app, spreadsheet tool, etc.) that will READ the resulting CSV, do not rely solely on \`template-import.csv\` as the contract — **the application's source code itself is a more authoritative contract**. Do this BEFORE converting:

1. **Read the importer/parser code of that application directly** (e.g. find \`parseCsvText\`/\`import\`/\`CSV_HEADERS\` function in the JS/source files). Note exactly: column order searched, header names matched (lowercased), default values for each field when empty, and parsing rules (regex, uppercase/lowercase, number parsing, etc.). Do not guess from field names alone — similar field names do not guarantee the same value format/conventions.
2. **Also read its EXPORT function** if available (the function that produces CSV from internal application data) — this is the MOST authoritative form of "what correct data looks like" because it was written by the app's developer.
3. **If the user provides an actual export file from that application, treat it as ground truth**, not just a rough reference. Compare every column of your conversion against the real patterns in that file:
   - Date format EXACTLY (e.g. \`YYYY-MM-DD\` vs \`M/D/YYYY\` — easy to guess wrong, do NOT assume from template examples if real ground truth from the app exists).
   - Fields that are ALWAYS empty or ALWAYS contain a specific default in the real app (e.g. a "working" toggle that is always empty in real data because it's a manual status managed inside the app, not historical data) — do not force-fill such fields just because the old source has a similarly-named column.
   - Number conventions (2 decimals? separate currency column?), text status conventions (all uppercase? default when empty?).
   - **Entity names (client/category/etc.) already used by the user in the application** — if the ground truth shows standardized/normalized naming, while the source data has many spelling variations for the same entity (typos, different capitalization, extra labels), this is where **name normalization/deduplication** work is needed, not just column mapping. See sub-section below.
4. **After conversion, VALIDATE by re-running the actual application parser** (e.g. run the importer function via Node.js against the CSV you produced) to ensure the result is parsed as expected (correct number of clients/records, no fields falling into unwanted defaults). This is far more reliable than just visually re-reading the CSV.

### Entity name normalization (client/category/etc.) across sources

If there are multiple source files (or one file with many sheets/sections) that record the same entity with different spellings (typos, ALL CAPS vs lowercase, extra account/label suffixes):

- First group all raw variations by a normalized key (lowercase, strip spaces/symbols) to catch obvious duplicates (different case/spacing only) — these can be safely auto-merged.
- For variations that differ by a clear TYPO (e.g. "coocked" vs "cooked") or where a standardized name exists from application ground truth — create an explicit alias map and merge, BUT preserve any lost information (e.g. discarded account labels) in \`Worker Note\` so nothing is lost entirely.
- For variations that are STILL AMBIGUOUS (e.g. "Management", "Management Anime Account", "Management Mozzciz Pop" — could be 3 different entities, could be 1) — do NOT auto-merge. Leave them as separate entities, and report to the user as a list of "possible duplicates, needs manual check" so they can merge via the app's rename feature (if available).
- Always produce a mapping report (final name ← list of raw variations merged) as a separate attachment, so the user can audit the merging decisions.

## Required Columns (order MUST be exact)

\`Project, Client, No, Worker, Deadline, Song/Job Title, On Working, Song/Source Link, Post Status, Post Link, Paid Status, Price/Vid, Currency, Worker Paid, Worker Fee, Worker Fee Currency, Worker Note\`

**Project column**: Optional — if absent or empty, all rows are imported into a single project named "Imported". If present, rows are grouped by project name and each group becomes a separate project in the app.

Value conventions (take actual examples from template sample rows, do not assume):
- Boolean-ish statuses (On Working / Post Status / Paid Status / Worker Paid) typically use explicit text like \`YES\`/empty, \`POSTED\`/\`NOT YET\`, \`PAID\`/\`NOT YET\` — **match the actual values used in the template sample rows**, do not use raw TRUE/FALSE.
- Numbers (Price/Vid, Worker Fee) are plain without currency symbols; currency goes in the separate Currency / Worker Fee Currency column.
- Deadline uses \`YYYY-MM-DD\` format if the source has a valid original date.

## Phase 1 — SOURCE ANALYSIS (required, before writing any code/CSV)

For any file type, explicitly answer these questions first:

- **File shape**: 1 consistent sheet? multiple sheets (per month/per client)? freeform text? image of a table? chat log?
- **Unit of one job row**: what defines "one job/video/song" in this source?
- **Header/group vs data row**: are there rows/labels that are actually HEADER GROUPS (e.g. client name written once, applying to several rows below / merged cells), not real data rows? If yes → needs forward-fill strategy for that column (usually Client, sometimes Price/Vid).
- **Hidden legend/codes**: do TRUE/FALSE, checkboxes, cell colors, or symbols (\`-\`, \`✔\`) carry status meaning? Check for a "Command"/"Legend"/notes sheet if present — do not guess blindly.
- **Columns with no template equivalent** (e.g. "Character", extra comment columns): do not discard — put into \`Worker Note\` with a brief label, or ask the user if significant.
- **Template columns with NO source equivalent**: leave empty. Do not fill with values from other template columns just because the position looks similar.
- **Empty/placeholder rows** (slots for jobs not yet filled): decide whether these are real data rows (skip) or truly represent "no job yet" (skip too, unless user asks to keep empty rows).

If after analysis there is still major ambiguity that could affect many rows (e.g. a "Due" column that constantly contains "DONE" text instead of actual dates) — **report to the user, do not silently guess**, then proceed with the safest assumption (usually: leave empty).

## Phase 2 — Create a Mapping Table

Before generating CSV, write an explicit mapping: \`source column → template column\`, including value transformations (boolean→status text, forward-fill, etc.). Essential for large files / multiple sheets to ensure consistency across all sections.

## Phase 3 — Convert

- For structured files (xlsx/csv): use Python (openpyxl/pandas) and check \`merged_cells\` to detect client/header groups.
- For unstructured files (txt/md/chat log/image): read the full content first (OCR/vision for images), then identify records one by one before assembling CSV rows — do not naively split by line.
- Write output as valid CSV (comma delimiter, quote fields containing commas), header exactly matching the template, column order the same.
- If the source has multiple sheets/sections (e.g. per month), merge all into a single CSV output, and add an origin marker (e.g. in Worker Note: \`[Source: January 2026]\`) ONLY if useful for audit — remove/clean up if the user does not want extra notes attached.

## Phase 4 — Validation & User Report

After conversion, always briefly report to the user:
- Number of rows successfully converted (and from how many sheets/sections if relevant).
- Rows/sections skipped and why (empty header groups, placeholder blanks, etc.).
- Template columns that had to be left empty because the source had no data (name the columns), so the user knows and can fill manually if needed.
- Non-trivial assumptions made (e.g. "I left the Due column empty because it only contained the text 'DONE', not an actual date").

## Implementation Notes (Excel-specific) — CRITICAL, especially for Deadline/dates

The Deadline field is most often "lost" or wrong not because the data is absent, but because it is **hidden**: through cross-sheet formulas, through sheet names, or through inconsistent user date-writing habits. Never conclude "this column is empty" just from \`data_only=True\` — that only shows FORMULA RESULTS, not the original formula source.

1. **Load the workbook TWICE**: once with \`data_only=False\` (to see raw formulas as strings like \`=...\`) and once with \`data_only=True\` (for calculated values). Compare both, especially in columns related to dates/statuses.
2. **Scan ALL sheets for formulas**, not just visually relevant sheets. Find cells whose string starts with \`=\`. If you find a formula like \`=Command!F3\` or \`=OtherSheet!X5\`, it means sheets are interconnected — trace to the source sheet, do NOT just use the resulting value if it turns out to be a derived status text (e.g. a formula that converts a date into "DONE"/countdown after due date — take the RAW date from the source sheet, not the "DONE" result).
   - Common pattern: a formula points to another column relative to the referenced column (e.g. the original date column = referenced column − 1). Verify this pattern by checking headers around the referenced cell, do not assume.
   - Such formulas may differ per block/client (inconsistent drag-fill) — do not assume one pattern applies to the entire sheet; **parse formulas per row/per cell**, since the formula itself tells you the correct coordinates for that row.
3. **Check every sheet name** — sheet names often carry context (month/year/client/category) used to complete the data in its rows. If a date column contains only numbers 1–31, suspect these are "day-of-month" values that must be combined with month/year from the SHEET NAME (e.g. sheet "AUGUST 2025" + cell value \`26\` → 26 August 2025). Build a month name mapping (English & Indonesian) for parsing.
4. **A single column can contain mixed data types** because it was manually typed over time: sometimes native date objects, sometimes just day numbers, sometimes full date text ("SATURDAY 10 JANUARY 2026" — use regex to extract pattern \`\\d{1,2}\\s+[A-Za-z]+\\s+\\d{4}\`), sometimes not a date at all but a stray status text that ended up in this column (e.g. "ALREADY SENT", "PAID"). In the latter case: do NOT force it into a date — move it to \`Worker Note\` as an original note, and leave Deadline empty.
5. Check \`ws.merged_cells.ranges\` for Client/grouping columns — the group value is in the first row of the range, other rows must be forward-filled from that value.
6. Check additional sheets like "Command"/"Legend"/"Projects Taken" for the meaning of TRUE/FALSE and for possible lookup tables of dates/prices that serve as data sources for other sheets.
7. After completion, **report the Deadline fill rate** to the user (e.g. "342/359 rows got actual dates from the Command sheet; 17 rows genuinely had no recorded date in the source file") — so the user knows the difference between "empty because there was no data" vs "empty because tracing failed".

## For non-Excel files (Word/.docx, Notepad/.txt, Markdown, PDF, image of a table, chat log)

- **Read the file in full first**, do not process line-by-line or in chunks without context. For long documents, read the entire thing before starting to map — the structural pattern (e.g. "1 record = 1 paragraph" or "1 record = 1 line in a table") only becomes clear after seeing the whole document, not just the beginning.
- Look for **context that applies to many rows at once** (e.g. section headings indicating client name or month — same treatment as Excel sheet names): forward-fill/merge into each row below until the next heading.
- For images/screenshots of tables: read the visual as carefully as possible (including small text/watermarks/dates in corners) before assembling data rows — do not guess blurred cells, flag them as needing user verification if truly unreadable.
- For chat logs: one "record" is usually spread across multiple consecutive messages (e.g. someone sends a link first, then replies with the price) — group related messages before treating as one data row, do not assume each chat line = one CSV row.
- The same principles from the Excel section still apply: fields genuinely missing from the source → leave empty, do not guess; ambiguous fields → preserve as original note in \`Worker Note\` and report to the user.
`;
  function downloadText(content, filename) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(a.href);
  }
  // worker modal
  const workerDetailOverlay = $("#workerDetailOverlay");
  $("#btnAddWorker")?.addEventListener("click", async () => {
    const name = await inlinePrompt(_("workerName"), _("newWorker"));
    if (name && name.trim()) { addWorker(name.trim()); }
  });
  $("#workerDetailClose")?.addEventListener("click", () => closeModal(workerDetailOverlay));
  $("#workerDetailCloseBtn")?.addEventListener("click", () => closeModal(workerDetailOverlay));
  $("#workerDetailDelete")?.addEventListener("click", () => {
    const wid = workerDetailOverlay?.dataset?.workerId;
    if (wid) { const w = getWorker(wid); if (w && confirm(_("confirmDeleteWorker").replace("{name}", w.name))) { deleteWorker(w.id); closeModal(workerDetailOverlay); } }
  });
  if (workerDetailOverlay) {
    workerDetailOverlay.addEventListener("click", (e) => { if (e.target === workerDetailOverlay) closeModal(workerDetailOverlay); });
  }
  // link modal
  const linkModalOverlay = $("#linkModalOverlay");
  $("#linkModalClose")?.addEventListener("click", () => closeModal(linkModalOverlay));
  $("#linkModalCloseBtn")?.addEventListener("click", () => closeModal(linkModalOverlay));
  if (linkModalOverlay) {
    linkModalOverlay.addEventListener("click", (e) => { if (e.target === linkModalOverlay) closeModal(linkModalOverlay); });
  }

  // add song row button
  $("#addSongRowBtn")?.addEventListener("click", () => { addSongRow(document.getElementById('songRows')); });
  $("#downloadTemplateCsv")?.addEventListener("click", () => downloadText(CSV_TEMPLATE_CONTENT, "template-import.csv"));
  $("#downloadConverterSkill")?.addEventListener("click", () => downloadText(CONVERTER_SKILL_CONTENT, "CSV_Import_Converter.md"));
})();
