// Hover-trigger: при наведении на любой элемент с классом .hover-trigger на body добавляется класс hover-active, при уходе — снимается. Используется для стилей кастомного курсора (например увеличение кольца).
import { onMounted, onUnmounted } from 'vue'

export function useHoverTrigger() {
  // Храним ссылки на элементы и колбэки, чтобы в onUnmounted снять слушатели
  const listeners: Array<{ el: Element; onEnter: () => void; onLeave: () => void }> = []

  onMounted(() => {
    document.querySelectorAll('.hover-trigger').forEach((el) => {
      const onEnter = () => document.body.classList.add('hover-active')
      const onLeave = () => document.body.classList.remove('hover-active')
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      listeners.push({ el, onEnter, onLeave })
    })
  })

  onUnmounted(() => {
    listeners.forEach(({ el, onEnter, onLeave }) => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    })
  })
}
