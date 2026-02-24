# Project Overview

Portfolio landing — SPA, static deploy to GitHub Pages.

## Stack

- Vue 3, TypeScript, Vite
- GSAP + ScrollTrigger (parallax, registered in `main.ts`)
- Pinia (installed, no stores yet)
- Vue Router 4 (`createWebHistory`)
- No Tailwind — custom CSS with design tokens

## Entry points

- `index.html` → `src/main.ts` → `App.vue` → `router` → `pages/landing`
- Styles: `src/style.css` → `src/shared/styles/design.css`

## FSD 2.0 layers

```
app/
  App.vue                   # noise layer, cursor DOM, router-view
  providers/router/         # createWebHistory, single route /

pages/
  landing/                  # LandingPage: widget composition + feature init

widgets/
  loader/                   # full-screen progress bar, uses features/loader
  nav/                      # fixed top nav
  hero/                     # name, tagline, CTA; GSAP parallax
  marquee/                  # infinite CSS marquee
  about/                    # stats + experience table
  projects/                 # accordion, data in model/projectsData.ts
  stack/                    # skills/tools editorial layout
  contact/                  # links + footer

features/
  loader/                   # progress ref 0–100, loaded flag
  reveal/                   # IntersectionObserver → .active on .reveal-text
  cursor/                   # dot + ring follow mouse (rAF lerp)
  hover-trigger/            # .hover-active on body for .hover-trigger elements

entities/                   # empty (placeholder)
shared/
  styles/design.css         # CSS variables, global classes (reveal-text, cursor, noise)
```

## Import rules (FSD)

- Import only through slice public API: `@/widgets/stack`, `@/features/cursor`, etc.
- No imports from a slice's internal paths (e.g. `@/widgets/stack/ui/StackSection.vue`).
- No imports from higher layers or sibling slices within the same layer.

## Global CSS classes (design.css)

| Class | Purpose |
|---|---|
| `.reveal-text` | Hidden by default; `.active` triggers clip-path + translateY animation |
| `.reveal-text.delay-N` | N = 100–500ms; transition-delay variants |
| `.reveal-text.block` | Sets `display: block` |
| `.noise-layer` | Fixed SVG noise overlay (App.vue) |
| `.cursor-dot` / `.cursor-ring` | Custom cursor elements (App.vue) |
| `body.cursor-hidden` | Hides default cursor on non-touch |
| `body.hover-active` | Enlarges cursor ring on `.hover-trigger` hover |

## Build & deploy

```bash
npm run build   # → dist/ (static HTML/CSS/JS, base: '/')
npm run preview # local preview of dist/
```

Deploy: manually copy `dist/` contents to the target branch/location on GitHub Pages.
`base: '/'` in `vite.config.ts` assumes site served from repo root (`front-end-with-love.github.io`).
