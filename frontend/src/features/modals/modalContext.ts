import { createContext } from 'react'
import type { ModalId } from './modalTypes'

export interface ModalContextValue {
  activeModal: ModalId | null
  openModal: (id: ModalId) => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextValue | null>(null)
