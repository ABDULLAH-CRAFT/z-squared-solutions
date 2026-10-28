import { Check, Mail } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { site } from '@/config/site'
import { ContactForm } from '@/features/contact/ContactForm.tsx'
import { usePageTitle } from '@/hooks/usePageTitle'
import styles from '@/features/contact/ContactPage.module.css'

const shareItems = [
  'Your business and what you offer',
  'Your target market',
  'Your growth objectives',
] as const

export function ContactPage() {
  usePageTitle('Contact')

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Build Your Next <span className="gradient-text">Growth Opportunity.</span>
          </>
        }
        lead="Tell us about your business, target market, and growth objectives. Let's explore how targeted lead generation and sales development can support your next stage of growth."
      />

      <Section>
        <div className={styles.layout}>
          <aside className={styles.aside} aria-label="Email us directly" data-reveal="left">
            <div className={`orb orb-red ${styles.glow}`} aria-hidden="true" />
            <span className={styles.iconWrap} aria-hidden="true">
              <Mail size={24} />
            </span>
            <h2 className={styles.asideTitle}>Prefer email?</h2>
            <p>
              Write to us at{' '}
              <a className={styles.email} href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>

            <p className={styles.shareLabel}>Helpful to share:</p>
            <ul className={styles.share}>
              {shareItems.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <ButtonLink
              variant="light"
              href={`mailto:${site.email}?subject=${encodeURIComponent('Enquiry from the Z Squared Solutions website')}`}
            >
              Start a conversation by email
            </ButtonLink>
          </aside>

          <div data-reveal="right">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}
