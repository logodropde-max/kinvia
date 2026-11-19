import { Mic, Sparkles, UserCheck, FileCheck2 } from 'lucide-react'
import { SCHRITTE } from '../content'

const ICONS = [Mic, Sparkles, UserCheck, FileCheck2]

export default function Steps() {
  return (
    <section id="ablauf" aria-labelledby="ablauf-titel" className="section bg-cream/60">
      <div className="wrap">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <h2 id="ablauf-titel" className="h2">So funktioniert’s</h2>
          <p className="lead mt-4">Ohne Installation – im Browser auf Handy, Tablet oder PC.</p>
        </div>

        <ol className="relative mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-16 lg:grid-cols-4 lg:gap-6">
          {/* zarte Verbindungslinie am Desktop */}
          <span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[linear-gradient(90deg,transparent,var(--color-leaf),transparent)] lg:block" />
          {SCHRITTE.map((s, i) => {
            const Icon = ICONS[i]
            const frei = i === 2
            return (
              <li key={s.titel} data-reveal style={{ '--d': `${i * 110}ms` }} className="relative flex flex-col items-center text-center">
                <span
                  className={`relative grid h-16 w-16 place-items-center rounded-full ${
                    frei ? 'bg-green text-white shadow-[0_10px_24px_-10px_rgb(47_107_79/.7)]' : 'bg-white text-green shadow-card'
                  }`}
                >
                  <Icon size={24} strokeWidth={1.8} />
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-ink text-[12px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-[19px] leading-tight sm:text-[21px]">{s.titel}</h3>
                <p className="mt-1.5 max-w-[16ch] text-[14.5px] leading-snug text-muted sm:text-[15px]">{s.text}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
