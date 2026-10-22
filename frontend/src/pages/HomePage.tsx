import { Section } from '@/components/layout/Section'
import { CtaBand } from '@/components/ui/CtaBand'
import { Hero } from '@/features/home/Hero'
import { HomeBento } from '@/features/home/HomeBento'
import { HomeMarkets } from '@/features/home/HomeMarkets'
import { HomeServices } from '@/features/home/HomeServices'
import { usePageTitle } from '@/hooks/usePageTitle'

export function HomePage() {
  usePageTitle()
  return (
    <>
      <Hero />
      <HomeBento />
      <HomeServices />
      <HomeMarkets />
      <Section>
        <CtaBand
          title="Ready to reach the right decision makers?"
          text="Tell us about your business and target market, and we will explore where targeted outreach can support your growth."
        />
      </Section>
    </>
  )
}
