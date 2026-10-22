import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '@/components/layout/Section'
import { buttonClasses } from '@/components/ui/buttonClasses'
import { site } from '@/config/site'
import styles from './HomeServices.module.css'

/** Services overview: the one raised "signature" card on the homepage. */
export function HomeServices() {
  return (
    <Section>
      <div className={`nm-raised ${styles.panel}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>What we do</p>
          <h2 className={styles.title}>Five focused services for B2B growth.</h2>
          <p>
            From SaaS and Microsoft solutions to IT and healthcare staffing, we help you reach the
            right decision makers and open qualified sales conversations.
          </p>
          <Link to="/services" className={buttonClasses('secondary', 'md')}>
            View all services
          </Link>
        </div>

        <ul className={styles.list} aria-label="Our services">
          {site.services.map((service) => (
            <li key={service}>
              <Link to="/services" className={styles.row}>
                <span>{service}</span>
                <ArrowRight size={18} aria-hidden="true" className={styles.arrow} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
