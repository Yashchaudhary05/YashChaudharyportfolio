import { useEffect, useRef, useState } from 'react'

/**
 * Hook that counts up from 0 to `end` when the element scrolls into view.
 * Returns [ref, displayValue].
 */
export default function useCountUp(end, duration = 2000) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          const startTime = performance.now()
          const numericEnd = parseInt(end, 10) || 0

          const tick = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * numericEnd))

            if (progress < 1) {
              requestAnimationFrame(tick)
            }
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return [ref, value]
}
