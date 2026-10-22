import { Link } from 'react-router-dom'
import { buttonClasses } from './buttonClasses'
import styles from './CtaBand.module.css'

interface CtaBandProps {
  title: string
  text: string
  buttonLabel?: string
  to?: string
  /** Red is the default so the band stands out from the navy and white sections around it. */
  variant?: 'red' | 'navy'
}

/** Closing call to action: a short message and one clear action. */
export function CtaBand({
  title,
  text,
  buttonLabel = "Let's Connect",
  to = '/contact',
  variant = 'red',
}: CtaBandProps) {
  const classes = [styles.band, variant === 'navy' ? styles.navy : styles.red].join(' ')
  return (
    <section className={classes} aria-labelledby="cta-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.copy}>
        <h2 id="cta-heading" className={styles.title}>
          {title}
        </h2>
        <p className={styles.text}>{text}</p>
      </div>
      <Link to={to} className={buttonClasses('light', 'md', styles.button)}>
        {buttonLabel}
      </Link>
    </section>
  )
}
