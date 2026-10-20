import { site } from '@/config/site'
import styles from './MarketStrip.module.css'

export function MarketStrip() {
  return (
    <section className={styles.strip} aria-labelledby="markets-heading">
      <div className="container">
        <h2 id="markets-heading" className={styles.title}>
          Markets we target
        </h2>
        <ul className={styles.list}>
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
