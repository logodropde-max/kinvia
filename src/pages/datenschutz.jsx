import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles.css'
import Legal, { Abschnitt, Fehlt } from './Legal'

function Datenschutz() {
  return (
    <Legal
      titel="Datenschutzerklärung"
      hinweis="Mustertext – markierte Stellen ausfüllen und vor der Veröffentlichung rechtlich prüfen lassen."
    >
      <Abschnitt titel="1. Verantwortlicher">
        <p>
          Emre Ergun, Kinvia
          <br />
          Anschrift: <Fehlt />
          <br />
          E-Mail: <Fehlt />
          <br />
          Telefon: <Fehlt />
        </p>
      </Abschnitt>

      <Abschnitt titel="2. Hosting und Aufruf der Website">
        <p>
          Diese Website wird über GitHub Pages bereitgestellt (GitHub B.V., Prins Bernhardplein 200, 1097 JB Amsterdam,
          Niederlande; Muttergesellschaft GitHub, Inc., USA). Beim Aufruf verarbeitet der Anbieter technisch notwendige
          Daten wie IP-Adresse, Zeitpunkt und Browser in Server-Protokollen. Eine Übermittlung in die USA ist dabei
          möglich; sie stützt sich auf das EU-US Data Privacy Framework bzw. Standardvertragsklauseln.
        </p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (sicherer und zuverlässiger Betrieb der Website).</p>
      </Abschnitt>

      <Abschnitt titel="3. Keine Cookies, kein Tracking">
        <p>
          Diese Website setzt keine Cookies und verwendet keine Analyse- oder Werbedienste. Schriftarten werden mit der
          Website ausgeliefert und nicht von fremden Servern geladen.
        </p>
      </Abschnitt>

      <Abschnitt titel="4. Kontaktanfragen">
        <p>
          Das Anfrage-Formular sendet keine Daten an einen Server. Es öffnet Ihr eigenes E-Mail-Programm mit einer
          vorbereiteten Nachricht. Erst wenn Sie diese absenden, erhalten wir Ihre Angaben (Name, Einrichtung, Art der
          Einrichtung, E-Mail, Nachricht) und verarbeiten sie zur Bearbeitung Ihrer Anfrage.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Die Daten werden gelöscht, sobald
          sie nicht mehr erforderlich sind und keine Aufbewahrungspflichten bestehen.
        </p>
      </Abschnitt>

      <Abschnitt titel="5. Ihre Rechte">
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde
          beschweren, zum Beispiel bei der Behörde Ihres Bundeslandes.
        </p>
      </Abschnitt>
    </Legal>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Datenschutz />
  </StrictMode>,
)
