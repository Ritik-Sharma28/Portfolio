import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { cpStats } from '../../utils/constants/cpStats'
import SectionHeading from '../ui/SectionHeading'
import AnimatedCounter from '../ui/AnimatedCounter'
import { staggerContainer, staggerItem } from '../../utils/animations'

function ProgressRing({ progress, color, size = 80 }) {
  const strokeWidth = 4
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth={strokeWidth} fill="none" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth={strokeWidth} fill="none"
        strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        strokeDasharray={circumference}
      />
    </svg>
  )
}

function StarsDisplay({ color }) {
  return (
    <div className="flex gap-1 text-3xl" style={{ color }}>
      {[1, 2, 3].map((i) => (
        <motion.span key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}>
          ★
        </motion.span>
      ))}
    </div>
  )
}

export default function CPStats() {
  return (
    <section id="cp-stats" className="relative">
      <div className="section-divider" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <SectionHeading badge="{ Competitive Programming }" title="Where I" highlight="Compete" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cpStats.map((cp) => (
            <motion.div
              key={cp.platform}
              variants={staggerItem}
              whileHover={{ y: -8, borderColor: cp.color, boxShadow: `0 20px 50px ${cp.color}20` }}
              className="glass rounded-2xl p-8 text-center group cursor-default transition-all duration-500 border border-transparent"
            >
              {/* Platform visual */}
              <div className="flex justify-center mb-4">
                {cp.visual === 'stars' ? (
                  <StarsDisplay color={cp.color} />
                ) : (
                  <ProgressRing progress={cp.progress} color={cp.color} />
                )}
              </div>

              {/* Platform name */}
              <h3 className="font-display font-bold text-white text-lg mb-4 tracking-wide">{cp.platform}</h3>

              {/* Stat */}
              <p className="text-4xl font-display font-bold mb-1" style={{ color: cp.color }}>
                <AnimatedCounter target={cp.numericStat} suffix={cp.stat.includes('+') ? '+' : ''} />
              </p>
              <p className="text-text-muted text-sm mb-3">{cp.statLabel}</p>

              {/* Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ background: cp.bgColor, color: cp.color }}>
                {cp.badge}
              </span>

              {/* Link */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={cp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline" style={{ color: cp.color }}>
                  View Profile <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
