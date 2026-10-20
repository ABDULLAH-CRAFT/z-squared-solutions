import { Link } from 'react-router-dom'
import { buttonClasses } from './buttonClasses'
import styles from './CtaBand.module.css'

interface CtaBandProps {
  title: string
  text: string
  buttonLabel?: string
  to?: string
}

/** Closing call to action shown at the bottom of inner pages. */
export function CtaBand({
  title,
  text,
  buttonLabel = "Let's Connect",
  to = '/contact',
}: CtaBandProps) {
  return (
    <section className={styles.band} aria-labelledby="cta-heading">
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
