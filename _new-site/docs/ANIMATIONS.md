# Анимации лендинга

Отчёт и описание реализованных анимаций.

## Текущее состояние (после реализации)

- **Hero:** `reveal-text` по IntersectionObserver, stagger; bounce на «Scroll»; **параллакс заголовка** через GSAP ScrollTrigger (y до −60px при скролле секции), отключён при `prefers-reduced-motion: reduce`.
- **Nav:** в потоке документа (не fixed), при скролле уходит за экран вместе с контентом; при загрузке — анимация появления сверху из прозрачности (opacity + translateY); при `prefers-reduced-motion: reduce` показывается сразу. Пульс точки статуса, кастомный курсор через `hover-trigger`.
- **Loader:** выход через `transform: scaleY(0)` при `loaded`.
- **Marquee:** бесконечная горизонтальная прокрутка (CSS).
- **About:** `reveal-trigger` на номер секции и на контент; headline, stats, «EXPERIENCE HIGHLIGHTS» и каждая строка опыта — `reveal-text` с задержками / stagger. Клик по строке работодателя (`about__row`) переключает показ описания вакансии в левой колонке; блок описания и номер секции — `position: sticky` (top: 24px и calc(24px + 2rem)).
- **Projects:** заголовок секции обёрнут в `reveal-trigger`, номер / заголовок / мета — `reveal-text` с delay-100, delay-300.
- **Stack:** заголовок секции и блоки (Core, Frameworks, Motion, Build, AI, Philosophy) — `reveal-trigger` + `reveal-text` на заголовках блоков с задержками.
- **Contact:** верх (номер + «Let's Talk») и сетка (инфо + форма) — `reveal-trigger` + `reveal-text` с delay.

Стек: Vue 3, Vite, CSS, IntersectionObserver, **GSAP + ScrollTrigger** (регистрация в `main.ts`, параллакс в `HeroSection.vue`).

## Глобальные классы reveal

В [design.css](src/shared/styles/design.css): `.reveal-text`, `.reveal-text.active`, `.reveal-text.delay-100` … `delay-500`, `.reveal-text.block`. Логика появления — [useReveal](src/features/reveal/model/useReveal.ts), наблюдатель на `.reveal-trigger` и `section` (подключён в [LandingPage.vue](src/pages/landing/ui/LandingPage.vue)).

## GSAP и параллакс

- Установка: `gsap` в `dependencies`, регистрация `ScrollTrigger` в [main.ts](src/main.ts).
- Параллакс: в [HeroSection.vue](src/widgets/hero/ui/HeroSection.vue) — ref секции и заголовка, в `onMounted` создаётся `ScrollTrigger` с `scrub: true`, при скролле Hero заголовок смещается по Y (до −60px). В `onUnmounted` триггер убивается. При `prefers-reduced-motion: reduce` параллакс не инициализируется.
