# Personal Portfolio Website (Next.js + Tailwind CSS + GSAP)

Web portofolio modern terinspirasi dari desain **Jenny. Personal Portfolio UI/UX**, dibangun dengan **Next.js (App Router)**, **Tailwind CSS v4**, dan animasi **GSAP + ScrollTrigger**. Seluruh konten berbahasa Indonesia dan dipusatkan di **1 file konfigurasi** agar mudah diedit tanpa mengubah komponen UI.

## Struktur Project

- `src/app/` — Halaman Next.js: beranda (`page.jsx`), login (`login/page.jsx`), layout & global CSS.
- `src/components/` — Komponen UI tiap section (Hero, Layanan, Tentang, Proyek, Prestasi, Kontak).
- `src/data/portfolioData.js` — Semua isi konten portofolio.
- `src/lib/animations.js` — Setup GSAP + hook scroll reveal.
- `src/lib/auth.js` — Integrasi API login DummyJSON & penyimpanan token.

## Cara Edit Isi Portofolio

Buka file **[`src/data/portfolioData.js`](./src/data/portfolioData.js)** lalu ubah bagian berikut:
1. **`brand`**: Nama brand di navbar dan menu navigasi.
2. **`hero`**: Teks sapaan, nama lengkap, profesi, foto utama (`portraitImage`), kutipan singkat, link sosial media, dan badge skill mengambang.
3. **`marqueeItems`**: Daftar keahlian pada banner berjalan.
4. **`servicesSection`**: Daftar layanan bernomor (`01.` s/d `05.`) yang interaktif saat diklik.
5. **`about`**: Deskripsi profil singkat, foto, statistik pengalaman (animasi counter), dan link CV.
6. **`projectsSection`**: Daftar project portofolio beserta kategori filter.
7. **`blogsSection`**: Daftar prestasi & penghargaan.
8. **`contact`**: Email, nomor telepon/WhatsApp, lokasi, dan copyright footer.

> **Tips Ganti Foto Lokal:** Simpan foto kamu di dalam folder `public/` (contoh: `public/foto-profil.png`), lalu isi URL di `portfolioData.js` dengan `"/foto-profil.png"`.

## Halaman Login

Halaman `/login` memakai API **DummyJSON** (`POST https://dummyjson.com/user/login`). Setelah berhasil, `accessToken`, `refreshToken`, dan data user disimpan di localStorage + cookie, lalu diarahkan ke beranda.

Akun demo: username `emilys`, password `emilyspass`.

## Cara Menjalankan di Lokal

Karena PowerShell Windows terkadang memblokir `npm.ps1`, gunakan `npm.cmd`:

```powershell
# Jalankan server development
npm.cmd run dev

# Build untuk production
npm.cmd run build
npm.cmd run start
```