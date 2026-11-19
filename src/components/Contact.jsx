import { useEffect, useState } from 'react'
import { Send, Check } from 'lucide-react'
import { KONTAKT, PAKETE, EINRICHTUNGSARTEN } from '../config'

const BASE = import.meta.env.BASE_URL
const feld =
  'w-full rounded-2xl bg-paper px-4 py-3 text-[16px] text-ink shadow-[inset_0_0_0_1px_var(--color-line)] outline-none transition-shadow placeholder:text-muted/60 focus:shadow-[inset_0_0_0_2px_var(--color-green)]'
const label = 'mb-1.5 block text-[14px] font-semibold text-ink'

export default function Contact({ paket }) {
  const [nachricht, setNachricht] = useState('')
  const [gesendet, setGesendet] = useState(false)

  // Gewähltes Paket aus den Preiskarten in die Nachricht übernehmen
  useEffect(() => {
    const p = PAKETE.find((x) => x.id === paket)
    if (p) setNachricht(`Wir interessieren uns für ${p.name}.`)
  }, [paket])

  const senden = (e) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const betreff = `Pilot-Anfrage: ${d.get('einrichtung')}`
    const text = [
      `Name: ${d.get('name')}`,
      `Einrichtung: ${d.get('einrichtung')}`,
      `Art: ${d.get('art')}`,
      `E-Mail: ${d.get('email')}`,
      '',
      d.get('nachricht') || '',
    ].join('\n')
    window.location.href = `mailto:${KONTAKT.email}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(text)}`
    setGesendet(true)
  }

  return (
    <section id="kontakt" aria-labelledby="kontakt-titel" className="section bg-cream/60">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div data-reveal className="text-center lg:pt-6 lg:text-left">
          <h2 id="kontakt-titel" className="h2">Pilot anfragen</h2>
          <p className="lead mx-auto mt-4 max-w-md lg:mx-0">Schreiben Sie uns – wir melden uns persönlich.</p>
          <p className="mt-6 text-[15px] text-muted">
            Oder direkt an{' '}
            <a href={`mailto:${KONTAKT.email}`} className="font-semibold text-green underline decoration-leaf underline-offset-4">
              {KONTAKT.email}
            </a>
          </p>
        </div>

        <div data-reveal style={{ '--d': '100ms' }} className="card p-6 sm:p-8">
          {gesendet ? (
            <div className="flex flex-col items-center py-10 text-center" role="status">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-mint text-green">
                <Check size={26} />
              </span>
              <h3 className="mt-5 text-[24px]">Fast geschafft</h3>
              <p className="mt-2 max-w-sm text-muted">Ihr E-Mail-Programm hat sich geöffnet. Senden Sie die Nachricht dort ab.</p>
              <button type="button" onClick={() => setGesendet(false)} className="btn btn-ghost mt-6">
                Zurück zum Formular
              </button>
            </div>
          ) : (
            <form onSubmit={senden} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="f-name" className={label}>Name</label>
                <input id="f-name" name="name" required autoComplete="name" className={feld} />
              </div>
              <div>
                <label htmlFor="f-einrichtung" className={label}>Einrichtung</label>
                <input id="f-einrichtung" name="einrichtung" required autoComplete="organization" className={feld} />
              </div>
              <div>
                <label htmlFor="f-art" className={label}>Art</label>
                <select id="f-art" name="art" required defaultValue="" className={`${feld} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%232F6B4F' stroke-width='2' stroke-linecap='round' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:16px] bg-[right_16px_center] bg-no-repeat pr-10`}>
                  <option value="" disabled>Bitte wählen</option>
                  {EINRICHTUNGSARTEN.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="f-email" className={label}>E-Mail</label>
                <input id="f-email" name="email" type="email" required autoComplete="email" className={feld} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="f-nachricht" className={label}>
                  Nachricht <span className="font-normal text-muted">(optional)</span>
                </label>
                <textarea
                  id="f-nachricht"
                  name="nachricht"
                  rows={4}
                  value={nachricht}
                  onChange={(e) => setNachricht(e.target.value)}
                  className={`${feld} resize-y`}
                />
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="order-2 text-[13px] leading-snug text-muted sm:order-1">
                  Öffnet Ihr E-Mail-Programm. Mehr in der{' '}
                  <a href={`${BASE}datenschutz/`} className="underline underline-offset-2">Datenschutzerklärung</a>.
                </p>
                <button type="submit" className="btn btn-primary order-1 sm:order-2">
                  Anfrage senden <Send size={17} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
