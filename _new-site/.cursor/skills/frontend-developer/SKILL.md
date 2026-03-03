---
name: frontend-developer
description: Applies Vue 3, TypeScript, FSD 2.0, components, accessibility, and performance conventions for this project. Use when writing or modifying Vue components, adding widgets or features, styling, or reviewing frontend code.
---

# Frontend developer

Concise checklist for Vue/TS/CSS work in this repo. Full details: [docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md), [.cursor/rules/reuse-and-architecture.mdc](.cursor/rules/reuse-and-architecture.mdc), [.cursor/rules/vue-concise-human.mdc](.cursor/rules/vue-concise-human.mdc).

## Architecture (FSD 2.0)

**Layers** (top to bottom): `app` → `pages` → `widgets` → `features` → `entities` → `shared`.

- **New widget:** `widgets/<name>/ui/<Name>Section.vue` (or similar), export in `widgets/<name>/index.ts`.
- **New feature:** `features/<name>/`, public API in `index.ts`.
- **Shared UI or lib:** `shared/ui` or `shared/lib`; styles/tokens in `shared/styles/design.css`.

**Import rules:**

- Import a slice only via its public API: `@/widgets/stack`, `@/features/cursor`. Never use internal paths like `@/widgets/stack/ui/StackSection.vue`.
- No imports from a higher layer or from sibling slices in the same layer.

## Code style

- **Prettier:** `semi: false`, `singleQuote: true`, `tabWidth: 2`, `printWidth: 100`, `trailingComma: none` (see [.prettierrc.json](.prettierrc.json)). Match [.eslintrc.cjs](.eslintrc.cjs).
- **Concise:** Minimal JSDoc (one short line); no redundant types or comments; KISS/DRY; short composables. Types and names should convey the contract.

## Components

- **Composition API** only. Composables return one object, not multiple callbacks.
- Prefer few props; use provide/inject (typed Symbol or single context object) when passing down.
- Barrel files: minimal exports, short names.

## Accessibility

- **Headings:** One visible `h1` (Hero); section headings in logical order (h2, h3).
- **Focus & keyboard:** All interactive elements focusable; icon-only buttons and external links get `aria-label`; external links use `rel="noopener noreferrer"`.
- **Motion:** Respect `prefers-reduced-motion` (disable parallax/entrance animations when reduced).
- **Decorative:** Cursor, marquee, glitch layers → `aria-hidden="true"`.
- **Live regions:** Loader uses `role="status"` and `aria-live="polite"` where appropriate.

Full checklist: PROJECT_OVERVIEW sections "Accessibility" and "SEO".

## Performance

- Avoid unnecessary re-renders and heavy work in templates.
- GSAP/ScrollTrigger are registered in `main.ts`; reuse them, do not re-init globally.
- Images: set explicit `width` and `height` where possible to reduce CLS.

## Before you add code

1. **Reuse:** Check `shared/ui`, `features`, `widgets` for existing components or logic.
2. **New slice:** Place in the correct layer and expose via public API (`index.ts`).
3. **Styling:** Use design tokens and global classes from `shared/styles/design.css` (e.g. `.reveal-text`, `.hover-trigger`) where they fit.
