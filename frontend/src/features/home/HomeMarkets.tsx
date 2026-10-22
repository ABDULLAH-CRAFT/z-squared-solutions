import { site } from '@/config/site'
import styles from './HomeMarkets.module.css'

/** Full-width navy band listing the markets outreach targets (not office locations). */
export function HomeMarkets() {
  return (
    <section className={styles.band} aria-labelledby="markets-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Markets we target</p>
          <h2 id="markets-heading" className={styles.heading}>
            Reaching decision makers across four international markets
          </h2>
          <p className={styles.note}>
            These are the markets our outreach focuses on, not office locations.
          </p>
        </div>
        <ul className={styles.list} aria-label="Target markets">
          {site.markets.map((market) => (
            <li key={market} className={styles.pill}>
              {market}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
