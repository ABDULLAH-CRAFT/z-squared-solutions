import type { LucideIcon } from 'lucide-react'
import type { CSSProperties, ReactNode } from 'react'
import { trackPointer } from '@/lib/pointer'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  /** Spans the full row of its CardGrid. */
  wide?: boolean
  /** Position in the grid, used to stagger the reveal animation. */
  index?: number
  children: ReactNode
}

/** A neumorphic content card with a cursor spotlight. Render inside <CardGrid>, which provides the list semantics. */
export function FeatureCard({ icon: Icon, title, wide = false, index = 0, children }: FeatureCardProps) {
  const classes = ['nm-raised', 'spotlight', styles.card, wide ? styles.wide : undefined]
    .filter(Boolean)
    .join(' ')
  const style = { '--reveal-delay': `${(index % 3) * 90}ms` } as CSSProperties
  return (
    <li className={classes} data-reveal style={style} onPointerMove={trackPointer}>
      <span className={styles.icon} aria-hidden="true">
        <Icon size={24} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>{children}</div>
    </li>
  )
}
