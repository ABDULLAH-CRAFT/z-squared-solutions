import { Globe, Handshake, Search, type LucideIcon } from 'lucide-react'
import styles from './HomeBento.module.css'

interface Pillar {
  number: string
  title: string
  text: string
  Icon: LucideIcon
}

const pillars: readonly Pillar[] = [
  {
    number: '01',
    title: 'Research Led',
    text: 'Every campaign begins with your market, your ideal buyer and your goals, not a template.',
    Icon: Search,
  },
  {
    number: '02',
    title: 'Relationship Focused',
    text: 'Conversations that respect decision makers and build trust for your sales team.',
    Icon: Handshake,
  },
  {
    number: '03',
    title: 'Internationally Minded',
    text: 'Built for B2B outreach across borders, time zones and buying cultures.',
    Icon: Globe,
  },
]

/** "Who We Are": a plain white, two-column section. The page's visual rhythm starts here. */
export function HomeBento() {
  return (
    <section className={styles.section} aria-labelledby="who-we-are-heading">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Who We Are</p>
            <h2 id="who-we-are-heading" className={styles.heading}>
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

          <ol className={styles.pillars} aria-label="What guides our work">
            {pillars.map(({ number, title, text, Icon }) => (
              <li key={title} className={styles.pillar}>
                <span className={styles.number} aria-hidden="true">
                  {number}
                </span>
                <div>
                  <div className={styles.pillarHead}>
                    <h3 className={styles.pillarTitle}>{title}</h3>
                    <span className={styles.iconWrap} aria-hidden="true">
                      <Icon size={18} />
                    </span>
                  </div>
                  <p className={styles.last}>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
