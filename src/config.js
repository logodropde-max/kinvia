// Zentrale Angaben für die ganze Seite: Pakete, Preise, Kontakt.
// Nur hier ändern – alle Abschnitte lesen von hier.

export const KONTAKT = {
  email: 'hallo@kinvia-ki.de', // Postfach bei IONOS anlegen
}

// Dezenter Hinweis im Footer: Kinvia ist ein Projekt von ERGUN.
export const HERKUNFT = {
  name: 'ERGUN.',
  url: 'https://website-ergun.vercel.app',
}

export const PILOT = {
  plaetze: 5,
  monate: 3,
  start: 'Anfang 2027',
}

export const EINRICHTUNG = {
  preis: 290,
  text: 'wir legen Ihre Vorlagen und Ihren Stil an.',
}

export const PAKETE = [
  {
    id: 'start',
    name: 'Kinvia Start',
    preis: 99,
    zusatz: 'bis 10 Mitarbeitende',
    punkte: [
      'Berichte aus Sprache, Notizen oder Fotos in Ihrer Vorlage',
      'Elternbriefe in einfacher Sprache und 10+ Sprachen',
      'Fotos mit automatisch verpixelten Gesichtern',
    ],
  },
  {
    id: 'plus',
    name: 'Kinvia Plus',
    preis: 199,
    zusatz: 'bis 25 Mitarbeitende',
    empfohlen: true,
    punkte: [
      'Alles aus Start',
      'Wissen der Einrichtung (Konzeption, Abläufe, Einarbeitung)',
      'Pflichtdokumente erstellen und aktuell halten',
      'Gestalten & Planen',
    ],
  },
  {
    id: 'traeger',
    name: 'Kinvia Träger',
    preis: null, // auf Anfrage
    zusatz: 'für mehrere Häuser',
    punkte: [
      'Alles aus Plus für mehrere Häuser',
      'Live-Dolmetschen',
      'Förderanträge & Verwendungsnachweise',
      'Gemeinsame Verwaltung',
    ],
  },
]

export const EINRICHTUNGSARTEN = [
  'Kita / Krippe',
  'Offene Kinder- und Jugendarbeit',
  'Kinder- und Jugendhilfe',
  'Familienhilfe',
  'Beratungsstelle',
  'Eingliederungshilfe',
  'Pflege',
  'Träger / Verband',
  'Andere Einrichtung',
]

export const euro = (n) => `${n.toLocaleString('de-DE')} €`
