import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  /** Accessible name when the section has no visible heading. */
  label?: string
  /** Use a faint tinted background to separate stacked light sections. */
  tinted?: boolean
  children: ReactNode
}

export function Section({ label, tinted = false, children }: SectionProps) {
  const classes = [styles.section, tinted ? styles.tinted : undefined].filter(Boolean).join(' ')
  return (
    <section className={classes} aria-label={label}>
      <div className="container">{children}</div>
    </section>
  )
}
