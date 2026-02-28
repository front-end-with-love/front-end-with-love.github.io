<script setup lang="ts">
// Секция мягких навыков: bento-сетка flip-карточек; 3D-наклон по курсору (--tilt-x, --tilt-y), переворот по клику.

import { ref, onUnmounted } from 'vue'
import { softSkillsData } from '../model/softSkillsData'

// Индексы перевёрнутых карточек (несколько могут быть открыты)
const flippedIndices = ref<number[]>([])
// Индекс карточки, на которой включён tilt (слежение за мышью)
const tiltingCardIndex = ref<number | null>(null)
// Индекс карточки в момент «входа» — короткий период плавного transition перед tilt без transition
const enteringCardIndex = ref<number | null>(null)
let enteringTimeout: ReturnType<typeof setTimeout> | null = null

// Длительность фазы «входа»: пока is-entering, inner имеет transition 0.24s, потом 0 для отзывчивого tilt
const ENTER_TILT_DURATION_MS = 240

// Переключить карточку i: добавить в flippedIndices или убрать
function toggle(i: number) {
  const arr = flippedIndices.value
  flippedIndices.value = arr.includes(i) ? arr.filter((j) => j !== i) : [...arr, i]
}

function isFlipped(i: number) {
  return flippedIndices.value.includes(i)
}

// Максимальный угол наклона в градусах (по X и Y)
const MAX_TILT = 12
const THROTTLE_MS = 16

function createThrottle<A extends unknown[]>(fn: (...args: A) => void, ms: number) {
  let last = 0
  let scheduled: ReturnType<typeof setTimeout> | null = null
  const throttled = (...args: A) => {
    const now = Date.now()
    if (now - last >= ms) {
      last = now
      fn(...args)
    } else if (scheduled === null) {
      scheduled = setTimeout(() => {
        scheduled = null
        last = Date.now()
        fn(...args)
      }, ms - (now - last))
    }
  }
  const cancel = () => {
    if (scheduled) clearTimeout(scheduled)
    scheduled = null
  }
  return { fn: throttled, cancel }
}

function onCardMouseMoveImpl(e: MouseEvent, el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const cx = rect.width / 2
  const cy = rect.height / 2
  const tiltY = ((x - cx) / cx) * MAX_TILT
  const tiltX = -((y - cy) / cy) * MAX_TILT
  el.style.setProperty('--tilt-x', `${tiltX}deg`)
  el.style.setProperty('--tilt-y', `${tiltY}deg`)
}
const { fn: onCardMouseMove, cancel: cancelThrottle } = createThrottle(onCardMouseMoveImpl, THROTTLE_MS)
onUnmounted(cancelThrottle)

// При входе мыши: включаем tilt и entering; через ENTER_TILT_DURATION_MS снимаем entering (transition снова 0 для tilt)
function onCardMouseEnter(i: number) {
  if (enteringTimeout) clearTimeout(enteringTimeout)
  tiltingCardIndex.value = i
  enteringCardIndex.value = i
  enteringTimeout = setTimeout(() => {
    enteringCardIndex.value = null
    enteringTimeout = null
  }, ENTER_TILT_DURATION_MS)
}

// При уходе мыши: сбрасываем индексы и CSS-переменные
function onCardMouseLeave(_e: MouseEvent, el: HTMLElement) {
  if (enteringTimeout) {
    clearTimeout(enteringTimeout)
    enteringTimeout = null
  }
  tiltingCardIndex.value = null
  enteringCardIndex.value = null
  el.style.setProperty('--tilt-x', '0deg')
  el.style.setProperty('--tilt-y', '0deg')
}
</script>

<template>
  <section id="soft-skills" class="soft-skills">
    <div class="soft-skills__header reveal-trigger">
      <span class="soft-skills__num reveal-text">[02]&nbsp;&mdash; SOFT SKILLS</span>
      <h2 class="soft-skills__title"><span class="reveal-text delay-100">Soft Skills</span></h2>
      <p class="soft-skills__meta">
        <span class="reveal-text delay-300 block">Communication &middot; Teamwork &middot; Problem solving &middot; Learning</span>
      </p>
    </div>
    <div class="soft-skills__grid">
      <div
        v-for="(s, i) in softSkillsData"
        :key="s.title"
        class="soft-skills__card"
        :class="{ 'is-flipped': isFlipped(i), 'is-tilting': tiltingCardIndex === i, 'is-entering': enteringCardIndex === i }"
        role="button"
        tabindex="0"
        :aria-pressed="isFlipped(i)"
        @click="toggle(i)"
        @keydown.enter.space.prevent="toggle(i)"
        @mouseenter="onCardMouseEnter(i)"
        @mousemove="(e: MouseEvent) => e.currentTarget && onCardMouseMove(e, e.currentTarget as HTMLElement)"
        @mouseleave="(e: MouseEvent) => e.currentTarget && onCardMouseLeave(e, e.currentTarget as HTMLElement)"
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
  padding: 6rem 1rem 4rem;
  background: #0f0f0f;
  position: relative;
}
@media (min-width: 768px) {
  .soft-skills {
    padding: 8rem 1rem 4rem;
  }
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
/* perspective — задаёт глубину 3D-сцены для дочерних элементов */
.soft-skills__card {
  perspective: 1000px;
  cursor: pointer;
  min-height: 220px;
  outline: none;
  position: relative;
}
.soft-skills__card:focus-visible {
  outline: 2px solid #ccff00;
  outline-offset: 2px;
}
/* transform-style: preserve-3d — дочерние участвуют в 3D-пространстве; --tilt-x/y задаются из JS */
.soft-skills__card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 220px;
  transform-style: preserve-3d;
  transform: rotateY(var(--tilt-y, 0deg)) rotateX(var(--tilt-x, 0deg));
  transition: transform 0.15s ease-out;
  will-change: transform;
}
.soft-skills__card.is-tilting .soft-skills__card-inner {
  transition-duration: 0s;
}
.soft-skills__card.is-tilting.is-entering .soft-skills__card-inner {
  transition-duration: 0.24s;
}
.soft-skills__card.is-flipped .soft-skills__card-inner {
  transform: rotateY(calc(180deg + var(--tilt-y, 0deg))) rotateX(var(--tilt-x, 0deg));
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
/* backface-visibility: hidden — скрывает обратную сторону при 3D-перевороте */
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
.soft-skills__card-front {
  transition: border-color 0.35s ease;
}
.soft-skills__card:hover .soft-skills__card-front {
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
