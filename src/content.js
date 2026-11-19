// Texte der Abschnitte. Pakete, Preise und Kontakt stehen in config.js.
import { PILOT } from './config'

export const FUNKTIONEN = [
  {
    id: 'dokumentieren',
    titel: 'Dokumentieren',
    satz: 'Aus Stichpunkten, Sprache oder Fotos wird ein fertiger Bericht.',
    beispiele: ['Entwicklungsberichte & Beobachtungen', 'Lerngeschichten & Portfolio', 'Handschriftliche Bögen digitalisieren', 'Sach- und Verlaufsberichte'],
  },
  {
    id: 'uebersetzen',
    titel: 'Übersetzen & Dolmetschen',
    satz: 'Jede Familie versteht – und wird verstanden.',
    beispiele: ['Elternbriefe in 10+ Sprachen', 'Infos in Leichter Sprache', 'Live-Dolmetschen im Elterngespräch', 'Vorlesen in der Muttersprache'],
  },
  {
    id: 'gestalten',
    titel: 'Gestalten & Planen',
    satz: 'Aushänge, Pläne und Protokolle ohne Grafikprogramm.',
    beispiele: ['Plakate, Aushänge & Einladungen', 'Bildkarten für Sprachförderung', 'Projekt- und Wochenpläne', 'Protokolle aus Teamsitzungen'],
  },
  {
    id: 'wissen',
    titel: 'Wissen der Einrichtung',
    satz: 'Antworten aus Ihrer Konzeption – für das ganze Team.',
    beispiele: ['Antworten aus Konzeption & Handbuch', 'Einarbeitung neuer Kolleg:innen', 'Abläufe im Notfall nachschlagen'],
  },
  {
    id: 'pflicht',
    titel: 'Pflichtdokumente',
    satz: 'Konzeption und Schutzkonzept, die aktuell bleiben.',
    beispiele: ['Konzeption erstellen & pflegen', 'Schutzkonzept nach § 45 SGB VIII', 'Qualitätshandbuch', 'Vorbereitung auf Prüfungen'],
  },
  {
    id: 'foerderung',
    titel: 'Förderung',
    satz: 'Passende Programme finden und Anträge vorbereiten.',
    beispiele: ['Förderprogramme finden', 'Anträge vorbereiten', 'Verwendungsnachweise & Sachberichte'],
  },
]

export const SCHRITTE = [
  { titel: 'Eingeben', text: 'Sprechen, tippen oder fotografieren' },
  { titel: 'Kinvia schreibt', text: 'Im Stil Ihrer Einrichtung' },
  { titel: 'Fachkraft gibt frei', text: 'Sie prüfen und entscheiden' },
  { titel: 'Fertig in Ihrer Vorlage', text: 'Als Word oder PDF' },
]

export const DATENSCHUTZ = [
  'Namen werden automatisch ersetzt',
  'Gesichter auf Fotos werden unkenntlich',
  'Verarbeitung auf Servern in Deutschland – ab Start',
  'Vertrag zur Auftragsverarbeitung nach DSGVO',
]

export const GRUENDER = {
  name: 'Emre Ergun',
  initialen: 'EE',
  satz: 'Entwickelt von Emre Ergun – Erzieher, der den Alltag in sozialen Einrichtungen selbst kennt.',
}

export const FAQ = [
  {
    frage: 'Ist das datenschutzkonform?',
    antwort:
      'Kinvia ist für sensible Daten gebaut: Namen werden automatisch ersetzt, Gesichter unkenntlich gemacht, verarbeitet wird zum Start auf Servern in Deutschland. Sie erhalten einen Vertrag zur Auftragsverarbeitung nach DSGVO.',
  },
  {
    frage: 'Wer ist für den Inhalt verantwortlich?',
    antwort:
      'Ihre Fachkraft. Kinvia schreibt einen Entwurf und weist auf Lücken hin – geprüft und freigegeben wird immer von Ihrem Team. Kinvia bewertet keine Menschen und trifft keine Entscheidungen.',
  },
  {
    frage: 'Müssen wir etwas installieren?',
    antwort:
      'Nein. Kinvia läuft im Browser – auf Handy, Tablet oder PC. Ihre Vorlagen und Ihren Stil legen wir bei der Einrichtung für Sie an.',
  },
  {
    frage: 'Welche Sprachen?',
    antwort:
      'Elternbriefe und Übersetzungen in über 10 Sprachen, zum Beispiel Türkisch, Arabisch und Ukrainisch, dazu Leichte Sprache. Live-Dolmetschen gibt es im Paket Träger.',
  },
  {
    frage: 'Wann geht es los?',
    antwort: `Die Pilotphase startet ${PILOT.start}. Die ersten ${PILOT.plaetze} Einrichtungen testen Kinvia ${PILOT.monate} Monate kostenlos.`,
  },
]
