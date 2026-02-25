<script setup lang="ts">
/** Soft-skills: bento grid of flip cards (design skill-card). */
import { ref } from 'vue'
import { softSkillsData } from '../model/softSkillsData'

const flippedIndices = ref<number[]>([])

function toggle(i: number) {
  const arr = flippedIndices.value
  flippedIndices.value = arr.includes(i) ? arr.filter((j) => j !== i) : [...arr, i]
}

function isFlipped(i: number) {
  return flippedIndices.value.includes(i)
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
    <div class="soft-skills__grid">
      <div
        v-for="(s, i) in softSkillsData"
        :key="s.title"
        class="soft-skills__card"
        :class="{ 'is-flipped': isFlipped(i) }"
        role="button"
        tabindex="0"
        :aria-pressed="isFlipped(i)"
        @click="toggle(i)"
        @keydown.enter.space.prevent="toggle(i)"
      >
        <div class="soft-skills__card-inner">
          <div class="soft-skills__card-front">
            <span class="soft-skills__card-num">{{ i < 9 ? '0' : '' }}{{ i + 1 }}</span>
            <h3 class="soft-skills__card-title">{{ s.title }}</h3>
            <div class="soft-skills__card-tags">
              <span
                v-for="tag in s.summary.split(' · ')"
                :key="tag"
                class="soft-skills__card-tag"
              >{{ tag.trim() }}</span>
            </div>
          </div>
          <div class="soft-skills__card-back">
            <p class="soft-skills__card-desc">{{ s.description }}</p>
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
@media (min-width: 768px) {
  .soft-skills__header {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (min-width: 1024px) {
  .soft-skills__header {
    padding-left: 3rem;
    padding-right: 3rem;
  }
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
.soft-skills__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .soft-skills__grid {
    padding-left: 2rem;
    padding-right: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .soft-skills__grid {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
.soft-skills__card {
  perspective: 1000px;
  cursor: pointer;
  min-height: 220px;
  outline: none;
}
.soft-skills__card:focus-visible {
  outline: 2px solid #ccff00;
  outline-offset: 2px;
}
.soft-skills__card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 220px;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  transform-style: preserve-3d;
}
.soft-skills__card.is-flipped .soft-skills__card-inner {
  transform: rotateY(180deg);
}
.soft-skills__card-front,
.soft-skills__card-back {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #050505;
}
.soft-skills__card-front:hover {
  border-color: rgba(204, 255, 0, 0.5);
}
.soft-skills__card-back {
  transform: rotateY(180deg);
  background: #ccff00;
  color: #000;
  border-color: #ccff00;
  justify-content: flex-start;
}
.soft-skills__card-num {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #555;
}
.soft-skills__card-title {
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  margin-top: 0.5rem;
  margin-bottom: auto;
}
.soft-skills__card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}
.soft-skills__card-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #888;
}
.soft-skills__card-desc {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.6;
  color: #000;
}
</style>
