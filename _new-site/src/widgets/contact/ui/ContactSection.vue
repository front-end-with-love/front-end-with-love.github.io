<script setup lang="ts">
// Секция контактов: интро, фото, ссылки (email, TG, GitHub, Habr), футер. Фон — анимированный градиент.

import { ref, onMounted, onUnmounted } from 'vue'
import photo from '../assets/portrait.webp'

const glitchTrigger = ref(false)
const glitchTriggerVariant = ref(0)
const contactHovered = ref(false)
const contactHoverVariant = ref(0)
let glitchScheduleId: ReturnType<typeof setTimeout> | undefined
let glitchTimeoutId: ReturnType<typeof setTimeout> | undefined

function scheduleNext() {
  const delayMs = 3000 + Math.random() * 17000
  glitchScheduleId = setTimeout(() => {
    glitchTriggerVariant.value = Math.floor(Math.random() * 3)
    glitchTrigger.value = true
    glitchTimeoutId = setTimeout(() => {
      glitchTrigger.value = false
      glitchTimeoutId = undefined
      scheduleNext()
    }, 550)
  }, delayMs)
}

onMounted(() => {
  scheduleNext()
})

onUnmounted(() => {
  if (glitchScheduleId) clearTimeout(glitchScheduleId)
  if (glitchTimeoutId) clearTimeout(glitchTimeoutId)
})
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__top reveal-trigger">
      <div class="contact__text-wrapper">
        <span class="contact__num reveal-text">[06]&nbsp;&mdash; CONTACT</span>
        <h2 class="contact__title">
          <span class="reveal-text delay-100 block">Let's<br /></span>
          <span class="contact__title-outline reveal-text delay-300">Talk</span>
        </h2>
      </div>
      <div
        class="contact__photo-wrapper reveal-text"
        :class="[
          { 'contact__photo-wrapper--glitch-trigger': glitchTrigger },
          `contact__photo-wrapper--glitch-variant-${glitchTrigger ? glitchTriggerVariant : contactHovered ? contactHoverVariant : 0}`
        ]"
        :style="{ '--glitch-image': `url(${photo})` }"
        @mouseenter="contactHovered = true; contactHoverVariant = Math.floor(Math.random() * 3)"
        @mouseleave="contactHovered = false"
      >
        <img :src="photo" alt="Mikhail Khlebnikov" class="contact__photo" />
        <div class="contact__glitch-layers" aria-hidden="true">
          <div class="contact__glitch-layer"></div>
          <div class="contact__glitch-layer"></div>
          <div class="contact__glitch-layer"></div>
        </div>
        <div class="contact__glitch-sir" aria-hidden="true">
          <div class="contact__glitch-sir-layer contact__glitch-sir-layer--1"></div>
          <div class="contact__glitch-sir-layer contact__glitch-sir-layer--2"></div>
          <div class="contact__glitch-sir-layer contact__glitch-sir-layer--3"></div>
          <div class="contact__glitch-sir-layer contact__glitch-sir-layer--4"></div>
        </div>
      </div>
    </div>
    <div class="contact__grid reveal-trigger">
      <div class="contact__info reveal-text">
        <p class="contact__intro">
          Open for new opportunities. Ready for code verification and technical interviews.
        </p>
        <ul class="contact__availability reveal-text">
<li><span class="contact__availability-label">Location: </span> Russia, Tver</li>
<li><span class="contact__availability-label">Timezone: </span> UTC+3 &middot; Moscow &middot; Async-friendly</li>
<li><span class="contact__availability-label">Status: </span> Open to&nbsp;work</li>
<li><span class="contact__availability-label">Format: </span> Remote &middot; Full-time &middot; Freelance</li>
</ul>
      </div>
      <div class="contact__links reveal-text delay-200">
        <a href="mailto:frontend.dev.ru@gmail.com" class="contact__link hover-trigger" aria-label="Send email to frontend.dev.ru@gmail.com">frontend.dev.ru@gmail.com</a>
        <a href="https://t.me/michailkhlebnikov" target="_blank" rel="noopener noreferrer" class="contact__link hover-trigger" aria-label="Open in new tab: Telegram profile">
          t.me/michailkhlebnikov
        </a>
        <a href="https://github.com/front-end-with-love" target="_blank" rel="noopener noreferrer" class="contact__link hover-trigger" aria-label="Open in new tab: GitHub">
          GitHub
        </a>
        <a href="https://career.habr.com/frontend-dev-ru" target="_blank" rel="noopener noreferrer" class="contact__link hover-trigger" aria-label="Open in new tab: Habr Career">
          Habr Career
        </a>
      </div>
    </div>
    <footer class="contact__footer">
      <div class="contact__footer-col contact__footer-col--left">
        <p>&copy;&nbsp;2026&nbsp;MIKHAIL&nbsp;KHLEBNIKOV<br>ALL&nbsp;RIGHTS RESERVED</p>
      </div>
      <div class="contact__footer-col contact__footer-col--right">
        <p>BUILT WITH MY&nbsp;BRAINS AND<br>VARIANT.COM/CURSOR.COM</p>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  padding: 8rem 1rem 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8rem 1rem 2rem;
  will-change: background-position;
  background: linear-gradient(-45deg, #050505, #0f0f0f, #1a1a1a, #252525);
  background-size: 400% 400%;
  animation: contact-gradient 15s ease infinite;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
/* Плавное смещение градиента — создаёт живой фон */
@keyframes contact-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@media (min-width: 768px) {
  .contact {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
.contact__top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
}
.contact__text-wrapper {
  flex: 1 1 auto;
}
.contact__photo-wrapper {
  width: clamp(120px, 20vw, 220px);
  height: clamp(120px, 20vw, 220px);
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  flex-shrink: 0;
  margin: 3.5rem 1.5rem 3.5rem auto;
}
.contact__photo {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}
.contact__glitch-layers {
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
  border-radius: 50%;
}
.contact__glitch-layer {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-image: var(--glitch-image);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  opacity: 0;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-0 .contact__glitch-layer:nth-child(1),
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-0 .contact__glitch-layer:nth-child(1) {
  transform: translateX(-5%);
  animation: contactGlitchLayer1V0 0.45s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-1 .contact__glitch-layer:nth-child(1),
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-1 .contact__glitch-layer:nth-child(1) {
  transform: translateX(-8%) translateY(2%);
  animation: contactGlitchLayer1V1 0.45s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-2 .contact__glitch-layer:nth-child(1),
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-2 .contact__glitch-layer:nth-child(1) {
  transform: translateX(6%) translateY(-3%);
  animation: contactGlitchLayer1V2 0.45s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-0 .contact__glitch-layer:nth-child(2),
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-0 .contact__glitch-layer:nth-child(2) {
  transform: translateX(3%) translateY(3%);
  animation: contactGlitchLayer2V0 0.45s -0.15s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-1 .contact__glitch-layer:nth-child(2),
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-1 .contact__glitch-layer:nth-child(2) {
  transform: translateX(-4%) translateY(5%);
  animation: contactGlitchLayer2V1 0.45s -0.1s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-2 .contact__glitch-layer:nth-child(2),
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-2 .contact__glitch-layer:nth-child(2) {
  transform: translateX(5%) translateY(-4%);
  animation: contactGlitchLayer2V2 0.45s -0.2s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-0 .contact__glitch-layer:nth-child(3),
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-0 .contact__glitch-layer:nth-child(3) {
  transform: translateX(5%);
  animation: contactGlitchFlashV0 0.45s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-1 .contact__glitch-layer:nth-child(3),
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-1 .contact__glitch-layer:nth-child(3) {
  transform: translateX(-6%);
  animation: contactGlitchFlashV1 0.45s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-2 .contact__glitch-layer:nth-child(3),
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-2 .contact__glitch-layer:nth-child(3) {
  transform: translateX(4%) translateY(2%);
  animation: contactGlitchFlashV2 0.45s linear forwards;
}
@keyframes contactGlitchLayer1V0 {
  0% { clip-path: polygon(0 0%, 100% 0%, 100% 5%, 0 5%); opacity: 1; }
  22% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
  44% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
  66% { clip-path: polygon(0 35%, 100% 35%, 100% 35%, 0 35%); }
  100% { clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%); opacity: 0; }
}
@keyframes contactGlitchLayer1V1 {
  0% { clip-path: polygon(0 5%, 100% 0%, 100% 12%, 0 8%); opacity: 1; }
  25% { clip-path: polygon(0 25%, 100% 20%, 100% 28%, 0 28%); }
  50% { clip-path: polygon(0 12%, 100% 18%, 100% 25%, 0 22%); }
  75% { clip-path: polygon(0 45%, 100% 42%, 100% 48%, 0 48%); }
  100% { clip-path: polygon(0 55%, 100% 65%, 100% 75%, 0 68%); opacity: 0; }
}
@keyframes contactGlitchLayer1V2 {
  0% { clip-path: polygon(0 8%, 100% 5%, 100% 10%, 0 12%); opacity: 1; }
  20% { clip-path: polygon(0 22%, 100% 18%, 100% 25%, 0 25%); }
  55% { clip-path: polygon(0 38%, 100% 42%, 100% 45%, 0 42%); }
  85% { clip-path: polygon(0 52%, 100% 58%, 100% 68%, 0 62%); }
  100% { clip-path: polygon(0 68%, 100% 72%, 100% 82%, 0 78%); opacity: 0; }
}
@keyframes contactGlitchLayer2V0 {
  0% { clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%); opacity: 1; }
  25% { clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); }
  50% { clip-path: polygon(0 50%, 100% 50%, 100% 57%, 0 57%); }
  75% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
  100% { clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%); opacity: 0; }
}
@keyframes contactGlitchLayer2V1 {
  0% { clip-path: polygon(0 20%, 100% 18%, 100% 35%, 0 32%); opacity: 1; }
  30% { clip-path: polygon(0 5%, 100% 8%, 100% 10%, 0 8%); }
  55% { clip-path: polygon(0 48%, 100% 52%, 100% 60%, 0 58%); }
  80% { clip-path: polygon(0 72%, 100% 75%, 100% 78%, 0 75%); }
  100% { clip-path: polygon(0 18%, 100% 14%, 100% 22%, 0 20%); opacity: 0; }
}
@keyframes contactGlitchLayer2V2 {
  0% { clip-path: polygon(0 10%, 100% 22%, 100% 38%, 0 28%); opacity: 1; }
  22% { clip-path: polygon(0 2%, 100% 2%, 100% 6%, 0 6%); }
  60% { clip-path: polygon(0 55%, 100% 55%, 100% 62%, 0 62%); }
  88% { clip-path: polygon(0 78%, 100% 82%, 100% 85%, 0 82%); }
  100% { clip-path: polygon(0 8%, 100% 12%, 100% 18%, 0 14%); opacity: 0; }
}
@keyframes contactGlitchFlashV0 {
  0% { opacity: 0.25; }
  30%, 100% { opacity: 0; }
}
@keyframes contactGlitchFlashV1 {
  0% { opacity: 0.35; }
  25%, 100% { opacity: 0; }
}
@keyframes contactGlitchFlashV2 {
  0% { opacity: 0.2; }
  40%, 100% { opacity: 0; }
}
.contact__glitch-sir {
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
  border-radius: 50%;
}
.contact__glitch-sir-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: var(--glitch-image);
  background-position: center;
  background-size: cover;
  opacity: 0;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-0 .contact__glitch-sir-layer--1,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-0 .contact__glitch-sir-layer--1 {
  clip-path: polygon(0 40%, 100% 40%, 100% 80%, 0 80%);
  opacity: 1;
  animation: contactGlitchSir1V0 0.5s linear forwards, contactGlitchSir1FlipV0 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-1 .contact__glitch-sir-layer--1,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-1 .contact__glitch-sir-layer--1 {
  clip-path: polygon(0 35%, 100% 35%, 100% 78%, 0 75%);
  opacity: 1;
  animation: contactGlitchSir1V1 0.5s linear forwards, contactGlitchSir1FlipV1 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-2 .contact__glitch-sir-layer--1,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-2 .contact__glitch-sir-layer--1 {
  clip-path: polygon(0 45%, 100% 45%, 100% 85%, 0 82%);
  opacity: 1;
  animation: contactGlitchSir1V2 0.5s linear forwards, contactGlitchSir1FlipV2 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-0 .contact__glitch-sir-layer--2,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-0 .contact__glitch-sir-layer--2 {
  clip-path: polygon(0 70%, 100% 70%, 100% 75%, 0 75%);
  opacity: 1;
  animation: contactGlitchSir2V0 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-1 .contact__glitch-sir-layer--2,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-1 .contact__glitch-sir-layer--2 {
  clip-path: polygon(0 65%, 100% 68%, 100% 72%, 0 70%);
  opacity: 1;
  animation: contactGlitchSir2V1 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-2 .contact__glitch-sir-layer--2,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-2 .contact__glitch-sir-layer--2 {
  clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%);
  opacity: 1;
  animation: contactGlitchSir2V2 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-0 .contact__glitch-sir-layer--3,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-0 .contact__glitch-sir-layer--3 {
  clip-path: polygon(0 80%, 100% 80%, 100% 90%, 0 90%);
  opacity: 1;
  animation: contactGlitchSir3V0 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-1 .contact__glitch-sir-layer--3,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-1 .contact__glitch-sir-layer--3 {
  clip-path: polygon(0 78%, 100% 82%, 100% 92%, 0 88%);
  opacity: 1;
  animation: contactGlitchSir3V1 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-2 .contact__glitch-sir-layer--3,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-2 .contact__glitch-sir-layer--3 {
  clip-path: polygon(0 82%, 100% 78%, 100% 88%, 0 92%);
  opacity: 1;
  animation: contactGlitchSir3V2 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-0 .contact__glitch-sir-layer--4,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-0 .contact__glitch-sir-layer--4 {
  clip-path: polygon(0 20%, 100% 20%, 100% 25%, 0 25%);
  opacity: 1;
  animation: contactGlitchSir4V0 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-1 .contact__glitch-sir-layer--4,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-1 .contact__glitch-sir-layer--4 {
  clip-path: polygon(0 18%, 100% 22%, 100% 28%, 0 24%);
  opacity: 1;
  animation: contactGlitchSir4V1 0.5s linear forwards;
}
.contact__photo-wrapper:hover.contact__photo-wrapper--glitch-variant-2 .contact__glitch-sir-layer--4,
.contact__photo-wrapper.contact__photo-wrapper--glitch-trigger.contact__photo-wrapper--glitch-variant-2 .contact__glitch-sir-layer--4 {
  clip-path: polygon(0 22%, 100% 18%, 100% 26%, 0 22%);
  opacity: 1;
  animation: contactGlitchSir4V2 0.5s linear forwards;
}
@keyframes contactGlitchSir1V0 {
  0% { top: 0; left: 0; opacity: 1; }
  15% { top: 8px; left: 0; }
  30% { top: 12px; left: -20px; }
  45% { top: 12px; left: 0; }
  60% { top: 0; left: 10px; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir1V1 {
  0% { top: 0; left: 0; opacity: 1; }
  12% { top: 10px; left: 0; }
  28% { top: 14px; left: -15px; }
  42% { top: 10px; left: 5px; }
  58% { top: 0; left: 12px; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir1V2 {
  0% { top: 0; left: 0; opacity: 1; }
  18% { top: 6px; left: -10px; }
  35% { top: 15px; left: -18px; }
  52% { top: 8px; left: 8px; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir1FlipV0 {
  0%, 20% { transform: scaleX(-1); }
  25%, 100% { transform: scaleX(1); }
}
@keyframes contactGlitchSir1FlipV1 {
  0%, 15% { transform: scaleX(-1); }
  22%, 100% { transform: scaleX(1); }
}
@keyframes contactGlitchSir1FlipV2 {
  0%, 25% { transform: scaleX(1); }
  30%, 100% { transform: scaleX(-1); }
}
@keyframes contactGlitchSir2V0 {
  0%, 50% { top: 0; left: 0; opacity: 1; }
  60% { top: -4px; left: -5px; }
  70% { top: -6px; left: 8px; }
  80% { top: -15px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir2V1 {
  0%, 48% { top: 0; left: 0; opacity: 1; }
  58% { top: -6px; left: -8px; }
  72% { top: -8px; left: 10px; }
  85% { top: -12px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir2V2 {
  0%, 52% { top: 0; left: 0; opacity: 1; }
  62% { top: -2px; left: -10px; }
  75% { top: -10px; left: 6px; }
  88% { top: -18px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir3V0 {
  0%, 75% { top: 0; left: 0; opacity: 1; }
  80% { top: 0; left: -5px; }
  85% { top: 10px; left: 0; }
  90% { top: -12px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir3V1 {
  0%, 72% { top: 0; left: 0; opacity: 1; }
  78% { top: 0; left: -8px; }
  84% { top: 12px; left: 0; }
  92% { top: -10px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir3V2 {
  0%, 78% { top: 0; left: 0; opacity: 1; }
  82% { top: 5px; left: -6px; }
  88% { top: -14px; left: 0; }
  95% { top: 8px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir4V0 {
  0% { top: 0; left: 0; opacity: 1; }
  10% { top: 6px; left: 0; }
  20% { top: 0; left: 10px; }
  30% { top: -8px; left: -3px; }
  40% { top: -15px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir4V1 {
  0% { top: 0; left: 0; opacity: 1; }
  12% { top: 8px; left: 0; }
  22% { top: 0; left: 12px; }
  35% { top: -10px; left: -5px; }
  45% { top: -12px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
@keyframes contactGlitchSir4V2 {
  0% { top: 0; left: 0; opacity: 1; }
  8% { top: 4px; left: 0; }
  18% { top: 0; left: 8px; }
  28% { top: -12px; left: -4px; }
  38% { top: -18px; left: 0; }
  100% { top: 0; left: 0; opacity: 0; }
}
.contact__num {
  font-family: var(--font-mono);
  display: block;
  font-size: 0.75rem;
  color: #ccff00;
  margin-bottom: 2rem;
}
.contact__title {
  font-family: var(--font-display);
  font-size: clamp(4rem, 18vw, 20rem);
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  margin-bottom: 3rem;
  mix-blend-mode: exclusion;
}
.contact__title-outline {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  color: transparent;
  display: block;
}
.contact__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}
@media (max-width: 767px) {
  .contact__grid {
    gap: 2rem;
  }
}
@media (min-width: 768px) {
  .contact__grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}
.contact__intro {
  font-size: 1.25rem;
  color: #888;
  max-width: 28rem;
  margin-bottom: 2rem;
}
.contact__availability {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  font-size: 0.875rem;
  color: #888;
}
.contact__availability li {
  margin-bottom: 0.5rem;
}
.contact__availability-label {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #737373;
  margin-right: 0.5rem;
}
.contact__link {
  font-family: var(--font-display);
  display: block;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #e1e1e1;
  text-decoration: underline;
  text-underline-offset: 0.5rem;
  text-decoration-color: #555;
  margin-bottom: 1rem;
  transition: color 0.3s;
  will-change: color;
}
.contact__link:hover {
  color: #ccff00;
}
.contact__links {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}
.contact__footer {
  font-family: var(--font-mono);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 2rem;
  margin-top: 6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 10px;
  color: #555;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .contact__footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}
.contact__footer-col {
  flex: 0 0 auto;
}
.contact__footer-col--left {
  text-align: left;
} 
.contact__footer-col--right {
  text-align: right;
}
@media (max-width: 767px) {
  .contact__footer-col--left,
  .contact__footer-col--right {
    text-align: center;
  }
}
</style>
