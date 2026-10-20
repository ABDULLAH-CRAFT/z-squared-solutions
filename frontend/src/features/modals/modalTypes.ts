export const MODAL_IDS = ['services', 'industries', 'approach', 'about', 'contact'] as const

export type ModalId = (typeof MODAL_IDS)[number]
