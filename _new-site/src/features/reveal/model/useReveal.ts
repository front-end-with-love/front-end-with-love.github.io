// Reveal-анимации: IntersectionObserver следит за контейнерами (selector); при появлении в viewport у .reveal-text внутри добавляется .active с задержкой по очереди.
import { onMounted, onUnmounted } from 'vue'

export function useReveal(selector = '.reveal-trigger') {
  let observer: IntersectionObserver | null = null
  const timeoutIds: ReturnType<typeof setTimeout>[] = []

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement
          const texts = target.querySelectorAll('.reveal-text')
          texts.forEach((el, i) => {
            const id = setTimeout(() => {
              el.classList.add('active')
              el.setAttribute('data-revealed', 'true')
            }, i * 100)
            timeoutIds.push(id)
          })
          observer?.unobserve(target)
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll(selector).forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    timeoutIds.forEach((id) => clearTimeout(id))
    timeoutIds.length = 0
    observer?.disconnect()
  })
}
