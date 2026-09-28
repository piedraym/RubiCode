# RubikCode

Web de RubikCode, estudio freelance de desarrollo web para negocios locales en Miami (salones, barberías, clínicas dentales…). Sitio de una sola página, bilingüe (inglés / español).

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · lucide-react

## Arrancar el proyecto

Requisitos: Node.js (y npm).

```bash
npm install     # solo la primera vez o tras cambiar dependencias
npm run dev     # servidor de desarrollo en http://localhost:5173
```

## Scripts

| Comando           | Qué hace                                                    |
| ----------------- | ----------------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga en caliente              |
| `npm run build`   | Chequeo de tipos (`tsc`) + build de producción en `dist/`   |
| `npm run preview` | Sirve `dist/` en local para revisar la build final          |

## Estructura

```
index.html              # HTML base (SEO, meta tags; %SITE_URL% se reemplaza en build)
vite.config.ts          # Plugins de Vite + plugin `seo()` que inyecta el JSON-LD
public/                 # Estáticos: favicon e imágenes del hero
src/
  main.tsx              # Punto de entrada
  App.tsx               # Composición de secciones de la página
  config.ts             # Datos de contacto (WhatsApp, email, URL del sitio)
  index.css             # Estilos globales / tema de Tailwind
  components/           # Header, Hero, Services, About, Projects, Process, Contact, Footer…
  i18n/
    translations.ts     # Textos en inglés y español
    LanguageContext.tsx # Contexto de idioma (se guarda en localStorage)
```

## Configuración

- **Datos de contacto:** edita `src/config.ts`. Es la única fuente de verdad; la app y el JSON-LD de `index.html` (vía `vite.config.ts`) los leen de ahí.
- **Textos:** edita `src/i18n/translations.ts`. Cualquier clave nueva debe añadirse en ambos idiomas (`en` y `es`).

## Despliegue

`npm run build` genera un sitio estático en `dist/` que se puede subir a cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages…).
