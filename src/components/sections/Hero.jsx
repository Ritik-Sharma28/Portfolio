import { motion } from 'framer-motion'
import { Play, Mail, Download, ChevronDown } from 'lucide-react'
import TypingEffect from '../ui/TypingEffect'
import Button from '../ui/Button'
import GlowOrb from '../ui/GlowOrb'
import StarField from '../ui/StarField'
import ScrollReveal from '../ui/ScrollReveal'

const quickStats = [
  { value: '400+', label: 'Problems' },
  { value: '3★', label: 'CodeChef' },
  { value: '3', label: 'Live Projects' },
  { value: 'MERN', label: 'Full Stack' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden !pt-0 !pb-0"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <StarField count={200} />
      <GlowOrb color="cyan" size={600} x="15%" y="25%" opacity={0.12} />
      <GlowOrb color="violet" size={800} x="85%" y="75%" opacity={0.1} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── LEFT COLUMN — Text ───────────── */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm border border-accent-cyan/20 text-text-secondary mb-6">
                <span>👋</span>
                <span>Hey there, I&apos;m Ritik</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-display font-bold text-white mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              <span className="gradient-text">MERN Stack</span>
              <br />
              Developer.
              <br />
              <span className="text-white">Building </span>
              <span className="gradient-text">GenAI Systems</span>
              <br />
              <span className="text-white">That Matter.</span>
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <TypingEffect />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-slate-400 italic text-base md:text-lg mb-4 max-w-xl mx-auto lg:mx-0"
            >
              <span className="text-accent-cyan">&ldquo;</span>
              I don&apos;t memorize syntax — I think from first principles.
              <span className="text-accent-cyan">&rdquo;</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-slate-300 text-base mb-6 max-w-xl mx-auto lg:mx-0"
            >
              B.Tech CSE @ IET Lucknow | Building production-grade full-stack
              systems & solving 400+ algorithmic challenges with AI-powered tools.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2 rounded-full glass text-sm border border-white/[0.06]"
                >
                  <span className="font-mono font-medium text-accent-cyan">
                    {stat.value}
                  </span>{' '}
                  <span className="text-text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Play size={16} />
                View My Work
              </Button>
              <Button
                variant="secondary"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Mail size={16} />
                Contact Me
              </Button>
              <Button
                variant="tertiary"
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} />
                Download CV
              </Button>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Profile Image ───────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative order-1 lg:order-2 flex-shrink-0"
          >
            {/* Glow behind image */}
            <div
              className="absolute inset-0 -m-8 blur-[80px] opacity-40 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, rgba(139,92,246,0.3) 50%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            {/* Rotating gradient ring */}
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-[3px]"
              style={{
                background: 'conic-gradient(from 0deg, #22d3ee, #8b5cf6, #ec4899, #22d3ee)',
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-bg-primary">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Ritik Sharma — MERN Stack Developer"
                  className="w-full h-full object-cover will-change-transform"
                  loading="eager"
                  width={320}
                  height={320}
                />
              </div>
            </div>

            {/* Floating badges — desktop only */}
            <div className="hidden lg:block">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-4 glass rounded-xl px-3 py-2 text-sm font-medium border border-white/10"
              >
                🚀 MERN Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -left-16 glass rounded-xl px-3 py-2 text-sm font-medium border border-white/10"
              >
                ⭐ 3★ CodeChef
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 right-4 glass rounded-xl px-3 py-2 text-sm font-medium border border-white/10"
              >
                400+ LeetCode
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} className="text-text-muted" />
          </motion.div>
          <span className="text-text-muted text-xs font-medium tracking-wider">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  )
}
