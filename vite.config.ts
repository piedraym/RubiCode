import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { EMAIL, SITE_URL, WHATSAPP_NUMBER } from './src/config.ts'

// Injects site URL and LocalBusiness JSON-LD into index.html from src/config.ts,
// so contact details live in a single place.
function seo(): Plugin {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'RubikCode',
    description:
      'Freelance web development studio building fast, bilingual websites for local businesses in Miami.',
    url: `${SITE_URL}/`,
    email: EMAIL,
    telephone: `+${WHATSAPP_NUMBER}`,
    image: `${SITE_URL}/favicon.svg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Miami, FL' },
      { '@type': 'AdministrativeArea', name: 'Miami-Dade County, FL' },
    ],
    founder: { '@type': 'Person', name: 'Maite', jobTitle: 'Senior Software Engineer' },
    knowsLanguage: ['en', 'es'],
  }

  return {
    name: 'rubikcode-seo',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return {
          html: html.replaceAll('%SITE_URL%', SITE_URL),
          tags: [
            {
              tag: 'script',
              attrs: { type: 'application/ld+json' },
              children: JSON.stringify(jsonLd),
              injectTo: 'head',
            },
          ],
        }
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
})
