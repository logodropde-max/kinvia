import { ArrowRight } from 'lucide-react'
import ReportDemo from './ReportDemo'

const BEREICHE = ['Kita', 'Jugendarbeit', 'Jugendhilfe', 'Familienhilfe', 'Beratung', 'Eingliederungshilfe', 'Pflege', 'Träger']

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-titel" className="relative pb-16 pt-8 sm:pt-14 md:pb-24 lg:pt-20">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
        <div data-reveal className="text-center lg:text-left">
          <h1 id="hero-titel" className="text-[clamp(42px,6.6vw,76px)] leading-[1.02] tracking-[-0.025em]">
            Die KI, die soziale Arbeit <em className="font-[450] text-green">versteht.</em>
          </h1>
          <p className="lead mx-auto mt-5 max-w-md lg:mx-0">Weniger Schreibtisch, mehr Zeit für Menschen.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#kontakt" className="btn btn-primary">
              Pilot anfragen <ArrowRight size={18} />
            </a>
            <a href="#ablauf" className="btn btn-ghost">
              So funktioniert’s
            </a>
          </div>
        </div>

        <div data-reveal style={{ '--d': '120ms' }}>
          <ReportDemo />
        </div>
      </div>

      {/* Einsatzbereiche als Chips in einer Zeile */}
      <div data-reveal style={{ '--d': '200ms' }} className="wrap mt-14 md:mt-20">
        <ul
          aria-label="Einsatzbereiche"
          className="no-scrollbar fade-edges -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:justify-center lg:overflow-visible lg:px-0 lg:[mask-image:none]"
        >
          {BEREICHE.map((b) => (
            <li key={b} className="shrink-0 rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-muted shadow-[inset_0_0_0_1px_var(--color-line)]">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
