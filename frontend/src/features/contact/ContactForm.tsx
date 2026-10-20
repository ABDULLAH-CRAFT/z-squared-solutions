import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import {
  LIMITS,
  buildMailtoUrl,
  emptyContact,
  marketOptions,
  serviceOptions,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from './contactForm'
import styles from './ContactForm.module.css'

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyContact)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [mailtoUrl, setMailtoUrl] = useState<string | null>(null)

  function update(field: keyof ContactValues) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => ({ ...current, [field]: undefined }))
      setMailtoUrl(null)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validateContact(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setMailtoUrl(null)
      return
    }
    const url = buildMailtoUrl(values)
    setMailtoUrl(url)
    // Opens the visitor's email application. Nothing has been sent at this point.
    window.location.href = url
  }

  return (
    <form className={`nm-raised ${styles.form}`} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <Input
          label="Name"
          name="name"
          autoComplete="name"
          maxLength={LIMITS.name + 20}
          value={values.name}
          onChange={update('name')}
          error={errors.name}
        />
        <Input
          label="Business email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={update('email')}
          error={errors.email}
        />
      </div>

      <Input
        label="Company name"
        name="company"
        autoComplete="organization"
        value={values.company}
        onChange={update('company')}
        error={errors.company}
      />

      <div className={styles.row}>
        <Select
          label="Service of interest"
          name="service"
          placeholder="Select a service"
          options={serviceOptions}
          value={values.service}
          onChange={update('service')}
          error={errors.service}
        />
        <Select
          label="Target market"
          name="market"
          placeholder="Select a market"
          options={marketOptions}
          value={values.market}
          onChange={update('market')}
          error={errors.market}
        />
      </div>

      <Textarea
        label="Message"
        name="message"
        hint={`${values.message.trim().length} / ${LIMITS.message} characters`}
        value={values.message}
        onChange={update('message')}
        error={errors.message}
      />

      <Button type="submit">Prepare my enquiry</Button>

      <div className={styles.status} role="status" aria-live="polite">
        {mailtoUrl ? (
          <p className={styles.notice}>
            <strong>Your enquiry has not been sent yet.</strong> We have opened your email
            application with your details filled in. Please review it and press send there. If
            nothing opened,{' '}
            <a href={mailtoUrl}>open the prepared email</a> or write to us directly.
          </p>
        ) : (
          <p className={styles.helper}>
            This form prepares an email in your own email application. Nothing is sent
            automatically.
          </p>
        )}
      </div>
    </form>
  )
}
