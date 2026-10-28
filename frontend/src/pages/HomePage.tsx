import { Section } from '@/components/layout/Section'
import { CtaBand } from '@/components/ui/CtaBand'
import { Hero } from '@/features/home/Hero'
import { HomeBento } from '@/features/home/HomeBento'
import { HomeIndustries } from '@/features/home/HomeIndustries'
import { HomeMarkets } from '@/features/home/HomeMarkets'
import { HomeMarquee } from '@/features/home/HomeMarquee'
import { HomeProcess } from '@/features/home/HomeProcess'
import { HomeServices } from '@/features/home/HomeServices'
import { usePageTitle } from '@/hooks/usePageTitle'

export function HomePage() {
  usePageTitle()
  return (
    <>
      <Hero />
      <HomeMarquee />
      <HomeBento />
      <HomeServices />
      <HomeProcess />
      <HomeMarkets />
      <HomeIndustries />
      <Section>
        <CtaBand
          title="Ready to reach the right decision makers?"
          text="Tell us about your business and target market, and we will explore where targeted outreach can support your growth."
        />
      </Section>
    </>
  )
}
