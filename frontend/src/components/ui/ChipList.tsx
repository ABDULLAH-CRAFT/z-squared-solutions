import { Check } from 'lucide-react'
import styles from './ChipList.module.css'

interface ChipListProps {
  items: readonly string[]
  label: string
}

export function ChipList({ items, label }: ChipListProps) {
  return (
    <ul className={styles.list} aria-label={label}>
      {items.map((item) => (
        <li key={item} className={styles.chip}>
          <Check size={14} aria-hidden="true" className={styles.check} />
          {item}
        </li>
      ))}
    </ul>
  )
}
