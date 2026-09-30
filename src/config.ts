// Single source of truth for contact details. Used by the app and by the
// JSON-LD injected into index.html at build time (see vite.config.ts).

/** WhatsApp number in international format, digits only (country code + number). */
export const WHATSAPP_NUMBER = '17864053462'

export const EMAIL = 'hola@rubikcode.dev'

export const SITE_URL = 'https://rubikcode.dev'

/** "17864053462" -> "(786) 405-3462" */
export function formatUSPhone(digits: string): string {
  const d = digits.replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '')
  return d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : digits
}

export const WHATSAPP_DISPLAY = formatUSPhone(WHATSAPP_NUMBER)

export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
