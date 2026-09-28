import { Code, GraduationCap, Landmark, Languages } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { LogoMark } from './Logo'
import { SectionHeading } from './SectionHeading'

const FACT_ICONS = [Code, Landmark, GraduationCap, Languages]

export function About() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="on-dark bg-navy text-offwhite dark:border-y dark:border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div>
          <SectionHeading id="about-title" label={t.about.label} title={t.about.title} dark />
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-[#C9CDD9]">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <LogoMark className="mt-10 h-10 w-auto opacity-90" />
        </div>

        <ul className="grid content-start gap-4 sm:grid-cols-2">
          {t.about.facts.map((f, i) => {
            const Icon = FACT_ICONS[i]
            return (
              <li key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <Icon className="size-5 text-g3" strokeWidth={1.75} aria-hidden />
                <p className="mt-4 font-display text-lg font-semibold">{f.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#C9CDD9]">{f.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
