# Örümcek Feza – Uzay Macerası 🕷️🚀

Küçük çocuklar için hazırlanmış, Türkçe seslendirmeli bir uzay oyunu.
Feza (ya da Anne ya da Baba) bir örümcek kahraman oluyor, ağını fırlatarak gezegenden gezegene sallanıyor, uzaylı dostlarını kurtarıyor ve her gezegende küçük bir görev yapıyor.

## Nasıl açılır

- **Bilgisayarda:** `index.html` dosyasına çift tıklamanız yeterli. Kurulum ya da internet gerekmez.
- **iPad'de / internette:** Oyun GitHub Pages'ta yayında: https://goktugkarpat.github.io/orumcek-feza-uzay/
  iPad'de Safari ile bu adresi açıp Paylaş › **Ana Ekrana Ekle** deyin: oyun kendi simgesiyle, tam ekran bir uygulama gibi açılır.
  İlk açılıştan sonra **internet olmadan da** çalışır (`sw.js` oyunu cihaza kaydeder).

## Nasıl oynanır

- Başta kahramanını seç: **Feza**, **Anne** ya da **Baba**.
- Bir gezegene dokun: kahraman ağını fırlatır ve oraya sallanarak gider.
- Islak bir uzaylı gelince (tepesinde yağmur bulutu var, titriyor, hapşırıyor) üstüne dokun: Feza uzaktan kurutma makinesiyle sıcak hava sıkar, 5 dokunuşta uzaylı kupkuru olup dostun olur (👽 sayacı artar). Uzaylı kurulanmadan ve gezegendeki iş bitmeden yola çıkılmaz.
- Kuyruklu yıldız gelince dokun, su fışkırt; yanan yıldıza dokun, kar topu at.
- 🏠 düğmesi karakter seçimine döner, 🔊 düğmesi sesi açar/kapatır.
- Adresin sonuna `?sessiz` eklersen oyun tamamen sessiz açılır (test için).

## Gezegenler ve görevler

Dünya, Ay, Mars, Jüpiter, Satürn, Uranüs, Neptün ve en sonda Galaksinin kalbi.
Her gezegende kısa bir bilgi anlatılır ve bir görev yapılır: kardan adam yapmak, çiçek dikmek, yanardağı söndürmek, hazine kazmak, baloncuk patlatmak, bayrak dikmek, uzay arabası sürmek, kristallerle müzik yapmak, uzay köpeğini sevmek, düşen yıldızları yakalamak ve roket fırlatmak.
Sonunda havai fişekler seni bekliyor!

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Oyunun tamamı (grafik, karakterler, oyun) |
| `sesler.js` | Türkçe kadın sesiyle kaydedilmiş anlatıcı cümleleri (dosyaya gömülü) |
| `yayinla.command` | Çift tıklayınca değişiklikleri GitHub'a gönderir |
| `manifest.webmanifest`, `sw.js`, `icons/` | iPad'de uygulama gibi açılma, simge ve internetsiz çalışma |
| `robots.txt` | Arama motorlarının siteyi listelememesi için |

Sesler Microsoft Edge'in "tr-TR-EmelNeural" sesiyle üretilmiştir.
