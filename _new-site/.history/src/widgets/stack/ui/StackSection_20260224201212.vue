<script setup lang="ts">
/** Stack / Arsenal: Core, Frameworks, Motion, Build, AI, Philosophy — editorial layout from design. */
const coreSkills = [
  {
    title: 'HTML5',
    desc: 'Strict semantic structure, clean DOM architecture, scalability by design. Building markup as a system — not a collection of tags.',
    tags: ['Semantic', 'A11Y', 'SEO']
  },
  {
    title: 'CSS3 / SCSS',
    desc: 'Component isolation, predictable cascade control, maintainable styling systems. Scalable CSS structures built for long-term support.',
    tags: ['BEM', 'SCSS Modules', 'Pixel-Perfect']
  },
  {
    title: 'JavaScript ES6+',
    desc: 'Structured logic, modular code organization, state handling. TypeScript for type safety, contract-based interfaces, predictable API integration.',
    tags: ['ES6+', 'TypeScript', 'Modular']
  }
]
const frameworks = [
  { name: 'React.js', sub: 'Component-driven architecture, scalable UI systems', level: 'PRIMARY' },
  { name: 'Vue 3 / Nuxt 3', sub: 'Component isolation, production environments', level: 'PRIMARY' },
  { name: 'Next.js', sub: 'SSR / CSR, production-grade architecture', level: 'PROFICIENT' },
  { name: 'Tailwind / Styled', sub: 'Style encapsulation, predictable UI behavior', level: 'PROFICIENT' }
]
const motionItems = [
  { name: 'GSAP', dots: 5 },
  { name: 'Anime.js', dots: 4 },
  { name: 'Three.js', dots: 2 },
  { name: 'Canvas API', dots: 3 }
]
const toolchain = ['Vite', 'Gulp', 'Webpack', 'Git', 'ESLint', 'Prettier', 'Figma']
const principles = [
  'Architecture over chaotic speed.',
  'Scalability over short-term solutions.',
  'Code readable after six months — without explanation.',
  'An interface is a system, not a collection of screens.'
]
</script>

<template>
  <section class="stack">
    <div class="stack__glow" aria-hidden="true" />
    <div class="stack__header reveal-trigger">
      <span class="stack__num reveal-text">[03]&nbsp;&mdash; ARSENAL</span>
      <div class="stack__header-row">
        <h2 class="stack__title"><span class="reveal-text delay-100">Stack</span></h2>
        <span class="stack__sub reveal-text delay-300">FRONT-END ENGINEERING</span>
      </div>
      <div class="stack__header-line" />
    </div>

    <!-- Core row -->
    <div class="stack__core reveal-trigger">
      <div class="stack__core-label">
        <span class="stack__core-num reveal-text">01 &middot; CORE</span>
        <h3 class="stack__core-title"><span class="reveal-text delay-100 block">Core<br />Engineering</span></h3>
        <p class="stack__core-desc reveal-text delay-300">The foundation every project starts from. Structural, semantic, scalable.</p>
      </div>
      <div class="stack__core-skills">
        <div
          v-for="(s, i) in coreSkills"
          :key="s.title"
          class="stack__skill"
          :class="{ 'stack__skill--last': i === coreSkills.length - 1 }"
        >
          <div class="stack__skill-line" />
          <h4 class="stack__skill-title">{{ s.title }}</h4>
          <p class="stack__skill-desc">{{ s.desc }}</p>
          <div class="stack__skill-tags">
            <span
              v-for="t in s.tags"
              :key="t"
              class="stack__skill-tag"
              :class="{ 'stack__skill-tag--accent': t === 'Pixel-Perfect' }"
            >{{ t }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 2: Frameworks + Motion + Build + AI -->
    <div class="stack__row2">
      <div class="stack__frameworks reveal-trigger">
        <div class="stack__frameworks-head">
          <span class="stack__block-num reveal-text">02 &middot; FRAMEWORKS</span>
          <h3 class="stack__block-title"><span class="reveal-text delay-100 block">Framework<br />Ecosystem</span></h3>
        </div>
        <div class="stack__frameworks-list">
          <div
            v-for="f in frameworks"
            :key="f.name"
            class="stack__framework-item"
          >
            <div>
              <span class="stack__framework-name" :class="{ 'stack__framework-name--muted': f.level === 'PROFICIENT' }">{{ f.name }}</span>
              <span class="stack__framework-sub">{{ f.sub }}</span>
            </div>
            <span class="stack__framework-level" :class="{ 'stack__framework-level--muted': f.level === 'PROFICIENT' }">{{ f.level }}</span>
          </div>
        </div>
      </div>
      <div class="stack__motion-build">
        <div class="stack__motion reveal-trigger">
          <span class="stack__block-num reveal-text">03 · MOTION</span>
          <h3 class="stack__block-title"><span class="reveal-text delay-100 block">Animation<br />Layer</span></h3>
          <ul class="stack__motion-list">
            <li v-for="m in motionItems" :key="m.name" class="stack__motion-item">
              <span class="stack__motion-name" :class="{ 'stack__motion-name--muted': m.dots < 5 }">{{ m.name }}</span>
              <div class="stack__motion-dots">
                <span
                  v-for="d in 5"
                  :key="d"
                  class="stack__motion-dot"
                  :class="{ 'stack__motion-dot--empty': d > m.dots }"
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="stack__build reveal-trigger">
          <span class="stack__block-num reveal-text">04 · BUILD</span>
          <h3 class="stack__block-title"><span class="reveal-text delay-100">Toolchain</span></h3>
          <div class="stack__build-tags">
            <span
              v-for="t in toolchain"
              :key="t"
              class="stack__build-tag"
              :class="{ 'stack__build-tag--muted': !['Vite', 'Gulp'].includes(t) }"
            >{{ t }}</span>
          </div>
        </div>
      </div>
      <div class="stack__ai reveal-trigger">
        <span class="stack__ai-num reveal-text">05 · AI</span>
        <h3 class="stack__ai-title"><span class="reveal-text delay-100 block">AI-Driven<br />Engineering</span></h3>
        <div class="stack__ai-items">
          <div class="stack__ai-item">
            <div class="stack__ai-item-title">Cursor IDE</div>
            <div class="stack__ai-item-desc">LLM into real-world dev. Structured rules, context engineering, diff-based workflows.</div>
          </div>
          <div class="stack__ai-item">
            <div class="stack__ai-item-title">Prompt Engineering</div>
            <div class="stack__ai-item-desc">Minimal context for precise model interaction. Writing rules that actually work.</div>
          </div>
          <div class="stack__ai-item">
            <div class="stack__ai-item-title">AI Refactoring</div>
            <div class="stack__ai-item-desc">Controlled automation. 3–4× speed while maintaining quality.</div>
          </div>
        </div>
        <div class="stack__ai-footer">
          <span class="stack__ai-trend">TREND 2025–2026</span>
        </div>
      </div>
    </div>

    <!-- Philosophy -->
    <div class="stack__philosophy reveal-trigger">
      <div class="stack__philosophy-head">
        <span class="stack__philosophy-label reveal-text">ENGINEERING PHILOSOPHY</span>
        <div class="stack__philosophy-line" />
        <span class="stack__philosophy-count reveal-text delay-200">04 PRINCIPLES</span>
      </div>
      <div class="stack__principles">
        <div
          v-for="(p, i) in principles"
          :key="i"
          class="stack__principle"
          :class="{
            'stack__principle--br': i < 2,
            'stack__principle--rr': i % 2 === 0 && i < 2,
            'stack__principle--r': i === 2
          }"
        >
          <span class="stack__principle-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <p class="stack__principle-text">{{ p }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  padding: 8rem 1rem;
  background: #050505;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}
.stack__glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle, rgba(204, 255, 0, 0.03) 0%, transparent 70%);
}
.stack__header {
  margin-bottom: 5rem;
  position: relative;
}
.stack__num {
  font-family: var(--font-mono);
  display: block;
  font-size: 0.75rem;
  color: #ccff00;
  margin-bottom: 1rem;
}
.stack__header-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
}
.stack__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4.5rem);
  font-weight: 700;
  text-transform: uppercase;
}
.stack__sub {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #444;
  letter-spacing: 0.2em;
  margin-bottom: 0.5rem;
  display: none;
}
.stack__header-line {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  margin-top: 2rem;
}

/* Core row */
.stack__core {
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1px;
}
.stack__core-label {
  background: #0f0f0f;
  padding: 2.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.stack__core-num {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #444;
  letter-spacing: 0.2em;
  display: block;
  margin-bottom: 1.5rem;
}
.stack__core-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
}
.stack__core-desc {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #555;
  line-height: 1.5;
  margin-top: 2rem;
}
.stack__core-skills {
  display: grid;
  grid-template-columns: 1fr;
}
.stack__skill {
  background: #0f0f0f;
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  transition: background 0.3s;
}
.stack__skill:hover {
  background: rgba(255, 255, 255, 0.03);
}
.stack__skill--last {
  border-right: none;
  border-bottom: none;
}
.stack__skill-line {
  width: 1.5rem;
  height: 1px;
  background: #ccff00;
  margin-bottom: 1.5rem;
  transition: width 0.5s;
}
.stack__skill:hover .stack__skill-line {
  width: 3rem;
}
.stack__skill-title {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.stack__skill-desc {
  font-size: 0.75rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1rem;
}
.stack__skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.stack__skill-tag {
  font-family: var(--font-mono);
  padding: 0.25rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  font-size: 10px;
  color: #888;
}
.stack__skill-tag--accent {
  background: rgba(204, 255, 0, 0.1);
  color: #ccff00;
}

/* Row 2 */
.stack__row2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
}
.stack__block-num {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #444;
  letter-spacing: 0.2em;
  display: block;
  margin-bottom: 1rem;
}
.stack__block-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.stack__frameworks {
  background: #0f0f0f;
  /* border: 1px solid rgba(255, 255, 255, 0.05); */
  border-radius: 1rem;
  overflow: hidden;
}
.stack__frameworks-head {
  padding: 2rem;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.05); */
}
.stack__frameworks-list {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.stack__framework-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background 0.3s;
}
.stack__framework-item:last-child {
  border-bottom: none;
}
.stack__framework-item:hover {
  background: rgba(255, 255, 255, 0.03);
}
.stack__framework-name {
  font-family: var(--font-display);
  font-weight: 700;
  color: #fff;
  display: block;
}
.stack__framework-name--muted {
  color: #888;
}
.stack__framework-sub {
  font-size: 0.75rem;
  color: #444;
  font-family: var(--font-mono);
  display: block;
  margin-top: 0.125rem;
}
.stack__framework-level {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #ccff00;
}
.stack__framework-level--muted {
  color: #555;
}

.stack__motion-build {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.stack__motion,
.stack__build {
  background: #0f0f0f;
  padding: 2rem;
  /* border: 1px solid rgba(255, 255, 255, 0.05); */
  border-radius: 1rem;
}
.stack__motion-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.stack__motion-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.stack__motion-item:last-child {
  margin-bottom: 0;
}
.stack__motion-name {
  font-family: var(--font-display);
  font-weight: 700;
}
.stack__motion-name--muted {
  color: #888;
}
.stack__motion-dots {
  display: flex;
  gap: 0.25rem;
}
.stack__motion-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccff00;
}
.stack__motion-dot--empty {
  background: rgba(255, 255, 255, 0.1);
}
.stack__build-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}
.stack__build-tag {
  font-family: var(--font-mono);
  padding: 0.375rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  font-size: 0.75rem;
  color: #fff;
}
.stack__build-tag--muted {
  color: #888;
}

.stack__ai {
  background: linear-gradient(135deg, rgba(204, 255, 0, 0.04) 0%, #0f0f0f 60%);
  /* border: 1px solid rgba(204, 255, 0, 0.15); */
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.stack__ai-num {
  font-family: var(--font-mono);
  font-size: 10px;
  color: rgba(204, 255, 0, 0.6);
  letter-spacing: 0.2em;
  display: block;
  margin-bottom: 1rem;
}
.stack__ai-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
.stack__ai-items {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.stack__ai-item {
  border-left: 2px solid rgba(204, 255, 0, 0.4);
  padding-left: 1rem;
}
.stack__ai-item-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.875rem;
  color: #ccff00;
  margin-bottom: 0.25rem;
}
.stack__ai-item-desc {
  font-size: 11px;
  color: #555;
  line-height: 1.5;
}
.stack__ai-footer {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(204, 255, 0, 0.1);
}
.stack__ai-trend {
  font-family: var(--font-mono);
  font-size: 10px;
  color: rgba(204, 255, 0, 0.4);
  letter-spacing: 0.2em;
}

/* Philosophy */
.stack__philosophy {
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.stack__philosophy-head {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;
}
.stack__philosophy-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #444;
  letter-spacing: 0.2em;
}
.stack__philosophy-line {
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
}
.stack__philosophy-count {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #444;
}
.stack__principles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
}
.stack__principle {
  background: #0f0f0f;
  padding: 2.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  transition: background 0.3s;
}
.stack__principle:hover {
  background: rgba(255, 255, 255, 0.03);
}
.stack__principle--br {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.stack__principle--rr {
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}
.stack__principle--r {
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}
.stack__principle-num {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.05);
  line-height: 1;
  flex-shrink: 0;
  transition: color 0.3s;
}
.stack__principle:hover .stack__principle-num {
  color: rgba(204, 255, 0, 0.1);
}
.stack__principle-text {
  font-family: var(--font-display);
  font-size: 1.25rem;
  line-height: 1.3;
  padding-top: 0;
  margin: 0;
}

@media (min-width: 768px) {
  .stack {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .stack__sub {
    display: block;
  }
  .stack__core {
    grid-template-columns: 1fr 2.25fr;
  }
  .stack__core-skills {
    grid-template-columns: repeat(3, 1fr);
  }
  .stack__skill {
    border-bottom: none;
  }
  .stack__skill--last {
    border-right: none;
  }
  .stack__row2 {
    grid-template-columns: 5fr 4fr 3fr;
  }
  .stack__principles {
    grid-template-columns: repeat(2, 1fr);
  }
  .stack__principle--br {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .stack__principle--rr {
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }
  .stack__principle:nth-child(3) {
    border-bottom: none;
  }
}
</style>
