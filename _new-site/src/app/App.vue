<script setup lang="ts">
/** Root: noise, cursor, router-view for landing. */
import { ref, onMounted, onUnmounted } from 'vue'

const isTouch = ref(false)
onMounted(() => {
  isTouch.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  if (!isTouch.value) document.body.classList.add('cursor-hidden')
})
onUnmounted(() => {
  document.body.classList.remove('cursor-hidden', 'hover-active')
})
</script>

<template>
  <template v-if="!isTouch">
    <div class="cursor-dot" aria-hidden="true" />
    <div class="cursor-ring" aria-hidden="true" />
  </template>
  <router-view />
</template>
