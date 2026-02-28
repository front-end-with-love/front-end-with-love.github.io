/** Cubic bezier easing: linear time t -> progress. Curve (0.87, 0, 0.13, 1) matches loader transition. */
const X1 = 0.87,
  Y1 = 0,
  X2 = 0.13,
  Y2 = 1

function sample(t: number): { x: number; y: number } {
  const u = 1 - t
  const t2 = t * t
  const t3 = t2 * t
  const u2 = u * u
  return {
    x: 3 * u2 * t * X1 + 3 * u * t2 * X2 + t3,
    y: 3 * u2 * t * Y1 + 3 * u * t2 * Y2 + t3
  }
}

/** Given linear time t in [0,1], returns progress in [0,1] for cubic-bezier(0.87, 0, 0.13, 1). */
export function cubicBezierLoader(t: number): number {
  if (t <= 0) return 0
  if (t >= 1) return 1
  let lo = 0
  let hi = 1
  for (let i = 0; i < 12; i++) {
    const mid = (lo + hi) / 2
    const x = sample(mid).x
    if (x < t) lo = mid
    else hi = mid
  }
  return sample((lo + hi) / 2).y
}
