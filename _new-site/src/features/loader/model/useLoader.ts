/** Loader: progress 0–100%, then hide and mark loaded. */
import { ref, onMounted } from 'vue'

export function useLoader() {
  const progress = ref(0)
  const loaded = ref(false)

  onMounted(() => {
    const interval = setInterval(() => {
      progress.value = Math.min(100, progress.value + Math.floor(Math.random() * 5) + 2)
      if (progress.value === 100) {
        clearInterval(interval)
        setTimeout(() => {
          loaded.value = true
        }, 500)
      }
    }, 30)
  })

  return { progress, loaded }
}
