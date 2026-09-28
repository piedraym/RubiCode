import { ArrowRight, Calculator, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { LogoMark } from './Logo'
import { SectionHeading } from './SectionHeading'

const PROJECT_ICONS = [MessageCircle, Calculator]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading id="projects-title" label={t.projects.label} title={t.projects.title} />

      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {t.projects.items.map((p, i) => {
          const Icon = PROJECT_ICONS[i]
          return (
            <li key={p.name} className="flex flex-col rounded-2xl border border-line bg-card p-6">
              <Icon className="size-6 text-accent" strokeWidth={1.75} aria-hidden />
              <h3 className="mt-5 text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{p.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                {p.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-card-2 px-2 py-1 font-mono text-xs text-ink">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          )
        })}

        <li className="flex flex-col rounded-2xl border-2 border-dashed border-g2 p-6">
          <LogoMark className="h-6 w-auto self-start" />
          <h3 className="mt-5 text-xl font-semibold">{t.projects.next.title}</h3>
          <p className="mt-2 flex-1 leading-relaxed text-muted">{t.projects.next.text}</p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center gap-2 self-start rounded-lg bg-btn px-4 py-2.5 font-semibold text-white transition-colors hover:bg-btn-hover"
          >
            {t.projects.next.cta}
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </li>
      </ul>
    </section>
  )
}
