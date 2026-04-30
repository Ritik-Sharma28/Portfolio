import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function useAnimatedCounter(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const numericTarget = typeof target === 'number'
      ? target
      : parseInt(String(target).replace(/\D/g, ''), 10)

    if (isNaN(numericTarget) || numericTarget === 0) return

    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      const current = Math.floor(eased * numericTarget)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(numericTarget)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return { count, ref }
}
