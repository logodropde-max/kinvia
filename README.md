# Kinvia – Website v12

Vite + React + Tailwind. Eine Startseite mit genau 7 Abschnitten, dazu Impressum und Datenschutz als eigene Seiten.

## Wo was steht
- `src/config.js` – Pakete, Preise, Einrichtungsgebühr, Pilot, Kontakt-Adresse (nur hier ändern)
- `src/content.js` – Texte: Funktionen mit Beispielen, Schritte, Datenschutz-Punkte, Gründer, FAQ
- `src/components/` – je Abschnitt eine Datei (Hero, Features, Steps, Privacy, Pricing, FounderFaq, Contact)
- `src/pages/` – Impressum und Datenschutz (Platzhalter `[BITTE AUSFÜLLEN]`)
- `public/` – Favicon

## Lokal
```
npm install
npm run dev
```

## Veröffentlichen (GitHub Pages + eigene Domain kinvia-ki.de)
1. Inhalt dieses Ordners als Wurzel ins Repository `logodropde-max/kinvia` (öffentlich) legen und auf `main` pushen.
2. Im Repository: Settings → Pages → Source: „GitHub Actions“, dann unter „Custom domain“ `kinvia-ki.de` eintragen und „Enforce HTTPS“ anhaken, sobald es angeboten wird.
3. Bei IONOS → Domains → kinvia-ki.de → DNS:
   - A-Einträge für `@`: 185.199.108.153 · 185.199.109.153 · 185.199.110.153 · 185.199.111.153
   - AAAA-Einträge für `@`: 2606:50c0:8000::153 · 2606:50c0:8001::153 · 2606:50c0:8002::153 · 2606:50c0:8003::153
   - CNAME für `www`: logodropde-max.github.io
   - Vorhandene A/AAAA-Einträge von IONOS für `@` und `www` vorher löschen. MX-Einträge (E-Mail) nicht anfassen.
4. Postfach `hallo@kinvia-ki.de` bei IONOS anlegen (steht in `src/config.js`).

Ohne Domain: im Workflow `BASE_PATH: /kinvia/` setzen → https://logodropde-max.github.io/kinvia/
