# Örümcek Feza – Uzay Macerası – çalışma notları

- Oyun tek dosya: `index.html` (tüm kod içinde, bölümler `// ── ... ──` başlıklarıyla ayrılmış; file:// ile de çalışmalı). Kodu ayrı .js dosyalarına bölme: GitHub dili HTML göstersin diye tek dosyada tutuluyor.
- Anlatıcı sesleri `sesler.js` içine gömülü (Emel, tr-TR); `window.VOICE_TEXT` cümle metinlerini, `window.VOICE_MP3` base64 mp3'leri tutar.
- Test ederken oyunu her zaman `?sessiz` ile aç (kullanıcının Mac'inde ses çalmasın): `index.html?sessiz`.
- GitHub'a SADECE kullanıcı "yolla" / "GitHub'a gönder" dediğinde gönder: `git add -A && git commit -m "..." && git push` (depo: github.com/goktugkarpat/orumcek-feza-uzay, GitHub Pages açık: https://goktugkarpat.github.io/orumcek-feza-uzay/). Aradaki değişiklikleri kendiliğinden push etme. Kullanıcı ayrıca `yayinla.command` dosyasına çift tıklayarak da gönderebilir.
- iPad uygulaması: `manifest.webmanifest`, `sw.js` (internetsiz çalışma; dosya eklenirse `CORE` listesine ekle, önemli değişiklikte `CACHE` sürümünü artır), `icons/`. Simge `index.html?ikon` sayfasının 1024x1024 ekran görüntüsünden üretilir.
