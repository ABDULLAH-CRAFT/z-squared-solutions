import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  as?: 'div' | 'li' | 'article'
  /** Adds a red left accent border. */
  accent?: boolean
  children: ReactNode
}

export function Card({ as: Tag = 'div', accent = false, children }: CardProps) {
  const classes = ['nm-raised-sm', styles.card, accent ? styles.accent : undefined]
    .filter(Boolean)
    .join(' ')
  return <Tag className={classes}>{children}</Tag>
}
