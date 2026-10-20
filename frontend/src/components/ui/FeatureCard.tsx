import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  /** Spans the full row of its CardGrid. */
  wide?: boolean
  children: ReactNode
}

/** A neumorphic content card. Render inside <CardGrid>, which provides the list semantics. */
export function FeatureCard({ icon: Icon, title, wide = false, children }: FeatureCardProps) {
  const classes = ['nm-raised', styles.card, wide ? styles.wide : undefined]
    .filter(Boolean)
    .join(' ')
  return (
    <li className={classes}>
      <span className={styles.icon} aria-hidden="true">
        <Icon size={22} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>{children}</div>
    </li>
  )
}
