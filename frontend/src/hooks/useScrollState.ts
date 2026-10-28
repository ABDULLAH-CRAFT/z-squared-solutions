import { useEffect, useState } from 'react'

/** True once the page has scrolled past `threshold` pixels. Used for the header's compact state. */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function update() {
      setScrolled(window.scrollY > threshold)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return scrolled
}
