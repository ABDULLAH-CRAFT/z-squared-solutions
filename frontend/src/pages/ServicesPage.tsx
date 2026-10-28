import { ArrowRight, Briefcase, Check, HeartPulse, LayoutGrid, Send } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { buttonClasses } from '@/components/ui/buttonClasses'
import { ChipList } from '@/components/ui/ChipList'
import { CtaBand } from '@/components/ui/CtaBand'
import { PipelineGraphic } from '@/features/services/PipelineGraphic'
import { ServiceTile } from '@/features/services/ServiceTile'
import { usePageTitle } from '@/hooks/usePageTitle'
import styles from '@/features/services/ServicesPage.module.css'

const microsoftSolutions = [
  'Dynamics 365 Business Central',
  'Power BI',
  'Microsoft Fabric',
  'SharePoint',
  'Copilot',
  'Dynamics 365 CRM and Sales',
  'Teams Phone',
  'Data and AI',
  'Cloud',
  'Business productivity solutions',
] as const

const activities = [
  'Prospect research',
  'Ideal customer profiling',
  'Decision-maker identification',
  'Targeted email outreach',
  'Targeted LinkedIn outreach',
  'Qualification',
  'Appointment setting',
  'Follow-up coordination',
  'Pipeline development',
] as const

export function ServicesPage() {
  usePageTitle('Services')

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Lead generation and sales development, <span className="gradient-text">built around you.</span>
          </>
        }
        lead="Five focused services that help ambitious businesses reach the right decision makers and open qualified sales conversations."
      />

      <Section>
        <article
          className={styles.featured}
          aria-labelledby="featured-service-heading"
          data-reveal
        >
          <div className={`orb orb-red ${styles.featuredGlow}`} aria-hidden="true" />
          <div className={styles.featuredCopy}>
            <p className="eyebrow eyebrow-light">Featured service</p>
            <h2 id="featured-service-heading" className={styles.featuredTitle}>
              SaaS Lead Generation
            </h2>
            <p>
              We research your ideal customers, identify the decision makers who buy software like
              yours, and open conversations through targeted outreach.
            </p>
            <p>Your sales team then meets prospects who have shown genuine interest.</p>
            <Link to="/contact" className={buttonClasses('light', 'md', styles.featuredCta)}>
              Discuss this service
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.featuredVisual} aria-hidden="true">
            <PipelineGraphic />
          </div>
        </article>
      </Section>

      <Section>
        <h2 className={styles.gridTitle} data-reveal>
          More ways we can support your <span className="accent-text">pipeline</span>
        </h2>
        <ul className={styles.grid} aria-label="More services">
          <ServiceTile icon={Briefcase} title="IT Staffing Business Development" index={0}>
            <p>
              Business development support for IT staffing and recruitment firms: identifying
              companies that hire technology talent, reaching their hiring decision makers and
              starting client conversations.
            </p>
          </ServiceTile>

          <ServiceTile icon={HeartPulse} title="Healthcare Staffing Business Development" index={1}>
            <p>
              Targeted prospecting and follow-up for healthcare staffing companies, helping you
              reach the right contacts at healthcare employers and organisations.
            </p>
          </ServiceTile>

          <ServiceTile icon={Send} title="Outbound Sales Development" index={2}>
            <p>
              An outbound programme run as an extension of your sales team: targeted email and
              LinkedIn outreach, qualification, appointment setting and follow-up coordination.
            </p>
          </ServiceTile>

          <ServiceTile icon={LayoutGrid} title="Microsoft Solutions Lead Generation" wide index={0}>
            <p>
              Pipeline development for Microsoft Solutions Partners and business technology
              providers, across the Microsoft solution areas below.
            </p>
            <ChipList items={microsoftSolutions} label="Microsoft solution areas" />
          </ServiceTile>
        </ul>
      </Section>

      <Section>
        <div className={`nm-raised ${styles.activities}`} data-reveal>
          <h2 className={styles.activitiesTitle}>What every engagement can include</h2>
          <p>
            The exact scope, channels and indicators are agreed with each client before work begins.
          </p>
          <ul className={styles.activityList} aria-label="Typical activities">
            {activities.map((activity, index) => (
              <li
                key={activity}
                className={styles.activity}
                data-reveal
                style={{ '--reveal-delay': `${(index % 3) * 80}ms` } as CSSProperties}
              >
                <span className={styles.activityIcon} aria-hidden="true">
                  <Check size={16} />
                </span>
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Not sure which service fits?"
          text="Tell us about your business and target market. We will help you work out where targeted outreach can support your growth."
        />
      </Section>
    </>
  )
}
