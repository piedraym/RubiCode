import type { ReactNode } from 'react'

type Props = { id: string; label: string; title: string; children?: ReactNode; dark?: boolean }

export function SectionHeading({ id, label, title, children, dark = false }: Props) {
  return (
    <div className="max-w-2xl">
      <p className={`font-mono text-xs font-medium tracking-[0.14em] uppercase ${dark ? 'text-g4' : 'text-accent'}`}>
        {label}
      </p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  )
}
