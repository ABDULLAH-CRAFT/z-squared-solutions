import { Globe, Handshake, Search } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import styles from './WhoWeAre.module.css'

const pillars = [
  {
    title: 'Research led',
    text: 'Every campaign begins with your market, not a template.',
    Icon: Search,
  },
  {
    title: 'Relationship focused',
    text: 'Conversations that respect decision makers and build lasting trust.',
    Icon: Handshake,
  },
  {
    title: 'Internationally minded',
    text: 'Built for B2B outreach across borders and time zones.',
    Icon: Globe,
  },
]

export function WhoWeAre() {
  return (
    <section className={styles.section} aria-labelledby="who-we-are-heading">
      <div className="container">
        <h2 id="who-we-are-heading" className={styles.heading}>
          Growth is never accidental. It is researched, targeted and earned.
        </h2>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <p>
              Z Squared Solutions is a B2B growth partner for technology, SaaS, Microsoft solutions,
              IT staffing and healthcare staffing businesses. We believe that the strongest sales
              pipelines are not built on volume. They are built on understanding who your ideal
              buyer is, where they are, and what matters to them.
            </p>
            <p>
              We act as an extension of your sales team: researching markets, identifying the right
              decision makers, opening conversations and qualifying opportunities, so your people
              can spend their time where it counts, in meaningful sales discussions.
            </p>
          </div>

          <ul className={styles.pillars}>
            {pillars.map(({ title, text, Icon }) => (
              <Card as="li" accent key={title}>
                <div className={styles.pillarHead}>
                  <Icon size={22} aria-hidden="true" className={styles.icon} />
                  <h3 className={styles.pillarTitle}>{title}</h3>
                </div>
                <p className={styles.pillarText}>{text}</p>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
