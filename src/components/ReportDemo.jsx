import { Mic, Sparkles, CircleAlert, Check, FileText, UserRoundX } from 'lucide-react'
import useInView from '../useInView'

// Schlichter UI-Ausschnitt: Stichpunkte werden zu einem fertigen Bericht.
const NOTIZEN = ['Mia baut Turm, 12 Steine, zählt laut', 'hilft Ben beim Aufräumen', 'spricht in ganzen Sätzen']

export default function ReportDemo() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`demo relative mx-auto w-full max-w-[460px] ${inView ? 'is-in' : ''}`}
      role="img"
      aria-label="Beispiel: Aus drei Stichpunkten zu einem Kind entsteht ein Bericht-Entwurf. Der Name wird automatisch ersetzt und Kinvia weist auf eine fehlende Beobachtung hin."
    >
      {/* weicher Blätter-Schimmer im Hintergrund */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[48px] bg-[radial-gradient(60%_60%_at_70%_20%,var(--color-mint)_0%,transparent_70%)]" />

      <div className="card overflow-hidden" aria-hidden="true">
        {/* Eingabe */}
        <div className="bg-cream/70 px-5 pb-5 pt-4 sm:px-6">
          <div className="flex items-center gap-2 text-[13px] font-semibold text-muted">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-green">
              <Mic size={13} />
            </span>
            Ihre Stichpunkte
          </div>
          <ul className="mt-3 space-y-1.5">
            {NOTIZEN.map((n, i) => (
              <li key={n} data-step style={{ '--t': `${150 + i * 220}ms` }} className="flex items-baseline gap-2 text-[15px] text-text">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                {n}
              </li>
            ))}
          </ul>
        </div>

        {/* Übergang */}
        <div className="relative flex justify-center">
          <span
            data-step
            style={{ '--t': '900ms' }}
            className="pulse -my-3.5 inline-flex items-center gap-1.5 rounded-full bg-green px-3.5 py-1.5 text-[12.5px] font-semibold text-white"
          >
            <Sparkles size={13} /> Kinvia schreibt
          </span>
        </div>

        {/* Ergebnis */}
        <div className="px-5 pb-5 pt-6 sm:px-6">
          <div data-step style={{ '--t': '1250ms' }} className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-serif text-[17px] text-ink">
              <FileText size={16} className="text-green" /> Entwicklungsbericht
            </span>
            <span className="rounded-full bg-mint px-2.5 py-0.5 text-[11.5px] font-semibold text-green">Ihre Vorlage</span>
          </div>
          <p data-step style={{ '--t': '1500ms' }} className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-2.5 py-1 text-[12px] font-semibold text-green">
            <UserRoundX size={13} /> Name ersetzt: Mia → Kind A
          </p>
          <p data-step style={{ '--t': '1650ms' }} className="mt-2.5 text-[14.5px] leading-relaxed text-text">
            <span className="rounded-md bg-mint px-1.5 py-0.5 font-semibold text-green">Kind&nbsp;A</span> zeigt großes
            Interesse an Mengen: Beim Bauen zählt es zwölf Steine sicher und laut mit. Von sich aus unterstützt es andere
            Kinder, etwa beim Aufräumen.
          </p>
          <div
            data-step
            style={{ '--t': '1800ms' }}
            className="mt-4 flex items-start gap-2 rounded-2xl bg-sun-soft px-3.5 py-2.5 text-[13.5px] text-[#7a5a17]"
          >
            <CircleAlert size={16} className="mt-0.5 shrink-0" />
            Hinweis: Zur Motorik fehlt noch eine Beobachtung.
          </div>
          <div data-step style={{ '--t': '2100ms' }} className="mt-4 flex items-center justify-between gap-3">
            <span className="text-[12.5px] text-muted">Word · PDF</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green px-4 py-2 text-[13.5px] font-semibold text-white">
              <Check size={15} /> Prüfen &amp; freigeben
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
