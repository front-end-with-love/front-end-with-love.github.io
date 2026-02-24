<script setup lang="ts">
/** Hero: name, tagline, CTA buttons; parallax on title via GSAP. */
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const heroRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
let trigger: ScrollTrigger | null = null

onMounted(() => {
  if (!heroRef.value || !titleRef.value) return
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  trigger = ScrollTrigger.create({
    trigger: heroRef.value,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      gsap.set(titleRef.value, { y: self.progress * -60 })
    }
  })
})

onUnmounted(() => {
  trigger?.kill()
})
</script>

<template>
  <section ref="heroRef" class="hero">
    <div class="hero__top reveal-trigger">
      <span class="hero__label reveal-text">FRONTEND&nbsp;/ UI-UX DEV</span>
      <span class="hero__label reveal-text delay-100">SCROLL&nbsp;TO EXPLORE</span>
    </div>
    <h1 ref="titleRef" class="hero__title">
      <div class="hero__title-wrap"><span class="hero__title-line reveal-text">Mikhail</span></div>
      <div class="hero__title-wrap hero__title-wrap--offset"><span class="hero__title-line hero__title-line--outline reveal-text">Khlebnikov</span></div>
    </h1>
    <div class="hero__bottom reveal-trigger">
      <div class="hero__bottom-grid">
        <div class="hero__bottom-col">
          <p class="hero__tagline">
            <span class="reveal-text block delay-300">Engineering fluid digital experiences with a&nbsp;focus on&nbsp;motion, pixel-perfection, and high-performance code.</span>
          </p>
          <div class="hero__cta">
            <a href="#projects" class="hero__btn hero__btn--accent reveal-text delay-500 hover-trigger">
              <span class="hero__btn-inner">View Projects</span>
              <span class="hero__btn-layer" aria-hidden="true" />
            </a>
            <a href="#contact" class="hero__btn reveal-text delay-500 hover-trigger">Contact&nbsp;Me</a>
          </div>
        </div>
      </div>
    </div>
    <div class="hero__scroll">
      <span class="hero__scroll-line" />
      <span class="hero__scroll-text">Scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 1rem 3rem;
  position: relative;
  overflow: hidden;
}
.hero__top {
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.hero__label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #888;
}
.hero__title {
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  padding-left: 1rem;
  padding-right: 0;
  box-sizing: content-box;
  font-family: var(--font-display);
  font-size: clamp(4rem, 18vw, 20rem);
  font-weight: 700;
  line-height: 0.85;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #e1e1e1;
  mix-blend-mode: exclusion;
}
.hero__title-wrap {
  overflow: hidden;
}
.hero__title-wrap--offset {
  padding-left: 0;
}
.hero__title-line--outline {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  color: transparent;
}
.hero__bottom {
  margin-top: 4rem;
}
.hero__bottom-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}
.hero__bottom-col {
  max-width: 40ch;
}
.hero__tagline {
  font-size: 1.125rem;
  color: #888;
  font-weight: 300;
  line-height: 1.6;
}
.hero__cta {
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  overflow: hidden;
}
.hero__btn {
  font-family: var(--font-mono);
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #e1e1e1;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
  position: relative;
  white-space: nowrap;
}
.hero__btn:hover {
  background: #fff;
  color: #050505;
}
.hero__btn--accent {
  overflow: hidden;
}
.hero__btn-inner {
  position: relative;
  z-index: 1;
}
.hero__btn-layer {
  position: absolute;
  inset: 0;
  background: #ccff00;
  transform: translateY(100%);
  transition: transform 0.3s ease-out;
  z-index: 0;
}
.hero__btn--accent:hover {
  color: #050505;
}
.hero__btn--accent:hover .hero__btn-layer {
  transform: translateY(0);
}
.hero__scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.5;
  animation: hero-bounce 2s ease-in-out infinite;
}
@keyframes hero-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}
.hero__scroll-line {
  width: 1px;
  height: 3rem;
  background: #fff;
}
.hero__scroll-text {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
@media (max-width: 479px) {
  .hero {
    padding-top: 6rem;
  }
  .hero__bottom {
    margin-top: 2.5rem;
  }
  .hero__cta {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
}
@media (min-width: 768px) {
  .hero {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .hero__title {
    padding-left: 3rem;
  }
  .hero__title-wrap--offset {
    padding-left: 3vw;
  }
  .hero__bottom-grid {
    grid-template-columns: repeat(12, 1fr);
  }
  .hero__bottom-col {
    grid-column: 9 / span 4;
    max-width: none;
  }
  .hero__tagline {
    font-size: 1.25rem;
  }
}
</style>
