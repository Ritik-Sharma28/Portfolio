import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills, skillCategories } from '../../utils/constants/skills'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { staggerContainer, staggerItem } from '../../utils/animations'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="relative">
      <div className="section-divider" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <SectionHeading badge="{ Tech Stack }" title="My Technical" highlight="Arsenal" />

        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-cyan'
                    : 'glass text-text-muted hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  variants={staggerItem}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="glass rounded-2xl p-5 group cursor-default transition-all duration-300 hover:bg-white/[0.06]"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: `${skill.color}15` }}>
                    <Icon size={22} style={{ color: skill.color }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-0.5">{skill.name}</h3>
                  <p className="text-text-muted text-xs mb-3">{skill.category}</p>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden mb-2">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="text-xs font-mono" style={{ color: skill.color }}>{skill.label}</p>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
