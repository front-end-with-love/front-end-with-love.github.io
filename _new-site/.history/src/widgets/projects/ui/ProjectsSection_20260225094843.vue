<script setup lang="ts">
/** Projects accordion: open/close one at a time. */
import { ref } from 'vue'
import { projectsData } from '../model/projectsData'

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="projects" class="projects">
    <div class="projects__header reveal-trigger">
      <span class="projects__num reveal-text">[03]&nbsp;&mdash; SELECTED WORKS</span>
      <h2 class="projects__title"><span class="reveal-text delay-100">Projects</span></h2>
      <p class="projects__meta"><span class="reveal-text delay-300 block">Layout &middot; JS &middot; Scripts &middot; Interaction scenarios<br />SPA &middot; Landing &middot; E-com<br>AI · Russia &rarr; Worldwide</span></p>
    </div>
    <div class="projects__accordion">
      <div
        v-for="(p, i) in projectsData"
        :key="p.id"
        class="projects__item"
        :class="{ 'is-open': openIndex === i }"
      >
        <button
          type="button"
          class="projects__trigger"
          :aria-expanded="openIndex === i"
          @click="toggle(i)"
        >
          <span class="projects__index">0{{ i + 1 }}</span>
          <div>
            <h3 class="projects__name">{{ p.title }}</h3>
            <div class="projects__tags">
              <span v-for="tag in p.tags" :key="tag" class="projects__tag">{{ tag }}</span>
            </div>
          </div>
          <span class="projects__stack">{{ p.stack }}</span>
          <span class="projects__icon" aria-hidden="true">+</span>
        </button>
        <div class="projects__body" :style="{ maxHeight: openIndex === i ? '1200px' : '0' }">
          <div class="projects__body-inner">
            <div class="projects__body-left">
              <p class="projects__desc">{{ p.description }}</p>
              <ul class="projects__bullets">
                <li v-for="(b, bi) in p.bullets" :key="bi" class="projects__bullet">
                  <span class="projects__bullet-arrow">&rarr;</span>
                  {{ b }}
                </li>
              </ul>
            </div>
            <div class="projects__body-right">
              <a
                v-if="p.demoUrl"
                :href="p.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="projects__demo hover-trigger"
              >
                Demo &rarr;
              </a>
              <div
                class="projects__verification"
                :class="{ 'projects__verification--accent': p.verificationAccent }"
              >
                <span class="projects__verification-label">{{ p.verificationAccent ? 'AI-DEV · TREND 2025' : 'VERIFICATION' }}</span>
                <p>{{ p.verification }}</p>
              </div>
              <div class="projects__tech">
                <span
                  v-for="t in p.techTags"
                  :key="t"
                  class="projects__tech-tag"
                  :class="{ 'projects__tech-tag--accent': p.verificationAccent && (t.startsWith('Cursor') || t.startsWith('LLM')) }"
                >{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="projects__footer">
      <a
        href="https://front-end-with-love.github.io"
        target="_blank"
        rel="noopener noreferrer"
        class="projects__archive"
      >
        Portfolio Archive
        <span class="projects__arrow">→</span>
      </a>
      <span class="projects__count">20+ projects since 2011</span>
    </div> -->
  </section>
</template>

<style scoped>
.projects {
  padding: 8rem 1rem 4rem;
  background: #0f0f0f;
  position: relative;
}
.projects__header {
  margin-bottom: 4rem;
  padding: 0 1rem;
}
@media (min-width: 768px) {
  .projects__header {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
.projects__num {
  font-family: var(--font-mono);
  display: block;
  font-size: 0.75rem;
  color: #ccff00;
  margin-bottom: 1rem;
}
.projects__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  text-transform: uppercase;
}
.projects__meta {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: #888;
  margin-top: 1rem;
}
.projects__accordion {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.projects__item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.projects__trigger {
  width: 100%;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 2rem 1fr 2.5rem;
  align-items: center;
  gap: 1rem 2rem;
  text-align: left;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: background 0.3s;
  will-change: background-color;
}
.projects__trigger > div {
  min-width: 0;
}
.projects__trigger:hover {
  background: rgba(255, 255, 255, 0.03);
}
@media (min-width: 768px) {
  .projects__trigger {
    padding-left: 3rem;
    padding-right: 3rem;
    grid-template-columns: 2rem 1fr 14rem 2.5rem;
  }
}
.projects__item.is-open .projects__name {
  color: #ccff00;
}
.projects__index {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #444;
}
.projects__name {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 3rem);
  font-weight: 700;
  transition: color 0.3s;
  will-change: color;
}
.projects__tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.projects__tag {
  font-family: var(--font-mono);
  font-size: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  color: #888;
  white-space: nowrap;
}
.projects__stack {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #555;
  display: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (min-width: 768px) {
  .projects__stack {
    display: block;
  }
}
.projects__icon {
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  will-change: transform;
}
.projects__item.is-open .projects__icon {
  transform: rotate(45deg);
  border-color: #ccff00;
  background: #ccff00;
  color: #050505;
}
.projects__body {
  overflow: hidden;
  transition: max-height 1s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: max-height;
}
.projects__body-inner {
  padding: 1rem 1rem 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}
@media (min-width: 768px) {
  .projects__body-inner {
    padding-left: 3rem;
    padding-right: 3rem;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
    padding-top: 1.5rem;
  }
}
.projects__body-left {
  grid-column: 1;
}
@media (min-width: 768px) {
  .projects__body-left {
    grid-column: 2 / span 5;
  }
}
.projects__body-right {
  grid-column: 1;
}
@media (min-width: 768px) {
  .projects__body-right {
    grid-column: 8 / span 5;
  }
}
.projects__demo {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: #ccff00;
  text-decoration: none;
  margin-bottom: 1rem;
  display: inline-block;
  transition: opacity 0.3s;
  will-change: opacity;
}
.projects__demo:hover {
  opacity: 0.8;
}
.projects__desc {
  color: #888;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.projects__bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}
.projects__bullet {
  font-family: var(--font-mono);
  display: flex;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: #888;
  margin-bottom: 0.5rem;
}
.projects__bullet-arrow {
  color: #ccff00;
  flex-shrink: 0;
}
.projects__verification {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  padding: 1.5rem;
}
.projects__verification--accent {
  background: rgba(204, 255, 0, 0.05);
  border-color: rgba(204, 255, 0, 0.2);
}
.projects__verification-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  color: #555;
  display: block;
  margin-bottom: 0.5rem;
}
.projects__verification--accent .projects__verification-label {
  color: rgba(204, 255, 0, 0.6);
}
.projects__verification p {
  font-size: 0.875rem;
  color: #888;
}
.projects__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}
.projects__tech-tag {
  font-family: var(--font-mono);
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 9999px;
  font-size: 0.75rem;
  color: #888;
}
.projects__tech-tag--accent {
  background: rgba(204, 255, 0, 0.1);
  color: #ccff00;
}
.projects__footer {
  padding: 4rem 1rem 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  display: none;
}
.projects__archive {
  font-family: var(--font-mono);
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #e1e1e1;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
  will-change: background-color, color;
}
.projects__archive:hover {
  background: #fff;
  color: #050505;
}
.projects__arrow {
  transition: transform 0.3s;
  will-change: transform;
}
.projects__archive:hover .projects__arrow {
  transform: translate(2px, -2px);
}
.projects__count {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #444;
}
</style>
