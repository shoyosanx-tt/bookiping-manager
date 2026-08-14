(function () {
  "use strict";

  // =====================================================================
  // firebase-init.js — VERSI FULL CLOUD + REAL-TIME
  // Semua data disimpan di Firestore (users/{uid}). TANPA localStorage.
  // Login WAJIB: sebelum login, app disembunyikan oleh CSS auth-gate.
  // onSnapshot → perubahan dari device mana pun langsung muncul tanpa refresh.
  // =====================================================================

  var firebaseConfig = window.__FIREBASE_CONFIG || {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  var currentUser = null;
  var firebaseReady = false;
  var db = null;
  var auth = null;
  var readyListeners = [];
  var writerId = (Math.random().toString(36).slice(2) + Date.now().toString(36)); // token sesi untuk deteksi echo
  var lastWritten = 0;       // lastModified dari write terakhir milik kita (cadangan)
  var unsubRealtime = null;  // pembersih listener realtime
  var readyFired = false;    // sudah memanggil onReady sekali per sesi login

  function T(key) { return (typeof window.__t === 'function') ? window.__t(key) : key; }

  try {
    if (typeof firebase !== 'undefined') {
      firebase.initializeApp(firebaseConfig);
      auth = firebase.auth();
      db = firebase.firestore();
      firebaseReady = true;
    }
  } catch (e) {
    console.error('Firebase init error:', e);
  }

  function showAuthError(el, msg) {
    var e = document.getElementById(el);
    if (e) { e.textContent = msg; e.style.display = ''; }
  }

  function clearAuthError(el) {
    var e = document.getElementById(el);
    if (e) { e.style.display = 'none'; }
  }

  function showAuthModal() {
    var ov = document.getElementById('authBackdrop');
    if (ov) ov.classList.add('open');
  }

  function hideAuthModal() {
    var ov = document.getElementById('authBackdrop');
    if (ov) ov.classList.remove('open');
  }

  function handleLogin() {
    if (!firebaseReady) { showAuthError('loginError', T('firebaseNotConnected')); return; }
    var email = document.getElementById('loginEmail').value.trim();
    var pass = document.getElementById('loginPassword').value;
    clearAuthError('loginError');
    if (!email || !pass) { showAuthError('loginError', T('fillAllFields')); return; }
    var btn = document.getElementById('loginBtn');
    if (btn) { btn.disabled = true; btn.textContent = '...'; }
    auth.signInWithEmailAndPassword(email, pass)
      .then(function () { hideAuthModal(); })
      .catch(function (err) { showAuthError('loginError', err.message); })
      .then(function () { if (btn) { btn.disabled = false; btn.textContent = T('login'); } });
  }

  function handleRegister() {
    if (!firebaseReady) { showAuthError('regError', T('firebaseNotConnected')); return; }
    var email = document.getElementById('regEmail').value.trim();
    var pass = document.getElementById('regPassword').value;
    clearAuthError('regError');
    if (!email || !pass) { showAuthError('regError', T('fillAllFields')); return; }
    if (pass.length < 6) { showAuthError('regError', T('passwordMin6')); return; }
    var btn = document.getElementById('registerBtn');
    if (btn) { btn.disabled = true; btn.textContent = '...'; }
    auth.createUserWithEmailAndPassword(email, pass)
      .then(function () { hideAuthModal(); })
      .catch(function (err) { showAuthError('regError', err.message); })
      .then(function () { if (btn) { btn.disabled = false; btn.textContent = T('register'); } });
  }

  function handleLogout() {
    if (!firebaseReady) return;
    auth.signOut().then(function () { location.reload(); });
  }

  function handleForgotPassword() {
    if (!firebaseReady) { showAuthError('loginError', T('firebaseNotConnected')); return; }
    var email = document.getElementById('loginEmail').value.trim();
    if (!email) { showAuthError('loginError', T('enterEmailFirst')); return; }
    clearAuthError('loginError');
    auth.sendPasswordResetEmail(email).then(function () {
      document.getElementById('loginError').style.display = '';
      document.getElementById('loginError').textContent = T('resetEmailSent');
      document.getElementById('loginError').style.color = '#66bb6a';
    }).catch(function (err) { showAuthError('loginError', err.message); });
  }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  function updateAuthUI() {
    var container = document.getElementById('authContainer');
    if (!container) return;
    if (currentUser) {
      container.style.display = '';
      var displayName = currentUser.displayName || currentUser.email || T('user');
      var avatarColor = 'linear-gradient(135deg,#818cf8,#4f46e5)';
      container.innerHTML =
        '<button class="btn btn-primary" id="authUserBtn" title="' + T('account') + '" style="gap:5px;font-size:12px;padding:5px 11px">' +
        '<span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:' + avatarColor + ';color:#fff;font-size:10px;font-weight:700;flex-shrink:0">' +
        displayName.charAt(0).toUpperCase() + '</span>' +
        '<span style="max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(displayName) + '</span>' +
        '</button>';
      var userBtn = document.getElementById('authUserBtn');
      if (userBtn) userBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        openAccountModal();
      });
    } else {
      container.style.display = 'none';
      container.innerHTML = '';
    }
  }

  function closeAccountModal() {
    var modal = document.getElementById('accountModal');
    if (modal) modal.classList.remove('open');
  }

  function openAccountModal() {
    var modal = document.getElementById('accountModal');
    if (!modal || !currentUser) return;
    var displayName = currentUser.displayName || currentUser.email || T('user');
    var email = currentUser.email || '-';
    var avatar = document.getElementById('accountAvatar');
    var nameEl = document.getElementById('accountName');
    var emailEl = document.getElementById('accountEmail');
    if (avatar) avatar.textContent = displayName.charAt(0).toUpperCase();
    if (nameEl) nameEl.textContent = displayName;
    if (emailEl) emailEl.textContent = email;
    modal.classList.add('open');
  }

  function wireAccountModal() {
    var closeBtn = document.getElementById('accountModalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeAccountModal);
    var settingsBtn = document.getElementById('accountSettingsBtn');
    if (settingsBtn) settingsBtn.addEventListener('click', function() {
      closeAccountModal();
      var btn = document.getElementById('btnSettings');
      if (btn) btn.click();
    });
    var logoutBtn = document.getElementById('accountLogoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', function() {
      closeAccountModal();
      handleLogout();
    });
  }
  wireAccountModal();

  window.__firebaseCloudLoaded = false;

  function setSync(status) {
    var el = document.getElementById('syncStatus');
    if (!el) return;
    if (status === 'saving') {
      el.textContent = T('syncSaving');
      el.classList.add('syncing');
      el.classList.remove('sync-error');
    } else if (status === 'synced') {
      el.textContent = T('syncSaved');
      el.classList.remove('syncing', 'sync-error');
    } else if (status === 'error') {
      el.textContent = T('syncError');
      el.classList.add('sync-error');
      el.classList.remove('syncing');
    } else {
      el.textContent = '';
      el.classList.remove('syncing', 'sync-error');
    }
  }

  function loadCloudData() {
    if (!currentUser || !firebaseReady || !db) return Promise.resolve(null);
    return db.collection('users').doc(currentUser.uid).get().then(function (doc) {
      if (doc.exists) return doc.data();
      return null;
    }).catch(function (err) {
      console.error('Firestore load error:', err);
      return null;
    });
  }

  // True kalau dokumen tidak berisi data nyata (project kosong / tanpa client & job).
  function isEmptyState(data) {
    if (!data || !Array.isArray(data.projects)) return true;
    for (var i = 0; i < data.projects.length; i++) {
      var p = data.projects[i] || {};
      var clients = Array.isArray(p.clients) ? p.clients : [];
      if (!clients.length) continue;
      for (var j = 0; j < clients.length; j++) {
        var jobs = Array.isArray((clients[j] || {}).jobs) ? clients[j].jobs : [];
        if (clients[j] && (clients[j].name || clients[j].accountLink || jobs.length)) return false;
      }
    }
    return true;
  }

  // Simpan dengan deteksi konflik: hanya menimpa kalau data lokal LEBIH BARU dari server,
  // dan menolak menimpa data yang ada dengan state kosong (penyebab data hilang).
  function saveCloudData(data) {
    if (!currentUser || !firebaseReady || !db) return Promise.resolve({ stale: false });
    data.writer = writerId;
    lastWritten = data.lastModified;
    setSync('saving');
    var docRef = db.collection('users').doc(currentUser.uid);
    var incoming = (data && typeof data.lastModified === 'number') ? data.lastModified : Date.now();
    return db.runTransaction(function (tx) {
      return tx.get(docRef).then(function (doc) {
        if (doc.exists) {
          var server = doc.data();
          var serverLast = (server && typeof server.lastModified === 'number') ? server.lastModified : 0;
          // Server punya perubahan yang lebih baru → jangan timpa, muat ulang dari server.
          if (serverLast > incoming) {
            return { stale: true, serverData: server };
          }
          // Jangan biarkan state kosong menimpa data yang sudah ada.
          if (isEmptyState(data) && !isEmptyState(server)) {
            return { stale: true, serverData: server };
          }
        }
        tx.set(docRef, data);
        return { stale: false };
      });
    }).then(function (res) {
      if (res && res.stale) {
        setSync('synced');
        // Muat ulang dari server supaya state lokal tidak lagi menimpa data yang lebih baru.
        if (typeof window.__applyRemoteData === 'function' && res.serverData) window.__applyRemoteData(res.serverData);
        return res;
      }
      setSync('synced');
      return res || { stale: false };
    }).catch(function (err) {
      console.error('Firestore save error:', err);
      setSync('error');
      return { stale: false };
    });
  }

  function resetCloudData() {
    if (!currentUser || !firebaseReady || !db) return Promise.resolve();
    return db.collection('users').doc(currentUser.uid).delete().catch(function (err) {
      console.error('Firestore reset error:', err);
    });
  }

  // Save ringan: batch perubahan cepat, tulis ke Firestore dalam ±350ms.
  var debouncedCloudSave = (function () {
    var timer = null;
    var pending = null;
    function run() {
      if (pending) {
        var d = pending;
        pending = null;
        saveCloudData(d);
      }
    }
    function schedule(data) {
      pending = data;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () { timer = null; run(); }, 350);
    }
    schedule.flush = function () {
      if (timer) { clearTimeout(timer); timer = null; }
      run();
    };
    schedule.cancel = function () {
      if (timer) { clearTimeout(timer); timer = null; }
      pending = null;
    };
    return schedule;
  })();

  window.addEventListener('pagehide', function () {
    debouncedCloudSave.flush();
  });

  function notifyDataChange(data) {
    debouncedCloudSave(data);
  }

  function notifyReady(user, data) {
    readyListeners.forEach(function (cb) {
      try { cb(user, data); } catch (e) { console.error('onReady callback error:', e); }
    });
  }

  // =====================================================================
  // Real-time listener — perubahan dari device lain langsung diterapkan.
  // lastWritten dipakai untuk mengabaikan "echo" dari write kita sendiri.
  // =====================================================================
  function startRealtime() {
    if (unsubRealtime) { unsubRealtime(); unsubRealtime = null; }
    readyFired = false;
    if (!currentUser || !db) return;
    var uid = currentUser.uid;
    unsubRealtime = db.collection('users').doc(uid).onSnapshot(function (snap) {
      if (snap.exists) {
        var d = snap.data();
        window.__firebaseCloudLoaded = true;
        var isSelfEcho = d.writer === writerId;
        if (isSelfEcho) {
          // Data hasil write sendiri — jangan render ulang, cukup tandai siap.
          // Tapi saat load pertama (readyFired belum true), tetap muat data ke state
          // agar boot() tidak membuat "Project 1" kosong lalu menimpa data yang ada.
          if (!readyFired) {
            readyFired = true;
            if (typeof window.__applyRemoteData === 'function') window.__applyRemoteData(d);
            notifyReady(currentUser, d);
          }
          setSync('synced');
          return;
        }
        // Perubahan dari device lain / data awal dari server.
        // Batalkan save yang masih mengantre agar tidak menimpa data remote dengan data lama.
        debouncedCloudSave.cancel();
        if (typeof window.__applyRemoteData === 'function') window.__applyRemoteData(d);
        if (!readyFired) { readyFired = true; notifyReady(currentUser, d); }
        setSync('synced');
      } else {
        window.__firebaseCloudLoaded = true;
        if (!readyFired) { readyFired = true; notifyReady(currentUser, null); }
      }
    }, function (err) {
      console.error('Realtime listen error:', err);
      window.__firebaseCloudLoaded = true;
      setSync('error');
      if (!readyFired) { readyFired = true; notifyReady(currentUser, null); }
    });
  }

  if (firebaseReady) {
    auth.onAuthStateChanged(function (user) {
      currentUser = user;
      updateAuthUI();
      if (user) {
        document.body.classList.remove('auth-gated');
        hideAuthModal();
        startRealtime();
      } else {
        window.__firebaseCloudLoaded = true;
        if (unsubRealtime) { unsubRealtime(); unsubRealtime = null; }
        var isWorkerLink = /[?&](worker|owner)=/.test(window.location.search);
        if (isWorkerLink) {
          // Halaman link worker tidak butuh login — worker bukan admin.
          document.body.classList.remove('auth-gated');
          notifyReady(null, null);
        } else {
          document.body.classList.add('auth-gated');
          notifyReady(null, null);
          showAuthModal();
        }
      }
    });
  } else {
    // Firebase SDK gagal dimuat — tampilkan pesan di modal login
    document.body.classList.add('auth-gated');
    window.__firebaseCloudLoaded = true;
    setTimeout(function () {
      showAuthModal();
      showAuthError('loginError', 'Firebase SDK gagal dimuat. Periksa koneksi internet.');
    }, 100);
  }

  window.__firebase = {
    ready: function () { return firebaseReady; },
    currentUser: function () { return currentUser; },
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    forgotPassword: handleForgotPassword,
    notifyDataChange: notifyDataChange,
    saveCloudData: saveCloudData,
    loadCloudData: loadCloudData,
    resetData: resetCloudData,
    onReady: function (cb) { readyListeners.push(cb); },
    showAuthModal: showAuthModal,
    hideAuthModal: hideAuthModal,
    updateUI: updateAuthUI,
    isGuest: function () { return currentUser ? currentUser.isAnonymous : false; }
  };

  document.addEventListener('DOMContentLoaded', function () {
    var closeBtn = document.getElementById('authClose');
    if (closeBtn) closeBtn.addEventListener('click', hideAuthModal);
    document.getElementById('loginBtn').addEventListener('click', handleLogin);
    document.getElementById('registerBtn').addEventListener('click', handleRegister);
    document.getElementById('showRegisterBtn').addEventListener('click', function () {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('registerForm').style.display = '';
    });
    document.getElementById('showLoginBtn').addEventListener('click', function () {
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('loginForm').style.display = '';
    });
    document.getElementById('forgotPasswordLink').addEventListener('click', function (e) {
      e.preventDefault();
      handleForgotPassword();
    });

    document.getElementById('loginEmail').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleLogin();
    });
    document.getElementById('loginPassword').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleLogin();
    });
    document.getElementById('regEmail').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleRegister();
    });
    document.getElementById('regPassword').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleRegister();
    });
  });
})();
