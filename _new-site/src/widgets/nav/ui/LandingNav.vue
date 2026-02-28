<script setup lang="ts">
// Верхняя нав-полоса в потоке документа: логотип, статус «Open to work», кнопка меню — скролл к контактам. Уезжает вместе со страницей; при загрузке — анимация появления.

import { ref, onMounted, nextTick } from 'vue'
import { useScrollTo } from '@/features/scroll-to'

const { scrollToTarget } = useScrollTo()
const entered = ref(false)

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    entered.value = true
    return
  }
  // nextTick — ждём обновления DOM после монтирования; затем rAF — следующий кадр. Так transition гарантированно срабатывает (иначе браузер может слить начальное и конечное состояние).
  nextTick(() => {
    requestAnimationFrame(() => {
      entered.value = true
    })
  })
})
</script>

<template>
  <!-- :class="{ 'landing-nav--entered': entered }" — динамический класс; при entered=true нав виден и на месте -->
  <nav class="landing-nav" :class="{ 'landing-nav--entered': entered }">
    <div class="landing-nav__col landing-nav__col--left">
      <button type="button" class="landing-nav__logo hover-trigger" aria-label="Scroll to top" @click="scrollToTarget('top')">
        <span class="landing-nav__logo-text">MH</span>
        <span class="landing-nav__logo-sub">PORTFOLIO 2026</span>
      </button>
    </div>
    <div class="landing-nav__col landing-nav__col--center">
      <div class="landing-nav__meta">
        <div class="landing-nav__status">
          <span class="landing-nav__status-dot" />
          Open to work
        </div>
        <div class="landing-nav__location">Based worldwide</div>
      </div>
    </div>
    <div class="landing-nav__col landing-nav__col--right">
      <button type="button" class="landing-nav__menu hover-trigger" aria-label="Scroll to Contact" @click="scrollToTarget('contact')">
        <span class="landing-nav__menu-line landing-nav__menu-line--first" />
        <span class="landing-nav__menu-line landing-nav__menu-line--second" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
.landing-nav {
  position: relative;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 40;
  mix-blend-mode: difference;
  color: #e1e1e1;
  pointer-events: none;
  opacity: 0;
  transform: translateY(-24px);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}
.landing-nav--entered {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .landing-nav {
    opacity: 1;
    transform: translateY(0);
    transition: none;
  }
}
.landing-nav__col {
  display: flex;
  align-items: flex-start;
  pointer-events: auto;
}
.landing-nav__col--left {
  flex: 0 0 auto;
}
.landing-nav__col--center {
  flex: 1;
  min-width: 0;
  justify-content: center;
}
.landing-nav__col--right {
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}
.landing-nav__logo {
  color: #ccff00;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.landing-nav__meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}
@media (max-width: 767px) {
  .landing-nav__meta {
    display: none;
  }
}
.landing-nav__logo-text {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  transition: color 0.3s;
  will-change: color;
}
.landing-nav__logo:hover .landing-nav__logo-text {
  color: #ccff00;
}
.landing-nav__logo-sub {
  font-family: var(--font-mono);
  display: block;
  font-size: 10px;
  letter-spacing: 0.2em;
  opacity: 0.5;
  margin-top: 0.25rem;
}
.landing-nav__status {
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ccff00;
}
.landing-nav__status-dot {
  width: 8px;
  height: 8px;
  background: #ccff00;
  border-radius: 50%;
  display: block;
  transform: translateY(-0.4px);
  animation: nav-pulse 2s ease-in-out infinite;
  will-change: opacity;
}
@keyframes nav-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.landing-nav__location {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #888;
}
.landing-nav__menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: none;
}
.landing-nav__menu-line {
  height: 1px;
  background: #fff;
  transition: width 0.3s;
  will-change: width;
}
.landing-nav__menu-line--first {
  width: 3rem;
}
.landing-nav__menu-line--second {
  width: 2rem;
  transition-delay: 75ms;
}
.landing-nav__menu:hover .landing-nav__menu-line--first,
.landing-nav__menu:hover .landing-nav__menu-line--second {
  width: 4rem;
}
</style>
