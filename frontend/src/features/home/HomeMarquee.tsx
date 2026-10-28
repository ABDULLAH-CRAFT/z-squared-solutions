import { Sparkles } from 'lucide-react'
import { site } from '@/config/site'
import styles from './HomeMarquee.module.css'

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul className={styles.track} aria-hidden={hidden ? true : undefined}>
      {site.services.map((service) => (
        <li key={service} className={styles.item}>
          <Sparkles size={18} className={styles.icon} aria-hidden="true" />
          {service}
        </li>
      ))}
    </ul>
  )
}

/** Slow-scrolling ticker of the five services. The duplicate track is hidden from assistive technology. */
export function HomeMarquee() {
  return (
    <section className={styles.marquee} aria-label="Our services">
      <div className={styles.inner}>
        <Track />
        <Track hidden />
      </div>
    </section>
  )
}
