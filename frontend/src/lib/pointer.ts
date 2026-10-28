import type { PointerEvent } from 'react'

/** Writes the pointer position (relative to the element) into --mx / --my for the spotlight effect. */
export function trackPointer(event: PointerEvent<HTMLElement>): void {
  const element = event.currentTarget
  const rect = element.getBoundingClientRect()
  element.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  element.style.setProperty('--my', `${event.clientY - rect.top}px`)
}
