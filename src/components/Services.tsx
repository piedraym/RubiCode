import { CalendarCheck, Check, Globe, MapPin, RefreshCw, type LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import type { ServiceKey } from '../i18n/translations'
import { SectionHeading } from './SectionHeading'

const ICONS: Record<ServiceKey, LucideIcon> = {
  new: Globe,
  booking: CalendarCheck,
  redesign: RefreshCw,
  google: MapPin,
}

const ORDER: ServiceKey[] = ['new', 'booking', 'redesign', 'google']

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading id="services-title" label={t.services.label} title={t.services.title} />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {ORDER.map((key) => {
          const s = t.services.items[key]
          const Icon = ICONS[key]
          return (
            <li key={key} className="rounded-2xl border border-line bg-card p-6 sm:p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy text-white dark:bg-card-2 dark:text-ink">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted">{s.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>

      <p className="mt-8 border-l-2 border-g2 pl-4 font-medium">{t.services.note}</p>
    </section>
  )
}
