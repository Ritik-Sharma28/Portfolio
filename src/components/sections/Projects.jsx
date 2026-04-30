import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects, techColors } from '../../utils/constants/projects'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { staggerContainer, staggerItem } from '../../utils/animations'

function TechBadge({ tech }) {
  const colors = techColors[tech] || techColors.default
  return (
    <span
      className="px-2.5 py-1 rounded-full text-xs font-medium border"
      style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}
    >
      {tech}
    </span>
  )
}

function FeaturedCard({ project }) {
  return (
    <ScrollReveal className="mb-8">
      <motion.div
        whileHover={{ y: -6 }}
        className="glass rounded-3xl overflow-hidden border border-accent-cyan/10 group"
      >
        <div className="p-1.5">
          <div className="flex items-center gap-2 px-4 pt-3 pb-2">
            <span className="text-xs font-mono text-text-muted uppercase tracking-widest">Featured Project</span>
            <span className="ml-auto px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-medium border border-accent-cyan/20">⭐ Featured</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative overflow-hidden aspect-video lg:aspect-auto">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          </div>
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-accent-cyan text-sm font-medium mb-4">{project.tagline}</p>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">{project.description}</p>
            <div className="space-y-2 mb-6">
              {project.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span>{f.icon}</span>
                  <span className="text-text-secondary">{f.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => <TechBadge key={t} tech={t} />)}
            </div>
            <div className="flex items-center gap-4">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white text-sm font-semibold hover:shadow-cyan transition-shadow">
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-text-secondary text-sm font-medium hover:text-white border border-white/10 hover:border-white/20 transition-colors">
                <Github size={15} /> Source Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(34,211,238,0.15)' }}
      className="glass rounded-2xl overflow-hidden group cursor-default"
    >
      <div className="relative aspect-video overflow-hidden">
        {project.image && (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => <TechBadge key={t} tech={t} />)}
        </div>
      </div>
      <div className="p-5">
        <p className="text-text-muted text-xs font-mono mb-1">Project #{index + 1}</p>
        <h3 className="font-display text-lg font-bold text-white mb-1">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(3).map((t) => <TechBadge key={t} tech={t} />)}
        </div>
        <div className="flex items-center gap-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent-cyan text-sm font-medium hover:underline">
              <ExternalLink size={14} /> Live
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-text-secondary text-sm font-medium hover:text-white transition-colors">
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative">
      <div className="section-divider" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <SectionHeading
          badge="{ Featured Work }"
          title="Things I've"
          highlight="Built"
        />
        {featured && <FeaturedCard project={featured} />}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
