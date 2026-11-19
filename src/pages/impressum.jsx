import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles.css'
import Legal, { Abschnitt, Fehlt } from './Legal'

function Impressum() {
  return (
    <Legal titel="Impressum" hinweis="Vor der Veröffentlichung alle markierten Stellen ausfüllen.">
      <Abschnitt titel="Angaben gemäß § 5 DDG">
        <p>
          Kinvia
          <br />
          Emre Ergun
          <br />
          Anschrift: <Fehlt />
        </p>
      </Abschnitt>
      <Abschnitt titel="Kontakt">
        <p>
          E-Mail: <Fehlt />
          <br />
          Telefon: <Fehlt />
        </p>
      </Abschnitt>
      <Abschnitt titel="Umsatzsteuer">
        <p>
          <Fehlt>BITTE AUSFÜLLEN: USt-IdNr. oder Hinweis nach § 19 UStG</Fehlt>
        </p>
      </Abschnitt>
      <Abschnitt titel="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>Emre Ergun, Anschrift wie oben</p>
      </Abschnitt>
      <Abschnitt titel="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </Abschnitt>
    </Legal>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Impressum />
  </StrictMode>,
)
