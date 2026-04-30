import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Accelerate towards end
        const increment = prev < 60 ? 2 : prev < 90 ? 3 : 5
        return Math.min(prev + increment, 100)
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-primary"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Subtle scan line */}
      <div className="scan-line" />

      {/* RS Monogram */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="mb-8"
      >
        <span className="text-6xl md:text-7xl font-display font-bold gradient-text select-none">
          RS
        </span>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '200px' }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="h-0.5 rounded-full overflow-hidden bg-white/5 mb-6"
        style={{ width: 200 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #22d3ee, #8b5cf6)',
            transition: 'width 0.1s ease',
          }}
        />
      </motion.div>

      {/* Initializing text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-mono text-sm text-text-muted tracking-wider"
      >
        Initializing...
      </motion.p>
    </motion.div>
  )
}
