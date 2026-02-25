<script setup lang="ts">
/** Workflow methodology: Swiper slider (BRIEF→DEPLOY). */
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { workflowData } from '../model/workflowData'

import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]
const sectionRef = ref<HTMLElement | null>(null)
const paginationVisible = ref(false)
let io: IntersectionObserver | null = null

onMounted(() => {
  const sliderWrap = sectionRef.value?.querySelector('.workflow__slider-wrap')
  if (sliderWrap && typeof IntersectionObserver !== 'undefined') {
    io = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e) paginationVisible.value = e.isIntersecting
      },
      { threshold: 0.1 }
    )
    io.observe(sliderWrap)
  }
})

onUnmounted(() => {
  io?.disconnect()
})
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
      class="workflow__slider-wrap"
      :class="{ 'workflow__slider-wrap--pagination-visible': paginationVisible }"
    >
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        :speed="600"
        :pagination="{ clickable: true, bulletClass: 'workflow__dot', bulletActiveClass: 'workflow__dot--active' }"
        class="workflow__swiper"
      >
        <SwiperSlide v-for="(step, i) in workflowData" :key="step.title" class="workflow__slide-wrap">
          <div class="workflow__slide">
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
        </SwiperSlide>
      </Swiper>

      <p class="workflow__hint" aria-hidden="true">Swipe or use dots</p>
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
}
.workflow__swiper {
  height: 100%;
  width: 100%;
}
.workflow__swiper :deep(.swiper-pagination) {
  position: fixed;
  left: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: auto;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}
.workflow__slider-wrap--pagination-visible :deep(.swiper-pagination) {
  opacity: 1;
  pointer-events: auto;
}
@media (max-width: 1023px) {
  .workflow__swiper :deep(.swiper-pagination) {
    display: none;
  }
}
.workflow__swiper :deep(.workflow__dot) {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #222;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  opacity: 1;
}
.workflow__swiper :deep(.workflow__dot:hover) {
  background: #444;
}
.workflow__swiper :deep(.workflow__dot--active) {
  background: var(--color-accent);
  transform: scale(1.5);
}

.workflow__slide-wrap {
  height: 100%;
}
.workflow__slide {
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
.workflow__swiper :deep(.swiper-slide-active) .workflow__slide-title {
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
