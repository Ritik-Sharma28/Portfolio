import { motion } from 'framer-motion'

export default function ScrollReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
