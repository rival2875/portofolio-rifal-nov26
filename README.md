# Personal Portfolio Website (React + Vite + Tailwind CSS)

Web portofolio modern terinspirasi dari desain **Jenny. Personal Portfolio UI/UX**. Semua teks, foto, skill, daftar layanan, dan project dipusatkan di **1 file konfigurasi** agar mudah diedit tanpa perlu mengubah komponen UI.

## Cara Edit Isi Portofolio

Buka file **[`src/data/portfolioData.js`](./src/data/portfolioData.js)** lalu ubah bagian berikut:
1. **`brand`**: Nama brand di navbar (`Jenny.`) dan menu navigasi.
2. **`hero`**: Teks sapaan, nama lengkap, profesi, link foto utama (`portraitImage`), jumlah review, kutipan singkat, link sosial media, dan badge skill mengambang.
3. **`marqueeItems`**: Daftar keahlian pada banner berjalan berwarna hitam.
4. **`servicesSection`**: Daftar layanan bernomor (`01.` s/d `05.`) yang interaktif saat diklik.
5. **`about`**: Deskripsi profil singkat, foto, statistik pengalaman, dan link CV.
6. **`projectsSection`**: Daftar project portofolio beserta kategori filter.
7. **`testimonialsSection`** & **`blogsSection`**: Review klien dan artikel terbaru.
8. **`contact`**: Email, nomor telepon/WhatsApp, lokasi, dan copyright footer.

> **Tips Ganti Foto Lokal:** Simpan foto kamu di dalam folder `public/` (contoh: `public/foto-profil.png`), lalu isi URL di `portfolioData.js` dengan `"/foto-profil.png"`.

## Cara Menjalankan di Lokal

Karena PowerShell Windows terkadang memblokir `npm.ps1`, gunakan `npm.cmd`:

```powershell
# Jalankan server development
npm.cmd run dev

# Build untuk production (Vercel / Netlify)
npm.cmd run build
```
