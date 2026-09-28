import { useLanguage } from '../i18n/LanguageContext'
import { SectionHeading } from './SectionHeading'

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" aria-labelledby="process-title" className="border-y border-line bg-card-2/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading id="process-title" label={t.process.label} title={t.process.title} />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {t.process.steps.map((s, i) => (
            <li key={s.title} className="relative border-t-2 border-g2 pt-5">
              <span className="font-mono text-sm font-medium text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
