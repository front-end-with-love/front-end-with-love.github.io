<script setup lang="ts">
// Пет-проекты: сетка карточек в стиле collection-list (2 колонки), stagger-появление по ScrollTrigger, параллакс по скроллу, изображение + hover-overlay + детали.

import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { petProjectsData } from '../model/petProjectsData'
import pet1Image from '../assets/pet-1.webp'
import pet2Image from '../assets/pet-2.webp'
import pet3Image from '../assets/pet-3.webp'
import pet4Image from '../assets/pet-4.webp'
import pet5Image from '../assets/pet-5.webp'

// ref-массив для доступа к DOM карточек (привязка через :ref="(el) => setCardRef(el, i)")
const cardRefs = ref<(HTMLElement | null)[]>([])
const imagesById: Record<string, string> = {
  'llm-2-siri': pet1Image,
  astrology: pet2Image,
  'figma-to-cursor': pet3Image,
  'qa-parents': pet4Image,
  'tg-parse': pet5Image
}

// Колбэк для :ref в v-for — Vue передаёт el и ключ; сохраняем элемент в cardRefs[i]
function setCardRef(el: unknown, i: number) {
  if (el instanceof HTMLElement) {
    cardRefs.value[i] = el
  }
}

// Коэффициенты параллакса по скроллу для каждой карточки (разные направления и силы)
const scrollParallaxRates = [0.35, -0.5, 0.28, -0.42, 0.45]

onMounted(() => {
  nextTick(() => {
    const cards = cardRefs.value.filter((el): el is HTMLElement => el != null)
    const list = document.querySelector('.pet-projects__collection-list')
    const section = document.querySelector('.pet-projects')
    // Появление карточек: fromTo opacity 0→1, y 50→0, stagger 0.12; срабатывает когда список входит в viewport (top 82%)
    if (cards.length && list) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: list,
            start: 'top 82%'
          }
        }
      )
    }
    // Параллакс только на desktop (≥768px); на мобильных отключён
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    if (cards.length && section && isDesktop) {
      cards.forEach((card, i) => {
        const rate = scrollParallaxRates[i % scrollParallaxRates.length] * 120
        gsap.to(card, {
          y: rate,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8
          }
        })
      })
    }
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => {
    const trigger = t.trigger as Element | undefined
    if (
      trigger?.classList?.contains('pet-projects__collection-list') ||
      trigger?.classList?.contains('pet-projects')
    )
      t.kill()
  })
})
</script>

<template>
  <section id="pet-projects" class="pet-projects">
    <div class="pet-projects__header reveal-trigger">
      <span class="pet-projects__num reveal-text">[05]&nbsp;&mdash; PET PROJECTS</span>
      <h2 class="pet-projects__title"><span class="reveal-text delay-100">Pet Projects</span></h2>
      <p class="pet-projects__meta">
        <span class="reveal-text delay-300 block"
          >Side projects and experiments. LLM, automation, voice, design tools.</span
        >
      </p>
    </div>

    <div class="pet-projects__collection-list collection-list-wrapper">
      <div class="pet-projects__grid grid-2-items full-width" role="list">
        <!-- :ref с функцией — Vue передаёт элемент и индекс; нужен для GSAP и ScrollTrigger -->
        <article
          v-for="(item, i) in petProjectsData"
          :key="item.id"
          :ref="(el) => setCardRef(el, i)"
          role="listitem"
          class="pet-projects__item featured-portfolio-top"
        >
          <div class="pet-projects__link-wrap">
            <div class="pet-projects__image-wrapper portfolio-listing-image-wrapper">
              <div class="pet-projects__hover-overlay portfolio-listing-hover-overlay bottom-align">
                <div class="pet-projects__hover-content">
                  <p class="pet-projects__hover-text">{{ item.description }}</p>
                  <ul class="pet-projects__hover-list">
                    <li v-for="point in item.highlights" :key="point" class="pet-projects__hover-item">
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="pet-projects__thumb"
                :style="{ '--glitch-image': `url(${imagesById[item.id]})` }"
              >
                <img
                  :src="imagesById[item.id]"
                  :alt="`${item.title} preview`"
                  class="pet-projects__logo"
                  loading="lazy"
                />
                <div class="pet-projects__glitch-layers" aria-hidden="true">
                  <div class="pet-projects__glitch-layer"></div>
                  <div class="pet-projects__glitch-layer"></div>
                  <div class="pet-projects__glitch-layer"></div>
                </div>
                <div class="pet-projects__glitch-sir" aria-hidden="true">
                  <div class="pet-projects__glitch-sir-layer pet-projects__glitch-sir-layer--1"></div>
                  <div class="pet-projects__glitch-sir-layer pet-projects__glitch-sir-layer--2"></div>
                  <div class="pet-projects__glitch-sir-layer pet-projects__glitch-sir-layer--3"></div>
                  <div class="pet-projects__glitch-sir-layer pet-projects__glitch-sir-layer--4"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pet-projects__details portfolio-listing-details">
            <span class="pet-projects__brand portfolio-listing-brand-text">{{ item.subtitle }}</span>
            <h3 class="pet-projects__card-title portfolio-listing-title">{{ item.title }}</h3>
            <div class="pet-projects__tags portfolio-listing-tags-wrapper no-margin">
              <span
                v-for="tag in item.stack"
                :key="tag"
                class="pet-projects__tag portfolio-listing-tag"
              >
                <span class="tag-text">{{ tag }}</span>
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pet-projects {
  padding: 8rem 1rem 7rem;
  background: #0f0f0f;
  position: relative;
}
@media (min-width: 768px) {
  .pet-projects {
    padding: 8rem 1rem 11rem;
  }
}
.pet-projects__header {
  margin-bottom: 4rem;
  padding: 0 1rem;
}
@media (min-width: 768px) {
  .pet-projects__header {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (min-width: 1024px) {
  .pet-projects__header {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
.pet-projects__num {
  font-family: var(--font-mono);
  display: block;
  font-size: 0.75rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}
.pet-projects__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  text-transform: uppercase;
}
.pet-projects__meta {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: #888;
  margin-top: 1rem;
}

/* collection-list-wrapper (neversettle) */
.pet-projects__collection-list.collection-list-wrapper {
  width: 100%;
}

/* grid-2-items full-width (neversettle) */
.pet-projects__grid.grid-2-items {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 1.5rem;
  grid-row-gap: 5.5rem;
  place-items: start stretch;
  padding: 0 1rem;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
.pet-projects__grid.grid-2-items.full-width {
  width: 100%;
  max-width: none;
}
@media (min-width: 768px) {
  .pet-projects__grid.grid-2-items {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (min-width: 1024px) {
  .pet-projects__grid.grid-2-items {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

/* featured-portfolio-top: bento stagger — even items pushed down (neversettle) */
@media (min-width: 768px) {
  .pet-projects__item.featured-portfolio-top:nth-child(2n) {
    margin-top: 6rem;
  }
}
@media (min-width: 1024px) {
  .pet-projects__item.featured-portfolio-top:nth-child(2n) {
    margin-top: 10rem;
  }
}

.pet-projects__link-wrap {
  display: block;
  width: 100%;
}

/* Image absolute layer (min-height); text block in flow, at bottom, sublayer full height */
.pet-projects__image-wrapper.portfolio-listing-image-wrapper {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 200px;
  overflow: hidden;
}
@media (min-width: 768px) {
  .pet-projects__image-wrapper.portfolio-listing-image-wrapper {
    min-height: 290px;
  }
}

.pet-projects__thumb {
  position: absolute;
  inset: 0;
  min-height: 200px;
  overflow: hidden;
  background: linear-gradient(145deg, #0f0f0f 0%, #050505 50%, #0a0a0a 100%);
}
@media (min-width: 768px) {
  .pet-projects__thumb {
    min-height: 290px;
  }
}
.pet-projects__logo {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.92;
  filter: grayscale(100%);
  transition: opacity 0.3s ease, filter 0.45s ease;
}
.pet-projects__image-wrapper:hover .pet-projects__logo {
  opacity: 1;
  filter: none;
}

.pet-projects__glitch-layers {
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
}
.pet-projects__glitch-layer {
  position: absolute;
  inset: 0;
  background-image: var(--glitch-image);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  opacity: 0;
}
.pet-projects__image-wrapper:hover .pet-projects__glitch-layer:nth-child(1) {
  transform: translateX(-5%);
  animation: petProjectsGlitchLayer1 0.45s linear forwards;
}
.pet-projects__image-wrapper:hover .pet-projects__glitch-layer:nth-child(2) {
  transform: translateX(3%) translateY(3%);
  animation: petProjectsGlitchLayer2 0.45s -0.15s linear forwards;
}
.pet-projects__image-wrapper:hover .pet-projects__glitch-layer:nth-child(3) {
  transform: translateX(5%);
  animation: petProjectsGlitchFlash 0.45s linear forwards;
}

@keyframes petProjectsGlitchLayer1 {
  0% { clip-path: polygon(0 0%, 100% 0%, 100% 5%, 0 5%); opacity: 1; }
  22% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
  44% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
  66% { clip-path: polygon(0 35%, 100% 35%, 100% 35%, 0 35%); }
  100% { clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%); opacity: 0; }
}
@keyframes petProjectsGlitchLayer2 {
  0% { clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%); opacity: 1; }
  25% { clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); }
  50% { clip-path: polygon(0 50%, 100% 50%, 100% 57%, 0 57%); }
  75% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
  100% { clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%); opacity: 0; }
}
@keyframes petProjectsGlitchFlash {
  0% { opacity: 0.25; }
  30%, 100% { opacity: 0; }
}

/* SirExotic-style glitch: 4 bands with top/left shift on hover */
.pet-projects__glitch-sir {
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
}
.pet-projects__glitch-sir-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--glitch-image);
  background-position: center;
  background-size: cover;
  opacity: 0;
}
.pet-projects__image-wrapper:hover .pet-projects__glitch-sir-layer--1 {
  clip-path: polygon(0 40%, 100% 40%, 100% 80%, 0 80%);
  opacity: 1;
  animation: petProjectsGlitchSir1 0.5s linear forwards, petProjectsGlitchSir1Flip 0.5s linear forwards;
}
.pet-projects__image-wrapper:hover .pet-projects__glitch-sir-layer--2 {
  clip-path: polygon(0 70%, 100% 70%, 100% 75%, 0 75%);
  opacity: 1;
  animation: petProjectsGlitchSir2 0.5s linear forwards;
}
.pet-projects__image-wrapper:hover .pet-projects__glitch-sir-layer--3 {
  clip-path: polygon(0 80%, 100% 80%, 100% 90%, 0 90%);
  opacity: 1;
  animation: petProjectsGlitchSir3 0.5s linear forwards;
}
.pet-projects__image-wrapper:hover .pet-projects__glitch-sir-layer--4 {
  clip-path: polygon(0 20%, 100% 20%, 100% 25%, 0 25%);
  opacity: 1;
  animation: petProjectsGlitchSir4 0.5s linear forwards;
}

@keyframes petProjectsGlitchSir1 {
  0% { top: 0; left: 0; opacity: 1; }
  15% { top: 8px; left: 0; }
  30% { top: 12px; left: -20px; }
  45% { top: 12px; left: 0; }
  60% { top: 0; left: 10px; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes petProjectsGlitchSir1Flip {
  0%, 20% { transform: scaleX(-1); }
  25%, 100% { transform: scaleX(1); }
}
@keyframes petProjectsGlitchSir2 {
  0%, 50% { top: 0; left: 0; opacity: 1; }
  60% { top: -4px; left: -5px; }
  70% { top: -6px; left: 8px; }
  80% { top: -15px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes petProjectsGlitchSir3 {
  0%, 75% { top: 0; left: 0; opacity: 1; }
  80% { top: 0; left: -5px; }
  85% { top: 10px; left: 0; }
  90% { top: -12px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes petProjectsGlitchSir4 {
  0% { top: 0; left: 0; opacity: 1; }
  10% { top: 6px; left: 0; }
  20% { top: 0; left: 10px; }
  30% { top: -8px; left: -3px; }
  40% { top: -15px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}

/* Text at bottom, sublayer stretches to full wrapper height */
.pet-projects__hover-overlay.portfolio-listing-hover-overlay {
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1.5rem 0;
  background-color: rgba(12, 12, 12, 0.88);
}
@media (min-width: 768px) {
  .pet-projects__hover-overlay.portfolio-listing-hover-overlay {
    min-height: 290px;
    padding: 2rem 1.75rem;
  }
}
.pet-projects__hover-overlay.bottom-align {
  justify-content: flex-end;
}

.pet-projects__hover-content {
  width: 100%;
}
.pet-projects__hover-text {
  font-family: var(--font-mono);
  color: var(--color-offwhite);
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.45;
  margin: 0;
}

.pet-projects__hover-list {
  margin: 0.75rem 0 0;
  padding-left: 1rem;
  display: grid;
  gap: 0.5rem;
}

.pet-projects__hover-item {
  font-family: var(--font-mono);
  color: #d2d2d2;
  font-size: 0.75rem;
  line-height: 1.4;
}

/* portfolio-listing-details (neversettle): margin-top 30px */
.pet-projects__details.portfolio-listing-details {
  margin-top: 1.5rem;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
}
@media (min-width: 768px) {
  .pet-projects__details.portfolio-listing-details {
    margin-top: 30px;
  }
}

/* portfolio-listing-brand-text (neversettle) */
.pet-projects__brand.portfolio-listing-brand-text {
  font-family: var(--font-mono);
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1em;
  margin-bottom: 0.5rem;
  display: block;
}

/* portfolio-listing-title (neversettle) */
.pet-projects__card-title.portfolio-listing-title {
  font-family: var(--font-display);
  color: var(--color-offwhite);
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 500;
  line-height: 1.2em;
  margin-bottom: 0;
  text-transform: none;
}

/* portfolio-listing-tags-wrapper no-margin (neversettle) */
.pet-projects__tags.portfolio-listing-tags-wrapper {
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  padding-left: 0;
  display: flex;
}
.pet-projects__tags.portfolio-listing-tags-wrapper.no-margin {
  margin-top: 0.75rem;
}

/* portfolio-listing-tag (neversettle): pill, dark bg */
.pet-projects__tag.portfolio-listing-tag {
  font-family: var(--font-mono);
  background-color: #2e2f31;
  border-radius: 200px;
  padding: 0.4rem 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: #aaa;
}
.pet-projects__tag .tag-text {
  color: inherit;
}
</style>
