// =====================================================================
// Firebase config — VERSI FULL CLOUD (tanpa localStorage)
// =====================================================================
// CARA SETUP PROJECT BARU:
// 1. Buka https://console.firebase.google.com → "Add project"
//    (nama bebas, mis. "adsmanager-cloud")
// 2. Di project itu: Build → Authentication → Get started →
//    aktifkan "Email/Password" (dan boleh "Anonymous" jika mau).
// 3. Build → Firestore Database → Create database →
//    mode production (rules nanti bisa dipakai dari firestore.rules).
// 4. Project settings (ikon roda gigi) → "Your apps" → Web app "</>"
//    → daftarkan web app → salin nilai konfigurasi di bawah ini.
// 5. Ganti placeholder "YOUR_NEW_PROJECT" dan isi apiKey/appId/dll,
//    lalu deploy: firebase use <projectId> && firebase deploy.
// =====================================================================
window.__FIREBASE_CONFIGS = {
  "bookiping-manager": {
    apiKey: "AIzaSyCvqcFnJbmsM7HdhvrnIjbDGLLebZP6aeA",
    authDomain: "bookiping-manager.firebaseapp.com",
    projectId: "bookiping-manager",
    storageBucket: "bookiping-manager.firebasestorage.app",
    messagingSenderId: "821653069763",
    appId: "1:821653069763:web:7382d6180e5d0dfdd92776"
  }
};

// >>> Pilih project aktif <<<
var __ACTIVE_FIREBASE = "bookiping-manager";

window.__FIREBASE_CONFIG = window.__FIREBASE_CONFIGS[__ACTIVE_FIREBASE] || window.__FIREBASE_CONFIGS["bookiping-manager"];
window.__ACTIVE_FIREBASE_PROJECT = __ACTIVE_FIREBASE;
