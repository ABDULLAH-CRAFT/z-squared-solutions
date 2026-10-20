import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { ModalContext } from './modalContext'
import type { ModalId } from './modalTypes'

/** One provider, so hero buttons, header and footer all open the same modal instances. */
export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalId | null>(null)

  const openModal = useCallback((id: ModalId) => {
    setActiveModal(id)
  }, [])
  const closeModal = useCallback(() => {
    setActiveModal(null)
  }, [])

  const value = useMemo(
    () => ({ activeModal, openModal, closeModal }),
    [activeModal, openModal, closeModal],
  )

  return <ModalContext value={value}>{children}</ModalContext>
}
