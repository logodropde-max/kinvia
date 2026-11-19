import { UserRoundX, ScanFace, Server, FileSignature } from 'lucide-react'
import { DATENSCHUTZ } from '../content'
import { LogoMark } from './Logo'

const ICONS = [UserRoundX, ScanFace, Server, FileSignature]

export default function Privacy() {
  return (
    <section id="sicherheit" aria-labelledby="datenschutz-titel" className="section">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div data-reveal className="text-center lg:text-left">
          <LogoMark className="mx-auto mb-6 h-10 w-10 lg:mx-0" />
          <h2 id="datenschutz-titel" className="h2">Datenschutz ist eingebaut.</h2>
          <p className="lead mx-auto mt-4 max-w-md lg:mx-0">Gemacht für die Daten von Kindern und Familien.</p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {DATENSCHUTZ.map((t, i) => {
            const Icon = ICONS[i]
            return (
              <li
                key={t}
                data-reveal
                style={{ '--d': `${i * 80}ms` }}
                className="flex items-center gap-4 rounded-3xl bg-mint-soft px-5 py-4 sm:flex-col sm:items-start sm:gap-5 sm:p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-green">
                  <Icon size={21} strokeWidth={1.9} />
                </span>
                <span className="text-[16px] font-semibold leading-snug text-ink sm:text-[17px]">{t}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
