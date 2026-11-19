import { useState } from 'react'
import { FileText, Languages, Palette, BookOpenText, ShieldCheck, HandCoins, ChevronDown, Mic, Keyboard, Camera, ArrowRight } from 'lucide-react'
import { FUNKTIONEN } from '../content'

const ICONS = {
  dokumentieren: FileText,
  uebersetzen: Languages,
  gestalten: Palette,
  wissen: BookOpenText,
  pflicht: ShieldCheck,
  foerderung: HandCoins,
}

// Bento-Raster: 4 Spalten am Desktop, breite Kacheln für Dokumentieren und Förderung
const SPAN = {
  dokumentieren: 'md:col-span-2',
  foerderung: 'md:col-span-2',
}

function Kachel({ f, i }) {
  const [open, setOpen] = useState(false)
  const Icon = ICONS[f.id]
  const breit = Boolean(SPAN[f.id])
  const id = `bsp-${f.id}`

  return (
    <li
      data-reveal
      style={{ '--d': `${(i % 4) * 70}ms` }}
      className={`card group relative flex flex-col p-5 sm:p-7 ${SPAN[f.id] || ''} ${
        f.id === 'dokumentieren' ? 'bg-[linear-gradient(160deg,#fff_40%,var(--color-mint-soft))]' : ''
      }`}
    >
      <div className="flex items-start gap-4 md:flex-col md:gap-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-green">
          <Icon size={21} strokeWidth={1.9} />
        </span>
        <div className="min-w-0 pr-9 md:pr-0">
          <h3 className="text-[21px] leading-tight">{f.titel}</h3>
          <p className="mt-1.5 text-[15.5px] leading-snug text-muted">{f.satz}</p>
        </div>
      </div>

      {/* kleiner Blickfang nur in der breiten Dokumentieren-Kachel */}
      {breit && f.id === 'dokumentieren' && (
        <div aria-hidden="true" className="mt-6 hidden items-center gap-2 text-green md:flex">
          {[Mic, Keyboard, Camera].map((I, k) => (
            <span key={k} className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-[inset_0_0_0_1px_var(--color-line)]">
              <I size={16} />
            </span>
          ))}
          <ArrowRight size={16} className="mx-1 text-leaf" />
          <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-green px-3.5 text-[13px] font-semibold text-white">
            <FileText size={14} /> Fertiger Bericht
          </span>
        </div>
      )}

      <div className="mt-auto md:pt-4">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="absolute right-3 top-3 inline-flex min-h-11 min-w-11 items-center justify-center gap-1 rounded-full text-[14px] font-semibold text-green md:static md:-ml-1 md:min-h-10 md:min-w-0 md:justify-start md:px-1"
        >
          <span className="sr-only md:not-sr-only">Beispiele</span>
          <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
        <div id={id} className="aufklapp" data-open={open}>
          <div>
            <ul className="space-y-1.5 pb-1 pl-[60px] pt-3 text-[15px] text-text md:pl-0 md:pt-2">
              {f.beispiele.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Features() {
  return (
    <section id="funktionen" aria-labelledby="funktionen-titel" className="section">
      <div className="wrap">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <h2 id="funktionen-titel" className="h2">Eine KI für die Arbeit neben der Arbeit.</h2>
          <p className="lead mt-4">Sechs Bereiche, eingerichtet auf Ihre Vorlagen und Ihre Fachsprache.</p>
        </div>
        <ul className="mt-12 grid items-start gap-4 md:mt-16 md:grid-cols-2 md:items-stretch lg:grid-cols-4 lg:gap-5">
          {FUNKTIONEN.map((f, i) => (
            <Kachel key={f.id} f={f} i={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
