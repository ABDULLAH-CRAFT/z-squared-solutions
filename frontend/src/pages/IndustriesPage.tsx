import { Briefcase } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { CardGrid } from '@/components/ui/CardGrid'
import { CtaBand } from '@/components/ui/CtaBand'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { industries } from '@/features/industries/industryData'
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
            Who we <span className="gradient-text">work with.</span>
          </>
        }
        lead="We support B2B technology and services businesses that sell to other businesses and need to reach the right buyers."
      />

      <Section>
        <CardGrid label="Industries we support" columns={3}>
          {industries.map(({ title, text, Icon }, index) => (
            <FeatureCard
              key={title}
              icon={Icon}
              title={title}
              index={index}
              wide={Icon === Briefcase}
            >
              <p>{text}</p>
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <div className={`nm-inset ${styles.note}`} data-reveal>
          <span className={styles.mark} aria-hidden="true">
            &ldquo;
          </span>
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
