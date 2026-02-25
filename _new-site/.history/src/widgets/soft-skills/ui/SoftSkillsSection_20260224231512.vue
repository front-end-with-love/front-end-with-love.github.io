<script setup lang="ts">
/** Soft-skills accordion: one open at a time. */
import { ref } from 'vue'
import { softSkillsData } from '../model/softSkillsData'

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="soft-skills" class="soft-skills">
    <div class="soft-skills__header reveal-trigger">
      <span class="soft-skills__num reveal-text">[02]&nbsp;&mdash; SOFT-SKILLS</span>
      <h2 class="soft-skills__title"><span class="reveal-text delay-100">Soft-skills</span></h2>
      <p class="soft-skills__meta">
        <span class="reveal-text delay-300 block">Communication &middot; Teamwork &middot; Problem solving &middot; Learning</span>
      </p>
    </div>
    <div class="soft-skills__accordion">
      <div
        v-for="(s, i) in softSkillsData"
        :key="s.title"
        class="soft-skills__item"
        :class="{ 'is-open': openIndex === i }"
      >
        <button
          type="button"
          class="soft-skills__trigger"
          :aria-expanded="openIndex === i"
          @click="toggle(i)"
        >
          <span class="soft-skills__index">{{ i < 9 ? '0' : '' }}{{ i + 1 }}</span>
          <h3 class="soft-skills__name">{{ s.title }}</h3>
          <span class="soft-skills__icon" aria-hidden="true">+</span>
        </button>
        <div class="soft-skills__body" :style="{ maxHeight: openIndex === i ? '800px' : '0' }">
          <div class="soft-skills__body-inner">
            <p class="soft-skills__desc">{{ s.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.soft-skills {
  padding: 8rem 1rem 4rem;
  background: #0f0f0f;
  position: relative;
}
.soft-skills__header {
  margin-bottom: 4rem;
  padding: 0 1rem;
}
.soft-skills__num {
  font-family: var(--font-mono);
  display: block;
  font-size: 0.75rem;
  color: #ccff00;
  margin-bottom: 1rem;
}
.soft-skills__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  text-transform: uppercase;
}
.soft-skills__meta {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: #888;
  margin-top: 1rem;
}
.soft-skills__accordion {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.soft-skills__item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.soft-skills__trigger {
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
}
.soft-skills__trigger:hover {
  background: rgba(255, 255, 255, 0.03);
}
.soft-skills__item.is-open .soft-skills__name {
  color: #ccff00;
}
.soft-skills__index {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #444;
}
.soft-skills__name {
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 2.5vw, 2.25rem);
  font-weight: 700;
  transition: color 0.3s;
}
.soft-skills__icon {
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
}
.soft-skills__item.is-open .soft-skills__icon {
  transform: rotate(45deg);
  border-color: #ccff00;
  background: #ccff00;
  color: #050505;
}
.soft-skills__body {
  overflow: hidden;
  transition: max-height 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.soft-skills__body-inner {
  padding: 0 1rem 3rem;
}
.soft-skills__desc {
  color: #888;
  line-height: 1.6;
  font-size: 1rem;
  max-width: 42rem;
}
@media (min-width: 768px) {
  .soft-skills__header,
  .soft-skills__trigger,
  .soft-skills__body-inner {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .soft-skills__trigger {
    grid-template-columns: 2rem 1fr 2.5rem;
  }
}
</style>
