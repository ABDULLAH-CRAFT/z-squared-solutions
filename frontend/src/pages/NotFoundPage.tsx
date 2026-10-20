import { Link } from 'react-router-dom'
import { buttonClasses } from '@/components/ui/buttonClasses'

export function NotFoundPage() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-8)' }}>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className={buttonClasses('primary', 'md')}>
        Back to the homepage
      </Link>
    </div>
  )
}
