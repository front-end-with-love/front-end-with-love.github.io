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
      'UX/UI layout developer for an international construction company based in Dubai. Markup and JS for a closed internal system on 1C-Bitrix CMS: forms, validation, integration scripts.',
    bullets: [
      'Figma-synced design system in HTML/CSS/JS',
      'JS scripts for form logic, validation, CMS integration',
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
      'Frontend development for an NFT casino on Next.js. Full cycle: design, component architecture, React/TypeScript for UI and game flow, client-side state and interaction scenarios.',
    bullets: [
      'Responsive fluid layout 320px–2560px',
      'Pixel-perfect match to mockups',
      'Component-based UI structure and reusable components',
      'TypeScript: state, game logic, client-side scenarios',
      'Web3 integration and interface scripts'
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
      'Multilingual portal with a catalog of mods, maps, skins and articles for Minecraft PE. BEM markup plus vanilla JS: filters, galleries, accordions, modals, adaptive menu, interaction scenarios.',
    bullets: [
      'Component structure for cards, filters, galleries (BEM)',
      'JS for filters, accordions, modals, adaptive menu',
      'SEO-optimized HTML and CSS',
      'Responsive 320px–2560px',
      'Accessibility and semantic markup',
      'Non-trivial scripts for UI behavior and user flows'
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
      'Landing and product catalog for a subscription flower delivery service. Premium look, JS for accordions, modals, sticky header, WhatsApp widget, form handling and animation scenarios.',
    bullets: [
      'Home, catalog, order form, business section, contacts',
      'JS for accordions, modals, sticky header, WhatsApp widget, forms',
      'Typography and visual hierarchy aligned with design',
      'Accessibility and semantics',
      'Interactive scenarios and scroll/click behavior'
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
      'Corporate site for an engineering institute: strict style, technical content, brand guidelines. JS for maps, contact form, dynamic blocks and integration scripts.',
    bullets: [
      'Pages: About, Projects, Contacts, Careers, News',
      'JS scripts for maps, contact form, validation',
      'Pixel-perfect to technical mockups',
      'Typography and semantics for SEO',
      'Dynamic behavior and integration scenarios'
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
    stack: 'Pug · SASS · Vue.js',
    description:
      'Layout of a promo page for an innovative product. Vue.js and Skrollr for structure and scroll-driven animation scenarios; desktop and mobile from video reference and designer feedback.',
    bullets: [
      'Desktop and mobile versions',
      'Vue.js + Skrollr: scroll scenarios, animation logic, state',
      'JS-driven scroll and interaction flows',
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
      'Case layout for a design studio portfolio. jQuery for animations and interaction scenarios; single desktop mockup plus refs, layout reused as base for 7 other cases.',
    bullets: [
      'Unified block structure for reuse across cases',
      'jQuery: animation and interaction scenarios, scroll/click logic',
      'Adaptive design and animation conceived and implemented in JS',
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
      'One-page presentation site. jQuery for adaptivity, animation and interaction scenarios; desktop mockup and refs in spec, minimal client input.',
    bullets: [
      'Simple presentation landing',
      'jQuery: adaptive behavior, animation, interactive scenarios',
      'Adaptive layout and animation scripts',
      'BEM, Grunt, Pug, SASS'
    ],
    verification: 'Happy to share code and walk through the markup.',
    techTags: ['Pug', 'SASS', 'jQuery', 'Grunt', 'BEM'],
    demoUrl: 'https://front-end-with-love.github.io/portfolio/varejkino/'
  }
]
