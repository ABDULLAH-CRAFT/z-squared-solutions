import { BadgeCheck, Briefcase, Cloud, HeartPulse, Network, Users, Workflow } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { CardGrid } from '@/components/ui/CardGrid'
import { CtaBand } from '@/components/ui/CtaBand'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { usePageTitle } from '@/hooks/usePageTitle'
import styles from '@/features/industries/IndustriesPage.module.css'

export function IndustriesPage() {
  usePageTitle('Industries')

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Who we <span className={styles.accent}>work with.</span>
          </>
        }
        lead="We support B2B technology and services businesses that sell to other businesses and need to reach the right buyers."
      />

      <Section>
        <CardGrid label="Industries we support" columns={3}>
          <FeatureCard icon={Cloud} title="SaaS and software companies">
            <p>Reaching the buyers and decision makers who evaluate and purchase software.</p>
          </FeatureCard>
          <FeatureCard icon={Network} title="IT consulting and technology services">
            <p>Opening conversations with organisations that need technology expertise.</p>
          </FeatureCard>
          <FeatureCard icon={BadgeCheck} title="Microsoft Solutions Partners">
            <p>Building pipeline across Microsoft solution areas for partner businesses.</p>
          </FeatureCard>
          <FeatureCard icon={Users} title="IT staffing and recruitment firms">
            <p>Business development support to start conversations with hiring companies.</p>
          </FeatureCard>
          <FeatureCard icon={HeartPulse} title="Healthcare staffing companies">
            <p>Targeted outreach to reach decision makers at healthcare employers.</p>
          </FeatureCard>
          <FeatureCard icon={Workflow} title="Business technology and digital transformation providers">
            <p>Connecting providers with organisations planning technology change.</p>
          </FeatureCard>
          <FeatureCard icon={Briefcase} title="B2B service companies" wide>
            <p>
              Outbound sales development for service businesses that win clients through
              relationships and direct conversations.
            </p>
          </FeatureCard>
        </CardGrid>
      </Section>

      <Section>
        <div className={`nm-inset ${styles.note}`}>
          <p>
            Every business is different. Our support is tailored to each client&apos;s business
            model, industry, market and sales objective, so your outreach reflects how your buyers
            actually make decisions.
          </p>
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Does your business fit?"
          text="If you sell to other businesses, tell us about your market and goals and we will explore how targeted outreach can help."
        />
      </Section>
    </>
  )
}
