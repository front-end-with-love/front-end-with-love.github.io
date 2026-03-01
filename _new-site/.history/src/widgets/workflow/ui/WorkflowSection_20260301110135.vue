<script setup lang="ts">
// Секция методологии workflow: слайдер Swiper (Discovery → Delivery), навигация стрелками.

// Компоненты Swiper для Vue 3
import { Swiper, SwiperSlide } from 'swiper/vue'
// Модуль навигации — стрелки prev/next
import { Navigation } from 'swiper/modules'
import { workflowData } from '../model/workflowData'

import 'swiper/css'
import 'swiper/css/navigation'

// Массив модулей передаётся в :modules — Swiper подключает навигацию
const modules = [Navigation]
</script>

<template>
  <section id="workflow" class="workflow">
    <div class="workflow__header reveal-trigger">
      <span class="workflow__num reveal-text">[06]&nbsp;&mdash; WORKFLOW METHODOLOGY</span>
      <h2 class="workflow__title"><span class="reveal-text delay-100">Workflow Methodology</span></h2>
      <p class="workflow__meta">
        <span class="reveal-text delay-300 block">Systematic approach to&nbsp;digital product creation. From concept to&nbsp;production code.</span>
      </p>
    </div>

    <div class="workflow__slider-wrap">
      <!-- Swiper: один слайд в view, без отступа, скорость 600 ms; кнопки привязаны по селекторам -->
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        :speed="600"
        :navigation="{ nextEl: '.workflow__arrow--next', prevEl: '.workflow__arrow--prev' }"
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
        <button type="button" class="workflow__arrow workflow__arrow--prev hover-trigger" aria-label="Previous slide">
          <span aria-hidden="true">&larr;</span>
        </button>
        <button type="button" class="workflow__arrow workflow__arrow--next hover-trigger" aria-label="Next slide">
          <span aria-hidden="true">&rarr;</span>
        </button>
      </Swiper>

      <p class="workflow__hint" aria-hidden="true">Swipe or use arrows</p>
    </div>
  </section>
</template>

<style scoped>
.workflow {
  padding: 8rem 1rem 4rem;
  background: var(--color-black);
  position: relative;
}
.workflow__header {
  padding: 0 1rem 1.5rem;
}
@media (min-width: 768px) {
  .workflow__header {
    padding: 8rem 2rem 2rem;
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
  width: 100%;
  overflow: hidden;
  padding: 4rem 0 0
}
@media (min-width: 767px) {
  .workflow__slider-wrap {
    padding: 4rem 0 5rem
  }
}
.workflow__swiper {
  height: 100%;
  width: 100%;
}
/* :deep() — проникновение в дочерние компоненты Swiper; стили применяются к кнопкам внутри .workflow__swiper */
.workflow__swiper :deep(.workflow__arrow) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  color: #888;
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.25s, border-color 0.25s, background 0.25s;
}
.workflow__swiper :deep(.workflow__arrow:hover) {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: rgba(0, 0, 0, 0.6);
}
.workflow__swiper :deep(.workflow__arrow--prev) {
  left: 1.3rem;
}
.workflow__swiper :deep(.workflow__arrow--next) {
  right: 1.3rem;
}
.workflow__swiper :deep(.workflow__arrow.swiper-button-disabled) {
  opacity: 0.35;
  cursor: default;
  pointer-events: none;
}
@media (max-width: 1023px) {
  .workflow__swiper :deep(.workflow__arrow) {
    display: none;
  }
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
  padding: 0;
  position: relative;
  box-sizing: border-box;
}
@media (min-width: 768px) {
  .workflow__slide {
    padding: 3.5rem 10%;
  }
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
  font-size: clamp(1.5rem, 6vw, 4.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-align: center;
  max-width: 28rem;
  position: relative;
  z-index: 1;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: color 0.3s;
}
.workflow__swiper :deep(.swiper-slide-active) .workflow__slide-title {
  color: var(--color-accent);
}
.workflow__slide-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35rem 0.75rem;
  margin-top: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
  color: #555;
  position: relative;
  z-index: 1;
}
@media (min-width: 768px) {
  .workflow__slide-tags {
    gap: 0.5rem 1rem;
    margin-top: 2rem;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
  }
}
.workflow__slide-tag {
  white-space: nowrap;
}
.workflow__slide-desc {
  max-width: 36rem;
  width: calc(100% - 2rem);
  padding: 1rem 0.5rem 0;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  line-height: 1.55;
  color: #888;
  text-align: left;
  z-index: 1;
}
@media (min-width: 768px) {
  .workflow__slide-desc {
    bottom: 6rem;
    padding: 3rem 1rem 0 1rem;
    font-size: clamp(0.8125rem, 1.5vw, 1rem);
  }
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
