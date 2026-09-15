# Ads Manager — Panduan Fitur & Cara Pakai

> English version: [README.en.md](README.en.md)

Ads Manager adalah aplikasi **manajemen pekerjaan (job tracker)** berbasis web untuk mengelola pekerjaan iklan per orang/pekerja (worker) — dari data lagu, link sumber, status posting, pembayaran, hingga hasil upload video draft. Semua data tersimpan **otomatis di cloud (Firebase)** dan bisa diakses dari perangkat mana pun dengan akun yang sama.

---

## Mulai Cepat

1. Buka aplikasi → halaman **login** muncul.
2. Masuk dengan **email & password** (daftar akun baru jika belum punya).
3. Setelah masuk, klik **Proyek** di sidebar lalu **+ Proyek Baru** untuk mulai.
4. Data langsung tersimpan otomatis ke cloud — tanpa tombol simpan manual.

> Semua data tersimpan di **Firebase Cloud Firestore** (akun = 1 basis data). Tidak disimpan di localStorage perangkat, jadi ganti HP/browser tidak masalah selama login akun yang sama.

---

## 1. Sidebar (menu utama)

Sidebar kiri punya 4 tampilan:

| Ikon | Tampilan | Fungsi |
|------|----------|--------|
| **Proyek** | Project | Mengelola proyek/grup kerja (buat, pilih, ganti nama, hapus, export) |
| **Klien** | Client | Daftar klien/job per proyek; klik untuk memilih |
| **Pekerja** | Worker | Daftar demi pekerja; buka panel khusus pekerja |
| **Catatan** | Noted | Menampilkan semua job yang punya catatan |

- Ikon tombol di ujung bawah bisa **menciutkan / membentangkan** sidebar.
- Daftar klien otomatis diurutkan dari **yang paling baru beraktivitas**.

---

## 2. Proyek (Project)

Proyek adalah wadah untuk mengelompokkan klien & job.

- **Proyek Baru** — buat proyek kosong baru (beri nama).
- **Buka Proyek** — pilih proyek mana yang sedang dikerjakan.
- **Ganti Nama / Hapus** — edit nama atau hapus proyek (penghapusan proyek juga menghapus semua data di dalamnya).
- **Import** — impor file CSV sebagai proyek baru.
- **Export** — export data ke file CSV (proyek aktif atau semua proyek).
- Di panel sidebar, item **"Semua Pekerjaan"** menampilkan jumlah total pekerjaan di proyek aktif.

---

## 3. Klien (Client)

Klien berisi kumpulan job.

- **Tambah Klien** — tombol di bawah daftar klien.
- **Pilih tunggal** — klik nama klien.
- **Pilih banyak** — `Shift` + klik untuk memilih berurutan, `Ctrl/Cmd` + klik untuk memilih satu per satu. Beberapa klien sekaligus bisa diganti status/batch-nya.
- **Edit** — klik ikon pensil di samping nama klien (ganti nama).
- **Hapus** — lewat menu klik kanan; menghapus klien ikut menghapus semua job di dalamnya.
- Setiap klien menampilkan jumlah jobnya di samping nama.

---

## 4. Job / Pekerjaan

### Membuat Job
Tombol **+ Job Baru** di kanan atas (atau menu klik kanan). Isi form:

- **Batch** — pengelompokan job (mis. Batch 1)
- **No / Client / Judul** — nomor urut, nama klien, judul lagu/job
- **Pekerja (Worker)** + jumlah (Qty)
- **Deadline** — tanggal tenggat
- **Harga / Mata Uang / Status Bayar**
- **Link Sumber** lagu
- **Catatan kerja & note klien**

### Kolom Tabel & Status
| Kolom | Cara pakai |
|-------|-----------|
| **No, Client, Song/Job Title** | Identitas job; judul menampilkan catatan (note) berjalan otomatis |
| **Song/Source Link** | Tombol untuk membuka link sumber |
| **Deadline** | Tanggal tenggat |
| **On Working (status bekerja)** | Titik hijau — klik untuk menandai sedang dikerjakan / selesai |
| **Post Status** | Klik badge untuk siklus: NOT YET → sebagian → POSTED |
| **Post Link** | Tombol untuk menambah/mengedit link hasil posting |
| **Worker (pilih)** | Mengganti pekerja lewat dropdown |
| **Worker Qty** | Jumlah pekerjaan per worker |
| **Worker Paid** | Klik untuk menandai sudah dibayar / belum |
| **Worker Note** | Ikon/klik untuk menulis catatan khusus worker |
| **Aksi** | Tombol unggah draft video + tombol edit |

### Edit Job
- Klik ikon **pensil** di baris job, atau klik dua kali barisnya.
- **Duplikat** — dari menu klik kanan, buat salinan job.

---

## 5. Unggah Video Draft (per Job)

Setiap job punya tombol **unggah video draft** (ikon film) di kolom aksi paling kanan.

1. Klik ikon film → muncul jendela **Video Draft**.
2. Klik **Unggah Draft** → pilih file video (MP4, WebM, MOV, AVI, MKV, M4V).
3. Video diunggah ke **Gofile** dan tersimpan sebagai `job.draftVideo` di cloud.
4. Jika job punya draft, tombol menjadi **hijau berkedip** — tandanya draft sudah ada.
5. Di jendela draft kamu bisa **Unduh**, **Ganti**, atau **Hapus** video.

> Catatan penyimpanan Gofile: akun gratis ±10 hari tersimpan, masa aktif diperpanjang tiap ada yang mengunduh; video tanpa unduhan bisa kedaluwarsa. Untuk permanen gunakan Gofile Premium. Sumber data utama tetap aman di Firestore.

---

## 6. Pekerja (Worker) & Link Berbagi

Tampilan **Pekerja** di sidebar menampilkan daftar pekerja.

- **Link Pekerja** — setiap worker punya link khusus yang bisa **dibagikan tanpa login**.
- Worker yang membuka link bisa langsung:
  - **Menandai selesai** (mark done)
  - **Menulis link sumber/hasil**
  - **Mengunggah video pekerjaan** (upload ke Gofile, tersimpan di `workerUploads` job)
- Link hanya bisa membaca & mengisi job milik pemilik akun — tanpa perlu akun sendiri.
- Buka panel detail worker untuk melihat semua job-nya.

---

## 7. Meter Dashboard (Ringkasan)

Di atas tabel ditampilkan ringkasan otomatis yang **mengikuti seleksi** (klien yang dipilih):

- **Total Job**
- **% Sudah Posting**
- **Pendapatan Terkumpul / Belum**
- **Pembayaran Pekerja: Dibayar / Belum**

---

## 8. Pencarian, Filter, & Urutan

Baris kontrol di atas tabel:

- **Pencarian** — cari berdasarkan judul, nama klien, note, dll.
- **Filter Pekerja** — tampilkan job pekerja tertentu.
- **Filter Deadline** — job lewat tenggat / belum / sudah.
- **Filter Status Posting** — NOT YET / sebagian / POSTED.
- **Filter Status Bayar** — dibayar / belum.
- **Filter Bayar Pekerja** — worker berbayar / belum.
- **Filter Bulan & Tahun** — lihat job per bulan/tahun.
- **Urutan (Sort)** — Paling Mendesak (deadline), **Terbaru** (default), Terlama, A–Z, Z–A, Khusus (urut manual).

---

## 9. Batch & Tindakan Massal

- **Tambah Batch** — pilih beberapa job lalu jadikan satu kelompok batch.
- Header batch berwarna menampilkan nama batch-nya.
- **Edit Harga Massal / Tandai Bayar Massal** — ubah status banyak job sekaligus lewat menu klik kanan atau tombol batch.
- **Laporan Client** — lihat ringkasan per klien dalam satu tampilan.

---

## 10. Klik Kanan (Menu Konteks)

Menu klik kanan **menyesuaikan** apa yang diklik:

- **Di job** — Edit, Duplikat, Salin, Potong, Tempel, Hapus, toggle Batch, status, dll.
- **Di klien/proyek** — ganti nama, hapus, export.
- **Di area kosong** — job baru, buka semua, reset, dll.
- Menu otomatis **membalik arah** jika dekat tepi layar agar tidak terpotong.

---

## 11. Undo / Redo

- **Ctrl+Z** — batalkan perubahan terakhir.
- **Ctrl+Y / Ctrl+Shift+Z** — ulangi kembali.
- Mendukung hingga **20 tingkat riwayat**.

---

## 12. Clipboard (Salin/Tempel Job)

- **Ctrl+X / Ctrl+C / Ctrl+V** bekerja di dalam tabel untuk **memindahkan/menyalin job antar klien**.
- Bisa juga lewat menu klik kanan: **Potong, Salin, Tempel, Duplikat**.

---

## 13. Import & Export CSV

- **Import CSV** — selalu membuat **proyek baru**; jika sudah ada data, muncul pilihan 3 (buka sebagai proyek baru / gabung / batal). Format contoh ada di halaman panduan import.
- **Export CSV** — menyimpan proyek aktif atau semua proyek ke file `.csv` (bisa dibuka di Excel/Sheets).
- Aturan "Semua Proyek" berlaku saat mengekspor lebih dari 1 proyek.

---

## 14. Pengaturan (Settings)

Dibuka lewat ikon roda gigi:

- **Bahasa** — Indonesia (default), English, Melayu, 日本語.
- **Mata Uang** — mata uang untuk harga & pembayaran.
- **Tema** — gelap / terang (iklan otomatis menyesuaikan sistem).
- **Penyedia Upload** — pengaturan layanan unggah video (default Gofile).
- Pengaturan disimpan otomatis ke cloud per akun.

### Lainnya
- **Tombol mata uang** (ikon uang) di topbar — tampilkan/sembunyikan angka uang.
- **Tombol tema** di topbar — ganti gelap/terang cepat.
- **Status sinkron** — indikator kapan data tersimpan ke cloud.

---

## 15. Keamanan & Penyimpanan

- **Wajib login** — setiap akun hanya melihat datanya sendiri (Firebase Authentication + Firestore Security Rules).
- **Realtime** — perubahan langsung tersinkron antar perangkat.
- **Auto-save** — data tersimpan otomatis (~1,2 detik setelah berhenti mengetik), plus riwayat Undo/Redo.
- **Tidak ada localStorage** — semua data 100% di cloud.
- Gunakan **link reset password** di halaman login jika lupa kata sandi.

---

## Tips Ringkas

- Data terbaru selalu aman di cloud — tidak perlu menyimpan file manual.
- Bagikan **link worker** agar pekerja bisa isi/mark done/mengunggah video tanpa akun.
- Gunakan **batch** untuk pekerjaan berkelompok; ubah harga/bayar sekaligus.
- Unduh draft video sesekali agar masa simpan Gofile tidak kedaluwarsa.