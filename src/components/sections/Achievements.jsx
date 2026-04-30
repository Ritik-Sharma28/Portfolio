import { motion } from 'framer-motion'
import { achievements } from '../../utils/constants/achievements'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { staggerContainer, staggerItem } from '../../utils/animations'

export default function Achievements() {
  return (
    <section id="achievements" className="relative">
      <div className="section-divider" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <SectionHeading badge="{ Recognition }" title="Wins &" highlight="Milestones" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: `0 20px 50px ${a.color}20` }}
              className={`glass rounded-2xl p-6 group cursor-default transition-all duration-300 ${
                a.highlight ? 'md:col-span-2 lg:col-span-1 border-2 border-[#FFD700]/20' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <motion.span
                  className="text-4xl flex-shrink-0"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {a.icon}
                </motion.span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-white text-lg mb-0.5">{a.title}</h3>
                  <p className="font-medium text-sm mb-2" style={{ color: a.color }}>{a.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">{a.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {a.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border" style={{ background: `${a.color}10`, color: a.color, borderColor: `${a.color}30` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
