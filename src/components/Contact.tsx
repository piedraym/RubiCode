import { useState, type FormEvent, type ReactNode } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { EMAIL, WHATSAPP_DISPLAY, whatsappUrl } from '../config'
import { useLanguage } from '../i18n/LanguageContext'
import type { ServiceKey } from '../i18n/translations'
import { SectionHeading } from './SectionHeading'
import { WhatsAppIcon } from './WhatsAppIcon'

type ServiceChoice = ServiceKey | 'unsure' | ''
type Fields = { name: string; business: string; phone: string; service: ServiceChoice; message: string }
type ErrorKey = 'name' | 'phone' | 'service'

const EMPTY: Fields = { name: '', business: '', phone: '', service: '', message: '' }
const SERVICE_KEYS: ServiceKey[] = ['new', 'booking', 'redesign', 'google']

function validate(f: Fields): Partial<Record<ErrorKey, true>> {
  const errors: Partial<Record<ErrorKey, true>> = {}
  if (!f.name.trim()) errors.name = true
  const digits = f.phone.replace(/\D/g, '')
  if (digits.length < 7 || digits.length > 15) errors.phone = true
  if (!f.service) errors.service = true
  return errors
}

const inputClass =
  'mt-1.5 block w-full rounded-lg border border-line bg-page px-3.5 py-2.5 text-ink placeholder:text-muted/80 aria-[invalid=true]:border-red-600 dark:aria-[invalid=true]:border-red-400'

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {hint && <span className="font-normal text-muted"> ({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700 dark:text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const { t } = useLanguage()
  const f = t.contact.form
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, true>>>({})

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const serviceLabel = (s: ServiceChoice) => (s === 'unsure' ? f.unsure : s ? t.services.items[s].title : '')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    const firstInvalid = (['name', 'phone', 'service'] as const).find((k) => found[k])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    const m = t.contact.waMessage
    const lines = [
      `${m.greeting} ${fields.name.trim()}.`,
      fields.business.trim() && `${m.business} ${fields.business.trim()}`,
      `${m.service} ${serviceLabel(fields.service)}`,
      `${m.phone} ${fields.phone.trim()}`,
      fields.message.trim() && `\n${fields.message.trim()}`,
    ].filter(Boolean)

    window.open(whatsappUrl(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  const describedBy = (k: ErrorKey) => (errors[k] ? `contact-${k}-error` : undefined)

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading id="contact-title" label={t.contact.label} title={t.contact.title}>
            <p className="mt-4 text-lg leading-relaxed text-muted">{t.contact.sub}</p>
          </SectionHeading>

          <dl className="mt-10 space-y-6">
            <div className="flex gap-4">
              <dt className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-g4/50 text-accent dark:bg-g4/10">
                <WhatsAppIcon className="size-5" />
                <span className="sr-only">{t.contact.whatsapp}</span>
              </dt>
              <dd>
                <span className="block font-mono text-xs tracking-[0.12em] text-muted uppercase" aria-hidden>
                  {t.contact.whatsapp}
                </span>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="rounded text-lg font-semibold hover:text-accent">
                  {WHATSAPP_DISPLAY}
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-g4/50 text-accent dark:bg-g4/10">
                <Mail className="size-5" strokeWidth={1.75} aria-hidden />
                <span className="sr-only">{t.contact.email}</span>
              </dt>
              <dd>
                <span className="block font-mono text-xs tracking-[0.12em] text-muted uppercase" aria-hidden>
                  {t.contact.email}
                </span>
                <a href={`mailto:${EMAIL}`} className="rounded text-lg font-semibold break-all hover:text-accent">
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-g4/50 text-accent dark:bg-g4/10">
                <MapPin className="size-5" strokeWidth={1.75} aria-hidden />
                <span className="sr-only">{t.contact.area}</span>
              </dt>
              <dd>
                <span className="block font-mono text-xs tracking-[0.12em] text-muted uppercase" aria-hidden>
                  {t.contact.area}
                </span>
                <span className="text-lg font-semibold">{t.contact.areaValue}</span>
              </dd>
            </div>
          </dl>
        </div>

        <form noValidate onSubmit={onSubmit} className="rounded-2xl border border-line bg-card p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="contact-name" label={f.name} error={errors.name && f.errors.name}>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                value={fields.name}
                onChange={(e) => set('name', e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={describedBy('name')}
                className={inputClass}
              />
            </Field>
            <Field id="contact-business" label={f.business} hint={f.optional}>
              <input
                id="contact-business"
                name="business"
                autoComplete="organization"
                placeholder={f.businessPlaceholder}
                value={fields.business}
                onChange={(e) => set('business', e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field id="contact-phone" label={f.phone} error={errors.phone && f.errors.phone}>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                placeholder="(305) 000-0000"
                value={fields.phone}
                onChange={(e) => set('phone', e.target.value)}
                aria-invalid={!!errors.phone}
                aria-describedby={describedBy('phone')}
                className={inputClass}
              />
            </Field>
            <Field id="contact-service" label={f.service} error={errors.service && f.errors.service}>
              <select
                id="contact-service"
                name="service"
                required
                value={fields.service}
                onChange={(e) => set('service', e.target.value as ServiceChoice)}
                aria-invalid={!!errors.service}
                aria-describedby={describedBy('service')}
                className={inputClass}
              >
                <option value="" disabled>
                  {f.servicePlaceholder}
                </option>
                {SERVICE_KEYS.map((k) => (
                  <option key={k} value={k}>
                    {t.services.items[k].title}
                  </option>
                ))}
                <option value="unsure">{f.unsure}</option>
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field id="contact-message" label={f.message} hint={f.optional}>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder={f.messagePlaceholder}
                  value={fields.message}
                  onChange={(e) => set('message', e.target.value)}
                  className={`${inputClass} resize-y`}
                />
              </Field>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-btn px-5 py-3 font-semibold text-white transition-colors hover:bg-btn-hover sm:w-auto"
          >
            <Send className="size-4" aria-hidden />
            {f.submit}
          </button>
          <p className="mt-3 text-sm text-muted">{f.submitNote}</p>
        </form>
      </div>
    </section>
  )
}
