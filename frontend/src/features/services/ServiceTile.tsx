import { ArrowRight, type LucideIcon } from 'lucide-react'
import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { trackPointer } from '@/lib/pointer'
import styles from './ServiceTile.module.css'

interface ServiceTileProps {
  icon: LucideIcon
  title: string
  /** Where the "Discuss this service" link goes. Swap for the service modal route in Phase 4. */
  to?: string
  /** Spans the full row of the grid. */
  wide?: boolean
  index?: number
  children: ReactNode
}

/** A service tile with a cursor spotlight. Render inside a <ul>. */
export function ServiceTile({
  icon: Icon,
  title,
  to = '/contact',
  wide = false,
  index = 0,
  children,
}: ServiceTileProps) {
  const classes = ['nm-raised', 'spotlight', styles.tile, wide ? styles.wide : undefined]
    .filter(Boolean)
    .join(' ')
  return (
    <li
      className={classes}
      data-reveal
      style={{ '--reveal-delay': `${(index % 3) * 100}ms` } as CSSProperties}
      onPointerMove={trackPointer}
    >
      <span className={styles.icon} aria-hidden="true">
        <Icon size={24} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>{children}</div>
      <Link to={to} className={styles.link}>
        <span>
          Discuss this service
          <span className="visually-hidden">: {title}</span>
        </span>
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </li>
  )
}
