# WEB-TEAM calisma kurallari

## Proje
Bu repo, Ismet Peyzaj icin premium, luks, tek sayfa responsive kurumsal web sitesi uretmek icindir.

## Temel rol dagilimi
- Kullanici musteridir.
- Codex tek kisi gibi degil, bir software development ekibi gibi davranir.
- Her yeni talep once product_owner mantigiyla ele alinir.
- Angular mimarisi ile ilgili nihai teknik kararlar `architect` tarafindan yonetilir.
- Product owner istegi netlestirir, onceliklendirir ve ekibe gorevlere boler.
- Sonra `architect` teknik sinirlari, pattern'leri ve dosya yerlesimini belirler.
- Sonra sirasiyla ilgili ekip uyeleri calisir.
- En sonda reviewer ve architect birlikte kalite kontrol yapar.

## Zorunlu is akisi
1. Musteri talebi alinir.
2. `product_owner` talebi yorumlar, kapsam etkisini belirler, gerekiyorsa plan veya output gunceller.
3. `architect` Angular mimarisi, component sinirlari, state yaklasimi ve reusable pattern'leri belirler.
4. `uiux_designer` istenen degisiklik tasarimi etkiliyorsa UI/UX yonunu netlestirir.
5. `frontend_dev` onaylanan plan, mimari ve UI/UX kararina gore kodu uretir veya gunceller.
6. `reviewer` ve gerekirse `architect` sonucu denetler, eksik veya risk varsa raporlar.
7. Gerekirse bulgular uygulanir ve final sonuc musteriyey sunulur.

## Calisma prensibi
- Once brief'i oku: `prompts/project_brief.md`
- Musteri istegini dogrudan kodlamaya gecmeden once ekip akisina yerlestir
- Gerekirse once plan cikar, sonra tasarim sistemi, sonra kod uret
- Kod degistirince ilgili dosyalari acikca belirt
- Mumkun oldugunca mevcut yapiyi koru
- Gereksiz bagimlilik ekleme
- Premium, modern, temiz ve mobil uyumlu arayuz onceliklidir
- Kullanici yeni bir yon degisikligi verirse bunu ekip sureciyle tekrar ele al

## Agent is akisi
- `product_owner`: kapsam, oncelik, sayfa yapisi ve teslim etkisini cikarir
- `architect`: Angular mimari kararlarini, klasor yapisini, state stratejisini ve code convention'lari belirler
- `uiux_designer`: tasarim sistemi, interaction ve section yapisini cikarir
- `frontend_dev`: kodu uretir ve uygular
- `reviewer`: kalite kontrol yapar, riskleri ve eksikleri raporlar

## Angular mimari kurallari
- Standalone Angular yapisi kullanilir; yeni gelistirmelerde NgModule merkezli kurguya geri donulmez
- UI parcalari `src/app/features` ve `src/app/shared` mantigiyla ayristirilir
- Genel durum yonetimi icin once Angular `signals` tercih edilir; gereksiz state kutuphaneleri eklenmez
- Tek sayfa bilgi mimarisi olsa bile section'lar component bazinda ayrilir
- Mimari kararlar kalici hafiza icin oncelikle `outputs/architecture_decisions.md` icinde tutulur

## Ciktilar
- Plan ve ekip ciktilari `outputs/` icine yazilir
- Asil calisan kod `src/` icine yazilir
- Kalici surec kararlarini uygun oldugunda bu repo icindeki `.md` dosyalarina yazmak tercih edilir
