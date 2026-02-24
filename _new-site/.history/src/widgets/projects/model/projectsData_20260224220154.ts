export interface ProjectItem {
  id: number
  title: string
  tags: string[]
  stack: string
  description: string
  bullets: string[]
  verification: string
  techTags: string[]
  verificationAccent?: boolean
  /** Public demo/site URL when available. */
  demoUrl?: string
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: 'Segrex Development',
    tags: ['Dubai · 2023', '3 mo.'],
    stack: 'Gulp · HTML · SASS · JS',
    description:
      'UX/UI layout developer for an international construction company based in Dubai. Markup for a closed internal system on 1C-Bitrix CMS.',
    bullets: [
      'Figma-synced design system in HTML/CSS/JS',
      'Pixel-perfect match to mockups',
      'Gulp-based project build setup',
      'International team, close collaboration with design'
    ],
    verification: 'Happy to provide code access and pass a technical interview with your team.',
    techTags: ['Gulp', 'HTML5', 'SASS', 'JavaScript', 'Bitrix CMS', 'Pixel-Perfect']
  },
  {
    id: 2,
    title: 'NFT Crash',
    tags: ['Web3 · 2022', '9 mo.'],
    stack: 'Next.js · React · TypeScript',
    description:
      'Frontend development for an NFT casino on Next.js. Advanced stage: full cycle from design to component architecture.',
    bullets: [
      'Responsive fluid layout 320px–2560px',
      'Pixel-perfect match to mockups',
      'Component-based UI structure',
      'Reusable UI components',
      'Client-side interface logic'
    ],
    verification: 'Happy to provide code access and pass a technical interview.',
    techTags: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'Web3']
  },
  {
    id: 3,
    title: 'ModBay.org',
    tags: ['Catalog · Global', '2 mo.'],
    stack: 'BEM · SASS · Gulp',
    description:
      'Multilingual portal with a catalog of mods, maps, skins and articles for Minecraft PE. Component markup with BEM for CMS.',
    bullets: [
      'Component structure for cards, filters, galleries (BEM)',
      'SEO-optimized HTML and CSS',
      'Responsive 320px–2560px',
      'Accordions, modals, adaptive menu',
      'Accessibility and semantic markup',
      'Non-trivial JS for UI behavior'
    ],
    verification: 'Happy to share code, design snippets, and pass a technical interview.',
    techTags: ['HTML', 'SCSS', 'JavaScript', 'BEM', 'Gulp', 'A11Y · SEO'],
    demoUrl: 'https://modbay.org'
  },
  {
    id: 4,
    title: 'Germen.me',
    tags: ['E-commerce', '2 mo.'],
    stack: 'SCSS · BEM · Gulp',
    description:
      'Landing and product catalog for a subscription flower delivery service. Premium look, subtle animation, business section.',
    bullets: [
      'Home, catalog, order form, business section, contacts',
      'Accordions, modals, sticky header, WhatsApp widget',
      'Typography and visual hierarchy aligned with design',
      'Accessibility and semantics'
    ],
    verification: 'Happy to show code, walk through the markup, and pass a technical interview.',
    techTags: ['HTML', 'SCSS', 'JavaScript', 'BEM', 'Gulp'],
    demoUrl: 'https://germen.me'
  },
  {
    id: 5,
    title: 'SPb Giproshat',
    tags: ['Corporate', '3 mo.'],
    stack: 'HTML · SCSS · BEM',
    description:
      'Corporate site for an engineering institute: strict style, technical content, brand guidelines.',
    bullets: [
      'Pages: About, Projects, Contacts, Careers, News',
      'Maps and contact form integration',
      'Pixel-perfect to technical mockups',
      'Typography and semantics for SEO'
    ],
    verification: 'Happy to provide code samples, markup, and pass a technical interview.',
    techTags: ['HTML', 'SCSS', 'JavaScript', 'BEM · Gulp', 'SEO'],
    demoUrl: 'https://spbgipro.ru'
  },
  {
    id: 6,
    title: 'Landing Constructor',
    tags: ['NDA', '4 mo. · 2024–25'],
    stack: 'Cursor IDE · LLM · Figma',
    description:
      'Project name and domain under NDA. Delivered one new landing per week from design mockups over 4 months. Core focus: Cursor IDE and LLM prompting.',
    bullets: [
      '~16 landings in 4 months',
      'Adoption of Cursor IDE and LLM prompting',
      'Structured rules for AI assistance',
      '3–4× faster delivery while keeping quality'
    ],
    verification: 'Experience with Cursor + LLM is a distinct skill. Happy to walk through the approach.',
    techTags: ['Cursor IDE', 'LLM Prompting', 'Figma', 'HTML · SCSS'],
    verificationAccent: true
  },
  {
    id: 7,
    title: 'Nemoloko',
    tags: ['Promo · Freelance', '~80–100 h'],
    stack: 'Pug · SASS · Vue.js · jQuery · Grunt',
    description:
      'Layout of a promo page for an innovative product. Desktop and mobile, scroll-based animations from video reference and designer feedback.',
    bullets: [
      'Desktop and mobile versions',
      'Scroll-driven animations (Skrollr, Vue.js for structure)',
      'Adaptive design and layout ownership',
      'BEM, modular Pug/SASS, Grunt build'
    ],
    verification: 'Happy to share code and walk through the implementation.',
    techTags: ['Pug', 'SASS', 'Vue.js', 'jQuery', 'Grunt', 'BEM'],
    demoUrl: 'https://front-end-with-love.github.io/portfolio/nmlk/'
  },
  {
    id: 8,
    title: 'Spacemarathon',
    tags: ['Portfolio case · Freelance', '~30–40 h'],
    stack: 'Pug · SASS · jQuery · Grunt',
    description:
      'Case layout for a design studio portfolio. Single desktop mockup plus animation references; layout later reused as a base for 7 other cases.',
    bullets: [
      'Unified block structure for reuse across cases',
      'Adaptive design and animation conceived and implemented independently',
      'BEM, Grunt, Pug, SASS'
    ],
    verification: 'Happy to share code and discuss the approach.',
    techTags: ['Pug', 'SASS', 'jQuery', 'Grunt', 'BEM'],
    demoUrl: 'https://front-end-with-love.github.io/portfolio/spacemarathon/'
  },
  {
    id: 9,
    title: 'Varezhkino',
    tags: ['Landing · Freelance', '~30–40 h'],
    stack: 'Pug · SASS · jQuery · Grunt',
    description:
      'One-page presentation site. Desktop mockup and reference sites in spec; adaptivity and animation implemented with minimal client input.',
    bullets: [
      'Simple presentation landing',
      'Adaptive layout and animation',
      'BEM, Grunt, Pug, SASS'
    ],
    verification: 'Happy to share code and walk through the markup.',
    techTags: ['Pug', 'SASS', 'jQuery', 'Grunt', 'BEM'],
    demoUrl: 'https://front-end-with-love.github.io/portfolio/varejkino/'
  }
]
