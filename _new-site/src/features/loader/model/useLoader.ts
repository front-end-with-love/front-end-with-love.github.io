// Лоадер: реактивный progress 0–100% (увеличивается по таймеру), по достижении 100% через 600 ms выставляется loaded.
import { ref, onMounted, onUnmounted } from 'vue'

export function useLoader() {
  const progress = ref(0)
  const loaded = ref(false)
  let startTimeoutId: ReturnType<typeof setTimeout> | null = null
  let intervalId: ReturnType<typeof setInterval> | null = null
  let doneTimeoutId: ReturnType<typeof setTimeout> | null = null

  onMounted(() => {
    startTimeoutId = setTimeout(() => {
      startTimeoutId = null
      intervalId = setInterval(() => {
        progress.value = Math.min(100, progress.value + Math.floor(Math.random() * 3) + 1)
        if (progress.value === 100) {
          if (intervalId) clearInterval(intervalId)
          intervalId = null
          doneTimeoutId = setTimeout(() => {
            doneTimeoutId = null
            loaded.value = true
          }, 600)
        }
      }, 40)
    }, 200)
  })

  onUnmounted(() => {
    if (startTimeoutId) clearTimeout(startTimeoutId)
    if (intervalId) clearInterval(intervalId)
    if (doneTimeoutId) clearTimeout(doneTimeoutId)
  })

  return { progress, loaded }
}
