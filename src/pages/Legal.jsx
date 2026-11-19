import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Platzhalter deutlich markieren – keine erfundenen Daten
export function Fehlt({ children = 'BITTE AUSFÜLLEN' }) {
  return <mark className="rounded-md bg-sun-soft px-1.5 py-0.5 font-semibold text-[#7a5a17]">[{children}]</mark>
}

export function Abschnitt({ titel, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-[22px]">{titel}</h2>
      <div className="mt-3 space-y-3 text-[16px] leading-relaxed text-text">{children}</div>
    </section>
  )
}

export default function Legal({ titel, hinweis, children }) {
  useEffect(() => {
    document.title = `${titel} – Kinvia`
  }, [titel])
  return (
    <>
      <Header onStart={false} />
      <main id="inhalt" className="wrap max-w-[760px] pb-24 pt-10 md:pt-16">
        <h1 className="text-[clamp(36px,5vw,52px)] leading-tight">{titel}</h1>
        {hinweis && <p className="mt-5 rounded-2xl bg-sun-soft px-4 py-3 text-[14.5px] text-[#7a5a17]">{hinweis}</p>}
        {children}
      </main>
      <Footer />
    </>
  )
}
