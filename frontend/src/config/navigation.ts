import type { ModalId } from '@/features/modals/modalTypes'

export interface ModalNavItem {
  label: string
  modal: ModalId
}

/** Order matches the specified navigation: Home, Services, Industries, Our Approach, About Us, Contact. */
export const modalNavItems: readonly ModalNavItem[] = [
  { label: 'Services', modal: 'services' },
  { label: 'Industries', modal: 'industries' },
  { label: 'Our Approach', modal: 'approach' },
  { label: 'About Us', modal: 'about' },
  { label: 'Contact', modal: 'contact' },
]
