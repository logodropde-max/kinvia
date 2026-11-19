import { useEffect, useRef, useState } from 'react'
import { Check, Gift, ArrowRight } from 'lucide-react'
import { PAKETE, EINRICHTUNG, PILOT, euro } from '../config'

function Karte({ p, onWaehlen }) {
  const hervor = p.empfohlen
  return (
    <li
      data-paket={p.id}
      className={`relative flex w-[84%] shrink-0 snap-center flex-col rounded-[28px] p-7 sm:w-[60%] md:w-auto md:shrink md:p-8 ${
        hervor ? 'bg-ink text-white shadow-lift' : 'card'
      }`}
    >
      {hervor && (
        <span className="absolute right-6 top-6 rounded-full bg-leaf px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-ink">
          Empfohlen
        </span>
      )}
      <h3 className={`text-[22px] ${hervor ? 'text-white' : ''}`}>{p.name}</h3>
      <p className={`mt-1 text-[14.5px] ${hervor ? 'text-white/70' : 'text-muted'}`}>{p.zusatz}</p>

      <p className="mt-6 flex items-baseline gap-1.5">
        {p.preis != null ? (
          <>
            <span className={`font-serif text-[46px] leading-none tracking-tight ${hervor ? 'text-white' : 'text-ink'}`}>{euro(p.preis)}</span>
            <span className={hervor ? 'text-white/70' : 'text-muted'}>/ Monat</span>
          </>
        ) : (
          <span className="font-serif text-[34px] leading-[46px] text-ink">Auf Anfrage</span>
        )}
      </p>

      <ul className="mt-7 space-y-3 text-[15.5px] leading-snug">
        {p.punkte.map((pt) => (
          <li key={pt} className="flex gap-3">
            <Check size={18} className={`mt-0.5 shrink-0 ${hervor ? 'text-leaf' : 'text-green'}`} strokeWidth={2.4} />
            <span className={hervor ? 'text-white/90' : ''}>{pt}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <a
          href="#kontakt"
          onClick={() => onWaehlen(p.id)}
          className={`btn w-full ${hervor ? 'bg-leaf text-ink hover:bg-[#a3cda4]' : 'btn-ghost'}`}
        >
          {p.preis != null ? `${p.name.replace('Kinvia ', '')} anfragen` : 'Angebot anfragen'}
        </a>
      </div>
    </li>
  )
}

export default function Pricing({ onWaehlen }) {
  const listRef = useRef(null)
  const [aktiv, setAktiv] = useState(1)

  // Am Handy: Karussell startet bei der empfohlenen Karte
  useEffect(() => {
    const ul = listRef.current
    if (!ul || window.matchMedia('(min-width: 768px)').matches) return
    const plus = ul.querySelector('[data-paket="plus"]')
    if (plus) ul.scrollLeft = plus.offsetLeft - (ul.clientWidth - plus.clientWidth) / 2
    const onScroll = () => {
      const mitte = ul.scrollLeft + ul.clientWidth / 2
      let best = 0
      ;[...ul.children].forEach((c, i) => {
        const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - mitte)
        const bd = Math.abs(ul.children[best].offsetLeft + ul.children[best].clientWidth / 2 - mitte)
        if (d < bd) best = i
      })
      setAktiv(best)
    }
    ul.addEventListener('scroll', onScroll, { passive: true })
    return () => ul.removeEventListener('scroll', onScroll)
  }, [])

  const zu = (i) => {
    const ul = listRef.current
    const c = ul?.children[i]
    if (c) ul.scrollTo({ left: c.offsetLeft - (ul.clientWidth - c.clientWidth) / 2, behavior: 'smooth' })
  }

  return (
    <section id="preise" aria-labelledby="preise-titel" className="section bg-cream/60">
      <div className="wrap">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <h2 id="preise-titel" className="h2">Klare Preise, passend zur Teamgröße.</h2>
          <p className="lead mt-4">Ein fester Betrag pro Einrichtung und Monat.</p>
        </div>

        <div data-reveal style={{ '--d': '100ms' }}>
          <ul
            ref={listRef}
            className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-5 pb-2 pt-2 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:items-stretch md:gap-5 md:overflow-visible md:px-0 lg:gap-6"
          >
            {PAKETE.map((p) => (
              <Karte key={p.id} p={p} onWaehlen={onWaehlen} />
            ))}
          </ul>
          {/* Punkte fürs Karussell am Handy */}
          <div className="mt-5 flex justify-center gap-2 md:hidden">
            {PAKETE.map((p, i) => (
              <button
                key={p.id}
                type="button"
                aria-label={`${p.name} anzeigen`}
                onClick={() => zu(i)}
                className="grid h-8 w-8 place-items-center"
              >
                <span className={`block h-2 rounded-full transition-all duration-300 ${aktiv === i ? 'w-6 bg-green' : 'w-2 bg-line'}`} />
              </button>
            ))}
          </div>
        </div>

        <p data-reveal className="mt-8 text-center text-[15.5px] hyphens-manual text-muted md:mt-10">
          Einmalige Einrichtung <strong className="font-bold text-ink">{euro(EINRICHTUNG.preis)}</strong> – {EINRICHTUNG.text}
        </p>

        {/* Pilot-Band */}
        <div
          data-reveal
          className="mt-10 flex flex-col items-center gap-5 rounded-[28px] bg-green px-6 py-7 text-center text-white sm:px-10 md:mt-14 md:flex-row md:justify-between md:text-left"
        >
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/12 text-leaf">
              <Gift size={22} />
            </span>
            <p className="hyphens-manual text-[17px] leading-snug sm:text-[18px]">
              <strong className="font-serif text-[21px] font-medium">Pilot-Einrichtung werden:</strong>{' '}
              <span className="text-white/85">
                die ersten {PILOT.plaetze} Einrichtungen testen {PILOT.monate} Monate kostenlos.
              </span>
            </p>
          </div>
          <a href="#kontakt" onClick={() => onWaehlen(null)} className="btn shrink-0 bg-white text-green hover:bg-mint">
            Platz anfragen <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
