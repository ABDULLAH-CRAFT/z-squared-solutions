import type { ReactNode } from 'react'
import styles from './PageHero.module.css'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  lead: string
}

/** Centred page introduction shared by every inner page. Renders the page's single <h1>. */
export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.shape} ${styles.shapeNavy}`} aria-hidden="true" />
      <div className={`${styles.shape} ${styles.shapeRed}`} aria-hidden="true" />
      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lead}>{lead}</p>
        </div>
      </div>
    </section>
  )
}
