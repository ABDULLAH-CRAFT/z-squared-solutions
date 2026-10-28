import { Outlet } from 'react-router-dom'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { Footer } from './Footer'
import { Header } from './Header'
import styles from './Layout.module.css'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  useRevealOnScroll()

  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" className={styles.main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
