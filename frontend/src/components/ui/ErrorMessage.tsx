import { Button } from './Button'
import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
  message: string
  /** When provided, a retry button is shown. */
  onRetry?: () => void
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className={styles.box} role="alert">
      <p className={styles.message}>{message}</p>
      {onRetry ? (
        <Button variant="secondary" size="sm" onClick={onRetry}>
          Try again
        </Button>
      ) : null}
    </div>
  )
}
