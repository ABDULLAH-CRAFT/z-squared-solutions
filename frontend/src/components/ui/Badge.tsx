import type { ReactNode } from 'react'
import styles from './Badge.module.css'

interface BadgeProps {
  /** Show a small red status dot. */
  dot?: boolean
  children: ReactNode
}

export function Badge({ dot = false, children }: BadgeProps) {
  return (
    <span className={styles.badge}>
      {dot ? <span className={styles.dot} aria-hidden="true" /> : null}
      {children}
    </span>
  )
}
