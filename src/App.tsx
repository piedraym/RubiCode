import { useLanguage } from './i18n/LanguageContext'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { FloatingWhatsApp, Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'

export default function App() {
  const { t } = useLanguage()
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-btn px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t.skipToContent}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
