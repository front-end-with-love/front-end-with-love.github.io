// Кастомный курсор: точка следует за мышью мгновенно, кольцо — с плавным догоном (lerp). На touch-устройствах не инициализируется.
import { onMounted, onUnmounted } from 'vue'

export function useCursor() {
  // id кадра requestAnimationFrame — чтобы отменить цикл при размонтировании
  let raf = 0
  // Текущие координаты мыши (обновляются в onMove)
  let mouseX = 0
  let mouseY = 0
  // Текущие координаты кольца — плавно догоняют mouseX/mouseY в animate()
  let ringX = 0
  let ringY = 0
  // Ссылки на DOM-элементы .cursor-dot и .cursor-ring (из App.vue)
  let dotEl: HTMLElement | null = null
  let ringEl: HTMLElement | null = null

  // Обработчик mousemove: запоминаем позицию мыши и сразу двигаем точку (без lerp)
  function onMove(e: MouseEvent) {
    mouseX = e.clientX
    mouseY = e.clientY
    if (dotEl) {
      dotEl.style.left = `${mouseX}px`
      dotEl.style.top = `${mouseY}px`
    }
  }

  // На каждом кадре: кольцо плавно догоняет целевую позицию (линейная интерполяция 15%), затем запрашиваем следующий кадр
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
