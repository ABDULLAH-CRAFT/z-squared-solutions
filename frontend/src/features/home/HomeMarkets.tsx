import { Globe } from 'lucide-react'
import type { CSSProperties } from 'react'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { site } from '@/config/site'
import styles from './HomeMarkets.module.css'

const codes: Record<string, string> = {
  'United States': 'US',
  'United Kingdom': 'UK',
  Australia: 'AU',
  UAE: 'UAE',
}

/** The markets outreach targets (not office locations), shown as four tiles over a dotted globe motif. */
export function HomeMarkets() {
  return (
    <section className={styles.section} aria-labelledby="markets-heading">
      <div className="container">
        <div className={styles.layout}>
          <SectionHeading
            id="markets-heading"
            eyebrow="Markets we target"
            title={
              <>
                Reaching decision makers across <span className="accent-text">four international markets.</span>
              </>
            }
            lead="These are the markets our outreach focuses on, not office locations."
          />

          <ul className={styles.list} aria-label="Target markets">
            {site.markets.map((market, index) => (
              <li
                key={market}
                className={`nm-raised ${styles.tile}`}
                data-reveal="scale"
                style={{ '--reveal-delay': `${index * 100}ms` } as CSSProperties}
              >
                <span className={styles.code} aria-hidden="true">
                  {codes[market] ?? market.slice(0, 2).toUpperCase()}
                </span>
                <span className={styles.name}>{market}</span>
                <Globe className={styles.globe} size={46} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
