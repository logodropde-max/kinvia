import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const BASE = import.meta.env.BASE_URL
const LINKS = [
  { href: '#funktionen', label: 'Funktionen' },
  { href: '#preise', label: 'Preise' },
  { href: '#faq', label: 'FAQ' },
]

// onStart = true auf der Startseite (Sprungmarken), sonst Links zurück zur Startseite
export default function Header({ onStart = true }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const to = (hash) => (onStart ? hash : `${BASE}${hash}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? 'bg-paper/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="wrap flex h-[68px] items-center justify-between gap-6">
        <a href={onStart ? '#top' : BASE} className="shrink-0" aria-label="Kinvia – zur Startseite">
          <Logo className="h-7 w-auto md:h-8" />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Hauptmenü">
          {LINKS.map((l) => (
            <a key={l.href} href={to(l.href)} className="text-[15px] font-semibold text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={to('#kontakt')} className="btn btn-primary hidden min-h-11 px-5 text-[15px] sm:inline-flex">
            Pilot anfragen
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobil-menue"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div id="mobil-menue" className="aufklapp md:hidden" data-open={open}>
        <div>
          <nav className="wrap flex flex-col pb-6 pt-1" aria-label="Mobiles Menü">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={to(l.href)}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-4 font-serif text-[22px] text-ink"
              >
                {l.label}
              </a>
            ))}
            <a href={to('#kontakt')} onClick={() => setOpen(false)} className="btn btn-primary mt-6 w-full">
              Pilot anfragen
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
