# Örümcek Feza – Uzay Macerası – çalışma notları

- Oyun tek dosya: `index.html` (tüm kod içinde, bölümler `// ── ... ──` başlıklarıyla ayrılmış; file:// ile de çalışmalı). Kodu ayrı .js dosyalarına bölme: GitHub dili HTML göstersin diye tek dosyada tutuluyor.
- Anlatıcı sesleri `sesler.js` içine gömülü (Emel, tr-TR); `window.VOICE_TEXT` cümle metinlerini, `window.VOICE_MP3` base64 mp3'leri tutar.
- Test ederken sesi kapat (kullanıcının Mac'inde ses çalmasın): sayfa konsolunda karakter seçmeden önce `muted = true`.
- GitHub'a SADECE kullanıcı "yolla" / "GitHub'a gönder" dediğinde gönder: `git add -A && git commit -m "..." && git push` (depo: github.com/goktugkarpat/orumcek-feza-uzay, GitHub Pages açık: https://goktugkarpat.github.io/orumcek-feza-uzay/). Aradaki değişiklikleri kendiliğinden push etme. Kullanıcı ayrıca `yayinla.command` dosyasına çift tıklayarak da gönderebilir.
