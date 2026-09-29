import { Mail, MapPin } from 'lucide-react'
import { EMAIL, WHATSAPP_DISPLAY, whatsappUrl } from '../config'
import { useLanguage } from '../i18n/LanguageContext'
import { SectionHeading } from './SectionHeading'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading id="contact-title" label={t.contact.label} title={t.contact.title}>
        <p className="mt-4 text-lg leading-relaxed text-muted">{t.contact.sub}</p>
      </SectionHeading>

      <dl className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="flex gap-4">
          <dt className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-g4/50 text-accent dark:bg-g4/10">
            <WhatsAppIcon className="size-5" />
            <span className="sr-only">{t.contact.whatsapp}</span>
          </dt>
          <dd>
            <span className="block font-mono text-xs tracking-[0.12em] text-muted uppercase" aria-hidden>
              {t.contact.whatsapp}
            </span>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="rounded text-lg font-semibold hover:text-accent">
              {WHATSAPP_DISPLAY}
            </a>
          </dd>
        </div>
        <div className="flex gap-4">
          <dt className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-g4/50 text-accent dark:bg-g4/10">
            <Mail className="size-5" strokeWidth={1.75} aria-hidden />
            <span className="sr-only">{t.contact.email}</span>
          </dt>
          <dd>
            <span className="block font-mono text-xs tracking-[0.12em] text-muted uppercase" aria-hidden>
              {t.contact.email}
            </span>
            <a href={`mailto:${EMAIL}`} className="rounded text-lg font-semibold break-all hover:text-accent">
              {EMAIL}
            </a>
          </dd>
        </div>
        <div className="flex gap-4">
          <dt className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-g4/50 text-accent dark:bg-g4/10">
            <MapPin className="size-5" strokeWidth={1.75} aria-hidden />
            <span className="sr-only">{t.contact.area}</span>
          </dt>
          <dd>
            <span className="block font-mono text-xs tracking-[0.12em] text-muted uppercase" aria-hidden>
              {t.contact.area}
            </span>
            <span className="text-lg font-semibold">{t.contact.areaValue}</span>
          </dd>
        </div>
      </dl>
    </section>
  )
}
