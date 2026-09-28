// Six circles in a staircase: row 1 has two, row 2 has three shifted one
// position right, row 3 has one under the middle of row 2.
const CIRCLES = [
  { cx: 10, cy: 10, fill: '#37A935' },
  { cx: 30, cy: 10, fill: '#8BBF1F' },
  { cx: 30, cy: 32, fill: '#8BBF1F' },
  { cx: 50, cy: 32, fill: '#A5CB4F' },
  { cx: 70, cy: 32, fill: '#C6DF8C' },
  { cx: 50, cy: 54, fill: '#C6DF8C' },
]

type LogoMarkProps = { className?: string; animated?: boolean }

export function LogoMark({ className = 'h-8 w-auto', animated = false }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 80 64"
      className={`${className} ${animated ? 'logo-animated' : ''}`}
      aria-hidden="true"
      focusable="false"
    >
      {CIRCLES.map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={9} fill={c.fill} style={animated ? { animationDelay: `${i * 90}ms` } : undefined} />
      ))}
    </svg>
  )
}

export function Logo({ animated = false, className = '' }: { animated?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-auto" animated={animated} />
      <span className="font-display text-xl font-bold tracking-tight">
        Rubik<span className="text-accent">Code</span>
      </span>
    </span>
  )
}
