<script setup lang="ts">
// Секция образования: сетка карточек (колледж + курсы), данные из educationData.

import { educationData } from '../model/educationData'
</script>

<template>
  <section id="education" class="education">
    <div class="education__header reveal-trigger">
      <span class="education__num reveal-text">[05]&nbsp;&mdash; EDUCATION</span>
      <h2 class="education__title"><span class="reveal-text delay-100">EDUCATION</span></h2>
      <p class="education__meta">
        <span class="reveal-text delay-300 block">College &middot; Courses &middot; Self-learning. From fundamentals to&nbsp;advanced async.</span>
      </p>
    </div>
    <div class="education__grid">
      <!-- v-for по educationData; :key — уникальная пара program + period -->
      <article
        v-for="(item, i) in educationData"
        :key="item.program + item.period"
        class="education__card reveal-trigger"
      >
        <span class="education__card-num">{{ i < 9 ? '0' : '' }}{{ i + 1 }}</span>
        <span class="education__place">{{ item.place }}</span>
        <h3 class="education__program">{{ item.program }}</h3>
        <span class="education__period">{{ item.period }}</span>
        <p class="education__desc">{{ item.description }}</p>
        <div class="education__tags">
          <span v-for="tag in item.stack" :key="tag" class="education__tag">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.education {
  padding: 8rem 1rem 7rem;
  background: #0f0f0f;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.education__header {
  margin-bottom: 4rem;
  padding: 0 1rem;
}
@media (min-width: 768px) {
  .education__header {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (min-width: 1024px) {
  .education__header {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
.education__num {
  font-family: var(--font-mono);
  display: block;
  font-size: 0.75rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}
.education__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  text-transform: uppercase;
}
.education__meta {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: #888;
  margin-top: 1rem;
}

.education__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 0 1rem;
}
@media (min-width: 768px) {
  .education__grid {
    padding-left: 2rem;
    padding-right: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .education__grid {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
.education__card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  background: #050505;
  min-width: 0;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s;
}
.education__card:hover {
  border-color: rgba(204, 255, 0, 0.3);
}
.education__card-num {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #555;
  margin-bottom: 0.5rem;
}
.education__place {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #555;
  margin-bottom: 0.5rem;
}
.education__program {
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
@media (min-width: 768px) {
  .education__card {
    padding: 2rem;
  }
}
.education__period {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}
.education__desc {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  line-height: 1.6;
  color: #888;
  margin-bottom: 1rem;
}
.education__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
}
.education__tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: #555;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
}
</style>
