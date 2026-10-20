import styles from './Logo.module.css'

interface LogoProps {
  /** Hide the text wordmark and show only the Z² mark. */
  markOnly?: boolean
  /** Use "light" on dark (navy) backgrounds. */
  tone?: 'default' | 'light'
}

export function Logo({ markOnly = false, tone = 'default' }: LogoProps) {
  const classes = [styles.logo, tone === 'light' ? styles.light : undefined]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes}>
      <svg className={styles.mark} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="14" fill="currentColor" />
        <text x="29" y="43" textAnchor="middle" className={styles.z}>
          Z
        </text>
        <text x="48" y="30" textAnchor="middle" className={styles.two}>
          2
        </text>
      </svg>
      {markOnly ? (
        <span className="visually-hidden">Z Squared Solutions</span>
      ) : (
        <span className={styles.wordmark}>Z Squared Solutions</span>
      )}
    </span>
  )
}
