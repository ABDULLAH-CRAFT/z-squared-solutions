import { ArrowRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { buttonClasses } from '@/components/ui/buttonClasses'
import { serviceSummaries } from '@/features/services/serviceData'
import { trackPointer } from '@/lib/pointer'
import styles from './HomeServices.module.css'

/** Services showcase: one featured card and four supporting cards in a bento grid. */
export function HomeServices() {
  return (
    <section className={styles.section} aria-labelledby="home-services-heading">
      <div className="container">
        <SectionHeading
          id="home-services-heading"
          eyebrow="What we do"
          title={
            <>
              Five focused services for <span className="accent-text">B2B growth.</span>
            </>
          }
          lead="From SaaS and Microsoft solutions to IT and healthcare staffing, we help you reach the right decision makers and open qualified sales conversations."
        />

        <ul className={styles.grid} aria-label="Our services">
          {serviceSummaries.map(({ title, summary, Icon }, index) => {
            const featured = index === 0
            const classes = [
              'spotlight',
              featured ? 'spotlight-dark' : 'nm-raised',
              styles.card,
              featured ? styles.featured : undefined,
            ]
              .filter(Boolean)
              .join(' ')
            return (
              <li
                key={title}
                className={classes}
                data-reveal
                style={{ '--reveal-delay': `${(index % 3) * 100}ms` } as CSSProperties}
                onPointerMove={trackPointer}
              >
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={featured ? 28 : 22} />
                </span>
                {featured ? <span className={styles.tag}>Featured</span> : null}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{summary}</p>
                <Link to="/services" className={styles.link}>
                  <span>
                    Learn more<span className="visually-hidden">: {title}</span>
                  </span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className={styles.more} data-reveal>
          <Link to="/services" className={buttonClasses('secondary', 'md')}>
            View all services
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
