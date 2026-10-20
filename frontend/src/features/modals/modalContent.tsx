/*
 * Interim modal content for Phase 2 so that every navigation item opens a real, accurate modal.
 * Phase 4 replaces each component with its own dedicated file and the full specified content.
 */
import { ButtonLink } from '@/components/ui/ButtonLink'
import { site } from '@/config/site'
import styles from './ModalContent.module.css'

const services = [
  {
    name: 'SaaS Lead Generation',
    text: 'Prospect research, ideal customer profiling and targeted outreach to reach SaaS buyers.',
  },
  {
    name: 'IT Staffing Business Development',
    text: 'Decision-maker identification and outreach to open conversations with prospective IT staffing clients.',
  },
  {
    name: 'Healthcare Staffing Business Development',
    text: 'Targeted outreach and follow-up to start conversations with healthcare employers.',
  },
  {
    name: 'Microsoft Solutions Lead Generation',
    text: 'Pipeline development for Dynamics 365 Business Central, Power BI, Microsoft Fabric, SharePoint, Copilot, Dynamics 365 CRM and Sales, Teams Phone, Data and AI, cloud and business productivity solutions.',
  },
  {
    name: 'Outbound Sales Development',
    text: 'Targeted email and LinkedIn outreach, qualification, appointment setting and follow-up coordination.',
  },
]

const industries = [
  'SaaS and software companies',
  'IT consulting and technology services',
  'Microsoft Solutions Partners',
  'IT staffing and recruitment firms',
  'Healthcare staffing companies',
  'Business technology and digital transformation providers',
  'B2B service companies',
]

const approachSteps = [
  { name: 'Understand', text: 'Services, ideal customers, geography and goals.' },
  { name: 'Research', text: 'Target companies and decision makers.' },
  { name: 'Engage', text: 'Targeted outreach through agreed channels.' },
  { name: 'Qualify', text: 'Evaluate responses and prospect fit.' },
  { name: 'Connect', text: 'Coordinate qualified sales conversations and appointments.' },
  { name: 'Improve', text: 'Review feedback, measure agreed indicators and refine.' },
]

export function ServicesModalContent() {
  return (
    <ul className={styles.list}>
      {services.map((service) => (
        <li key={service.name} className={styles.item}>
          <h3>{service.name}</h3>
          <p>{service.text}</p>
        </li>
      ))}
    </ul>
  )
}

export function IndustriesModalContent() {
  return (
    <>
      <ul className={styles.plain}>
        {industries.map((industry) => (
          <li key={industry}>{industry}</li>
        ))}
      </ul>
      <p>
        Support is tailored to each business model, industry, market and sales objective.
      </p>
    </>
  )
}

export function ApproachModalContent() {
  return (
    <ol className={styles.steps}>
      {approachSteps.map((step) => (
        <li key={step.name}>
          <strong>{step.name}</strong>: {step.text}
        </li>
      ))}
    </ol>
  )
}

export function AboutModalContent() {
  return (
    <>
      <p className={styles.lead}>
        Z Squared Solutions is a practical, research-led and relationship-focused B2B growth partner.
      </p>
      <p>
        We support technology, SaaS, Microsoft solutions, IT staffing and healthcare staffing
        businesses with targeted prospecting, decision-maker identification and sales development.
      </p>
      <p>
        Z Squared Solutions is MSME registered in India. MSME registration is a government
        registration of the business. It is not an endorsement or certification of service quality.
      </p>
      <p>
        The United States, United Kingdom, Australia and Dubai &amp; UAE are the markets we target.
        They are not necessarily office locations.
      </p>
    </>
  )
}

export function ContactModalContent() {
  const subject = encodeURIComponent('Enquiry from the Z Squared Solutions website')
  return (
    <>
      <p className={styles.lead}>
        Tell us about your business, target market, and growth objectives. Let&apos;s explore how
        targeted lead generation and sales development can support your next stage of growth.
      </p>
      <p>
        Email:{' '}
        <a className={styles.email} href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <div className={styles.actions}>
        <ButtonLink href={`mailto:${site.email}?subject=${subject}`}>
          Start a conversation by email
        </ButtonLink>
      </div>
    </>
  )
}
