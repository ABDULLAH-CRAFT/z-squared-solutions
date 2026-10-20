import { Handshake, Lightbulb, RefreshCw, Search, Send, UserCheck } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { CtaBand } from '@/components/ui/CtaBand'
import { usePageTitle } from '@/hooks/usePageTitle'
import styles from '@/features/approach/ApproachPage.module.css'

const steps = [
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
] as const

export function ApproachPage() {
  usePageTitle('Our Approach')

  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title={
          <>
            Six steps from <span className={styles.accent}>strategy to conversation.</span>
          </>
        }
        lead="A clear, repeatable process that keeps research first and keeps you informed at every stage."
      />

      <Section>
        <ol className={styles.timeline} aria-label="Our six-step approach">
          {steps.map(({ name, text, Icon }, index) => (
            <li key={name} className={styles.step}>
              <div className={styles.node} aria-hidden="true">
                <span className={styles.stepNumber}>{index + 1}</span>
              </div>
              <div className={`nm-raised ${styles.card}`}>
                <span className={styles.stepIcon} aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h2 className={styles.stepTitle}>
                  <span className="visually-hidden">Step {index + 1}: </span>
                  {name}
                </h2>
                <p className={styles.stepText}>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <CtaBand
          title="Ready for step one?"
          text="Start with a conversation about your services, ideal customers and goals."
        />
      </Section>
    </>
  )
}
