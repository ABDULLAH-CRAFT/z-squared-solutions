import { ArrowRight, ChevronDown } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { buttonClasses } from '@/components/ui/buttonClasses'
import { CountUp } from '@/components/ui/CountUp'
import { site } from '@/config/site'
import { approachSteps } from '@/features/approach/steps'
import { trackPointer } from '@/lib/pointer'
import { HeroVisual } from './HeroVisual'
import styles from './Hero.module.css'

const facts = [
  { value: site.services.length, label: 'Focused services' },
  { value: site.markets.length, label: 'Target markets' },
  { value: approachSteps.length, label: 'Step process' },
] as const

export function Hero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-heading"
      onPointerMove={trackPointer}
    >
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={`orb orb-red ${styles.orbRed}`} aria-hidden="true" />
      <div className={`orb orb-blue ${styles.orbBlue}`} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.enter} style={{ '--i': 0 } as CSSProperties}>
            <Badge dot>MSME Registered</Badge>
          </div>
          <h1 id="hero-heading" className={`${styles.headline} ${styles.enter}`} style={{ '--i': 1 } as CSSProperties}>
            Powering Your Next Stage of <span className="gradient-text">Growth.</span>
          </h1>
          <p className={`${styles.lead} ${styles.enter}`} style={{ '--i': 2 } as CSSProperties}>
            Strategic lead generation, recruitment and sales development to help ambitious
            businesses reach the right decision makers and unlock new opportunities.
          </p>
          <div className={`${styles.actions} ${styles.enter}`} style={{ '--i': 3 } as CSSProperties}>
            <Link to="/contact" className={buttonClasses('primary', 'lg')}>
              Let&apos;s Connect
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link to="/services" className={buttonClasses('ghost', 'lg')}>
              Explore Services
            </Link>
          </div>

          <dl className={`${styles.facts} ${styles.enter}`} style={{ '--i': 4 } as CSSProperties}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt>{fact.label}</dt>
                <dd>
                  <CountUp to={fact.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={`${styles.visual} ${styles.enter}`} style={{ '--i': 3 } as CSSProperties}>
          <HeroVisual />
        </div>
      </div>

      <a href="#home-intro" className={styles.scroll} aria-label="Scroll to the next section">
        <ChevronDown size={20} aria-hidden="true" />
      </a>
    </section>
  )
}
