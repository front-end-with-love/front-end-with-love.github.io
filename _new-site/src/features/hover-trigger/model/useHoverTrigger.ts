/** Hover trigger: add/remove body.hover-active for elements with .hover-trigger. */
import { onMounted, onUnmounted } from 'vue'

export function useHoverTrigger() {
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
