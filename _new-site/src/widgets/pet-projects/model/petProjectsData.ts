// Данные для секции пет-проектов: личные проекты и эксперименты (карточки с описанием, highlights, стек, опционально ссылка на репо).

// Тип карточки: id, заголовок, подзаголовок, описание, массив ключевых пунктов, стек, опционально URL репозитория
export type PetProjectItem = {
  id: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  stack: string[]
  repoUrl?: string
}

export const petProjectsData: PetProjectItem[] = [
  {
    id: 'llm-2-siri',
    title: 'LLM to Siri',
    subtitle: 'Siri Shortcut backend',
    description:
      'Production-ready voice backend for Siri Shortcuts on Cloudflare Workers: accepts natural speech queries, resolves them through a multi-provider LLM chain, and returns concise spoken answers with low-latency edge execution.',
    highlights: [
      'Provider failover chain (A4F → z.ai → VoidAI) with stable error codes for diagnostics',
      'Encrypted conversational memory in Cloudflare D1 (AES-GCM + gzip), 7-day TTL + scheduled cleanup',
      'Token-gated API for personal devices and robust request validation for iOS shortcut flows'
    ],
    stack: ['Cloudflare Workers', 'D1', 'LLM', 'Siri Shortcuts']
  },
  {
    id: 'astrology',
    title: 'Astrology',
    subtitle: 'Telegram Mini App',
    description:
      'Interactive Telegram Mini App built with Vue 3 and PocketBase, focused on immersive astrology UX and lightweight in-app navigation patterns for mobile-first usage inside Telegram.',
    highlights: [
      'Client architecture prepared for TWA constraints: quick startup, compact screens, touch-first interactions',
      'Visual layer combines Three.js scenes and carousel storytelling for richer onboarding/report screens',
      'Design-token driven UI workflow from Pixso/Figma to reusable Vue components'
    ],
    stack: ['Vue 3', 'PocketBase', 'Three.js', 'Telegram TWA']
  },
  {
    id: 'figma-to-cursor',
    title: 'Figma to Cursor MCP',
    subtitle: 'Design automation',
    description:
      'MCP bridge between Figma and Cursor AI that turns design operations into programmable workflows: reading node trees, editing content at scale, and automating repetitive design-system tasks.',
    highlights: [
      'Bidirectional pipeline: Cursor commands → Figma plugin via WebSocket channel',
      'Batch operations for text replacement, annotations, and instance override propagation',
      'Tooling for advanced workflows: prototype reaction extraction and connector generation'
    ],
    stack: ['MCP', 'Figma Plugin', 'Bun', 'WebSocket']
  },
  {
    id: 'qa-parents',
    title: 'QA Parents',
    subtitle: 'Voice assistant for parents',
    description:
      'PWA voice assistant focused on family Q&A scenarios: one-button hold-to-talk UX, local/remote STT fallback, multi-provider reasoning, and immediate speech playback for hands-free use from phone or tablet.',
    highlights: [
      'Voice pipeline: STT (Whisper/mlx-whisper) → LLM router (VoidAI/OpenRouter/Groq/g4f) → edge-tts',
      'Context-aware dialogs with session memory, optional web-search tooling, and ensemble mode (2–8 roles)',
      'Practical deployment path: local run, ngrok access, installable mobile PWA experience'
    ],
    stack: ['Python', 'Vue 3', 'Vuetify', 'Whisper', 'LLM']
  },
  {
    id: 'tg-parse',
    title: 'TG Parse',
    subtitle: 'Telegram vacancy parser',
    description:
      'Automated Telegram pipeline for frontend vacancy sourcing: monitors multiple channels, classifies posts with LLM + keyword heuristics, and publishes only high-signal vacancies after strict deduplication.',
    highlights: [
      'Clean/Hexagonal architecture with explicit ports/adapters and testable domain logic',
      'Two-level deduplication (exact + RapidFuzz similarity) tuned for noisy repost ecosystems',
      'Graceful degradation strategy with provider fallback (Mistral → Groq → LM Studio) and idempotent runs'
    ],
    stack: ['Python', 'Telethon', 'RapidFuzz', 'SQLite', 'LLM']
  }
]
