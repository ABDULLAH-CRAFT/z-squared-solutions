import type { ReactNode } from 'react'
import styles from './CardGrid.module.css'

interface CardGridProps {
  columns?: 2 | 3
  label: string
  children: ReactNode
}

/** Responsive list of cards: 1 column on mobile, 2 on tablet, `columns` on desktop. */
export function CardGrid({ columns = 2, label, children }: CardGridProps) {
  const classes = [styles.grid, columns === 3 ? styles.three : undefined].filter(Boolean).join(' ')
  return (
    <ul className={classes} aria-label={label}>
      {children}
    </ul>
  )
}
