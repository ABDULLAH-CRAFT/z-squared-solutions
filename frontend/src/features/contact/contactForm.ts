import { site } from '@/config/site'

export const serviceOptions = [...site.services, 'Not sure yet'] as const
export const marketOptions = [...site.markets, 'More than one market'] as const

export const LIMITS = { name: 100, email: 254, company: 120, message: 1000 } as const

export interface ContactValues {
  name: string
  email: string
  company: string
  service: string
  market: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

export const emptyContact: ContactValues = {
  name: '',
  email: '',
  company: '',
  service: '',
  market: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Returns trimmed values so the same cleaned data is validated and sent. */
export function trimContact(values: ContactValues): ContactValues {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    company: values.company.trim(),
    service: values.service,
    market: values.market,
    message: values.message.trim(),
  }
}

export function validateContact(raw: ContactValues): ContactErrors {
  const values = trimContact(raw)
  const errors: ContactErrors = {}

  if (!values.name) errors.name = 'Please enter your name.'
  else if (values.name.length > LIMITS.name) errors.name = `Please keep your name under ${LIMITS.name} characters.`

  if (!values.email) errors.email = 'Please enter your business email.'
  else if (values.email.length > LIMITS.email || !EMAIL_PATTERN.test(values.email))
    errors.email = 'Please enter a valid email address, for example name@company.com.'

  if (!values.company) errors.company = 'Please enter your company name.'
  else if (values.company.length > LIMITS.company)
    errors.company = `Please keep the company name under ${LIMITS.company} characters.`

  if (!serviceOptions.some((option) => option === values.service))
    errors.service = 'Please choose a service of interest.'

  if (!marketOptions.some((option) => option === values.market))
    errors.market = 'Please choose a target market.'

  if (!values.message) errors.message = 'Please tell us a little about your goals.'
  else if (values.message.length > LIMITS.message)
    errors.message = `Please keep your message under ${LIMITS.message} characters.`

  return errors
}

/** Builds a fully encoded mailto: URL. Nothing is sent until the visitor sends the email themselves. */
export function buildMailtoUrl(raw: ContactValues): string {
  const values = trimContact(raw)
  const subject = `Enquiry from ${values.name}, ${values.company} (${values.service})`
  const body = [
    `Name: ${values.name}`,
    `Business email: ${values.email}`,
    `Company: ${values.company}`,
    `Service of interest: ${values.service}`,
    `Target market: ${values.market}`,
    '',
    values.message,
  ].join('\r\n')

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
