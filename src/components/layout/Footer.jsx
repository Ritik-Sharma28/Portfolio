import { navLinks } from '../../utils/constants/navLinks'
import { socials } from '../../utils/constants/socials'
import { projects } from '../../utils/constants/projects'
import ScrollReveal from '../ui/ScrollReveal'

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#020509] relative" role="contentinfo">
      {/* Gradient top border */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, #22d3ee 0%, transparent 50%, #8b5cf6 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1 — Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-display font-bold gradient-text">
                  RS
                </span>
              </div>
              <p className="text-white font-display font-semibold text-lg mb-2">
                Ritik Sharma
              </p>
              <p className="text-text-secondary text-sm italic mb-6 max-w-xs">
                &ldquo;Think from first principles, build from the ground up.&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <span className="available-dot" />
                <span className="text-accent-emerald text-sm font-medium">
                  Available for Opportunities
                </span>
              </div>
            </div>

            {/* Column 2 — Navigate */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider uppercase">
                Navigate
              </h4>
              <div className="h-px bg-white/10 mb-4 w-12" />
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-text-secondary text-sm hover:text-accent-cyan transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Projects */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider uppercase">
                Projects
              </h4>
              <div className="h-px bg-white/10 mb-4 w-12" />
              <ul className="space-y-2.5">
                {projects.map((project) => (
                  <li key={project.id}>
                    <a
                      href={project.live || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary text-sm hover:text-accent-cyan transition-colors duration-300"
                    >
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Connect */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider uppercase">
                Connect
              </h4>
              <div className="h-px bg-white/10 mb-4 w-12" />
              <ul className="space-y-2.5">
                {socials.slice(0, 4).map((social) => {
                  const Icon = social.icon
                  return (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary text-sm hover:text-accent-cyan
                                   transition-colors duration-300 inline-flex items-center gap-2"
                        aria-label={`${social.name} profile`}
                      >
                        <Icon size={14} />
                        {social.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
            <p>© 2025 Ritik Sharma · All rights reserved</p>
            <p className="text-xs">Built with React · Tailwind CSS · Framer Motion</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-accent-cyan hover:text-accent-purple transition-colors duration-300
                         font-medium inline-flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
