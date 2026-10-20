import { Globe, Handshake, Search, type LucideIcon } from 'lucide-react'
import { site } from '@/config/site'
import styles from './HomeBento.module.css'

interface Pillar {
  number: string
  title: string
  text: string
  Icon: LucideIcon
  area: 'p1' | 'p2' | 'p3'
}

const pillars: readonly Pillar[] = [
  {
    number: '01',
    title: 'Research Led',
    text: 'Every campaign begins with your market, your ideal buyer and your goals, not a template.',
    Icon: Search,
    area: 'p1',
  },
  {
    number: '02',
    title: 'Relationship Focused',
    text: 'Conversations that respect decision makers and build trust for your sales team.',
    Icon: Handshake,
    area: 'p2',
  },
  {
    number: '03',
    title: 'Internationally Minded',
    text: 'Built for B2B outreach across borders, time zones and buying cultures.',
    Icon: Globe,
    area: 'p3',
  },
]

/** Decorative network motif for the Who We Are card. */
function NetworkGraphic() {
  return (
    <svg className={styles.graphic} viewBox="0 0 320 320" aria-hidden="true" focusable="false">
      <g fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2">
        <circle cx="200" cy="120" r="60" />
        <circle cx="200" cy="120" r="105" />
        <circle cx="200" cy="120" r="150" />
        <path d="M200 120 L70 210 M200 120 L280 230 M200 120 L90 60 M70 210 L180 290" />
      </g>
      <g>
        <circle cx="200" cy="120" r="9" fill="#d62839" />
        <circle cx="70" cy="210" r="5" fill="rgba(255,255,255,0.7)" />
        <circle cx="280" cy="230" r="5" fill="rgba(255,255,255,0.7)" />
        <circle cx="90" cy="60" r="5" fill="rgba(255,255,255,0.7)" />
        <circle cx="180" cy="290" r="4" fill="rgba(255,255,255,0.5)" />
      </g>
    </svg>
  )
}

export function HomeBento() {
  return (
    <section className="container" aria-labelledby="who-we-are-heading">
      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.who}`}>
          <NetworkGraphic />
          <div className={styles.whoContent}>
            <p className={styles.eyebrowLight}>Who We Are</p>
            <h2 id="who-we-are-heading" className={styles.whoHeading}>
              Growth is never accidental. It is researched, targeted and earned.
            </h2>
            <p>
              Z Squared Solutions is a B2B growth partner for technology, SaaS, Microsoft
              solutions, IT staffing and healthcare staffing businesses. We believe an effective
              pipeline starts with understanding your ideal buyer, not with maximizing volume.
            </p>
            <p className={styles.last}>
              We act as an extension of your sales team: researching markets, identifying the right
              decision makers and opening conversations, so your people can focus on meaningful
              sales discussions.
            </p>
          </div>
        </article>

        {pillars.map(({ number, title, text, Icon, area }) => (
          <article key={title} className={`${styles.card} ${styles.pillar} ${styles[area]}`}>
            <div className={styles.pillarTop}>
              <span className={styles.number}>{number}</span>
              <span className={styles.iconWrap} aria-hidden="true">
                <Icon size={20} />
              </span>
            </div>
            <h3 className={styles.pillarTitle}>{title}</h3>
            <p className={styles.last}>{text}</p>
          </article>
        ))}

        <section className={`${styles.card} ${styles.markets}`} aria-labelledby="markets-heading">
          <div>
            <p className={styles.eyebrowLight}>Markets we target</p>
            <h2 id="markets-heading" className={styles.marketsHeading}>
              Reaching decision makers across four international markets
            </h2>
            <p className={styles.marketsNote}>
              These are the markets our outreach focuses on, not office locations.
            </p>
          </div>
          <ul className={styles.marketList} aria-label="Target markets">
            {site.markets.map((market) => (
              <li key={market} className={styles.marketPill}>
                {market}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
