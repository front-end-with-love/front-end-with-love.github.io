/** Reveal animations: IntersectionObserver adds .active to .reveal-text inside observed elements. */
import { onMounted, onUnmounted } from 'vue'

export function useReveal(selector = '.reveal-trigger') {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement
          const texts = target.querySelectorAll('.reveal-text')
          texts.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('active')
              el.setAttribute('data-revealed', 'true')
            }, i * 100)
          })
          observer?.unobserve(target)
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll(selector).forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
