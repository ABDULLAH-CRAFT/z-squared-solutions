import { Handshake, Search, Send, Target, type LucideIcon } from 'lucide-react'
import styles from './HeroVisual.module.css'

interface Chip {
  label: string
  Icon: LucideIcon
  className: string
}

const chips: readonly Chip[] = [
  { label: 'Prospect research', Icon: Search, className: styles.chipA ?? '' },
  { label: 'Ideal customer profiling', Icon: Target, className: styles.chipB ?? '' },
  { label: 'Targeted outreach', Icon: Send, className: styles.chipC ?? '' },
  { label: 'Qualified conversations', Icon: Handshake, className: styles.chipD ?? '' },
]

/** Decorative orbit graphic: outreach nodes circling a single qualified conversation. Carries no claims. */
export function HeroVisual() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={`${styles.ring} ${styles.ringOne}`}>
        <span className={`${styles.node} ${styles.nodeRed}`} />
      </div>
      <div className={`${styles.ring} ${styles.ringTwo}`}>
        <span className={styles.node} />
        <span className={`${styles.node} ${styles.nodeOpp}`} />
      </div>
      <div className={`${styles.ring} ${styles.ringThree}`}>
        <span className={styles.node} />
        <span className={`${styles.node} ${styles.nodeRed} ${styles.nodeOpp}`} />
      </div>

      <div className={styles.core}>
        <span className={styles.pulse} />
        <span className={styles.coreTile}>
          <span className={styles.z}>Z</span>
          <span className={styles.two}>2</span>
        </span>
      </div>

      {chips.map(({ label, Icon, className }) => (
        <div key={label} className={`glass ${styles.chip} ${className}`}>
          <span className={styles.chipIcon}>
            <Icon size={16} />
          </span>
          {label}
        </div>
      ))}
    </div>
  )
}
