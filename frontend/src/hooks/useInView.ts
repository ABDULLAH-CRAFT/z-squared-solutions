import { useEffect, useRef, useState } from 'react'

/** Reports whether an element has entered the viewport (once). */
export function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(() => !('IntersectionObserver' in window))

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
