<script setup lang="ts">
/** Workflow methodology: full-viewport slider (BRIEF→DEPLOY) with GSAP animation. */
import { ref, watch, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { workflowData } from '../model/workflowData'

const SLIDE_COUNT = workflowData.length
const activeIndex = ref(0)
const trackRef = ref<HTMLElement | null>(null)
const sliderWrapRef = ref<HTMLElement | null>(null)
const sectionRef = ref<HTMLElement | null>(null)
const dotsVisible = ref(false)
const WHEEL_THRESHOLD = 60
const WHEEL_COOLDOWN_MS = 400
let tween: gsap.core.Tween | null = null
let io: IntersectionObserver | null = null
let wheelAccum = 0
let wheelCooldownUntil = 0

function goTo(index: number) {
  const i = Math.max(0, Math.min(index, SLIDE_COUNT - 1))
  if (i === activeIndex.value) return
  activeIndex.value = i
}

function animateToIndex(i: number) {
  if (!trackRef.value || typeof window === 'undefined') return
  tween?.kill()
  const x = -i * window.innerWidth
  tween = gsap.to(trackRef.value, {
    x,
    duration: 0.7,
    ease: 'power2.inOut',
    onKill: () => { tween = null }
  })
}

watch(activeIndex, (val) => animateToIndex(val))

onMounted(() => {
  gsap.set(trackRef.value, { x: 0 })
  window.addEventListener('resize', onResize)
  if (sectionRef.value && typeof IntersectionObserver !== 'undefined') {
    io = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e) dotsVisible.value = e.isIntersecting
      },
      { threshold: 0.2, rootMargin: '0px' }
    )
    io.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  tween?.kill()
  io?.disconnect()
  window.removeEventListener('resize', onResize)
})

function onResize() {
  if (!trackRef.value) return
  gsap.set(trackRef.value, { x: -activeIndex.value * window.innerWidth })
}

function onWheel(evt: WheelEvent) {
  if (!sliderWrapRef.value) return
  const el = sliderWrapRef.value
  const rect = el.getBoundingClientRect()
  const { clientX: x, clientY: y, deltaY } = evt
  if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) return
  const atFirst = activeIndex.value === 0
  const atLast = activeIndex.value === SLIDE_COUNT - 1
  if (atLast && deltaY > 0) return
  if (atFirst && deltaY < 0) return
  evt.preventDefault()
  const now = typeof performance !== 'undefined' ? performance.now() : Date.now()
  if (now < wheelCooldownUntil) return
  wheelAccum += deltaY
  if (wheelAccum >= WHEEL_THRESHOLD) {
    wheelAccum = 0
    wheelCooldownUntil = now + WHEEL_COOLDOWN_MS
    goTo(activeIndex.value + 1)
  } else if (wheelAccum <= -WHEEL_THRESHOLD) {
    wheelAccum = 0
    wheelCooldownUntil = now + WHEEL_COOLDOWN_MS
    goTo(activeIndex.value - 1)
  }
}
</script>

<template>
  <section ref="sectionRef" id="workflow" class="workflow">
    <div class="workflow__header reveal-trigger">
      <span class="workflow__num reveal-text">[04]&nbsp;&mdash; WORKFLOW METHODOLOGY</span>
      <h2 class="workflow__title"><span class="reveal-text delay-100">Workflow Methodology</span></h2>
      <p class="workflow__meta">
        <span class="reveal-text delay-300 block">Systematic approach to digital product creation. From concept to production code.</span>
      </p>
    </div>

    <div
      ref="sliderWrapRef"
      class="workflow__slider-wrap"
      aria-label="Workflow steps"
      @wheel="onWheel"
    >
      <div ref="trackRef" class="workflow__track">
        <div
          v-for="(step, i) in workflowData"
          :key="step.title"
          class="workflow__slide"
          :class="{ 'workflow__slide--active': activeIndex === i }"
        >
          <span class="workflow__slide-num" aria-hidden="true">{{ i < 9 ? '0' : '' }}{{ i + 1 }}</span>
          <h3 class="workflow__slide-title">{{ step.title }}</h3>
          <div class="workflow__slide-tags">
            <span
              v-for="tag in step.summary.split(' · ')"
              :key="tag"
              class="workflow__slide-tag"
            >{{ tag.trim() }}</span>
          </div>
          <p class="workflow__slide-desc">{{ step.description }}</p>
        </div>
      </div>

      <nav class="workflow__dots" :class="{ 'workflow__dots--visible': dotsVisible }" aria-label="Slider navigation">
        <button
          v-for="(_, i) in SLIDE_COUNT"
          :key="i"
          type="button"
          class="workflow__dot"
          :class="{ 'workflow__dot--active': activeIndex === i }"
          :aria-label="`Go to slide ${i + 1}`"
          @click="goTo(i)"
        />
      </nav>

      <p class="workflow__hint" aria-hidden="true">Scroll vertically</p>
    </div>
  </section>
</template>

<style scoped>
.workflow {
  background: var(--color-black);
  position: relative;
}
.workflow__header {
  padding: 8rem 1rem 2rem;
}
@media (min-width: 768px) {
  .workflow__header {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (min-width: 1024px) {
  .workflow__header {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
.workflow__num {
  font-family: var(--font-mono);
  display: block;
  font-size: 0.75rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}
.workflow__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  text-transform: uppercase;
}
.workflow__meta {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: #888;
  margin-top: 1rem;
}

.workflow__slider-wrap {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
}
.workflow__track {
  display: flex;
  width: calc(100vw * 5);
  height: 100%;
  will-change: transform;
}
.workflow__slide {
  flex: 0 0 100vw;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  position: relative;
}
.workflow__slide-num {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30vw;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  z-index: 0;
  pointer-events: none;
  font-family: var(--font-display);
}
.workflow__slide-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;
  text-align: center;
  max-width: 28rem;
  position: relative;
  z-index: 1;
  color: #fff;
  transition: color 0.3s;
}
.workflow__slide--active .workflow__slide-title {
  color: var(--color-accent);
}
.workflow__slide-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1rem;
  margin-top: 2rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
  color: #555;
  position: relative;
  z-index: 1;
}
.workflow__slide-tag {
  white-space: nowrap;
}
.workflow__slide-desc {
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 36rem;
  width: calc(100% - 2rem);
  padding: 0 1rem;
  font-family: var(--font-mono);
  font-size: clamp(0.8125rem, 1.5vw, 1rem);
  line-height: 1.6;
  color: #888;
  text-align: center;
  z-index: 1;
}

.workflow__dots {
  position: fixed;
  left: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}
.workflow__dots--visible {
  opacity: 1;
  pointer-events: auto;
}
@media (max-width: 1023px) {
  .workflow__dots {
    display: none;
  }
}
.workflow__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #222;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}
.workflow__dot:hover {
  background: #444;
}
.workflow__dot--active {
  background: var(--color-accent);
  transform: scale(1.5);
}
.workflow__dot:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.workflow__hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: 0.3em;
  color: #444;
  text-transform: uppercase;
  pointer-events: none;
  z-index: 10;
}
@media (max-width: 767px) {
  .workflow__hint {
    display: none;
  }
}
</style>
