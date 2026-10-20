import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Pages are separate routes, so reset the scroll position when navigating between them. */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
