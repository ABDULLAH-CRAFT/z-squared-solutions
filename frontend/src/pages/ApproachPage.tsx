import type { CSSProperties } from 'react'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { CtaBand } from '@/components/ui/CtaBand'
import { approachSteps } from '@/features/approach/steps'
import { usePageTitle } from '@/hooks/usePageTitle'
import { trackPointer } from '@/lib/pointer'
import styles from '@/features/approach/ApproachPage.module.css'

export function ApproachPage() {
  usePageTitle('Our Approach')

  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title={
          <>
            Six steps from <span className="gradient-text">strategy to conversation.</span>
          </>
        }
        lead="A clear, repeatable process that keeps research first and keeps you informed at every stage."
      />

      <Section>
        <ol className={styles.timeline} aria-label="Our six-step approach">
          {approachSteps.map(({ name, text, Icon }, index) => (
            <li
              key={name}
              className={`${styles.step} ${index % 2 === 1 ? styles.right : ''}`}
            >
              <div className={styles.node} aria-hidden="true" data-reveal="scale">
                <span className={styles.stepNumber}>{index + 1}</span>
              </div>
              <div
                className={`nm-raised spotlight ${styles.card}`}
                data-reveal={index % 2 === 1 ? 'right' : 'left'}
                style={{ '--reveal-delay': '80ms' } as CSSProperties}
                onPointerMove={trackPointer}
              >
                <span className={styles.bigNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.stepIcon} aria-hidden="true">
                  <Icon size={22} />
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
