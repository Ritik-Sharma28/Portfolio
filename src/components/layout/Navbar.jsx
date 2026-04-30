import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../utils/constants/navLinks'
import MobileMenu from './MobileMenu'
import Button from '../ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-primary/85 backdrop-blur-xl border-b border-accent-cyan/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <span className="text-2xl font-display font-bold gradient-text">
                RS
              </span>
              <span className="text-white font-display font-medium hidden sm:block text-sm tracking-wide">
                Ritik Sharma
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                  className="relative px-3 py-2 text-sm font-medium transition-colors duration-300"
                  style={{
                    color: activeSection === link.href ? '#f1f5f9' : '#94a3b8',
                  }}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-cyan"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-sm px-5 py-2"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2 relative z-[60]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-6 bg-white rounded transform transition-all duration-300 origin-center ${
                    mobileOpen ? 'rotate-45 translate-y-[9px]' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                    mobileOpen ? 'scale-x-0 opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white rounded transform transition-all duration-300 origin-center ${
                    mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  )
}
