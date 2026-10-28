import { Handshake, Lightbulb, RefreshCw, Search, Send, UserCheck, type LucideIcon } from 'lucide-react'

export interface ApproachStep {
  name: string
  text: string
  Icon: LucideIcon
}

export const approachSteps: readonly ApproachStep[] = [
  {
    name: 'Understand',
    text: 'We learn your services, ideal customers, target geography and goals.',
    Icon: Lightbulb,
  },
  {
    name: 'Research',
    text: 'We identify target companies and the decision makers within them.',
    Icon: Search,
  },
  {
    name: 'Engage',
    text: 'We start targeted outreach through the channels we agree with you.',
    Icon: Send,
  },
  {
    name: 'Qualify',
    text: 'We evaluate responses and assess how well each prospect fits.',
    Icon: UserCheck,
  },
  {
    name: 'Connect',
    text: 'We coordinate qualified sales conversations and appointments for your team.',
    Icon: Handshake,
  },
  {
    name: 'Improve',
    text: 'We review feedback, measure the indicators we agreed and refine the approach.',
    Icon: RefreshCw,
  },
]
