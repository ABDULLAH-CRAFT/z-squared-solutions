import { BadgeCheck, Briefcase, Cloud, HeartPulse, Network, Users, Workflow, type LucideIcon } from 'lucide-react'

export interface Industry {
  title: string
  text: string
  Icon: LucideIcon
}

export const industries: readonly Industry[] = [
  {
    title: 'SaaS and software companies',
    text: 'Reaching the buyers and decision makers who evaluate and purchase software.',
    Icon: Cloud,
  },
  {
    title: 'IT consulting and technology services',
    text: 'Opening conversations with organisations that need technology expertise.',
    Icon: Network,
  },
  {
    title: 'Microsoft Solutions Partners',
    text: 'Building pipeline across Microsoft solution areas for partner businesses.',
    Icon: BadgeCheck,
  },
  {
    title: 'IT staffing and recruitment firms',
    text: 'Business development support to start conversations with hiring companies.',
    Icon: Users,
  },
  {
    title: 'Healthcare staffing companies',
    text: 'Targeted outreach to reach decision makers at healthcare employers.',
    Icon: HeartPulse,
  },
  {
    title: 'Business technology and digital transformation providers',
    text: 'Connecting providers with organisations planning technology change.',
    Icon: Workflow,
  },
  {
    title: 'B2B service companies',
    text: 'Outbound sales development for service businesses that win clients through relationships and direct conversations.',
    Icon: Briefcase,
  },
]
