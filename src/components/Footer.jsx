import Logo from './Logo'
import { HERKUNFT } from '../config'

const BASE = import.meta.env.BASE_URL

export default function Footer() {
  return (
    <footer className="bg-paper py-12">
      <div className="wrap flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
          <a href={BASE} aria-label="Kinvia – zur Startseite">
            <Logo className="h-7 w-auto" />
          </a>
          <p className="text-[14.5px] text-muted">
            Die KI für die soziale Arbeit.{' '}
            <span className="whitespace-nowrap text-muted/80">
              Ein Projekt von{' '}
              <a href={HERKUNFT.url} className="font-semibold text-ink/80 underline decoration-line underline-offset-4 hover:text-ink">
                {HERKUNFT.name}
              </a>
            </span>
          </p>
        </div>
        <nav aria-label="Rechtliches" className="flex items-center gap-6 text-[14.5px] font-semibold text-muted">
          <a href={`${BASE}impressum/`} className="hover:text-ink">Impressum</a>
          <a href={`${BASE}datenschutz/`} className="hover:text-ink">Datenschutz</a>
          <span className="font-normal">© {new Date().getFullYear()} Kinvia</span>
        </nav>
      </div>
    </footer>
  )
}
