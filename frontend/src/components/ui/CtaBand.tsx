import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buttonClasses } from './buttonClasses'
import styles from './CtaBand.module.css'

interface CtaBandProps {
  title: string
  text: string
  buttonLabel?: string
  to?: string
}

/** Closing call to action: a short message and one clear action. */
export function CtaBand({
  title,
  text,
  buttonLabel = "Let's Connect",
  to = '/contact',
}: CtaBandProps) {
  return (
    <section className={styles.band} aria-labelledby="cta-heading" data-reveal="scale">
      <div className="bg-grid" aria-hidden="true" />
      <div className={`orb orb-red ${styles.orbRed}`} aria-hidden="true" />
      <div className={`orb orb-blue ${styles.orbBlue}`} aria-hidden="true" />

      <div className={styles.content}>
        <h2 id="cta-heading" className={styles.title}>
          {title}
        </h2>
        <p className={styles.text}>{text}</p>
        <Link to={to} className={buttonClasses('primary', 'lg', styles.button)}>
          {buttonLabel}
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
