import { Mail } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { site } from '@/config/site'
import { ContactForm } from '@/features/contact/ContactForm.tsx'
import { usePageTitle } from '@/hooks/usePageTitle'
import styles from '@/features/contact/ContactPage.module.css'

export function ContactPage() {
  usePageTitle('Contact')

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Build Your Next <span className={styles.accent}>Growth Opportunity.</span>
          </>
        }
        lead="Tell us about your business, target market, and growth objectives. Let's explore how targeted lead generation and sales development can support your next stage of growth."
      />

      <Section>
        <div className={styles.layout}>
          <aside className={`nm-inset ${styles.aside}`} aria-label="Email us directly">
            <span className={styles.iconWrap} aria-hidden="true">
              <Mail size={22} />
            </span>
            <h2 className={styles.asideTitle}>Prefer email?</h2>
            <p>
              Write to us at{' '}
              <a className={styles.email} href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
            <ButtonLink
              href={`mailto:${site.email}?subject=${encodeURIComponent('Enquiry from the Z Squared Solutions website')}`}
            >
              Start a conversation by email
            </ButtonLink>
          </aside>

          <ContactForm />
        </div>
      </Section>
    </>
  )
}
