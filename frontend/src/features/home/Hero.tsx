import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { buttonClasses } from '@/components/ui/buttonClasses'
import { NetworkGraphic } from '@/components/ui/NetworkGraphic'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.photo} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.photo} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orbRed}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orbBlue}`} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Badge dot>MSME Registered</Badge>
          <h1 id="hero-heading" className={styles.headline}>
            Powering Your Next Stage of <span className={styles.accent}>Growth.</span>
          </h1>
          <p className={styles.lead}>
            Strategic lead generation, recruitment and sales development to help ambitious
            businesses reach the right decision makers and unlock new opportunities.
          </p>
          <div className={styles.actions}>
            <Link to="/contact" className={buttonClasses('primary', 'md')}>
              Let&apos;s Connect
            </Link>
            <Link to="/services" className={buttonClasses('light', 'md')}>
              Explore Services
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <NetworkGraphic />
        </div>
      </div>
    </section>
  )
}
