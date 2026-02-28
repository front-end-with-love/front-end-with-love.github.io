// Hover-trigger: при наведении на любой элемент с классом .hover-trigger на body добавляется класс hover-active, при уходе — снимается. Делегирование на document для работы с элементами внутри reveal/opacity.
import { onMounted, onUnmounted } from 'vue'

export function useHoverTrigger() {
  let onOver: (e: MouseEvent) => void
  let onOut: (e: MouseEvent) => void

  onMounted(() => {
    onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.('.hover-trigger')) document.body.classList.add('hover-active')
    }
    onOut = (e: MouseEvent) => {
      const from = (e.target as Element)?.closest?.('.hover-trigger')
      const to = (e.relatedTarget as Element)?.closest?.('.hover-trigger')
      if (from && !to) document.body.classList.remove('hover-active')
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
  })

  onUnmounted(() => {
    document.removeEventListener('mouseover', onOver)
    document.removeEventListener('mouseout', onOut)
  })
}
