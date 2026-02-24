# Portfolio landing (Vue + FSD 2.0)

Vue 3 + Vite + TypeScript single-page landing. Architecture follows FSD 2.0 (Feature-Sliced Design); no Tailwind.

- **Run:** `npm install` then `npm run dev` (http://localhost:5173)
- **Build:** `npm run build` → `dist/` (static HTML/CSS/JS for GitHub Pages)
- **Lint/format:** ESLint + Prettier (see `.eslintrc.cjs`, `.prettierrc.json`)

Layers: `app` (router), `pages/landing`, `widgets` (loader, nav, hero, marquee, about, projects, stack, contact), `features` (loader, reveal, cursor, hover-trigger), `entities`, `shared` (styles, design tokens). Imports only via public API (`index.ts`).
