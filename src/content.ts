export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v)

export type Spec = { k: string; v: string }

export type Featured = {
  id: string
  name: string
  context: string
  period: string
  summary: string
  points: string[]
  stack: string[]
  link?: { href: string; label: string }
  image?: string
  specs?: Spec[]
  badge?: string
}

export type Small = {
  name: string
  context: string
  text: string
  stack: string[]
  link?: { href: string; label: string }
  image?: string
  mark?: string
}

export type Job = {
  period: string
  role: string
  org: string
  text: string
}

const contact = {
  email: 'gonzalo.loboram@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gonzalolr15/',
  github: 'https://github.com/Macumba45',
}

const stack = [
  { group: 'Mobile', items: ['React Native', 'Expo / EAS', 'Expo Router', 'React Query', 'Google Maps', 'Firebase'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vue'] },
  { group: 'Backend', items: ['Node.js', 'tRPC', 'Fastify', 'NestJS', 'PHP', 'Prisma'] },
  { group: 'Data', items: ['PostgreSQL', 'SQL Server', 'Redis', 'MongoDB'] },
  { group: 'Integraciones', items: ['Stripe', 'Redsys', 'Bizum', 'WhatsApp / Meta API', 'Gemini'] },
]

const es = {
  meta: {
    title: 'Gonzalo Lobo · Full Stack Developer (React Native, Next.js)',
    description:
      'Full Stack Developer en Sevilla. Apps móviles con React Native y plataformas web con Next.js y TypeScript, de la idea a producción.',
  },
  nav: { projects: 'Proyectos', experience: 'Experiencia', about: 'Sobre mí', contact: 'Contacto', cv: 'Descargar CV', otherLang: 'English', otherHref: '/en' },
  hero: {
    name: 'Gonzalo Lobo',
    role: 'React Native & Full Stack Developer · Next.js · TypeScript',
    title: 'Construyo apps móviles y webs que la gente usa cada día.',
    lead:
      'Desarrollo apps en React Native y webs en Next.js, para clientes y para mis propios productos. Me encargo de todo el proceso: arquitectura, desarrollo, integraciones (pagos, mapas, IA) y puesta en producción.',
    primary: 'Ver proyectos',
    secondary: 'Descargar CV',
    facts: [
      { big: '3+ años', small: 'llevando código a producción' },
      { big: '10+', small: 'proyectos en producción, para clientes y propios' },
    ],
    phone: { eta: 'El conductor llega en 4 min', from: 'Recogida', to: 'Destino', fromV: 'Plaza de España', toV: 'Aeropuerto SVQ' },
  },
  projects: {
    title: 'Proyectos',
    intro: 'Primero, lo que tengo en producción con clientes. Después, mis propios productos y el resto del trabajo freelance.',
    moreTitle: 'Más trabajo freelance',
    visit: 'Ver web',
    featured: [
      {
        id: 'momo',
        name: 'MOMO Transfer',
        context: 'Cliente de Aljamir Software',
        period: '2024 – hoy',
        summary: 'Plataforma de traslados VTC. Soy el único desarrollador móvil.',
        points: [
          'App de conductores hecha desde cero: GPS en segundo plano, rutas en tiempo real, cobros, gastos con foto, ganancias y comisiones.',
          'Migré la cartografía de HERE SDK a Google Maps y reduje el consumo de batería y memoria en Android.',
          'Integré el backoffice con el Registro de comunicaciones VTC del Ministerio de Transportes mediante un servicio web firmado con certificado.',
          'Ahora desarrollo la app de cliente y el motor de reservas web.',
        ],
        stack: ['React Native', 'Expo', 'TypeScript', 'Google Maps', 'Firebase', 'PHP', 'SQL Server'],
        specs: [
          { k: 'Plataformas', v: 'iOS y Android' },
          { k: 'Versión', v: 'App de conductores v1.6' },
          { k: 'Distribución', v: 'Firebase y TestFlight' },
          { k: 'Integración pública', v: 'Registro VTC del Ministerio' },
        ],
      },
      {
        id: 'ximapp',
        name: 'XimApp',
        context: 'Grupo Ximénez, cliente de Aljamir Software',
        period: '2025 – hoy',
        summary: 'La app que usan los operarios de una empresa de montajes para su jornada de trabajo.',
        points: [
          'Migré la app de Vue/Cordova a React Native con Expo.',
          'Seguimiento de ubicación con envíos idempotentes, para que no se pierda ni se duplique ningún dato aunque falle la conexión.',
          'Formularios con firma, tareas, incidencias y seguimiento de proyectos por sectores.',
          'En el backoffice PHP construí un planificador semanal de obras: se arrastra a cada persona y vehículo a su obra.',
        ],
        stack: ['React Native', 'Expo', 'TypeScript', 'PHP', 'SQL Server'],
        specs: [
          { k: 'Antes', v: 'Vue + Cordova' },
          { k: 'Ahora', v: 'React Native + Expo, v2.4' },
          { k: 'Usuarios', v: 'Operarios en obra' },
          { k: 'Backoffice', v: 'Planificador semanal con drag & drop' },
        ],
      },
      {
        id: 'savvy',
        name: 'Savvy Tech Hotels',
        context: 'Producto propio',
        period: '2025 – hoy',
        summary: 'SaaS para hoteles que se comunica con el huésped antes de que llegue: upselling, mensajes y menos cancelaciones.',
        badge: '8 hoteles en España y México',
        points: [
          'App del huésped, panel del personal y panel de administración.',
          'Chatbot con IA para WhatsApp e Instagram que atiende a varios hoteles: consulta disponibilidad, lanza ofertas, transcribe notas de voz y pasa la conversación a una persona cuando hace falta.',
        ],
        stack: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'Stripe', 'Fastify', 'Gemini'],
        image: '/projects/savvy.webp',
        link: { href: 'https://savvytechhotels.com/', label: 'savvytechhotels.com' },
      },
      {
        id: 'rychat',
        name: 'RyChat',
        context: 'Producto propio',
        period: '2025',
        summary: 'App para pedir una moto en segundos, con chat en tiempo real entre cliente y conductor.',
        badge: 'Seleccionado por INCIBE',
        points: [
          'Backend en NestJS con Socket.IO y Prisma, con login por JWT y Google.',
          'Dos apps en Expo, una para clientes y otra para conductores, con ubicación en tiempo real, notificaciones, códigos promocionales y valoraciones.',
        ],
        stack: ['React Native', 'Expo', 'NestJS', 'Socket.IO', 'Prisma'],
        image: '/projects/rychat.webp',
      },
    ] as Featured[],
    more: [
      {
        name: 'Pricing hotelero',
        context: 'Cliente del sector hotelero',
        text: 'Herramienta que recoge precios y disponibilidad de touroperadores a 52 semanas y genera rankings y precios objetivo en Excel.',
        stack: ['Node.js', 'Playwright', 'Next.js', 'MUI'],
        image: '/projects/pricing.webp',
      },
      {
        name: 'Another Way',
        context: 'Festival de cine, Madrid',
        text: 'Plataforma del festival de cine sobre sostenibilidad, con vídeo bajo demanda, pagos y un CMS para el equipo.',
        stack: ['Next.js', 'Mux', 'Stripe', 'Strapi'],
        image: '/projects/another.webp',
        link: { href: 'https://anotherwayff.com/es/madrid', label: 'anotherwayff.com' },
      },
      {
        name: 'Farmacia Santa Bárbara',
        context: 'Sevilla Este',
        text: 'Web de servicios con reserva de citas, pagos online y un CRM a medida para el equipo de la farmacia.',
        stack: ['Next.js', 'Prisma', 'Redsys', 'Stripe'],
        image: '/projects/farmacia.webp',
        link: { href: 'https://sevillaestefarmacia.vercel.app/', label: 'Ver web' },
      },
      {
        name: 'Joobly',
        context: 'Prague Morning, Praga',
        text: 'Portal de empleo con publicación de ofertas de pago. Trabajé en un equipo internacional.',
        stack: ['Next.js', 'MongoDB', 'Stripe', 'PayPal'],
        image: '/projects/joobly.webp',
        link: { href: 'https://www.joobly.cz/', label: 'joobly.cz' },
      },
      {
        name: 'Nomadavibe',
        context: 'Producto propio',
        text: 'Plataforma de viajes y eventos, como un encuentro van life, con venta de plazas, pagos y reembolsos. Estuvo funcionando en producción.',
        stack: ['Next.js', 'tRPC', 'Prisma', 'Stripe'],
        image: '/projects/nomada.webp',
      },
      {
        name: 'MD Composite',
        context: 'Web corporativa',
        text: 'Web corporativa en español e inglés con formulario de contacto.',
        stack: ['Next.js', 'next-intl'],
        image: '/projects/mdcomposite.webp',
        link: { href: 'https://mdcomposite.vercel.app/', label: 'Ver web' },
      },
    ] as Small[],
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      { period: 'nov 2023 – hoy', role: 'Full Stack Developer', org: 'Aljamir Software, Sevilla', text: 'Único desarrollador móvil de MOMO Transfer y XimApp. Antes, en Grupo Aire, migré el sistema de gestión de Windows Server a Linux e implanté Bizum y bonos canjeables entre centros.' },
      { period: '2025 – hoy', role: 'Full Stack Developer', org: 'Savvy Tech Hotels', text: 'Producto propio: SaaS para hoteles y chatbot con IA para WhatsApp e Instagram.' },
      { period: '2023 – hoy', role: 'Full Stack Developer freelance', org: 'Remoto', text: 'Webs y herramientas para clientes en España y la República Checa.' },
      { period: '2021 – 2022', role: 'International Customer Service & Logistics', org: 'Medical Tech', text: 'Las ventas más altas del departamento y apertura del mercado de la India.' },
      { period: '2021', role: 'International Business Developer', org: 'AZCATEC', text: 'Desarrollo de negocio B2B con clientes de la UE y del resto del mundo.' },
      { period: '2014 – 2019', role: 'Cofundador', org: '2NAIT y EXIT', text: 'App de ocio nocturno para iOS y Android. Llevé producto y diseño y dirigí a 15 personas en España y Colombia.' },
    ] as Job[],
  },
  about: {
    title: 'Sobre mí',
    text: [
      'Antes de programar estudié Finanzas y Contabilidad, hice un máster en Comercio Internacional y pasé años emprendiendo. Por eso, cuando un cliente me pide algo, pienso primero en para qué lo necesita su negocio.',
      'En 2023 hice el bootcamp Full Stack de The Bridge y desde entonces no he parado de lanzar cosas a producción. Trabajo a diario con IA (Claude Code y agentes) para entregar más rápido sin perder calidad.',
    ],
    stackTitle: 'Con qué trabajo',
    eduTitle: 'Formación',
    edu: [
      'Bootcamp Full Stack Developer · The Bridge, 2023',
      'Máster en Comercio, Logística y Negocios Internacionales · ESIC, 2021',
      'Grado en Finanzas y Contabilidad · Universidad de Sevilla, 2018',
      'High School · Coventry Christian School (EE. UU.), 2009',
    ],
    langs: 'Español nativo. Inglés B2.',
  },
  contactSec: {
    title: 'Hablemos',
    text: 'Busco mi siguiente reto como React Native, Frontend o Full Stack Developer, en remoto o en híbrido en Sevilla.',
    cvEs: 'CV en español (PDF)',
    cvEn: 'CV en inglés (PDF)',
  },
  footer: 'Hecho con Next.js por Gonzalo Lobo.',
}

type Dict = typeof es

const en: Dict = {
  meta: {
    title: 'Gonzalo Lobo · Full Stack Developer (React Native, Next.js)',
    description:
      'Full Stack Developer based in Seville, Spain. Mobile apps with React Native and web platforms with Next.js and TypeScript, from idea to production.',
  },
  nav: { projects: 'Projects', experience: 'Experience', about: 'About', contact: 'Contact', cv: 'Download CV', otherLang: 'Español', otherHref: '/es' },
  hero: {
    name: 'Gonzalo Lobo',
    role: 'React Native & Full Stack Developer · Next.js · TypeScript',
    title: 'I build mobile and web apps that people use every day.',
    lead:
      "I build React Native apps and Next.js websites, for clients and for my own products. I own the whole process: architecture, development, integrations (payments, maps, AI) and going live.",
    primary: 'See projects',
    secondary: 'Download CV',
    facts: [
      { big: '3+ years', small: 'shipping code to production' },
      { big: '10+', small: 'projects in production, for clients and my own' },
    ],
    phone: { eta: 'Your driver arrives in 4 min', from: 'Pickup', to: 'Drop-off', fromV: 'Plaza de España', toV: 'SVQ Airport' },
  },
  projects: {
    title: 'Projects',
    intro: 'First, what I have in production for clients. Then my own products and the rest of my freelance work.',
    moreTitle: 'More freelance work',
    visit: 'Visit site',
    featured: [
      {
        id: 'momo',
        name: 'MOMO Transfer',
        context: 'Aljamir Software client',
        period: '2024 – now',
        summary: 'Ride-hailing (VTC) platform. I am the sole mobile developer.',
        points: [
          'Built the driver app from scratch: background GPS, real-time routing, payments, expenses with photos, earnings and commissions.',
          'Migrated maps from HERE SDK to Google Maps and reduced battery and memory usage on Android.',
          "Integrated the back office with the Spanish Ministry of Transport's VTC registry through a certificate-signed web service.",
          'Now building the rider app and the web booking engine.',
        ],
        stack: ['React Native', 'Expo', 'TypeScript', 'Google Maps', 'Firebase', 'PHP', 'SQL Server'],
        specs: [
          { k: 'Platforms', v: 'iOS and Android' },
          { k: 'Version', v: 'Driver app v1.6' },
          { k: 'Distribution', v: 'Firebase and TestFlight' },
          { k: 'Government integration', v: 'Ministry VTC registry' },
        ],
      },
      {
        id: 'ximapp',
        name: 'XimApp',
        context: 'Grupo Ximénez, Aljamir Software client',
        period: '2025 – now',
        summary: 'The app field workers at an installation company use to run their working day.',
        points: [
          'Migrated the app from Vue/Cordova to React Native with Expo.',
          'Location tracking with idempotent sync, so no data is lost or duplicated when the connection drops.',
          'Signed forms, tasks, incidents and project progress by sector.',
          'In the PHP back office I built a weekly job planner: drag each person and vehicle onto their site.',
        ],
        stack: ['React Native', 'Expo', 'TypeScript', 'PHP', 'SQL Server'],
        specs: [
          { k: 'Before', v: 'Vue + Cordova' },
          { k: 'Now', v: 'React Native + Expo, v2.4' },
          { k: 'Users', v: 'Field workers on site' },
          { k: 'Back office', v: 'Drag & drop weekly planner' },
        ],
      },
      {
        id: 'savvy',
        name: 'Savvy Tech Hotels',
        context: 'Own product',
        period: '2025 – now',
        summary: 'Hotel SaaS that talks to guests before they arrive: upselling, messaging and fewer cancellations.',
        badge: '8 hotels in Spain and Mexico',
        points: [
          'Guest app, staff dashboard and admin panel.',
          'AI chatbot for WhatsApp and Instagram serving several hotels: checks availability, sends offers, transcribes voice notes and hands the conversation to a person when needed.',
        ],
        stack: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'Stripe', 'Fastify', 'Gemini'],
        image: '/projects/savvy.webp',
        link: { href: 'https://savvytechhotels.com/', label: 'savvytechhotels.com' },
      },
      {
        id: 'rychat',
        name: 'RyChat',
        context: 'Own product',
        period: '2025',
        summary: 'App to book a motorbike ride in seconds, with real-time chat between rider and driver.',
        badge: 'Selected by INCIBE',
        points: [
          'NestJS backend with Socket.IO and Prisma, with JWT and Google sign-in.',
          'Two Expo apps, one for riders and one for drivers, with live location, notifications, promo codes and ratings.',
        ],
        stack: ['React Native', 'Expo', 'NestJS', 'Socket.IO', 'Prisma'],
        image: '/projects/rychat.webp',
      },
    ],
    more: [
      {
        name: 'Hotel pricing',
        context: 'Hospitality client',
        text: 'Tool that collects tour-operator prices and availability over 52 weeks and outputs rankings and target prices to Excel.',
        stack: ['Node.js', 'Playwright', 'Next.js', 'MUI'],
        image: '/projects/pricing.webp',
      },
      {
        name: 'Another Way',
        context: 'Film festival, Madrid',
        text: 'Platform for a sustainability film festival, with video on demand, payments and a CMS for the team.',
        stack: ['Next.js', 'Mux', 'Stripe', 'Strapi'],
        image: '/projects/another.webp',
        link: { href: 'https://anotherwayff.com/es/madrid', label: 'anotherwayff.com' },
      },
      {
        name: 'Farmacia Santa Bárbara',
        context: 'Seville',
        text: 'Services website with appointment booking, online payments and a custom CRM for the pharmacy team.',
        stack: ['Next.js', 'Prisma', 'Redsys', 'Stripe'],
        image: '/projects/farmacia.webp',
        link: { href: 'https://sevillaestefarmacia.vercel.app/', label: 'Visit site' },
      },
      {
        name: 'Joobly',
        context: 'Prague Morning, Prague',
        text: 'Job board with paid job postings. I worked in an international team.',
        stack: ['Next.js', 'MongoDB', 'Stripe', 'PayPal'],
        image: '/projects/joobly.webp',
        link: { href: 'https://www.joobly.cz/', label: 'joobly.cz' },
      },
      {
        name: 'Nomadavibe',
        context: 'Own product',
        text: 'Travel and events platform, such as a van life meetup, selling spots with payments and refunds. It ran in production.',
        stack: ['Next.js', 'tRPC', 'Prisma', 'Stripe'],
        image: '/projects/nomada.webp',
      },
      {
        name: 'MD Composite',
        context: 'Corporate website',
        text: 'Corporate website in Spanish and English with a contact form.',
        stack: ['Next.js', 'next-intl'],
        image: '/projects/mdcomposite.webp',
        link: { href: 'https://mdcomposite.vercel.app/', label: 'Visit site' },
      },
    ],
  },
  experience: {
    title: 'Experience',
    jobs: [
      { period: 'Nov 2023 – now', role: 'Full Stack Developer', org: 'Aljamir Software, Seville', text: 'Sole mobile developer for MOMO Transfer and XimApp. Before that, for Grupo Aire, I moved the management system from Windows Server to Linux and rolled out Bizum payments and cross-venue vouchers.' },
      { period: '2025 – now', role: 'Full Stack Developer', org: 'Savvy Tech Hotels', text: 'Own product: hotel SaaS and an AI chatbot for WhatsApp and Instagram.' },
      { period: '2023 – now', role: 'Freelance Full Stack Developer', org: 'Remote', text: 'Websites and tools for clients in Spain and the Czech Republic.' },
      { period: '2021 – 2022', role: 'International Customer Service & Logistics', org: 'Medical Tech', text: 'Top sales in the department and opened the Indian market.' },
      { period: '2021', role: 'International Business Developer', org: 'AZCATEC', text: 'B2B business development with clients in the EU and worldwide.' },
      { period: '2014 – 2019', role: 'Co-founder', org: '2NAIT and EXIT', text: 'Nightlife app for iOS and Android. I led product and design and managed 15 people in Spain and Colombia.' },
    ],
  },
  about: {
    title: 'About',
    text: [
      "Before coding I studied Finance and Accounting, did a master's in International Trade and spent years as an entrepreneur. So when a client asks for something, I first think about what their business needs it for.",
      'In 2023 I did the Full Stack bootcamp at The Bridge and I have been shipping to production ever since. I work with AI every day (Claude Code and agents) to deliver faster without cutting corners.',
    ],
    stackTitle: 'What I work with',
    eduTitle: 'Education',
    edu: [
      'Full Stack Developer Bootcamp · The Bridge, 2023',
      "Master's in International Trade, Logistics & Business · ESIC, 2021",
      'BSc Finance & Accounting · University of Seville, 2018',
      'High School · Coventry Christian School (USA), 2009',
    ],
    langs: 'Spanish native. English B2.',
  },
  contactSec: {
    title: "Let's talk",
    text: "I'm looking for my next role as a React Native, Frontend or Full Stack Developer, remote or hybrid in Seville.",
    cvEs: 'CV in Spanish (PDF)',
    cvEn: 'CV in English (PDF)',
  },
  footer: 'Built with Next.js by Gonzalo Lobo.',
}

export const dict: Record<Locale, Dict> = { es, en }
export { contact, stack }
