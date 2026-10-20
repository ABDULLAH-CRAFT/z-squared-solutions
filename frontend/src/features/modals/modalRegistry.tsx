import type { ComponentType } from 'react'
import {
  AboutModalContent,
  ApproachModalContent,
  ContactModalContent,
  IndustriesModalContent,
  ServicesModalContent,
} from './modalContent'
import type { ModalId } from './modalTypes'

export interface ModalDefinition {
  title: string
  Content: ComponentType
}

/** Typed registry: adding a ModalId without an entry here is a compile error. */
export const modalRegistry: Record<ModalId, ModalDefinition> = {
  services: { title: 'Services', Content: ServicesModalContent },
  industries: { title: 'Industries', Content: IndustriesModalContent },
  approach: { title: 'Our Approach', Content: ApproachModalContent },
  about: { title: 'About Us', Content: AboutModalContent },
  contact: { title: "Let's Build Your Next Growth Opportunity.", Content: ContactModalContent },
}
