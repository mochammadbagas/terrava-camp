# Pull Request

---

## 0. PR Size

Pilih satu — tentukan seberapa besar scope perubahan ini:

- [ ] **Trivial** — typo, rename, komentar, dokumentasi minor _(isi hanya section 1 dan 10 Git Hygiene)_
- [ ] **Small** — bug fix sederhana, perubahan UI kecil _(isi section 1–4, 10, 11)_
- [ ] **Standard** — fitur baru, refactor, perubahan API _(isi semua section)_
- [ ] **Large** — perubahan arsitektur, multi-area, breaking change _(isi semua section + minta review ekstra)_

---

## 1. Summary

### Title

<!-- Ringkas dan deskriptif, ikuti format Conventional Commit -->
<!-- Contoh: feat(catalog): add category & price filtering -->

### Purpose

<!-- Apa problemnya? Apa yang diselesaikan oleh PR ini? -->

### Issue / Ticket

<!-- Tutup issue terkait jika ada: Closes #123 -->

---

## 2. Type of Change

- [ ] `feat` — fitur baru
- [ ] `fix` — bug fix
- [ ] `refactor` — perbaikan internal tanpa perubahan behavior
- [ ] `perf` — optimasi performa
- [ ] `docs` — dokumentasi saja
- [ ] `test` — penambahan atau perubahan test
- [ ] `chore` — dependency, config, atau build update

---

## 3. Scope / Affected Areas

<!-- Centang semua area yang terdampak -->

- [ ] Frontend — komponen, halaman, state management
- [ ] Backend — controller, service, model, middleware
- [ ] API — endpoint baru atau perubahan kontrak
- [ ] Database — migration, schema, query
- [ ] Infrastructure / CI — pipeline, environment, config
- [ ] Dokumentasi

---

## 4. What Changed

<!-- Deskripsikan secara teknis perubahan yang dilakukan. -->
<!-- Cukup poin-poin utama, tidak perlu exhaustive. -->

---

## 5. Why This Approach?

<!-- Jelaskan reasoning teknis atau arsitektural. -->
<!-- Kenapa memilih solusi ini dan bukan alternatif lain? -->
<!-- Kalau sudah obvious, boleh diisi "straightforward fix". -->

---

## 6. Technical Notes

<!-- Isi hanya area yang relevan, hapus yang tidak digunakan. -->

#### Backend

<!-- Perubahan model, controller, service, validation, migration, dll -->

#### Frontend

<!-- Perubahan state management, struktur komponen, layout, dll -->

#### Database

- [ ] Tidak ada perubahan schema
- [ ] Migration ditambahkan
- [ ] Seed diperbarui

---

## 7. Breaking Changes

- [ ] Tidak ada breaking change
- [ ] Ada breaking change

<!-- Jika ada, jelaskan impact dan langkah migrasi yang diperlukan: -->

---

## 8. Performance Impact

- [ ] Tidak ada dampak signifikan
- [ ] Performa meningkat
- [ ] Potensi risiko performa

<!-- Jelaskan jika ada query berat, loop besar, N+1, atau memory concern: -->

---

## 9. Security Consideration

- [ ] Tidak ada concern keamanan baru
- [ ] Validasi input ditambahkan atau diperbarui
- [ ] Logic otorisasi terdampak
- [ ] Data sensitif terlibat

<!-- Jelaskan jika ada concern spesifik: -->

---

## 10. Self Review Checklist

#### Functional

- [ ] Fitur berjalan sesuai requirement
- [ ] Tidak merusak fitur existing
- [ ] Edge case sudah dipertimbangkan
- [ ] Manual testing dilakukan

#### UI / UX _(lewati jika tidak ada perubahan UI)_

- [ ] Responsive tested
- [ ] Spacing & alignment konsisten
- [ ] Tidak ada layout shift
- [ ] Tidak ada visual regression

#### Code Quality

- [ ] Tidak ada `console.log` atau debug dump
- [ ] Tidak ada unused import atau dead code
- [ ] Naming konsisten dan deskriptif
- [ ] Tidak ada duplicate logic
- [ ] Complexity wajar dan terjustifikasi

#### Architecture

- [ ] Tidak mencampur concern (SRP)
- [ ] Komponen atau logic reusable jika relevan
- [ ] Tidak introduce tight coupling
- [ ] Maintainable untuk scale

#### Git Hygiene

- [ ] Commit message mengikuti Conventional Commits
- [ ] History bersih — squash commit WIP jika perlu
- [ ] Branch sudah up to date dengan `develop`

---

## 11. Testing

- [ ] Tested locally
- [ ] Unit test ditambahkan atau diperbarui
- [ ] Regression tested
- [ ] API tested via Postman atau sejenisnya

**Testing steps:**

1.
2.
3.

---

## 12. Screenshots / Demo _(lewati jika tidak ada perubahan UI)_

**Before:**

<!-- screenshot -->

**After:**

<!-- screenshot -->

---

## 13. Deployment Notes

- [ ] Tidak ada langkah deployment khusus
- [ ] Jalankan migration
- [ ] Clear cache (`php artisan cache:clear` atau sejenisnya)
- [ ] Perbarui environment variable

<!-- Catatan tambahan jika ada urutan langkah yang perlu diikuti: -->
