// lucide-react no longer ships brand icons, so this is a simple line-style glyph
// matching lucide's stroke conventions.
export function WhatsAppIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
      <path d="M9 8.6c0 3.4 2.9 6.4 6.4 6.4l1.1-1.4-2-1-.9.8c-1-.4-2.1-1.5-2.5-2.5l.8-.9-1-2z" />
    </svg>
  )
}
