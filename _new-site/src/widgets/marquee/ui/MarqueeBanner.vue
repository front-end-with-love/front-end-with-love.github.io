<script setup lang="ts">
// Бегущая строка: список слов и разделителей; в шаблоне items рендерятся дважды для бесшовного цикла (translateX(-50%)).

const items = [
  'JavaScript',
  '•',
  'Frontend Architecture',
  '•',
  'Perfect Layout',
  '•',
  'Animation',
  '•',
  'Available for Work',
  '•'
]
</script>

<template>
  <!-- aria-hidden — декоративная полоса, скринридерам не озвучивать -->
  <div class="marquee-outer" aria-hidden="true">
    <div class="marquee-wrap">
      <div class="marquee-inner">
        <!-- Первый проход по items -->
        <template v-for="(item, i) in items" :key="i">
          <span v-if="item === '•'" class="marquee-inner__dot">{{ item }}</span>
          <span v-else class="marquee-inner__text">{{ item }}</span>
        </template>
        <!-- Дубликат того же списка — при translateX(-50%) конец первого блока стыкуется с началом второго, цикл без рывка -->
        <template v-for="(item, i) in items" :key="`dup-${i}`">
          <span v-if="item === '•'" class="marquee-inner__dot">{{ item }}</span>
          <span v-else class="marquee-inner__text">{{ item }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-outer {
  overflow: hidden;
  position: relative;
  z-index: 20;
}
.marquee-wrap {
  overflow: hidden;
  display: flex;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: #050505;
  transform: rotate(1deg) scale(1.05);
}
.marquee-inner {
  display: flex;
  white-space: nowrap;
  align-items: center;
  gap: 2rem;
  animation: marquee 20s linear infinite;
  will-change: transform;
}
/* За один цикл сдвиг на -50% — ровно половина контента (два блока items), визуально бесконечная лента */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.marquee-inner__text {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  color: transparent;
}
.marquee-inner__dot {
  color: #ccff00;
  font-size: inherit;
}
</style>
