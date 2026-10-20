import {
  Briefcase,
  Cloud,
  HeartPulse,
  LayoutGrid,
  Send,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { CardGrid } from '@/components/ui/CardGrid'
import { ChipList } from '@/components/ui/ChipList'
import { CtaBand } from '@/components/ui/CtaBand'
import { FeatureCard } from '@/components/ui/FeatureCard'
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
            Lead generation and sales development, <span className={styles.accent}>built around you.</span>
          </>
        }
        lead="Five focused services that help ambitious businesses reach the right decision makers and open qualified sales conversations."
      />

      <Section>
        <CardGrid label="Services">
          <FeatureCard icon={Cloud} title="SaaS Lead Generation">
            <p>
              We research your ideal customers, identify the decision makers who buy software like
              yours, and open conversations through targeted outreach.
            </p>
            <p>Your sales team then meets prospects who have shown genuine interest.</p>
          </FeatureCard>

          <FeatureCard icon={Briefcase} title="IT Staffing Business Development">
            <p>
              Business development support for IT staffing and recruitment firms: identifying
              companies that hire technology talent, reaching their hiring decision makers and
              starting client conversations.
            </p>
          </FeatureCard>

          <FeatureCard icon={HeartPulse} title="Healthcare Staffing Business Development">
            <p>
              Targeted prospecting and follow-up for healthcare staffing companies, helping you
              reach the right contacts at healthcare employers and organisations.
            </p>
          </FeatureCard>

          <FeatureCard icon={Send} title="Outbound Sales Development">
            <p>
              An outbound programme run as an extension of your sales team: targeted email and
              LinkedIn outreach, qualification, appointment setting and follow-up coordination.
            </p>
          </FeatureCard>

          <FeatureCard icon={LayoutGrid} title="Microsoft Solutions Lead Generation" wide>
            <p>
              Pipeline development for Microsoft Solutions Partners and business technology
              providers, across the Microsoft solution areas below.
            </p>
            <ChipList items={microsoftSolutions} label="Microsoft solution areas" />
          </FeatureCard>
        </CardGrid>
      </Section>

      <Section>
        <div className={`nm-raised ${styles.activities}`}>
          <h2 className={styles.activitiesTitle}>What every engagement can include</h2>
          <p>
            The exact scope, channels and indicators are agreed with each client before work begins.
          </p>
          <ChipList items={activities} label="Typical activities" />
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
