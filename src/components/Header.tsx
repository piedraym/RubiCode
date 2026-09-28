import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'
import { Logo } from './Logo'

const LANGS: Lang[] = ['en', 'es']

function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()
  return (
    <div role="group" aria-label={t.nav.language} className="flex rounded-full border border-line p-0.5 font-mono text-xs">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          aria-label={l === 'es' ? 'Español' : 'English'}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 font-medium uppercase transition-colors ${
            lang === l ? 'bg-navy text-offwhite dark:bg-g4 dark:text-navy' : 'text-muted hover:text-ink'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#process', label: t.nav.process },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="rounded-md" aria-label="RubikCode">
          <Logo animated />
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Main" hidden={!open} className="border-t border-line md:hidden">
        <ul className="mx-auto max-w-6xl px-4 py-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 font-medium text-ink hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
