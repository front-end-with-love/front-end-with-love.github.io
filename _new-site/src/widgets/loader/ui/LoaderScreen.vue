<script setup lang="ts">
/** Full-screen loader with progress; hides when loaded. */
import { useLoader } from '@/features/loader'
const { progress, loaded } = useLoader()
</script>

<template>
  <div class="loader-screen" :class="{ loaded }" data-testid="loader">
    <div class="loader-screen__bar">
      <p class="loader-screen__title" role="status" aria-live="polite">LOADING</p>
      <div class="loader-screen__counter">{{ progress }}%</div>
    </div>
  </div>
</template>

<style scoped>
.loader-screen {
  position: fixed;
  inset: 0;
  background: #ccff00;
  z-index: 10000;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  transform-origin: top;
  transition: transform 1s cubic-bezier(0.87, 0, 0.13, 1);
  will-change: transform;
}
.loader-screen.loaded {
  transform: scaleY(0);
}
.loader-screen__bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.loader-screen__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1;
  color: #050505;
}
.loader-screen__counter {
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 700;
  color: #050505;
}
</style>
