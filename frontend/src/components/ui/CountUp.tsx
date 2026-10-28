import { useEffect, useState } from 'react'
import { useInView } from '@/hooks/useInView'

interface CountUpProps {
  to: number
  duration?: number
}

/** Counts from 0 to `to` when scrolled into view. Shows the final number immediately for reduced motion. */
export function CountUp({ to, duration = 1400 }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5)
  const [value, setValue] = useState(0)
  const [reduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (!inView || reduceMotion) return
    let frame = 0
    const start = performance.now()

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(to * eased))
      if (progress < 1) frame = window.requestAnimationFrame(tick)
    }
    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [inView, reduceMotion, to, duration])

  return <span ref={ref}>{reduceMotion ? to : value}</span>
}
