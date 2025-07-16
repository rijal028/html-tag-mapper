![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![VS Code Extension](https://img.shields.io/badge/VSCode-Extension-blue?logo=visualstudiocode)
![Status: WIP](https://img.shields.io/badge/status-WIP-orange)


# 💡 HTML Tag Mapper – Smart & Stable Visual Tag Pairing for HTML (WIP)

A smart Visual Studio Code extension that helps you **visually trace and verify paired HTML tags** (like `<div>`) with stable numbering. Designed to simplify debugging, teaching, and editing complex HTML structures.

---

## ✨ Features

- 🔢 **Visual numbering**: Each opening tag gets `↑n`, and its matching closing tag gets `↓n`
- ❌ **Error detection**: Unmatched tags are marked in red (`↑✘`, `↓✘`)
- 📚 **Smart pairing algorithm**: Automatically maps tags while minimizing pairing errors
- 🧠 **Manual override via `data-tag="n"`** for precision editing
- 🧩 **Currently supports**: Only <div>, <section>, <article>, <span>, <header>, <footer>, <nav>, <main>
- 🛠️ **WIP (Work In Progress)**: Actively developed and being improved

---

## 🚀 How to Use

1. Download or clone the extension.
2. Run it via VS Code Extension Host (or package as `.vsix`)
3. Open an `.html` file — numbered tags will appear automatically.
4. (Optional) Add `data-tag="5"` to manually assign a tag pairing.

```html
<div data-tag="1">
  <div data-tag="2">
    Content
  </div>
</div>
```

---

## 🧭 Future Plans

- Support for other HTML tags 
- Improved manual pairing UI
- Support for XML, JSX, Vue templates
- Advanced conflict resolution for tag structure changes

---

## 👨‍💻 Author

Made by **Rijal Saepuloh**  
Built with care to assist educators, developers, and HTML learners.

---

---

# 💡 HTML Tag Mapper – Penomoran Tag HTML Secara Cerdas & Stabil (WIP)

Ekstensi Visual Studio Code yang membantu Anda **melihat dan memverifikasi pasangan tag HTML** seperti `<div>` secara visual dengan penomoran yang stabil dan mudah dibaca.

Cocok untuk debugging, mengajar, dan menyunting HTML yang kompleks.

---

## ✨ Fitur

- 🔢 **Penomoran visual**: Tag pembuka diberi `↑n`, dan tag penutupnya `↓n`
- ❌ **Deteksi kesalahan**: Tag yang tidak berpasangan akan ditandai merah (`↑✘`, `↓✘`)
- 📚 **Algoritma pairing cerdas**: Meminimalkan error saat menandai pasangan tag
- 🧠 **Kontrol manual dengan `data-tag="n"`** untuk pengaturan yang lebih tepat
- 🧩 **Saat ini hanya mendukung**: Tag <div>, <section>, <article>, <span>, <header>, <footer>, <nav>, <main>
- 🛠️ **Status: WIP (Work In Progress)** — masih dikembangkan aktif

---

## 🚀 Cara Pakai

1. Unduh atau clone ekstensi ini.
2. Jalankan dari host ekstensi VS Code (atau jadikan `.vsix`)
3. Buka file `.html` — nomor tag akan langsung muncul.
4. (Opsional) Tambahkan `data-tag="5"` untuk mengatur pasangan tag secara manual.

```html
<div data-tag="1">
  <div data-tag="2">
    Konten
  </div>
</div>
```

---

## 🧭 Rencana Ke Depan

- Dukungan untuk tag HTML lainnya
- UI pairing manual yang lebih interaktif
- Dukungan untuk XML, JSX, dan template Vue
- Resolusi konflik lanjutan saat struktur tag berubah

---

## 👨‍💻 Pembuat

Dikembangkan oleh **Rijal Saepuloh**  
Dibuat dengan semangat untuk membantu pengajar, pengembang, dan pelajar HTML.
