import { HomeBento } from '@/features/home/HomeBento'
import { Hero } from '@/features/home/Hero'
import { usePageTitle } from '@/hooks/usePageTitle'

export function HomePage() {
  usePageTitle()
  return (
    <>
      <Hero />
      <HomeBento />
    </>
  )
}
