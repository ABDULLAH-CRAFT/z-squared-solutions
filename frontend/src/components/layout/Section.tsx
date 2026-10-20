import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  /** Accessible name when the section has no visible heading. */
  label?: string
  children: ReactNode
}

export function Section({ label, children }: SectionProps) {
  return (
    <section className={styles.section} aria-label={label}>
      <div className="container">{children}</div>
    </section>
  )
}
