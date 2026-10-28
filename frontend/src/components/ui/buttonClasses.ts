import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'light' | 'ghost'
export type ButtonSize = 'md' | 'sm' | 'lg'

/** Shared by Button, ButtonLink and router <Link>s so every call to action renders identically. */
export function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
): string {
  return [
    styles.button,
    styles[variant],
    size === 'sm' ? styles.small : undefined,
    size === 'lg' ? styles.large : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')
}
