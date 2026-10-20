import styles from './Loader.module.css'

interface LoaderProps {
  label?: string
}

export function Loader({ label = 'Loading' }: LoaderProps) {
  return (
    <span className={styles.loader} role="status">
      <span className="spinner-dot" aria-hidden="true" />
      <span>{label}</span>
    </span>
  )
}
