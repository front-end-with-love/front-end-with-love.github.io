// Скролл к элементу или наверх с кривой как у прелоадера (cubic-bezier 0.87,0,0.13,1), 1.6s по умолчанию.

import { onUnmounted } from 'vue'
import { cubicBezierLoader } from '@/shared'

const DEFAULT_DURATION_MS = 1600
const TOP_OFFSET_REM = 3

export type ScrollToTarget = 'top' | string

export function useScrollTo(options?: { durationMs?: number }) {
  const durationMs = options?.durationMs ?? DEFAULT_DURATION_MS
  let rafId: number | null = null

  onUnmounted(() => {
    if (rafId !== null) cancelAnimationFrame(rafId)
  })

  function scrollToTarget(id: ScrollToTarget): void {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const remPx = typeof document !== 'undefined' ? parseFloat(getComputedStyle(document.documentElement).fontSize) || 16 : 16
    const offsetPx = TOP_OFFSET_REM * remPx

    let targetY: number
    if (id === 'top') {
      targetY = 0
    } else {
      const el = document.getElementById(id)
      if (!el) return
      targetY = el.getBoundingClientRect().top + window.scrollY - offsetPx
    }

    const startY = window.scrollY
    if (reduceMotion || Math.abs(targetY - startY) < 1) {
      window.scrollTo(0, targetY)
      return
    }

    if (rafId !== null) cancelAnimationFrame(rafId)
    const startTime = performance.now()

    function step(now: number) {
      const elapsed = now - startTime
      const t = Math.min(elapsed / durationMs, 1)
      const progress = cubicBezierLoader(t)
      window.scrollTo(0, startY + (targetY - startY) * progress)
      if (t < 1) {
        rafId = requestAnimationFrame(step)
      } else {
        rafId = null
      }
    }
    rafId = requestAnimationFrame(step)
  }

  return { scrollToTarget }
}
