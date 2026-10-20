import { Modal } from '@/components/ui/Modal'
import { modalRegistry } from './modalRegistry'
import { useModal } from './useModal'

/** Renders the active modal. Mounted once in the layout. */
export function ModalHost() {
  const { activeModal, closeModal } = useModal()
  if (activeModal === null) return null

  const { title, Content } = modalRegistry[activeModal]
  return (
    <Modal key={activeModal} title={title} onClose={closeModal}>
      <Content />
    </Modal>
  )
}
