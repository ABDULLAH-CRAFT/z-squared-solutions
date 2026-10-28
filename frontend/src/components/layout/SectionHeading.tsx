import type { ReactNode } from 'react'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  id?: string
  align?: 'left' | 'center'
  /** Use on navy backgrounds. */
  tone?: 'default' | 'light'
}

/** Eyebrow, headline and optional lead used to open a section. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = 'left',
  tone = 'default',
}: SectionHeadingProps) {
  const classes = [
    styles.heading,
    align === 'center' ? styles.center : undefined,
    tone === 'light' ? styles.light : undefined,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} data-reveal>
      <p className={`eyebrow ${tone === 'light' ? 'eyebrow-light' : ''}`}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </div>
  )
}
