import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buttonClasses } from '@/components/ui/buttonClasses'
import { usePageTitle } from '@/hooks/usePageTitle'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  usePageTitle('Page not found')

  return (
    <section className={styles.page}>
      <div className="bg-grid" aria-hidden="true" />
      <div className={`orb orb-red ${styles.orb}`} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>The page you are looking for does not exist.</p>
        <Link to="/" className={buttonClasses('primary', 'lg')}>
          Back to the homepage
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
