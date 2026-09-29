export type Lang = 'en' | 'es'

export type ServiceKey = 'new' | 'booking' | 'redesign' | 'google'

const en = {
  meta: {
    title: 'RubikCode — Websites for local businesses in Miami',
    description:
      'Fast, bilingual websites for salons, barbershops, dental clinics and repair shops in Miami. Online booking, WhatsApp button and Google visibility.',
  },
  skipToContent: 'Skip to content',
  nav: {
    services: 'Services',
    projects: 'Projects',
    process: 'How I work',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close menu',
    language: 'Language',
  },
  hero: {
    eyebrow: 'End-to-end website support · Miami, FL',
    headline: ['Websites that bring ', 'customers', ' to your business.'],
    sub: 'Fast, bilingual websites for local businesses in Miami — with online booking, a WhatsApp button and visibility on Google.',
    primary: 'Get your free proposal',
    secondary: 'See projects',
    note: 'Spanish or English · You work directly with me',
    carousel: {
      label: 'Local businesses I build for',
      slide: 'Slide',
      of: 'of',
      prev: 'Previous image',
      next: 'Next image',
      pause: 'Pause carousel',
      play: 'Play carousel',
      photo: 'Photo',
      slides: [
        { label: 'Hair salons', alt: 'A stylist blow-drying a client\'s hair with a round brush in a salon' },
        { label: 'Barbershops', alt: 'Barbers cutting hair for two clients in a barbershop' },
        { label: 'Dental clinics', alt: 'A bright dental office with a patient chair and equipment' },
      ],
    },
  },
  services: {
    label: 'Services',
    title: 'Everything your business needs to be found online.',
    note: 'Before we start, you get a proposal with a clear price.',
    items: {
      new: {
        title: 'New website',
        desc: 'A site built for your business from scratch, ready to turn visits into calls.',
        bullets: ['Custom design for your brand', 'Bilingual: Spanish and English', 'Fast and made for mobile'],
      },
      booking: {
        title: 'Booking & WhatsApp',
        desc: 'Let customers book or message you without having to call.',
        bullets: ['Online appointments, any time of day', 'WhatsApp button on every page', 'Connected to your calendar'],
      },
      redesign: {
        title: 'Redesign of your current site',
        desc: 'Give your current website a fresh, trustworthy look.',
        bullets: ['Modern design', 'Secure with HTTPS', 'Faster on mobile'],
      },
      google: {
        title: 'Google & maintenance',
        desc: 'Show up when people nearby search for what you do.',
        bullets: ['Google Business Profile setup', 'Local SEO for Miami', 'Monthly updates'],
      },
    } satisfies Record<ServiceKey, { title: string; desc: string; bullets: string[] }>,
  },
  about: {
    label: 'About',
    title: "Hi, I'm Maite.",
    paragraphs: [
      "I'm a software engineer with over 10 years of experience developing web and desktop applications for various platforms. I have worked for the U.S. Department of Veterans Affairs and for universities such as FIU and the University of Miami.",
      'Now I bring that same quality to local businesses. No agencies, no middlemen: you work directly with me, in Spanish or English.',
    ],
    facts: [
      { title: '10+ years', text: 'Building software with React and Ruby on Rails' },
      { title: 'Public sector', text: 'Platforms for the U.S. Department of Veterans Affairs' },
      { title: 'Higher education', text: 'Projects for FIU and the University of Miami' },
      { title: 'Bilingual', text: 'Español and English, from the first call' },
    ],
  },
  projects: {
    label: 'Projects',
    title: 'Recent work.',
    items: [
      {
        name: 'Ai Secretary',
        desc: 'An AI WhatsApp receptionist for salons and barbershops in Miami-Dade. It answers customer questions and books appointments on its own.',
        tags: ['Python', 'FastAPI', 'WhatsApp API', 'Google Calendar'],
      },
      {
        name: 'Estimations',
        desc: 'Turns client meeting transcripts into project budgets, using multiple AI models to draft and review each estimate.',
        tags: ['Python', 'FastAPI', 'LiteLLM', 'Streamlit'],
      },
    ],
    next: {
      title: 'Your business, next',
      text: "Tell me about your business and I'll show you a mockup of what your website could look like.",
      cta: 'I want my mockup',
    },
  },
  process: {
    label: 'How I work',
    title: 'Four simple steps, no surprises.',
    steps: [
      { title: "Let's talk", text: 'A 15-minute call to understand your business, your customers and what you need.' },
      { title: 'Proposal & mockup', text: 'You get a proposal with a clear price and a mockup of your future site.' },
      { title: 'Design & development', text: 'I build your site and share progress with you so you can give feedback along the way.' },
      { title: 'Launch', text: 'Your site goes live, connected to Google and WhatsApp, and I show you how it works.' },
    ],
  },
  contact: {
    label: 'Contact',
    title: "Let's talk about your business.",
    sub: 'Send me a message and I will get back to you with next steps. The first call is free.',
    whatsapp: 'WhatsApp',
    email: 'Email',
    area: 'Area',
    areaValue: 'Miami, FL',
  },
  footer: {
    rights: '© 2026 RubikCode · Miami, FL',
    floating: 'Message on WhatsApp',
  },
}

export type Translations = typeof en

const es: Translations = {
  meta: {
    title: 'RubikCode — Webs para negocios locales en Miami',
    description:
      'Webs rápidas y bilingües para salones, barberías, clínicas dentales y talleres en Miami. Reservas online, botón de WhatsApp y visibilidad en Google.',
  },
  skipToContent: 'Saltar al contenido',
  nav: {
    services: 'Servicios',
    projects: 'Proyectos',
    process: 'Cómo trabajo',
    contact: 'Contacto',
    menu: 'Menú',
    close: 'Cerrar menú',
    language: 'Idioma',
  },
  hero: {
    eyebrow: 'Soporte web de principio a fin · Miami, FL',
    headline: ['Webs que traen ', 'clientes', ' a tu negocio.'],
    sub: 'Webs rápidas y bilingües para negocios locales en Miami — con reservas online, botón de WhatsApp y visibilidad en Google.',
    primary: 'Pide tu propuesta gratis',
    secondary: 'Ver proyectos',
    note: 'En español o inglés · Trabajas directamente conmigo',
    carousel: {
      label: 'Negocios locales para los que trabajo',
      slide: 'Imagen',
      of: 'de',
      prev: 'Imagen anterior',
      next: 'Imagen siguiente',
      pause: 'Pausar carrusel',
      play: 'Reproducir carrusel',
      photo: 'Foto',
      slides: [
        { label: 'Salones de belleza', alt: 'Una estilista secando el pelo de una clienta con un cepillo redondo en un salón' },
        { label: 'Barberías', alt: 'Barberos cortando el pelo a dos clientes en una barbería' },
        { label: 'Clínicas dentales', alt: 'Una consulta dental luminosa con el sillón del paciente y el equipo' },
      ],
    },
  },
  services: {
    label: 'Servicios',
    title: 'Todo lo que tu negocio necesita para que lo encuentren.',
    note: 'Antes de empezar recibes una propuesta con precio claro.',
    items: {
      new: {
        title: 'Web nueva',
        desc: 'Una web hecha para tu negocio desde cero, pensada para convertir visitas en llamadas.',
        bullets: ['Diseño a medida para tu marca', 'Bilingüe: español e inglés', 'Rápida y pensada para móvil'],
      },
      booking: {
        title: 'Reservas y WhatsApp',
        desc: 'Que tus clientes reserven o te escriban sin tener que llamar.',
        bullets: ['Citas online a cualquier hora', 'Botón de WhatsApp en cada página', 'Conectado a tu calendario'],
      },
      redesign: {
        title: 'Rediseño de tu web actual',
        desc: 'Dale a tu web actual una imagen moderna y de confianza.',
        bullets: ['Diseño moderno', 'Segura con HTTPS', 'Más rápida en el móvil'],
      },
      google: {
        title: 'Google y mantenimiento',
        desc: 'Aparece cuando la gente cerca de ti busca lo que haces.',
        bullets: ['Perfil de Empresa en Google', 'SEO local para Miami', 'Actualizaciones mensuales'],
      },
    },
  },
  about: {
    label: 'Sobre mí',
    title: 'Hola, soy Maite.',
    paragraphs: [
      'Soy ingeniero de software con más de 10 años de experiencia en el desarrollo de aplicaciones web y aplicaciones de escritorio para diversas plataformas. He trabajado para el Departamento de Asuntos de Veteranos de EE. UU. y para universidades como FIU y la Universidad de Miami.',
      'Ahora llevo esa misma calidad a los negocios locales. Sin agencias ni intermediarios: trabajas directamente conmigo, en español o en inglés.',
    ],
    facts: [
      { title: '10+ años', text: 'Desarrollo de aplicaciones web y aplicaciones de escritorio' },
      { title: 'Sector público', text: 'Plataformas para el Departamento de Asuntos de Veteranos de EE. UU.' },
      { title: 'Universidades', text: 'Proyectos para FIU y la Universidad de Miami' },
      { title: 'Bilingüe', text: 'Español e inglés, desde la primera llamada' },
    ],
  },
  projects: {
    label: 'Proyectos',
    title: 'Trabajo reciente.',
    items: [
      {
        name: 'Ai Secretary',
        desc: 'Una recepcionista con IA en WhatsApp para salones y barberías de Miami-Dade. Responde las preguntas de los clientes y agenda citas sola.',
        tags: ['Python', 'FastAPI', 'WhatsApp API', 'Google Calendar'],
      },
      {
        name: 'Estimations',
        desc: 'Convierte las transcripciones de reuniones con clientes en presupuestos de proyecto, usando varios modelos de IA para redactar y revisar cada estimación.',
        tags: ['Python', 'FastAPI', 'LiteLLM', 'Streamlit'],
      },
    ],
    next: {
      title: 'Tu negocio, el próximo',
      text: 'Cuéntame sobre tu negocio y te enseño una maqueta de cómo podría verse tu web.',
      cta: 'Quiero mi maqueta',
    },
  },
  process: {
    label: 'Cómo trabajo',
    title: 'Cuatro pasos sencillos, sin sorpresas.',
    steps: [
      { title: 'Conversamos', text: 'Una llamada de 15 minutos para entender tu negocio, tus clientes y lo que necesitas.' },
      { title: 'Propuesta y maqueta', text: 'Recibes una propuesta con precio claro y una maqueta de tu futura web.' },
      { title: 'Diseño y desarrollo', text: 'Construyo tu web y te comparto el avance para que opines durante el proceso.' },
      { title: 'Publicación', text: 'Tu web sale al aire, conectada a Google y WhatsApp, y te enseño cómo funciona.' },
    ],
  },
  contact: {
    label: 'Contacto',
    title: 'Hablemos de tu negocio.',
    sub: 'Escríbeme y te respondo con los próximos pasos. La primera llamada es gratis.',
    whatsapp: 'WhatsApp',
    email: 'Email',
    area: 'Zona',
    areaValue: 'Miami, FL',
  },
  footer: {
    rights: '© 2026 RubikCode · Miami, FL',
    floating: 'Escribir por WhatsApp',
  },
}

export const translations: Record<Lang, Translations> = { en, es }
