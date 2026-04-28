// Данные фриланс-проектов для секции Projects: карточки с описанием, стеком, буллетами и ссылкой на демо (если есть).

// Интерфейс карточки проекта: id, заголовок, теги, стек, описание, опциональный feature-текст, буллеты достижений, текст верификации, технические теги, опционально акцент верификации и URL демо
export interface ProjectItem {
  id: number
  title: string
  tags: string[]
  stack: string
  description: string
  feature?: string
  bullets: string[]
  verification: string
  techTags: string[]
  verificationAccent?: boolean
  // Публичная ссылка на демо/сайт, если доступна
  demoUrl?: string
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: 'Segrex Development',
    tags: ['Dubai · 2023', '3 mo.'],
    stack: 'Gulp · HTML · SASS · JS',
    description:
      'Layout for a 1C-Bitrix CMS project: internal developer portal (closed access).',
    feature:
      'Work in an international team (Dubai), daily collaboration with the design team, understanding requirements for closed systems.',
    bullets: [
      'Mapped Figma tokens and components to a reusable internal UI layer',
      'Implemented closed-system forms with strict validation and predictable states',
      'Set up a stable Gulp pipeline for repeatable Bitrix-ready builds'
    ],
    verification:
      'Happy to provide access to source code and pass a technical interview with your specialist to demonstrate the work.',
    techTags: ['Gulp', 'HTML5', 'SASS', 'JavaScript', 'Bitrix CMS', 'Pixel-Perfect']
  },
  {
    id: 2,
    title: 'NFT Crash',
    tags: ['Web3 · 2022', '9 mo.'],
    stack: 'Next.js · React · TypeScript',
    description: 'Frontend development for an NFT project on Next.js (advanced stage).',
    feature:
      'Fast-moving Web3 product context: frequent UI iterations, realtime game states, and consistency across betting scenarios.',
    bullets: [
      'Delivered a fluid responsive UI from 320px to ultra-wide desktop',
      'Built a reusable React component system for game screens and shared controls',
      'Implemented typed client-side flows for betting states and round transitions',
      'Reduced UI regressions via standardized layout patterns across pages'
    ],
    verification:
      'Happy to provide access to source code and pass a technical interview with your specialist.',
    techTags: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'Web3']
  },
  {
    id: 3,
    title: 'ModBay.org',
    tags: ['Catalog · Global', '2 mo.'],
    stack: 'BEM · SASS · Gulp',
    description:
      'Layout for a multilingual portal with catalog of mods, maps, skins, articles and guides for Minecraft PE.',
    feature:
      'User-generated content requiring stable rendering of cards, galleries and adaptive menus.',
    bullets: [
      'Designed BEM components for catalog cards, filter blocks, galleries and article sections',
      'Made templates resilient to variable CMS content length and media ratios',
      'Implemented multilingual-ready layout behavior without breaking visual hierarchy',
      'Built interaction scripts for accordions, modal dialogs and adaptive navigation',
      'Improved crawlability and load metrics through semantic and lean markup'
    ],
    verification: 'Happy to provide code, mockup fragments, and pass a technical interview.',
    techTags: ['HTML', 'SCSS', 'JavaScript', 'BEM', 'Gulp', 'A11Y · SEO'],
    demoUrl: 'https://modbay.org'
  },
  {
    id: 4,
    title: 'Germen.me',
    tags: ['E-commerce', '2 mo.'],
    stack: 'SCSS · BEM · Gulp',
    description:
      'Landing and storefront for a flower subscription delivery service: catalog, checkout form, business section.',
    feature:
      'Premium product presentation, precise adaptation of animations and element behavior to design logic.',
    bullets: [
      'Delivered the full customer path: landing, catalog, order flow, business section and contacts',
      'Implemented conversion-focused micro-interactions for key CTA and form sections',
      'Integrated sticky header behavior and WhatsApp widget without layout conflicts',
      'Translated premium visual direction into consistent spacing, typography and rhythm',
      'Kept semantics and accessibility intact across animated and interactive blocks'
    ],
    verification: 'Happy to show code, walk through the layout and pass a technical interview.',
    techTags: ['HTML', 'SCSS', 'JavaScript', 'BEM', 'Gulp'],
    demoUrl: 'https://germen.me'
  },
  {
    id: 5,
    title: 'SPb Giproshat',
    tags: ['Corporate', '3 mo.'],
    stack: 'HTML · SCSS · BEM',
    description:
      'Layout for the corporate site of a design institute: company info, services, projects, contacts, vacancies.',
    feature:
      'Strict corporate style, brand guideline compliance, engineering content.',
    bullets: [
      'Built a restrained corporate UI focused on clarity of dense engineering content',
      'Implemented page templates for projects, news, vacancies and institutional sections',
      'Integrated map and feedback forms into modular content blocks',
      'Enforced visual consistency against technical mockups and brand constraints',
      'Strengthened semantic structure for search indexing of corporate materials'
    ],
    verification:
      'Happy to provide code samples, layout and pass a technical interview with your specialist.',
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
    feature:
      'AI-assisted production pipeline with strict internal rules to keep speed high without losing maintainability.',
    bullets: [
      'Shipped ~16 production-ready landings in a 4-month delivery window',
      'Built a repeatable AI-assisted workflow in Cursor with project-specific rules',
      'Cut page production cycle time by 3–4x while preserving visual quality',
      'Standardized handoff-ready structure from Figma input to final layout output'
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
      'Layout of a promo page for an innovative product. Vue.js and Skrollr for structure and scroll-driven animation scenarios; desktop and mobile from video reference and designer feedback.',
    feature:
      'Motion-first implementation: translating reference video behavior into deterministic scroll-based frontend logic.',
    bullets: [
      'Implemented both desktop and mobile versions from motion-reference materials',
      'Built scroll-tied animation scenarios with Vue.js and Skrollr coordination',
      'Refined interaction timing through iterative review with the design team',
      'Structured templates with modular Pug/SASS and a maintainable Grunt build'
    ],
    verification: 'Happy to share code and walk through the implementation.',
    techTags: ['Pug', 'SASS', 'Vue.js'],
    demoUrl: 'https://front-end-with-love.github.io/portfolio/nmlk/'
  },
  {
    id: 8,
    title: 'Spacemarathon',
    tags: ['Portfolio case · Freelance', '~30–40 h'],
    stack: 'Pug · SASS · jQuery · Grunt',
    description:
      'Case layout for a design studio portfolio. jQuery for animations and interaction scenarios; single desktop mockup plus refs, layout reused as base for 7 other cases.',
    feature:
      'Template-first approach: one robust base implementation reused across multiple portfolio case pages.',
    bullets: [
      'Created a reusable base layout later replicated across 7 additional portfolio cases',
      'Implemented jQuery-driven animation sequences for scroll and click interactions',
      'Extended a single desktop concept into adaptive behavior for multiple viewports',
      'Kept codebase compact with reusable BEM blocks and shared style patterns'
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
      'One-page presentation site. jQuery for adaptivity, animation and interaction scenarios; desktop mockup and refs in spec, minimal client input.',
    feature:
      'Low-input project execution: converting minimal specs into a production-ready, visually consistent landing.',
    bullets: [
      'Delivered a complete one-page promo site from minimal input assets',
      'Implemented adaptive behavior and motion scripts with lightweight jQuery logic',
      'Maintained a clean code structure with BEM blocks and modular templates',
      'Achieved fast turnaround through a streamlined Pug/SASS + Grunt workflow'
    ],
    verification: 'Happy to share code and walk through the markup.',
    techTags: ['Pug', 'SASS', 'jQuery', 'Grunt', 'BEM'],
    demoUrl: 'https://front-end-with-love.github.io/portfolio/varejkino/'
  }
]
