
# 📋 Fujitsu ToDo App (Frontend Engineer Test BPM)

Aplikasi ini adalah **ToDo List App** modern dengan fitur tambahan menggunakan **Redux-Saga**, **Axios**, **animasi loading**, dan integrasi dengan **API publik**. Dibuat menggunakan **React + Vite**.

---

## 🚧 Status Integrasi

❌ **Integrasi API Publik**:
> Komponen `PublicData.jsx` mencoba mengambil data dari endpoint `https://jsonplaceholder.typicode.com/todos?_limit=5`, namun **belum berhasil tampil** karena belum sepenuhnya tersambung dengan proyek utama Todo List (state dan store belum sinkron antar fitur).

---

## ✅ Fitur Utama yang Sudah Dibuat

| Fitur | Deskripsi |
|-------|----------|
| ✅ Todo List | Menambah, mengedit, menghapus todo |
| ✅ Drag and Drop | Reorder item menggunakan drag |
| ✅ Redux Toolkit | State management untuk todo |
| ✅ Redux Saga | Middleware untuk handle efek samping |
| ✅ Axios | Untuk panggil API (dummy dan publik) |
| ✅ Animasi Loading | Indikator saat loading data |
| ✅ Responsive UI | Layout responsif dan bersih |
| ✅ Struktur Modular | Komponen dan redux disusun rapi |

---


---

## 🛠 Cara Menjalankan

```bash
# Install dependency
npm install

# Jalankan aplikasi
npm run dev
```

Buka `http://localhost:5173`

---

## 💡 Catatan Pengembangan

- Komponen `PublicData.jsx` disiapkan untuk menampilkan data dari API eksternal.
- `redux/publicDataSlice.js` sudah menangani data dari API, tinggal hubungkan lebih rapi ke root `store`.
- Bisa dikembangkan untuk ambil data publik lainnya jika integrasi API diperbaiki.

---

## 🙌 Kontribusi & Saran

Silakan pull request atau issue jika ada perbaikan / saran. Proyek ini disiapkan untuk proses rekrutmen **Frontend Engineer di BPM**.
