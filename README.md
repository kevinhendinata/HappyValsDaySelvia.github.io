# 💕 Valentine's Day Website untuk Selvia

Website romantis yang playful dengan game Yes/No untuk Valentine's Day!

## 🎯 Fitur:
- Kursor berbentuk hati 💖
- Game Yes/No yang fun (button No akan mengecil & kabur!)
- Warna elegan: hitam, putih, abu-abu, emas, blue-pink accents
- Gombalan Indo-English yang smooth
- Multiple pages dengan animasi
- Link ke galeri foto
- WhatsApp button

## 📋 Step-by-Step Upload ke GitHub:

### Cara 1: Pakai GitHub Web (Paling Mudah)

1. **Buka GitHub**
   - Pergi ke https://github.com
   - Login ke akun GitHub kamu

2. **Buat Repository Baru**
   - Klik tombol "+" di pojok kanan atas
   - Pilih "New repository"
   - Isi nama repository: `valentine-selvia` (atau nama apa aja)
   - Centang "Public"
   - Centang "Add a README file"
   - Klik "Create repository"

3. **Upload File HTML**
   - Di repository yang baru dibuat, klik "Add file" > "Upload files"
   - Drag & drop file `index.html` ke browser
   - Atau klik "choose your files" dan pilih `index.html`
   - Scroll ke bawah, klik "Commit changes"

4. **Aktifkan GitHub Pages**
   - Di repository, klik tab "Settings"
   - Scroll ke bawah, cari menu "Pages" di sidebar kiri
   - Di bagian "Source", pilih "main" branch
   - Klik "Save"
   - Tunggu beberapa detik, refresh halaman
   - Akan muncul link website kamu! Biasanya: `https://username.github.io/valentine-selvia`

5. **Done!** 🎉
   - Buka link tersebut untuk lihat website
   - Share link ke Selvia!

---

### Cara 2: Pakai Git Command Line (Advanced)

```bash
# 1. Install Git (kalau belum ada)
# Download dari: https://git-scm.com/downloads

# 2. Buka Terminal/Command Prompt

# 3. Masuk ke folder tempat file index.html
cd path/to/your/folder

# 4. Initialize Git
git init

# 5. Add file
git add index.html

# 6. Commit
git commit -m "Initial commit - Valentine website"

# 7. Buat repository di GitHub (via web dulu)

# 8. Connect ke GitHub
git remote add origin https://github.com/username/valentine-selvia.git

# 9. Push ke GitHub
git branch -M main
git push -u origin main

# 10. Aktifkan GitHub Pages lewat Settings > Pages
```

---

## ✏️ Yang Perlu Kamu Edit:

1. **Link Galeri Foto** (di file index.html):
   - Cari baris: `<a href="#" class="link-button" target="_blank" id="galleryLink">`
   - Ganti `#` dengan link Canva presentation kamu
   - Contoh: `<a href="https://www.canva.com/design/xxxxx" class="link-button"...`

2. **Optional - Custom Domain:**
   - Kalau mau pakai domain sendiri (misal: `selvia-valentine.com`)
   - Beli domain dulu
   - Di GitHub Settings > Pages, tambahkan custom domain
   - Follow instruksi DNS setting dari GitHub

---

## 🎨 Customize Lebih Lanjut:

### Ganti Warna:
Cari di bagian `<style>` untuk ganti warna:
- Background: `background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);`
- Gold accent: `#d4af37`
- Blue dark: `#0f3460`

### Tambah Halaman:
1. Copy paste satu section `<div id="pageX" class="page">`
2. Ganti id jadi page number baru
3. Update button `onclick="nextPage(X)"`

### Ganti Font:
Cari: `font-family: 'Segoe UI', 'Comic Sans MS', cursive, sans-serif;`
Ganti dengan font yang kamu suka!

---

## 🐛 Troubleshooting:

**Website tidak muncul?**
- Tunggu 1-2 menit setelah enable GitHub Pages
- Pastikan file namanya `index.html` (huruf kecil semua)
- Check di Settings > Pages apakah sudah active

**Button No tidak bergerak?**
- Pastikan JavaScript tidak di-block browser
- Coba refresh page

**Link WA tidak berfungsi?**
- Pastikan format: `https://wa.me/6285725625105`
- Jangan ada spasi atau karakter aneh

---

## 💝 Tips:

- Test dulu di local (double click index.html) sebelum upload
- Screenshot hasilnya untuk backup
- Share link pas waktu yang tepat! 😉
- Siapkan tisu buat Selvia yang terharu 🥺

---

**Good luck, Kevin! Semoga Selvia suka! 💕**

Kalau ada masalah, feel free to ask!
