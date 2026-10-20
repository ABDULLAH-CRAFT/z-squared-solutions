import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'md' | 'sm'

/** Shared by Button and ButtonLink so both render identically. */
export function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
): string {
  return [styles.button, styles[variant], size === 'sm' ? styles.small : undefined, className]
    .filter(Boolean)
    .join(' ')
}
