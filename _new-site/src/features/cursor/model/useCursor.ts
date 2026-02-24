/** Custom cursor: dot follows mouse, ring lerps; hide on touch devices. */
import { onMounted, onUnmounted } from 'vue'

export function useCursor() {
  let raf = 0
  let mouseX = 0
  let mouseY = 0
  let ringX = 0
  let ringY = 0
  let dotEl: HTMLElement | null = null
  let ringEl: HTMLElement | null = null

  function onMove(e: MouseEvent) {
    mouseX = e.clientX
    mouseY = e.clientY
    if (dotEl) {
      dotEl.style.left = `${mouseX}px`
      dotEl.style.top = `${mouseY}px`
    }
  }

  function animate() {
    ringX += (mouseX - ringX) * 0.15
    ringY += (mouseY - ringY) * 0.15
    if (ringEl) {
      ringEl.style.left = `${ringX}px`
      ringEl.style.top = `${ringY}px`
    }
    raf = requestAnimationFrame(animate)
  }

  onMounted(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return
    dotEl = document.querySelector('.cursor-dot')
    ringEl = document.querySelector('.cursor-ring')
    if (!dotEl || !ringEl) return
    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', onMove)
    cancelAnimationFrame(raf)
  })
}
