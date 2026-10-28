import {
  Crosshair,
  Globe,
  Handshake,
  MapPin,
  MessageSquare,
  Scaling,
  ShieldCheck,
  Target,
  UserSearch,
} from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/layout/SectionHeading'
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
            Practical, research-led and <span className="gradient-text">relationship-focused.</span>
          </>
        }
        lead="Z Squared Solutions helps B2B technology, Microsoft solutions, IT staffing and healthcare staffing businesses build pipeline through targeted prospecting."
      />

      <Section>
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A partner that works like <span className="accent-text">part of your team.</span>
            </>
          }
        />
        <CardGrid label="How we work" columns={3}>
          <FeatureCard icon={Target} title="Targeted prospecting" index={0}>
            <p>We focus on the companies and contacts that fit your ideal customer profile.</p>
          </FeatureCard>
          <FeatureCard icon={Crosshair} title="Industry-specific outreach" index={1}>
            <p>Messaging shaped around your sector, so it speaks to how your buyers think.</p>
          </FeatureCard>
          <FeatureCard icon={UserSearch} title="Decision-maker identification" index={2}>
            <p>We research who actually makes or influences the buying decision.</p>
          </FeatureCard>
          <FeatureCard icon={Scaling} title="Flexible and scalable support" index={3}>
            <p>Support that can start focused and grow as your needs and markets grow.</p>
          </FeatureCard>
          <FeatureCard icon={MessageSquare} title="Clear communication" index={4}>
            <p>You know what is being done, why it is being done and what we are learning.</p>
          </FeatureCard>
          <FeatureCard icon={Handshake} title="Partnership approach" index={5}>
            <p>We act as an extension of your sales team, not a distant vendor.</p>
          </FeatureCard>
          <FeatureCard icon={Globe} title="International B2B support" wide index={0}>
            <p>
              Our outreach is built for international B2B work, with a focus on the{' '}
              {site.markets.join(', ')}.
            </p>
          </FeatureCard>
        </CardGrid>
      </Section>

      <Section label="Registration and markets">
        <div className={styles.facts}>
          <article className={styles.factDark} data-reveal="left">
            <div className={`orb orb-red ${styles.factGlow}`} aria-hidden="true" />
            <span className={styles.factIcon} aria-hidden="true">
              <ShieldCheck size={26} />
            </span>
            <h2 className={styles.factTitle}>MSME registration</h2>
            <p>
              Z Squared Solutions is MSME registered in India. MSME registration is a government
              registration of the business. It is not an endorsement or certification of service
              quality.
            </p>
          </article>
          <article className={`nm-raised ${styles.fact}`} data-reveal="right">
            <span className={`${styles.factIcon} ${styles.factIconRed}`} aria-hidden="true">
              <MapPin size={26} />
            </span>
            <h2 className={`${styles.factTitle} ${styles.factTitleDark}`}>Target markets</h2>
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
