<script setup lang="ts">
const items = [
  'Interaction Design',
  '•',
  'Frontend Architecture',
  '•',
  'Creative Coding',
  '•',
  'GSAP Animation',
  '•',
  'WebGL Ready',
  '•'
]
</script>

<template>
  <div class="marquee-wrap">
    <div class="marquee-inner">
      <template v-for="(item, i) in items" :key="i">
        <span v-if="item === '•'" class="marquee-inner__dot">{{ item }}</span>
        <span v-else class="marquee-inner__text">{{ item }}</span>
      </template>
      <template v-for="(item, i) in items" :key="`dup-${i}`">
        <span v-if="item === '•'" class="marquee-inner__dot">{{ item }}</span>
        <span v-else class="marquee-inner__text">{{ item }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrap {
  overflow: hidden;
  display: flex;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: #050505;
  transform: rotate(1deg) scale(1.05);
  position: relative;
  z-index: 20;
}
.marquee-inner {
  display: flex;
  white-space: nowrap;
  align-items: center;
  gap: 2rem;
  animation: marquee 20s linear infinite;
}
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
