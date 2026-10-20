import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'light'
export type ButtonSize = 'md' | 'sm'

/** Shared by Button, ButtonLink and router <Link>s so every call to action renders identically. */
export function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
): string {
  return [styles.button, styles[variant], size === 'sm' ? styles.small : undefined, className]
    .filter(Boolean)
    .join(' ')
}
