# Hotfix Pull Request

> ⛔ Template ini khusus untuk hotfix ke branch `main` (production).
> Untuk PR fitur atau refactor, gunakan [pull_request_template.md](./pull_request_template.md).

---

## 1. Summary

### Title

<!-- Ringkas dan deskriptif, ikuti format Conventional Commit -->
<!-- Contoh: fix(warranty): trim leading whitespace on serial number input -->

### Versi Terdampak

<!-- Versi production yang saat ini bermasalah -->
<!-- Contoh: v1.3.2 -->

### Issue / Ticket

<!-- Referensi issue atau laporan yang memicu hotfix ini: Closes #123 -->

---

## 2. Root Cause

<!-- Jelaskan akar masalah secara teknis. -->
<!-- Apa yang menyebabkan bug ini terjadi? Sejak kapan? -->
<!-- Contoh: Serial number yang diinput user kadang mengandung spasi di awal/akhir,
     sehingga query lookup gagal menemukan data yang sebenarnya ada. -->

---

## 3. Fix

<!-- Jelaskan secara teknis apa yang diubah dan mengapa ini memperbaiki masalah. -->
<!-- Hindari penjelasan terlalu panjang — fokus pada "what" dan "why", bukan "how". -->

---

## 4. Alternatif yang Dipertimbangkan

<!-- Adakah solusi lain yang kamu pertimbangkan tapi tidak dipilih? Kenapa? -->
<!-- Boleh singkat. Jika tidak ada alternatif, isi "Tidak ada alternatif lain yang relevan." -->

---

## 5. Risk Assessment

**Level risiko:**

- [ ] 🟢 Low — perubahan terisolasi, tidak ada dependency, dampak sangat terbatas
- [ ] 🟡 Medium — menyentuh logic yang digunakan di beberapa tempat, perlu regression test
- [ ] 🔴 High — menyentuh alur utama, data sensitif, atau banyak modul terdampak

**Panduan memilih level:**

| Kondisi                                 | Level                     |
| --------------------------------------- | ------------------------- |
| Perubahan 1 file, logic sederhana       | Low                       |
| Perubahan 2–5 file, ada shared logic    | Medium                    |
| Perubahan auth, payment, data migration | High                      |
| Tidak yakin                             | Medium (naikan jika ragu) |

**Penjelasan risiko:**

<!-- Jelaskan apa yang bisa salah dan bagaimana kamu memitigasinya. -->

---

## 6. Side Effect Analysis

<!-- Area mana saja yang bisa terdampak secara tidak langsung? -->
<!-- Centang semua yang kamu sudah verifikasi aman: -->

- [ ] Tidak ada side effect yang teridentifikasi
- [ ] Fitur lain yang menggunakan logic yang sama sudah dicek
- [ ] Query atau perubahan database sudah diverifikasi tidak merusak data existing
- [ ] API response tidak berubah strukturnya
- [ ] Tidak ada perubahan behavior yang tidak disengaja

---

## 7. Security Consideration

- [ ] Tidak ada concern keamanan baru
- [ ] Tidak mengekspos data sensitif
- [ ] Tidak melemahkan validasi atau otorisasi yang sudah ada
- [ ] Input sanitization tetap terjaga

---

## 8. Testing

**Tested locally:**

- [ ] Bug lama sudah tidak bisa direproduksi
- [ ] Happy path berjalan normal
- [ ] Edge case yang relevan sudah dicek

**Regression:**

- [ ] Fitur-fitur yang bersinggungan sudah dicek tidak rusak

**API (jika relevan):**

- [ ] Response tetap konsisten sebelum dan sesudah fix

**Testing steps untuk reviewer:**

1.
2.
3.

---

## 9. Deployment Notes

- [ ] Tidak ada langkah deployment khusus
- [ ] Jalankan migration (`php artisan migrate --force`)
- [ ] Clear cache (`php artisan config:cache`, `route:cache`, `view:cache`)
- [ ] Perbarui environment variable

> ⚠️ Ingat: gunakan maintenance mode jika ada migration.
>
> ```bash
> php artisan down
> php artisan migrate --force
> php artisan up
> ```

---

## 10. Post-Deploy Verification

<!-- Apa yang harus dicek segera setelah deploy untuk memastikan fix berhasil? -->

- [ ] Bug yang dilaporkan sudah tidak terjadi di production
- [ ] Tidak ada error baru di log server
- [ ] Monitoring tidak menunjukkan anomali

**Langkah verifikasi:**

1.
2.

---

## 11. Git Hygiene

- [ ] Commit message mengikuti Conventional Commits — `fix(scope): deskripsi`
- [ ] History bersih, tidak ada commit WIP
- [ ] Branch dibuat dari `main`, bukan dari `develop`
- [ ] Setelah merge ke `main`: merge balik ke `develop` sudah direncanakan
