import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Steps from './components/Steps'
import Privacy from './components/Privacy'
import Pricing from './components/Pricing'
import FounderFaq from './components/FounderFaq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { initReveal } from './useInView'

export default function App() {
  const [paket, setPaket] = useState(null)
  useEffect(() => initReveal(), [])

  return (
    <>
      <a href="#inhalt" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="inhalt">
        {/* Genau 7 Abschnitte */}
        <Hero />
        <Features />
        <Steps />
        <Privacy />
        <Pricing onWaehlen={setPaket} />
        <FounderFaq />
        <Contact paket={paket} />
      </main>
      <Footer />
    </>
  )
}
