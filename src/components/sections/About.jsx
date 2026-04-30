import { motion } from 'framer-motion'
import {
  Building2, Bot, Brain, Swords, Target,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'
import { staggerContainer, staggerItem } from '../../utils/animations'

const focusAreas = [
  { icon: Building2, label: 'Full Stack (MERN)', desc: 'Production-grade web apps' },
  { icon: Bot,       label: 'GenAI & RAG Pipelines', desc: 'LangChain, Groq, Gemini' },
  { icon: Brain,     label: 'DSA: 400+ LeetCode', desc: 'First-principles approach' },
  { icon: Swords,    label: 'Real-time WebSockets', desc: 'Socket.io multiplayer' },

  { icon: Target,    label: 'Competitive Programming', desc: 'CodeChef, Codeforces' },
]

const stats = [
  { value: 400, suffix: '+', label: 'LeetCode Problems' },
  { value: 1605, suffix: '', label: 'CodeChef Rating' },
  { value: 3, suffix: '★', label: 'CodeChef Stars' },
  { value: 3, suffix: '', label: 'Live Projects' },
]


export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-divider" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <SectionHeading
          badge="{ About Me }"
          title="Building the Future,"
          highlight="One Line at a Time."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT — Bio */}
          <ScrollReveal>
            <div className="space-y-5 text-text-secondary leading-relaxed text-base md:text-[1.05rem]">
              <p>
                I&apos;m a Computer Science Engineering student at{' '}
                <span className="text-white font-medium">IET Lucknow (2024–2028)</span>,
                obsessed with software architecture and building production-grade systems
                that solve real problems — not just tutorial projects.
              </p>
              <p>
                I specialize in the{' '}
                <span className="text-accent-cyan">MERN stack</span>,{' '}
                <span className="text-accent-violet">GenAI/RAG pipelines</span>, and
                real-time WebSocket applications. I&apos;ve solved{' '}
                <span className="text-white font-medium">400+ problems</span> on LeetCode
                and actively compete on CodeChef (3★, 1605 rating) and Codeforces.
              </p>
              <p>
                When I&apos;m not building, I&apos;m reverse-engineering how complex systems
                work — Docker internals, Redis eviction policies, vector embedding
                strategies. I believe the best engineers ask{' '}
                <span className="italic text-accent-purple">&quot;why&quot;</span> before
                they ask <span className="italic text-accent-purple">&quot;how.&quot;</span>
              </p>
            </div>
          </ScrollReveal>

          {/* RIGHT — Focus Areas */}
          <ScrollReveal delay={0.2}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {focusAreas.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    variants={staggerItem}
                    className="glass rounded-xl px-5 py-4 flex items-center gap-4
                               group cursor-default transition-all duration-300
                               hover:bg-white/[0.06] hover:border-l-[3px] hover:border-l-accent-cyan
                               hover:pl-[17px]"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(34,211,238,0.1)' }}
                    >
                      <Icon size={20} className="text-accent-cyan" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-text-muted text-xs">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Animated Stats */}
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center group hover:shadow-cyan transition-shadow duration-500"
              >
                <p className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
