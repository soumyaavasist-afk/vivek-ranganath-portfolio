import { ArrowRight, ArrowDownToLine } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'solid' | 'outline' | 'text' | 'solid-light' | 'outline-light'

const variants: Record<Variant, string> = {
  solid: 'bg-charcoal text-paper hover:bg-bronze',
  outline: 'border border-charcoal/70 text-charcoal hover:bg-charcoal hover:text-paper',
  text: 'px-0! text-charcoal underline-offset-8 hover:underline decoration-bronze',
  'solid-light': 'bg-paper text-charcoal hover:bg-stone',
  'outline-light': 'border border-paper/60 text-paper hover:bg-paper hover:text-charcoal',
}

export function CtaLink({
  href,
  children,
  variant = 'solid',
  download,
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  download?: boolean
  className?: string
}) {
  const Icon = download ? ArrowDownToLine : ArrowRight
  return (
    <a
      href={href}
      download={download || undefined}
      className={cn(
        'group eyebrow inline-flex min-h-12 whitespace-nowrap items-center justify-center gap-3 px-6 py-3 transition-colors duration-500',
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      <Icon
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1"
        strokeWidth={1.25}
      />
    </a>
  )
}

export function SectionLabel({ index, children, light }: { index?: string; children: React.ReactNode; light?: boolean }) {
  return (
    <p className={cn('eyebrow flex items-center gap-4', light ? 'text-paper/70' : 'text-warm-grey')}>
      {index && <span className="text-bronze">{index}</span>}
      <span aria-hidden="true" className={cn('h-px w-10', light ? 'bg-paper/40' : 'bg-charcoal/30')} />
      <span>{children}</span>
    </p>
  )
}
