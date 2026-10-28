import { ArrowRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { buttonClasses } from '@/components/ui/buttonClasses'
import { approachSteps } from '@/features/approach/steps'
import styles from './HomeProcess.module.css'

/** Condensed six-step approach on a navy band. The full version lives on the Our Approach page. */
export function HomeProcess() {
  return (
    <section className={styles.band} aria-labelledby="home-process-heading">
      <div className="bg-grid" aria-hidden="true" />
      <div className={`orb orb-blue ${styles.orb}`} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <SectionHeading
          id="home-process-heading"
          tone="light"
          eyebrow="Our Approach"
          title={
            <>
              Six steps from <span className="gradient-text">strategy to conversation.</span>
            </>
          }
          lead="A clear, repeatable process that keeps research first and keeps you informed at every stage."
        />

        <ol className={styles.steps} aria-label="Our six-step approach">
          {approachSteps.map(({ name, text, Icon }, index) => (
            <li
              key={name}
              className={`glass ${styles.step}`}
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
            >
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.icon} aria-hidden="true">
                <Icon size={20} />
              </span>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.text}>{text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.more} data-reveal>
          <Link to="/our-approach" className={buttonClasses('light', 'md')}>
            See how we work
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
