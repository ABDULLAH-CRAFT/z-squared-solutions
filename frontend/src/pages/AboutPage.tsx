import {
  Crosshair,
  Globe,
  Handshake,
  MessageSquare,
  Scaling,
  Target,
  UserSearch,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { CardGrid } from '@/components/ui/CardGrid'
import { CtaBand } from '@/components/ui/CtaBand'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { site } from '@/config/site'
import { usePageTitle } from '@/hooks/usePageTitle'
import styles from '@/features/about/AboutPage.module.css'

export function AboutPage() {
  usePageTitle('About Us')

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Practical, research-led and <span className={styles.accent}>relationship-focused.</span>
          </>
        }
        lead="Z Squared Solutions helps B2B technology, Microsoft solutions, IT staffing and healthcare staffing businesses build pipeline through targeted prospecting."
      />

      <Section>
        <CardGrid label="How we work" columns={3}>
          <FeatureCard icon={Target} title="Targeted prospecting">
            <p>We focus on the companies and contacts that fit your ideal customer profile.</p>
          </FeatureCard>
          <FeatureCard icon={Crosshair} title="Industry-specific outreach">
            <p>Messaging shaped around your sector, so it speaks to how your buyers think.</p>
          </FeatureCard>
          <FeatureCard icon={UserSearch} title="Decision-maker identification">
            <p>We research who actually makes or influences the buying decision.</p>
          </FeatureCard>
          <FeatureCard icon={Scaling} title="Flexible and scalable support">
            <p>Support that can start focused and grow as your needs and markets grow.</p>
          </FeatureCard>
          <FeatureCard icon={MessageSquare} title="Clear communication">
            <p>You know what is being done, why it is being done and what we are learning.</p>
          </FeatureCard>
          <FeatureCard icon={Handshake} title="Partnership approach">
            <p>We act as an extension of your sales team, not a distant vendor.</p>
          </FeatureCard>
          <FeatureCard icon={Globe} title="International B2B support" wide>
            <p>
              Our outreach is built for international B2B work, with a focus on the{' '}
              {site.markets.join(', ')}.
            </p>
          </FeatureCard>
        </CardGrid>
      </Section>

      <Section label="Registration and markets">
        <div className={styles.facts}>
          <article className={`nm-raised ${styles.fact}`}>
            <h2 className={styles.factTitle}>MSME registration</h2>
            <p>
              Z Squared Solutions is MSME registered in India. MSME registration is a government
              registration of the business. It is not an endorsement or certification of service
              quality.
            </p>
          </article>
          <article className={`nm-raised ${styles.fact}`}>
            <h2 className={styles.factTitle}>Target markets</h2>
            <p>
              The United States, United Kingdom, Australia and Dubai &amp; UAE are the markets we
              target. They are not necessarily office locations.
            </p>
          </article>
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Let's talk about your growth goals."
          text="Share your business, target market and objectives, and we will explore how we can support you."
        />
      </Section>
    </>
  )
}
