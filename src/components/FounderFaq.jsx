import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQ, GRUENDER } from '../content'

function Frage({ f, i, open, onToggle }) {
  const id = `faq-${i}`
  return (
    <li className="border-b border-line last:border-b-0">
      <h3 className="font-sans text-[17px] font-semibold tracking-normal text-ink">
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex min-h-[64px] w-full items-center justify-between gap-6 py-4 text-left"
        >
          {f.frage}
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-[transform,background-color] duration-300 ${
              open ? 'rotate-45 bg-green text-white' : 'bg-mint text-green'
            }`}
          >
            <Plus size={17} />
          </span>
        </button>
      </h3>
      <div id={id} role="region" aria-labelledby={`${id}-btn`} className="aufklapp" data-open={open}>
        <div>
          <p className="max-w-prose pb-5 text-[15.5px] sm:pr-12 leading-relaxed text-muted">{f.antwort}</p>
        </div>
      </div>
    </li>
  )
}

export default function FounderFaq() {
  const [offen, setOffen] = useState(0)
  return (
    <section id="faq" aria-labelledby="faq-titel" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div data-reveal>
          <h2 id="faq-titel" className="h2 text-center lg:text-left">Häufige Fragen</h2>
          <figure className="mt-8 flex items-center gap-4 rounded-3xl bg-cream/70 p-5 sm:p-6 lg:mt-10">
            <span
              aria-hidden="true"
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-green font-serif text-[20px] text-white"
            >
              {GRUENDER.initialen}
            </span>
            <figcaption className="text-[15.5px] leading-snug text-text">{GRUENDER.satz}</figcaption>
          </figure>
        </div>

        <ul data-reveal style={{ '--d': '100ms' }} className="card px-5 sm:px-8">
          {FAQ.map((f, i) => (
            <Frage key={f.frage} f={f} i={i} open={offen === i} onToggle={() => setOffen(offen === i ? -1 : i)} />
          ))}
        </ul>
      </div>
    </section>
  )
}
