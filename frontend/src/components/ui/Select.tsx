import { useId, type SelectHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
  label: string
  error?: string
  placeholder: string
  options: readonly string[]
}

export function Select({ label, error, placeholder, options, className, ...rest }: SelectProps) {
  const id = useId()
  const errorId = `${id}-error`
  const classes = [styles.input, error ? styles.invalid : undefined, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <select
        {...rest}
        id={id}
        className={classes}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
