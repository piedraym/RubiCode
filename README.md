# RubikCode

Website for RubikCode, a freelance web development studio building sites for local businesses in Miami (salons, barbershops, dental clinics…). Single-page, bilingual site (English / Spanish).

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · lucide-react

## Getting started

Requirements: Node.js (and npm).

```bash
npm install     # first time only, or after changing dependencies
npm run dev     # dev server at http://localhost:5173
```

## Scripts

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Development server with hot reload                        |
| `npm run build`   | Type check (`tsc`) + production build into `dist/`        |
| `npm run preview` | Serves `dist/` locally to review the production build     |

## Project structure

```
index.html              # Base HTML (SEO, meta tags; %SITE_URL% is replaced at build time)
vite.config.ts          # Vite plugins + `seo()` plugin that injects the JSON-LD
public/                 # Static assets: favicon and hero images
src/
  main.tsx              # Entry point
  App.tsx               # Page sections layout
  config.ts             # Contact details (WhatsApp, email, site URL)
  index.css             # Global styles / Tailwind theme
  components/           # Header, Hero, Services, About, Projects, Process, Contact, Footer…
  i18n/
    translations.ts     # English and Spanish copy
    LanguageContext.tsx # Language context (persisted in localStorage)
```

## Configuration

- **Contact details:** edit `src/config.ts`. It is the single source of truth; both the app and the JSON-LD in `index.html` (via `vite.config.ts`) read from it.
- **Copy:** edit `src/i18n/translations.ts`. Any new key must be added in both languages (`en` and `es`).

## Deployment

`npm run build` outputs a static site to `dist/` that can be deployed to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages…).
