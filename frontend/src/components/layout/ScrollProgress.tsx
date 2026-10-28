import { useEffect, useRef } from 'react'
import styles from './ScrollProgress.module.css'

/** Thin red bar at the top of the page that fills as the visitor scrolls. */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0

    function update() {
      frame = 0
      const bar = barRef.current
      if (!bar) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      bar.style.transform = `scaleX(${progress})`
    }

    function onScroll() {
      if (frame === 0) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== 0) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className={styles.track} aria-hidden="true">
      <div ref={barRef} className={styles.bar} />
    </div>
  )
}
