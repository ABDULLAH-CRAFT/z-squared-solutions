import { ArrowRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { buttonClasses } from '@/components/ui/buttonClasses'
import { industries } from '@/features/industries/industryData'
import styles from './HomeIndustries.module.css'

/** Quick look at who we work with, as linked chips. */
export function HomeIndustries() {
  return (
    <section className={styles.section} aria-labelledby="home-industries-heading">
      <div className="container">
        <SectionHeading
          id="home-industries-heading"
          align="center"
          eyebrow="Industries"
          title={
            <>
              Who we <span className="accent-text">work with.</span>
            </>
          }
          lead="We support B2B technology and services businesses that sell to other businesses and need to reach the right buyers."
        />

        <ul className={styles.chips} aria-label="Industries we support">
          {industries.map(({ title, Icon }, index) => (
            <li
              key={title}
              data-reveal
              style={{ '--reveal-delay': `${index * 60}ms` } as CSSProperties}
            >
              <Link to="/industries" className={styles.chip}>
                <Icon size={18} aria-hidden="true" />
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.more} data-reveal>
          <Link to="/industries" className={buttonClasses('secondary', 'md')}>
            Explore industries
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
