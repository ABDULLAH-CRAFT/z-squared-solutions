import { Hero } from '@/features/home/Hero'
import { MarketStrip } from '@/features/home/MarketStrip'
import { WhoWeAre } from '@/features/home/WhoWeAre'

export function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <MarketStrip />
    </>
  )
}
