import { Briefcase, HeartPulse, LayoutGrid, Send, Sparkles, type LucideIcon } from 'lucide-react'

export interface ServiceSummary {
  title: string
  summary: string
  Icon: LucideIcon
}

/** Short service descriptions for the homepage showcase. Titles match site.services. */
export const serviceSummaries: readonly ServiceSummary[] = [
  {
    title: 'SaaS Lead Generation',
    summary:
      'We research your ideal customers, identify the decision makers who buy software like yours and open conversations through targeted outreach.',
    Icon: Sparkles,
  },
  {
    title: 'IT Staffing Business Development',
    summary:
      'Reach the hiring decision makers at companies that need technology talent and start client conversations.',
    Icon: Briefcase,
  },
  {
    title: 'Healthcare Staffing Business Development',
    summary:
      'Targeted prospecting and follow-up to reach the right contacts at healthcare employers.',
    Icon: HeartPulse,
  },
  {
    title: 'Microsoft Solutions Lead Generation',
    summary:
      'Pipeline development for Microsoft Solutions Partners across Dynamics 365, Power BI, Fabric and more.',
    Icon: LayoutGrid,
  },
  {
    title: 'Outbound Sales Development',
    summary:
      'Targeted email and LinkedIn outreach, qualification, appointment setting and follow-up, run as an extension of your sales team.',
    Icon: Send,
  },
]
