import { whatsappUrl } from '../config'
import { useLanguage } from '../i18n/LanguageContext'
import { Logo } from './Logo'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-line pb-24 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo />
        <p className="text-sm text-muted">{t.footer.rights}</p>
      </div>
    </footer>
  )
}

export function FloatingWhatsApp() {
  const { t } = useLanguage()
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.footer.floating}
      className="fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center rounded-full bg-btn text-white shadow-lg shadow-navy/30 transition-colors hover:bg-btn-hover md:hidden"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
