import type { CSSProperties, ReactNode } from 'react'
import { trackPointer } from '@/lib/pointer'
import styles from './PageHero.module.css'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  lead: string
}

/** Dark, animated introduction shared by every inner page. Renders the page's single <h1>. */
export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className={styles.hero} onPointerMove={trackPointer}>
      <div className="bg-grid" aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={`orb orb-red ${styles.orbRed}`} aria-hidden="true" />
      <div className={`orb orb-blue ${styles.orbBlue}`} aria-hidden="true" />
      <div className={styles.ring} aria-hidden="true" />
      <div className={`${styles.ring} ${styles.ringTwo}`} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow} data-reveal style={{ '--reveal-delay': '0ms' } as CSSProperties}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className={styles.title} data-reveal style={{ '--reveal-delay': '100ms' } as CSSProperties}>
            {title}
          </h1>
          <p className={styles.lead} data-reveal style={{ '--reveal-delay': '200ms' } as CSSProperties}>
            {lead}
          </p>
        </div>
      </div>
    </section>
  )
}
