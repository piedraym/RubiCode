import { useEffect, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

// Photos from Unsplash (free under the Unsplash License), stored in public/hero.
const PHOTOS = [
  { src: 'salon', credit: 'Adam Winger', href: 'https://unsplash.com/photos/FkAZqQJTbXM', position: 'center 35%' },
  { src: 'barber', credit: 'Mitchell Orr', href: 'https://unsplash.com/photos/pL6-dYFSGWI', position: 'center 40%' },
  { src: 'dental', credit: 'Kari Bjorn Photography', href: 'https://unsplash.com/photos/Fdku_oMrDvk', position: 'center 60%' },
]

const INTERVAL_MS = 6000

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function Hero() {
  const { t } = useLanguage()
  const c = t.hero.carousel
  const [before, accent, after] = t.hero.headline

  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(() => !prefersReducedMotion())
  const [held, setHeld] = useState(false) // paused while hovered or focused

  const count = PHOTOS.length
  const go = (i: number) => setIndex((i + count) % count)

  useEffect(() => {
    if (!playing || held) return
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL_MS)
    return () => window.clearTimeout(id)
  }, [playing, held, index, count])

  const photo = PHOTOS[index]

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="on-dark relative isolate overflow-hidden bg-navy text-offwhite"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHeld(false)}
    >
      {/* Slides */}
      <div aria-roledescription="carousel" aria-label={c.label} className="absolute inset-0 -z-10">
        <div aria-live={playing && !held ? 'off' : 'polite'}>
          {PHOTOS.map((p, i) => (
            <div
              key={p.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${c.slide} ${i + 1} ${c.of} ${count}: ${c.slides[i].label}`}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out motion-reduce:transition-none ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={`/hero/${p.src}.jpg`}
                srcSet={`/hero/${p.src}-960.jpg 960w, /hero/${p.src}.jpg 1920w`}
                sizes="100vw"
                alt={c.slides[i].alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding="async"
                className="size-full object-cover"
                style={{ objectPosition: p.position }}
              />
            </div>
          ))}
        </div>
        {/* Overlays keep the text above AA contrast on any photo. */}
        <div className="absolute inset-0 bg-navy/70 lg:bg-transparent lg:bg-linear-to-r lg:from-navy/95 lg:via-navy/75 lg:to-navy/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-navy/80 to-transparent" />
      </div>

      {/* Copy */}
      <div className="mx-auto flex min-h-[600px] max-w-6xl flex-col justify-center px-4 pt-16 pb-32 sm:px-6 lg:min-h-[680px]">
        <div className="rise max-w-2xl">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-g4 uppercase">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-4 text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            {before}
            <span className="text-g3">{accent}</span>
            {after}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#D5D9E2]">{t.hero.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-btn px-5 py-3 font-semibold text-white transition-colors hover:bg-btn-hover"
            >
              {t.hero.primary}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              {t.hero.secondary}
            </a>
          </div>
          <p className="mt-5 text-sm text-[#D5D9E2]">{t.hero.note}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-3 px-4 pb-6 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? c.pause : c.play}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/15"
            >
              {playing ? <Pause className="size-4" aria-hidden /> : <Play className="size-4" aria-hidden />}
            </button>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={c.prev}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/15"
            >
              <ChevronLeft className="size-4" aria-hidden />
            </button>
            <div className="flex items-center gap-1.5">
              {PHOTOS.map((p, i) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`${c.slide} ${i + 1}: ${c.slides[i].label}`}
                  aria-current={i === index}
                  className="flex h-6 items-center"
                >
                  <span className={`block h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-g3' : 'w-4 bg-white/45'}`} />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={c.next}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/15"
            >
              <ChevronRight className="size-4" aria-hidden />
            </button>
            <span className="ml-1 hidden font-mono text-xs tracking-[0.12em] text-g4 uppercase sm:inline" aria-hidden>
              {c.slides[index].label}
            </span>
          </div>

          <p className="text-xs text-white/70">
            {c.photo}:{' '}
            <a href={`${photo.href}?utm_source=rubikcode&utm_medium=referral`} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
              {photo.credit}
            </a>{' '}
            ·{' '}
            <a href="https://unsplash.com/?utm_source=rubikcode&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
