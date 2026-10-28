import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Fades elements in as they scroll into view.
 * Any element with a data-reveal attribute is observed; set style --reveal-delay for staggering.
 * Runs on every route change so each page animates in. Skips animation when the visitor
 * prefers reduced motion or the browser has no IntersectionObserver.
 */
export function useRevealOnScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      root.classList.add('no-reveal')
      return
    }
    root.classList.remove('no-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    document.querySelectorAll('[data-reveal]:not([data-revealed])').forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])
}
