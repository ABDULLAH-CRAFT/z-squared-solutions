import { Globe, Handshake, Search, type LucideIcon } from 'lucide-react'
import type { CSSProperties } from 'react'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { trackPointer } from '@/lib/pointer'
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

/** "Who We Are": an intro statement beside three principle cards. */
export function HomeBento() {
  return (
    <section id="home-intro" className={styles.section} aria-labelledby="who-we-are-heading">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeading
              id="who-we-are-heading"
              eyebrow="Who We Are"
              title={
                <>
                  Growth is never accidental. It is <span className="accent-text">researched, targeted and earned.</span>
                </>
              }
            />
            <div data-reveal style={{ '--reveal-delay': '100ms' } as CSSProperties}>
              <p>
                Z Squared Solutions is a B2B growth partner for technology, SaaS, Microsoft
                solutions, IT staffing and healthcare staffing businesses. We believe an effective
                pipeline starts with understanding your ideal buyer, not with maximizing volume.
              </p>
              <p className={styles.last}>
                We act as an extension of your sales team: researching markets, identifying the
                right decision makers and opening conversations, so your people can focus on
                meaningful sales discussions.
              </p>
            </div>
          </div>

          <ol className={styles.pillars} aria-label="What guides our work">
            {pillars.map(({ number, title, text, Icon }, index) => (
              <li
                key={title}
                className={`nm-raised spotlight ${styles.pillar}`}
                data-reveal="right"
                style={{ '--reveal-delay': `${index * 120}ms` } as CSSProperties}
                onPointerMove={trackPointer}
              >
                <span className={styles.number} aria-hidden="true">
                  {number}
                </span>
                <div className={styles.body}>
                  <div className={styles.head}>
                    <span className={styles.iconWrap} aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <h3 className={styles.title}>{title}</h3>
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
